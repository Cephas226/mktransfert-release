import {CoursesPlannerListComponent} from '@modules/courses/components/courses-planner-list/courses-planner-list.component';
import { CoursesPlannedCardComponent } from './coursesPlanned-card/coursesPlanned-card.component' ;
import { CoursesListComponent } from './courses-list/courses-list.component' ;
import { EditCoursesComponent } from '@modules/courses/components/courses-edit/edit-courses.component';

import { CoursesPlannerComponent } from './courses-planner/courses-planner.component' ;

export const Courscomponents = [CoursesPlannerListComponent,CoursesPlannerComponent,CoursesPlannedCardComponent, CoursesListComponent,EditCoursesComponent];

export * from './coursesPlanned-card/coursesPlanned-card.component';
export * from './courses-list/courses-list.component';
export * from './courses-edit/edit-courses.component';
export * from './courses-planner/courses-planner.component';
export * from './courses-planner-list/courses-planner-list.component';