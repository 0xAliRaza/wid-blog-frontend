import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Role, User } from "@app/admin/_models";
import { AuthenticationService } from "@app/admin/_services";
import { UsersService } from "@app/admin/_services/users.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

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

  constructor(
    private users: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticationService
  ) {
    if (this.auth.currentUserValue.isSuperAdmin()) {
      this.roles.push({ name: "admin", tag: Role.Admin });
      this.roles.push({ name: "SuperAdmin", tag: Role.SuperAdmin });
    } else if (this.auth.currentUserValue.isAdmin()) {
      this.roles.push({ name: "admin", tag: Role.Admin });
    }
  }

  onSubmit(value) {
    this.users.update(this.user.id, value).subscribe((user) => {
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
    this.users.delete(this.user.id).subscribe((res: boolean) => {
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
            this.router.navigate(["admin"]);
          }

          if (
            this.users.newlyCreatedUser &&
            this.users.newlyCreatedUser.id === Number(params.id)
          ) {
            this.user = this.users.newlyCreatedUser;
            this.users.newlyCreatedUser = undefined;
          } else {
            const userModel = this.users.getModel(params.id);
            if (userModel && userModel.exists) {
              this.user = userModel;
            } else {
              this.users.get(params.id).subscribe((user: User) => {
                if (user.exists) {
                  this.user = user;
                }
              });
            }
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
