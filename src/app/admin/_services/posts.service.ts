import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "@environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "@app/admin/_models";
import { Tag } from "@app/admin/_models/tag";
import { CRUD } from "./crud";
import { Injectable } from "@angular/core";
import { Type } from "@app/home/_models";

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

  indexPaginated(type: Type, published: any, currentPage: any, tableSize: any): Observable<any> {
    const params: any = {};
    params.type = type;
    if (published !== undefined) {
      params.published = Number(published);
    }
    params.page = currentPage;
    params.per_page = tableSize;
    return this.httpClient.get(`${environment.apiUrl}/post`, {
      params,
    });
  }
}
