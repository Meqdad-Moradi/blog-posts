import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { BlogService } from '../../../services/blog.service';
import { Router } from '@angular/router';

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

  public showPostDetails(id: number): void {
    this.router.navigate(['details'], { queryParams: { id } });
    console.log(id);
  }
}
