(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-me/about-me.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-me/about-me.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.about{\n    margin: 6em 0;\n    padding: 1em;\n    position: relative;\n   }\n  \n   .about img{\n    height: 92%;\n    width: 92%;\n      border-radius: 50%\n   }\n  \n   .about span{\n    display: block;\n    color: #888;\n    position: absolute;\n    left: 115px;\n   }\n  \n   .about .desc{\n    padding: 2em;\n    border-left:4px solid #10828C;\n   }\n  \n   .about .desc h3{\n    color: #10828C;\n   }\n  \n   .about .desc p{\n    line-height:2;\n    color:#888;\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkI7O0dBRUQ7SUFDQyxZQUFZO0lBQ1osV0FBVztNQUNULGtCQUFrQjtJQUNwQjs7R0FDRDtJQUNDLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWjs7R0FDRDtJQUNDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUI7O0dBQ0Q7SUFDQyxlQUFlO0lBQ2Y7O0dBQ0Q7SUFDQyxjQUFjO0lBQ2QsV0FBVztJQUNYIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uYWJvdXR7XG4gICAgbWFyZ2luOiA2ZW0gMDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgfVxuICBcbiAgIC5hYm91dCBpbWd7XG4gICAgaGVpZ2h0OiA5MiU7XG4gICAgd2lkdGg6IDkyJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJVxuICAgfVxuICAgLmFib3V0IHNwYW57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDExNXB4O1xuICAgfVxuICAgLmFib3V0IC5kZXNje1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBib3JkZXItbGVmdDo0cHggc29saWQgIzEwODI4QztcbiAgIH1cbiAgIC5hYm91dCAuZGVzYyBoM3tcbiAgICBjb2xvcjogIzEwODI4QztcbiAgIH1cbiAgIC5hYm91dCAuZGVzYyBwe1xuICAgIGxpbmUtaGVpZ2h0OjI7XG4gICAgY29sb3I6Izg4ODtcbiAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/about-me/about-me.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about\" id=\"about\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                <img src=\"assets/images/myself.jpg\" class=\"img-fluid\">\n                <span class=\"text-justify\">Web Devloper</span>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-12 desc\">\n\n                <h3>Kumar Shantnu</h3>\n                <p>\n                    Web developer | Freelancer | Problem Solver | Lifelong learner | Football fan | Foodie but bad cook.\n                </p>\n                <p>\n                    You can reach out to me on:\n                    \n                </p>\n                <ul>\n                        <li>                           \n                            <a mailto=\"mailtoshantnu@gmail.com\">mailtoshantnu@gmail.com</a> \n                        </li>\n                        <li>\n                           <a href=\"https://www.linkedin.com/in/kumar-shantnu/\">linkedin</a> \n                        </li>\n                    </ul>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _searchresultlist_searchresultlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchresultlist/searchresultlist.component */ "./src/app/searchresultlist/searchresultlist.component.ts");
/* harmony import */ var _submissionform_submissionform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submissionform/submissionform.component */ "./src/app/submissionform/submissionform.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"] },
    { path: 'suggestions', component: _searchresultlist_searchresultlist_component__WEBPACK_IMPORTED_MODULE_3__["SearchresultlistComponent"] },
    { path: 'suggestions?term=', component: _searchresultlist_searchresultlist_component__WEBPACK_IMPORTED_MODULE_3__["SearchresultlistComponent"] },
    { path: 'suggestionform', component: _submissionform_submissionform_component__WEBPACK_IMPORTED_MODULE_4__["SubmissionformComponent"] },
    { path: 'aboutme', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"] },
    { path: '**', component: _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <app-navigation></app-navigation>\n<app-header></app-header> -->\n<!-- <div class=\"outerdiv\">\n    \n  <app-searchbar (searchClickEvent) = \"searchEventOutput($event)\" ></app-searchbar>\n  <app-notification-alert *ngIf=\"showNotification\" [className] = \"className\" [notificationMessage] = \"notificationMessage\"></app-notification-alert>\n  <app-searchresultlist *ngIf = \"!showForm\" [searchResults] = \"searchResults\"></app-searchresultlist>\n  <div><button *ngIf = \"!showForm\" type=\"button\" class=\"btn btn-primary\" (click) = \"redirectBackToForm()\">Back</button>\n    <app-submissionform *ngIf = \"showForm\" (backToFormViewClick) = \"backToFormViewClickEvent($event)\"\n     (submissionClickEvent) = \"submissionEventOutput($event)\"></app-submissionform>\n    </div>\n</div> -->\n\n<app-navigation></app-navigation>\n<div>\n    <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.showForm = true;
        this.showNotification = false;
        this.showForm = true;
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/1KT2asqA1J8');
    }
    AppComponent.prototype.searchEventOutput = function (list) {
        if (list && list.length === 0) {
            this.showForm = true;
            this.showNotification = true;
            this.notificationMessage = " Nor records found !! ";
            this.className = "alert-info";
        }
        else {
            this.showForm = false;
            this.showNotification = false;
            this.searchResults = list;
        }
    };
    AppComponent.prototype.submissionEventOutput = function (res) {
        if (res._id) {
            this.showForm = true;
            this.showNotification = true;
            this.notificationMessage = " Suggestion successfully saved !! ";
            this.className = "alert-success";
        }
    };
    AppComponent.prototype.redirectBackToForm = function () {
        this.showForm = true;
        this.showNotification = false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _searchresult_searchresult_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchresult/searchresult.component */ "./src/app/searchresult/searchresult.component.ts");
/* harmony import */ var _submissionform_submissionform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submissionform/submissionform.component */ "./src/app/submissionform/submissionform.component.ts");
/* harmony import */ var _searchresultlist_searchresultlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchresultlist/searchresultlist.component */ "./src/app/searchresultlist/searchresultlist.component.ts");
/* harmony import */ var _common_components_notification_alert_notification_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common_components/notification-alert/notification-alert.component */ "./src/app/common_components/notification-alert/notification-alert.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _searchcount_searchcount_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchcount/searchcount.component */ "./src/app/searchcount/searchcount.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_3__["SearchbarComponent"],
                _searchresult_searchresult_component__WEBPACK_IMPORTED_MODULE_4__["SearchresultComponent"],
                _submissionform_submissionform_component__WEBPACK_IMPORTED_MODULE_5__["SubmissionformComponent"],
                _searchresultlist_searchresultlist_component__WEBPACK_IMPORTED_MODULE_6__["SearchresultlistComponent"],
                _common_components_notification_alert_notification_alert_component__WEBPACK_IMPORTED_MODULE_7__["NotificationAlertComponent"],
                _searchcount_searchcount_component__WEBPACK_IMPORTED_MODULE_9__["SearchcountComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_14__["AboutMeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common_components/notification-alert/notification-alert.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/common_components/notification-alert/notification-alert.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n    margin-top: 4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uX2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWFsZXJ0L25vdGlmaWNhdGlvbi1hbGVydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uX2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWFsZXJ0L25vdGlmaWNhdGlvbi1hbGVydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0IHtcbiAgICBtYXJnaW4tdG9wOiA0ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/common_components/notification-alert/notification-alert.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/common_components/notification-alert/notification-alert.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-dismissible fade show\" role=\"alert\" [class]=\"className\">\n    <strong>Holy guacamole!</strong> {{notificationMessage}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n"

/***/ }),

