import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, tap } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly baseUrl = 'http://localhost:3000/posts';
  private readonly http = inject(HttpClient);

  public countPosts = signal(0);

  /**
   * get posts
   * @returns Observable<Post[]>
   */
  private getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  /**
   * get posts signal
   */
  public getPostsSignal = toSignal(
    this.getPosts().pipe(tap((posts) => this.countPosts.set(posts.length))),
    {
      initialValue: [] as Post[],
    }
  );

  /**
   * get post by id
   * @param id number
   * @returns Post
   */
  public getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }
}
