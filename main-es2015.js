(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"jumbo\">\r\n  <h1>Starbound - Outfit Generator</h1>\r\n  <div>\r\n    <a href=\"https://github.com/Silverfeelin/Starbound-NgOutfitGenerator\">Go to repository</a>\r\n  </div>\r\n  <img>\r\n</div>\r\n<notifier-container></notifier-container>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/input/image-input/image-input.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/input/image-input/image-input.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input #input type=\"file\" class=\"form-control-file\" (click)=\"clearOld()\" (change)=\"fileChange($event)\">\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/dashboard/dashboard.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/dashboard/dashboard.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <ngb-tabset (tabChange)=\"beforeChange($event)\" [justify]=\"'fill'\" [activeId]=\"'tabChest'\">\r\n    <ngb-tab id=\"tabHat\">\r\n      <ng-template ngbTabTitle>Hat</ng-template>\r\n      <ng-template ngbTabContent>\r\n        <div class=\"tab-content\">\r\n          <app-tab-hat></app-tab-hat>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab id=\"tabChest\">\r\n      <ng-template ngbTabTitle>Chest</ng-template>\r\n      <ng-template ngbTabContent>\r\n        <div class=\"tab-content\">\r\n          <app-tab-chest></app-tab-chest>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab id=\"tabPants\">\r\n      <ng-template ngbTabTitle>Pants</ng-template>\r\n      <ng-template ngbTabContent>\r\n        <div class=\"tab-content\">\r\n          <app-tab-pants></app-tab-pants>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab id=\"tabBack\">\r\n      <ng-template ngbTabTitle>Back</ng-template>\r\n      <ng-template ngbTabContent>\r\n        <div class=\"tab-content\">\r\n          <app-tab-back></app-tab-back>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/tab/tab-back/tab-back.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/tab/tab-back/tab-back.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-4 offset-lg-4\">\r\n    <div class=\"card h-100\">\r\n      <div class=\"card-header\">\r\n        Back\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <app-image-input (imageLoaded)=\"imageLoaded($event)\" (imageCleared)=\"imageCleared()\"\r\n          (imageError)=\"imageError($event)\"></app-image-input>\r\n        <br />\r\n        <div class=\"preview preview-back\">\r\n          <img *ngIf=\"imageModel\" [src]=\"imageModel.dataUrl\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row top-10\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Actions\r\n      </div>\r\n      <div class=\"card-body actions\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"generate()\">Generate</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row top-10\">\r\n  <div class=\"col-lg-12\">\r\n    <app-file-template-container [templates]=\"fileTemplates\"></app-file-template-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/tab/tab-chest/tab-chest.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/tab/tab-chest/tab-chest.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- Front sleeves -->\r\n  <div class=\"col-lg-4\">\r\n    <div class=\"card h-100\">\r\n      <div class=\"card-header\">\r\n        Front sleeves\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <app-image-input (imageLoaded)=\"imageLoaded($event, 'frontSleeves')\"\r\n          (imageCleared)=\"imageCleared('frontSleeves')\" (imageError)=\"imageError($event, 'frontSleeves')\">\r\n        </app-image-input>\r\n        <br />\r\n        <div class=\"preview preview-sleeves\">\r\n          <img *ngIf=\"images.frontSleeves\" [src]=\"images.frontSleeves.dataUrl\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Chest -->\r\n  <div class=\"col-lg-4\">\r\n    <div class=\"card h-100\">\r\n      <div class=\"card-header\">\r\n        Chest\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <app-image-input (imageLoaded)=\"imageLoaded($event, 'chest')\" (imageCleared)=\"imageCleared('chest')\"\r\n          (imageError)=\"imageError($event, 'chest')\"></app-image-input>\r\n        <br />\r\n        <div class=\"preview preview-chest\">\r\n          <img *ngIf=\"images.chest\" [src]=\"images.chest.dataUrl\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Back sleeves -->\r\n  <div class=\"col-lg-4\">\r\n    <div class=\"card h-100\">\r\n      <div class=\"card-header\">\r\n        Back sleeves\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <app-image-input (imageLoaded)=\"imageLoaded($event, 'backSleeves')\" (imageCleared)=\"imageCleared('backSleeves')\"\r\n          (imageError)=\"imageError($event, 'backSleeves')\"></app-image-input>\r\n        <br />\r\n        <div class=\"preview preview-sleeves\">\r\n          <img *ngIf=\"images.backSleeves\" [src]=\"images.backSleeves.dataUrl\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row top-10\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Actions\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"generate()\">Generate</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row top-10\">\r\n  <div class=\"col-lg-12\">\r\n    <app-file-template-container [templates]=\"fileTemplates\"></app-file-template-container>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/tab/tab-hat/tab-hat.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/tab/tab-hat/tab-hat.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Please use the\r\n    <a href=\"https://silverfeelin.github.io/Starbound-Hatter/\" target=\"_blank\">Hatter</a>\r\n    to generate hats.\r\n  </p>\r\n\r\n  <iframe width=\"100%\" height=\"1000\" src=\"https://silverfeelin.github.io/Starbound-Hatter/\"></iframe>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/tab/tab-pants/tab-pants.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/tab/tab-pants/tab-pants.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- Legs -->\r\n  <div class=\"col-lg-4 offset-lg-4\">\r\n    <div class=\"card h-100\">\r\n      <div class=\"card-header\">\r\n        Pants\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <app-image-input (imageLoaded)=\"imageLoaded($event)\" (imageCleared)=\"imageCleared()\"\r\n          (imageError)=\"imageError($event)\"></app-image-input>\r\n        <br />\r\n        <div class=\"preview preview-pants\">\r\n          <img *ngIf=\"imageModel\" [src]=\"imageModel.dataUrl\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row top-10\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Actions\r\n      </div>\r\n      <div class=\"card-body actions\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"generateNormal()\">Generate (normal)</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"generateHiding()\">Generate (hide body)</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row top-10\">\r\n  <div class=\"col-lg-12\">\r\n    <app-file-template-container [templates]=\"fileTemplates\"></app-file-template-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/template/file-template-container/file-template-container.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/template/file-template-container/file-template-container.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    {{ title || 'Templates' }}\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\" *ngFor=\"let template of templates\">\r\n        <div class=\"card\">\r\n          <img [src]=\"template.asset\" class=\"card-img-top\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{template.title}}</h5>\r\n            <p class=\"card-text\">{{template.description}}</p>\r\n            <div class=\"buttons btn-group inline bottom-5\">\r\n              <a [href]=\"template.asset\" [download]=\"fileName(template.asset)\" class=\"btn btn-secondary\">Download PNG</a>\r\n              <a *ngIf=\"template.pdn\" [href]=\"template.pdn\" [download]=\"fileName(template.pdn)\" class=\"btn btn-secondary\">Download PDN</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _root_layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @root/layout/dashboard/dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");




