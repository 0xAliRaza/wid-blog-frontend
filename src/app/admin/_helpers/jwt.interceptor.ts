import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { AuthenticationService } from "@admin/_services";
import { environment } from "@environments/environment";
import {
  flatMap,
  map,
  mergeMap,
  catchError,
  switchMap,
  concatMap,
  tap,
} from "rxjs/operators";
import { User } from "../_models";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    if (!!this.currentUser && this.currentUser.token) {
      request = this.cloneRequest(request);
    }

    return next.handle(request);
  }

  private cloneRequest(request: HttpRequest<any>) {
    return request.clone({
      setHeaders: {
        Accept: `application/json`,
        // "Content-Type": `application/json`,
        Authorization: `Bearer ${this.currentUser.token}`,
      },
    });
  }

  private get currentUser() {
    return this.authenticationService.currentUserValue;
  }
}
