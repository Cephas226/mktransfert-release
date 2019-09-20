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
import {bilan_passif,tableau_6} from './report_data';
import { ReportService } from '../../partials/content/widgets/shared/reportdata.service';
import { NgModel } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';
export class Offer {
  public propertyA: string;
  public propertyB: string;
  public units: Unit[] = [];
}

export class Unit {
  constructor(
    public id: number,
    public name: string,
    public checked: boolean,
  ) {}

}
/**
 * @title Tab group with asynchronously loading tab contents
 */
@Component({
  selector: 'kt-tableauliasse',
  templateUrl: './tableauliasse.component.html',
  styleUrls: ['./tableauliasse.component.scss'],
  animations: [
    trigger('iconChange', [
      state('true',
        style({ transform: 'rotate( -90deg )' })
      ),
      state('false',
        style({ transform: 'rotate( 0deg )' })
      ),
      transition('* => *', animate('.25s'))
    ])
  ]
})
export class TableauliasseComponent implements OnInit {
  // id = 'my-custom-id';

  constructor(public FormsListRestApiService: FormsListRestApiService,
              public router: Router,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<exportliassecomponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public snackBar: MatSnackBar,
              private hotRegisterer: HotTableRegisterer,
              public loader: LoadingBarService,
              public ReportService: ReportService,
              public FormsDataRestApiService: FormsDataRestApiService,
              private spinner: NgxSpinnerService,
              public route: ActivatedRoute) {
                this.progressbar();


}
  isDisabled: boolean = true;
  sidenavWidth = 24;
  myValues = [
    'Actif','Passif','CPC'
  ];
  contenue = [];
  tablename: [];
  datset: any;
  actifvalue = [];
  tableau: any;
  text = [];
  tabl: any;
  tab_7: any;
  reportdata = [];
  shortnav = true;
  introJS = introJs();
  step = 0;
  dataset: any;
  panelOpenState: boolean = true;
  customCollapsedHeight: string = '60px';
  customExpandedHeight: string = '60px';

  instance: string = 'hot';
  @Input() sidenav;

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();
  tab_title = "BILAN(actif)";
  title_1 = [];
  myparam_company: string;
  balance_id: any;
  hotId = 'hot1';
  settingsObj = {
    colHeaders: true,
    rowHeaders: true,
  };
  tab: any;
  col_header: [];
  id_tableliasse: number;
  dataset1 =
  {
    exercises: 1,
    table_tax_returns: '',
    tax_return_data: '',
    balances: '',
  };

  table_tax_returns: any;
  tabledatainfo = [];
  status: any;
  emptytaxdata = [['','']];
  settings: {
    rowHeaders: true,
    colHeaders: true,
    licenseKey: 'non-commercial-and-evaluation',
  };
  cardColor = 'string';
  bandColor = 'string';
  textColor = 'string';
  emptyColor = 'string';
  exercise_id: any;
  formsdata = [];
  innerPadding = 'Number';
  animations = true;
  colorScheme = {
    domain: ['#A8385C', '#6788BF', '#ADCCED', '#A95963']
  };

  // line, area
  autoScale = true;

  // pie
  showFiller = false;
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  forms_short_title: any;
  // dataset:any
  dt;
    hotSettings: Handsontable.GridSettings = {
      startRows: 3,
      startCols: 3,
      width: 900,
      height: 700,
      colHeaders: true,
      minSpareRows: 1,
      rowHeaders: true,
      stretchH: 'all'
    };
  // tab_6: any;
  changeValueEvent() {
    // console.log("myValue:", this.myValues);
  }
tolaod() {

  this.contenue.push(

  );
}
  download() {
  }

