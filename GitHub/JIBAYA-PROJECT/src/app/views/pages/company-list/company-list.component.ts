import {Component, Inject, OnInit,AfterViewInit, ɵConsole} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CompaniesRestApiService } from '../../partials/content/widgets/shared/companies.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FileService } from '../../partials/content/widgets/shared/exportserv.service';
 

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
  providers: [DatePipe],
	selector: 'kt-company-list',
	templateUrl: './company-list.component.html',
	styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent  {
  
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
    public FileService:FileService,
private datePipe: DatePipe,
public snackBar: MatSnackBar,private modalService: NgbModal,
public router: Router,public dialog: MatDialog,public companiesrestApi:CompaniesRestApiService) {

}
modules(id) {
    
  this.router.navigate(['/demo2/kt-mesmodules/'+id]);
  console.log(id)
}

CreateCompanyButton(event): void {
  const dialogRef = this.dialog.open(CompanyPopupComponent, {
    data: {
      company_country_id:'',
      company_title:'',
      short_name:'',
      company_created_date:'',
      company_activity:'', 
      company_juridical_form:'',
      company_IF:'',
      company_ICE:'',
      company_TP:'',
      company_RC:'',
      company_CNSS:'',
         }
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result){
      console.log(result.company_created_date)
      result.company_created_date = this.datePipe.transform(result.company_created_date , 'yyyy-MM-dd');
      console.log(result.company_created_date)
      console.log(result)
      this.companiesrestApi.createCompagnie(result).subscribe((data: {}) => {
        this.companies.push(data)
        this.reset()
        dialogRef.close()
        this.router.navigate(['/demo2/kt-company-list'])
        this.getCompanies() 
      }) 
      this.snackBar.openFromComponent(SuccesSnackComponent, {  
        duration: 2000,
        panelClass: ['blue-snackbar']
        });
    }
    else( console.log('Nothing to do'))

  });
  
}
reset (){
  this.company_country_id=''
  this.company_title=''
  this.short_name=''
  this.company_created_date=''
  this.company_activity=''
  this.juridical_form=null
  this.company_IF=''
  this.company_ICE=''
  this.company_TP=''
  this.company_RC=''
  this.company_CNSS=''
}
download() {
  this.FileService.downloadFile().subscribe(response => {
    //let blob:any = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
    //const url= window.URL.createObjectURL(blob);
    //window.open(url);
    window.location.href = response.url;
    //fileSaver.saveAs(blob, 'employees.json');
  }), error => console.log('Error downloading the file'),
               () => console.info('File downloaded successfully');
}
UpdateCompanyButton(companie): void {
//   companie.company_juridical_form
//  this.cityOptions = this.juridical_form.filter(city => city.value ==   companie.company_juridical_form);
//  console.log(this.cityOptions)
//  this.cityOptions.map((t=>{
//    console.log(t.viewValue)
//    this.selectedValue=t.viewValue
//  }))
  const dialogRef = this.dialog.open(CompanyPopupComponent, {
    data: {
      company_country_id:companie.company_country_id,
      company_title: companie.company_title,
      short_name: companie.short_name, 
      company_created_date:new Date(companie.company_created_date),
      company_activity: companie.company_activity, 
      company_juridical_form:companie.company_juridical_form,
      company_IF:companie.company_IF, 
      company_ICE:companie.company_ICE,
      company_TP:companie.company_TP, 
      company_RC:companie.company_RC,
      company_CNSS:companie.company_CNSS,
      
    }
  });
  dialogRef.afterClosed().subscribe(result=> {
   if(result==undefined){
    console.log('nothing')
   }
   else{
    result.company_created_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    console.log(result.company_created_date)
      this.companiesrestApi.updateCompany(companie.id, result).subscribe(res => {
      this.companies.push(res)
      this.reset()
      this.router.navigate(['/demo2/kt-company-list'])
      this.getCompanies() 
      })
      result.company_created_date =new Date(companie.company_created_date),
      this.snackBar.openFromComponent(SuccesSnackComponent, {  
        duration: 2000,
        panelClass: ['blue-snackbar']
      });
   }

  });
}
ngOnInit() {
  this.getCompanies()
}

