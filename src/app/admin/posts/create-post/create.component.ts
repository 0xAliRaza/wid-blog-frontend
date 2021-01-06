import { Component, Injectable, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Post } from "@app/admin/_models";
import { Tag } from "@app/admin/_models/tag";
import { AuthenticationService, PostsService } from "@app/admin/_services";
import { SlugifyPipe } from "@app/slugify.pipe";
import { environment } from "@environments/environment";
import { Subscription } from "rxjs";
import { first, map, switchMap } from "rxjs/operators";
import CreatePostService from "@app/admin/posts/create-post/create-post.service";
@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit, OnDestroy {
  private tagsSubscription: Subscription;
  private savedPostSubscription: Subscription;
  private errorsSubscription: Subscription;
  private routerSubscription: Subscription;
  public allTags: Tag[];
  public savedPost: Post;
  public errors: string[];
  public userToken: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private posts: PostsService,
    private auth: AuthenticationService,
    private slugifyPipe: SlugifyPipe,
    private createPost: CreatePostService
  ) {
    this.userToken = this.auth.userToken;
    if (this.createPost.post) {
      this.savedPost = this.createPost.post;
    }
    this.tagsSubscription = this.posts.tags.subscribe((tags: Tag[]) => {
      if (tags) {
        this.allTags = tags;
      }
    });

    this.savedPostSubscription = this.createPost.savedPost.subscribe(
      (post: Post) => {
        this.savedPost = post;
        this.router.navigate([`admin/editor/post/${post.id}`]);
      }
    );
    this.errorsSubscription = this.createPost.errors.subscribe(
      (errors: string[]) => {
        return (this.errors = errors);
      }
    );

    this.routerSubscription = this.route.params.subscribe((params: Params) => {
      if (params.id && this.createPost.isEmpty()) {
        this.createPost.fetchPost(params.id);
      }
    });
  }

  onPostChange(post: Post) {
    const formData = new FormData();
    Object.entries(post).forEach(([key, value]) => {
      if (value && value !== "") {
        if (key === "featured_image_file") {
          formData.set(key, value);
        } else {
          formData.set(key, JSON.stringify(value));
        }
      }
    });

    formData.set("user_id", JSON.stringify(this.auth.userId));
    this.createPost.submit(formData);
  }

  getNgSelectTagCreator(): any {
    return ((input): Tag => {
      const tag: Tag = {
        name: input,
        slug: this.slugifyPipe.transform(input),
      } as Tag;
      const allTags = this.posts.tags.getValue();
      allTags.push(tag);
      this.posts.tags.next(allTags);
      return tag;
    }).bind(this);
  }

  clearErrors() {
    this.createPost.errors.next([]);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.tagsSubscription.unsubscribe();
    this.savedPostSubscription.unsubscribe();
    this.errorsSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
