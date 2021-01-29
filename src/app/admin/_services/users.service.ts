import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { User } from "../_models";

export class UsersService {
  users: BehaviorSubject<User[]> = new BehaviorSubject([]);

  newlyCreatedUser: User;

  constructor(private http: HttpClient) {
    this.pullUsers();
  }

  pullUsers() {
    this.index().subscribe();
  }

  index(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/user`).pipe(
      map((users) => {
        const userModels: User[] = [];
        users.forEach((val: User) => {
          userModels.push(new User(val));
        });
        return userModels;
      }),
      tap((users) => {
        this.users.next(users);
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
    return this.http.put<User>(`${environment.apiUrl}/user/${id}`, data).pipe(
      map((res) => new User(res)),
      tap((user: User) => this.pushModel(user))
    );
  }

  delete(id): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/user/${id}`);
  }

  getModel(id: number): User | null {
    if (this.users.value.length == 0) {
      return;
    }
    let filtered = null;
    this.users.value.forEach((user: User) => {
      filtered = user;
    });
    return filtered;
  }

  pushModel(user: User, i?: number) {
    if (this.users.value.length == 0) {
      return;
    }
    const users = this.users.value;
    if (i) {
      users[i] = user;
    } else {
      users.push(user);
    }
    this.users.next(users);
  }

  deleteModel(i: number) {
    if (this.users.value.length == 0) {
      return;
    }
    const users = this.users.value;
    users.splice(i, 1);
    this.users.next(users);
  }
}
