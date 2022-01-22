import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, switchMap, filter, take } from "rxjs/operators";

import { AuthenticationService } from "@admin/_services";
import { User } from "../_models";

/**
 * Catches errors and if the error is related
 * token expiry then refreshes the current user token.
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  // A variable to determine if the interceptor is currently
  // - refreshing a user token or not.
  private isRefreshingToken = false;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        // Check if unauthorized error was thrown
        if (err.status === 401) {
          return this.handleUnauthorized(request, next, err);
        }

        return throwError(err);
      })
    );
  }

  /**
   * Adds jwt token a http request for authorization along
   * with Accept header.
   *
   * @param request Http request to add token to.
   * @param token Token to be added to the request.
   */
  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Accept: `application/json`,
        Authorization: `Bearer ${token}`,
      },
    });
  }

  /**
   * Refreshes expired token and continues the requests.
   *
   * @param request Request in which error has occurred.
   * @param next Handler to call when done.
   * @param error Forwarded error.
   */
  private handleUnauthorized(
    request: HttpRequest<any>,
    next: HttpHandler,
    error: HttpErrorResponse | any
  ) {
    if (this.isRefreshingToken) {
      // If token refresh is in progress, we'll wait until it's refreshed
      return this.authenticationService.currentUser.pipe(
        filter((user: User) => user.token != null),
        take(1),
        switchMap((user: User) => {
          return next.handle(this.addToken(request, user.token));
        })
      );
    } else if (
      this.authenticationService.currentUserValue &&
      this.authenticationService.userToken
    ) {
      this.isRefreshingToken = true;

      const expiredToken = this.authenticationService.userToken;
      // Set current user token as null so upcoming requests can wait until it's refreshed
      const newUser = this.authenticationService.currentUserValue;
      newUser.token = null;
      this.authenticationService.feedNewUserData(newUser);

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
    } else {
      return throwError(error);
    }
  }
}
