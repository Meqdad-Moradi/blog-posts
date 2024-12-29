import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { CardComponent } from '../../shared/card/card.component';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-list',
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  private readonly blogService = inject(BlogService);
  private readonly router = inject(Router);

  public posts = this.blogService.getPostsSignal;

  /**
   * show post details
   * @param post Post
   */
  public showPostDetails(post: Post): void {
    this.router.navigate(['/details'], { state: post });
  }
}
