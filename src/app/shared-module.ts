import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { PopupMsgComponent } from './popup-msg/popup-msg.component';

@NgModule({
    imports: [
        CommonModule
     ],
    declarations: [
        SvgIconComponent,
        PopupMsgComponent
    ],
    exports: [
        SvgIconComponent,
        PopupMsgComponent
    ]
})
export class SharedModule {}