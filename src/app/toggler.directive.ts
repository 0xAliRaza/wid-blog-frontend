import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appToggler]",
  exportAs: "appToggler",
})
export class TogglerDirective {
  public visible = false;

  constructor(private elementRef: ElementRef) { }

  @Input() autoToggle = true;
  @Input() excluded: HTMLElement;

  @HostListener("document:click", ["$event"])
  onDocumentClick(e) {
    const clickedEl = e ? e.target as HTMLElement : false;
    const directiveEl = this.elementRef ? this.elementRef.nativeElement : false;
    if (!clickedEl || !directiveEl) {
      return;
    }
    if (
      directiveEl.contains(clickedEl)
    ) {
      this.toggle();
    } else if (this.autoToggle) {
      if (this.excluded) {
        if (!this.excluded.contains(clickedEl)) {
          this.visible = false;
        }
      } else {
        this.visible = false;
      }
    }
  }

  toggle() {
    this.visible = !this.visible;
  }
}
