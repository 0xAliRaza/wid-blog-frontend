import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, switchMap, flatMap, filter, take } from "rxjs/operators";

import { AuthenticationService } from "@admin/_services";
import { User } from "../_models";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }
  private isRefreshingToken = false;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        const errorMessage = err.error.message || err.statusText;
        // Check if unauthorized error was thrown
        if (err.status === 401) {
          return this.handleUnauthorized(request, next);
        }

        return throwError(err);
      })
    );
  }

  /**
   * 
   * @param request HttpRequest<any>
   * @param token token to in Authorization header
   */
  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Accept: `application/json`,
        Authorization: `Bearer ${token}`
      }
    });
  }

  /**
   * This method will called when any api fails due to 401 and calsl for refresh token
   */
  private handleUnauthorized(request: HttpRequest<any>, next: HttpHandler) {
    // If Refresh token request is not already in progress
    if (this.isRefreshingToken) {
      // If token refresh is in progress, we'll wait until it's refreshed
      return this.authenticationService.currentUserSubject
        .pipe(
          filter((user: User) => user.token != null),
          take(1),
          switchMap((user: User) => {
            return next.handle(this.addToken(request, user.token));
          }));
    } else {
      this.isRefreshingToken = true;

      const expiredToken = this.authenticationService.userToken;
      // Set current user token as null so upcoming requests can wait until it's refreshed
      const newUser = this.authenticationService.currentUserValue;
      newUser.token = null;
      this.authenticationService.currentUserSubject.next(newUser);

      return this.authenticationService.refreshToken(expiredToken).pipe(
        // Merge refreshToken and next.handle returned observables
        switchMap((user: User) => {
          if (!!user.token) {
            this.isRefreshingToken = false;
            // Resubmit the request
            return next.handle(this.addToken(request, user.token)).pipe(
              catchError((err2) => {
                return throwError(err2.error.message || err2.statusText);
              })
            );
          } else {
            // Logout if new data was invalid
            this.authenticationService.logout();
            location.reload();
          }
        })
      );

    }
  }

}
