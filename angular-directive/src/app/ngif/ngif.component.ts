import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  constructor() { }
  
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
  
  studentList:Array<any> =[
    {"name":"John", "score":35, "result":"PASS", "status":true},
    {"name":"Peter", "score":20, "result":"FAIL", "status":false},
    {"name":"David", "score":15, "result":"FAIL", "status":false},
    {"name":"Salman", "score":45, "result":"PASS", "status":true},
    {"name":"Khan", "score":80, "result":"PASS", "status":true}

  ];

  ngOnInit(): void {
  }

  

}
