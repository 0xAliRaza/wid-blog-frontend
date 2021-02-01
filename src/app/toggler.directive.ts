import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appToggler]",
  exportAs: "appToggler",
})
export class TogglerDirective {
  public visible = false;

  constructor(private element: ElementRef) {}

  @HostListener("click", ['$event'])
  onClick(e) {
    if (this.element.nativeElement.contains(e.target)) {
      this.toggle();
    }
  }

  toggle() {
    this.visible = !this.visible;
  }
}
