(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-dashboard-dashboard-module"],{

/***/ "./node_modules/@covalent/core/fesm5/covalent-core-data-table.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@covalent/core/fesm5/covalent-core-data-table.js ***!
  \***********************************************************************/
/*! exports provided: CovalentDataTableModule, TdDataTableSortingOrder, TdDataTableBase, _TdDataTableMixinBase, TdDataTableComponent, TdDataTableCellComponent, TdDataTableColumnComponent, TdDataTableColumnRowComponent, TdDataTableRowComponent, TdDataTableTableComponent, TdDataTableTemplateDirective, DATA_TABLE_PROVIDER_FACTORY, TdDataTableService, DATA_TABLE_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovalentDataTableModule", function() { return CovalentDataTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdDataTableSortingOrder", function() { return TdDataTableSortingOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdDataTableBase", function() { return TdDataTableBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_TdDataTableMixinBase", function() { return _TdDataTableMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdDataTableComponent", function() { return TdDataTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdDataTableCellComponent", function() { return TdDataTableCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdDataTableColumnComponent", function() { return TdDataTableColumnComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdDataTableColumnRowComponent", function() { return TdDataTableColumnRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdDataTableRowComponent", function() { return TdDataTableRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdDataTableTableComponent", function() { return TdDataTableTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdDataTableTemplateDirective", function() { return TdDataTableTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_TABLE_PROVIDER_FACTORY", function() { return DATA_TABLE_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdDataTableService", function() { return TdDataTableService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_TABLE_PROVIDER", function() { return DATA_TABLE_PROVIDER; });
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _covalent_core_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @covalent/core/common */ "./node_modules/@covalent/core/fesm5/covalent-core-common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdDataTableColumnRowComponent = /** @class */ (function () {
    function TdDataTableColumnRowComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column-row');
    }
    TdDataTableColumnRowComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Component"], args: [{
                    /* tslint:disable-next-line */
                    selector: 'tr[td-data-table-column-row]',
                    template: "<ng-content></ng-content>",
                    styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
                }] }
    ];
    /** @nocollapse */
    TdDataTableColumnRowComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Renderer2"] }
    ]; };
    return TdDataTableColumnRowComponent;
}());
var TdDataTableRowComponent = /** @class */ (function () {
    function TdDataTableRowComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._selected = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
    }
    Object.defineProperty(TdDataTableRowComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            if (selected) {
                this._renderer.addClass(this._elementRef.nativeElement, 'td-selected');
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, 'td-selected');
            }
            this._selected = selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableRowComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var height = 48;
            if (this._elementRef.nativeElement) {
                height = ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height;
            }
            return height;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listening to click event to explicitly focus the row element.
     */
    /**
     * Listening to click event to explicitly focus the row element.
     * @return {?}
     */
    TdDataTableRowComponent.prototype.clickListener = /**
     * Listening to click event to explicitly focus the row element.
     * @return {?}
     */
    function () {
        this.focus();
    };
    /**
     * @return {?}
     */
    TdDataTableRowComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    TdDataTableRowComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Component"], args: [{
                    /* tslint:disable-next-line */
                    selector: 'tr[td-data-table-row]',
                    template: "<ng-content></ng-content>",
                    styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
                }] }
    ];
    /** @nocollapse */
    TdDataTableRowComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Renderer2"] }
    ]; };
    TdDataTableRowComponent.propDecorators = {
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['selected',] }],
        clickListener: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["HostListener"], args: ['click',] }]
    };
    return TdDataTableRowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdDataTableTemplateDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__extends"])(TdDataTableTemplateDirective, _super);
    function TdDataTableTemplateDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdDataTableTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Directive"], args: [{ selector: '[tdDataTableTemplate]ng-template' },] }
    ];
    /** @nocollapse */
    TdDataTableTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ViewContainerRef"] }
    ]; };
    TdDataTableTemplateDirective.propDecorators = {
        tdDataTableTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"] }]
    };
    return TdDataTableTemplateDirective;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__["TemplatePortalDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
var TdDataTableSortingOrder = {
    Ascending: 'ASC',
    Descending: 'DESC',
};
/**
 * Constant to set the rows offset before and after the viewport
 * @type {?}
 */
var TD_VIRTUAL_OFFSET = 2;
/**
 * Constant to set default row height if none is provided
 * @type {?}
 */
var TD_VIRTUAL_DEFAULT_ROW_HEIGHT = 48;
var TdDataTableBase = /** @class */ (function () {
    function TdDataTableBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdDataTableBase;
}());
/* tslint:disable-next-line */
/** @type {?} */
var _TdDataTableMixinBase = Object(_covalent_core_common__WEBPACK_IMPORTED_MODULE_13__["mixinControlValueAccessor"])(TdDataTableBase, []);
var TdDataTableComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__extends"])(TdDataTableComponent, _super);
    function TdDataTableComponent(_document, _elementRef, _domSanitizer, _changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._document = _document;
        _this._elementRef = _elementRef;
        _this._domSanitizer = _domSanitizer;
        _this._hostWidth = 0;
        /**
         * manually resizable columns
         */
        _this._resizableColumns = false;
        _this._columnClientX = 0;
        _this._onColumnResize = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        _this._widths = [];
        _this._onResize = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        _this._scrollHorizontalOffset = 0;
        _this._onHorizontalScroll = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        _this._onVerticalScroll = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        // Array of cached row heights to allow dynamic row heights
        _this._rowHeightCache = [];
        // Total pseudo height of all the elements
        _this._totalHeight = 0;
        // Total host height for the viewport
        _this._hostHeight = 0;
        // Scrolled vertical pixels
        _this._scrollVerticalOffset = 0;
        // Variables that set from and to which rows will be rendered
        _this._fromRow = 0;
        _this._toRow = 0;
        _this._selectable = false;
        _this._clickable = false;
        _this._multiple = true;
        _this._allSelected = false;
        _this._indeterminate = false;
        /**
         * sorting
         */
        _this._sortable = false;
        _this._sortOrder = TdDataTableSortingOrder.Ascending;
        /**
         * shift select
         */
        _this._shiftPreviouslyPressed = false;
        _this._lastSelectedIndex = -1;
        _this._firstSelectedIndex = -1;
        _this._firstCheckboxValue = false;
        /**
         * template fetching support
         */
        _this._templateMap = new Map();
        /**
         * sortChange?: function
         * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
         * Emits an [ITdDataTableSortChangeEvent] implemented object.
         */
        _this.onSortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_14__["EventEmitter"]();
        /**
         * rowSelect?: function
         * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectEvent] implemented object.
         */
        _this.onRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_14__["EventEmitter"]();
        /**
         * rowClick?: function
         * Event emitted when a row is clicked.
         * Emits an [ITdDataTableRowClickEvent] implemented object.
         */
        _this.onRowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_14__["EventEmitter"]();
        /**
         * selectAll?: function
         * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectAllEvent] implemented object.
         */
        _this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_14__["EventEmitter"]();
        /**
         * compareWith?: function(row, model): boolean
         * Allows custom comparison between row and model to see if row is selected or not
         * Default comparation is by reference
         */
        _this.compareWith = function (row, model) {
            return row === model;
        };
        return _this;
    }
    Object.defineProperty(TdDataTableComponent.prototype, "resizingColumn", {
        get: /**
         * @return {?}
         */
        function () {
            return this._resizingColumn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "hostWidth", {
        get: /**
         * @return {?}
         */
        function () {
            // if the checkboxes are rendered, we need to remove their width
            // from the total width to calculate properly
            if (this.selectable) {
                return this._hostWidth - 42;
            }
            return this._hostWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "offsetTransform", {
        /**
         * Returns the offset style with a proper calculation on how much it should move
         * over the y axis of the total height
         */
        get: /**
         * Returns the offset style with a proper calculation on how much it should move
         * over the y axis of the total height
         * @return {?}
         */
        function () {
            return this._offsetTransform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "totalHeight", {
        /**
         * Returns the assumed total height of the rows
         */
        get: /**
         * Returns the assumed total height of the rows
         * @return {?}
         */
        function () {
            return this._totalHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "fromRow", {
        /**
         * Returns the initial row to render in the viewport
         */
        get: /**
         * Returns the initial row to render in the viewport
         * @return {?}
         */
        function () {
            return this._fromRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "toRow", {
        /**
         * Returns the last row to render in the viewport
         */
        get: /**
         * Returns the last row to render in the viewport
         * @return {?}
         */
        function () {
            return this._toRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "columnsLeftScroll", {
        /**
         * Returns scroll position to reposition column headers
         */
        get: /**
         * Returns scroll position to reposition column headers
         * @return {?}
         */
        function () {
            return this._scrollHorizontalOffset * -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "allSelected", {
        /**
         * Returns true if all values are selected.
         */
        get: /**
         * Returns true if all values are selected.
         * @return {?}
         */
        function () {
            return this._allSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "indeterminate", {
        /**
         * Returns true if all values are not deselected
         * and at least one is.
         */
        get: /**
         * Returns true if all values are not deselected
         * and at least one is.
         * @return {?}
         */
        function () {
            return this._indeterminate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        /**
         * data?: {[key: string]: any}[]
         * Sets the data to be rendered as rows.
         */
        set: /**
         * data?: {[key: string]: any}[]
         * Sets the data to be rendered as rows.
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _this = this;
            this._data = data;
            this._rowHeightCache = [];
            Promise.resolve().then(function () {
                _this.refresh();
                // scroll back to the top if the data has changed
                _this._scrollableDiv.nativeElement.scrollTop = 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "virtualData", {
        get: /**
         * @return {?}
         */
        function () {
            return this._virtualData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "columns", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._columns) {
                return this._columns;
            }
            if (this.hasData) {
                this._columns = [];
                // if columns is undefined, use key in [data] rows as name and label for column headers.
                /** @type {?} */
                var row = this._data[0];
                Object.keys(row).forEach(function (k) {
                    if (!_this._columns.find(function (c) { return c.name === k; })) {
                        _this._columns.push({ name: k, label: k });
                    }
                });
                return this._columns;
            }
            else {
                return [];
            }
        },
        /**
         * columns?: ITdDataTableColumn[]
         * Sets additional column configuration. [ITdDataTableColumn.name] has to exist in [data] as key.
         * Defaults to [data] keys.
         */
        set: /**
         * columns?: ITdDataTableColumn[]
         * Sets additional column configuration. [ITdDataTableColumn.name] has to exist in [data] as key.
         * Defaults to [data] keys.
         * @param {?} cols
         * @return {?}
         */
        function (cols) {
            this._columns = cols;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "resizableColumns", {
        get: /**
         * @return {?}
         */
        function () {
            return this._resizableColumns;
        },
        /**
         * resizableColumns?: boolean
         * Enables manual column resize.
         * Defaults to 'false'
         */
        set: /**
         * resizableColumns?: boolean
         * Enables manual column resize.
         * Defaults to 'false'
         * @param {?} resizableColumns
         * @return {?}
         */
        function (resizableColumns) {
            this._resizableColumns = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(resizableColumns);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "selectable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectable;
        },
        /**
         * selectable?: boolean
         * Enables row selection events, hover and selected row states.
         * Defaults to 'false'
         */
        set: /**
         * selectable?: boolean
         * Enables row selection events, hover and selected row states.
         * Defaults to 'false'
         * @param {?} selectable
         * @return {?}
         */
        function (selectable) {
            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(selectable);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "clickable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._clickable;
        },
        /**
         * clickable?: boolean
         * Enables row click events, hover.
         * Defaults to 'false'
         */
        set: /**
         * clickable?: boolean
         * Enables row click events, hover.
         * Defaults to 'false'
         * @param {?} clickable
         * @return {?}
         */
        function (clickable) {
            this._clickable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(clickable);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Enables multiple row selection. [selectable] needs to be enabled.
         * Defaults to 'false'
         */
        set: /**
         * multiple?: boolean
         * Enables multiple row selection. [selectable] needs to be enabled.
         * Defaults to 'false'
         * @param {?} multiple
         * @return {?}
         */
        function (multiple) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sortable;
        },
        /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         */
        set: /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         * @param {?} sortable
         * @return {?}
         */
        function (sortable) {
            this._sortable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(sortable);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortBy", {
        /**
         * sortBy?: string
         * Sets the active sort column. [sortable] needs to be enabled.
         */
        set: /**
         * sortBy?: string
         * Sets the active sort column. [sortable] needs to be enabled.
         * @param {?} columnName
         * @return {?}
         */
        function (columnName) {
            if (!columnName) {
                return;
            }
            /** @type {?} */
            var column = this.columns.find(function (c) { return c.name === columnName; });
            if (!column) {
                throw new Error('[sortBy] must be a valid column name');
            }
            this._sortBy = column;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortByColumn", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sortBy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortOrder", {
        /**
         * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
         * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
         * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
         */
        set: /**
         * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
         * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
         * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
         * @param {?} order
         * @return {?}
         */
        function (order) {
            /** @type {?} */
            var sortOrder = order ? order.toUpperCase() : 'ASC';
            if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
                throw new Error('[sortOrder] must be empty, ASC or DESC');
            }
            this._sortOrder = sortOrder === 'ASC' ?
                TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortOrderEnum", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sortOrder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "hasData", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data && this._data.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize observable for resize and scroll events
     */
    /**
     * Initialize observable for resize and scroll events
     * @return {?}
     */
    TdDataTableComponent.prototype.ngOnInit = /**
     * Initialize observable for resize and scroll events
     * @return {?}
     */
    function () {
        var _this = this;
        // initialize observable for resize calculations
        this._resizeSubs = this._onResize.asObservable().subscribe(function () {
            if (_this._rows) {
                _this._rows.toArray().forEach(function (row, index) {
                    _this._rowHeightCache[_this.fromRow + index] = row.height + 1;
                });
            }
            _this._calculateWidths();
            _this._calculateVirtualRows();
        });
        // initialize observable for column resize calculations
        this._columnResizeSubs = this._onColumnResize.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(0)).subscribe(function (clientX) {
            _this._columnClientX = clientX;
            _this._calculateWidths();
            _this._changeDetectorRef.markForCheck();
        });
        // initialize observable for scroll column header reposition
        this._horizontalScrollSubs = this._onHorizontalScroll.asObservable()
            .subscribe(function (horizontalScroll) {
            _this._scrollHorizontalOffset = horizontalScroll;
            _this._changeDetectorRef.markForCheck();
        });
        // initialize observable for virtual scroll rendering
        this._verticalScrollSubs = this._onVerticalScroll.asObservable()
            .subscribe(function (verticalScroll) {
            _this._scrollVerticalOffset = verticalScroll;
            _this._calculateVirtualRows();
            _this._changeDetectorRef.markForCheck();
        });
        this._valueChangesSubs = this.valueChanges.subscribe(function (value) {
            _this.refresh();
        });
    };
    /**
     * Loads templates and sets them in a map for faster access.
     */
    /**
     * Loads templates and sets them in a map for faster access.
     * @return {?}
     */
    TdDataTableComponent.prototype.ngAfterContentInit = /**
     * Loads templates and sets them in a map for faster access.
     * @return {?}
     */
    function () {
        for (var i = 0; i < this._templates.toArray().length; i++) {
            this._templateMap.set(this._templates.toArray()[i].tdDataTableTemplate, this._templates.toArray()[i].templateRef);
        }
    };
    /**
     * Checks hosts native elements widths to see if it has changed (resize check)
     */
    /**
     * Checks hosts native elements widths to see if it has changed (resize check)
     * @return {?}
     */
    TdDataTableComponent.prototype.ngAfterContentChecked = /**
     * Checks hosts native elements widths to see if it has changed (resize check)
     * @return {?}
     */
    function () {
        var _this = this;
        // check if the scroll has been reset when element is hidden
        if (this._scrollVerticalOffset - this._scrollableDiv.nativeElement.scrollTop > 5) {
            // scroll back to the top if element has been reset
            this._onVerticalScroll.next(0);
        }
        if (this._elementRef.nativeElement) {
            /** @type {?} */
            var newHostWidth_1 = this._elementRef.nativeElement.getBoundingClientRect().width;
            // if the width has changed then we throw a resize event.
            if (this._hostWidth !== newHostWidth_1) {
                setTimeout(function () {
                    _this._hostWidth = newHostWidth_1;
                    _this._onResize.next();
                }, 0);
            }
        }
        if (this._scrollableDiv.nativeElement) {
            /** @type {?} */
            var newHostHeight = this._scrollableDiv.nativeElement.getBoundingClientRect().height;
            // if the height of the viewport has changed, then we mark for check
            if (this._hostHeight !== newHostHeight) {
                this._hostHeight = newHostHeight;
                this._calculateVirtualRows();
                this._changeDetectorRef.markForCheck();
            }
        }
    };
    /**
     * Registers to an observable that checks if all rows have been rendered
     * so we can start calculating the widths
     */
    /**
     * Registers to an observable that checks if all rows have been rendered
     * so we can start calculating the widths
     * @return {?}
     */
    TdDataTableComponent.prototype.ngAfterViewInit = /**
     * Registers to an observable that checks if all rows have been rendered
     * so we can start calculating the widths
     * @return {?}
     */
    function () {
        var _this = this;
        this._rowsChangedSubs = this._rows.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(0)).subscribe(function () {
            _this._onResize.next();
        });
        this._calculateVirtualRows();
    };
    /**
     * Unsubscribes observables when data table is destroyed
     */
    /**
     * Unsubscribes observables when data table is destroyed
     * @return {?}
     */
    TdDataTableComponent.prototype.ngOnDestroy = /**
     * Unsubscribes observables when data table is destroyed
     * @return {?}
     */
    function () {
        if (this._resizeSubs) {
            this._resizeSubs.unsubscribe();
        }
        if (this._columnResizeSubs) {
            this._columnResizeSubs.unsubscribe();
        }
        if (this._horizontalScrollSubs) {
            this._horizontalScrollSubs.unsubscribe();
        }
        if (this._verticalScrollSubs) {
            this._verticalScrollSubs.unsubscribe();
        }
        if (this._rowsChangedSubs) {
            this._rowsChangedSubs.unsubscribe();
        }
        if (this._valueChangesSubs) {
            this._valueChangesSubs.unsubscribe();
        }
    };
    /**
     * Method that gets executed every time there is a scroll event
     * Calls the scroll observable
     */
    /**
     * Method that gets executed every time there is a scroll event
     * Calls the scroll observable
     * @param {?} event
     * @return {?}
     */
    TdDataTableComponent.prototype.handleScroll = /**
     * Method that gets executed every time there is a scroll event
     * Calls the scroll observable
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var element = ((/** @type {?} */ (event.target)));
        if (element) {
            /** @type {?} */
            var horizontalScroll = element.scrollLeft;
            if (this._scrollHorizontalOffset !== horizontalScroll) {
                this._onHorizontalScroll.next(horizontalScroll);
            }
            /** @type {?} */
            var verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._onVerticalScroll.next(verticalScroll);
            }
        }
    };
    /**
     * Returns the width needed for the columns via index
     */
    /**
     * Returns the width needed for the columns via index
     * @param {?} index
     * @return {?}
     */
    TdDataTableComponent.prototype.getColumnWidth = /**
     * Returns the width needed for the columns via index
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this._widths[index]) {
            return this._widths[index].value;
        }
        return undefined;
    };
    /**
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    TdDataTableComponent.prototype.getCellValue = /**
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    function (column, value) {
        if (column.nested === undefined || column.nested) {
            return this._getNestedValue(column.name, value);
        }
        return value[column.name];
    };
    /**
     * Getter method for template references
     */
    /**
     * Getter method for template references
     * @param {?} name
     * @return {?}
     */
    TdDataTableComponent.prototype.getTemplateRef = /**
     * Getter method for template references
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this._templateMap.get(name);
    };
    /**
     * Clears model (ngModel) of component by removing all values in array.
     */
    /**
     * Clears model (ngModel) of component by removing all values in array.
     * @return {?}
     */
    TdDataTableComponent.prototype.clearModel = /**
     * Clears model (ngModel) of component by removing all values in array.
     * @return {?}
     */
    function () {
        this.value.splice(0, this.value.length);
    };
    /**
     * Refreshes data table and rerenders [data] and [columns]
     */
    /**
     * Refreshes data table and rerenders [data] and [columns]
     * @return {?}
     */
    TdDataTableComponent.prototype.refresh = /**
     * Refreshes data table and rerenders [data] and [columns]
     * @return {?}
     */
    function () {
        this._calculateVirtualRows();
        this._calculateWidths();
        this._calculateCheckboxState();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Selects or clears all rows depending on 'checked' value.
     */
    /**
     * Selects or clears all rows depending on 'checked' value.
     * @param {?} checked
     * @return {?}
     */
    TdDataTableComponent.prototype.selectAll = /**
     * Selects or clears all rows depending on 'checked' value.
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        var _this = this;
        /** @type {?} */
        var toggledRows = [];
        if (checked) {
            this._data.forEach(function (row) {
                // skiping already selected rows
                if (!_this.isRowSelected(row)) {
                    _this.value.push(row);
                    // checking which ones are being toggled
                    toggledRows.push(row);
                }
            });
            this._allSelected = true;
            this._indeterminate = true;
        }
        else {
            this._data.forEach(function (row) {
                // checking which ones are being toggled
                if (_this.isRowSelected(row)) {
                    toggledRows.push(row);
                    /** @type {?} */
                    var modelRow = _this.value.filter(function (val) {
                        return _this.compareWith(row, val);
                    })[0];
                    /** @type {?} */
                    var index = _this.value.indexOf(modelRow);
                    if (index > -1) {
                        _this.value.splice(index, 1);
                    }
                }
            });
            this._allSelected = false;
            this._indeterminate = false;
        }
        this.onSelectAll.emit({ rows: toggledRows, selected: checked });
        this.onChange(this.value);
    };
    /**
     * Checks if row is selected
     */
    /**
     * Checks if row is selected
     * @param {?} row
     * @return {?}
     */
    TdDataTableComponent.prototype.isRowSelected = /**
     * Checks if row is selected
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this = this;
        // compare items by [compareWith] function
        return this.value ? this.value.filter(function (val) {
            return _this.compareWith(row, val);
        }).length > 0 : false;
    };
    /**
     * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
     * handles cntrl clicks and shift clicks for multi-select
     */
    /**
     * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
     * handles cntrl clicks and shift clicks for multi-select
     * @param {?} row
     * @param {?} event
     * @param {?} currentSelected
     * @return {?}
     */
    TdDataTableComponent.prototype.select = /**
     * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
     * handles cntrl clicks and shift clicks for multi-select
     * @param {?} row
     * @param {?} event
     * @param {?} currentSelected
     * @return {?}
     */
    function (row, event, currentSelected) {
        if (this.selectable) {
            this.blockEvent(event);
            // Check to see if Shift key is selected and need to select everything in between
            /** @type {?} */
            var mouseEvent = (/** @type {?} */ (event));
            if (this.multiple && mouseEvent && mouseEvent.shiftKey && this._lastSelectedIndex > -1) {
                /** @type {?} */
                var firstIndex = currentSelected;
                /** @type {?} */
                var lastIndex = this._lastSelectedIndex;
                if (currentSelected > this._lastSelectedIndex) {
                    firstIndex = this._lastSelectedIndex;
                    lastIndex = currentSelected;
                }
                // if clicking a checkbox behind the initial check, then toggle all selections expect the initial checkbox
                // else the checkboxes clicked are all after the initial one
                if ((this._firstSelectedIndex >= currentSelected && this._lastSelectedIndex > this._firstSelectedIndex) ||
                    (this._firstSelectedIndex <= currentSelected && this._lastSelectedIndex < this._firstSelectedIndex)) {
                    for (var i = firstIndex; i <= lastIndex; i++) {
                        if (this._firstSelectedIndex !== i) {
                            this._doSelection(this._data[i], i);
                        }
                    }
                }
                else if ((this._firstSelectedIndex > currentSelected) || (this._firstSelectedIndex < currentSelected)) {
                    // change indexes depending on where the next checkbox is selected (before or after)
                    if (this._firstSelectedIndex > currentSelected) {
                        lastIndex--;
                    }
                    else if (this._firstSelectedIndex < currentSelected) {
                        firstIndex++;
                    }
                    for (var i = firstIndex; i <= lastIndex; i++) {
                        /** @type {?} */
                        var rowSelected = this.isRowSelected(this._data[i]);
                        // if row is selected and first checkbox was selected
                        // or if row was unselected and first checkbox was unselected
                        // we ignore the toggle
                        if ((this._firstCheckboxValue && !rowSelected) ||
                            (!this._firstCheckboxValue && rowSelected)) {
                            this._doSelection(this._data[i], i);
                        }
                        else if (this._shiftPreviouslyPressed) {
                            // else if the checkbox selected was in the middle of the last selection and the first selection
                            // then we undo the selections
                            if ((currentSelected >= this._firstSelectedIndex && currentSelected <= this._lastSelectedIndex) ||
                                (currentSelected <= this._firstSelectedIndex && currentSelected >= this._lastSelectedIndex)) {
                                this._doSelection(this._data[i], i);
                            }
                        }
                    }
                }
                this._shiftPreviouslyPressed = true;
                // if shift wasnt pressed, then we take the element checked as the first row
                // incase the next click uses shift
            }
            else if (mouseEvent && !mouseEvent.shiftKey) {
                this._firstCheckboxValue = this._doSelection(row, currentSelected);
                this._shiftPreviouslyPressed = false;
                this._firstSelectedIndex = currentSelected;
            }
            this._lastSelectedIndex = currentSelected;
        }
    };
    /**
     * Overrides the onselectstart method of the document so other text on the page
     * doesn't get selected when doing shift selections.
     */
    /**
     * Overrides the onselectstart method of the document so other text on the page
     * doesn't get selected when doing shift selections.
     * @return {?}
     */
    TdDataTableComponent.prototype.disableTextSelection = /**
     * Overrides the onselectstart method of the document so other text on the page
     * doesn't get selected when doing shift selections.
     * @return {?}
     */
    function () {
        if (this._document) {
            this._document.onselectstart = function () {
                return false;
            };
        }
    };
    /**
     * Resets the original onselectstart method.
     */
    /**
     * Resets the original onselectstart method.
     * @return {?}
     */
    TdDataTableComponent.prototype.enableTextSelection = /**
     * Resets the original onselectstart method.
     * @return {?}
     */
    function () {
        if (this._document) {
            this._document.onselectstart = undefined;
        }
    };
    /**
     * emits the onRowClickEvent when a row is clicked
     * if clickable is true and selectable is false then select the row
     */
    /**
     * emits the onRowClickEvent when a row is clicked
     * if clickable is true and selectable is false then select the row
     * @param {?} row
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    TdDataTableComponent.prototype.handleRowClick = /**
     * emits the onRowClickEvent when a row is clicked
     * if clickable is true and selectable is false then select the row
     * @param {?} row
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    function (row, index, event) {
        if (this.clickable) {
            // ignoring linting rules here because attribute it actually null or not there
            // can't check for undefined
            /** @type {?} */
            var srcElement = event.srcElement || event.currentTarget;
            /** @type {?} */
            var element = (/** @type {?} */ (event.target));
            /* tslint:disable-next-line */
            if (srcElement.getAttribute('stopRowClick') === null && element.tagName.toLowerCase() !== 'mat-pseudo-checkbox') {
                this.onRowClick.emit({
                    row: row,
                    index: index,
                });
            }
        }
    };
    /**
     * Method handle for sort click event in column headers.
     */
    /**
     * Method handle for sort click event in column headers.
     * @param {?} column
     * @return {?}
     */
    TdDataTableComponent.prototype.handleSort = /**
     * Method handle for sort click event in column headers.
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (this._sortBy === column) {
            this._sortOrder = this._sortOrder === TdDataTableSortingOrder.Ascending ?
                TdDataTableSortingOrder.Descending : TdDataTableSortingOrder.Ascending;
        }
        else {
            this._sortBy = column;
            this._sortOrder = TdDataTableSortingOrder.Ascending;
        }
        this.onSortChange.next({ name: this._sortBy.name, order: this._sortOrder });
    };
    /**
     * Handle all keyup events when focusing a data table row
     */
    /**
     * Handle all keyup events when focusing a data table row
     * @param {?} event
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    TdDataTableComponent.prototype._rowKeyup = /**
     * Handle all keyup events when focusing a data table row
     * @param {?} event
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    function (event, row, index) {
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"]:
                /** if user presses enter or space, the row should be selected */
                if (this.selectable) {
                    this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"]:
                /**
                 * if users presses the up arrow, we focus the prev row
                 * unless its the first row
                 */
                if (index > 0) {
                    this._rows.toArray()[index - 1].focus();
                }
                this.blockEvent(event);
                if (this.selectable && this.multiple && event.shiftKey && this.fromRow + index >= 0) {
                    this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN_ARROW"]:
                /**
                 * if users presses the down arrow, we focus the next row
                 * unless its the last row
                 */
                if (index < (this._rows.toArray().length - 1)) {
                    this._rows.toArray()[index + 1].focus();
                }
                this.blockEvent(event);
                if (this.selectable && this.multiple && event.shiftKey && this.fromRow + index < this._data.length) {
                    this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                }
                break;
            default:
            // default
        }
    };
    /**
     * Sets column index of the dragged column and initial clientX of column
     */
    /**
     * Sets column index of the dragged column and initial clientX of column
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    TdDataTableComponent.prototype._handleStartColumnDrag = /**
     * Sets column index of the dragged column and initial clientX of column
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    function (index, event) {
        this._columnClientX = event.clientX;
        this._resizingColumn = index;
    };
    /**
     * Calculates new width depending on new clientX of dragger column
     */
    /**
     * Calculates new width depending on new clientX of dragger column
     * @param {?} event
     * @return {?}
     */
    TdDataTableComponent.prototype._handleColumnDrag = /**
     * Calculates new width depending on new clientX of dragger column
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // check if there was been a separator clicked for resize
        if (this._resizingColumn !== undefined && event.clientX > 0) {
            /** @type {?} */
            var xPosition = event.clientX;
            // checks if the separator is being moved to try and resize the column, else dont do anything
            if (xPosition > 0 && this._columnClientX > 0 && (xPosition - this._columnClientX) !== 0) {
                // calculate the new width depending if making the column bigger or smaller
                /** @type {?} */
                var proposedManualWidth = this._widths[this._resizingColumn].value + (xPosition - this._columnClientX);
                // if the proposed new width is less than the projected min width of the column, use projected min width
                if (proposedManualWidth < this._colElements.toArray()[this._resizingColumn].projectedWidth) {
                    proposedManualWidth = this._colElements.toArray()[this._resizingColumn].projectedWidth;
                }
                this.columns[this._resizingColumn].width = proposedManualWidth;
                // update new x position for the resized column
                this._onColumnResize.next(xPosition);
            }
        }
    };
    /**
     * Ends dragged flags
     */
    /**
     * Ends dragged flags
     * @return {?}
     */
    TdDataTableComponent.prototype._handleEndColumnDrag = /**
     * Ends dragged flags
     * @return {?}
     */
    function () {
        this._columnClientX = undefined;
        this._resizingColumn = undefined;
    };
    /**
     * Method to prevent the default events
     */
    /**
     * Method to prevent the default events
     * @param {?} event
     * @return {?}
     */
    TdDataTableComponent.prototype.blockEvent = /**
     * Method to prevent the default events
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    TdDataTableComponent.prototype._getNestedValue = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        if (!(value instanceof Object) || !name) {
            return value;
        }
        if (name.indexOf('.') > -1) {
            /** @type {?} */
            var splitName = name.split(/\.(.+)/, 2);
            return this._getNestedValue(splitName[1], value[splitName[0]]);
        }
        else {
            return value[name];
        }
    };
    /**
     * Does the actual Row Selection
     */
    /**
     * Does the actual Row Selection
     * @param {?} row
     * @param {?} rowIndex
     * @return {?}
     */
    TdDataTableComponent.prototype._doSelection = /**
     * Does the actual Row Selection
     * @param {?} row
     * @param {?} rowIndex
     * @return {?}
     */
    function (row, rowIndex) {
        var _this = this;
        /** @type {?} */
        var wasSelected = this.isRowSelected(row);
        if (!wasSelected) {
            if (!this._multiple) {
                this.clearModel();
            }
            this.value.push(row);
        }
        else {
            // compare items by [compareWith] function
            row = this.value.filter(function (val) {
                return _this.compareWith(row, val);
            })[0];
            /** @type {?} */
            var index = this.value.indexOf(row);
            if (index > -1) {
                this.value.splice(index, 1);
            }
        }
        this._calculateCheckboxState();
        this.onRowSelect.emit({ row: row, index: rowIndex, selected: !wasSelected });
        this.onChange(this.value);
        return !wasSelected;
    };
    /**
     * Calculate all the state of all checkboxes
     */
    /**
     * Calculate all the state of all checkboxes
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateCheckboxState = /**
     * Calculate all the state of all checkboxes
     * @return {?}
     */
    function () {
        var _this = this;
        var e_1, _a;
        if (this._data) {
            this._allSelected = typeof this._data.find(function (d) { return !_this.isRowSelected(d); }) === 'undefined';
            this._indeterminate = false;
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__values"])(this._data), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var row = _c.value;
                    if (!this.isRowSelected(row)) {
                        continue;
                    }
                    this._indeterminate = true;
                    break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    /**
     * Calculates the widths for columns and cells depending on content
     */
    /**
     * Calculates the widths for columns and cells depending on content
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateWidths = /**
     * Calculates the widths for columns and cells depending on content
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._colElements && this._colElements.length) {
            this._widths = [];
            this._colElements.forEach(function (col, index) {
                _this._adjustColumnWidth(index, _this._calculateWidth());
            });
            this._adjustColumnWidhts();
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Adjusts columns after calculation to see if they need to be recalculated.
     */
    /**
     * Adjusts columns after calculation to see if they need to be recalculated.
     * @return {?}
     */
    TdDataTableComponent.prototype._adjustColumnWidhts = /**
     * Adjusts columns after calculation to see if they need to be recalculated.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var fixedTotalWidth = 0;
        // get the number of total columns that have flexible widths (not fixed or hidden)
        /** @type {?} */
        var flexibleWidths = this._widths.filter(function (width, index) {
            if (_this.columns[index].hidden) {
                return false;
            }
            if (width.limit || width.max || width.min) {
                fixedTotalWidth += width.value;
            }
            return !width.limit && !width.max && !width.min;
        }).length;
        // calculate how much pixes are left that could be spread across
        // the flexible columns
        /** @type {?} */
        var recalculateHostWidth = 0;
        if (fixedTotalWidth < this.hostWidth) {
            recalculateHostWidth = this.hostWidth - fixedTotalWidth;
        }
        // if we have flexible columns and pixels to spare on them
        // we try and spread the pixels across them
        if (flexibleWidths && recalculateHostWidth) {
            /** @type {?} */
            var newValue_1 = Math.floor(recalculateHostWidth / flexibleWidths);
            /** @type {?} */
            var adjustedNumber_1 = 0;
            // adjust the column widths with the spread pixels
            this._widths.forEach(function (colWidth) {
                if (_this._widths[colWidth.index].max && _this._widths[colWidth.index].value > newValue_1 ||
                    _this._widths[colWidth.index].min && _this._widths[colWidth.index].value < newValue_1 ||
                    !_this._widths[colWidth.index].limit) {
                    _this._adjustColumnWidth(colWidth.index, newValue_1);
                    adjustedNumber_1++;
                }
            });
            // if there are still columns that need to be recalculated, we start over
            /** @type {?} */
            var newFlexibleWidths = this._widths.filter(function (width) {
                return !width.limit && !width.max;
            }).length;
            if (newFlexibleWidths !== adjustedNumber_1 && newFlexibleWidths !== flexibleWidths) {
                this._adjustColumnWidhts();
            }
        }
    };
    /**
     * Adjusts a single column to see if it can be recalculated
     */
    /**
     * Adjusts a single column to see if it can be recalculated
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    TdDataTableComponent.prototype._adjustColumnWidth = /**
     * Adjusts a single column to see if it can be recalculated
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    function (index, value) {
        this._widths[index] = {
            value: value,
            index: index,
            limit: false,
            min: false,
            max: false,
        };
        // flag to see if we need to skip the min width projection
        // depending if a width or min width has been provided
        /** @type {?} */
        var skipMinWidthProjection = false;
        if (this.columns[index]) {
            // if the provided width has min/max, then we check to see if we need to set it
            if (typeof this.columns[index].width === 'object') {
                /** @type {?} */
                var widthOpts = (/** @type {?} */ (this.columns[index].width));
                // if the column width is less than the configured min, we override it
                skipMinWidthProjection = (widthOpts && !!widthOpts.min);
                if (widthOpts && widthOpts.min >= this._widths[index].value) {
                    this._widths[index].value = widthOpts.min;
                    this._widths[index].min = true;
                    // if the column width is more than the configured max, we override it
                }
                else if (widthOpts && widthOpts.max <= this._widths[index].value) {
                    this._widths[index].value = widthOpts.max;
                    this._widths[index].max = true;
                }
                // if it has a fixed width, then we just set it
            }
            else if (typeof this.columns[index].width === 'number') {
                this._widths[index].value = (/** @type {?} */ (this.columns[index].width));
                skipMinWidthProjection = this._widths[index].limit = true;
            }
        }
        // if there wasn't any width or min width provided, we set a min to what the column width min should be
        if (!skipMinWidthProjection &&
            this._widths[index].value < this._colElements.toArray()[index].projectedWidth) {
            this._widths[index].value = this._colElements.toArray()[index].projectedWidth;
            this._widths[index].min = true;
            this._widths[index].limit = false;
        }
    };
    /**
     * Generic method to calculate column width
     */
    /**
     * Generic method to calculate column width
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateWidth = /**
     * Generic method to calculate column width
     * @return {?}
     */
    function () {
        /** @type {?} */
        var renderedColumns = this.columns.filter(function (col) { return !col.hidden; });
        return Math.floor(this.hostWidth / renderedColumns.length);
    };
    /**
     * Method to calculate the rows to be rendered in the viewport
     */
    /**
     * Method to calculate the rows to be rendered in the viewport
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateVirtualRows = /**
     * Method to calculate the rows to be rendered in the viewport
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var scrolledRows = 0;
        if (this._data) {
            this._totalHeight = 0;
            /** @type {?} */
            var rowHeightSum_1 = 0;
            // loop through all rows to see if we have their height cached
            // and sum them all to calculate the total height
            this._data.forEach(function (d, i) {
                // iterate through all rows at first and assume all
                // rows are the same height as the first one
                if (!_this._rowHeightCache[i]) {
                    _this._rowHeightCache[i] = _this._rowHeightCache[0] || TD_VIRTUAL_DEFAULT_ROW_HEIGHT;
                }
                rowHeightSum_1 += _this._rowHeightCache[i];
                // check how many rows have been scrolled
                if (_this._scrollVerticalOffset - rowHeightSum_1 > 0) {
                    scrolledRows++;
                }
            });
            this._totalHeight = rowHeightSum_1;
            // set the initial row to be rendered taking into account the row offset
            /** @type {?} */
            var fromRow = scrolledRows - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            /** @type {?} */
            var hostHeight = this._hostHeight;
            /** @type {?} */
            var index = 0;
            // calculate how many rows can fit in the viewport
            while (hostHeight > 0) {
                hostHeight -= this._rowHeightCache[this.fromRow + index];
                index++;
            }
            // set the last row to be rendered taking into account the row offset
            /** @type {?} */
            var range = (index - 1) + (TD_VIRTUAL_OFFSET * 2);
            /** @type {?} */
            var toRow = range + this.fromRow;
            // if last row is greater than the total length, then we use the total length
            if (isFinite(toRow) && toRow > this._data.length) {
                toRow = this._data.length;
            }
            else if (!isFinite(toRow)) {
                toRow = TD_VIRTUAL_OFFSET;
            }
            this._toRow = toRow;
        }
        else {
            this._totalHeight = 0;
            this._fromRow = 0;
            this._toRow = 0;
        }
        /** @type {?} */
        var offset = 0;
        // calculate the proper offset depending on how many rows have been scrolled
        if (scrolledRows > TD_VIRTUAL_OFFSET) {
            for (var index = 0; index < this.fromRow; index++) {
                offset += this._rowHeightCache[index];
            }
        }
        this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
        if (this._data) {
            this._virtualData = this.data.slice(this.fromRow, this.toRow);
        }
        // mark for check at the end of the queue so we are sure
        // that the changes will be marked
        Promise.resolve().then(function () {
            _this._changeDetectorRef.markForCheck();
        });
    };
    TdDataTableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Component"], args: [{
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["forwardRef"])(function () { return TdDataTableComponent; }),
                            multi: true,
                        }],
                    selector: 'td-data-table',
                    template: "<table td-data-table\n        [style.left.px]=\"columnsLeftScroll\"\n        [class.mat-selectable]=\"selectable\">\n  <thead class=\"td-data-table-head\"\n          (dragover)=\"_handleColumnDrag($event)\">\n    <tr td-data-table-column-row>\n      <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"selectable\">\n        <mat-checkbox\n          #checkBoxAll\n          *ngIf=\"multiple\"\n          [disabled]=\"!hasData\"\n          [indeterminate]=\"indeterminate && !allSelected && hasData\"\n          [checked]=\"allSelected && hasData\"\n          (click)=\"blockEvent($event); selectAll(!checkBoxAll.checked)\"\n          (keyup.enter)=\"selectAll(!checkBoxAll.checked)\"\n          (keyup.space)=\"selectAll(!checkBoxAll.checked)\"\n          (keydown.space)=\"blockEvent($event)\">\n        </mat-checkbox>\n      </th>\n      <th td-data-table-column\n        #columnElement\n        *ngFor=\"let column of columns; let i = index; let last = last\"\n        [style.min-width.px]=\"getColumnWidth(i)\"\n        [style.max-width.px]=\"getColumnWidth(i)\"\n        [name]=\"column.name\"\n        [numeric]=\"column.numeric\"\n        [active]=\"(column.sortable || sortable) && column === sortByColumn\"\n        [sortable]=\"column.sortable || (sortable && column.sortable !== false)\"\n        [sortOrder]=\"sortOrderEnum\"\n        [hidden]=\"column.hidden\"\n        (sortChange)=\"handleSort(column)\">\n        <span [matTooltip]=\"column.tooltip\">{{column.label}}</span>\n        <span td-column-resizer\n              *ngIf=\"resizableColumns\"\n              draggable=\"true\"\n              class=\"td-data-table-column-resizer\"\n              [class.td-resizing]=\"i === resizingColumn\"\n              (mousedown)=\"_handleStartColumnDrag(i, $event)\"\n              (dragstart)=\"$event?.dataTransfer?.setData('text', '')\"\n              (drag)=\"_handleColumnDrag($event)\"\n              (dragend)=\"_handleEndColumnDrag()\"\n              (mouseup)=\"_handleEndColumnDrag()\">\n          <span class=\"td-data-table-column-separator\"></span>\n        </span>\n      </th>\n    </tr>\n  </thead>\n</table>\n<div #scrollableDiv class=\"td-data-table-scrollable\"\n      (scroll)=\"handleScroll($event)\">\n  <div [style.height.px]=\"totalHeight\"></div>\n  <table td-data-table\n          [style.transform]=\"offsetTransform\"\n          [style.position]=\"'absolute'\"\n          [class.mat-selectable]=\"selectable\"\n          [class.mat-clickable]=\"clickable\">\n    <tbody class=\"td-data-table-body\">\n      <tr td-data-table-row\n          #dtRow\n          [tabIndex]=\"selectable ? 0 : -1\"\n          [selected]=\"(clickable || selectable) && isRowSelected(row)\"\n          *ngFor=\"let row of virtualData; let rowIndex = index\"\n          (click)=\"handleRowClick(row, fromRow + rowIndex, $event)\"\n          (keyup)=\"selectable && _rowKeyup($event, row, rowIndex)\"\n          (keydown.space)=\"blockEvent($event)\"\n          (keydown.shift.space)=\"blockEvent($event)\"\n          (keydown.shift)=\"disableTextSelection()\"\n          (keyup.shift)=\"enableTextSelection()\">\n        <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"selectable\">\n          <mat-pseudo-checkbox\n            [state]=\"dtRow.selected ? 'checked' : 'unchecked'\"\n            (mousedown)=\"disableTextSelection()\"\n            (mouseup)=\"enableTextSelection()\"\n            stopRowClick\n            (click)=\"select(row, $event, fromRow + rowIndex)\">\n          </mat-pseudo-checkbox>\n        </td>\n        <td td-data-table-cell\n            [numeric]=\"column.numeric\"\n            [hidden]=\"column.hidden\"\n            *ngFor=\"let column of columns; let i = index\"\n            [style.min-width.px]=\"getColumnWidth(i)\"\n            [style.max-width.px]=\"getColumnWidth(i)\">\n          <span *ngIf=\"!getTemplateRef(column.name)\">{{column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row)}}</span>\n          <ng-template\n            *ngIf=\"getTemplateRef(column.name)\"\n            [ngTemplateOutlet]=\"getTemplateRef(column.name)\"\n            [ngTemplateOutletContext]=\"{ value: getCellValue(column, row), row: row, column: column.name, index: rowIndex }\">\n          </ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<ng-content></ng-content>\n",
                    inputs: ['value'],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ChangeDetectionStrategy"].OnPush,
                    styles: [":host{display:block;overflow:hidden}:host .td-data-table-scrollable{position:relative;overflow:auto;height:calc(100% - 56px)}.td-data-table-column-resizer{right:0;width:6px;cursor:col-resize}.td-data-table-column-resizer,.td-data-table-column-resizer .td-data-table-column-separator{position:absolute;height:100%;top:0}.td-data-table-column-resizer .td-data-table-column-separator{left:2px}.td-data-table-column-resizer.td-resizing{cursor:-webkit-grabbing}table.td-data-table{width:auto!important}table.td-data-table.mat-selectable tbody>tr.td-data-table-row{-webkit-transition:background-color .2s;transition:background-color .2s}table.td-data-table.mat-selectable .td-data-table-column:first-child>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable td.td-data-table-cell:first-child>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable th.td-data-table-column:first-child>.td-data-table-column-content-wrapper{width:18px;min-width:18px;padding:0 24px}table.td-data-table.mat-selectable .td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2)>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper{padding-left:0}[dir=rtl] table.td-data-table.mat-selectable .td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper,[dir=rtl] table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2)>.td-data-table-column-content-wrapper,[dir=rtl] table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper{padding-right:0;padding-left:28px}table.td-data-table td.mat-checkbox-cell,table.td-data-table th.mat-checkbox-column{min-width:42px;width:42px;font-size:0!important}table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox,table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox{width:18px;height:18px}::ng-deep table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after,::ng-deep table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after{width:11px!important;height:4px!important}table.td-data-table td.mat-checkbox-cell mat-checkbox ::ng-deep .mat-checkbox-inner-container,table.td-data-table th.mat-checkbox-column mat-checkbox ::ng-deep .mat-checkbox-inner-container{width:18px;height:18px;margin:0}"]
                }] }
    ];
    /** @nocollapse */
    TdDataTableComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ElementRef"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ChangeDetectorRef"] }
    ]; };
    TdDataTableComponent.propDecorators = {
        _templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ContentChildren"], args: [TdDataTableTemplateDirective,] }],
        _scrollableDiv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ViewChild"], args: ['scrollableDiv',] }],
        _colElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ViewChildren"], args: ['columnElement',] }],
        _rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ViewChildren"], args: [TdDataTableRowComponent,] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['data',] }],
        columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['columns',] }],
        resizableColumns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['resizableColumns',] }],
        selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['selectable',] }],
        clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['clickable',] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['multiple',] }],
        sortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['sortable',] }],
        sortBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['sortBy',] }],
        sortOrder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['sortOrder',] }],
        onSortChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Output"], args: ['sortChange',] }],
        onRowSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Output"], args: ['rowSelect',] }],
        onRowClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Output"], args: ['rowClick',] }],
        onSelectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Output"], args: ['selectAll',] }],
        compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['compareWith',] }]
    };
    return TdDataTableComponent;
}(_TdDataTableMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdDataTableColumnComponent = /** @class */ (function () {
    function TdDataTableColumnComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._sortOrder = TdDataTableSortingOrder.Ascending;
        /**
         * name?: string
         * Sets unique column [name] for [sortable] events.
         */
        this.name = '';
        /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         */
        this.sortable = false;
        /**
         * active?: boolean
         * Sets column to active state when 'true'.
         * Defaults to 'false'
         */
        this.active = false;
        /**
         * numeric?: boolean
         * Makes column follow the numeric data-table specs and sort icon.
         * Defaults to 'false'
         */
        this.numeric = false;
        /**
         * sortChange?: function
         * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
         * Emits an [ITdDataTableSortChangeEvent] implemented object.
         */
        this.onSortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_14__["EventEmitter"]();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column');
    }
    Object.defineProperty(TdDataTableColumnComponent.prototype, "projectedWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._columnContent && this._columnContent.nativeElement) {
                return ((/** @type {?} */ (this._columnContent.nativeElement))).getBoundingClientRect().width;
            }
            return 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "sortOrder", {
        /**
         * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
         * Sets the sort order of column.
         * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
         */
        set: /**
         * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
         * Sets the sort order of column.
         * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
         * @param {?} order
         * @return {?}
         */
        function (order) {
            /** @type {?} */
            var sortOrder = order ? order.toUpperCase() : 'ASC';
            if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
                throw new Error('[sortOrder] must be empty, ASC or DESC');
            }
            this._sortOrder = sortOrder === 'ASC' ?
                TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bindClickable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.sortable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bingSortable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.sortable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bindActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bindNumeric", {
        get: /**
         * @return {?}
         */
        function () {
            return this.numeric;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listening to click event on host to throw a sort event
     */
    /**
     * Listening to click event on host to throw a sort event
     * @return {?}
     */
    TdDataTableColumnComponent.prototype.handleClick = /**
     * Listening to click event on host to throw a sort event
     * @return {?}
     */
    function () {
        if (this.sortable) {
            this.onSortChange.emit({ name: this.name, order: this._sortOrder });
        }
    };
    /**
     * @return {?}
     */
    TdDataTableColumnComponent.prototype.isAscending = /**
     * @return {?}
     */
    function () {
        return this._sortOrder === TdDataTableSortingOrder.Ascending;
    };
    /**
     * @return {?}
     */
    TdDataTableColumnComponent.prototype.isDescending = /**
     * @return {?}
     */
    function () {
        return this._sortOrder === TdDataTableSortingOrder.Descending;
    };
    TdDataTableColumnComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Component"], args: [{
                    /* tslint:disable-next-line */
                    selector: 'th[td-data-table-column]',
                    template: "<span #columnContent class=\"td-data-table-heading\">\n  <mat-icon \n    class=\"td-data-table-sort-icon\" \n    *ngIf=\"sortable && numeric\"\n    [class.mat-asc]=\"isAscending()\"\n    [class.mat-desc]=\"isDescending()\">\n    arrow_upward\n  </mat-icon>\n  <span>\n    <ng-content></ng-content>\n  </span>\n  <mat-icon \n    class=\"td-data-table-sort-icon\" \n    *ngIf=\"sortable && !numeric\"\n    [class.mat-asc]=\"isAscending()\"\n    [class.mat-desc]=\"isDescending()\">\n    arrow_upward\n  </mat-icon>\n</span>\n<ng-content select=\"[td-column-resizer]\"></ng-content>\n",
                    styles: [":host{white-space:nowrap;position:relative;padding:0;vertical-align:middle;text-align:left}:host>.td-data-table-heading{padding:0 28px}:host:first-child>.td-data-table-heading{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host mat-icon{height:16px;width:16px;font-size:16px!important;line-height:16px!important}:host mat-icon.td-data-table-sort-icon{opacity:0;-webkit-transition:-webkit-transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s;position:absolute;top:0}:host mat-icon.td-data-table-sort-icon.mat-asc{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}:host mat-icon.td-data-table-sort-icon.mat-desc{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}:host.mat-active.mat-sortable mat-icon.td-data-table-sort-icon,:host:hover.mat-sortable mat-icon.td-data-table-sort-icon{opacity:1}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host .td-data-table-heading{display:inline-block;position:relative}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:-22px;margin-right:initial}html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:6px;margin-right:initial}html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
                }] }
    ];
    /** @nocollapse */
    TdDataTableColumnComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Renderer2"] }
    ]; };
    TdDataTableColumnComponent.propDecorators = {
        _columnContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ViewChild"], args: ['columnContent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ElementRef"] },] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['name',] }],
        sortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['sortable',] }],
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['active',] }],
        numeric: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['numeric',] }],
        sortOrder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['sortOrder',] }],
        onSortChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Output"], args: ['sortChange',] }],
        bindClickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["HostBinding"], args: ['class.mat-clickable',] }],
        bingSortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["HostBinding"], args: ['class.mat-sortable',] }],
        bindActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["HostBinding"], args: ['class.mat-active',] }],
        bindNumeric: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["HostBinding"], args: ['class.mat-numeric',] }],
        handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["HostListener"], args: ['click',] }]
    };
    return TdDataTableColumnComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdDataTableCellComponent = /** @class */ (function () {
    function TdDataTableCellComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * numeric?: boolean
         * Makes cell follow the numeric data-table specs.
         * Defaults to 'false'
         */
        this.numeric = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-cell');
    }
    Object.defineProperty(TdDataTableCellComponent.prototype, "align", {
        get: /**
         * @return {?}
         */
        function () {
            return this._align;
        },
        /**
         * align?: 'start' | 'center' | 'end'
         * Makes cell content align on demand
         * Defaults to 'left', overrides numeric
         */
        set: /**
         * align?: 'start' | 'center' | 'end'
         * Makes cell content align on demand
         * Defaults to 'left', overrides numeric
         * @param {?} align
         * @return {?}
         */
        function (align) {
            this._align = align;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableCellComponent.prototype, "bindNumeric", {
        get: /**
         * @return {?}
         */
        function () {
            return this.numeric;
        },
        enumerable: true,
        configurable: true
    });
    TdDataTableCellComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Component"], args: [{
                    /* tslint:disable-next-line */
                    selector: 'td[td-data-table-cell]',
                    template: "<div class=\"td-data-table-cell-content-wrapper\"\n     [class.td-data-table-cell-numeric]=\"numeric\"\n     [class.td-data-table-cell-align-center]=\"align === 'center'\"\n     [class.td-data-table-cell-align-end]=\"align === 'end'\"\n     [class.td-data-table-cell-align-start]=\"align === 'start'\"\n     >\n  <ng-content></ng-content>\n</div>",
                    styles: [":host{vertical-align:middle;text-align:left;padding:0}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>.td-data-table-cell-content-wrapper{padding:0 28px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-numeric{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host:first-child>.td-data-table-cell-content-wrapper{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
                }] }
    ];
    /** @nocollapse */
    TdDataTableCellComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Renderer2"] }
    ]; };
    TdDataTableCellComponent.propDecorators = {
        numeric: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"], args: ['numeric',] }],
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Input"] }],
        bindNumeric: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["HostBinding"], args: ['class.mat-numeric',] }]
    };
    return TdDataTableCellComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdDataTableTableComponent = /** @class */ (function () {
    function TdDataTableTableComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table');
    }
    TdDataTableTableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Component"], args: [{
                    /* tslint:disable-next-line */
                    selector: 'table[td-data-table]',
                    template: "<ng-content></ng-content>",
                    styles: [":host{width:100%;position:relative;border-spacing:0;overflow:hidden;border-collapse:collapse}"]
                }] }
    ];
    /** @nocollapse */
    TdDataTableTableComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Renderer2"] }
    ]; };
    return TdDataTableTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdDataTableService = /** @class */ (function () {
    function TdDataTableService() {
    }
    /**
     * params:
     * - data: any[]
     * - searchTerm: string
     * - ignoreCase: boolean = false
     * - excludedColumns: string[] = []
     *
     * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
     */
    /**
     * params:
     * - data: any[]
     * - searchTerm: string
     * - ignoreCase: boolean = false
     * - excludedColumns: string[] = []
     *
     * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
     * @param {?} data
     * @param {?} searchTerm
     * @param {?=} ignoreCase
     * @param {?=} excludedColumns
     * @return {?}
     */
    TdDataTableService.prototype.filterData = /**
     * params:
     * - data: any[]
     * - searchTerm: string
     * - ignoreCase: boolean = false
     * - excludedColumns: string[] = []
     *
     * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
     * @param {?} data
     * @param {?} searchTerm
     * @param {?=} ignoreCase
     * @param {?=} excludedColumns
     * @return {?}
     */
    function (data, searchTerm, ignoreCase, excludedColumns) {
        if (ignoreCase === void 0) { ignoreCase = false; }
        /** @type {?} */
        var filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        if (filter) {
            data = data.filter(function (item) {
                /** @type {?} */
                var res = Object.keys(item).find(function (key) {
                    if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                        /** @type {?} */
                        var preItemValue = ('' + item[key]);
                        /** @type {?} */
                        var itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                        return itemValue.indexOf(filter) > -1;
                    }
                });
                return !(typeof res === 'undefined');
            });
        }
        return data;
    };
    /**
     * params:
     * - data: any[]
     * - sortBy: string
     * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
     *
     * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
     */
    /**
     * params:
     * - data: any[]
     * - sortBy: string
     * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
     *
     * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
     * @param {?} data
     * @param {?} sortBy
     * @param {?=} sortOrder
     * @return {?}
     */
    TdDataTableService.prototype.sortData = /**
     * params:
     * - data: any[]
     * - sortBy: string
     * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
     *
     * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
     * @param {?} data
     * @param {?} sortBy
     * @param {?=} sortOrder
     * @return {?}
     */
    function (data, sortBy, sortOrder) {
        if (sortOrder === void 0) { sortOrder = TdDataTableSortingOrder.Ascending; }
        if (sortBy) {
            data = Array.from(data); // Change the array reference to trigger OnPush and not mutate original array
            data.sort(function (a, b) {
                /** @type {?} */
                var compA = a[sortBy];
                /** @type {?} */
                var compB = b[sortBy];
                /** @type {?} */
                var direction = 0;
                if (!Number.isNaN(Number.parseFloat(compA)) && !Number.isNaN(Number.parseFloat(compB))) {
                    direction = Number.parseFloat(compA) - Number.parseFloat(compB);
                }
                else {
                    if (compA < compB) {
                        direction = -1;
                    }
                    else if (compA > compB) {
                        direction = 1;
                    }
                }
                return direction * (sortOrder === TdDataTableSortingOrder.Descending ? -1 : 1);
            });
        }
        return data;
    };
    /**
     * params:
     * - data: any[]
     * - fromRow: number
     * - toRow: : number
     *
     * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
     */
    /**
     * params:
     * - data: any[]
     * - fromRow: number
     * - toRow: : number
     *
     * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
     * @param {?} data
     * @param {?} fromRow
     * @param {?} toRow
     * @return {?}
     */
    TdDataTableService.prototype.pageData = /**
     * params:
     * - data: any[]
     * - fromRow: number
     * - toRow: : number
     *
     * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
     * @param {?} data
     * @param {?} fromRow
     * @param {?} toRow
     * @return {?}
     */
    function (data, fromRow, toRow) {
        if (fromRow >= 1) {
            data = data.slice(fromRow - 1, toRow);
        }
        return data;
    };
    TdDataTableService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["Injectable"] }
    ];
    return TdDataTableService;
}());
/**
 * @param {?} parent
 * @return {?}
 */
