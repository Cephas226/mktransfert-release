import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "@modules/employees/services/employees.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Department, Employees, Roles,History} from "@modules/employees/models";
import {Observable, Subscription} from "rxjs";
import {TokenStorageService} from "@modules/auth/services/tokenstorageservice.service";

@Component({
  selector: 'sb-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  selectedEmploy: Employees | undefined
  public editEmployForm: FormGroup;
  public createEmployForm: FormGroup;

  id: any
  message: string | undefined;
  isLoggedIn = false;
  showSuperAdminComp = false;
  showAdminComp = false;
  private roles: string[] = [];
  email?: string;
  keys = Object.keys;
  eRole = Roles;
  eDepartments = Department;
  public isCollapsed = true;
  private _id$: Subscription | undefined;
  history: any[] = [];
  tempoHistorique:any[]=[]
  employee$!: Observable<Employees[]>;
  /*<----Getter of array--->*/
  get role() { return this.editEmployForm.get("roles") as FormArray}
  get department() {
    if(this.id)
    {return this.editEmployForm.get('department');}
    else{return this.createEmployForm.get('department');}
  }
  get status() {
    if (this.id){return this.editEmployForm.get('status');}
    else{return this.createEmployForm.get('status');}
  }
  get sex() {
    if (this.id){return this.editEmployForm.get('gender');
    }
    else {return this.createEmployForm.get('gender');
    }
  }

 
  /*<----Getter of array--->*/
  constructor(
    private employeesService:EmployeesService,
    public activatedRoute:ActivatedRoute,
    public router:Router,private tokenStorageService:TokenStorageService,
    public fb: FormBuilder
  ) {
    this.editEmployForm = this.fb.group({
      firstName: new FormControl('',   Validators.required),
      lastName: new FormControl('',   Validators.required),
      gender: new FormControl('M',   Validators.required),
      jobRole: new FormControl('',   Validators.required),
      department: new FormControl('',   Validators.required),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      businessPhone: new FormControl('',   Validators.required),
      privatePhone: new FormControl('',   Validators.required),
      workLocation: new FormControl('',   Validators.required),
      status: new FormControl('',   Validators.required),
      roles: new FormControl('',  new FormArray([])),
      historique:  new FormArray([]),
    });
    this.createEmployForm = this.fb.group({
      firstName: new FormControl('',   Validators.required),
      lastName: new FormControl('',   Validators.required),
      gender: new FormControl('M'),
      jobRole: new FormControl('',   Validators.required),
      department: new FormControl('',   Validators.required),
      email: new FormControl('',   [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      businessPhone: new FormControl('',   Validators.required),
      privatePhone: new FormControl('',   Validators.required),
      workLocation: new FormControl('',   Validators.required),
      status: new FormControl('',   Validators.required),
      roles: new FormControl('',   new FormArray([])),
      historique: new FormControl('',   new FormArray([])),
    });

  }

  ngOnInit(): void {
    this.getSelectedEmployee()
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showSuperAdminComp = this.roles.includes('ROLE_SUPER_ADMIN');
      this.showAdminComp = this.roles.includes('ROLE_ADMIN');

      this.email = user.email;
  }
  }
  get Sex() {
    return this.createEmployForm.get('gender');
  }
    getSelectedEmployee(){
      this.id  = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.id){
        this.employeesService.getSelectedEmployees(this.id).subscribe(
          ( emp:any)=> {
            this.selectedEmploy=emp;
            if (this.id){
              if (emp) {
                emp.historique?.forEach(
                    (hist: any)=>{
                  this.tempoHistorique?.push({ year: hist.year, entitled: hist.entitled})
                      this.historicals.insert(0,this.fb.group({
                        id:hist.id,
                        year:hist.year,
                        entitled:hist.entitled
                      }))
                })
                emp.roles.map((role: any) => {
                  this.role.patchValue(role['name'])
                });
                console.log(this.historicals.value)
              }
              this.patchEmployeeForm(emp)
              console.log(this.role.value)
            }
          }
          )
      }
    }
   patchEmployeeForm(selectedEmploy: Employees | undefined) {
    this.editEmployForm!.setValue({

      firstName: selectedEmploy?.firstName,
      lastName: selectedEmploy?.lastName,
      gender:selectedEmploy?.gender,
      jobRole: selectedEmploy?.jobRole,
      department: selectedEmploy?.department,
      email: selectedEmploy?.email,
      businessPhone:selectedEmploy?.businessPhone,
      privatePhone:selectedEmploy?.privatePhone,
      workLocation:selectedEmploy?.workLocation,
      status:selectedEmploy?.status,
      roles:this.role.value,
      historique:selectedEmploy?.historique
    })
  }
/*  Form getter */
/*
  get historicals(): FormArray{
    if(this.id){return this.editEmployForm.get('historique') as FormArray}
    else {return this.createEmployForm.get('historique') as  FormArray}
  }
*/

  get historicals() : FormArray {
   if (this.id){
     return this.editEmployForm.controls.historique as FormArray
   }
   else {
     return this.createEmployForm.controls.historique as FormArray
   }
  }

  get roleEdit() {
    return this.editEmployForm.get('role');
  }

  get roleCreate() {
    return this.createEmployForm.get('role');
  }


  changeGender(event: { value: any; target: { value: any; }; }) {
    console.log(event.value)
    if (this.id){
      this.sex?.setValue(event.target?.value, {
        onlySelf: true
      })
    }
    else {
      this.sex?.setValue(event.target?.value, {
        onlySelf: true
      })
    }
  }
  changeDepartment(event: { value: any; target: { value: any; }; }) {
    console.log(event.value)
    if (this.id){
      this.department?.setValue(event.target?.value, {
        onlySelf: true
      })
    }
    else {
      this.department?.setValue(event.target?.value, {
        onlySelf: true
      })
    }
  }
  changeStatus(event: { value: any; target: { value: any; }; }) {
    console.log(event.target)
    if (this.id){
      this.status?.setValue(event.target?.value, {
        onlySelf: true
      })
    }
    else {
      this.status?.setValue(event.target?.value, {
        onlySelf: true
      })
    }
  }

  changeRole(event: { value: any; target: { value: any; }; }) {
    console.log(event.target.value)
    if (this.id){
      this.role?.setValue(event.target?.value, {
        onlySelf: true
      })
    }
    else {
      this.role?.setValue(event.target?.value, {
        onlySelf: true
      })
    }
  }
  newHistorical(): FormGroup {
    return this.fb.group({
      id:'',
      year: '',
      entitled: '',
    })
 }
 addHistorical() {
  this.historicals.push(this.newHistorical());
}

removeHistorical(i:number) {
  this.historicals.removeAt(i);
}
onSubmit(){
  this.role.patchValue([this.role.value])
  console.log(this.editEmployForm.value)

if(this.id){
    if(this.editEmployForm.valid){
      this.employeesService.updateEmployee(this.editEmployForm?.value,this.id)
      this.historicals.controls.map(
        f=>{
          this.employeesService.updateHistory(f.value,this.id).subscribe(
            history=>{
              console.log(history)
            },
            ()=>{
                this.employeesService.employees$;
            }
          )
        }
    )
    }
  }
  else {
    if(this.createEmployForm.valid){
      this.employeesService.createEmployee(this.createEmployForm?.value).subscribe(
        (e:any)=>{
          this.historicals.controls.map(
              f=>{
                this.employeesService.createHistory(f.value,e.id).subscribe(
                  history=>{
                    console.log(history)
                  },
                  ()=>{
                      this.employeesService.employees$;
                  }
                )
              }
          )
          this.router.navigateByUrl('/employees')
        },

      );
    }
  }
}
}
