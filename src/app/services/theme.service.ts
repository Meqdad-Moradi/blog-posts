import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { Theme } from '../models/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  public currentTheme = signal<Theme>('light');

  constructor() {
    this.handleSystemThemeChange();
  }

  /**
   * handleSystemThemeChange
   */
  private handleSystemThemeChange(): void {
    // get system theme preference (dark or light)
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (prefersDarkMode) {
      this.storTheme('dark');
    }

    // get current theme from local storage
    const theme = this.getTheme();
    this.setTheme(theme);
  }

  /**
   * toggleTheme
   */
  public toggleTheme(): void {
    this.setTheme(this.currentTheme() === 'light' ? 'dark' : 'light');
  }

  /**
   * setTheme theme
   * @param theme Theme
   */
  private setTheme(theme: Theme): void {
    if (theme === 'dark') {
      this.document.documentElement.classList.add('dark');
    } else {
      this.document.documentElement.classList.remove('dark');
    }
    // set current theme
    this.currentTheme.set(theme);
    this.storTheme(theme);
  }

  /**
   * storTheme
   * @param theme Theme
   */
  private storTheme(theme: Theme): void {
    localStorage.setItem('theme', theme);
  }

  /**
   * getTheme
   * @returns Theme
   */
  private getTheme(): Theme {
    return (localStorage.getItem('theme') as Theme) ?? 'light';
  }
}
