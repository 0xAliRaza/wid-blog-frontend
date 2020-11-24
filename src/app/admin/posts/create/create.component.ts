import { animate, style, transition, trigger } from "@angular/animations";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Tag } from "@app/admin/_models/tag";
import { AuthenticationService, PostsService } from "@app/admin/_services";
import { SlugifyPipe } from "@app/slugify.pipe";
import { environment } from "@environments/environment";
import { Subscription } from "rxjs";
import { debounceTime, first } from "rxjs/operators";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
  animations: [
    trigger("slideInOut", [
      transition(":enter", [
        style({
          transform: "translateX(100%)",
        }),
        animate(
          ".2s ease-in-out",
          style({
            transform: "translateX(0)",
          })
        ),
      ]),
      transition(":leave", [
        animate(
          ".2s ease-in-out",
          style({
            transform: "translateX(100%)",
          })
        ),
      ]),
    ]),
  ],
})
export class CreateComponent implements OnInit, OnDestroy {
  private timeout: any;
  isSideNavOpen = false;
  tinymceInit: any;
  private postFormChangesSubscription: Subscription;
  private tagsSubscription: Subscription;
  private postId: number;
  private imageUploadSubscription: Subscription;
  tags: Tag[] = [];

  constructor(
    private auth: AuthenticationService,
    private slugifyPipe: SlugifyPipe,
    private postsService: PostsService
  ) {
    this.auth.updateUserData();
    this.postForm
      .get("user_id")
      .setValue(this.auth.userId, { emitEvent: false });

    this.tagsSubscription = this.postsService.tagsSubject.subscribe(
      (tags: Tag[]) => {
        if (tags) {
          this.tags = tags;
        }
      }
    );

    this.postFormChangesSubscription = this.postForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(() => {
        if (this.processForm()) {
          this.scheduleSave();
        }
      });

    /* Initialize tinymce  */
    this.tinymceInit = {
      menubar: false,
      toolbar: false,
      placeholder: "Write it all down...",
      plugins:
        "autoresize quickbars image media hr codesample code autolink image",
      quickbars_selection_toolbar: "bold italic link | h2 h3 | blockquote",
      quickbars_insert_toolbar: "image media hr codesample code",
      statusbar: false,
      image_title: true,
      file_picker_types: "image",
      block_unsupported_drop: false,
      images_upload_url: "http://wid-blog-backend/api/v1/image",
      images_upload_handler: this.imagesUploadHandler(),
    };
  }

  postForm = new FormGroup({
    user_id: new FormControl(""),
    type_id: new FormControl(1),
    title: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required),
    featured_image: new FormControl(""),
    slug: new FormControl(""),
    tags: new FormControl(""),
    custom_excerpt: new FormControl(""),
    meta_title: new FormControl(""),
    meta_description: new FormControl(""),
    featured: new FormControl(false),
  });

  processForm() {
    const f = this.postForm;
    if (f.get("html").value !== "") {
      if (f.get("title").value === "") {
        f.get("title").setValue("(Untitled)", { emitEvent: false });
      }
      if (!f.get("slug").dirty) {
        f.get("slug").setValue(this.slugify(f.get("title").value), {
          emitEvent: false,
        });
      }
      return true;
    }
    return false;
  }

  processServerResponse(response) {
    console.log(response);
    return this.postForm
      .get("slug")
      .setValue(response.slug, { emitEvent: false });
  }

  imagesUploadHandler() {
    /* Create an reference of 'this' to use outside */
    const that = this;
    return (blobInfo, success, failure, progress) => {
      let formData;
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open("POST", `${environment.apiUrl}/post/imageUpload`);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Authorization", `Bearer ${that.auth.getToken}`);
      // xhr.setRequestHeader("Content-Type", `multipart/form-data`);

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

  scheduleSave() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (!this.postId) {
        return this.postsService
          .create(this.postForm.value)
          .pipe(first())
          .subscribe((res) => this.processServerResponse(res));
      }
      return this.postsService
        .update(this.postForm.value)
        .pipe(first())
        .subscribe((res) => this.processServerResponse(res));
    }, 4000);
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  isObjEmpty(data: any): any {
    let empty = true;
    Object.keys(data).forEach((key) => {
      data[key] !== "" ? (empty = false) : true;
    });
    return empty;
  }

  slugify(input: string): string {
    return this.slugifyPipe.transform(input);
  }

  createTag(): any {
    const slugify = this.slugifyPipe.transform;
    return (input) => {
      return {
        name: input,
        slug: slugify(input),
      };
    };
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.postFormChangesSubscription.unsubscribe();
    this.tagsSubscription.unsubscribe();
  }
}
