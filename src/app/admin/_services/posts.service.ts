import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "../_models";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private http: HttpClient) {}

  create(postData): Observable<Post> {
    return this.http
      .post(`${environment.apiUrl}/post/create`, postData)
      .pipe(map((res) => Object.assign(new Post(), res)));
  }
  update(postData): Observable<Post> {
    return this.http
      .post(`${environment.apiUrl}/post/update`, postData)
      .pipe(map((res) => Object.assign(new Post(), res)));
  }
}
