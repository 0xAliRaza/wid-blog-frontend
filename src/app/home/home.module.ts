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
import { FooterComponent } from './footer/footer.component';
import { EmailSubComponent } from './email-sub/email-sub.component';

@NgModule({
  declarations: [HomeComponent, PostComponent, PostsComponent, FooterComponent, EmailSubComponent],
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
