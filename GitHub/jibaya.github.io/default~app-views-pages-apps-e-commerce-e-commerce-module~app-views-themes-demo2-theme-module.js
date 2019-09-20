(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-views-pages-apps-e-commerce-e-commerce-module~app-views-themes-demo2-theme-module"],{

/***/ "./src/app/views/pages/apps/e-commerce/customers/customer-edit/customer-edit.dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/customers/customer-edit/customer-edit.dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\"\r\n\t[ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"customerForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"30000\" [showCloseButton]=\"true\" (close)=\"onAlertClose($event)\">\r\n\t\t\t\tOh snap! Change a few things up and try submitting again.\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"Enter First Name\" formControlName=\"firstName\" />\r\n\t\t\t\t\t\t<mat-error>First Name is\r\n\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t<strong>First Name</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"Enter Last Name\" formControlName=\"lastName\" />\r\n\t\t\t\t\t\t<mat-error>Last Name is\r\n\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t<strong>Last Name</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"Enter Login\" formControlName=\"userName\" />\r\n\t\t\t\t\t\t<mat-error>Login is\r\n\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t<strong>Login</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input type=\"email\" matInput placeholder=\"Enter Email\" formControlName=\"email\" />\r\n\t\t\t\t\t\t<mat-error>Email is\r\n\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t<strong>Email</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker\"\r\n\t\t\t\t\t\t\tplaceholder=\"Choose a Date of Birth\"\r\n\t\t\t\t\t\t\tformControlName=\"dob\" />\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker></mat-datepicker>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t<strong>Date of Birth</strong> in 'mm/dd/yyyy' format</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input type=\"email\" matInput placeholder=\"Enter IP Address\" formControlName=\"ipAddress\" />\r\n\t\t\t\t\t\t<mat-error>IP Address\r\n\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">We'll never share customer\r\n\t\t\t\t\t\t\t<strong>IP Address</strong> with anyone else</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"Gender\" formControlName=\"gender\">\r\n\t\t\t\t\t\t\t<mat-option value=\"Female\">Female</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"Male\">Male</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>Gender</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"Type\" formControlName=\"type\">\r\n\t\t\t\t\t\t\t<mat-option value=\"0\">Business</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"1\">Individual</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>Account Type</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid\">\r\n\t\t\t\t<div class=\"row text-right\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" mat-raised-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial matTooltip=\"Cancel changes\">\r\n\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button type=\"button\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"Save changes\">\r\n\t\t\t\t\t\t\tSave\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/customers/customer-edit/customer-edit.dialog.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/customers/customer-edit/customer-edit.dialog.component.ts ***!
  \*******************************************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// Material
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// CRUD
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
// Services and Models
var e_commerce_1 = __webpack_require__(/*! ../../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
var CustomerEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<CustomerEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param typesUtilsService: TypesUtilsService
     */
    function CustomerEditDialogComponent(dialogRef, data, fb, store, typesUtilsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.typesUtilsService = typesUtilsService;
        this.hasFormErrors = false;
        this.viewLoading = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    CustomerEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(store_1.select(e_commerce_1.selectCustomersActionLoading)).subscribe(function (res) { return _this.viewLoading = res; });
        this.customer = this.data.customer;
        this.createForm();
    };
    /**
     * On destroy
     */
    CustomerEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    CustomerEditDialogComponent.prototype.createForm = function () {
        this.customerForm = this.fb.group({
            firstName: [this.customer.firstName, forms_1.Validators.required],
            lastName: [this.customer.lastName, forms_1.Validators.required],
            email: [this.customer.email, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email])],
            dob: [this.typesUtilsService.getDateFromString(this.customer.dateOfBbirth), forms_1.Validators.compose([forms_1.Validators.nullValidator])],
            userName: [this.customer.userName, forms_1.Validators.compose([forms_1.Validators.required])],
            gender: [this.customer.gender, forms_1.Validators.compose([forms_1.Validators.required])],
            ipAddress: [this.customer.ipAddress, forms_1.Validators.compose([forms_1.Validators.required])],
            type: [this.customer.type.toString(), forms_1.Validators.compose([forms_1.Validators.required])]
        });
    };
    /**
     * Returns page title
     */
    CustomerEditDialogComponent.prototype.getTitle = function () {
        if (this.customer.id > 0) {
            return "Edit customer '" + this.customer.firstName + " " + this.customer.lastName + "'";
        }
        return 'New customer';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    CustomerEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.customerForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    /**
     * Returns prepared customer
     */
    CustomerEditDialogComponent.prototype.prepareCustomer = function () {
        var controls = this.customerForm.controls;
        var _customer = new e_commerce_1.CustomerModel();
        _customer.id = this.customer.id;
        var _date = controls['dob'].value;
        if (_date) {
            _customer.dateOfBbirth = this.typesUtilsService.dateFormat(_date);
        }
        else {
            _customer.dateOfBbirth = '';
        }
        _customer.firstName = controls['firstName'].value;
        _customer.lastName = controls['lastName'].value;
        _customer.email = controls['email'].value;
        _customer.userName = controls['userName'].value;
        _customer.gender = controls['gender'].value;
        _customer.ipAddress = controls['ipAddress'].value;
        _customer.type = +controls['type'].value;
        _customer.status = this.customer.status;
        return _customer;
    };
    /**
     * On Submit
     */
    CustomerEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.customerForm.controls;
        /** check form */
        if (this.customerForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var editedCustomer = this.prepareCustomer();
        if (editedCustomer.id > 0) {
            this.updateCustomer(editedCustomer);
        }
        else {
            this.createCustomer(editedCustomer);
        }
    };
    /**
     * Update customer
     *
     * @param _customer: CustomerModel
     */
    CustomerEditDialogComponent.prototype.updateCustomer = function (_customer) {
        var _this = this;
        var updateCustomer = {
            id: _customer.id,
            changes: _customer
        };
        this.store.dispatch(new e_commerce_1.CustomerUpdated({
            partialCustomer: updateCustomer,
            customer: _customer
        }));
        // Remove this line
        rxjs_1.of(undefined).pipe(operators_1.delay(1000)).subscribe(function () { return _this.dialogRef.close({ _customer: _customer, isEdit: true }); });
        // Uncomment this line
        // this.dialogRef.close({ _customer, isEdit: true }
    };
    /**
     * Create customer
     *
     * @param _customer: CustomerModel
     */
    CustomerEditDialogComponent.prototype.createCustomer = function (_customer) {
        var _this = this;
        this.store.dispatch(new e_commerce_1.CustomerOnServerCreated({ customer: _customer }));
        this.componentSubscriptions = this.store.pipe(store_1.select(e_commerce_1.selectLastCreatedCustomerId), operators_1.delay(1000)).subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.dialogRef.close({ _customer: _customer, isEdit: false });
        });
    };
    /** Alect Close event */
    CustomerEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    CustomerEditDialogComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'kt-customers-edit-dialog',
            template: __webpack_require__(/*! ./customer-edit.dialog.component.html */ "./src/app/views/pages/apps/e-commerce/customers/customer-edit/customer-edit.dialog.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, forms_1.FormBuilder,
            store_1.Store,
            crud_1.TypesUtilsService])
    ], CustomerEditDialogComponent);
    return CustomerEditDialogComponent;
}());
exports.CustomerEditDialogComponent = CustomerEditDialogComponent;


/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/e-commerce.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/e-commerce.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/e-commerce.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/e-commerce.component.ts ***!
  \*********************************************************************/
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
var ECommerceComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param router: Router
     */
    function ECommerceComponent() {
    }
    /*
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
    */
    /**
     * On init
     */
    ECommerceComponent.prototype.ngOnInit = function () { };
    ECommerceComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./e-commerce.component.html */ "./src/app/views/pages/apps/e-commerce/e-commerce.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ECommerceComponent);
    return ECommerceComponent;
}());
exports.ECommerceComponent = ECommerceComponent;


