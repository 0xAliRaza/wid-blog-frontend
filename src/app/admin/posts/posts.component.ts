import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "@environments/environment";
import { catchError, first, map, takeUntil } from "rxjs/operators";
import { Subscription, throwError } from "rxjs";
import { PostsService } from "../_services/posts.service";
import { AuthenticationService } from "../_services";
import { Post } from "../_models";
import { ActivatedRoute } from "@angular/router";
import { Type } from "@app/home/_models";

@Component({
  selector: "admin-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit, OnDestroy {
  constructor(private posts: PostsService, private route: ActivatedRoute) { }
  httpErrors: HttpErrorResponse;
  successMsgs: string[] = [];
  type: Type = Type.Post;
  POSTS: Post[];
  currentPage = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [5, 10, 20, 50, 100];
  published: boolean;

  isPage(): boolean {
    return this.type === Type.Page;
  }

  fetchPosts(): void {
    this.posts
      .indexPaginated(this.type, this.published, this.currentPage, this.tableSize)
      .subscribe((response) => {
        this.POSTS = response.data as Post[];
        this.count = response.total;
        this.currentPage = response.current_page;
      });
  }


  onTableDataChange(event: number) {
    this.currentPage = event;
    this.fetchPosts();
  }

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.currentPage = 1;
    this.fetchPosts();
  }

  onPostsStatusChange(event): void {
    if (event.target.value == 'true') {
      this.published = true;
    } else if (event.target.value == 'false') {
      this.published = false;
    } else if (event.target.value == 'undefined') {
      this.published = undefined;
    }
    else {
      return;
    }
    this.currentPage = 1;
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


  onRefresh() {
    this.fetchPosts();
  }

  ngOnInit(): void {
    if (this.route.snapshot.data.page) {
      this.type = Type.Page;
    }
    this.route.queryParams
      .subscribe((params) => {
        if (params.status === "published") {
          this.published = true;
        }
        if (params.status === "draft") {
          this.published = false;
        }
        this.fetchPosts();
      });
  }
  ngOnDestroy() { }
}
