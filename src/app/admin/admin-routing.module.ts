import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostsComponent } from "./posts/posts.component";
import { AuthGuard } from "./_helpers";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "posts",
        component: PostsComponent,
      },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
