import {Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
// import Handsontable from 'handsontable';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd, NavigationCancel } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsListRestApiService } from '../../partials/content/widgets/shared/forms_list.service';
import { FormsDataRestApiService } from '../../partials/content/widgets/shared/forms_data.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { HotTableRegisterer } from '@handsontable/angular';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import * as introJs from 'intro.js/intro.js';
import Handsontable from 'handsontable';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {bilan_passif,bilan_actif,tableau_6} from './report_data';
import { ReportService } from '../../partials/content/widgets/shared/reportdata.service';

export class Offer {
  public propertyA: string;
  public propertyB: string;
  public units: Unit[] = [];
}

export class Unit {    
  
  constructor(
    public id: Number,
    public name: string,
    public checked: boolean,
  ) {}

}
/**
 * @title Tab group with asynchronously loading tab contents
 */
@Component({
  selector: 'kt-parametr_tableauliasse',
  templateUrl: './parameters_tableauliasse.component.html',
  styleUrls: ['./parameters_tableauliasse.component.scss'],
})
export class ParametreTableauliasseComponent implements OnInit {
  isDisabled: boolean = true;
  sidenavWidth=24;
  myValues=[
    'Actif','Passif','CPC'
  ]
  contenue=[];
  tablename: [];
  datset: any;
  actifvalue=[];
  tableau: any;
  text= [];
  tabl:any;
  tab_6:any;
  reportdata=[];
  // tab_6: any;
  changeValueEvent() {
    // console.log("myValue:", this.myValues);
  }
tolaod(){

  this.contenue.push(
   
  )
}
  download(){
  }
  shortnav = true;
  introJS = introJs();
  step = 0;
  dataset:any;

  setStep(index: number) {
    this.step = index;
  }
  panelOpenState: boolean = true;
  customCollapsedHeight: string = '60px';
  customExpandedHeight: string = '60px';

  instance: string = 'hot';
  @Input() sidenav;
  
  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();
  tab_title="BILAN(actif)";
  title_1=[]
  myparam_company: string;
  balance_id: any;
  hotId = 'hot1';
  settingsObj = {
    colHeaders: true,
    rowHeaders: true,
  }
  tab: any;
  col_header:[];
  id_tableliasse: number;
  dataset1 = 
  {
    exercises:1,
    table_tax_returns:'',
    tax_return_data:'',
    balances:'',
  }
  
  table_tax_returns: any;
  tabledatainfo=[];
  status:boolean=true;
  toggle(){
    this.shortnav = !this.shortnav;
    this.change.emit(this.shortnav);
  }
  emptytaxdata = [['','']];
  settings: {
    rowHeaders: true,
    colHeaders: true,
    licenseKey: "non-commercial-and-evaluation",
  }
  cardColor='string';
  bandColor='string';
  textColor='string';
  emptyColor='string';
  exercise_id:any;
  formsdata=[];
  innerPadding='Number';
  animations=true;
  colorScheme = {
    domain: ['#A8385C', '#6788BF', '#ADCCED', '#A95963']
  };

  // line, area
  autoScale = true;

  //pie
  showFiller = false;
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  forms_short_title:any
  // dataset:any
  dt
    ngOnInit(){
      this.status
    this.myspinner()
     this.getdata_forms()
     this.forms_short_title
     this.tab_title
     this.col_header
   
      
    }
    hotSettings: Handsontable.GridSettings = {
      startRows: 2,
      startCols: 2,
      width: 900,
      height: 700,
      colHeaders: true,
      minSpareRows:1,
      rowHeaders:true,
      stretchH: 'all'
    };
  // id = 'my-custom-id';
  
  constructor(public FormsListRestApiService:FormsListRestApiService,
              public router: Router,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<exportliassecomponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public snackBar: MatSnackBar,
              private hotRegisterer: HotTableRegisterer,
              public loader: LoadingBarService,
              public ReportService:ReportService,
              public FormsDataRestApiService:FormsDataRestApiService,
              private spinner: NgxSpinnerService,  
              public route:ActivatedRoute) {
                this.progressbar()
                 
                
}
test1 (){
  return bilan_actif
}
test2 (){
 return bilan_passif
 }
 test4(){
//  test.map((t=>{
 
//     t.table.body.push( [
//       {
//         style: 'title',
//         border: [true, false, false, true],
//         text: 'test'
//       },
					
//     ],)
 
//  }))
//  console.log(test)
 }
progressbar(){
  // page progress bar percentage
  this.router.events.subscribe(event => {
    if (event instanceof NavigationStart) {
      // set page progress bar loading to start on NavigationStart event router
      this.loader.start();
    }
    if (event instanceof RouteConfigLoadStart) {
      this.loader.increment(35);
    }
    if (event instanceof RouteConfigLoadEnd) {
      this.loader.increment(75);
    }
    if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
      // set page progress bar loading to end on NavigationEnd event router
      this.loader.complete();
    }
  });
}
export(): void {
  let dialogRef = this.dialog.open(exportliassecomponent, {
  });

  dialogRef.afterClosed().subscribe(checked_Report => {
    this.myspinner()
    checked_Report.map((r=>{
      this.route.paramMap.subscribe(params => {
        this.exercise_id = params.get("id")
        this.myparam_company = params.get("myparam_company")
      })
   if (r.checked==true){
    this.reportdata.push({id:r.id})
    this.print()
   }
      }))
      
      this.reportdata=[]
    });
  }
  print(){
  }
getdata_forms(){
  this.route.paramMap.subscribe(params => {
    this.exercise_id = params.get("id")
  })
    this.FormsListRestApiService.getTablelist_forms(1).subscribe((formsdata: {}) => {
        this.formsdata.push(formsdata)
        this.formsdata.map((fdata=>{
          this.forms_short_title=fdata.forms
          this.balance_id=fdata.balance_id
        }))
    })
}
exportCSV() {
  this.hotRegisterer
    .getInstance(this.hotId)
    .getPlugin('exportFile')
    .downloadFile('csv', {
      filename: 'MyFile'
    });
}
balance(){
  this.route.paramMap.subscribe(params => {
    this.exercise_id = params.get("id")
    this.myparam_company = params.get("myparam_company")
  })
  this.router.navigate(['/demo2/kt-balance/'+this.myparam_company+'/'+this.exercise_id])
}
succesnotif(){
  this.snackBar.openFromComponent(tableauliassesuccesnotif, {  
    duration: 2000,
    panelClass: ['blue-snackbar']
    });
}
increase(){
  this.sidenavWidth =2;
}

decrease(){
  this.sidenavWidth = 12;
}
myspinner(){
      this.spinner.show(),

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000)
}

