import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, Tag } from '../_models';
import { HomeService } from '../_services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  posts: Post[];
  count = 0;
  page = 1;
  nextPageUrl;
  
  constructor(private _home: HomeService) {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this._home.indexPosts(this.page).subscribe(response => {
      this.posts = response.data as Post[];
      this.count = response.total;
      this.page = response.current_page;
      this.nextPageUrl = response.next_page_url;
    });
  }

  onTableDataChange(event: number) {
    this.page = event;
    this.fetchPosts();
  }
  ngOnInit() {}

}
