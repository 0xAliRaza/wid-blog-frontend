import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostsComponent } from "./posts/posts.component";
import { AuthGuard } from "./_helpers";
import { LoginComponent } from "./login/login.component";
import { CreateComponent, EditComponent } from "./posts";
import {
  UsersComponent,
  EditComponent as UsersEditComponent,
  CreateComponent as UsersCreateComponent,
} from "./users";
import { Role } from "./_models";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        canActivate: [AuthGuard],
        component: DashboardComponent,
      },
      {
        path: "post",
        component: PostsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "user",
        component: UsersComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin] },
      },
      {
        path: "user/new",
        component: UsersCreateComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin] },
      },
      {
        path: "user/:id",
        component: UsersEditComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin, Role.Writer] },
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "admin/editor/post",
    component: CreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin/editor/post/:id",
    component: EditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin/login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
