import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

@Component({
  selector: "admin-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
  animations: [
    trigger("slideInOut", [
      state(
        "in",
        style({
          opacity: "1",
          visibility: "visible",
          transform: "translateX(0)",
          position: "initial",
        })
      ),
      state(
        "out",
        style({
          opacity: "0",
          visibility: "hidden",
          transform: "translateX(-100%)",
        })
      ),
      state(
        "fixed",
        style({
          opacity: "1",
          visibility: "visible",
          transform: "translateX(0)",
          position: "fixed",
        })
      ),
      transition("in <=> out", animate(".2s ease-in-out")),
      transition("* => fixed", animate(".2s ease-in-out")),
    ]),
  ],
})
export class SideNavComponent implements OnInit, AfterViewInit {
  @Input() sideNavVisible: boolean;

  innerWidth: any;

  constructor() {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  ngAfterViewInit() {}
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
}
