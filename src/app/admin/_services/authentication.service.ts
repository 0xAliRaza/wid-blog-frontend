import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError, ObservableInput } from "rxjs";
import { map, tap, first } from "rxjs/operators";
import { environment } from "@environments/environment";
import { User } from "@admin/_models";

@Injectable()
export class AuthenticationService {
  // An rxjs behavior subject which keeps the latest user data stored.
  private currentUserSubject: BehaviorSubject<User>;

  // It's a good practice to not let public code modify
  // -the actual data (currentUserSubject in this case) directly.
  currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    // Get stored user data from local storage and store it to Subject
    this.currentUserSubject = new BehaviorSubject<User>(
      new User(JSON.parse(localStorage.getItem("currentUser")))
    );

    // Convert User Subject to Observable to make it subscribable
    this.currentUser = this.currentUserSubject.asObservable();
  }

  /**
   * Gets logged in user's data.
   *
   * @return Current user data as type User.
   */
  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /**
   * Gets logged in User's authentication token.
   *
   * @return A string containing user token.
   */
  get userToken(): string {
    return this.currentUserValue.token;
  }

  /**
   * Gets the latest user data from API.
   *
   * @return Observable of type User.
   */
  me(): Observable<User> {
    return this.http
      .post(`${environment.apiUrl}/auth/me`, {
        Title: "Getting current user from API",
      })
      .pipe(map((res) => new User(res)));
  }

  /**
   * Submits a http Post request with user credentials to the API
   * and stores the returned user data including JWT.
   *
   * @param email User email to login with.
   * @param password User password.
   *
   * @returns Observable of type User
   */
  login(email: string, password: string): Observable<User> {
    return this.http
      .post(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(
        map((res) => new User(res)),
        // Save the user data as a side effect.
        tap((user: User) => this.storeUserData(user))
      );
  }

  /**
   * Submits a request to the API to get latest user data from currently stored JWT
   * and stores the new data to local storage.
   *
   * @return Latest user data.
   */
  updateUserData(): User {
    // Request user data using currently saved JWT.
    this.me()
      .pipe(
        map((res) => {
          // Convert the response to type `User` and add token to it.
          const user = new User(res);
          user.token = this.userToken;
          return user;
        }),

        // Save the latest user data as a side effect.
        tap((user: User) => this.storeUserData(user))
      )
      .subscribe();

    return this.currentUserValue;
  }

  /**
   * Submits provided user data to `currentUserSubject`.
   *
   * @param user User data to be feeded to subscribers of `currentUserSubject`.
   */
  feedNewUserData(user: User) {
    this.currentUserSubject.next(user);
  }

  /**
   * Refreshes the expired token and return latest user data.
   *
   * @param expiredToken The token that needs to be refreshed.
   *
   * @return An Observable of type User.
   */
  refreshToken(expiredToken: string): Observable<User> {
    return this.http
      .post<User>(
        `${environment.apiUrl}/auth/refresh`,
        {},
        {
          // Add the expired token and other important headers.
          headers: new HttpHeaders({
            Accept: `application/json`,
            "Content-Type": `application/json`,
            Authorization: `Bearer ${expiredToken}`,
          }),
        }
      )
      .pipe(
        map((res) => new User(res)),
        tap((user: User) => this.storeUserData(user))
      );
  }

  /**
   * Stores provided user to local storage and feeds it
   * to the subscribers of `currentUserSubject`.
   *
   * @param user User data that needs to be stored.
   */
  private storeUserData(user: User) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  /**
   * Sends a request to APi to logout the current user and
   * deletes the saved user data from local storage.
   *
   * @return void
   */
  logout(): void {
    // Send a http request to invalidate current user token.
    this.http.post(`${environment.apiUrl}/auth/logout`, {}).subscribe();

    // Remove current user data from the local storage
    // - and feed null to subscribers of the Subject.
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
