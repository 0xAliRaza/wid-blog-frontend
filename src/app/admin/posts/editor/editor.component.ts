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
import { Post, User } from "@app/admin/_models";
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
  private postFormSubscription: Subscription;
  private tinymceInst: any;
  public isSideNavOpen = false;
  public featuredImageUrl: string;
  public tinymceConfig: any;
  public storageDir: string = environment.storageDir;
  public wordCount: { words: string; characters: string };

  @Output() formChange = new EventEmitter<object>();
  @Output() delete = new EventEmitter<void>();
  @Output() createTag = new EventEmitter<Tag>();
  @Input() tags: Tag[];
  @Input() postStatus: string;
  @Input() allUsers: User[];

  private _user: User;
  @Input() set user(user: User) {
    this._user = user;
    this.f.author.setValue(this.user.id, { emitEvent: false });
  }
  get user(): User {
    return this._user;
  }

  private _post: Post = new Post();
  @Input() set post(post: Post) {
    if (post.exists) {
      this._post = post;
      if (this.post.featured_image) {
        this.featuredImageUrl =
          this.storageDir + "/" + this.post.featured_image;
        this.resetFeaturedImage();
      }
      this.post.published ? this.unsubscribeChanges() : this.subscribeChanges();
      if (this.post.html && this.tinymceInst) {
        this.tinymceInst.setContent(this.post.html);
      }
      this.postForm.patchValue(this.post, { emitEvent: false });
    }
  }
  get post(): Post {
    return this._post;
  }

  @ViewChild("featuredImage", { static: false }) featuredImageInput: ElementRef;

  constructor(private slugifyPipe: SlugifyPipe) {
    /* Initialize tinymce  */
    this.tinymceConfig = {
      menubar: false,
      toolbar: false,
      placeholder: "Write it all down...",
      plugins:
        "autoresize quickbars image media hr codesample code autolink image wordcount",
      quickbars_selection_toolbar: "bold italic link | h2 h3 | blockquote",
      quickbars_insert_toolbar: "image media hr codesample code",
      statusbar: false,
      image_title: true,
      file_picker_types: "image",
      block_unsupported_drop: false,
      images_upload_url: environment.postImageUploadUrl,
      images_upload_handler: this.onTinymceImageUpload.bind(this)
    };

    if (!this.post.published) {
      this.subscribeChanges();
    }
  }

  postForm = new FormGroup({
    id: new FormControl(null),
    author: new FormControl(""),
    title: new FormControl(""),
    html: new FormControl(""),
    slug: new FormControl(""),
    tags: new FormControl(""),
    published_at: new FormControl(""),
    custom_excerpt: new FormControl(""),
    meta_title: new FormControl(""),
    meta_description: new FormControl(""),
    featured: new FormControl(false),
    featured_image: new FormControl(""),
    featured_image_file: new FormControl(""),
    published: new FormControl(false),
  });

  get f() {
    return this.postForm.controls;
  }

  onTinymceImageUpload(blobInfo, success, failure, progress) {
    let formData;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("POST", environment.postImageUploadUrl);
    xhr.setRequestHeader("Authorization", `Bearer ${this.user.token}`);
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

  ngSelectTagCreator(input): Tag {
    const tag = new Tag();
    tag.name = input;
    tag.slug = this.slugify(input);
    this.createTag.emit(tag);
    return tag;
  }

  private setDefaults() {
    if (this.f.title.value === "") {
      this.f.title.setValue("(Untitled)", { emitEvent: false });
    }
    if (this.f.slug.value === "") {
      this.f.slug.setValue(this.slugify(this.f.title.value), {
        emitEvent: false,
      });
    }
  }

  onTinymceChange() {
    if (!this.tinymceInst || this.tinymceInst.isNotDirty) {
      return;
    }
    const editor = this.tinymceInst;
    if (editor.getContent() !== "") {
      this.f.html.setValue(editor.getContent());
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
      this.featuredImageUrl = reader.result.toString();
      this.f.featured_image_file.setValue(file);
    };
  }

  private resetFeaturedImage() {
    this.f.featured_image_file.setValue("", { emitEvent: false });
    if (this.featuredImageInput) {
      this.featuredImageInput.nativeElement.value = "";
    }
  }

  removeFeaturedImage() {
    this.resetFeaturedImage();
    this.featuredImageUrl = undefined;
    this.f.featured_image.setValue("");
  }

  subscribeChanges() {
    if (this.postFormSubscription && !this.postFormSubscription.closed) {
      return;
    }

    this.postFormSubscription = this.postForm.valueChanges
      .pipe(debounceTime(2500))
      .subscribe(() => {
        this.onSubmit();
      });
  }

  private unsubscribeChanges(): void {
    if (this.postFormSubscription) {
      this.postFormSubscription.unsubscribe();
    }
  }

  private isFormDirty(): boolean {
    return (
      this.postForm.dirty || (this.tinymceInst && this.tinymceInst.isDirty())
    );
  }

  onSubmit() {
    this.setDefaults();

    const formData = new FormData();
    Object.entries(this.postForm.value).forEach(([key, value]: any[]) => {
      if (value === "") {
        value = null;
      }
      const newValue = value instanceof File ? value : JSON.stringify(value);
      formData.set(key, newValue);
    });
    this.formChange.emit(formData);
  }

  onTypeChange(type: boolean) {
    this.f.published.setValue(type, { emitEvent: false });
  }
  onPublishedAtChange(e: any) {
    const date: Date = new Date(e.target.value);
    this.f.published_at.setValue(date.toISOString(), { emitEvent: false });
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  slugify(input: string): string {
    return this.slugifyPipe.transform(input);
  }

  onDelete() {
    if (this.post.exists) {
      this.delete.emit();
    }
  }

  onWordCountChange(wordcount) {
    this.wordCount = wordcount;
  }

  onTinymceInit(e) {
    this.tinymceInst = e.editor;
    if (this.post && this.post.html) {
      this.tinymceInst.setContent(this.post.html);
      this.postForm.patchValue({ html: this.post.html }, { emitEvent: false });
      this.tinymceInst.isNotDirty = true;
    }
    e.editor.on("WordCountUpdate", (e) => {
      const wordCount = e.wordCount;
      this.onWordCountChange(wordCount);
    });
  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.postFormSubscription) {
      this.postFormSubscription.unsubscribe();
    }
  }
}
