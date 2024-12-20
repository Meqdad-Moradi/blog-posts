import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly baseUrl = 'http://localhost:3000/posts';
  private readonly http = inject(HttpClient);

  private getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  public getPostsSignal = toSignal(this.getPosts(), {
    initialValue: [] as Post[],
  });
}
