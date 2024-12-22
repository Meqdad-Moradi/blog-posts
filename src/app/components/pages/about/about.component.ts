import { Component } from '@angular/core';
import { ShowcaseComponent } from '../../shared/showcase/showcase.component';

@Component({
  selector: 'app-about',
  imports: [ShowcaseComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
