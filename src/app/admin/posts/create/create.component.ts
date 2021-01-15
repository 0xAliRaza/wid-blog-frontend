import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Post, User } from "@app/admin/_models";
import { Tag } from "@app/admin/_models/tag";
import { AuthenticationService, PostsService } from "@app/admin/_services";
import { Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit, OnDestroy {
  destroyed$: Subject<boolean> = new Subject();
  user: User;
  postStatus = "New Post";
  tags: Tag[];
  private tagsSubscription: Subscription;
  constructor(
    private auth: AuthenticationService,
    private posts: PostsService,
    private router: Router
  ) {
    this.user = this.auth.currentUserValue;
    this.posts.tags
      .pipe(takeUntil(this.destroyed$))
      .subscribe((tags: Tag[]) => {
        this.tags = tags;
      });
  }

  onFormChange(data: object) {
    this.postStatus = "Creating new post...";
    this.posts.create(data).subscribe((post: Post) => {
      if (post.exists) {
        this.posts.newlyCreatedPost = post;
        this.router.navigate([`admin/editor/post/${post.id}`]);
      }
    });
  }

  onCreateTag(tag: Tag) {
    this.posts.pushTag(tag);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}