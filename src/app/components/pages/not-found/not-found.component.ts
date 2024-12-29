import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  private readonly router = inject(Router);

  public errorMessage!: string;

  constructor() {
    const errMsg = this.router.getCurrentNavigation()?.extras.state;
    this.errorMessage = errMsg?.['errorMsg'];
  }
}
