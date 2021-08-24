import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  constructor() { }

  passStyle = 'green';

  failStyle = 'red';
  
  passStyles = {
      'font-style':'italic',
      'font-weight': 'bold',
      'font-size': '16px',
      'color':'green'
  };
  failStyles = {
    'font-style':'normal',
      'font-weight': 'normal',
      'font-size': '16px',
      'color':'red'
  };

  headStyle = {'font-weight':'800', 'color':'orange', 'background-color':'yellow'};
  
  studentList:Array<any> =[
    {"name":"John", "score":35, "result":"PASS"},
    {"name":"Peter", "score":20, "result":"FAIL"},
    {"name":"David", "score":15, "result":"FAIL"},
    {"name":"Salman", "score":45, "result":"PASS"},
    {"name":"Khan", "score":80, "result":"PASS"}

  ];

  
  ngOnInit(): void {
    
  
  }

}
