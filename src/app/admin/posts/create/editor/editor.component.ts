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
import { BehaviorSubject, Subscription } from "rxjs";
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
  public isSideNavOpen = false;
  public featuredImageUrl: string | ArrayBuffer;
  public tinymceInit;

  @ViewChild("featuredImage", { static: false }) featuredImageEl: ElementRef;

  private _post: Post;
  @Input() set post(post: Post) {
    this._post = post;
    if (this.post.featured_image) {
      this.featuredImageUrl = this.post.featured_image;
      this.resetFeaturedImage();
    }
    this.postForm.patchValue(this.post, { emitEvent: false });
  }
  get post(): Post {
    return this._post;
  }
  @Output() postChange = new EventEmitter<Post>();
  @Input() tinymceImgUploader: any;
  @Input() allTags: Tag[];
  @Input() ngSelectTagCreator: any;

  constructor(private slugifyPipe: SlugifyPipe) {
    this.postFormChangesSubscription = this.postForm.valueChanges
      .pipe(debounceTime(2000))
      .subscribe(() => {
        if (this.f.html.value !== "") {
          this.setDefaults();
          Object.assign(this.post, this.postForm.value);
          this.postChange.emit(this.post);
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
      images_upload_handler: this.tinymceImgUploader,
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
    status: new FormControl("draft"),
  });

  get f() {
    return this.postForm.controls;
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
    this.featuredImageEl.nativeElement.value = "";
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
