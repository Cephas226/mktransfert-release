import { Component, OnInit } from '@angular/core';
import {CoursesService} from '@modules/courses/services/courses.service';
import {EmployeesService} from "@modules/employees/services/employees.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Department, Employees, Roles, History, Courses} from '@modules/employees/models';
import {Observable, Subscription} from "rxjs";
import {TokenStorageService} from "@modules/auth/services/tokenstorageservice.service";

@Component({
  selector: 'sb-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.scss']
})
export class EditCoursesComponent implements OnInit {
  selectedEmploy: Employees | undefined
  public editCourseForm: FormGroup;
  public createCourseForm: FormGroup;

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
  get role() { return this.editCourseForm.get("roles") as FormArray}
  get department() {
    if(this.id)
    {return this.editCourseForm.get('department');}
    else{return this.createCourseForm.get('department');}
  }
  get status() {
    if (this.id){return this.editCourseForm.get('status');}
    else{return this.createCourseForm.get('status');}
  }
  get frequency() {
    if (this.id){return this.editCourseForm.get('frequency');
    }
    else {return this.createCourseForm.get('frequency');
    }
  }

  get courseType() {
    if (this.id){return this.editCourseForm.get('courseType');
    }
    else {return this.createCourseForm.get('courseType');
    }
  }
 
  /*<----Getter of array--->*/
  constructor(
    private coursesService:CoursesService,
    public activatedRoute:ActivatedRoute,
    public router:Router,private tokenStorageService:TokenStorageService,
    public fb: FormBuilder
  ) {
    this.editCourseForm = this.fb.group({
      couresRoot: new FormControl('',   Validators.required),
      coursesName: new FormControl('',   Validators.required),
      coursesFrequency: new FormControl('Daily'),
      endDate: new FormControl('',   Validators.required),
      startDate: new FormControl('',   Validators.required),
      coursesType: new FormControl('Intensif',   Validators.required),
      coursesUnit:new FormControl('',   Validators.required),
      coursesTime:new FormControl('',   Validators.required),
    });
    this.createCourseForm = this.fb.group({
      couresRoot: new FormControl('',   Validators.required),
      coursesName: new FormControl('',   Validators.required),
      coursesFrequency: new FormControl('Daily'),
      endDate: new FormControl('',   Validators.required),
      startDate: new FormControl('',   Validators.required),
      coursesType: new FormControl('Intensif',   Validators.required),
      coursesUnit:new FormControl('',   Validators.required),
      coursesTime:new FormControl('',   Validators.required),
      // endTime:new FormControl('',   Validators.required),
    /*  privatePhone: new FormControl('',   Validators.required),
      workLocation: new FormControl('',   Validators.required),
      status: new FormControl('',   Validators.required),
      roles: new FormControl('',   new FormArray([])),
      historique: new FormControl('',   new FormArray([])),*/
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
    return this.createCourseForm.get('gender');
  }
    getSelectedEmployee(){
      this.id  = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.id){
        this.coursesService.getSelectedCourse(this.id).subscribe(
          ( emp:any)=> {
            this.selectedEmploy=emp;
            this.patchEmployeeForm(emp)
          /*  if (this.id){
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
            }*/
          }
          )
      }
    }
   patchEmployeeForm(selectedCourse: Courses | undefined) {
    this.editCourseForm!.setValue({

      couresRoot: selectedCourse?.couresRoot,
      coursesFrequency: selectedCourse?.coursesFrequency,
      coursesName:selectedCourse?.coursesName,
      coursesTime: selectedCourse?.coursesTime,
      coursesType: selectedCourse?.coursesType,
      coursesUnit: selectedCourse?.coursesUnit,
      endDate:selectedCourse?.endDate,
      startDate:selectedCourse?.startDate,
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
     return this.editCourseForm.controls.historique as FormArray
   }
   else {
     return this.createCourseForm.controls.historique as FormArray
   }
  }

  get roleEdit() {
    return this.editCourseForm.get('role');
  }

  get roleCreate() {
    return this.createCourseForm.get('role');
  }


  changeFrequency(event: { value: any; target: { value: any; }; }) {
    console.log(event.value)
    if (this.id){
      this.frequency?.setValue(event.target?.value, {
        onlySelf: true
      })
    }
    else {
      this.frequency?.setValue(event.target?.value, {
        onlySelf: true
      })
    }
  }

  changeType(event: { value: any; target: { value: any; }; }) {
    console.log(event.value)
    if (this.id){
      this.courseType?.setValue(event.target?.value, {
        onlySelf: true
      })
    }
    else {
      this.courseType?.setValue(event.target?.value, {
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
//  this.role.patchValue([this.role.value])
  console.log(this.createCourseForm.value)

if(this.id){
    if(this.editCourseForm.valid){
      this.coursesService.updateCourse(this.editCourseForm?.value,this.id)
    }
  }
  else {
    if(this.createCourseForm.valid){
      this.coursesService.createCourse(this.createCourseForm?.value).subscribe(
          ()=>{
            this.router.navigateByUrl('/courses')
          }
      )
/*          .subscribe(
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

      );*/
    }
  }
}
}
