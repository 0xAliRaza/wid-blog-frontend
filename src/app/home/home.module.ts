import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from '@app/shared-module';
import { HomeService } from './_services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostsComponent } from './posts/posts.component';
import { FooterComponent } from './landing/footer/footer.component';
import { EmailSubComponent } from './email-sub/email-sub.component';
import { AuthorComponent } from './author/author.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './landing/header/header.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    PostsComponent,
    EmailSubComponent,
    AuthorComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    TagComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
