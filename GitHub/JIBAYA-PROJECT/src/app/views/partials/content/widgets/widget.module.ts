import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatCardModule, } from '@angular/material';
import { CoreModule } from '../../../../core/core.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// Datatable
import { DataTableComponent } from './general/data-table/data-table.component';
// General widgets
import { Widget1Component } from './widget1/widget1.component';
import { Widget4Component } from './widget4/widget4.component';
import { Widget5Component } from './widget5/widget5.component';
import { Widget12Component } from './widget12/widget12.component';
import { Widget14Component } from './widget14/widget14.component';
import { Select2Component } from '../widgets/select2/selecte2.component';
import { Widget26Component } from './widget26/widget26.component';
import { Timeline2Component } from './timeline2/timeline2.component';
import { compagnieComponent } from './widcompagny/widcompagny.component';
import { PortletModule } from '../general/portlet/portlet.module';
import { Select2Module } from './select2/public_api';
import { HeaderactionComponent} from './header_action/header_action.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material';



@NgModule({
	declarations: [
		DataTableComponent,
		// Widgets
		// CompanyDialogComponent,
		Widget1Component,
		compagnieComponent,
		Widget4Component,
		Widget5Component,
		// ExocreateDialogComponent,
		HeaderactionComponent,
		Widget12Component,
 
		Widget14Component,
		Select2Component,
		// PizzaPartyComponent,
		Widget26Component,
		Timeline2Component,
	],
	entryComponents: [],
	exports: [
		DataTableComponent,
		// Widgets
		Widget1Component,

		Widget4Component,
  
		compagnieComponent,
		// ExocreateDialogComponent,
		Widget5Component,
		// CompanyDialogComponent,
		// ExocreateDialogComponent,
		HeaderactionComponent,
		Widget12Component,
		Widget14Component,
		Select2Component,
		Widget26Component,
		Timeline2Component,
	],
	
	imports: [
		CommonModule,
		PortletModule,
		MatRadioModule,
		MatCardModule,
		MatDialogModule,
		MatCheckboxModule,
		MatInputModule,
		Select2Module,
		MatSelectModule,
		MatDatepickerModule,
		MatCheckboxModule,
		MatFormFieldModule,
		PerfectScrollbarModule,
		MatTableModule,
		CoreModule,
		MatIconModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatPaginatorModule,
		MatSortModule,
	]
})
export class WidgetModule {
}
