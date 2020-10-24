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
      state(
        "in",
        style({
          visibility: "visible",
          opacity: 1,
          transform: "translateY(0)",
        })
      ),
      state(
        "out",
        style({
          visibility: "hidden",
          opacity: 0,
          transform: "translateY(-100%)",
        })
      ),
      transition(":enter", [
        style({
          transform: 'translateY(-100%)'
        }),
        animate('.2s ease-in-out', style({transform: 'translateY(0)'}))
      ]),
      transition(":leave", [
        animate('.2s ease-in-out', style({transform: 'translateY(-100%)'}))
      ])
    ]),
  ],
})
export class SideNavItemComponent implements OnInit {
  constructor() {}

  @Input() linkText: string;
  @Input() iconLeft: string;
  @Input() toggler: boolean;
  isInnerNavOpen = false;

  toggleInnerNav() {
    this.isInnerNavOpen = !this.isInnerNavOpen;
  }

  ngOnInit() {
  }
}