/***/ "./src/app/common_components/notification-alert/notification-alert.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/common_components/notification-alert/notification-alert.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NotificationAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationAlertComponent", function() { return NotificationAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationAlertComponent = /** @class */ (function () {
    function NotificationAlertComponent() {
    }
    NotificationAlertComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NotificationAlertComponent.prototype, "className", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NotificationAlertComponent.prototype, "notificationMessage", void 0);
    NotificationAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-alert',
            template: __webpack_require__(/*! ./notification-alert.component.html */ "./src/app/common_components/notification-alert/notification-alert.component.html"),
            styles: [__webpack_require__(/*! ./notification-alert.component.css */ "./src/app/common_components/notification-alert/notification-alert.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationAlertComponent);
    return NotificationAlertComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* .header{\n    background-image: url(\"../../assets/images/Medical-Science.png\");\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: center;\n}\n.overlay{\n    position: absolute;\n    min-height: 100%;\n    min-width: 100%;\n    left: 0;\n    top: 0;\n    background: rgba(244, 244, 244, 0.79);\n   }\n\n   .description{\n    top:14%;\n    margin: auto;\n    padding: 6em;\n}\n.description h1{\n color:#1ebb42 ;\n}\n.description p{\n color:#666;\n font-size: 20px;\n line-height: 1.5;\n} */\n\n\n\n/* .header{\n    background-image: url('../../assets/images/Medical-Science.png');\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: center;\n   } */\n\n\n\n.overlay{\n    position: absolute;\n    min-height: 100%;\n    min-width: 100%;\n    left: 0;\n    top: 0;\n    background: rgba(244, 244, 244, 0.79);\n   }\n\n\n\n.description{\n    position: absolute;\n    top: 30%;\n    margin: auto;\n    padding: 2em;\n}\n\n\n\n.description h1{\n color:#1ebb42 ;\n}\n\n\n\n.description p{\n color:#666;\n font-size: 20px;\n width: 100%;\n line-height: 1.5;\n}\n\n\n\n.description button{\n border:1px  solid #1ebb42;\n background:#1ebb42;\n color:#fff;\n}\n\n\n\n.modal.fade .modal-dialog {\n    transition: -webkit-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out;\n    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n  }\n\n\n\n.modal.in .modal-dialog {\n  \n  }\n\n\n\n#exampleModalLongTitle {\n      color: #1ebb42;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMkJJOzs7O0FBSUo7Ozs7O09BS087Ozs7QUFFSjtJQUNDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixPQUFPO0lBQ1Asc0NBQXNDO0lBQ3RDOzs7O0FBRUQ7SUFDQyxtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7SUFDYixhQUFhO0NBQ2hCOzs7O0FBQ0Q7Q0FDQyxlQUFlO0NBQ2Y7Ozs7QUFDRDtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQjs7OztBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1g7Ozs7QUFFRDtJQUlZLDRDQUFvQztJQUFwQyxvQ0FBb0M7SUFBcEMscUVBQW9DO0dBQzdDOzs7O0FBRUQ7O0dBRUM7Ozs7QUFFRDtNQUNJLGVBQWU7R0FDbEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIC5oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9NZWRpY2FsLVNjaWVuY2UucG5nXCIpO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ub3ZlcmxheXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0NCwgMjQ0LCAwLjc5KTtcbiAgIH1cblxuICAgLmRlc2NyaXB0aW9ue1xuICAgIHRvcDoxNCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDZlbTtcbn1cbi5kZXNjcmlwdGlvbiBoMXtcbiBjb2xvcjojMWViYjQyIDtcbn1cbi5kZXNjcmlwdGlvbiBwe1xuIGNvbG9yOiM2NjY7XG4gZm9udC1zaXplOiAyMHB4O1xuIGxpbmUtaGVpZ2h0OiAxLjU7XG59ICovXG5cblxuXG4vKiAuaGVhZGVye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9NZWRpY2FsLVNjaWVuY2UucG5nJyk7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgIH0gKi9cblxuICAgLm92ZXJsYXl7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCAyNDQsIDI0NCwgMC43OSk7XG4gICB9XG5cbiAgIC5kZXNjcmlwdGlvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cbi5kZXNjcmlwdGlvbiBoMXtcbiBjb2xvcjojMWViYjQyIDtcbn1cbi5kZXNjcmlwdGlvbiBwe1xuIGNvbG9yOiM2NjY7XG4gZm9udC1zaXplOiAyMHB4O1xuIHdpZHRoOiAxMDAlO1xuIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uZGVzY3JpcHRpb24gYnV0dG9ue1xuIGJvcmRlcjoxcHggIHNvbGlkICMxZWJiNDI7XG4gYmFja2dyb3VuZDojMWViYjQyO1xuIGNvbG9yOiNmZmY7XG59XG5cbi5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcbiAgICAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xuICB9XG4gIFxuICAubW9kYWwuaW4gLm1vZGFsLWRpYWxvZyB7XG4gIFxuICB9XG5cbiAgI2V4YW1wbGVNb2RhbExvbmdUaXRsZSB7XG4gICAgICBjb2xvcjogIzFlYmI0MjtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n        <div class=\"description\">\n            <div clas=\"row\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                    <h1> Hello ,Welcome To MediHelp </h1>\n                    <p> Sharing is Caring. This is what MediHelp is all about.\n                    </p>\n                    <button class=\"btn btn-outline-secondary btn-lg\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Watch Video</button>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    \n</header>\n\n      \n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">MediHelp Demo</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                    <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/6wD4V0rvlDI\" frameborder=\"0\"\n                        allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n            </div>\n            \n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/models/searchresult.ts":
/*!****************************************!*\
  !*** ./src/app/models/searchresult.ts ***!
  \****************************************/
/*! exports provided: SearchResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResult", function() { return SearchResult; });
var SearchResult = /** @class */ (function () {
    function SearchResult(diseases, symptoms, medicines, doctors, comments) {
        this.diseases = diseases;
        this.symptoms = symptoms;
        this.medicines = medicines;
        this.doctors = doctors;
        this.comments = comments;
    }
    return SearchResult;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{ background:#1ebb42;}\n.nav-link , .navbar-brand{ color: #f4f4f4; cursor: pointer;}\n.nav-link{ margin-right: 1em !important;}\n.nav-link:hover{ background: #f4f4f4; color: #f97300; }\n.navbar-collapse{ justify-content: flex-end;}\n.navbar-toggler{  background:#fff !important;}\n#navbarSupportedContent .navigation-search {\n  width: 50% !important;\n  margin: auto;\n  position: relative;\n  top: 10px;\n}\n.nav-item .active {\n  background: #f4f4f4;\n  color: #F97300;\n}\n.search-suggestion {\n  background-color:transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QiwyQkFBMkIsZUFBZSxDQUFDLGdCQUFnQixDQUFDO0FBQzVELFdBQVcsNkJBQTZCLENBQUM7QUFDekMsaUJBQWlCLG9CQUFvQixDQUFDLGVBQWUsRUFBRTtBQUN2RCxrQkFBa0IsMEJBQTBCLENBQUM7QUFDN0Msa0JBQWtCLDJCQUEyQixDQUFDO0FBQzlDO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtDQUNYO0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsNkJBQTZCO0NBQzlCIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyeyBiYWNrZ3JvdW5kOiMxZWJiNDI7fVxuLm5hdi1saW5rICwgLm5hdmJhci1icmFuZHsgY29sb3I6ICNmNGY0ZjQ7IGN1cnNvcjogcG9pbnRlcjt9XG4ubmF2LWxpbmt7IG1hcmdpbi1yaWdodDogMWVtICFpbXBvcnRhbnQ7fVxuLm5hdi1saW5rOmhvdmVyeyBiYWNrZ3JvdW5kOiAjZjRmNGY0OyBjb2xvcjogI2Y5NzMwMDsgfVxuLm5hdmJhci1jb2xsYXBzZXsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDt9XG4ubmF2YmFyLXRvZ2dsZXJ7ICBiYWNrZ3JvdW5kOiNmZmYgIWltcG9ydGFudDt9XG4jbmF2YmFyU3VwcG9ydGVkQ29udGVudCAubmF2aWdhdGlvbi1zZWFyY2gge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG59XG5cbi5uYXYtaXRlbSAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgY29sb3I6ICNGOTczMDA7XG59XG5cbi5zZWFyY2gtc3VnZ2VzdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <a class=\"navbar-brand\" [routerLinkActive]=\"['active']\"\n    [routerLink]=\"['./home']\">MediHelp</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">\n        \n        <div class=\"input-group mb-3 navigation-search\">\n            <input [value] = \"textValue ? textValue : ''\" type=\"text\" #query class=\"form-control\" placeholder=\"Search by medicines, symptoms or doctors\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n            <div class=\"input-group-append\">\n                <button class='btn btn-lg search-suggestion' (click) = \"onSearch(query.value)\">\n                    <i class=\"fas fa-search\"></i>\n                 </button>\n        </div>\n      </div>\n        <ul class=\"navbar-nav mr-4\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\"  [routerLinkActive]=\"['active']\"\n                [routerLink]=\"['./home']\">Home</a> </li> \n                \n            <li class=\"nav-item\">\n                <a class=\"nav-link \"  [routerLinkActive]=\"['active']\"\n                [routerLink]=\"['./suggestionform']\">Give Suggestions</a> </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link \"  [routerLinkActive]=\"['active']\"\n                [routerLink]=\"['./aboutme']\"> About Me</a> </li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    //query:String;
    function NavigationComponent(router, route) {
        // This workaround is because on intial pageload we wont receive query string
        this.router = router;
        this.route = route;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .queryParams
            .subscribe(function (params) {
            var location = window.location.href.indexOf('?');
            if (location > -1) {
                var term = window.location.href.split('?')[1];
                if (term.indexOf('term=') > -1) {
                    if (term) {
                        var decodedQueryParam = term.split('=')[1];
                        _this.textValue = decodeURIComponent(decodedQueryParam);
                    }
                }
            }
        });
    };
    NavigationComponent.prototype.onSearch = function (term) {
        // let navigationExtras: NavigationExtras = {
        //   queryParams: { 'term': term },
        // };
        this.router.navigate(['suggestions'], { queryParams: { term: term }, preserveFragment: true });
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/searchbar/fetchresult.service.ts":
/*!**************************************************!*\
  !*** ./src/app/searchbar/fetchresult.service.ts ***!
  \**************************************************/
/*! exports provided: FetchResultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchResultService", function() { return FetchResultService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import 'rxjs/add/operator/toPromise';
var FetchResultService = /** @class */ (function () {
    function FetchResultService(http) {
        this.http = http;
        this.queryArray = [];
        this.removeDuplicates = function (reducedResponse, prop) {
            return reducedResponse.filter(function (obj, pos, arr) {
                return arr
                    .map(function (mapObj) { return mapObj[prop]; })
                    .indexOf(obj[prop]) === pos;
            });
        };
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            this.baseUrl = 'http://localhost:3000/';
        }
        else {
            this.baseUrl = 'https://medicinehelp.herokuapp.com/';
        }
    }
    FetchResultService.prototype.fetchResult = function (queryString) {
        var _this = this;
        if (!queryString)
            return;
        this.queryArray = [];
        this.queryArray = queryString.split(',').map(function (item) { return item.trim().toLowerCase(); });
        var url = this.baseUrl + "getsuggestion";
        var promise = new Promise(function (resolve, reject) {
            _this
                .http
                .post(url, { tags: _this.queryArray })
                .toPromise()
                .then(function (response) {
                var reducedResponse = response.reduce(function (inititalItem, nextItem) {
                    nextItem.map(function (item) {
                        inititalItem.push(item);
                    });
                    return inititalItem;
                }, []);
                var reducedUniqueResponse = _this.removeDuplicates(reducedResponse, '_id');
                resolve(reducedUniqueResponse);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
        return promise;
    };
    FetchResultService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FetchResultService);
    return FetchResultService;
}());



/***/ }),

/***/ "./src/app/searchbar/searchbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGJhci9zZWFyY2hiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"form-group\">\n      <input type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Enter your queries\"\n             (keyup)=\"enableButton(query.value)\"\n             #query>\n    </div>\n  <button type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"fetchResult(query.value)\" [disabled]=\"disableButton\" >Search\n  </button>\n"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.ts ***!
  \**************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetchresult_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchresult.service */ "./src/app/searchbar/fetchresult.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent(_fetchResultService) {
        this._fetchResultService = _fetchResultService;
        this.searchClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disableButton = true;
    }
    SearchbarComponent.prototype.ngOnInit = function () {
    };
    SearchbarComponent.prototype.fetchResult = function (queryString) {
        var _this = this;
        this._fetchResultService.fetchResult(queryString).then(function (res) {
            _this.searchClickEvent.emit(res);
        }).catch(function (err) {
            console.log(err);
        });
    };
    SearchbarComponent.prototype.enableButton = function (queryString) {
        if (queryString) {
            this.disableButton = false;
        }
        else {
            this.disableButton = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchbarComponent.prototype, "searchClickEvent", void 0);
    SearchbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchbar',
            template: __webpack_require__(/*! ./searchbar.component.html */ "./src/app/searchbar/searchbar.component.html"),
            styles: [__webpack_require__(/*! ./searchbar.component.css */ "./src/app/searchbar/searchbar.component.css")]
        }),
        __metadata("design:paramtypes", [_fetchresult_service__WEBPACK_IMPORTED_MODULE_1__["FetchResultService"]])
    ], SearchbarComponent);
    return SearchbarComponent;
}());



/***/ }),

/***/ "./src/app/searchcount/searchcount.component.css":
/*!*******************************************************!*\
  !*** ./src/app/searchcount/searchcount.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGNvdW50L3NlYXJjaGNvdW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/searchcount/searchcount.component.html":
/*!********************************************************!*\
  !*** ./src/app/searchcount/searchcount.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"#\">Jaundice <span class=\"badge badge-primary\">5</span></a><br>\n<a href=\"#\">Nausea <span class=\"badge badge-primary\">10</span></a><br>\n<a href=\"#\">Sinus <span class=\"badge badge-primary\">2</span></a>\n"

/***/ }),