  setStep(index: number) {
    this.step = index;
  }
  toggle() {
    this.shortnav = !this.shortnav;
    this.change.emit(this.shortnav);
  }
    ngOnInit() {
    this.myspinner();
     this.getdata_forms();
     this.forms_short_title;
     this.tab_title;
     this.col_header;


    }
test1() {
  // return bilan_actif;
}
test2() {
 return bilan_passif;
 }
 test4() {
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
progressbar() {
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
    this.myspinner();
    checked_Report.map((r => {
      this.route.paramMap.subscribe(params => {
        this.exercise_id = params.get('id');
        this.myparam_company = params.get('myparam_company');
      // tslint:disable-next-line: semicolon
      })
   if (r.checked == true) {
    this.reportdata.push({id: r.id});
   console.log(this.reportdata);
    this.ReportService.createTableReport(this.myparam_company,this.exercise_id,this.reportdata).subscribe((data => {
 this.tab_7 = JSON.parse(data.tab_7);
 console.log(this.tab_7[2][1]);
      }));
         pdfMake.vfs = pdfFonts.pdfMake.vfs;
          let dd = {
            content: [
              {
                text: [
                            {
                                text: 'Etats Financiers :  ', 
                                decoration: 'underline'
                            },
                            {
                                text: '',
                            },
                            {
                                text: 'Exercice du :     au : \n',
                                decoration: 'underline'
                            },
                            {
                                text: 'Tableau n°14',
                            },  
                    ]
                 },
          
             {  
              style: 'actif',
              table: { 
                widths: [480],
                body: [
                  [
                      {
                          text:'DETAIL DES POSTES DU C.P.C. ( CHARGES )',
                          alignment: 'center',
                          bold: true
                      }
                  ],
                ]
              }
            },
                {
                      
              style: 'actif',
              table: {
              widths: [33,260,80,80],
                body: [
                     [
                         {
                        bold: true,
                        text: 'Poste',
                        alignment: 'center'
                    },
                    {
                        bold: true,
                      text: 'CHARGES D\'EXPLOITATION',
                      alignment: 'center'
                    },
                    {
                                    bold: true,
                      text: 'MONTANT',
                      alignment: 'center'
                    },
                    {
                        bold: true,
                      text: 'EXERCICE PRECEDENT',
                      alignment: 'center'
                    },
                  ],
                
                   [
                      {
                         border: [true, true, false, false],
                         bold:true,
                      text: '611',
              
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Achats revendus de marchandises'
                    },
                    {
                        style: 'title',
                        bold:true,
                        border: [true, false, false, false],
                        text: ''
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: ''
                    },
                  
                  ],
                          [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Achats de marchandises'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[2][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[2][2]
                    }, 
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Variation des stocks de marchandises (+/-)'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[3][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[3][2]
                    },
                  
                  ],
                 
                  [     
                      {
                         border: [true, false, true, true],
                      text: '',
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, true, true, true],
                      text: 'Total'
                    },
                    {
                        style: 'title',
                                    border: [true, true, true, true],
                        text: this.tab_7[4][1]
                    },
                    {
                      style: 'title',
                      border: [true, true, true, true],
                      text: this.tab_7[4][2]
                    },
                  
                  ],
                   [
                      {
                         border: [true, true, false, false],
                         bold:true,
                      text: '612',
              
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                                bold:true,
                      text: 'Achats consommés de matière et de fourniture'
                    },
                    {
                        style: 'title',
                        bold:true,
                        border: [true, false, false, false],
                        text: ''
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: ''
                    },
                  
                  ],
                          [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Achats de matières premières'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[6][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[6][2]
                    }, 
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Variation des stocks de marchandises (+/-)'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[7][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[7][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Achats de matières et fournitures consommables et d\'emballages'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[8][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[8][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Variation des stocks de matières, fournitures et emballages (+/-)'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[9][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[9][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Achats non stockés de matières et de fournitures'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[10][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[10][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Achats de travaux, études et prestations de services'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[11][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[11][2]
                    },
                  
                  ],
                           
                  [     
                    //   {
                    //      border: [true, false, true, true],
                    //   text: '',
                    // },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, true, true, true],
                      text: 'Total'
                    },
                    {
                        style: 'title',
                                    border: [true, true, true, true],
                        text: this.tab_7[12][1]
                    },
                    {
                      style: 'title',
                      border: [true, true, true, true],
                      text: this.tab_7[12][2]
                    },
                  
                  ],
                   [
                      {
                         border: [true, true, false, false],
                         bold:true,
                      text: '613',  
              
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, false, false, false],
                      text: 'Autres charges externes'
                    },
                    {
                        style: 'title',
                        bold:true,
                        border: [true, false, false, false],
                        text: ''
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: ''
                    },
                  
                  ],
                          [     
                      {
                         border: [true, false, false, false],
                      text: '614',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Locations et charges locatives'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[14][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[14][2]
                    }, 
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Redevances de crédit-bail'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[15][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[15][2]
                    },
                  
                  ],
                      [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Entretien et réparations'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[16][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[16][2]
                    },
                  
                  ],
                   [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Primes d\'assurancess'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[17][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[17][2]
                    },
                  
                  ],
                    [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Rémunérations du personnel extérieur à l\'entreprises'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[18][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[18][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: '* Rémunérations d\'intermédiaires et honoraires',
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[19][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[19][2]
                    },
                  
                  ],
                    [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Redevances pour brevets, marques, droits...'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[20][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[20][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Transports'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[21][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[21][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Déplacements, missions et réceptions'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[22][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[22][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Reste du poste des autres charges externes'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[23][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[23][2]
                    },
                  
                  ],
                   
                  [     
                      {
                         border: [true, false, true, true],
                      text: '',
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, true, true, true],
                      text: 'Total'
                    },
                    {
                        style: 'title',
                                    border: [true, true, true, true],
                        text: this.tab_7[24][1]
                    },
                    {
                      style: 'title',
                      border: [true, true, true, true],
                      text: this.tab_7[24][2]
                    },
                  
                  ],
                   [
                      {
                         border: [true, true, false, false],
                         bold:true,
                      text: '617',
              
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, false, false, false],
                      text: 'Charges de personnel'
                    },
                    {
                        style: 'title',
                        bold:true,
                        border: [true, false, false, false],
               
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
        
                    },
                  
                  ],
                          [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Rémunération du personnel'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[26][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[26][2]
                    }, 
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Charges sociales'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[27][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[27][2]
                    }, 
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Reste du poste des charges de personnel'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[28][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[28][2]
                    },
                  
                  ],
                 
                  [     
                      {
                         border: [true, false, true, true],
                      text: '',
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, true, true, true],
                      text: 'Total'
                    },
                    {
                        style: 'title',
                                    border: [true, true, true, true],
                        text: this.tab_7[29][1]
                    },
                    {
                      style: 'title',
                      border: [true, true, true, true],
                      text: this.tab_7[29][2]
                    },
                  
                  ],
                   [
                      {
                         border: [true, true, false, false],
                         bold:true,
                      text: '618',
              
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Autres charges d\'exploitation'
                    },
                    {
                        style: 'title',
                        bold:true,
                        border: [true, false, false, false],
                        text: ''
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: ''
                    },
                  
                  ],
                          [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Jetons de présence'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[31][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[31][2]
                    }, 
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Pertes sur créances irrécouvrables'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[32][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[32][2]
                    },
                  
                  ],
                   [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Reste de poste des autres charges d\'exploitationes'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[33][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[33][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, true, true],
                      text: '',
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, true, true, true],
                      text: 'Total'
                    },
                    {
                        style: 'title',
                                    border: [true, true, true, true],
                        text: this.tab_7[34][1]
                    },
                    {
                      style: 'title',
                      border: [true, true, true, true],
                      text: this.tab_7[34][2]
                    },
                  
                  ],
                ]
              }
            },
                  {
                      
              style: 'actif',
              table: {
              widths: [33,260,80,80],
                body: [
                     [
                         {
                        bold: true,
                        text: 'Poste',
                        alignment: 'center'
                    },
                    {
                        bold: true,
                      text: 'CHARGES FINANCIERES',
                      alignment: 'center'
                    },
                    {
                                    bold: true,
                      text: 'MONTANT',
                      alignment: 'center'
                    },
                    {
                        bold: true,
                      text: 'EXERCICE PRECEDENT',
                      alignment: 'center'
                    },
                  ],
                
                   [
                      {
                         border: [true, true, false, false],
                         bold:true,
                      text: '638',
              
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, false, false, false],
                      text: 'Autres charges financières'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: ''
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: ''
                    },
                  
                  ],
                          [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Charges nettes sur cessions de titres et valeurs de placement'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[38][1]
                    },
                    {
                      style: 'title', 
                      border: [true, false, true, false],
                      text: this.tab_7[37][2]
                    }, 
                  
                  ],
                           [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Reste du poste des autres charges financières'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[38][1]
                    },
                    {
                      style: 'title', 
                      border: [true, false, true, false],
                      text: this.tab_7[38][2]
                    }, 
                  
                  ],
                      [     
                      {
                              border: [true, false, true, true],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, true, true, true],
                      text: 'Total'
                    },
                    {       
                        style: 'title',
                                  border: [true, true, true, true],
                        text: this.tab_7[39][1] 
                    },
                    {
                      style: 'title', 
                                      border: [true, true, true, true],
                      text: this.tab_7[39][2]
                    }, 
                  
                  ],
                     ]
              }
            },
                {
                      
              style: 'actif',
              table: {
              widths: [33,260,80,80],
                body: [
                     [
                         {
                        bold: true,
                        text: 'Poste',
                        alignment: 'center'
                    },
                    {
                        bold: true,
                      text: 'CHARGES NON COURANTES',
                      alignment: 'center'
                    },
                    {
                                    bold: true,
                      text: 'MONTANT',
                      alignment: 'center'
                    },
                    {
                        bold: true,
                      text: 'EXERCICE PRECEDENT',
                      alignment: 'center'
                    },
                  ],
                
                   [
                      {
                         border: [true, true, false, false],
                         bold:true,
                      text: '658',
              
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, false, false, false],
                      text: 'Autres charges non courantes'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: ''
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: ''
                    },
                  
                  ],
                          [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Pénalités sur marchés et dédits'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[42][1]
                    },
                    {
                      style: 'title', 
                      border: [true, false, true, false],
                      text: this.tab_7[42][2]
                    }, 
                  
                  ],
                           [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Rappels d\'impots (autres qu\'impots sur les résultats)'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[43][1]
                    },
                    {
                      style: 'title', 
                      border: [true, false, true, false],
                      text: this.tab_7[43][2]
                    }, 
                  
                  ],
                    [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Pénalités et amendes fiscales'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[44][1]
                    },
                    {
                      style: 'title', 
                      border: [true, false, true, false],
                      text: this.tab_7[44][2]
                    }, 
                  
                  ],
                    [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Créances devenues irrécouvrables'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[45][1]
                    },
                    {
                      style: 'title', 
                      border: [true, false, true, false],
                      text: this.tab_7[45][2]
                    }, 
                  
                  ],
                        [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Reste du poste des autres charges non courantes'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[46][1]
                    },
                    {
                      style: 'title', 
                      border: [true, false, true, false],
                      text: this.tab_7[46][2]
                    }, 
                  
                  ],
                      [     
                      {
                              border: [true, false, true, true],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, true, true, true],
                      text: 'Total'
                    },
                    {       
                        style: 'title',
                                  border: [true, true, true, true],
                        text: this.tab_7[47][1]
                    },
                    {
                      style: 'title', 
                                      border: [true, true, true, true],
                      text: this.tab_7[47][2],
                     pageBreak: 'after',
                    }, 
                  
                  ],
                     ]
              }
            },
                    {
                text: [
                            {
                     
                                text: 'Etats Financiers :  ', 
                                decoration: 'underline'
                            },
                            {
                                text: '',
                            },
                            {
                                text: 'Exercice du :     au : \n',
                                decoration: 'underline'
                            },
                            {
                                text: 'Tableau n°14',
                            },  
                    ]
                 },
          
             {  
              style: 'actif',
              table: { 
                widths: [480],
                body: [
                  [
                      {
                          text:'DETAIL DES POSTES DU C.P.C. ( PRODUITS )',
                          alignment: 'center',
                          bold: true
                      }
                  ],
                ]
              }
            },
                {
                      
              style: 'actif',
              table: {
              widths: [33,260,80,80],
                body: [
                     [
                         {
                        bold: true,
                        text: 'Poste',
                        alignment: 'center'
                    },
                    {
                        bold: true,
                      text: 'PRODUITS D\'EXPLOITATION',
                      alignment: 'center'
                    },
                    {
                                    bold: true,
                      text: 'MONTANT',
                      alignment: 'center'
                    },
                    {
                        bold: true,
                      text: 'EXERCICE PRECEDENT',
                      alignment: 'center'
                    },
                  ],
                
                   [
                      {
                         border: [true, true, false, false],
                         bold:true,
                      text: '711',
              
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Ventes de marchandises :'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: ''
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: ''
                    },
                  
                  ],
                          [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Ventes de marchandises au Maroc'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[50][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[50][2]
                    }, 
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Ventes de marchandises à l\'étranger'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[51][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[51][2]
                    },
                  
                  ],
                       [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Reste du poste des ventes de marchandises'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[52][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[52][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, true, true],
                      text: '',
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, true, true, true],
                      text: 'Total'
                    },
                    {
                        style: 'title',
                                    border: [true, true, true, true],
                        text: this.tab_7[53][1]
                    },
                    {
                      style: 'title',
                      border: [true, true, true, true],
                      text: this.tab_7[53][2]
                    },
                  
                  ],
                   [
                      {
                         border: [true, true, false, false],
                         bold:true,
                      text: '712',
              
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                                bold:true,
                      text: 'Ventes de biens et services produits :'
                    },
                    {
                        style: 'title',
                        bold:true,
                        border: [true, false, false, false],
                        text: ''
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: ''
                    },
                  
                  ],
                          [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Ventes de biens au Maroc'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[55][1] 
                    },
                    { 
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[55][2]
                    }, 
                  
                  ],
                  [        
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Ventes de biens à l\'etranger'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[56][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[56][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Ventes de services au Maroc'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[57][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[57][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Ventes de services à l\'etranger'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[58][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[58][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Redevances pour brevets, marques, droits, etc ...'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[59][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[59][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Reste du poste des ventes de biens et services'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[60][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[60][2]
                    },
                  
                  ],
                 
                  [     
                      {
                         border: [true, false, true, true],
                      text: '',
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, true, true, true],
                      text: 'Total'
                    },
                    {
                        style: 'title',
                                    border: [true, true, true, true],
                        text: this.tab_7[61][1]
                    },
                    {
                      style: 'title',
                      border: [true, true, true, true],
                      text: this.tab_7[61][2]
                    },
                  
                  ],
                   [
                      {
                         border: [true, true, false, false],
                         bold:true,
                      text: '713',  
              
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, false, false, false],
                      text: 'Variation des stocks de produits :'
                    },
                    {
                        style: 'title',
                        bold:true,
                        border: [true, false, false, false],
                        text: ''
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: ''
                    },
                  
                  ],
                          [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Variation des stocks des biens produits'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[63][1] 
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[63][2]
                    }, 
                  
                  ],
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Variation des stocks des services produits'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[64][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[64][2]
                    },
                  
                  ],
                      [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Variation des stocks des produits en cours'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[65][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[65][2]
                    },
                  
                  ],
             
                   
                  [     
                      {
                         border: [true, false, true, true],
                      text: '',
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, true, true, true],
                      text: 'Total'
                    },
                    {
                        style: 'title',
                                    border: [true, true, true, true],
                        text: this.tab_7[66][1]
                    },
                    {
                      style: 'title',
                      border: [true, true, true, true],
                      text: this.tab_7[66][2]
                    },
                  
                  ],
                     [
                      {
                         border: [true, true, false, false],
                         bold:true,
                      text: '718',  
              
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, false, false, false],
                      text: 'Autres produits d\'exploitation :'
                    },
                    {
                        style: 'title',
                        bold:true,
                        border: [true, false, false, false],
                        text: ''
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: ''
                    },
                  
                  ],
                          [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Jetons de présence reçus'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[68][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[68][2]
                    }, 
                  
                  ],
               
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Reste du poste (produits divers)'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[69][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[69][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, true, true],
                      text: '',
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, true, true, true],
                      text: 'Total'
                    },
                    {
                        style: 'title',
                                    border: [true, true, true, true],
                        text: this.tab_7[70][1]
                    },
                    {
                      style: 'title',
                      border: [true, true, true, true],
                      text: this.tab_7[70][2]
                    },
                  
                  ],
                               [
                      {
                         border: [true, true, false, false],
                         bold:true,
                      text: '719',  
              
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, false, false, false],
                      text: 'Reprises d\'exploitation - transferts de charges :'
                    },
                    {
                        style: 'title',
                        bold:true,
                        border: [true, false, false, false],
                        text: ''
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: ''
                    },
                  
                  ],
                          [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Reprises'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[72][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[72][2]
                    }, 
                  
                  ],
               
                  [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Transferts de charges'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[73][1]
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: this.tab_7[73][2]
                    },
                  
                  ],
                  [     
                      {
                         border: [true, false, true, true],
                      text: '',
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, true, true, true],
                      text: 'Total'
                    },
                    {
                        style: 'title',
                                    border: [true, true, true, true],
                        text: this.tab_7[74][1]
                    },
                    {
                      style: 'title',
                      border: [true, true, true, true],
                      text: this.tab_7[74][2]
                    },
                  
                  ],
                ]
              }
            },
                  {
                      
              style: 'actif',
              table: {
              widths: [33,260,80,80],
                body: [
                     [
                         {
                        bold: true,
                        text: 'Poste',
                        alignment: 'center'
                    },
                    {
                        bold: true,
                      text: 'PRODUITS FINANCIERS',
                      alignment: 'center'
                    },
                    {
                                    bold: true,
                      text: 'MONTANT',
                      alignment: 'center'
                    },
                    {
                        bold: true,
                      text: 'EXERCICE PRECEDENT',
                      alignment: 'center'
                    },
                  ],
                
                   [
                      {
                         
                         border: [true, true, false, false],
                         bold:true,
                      text: '738',
              
                    },
                    {
                                style: 'title',
                                bold:true,
                                border: [true, false, false, false],
                      text: 'Intérets et autres produits financiers :'
                    },
                    {
                        style: 'title',
                        border: [true, false, false, false],
                        text: ''
                    },
                    {
                      style: 'title',
                      border: [true, false, true, false],
                      text: ''
                    },
                  
                  ],
                          [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Intérets et produits assimilés'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[77][1]
                    },
                    {
                      style: 'title', 
                      border: [true, false, true, false],
                      text: this.tab_7[77][2]
                    }, 
                  
                  ],
                           [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Revenu des créances rattachées à des participations'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[78][1]
                    },
                    {
                      style: 'title', 
                      border: [true, false, true, false],
                      text: this.tab_7[78][2]
                    }, 
                  
                  ],
                               [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Produits nets sur cession de titres et valeurs de placement'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[79][1]
                    },
                    {
                      style: 'title', 
                      border: [true, false, true, false],
                      text: this.tab_7[79][2]
                    }, 
                  
                  ],
                                 [     
                      {
                         border: [true, false, false, false],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, false, false, false],
                      text: 'Reste du poste intérets et autres produits financiers'
                    },
                    {       
                        style: 'title',
                        border: [true, false, false, false],
                        text: this.tab_7[80][1] 
                    },
                    {
                      style: 'title', 
                      border: [true, false, true, false],
                      text: this.tab_7[80][2]
                    }, 
                  
                  ],
                      [     
                      {
                              border: [true, false, true, true],
                      text: '',
                      alignment: ''
                    },
                    {
                                style: 'title',
                                border: [true, true, true, true],
                      text: 'Total'
                    },
                    {       
                        style: 'title',
                                  border: [true, true, true, true],
                        text: this.tab_7[81][1],
                    },
                    {
                      style: 'title', 
                                      border: [true, true, true, true],
                      text: this.tab_7[81][2]
                    }, 
                  
                  ],
                     ]
              }
            },
            ],
            styles: {
              header: {
                  fontSize: 12,
                  bold: true,
                  margin: [0, 0, 0, 10]
                },
                subheader: {
                  fontSize: 10,
                  bold: true,
                  margin: [0, 5, 0, 5]
                },
                actif: {
                  margin: [0, 0, 0, 10]
                },
                tableHeader: {
                  bold: true,
                  fontSize: 8,
                  color: 'black'
                },
                title: {
                
                  fontSize: 8,
                  color: 'black',
                  
                  
                }
              
              },
              
              defaultStyle: {
              }
            
            
          };
          
        pdfMake.createPdf(dd).download();

   }
      }));
    });
    this.reportdata = [];

  }
  print() {

  }
