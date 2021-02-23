import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import { Post } from '../_models';
import { HomeService } from '../_services/home.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() posts: Post[];
  apiUrl = environment.storageDir;
  constructor() {  }

  ngOnInit() {
  }

}
