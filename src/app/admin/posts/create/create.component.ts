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

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  ngOnInit() {}
}
