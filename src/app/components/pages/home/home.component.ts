import { Component } from '@angular/core';
import { ListComponent } from "../../blog-posts/list/list.component";
import { ShowcaseComponent } from "../../shared/showcase/showcase.component";

@Component({
  selector: 'app-home',
  imports: [ListComponent, ShowcaseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