getdata_forms() {
  this.route.paramMap.subscribe(params => {
    this.exercise_id = params.get('id');
  });
    this.FormsListRestApiService.getTablelist_forms(this.exercise_id).subscribe((formsdata: {}) => {
      // console.log(formsdata)
        this.formsdata.push(formsdata);
        this.formsdata.map((fdata => {
          this.forms_short_title = fdata.forms;
          this.balance_id = fdata.balance_id;
          console.log(fdata.balance_id);
        }));
    });
}
exportCSV() {
  this.hotRegisterer
    .getInstance(this.hotId)
    .getPlugin('exportFile')
    .downloadFile('csv', {
      filename: 'MyFile'
    });
}
balance() {
  this.route.paramMap.subscribe(params => {
    this.exercise_id = params.get('id');
    this.myparam_company = params.get('myparam_company');
  });
  this.router.navigate(['/demo2/kt-balance/' + this.myparam_company + '/' + this.exercise_id]);
}
succesnotif() {
  this.snackBar.openFromComponent(tableauliassesuccesnotif, {
    duration: 2000,
    panelClass: ['blue-snackbar']
    });
}
increase() {
  this.sidenavWidth = 24;
}

decrease() {
  this.sidenavWidth = 12;
}
myspinner() {
      this.spinner.show(),

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
}

