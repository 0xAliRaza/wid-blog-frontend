import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SvgIconComponent } from "./svg-icon/svg-icon.component";
import { PopupMsgComponent } from "./popup-msg/popup-msg.component";
import { TogglerDirective } from "./toggler.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [SvgIconComponent, PopupMsgComponent, TogglerDirective],
  exports: [SvgIconComponent, PopupMsgComponent, TogglerDirective],
})
export class SharedModule {}
