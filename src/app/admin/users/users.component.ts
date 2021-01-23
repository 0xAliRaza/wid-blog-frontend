import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../_models";
import { AuthenticationService } from "../_services";
import { UsersService } from "../_services/users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  currentUser: User;
  constructor(
    private users: UsersService,
    private auth: AuthenticationService
  ) {
    this.users$ = this.users.index();
    this.currentUser = this.auth.currentUserValue;
  }

  isRouteAllowed(model: User): boolean {
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

  ngOnInit() {}
}
