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

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/author/author.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/author/author.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"(author$ | async) as author\">\n    <div class=\"container-xl\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-sm-12 col-lg-10\">\n                <div class=\"author\">\n\n                    <div class=\"author__image\">\n                        <img src=\"assets/img/developer.jpg\" alt=\"Author image\" class=\"img-fluid\">\n                    </div>\n                    <div class=\"author__details\">\n                        <h1 class=\"author__name\">{{ author.name }}</h1>\n                        <h2 class=\"author__description\" *ngIf=\"author.description\">{{author.description}}</h2>\n                        <div class=\"author__meta\">\n                            <span class=\"author__posts-count\">{{ author.posts.length }} total post<ng-container\n                                    *ngIf=\"author.posts.length > 1\">s\n                                </ng-container></span>\n                            <span class=\"bullet\"></span>\n                            <a *ngIf=\"author.website\" target=\"_blank\" [href]=\"author.website\"\n                                class=\"author__website\">Website <svg-icon class=\"ml-1\" icon=\"external-link\"></svg-icon>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <app-posts [posts]=\"author.posts\"></app-posts>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/email-sub/email-sub.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/email-sub/email-sub.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>email-sub works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home/home.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home/home.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-posts [posts]=\"posts | paginate : {\n  itemsPerPage: 10,\n  currentPage: page,\n  totalItems: count\n}\"></app-posts>\n<div class=\"d-flex justify-content-center mb-5 align-items-center\">\n  <pagination-controls responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" (pageChange)=\"onTableDataChange($event)\">\n  </pagination-controls>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing/footer/footer.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing/footer/footer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container-xl\">\n    <div class=\"footer__content\">\n      <div class=\"footer__cp-message\"><a href=\"#\">Write it Down</a> &copy; 2021</div>\n      <div class=\"footer__credits\">\n        Built with ❤️ by <a href=\"https://0xali.com\">Ali Raza</a>.\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing/header/header.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing/header/header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-top\">\n    <div class=\"container-xl\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <nav class=\"top-nav\">\n            <a class=\"top-nav__brand\" routerLink=\"/\">WID</a>\n  \n            <div *ngIf=\"topNavVisible\" [@slideInOutFromRight] class=\"top-nav__res-list-wrapper\">\n              <ul class=\"top-nav__list\">\n                <li class=\"top-nav__item\">\n                  <a class=\"top-nav__link\" routerLink=\"/\">Home</a>\n                </li>\n                <li *ngFor=\"let page of pages$ | async\" class=\"top-nav__item\">\n                  <a class=\"top-nav__link\" [routerLink]=\"['/', page.slug]\">{{page.title}}</a>\n                </li>\n              </ul>\n            </div>\n  \n            <ul class=\"top-nav__list\">\n              <li class=\"top-nav__item\">\n                <a href=\"#\" class=\"btn btn-sm top-nav__link\">\n                  <svg-icon icon=\"search\" class=\"mr-1\"></svg-icon> Search\n                </a>\n              </li>\n              <li class=\"top-nav__item\">\n                <a class=\"top-nav__link\" routerLink=\"/admin\">Admin\n                  <svg-icon icon=\"hand-right\" class=\"ml-1\"></svg-icon>\n                </a>\n              </li>\n            </ul>\n            <a class=\"top-nav__res-list-toggler\" (click)=\"toggleTopNav()\">\n              <span class=\"top-nav__res-list-toggler-icon\"\n                [ngClass]=\"{'top-nav__res-list-toggler-icon--cross': topNavVisible}\"></span>\n            </a>\n          </nav>\n        </div>\n        <div class=\"col-sm-12\">\n          <div class=\"top-tags\">\n            <ul class=\"top-tags__list\">\n              <li *ngFor=\"let tag of tags$ | async\">\n                <a [routerLink]=\"['/tag', tag.slug]\" routerLinkActive=\"top-tags__link--active\"\n                  class=\"top-tags__link\">{{tag.name}}</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n  \n    </div>\n  </header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing/landing.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing/landing.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/post/post.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/post/post.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-xl\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <main class=\"py-5\">\n                <article *ngIf=\"post\" class=\"post\">\n                    <header class=\"post__header w-700-centered\">\n                        <h1 class=\"post__primary-title\">\n                            {{post.title}}\n                        </h1>\n                        <p class=\"post__excerpt\">\n                            {{post.custom_excerpt}}\n                        </p>\n                        <div *ngIf=\"!isPage()\" class=\"post__meta\">\n                            <a href=\"#\" class=\"post__author-image\">\n                                <img [ngStyle]=\"{'opacity': '.5'}\" src=\"assets/img/user.png\" alt=\"\" class=\"img-fluid \">\n                            </a>\n                            <div class=\"post__meta-content\">\n                                <a routerLink=\"/author/{{post.author.slug}}\"\n                                    class=\"post__author-name\">{{post.author.name}}</a>\n                                <time [title]=\"post.published_at | date:'long'\" [dateTime]=\"post.published_at\"\n                                    class=\"post__publish-date\">{{post.published_at |\n                                    date}}</time>\n                            </div>\n                            <div class=\"post__sharing-btns\">\n                                <!-- Sharingbutton Twitter -->\n                                <a class=\"resp-sharing-button__link\"\n                                    href=\"https://twitter.com/intent/tweet/?text={{post.title}}&amp;url={{post.slug}}\"\n                                    target=\"_blank\" rel=\"noopener\" aria-label=\"\">\n                                    <div\n                                        class=\"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small\">\n                                        <div aria-hidden=\"true\"\n                                            class=\"resp-sharing-button__icon resp-sharing-button__icon--solid\">\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                                                <path\n                                                    d=\"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z\" />\n                                            </svg>\n                                        </div>\n                                    </div>\n                                </a>\n\n                                <!-- Sharingbutton Facebook -->\n                                <a class=\"resp-sharing-button__link\"\n                                    href=\"https://facebook.com/sharer/sharer.php?u={{post.slug}}\" target=\"_blank\"\n                                    rel=\"noopener\" aria-label=\"\">\n                                    <div\n                                        class=\"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small\">\n                                        <div aria-hidden=\"true\"\n                                            class=\"resp-sharing-button__icon resp-sharing-button__icon--solid\">\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                                                <path\n                                                    d=\"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z\" />\n                                            </svg>\n                                        </div>\n                                    </div>\n                                </a>\n\n\n                                <!-- Sharingbutton LinkedIn -->\n                                <a class=\"resp-sharing-button__link\"\n                                    href=\"https://www.linkedin.com/shareArticle?mini=true&amp;url={{post.slug}}&amp;title={{post.title}}&amp;summary={{post.title}}\"\n                                    target=\"_blank\" rel=\"noopener\" aria-label=\"\">\n                                    <div\n                                        class=\"resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--small\">\n                                        <div aria-hidden=\"true\"\n                                            class=\"resp-sharing-button__icon resp-sharing-button__icon--solid\">\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                                                <path\n                                                    d=\"M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z\" />\n                                            </svg>\n                                        </div>\n                                    </div>\n                                </a>\n\n                                <!-- Sharingbutton Reddit -->\n                                <a class=\"resp-sharing-button__link\"\n                                    href=\"https://reddit.com/submit/?url={{post.slug}}&amp;resubmit=true&amp;title={{post.title}}\"\n                                    target=\"_blank\" rel=\"noopener\" aria-label=\"\">\n                                    <div\n                                        class=\"resp-sharing-button resp-sharing-button--reddit resp-sharing-button--small\">\n                                        <div aria-hidden=\"true\"\n                                            class=\"resp-sharing-button__icon resp-sharing-button__icon--solid\">\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                                                <path\n                                                    d=\"M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z\" />\n                                            </svg>\n                                        </div>\n                                    </div>\n                                </a>\n\n                                <!-- Sharingbutton Telegram -->\n                                <a class=\"resp-sharing-button__link\"\n                                    href=\"https://telegram.me/share/url?text={{post.title}}&amp;url={{post.slug}}\"\n                                    target=\"_blank\" rel=\"noopener\" aria-label=\"\">\n                                    <div\n                                        class=\"resp-sharing-button resp-sharing-button--telegram resp-sharing-button--small\">\n                                        <div aria-hidden=\"true\"\n                                            class=\"resp-sharing-button__icon resp-sharing-button__icon--solid\">\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                                                <path\n                                                    d=\"M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z\" />\n                                            </svg>\n                                        </div>\n                                    </div>\n                                </a>\n\n                                <!-- Sharingbutton E-Mail -->\n                                <a class=\"resp-sharing-button__link\"\n                                    href=\"mailto:?subject={{post.title}}&amp;body={{post.slug}}\" target=\"_blank\"\n                                    rel=\"noopener\" aria-label=\"\">\n                                    <div\n                                        class=\"resp-sharing-button resp-sharing-button--email resp-sharing-button--small\">\n                                        <div aria-hidden=\"true\"\n                                            class=\"resp-sharing-button__icon resp-sharing-button__icon--solid\">\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                                                <path\n                                                    d=\"M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z\" />\n                                            </svg>\n                                        </div>\n                                    </div>\n                                </a>\n\n                            </div>\n                        </div>\n                    </header>\n                    <figure class=\"post__featured-image\" *ngIf=\"post.featured_image\">\n                        <img src=\"{{ApiUrl + '/' + post.featured_image}}\" alt=\"\" class=\"img-fluid\">\n                    </figure>\n                    <section class=\"post__content w-700-centered\">\n                        <div class=\"post__inner-content-box\" [innerHTML]=\"post.html\"></div>\n                    </section>\n                    <section class=\"post__tags w-700-centered\">\n                        <a *ngFor=\"let tag of post.tags\" routerLink=\"/tag/{{tag.slug}}\">{{tag.name}}</a>\n                    </section>\n                </article>\n            </main>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/posts/posts.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/posts/posts.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-xl\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-12 col-lg-10\">\n      <main class=\"\">\n        <article *ngFor=\"let post of posts\" class=\"post-card\">\n\n          <a *ngIf=\"post.featured_image\" routerLink=\"/{{post.slug}}\" class=\"post-card__image-link\">\n            <img src=\"{{apiUrl + '/' + post.featured_image}}\" class=\"post-card__image img-fluid\">\n          </a>\n          <div class=\"post-card__content\">\n            <a routerLink=\"/{{post.slug}}\" class=\"post-card__content-link\">\n              <header class=\"post-card__header\">\n                <div *ngIf=\"post.first_tag\" class=\"post-card__tag\">\n                  {{ post.first_tag.name }}\n                </div>\n                <h2 class=\"post-card__title\">\n                  {{ post.title }}\n                </h2>\n              </header>\n              <section class=\"post-card__excerpt\">\n                <p>\n                  {{ post.custom_excerpt }}\n                </p>\n              </section>\n            </a>\n            <footer class=\"post-card__meta\">\n              <div class=\"post-card__author-image\">\n                <a routerLink=\"/author/{{post.author.slug}}\">\n                  <img [ngStyle]=\"{'opacity': '.5'}\" src=\"assets/img/user.png\" alt=\"\" class=\"img-fluid\">\n                </a>\n              </div>\n              <div>\n                <span>\n                  <a routerLink=\"/author/{{post.author.slug}}\">{{post.author.name}}</a></span>\n                <span>\n                  <time [dateTime]=\"post.published_at\">{{post.published_at | date}}</time>\n                </span>\n\n              </div>\n            </footer>\n          </div>\n\n        </article>\n        \n      </main>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/tag/tag.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/tag/tag.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"(tag$ | async) as tag\">\n    <div class=\"container-xl\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-sm-10 col-lg-8\">\n                <div class=\"tag\">\n                    <h1 class=\"tag__name\">{{ tag.name }}</h1>\n                    <h2 class=\"tag__description\" *ngIf=\"tag.description\">{{tag.description}}</h2>\n                    <div class=\"tag__meta\">\n                        <span class=\"tag__posts-count\">{{ tag.posts.length }} total post<ng-container\n                                *ngIf=\"tag.posts.length > 1\">s\n                            </ng-container></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-posts [posts]=\"tag.posts\"></app-posts>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/popup-msg/popup-msg.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/popup-msg/popup-msg.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"errors\">\n    <div class=\"alert alert-danger alert-dismissible\" *ngFor=\"let item of errors | keyvalue\">\n        <button class=\"close\" (click)=\"deleteError($event, item.key)\">&times;</button>\n        {{ item.value }}\n    </div>\n</ng-container>\n<ng-container *ngIf=\"successMessages\">\n    <div class=\"alert alert-success alert-dismissible\" *ngFor=\"let item of successMessages | keyvalue\">\n        <button class=\"close\" (click)=\"deleteSuccessMsg($event, item.key)\">&times;</button>\n        {{ item.value }}\n    </div>\n</ng-container>"

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



const routes = [
    // {
    //   path: "",
    //   redirectTo: "/admin",
    //   pathMatch: "full",
    // },
    {
        path: "admin",
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "./src/app/admin/admin.module.ts")).then(m => m.AdminModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'write-it-down';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared-module */ "./src/app/shared-module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/highlight.service.ts":
/*!**************************************!*\
  !*** ./src/app/highlight.service.ts ***!
  \**************************************/
/*! exports provided: HighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return HighlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar */ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-markup-templating */ "./node_modules/prismjs/components/prism-markup-templating.js");
/* harmony import */ var prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-php */ "./node_modules/prismjs/components/prism-php.js");
/* harmony import */ var prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-java */ "./node_modules/prismjs/components/prism-java.js");
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prismjs/components/prism-sass */ "./node_modules/prismjs/components/prism-sass.js");
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prismjs/components/prism-scss */ "./node_modules/prismjs/components/prism-scss.js");
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_14__);




// import 'clipboard';












let HighlightService = class HighlightService {
    constructor(platformId) {
        this.platformId = platformId;
    }
    highlightAll() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
        }
    }
};
HighlightService.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
HighlightService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], HighlightService);



/***/ }),

/***/ "./src/app/home/_models/author.ts":
/*!****************************************!*\
  !*** ./src/app/home/_models/author.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/home/_models/index.ts":
/*!***************************************!*\
  !*** ./src/app/home/_models/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./author */ "./src/app/home/_models/author.ts");
/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_author__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _author__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _author__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./src/app/home/_models/post.ts");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_post__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _post__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _post__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag */ "./src/app/home/_models/tag.ts");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tag__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tag__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./src/app/home/_models/type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return _type__WEBPACK_IMPORTED_MODULE_3__["Type"]; });







/***/ }),

/***/ "./src/app/home/_models/post.ts":
/*!**************************************!*\
  !*** ./src/app/home/_models/post.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/home/_models/tag.ts":
/*!*************************************!*\
  !*** ./src/app/home/_models/tag.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/home/_models/type.ts":
/*!**************************************!*\
  !*** ./src/app/home/_models/type.ts ***!
  \**************************************/
/*! exports provided: Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
var Type;
(function (Type) {
    Type["Post"] = "post";
    Type["Page"] = "page";
})(Type || (Type = {}));


/***/ }),

