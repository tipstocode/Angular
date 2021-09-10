import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'angular-pipe';

  //Input Values of Date Pipe
  //String
  datestring = "21 SEP 2021";
  //Date object
  currentDate = new Date();
  //Number
  currenttime = Date.now();  //retruns current date in milliseconds

  website = "TipsToCode!."

  

  amount = 150;

  students = [
    {
      id: 1,
      name: 'Salman',
      gender: 'MALE',
      score: 80
    },
    {
      id: 2,
      name: 'John',
      gender: 'MALE',
      score: 90
    },
    {
      id: 3,
      name: 'Fazil',
      gender: 'MALE',
      score: 70     
    },
    {
      id: 4,
      name: 'Sharmi',
      gender: 'FEMALE',
      score: 90
    },
    {
      id: 5,
      name: 'Kajal',
      gender: 'FEMALE',
      score: 50
    }
  ]
  
}
