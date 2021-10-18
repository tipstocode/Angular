import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-formvalidation';

  //Template-driven Form Controls
  user = {
    'firstName':'',
    'lastName':'',
    'gender':'',
    'email':'',
    'age':'',
    'tc':false,
    'mobile':''
  }
  tdSignupFormSubmit(){
    console.log(this.user);
  }

  //Reactive Form Controls
  constructor(private fb: FormBuilder) { }
  signupForm = this.fb.group({
    "firstName": ["", [Validators.required, Validators.minLength(4)]],
    "lastName": ["", [Validators.required, Validators.maxLength(4)]],
    "gender": ["", Validators.required],
    "email": ["", [Validators.required,Validators.email]],
    "age": ["", [Validators.required,Validators.min(18),Validators.max(35)]],
    "mobile": ["", [Validators.required, Validators.pattern("^[0-9]*$"),
              Validators.minLength(10),Validators.maxLength(10)]],
    "tc": [false, Validators.requiredTrue]
  });
  ReSignupFormSubmit(){
    console.log(this.signupForm.value);
  }
}
