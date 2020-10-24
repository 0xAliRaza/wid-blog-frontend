import {
  Component,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { User } from "./_models";
import { Router } from "@angular/router";
import { AuthenticationService } from "./_services";
import { Subscription } from "rxjs";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit, OnDestroy {
  innerWidth: any;
  sideNavVisible: boolean;
  currentUser: User;
  private authSubscription: Subscription;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authSubscription = this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  toggleSideNav() {
    this.sideNavVisible = !this.sideNavVisible;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/admin/login"]);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
