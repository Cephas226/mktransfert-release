import { Component, OnInit } from '@angular/core';

import { ExportAsService, ExportAsConfig, SupportedExtensions } from 'ngx-export-as';
import { SidenavService } from '../services/sidenav.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent{
  config: ExportAsConfig = {
    type: 'pdf',
    elementId: 'mytable',
    options: {
      jsPDF: {
        orientation: 'landscape'
      }
    }
  };

  constructor(
    private exportAsService: ExportAsService
  ) { }

  exportAs(type: SupportedExtensions, opt?: string) {
    this.config.type = type;
    if (opt) {
      this.config.options.jsPDF.orientation = opt;
    }
    this.exportAsService.save(this.config, 'myFile').subscribe(() => {
      // save started
    });
    // this.exportAsService.get(this.config).subscribe(content => {
    //   console.log(content);
    // });
  }

}
