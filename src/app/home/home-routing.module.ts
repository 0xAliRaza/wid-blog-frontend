import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [

      {
        path: "",
        component: PostsComponent,
      },
      {
        path: ":slug",
        component: PostComponent,
      },
      {
        path: "tag/:slug",
        component: PostsComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
