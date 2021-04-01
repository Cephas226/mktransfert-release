import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '@modules/auth/services/tokenstorageservice.service';
import {Classroom} from '@modules/classroom/models';
import {ClassroomService} from '@modules/classroom/services';
import {CoursesService} from '@modules/courses/services/courses.service';
import {Courses, CoursesPlanned, Department, Roles, Teacher} from '@modules/employees/models';
import {Students} from '@modules/student/models';
import {StudentService} from '@modules/student/services';
import {TeacherService} from '@modules/teachers/services/teacher.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'sb-courses-planner',
  templateUrl: './courses-planner.component.html',
  styleUrls: ['./courses-planner.component.scss']
})
export class CoursesPlannerComponent implements OnInit {
  selectedCourse:Courses | undefined
  selectedTeacher?: Object =[]
  public createPlanForm?: FormGroup;
  public editPlanForm?: FormGroup;
  id: any
  idCoursePlanned: any
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
  history: any[] = [];
  /*<----Getter of array--->*/
  private teacher$?: Observable<Teacher[]>;
  private classrom$?: Observable<Classroom[]>;
  private student$?: Observable<Students[]>;

  /*<----Getter of array--->*/

  constructor(
      private coursesService:CoursesService,
      private teacherService:TeacherService,
      private studentService:StudentService,
      private classroomService:ClassroomService,
      public activatedRoute:ActivatedRoute,
      public router:Router,private tokenStorageService:TokenStorageService,
      public fb: FormBuilder
  ) {
   this.editPlanForm = this.fb.group({
      couresRoot: new FormControl('',   Validators.required),
      idCourses :new FormControl('',   Validators.required),
      coursesName: new FormControl('',   Validators.required),
      coursesFrequency: new FormControl('M'),
      endDate: new FormControl('',   Validators.required),
      startDate: new FormControl('',   Validators.required),
      coursesType: new FormControl(''),
      coursesUnit:new FormControl(''),
      coursesTime:new FormControl('',   Validators.required),
      teacher: new FormControl('',  new FormArray([])),
      class: new FormControl('',  new FormArray([])),
      students: new FormControl('',  new FormArray([])),
    });
    this.createPlanForm = this.fb.group({
      couresRoot: new FormControl('',   Validators.required),
      coursesName: new FormControl('',   Validators.required),
      coursesFrequency: new FormControl('M'),
      endDate: new FormControl('',   Validators.required),
      startDate: new FormControl('',   Validators.required),
      coursesType: new FormControl(''),
      coursesUnit:new FormControl(''),
      coursesTime:new FormControl('',   Validators.required),
      teacher:  new FormControl('',  new FormArray([])),
      class: new FormControl('',  new FormArray([])),
      students: new FormControl('',  new FormArray([])),
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
    this.teacher$ = this.teacherService.teacher$;
    this.student$=this.studentService.student$
    this.classrom$=this.classroomService.classroom$
  }
  get classroom(): FormArray {
    {return this.createPlanForm?.get('class') as FormArray;
    }
  }
  get changeFrequency() : FormArray{
    return this.createPlanForm?.get('frequency') as  FormArray;
  }

  get teacher() {
    return this.createPlanForm?.get('teacher')as FormArray;;
  }

  changeClassroom(e:any) {
    console.log(e)
  }
  changeTeacher(e:any) {
    console.log(e )
  }
  get type() {
    return this.createPlanForm?.get('courseType');
  }
  changeType(event: { value: any; target: { value: any; }; }) {
    this.type?.setValue(event.target?.value, {
      onlySelf: false
    })
  }
  getSelectedCourses(){
    this.id  = this.activatedRoute.snapshot.paramMap.get('id');
    this.idCoursePlanned=this.activatedRoute.snapshot.paramMap.get('idCourse')
    if (this.id){
      this.coursesService.getSelectedCourse(this.id).subscribe(
          ( course:any)=> {
            this.selectedCourse=course;
            this.patchCourseForm(course)
          }
      )
    }
    if (this.idCoursePlanned){
      this.coursesService.getSelectedCoursePlanned(this.idCoursePlanned).subscribe(
          ( course:any)=> {
            console.log(course)
            this.selectedCourse=course;
            this.patchCoursePlannedForm(course)
          }
      )
    }
   /* if (this.router.url.includes('edit')){
      this.coursesService.getSelectedCourse(this.id).subscribe(
          ( course:any)=> {
            console.log(course)
            this.selectedCourse=course;
         //   this.patchCoursePlannedForm(course)
          }
      )
    }*/
  }
  patchCourseForm(selectedCourse: Courses | undefined) {
    this.createPlanForm!.setValue({
      couresRoot: selectedCourse?.couresRoot,
      coursesName:selectedCourse?.coursesName,
      coursesType: selectedCourse?.coursesType,
      coursesUnit: selectedCourse?.coursesUnit,
      coursesFrequency: null,
      startDate: null,
      endDate: null,
      coursesTime:  null,
      teacher:null,
      class:null,
      students:null
    })
  }
 patchCoursePlannedForm(selectedCourse: CoursesPlanned | undefined) {
    this.editPlanForm!.setValue({
      idCourses: selectedCourse?.courses.idCourses,
      couresRoot: selectedCourse?.courses.couresRoot,
      coursesName:selectedCourse?.courses.coursesName,
      coursesType: selectedCourse?.courses.coursesType,
      coursesUnit: selectedCourse?.courses.coursesUnit,
      coursesFrequency: selectedCourse?.coursesFrequency,
      startDate: selectedCourse?.startDate,
      endDate: selectedCourse?.endDate,
      coursesTime:  selectedCourse?.coursesTime,
      teacher:selectedCourse?.teachers.idTeacher,
      class:selectedCourse?.classroom.id
  })
}
  onSubmit(){
   /* this.coursesService.createCoursePlanned({
      /!*"courses":{
        "idCourses":this.id,
        "couresRoot": this.createPlanForm?.value?.couresRoot,
        "coursesName": this.createPlanForm?.value?.coursesName,
        "coursesType":  this.createPlanForm?.value?.coursesType,
        "coursesUnit":  this.createPlanForm?.value?.coursesUnit,
      },*!/
      "coursesFrequency": "["+this.createPlanForm?.value?.coursesFrequency+"]",
      "startDate":  this.createPlanForm?.value?.startDate,
      "endDate":  this.createPlanForm?.value?.endDate,
      "coursesTime":   this.createPlanForm?.value?.coursesTime,
      /!*  "teachers":  e,
        "classroom":c*!/
    })*/
    if(this.idCoursePlanned){
      this.teacherService.getSelectedTeacher(this.editPlanForm?.value['teacher'])
          .subscribe(
          e=>{
            this.classroomService.getSelectedClassroom(this.editPlanForm?.value['class'])
                .subscribe(
                    c=>{
                      this.coursesService.updateCoursePlanned({
                        "idPlanCourse":this.idCoursePlanned,
                        "coursesFrequency": "["+this.editPlanForm?.value?.coursesFrequency+"]",
                        "startDate":  this.editPlanForm?.value?.startDate,
                        "endDate":  this.editPlanForm?.value?.endDate,
                        "coursesTime":   this.editPlanForm?.value?.coursesTime,
                        "teachers":  e,
                        "classroom":c,
                        "courses":{
                          "idCourses":this.editPlanForm?.value?.idCourses,
                          "couresRoot": this.editPlanForm?.value?.couresRoot,
                          "coursesName": this.editPlanForm?.value?.coursesName,
                          "coursesType":  this.editPlanForm?.value?.coursesType,
                          "coursesUnit":  this.editPlanForm?.value?.coursesUnit,
                        },
                      })
                    }
                )

          }
      )
    }
    else {
      this.teacherService.getSelectedTeacher(this.createPlanForm?.value['teacher']).subscribe(
          e=>{
            this.classroomService.getSelectedClassroom(this.createPlanForm?.value['class'])
                .subscribe(
                    c=>{
                      this.coursesService.createCoursePlanned({
                        "courses":{
                          "idCourses":this.id,
                          "couresRoot": this.createPlanForm?.value?.couresRoot,
                          "coursesName": this.createPlanForm?.value?.coursesName,
                          "coursesType":  this.createPlanForm?.value?.coursesType,
                          "coursesUnit":  this.createPlanForm?.value?.coursesUnit,
                        },
                        "coursesFrequency": "["+this.createPlanForm?.value?.coursesFrequency+"]",
                        "startDate":  this.createPlanForm?.value?.startDate,
                        "endDate":  this.createPlanForm?.value?.endDate,
                        "coursesTime":   this.createPlanForm?.value?.coursesTime,
                        "teachers":  e,
                        "classroom":c,
                      })
                    }
                )

          }
      )
    }
  }

}

