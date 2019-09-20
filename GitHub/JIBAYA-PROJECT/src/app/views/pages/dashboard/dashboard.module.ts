// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
 
import { DashboardComponent} from './dashboard.component';
import { WidgetModule } from '../../partials/content/widgets/widget.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, MatInputModule, MatSelectModule, MatButtonToggleModule, MatSlideToggleModule, MatProgressSpinnerModule, MatSnackBarModule, MatTabsModule, MatSidenavModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatDividerModule} from '@angular/material/divider';
import { GridsterModule } from 'angular-gridster2';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import { CovalentCommonModule, CovalentMediaModule, CovalentExpansionPanelModule, CovalentStepsModule, CovalentDialogsModule, CovalentLoadingModule, CovalentSearchModule, CovalentPagingModule, CovalentNotificationsModule, CovalentMenuModule, CovalentMessageModule } from '@covalent/core';
// import { AsideLeftComponent } from '../themes/demo2/aside/aside-left.component';
// import { BrandComponent } from '../themes/demo2/header/brand/brand.component';
 
// import { NgxPermissionsModule } from 'ngx-permissions';
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
	imports: [
		CommonModule,
		MatDialogModule,
		FormsModule,
		MatTableModule,
		NgxChartsModule,
		GridsterModule,
		MatListModule,
		MatDividerModule,
		MatCardModule,
		MatToolbarModule,
		ReactiveFormsModule,
		PartialsModule,
		WidgetModule,
		CoreModule,
		NgbModule,
		MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
	MatMenuModule,
	CovalentDataTableModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
	MatTabsModule,
	MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
	MatRippleModule,
	
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,
    /** Additional **/
    NgxChartsModule,
	CovalentLayoutModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
		RouterModule.forChild([
			{
				path: '',
				component: DashboardComponent
			},
		]),
	],
	entryComponents: [],
	providers: [],
	declarations: [
        
		DashboardComponent,
	]
})
export class DashboardModule {
}
