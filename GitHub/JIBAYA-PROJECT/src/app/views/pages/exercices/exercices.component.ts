// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ExercicesService } from '../../partials/content/widgets/shared/exercices.service'
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
 

// @Component({
//   selector: 'kt-exercices',
//   templateUrl: './exercices.component.html',
//   styleUrls: ['./exercices.component.scss']
// })

// export class ExercicesComponent implements OnInit {
//   closeResult: string;
//   constructor(private router: Router,
//     private modalService: NgbModal,
//     private exercie_service:ExercicesService) {

//     }
//     exercices=[]
//   ngOnInit() {
//     this.getExercices()
//   }
//   getExercices(){
//     this.exercie_service.getexercices().subscribe((data: []) => {
//      this.exercices = data;
//      console.log(data)
//      console.log(this.exercices)
//     });
//   }
  
//   DeleteExerciceButton(content:any,id: any) {
//     this.modalService.open(content).result.then((result) => {
//       this.exercie_service.deleteExercices(id).subscribe(data => {
//         this.getExercices()
//       })
//     }, (reason) => {
//         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//     this.getExercices()
//     this.router.navigate(['/demo2/kt-jibayaliasse'])
// }  

// private getDismissReason(reason: any): string {
//   if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//   } else {
//       return  `with: ${reason}`;
//   }
// }

// }
import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd, NavigationCancel } from '@angular/router';
import { NgbModal,ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material';
import { ExercicesService } from '../../partials/content/widgets/shared/exercices.service';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { GlobalVariableService } from '../../partials/content/widgets/shared/globalvariable.service';
 
 
 
 
 
export interface DialogData {
  id: number;
  exercise_title: string;
  exercise_start_date: string;
  exercise_end_date: string;
  state: string
  exercise_TVA_Regime:string;
  selectedState: string
  favoriteSeason: string;
}
@Component({
  selector: 'kt-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.scss'],
  providers: [DatePipe]
})
export class ExercicesComponent implements OnInit {
 