/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/e-commerce.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/e-commerce.module.ts ***!
  \******************************************************************/
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
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
// Fake API Angular-in-memory
var angular_in_memory_web_api_1 = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
// Translate Module
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var effects_1 = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
// UI
var partials_module_1 = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
// Core
var metronic_1 = __webpack_require__(/*! ../../../../core/_base/metronic */ "./src/app/core/_base/metronic/index.ts");
// Auth
var auth_1 = __webpack_require__(/*! ../../../../core/auth */ "./src/app/core/auth/index.ts");
// Core => Services
var e_commerce_1 = __webpack_require__(/*! ../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
// Core => Utils
var crud_1 = __webpack_require__(/*! ../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
// Shared
var crud_2 = __webpack_require__(/*! ../../../partials/content/crud */ "./src/app/views/partials/content/crud/index.ts");
// Components
var e_commerce_component_1 = __webpack_require__(/*! ./e-commerce.component */ "./src/app/views/pages/apps/e-commerce/e-commerce.component.ts");
// Customers
// import { CustomersListComponent } from './customers/customers-list/customers-list.component';
// import { CustomerEditDialogComponent } from './customers/customer-edit/customer-edit.dialog.component';
// Products
var products_list_component_1 = __webpack_require__(/*! ./products/products-list/products-list.component */ "./src/app/views/pages/apps/e-commerce/products/products-list/products-list.component.ts");
var product_edit_component_1 = __webpack_require__(/*! ./products/product-edit/product-edit.component */ "./src/app/views/pages/apps/e-commerce/products/product-edit/product-edit.component.ts");
var remarks_list_component_1 = __webpack_require__(/*! ./products/_subs/remarks/remarks-list/remarks-list.component */ "./src/app/views/pages/apps/e-commerce/products/_subs/remarks/remarks-list/remarks-list.component.ts");
var specifications_list_component_1 = __webpack_require__(/*! ./products/_subs/specifications/specifications-list/specifications-list.component */ "./src/app/views/pages/apps/e-commerce/products/_subs/specifications/specifications-list/specifications-list.component.ts");
var specification_edit_dialog_component_1 = __webpack_require__(/*! ./products/_subs/specifications/specification-edit/specification-edit-dialog.component */ "./src/app/views/pages/apps/e-commerce/products/_subs/specifications/specification-edit/specification-edit-dialog.component.ts");
// Orders
var orders_list_component_1 = __webpack_require__(/*! ./orders/orders-list/orders-list.component */ "./src/app/views/pages/apps/e-commerce/orders/orders-list/orders-list.component.ts");
var order_edit_component_1 = __webpack_require__(/*! ./orders/order-edit/order-edit.component */ "./src/app/views/pages/apps/e-commerce/orders/order-edit/order-edit.component.ts");
// Material
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var environment_1 = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var ngx_permissions_1 = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
var customer_edit_dialog_component_1 = __webpack_require__(/*! ./customers/customer-edit/customer-edit.dialog.component */ "./src/app/views/pages/apps/e-commerce/customers/customer-edit/customer-edit.dialog.component.ts");
// tslint:disable-next-line:class-name
var routes = [
    {
        path: '',
        component: e_commerce_component_1.ECommerceComponent,
        // canActivate: [ModuleGuard],
        // data: { moduleName: 'ecommerce' },
        children: [
            {
                path: '',
                redirectTo: 'customers',
                pathMatch: 'full'
            },
            {
                path: 'customers',
            },
            {
                path: 'orders',
                component: orders_list_component_1.OrdersListComponent
            },
            {
                path: 'products',
                component: products_list_component_1.ProductsListComponent,
            },
            {
                path: 'products/add',
                component: product_edit_component_1.ProductEditComponent
            },
            {
                path: 'products/edit',
                component: product_edit_component_1.ProductEditComponent
            },
            {
                path: 'products/edit/:id',
                component: product_edit_component_1.ProductEditComponent
            },
        ]
    }
];
var ECommerceModule = /** @class */ (function () {
    function ECommerceModule() {
    }
    ECommerceModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MatDialogModule,
                common_1.CommonModule,
                http_1.HttpClientModule,
                partials_module_1.PartialsModule,
                ngx_permissions_1.NgxPermissionsModule.forChild(),
                router_1.RouterModule.forChild(routes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                core_2.TranslateModule.forChild(),
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatSelectModule,
                material_1.MatInputModule,
                material_1.MatTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatRadioModule,
                material_1.MatIconModule,
                material_1.MatNativeDateModule,
                material_1.MatProgressBarModule,
                material_1.MatDatepickerModule,
                material_1.MatCardModule,
                material_1.MatPaginatorModule,
                material_1.MatSortModule,
                material_1.MatCheckboxModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatSnackBarModule,
                material_1.MatTabsModule,
                material_1.MatTooltipModule,
                ng_bootstrap_1.NgbProgressbarModule,
                environment_1.environment.isMockEnabled ? angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forFeature(metronic_1.FakeApiService, {
                    passThruUnknownUrl: true,
                    dataEncapsulation: false
                }) : [],
                store_1.StoreModule.forFeature('products', e_commerce_1.productsReducer),
                effects_1.EffectsModule.forFeature([e_commerce_1.ProductEffects]),
                store_1.StoreModule.forFeature('customers', e_commerce_1.customersReducer),
                effects_1.EffectsModule.forFeature([e_commerce_1.CustomerEffects]),
                store_1.StoreModule.forFeature('productRemarks', e_commerce_1.productRemarksReducer),
                effects_1.EffectsModule.forFeature([e_commerce_1.ProductRemarkEffects]),
                store_1.StoreModule.forFeature('productSpecifications', e_commerce_1.productSpecificationsReducer),
                effects_1.EffectsModule.forFeature([e_commerce_1.ProductSpecificationEffects]),
            ],
            providers: [
                auth_1.ModuleGuard,
                crud_1.InterceptService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: crud_1.InterceptService,
                    multi: true
                },
                {
                    provide: material_1.MAT_DIALOG_DEFAULT_OPTIONS,
                    useValue: {
                        hasBackdrop: true,
                        panelClass: 'kt-mat-dialog-container__wrapper',
                        height: 'auto',
                        width: '900px'
                    }
                },
                crud_1.TypesUtilsService,
                crud_1.LayoutUtilsService,
                crud_1.HttpUtilsService,
                e_commerce_1.CustomersService,
                e_commerce_1.ProductRemarksService,
                e_commerce_1.ProductSpecificationsService,
                e_commerce_1.ProductsService,
                crud_1.TypesUtilsService,
                crud_1.LayoutUtilsService
            ],
            entryComponents: [
                crud_2.ActionNotificationComponent,
                // CustomerEditDialogComponent,
                crud_2.DeleteEntityDialogComponent,
                crud_2.FetchEntityDialogComponent,
                crud_2.UpdateStatusDialogComponent,
                specification_edit_dialog_component_1.SpecificationEditDialogComponent
            ],
            declarations: [
                customer_edit_dialog_component_1.CustomerEditDialogComponent,
                e_commerce_component_1.ECommerceComponent,
                // Customers
                // CustomersListComponent,
                // CustomerEditDialogComponent,
                // Orders
                orders_list_component_1.OrdersListComponent,
                order_edit_component_1.OrderEditComponent,
                // Products
                products_list_component_1.ProductsListComponent,
                product_edit_component_1.ProductEditComponent,
                remarks_list_component_1.RemarksListComponent,
                specifications_list_component_1.SpecificationsListComponent,
                specification_edit_dialog_component_1.SpecificationEditDialogComponent
            ]
        })
    ], ECommerceModule);
    return ECommerceModule;
}());
exports.ECommerceModule = ECommerceModule;


/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/orders/order-edit/order-edit.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/orders/order-edit/order-edit.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "order edit"

/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/orders/order-edit/order-edit.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/orders/order-edit/order-edit.component.ts ***!
  \***************************************************************************************/
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
var OrderEditComponent = /** @class */ (function () {
    function OrderEditComponent() {
    }
    OrderEditComponent = __decorate([
        core_1.Component({
            selector: 'kt-order-edit',
            template: __webpack_require__(/*! ./order-edit.component.html */ "./src/app/views/pages/apps/e-commerce/orders/order-edit/order-edit.component.html")
        })
    ], OrderEditComponent);
    return OrderEditComponent;
}());
exports.OrderEditComponent = OrderEditComponent;


