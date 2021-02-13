import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
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
import { SettingComponent } from "./setting/setting.component";
import { TagsComponent } from "./tags/tags.component";

const routes: Routes = [
  {
    path: "editor/post",
    component: CreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "editor/post/:id",
    component: EditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "post",
        component: PostsComponent,
      },
      {
        path: "tag",
        component: TagsComponent,
        data: { roles: [Role.SuperAdmin, Role.Admin] },
      },
      {
        path: "user",
        component: UsersComponent,
        data: { roles: [Role.SuperAdmin, Role.Admin] },
      },
      {
        path: "user/new",
        component: UsersCreateComponent,
        data: { roles: [Role.SuperAdmin, Role.Admin] },
      },
      {
        path: "user/:id",
        component: UsersEditComponent,
        data: { roles: [Role.SuperAdmin, Role.Admin, Role.Writer] },
      },
      {
        path: "settings",
        component: SettingComponent,
        data: { roles: [Role.SuperAdmin, Role.Admin] },
      },
      {
        path: "**",
        redirectTo: "post",
        pathMatch: "full",
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
