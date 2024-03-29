import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { catchError, takeUntil } from "rxjs/operators";
import { Tag } from "../_models";
import { TagsService } from "../_services/tags.service";

@Component({
  selector: "app-tags",
  templateUrl: "./tags.component.html",
  styleUrls: ["./tags.component.scss"],
})
export class TagsComponent implements OnInit, OnDestroy {
  tags: Tag[];
  editTag: Tag;
  createTag = false;
  errors: any;
  destroyed$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private tagsService: TagsService,
    private fb: FormBuilder
  ) {
    this.tagsService.models$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((tags: Tag[]) => {
        this.tags = tags;
      });
  }

  get f() {
    return this.form.controls;
  }

  form = this.fb.group({
    name: [null, Validators.required],
    slug: [null, Validators.required],
    description: null,
  });

  edit(tag: Tag) {
    this.createTag = false;
    this.form.reset();
    this.form.patchValue(tag);
    this.editTag = tag;
  }

  update(i) {
    if (!this.form.valid || !this.editTag || !this.editTag.exists) {
      return;
    }
    this.tagsService
      .update(this.editTag.id, this.form.value)
      .subscribe((tag: Tag) => {
        this.tagsService.pushModel(tag, i);
        this.editTag = undefined;
      });
  }

  addCreateTagForm() {
    this.editTag = undefined;
    this.form.reset();
    this.createTag = true;
  }

  create() {
    this.tagsService
      .create(this.form.value)
      .pipe(
        catchError((err) => {
          this.errors = err;
          return err;
        })
      )
      .subscribe((tag: Tag) => {
        if (tag) {
          this.tagsService.pushModel(tag);
          this.createTag = false;
          this.errors = null;
        }
      });
  }

  delete(i: number, id: number) {
    this.tagsService
      .delete(id)
      .pipe(
        catchError((err) => {
          this.errors = err;
          return err;
        })
      )
      .subscribe((res: boolean) => {
        if (res === true) {
          this.tagsService.deleteModel(i);
          this.errors = null;
        }
      });
  }

  onRefresh() {
    this.tagsService.pull();
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