/***/ "./src/app/home/_services/home.service.ts":
/*!************************************************!*\
  !*** ./src/app/home/_services/home.service.ts ***!
  \************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");




let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
    }
    indexPosts(page) {
        const params = {};
        params.page = page;
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/blog`, {
            params,
        });
    }
    indexPages() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/blog/page`);
    }
    indexTags() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/blog/tag`);
    }
    getPost(slug) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/blog/${slug}`);
    }
    getAuthor(slug) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/blog/author/${slug}`);
    }
    getTag(slug) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/blog/tag/${slug}`);
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], HomeService);



/***/ }),

/***/ "./src/app/home/author/author.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/author/author.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.w-700-centered {\n  max-width: 45rem;\n  margin: 0 auto;\n  padding: 0 0.625rem;\n}\n.bullet:before {\n  content: \"•\";\n  display: inline-block;\n  color: #747d85;\n  margin: 0 0.75rem;\n  opacity: 0.6;\n  font-weight: 300;\n}\n.author {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 4.375rem 0 1.25rem;\n  border-bottom: 0.03125rem solid #e2e7eb;\n}\n@media (min-width: 576px) {\n  .author {\n    flex-direction: row;\n  }\n}\n.author__image {\n  flex: 0 0 8.75rem;\n  max-width: 8.75rem;\n}\n.author__image img {\n  border-radius: 12.5rem;\n}\n.author__details {\n  margin: 1.875rem 0 0;\n}\n@media (min-width: 576px) {\n  .author__details {\n    margin: 0 0 0 1.875rem;\n  }\n}\n.author__name {\n  margin: 0 0 0.5rem 0;\n  font-size: 2.625rem;\n  color: #1f2327;\n}\n@media (min-width: 576px) {\n  .author__name {\n    font-size: 3.125rem;\n  }\n}\n.author__description {\n  font-size: 1.125rem;\n  color: #747d85;\n  font-weight: 400;\n}\n@media (min-width: 576px) {\n  .author__description {\n    font-size: 1.25rem;\n  }\n}\n.author__meta {\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n}\n.author__posts-count {\n  font-size: 0.75rem;\n  color: #747d85;\n}\n.author__website {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #31373b;\n  text-decoration: none;\n  padding: 0.375rem 0;\n}\n.author__website:hover, .author__website:focus {\n  color: #31373b;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hdXRob3IvYXV0aG9yLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvc3JjL2FwcC9ob21lL2F1dGhvci9hdXRob3IuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay93aWQtYmxvZy1mcm9udGVuZC93aWQtYmxvZy1mcm9udGVuZC9zcmMvYXBwL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvc3RkaW4iLCIvaG9tZS9ydW5uZXIvd29yay93aWQtYmxvZy1mcm9udGVuZC93aWQtYmxvZy1mcm9udGVuZC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9faG92ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBREVGO0FDRUU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjQ0NnQjtFREFoQixpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRENKO0FHYkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUlBLDJCQUFBO0VBQ0EsdUNBQUE7QUhhRjtBSXNDSTtFRDNESjtJQUtJLG1CQUFBO0VIb0JGO0FBQ0Y7QUdqQkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FIbUJKO0FHbEJJO0VBQ0Usc0JBQUE7QUhvQk47QUdqQkU7RUFDRSxvQkFBQTtBSG1CSjtBSXVCSTtFRDNDRjtJQUdJLHNCQUFBO0VIcUJKO0FBQ0Y7QUduQkU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBSUEsY0RmZ0I7QUZpQ3BCO0FJYUk7RURyQ0Y7SUFJSSxtQkFBQTtFSHdCSjtBQUNGO0FHckJFO0VBQ0UsbUJBQUE7RUFJQSxjRHpCZ0I7RUMwQmhCLGdCQUFBO0FIb0JKO0FJR0k7RUQ3QkY7SUFHSSxrQkFBQTtFSDJCSjtBQUNGO0FHdEJFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUh3Qko7QUdyQkU7RUFDRSxrQkFBQTtFQUNBLGNEckNnQjtBRjREcEI7QUdyQkU7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0QzQ2dCO0VDNENoQixxQkFBQTtFQUNBLG1CQUFBO0FIdUJKO0FLakVFO0VGNENJLGNEL0NjO0VDZ0RkLDBCQUFBO0FId0JOIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hdXRob3IvYXV0aG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnctNzAwLWNlbnRlcmVkIHtcbiAgbWF4LXdpZHRoOiA0NXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMC42MjVyZW07XG59XG5cbi5idWxsZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzc0N2Q4NTtcbiAgbWFyZ2luOiAwIDAuNzVyZW07XG4gIG9wYWNpdHk6IDAuNjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmF1dGhvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDQuMzc1cmVtIDAgMS4yNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMC4wMzEyNXJlbSBzb2xpZCAjZTJlN2ViO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5hdXRob3Ige1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbn1cbi5hdXRob3JfX2ltYWdlIHtcbiAgZmxleDogMCAwIDguNzVyZW07XG4gIG1heC13aWR0aDogOC43NXJlbTtcbn1cbi5hdXRob3JfX2ltYWdlIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEyLjVyZW07XG59XG4uYXV0aG9yX19kZXRhaWxzIHtcbiAgbWFyZ2luOiAxLjg3NXJlbSAwIDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmF1dGhvcl9fZGV0YWlscyB7XG4gICAgbWFyZ2luOiAwIDAgMCAxLjg3NXJlbTtcbiAgfVxufVxuLmF1dGhvcl9fbmFtZSB7XG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xuICBmb250LXNpemU6IDIuNjI1cmVtO1xuICBjb2xvcjogIzFmMjMyNztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuYXV0aG9yX19uYW1lIHtcbiAgICBmb250LXNpemU6IDMuMTI1cmVtO1xuICB9XG59XG4uYXV0aG9yX19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGNvbG9yOiAjNzQ3ZDg1O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5hdXRob3JfX2Rlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbi5hdXRob3JfX21ldGEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmF1dGhvcl9fcG9zdHMtY291bnQge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjNzQ3ZDg1O1xufVxuLmF1dGhvcl9fd2Vic2l0ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMxMzczYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwO1xufVxuLmF1dGhvcl9fd2Vic2l0ZTpob3ZlciwgLmF1dGhvcl9fd2Vic2l0ZTpmb2N1cyB7XG4gIGNvbG9yOiAjMzEzNzNiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iLCIudy03MDAtY2VudGVyZWQge1xuICBtYXgtd2lkdGg6IHB4VG9SZW0oNzIwKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgcHhUb1JlbSgxMCk7XG59XG5cbi5idWxsZXQge1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMjJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICRjb2xvci1ncmV5LWRhcmstMTtcbiAgICBtYXJnaW46IDAgcHhUb1JlbSgxMik7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbn1cbiIsIi8vIENPTE9SU1xuXG4kY29sb3ItcHJpbWFyeTogIzA5ODRlMztcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjMTg5NWY2O1xuJGNvbG9yLXByaW1hcnktZGFyazogIzA4NzFjMjtcblxuJGNvbG9yLWdyZXktbGlnaHQtMTogI2Y0ZjdmODtcbiRjb2xvci1ncmV5LWxpZ2h0LTI6ICNlMmU3ZWI7XG4kY29sb3ItZ3JleS1saWdodC0zOiAjY2FkMWQ2O1xuJGNvbG9yLWdyZXktbGlnaHQtNDogI2FjYjNiODtcblxuJGNvbG9yLWdyZXktZGFyay0xOiAjNzQ3ZDg1O1xuJGNvbG9yLWdyZXktZGFyay0yOiAjNTI1YzY0O1xuJGNvbG9yLWdyZXktZGFyay0zOiAjMzEzNzNiO1xuJGNvbG9yLWdyZXktZGFyay00OiAjMWYyMzI3O1xuJGNvbG9yLWdyZXktZGFyay01OiAjMTExMzE2O1xuXG4kY29sb3ItdGV4dC1ibGFjazogJGNvbG9yLWdyZXktZGFyay0zO1xuJGNvbG9yLXRleHQtd2hpdGU6ICRjb2xvci1ncmV5LWxpZ2h0LTI7XG4kYm9keS1iZzogI2ZiZmJmYjtcblxuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWJsYWNrOiAjMDAwO1xuXG5cbiIsIkBpbXBvcnQgXCJzYXNzL2luZGV4XCI7XG4uYXV0aG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgcGFkZGluZzogcHhUb1JlbSg3MCkgMCBweFRvUmVtKDIwKTtcbiAgYm9yZGVyLWJvdHRvbTogcHhUb1JlbSgwLjUpIHNvbGlkICRjb2xvci1ncmV5LWxpZ2h0LTI7XG4gICZfX2ltYWdlIHtcbiAgICBmbGV4OiAwIDAgcHhUb1JlbSgxNDApO1xuICAgIG1heC13aWR0aDogcHhUb1JlbSgxNDApO1xuICAgIGltZyB7XG4gICAgICBib3JkZXItcmFkaXVzOiBweFRvUmVtKDIwMCk7XG4gICAgfVxuICB9XG4gICZfX2RldGFpbHMge1xuICAgIG1hcmdpbjogcHhUb1JlbSgzMCkgMCAwO1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcbiAgICAgIG1hcmdpbjogMCAwIDAgcHhUb1JlbSgzMCk7XG4gICAgfVxuICB9XG4gICZfX25hbWUge1xuICAgIG1hcmdpbjogMCAwIHB4VG9SZW0oOCkgMDtcbiAgICBmb250LXNpemU6IHB4VG9SZW0oNDIpO1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcbiAgICAgIGZvbnQtc2l6ZTogcHhUb1JlbSg1MCk7XG4gICAgfVxuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTQ7XG4gIH1cbiAgJl9fZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxOCk7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgICAgZm9udC1zaXplOiBweFRvUmVtKDIwKTtcbiAgICB9XG4gICAgY29sb3I6ICRjb2xvci1ncmV5LWRhcmstMTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cbiAgJl9fbWV0YSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmX19wb3N0cy1jb3VudCB7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDEyKTtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0xO1xuICB9XG4gICZfX3dlYnNpdGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDEyKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IHB4VG9SZW0oNikgMDtcbiAgICBAaW5jbHVkZSBob3Zlci1mb2N1cyB7XG4gICAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0zO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gIH1cbn1cbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLy8gSG92ZXIgbWl4aW4gYW5kIGAkZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5YCBhcmUgZGVwcmVjYXRlZC5cbi8vXG4vLyBPcmlnaW5hbGx5IGFkZGVkIGR1cmluZyBvdXIgYWxwaGFzIGFuZCBtYWludGFpbmVkIGR1cmluZyBiZXRhcywgdGhpcyBtaXhpbiB3YXNcbi8vIGRlc2lnbmVkIHRvIHByZXZlbnQgYDpob3ZlcmAgc3RpY2tpbmVzcyBvbiBpT1MtYW4gaXNzdWUgd2hlcmUgaG92ZXIgc3R5bGVzXG4vLyB3b3VsZCBwZXJzaXN0IGFmdGVyIGluaXRpYWwgdG91Y2guXG4vL1xuLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIHdlJ3ZlIGtlcHQgdGhlc2UgbWl4aW5zIGFuZCB1cGRhdGVkIHRoZW0gdG9cbi8vIGFsd2F5cyByZXR1cm4gdGhlaXIgcmVndWxhciBwc2V1ZG8tY2xhc3NlcyBpbnN0ZWFkIG9mIGEgc2hpbW1lZCBtZWRpYSBxdWVyeS5cbi8vXG4vLyBJc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNTE5NVxuXG5AbWl4aW4gaG92ZXIoKSB7XG4gICY6aG92ZXIgeyBAY29udGVudDsgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMoKSB7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBwbGFpbi1ob3Zlci1mb2N1cygpIHtcbiAgJixcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGhvdmVyLWZvY3VzLWFjdGl2ZSgpIHtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/author/author.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/author/author.component.ts ***!
  \*************************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/home.service */ "./src/app/home/_services/home.service.ts");






let AuthorComponent = class AuthorComponent {
    constructor(_route, _home) {
        this._route = _route;
        this._home = _home;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this._route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$)).
            subscribe(params => {
            const slug = params.slug;
            if (slug && slug !== "") {
                this.author$ = this._home
                    .getAuthor(slug);
            }
        });
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
};
AuthorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"] }
];
AuthorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-author',
        template: __webpack_require__(/*! raw-loader!./author.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/author/author.component.html"),
        styles: [__webpack_require__(/*! ./author.component.scss */ "./src/app/home/author/author.component.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]])
], AuthorComponent);



/***/ }),

/***/ "./src/app/home/email-sub/email-sub.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/email-sub/email-sub.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZW1haWwtc3ViL2VtYWlsLXN1Yi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/email-sub/email-sub.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/email-sub/email-sub.component.ts ***!
  \*******************************************************/
/*! exports provided: EmailSubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSubComponent", function() { return EmailSubComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmailSubComponent = class EmailSubComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmailSubComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-sub',
        template: __webpack_require__(/*! raw-loader!./email-sub.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/email-sub/email-sub.component.html"),
        styles: [__webpack_require__(/*! ./email-sub.component.scss */ "./src/app/home/email-sub/email-sub.component.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], EmailSubComponent);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _author_author_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./author/author.component */ "./src/app/home/author/author.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/home/landing/landing.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/post.component */ "./src/app/home/post/post.component.ts");
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tag/tag.component */ "./src/app/home/tag/tag.component.ts");








const routes = [
    {
        path: "",
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
        children: [
            {
                path: "",
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            },
            {
                path: ":slug",
                component: _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"],
            },
            {
                path: "author/:slug",
                component: _author_author_component__WEBPACK_IMPORTED_MODULE_3__["AuthorComponent"],
            },
            {
                path: "tag/:slug",
                component: _tag_tag_component__WEBPACK_IMPORTED_MODULE_7__["TagComponent"],
            },
        ]
    },
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/post.component */ "./src/app/home/post/post.component.ts");
/* harmony import */ var _app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared-module */ "./src/app/shared-module.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_services/home.service */ "./src/app/home/_services/home.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/home/posts/posts.component.ts");
/* harmony import */ var _landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing/footer/footer.component */ "./src/app/home/landing/footer/footer.component.ts");
/* harmony import */ var _email_sub_email_sub_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./email-sub/email-sub.component */ "./src/app/home/email-sub/email-sub.component.ts");
/* harmony import */ var _author_author_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./author/author.component */ "./src/app/home/author/author.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/home/landing/landing.component.ts");
/* harmony import */ var _landing_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./landing/header/header.component */ "./src/app/home/landing/header/header.component.ts");
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tag/tag.component */ "./src/app/home/tag/tag.component.ts");

















let HomeModule = class HomeModule {
};
HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"],
            _posts_posts_component__WEBPACK_IMPORTED_MODULE_10__["PostsComponent"],
            _email_sub_email_sub_component__WEBPACK_IMPORTED_MODULE_12__["EmailSubComponent"],
            _author_author_component__WEBPACK_IMPORTED_MODULE_13__["AuthorComponent"],
            _landing_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
            _landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_14__["LandingComponent"],
            _tag_tag_component__WEBPACK_IMPORTED_MODULE_16__["TagComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            _app_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]
        ],
        providers: [
            _services_home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/home.service */ "./src/app/home/_services/home.service.ts");



