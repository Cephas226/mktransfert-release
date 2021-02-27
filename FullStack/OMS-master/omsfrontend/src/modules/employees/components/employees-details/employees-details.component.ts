import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "@modules/employees/services/employees.service";
import {ActivatedRoute} from "@angular/router";
import {Employees} from "@modules/employees/models";


@Component({
  selector: 'sb-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.scss']
})
export class EmployeesDetailsComponent implements OnInit {
  selectedEmployDetails: Employees | undefined
  empId: string | null | undefined
  constructor(
    private employeesService:EmployeesService,
    public activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getSelectedEmployeeDetails()
  }
  getSelectedEmployeeDetails(){
    this.empId  = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.empId){
      this.employeesService.getSelectedEmployees(this.empId) .subscribe(
          ( emp:any)=> {
            this.selectedEmployDetails=emp;
          }
          )

    }
  }
}
