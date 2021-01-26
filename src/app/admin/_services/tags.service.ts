import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Tag, User } from "../_models";

export class TagsService {
  tags: BehaviorSubject<Tag[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.index().subscribe();
  }

  index(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${environment.apiUrl}/tag`).pipe(
      map((tags) => {
        const tagModels: Tag[] = [];
        tags.forEach((val: Tag) => {
          tagModels.push(new Tag(val));
        });
        return tagModels;
      }),
      tap((tags) => {
        this.tags.next(tags);
      })
    );
  }

  create(data): Observable<Tag> {
    return this.http
      .post<Tag>(`${environment.apiUrl}/tag`, data)
      .pipe(map((res) => new Tag(res)));
  }

  update(id: number, data: any): Observable<Tag> {
    return this.http
      .put<Tag>(`${environment.apiUrl}/tag/${id}`, data)
      .pipe(map((res) => new Tag(res)));
  }

  delete(id): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/tag/${id}`);
  }

  pushModel(tag: Tag, i?: number) {
    if (this.tags.value.length == 0) {
      return;
    }
    const tags = this.tags.value;
    if (i) {
      tags[i] = tag;
    } else {
      tags.push(tag);
    }
    this.tags.next(tags);
  }

  deleteModel(i: number) {
    if (this.tags.value.length == 0) {
      return;
    }
    const tags = this.tags.value;
    tags.splice(i, 1);
    this.tags.next(tags);
  }
}
