import { Component } from '@angular/core';
import { ListComponent } from "../../blog-posts/list/list.component";

@Component({
  selector: 'app-home',
  imports: [ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
