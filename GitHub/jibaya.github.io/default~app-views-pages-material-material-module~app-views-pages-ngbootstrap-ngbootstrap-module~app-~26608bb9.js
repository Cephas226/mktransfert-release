(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-views-pages-material-material-module~app-views-pages-ngbootstrap-ngbootstrap-module~app-~26608bb9"],{

/***/ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js ***!
  \***********************************************************/
/*! exports provided: CLIPBOARD_SERVICE_PROVIDER_FACTORY, ClipboardService, CLIPBOARD_SERVICE_PROVIDER, ClipboardDirective, ClipboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIPBOARD_SERVICE_PROVIDER_FACTORY", function() { return CLIPBOARD_SERVICE_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIPBOARD_SERVICE_PROVIDER", function() { return CLIPBOARD_SERVICE_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardDirective", function() { return ClipboardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-window-token */ "./node_modules/ngx-window-token/fesm5/ngx-window-token.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ClipboardService = /** @class */ (function () {
    function ClipboardService(document, window) {
        this.document = document;
        this.window = window;
    }
    Object.defineProperty(ClipboardService.prototype, "isSupported", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @return {?}
     */
    ClipboardService.prototype.isTargetValid = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            if (element.hasAttribute('disabled')) {
                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            }
            return true;
        }
        throw new Error('Target should be input or textarea');
    };
    /**
     * copyFromInputElement
     * @param {?} targetElm
     * @return {?}
     */
    ClipboardService.prototype.copyFromInputElement = /**
     * copyFromInputElement
     * @param {?} targetElm
     * @return {?}
     */
    function (targetElm) {
        try {
            this.selectTarget(targetElm);
            /** @type {?} */
            var re = this.copyText();
            this.clearSelection(targetElm, this.window);
            return re && this.isCopySuccessInIE11();
        }
        catch (error) {
            return false;
        }
    };
    // this is for IE11 return true even if copy fail
    /**
     * @return {?}
     */
    ClipboardService.prototype.isCopySuccessInIE11 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var clipboardData = this.window['clipboardData'];
        if (clipboardData && clipboardData.getData) {
            if (!clipboardData.getData('Text')) {
                return false;
            }
        }
        return true;
    };
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @param {?=} container
     * @return {?}
     */
    ClipboardService.prototype.copyFromContent = /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @param {?=} container
     * @return {?}
     */
    function (content, container) {
        if (container === void 0) { container = this.window.document.body; }
        // check if the temp textarea is still belong the current container.
        // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
        if (this.tempTextArea && !container.contains(this.tempTextArea)) {
            this.destroy(this.tempTextArea.parentElement);
        }
        if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);
            try {
                container.appendChild(this.tempTextArea);
            }
            catch (error) {
                throw new Error('Container should be a Dom element');
            }
        }
        this.tempTextArea.value = content;
        return this.copyFromInputElement(this.tempTextArea);
    };
    /**
     * @param {?=} container
     * @return {?}
     */
    ClipboardService.prototype.destroy = /**
     * @param {?=} container
     * @return {?}
     */
    function (container) {
        if (container === void 0) { container = this.window.document.body; }
        if (this.tempTextArea) {
            container.removeChild(this.tempTextArea);
            // removeChild doesn't remove the reference from memory
            this.tempTextArea = undefined;
        }
    };
    /**
     * @param {?} inputElement
     * @return {?}
     */
    ClipboardService.prototype.selectTarget = /**
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        inputElement.select();
        inputElement.setSelectionRange(0, inputElement.value.length);
        return inputElement.value.length;
    };
    /**
     * @return {?}
     */
    ClipboardService.prototype.copyText = /**
     * @return {?}
     */
    function () {
        return this.document.execCommand('copy');
    };
    /**
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.clearSelection = /**
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    function (inputElement, window) {
        // tslint:disable-next-line:no-unused-expression
        inputElement && inputElement.blur();
        window.getSelection().removeAllRanges();
    };
    /**
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.createTempTextArea = /**
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    function (doc, window) {
        /** @type {?} */
        var isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        /** @type {?} */
        var ta;
        ta = doc.createElement('textarea');
        // Prevent zooming on iOS
        ta.style.fontSize = '12pt';
        // Reset box model
        ta.style.border = '0';
        ta.style.padding = '0';
        ta.style.margin = '0';
        // Move element out of screen horizontally
        ta.style.position = 'absolute';
        ta.style[isRTL ? 'right' : 'left'] = '-9999px';
        /** @type {?} */
        var yPosition = window.pageYOffset || doc.documentElement.scrollTop;
        ta.style.top = yPosition + 'px';
        ta.setAttribute('readonly', '');
        return ta;
    };
    ClipboardService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_2__["WINDOW"],] }] }
    ]; };
    return ClipboardService;
}());
/**
 * @param {?} doc
 * @param {?} win
 * @param {?} parentDispatcher
 * @return {?}
 */
