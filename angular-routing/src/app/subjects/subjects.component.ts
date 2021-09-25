import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjectList:any;

  constructor(private studentService: StudentserviceService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.subjectList = this.studentService.getSubjectList();

  }
  goToStudentList(){
    this.router.navigate(['../studentlist'], { relativeTo: this.route });
  }

}
