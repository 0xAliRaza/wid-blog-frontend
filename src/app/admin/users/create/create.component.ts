import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Role } from "@app/admin/_models";
import { AuthenticationService } from "@app/admin/_services";
import { UsersService } from "@app/admin/_services/users.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit, OnDestroy {
  roles: any[] = [
    {
      name: "Writer",
      tag: Role.Writer,
    },
  ];
  destroyed$ = new Subject<boolean>();
  constructor(
    private auth: AuthenticationService,
    private http: HttpClient,
    private users: UsersService,
    private router: Router
  ) {
    if (this.auth.currentUserValue.isSuperAdmin()) {
      this.roles.push({ name: "admin", tag: Role.Admin });
      this.roles.push({ name: "SuperAdmin", tag: Role.SuperAdmin });
    } else if (this.auth.currentUserValue.isAdmin()) {
      this.roles.push({ name: "admin", tag: Role.Admin });
    }
  }

  onSubmit(value) {
    this.users.create(value).subscribe((user) => {
      this.users.newlyCreatedUser = user;
      this.router.navigate([`admin/user/${user.id}`]);
    });
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
