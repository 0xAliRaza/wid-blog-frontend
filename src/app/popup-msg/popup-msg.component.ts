import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "popup-msg",
  templateUrl: "./popup-msg.component.html",
  styleUrls: ["./popup-msg.component.scss"],
})
export class PopupMsgComponent implements OnInit {
  @Input() errors: string[];
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
