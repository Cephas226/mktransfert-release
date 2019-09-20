(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-user-management-user-management-module"],{

/***/ "./src/app/views/pages/user-management/companies/companies-list/companies-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/companies/companies-list/companies-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\t\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t\t<kt-portlet-header [title]=\"'Roles list'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"dataSource.loading$\">\r\n\t\t\t\r\n\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t<button (click)=\"addRole()\" mat-raised-button matTooltip=\"Create new role\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>Nouvelle compagnie</span>\r\n\t\t\t\t</button>\r\n\t\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t\t</ng-container>\r\n\t\t</kt-portlet-header>\r\n\t\t<!-- end::Header -->\r\n\t\r\n\t\t<kt-portlet-body>\r\n\t\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t\t<div class=\"kt-form\">\r\n\t\t\t\t<!-- start::FILTERS -->\r\n\t\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Search user\" #searchInput placeholder=\"Search\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t<strong>Search</strong> in all fields\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- end::FILTERS -->\r\n\t\r\n\t\t\t\t<!-- start::GROUP ACTIONS -->\r\n\t\t\t\t<!-- Group actions list: 'Delete selected' | 'Fetch selected' | 'Update status for selected' -->\r\n\t\t\t\t<!-- Group actions are shared for all LISTS -->\r\n\t\t\t\t<div class=\"row align-items-center collapse kt-form__group-actions kt-margin-top-20 kt-margin-bottom-20\"\r\n\t\t\t\t\t[ngClass]=\"{'show' : selection.selected.length > 0}\"><!-- We show 'Group Actions' div if smth are selected -->\r\n\t\t\t\t\t<div class=\"col-xl-12\">\r\n\t\t\t\t\t\t<div class=\"kt-form__group kt-form__group--inline\">\r\n\t\t\t\t\t\t\t<div class=\"kt-form__label kt-form__label-no-wrap\">\r\n\t\t\t\t\t\t\t\t<label class=\"kt--font-bold kt-font-danger-\">\r\n\t\t\t\t\t\t\t\t\t<span translate=\"ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT\"></span> {{ selection.selected.length }}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<!-- selectedCountsTitle => function from codeBehind (roles-list.component.ts file) -->\r\n\t\t\t\t\t\t\t\t<!-- selectedCountsTitle => just returns title of selected items count -->\r\n\t\t\t\t\t\t\t\t<!-- for example: Selected records count: 4 -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"kt-form__control kt-form__group--inline\">\r\n\t\t\t\t\t\t\t\t<button (click)=\"fetchRoles()\" mat-raised-button matTooltip=\"Fetch selected roles\"  class=\"mat-button-mt-4\">\r\n\t\t\t\t\t\t\t\t\t<mat-icon>clear_all</mat-icon>\r\n\t\t\t\t\t\t\t\t\tFetch Selected\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- end::GROUP ACTIONS -->\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\r\n\t\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t\t<mat-table class=\"lmat-elevation-z8\"\r\n\t\t\t\t\t#table\r\n\t\t\t\t\t[dataSource]=\"dataSource\"\r\n\t\t\t\t\tmatSort\r\n\t\t\t\t\t#sort1=\"matSort\"\r\n\t\t\t\t\tmatSortActive=\"id\"\r\n\t\t\t\t\tmatSortDirection=\"asc\"\r\n\t\t\t\t\tmatSortDisableClear>\r\n\t\t\t\t\t<!-- Checkbox Column -->\r\n\t\r\n\t\t\t\t\t<!-- Table with selection -->\r\n\t\t\t\t\t<!-- https://run.stackblitz.com/api/angular/v1?file=app%2Ftable-selection-example.ts -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"select\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n\t\t\t\t\t\t\t\t[checked]=\"selection.hasValue() && isAllSelected()\"\r\n\t\t\t\t\t\t\t\t[indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n\t\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let row\" class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n\t\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t\t</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\r\n\t\t\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let role\">{{role.id}}</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\r\n\t\t\t\t\t<ng-container matColumnDef=\"title\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Title</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let role\">{{role.title}}</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\r\n\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let role\">\r\n\t\t\t\t\t\t\t<button mat-icon-button color=\"primary\"\r\n\t\t\t\t\t\t\t\tmatTooltip=\"{{ role.isCoreRole ? 'View' : 'Edit'}} role\"\r\n\t\t\t\t\t\t\t\t(click)=\"editRole(role)\">\r\n\t\t\t\t\t\t\t\t<mat-icon>\r\n\t\t\t\t\t\t\t\t\t{{ role.isCoreRole ? 'visibility' : 'create' }}\r\n\t\t\t\t\t\t\t\t</mat-icon>\r\n\t\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t\t<button mat-icon-button color=\"warn\"\r\n\t\t\t\t\t\t\t\tmatTooltip=\"Delete role\"\r\n\t\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t(click)=\"deleteRole(role)\">\r\n\t\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\t\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.hasItems\">No records found</div><!-- Message for empty data  -->\r\n\t\t\t\t<div class=\"mat-table__message\" *ngIf=\"dataSource.isPreloadTextViewed$ | async\">Please wait....</div>\r\n\t\t\t</div>\r\n\t\r\n\t\t\t<!-- start: BOTTOM -->\r\n\t\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>\r\n\t\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[3, 5, 10]\" [length]=\"dataSource.paginatorTotal$ | async\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t\t</div>\r\n\t\t\t<!-- end: BOTTOM -->\r\n\t\t</kt-portlet-body>\r\n\t\t<!-- end::Body -->\r\n\t</kt-portlet>\r\n\t\r\n\t<div class=\"row\">\r\n\t\t\t<div class=\"col-xl-6\">\r\n\t\t\t  <div class=\"row row-full-height\">\r\n\t\t\t   \r\n\t\t\t\t<div *ngFor=\"let companie of companies\"class=\"col-sm-12 col-md-12 col-lg-4\">\r\n\t\t\t\t\r\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet'\">\r\n\t\t\t\r\n\t\t\t\t  <kt-portlet-header>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t\t<p> {{companie.company_title}}</p>\r\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t\t\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t  </kt-portlet-header>\r\n\t\t\t\t  <kt-portlet-body (click)=\"modules()\">\r\n\t\t\t\t\t<ul class=\"navbar-nav ml-auto\">\r\n\t\t\t\t\t  <li class=\"nav-item\">\r\n\t\t\t\t\t\t<a class=\"kt-widget12__desc\" routerLink=\"/demo2/kt-mesmodules\">{{companie.short_name}}<span class=\"sr-only\">(current)</span></a>\r\n\t\t\t\t\t  </li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<kt-compagnie></kt-compagnie>\r\n\t\t\t\t  </kt-portlet-body>\r\n\t\t\t\t  \r\n\t\t\t\t  <div class=\"example-button-row\" style=\"text-align: center\">\r\n\t\t\t\t\t<span (click)=\"DeleteCompaniesButton(companie.id)\">\r\n\t\t\t\t\t  <i class=\"material-icons\">\r\n\t\t\t\t\t\tdelete_sweep\r\n\t\t\t\t\t\t</i>\r\n\t\t\t\t\t  Supprimer</span>\r\n\t\t\t\t\t  <span (click)=\"UpdatePopupButton(companie)\">\r\n\t\t\t\t\t\t<i class=\"material-icons\">\r\n\t\t\t\t\t\t  create\r\n\t\t\t\t\t\t  </i>\r\n\t\t\t\t\t\tModifier</span>\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\"\r\n\t\t\t\t\t\tmatTooltip=\"Delete role\"\r\n\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t[disabled]=\"role.isCoreRole\"\r\n\t\t\t\t\t\t(click)=\"deleteRole(role)\">\r\n\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  </kt-portlet>\r\n\t\t\t\t</div>\r\n\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t</div>\r\n\t\t\t</div> \r\n\t\t"

/***/ }),

