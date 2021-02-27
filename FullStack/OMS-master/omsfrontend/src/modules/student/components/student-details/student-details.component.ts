import { Component, OnInit } from '@angular/core';
import {Employees} from "@modules/employees/models";
import {EmployeesService} from "@modules/employees/services/employees.service";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "@modules/student/services/students.service";
import {Students} from "@modules/student/models";

@Component({
  selector: 'sb-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  selectedStudentDetails: Students | undefined
  studentId: string | null | undefined
  constructor(
    private studentService:StudentService,
    public activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getSelectedEmployeeDetails()
  }
  getSelectedEmployeeDetails(){
    this.studentId  = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.studentId){
      this.studentService.getSelectedStudent(this.studentId).subscribe(
        ( student:any)=> {
          this.selectedStudentDetails=student;
        })
    }
  }
}
