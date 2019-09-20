import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd, NavigationCancel } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  sidenavWidth=9;
  showFiller = false;
  	 
  constructor(private router : Router,
	public loader: LoadingBarService,
	) {
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
  }

  increase(){
    this.sidenavWidth = 15;
    console.log("increase sidenav width");
  }
  decrease(){
    this.sidenavWidth = 4;
    console.log("decrease sidenav width");
  }
  
}