function CLIPBOARD_SERVICE_PROVIDER_FACTORY(doc, win, parentDispatcher) {
    return parentDispatcher || new ClipboardService(doc, win);
}
/** @type {?} */
var CLIPBOARD_SERVICE_PROVIDER = {
    deps: [/** @type {?} */ (_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), /** @type {?} */ (ngx_window_token__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]), [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ClipboardService]],
    provide: ClipboardService,
    useFactory: CLIPBOARD_SERVICE_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ClipboardDirective = /** @class */ (function () {
    function ClipboardDirective(clipboardSrv) {
        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clipboardSrv.destroy(this.container);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ClipboardDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined, event);
        }
        else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
        }
        else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
        }
    };
    /**
     * Fires an event based on the copy operation result.
     * @param {?} succeeded
     * @param {?} copiedContent
     * @param {?} event
     * @return {?}
     */
    ClipboardDirective.prototype.handleResult = /**
     * Fires an event based on the copy operation result.
     * @param {?} succeeded
     * @param {?} copiedContent
     * @param {?} event
     * @return {?}
     */
    function (succeeded, copiedContent, event) {
        if (succeeded) {
            this.cbOnSuccess.emit({ isSuccess: true, content: copiedContent, event: event });
        }
        else {
            this.cbOnError.emit({ isSuccess: false, event: event });
        }
    };
    ClipboardDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[ngxClipboard]'
                },] },
    ];
    /** @nocollapse */
    ClipboardDirective.ctorParameters = function () { return [
        { type: ClipboardService }
    ]; };
    ClipboardDirective.propDecorators = {
        targetElm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngxClipboard',] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cbContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cbOnSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cbOnError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event.target'],] }]
    };
    return ClipboardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ClipboardModule = /** @class */ (function () {
    function ClipboardModule() {
    }
    ClipboardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ngx_window_token__WEBPACK_IMPORTED_MODULE_2__["NgxWindowTokenModule"]],
                    // tslint:disable-next-line:object-literal-sort-keys
                    declarations: [ClipboardDirective],
                    exports: [ClipboardDirective],
                    providers: [CLIPBOARD_SERVICE_PROVIDER]
                },] },
    ];
    return ClipboardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNsaXBib2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWNsaXBib2FyZC9saWIvbmd4LWNsaXBib2FyZC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtY2xpcGJvYXJkL2xpYi9uZ3gtY2xpcGJvYXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWNsaXBib2FyZC9saWIvbmd4LWNsaXBib2FyZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ25neC13aW5kb3ctdG9rZW4nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHRlbXBUZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHB1YmxpYyBkb2N1bWVudDogYW55LCBASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSB3aW5kb3c6IGFueSkge31cclxuICAgIHB1YmxpYyBnZXQgaXNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5kb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQgJiYgISF0aGlzLmRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZCgnY29weScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1RhcmdldFZhbGlkKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBQbGVhc2UgdXNlIFwicmVhZG9ubHlcIiBpbnN0ZWFkIG9mIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXJnZXQgc2hvdWxkIGJlIGlucHV0IG9yIHRleHRhcmVhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjb3B5RnJvbUlucHV0RWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29weUZyb21JbnB1dEVsZW1lbnQodGFyZ2V0RWxtOiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFyZ2V0KHRhcmdldEVsbSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlID0gdGhpcy5jb3B5VGV4dCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKHRhcmdldEVsbSwgdGhpcy53aW5kb3cpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmUgJiYgdGhpcy5pc0NvcHlTdWNjZXNzSW5JRTExKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGlzIGZvciBJRTExIHJldHVybiB0cnVlIGV2ZW4gaWYgY29weSBmYWlsXHJcbiAgICBpc0NvcHlTdWNjZXNzSW5JRTExKCkge1xyXG4gICAgICAgIGNvbnN0IGNsaXBib2FyZERhdGEgPSB0aGlzLndpbmRvd1snY2xpcGJvYXJkRGF0YSddO1xyXG4gICAgICAgIGlmIChjbGlwYm9hcmREYXRhICYmIGNsaXBib2FyZERhdGEuZ2V0RGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIWNsaXBib2FyZERhdGEuZ2V0RGF0YSgnVGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZmFrZSB0ZXh0YXJlYSBlbGVtZW50LCBzZXRzIGl0cyB2YWx1ZSBmcm9tIGB0ZXh0YCBwcm9wZXJ0eSxcclxuICAgICAqIGFuZCBtYWtlcyBhIHNlbGVjdGlvbiBvbiBpdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvcHlGcm9tQ29udGVudChjb250ZW50OiBzdHJpbmcsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB0aGlzLndpbmRvdy5kb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHRlbXAgdGV4dGFyZWEgaXMgc3RpbGwgYmVsb25nIHRoZSBjdXJyZW50IGNvbnRhaW5lci5cclxuICAgICAgICAvLyBJbiBjYXNlIHdlIGhhdmUgbXVsdGlwbGUgcGxhY2VzIHVzaW5nIG5neC1jbGlwYm9hcmQsIG9uZSBpcyBpbiBhIG1vZGFsIHVzaW5nIGNvbnRhaW5lciBidXQgdGhlIG90aGVyIG9uZSBpcyBub3QuXHJcbiAgICAgICAgaWYgKHRoaXMudGVtcFRleHRBcmVhICYmICFjb250YWluZXIuY29udGFpbnModGhpcy50ZW1wVGV4dEFyZWEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSh0aGlzLnRlbXBUZXh0QXJlYS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy50ZW1wVGV4dEFyZWEpIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wVGV4dEFyZWEgPSB0aGlzLmNyZWF0ZVRlbXBUZXh0QXJlYSh0aGlzLmRvY3VtZW50LCB0aGlzLndpbmRvdyk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50ZW1wVGV4dEFyZWEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250YWluZXIgc2hvdWxkIGJlIGEgRG9tIGVsZW1lbnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRlbXBUZXh0QXJlYS52YWx1ZSA9IGNvbnRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29weUZyb21JbnB1dEVsZW1lbnQodGhpcy50ZW1wVGV4dEFyZWEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSB0ZW1wb3JhcnkgdGV4dGFyZWEgaWYgYW55XHJcbiAgICBwdWJsaWMgZGVzdHJveShjb250YWluZXI6IEhUTUxFbGVtZW50ID0gdGhpcy53aW5kb3cuZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRlbXBUZXh0QXJlYSkge1xyXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy50ZW1wVGV4dEFyZWEpO1xyXG4gICAgICAgICAgICAvLyByZW1vdmVDaGlsZCBkb2Vzbid0IHJlbW92ZSB0aGUgcmVmZXJlbmNlIGZyb20gbWVtb3J5XHJcbiAgICAgICAgICAgIHRoaXMudGVtcFRleHRBcmVhID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3QgdGhlIHRhcmdldCBodG1sIGlucHV0IGVsZW1lbnRcclxuICAgIHByaXZhdGUgc2VsZWN0VGFyZ2V0KGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlucHV0RWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgICBpbnB1dEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgaW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0RWxlbWVudC52YWx1ZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3B5VGV4dCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgfVxyXG4gICAgLy8gUmVtb3ZlcyBjdXJyZW50IHNlbGVjdGlvbiBhbmQgZm9jdXMgZnJvbSBgdGFyZ2V0YCBlbGVtZW50LlxyXG4gICAgcHJpdmF0ZSBjbGVhclNlbGVjdGlvbihpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50LCB3aW5kb3c6IFdpbmRvdykge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgICAgIGlucHV0RWxlbWVudCAmJiBpbnB1dEVsZW1lbnQuYmx1cigpO1xyXG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGUgYSBmYWtlIHRleHRhcmVhIGZvciBjb3B5IGNvbW1hbmRcclxuICAgIHByaXZhdGUgY3JlYXRlVGVtcFRleHRBcmVhKGRvYzogRG9jdW1lbnQsIHdpbmRvdzogV2luZG93KTogSFRNTFRleHRBcmVhRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgaXNSVEwgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlyJykgPT09ICdydGwnO1xyXG4gICAgICAgIGxldCB0YTogSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgICAgICB0YSA9IGRvYy5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIC8vIFByZXZlbnQgem9vbWluZyBvbiBpT1NcclxuICAgICAgICB0YS5zdHlsZS5mb250U2l6ZSA9ICcxMnB0JztcclxuICAgICAgICAvLyBSZXNldCBib3ggbW9kZWxcclxuICAgICAgICB0YS5zdHlsZS5ib3JkZXIgPSAnMCc7XHJcbiAgICAgICAgdGEuc3R5bGUucGFkZGluZyA9ICcwJztcclxuICAgICAgICB0YS5zdHlsZS5tYXJnaW4gPSAnMCc7XHJcbiAgICAgICAgLy8gTW92ZSBlbGVtZW50IG91dCBvZiBzY3JlZW4gaG9yaXpvbnRhbGx5XHJcbiAgICAgICAgdGEuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHRhLnN0eWxlW2lzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSAnLTk5OTlweCc7XHJcbiAgICAgICAgLy8gTW92ZSBlbGVtZW50IHRvIHRoZSBzYW1lIHBvc2l0aW9uIHZlcnRpY2FsbHlcclxuICAgICAgICBjb25zdCB5UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgdGEuc3R5bGUudG9wID0geVBvc2l0aW9uICsgJ3B4JztcclxuICAgICAgICB0YS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xyXG4gICAgICAgIHJldHVybiB0YTtcclxuICAgIH1cclxufVxyXG4vLyB0aGlzIHBhdHRlcm4gaXMgbWVudGlvbmVkIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEzODU0IGluICM0M1xyXG5leHBvcnQgZnVuY3Rpb24gQ0xJUEJPQVJEX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShkb2M6IERvY3VtZW50LCB3aW46IFdpbmRvdywgcGFyZW50RGlzcGF0Y2hlcjogQ2xpcGJvYXJkU2VydmljZSkge1xyXG4gICAgcmV0dXJuIHBhcmVudERpc3BhdGNoZXIgfHwgbmV3IENsaXBib2FyZFNlcnZpY2UoZG9jLCB3aW4pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ0xJUEJPQVJEX1NFUlZJQ0VfUFJPVklERVIgPSB7XHJcbiAgICBkZXBzOiBbRE9DVU1FTlQgYXMgSW5qZWN0aW9uVG9rZW48RG9jdW1lbnQ+LCBXSU5ET1cgYXMgSW5qZWN0aW9uVG9rZW48V2luZG93PiwgW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgQ2xpcGJvYXJkU2VydmljZV1dLFxyXG4gICAgcHJvdmlkZTogQ2xpcGJvYXJkU2VydmljZSxcclxuICAgIHVzZUZhY3Rvcnk6IENMSVBCT0FSRF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUllcclxufTtcclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENsaXBib2FyZFNlcnZpY2UgfSBmcm9tICcuL25neC1jbGlwYm9hcmQuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICAgIHNlbGVjdG9yOiAnW25neENsaXBib2FyZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGlwYm9hcmREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcbiAgICBASW5wdXQoJ25neENsaXBib2FyZCcpXHJcbiAgICBwdWJsaWMgdGFyZ2V0RWxtOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBjb250YWluZXI6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBjYkNvbnRlbnQ6IHN0cmluZztcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBjYk9uU3VjY2VzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBjYk9uRXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaXBib2FyZFNydjogQ2xpcGJvYXJkU2VydmljZSkge31cclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHt9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY2xpcGJvYXJkU3J2LmRlc3Ryb3kodGhpcy5jb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXHJcbiAgICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2xpcGJvYXJkU3J2LmlzU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KGZhbHNlLCB1bmRlZmluZWQsIGV2ZW50KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0RWxtICYmIHRoaXMuY2xpcGJvYXJkU3J2LmlzVGFyZ2V0VmFsaWQodGhpcy50YXJnZXRFbG0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KHRoaXMuY2xpcGJvYXJkU3J2LmNvcHlGcm9tSW5wdXRFbGVtZW50KHRoaXMudGFyZ2V0RWxtKSwgdGhpcy50YXJnZXRFbG0udmFsdWUsIGV2ZW50KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2JDb250ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KHRoaXMuY2xpcGJvYXJkU3J2LmNvcHlGcm9tQ29udGVudCh0aGlzLmNiQ29udGVudCwgdGhpcy5jb250YWluZXIpLCB0aGlzLmNiQ29udGVudCwgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpcmVzIGFuIGV2ZW50IGJhc2VkIG9uIHRoZSBjb3B5IG9wZXJhdGlvbiByZXN1bHQuXHJcbiAgICAgKiBAcGFyYW0gc3VjY2VlZGVkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlUmVzdWx0KHN1Y2NlZWRlZDogYm9vbGVhbiwgY29waWVkQ29udGVudDogc3RyaW5nIHwgdW5kZWZpbmVkLCBldmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAoc3VjY2VlZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2JPblN1Y2Nlc3MuZW1pdCh7IGlzU3VjY2VzczogdHJ1ZSwgY29udGVudDogY29waWVkQ29udGVudCwgZXZlbnQ6IGV2ZW50IH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2JPbkVycm9yLmVtaXQoeyBpc1N1Y2Nlc3M6IGZhbHNlLCBldmVudDogZXZlbnQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENsaXBib2FyZERpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LWNsaXBib2FyZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ0xJUEJPQVJEX1NFUlZJQ0VfUFJPVklERVIgfSBmcm9tICcuL25neC1jbGlwYm9hcmQuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFdpbmRvd1Rva2VuTW9kdWxlIH0gZnJvbSAnbmd4LXdpbmRvdy10b2tlbic7XG5leHBvcnQgKiBmcm9tICcuL25neC1jbGlwYm9hcmQuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vbmd4LWNsaXBib2FyZC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmd4V2luZG93VG9rZW5Nb2R1bGVdLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gIGRlY2xhcmF0aW9uczogW0NsaXBib2FyZERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtDbGlwYm9hcmREaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtDTElQQk9BUkRfU0VSVklDRV9QUk9WSURFUl1cbn0pXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFPSSwwQkFBcUMsUUFBYSxFQUEwQixNQUFXO1FBQWxELGFBQVEsR0FBUixRQUFRLENBQUs7UUFBMEIsV0FBTSxHQUFOLE1BQU0sQ0FBSztLQUFJOzBCQUNoRix5Q0FBVzs7Ozs7WUFDbEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBRzNGLHdDQUFhOzs7O2NBQUMsT0FBK0M7UUFDaEUsSUFBSSxPQUFPLFlBQVksZ0JBQWdCLElBQUksT0FBTyxZQUFZLG1CQUFtQixFQUFFO1lBQy9FLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDO2FBQ3hHO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMs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