const routes = [
    {
        path: '',
        children: [
            { path: '', component: _root_layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-top: 10px;\n}\n.jumbo {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.jumbo > img {\n  width: 90%;\n  height: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzovVXNlcnMvU2lsdmVyL0RvY3VtZW50cy9HaXRIdWIvU3RhcmJvdW5kLU5nT3V0Zml0R2VuZXJhdG9yL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQUY7QURGQTtFQUtJLFVBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5qdW1ibyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICA+IGltZyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbiIsImgxIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5qdW1ibyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5qdW1ibyA+IGltZyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'NgOutfitGenerator';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/dashboard/dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _input_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input/image-input/image-input.component */ "./src/app/input/image-input/image-input.component.ts");
/* harmony import */ var _layout_tab_tab_back_tab_back_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/tab/tab-back/tab-back.component */ "./src/app/layout/tab/tab-back/tab-back.component.ts");
/* harmony import */ var _layout_tab_tab_chest_tab_chest_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/tab/tab-chest/tab-chest.component */ "./src/app/layout/tab/tab-chest/tab-chest.component.ts");
/* harmony import */ var _layout_tab_tab_pants_tab_pants_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/tab/tab-pants/tab-pants.component */ "./src/app/layout/tab/tab-pants/tab-pants.component.ts");
/* harmony import */ var _layout_tab_tab_hat_tab_hat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/tab/tab-hat/tab-hat.component */ "./src/app/layout/tab/tab-hat/tab-hat.component.ts");
/* harmony import */ var _event_notifier_error_handler_notifier_error_handler_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./event/notifier-error-handler/notifier-error-handler.component */ "./src/app/event/notifier-error-handler/notifier-error-handler.component.ts");
/* harmony import */ var _layout_template_file_template_container_file_template_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/template/file-template-container/file-template-container.component */ "./src/app/layout/template/file-template-container/file-template-container.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            _input_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_8__["ImageInputComponent"],
            _layout_tab_tab_back_tab_back_component__WEBPACK_IMPORTED_MODULE_9__["TabBackComponent"],
            _layout_tab_tab_chest_tab_chest_component__WEBPACK_IMPORTED_MODULE_10__["TabChestComponent"],
            _layout_tab_tab_pants_tab_pants_component__WEBPACK_IMPORTED_MODULE_11__["TabPantsComponent"],
            _layout_tab_tab_hat_tab_hat_component__WEBPACK_IMPORTED_MODULE_12__["TabHatComponent"],
            _layout_template_file_template_container_file_template_container_component__WEBPACK_IMPORTED_MODULE_14__["FileTemplateContainerComponent"]
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierModule"].withConfig({
                position: {
                    horizontal: { position: 'right' },
                    vertical: { position: 'top' }
                }
            }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: _event_notifier_error_handler_notifier_error_handler_component__WEBPACK_IMPORTED_MODULE_13__["NotifierErrorHandler"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/event/notifier-error-handler/notifier-error-handler.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/event/notifier-error-handler/notifier-error-handler.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NotifierErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierErrorHandler", function() { return NotifierErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");


class NotifierErrorHandler extends _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"] {
    constructor(notifierService) {
        super();
        this.notifierService = notifierService;
    }
    handleError(error) {
        this.notifierService.notify('error', error);
        console.error(error);
    }
}
NotifierErrorHandler.ctorParameters = () => [
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierService"] }
];


/***/ }),

/***/ "./src/app/helpers/directives-helper.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/directives-helper.ts ***!
  \**********************************************/
/*! exports provided: DirectivesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesHelper", function() { return DirectivesHelper; });
class DirectivesHelper {
    static toReplace(palette, omitReplace = false) {
        let s = omitReplace ? '' : '?replace';
        Object.keys(palette).forEach(key => {
            s += `;${key}=${palette[key]}`;
        });
        return s;
    }
}


/***/ }),

/***/ "./src/app/helpers/file-helper.ts":
/*!****************************************!*\
  !*** ./src/app/helpers/file-helper.ts ***!
  \****************************************/
/*! exports provided: FileHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHelper", function() { return FileHelper; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);


class FileHelper {
    static readFileAsDataURL(file) {
        const subj = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        const reader = new FileReader();
        reader.onload = (e) => {
            subj.next(e.target.result);
            subj.complete();
        };
        reader.readAsDataURL(file);
        return subj;
    }
    static saveText(text, fileName) {
        const blob = new Blob([text], { type: 'application/json;charset=utf-8' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, fileName);
    }
}


/***/ }),

/***/ "./src/app/helpers/image-helper.ts":
/*!*****************************************!*\
  !*** ./src/app/helpers/image-helper.ts ***!
  \*****************************************/
/*! exports provided: ImageHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageHelper", function() { return ImageHelper; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var upng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! upng-js */ "./node_modules/upng-js/UPNG.js");
/* harmony import */ var upng_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(upng_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _root_helpers_file_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/helpers/file-helper */ "./src/app/helpers/file-helper.ts");



class ImageHelper {
    static fromBase64(base64) {
        if (base64.substr(0, 4) === 'data') {
            base64 = base64.substr(22);
        }
        const arr = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
        return Object(upng_js__WEBPACK_IMPORTED_MODULE_1__["decode"])(arr);
    }
    static fromFile(file) {
        return _root_helpers_file_helper__WEBPACK_IMPORTED_MODULE_2__["FileHelper"].readFileAsDataURL(file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => ImageHelper.fromBase64(data)));
    }
    static toColorTable(image, options) {
        options = options || {};
        const buffer = Object(upng_js__WEBPACK_IMPORTED_MODULE_1__["toRGBA8"])(image)[0];
        const view = new Uint8Array(buffer);
        const rows = [];
        let i = 0;
        for (let y = 0; y < image.height; y++) {
            rows.push([]);
            for (let x = 0; x < image.width; x++) {
                const pixel = [view[i++], view[i++], view[i++], view[i++]];
                if (options.skipTransparent && pixel[3] === 0) {
                    rows[y].push(undefined);
                    continue;
                }
                const hex = this.toHex(pixel);
                rows[y].push(hex);
            }
        }
        return rows;
    }
    /**
     * Converts an [r,g,b] or [r,g,b,a] byte array to a hexadecimal color code.
     * Colors are compressed whenever possible.
     */
    static toHex(bytes) {
        const cp = [...bytes];
        if (cp[3] === 255) {
            delete cp[3];
        }
        const shorten = cp.every(b => (b / 17) % 1 === 0);
        const s = cp.map(n => `0${n.toString(16)}`.slice(shorten ? -1 : -2)).join('');
        return s;
    }
    static difference(from, to) {
        const swaps = {};
        from.forEach((row, y) => {
            row.forEach((a, x) => {
                const b = to[y] && to[y][x];
                if (typeof b !== 'string') {
                    return;
                }
                swaps[a] = b;
            });
        });
        return swaps;
    }
}