/***/ "./src/app/searchcount/searchcount.component.ts":
/*!******************************************************!*\
  !*** ./src/app/searchcount/searchcount.component.ts ***!
  \******************************************************/
/*! exports provided: SearchcountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchcountComponent", function() { return SearchcountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchcountComponent = /** @class */ (function () {
    function SearchcountComponent() {
    }
    SearchcountComponent.prototype.ngOnInit = function () {
    };
    SearchcountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchcount',
            template: __webpack_require__(/*! ./searchcount.component.html */ "./src/app/searchcount/searchcount.component.html"),
            styles: [__webpack_require__(/*! ./searchcount.component.css */ "./src/app/searchcount/searchcount.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchcountComponent);
    return SearchcountComponent;
}());



/***/ }),

/***/ "./src/app/searchresult/searchresult.component.css":
/*!*********************************************************!*\
  !*** ./src/app/searchresult/searchresult.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .card-body .symptoms, .medicines, .doctors{\n    margin: 0px 2px;\n} */\n\n/* .cards-sggestions{\n    margin: 6em 0;\n    position: relative; \n   }\n   .cards-sggestions h1{\n    color:#F97300;\n    margin: 2em; \n   }\n   .cards-sggestions .card{\n    box-shadow: 0 0 20px #ccc;\n   }\n   .cards-sggestions .card img{\n    width: 100%;\n    height: 12em;\n   }\n   .cards-sggestions .card-title{\n    color:#F97300;\n     \n   }\n   .cards-sggestions .card-body{\n    padding: 1em;\n   } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNocmVzdWx0L3NlYXJjaHJlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJOztBQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FxQk8iLCJmaWxlIjoic3JjL2FwcC9zZWFyY2hyZXN1bHQvc2VhcmNocmVzdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY2FyZC1ib2R5IC5zeW1wdG9tcywgLm1lZGljaW5lcywgLmRvY3RvcnN7XG4gICAgbWFyZ2luOiAwcHggMnB4O1xufSAqL1xuXG4vKiAuY2FyZHMtc2dnZXN0aW9uc3tcbiAgICBtYXJnaW46IDZlbSAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICB9XG4gICAuY2FyZHMtc2dnZXN0aW9ucyBoMXtcbiAgICBjb2xvcjojRjk3MzAwO1xuICAgIG1hcmdpbjogMmVtOyBcbiAgIH1cbiAgIC5jYXJkcy1zZ2dlc3Rpb25zIC5jYXJke1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4ICNjY2M7XG4gICB9XG4gICAuY2FyZHMtc2dnZXN0aW9ucyAuY2FyZCBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMmVtO1xuICAgfVxuICAgLmNhcmRzLXNnZ2VzdGlvbnMgLmNhcmQtdGl0bGV7XG4gICAgY29sb3I6I0Y5NzMwMDtcbiAgICAgXG4gICB9XG4gICAuY2FyZHMtc2dnZXN0aW9ucyAuY2FyZC1ib2R5e1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgIH0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/searchresult/searchresult.component.html":
/*!**********************************************************!*\
  !*** ./src/app/searchresult/searchresult.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card card-block\">\n  <h3>\n    <p>\n      <span>Symptoms:</span>\n      <span class=\"badge badge-secondary\" *ngFor=\"let symptom of searchResult.symptoms\">{{symptom}}</span>\n    </p>\n  </h3>\n  <p>\n    <span>Medicines:</span>\n    <span *ngFor=\"let medicine of searchResult.medicines\">{{medicine}}</span>\n  </p>\n  <p>\n    <span>Doctors:</span>\n    <span *ngFor=\"let doctor of searchResult.doctors\">{{doctor}}</span>\n  </p>\n  <p>\n    <span>Comments:</span>\n    <span>{{comments}}</span>\n  </p>\n</div> -->\n\n\n\n      <!-- <div class=\"col-md-4 col-lg-4 col-sm-12\">\n        <div class=\"card card-block\">\n          <div class=\"card-body\">\n            \n              <p>\n                <span>Symptoms:</span>\n                <span class=\"symptoms\" *ngFor=\"let symptom of searchResult.symptoms\">{{symptom}}</span>\n              </p>\n            \n            <p>\n              <span>Medicines:</span>\n              <span class=\"medicines\" *ngFor=\"let medicine of searchResult.medicines\">{{medicine}}</span>\n            </p>\n            <p>\n              <span>Doctors:</span>\n              <span class=\"doctors\" *ngFor=\"let doctor of searchResult.doctors\">{{doctor}}</span>\n            </p>\n            <p>\n              <span>Comments:</span>\n              <span>{{comments}}</span>\n            </p>\n          </div>\n          <div class=\"card-footer\">\n            <a href=\"\" class=\"card-link\">Submitted By: </a>\n          </div>\n        </div>\n      </div> -->\n\n  "

/***/ }),

