import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Theme } from '../../../models/theme.model';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private readonly themeService = inject(ThemeService);

  public iconName = signal('');

  ngOnInit(): void {
    this.handleIconName();
  }

  /**
   * handleIconName
   * @returns void
   */
  private handleIconName(): void {
    const theme = this.themeService.currentTheme();
    switch (theme) {
      case 'dark':
        this.iconName.set('dark_mode');
        break;
      case 'light':
        this.iconName.set('light_mode');
        break;
      default:
        this.iconName.set('devices');
        break;
    }
  }

  /**
   * setTheme
   * @param mode Theme
   */
  public setTheme(mode: Theme): void {
    mode === 'system'
      ? this.iconName.set('devices')
      : this.iconName.set(mode + '_mode');
    this.themeService.setTheme(mode);
  }
}
