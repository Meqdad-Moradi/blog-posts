import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../../models/post.model';
import { BlogService } from '../../../services/blog.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [DatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit, OnDestroy {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly blogService = inject(BlogService);
  private subscription!: Subscription;

  public post!: Post;

  ngOnInit(): void {
    const postId = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.getPost(postId!);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getPost(id: string): void {
    this.subscription = this.blogService
      .getPost(id)
      .subscribe((post) => (this.post = post));
  }
}
