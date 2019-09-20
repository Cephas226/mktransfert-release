// Angular
import { AfterViewInit, Component, OnDestroy, OnInit, Inject } from '@angular/core';
// RxJS
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
// Layout
import { SubheaderService } from '../../../../../core/_base/layout';
import { Breadcrumb } from '../../../../../core/_base/layout/services/subheader.service';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { CompaniesRestApiService } from '../../../content/widgets/shared/companies.service';
import { Company } from '../../../content/widgets/shared/companie.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
	selector: 'kt-subheader1',
	templateUrl: './subheader1.component.html',
	styleUrls: ['./subheader1.component.scss']
})
export class Subheader1Component implements OnInit, OnDestroy, AfterViewInit {
	// Public properties
	// closeResult: string;
	today: number = Date.now();
	title: string = '';
	desc: string = '';
	breadcrumbs: Breadcrumb[] = [];
	id = '';
	companiesData: any = [];
	private subscriptions: Subscription[] = [];

	/**
	 * Component constructor
	 *
	 * @param subheaderService: SubheaderService
	 */
	constructor(public actRoute: ActivatedRoute,public companiesrestApi:CompaniesRestApiService,public dialog: MatDialog,public subheaderService: SubheaderService,private modalService: NgbModal,private router: Router) {
		this.getCompanies()
	}
	open(content: any) {
        this.modalService.open(content).result.then((result) => {
        }, (reason) => {
        });
	}
	UpdatecompanyDialog() {
		// this.getonecompany(this.companiesData)
		if (this.router.url === '/demo2/kt-jibayaliasse' || this.router.url === '/demo2/kt-jibayaimmo'
			|| this.router.url === '/demo2/kt-jibayasalaire' || this.router.url === '/demo2/kt-jibayacompta'
			|| this.router.url === '/demo2/kt-jibayabudget' || this.router.url === '/demo2/kt-jibayacoll'
			|| this.router.url === '/demo2/kt-jibayadoc' || this.router.url === '/demo2/kt-jibayatva'
			|| this.router.url === '/demo2/kt-exercices'
			|| this.router.url === '/demo2/dashboard'|| this.router.url === '/demo2/kt-company-list'
			
			)

			{
				// console.log(this.companiesData)
				// this.companiesrestApi.getCompanies('14').subscribe(
				// 	data => {
				// 	this.companiesData = data;
				// 	console.log(data);
				//   });
			// this.dialog.open(modifdialogueDialogComponent);
		  }
		 
	  }
	//   updateCompagnie() {
	// 	if(window.confirm('Are you sure, you want to update?')){
	// 		this.companiesrestApi.getCompanies(this.id).subscribe((data: {}) => {
	// 			this.companiesData = data;
	// 			console.log(data)
	// 		  })
	// 	//   this.companiesrestApi.updateCompagnie(this.id, this.companiesData).subscribe(data => {
	// 	// 	// this.router.navigate(['/demo2/kt-company-list'])
	// 	// 	console.log(data)
	// 	//   })
	
	// 	}
	//   } 
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
	ngOnInit() {
	
		  
	}
	getonecompany(companiesData){
		this.companiesrestApi.getCompanies(companiesData.id).subscribe((data: {}) => {
			this.companiesData = data;
			console.log(data)
		  })
	}
	getCompanies() {
		this.companiesrestApi.getCompany().subscribe((data: {}) => {
			this.companiesData = data;

		  })
		//   console.log(this.companiesData)
	  }
	ngAfterViewInit(): void {
		//this.getCompanies()
		this.subscriptions.push(this.subheaderService.title$.subscribe(bt => {
			if (bt) {
				Promise.resolve(null).then(() => {
					this.title = bt.title;
					this.desc = bt.desc;
				});
			}
		}));

		this.subscriptions.push(this.subheaderService.breadcrumbs$.subscribe(bc => {
			Promise.resolve(null).then(() => {
				this.breadcrumbs = bc;
			});
		}));
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(sb => sb.unsubscribe());
	}
	modules() {
		this.router.navigate(['/demo2/kt-mesmodules']);
	} }
// 	@Component({
// 		// tslint:disable-next-line: component-selector
// 		  selector: 'modif-dialogue',
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
// 					<button mat-raised-button color="primary" (click)="openSnackBar()" >
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
// 		`,
// 		})

// // tslint:disable-next-line: class-name

// 		export class modifdialogueDialogComponent   {
// 			id = this.actRoute.snapshot.params['id'];
// 			employeeData: any = {};
		  
// 			constructor(
// 				private router: Router,private formBuilder: FormBuilder,public actRoute: ActivatedRoute,private _snackBar: MatSnackBar,public companiesrestApi:CompaniesRestApiService
// 			) { 
// 			}
		  
// 			ngOnInit() { 
// 			  this.companiesrestApi.getCompanies(this.id).subscribe((data: {}) => {
// 				this.employeeData = data;
// 			  })
// 			}
		  
// 			// Update employee data
// 			updateEmployee() {
// 			  if(window.confirm('Are you sure, you want to update?')){
// 				this.companiesrestApi.updateCompany(this.id, this.employeeData).subscribe(data => {
// 				  this.router.navigate(['/demo2/dashboard'])
// 				})
// 			  }
// 			}
// 	}

@Component({
	// tslint:disable-next-line: component-selector
	  selector: 'modifexo-dialogue',
	  template: `<form class="example-form">
	  <div class="modal-header" >
	  <h4 class="modal-title"> <i class="material-icons orange600">
	  account_balance
	  </i>Modifier votre Exercice</h4>
			  </div>
	  <mat-form-field class="example-half-width">
		<input matInput placeholder="Debut">
	  </mat-form-field>
	  <div class="kt-space-20"></div>
	  <mat-form-field class="example-half-width">
		  <input matInput placeholder="Fin">
	  </mat-form-field>
	  <div class="example-button-row" style='margin-left:40%;margin-top:5%'>
	  <button mat-raised-button color="primary">
	  <i class="material-icons">save</i>
	  Sauvegarder</button>
	  <button mat-button>Annuler</button>
	  <div class="kt-space-20"></div>
</div>
	</form>
	<style>
	.example-form {
	  margin-left:10%;
	  margin-right: 10%;
	  margin-top: 5%;
	  margin-bottom: 10%
	  width: 50%;
  }
  .example-half-width {
	width: 50%;
  }
	</style>`,
	})
// tslint:disable-next-line: class-name
	export class modifexoDialogComponent {
	  constructor() {}
	}


