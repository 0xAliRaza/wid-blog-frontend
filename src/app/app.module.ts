import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminModule } from "./admin/admin.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { SlugifyPipe } from './slugify.pipe';
@NgModule({
  declarations: [AppComponent, SlugifyPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [SlugifyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