getCompanies() {
  return this.companiesrestApi.getCompany().subscribe((data: {}) => {
    this.companies = data;
    console.log(data)
    })

  }
  DeleteConfirm(id){
    this.companiesrestApi.deleteCompagnies(id).subscribe(data => {
    this.modalService.dismissAll();
     this.router.navigate(['/demo2/kt-company-list'])
     this.reset()
     this.getCompanies()
      })
    this.snackBar.openFromComponent(SuccesSnackComponent, {  
    duration: 2000,
    panelClass: ['blue-snackbar']
    });
  this.getCompanies()
}
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
@Component({

  selector: 'company-popup',
  template: `
    
  
  
  <form class="example-form"  #companypopup="ngForm">
  <mat-toolbar color="primary">
  <mat-toolbar-row>
  <h4 class="mat-dialog-title"> 
  <i class="material-icons orange600">
      account_balance
  </i>
  {{description}}
</h4>
  </mat-toolbar-row>
</mat-toolbar>
      <div style='margin-left:2%;margin-top:5%'>
      <table class="example-full-width" cellspacing="0">
     
      <tr>
      <td><mat-form-field class="example-full-width">
      <input matInput placeholder="id pays" [(ngModel)]="data.company_country_id"
      name="company_country_id"
      />
    </mat-form-field></td>
      <td><mat-form-field class="example-full-width">
        <input matInput placeholder="Raison sociale" [(ngModel)]="data.company_title"
        name="raison" required
        />
      </mat-form-field></td>
      <td><mat-form-field class="example-full-width">
      <input matInput 
      name="short" required
      placeholder="Nom Abrégé" [(ngModel)]="data.short_name"/>
      </mat-form-field></td>
      </tr></table>
      <table class="example-full-width" cellspacing="0">
      <tr>
                <td>
                  <mat-form-field class="example-full-width">
                  <input matInput name="date_creation"
                  [matDatepicker]="picker" placeholder="Date de creation" required
                  [(ngModel)]="data.company_created_date"/>
                    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                    <mat-datepicker #picker></mat-datepicker>
                  </mat-form-field>
                </td>
                <td>
                  <mat-form-field class="example-full-width">
                  <textarea name="creation_Date" 
                  matInput placeholder="Secteur d’activité" required
                  [(ngModel)]="data.company_activity"></textarea>
                  </mat-form-field>
              </td>
           
              <mat-form-field>
                        <mat-select
                        name="juridical_form" [(ngModel)]="data.company_juridical_form" required>
                        <mat-option *ngFor="let juridical of juridical_form" [value]="juridical.value">
                        {{juridical.viewValue}}
                      </mat-option>
                      </mat-select>
            </mat-form-field>
      </tr>
      </table>
      
        <table class="example-full-width" cellspacing="0"><tr>
          <td><mat-form-field class="example-full-width">
          <input matInput #IF maxlength="8" name="postalCode" placeholder="IF" required
          [(ngModel)]="data.company_IF"/>
            <mat-hint align="end">{{IF.value.length}} / 8</mat-hint>
          </mat-form-field></td>
          <td><mat-form-field class="example-full-width">
          <input matInput #ICE maxlength="15"name="ice" placeholder="ICE" required
          [(ngModel)]="data.company_ICE"/>
            <mat-hint align="end">{{ICE.value.length}} / 15</mat-hint>
          </mat-form-field></td>
        </tr>
        </table>
        <table class="example-full-width" cellspacing="0"><tr>
          <td><mat-form-field class="example-full-width">
          <input matInput #TP maxlength="8" placeholder="TP" name="TP" required
          [(ngModel)]="data.company_TP"/>
            <mat-hint align="end">{{TP.value.length}} / 8</mat-hint>
          </mat-form-field></td>
          <td><mat-form-field class="example-full-width">
            <input matInput #RC maxlength="8" name="RC" placeholder="RC" required
            [(ngModel)]="data.company_RC"/>
            <mat-hint align="end">{{RC.value.length}} / 8</mat-hint>
          </mat-form-field></td>
          <td><mat-form-field class="example-full-width">
          <input matInput #CNSS maxlength="8" name="cnss" placeholder="CNSS" required
          [(ngModel)]="data.company_CNSS"/>
            <mat-hint align="end">{{CNSS.value.length}} / 8</mat-hint>
          </mat-form-field></td>

        </tr>
        <tr>
        <td><mat-form-field class="no-line">
        <input matInput  [(ngModel)]="data.id" 
        name="id" [hidden]="true"/>
      </mat-form-field></td>
        </tr>
    
        </table>
        <div class="example-button-row" style='margin-left:40%;margin-top:5%'>
          <button mat-raised-button (click)="DismissButton()">Annulez</button>
            <button mat-raised-button color="primary" type="submit" [disabled]="companypopup.invalid"
                [mat-dialog-close]="data" cdkFocusInitial>
                <i class="material-icons">save</i>
                Sauvegardez
            </button>
 
            
        </div>
      </div>

</form>
                    <style>
                      .example-form {
               
                      margin-bottom: 10%
                      }
                      .material-icons.orange600 { color: #FB8C00; }
                      .example-full-width {
                      width: 100%;
                      }
                      td {
                      padding-right:30px;
                      }
                      .mat-dialog-container {
                        padding-top: 0 !important;
                    }
                    
                    dialog-overview-example-dialog.ng-star-inserted > div {
                        margin-right: -24px;
                        margin-left: -24px;
                    }
                    
                    .mat-dialog-actions {
                        margin-right: 0 !important;
                        margin-left: 0 !important;
                    }
                    .example-icon {
                      padding: 0 14px;
                    }
                    
                    .example-spacer {
                      flex: 1 1 auto;
                    }
                    ::ng-deep .no-line .mat-form-field-underline {
                      display: none;
                    }
                    
                    </style>

   `,
   
})
export class CompanyPopupComponent {

  description:any;
  company_country_id:any;
  company_title:any;
  short_name:any;
  company_created_date:any;
  company_activity:any;
  company_juridical_form:any;
  juridic:any
  company_IF:any;
  company_ICE:any;
  company_TP:any;
  company_RC:any;
  company_CNSS:any;
  companies:any=[];
  cityOptions = [];
  juridical_form = [
    {value: '1', viewValue: 'SARL'},
    {value: '2', viewValue: 'SA'},
    {value: '3', viewValue: 'SNC'}
  ];
  
  constructor(
 
    public companiesrestApi:CompaniesRestApiService,
    public dialogRef: MatDialogRef<CompanyPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
   console.log(data)
      if(data.company_country_id){
        
         this.description='Modifier votre compagnie'
      }
      else( this.description='Nouvelle une compagnie')
    }

  DismissButton(): void {
    this.dialogRef.close();
    this.getCompanies()
  }
  getCompanies() {
    return this.companiesrestApi.getCompany().subscribe((data: {}) => {
      this.companies = data;
      })
    }
  stateChanged(stateName: string) {
      console.log(stateName);
    }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `
    <span _ngcontent-c3="" class="example-pizza-party">
    Succès!!! 🎉
    </span>`,
  styles: [`.example-pizza-party { color: #0E9D58; }`],
  })
  export class SuccesSnackComponent {}

  
  