import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthenticationService } from "@admin/_services";
import { map } from "rxjs/operators";
import { User } from "../_models";

export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser && this.currentUser.token) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.authenticationService.logout();
    this.router.navigate(["/admin/login"], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }

  get currentUser() {
    return this.authenticationService.currentUserValue;
  }
}
