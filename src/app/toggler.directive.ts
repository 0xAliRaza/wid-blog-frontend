import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[appToggler]",
  exportAs: "appToggler",
})
export class TogglerDirective {
  public el: ElementRef;
  public visible = false;

  constructor(private elementRef: ElementRef) {}

  @Input() autoToggle = true;

  @HostListener("document:click", ["$event"])
  onDocumentClick(e) {
    const targetElement = e.target as HTMLElement;
    if (
      targetElement &&
      this.elementRef.nativeElement &&
      this.elementRef.nativeElement.contains(targetElement)
    ) {
      this.toggle();
    } else if (this.autoToggle) {
      this.visible = false;
    }
  }

  toggle() {
    this.visible = !this.visible;
  }
}
