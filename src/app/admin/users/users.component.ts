import { Component, OnDestroy, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { User } from "../_models";
import { AuthenticationService } from "../_services";
import { UsersService } from "../_services/users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  currentUser: User;
  destroyed$ = new Subject<boolean>();
  constructor(
    private usersService: UsersService,
    private auth: AuthenticationService
  ) {
    this.usersService.models$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((users: User[]) => {
        this.users = users;
      });
    this.currentUser = this.auth.currentUserValue;
  }

  canUserEdit(model: User): boolean {
    if (!model) return;
    if (this.auth.currentUserValue.isSuperAdmin()) {
      return true;
    } else if (this.auth.currentUserValue.isAdmin() && !model.isSuperAdmin()) {
      return true;
    } else if (
      this.auth.currentUserValue.isWriter() &&
      this.auth.currentUserValue.id === model.id
    ) {
      return true;
    }
    return false;
  }
  onRefresh() {
    this.usersService.pull();
  }
  ngOnInit() {}
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
