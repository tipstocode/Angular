import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }    

  studentList: any[] =[];
  
  ngOnInit(): void {

    this.studentList = [
      {"id":1,"name":"John","score":35,"result":"PASS"},
      {"id":2,"name":"Salman","score":45,"result":"PASS"},
      {"id":3,"name":"Peter","score":15, "result":"FAIL"},
      {"id":4,"name":"Kamal","score":25, "result":"FAIL"}
    ]
   
    
  }
  trackByStudents(index: number, id: any): number {
     return id;
  }

  resetStudents(){    
    this.studentList = [
      {"id":1,"name":"John","score":35,"result":"PASS"},
      {"id":2,"name":"Salman","score":45,"result":"PASS"},
      {"id":3,"name":"Peter","score":15, "result":"FAIL"},
      {"id":4,"name":"Kamal","score":25, "result":"FAIL"},
      {"id":5,"name":"Khan","score":35, "result":"PASS"},
      {"id":6,"name":"swathi","score":55, "result":"PASS"}
           
    ];
  }
  
}
