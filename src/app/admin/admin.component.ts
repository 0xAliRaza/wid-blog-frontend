import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { User } from "./_models";
import { Router } from "@angular/router";
import { AuthenticationService } from "./_services";
import { Subscription } from "rxjs";
import {
  animate,
  stagger,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
  animations: [
    trigger("slideInOut", [
      transition(":enter", [
        style({ height: 0 }),
        animate(100, style({ height: "*" })),
      ]),
      transition(":leave", [animate(200, style({ height: 0 }))]),
    ]),
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 })),
      ]),
      transition(":leave", [animate(200, style({ opacity: 0 }))]),
    ]),
    trigger("slideInOutFromLeft", [
      transition(":enter", [
        style({
          opacity: "0",
          transform: "translateX(-100%)",
        }),
        animate(
          200,
          style({
            opacity: 1,
            transform: "translateX(0)",
          })
        ),
      ]),
      transition(":leave", [
        animate(200, style({ opacity: 0, transform: "translateX(-100%)" })),
      ]),
    ]),
  ],
})
export class AdminComponent implements OnInit, OnDestroy {
  innerWidth: any;
  sideNavVisible: boolean;
  sideNavFloating = false;
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

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 768) {
      this.sideNavVisible = false;
      this.sideNavFloating = true;
    } else {
      this.sideNavVisible = true;
      this.sideNavFloating = false;
    }
  }

  toggleSideNav() {
    this.sideNavVisible = !this.sideNavVisible;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/admin/login"]);
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 768) {
      this.sideNavVisible = false;
      this.sideNavFloating = true;
    } else {
      this.sideNavVisible = true;
      this.sideNavFloating = false;
    }
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