/***/ "./src/app/searchresult/searchresult.component.ts":
/*!********************************************************!*\
  !*** ./src/app/searchresult/searchresult.component.ts ***!
  \********************************************************/
/*! exports provided: SearchresultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchresultComponent", function() { return SearchresultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_searchresult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/searchresult */ "./src/app/models/searchresult.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchresultComponent = /** @class */ (function () {
    function SearchresultComponent() {
    }
    SearchresultComponent.prototype.ngOnInit = function () {
        console.log('askjdhjks', this.searchResult);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('suggestion'),
        __metadata("design:type", _models_searchresult__WEBPACK_IMPORTED_MODULE_1__["SearchResult"])
    ], SearchresultComponent.prototype, "searchResult", void 0);
    SearchresultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'app-searchresult', template: __webpack_require__(/*! ./searchresult.component.html */ "./src/app/searchresult/searchresult.component.html"), styles: [__webpack_require__(/*! ./searchresult.component.css */ "./src/app/searchresult/searchresult.component.css")] }),
        __metadata("design:paramtypes", [])
    ], SearchresultComponent);
    return SearchresultComponent;
}());



/***/ }),

/***/ "./src/app/searchresultlist/searchresultlist.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/searchresultlist/searchresultlist.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n    margin-top: 6em;\n}\n\n.card-body .symptoms, .medicines, .doctors{\n    margin: 0px 2px;\n}\n\n.cards-sggestions{\n    margin: 6em 0;\n    position: relative; \n   }\n\n.cards-sggestions h1{\n    color:#F97300;\n    margin: 2em; \n   }\n\n.cards-sggestions .card{\n    box-shadow: 0 0 20px #ccc;\n   }\n\n.cards-sggestions .card img{\n    width: 100%;\n    height: 12em;\n   }\n\n.cards-sggestions .card-title{\n    color:#F97300;\n     \n   }\n\n.cards-sggestions .card-body{\n    padding: 1em;\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNocmVzdWx0bGlzdC9zZWFyY2hyZXN1bHRsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25COztBQUNEO0lBQ0MsY0FBYztJQUNkLFlBQVk7SUFDWjs7QUFDRDtJQUNDLDBCQUEwQjtJQUMxQjs7QUFDRDtJQUNDLFlBQVk7SUFDWixhQUFhO0lBQ2I7O0FBQ0Q7SUFDQyxjQUFjOztJQUVkOztBQUNEO0lBQ0MsYUFBYTtJQUNiIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNocmVzdWx0bGlzdC9zZWFyY2hyZXN1bHRsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQge1xuICAgIG1hcmdpbi10b3A6IDZlbTtcbn1cblxuLmNhcmQtYm9keSAuc3ltcHRvbXMsIC5tZWRpY2luZXMsIC5kb2N0b3Jze1xuICAgIG1hcmdpbjogMHB4IDJweDtcbn1cblxuLmNhcmRzLXNnZ2VzdGlvbnN7XG4gICAgbWFyZ2luOiA2ZW0gMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgfVxuICAgLmNhcmRzLXNnZ2VzdGlvbnMgaDF7XG4gICAgY29sb3I6I0Y5NzMwMDtcbiAgICBtYXJnaW46IDJlbTsgXG4gICB9XG4gICAuY2FyZHMtc2dnZXN0aW9ucyAuY2FyZHtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAjY2NjO1xuICAgfVxuICAgLmNhcmRzLXNnZ2VzdGlvbnMgLmNhcmQgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTJlbTtcbiAgIH1cbiAgIC5jYXJkcy1zZ2dlc3Rpb25zIC5jYXJkLXRpdGxle1xuICAgIGNvbG9yOiNGOTczMDA7XG4gICAgIFxuICAgfVxuICAgLmNhcmRzLXNnZ2VzdGlvbnMgLmNhcmQtYm9keXtcbiAgICBwYWRkaW5nOiAxZW07XG4gICB9Il19 */"

