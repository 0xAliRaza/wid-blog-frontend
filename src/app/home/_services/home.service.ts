import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Author, Post, Tag, Type } from '../_models';

@Injectable()
export class HomeService {
    constructor(private http: HttpClient) { }

    indexPosts(page: number): Observable<any> {
        const params: any = {};
        params.page = page;
        return this.http.get(`${environment.apiUrl}/blog`, {
            params,
        });
    }

    indexPages(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/blog/page`);
    }

    indexTags(): Observable<Tag> {
        return this.http.get<Tag>(`${environment.apiUrl}/blog/tag`);
    }

    getPost(slug: string): Observable<Post> {
        return this.http.get<Post>(`${environment.apiUrl}/blog/${slug}`);
    }

    getAuthor(slug: string): Observable<Author> {
        return this.http.get<Author>(`${environment.apiUrl}/blog/author/${slug}`);
    }

    getTag(slug: string): Observable<Tag> {
        return this.http.get<Tag>(`${environment.apiUrl}/blog/tag/${slug}`);
    }


}
