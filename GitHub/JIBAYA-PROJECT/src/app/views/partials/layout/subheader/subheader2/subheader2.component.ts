// Angular
import { AfterViewInit, Component, OnDestroy, OnInit, Inject } from '@angular/core';
// RxJS
import { Subscription } from 'rxjs';
// Layout


import { SubheaderService } from '../../../../../core/_base/layout';
import { Breadcrumb } from '../../../../../core/_base/layout/services/subheader.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
export interface DialogData {
	animal: 'panda' | 'unicorn' | 'lion';
  }
  export interface Food {
	value: string;
	viewValue: string;
  }
@Component({
	selector: 'kt-subheader2',
	templateUrl: './subheader2.component.html',
	styleUrls: ['./subheader2.component.scss']
})
export class Subheader2Component implements OnInit, OnDestroy, AfterViewInit {

	today: number = Date.now();
	title: string = '';
	desc: string = '';
	breadcrumbs: Breadcrumb[] = [];
	// Private properties
	private subscriptions: Subscription[] = [];
 
	id: boolean=false;
	currentroute: string;

	/**
	 * Component constructor
	 *
	 * @param subheaderService: SubheaderService
	 */
	constructor(public dialog: MatDialog,public subheaderService: SubheaderService,
		public route:ActivatedRoute,
		public router: Router) {
			if (this.router.url.includes('/	kt-mesmodules/')) 
			{  
				this.id=true
			}
			if (this.router.url.includes('/kt-plancomptable/')) 
			{  
				this.id=true
			}
			if (this.router.url.includes('/kt-balance/')) 
			{  
				this.id=true
			}
	}
	ngOnInit() {
	
	}
	liasse() {
	this.router.navigate(['/demo2/kt-jibayaliasse']);
	}
	exercices() {
		if (this.router.url === '/demo2/kt-jibayaliasse' || this.router.url === '/demo2/kt-jibayaimmo'
			|| this.router.url === '/demo2/kt-jibayasalaire' || this.router.url === '/demo2/kt-jibayacompta'
			|| this.router.url === '/demo2/kt-jibayabudget' || this.router.url === '/demo2/kt-jibayacoll'
			|| this.router.url === '/demo2/kt-jibayadoc' || this.router.url === '/demo2/kt-jibayatva' ||
			this.router.url === '/demo2/kt-exercices' ||
			this.router.url === '/demo2//kt-liassechoicepage' ||
			this.router.url === '/demo2/kt-balance'
			) {
			this.router.navigate(['/demo2/kt-exercices']);
		  }
	}
	liasssechoice() {
		this.router.navigate(['/demo2/kt-liassechoicepage']);
	  }
	  balance() {
		this.router.navigate(['/demo2/kt-balance']);
	  }
	  tabliasse() {
		this.router.navigate(['/demo2/kt-tableauliasse']);
	  }
	  dotation() {
		this.router.navigate(['/demo2/kt-dotation']);
	  }
	ngAfterViewInit(): void {
		this.subscriptions.push(this.subheaderService.title$.subscribe(bt => {
			// breadcrumbs title sometimes can be undefined
			if (bt) {
				Promise.resolve(null).then(() => {
					this.title = bt.title;
					this.desc = bt.desc;
				});
			}
		}));

		this.subscriptions.push(this.subheaderService.breadcrumbs$.subscribe(bc => {
			Promise.resolve(null).then(() => {
				this.breadcrumbs = bc;
			});
		}));
	}
	modules() {
		this.router.navigate(['/demo2/kt-mesmodules']);
	}
	dashboard() {
		this.router.navigate(['/demo2/dashboard']);
	}
	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.subscriptions.forEach(sb => sb.unsubscribe());
	}
}
