import { Component, Input, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
@Component({
  selector: "admin-top-nav-item",
  templateUrl: "./top-nav-item.component.html",
  styleUrls: ["./top-nav-item.component.scss"],
  animations: [
    trigger("insertRemoveDropdown", [
      // state(
      //   "inserted",
      //   style({
      //     visibility: "visible",
      //     opacity: 1,
      //   })
      // ),
      // state(
      //   "closed",
      //   style({
      //     visibility: "hidden",
      //     opacity: 0,
      //   })
      // ),
      transition(":enter", [
        style({ opacity: 0 }),
        animate(".1s", style({ opacity: 1 })),
      ]),
      transition(":leave", [animate(".1s", style({ opacity: 0 }))]),
    ]),
  ],
})
export class TopNavItemComponent implements OnInit {
  constructor() {}
  @Input() linkText: string;
  @Input() linkDestination: string;
  @Input() iconLeft: string;
  @Input() iconRight: string;
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  ngOnInit() {}
}
