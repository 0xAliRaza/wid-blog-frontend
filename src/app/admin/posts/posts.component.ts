import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { map } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "admin-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit, OnDestroy {
  constructor(private http: HttpClient) {}
  data: any;
  private subscription: Subscription;
  getPosts() {
    this.subscription = this.http
      .post<any>(`${environment.apiUrl}/auth/me`, { Title: "fuck" })
      .subscribe((res) => {
        console.log("responsesss:   ", res);
        this.data = JSON.stringify(res);
      });
  }
  ngOnInit() {}
  ngOnDestroy() {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
