import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminModule } from "./admin/admin.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { SlugifyPipe } from "./slugify.pipe";
import { NgSelectModule } from "@ng-select/ng-select";
import { SharedModule } from "./shared-module";
@NgModule({
  declarations: [AppComponent, SlugifyPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    BrowserAnimationsModule,
    NgSelectModule,
    SharedModule,
  ],
  providers: [SlugifyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