/***/ }),

/***/ "./src/app/helpers/template-helper.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/template-helper.ts ***!
  \********************************************/
/*! exports provided: TemplateHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateHelper", function() { return TemplateHelper; });
/* harmony import */ var _image_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-helper */ "./src/app/helpers/image-helper.ts");

class TemplateHelper {
    /**
     * Creates a gradient template.
     * @description Each frame is a gradient from `[0, 0]` to `[frameWidth, frameHeight]`.
     * The gradient colors are defined as a hexadecimal color formatted `xxidyy`.
     * Identifiers `xx` and `yy` increment to the right and upwards.
     * Identifier `id` is used from parameter `frames`.
     * @param frameWidth Width of each frame in the template
     * @param frameHeight Height of each frame in the template.
     * @param frames Two-dimensional array `[y][x]` representing the frames to generate. Each value is the identifier of that frame
     * @example
     * create(2, 2, [
     *   [true, false]
     * ]);
     */
    static create(frameWidth, frameHeight, frames) {
        const verticalFrames = frames.length;
        const horizontalFrames = frames[0].length;
        const v = verticalFrames * frameHeight;
        // Build arrray
        const rows = [];
        for (let i = 0; i < v; i++) {
            rows.push([]);
        }
        // For every frame
        for (let w = 0; w < horizontalFrames; w++) {
            for (let h = 0; h < verticalFrames; h++) {
                // Frame identifier
                const id = frames[verticalFrames - 1 - h][w];
                if (!id) {
                    continue;
                }
                // For every pixel in frame
                for (let x = 0; x < frameWidth; x++) {
                    for (let y = 0; y < frameHeight; y++) {
                        const pixel = _image_helper__WEBPACK_IMPORTED_MODULE_0__["ImageHelper"].toHex([x, parseInt(id, 16), y, 0]);
                        rows[v - 1 - (h * frameHeight + y)][w * frameWidth + x] = pixel;
                    }
                }
            }
        }
        return rows;
    }
}


/***/ }),

/***/ "./src/app/helpers/templates.ts":
/*!**************************************!*\
  !*** ./src/app/helpers/templates.ts ***!
  \**************************************/
