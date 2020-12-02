import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { environment } from "@environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { first, map, retry } from "rxjs/operators";
import { Post, User } from "../_models";
import { Tag } from "../_models/tag";

export class PostsService {
  tags: BehaviorSubject<Tag[] | []>;
  constructor(private http: HttpClient) {
    this.tags = new BehaviorSubject([]);
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
    this.getTagsObservable()
      .pipe(first())
      .subscribe((tags: Tag[]) => {
        this.tags.next(tags);
      });

    return this.tags.value;
  }

  get(id: number) {

  }

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
