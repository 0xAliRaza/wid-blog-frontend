import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HighlightService } from '@app/highlight.service';
import { environment } from '@environments/environment';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from '../_models';
import { HomeService } from '../_services/home.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy, AfterViewChecked {
  destroyed$ = new Subject<boolean>();
  post: Post;
  ApiUrl = environment.storageDir;
  highlighted = false;

  constructor(private _route: ActivatedRoute, private _home: HomeService, private _highlight: HighlightService) {
  }


  ngOnInit() {
    this._route.params
      .pipe(takeUntil(this.destroyed$)).
      subscribe(params => {
        const slug = params.slug;
        if (slug && slug !== "") {
          this._home
            .getPost(slug)
            .subscribe(res => this.post = res);
        }
      });
  }

  ngAfterViewChecked() {
    if (this.post && !this.highlighted) {
      this._highlight.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
