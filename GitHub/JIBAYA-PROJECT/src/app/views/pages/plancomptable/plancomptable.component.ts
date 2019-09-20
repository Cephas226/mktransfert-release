import { Component, OnInit, AfterViewInit } from '@angular/core';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';
import { TableauliasseRestApiService } from '../../partials/content/widgets/shared/tableauliasse.service';
import { TableauData } from '../../partials/content/widgets/shared/tableauliasse.model';
import { Router, ActivatedRoute, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationCancel, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { MatSnackBar } from '@angular/material';
import { LoadingBarService } from '@ngx-loading-bar/core';
@Component({
  selector: 'kt-plancomptable',
  templateUrl: './plancomptable.component.html',
  styleUrls: ['./plancomptable.component.scss']
})

export class PlancomptableComponent implements OnInit {
    country_id:string
    step = 0;
  dataset:any

  setStep(index: number) {
    this.step = index;
  }
  instance: string = 'hot';
  panelOpenState: boolean = true;
  customCollapsedHeight: string = '160px';
  customExpandedHeight: string = '160px';
    account_Root:string
    isDisabled: boolean = true;
    sidenavWidth = 5;
    show: boolean = true;
    tab1=[];
    mycountry_id:any
    id_plancomptable=0
    dataset_vide= []
    dataset1 = 
     {
       id:'',
      country_id:'',
      account_Root:'',
      account_type:'',
     }
    
    tablerow;
    tablecol;
    hotSettings: Handsontable.GridSettings = {
      startRows: 2,
      startCols: 2,
      width: 500,
      height: 500,
      colHeaders: true,
      minSpareRows:1,
      stretchH: 'all'
    };
    // hotSettings: Handsontable.GridSettings = {
    //   startRows: 5,
    //   startCols: 5,
    //   minSpareRows:1,
    //   rowHeaders:true,
    //   outsideClickDeselects:true,
    //   colHeaders: true,
    // };
  clearSelection() {
    const hotInstance = this.hotRegisterer.getInstance(this.instance);
    if (hotInstance) {
      hotInstance.emptySelectedCells();
    }
  } 
    showFiller = false;
    tab:any
  	languages= [
		{
      country_id: 1,
      country_name:'France',
			flag: './assets/media/flags/012-uk.svg'
		},
		{
      country_id: 2,
      country_name:'Burkina',
			flag: './assets/media/flags/015-china.svg'
		},
		{
      country_id: 3,
      country_name:'Maroc',
			flag: './assets/media/flags/016-spain.svg'
		},
		{
      country_id: 4,
      country_name:'Cote ivoire',
			flag: './assets/media/flags/014-japan.svg'
		},
		// {
    //   country_id: 5,
		// 	flag: './assets/media/flags/017-germany.svg'
		// },
		// {
    //   country_id: 6,
		// 	flag: './assets/media/flags/019-france.svg'
		// },
	];

  // increase(){
  //   this.sidenavWidth = 15;
  //  // console.log("increase sidenav width");
  // }
  // decrease(){
  //   this.sidenavWidth = 4;
  //  // console.log("decrease sidenav width");
  // }
  constructor(
    private spinner: NgxSpinnerService,
    public router: Router,
    public snackBar: MatSnackBar,
    public loader: LoadingBarService,
    public route:ActivatedRoute,
    private hotRegisterer: HotTableRegisterer,
    TableauData:TableauData,
    
    public TableauliasseRestApiService:TableauliasseRestApiService
  ) { 
    this.progressbar()
      
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
  
  ngOnInit() {
  //  this.dataset=this.dataset_vide
  // this. getData_plancomptaActivecountry()
   //this.getData_plancompta()
    //  this.dataset
      this.spinner.show(),

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1000)
      //
    // this.route.paramMap.subscribe(params => {
    //   console.log(params)
    //   })
     
  }
  increase(){
    this.sidenavWidth = 30;
  }
  decrease(){
    this.sidenavWidth = 5;
  }
  myspinner(){
    this.spinner.show(),

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000)
  }
  savedata(){
    this.getData_plancompta()

       
                  if (this.tab.id==0){
                    const hotInstance = this.hotRegisterer.getInstance(this.instance);
                          this.tab.country_id=this.mycountry_id,
                          this.tab.account_type='d',
                          console.log((hotInstance.getSourceData()))
                          this.tab.account_Root=JSON.stringify(hotInstance.getSourceData()),
                          this.TableauliasseRestApiService.createTableData(this.tab,this.tab.country_id).subscribe((data: {}) => {
                            this.myspinner(),
                            //
                            this.getData_plancompta()
                            this.succesnotif()
                        })
                  }
                  else{
                    this.tab.map((t=>{
                      const hotInstance = this.hotRegisterer.getInstance(this.instance);
                      this.dataset1.country_id=t.country_id,
                      this.dataset1.id=t.id,
                      this.dataset1.account_type='c',
                      console.log((hotInstance.getSourceData()))
                      this.dataset1.account_Root=JSON.stringify(hotInstance.getSourceData())
                      this.TableauliasseRestApiService.updateTableData(t.country_id,t.id,this.dataset1).subscribe((data: {}) => {
                        this.myspinner(),
                        //
                        this.getData_plancompta()
                        this.succesnotif()
                    }) 
              }))
                  }
                  // else if (this.id_plancomptable!==0){
                   
                  // }
                  this.myspinner(),
                  //
                  this.getData_plancompta()
                  this.succesnotif()

    }
                    // savedata(){
                    //   this.getData_plancompta()
                    //   console.log(this.id_plancomptable)
                    //   const hotInstance = this.hotRegisterer.getInstance(this.instance);
                    //               if (hotInstance){
                    //                 // console.log(this.tab)
                    //                 if (this.id_plancomptable==0){
                    //               console.log('ive id=0')
                    //                         this.tab.country_id=this.mycountry_id,
                    //                         this.tab.account_type='d',
                    //                         this.tab.account_Root=JSON.stringify(hotInstance.getSourceData()),
                    //                         this.TableauliasseRestApiService.createTableData(this.tab,this.tab.country_id).subscribe((data: {}) => {
                                            
                    //                       })
                    //                     this.myspinner()
                    //                     this.getData_plancompta()
                    //                 }
                    //                 else if(this.id_plancomptable!==0){
                    //                   console.log('ive id!=0')
                    //                           this.tab.map((t=>{
                    //                             this.dataset1.country_id=t.country_id,
                    //                             this.dataset1.id=t.id,
                    //                             this.dataset1.account_type='c',
                    //                             this.dataset1.account_Root=JSON.stringify(hotInstance.getSourceData())
                    //                             this.TableauliasseRestApiService.updateTableData(t.country_id,t.id,this.dataset1).subscribe((data:any) => {
                    //                               // console.log(data)
                    //                               this.dataset=JSON.parse(data.account_Root)
                    //                           }) 
                    //                     })),
                    //                     this.myspinner()
                    //                     this.getData_plancompta()
                    //                 }
                    //               }
                    // // else(
                    // // console.log('empty please')
                    // // )

                    //   }
  // getData_plancompta() {

  //   this.TableauliasseRestApiService.getTableData(this.mycountry_id).subscribe((tabledata: any) => {
  //     if (tabledata.account_Root=='vide'){
  //         // console.log(tabledata.country_id+'est'+'tableau vide')
  //         this.tab=tabledata
  //         this.dataset=this.dataset_vide
  //         // console.log(this.tab)
  //     }
  //     else if (tabledata.account_Root!=='vide'){
  //           tabledata.map((t=>{
  //             this.tab=tabledata
  //             // console.log(t.account_Root)
  //             this.dataset=JSON.parse(t.account_Root)
  //             this.id_plancomptable=t.id
  //             // console.log(this.dataset)
  //             // console.log(t.country_id+'est'+'tableau rempli')
  //           }))
  //     }
  //     })
  // }
  getData_plancomptaActivecountry() {

    this.TableauliasseRestApiService.getTableData(4).subscribe((tabledata: any) => {
      if (tabledata.account_Root=='vide'){
          console.log(tabledata.country_id+'est'+'tableau vide')
          this.tab=tabledata
          this.dataset=this.dataset_vide
          console.log(this.tab)
      }
      else if (tabledata.account_Root!=='vide'){
            tabledata.map((t=>{
              this.tab=tabledata
              this.dataset=JSON.parse(t.account_Root)
             this.id_plancomptable=t.id
              console.log(this.dataset)
              console.log(t.country_id+'est'+'tableau rempli')
            }))
      }
      })
  }
  // selectcountry(country_id){
  //   this.show=false
  //   this.mycountry_id=country_id
  //   this.myspinner()
  //   this.getData_plancompta()

  // }


            selectcountry(country_id){
              this.show=false
              this.mycountry_id=country_id
              // console.log(this.mycountry_id)
              this.myspinner()
              this.router.navigate(['/demo2/kt-plancomptable/'+this.mycountry_id])
                this.TableauliasseRestApiService.getTableData(country_id).subscribe((tabledata: any) => {
                  if (tabledata.account_Root=='vide'){
                      this.tab=tabledata
                      console.log(tabledata)
                      this.dataset=this.dataset_vide
                  }
                  else if (tabledata.account_Root!=='vide'){
                    console.log(tabledata)
                        tabledata.map((t=>{
                          this.tab=tabledata
                          this.dataset=JSON.parse(t.account_Root)
                        }))
                  }
                  })
            }


          getData_plancompta(){
            this.TableauliasseRestApiService.getTableData(this.id_plancomptable).subscribe((tabledata: any) => {
              if (tabledata.account_Root=='vide'){
                  this.tab=tabledata
                  this.dataset=this.dataset_vide
              }
              else if (tabledata.account_Root!=='vide'){
                    tabledata.map((t=>{
                      this.tab=tabledata
                      this.dataset=JSON.parse(t.account_Root)
                      this.id_plancomptable=t.id
                    }))
              }
              })
          }
  resetdata() {
   
      this.tab.map((t=>{
        this.id_plancomptable=t.id
      }))
      this.getData_plancompta()
      this.myspinner()

      this.router.navigate(['/demo2/kt-plancomptable/'+this.mycountry_id])
      // this.dataset=[]
      this.TableauliasseRestApiService.deleteTableData(this.mycountry_id,this.id_plancomptable).subscribe((data: {}) => {
        this.router.navigate(['/demo2/kt-plancomptable/'+this.mycountry_id])
        // this.dataset=[]
      })  
      this.myspinner()
      this.succesnotif()
  }
  succesnotif(){
    this.snackBar.openFromComponent(plancomptablesuccesnotif, {  
      duration: 2000,
      panelClass: ['blue-snackbar']
      });
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
  export class plancomptablesuccesnotif {}