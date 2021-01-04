import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "@app/admin/_models";
import { PostsService } from "@app/admin/_services";
import { BehaviorSubject, Observable, Subject, throwError } from "rxjs";
import { catchError, first, map, switchMap } from "rxjs/operators";

export default class CreatePostService {
  private _post: Post = {} as Post;
  public savedPost = new Subject<Post>();
  public errors = new Subject<string[]>();
  constructor(private posts: PostsService) {}

  get post(): Post {
    return this._post;
  }

  private setPost(post: Post) {
    this._post = post;
    this.savedPost.next(post);
  }

  public isEmpty(): boolean {
    return this.post.id ? false : true;
  }

  public fetchPost(id: number) {
    this.posts
      .get(id)
      .pipe(first())
      .subscribe((res: Post) => {
        this.setPost(res as Post);
      });
  }

  public submit(formData) {
    if (!this.isEmpty()) {
      formData.set("id", JSON.stringify(this.post.id));
    }
    this.posts
      .create(formData)
      .pipe(
        first(),
        catchError((err) => this.handleError(err))
      )
      .subscribe((res: Post) => {
        this.errors.next([]);
        this.setPost(res as Post);
      });
  }

  private handleError(err: HttpErrorResponse) {
    const errors = err.error.errors
      ? Object.keys(err.error.errors).map((key) => err.error.errors[key])
      : [err.error.message];
    this.errors.next(errors);
    return throwError(err);
  }
}