/***/ }),

/***/ "./node_modules/ngx-window-token/fesm5/ngx-window-token.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-window-token/fesm5/ngx-window-token.js ***!
  \*****************************************************************/
/*! exports provided: WINDOW, _window, NgxWindowTokenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_window", function() { return _window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxWindowTokenModule", function() { return NgxWindowTokenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken');
/**
 * @return {?}
 */
function _window() {
    return window;
}
var NgxWindowTokenModule = /** @class */ (function () {
    function NgxWindowTokenModule() {
    }
    NgxWindowTokenModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [{
                            provide: WINDOW,
                            useFactory: _window
                        }]
                },] },
    ];
    return NgxWindowTokenModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXdpbmRvdy10b2tlbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXdpbmRvdy10b2tlbi9saWIvbmd4LXdpbmRvdy10b2tlbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBXSU5ET1cgPSBuZXcgSW5qZWN0aW9uVG9rZW48V2luZG93PignV2luZG93VG9rZW4nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIF93aW5kb3coKTogV2luZG93IHtcbiAgICByZXR1cm4gd2luZG93O1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIHByb3ZpZGVyczogW3tcbiAgICAgICAgcHJvdmlkZTogV0lORE9XLFxuICAgICAgICB1c2VGYWN0b3J5OiBfd2luZG93XG4gICAgfV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4V2luZG93VG9rZW5Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBR2EsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFTLGFBQWEsQ0FBQyxDQUFDOzs7O0FBRWhFO0lBQ0ksT0FBTyxNQUFNLENBQUM7Q0FDakI7Ozs7O2dCQUVBLFFBQVEsU0FBQztvQkFDTixTQUFTLEVBQUUsQ0FBQzs0QkFDUixPQUFPLEVBQUUsTUFBTTs0QkFDZixVQUFVLEVBQUUsT0FBTzt5QkFDdEIsQ0FBQztpQkFDTDs7K0JBZEQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./src/app/views/partials/content/general/code-preview/code-preview-inner/code-preview-inner.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/views/partials/content/general/code-preview/code-preview-inner/code-preview-inner.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h3 *ngIf=\"title\">{{title}}</h3>\r\n\r\n<ng-content *ngIf=\"htmlCode\"></ng-content>\r\n<br />\r\n\r\n<ngb-tabset>\r\n\t<ngb-tab *ngIf=\"htmlCode\">\r\n\t\t<!-- HTML sample code -->\r\n\t\t<ng-template ngbTabTitle>HTML</ng-template>\r\n\t\t<ng-template ngbTabContent>\r\n\t\t\t\t<pre class=\"language-html\"><code class=\"language-html\" [textContent]=\"htmlCode\"></code></pre>\r\n\t\t</ng-template>\r\n\t\t<!-- /HTML sample code -->\r\n\t</ngb-tab>\r\n\t<ngb-tab *ngIf=\"tsCode\">\r\n\t\t<!-- Typescript sample code -->\r\n\t\t<ng-template ngbTabTitle>Typescript</ng-template>\r\n\t\t<ng-template ngbTabContent>\r\n\t\t\t<pre class=\"language-typescript\"> <code class=\"language-typescript\" [textContent]=\"tsCode\"></code></pre>\r\n\t\t</ng-template>\r\n\t\t<!-- /Typescript sample code -->\r\n\t</ngb-tab>\r\n\t<ngb-tab *ngIf=\"scssCode\">\r\n\t\t<!-- SCSS sample code -->\r\n\t\t<ng-template ngbTabTitle>SCSS</ng-template>\r\n\t\t<ng-template ngbTabContent>\r\n\t\t\t<pre class=\"language-css\"> <code class=\"language-css\" [textContent]=\"scssCode\"></code></pre>\r\n\t\t</ng-template>\r\n\t\t<!-- /SCSS sample code -->\r\n\t</ngb-tab>\r\n</ngb-tabset>"

