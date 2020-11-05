import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  constructor() {
    this.postForm.valueChanges.subscribe(data => console.log(data));
  }


  postForm = new FormGroup({
    postTitle: new FormControl('', Validators.required),
    postText: new FormControl('', Validators.required)
  });


  ngOnInit() {}
}
