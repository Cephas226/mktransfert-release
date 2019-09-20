import { Component, OnInit, Inject, Input, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { Router,Params } from '@angular/router';
import { NgbModal,ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { DialogData } from '../../partials/layout/subheader/subheader1/subheader1.component';
import { CompaniesRestApiService } from '../../partials/content/widgets/shared/companies.service';
import { MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';
import { single, pie, multi, times } from './data';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';
 
import { TdMediaService, TdDigitsPipe, TdLayoutManageListComponent } from '@covalent/core';
export interface DialogData {
  id: string;
  company_country_id:string
  company_title: string;
	short_name: string;
	company_created_date:string;
	company_activity:string;
	company_juridical_form:string;
	company_IF:string;
	company_ICE:string;
	company_TP: string;
	company_RC:string;
	company_CNSS:string;
}
@Component({
  selector: 'kt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
// data goes here
name = 'UI Platform';
@ViewChild('manageList') manageList: TdLayoutManageListComponent;
  @ViewChild('dialogContent') template: TemplateRef<any>;
  dateFrom: Date = new Date(new Date().getTime() - (2 * 60 * 60 * 24 * 1000));
  dateTo: Date = new Date(new Date().getTime() - (1 * 60 * 60 * 24 * 1000));
  config = {
    width: '50%',
    height: '50%',
  };

pie: any[];
single: any[];
multi: any[];
times: any[];
routes = [{
  title: 'Dashboards',
  route: '/',
  icon: 'dashboard',
}, {
  title: 'Reports',
  route: '/',
  icon: 'insert_chart',
}, {
  title: 'Sales',
  route: '/',
  icon: 'account_balance',
}, {
  title: 'Marketplace',
  route: '/',
  icon: 'store',
},
];
usermenu = [{
  title: 'Profile',
  route: '/',
  icon: 'account_box',
}, {
  title: 'Settings',
  route: '/',
  icon: 'settings',
},
];

data: any[] = [
  {
    'name': 'Frozen yogurt',
    'type': 'Ice cream',
    'calories': 159.0,
    'fat': 6.0,
    'carbs': 24.0,
    'protein': 4.0,
  }, {
    'name': 'Ice cream sandwich',
    'type': 'Ice cream',
    'calories': 237.0,
    'fat': 9.0,
    'carbs': 37.0,
    'protein': 4.3,
  }, {
    'name': 'Eclair',
    'type': 'Pastry',
    'calories':  262.0,
    'fat': 16.0,
    'carbs': 24.0,
    'protein':  6.0,
  }, {
    'name': 'Cupcake',
    'type': 'Pastry',
    'calories':  305.0,
    'fat': 3.7,
    'carbs': 67.0,
    'protein': 4.3,
  }, {
    'name': 'Jelly bean',
    'type': 'Candy',
    'calories':  375.0,
    'fat': 0.0,
    'carbs': 94.0,
    'protein': 0.0,
  }, {
    'name': 'Lollipop',
    'type': 'Candy',
    'calories': 392.0,
    'fat': 0.2,
    'carbs': 98.0,
    'protein': 0.0,
  }, {
    'name': 'Honeycomb',
    'type': 'Other',
    'calories': 408.0,
    'fat': 3.2,
    'carbs': 87.0,
    'protein': 6.5,
  }, {
    'name': 'Donut',
    'type': 'Pastry',
    'calories': 452.0,
    'fat': 25.0,
    'carbs': 51.0,
    'protein': 4.9,
  }, {
    'name': 'KitKat',
    'type': 'Candy',
    'calories': 518.0,
    'fat': 26.0,
    'carbs': 65.0,
    'protein': 7.0,
  }, {
    'name': 'Chocolate',
    'type': 'Candy',
    'calories': 518.0,
    'fat': 26.0,
    'carbs': 65.0,
    'protein': 7.0,
  }, {
    'name': 'Chamoy',
    'type': 'Candy',
    'calories': 518.0,
    'fat': 26.0,
    'carbs': 65.0,
    'protein': 7.0,
  },
];

miniNav: boolean = false;
options: GridsterConfig;
dashboard: Array<GridsterItem>;
static itemChange(item, itemComponent) {
  console.info('itemChanged', item, itemComponent);
}
static itemResize(item, itemComponent) {
  console.info('itemResized', item, itemComponent);
}

 
ngAfterViewInit(): void {
  // broadcast to all listener observables when loading the page
  this.media.broadcast();
  this._changeDetectorRef.detectChanges();
}

toggleMiniNav(): void {
  this.miniNav = !this.miniNav;
  setTimeout(() => {
    this.manageList.sidenav._animationStarted
  });
}

openTemplate() {
  this.dialog.open(this.template, this.config);
}

// NGX Charts Axis
axisDigits(val: any): any {
  return new TdDigitsPipe().transform(val);
}

axisDate(val: string): string {
  return new DatePipe('en').transform(val, 'hh a');
}
changedOptions() {
  this.options.api.optionsChanged();
}

removeItem(item) {
  this.dashboard.splice(this.dashboard.indexOf(item), 1);
}
compagnielist() {
  this.router.navigate(['/demo2/kt-company-list']);
}

addItem() {
  this.dashboard.push();
}
// public single = [
//   {
//     "name": "Germany",
//     "value": 8940000
//   },
//   {
//     "name": "USA",
//     "value": 5000000
//   },
//   {
//     "name": "France",
//     "value": 7200000
//   }
// ];

// public multi = [
//   {
//     "name": "Germany",
//     "series": [
//       {
//         "name": "2010",
//         "value": 7300000
//       },
//       {
//         "name": "2011",
//         "value": 8940000
//       }
//     ]
//   },

//   {
//     "name": "USA",
//     "series": [
//       {
//         "name": "2010",
//         "value": 7870000
//       },
//       {
//         "name": "2011",
//         "value": 8270000
//       }
//     ]
//   },

//   {
//     "name": "France",
//     "series": [
//       {
//         "name": "2010",
//         "value": 5000002
//       },
//       {
//         "name": "2011",
//         "value": 5800000
//       }
//     ]
//   }
// ];


  view: any[] = [500, 200];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Number';
  showYAxisLabel = true;
  yAxisLabel = 'Value';
  timeline = true;

  cardColor='string';
  bandColor='string';
  textColor='string';
  emptyColor='string';
  innerPadding='Number';
  animations=true;
  colorScheme = {
    domain: ['#A8385C', '#6788BF', '#ADCCED', '#A95963']
  };

  // line, area
  autoScale = true;

  //pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  company_title: string;
  company_country_id:string;
	short_name: string;
	company_created_date:string;
	company_activity:string;
  select;
  cityOptions = [];
  juridical_form = [
    {value: '1', viewValue: 'SARL'},
    {value: '2', viewValue: 'SA'},
    {value: '3', viewValue: 'SNC'}
  ];
	company_IF:string;
	company_ICE:string;
  company_TP: string;
  companies:any=[];
	company_RC:string;
  company_CNSS:string;
  popup_title:string;
  selectedValue: string;
 
  constructor(
             public media: TdMediaService,
              public dialog: MatDialog,
              private _changeDetectorRef: ChangeDetectorRef,
        private datePipe: DatePipe,
        public snackBar: MatSnackBar,
        public router: Router,private modalService: NgbModal,
       
        public companiesrestApi:CompaniesRestApiService
        ) {
          Object.assign(this, {pie, single, multi, times})
  }
	modules(id) {
    
    this.router.navigate(['/demo2/kt-mesmodules/'+id]);
    console.log(id)
  }
 
  // CreateCompanyButton(event): void {
  //   const dialogRef = this.dialog.open(CompanyPopupComponent, {
  //     data: {
  //       company_country_id:'',
  //       company_title:'',
  //       short_name:'',
  //       company_created_date:'',
  //       company_activity:'', 
  //       company_juridical_form:'',
  //       company_IF:'',
  //       company_ICE:'',
  //       company_TP:'',
  //       company_RC:'',
  //       company_CNSS:'',
  //          }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result){
  //       console.log(result.company_created_date)
  //       result.company_created_date = this.datePipe.transform(result.company_created_date , 'yyyy-MM-dd');
  //       console.log(result.company_created_date)
  //       console.log(result)
  //       this.companiesrestApi.createCompagnie(result).subscribe((data: {}) => {
  //         this.companies.push(data)
  //         this.reset()
  //         dialogRef.close()
  //         this.router.navigate([''])
  //         this.getCompanies() 
  //       }) 
  //       this.snackBar.openFromComponent(SuccesSnackComponent, {  
  //         duration: 2000,
  //         panelClass: ['blue-snackbar']
  //         });
  //     }
  //     else( console.log('Nothing to do'))
  
  //   });
    
  // }
  // reset (){
  //   this.company_country_id=''
  //   this.company_title=''
  //   this.short_name=''
  //   this.company_created_date=''
  //   this.company_activity=''
  //   this.juridical_form=null
  //   this.company_IF=''
  //   this.company_ICE=''
  //   this.company_TP=''
  //   this.company_RC=''
  //   this.company_CNSS=''
  // }
  // UpdateCompanyButton(companie): void {
  // //   companie.company_juridical_form
  // //  this.cityOptions = this.juridical_form.filter(city => city.value ==   companie.company_juridical_form);
  // //  console.log(this.cityOptions)
  // //  this.cityOptions.map((t=>{
  // //    console.log(t.viewValue)
  // //    this.selectedValue=t.viewValue
  // //  }))
  //   const dialogRef = this.dialog.open(CompanyPopupComponent, {
  //     data: {
  //       company_country_id:companie.company_country_id,
  //       company_title: companie.company_title,
  //       short_name: companie.short_name, 
  //       company_created_date:new Date(companie.company_created_date),
  //       company_activity: companie.company_activity, 
  //       company_juridical_form:companie.company_juridical_form,
  //       company_IF:companie.company_IF, 
  //       company_ICE:companie.company_ICE,
  //       company_TP:companie.company_TP, 
  //       company_RC:companie.company_RC,
  //       company_CNSS:companie.company_CNSS,
        
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe(result=> {
  //    if(result==undefined){
  //     console.log('nothing')
  //    }
  //    else{
  //     result.company_created_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  //     console.log(result.company_created_date)
  //       this.companiesrestApi.updateCompany(companie.id, result).subscribe(res => {
  //       this.companies.push(res)
  //       this.reset()
  //       this.router.navigate([''])
  //       this.getCompanies() 
  //       })
  //       result.company_created_date =new Date(companie.company_created_date),
  //       this.snackBar.openFromComponent(SuccesSnackComponent, {  
  //         duration: 2000,
  //         panelClass: ['blue-snackbar']
  //       });
  //    }
  
  //   });
  // }
  ngOnInit() {
    this.getCompanies()
    this.options = {
      itemChangeCallback: DashboardComponent.itemChange,
      itemResizeCallback: DashboardComponent.itemResize,
    };
  
    this.dashboard = [
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
    ];
  }
  
  getCompanies() {
    return this.companiesrestApi.getCompany().subscribe((data: {}) => {
      this.companies = data;
      console.log(data)
      })
  
    }
  //   DeleteConfirm(id){
  //     this.companiesrestApi.deleteCompagnies(id).subscribe(data => {
  //     this.modalService.dismissAll();
  //      this.router.navigate([''])
  //     //  this.reset()
  //      this.getCompanies()
  //       })
  //     this.snackBar.openFromComponent(SuccesSnackComponent, {  
  //     duration: 2000,
  //     panelClass: ['blue-snackbar']
  //     });
  //   this.getCompanies()
  // }
      DeleteCompanyButton(content) {
       
        this.modalService.open(content).result.then((result) => {
        },);
    }
  
  
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

}
// @Component({
//   selector: 'company-popup',
//   template: `
    
  
  
//   <form class="example-form"  #companypopup="ngForm">
//   <mat-toolbar color="primary">
//   <mat-toolbar-row>
//   <h4 class="mat-dialog-title"> 
//   <i class="material-icons orange600">
//       account_balance
//   </i>
//   {{description}}
// </h4>
//   </mat-toolbar-row>
// </mat-toolbar>
//       <div style='margin-left:2%;margin-top:5%'>
//       <table class="example-full-width" cellspacing="0">
     
//       <tr>
//       <td><mat-form-field class="example-full-width">
//       <input matInput placeholder="id pays" [(ngModel)]="data.company_country_id"
//       name="company_country_id"
//       />
//     </mat-form-field></td>
//       <td><mat-form-field class="example-full-width">
//         <input matInput placeholder="Raison sociale" [(ngModel)]="data.company_title"
//         name="raison" required
//         />
//       </mat-form-field></td>
//       <td><mat-form-field class="example-full-width">
//       <input matInput 
//       name="short" required
//       placeholder="Nom Abrégé" [(ngModel)]="data.short_name"/>
//       </mat-form-field></td>
//       </tr></table>
//       <table class="example-full-width" cellspacing="0">
//       <tr>
//                 <td>
//                   <mat-form-field class="example-full-width">
//                   <input matInput name="date_creation"
//                   [matDatepicker]="picker" placeholder="Date de creation" required
//                   [(ngModel)]="data.company_created_date"/>
//                     <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
//                     <mat-datepicker #picker></mat-datepicker>
//                   </mat-form-field>
//                 </td>
//                 <td>
//                   <mat-form-field class="example-full-width">
//                   <textarea name="creation_Date" 
//                   matInput placeholder="Secteur d’activité" required
//                   [(ngModel)]="data.company_activity"></textarea>
//                   </mat-form-field>
//               </td>
           
//               <mat-form-field>
//                         <mat-select
//                         name="juridical_form" [(ngModel)]="data.company_juridical_form" required>
//                         <mat-option *ngFor="let juridical of juridical_form" [value]="juridical.value">
//                         {{juridical.viewValue}}
//                       </mat-option>
//                       </mat-select>
//             </mat-form-field>
//       </tr>
//       </table>
      
//         <table class="example-full-width" cellspacing="0"><tr>
//           <td><mat-form-field class="example-full-width">
//           <input matInput #IF maxlength="8" name="postalCode" placeholder="IF" required
//           [(ngModel)]="data.company_IF"/>
//             <mat-hint align="end">{{IF.value.length}} / 8</mat-hint>
//           </mat-form-field></td>
//           <td><mat-form-field class="example-full-width">
//           <input matInput #ICE maxlength="15"name="ice" placeholder="ICE" required
//           [(ngModel)]="data.company_ICE"/>
//             <mat-hint align="end">{{ICE.value.length}} / 15</mat-hint>
//           </mat-form-field></td>
//         </tr>
//         </table>
//         <table class="example-full-width" cellspacing="0"><tr>
//           <td><mat-form-field class="example-full-width">
//           <input matInput #TP maxlength="8" placeholder="TP" name="TP" required
//           [(ngModel)]="data.company_TP"/>
//             <mat-hint align="end">{{TP.value.length}} / 8</mat-hint>
//           </mat-form-field></td>
//           <td><mat-form-field class="example-full-width">
//             <input matInput #RC maxlength="8" name="RC" placeholder="RC" required
//             [(ngModel)]="data.company_RC"/>
//             <mat-hint align="end">{{RC.value.length}} / 8</mat-hint>
//           </mat-form-field></td>
//           <td><mat-form-field class="example-full-width">
//           <input matInput #CNSS maxlength="8" name="cnss" placeholder="CNSS" required
//           [(ngModel)]="data.company_CNSS"/>
//             <mat-hint align="end">{{CNSS.value.length}} / 8</mat-hint>
//           </mat-form-field></td>

//         </tr>
//         <tr>
//         <td><mat-form-field class="no-line">
//         <input matInput  [(ngModel)]="data.id" 
//         name="id" [hidden]="true"/>
//       </mat-form-field></td>
//         </tr>
    
//         </table>
//         <div class="example-button-row" style='margin-left:40%;margin-top:5%'>
//           <button mat-raised-button (click)="DismissButton()">Annulez</button>
//             <button mat-raised-button color="primary" type="submit" [disabled]="companypopup.invalid"
//                 [mat-dialog-close]="data" cdkFocusInitial>
//                 <i class="material-icons">save</i>
//                 Sauvegardez
//             </button>
 
            
//         </div>
//       </div>

// </form>
//                     <style>
//                       .example-form {
               
//                       margin-bottom: 10%
//                       }
//                       .material-icons.orange600 { color: #FB8C00; }
//                       .example-full-width {
//                       width: 100%;
//                       }
//                       td {
//                       padding-right:30px;
//                       }
//                       .mat-dialog-container {
//                         padding-top: 0 !important;
//                     }
                    
//                     dialog-overview-example-dialog.ng-star-inserted > div {
//                         margin-right: -24px;
//                         margin-left: -24px;
//                     }
                    
//                     .mat-dialog-actions {
//                         margin-right: 0 !important;
//                         margin-left: 0 !important;
//                     }
//                     .example-icon {
//                       padding: 0 14px;
//                     }
                    
//                     .example-spacer {
//                       flex: 1 1 auto;
//                     }
//                     ::ng-deep .no-line .mat-form-field-underline {
//                       display: none;
//                     }
                    
//                     </style>

//    `,
   
// })
// export class CompanyPopupComponent {

//   description:any;
//   company_country_id:any;
//   company_title:any;
//   short_name:any;
//   company_created_date:any;
//   company_activity:any;
//   company_juridical_form:any;
//   juridic:any
//   company_IF:any;
//   company_ICE:any;
//   company_TP:any;
//   company_RC:any;
//   company_CNSS:any;
//   companies:any=[];
//   cityOptions = [];
//   juridical_form = [
//     {value: '1', viewValue: 'SARL'},
//     {value: '2', viewValue: 'SA'},
//     {value: '3', viewValue: 'SNC'}
//   ];
  
//   constructor(
 
//     public companiesrestApi:CompaniesRestApiService,
//     public dialogRef: MatDialogRef<CompanyPopupComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {
//       if(data.id==null){
//          this.description='Nouvelle une compagnie'

//       }
//       else(this.description='Modifier votre compagnie')
//     }

//   DismissButton(): void {
//     this.dialogRef.close();
//     this.getCompanies()
//   }
//   getCompanies() {
//     return this.companiesrestApi.getCompany().subscribe((data: {}) => {
//       this.companies = data;
//       })
//     }
//   stateChanged(stateName: string) {
//       console.log(stateName);
//     }
// }

// @Component({
//   selector: 'snack-bar-component-example-snack',
//   template: `
//     <span _ngcontent-c3="" class="example-pizza-party">
//     Succès!!! 🎉
//     </span>`,
//   styles: [`.example-pizza-party { color: #0E9D58; }`],
//   })
//   export class SuccesSnackComponent {}