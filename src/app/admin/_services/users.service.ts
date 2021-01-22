import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../_models";

export class UsersService {
  constructor(private http: HttpClient) {}

  index(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/user`).pipe(
      map((users) => {
        const userModels: User[] = [];
        users.forEach((val: User) => {
          userModels.push(new User(val));
        });
        return userModels;
      })
    );
  }

  get(id: number): Observable<User> {
    return this.http
      .get<User>(`${environment.apiUrl}/user/${id}`)
      .pipe(map((res) => new User(res)));
  }

  create(data): Observable<User> {
    return this.http
      .post<User>(`${environment.apiUrl}/user/create`, data)
      .pipe(map((res) => new User(res)));
  }

  update(id: number, data: any): Observable<User> {
    return this.http
      .put<User>(`${environment.apiUrl}/user/${id}`, data)
      .pipe(map((res) => new User(res)));
  }

  delete(id): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/user/${id}`);
  }
}
