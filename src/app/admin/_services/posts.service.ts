import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private http: HttpClient) {}

  create(postData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/post/create`, postData);
  }
  update(postData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/post/update`, postData);
  }
}
