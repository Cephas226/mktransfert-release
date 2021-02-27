/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as tablesComponents from './components';

/* Containers */
import * as tablesContainers from './containers';

/* Directives */
import * as tablesDirectives from './directives';

/* Guards */
import * as tablesGuards from './guards';

/* Services */
import * as tablesServices from './services';
import * as tablesPipes from './pipes';
import {EditEmployeeComponent} from "./components";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxDropzoneModule} from "ngx-dropzone";
import { EmployeesCardComponent } from './components/employees-card/employees-card.component';
import {NgBootstrapFormValidationModule} from "ng-bootstrap-form-validation";
import { EmployeesProfilComponent } from './components/employees-profil/employees-profil.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppCommonModule,
    NavigationModule,
    Ng2SearchPipeModule,
    NgxDropzoneModule,
    NgBootstrapFormValidationModule,
  ],
    providers: [
        DecimalPipe,
        ...tablesServices.services,
        ...tablesPipes.pipes,
        ...tablesGuards.guards,
        ...tablesDirectives.directives,
    ],
  declarations: [
    ...tablesContainers.EmployeesContainers,
    ...tablesComponents.Employeescomponents,
    ...tablesDirectives.directives,
    EditEmployeeComponent,
    EmployeesCardComponent,
    EmployeesProfilComponent,
  ],
    exports: [...tablesContainers.EmployeesContainers, ...tablesComponents.Employeescomponents],
})
export class EmployeesModule {}
