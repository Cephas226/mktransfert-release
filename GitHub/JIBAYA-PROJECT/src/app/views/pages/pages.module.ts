// Angular
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// NgBootstrap
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule, MatSidenav} from '@angular/material/sidenav';
import { MailModule } from './apps/mail/mail.module';
import {MatTabsModule} from '@angular/material/tabs';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { CoreModule } from '../../core/core.module';
import { MyPageComponent } from './my-page/my-page.component';
import {MatInputModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatSelectModule, MatButtonToggleModule, MatSlideToggleModule, MatSnackBarModule, MatTooltipModule, MatRippleModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule, MatDividerModule, MatProgressBarModule} from '@angular/material';
import { MesmodulesComponent,   } from './mesmodules/mesmodules.component';
import { ExercicesComponent, ExercicePopupComponent, SuccesComponent } from './exercices/exercices.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule, MatFormFieldModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { MaterialPreviewModule } from '../partials/content/general/material-preview/material-preview.module';
// import { ButtonComponent } from './material/buttons-and-indicators/button/button.component';
// import { IconComponent } from './material/buttons-and-indicators/icon/icon.component';
// import { DialogComponent } from './material/popups-and-modals/dialog/dialog.component';
import { JibayaliasseComponent } from './jibayaliasse/jibayaliasse.component';
import { JibayatvaExercicesComponent } from './jibayatva_exercices/jibayatva_exercices.component';
import { JibayasalaireComponent } from './jibayasalaire/jibayasalaire.component';
import { JibayaimmoComponent } from './jibayaimmo/jibayaimmo.component';
import { JibayacomptaComponent } from './jibayacompta/jibayacompta.component';
import { JibayabudgetComponent } from './jibayabudget/jibayabudget.component';
import { JibayacollComponent } from './jibayacoll/jibayacoll.component';
import { JibayadocComponent } from './jibayadoc/jibayadoc.component';
import {MatTableModule} from '@angular/material/table';
import { LiassechoicepageComponent } from './liassechoicepage/liassechoicepage.component';
import { TableauliasseComponent, tableauliassesuccesnotif, exportliassecomponent } from './tableauliasse/tableauliasse.component';
import { BalanceComponent, balancesuccesnotif } from './balance/balance.component';
import { HotTableModule, HotTableRegisterer } from '@handsontable/angular';
import { DotationComponent } from './dotation/dotation.component';
 
 
import { BrowserModule } from '@angular/platform-browser';
// import {CompagnyService } from './service/company.service';
import { ExercicesService } from '../partials/content/widgets/shared/exercices.service';
// import { ContextMenu2Component } from '../partials/layout';
import { CompanyListComponent, CompanyPopupComponent, SuccesSnackComponent } from './company-list/company-list.component';
import { HttpClient} from '@angular/common/http';
import { CompaniesRestApiService } from '../partials/content/widgets/shared/companies.service';
 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MyPagetestComponent} from './my-pagetest/my-pagetest.component';
 
import { ChangeTextDirective } from './dashboard/changeText.directive';
import {MatRadioModule} from '@angular/material/radio';
import {NgfmApi, NgfmDialogService, NgfmModule, NgfmRouteComponent } from './ngfm/public_api';
import { ngFmComponent } from './ngfm/ngfm.components';
import { RouterModule } from '@angular/router';
// import { PrivateRouteService } from './services/private-route.service';
// import { ConfigResolverService } from './services/config-resolver.service';
import { AsideLeftComponent } from '../themes/demo2/aside/aside-left.component';
import { BrandComponent } from '../themes/demo2/header/brand/brand.component';
import { ExportAsModule } from 'ngx-export-as';
import { NgxPermissionsModule } from 'ngx-permissions';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import { AccordionControlComponent } from '../partials/content/general/accordion-control/accordion-control.module';
import { Component1Component } from './component-1/component-1.component';
import { Component3Component } from './component-3/component-3.component';
import { Component2Component } from './component-2/component-2.component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { PlancomptableComponent, plancomptablesuccesnotif } from './plancomptable/plancomptable.component';
import { TableauData } from '../partials/content/widgets/shared/tableauliasse.model';
 
