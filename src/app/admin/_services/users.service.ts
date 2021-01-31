import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { User } from "../_models";
import { CRUD } from "./crud";

export class UsersService extends CRUD<User> {

  models$: BehaviorSubject<User[]> = new BehaviorSubject([])

  constructor(private httpClient: HttpClient) {
    super(`${environment.apiUrl}/user`, httpClient, User);
    this.pull();
  }
}