let HomeComponent = class HomeComponent {
    constructor(_home) {
        this._home = _home;
        this.count = 0;
        this.page = 1;
        this.fetchPosts();
    }
    fetchPosts() {
        this._home.indexPosts(this.page).subscribe(response => {
            this.posts = response.data;
            this.count = response.total;
            this.page = response.current_page;
            this.nextPageUrl = response.next_page_url;
        });
    }
    onTableDataChange(event) {
        this.page = event;
        this.fetchPosts();
    }
    ngOnInit() { }
};
HomeComponent.ctorParameters = () => [
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home/home.component.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/home/landing/footer/footer.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/landing/footer/footer.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.w-700-centered {\n  max-width: 45rem;\n  margin: 0 auto;\n  padding: 0 0.625rem;\n}\n.bullet:before {\n  content: \"•\";\n  display: inline-block;\n  color: #747d85;\n  margin: 0 0.75rem;\n  opacity: 0.6;\n  font-weight: 300;\n}\n:host {\n  margin-top: auto;\n}\n.footer {\n  background-color: #111316;\n}\n.footer__content {\n  padding: 0.75rem 1.5rem 3.75rem;\n  color: #cad1d6;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n}\n@media (min-width: 768px) {\n  .footer__content {\n    flex-direction: row;\n  }\n}\n.footer a {\n  color: #cad1d6;\n  border-bottom: 1px dotted #cad1d6;\n  padding-bottom: 1px;\n}\n.footer a:hover, .footer a:focus {\n  color: #e2e7eb;\n  border-bottom: 1px dotted #e2e7eb;\n}\n.footer__cp-message {\n  padding: 0;\n  margin: 0;\n  margin-top: 0.5rem;\n}\n.footer__credits {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay93aWQtYmxvZy1mcm9udGVuZC93aWQtYmxvZy1mcm9udGVuZC9zcmMvYXBwL2hvbWUvbGFuZGluZy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvc3JjL2FwcC9zYXNzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL3N0ZGluIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2hvdmVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURFRjtBQ0VFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0NDZ0I7RURBaEIsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURDSjtBR1pBO0VBQ0UsZ0JBQUE7QUhlRjtBR2JBO0VBQ0UseUJEU2tCO0FGT3BCO0FHZkU7RUFDRSwrQkFBQTtFQUNBLGNERGlCO0VDRWpCLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUhpQko7QUk4Qkk7RURyREY7SUFRSSxtQkFBQTtFSG1CSjtBQUNGO0FHakJFO0VBQ0UsY0RYaUI7RUNZakIsaUNBQUE7RUFDQSxtQkFBQTtBSG1CSjtBS3hCRTtFRk9JLGNEaEJlO0VDaUJmLGlDQUFBO0FIb0JOO0FHakJFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBSG1CSjtBR2pCRTtFQUNFLGtCQUFBO0FIbUJKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9sYW5kaW5nL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udy03MDAtY2VudGVyZWQge1xuICBtYXgtd2lkdGg6IDQ1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjYyNXJlbTtcbn1cblxuLmJ1bGxldDpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAolwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNzQ3ZDg1O1xuICBtYXJnaW46IDAgMC43NXJlbTtcbiAgb3BhY2l0eTogMC42O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG46aG9zdCB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMzE2O1xufVxuLmZvb3Rlcl9fY29udGVudCB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtIDMuNzVyZW07XG4gIGNvbG9yOiAjY2FkMWQ2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZvb3Rlcl9fY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuLmZvb3RlciBhIHtcbiAgY29sb3I6ICNjYWQxZDY7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2NhZDFkNjtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbn1cbi5mb290ZXIgYTpob3ZlciwgLmZvb3RlciBhOmZvY3VzIHtcbiAgY29sb3I6ICNlMmU3ZWI7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UyZTdlYjtcbn1cbi5mb290ZXJfX2NwLW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5mb290ZXJfX2NyZWRpdHMge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59IiwiLnctNzAwLWNlbnRlcmVkIHtcbiAgbWF4LXdpZHRoOiBweFRvUmVtKDcyMCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIHB4VG9SZW0oMTApO1xufVxuXG4uYnVsbGV0IHtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwyMDIyXCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTE7XG4gICAgbWFyZ2luOiAwIHB4VG9SZW0oMTIpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG59XG4iLCIvLyBDT0xPUlNcblxuJGNvbG9yLXByaW1hcnk6ICMwOTg0ZTM7XG4kY29sb3ItcHJpbWFyeS1saWdodDogIzE4OTVmNjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMwODcxYzI7XG5cbiRjb2xvci1ncmV5LWxpZ2h0LTE6ICNmNGY3Zjg7XG4kY29sb3ItZ3JleS1saWdodC0yOiAjZTJlN2ViO1xuJGNvbG9yLWdyZXktbGlnaHQtMzogI2NhZDFkNjtcbiRjb2xvci1ncmV5LWxpZ2h0LTQ6ICNhY2IzYjg7XG5cbiRjb2xvci1ncmV5LWRhcmstMTogIzc0N2Q4NTtcbiRjb2xvci1ncmV5LWRhcmstMjogIzUyNWM2NDtcbiRjb2xvci1ncmV5LWRhcmstMzogIzMxMzczYjtcbiRjb2xvci1ncmV5LWRhcmstNDogIzFmMjMyNztcbiRjb2xvci1ncmV5LWRhcmstNTogIzExMTMxNjtcblxuJGNvbG9yLXRleHQtYmxhY2s6ICRjb2xvci1ncmV5LWRhcmstMztcbiRjb2xvci10ZXh0LXdoaXRlOiAkY29sb3ItZ3JleS1saWdodC0yO1xuJGJvZHktYmc6ICNmYmZiZmI7XG5cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1ibGFjazogIzAwMDtcblxuXG4iLCJAaW1wb3J0IFwic2Fzcy9pbmRleC5zY3NzXCI7XG5cbjpob3N0IHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTU7XG4gICZfX2NvbnRlbnQge1xuICAgIHBhZGRpbmc6IHB4VG9SZW0oMTIpIHB4VG9SZW0oMjQpIHB4VG9SZW0oNjApO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodC0zO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgfVxuICBhIHtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktbGlnaHQtMztcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICRjb2xvci1ncmV5LWxpZ2h0LTM7XG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgICBAaW5jbHVkZSBob3Zlci1mb2N1cyB7XG4gICAgICBjb2xvcjogJGNvbG9yLWdyZXktbGlnaHQtMjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgJGNvbG9yLWdyZXktbGlnaHQtMjtcbiAgICB9XG4gIH1cbiAgJl9fY3AtbWVzc2FnZSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXRvcDogcHhUb1JlbSg4KTtcbiAgfVxuICAmX19jcmVkaXRzIHtcbiAgICBtYXJnaW4tdG9wOiBweFRvUmVtKDgpO1xuICB9XG59XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEhvdmVyIG1peGluIGFuZCBgJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeWAgYXJlIGRlcHJlY2F0ZWQuXG4vL1xuLy8gT3JpZ2luYWxseSBhZGRlZCBkdXJpbmcgb3VyIGFscGhhcyBhbmQgbWFpbnRhaW5lZCBkdXJpbmcgYmV0YXMsIHRoaXMgbWl4aW4gd2FzXG4vLyBkZXNpZ25lZCB0byBwcmV2ZW50IGA6aG92ZXJgIHN0aWNraW5lc3Mgb24gaU9TLWFuIGlzc3VlIHdoZXJlIGhvdmVyIHN0eWxlc1xuLy8gd291bGQgcGVyc2lzdCBhZnRlciBpbml0aWFsIHRvdWNoLlxuLy9cbi8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB3ZSd2ZSBrZXB0IHRoZXNlIG1peGlucyBhbmQgdXBkYXRlZCB0aGVtIHRvXG4vLyBhbHdheXMgcmV0dXJuIHRoZWlyIHJlZ3VsYXIgcHNldWRvLWNsYXNzZXMgaW5zdGVhZCBvZiBhIHNoaW1tZWQgbWVkaWEgcXVlcnkuXG4vL1xuLy8gSXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMjUxOTVcblxuQG1peGluIGhvdmVyKCkge1xuICAmOmhvdmVyIHsgQGNvbnRlbnQ7IH1cbn1cblxuQG1peGluIGhvdmVyLWZvY3VzKCkge1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcGxhaW4taG92ZXItZm9jdXMoKSB7XG4gICYsXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cy1hY3RpdmUoKSB7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/landing/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/landing/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/home/landing/footer/footer.component.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/home/landing/header/header.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/landing/header/header.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.w-700-centered {\n  max-width: 45rem;\n  margin: 0 auto;\n  padding: 0 0.625rem;\n}\n.bullet:before {\n  content: \"•\";\n  display: inline-block;\n  color: #747d85;\n  margin: 0 0.75rem;\n  opacity: 0.6;\n  font-weight: 300;\n}\n.header-top {\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.04);\n  z-index: 1030;\n}\n.top-nav {\n  display: flex;\n  align-items: center;\n  padding: 1.5rem 3.375rem 0 1.5rem;\n  position: relative;\n}\n@media (min-width: 768px) {\n  .top-nav {\n    padding: 1.5rem 1.5rem 0;\n  }\n}\n.top-nav__brand {\n  border-radius: 0.2rem;\n  color: #0984e3;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 1.5rem;\n  font-size: 1.75rem;\n  font-weight: 300;\n  font-family: \"Nunito\", sans-serif;\n  transition: color 0.2s ease;\n}\n.top-nav__brand:hover, .top-nav__brand:focus, .top-nav__brand:active {\n  color: #0871c2;\n}\n.top-nav__res-list-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1030;\n  height: 100%;\n  width: 100%;\n  background-color: #f4f7f8;\n  display: flex;\n  justify-content: center;\n  padding-top: 6.25rem;\n}\n@media (min-width: 768px) {\n  .top-nav__res-list-wrapper {\n    position: initial;\n    background-color: transparent;\n    padding-top: 0;\n    height: auto;\n    width: auto;\n    margin-right: auto;\n  }\n}\n.top-nav__res-list-wrapper .top-nav__list {\n  flex-direction: column;\n}\n@media (min-width: 768px) {\n  .top-nav__res-list-wrapper .top-nav__list {\n    flex-direction: row;\n  }\n}\n.top-nav__res-list-wrapper .top-nav__link {\n  font-size: 1.5rem;\n  font-weight: 300;\n}\n@media (min-width: 768px) {\n  .top-nav__res-list-wrapper .top-nav__link {\n    font-size: 1rem;\n    font-weight: 400;\n  }\n}\n.top-nav__res-list-toggler {\n  position: absolute;\n  right: 1rem;\n  height: 1.25rem;\n  width: 1.5rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: #0984e3;\n  cursor: pointer;\n  z-index: 1031;\n}\n@media (min-width: 768px) {\n  .top-nav__res-list-toggler {\n    display: none;\n  }\n}\n.top-nav__res-list-toggler:hover, .top-nav__res-list-toggler:focus, .top-nav__res-list-toggler:active {\n  color: #0871c2;\n}\n.top-nav__res-list-toggler-icon {\n  position: relative;\n}\n.top-nav__res-list-toggler-icon, .top-nav__res-list-toggler-icon::before, .top-nav__res-list-toggler-icon::after {\n  display: inline-flex;\n  align-items: center;\n  content: \"\";\n  width: 1.5rem;\n  height: 0.0625rem;\n  background-color: #0984e3;\n  visibility: visible;\n}\n.top-nav__res-list-toggler-icon::before {\n  position: absolute;\n  right: 0;\n  bottom: 0.4375rem;\n}\n.top-nav__res-list-toggler-icon::after {\n  position: absolute;\n  right: 0;\n  top: 0.4375rem;\n}\n.top-nav__res-list-toggler-icon--cross {\n  visibility: hidden;\n}\n.top-nav__res-list-toggler-icon--cross::before {\n  bottom: 0;\n  transform: rotate(-45deg);\n}\n.top-nav__res-list-toggler-icon--cross::after {\n  top: 0;\n  transform: rotate(45deg);\n}\n.top-nav__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.top-nav__link {\n  border-radius: 0.2rem;\n  font-weight: 400;\n  font-size: 1rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: #0984e3;\n  padding: 0.5rem 1rem;\n}\n.top-nav__link:hover, .top-nav__link:focus, .top-nav__link:active {\n  color: #0871c2;\n  text-decoration: underline;\n}\n.top-tags {\n  padding: 1.25rem 1.5rem 0.375rem;\n  position: relative;\n}\n.top-tags::after {\n  content: \"\";\n  position: absolute;\n  right: 1.5rem;\n  top: 50%;\n  width: 2rem;\n  height: 1rem;\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.2), white);\n}\n.top-tags__list {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  overflow-x: scroll;\n  -ms-overflow-style: none;\n  /* Internet Explorer 10+ */\n  scrollbar-width: none;\n  /* Firefox */\n}\n.top-tags__list::-webkit-scrollbar {\n  display: none;\n  /* Safari and Chrome */\n}\n.top-tags__link {\n  border-radius: 0.2rem;\n  white-space: nowrap;\n  font-weight: 500;\n  font-size: 0.9375rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: #747d85;\n  padding: 0.5rem 0;\n  margin-right: 1.5rem;\n}\n.top-tags__link:hover, .top-tags__link:focus, .top-tags__link:active {\n  color: #31373b;\n}\n.top-tags__link--active {\n  color: #31373b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay93aWQtYmxvZy1mcm9udGVuZC93aWQtYmxvZy1mcm9udGVuZC9zcmMvYXBwL2hvbWUvbGFuZGluZy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvc3JjL2FwcC9zYXNzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL3N0ZGluIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2hvdmVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURFRjtBQ0VFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0NDZ0I7RURBaEIsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURDSjtBR1ZBO0VBQ0Usa0JBQUE7RUFDQSxzQkRlWTtFQ2RaLGlEQUFBO0VBQ0EsYUFBQTtBSGFGO0FHVkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUlBLGtCQUFBO0FIVUY7QUlnQ0k7RURqREo7SUFLSSx3QkFBQTtFSGdCRjtBQUNGO0FHYkU7RUFDRSxxQkFBQTtFQUNBLGNEcEJZO0VDcUJaLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7QUhlSjtBS2RFO0VGQ0ksY0Q1QmU7QUY0Q3JCO0FHWkU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkRyQ2lCO0VDc0NqQixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBSGNKO0FJQUk7RUR4QkY7SUFZSSxpQkFBQTtJQUNBLDZCQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUhnQko7QUFDRjtBR2RFO0VBQ0Usc0JBQUE7QUhnQko7QUliSTtFREpGO0lBR0ksbUJBQUE7RUhrQko7QUFDRjtBR2ZFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBSGlCSjtBSXRCSTtFREdGO0lBSUksZUFBQTtJQUNBLGdCQUFBO0VIbUJKO0FBQ0Y7QUdoQkU7RUFJRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNEakZZO0VDa0ZaLGVBQUE7RUFNQSxhQUFBO0FIVUo7QUl4Q0k7RURZRjtJQUVJLGFBQUE7RUg4Qko7QUFDRjtBSzFFRTtFRndESSxjRG5GZTtBRndHckI7QUdoQkU7RUFhRSxrQkFBQTtBSE1KO0FHbEJJO0VBR0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkRuR1U7RUNvR1YsbUJBQUE7QUhrQk47QUdiSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FIZU47QUdiSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUhlTjtBR1pJO0VBQ0Usa0JBQUE7QUhjTjtBR2JNO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0FIZVI7QUdiTTtFQUNFLE1BQUE7RUFDQSx3QkFBQTtBSGVSO0FHVkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUhZSjtBR05FO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRGxKWTtFQ21KWixvQkFBQTtBSFFKO0FLOUhFO0VGd0hJLGNEbkplO0VDb0pmLDBCQUFBO0FIU047QUdKQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7QUhPRjtBR05FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRFQUFBO0FIUUo7QUdERTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSx3QkFBQTtFQUEwQiwwQkFBQTtFQUMxQixxQkFBQTtFQUF1QixZQUFBO0FISTNCO0FHRkk7RUFDRSxhQUFBO0VBQWUsc0JBQUE7QUhLckI7QUdERTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0R6TGdCO0VDMExoQixpQkFBQTtFQUNFLG9CQUFBO0FIR047QUsxS0U7RUZ5S0ksY0QzTGM7QUYrTHBCO0FHRkk7RUFDRSxjRDlMYztBRmtNcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xhbmRpbmcvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi53LTcwMC1jZW50ZXJlZCB7XG4gIG1heC13aWR0aDogNDVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xufVxuXG4uYnVsbGV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4oCiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICM3NDdkODU7XG4gIG1hcmdpbjogMCAwLjc1cmVtO1xuICBvcGFjaXR5OiAwLjY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5oZWFkZXItdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICB6LWluZGV4OiAxMDMwO1xufVxuXG4udG9wLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuNXJlbSAzLjM3NXJlbSAwIDEuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC50b3AtbmF2IHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtIDA7XG4gIH1cbn1cbi50b3AtbmF2X19icmFuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgY29sb3I6ICMwOTg0ZTM7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbn1cbi50b3AtbmF2X19icmFuZDpob3ZlciwgLnRvcC1uYXZfX2JyYW5kOmZvY3VzLCAudG9wLW5hdl9fYnJhbmQ6YWN0aXZlIHtcbiAgY29sb3I6ICMwODcxYzI7XG59XG4udG9wLW5hdl9fcmVzLWxpc3Qtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDMwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmN2Y4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDYuMjVyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnRvcC1uYXZfX3Jlcy1saXN0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbn1cbi50b3AtbmF2X19yZXMtbGlzdC13cmFwcGVyIC50b3AtbmF2X19saXN0IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAudG9wLW5hdl9fcmVzLWxpc3Qtd3JhcHBlciAudG9wLW5hdl9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuLnRvcC1uYXZfX3Jlcy1saXN0LXdyYXBwZXIgLnRvcC1uYXZfX2xpbmsge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAudG9wLW5hdl9fcmVzLWxpc3Qtd3JhcHBlciAudG9wLW5hdl9fbGluayB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbn1cbi50b3AtbmF2X19yZXMtbGlzdC10b2dnbGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXJlbTtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xuICB3aWR0aDogMS41cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDk4NGUzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMzE7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnRvcC1uYXZfX3Jlcy1saXN0LXRvZ2dsZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi50b3AtbmF2X19yZXMtbGlzdC10b2dnbGVyOmhvdmVyLCAudG9wLW5hdl9fcmVzLWxpc3QtdG9nZ2xlcjpmb2N1cywgLnRvcC1uYXZfX3Jlcy1saXN0LXRvZ2dsZXI6YWN0aXZlIHtcbiAgY29sb3I6ICMwODcxYzI7XG59XG4udG9wLW5hdl9fcmVzLWxpc3QtdG9nZ2xlci1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRvcC1uYXZfX3Jlcy1saXN0LXRvZ2dsZXItaWNvbiwgLnRvcC1uYXZfX3Jlcy1saXN0LXRvZ2dsZXItaWNvbjo6YmVmb3JlLCAudG9wLW5hdl9fcmVzLWxpc3QtdG9nZ2xlci1pY29uOjphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDAuMDYyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5ODRlMztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi50b3AtbmF2X19yZXMtbGlzdC10b2dnbGVyLWljb246OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMC40Mzc1cmVtO1xufVxuLnRvcC1uYXZfX3Jlcy1saXN0LXRvZ2dsZXItaWNvbjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDAuNDM3NXJlbTtcbn1cbi50b3AtbmF2X19yZXMtbGlzdC10b2dnbGVyLWljb24tLWNyb3NzIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnRvcC1uYXZfX3Jlcy1saXN0LXRvZ2dsZXItaWNvbi0tY3Jvc3M6OmJlZm9yZSB7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi50b3AtbmF2X19yZXMtbGlzdC10b2dnbGVyLWljb24tLWNyb3NzOjphZnRlciB7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLnRvcC1uYXZfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4udG9wLW5hdl9fbGluayB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDk4NGUzO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbn1cbi50b3AtbmF2X19saW5rOmhvdmVyLCAudG9wLW5hdl9fbGluazpmb2N1cywgLnRvcC1uYXZfX2xpbms6YWN0aXZlIHtcbiAgY29sb3I6ICMwODcxYzI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4udG9wLXRhZ3Mge1xuICBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbSAwLjM3NXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRvcC10YWdzOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEuNXJlbTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCB3aGl0ZSk7XG59XG4udG9wLXRhZ3NfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qIEZpcmVmb3ggKi9cbn1cbi50b3AtdGFnc19fbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xufVxuLnRvcC10YWdzX19saW5rIHtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzc0N2Q4NTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuLnRvcC10YWdzX19saW5rOmhvdmVyLCAudG9wLXRhZ3NfX2xpbms6Zm9jdXMsIC50b3AtdGFnc19fbGluazphY3RpdmUge1xuICBjb2xvcjogIzMxMzczYjtcbn1cbi50b3AtdGFnc19fbGluay0tYWN0aXZlIHtcbiAgY29sb3I6ICMzMTM3M2I7XG59IiwiLnctNzAwLWNlbnRlcmVkIHtcbiAgbWF4LXdpZHRoOiBweFRvUmVtKDcyMCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIHB4VG9SZW0oMTApO1xufVxuXG4uYnVsbGV0IHtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwyMDIyXCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTE7XG4gICAgbWFyZ2luOiAwIHB4VG9SZW0oMTIpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG59XG4iLCIvLyBDT0xPUlNcblxuJGNvbG9yLXByaW1hcnk6ICMwOTg0ZTM7XG4kY29sb3ItcHJpbWFyeS1saWdodDogIzE4OTVmNjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMwODcxYzI7XG5cbiRjb2xvci1ncmV5LWxpZ2h0LTE6ICNmNGY3Zjg7XG4kY29sb3ItZ3JleS1saWdodC0yOiAjZTJlN2ViO1xuJGNvbG9yLWdyZXktbGlnaHQtMzogI2NhZDFkNjtcbiRjb2xvci1ncmV5LWxpZ2h0LTQ6ICNhY2IzYjg7XG5cbiRjb2xvci1ncmV5LWRhcmstMTogIzc0N2Q4NTtcbiRjb2xvci1ncmV5LWRhcmstMjogIzUyNWM2NDtcbiRjb2xvci1ncmV5LWRhcmstMzogIzMxMzczYjtcbiRjb2xvci1ncmV5LWRhcmstNDogIzFmMjMyNztcbiRjb2xvci1ncmV5LWRhcmstNTogIzExMTMxNjtcblxuJGNvbG9yLXRleHQtYmxhY2s6ICRjb2xvci1ncmV5LWRhcmstMztcbiRjb2xvci10ZXh0LXdoaXRlOiAkY29sb3ItZ3JleS1saWdodC0yO1xuJGJvZHktYmc6ICNmYmZiZmI7XG5cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1ibGFjazogIzAwMDtcblxuXG4iLCJAaW1wb3J0IFwic2Fzcy9pbmRleFwiO1xuXG5cblxuLmhlYWRlci10b3Age1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgYm94LXNoYWRvdzogMCBweFRvUmVtKDQpIHB4VG9SZW0oMTIpIHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIHotaW5kZXg6IDEwMzA7XG59XG5cbi50b3AtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogcHhUb1JlbSgyNCkgcHhUb1JlbSg1NCkgMCBweFRvUmVtKDI0KTtcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgIHBhZGRpbmc6IHB4VG9SZW0oMjQpIHB4VG9SZW0oMjQpIDA7XG4gIH1cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICZfX2JyYW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiBweFRvUmVtKDMuMik7XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiBweFRvUmVtKDI0KTtcbiAgICBmb250LXNpemU6IHB4VG9SZW0oMjgpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzLWFjdGl2ZSB7XG4gICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnktZGFyaztcbiAgICB9XG4gIH1cblxuICAmX19yZXMtbGlzdC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAzMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktbGlnaHQtMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiBweFRvUmVtKDEwMCk7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG4gICZfX3Jlcy1saXN0LXdyYXBwZXIgJl9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgfVxuXG4gICZfX3Jlcy1saXN0LXdyYXBwZXIgJl9fbGluayB7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDI0KTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxNik7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgfVxuXG4gICZfX3Jlcy1saXN0LXRvZ2dsZXIge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogcHhUb1JlbSgxNik7XG4gICAgaGVpZ2h0OiBweFRvUmVtKDIwKTtcbiAgICB3aWR0aDogcHhUb1JlbSgyNCk7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgQGluY2x1ZGUgaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrO1xuICAgIH1cblxuICAgIHotaW5kZXg6IDEwMzE7XG4gIH1cbiAgJl9fcmVzLWxpc3QtdG9nZ2xlci1pY29uIHtcbiAgICAmLFxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgd2lkdGg6IHB4VG9SZW0oMjQpO1xuICAgICAgaGVpZ2h0OiBweFRvUmVtKDEpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogcHhUb1JlbSg3KTtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IHB4VG9SZW0oNyk7XG4gICAgfVxuXG4gICAgJi0tY3Jvc3Mge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAmX19pdGVtIHtcbiAgfVxuXG4gICZfX2xpbmsge1xuICAgIGJvcmRlci1yYWRpdXM6IHB4VG9SZW0oMy4yKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxNik7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgcGFkZGluZzogcHhUb1JlbSg4KSBweFRvUmVtKDE2KTtcbiAgICBAaW5jbHVkZSBob3Zlci1mb2N1cy1hY3RpdmUge1xuICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcms7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cbn1cblxuLnRvcC10YWdzIHtcbiAgcGFkZGluZzogcHhUb1JlbSgyMCkgcHhUb1JlbSgyNCkgcHhUb1JlbSg2KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IHB4VG9SZW0oMjQpO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiBweFRvUmVtKDMyKTtcbiAgICBoZWlnaHQ6IHB4VG9SZW0oMTYpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgcmdiYSgkY29sb3Itd2hpdGUsIDAuMiksXG4gICAgICByZ2JhKCRjb2xvci13aGl0ZSwgMSlcbiAgICApO1xuICB9XG5cbiAgJl9fbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcblxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIH1cbiAgfVxuXG4gICZfX2xpbmsge1xuICAgIGJvcmRlci1yYWRpdXM6IHB4VG9SZW0oMy4yKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDE1KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTE7XG4gICAgcGFkZGluZzogcHhUb1JlbSg4KSAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBweFRvUmVtKDI0KTtcbiAgICBAaW5jbHVkZSBob3Zlci1mb2N1cy1hY3RpdmUge1xuICAgICAgY29sb3I6ICRjb2xvci1ncmV5LWRhcmstMztcbiAgICB9XG4gICAgJi0tYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTM7XG4gICAgfVxuICB9XG59XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEhvdmVyIG1peGluIGFuZCBgJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeWAgYXJlIGRlcHJlY2F0ZWQuXG4vL1xuLy8gT3JpZ2luYWxseSBhZGRlZCBkdXJpbmcgb3VyIGFscGhhcyBhbmQgbWFpbnRhaW5lZCBkdXJpbmcgYmV0YXMsIHRoaXMgbWl4aW4gd2FzXG4vLyBkZXNpZ25lZCB0byBwcmV2ZW50IGA6aG92ZXJgIHN0aWNraW5lc3Mgb24gaU9TLWFuIGlzc3VlIHdoZXJlIGhvdmVyIHN0eWxlc1xuLy8gd291bGQgcGVyc2lzdCBhZnRlciBpbml0aWFsIHRvdWNoLlxuLy9cbi8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB3ZSd2ZSBrZXB0IHRoZXNlIG1peGlucyBhbmQgdXBkYXRlZCB0aGVtIHRvXG4vLyBhbHdheXMgcmV0dXJuIHRoZWlyIHJlZ3VsYXIgcHNldWRvLWNsYXNzZXMgaW5zdGVhZCBvZiBhIHNoaW1tZWQgbWVkaWEgcXVlcnkuXG4vL1xuLy8gSXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMjUxOTVcblxuQG1peGluIGhvdmVyKCkge1xuICAmOmhvdmVyIHsgQGNvbnRlbnQ7IH1cbn1cblxuQG1peGluIGhvdmVyLWZvY3VzKCkge1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcGxhaW4taG92ZXItZm9jdXMoKSB7XG4gICYsXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cy1hY3RpdmUoKSB7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/landing/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/landing/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/home.service */ "./src/app/home/_services/home.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(_home) {
        this._home = _home;
        this.topNavVisible = false;
        this.tags$ = this._home.indexTags();
        this.pages$ = this._home.indexPages();
    }
    onResize(event) {
        this.autoSetTopNavVisibility(window.innerWidth);
    }
    toggleTopNav() {
        this.topNavVisible = !this.topNavVisible;
    }
    ngOnInit() {
        this.autoSetTopNavVisibility(window.innerWidth);
    }
    ngAfterViewInit() {
    }
    autoSetTopNavVisibility(innerWidth) {
        this.innerWidth = innerWidth;
        if (this.innerWidth > 768) {
            this.topNavVisible = true;
        }
        else {
            this.topNavVisible = false;
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("window:resize", ["$event"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], HeaderComponent.prototype, "onResize", null);
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing/header/header.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("slideInOutFromRight", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))]),
            ]),
        ],
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/home/landing/header/header.component.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/landing/landing.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/landing/landing.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.w-700-centered {\n  max-width: 45rem;\n  margin: 0 auto;\n  padding: 0 0.625rem;\n}\n.bullet:before {\n  content: \"•\";\n  display: inline-block;\n  color: #747d85;\n  margin: 0 0.75rem;\n  opacity: 0.6;\n  font-weight: 300;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: #f4f7f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay93aWQtYmxvZy1mcm9udGVuZC93aWQtYmxvZy1mcm9udGVuZC9zcmMvYXBwL2hvbWUvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvc3JjL2FwcC9zYXNzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FERUY7QUNFRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNDQ2dCO0VEQWhCLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEQ0o7QUdiQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJEQ2lCO0FGZXJCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udy03MDAtY2VudGVyZWQge1xuICBtYXgtd2lkdGg6IDQ1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjYyNXJlbTtcbn1cblxuLmJ1bGxldDpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAolwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNzQ3ZDg1O1xuICBtYXJnaW46IDAgMC43NXJlbTtcbiAgb3BhY2l0eTogMC42O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmN2Y4O1xufSIsIi53LTcwMC1jZW50ZXJlZCB7XG4gIG1heC13aWR0aDogcHhUb1JlbSg3MjApO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCBweFRvUmVtKDEwKTtcbn1cblxuLmJ1bGxldCB7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMjAyMlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0xO1xuICAgIG1hcmdpbjogMCBweFRvUmVtKDEyKTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxufVxuIiwiLy8gQ09MT1JTXG5cbiRjb2xvci1wcmltYXJ5OiAjMDk4NGUzO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICMxODk1ZjY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMDg3MWMyO1xuXG4kY29sb3ItZ3JleS1saWdodC0xOiAjZjRmN2Y4O1xuJGNvbG9yLWdyZXktbGlnaHQtMjogI2UyZTdlYjtcbiRjb2xvci1ncmV5LWxpZ2h0LTM6ICNjYWQxZDY7XG4kY29sb3ItZ3JleS1saWdodC00OiAjYWNiM2I4O1xuXG4kY29sb3ItZ3JleS1kYXJrLTE6ICM3NDdkODU7XG4kY29sb3ItZ3JleS1kYXJrLTI6ICM1MjVjNjQ7XG4kY29sb3ItZ3JleS1kYXJrLTM6ICMzMTM3M2I7XG4kY29sb3ItZ3JleS1kYXJrLTQ6ICMxZjIzMjc7XG4kY29sb3ItZ3JleS1kYXJrLTU6ICMxMTEzMTY7XG5cbiRjb2xvci10ZXh0LWJsYWNrOiAkY29sb3ItZ3JleS1kYXJrLTM7XG4kY29sb3ItdGV4dC13aGl0ZTogJGNvbG9yLWdyZXktbGlnaHQtMjtcbiRib2R5LWJnOiAjZmJmYmZiO1xuXG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG5cblxuIiwiQGltcG9ydCBcInNhc3MvaW5kZXhcIjtcbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktbGlnaHQtMTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/home/landing/landing.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/landing/landing.component.ts ***!
  \***************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing/landing.component.html"),
        styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/home/landing/landing.component.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LandingComponent);



