import { Injectable } from "@angular/core";
import { Post } from "@app/admin/_models";
import { PostsService } from "@app/admin/_services";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { first, map, switchMap } from "rxjs/operators";

export default class CreatePostService {
  private _post: Post = {} as Post;
  public savedPost = new Subject<Post>();
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
    if (this.isEmpty()) {
      this.posts
        .create(formData)
        .pipe(first())
        .subscribe((res: Post) => {
          this.setPost(res as Post);
        });
    } else {
      formData.set("id", JSON.stringify(this.post.id));
      this.posts
        .create(formData)
        .pipe(first())
        .subscribe((res: Post) => {
          this.setPost(res as Post);
        });
    }
  }
}
