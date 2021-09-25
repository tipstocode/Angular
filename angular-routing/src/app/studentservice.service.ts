import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  studentList = [
    {"id":1,"name":"Salman","age":25,"gender":"MALE"},
    {"id":2,"name":"Sankar","age":30,"gender":"MALE"},
    {"id":3,"name":"Shivani","age":19,"gender":"FEMALE"},
    {"id":4,"name":"John","age":28,"gender":"MALE"},
    {"id":5,"name":"Roshini","age":30,"gender":"FEMALE"}
  ];
  subjectList = [
    {"id":"MAT1","name":"MATHEMATICS"},
    {"id":"PHY1","name":"PHYSICS"},
    {"id":"CHE1","name":"CHEMISTRY"},
    {"id":"BIO1","name":"BIOLOGY"},
    {"id":"ZOO1","name":"ZOOLOGY"},
    
  ];


  constructor() { }

  getStudentList(){
    return this.studentList;
  }
  getSubjectList(){
    return this.subjectList;
  }
}
