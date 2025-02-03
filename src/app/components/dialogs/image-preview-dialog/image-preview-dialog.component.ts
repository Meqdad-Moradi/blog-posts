import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image-preview-dialog',
  imports: [MatDialogModule, MatIconModule, MatButtonModule],
  templateUrl: './image-preview-dialog.component.html',
  styleUrl: './image-preview-dialog.component.scss',
})
export class ImagePreviewDialogComponent {
  public data = inject(MAT_DIALOG_DATA);

  public zoomIn(): void {}

  public zoomOut(): void {}
}
