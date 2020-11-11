import {
  trigger,
  transition,
  style,
  animate,
  state,
} from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "admin-side-nav-item",
  templateUrl: "./side-nav-item.component.html",
  styleUrls: ["./side-nav-item.component.scss"],
  animations: [
    trigger("slideInOut", [
      transition(":enter", [
        style({
          display: 'none'
        }),
        animate('.2s ease-in-out', style({display: 'initial'}))
      ]),
      transition(":leave", [
        animate('.2s ease-in-out', style({display: 'none'}))
      ])
    ]),
    ],
})
export class SideNavItemComponent implements OnInit {
  constructor() {}

  @Input() linkText: string;
  @Input() iconLeft: string;
  @Input() toggler: boolean;
  @Input() routeDestination: string;
  isInnerNavOpen = false;

  toggleInnerNav() {
    this.isInnerNavOpen = !this.isInnerNavOpen;
  }

  ngOnInit() {
  }
}
