import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import { Post } from '../_models';
import { HomeService } from '../_services/home.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  count = 0;
  page = 1;
  nextPageUrl;
  apiUrl = environment.storageDir;
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

  ngOnInit() {
  }

}
