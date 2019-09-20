import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdLayoutManageListComponent } from '@covalent/core';
import { pie, single } from './data';
 

@Component({
  selector: 'kt-jb-jibayatva',
  templateUrl: './jb-jibayatva.component.html',
  styleUrls: ['./jb-jibayatva.component.scss']
})
export class JbJibayatvaComponent implements OnInit {
  regimetva: string;
  Months:any=['Janvier','Fevrier','Mars',
            'Avril','Mais','Juin','Juillet',
            'Août','Septembre','Octobre','Novembre','Decmbre']
  Trimestres:any=[1,2,3,4]     
  single: any[];
  multi: any[];
  view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
 
  constructor(
    public router:Router,
     public route:ActivatedRoute) { 
      Object.assign(this, {pie, single})
     }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.regimetva = params.get("regimetva")
    console.log(this.regimetva)
  })
  }


}
