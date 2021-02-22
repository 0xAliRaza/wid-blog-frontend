import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Role, User } from "@app/admin/_models";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "admin-user-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder) {

  }
  loading = false;
  success = false;
  isPassOptional = false;

  @Output() formChange = new EventEmitter<any>();
  @Output() delete = new EventEmitter<void>();

  @Input() roles: any[];

  @Input() set user(user: User) {
    if (user.exists) {
      this.form.patchValue(user);
      this.form.markAsPristine();

      if (this.loading) {
        this.loading = false;
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 1000);
      }
      if (!this.isPassOptional) {
        this.f.password.setValidators([Validators.minLength(8)]);
        this.f.password.updateValueAndValidity();
        this.form.updateValueAndValidity();
        this.isPassOptional = true;
      }
    }
  }

  get f() {
    return this.form.controls;
  }

  form = this.fb.group({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    slug: ["", Validators.required],
    role: [null, Validators.required],
    password: [null, [Validators.minLength(8), Validators.required]],
  });

  onSubmit() {
    if (this.form.valid) {
      const filtered = {};
      for (let key in this.form.value) {
        if (this.form.value[key]) {
          filtered[key] = this.form.value[key];
        }
      }
      this.loading = true;
      this.formChange.emit(filtered);
    }
  }

  onDelete() {
    this.delete.emit();
  }

  ngOnInit() {
  }
  ngOnDestroy() { }
}