/*! exports provided: templates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templates", function() { return templates; });
// tslint:disable: max-line-length
const templates = {
    chest: [
        '?scale=0.4?scale=0.7?scale=0.85?scale=0.925?scale=0.9625?scale=0.8?scale=0.8?crop;3;3;4;4?replace;bdcc640b=ffa1ff;bbc9620f=ffa2ff;bdcd620a=ffa3ff;bccb620d=ffa4ff;bccb630d=ffa5ff;aac05e06=ffa6ff;bfc75d1d=ffb1ff;c8d25f11=ffb2ff;c0c85f1c=ffb3ff;cad65f0b=ffb4ff;cbd96008=ffb5ff;9ba75427=ffb6ff;b1a95b48=ffc1ff;bebe5b2f=ffc2ff;c8d16115=ffc3ff;c9d4600e=ffc4ff;c6ce6015=ffc5ff;bec55e1e=ffd1ff;cad5610c=ffd2ff;c9d5600d=ffd3ff;c6d05d11=ffd4ff;c7d25e10=ffd5ff;c9d16112=ffd6ff;c8d45e0d=ffd7ff;9eb05018=ffd8ff;b7b75f33=ffe1ff;bec25e25=ffe2ff;c4c95c1e=ffe3ff;b5b05840=ffe4ff;c2c85f1e=ffe5ff;bcb85f3b=ffe6ff;a0a9562c=ffe7ff;c8d55e0b=fff1ff;a3b9510b=fff2ff;40432222=ff60ff;a2ab501e=ff61ff;979a4d2f=ff62ff;a2ac501c=ff63ff;a0a9501f=ff64ff;9ead4709=ff65ff;c5cb651d=ff66ff;c5cd631a=ff67ff;c1c46524=ff68ff;bdc45c21=ff69ff;c0c46325=ff6aff;b6b46531=ff6bff;c3c7621e=ff6cff;c4ca621c=ff6dff;bdc45c20=ff6eff;c1c8601e=ff6fff;b8bd5b29=ff70ff;55522f23=ff71ff;b4b15f3b=ff72ff;b8be5b29=ff73ff;b3b25e39=ff74ff;a7a85642=ff75ff;a29f544d=ff76ff;a9ab553d=ff77ff;a0a1523a=ff78ff;53522c20=ff79ff;bcc45c20=ff7aff;b8be5b28=ff7bff;c2c7571f=ff7cff;c7cc651b=ff7dff;b9bd5f2c=ff7eff;bcc25f1b=ff7fff;bcc35b21=ff80ff;bfcc5807=ff81ff;2c221d19=fff3ff;9f853e19=fff4ff;8a8d4812=fff5ff;8c954a02=fff7ff;8c8f4a18=fff6ff;8f8f4f1c=fff8ff;46352a36=fff3ff;85703442=fff4ff;8c834737=fff5ff;8c954a05=fff7ff;988e4f3f=fff6ff;8e864d36=fff8ff?scalenearest=1;2?blendmult=/monsters/boss/apeboss/apeboss.png;1263;394?scalenearest=2;1?blendmult=/dungeons/other/wreck/key.png;755;29?multiply=2eff2e00?scale=47?crop;1;1;44;44'
    ],
    pants: [
        '?scale=0.4?scale=0.7?crop;6;2;7;3?replace;a0b03e=ffa1ff00;7e9b35=ffa2ff00;45483887=ffa3ff00;698635ef=ffa4ff00;405e2fe4=ffa5ff00;51362dc0=ffa6ff00;59353091=ffa7ff00;7c9036=ffb1ff00;6d702af4=ffb2ff00;91a638=ffb3ff00;748e37=ffb4ff00;746f2c=ffb5ff00;7a8a31=ffb6ff00;608333=ffb7ff00;8f953a=ffb8ff00;736f2f=ffc1ff00;41373b5d=ffc2ff00;515f38ab=ffc3ff00;788e35=ffc4ff00;6f602f=ffc5ff00;273430ab=ffc6ff00;617e34=ffc7ff00;829935=ffc8ff00;2d173b2e=ffd1ff00;2b243668=ffd2ff00;725830c0=ffd3ff00;7b4d31ca=ffd4ff00;663c2dab=ffd5ff00;5735376d=ffd6ff00;5d3a3877=ffd7ff00;52403496=ffd8ff00;55662dd5=ffe1ff00;8088318c=ffe2ff00;778c34=ffe3ff00;8c7835a1=ffe4ff00;668c3487=ffe5ff00?scalenearest=1;2?blendmult=/monsters/boss/apeboss/apeboss.png;1263;394?scalenearest=2;1?blendmult=/dungeons/other/wreck/key.png;755;29?multiply=2eff2e?scale=47?crop;1;1;44;44'
    ],
    hidingPants: [
        '?scale=0.4?scale=0.7?scale=0.85?crop;6;1;7;2?replace;45572af4=ffa1ff00;4e6530f8=ffa2ff00;4f6631f7=ffa3ff00;445729f7=ffa4ff00;4f6531f5=ffa5ff00;487035fc=ffa6ff00;445e2df8=ffa7ff00;556733f4=ffb1ff00;4a4122f6=ffb2ff00;425929f0=ffb3ff00;3e2f1cb7=ffb4ff00;664d39bb=ffb5ff00;425b2df2=ffb6ff00;54201e7f=ffb7ff00;56322780=ffb8ff00;675831bb=ffc1ff00;5916192a=ffc2ff00;463c20c0=ffc3ff00;36311bb7=ffc4ff00;313c1ebb=ffc5ff00;561b1a29=ffc6ff00;38642bf4=ffc7ff00;60493180=ffc8ff00;415128bb=ffd1ff00;47562ab9=ffd2ff00;4939207f=ffd3ff00;4f432681=ffd4ff00;5a1e1b25=ffd5ff00;5a1e1c25=ffd6ff00;571a1a25=ffd7ff00;62212413=ffd8ff00;29452424=ffe1ff00;96918a25=ffe2ff00;4567347f=ffe3ff00;5a755681=ffe4ff00;427235f3=ffe5ff00?scalenearest=1;2?blendmult=/monsters/boss/apeboss/apeboss.png;1263;394?scalenearest=2;1?blendmult=/dungeons/other/wreck/key.png;755;29?multiply=2eff2e?scale=47?crop;1;1;44;44'
    ],
    back: [
        '?scale=0.4?scale=0.7?scale=0.84?crop;4;2;5;3?replace;aa836459=ffa1ff00;bb885e4e=ffa2ff00;cb926431=ffa3ff00;cb95693b=ffa4ff00;cf91601c=ffa5ff00;ce966b4b=ffa6ff00;e6c2a50c=ffa7ff00;cc93662e=ffb1ff00;cc8c5921=ffb2ff00;c1895c3d=ffb3ff00;bf885c41=ffb4ff00;cb8e5d2d=ffb5ff00;c7895728=ffb6ff00;ac7c5558=ffb7ff00;b8a99d5d=ffb8ff00;d796610f=ffc1ff00;dc955b0a=ffc2ff00;de965b06=ffc3ff00;c3885730=ffc4ff00;d9945b0d=ffc5ff00;dc955b08=ffc6ff00;da945b0a=ffc7ff00;dfbca11e=ffc8ff00;ce8e5b23=ffd1ff00;dc945b06=ffd2ff00;cf8f5b23=ffd3ff00;9d74526f=ffd4ff00;d28f5916=ffd5ff00;de965b02=ffd6ff00;e0975c00=ffd7ff00;ecc3a200=ffd8ff00;d08f5b1e=ffe1ff00;da945b08=ffe2ff00;cd905f2f=ffe3ff00;d8955e14=ffe4ff00;cc8d5920=ffe5ff00;59504932=fff1ff00;655c5509=fff2ff00;7369631b=fff3ff00;756c665a=fff4ff00;62574f32=fff5ff00;877d7782=fff6ff00;63595277=fff7ff00;a19d9959=fff8ff00?scalenearest=1;2?blendmult=/monsters/boss/apeboss/apeboss.png;1263;394?scalenearest=2;1?blendmult=/dungeons/other/wreck/key.png;755;29?multiply=2eff2e?scale=47?crop;1;1;44;44'
    ]
};


/***/ }),

/***/ "./src/app/input/image-input/image-input.component.less":
/*!**************************************************************!*\
  !*** ./src/app/input/image-input/image-input.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0L2ltYWdlLWlucHV0L2ltYWdlLWlucHV0LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/input/image-input/image-input.component.ts":
/*!************************************************************!*\
  !*** ./src/app/input/image-input/image-input.component.ts ***!
  \************************************************************/
/*! exports provided: ImageInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageInputComponent", function() { return ImageInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/helpers/image-helper */ "./src/app/helpers/image-helper.ts");
/* harmony import */ var _root_helpers_file_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @root/helpers/file-helper */ "./src/app/helpers/file-helper.ts");




let ImageInputComponent = class ImageInputComponent {
    constructor() {
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imageError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imageCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    clearOld() {
        this.input.nativeElement.value = '';
    }
    fileChange(event) {
        const files = event.target.files;
        if (!files || files.length === 0) {
            this.imageCleared.emit();
        }
        else {
            _root_helpers_file_helper__WEBPACK_IMPORTED_MODULE_3__["FileHelper"].readFileAsDataURL(files[0]).subscribe({
                next: base64 => {
                    try {
                        const image = _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_2__["ImageHelper"].fromBase64(base64);
                        this.imageLoaded.emit({ image, dataUrl: base64 });
                    }
                    catch (e) {
                        event.target.value = '';
                        this.imageError.emit(e);
                    }
                },
                error: e => {
                    event.target.value = '';
                    this.imageError.emit(e);
                }
            });
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ImageInputComponent.prototype, "imageLoaded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ImageInputComponent.prototype, "imageError", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ImageInputComponent.prototype, "imageCleared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: true })
], ImageInputComponent.prototype, "input", void 0);
ImageInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-input',
        template: __webpack_require__(/*! raw-loader!./image-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/input/image-input/image-input.component.html"),
        styles: [__webpack_require__(/*! ./image-input.component.less */ "./src/app/input/image-input/image-input.component.less")]
    })
], ImageInputComponent);



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.less":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngb-tabset p {\n  margin-top: 5px;\n}\n.tab-content {\n  margin: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9DOi9Vc2Vycy9TaWx2ZXIvRG9jdW1lbnRzL0dpdEh1Yi9TdGFyYm91bmQtTmdPdXRmaXRHZW5lcmF0b3Ivc3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0FDQUY7QURHQTtFQUNFLFlBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG5uZ2ItdGFic2V0IHAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi50YWItY29udGVudCB7XG4gIG1hcmdpbjogMTBweDtcbn1cbiIsIm5nYi10YWJzZXQgcCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi50YWItY29udGVudCB7XG4gIG1hcmdpbjogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() { }
    beforeChange(event) {
        console.log(event);
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.less */ "./src/app/layout/dashboard/dashboard.component.less")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/layout/tab/tab-back/back-descriptor.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/tab/tab-back/back-descriptor.ts ***!
  \********************************************************/
