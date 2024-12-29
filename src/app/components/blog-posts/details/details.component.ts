import { DatePipe } from '@angular/common';
import { Component, inject, OnDestroy, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Post } from '../../../models/post.model';
import { BlogService } from '../../../services/blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  imports: [DatePipe, MatIconModule, MatButtonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnDestroy {
  private readonly blogService = inject(BlogService);
  private readonly router = inject(Router);
  private id!: number;
  private subscription: Subscription[] = [];

  public post = signal<Post | null>(null);

  constructor() {
    this.post.set(this.router.getCurrentNavigation()?.extras?.state as Post);
  }

  /**
   * fetch previous post
   */
  public fetchPrevPost(e: Event): void {
    e.stopPropagation();
    this.id = +this.post()!.id - 1;

    if (this.id === 0) {
      this.id = this.blogService.countPosts();
    }

    this.subscription.push(
      this.blogService.getPost(this.id).subscribe((res) => {
        this.post.set(res);
      })
    );
  }

  /**
   * fetch next post
   */
  public fetchNextPost(e: Event): void {
    e.stopPropagation();

    this.id = +this.post()?.id! + 1;
    if (+this.post()?.id! === this.blogService.countPosts()) {
      this.id = 1;
    }

    this.subscription.push(
      this.blogService.getPost(this.id).subscribe((res) => {
        this.post.set(res);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
