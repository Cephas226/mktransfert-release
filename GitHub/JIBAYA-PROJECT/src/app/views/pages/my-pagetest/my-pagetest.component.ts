// import { Component, OnInit, Inject } from '@angular/core';
// import { NgfmApi } from '../ngfm/public_api';

// @Component({
//   selector: 'kt-my-pagetest',
//   templateUrl: './my-pagetest.component.html',
//   styleUrls: ['./my-pagetest.component.scss']
// })
// export class MyPagetestComponent{
//   pickResult: any;
//   dialogCall: string = null;
//   constructor(
//     private ngfm: NgfmApi
//   ) {

//   }
//   openDialog(pick: 'file' | 'folder' | null) {
//     this.pickResult = null;
//     this.ngfm.openDialog(['private', '1337'], [], { pick }).subscribe(picked => this.pickResult = picked);
//     this.dialogCall = `this.ngfm.openDialog(
//       ['private', '1337'],
//       [],
//       { pick: ${pick ? "'" + pick + "'" : 'null'} }
//     ).subscribe(picked => this.pickResult = picked);`;
//   }
// }
import { Component, OnInit, AfterViewInit } from '@angular/core';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';
import { TableauliasseRestApiService } from '../../partials/content/widgets/shared/tableauliasse.service';
import { TableauData } from '../../partials/content/widgets/shared/tableauliasse.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kt-my-pagetest',
  templateUrl: './my-pagetest.component.html',
  styleUrls: ['./my-pagetest.component.scss']
})

export class MyPagetestComponent  {
	  
  
}