/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/orders/orders-list/orders-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/orders/orders-list/orders-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n\t<b>Orders:</b> - Coming soon in the following update.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/orders/orders-list/orders-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/orders/orders-list/orders-list.component.ts ***!
  \*****************************************************************************************/
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
var OrdersListComponent = /** @class */ (function () {
    function OrdersListComponent() {
    }
    OrdersListComponent = __decorate([
        core_1.Component({
            selector: 'kt-orders-list',
            template: __webpack_require__(/*! ./orders-list.component.html */ "./src/app/views/pages/apps/e-commerce/orders/orders-list/orders-list.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], OrdersListComponent);
    return OrdersListComponent;
}());
exports.OrdersListComponent = OrdersListComponent;


/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/products/_subs/remarks/remarks-list/remarks-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/products/_subs/remarks/remarks-list/remarks-list.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start::FILTERS & GROUP ACTIONS -->\r\n<div class=\"kt-form\">\r\n\t<!-- start::FILTERS -->\r\n\t<div class=\"kt-form__filtration\">\r\n\t\t<div class=\"row align-items-center\">\r\n\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t<input matInput placeholder=\"Search product remark\" #searchInput placeholder=\"Search\">\r\n\t\t\t\t\t<mat-hint align=\"start\">Search in all fields</mat-hint>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-8 kt-margin-bottom-10-mobile\"></div>\r\n\t\t\t<div class=\"col-md-2 text-right kt-margin-bottom-10-mobile\">\r\n\t\t\t\t<button type=\"button\"\r\n\t\t\t\t\t(click)=\"addRemarkButtonOnClick()\"\r\n\t\t\t\t\tmat-raised-button\r\n\t\t\t\t\tcolor=\"primary\"\r\n\t\t\t\t\tmatTooltip=\"Create new remark\"\r\n\t\t\t\t\t[disabled]=\"remarkForAdd._isEditMode || isSwitchedToEditMode\">New remark</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- end::FILTERS -->\r\n\r\n\t<!-- start::GROUP ACTIONS -->\r\n\t<!-- Group actions list: 'Delete selected' | 'Fetch selected' | 'Update status for selected' -->\r\n\t<!-- Group actions are shared for all LISTS | See '../../_shared' folder -->\r\n\t<div class=\"row align-items-center collapse kt-form__group-actions kt-margin-bottom-20\" [ngClass]=\"{'show' : selection.selected.length > 0}\">\r\n\t\t<div class=\"col-xl-12\">\r\n\t\t\t<div class=\"kt-form__group kt-form__group--inline\">\r\n\t\t\t\t<div class=\"kt-form__label kt-form__label-no-wrap\">\r\n\t\t\t\t\t<label class=\"kt--font-bold kt-font-danger-\">Selected records count: {{ selection.selected.length }}</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"kt-form__control kt-form__group--inline\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<button mat-raised-button color=\"accent\" (click)=\"deleteRemarks()\" matTooltip=\"Delete selected remarks\">Delete All</button>\r\n\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;\r\n\t\t\t\t\t\t<button mat-raised-button color=\"warn\" (click)=\"fetchRemarks()\" matTooltip=\"Fetch selected remarks\">Fetch Selected Records</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t <!-- end::GROUP ACTIONS -->\r\n\r\n</div>\r\n<!-- end::FILTERS & GROUP ACTIONS -->\r\n\r\n<!-- MATERIAL TABLE | Binded to datasources -->\r\n<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n<div class=\"mat-table__wrapper\">\r\n\t<form [formGroup]=\"formGroup\">\r\n\t\t<mat-table class=\"lmat-elevation-z8\" [dataSource]=\"dataSource\" matSort matSortActive=\"text\" matSortDirection=\"asc\" matSortDisableClear>\r\n\t\t\t<!-- Checkbox Column -->\r\n\t\t\t<!-- Table with selection -->\r\n\t\t\t<!-- https://run.stackblitz.com/api/angular/v1?file=app%2Ftable-selection-example.ts -->\r\n\t\t\t<ng-container matColumnDef=\"add-select\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column mat-column-checkbox\">\r\n\t\t\t\t\t<span *ngIf=\"remarkForAdd._isEditMode\">New remark:</span>\r\n\t\t\t\t</mat-header-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<ng-container matColumnDef=\"add-id\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column mat-column-id\"></mat-header-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<ng-container matColumnDef=\"add-text\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column mat-column-main\">\r\n\t\t\t\t\t<mat-form-field *ngIf=\"remarkForAdd._isEditMode\" class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"Enter Remark text\" formControlName=\"newText\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t<strong>Text</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</mat-header-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<ng-container matColumnDef=\"add-type\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column\">\r\n\t\t\t\t\t<mat-form-field *ngIf=\"remarkForAdd._isEditMode\" class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"Type\" formControlName=\"newType\">\r\n\t\t\t\t\t\t\t<mat-option value=\"0\">Info</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"1\">Note</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"2\">Reminder</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>Select remark type</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</mat-header-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<ng-container matColumnDef=\"add-dueDate\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column\">\r\n\t\t\t\t\t<mat-form-field *ngIf=\"remarkForAdd._isEditMode\" class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"addPicker\" \r\n\t\t\t\t\t\t\tplaceholder=\"Choose a Due Date\" \r\n\t\t\t\t\t\t\tformControlName=\"newDueDate\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"addPicker\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #addPicker></mat-datepicker>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t<strong>Due Date</strong> in 'mm/dd/yyyy' format\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</mat-header-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<ng-container matColumnDef=\"add-actions\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column mat-column-actions\">\r\n\t\t\t\t\t<span  class=\"mat-column-actions-wrapper\" *ngIf=\"remarkForAdd._isEditMode\">\r\n\t\t\t\t\t\t<button *ngIf=\"!loadingAfterSubmit\"\r\n\t\t\t\t\t\t\tmat-icon-button \r\n\t\t\t\t\t\t\tcolor=\"{{checkAddForm() ? 'primary' : 'accent'}}\" \r\n\t\t\t\t\t\t\ttype=\"button\" \r\n\t\t\t\t\t\t\t(click)=\"saveNewRemark()\" \r\n\t\t\t\t\t\t\tmatTooltip=\"Save new remark\">\r\n\t\t\t\t\t\t\t<mat-icon>done</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<mat-spinner *ngIf=\"loadingAfterSubmit\" [diameter]=\"20\"></mat-spinner>\r\n\t\t\t\t\t\t&nbsp;\r\n\t\t\t\t\t\t<button type=\"button\" \r\n\t\t\t\t\t\t\tmat-icon-button \r\n\t\t\t\t\t\t\tcolor=\"wan\" \r\n\t\t\t\t\t\t\t(click)=\"cancelAddButtonOnClick()\" \r\n\t\t\t\t\t\t\tmatTooltip=\"Cancel changes\">\r\n\t\t\t\t\t\t\t<mat-icon>clear</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</mat-header-cell>\r\n\t\t\t</ng-container>\r\n\t\t\t<!-- end: ADD row -->\r\n\r\n\t\t\t<!-- begin: EDIT row -->\r\n\t\t\t<!-- Checkbox Column -->\r\n\t\t\t<!-- Table with selection -->\r\n\t\t\t<!-- https://run.stackblitz.com/api/angular/v1?file=app%2Ftable-selection-example.ts -->\r\n\t\t\t<ng-container matColumnDef=\"select\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column mat-column-checkbox\">\r\n\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n\t\t\t\t\t\t[checked]=\"selection.hasValue() && isAllSelected()\"\r\n\t\t\t\t\t\t[indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n\t\t\t\t\t\t[color]=\"'primary'\">\r\n\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t</mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let row\" class=\"mat-column mat-column-checkbox\">\r\n\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\"\r\n\t\t\t\t\t\t(change)=\"$event ? selection.toggle(row) : null\"\r\n\t\t\t\t\t\t[checked]=\"selection.isSelected(row)\"\r\n\t\t\t\t\t\t[color]=\"'primary'\">\r\n\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t</mat-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"mat-column mat-column-id\">ID</mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let remark\" class=\"mat-column mat-column-id\">\r\n\t\t\t\t\t<span>{{remark.id}}</span>\r\n\t\t\t\t</mat-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<ng-container matColumnDef=\"text\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"mat-column mat-column-main\">Text</mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let remark\" class=\"mat-column mat-column-main\">\r\n\t\t\t\t\t<mat-form-field *ngIf=\"remark._isEditMode\" class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"Enter Remark text\" formControlName=\"editText\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t<strong>Text</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<span *ngIf=\"!remark._isEditMode\">{{remark.text}}</span>\r\n\t\t\t\t</mat-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<ng-container matColumnDef=\"type\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"mat-column\">Type</mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let remark\" class=\"mat-column\">\r\n\t\t\t\t\t<span *ngIf=\"!remark._isEditMode\">{{getTypeStr(remark)}}</span>\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\" *ngIf=\"remark._isEditMode\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"Type\" formControlName=\"editType\">\r\n\t\t\t\t\t\t\t<mat-option value=\"0\">Info</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"1\">Note</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"2\">Reminder</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>Select remark type</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</mat-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<ng-container matColumnDef=\"dueDate\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"mat-column\">Due date</mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let remark\" class=\"mat-column\">\r\n\t\t\t\t\t<span *ngIf=\"!remark._isEditMode\">{{remark.dueDate}}</span>\r\n\t\t\t\t\t<span *ngIf=\"remark._isEditMode\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"editPicker\" placeholder=\"Choose a Due Date\" formControlName=\"editDueDate\">\r\n\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"editPicker\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t<mat-datepicker #editPicker></mat-datepicker>\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t<strong>Due Date</strong> in 'mm/dd/yyyy' format\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</mat-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column mat-column-actions\">\r\n\t\t\t\t\tActions\r\n\t\t\t\t</mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let remark\" class=\"mat-column mat-column-actions\">\r\n\t\t\t\t\t<button *ngIf=\"!remark._isEditMode\" \r\n\t\t\t\t\t\t[disabled]=\"isSwitchedToEditMode\" \r\n\t\t\t\t\t\ttype=\"button\" \r\n\t\t\t\t\t\tmat-icon-button \r\n\t\t\t\t\t\tcolor=\"primary\" \r\n\t\t\t\t\t\t(click)=\"editRemarkButtonOnClick(remark)\" \r\n\t\t\t\t\t\tmatTooltip=\"Edit remark\">\r\n\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button *ngIf=\"remark._isEditMode && !loadingAfterSubmit\"\r\n\t\t\t\t\t\tmat-icon-button \r\n\t\t\t\t\t\tcolor=\"{{checkEditForm() ? 'primary' : 'accent'}}\" \r\n\t\t\t\t\t\ttype=\"button\" \r\n\t\t\t\t\t\t(click)=\"saveUpdatedRemark(remark)\" \r\n\t\t\t\t\t\tmatTooltip=\"Save changes\">\r\n\t\t\t\t\t\t<mat-icon>done</mat-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<mat-spinner *ngIf=\"remark._isEditMode && loadingAfterSubmit\" [diameter]=\"20\"></mat-spinner>\r\n\t\t\t\t\t&nbsp;\r\n\t\t\t\t\t<button *ngIf=\"!remark._isEditMode\" \r\n\t\t\t\t\t\t[disabled]=\"isSwitchedToEditMode\" \r\n\t\t\t\t\t\tmat-icon-button \r\n\t\t\t\t\t\tcolor=\"warn\" \r\n\t\t\t\t\t\ttype=\"button\" \r\n\t\t\t\t\t\t(click)=\"deleteRemark(remark)\" \r\n\t\t\t\t\t\tmatTooltip=\"Delete remark\">\r\n\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button *ngIf=\"remark._isEditMode\" \r\n\t\t\t\t\t\ttype=\"button\" \r\n\t\t\t\t\t\tmat-icon-button \r\n\t\t\t\t\t\tcolor=\"warn\" \r\n\t\t\t\t\t\t(click)=\"cancelEditButtonOnClick(remark)\" \r\n\t\t\t\t\t\tmatTooltip=\"Cancel changes\">\r\n\t\t\t\t\t\t<mat-icon>clear</mat-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</mat-cell>\r\n\t\t\t</ng-container>\r\n\t\t\t<!-- end: EDIT row -->\r\n\r\n\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\" [ngClass]=\"{'mat-row-editing' : row._isEditMode}\"></mat-row>\r\n\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\t\t\t<mat-header-row *matHeaderRowDef=\"['add-select', 'add-id', 'add-text', 'add-type', 'add-dueDate', 'add-actions']\" class=\"mat-row-editing mat-row-add\" [ngClass]=\"{'mat-row-inactive' : !remarkForAdd._isEditMode}\">\r\n\t\t\t</mat-header-row>\r\n\t\t</mat-table>\r\n\t</form>\r\n\r\n\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.hasItems\">No records found</div>\r\n\t<div class=\"mat-table__message\" *ngIf=\"dataSource.isPreloadTextViewed$ | async\">Please wait....</div>\r\n\r\n</div>\r\n\r\n<!-- start: BOTTOM -->\r\n<div class=\"mat-table__bottom\">\r\n\t<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>\r\n\t<mat-paginator [pageSize]=\"5\" [pageSizeOptions]=\"[3, 5, 10]\" [length]=\"dataSource.paginatorTotal$ | async\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n</div>\r\n<!-- end: BOTTOM -->\r\n"

/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/products/_subs/remarks/remarks-list/remarks-list.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/products/_subs/remarks/remarks-list/remarks-list.component.ts ***!
  \***********************************************************************************************************/
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
// Material
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var collections_1 = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
// RXJS
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// CRUD
var crud_1 = __webpack_require__(/*! ../../../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
// Services and Models
var e_commerce_1 = __webpack_require__(/*! ../../../../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
// Table with EDIT item in new page
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var RemarksListComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param fb: FormBuilder
     * @param dialog: MatDialog
     * @param typesUtilsService: TypeUtilsService
     * @param layoutUtilsService: LayoutUtilsService
     */
    function RemarksListComponent(store, fb, dialog, typesUtilsService, layoutUtilsService) {
        this.store = store;
        this.fb = fb;
        this.dialog = dialog;
        this.typesUtilsService = typesUtilsService;
        this.layoutUtilsService = layoutUtilsService;
        this.displayedColumns = ['select', 'id', 'text', 'type', 'dueDate', 'actions'];
        // Selection
        this.selection = new collections_1.SelectionModel(true, []);
        this.productRemarksResult = [];
        // Add and Edit
        this.isSwitchedToEditMode = false;
        this.loadingAfterSubmit = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    RemarksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        rxjs_1.merge(this.sort.sortChange, this.paginator.page)
            .pipe(operators_1.tap(function () {
            _this.loadRemarksList();
        }))
            .subscribe();
        // Filtration, bind to searchInput
        rxjs_1.fromEvent(this.searchInput.nativeElement, 'keyup')
            .pipe(operators_1.debounceTime(150), operators_1.distinctUntilChanged(), operators_1.tap(function () {
            _this.paginator.pageIndex = 0;
            _this.loadRemarksList();
        }))
            .subscribe();
        // Init DataSource
        this.dataSource = new e_commerce_1.ProductRemarksDataSource(this.store);
        this.dataSource.entitySubject.subscribe(function (res) { return _this.productRemarksResult = res; });
        this.productId$.subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.productId = res;
            rxjs_1.of(undefined).pipe(operators_1.delay(1000)).subscribe(function () {
                _this.loadRemarksList();
            }); // Remove this line, just loading imitation
            _this.createFormGroup();
        });
    };
    /**
     * On destroy
     */
    RemarksListComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    /**
     * Loading Remarks list
     */
    RemarksListComponent.prototype.loadRemarksList = function () {
        this.selection.clear();
        var queryParams = new crud_1.QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        // Call request from server
        this.store.dispatch(new e_commerce_1.ProductRemarksPageRequested({
            page: queryParams,
            productId: this.productId
        }));
    };
    /**
     * Create Reactive Form
     * @param _item: remark
     */
    RemarksListComponent.prototype.createFormGroup = function (_item) {
        if (_item === void 0) { _item = null; }
        // 'edit' prefix - for item editing
        // 'add' prefix - for item creation
        this.formGroup = this.fb.group({
            editText: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            editType: ['0'],
            editDueDate: [this.typesUtilsService.getDateFromString(), forms_1.Validators.compose([forms_1.Validators.required])],
            newText: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            newType: ['0'],
            newDueDate: [this.typesUtilsService.getDateFromString(), forms_1.Validators.compose([forms_1.Validators.required])]
        });
        this.clearAddForm();
        this.clearEditForm();
    };
    // ADD REMARK FUNCTIONS: clearAddForm | checkAddForm | addRemarkButtonOnClick | cancelAddButtonOnClick | saveNewRemark
    RemarksListComponent.prototype.clearAddForm = function () {
        var controls = this.formGroup.controls;
        controls['newText'].setValue('');
        controls['newText'].markAsPristine();
        controls['newText'].markAsUntouched();
        controls['newType'].setValue('0');
        controls['newType'].markAsPristine();
        controls['newType'].markAsUntouched();
        controls['newDueDate'].setValue(this.typesUtilsService.getDateFromString());
        controls['newDueDate'].markAsPristine();
        controls['newDueDate'].markAsUntouched();
        this.remarkForAdd = new e_commerce_1.ProductRemarkModel();
        this.remarkForAdd.clear(this.productId);
        this.remarkForAdd.dueDate = this.typesUtilsService.getDateStringFromDate();
        this.remarkForAdd._isEditMode = false;
    };
    /**
     * Check if Add Form is Valid
     */
    RemarksListComponent.prototype.checkAddForm = function () {
        var controls = this.formGroup.controls;
        if (controls['newText'].invalid || controls['newType'].invalid || controls['newDueDate'].invalid) {
            controls['newText'].markAsTouched();
            // controls['newType'].markAsTouched();
            controls['newDueDate'].markAsTouched();
            return false;
        }
        return true;
    };
    /**
     * Open Remark Add Form
     */
    RemarksListComponent.prototype.addRemarkButtonOnClick = function () {
        this.clearAddForm();
        this.remarkForAdd._isEditMode = true;
        this.isSwitchedToEditMode = true;
    };
    /**
     * Close Remark Add Form
     */
    RemarksListComponent.prototype.cancelAddButtonOnClick = function () {
        this.remarkForAdd._isEditMode = false;
        this.isSwitchedToEditMode = false;
    };
    /**
     *  Create new remark
     */
    RemarksListComponent.prototype.saveNewRemark = function () {
        var _this = this;
        if (!this.checkAddForm()) {
            return;
        }
        var controls = this.formGroup.controls;
        this.loadingAfterSubmit = false;
        this.remarkForAdd._isEditMode = false;
        this.remarkForAdd.text = controls['newText'].value;
        this.remarkForAdd.type = +controls['newType'].value;
        var _date = new Date(controls['newDueDate'].value);
        this.remarkForAdd.dueDate = this.typesUtilsService.getDateStringFromDate(_date);
        this.remarkForAdd._updatedDate = this.typesUtilsService.getDateStringFromDate();
        this.remarkForAdd._createdDate = this.remarkForEdit._updatedDate;
        this.remarkForAdd._userId = 1; // Admin TODO: Get from user servics
        this.store.dispatch(new e_commerce_1.ProductRemarkOnServerCreated({ productRemark: this.remarkForAdd }));
        this.componentSubscriptions = this.store.pipe(store_1.select(e_commerce_1.selectLastCreatedProductRemarkId)).subscribe(function (res) {
            if (!res) {
                return;
            }
            var _saveMessage = "Remark has been created";
            _this.isSwitchedToEditMode = false;
            _this.layoutUtilsService.showActionNotification(_saveMessage, crud_1.MessageType.Create, 10000, true, true);
            _this.clearAddForm();
        });
    };
    // EDIT REMARK FUNCTIONS: clearEditForm | checkEditForm | editRemarkButtonOnClick | cancelEditButtonOnClick |
    RemarksListComponent.prototype.clearEditForm = function () {
        var controls = this.formGroup.controls;
        controls['editText'].setValue('');
        // controls['editText'].markAsPristine();
        // controls['editText'].markAsUntouched();
        controls['editType'].setValue('0');
        // controls['editType'].markAsPristine();
        // controls['editType'].markAsUntouched();
        controls['editDueDate'].setValue(this.typesUtilsService.getDateFromString());
        // controls['editDueDate'].markAsPristine();
        // controls['editDueDate'].markAsUntouched();
        this.remarkForEdit = new e_commerce_1.ProductRemarkModel();
        this.remarkForEdit.clear(this.productId);
        this.remarkForEdit.dueDate = this.typesUtilsService.getDateStringFromDate();
        this.remarkForEdit._isEditMode = false;
    };
    /**
     * Check is Edit Form valid
     */
    RemarksListComponent.prototype.checkEditForm = function () {
        var controls = this.formGroup.controls;
        if (controls['editText'].invalid || controls['editType'].invalid || controls['editDueDate'].invalid) {
            // controls['editText'].markAsTouched();
            // controls['editType'].markAsTouched();
            // controls['editDueDate'].markAsTouched();
            return false;
        }
        return true;
    };
    /**
     * Update remark
     *
     * @param _item: ProductRemarkModel
     */
    RemarksListComponent.prototype.editRemarkButtonOnClick = function (_item) {
        var controls = this.formGroup.controls;
        controls['editText'].setValue(_item.text);
        controls['editType'].setValue(_item.type.toString());
        controls['editDueDate'].setValue(this.typesUtilsService.getDateFromString(_item.dueDate));
        var updateProductReamrk = {
            id: _item.id,
            changes: {
                _isEditMode: true
            }
        };
        this.store.dispatch(new e_commerce_1.ProductRemarkStoreUpdated({ productRemark: updateProductReamrk }));
        this.isSwitchedToEditMode = true;
    };
    /**
     * Cancel remark
     *
     * @param _item: ProductRemarkModel
     */
    RemarksListComponent.prototype.cancelEditButtonOnClick = function (_item) {
        var updateProductReamrk = {
            id: _item.id,
            changes: {
                _isEditMode: false
            }
        };
        this.store.dispatch(new e_commerce_1.ProductRemarkStoreUpdated({ productRemark: updateProductReamrk }));
        this.isSwitchedToEditMode = false;
    };
    /**
     * Save remark
     *
     * @param _item: ProductRemarkModel
     */
    RemarksListComponent.prototype.saveUpdatedRemark = function (_item) {
        if (!this.checkEditForm()) {
            return;
        }
        this.loadingAfterSubmit = true;
        var controls = this.formGroup.controls;
        this.loadingAfterSubmit = false;
        var objectForUpdate = new e_commerce_1.ProductRemarkModel();
        objectForUpdate.id = _item.id;
        objectForUpdate.carId = _item.carId;
        objectForUpdate._isEditMode = _item._isEditMode;
        objectForUpdate.text = controls['editText'].value;
        objectForUpdate.type = +controls['editType'].value;
        var _date = new Date(controls['editDueDate'].value);
        objectForUpdate.dueDate = this.typesUtilsService.getDateStringFromDate(_date);
        objectForUpdate._updatedDate = this.typesUtilsService.getDateStringFromDate();
        objectForUpdate._isEditMode = false;
        var updateProductReamrk = {
            id: _item.id,
            changes: objectForUpdate
        };
        this.store.dispatch(new e_commerce_1.ProductRemarkUpdated({
            partialProductRemark: updateProductReamrk,
            productRemark: objectForUpdate
        }));
        var saveMessage = "Remark has been updated";
        this.isSwitchedToEditMode = false;
        this.layoutUtilsService.showActionNotification(saveMessage, crud_1.MessageType.Update, 10000, true, true);
    };
    /**
     * Returns object for filtration
     */
    RemarksListComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value;
        filter.text = searchText;
        return filter;
    };
    /**
     * Check all rows are selected
     */
    RemarksListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.productRemarksResult.length;
        return numSelected === numRows;
    };
    /**
     * Selects all rows if they are not all selected; otherwise clear selection
     */
    RemarksListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else {
            this.productRemarksResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    /** ACTIONS */
    /**
     * Delete remark
     *
     * @param _item: ProductRemarkModel
     */
    RemarksListComponent.prototype.deleteRemark = function (_item) {
        var _this = this;
        var _title = 'Remark Delete';
        var _description = 'Are you sure to permanently delete this remark?';
        var _waitDesciption = 'Remark is deleting...';
        var _deleteMessage = "Remark has been deleted";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.store.dispatch(new e_commerce_1.OneProductRemarkDeleted({ id: _item.id }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
        });
    };
    /**
     * Delete selected remarks
     */
    RemarksListComponent.prototype.deleteRemarks = function () {
        var _this = this;
        var _title = 'Remarks Delete';
        var _description = 'Are you sure to permanently delete selected remarks?';
        var _waitDesciption = 'Remarks are deleting...';
        var _deleteMessage = 'Selected remarks have been deleted';
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            var length = _this.selection.selected.length;
            var idsForDeletion = [];
            for (var i = 0; i < length; i++) {
                idsForDeletion.push(_this.selection.selected[i].id);
            }
            _this.store.dispatch(new e_commerce_1.ManyProductRemarksDeleted({ ids: idsForDeletion }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
            _this.selection.clear();
        });
    };
    /**
     * Fetch selected remarks
     */
    RemarksListComponent.prototype.fetchRemarks = function () {
        var messages = [];
        this.selection.selected.forEach(function (elem) { messages.push({ text: "" + elem.text, id: elem.id }); });
        this.layoutUtilsService.fetchElements(messages);
    };
    /* UI **/
    /**
     * Returns type in string
     *
     * @param _remark: ProductRemarkModel
     */
    RemarksListComponent.prototype.getTypeStr = function (_remark) {
        switch (_remark.type) {
            case 0: return 'Info';
            case 1: return 'Note';
            case 2: return 'Reminder';
            default: return '';
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.Observable)
    ], RemarksListComponent.prototype, "productId$", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], RemarksListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], RemarksListComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], RemarksListComponent.prototype, "searchInput", void 0);
    RemarksListComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'kt-remarks-list',
            template: __webpack_require__(/*! ./remarks-list.component.html */ "./src/app/views/pages/apps/e-commerce/products/_subs/remarks/remarks-list/remarks-list.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [store_1.Store,
            forms_1.FormBuilder,
            material_1.MatDialog,
            crud_1.TypesUtilsService,
            crud_1.LayoutUtilsService])
    ], RemarksListComponent);
    return RemarksListComponent;
}());
exports.RemarksListComponent = RemarksListComponent;


