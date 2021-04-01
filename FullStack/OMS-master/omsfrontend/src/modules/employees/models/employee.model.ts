import {Classroom} from '@modules/classroom/models';
import {Students} from '@modules/student/models';

export interface Country {
    [key: string]: string | number;
    id: number;
    name: string;
    flag: string;
    area: number;
    population: number;
}

export interface Employees {
    id: number | null,
    firstName: string,
    lastName: string,
    gender: string,
    jobRole:string,
    department:string,
    email:string,
    businessPhone:string,
    privatePhone:string,
    workLocation:string,
    password:string,
    Cpassword:string,
    status:string,
    roles:Rule,
    historique:History,
    isArchived:boolean | undefined
  }
export interface Teacher {
    idTeacher: number | null,
    firstName: string,
    lastName: string,
    gender: string,
    jobRole:string,
    department:string,
    email:string,
    businessPhone:string,
    privatePhone:string,
    workLocation:string,
    password:string,
    Cpassword:string,
    status:string,
    roles:Rule,
    historique:History,
    archived:boolean | undefined
}
export interface  Status {
  id: number | null,
  name: string,
}

export interface  Courses {
    idCourses:number | null,
    couresRoot: string,
    coursesName: string,
    coursesType:string,
    coursesUnit:string,
    available:boolean
}

export interface  CoursesPlanned {
    idPlanCourse:number | null,
    startDate: string,
    endDate:string,
    coursesTime:string,
    coursesFrequency: string,
    coursesUnit:string,
    courses:Courses,
    teachers:Teacher,
    classroom:Classroom,
    students:Students
}

export interface  Departement {
  id: number | null,
  name: string,
}


export interface  History {
  id: number | null,
  year: string,
  entitled: string,
}

export enum Roles {
  ROLE_ADMIN= 'Admin',
  ROLE_MODERATOR= 'Moderator',
  ROLE_SUPER_ADMIN = 'Super Admin',
  ROLE_USER="User"
}

export enum Department {
  Admission= 'Admission',
  IT= 'IT',
  Teaching = 'Teaching',
  Leadership= "Leadership",
  SalesMarketing="Sales & Marketing"
}


export interface Rule {
  id: number | null,
  name: string,
}
