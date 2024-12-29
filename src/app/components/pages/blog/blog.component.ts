import { Component } from '@angular/core';
import { ShowcaseComponent } from '../../shared/showcase/showcase.component';
import { ListComponent } from "../../blog-posts/list/list.component";

@Component({
  selector: 'app-blog',
  imports: [ShowcaseComponent, ListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
