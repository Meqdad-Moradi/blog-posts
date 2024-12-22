import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-showcase',
  imports: [MatButtonModule, NgClass],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss',
})
export class ShowcaseComponent {
  public title = input<string>('');
  public showcase = input<string>('');
}
