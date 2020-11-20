import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import {
  HttpClient,
  HttpEvent,
  HttpEventType,
  HttpRequest,
} from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "@app/admin/_services";
import { SlugifyPipe } from "@app/slugify.pipe";
import { environment } from "@environments/environment";
import { Subscription } from "rxjs";

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
export class CreateComponent implements OnInit {
  timeout: any;
  isSideNavOpen = false;
  tinymceInit: any;
  private imageUploadSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private auth: AuthenticationService,
    private slugify: SlugifyPipe
  ) {
    this.postForm.valueChanges.subscribe((formData) => {
      if (!this.isObjEmpty(formData)) {
        console.log(this.setSlug());
        // console.log(formData);
      } else console.log("some");

      // this.scheduleSave(formData)
    });

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
    id: new FormControl(""),
    userId: new FormControl(this.auth.userId),
    postTitle: new FormControl("", Validators.required),
    postText: new FormControl("", Validators.required),
    postFeaturedImage: new FormControl(""),
    postUrl: new FormControl(""),
    postTags: new FormControl(""),
    postExcerpt: new FormControl(""),
    postMetaTitle: new FormControl(""),
    postMetaDescription: new FormControl(""),
    postFeatured: new FormControl(""),
  });

  setSlug(): void {
    let title = this.postForm.get("postTitle").value;
    if (title && title !== "") {
      title = this.slugify.transform(title);
    }
    this.postForm.get("postUrl").setValue(title, { emitEvent: false });
  }

  imagesUploadHandler() {
    this.auth.updateUserData();
    const that = this;
    return (blobInfo, success, failure, progress) => {
      let formData;
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open("POST", `${environment.apiUrl}/post/imageUpload`);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Authorization", `Bearer ${that.auth.getToken}`);

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

  scheduleSave(data: FormGroup) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log(data);
    }, 5000);
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  isObjEmpty(data: any): any {
    let empty = true;
    Object.keys(data).forEach((key) => {
      key !== "userId" && data[key] !== "" ? (empty = false) : true;
    });
    return empty;
  }

  ngOnInit() {}
}
