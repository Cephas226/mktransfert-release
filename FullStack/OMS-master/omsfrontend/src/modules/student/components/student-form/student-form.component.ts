import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "@modules/student/services/students.service";

import {Students} from "@modules/student/models";


@Component({
  selector: 'sb-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  editStudentForm = new FormGroup({
    // code: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('M', Validators.required),
    country: new FormControl('', Validators.required),
    nationnality: new FormControl('', Validators.required),
    site: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    email: new FormControl('',[  Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
    phone: new FormControl('', Validators.required),
    inscriptionDateAtGA: new FormControl('', Validators.required),
    Bithdaydate: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
    cityOfResidence: new FormControl('', Validators.required),
    address:new FormControl('', Validators.required),
    level:new FormControl('', Validators.required),
    books:new FormControl('', Validators.required)
  });
  createStudentForm = new FormGroup({
    // code: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('M', Validators.required),
    status: new FormControl('paid', Validators.required),
    country: new FormControl('Morocco', Validators.required),
    nationnality: new FormControl('', Validators.required),
    site: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    email: new FormControl('',[  Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
    phone: new FormControl('', Validators.required),
    inscriptionDateAtGA: new FormControl('', Validators.required),
    Bithdaydate: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
    cityOfResidence: new FormControl('', Validators.required),
    address:new FormControl('', Validators.required),
    level:new FormControl('', Validators.required),
    books:new FormControl('', Validators.required)
  });
  selectedStudent: Students | undefined
  id: any
  constructor(
    private studentService:StudentService,
    public activatedRoute:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.getSelectedEmployee()
  }
  getSelectedEmployee(){
    this.id  = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id){
      this.studentService.getSelectedStudent(this.id).subscribe(
        ( student:any)=> {
          this.selectedStudent=student;
          if (this.id){
            console.log(student)
            this.patchEmployeeForm(student)
            console.log( this.editStudentForm.value)
          }
        })
    }
  }
  private patchEmployeeForm(selectedStudent: Students | undefined) {
    this.editStudentForm!.setValue({
      // code:  selectedStudent?.code?selectedStudent?.code:null,
      firstName:  selectedStudent?.firstName?selectedStudent?.firstName:null,
      lastName: selectedStudent?.lastName?selectedStudent?.lastName:null,
      email:selectedStudent?.email?selectedStudent?.email:null,
      gender:selectedStudent?.gender?selectedStudent?.gender:null,
      phone1: selectedStudent?.phone?selectedStudent?.phone:null,
      Bithdaydate: selectedStudent?.Bithdaydate?selectedStudent?.Bithdaydate:null,
      inscriptionDateAtGA: selectedStudent?.inscriptionDateAtGA?selectedStudent?.inscriptionDateAtGA:null,
      course: selectedStudent?.course?selectedStudent?.course:null,
      cityOfResidence: selectedStudent?.cityOfResidence?selectedStudent?.cityOfResidence:null,
    })
  }
  onSubmit(){
    console.log('hello')
    console.log(this.createStudentForm.value)
    if(this.id){
      if(this.editStudentForm.valid){
        this.studentService.updateStudent(this.editStudentForm?.value,this.id)
 
      }
    }
    else {
      if(this.createStudentForm.valid){
        this.studentService.createStudent(this.createStudentForm?.value)
        this.router.navigateByUrl('/students')
      }
    }
  }
  get SexEdit() {
    return this.editStudentForm.get('gender');
  }
  get SexCreate() {
    return this.createStudentForm.get('gender');
  }

  changeGender(event: any) {
    console.log(event)
   if (this.id){
     this.SexEdit?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
   else {
     this.SexCreate?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
  }
  get CountryEdit() {
    return this.editStudentForm.get('country');
  }
  get CountryCreate() {
    return this.createStudentForm.get('country');
  }
  changeCountry(event: any) {
    console.log(event)
   if (this.id){
     this.CountryEdit?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
   else {
     this.CountryCreate?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
  }
  get LevelEdit() {
    return this.editStudentForm.get('level');
  }
  get  LevelCreate() {
    return this.createStudentForm.get('level');
  }
  changeLevel(event: any) {
    console.log(event)
   if (this.id){
     this.LevelEdit?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
   else {
     this.LevelCreate?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
  }

  get CourseEdit() {
    return this.editStudentForm.get('level');
  }
  get  CourseCreate() {
    return this.createStudentForm.get('level');
  }
  changeCourse(event: any) {
    console.log(event)
   if (this.id){
     this.CourseEdit?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
   else {
     this.CourseCreate?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
  }
  get BookEdit() {
    return this.editStudentForm.get('level');
  }
  get  BookCreate() {
    return this.createStudentForm.get('level');
  }
  changeBooks(event: any) {
    console.log(event)
   if (this.id){
     this.BookEdit?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
   else {
     this.BookCreate?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
  }
  get GradeEdit() {
    return this.editStudentForm.get('grade');
  }
  get  GradeCreate() {
    return this.createStudentForm.get('grade');
  }
  changeGrade(event: any) {
    console.log(event)
   if (this.id){
     this.GradeEdit?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
   else {
     this.GradeCreate?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
  }

  get StatusEdit() {
    return this.editStudentForm.get('status');
  }
  get  StatusCreate() {
    return this.createStudentForm.get('status');
  }
  changeStatus(event: any) {
    console.log(event)
   if (this.id){
     this.StatusEdit?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
   else {
     this.StatusCreate?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
  }



  get TypeEdit() {
    return this.editStudentForm.get('type');
  }
  get  TypeCreate() {
    return this.createStudentForm.get('type');
  }
  changeType(event: any) {
    console.log(event)
   if (this.id){
     this.TypeEdit?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
   else {
     this.TypeCreate?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
  }
  get SiteEdit() {
    return this.editStudentForm.get('site');
  }
  get  SiteCreate() {
    return this.createStudentForm.get('site');
  }
  changeSite(event: any) {
    console.log(event)
   if (this.id){
     this.SiteEdit?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
   else {
     this.SiteCreate?.setValue(event.target?.value, {
       onlySelf: true
     })
   }
  }
}