function DATA_TABLE_PROVIDER_FACTORY(parent) {
    return parent || new TdDataTableService();
}
/** @type {?} */
var DATA_TABLE_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdDataTableService,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_14__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_14__["SkipSelf"](), TdDataTableService]],
    useFactory: DATA_TABLE_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var TD_DATA_TABLE = [
    TdDataTableComponent,
    TdDataTableTemplateDirective,
    TdDataTableColumnComponent,
    TdDataTableCellComponent,
    TdDataTableRowComponent,
    TdDataTableColumnRowComponent,
    TdDataTableTableComponent,
];
var CovalentDataTableModule = /** @class */ (function () {
    function CovalentDataTableModule() {
    }
    CovalentDataTableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatPseudoCheckboxModule"],
                    ],
                    declarations: [
                        TD_DATA_TABLE,
                    ],
                    exports: [
                        TD_DATA_TABLE,
                    ],
                    providers: [
                        DATA_TABLE_PROVIDER,
                    ],
                },] }
    ];
    return CovalentDataTableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=covalent-core-data-table.js.map

/***/ }),

/***/ "./node_modules/@covalent/core/fesm5/covalent-core-layout.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@covalent/core/fesm5/covalent-core-layout.js ***!
  \*******************************************************************/
/*! exports provided: CovalentLayoutModule, TdLayoutComponent, TdLayoutToggleDirective, TdLayoutCloseDirective, TdLayoutOpenDirective, LayoutToggleBase, _TdLayoutToggleMixinBase, LayoutToggle, TdLayoutCardOverComponent, TdLayoutFooterComponent, TdLayoutManageListComponent, TdLayoutManageListToggleDirective, TdLayoutManageListCloseDirective, TdLayoutManageListOpenDirective, TdLayoutNavComponent, TdLayoutNavListComponent, TdLayoutNavListToggleDirective, TdLayoutNavListCloseDirective, TdLayoutNavListOpenDirective, TdNavigationDrawerMenuDirective, TdNavigationDrawerToolbarDirective, TdNavigationDrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovalentLayoutModule", function() { return CovalentLayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutComponent", function() { return TdLayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutToggleDirective", function() { return TdLayoutToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutCloseDirective", function() { return TdLayoutCloseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutOpenDirective", function() { return TdLayoutOpenDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutToggleBase", function() { return LayoutToggleBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_TdLayoutToggleMixinBase", function() { return _TdLayoutToggleMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutToggle", function() { return LayoutToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutCardOverComponent", function() { return TdLayoutCardOverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutFooterComponent", function() { return TdLayoutFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutManageListComponent", function() { return TdLayoutManageListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutManageListToggleDirective", function() { return TdLayoutManageListToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutManageListCloseDirective", function() { return TdLayoutManageListCloseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutManageListOpenDirective", function() { return TdLayoutManageListOpenDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutNavComponent", function() { return TdLayoutNavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutNavListComponent", function() { return TdLayoutNavListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutNavListToggleDirective", function() { return TdLayoutNavListToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutNavListCloseDirective", function() { return TdLayoutNavListCloseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdLayoutNavListOpenDirective", function() { return TdLayoutNavListOpenDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdNavigationDrawerMenuDirective", function() { return TdNavigationDrawerMenuDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdNavigationDrawerToolbarDirective", function() { return TdNavigationDrawerToolbarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdNavigationDrawerComponent", function() { return TdNavigationDrawerComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _covalent_core_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @covalent/core/common */ "./node_modules/@covalent/core/fesm5/covalent-core-common.js");














