import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Post, User } from "@app/admin/_models";
import { Tag } from "@app/admin/_models/tag";
import { AuthenticationService, PostsService, TagsService, UsersService } from "@app/admin/_services";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit, OnDestroy {
  destroyed$: Subject<boolean> = new Subject();
  post: Post;
  user: User;
  postStatus = "";
  tags: Tag[];
  allUsers: User[];
  page = false;
  constructor(
    private auth: AuthenticationService,
    private posts: PostsService,
    private tagsService: TagsService,
    private usersService: UsersService,
    private route: ActivatedRoute,
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
    this.postStatus = "Saving...";
    this.posts.update(null, data).subscribe((post: Post) => {
      if (post.exists) {
        this.post = post;
        this.updatePostStatus();
      }
    });
  }

  onCreateTag(tag: Tag) {
    this.tagsService.pushModel(tag);
  }

  onDelete() {
    if (this.post.exists) {
      this.postStatus = "Deleting...";
      this.posts.delete(this.post.id).subscribe((res: boolean) => {
        if (res === true) {
          this.router.navigate(["admin/posts"]);
        }
      });
    }
  }

  private updatePostStatus(): void {
    this.postStatus = this.post.published ? "Published" : "Draft";
  }

  ngOnInit() {
    this.page = this.route.snapshot.data.page;
    console.log(this.route.snapshot.data, 'create');
    this.route.params
      .pipe(takeUntil(this.destroyed$))
      .subscribe((params: Params) => {
        if (!!params.id) {
          if (
            this.posts.newlyCreatedPost &&
            this.posts.newlyCreatedPost.id === Number(params.id)
          ) {
            this.post = this.posts.newlyCreatedPost;
            this.posts.newlyCreatedPost = undefined;
            this.updatePostStatus();
          } else {
            this.posts.get(params.id).subscribe((post: Post) => {
              if (post.exists) {
                this.post = post;
                this.updatePostStatus();
              }
            });
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
