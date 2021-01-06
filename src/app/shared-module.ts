import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SvgIconComponent } from "./svg-icon/svg-icon.component";
import { PopupMsgComponent } from "./popup-msg/popup-msg.component";
import { TogglerDirective } from "./toggler.directive";
import { SlugifyPipe } from "./slugify.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [SvgIconComponent, PopupMsgComponent, TogglerDirective, SlugifyPipe],
  exports: [SvgIconComponent, PopupMsgComponent, TogglerDirective, SlugifyPipe],
  providers: [SlugifyPipe]
})
export class SharedModule {}
