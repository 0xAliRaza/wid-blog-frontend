import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, switchMap, flatMap } from "rxjs/operators";

import { AuthenticationService } from "@admin/_services";
import { User } from "../_models";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        let errorMessage = "Unknown error occurred.";
        if (err.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = err.error.message || err.statusText;
        } else {
          // server-side error
          errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
        }
        // Check if unauthorized error was thrown
        if (err.status === 401) {
          if (errorMessage === "Token has expired") {
            // Update expired token and emit new data

            return this.authenticationService.refreshToken().pipe(
              // Merge refreshToken and next.handle returned observables
              flatMap((user: User) => {
                if (!!user.token) {
                  // Add updated token to request headers
                  request = request.clone({
                    setHeaders: {
                      Accept: `application/json`,
                      // "Content-Type": `application/json`,
                      Authorization: `Bearer ${user.token}`,
                    },
                  });

                  // Resubmit the request
                  return next.handle(request).pipe(
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
          // auto logout if 401 response returned from api
          this.authenticationService.logout();
          location.reload();
        }

        // Check if CRUD error
        // if (err.status === 422) {
        //   // Return the whole error instance to get errors[]
        //   return throwError(err);
        // }

        return throwError(err);
      })
    );
  }
}
