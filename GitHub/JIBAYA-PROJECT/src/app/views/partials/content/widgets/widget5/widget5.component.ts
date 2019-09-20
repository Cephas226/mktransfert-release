// Angular

import { Component, Input, OnInit, ContentChild, TemplateRef } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
import { Router } from '@angular/router';
export interface Widget5Data {
	icon?: string;
	pic?: string;
	title?: string;
	username?: string;
	desc?: string;
	url?: string;
}

@Component({
	selector: 'kt-widget5',
	templateUrl: './widget5.component.html',
	styleUrls: ['./widget5.component.scss']
})
export class Widget5Component implements OnInit {
	@Input() data: Widget5Data[];

	@ContentChild('actionTemplate') actionTemplate: TemplateRef<any>;

	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayoutConfigService
	 */
	constructor(private router: Router) { }
	exercices() {
		this.router.navigate(['/demo2/kt-exercices']);
	}
	ngOnInit() {
		if (!this.data) {
			this.data = shuffle([
				{
					pic: './assets/media/products/schedule.png',
					// title: 'Metronic Documentation',
					// url: 'https://keenthemes.com.my/metronic',
				},
			]);
		}
		// if (!this.data) {
		// 	this.data = shuffle([
		// 		{
		// 			pic: './assets/media/products/product6.jpg',
		// 			title: 'JIBAYA LIASSE',
		// 			desc: 'JIBAYA LIASSE',
		// 			info: '<span>Author:</span><span class="kt-font-info">Keenthemes</span>' +
		// 				'<span>Released:</span><span class="kt-font-info">23.08.17</span>',
		// 			largeInfo: '<div class="kt-widget5__stats">\n' +
		// 				' <span class="kt-widget5__number">19,200</span>\n' +
		// 				' <span class="kt-widget5__sales">sales</span>\n' +
		// 				' </div>\n' +
		// 				' <div class="kt-widget5__stats">\n' +
		// 				' <span class="kt-widget5__number">1046</span>\n' +
		// 				' <span class="kt-widget5__votes">votes</span>\n' +
		// 				' </div>'
		// 		},
		// 		{
		// 			pic: './assets/media/products/product10.jpg',
		// 			title: 'Branding Mockup',
		// 			desc: 'JIBAYA TVA',
		// 			info: '<span>Author:</span><span class="kt-font-info">Fly themes</span>' +
		// 				'<span>Released:</span><span class="kt-font-info">23.08.17</span>',
		// 			largeInfo: '<div class="kt-widget5__stats">\n' +
		// 				' <span class="kt-widget5__number">24,583</span>\n' +
		// 				' <span class="kt-widget5__sales">sales</span>\n' +
		// 				' </div>\n' +
		// 				' <div class="kt-widget5__stats">\n' +
		// 				' <span class="kt-widget5__number">3809</span>\n' +
		// 				' <span class="kt-widget5__votes">votes</span>\n' +
		// 				' </div>'
		// 		},
		// 		{
		// 			pic: './assets/media/products/product11.jpg',
		// 			title: 'Awesome Mobile App',
		// 			desc: 'JIBAYA SALAIRE',
		// 			info: '<span>Author:</span><span class="kt-font-info">Fly themes</span>' +
		// 				'<span>Released:</span><span class="kt-font-info">23.08.17</span>',
		// 			largeInfo: '<div class="kt-widget5__stats">\n' +
		// 				' <span class="kt-widget5__number">210,054</span>\n' +
		// 				' <span class="kt-widget5__sales">sales</span>\n' +
		// 				' </div>\n' +
		// 				' <div class="kt-widget5__stats">\n' +
		// 				' <span class="kt-widget5__number">1103</span>\n' +
		// 				' <span class="kt-widget5__votes">votes</span>\n' +
		// 				' </div>'
		// 		},
		// 		{
		// 			pic: './assets/media/products/product6.jpg',
		// 			title: 'JIBAYA LIASSE',
		// 			desc: 'JIBAYA IMMO',
		// 			info: '<span>Author:</span><span class="kt-font-info">Keenthemes</span>' +
		// 				'<span>Released:</span><span class="kt-font-info">23.08.17</span>',
		// 			largeInfo: '<div class="kt-widget5__stats">\n' +
		// 				' <span class="kt-widget5__number">19,200</span>\n' +
		// 				' <span class="kt-widget5__sales">sales</span>\n' +
		// 				' </div>\n' +
		// 				' <div class="kt-widget5__stats">\n' +
		// 				' <span class="kt-widget5__number">1046</span>\n' +
		// 				' <span class="kt-widget5__votes">votes</span>\n' +
		// 				' </div>'
		// 		},
		// 		{
		// 			pic: './assets/media/products/product10.jpg',
		// 			title: 'Branding Mockup',
		// 			desc: 'JIBAYA DOCUMENT',
		// 			info: '<span>Author:</span><span class="kt-font-info">Fly themes</span>' +
		// 				'<span>Released:</span><span class="kt-font-info">23.08.17</span>',
		// 			largeInfo: '<div class="kt-widget5__stats">\n' +
		// 				' <span class="kt-widget5__number">24,583</span>\n' +
		// 				' <span class="kt-widget5__sales">sales</span>\n' +
		// 				' </div>\n' +
		// 				' <div class="kt-widget5__stats">\n' +
		// 				' <span class="kt-widget5__number">3809</span>\n' +
		// 				' <span class="kt-widget5__votes">votes</span>\n' +
		// 				' </div>'
		// 		},
		// 		{
		// 			pic: './assets/media/products/product11.jpg',
		// 			title: 'Awesome Mobile App',
		// 			desc: 'JIBAYA COLLABORATIF',
		// 			info: '<span>Author:</span><span class="kt-font-info">Fly themes</span>' +
		// 				'<span>Released:</span><span class="kt-font-info">23.08.17</span>',
		// 			largeInfo: '<div class="kt-widget5__stats">\n' +
		// 				' <span class="kt-widget5__number">210,054</span>\n' +
		// 				' <span class="kt-widget5__sales">sales</span>\n' +
		// 				' </div>\n' +
		// 				' <div class="kt-widget5__stats">\n' +
		// 				' <span class="kt-widget5__number">1103</span>\n' +
		// 				' <span class="kt-widget5__votes">votes</span>\n' +
		// 				' </div>'
		// 		},
		// 		{
		// 			pic: './assets/media/products/product11.jpg',
		// 			title: 'Awesome Mobile App',
		// 			desc: 'JIBAYA BUDGET',
		// 			info: '<span>Author:</span><span class="kt-font-info">Fly themes</span>' +
		// 				'<span>Released:</span><span class="kt-font-info">23.08.17</span>',
		// 			largeInfo: '<div class="kt-widget5__stats">\n' +
		// 				' <span class="kt-widget5__number">210,054</span>\n' +
		// 				' <span class="kt-widget5__sales">sales</span>\n' +
		// 				' </div>\n' +
		// 				' <div class="kt-widget5__stats">\n' +
		// 				' <span class="kt-widget5__number">1103</span>\n' +
		// 				' <span class="kt-widget5__votes">votes</span>\n' +
		// 				' </div>'
		// 		},
		// 	]);
		// }
	}
}
