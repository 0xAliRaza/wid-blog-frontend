import { animate, style, transition, trigger } from "@angular/animations";
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Post } from "@app/admin/_models";
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
  private postFormChangesSubscription: Subscription;
  private tagsSubscription: Subscription;
  public isSideNavOpen = false;
  public tinymceInit: any;
  public id: number;
  public featuredImageUrl: any;
  private featuredImage: File;
  public tags: Tag[] = [];
  public status = "draft";

  @ViewChild("featuredImage", { static: false }) featuredImageEl: ElementRef;

  constructor(
    private auth: AuthenticationService,
    private slugifyPipe: SlugifyPipe,
    private postsService: PostsService,
    private fb: FormBuilder
  ) {
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
        this.scheduleSave();
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

  postForm = this.fb.group({
    status: [this.status],
    title: [""],
    html: ["", Validators.required],
    slug: [""],
    tags: ["", Validators.required],
    custom_excerpt: [""],
    meta_title: [""],
    meta_description: [""],
    featured: [false],
  });

  get f() {
    return this.postForm.controls;
  }

  private setDefaults() {
    if (this.f.title.value === "") {
      this.f.title.setValue("(Untitled)", { emitEvent: false });
    }
    if (!this.f.slug.dirty && this.f.slug.value === "") {
      this.f.slug.setValue(this.slugify(this.f.title.value), {
        emitEvent: false,
      });
    }
  }

  private scheduleSave() {
    clearTimeout(this.timeout);
    if (this.postForm.valid) {
      this.timeout = setTimeout(() => {
        this.onSubmit();
      }, 4000);
    }
  }

  onSubmit() {
    if (this.postForm.invalid) {
      return;
    }
    this.setDefaults();
    const formData = new FormData();
    if (this.featuredImage) {
      formData.set("featured_image", this.featuredImage);
    }
    formData.set("user_id", JSON.stringify(this.auth.userId));
    formData.set("postData", JSON.stringify(this.postForm.value));
    // if (!!this.id) {
    //   this.postsService
    //     .update(formData)
    //     .pipe(first())
    //     .subscribe((res: Post) => this.processServerResponse(res));
    // } else {
    this.postsService
      .create(formData)
      .pipe(first())
      .subscribe((res: Post) => this.processServerResponse(res));
    // }
  }

  private processServerResponse(response: Post) {
    console.log(response);
    this.f.slug.setValue(response.slug, { emitEvent: false });
    this.id = response.id;
    if (response.featured_image_url) {
      this.featuredImageUrl = response.featured_image_url;
      this.resetFeaturedImage();
    }
  }

  onFeaturedImageChange(event) {
    if (event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];

    const mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      {
        return;
      }
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.featuredImageUrl = reader.result;
      this.featuredImage = file;
      this.scheduleSave();
    };
  }

  resetFeaturedImage() {
    this.featuredImage = undefined;
    this.featuredImageEl.nativeElement.value = "";
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
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

  ngOnInit() {}

  ngOnDestroy() {
    this.postFormChangesSubscription.unsubscribe();
    this.tagsSubscription.unsubscribe();
  }
}