/*! exports provided: backDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backDescriptor", function() { return backDescriptor; });
const backDescriptor = {
    name: 'tigertailback',
    count: 1,
    parameters: {
        shortdescription: 'Custom Back',
        description: 'Made using the Outfit Generator.',
        inventoryIcon: 'back.png:idle.1'
    }
};


/***/ }),

/***/ "./src/app/layout/tab/tab-back/back-file-templates.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/tab/tab-back/back-file-templates.ts ***!
  \************************************************************/
/*! exports provided: backFileTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backFileTemplates", function() { return backFileTemplates; });
const backFileTemplates = [
    {
        asset: 'assets/templates/back/backm.png',
        pdn: 'assets/templates/back/backm.pdn',
        title: 'Back (male)',
        description: 'Back frames file with male body frames.'
    },
    {
        asset: 'assets/templates/back/backf.png',
        pdn: 'assets/templates/back/backf.pdn',
        title: 'Back (female)',
        description: 'Back frames file with female body frames.'
    },
    {
        asset: 'assets/templates/back/back_blank.png',
        title: 'Back (empty)',
        description: 'Empty back frames file.'
    }
];


/***/ }),

/***/ "./src/app/layout/tab/tab-back/tab-back.component.less":
/*!*************************************************************!*\
  !*** ./src/app/layout/tab/tab-back/tab-back.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview {\n  margin: auto;\n  border: 1px solid #ccc;\n  overflow: hidden;\n}\n.preview-back {\n  width: 387px;\n  height: 301px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RhYi90YWItYmFjay9DOi9Vc2Vycy9TaWx2ZXIvRG9jdW1lbnRzL0dpdEh1Yi9TdGFyYm91bmQtTmdPdXRmaXRHZW5lcmF0b3Ivc3JjL2FwcC9sYXlvdXQvdGFiL3RhYi1iYWNrL3RhYi1iYWNrLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvdGFiL3RhYi1iYWNrL3RhYi1iYWNrLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90YWIvdGFiLWJhY2svdGFiLWJhY2suY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJldmlldyB7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJldmlldy1iYWNrIHtcbiAgd2lkdGg6IDM4N3B4O1xuICBoZWlnaHQ6IDMwMXB4O1xufVxuIiwiLnByZXZpZXcge1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJldmlldy1iYWNrIHtcbiAgd2lkdGg6IDM4N3B4O1xuICBoZWlnaHQ6IDMwMXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/tab/tab-back/tab-back.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/tab/tab-back/tab-back.component.ts ***!
  \***********************************************************/
/*! exports provided: TabBackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBackComponent", function() { return TabBackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _back_file_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-file-templates */ "./src/app/layout/tab/tab-back/back-file-templates.ts");
/* harmony import */ var _back_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./back-descriptor */ "./src/app/layout/tab/tab-back/back-descriptor.ts");
/* harmony import */ var _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @root/helpers/image-helper */ "./src/app/helpers/image-helper.ts");
/* harmony import */ var _root_helpers_template_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @root/helpers/template-helper */ "./src/app/helpers/template-helper.ts");
/* harmony import */ var _root_helpers_directives_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @root/helpers/directives-helper */ "./src/app/helpers/directives-helper.ts");
/* harmony import */ var _root_helpers_file_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @root/helpers/file-helper */ "./src/app/helpers/file-helper.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");
/* harmony import */ var _root_helpers_templates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @root/helpers/templates */ "./src/app/helpers/templates.ts");










let TabBackComponent = class TabBackComponent {
    constructor(notifierService) {
        this.notifierService = notifierService;
        this.fileTemplates = _back_file_templates__WEBPACK_IMPORTED_MODULE_2__["backFileTemplates"];
    }
    imageLoaded(imageModel) {
        this.imageModel = imageModel;
    }
    imageCleared() {
        this.imageModel = undefined;
    }
    imageError(error) {
        this.imageCleared();
        this.notifierService.notify('error', error);
    }
    generate() {
        const descriptor = JSON.parse(JSON.stringify(_back_descriptor__WEBPACK_IMPORTED_MODULE_3__["backDescriptor"]));
        let res = '?replace';
        if (this.imageModel) {
            const pants = _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_4__["ImageHelper"].toColorTable(this.imageModel.image, { skipTransparent: true });
            const t = _root_helpers_template_helper__WEBPACK_IMPORTED_MODULE_5__["TemplateHelper"].create(43, 43, [
                ['', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', '', 'a7'],
                ['', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
                ['', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
                ['', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'],
                ['', '', '', '', '', '', '', '', ''],
                ['', 'e1', '', '', 'e2', 'e3', 'e4', 'e5', ''],
                ['', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8']
            ]);
            const diff = _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_4__["ImageHelper"].difference(t, pants);
            res += _root_helpers_directives_helper__WEBPACK_IMPORTED_MODULE_6__["DirectivesHelper"].toReplace(diff, true);
        }
        const full = _root_helpers_templates__WEBPACK_IMPORTED_MODULE_9__["templates"].back.join('');
        descriptor.parameters.directives = `${full}${res}`;
        _root_helpers_file_helper__WEBPACK_IMPORTED_MODULE_7__["FileHelper"].saveText(JSON.stringify(descriptor, undefined, 2), 'outfit-legs.json');
    }
};
TabBackComponent.ctorParameters = () => [
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"] }
];
TabBackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-back',
        template: __webpack_require__(/*! raw-loader!./tab-back.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/tab/tab-back/tab-back.component.html"),
        styles: [__webpack_require__(/*! ./tab-back.component.less */ "./src/app/layout/tab/tab-back/tab-back.component.less")]
    })
], TabBackComponent);



/***/ }),

/***/ "./src/app/layout/tab/tab-chest/chest-descriptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/tab/tab-chest/chest-descriptor.ts ***!
  \**********************************************************/
