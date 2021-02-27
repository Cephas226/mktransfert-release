/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { CoursesModule } from './course.module';

/* Containers */
import * as CoursesContainers from './containers';

/* Guards */
import * as tablesGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: CoursesContainers.CoursesCardContainer,
        data: {
            title: 'OMS',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Courses',
                    active: true,
                },
            ],
        } as SBRouteData,
    },


  {
    path: 'courses-details/:id',
    canActivate: [],
    component: CoursesContainers.CoursesDetailsConteners,
    data: {
      title: 'OMS',
      breadcrumbs: [
        {
          text: 'Dashboard',
          link: '/dashboard',
        },
        {
          text: 'Courses',
          link: '/courses',
          active: false,
        },
        {
          text: 'Courses details',
          active: true,
        },
      ],
    } as SBRouteData,
  },

   {
    path: 'course-create',
   canActivate: [],
   component: CoursesContainers.CoursesEditConteners,
     data: {
     title: 'OMS',
     breadcrumbs: [
      {
          text: 'Dashboard',
       link: '/dashboard',
       },
      {
        text: 'Courses',
        link: '/courses',
        active: false,
     },
     {
      text: 'Course add',
       active: true,
      },
    ],
  } as SBRouteData,
 },
  {
    path: 'edit-course/:id',
    canActivate: [],
    component: CoursesContainers.CoursesEditConteners,
    data: {
      title: 'OMS',
      breadcrumbs: [
        {
          text: 'Dashboard',
          link: '/dashboard',
        },
        {
          text: 'Courses',
          link: '/courses',
          active: false,
        },
        {
          text: 'Course edit',
          active: true,
        },
      ],
    } as SBRouteData,
  },
];

@NgModule({
    imports: [CoursesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CourseRoutingModule {}