/***/ }),

/***/ "./src/app/searchresultlist/searchresultlist.component.html":
/*!******************************************************************!*\
  !*** ./src/app/searchresultlist/searchresultlist.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cards-sggestions\" id=\"cards-sggestions\" *ngIf=\"!showNotification\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- <app-searchresult *ngFor=\"let searchResult of searchResults\" [suggestion]=\"searchResult\">\n\n      </app-searchresult> -->\n      <div class=\"col-md-4 col-lg-4 col-sm-12\" *ngFor=\"let searchResult of searchResults\">\n          <div class=\"card card-block\">\n            <div class=\"card-body\">\n              \n                <p>\n                  <span>Symptoms:</span>\n                  <span class=\"symptoms\" *ngFor=\"let symptom of searchResult.symptoms\">{{symptom}}</span>\n                </p>\n              \n              <p>\n                <span>Medicines:</span>\n                <span class=\"medicines\" *ngFor=\"let medicine of searchResult.medicines\">{{medicine}}</span>\n              </p>\n              <p>\n                <span>Doctors:</span>\n                <span class=\"doctors\" *ngFor=\"let doctor of searchResult.doctors\">{{doctor}}</span>\n              </p>\n              <p>\n                <span>Comments:</span>\n                <span>{{comments}}</span>\n              </p>\n            </div>\n            <div class=\"card-footer\">\n              <a href=\"\" class=\"card-link\">Submitted By: </a>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n<div class=\"alert alert-dismissible fade show\" *ngIf=\"showNotification\" role=\"alert\" [ngClass]=\"className\">\n  <strong>Holy guacamole!</strong> {{notificationMessage}}\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/searchresultlist/searchresultlist.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/searchresultlist/searchresultlist.component.ts ***!
  \****************************************************************/
