import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { PostsComponent } from "./posts/posts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AuthGuard } from "./_helpers/auth.guard";
import { LoginComponent } from "./login/login.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { AuthenticationService } from "./_services";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    PostsComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
  providers: [
    AuthenticationService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class AdminModule {}