/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/products/_subs/specifications/specification-edit/specification-edit-dialog.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/products/_subs/specifications/specification-edit/specification-edit-dialog.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress' : viewLoading, 'kt-portlet--body-progress-overlay' : loadingAfterSubmit }\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t{{ data.isNew ? 'Create' : 'Update'}} specification\r\n\t\t\t</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--begin::Form-->\r\n\t<form class=\"kt-form\" [formGroup]=\"specificationEditForm\" autocomplete=\"off\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"kt-form__section kt-form__section--first\">\r\n\t\t\t\t<div class=\"form-group kt-form__group\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"Enter Specification Type\" formControlName=\"name\">\r\n\t\t\t\t\t\t\t<mat-option value=\"{{sp}}\" *ngFor=\"let sp of specificationsDictionary;\">{{sp}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('name','required')\">\r\n\t\t\t\t\t\t\t<strong>Specification Type is required</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group kt-form__group\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"Enter Value\" formControlName=\"text\" />\r\n\t\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('text','required')\">\r\n\t\t\t\t\t\t\t<strong>Value is required</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__foot--fit text-right\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions kt-form__actions--solid\">\r\n\t\t\t\t<button type=\"button\" mat-raised-button cdkFocusInitial (click)=\"onNoClick()\" matTooltip=\"Cancel changes\">Cancel</button>&nbsp;\r\n\t\t\t\t<button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"save()\" [disabled]=\"viewLoading\" matTooltip=\"Save changes\">Save</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\t<!--end::Form-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/products/_subs/specifications/specification-edit/specification-edit-dialog.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/products/_subs/specifications/specification-edit/specification-edit-dialog.component.ts ***!
  \*************************************************************************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// Angular
