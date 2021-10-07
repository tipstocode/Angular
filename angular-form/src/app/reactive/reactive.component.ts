import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


reactiveFrom = new FormGroup({
    "firstName": new FormControl(""),
    "lastName": new FormControl(""),
    "gender": new FormControl("")
});
reactiveFrom1 = this.fb.group({
  "firstName": [""],
  "lastName": [""],
  "gender": [""]
});


  ngOnInit(): void {
  }

  reactiveFormSubmit(){
    console.log(this.reactiveFrom.value);
  }
  reactiveFormSubmit1(){
    console.log(this.reactiveFrom1.value);
  }

}
