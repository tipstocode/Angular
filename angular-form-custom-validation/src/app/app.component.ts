import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form-custom-validation';
  
  //Template-driven Form Controls
  user = {
    'firstName':'',   
    'lastName':'', 
    'email':'',
    'password':'',
    'tc':false
  }
  tdSignupFormSubmit(){
    console.log(this.user);
  }

  //Reactive Form Controls
  constructor(private fb: FormBuilder) { }
  signupForm = this.fb.group({
    "firstName": ["", [Validators.required, Validators.minLength(4)]],
    "lastName": ["", [Validators.required, Validators.maxLength(4)]],    
    "email": ["", [Validators.required,Validators.email]],
    "password":["", [Validators.required, Validators.minLength(6),  validatePasswordStrength()]],
    "tc": [false, Validators.requiredTrue]
  });
  ReSignupFormSubmit(){
    console.log(this.signupForm.value);
  }
}
export function validatePasswordStrength(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;

      if (!value) {        
          return null;          
      }

      const upperCaseCheck = /[A-Z]+/.test(value);

      const lowerCaseCheck = /[a-z]+/.test(value);

      const numericCheck = /[0-9]+/.test(value);

      const validPassword = upperCaseCheck && lowerCaseCheck && numericCheck;     

      return !validPassword ? {passwordStrength:true}: null;
  }
}