/*! exports provided: SearchresultlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchresultlistComponent", function() { return SearchresultlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _searchbar_fetchresult_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../searchbar/fetchresult.service */ "./src/app/searchbar/fetchresult.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchresultlistComponent = /** @class */ (function () {
    function SearchresultlistComponent(router, route, _fetchResultService) {
        this.router = router;
        this.route = route;
        this._fetchResultService = _fetchResultService;
        this.showNotification = false;
    }
    SearchresultlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .queryParams
            .subscribe(function (params) {
            if (!params.term)
                return;
            _this.searchSuggestion(params.term);
            _this.className = 'alert-info';
        });
    };
    SearchresultlistComponent.prototype.searchSuggestion = function (params) {
        var _this = this;
        this
            ._fetchResultService
            .fetchResult(params)
            .then(function (response) {
            _this.searchResults = response;
            if (_this.searchResults.length === 0) {
                _this.showNotification = true;
                _this.notificationMessage = 'Suggestions not found';
            }
            else {
                _this.showNotification = false;
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SearchresultlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'app-searchresultlist', template: __webpack_require__(/*! ./searchresultlist.component.html */ "./src/app/searchresultlist/searchresultlist.component.html"), styles: [__webpack_require__(/*! ./searchresultlist.component.css */ "./src/app/searchresultlist/searchresultlist.component.css")] }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _searchbar_fetchresult_service__WEBPACK_IMPORTED_MODULE_2__["FetchResultService"]])
    ], SearchresultlistComponent);
    return SearchresultlistComponent;
}());



