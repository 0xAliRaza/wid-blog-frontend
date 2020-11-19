import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError, ObservableInput } from "rxjs";
import { map, catchError, tap, first } from "rxjs/operators";
import { environment } from "@environments/environment";
import { User } from "@admin/_models";
import { AdminModule } from "../admin.module";
import * as jwt_decode from "jwt-decode";

export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public me(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/me`, {
      Title: "Getting current user from API",
    });
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get getToken(): string {
    return this.currentUserValue.token;
  }

  public isTokenExpired(): boolean {
    if (
      Math.floor(new Date().getTime() / 1000) >=
      jwt_decode(this.currentUserValue.token).exp
    ) {
      return true;
    }
    return false;
  }

  // store jwt token in local storage to keep user logged in between page refreshes
  storeUserData(user: User) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(map((res) => this.storeUserData(res)));
  }

  updateUserData() {
    this.me()
      .pipe(first())
      .pipe(
        map((user: User) => {
          user.token = this.getToken;
          return user;
        })
      )
      .subscribe((res) => this.storeUserData(res));
    return this.currentUserValue;
  }

  refreshToken(): Observable<any> {
    return this.http
      .post<User>(
        `${environment.apiUrl}/auth/refresh`,
        {
          title: "Refresh token request!",
        },
        {
          // Add the expired token
          headers: new HttpHeaders({
            Accept: `application/json`,
            "Content-Type": `application/json`,
            Authorization: `Bearer ${this.getToken}`,
          }),
        }
      )
      .pipe(tap((res: User) => this.storeUserData(res)));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
