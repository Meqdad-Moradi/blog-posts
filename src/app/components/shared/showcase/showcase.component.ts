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
  public btnLabel = input<string>('');
  public topDistance = input<boolean>(true);
  public backgroundUrl = input<string>(
    'https://images.pexels.com/photos/680239/pexels-photo-680239.jpeg?auto=compress&cs=tinysrgb&w=800'
  );
}