/***/ }),

/***/ "./src/app/views/partials/content/general/code-preview/code-preview-inner/code-preview-inner.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/views/partials/content/general/code-preview/code-preview-inner/code-preview-inner.component.ts ***!
  \****************************************************************************************************************/
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
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var CodePreviewInnerComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param sanitizer sanitizer
     */
    function CodePreviewInnerComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    CodePreviewInnerComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CodePreviewInnerComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CodePreviewInnerComponent.prototype, "htmlCode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CodePreviewInnerComponent.prototype, "tsCode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CodePreviewInnerComponent.prototype, "scssCode", void 0);
    CodePreviewInnerComponent = __decorate([
        core_1.Component({
            selector: 'kt-code-preview-inner',
            template: __webpack_require__(/*! ./code-preview-inner.component.html */ "./src/app/views/partials/content/general/code-preview/code-preview-inner/code-preview-inner.component.html")
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], CodePreviewInnerComponent);
    return CodePreviewInnerComponent;
}());
exports.CodePreviewInnerComponent = CodePreviewInnerComponent;


/***/ }),

/***/ "./src/app/views/partials/content/general/code-preview/code-preview.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/partials/content/general/code-preview/code-preview.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" highlight=\"all\">\r\n\t<div class=\"col-lg-12\">\r\n\t\t<!-- portlet -->\r\n\t\t<div class=\"kt-portlet\">\r\n\t\t\t<div class=\"kt-portlet__body\">\r\n\t\t\t\t<!-- portlet content -->\r\n\t\t\t\t<ngb-tabset>\r\n\t\t\t\t\t<ngb-tab>\r\n\t\t\t\t\t\t<ng-template ngbTabTitle>Example</ng-template>\r\n\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t<!-- example -->\r\n\t\t\t\t\t\t\t<ng-content select=\".code-preview-example\"></ng-content>\r\n\t\t\t\t\t\t\t<!-- example -->\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t<ngb-tab>\r\n\t\t\t\t\t\t<ng-template ngbTabTitle>API</ng-template>\r\n\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t\t<!-- example -->\r\n\t\t\t\t\t\t\t<ng-content select=\".code-preview-api\"></ng-content>\r\n\t\t\t\t\t\t\t<!-- example -->\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t</ngb-tabset>\r\n\t\t\t\t<!-- /portlet content -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- /portlet -->\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/partials/content/general/code-preview/code-preview.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/partials/content/general/code-preview/code-preview.component.ts ***!
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var CodePreviewComponent = /** @class */ (function () {
    function CodePreviewComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CodePreviewComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CodePreviewComponent.prototype, "htmlCode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CodePreviewComponent.prototype, "tsCode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CodePreviewComponent.prototype, "scssCode", void 0);
    CodePreviewComponent = __decorate([
        core_1.Component({
            selector: 'kt-code-preview',
            template: __webpack_require__(/*! ./code-preview.component.html */ "./src/app/views/partials/content/general/code-preview/code-preview.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], CodePreviewComponent);
    return CodePreviewComponent;
}());
exports.CodePreviewComponent = CodePreviewComponent;


/***/ }),

/***/ "./src/app/views/partials/content/general/code-preview/code-preview.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/partials/content/general/code-preview/code-preview.module.ts ***!
  \************************************************************************************/
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
// NgBootstrap
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
// Code Preview
var code_preview_component_1 = __webpack_require__(/*! ./code-preview.component */ "./src/app/views/partials/content/general/code-preview/code-preview.component.ts");
var code_preview_inner_component_1 = __webpack_require__(/*! ./code-preview-inner/code-preview-inner.component */ "./src/app/views/partials/content/general/code-preview/code-preview-inner/code-preview-inner.component.ts");
var CodePreviewModule = /** @class */ (function () {
    function CodePreviewModule() {
    }
    CodePreviewModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng_bootstrap_1.NgbModule
            ],
            exports: [code_preview_component_1.CodePreviewComponent, code_preview_inner_component_1.CodePreviewInnerComponent],
            declarations: [code_preview_component_1.CodePreviewComponent, code_preview_inner_component_1.CodePreviewInnerComponent]
        })
    ], CodePreviewModule);
    return CodePreviewModule;
}());
exports.CodePreviewModule = CodePreviewModule;


