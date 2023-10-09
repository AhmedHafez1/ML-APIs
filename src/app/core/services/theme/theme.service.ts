import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = 'default-theme';

  constructor() {}

  setTheme(theme: string) {
    document.body.classList.remove(this.currentTheme);
    this.currentTheme = theme;
    document.body.classList.add(this.currentTheme);
  }
}
