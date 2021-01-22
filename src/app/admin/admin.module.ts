import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { PostsComponent } from "./posts/posts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
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
import { CreateComponent } from './posts/create/create.component';
import { EditComponent } from './posts/edit/edit.component';
import { EditorComponent } from "./posts/editor/editor.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { UsersComponent } from './users/users.component';
import { UsersService } from "./_services/users.service";

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    PostsComponent,
    CreateComponent,
    EditComponent,
    EditorComponent,
    UsersComponent
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
    NgSelectModule
  ],
  providers: [
    AuthenticationService,
    PostsService,
    UsersService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: TINYMCE_SCRIPT_SRC, useValue: "tinymce/tinymce.min.js" },
  ],
})
export class AdminModule {}