/***/ "./src/app/views/pages/user-management/companies/companies-list/companies-list.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/companies/companies-list/companies-list.component.ts ***!
  \**************************************************************************************************/
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
var collections_1 = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// RXJS
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Services
var crud_1 = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
// Models
var auth_1 = __webpack_require__(/*! ../../../../../core/auth */ "./src/app/core/auth/index.ts");
var crud_2 = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var role_edit_dialog_component_1 = __webpack_require__(/*! ../../roles/role-edit/role-edit.dialog.component */ "./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.ts");
var companies_service_1 = __webpack_require__(/*! ../../shared/companies.service */ "./src/app/views/pages/user-management/shared/companies.service.ts");
// Components
// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var CompaniesListComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     */
    function CompaniesListComponent(companiesrestApi, store, dialog, snackBar, layoutUtilsService) {
        this.companiesrestApi = companiesrestApi;
        this.store = store;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        // Table fields
        this.companies = [];
        this.displayedColumns = ['select', 'id', 'title', 'actions'];
        // Selection
        this.selection = new collections_1.SelectionModel(true, []);
        this.rolesResult = [];
        // Subscriptions
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    CompaniesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        var sortSubscription = this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        this.subscriptions.push(sortSubscription);
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        var paginatorSubscriptions = rxjs_1.merge(this.sort.sortChange, this.paginator.page).pipe(operators_1.tap(function () {
            _this.loadRolesList();
        }))
            .subscribe();
        this.subscriptions.push(paginatorSubscriptions);
        // Filtration, bind to searchInput
        var searchSubscription = rxjs_1.fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
        // tslint:disable-next-line:max-line-length
        operators_1.debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        operators_1.distinctUntilChanged(), // This operator will eliminate duplicate values
        operators_1.tap(function () {
            _this.paginator.pageIndex = 0;
            _this.loadRolesList();
        }))
            .subscribe();
        this.subscriptions.push(searchSubscription);
        // Init DataSource
        this.dataSource = new auth_1.RolesDataSource(this.store);
        var entitiesSubscription = this.dataSource.entitySubject.pipe(operators_1.skip(1), operators_1.distinctUntilChanged()).subscribe(function (res) {
            _this.rolesResult = res;
        });
        this.subscriptions.push(entitiesSubscription);
        // First load
        rxjs_1.of(undefined).pipe(operators_1.take(1), operators_1.delay(1000)).subscribe(function () {
            _this.loadRolesList();
        });
        this.getCompanies();
    };
    /**
     * On Destroy
     */
    CompaniesListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    CompaniesListComponent.prototype.getCompanies = function () {
        var _this = this;
        return this.companiesrestApi.getCompany().subscribe(function (data) {
            _this.companies = data;
        });
    };
    /**
     * Load Roles List
     */
    CompaniesListComponent.prototype.loadRolesList = function () {
        this.selection.clear();
        var queryParams = new crud_2.QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        // Call request from server
        this.store.dispatch(new auth_1.RolesPageRequested({ page: queryParams }));
        this.selection.clear();
    };
    /**
     * Returns object for filter
     */
    CompaniesListComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value;
        filter.title = searchText;
        return filter;
    };
    /** ACTIONS */
    /**
     * Delete role
     *
     * @param _item: Role
     */
    CompaniesListComponent.prototype.deleteRole = function (_item) {
        var _this = this;
        var _title = 'Nom de compagnie';
        var _description = 'Voulez vous vraiment supprimer ? ';
        var _waitDesciption = 'Suppression en cours...';
        var _deleteMessage = "La compagnie a \u00E9t\u00E9 supprim\u00E9";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.store.dispatch(new auth_1.RoleDeleted({ id: _item.id }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
            _this.loadRolesList();
        });
    };
    /** Fetch */
    /**
     * Fetch selected rows
     */
    CompaniesListComponent.prototype.fetchRoles = function () {
        var messages = [];
        this.selection.selected.forEach(function (elem) {
            messages.push({
                text: "" + elem.title,
                id: elem.id.toString(),
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    };
    /**
     * Add role
     */
    CompaniesListComponent.prototype.addRole = function () {
        var newRole = new auth_1.Role();
        newRole.clear(); // Set all defaults fields
        this.editRole(newRole);
    };
    /**
     * Edit role
     *
     * @param role: Role
     */
    CompaniesListComponent.prototype.editRole = function (role) {
        var _this = this;
        var _saveMessage = "Role successfully has been saved.";
        var _messageType = role.id ? crud_1.MessageType.Update : crud_1.MessageType.Create;
        var dialogRef = this.dialog.open(role_edit_dialog_component_1.RoleEditDialogComponent, { data: { roleId: role.id } });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType, 10000, true, true);
            _this.loadRolesList();
        });
    };
    /**
     * Check all rows are selected
     */
    CompaniesListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.rolesResult.length;
        return numSelected === numRows;
    };
    /**
     * Toggle selection
     */
    CompaniesListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.selection.selected.length === this.rolesResult.length) {
            this.selection.clear();
        }
        else {
            this.rolesResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], CompaniesListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('sort1'),
        __metadata("design:type", material_1.MatSort)
    ], CompaniesListComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], CompaniesListComponent.prototype, "searchInput", void 0);
    CompaniesListComponent = __decorate([
        core_1.Component({
            selector: 'kt-roles-list',
            template: __webpack_require__(/*! ./companies-list.component.html */ "./src/app/views/pages/user-management/companies/companies-list/companies-list.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [companies_service_1.CompaniesRestApiService,
            store_1.Store,
            material_1.MatDialog,
            material_1.MatSnackBar,
            crud_1.LayoutUtilsService])
    ], CompaniesListComponent);
    return CompaniesListComponent;
}());
exports.CompaniesListComponent = CompaniesListComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress' : viewLoading, 'kt-portlet--body-progress-overlay' : loadingAfterSubmit }\">\r\n    <div class=\"kt-portlet__head kt-portlet__head__custom\" *ngIf=\"role\">\r\n        <div class=\"kt-portlet__head-label\">\r\n            <h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"role\">\r\n        <div class=\"kt-form\">\r\n            <div class=\"kt-portlet__body\">\r\n\r\n                <div class=\"kt-portlet__body-progress\">\r\n                    <mat-spinner [diameter]=\"20\"></mat-spinner>\r\n                </div>\r\n\r\n                <kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"30000\" [showCloseButton]=\"true\" (close)=\"onAlertClose($event)\">\r\n                    Oh snap! Change a few things up and try submitting again.\r\n                </kt-alert>\r\n\r\n                <div class=\"form-group kt-form__group row d-block\">\r\n                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput \r\n                                [disabled]=\"role.isCoreRole\"\r\n                                placeholder=\"Enter Title\"  \r\n                                [(ngModel)]=\"role.title\" />\r\n                            <mat-error>Title is\r\n                                <strong>required</strong>\r\n                            </mat-error>\r\n                            <mat-hint align=\"start\">Please enter\r\n                                <strong>Title</strong>\r\n                            </mat-hint>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n                <div class=\"kt-separator kt-separator--dashed\"></div>\r\n                <h6 class=\"kt-section__heading\">\r\n                    Permissions:\r\n                </h6>\r\n                <div class=\"form-group kt-form__group row\">\r\n                    <div class=\"col-lg-12 kt-margin-bottom-20-mobile\">\r\n                        <div class=\"kt-timeline-3 mb-5\">\r\n                            <div class=\"kt-timeline-3__items kt-timeline-3__items--rolePermissions\">\r\n                                <div *ngFor=\"let _rootRole of rolePermissions\" class=\"kt-timeline-3__inner\">\r\n                                    \r\n                                    <!-- {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}} -->\r\n                                    <!-- <button mat-icon-button>\r\n                                        <mat-icon class=\"mat-icon-rtl-mirror\">expand_more</mat-icon>\r\n                                    </button> -->\r\n                                    <div class=\"kt-timeline-3__item kt-border-bottom-grey kt-py-15 kt-bg-grey\">\r\n                                        <span class=\"kt-timeline-3__item-time\">\r\n                                            <mat-checkbox [(ngModel)]=\"_rootRole.isSelected\"\r\n                                                (change)=\"isSelectedChanged($event, _rootRole)\"\r\n                                                [disabled]=\"role.isCoreRole\">{{ _rootRole.title }}</mat-checkbox> \r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"d-flex align-items-center kt-border-bottom-grey kt-py-15 kt-bg-grey\">\r\n                                        <div class=\"kt-timeline-3__item kt-timeline-3__item-child\"\r\n                                            *ngFor=\"let _childRole of _rootRole._children\">\r\n                                            <span class=\"kt-timeline-3__item-time\">\r\n                                                <mat-checkbox [(ngModel)]=\"_childRole.isSelected\"\r\n                                                    (change)=\"isSelectedChanged($event, _childRole)\"\r\n                                                    [disabled]=\"role.isCoreRole\">{{ _childRole.title }}</mat-checkbox>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"kt-portlet__foot kt-portlet__foot--fit kt-portlet__no-border\">\r\n                <div class=\"kt-form__actions kt-form__actions--solid\">\r\n                    <div class=\"row text-right\">\r\n                        <div class=\"col-lg-12\">\r\n                            <button type=\"button\" mat-raised-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial matTooltip=\"Cancel changes\">\r\n                                Cancel\r\n                            </button>&nbsp;\r\n                            <button type=\"button\" [disabled]=\"!isTitleValid() || role.isCoreRole\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"Save changes\">\r\n                                Save\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.ts ***!
  \*******************************************************************************************/
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
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// Lodash
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Services and Models
var auth_1 = __webpack_require__(/*! ../../../../../core/auth */ "./src/app/core/auth/index.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var RoleEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<RoleEditDialogComponent>
     * @param data: any
     * @param store: Store<AppState>
     */
    function RoleEditDialogComponent(dialogRef, data, store) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.store = store;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.loadingAfterSubmit = false;
        this.rolePermissions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    RoleEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data.roleId) {
            this.role$ = this.store.pipe(store_1.select(auth_1.selectRoleById(this.data.roleId)));
        }
        else {
            var newRole = new auth_1.Role();
            newRole.clear();
            this.role$ = rxjs_1.of(newRole);
        }
        this.role$.subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.role = res;
            _this.allPermissions$ = _this.store.pipe(store_1.select(auth_1.selectAllPermissions));
            _this.loadPermissions();
        });
    };
    /**
     * On destroy
     */
    RoleEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    /**
     * Load permissions
     */
    RoleEditDialogComponent.prototype.loadPermissions = function () {
        var _this = this;
        this.allPermissions$.subscribe(function (_allPermissions) {
            if (!_allPermissions) {
                return;
            }
            var mainPermissions = _allPermissions.filter(function (el) { return !el.parentId; });
            mainPermissions.forEach(function (element) {
                var hasUserPermission = _this.role.permissions.some(function (t) { return t === element.id; });
                var rootPermission = new auth_1.Permission();
                rootPermission.clear();
                rootPermission.isSelected = hasUserPermission;
                rootPermission._children = [];
                rootPermission.id = element.id;
                rootPermission.level = element.level;
                rootPermission.parentId = element.parentId;
                rootPermission.title = element.title;
                var children = _allPermissions.filter(function (el) { return el.parentId && el.parentId === element.id; });
                children.forEach(function (child) {
                    var hasUserChildPermission = _this.role.permissions.some(function (t) { return t === child.id; });
                    var childPermission = new auth_1.Permission();
                    childPermission.clear();
                    childPermission.isSelected = hasUserChildPermission;
                    childPermission._children = [];
                    childPermission.id = child.id;
                    childPermission.level = child.level;
                    childPermission.parentId = child.parentId;
                    childPermission.title = child.title;
                    rootPermission._children.push(childPermission);
                });
                _this.rolePermissions.push(rootPermission);
            });
        });
    };
    /** ACTIONS */
    /**
     * Returns permissions ids
     */
    RoleEditDialogComponent.prototype.preparePermissionIds = function () {
        var result = [];
        lodash_1.each(this.rolePermissions, function (_root) {
            if (_root.isSelected) {
                result.push(_root.id);
                lodash_1.each(_root._children, function (_child) {
                    if (_child.isSelected) {
                        result.push(_child.id);
                    }
                });
            }
        });
        return result;
    };
    /**
     * Returns role for save
     */
    RoleEditDialogComponent.prototype.prepareRole = function () {
        var _role = new auth_1.Role();
        _role.id = this.role.id;
        _role.permissions = this.preparePermissionIds();
        // each(this.assignedRoles, (_role: Role) => _user.roles.push(_role.id));
        _role.title = this.role.title;
        _role.isCoreRole = this.role.isCoreRole;
        return _role;
    };
    /**
     * Save data
     */
    RoleEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        this.loadingAfterSubmit = false;
        /** check form */
        if (!this.isTitleValid()) {
            this.hasFormErrors = true;
            return;
        }
        var editedRole = this.prepareRole();
        if (editedRole.id > 0) {
            this.updateRole(editedRole);
        }
        else {
            this.createRole(editedRole);
        }
    };
    /**
     * Update role
     *
     * @param _role: Role
     */
    RoleEditDialogComponent.prototype.updateRole = function (_role) {
        var _this = this;
        this.loadingAfterSubmit = true;
        this.viewLoading = true;
        /* Server loading imitation. Remove this on real code */
        var updateRole = {
            id: this.role.id,
            changes: _role
        };
        this.store.dispatch(new auth_1.RoleUpdated({
            partialrole: updateRole,
            role: _role
        }));
        rxjs_1.of(undefined).pipe(operators_1.delay(1000)).subscribe(function () {
            _this.viewLoading = false;
            _this.dialogRef.close({
                _role: _role,
                isEdit: true
            });
        }); // Remove this line
    };
    /**
     * Create role
     *
     * @param _role: Role
     */
    RoleEditDialogComponent.prototype.createRole = function (_role) {
        var _this = this;
        this.loadingAfterSubmit = true;
        this.viewLoading = true;
        this.store.dispatch(new auth_1.RoleOnServerCreated({ role: _role }));
        this.componentSubscriptions = this.store.pipe(operators_1.delay(1000), // Remove this line
        store_1.select(auth_1.selectLastCreatedRoleId)).subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.viewLoading = false;
            _this.dialogRef.close({
                _role: _role,
                isEdit: false
            });
        });
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    RoleEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    /**
     * Check is selected changes
     *
     * @param $event: Event
     * @param permission: Permission
     */
    RoleEditDialogComponent.prototype.isSelectedChanged = function ($event, permission) {
        if (permission._children.length === 0 && permission.isSelected) {
            var _root = lodash_1.find(this.rolePermissions, function (item) { return item.id === permission.parentId; });
            if (_root && !_root.isSelected) {
                _root.isSelected = true;
            }
            return;
        }
        if (permission._children.length === 0 && !permission.isSelected) {
            var _root = lodash_1.find(this.rolePermissions, function (item) { return item.id === permission.parentId; });
            if (_root && _root.isSelected) {
                if (!lodash_1.some(_root._children, function (item) { return item.isSelected === true; })) {
                    _root.isSelected = false;
                }
            }
            return;
        }
        if (permission._children.length > 0 && permission.isSelected) {
            lodash_1.each(permission._children, function (item) { return item.isSelected = true; });
            return;
        }
        if (permission._children.length > 0 && !permission.isSelected) {
            lodash_1.each(permission._children, function (item) {
                item.isSelected = false;
            });
            return;
        }
    };
    /** UI */
    /**
     * Returns component title
     */
    RoleEditDialogComponent.prototype.getTitle = function () {
        if (this.role && this.role.id) {
            // tslint:disable-next-line:no-string-throw
            return "Edit role '" + this.role.title + "'";
        }
        // tslint:disable-next-line:no-string-throw
        return 'New role';
    };
    /**
     * Returns is title valid
     */
    RoleEditDialogComponent.prototype.isTitleValid = function () {
        return (this.role && this.role.title && this.role.title.length > 0);
    };
    RoleEditDialogComponent = __decorate([
        core_1.Component({
            selector: 'kt-role-edit-dialog',
            template: __webpack_require__(/*! ./role-edit.dialog.component.html */ "./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.Default,
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, store_1.Store])
    ], RoleEditDialogComponent);
    return RoleEditDialogComponent;
}());
exports.RoleEditDialogComponent = RoleEditDialogComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/roles/roles-list/roles-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/roles/roles-list/roles-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\t\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t\t<kt-portlet-header [title]=\"'Roles list'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"dataSource.loading$\">\r\n\t\t\t\r\n\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t<button (click)=\"addRole()\" mat-raised-button matTooltip=\"Create new role\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>New Role</span>\r\n\t\t\t\t</button>\r\n\t\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t\t</ng-container>\r\n\t\t</kt-portlet-header>\r\n\t\t<!-- end::Header -->\r\n\t\r\n\t\t<kt-portlet-body>\r\n\t\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t\t<div class=\"kt-form\">\r\n\t\t\t\t<!-- start::FILTERS -->\r\n\t\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Search user\" #searchInput placeholder=\"Search\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t<strong>Search</strong> in all fields\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- end::FILTERS -->\r\n\t\r\n\t\t\t\t<!-- start::GROUP ACTIONS -->\r\n\t\t\t\t<!-- Group actions list: 'Delete selected' | 'Fetch selected' | 'Update status for selected' -->\r\n\t\t\t\t<!-- Group actions are shared for all LISTS -->\r\n\t\t\t\t<div class=\"row align-items-center collapse kt-form__group-actions kt-margin-top-20 kt-margin-bottom-20\"\r\n\t\t\t\t\t[ngClass]=\"{'show' : selection.selected.length > 0}\"><!-- We show 'Group Actions' div if smth are selected -->\r\n\t\t\t\t\t<div class=\"col-xl-12\">\r\n\t\t\t\t\t\t<div class=\"kt-form__group kt-form__group--inline\">\r\n\t\t\t\t\t\t\t<div class=\"kt-form__label kt-form__label-no-wrap\">\r\n\t\t\t\t\t\t\t\t<label class=\"kt--font-bold kt-font-danger-\">\r\n\t\t\t\t\t\t\t\t\t<span translate=\"ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT\"></span> {{ selection.selected.length }}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<!-- selectedCountsTitle => function from codeBehind (roles-list.component.ts file) -->\r\n\t\t\t\t\t\t\t\t<!-- selectedCountsTitle => just returns title of selected items count -->\r\n\t\t\t\t\t\t\t\t<!-- for example: Selected records count: 4 -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"kt-form__control kt-form__group--inline\">\r\n\t\t\t\t\t\t\t\t<button (click)=\"fetchRoles()\" mat-raised-button matTooltip=\"Fetch selected roles\"  class=\"mat-button-mt-4\">\r\n\t\t\t\t\t\t\t\t\t<mat-icon>clear_all</mat-icon>\r\n\t\t\t\t\t\t\t\t\tFetch Selected\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- end::GROUP ACTIONS -->\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\r\n\t\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t\t<mat-table class=\"lmat-elevation-z8\"\r\n\t\t\t\t\t#table\r\n\t\t\t\t\t[dataSource]=\"dataSource\"\r\n\t\t\t\t\tmatSort\r\n\t\t\t\t\t#sort1=\"matSort\"\r\n\t\t\t\t\tmatSortActive=\"id\"\r\n\t\t\t\t\tmatSortDirection=\"asc\"\r\n\t\t\t\t\tmatSortDisableClear>\r\n\t\t\t\t\t<!-- Checkbox Column -->\r\n\t\r\n\t\t\t\t\t<!-- Table with selection -->\r\n\t\t\t\t\t<!-- https://run.stackblitz.com/api/angular/v1?file=app%2Ftable-selection-example.ts -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"select\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n\t\t\t\t\t\t\t\t[checked]=\"selection.hasValue() && isAllSelected()\"\r\n\t\t\t\t\t\t\t\t[indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n\t\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let row\" class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n\t\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t\t</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\r\n\t\t\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let role\">{{role.id}}</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\r\n\t\t\t\t\t<ng-container matColumnDef=\"title\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Title</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let role\">{{role.title}}</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\r\n\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let role\">\r\n\t\t\t\t\t\t\t<button mat-icon-button color=\"primary\"\r\n\t\t\t\t\t\t\t\tmatTooltip=\"{{ role.isCoreRole ? 'View' : 'Edit'}} role\"\r\n\t\t\t\t\t\t\t\t(click)=\"editRole(role)\">\r\n\t\t\t\t\t\t\t\t<mat-icon>\r\n\t\t\t\t\t\t\t\t\t{{ role.isCoreRole ? 'visibility' : 'create' }}\r\n\t\t\t\t\t\t\t\t</mat-icon>\r\n\t\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t\t<button mat-icon-button color=\"warn\"\r\n\t\t\t\t\t\t\t\tmatTooltip=\"Delete role\"\r\n\t\t\t\t\t\t\t\ttype=\"button\"\r\n\t\t\t\t\t\t\t\t[disabled]=\"role.isCoreRole\"\r\n\t\t\t\t\t\t\t\t(click)=\"deleteRole(role)\">\r\n\t\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\t\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.hasItems\">No records found</div><!-- Message for empty data  -->\r\n\t\t\t\t<div class=\"mat-table__message\" *ngIf=\"dataSource.isPreloadTextViewed$ | async\">Please wait....</div>\r\n\t\t\t</div>\r\n\t\r\n\t\t\t<!-- start: BOTTOM -->\r\n\t\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>\r\n\t\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[3, 5, 10]\" [length]=\"dataSource.paginatorTotal$ | async\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t\t</div>\r\n\t\t\t<!-- end: BOTTOM -->\r\n\t\t</kt-portlet-body>\r\n\t\t<!-- end::Body -->\r\n\t</kt-portlet>\r\n\t\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/roles/roles-list/roles-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/roles/roles-list/roles-list.component.ts ***!
  \**************************************************************************************/
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
var collections_1 = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// RXJS
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Services
var crud_1 = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
// Models
var auth_1 = __webpack_require__(/*! ../../../../../core/auth */ "./src/app/core/auth/index.ts");
var crud_2 = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
// Components
var role_edit_dialog_component_1 = __webpack_require__(/*! ../role-edit/role-edit.dialog.component */ "./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.ts");
// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var RolesListComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     */
    function RolesListComponent(store, dialog, snackBar, layoutUtilsService) {
        this.store = store;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.displayedColumns = ['select', 'id', 'title', 'actions'];
        // Selection
        this.selection = new collections_1.SelectionModel(true, []);
        this.rolesResult = [];
        // Subscriptions
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    RolesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        var sortSubscription = this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        this.subscriptions.push(sortSubscription);
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        var paginatorSubscriptions = rxjs_1.merge(this.sort.sortChange, this.paginator.page).pipe(operators_1.tap(function () {
            _this.loadRolesList();
        }))
            .subscribe();
        this.subscriptions.push(paginatorSubscriptions);
        // Filtration, bind to searchInput
        var searchSubscription = rxjs_1.fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
        // tslint:disable-next-line:max-line-length
        operators_1.debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        operators_1.distinctUntilChanged(), // This operator will eliminate duplicate values
        operators_1.tap(function () {
            _this.paginator.pageIndex = 0;
            _this.loadRolesList();
        }))
            .subscribe();
        this.subscriptions.push(searchSubscription);
        // Init DataSource
        this.dataSource = new auth_1.RolesDataSource(this.store);
        var entitiesSubscription = this.dataSource.entitySubject.pipe(operators_1.skip(1), operators_1.distinctUntilChanged()).subscribe(function (res) {
            _this.rolesResult = res;
        });
        this.subscriptions.push(entitiesSubscription);
        // First load
        rxjs_1.of(undefined).pipe(operators_1.take(1), operators_1.delay(1000)).subscribe(function () {
            _this.loadRolesList();
        });
    };
    /**
     * On Destroy
     */
    RolesListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load Roles List
     */
    RolesListComponent.prototype.loadRolesList = function () {
        this.selection.clear();
        var queryParams = new crud_2.QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        // Call request from server
        this.store.dispatch(new auth_1.RolesPageRequested({ page: queryParams }));
        this.selection.clear();
    };
    /**
     * Returns object for filter
     */
    RolesListComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value;
        filter.title = searchText;
        return filter;
    };
    /** ACTIONS */
    /**
     * Delete role
     *
     * @param _item: Role
     */
    RolesListComponent.prototype.deleteRole = function (_item) {
        var _this = this;
        var _title = 'User Role';
        var _description = 'Are you sure to permanently delete this role?';
        var _waitDesciption = 'Role is deleting...';
        var _deleteMessage = "Role has been deleted";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.store.dispatch(new auth_1.RoleDeleted({ id: _item.id }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
            _this.loadRolesList();
        });
    };
    /** Fetch */
    /**
     * Fetch selected rows
     */
    RolesListComponent.prototype.fetchRoles = function () {
        var messages = [];
        this.selection.selected.forEach(function (elem) {
            messages.push({
                text: "" + elem.title,
                id: elem.id.toString(),
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    };
    /**
     * Add role
     */
    RolesListComponent.prototype.addRole = function () {
        var newRole = new auth_1.Role();
        newRole.clear(); // Set all defaults fields
        this.editRole(newRole);
    };
    /**
     * Edit role
     *
     * @param role: Role
     */
    RolesListComponent.prototype.editRole = function (role) {
        var _this = this;
        var _saveMessage = "Role successfully has been saved.";
        var _messageType = role.id ? crud_1.MessageType.Update : crud_1.MessageType.Create;
        var dialogRef = this.dialog.open(role_edit_dialog_component_1.RoleEditDialogComponent, { data: { roleId: role.id } });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType, 10000, true, true);
            _this.loadRolesList();
        });
    };
    /**
     * Check all rows are selected
     */
    RolesListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.rolesResult.length;
        return numSelected === numRows;
    };
    /**
     * Toggle selection
     */
    RolesListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.selection.selected.length === this.rolesResult.length) {
            this.selection.clear();
        }
        else {
            this.rolesResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], RolesListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('sort1'),
        __metadata("design:type", material_1.MatSort)
    ], RolesListComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], RolesListComponent.prototype, "searchInput", void 0);
    RolesListComponent = __decorate([
        core_1.Component({
            selector: 'kt-roles-list',
            template: __webpack_require__(/*! ./roles-list.component.html */ "./src/app/views/pages/user-management/roles/roles-list/roles-list.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [store_1.Store,
            material_1.MatDialog,
            material_1.MatSnackBar,
            crud_1.LayoutUtilsService])
    ], RolesListComponent);
    return RolesListComponent;
}());
exports.RolesListComponent = RolesListComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/shared/companies.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/user-management/shared/companies.service.ts ***!
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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var CompaniesRestApiService = /** @class */ (function () {
    function CompaniesRestApiService(http) {
        this.http = http;
        // Define API
        // apiURL = 'http://192.168.1.119:8484/companies/company/';
        this.apiURL = 'http://localhost:3000';
        /*========================================
          CRUD Methods for consuming RESTful API
        =========================================*/
        // Http Options
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // HttpClient API get() method => Fetch Compagnies list
    CompaniesRestApiService.prototype.getCompany = function () {
        return this.http.get(this.apiURL + '/Companies')
            .pipe(operators_1.retry(1), operators_1.catchError(this.handleError));
    };
    CompaniesRestApiService.prototype.display = function (id) {
        console.log(id);
        return id;
    };
    CompaniesRestApiService.prototype.updateUser = function (company) {
        return this.http.put(this.apiURL + '/' + company.id, company);
    };
    // HttpClient API get() method => Fetch Compagnie
    CompaniesRestApiService.prototype.getCompanies = function (id) {
        return this.http.get(this.apiURL + '/Companies/' + id)
            .pipe(operators_1.retry(1), operators_1.catchError(this.handleError));
    };
    // HttpClient API post() method => Create Compagnie
    CompaniesRestApiService.prototype.createCompagnie = function (Company) {
        return this.http.post(this.apiURL + '/Companies', JSON.stringify(Company), this.httpOptions)
            .pipe(operators_1.retry(1), operators_1.catchError(this.handleError));
    };
    // HttpClient API put() method => Update Compagnie
    CompaniesRestApiService.prototype.updateCompany = function (id, Company) {
        return this.http.put(this.apiURL + '/Companies/' + id, Company, this.httpOptions)
            .pipe(operators_1.retry(1), operators_1.catchError(this.handleError));
    };
    // HttpClient API delete() method => Delete Compagnie
    CompaniesRestApiService.prototype.deleteCompagnies = function (id) {
        return this.http.delete(this.apiURL + '/Companies/' + id, this.httpOptions)
            .pipe(operators_1.retry(1), operators_1.catchError(this.handleError));
    };
    // Error handling 
    CompaniesRestApiService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        window.alert(errorMessage);
        return rxjs_1.throwError(errorMessage);
    };
    CompaniesRestApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CompaniesRestApiService);
    return CompaniesRestApiService;
}());
exports.CompaniesRestApiService = CompaniesRestApiService;


