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
  selectedCourse:Courses | undefined
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
  /*<----Getter of array--->*/
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
      idCourses: new FormControl(''),
      couresRoot: new FormControl('',   Validators.required),
      coursesName: new FormControl('',   Validators.required),
      coursesType: new FormControl('Intensif',   Validators.required),
      coursesUnit:new FormControl('',   Validators.required),
    });
    this.createCourseForm = this.fb.group({
      couresRoot: new FormControl('',   Validators.required),
      coursesName: new FormControl('',   Validators.required),
      coursesType: new FormControl('Intensif',   Validators.required),
      coursesUnit:new FormControl('',   Validators.required),
    });
  }
  ngOnInit(): void {
    this.getSelectedCourses()
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showSuperAdminComp = this.roles.includes('ROLE_SUPER_ADMIN');
      this.showAdminComp = this.roles.includes('ROLE_ADMIN');
      this.email = user.email;}
  }
    getSelectedCourses(){
      this.id  = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.id){
        this.coursesService.getSelectedCourse(this.id).subscribe(
          ( emp:any)=> {
            this.selectedCourse=emp;
            this.patchCourseForm(emp)
          }
          )
      }
    }
  patchCourseForm(selectedCourse: Courses | Courses) {
    this.editCourseForm!.setValue({
      idCourses: selectedCourse?.idCourses,
      couresRoot: selectedCourse?.couresRoot,
      coursesName:selectedCourse?.coursesName,
      coursesType: selectedCourse?.coursesType,
      coursesUnit: selectedCourse?.coursesUnit,
    })
  }
  changeType(event: { value: any; target: { value: any; }; }) {
    console.log(event.target?.value)
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
onSubmit(){


if(this.id){
    if(this.editCourseForm.valid){
      console.log(this.editCourseForm.value)
      this.coursesService.updateCourse(
          {
            idCourses: this.editCourseForm.value?.idCourses,
            couresRoot: this.editCourseForm.value?.couresRoot,
            coursesName:this.editCourseForm.value?.coursesName,
            coursesType: this.editCourseForm.value?.coursesType,
            available:true,
            coursesUnit: this.editCourseForm.value?.coursesUnit,
          },this.id)
    }
  }
  else {
    if(this.createCourseForm.valid){
      this.coursesService.createCourse(this.createCourseForm?.value)
    }
  }
}
}
