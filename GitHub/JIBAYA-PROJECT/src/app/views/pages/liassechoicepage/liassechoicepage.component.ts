import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kt-liassechoicepage',
  templateUrl: './liassechoicepage.component.html',
  styleUrls: ['./liassechoicepage.component.scss']
})
export class LiassechoicepageComponent implements OnInit {
  myparam_company:any
  id:any
  constructor(
    public route:ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  balance() {
    this.route.paramMap.subscribe(params => {
      this.myparam_company = params.get("myparam_company")
      this.id = params.get("id")
      console.log(this.id)
      console.log(this.myparam_company)
      this.router.navigate(['/demo2/kt-balance/'+this.myparam_company+'/'+this.id+'/'])
    })
  }
  tabliasse() {
    this.route.paramMap.subscribe(params => {
      this.myparam_company = params.get("myparam_company")
      this.id = params.get("id")
      console.log(this.id)
      console.log(this.myparam_company)
      this.router.navigate(['/demo2/kt-tableauliasse/'+this.myparam_company+'/'+this.id+'/'])
    })
  }
  dotation() {
    this.router.navigate(['/demo2/kt-dotation']);
  }
}
