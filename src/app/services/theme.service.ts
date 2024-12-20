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
    const theme = this.getTheme();
    this.setTheme(theme);
  }

  /**
   * setTheme theme
   * @param theme Theme
   */
  public setTheme(theme: Theme): void {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const currentMode =
      theme === 'system' ? (prefersDarkMode ? 'dark' : 'light') : theme;

    this.handleDarkModeChange(currentMode);
    this.storTheme(theme);
    this.currentTheme.set(theme);
  }

  /**
   * handleDarkModeChange
   * @param mode Theme
   */
  private handleDarkModeChange(mode: Theme): void {
    mode === 'dark'
      ? this.document.body.classList.add('dark')
      : this.document.body.classList.remove('dark');
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
