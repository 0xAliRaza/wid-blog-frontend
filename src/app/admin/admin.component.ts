import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { User } from "./_models";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "./_services";
import { Subject, Subscription } from "rxjs";
import {
  animate,
  stagger,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { takeUntil } from "rxjs/operators";

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
  destroyed$: Subject<boolean> = new Subject();
  innerWidth: any;
  sideNavVisible: boolean;
  sideNavFloating = false;
  currentUser: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthenticationService
  ) {
    this.auth.currentUser
      .pipe(takeUntil(this.destroyed$))
      .subscribe((x) => (this.currentUser = x));
    // this.route.quer
    //   .pipe(takeUntil(this.destroyed$))
    //   .subscribe(params => {
    //     console.log(params);
    //     if (params['type']) {
    //       debugger;

    //     }
    //   })
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
    this.auth.logoutServer();
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
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
