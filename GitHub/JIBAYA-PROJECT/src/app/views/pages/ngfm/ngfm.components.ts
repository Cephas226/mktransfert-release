import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgfmApi } from './connectors/ngfm-api';
 

@Component({
  selector: 'kt-ngfm',
  templateUrl: './ngfm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ngFmComponent {
  pickResult: any;
  dialogCall: string = null;
  constructor(
    private ngfm: NgfmApi
  ) {

  }
  openDialog(pick: 'file' | 'folder' | null) {
    this.pickResult = null;
    this.ngfm.openDialog(['private', '1337'], [], { pick }).subscribe(picked => this.pickResult = picked);
    this.dialogCall = `this.ngfm.openDialog(
      ['private', '1337'],
      [],
      { pick: ${pick ? "'" + pick + "'" : 'null'} }
    ).subscribe(picked => this.pickResult = picked);`;
  }
}