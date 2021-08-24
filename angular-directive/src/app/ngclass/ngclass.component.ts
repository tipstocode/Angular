import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  constructor() { }

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