/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdLayoutComponent = /** @class */ (function () {
    function TdLayoutComponent() {
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "over".
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'over';
        /**
         * opened?: boolean
         *
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "false".
         *
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = false;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "320px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '320px';
        /**
         * containerAutosize?: boolean
         *
         * Sets "autosize" of the sidenav-container.
         * Defaults to "false".
         *
         * See documentation for more info and potential performance risks.
         *
         * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
         */
        this.containerAutosize = false;
    }
    Object.defineProperty(TdLayoutComponent.prototype, "disableClose", {
        /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         */
        get: /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         * @return {?}
         */
        function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutComponent.prototype.toggle = /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutComponent.prototype.open = /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutComponent.prototype.close = /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this.sidenav.close();
    };
    TdLayoutComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'td-layout',
                    template: "<mat-sidenav-container fullscreen [autosize]=\"containerAutosize\">\n  <mat-sidenav #sidenav\n              class=\"td-layout-sidenav\"\n              [mode]=\"mode\"\n              [opened]=\"opened\"\n              [style.max-width]=\"sidenavWidth\"\n              [style.min-width]=\"sidenavWidth\"\n              [disableClose]=\"disableClose\">\n    <ng-content select=\"td-navigation-drawer\"></ng-content>\n    <ng-content select=\"[td-sidenav-content]\"></ng-content>\n  </mat-sidenav>\n  <ng-content></ng-content>\n</mat-sidenav-container>\n",
                    styles: [":host{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host ::ng-deep>mat-sidenav-container .mat-drawer>.mat-drawer-inner-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]
                }] }
    ];
    TdLayoutComponent.propDecorators = {
        sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"],] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['mode',] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['opened',] }],
        sidenavWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['sidenavWidth',] }],
        containerAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['containerAutosize',] }]
    };
    return TdLayoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LayoutToggleBase = /** @class */ (function () {
    function LayoutToggleBase() {
    }
    return LayoutToggleBase;
}());
/* tslint:disable-next-line */
/** @type {?} */
var _TdLayoutToggleMixinBase = Object(_covalent_core_common__WEBPACK_IMPORTED_MODULE_12__["mixinDisabled"])(LayoutToggleBase);
/**
 * @abstract
 */
