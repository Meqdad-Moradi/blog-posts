import { Component, input, output } from '@angular/core';
import { Post } from '../../../models/post.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  post = input.required<Post>();
  onClick = output<number>();

  showPostDetails(id: number): void {
    this.onClick.emit(id);
  }
}
