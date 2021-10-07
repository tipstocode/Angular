import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  user = {
    'firstName':'',
    'lastName':'',
    'gender':''
  }
  user1 = {
    'firstName':'',
    'lastName':'',
    'gender':''
  }


  ngOnInit(): void {
  }

  tdFormSubmit(){
    console.log(this.user);
  }
  tdFormSubmit1(userValue:any){
    console.log(userValue);
  }
  tdFormSubmit2(userValue:any){
    console.log(userValue);
  }

}
