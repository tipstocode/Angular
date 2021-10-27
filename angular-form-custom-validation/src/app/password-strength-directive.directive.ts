import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { validatePasswordStrength } from './app.component';


@Directive({
  selector: '[appPasswordStrengthDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting:PasswordStrengthDirectiveDirective,
    multi: true
}]
})
export class PasswordStrengthDirectiveDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return validatePasswordStrength()(control);
}
}