/*! exports provided: chestDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chestDescriptor", function() { return chestDescriptor; });
// tslint:disable-next-line: max-line-length
const chestDescriptor = {
    name: 'aviantier6schest',
    count: 1,
    parameters: {
        shortdescription: 'Custom Sleeves',
        description: 'Made using the Outfit Generator.',
        inventoryIcon: 'fsleeve.png:idle.1'
    }
};


/***/ }),

/***/ "./src/app/layout/tab/tab-chest/chest-file-templates.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/tab/tab-chest/chest-file-templates.ts ***!
  \**************************************************************/
/*! exports provided: chestFileTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chestFileTemplates", function() { return chestFileTemplates; });
const chestFileTemplates = [
    {
        asset: 'assets/templates/chest/chestm.png',
        pdn: 'assets/templates/chest/chestm.pdn',
        title: 'Chest (male)',
        description: 'Chest frames file with male body frames.'
    },
    {
        asset: 'assets/templates/chest/chestf.png',
        pdn: 'assets/templates/chest/chestf.pdn',
        title: 'Chest (female)',
        description: 'Chest frames file with female body frames.'
    },
    {
        asset: 'assets/templates/chest/chest_blank.png',
        title: 'Chest (empty)',
        description: 'Empty chest frames file.'
    },
    {
        asset: 'assets/templates/chest/fsleeves.png',
        pdn: 'assets/templates/chest/fsleeves.pdn',
        title: 'Front sleeves',
        description: 'Front sleeves file with arm frames.'
    },
    {
        asset: 'assets/templates/chest/bsleeves.png',
        pdn: 'assets/templates/chest/bsleeves.pdn',
        title: 'Back sleeves',
        description: 'Back sleeves file with arm frames.'
    },
    {
        asset: 'assets/templates/chest/sleeves_blank.png',
        title: 'Sleeves (empty)',
        description: 'Empty sleeves file for front and back frames.'
    }
];


/***/ }),

/***/ "./src/app/layout/tab/tab-chest/tab-chest.component.less":
/*!***************************************************************!*\
  !*** ./src/app/layout/tab/tab-chest/tab-chest.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview {\n  margin: auto;\n  border: 1px solid #ccc;\n  overflow: hidden;\n}\n.preview-sleeves {\n  width: 387px;\n  height: 301px;\n}\n.preview-chest {\n  width: 86px;\n  height: 258px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RhYi90YWItY2hlc3QvQzovVXNlcnMvU2lsdmVyL0RvY3VtZW50cy9HaXRIdWIvU3RhcmJvdW5kLU5nT3V0Zml0R2VuZXJhdG9yL3NyYy9hcHAvbGF5b3V0L3RhYi90YWItY2hlc3QvdGFiLWNoZXN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvdGFiL3RhYi1jaGVzdC90YWItY2hlc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0FGO0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3RhYi90YWItY2hlc3QvdGFiLWNoZXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXcge1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByZXZpZXctc2xlZXZlcyB7XG4gIHdpZHRoOiAzODdweDtcbiAgaGVpZ2h0OiAzMDFweDtcbn1cbi5wcmV2aWV3LWNoZXN0IHtcbiAgd2lkdGg6IDg2cHg7XG4gIGhlaWdodDogMjU4cHg7XG59XG4iLCIucHJldmlldyB7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcmV2aWV3LXNsZWV2ZXMge1xuICB3aWR0aDogMzg3cHg7XG4gIGhlaWdodDogMzAxcHg7XG59XG4ucHJldmlldy1jaGVzdCB7XG4gIHdpZHRoOiA4NnB4O1xuICBoZWlnaHQ6IDI1OHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/tab/tab-chest/tab-chest.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/tab/tab-chest/tab-chest.component.ts ***!
  \*************************************************************/
/*! exports provided: TabChestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabChestComponent", function() { return TabChestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");
/* harmony import */ var _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @root/helpers/image-helper */ "./src/app/helpers/image-helper.ts");
/* harmony import */ var _root_helpers_template_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @root/helpers/template-helper */ "./src/app/helpers/template-helper.ts");
/* harmony import */ var _root_helpers_directives_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @root/helpers/directives-helper */ "./src/app/helpers/directives-helper.ts");
/* harmony import */ var _root_helpers_templates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @root/helpers/templates */ "./src/app/helpers/templates.ts");
/* harmony import */ var _chest_file_templates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chest-file-templates */ "./src/app/layout/tab/tab-chest/chest-file-templates.ts");
/* harmony import */ var _chest_descriptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chest-descriptor */ "./src/app/layout/tab/tab-chest/chest-descriptor.ts");
/* harmony import */ var _root_helpers_file_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @root/helpers/file-helper */ "./src/app/helpers/file-helper.ts");










