import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Post, User } from "@app/admin/_models";
import { Tag } from "@app/admin/_models/tag";
import { AuthenticationService, PostsService, TagsService, UsersService } from "@app/admin/_services";
import { Type } from "@app/home/_models";
import { Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit, OnDestroy {
  destroyed$: Subject<boolean> = new Subject();
  user: User;
  postStatus = "Unsaved";
  tags: Tag[];
  allUsers: User[];
  type: Type = Type.Post;
  constructor(
    private auth: AuthenticationService,
    private posts: PostsService,
    private tagsService: TagsService,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.auth.currentUser
      .pipe(takeUntil(this.destroyed$))
      .subscribe((user) => (this.user = user));
    this.tagsService.models$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((tags: Tag[]) => {
        this.tags = tags;
      });
    this.usersService.models$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((users: User[]) => {
        this.allUsers = users;
      });

  }

  onFormChange(data: object) {
    this.postStatus = "Creating...";
    this.posts.create(data).subscribe((post: Post) => {
      if (post.exists) {
        this.tagsService.pull();
        const url = this.isPage() ? `admin/editor/page/${post.id}` : `admin/editor/post/${post.id}`;
        this.router.navigate([url]);
      }
    });
  }

  isPage(): boolean {
    return this.type === Type.Page;
  }

  onCreateTag(tag: Tag) {
    this.tagsService.pushModel(tag);
  }

  ngOnInit() {
    if (this.route.snapshot.data.page) {
      this.type = Type.Page;
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
