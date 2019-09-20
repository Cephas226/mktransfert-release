// Angular
import { AfterViewInit, Component, OnDestroy, OnInit, Inject, Input } from '@angular/core';
// RxJS
import { Subscription } from 'rxjs';
// Layout
import { SubheaderService } from '../../../../../core/_base/layout';
import { Breadcrumb } from '../../../../../core/_base/layout/services/subheader.service';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA, MatSnackBar, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { Router } from '@angular/router';
import { CompaniesRestApiService } from '../shared/companies.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ExercicesService } from '../shared/exercices.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
 
export interface DialogData {
	animal: 'panda' | 'unicorn' | 'lion';
  }
  export interface Food {
	value: string;
	viewValue: string;
  }
@Component({
	selector: 'kt-headeraction',
	templateUrl: './header_action.component.html',
	styleUrls: ['./header_action.component.scss']
})

export class HeaderactionComponent {
	val: string = '';
	today: number = Date.now();
	titre: string = '';
	desc: string = '';
	breadcrumbs: Breadcrumb[] = [];
	// Private properties
	private subscriptions: Subscription[] = [];

	/**
	 * Component constructor
	 *
	 * @param subheaderService: SubheaderService
	 */
	constructor(public dialog: MatDialog,public subheaderService: SubheaderService,public router: Router) {
	}
	// myClickFunction(event) { 
	// 	alert("Button is clicked");
	// 	this.companiesrestApi.createCompagnie(this.companiesData).subscribe((data: {}) => {
	// 		this.getCompanies()
	// 		// this.router.navigate(['/demo2/kt-company-list'])
	// 		console.log(data) 
	// 		console.log(event);
	// 	  })
	// 	//
	//  }
	// cree() {
	// 	if (this.router.url === '/demo2/dashboard') {
	// 		this.dialog.open(CompanyDialogComponent);
			
	// 	  }
	// 	  if (this.router.url === '/demo2/kt-company-list') {
	// 		this.router.navigate(['/demo2/dashboard']);
	// 		this.dialog.open(CompanyDialogComponent);
	// 	  }
	// 	  if (this.router.url === '/demo2/kt-jibayaliasse' || this.router.url === '/demo2/kt-jibayaimmo'
	// 	  || this.router.url === '/demo2/kt-jibayasalaire' || this.router.url === '/demo2/kt-jibayacompta'
	// 	  || this.router.url === '/demo2/kt-jibayabudget' || this.router.url === '/demo2/kt-jibayacoll'
	// 	  || this.router.url === '/demo2/kt-jibayadoc' || this.router.url === '/demo2/kt-jibayatva'
	// 	  || this.router.url === '/demo2/kt-exercices'
	// 	  ) {
	// 	  // tslint:disable-next-line: no-use-before-declare
	// 	  this.dialog.open(ExocreateDialogComponent);
	// 	}
	// }
}

// 	@Component({
	
// 		  selector: 'company-create-dialog',
// 		  template: `
// 		  <form class="example-form">
// 		  <h4 class="modal-title"> <i class="material-icons orange600">
// 		  account_balance
// 		  </i>Nouvelle compagnie</h4>
// 		  <table class="example-full-width" cellspacing="0"><tr>
// 		  <td><mat-form-field class="example-full-width">
// 			  <input matInput placeholder="id" [(ngModel)]="companiesData.id"
// 			  name="id"/>
// 			</mat-form-field></td>
// 			<td><mat-form-field class="example-full-width">
// 			  <input matInput placeholder="Raison sociale" [(ngModel)]="companiesData.company_title"
// 			  name="raison"
// 			  />
// 			</mat-form-field></td>
// 			<td><mat-form-field class="example-full-width">
// 			<input matInput 
// 			name="short"
// 			placeholder="Nom Abrégé" [(ngModel)]="companiesData.short_name"/>
// 			</mat-form-field></td>
// 		  </tr></table>
// 		  <table class="example-full-width" cellspacing="0"><tr>
// 			  <td>
// 				  <mat-form-field class="example-full-width">
// 				  <input matInput name="date_creation"
// 				  [matDatepicker]="picker" placeholder="Date de creation" [(ngModel)]="companiesData.company_created_date"/>
// 					  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
// 					  <mat-datepicker #picker></mat-datepicker>
// 				  </mat-form-field>
// 			  </td>
// 			  <td>
// 				  <mat-form-field class="example-full-width">
// 				  <textarea name="creation_Date" matInput placeholder="Secteur d’activité" [(ngModel)]="companiesData.company_activity"></textarea>
// 					</mat-form-field>
// 			</td>
// 			<td>
// 			<mat-form-field class="example-full-width">
// 			<textarea name="judical_form" matInput placeholder="Forme juridique" [(ngModel)]="companiesData.company_juridical_form"></textarea>
// 			  </mat-form-field>
// 	  </td>
// 			</tr></table>
			
