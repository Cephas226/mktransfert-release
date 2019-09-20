(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-themes-demo2-content-builder-builder-module"],{

/***/ "./src/app/views/themes/demo2/content/builder/builder.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/themes/demo2/content/builder/builder.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tThe layout builder helps to configure the layout with preferred options and preview it in real time.\r\n\tThe configured layout options will be saved until you change or reset them.\r\n\tTo use the layout builder choose the layout options and click the <code>Preview</code> button to preview the changes.\t<a class=\"kt-link\" href=\"https://ng-bootstrap.github.io/#/components/progressbar/examples\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<form class=\"kt-form kt-form--label-right\" novalidate #form=\"ngForm\" (ngSubmit)=\"submitPreview($event)\">\r\n\t<kt-portlet [class]=\"'kt-portlet--tabs'\">\r\n\t\t<kt-portlet-header [noTitle]=\"true\">\r\n\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t<ul ktTabClickEvent class=\"nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-left nav-tabs-line-primary\" role=\"tablist\">\r\n\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-1')\" class=\"nav-link active\" href=\"javascript:;\" role=\"tab\">\r\n\t\t\t\t\t\t\tPage\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-2')\" class=\"nav-link\" href=\"javascript:;\" role=\"tab\">\r\n\t\t\t\t\t\t\tHeader\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-3')\" class=\"nav-link\" href=\"javascript:;\" role=\"tab\">\r\n\t\t\t\t\t\t\tAside\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</ng-container>\r\n\t\t</kt-portlet-header>\r\n\t\t<kt-portlet-body>\r\n\t\t\t<ngb-tabset #tab=\"ngbTabset\">\r\n\t\t\t\t<ngb-tab id=\"tab-id-1\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\r\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Page Loader:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-6\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[loader][type]\" [(ngModel)]=\"model.loader.type\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Disabled</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"default\">Spinner</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"spinner-message\">Spinner & Message</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"spinner-logo\">Spinner & Logo</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select page loading indicator</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Page Width:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-6\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[width]\" [(ngModel)]=\"model.width\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"fixed\">Fixed</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"fluid\">Fluid</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select page width type</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<ngb-tab id=\"tab-id-2\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\r\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Fixed Desktop Header:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-6\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t        <input type=\"checkbox\" name=\"builder[header][self][fixed][desktop][enabled]\" [(ngModel)]=\"model.header.self.fixed.desktop.enabled\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t        <span></span>\r\n\t\t\t\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Enable fixed header for desktop mode</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Minimize Desktop Header:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-6\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[header][self][fixed][desktop][mode]\" [(ngModel)]=\"model.header.self.fixed.desktop.mode\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">Display Topbar & Menu</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"topbar\">Display Topbar Only</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"menu\">Display Menu Only</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Enable desktop header minimize mode on scroll(display either <code>Topbar</code>, <code>Menu</code> or both). Works only when <code>Desktop Fixed Header</code> option\r\n\t\t\t\t\t\t\t\t\t\t\tenabled\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Fixed Mobile Header:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-6\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[header][self][fixed][mobile]\" [(ngModel)]=\"model.header.self.fixed.mobile\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t        <span></span>\r\n\t\t\t\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Enable fixed header for mobile mode</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<ngb-tab id=\"tab-id-3\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\r\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Display:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-6\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][self][display]\" [(ngModel)]=\"model.aside.self.display\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t        <span></span>\r\n\t\t\t\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Display aside menu</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Fixed:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][self][fixed]\" [(ngModel)]=\"model.aside.self.fixed\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t        <span></span>\r\n\t\t\t\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Set fixed aside layout</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t</ngb-tabset>\r\n\t\t</kt-portlet-body>\r\n\t\t<kt-portlet-footer>\r\n\t\t\t<div class=\"kt-form__actions\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-4\"></div>\r\n\t\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t\t<button type=\"submit\" name=\"builder_submit\" class=\"btn btn-primary\">\r\n\t\t\t\t\t\t\t<i class=\"la la-eye\"></i>\r\n\t\t\t\t\t\t\tPreview\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t&nbsp;\r\n\t\t\t\t\t\t<button type=\"submit\" (click)=\"resetPreview($event)\" name=\"builder_reset\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\t\t<i class=\"la la-recycle\"></i>\r\n\t\t\t\t\t\t\tReset\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-portlet-footer>\r\n\t</kt-portlet>\r\n</form>\r\n\r\n<kt-portlet>\r\n\t<kt-portlet-header [title]=\"'Generated Config <small>can be used for layout config in <code>/src/app/config/demo2/layout.config.ts</code></small>'\">\r\n\t</kt-portlet-header>\r\n\t<kt-portlet-body>\r\n\t\t<div perfectScrollbar [ngStyle]=\"{'max-height': '50vh', 'position': 'relative'}\">\r\n\t\t\t<pre><code [highlight]=\"model|json\"></code></pre>\r\n\t\t</div>\r\n\t</kt-portlet-body>\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/themes/demo2/content/builder/builder.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/views/themes/demo2/content/builder/builder.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG93bmxvYWRzL0pJQkFZQS1QUk9KRUNULW1hc3RlciAyL3NyYy9hcHAvdmlld3MvdGhlbWVzL2RlbW8yL2NvbnRlbnQvYnVpbGRlci9idWlsZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0csYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdGhlbWVzL2RlbW8yL2NvbnRlbnQvYnVpbGRlci9idWlsZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdDo6bmctZGVlcCB7XHJcblx0XHRuZ2ItdGFic2V0ID4gLm5hdi10YWJzIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/themes/demo2/content/builder/builder.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/themes/demo2/content/builder/builder.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// Layout
var layout_1 = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
var BuilderComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    function BuilderComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BuilderComponent.prototype.ngOnInit = function () {
        this.model = this.layoutConfigService.getConfig();
    };
    /**
     * Reset preview
     *
     * @param e: Event
     */
    BuilderComponent.prototype.resetPreview = function (e) {
        e.preventDefault();
        this.layoutConfigService.resetConfig();
        location.reload();
    };
    /**
     * Submit preview
     *
     * @param e: Event
     */
    BuilderComponent.prototype.submitPreview = function (e) {
        this.layoutConfigService.setConfig(this.model, true);
        location.reload();
    };
    __decorate([
        core_1.ViewChild('form'),
        __metadata("design:type", forms_1.NgForm)
    ], BuilderComponent.prototype, "form", void 0);
    BuilderComponent = __decorate([
        core_1.Component({
            selector: 'kt-builder',
            template: __webpack_require__(/*! ./builder.component.html */ "./src/app/views/themes/demo2/content/builder/builder.component.html"),
            styles: [__webpack_require__(/*! ./builder.component.scss */ "./src/app/views/themes/demo2/content/builder/builder.component.scss")]
        }),
        __metadata("design:paramtypes", [layout_1.LayoutConfigService])
    ], BuilderComponent);
    return BuilderComponent;
}());
exports.BuilderComponent = BuilderComponent;


