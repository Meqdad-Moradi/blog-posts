import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-list',
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  private readonly blogService = inject(BlogService);

  public posts = this.blogService.getPostsSignal;
}
