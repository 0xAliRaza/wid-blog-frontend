import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { environment } from "@environments/environment";
import { catchError, map } from "rxjs/operators";
import { Setting } from "../_models";

@Component({
  selector: "admin-setting",
  templateUrl: "./setting.component.html",
  styleUrls: ["./setting.component.scss"],
})
export class SettingComponent implements OnInit {
  setting: Setting = new Setting();
  loading = false;
  success = false;
  constructor(private http: HttpClient, private fb: FormBuilder) {}

  get f() {
    return this.form.controls;
  }

  form = this.fb.group({
    title: [null, [Validators.required, Validators.maxLength(60)]],
    meta_title: [null, [Validators.required, Validators.maxLength(60)]],
    meta_description: [null, Validators.maxLength(160)],
  });

  onSubmit() {
    if (this.form.valid) {
      const filtered = {};
      for (const key in this.form.value) {
        if (this.form.value[key]) {
          filtered[key] = this.form.value[key];
        }
      }
      this.loading = true;
      this.http
        .post<Setting>(`${environment.apiUrl}/setting`, this.form.value)
        .pipe(map((res) => new Setting(res)))
        .subscribe((setting: Setting) => {
          this.setting = setting;
          this.form.patchValue(this.setting);
          this.loading = false;
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 1000);
        });
    }
  }

  onDelete() {
    if (!this.setting.exists) {
      return;
    }
    this.http
      .delete<boolean>(`${environment.apiUrl}/setting`)
      .subscribe((res: boolean) => {
        if (res === true) {
          this.setting = new Setting();
          this.form.reset();
        }
      });
  }

  ngOnInit() {
    this.http
      .get(`${environment.apiUrl}/setting`)
      .pipe(
        catchError((err) => err),
        map((res) => new Setting(res))
      )
      .subscribe((setting: Setting) => {
        this.setting = setting;
      });
  }
}
