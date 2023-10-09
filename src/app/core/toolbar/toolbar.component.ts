import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  onThemeChange(theme: string) {
    this.themeService.setTheme(theme);
  }
}
