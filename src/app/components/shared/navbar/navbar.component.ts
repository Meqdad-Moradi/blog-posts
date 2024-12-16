import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly themeService = inject(ThemeService);

  public currentTheme = this.themeService.currentTheme;

  public toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
