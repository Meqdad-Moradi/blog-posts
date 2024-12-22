import { Component } from '@angular/core';
import { ListComponent } from '../../blog-posts/list/list.component';
import { ShowcaseComponent } from '../../shared/showcase/showcase.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [ListComponent, ShowcaseComponent, RouterLink, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
