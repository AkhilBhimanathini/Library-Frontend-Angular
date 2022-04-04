import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id!:number;
  student:Student=new Student();

  constructor(private router:ActivatedRoute,private studentservice:StudentService) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.studentservice.getStudentById(this.id).subscribe(data=>{
      this.student=data;
    })
  }

}
