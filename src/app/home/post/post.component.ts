import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../_models';
import { HomeService } from '../_services/home.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$: Observable<Post>;
  ApiUrl = environment.storageDir;

  constructor(private route: ActivatedRoute, private _home: HomeService) { }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug");
    if (slug && slug !== "") {
      this.post$ = this._home.getPost(slug);
    }

  }

}