/***/ }),

/***/ "./src/app/home/post/post.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/post/post.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.w-700-centered {\n  max-width: 45rem;\n  margin: 0 auto;\n  padding: 0 0.625rem;\n}\n.bullet:before {\n  content: \"•\";\n  display: inline-block;\n  color: #747d85;\n  margin: 0 0.75rem;\n  opacity: 0.6;\n  font-weight: 300;\n}\n.post {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* Non solid icons get a stroke */\n  /* Solid icons get a fill */\n}\n.post__header {\n  width: 100%;\n  padding: 4.375rem 0 3.125rem;\n}\n.post__featured-image {\n  overflow: hidden;\n  border-radius: 0.125rem;\n  margin: 1.5625rem 0 3.125rem;\n}\n.post__inner-content-box ::ng-deep {\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem 0;\n  word-break: break-all;\n}\n.post__inner-content-box ::ng-deep {\n  color: #1f2327;\n}\n.post__inner-content-box ::ng-deep a {\n  color: #0984e3;\n  cursor: pointer;\n}\n.post__inner-content-box ::ng-deep a:hover {\n  text-decoration: underline;\n  color: #0871c2;\n}\n.post__inner-content-box ::ng-deep p {\n  font-size: 1.25rem;\n  font-family: \"Lora\", serif;\n  line-height: 1.6;\n  padding: 0;\n  margin: 0 0 2rem;\n}\n.post__inner-content-box ::ng-deep ul,\n.post__inner-content-box ::ng-deep ol {\n  margin: 0 0 1.875rem;\n  padding: 0 1.875rem 0 1.625rem;\n}\n.post__inner-content-box ::ng-deep ul li,\n.post__inner-content-box ::ng-deep ol li {\n  margin: 0.625rem 0;\n  padding: 0 0 0 0.375rem;\n  font-size: 1.25rem;\n  font-family: \"Lora\", serif;\n  line-height: 1.6;\n}\n.post__inner-content-box ::ng-deep ol {\n  list-style: decimal;\n}\n.post__inner-content-box ::ng-deep ul {\n  list-style: disc;\n}\n.post__inner-content-box ::ng-deep blockquote {\n  font-size: 1.25rem;\n  font-family: \"Lora\", serif;\n  line-height: 1.6;\n  margin: 0 0 1.875rem;\n  padding: 0 1.5rem;\n  border-left: 0.1875rem solid #0984e3;\n}\n.post__inner-content-box ::ng-deep blockquote p {\n  margin: 0;\n}\n.post__inner-content-box ::ng-deep img {\n  max-width: 100%;\n  height: auto;\n  margin: 2.625rem 0;\n}\n.post__inner-content-box ::ng-deep h2 {\n  line-height: 1.25;\n  color: #1f2327;\n  font-size: 2rem;\n  padding: 0;\n  margin: 1.6rem 0 0.8rem;\n}\n.post__inner-content-box ::ng-deep h3 {\n  line-height: 1.25;\n  color: #1f2327;\n  font-size: 1.5625rem;\n  padding: 0;\n  margin: 0.78125rem 0 0.3125rem;\n}\n.post__primary-title {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.post__excerpt {\n  font-family: \"Lora\", serif;\n  font-size: 1.375rem;\n  margin: 0.875rem 0 0;\n  color: #747d85;\n}\n.post__meta {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 0.5rem;\n  align-items: center;\n  padding: 0.875rem 0 0;\n  margin: 1.5rem 0 0;\n  text-transform: capitalize;\n  border-top: 0.0625rem solid #e2e7eb;\n}\n.post__meta-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.post__author-image {\n  display: inline-flex;\n  max-width: 2.375rem;\n  margin-right: 0.5rem;\n}\n.post__author-name {\n  color: #31373b;\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n.post__author-name:hover, .post__author-name:focus {\n  text-decoration: underline;\n}\n.post__publish-date {\n  display: inline-flex;\n  font-size: 0.75rem;\n  color: #525c64;\n  font-weight: 400;\n}\n.post__sharing-btns {\n  margin: 0 0 0 auto;\n  padding: 0.5rem;\n}\n.post .resp-sharing-button__link,\n.post .resp-sharing-button__icon {\n  display: inline-block;\n}\n.post .resp-sharing-button__link {\n  text-decoration: none;\n  color: #fff;\n  margin: 0.5em;\n}\n.post .resp-sharing-button {\n  border-radius: 100px;\n  transition: 25ms ease-out;\n  padding: 0.4em 0.65em;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n.post .resp-sharing-button__icon svg {\n  width: 0.98em;\n  height: 0.98em;\n  margin-right: 0.4em;\n  vertical-align: top;\n}\n.post .resp-sharing-button--small svg {\n  margin: 0;\n  vertical-align: middle;\n}\n.post .resp-sharing-button__icon {\n  stroke: #fff;\n  fill: none;\n}\n.post .resp-sharing-button__icon--solid,\n.post .resp-sharing-button__icon--solidcircle {\n  fill: #fff;\n  stroke: none;\n}\n.post .resp-sharing-button--twitter {\n  background-color: #55acee;\n}\n.post .resp-sharing-button--twitter:hover {\n  background-color: #2795e9;\n}\n.post .resp-sharing-button--facebook {\n  background-color: #3b5998;\n}\n.post .resp-sharing-button--facebook:hover {\n  background-color: #2d4373;\n}\n.post .resp-sharing-button--reddit {\n  background-color: #5f99cf;\n}\n.post .resp-sharing-button--reddit:hover {\n  background-color: #3a80c1;\n}\n.post .resp-sharing-button--linkedin {\n  background-color: #0077b5;\n}\n.post .resp-sharing-button--linkedin:hover {\n  background-color: #046293;\n}\n.post .resp-sharing-button--telegram {\n  background-color: #54a9eb;\n}\n.post .resp-sharing-button--telegram:hover {\n  background-color: #4b97d1;\n}\n.post .resp-sharing-button--email {\n  background-color: #777;\n}\n.post .resp-sharing-button--email:hover {\n  background-color: #5e5e5e;\n}\n.post__tags {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 0.75rem;\n  width: 100%;\n  margin: 1rem 0;\n}\n.post__tags a {\n  background-color: #fff;\n  display: inline-flex;\n  align-items: center;\n  color: #0871c2;\n  border: 0.03125rem solid #e2e7eb;\n  border-radius: 0.1875rem;\n  padding: 0.5rem 1.5rem;\n  font-size: 0.9375rem;\n}\n.post__tags a:not(:last-of-type) {\n  margin: 0 1rem 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay93aWQtYmxvZy1mcm9udGVuZC93aWQtYmxvZy1mcm9udGVuZC9zcmMvYXBwL2hvbWUvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvc3JjL2FwcC9zYXNzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL3N0ZGluIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvc3JjL2FwcC9zYXNzL19taXhpbnMuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2hvdmVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURFRjtBQ0VFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0NDZ0I7RURBaEIsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURDSjtBR2JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUF3R0EsaUNBQUE7RUFNQSwyQkFBQTtBSDVGRjtBR2pCRTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtBSG1CSjtBR2pCRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBSG1CSjtBR2JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxxQkFBQTtBSGNKO0FJUEU7RUFDRSxjRmpCZ0I7QUYwQnBCO0FJTkU7RUFDRSxjRmpDWTtFRWtDWixlQUFBO0FKUUo7QUlQSTtFQUNFLDBCQUFBO0VBQ0EsY0ZuQ2U7QUY0Q3JCO0FJTkU7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUpRSjtBSUxFOztFQUVFLG9CQUFBO0VBQ0EsOEJBQUE7QUpPSjtBSU5JOztFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUpTTjtBSUpFO0VBQ0UsbUJBQUE7QUpNSjtBSUpFO0VBQ0UsZ0JBQUE7QUpNSjtBSUhFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0FKS0o7QUlKSTtFQUNFLFNBQUE7QUpNTjtBSUhFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBSktKO0FJRkU7RUFDRSxpQkFBQTtFQUNBLGNGNUVnQjtFRTZFaEIsZUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBSklKO0FJRkU7RUFDRSxpQkFBQTtFQUNBLGNGbkZnQjtFRW9GaEIsb0JBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QUpJSjtBRzlFRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBSGdGSjtBRzlFRTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNEdkJnQjtBRnVHcEI7QUc3RUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FIK0VKO0FHN0VFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUgrRUo7QUc3RUU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUgrRUo7QUc1RUU7RUFDRSxjRDlDZ0I7RUMrQ2hCLG9CQUFBO0VBQ0EsZ0JBQUE7QUg4RUo7QUszSEU7RUYrQ0ksMEJBQUE7QUgrRU47QUc1RUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0R6RGdCO0VDMERoQixnQkFBQTtBSDhFSjtBRzNFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBSDZFSjtBRzFFRTs7RUFFRSxxQkFBQTtBSDRFSjtBR3pFRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUgyRUo7QUd4RUU7RUFDRSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5REFBQTtBSDBFSjtBR3ZFRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBSHlFSjtBR3RFRTtFQUNFLFNBQUE7RUFDQSxzQkFBQTtBSHdFSjtBR3BFRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FIc0VKO0FHbEVFOztFQUVFLFVBQUE7RUFDQSxZQUFBO0FIb0VKO0FHakVFO0VBQ0UseUJBQUE7QUhtRUo7QUdoRUU7RUFDRSx5QkFBQTtBSGtFSjtBRy9ERTtFQUNFLHlCQUFBO0FIaUVKO0FHOURFO0VBQ0UseUJBQUE7QUhnRUo7QUc3REU7RUFDRSx5QkFBQTtBSCtESjtBRzVERTtFQUNFLHlCQUFBO0FIOERKO0FHM0RFO0VBQ0UseUJBQUE7QUg2REo7QUcxREU7RUFDRSx5QkFBQTtBSDRESjtBRzFERTtFQUNFLHlCQUFBO0FINERKO0FHekRFO0VBQ0UseUJBQUE7QUgyREo7QUd4REU7RUFDRSxzQkFBQTtBSDBESjtBR3ZERTtFQUNFLHlCQUFBO0FIeURKO0FHdERFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLFdBQUE7RUFFQSxjQUFBO0FIc0RKO0FHckRJO0VBQ0Usc0JENUpRO0VDNkpSLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRGhMZTtFQ2lMZixnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBSHVETjtBR3RETTtFQUNFLGtCQUFBO0FId0RSIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udy03MDAtY2VudGVyZWQge1xuICBtYXgtd2lkdGg6IDQ1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjYyNXJlbTtcbn1cblxuLmJ1bGxldDpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAolwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNzQ3ZDg1O1xuICBtYXJnaW46IDAgMC43NXJlbTtcbiAgb3BhY2l0eTogMC42O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ucG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIE5vbiBzb2xpZCBpY29ucyBnZXQgYSBzdHJva2UgKi9cbiAgLyogU29saWQgaWNvbnMgZ2V0IGEgZmlsbCAqL1xufVxuLnBvc3RfX2hlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0LjM3NXJlbSAwIDMuMTI1cmVtO1xufVxuLnBvc3RfX2ZlYXR1cmVkLWltYWdlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gIG1hcmdpbjogMS41NjI1cmVtIDAgMy4xMjVyZW07XG59XG4ucG9zdF9faW5uZXItY29udGVudC1ib3ggOjpuZy1kZWVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMS41cmVtIDA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5wb3N0X19pbm5lci1jb250ZW50LWJveCA6Om5nLWRlZXAge1xuICBjb2xvcjogIzFmMjMyNztcbn1cbi5wb3N0X19pbm5lci1jb250ZW50LWJveCA6Om5nLWRlZXAgYSB7XG4gIGNvbG9yOiAjMDk4NGUzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucG9zdF9faW5uZXItY29udGVudC1ib3ggOjpuZy1kZWVwIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMwODcxYzI7XG59XG4ucG9zdF9faW5uZXItY29udGVudC1ib3ggOjpuZy1kZWVwIHAge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAwIDJyZW07XG59XG4ucG9zdF9faW5uZXItY29udGVudC1ib3ggOjpuZy1kZWVwIHVsLFxuLnBvc3RfX2lubmVyLWNvbnRlbnQtYm94IDo6bmctZGVlcCBvbCB7XG4gIG1hcmdpbjogMCAwIDEuODc1cmVtO1xuICBwYWRkaW5nOiAwIDEuODc1cmVtIDAgMS42MjVyZW07XG59XG4ucG9zdF9faW5uZXItY29udGVudC1ib3ggOjpuZy1kZWVwIHVsIGxpLFxuLnBvc3RfX2lubmVyLWNvbnRlbnQtYm94IDo6bmctZGVlcCBvbCBsaSB7XG4gIG1hcmdpbjogMC42MjVyZW0gMDtcbiAgcGFkZGluZzogMCAwIDAgMC4zNzVyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbi5wb3N0X19pbm5lci1jb250ZW50LWJveCA6Om5nLWRlZXAgb2wge1xuICBsaXN0LXN0eWxlOiBkZWNpbWFsO1xufVxuLnBvc3RfX2lubmVyLWNvbnRlbnQtYm94IDo6bmctZGVlcCB1bCB7XG4gIGxpc3Qtc3R5bGU6IGRpc2M7XG59XG4ucG9zdF9faW5uZXItY29udGVudC1ib3ggOjpuZy1kZWVwIGJsb2NrcXVvdGUge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbjogMCAwIDEuODc1cmVtO1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgYm9yZGVyLWxlZnQ6IDAuMTg3NXJlbSBzb2xpZCAjMDk4NGUzO1xufVxuLnBvc3RfX2lubmVyLWNvbnRlbnQtYm94IDo6bmctZGVlcCBibG9ja3F1b3RlIHAge1xuICBtYXJnaW46IDA7XG59XG4ucG9zdF9faW5uZXItY29udGVudC1ib3ggOjpuZy1kZWVwIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIuNjI1cmVtIDA7XG59XG4ucG9zdF9faW5uZXItY29udGVudC1ib3ggOjpuZy1kZWVwIGgyIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGNvbG9yOiAjMWYyMzI3O1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMS42cmVtIDAgMC44cmVtO1xufVxuLnBvc3RfX2lubmVyLWNvbnRlbnQtYm94IDo6bmctZGVlcCBoMyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBjb2xvcjogIzFmMjMyNztcbiAgZm9udC1zaXplOiAxLjU2MjVyZW07XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMC43ODEyNXJlbSAwIDAuMzEyNXJlbTtcbn1cbi5wb3N0X19wcmltYXJ5LXRpdGxlIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnBvc3RfX2V4Y2VycHQge1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDEuMzc1cmVtO1xuICBtYXJnaW46IDAuODc1cmVtIDAgMDtcbiAgY29sb3I6ICM3NDdkODU7XG59XG4ucG9zdF9fbWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcm93LWdhcDogMC41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjg3NXJlbSAwIDA7XG4gIG1hcmdpbjogMS41cmVtIDAgMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlci10b3A6IDAuMDYyNXJlbSBzb2xpZCAjZTJlN2ViO1xufVxuLnBvc3RfX21ldGEtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBvc3RfX2F1dGhvci1pbWFnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXgtd2lkdGg6IDIuMzc1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5wb3N0X19hdXRob3ItbmFtZSB7XG4gIGNvbG9yOiAjMzEzNzNiO1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wb3N0X19hdXRob3ItbmFtZTpob3ZlciwgLnBvc3RfX2F1dGhvci1uYW1lOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ucG9zdF9fcHVibGlzaC1kYXRlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6ICM1MjVjNjQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ucG9zdF9fc2hhcmluZy1idG5zIHtcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4ucG9zdCAucmVzcC1zaGFyaW5nLWJ1dHRvbl9fbGluayxcbi5wb3N0IC5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnBvc3QgLnJlc3Atc2hhcmluZy1idXR0b25fX2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAuNWVtO1xufVxuLnBvc3QgLnJlc3Atc2hhcmluZy1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgdHJhbnNpdGlvbjogMjVtcyBlYXNlLW91dDtcbiAgcGFkZGluZzogMC40ZW0gMC42NWVtO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4ucG9zdCAucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbiBzdmcge1xuICB3aWR0aDogMC45OGVtO1xuICBoZWlnaHQ6IDAuOThlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjRlbTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5wb3N0IC5yZXNwLXNoYXJpbmctYnV0dG9uLS1zbWFsbCBzdmcge1xuICBtYXJnaW46IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ucG9zdCAucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbiB7XG4gIHN0cm9rZTogI2ZmZjtcbiAgZmlsbDogbm9uZTtcbn1cbi5wb3N0IC5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uLS1zb2xpZCxcbi5wb3N0IC5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uLS1zb2xpZGNpcmNsZSB7XG4gIGZpbGw6ICNmZmY7XG4gIHN0cm9rZTogbm9uZTtcbn1cbi5wb3N0IC5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcbn1cbi5wb3N0IC5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3OTVlOTtcbn1cbi5wb3N0IC5yZXNwLXNoYXJpbmctYnV0dG9uLS1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG59XG4ucG9zdCAucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZmFjZWJvb2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ0MzczO1xufVxuLnBvc3QgLnJlc3Atc2hhcmluZy1idXR0b24tLXJlZGRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Zjk5Y2Y7XG59XG4ucG9zdCAucmVzcC1zaGFyaW5nLWJ1dHRvbi0tcmVkZGl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhODBjMTtcbn1cbi5wb3N0IC5yZXNwLXNoYXJpbmctYnV0dG9uLS1saW5rZWRpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc3YjU7XG59XG4ucG9zdCAucmVzcC1zaGFyaW5nLWJ1dHRvbi0tbGlua2VkaW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ2MjkzO1xufVxuLnBvc3QgLnJlc3Atc2hhcmluZy1idXR0b24tLXRlbGVncmFtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0YTllYjtcbn1cbi5wb3N0IC5yZXNwLXNoYXJpbmctYnV0dG9uLS10ZWxlZ3JhbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Yjk3ZDE7XG59XG4ucG9zdCAucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZW1haWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xufVxuLnBvc3QgLnJlc3Atc2hhcmluZy1idXR0b24tLWVtYWlsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNWU1ZTtcbn1cbi5wb3N0X190YWdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICByb3ctZ2FwOiAwLjc1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4ucG9zdF9fdGFncyBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDg3MWMyO1xuICBib3JkZXI6IDAuMDMxMjVyZW0gc29saWQgI2UyZTdlYjtcbiAgYm9yZGVyLXJhZGl1czogMC4xODc1cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBmb250LXNpemU6IDAuOTM3NXJlbTtcbn1cbi5wb3N0X190YWdzIGE6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgbWFyZ2luOiAwIDFyZW0gMCAwO1xufSIsIi53LTcwMC1jZW50ZXJlZCB7XG4gIG1heC13aWR0aDogcHhUb1JlbSg3MjApO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCBweFRvUmVtKDEwKTtcbn1cblxuLmJ1bGxldCB7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMjAyMlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0xO1xuICAgIG1hcmdpbjogMCBweFRvUmVtKDEyKTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxufVxuIiwiLy8gQ09MT1JTXG5cbiRjb2xvci1wcmltYXJ5OiAjMDk4NGUzO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICMxODk1ZjY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMDg3MWMyO1xuXG4kY29sb3ItZ3JleS1saWdodC0xOiAjZjRmN2Y4O1xuJGNvbG9yLWdyZXktbGlnaHQtMjogI2UyZTdlYjtcbiRjb2xvci1ncmV5LWxpZ2h0LTM6ICNjYWQxZDY7XG4kY29sb3ItZ3JleS1saWdodC00OiAjYWNiM2I4O1xuXG4kY29sb3ItZ3JleS1kYXJrLTE6ICM3NDdkODU7XG4kY29sb3ItZ3JleS1kYXJrLTI6ICM1MjVjNjQ7XG4kY29sb3ItZ3JleS1kYXJrLTM6ICMzMTM3M2I7XG4kY29sb3ItZ3JleS1kYXJrLTQ6ICMxZjIzMjc7XG4kY29sb3ItZ3JleS1kYXJrLTU6ICMxMTEzMTY7XG5cbiRjb2xvci10ZXh0LWJsYWNrOiAkY29sb3ItZ3JleS1kYXJrLTM7XG4kY29sb3ItdGV4dC13aGl0ZTogJGNvbG9yLWdyZXktbGlnaHQtMjtcbiRib2R5LWJnOiAjZmJmYmZiO1xuXG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG5cblxuIiwiQGltcG9ydCBcInNhc3MvaW5kZXhcIjtcbi5wb3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJl9faGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiBweFRvUmVtKDcwKSAwIHB4VG9SZW0oNTApO1xuICB9XG4gICZfX2ZlYXR1cmVkLWltYWdlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IHB4VG9SZW0oMik7XG4gICAgbWFyZ2luOiBweFRvUmVtKDI1KSAwIHB4VG9SZW0oNTApO1xuICB9XG4gICZfX2NvbnRlbnQge1xuICB9XG4gICZfX2lubmVyLWNvbnRlbnQtYm94IHtcbiAgfVxuICAmX19pbm5lci1jb250ZW50LWJveCA6Om5nLWRlZXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IHB4VG9SZW0oMjQpIDA7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIEBpbmNsdWRlIGJsb2ctcG9zdDtcbiAgfVxuICAmX19wcmltYXJ5LXRpdGxlIHtcbiAgICBmb250LXNpemU6IHB4VG9SZW0oNDgpO1xuICAgIG1hcmdpbi1ib3R0b206IHB4VG9SZW0oMTYpO1xuICB9XG4gICZfX2V4Y2VycHQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDIyKTtcbiAgICBtYXJnaW46IHB4VG9SZW0oMTQpIDAgMDtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0xO1xuICB9XG5cbiAgJl9fbWV0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcm93LWdhcDogcHhUb1JlbSg4KTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IHB4VG9SZW0oMTQpIDAgMDtcbiAgICBtYXJnaW46IHB4VG9SZW0oMjQpIDAgMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBib3JkZXItdG9wOiBweFRvUmVtKDEpIHNvbGlkICRjb2xvci1ncmV5LWxpZ2h0LTI7XG4gIH1cbiAgJl9fbWV0YS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgJl9fYXV0aG9yLWltYWdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBtYXgtd2lkdGg6IHB4VG9SZW0oMzhweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiBweFRvUmVtKDgpO1xuICB9XG5cbiAgJl9fYXV0aG9yLW5hbWUge1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTM7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDEzKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxuICAmX19wdWJsaXNoLWRhdGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxMik7XG4gICAgY29sb3I6ICRjb2xvci1ncmV5LWRhcmstMjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cbiAgJl9fc2hhcmluZy1idG5zIHtcbiAgICBtYXJnaW46IDAgMCAwIGF1dG87XG4gICAgcGFkZGluZzogcHhUb1JlbSg4KTtcbiAgfVxuXG4gIC5yZXNwLXNoYXJpbmctYnV0dG9uX19saW5rLFxuICAucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLnJlc3Atc2hhcmluZy1idXR0b25fX2xpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDAuNWVtO1xuICB9XG5cbiAgLnJlc3Atc2hhcmluZy1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHRyYW5zaXRpb246IDI1bXMgZWFzZS1vdXQ7XG4gICAgcGFkZGluZzogMC40ZW0gMC42NWVtO1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uIHN2ZyB7XG4gICAgd2lkdGg6IDAuOThlbTtcbiAgICBoZWlnaHQ6IDAuOThlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNGVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cblxuICAucmVzcC1zaGFyaW5nLWJ1dHRvbi0tc21hbGwgc3ZnIHtcbiAgICBtYXJnaW46IDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gIC8qIE5vbiBzb2xpZCBpY29ucyBnZXQgYSBzdHJva2UgKi9cbiAgLnJlc3Atc2hhcmluZy1idXR0b25fX2ljb24ge1xuICAgIHN0cm9rZTogI2ZmZjtcbiAgICBmaWxsOiBub25lO1xuICB9XG5cbiAgLyogU29saWQgaWNvbnMgZ2V0IGEgZmlsbCAqL1xuICAucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbi0tc29saWQsXG4gIC5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uLS1zb2xpZGNpcmNsZSB7XG4gICAgZmlsbDogI2ZmZjtcbiAgICBzdHJva2U6IG5vbmU7XG4gIH1cblxuICAucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHdpdHRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcbiAgfVxuXG4gIC5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc5NWU5O1xuICB9XG5cbiAgLnJlc3Atc2hhcmluZy1idXR0b24tLWZhY2Vib29rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICB9XG5cbiAgLnJlc3Atc2hhcmluZy1idXR0b24tLWZhY2Vib29rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ0MzczO1xuICB9XG5cbiAgLnJlc3Atc2hhcmluZy1idXR0b24tLXJlZGRpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmOTljZjtcbiAgfVxuXG4gIC5yZXNwLXNoYXJpbmctYnV0dG9uLS1yZWRkaXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTgwYzE7XG4gIH1cblxuICAucmVzcC1zaGFyaW5nLWJ1dHRvbi0tbGlua2VkaW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc3YjU7XG4gIH1cblxuICAucmVzcC1zaGFyaW5nLWJ1dHRvbi0tbGlua2VkaW46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDYyOTM7XG4gIH1cbiAgLnJlc3Atc2hhcmluZy1idXR0b24tLXRlbGVncmFtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRhOWViO1xuICB9XG5cbiAgLnJlc3Atc2hhcmluZy1idXR0b24tLXRlbGVncmFtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI5N2QxO1xuICB9XG5cbiAgLnJlc3Atc2hhcmluZy1idXR0b24tLWVtYWlsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xuICB9XG5cbiAgLnJlc3Atc2hhcmluZy1idXR0b24tLWVtYWlsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU1ZTVlO1xuICB9XG5cbiAgJl9fdGFncyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcm93LWdhcDogcHhUb1JlbSgxMik7XG5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgIG1hcmdpbjogcHhUb1JlbSgxNikgMDtcbiAgICBhIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrO1xuICAgICAgYm9yZGVyOiBweFRvUmVtKDAuNSkgc29saWQgJGNvbG9yLWdyZXktbGlnaHQtMjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHB4VG9SZW0oMyk7XG4gICAgICBwYWRkaW5nOiBweFRvUmVtKDgpIHB4VG9SZW0oMjQpO1xuICAgICAgZm9udC1zaXplOiBweFRvUmVtKDE1KTtcbiAgICAgICY6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgICAgICAgbWFyZ2luOiAwIHB4VG9SZW0oMTYpIDAgMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBob3ZlcigpIHtcbiAgJjpob3ZlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGhvdmVyLWZvY3VzKCkge1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcGxhaW4taG92ZXItZm9jdXMoKSB7XG4gICYsXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cy1hY3RpdmUoKSB7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gYmxvZy1wb3N0KCkge1xuICAmIHtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay00O1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcms7XG4gICAgfVxuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgyMCk7XG4gICAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIDAgcHhUb1JlbSgzMik7XG4gIH1cblxuICB1bCxcbiAgb2wge1xuICAgIG1hcmdpbjogMCAwIHB4VG9SZW0oMzApO1xuICAgIHBhZGRpbmc6IDAgcHhUb1JlbSgzMCkgMCBweFRvUmVtKDI2KTtcbiAgICBsaSB7XG4gICAgICBtYXJnaW46IHB4VG9SZW0oMTApIDA7XG4gICAgICBwYWRkaW5nOiAwIDAgMCBweFRvUmVtKDYpO1xuICAgICAgZm9udC1zaXplOiBweFRvUmVtKDIwKTtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIH1cbiAgICBsaTo6bWFya2VyIHtcbiAgICB9XG4gIH1cbiAgb2wge1xuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IGRpc2M7XG4gIH1cblxuICBibG9ja3F1b3RlIHtcbiAgICBmb250LXNpemU6IHB4VG9SZW0oMjApO1xuICAgIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBtYXJnaW46IDAgMCBweFRvUmVtKDMwKTtcbiAgICBwYWRkaW5nOiAwIHB4VG9SZW0oMjQpO1xuICAgIGJvcmRlci1sZWZ0OiBweFRvUmVtKDMpIHNvbGlkICRjb2xvci1wcmltYXJ5O1xuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuICBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiBweFRvUmVtKDQyKSAwO1xuICB9XG5cbiAgaDIge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTQ7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDMyKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogcHhUb1JlbSgyNS42KSAwIHB4VG9SZW0oMTIuOCk7XG4gIH1cbiAgaDMge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTQ7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDI1KTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogcHhUb1JlbSgxMi41KSAwIHB4VG9SZW0oNSk7XG4gIH1cbn1cbiIsIi8vIEhvdmVyIG1peGluIGFuZCBgJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeWAgYXJlIGRlcHJlY2F0ZWQuXG4vL1xuLy8gT3JpZ2luYWxseSBhZGRlZCBkdXJpbmcgb3VyIGFscGhhcyBhbmQgbWFpbnRhaW5lZCBkdXJpbmcgYmV0YXMsIHRoaXMgbWl4aW4gd2FzXG4vLyBkZXNpZ25lZCB0byBwcmV2ZW50IGA6aG92ZXJgIHN0aWNraW5lc3Mgb24gaU9TLWFuIGlzc3VlIHdoZXJlIGhvdmVyIHN0eWxlc1xuLy8gd291bGQgcGVyc2lzdCBhZnRlciBpbml0aWFsIHRvdWNoLlxuLy9cbi8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB3ZSd2ZSBrZXB0IHRoZXNlIG1peGlucyBhbmQgdXBkYXRlZCB0aGVtIHRvXG4vLyBhbHdheXMgcmV0dXJuIHRoZWlyIHJlZ3VsYXIgcHNldWRvLWNsYXNzZXMgaW5zdGVhZCBvZiBhIHNoaW1tZWQgbWVkaWEgcXVlcnkuXG4vL1xuLy8gSXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMjUxOTVcblxuQG1peGluIGhvdmVyKCkge1xuICAmOmhvdmVyIHsgQGNvbnRlbnQ7IH1cbn1cblxuQG1peGluIGhvdmVyLWZvY3VzKCkge1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcGxhaW4taG92ZXItZm9jdXMoKSB7XG4gICYsXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cy1hY3RpdmUoKSB7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/post/post.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/post/post.component.ts ***!
  \*********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_highlight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/highlight.service */ "./src/app/highlight.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_models */ "./src/app/home/_models/index.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/home.service */ "./src/app/home/_services/home.service.ts");









