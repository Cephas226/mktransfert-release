import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import {single, multi} from './data';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Router, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationCancel, NavigationEnd } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
export interface PeriodicElement {
  HT: number;
  position: number;
  HTVA: number;
  Etat: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, HT: 1.0079, HTVA: 1.0079, Etat: 'déclaré'},
  {position: 2, HT: 1.0079, HTVA: 4.0026, Etat: 'déclaré'},
  {position: 3, HT: 1.0079, HTVA: 1.0079, Etat: 'non déclaré'},
  {position: 4, HT: 1.0079, HTVA: 9.0122, Etat: 'non déclaré'},
  {position: 5, HT: 1.0079, HTVA: 1.0079,  Etat: 'déclaré'},
  {position: 6, HT: 15.9994, HTVA: 12.0107, Etat:'déclaré'},
  {position: 7, HT: 1.0079, HTVA: 14.0067, Etat: 'non déclaré'},
  {position: 8, HT: 15.9994, HTVA: 15.9994, Etat: 'non déclaré'},
  {position: 9, HT: 1.0079, HTVA: 18.9984, Etat: 'non déclaré'},
  {position: 10, HT: 1.0079, HTVA: 20.1797, Etat: 'déclaré'},
];
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
@Component({
  selector: 'kt-jbtva-table',
  templateUrl: './jbtva-table.component.html',
  styleUrls: ['./jbtva-table.component.scss']
})


export class JbtvaTableComponent implements OnInit {
  single: any[];
  multi: any[];
  dataset:any;
  sidenavWidth=9;
  view: any[] = [700, 400];
  gradient = false;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  constructor(public dialog: MatDialog,
    public router:Router,
    public loader: LoadingBarService,
    ) {
    Object.assign(this, {single, multi}) 
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
      if (event instanceof NavigationEnd|| event instanceof NavigationCancel) {
        // set page progress bar loading to end on NavigationEnd event router
        this.loader.complete();
      }
    });
  }
  createform(): void {
    let dialogRef = this.dialog.open(Formtvacomponent, {
      width: '500px',
      height:'250px',
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  export(): void {
    let dialogRef = this.dialog.open(exportTVAcomponent, {
      width: '500px',
      height:'250px',
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  ngOnInit() {
  }
  increase(){
    this.sidenavWidth = 15;
    console.log("increase sidenav width");
  }
  decrease(){
    this.sidenavWidth = 12;
    console.log("decrease sidenav width");
  }
  displayedColumns: string[] = ['select', 'position', 'HT', 'HTVA', 'Etat'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
@Component({
  selector: 'Formtvacomponent',
  template: `
    
  <div class="example-container">
  <mat-form-field hintLabel="Max 10 characters">
    <input matInput #input maxlength="10" placeholder="Enter some input">
    <mat-hint align="end">{{input.value?.length || 0}}/10</mat-hint>
  </mat-form-field>

  <mat-form-field>
    <mat-select placeholder="Select me">
      <mat-option value="option">Option</mat-option>
    </mat-select>
    <mat-hint align="end">Here's the dropdown arrow ^</mat-hint>
  </mat-form-field>
</div>
<style>
.example-container {
  display: flex;
  flex-direction: column;
}

.example-container > * {
  width: 100%;
}

</style>
  `
})
export class Formtvacomponent {
 
  constructor(
    public dialogRef: MatDialogRef<Formtvacomponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { 
  
      }

  onNoClick(): void {
    this.dialogRef.close();
  }
}





@Component({
  selector: 'exportTVAcomponent',
  template: `
    
  <mat-card>
  <mat-card-content>
    <h2 class="example-h2">Exportez vos fichier</h2>

    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
      <mat-checkbox class="example-margin" [(ngModel)]="indeterminate">Indeterminate</mat-checkbox>
    </section>

    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
    </section>
  </mat-card-content>
  <button mat-button>Ok</button>
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
export class exportTVAcomponent {
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  constructor(
    public dialogRef: MatDialogRef<exportTVAcomponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { 
  
      }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