import { NgxSpinnerModule } from "ngx-spinner";
import { GridsterModule } from 'angular-gridster2';
import {HttpModule} from '@angular/http';
// import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import {MatExpansionModule} from '@angular/material/expansion';
// import { GridModule } from '@progress/kendo-angular-grid';
// import { InvoiceComponent } from './my-page/invoice.component';
import { MatMenuModule} from '@angular/material/menu';
import { FormsListRestApiService } from '../partials/content/widgets/shared/forms_list.service';
import { FormsDataRestApiService } from '../partials/content/widgets/shared/forms_data.service';

import { CovalentCommonModule, CovalentLayoutModule, CovalentDataTableModule, CovalentMediaModule, CovalentExpansionPanelModule, CovalentStepsModule, CovalentDialogsModule, CovalentLoadingModule, CovalentSearchModule, CovalentPagingModule, CovalentNotificationsModule, CovalentMenuModule, CovalentMessageModule } from '@covalent/core';
import { WidgetModule } from '../partials/content/widgets/widget.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { ListComponent } from './component-1/list/list.component';
import { TaskItemComponent } from './component-1/task-item/task-item.component';
import { SortablejsModule } from 'angular-sortablejs';
import { NgChatModule } from './ng-chat/ng-chat.module';
import { NgChat } from './ng-chat/ng-chat.component';
import { JbJibayatvaComponent } from './jb-jibayatva/jb-jibayatva.component';
import { JbtvaTableComponent, Formtvacomponent, exportTVAcomponent } from './jbtva-table/jbtva-table.component';
import { CustomersListComponent } from './apps/e-commerce/customers/customers-list/customers-list.component';
import {MatChipsModule} from '@angular/material/chips';
import { CompanyEditDialogComponent } from './user-management/companies/companies-edit/company-edit.dialog.component';
import { MaterialModule } from './material/material.module';
import { HandsontbleComponent } from './handsontble/handsontble.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { SidenavService } from './services/sidenav.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportService } from '../partials/content/widgets/shared/reportdata.service';
import { ParametreTableauliasseComponent } from './tableauliasseParametres/parameters_tableauliasse.component';
@NgModule({
	declarations: [MyPageComponent,
		 MesmodulesComponent,
		 ExercicesComponent,
		 HeaderComponent,
		 LeftMenuComponent,
 
		 ParametreTableauliasseComponent,
		 ChangeTextDirective,
		//  InvoiceComponent,
		balancesuccesnotif,
		Formtvacomponent,
		ListComponent,
    	TaskItemComponent,
		plancomptablesuccesnotif,
		//  ButtonComponent,
		 SuccesSnackComponent,
		//  IconComponent,
		 CompanyListComponent,
		 SidenavComponent,
		//  DialogComponent,
		CompanyEditDialogComponent,
		 CompanyPopupComponent,
		 exportliassecomponent,
		//  CompanyPopupUpdateDashboard,
		 JibayaliasseComponent,
		 JibayatvaExercicesComponent,
		 JibayasalaireComponent,
		 JibayaimmoComponent,
		 Component1Component, 
		 Component2Component,
		 Component3Component, 
		 ExercicePopupComponent,
		 tableauliassesuccesnotif,
		 JibayacomptaComponent,
		 JibayabudgetComponent,
 
		//  CompanyDialogComponent,
			AsideLeftComponent,
		 JibayacollComponent,
		//  Offer,
		//  Unit,
		 SuccesComponent,
		 BrandComponent,
		 JibayadocComponent,
		 LiassechoicepageComponent,
		 TableauliasseComponent,
		 
		 BalanceComponent,
		 DotationComponent,
		 exportTVAcomponent,
		//  AccordionControlComponent,
		 ngFmComponent,
		 SidenavComponent,
		 CustomersListComponent,
		 MyPagetestComponent,
		 PlancomptableComponent,
		 JbJibayatvaComponent,
		 JbtvaTableComponent,
		 HandsontbleComponent,
		],
		entryComponents: [
			ParametreTableauliasseComponent,
			Formtvacomponent,
			exportliassecomponent,
			tableauliassesuccesnotif,
			exportTVAcomponent,
			TableauliasseComponent,
			
			SidenavComponent,
			BrandComponent,
			balancesuccesnotif,
			plancomptablesuccesnotif,
			AsideLeftComponent,
			Component1Component, 
			Component2Component,
			Component3Component, 
			MatSidenav,
			CustomersListComponent,
			CompanyPopupComponent,
			SuccesSnackComponent,
			ExercicePopupComponent,
			SuccesComponent,
			
		],
	exports: [SidenavComponent,
		Formtvacomponent,
		balancesuccesnotif,
		TableauliasseComponent,
		tableauliassesuccesnotif,
		ParametreTableauliasseComponent,
		plancomptablesuccesnotif,
		Component1Component, 
		Component2Component,
		Component3Component,
		exportTVAcomponent, 
		CustomersListComponent,
		// AccordionControlComponent,
		BrandComponent,AsideLeftComponent,ngFmComponent,SuccesComponent,SuccesSnackComponent,ExercicePopupComponent,CompanyPopupComponent,MatSidenav],
	imports: [
		// PDFExportModule,
		CommonModule,
		MatProgressBarModule,
		NgxChartsModule,
		MatDialogModule,
		FormsModule,
		MatChipsModule,
		MaterialModule,
		MatTableModule,
		SortablejsModule,
		MatExpansionModule,
		NgxChartsModule,
		GridsterModule,
		MatListModule,
		MatDividerModule,
		MatCardModule,
		MatToolbarModule,
		// BrowserModule,
		// BrowserAnimationsModule,
		ReactiveFormsModule,
		PartialsModule,
		WidgetModule,
		NgChatModule,
		CoreModule,
		NgbModule,
		MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
	MatMenuModule,
	CovalentDataTableModule,
	MatInputModule,
    FormsModule,
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
	SortablejsModule,
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
		PerfectScrollbarModule,
		MatDialogModule,
		CommonModule,
		// GridModule,
		HttpModule,
		MatCardModule,
		ExportAsModule,
		GridsterModule,
		MatSidenavModule,
		HotTableModule,
		HttpClientModule,
		FormsModule,
		MatMenuModule,
		MatButtonModule,
		MatListModule,
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
		MatTabsModule,
		NgxSpinnerModule,
        ReactiveFormsModule,
		MatIconModule,
		NgbModule,
		RouterModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatInputModule,
		MatRadioModule,
		MatListModule,
		MatFormFieldModule,
		MaterialPreviewModule,
		MatCardModule,
		MatToolbarModule,
		MatButtonModule,
		MatCheckboxModule,
		CoreModule,
		NgfmModule,
		NgxChartsModule,
		NgxPermissionsModule,
		PartialsModule,
		MailModule,
		ColorPickerModule,

		ECommerceModule,
	],
	
	providers: [
 
		HotTableRegisterer,
		// PrivateRouteService,
		// ConfigResolverService,
		/*
		{
		  provide: NGFM_REST_CONFIG, useValue: new NgfmRestConfig({
			baseUrl: 'http://localhost:3000/files'
		  })
		},
		{ provide: NGFM_CONNECTOR, useClass: NgfmRestConnector },*/
		NgfmApi, 
		NgfmDialogService,
		FormsListRestApiService,
		FormsDataRestApiService,
		ReportService,
		SidenavService,
		ExercicesService,CompaniesRestApiService, NgbActiveModal,
		{ provide: MatDialogRef, useValue: {} },
		{ provide: TableauData, useValue: [] },
		{ provide: MAT_DIALOG_DATA, useValue: [] },
	],
	bootstrap: [ngFmComponent,NgChat]
})
export class PagesModule {
}
