(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/views/pages/apps/mail/mail.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/apps/mail/mail.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n\t<b>Mail App:</b> - Coming soon in the following update.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/pages/apps/mail/mail.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/pages/apps/mail/mail.component.ts ***!
  \*********************************************************/
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
var MailComponent = /** @class */ (function () {
    function MailComponent() {
    }
    MailComponent = __decorate([
        core_1.Component({
            selector: 'kt-mail',
            template: __webpack_require__(/*! ./mail.component.html */ "./src/app/views/pages/apps/mail/mail.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        })
    ], MailComponent);
    return MailComponent;
}());
exports.MailComponent = MailComponent;


/***/ }),

/***/ "./src/app/views/pages/apps/mail/mail.module.ts":
/*!******************************************************!*\
  !*** ./src/app/views/pages/apps/mail/mail.module.ts ***!
  \******************************************************/
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
// Component
var mail_component_1 = __webpack_require__(/*! ./mail.component */ "./src/app/views/pages/apps/mail/mail.component.ts");
var MailModule = /** @class */ (function () {
    function MailModule() {
    }
    MailModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: mail_component_1.MailComponent
                    }
                ])
            ],
            declarations: [mail_component_1.MailComponent]
        })
    ], MailModule);
    return MailModule;
}());
exports.MailModule = MailModule;


/***/ })

}]);
//# sourceMappingURL=common.js.map