// 			  <table class="example-full-width" cellspacing="0"><tr>
// 				  <td><mat-form-field class="example-full-width">
// 				  <input matInput #IF maxlength="8" name="postalCode" placeholder="IF"[(ngModel)]="companiesData.company_IF"/>
// 					  <mat-hint align="end">{{IF.value.length}} / 8</mat-hint>
// 				  </mat-form-field></td>
// 				  <td><mat-form-field class="example-full-width">
// 				  <input matInput #ICE maxlength="15"name="ice" placeholder="ICE" [(ngModel)]="companiesData.company_ICE"/>
// 					  <mat-hint align="end">{{ICE.value.length}} / 15</mat-hint>
// 				  </mat-form-field></td>
// 				</tr>
// 			  </table>
// 			  <table class="example-full-width" cellspacing="0"><tr>
// 				  <td><mat-form-field class="example-full-width">
// 				  <input matInput #TP maxlength="8" placeholder="TP" name="TP" [(ngModel)]="companiesData.company_TP"/>
// 					  <mat-hint align="end">{{TP.value.length}} / 8</mat-hint>
// 				  </mat-form-field></td>
// 				  <td><mat-form-field class="example-full-width">
// 					  <input matInput #RC maxlength="8" name="RC" placeholder="RC" [(ngModel)]="companiesData.company_RC"/>
// 					  <mat-hint align="end">{{RC.value.length}} / 8</mat-hint>
// 				  </mat-form-field></td>
// 				  <td><mat-form-field class="example-full-width">
// 				  <input matInput #CNSS maxlength="8" name="cnss" placeholder="CNSS"[(ngModel)]="companiesData.company_CNSS"/>
// 					  <mat-hint align="end">{{CNSS.value.length}} / 8</mat-hint>
// 				  </mat-form-field></td>
// 				</tr>
// 			  </table>
// 			  <div class="example-button-row" style='margin-left:40%;margin-top:5%'>
// 					<button mat-raised-button color="primary" (click)="SaveCompany()" >
// 					<i class="material-icons">save</i>
// 					Sauvegarder</button>
					
// 					<button mat-button (click)="onNoClick()">Annuler</button>
// 			  </div>
// 		</form>
// 		<style>
// 		.example-form {
// 		margin-left:4%;
// 		margin-right: 2%;
// 		margin-top: 5%;
// 		margin-bottom: 10%
// 	  }
// 	  .material-icons.orange600 { color: #FB8C00; }
// 	  .example-full-width {
// 		width: 100%;
// 	  }
// 	  td {
// 		padding-right:30px;
// 	  }
// 		</style>
// 		  `,
// 		})
		
// 		export class CompanyDialogComponent implements OnInit {
// 			companies:any=[];
// 			@Input() companiesData = { 
// 					"id": "",
// 					"company_title": "",
// 					"short_name": "",
// 					// company_created_date: "",
// 					"company_activity": "",
// 					"company_juridical_form": "",
// 					"company_IF": "",
// 					"company_ICE": "",
// 					"company_TP": "",
// 					"company_RC": "",
// 					"company_CNSS": "",
					
// 			 };
			 
