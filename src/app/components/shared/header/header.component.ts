import { Component } from '@angular/core';
import { ShowcaseComponent } from '../../apps/showcase/showcase.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, ShowcaseComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
