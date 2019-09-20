import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';
import { BalanceRestApiService } from '../../partials/content/widgets/shared/balance.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { TdLayoutManageListComponent } from '@covalent/core';
import { single, pie,monthgraphe, multi, tvamonth,times } from './data';
@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
  styleUrls: ['./component-2.component.css']
})
export class Component2Component implements OnInit {

  instance: string = 'hot';
  tab:any;
  buttonDisabled: boolean;
  mycountry_id:any
  myparam_company:any
  id:any
  id_balance=0
  balance_id=0
  exercise_id:any
  state:boolean
  view: any[] = [700, 400];
  dataset1 = 
  {
    id:'',
    exercise_id:'',
    balance_data:'',
  }
  dataset:any
  name = 'UI Platform';
  @ViewChild('manageList') manageList: TdLayoutManageListComponent;
    @ViewChild('dialogContent') template: TemplateRef<any>;
    dateFrom: Date = new Date(new Date().getTime() - (2 * 60 * 60 * 24 * 1000));
    dateTo: Date = new Date(new Date().getTime() - (1 * 60 * 60 * 24 * 1000));
    config = {
      width: '50%',
      height: '50%',
    };
  tvamonth:any[]
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
  
headers= ["COMPTE ","DESIGNATION","SOLDE ITINIAL-DEBIT","SOLDE INITIAL-CREDIT","MVT EXERCICE-DEBIT","MVT EXERCICE-CREDIT","SOLDE FINAL-DEBIT","SOLDE FINAL-CREDIT"]
  constructor(private spinner: NgxSpinnerService,
             public router: Router,
             public snackBar: MatSnackBar,
             public route:ActivatedRoute,
              private BalanceRestApiService:BalanceRestApiService,
              private hotRegisterer: HotTableRegisterer) {
                Object.assign(this, {pie, single,monthgraphe, multi, times,tvamonth})
               }
              
  ngOnInit() {
    this.myspinner()
    // this.getdata_balance()
    this.buttonDisabled = false;
  }
  ngAfterViewInit(){
    // this.getdata_balance()
  }
  myspinner(){
    this.spinner.show(),
    setTimeout(() => {
      this.spinner.hide();
    }, 1000)
  }
  table_tva(){
    this.router.navigate(['demo2/kt-jbtva-table'])
  }
  tableauliasse(){   
    //  kt-tableauliasse/:myparam_company/:id
    this.route.paramMap.subscribe(params => {
      this.myparam_company = params.get("myparam_company")
      this.exercise_id = params.get("id")
    })
    this.router.navigate(['/demo2/kt-tableauliasse/'+this.myparam_company+'/'+this.exercise_id+'/'])
  }
  savedata(){
   this.getdata_balance()
    const hotInstance = this.hotRegisterer.getInstance(this.instance);
        if (hotInstance){
          this.route.paramMap.subscribe(params => {
            this.myparam_company = params.get("myparam_company")
            this.exercise_id = params.get("id")
          })
          if (this.id_balance==0){
              this.tab.exercise_id=this.exercise_id
              this.tab.balance_data=JSON.stringify(hotInstance.getSourceData()),
              this.BalanceRestApiService.createTableData_balance(this.tab,this.myparam_company,this.exercise_id).subscribe((data: {}) => {
                this.myspinner()
                this.getdata_balance()
                this.succesnotif()
              })
          }
          else if (this.id_balance!==0){
            this.tab.map((t=>{
              this.route.paramMap.subscribe(params => {
                this.myparam_company = params.get("myparam_company")
                this.exercise_id = params.get("id")
              })
                    this.dataset1.id=t.id
                    this.dataset1.exercise_id=this.exercise_id
                    this.dataset1.balance_data=JSON.stringify(hotInstance.getSourceData()),
                    this.BalanceRestApiService.updateTableData_balance(this.dataset1,this.myparam_company,this.exercise_id,this.dataset1.id).subscribe((data: any) => {
                      this.dataset=JSON.parse(data.balance_data)
                      this.myspinner(),
                      this.getdata_balance()
                      this.succesnotif()
                  }) 
            }))
  
          }
        }
    }
    getdata_balance(){
      this.route.paramMap.subscribe(params => {
        this.myparam_company = params.get("myparam_company")
        this.exercise_id = params.get("id")
      })
        this.BalanceRestApiService.getTableData_balance(this.myparam_company,this.exercise_id).subscribe((tabledata: any) => {
        if (tabledata.id==0){
            this.tab=tabledata
        }
        else{
          tabledata.map((t=>{
            this.tab=tabledata
            this.dataset=JSON.parse(t.balance_data)
            this.id_balance=t.id
            console.log('get tabledata have id')
            console.log(this.tab)
          }))
        }
        })
    
  }
  resetdata() {
    this.getdata_balance()
    this.myspinner()
    this.route.paramMap.subscribe(params => {
      this.myparam_company = params.get("myparam_company")
      this.exercise_id = params.get("id")
    })
 
      this.tab.map((t=>{
        this.balance_id=t.id
      }))
        console.log(this.myparam_company+'-'+this.exercise_id+'-')
        this.BalanceRestApiService.deleteTableData_balance(this.myparam_company,this.exercise_id,this.balance_id).subscribe((data: {}) => {
        this.router.navigate(['/demo2/kt-balance/'+this.myparam_company+'/'+this.exercise_id+'/'])
        this.dataset=[]
        })
  
     
  //   if (hotInstance) {
  //     console.log('empty')
         
  //     this.tab.map((t=>{

  //     }))
  //     this.BalanceRestApiService.deleteTableData_balance(this.myparam_company,this.exercise_id,this.balance_id).subscribe((data: {}) => {
  //    })
  // }
  this.myspinner()
this.succesnotif()
  }
  succesnotif(){
    // this.snackBar.openFromComponent(balancesuccesnotif, {  
    //   duration: 2000,
    //   panelClass: ['blue-snackbar']
    //   });
  }
}
// @Component({
//   selector: 'snack-bar-component-example-snack',
//   template: `
//     <span _ngcontent-c3="" class="example-pizza-party">
//     Succès!!! 🎉
//     </span>`,
//   styles: [`.example-pizza-party { color: #0E9D58; }`],
//   })
//   export class balancesuccesnotif {}
