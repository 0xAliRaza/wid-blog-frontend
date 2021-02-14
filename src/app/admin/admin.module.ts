import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AuthGuard } from "./_helpers/auth.guard";
import { LoginComponent } from "./login/login.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { AuthenticationService, PostsService } from "./_services";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditorModule, TINYMCE_SCRIPT_SRC } from "@tinymce/tinymce-angular";
import { SharedModule } from "@app/shared-module";
import { NgxPaginationModule } from "ngx-pagination";
import { NgSelectModule } from "@ng-select/ng-select";
import { UsersService } from "./_services/users.service";

import {
  PostsComponent,
  CreateComponent as PostsCreateComponent,
  EditComponent as PostsEditComponent,
  EditorComponent as PostsEditorComponent,
} from "./posts";
import {
  UsersComponent,
  EditComponent as UsersEditComponent,
  CreateComponent as UsersCreateComponent,
  FormComponent as UsersFormComponent,
} from "./users";
import { SettingComponent } from "./setting/setting.component";
import { TagsComponent } from "./tags/tags.component";
import { TagsService } from "./_services/tags.service";
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    PostsComponent,
    PostsCreateComponent,
    PostsEditComponent,
    PostsEditorComponent,
    UsersComponent,
    UsersEditComponent,
    UsersCreateComponent,
    UsersFormComponent,
    SettingComponent,
    TagsComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    SharedModule,
    EditorModule,
    NgSelectModule,
  ],
  providers: [
    AuthenticationService,
    PostsService,
    UsersService,
    TagsService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: TINYMCE_SCRIPT_SRC, useValue: "tinymce/tinymce.min.js" },
  ],
})
export class AdminModule {}