var core_2 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// Material
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
// Services and Models
var e_commerce_1 = __webpack_require__(/*! ../../../../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
var SpecificationEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<SpecificationEditDialogComponent>
     * @param data: any
     */
    function SpecificationEditDialogComponent(dialogRef, data, fb, cdr) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.cdr = cdr;
        this.viewLoading = true;
        this.loadingAfterSubmit = false;
        this.specificationsDictionary = e_commerce_1.SPECIFICATIONS_DICTIONARY;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    SpecificationEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initSpecificationForm();
        /* Server loading imitation. Remove this on real code */
        rxjs_1.of(undefined).pipe(operators_1.delay(1000)).subscribe(function () {
            _this.viewLoading = false; // Remove this line
            _this.cdr.detectChanges(); // Remove this line
        }); // Remove this line
    };
    /**
     * Form initalization
     * Default params, validators
     */
    SpecificationEditDialogComponent.prototype.initSpecificationForm = function () {
        var specName = !this.data.specId ? '' : this.specificationsDictionary[this.data.specId];
        var specText = this.data.value;
        this.specificationEditForm = this.fb.group({
            name: [specName, [forms_1.Validators.required]],
            text: [specText, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(100)
                ])]
        });
    };
    /**
     * Close dialog
     */
    SpecificationEditDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close({ isUpdated: false });
    };
    /**
     * Save specification
     */
    SpecificationEditDialogComponent.prototype.save = function () {
        var _this = this;
        var controls = this.specificationEditForm.controls;
        /** check form */
        if (this.specificationEditForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            return;
        }
        this.loadingAfterSubmit = true;
        this.viewLoading = true;
        var specId = this.getSpecificationIndexByName(controls['name'].value);
        var specName = controls['name'].value;
        var specValue = controls['text'].value;
        /* Server loading imitation. Remove this on real code */
        rxjs_1.of(undefined).pipe(operators_1.delay(1000)).subscribe(function () {
            _this.viewLoading = false;
            _this.closeDialog(specId, specName, specValue);
        }); // Remove this line
    };
    /**
     * Close dialog
     *
     * @param specId: any
     */
    SpecificationEditDialogComponent.prototype.closeDialog = function (specId, specName, specValue) {
        this.dialogRef.close({
            isUpdated: true,
            value: specValue,
            specId: specId,
            _specificationName: specName
        });
    };
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    SpecificationEditDialogComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.specificationEditForm.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    };
    SpecificationEditDialogComponent.prototype.getSpecificationIndexByName = function (name) {
        return this.specificationsDictionary.findIndex(function (el) { return el === name; });
    };
    SpecificationEditDialogComponent = __decorate([
        core_2.Component({
            // tslint:disable-next-line:component-selector
            selector: 'kt-specification-edit-dialog',
            template: __webpack_require__(/*! ./specification-edit-dialog.component.html */ "./src/app/views/pages/apps/e-commerce/products/_subs/specifications/specification-edit/specification-edit-dialog.component.html"),
            changeDetection: core_2.ChangeDetectionStrategy.OnPush
        }),
        __param(1, core_2.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, forms_1.FormBuilder,
            core_1.ChangeDetectorRef])
    ], SpecificationEditDialogComponent);
    return SpecificationEditDialogComponent;
}());
exports.SpecificationEditDialogComponent = SpecificationEditDialogComponent;


/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/products/_subs/specifications/specifications-list/specifications-list.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/products/_subs/specifications/specifications-list/specifications-list.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start::FILTERS & GROUP ACTIONS -->\r\n<div class=\"kt-form\">\r\n\t<!-- start::FILTERS -->\r\n\t<div class=\"kt-form__filtration\">\r\n\t\t<div class=\"row align-items-center\">\r\n\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t<input matInput placeholder=\"Search product specification\" #searchInput placeholder=\"Search\">\r\n\t\t\t\t\t<mat-hint align=\"start\">Search in all fields</mat-hint>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-8 kt-margin-bottom-10-mobile\"></div>\r\n\t\t\t<div class=\"col-md-2 text-right kt-margin-bottom-10-mobile\">\r\n\t\t\t\t<button type=\"button\"\r\n\t\t\t\t\t(click)=\"addSpec()\"\r\n\t\t\t\t\tmat-raised-button\r\n\t\t\t\t\tcolor=\"primary\"\r\n\t\t\t\t\tmatTooltip=\"Create new specification\">New specification</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- end::FILTERS -->\r\n\r\n\t<!-- start::GROUP ACTIONS -->\r\n\t<!-- Group actions list: 'Delete selected' | 'Fetch selected' | 'Update status for selected' -->\r\n\t<!-- Group actions are shared for all LISTS | See '../../_shared' folder -->\r\n\t<div class=\"row align-items-center collapse kt-form__group-actions kt-margin-bottom-20\" [ngClass]=\"{'show' : selection.selected.length > 0}\">\r\n\r\n\t\t<div class=\"col-xl-12\">\r\n\t\t\t<div class=\"kt-form__group kt-form__group--inline\">\r\n\t\t\t\t<div class=\"kt-form__label kt-form__label-no-wrap\">\r\n\t\t\t\t\t<label class=\"kt--font-bold kt-font-danger-\">Selected records count: {{ selection.selected.length }}:</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"kt-form__control kt-form__group--inline\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<button mat-raised-button\r\n\t\t\t\t\t\t\tcolor=\"accent\"\r\n\t\t\t\t\t\t\t(click)=\"deleteSpecs()\"\r\n\t\t\t\t\t\t\tmatTooltip=\"Delete selected specifications\">Delete All</button>\r\n\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;\r\n\t\t\t\t\t\t<button mat-raised-button\r\n\t\t\t\t\t\t\tcolor=\"warn\"\r\n\t\t\t\t\t\t\t(click)=\"fetchSpecs()\"\r\n\t\t\t\t\t\t\tmatTooltip=\"Fetch selected specifications\">Fetch Selected Records</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- end::GROUP ACTIONS -->\r\n</div>\r\n<!-- end::FILTERS & GROUP ACTIONS -->\r\n\r\n<!-- MATERIAL TABLE | Binded to datasources -->\r\n<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n<div class=\"mat-table__wrapper  mat-table__wrapper--sub\">\r\n\t<mat-table class=\"lmat-elevation-z8\" [dataSource]=\"dataSource\" matSort matSortActive=\"_specificationName\" matSortDirection=\"asc\" matSortDisableClear>\r\n\t\t<!-- Checkbox Column -->\r\n\t\t<!-- Table with selection -->\r\n\t\t<!-- https://run.stackblitz.com/api/angular/v1?file=app%2Ftable-selection-example.ts -->\r\n\t\t<!-- Checkbox Column -->\r\n\t\t<ng-container matColumnDef=\"select\">\r\n\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column-checkbox\">\r\n\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n\t\t\t\t\t[checked]=\"selection.hasValue() && isAllSelected()\"\r\n\t\t\t\t\t[indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n\t\t\t\t\t[color]=\"'primary'\">\r\n\t\t\t\t</mat-checkbox>\r\n\t\t\t</mat-header-cell>\r\n\t\t\t<mat-cell *matCellDef=\"let row\" class=\"mat-column-checkbox\">\r\n\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\"\r\n\t\t\t\t\t(change)=\"$event ? selection.toggle(row) : null\"\r\n\t\t\t\t\t[checked]=\"selection.isSelected(row)\"\r\n\t\t\t\t\t[color]=\"'primary'\">\r\n\t\t\t\t</mat-checkbox>\r\n\t\t\t</mat-cell>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container matColumnDef=\"_specificationName\">\r\n\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"mat-column\">Specification Type</mat-header-cell>\r\n\t\t\t<mat-cell *matCellDef=\"let spec\" class=\"mat-column\">{{spec._specificationName}}</mat-cell>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container matColumnDef=\"value\">\r\n\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"mat-column\">Value</mat-header-cell>\r\n\t\t\t<mat-cell *matCellDef=\"let spec\" class=\"mat-column\">{{spec.value}}</mat-cell>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column-actions\">\r\n\t\t\t\tActions\r\n\t\t\t</mat-header-cell>\r\n\t\t\t<mat-cell *matCellDef=\"let spec\" class=\"mat-column-actions\">\r\n\t\t\t\t<button type=\"button\"\r\n\t\t\t\t\tmat-icon-button\r\n\t\t\t\t\tcolor=\"primary\"\r\n\t\t\t\t\t(click)=\"editSpec(spec)\"\r\n\t\t\t\t\tmatTooltip=\"Edit specification\">\r\n\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t</button>\r\n\t\t\t\t&nbsp;\r\n\t\t\t\t<button mat-icon-button\r\n\t\t\t\t\tcolor=\"warn\"\r\n\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t(click)=\"deleteSpec(spec)\"\r\n\t\t\t\t\tmatTooltip=\"Delete specification\">\r\n\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t</button>\r\n\t\t\t</mat-cell>\r\n\t\t</ng-container>\r\n\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t</mat-table>\r\n\r\n\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.hasItems\">No records found</div>\r\n\t<div class=\"mat-table__message\" *ngIf=\"dataSource.isPreloadTextViewed$ | async\">Please wait....</div>\r\n\r\n</div>\r\n<!-- start: BOTTOM -->\r\n<div class=\"mat-table__bottom\">\r\n\t<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>\r\n\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[3, 5, 10]\" [length]=\"dataSource.paginatorTotal$ | async\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n</div>\r\n<!-- end: BOTTOM -->\r\n"

