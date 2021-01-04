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
  public savedPost: Post = this.createPost.post;
  public errors: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private posts: PostsService,
    private auth: AuthenticationService,
    private slugifyPipe: SlugifyPipe,
    private createPost: CreatePostService
  ) {
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

  getTinymceImgUploader() {
    /* Create an reference of 'this' to use outside */
    // const that = this;
    return ((blobInfo, success, failure, progress) => {
      let formData;
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open("POST", `${environment.apiUrl}/post/imageUpload`);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Authorization", `Bearer ${this.auth.getToken}`);
      xhr.setRequestHeader("Content-Type", `multipart/form-data`);

      xhr.upload.onprogress = (e) => {
        progress((e.loaded / e.total) * 100);
      };
      xhr.onload = () => {
        let json;
        if (xhr.status === 403) {
          failure("HTTP Error: " + xhr.status, { remove: true });
          return;
        }
        if (xhr.status < 200 || xhr.status >= 300) {
          failure("HTTP Error: " + xhr.status);
          return;
        }
        json = JSON.parse(xhr.responseText);
        if (!json || typeof json.location != "string") {
          failure("Invalid JSON: " + xhr.responseText);
          return;
        }
        success(json.location);
      };
      xhr.onerror = () => {
        failure(
          "Image upload failed due to a XHR Transport error. Code: " +
            xhr.status
        );
      };
      formData = new FormData();
      formData.append("file", blobInfo.blob(), blobInfo.filename());
      xhr.send(formData);
    }).bind(this);
  }

  getNgSelectTagCreator(): any {
    const slugify = this.slugifyPipe.transform;
    const that = this;
    return (input): Tag => {
      const tag: Tag = {
        name: input,
        slug: slugify(input),
      } as Tag;
      const allTags = that.posts.tags.getValue();
      allTags.push(tag);
      that.posts.tags.next(allTags);
      return tag;
    };
  }

  clearErrors() {
    this.errors = undefined;
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.tagsSubscription.unsubscribe();
    this.savedPostSubscription.unsubscribe();
    this.errorsSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
