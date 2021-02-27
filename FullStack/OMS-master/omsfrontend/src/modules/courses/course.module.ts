/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import * as tablesComponents from '@modules/employees/components';
import * as tablesContainers from '@modules/employees/containers';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
/* Components */
import * as coursesComponents from './components';

/* Containers */
import * as coursesContainers from './containers';

/* Directives */
import * as tablesDirectives from './directives';

/* Guards */
import * as tablesGuards from './guards';

/* Services */
import * as tablesServices from './services';
import * as tablesPipes from './pipes';
import {Courscomponents, EditCoursesComponent} from './components';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxDropzoneModule} from "ngx-dropzone";
import { CoursesCardComponent } from './components/courses-card/courses-card.component';
import {NgBootstrapFormValidationModule} from "ng-bootstrap-form-validation";


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
      ...coursesComponents.Courscomponents,
      ...coursesContainers.CoursesContainers,
    EditCoursesComponent,
    CoursesCardComponent,
  ],
    exports: [],
})
export class CoursesModule {}
