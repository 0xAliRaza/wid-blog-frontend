import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "@environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "@app/admin/_models";
import { Tag } from "@app/admin/_models/tag";
import { CRUD } from "./crud";
import { Injectable } from "@angular/core";

@Injectable()
export class PostsService extends CRUD<Post> {
  models$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  constructor(private httpClient: HttpClient) {
    super(`${environment.apiUrl}/post`, httpClient, Post);
  }
  getPage(id: number): Observable<Post> {
    return this.httpClient
      .get<Post>(`${environment.apiUrl}/post/page/${id}`)
      .pipe(map((res) => new Post(res)));
  }
  update(id = null, data: object): Observable<Post> {
    return this.httpClient
      .post<Post>(`${environment.apiUrl}/post/update`, data)
      .pipe(map((res) => new Post(res)));
  }

  delete(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${environment.apiUrl}/post/${id}`);
  }

  indexPaginated(pagePost: boolean, currentPage: any, tableSize: any, type: string): Observable<any> {
    const params: any = {};
    if (!!pagePost) {
      params.pagePost = true;
    }
    params.page = currentPage;
    params.per_page = tableSize;
    if (type === "published" || type === "draft") {
      params.type = type;
    }
    return this.httpClient.get(`${environment.apiUrl}/post`, {
      params,
    });
  }
}