// 			constructor( 
// 				public dialogRef: MatDialogRef<CompanyDialogComponent>,
// 				public companiesrestApi: CompaniesRestApiService, 
// 				private modalService: NgbModal,
// 				public router: Router,public snackBar: MatSnackBar)
// 				 {
// 				}
// 				ngOnInit(){
// 					this.getCompanies()
// 				}

// 				getCompanies() {
// 					return this.companiesrestApi.getCompany().subscribe((data: {}) => {
// 						this.companies = data;
// 					  })
			
// 				  }
// 			SaveCompany() {
// 				this.companiesrestApi.createCompagnie(this.companiesData).subscribe(res => {
// 					this.router.navigate([''])
// 					console.log(res)
					
// 				  })
// 				  this.modalService.dismissAll();
// 				  this.router.navigate([''])
// 				  this.getCompanies()	
// 				  this.snackBar.openFromComponent(PizzaPartyComponent, {
// 					duration: 2000,
// 					panelClass: ['blue-snackbar']
// 					});
// 				  this.dialogRef.close();
// 				  this.companiesrestApi.getCompany().subscribe((res: {}) => {
// 					this.companies = res;
 
// 					})
// 			}
// 			onNoClick(): void {
// 				this.dialogRef.close();

	
// 			  }
// 		}
// 		@Component({
// 			selector: 'snack-bar-component-example-snack',
// 			template: `
// 			  <span _ngcontent-c3="" class="example-pizza-party">
// 				Succès!!! 🎉
// 			  </span>`,
// 			styles: [`.example-pizza-party { color: #FF9C32; }`],
// 		  })
// 		  export class PizzaPartyComponent {}
// @Component({
// 	// tslint:disable-next-line: component-selector
// 		selector: 'exo-create-dialog',
// 		template: `<form class="example-form">
// 		<div class="modal-header">
// 				  <h4 class="modal-title">Nouvelle Exercice</h4>
// 				</div>
// 				<mat-form-field class="example-half-width">
// 		  <input matInput placeholder="Debut"  name="debut"  [(ngModel)]="exercicesdata.id">
// 		</mat-form-field>
// 		<mat-form-field class="example-half-width">
// 		  <input matInput placeholder="Debut"  name="debut"  [(ngModel)]="exercicesdata.debut">
// 		</mat-form-field>
// 		<div class="kt-space-20"></div>
// 		<mat-form-field class="example-half-width">
// 			<input matInput placeholder="Fin"  name="fin" [(ngModel)]="exercicesdata.fin">
// 		</mat-form-field>
// 		<div class="example-button-row" style='margin-left:40%;margin-top:5%'>
// 		<button mat-raised-button color="primary">
// 		<i class="material-icons">save</i>
// 		Sauvegarder</button>
// 		<div class="form-group">
// 		<button class="btn btn-success btn-lg btn-block" (click)="addExercice()">Create Employee</button>
// 	  </div>
// 		<button mat-button>Annuler</button>
// 		<div class="kt-space-20"></div>
//   </div>
// 	  </form>
// 	  <style>
// 	  .example-form {
// 		margin-left:10%;
// 		margin-right: 10%;
// 		margin-top: 5%;
// 		margin-bottom: 10%
// 		width: 50%;
// 	}
// 	.example-half-width {
// 	  width: 50%;
// 	}
// 	  </style>`,
// 	})
// 		export class ExocreateDialogComponent implements OnInit {
// 			@Input() exercicesdata = { id:'',debut: '', fin: '' }
// 			exercices:any=[];
// 			constructor(
// 			  public exercicesrestApi: ExercicesService,
// 			  public router: Router
// 			) { }
		  
// 			ngOnInit() { }
		  
// 			// addExercice() {
// 			// 	  this.exercicesrestApi.createExercices(this.exercicesdata).subscribe((data: {}) => {
			
// 			// 		  console.log(data)
				
// 			//   })	
// 			//   this.router.navigate(['/demo2/kt-jibayaliasse'])
		
// 			// }

// 	}