let TabChestComponent = class TabChestComponent {
    constructor(notifierService) {
        this.notifierService = notifierService;
        this.images = {};
        this.fileTemplates = _chest_file_templates__WEBPACK_IMPORTED_MODULE_7__["chestFileTemplates"];
    }
    imageLoaded(imageModel, slot) {
        this.images[slot] = imageModel;
    }
    imageCleared(slot) {
        this.images[slot] = undefined;
    }
    imageError(error, slot) {
        this.imageCleared(slot);
        this.notifierService.notify('error', error);
    }
    generate() {
        const descriptor = JSON.parse(JSON.stringify(_chest_descriptor__WEBPACK_IMPORTED_MODULE_8__["chestDescriptor"]));
        let res = '?replace';
        if (this.images.chest) {
            const chest = _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_3__["ImageHelper"].toColorTable(this.images.chest.image, { skipTransparent: true });
            const chestTemplate = _root_helpers_template_helper__WEBPACK_IMPORTED_MODULE_4__["TemplateHelper"].create(43, 43, [
                ['', 'f3'],
                ['f4', 'f5'],
                ['', 'f6'],
                ['', 'f7'],
                ['', ''],
                ['', 'f8'],
            ]);
            const diff = _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_3__["ImageHelper"].difference(chestTemplate, chest);
            res += _root_helpers_directives_helper__WEBPACK_IMPORTED_MODULE_5__["DirectivesHelper"].toReplace(diff, true);
        }
        if (this.images.frontSleeves) {
            const front = _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_3__["ImageHelper"].toColorTable(this.images.frontSleeves.image, { skipTransparent: true });
            const frontSleeveTemplate = _root_helpers_template_helper__WEBPACK_IMPORTED_MODULE_4__["TemplateHelper"].create(43, 43, [
                ['', 'a1', 'a2', 'a3', 'a4', 'a5', '', '', 'a6'],
                ['', '', 'b1', 'b2', 'b3', 'b4', 'b5', '', 'b6'],
                ['', '', 'c1', 'c2', 'c3', 'c4', 'c5', '', ''],
                ['', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'],
                ['', '', '', '', '', '', '', '', ''],
                ['', 'e1', 'e2', '', 'e3', 'e4', 'e5', 'e6', 'e7'],
                ['', '', '', 'f1', '', '', '', '', 'f2']
            ]);
            const diff = _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_3__["ImageHelper"].difference(frontSleeveTemplate, front);
            res += _root_helpers_directives_helper__WEBPACK_IMPORTED_MODULE_5__["DirectivesHelper"].toReplace(diff, true);
        }
        if (this.images.backSleeves) {
            const back = _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_3__["ImageHelper"].toColorTable(this.images.backSleeves.image, { skipTransparent: true });
            const backSleeveTemplate = _root_helpers_template_helper__WEBPACK_IMPORTED_MODULE_4__["TemplateHelper"].create(43, 43, [
                ['', '60', '61', '62', '63', '64', '', '', '65'],
                ['', '', '66', '67', '68', '69', '6a', '', '6b'],
                ['', '', '6c', '6d', '6e', '6f', '70', '', ''],
                ['', '71', '72', '73', '74', '75', '76', '77', '78'],
                ['', '', '', '', '', '', '', '', ''],
                ['', '79', '7a', '', '7b', '7c', '7d', '7e', '7f'],
                ['', '', '', '80', '', '', '', '', '81']
            ]);
            const diff = _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_3__["ImageHelper"].difference(backSleeveTemplate, back);
            res += _root_helpers_directives_helper__WEBPACK_IMPORTED_MODULE_5__["DirectivesHelper"].toReplace(diff, true);
        }
        const full = _root_helpers_templates__WEBPACK_IMPORTED_MODULE_6__["templates"].chest.join('');
        descriptor.parameters.directives = `${full}${res}`;
        _root_helpers_file_helper__WEBPACK_IMPORTED_MODULE_9__["FileHelper"].saveText(JSON.stringify(descriptor, undefined, 2), 'outfit-chest.json');
    }
};
TabChestComponent.ctorParameters = () => [
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"] }
];
TabChestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-chest',
        template: __webpack_require__(/*! raw-loader!./tab-chest.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/tab/tab-chest/tab-chest.component.html"),
        styles: [__webpack_require__(/*! ./tab-chest.component.less */ "./src/app/layout/tab/tab-chest/tab-chest.component.less")]
    })
], TabChestComponent);



/***/ }),

/***/ "./src/app/layout/tab/tab-hat/tab-hat.component.less":
/*!***********************************************************!*\
  !*** ./src/app/layout/tab/tab-hat/tab-hat.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90YWIvdGFiLWhhdC90YWItaGF0LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/layout/tab/tab-hat/tab-hat.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/tab/tab-hat/tab-hat.component.ts ***!
  \*********************************************************/
/*! exports provided: TabHatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHatComponent", function() { return TabHatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabHatComponent = class TabHatComponent {
    constructor() { }
    ngOnInit() {
    }
};
TabHatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-hat',
        template: __webpack_require__(/*! raw-loader!./tab-hat.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/tab/tab-hat/tab-hat.component.html"),
        styles: [__webpack_require__(/*! ./tab-hat.component.less */ "./src/app/layout/tab/tab-hat/tab-hat.component.less")]
    })
], TabHatComponent);



/***/ }),

/***/ "./src/app/layout/tab/tab-pants/pants-descriptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/tab/tab-pants/pants-descriptor.ts ***!
  \**********************************************************/
/*! exports provided: pantsDescriptor, hidingPantsDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pantsDescriptor", function() { return pantsDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hidingPantsDescriptor", function() { return hidingPantsDescriptor; });
// tslint:disable-next-line: max-line-length
const pantsDescriptor = {
    name: 'florantier6apants',
    count: 1,
    parameters: {
        shortdescription: 'Custom Pants',
        description: 'Made using the Outfit Generator.',
        inventoryIcon: 'pants.png:idle.2'
    }
};
const hidingPantsDescriptor = {
    name: 'froggmerchantlegs',
    count: 1,
    parameters: {
        shortdescription: 'Custom Pants',
        description: 'Made using the Outfit Generator.',
        inventoryIcon: 'pantsm.png:idle.1',
        hideBody: true
    }
};


/***/ }),

/***/ "./src/app/layout/tab/tab-pants/pants-file-templates.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/tab/tab-pants/pants-file-templates.ts ***!
  \**************************************************************/
/*! exports provided: pantsFileTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pantsFileTemplates", function() { return pantsFileTemplates; });
const pantsFileTemplates = [
    {
        asset: 'assets/templates/pants/pantsm.png',
        pdn: 'assets/templates/pants/pantsm.pdn',
        title: 'Pants (male)',
        description: 'Pants frames file with male body frames.'
    },
    {
        asset: 'assets/templates/pants/pantsf.png',
        pdn: 'assets/templates/pants/pantsf.pdn',
        title: 'Pants (female)',
        description: 'Chest frames file with female body frames.'
    },
    {
        asset: 'assets/templates/pants/pants_blank.png',
        title: 'Pants (empty)',
        description: 'Empty pants frames file.'
    }
];


/***/ }),

/***/ "./src/app/layout/tab/tab-pants/tab-pants.component.less":
/*!***************************************************************!*\
  !*** ./src/app/layout/tab/tab-pants/tab-pants.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview {\n  margin: auto;\n  border: 1px solid #ccc;\n  overflow: hidden;\n}\n.preview-pants {\n  width: 387px;\n  height: 258px;\n}\n.actions > button {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RhYi90YWItcGFudHMvQzovVXNlcnMvU2lsdmVyL0RvY3VtZW50cy9HaXRIdWIvU3RhcmJvdW5kLU5nT3V0Zml0R2VuZXJhdG9yL3NyYy9hcHAvbGF5b3V0L3RhYi90YWItcGFudHMvdGFiLXBhbnRzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvdGFiL3RhYi1wYW50cy90YWItcGFudHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0FGO0FER0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdGFiL3RhYi1wYW50cy90YWItcGFudHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJldmlldyB7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJldmlldy1wYW50cyB7XG4gIHdpZHRoOiAzODdweDtcbiAgaGVpZ2h0OiAyNThweDtcbn1cblxuLmFjdGlvbnMgPiBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cbiIsIi5wcmV2aWV3IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByZXZpZXctcGFudHMge1xuICB3aWR0aDogMzg3cHg7XG4gIGhlaWdodDogMjU4cHg7XG59XG4uYWN0aW9ucyA+IGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/tab/tab-pants/tab-pants.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/tab/tab-pants/tab-pants.component.ts ***!
  \*************************************************************/
