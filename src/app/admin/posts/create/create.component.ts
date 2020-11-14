import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

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
  constructor() {
    this.postForm.valueChanges.subscribe((data) => this.scheduleSave(data));
    this.tinymceInit = {
      menubar: false,
      toolbar: false,
      placeholder: "Write it all down...",
      plugins:
        "autoresize quickbars image media hr codesample code autolink image",
      quickbars_selection_toolbar: "bold italic link | h2 h3 | blockquote",
      quickbars_insert_toolbar: "image media hr codesample code",
      statusbar: false,
      image_advtab: true,
      block_unsupported_drop: false,
      images_upload_url: 'http://wid-blog-backend/api/v1/image'
    };
  }

  postForm = new FormGroup({
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

  imagesUploadHandler(blobInfo, success, failure, progress) {
    var xhr, formData;

    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("POST", "postAcceptor.php");

    xhr.upload.onprogress = function (e) {
      progress((e.loaded / e.total) * 100);
    };

    xhr.onload = function () {
      var json;

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

    xhr.onerror = function () {
      failure(
        "Image upload failed due to a XHR Transport error. Code: " + xhr.status
      );
    };

    formData = new FormData();
    formData.append("file", blobInfo.blob(), blobInfo.filename());

    xhr.send(formData);
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

  ngOnInit() {}
}