/***/ }),

/***/ "./src/app/views/pages/user-management/user-management.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/user-management/user-management.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"hasUserAccess$ | async\">\r\n    <router-outlet></router-outlet>\r\n</div> -->\r\n<div>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/user-management.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/user-management/user-management.component.ts ***!
  \**************************************************************************/
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
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var userManagementPermissionId = 2;
var UserManagementComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param router: Router
     */
    function UserManagementComponent(store, router) {
        this.store = store;
        this.router = router;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserManagementComponent.prototype.ngOnInit = function () {
        // this.currentUserPermission$ = this.store.pipe(select(currentUserPermissions));
        // this.currentUserPermission$.subscribe(permissions => {
        // 	if (permissions && permissions.length > 0) {
        // 		this.hasUserAccess$ =
        // 			this.store.pipe(select(checkHasUserPermission(userManagementPermissionId)));
        // 		this.hasUserAccess$.subscribe(res => {
        // 			if (!res) {
        // 				this.router.navigateByUrl('/error/403');
        // 			}
        // 		});
        // 	}
        // });
    };
    UserManagementComponent = __decorate([
        core_1.Component({
            selector: 'kt-user-management',
            template: __webpack_require__(/*! ./user-management.component.html */ "./src/app/views/pages/user-management/user-management.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [store_1.Store, router_1.Router])
    ], UserManagementComponent);
    return UserManagementComponent;
}());
exports.UserManagementComponent = UserManagementComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/user-management.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/user-management/user-management.module.ts ***!
  \***********************************************************************/
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
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var effects_1 = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
// Translate
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var partials_module_1 = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
// Services
var crud_1 = __webpack_require__(/*! ../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
// Shared
var crud_2 = __webpack_require__(/*! ../../partials/content/crud */ "./src/app/views/partials/content/crud/index.ts");
// Components
var user_management_component_1 = __webpack_require__(/*! ./user-management.component */ "./src/app/views/pages/user-management/user-management.component.ts");
var users_list_component_1 = __webpack_require__(/*! ./users/users-list/users-list.component */ "./src/app/views/pages/user-management/users/users-list/users-list.component.ts");
var user_edit_component_1 = __webpack_require__(/*! ./users/user-edit/user-edit.component */ "./src/app/views/pages/user-management/users/user-edit/user-edit.component.ts");
var roles_list_component_1 = __webpack_require__(/*! ./roles/roles-list/roles-list.component */ "./src/app/views/pages/user-management/roles/roles-list/roles-list.component.ts");
var role_edit_dialog_component_1 = __webpack_require__(/*! ./roles/role-edit/role-edit.dialog.component */ "./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.ts");
var user_roles_list_component_1 = __webpack_require__(/*! ./users/_subs/user-roles/user-roles-list.component */ "./src/app/views/pages/user-management/users/_subs/user-roles/user-roles-list.component.ts");
var change_password_component_1 = __webpack_require__(/*! ./users/_subs/change-password/change-password.component */ "./src/app/views/pages/user-management/users/_subs/change-password/change-password.component.ts");
var address_component_1 = __webpack_require__(/*! ./users/_subs/address/address.component */ "./src/app/views/pages/user-management/users/_subs/address/address.component.ts");
var social_networks_component_1 = __webpack_require__(/*! ./users/_subs/social-networks/social-networks.component */ "./src/app/views/pages/user-management/users/_subs/social-networks/social-networks.component.ts");
// Material
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var auth_1 = __webpack_require__(/*! ../../../core/auth */ "./src/app/core/auth/index.ts");
var companies_list_component_1 = __webpack_require__(/*! ./companies/companies-list/companies-list.component */ "./src/app/views/pages/user-management/companies/companies-list/companies-list.component.ts");
var companies_service_1 = __webpack_require__(/*! ../../partials/content/widgets/shared/companies.service */ "./src/app/views/partials/content/widgets/shared/companies.service.ts");
var routes = [
    {
        path: '',
        component: user_management_component_1.UserManagementComponent,
        children: [
            {
                path: '',
                redirectTo: 'roles',
                pathMatch: 'full'
            },
            {
                path: 'roles',
                component: roles_list_component_1.RolesListComponent
            },
            {
                path: 'companies',
                component: companies_list_component_1.CompaniesListComponent
            },
            {
                path: 'users',
                component: users_list_component_1.UsersListComponent
            },
            {
                path: 'users:id',
                component: users_list_component_1.UsersListComponent
            },
            {
                path: 'users/add',
                component: user_edit_component_1.UserEditComponent
            },
            {
                path: 'users/add:id',
                component: user_edit_component_1.UserEditComponent
            },
            {
                path: 'users/edit',
                component: user_edit_component_1.UserEditComponent
            },
            {
                path: 'users/edit/:id',
                component: user_edit_component_1.UserEditComponent
            },
        ]
    }
];
var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                partials_module_1.PartialsModule,
                router_1.RouterModule.forChild(routes),
                store_1.StoreModule.forFeature('users', auth_1.usersReducer),
                effects_1.EffectsModule.forFeature([auth_1.UserEffects]),
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
                material_1.MatExpansionModule,
                material_1.MatTabsModule,
                material_1.MatTooltipModule,
                material_1.MatDialogModule
            ],
            providers: [
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
                crud_1.HttpUtilsService,
                crud_1.TypesUtilsService,
                crud_1.LayoutUtilsService,
                companies_service_1.CompaniesRestApiService
            ],
            entryComponents: [
                crud_2.ActionNotificationComponent,
                role_edit_dialog_component_1.RoleEditDialogComponent
            ],
            declarations: [
                user_management_component_1.UserManagementComponent,
                users_list_component_1.UsersListComponent,
                user_edit_component_1.UserEditComponent,
                roles_list_component_1.RolesListComponent,
                companies_list_component_1.CompaniesListComponent,
                role_edit_dialog_component_1.RoleEditDialogComponent,
                user_roles_list_component_1.UserRolesListComponent,
                change_password_component_1.ChangePasswordComponent,
                address_component_1.AddressComponent,
                social_networks_component_1.SocialNetworksComponent
            ]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());
