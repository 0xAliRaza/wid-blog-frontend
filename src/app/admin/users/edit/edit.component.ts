import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Role, User } from "@app/admin/_models";
import { AuthenticationService } from "@app/admin/_services";
import { UsersService } from "@app/admin/_services/users.service";
import { Subject } from "rxjs";
import { catchError, takeUntil } from "rxjs/operators";

@Component({
  selector: "admin-user-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit, OnDestroy {
  roles: any[] = [
    {
      name: "Writer",
      tag: Role.Writer,
    },
  ];
  destroyed$ = new Subject<boolean>();
  user: User;
  errors: any;
  successMessages: string[] = [];
  loading = false;

  constructor(
    private users: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticationService
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
    this.users.update(this.user.id, value)
      .pipe(catchError(err => {
        this.errors = err;
        this.loading = false;
        return err;
      }))
      .subscribe((user: User) => {
        this.successMessages.push('User was updated successfully.');
        this.loading = false;
        if (this.auth.currentUserValue.id === user.id) {
          this.auth.updateUserData();
        }
        this.user = user;
      });
  }

  onDelete() {
    if (!this.user.exists) {
      return;
    }
    this.users.delete(this.user.id)
      .pipe(catchError(err => {
        this.errors = err;
        this.loading = false;
        return err;
      }))
      .subscribe((res: boolean) => {
        if (res === true) {
          this.router.navigate(["admin/user"]);
        }
      });
  }

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.destroyed$))
      .subscribe((params: Params) => {
        if (!!params.id) {
          if (
            this.auth.currentUserValue.isWriter() &&
            +params.id !== this.auth.currentUserValue.id
          ) {
            this.router.navigate(["admin/user"]);
          }

          this.users.find(params.id).then((val: User) => {
            this.user = val;
          }, () => {
            this.router.navigate(["admin/user"]);
          });
        }
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
