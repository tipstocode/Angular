import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  studentList:any;
  constructor(private studentservice: StudentserviceService) { }

  ngOnInit(): void {
    this.studentList = this.studentservice.getStudentList();
  }

}
