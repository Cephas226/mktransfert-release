// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './base/base.component';
import { ErrorPageComponent } from './content/error-page/error-page.component';
// Auth
import { AuthGuard } from '../../../core/auth';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { MyPageComponent } from '../../pages/my-page/my-page.component';
import { MesmodulesComponent } from '../../pages/mesmodules/mesmodules.component';
import { ExercicesComponent } from '../../pages/exercices/exercices.component';
import { JibayaliasseComponent } from '../../pages/jibayaliasse/jibayaliasse.component';
import { JibayatvaExercicesComponent } from '../../pages/jibayatva_exercices/jibayatva_exercices.component';
import { JibayasalaireComponent } from '../../pages/jibayasalaire/jibayasalaire.component';
import { JibayaimmoComponent } from '../../pages/jibayaimmo/jibayaimmo.component';
import { JibayacomptaComponent } from '../../pages/jibayacompta/jibayacompta.component';
import { JibayacollComponent } from '../../pages/jibayacoll/jibayacoll.component';
import { JibayabudgetComponent } from '../../pages/jibayabudget/jibayabudget.component';
import { JibayadocComponent } from '../../pages/jibayadoc/jibayadoc.component';
import { LiassechoicepageComponent } from '../../pages/liassechoicepage/liassechoicepage.component';
import { TableauliasseComponent } from '../../pages/tableauliasse/tableauliasse.component';
import { BalanceComponent } from '../../pages/balance/balance.component';
import { DotationComponent } from '../../pages/dotation/dotation.component';
import { CompanyListComponent } from '../../pages/company-list/company-list.component';
import { MyPagetestComponent } from '../../pages/my-pagetest/my-pagetest.component';
import { NgfmPerms, NgfmRouteComponent } from '../../pages/ngfm/public_api';
// import { ConfigResolverService } from '../../pages/services/config-resolver.service';
// import { PrivateRouteService } from '../../pages/services/private-route.service';
import { ngFmComponent } from '../../pages/ngfm/ngfm.components';
import { PlancomptableComponent } from '../../pages/plancomptable/plancomptable.component';
import { SidenavComponent } from '../../pages/sidenav/sidenav.component';
import { Component1Component } from '../../pages/component-1/component-1.component';
import { NgChat } from '../../pages/ng-chat/ng-chat.component';
import { Component2Component } from '../../pages/component-2/component-2.component';
import { JbJibayatvaComponent } from '../../pages/jb-jibayatva/jb-jibayatva.component';
import { JbtvaTableComponent } from '../../pages/jbtva-table/jbtva-table.component';
import { Component3Component } from '../../pages/component-3/component-3.component';
import { HandsontbleComponent } from '../../pages/handsontble/handsontble.component';
import { ParametreTableauliasseComponent } from '../../pages/tableauliasseParametres/parameters_tableauliasse.component';


