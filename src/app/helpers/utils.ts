import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * validateEmail
 * makes sure that the email is valid
 * @returns ValidatorFn
 */
export function validateEmail(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let message = '';
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (control.value && !control.value.match(emailPattern)) {
      message = 'Please enter a valid email address';
    }

    return message ? { errMsg: message } : null;
  };
}