/*! exports provided: TabPantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPantsComponent", function() { return TabPantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pants_file_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pants-file-templates */ "./src/app/layout/tab/tab-pants/pants-file-templates.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");
/* harmony import */ var _pants_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pants-descriptor */ "./src/app/layout/tab/tab-pants/pants-descriptor.ts");
/* harmony import */ var _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @root/helpers/image-helper */ "./src/app/helpers/image-helper.ts");
/* harmony import */ var _root_helpers_template_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @root/helpers/template-helper */ "./src/app/helpers/template-helper.ts");
/* harmony import */ var _root_helpers_templates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @root/helpers/templates */ "./src/app/helpers/templates.ts");
/* harmony import */ var _root_helpers_directives_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @root/helpers/directives-helper */ "./src/app/helpers/directives-helper.ts");
/* harmony import */ var _root_helpers_file_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @root/helpers/file-helper */ "./src/app/helpers/file-helper.ts");










let TabPantsComponent = class TabPantsComponent {
    constructor(notifierService) {
        this.notifierService = notifierService;
        this.fileTemplates = _pants_file_templates__WEBPACK_IMPORTED_MODULE_2__["pantsFileTemplates"];
    }
    imageLoaded(imageModel) {
        this.imageModel = imageModel;
    }
    imageCleared() {
        this.imageModel = undefined;
    }
    imageError(error) {
        this.imageCleared();
        this.notifierService.notify('error', error);
    }
    generateNormal() {
        this.generate(_pants_descriptor__WEBPACK_IMPORTED_MODULE_4__["pantsDescriptor"], _root_helpers_templates__WEBPACK_IMPORTED_MODULE_7__["templates"].pants);
    }
    generateHiding() {
        this.generate(_pants_descriptor__WEBPACK_IMPORTED_MODULE_4__["hidingPantsDescriptor"], _root_helpers_templates__WEBPACK_IMPORTED_MODULE_7__["templates"].hidingPants);
    }
    generate(descriptor, template) {
        let res = '?replace';
        if (this.imageModel) {
            const pants = _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_5__["ImageHelper"].toColorTable(this.imageModel.image, { skipTransparent: true });
            const t = _root_helpers_template_helper__WEBPACK_IMPORTED_MODULE_6__["TemplateHelper"].create(43, 43, [
                ['', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', '', 'a7'],
                ['', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
                ['', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
                ['', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'],
                ['', '', '', '', '', '', '', '', ''],
                ['', 'e1', '', '', 'e2', 'e3', 'e4', 'e5', '']
            ]);
            const diff = _root_helpers_image_helper__WEBPACK_IMPORTED_MODULE_5__["ImageHelper"].difference(t, pants);
            res += _root_helpers_directives_helper__WEBPACK_IMPORTED_MODULE_8__["DirectivesHelper"].toReplace(diff, true);
        }
        const full = template.join('');
        descriptor.parameters.directives = `${full}${res}`;
        _root_helpers_file_helper__WEBPACK_IMPORTED_MODULE_9__["FileHelper"].saveText(JSON.stringify(descriptor, undefined, 2), 'outfit-legs.json');
    }
};
TabPantsComponent.ctorParameters = () => [
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"] }
];
TabPantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-pants',
        template: __webpack_require__(/*! raw-loader!./tab-pants.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/tab/tab-pants/tab-pants.component.html"),
        styles: [__webpack_require__(/*! ./tab-pants.component.less */ "./src/app/layout/tab/tab-pants/tab-pants.component.less")]
    })
], TabPantsComponent);



/***/ }),

/***/ "./src/app/layout/template/file-template-container/file-template-container.component.less":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/template/file-template-container/file-template-container.component.less ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*=\"col-\"] {\n  padding: 4px;\n}\n.card-body {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.card-body .buttons {\n  margin-bottom: 4px;\n}\n.card-img-top {\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-height: 200px;\n  margin-top: 4px;\n}\n.card-text {\n  white-space: pre;\n}\n.buttons {\n  margin: auto;\n  display: block;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RlbXBsYXRlL2ZpbGUtdGVtcGxhdGUtY29udGFpbmVyL0M6L1VzZXJzL1NpbHZlci9Eb2N1bWVudHMvR2l0SHViL1N0YXJib3VuZC1OZ091dGZpdEdlbmVyYXRvci9zcmMvYXBwL2xheW91dC90ZW1wbGF0ZS9maWxlLXRlbXBsYXRlLWNvbnRhaW5lci9maWxlLXRlbXBsYXRlLWNvbnRhaW5lci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbGF5b3V0L3RlbXBsYXRlL2ZpbGUtdGVtcGxhdGUtY29udGFpbmVyL2ZpbGUtdGVtcGxhdGUtY29udGFpbmVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0FDREY7QURJQTtFQUNFLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNGRjtBREtBO0VBQ0UsZ0JBQUE7QUNIRjtBRE1BO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3RlbXBsYXRlL2ZpbGUtdGVtcGxhdGUtY29udGFpbmVyL2ZpbGUtdGVtcGxhdGUtY29udGFpbmVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiW2NsYXNzKj1cImNvbC1cIl0ge1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4uY2FyZC1ib2R5IC5idXR0b25zIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uY2FyZC1pbWctdG9wIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmNhcmQtdGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59XG5cbi5idXR0b25zIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiW2NsYXNzKj1cImNvbC1cIl0ge1xuICBwYWRkaW5nOiA0cHg7XG59XG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cbi5jYXJkLWJvZHkgLmJ1dHRvbnMge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uY2FyZC1pbWctdG9wIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5jYXJkLXRleHQge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xufVxuLmJ1dHRvbnMge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/template/file-template-container/file-template-container.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/template/file-template-container/file-template-container.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: FileTemplateContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTemplateContainerComponent", function() { return FileTemplateContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FileTemplateContainerComponent = class FileTemplateContainerComponent {
    constructor() { }
    ngOnInit() {
    }
    fileName(path) {
        const i = path.lastIndexOf('/');
        return i === -1 || i === path.length - 1 ? path : path.substr(i + 1);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileTemplateContainerComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileTemplateContainerComponent.prototype, "templates", void 0);
FileTemplateContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-template-container',
        template: __webpack_require__(/*! raw-loader!./file-template-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/template/file-template-container/file-template-container.component.html"),
        styles: [__webpack_require__(/*! ./file-template-container.component.less */ "./src/app/layout/template/file-template-container/file-template-container.component.less")]
    })
], FileTemplateContainerComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Silver\Documents\GitHub\Starbound-NgOutfitGenerator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map