import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "@modules/auth/guards";
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/auth/login',
    },
    {
        path: 'charts',
        loadChildren: () =>
            import('modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
    },

    {
        path: 'dashboard',
       canActivate: [AuthGuard],
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: 'tables',
        loadChildren: () =>
            import('modules/tables/tables-routing.module').then(m => m.TablesRoutingModule),
    },
    {
        path: 'employees',
        loadChildren: () =>
            import('@modules/employees/employees-routing.module').then(m => m.EmployeesRoutingModule),
    },
    {
        path: 'courses',
        loadChildren: () =>
            import('@modules/courses/course-routing.module').then(m => m.CourseRoutingModule),
    },
    {
        path: 'students',
        loadChildren: () =>
            import('modules/student/student-tables-routing.module').then(m => m.StudentTablesRoutingModule),
    },
    {
        path: 'teacher',
        loadChildren: () =>
            import('modules/teachers/teacher-routing.module').then(m => m.TeacherRoutingModule),
    },
    {
        path: 'version',
        loadChildren: () =>
            import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
