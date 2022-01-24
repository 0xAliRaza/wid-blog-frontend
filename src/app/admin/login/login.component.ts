import { Component, OnInit, OnDestroy, ViewEncapsulation } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { catchError, first } from "rxjs/operators";

import { AuthenticationService } from "@admin/_services";
import { Subscription } from "rxjs";
import { User } from "../_models";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loading = false;
  returnUrl: string;
  error = "";
  private loginSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["admin"]);
    }
    this.loginForm = this.fb.group({
      email: [
        "demo-admin@example.com",
        [Validators.required, Validators.email],
      ],
      password: ["demo-admin", Validators.required],
      demoUserRole: ["admin", Validators.required],
    });
  }

  onDemoUserRoleChange() {
    if (!this.loginForm) return;
    if (this.f.demoUserRole.value === "admin") {
      this.f.email.setValue("demo-admin@example.com");
      this.f.password.setValue("demo-admin");
    } else if (this.f.demoUserRole.value === "writer") {
      this.f.email.setValue("demo-writer@example.com");
      this.f.password.setValue("demo-writer");
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    // get return url from route parameters or default to '/admin'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/admin";
  }

  onSubmit() {
    this.loading = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }

    this.loginSubscription = this.authenticationService
      .login(this.f.email.value, this.f.password.value)

      .subscribe(
        (data: User) => {
          try {
            this.router.navigateByUrl(this.returnUrl);
          } catch (error) {
            this.loading = false;
            console.log(error);
          }
        },
        (error) => {
          this.loading = false;
          console.log(error);
          this.error =
            error.error.message ||
            `${error.status} ${error.statusText}: ${error.message}` ||
            error;
        }
      );
  }

  ngOnDestroy() {}
}
