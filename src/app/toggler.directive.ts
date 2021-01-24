import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appToggler]",
  exportAs: "appToggler",
})
export class TogglerDirective {
  public visible = false;

  constructor() {}

  @HostListener("click")
  onClick() {
    this.toggle();
  }

  toggle() {
    this.visible = !this.visible;
  }
}
