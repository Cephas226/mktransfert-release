// Angular
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// Layout
import { LayoutConfigService } from '../../../../../core/_base/layout';
// Charts
import { Chart } from 'chart.js';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { data2 } from './app.data';

@Component({
	selector: 'kt-select2',
	templateUrl: './selecte2.component.html',
	styleUrls: ['./selecte2.component.scss'],
})
export class Select2Component {
	// Public properties
	data14 = data2;
	value14 = '';
	fg: FormGroup = new FormGroup({
		state: new FormControl()
	  });
	minCountForSearch = Infinity;
	ctrlForm: FormGroup;
	@Input() title: string;
	@Input() desc: string;
	@Input() data: { labels: string[]; datasets: any[] };
	@ViewChild('chart') chart: ElementRef;

	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayoutConfigService
	 */
	constructor(private fb: FormBuilder,private layoutConfigService: LayoutConfigService) {
	}
	update14(value: string) {
		this.value14 = value;
	  }
}