  id: number;
  exercise_title: string;
  exercise_start_date: string;
  exercise_end_date: string;
  state: string
  favoriteSeason: string;
  selectedState: string 
  exercicesdata:any=[];
  exercise_TVA_Regime: string;
  regimes_tva: string[] = ['Trimentiel', 'mensuel'];
  test_id: boolean;
  constructor(
    private datePipe: DatePipe,
    public route:ActivatedRoute,
    public loader: LoadingBarService,
    public snackBar: MatSnackBar,
 
    public router: Router,private modalService: NgbModal,public dialog: MatDialog,		
      public exercicesrestApi: ExercicesService,
      public GlobalVariableService: GlobalVariableService
      ) {
      let myparam=this.route.snapshot.params['id']
      this.id=myparam
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
	// modules() {
	// 	this.router.navigate(['/demo2/kt-mesmodules']);
  // }

    // if (this.router.url === '/demo2/kt-jibayatva') {
    //   this.router.navigate(['']);
    // }
    // if (this.router.url === '/demo2/kt-jibayasalaire') {
    //   this.router.navigate(['']);
    // }
    // if (this.router.url === '/demo2/kt-jibayaimmo') {
    //   this.router.navigate(['']);
    // }
    // if (this.router.url === '/demo2/kt-jibayacompta') {
    //   this.router.navigate(['']);
    // }
    // if (this.router.url === '/demo2/kt-jibayabudget') {
    //   this.router.navigate(['']);
    // }
    // if (this.router.url === '/demo2/kt-jibayacoll') {
    //   this.router.navigate(['']);
    // }
    // if (this.router.url === '/demo2/kt-jibayadoc') {
    //   this.router.navigate(['']);
    // }
  
    Create_exercice(): void {
    const dialogRef = this.dialog.open(ExercicePopupComponent, 
      {
        width: '250px',
      data: {
        exercise_company_id:this.id,
        exercise_title: '',
        exercise_start_date: '',
        exercise_end_date: '',
        exercise_TVA_Regime:'',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result){
        if (result.exercise_TVA_Regime=='Trimentiel'){
     
          result.exercise_TVA_Regime='True'
        }
        else(result.exercise_TVA_Regime='False')
        result.exercise_start_date = this.datePipe.transform(result.exercise_start_date, 'yyyy-MM-dd')
        result.exercise_end_date = this.datePipe.transform(result.exercise_end_date, 'yyyy-MM-dd')
        let myparam=this.route.snapshot.params['id']
        this.exercicesrestApi.createExercices(result,myparam).subscribe((data: {}) => {
          this.exercicesdata.push(data)
          dialogRef.close()
          this.router.navigate(['/demo2/kt-jibayaliasse/'+myparam])
          this.getExercices()
        }) 
        console.log(result)
        // if(result.exercise_TVA_Regime=='True'){
        //  this.GlobalVariableService.RegimeTVA='Trimestriel'
        // }
        // else{
        //   console.log('hum ! ')
        //   this.GlobalVariableService.RegimeTVA='Mensuel'
        // }
        this.snackBar.openFromComponent(SuccesComponent, {  
          duration: 2000,
          panelClass: ['blue-snackbar']
          });
     
      }
    
      else( console.log('Nothing to do'))

    });
   
  }
  UpdateExerciceButton(exercice): void {
    console.log(exercice)
    const dialogRef = this.dialog.open(ExercicePopupComponent,
      
      {
        width: '250px',
      data: {
        exercise_company_id:this.id,
        id:exercice.id, 
        exercise_title:  exercice.exercise_title,
        exercise_start_date: new Date(exercice.exercise_start_date),
        exercise_end_date: new Date(exercice.exercise_end_date),
        exercise_TVA_Regime:this.exercise_TVA_Regime
        
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      
      if(result==undefined){
        console.log('nothing')
       }
       else{
        if (result.exercise_TVA_Regime=='Trimentiel'){
          result.exercise_TVA_Regime='True'
          this.selectedState='Trimentiel'

        }
        else(result.exercise_TVA_Regime='False')
        console.log(result)
        result.exercise_start_date = this.datePipe.transform(result.exercise_start_date, 'yyyy-MM-dd')
        result.exercise_end_date = this.datePipe.transform(result.exercise_end_date, 'yyyy-MM-dd')
      let myparam=this.route.snapshot.params['id']
      // console.log(result)
        this.exercicesrestApi.updateExercice(myparam,result.id,result).subscribe(res => {
        this.exercicesdata.push(res)
        dialogRef.close()
        this.router.navigate(['/demo2/kt-jibayaliasse/'+myparam])
        this.getExercices()
        })
        result.exercise_start_date =new Date(result.exercise_start_date),
        result.exercise_end_date  =new Date(result.exercise_end_date),
        this.snackBar.openFromComponent(SuccesComponent, {  
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
       }
    });
  
  }
  ngOnInit() {
    this.getExercices()
  }
  exo(exercice) {
    if (this.router.url.includes('/kt-jibayaliasse/')){
         let myparam_company=this.route.snapshot.params['id']
         this.router.navigate(['/demo2/kt-liassechoicepage/'+myparam_company+'/'+exercice.id+'/'])
    } 
        if (this.router.url.includes('/exercice-jibayatva/')){
          console.log(exercice)
          if(exercice.exercise_TVA_Regime==true){
             this.GlobalVariableService.RegimeTVA='Trimestriel'
               this.router.navigate(['/demo2/jb-jibayatva/Trimestriel'])
        }
        else{
          console.log('hum ! ')
          this.GlobalVariableService.RegimeTVA='Mensuel'
          this.router.navigate(['/demo2/jb-jibayatva/Mensuel'])
        }
     } 
  }
  getExercices() {
    let myparam=this.route.snapshot.params['id']
 
    return this.exercicesrestApi.getexercices(myparam).subscribe((data: {}) => {
      this.exercicesdata = data;
 
      })
  
    }
    delete(id){
      let idCompany=this.route.snapshot.params['id']
 
      this.exercicesrestApi.deleteExercices(this.id,id).subscribe(data => {
      this.modalService.dismissAll();
       this.router.navigate(['/demo2/kt-jibayaliasse/'+this.id])
       this.getExercices()
        })
      this.snackBar.openFromComponent(SuccesComponent, {  
      duration: 2000,
      panelClass: ['blue-snackbar']
      });
      this.getExercices()
  }
      DeleteExerciceButton(content) {
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
  selector: 'dialog-overview-example-dialog',
  template: `
  
 
<form class="example-container" #personForm="ngForm">
<h4 class="modal-title">
<i class="material-icons orange600">
account_balance
</i> Nouvelle exercice
</h4>
<table class="example-half-width" cellspacing="0">

<tr>
       
    <td>
        <mat-form-field class="example-half-width">
       <input matInput placeholder="Titre exercice" required
       name="titre exercice"
       [(ngModel)]="data.exercise_title">
        </mat-form-field>
    </td>

</tr>
<tr>
       
    <td>
        <mat-form-field class="example-half-width">
          <input matInput name="date_creation"
          [matDatepicker]="picker" placeholder="Date de debut" required
          [(ngModel)]="data.exercise_start_date"/>
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
    </td>
    
</tr>
<tr>
       
    <td>
        <mat-form-field class="example-half-width">
        <input matInput name="date_fin"
        [matDatepicker]="pickerto" placeholder="Date de fin" required
         [(ngModel)]="data.exercise_end_date"/>
        <mat-datepicker-toggle matSuffix [for]="pickerto"></mat-datepicker-toggle>
        <mat-datepicker #pickerto></mat-datepicker>
        </mat-form-field>
    </td>
    
</tr>
      <tr>
          <td>
              <mat-form-field class="no-line">
              <input matInput  [(ngModel)]="data.id"
              name="id" [hidden]="true"/>
              </mat-form-field>
         </td>
      </tr>
<div>
    <mat-radio-group [(ngModel)]="data.exercise_TVA_Regime" required
     name="regime_tva">
    <mat-radio-button
    class="example-radio-button" *ngFor="let regime_tva of regimes_tva" required
     [value]="regime_tva">
      {{regime_tva}}
    </mat-radio-button>
    </mat-radio-group>
   
</div>

</table>
<div class="button-row">
<button mat-raised-button  (click)="onNoClick()">Annulez</button>
<button mat-raised-button color="primary" [mat-dialog-close]="data"
type="submit" [disabled]="personForm.invalid"
 cdkFocusInitial>
    <i class="material-icons">save</i>
  Sauvegardez</button>
</div>
</form>
 
<style>

.example-container {
  margin-left:4%;
  margin-right: 2%;
  margin-top: 5%;
  margin-bottom: 10%

}

.example-form {
  margin-left:4%;
  margin-right: 2%;
  margin-top: 5%;
  margin-bottom: 10%
  }
  .material-icons.orange600 { color: #FB8C00; }
  .example-full-width {
  width: 100%;
  }
  td {
  padding-right:30px;
  }
  ::ng-deep .no-line .mat-form-field-underline {
    display: none;
  }
 
</style>
   `,
   
})
export class ExercicePopupComponent {
  options: FormGroup;
  exercise_start_date:"";
  exercise_end_date:"";
  state: string = "";
  selectedState: string = "";
  exercise_TVA_Regime:string
  favoriteSeason: string;
  regimes_tva: string[] = ['Trimentiel', 'Mensuel'];
 
  
  constructor(
   
    exercicesrestApi: ExercicesService,
    public dialogRef: MatDialogRef<ExercicePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        
    }

  onNoClick(): void {
  
    this.dialogRef.close();
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `
    <span _ngcontent-c3="" class="example-pizza-party">
    Succès!!! 🎉
    </span>`,
  styles: [`.example-pizza-party { color: #FF9C32; }`],
  })
  export class SuccesComponent {}