/***/ }),

/***/ "./src/app/views/themes/demo2/content/builder/builder.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/themes/demo2/content/builder/builder.module.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// NgBootstrap
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
// Perfect Scrollbar
var ngx_perfect_scrollbar_1 = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
// Partials
var partials_module_1 = __webpack_require__(/*! ../../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
// Highlight JS
var ngx_highlightjs_1 = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
// CoreModule
var core_module_1 = __webpack_require__(/*! ../../../../../core/core.module */ "./src/app/core/core.module.ts");
// Builder component
var builder_component_1 = __webpack_require__(/*! ./builder.component */ "./src/app/views/themes/demo2/content/builder/builder.component.ts");
var BuilderModule = /** @class */ (function () {
    function BuilderModule() {
    }
    BuilderModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                partials_module_1.PartialsModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                material_1.MatTabsModule,
                core_module_1.CoreModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                ngx_highlightjs_1.HighlightModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: builder_component_1.BuilderComponent
                    }
                ])
            ],
            providers: [],
            declarations: [builder_component_1.BuilderComponent]
        })
    ], BuilderModule);
    return BuilderModule;
}());
exports.BuilderModule = BuilderModule;


/***/ })

}]);
//# sourceMappingURL=app-views-themes-demo2-content-builder-builder-module.js.map