/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/products/_subs/specifications/specifications-list/specifications-list.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/products/_subs/specifications/specifications-list/specifications-list.component.ts ***!
  \********************************************************************************************************************************/
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
// Material
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var collections_1 = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
// RXJS
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// CRUD
var crud_1 = __webpack_require__(/*! ../../../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
// Services and models
var e_commerce_1 = __webpack_require__(/*! ../../../../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
// Components
var specification_edit_dialog_component_1 = __webpack_require__(/*! ../specification-edit/specification-edit-dialog.component */ "./src/app/views/pages/apps/e-commerce/products/_subs/specifications/specification-edit/specification-edit-dialog.component.ts");
// Table with EDIT item in new page
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var SpecificationsListComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState></AppState>
     * @param dialog: MatDialog
     * @param layoutUtilsService: LayoutUtilsService
     */
    function SpecificationsListComponent(store, dialog, layoutUtilsService) {
        this.store = store;
        this.dialog = dialog;
        this.layoutUtilsService = layoutUtilsService;
        this.displayedColumns = ['select', '_specificationName', 'value', 'actions'];
        // Selection
        this.selection = new collections_1.SelectionModel(true, []);
        this.productSpecificationsResult = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    SpecificationsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        rxjs_1.merge(this.sort.sortChange, this.paginator.page)
            .pipe(operators_1.tap(function () {
            _this.loadSpecsList();
        }))
            .subscribe();
        // Filtration, bind to searchInput
        rxjs_1.fromEvent(this.searchInput.nativeElement, 'keyup')
            .pipe(operators_1.debounceTime(150), operators_1.distinctUntilChanged(), operators_1.tap(function () {
            _this.paginator.pageIndex = 0;
            _this.loadSpecsList();
        }))
            .subscribe();
        // Init DataSource
        this.dataSource = new e_commerce_1.ProductSpecificationsDataSource(this.store);
        this.dataSource.entitySubject.subscribe(function (res) { return _this.productSpecificationsResult = res; });
        this.productId$.subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.productId = res;
            rxjs_1.of(undefined).pipe(operators_1.delay(1000)).subscribe(function () {
                _this.loadSpecsList();
            }); // Remove this line, just loading imitation
        });
    };
    /**
     * On destroy
     */
    SpecificationsListComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    /**
     * Load Specs List
     */
    SpecificationsListComponent.prototype.loadSpecsList = function () {
        this.selection.clear();
        var queryParams = new crud_1.QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        // Call request from server
        this.store.dispatch(new e_commerce_1.ProductSpecificationsPageRequested({
            page: queryParams,
            productId: this.productId
        }));
    };
    /**
     * Retirns object for filter
     */
    SpecificationsListComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value;
        filter._specificationName = searchText;
        filter.value = searchText;
        return filter;
    };
    /**
     * Check all rows are selected
     */
    SpecificationsListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.productSpecificationsResult.length;
        return numSelected === numRows;
    };
    /**
     * Selects all rows if they are not all selected; otherwise clear selection
     */
    SpecificationsListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else {
            this.productSpecificationsResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    /** ACTIONS */
    /**
     * Delete spec
     *
     * @param _item: ProductSpecificationModel
     */
    SpecificationsListComponent.prototype.deleteSpec = function (_item) {
        var _this = this;
        var _title = 'Specification Delete';
        var _description = 'Are you sure to permanently delete this specification?';
        var _waitDesciption = 'Specification is deleting...';
        var _deleteMessage = "Specification has been deleted";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.store.dispatch(new e_commerce_1.OneProductSpecificationDeleted({ id: _item.id }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
            _this.loadSpecsList();
        });
    };
    /**
     * Delete specs
     */
    SpecificationsListComponent.prototype.deleteSpecs = function () {
        var _this = this;
        var _title = 'Specifications Delete';
        var _description = 'Are you sure to permanently delete selected specifications?';
        var _waitDesciption = 'Specifications are deleting...';
        var _deleteMessage = 'Selected specifications have been deleted';
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            var length = _this.selection.selected.length;
            var idsForDeletion = [];
            for (var i = 0; i < length; i++) {
                idsForDeletion.push(_this.selection.selected[i].id);
            }
            _this.store.dispatch(new e_commerce_1.ManyProductSpecificationsDeleted({ ids: idsForDeletion }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
            _this.selection.clear();
        });
    };
    /**
     * Fetch selected specs
     */
    SpecificationsListComponent.prototype.fetchSpecs = function () {
        var messages = [];
        this.selection.selected.forEach(function (elem) {
            messages.push({
                text: elem._specificationName + ": " + elem.value, id: elem.id
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    };
    /**
     * Open add spec dialog and save data
     */
    SpecificationsListComponent.prototype.addSpec = function () {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var newSpec = new e_commerce_1.ProductSpecificationModel();
        newSpec.clear(this.productId);
        var dialogRef = this.dialog.open(specification_edit_dialog_component_1.SpecificationEditDialogComponent, {
            data: {
                specId: undefined,
                value: '',
                isNew: true
            },
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res && res.isUpdated) {
                newSpec._specificationName = res._specificationName;
                newSpec.specId = res.specId;
                newSpec.value = res.value;
                _this.store.dispatch(new e_commerce_1.ProductSpecificationOnServerCreated({ productSpecification: newSpec }));
                _this.componentSubscriptions = _this.store.pipe(store_1.select(e_commerce_1.selectLastCreatedProductSpecificationId)).subscribe(function (result) {
                    if (!result) {
                        return;
                    }
                    var saveMessage = "Specification has been created";
                    _this.layoutUtilsService.showActionNotification(saveMessage, crud_1.MessageType.Create, 10000, true, true);
                });
            }
        });
    };
    /**
     * Edit add spec dialog ans save data
     *
     * @param item: ProductSpecificationModel
     */
    SpecificationsListComponent.prototype.editSpec = function (item) {
        var _this = this;
        var _item = Object.assign({}, item);
        var dialogRef = this.dialog.open(specification_edit_dialog_component_1.SpecificationEditDialogComponent, {
            data: {
                specId: _item.specId,
                value: _item.value,
                isNew: false
            },
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res && res.isUpdated) {
                _item._specificationName = res._specificationName;
                _item.specId = res.specId;
                _item.value = res.value;
                var updateProductSpecification = {
                    id: _item.id,
                    changes: _item
                };
                _this.store.dispatch(new e_commerce_1.ProductSpecificationUpdated({
                    partialProductSpecification: updateProductSpecification,
                    productSpecification: _item
                }));
                var saveMessage = "Specification has been updated";
                _this.layoutUtilsService.showActionNotification(saveMessage, crud_1.MessageType.Update, 10000, true, true);
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.Observable)
    ], SpecificationsListComponent.prototype, "productId$", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], SpecificationsListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], SpecificationsListComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], SpecificationsListComponent.prototype, "searchInput", void 0);
    SpecificationsListComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'kt-specifications-list',
            template: __webpack_require__(/*! ./specifications-list.component.html */ "./src/app/views/pages/apps/e-commerce/products/_subs/specifications/specifications-list/specifications-list.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [store_1.Store,
            material_1.MatDialog,
            crud_1.LayoutUtilsService])
    ], SpecificationsListComponent);
    return SpecificationsListComponent;
}());
exports.SpecificationsListComponent = SpecificationsListComponent;