/***/ }),

/***/ "./src/app/submissionform/postsuggestion.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/submissionform/postsuggestion.service.ts ***!
  \**********************************************************/
/*! exports provided: PostSuggestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSuggestionService", function() { return PostSuggestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostSuggestionService = /** @class */ (function () {
    function PostSuggestionService(http) {
        this.http = http;
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            this.baseUrl = 'http://localhost:3000/';
        }
        else {
            this.baseUrl = 'https://medicinehelp.herokuapp.com/';
        }
    }
    PostSuggestionService.prototype.submitSuggestion = function (formValues) {
        var _this = this;
        var requestObject = this.prepareRequestObject(formValues);
        var url = this.baseUrl + "submitsuggestion";
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(url, requestObject).toPromise().then(function (response) {
                if (response._id)
                    resolve(response);
                else
                    reject(response);
            }).catch(function (err) { return reject(err); });
        });
        return promise;
    };
    PostSuggestionService.prototype.resetSubmissionForm = function () {
    };
    PostSuggestionService.prototype.prepareRequestObject = function (formValues) {
        var symptoms = formValues.symptoms && formValues.symptoms.split(',').map(function (item) { return item.trim().toLowerCase(); });
        var medicines = formValues.medicines && formValues.medicines.split(',').map(function (item) { return item.trim().toLowerCase(); });
        var doctors = formValues.doctors && formValues.doctors.split(',').map(function (item) { return item.trim().toLowerCase(); });
        var comments = formValues.comments;
        var requestObject = {
            symptoms: symptoms,
            medicines: medicines,
            doctors: doctors,
            comments: comments
        };
        return requestObject;
        //   {
        //     "symptoms": ["breathing problem", "dizziness"],
        //     "medicines": ["citrizine"],
        //     "doctors": ["shantnu","chandani"],
        //     "comments": "hdfhehfghghjgghj"
        // }
    };
    PostSuggestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostSuggestionService);
    return PostSuggestionService;
}());



/***/ }),