exports.UserManagementModule = UserManagementModule;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/address/address.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/address/address.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Form-->\r\n<form [formGroup]=\"addressForm\" class=\"kt-form kt-form--group-seperator-dashed\">\r\n\r\n\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\" (close)=\"onAlertClose($event)\">\r\n\t\tOh snap! Change a few things up and try submitting again.\r\n\t</kt-alert>\r\n\t<div class=\"kt-form__section kt-form__section--first\">\r\n\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t<input matInput placeholder=\"Enter Address Line\" formControlName=\"addressLine\" />\r\n\t\t\t\t\t<mat-error>Address Line is\r\n\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t<strong>Address Line</strong>\r\n\t\t\t\t\t</mat-hint>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t<input matInput placeholder=\"City\" formControlName=\"city\" />\r\n\t\t\t\t\t<mat-error>City is\r\n\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t<strong>City</strong>\r\n\t\t\t\t\t</mat-hint>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t<input matInput placeholder=\"Enter State Line\" formControlName=\"state\" />\r\n\t\t\t\t\t<mat-error>State is\r\n\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t<strong>State</strong>\r\n\t\t\t\t\t</mat-hint>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t<input matInput placeholder=\"Enter Postode\" formControlName=\"postCode\" />\r\n\t\t\t\t\t<mat-error>Postcode is\r\n\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t<strong>Postcode</strong>\r\n\t\t\t\t\t</mat-hint>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<!--end::Form-->\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/address/address.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/address/address.component.ts ***!
  \**************************************************************************************/
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
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
// Auth
var auth_1 = __webpack_require__(/*! ../../../../../../core/auth */ "./src/app/core/auth/index.ts");
// Layout
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var AddressComponent = /** @class */ (function () {
    /**
     * Component Costructor
     *
     * @param fb: FormBuilder
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param layoutUtilsService: LayoutUtilsService
     */
    function AddressComponent(fb, auth, store, layoutUtilsService) {
        this.fb = fb;
        this.auth = auth;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.hasFormErrors = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    AddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.addressSubject.value) {
            var newAddress = new auth_1.Address();
            newAddress.clear();
            this.addressSubject.next(newAddress);
        }
        this.createForm();
        this.addressForm.valueChanges
            .pipe(
        // tslint:disable-next-line:max-line-length
        operators_1.debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        operators_1.distinctUntilChanged(), // This operator will eliminate duplicate values
        operators_1.tap(function () {
            _this.updateAddress();
        }))
            .subscribe();
    };
    /**
     * Init form
     */
    AddressComponent.prototype.createForm = function () {
        this.addressForm = this.fb.group({
            addressLine: [this.addressSubject.value.addressLine, forms_1.Validators.required],
            city: [this.addressSubject.value.city, forms_1.Validators.required],
            state: [this.addressSubject.value.state, forms_1.Validators.required],
            postCode: [this.addressSubject.value.postCode, forms_1.Validators.required]
        });
    };
    /**
     * Update address
     */
    AddressComponent.prototype.updateAddress = function () {
        this.hasFormErrors = false;
        var controls = this.addressForm.controls;
        /** check form */
        if (this.addressForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var newAddress = new auth_1.Address();
        newAddress.clear();
        newAddress.addressLine = controls['addressLine'].value;
        newAddress.city = controls['city'].value;
        newAddress.postCode = controls['postCode'].value;
        newAddress.state = controls['state'].value;
        this.addressSubject.next(newAddress);
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    AddressComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.BehaviorSubject)
    ], AddressComponent.prototype, "addressSubject", void 0);
    AddressComponent = __decorate([
        core_1.Component({
            selector: 'kt-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/views/pages/user-management/users/_subs/address/address.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_1.AuthService,
            store_1.Store,
            crud_1.LayoutUtilsService])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/change-password/change-password.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/change-password/change-password.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Form-->\r\n\t<form *ngIf=\"user\" [formGroup]=\"changePasswordForm\" class=\"kt-form kt-form--group-seperator-dashed\">\r\n\r\n\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\" (close)=\"onAlertClose($event)\">\r\n\t\t\tOh snap! Password not match.\r\n\t\t</kt-alert>\r\n\t\t<div class=\"kt-form__section kt-form__section--first\">\r\n\t\t\t<div class=\"form-group kt-form__group row mb-0\">\r\n\t\t\t\t<div class=\"col-lg-8 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"password\" id=\"password\" autocomplete=\"off\" placeholder=\"Enter Password\" formControlName=\"password\" />\r\n\t\t\t\t\t\t<mat-error>Password is\r\n\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t<strong>Password</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-8 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"password\" id=\"confirmPassword\" autocomplete=\"off\" placeholder=\"Confirm password\" formControlName=\"confirmPassword\" />\r\n\t\t\t\t\t\t<mat-error>Confirm password is\r\n\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please conirm\r\n\t\t\t\t\t\t\t<strong>Password</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t<div class=\"kt-form__actions kt-form__actions--solid\">\r\n\t\t\t<button type=\"button\" [disabled]=\"changePasswordForm.invalid\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"Save changes\">\r\n\t\t\t\tChange password\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n<!--end::Form-->\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/change-password/change-password.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/change-password/change-password.component.ts ***!
  \******************************************************************************************************/
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
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Auth
var auth_1 = __webpack_require__(/*! ../../../../../../core/auth/ */ "./src/app/core/auth/index.ts");
// Layout
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    /**
     * MatchPassword
     *
     * @param AC: AbstractControl
     */
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());
exports.PasswordValidation = PasswordValidation;
var ChangePasswordComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param fb: FormBuilder
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param layoutUtilsService: LayoutUtilsService
     */
    function ChangePasswordComponent(fb, auth, store, 
    // tslint:disable-next-line:align
    layoutUtilsService) {
        this.fb = fb;
        this.auth = auth;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.loadingSubject = new rxjs_1.BehaviorSubject(false);
        this.hasFormErrors = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    /**
     * Load data
     */
    ChangePasswordComponent.prototype.loadData = function () {
        var _this = this;
        this.auth.getUserById(this.userId).subscribe(function (res) {
            _this.user = res;
            _this.createForm();
        });
    };
    /**
     * Init form
     */
    ChangePasswordComponent.prototype.createForm = function () {
        this.changePasswordForm = this.fb.group({
            password: ['', forms_1.Validators.required],
            confirmPassword: ['', forms_1.Validators.required]
        });
    };
    /**
     * Reset
     */
    ChangePasswordComponent.prototype.reset = function () {
        this.hasFormErrors = false;
        this.loadingSubject.next(false);
        this.changePasswordForm.markAsPristine();
        this.changePasswordForm.markAsUntouched();
        this.changePasswordForm.updateValueAndValidity();
    };
    /**
     * Save data
     */
    ChangePasswordComponent.prototype.onSubmit = function () {
        this.loadingSubject.next(true);
        this.hasFormErrors = false;
        var controls = this.changePasswordForm.controls;
        /** check form */
        if (this.changePasswordForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            this.loadingSubject.next(false);
            return;
        }
        this.user.password = controls['password'].value;
        var updatedUser = {
            id: this.user.id,
            changes: this.user
        };
        this.store.dispatch(new auth_1.UserUpdated({
            partialUser: updatedUser,
            user: this.user
        }));
        this.loadData();
        this.loadingSubject.next(false);
        var message = "User password successfully has been changed.";
        this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Update, 5000, true, false);
        this.reset();
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    ChangePasswordComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ChangePasswordComponent.prototype, "userId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "loadingSubject", void 0);
    ChangePasswordComponent = __decorate([
        core_1.Component({
            selector: 'kt-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/views/pages/user-management/users/_subs/change-password/change-password.component.html"),
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, auth_1.AuthService, store_1.Store,
            crud_1.LayoutUtilsService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/social-networks/social-networks.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/social-networks/social-networks.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Form-->\r\n<form [formGroup]=\"socialNetworksForm\" class=\"kt-form kt-form--group-seperator-dashed\">\r\n\r\n\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\" (close)=\"onAlertClose($event)\">\r\n\t\tOh snap! Change a few things up and try submitting again.\r\n\t</kt-alert>\r\n\t<div class=\"kt-form__section kt-form__section--first\">\r\n\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t<input matInput placeholder=\"Enter LinkedIn address\" formControlName=\"linkedIn\" />\r\n\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t<strong>Linked In</strong> address\r\n\t\t\t\t\t</mat-hint>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t<input matInput placeholder=\"Enter Facebook address\" formControlName=\"facebook\" />\r\n\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t<strong>Facebook</strong> address\r\n\t\t\t\t\t</mat-hint>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t<input matInput placeholder=\"Enter Twitter address\" formControlName=\"twitter\" />\r\n\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t<strong>Twitter</strong> address\r\n\t\t\t\t\t</mat-hint>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t<input matInput placeholder=\"Enter Instagram address\" formControlName=\"instagram\" />\r\n\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t<strong>Instagram</strong> address\r\n\t\t\t\t\t</mat-hint>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<!--end::Form-->\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/social-networks/social-networks.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/social-networks/social-networks.component.ts ***!
  \******************************************************************************************************/
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
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
// Auth
var auth_1 = __webpack_require__(/*! ../../../../../../core/auth */ "./src/app/core/auth/index.ts");
// CRUD
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var SocialNetworksComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param fb: FormBuilser
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param layoutUtilsService: LayoutUtilsService
     */
    function SocialNetworksComponent(fb, auth, store, layoutUtilsService) {
        this.fb = fb;
        this.auth = auth;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        // Public properties
        // Incoming data
        this.loadingSubject = new rxjs_1.BehaviorSubject(false);
        this.hasFormErrors = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    SocialNetworksComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.socialNetworksSubject.value) {
            var newSocialNetworks = new auth_1.SocialNetworks();
            newSocialNetworks.clear();
            this.socialNetworksSubject.next(newSocialNetworks);
        }
        this.createForm();
        this.socialNetworksForm.valueChanges
            .pipe(
        // tslint:disable-next-line:max-line-length
        operators_1.debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        operators_1.distinctUntilChanged(), // This operator will eliminate duplicate values
        operators_1.tap(function () {
            _this.updateSocialNetworks();
        }))
            .subscribe();
    };
    // Create form
    SocialNetworksComponent.prototype.createForm = function () {
        this.socialNetworksForm = this.fb.group({
            linkedIn: [this.socialNetworksSubject.value.linkedIn],
            facebook: [this.socialNetworksSubject.value.facebook],
            twitter: [this.socialNetworksSubject.value.twitter],
            instagram: [this.socialNetworksSubject.value.instagram]
        });
    };
    /**
     * Update social networks
     */
    SocialNetworksComponent.prototype.updateSocialNetworks = function () {
        this.loadingSubject.next(true);
        this.hasFormErrors = false;
        var controls = this.socialNetworksForm.controls;
        /** check form */
        if (this.socialNetworksForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            this.loadingSubject.next(false);
            return;
        }
        var newSocialNetworks = new auth_1.SocialNetworks();
        newSocialNetworks.clear();
        newSocialNetworks.linkedIn = controls['linkedIn'].value;
        newSocialNetworks.facebook = controls['facebook'].value;
        newSocialNetworks.twitter = controls['twitter'].value;
        newSocialNetworks.instagram = controls['instagram'].value;
        this.socialNetworksSubject.next(newSocialNetworks);
        this.loadingSubject.next(false);
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    SocialNetworksComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SocialNetworksComponent.prototype, "loadingSubject", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.BehaviorSubject)
    ], SocialNetworksComponent.prototype, "socialNetworksSubject", void 0);
    SocialNetworksComponent = __decorate([
        core_1.Component({
            selector: 'kt-social-networks',
            template: __webpack_require__(/*! ./social-networks.component.html */ "./src/app/views/pages/user-management/users/_subs/social-networks/social-networks.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_1.AuthService,
            store_1.Store,
            crud_1.LayoutUtilsService])
    ], SocialNetworksComponent);
    return SocialNetworksComponent;
}());
exports.SocialNetworksComponent = SocialNetworksComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/user-roles/user-roles-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/user-roles/user-roles-list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<div class=\"form-group kt-form__group row\" *ngIf=\"unassignedRoles.length > 0\">\r\n\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t<mat-select placeholder=\"Select Role\" [(ngModel)]=\"roleIdForAdding\">\r\n\t\t\t\t\t<mat-option *ngFor=\"let role of unassignedRoles\" value=\"{{ role.id }}\">{{role.title}}</mat-option>\r\n\t\t\t\t</mat-select>\r\n\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t<strong>Select Role</strong>\r\n\t\t\t\t</mat-hint>\r\n\t\t\t</mat-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t<button type=\"button\" mat-raised-button matTooltip=\"Assign role\" (click)=\"assignRole()\" color=\"accent\">\r\n\t\t\t\tAssign\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t<h6 class=\"kt-section__heading\" *ngIf=\"assignedRoles.length > 0\">\r\n\t\tAssigned roles:\r\n\t</h6>\r\n\t<div class=\"form-group kt-form__group row\" *ngIf=\"assignedRoles.length > 0\">\r\n\t\t<div class=\"col-lg-8 kt-margin-bottom-20-mobile\">\r\n\t\t\t<div class=\"kt-list-timeline kt-list-timeline--user-role\">\r\n\t\t\t\t<div class=\"kt-list-timeline__items\">\r\n\t\t\t\t\t<div class=\"kt-list-timeline__item m-0 p-0\" *ngFor=\"let _role of assignedRoles\">\r\n\t\t\t\t\t\t<span class=\"kt-list-timeline__badge kt-list-timeline__badge--primary\"></span>\r\n\t\t\t\t\t\t<span class=\"kt-list-timeline__text\">{{ _role.title }}</span>\r\n\t\t\t\t\t\t<span class=\"kt-list-timeline__time\">\r\n\t\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"Remove role\" type=\"button\" (click)=\"unassingRole(_role)\">\r\n\t\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/user-roles/user-roles-list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/user-roles/user-roles-list.component.ts ***!
  \*************************************************************************************************/
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
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Lodash
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
// Auth
var auth_1 = __webpack_require__(/*! ../../../../../../core/auth */ "./src/app/core/auth/index.ts");
var UserRolesListComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     */
    function UserRolesListComponent(store) {
        this.store = store;
        // Public properties
        // Incoming data
        this.loadingSubject = new rxjs_1.BehaviorSubject(false);
        this.allRoles = [];
        this.unassignedRoles = [];
        this.assignedRoles = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserRolesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allUserRoles$ = this.store.pipe(store_1.select(auth_1.selectAllRoles));
        this.allUserRoles$.subscribe(function (res) {
            lodash_1.each(res, function (_role) {
                _this.allRoles.push(_role);
                _this.unassignedRoles.push(_role);
            });
            lodash_1.each(_this.rolesSubject.value, function (roleId) {
                var role = lodash_1.find(_this.allRoles, function (_role) {
                    return _role.id === roleId;
                });
                if (role) {
                    _this.assignedRoles.push(role);
                    lodash_1.remove(_this.unassignedRoles, role);
                }
            });
        });
    };
    /**
     * Assign role
     */
    UserRolesListComponent.prototype.assignRole = function () {
        var _this = this;
        if (this.roleIdForAdding === 0) {
            return;
        }
        var role = lodash_1.find(this.allRoles, function (_role) {
            return _role.id === (+_this.roleIdForAdding);
        });
        if (role) {
            this.assignedRoles.push(role);
            lodash_1.remove(this.unassignedRoles, role);
            this.roleIdForAdding = 0;
            this.updateRoles();
        }
    };
    /**
     * Unassign role
     *
     * @param role: Role
     */
    UserRolesListComponent.prototype.unassingRole = function (role) {
        this.roleIdForAdding = 0;
        this.unassignedRoles.push(role);
        lodash_1.remove(this.assignedRoles, role);
        this.updateRoles();
    };
    /**
     * Update roles
     */
    UserRolesListComponent.prototype.updateRoles = function () {
        var _roles = [];
        lodash_1.each(this.assignedRoles, function (elem) { return _roles.push(elem.id); });
        this.rolesSubject.next(_roles);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserRolesListComponent.prototype, "loadingSubject", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.BehaviorSubject)
    ], UserRolesListComponent.prototype, "rolesSubject", void 0);
    UserRolesListComponent = __decorate([
        core_1.Component({
            selector: 'kt-user-roles-list',
            template: __webpack_require__(/*! ./user-roles-list.component.html */ "./src/app/views/pages/user-management/users/_subs/user-roles/user-roles-list.component.html")
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], UserRolesListComponent);
    return UserRolesListComponent;
}());
exports.UserRolesListComponent = UserRolesListComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/user-edit/user-edit.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/user-edit/user-edit.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<kt-portlet-header [title]=\"getComponentTitle()\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<a [routerLink]=\"['../../']\" class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button matTooltip=\"Back to the users list\">\r\n\t\t\t\t<i class=\"la la-arrow-left\"></i>\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Back</span>\r\n\t\t\t</a>\r\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-secondary kt-margin-r-10\" (click)=\"reset()\" [disabled]=\"selectedTab !== 0\" mat-raised-button matTooltip=\"Reset changes\">\r\n\t\t\t\t<i class=\"la la-cog\"></i>\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Reset</span>\r\n\t\t\t</a>\r\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSumbit(false)\" mat-raised-button matTooltip=\"Save & Continue\">\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Save</span>\r\n\t\t\t</a>\r\n\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" color=\"primary\">\r\n\t\t\t\t<mat-icon>more_vert</mat-icon>\r\n\t\t\t</button>\r\n\t\t\t<mat-menu #menu=\"matMenu\">\r\n\t\t\t\t<button mat-menu-item color=\"primary\" (click)=\"onSumbit(true)\">Save & Exit</button>\r\n\t\t\t\t<button mat-menu-item color=\"primary\">Save & Duplicate</button>\r\n\t\t\t\t<button mat-menu-item color=\"primary\" (click)=\"onSumbit(false)\">Save & Continue</button>\r\n\t\t\t</mat-menu>\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\r\n\t<kt-portlet-body>\r\n\t\t<mat-tab-group [(selectedIndex)]=\"selectedTab\">\r\n\t\t\t<mat-tab>\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user\"></i>\r\n\t\t\t\t\tBasic info\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<!--begin::Form-->\r\n\t\t\t\t\t<div *ngIf=\"user\">\r\n\t\t\t\t\t\t<form [formGroup]=\"userForm\" class=\"kt-form kt-form--group-seperator-dashed\">\r\n\r\n\t\t\t\t\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\" (close)=\"onAlertClose($event)\">\r\n\t\t\t\t\t\t\t\tOh snap! Change a few things up and try submitting again.\r\n\t\t\t\t\t\t\t</kt-alert>\r\n\t\t\t\t\t\t\t<div class=\"kt-form__section kt-form__section--first\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter Username\" formControlName=\"username\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-error>Username is\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Username</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter Full Name\" formControlName=\"fullname\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-error>Full Name is\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Full Name</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" matInput placeholder=\"Enter Email\" formControlName=\"email\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-error>Email is\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Email</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter Occupation\" formControlName=\"occupation\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Occupation</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter Company Name\" formControlName=\"companyName\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Company Name</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter Phone\" formControlName=\"phone\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Phone</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--end::Form-->\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab [disabled]=\"!user || !user.id\">\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-address-book\"></i>\r\n\t\t\t\t\tUser address\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<kt-address [(addressSubject)]=\"addressSubject\"></kt-address>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab [disabled]=\"!user || !user.id\">\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fab fa-facebook\"></i>\r\n\t\t\t\t\tSocial Nerworks\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<kt-social-networks [(socialNetworksSubject)]=\"soicialNetworksSubject\"></kt-social-networks>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab *ngIf=\"user\" [disabled]=\"!user || !user.id\">\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-unlock\"></i>\r\n\t\t\t\t\tUser roles\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<kt-user-roles-list [(rolesSubject)]=\"rolesSubject\"></kt-user-roles-list>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab *ngIf=\"user\" [disabled]=\"!user || !user.id\">\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\r\n\t\t\t\t\tChange password\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<kt-change-password [userId]=\"user.id\"></kt-change-password>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\t\t</mat-tab-group>\r\n\t</kt-portlet-body>\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/user-edit/user-edit.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/user-edit/user-edit.component.ts ***!
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Layout
var layout_1 = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
var crud_1 = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
// Services and Models
var auth_1 = __webpack_require__(/*! ../../../../../core/auth */ "./src/app/core/auth/index.ts");
var UserEditComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param activatedRoute: ActivatedRoute
     * @param router: Router
     * @param userFB: FormBuilder
     * @param subheaderService: SubheaderService
     * @param layoutUtilsService: LayoutUtilsService
     * @param store: Store<AppState>
     * @param layoutConfigService: LayoutConfigService
     */
    function UserEditComponent(activatedRoute, router, userFB, subheaderService, layoutUtilsService, store, layoutConfigService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userFB = userFB;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.store = store;
        this.layoutConfigService = layoutConfigService;
        this.selectedTab = 0;
        this.rolesSubject = new rxjs_1.BehaviorSubject([]);
        this.addressSubject = new rxjs_1.BehaviorSubject(new auth_1.Address());
        this.soicialNetworksSubject = new rxjs_1.BehaviorSubject(new auth_1.SocialNetworks());
        this.hasFormErrors = false;
        // Private properties
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading$ = this.store.pipe(store_1.select(auth_1.selectUsersActionLoading));
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id && id > 0) {
                _this.store.pipe(store_1.select(auth_1.selectUserById(id))).subscribe(function (res) {
                    if (res) {
                        _this.user = res;
                        _this.rolesSubject.next(_this.user.roles);
                        _this.addressSubject.next(_this.user.address);
                        _this.soicialNetworksSubject.next(_this.user.socialNetworks);
                        _this.oldUser = Object.assign({}, _this.user);
                        _this.initUser();
                    }
                });
            }
            else {
                _this.user = new auth_1.User();
                _this.user.clear();
                _this.rolesSubject.next(_this.user.roles);
                _this.addressSubject.next(_this.user.address);
                _this.soicialNetworksSubject.next(_this.user.socialNetworks);
                _this.oldUser = Object.assign({}, _this.user);
                _this.initUser();
            }
        });
        this.subscriptions.push(routeSubscription);
    };
    UserEditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    /**
     * Init user
     */
    UserEditComponent.prototype.initUser = function () {
        this.createForm();
        if (!this.user.id) {
            this.subheaderService.setTitle('Create user');
            this.subheaderService.setBreadcrumbs([
                { title: 'User Management', page: "user-management" },
                { title: 'Users', page: "user-management/users" },
                { title: 'Create user', page: "user-management/users/add" }
            ]);
            return;
        }
        this.subheaderService.setTitle('Edit user');
        this.subheaderService.setBreadcrumbs([
            { title: 'User Management', page: "user-management" },
            { title: 'Users', page: "user-management/users" },
            { title: 'Edit user', page: "user-management/users/edit", queryParams: { id: this.user.id } }
        ]);
    };
    /**
     * Create form
     */
    UserEditComponent.prototype.createForm = function () {
        this.userForm = this.userFB.group({
            username: [this.user.username, forms_1.Validators.required],
            fullname: [this.user.fullname, forms_1.Validators.required],
            email: [this.user.email, forms_1.Validators.email],
            phone: [this.user.phone],
            companyName: [this.user.companyName],
            occupation: [this.user.occupation]
        });
    };
    /**
     * Redirect to list
     *
     */
    UserEditComponent.prototype.goBackWithId = function () {
        var url = this.layoutConfigService.getCurrentMainRoute() + "/user-management/users";
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    /**
     * Refresh user
     *
     * @param isNew: boolean
     * @param id: number
     */
    UserEditComponent.prototype.refreshUser = function (isNew, id) {
        if (isNew === void 0) { isNew = false; }
        if (id === void 0) { id = 0; }
        var url = this.router.url;
        if (!isNew) {
            this.router.navigate([url], { relativeTo: this.activatedRoute });
            return;
        }
        url = this.layoutConfigService.getCurrentMainRoute() + "/user-management/users/edit/" + id;
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    /**
     * Reset
     */
    UserEditComponent.prototype.reset = function () {
        this.user = Object.assign({}, this.oldUser);
        this.createForm();
        this.hasFormErrors = false;
        this.userForm.markAsPristine();
        this.userForm.markAsUntouched();
        this.userForm.updateValueAndValidity();
    };
    /**
     * Save data
     *
     * @param withBack: boolean
     */
    UserEditComponent.prototype.onSumbit = function (withBack) {
        if (withBack === void 0) { withBack = false; }
        this.hasFormErrors = false;
        var controls = this.userForm.controls;
        /** check form */
        if (this.userForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            this.selectedTab = 0;
            return;
        }
        var editedUser = this.prepareUser();
        if (editedUser.id > 0) {
            this.updateUser(editedUser, withBack);
            return;
        }
        this.addUser(editedUser, withBack);
    };
    /**
     * Returns prepared data for save
     */
    UserEditComponent.prototype.prepareUser = function () {
        var controls = this.userForm.controls;
        var _user = new auth_1.User();
        _user.clear();
        _user.roles = this.rolesSubject.value;
        _user.address = this.addressSubject.value;
        _user.socialNetworks = this.soicialNetworksSubject.value;
        _user.accessToken = this.user.accessToken;
        _user.refreshToken = this.user.refreshToken;
        _user.pic = this.user.pic;
        _user.id = this.user.id;
        _user.username = controls['username'].value;
        _user.email = controls['email'].value;
        _user.fullname = controls['fullname'].value;
        _user.occupation = controls['occupation'].value;
        _user.phone = controls['phone'].value;
        _user.companyName = controls['companyName'].value;
        _user.password = this.user.password;
        return _user;
    };
    /**
     * Add User
     *
     * @param _user: User
     * @param withBack: boolean
     */
    UserEditComponent.prototype.addUser = function (_user, withBack) {
        var _this = this;
        if (withBack === void 0) { withBack = false; }
        this.store.dispatch(new auth_1.UserOnServerCreated({ user: _user }));
        var addSubscription = this.store.pipe(store_1.select(auth_1.selectLastCreatedUserId)).subscribe(function (newId) {
            var message = "New user successfully has been added.";
            _this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Create, 5000, true, true);
            if (newId) {
                if (withBack) {
                    _this.goBackWithId();
                }
                else {
                    _this.refreshUser(true, newId);
                }
            }
        });
        this.subscriptions.push(addSubscription);
    };
    /**
     * Update user
     *
     * @param _user: User
     * @param withBack: boolean
     */
    UserEditComponent.prototype.updateUser = function (_user, withBack) {
        // Update User
        // tslint:disable-next-line:prefer-const
        if (withBack === void 0) { withBack = false; }
        var updatedUser = {
            id: _user.id,
            changes: _user
        };
        this.store.dispatch(new auth_1.UserUpdated({ partialUser: updatedUser, user: _user }));
        var message = "User successfully has been saved.";
        this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Update, 5000, true, true);
        if (withBack) {
            this.goBackWithId();
        }
        else {
            this.refreshUser(false);
        }
    };
    /**
     * Returns component title
     */
    UserEditComponent.prototype.getComponentTitle = function () {
        var result = 'Create user';
        if (!this.user || !this.user.id) {
            return result;
        }
        result = "Edit user - " + this.user.fullname;
        return result;
    };
    /**
     * Close Alert
     *
     * @param $event: Event
     */
    UserEditComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    UserEditComponent = __decorate([
        core_1.Component({
            selector: 'kt-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/views/pages/user-management/users/user-edit/user-edit.component.html"),
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            forms_1.FormBuilder,
            layout_1.SubheaderService,
            crud_1.LayoutUtilsService,
            store_1.Store,
            layout_1.LayoutConfigService])
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/users-list/users-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/users-list/users-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<kt-portlet-header [title]=\"'Users list'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"dataSource.loading$\">\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button [routerLink]=\"['../users/add']\" mat-raised-button color=\"primary\" matTooltip=\"Create new User\">New user</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<!-- start::Body (attribute: ktPortletBody) -->\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Search user\" #searchInput placeholder=\"Search\">\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>Search</strong> in all fields\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\r\n\t\t\t<!-- start::GROUP ACTIONS -->\r\n\t\t\t<!-- Group actions list: 'Delete selected' | 'Fetch selected' | 'Update status for selected' -->\r\n\t\t\t<!-- Group actions are shared for all LISTS -->\r\n\t\t\t<div class=\"row align-items-center collapse kt-form__group-actions kt-margin-top-20 kt-margin-bottom-20\"\r\n\t\t\t\t[ngClass]=\"{'show' : selection.selected.length > 0}\"><!-- We show 'Group Actions' div if smth are selected -->\r\n\t\t\t\t<div class=\"col-xl-12\">\r\n\t\t\t\t\t<div class=\"kt-form__group kt-form__group--inline\">\r\n\t\t\t\t\t\t<div class=\"kt-form__label kt-form__label-no-wrap\">\r\n\t\t\t\t\t\t\t<label class=\"kt--font-bold kt-font-danger-\">\r\n\t\t\t\t\t\t\t\t<span translate=\"ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT\"></span> {{ selection.selected.length }}\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<!-- selectedCountsTitle => function from codeBehind (users-list.component.ts file) -->\r\n\t\t\t\t\t\t\t<!-- selectedCountsTitle => just returns title of selected items count -->\r\n\t\t\t\t\t\t\t<!-- for example: Selected records count: 4 -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-form__control kt-form__group--inline\">\r\n\t\t\t\t\t\t\t<button (click)=\"fetchUsers()\" mat-raised-button matTooltip=\"Fetch selected users\"  class=\"mat-button-mt-4\">\r\n\t\t\t\t\t\t\t\t<mat-icon>clear_all</mat-icon>\r\n\t\t\t\t\t\t\t\tFetch Selected\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::GROUP ACTIONS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\"\r\n\t\t\t\t#table\r\n\t\t\t\t[dataSource]=\"dataSource\"\r\n\t\t\t\tmatSort\r\n\t\t\t\t#sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"id\"\r\n\t\t\t\tmatSortDirection=\"asc\"\r\n\t\t\t\tmatSortDisableClear>\r\n\t\t\t\t<!-- Checkbox Column -->\r\n\r\n\t\t\t\t<!-- Table with selection -->\r\n\t\t\t\t<!-- https://run.stackblitz.com/api/angular/v1?file=app%2Ftable-selection-example.ts -->\r\n\t\t\t\t<ng-container matColumnDef=\"select\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n\t\t\t\t\t\t\t[checked]=\"selection.hasValue() && isAllSelected()\"\r\n\t\t\t\t\t\t\t[indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\" class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.id}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"username\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Username</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.username}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"email\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Email</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\" class=\"email-cell\">\r\n\t\t\t\t\t\t<a href=\"user-management/users#\" class=\"kt-link\">{{user.email}}</a>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"fullname\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Full name</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.fullname}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"_roles\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Roles</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">\r\n\t\t\t\t\t\t<span>{{ getUserRolesStr(user) }}</span>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">\r\n\t\t\t\t\t\t<button (click)=\"editUser(user.id)\" mat-icon-button color=\"primary\" matTooltip=\"Edit user\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"Delete user\" type=\"button\" (click)=\"deleteUser(user)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.hasItems\">No records found</div><!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"dataSource.isPreloadTextViewed$ | async\">Please wait....</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[3, 5, 10]\" [length]=\"dataSource.paginatorTotal$ | async\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/users-list/users-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/users-list/users-list.component.ts ***!
  \**************************************************************************************/
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
var collections_1 = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// RXJS
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// LODASH
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Services
var crud_1 = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
// Models
var auth_1 = __webpack_require__(/*! ../../../../../core/auth */ "./src/app/core/auth/index.ts");
var layout_1 = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var UsersListComponent = /** @class */ (function () {
    /**
     *
     * @param activatedRoute: ActivatedRoute
     * @param store: Store<AppState>
     * @param router: Router
     * @param layoutUtilsService: LayoutUtilsService
     * @param subheaderService: SubheaderService
     */
    function UsersListComponent(activatedRoute, store, router, layoutUtilsService, subheaderService, cdr) {
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.router = router;
        this.layoutUtilsService = layoutUtilsService;
        this.subheaderService = subheaderService;
        this.cdr = cdr;
        this.displayedColumns = ['select', 'id', 'username', 'email', 'fullname', '_roles', 'actions'];
        // Selection
        this.selection = new collections_1.SelectionModel(true, []);
        this.usersResult = [];
        this.allRoles = [];
        // Subscriptions
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // load roles list
        var rolesSubscription = this.store.pipe(store_1.select(auth_1.selectAllRoles)).subscribe(function (res) { return _this.allRoles = res; });
        this.subscriptions.push(rolesSubscription);
        // If the user changes the sort order, reset back to the first page.
        var sortSubscription = this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        this.subscriptions.push(sortSubscription);
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        var paginatorSubscriptions = rxjs_1.merge(this.sort.sortChange, this.paginator.page).pipe(operators_1.tap(function () {
            _this.loadUsersList();
        }))
            .subscribe();
        this.subscriptions.push(paginatorSubscriptions);
        // Filtration, bind to searchInput
        var searchSubscription = rxjs_1.fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
        // tslint:disable-next-line:max-line-length
        operators_1.debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        operators_1.distinctUntilChanged(), // This operator will eliminate duplicate values
        operators_1.tap(function () {
            _this.paginator.pageIndex = 0;
            _this.loadUsersList();
        }))
            .subscribe();
        this.subscriptions.push(searchSubscription);
        // Set title to page breadCrumbs
        this.subheaderService.setTitle('User management');
        // Init DataSource
        this.dataSource = new auth_1.UsersDataSource(this.store);
        var entitiesSubscription = this.dataSource.entitySubject.pipe(operators_1.skip(1), operators_1.distinctUntilChanged()).subscribe(function (res) {
            _this.usersResult = res;
        });
        this.subscriptions.push(entitiesSubscription);
        // First Load
        rxjs_1.of(undefined).pipe(operators_1.take(1), operators_1.delay(1000)).subscribe(function () {
            _this.loadUsersList();
        });
    };
    /**
     * On Destroy
     */
    UsersListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load users list
     */
    UsersListComponent.prototype.loadUsersList = function () {
        this.selection.clear();
        var queryParams = new crud_1.QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        this.store.dispatch(new auth_1.UsersPageRequested({ page: queryParams }));
        this.selection.clear();
    };
    /** FILTRATION */
    UsersListComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value;
        filter.lastName = searchText;
        filter.username = searchText;
        filter.email = searchText;
        filter.fillname = searchText;
        return filter;
    };
    /** ACTIONS */
    /**
     * Delete user
     *
     * @param _item: User
     */
    UsersListComponent.prototype.deleteUser = function (_item) {
        var _this = this;
        var _title = 'User Delete';
        var _description = 'Are you sure to permanently delete this user?';
        var _waitDesciption = 'User is deleting...';
        var _deleteMessage = "User has been deleted";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.store.dispatch(new auth_1.UserDeleted({ id: _item.id }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
        });
    };
    /**
     * Fetch selected rows
     */
    UsersListComponent.prototype.fetchUsers = function () {
        var messages = [];
        this.selection.selected.forEach(function (elem) {
            messages.push({
                text: elem.fullname + ", " + elem.email,
                id: elem.id.toString(),
                status: elem.username
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    };
    /**
     * Check all rows are selected
     */
    UsersListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.usersResult.length;
        return numSelected === numRows;
    };
    /**
     * Toggle selection
     */
    UsersListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.selection.selected.length === this.usersResult.length) {
            this.selection.clear();
        }
        else {
            this.usersResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    /* UI */
    /**
     * Returns user roles string
     *
     * @param user: User
     */
    UsersListComponent.prototype.getUserRolesStr = function (user) {
        var _this = this;
        var titles = [];
        lodash_1.each(user.roles, function (roleId) {
            var _role = lodash_1.find(_this.allRoles, function (role) { return role.id === roleId; });
            if (_role) {
                titles.push(_role.title);
            }
        });
        return titles.join(', ');
    };
    /**
     * Redirect to edit page
     *
     * @param id
     */
    UsersListComponent.prototype.editUser = function (id) {
        this.router.navigate(['../users/edit', id], { relativeTo: this.activatedRoute });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], UsersListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('sort1'),
        __metadata("design:type", material_1.MatSort)
    ], UsersListComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], UsersListComponent.prototype, "searchInput", void 0);
    UsersListComponent = __decorate([
        core_1.Component({
            selector: 'kt-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/views/pages/user-management/users/users-list/users-list.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            store_1.Store,
            router_1.Router,
            crud_1.LayoutUtilsService,
            layout_1.SubheaderService,
            core_1.ChangeDetectorRef])
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;


/***/ })

}]);
//# sourceMappingURL=app-views-pages-user-management-user-management-module.js.map