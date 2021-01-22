import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../_models";
import { UsersService } from "../_services/users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private users: UsersService) {
    this.users$ = this.users.index();
  }

  ngOnInit() {}
}
