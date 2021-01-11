import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "@environments/environment";
import { catchError, first, map } from "rxjs/operators";
import { Subscription, throwError } from "rxjs";
import { PostsService } from "../_services/posts.service";
import { AuthenticationService } from "../_services";
import { Post } from "../_models";

@Component({
  selector: "admin-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit, OnDestroy {
  constructor(private posts: PostsService) {}
  errors: string[];
  POSTS: Post[];
  page = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [5, 10, 20, 50, 100];

  fetchPosts(): void {
    this.posts
      .index(this.page, this.tableSize)
      .pipe(
        first(),
        catchError((err) => this.handleError(err))
      )

      .subscribe((response) => {
        this.POSTS = response.data as Post[];
        console.log("posts>>>>>>>>", this.POSTS);
        this.count = Number(response.total);
        this.page = Number(response.current_page);
      });
  }

  onTableDataChange(event) {
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

  handleError(err: HttpErrorResponse) {
    const errors = err.error.errors
      ? Object.keys(err.error.errors).map((key) => err.error.errors[key])
      : [err.error.message];
    this.errors = errors;
    return throwError(err);
  }

  ngOnInit(): void {
    this.fetchPosts();
  }
  ngOnDestroy() {}
}
