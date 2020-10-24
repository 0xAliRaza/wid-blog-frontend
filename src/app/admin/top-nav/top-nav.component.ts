import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "admin-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"],
})
export class TopNavComponent implements OnInit {
  constructor() {}

  @Output() toggleSideNav = new EventEmitter<boolean>();

  sideNavEmit() {
    this.toggleSideNav.emit(true);
  }
  ngOnInit() {}
}
