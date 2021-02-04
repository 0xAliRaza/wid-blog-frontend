import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Post, User } from "@app/admin/_models";
import { Tag } from "@app/admin/_models/tag";
import { AuthenticationService, PostsService, TagsService, UsersService } from "@app/admin/_services";
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
  allUsers: User[];
  constructor(
    private auth: AuthenticationService,
    private posts: PostsService,
    private tagsService: TagsService,
    private usersService: UsersService,
    private router: Router
  ) {
    this.auth.currentUser
      .pipe(takeUntil(this.destroyed$))
      .subscribe((user) => (this.user = user));
    this.tagsService.models$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((tags: Tag[]) => {
        this.tags = tags;
      });
    this.usersService.models$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((users: User[]) => {
        this.allUsers = users;
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
    this.tagsService.pushModel(tag);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
