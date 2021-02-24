import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { PostComponent } from './post/post.component';
import { TagComponent } from './tag/tag.component';

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
    children: [

      {
        path: "",
        component: HomeComponent,
      },
      {
        path: ":slug",
        component: PostComponent,
      },
      {
        path: "author/:slug",
        component: AuthorComponent,
      },
      {
        path: "tag/:slug",
        component: TagComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