resetdata() {
      this.myspinner()
      this.FormsDataRestApiService.deleteTableData_forms(this.id_tableliasse).subscribe(() => {
      this.dataset=[]
      })
this.myspinner()
this.succesnotif()
}
selectforms(form_short_title){
this.route.paramMap.subscribe(params => {
  this.exercise_id = params.get("id")
  this.myparam_company = params.get("myparam_company")
 
})
//this.router.navigate(['/demo2/kt-tableauliasse/'+1+'/'+1+'/'+form_short_title.id])
if (form_short_title.id==0){
    this.status=false
}
else {
  this.status=true
}
  this.myspinner()
  this.getdata_forms()
    this.FormsDataRestApiService.getTableData_forms(1,this.balance_id,form_short_title.id).subscribe((tabledata: any) => {
      tabledata.tax_data.map((txd=>{
        if(txd.id==0){
          tabledata.col_headers.map((th=>{
            this.table_tax_returns=th.table_tax_returns
          }))
          // this.id_tableliasse=0
            this.hotSettings.startCols=form_short_title.number_of_column
            this.tab_title=form_short_title.tab_title
            this.hotSettings
            this.dataset=[['','']]
            tabledata.col_headers.map((ch=>{
            this.col_header=JSON.parse(ch.field_name)
            this.myspinner()
            }))
            console.log(this.dataset)
            this.dataset=this.emptytaxdata
        }
        else {
          tabledata.col_headers.map((th=>{
            this.table_tax_returns=th.table_tax_returns
          }))
          this.id_tableliasse=txd.id
          this.hotSettings.startCols=form_short_title.number_of_column
          this.hotSettings
          this.tab_title=form_short_title.tab_title
          tabledata.col_headers.map((ch=>{
          this.col_header=JSON.parse(ch.field_name)
          }))
          this.dataset=JSON.parse(txd.tax_return_data)
          console.log(this.dataset)
          this.myspinner()
   
        }
          this.tabledatainfo=[]
          this.tabledatainfo.push({
            require_balance:form_short_title.require_balance,
            tabledata:tabledata
          })
      }))
      })
      this.myspinner()
    }
    savedata(){
      this.getdata_forms()
      this.tabledatainfo.map((tinfo=>{
        if (tinfo.require_balance==true){
                tinfo.tabledata.tax_data.map((taxedata=>{
                  if (taxedata.id==0){
                    const hotInstance = this.hotRegisterer.getInstance(this.instance);
                    this.route.paramMap.subscribe(params => {
                    this.myparam_company = params.get("myparam_company")
                    this.exercise_id = params.get("id")
                      })
                    this.dataset1.exercises=Number(1)
                    this.dataset1.balances=this.balance_id
                    this.dataset1.table_tax_returns= this.table_tax_returns
                    this.dataset1.tax_return_data=JSON.stringify(hotInstance.getSourceData()),
                    this.FormsDataRestApiService.createTableData_forms(1,this.balance_id,this.table_tax_returns,this.dataset1).subscribe(() => {
                         this.myspinner()
                         this.getdata_forms()
                    })
                    this.succesnotif()
                  }
                  else if (taxedata.id!=0){

                     const hotInstance = this.hotRegisterer.getInstance(this.instance);
                    this.route.paramMap.subscribe(params => {
                    this.myparam_company = params.get("myparam_company")
                    this.exercise_id = params.get("id")
                      })
                    this.dataset1.exercises=Number(1)
                    this.dataset1.table_tax_returns= this.table_tax_returns
                    this.dataset1.tax_return_data=JSON.stringify(hotInstance.getSourceData())
                    this.dataset1.balances=this.balance_id
                    this.FormsDataRestApiService.updateTableData_forms(this.id_tableliasse,this.dataset1).subscribe(() => {
                        this.myspinner()
                        this.getdata_forms()
                    })
                  }

                  else if (tinfo.require_balance==false) {
                    if (taxedata.id==0){
                      const hotInstance = this.hotRegisterer.getInstance(this.instance);
                      this.route.paramMap.subscribe(params => {
                      this.myparam_company = params.get("myparam_company")
                      this.exercise_id = params.get("id")
                        })
                      // this.tab.exercise_id=this.exercise_id
                      // this.tab.balance_data=JSON.stringify(hotInstance.getSourceData()),
                      this.dataset1.exercises=Number(1)
                      this.dataset1.balances=this.balance_id
                      this.dataset1.table_tax_returns= this.table_tax_returns
                      this.dataset1.tax_return_data=JSON.stringify(hotInstance.getSourceData()),
                      this.FormsDataRestApiService.createTableData_forms_no_balance(1,this.table_tax_returns,this.dataset1).subscribe(() => {
                           this.myspinner()
                           this.getdata_forms()
                      })
                      this.succesnotif()
                    }
                    // else if (taxedata.id!=0){
          
                    //    const hotInstance = this.hotRegisterer.getInstance(this.instance);
                    //   this.route.paramMap.subscribe(params => {
                    //   this.myparam_company = params.get("myparam_company")
                    //   this.exercise_id = params.get("id")
                    //     })
                    //   this.dataset1.exercises=Number(this.exercise_id)
                    //   this.dataset1.table_tax_returns= this.table_tax_returns
                    //   this.dataset1.tax_return_data=JSON.stringify(hotInstance.getSourceData())
                    //   this.dataset1.balances=this.balance_id
                    //   this.FormsDataRestApiService.updateTableData_forms(this.id_tableliasse,this.dataset1).subscribe(() => {
                    //       this.myspinner()
                    //       this.getdata_forms()
                    //   })
                    //   console.log('id!=0+no')
                    // }
                  }
            }))
        }

      }))

      // this.forms_short_title.map((f=>{
      //   if (f.require_balance==true){
      //   }
      //   //No BalanceID
      //   else if (f.require_balance==false) {
      //       this.route.paramMap.subscribe(params => {
      //         this.myparam_company = params.get("myparam_company")
      //         this.exercise_id = params.get("id")
      //       })

            
      //   }
      // }))
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
  export class tableauliassesuccesnotif {}

  @Component({
    selector: 'exportliassecomponent',
    template: `
      
    <mat-card>
    <mat-card-content>
      <mat-toolbar color="primary">
      <mat-toolbar-row>
      <h4 class="mat-dialog-title"> 
      <i class="material-icons orange600">
          import_export
      </i>
      Exportez vos Rapports
    </h4>
      </mat-toolbar-row>
    </mat-toolbar>
    <section class="example-section">
      <div *ngFor="let unit of model.units; let i=index">
    <mat-checkbox class="example-margin"
      [(ngModel)]="model.units[i].checked"
      id="units[{{i}}]" 
      name="units[{{i}}]"
    >
        {{ unit.name }}
    </mat-checkbox>  
    
  </div>
    </section>
    
    <div class="kt-separator kt-separator--dashed"></div>
    </mat-card-content>
    <div class="button-row">
<button mat-raised-button  (click)="onNoClick()">Annulez</button>
<button mat-raised-button color="primary" [mat-dialog-close]="model.units"
type="submit"  
 cdkFocusInitial>
    <i class="material-icons">save</i>
  Sauvegardez</button>
</div>
  </mat-card>
  
  
  
  
  <style>
  .example-h2 {
    margin: 10px;
  }
  
  .example-section {
    display: flex;
    align-content: center;
    align-items: center;
    height: 60px;
  }
  
  .example-margin {
    margin: 0 10px;
  }
  
  
  </style>
    `
  })
 
  export class exportliassecomponent {
    myValues=[
      'Actif','Passif','CPC'
    ]
    
    model: Offer;
    changeValueEvent() {
      // console.log("myValue:", this.myValues);
    }
   
    labelPosition = 'after';
    disabled = false;
    constructor(
      public dialogRef: MatDialogRef<exportliassecomponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { 
          
        }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
    this.model = new Offer;
    this.model.units.push(new Unit(1,"Bilan (Actif)", false));
    this.model.units.push(new Unit(2,"Bilan (Passif)", false));
    this.model.units.push(new Unit(3,"CPC", false));
    this.model.units.push(new Unit(4,"ESG", false));
  }
  }