const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: 'app/views/pages/dashboard/dashboard.module#DashboardModule'
			},{
				path: 'my-page', // <= Page URL
				component: MyPageComponent // <= Page component registration
			   },
			   {
				path: 'app-component-2', // <= Page URL
				component: Component2Component // <= Page component registration
			   },
			   {
				path: 'kt-handsontble', // <= Page URL
				component: HandsontbleComponent // <= Page component registration
			   },
			   {
				path: 'app-component-3', // <= Page URL
				component: Component3Component // <= Page component registration
			   },
			   {
				path: 'kt-company-list', // <= Page URL
				component: CompanyListComponent // <= Page component registration
			   },
			   {
				path: 'kt-my-pagetest', // <= Page URL
				component: MyPagetestComponent // <= Page component registration
			  },
			  {
				path: 'kt-my-pagetest/:id', // <= Page URL
				component: MyPagetestComponent // <= Page component registration
			  },
			  {
				path: 'ng-chat', // <= Page URL
				component: NgChat // <= Page component registration
			  },
		
			   {
				path: 'kt-mesmodules/:id', // <= Page URL
				component: MesmodulesComponent,
			  },
			  {
				path: 'kt-exercices', // <= Page URL
				component: ExercicesComponent // <= Page component registration
			  },
			  {
				path: 'kt-jibayaliasse/:id', // <= Page URL
				component: JibayaliasseComponent // <= Page component registration
			  },
			  {
				path: 'kt-plancomptable/:id', // <= Page URL
				component: PlancomptableComponent // <= Page component registration
			  },
			  {
				path: 'kt-plancomptable/:1', // <= Page URL
				component: PlancomptableComponent // <= Page component registration
			  },
			  {
				path: 'kt-plancomptable', // <= Page URL
				component: PlancomptableComponent // <= Page component registration
			  },
			//   {
			// 	path: 'kt-plancomptable', // <= Page URL
			// 	component: PlancomptableComponent // <= Page component registration
			//   },
			  {
				path: 'kt-liassechoicepage', // <= Page URL
				component: LiassechoicepageComponent // <= Page component registration
			  },
			  {
				path: 'kt-liassechoicepage/:myparam_company/:id', // <= Page URL
				component: LiassechoicepageComponent // <= Page component registration
			  },
			  
			  {
				path: 'kt-tableauliasse', // <= Page URL
				component: TableauliasseComponent // <= Page component registration
			  },
			  {
				path: 'kt-balance', // <= Page URL
				component: BalanceComponent // <= Page component registration
			  },
			  {
				path: 'kt-balance/:myparam_company/:id', // <= Page URL
				component: BalanceComponent // <= Page component registration
			  },
			  {
				path: 'kt-tableauliasse/:myparam_company/:id', // <= Page URL
				component:  TableauliasseComponent // <= Page component registration
			  },
			  {
				path: 'kt-tableauliasse/:myparam_company/:id/:form_short_title.id', // <= Page URL
				component:  TableauliasseComponent // <= Page component registration
			  },
	
			  {
				path: 'kt-parametr_tableauliasse/1/1', // <= Page URL
				component:  ParametreTableauliasseComponent // <= Page component registration
			  },
		
			  {
				path: 'kt-collaboratif', // <= Page URL
				component:  Component1Component // <= Page component registration
			  },
			  {
				path: 'kt-dotation', // <= Page URL
				component: DotationComponent // <= Page component registration
			  },
			  {
				path: 'exercice-jibayatva', // <= Page URL
				component: JibayatvaExercicesComponent // <= Page component registration
			  },
			  {
				path: 'jb-jibayatva/:regimetva', // <= Page URL
				component: JbJibayatvaComponent // <= Page component registration
			  },
			//   {
			// 	path: 'jb-jibayatva/Mensuel', // <= Page URL
			// 	component: JbJibayatvaComponent // <= Page component registration
			//   },
			  {
				path: 'jb-jibayatva', // <= Page URL
				component: JbJibayatvaComponent // <= Page component registration
			  },
			  {
				path: 'exercice-jibayatva/:id', // <= Page URL
				component: JibayatvaExercicesComponent // <= Page component registration
			  },
			  {
				path: 'kt-jbtva-table', // <= Page URL
				component: JbtvaTableComponent // <= Page component registration
			  },
			  {
				path: 'kt-jibayasalaire', // <= Page URL
				component: JibayasalaireComponent // <= Page component registration
			  },
			  {
				path: 'kt-jibayaimmo', // <= Page URL
				component: JibayaimmoComponent // <= Page component registration
			  },
			  {
				path: 'kt-jibayacompta', // <= Page URL
				component: JibayacomptaComponent // <= Page component registration
			  },
			  {
				path: 'kt-jibayabudget', // <= Page URL
				component: JibayabudgetComponent // <= Page component registration
			  },
			  {
				path: 'kt-jibayadoc',
				component: ngFmComponent
			},
			{
				path: 'kt-plancomptable',
				component: PlancomptableComponent
			},
			
			{
				path: 'sidenav',
				component: SidenavComponent
			},
			  {
				path: 'kt-jibayacoll', // <= Page URL
				component: JibayacollComponent // <= Page component registration
			  },
			//   {
			// 	path: 'kt-jibayadoc', // <= Page URL
			// 	component: JibayadocComponent // <= Page component registration
			//   },
			{
				path: 'mail',
				loadChildren: 'app/views/pages/apps/mail/mail.module#MailModule'
			},
			{
				path: 'ecommerce',
				loadChildren: 'app/views/pages/apps/e-commerce/e-commerce.module#ECommerceModule',
				// canActivate: [NgxPermissionsGuard],
				// data: {
				// 	permissions: {
				// 		only: ['accessToECommerceModule'],
				// 		redirectTo: 'error/403'
				// 	}
				// }
			},
			{
				path: 'ngbootstrap',
				loadChildren: 'app/views/pages/ngbootstrap/ngbootstrap.module#NgbootstrapModule'
			},
			{
				path: 'ng-chat',
				loadChildren: 'app/views/pages/ng-chat/ng-chat.module#NgChatModule'
			},
		
			{
				path: 'material',
				loadChildren: 'app/views/pages/material/material.module#MaterialModule'
			},
			{
				path: 'user-management',
				loadChildren: 'app/views/pages/user-management/user-management.module#UserManagementModule'
			},
			{
				path: 'builder',
				loadChildren: 'app/views/themes/demo2/content/builder/builder.module#BuilderModule'
			},
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					'type': 'error-v6',
					'code': 403,
					'title': '403... Access forbidden',
					'desc': 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
				}
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'dashboard', pathMatch: 'full'},

			{
				path: 'files/public',
				children: [
				  {
					path: '**',
					component: NgfmRouteComponent,
					data: {
					  angularRoot: ['files/public'],
					  root: ['public']
					},
					resolve: {
					//   config: ConfigResolverService
					}
				  }
				]
			  },
			  {
				path: 'files/private',
				children: [
				  {
					path: '**',
					component: NgfmRouteComponent,
					data: {
					  angularRoot: ['files/private'],
					  config: { perms: NgfmPerms.ALL }
					},
					resolve: {
					//   root: PrivateRouteService
					}
				  }
				]
			  },
			  {
				path: '**',
				redirectTo: 'files/private',
				pathMatch: 'full'
			  },
		]
	},
	// {
	// 	path: 'files/public',
	// 	children: [
	// 	  {
	// 		path: '**',
	// 		component: NgfmRouteComponent,
	// 		data: {
	// 		  angularRoot: ['/files/public'],
	// 		  root: ['public']
	// 		},
	// 		resolve: {
	// 		  config: ConfigResolverService
	// 		}
	// 	  }
	// 	]
	//   },
	//   {
	// 	path: 'files/private',
	// 	children: [
	// 	  {
	// 		path: '**',
	// 		component: NgfmRouteComponent,
	// 		data: {
	// 		  angularRoot: ['/files/private'],
	// 		  config: { perms: NgfmPerms.ALL }
	// 		},
	// 		resolve: {
	// 		  root: PrivateRouteService
	// 		}
	// 	  }
	// 	]
	//   },
	//   {
	// 	path: '**',
	// 	redirectTo: 'files/private',
	// 	pathMatch: 'full'
	//   },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {
}
