import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  timeout: any;
  constructor() {
    this.postForm.valueChanges.subscribe((data) => this.scheduleSave(data));
  }

  postForm = new FormGroup({
    postTitle: new FormControl("", Validators.required),
    postText: new FormControl("", Validators.required),
  });

  scheduleSave(data: FormGroup) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log(data);
    }, 5000);
  }

  ngOnInit() {}
}
