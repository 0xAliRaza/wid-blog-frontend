import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Role, User } from "@app/admin/_models";
import { AuthenticationService } from "@app/admin/_services";
import { UsersService } from "@app/admin/_services/users.service";
import { Subject } from "rxjs";
import { catchError } from "rxjs/operators";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit, OnDestroy {
  errors: any;
  loading = false;
  roles: any[] = [
    {
      name: "Writer",
      tag: Role.Writer,
    },
  ];
  destroyed$ = new Subject<boolean>();
  constructor(
    private auth: AuthenticationService,
    private users: UsersService,
    private router: Router
  ) {
    if (this.auth.currentUserValue.isSuperAdmin()) {
      this.roles.push({ name: "Admin", tag: Role.Admin });
      this.roles.push({ name: "SuperAdmin", tag: Role.SuperAdmin });
    } else if (this.auth.currentUserValue.isAdmin()) {
      this.roles.push({ name: "Admin", tag: Role.Admin });
    }
  }

  onSubmit(value) {
    this.loading = true;
    this.users.create(value)
      .pipe(catchError(err => {
        this.errors = err;
        this.loading = false;
        return err;
      }))
      .subscribe((user: User) => {
        this.loading = false;
        this.users.pushModel(user);
        this.router.navigate([`admin/user/${user.id}`]);
      });
  }

  ngOnInit() { }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
