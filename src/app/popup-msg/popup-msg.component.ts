import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { throwError } from "rxjs";

@Component({
  selector: "popup-msg",
  templateUrl: "./popup-msg.component.html",
  styleUrls: ["./popup-msg.component.scss"],
})
export class PopupMsgComponent implements OnInit {
  _errors: string[];

  @Input() set errors(errors: string[]) {
    this._errors = errors;
  }
  get errors() {
    return this._errors;
  }

  @Input() set httpErrors(err: HttpErrorResponse) {
    const errors = err.error.errors
      ? Object.keys(err.error.errors).map((key) => err.error.errors[key])
      : [err.error.message];
    this._errors = errors;
  }

  @Input() successMessages: string[];
  @Output() noErrorsLeft: EventEmitter<any> = new EventEmitter();

  constructor() {}

  delete(e, key) {
    this.errors.splice(key, 1);
    if (!this.errors || this.errors.length === 0 || this.errors.length < 0) {
      this.noErrorsLeft.emit();
    }
  }

  ngOnInit() {}
}