var LayoutToggle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(LayoutToggle, _super);
    function LayoutToggle(_layout, _renderer, _elementRef) {
        var _this = _super.call(this) || this;
        _this._layout = _layout;
        _this._renderer = _renderer;
        _this._elementRef = _elementRef;
        _this._initialized = false;
        _this._hideWhenOpened = false;
        // if layout has not been provided
        // show warn message
        if (!_this._layout) {
            _this._noLayoutMessage();
        }
        _this._renderer.addClass(_this._elementRef.nativeElement, 'td-layout-menu-button');
        return _this;
    }
    Object.defineProperty(LayoutToggle.prototype, "hideWhenOpened", {
        /**
         * hideWhenOpened?: boolean
         * When this is set to true, the host will be hidden when
         * the sidenav is opened.
         */
        set: /**
         * hideWhenOpened?: boolean
         * When this is set to true, the host will be hidden when
         * the sidenav is opened.
         * @param {?} hideWhenOpened
         * @return {?}
         */
        function (hideWhenOpened) {
            this._hideWhenOpened = hideWhenOpened;
            if (this._initialized) {
                this._toggleVisibility();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LayoutToggle.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._initialized = true;
        if (this._layout && this._layout.sidenav) {
            this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(function () {
                _this._toggleVisibility();
            });
        }
        // execute toggleVisibility since the onOpenStart and onCloseStart
        // methods might not be executed always when the element is rendered
        this._toggleVisibility();
    };
    /**
     * @return {?}
     */
    LayoutToggle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._toggleSubs) {
            this._toggleSubs.unsubscribe();
            this._toggleSubs = undefined;
        }
    };
    /**
     * Listens to host click event to trigger the layout toggle
     */
    /**
     * Listens to host click event to trigger the layout toggle
     * @param {?} event
     * @return {?}
     */
    LayoutToggle.prototype.clickListener = /**
     * Listens to host click event to trigger the layout toggle
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (!this.disabled) {
            // if layout has been provided, try triggering the click on it
            // else show warn message
            if (this._layout && this._layout.open) {
                this.onClick();
            }
            else {
                this._noLayoutMessage();
            }
        }
    };
    /**
     * @return {?}
     */
    LayoutToggle.prototype._toggleVisibility = /**
     * @return {?}
     */
    function () {
        if (this._layout) {
            if (this._layout.sidenav.opened && this._hideWhenOpened) {
                this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
            }
            else {
                this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
            }
        }
    };
    /**
     * @return {?}
     */
    LayoutToggle.prototype._noLayoutMessage = /**
     * @return {?}
     */
    function () {
        /* tslint:disable-next-line */
        console.warn('Covalent: Parent layout not found for layout toggle directive');
    };
    LayoutToggle.propDecorators = {
        hideWhenOpened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['hideWhenOpened',] }],
        clickListener: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["HostListener"], args: ['click', ['$event'],] }]
    };
    return LayoutToggle;
}(_TdLayoutToggleMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdLayoutToggleDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(TdLayoutToggleDirective, _super);
    function TdLayoutToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutToggleDirective.prototype, "tdLayoutToggle", {
        set: /**
         * @param {?} tdLayoutToggle
         * @return {?}
         */
        function (tdLayoutToggle) {
            this.disabled = !((/** @type {?} */ (tdLayoutToggle)) === '' || tdLayoutToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.toggle();
    };
    TdLayoutToggleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[tdLayoutToggle]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutToggleDirective.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return TdLayoutComponent; }),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] }
    ]; };
    TdLayoutToggleDirective.propDecorators = {
        tdLayoutToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['tdLayoutToggle',] }]
    };
    return TdLayoutToggleDirective;
}(LayoutToggle));
var TdLayoutCloseDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(TdLayoutCloseDirective, _super);
    function TdLayoutCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutCloseDirective.prototype, "tdLayoutClose", {
        set: /**
         * @param {?} tdLayoutClose
         * @return {?}
         */
        function (tdLayoutClose) {
            this.disabled = !((/** @type {?} */ (tdLayoutClose)) === '' || tdLayoutClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutCloseDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.close();
    };
    TdLayoutCloseDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[tdLayoutClose]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutCloseDirective.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return TdLayoutComponent; }),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] }
    ]; };
    TdLayoutCloseDirective.propDecorators = {
        tdLayoutClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['tdLayoutClose',] }]
    };
    return TdLayoutCloseDirective;
}(LayoutToggle));
var TdLayoutOpenDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(TdLayoutOpenDirective, _super);
    function TdLayoutOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutOpenDirective.prototype, "tdLayoutClose", {
        set: /**
         * @param {?} tdLayoutOpen
         * @return {?}
         */
        function (tdLayoutOpen) {
            this.disabled = !((/** @type {?} */ (tdLayoutOpen)) === '' || tdLayoutOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutOpenDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.open();
    };
    TdLayoutOpenDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[tdLayoutOpen]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutOpenDirective.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return TdLayoutComponent; }),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] }
    ]; };
    TdLayoutOpenDirective.propDecorators = {
        tdLayoutClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['tdLayoutOpen',] }]
    };
    return TdLayoutOpenDirective;
}(LayoutToggle));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdLayoutNavComponent = /** @class */ (function () {
    function TdLayoutNavComponent(_router) {
        this._router = _router;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
    }
    Object.defineProperty(TdLayoutNavComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         */
        get: /**
         * Checks if router was injected.
         * @return {?}
         */
        function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavComponent.prototype.handleNavigationClick = /**
     * @return {?}
     */
    function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    };
    TdLayoutNavComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'td-layout-nav',
                    template: "<div class=\"td-layout-nav-wrapper\">\n  <mat-toolbar [color]=\"color\">\n    <ng-content select=\"[td-menu-button]\"></ng-content>\n    <span *ngIf=\"icon || logo || toolbarTitle\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\"\n          class=\"td-layout-nav-toolbar-content\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span>\n    </span>\n    <ng-content select=\"[td-toolbar-content]\"></ng-content>\n  </mat-toolbar>\n  <div class=\"td-layout-nav-content\" cdkScrollable>\n    <ng-content></ng-content>\n  </div>\n  <ng-content select=\"td-layout-footer\"></ng-content>\n</div>\n",
                    styles: [".td-menu-button{margin-left:0}::ng-deep [dir=rtl] .td-menu-button{margin-right:0;margin-left:6px}:host{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host .td-layout-nav-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%}:host .td-layout-nav-wrapper .td-layout-nav-toolbar-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .td-layout-nav-wrapper .td-layout-nav-content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}"]
                }] }
    ];
    /** @nocollapse */
    TdLayoutNavComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }] }
    ]; };
    TdLayoutNavComponent.propDecorators = {
        toolbarTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['toolbarTitle',] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['icon',] }],
        logo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['logo',] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['color',] }],
        navigationRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['navigationRoute',] }]
    };
    return TdLayoutNavComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdLayoutNavListComponent = /** @class */ (function () {
    function TdLayoutNavListComponent(_router) {
        this._router = _router;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "side".
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'side';
        /**
         * opened?: boolean
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "true".
         *
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = true;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "350px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '350px';
        /**
         * containerAutosize?: boolean
         *
         * Sets "autosize" of the sidenav-container.
         * Defaults to "false".
         *
         * See documentation for more info and potential performance risks.
         *
         * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
         */
        this.containerAutosize = false;
    }
    Object.defineProperty(TdLayoutNavListComponent.prototype, "disableClose", {
        /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         */
        get: /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         * @return {?}
         */
        function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLayoutNavListComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         */
        get: /**
         * Checks if router was injected.
         * @return {?}
         */
        function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListComponent.prototype.handleNavigationClick = /**
     * @return {?}
     */
    function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    };
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutNavListComponent.prototype.toggle = /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutNavListComponent.prototype.open = /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutNavListComponent.prototype.close = /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this.sidenav.close();
    };
    TdLayoutNavListComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'td-layout-nav-list',
                    template: "<div class=\"td-layout-nav-list-wrapper\">\n  <mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-nav-list\">\n    <mat-sidenav #sidenav\n                position=\"start\"\n                [mode]=\"mode\"\n                [opened]=\"opened\"\n                [disableClose]=\"disableClose\"\n                [style.max-width]=\"sidenavWidth\"\n                [style.min-width]=\"sidenavWidth\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-menu-button]\"></ng-content>\n        <span *ngIf=\"icon || logo || toolbarTitle\"\n              class=\"td-layout-nav-list-toolbar-content\"\n              [class.cursor-pointer]=\"routerEnabled\"\n              (click)=\"handleNavigationClick()\">\n          <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n          <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n          <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span>\n        </span>\n        <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content select=\"[td-sidenav-content]\"></ng-content>\n      </div>\n    </mat-sidenav>\n    <div class=\"td-layout-nav-list-main\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"td-layout-footer-inner\"></ng-content>\n    </div>\n  </mat-sidenav-container>\n</div>\n<ng-content select=\"td-layout-footer\"></ng-content>",
                    styles: [":host{margin:0;width:100%;min-height:100%;height:100%;overflow:hidden;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-right:0}[dir=rtl] :host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-left:0}:host .td-layout-nav-list-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-nav-list-wrapper .td-layout-nav-list-toolbar-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .td-layout-nav-list-wrapper .td-layout-nav-list-content{text-align:start;-webkit-box-flex:1;-ms-flex:1;flex:1;display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;position:relative;overflow:auto}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main .td-layout-nav-list-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closed,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closing,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opened,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opening{-webkit-box-shadow:none;box-shadow:none}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer>.mat-drawer-inner-container{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]
                }] }
    ];
    /** @nocollapse */
    TdLayoutNavListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }] }
    ]; };
    TdLayoutNavListComponent.propDecorators = {
        sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"],] }],
        toolbarTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['toolbarTitle',] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['icon',] }],
        logo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['logo',] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['color',] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['mode',] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['opened',] }],
        sidenavWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['sidenavWidth',] }],
        containerAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['containerAutosize',] }],
        navigationRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['navigationRoute',] }]
    };
    return TdLayoutNavListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdLayoutNavListToggleDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(TdLayoutNavListToggleDirective, _super);
    function TdLayoutNavListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", {
        set: /**
         * @param {?} tdLayoutNavListToggle
         * @return {?}
         */
        function (tdLayoutNavListToggle) {
            this.disabled = !((/** @type {?} */ (tdLayoutNavListToggle)) === '' || tdLayoutNavListToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.toggle();
    };
    TdLayoutNavListToggleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[tdLayoutNavListToggle]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutNavListToggleDirective.ctorParameters = function () { return [
        { type: TdLayoutNavListComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return TdLayoutNavListComponent; }),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] }
    ]; };
    TdLayoutNavListToggleDirective.propDecorators = {
        tdLayoutNavListToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['tdLayoutNavListToggle',] }]
    };
    return TdLayoutNavListToggleDirective;
}(LayoutToggle));
var TdLayoutNavListCloseDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(TdLayoutNavListCloseDirective, _super);
    function TdLayoutNavListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", {
        set: /**
         * @param {?} tdLayoutNavListClose
         * @return {?}
         */
        function (tdLayoutNavListClose) {
            this.disabled = !((/** @type {?} */ (tdLayoutNavListClose)) === '' || tdLayoutNavListClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListCloseDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.close();
    };
    TdLayoutNavListCloseDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[tdLayoutNavListClose]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutNavListCloseDirective.ctorParameters = function () { return [
        { type: TdLayoutNavListComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return TdLayoutNavListComponent; }),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] }
    ]; };
    TdLayoutNavListCloseDirective.propDecorators = {
        tdLayoutNavListClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['tdLayoutNavListClose',] }]
    };
    return TdLayoutNavListCloseDirective;
}(LayoutToggle));
var TdLayoutNavListOpenDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(TdLayoutNavListOpenDirective, _super);
    function TdLayoutNavListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", {
        set: /**
         * @param {?} tdLayoutNavListOpen
         * @return {?}
         */
        function (tdLayoutNavListOpen) {
            this.disabled = !((/** @type {?} */ (tdLayoutNavListOpen)) === '' || tdLayoutNavListOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListOpenDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.open();
    };
    TdLayoutNavListOpenDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[tdLayoutNavListOpen]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutNavListOpenDirective.ctorParameters = function () { return [
        { type: TdLayoutNavListComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return TdLayoutNavListComponent; }),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] }
    ]; };
    TdLayoutNavListOpenDirective.propDecorators = {
        tdLayoutNavListOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['tdLayoutNavListOpen',] }]
    };
    return TdLayoutNavListOpenDirective;
}(LayoutToggle));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdLayoutCardOverComponent = /** @class */ (function () {
    function TdLayoutCardOverComponent() {
        /**
         * cardWidth?: string
         *
         * Card flex width in %.
         * Defaults to 70%.
         */
        this.cardWidth = 70;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
    }
    TdLayoutCardOverComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'td-layout-card-over',
                    template: "<mat-toolbar [color]=\"color\">\n</mat-toolbar>\n<div class=\"td-layout-card-over-wrapper\">\n  <div class=\"td-layout-card-over\"\n        [style.max-width.%]=\"cardWidth\"\n        [style.flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-webkit-box-flex]=\"1\">\n    <mat-card>\n      <mat-card-title *ngIf=\"cardTitle\">{{cardTitle}}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"cardSubtitle\">{{cardSubtitle}}</mat-card-subtitle>\n      <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider>\n      <ng-content></ng-content>\n    </mat-card>\n    <ng-content select=\"[td-after-card]\"></ng-content>\n  </div>\n</div>\n",
                    styles: [":host{position:relative;display:block;z-index:2;width:100%;min-height:100%;height:100%}:host [td-after-card]{display:block}.td-layout-card-over-wrapper{margin:-64px 0;width:100%;min-height:100%;height:100%}@media (min-width:600px){.td-layout-card-over-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.td-layout-card-over-wrapper .td-layout-card-over{max-height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}}@media (max-width:599px){.td-layout-card-over-wrapper .td-layout-card-over{max-width:100%!important}}"]
                }] }
    ];
    TdLayoutCardOverComponent.propDecorators = {
        cardTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['cardTitle',] }],
        cardSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['cardSubtitle',] }],
        cardWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['cardWidth',] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['color',] }]
    };
    return TdLayoutCardOverComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdLayoutManageListComponent = /** @class */ (function () {
    function TdLayoutManageListComponent() {
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "side".
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'side';
        /**
         * opened?: boolean
         *
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "true".
         *
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = true;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "257px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '257px';
        /**
         * containerAutosize?: boolean
         *
         * Sets "autosize" of the sidenav-container.
         * Defaults to "false".
         *
         * See documentation for more info and potential performance risks.
         *
         * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
         */
        this.containerAutosize = false;
    }
    Object.defineProperty(TdLayoutManageListComponent.prototype, "disableClose", {
        /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         */
        get: /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         * @return {?}
         */
        function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutManageListComponent.prototype.toggle = /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutManageListComponent.prototype.open = /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutManageListComponent.prototype.close = /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this.sidenav.close();
    };
    TdLayoutManageListComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'td-layout-manage-list',
                    template: "<mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-manage-list\">\n  <mat-sidenav #sidenav\n              position=\"start\"\n              [mode]=\"mode\"\n              [opened]=\"opened\"\n              [disableClose]=\"disableClose\"\n              [style.max-width]=\"sidenavWidth\"\n              [style.min-width]=\"sidenavWidth\">\n    <ng-content select=\"mat-toolbar[td-sidenav-content]\"></ng-content>\n    <div class=\"td-layout-manage-list-sidenav\" cdkScrollable>\n      <ng-content select=\"[td-sidenav-content]\"></ng-content>\n    </div>\n  </mat-sidenav>\n  <div class=\"td-layout-manage-list-main\">\n    <ng-content select=\"mat-toolbar\"></ng-content>\n    <div class=\"td-layout-manage-list-content\" cdkScrollable>\n      <ng-content></ng-content>\n    </div>\n    <ng-content select=\"td-layout-footer-inner\"></ng-content>\n  </div>\n</mat-sidenav-container>\n",
                    styles: [":host{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host mat-sidenav-container.td-layout-manage-list{-webkit-box-flex:1;-ms-flex:1;flex:1}:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-closed,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-closing,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-opened,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-opening{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2);box-shadow:0 1px 3px 0 rgba(0,0,0,.2)}:host .td-layout-manage-list-sidenav{text-align:start;-webkit-box-flex:1;-ms-flex:1;flex:1;display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-manage-list-main{margin:0;width:100%;min-height:100%;height:100%;position:relative;overflow:auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host .td-layout-manage-list-main .td-layout-manage-list-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-box-flex:1;-ms-flex:1;flex:1}:host ::ng-deep mat-sidenav-container.td-layout-manage-list>.mat-drawer-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host ::ng-deep mat-nav-list a[mat-list-item] .mat-list-item-content{font-size:14px}:host ::ng-deep .mat-toolbar{font-weight:400}"]
                }] }
    ];
    TdLayoutManageListComponent.propDecorators = {
        sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"],] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['mode',] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['opened',] }],
        sidenavWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['sidenavWidth',] }],
        containerAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['containerAutosize',] }]
    };
    return TdLayoutManageListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdLayoutManageListToggleDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(TdLayoutManageListToggleDirective, _super);
    function TdLayoutManageListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", {
        set: /**
         * @param {?} tdLayoutManageListToggle
         * @return {?}
         */
        function (tdLayoutManageListToggle) {
            this.disabled = !((/** @type {?} */ (tdLayoutManageListToggle)) === '' || tdLayoutManageListToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.toggle();
    };
    TdLayoutManageListToggleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[tdLayoutManageListToggle]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutManageListToggleDirective.ctorParameters = function () { return [
        { type: TdLayoutManageListComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return TdLayoutManageListComponent; }),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] }
    ]; };
    TdLayoutManageListToggleDirective.propDecorators = {
        tdLayoutManageListToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['tdLayoutManageListToggle',] }]
    };
    return TdLayoutManageListToggleDirective;
}(LayoutToggle));
var TdLayoutManageListCloseDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(TdLayoutManageListCloseDirective, _super);
    function TdLayoutManageListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", {
        set: /**
         * @param {?} tdLayoutManageListClose
         * @return {?}
         */
        function (tdLayoutManageListClose) {
            this.disabled = !((/** @type {?} */ (tdLayoutManageListClose)) === '' || tdLayoutManageListClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListCloseDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.close();
    };
    TdLayoutManageListCloseDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[tdLayoutManageListClose]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutManageListCloseDirective.ctorParameters = function () { return [
        { type: TdLayoutManageListComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return TdLayoutManageListComponent; }),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] }
    ]; };
    TdLayoutManageListCloseDirective.propDecorators = {
        tdLayoutManageListClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['tdLayoutManageListClose',] }]
    };
    return TdLayoutManageListCloseDirective;
}(LayoutToggle));
var TdLayoutManageListOpenDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(TdLayoutManageListOpenDirective, _super);
    function TdLayoutManageListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", {
        set: /**
         * @param {?} tdLayoutManageListOpen
         * @return {?}
         */
        function (tdLayoutManageListOpen) {
            this.disabled = !((/** @type {?} */ (tdLayoutManageListOpen)) === '' || tdLayoutManageListOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListOpenDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.open();
    };
    TdLayoutManageListOpenDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[tdLayoutManageListOpen]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutManageListOpenDirective.ctorParameters = function () { return [
        { type: TdLayoutManageListComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return TdLayoutManageListComponent; }),] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] }
    ]; };
    TdLayoutManageListOpenDirective.propDecorators = {
        tdLayoutManageListOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['tdLayoutManageListOpen',] }]
    };
    return TdLayoutManageListOpenDirective;
}(LayoutToggle));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdLayoutFooterComponent = /** @class */ (function () {
    function TdLayoutFooterComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
    }
    Object.defineProperty(TdLayoutFooterComponent.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        /**
         * color?: string
         *
         * Optional color option: primary | accent | warn.
         */
        set: /**
         * color?: string
         *
         * Optional color option: primary | accent | warn.
         * @param {?} color
         * @return {?}
         */
        function (color) {
            if (color) {
                this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                this._color = color;
                this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
            }
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutFooterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    /* tslint:disable-next-line */
                    selector: 'td-layout-footer,td-layout-footer-inner',
                    template: "<ng-content></ng-content>\n",
                    styles: [":host{display:block;padding:10px 16px}"]
                }] }
    ];
    /** @nocollapse */
    TdLayoutFooterComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] }
    ]; };
    TdLayoutFooterComponent.propDecorators = {
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['color',] }]
    };
    return TdLayoutFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdNavigationDrawerMenuDirective = /** @class */ (function () {
    function TdNavigationDrawerMenuDirective() {
    }
    TdNavigationDrawerMenuDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[td-navigation-drawer-menu]',
                },] }
    ];
    return TdNavigationDrawerMenuDirective;
}());
var TdNavigationDrawerToolbarDirective = /** @class */ (function () {
    function TdNavigationDrawerToolbarDirective() {
    }
    TdNavigationDrawerToolbarDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[td-navigation-drawer-toolbar]',
                },] }
    ];
    return TdNavigationDrawerToolbarDirective;
}());
var TdNavigationDrawerComponent = /** @class */ (function () {
    function TdNavigationDrawerComponent(_layout, _router, _sanitize) {
        this._layout = _layout;
        this._router = _router;
        this._sanitize = _sanitize;
        this._menuToggled = false;
    }
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "menuToggled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._menuToggled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isMenuAvailable", {
        /**
         * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
         */
        get: /**
         * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
         * @return {?}
         */
        function () {
            return this._drawerMenu ? this._drawerMenu.length > 0 : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isCustomToolbar", {
        /**
         * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
         */
        get: /**
         * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
         * @return {?}
         */
        function () {
            return this._toolbar ? this._toolbar.length > 0 : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isBackgroundAvailable", {
        /**
         * Checks if there is a background image for the toolbar.
         */
        get: /**
         * Checks if there is a background image for the toolbar.
         * @return {?}
         */
        function () {
            return !!this._backgroundImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundUrl", {
        /**
         * backgroundUrl?: SafeResourceUrl
         *
         * image to be displayed as the background of the toolbar.
         * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
         */
        set: /**
         * backgroundUrl?: SafeResourceUrl
         *
         * image to be displayed as the background of the toolbar.
         * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
         * @param {?} backgroundUrl
         * @return {?}
         */
        function (backgroundUrl) {
            if (backgroundUrl) {
                /** @type {?} */
                var sanitizedUrl = this._sanitize.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_9__["SecurityContext"].RESOURCE_URL, backgroundUrl);
                this._backgroundImage = this._sanitize.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_9__["SecurityContext"].STYLE, 'url(' + sanitizedUrl + ')');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundImage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._backgroundImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         */
        get: /**
         * Checks if router was injected.
         * @return {?}
         */
        function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._closeSubscription = this._layout.sidenav.openedChange.subscribe(function (opened) {
            if (!opened) {
                _this._menuToggled = false;
            }
        });
    };
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._closeSubscription) {
            this._closeSubscription.unsubscribe();
            this._closeSubscription = undefined;
        }
    };
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.toggleMenu = /**
     * @return {?}
     */
    function () {
        if (this.isMenuAvailable) {
            this._menuToggled = !this._menuToggled;
        }
    };
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.handleNavigationClick = /**
     * @return {?}
     */
    function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
            this.close();
        }
    };
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.toggle = /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this._layout.toggle();
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.open = /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this._layout.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.close = /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    function () {
        return this._layout.close();
    };
    TdNavigationDrawerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'td-navigation-drawer',
                    template: "<mat-toolbar [color]=\"color\"\n             [style.background-image]=\"backgroundImage\"\n             [class.td-toolbar-background]=\"!!isBackgroundAvailable\"\n             class=\"td-nagivation-drawer-toolbar\">\n  <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content>\n  <ng-container *ngIf=\"!isCustomToolbar\">\n    <div *ngIf=\"icon || logo || sidenavTitle || avatar\"\n          class=\"td-navigation-drawer-toolbar-content\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <img *ngIf=\"avatar && !logo && !icon\" class=\"td-nagivation-drawer-toolbar-avatar\" [attr.src]=\"avatar\" />\n      <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{sidenavTitle}}</span>\n    </div>\n    <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{name}}</div>\n    <div class=\"td-navigation-drawer-menu-toggle\"\n        href\n        *ngIf=\"email || name\"\n        (click)=\"toggleMenu()\">\n      <span class=\"td-navigation-drawer-label\">{{email || name}}</span>\n      <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\">\n        <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon>\n        <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n</mat-toolbar>\n<div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\">\n  <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content>\n</div>\n",
                    animations: [_covalent_core_common__WEBPACK_IMPORTED_MODULE_12__["tdCollapseAnimation"]],
                    styles: [":host{width:100%}:host .td-navigation-drawer-content.ng-animating,:host .td-navigation-drawer-menu-content.ng-animating{overflow:hidden}:host mat-toolbar{padding:16px}:host mat-toolbar.td-toolbar-background{background-repeat:no-repeat;background-size:cover}:host mat-toolbar.td-nagivation-drawer-toolbar{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:auto!important;display:block!important}:host mat-toolbar .td-navigation-drawer-toolbar-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host mat-toolbar .td-navigation-drawer-toolbar-content .td-nagivation-drawer-toolbar-avatar{border-radius:50%;height:60px;width:60px;margin:0 12px 12px 0}:host mat-toolbar .td-navigation-drawer-menu-toggle{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{-webkit-box-flex:1;-ms-flex:1;flex:1}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{height:24px;line-height:24px;width:24px}:host>div{overflow:hidden}"]
                }] }
    ];
    /** @nocollapse */
    TdNavigationDrawerComponent.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return TdLayoutComponent; }),] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] }
    ]; };
    TdNavigationDrawerComponent.propDecorators = {
        _drawerMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"], args: [TdNavigationDrawerMenuDirective,] }],
        _toolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"], args: [TdNavigationDrawerToolbarDirective,] }],
        sidenavTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['sidenavTitle',] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['icon',] }],
        logo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['logo',] }],
        avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['avatar',] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['color',] }],
        navigationRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['navigationRoute',] }],
        backgroundUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['backgroundUrl',] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['name',] }],
        email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['email',] }]
    };
    return TdNavigationDrawerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var TD_LAYOUTS = [
    TdLayoutComponent,
    TdLayoutToggleDirective,
    TdLayoutCloseDirective,
    TdLayoutOpenDirective,
    TdLayoutNavComponent,
    TdLayoutNavListComponent,
    TdLayoutNavListToggleDirective,
    TdLayoutNavListCloseDirective,
    TdLayoutNavListOpenDirective,
    TdLayoutCardOverComponent,
    TdLayoutManageListComponent,
    TdLayoutManageListToggleDirective,
    TdLayoutManageListCloseDirective,
    TdLayoutManageListOpenDirective,
    TdLayoutFooterComponent,
    TdNavigationDrawerComponent,
    TdNavigationDrawerMenuDirective,
    TdNavigationDrawerToolbarDirective,
];
var CovalentLayoutModule = /** @class */ (function () {
    function CovalentLayoutModule() {
    }
    CovalentLayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatchModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                        _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                    ],
                    declarations: [
                        TD_LAYOUTS,
                    ],
                    exports: [
                        TD_LAYOUTS,
                    ],
                },] }
    ];
    return CovalentLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=covalent-core-layout.js.map

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\t\t  <td-layout [mode]=\"(media.registerQuery('gt-sm') | async) ? 'side' : 'push'\" [sidenavWidth]=\"(media.registerQuery('gt-xs') | async) ? '240px' : '100%'\">\r\n\t\t\t\t<td-navigation-drawer flex [sidenavTitle]=\"name\" logo=\"assets:covalent\">\r\n\t\t\t\t  <mat-nav-list [tdLayoutClose]=\"!media.query('gt-sm')\">\r\n\t\t\t\t\t<a *ngFor=\"let item of routes\" mat-list-item><mat-icon matListIcon>{{item.icon}}</mat-icon>{{item.title}}</a>\r\n\t\t\t\t  </mat-nav-list>\r\n\t\t\t\t  <div td-navigation-drawer-menu>\r\n\t\t\t\t\t<mat-nav-list>\r\n\t\t\t\t\t  <a *ngFor=\"let item of usermenu\" mat-list-item><mat-icon matListIcon>{{item.icon}}</mat-icon>{{item.title}}</a>\r\n\t\t\t\t\t</mat-nav-list>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</td-navigation-drawer>\r\n\t\t\t\t<td-layout-nav [toolbarTitle]=\"(media.registerQuery('gt-xs') | async) ? 'Dashboard' : ''\" logo=\"assets:covalent\" navigationRoute=\"/\">\r\n\t\t\t\t  <button mat-icon-button td-menu-button tdLayoutToggle>\r\n\t\t\t\t\t<mat-icon>menu</mat-icon>\r\n\t\t\t\t  </button>\r\n\t\t\t\t  <!-- <div td-toolbar-content layout=\"row\" layout-align=\"start center\" flex>\r\n\t\t\t\t\t<span flex *ngIf=\"!searchBox.searchVisible\"></span>\r\n\t\t\t\t\t<td-search-box hide-xs flex #searchBox [ngClass]=\"{'push-left push-right mat-whiteframe-z1 bgc-white tc-black': searchBox.searchVisible }\"  placeholder=\"search\"></td-search-box>\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t  <button mat-icon-button matTooltip=\"Alerts\" [matMenuTriggerFor]=\"notificationsMenu\">\r\n\t\t\t\t\t\t<td-notification-count color=\"accent\" [notifications]=\"4\">\r\n\t\t\t\t\t\t  <mat-icon>notifications</mat-icon>\r\n\t\t\t\t\t\t</td-notification-count>\r\n\t\t\t\t\t  </button>\r\n\t\t\t\t\t  <mat-menu #notificationsMenu=\"matMenu\">\r\n\t\t\t\t\t\t<td-menu>\r\n\t\t\t\t\t\t  <div td-menu-header class=\"mat-subhead\">Notifications</div>\r\n\t\t\t\t\t\t  <mat-nav-list dense>\r\n\t\t\t\t\t\t\t<ng-template let-last=\"last\" ngFor [ngForOf]=\"[0,1,2]\">\r\n\t\t\t\t\t\t\t  <a mat-list-item>\r\n\t\t\t\t\t\t\t\t<mat-icon matListAvatar>today</mat-icon>\r\n\t\t\t\t\t\t\t\t<h4 mat-line><span class=\"text-wrap\">Candy sales are on the rise!</span></h4>\r\n\t\t\t\t\t\t\t\t<p mat-line>22 minutes ago</p>\r\n\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t  <mat-divider *ngIf=\"!last\"></mat-divider>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t  </mat-nav-list>\r\n\t\t\t\t\t\t  <button mat-button color=\"accent\" td-menu-footer>\r\n\t\t\t\t\t\t\tSee All Notifications\r\n\t\t\t\t\t\t  </button>\r\n\t\t\t\t\t\t</td-menu>\r\n\t\t\t\t\t  </mat-menu>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t  <button mat-icon-button matTooltip=\"More\" [mat-menu-trigger-for]=\"more\">\r\n\t\t\t\t\t\t<mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t  </button>\r\n\t\t\t\t\t  <mat-menu xPosition=\"before\" #more=\"matMenu\">\r\n\t\t\t\t\t\t  <button mat-menu-item *ngIf=\"activeTheme === 'theme-dark'\" (click)=\"theme('theme-light')\">\r\n\t\t\t\t\t\t\t<mat-icon>brightness_high</mat-icon>\r\n\t\t\t\t\t\t\t<span>Light Mode</span>\r\n\t\t\t\t\t\t  </button>\r\n\t\t\t\t\t\t  <button mat-menu-item *ngIf=\"activeTheme != 'theme-dark'\" (click)=\"theme('theme-dark')\">\r\n\t\t\t\t\t\t\t<mat-icon>brightness_low</mat-icon>\r\n\t\t\t\t\t\t\t<span>Dark Mode</span>\r\n\t\t\t\t\t\t  </button>\r\n\t\t\t\t\t  </mat-menu>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t  </div> -->\r\n\t\t\t\t  <td-layout-manage-list #manageList\r\n\t\t\t\t\t\t  [opened]=\"media.registerQuery('gt-sm') | async\"\r\n\t\t\t\t\t\t  [mode]=\"(media.registerQuery('gt-sm') | async) ? 'side' :  'over'\"\r\n\t\t\t\t\t\t  [sidenavWidth]=\"!miniNav ? '257px' : '64px'\">\r\n\t\t\t\t\t<div td-sidenav-content layout=\"column\" layout-fill>\r\n\t\t\t\t\t  <mat-toolbar>\r\n\t\t\t\t\t\t<mat-icon class=\"push-left-xs\" [matTooltip]=\"!miniNav ? '' : 'Dashboards'\" matTooltipPosition=\"after\">dashboard</mat-icon>\r\n\t\t\t\t\t\t<span *ngIf=\"!miniNav\" class=\"push-left-sm\">Dashboards</span>\r\n\t\t\t\t\t  </mat-toolbar>\r\n\t\t\t\t\t  <mat-nav-list flex [tdLayoutManageListClose]=\"!media.query('gt-sm')\">\r\n\t\t\t\t\t\t<ng-template let-item let-index=\"index\" let-last=\"last\" ngFor [ngForOf]=\"[0, 1]\">\r\n\t\t\t\t\t\t  <a mat-list-item>\r\n\t\t\t\t\t\t\t<mat-icon matListIcon [matTooltip]=\"!miniNav ? '' : 'Dashboard ' + index\" matTooltipPosition=\"after\">dashboard</mat-icon>\r\n\t\t\t\t\t\t\t<span *ngIf=\"!miniNav\">Dashboard {{index}}</span>\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t<a mat-list-item  (click)=\"compagnielist()\">\r\n\t\t\t\t\t\t\t\t<mat-icon matListIcon [matTooltip]=\"!miniNav ? '' : 'Dashboard '\" matTooltipPosition=\"after\">dashboard</mat-icon>\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"!miniNav\">List des compagnies</span>\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<a mat-list-item>\r\n\t\t\t\t\t\t  <mat-icon matListIcon [matTooltip]=\"!miniNav ? '' : 'Add Dashboard'\" matTooltipPosition=\"after\">add</mat-icon>\r\n\t\t\t\t\t\t  <span *ngIf=\"!miniNav\">Add Dashboard</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t  </mat-nav-list>\r\n\t\t\t\t\t  <div class=\"td-layout-footer pad-sm\" layout=\"row\" layout-align=\"space-between center\">\r\n\t\t\t\t\t\t<button type=\"button\" mat-icon-button (click)=\"toggleMiniNav()\">\r\n\t\t\t\t\t\t  <mat-icon [@tdRotate]=\"miniNav\">keyboard_arrow_left</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<span *ngIf=\"!miniNav\" class=\"mat-caption\">&copy; 2017 Your Company, Inc.</span>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t<mat-sidenav-container flex>\r\n\t\t\t\t\t  <mat-sidenav #sidenav align=\"end\">\r\n\t\t\t\t\t\t<div layout=\"column\" layout-fill>\r\n\t\t\t\t\t\t  <mat-toolbar>Settings</mat-toolbar>\r\n\t\t\t\t\t\t  <div flex class=\"mat-content\">\r\n\t\t\t  \r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t  </mat-sidenav>\r\n\t\t\t\t\t  <td-layout-nav color=\"none\">\r\n\t\t\t\t\t\t<div td-toolbar-content flex layout=\"row\" layout-align=\"start center\">\r\n\t\t\t\t\t\t  <button mat-icon-button tdLayoutManageListToggle>\r\n\t\t\t\t\t\t\t<mat-icon>menu</mat-icon>\r\n\t\t\t\t\t\t  </button>\r\n\t\t\t\t\t\t  <span hide-xs>Dashboard 1</span>\r\n\t\t\t\t\t\t  <span flex></span>\r\n\t\t\t\t\t\t  <span [style.width.px]=\"100\" layout=\"row\" class=\"push-left-sm push-right mat-body-1\">\r\n\t\t\t\t\t\t\t<mat-form-field floatPlaceholder=\"never\" flex>\r\n\t\t\t\t\t\t\t  <input matInput  readonly [(ngModel)]=\"dateFrom\" [matDatepicker]=\"pickerFrom\">\r\n\t\t\t\t\t\t\t  <mat-datepicker-toggle matSuffix matTooltip=\"Start date\" [for]=\"pickerFrom\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  <mat-datepicker #pickerFrom [startAt]=\"dateFrom\"></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t  <span hide-xs class=\"mat-body-2 push-right\"> to </span>\r\n\t\t\t\t\t\t  <span [style.width.px]=\"100\" layout=\"row\" class=\"mat-body-1\">\r\n\t\t\t\t\t\t\t<mat-form-field floatPlaceholder=\"never\" flex>\r\n\t\t\t\t\t\t\t  <input matInput\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t   readonly [(ngModel)]=\"dateTo\" [matDatepicker]=\"pickerTo\">\r\n\t\t\t\t\t\t\t  <mat-datepicker-toggle matSuffix matTooltip=\"End date\" [for]=\"pickerTo\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  <mat-datepicker #pickerTo [startAt]=\"dateTo\"></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t  <button matTooltip=\"Dashboard Settings\" matTooltipPosition=\"before\" type=\"button\" mat-icon-button (click)=\"sidenav.open()\">\r\n\t\t\t\t\t\t\t<mat-icon>settings</mat-icon>\r\n\t\t\t\t\t\t  </button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div flex layout-gt-sm=\"row\" tdMediaToggle=\"gt-xs\" layout-wrap [mediaClasses]=\"['push-sm']\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div flex-gt-sm=\"50\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t\t\t\t\t  <mat-card-title>\r\n\t\t\t\t\t\t\t\t\t\t\t<div layout=\"row\" layout-align=\"start center\">\r\n\t\t\t\t\t\t\t\t\t\t\t  <span flex>Card title</span>\r\n\t\t\t\t\t\t\t\t\t\t\t  <span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-icon-button\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Card settings\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[mat-menu-trigger-for]=\"settings2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-menu xPosition=\"before\" #settings2=\"matMenu\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <button mat-menu-item> Settings </button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <button mat-menu-item> Remove </button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t  </mat-card-title>\r\n\t\t\t\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t\t\t  <div class=\"pad\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div [style.height.px]=\"250\">\r\n\t\t\t\t\t\t\t\t\t\t\t  <ngx-charts-bar-vertical-2d\r\n\t\t\t\t\t\t\t\t\t\t\t\t[scheme]=\"{ domain: [ '#4DD0E1', '#BA68C8', '#FF7043' ] }\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[results]=\"multi\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[barPadding]=\"18\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[groupPadding]=\"28\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[gradient]=\"true\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[xAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[yAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[legend]=\"false\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[showXAxisLabel]=\"false\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[showYAxisLabel]=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t  </ngx-charts-bar-vertical-2d>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t</mat-card>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div flex-gt-sm=\"50\">\r\n\t\t\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t\t  <mat-card-title>\r\n\t\t\t\t\t\t\t\t<div layout=\"row\" layout-align=\"start center\">\r\n\t\t\t\t\t\t\t\t  <span flex>Card title</span>\r\n\t\t\t\t\t\t\t\t  <span>\r\n\t\t\t\t\t\t\t\t\t<button mat-icon-button\r\n\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Card settings\"\r\n\t\t\t\t\t\t\t\t\t\t\t[mat-menu-trigger-for]=\"settings3\">\r\n\t\t\t\t\t\t\t\t\t  <mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<mat-menu xPosition=\"before\" #settings3=\"matMenu\">\r\n\t\t\t\t\t\t\t\t\t  <button mat-menu-item> Settings </button>\r\n\t\t\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t\t  <button mat-menu-item> Remove </button>\r\n\t\t\t\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </mat-card-title>\r\n\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t  <div class=\"pad-top pad-bottom\">\r\n\t\t\t\t\t\t\t\t<div class=\"overflow-hidden\" [style.height.px]=\"250\">\r\n\t\t\t\t\t\t\t\t  <div [style.height.px]=\"270\">\r\n\t\t\t\t\t\t\t\t\t<ngx-charts-area-chart-stacked\r\n\t\t\t\t\t\t\t\t\t  [scheme]=\"{ domain: [ '#4DD0E1', '#BA68C8', '#FF7043' ] }\"\r\n\t\t\t\t\t\t\t\t\t  [results]=\"times\"\r\n\t\t\t\t\t\t\t\t\t  [gradient]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [xAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [yAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [legend]=\"false\"\r\n\t\t\t\t\t\t\t\t\t  [showXAxisLabel]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [showYAxisLabel]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [xAxisLabel]=\"xAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t  [yAxisLabel]=\"yAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t  [xAxisTickFormatting]=\"axisDate\">\r\n\t\t\t\t\t\t\t\t\t</ngx-charts-area-chart-stacked>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</mat-card>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t  <div flex-gt-sm=\"50\">\r\n\t\t\t\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t\t\t  <mat-card-title>\r\n\t\t\t\t\t\t\t\t\t<div layout=\"row\" layout-align=\"start center\">\r\n\t\t\t\t\t\t\t\t\t  <span flex>Card title</span>\r\n\t\t\t\t\t\t\t\t\t  <span>\r\n\t\t\t\t\t\t\t\t\t\t<button mat-icon-button\r\n\t\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Card settings\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[mat-menu-trigger-for]=\"settings1\">\r\n\t\t\t\t\t\t\t\t\t\t  <mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<mat-menu xPosition=\"before\" #settings1=\"matMenu\">\r\n\t\t\t\t\t\t\t\t\t\t  <button mat-menu-item (click)=\"openTemplate()\"> Settings </button>\r\n\t\t\t\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t\t\t  <button mat-menu-item> Remove </button>\r\n\t\t\t\t\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </mat-card-title>\r\n\t\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t  <div [style.height.px]=\"280\" class=\"push-top-sm\">\r\n\t\t\t\t\t\t\t\t\t<ngx-charts-line-chart\r\n\t\t\t\t\t\t\t\t\t  [scheme]=\"{ domain: [ '#4DD0E1', '#BA68C8', '#FF7043' ] }\"\r\n\t\t\t\t\t\t\t\t\t  [results]=\"times\"\r\n\t\t\t\t\t\t\t\t\t  [gradient]=\"gradient\"\r\n\t\t\t\t\t\t\t\t\t  [autoScale]=\"false\"\r\n\t\t\t\t\t\t\t\t\t  [xAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [yAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [legend]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [showXAxisLabel]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [showYAxisLabel]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [xAxisLabel]=\"xAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t  [yAxisLabel]=\"yAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t  [xAxisTickFormatting]=\"axisDate\">\r\n\t\t\t\t\t\t\t\t\t</ngx-charts-line-chart>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</mat-card>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div flex-gt-sm=\"50\">\r\n\t\t\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t\t  <mat-card-title>\r\n\t\t\t\t\t\t\t\t<div layout=\"row\" layout-align=\"start center\">\r\n\t\t\t\t\t\t\t\t  <span flex>Card title</span>\r\n\t\t\t\t\t\t\t\t  <span>\r\n\t\t\t\t\t\t\t\t\t<button mat-icon-button\r\n\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Card settings\"\r\n\t\t\t\t\t\t\t\t\t\t\t[mat-menu-trigger-for]=\"settings4\">\r\n\t\t\t\t\t\t\t\t\t  <mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<mat-menu xPosition=\"before\" #settings4=\"matMenu\">\r\n\t\t\t\t\t\t\t\t\t  <button mat-menu-item> Settings </button>\r\n\t\t\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t\t  <button mat-menu-item> Remove </button>\r\n\t\t\t\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </mat-card-title>\r\n\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t  <td-data-table\r\n\t\t\t\t\t\t\t\t[data]=\"data\"\r\n\t\t\t\t\t\t\t\t[style.height.px]=\"290\">\r\n\t\t\t\t\t\t\t  </td-data-table>\r\n\t\t\t\t\t\t\t</mat-card>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\r\n\t\t\t\t\t\t\t  \r\n\r\n\t\t\t\t\t\t  <!-- <div flex-gt-sm=\"50\">\r\n\t\t\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t\t  <mat-card-title>\r\n\t\t\t\t\t\t\t\t<div layout=\"row\" layout-align=\"start center\">\r\n\t\t\t\t\t\t\t\t  <span flex>Card title</span>\r\n\t\t\t\t\t\t\t\t  <span>\r\n\t\t\t\t\t\t\t\t\t<button mat-icon-button\r\n\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Card settings\"\r\n\t\t\t\t\t\t\t\t\t\t\t[mat-menu-trigger-for]=\"settings5\">\r\n\t\t\t\t\t\t\t\t\t  <mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<mat-menu xPosition=\"before\" #settings5=\"matMenu\">\r\n\t\t\t\t\t\t\t\t\t\t<button mat-menu-item> Settings </button>\r\n\t\t\t\t\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t\t\t<button mat-menu-item> Remove </button>\r\n\t\t\t\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </mat-card-title> -->\r\n\t\t\t\t\t\t\t  <!-- <mat-divider></mat-divider> -->\r\n\t\t\t\t\t\t\t  <!-- <mat-nav-list>\r\n\t\t\t\t\t\t\t\t<a mat-list-item>\r\n\t\t\t\t\t\t\t\t  <mat-icon matListAvatar color=\"primary\">mood</mat-icon>\r\n\t\t\t\t\t\t\t\t  <h3 mat-line>Candy</h3>\r\n\t\t\t\t\t\t\t\t  <p mat-line>exceeding goal!</p>\r\n\t\t\t\t\t\t\t\t  <div flex=\"100\">\r\n\t\t\t\t\t\t\t\t\t<ngx-charts-linear-gauge\r\n\t\t\t\t\t\t\t\t\t  [scheme]=\"{ domain: [ '#4DD0E1' ] }\"\r\n\t\t\t\t\t\t\t\t\t  [value]=\"90\"\r\n\t\t\t\t\t\t\t\t\t  [previousValue]=\"80\"\r\n\t\t\t\t\t\t\t\t\t  [min]=\"0\"\r\n\t\t\t\t\t\t\t\t\t  [max]=\"100\"\r\n\t\t\t\t\t\t\t\t\t  [units]=\"'alerts'\">\r\n\t\t\t\t\t\t\t\t\t</ngx-charts-linear-gauge>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<mat-divider mat-inset></mat-divider>\r\n\t\t\t\t\t\t\t\t<a mat-list-item>\r\n\t\t\t\t\t\t\t\t  <mat-icon matListAvatar color=\"accent\">sentiment_satisfied</mat-icon>\r\n\t\t\t\t\t\t\t\t  <h3 mat-line>Ice Cream</h3>\r\n\t\t\t\t\t\t\t\t  <p mat-line>goal almost achieved!</p>\r\n\t\t\t\t\t\t\t\t  <div flex=\"100\">\r\n\t\t\t\t\t\t\t\t\t<ngx-charts-linear-gauge\r\n\t\t\t\t\t\t\t\t\t  [scheme]=\"{ domain: [ '#BA68C8' ] }\"\r\n\t\t\t\t\t\t\t\t\t  [value]=\"60\"\r\n\t\t\t\t\t\t\t\t\t  [previousValue]=\"70\"\r\n\t\t\t\t\t\t\t\t\t  [min]=\"0\"\r\n\t\t\t\t\t\t\t\t\t  [max]=\"100\"\r\n\t\t\t\t\t\t\t\t\t  [units]=\"'alerts'\">\r\n\t\t\t\t\t\t\t\t\t</ngx-charts-linear-gauge>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<mat-divider mat-inset></mat-divider>\r\n\t\t\t\t\t\t\t\t<a mat-list-item>\r\n\t\t\t\t\t\t\t\t  <mat-icon matListAvatar color=\"warn\">sentiment_very_dissatisfied</mat-icon>\r\n\t\t\t\t\t\t\t\t  <h3 mat-line>Pastry</h3>\r\n\t\t\t\t\t\t\t\t  <p mat-line>falling short of goal!</p>\r\n\t\t\t\t\t\t\t\t  <div flex=\"100\">\r\n\t\t\t\t\t\t\t\t\t<ngx-charts-linear-gauge\r\n\t\t\t\t\t\t\t\t\t  [scheme]=\"{ domain: [ '#FF7043' ] }\"\r\n\t\t\t\t\t\t\t\t\t  [value]=\"40\"\r\n\t\t\t\t\t\t\t\t\t  [previousValue]=\"60\"\r\n\t\t\t\t\t\t\t\t\t  [min]=\"0\"\r\n\t\t\t\t\t\t\t\t\t  [max]=\"100\"\r\n\t\t\t\t\t\t\t\t\t  [units]=\"'alerts'\">\r\n\t\t\t\t\t\t\t\t\t</ngx-charts-linear-gauge>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t  </mat-nav-list> -->\r\n\t\t\t\t\t\t\t<!-- </mat-card>\r\n\t\t\t\t\t\t  </div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </td-layout-nav>\r\n\t\t\t\t\t</mat-sidenav-container>\r\n\t\t\t\t  </td-layout-manage-list>\r\n\t\t\t\t  <td-layout-footer>\r\n\t\t\t\t\t<div layout=\"row\" layout-align=\"start center\">\r\n\t\t\t\t\t  <span class=\"mat-caption\">Made by Gracetechnologie</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </td-layout-footer>\r\n\t\t\t\t</td-layout-nav>\r\n\t\t\t  </td-layout>\r\n\t\t\t  \r\n\t\t\t  <ng-template #dialogContent let-dialogRef=\"dialogRef\">\r\n\t\t\t\t<div layout=\"column\" layout-fill>\r\n\t\t\t\t  <h2 mat-dialog-title>\r\n\t\t\t\t\tCard Settings\r\n\t\t\t\t  </h2>\r\n\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t  <mat-dialog-content flex>\r\n\t\t\t\t\t<form class=\"pad\">\r\n\t\t\t\t\t  <div layout=\"row\" layout-margin>\r\n\t\t\t\t\t\t<mat-form-field flex>\r\n\t\t\t\t\t\t  <input matInput placeholder=\"Card order\" value=\"1\" type=\"number\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<mat-form-field flex>\r\n\t\t\t\t\t\t  <input matInput placeholder=\"Card width\" value=\"100\" type=\"number\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t  </mat-dialog-content>\r\n\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t  <mat-dialog-actions align=\"end\">\r\n\t\t\t\t\t<button type=\"button\" mat-button class=\"text-upper\" (click)=\"dialogRef.close()\">Close</button>\r\n\t\t\t\t\t<button type=\"button\" mat-button color=\"accent\" class=\"text-upper\" (click)=\"dialogRef.close()\">Save</button>\r\n\t\t\t\t  </mat-dialog-actions>\r\n\t\t\t\t</div>\r\n\t\t\t  </ng-template>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t  <!-- <div flex layout-gt-sm=\"row\" tdMediaToggle=\"gt-xs\">\r\n\t\t\t\t<div flex-gt-sm=\"50\">\r\n\t\t\t\t  <mat-card>\r\n\t \r\n\t\t\t\t\t\r\n\t\t\t\t\t<div [style.height.px]=\"280\" class=\"push-top-sm\">\r\n\t\t\t\t\t  <ngx-charts-line-chart\r\n\t\t\t\t\t\t[scheme]=\"{ domain: [ '#4DD0E1', '#BA68C8', '#FF7043' ] }\"\r\n\t\t\t\t\t\t[results]=\"times\"\r\n\t\t\t\t\t\t[gradient]=\"gradient\"\r\n\t\t\t\t\t\t[autoScale]=\"false\"\r\n\t\t\t\t\t\t[xAxis]=\"true\"\r\n\t\t\t\t\t\t[yAxis]=\"true\"\r\n\t\t\t\t\t\t[legend]=\"true\"\r\n\t\t\t\t\t\t[showXAxisLabel]=\"true\"\r\n\t\t\t\t\t\t[showYAxisLabel]=\"true\"\r\n\t\t\t\t\t\t[xAxisLabel]=\"xAxisLabel\"\r\n\t\t\t\t\t\t[yAxisLabel]=\"yAxisLabel\"\r\n\t\t\t\t\t\t[xAxisTickFormatting]=\"axisDate\">\r\n\t\t\t\t\t  </ngx-charts-line-chart>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </mat-card>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div flex-gt-sm=\"50\">\r\n\t\t\t\t  <mat-card>\r\n\t\t\t\t \r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"pad\">\r\n\t\t\t\t\t  <div [style.height.px]=\"250\">\r\n\t\t\t\t\t\t<ngx-charts-bar-vertical-2d\r\n\t\t\t\t\t\t  [scheme]=\"{ domain: [ '#4DD0E1', '#BA68C8', '#FF7043' ] }\"\r\n\t\t\t\t\t\t  [results]=\"multi\"\r\n\t\t\t\t\t\t  [barPadding]=\"18\"\r\n\t\t\t\t\t\t  [groupPadding]=\"28\"\r\n\t\t\t\t\t\t  [gradient]=\"true\"\r\n\t\t\t\t\t\t  [xAxis]=\"true\"\r\n\t\t\t\t\t\t  [yAxis]=\"true\"\r\n\t\t\t\t\t\t  [legend]=\"false\"\r\n\t\t\t\t\t\t  [showXAxisLabel]=\"false\"\r\n\t\t\t\t\t\t  [showYAxisLabel]=\"false\">\r\n\t\t\t\t\t\t</ngx-charts-bar-vertical-2d>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </mat-card>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div flex-gt-sm=\"50\">\r\n\t\t\t\t  <mat-card>\r\n\t \r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"pad-top pad-bottom\">\r\n\t\t\t\t\t  <div class=\"overflow-hidden\" [style.height.px]=\"250\">\r\n\t\t\t\t\t\t<div [style.height.px]=\"270\">\r\n\t\t\t\t\t\t  <ngx-charts-area-chart-stacked\r\n\t\t\t\t\t\t\t[scheme]=\"{ domain: [ '#4DD0E1', '#BA68C8', '#FF7043' ] }\"\r\n\t\t\t\t\t\t\t[results]=\"times\"\r\n\t\t\t\t\t\t\t[gradient]=\"true\"\r\n\t\t\t\t\t\t\t[xAxis]=\"true\"\r\n\t\t\t\t\t\t\t[yAxis]=\"true\"\r\n\t\t\t\t\t\t\t[legend]=\"false\"\r\n\t\t\t\t\t\t\t[showXAxisLabel]=\"true\"\r\n\t\t\t\t\t\t\t[showYAxisLabel]=\"true\"\r\n\t\t\t\t\t\t\t[xAxisLabel]=\"xAxisLabel\"\r\n\t\t\t\t\t\t\t[yAxisLabel]=\"yAxisLabel\"\r\n\t\t\t\t\t\t\t[xAxisTickFormatting]=\"axisDate\">\r\n\t\t\t\t\t\t  </ngx-charts-area-chart-stacked>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </mat-card>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div flex-gt-sm=\"50\">\r\n\t\t\t\t  <mat-card>\r\n  -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- <td-data-table\r\n\t\t\t\t\t  [data]=\"data\"\r\n\t\t\t\t\t  [style.height.px]=\"290\">\r\n\t\t\t\t\t</td-data-table> -->\r\n\t\t\t\t  <!-- </mat-card>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t\r\n\t\t\t\t<!-- <td-layout-nav color=\"none\">\r\n\t\t\t\t\t\t<div td-toolbar-content flex layout=\"row\" layout-align=\"start center\">\r\n\t\t\t\t\t\t  <button mat-icon-button tdLayoutManageListToggle>\r\n\t\t\t\t\t\t\t<mat-icon>menu</mat-icon>\r\n\t\t\t\t\t\t  </button>\r\n\t\t\t\t\t\t  <span hide-xs>Dashboard 1</span>\r\n\t\t\t\t\t\t  <span flex></span>\r\n\t\t\t\t\t\t  <span [style.width.px]=\"100\" layout=\"row\" class=\"push-left-sm push-right mat-body-1\">\r\n\t\t\t\t\t\t\t<mat-form-field floatPlaceholder=\"never\" flex>\r\n\t\t\t\t\t\t\t  <input matInput [max]=\"maxFromDate\" readonly [(ngModel)]=\"dateFrom\" [matDatepicker]=\"pickerFrom\">\r\n\t\t\t\t\t\t\t  <mat-datepicker-toggle matSuffix matTooltip=\"Start date\" [for]=\"pickerFrom\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  <mat-datepicker #pickerFrom [startAt]=\"dateFrom\"></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t  <span hide-xs class=\"mat-body-2 push-right\"> to </span>\r\n\t\t\t\t\t\t  <span [style.width.px]=\"100\" layout=\"row\" class=\"mat-body-1\">\r\n\t\t\t\t\t\t\t<mat-form-field floatPlaceholder=\"never\" flex>\r\n\t\t\t\t\t\t\t  <input matInput [max]=\"maxToDate\" readonly [(ngModel)]=\"dateTo\" [matDatepicker]=\"pickerTo\">\r\n\t\t\t\t\t\t\t  <mat-datepicker-toggle matSuffix matTooltip=\"End date\" [for]=\"pickerTo\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  <mat-datepicker #pickerTo [startAt]=\"dateTo\"></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t  <button matTooltip=\"Dashboard Settings\" matTooltipPosition=\"before\" type=\"button\" mat-icon-button (click)=\"sidenav.open()\">\r\n\t\t\t\t\t\t\t<mat-icon>settings</mat-icon>\r\n\t\t\t\t\t\t  </button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div flex layout-gt-sm=\"row\" tdMediaToggle=\"gt-xs\">\r\n\t\t\t\t\t\t  <div flex-gt-sm=\"50\">\r\n\t\t\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t\t  <mat-card-title>\r\n\t\t\t\t\t\t\t\t<div layout=\"row\" layout-align=\"start center\">\r\n\t\t\t\t\t\t\t\t  <span flex>Card title</span>\r\n\t\t\t\t\t\t\t\t  <span>\r\n\t\t\t\t\t\t\t\t\t<button mat-icon-button\r\n\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Card settings\"\r\n\t\t\t\t\t\t\t\t\t\t\t[mat-menu-trigger-for]=\"settings1\">\r\n\t\t\t\t\t\t\t\t\t  <mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<mat-menu xPosition=\"before\" #settings1=\"matMenu\">\r\n\t\t\t\t\t\t\t\t\t  <button mat-menu-item (click)=\"openTemplate()\"> Settings </button>\r\n\t\t\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t\t  <button mat-menu-item> Remove </button>\r\n\t\t\t\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </mat-card-title>\r\n\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t  <div [style.height.px]=\"280\" class=\"push-top-sm\">\r\n\t\t\t\t\t\t\t\t<ngx-charts-line-chart\r\n\t\t\t\t\t\t\t\t  [scheme]=\"{ domain: [ '#4DD0E1', '#BA68C8', '#FF7043' ] }\"\r\n\t\t\t\t\t\t\t\t  [results]=\"times\"\r\n\t\t\t\t\t\t\t\t  [gradient]=\"gradient\"\r\n\t\t\t\t\t\t\t\t  [autoScale]=\"false\"\r\n\t\t\t\t\t\t\t\t  [xAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t  [yAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t  [legend]=\"true\"\r\n\t\t\t\t\t\t\t\t  [showXAxisLabel]=\"true\"\r\n\t\t\t\t\t\t\t\t  [showYAxisLabel]=\"true\"\r\n\t\t\t\t\t\t\t\t  [xAxisLabel]=\"xAxisLabel\"\r\n\t\t\t\t\t\t\t\t  [yAxisLabel]=\"yAxisLabel\"\r\n\t\t\t\t\t\t\t\t  [xAxisTickFormatting]=\"axisDate\">\r\n\t\t\t\t\t\t\t\t</ngx-charts-line-chart>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</mat-card>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div flex-gt-sm=\"50\">\r\n\t\t\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t\t  <mat-card-title>\r\n\t\t\t\t\t\t\t\t<div layout=\"row\" layout-align=\"start center\">\r\n\t\t\t\t\t\t\t\t  <span flex>Card title</span>\r\n\t\t\t\t\t\t\t\t  <span>\r\n\t\t\t\t\t\t\t\t\t<button mat-icon-button\r\n\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Card settings\"\r\n\t\t\t\t\t\t\t\t\t\t\t[mat-menu-trigger-for]=\"settings2\">\r\n\t\t\t\t\t\t\t\t\t  <mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<mat-menu xPosition=\"before\" #settings2=\"matMenu\">\r\n\t\t\t\t\t\t\t\t\t  <button mat-menu-item> Settings </button>\r\n\t\t\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t\t  <button mat-menu-item> Remove </button>\r\n\t\t\t\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </mat-card-title>\r\n\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t  <div class=\"pad\">\r\n\t\t\t\t\t\t\t\t<div [style.height.px]=\"250\">\r\n\t\t\t\t\t\t\t\t  <ngx-charts-bar-vertical-2d\r\n\t\t\t\t\t\t\t\t\t[scheme]=\"{ domain: [ '#4DD0E1', '#BA68C8', '#FF7043' ] }\"\r\n\t\t\t\t\t\t\t\t\t[results]=\"multi\"\r\n\t\t\t\t\t\t\t\t\t[barPadding]=\"18\"\r\n\t\t\t\t\t\t\t\t\t[groupPadding]=\"28\"\r\n\t\t\t\t\t\t\t\t\t[gradient]=\"true\"\r\n\t\t\t\t\t\t\t\t\t[xAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t\t[yAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t\t[legend]=\"false\"\r\n\t\t\t\t\t\t\t\t\t[showXAxisLabel]=\"false\"\r\n\t\t\t\t\t\t\t\t\t[showYAxisLabel]=\"false\">\r\n\t\t\t\t\t\t\t\t  </ngx-charts-bar-vertical-2d>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</mat-card>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div flex-gt-sm=\"50\">\r\n\t\t\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t\t  <mat-card-title>\r\n\t\t\t\t\t\t\t\t<div layout=\"row\" layout-align=\"start center\">\r\n\t\t\t\t\t\t\t\t  <span flex>Card title</span>\r\n\t\t\t\t\t\t\t\t  <span>\r\n\t\t\t\t\t\t\t\t\t<button mat-icon-button\r\n\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Card settings\"\r\n\t\t\t\t\t\t\t\t\t\t\t[mat-menu-trigger-for]=\"settings3\">\r\n\t\t\t\t\t\t\t\t\t  <mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<mat-menu xPosition=\"before\" #settings3=\"matMenu\">\r\n\t\t\t\t\t\t\t\t\t  <button mat-menu-item> Settings </button>\r\n\t\t\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t\t  <button mat-menu-item> Remove </button>\r\n\t\t\t\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </mat-card-title>\r\n\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t  <div class=\"pad-top pad-bottom\">\r\n\t\t\t\t\t\t\t\t<div class=\"overflow-hidden\" [style.height.px]=\"250\">\r\n\t\t\t\t\t\t\t\t  <div [style.height.px]=\"270\">\r\n\t\t\t\t\t\t\t\t\t<ngx-charts-area-chart-stacked\r\n\t\t\t\t\t\t\t\t\t  [scheme]=\"{ domain: [ '#4DD0E1', '#BA68C8', '#FF7043' ] }\"\r\n\t\t\t\t\t\t\t\t\t  [results]=\"times\"\r\n\t\t\t\t\t\t\t\t\t  [gradient]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [xAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [yAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [legend]=\"false\"\r\n\t\t\t\t\t\t\t\t\t  [showXAxisLabel]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [showYAxisLabel]=\"true\"\r\n\t\t\t\t\t\t\t\t\t  [xAxisLabel]=\"xAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t  [yAxisLabel]=\"yAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t  [xAxisTickFormatting]=\"axisDate\">\r\n\t\t\t\t\t\t\t\t\t</ngx-charts-area-chart-stacked>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</mat-card>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div flex-gt-sm=\"50\">\r\n\t\t\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t\t  <mat-card-title>\r\n\t\t\t\t\t\t\t\t<div layout=\"row\" layout-align=\"start center\">\r\n\t\t\t\t\t\t\t\t  <span flex>Card title</span>\r\n\t\t\t\t\t\t\t\t  <span>\r\n\t\t\t\t\t\t\t\t\t<button mat-icon-button\r\n\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Card settings\"\r\n\t\t\t\t\t\t\t\t\t\t\t[mat-menu-trigger-for]=\"settings4\">\r\n\t\t\t\t\t\t\t\t\t  <mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<mat-menu xPosition=\"before\" #settings4=\"matMenu\">\r\n\t\t\t\t\t\t\t\t\t  <button mat-menu-item> Settings </button>\r\n\t\t\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t\t  <button mat-menu-item> Remove </button>\r\n\t\t\t\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </mat-card-title>\r\n\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t  <td-data-table\r\n\t\t\t\t\t\t\t\t[data]=\"data\"\r\n\t\t\t\t\t\t\t\t[style.height.px]=\"290\">\r\n\t\t\t\t\t\t\t  </td-data-table>\r\n\t\t\t\t\t\t\t</mat-card>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div flex-gt-sm=\"50\">\r\n\t\t\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t\t  <mat-card-title>\r\n\t\t\t\t\t\t\t\t<div layout=\"row\" layout-align=\"start center\">\r\n\t\t\t\t\t\t\t\t  <span flex>Card title</span>\r\n\t\t\t\t\t\t\t\t  <span>\r\n\t\t\t\t\t\t\t\t\t<button mat-icon-button\r\n\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Card settings\"\r\n\t\t\t\t\t\t\t\t\t\t\t[mat-menu-trigger-for]=\"settings5\">\r\n\t\t\t\t\t\t\t\t\t  <mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<mat-menu xPosition=\"before\" #settings5=\"matMenu\">\r\n\t\t\t\t\t\t\t\t\t\t<button mat-menu-item> Settings </button>\r\n\t\t\t\t\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t\t\t<button mat-menu-item> Remove </button>\r\n\t\t\t\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </mat-card-title>\r\n\t\t\t\t\t\t\t  <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t  <mat-nav-list>\r\n\t\t\t\t\t\t\t\t<a mat-list-item>\r\n\t\t\t\t\t\t\t\t  <mat-icon matListAvatar color=\"primary\">mood</mat-icon>\r\n\t\t\t\t\t\t\t\t  <h3 mat-line>Candy</h3>\r\n\t\t\t\t\t\t\t\t  <p mat-line>exceeding goal!</p>\r\n\t\t\t\t\t\t\t\t  <div flex=\"100\">\r\n\t\t\t\t\t\t\t\t\t<ngx-charts-linear-gauge\r\n\t\t\t\t\t\t\t\t\t  [scheme]=\"{ domain: [ '#4DD0E1' ] }\"\r\n\t\t\t\t\t\t\t\t\t  [value]=\"90\"\r\n\t\t\t\t\t\t\t\t\t  [previousValue]=\"80\"\r\n\t\t\t\t\t\t\t\t\t  [min]=\"0\"\r\n\t\t\t\t\t\t\t\t\t  [max]=\"100\"\r\n\t\t\t\t\t\t\t\t\t  [units]=\"'alerts'\">\r\n\t\t\t\t\t\t\t\t\t</ngx-charts-linear-gauge>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<mat-divider mat-inset></mat-divider>\r\n\t\t\t\t\t\t\t\t<a mat-list-item>\r\n\t\t\t\t\t\t\t\t  <mat-icon matListAvatar color=\"accent\">sentiment_satisfied</mat-icon>\r\n\t\t\t\t\t\t\t\t  <h3 mat-line>Ice Cream</h3>\r\n\t\t\t\t\t\t\t\t  <p mat-line>goal almost achieved!</p>\r\n\t\t\t\t\t\t\t\t  <div flex=\"100\">\r\n\t\t\t\t\t\t\t\t\t<ngx-charts-linear-gauge\r\n\t\t\t\t\t\t\t\t\t  [scheme]=\"{ domain: [ '#BA68C8' ] }\"\r\n\t\t\t\t\t\t\t\t\t  [value]=\"60\"\r\n\t\t\t\t\t\t\t\t\t  [previousValue]=\"70\"\r\n\t\t\t\t\t\t\t\t\t  [min]=\"0\"\r\n\t\t\t\t\t\t\t\t\t  [max]=\"100\"\r\n\t\t\t\t\t\t\t\t\t  [units]=\"'alerts'\">\r\n\t\t\t\t\t\t\t\t\t</ngx-charts-linear-gauge>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<mat-divider mat-inset></mat-divider>\r\n\t\t\t\t\t\t\t\t<a mat-list-item>\r\n\t\t\t\t\t\t\t\t  <mat-icon matListAvatar color=\"warn\">sentiment_very_dissatisfied</mat-icon>\r\n\t\t\t\t\t\t\t\t  <h3 mat-line>Pastry</h3>\r\n\t\t\t\t\t\t\t\t  <p mat-line>falling short of goal!</p>\r\n\t\t\t\t\t\t\t\t  <div flex=\"100\">\r\n\t\t\t\t\t\t\t\t\t<ngx-charts-linear-gauge\r\n\t\t\t\t\t\t\t\t\t  [scheme]=\"{ domain: [ '#FF7043' ] }\"\r\n\t\t\t\t\t\t\t\t\t  [value]=\"40\"\r\n\t\t\t\t\t\t\t\t\t  [previousValue]=\"60\"\r\n\t\t\t\t\t\t\t\t\t  [min]=\"0\"\r\n\t\t\t\t\t\t\t\t\t  [max]=\"100\"\r\n\t\t\t\t\t\t\t\t\t  [units]=\"'alerts'\">\r\n\t\t\t\t\t\t\t\t\t</ngx-charts-linear-gauge>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t  </mat-nav-list>\r\n\t\t\t\t\t\t\t</mat-card>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </td-layout-nav> -->\r\n\t\t\t  <!-- </div> -->\r\n\t\t  <!-- <gridster [options]=\"options\">\r\n\t\t\t\t<gridster-item [item]=\"item\" *ngFor=\"let item of dashboard\">\r\n\t\t\t\t\t\t<ngx-charts-pie-chart\r\n\t\t\t\t\t\t\t\t\t[view]=\"view\"\r\n\t\t\t\t\t\t\t\t\t[scheme]=\"colorScheme\"\r\n\t\t\t\t\t\t\t\t\t[results]=\"single\"\r\n\t\t\t\t\t\t\t\t\t[legend]=\"showLegend\"\r\n\t\t\t\t\t\t\t\t\t[explodeSlices]=\"explodeSlices\"\r\n\t\t\t\t\t\t\t\t\t[labels]=\"showLabels\"\r\n\t\t\t\t\t\t\t\t\t[doughnut]=\"doughnut\"\r\n\t\t\t\t\t\t\t\t\t[gradient]=\"gradient\"\r\n\t\t\t\t\t\t\t\t\t(select)=\"onSelect($event)\">\r\n\t\t\t\t\t\t\t\t  </ngx-charts-pie-chart>\r\n\t\t\t\t</gridster-item>\r\n\t\t\t  </gridster> -->\r\n <!-- <div class=\"row\">\r\n\t\t\t  <div class=\"col-xl-6\">\r\n\t\t\t\t\t<div class=\"row row-full-height\"> -->\r\n\t\t\t\t\t\t\t<!-- <div>\r\n\t\t\t\t\t\t\t\t\t<ngx-charts-pie-chart\r\n\t\t\t\t\t\t\t\t\t[view]=\"view\"\r\n\t\t\t\t\t\t\t\t\t[scheme]=\"colorScheme\"\r\n\t\t\t\t\t\t\t\t\t[results]=\"single\"\r\n\t\t\t\t\t\t\t\t\t[legend]=\"showLegend\"\r\n\t\t\t\t\t\t\t\t\t[explodeSlices]=\"explodeSlices\"\r\n\t\t\t\t\t\t\t\t\t[labels]=\"showLabels\"\r\n\t\t\t\t\t\t\t\t\t[doughnut]=\"doughnut\"\r\n\t\t\t\t\t\t\t\t\t[gradient]=\"gradient\"\r\n\t\t\t\t\t\t\t\t\t(select)=\"onSelect($event)\">\r\n\t\t\t\t\t\t\t\t  </ngx-charts-pie-chart>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div> This is a visual representation of a pie chart</div>\r\n\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t  <div>\r\n\t\t\t\t\t\t\t\t\t<ngx-charts-number-card\r\n\t\t\t\t\t\t\t\t\t[view]=\"view\"\r\n\t\t\t\t\t\t\t\t\t[scheme]=\"colorScheme\"\r\n\t\t\t\t\t\t\t\t\t[results]=\"single\"\r\n\t\t\t\t\t\t\t\t\t(select)=\"onSelect($event)\">\r\n\t\t\t\t\t\t\t\t\t</ngx-charts-number-card>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<ngx-charts-bar-vertical-2d\r\n\t\t\t\t\t\t\t\t\t[view]=\"view\"\r\n\t\t\t\t\t\t\t\t\t[scheme]=\"colorScheme\"\r\n\t\t\t\t\t\t\t\t\t[results]=\"multi\"\r\n\t\t\t\t\t\t\t\t\t[gradient]=\"gradient\"\r\n\t\t\t\t\t\t\t\t\t[xAxis]=\"showXAxis\"\r\n\t\t\t\t\t\t\t\t\t[yAxis]=\"showYAxis\"\r\n\t\t\t\t\t\t\t\t\t[legend]=\"showLegend\"\r\n\t\t\t\t\t\t\t\t\t[showXAxisLabel]=\"showXAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t[showYAxisLabel]=\"showYAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t[xAxisLabel]=\"xAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t[yAxisLabel]=\"yAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t[animations]=\"animations\"\r\n\t\t\t\t\t\t\t\t\t(select)=\"onSelect($event)\">\r\n\t\t\t\t\t\t\t\t\t </ngx-charts-bar-vertical-2d>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t  <ngx-charts-bar-vertical-2d\r\n\t\t\t\t\t\t\t\t\t[view]=\"view\"\r\n\t\t\t\t\t\t\t\t\t[scheme]=\"colorScheme\"\r\n\t\t\t\t\t\t\t\t\t[results]=\"multi\"\r\n\t\t\t\t\t\t\t\t\t[gradient]=\"gradient\"\r\n\t\t\t\t\t\t\t\t\t[xAxis]=\"showXAxis\"\r\n\t\t\t\t\t\t\t\t\t[yAxis]=\"showYAxis\"\r\n\t\t\t\t\t\t\t\t\t[legend]=\"showLegend\"\r\n\t\t\t\t\t\t\t\t\t[showXAxisLabel]=\"showXAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t[showYAxisLabel]=\"showYAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t[xAxisLabel]=\"xAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t[yAxisLabel]=\"yAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t[animations]=\"animations\"\r\n\t\t\t\t\t\t\t\t\t(select)=\"onSelect($event)\">\r\n\t\t\t\t\t\t\t\t\t </ngx-charts-bar-vertical-2d>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div> This is a visual representation of a line chart</div>\r\n\t\t\t\t\t\t\t  <div>\r\n\t\t\t\t\t\t\t\t  <ngx-charts-pie-chart\r\n\t\t\t\t\t\t\t\t  [view]=\"view\"\r\n\t\t\t\t\t\t\t\t  [scheme]=\"colorScheme\"\r\n\t\t\t\t\t\t\t\t  [results]=\"single\"\r\n\t\t\t\t\t\t\t\t  [legend]=\"showLegend\"\r\n\t\t\t\t\t\t\t\t  [explodeSlices]=\"explodeSlices\"\r\n\t\t\t\t\t\t\t\t  [labels]=\"showLabels\"\r\n\t\t\t\t\t\t\t\t  [doughnut]=\"doughnut\"\r\n\t\t\t\t\t\t\t\t  [gradient]=\"gradient\"\r\n\t\t\t\t\t\t\t\t  (select)=\"onSelect($event)\">\r\n\t\t\t\t\t\t\t\t</ngx-charts-pie-chart>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t  <div> This is a visual representation of a area chart</div>\r\n\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t\t  <div >\r\n\t\t\t\t\t\t\t\t\t\t  <ngx-charts-area-chart\r\n\t\t\t\t\t\t\t\t\t\t  [view]=\"view\"\r\n\t\t\t\t\t\t\t\t\t\t  [scheme]=\"colorScheme\"\r\n\t\t\t\t\t\t\t\t\t\t  [results]=\"multi\"\r\n\t\t\t\t\t\t\t\t\t\t  [gradient]=\"gradient\"\r\n\t\t\t\t\t\t\t\t\t\t  [xAxis]=\"showXAxis\"\r\n\t\t\t\t\t\t\t\t\t\t  [yAxis]=\"showYAxis\"\r\n\t\t\t\t\t\t\t\t\t\t  [legend]=\"showLegend\"\r\n\t\t\t\t\t\t\t\t\t\t  [showXAxisLabel]=\"showXAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t\t  [showYAxisLabel]=\"showYAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t\t  [xAxisLabel]=\"xAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t\t  [yAxisLabel]=\"yAxisLabel\"\r\n\t\t\t\t\t\t\t\t\t\t  [autoScale]=\"autoScale\"\r\n\t\t\t\t\t\t\t\t\t\t  (select)=\"onSelect($event)\">\r\n\t\t\t\t\t\t\t\t\t\t  </ngx-charts-area-chart>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t  <div> This is a visual representation of a pie chart</div> -->\r\n\t\t\t\t\t\t\t\t  \r\n\t\t  <!-- <div *ngFor=\"let companie of companies\"class=\"col-sm-12 col-md-12 col-lg-4\">\r\n\t\t\t\t\r\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet'\">\r\n\t\t\t  \r\n\t\t\t\t  <kt-portlet-header>\r\n\t\t\t\t  \r\n\t\t\t\t  <ng-container ktPortletTools>\r\n\t\t\t\t\t<p> {{companie.company_title}}</p>\r\n\t\t\t\t  <kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t  \r\n\t\t\t\t  </ng-container>\r\n\t\t\t\t  </kt-portlet-header>\r\n\t\t\t\t  <kt-portlet-body (click)=\"modules(companie.id)\">\r\n\t\t\t\t  <ul class=\"navbar-nav ml-auto\">\r\n\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"kt-widget12__desc\" routerLink=\"/demo2/kt-mesmodules\">{{companie.short_name}}<span class=\"sr-only\">(current)</span></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t  </ul>\r\n\t\t\t\t  <kt-compagnie></kt-compagnie>\r\n\t\t\t\t  </kt-portlet-body>\r\n\t\t\t\t   -->\r\n\t\t\t\t  <!-- <div class=\"example-button-row\" style=\"text-align: center\">\r\n\t\t\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t\t\t<span *ngIf=\"closeResult\" class=\"kt-section__sub\">\r\n\t\t\t\t\t\t  <pre>{{closeResult}}</pre>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t\t\t  <div class=\"modal-header\">\r\n\t\t\t\t\t\t\t<h4 class=\"modal-title\">Supprimer une compagnie</h4>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"modal-body\">\r\n\t\t\t\t\t\t\t<p>Voulez-vous vraiment Supprimer</p>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"modal-footer\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Annulez</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"DeleteConfirm(companie.id)\">Ok</button>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  </ng-template>\r\n\t\t\t\t\t\t  <button class=\"btn btn-primary\" (click)=\"UpdateCompanyButton(companie)\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">\r\n\t\t\t\t\t\t\t\tcreate\t\r\n\t\t\t\t\t\t\t\t</i>Modifier</button>\r\n\t\t\t\t\t\t  <button class=\"btn btn-light\" (click)=\"DeleteCompanyButton(content,companie.id)\">\r\n\t\t\t\t\t\t  <i class=\"material-icons\">\r\n\t\t\t\t\t\t\tdelete_sweep\r\n\t\t\t\t\t\t\t  </i>Supprimer</button>\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t  </div> -->\r\n\t\t\t\t  <!-- </kt-portlet>\r\n\t\t\t\t</div>  -->\r\n\t\t "

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: white;\n  background-clip: border-box;\n  border: 0 solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.125rem; }\n\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px; }\n\ngridster {\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  background-color: #6788BF; }\n\n.mat-icon.mat-icon-logo {\n  position: relative;\n  top: -4px; }\n\n.td-search-box .td-search-icon.mat-icon-button {\n  margin: 0;\n  height: 30px; }\n\n.td-search-box .td-search-icon.mat-icon-button .mat-icon {\n    margin-top: -10px; }\n\n.td-search-box td-search-input {\n  margin-left: 0 !important;\n  margin-bottom: 5px; }\n\n.td-search-box td-search-input .mat-form-field {\n    width: auto; }\n\n.td-search-box td-search-input .mat-form-field-wrapper {\n    padding-bottom: 0; }\n\n.td-search-box td-search-input .mat-input-infix {\n    padding: 0; }\n\n.td-search-box td-search-input .mat-form-field-infix {\n    border-top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG93bmxvYWRzL0pJQkFZQS1QUk9KRUNULW1hc3RlciAyL3NyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdHLGFBQWEsRUFBQTs7QUFJaEI7RUFDQyxrQkFBa0I7RUFHZixhQUFhO0VBSWIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFDcEMsdUJBQXVCLEVBQUE7O0FBRTNCOztFQUVFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtFQUNWLHlCQUNGLEVBQUE7O0FBRUE7RUFFSSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFBOztBQUtiO0VBRUUsU0FBUztFQUNULFlBQVksRUFBQTs7QUFIZDtJQUtJLGlCQUFpQixFQUFBOztBQUxyQjtFQVNFLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFWcEI7SUFZSSxXQUFXLEVBQUE7O0FBWmY7SUFlSSxpQkFBaUIsRUFBQTs7QUFmckI7SUFrQkksVUFBVSxFQUFBOztBQWxCZDtJQXFCSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdDo6bmctZGVlcCB7XHJcblx0XHRuZ2ItdGFic2V0ID4gLm5hdi10YWJzIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLmNhcmR7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAwIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XHJcbn1cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbmdyaWRzdGVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzY3ODhCRlxyXG59XHJcbi8vIEFkanVzdCB5b3VyIGxvZ28gcG9zaXRpb25cclxuLm1hdC1pY29uIHtcclxuICAmLm1hdC1pY29uLWxvZ28ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gSGFjayBmb3Igc21hbGwgc2VhcmNoIGJveFxyXG4udGQtc2VhcmNoLWJveCB7XHJcbi50ZC1zZWFyY2gtaWNvbi5tYXQtaWNvbi1idXR0b24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgLm1hdC1pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxufVxyXG50ZC1zZWFyY2gtaW5wdXQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5tYXQtaW5wdXQtaW5maXgge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgIGJvcmRlci10b3A6IDA7XHJcbiAgfVxyXG59XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************/
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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
// import { DialogData } from '../../partials/layout/subheader/subheader1/subheader1.component';
var companies_service_1 = __webpack_require__(/*! ../../partials/content/widgets/shared/companies.service */ "./src/app/views/partials/content/widgets/shared/companies.service.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var data_1 = __webpack_require__(/*! ./data */ "./src/app/views/pages/dashboard/data.ts");
var core_2 = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(media, dialog, _changeDetectorRef, datePipe, snackBar, router, modalService, companiesrestApi) {
        this.media = media;
        this.dialog = dialog;
        this._changeDetectorRef = _changeDetectorRef;
        this.datePipe = datePipe;
        this.snackBar = snackBar;
        this.router = router;
        this.modalService = modalService;
        this.companiesrestApi = companiesrestApi;
        // data goes here
        this.name = 'UI Platform';
        this.dateFrom = new Date(new Date().getTime() - (2 * 60 * 60 * 24 * 1000));
        this.dateTo = new Date(new Date().getTime() - (1 * 60 * 60 * 24 * 1000));
        this.config = {
            width: '50%',
            height: '50%',
        };
        this.routes = [{
                title: 'Dashboards',
                route: '/',
                icon: 'dashboard',
            }, {
                title: 'Reports',
                route: '/',
                icon: 'insert_chart',
            }, {
                title: 'Sales',
                route: '/',
                icon: 'account_balance',
            }, {
                title: 'Marketplace',
                route: '/',
                icon: 'store',
            },
        ];
        this.usermenu = [{
                title: 'Profile',
                route: '/',
                icon: 'account_box',
            }, {
                title: 'Settings',
                route: '/',
                icon: 'settings',
            },
        ];
        this.data = [
            {
                'name': 'Frozen yogurt',
                'type': 'Ice cream',
                'calories': 159.0,
                'fat': 6.0,
                'carbs': 24.0,
                'protein': 4.0,
            }, {
                'name': 'Ice cream sandwich',
                'type': 'Ice cream',
                'calories': 237.0,
                'fat': 9.0,
                'carbs': 37.0,
                'protein': 4.3,
            }, {
                'name': 'Eclair',
                'type': 'Pastry',
                'calories': 262.0,
                'fat': 16.0,
                'carbs': 24.0,
                'protein': 6.0,
            }, {
                'name': 'Cupcake',
                'type': 'Pastry',
                'calories': 305.0,
                'fat': 3.7,
                'carbs': 67.0,
                'protein': 4.3,
            }, {
                'name': 'Jelly bean',
                'type': 'Candy',
                'calories': 375.0,
                'fat': 0.0,
                'carbs': 94.0,
                'protein': 0.0,
            }, {
                'name': 'Lollipop',
                'type': 'Candy',
                'calories': 392.0,
                'fat': 0.2,
                'carbs': 98.0,
                'protein': 0.0,
            }, {
                'name': 'Honeycomb',
                'type': 'Other',
                'calories': 408.0,
                'fat': 3.2,
                'carbs': 87.0,
                'protein': 6.5,
            }, {
                'name': 'Donut',
                'type': 'Pastry',
                'calories': 452.0,
                'fat': 25.0,
                'carbs': 51.0,
                'protein': 4.9,
            }, {
                'name': 'KitKat',
                'type': 'Candy',
                'calories': 518.0,
                'fat': 26.0,
                'carbs': 65.0,
                'protein': 7.0,
            }, {
                'name': 'Chocolate',
                'type': 'Candy',
                'calories': 518.0,
                'fat': 26.0,
                'carbs': 65.0,
                'protein': 7.0,
            }, {
                'name': 'Chamoy',
                'type': 'Candy',
                'calories': 518.0,
                'fat': 26.0,
                'carbs': 65.0,
                'protein': 7.0,
            },
        ];
        this.miniNav = false;
        // public single = [
        //   {
        //     "name": "Germany",
        //     "value": 8940000
        //   },
        //   {
        //     "name": "USA",
        //     "value": 5000000
        //   },
        //   {
        //     "name": "France",
        //     "value": 7200000
        //   }
        // ];
        // public multi = [
        //   {
        //     "name": "Germany",
        //     "series": [
        //       {
        //         "name": "2010",
        //         "value": 7300000
        //       },
        //       {
        //         "name": "2011",
        //         "value": 8940000
        //       }
        //     ]
        //   },
        //   {
        //     "name": "USA",
        //     "series": [
        //       {
        //         "name": "2010",
        //         "value": 7870000
        //       },
        //       {
        //         "name": "2011",
        //         "value": 8270000
        //       }
        //     ]
        //   },
        //   {
        //     "name": "France",
        //     "series": [
        //       {
        //         "name": "2010",
        //         "value": 5000002
        //       },
        //       {
        //         "name": "2011",
        //         "value": 5800000
        //       }
        //     ]
        //   }
        // ];
        this.view = [500, 200];
        // options for the chart
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Number';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Value';
        this.timeline = true;
        this.cardColor = 'string';
        this.bandColor = 'string';
        this.textColor = 'string';
        this.emptyColor = 'string';
        this.innerPadding = 'Number';
        this.animations = true;
        this.colorScheme = {
            domain: ['#A8385C', '#6788BF', '#ADCCED', '#A95963']
        };
        // line, area
        this.autoScale = true;
        //pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.cityOptions = [];
        this.juridical_form = [
            { value: '1', viewValue: 'SARL' },
            { value: '2', viewValue: 'SA' },
            { value: '3', viewValue: 'SNC' }
        ];
        this.companies = [];
        Object.assign(this, { pie: data_1.pie, single: data_1.single, multi: data_1.multi, times: data_1.times });
    }
    DashboardComponent_1 = DashboardComponent;
    DashboardComponent.itemChange = function (item, itemComponent) {
        console.info('itemChanged', item, itemComponent);
    };
    DashboardComponent.itemResize = function (item, itemComponent) {
        console.info('itemResized', item, itemComponent);
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        // broadcast to all listener observables when loading the page
        this.media.broadcast();
        this._changeDetectorRef.detectChanges();
    };
    DashboardComponent.prototype.toggleMiniNav = function () {
        var _this = this;
        this.miniNav = !this.miniNav;
        setTimeout(function () {
            _this.manageList.sidenav._animationStarted;
        });
    };
    DashboardComponent.prototype.openTemplate = function () {
        this.dialog.open(this.template, this.config);
    };
    // NGX Charts Axis
    DashboardComponent.prototype.axisDigits = function (val) {
        return new core_2.TdDigitsPipe().transform(val);
    };
    DashboardComponent.prototype.axisDate = function (val) {
        return new common_1.DatePipe('en').transform(val, 'hh a');
    };
    DashboardComponent.prototype.changedOptions = function () {
        this.options.api.optionsChanged();
    };
    DashboardComponent.prototype.removeItem = function (item) {
        this.dashboard.splice(this.dashboard.indexOf(item), 1);
    };
    DashboardComponent.prototype.compagnielist = function () {
        this.router.navigate(['/demo2/kt-company-list']);
    };
    DashboardComponent.prototype.addItem = function () {
        this.dashboard.push();
    };
    DashboardComponent.prototype.modules = function (id) {
        this.router.navigate(['/demo2/kt-mesmodules/' + id]);
        console.log(id);
    };
    // CreateCompanyButton(event): void {
    //   const dialogRef = this.dialog.open(CompanyPopupComponent, {
    //     data: {
    //       company_country_id:'',
    //       company_title:'',
    //       short_name:'',
    //       company_created_date:'',
    //       company_activity:'', 
    //       company_juridical_form:'',
    //       company_IF:'',
    //       company_ICE:'',
    //       company_TP:'',
    //       company_RC:'',
    //       company_CNSS:'',
    //          }
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     if(result){
    //       console.log(result.company_created_date)
    //       result.company_created_date = this.datePipe.transform(result.company_created_date , 'yyyy-MM-dd');
    //       console.log(result.company_created_date)
    //       console.log(result)
    //       this.companiesrestApi.createCompagnie(result).subscribe((data: {}) => {
    //         this.companies.push(data)
    //         this.reset()
    //         dialogRef.close()
    //         this.router.navigate([''])
    //         this.getCompanies() 
    //       }) 
    //       this.snackBar.openFromComponent(SuccesSnackComponent, {  
    //         duration: 2000,
    //         panelClass: ['blue-snackbar']
    //         });
    //     }
    //     else( console.log('Nothing to do'))
    //   });
    // }
    // reset (){
    //   this.company_country_id=''
    //   this.company_title=''
    //   this.short_name=''
    //   this.company_created_date=''
    //   this.company_activity=''
    //   this.juridical_form=null
    //   this.company_IF=''
    //   this.company_ICE=''
    //   this.company_TP=''
    //   this.company_RC=''
    //   this.company_CNSS=''
    // }
    // UpdateCompanyButton(companie): void {
    // //   companie.company_juridical_form
    // //  this.cityOptions = this.juridical_form.filter(city => city.value ==   companie.company_juridical_form);
    // //  console.log(this.cityOptions)
    // //  this.cityOptions.map((t=>{
    // //    console.log(t.viewValue)
    // //    this.selectedValue=t.viewValue
    // //  }))
    //   const dialogRef = this.dialog.open(CompanyPopupComponent, {
    //     data: {
    //       company_country_id:companie.company_country_id,
    //       company_title: companie.company_title,
    //       short_name: companie.short_name, 
    //       company_created_date:new Date(companie.company_created_date),
    //       company_activity: companie.company_activity, 
    //       company_juridical_form:companie.company_juridical_form,
    //       company_IF:companie.company_IF, 
    //       company_ICE:companie.company_ICE,
    //       company_TP:companie.company_TP, 
    //       company_RC:companie.company_RC,
    //       company_CNSS:companie.company_CNSS,
    //     }
    //   });
    //   dialogRef.afterClosed().subscribe(result=> {
    //    if(result==undefined){
    //     console.log('nothing')
    //    }
    //    else{
    //     result.company_created_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    //     console.log(result.company_created_date)
    //       this.companiesrestApi.updateCompany(companie.id, result).subscribe(res => {
    //       this.companies.push(res)
    //       this.reset()
    //       this.router.navigate([''])
    //       this.getCompanies() 
    //       })
    //       result.company_created_date =new Date(companie.company_created_date),
    //       this.snackBar.openFromComponent(SuccesSnackComponent, {  
    //         duration: 2000,
    //         panelClass: ['blue-snackbar']
    //       });
    //    }
    //   });
    // }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getCompanies();
        this.options = {
            itemChangeCallback: DashboardComponent_1.itemChange,
            itemResizeCallback: DashboardComponent_1.itemResize,
        };
        this.dashboard = [
            { cols: 1, rows: 1, y: 0, x: 0 },
            { cols: 1, rows: 1, y: 0, x: 0 },
            { cols: 1, rows: 1, y: 0, x: 0 },
            { cols: 1, rows: 1, y: 0, x: 0 },
        ];
    };
    DashboardComponent.prototype.getCompanies = function () {
        var _this = this;
        return this.companiesrestApi.getCompany().subscribe(function (data) {
            _this.companies = data;
            console.log(data);
        });
    };
    //   DeleteConfirm(id){
    //     this.companiesrestApi.deleteCompagnies(id).subscribe(data => {
    //     this.modalService.dismissAll();
    //      this.router.navigate([''])
    //     //  this.reset()
    //      this.getCompanies()
    //       })
    //     this.snackBar.openFromComponent(SuccesSnackComponent, {  
    //     duration: 2000,
    //     panelClass: ['blue-snackbar']
    //     });
    //   this.getCompanies()
    // }
    DashboardComponent.prototype.DeleteCompanyButton = function (content) {
        this.modalService.open(content).result.then(function (result) {
        });
    };
    DashboardComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    var DashboardComponent_1;
    __decorate([
        core_1.ViewChild('manageList'),
        __metadata("design:type", core_2.TdLayoutManageListComponent)
    ], DashboardComponent.prototype, "manageList", void 0);
    __decorate([
        core_1.ViewChild('dialogContent'),
        __metadata("design:type", core_1.TemplateRef)
    ], DashboardComponent.prototype, "template", void 0);
    DashboardComponent = DashboardComponent_1 = __decorate([
        core_1.Component({
            selector: 'kt-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/views/pages/dashboard/dashboard.component.html"),
            providers: [common_1.DatePipe],
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/pages/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [core_2.TdMediaService,
            dialog_1.MatDialog,
            core_1.ChangeDetectorRef,
            common_1.DatePipe,
            material_1.MatSnackBar,
            router_1.Router, ng_bootstrap_1.NgbModal,
            companies_service_1.CompaniesRestApiService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
// @Component({
//   selector: 'company-popup',
//   template: `
//   <form class="example-form"  #companypopup="ngForm">
//   <mat-toolbar color="primary">
//   <mat-toolbar-row>
//   <h4 class="mat-dialog-title"> 
//   <i class="material-icons orange600">
//       account_balance
//   </i>
//   {{description}}
// </h4>
//   </mat-toolbar-row>
// </mat-toolbar>
//       <div style='margin-left:2%;margin-top:5%'>
//       <table class="example-full-width" cellspacing="0">
//       <tr>
//       <td><mat-form-field class="example-full-width">
//       <input matInput placeholder="id pays" [(ngModel)]="data.company_country_id"
//       name="company_country_id"
//       />
//     </mat-form-field></td>
//       <td><mat-form-field class="example-full-width">
//         <input matInput placeholder="Raison sociale" [(ngModel)]="data.company_title"
//         name="raison" required
//         />
//       </mat-form-field></td>
//       <td><mat-form-field class="example-full-width">
//       <input matInput 
//       name="short" required
//       placeholder="Nom Abrégé" [(ngModel)]="data.short_name"/>
//       </mat-form-field></td>
//       </tr></table>
//       <table class="example-full-width" cellspacing="0">
//       <tr>
//                 <td>
//                   <mat-form-field class="example-full-width">
//                   <input matInput name="date_creation"
//                   [matDatepicker]="picker" placeholder="Date de creation" required
//                   [(ngModel)]="data.company_created_date"/>
//                     <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
//                     <mat-datepicker #picker></mat-datepicker>
//                   </mat-form-field>
//                 </td>
//                 <td>
//                   <mat-form-field class="example-full-width">
//                   <textarea name="creation_Date" 
//                   matInput placeholder="Secteur d’activité" required
//                   [(ngModel)]="data.company_activity"></textarea>
//                   </mat-form-field>
//               </td>
//               <mat-form-field>
//                         <mat-select
//                         name="juridical_form" [(ngModel)]="data.company_juridical_form" required>
//                         <mat-option *ngFor="let juridical of juridical_form" [value]="juridical.value">
//                         {{juridical.viewValue}}
//                       </mat-option>
//                       </mat-select>
//             </mat-form-field>
//       </tr>
//       </table>
//         <table class="example-full-width" cellspacing="0"><tr>
//           <td><mat-form-field class="example-full-width">
//           <input matInput #IF maxlength="8" name="postalCode" placeholder="IF" required
//           [(ngModel)]="data.company_IF"/>
//             <mat-hint align="end">{{IF.value.length}} / 8</mat-hint>
//           </mat-form-field></td>
//           <td><mat-form-field class="example-full-width">
//           <input matInput #ICE maxlength="15"name="ice" placeholder="ICE" required
//           [(ngModel)]="data.company_ICE"/>
//             <mat-hint align="end">{{ICE.value.length}} / 15</mat-hint>
//           </mat-form-field></td>
//         </tr>
//         </table>
//         <table class="example-full-width" cellspacing="0"><tr>
//           <td><mat-form-field class="example-full-width">
//           <input matInput #TP maxlength="8" placeholder="TP" name="TP" required
//           [(ngModel)]="data.company_TP"/>
//             <mat-hint align="end">{{TP.value.length}} / 8</mat-hint>
//           </mat-form-field></td>
//           <td><mat-form-field class="example-full-width">
//             <input matInput #RC maxlength="8" name="RC" placeholder="RC" required
//             [(ngModel)]="data.company_RC"/>
//             <mat-hint align="end">{{RC.value.length}} / 8</mat-hint>
//           </mat-form-field></td>
//           <td><mat-form-field class="example-full-width">
//           <input matInput #CNSS maxlength="8" name="cnss" placeholder="CNSS" required
//           [(ngModel)]="data.company_CNSS"/>
//             <mat-hint align="end">{{CNSS.value.length}} / 8</mat-hint>
//           </mat-form-field></td>
//         </tr>
//         <tr>
//         <td><mat-form-field class="no-line">
//         <input matInput  [(ngModel)]="data.id" 
//         name="id" [hidden]="true"/>
//       </mat-form-field></td>
//         </tr>
//         </table>
//         <div class="example-button-row" style='margin-left:40%;margin-top:5%'>
//           <button mat-raised-button (click)="DismissButton()">Annulez</button>
//             <button mat-raised-button color="primary" type="submit" [disabled]="companypopup.invalid"
//                 [mat-dialog-close]="data" cdkFocusInitial>
//                 <i class="material-icons">save</i>
//                 Sauvegardez
//             </button>
//         </div>
//       </div>
// </form>
//                     <style>
//                       .example-form {
//                       margin-bottom: 10%
//                       }
//                       .material-icons.orange600 { color: #FB8C00; }
//                       .example-full-width {
//                       width: 100%;
//                       }
//                       td {
//                       padding-right:30px;
//                       }
//                       .mat-dialog-container {
//                         padding-top: 0 !important;
//                     }
//                     dialog-overview-example-dialog.ng-star-inserted > div {
//                         margin-right: -24px;
//                         margin-left: -24px;
//                     }
//                     .mat-dialog-actions {
//                         margin-right: 0 !important;
//                         margin-left: 0 !important;
//                     }
//                     .example-icon {
//                       padding: 0 14px;
//                     }
//                     .example-spacer {
//                       flex: 1 1 auto;
//                     }
//                     ::ng-deep .no-line .mat-form-field-underline {
//                       display: none;
//                     }
//                     </style>
//    `,
// })
// export class CompanyPopupComponent {
//   description:any;
//   company_country_id:any;
//   company_title:any;
//   short_name:any;
//   company_created_date:any;
//   company_activity:any;
//   company_juridical_form:any;
//   juridic:any
//   company_IF:any;
//   company_ICE:any;
//   company_TP:any;
//   company_RC:any;
//   company_CNSS:any;
//   companies:any=[];
//   cityOptions = [];
//   juridical_form = [
//     {value: '1', viewValue: 'SARL'},
//     {value: '2', viewValue: 'SA'},
//     {value: '3', viewValue: 'SNC'}
//   ];
//   constructor(
//     public companiesrestApi:CompaniesRestApiService,
//     public dialogRef: MatDialogRef<CompanyPopupComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {
//       if(data.id==null){
//          this.description='Nouvelle une compagnie'
//       }
//       else(this.description='Modifier votre compagnie')
//     }
//   DismissButton(): void {
//     this.dialogRef.close();
//     this.getCompanies()
//   }
//   getCompanies() {
//     return this.companiesrestApi.getCompany().subscribe((data: {}) => {
//       this.companies = data;
//       })
//     }
//   stateChanged(stateName: string) {
//       console.log(stateName);
//     }
// }
// @Component({
//   selector: 'snack-bar-component-example-snack',
//   template: `
//     <span _ngcontent-c3="" class="example-pizza-party">
//     Succès!!! 🎉
//     </span>`,
//   styles: [`.example-pizza-party { color: #0E9D58; }`],
//   })
//   export class SuccesSnackComponent {}


/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************/
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
// NgBootstrap
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
// Core Module
var core_module_1 = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
var partials_module_1 = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
var dashboard_component_1 = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/pages/dashboard/dashboard.component.ts");
var widget_module_1 = __webpack_require__(/*! ../../partials/content/widgets/widget.module */ "./src/app/views/partials/content/widgets/widget.module.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var ngx_charts_1 = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
var divider_1 = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
var angular_gridster2_1 = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js");
var list_1 = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
var table_1 = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
var layout_1 = __webpack_require__(/*! @covalent/core/layout */ "./node_modules/@covalent/core/fesm5/covalent-core-layout.js");
var data_table_1 = __webpack_require__(/*! @covalent/core/data-table */ "./node_modules/@covalent/core/fesm5/covalent-core-data-table.js");
var core_2 = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
// import { AsideLeftComponent } from '../themes/demo2/aside/aside-left.component';
// import { BrandComponent } from '../themes/demo2/header/brand/brand.component';
// import { NgxPermissionsModule } from 'ngx-permissions';
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                dialog_1.MatDialogModule,
                forms_1.FormsModule,
                table_1.MatTableModule,
                ngx_charts_1.NgxChartsModule,
                angular_gridster2_1.GridsterModule,
                list_1.MatListModule,
                divider_1.MatDividerModule,
                material_1.MatCardModule,
                material_1.MatToolbarModule,
                forms_1.ReactiveFormsModule,
                partials_module_1.PartialsModule,
                widget_module_1.WidgetModule,
                core_module_1.CoreModule,
                ng_bootstrap_1.NgbModule,
                material_1.MatButtonModule,
                list_1.MatListModule,
                material_1.MatIconModule,
                material_1.MatCardModule,
                material_1.MatMenuModule,
                data_table_1.CovalentDataTableModule,
                material_1.MatInputModule,
                material_1.MatSelectModule,
                material_1.MatButtonToggleModule,
                material_1.MatSlideToggleModule,
                material_1.MatProgressSpinnerModule,
                dialog_1.MatDialogModule,
                material_1.MatSnackBarModule,
                material_1.MatToolbarModule,
                material_1.MatTabsModule,
                material_1.MatButtonModule,
                list_1.MatListModule,
                material_1.MatIconModule,
                material_1.MatCardModule,
                material_1.MatMenuModule,
                material_1.MatInputModule,
                material_1.MatSelectModule,
                material_1.MatButtonToggleModule,
                material_1.MatSlideToggleModule,
                material_1.MatProgressSpinnerModule,
                dialog_1.MatDialogModule,
                material_1.MatSnackBarModule,
                material_1.MatToolbarModule,
                material_1.MatTabsModule,
                material_1.MatSidenavModule,
                material_1.MatTooltipModule,
                material_1.MatRippleModule,
                material_1.MatRadioModule,
                material_1.MatGridListModule,
                material_1.MatDatepickerModule,
                material_1.MatNativeDateModule,
                material_1.MatSliderModule,
                material_1.MatAutocompleteModule,
                /** Covalent Modules */
                core_2.CovalentCommonModule,
                layout_1.CovalentLayoutModule,
                core_2.CovalentMediaModule,
                core_2.CovalentExpansionPanelModule,
                core_2.CovalentStepsModule,
                core_2.CovalentDialogsModule,
                core_2.CovalentLoadingModule,
                core_2.CovalentSearchModule,
                core_2.CovalentPagingModule,
                core_2.CovalentNotificationsModule,
                core_2.CovalentMenuModule,
                data_table_1.CovalentDataTableModule,
                core_2.CovalentMessageModule,
                /** Additional **/
                ngx_charts_1.NgxChartsModule,
                layout_1.CovalentLayoutModule,
                material_1.MatSidenavModule,
                material_1.MatTooltipModule,
                material_1.MatRippleModule,
                material_1.MatRadioModule,
                material_1.MatGridListModule,
                material_1.MatDatepickerModule,
                material_1.MatNativeDateModule,
                material_1.MatSliderModule,
                material_1.MatAutocompleteModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: dashboard_component_1.DashboardComponent
                    },
                ]),
            ],
            entryComponents: [],
            providers: [],
            declarations: [
                dashboard_component_1.DashboardComponent,
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;


/***/ }),

/***/ "./src/app/views/pages/dashboard/data.ts":
/*!***********************************************!*\
  !*** ./src/app/views/pages/dashboard/data.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pie = [
    {
        "name": "Candy",
        "value": 8940000
    },
    {
        "name": "Ice Cream",
        "value": 5000000
    },
    {
        "name": "Pastry",
        "value": 7200000
    }
];
exports.single = [
    {
        'value': 87,
        'name': '2017-06-28T03:13:02Z'
    }, {
        'value': 81,
        'name': '2017-06-02T09:40:08Z'
    }, {
        'value': 73,
        'name': '2017-06-06T08:26:45Z'
    }, {
        'value': 82,
        'name': '2017-06-14T06:24:28Z'
    }, {
        'value': 84,
        'name': '2017-06-14T05:18:34Z'
    }, {
        'value': 85,
        'name': '2017-06-16T10:18:00Z'
    }, {
        'value': 80,
        'name': '2017-06-11T05:22:44Z'
    }, {
        'value': 80,
        'name': '2017-06-13T09:06:45Z'
    }, {
        'value': 82,
        'name': '2017-06-12T12:25:03Z'
    }, {
        'value': 86,
        'name': '2017-06-03T08:11:16Z'
    }, {
        'value': 81,
        'name': '2017-06-05T05:18:25Z'
    }, {
        'value': 74,
        'name': '2017-06-21T06:45:43Z'
    }, {
        'value': 76,
        'name': '2017-06-06T09:32:01Z'
    }, {
        'value': 87,
        'name': '2017-06-03T06:14:21Z'
    }, {
        'value': 94,
        'name': '2017-06-28T08:49:56Z'
    }, {
        'value': 83,
        'name': '2017-06-28T23:56:28Z'
    }, {
        'value': 96,
        'name': '2017-06-09T00:37:40Z'
    }, {
        'value': 78,
        'name': '2017-06-05T23:56:10Z'
    }, {
        'value': 73,
        'name': '2017-06-01T20:20:02Z'
    }, {
        'value': 74,
        'name': '2017-06-01T02:27:40Z'
    }, {
        'value': 87,
        'name': '2017-06-01T08:59:09Z'
    }, {
        'value': 90,
        'name': '2017-06-23T05:01:53Z'
    }, {
        'value': 84,
        'name': '2017-06-20T21:48:24Z'
    }, {
        'value': 94,
        'name': '2017-06-08T09:46:48Z'
    }, {
        'value': 87,
        'name': '2017-06-01T08:07:57Z'
    }, {
        'value': 95,
        'name': '2017-06-28T11:18:05Z'
    }, {
        'value': 92,
        'name': '2017-06-20T01:41:47Z'
    }, {
        'value': 92,
        'name': '2017-06-21T07:37:39Z'
    }, {
        'value': 85,
        'name': '2017-06-28T20:00:59Z'
    }, {
        'value': 94,
        'name': '2017-06-18T15:57:28Z'
    }
];
exports.multi = [
    {
        'name': 'Candy',
        'series': [
            {
                'name': '2016',
                'value': 7300000
            },
            {
                'name': '2017',
                'value': 8940000
            }
        ]
    },
    {
        'name': 'Ice Cream',
        'series': [
            {
                'name': '2016',
                'value': 7870000
            },
            {
                'name': '2017',
                'value': 8270000
            }
        ]
    },
    {
        'name': 'Pastry',
        'series': [
            {
                'name': '2016',
                'value': 5000002
            },
            {
                'name': '2017',
                'value': 5800000
            }
        ]
    }
];
exports.times = [
    {
        'name': 'Candy',
        'series': [
            {
                'value': 69,
                'name': '2016-09-15T19:25:07.773Z',
            },
            {
                'value': 19,
                'name': '2016-09-17T17:16:53.279Z',
            },
            {
                'value': 85,
                'name': '2016-09-15T10:34:32.344Z',
            },
            {
                'value': 89,
                'name': '2016-09-19T14:33:45.710Z',
            },
            {
                'value': 33,
                'name': '2016-09-12T18:48:58.925Z',
            }
        ]
    },
    {
        'name': 'Ice Cream',
        'series': [
            {
                'value': 52,
                'name': '2016-09-15T19:25:07.773Z',
            },
            {
                'value': 49,
                'name': '2016-09-17T17:16:53.279Z',
            },
            {
                'value': 41,
                'name': '2016-09-15T10:34:32.344Z',
            },
            {
                'value': 38,
                'name': '2016-09-19T14:33:45.710Z',
            },
            {
                'value': 72,
                'name': '2016-09-12T18:48:58.925Z',
            }
        ]
    },
    {
        'name': 'Pastry',
        'series': [
            {
                'value': 40,
                'name': '2016-09-15T19:25:07.773Z',
            },
            {
                'value': 45,
                'name': '2016-09-17T17:16:53.279Z',
            },
            {
                'value': 51,
                'name': '2016-09-15T10:34:32.344Z',
            },
            {
                'value': 68,
                'name': '2016-09-19T14:33:45.710Z',
            },
            {
                'value': 54,
                'name': '2016-09-12T18:48:58.925Z',
            }
        ]
    },
];


/***/ })

}]);
//# sourceMappingURL=app-views-pages-dashboard-dashboard-module.js.map