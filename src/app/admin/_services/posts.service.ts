import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "@environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import {  map } from "rxjs/operators";
import { Post } from "@app/admin/_models";
import { Tag } from "@app/admin/_models/tag";
export class PostsService {
  tags: BehaviorSubject<Tag[]>;
  newlyCreatedPost: Post;

  constructor(private http: HttpClient) {
    this.tags = new BehaviorSubject([] as Tag[]);
    this.updateTags();
  }

  getTagsObservable(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${environment.apiUrl}/post/tags`).pipe(
      map((tags) => {
        const tagModels: Tag[] = [];
        tags.forEach((val: Tag) => {
          val.created_at = new Date(val.created_at);
          val.updated_at = new Date(val.updated_at);
          tagModels.push(Object.assign(new Tag(), val));
        });
        return tagModels;
      })
    );
  }

  updateTags(): Tag[] {
    this.getTagsObservable().subscribe((tags: Tag[]) => {
      this.tags.next(tags);
    });

    return this.tags.value;
  }

  pushTag(val: Tag) {
    const tags = this.tags.value;
    const tag = Object.assign(new Tag(), val);
    tags.push(tag);
    this.tags.next(tags);
  }

  get(id: number): Observable<Post> {
    return this.http
      .get<Post>(`${environment.apiUrl}/post/${id}`)
      .pipe(map((res) => this.transformPostResponse(res)));
  }

  create(data: object): Observable<Post> {
    return this.http
      .post<Post>(`${environment.apiUrl}/post/create`, data)
      .pipe(map((res) => this.transformPostResponse(res)));
  }

  update(data: object): Observable<Post> {
    return this.http
      .post<Post>(`${environment.apiUrl}/post/update`, data)
      .pipe(map((res) => this.transformPostResponse(res)));
  }

  private transformPostResponse(res: object) {
    for (const key in res) {
      if (res[key] === null) {
        res[key] = "";
      }
    }
    return new Post(res);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/post/${id}`);
  }

  index(page: any, tableSize: any, type: string): Observable<any> {
    const params: any = {};
    params.page = page;
    params.per_page = tableSize;
    if (type === "published" || type === "draft") {
      params.type = type;
    }
    return this.http.get(`${environment.apiUrl}/post`, {
      params,
    });
  }
}
