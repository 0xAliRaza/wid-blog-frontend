import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Post, User } from "@app/admin/_models";
import { Tag } from "@app/admin/_models/tag";
import { AuthenticationService, PostsService } from "@app/admin/_services";
import { Subscription } from "rxjs";
@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit, OnDestroy {
  post: Post;
  user: User;
  postStatus = "";
  tags: Tag[];
  private tagsSubscription: Subscription;
  constructor(
    private auth: AuthenticationService,
    private posts: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user = this.auth.currentUserValue;
    this.tagsSubscription = this.posts.tags.subscribe((tags: Tag[]) => {
      this.tags = tags;
    });
  }

  onFormChange(data: object) {
    this.postStatus = "Saving...";
    this.posts.create(data).subscribe((post: Post) => {
      if (post.exists) {
        this.post = post;
        this.updatePostStatus();
      }
    });
  }

  onCreateTag(tag: Tag) {
    this.posts.pushTag(tag);
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
    this.route.params.subscribe((params: Params) => {
      if (!!params.id) {
        if (
          this.posts.newlyCreatedPost &&
          this.posts.newlyCreatedPost.id === Number(params.id)
        ) {
          this.post = this.posts.newlyCreatedPost;
          this.posts.newlyCreatedPost = undefined;
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
    this.tagsSubscription.unsubscribe();
  }
}
