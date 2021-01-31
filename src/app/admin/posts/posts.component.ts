import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "@environments/environment";
import { catchError, first, map } from "rxjs/operators";
import { Subscription, throwError } from "rxjs";
import { PostsService } from "../_services/posts.service";
import { AuthenticationService } from "../_services";
import { Post } from "../_models";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "admin-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit, OnDestroy {
  constructor(private posts: PostsService, private route: ActivatedRoute) {}
  httpErrors: HttpErrorResponse;
  successMsgs: string[] = [];
  type = "all";
  POSTS: Post[];
  page = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [5, 10, 20, 50, 100];

  fetchPosts(): void {
    this.posts
      .indexPaginated(this.page, this.tableSize, this.type)
      .pipe(
        catchError((err) => {
          this.httpErrors = err;
          return throwError(err);
        })
      )

      .subscribe((response) => {
        this.POSTS = response.data as Post[];
        this.count = response.total;
        this.page = response.current_page;
      });
  }

  onTableDataChange(event: number) {
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

  onPostsTypeChange(event): void {
    this.type = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

  onPostDelete(postId: number) {
    this.posts
      .delete(postId)
      .pipe(
        catchError((err) => {
          this.httpErrors = err;
          return throwError(err);
        })
      )
      .subscribe((res: any) => {
        if (res == true) {
          this.successMsgs = ["Post was successfully deleted."];
          this.fetchPosts();
        }
      });
  }

  clearErrors(): void {
    this.httpErrors = undefined;
  }

  clearSuccessMsgs(): void {
    this.successMsgs = [];
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.type === "draft" || params.type === "published") {
        this.type = params.type;
      } else {
        this.type = "all";
      }
      this.fetchPosts();
    });
  }
  ngOnDestroy() {}
}
