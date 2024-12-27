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

  public contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, validateEmail()]],
    message: ['', [Validators.required]],
  });

  public onSubmit(e: Event) {
    e.preventDefault();
    if (this.contactForm.invalid) return;

    this.contactForm.reset();
  }
}
