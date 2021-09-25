import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  studentId:any

  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
   // this.studentId=this.activatedroute.snapshot.paramMap.get("id");
    this.activatedroute.paramMap.subscribe(params => { 
      this.studentId = params.get('id'); 
  });
  }

}
