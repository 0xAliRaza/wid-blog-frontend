import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Author } from '../_models';
import { HomeService } from '../_services/home.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject<boolean>();
  author$: Observable<Author>;

  constructor(private _route: ActivatedRoute, private _home: HomeService) { }

  ngOnInit() {
    this._route.params
      .pipe(takeUntil(this.destroyed$)).
      subscribe(params => {
        const slug = params.slug;
        if (slug && slug !== "") {
          this.author$ = this._home
            .getAuthor(slug);
        }
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
