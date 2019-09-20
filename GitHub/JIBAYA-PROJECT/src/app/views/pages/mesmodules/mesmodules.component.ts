import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalVariableService } from '../../partials/content/widgets/shared/globalvariable.service';
/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'kt-mesmodules',
templateUrl: './mesmodules.component.html',
styleUrls: ['./mesmodules.component.scss']
})
export class MesmodulesComponent implements OnInit{
  id: string;
  constructor(public dialog: MatDialog,
              public GlobalVariableService:GlobalVariableService,
              public route:ActivatedRoute,
              public router: Router) {}
  ngOnInit(){
    console.log(GlobalVariableService)
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
      console.log('Modules'+this.id)
      })

  }
  exercices() {
    this.router.navigate(['/demo2/kt-exercices']);
  }
  liasssechoice() {
    this.router.navigate(['/demo2/kt-liassechoicepage']);
  }
  liassse() {
    let myparam=this.route.snapshot.params['id']
    console.log('voici mon param'+''+this.route.snapshot.params['id'])
    this.router.navigate(['/demo2/kt-jibayaliasse/'+myparam]);

  }
  tva() {
    let myparam
    this.route.paramMap.subscribe(params => {
      myparam = params.get("id")
      this.router.navigate(['/demo2/exercice-jibayatva/'+myparam]);
    })
  }

  salaire() {
    this.router.navigate(['/demo2/kt-jibayasalaire']);
  }
  immo() {
    this.router.navigate(['/demo2/kt-jibayaimmo']);
  }
  compta() {
    this.router.navigate(['/demo2/kt-jibayacompta']);
  }
  budget() {
    this.router.navigate(['/demo2/kt-jibayabudget']);
  }
  coll() {
    this.router.navigate(['/demo2/kt-collaboratif']);
  }
  doc() {
    this.router.navigate(['/demo2/kt-jibayadoc']);
  }
}


