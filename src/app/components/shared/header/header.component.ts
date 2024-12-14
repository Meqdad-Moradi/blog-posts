import { Component, input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ShowcaseComponent } from '../../apps/showcase/showcase.component';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, ShowcaseComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  subMenu = input<boolean>(false);
}