/***/ }),

/***/ "./src/app/views/partials/content/general/material-preview/material-preview.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/partials/content/general/material-preview/material-preview.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet [ngClass]=\"'kt-portlet--ngviewer'\" *ngIf=\"viewItem\">\r\n\t<kt-portlet-header [title]=\"viewItem.beforeCodeTitle\">\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<!-- <ul class=\"kt-portlet__nav\">\r\n\t\t\t\t<li class=\"kt-portlet__nav-item\">\r\n\t\t\t\t\t<a href=\"javascript:;\" *ngIf=\"hasExampleSource()\" (click)=\"changeCodeVisibility()\" class=\"kt-portlet__nav-link kt-portlet__nav-link--icon\"\r\n\t\t\t\t\t\ttitle=\"View Source\">\r\n\t\t\t\t\t\t<i class=\"la la-code\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul> -->\r\n\t\t\t<div class=\"kt-portlet__head-group\">\r\n\t\t\t\t<button type=\"button\"\r\n\t\t\t\t\t*ngIf=\"hasExampleSource()\"\r\n\t\t\t\t\t(click)=\"changeCodeVisibility()\"\r\n\t\t\t\t\ttitle=\"View Source\"\r\n\t\t\t\t\tclass=\"btn btn-clean btn-sm btn-icon btn-icon-md\">\r\n\t\t\t\t\t<i class=\"la la-code\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\r\n\t<kt-portlet-body>\r\n\t\t<div class=\"kt-portlet__preview\" *ngIf=\"viewItem.beforeCodeDescription\">\r\n\t\t\t<div class=\"kt-alert kt-alert--icon kt-alert--air kt-alert--square alert alert-dismissible kt-margin-bottom-30\"\r\n\t\t\t\t[ngClass]=\"classes\" role=\"alert\">\r\n\t\t\t\t<div class=\"kt-alert__text\" [innerHTML]=\"viewItem.beforeCodeDescription | safe: 'html'\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"hasExampleSource()\" class=\"kt-portlet__preview kt-portlet__code\" [ngClass]=\"{'kt-portlet__code--show' : viewItem.isCodeVisible}\">\r\n\t\t\t<mat-tab-group *ngIf=\"viewItem.isCodeVisible\">\r\n\t\t\t\t<mat-tab label=\"HTML\" *ngIf=\"viewItem.htmlCode\">\r\n\t\t\t\t\t<a href=\"javascript:;\"\r\n\t\t\t\t\t\tclass=\"kt-portlet__code-copy\"\r\n\t\t\t\t\t\ttitle=\"Copy example source\"\r\n\t\t\t\t\t\tngxClipboard\r\n\t\t\t\t\t\t[cbContent]=\"viewItem.htmlCode\">\r\n\t\t\t\t\t\t<i class=\"la la-copy\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<pre><code [highlight]=\"viewItem.htmlCode\"></code></pre>\r\n\t\t\t\t</mat-tab>\r\n\t\t\t\t<mat-tab label=\"TS\" *ngIf=\"viewItem.tsCode\">\r\n\t\t\t\t\t<a href=\"javascript:;\"\r\n\t\t\t\t\t\tclass=\"kt-portlet__code-copy\"\r\n\t\t\t\t\t\ttitle=\"Copy example source\"\r\n\t\t\t\t\t\tngxClipboard\r\n\t\t\t\t\t\t[cbContent]=\"viewItem.tsCode\">\r\n\t\t\t\t\t\t<i class=\"la la-copy\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<pre><code [highlight]=\"viewItem.tsCode\"></code></pre>\r\n\t\t\t\t</mat-tab>\r\n\t\t\t\t<mat-tab label=\"CSS\" *ngIf=\"viewItem.cssCode\">\r\n\t\t\t\t\t<a href=\"javascript:;\"\r\n\t\t\t\t\t\tclass=\"kt-portlet__code-copy\"\r\n\t\t\t\t\t\ttitle=\"Copy example source\"\r\n\t\t\t\t\t\tngxClipboard\r\n\t\t\t\t\t\t[cbContent]=\"viewItem.cssCode\">\r\n\t\t\t\t\t\t<i class=\"la la-copy\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<pre><code [highlight]=\"viewItem.cssCode\"></code></pre>\r\n\t\t\t\t</mat-tab>\r\n\t\t\t\t<mat-tab label=\"SCSS\" *ngIf=\"viewItem.scssCode\">\r\n\t\t\t\t\t<a href=\"javascript:;\"\r\n\t\t\t\t\t\tclass=\"kt-portlet__code-copy\"\r\n\t\t\t\t\t\ttitle=\"Copy example source\"\r\n\t\t\t\t\t\tngxClipboard\r\n\t\t\t\t\t\t[cbContent]=\"viewItem.scssCode\">\r\n\t\t\t\t\t\t<i class=\"la la-copy\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<pre><code [highlight]=\"viewItem.scssCode\"></code></pre>\r\n\t\t\t\t</mat-tab>\r\n\t\t\t</mat-tab-group>\r\n\t\t</div>\r\n\r\n\t\t<!-- view -->\r\n\t\t<div class=\"kt-portlet__preview\">\r\n\t\t\t<ng-content></ng-content>\r\n\t\t</div>\r\n\t\t<!-- / view -->\r\n\r\n\t\t<!-- after Code Title -->\r\n\t\t<div *ngIf=\"viewItem.afterCodeTitle\" class=\"kt-portlet__preview\" [innerHTML]=\"viewItem.afterCodeTitle | safe: 'html'\">\r\n\t\t</div>\r\n\t\t<!-- / after Code Title -->\r\n\r\n\t\t<!-- after Code Description -->\r\n\t\t<div *ngIf=\"viewItem.afterCodeDescription\" class=\"kt-portlet__preview\" [innerHTML]=\"viewItem.afterCodeDescription | safe: 'html'\">\r\n\t\t</div>\r\n\t\t<!-- / after Code Description -->\r\n\t</kt-portlet-body>\r\n\r\n\t<kt-portlet-footer></kt-portlet-footer>\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/partials/content/general/material-preview/material-preview.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/partials/content/general/material-preview/material-preview.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .kt-portlet.kt-portlet--ngviewer .kt-portlet__body {\n  padding: 1.75rem 1.75rem; }\n\n:host .kt-portlet.kt-portlet--ngviewer .kt-portlet__body .kt-portlet__code.kt-portlet__code--show {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG93bmxvYWRzL0pJQkFZQS1QUk9KRUNULW1hc3RlciAyL3NyYy9hcHAvdmlld3MvcGFydGlhbHMvY29udGVudC9nZW5lcmFsL21hdGVyaWFsLXByZXZpZXcvbWF0ZXJpYWwtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHdCQUF3QixFQUFBOztBQUZoQztFQU1TLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFydGlhbHMvY29udGVudC9nZW5lcmFsL21hdGVyaWFsLXByZXZpZXcvbWF0ZXJpYWwtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHQua3QtcG9ydGxldC5rdC1wb3J0bGV0LS1uZ3ZpZXdlciAua3QtcG9ydGxldF9fYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMS43NXJlbSAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5rdC1wb3J0bGV0Lmt0LXBvcnRsZXQtLW5ndmlld2VyIC5rdC1wb3J0bGV0X19ib2R5IC5rdC1wb3J0bGV0X19jb2RlLmt0LXBvcnRsZXRfX2NvZGUtLXNob3cge1xyXG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/partials/content/general/material-preview/material-preview.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/partials/content/general/material-preview/material-preview.component.ts ***!
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
var MaterialPreviewComponent = /** @class */ (function () {
    /**
     * Component constructor
     */
    function MaterialPreviewComponent() {
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    MaterialPreviewComponent.prototype.ngOnInit = function () {
    };
    /**
     * Toggle visibility
     */
    MaterialPreviewComponent.prototype.changeCodeVisibility = function () {
        this.viewItem.isCodeVisible = !this.viewItem.isCodeVisible;
    };
    /**
     * Check examples existing
     */
    MaterialPreviewComponent.prototype.hasExampleSource = function () {
        if (!this.viewItem) {
            return false;
        }
        if (!this.viewItem.cssCode && !this.viewItem.htmlCode && !this.viewItem.scssCode && !this.viewItem.tsCode) {
            return false;
        }
        return true;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MaterialPreviewComponent.prototype, "viewItem", void 0);
    MaterialPreviewComponent = __decorate([
        core_1.Component({
            selector: 'kt-material-preview',
            template: __webpack_require__(/*! ./material-preview.component.html */ "./src/app/views/partials/content/general/material-preview/material-preview.component.html"),
            styles: [__webpack_require__(/*! ./material-preview.component.scss */ "./src/app/views/partials/content/general/material-preview/material-preview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MaterialPreviewComponent);
    return MaterialPreviewComponent;
}());
exports.MaterialPreviewComponent = MaterialPreviewComponent;


/***/ }),

/***/ "./src/app/views/partials/content/general/material-preview/material-preview.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/partials/content/general/material-preview/material-preview.module.ts ***!
  \********************************************************************************************/
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
var tabs_1 = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
var expansion_1 = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
var card_1 = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
var icon_1 = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
var ngx_clipboard_1 = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
// NgBootstrap
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
// Perfect ScrollBar
var ngx_perfect_scrollbar_1 = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var material_preview_component_1 = __webpack_require__(/*! ./material-preview.component */ "./src/app/views/partials/content/general/material-preview/material-preview.component.ts");
// Core Module
var core_module_1 = __webpack_require__(/*! ../../../../../core/core.module */ "./src/app/core/core.module.ts");
var portlet_module_1 = __webpack_require__(/*! ../portlet/portlet.module */ "./src/app/views/partials/content/general/portlet/portlet.module.ts");
// Highlight JS
var ngx_highlightjs_1 = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
var MaterialPreviewModule = /** @class */ (function () {
    function MaterialPreviewModule() {
    }
    MaterialPreviewModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng_bootstrap_1.NgbModule,
                core_module_1.CoreModule,
                ngx_highlightjs_1.HighlightModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                portlet_module_1.PortletModule,
                ngx_clipboard_1.ClipboardModule,
                // material modules
                tabs_1.MatTabsModule,
                expansion_1.MatExpansionModule,
                card_1.MatCardModule,
                icon_1.MatIconModule,
            ],
            exports: [material_preview_component_1.MaterialPreviewComponent],
            declarations: [material_preview_component_1.MaterialPreviewComponent]
        })
    ], MaterialPreviewModule);
    return MaterialPreviewModule;
}());
exports.MaterialPreviewModule = MaterialPreviewModule;


/***/ })

}]);
//# sourceMappingURL=default~app-views-pages-material-material-module~app-views-pages-ngbootstrap-ngbootstrap-module~app-~26608bb9.js.map