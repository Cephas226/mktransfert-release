import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from '@modules/courses/services/courses.service';
import {Courses, Teacher} from '@modules/employees/models';
import {StudentService} from "@modules/student/services/students.service";

import {Parent, Students} from '@modules/student/models';
import {Observable} from 'rxjs';


@Component({
  selector: 'sb-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  editStudentForm = new FormGroup({
    id: new FormControl('', Validators.required),
    code: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl('M'),
    country: new FormControl(''),
    nationnality: new FormControl(''),
    site: new FormControl(''),
    grade: new FormControl(''),
    type: new FormControl(''),
    email: new FormControl('',[  Validators.required,
      Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
    phone: new FormControl(''),
    inscriptionDateAtGA: new FormControl(''),
    bithdaydate: new FormControl(''),
    courses: new FormControl(''),
    cityOfResidence: new FormControl(''),
    address:new FormControl(''),
    level:new FormControl(''),
    books:new FormControl(''),
    parents:  new FormArray([]),
  });
  createStudentForms = new FormGroup({
    code: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('M', Validators.required),
    //status: new FormControl('paid', Validators.required),
    country: new FormControl('Morocco', Validators.required),
    nationnality: new FormControl('', Validators.required),
    site: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    email: new FormControl('',[  Validators.required,
      Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
    phone: new FormControl('', Validators.required),
    inscriptionDateAtGA: new FormControl('', Validators.required),
    bithdaydate: new FormControl('', Validators.required),
    courses: new FormControl('',  new FormArray([])),
    cityOfResidence: new FormControl('', Validators.required),
    address:new FormControl('', Validators.required),
    level:new FormControl('', Validators.required),
    books:new FormControl(''),
    parents:  new FormArray([]),
  });
  selectedStudent: Students | undefined
  id: any
  private courses$?: Observable<Courses[]>;
  private myParent:any=[];
  public isCollapsed = true;

  constructor(
      private studentService:StudentService,
      private coursesService:CoursesService,
      public activatedRoute:ActivatedRoute,
      private http: HttpClient,
      public fb: FormBuilder,
      public router:Router
  ) { }

  ngOnInit(): void {
    this.getSelectedStudent()
    this.courses$ = this.coursesService.course$;
  }
  getSelectedStudent(){
    this.id  = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id){
      this.studentService.getSelectedStudent(this.id).subscribe(
          ( student:any)=> {
            this.selectedStudent=student;
            if (this.id){
              student.parents?.forEach(
                  (parent:any)=>{
                    this.Parents.insert(0,this.fb.group({
                      idParent:parent.idParent,
                      firstName: parent.firstName,
                      lastName: parent.lastName,
                      email: parent.email,
                      phone:  parent.phone
                    }))
                 }
              )
              /*emp.historique?.forEach(
                  (hist: any)=>{
                    this.tempoHistorique?.push({ year: hist.year, entitled: hist.entitled})
                    this.historicals.insert(0,this.fb.group({
                      id:hist.id,
                      year:hist.year,
                      entitled:hist.entitled
                    }))
                  })*/
              this.patchEmployeeForm(student)
            }
          })
    }
  }

  private patchEmployeeForm(selectedStudent: Students | undefined) {
    this.editStudentForm!.setValue({
      id: selectedStudent?.id?selectedStudent?.id:null,
      code:  selectedStudent?.code?selectedStudent?.code:null,
      firstName:  selectedStudent?.firstName?selectedStudent?.firstName:null,
      lastName: selectedStudent?.lastName?selectedStudent?.lastName:null,
      email:selectedStudent?.email?selectedStudent?.email:null,
      gender:selectedStudent?.gender?selectedStudent?.gender:null,
      phone: selectedStudent?.phone?selectedStudent?.phone:null,
      country: selectedStudent?.country?selectedStudent?.country:null,
      site:selectedStudent?.site?selectedStudent?.site:null,
      grade:selectedStudent?.grade?selectedStudent?.grade:null,
      type:selectedStudent?.type?selectedStudent?.type:null,
      address:selectedStudent?.address?selectedStudent?.address:null,
      level:selectedStudent?.level?selectedStudent?.level:null,
      books:selectedStudent?.books?selectedStudent?.books:null,
      nationnality: selectedStudent?.phone?selectedStudent?.nationnality:null,
      bithdaydate: selectedStudent?.bithdaydate?selectedStudent?.bithdaydate:null,
      inscriptionDateAtGA: selectedStudent?.inscriptionDateAtGA?selectedStudent?.inscriptionDateAtGA:null,
      courses: selectedStudent?.courses?selectedStudent?.courses:null,
      cityOfResidence: selectedStudent?.cityOfResidence?selectedStudent?.cityOfResidence:null,
      parents: selectedStudent?.parents?selectedStudent?.parents:null,
    })
  }

  get SexEdit() {
    return this.editStudentForm.get('gender');
  }
  get SexCreate() {
    return this.createStudentForms.get('gender');
  }
  get Parents() : FormArray {
    if (this.id){
      return this.editStudentForm.controls.parents as FormArray
    }
    else {
      return this.createStudentForms.controls.parents as FormArray
    }
  }
  changeGender(event: any) {
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
    return this.createStudentForms.get('country');
  }
  changeCountry(event: any) {
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
    return this.createStudentForms.get('level');
  }
  changeLevel(event: any) {
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
    return this.editStudentForm.get('course');
  }
  get  CourseCreate() {
    return this.createStudentForms.get('course');
  }
/*  changeCourse(event: any) {
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
  }*/

  get BookEdit() {
    return this.editStudentForm.get('books');
  }
  get  BookCreate() {
    return this.createStudentForms.get('books');
  }
  changeBooks(event: any) {
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
  get courses() {
    if(this.id){
      return this.editStudentForm?.get('courses')as FormArray;
    }
    else{
      return this.createStudentForms?.get('courses') as FormArray;;
    }
  }
  get GradeEdit() {
    return this.editStudentForm.get('grade');
  }
  get  GradeCreate() {
    return this.createStudentForms.get('grade');
  }
  changeGrade(event: any) {
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
    return this.createStudentForms.get('status');
  }
  changeStatus(event: any) {
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
    return this.createStudentForms.get('type');
  }
  changeType(event: any) {
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
    return this.createStudentForms.get('site');
  }
  changeSite(event: any) {
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
  onSubmit(){
/*    this.Parents.value.map((prt:any)=>{
      this.studentService.createStudentParent(prt)
          .subscribe(
              (e:any)=>{
                this.myParent.push(e)
              }
          )
         /!* .subscribe((p:any)=>{
            this.myParent.push({
            idParent:p.idParent,
            firstName: p.firstName,
            lastName: p.lastName,
            email: p.email,
            phone: p.phone,
          }
          )})*!/

    })*/
    /*this.studentService.createStudent(this.createStudentForms.value)*/
   if(this.id){
     this.studentService.updateStudent(
         {
           "id":this.editStudentForm?.value?.id,
           "code":  this.editStudentForm?.value?.code,
           "firstName": this.editStudentForm?.value?.firstName,
           "lastName": this.editStudentForm?.value?.lastName,
           "email":this.editStudentForm?.value?.email,
           "gender":this.editStudentForm?.value?.gender,
           "phone": this.editStudentForm?.value?.phone,
           "country":this.editStudentForm?.value?.country,
           "site":this.editStudentForm?.value?.site,
           "grade":this.editStudentForm?.value?.grade,
           "type":this.editStudentForm?.value?.type,
           "address":this.editStudentForm?.value?.address,
           "level":this.editStudentForm?.value?.level,
           "books":"["+this.editStudentForm?.value?.books+"]",
           "nationnality": this.editStudentForm?.value?.nationnality,
           "bithdaydate": this.editStudentForm?.value?.bithdaydate,
           "inscriptionDateAtGA": this.editStudentForm?.value?.inscriptionDateAtGA,
           "courses": this.editStudentForm?.value?.courses,
           "cityOfResidence": this.editStudentForm?.value?.cityOfResidence,
           "parents":null
         },this.id
     )
   }
   else{
     this.studentService.createStudent(
         {
           "code":  this.createStudentForms?.value?.code,
           "firstName": this.createStudentForms?.value?.firstName,
           "lastName": this.createStudentForms?.value?.lastName,
           "email":this.createStudentForms?.value?.email,
           "gender":this.createStudentForms?.value?.gender,
           "phone": this.createStudentForms?.value?.phone,
           "country":this.createStudentForms?.value?.country,
           "site":this.createStudentForms?.value?.site,
           "grade":this.createStudentForms?.value?.grade,
           "type":this.createStudentForms?.value?.type,
           "address":this.createStudentForms?.value?.address,
           "level":this.createStudentForms?.value?.level,
           "books":"["+this.createStudentForms?.value?.books+"]",
           "nationnality": this.createStudentForms?.value?.nationnality,
           "bithdaydate": this.createStudentForms?.value?.bithdaydate,
           "inscriptionDateAtGA": this.createStudentForms?.value?.inscriptionDateAtGA,
           "courses": this.createStudentForms?.value?.courses,
           "cityOfResidence": this.createStudentForms?.value?.cityOfResidence,
           "parents":null
         }
     )
   }
 /*   if (this.id){
      this.Parents?.value.map((prt:any)=>{
        this.studentService.createStudentParent(prt)
            .subscribe((e:any)=>{
              this.Parents.patchValue([
                e
              ])
            })
      })
      this.studentService.updateStudent(
          {
            "id":  this.editStudentForm?.value?.id,
            "code":  this.editStudentForm?.value?.code,
            "firstName": this.editStudentForm?.value?.firstName,
            "lastName": this.editStudentForm?.value?.lastName,
            "email":this.editStudentForm?.value?.email,
            "gender":this.editStudentForm?.value?.gender,
            "phone": this.editStudentForm?.value?.phone,
            "country":this.editStudentForm?.value?.country,
            "site":this.editStudentForm?.value?.site,
            "grade":this.editStudentForm?.value?.grade,
            "type":this.editStudentForm?.value?.type,
            "address":this.editStudentForm?.value?.address,
            "status":this.selectedStudent?.status,
            "level":this.editStudentForm?.value?.level,
            "books": "["+this.editStudentForm?.value?.books+"]",
            "nationnality": this.editStudentForm?.value?.nationnality,
            "bithdaydate": this.editStudentForm?.value?.bithdaydate,
            "inscriptionDateAtGA": this.editStudentForm?.value?.inscriptionDateAtGA,
            "courses": this.editStudentForm?.value?.courses,
            "cityOfResidence": this.editStudentForm?.value?.cityOfResidence,
            "parents":this.Parents.value
          },this.id)
    }
    else {
    this.Parents?.value.map((prt:any)=>{
        this.studentService.createStudentParent(prt)
            .subscribe((e:any)=>{
              this.Parents.patchValue([
                  e
              ])
            })
      })
    /!*  console.log({
        "code":  this.createStudentForms?.value?.code,
        "firstName": this.createStudentForms?.value?.firstName,
        "lastName": this.createStudentForms?.value?.lastName,
        "email":this.createStudentForms?.value?.email,
        "gender":this.createStudentForms?.value?.gender,
        "phone": this.createStudentForms?.value?.phone,
        "country":this.createStudentForms?.value?.country,
        "site":this.createStudentForms?.value?.site,
        "grade":this.createStudentForms?.value?.grade,
        "type":this.createStudentForms?.value?.type,
        "address":this.createStudentForms?.value?.address,
        "level":this.createStudentForms?.value?.level,
        "books":"["+this.createStudentForms?.value?.books+"]",
        "nationnality": this.createStudentForms?.value?.nationnality,
        "bithdaydate": this.createStudentForms?.value?.bithdaydate,
        "inscriptionDateAtGA": this.createStudentForms?.value?.inscriptionDateAtGA,
        "courses": this.createStudentForms?.value?.courses,
        "cityOfResidence": this.createStudentForms?.value?.cityOfResidence,
        "parents":this.Parents.value
      })*!/
     this.studentService.createStudent({
        "code":  this.createStudentForms?.value?.code,
        "firstName": this.createStudentForms?.value?.firstName,
        "lastName": this.createStudentForms?.value?.lastName,
        "email":this.createStudentForms?.value?.email,
        "gender":this.createStudentForms?.value?.gender,
        "phone": this.createStudentForms?.value?.phone,
        "country":this.createStudentForms?.value?.country,
        "site":this.createStudentForms?.value?.site,
        "grade":this.createStudentForms?.value?.grade,
        "type":this.createStudentForms?.value?.type,
        "address":this.createStudentForms?.value?.address,
        "level":this.createStudentForms?.value?.level,
        "books":"["+this.createStudentForms?.value?.books+"]",
        "nationnality": this.createStudentForms?.value?.nationnality,
        "bithdaydate": this.createStudentForms?.value?.bithdaydate,
        "inscriptionDateAtGA": this.createStudentForms?.value?.inscriptionDateAtGA,
        "courses": this.createStudentForms?.value?.courses,
        "cityOfResidence": this.createStudentForms?.value?.cityOfResidence,
        "parents":this.createStudentForms?.value?.parents
      })
     /!*this.studentService.createStudent(
          {
            "code":  this.createStudentForms?.value?.code,
            "firstName": this.createStudentForms?.value?.firstName,
            "lastName": this.createStudentForms?.value?.lastName,
            "email":this.createStudentForms?.value?.email,
            "gender":this.createStudentForms?.value?.gender,
            "phone": this.createStudentForms?.value?.phone,
            "country":this.createStudentForms?.value?.country,
            "site":this.createStudentForms?.value?.site,
            "grade":this.createStudentForms?.value?.grade,
            "type":this.createStudentForms?.value?.type,
            "address":this.createStudentForms?.value?.address,
            "level":this.createStudentForms?.value?.level,
            "books":"["+this.createStudentForms?.value?.books+"]",
            "nationnality": this.createStudentForms?.value?.nationnality,
            "bithdaydate": this.createStudentForms?.value?.bithdaydate,
            "inscriptionDateAtGA": this.createStudentForms?.value?.inscriptionDateAtGA,
            "courses": this.createStudentForms?.value?.courses,
            "cityOfResidence": this.createStudentForms?.value?.cityOfResidence,
            "parents":this.Parents.value
          }
      )*!/
       // this.Parents
/!*      this.studentService.createStudent(
          {
            "code":  this.createStudentForms?.value?.code,
            "firstName": this.createStudentForms?.value?.firstName,
            "lastName": this.createStudentForms?.value?.lastName,
            "email":this.createStudentForms?.value?.email,
            "gender":this.createStudentForms?.value?.gender,
            "phone": this.createStudentForms?.value?.phone,
            "country":this.createStudentForms?.value?.country,
            "site":this.createStudentForms?.value?.site,
            "grade":this.createStudentForms?.value?.grade,
            "type":this.createStudentForms?.value?.type,
            "address":this.createStudentForms?.value?.address,
            "level":this.createStudentForms?.value?.level,
            "books":"["+this.createStudentForms?.value?.books+"]",
            "nationnality": this.createStudentForms?.value?.nationnality,
            "bithdaydate": this.createStudentForms?.value?.bithdaydate,
            "inscriptionDateAtGA": this.createStudentForms?.value?.inscriptionDateAtGA,
            "courses": this.createStudentForms?.value?.courses,
            "cityOfResidence": this.createStudentForms?.value?.cityOfResidence,
            "parents":this.myParent
          }
      ).subscribe(
          ()=>{
            this.studentService.getAllStudents(),this.router.navigateByUrl('/students')
          }
      )
      console.log(this.myParent)*!/
    }*/
    this.Parents.setValue(this.myParent)
    console.log( this.Parents.value)
  }

  changeCourses($event:any) {
    console.log($event.target.value)
  }

  newParent(): FormGroup {
    return this.fb.group({
      idParent:'',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    })
  }
  addParents() {
    this.Parents.push(this.newParent());
  }

  removeParent(i:number) {
    this.Parents.removeAt(i);
  }
}
