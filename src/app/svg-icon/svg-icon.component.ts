import { Component, Input } from "@angular/core";

@Component({
  selector: "svg-icon",
  // SVG elements don't have properties, therefore attribute binding is needed
  // https://stackoverflow.com/a/35082700
  template: `
    <svg>
      <use attr.xlink:href="assets/symbol-defs.svg#{{ icon }}"></use>
    </svg>
  `,
  styleUrls: ["./svg-icon.component.scss"],
})
export class SvgIconComponent {
  @Input() icon: string;
}
