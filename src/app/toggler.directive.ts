import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appToggler]",
  exportAs: "appToggler",
})
export class TogglerDirective {
  public toggled = false;

  constructor() {}

  @HostListener("click")
  onClick() {
    this.toggled = !this.toggled;
  }
}