resetdata() {
      this.myspinner();
      this.FormsDataRestApiService.deleteTableData_forms(this.id_tableliasse).subscribe(() => {
      this.dataset = [];
      });
this.myspinner();
this.succesnotif();
}
selectforms(form_short_title) {
this.route.paramMap.subscribe(params => {
  this.exercise_id = params.get('id');
  this.myparam_company = params.get('myparam_company');

});
this.router.navigate(['/demo2/kt-tableauliasse/' + this.myparam_company + '/' + this.exercise_id + '/' + form_short_title.id]);
  this.myspinner();
  this.getdata_forms();

    this.FormsDataRestApiService.getTableData_forms(this.exercise_id,this.balance_id,form_short_title.id).subscribe((tabledata: any) => {
      tabledata.tax_data.map((txd => {
        if (txd.id == 0) {
          this.status = 0;
          tabledata.col_headers.map((th => {
            this.table_tax_returns = th.table_tax_returns;
          }));
          // this.id_tableliasse=0
            this.hotSettings.startCols = form_short_title.number_of_column;
            this.tab_title = form_short_title.tab_title;
            this.hotSettings;
            this.dataset = [['','']];
            tabledata.col_headers.map((ch => {
            this.col_header = JSON.parse(ch.field_name);
            this.myspinner();
            }));
           console.log(this.dataset);
            this.dataset = this.emptytaxdata;
        } else {
          this.status = 1;
          tabledata.col_headers.map((th => {
            this.table_tax_returns = th.table_tax_returns;
          }));
          this.id_tableliasse = txd.id;
          this.hotSettings.startCols = form_short_title.number_of_column;
          this.hotSettings;
          this.tab_title = form_short_title.tab_title;
          tabledata.col_headers.map((ch => {
          this.col_header = JSON.parse(ch.field_name);
          }));
          this.dataset = JSON.parse(txd.tax_return_data);
        console.log(this.dataset);
          this.myspinner();

        }
          this.tabledatainfo = [];
          this.tabledatainfo.push({
            require_balance: form_short_title.require_balance,
            tabledata: tabledata
          });
      }));
      });
      this.myspinner();

      // # Test du voyant#


    }
    savedata() {
      this.getdata_forms();
      this.tabledatainfo.map((tinfo => {
        if (tinfo.require_balance == true) {
                tinfo.tabledata.tax_data.map((taxedata => {
                  if (taxedata.id == 0) {
                    const hotInstance = this.hotRegisterer.getInstance(this.instance);
                    this.route.paramMap.subscribe(params => {
                    this.myparam_company = params.get('myparam_company');
                    this.exercise_id = params.get('id');
                      });
                    this.dataset1.exercises = Number(this.exercise_id);
                    this.dataset1.balances = this.balance_id;
                    this.dataset1.table_tax_returns = this.table_tax_returns;
                    this.dataset1.tax_return_data = JSON.stringify(hotInstance.getSourceData()),
                    this.FormsDataRestApiService.createTableData_forms(this.exercise_id,this.balance_id,this.table_tax_returns,this.dataset1).subscribe(() => {
                         this.myspinner();
                         this.getdata_forms();
                    });
                    this.succesnotif();
                  } else if (taxedata.id != 0) {

                     const hotInstance = this.hotRegisterer.getInstance(this.instance);
                    this.route.paramMap.subscribe(params => {
                    this.myparam_company = params.get('myparam_company');
                    this.exercise_id = params.get('id');
                      });
                    this.dataset1.exercises = Number(this.exercise_id);
                    this.dataset1.table_tax_returns = this.table_tax_returns;
                    this.dataset1.tax_return_data = JSON.stringify(hotInstance.getSourceData());
                    this.dataset1.balances = this.balance_id;
                    this.FormsDataRestApiService.updateTableData_forms(this.id_tableliasse,this.dataset1).subscribe(() => {
                        this.myspinner();
                        this.getdata_forms();
                    });
                  } else if (tinfo.require_balance == false) {
                    if (taxedata.id == 0) {
                      const hotInstance = this.hotRegisterer.getInstance(this.instance);
                      this.route.paramMap.subscribe(params => {
                      this.myparam_company = params.get('myparam_company');
                      this.exercise_id = params.get('id');
                        });
                      // this.tab.exercise_id=this.exercise_id
                      // this.tab.balance_data=JSON.stringify(hotInstance.getSourceData()),
                      this.dataset1.exercises = Number(this.exercise_id);
                      this.dataset1.balances = this.balance_id;
                      this.dataset1.table_tax_returns = this.table_tax_returns;
                      this.dataset1.tax_return_data = JSON.stringify(hotInstance.getSourceData()),
                      this.FormsDataRestApiService.createTableData_forms_no_balance(this.exercise_id,this.table_tax_returns,this.dataset1).subscribe(() => {
                           this.myspinner();
                           this.getdata_forms();
                      });
                      this.succesnotif();
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
            }));
        }

      }));

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
  <mat-checkbox (change)="updateCheck()"
  class="example-margin"
  [(ngModel)]="selectAll">
Tout cocher
</mat-checkbox>
    </section>

    <div class="kt-separator kt-separator--dashed"></div>
    </mat-card-content>
    <div class="example-button-row">
<button mat-raised-button  (click)="onNoClick()">Annulez</button>
<button mat-raised-button color="primary" [mat-dialog-close]="model.units"
type="submit"
 cdkFocusInitial>
    <i class="material-icons">import_export</i>
  PDF</button>

  <button mat-raised-button color="warn" [mat-dialog-close]="model.units"
type="submit"
 cdkFocusInitial>
    <i class="material-icons">import_export</i>
  EXCEL</button>

  <button mat-raised-button color="accent" [mat-dialog-close]="model.units"
  type="submit"
   cdkFocusInitial>
      <i class="material-icons">import_export</i>
    XML</button>
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
    constructor(
      public dialogRef: MatDialogRef<exportliassecomponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

        }
    myValues = [
      'Actif','Passif','CPC'
    ];
    selectAll = false;
    model: Offer;

    labelPosition = 'after';
    disabled = false;
    changeValueEvent() {
      // console.log("myValue:", this.myValues);
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
    this.model = new Offer;
    this.model.units.push(new Unit(1,'Bilan (Actif)', false));
    this.model.units.push(new Unit(2,'Bilan (Passif)', false));
    this.model.units.push(new Unit(3,'CPC', false));
    this.model.units.push(new Unit(6,'ESG', false));
    this.model.units.push(new Unit(7,'DETAIL DES POSTES DU C.P.C.', false));
    this.model.units.push(new Unit(13,'TVA', false));
    this.model.units.push(new Unit(17,'Plus-Values', false));
  }
  updateCheck() {
    console.log(this.selectAll);
    if (this.selectAll === true) {
      this.model.units.map((pizza) => {
        pizza.checked = true;
      });

    } else {
      this.model.units.map((pizza) => {
        pizza.checked = false;
      });
    }
  }
  }