/***/ "./src/app/submissionform/submissionform.component.css":
/*!*************************************************************!*\
  !*** ./src/app/submissionform/submissionform.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".suggestion-form {\n    margin: 6em 16.1em;\n}\n\n.alert {\n    margin-top: 6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VibWlzc2lvbmZvcm0vc3VibWlzc2lvbmZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3N1Ym1pc3Npb25mb3JtL3N1Ym1pc3Npb25mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VnZ2VzdGlvbi1mb3JtIHtcbiAgICBtYXJnaW46IDZlbSAxNi4xZW07XG59XG5cbi5hbGVydCB7XG4gICAgbWFyZ2luLXRvcDogNmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/submissionform/submissionform.component.html":
/*!**************************************************************!*\
  !*** ./src/app/submissionform/submissionform.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"alert alert-dismissible fade show\" *ngIf=\"showNotification\" role=\"alert\" [ngClass]=\"className\">\n    <strong>Holy guacamole!</strong> {{notificationMessage}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n\n<div class=\"container suggestion-form\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n        <form [formGroup]=\"suggestionForm\" novalidate (ngSubmit)=\"submitSuggestion()\">\n            \n          <div class=\"form-group\">\n            <label>Symptoms:</label>\n            <input [ngClass]=\"{\n              'is-valid' : symptoms.valid && (symptoms.dirty || symptoms.touched),\n              'is-invalid' : symptoms.invalid && (symptoms.dirty || symptoms.touched)\n            }\" type=\"text\" class=\"form-control is-invalid\" formControlName=\"symptoms\" required />\n            <small id=\"symptomsHelpBlock\" class=\"form-text text-muted\">\n                If more then one symptom. Please enter comma seperated values symptoms e.g thyroid, weakness\n              </small>\n            <div class=\"form-control-feedback\" [ngClass]=\"{\n              'valid-feedback' : symptoms.valid && (symptoms.dirty || symptoms.touched),\n              'invalid-feedback' : symptoms.invalid && (symptoms.dirty || symptoms.touched)\n            }\"\n\n             *ngIf=\"symptoms.errors && (symptoms.dirty || symptoms.touched)\">\n              <p *ngIf=\"symptoms.errors.required\">Symptom is required</p>\n            </div>\n          </div>\n\n\n          <div class=\"form-group\" >\n            <label>Medicines:</label>\n            <input [ngClass]=\"{\n              'is-valid' : medicines.valid && (medicines.dirty || medicines.touched),\n              'is-invalid' : medicines.invalid && (medicines.dirty || medicines.touched)\n            }\" type=\"text\" class=\"form-control\" formControlName=\"medicines\" required />\n            <small id=\"medicinesBlock\" class=\"form-text text-muted\">\n                If more then one medicines. Please enter comma seperated medicines e.g citrizine, duonose\n              </small>\n            <div class=\"form-control-feedback\" [ngClass]=\"{\n              'valid-feedback' : medicines.valid && (medicines.dirty || medicines.touched),\n              'invalid-feedback' : medicines.invalid && (medicines.dirty || medicines.touched)\n            }\" *ngIf=\"medicines.errors && (medicines.dirty || medicines.touched)\">\n              <p *ngIf=\"medicines.errors.required\">Medicine is required</p>\n            </div>\n          </div>\n\n\n\n          <div class=\"form-group\">\n            <label>Doctors:</label>\n            <input  type=\"text\" class=\"form-control\" formControlName=\"doctors\" />\n            <small id=\"medicinesBlock\" class=\"form-text text-muted\">\n                If more then one doctors. Please enter comma seperated doctor names.\n              </small>\n          </div>\n          <div class=\"form-group\">\n            <label>Comments:</label>\n            <textarea class=\"form-control\" aria-label=\"comments textarea\" formControlName=\"comments\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary float-right\" [disabled]=\"suggestionForm.invalid\">Submit\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"resetSubmissionForm()\">Reset\n          </button>\n        </form>\n    </div>\n    \n  </div>\n</div>\n<!-- <pre>{{suggestionForm.value | json}}</pre>\n<pre>dirty : {{symptoms.dirty}}</pre>\n<pre>pristine : {{symptoms.pristine}}</pre>\n<pre>touched : {{symptoms.touched}}</pre>\n<pre>untouched : {{symptoms.untouched}}</pre>\n<pre>valid : {{symptoms.valid}}</pre>\n<pre>invalid : {{symptoms.invalid}}</pre>\n<pre>error : {{symptoms.error}}</pre> -->"

/***/ }),

/***/ "./src/app/submissionform/submissionform.component.ts":
/*!************************************************************!*\
  !*** ./src/app/submissionform/submissionform.component.ts ***!
  \************************************************************/
/*! exports provided: SubmissionformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionformComponent", function() { return SubmissionformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _postsuggestion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postsuggestion.service */ "./src/app/submissionform/postsuggestion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubmissionformComponent = /** @class */ (function () {
    function SubmissionformComponent(_postSuggestionService) {
        this._postSuggestionService = _postSuggestionService;
        this.submissionClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showNotification = false;
    }
    SubmissionformComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createFormGroup();
    };
    SubmissionformComponent.prototype.createFormControls = function () {
        this.symptoms = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.medicines = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.doctors = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.comments = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
    };
    SubmissionformComponent.prototype.createFormGroup = function () {
        this.suggestionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            symptoms: this.symptoms,
            medicines: this.medicines,
            doctors: this.doctors,
            comments: this.comments,
        });
    };
    SubmissionformComponent.prototype.submitSuggestion = function () {
        var _this = this;
        if (this.suggestionForm.valid) {
            console.log("form submitted", this.suggestionForm.value);
            this._postSuggestionService.submitSuggestion(this.suggestionForm.value).then(function (res) {
                _this.showNotification = true;
                _this.className = 'alert-success';
                _this.notificationMessage = "suggestion was saved !!";
                _this.suggestionForm.reset();
                _this.submissionClickEvent.emit(res);
            }).catch(function (err) {
                console.log(err);
                _this.showNotification = true;
                _this.className = 'alert-danger';
                _this.notificationMessage = "suggestion was NOT saved !!";
            });
        }
    };
    SubmissionformComponent.prototype.resetSubmissionForm = function () {
        this.suggestionForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SubmissionformComponent.prototype, "submissionClickEvent", void 0);
    SubmissionformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submissionform',
            template: __webpack_require__(/*! ./submissionform.component.html */ "./src/app/submissionform/submissionform.component.html"),
            styles: [__webpack_require__(/*! ./submissionform.component.css */ "./src/app/submissionform/submissionform.component.css")]
        }),
        __metadata("design:paramtypes", [_postsuggestion_service__WEBPACK_IMPORTED_MODULE_2__["PostSuggestionService"]])
    ], SubmissionformComponent);
    return SubmissionformComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kumarshantnu/Desktop/MediHelp/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map