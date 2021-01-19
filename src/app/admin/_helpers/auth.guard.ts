import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthenticationService } from "@admin/_services";

export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      // check if route is restricted by role
      if (
        route.data.roles &&
        route.data.roles.indexOf(currentUser.role) === -1
      ) {
        // role not authorized so redirect to dashboard
        this.router.navigate(["/admin/dashboard"]);
        return false;
      }

      // logged in and authorized so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.authenticationService.logout();
    this.router.navigate(["/admin/login"], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
