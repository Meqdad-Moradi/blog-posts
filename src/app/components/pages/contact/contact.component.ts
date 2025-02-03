import { Component, inject } from '@angular/core';
import { ShowcaseComponent } from '../../shared/showcase/showcase.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { validateEmail } from '../../../helpers/utils';
import { instagramRecords } from '../../../models/instagram-records';
import { MatDialog } from '@angular/material/dialog';
import { ImagePreviewDialogComponent } from '../../dialogs/image-preview-dialog/image-preview-dialog.component';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ShowcaseComponent,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private readonly matDialog = inject(MatDialog);

  public istagramRecords = instagramRecords;

  public contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, validateEmail()]],
    message: ['', [Validators.required]],
  });

  /**
   * onSubmit
   * @param e Event
   * @returns void
   */
  public onSubmit(e: Event): void {
    e.preventDefault();
    if (this.contactForm.invalid) return;

    this.contactForm.reset();
  }

  /**
   * displayImage
   * @param url string
   */
  public displayImage(url: string): void {
    this.matDialog.open(ImagePreviewDialogComponent, {
      data: url,
    });
  }
}