/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/products/product-edit/product-edit.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/products/product-edit/product-edit.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<kt-portlet-header [title]=\"getComponentTitle()\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<a [routerLink]=\"['../../']\" class=\"btn btn-secondary kt-margin-r-10\"  mat-raised-button matTooltip=\"Back to the products list\">\r\n\t\t\t\t<i class=\"la la-arrow-left\"></i>\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Back</span>\r\n\t\t\t</a>\r\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-secondary kt-margin-r-10\" (click)=\"reset()\" [disabled]=\"selectedTab !== 0\" mat-raised-button matTooltip=\"Reset changes\">\r\n\t\t\t\t<i class=\"la la-cog\"></i>\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Reset</span>\r\n\t\t\t</a>\r\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSumbit(false)\" mat-raised-button matTooltip=\"Save & Continue\">\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Save</span>\r\n\t\t\t</a>\r\n\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" color=\"primary\">\r\n\t\t\t\t<mat-icon>more_vert</mat-icon>\r\n\t\t\t</button>\r\n\t\t\t<mat-menu #menu=\"matMenu\">\r\n\t\t\t\t<button mat-menu-item color=\"primary\" (click)=\"onSumbit(true)\">Save & Exit</button>\r\n\t\t\t\t<button mat-menu-item color=\"primary\">Save & Duplicate</button>\r\n\t\t\t\t<button mat-menu-item color=\"primary\" (click)=\"onSumbit(false)\">Save & Continue</button>\r\n\t\t\t</mat-menu>\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<kt-portlet-body>\r\n\t\t<mat-tab-group [(selectedIndex)]=\"selectedTab\" *ngIf=\"product\">\r\n\t\t\t<mat-tab label=\"Basic info\">\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<div *ngIf=\"product\">\r\n\t\t\t\t\t\t<!--begin::Form-->\r\n\t\t\t\t\t\t<form [formGroup]=\"productForm\" class=\"kt-form kt-form--group-seperator-dashed\">\r\n\r\n\t\t\t\t\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\" (close)=\"onAlertClose($event)\">\r\n\t\t\t\t\t\t\t\tOh snap! Change a few things up and try submitting again.\r\n\t\t\t\t\t\t\t</kt-alert>\r\n\r\n\t\t\t\t\t\t\t<div class=\"kt-form__section kt-form__section--first\">\r\n\t\t\t\t\t\t\t\t<div class=\"kt-form__group\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter Model\" formControlName=\"model\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tModel is\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Model</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter Manufacture\" formControlName=\"manufacture\" [matAutocomplete]=\"manuf\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-autocomplete #manuf=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let manufacture of filteredManufactures | async\" [value]=\"manufacture\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ manufacture }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tManufacture is\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Manufacture</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select placeholder=\"Enter Model year\" formControlName=\"modelYear\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"{{year}}\" *ngFor=\"let year of availableYears;\">{{year}}</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tModel year\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Model year</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"kt-form__group\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter Mileage\" formControlName=\"mileage\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tMileage is\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Mileage</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter Color\" formControlName=\"color\" [matAutocomplete]=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-autocomplete #col=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let col of filteredColors | async\" [value]=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ col }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tColor\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Color</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter Price\" formControlName=\"price\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span matPrefix>$&nbsp;</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tPrice is\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Price</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"kt-form__group\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter VIN code\" formControlName=\"VINCode\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tVIN Code is\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>VIN Code</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div>Condition:</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-radio-group formControlName=\"condition\" class=\"example-radio-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-radio-button\" value=\"0\">New</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-radio-button\" value=\"1\">Used</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div>Status:</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-radio-group formControlName=\"status\" class=\"example-radio-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-radio-button\" value=\"0\">Selling</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-radio-button\" value=\"1\">Sold</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"kt-form__group\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea matInput rows=\"7\" placeholder=\"Enter Description\" formControlName=\"description\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!--end::Form-->\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab label=\"Product remarks\" [disabled]=\"!product || !product.id\">\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<kt-remarks-list [productId$]=\"productId$\"></kt-remarks-list>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab label=\"Product specifications\" [disabled]=\"!product || !product.id\">\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<kt-specifications-list [productId$]=\"productId$\"></kt-specifications-list>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\t\t</mat-tab-group>\r\n\t</kt-portlet-body>\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/products/product-edit/product-edit.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/products/product-edit/product-edit.component.ts ***!
  \*********************************************************************************************/
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// Material
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Layout
var layout_1 = __webpack_require__(/*! ../../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
// CRUD
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
// Services and Models
var e_commerce_1 = __webpack_require__(/*! ../../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
var AVAILABLE_COLORS = ['Red', 'CadetBlue', 'Gold', 'LightSlateGrey', 'RoyalBlue', 'Crimson', 'Blue', 'Sienna', 'Indigo', 'Green', 'Violet',
    'GoldenRod', 'OrangeRed', 'Khaki', 'Teal', 'Purple', 'Orange', 'Pink', 'Black', 'DarkTurquoise'];
var AVAILABLE_MANUFACTURES = ['Pontiac', 'Subaru', 'Mitsubishi', 'Oldsmobile', 'Chevrolet', 'Chrysler', 'Suzuki', 'GMC', 'Cadillac', 'Mercury', 'Dodge',
    'Ram', 'Lexus', 'Lamborghini', 'Honda', 'Nissan', 'Ford', 'Hyundai', 'Saab', 'Toyota'];
var ProductEditComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param activatedRoute: ActivatedRoute
     * @param router: Router
     * @param typesUtilsService: TypesUtilsService
     * @param productFB: FormBuilder
     * @param dialog: MatDialog
     * @param subheaderService: SubheaderService
     * @param layoutUtilsService: SubheaderService
     * @param layoutConfigService: LayoutConfigService
     */
    function ProductEditComponent(store, activatedRoute, router, typesUtilsService, productFB, dialog, subheaderService, layoutUtilsService, layoutConfigService) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.typesUtilsService = typesUtilsService;
        this.productFB = productFB;
        this.dialog = dialog;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.layoutConfigService = layoutConfigService;
        this.selectedTab = 0;
        this.loadingSubject = new rxjs_1.BehaviorSubject(true);
        this.hasFormErrors = false;
        this.availableYears = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var i = 2019; i > 1945; i--) {
            this.availableYears.push(i);
        }
        this.loading$ = this.loadingSubject.asObservable();
        this.loadingSubject.next(true);
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id && id > 0) {
                _this.store.pipe(store_1.select(e_commerce_1.selectProductById(id)), operators_1.first(function (res) {
                    return res !== undefined;
                })).subscribe(function (result) {
                    _this.product = result;
                    _this.productId$ = rxjs_1.of(result.id);
                    _this.oldProduct = Object.assign({}, result);
                    _this.initProduct();
                });
            }
            else {
                var newProduct = new e_commerce_1.ProductModel();
                newProduct.clear();
                _this.productId$ = rxjs_1.of(newProduct.id);
                _this.product = newProduct;
                _this.oldProduct = Object.assign({}, newProduct);
                _this.initProduct();
            }
        });
        // sticky portlet header
        window.onload = function () {
            var style = getComputedStyle(document.getElementById('kt_header'));
            _this.headerMargin = parseInt(style.height, 0);
        };
    };
    /**
     * On destroy
     */
    ProductEditComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    /**
     * Init product
     */
    ProductEditComponent.prototype.initProduct = function () {
        this.createForm();
        var prefix = this.layoutConfigService.getCurrentMainRoute();
        this.loadingSubject.next(false);
        if (!this.product.id) {
            this.subheaderService.setBreadcrumbs([
                { title: 'eCommerce', page: "../" + prefix + "/ecommerce" },
                { title: 'Products', page: "../" + prefix + "/ecommerce/products" },
                { title: 'Create product', page: "../" + prefix + "/ecommerce/products/add" }
            ]);
            return;
        }
        this.subheaderService.setTitle('Edit product');
        this.subheaderService.setBreadcrumbs([
            { title: 'eCommerce', page: "../" + prefix + "/ecommerce" },
            { title: 'Products', page: "../" + prefix + "/ecommerce/products" },
            { title: 'Edit product', page: "../" + prefix + "/ecommerce/products/edit", queryParams: { id: this.product.id } }
        ]);
    };
    /**
     * Create form
     */
    ProductEditComponent.prototype.createForm = function () {
        var _this = this;
        this.productForm = this.productFB.group({
            model: [this.product.model, forms_1.Validators.required],
            manufacture: [this.product.manufacture, forms_1.Validators.required],
            modelYear: [this.product.modelYear.toString(), forms_1.Validators.required],
            mileage: [this.product.mileage, [forms_1.Validators.required, forms_1.Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
            description: [this.product.description],
            color: [this.product.color, forms_1.Validators.required],
            price: [this.product.price, [forms_1.Validators.required, forms_1.Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
            condition: [this.product.condition.toString(), [forms_1.Validators.required, forms_1.Validators.min(0), forms_1.Validators.max(1)]],
            status: [this.product.status.toString(), [forms_1.Validators.required, forms_1.Validators.min(0), forms_1.Validators.max(1)]],
            VINCode: [this.product.VINCode, forms_1.Validators.required]
        });
        this.filteredManufactures = this.productForm.controls.manufacture.valueChanges
            .pipe(operators_1.startWith(''), operators_1.map(function (val) { return _this.filterManufacture(val.toString()); }));
        this.filteredColors = this.productForm.controls.color.valueChanges
            .pipe(operators_1.startWith(''), operators_1.map(function (val) { return _this.filterColor(val.toString()); }));
    };
    /**
     * Filter manufacture
     *
     * @param val: string
     */
    ProductEditComponent.prototype.filterManufacture = function (val) {
        return AVAILABLE_MANUFACTURES.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    /**
     * Filter color
     *
     * @param val: string
     */
    ProductEditComponent.prototype.filterColor = function (val) {
        return AVAILABLE_COLORS.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    /**
     * Go back to the list
     *
     * @param id: any
     */
    ProductEditComponent.prototype.goBack = function (id) {
        this.loadingSubject.next(false);
        var url = this.layoutConfigService.getCurrentMainRoute() + "/ecommerce/products?id=" + id;
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    /**
     * Refresh product
     *
     * @param isNew: boolean
     * @param id: number
     */
    ProductEditComponent.prototype.refreshProduct = function (isNew, id) {
        if (isNew === void 0) { isNew = false; }
        if (id === void 0) { id = 0; }
        this.loadingSubject.next(false);
        var url = this.router.url;
        if (!isNew) {
            this.router.navigate([url], { relativeTo: this.activatedRoute });
            return;
        }
        url = this.layoutConfigService.getCurrentMainRoute() + "/ecommerce/products/edit/" + id;
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    /**
     * Reset
     */
    ProductEditComponent.prototype.reset = function () {
        this.product = Object.assign({}, this.oldProduct);
        this.createForm();
        this.hasFormErrors = false;
        this.productForm.markAsPristine();
        this.productForm.markAsUntouched();
        this.productForm.updateValueAndValidity();
    };
    /**
     * Save data
     *
     * @param withBack: boolean
     */
    ProductEditComponent.prototype.onSumbit = function (withBack) {
        if (withBack === void 0) { withBack = false; }
        this.hasFormErrors = false;
        var controls = this.productForm.controls;
        /** check form */
        if (this.productForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            this.selectedTab = 0;
            return;
        }
        // tslint:disable-next-line:prefer-const
        var editedProduct = this.prepareProduct();
        if (editedProduct.id > 0) {
            this.updateProduct(editedProduct, withBack);
            return;
        }
        this.addProduct(editedProduct, withBack);
    };
    /**
     * Returns object for saving
     */
    ProductEditComponent.prototype.prepareProduct = function () {
        var controls = this.productForm.controls;
        var _product = new e_commerce_1.ProductModel();
        _product.id = this.product.id;
        _product.model = controls['model'].value;
        _product.manufacture = controls['manufacture'].value;
        _product.modelYear = +controls['modelYear'].value;
        _product.mileage = +controls['mileage'].value;
        _product.description = controls['description'].value;
        _product.color = controls['color'].value;
        _product.price = +controls['price'].value;
        _product.condition = +controls['condition'].value;
        _product.status = +controls['status'].value;
        _product.VINCode = controls['VINCode'].value;
        _product._userId = 1; // TODO: get version from userId
        _product._createdDate = this.product._createdDate;
        _product._updatedDate = this.product._updatedDate;
        _product._updatedDate = this.typesUtilsService.getDateStringFromDate();
        _product._createdDate = this.product.id > 0 ? _product._createdDate : _product._updatedDate;
        return _product;
    };
    /**
     * Add product
     *
     * @param _product: ProductModel
     * @param withBack: boolean
     */
    ProductEditComponent.prototype.addProduct = function (_product, withBack) {
        var _this = this;
        if (withBack === void 0) { withBack = false; }
        this.loadingSubject.next(true);
        this.store.dispatch(new e_commerce_1.ProductOnServerCreated({ product: _product }));
        this.componentSubscriptions = this.store.pipe(operators_1.delay(1000), store_1.select(e_commerce_1.selectLastCreatedProductId)).subscribe(function (newId) {
            if (!newId) {
                return;
            }
            _this.loadingSubject.next(false);
            if (withBack) {
                _this.goBack(newId);
            }
            else {
                var message = "New product successfully has been added.";
                _this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Create, 10000, true, true);
                _this.refreshProduct(true, newId);
            }
        });
    };
    /**
     * Update product
     *
     * @param _product: ProductModel
     * @param withBack: boolean
     */
    ProductEditComponent.prototype.updateProduct = function (_product, withBack) {
        var _this = this;
        if (withBack === void 0) { withBack = false; }
        this.loadingSubject.next(true);
        var updateProduct = {
            id: _product.id,
            changes: _product
        };
        this.store.dispatch(new e_commerce_1.ProductUpdated({
            partialProduct: updateProduct,
            product: _product
        }));
        rxjs_1.of(undefined).pipe(operators_1.delay(3000)).subscribe(function () {
            if (withBack) {
                _this.goBack(_product.id);
            }
            else {
                var message = "Product successfully has been saved.";
                _this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Update, 10000, true, true);
                _this.refreshProduct(false);
            }
        }); // Remove this line
    };
    /**
     * Returns component title
     */
    ProductEditComponent.prototype.getComponentTitle = function () {
        var result = 'Create product';
        if (!this.product || !this.product.id) {
            return result;
        }
        result = "Edit product - " + this.product.manufacture + " " + this.product.model + ", " + this.product.modelYear;
        return result;
    };
    /**
     * Close alert
     *
     * @param $event
     */
    ProductEditComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    ProductEditComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'kt-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/views/pages/apps/e-commerce/products/product-edit/product-edit.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [store_1.Store,
            router_1.ActivatedRoute,
            router_1.Router,
            crud_1.TypesUtilsService,
            forms_1.FormBuilder,
            material_1.MatDialog,
            layout_1.SubheaderService,
            crud_1.LayoutUtilsService,
            layout_1.LayoutConfigService])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;


/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/products/products-list/products-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/products/products-list/products-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\r\n\t<kt-portlet-header [title]=\"'Products list'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"dataSource.loading$\">\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button [routerLink]=\"['../products/add']\" mat-raised-button color=\"primary\" matTooltip=\"Create new product\">New product</button>\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"filterStatus\" (selectionChange)=\"loadProductsList()\" class=\"mat-form-field mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">All</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"0\">Selling</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"1\">Sold</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t<strong>Filter by Status</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"filterCondition\" (selectionChange)=\"loadProductsList()\" class=\"mat-form-field mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">All</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"0\">New</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"1\">Used</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t<strong>Filter by Contidion</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-md-none kt-margin-bottom-10\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Search product\" #searchInput placeholder=\"Search\" class=\"mat-form-field mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>Search in all fields</strong>\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\r\n\t\t\t<!-- start::GROUP ACTIONS -->\r\n\t\t\t<!-- Group actions list: 'Delete selected' | 'Fetch selected' | 'Update status for selected' -->\r\n\t\t\t<!-- Group actions are shared for all LISTS | See '../../_shared' folder -->\r\n\t\t\t<div class=\"row align-items-center collapse kt-form__group-actions kt-margin-top-20 kt-margin-bottom-20\" [ngClass]=\"{'show' : selection.selected.length > 0}\">\r\n\t\t\t\t<div class=\"col-xl-12\">\r\n\t\t\t\t\t<div class=\"kt-form__group kt-form__group--inline\">\r\n\t\t\t\t\t\t<div class=\"kt-form__label kt-form__label-no-wrap\">\r\n\t\t\t\t\t\t\t<label class=\"kt--font-bold kt-font-danger-\">Selected records count: {{ selection.selected.length }}</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-form__control kt-form__group--inline\">\r\n\t\t\t\t\t\t\t<button mat-raised-button color=\"accent\" (click)=\"deleteProducts()\" matTooltip=\"Delete selected products\"  class=\"mat-button-mt-4\">\r\n\t\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t\t\tDelete All\r\n\t\t\t\t\t\t\t</button>&nbsp;<!-- Call 'delete-entity-dialog' from _shared folder -->\r\n\t\t\t\t\t\t\t<button mat-raised-button (click)=\"fetchProducts()\" matTooltip=\"Fetch selected products\"  class=\"mat-button-mt-4\">\r\n\t\t\t\t\t\t\t\t<mat-icon>clear_all</mat-icon>\r\n\t\t\t\t\t\t\t\tFetch Selected Records\r\n\t\t\t\t\t\t\t</button>&nbsp;<!-- Call 'fetch-entity-dialog' from _shared folder -->\r\n\t\t\t\t\t\t\t<button mat-raised-button (click)=\"updateStatusForProducts()\" matTooltip=\"Update status for selected products\"  class=\"mat-button-mt-4\">\r\n\t\t\t\t\t\t\t\t<mat-icon>update</mat-icon>\r\n\t\t\t\t\t\t\t\tUpdate status\r\n\t\t\t\t\t\t\t</button><!-- Call 'update-stated-dialog' from _shared folder -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::GROUP ACTIONS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<!-- Checkbox Column -->\r\n\t\t\t<!-- Table with selection -->\r\n\t\t\t<!-- https://run.stackblitz.com/api/angular/v1?file=app%2Ftable-selection-example.ts -->\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\"\r\n\t\t\t\t#table\r\n\t\t\t\t[dataSource]=\"dataSource\"\r\n\t\t\t\tmatSort\r\n\t\t\t\t#sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"id\"\r\n\t\t\t\tmatSortDirection=\"asc\"\r\n\t\t\t\tmatSortDisableClear>\r\n\t\t\t\t<!-- Checkbox Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"select\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n\t\t\t\t\t\t\t[checked]=\"selection.hasValue() && isAllSelected()\"\r\n\t\t\t\t\t\t\t[indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n\t\t\t\t\t\t\t[color]=\"'primary'\">\r\n\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\" class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\"\r\n\t\t\t\t\t\t\t(change)=\"$event ? selection.toggle(row) : null\"\r\n\t\t\t\t\t\t\t[checked]=\"selection.isSelected(row)\"\r\n\t\t\t\t\t\t\t[color]=\"'primary'\">\r\n\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"VINCode\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"mat-column-vinCode\">VIN Code (ID)</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let product\" class=\"mat-column-vinCode\">{{product.VINCode}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"manufacture\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Manufacture</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let product\">{{product.manufacture}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"model\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Model</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let product\">{{product.model}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"modelYear\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Model Year</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let product\">{{product.modelYear}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"color\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Color</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let product\" [ngStyle]=\"{ 'color' : product.color }\">{{product.color}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"price\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Price</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let product\">${{product.price}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let product\">\r\n\t\t\t\t\t\t<span class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--{{ getItemCssClassByStatus(product.status) }} kt-badge--wide\">{{ getItemStatusString(product.status) }}</span>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"condition\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Condition</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let product\">\r\n\t\t\t\t\t\t<span class=\"kt-badge kt-badge--{{ getItemCssClassByCondition(product.condition) }} kt-badge--dot\"></span>&nbsp;\r\n\t\t\t\t\t\t<span class=\"kt--font-bold kt-font-{{ getItemCssClassByCondition(product.condition) }}\">{{ getItemConditionString(product.condition) }}</span>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>\r\n\t\t\t\t\t\tActions\r\n\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let product\">\r\n\t\t\t\t\t\t<button type=\"button\" (click)=\"editProduct(product.id)\" mat-icon-button color=\"primary\" matTooltip=\"Edit product\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" type=\"button\" (click)=\"deleteProduct(product)\" matTooltip=\"Delete product\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" matTooltip=\"More actions\">\r\n\t\t\t\t\t\t\t<mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<mat-menu #menu=\"matMenu\">\r\n\t\t\t\t\t\t\t<button mat-menu-item type=\"button\">\r\n\t\t\t\t\t\t\t\t<mat-icon>subject</mat-icon>\r\n\t\t\t\t\t\t\t\t<span>Remarks</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button mat-menu-item type=\"button\">\r\n\t\t\t\t\t\t\t\t<mat-icon>assignment</mat-icon>\r\n\t\t\t\t\t\t\t\t<span>Specifications</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.hasItems\">No records found</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"dataSource.isPreloadTextViewed$ | async\">Please wait....</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[3, 5, 10]\" [length]=\"dataSource.paginatorTotal$ | async\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/apps/e-commerce/products/products-list/products-list.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/apps/e-commerce/products/products-list/products-list.component.ts ***!
  \***********************************************************************************************/
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// Material
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var collections_1 = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
// RXJS
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// UI
var layout_1 = __webpack_require__(/*! ../../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
// CRUD
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
// Services and Models
var e_commerce_1 = __webpack_require__(/*! ../../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
// Table with EDIT item in new page
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var ProductsListComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialog: MatDialog
     * @param activatedRoute: ActivatedRoute
     * @param router: Router
     * @param subheaderService: SubheaderService
     * @param layoutUtilsService: LayoutUtilsService
     * @param store: Store<AppState>
     */
    function ProductsListComponent(dialog, activatedRoute, router, subheaderService, layoutUtilsService, store) {
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.store = store;
        this.displayedColumns = ['select', 'VINCode', 'manufacture', 'model', 'modelYear', 'color', 'price', 'condition', 'status', 'actions'];
        this.filterStatus = '';
        this.filterCondition = '';
        // Selection
        this.selection = new collections_1.SelectionModel(true, []);
        this.productsResult = [];
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        var sortSubscription = this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        this.subscriptions.push(sortSubscription);
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        var paginatorSubscriptions = rxjs_1.merge(this.sort.sortChange, this.paginator.page).pipe(operators_1.tap(function () { return _this.loadProductsList(); }))
            .subscribe();
        this.subscriptions.push(paginatorSubscriptions);
        // Filtration, bind to searchInput
        var searchSubscription = rxjs_1.fromEvent(this.searchInput.nativeElement, 'keyup').pipe(operators_1.debounceTime(150), operators_1.distinctUntilChanged(), operators_1.tap(function () {
            _this.paginator.pageIndex = 0;
            _this.loadProductsList();
        }))
            .subscribe();
        this.subscriptions.push(searchSubscription);
        // Set title to page breadCrumbs
        this.subheaderService.setTitle('Products');
        // Init DataSource
        this.dataSource = new e_commerce_1.ProductsDataSource(this.store);
        var entitiesSubscription = this.dataSource.entitySubject.pipe(operators_1.skip(1), operators_1.distinctUntilChanged()).subscribe(function (res) {
            _this.productsResult = res;
        });
        this.subscriptions.push(entitiesSubscription);
        var lastQuerySubscription = this.store.pipe(store_1.select(e_commerce_1.selectProductsPageLastQuery)).subscribe(function (res) { return _this.lastQuery = res; });
        // Load last query from store
        this.subscriptions.push(lastQuerySubscription);
        // Read from URL itemId, for restore previous state
        var routeSubscription = this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.id) {
                _this.restoreState(_this.lastQuery, +params.id);
            }
            // First load
            rxjs_1.of(undefined).pipe(operators_1.delay(1000)).subscribe(function () {
                _this.loadProductsList();
            }); // Remove this line, just loading imitation
        });
        this.subscriptions.push(routeSubscription);
    };
    /**
     * On Destroy
     */
    ProductsListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load Products List
     */
    ProductsListComponent.prototype.loadProductsList = function () {
        this.selection.clear();
        var queryParams = new crud_1.QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        // Call request from server
        this.store.dispatch(new e_commerce_1.ProductsPageRequested({ page: queryParams }));
        this.selection.clear();
    };
    /**
     * Returns object for filter
     */
    ProductsListComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value;
        if (this.filterStatus && this.filterStatus.length > 0) {
            filter.status = +this.filterStatus;
        }
        if (this.filterCondition && this.filterCondition.length > 0) {
            filter.condition = +this.filterCondition;
        }
        filter.model = searchText;
        filter.manufacture = searchText;
        filter.color = searchText;
        filter.VINCode = searchText;
        return filter;
    };
    /**
     * Restore state
     *
     * @param queryParams: QueryParamsModel
     * @param id: number
     */
    ProductsListComponent.prototype.restoreState = function (queryParams, id) {
        if (!queryParams.filter) {
            return;
        }
        if ('condition' in queryParams.filter) {
            this.filterCondition = queryParams.filter.condition.toString();
        }
        if ('status' in queryParams.filter) {
            this.filterStatus = queryParams.filter.status.toString();
        }
        if (queryParams.filter.model) {
            this.searchInput.nativeElement.value = queryParams.filter.model;
        }
    };
    /** ACTIONS */
    /**
     * Delete product
     *
     * @param _item: ProductModel
     */
    ProductsListComponent.prototype.deleteProduct = function (_item) {
        var _this = this;
        var _title = 'Product Delete';
        var _description = 'Are you sure to permanently delete this product?';
        var _waitDesciption = 'Product is deleting...';
        var _deleteMessage = "Product has been deleted";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.store.dispatch(new e_commerce_1.OneProductDeleted({ id: _item.id }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
        });
    };
    /**
     * Delete products
     */
    ProductsListComponent.prototype.deleteProducts = function () {
        var _this = this;
        var _title = 'Products Delete';
        var _description = 'Are you sure to permanently delete selected products?';
        var _waitDesciption = 'Products are deleting...';
        var _deleteMessage = 'Selected products have been deleted';
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            var idsForDeletion = [];
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < _this.selection.selected.length; i++) {
                idsForDeletion.push(_this.selection.selected[i].id);
            }
            _this.store.dispatch(new e_commerce_1.ManyProductsDeleted({ ids: idsForDeletion }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
            _this.selection.clear();
        });
    };
    /**
     * Fetch selected products
     */
    ProductsListComponent.prototype.fetchProducts = function () {
        // tslint:disable-next-line:prefer-const
        var messages = [];
        this.selection.selected.forEach(function (elem) {
            messages.push({
                text: elem.manufacture + " " + elem.model + " " + elem.modelYear,
                id: elem.VINCode,
                status: elem.status
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    };
    /**
     * Update status dialog
     */
    ProductsListComponent.prototype.updateStatusForProducts = function () {
        var _this = this;
        var _title = 'Update status for selected products';
        var _updateMessage = 'Status has been updated for selected products';
        var _statuses = [{ value: 0, text: 'Selling' }, { value: 1, text: 'Sold' }];
        var _messages = [];
        this.selection.selected.forEach(function (elem) {
            _messages.push({
                text: elem.manufacture + " " + elem.model + " " + elem.modelYear,
                id: elem.VINCode,
                status: elem.status,
                statusTitle: _this.getItemStatusString(elem.status),
                statusCssClass: _this.getItemCssClassByStatus(elem.status)
            });
        });
        var dialogRef = this.layoutUtilsService.updateStatusForEntities(_title, _statuses, _messages);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                _this.selection.clear();
                return;
            }
            _this.store.dispatch(new e_commerce_1.ProductsStatusUpdated({
                status: +res,
                products: _this.selection.selected
            }));
            _this.layoutUtilsService.showActionNotification(_updateMessage, crud_1.MessageType.Update);
            _this.selection.clear();
        });
    };
    /**
     * Redirect to edit page
     *
     * @param id: any
     */
    ProductsListComponent.prototype.editProduct = function (id) {
        this.router.navigate(['../products/edit', id], { relativeTo: this.activatedRoute });
    };
    /**
     * Check all rows are selected
     */
    ProductsListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.productsResult.length;
        return numSelected === numRows;
    };
    /**
     * Selects all rows if they are not all selected; otherwise clear selection
     */
    ProductsListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else {
            this.productsResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    /* UI */
    /**
     * Returns status string
     *
     * @param status: number
     */
    ProductsListComponent.prototype.getItemStatusString = function (status) {
        if (status === void 0) { status = 0; }
        switch (status) {
            case 0:
                return 'Selling';
            case 1:
                return 'Sold';
        }
        return '';
    };
    /**
     * Returns CSS Class by status
     *
     * @param status: number
     */
    ProductsListComponent.prototype.getItemCssClassByStatus = function (status) {
        if (status === void 0) { status = 0; }
        switch (status) {
            case 0:
                return 'success';
            case 1:
                return 'metal';
        }
        return '';
    };
    /**
     * Rerurns condition string
     *
     * @param condition: number
     */
    ProductsListComponent.prototype.getItemConditionString = function (condition) {
        if (condition === void 0) { condition = 0; }
        switch (condition) {
            case 0:
                return 'New';
            case 1:
                return 'Used';
        }
        return '';
    };
    /**
     * Returns CSS Class by condition
     *
     * @param condition: number
     */
    ProductsListComponent.prototype.getItemCssClassByCondition = function (condition) {
        if (condition === void 0) { condition = 0; }
        switch (condition) {
            case 0:
                return 'accent';
            case 1:
                return 'primary';
        }
        return '';
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], ProductsListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('sort1'),
        __metadata("design:type", material_1.MatSort)
    ], ProductsListComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], ProductsListComponent.prototype, "searchInput", void 0);
    ProductsListComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'kt-products-list',
            template: __webpack_require__(/*! ./products-list.component.html */ "./src/app/views/pages/apps/e-commerce/products/products-list/products-list.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [material_1.MatDialog,
            router_1.ActivatedRoute,
            router_1.Router,
            layout_1.SubheaderService,
            crud_1.LayoutUtilsService,
            store_1.Store])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
exports.ProductsListComponent = ProductsListComponent;


/***/ })

}]);
//# sourceMappingURL=default~app-views-pages-apps-e-commerce-e-commerce-module~app-views-themes-demo2-theme-module.js.map