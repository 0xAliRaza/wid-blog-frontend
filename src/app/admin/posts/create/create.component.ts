import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Post } from "@app/admin/_models";
import { Tag } from "@app/admin/_models/tag";
import { AuthenticationService, PostsService } from "@app/admin/_services";
import { SlugifyPipe } from "@app/slugify.pipe";
import { environment } from "@environments/environment";
import { Subscription } from "rxjs";
import { first, map, switchMap } from "rxjs/operators";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit, OnDestroy {
  public post: Post;
  private tagsSubscription: Subscription;
  private routerSubscription: Subscription;
  public allTags: Tag[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private posts: PostsService,
    private auth: AuthenticationService,
    private slugifyPipe: SlugifyPipe,
    private location: Location
  ) {
    this.post = {} as Post;
    this.tagsSubscription = this.posts.tags.subscribe((tags: Tag[]) => {
      if (tags) {
        this.allTags = tags;
      }
    });

    this.route.params.subscribe((params) => {
      if (params.id) {
        if (!this.post.id) {
          this.fetchPost(params.id);
        }
      }
    });
  }

  fetchPost(id: number) {
    this.posts
      .get(id)
      .pipe(first())
      .subscribe((res: Post) => {
        this.post = res;
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
    if (this.post.id) {
      this.posts
        .update(formData)
        .pipe(first())
        .subscribe((res: Post) => this.handleServerResponse(res));
    } else {
      this.posts
        .create(formData)
        .pipe(first())
        .subscribe((res: Post) => this.handleServerResponse(res));
    }
  }

  private handleServerResponse(res: Post) {
    console.log(res);
    this.post = res;
    if (this.post.id) {
      // this.router.navigate(["admin/editor/post", +this.post.id]);
      this.location.replaceState(`admin/editor/post/${+this.post.id}`);

    }
  }

  getTinymceImgUploader() {
    /* Create an reference of 'this' to use outside */
    const that = this;
    return (blobInfo, success, failure, progress) => {
      let formData;
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open("POST", `${environment.apiUrl}/post/imageUpload`);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Authorization", `Bearer ${that.auth.getToken}`);
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
    };
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

  ngOnInit() {}

  ngOnDestroy() {
    this.tagsSubscription.unsubscribe();
  }
}