let PostComponent = class PostComponent {
    constructor(_route, _home, _highlight) {
        this._route = _route;
        this._home = _home;
        this._highlight = _highlight;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.ApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageDir;
        this.highlighted = false;
    }
    ngOnInit() {
        this._route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$)).
            subscribe(params => {
            const slug = params.slug;
            if (slug && slug !== "") {
                this._home
                    .getPost(slug)
                    .subscribe(res => this.post = res);
            }
        });
    }
    ngAfterViewChecked() {
        if (this.post && !this.highlighted) {
            this._highlight.highlightAll();
            this.highlighted = true;
        }
    }
    isPage() {
        return this.post ? this.post.type === _models__WEBPACK_IMPORTED_MODULE_7__["Type"].Page : false;
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
};
PostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_8__["HomeService"] },
    { type: _app_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"] }
];
PostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: __webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/post/post.component.html"),
        styles: [__webpack_require__(/*! ./post.component.scss */ "./src/app/home/post/post.component.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_home_service__WEBPACK_IMPORTED_MODULE_8__["HomeService"], _app_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"]])
], PostComponent);



/***/ }),

/***/ "./src/app/home/posts/posts.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/posts/posts.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.w-700-centered {\n  max-width: 45rem;\n  margin: 0 auto;\n  padding: 0 0.625rem;\n}\n.bullet:before {\n  content: \"•\";\n  display: inline-block;\n  color: #747d85;\n  margin: 0 0.75rem;\n  opacity: 0.6;\n  font-weight: 300;\n}\nmain {\n  padding: 2.5rem 0 3.75rem;\n  max-width: 37.5rem;\n  margin: 0 auto;\n}\n@media (min-width: 576px) {\n  main {\n    padding: 3.625rem 0 4.875rem;\n  }\n}\n@media (min-width: 768px) {\n  main {\n    max-width: 43.75rem;\n    margin: 0 auto;\n  }\n}\n.post-card {\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  border: 0.03125rem solid rgba(226, 231, 235, 0.5);\n  border-radius: 0.1875rem;\n  overflow: hidden;\n}\n.post-card:not(:first-child) {\n  margin-top: 1.375rem;\n}\n.post-card__image-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.post-card__image-link img {\n  max-height: 25rem;\n}\n.post-card__content {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  flex: 1;\n}\n.post-card__content-link, .post-card__content-link:hover, .post-card__content-link:focus {\n  color: #31373b;\n}\n.post-card__tag {\n  text-transform: uppercase;\n  color: #0984e3;\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n.post-card__title {\n  font-size: 1.75rem;\n}\n.post-card__excerpt {\n  color: #747d85;\n}\n.post-card__meta {\n  display: flex;\n}\n.post-card__meta span {\n  display: flex;\n}\n.post-card__meta a {\n  color: #31373b;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.post-card__meta a:hover, .post-card__meta a:focus, .post-card__meta a:active {\n  text-decoration: underline;\n}\n.post-card__meta time {\n  font-size: 0.75rem;\n  color: #525c64;\n  font-weight: 400;\n}\n.post-card__author-image {\n  max-width: 2.125rem;\n  margin-right: 0.5rem;\n}\n.post-card__author-image a {\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL3NyYy9hcHAvaG9tZS9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL3NyYy9hcHAvc2Fzcy9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay93aWQtYmxvZy1mcm9udGVuZC93aWQtYmxvZy1mcm9udGVuZC9zdGRpbiIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay93aWQtYmxvZy1mcm9udGVuZC93aWQtYmxvZy1mcm9udGVuZC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ob3Zlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FERUY7QUNFRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNDQ2dCO0VEQWhCLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEQ0o7QUdaQTtFQUNFLHlCQUFBO0VBS0Esa0JBQUE7RUFDQSxjQUFBO0FIV0Y7QUl3Q0k7RUQxREo7SUFHSSw0QkFBQTtFSG1CRjtBQUNGO0FJbUNJO0VEMURKO0lBVUksbUJBQUE7SUFDQSxjQUFBO0VIaUJGO0FBQ0Y7QUdmQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUlBLHNCRERZO0VDRVosaURBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FIZUY7QUdyQkU7RUFDRSxvQkFBQTtBSHVCSjtBR2hCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FIa0JKO0FHakJJO0VBQ0UsaUJBQUE7QUhtQk47QUdmRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0FIaUJKO0FLbENFO0VGc0JJLGNEaENjO0FGK0NwQjtBR1hFO0VBQ0UseUJBQUE7RUFDQSxjRGpEWTtFQ2tEWixrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUhhSjtBR1ZFO0VBQ0Usa0JBQUE7QUhZSjtBR1RFO0VBQ0UsY0RuRGdCO0FGOERwQjtBR1JFO0VBQ0UsYUFBQTtBSFVKO0FHUEk7RUFDRSxhQUFBO0FIU047QUdQSTtFQUNFLGNENURjO0VDNkRkLGtCQUFBO0VBQ0EsZ0JBQUE7QUhTTjtBS3JERTtFRjhDTSwwQkFBQTtBSFVSO0FHUEk7RUFDRSxrQkFBQTtFQUNBLGNEdEVjO0VDdUVkLGdCQUFBO0FIU047QUdORTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUhRSjtBR1BJO0VBQ0Usb0JBQUE7QUhTTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udy03MDAtY2VudGVyZWQge1xuICBtYXgtd2lkdGg6IDQ1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjYyNXJlbTtcbn1cblxuLmJ1bGxldDpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAolwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNzQ3ZDg1O1xuICBtYXJnaW46IDAgMC43NXJlbTtcbiAgb3BhY2l0eTogMC42O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogMi41cmVtIDAgMy43NXJlbTtcbiAgbWF4LXdpZHRoOiAzNy41cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICBtYWluIHtcbiAgICBwYWRkaW5nOiAzLjYyNXJlbSAwIDQuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgbWFpbiB7XG4gICAgbWF4LXdpZHRoOiA0My43NXJlbTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuXG4ucG9zdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwLjAzMTI1cmVtIHNvbGlkIHJnYmEoMjI2LCAyMzEsIDIzNSwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMC4xODc1cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnBvc3QtY2FyZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IDEuMzc1cmVtO1xufVxuLnBvc3QtY2FyZF9faW1hZ2UtbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBvc3QtY2FyZF9faW1hZ2UtbGluayBpbWcge1xuICBtYXgtaGVpZ2h0OiAyNXJlbTtcbn1cbi5wb3N0LWNhcmRfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmbGV4OiAxO1xufVxuLnBvc3QtY2FyZF9fY29udGVudC1saW5rLCAucG9zdC1jYXJkX19jb250ZW50LWxpbms6aG92ZXIsIC5wb3N0LWNhcmRfX2NvbnRlbnQtbGluazpmb2N1cyB7XG4gIGNvbG9yOiAjMzEzNzNiO1xufVxuLnBvc3QtY2FyZF9fdGFnIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwOTg0ZTM7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cbi5wb3N0LWNhcmRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuLnBvc3QtY2FyZF9fZXhjZXJwdCB7XG4gIGNvbG9yOiAjNzQ3ZDg1O1xufVxuLnBvc3QtY2FyZF9fbWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucG9zdC1jYXJkX19tZXRhIHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnBvc3QtY2FyZF9fbWV0YSBhIHtcbiAgY29sb3I6ICMzMTM3M2I7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wb3N0LWNhcmRfX21ldGEgYTpob3ZlciwgLnBvc3QtY2FyZF9fbWV0YSBhOmZvY3VzLCAucG9zdC1jYXJkX19tZXRhIGE6YWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ucG9zdC1jYXJkX19tZXRhIHRpbWUge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjNTI1YzY0O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnBvc3QtY2FyZF9fYXV0aG9yLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAyLjEyNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4ucG9zdC1jYXJkX19hdXRob3ItaW1hZ2UgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufSIsIi53LTcwMC1jZW50ZXJlZCB7XG4gIG1heC13aWR0aDogcHhUb1JlbSg3MjApO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCBweFRvUmVtKDEwKTtcbn1cblxuLmJ1bGxldCB7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMjAyMlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0xO1xuICAgIG1hcmdpbjogMCBweFRvUmVtKDEyKTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxufVxuIiwiLy8gQ09MT1JTXG5cbiRjb2xvci1wcmltYXJ5OiAjMDk4NGUzO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICMxODk1ZjY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMDg3MWMyO1xuXG4kY29sb3ItZ3JleS1saWdodC0xOiAjZjRmN2Y4O1xuJGNvbG9yLWdyZXktbGlnaHQtMjogI2UyZTdlYjtcbiRjb2xvci1ncmV5LWxpZ2h0LTM6ICNjYWQxZDY7XG4kY29sb3ItZ3JleS1saWdodC00OiAjYWNiM2I4O1xuXG4kY29sb3ItZ3JleS1kYXJrLTE6ICM3NDdkODU7XG4kY29sb3ItZ3JleS1kYXJrLTI6ICM1MjVjNjQ7XG4kY29sb3ItZ3JleS1kYXJrLTM6ICMzMTM3M2I7XG4kY29sb3ItZ3JleS1kYXJrLTQ6ICMxZjIzMjc7XG4kY29sb3ItZ3JleS1kYXJrLTU6ICMxMTEzMTY7XG5cbiRjb2xvci10ZXh0LWJsYWNrOiAkY29sb3ItZ3JleS1kYXJrLTM7XG4kY29sb3ItdGV4dC13aGl0ZTogJGNvbG9yLWdyZXktbGlnaHQtMjtcbiRib2R5LWJnOiAjZmJmYmZiO1xuXG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG5cblxuIiwiQGltcG9ydCBcInNhc3MvaW5kZXguc2Nzc1wiO1xuXG5tYWluIHtcbiAgcGFkZGluZzogcHhUb1JlbSg0MCkgMCBweFRvUmVtKDYwKTtcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgIHBhZGRpbmc6IHB4VG9SZW0oNTgpIDAgcHhUb1JlbSg3OCk7XG5cbiAgfVxuICBtYXgtd2lkdGg6IHB4VG9SZW0oNjAwKTtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgIG1heC13aWR0aDogcHhUb1JlbSg3MDApO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG4ucG9zdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXRvcDogcHhUb1JlbSgyMik7XG4gIH1cbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICBib3JkZXI6IHB4VG9SZW0oMC41KSBzb2xpZCByZ2JhKCRjb2xvci1ncmV5LWxpZ2h0LTIsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IHB4VG9SZW0oMyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgJl9faW1hZ2UtbGluayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGltZyB7XG4gICAgICBtYXgtaGVpZ2h0OiBweFRvUmVtKDQwMCk7XG4gICAgfVxuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IHB4VG9SZW0oMTYpO1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAmX19jb250ZW50LWxpbmsge1xuICAgIEBpbmNsdWRlIHBsYWluLWhvdmVyLWZvY3VzIHtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTM7XG4gICAgfVxuICB9XG5cbiAgJl9fdGFnIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICBmb250LXNpemU6IHB4VG9SZW0oMTIpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogcHhUb1JlbSg0KTtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IHB4VG9SZW0oMjgpO1xuICB9XG5cbiAgJl9fZXhjZXJwdCB7XG4gICAgY29sb3I6ICRjb2xvci1ncmV5LWRhcmstMTtcbiAgfVxuXG4gICZfX21ldGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgIHNwYW4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgYSB7XG4gICAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0zO1xuICAgICAgZm9udC1zaXplOiBweFRvUmVtKDEyKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBAaW5jbHVkZSBob3Zlci1mb2N1cy1hY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGltZSB7XG4gICAgICBmb250LXNpemU6IHB4VG9SZW0oMTIpO1xuICAgICAgY29sb3I6ICRjb2xvci1ncmV5LWRhcmstMjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICB9XG4gICZfX2F1dGhvci1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiBweFRvUmVtKDM0cHgpO1xuICAgIG1hcmdpbi1yaWdodDogcHhUb1JlbSg4KTtcbiAgICBhIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvLyBIb3ZlciBtaXhpbiBhbmQgYCRlbmFibGUtaG92ZXItbWVkaWEtcXVlcnlgIGFyZSBkZXByZWNhdGVkLlxuLy9cbi8vIE9yaWdpbmFsbHkgYWRkZWQgZHVyaW5nIG91ciBhbHBoYXMgYW5kIG1haW50YWluZWQgZHVyaW5nIGJldGFzLCB0aGlzIG1peGluIHdhc1xuLy8gZGVzaWduZWQgdG8gcHJldmVudCBgOmhvdmVyYCBzdGlja2luZXNzIG9uIGlPUy1hbiBpc3N1ZSB3aGVyZSBob3ZlciBzdHlsZXNcbi8vIHdvdWxkIHBlcnNpc3QgYWZ0ZXIgaW5pdGlhbCB0b3VjaC5cbi8vXG4vLyBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgd2UndmUga2VwdCB0aGVzZSBtaXhpbnMgYW5kIHVwZGF0ZWQgdGhlbSB0b1xuLy8gYWx3YXlzIHJldHVybiB0aGVpciByZWd1bGFyIHBzZXVkby1jbGFzc2VzIGluc3RlYWQgb2YgYSBzaGltbWVkIG1lZGlhIHF1ZXJ5LlxuLy9cbi8vIElzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI1MTk1XG5cbkBtaXhpbiBob3ZlcigpIHtcbiAgJjpob3ZlciB7IEBjb250ZW50OyB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cygpIHtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHBsYWluLWhvdmVyLWZvY3VzKCkge1xuICAmLFxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlKCkge1xuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/posts/posts.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/posts/posts.component.ts ***!
  \***********************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");



