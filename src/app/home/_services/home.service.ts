import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../_models';

export class HomeService {
    constructor(private http: HttpClient) { }

    // index(): Observable<any> {
    //     return this.http.get<any>(`${environment.apiUrl}/blog`);
    // }

    indexPosts(page: any): Observable<any> {
        const params: any = {};
        params.page = page;
        return this.http.get(`${environment.apiUrl}/blog`, {
            params,
        });
    }

    getPost(slug: string): Observable<Post> {
        return this.http.get<Post>(`${environment.apiUrl}/blog/${slug}`);
    }
}
