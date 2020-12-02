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
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TopNavItemComponent } from './top-nav/top-nav-item/top-nav-item.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavItemComponent } from './side-nav/side-nav-item/side-nav-item.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditorComponent } from './posts/create/editor/editor.component';
import { CreateComponent } from './posts/create/create.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    PostsComponent,
    SvgIconComponent,
    TopNavComponent,
    TopNavItemComponent,
    SideNavComponent,
    SideNavItemComponent,
    EditorComponent,
    CreateComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule, EditorModule, NgSelectModule],
  providers: [
    AuthenticationService,
    PostsService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
})
export class AdminModule {}