let PostsComponent = class PostsComponent {
    constructor() {
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].storageDir;
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], PostsComponent.prototype, "posts", void 0);
PostsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/posts/posts.component.html"),
        styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/home/posts/posts.component.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PostsComponent);



/***/ }),

/***/ "./src/app/home/tag/tag.component.scss":
/*!*********************************************!*\
  !*** ./src/app/home/tag/tag.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.w-700-centered {\n  max-width: 45rem;\n  margin: 0 auto;\n  padding: 0 0.625rem;\n}\n.bullet:before {\n  content: \"•\";\n  display: inline-block;\n  color: #747d85;\n  margin: 0 0.75rem;\n  opacity: 0.6;\n  font-weight: 300;\n}\n.tag {\n  padding: 4.375rem 0 1.25rem;\n  border-bottom: 0.03125rem solid #e2e7eb;\n}\n.tag__name {\n  margin: 0 0 0.5rem 0;\n  font-size: 2.625rem;\n  color: #1f2327;\n}\n@media (min-width: 576px) {\n  .tag__name {\n    font-size: 3.125rem;\n  }\n}\n.tag__description {\n  font-size: 1.125rem;\n  color: #747d85;\n  font-weight: 400;\n}\n@media (min-width: 576px) {\n  .tag__description {\n    font-size: 1.25rem;\n  }\n}\n.tag__meta {\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n}\n.tag__posts-count {\n  font-size: 0.75rem;\n  color: #747d85;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90YWcvdGFnLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvc3JjL2FwcC9ob21lL3RhZy90YWcuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay93aWQtYmxvZy1mcm9udGVuZC93aWQtYmxvZy1mcm9udGVuZC9zcmMvYXBwL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvc3RkaW4iLCIvaG9tZS9ydW5uZXIvd29yay93aWQtYmxvZy1mcm9udGVuZC93aWQtYmxvZy1mcm9udGVuZC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FERUY7QUNFRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNDQ2dCO0VEQWhCLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEQ0o7QUdiQTtFQUNFLDJCQUFBO0VBQ0EsdUNBQUE7QUhnQkY7QUdkRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFJQSxjREdnQjtBRlVwQjtBSW9DSTtFRHZERjtJQUlJLG1CQUFBO0VIbUJKO0FBQ0Y7QUdoQkU7RUFDRSxtQkFBQTtFQUlBLGNEUGdCO0VDUWhCLGdCQUFBO0FIZUo7QUkwQkk7RUQvQ0Y7SUFHSSxrQkFBQTtFSHNCSjtBQUNGO0FHakJFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUhtQko7QUdoQkU7RUFDRSxrQkFBQTtFQUNBLGNEbkJnQjtBRnFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3RhZy90YWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udy03MDAtY2VudGVyZWQge1xuICBtYXgtd2lkdGg6IDQ1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjYyNXJlbTtcbn1cblxuLmJ1bGxldDpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAolwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNzQ3ZDg1O1xuICBtYXJnaW46IDAgMC43NXJlbTtcbiAgb3BhY2l0eTogMC42O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4udGFnIHtcbiAgcGFkZGluZzogNC4zNzVyZW0gMCAxLjI1cmVtO1xuICBib3JkZXItYm90dG9tOiAwLjAzMTI1cmVtIHNvbGlkICNlMmU3ZWI7XG59XG4udGFnX19uYW1lIHtcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogMi42MjVyZW07XG4gIGNvbG9yOiAjMWYyMzI3O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC50YWdfX25hbWUge1xuICAgIGZvbnQtc2l6ZTogMy4xMjVyZW07XG4gIH1cbn1cbi50YWdfX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgY29sb3I6ICM3NDdkODU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnRhZ19fZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuLnRhZ19fbWV0YSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFnX19wb3N0cy1jb3VudCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6ICM3NDdkODU7XG59IiwiLnctNzAwLWNlbnRlcmVkIHtcbiAgbWF4LXdpZHRoOiBweFRvUmVtKDcyMCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIHB4VG9SZW0oMTApO1xufVxuXG4uYnVsbGV0IHtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwyMDIyXCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTE7XG4gICAgbWFyZ2luOiAwIHB4VG9SZW0oMTIpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG59XG4iLCIvLyBDT0xPUlNcblxuJGNvbG9yLXByaW1hcnk6ICMwOTg0ZTM7XG4kY29sb3ItcHJpbWFyeS1saWdodDogIzE4OTVmNjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMwODcxYzI7XG5cbiRjb2xvci1ncmV5LWxpZ2h0LTE6ICNmNGY3Zjg7XG4kY29sb3ItZ3JleS1saWdodC0yOiAjZTJlN2ViO1xuJGNvbG9yLWdyZXktbGlnaHQtMzogI2NhZDFkNjtcbiRjb2xvci1ncmV5LWxpZ2h0LTQ6ICNhY2IzYjg7XG5cbiRjb2xvci1ncmV5LWRhcmstMTogIzc0N2Q4NTtcbiRjb2xvci1ncmV5LWRhcmstMjogIzUyNWM2NDtcbiRjb2xvci1ncmV5LWRhcmstMzogIzMxMzczYjtcbiRjb2xvci1ncmV5LWRhcmstNDogIzFmMjMyNztcbiRjb2xvci1ncmV5LWRhcmstNTogIzExMTMxNjtcblxuJGNvbG9yLXRleHQtYmxhY2s6ICRjb2xvci1ncmV5LWRhcmstMztcbiRjb2xvci10ZXh0LXdoaXRlOiAkY29sb3ItZ3JleS1saWdodC0yO1xuJGJvZHktYmc6ICNmYmZiZmI7XG5cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1ibGFjazogIzAwMDtcblxuXG4iLCJAaW1wb3J0IFwic2Fzcy9pbmRleFwiO1xuLnRhZyB7XG4gIHBhZGRpbmc6IHB4VG9SZW0oNzApIDAgcHhUb1JlbSgyMCk7XG4gIGJvcmRlci1ib3R0b206IHB4VG9SZW0oMC41KSBzb2xpZCAkY29sb3ItZ3JleS1saWdodC0yO1xuXG4gICZfX25hbWUge1xuICAgIG1hcmdpbjogMCAwIHB4VG9SZW0oOCkgMDtcbiAgICBmb250LXNpemU6IHB4VG9SZW0oNDIpO1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcbiAgICAgIGZvbnQtc2l6ZTogcHhUb1JlbSg1MCk7XG4gICAgfVxuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTQ7XG4gIH1cbiAgJl9fZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxOCk7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgICAgZm9udC1zaXplOiBweFRvUmVtKDIwKTtcbiAgICB9XG4gICAgY29sb3I6ICRjb2xvci1ncmV5LWRhcmstMTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cbiAgJl9fbWV0YSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmX19wb3N0cy1jb3VudCB7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDEyKTtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0xO1xuICB9XG59XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/tag/tag.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/tag/tag.component.ts ***!
  \*******************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/home.service */ "./src/app/home/_services/home.service.ts");






