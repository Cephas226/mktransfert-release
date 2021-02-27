import {Component, Input, OnInit} from '@angular/core';
import {Employees} from "@modules/employees/models";
import {Observable} from "rxjs";
import {EmployeesService} from "@modules/employees/services/employees.service";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'sb-employees-card',
  templateUrl: './employees-card.component.html',
  styleUrls: ['./employees-card.component.scss']
})

export class EmployeesCardComponent implements OnInit {
  @Input() employees: Employees | undefined;
  ellipsis=faEllipsisV;
  employeeId: string | undefined;
  constructor(private employeesService:EmployeesService,
              private modalService: NgbModal,private router:Router) { }
  ngOnInit(): void {

  }
  editEmployee(employee:Employees) {
    this.router.navigateByUrl('employees/edit-employee/' + employee.id);
  }

  deleteEmployeeModal(targetModal: any, employee: any) {
    this.employeeId = employee.id
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
  }

  deleteEmployee() {
    this.modalService.dismissAll();
    this.employeesService.deleteEmployee(this.employeeId)
  }
  viewEmployee(employee: any) {
    this.router.navigateByUrl('employees/employee-details/' + employee.id);
  }

  archiveEmployee(employees: Employees) {
       employees.isArchived=!employees.isArchived
    this.employeesService.pacthEmployee(employees,employees.id)
  }
}
