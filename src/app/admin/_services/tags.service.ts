import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Tag, User } from "../_models";
import { CRUD } from "./crud";

export class TagsService extends CRUD<Tag> {
  models$: BehaviorSubject<Tag[]> = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) {
    super(`${environment.apiUrl}/tag`, httpClient, Tag);
    this.pull();
  }

}