let TagComponent = class TagComponent {
    constructor(_route, _home) {
        this._route = _route;
        this._home = _home;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this._route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$)).
            subscribe(params => {
            const slug = params.slug;
            if (slug && slug !== "") {
                this.tag$ = this._home
                    .getTag(slug);
            }
        });
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
};
TagComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"] }
];
TagComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tag',
        template: __webpack_require__(/*! raw-loader!./tag.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/tag/tag.component.html"),
        styles: [__webpack_require__(/*! ./tag.component.scss */ "./src/app/home/tag/tag.component.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]])
], TagComponent);



/***/ }),

/***/ "./src/app/popup-msg/popup-msg.component.scss":
/*!****************************************************!*\
  !*** ./src/app/popup-msg/popup-msg.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: absolute;\n  left: 10px;\n  bottom: 0;\n}\n\n.alert {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL3NyYy9hcHAvcG9wdXAtbXNnL3BvcHVwLW1zZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9wdXAtbXNnL3BvcHVwLW1zZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcG9wdXAtbXNnL3BvcHVwLW1zZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgYm90dG9tOiAwO1xufVxuLmFsZXJ0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgYm90dG9tOiAwO1xufVxuXG4uYWxlcnQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/popup-msg/popup-msg.component.ts":
/*!**************************************************!*\
  !*** ./src/app/popup-msg/popup-msg.component.ts ***!
  \**************************************************/
