import { animate, style, transition, trigger } from "@angular/animations";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Post } from "@app/admin/_models";
import { Tag } from "@app/admin/_models/tag";
import { SlugifyPipe } from "@app/slugify.pipe";
import { environment } from "@environments/environment";
import { Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "admin-post-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"],
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
export class EditorComponent implements OnInit, OnDestroy {
  private postFormChangesSubscription: Subscription;
  private tinymceInst: any;
  public isSideNavOpen = false;
  public featuredImageUrl: any;
  public tinymceConfig: any;
  public storageDir: string = environment.storageDir;
  public postStatus = "New Post";

  @ViewChild("featuredImage", { static: false }) featuredImageEl: ElementRef;

  private _post: Post = {} as Post;
  @Input() set post(post: Post) {
    if (!post || !post.id) {
      return;
    }

    this._post = post;
    if (
      this.post.hasOwnProperty("featured_image") &&
      this.post.featured_image
    ) {
      this.featuredImageUrl =
        environment.storageDir + "/" + this.post.featured_image;
      this.resetFeaturedImage();
    }

    this.postStatus = this.post.status;

    if (this.isPostPublished() && this.postFormChangesSubscription) {
      this.postFormChangesSubscription.unsubscribe();
    }
    this.postForm.patchValue(this.post, { emitEvent: false });
  }
  get post(): Post {
    return this._post;
  }
  @Output() postChange = new EventEmitter<Post>();
  @Input() token: string;
  @Input() allTags: Tag[];
  @Input() ngSelectTagCreator: any;

  constructor(private slugifyPipe: SlugifyPipe) {
    /* Initialize tinymce  */
    this.tinymceConfig = {
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
      images_upload_url: environment.postImageUploadUrl,
      images_upload_handler: this.tinymceImageUploadHandler.bind(this),
    };
  }

  postForm = new FormGroup({
    title: new FormControl(""),
    html: new FormControl(""),
    slug: new FormControl(""),
    tags: new FormControl(""),
    custom_excerpt: new FormControl(""),
    meta_title: new FormControl(""),
    meta_description: new FormControl(""),
    featured: new FormControl(false),
    featured_image_file: new FormControl(""),
    status: new FormControl(""),
  });

  get f() {
    return this.postForm.controls;
  }

  isPostPublished() {
    return this.post.status === "published";
  }

  isEmpty() {
    return !this.post.id;
  }

  tinymceImageUploadHandler(blobInfo, success, failure, progress) {
    let formData;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("POST", environment.postImageUploadUrl);
    xhr.setRequestHeader("Authorization", `Bearer ${this.token}`);
    // xhr.setRequestHeader("Content-Type", `multipart/form-data`);
    xhr.setRequestHeader("Accept", "application/json");
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
        "Image upload failed due to a XHR Transport error. Code: " + xhr.status
      );
    };
    formData = new FormData();
    formData.append("file", blobInfo.blob(), blobInfo.filename());
    xhr.send(formData);
  }

  private setDefaults() {
    if (this.f.title.value === "") {
      this.f.title.setValue("(Untitled)", { emitEvent: false });
    }
    if (!this.f.slug.dirty) {
      this.f.slug.setValue(this.slugify(this.f.title.value), {
        emitEvent: false,
      });
    }

    if (
      this.f.status.value !== "published" &&
      this.f.status.value !== "draft"
    ) {
      this.f.status.setValue("draft", { emitEvent: false });
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
      this.f.featured_image_file.setValue(file);
    };
  }

  resetFeaturedImage() {
    this.f.featured_image_file.setValue("", { emitEvent: false });
    this.featuredImageEl
      ? (this.featuredImageEl.nativeElement.value = "")
      : null;
  }

  removeFeaturedImage() {
    this.resetFeaturedImage();
    delete this.post.featured_image;
    this.featuredImageUrl = undefined;
    this.postForm.patchValue(this.post);
  }

  handleEditorInit(e) {
    this.tinymceInst = e.editor;
    if (this.isPostPublished()) {
      return;
    }
    // Submitting post to server when the form changes
    this.postFormChangesSubscription = this.postForm.valueChanges
      .pipe(debounceTime(2000))
      .subscribe(() => {
        this.savePost();
      });
  }

  savePost(status?: "draft" | "published") {
    if (status) {
      this.f.status.setValue(status, { emitEvent: false });
    }
    this.setDefaults();
    Object.assign(this.post, this.postForm.value);
    this.postChange.emit(this.post);
    this.postStatus = "Saving...";
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  slugify(input: string): string {
    return this.slugifyPipe.transform(input);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.postFormChangesSubscription.unsubscribe();
  }
}