/*! exports provided: PopupMsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMsgComponent", function() { return PopupMsgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let PopupMsgComponent = class PopupMsgComponent {
    constructor() {
        this.noErrorsLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.noSuccessMessagesLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    set errors(errors) {
        debugger;
    }
    get errors() {
        return this._errors;
    }
    set httpErrors(err) {
        if (err && err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            const errors = err.error.errors
                ? Object.keys(err.error.errors).map((key) => err.error.errors[key])
                : [err.error.message];
            this._errors = errors;
        }
    }
    deleteError(e, key) {
        this.errors.splice(key, 1);
        if (!this.errors || this.errors.length === 0 || this.errors.length < 0) {
            this.noErrorsLeft.emit();
        }
    }
    deleteSuccessMsg(e, key) {
        this.successMessages.splice(key, 1);
        if (!this.successMessages ||
            this.successMessages.length === 0 ||
            this.successMessages.length < 0) {
            this.noSuccessMessagesLeft.emit();
        }
    }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])
], PopupMsgComponent.prototype, "errors", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]])
], PopupMsgComponent.prototype, "httpErrors", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], PopupMsgComponent.prototype, "successMessages", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
], PopupMsgComponent.prototype, "noErrorsLeft", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
], PopupMsgComponent.prototype, "noSuccessMessagesLeft", void 0);
PopupMsgComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "popup-msg",
        template: __webpack_require__(/*! raw-loader!./popup-msg.component.html */ "./node_modules/raw-loader/index.js!./src/app/popup-msg/popup-msg.component.html"),
        styles: [__webpack_require__(/*! ./popup-msg.component.scss */ "./src/app/popup-msg/popup-msg.component.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PopupMsgComponent);



/***/ }),

/***/ "./src/app/shared-module.ts":
/*!**********************************!*\
  !*** ./src/app/shared-module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-icon/svg-icon.component */ "./src/app/svg-icon/svg-icon.component.ts");
/* harmony import */ var _popup_msg_popup_msg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup-msg/popup-msg.component */ "./src/app/popup-msg/popup-msg.component.ts");
/* harmony import */ var _toggler_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggler.directive */ "./src/app/toggler.directive.ts");
/* harmony import */ var _slugify_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slugify.pipe */ "./src/app/slugify.pipe.ts");







let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_3__["SvgIconComponent"], _popup_msg_popup_msg_component__WEBPACK_IMPORTED_MODULE_4__["PopupMsgComponent"], _toggler_directive__WEBPACK_IMPORTED_MODULE_5__["TogglerDirective"], _slugify_pipe__WEBPACK_IMPORTED_MODULE_6__["SlugifyPipe"]],
        exports: [_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_3__["SvgIconComponent"], _popup_msg_popup_msg_component__WEBPACK_IMPORTED_MODULE_4__["PopupMsgComponent"], _toggler_directive__WEBPACK_IMPORTED_MODULE_5__["TogglerDirective"], _slugify_pipe__WEBPACK_IMPORTED_MODULE_6__["SlugifyPipe"]],
        providers: [_slugify_pipe__WEBPACK_IMPORTED_MODULE_6__["SlugifyPipe"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/slugify.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/slugify.pipe.ts ***!
  \*********************************/
/*! exports provided: SlugifyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlugifyPipe", function() { return SlugifyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlugifyPipe = class SlugifyPipe {
    transform(input) {
        return input
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with -
            .replace(/[^\w\-]+/g, "") // Remove all non-word chars
            .replace(/\-\-+/g, "-") // Replace multiple - with single -
            .replace(/^-+/, "") // Trim - from start of text
            .replace(/-+$/, ""); // Trim - from end of text
    }
};
SlugifyPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "slugify",
    })
], SlugifyPipe);



/***/ }),

/***/ "./src/app/svg-icon/svg-icon.component.scss":
/*!**************************************************!*\
  !*** ./src/app/svg-icon/svg-icon.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host, :host > svg {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 1em;\n  height: 1em;\n}\n:host svg {\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL3NyYy9hcHAvc3ZnLWljb24vc3ZnLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N2Zy1pY29uL3N2Zy1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBRUUsb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNESjtBREdFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3N2Zy1pY29uL3N2Zy1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAmLFxuICAmID4gc3ZnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiAxZW07XG4gIH1cbiAgc3ZnIHtcbiAgICBzdHJva2Utd2lkdGg6IDA7XG4gICAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XG4gICAgZmlsbDogY3VycmVudENvbG9yO1xuICB9XG59XG4iLCI6aG9zdCwgOmhvc3QgPiBzdmcge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xufVxuOmhvc3Qgc3ZnIHtcbiAgc3Ryb2tlLXdpZHRoOiAwO1xuICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/svg-icon/svg-icon.component.ts":
/*!************************************************!*\
  !*** ./src/app/svg-icon/svg-icon.component.ts ***!
  \************************************************/
/*! exports provided: SvgIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconComponent", function() { return SvgIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SvgIconComponent = class SvgIconComponent {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SvgIconComponent.prototype, "icon", void 0);
SvgIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "svg-icon",
        // SVG elements don't have properties, therefore attribute binding is needed
        // https://stackoverflow.com/a/35082700
        template: `
    <svg>
      <use attr.xlink:href="assets/symbol-defs.svg#{{ icon }}"></use>
    </svg>
  `,
        styles: [__webpack_require__(/*! ./svg-icon.component.scss */ "./src/app/svg-icon/svg-icon.component.scss")]
    })
], SvgIconComponent);



/***/ }),

/***/ "./src/app/toggler.directive.ts":
/*!**************************************!*\
  !*** ./src/app/toggler.directive.ts ***!
  \**************************************/
/*! exports provided: TogglerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglerDirective", function() { return TogglerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TogglerDirective = class TogglerDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.visible = false;
        this.autoToggle = true;
    }
    onDocumentClick(e) {
        const clickedEl = e ? e.target : false;
        const directiveEl = this.elementRef ? this.elementRef.nativeElement : false;
        if (!clickedEl || !directiveEl) {
            return;
        }
        if (directiveEl.contains(clickedEl)) {
            this.toggle();
        }
        else if (this.autoToggle) {
            if (this.excluded) {
                if (!this.excluded.contains(clickedEl)) {
                    this.visible = false;
                }
            }
            else {
                this.visible = false;
            }
        }
    }
    toggle() {
        this.visible = !this.visible;
    }
};
TogglerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TogglerDirective.prototype, "autoToggle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", HTMLElement)
], TogglerDirective.prototype, "excluded", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:click", ["$event"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], TogglerDirective.prototype, "onDocumentClick", null);
TogglerDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[appToggler]",
        exportAs: "appToggler",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], TogglerDirective);



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
const SERVER_URL = "http://localhost:8000";
const environment = {
    production: false,
    serverUrl: SERVER_URL,
    apiUrl: `${SERVER_URL}/api/v1`,
    storageDir: `${SERVER_URL}/storage`,
    postImageUploadUrl: `${SERVER_URL}/api/v1/post/imageUpload`
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

module.exports = __webpack_require__(/*! /home/runner/work/wid-blog-frontend/wid-blog-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map