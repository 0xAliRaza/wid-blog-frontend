(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/@tinymce/tinymce-angular/fesm5/tinymce-tinymce-angular.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-angular/fesm5/tinymce-tinymce-angular.js ***!
  \********************************************************************************/
/*! exports provided: EditorComponent, EditorModule, TINYMCE_SCRIPT_SRC, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TINYMCE_SCRIPT_SRC", function() { return TINYMCE_SCRIPT_SRC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Events; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@tinymce/tinymce-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getTinymce = function () {
    var w = typeof window !== 'undefined' ? window : undefined;
    return w && w.tinymce ? w.tinymce : null;
};
var ɵ0 = getTinymce;

var Events = /** @class */ (function () {
    function Events() {
        this.onBeforePaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDblclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDragGesture = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocusIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeRenderUI = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClearUndos = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLoadContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPostProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPostRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPreInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPreProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onProgressState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRedo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSaveContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSetAttrib = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onObjectResizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onObjectResized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onObjectSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onVisualAid = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onBeforePaste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onContextMenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onCopy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onCut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onDblclick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onDrag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onDragDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onDragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onDragGesture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onDragOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onFocusIn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onFocusOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onKeyDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onKeyPress", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onKeyUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onMouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onMouseEnter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onMouseLeave", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onMouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onMouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onMouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onMouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onPaste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onSelectionChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onActivate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onAddUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onBeforeAddUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onBeforeExecCommand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onBeforeGetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onBeforeRenderUI", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onBeforeSetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onClearUndos", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onDeactivate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onDirty", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onExecCommand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onGetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onLoadContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onNodeChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onPostProcess", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onPostRender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onPreInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onPreProcess", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onProgressState", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onRedo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onRemove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onReset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onSaveContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onSetAttrib", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onObjectResizeStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onObjectResized", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onObjectSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onSetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onSubmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Events.prototype, "onVisualAid", void 0);
    return Events;
}());
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];

/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var bindHandlers = function (ctx, editor) {
    validEvents.forEach(function (eventName) {
        var eventEmitter = ctx[eventName];
        editor.on(eventName.substring(2), function (event) { return ctx.ngZone.run(function () { return eventEmitter.emit({ event: event, editor: editor }); }); });
    });
};
var ɵ0$1 = bindHandlers;
var unique = 0;
var uuid = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var ɵ1 = uuid;
var isTextarea = function (element) {
    return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
};
var ɵ2 = isTextarea;
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var ɵ3 = normalizePluginArray;
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var ɵ4 = mergePlugins;
// tslint:disable-next-line:no-empty
var noop = function () { };
var ɵ5 = noop;
var isNullOrUndefined = function (value) { return value === null || value === undefined; };
var ɵ6 = isNullOrUndefined;

/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var createState = function () {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
var ɵ0$2 = createState;
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ɵ1$1 = CreateScriptLoader;
var ScriptLoader = CreateScriptLoader();

var TINYMCE_SCRIPT_SRC = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('TINYMCE_SCRIPT_SRC');
var EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EditorComponent; }),
    multi: true
};
var EditorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditorComponent, _super);
    function EditorComponent(elementRef, ngZone, platformId, tinymceScriptSrc) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.tinymceScriptSrc = tinymceScriptSrc;
        _this.cloudChannel = '5';
        _this.apiKey = 'no-api-key';
        _this.id = '';
        _this.modelEvents = 'change keyup undo redo';
        _this.onTouchedCallback = noop;
        _this.onChangeCallback = noop;
        _this._elementRef = elementRef;
        _this.ngZone = ngZone;
        _this.initialise = _this.initialise.bind(_this);
        return _this;
    }
    Object.defineProperty(EditorComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            this._disabled = val;
            if (this._editor && this._editor.initialized) {
                this._editor.setMode(val ? 'readonly' : 'design');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "editor", {
        get: function () {
            return this._editor;
        },
        enumerable: true,
        configurable: true
    });
    EditorComponent.prototype.writeValue = function (value) {
        if (this._editor && this._editor.initialized) {
            this._editor.setContent(isNullOrUndefined(value) ? '' : value);
        }
        else {
            this.initialValue = value === null ? undefined : value;
        }
    };
    EditorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    EditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    EditorComponent.prototype.setDisabledState = function (isDisabled) {
        if (this._editor) {
            this._editor.setMode(isDisabled ? 'readonly' : 'design');
        }
        else if (isDisabled) {
            this.init = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.init, { readonly: true });
        }
    };
    EditorComponent.prototype.ngAfterViewInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.id = this.id || uuid('tiny-angular');
            this.inline =
                typeof this.inline !== 'undefined' ? (typeof this.inline === 'boolean' ? this.inline : true) : this.init && this.init.inline;
            this.createElement();
            if (getTinymce() !== null) {
                this.initialise();
            }
            else if (this._element && this._element.ownerDocument) {
                ScriptLoader.load(this._element.ownerDocument, this.getScriptSrc(), this.initialise);
            }
        }
    };
    EditorComponent.prototype.ngOnDestroy = function () {
        if (getTinymce() !== null) {
            getTinymce().remove(this._editor);
        }
    };
    EditorComponent.prototype.createElement = function () {
        var tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
        this._element = document.createElement(this.inline ? tagName : 'textarea');
        if (this._element) {
            this._element.id = this.id;
            if (isTextarea(this._element)) {
                this._element.style.visibility = 'hidden';
            }
            this._elementRef.nativeElement.appendChild(this._element);
        }
    };
    EditorComponent.prototype.initialise = function () {
        var _this = this;
        var finalInit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.init, { target: this._element, inline: this.inline, readonly: this.disabled, plugins: mergePlugins(this.init && this.init.plugins, this.plugins), toolbar: this.toolbar || (this.init && this.init.toolbar), setup: function (editor) {
                _this._editor = editor;
                editor.on('init', function (e) {
                    _this.initEditor(editor);
                });
                bindHandlers(_this, editor);
                if (_this.init && typeof _this.init.setup === 'function') {
                    _this.init.setup(editor);
                }
            } });
        if (isTextarea(this._element)) {
            this._element.style.visibility = '';
        }
        this.ngZone.runOutsideAngular(function () {
            getTinymce().init(finalInit);
        });
    };
    EditorComponent.prototype.getScriptSrc = function () {
        return isNullOrUndefined(this.tinymceScriptSrc) ?
            "https://cdn.tiny.cloud/1/" + this.apiKey + "/tinymce/" + this.cloudChannel + "/tinymce.min.js" :
            this.tinymceScriptSrc;
    };
    EditorComponent.prototype.initEditor = function (editor) {
        var _this = this;
        editor.on('blur', function () { return _this.ngZone.run(function () { return _this.onTouchedCallback(); }); });
        editor.on(this.modelEvents, function () {
            _this.ngZone.run(function () { return _this.onChangeCallback(editor.getContent({ format: _this.outputFormat })); });
        });
        if (typeof this.initialValue === 'string') {
            this.ngZone.run(function () {
                editor.setContent(_this.initialValue);
                _this.onChangeCallback(editor.getContent({ format: _this.outputFormat }));
            });
        }
    };
    EditorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [TINYMCE_SCRIPT_SRC,] }] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditorComponent.prototype, "disabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditorComponent.prototype, "cloudChannel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditorComponent.prototype, "apiKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditorComponent.prototype, "init", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditorComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditorComponent.prototype, "initialValue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditorComponent.prototype, "outputFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditorComponent.prototype, "inline", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditorComponent.prototype, "tagName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditorComponent.prototype, "plugins", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditorComponent.prototype, "toolbar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditorComponent.prototype, "modelEvents", void 0);
    EditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'editor',
            template: '<ng-template></ng-template>',
            providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
            styles: [':host { display: block; }']
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(TINYMCE_SCRIPT_SRC))
    ], EditorComponent);
    return EditorComponent;
}(Events));

var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            declarations: [EditorComponent],
            exports: [EditorComponent]
        })
    ], EditorModule);
    return EditorModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=tinymce-tinymce-angular.js.map


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-angular/node_modules/tslib/tslib.es6.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-angular/node_modules/tslib/tslib.es6.js ***!
  \*******************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <admin-top-nav (toggleSideNav)=\"toggleSideNav()\"></admin-top-nav> -->\n\n\n<div class=\"main\">\n    <aside *ngIf=\"sideNavVisible\" [@fadeInOut] class=\"main__sidebar \"\n        [ngClass]=\"{'main__sidebar--floating': sideNavFloating}\" [@slideInOutFromLeft]>\n\n        <div class=\"sidebar-top-btns\">\n            <button (click)=\"toggleSideNav()\" type=\"button\" title=\"toggle sidebar\">\n                <svg-icon icon=\"menu-open\"></svg-icon>\n            </button>\n            <button type=\"button\" title=\"search something\">\n                <svg-icon icon=\"search\"></svg-icon>\n            </button>\n        </div>\n\n        <nav class=\"sidebar-nav\">\n            <ul class=\"sidebar-nav__list\">\n                <li class=\"sidebar-nav__item\">\n                    <!-- sidebar-nav__link--icon-right -->\n                    <a routerLink=\"/\" class=\"sidebar-nav__link \">\n                        <svg-icon icon=\"home\" class=\"mr-2\"></svg-icon>\n                        Visit Site\n                        <!-- <svg-icon icon=\"external-link\" class=\"icon-right\"></svg-icon> -->\n                    </a>\n                </li>\n            </ul>\n\n            <ul class=\"sidebar-nav__list\">\n                <li class=\"sidebar-nav__list-heading\">General</li>\n                <li class=\"sidebar-nav__item\">\n\n                    <button appToggler #postMenu=\"appToggler\" class=\"sidebar-nav__list-toggler\">\n                        <svg-icon [icon]=\"postMenu.visible ? 'chevron-down': 'chevron-right'\" class=\"mr-2\"></svg-icon>\n                    </button>\n\n                    <a class=\"sidebar-nav__link\" routerLinkActive=\"sidebar-nav__link--active\" routerLink=\"post\">\n\n                        <svg-icon icon=\"files\" class=\"mr-2\"></svg-icon>\n                        Posts\n\n                    </a>\n                    <ul [@slideInOut] *ngIf=\"postMenu.visible\" class=\"sidebar-nav__list sidebar-nav__list--inner\">\n                        <li class=\"sidebar-nav__item\">\n                            <a class=\"sidebar-nav__link\" routerLink=\"post\" [queryParams]=\"{type: 'published'}\">\n                                <svg-icon class=\"mr-2\" icon=\"file\"></svg-icon>\n                                Published\n                            </a>\n                        </li>\n                        <li class=\"sidebar-nav__item\">\n                            <a class=\"sidebar-nav__link\" routerLink=\"post\" [queryParams]=\"{type: 'draft'}\"\n                                routerLink=\"post\" [queryParams]=\"{type: 'draft'}\">\n                                <svg-icon class=\"mr-2\" icon=\"edit\"></svg-icon>\n                                Drafts\n                            </a>\n                        </li>\n                    </ul>\n                    <a routerLink=\"editor/post\" class=\"sidebar-nav__link-new-post\">\n                        <span>\n                            <svg-icon icon=\"plus\"></svg-icon>\n                        </span>\n                    </a>\n                </li>\n                <li class=\"sidebar-nav__item\">\n                    <a class=\"sidebar-nav__link\" routerLink=\"page\"\n                        routerLinkActive=\"sidebar-nav__link--active\">Pages</a>\n                </li>\n                <li *ngIf=\"currentUser.isSuperAdmin() || currentUser.isAdmin()\" class=\"sidebar-nav__item\">\n                    <a class=\"sidebar-nav__link\" routerLink=\"tag\" routerLinkActive=\"sidebar-nav__link--active\">Tags</a>\n                </li>\n                <li class=\"sidebar-nav__item\">\n                    <a class=\"sidebar-nav__link\" routerLink=\"user\" routerLinkActive=\"sidebar-nav__link--active\"\n                        [routerLinkActiveOptions]=\"{exact: true}\">Users</a>\n                </li>\n            </ul>\n                \n            <ul *ngIf=\"currentUser.isSuperAdmin() || currentUser.isAdmin()\" class=\"sidebar-nav__list\">\n                <li class=\"sidebar-nav__list-heading\">Advanced</li>\n                <li class=\"sidebar-nav__item\">\n                    <a class=\"sidebar-nav__link\" routerLink=\"settings\"\n                        routerLinkActive=\"sidebar-nav__link--active\">Settings</a>\n                </li>\n            </ul>\n        </nav>\n\n        <div class=\"sidebar-user\" appToggler #sidebarUserMenu=\"appToggler\"\n            [ngClass]=\"{'sidebar-user--active': sidebarUserMenu.visible}\">\n            <div class=\"sidebar-user__img-wrapper\">\n                <img src=\"assets/img/user.png\" alt=\"{{currentUser.name}}\" class=\"img-fluid shadow-sm sidebar-user__img\">\n            </div>\n            <div class=\"sidebar-user__meta\">\n                <p class=\"sidebar-user__name\">{{currentUser.name | titlecase}}\n                </p>\n                <span class=\"sidebar-user__email\" [ngStyle]=\"{'font-size': '13px'}\">{{currentUser.email |\n                    lowercase}}</span>\n            </div>\n            <div class=\"sidebar-user__toggler\">\n                <svg-icon icon=\"chevron-down\"></svg-icon>\n            </div>\n\n            <ul *ngIf=\"sidebarUserMenu.visible\" [@fadeInOut] class=\"sidebar-user__dropdown shadow-lg\">\n                <li class=\"sidebar-user__dropdown-item\">\n                    <a [routerLink]=\"'/admin/user/' + currentUser.id\" class=\"sidebar-user__dropdown-link\">\n                        <svg-icon class=\"mr-2\" icon=\"user\"></svg-icon>\n                        Profile\n                    </a>\n\n                </li>\n                <li class=\"sidebar-user__dropdown-item\">\n                    <a (click)=\"logout()\" class=\"sidebar-user__dropdown-link\">\n                        <svg-icon class=\"mr-2\" icon=\"log-out\"></svg-icon>\n                        Logout\n                    </a>\n                </li>\n            </ul>\n\n        </div>\n    </aside>\n\n\n\n    <main class=\"main__content\">\n            <button *ngIf=\"sideNavVisible === false\" [@fadeInOut] (click)=\"toggleSideNav()\" type=\"button\"\n                class=\"main__sidebar-toggler\">\n                <svg-icon icon=\"menu\"></svg-icon>\n            </button>\n            <router-outlet></router-outlet>\n    </main>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 offset-md-3 mt-5\">\n            <div class=\"card\">\n                <h4 class=\"card-header\">Please Login...</h4>\n                <div class=\"card-body\">\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-group\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"email\" formControlName=\"email\" class=\"form-control\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"password\">Password</label>\n                            <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                            </div>\n                        </div>\n                        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                            Login\n                        </button>\n                        <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/pages/pages.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/pages/pages.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>pages works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/posts/create/create.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/posts/create/create.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-post-editor *ngIf=\"user && allUsers && tags.length > 0\" [user]=\"user\" [allUsers]=\"allUsers\" [tags]=\"tags\"\n    [postStatus]=\"postStatus\" (createTag)=\"onCreateTag($event)\" (formChange)=\"onFormChange($event)\" [type]=\"type\">\n</admin-post-editor>\n<popup-msg *ngIf=\"errors\" [httpErrors]=\"errors\" (noErrorsLeft)=\"errors = undefined\"></popup-msg>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/posts/edit/edit.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/posts/edit/edit.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-post-editor *ngIf=\"user && allUsers && tags.length > 0 && post\" [user]=\"user\" [allUsers]=\"allUsers\" [tags]=\"tags\"\n    [post]=\"post\" [postStatus]=\"postStatus\" (createTag)=\"onCreateTag($event)\" (formChange)=\"onFormChange($event)\"\n    (delete)=\"onDelete()\"></admin-post-editor>\n<popup-msg *ngIf=\"errors || successMessages.length > 0\" [httpErrors]=\"errors\" [successMessages]=\"successMessages\"\n    (noSuccessMessagesLeft)=\"successMessages = []\" (noErrorsLeft)=\"errors = undefined\"></popup-msg>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/posts/editor/editor.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/posts/editor/editor.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"editor-top-nav\" class=\"navbar navbar-expand\">\n\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a *ngIf=\"!isPage();else pagesLink\" class=\"nav-link posts-link\" routerLink=\"/admin/post\">\n                <svg-icon icon=\"chevron-left\" class=\"mr-1\"></svg-icon>Posts\n            </a>\n            <ng-template #pagesLink>\n                <a class=\"nav-link posts-link\" routerLink=\"/admin/page\">\n                    <svg-icon icon=\"chevron-left\" class=\"mr-1\"></svg-icon>Pages\n                </a>\n            </ng-template>\n        </li>\n        <li class=\"nav-item\">\n            <span class=\"navbar-text\">\n                {{this.postStatus | titlecase}}\n            </span>\n        </li>\n    </ul>\n    <ul class=\"navbar-nav\" *ngIf=\"!!wordCount\">\n        <span class=\"navbar-text navbar-text--wordCount\">\n            Words: {{+wordCount.words}}\n        </span>\n        <span class=\"navbar-text navbar-text--wordCount\">\n            Characters: {{+wordCount.characters}}\n        </span>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n\n        <li class=\"nav-item submit-toggle\" #submitMenu>\n            <button appToggler #toggler=\"appToggler\" [excluded]=\"submitMenu\"\n                class=\"btn nav-link submit-toggle__btn\">Submit <svg-icon icon=\"chevron-down\" class=\"ml-1\"></svg-icon>\n            </button>\n            <div *ngIf=\"toggler.visible\" class=\"shadow submit-toggle__content\">\n                <p class=\"font-weight-bold mx-2\">Status</p>\n                <div class=\"my-3 px-2\">\n                    <div class=\"custom-control custom-checkbox mb-2\">\n                        <input id=\"published\" (input)=\"onTypeChange(true)\" class=\"custom-control-input\" type=\"checkbox\"\n                            [checked]=\"f.published.value\">\n                        <label class=\"custom-control-label\" for=\"published\">\n                            Published\n                        </label>\n                    </div>\n                    <div class=\"custom-control custom-checkbox\">\n                        <input id=\"draft\" (input)=\"onTypeChange(false)\" class=\"custom-control-input\" type=\"checkbox\"\n                            [checked]=\"!f.published.value\">\n                        <label class=\"custom-control-label\" for=\"draft\">\n                            Draft\n                        </label>\n                    </div>\n                </div>\n                <div class=\"mb-1 d-flex justify-content-center\">\n                    <button class=\"btn btn-sm btn-outline-danger my-2 mr-2\" (click)=\"toggler.toggle()\">Cancel</button>\n                    <button class=\"btn btn-sm btn-success my-2\" (click)=\"toggler.toggle();onSubmit()\">Submit</button>\n                </div>\n\n            </div>\n\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"settings-btn\" (click)=\"toggleSideNav()\">\n                <span class=\"settings-btn__icon\"></span>\n            </a>\n        </li>\n    </ul>\n</nav>\n\n<div class=\"container-xl\">\n    <div class=\"row\">\n        <div class=\"col-12 my-5 py-5\">\n            <section class=\"post\">\n                <div class=\"w-700-centered\">\n                    <div class=\"post__title\">\n                        <input placeholder=\"Title...\" class=\"post__title-input\" [formControl]=\"f.title\">\n                    </div>\n                    <div class=\"post__text\">\n                        <editor (onChange)=\"onTinymceChange()\" (onInit)=\"onTinymceInit($event)\" [init]=\"tinymceConfig\"\n                            id=\"tinymce-editor\"></editor>\n                    </div>\n                </div>\n            </section>\n        </div>\n    </div>\n</div>\n\n<aside class=\"sidebar\" @slideInOut *ngIf=\"isSideNavOpen\">\n    <div class=\"sidebar__top-intro\">\n        <h4 class=\"sidebar__top-intro-heading\">Settings</h4>\n        <a class=\"settings-btn\" (click)=\"toggleSideNav()\">\n            <span class=\"settings-btn__icon settings-btn__icon--cross\"></span>\n        </a>\n    </div>\n    <div class=\"sidebar__form\">\n        <form enctype=\"multipart/form-data\" [formGroup]=\"postForm\">\n            <div class=\"form-group\">\n\n                <div class=\"custom-file \">\n                    <label for=\"post-featured-image\" class=\"custom-file-label\">{{ f.featured_image_file.value &&\n                        f.featured_image_file.value.name ? f.featured_image_file.value.name : 'Featured image'\n                        }}</label>\n                    <input #featuredImage type=\"file\" accept=\"image/*\" id=\"post-featured-image\"\n                        class=\"custom-file-input\" (change)=\"onFeaturedImageChange($event)\">\n                </div>\n                <div class=\"featured-image-thumb\" *ngIf=\"featuredImageUrl\" class=\"d-flex flex-column\">\n                    <img [src]=\"featuredImageUrl\" alt=\"\" class=\"img-fluid img-thumbnail \">\n                    <button (click)=\"removeFeaturedImage($event)\"\n                        class=\"ml-auto btn btn-sm btn-link text-danger\">Remove</button>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"post-url\">URL</label>\n                <input type=\"text\" id=\"post-url\" class=\"form-control\" formControlName=\"slug\"\n                    [value]=\"f.slug.value | slugify\">\n            </div>\n            <div class=\"form-group\" *ngIf=\"post.exists\">\n                <label for=\"post-published-at\">Published at</label>\n                <input [disabled]=\"!f.published.value\" type=\"datetime-local\" class=\"form-control\" id=\"post-published-at\"\n                    (input)=\"onPublishedAtChange($event)\" [value]=\"f.published_at.value | date:'yyyy-MM-ddTHH:mm'\">\n            </div>\n            <div *ngIf=\"allUsers\" class=\"form-group\">\n                <label for=\"post-author\">Author</label>\n                <ng-select *ngIf=\"user.isAdmin() || user.isSuperAdmin(); else writerAuthorEl\"\n                    placeholder=\"Select post author...\" labelForId=\"post-author\" [items]=\"allUsers\" bindLabel=\"name\"\n                    bindValue=\"id\" [clearable]=\"false\" formControlName=\"author_id\" [virtualScroll]=\"true\">\n                </ng-select>\n                <ng-template #writerAuthorEl>\n                    <ng-select placeholder=\"Select post author...\" labelForId=\"post-author\" [clearable]=\"false\"\n                        [searchable]=\"false\" formControlName=\"author_id\">\n                        <ng-option [value]=\"user.id\">{{user.name}}</ng-option>\n                    </ng-select>\n                </ng-template>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"post-tags\">Tags</label>\n                <ng-select *ngIf=\"ngSelectTagCreator\" placeholder=\"Select or create tags...\" labelForId=\"post-tags\"\n                    [items]=\"tags\" [multiple]=\"true\" [addTag]=\"ngSelectTagCreator.bind(this)\" bindLabel=\"name\"\n                    formControlName=\"tags\" [virtualScroll]=\"true\">\n                </ng-select>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"post-excerpt\">Custom excerpt</label>\n                <textarea rows=\"3\" type=\"text\" id=\"post-excerpt\" class=\"form-control\"\n                    formControlName=\"custom_excerpt\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"post-meta-title\">Meta Title</label>\n                <input type=\"text\" id=\"post-meta-title\" class=\"form-control\" formControlName=\"meta_title\">\n                <span class=\"text-warning\" *ngIf=\"f.meta_title.value && f.meta_title.value.length > 60\">Warning:\n                    recommended `meta_title` length is 60 chars.</span>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"post-meta-description\">Meta description</label>\n                <textarea rows=\"3\" type=\"text\" id=\"post-meta-description\" class=\"form-control\"\n                    formControlName=\"meta_description\"></textarea>\n                <span class=\"text-warning\"\n                    *ngIf=\"f.meta_description.value && f.meta_description.value.length > 160\">Warning: recommended\n                    `meta_description` length is 160 chars.</span>\n            </div>\n            <div class=\"custom-control custom-checkbox\">\n                <input type=\"checkbox\" id=\"post-featured\" class=\"custom-control-input\" formControlName=\"featured\">\n                <label for=\"post-featured\" class=\"custom-control-label\">Featured</label>\n            </div>\n        </form>\n    </div>\n    <div class=\"sidebar__delete-post\">\n        <button [disabled]=\"!post.exists\" (click)=\"onDelete()\"\n            class=\"btn btn-sm btn-outline-danger sidebar__delete-post-btn\">\n            <svg-icon icon=\"trash\"></svg-icon>\n            <span>Delete</span>\n        </button>\n    </div>\n</aside>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/posts/posts.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/posts/posts.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-md\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n\n            <h3 class=\"text-center mt-5 mb-5\">\n                {{!isPage() ? 'Posts' : 'Pages'}}\n            </h3>\n\n            <div class=\"d-flex flex-wrap-reverse flex-row-reverse align-center mb-2\">\n\n                <div class=\"p-2\" *ngIf=\"!isPage();else addPage\">\n                    <a class=\"btn btn-primary\" routerLink=\"/admin/editor/post\">Create new</a>\n                </div>\n                <ng-template #addPage>\n                    <div class=\"p-2\">\n                        <a class=\"btn btn-primary\" routerLink=\"/admin/editor/page\">Create new</a>\n                    </div>\n                </ng-template>\n                <div class=\"p-2\">\n                    <select (change)=\"onTableSizeChange($event)\" class=\"custom-select\">\n                        <option *ngFor=\"let size of tableSizes\" [ngValue]=\"size\">\n                            {{ size }}\n                        </option>\n                    </select>\n                </div>\n                <div class=\"p-2\">\n                    <select (change)=\"onPostsStatusChange($event)\" class=\"custom-select\">\n                        <option [value]=\"undefined\" selected>All</option>\n                        <option [value]=\"true\">\n                            Published\n                        </option>\n                        <option [value]=\"false\">\n                            Draft\n                        </option>\n                    </select>\n                </div>\n\n\n            </div>\n            <button title=\"Refresh\" type=\"button\" (click)=\"onRefresh()\"\n                class=\"btn btn-link d-inline-flex align-items-center float-right my-1\">\n                <svg-icon class=\"\" icon=\"refresh\"></svg-icon>\n            </button>\n            <div class=\"table-responsive shadow-sm\">\n                <table class=\"table table-hover m-0\">\n                    <thead>\n                        <tr>\n                            <th>ID</th>\n                            <th [ngStyle]=\"{'min-width': '150px'}\">Title</th>\n                            <th>Created</th>\n                            <th>Updated</th>\n                            <th>Featured</th>\n                            <th>Type</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let post of POSTS | paginate : {\n                          itemsPerPage: tableSize,\n                          currentPage: currentPage,\n                          totalItems: count\n                        }\" routerLink=\"/admin/editor/{{isPage() ? 'page': 'post'}}/{{post.id}}\"\n                            [ngStyle]=\"{cursor: 'pointer'}\" title=\"Click to edit {{post.title}}\">\n                            <th class=\"align-middle\" scope=\"row\">{{post.id}}</th>\n                            <td class=\"align-middle\" class=\"align-middle\">\n                                <div class=\"text-dark\">{{post.title}}</div>\n                                <span class=\"text-secondary\" [ngStyle]=\"{fontSize: '13px'}\">By <b>{{post.user.name}}</b>\n                                    <ng-container *ngIf=\"post.first_tag\"> in\n                                        <b>{{post.first_tag.name}}</b>\n                                    </ng-container>\n                                </span>\n\n                            </td>\n\n                            <td class=\"align-middle\" [title]=\"post.created_at | date:'full'\">{{post.created_at | date}}\n                            </td>\n                            <td class=\"align-middle\" [title]=\"post.updated_at | date:'full'\">{{post.updated_at | date}}\n                            </td>\n                            <td class=\"align-middle\">\n                                <div class=\"custom-control custom-checkbox \">\n                                    <input [ngStyle]=\"{pointerEvents: 'none'}\" type=\"checkbox\"\n                                        class=\"custom-control-input position-static\" [checked]=\"!!+post.featured\"\n                                        id=\"post-featured-checkbox\">\n                                    <label [ngStyle]=\"{pointerEvents: 'none'}\" (click)=\"false\"\n                                        for=\"post-featured-checkbox\" class=\"custom-control-label\"></label>\n                                </div>\n                            </td>\n                            <td class=\"align-middle\"><span class=\"badge\"\n                                    [ngClass]=\"{'badge-success': post.published, 'badge-info': !post.published}\">\n                                    {{post.published ? \"Published\" : \"Draft\"}}</span></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"d-flex justify-content-center mt-4 align-items-center\">\n                <pagination-controls responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\"\n                    (pageChange)=\"onTableDataChange($event)\">\n                </pagination-controls>\n            </div>\n\n            <popup-msg *ngIf=\"httpErrors || successMsgs.length > 0\" (noErrorsLeft)=\"clearErrors()\"\n                (noSuccessMessagesLeft)=\"clearSuccessMsgs()\" [httpErrors]=\"httpErrors\" [successMessages]=\"successMsgs\">\n            </popup-msg>\n\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/setting/setting.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/setting/setting.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center my-5\">Blog Settings</h3>\n<div class=\"row justify-content-center\">\n    <div class=\"col-sm-12 col-md-8 col-lg-6\">\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" novalidate>\n            <div class=\"form-group\">\n                <label for=\"title\">Site title</label>\n                <input type=\"text\" [formControl]=\"this.f.title\" id=\"title\" [ngClass]=\"{\n                        'form-control': true, 'is-invalid': !f.title.valid && f.title.touched, 'is-valid': f.title.valid && f.title.touched\n                    }\">\n                <div class=\"invalid-feedback\" *ngIf=\"f.title.hasError('required') && f.title.touched\">Site title is\n                    required.</div>\n                <div class=\"invalid-feedback\" *ngIf=\"f.title.hasError('maxlength') && f.title.touched\">Site title must\n                    not be longer than 60 characters.</div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"meta_title\">Meta title</label>\n                <input type=\"text\" [formControl]=\"this.f.meta_title\" id=\"meta_title\" [ngClass]=\"{\n                    'form-control': true, 'is-invalid': !f.meta_title.valid && f.meta_title.touched, 'is-valid': f.meta_title.valid && f.meta_title.touched\n                }\">\n                <div class=\"invalid-feedback\" *ngIf=\"f.meta_title.hasError('required') && f.meta_title.touched\">Meta\n                    title is\n                    required.</div>\n                <div class=\"invalid-feedback\" *ngIf=\"f.meta_title.hasError('maxlength') && f.meta_title.touched\">Meta\n                    title must\n                    not be longer than 60 characters.</div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"meta_description\">Meta description</label>\n                <input type=\"text\" [formControl]=\"this.f.meta_description\" id=\"meta_description\" [ngClass]=\"{\n                                'form-control': true, 'is-invalid': !f.meta_description.valid && f.meta_description.touched, 'is-valid': f.meta_description.valid && f.meta_description.touched\n                            }\">\n                <div class=\"invalid-feedback\" *ngIf=\"f.meta_description.invalid && f.meta_description.touched\">Meta\n                    description must\n                    not be longer than 160 characters.</div>\n            </div>\n\n            <div class=\"my-1 py-4 d-flex align-items-center justify-content-end\">\n\n                <button *ngIf=\"setting.exists\" (click)=\"onDelete()\" class=\"btn btn-outline-danger mr-2\"\n                    type=\"button\">Delete\n                </button>\n\n                <button *ngIf=\"success; else elseBtn\" class=\"btn btn-success\" type=\"submit\" (click)=\"false\"\n                    [ngStyle]=\"{pointerEvents: 'none'}\">\n                    <svg-icon icon=\"cloud-check\" class=\"mr-1\"></svg-icon>Success\n                </button>\n                <ng-template #elseBtn>\n                    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form.valid || form.pristine || loading\">\n                        Submit\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\n                            aria-hidden=\"true\"></span>\n                    </button>\n                </ng-template>\n            </div>\n\n\n        </form>\n\n    </div>\n</div>\n\n<popup-msg *ngIf=\"errors\" [httpErrors]=\"errors\" (noErrorsLeft)=\"errors = undefined\"></popup-msg>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/tags/tags.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/tags/tags.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h3 class=\"text-center my-5\">\n                Tags\n            </h3>\n            <div class=\"d-flex align-items-center justify-content-around my-4\">\n                <form *ngIf=\"createTag; else createTagBtn\" class=\"form-inline\">\n                    <label class=\"sr-only\" for=\"create-tag-name\">Name</label>\n                    <input type=\"text\" class=\"form-control mr-1 mb-1\" id=\"create-tag-name\" placeholder=\"Name\"\n                        [formControl]=\"f.name\">\n                    <label class=\"sr-only\" for=\"create-tag-slug\">Slug</label>\n                    <input type=\"text\" class=\"form-control mr-1 mb-1\" id=\"create-tag-slug\" placeholder=\"Slug\"\n                        [formControl]=\"f.slug\">\n                    <label class=\"sr-only\" for=\"create-tag-description\">Description</label>\n                    <input type=\"text\" class=\"form-control mr-1 mb-1\" id=\"create-tag-description\"\n                        placeholder=\"Description\" [formControl]=\"f.description\">\n                    <button title=\"Create Tag\" type=\"button\" class=\"btn btn-link text-danger mr-2\"\n                        (click)=\"createTag = false;form.reset()\">Cancel</button>\n                    <button title=\"Create Tag\" type=\"submit\" class=\"btn btn-primary mr-2\" (click)=\"create()\"\n                        [disabled]=\"form.pristine || !form.valid\">Submit</button>\n\n                </form>\n                <ng-template #createTagBtn>\n                    <button title=\"Add new tag\" type=\"button\" class=\"btn btn-outline-primary mr-2 ml-auto\"\n                        (click)=\"addCreateTagForm()\">Add new</button>\n                </ng-template>\n            </div>\n\n            <button title=\"Refresh\" type=\"button\" (click)=\"onRefresh()\"\n                class=\"btn btn-link d-inline-flex align-items-center float-right my-1\">\n                <svg-icon class=\"\" icon=\"refresh\"></svg-icon>\n            </button>\n            <div class=\"table-responsive shadow-sm\">\n                <table class=\"table m-0\">\n\n                    <thead class=\"\">\n                        <tr>\n                            <th>ID</th>\n                            <th>Name</th>\n                            <th>Slug</th>\n                            <th>Description</th>\n                            <th>Created</th>\n                            <th>Updated</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr class=\"position-relative\" *ngFor=\"let tag of tags; let i = index\">\n                            <th role=\"row\">{{tag.id}}</th>\n                            <td>\n                                <ng-container *ngIf=\"editTag && editTag.id === tag.id;else name\">\n                                    <label class=\"sr-only\" for=\"name\">Name</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Tag Name\"\n                                        [formControl]=\"f.name\">\n                                </ng-container>\n                                <ng-template #name>\n                                    {{tag.name}}\n                                </ng-template>\n                            </td>\n                            <td>\n                                <ng-container *ngIf=\"editTag && editTag.id === tag.id;else slug\">\n                                    <label class=\"sr-only\" for=\"slug\">Slug</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"slug\" placeholder=\"Tag slug\"\n                                        [formControl]=\"f.slug\">\n                                </ng-container>\n                                <ng-template #slug>\n                                    {{tag.slug}}\n                                </ng-template>\n                            </td>\n                            <td>\n                                <ng-container *ngIf=\"editTag && editTag.id === tag.id;else description\">\n                                    <label class=\"sr-only\" for=\"description\">Description</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"description\"\n                                        placeholder=\"Tag Description\" [formControl]=\"f.description\">\n                                </ng-container>\n                                <ng-template #description>\n                                    {{tag.description}}\n                                </ng-template>\n                            </td>\n                            <td title=\"{{tag.created_at | date:'full'}}\">{{tag.created_at | date}}</td>\n                            <td title=\"{{tag.updated_at | date:'full'}}\">{{tag.updated_at | date}}</td>\n                            <td [style.width]=\"'17%'\">\n                                <ng-container *ngIf=\"editTag && editTag.id === tag.id;else generalActions\">\n\n                                    <button (click)=\"editTag = undefined;form.reset()\"\n                                        class=\"btn btn-sm btn-link text-danger mr-1\">\n                                        Cancel\n                                    </button>\n                                    <button class=\"btn btn-sm btn-success\" (click)=\"update(i)\"\n                                        [disabled]=\"form.pristine || !form.valid\">\n                                        Update\n                                    </button>\n                                </ng-container>\n                                <ng-template #generalActions>\n                                    <button title=\"Edit tag (inline)\" [ngStyle]=\"{'font-size': '17px'}\"\n                                        (click)=\"edit(tag)\" class=\"btn text-dark py-0\">\n                                        <svg-icon icon=\"edit\"></svg-icon>\n                                    </button>\n                                    <button title=\"Delete tag\" [ngStyle]=\"{'font-size': '17px'}\"\n                                        class=\"btn text-danger py-0\" (click)=\"delete(i, tag.id)\">\n                                        <svg-icon icon=\"trash\"></svg-icon>\n                                    </button>\n                                </ng-template>\n                            </td>\n\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/users/create/create.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/users/create/create.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3 class=\"text-center my-5\">New User</h3>\n    <admin-user-form (formChange)=\"onSubmit($event)\" [roles]=\"roles\" [loading]=\"loading\"></admin-user-form>\n</div>\n<popup-msg *ngIf=\"errors\" [httpErrors]=\"errors\" (noErrorsLeft)=\"errors = undefined\"></popup-msg>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/users/edit/edit.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/users/edit/edit.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <h3 class=\"text-center my-5\">{{user?.name + \"'s\" | titlecase}} Profile</h3>\n    <admin-user-form *ngIf=\"user && roles\" [user]=\"user\" [roles]=\"roles\" (formChange)=\"onSubmit($event)\"\n        (delete)=\"onDelete()\" [loading]=\"loading\"></admin-user-form>\n</div>\n\n<popup-msg *ngIf=\"errors || successMessages.length > 0\" [httpErrors]=\"errors\" [successMessages]=\"successMessages\"\n    (noErrorsLeft)=\"errors=undefined\" (noSuccessMessagesLeft)=\"successMessages = []\"></popup-msg>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/users/form/form.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/users/form/form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n    <div class=\"col-sm-12 col-md-8 col-lg-6\">\n        <form autocomplete=\"disabled\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" novalidate>\n            <div class=\"form-group\">\n                <label for=\"fullname\">Full Name</label>\n                <input type=\"text\" [formControl]=\"f.name\" id=\"fullname\"\n                    [ngClass]=\"{\n                            'form-control': true, 'is-invalid': !f.name.valid && f.name.touched,'is-valid': f.name.valid && f.name.touched}\">\n                <div class=\"invalid-feedback\" *ngIf=\"f.name.hasError('required') && f.name.touched\">User name is\n                    required.</div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"email\" [formControl]=\"f.email\" id=\"email\" [ngClass]=\"{\n                        'form-control': true, 'is-invalid': !f.email.valid && f.email.touched, 'is-valid': f.email.valid && f.email.touched\n                    }\">\n                <div class=\"invalid-feedback\" *ngIf=\"f.email.hasError('required') && f.email.touched\">User email is\n                    required.</div>\n                <div class=\"invalid-feedback\" *ngIf=\"f.email.hasError('email') && f.email.touched\">Input must be a\n                    valid email address.</div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"slug\">Slug</label>\n                <input type=\"slug\" [formControl]=\"f.slug\" [value]=\"f.slug.value | slugify\" id=\"slug\" [ngClass]=\"{\n                        'form-control': true, 'is-invalid': !f.slug.valid && f.slug.touched, 'is-valid': f.slug.valid && f.slug.touched\n                    }\">\n                <div class=\"invalid-feedback\" *ngIf=\"f.slug.hasError('required') && f.slug.touched\">User slug is\n                    required.</div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"role\">Role</label>\n                <ng-select *ngIf=\"roles\" labelForId=\"role\" [items]=\"roles\" bindLabel=\"name\" bindValue=\"tag\"\n                    [formControl]=\"f.role\" placeholder=\"Select user role\">\n                </ng-select>\n                <div class=\"invalid-feedback\" *ngIf=\"!f.role.valid && f.role.touched\" [ngStyle]=\"{display: 'block'}\">\n                    Please select a user\n                    role.</div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"website\">Website <span class=\"text-secondary\">(optional)</span></label>\n                <input type=\"website\" [formControl]=\"f.website\" id=\"website\" [ngClass]=\"{\n                        'form-control': true, 'is-invalid': !f.website.valid && f.website.touched, 'is-valid': f.website.valid && f.website.touched\n                    }\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description <span class=\"text-secondary\">(optional)</span></label>\n                <textarea rows=\"3\" type=\"description\" [formControl]=\"f.description\" id=\"description\" [ngClass]=\"{\n                        'form-control': true, 'is-invalid': !f.description.valid && f.description.touched, 'is-valid': f.description.valid && f.description.touched\n                    }\"></textarea>\n                <div class=\"invalid-feedback\" *ngIf=\"f.description.hasError('maxlength')\">Description must not be longer\n                    than 250 characters.</div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"password\">\n                    <ng-container *ngIf=\"isPassOptional; else pass\">New password <span\n                            class=\"text-secondary\">(optional)</span></ng-container>\n                    <ng-template #pass>Password</ng-template>\n                </label>\n                <input type=\"password\" [formControl]=\"f.password\" id=\"password\"\n                    [ngClass]=\"{\n                    'form-control': true, 'is-invalid': !f.password.valid && f.password.touched, 'is-valid': f.password.valid && f.password.touched}\">\n                <div class=\"invalid-feedback\" *ngIf=\"f.password.hasError('required') && f.password.touched\">User\n                    password is\n                    required.</div>\n                <div class=\"invalid-feedback\" *ngIf=\"f.password.hasError('minlength')\">Password\n                    must be longer than 8 characters.</div>\n            </div>\n\n            <div class=\"my-1 py-4 d-flex align-items-center justify-content-end\">\n\n                <button *ngIf=\"user?.exists\" (click)=\"onDelete()\" class=\"btn btn-outline-danger mr-2\"\n                    type=\"button\">Delete\n                </button>\n\n                <button *ngIf=\"success; else elseBtn\" class=\"btn btn-success\" type=\"submit\" (click)=\"false\"\n                    [ngStyle]=\"{pointerEvents: 'none'}\">\n                    <svg-icon icon=\"cloud-check\" class=\"mr-1\"></svg-icon>Success\n                </button>\n                <ng-template #elseBtn>\n                    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form.valid || form.pristine || loading\">\n                        Submit\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\n                            aria-hidden=\"true\"></span>\n                    </button>\n                </ng-template>\n            </div>\n\n\n        </form>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/users/users.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/users/users.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <h3 class=\"text-center my-5\">\n            Users\n        </h3>\n        <div class=\"d-flex align-items-center justify-content-end my-4\">\n            <button title=\"Add new user\" routerLink=\"/admin/user/new\"\n                class=\"btn btn-outline-primary d-inline-flex align-items-center mr-2\">Create\n                User</button>\n        </div>\n        <button title=\"Refresh\" type=\"button\" (click)=\"onRefresh()\" class=\"btn btn-link d-inline-flex align-items-center float-right my-1\"><svg-icon class=\"\" icon=\"refresh\"></svg-icon></button>\n        <div class=\"table-responsive shadow-sm\">\n            <table class=\"table table-hover m-0\">\n\n                <thead class=\"\">\n                    <tr>\n                        <th>ID</th>\n                        <th>Name</th>\n                        <th>Email</th>\n                        <th>Role</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    <tr *ngFor=\"let user of users\" title=\"{{ canUserEdit(user) ? 'Click to edit ' + user.name: '' }}\"\n                        [ngStyle]=\"{cursor: canUserEdit(user) ? 'pointer' : 'not-allowed'}\"\n                        [routerLink]=\"canUserEdit(user) ? ['/admin/user/' + user.id] : []\">\n                        <th role=\"row\">{{user.id}}</th>\n                        <td>{{user.name}} <span class=\"text-secondary\" *ngIf=\"user.id\n                                === currentUser.id\">(you)</span> </td>\n                        <td>{{user.email}}</td>\n                        <td><span class=\"badge badge-pill\"\n                                [ngClass]=\"{'badge-success': user.isSuperAdmin(), 'badge-info': user.isAdmin(), 'badge-dark': user.isWriter()}\">\n                                {{user.role | lowercase}}</span></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/_helpers/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/_helpers/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @admin/_services */ "./src/app/admin/_services/index.ts");


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            // check if route is restricted by role
            if (route.data.roles &&
                route.data.roles.indexOf(currentUser.role) === -1) {
                // role not authorized so redirect to dashboard
                this.router.navigate(["/admin"]);
                return false;
            }
            // logged in and authorized so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.authenticationService.logout();
        this.router.navigate(["/admin/login"], {
            queryParams: { returnUrl: state.url },
        });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] },
        { type: _admin_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
    ]; };
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/admin/_helpers/error.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/_helpers/error.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _admin_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @admin/_services */ "./src/app/admin/_services/index.ts");





/**
 * Catches errors and if the error is related
 * token expiry then refreshes the current user token.
 */
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
        // A variable to determine if the interceptor is currently
        // - refreshing a user token or not.
        this.isRefreshingToken = false;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            // Check if unauthorized error was thrown
            if (err.status === 401) {
                return _this.handleUnauthorized(request, next);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    /**
     * Adds jwt token a http request for authorization along
     * with Accept header.
     *
     * @param request Http request to add token to.
     * @param token Token to be added to the request.
     */
    ErrorInterceptor.prototype.addToken = function (request, token) {
        return request.clone({
            setHeaders: {
                Accept: "application/json",
                Authorization: "Bearer " + token
            }
        });
    };
    /**
     * Refreshes expired token and continues the requests.
     *
     * @param request Request in which error has occurred.
     * @param next Handler to call when done.
     */
    ErrorInterceptor.prototype.handleUnauthorized = function (request, next) {
        var _this = this;
        if (this.isRefreshingToken) {
            // If token refresh is in progress, we'll wait until it's refreshed
            return this.authenticationService.currentUser
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (user) { return user.token != null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
                return next.handle(_this.addToken(request, user.token));
            }));
        }
        else {
            this.isRefreshingToken = true;
            var expiredToken = this.authenticationService.userToken;
            // Set current user token as null so upcoming requests can wait until it's refreshed
            var newUser = this.authenticationService.currentUserValue;
            newUser.token = null;
            this.authenticationService.feedNewUserData(newUser);
            return this.authenticationService.refreshToken(expiredToken).pipe(
            // Merge refreshToken and next.handle returned observables
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
                if (!!user.token) {
                    _this.isRefreshingToken = false;
                    // Resubmit the request
                    return next.handle(_this.addToken(request, user.token)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err2) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err2.error.message || err2.statusText);
                    }));
                }
                else {
                    // Logout if new data was invalid
                    _this.authenticationService.logout();
                    location.reload();
                }
            }));
        }
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _admin_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_admin_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/admin/_helpers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/admin/_helpers/index.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/admin/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/admin/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/admin/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });






/***/ }),

/***/ "./src/app/admin/_helpers/jwt.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/_helpers/jwt.interceptor.ts ***!
  \***************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _admin_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @admin/_services */ "./src/app/admin/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");





var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService, http) {
        this.authenticationService = authenticationService;
        this.http = http;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var currentUser = this.authenticationService.currentUserValue;
        var isLoggedIn = currentUser && currentUser.token;
        var isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl);
        // add authorization header with jwt token if available
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Accept: "application/json",
                    Authorization: "Bearer " + currentUser.token,
                },
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _admin_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_admin_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/admin/_models/index.ts":
/*!****************************************!*\
  !*** ./src/app/admin/_models/index.ts ***!
  \****************************************/
/*! exports provided: User, Post, Tag, Role, Setting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/admin/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./src/app/admin/_models/post.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _post__WEBPACK_IMPORTED_MODULE_1__["Post"]; });

/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag */ "./src/app/admin/_models/tag.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _tag__WEBPACK_IMPORTED_MODULE_2__["Tag"]; });

/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role */ "./src/app/admin/_models/role.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return _role__WEBPACK_IMPORTED_MODULE_3__["Role"]; });

/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting */ "./src/app/admin/_models/setting.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Setting", function() { return _setting__WEBPACK_IMPORTED_MODULE_4__["Setting"]; });








/***/ }),

/***/ "./src/app/admin/_models/model.ts":
/*!****************************************!*\
  !*** ./src/app/admin/_models/model.ts ***!
  \****************************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
var Model = /** @class */ (function () {
    function Model(data) {
        if (data) {
            data.created_at ? (data.created_at = new Date(data.created_at)) : null;
            data.updated_at ? (data.updated_at = new Date(data.updated_at)) : null;
            data.published_at ? (data.published_at = new Date(data.published_at)) : null;
            Object.assign(this, data);
        }
    }
    Object.defineProperty(Model.prototype, "exists", {
        get: function () {
            return !!this.id;
        },
        enumerable: false,
        configurable: true
    });
    Model.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Model;
}());



/***/ }),

/***/ "./src/app/admin/_models/post.ts":
/*!***************************************!*\
  !*** ./src/app/admin/_models/post.ts ***!
  \***************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_home_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/home/_models */ "./src/app/home/_models/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/app/admin/_models/model.ts");



var Post = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Post, _super);
    function Post(data) {
        return _super.call(this, data) || this;
    }
    Post.prototype.isPage = function () {
        return this.type && this.type === _app_home_models__WEBPACK_IMPORTED_MODULE_1__["Type"].Page;
    };
    Post.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Post;
}(_model__WEBPACK_IMPORTED_MODULE_2__["Model"]));



/***/ }),

/***/ "./src/app/admin/_models/role.ts":
/*!***************************************!*\
  !*** ./src/app/admin/_models/role.ts ***!
  \***************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["SuperAdmin"] = "superadmin";
    Role["Admin"] = "admin";
    Role["Writer"] = "writer";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/admin/_models/setting.ts":
/*!******************************************!*\
  !*** ./src/app/admin/_models/setting.ts ***!
  \******************************************/
/*! exports provided: Setting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Setting", function() { return Setting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/app/admin/_models/model.ts");


var Setting = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Setting, _super);
    function Setting(data) {
        return _super.call(this, data) || this;
    }
    Setting.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Setting;
}(_model__WEBPACK_IMPORTED_MODULE_1__["Model"]));



/***/ }),

/***/ "./src/app/admin/_models/tag.ts":
/*!**************************************!*\
  !*** ./src/app/admin/_models/tag.ts ***!
  \**************************************/
/*! exports provided: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/app/admin/_models/model.ts");


var Tag = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Tag, _super);
    function Tag(data) {
        return _super.call(this, data) || this;
    }
    Tag.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Tag;
}(_model__WEBPACK_IMPORTED_MODULE_1__["Model"]));



/***/ }),

/***/ "./src/app/admin/_models/user.ts":
/*!***************************************!*\
  !*** ./src/app/admin/_models/user.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/app/admin/_models/model.ts");
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role */ "./src/app/admin/_models/role.ts");



var User = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(User, _super);
    function User(data) {
        return _super.call(this, data) || this;
    }
    User.prototype.isSuperAdmin = function () {
        return this.role === _role__WEBPACK_IMPORTED_MODULE_2__["Role"].SuperAdmin;
    };
    User.prototype.isAdmin = function () {
        return this.role === _role__WEBPACK_IMPORTED_MODULE_2__["Role"].Admin;
    };
    User.prototype.isWriter = function () {
        return this.role === _role__WEBPACK_IMPORTED_MODULE_2__["Role"].Writer;
    };
    User.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return User;
}(_model__WEBPACK_IMPORTED_MODULE_1__["Model"]));



/***/ }),

/***/ "./src/app/admin/_services/authentication.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/_services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _admin_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @admin/_models */ "./src/app/admin/_models/index.ts");







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        // Get stored user data from local storage and store it to Subject
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _admin_models__WEBPACK_IMPORTED_MODULE_6__["User"](JSON.parse(localStorage.getItem("currentUser"))));
        // Convert User Subject to Observable to make it subscribable
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        /**
         * Gets logged in user's data.
         *
         * @return Current user data as type User.
         */
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "userToken", {
        /**
         * Gets logged in User's authentication token.
         *
         * @return A string containing user token.
         */
        get: function () {
            return this.currentUserValue.token;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets the latest user data from API.
     *
     * @return Observable of type User.
     */
    AuthenticationService.prototype.me = function () {
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/auth/me", {
            Title: "Getting current user from API",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return new _admin_models__WEBPACK_IMPORTED_MODULE_6__["User"](res); }));
    };
    /**
     * Submits a http Post request with user credentials to the API
     * and stores the returned user data including JWT.
     *
     * @param email User email to login with.
     * @param password User password.
     *
     * @returns Observable of type User
     */
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/auth/login", { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return new _admin_models__WEBPACK_IMPORTED_MODULE_6__["User"](res); }))
            // Save the user data as a side effect.
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) { return _this.storeUserData(user); }));
    };
    /**
     * Submits a request to the API to get latest user data from currently stored JWT
     * and stores the new data to local storage.
     *
     * @return Latest user data.
     */
    AuthenticationService.prototype.updateUserData = function () {
        var _this = this;
        // Request user data using currently saved JWT.
        this.me()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            // Convert the response to type `User` and add token to it.
            var user = new _admin_models__WEBPACK_IMPORTED_MODULE_6__["User"](res);
            user.token = _this.userToken;
            return user;
        }), 
        // Save the latest user data as a side effect.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) { return _this.storeUserData(user); }))
            .subscribe();
        return this.currentUserValue;
    };
    /**
     * Submits provided user data to `currentUserSubject`.
     *
     * @param user User data to be feeded to subscribers of `currentUserSubject`.
     */
    AuthenticationService.prototype.feedNewUserData = function (user) {
        this.currentUserSubject.next(user);
    };
    /**
     * Refreshes the expired token and return latest user data.
     *
     * @param expiredToken The token that needs to be refreshed.
     *
     * @return An Observable of type User.
     */
    AuthenticationService.prototype.refreshToken = function (expiredToken) {
        var _this = this;
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/auth/refresh", {}, {
            // Add the expired token and other important headers.
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + expiredToken,
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return new _admin_models__WEBPACK_IMPORTED_MODULE_6__["User"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) { return _this.storeUserData(user); }));
    };
    /**
     * Stores provided user to local storage and feeds it
     * to the subscribers of `currentUserSubject`.
     *
     * @param user User data that needs to be stored.
     */
    AuthenticationService.prototype.storeUserData = function (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        this.currentUserSubject.next(user);
    };
    /**
     * Sends a request to APi to logout the current user and
     * deletes the saved user data from local storage.
     *
     * @return void
     */
    AuthenticationService.prototype.logout = function () {
        // Send a http request to invalidate current user token.
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/auth/logout", {})
            .subscribe();
        // Remove current user data from the local storage
        // - and feed null to subscribers of the Subject.
        localStorage.removeItem("currentUser");
        this.currentUserSubject.next(null);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/admin/_services/crud.ts":
/*!*****************************************!*\
  !*** ./src/app/admin/_services/crud.ts ***!
  \*****************************************/
/*! exports provided: CRUD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUD", function() { return CRUD; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



var CRUD = /** @class */ (function () {
    function CRUD(apiUrl, http, typeClass) {
        this.apiUrl = apiUrl;
        this.http = http;
        this.typeClass = typeClass;
    }
    Object.defineProperty(CRUD.prototype, "currentModels", {
        get: function () {
            return this.models$.value;
        },
        enumerable: false,
        configurable: true
    });
    CRUD.prototype.pull = function () {
        this.index().subscribe();
    };
    CRUD.prototype.index = function () {
        var _this = this;
        return this.http.get("" + this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            var newModels = [];
            res.forEach(function (val) {
                newModels.push(new _this.typeClass(val));
            });
            return newModels;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (models) {
            _this.models$.next(models);
        }));
    };
    CRUD.prototype.get = function (id) {
        var _this = this;
        return this.http
            .get(this.apiUrl + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return new _this.typeClass(res); }));
    };
    CRUD.prototype.create = function (data) {
        var _this = this;
        return this.http
            .post("" + this.apiUrl, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return new _this.typeClass(res); }));
    };
    CRUD.prototype.update = function (id, data) {
        var _this = this;
        return this.http.put(this.apiUrl + "/" + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return new _this.typeClass(res); }));
    };
    CRUD.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/" + id);
    };
    CRUD.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var existingModel = _this.getModel(id);
            if (!existingModel) {
                _this.get(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
                    reject();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
                })).subscribe(function (res) {
                    if (res) {
                        resolve(res);
                    }
                    else {
                        reject();
                    }
                });
            }
            else {
                resolve(existingModel);
            }
        });
    };
    CRUD.prototype.getModel = function (id) {
        if (this.currentModels.length == 0) {
            return null;
        }
        var filtered = null;
        var models = this.currentModels;
        models.forEach(function (model) {
            if (model.id === +id) {
                filtered = model;
            }
        });
        return filtered;
    };
    CRUD.prototype.pushModel = function (user, i) {
        var models = this.currentModels;
        if (i) {
            models[i] = user;
        }
        else {
            models.push(user);
        }
        this.models$.next(models);
    };
    CRUD.prototype.deleteModel = function (i) {
        var models = this.currentModels;
        models.splice(i, 1);
        this.models$.next(models);
    };
    CRUD.ctorParameters = function () { return [
        { type: String },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
        null
    ]; };
    return CRUD;
}());



/***/ }),

/***/ "./src/app/admin/_services/index.ts":
/*!******************************************!*\
  !*** ./src/app/admin/_services/index.ts ***!
  \******************************************/
/*! exports provided: TagsService, UsersService, AuthenticationService, PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/admin/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.service */ "./src/app/admin/_services/posts.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return _posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]; });

/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags.service */ "./src/app/admin/_services/tags.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return _tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]; });

/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.service */ "./src/app/admin/_services/users.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]; });







/***/ }),

/***/ "./src/app/admin/_services/posts.service.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/_services/posts.service.ts ***!
  \**************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_admin_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/admin/_models */ "./src/app/admin/_models/index.ts");
/* harmony import */ var _crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crud */ "./src/app/admin/_services/crud.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








var PostsService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PostsService, _super);
    function PostsService(httpClient) {
        var _this = _super.call(this, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/post", httpClient, _app_admin_models__WEBPACK_IMPORTED_MODULE_5__["Post"]) || this;
        _this.httpClient = httpClient;
        _this.models$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        return _this;
    }
    PostsService.prototype.getPage = function (id) {
        return this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/post/page/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return new _app_admin_models__WEBPACK_IMPORTED_MODULE_5__["Post"](res); }));
    };
    PostsService.prototype.update = function (id, data) {
        if (id === void 0) { id = null; }
        return this.httpClient
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/post/update", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return new _app_admin_models__WEBPACK_IMPORTED_MODULE_5__["Post"](res); }));
    };
    PostsService.prototype.delete = function (id) {
        return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/post/" + id);
    };
    PostsService.prototype.indexPaginated = function (type, published, currentPage, tableSize) {
        var params = {};
        params.type = type;
        if (published !== undefined) {
            params.published = Number(published);
        }
        params.page = currentPage;
        params.per_page = tableSize;
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/post", {
            params: params,
        });
    };
    PostsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PostsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostsService);
    return PostsService;
}(_crud__WEBPACK_IMPORTED_MODULE_6__["CRUD"]));



/***/ }),

/***/ "./src/app/admin/_services/tags.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/_services/tags.service.ts ***!
  \*************************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models */ "./src/app/admin/_models/index.ts");
/* harmony import */ var _crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crud */ "./src/app/admin/_services/crud.ts");







var TagsService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TagsService, _super);
    function TagsService(httpClient) {
        var _this = _super.call(this, _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/tag", httpClient, _models__WEBPACK_IMPORTED_MODULE_5__["Tag"]) || this;
        _this.httpClient = httpClient;
        _this.models$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        _this.pull();
        return _this;
    }
    TagsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    TagsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TagsService);
    return TagsService;
}(_crud__WEBPACK_IMPORTED_MODULE_6__["CRUD"]));



/***/ }),

/***/ "./src/app/admin/_services/users.service.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/_services/users.service.ts ***!
  \**************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models */ "./src/app/admin/_models/index.ts");
/* harmony import */ var _crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crud */ "./src/app/admin/_services/crud.ts");







var UsersService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UsersService, _super);
    function UsersService(httpClient) {
        var _this = _super.call(this, _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user", httpClient, _models__WEBPACK_IMPORTED_MODULE_5__["User"]) || this;
        _this.httpClient = httpClient;
        _this.models$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        _this.pull();
        return _this;
    }
    UsersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsersService);
    return UsersService;
}(_crud__WEBPACK_IMPORTED_MODULE_6__["CRUD"]));



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/admin/posts/posts.component.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers */ "./src/app/admin/_helpers/index.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts */ "./src/app/admin/posts/index.ts");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users */ "./src/app/admin/users/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_models */ "./src/app/admin/_models/index.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/admin/setting/setting.component.ts");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/admin/tags/tags.component.ts");












var routes = [
    {
        path: "editor/post",
        component: _posts__WEBPACK_IMPORTED_MODULE_7__["CreateComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { page: false }
    },
    {
        path: "editor/post/:id",
        component: _posts__WEBPACK_IMPORTED_MODULE_7__["EditComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { page: false }
    },
    {
        path: "editor/page",
        component: _posts__WEBPACK_IMPORTED_MODULE_7__["CreateComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { page: true }
    },
    {
        path: "editor/page/:id",
        component: _posts__WEBPACK_IMPORTED_MODULE_7__["EditComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { page: true }
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
    },
    {
        path: "",
        component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            {
                path: "post",
                component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"],
                data: { page: false }
            },
            {
                path: "page",
                component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"],
                data: { page: true }
            },
            {
                path: "tag",
                component: _tags_tags_component__WEBPACK_IMPORTED_MODULE_11__["TagsComponent"],
                data: { roles: [_models__WEBPACK_IMPORTED_MODULE_9__["Role"].SuperAdmin, _models__WEBPACK_IMPORTED_MODULE_9__["Role"].Admin] },
            },
            {
                path: "user",
                component: _users__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
                data: { roles: [_models__WEBPACK_IMPORTED_MODULE_9__["Role"].SuperAdmin, _models__WEBPACK_IMPORTED_MODULE_9__["Role"].Admin] },
            },
            {
                path: "user/new",
                component: _users__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"],
                data: { roles: [_models__WEBPACK_IMPORTED_MODULE_9__["Role"].SuperAdmin, _models__WEBPACK_IMPORTED_MODULE_9__["Role"].Admin] },
            },
            {
                path: "user/:id",
                component: _users__WEBPACK_IMPORTED_MODULE_8__["EditComponent"],
                data: { roles: [_models__WEBPACK_IMPORTED_MODULE_9__["Role"].SuperAdmin, _models__WEBPACK_IMPORTED_MODULE_9__["Role"].Admin, _models__WEBPACK_IMPORTED_MODULE_9__["Role"].Writer] },
            },
            {
                path: "settings",
                component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_10__["SettingComponent"],
                data: { roles: [_models__WEBPACK_IMPORTED_MODULE_9__["Role"].SuperAdmin, _models__WEBPACK_IMPORTED_MODULE_9__["Role"].Admin] },
            },
            {
                path: "**",
                redirectTo: "post",
                pathMatch: "full",
            },
        ],
    },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.w-700-centered {\n  max-width: 45rem;\n  margin: 0 auto;\n  padding: 0 0.625rem;\n}\n.bullet:before {\n  content: \"•\";\n  display: inline-block;\n  color: #747d85;\n  margin: 0 0.75rem;\n  opacity: 0.6;\n  font-weight: 300;\n}\n:host {\n  background-color: #fbfbfb;\n  max-width: 125rem;\n  display: block;\n  margin: 0 auto;\n  height: 100%;\n}\n.main {\n  display: flex;\n  height: 100%;\n}\n.main__sidebar {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 0 0 15.625rem;\n  background-color: #31373b;\n  z-index: 1030;\n}\n.main__sidebar--floating {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 15.625rem;\n  height: 100%;\n}\n.main__content {\n  overflow: auto;\n  flex: 1;\n  position: relative;\n}\n.main__sidebar-toggler {\n  z-index: 1030;\n  position: fixed;\n  top: 1rem;\n  left: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  outline: none;\n  border: none;\n  padding: 0.5rem;\n  margin: 0;\n  font-size: 1.25rem;\n  color: #31373b;\n}\n.sidebar-top-btns {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.625rem;\n}\n.sidebar-top-btns button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  outline: none;\n  border: none;\n  padding: 0.5rem;\n  margin: none;\n  font-size: 1.125rem;\n  color: #e2e7eb;\n}\n.sidebar-user {\n  font-size: 1rem;\n  color: #e2e7eb;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: auto 0.3125rem 1.5rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.3125rem;\n  cursor: pointer;\n}\n.sidebar-user:hover, .sidebar-user:focus, .sidebar-user:active {\n  background-color: rgba(82, 92, 100, 0.5);\n  outline: none;\n}\n.sidebar-user--active {\n  outline: none;\n  background-color: rgba(82, 92, 100, 0.5);\n}\n.sidebar-user__img-wrapper {\n  overflow: hidden;\n  margin-right: 0.625rem;\n}\n.sidebar-user__img {\n  border-radius: 100%;\n  height: 2.5rem;\n  width: 2.5rem;\n}\n.sidebar-user__meta {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1;\n}\n.sidebar-user__name {\n  font-size: 0.875rem;\n  margin: 0;\n  font-weight: 500;\n}\n.sidebar-user__email {\n  color: #cad1d6;\n  font-size: 0.75rem;\n}\n.sidebar-user__dropdown {\n  background-color: #fbfbfb;\n  border: 1px solid #e2e7eb;\n  border-radius: 0.3125rem;\n  margin: 0;\n  padding: 0.3125rem 0;\n  min-width: 15.625rem;\n  position: absolute;\n  bottom: 3.4375rem;\n  left: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.sidebar-user__dropdown-item {\n  margin: 0;\n  padding: 0;\n}\n.sidebar-user__dropdown-link {\n  display: flex;\n  align-items: center;\n  color: #525c64;\n  margin: 0.125rem 0.3125rem;\n  padding: 0.375rem 2rem;\n  border-radius: 0.3125rem;\n}\n.sidebar-user__dropdown-link:hover, .sidebar-user__dropdown-link:focus, .sidebar-user__dropdown-link:active {\n  outline: none;\n  background-color: #e2e7eb;\n  color: #31373b;\n}\n.sidebar-nav__list-toggler {\n  display: flex;\n  margin: 0;\n  padding: 0 0 0 0.5625rem;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  border: none;\n  color: #cad1d6;\n  font-size: 0.875rem;\n  position: absolute;\n  top: 0.8125rem;\n  left: 0.6875rem;\n}\n.sidebar-nav__list-toggler:hover, .sidebar-nav__list-toggler:focus, .sidebar-nav__list-toggler:active {\n  outline: none;\n  color: #e2e7eb;\n}\n.sidebar-nav__list {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  margin: 2rem 0 0;\n  padding: 0;\n  font-size: 1rem;\n}\n.sidebar-nav__list--inner {\n  margin: 0;\n}\n.sidebar-nav__item {\n  padding: 0;\n  margin: 0;\n  position: relative;\n  overflow: hidden;\n}\n.sidebar-nav__list-heading {\n  text-transform: uppercase;\n  padding: 0.625rem 1.25rem;\n  margin: 0;\n  color: #e2e7eb;\n  font-weight: 500;\n  font-size: 0.8125rem;\n}\n.sidebar-nav__link {\n  display: flex;\n  align-items: center;\n  color: #e2e7eb;\n  margin: 0.125rem 0.3125rem;\n  padding: 0.375rem 2rem;\n  border-radius: 0.3125rem;\n}\n.sidebar-nav__link:hover, .sidebar-nav__link:focus, .sidebar-nav__link:active {\n  outline: none;\n  background-color: rgba(82, 92, 100, 0.5);\n}\n.sidebar-nav__link--active {\n  font-weight: 500;\n  background-color: #525c64;\n}\n.sidebar-nav__link--active:hover, .sidebar-nav__link--active:focus, .sidebar-nav__link--active:active {\n  background-color: #525c64;\n}\n.sidebar-nav__link--icon-right {\n  position: relative;\n}\n.sidebar-nav__link--icon-right .icon-right {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0.625rem;\n}\n.sidebar-nav__list--inner .sidebar-nav__link {\n  padding: 0.375rem 0.625rem 0.375rem 3.5rem;\n}\n.sidebar-nav__list--inner .sidebar-nav__link:hover, .sidebar-nav__list--inner .sidebar-nav__link:focus, .sidebar-nav__list--inner .sidebar-nav__link:active {\n  outline: none;\n  background-color: rgba(82, 92, 100, 0.9);\n}\n.sidebar-nav__link-new-post {\n  font-size: 1.375rem;\n  color: #cad1d6;\n  padding: 0.3125rem;\n  position: absolute;\n  top: 0;\n  right: 0.5rem;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.sidebar-nav__link-new-post:hover, .sidebar-nav__link-new-post:focus, .sidebar-nav__link-new-post:active {\n  outline: none;\n  color: #e2e7eb;\n}\n.sidebar-nav__link-new-post span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 1.75rem;\n  width: 1.75rem;\n  border-radius: 100px;\n}\n.sidebar-nav__link-new-post:hover span {\n  background-color: #525c64;\n}\n.sidebar-nav__item:hover .sidebar-nav__link-new-post {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay93aWQtYmxvZy1mcm9udGVuZC93aWQtYmxvZy1mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvc3JjL2FwcC9zYXNzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL3N0ZGluIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9faG92ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBREVGO0FDRUU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjQ0NnQjtFREFoQixpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRENKO0FHWkE7RUFDRSx5QkRnQlE7RUNmUixpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBSGVGO0FHVEE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBSFlGO0FHVkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJEVGdCO0VDVWhCLGFBQUE7QUhZSjtBR1ZJO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FIWU47QUdSRTtFQUNFLGNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUhVSjtBR1BFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRHpDZ0I7QUZrRHBCO0FHTEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FIUUY7QUdQRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRGxFaUI7QUYyRXJCO0FHTEE7RUFDRSxlQUFBO0VBQ0EsY0R4RW1CO0VDeUVuQixrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBRUEsZUFBQTtBSE9GO0FJaEVFO0VEMkRFLHdDQUFBO0VBQ0EsYUFBQTtBSFFKO0FHTEU7RUFDRSxhQUFBO0VBQ0Esd0NBQUE7QUhPSjtBR0pFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBSE1KO0FHSkU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FITUo7QUdIRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsT0FBQTtBSEtKO0FHRkU7RUFDRSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBSElKO0FHRkU7RUFDRSxjRGxIaUI7RUNtSGpCLGtCQUFBO0FISUo7QUdERTtFQUNFLHlCRDVHTTtFQzZHTix5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FIR0o7QUdESTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FIR047QUdESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNEdkljO0VDd0lkLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBSEdOO0FJMUhFO0VEeUhNLGFBQUE7RUFDQSx5QkRsSmE7RUNtSmIsY0Q3SVk7QUZpSnBCO0FHbUJFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxjRGpMaUI7RUNrTGpCLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBSGhCSjtBSTlJRTtFRGlLSSxhQUFBO0VBQ0EsY0QxTGU7QUYwS3JCO0FHb0JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FIbEJKO0FHb0JJO0VBQ0UsU0FBQTtBSGxCTjtBR3NCRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBSHBCSjtBR3NCRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0RyTmlCO0VDc05qQixnQkFBQTtFQUNBLG9CQUFBO0FIcEJKO0FHdUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0Q3TmlCO0VDOE5qQiwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUhyQko7QUluTEU7RUQwTUksYUFBQTtFQUNBLHdDQUFBO0FIcEJOO0FHc0JJO0VBQ0UsZ0JBQUE7RUFDQSx5QkRsT2M7QUY4TXBCO0FJM0xFO0VEaU5NLHlCRHBPWTtBRmlOcEI7QUd1Qkk7RUFDRSxrQkFBQTtBSHJCTjtBR3NCTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBSHBCUjtBRzhCRTtFQUtFLDBDQUFBO0FIaENKO0FJMU1FO0VEdU9JLGFBQUE7RUFDQSx3Q0FBQTtBSDFCTjtBRytCRTtFQUNFLG1CQUFBO0VBQ0EsY0R0UWlCO0VDdVFqQixrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUg3Qko7QUl4TkU7RUR3UEksYUFBQTtFQUNBLGNEalJlO0FGb1ByQjtBR2dDSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBSDlCTjtBR2lDSTtFQUNFLHlCRHpSYztBRjBQcEI7QUdtQ0U7RUFDRSxVQUFBO0FIakNKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udy03MDAtY2VudGVyZWQge1xuICBtYXgtd2lkdGg6IDQ1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjYyNXJlbTtcbn1cblxuLmJ1bGxldDpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAolwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNzQ3ZDg1O1xuICBtYXJnaW46IDAgMC43NXJlbTtcbiAgb3BhY2l0eTogMC42O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG46aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gIG1heC13aWR0aDogMTI1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbl9fc2lkZWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4OiAwIDAgMTUuNjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzNzNiO1xuICB6LWluZGV4OiAxMDMwO1xufVxuLm1haW5fX3NpZGViYXItLWZsb2F0aW5nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNS42MjVyZW07XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluX19jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX19zaWRlYmFyLXRvZ2dsZXIge1xuICB6LWluZGV4OiAxMDMwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMXJlbTtcbiAgbGVmdDogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiAjMzEzNzNiO1xufVxuXG4uc2lkZWJhci10b3AtYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC42MjVyZW07XG59XG4uc2lkZWJhci10b3AtYnRucyBidXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW46IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGNvbG9yOiAjZTJlN2ViO1xufVxuXG4uc2lkZWJhci11c2VyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogI2UyZTdlYjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogYXV0byAwLjMxMjVyZW0gMS41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lkZWJhci11c2VyOmhvdmVyLCAuc2lkZWJhci11c2VyOmZvY3VzLCAuc2lkZWJhci11c2VyOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDkyLCAxMDAsIDAuNSk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2lkZWJhci11c2VyLS1hY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA5MiwgMTAwLCAwLjUpO1xufVxuLnNpZGViYXItdXNlcl9faW1nLXdyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xufVxuLnNpZGViYXItdXNlcl9faW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHdpZHRoOiAyLjVyZW07XG59XG4uc2lkZWJhci11c2VyX19tZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDE7XG59XG4uc2lkZWJhci11c2VyX19uYW1lIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnNpZGViYXItdXNlcl9fZW1haWwge1xuICBjb2xvcjogI2NhZDFkNjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuLnNpZGViYXItdXNlcl9fZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlN2ViO1xuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMC4zMTI1cmVtIDA7XG4gIG1pbi13aWR0aDogMTUuNjI1cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMy40Mzc1cmVtO1xuICBsZWZ0OiAwLjc1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5zaWRlYmFyLXVzZXJfX2Ryb3Bkb3duLWl0ZW0ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2lkZWJhci11c2VyX19kcm9wZG93bi1saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM1MjVjNjQ7XG4gIG1hcmdpbjogMC4xMjVyZW0gMC4zMTI1cmVtO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XG59XG4uc2lkZWJhci11c2VyX19kcm9wZG93bi1saW5rOmhvdmVyLCAuc2lkZWJhci11c2VyX19kcm9wZG93bi1saW5rOmZvY3VzLCAuc2lkZWJhci11c2VyX19kcm9wZG93bi1saW5rOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU3ZWI7XG4gIGNvbG9yOiAjMzEzNzNiO1xufVxuXG4uc2lkZWJhci1uYXZfX2xpc3QtdG9nZ2xlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMC41NjI1cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNjYWQxZDY7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjgxMjVyZW07XG4gIGxlZnQ6IDAuNjg3NXJlbTtcbn1cbi5zaWRlYmFyLW5hdl9fbGlzdC10b2dnbGVyOmhvdmVyLCAuc2lkZWJhci1uYXZfX2xpc3QtdG9nZ2xlcjpmb2N1cywgLnNpZGViYXItbmF2X19saXN0LXRvZ2dsZXI6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNlMmU3ZWI7XG59XG4uc2lkZWJhci1uYXZfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDJyZW0gMCAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uc2lkZWJhci1uYXZfX2xpc3QtLWlubmVyIHtcbiAgbWFyZ2luOiAwO1xufVxuLnNpZGViYXItbmF2X19pdGVtIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2lkZWJhci1uYXZfX2xpc3QtaGVhZGluZyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDAuNjI1cmVtIDEuMjVyZW07XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNlMmU3ZWI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xufVxuLnNpZGViYXItbmF2X19saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNlMmU3ZWI7XG4gIG1hcmdpbjogMC4xMjVyZW0gMC4zMTI1cmVtO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XG59XG4uc2lkZWJhci1uYXZfX2xpbms6aG92ZXIsIC5zaWRlYmFyLW5hdl9fbGluazpmb2N1cywgLnNpZGViYXItbmF2X19saW5rOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODIsIDkyLCAxMDAsIDAuNSk7XG59XG4uc2lkZWJhci1uYXZfX2xpbmstLWFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjVjNjQ7XG59XG4uc2lkZWJhci1uYXZfX2xpbmstLWFjdGl2ZTpob3ZlciwgLnNpZGViYXItbmF2X19saW5rLS1hY3RpdmU6Zm9jdXMsIC5zaWRlYmFyLW5hdl9fbGluay0tYWN0aXZlOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjVjNjQ7XG59XG4uc2lkZWJhci1uYXZfX2xpbmstLWljb24tcmlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2lkZWJhci1uYXZfX2xpbmstLWljb24tcmlnaHQgLmljb24tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHJpZ2h0OiAwLjYyNXJlbTtcbn1cbi5zaWRlYmFyLW5hdl9fbGlzdC0taW5uZXIgLnNpZGViYXItbmF2X19saW5rIHtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC42MjVyZW0gMC4zNzVyZW0gMy41cmVtO1xufVxuLnNpZGViYXItbmF2X19saXN0LS1pbm5lciAuc2lkZWJhci1uYXZfX2xpbms6aG92ZXIsIC5zaWRlYmFyLW5hdl9fbGlzdC0taW5uZXIgLnNpZGViYXItbmF2X19saW5rOmZvY3VzLCAuc2lkZWJhci1uYXZfX2xpc3QtLWlubmVyIC5zaWRlYmFyLW5hdl9fbGluazphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA5MiwgMTAwLCAwLjkpO1xufVxuLnNpZGViYXItbmF2X19saW5rLW5ldy1wb3N0IHtcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcbiAgY29sb3I6ICNjYWQxZDY7XG4gIHBhZGRpbmc6IDAuMzEyNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwLjVyZW07XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xufVxuLnNpZGViYXItbmF2X19saW5rLW5ldy1wb3N0OmhvdmVyLCAuc2lkZWJhci1uYXZfX2xpbmstbmV3LXBvc3Q6Zm9jdXMsIC5zaWRlYmFyLW5hdl9fbGluay1uZXctcG9zdDphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2UyZTdlYjtcbn1cbi5zaWRlYmFyLW5hdl9fbGluay1uZXctcG9zdCBzcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMS43NXJlbTtcbiAgd2lkdGg6IDEuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuLnNpZGViYXItbmF2X19saW5rLW5ldy1wb3N0OmhvdmVyIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1YzY0O1xufVxuLnNpZGViYXItbmF2X19pdGVtOmhvdmVyIC5zaWRlYmFyLW5hdl9fbGluay1uZXctcG9zdCB7XG4gIG9wYWNpdHk6IDE7XG59IiwiLnctNzAwLWNlbnRlcmVkIHtcbiAgbWF4LXdpZHRoOiBweFRvUmVtKDcyMCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIHB4VG9SZW0oMTApO1xufVxuXG4uYnVsbGV0IHtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwyMDIyXCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTE7XG4gICAgbWFyZ2luOiAwIHB4VG9SZW0oMTIpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG59XG4iLCIvLyBDT0xPUlNcblxuJGNvbG9yLXByaW1hcnk6ICMwOTg0ZTM7XG4kY29sb3ItcHJpbWFyeS1saWdodDogIzE4OTVmNjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMwODcxYzI7XG5cbiRjb2xvci1ncmV5LWxpZ2h0LTE6ICNmNGY3Zjg7XG4kY29sb3ItZ3JleS1saWdodC0yOiAjZTJlN2ViO1xuJGNvbG9yLWdyZXktbGlnaHQtMzogI2NhZDFkNjtcbiRjb2xvci1ncmV5LWxpZ2h0LTQ6ICNhY2IzYjg7XG5cbiRjb2xvci1ncmV5LWRhcmstMTogIzc0N2Q4NTtcbiRjb2xvci1ncmV5LWRhcmstMjogIzUyNWM2NDtcbiRjb2xvci1ncmV5LWRhcmstMzogIzMxMzczYjtcbiRjb2xvci1ncmV5LWRhcmstNDogIzFmMjMyNztcbiRjb2xvci1ncmV5LWRhcmstNTogIzExMTMxNjtcblxuJGNvbG9yLXRleHQtYmxhY2s6ICRjb2xvci1ncmV5LWRhcmstMztcbiRjb2xvci10ZXh0LXdoaXRlOiAkY29sb3ItZ3JleS1saWdodC0yO1xuJGJvZHktYmc6ICNmYmZiZmI7XG5cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1ibGFjazogIzAwMDtcblxuXG4iLCJAaW1wb3J0IFwic2Fzcy9pbmRleFwiO1xuXG46aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xuICBtYXgtd2lkdGg6IHB4VG9SZW0oMjAwMCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgJl9fc2lkZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGZsZXg6IDAgMCBweFRvUmVtKDI1MCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktZGFyay0zO1xuICAgIHotaW5kZXg6IDEwMzA7XG5cbiAgICAmLS1mbG9hdGluZyB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IHB4VG9SZW0oMjUwKTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBmbGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gICZfX3NpZGViYXItdG9nZ2xlciB7XG4gICAgei1pbmRleDogMTAzMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiBweFRvUmVtKDE2KTtcbiAgICBsZWZ0OiBweFRvUmVtKDE2KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogcHhUb1JlbSg4KTtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDIwKTtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0zO1xuICB9XG59XG5cbi5zaWRlYmFyLXRvcC1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiBweFRvUmVtKDEwKTtcbiAgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogcHhUb1JlbSg4KTtcbiAgICBtYXJnaW46IG5vbmU7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDE4KTtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktbGlnaHQtMjtcbiAgfVxufVxuXG4uc2lkZWJhci11c2VyIHtcbiAgZm9udC1zaXplOiBweFRvUmVtKDE2KTtcbiAgY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0LTI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IGF1dG8gcHhUb1JlbSg1KSBweFRvUmVtKDI0KTtcbiAgcGFkZGluZzogcHhUb1JlbSg4KSBweFRvUmVtKDEyKTtcbiAgYm9yZGVyLXJhZGl1czogcHhUb1JlbSg1KTtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIEBpbmNsdWRlIGhvdmVyLWZvY3VzLWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItZ3JleS1kYXJrLTIsIDAuNSk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICYtLWFjdGl2ZSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1ncmV5LWRhcmstMiwgMC41KTtcbiAgfVxuXG4gICZfX2ltZy13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1yaWdodDogcHhUb1JlbSgxMCk7XG4gIH1cbiAgJl9faW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGhlaWdodDogcHhUb1JlbSg0MCk7XG4gICAgd2lkdGg6IHB4VG9SZW0oNDApO1xuICB9XG5cbiAgJl9fbWV0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAmX19uYW1lIHtcbiAgICBmb250LXNpemU6IHB4VG9SZW0oMTQpO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gICZfX2VtYWlsIHtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktbGlnaHQtMztcbiAgICBmb250LXNpemU6IHB4VG9SZW0oMTIpO1xuICB9XG5cbiAgJl9fZHJvcGRvd24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ncmV5LWxpZ2h0LTI7XG4gICAgYm9yZGVyLXJhZGl1czogcHhUb1JlbSg1KTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogcHhUb1JlbSg1KSAwO1xuICAgIG1pbi13aWR0aDogcHhUb1JlbSgyNTApO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IHB4VG9SZW0oNTUpO1xuICAgIGxlZnQ6IHB4VG9SZW0oMTIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICYtaXRlbSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAmLWxpbmsge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0yO1xuICAgICAgbWFyZ2luOiBweFRvUmVtKDIpIHB4VG9SZW0oNSk7XG4gICAgICBwYWRkaW5nOiBweFRvUmVtKDYpIHB4VG9SZW0oMzIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogcHhUb1JlbSg1KTtcbiAgICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzLWFjdGl2ZSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0LTI7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTM7XG4gICAgICB9XG5cbiAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLy8gY29sb3I6ICRjb2xvci1ncmV5LWRhcmstMjtcbiAgICAgIC8vIG1hcmdpbjogcHhUb1JlbSgyKSBweFRvUmVtKDUpO1xuICAgICAgLy8gcGFkZGluZzogcHhUb1JlbSg2KSBweFRvUmVtKDMyKTtcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6IHB4VG9SZW0oNSk7XG4gICAgICAvLyB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgIC8vIEBpbmNsdWRlIGhvdmVyLWZvY3VzLWFjdGl2ZSB7XG4gICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0LTI7XG4gICAgICAvLyAgIHBhZGRpbmctbGVmdDogcHhUb1JlbSgxMik7XG4gICAgICAvLyAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTM7XG4gICAgICAvLyB9XG4gICAgICAvLyBzdmctaWNvbiB7XG4gICAgICAvLyAgIG1hcmdpbi1yaWdodDogcHhUb1JlbSg1KTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cbn1cblxuLnNpZGViYXItbmF2IHtcbiAgJl9fbGlzdC10b2dnbGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDAgMCBweFRvUmVtKDkpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodC0zO1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxNCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogcHhUb1JlbSgxMyk7XG4gICAgbGVmdDogcHhUb1JlbSgxMSk7XG5cbiAgICBAaW5jbHVkZSBob3Zlci1mb2N1cy1hY3RpdmUge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodC0yO1xuICAgIH1cbiAgfVxuXG4gICZfX2xpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogcHhUb1JlbSgzMikgMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDE2KTtcblxuICAgICYtLWlubmVyIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAmX19pdGVtIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAmX19saXN0LWhlYWRpbmcge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogcHhUb1JlbSgxMCkgcHhUb1JlbSgyMCk7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodC0yO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDEzKTtcbiAgfVxuXG4gICZfX2xpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktbGlnaHQtMjtcbiAgICBtYXJnaW46IHB4VG9SZW0oMikgcHhUb1JlbSg1KTtcbiAgICBwYWRkaW5nOiBweFRvUmVtKDYpIHB4VG9SZW0oMzIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHB4VG9SZW0oNSk7XG4gICAgQGluY2x1ZGUgaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1ncmV5LWRhcmstMiwgMC41KTtcbiAgICB9XG4gICAgJi0tYWN0aXZlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTI7XG4gICAgICBAaW5jbHVkZSBob3Zlci1mb2N1cy1hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi0taWNvbi1yaWdodCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAuaWNvbi1yaWdodCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgcmlnaHQ6IHB4VG9SZW0oMTApO1xuICAgICAgICAvLyBvcGFjaXR5OiAwO1xuICAgICAgICAvLyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgICAgIH1cbiAgICAgIC8vICY6aG92ZXIgLmljb24tcmlnaHQge1xuICAgICAgLy8gICBvcGFjaXR5OiAxO1xuICAgICAgLy8gfVxuICAgIH1cbiAgfVxuXG4gICZfX2xpc3QtLWlubmVyICZfX2xpbmsge1xuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzLWFjdGl2ZSB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItZ3JleS1kYXJrLTIsIDAuOSk7XG4gICAgfVxuICAgIHBhZGRpbmc6IHB4VG9SZW0oNikgcHhUb1JlbSgxMCkgcHhUb1JlbSg2KSBweFRvUmVtKDU2KTtcbiAgfVxuXG4gICZfX2xpbmstbmV3LXBvc3Qge1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgyMik7XG4gICAgY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0LTM7XG4gICAgcGFkZGluZzogcHhUb1JlbSg1KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiBweFRvUmVtKDgpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG5cbiAgICBAaW5jbHVkZSBob3Zlci1mb2N1cy1hY3RpdmUge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodC0yO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogcHhUb1JlbSgyOCk7XG4gICAgICB3aWR0aDogcHhUb1JlbSgyOCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHNwYW4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktZGFyay0yO1xuICAgIH1cbiAgfVxuXG4gICZfX2l0ZW06aG92ZXIgJl9fbGluay1uZXctcG9zdCB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIiwiLy8gSG92ZXIgbWl4aW4gYW5kIGAkZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5YCBhcmUgZGVwcmVjYXRlZC5cbi8vXG4vLyBPcmlnaW5hbGx5IGFkZGVkIGR1cmluZyBvdXIgYWxwaGFzIGFuZCBtYWludGFpbmVkIGR1cmluZyBiZXRhcywgdGhpcyBtaXhpbiB3YXNcbi8vIGRlc2lnbmVkIHRvIHByZXZlbnQgYDpob3ZlcmAgc3RpY2tpbmVzcyBvbiBpT1MtYW4gaXNzdWUgd2hlcmUgaG92ZXIgc3R5bGVzXG4vLyB3b3VsZCBwZXJzaXN0IGFmdGVyIGluaXRpYWwgdG91Y2guXG4vL1xuLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIHdlJ3ZlIGtlcHQgdGhlc2UgbWl4aW5zIGFuZCB1cGRhdGVkIHRoZW0gdG9cbi8vIGFsd2F5cyByZXR1cm4gdGhlaXIgcmVndWxhciBwc2V1ZG8tY2xhc3NlcyBpbnN0ZWFkIG9mIGEgc2hpbW1lZCBtZWRpYSBxdWVyeS5cbi8vXG4vLyBJc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNTE5NVxuXG5AbWl4aW4gaG92ZXIoKSB7XG4gICY6aG92ZXIgeyBAY29udGVudDsgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMoKSB7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBwbGFpbi1ob3Zlci1mb2N1cygpIHtcbiAgJixcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGhvdmVyLWZvY3VzLWFjdGl2ZSgpIHtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services */ "./src/app/admin/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, auth) {
        var _this = this;
        this.router = router;
        this.auth = auth;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.sideNavFloating = false;
        this.auth.currentUser
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$))
            .subscribe(function (x) { return (_this.currentUser = x); });
    }
    AdminComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 768) {
            this.sideNavVisible = false;
            this.sideNavFloating = true;
        }
        else {
            this.sideNavVisible = true;
            this.sideNavFloating = false;
        }
    };
    AdminComponent.prototype.toggleSideNav = function () {
        this.sideNavVisible = !this.sideNavVisible;
    };
    AdminComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(["/admin/login"]);
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 768) {
            this.sideNavVisible = false;
            this.sideNavFloating = true;
        }
        else {
            this.sideNavVisible = true;
            this.sideNavFloating = false;
        }
    };
    AdminComponent.prototype.ngAfterViewInit = function () {
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    };
    AdminComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], AdminComponent.prototype, "onResize", null);
    AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-admin",
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])("slideInOut", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(":enter", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: "*" })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: 0 }))]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])("fadeInOut", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(":enter", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }))]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])("slideInOutFromLeft", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(":enter", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                            opacity: "0",
                            transform: "translateX(-100%)",
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                            opacity: 1,
                            transform: "translateX(0)",
                        })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(":leave", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: "translateX(-100%)" })),
                    ]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers/auth.guard */ "./src/app/admin/_helpers/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_helpers */ "./src/app/admin/_helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services */ "./src/app/admin/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/fesm5/tinymce-tinymce-angular.js");
/* harmony import */ var _app_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/shared-module */ "./src/app/shared-module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/users.service */ "./src/app/admin/_services/users.service.ts");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./posts */ "./src/app/admin/posts/index.ts");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./users */ "./src/app/admin/users/index.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/admin/setting/setting.component.ts");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/admin/tags/tags.component.ts");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_services/tags.service */ "./src/app/admin/_services/tags.service.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/admin/pages/pages.component.ts");






















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _posts__WEBPACK_IMPORTED_MODULE_16__["PostsComponent"],
                _posts__WEBPACK_IMPORTED_MODULE_16__["CreateComponent"],
                _posts__WEBPACK_IMPORTED_MODULE_16__["EditComponent"],
                _posts__WEBPACK_IMPORTED_MODULE_16__["EditorComponent"],
                _users__WEBPACK_IMPORTED_MODULE_17__["UsersComponent"],
                _users__WEBPACK_IMPORTED_MODULE_17__["EditComponent"],
                _users__WEBPACK_IMPORTED_MODULE_17__["CreateComponent"],
                _users__WEBPACK_IMPORTED_MODULE_17__["FormComponent"],
                _setting_setting_component__WEBPACK_IMPORTED_MODULE_18__["SettingComponent"],
                _tags_tags_component__WEBPACK_IMPORTED_MODULE_19__["TagsComponent"],
                _pages_pages_component__WEBPACK_IMPORTED_MODULE_21__["PagesComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"],
                _app_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__["EditorModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"],
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["PostsService"],
                _services_users_service__WEBPACK_IMPORTED_MODULE_15__["UsersService"],
                _services_tags_service__WEBPACK_IMPORTED_MODULE_20__["TagsService"],
                _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_8__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
                { provide: _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_11__["TINYMCE_SCRIPT_SRC"], useValue: "tinymce/tinymce.min.js" },
            ],
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @admin/_services */ "./src/app/admin/_services/index.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = "";
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(["admin"]);
        }
    }
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        // get return url from route parameters or default to '/admin'
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/admin";
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loginSubscription = this.authenticationService
            .login(this.f.email.value, this.f.password.value)
            .subscribe(function (data) {
            _this.router.navigateByUrl(_this.returnUrl);
        }, function (error) {
            console.log(error);
            _this.error = error;
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _admin_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/login/login.component.html") }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _admin_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/pages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/pages/pages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/pages/pages.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/pages/pages.component.ts ***!
  \************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/admin/pages/pages.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/admin/posts/create/create.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/posts/create/create.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Bvc3RzL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/posts/create/create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/posts/create/create.component.ts ***!
  \********************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_admin_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/admin/_services */ "./src/app/admin/_services/index.ts");
/* harmony import */ var _app_home_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/home/_models */ "./src/app/home/_models/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var CreateComponent = /** @class */ (function () {
    function CreateComponent(auth, posts, tagsService, usersService, router, route) {
        var _this = this;
        this.auth = auth;
        this.posts = posts;
        this.tagsService = tagsService;
        this.usersService = usersService;
        this.router = router;
        this.route = route;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.postStatus = "Unsaved";
        this.type = _app_home_models__WEBPACK_IMPORTED_MODULE_4__["Type"].Post;
        this.auth.currentUser
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$))
            .subscribe(function (user) { return (_this.user = user); });
        this.tagsService.models$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$))
            .subscribe(function (tags) {
            _this.tags = tags;
        });
        this.usersService.models$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$))
            .subscribe(function (users) {
            _this.allUsers = users;
        });
    }
    CreateComponent.prototype.onFormChange = function (data) {
        var _this = this;
        this.postStatus = "Creating...";
        this.posts.create(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            _this.errors = err;
            _this.postStatus = "Error";
            return err;
        }))
            .subscribe(function (post) {
            if (post.exists) {
                _this.tagsService.pull();
                var url = _this.isPage() ? "admin/editor/page/" + post.id : "admin/editor/post/" + post.id;
                _this.router.navigate([url]);
            }
        });
    };
    CreateComponent.prototype.isPage = function () {
        return this.type === _app_home_models__WEBPACK_IMPORTED_MODULE_4__["Type"].Page;
    };
    CreateComponent.prototype.onCreateTag = function (tag) {
        this.tagsService.pushModel(tag);
    };
    CreateComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.data.page) {
            this.type = _app_home_models__WEBPACK_IMPORTED_MODULE_4__["Type"].Page;
        }
    };
    CreateComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    };
    CreateComponent.ctorParameters = function () { return [
        { type: _app_admin_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _app_admin_services__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
        { type: _app_admin_services__WEBPACK_IMPORTED_MODULE_3__["TagsService"] },
        { type: _app_admin_services__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-create",
            template: __webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/posts/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/admin/posts/create/create.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_admin_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _app_admin_services__WEBPACK_IMPORTED_MODULE_3__["PostsService"],
            _app_admin_services__WEBPACK_IMPORTED_MODULE_3__["TagsService"],
            _app_admin_services__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/posts/edit/edit.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/posts/edit/edit.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Bvc3RzL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/posts/edit/edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/posts/edit/edit.component.ts ***!
  \****************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_admin_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/admin/_services */ "./src/app/admin/_services/index.ts");
/* harmony import */ var _app_home_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/home/_models */ "./src/app/home/_models/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var EditComponent = /** @class */ (function () {
    function EditComponent(auth, posts, tagsService, usersService, route, router) {
        var _this = this;
        this.auth = auth;
        this.posts = posts;
        this.tagsService = tagsService;
        this.usersService = usersService;
        this.route = route;
        this.router = router;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.postStatus = "";
        this.type = _app_home_models__WEBPACK_IMPORTED_MODULE_4__["Type"].Post;
        this.successMessages = [];
        this.auth.currentUser
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$))
            .subscribe(function (user) { return (_this.user = user); });
        this.tagsService.models$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$))
            .subscribe(function (tags) {
            _this.tags = tags;
        });
        this.usersService.models$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$))
            .subscribe(function (users) {
            _this.allUsers = users;
        });
    }
    EditComponent.prototype.onFormChange = function (data) {
        var _this = this;
        this.postStatus = "Saving...";
        this.posts.update(null, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            _this.errors = err;
            _this.postStatus = "Error";
            return err;
        }))
            .subscribe(function (post) {
            if (post.exists) {
                if (post.published) {
                    _this.successMessages.push('Post was successfully published.');
                }
                _this.post = post;
                _this.tagsService.pull();
                _this.updatePostStatus();
            }
        });
    };
    EditComponent.prototype.onCreateTag = function (tag) {
        this.tagsService.pushModel(tag);
    };
    EditComponent.prototype.onDelete = function () {
        var _this = this;
        if (this.post.exists) {
            this.postStatus = "Deleting...";
            this.posts.delete(this.post.id).subscribe(function (res) {
                if (res === true) {
                    _this.router.navigate(["admin/posts"]);
                }
            });
        }
    };
    EditComponent.prototype.updatePostStatus = function () {
        this.postStatus = this.post.published ? "Published" : "Draft";
    };
    EditComponent.prototype.isPage = function () {
        return this.type === _app_home_models__WEBPACK_IMPORTED_MODULE_4__["Type"].Page;
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.data.page) {
            this.type = _app_home_models__WEBPACK_IMPORTED_MODULE_4__["Type"].Page;
        }
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$))
            .subscribe(function (params) {
            if (!!params.id) {
                if (_this.isPage()) {
                    _this.posts.getPage(params.id).subscribe(function (post) {
                        if (post.exists) {
                            _this.post = post;
                            _this.updatePostStatus();
                        }
                    });
                }
                else {
                    _this.posts.get(params.id).subscribe(function (post) {
                        if (post.exists) {
                            _this.post = post;
                            _this.updatePostStatus();
                        }
                    });
                }
            }
        });
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    };
    EditComponent.ctorParameters = function () { return [
        { type: _app_admin_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _app_admin_services__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
        { type: _app_admin_services__WEBPACK_IMPORTED_MODULE_3__["TagsService"] },
        { type: _app_admin_services__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-edit",
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/posts/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/admin/posts/edit/edit.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_admin_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _app_admin_services__WEBPACK_IMPORTED_MODULE_3__["PostsService"],
            _app_admin_services__WEBPACK_IMPORTED_MODULE_3__["TagsService"],
            _app_admin_services__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/admin/posts/editor/editor.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/posts/editor/editor.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.w-700-centered {\n  max-width: 45rem;\n  margin: 0 auto;\n  padding: 0 0.625rem;\n}\n.bullet:before {\n  content: \"•\";\n  display: inline-block;\n  color: #747d85;\n  margin: 0 0.75rem;\n  opacity: 0.6;\n  font-weight: 300;\n}\n:host {\n  display: block;\n  min-height: 100vh;\n  background-color: #f4f7f8;\n}\n:host ::ng-deep {\n  /**\n   * okaidia theme for JavaScript, CSS and HTML\n   * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n   * @author ocodia\n   */\n  /* Code blocks */\n  /* Inline code */\n}\n:host ::ng-deep code[class*=language-],\n:host ::ng-deep pre[class*=language-] {\n  color: #f8f8f2;\n  background: none;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n  font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  hyphens: none;\n}\n:host ::ng-deep pre[class*=language-] {\n  padding: 1em;\n  margin: 0.5em 0;\n  overflow: auto;\n  border-radius: 0.3em;\n}\n:host ::ng-deep :not(pre) > code[class*=language-],\n:host ::ng-deep pre[class*=language-] {\n  background: #272822;\n}\n:host ::ng-deep :not(pre) > code[class*=language-] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n:host ::ng-deep .token.comment,\n:host ::ng-deep .token.prolog,\n:host ::ng-deep .token.doctype,\n:host ::ng-deep .token.cdata {\n  color: #8292a2;\n}\n:host ::ng-deep .token.punctuation {\n  color: #f8f8f2;\n}\n:host ::ng-deep .token.namespace {\n  opacity: 0.7;\n}\n:host ::ng-deep .token.property,\n:host ::ng-deep .token.tag,\n:host ::ng-deep .token.constant,\n:host ::ng-deep .token.symbol,\n:host ::ng-deep .token.deleted {\n  color: #f92672;\n}\n:host ::ng-deep .token.boolean,\n:host ::ng-deep .token.number {\n  color: #ae81ff;\n}\n:host ::ng-deep .token.selector,\n:host ::ng-deep .token.attr-name,\n:host ::ng-deep .token.string,\n:host ::ng-deep .token.char,\n:host ::ng-deep .token.builtin,\n:host ::ng-deep .token.inserted {\n  color: #a6e22e;\n}\n:host ::ng-deep .token.operator,\n:host ::ng-deep .token.entity,\n:host ::ng-deep .token.url,\n:host ::ng-deep .language-css .token.string,\n:host ::ng-deep .style .token.string,\n:host ::ng-deep .token.variable {\n  color: #f8f8f2;\n}\n:host ::ng-deep .token.atrule,\n:host ::ng-deep .token.attr-value,\n:host ::ng-deep .token.function,\n:host ::ng-deep .token.class-name {\n  color: #e6db74;\n}\n:host ::ng-deep .token.keyword {\n  color: #66d9ef;\n}\n:host ::ng-deep .token.regex,\n:host ::ng-deep .token.important {\n  color: #fd971f;\n}\n:host ::ng-deep .token.important,\n:host ::ng-deep .token.bold {\n  font-weight: bold;\n}\n:host ::ng-deep .token.italic {\n  font-style: italic;\n}\n:host ::ng-deep .token.entity {\n  cursor: help;\n}\n:host ::ng-deep editor .mce-content-body [contentEditable=false][data-mce-selected] {\n  outline: none;\n  cursor: pointer;\n}\n:host ::ng-deep editor pre[class*=language-] {\n  cursor: pointer;\n}\n:host ::ng-deep editor #tinymce-editor:focus {\n  outline: none;\n}\n:host ::ng-deep editor {\n  color: #1f2327;\n}\n:host ::ng-deep editor a {\n  color: #0984e3;\n  cursor: pointer;\n}\n:host ::ng-deep editor a:hover {\n  text-decoration: underline;\n  color: #0871c2;\n}\n:host ::ng-deep editor p {\n  font-size: 1.25rem;\n  font-family: \"Lora\", serif;\n  line-height: 1.6;\n  padding: 0;\n  margin: 0 0 2rem;\n}\n:host ::ng-deep editor ul,\n:host ::ng-deep editor ol {\n  margin: 0 0 1.875rem;\n  padding: 0 1.875rem 0 1.625rem;\n}\n:host ::ng-deep editor ul li,\n:host ::ng-deep editor ol li {\n  margin: 0.625rem 0;\n  padding: 0 0 0 0.375rem;\n  font-size: 1.25rem;\n  font-family: \"Lora\", serif;\n  line-height: 1.6;\n}\n:host ::ng-deep editor ol {\n  list-style: decimal;\n}\n:host ::ng-deep editor ul {\n  list-style: disc;\n}\n:host ::ng-deep editor blockquote {\n  font-size: 1.25rem;\n  font-family: \"Lora\", serif;\n  line-height: 1.6;\n  margin: 0 0 1.875rem;\n  padding: 0 1.5rem;\n  border-left: 0.1875rem solid #0984e3;\n}\n:host ::ng-deep editor blockquote p {\n  margin: 0;\n}\n:host ::ng-deep editor img {\n  max-width: 100%;\n  height: auto;\n  margin: 2.625rem 0;\n}\n:host ::ng-deep editor h2 {\n  line-height: 1.25;\n  color: #1f2327;\n  font-size: 2rem;\n  padding: 0;\n  margin: 1.6rem 0 0.8rem;\n}\n:host ::ng-deep editor h3 {\n  line-height: 1.25;\n  color: #1f2327;\n  font-size: 1.5625rem;\n  padding: 0;\n  margin: 0.78125rem 0 0.3125rem;\n}\n:host ::ng-deep .ng-select .ng-select-container {\n  background-color: #fff;\n  border: 0.03125rem solid #e2e7eb;\n}\n:host ::ng-deep .ng-select .ng-dropdown-panel {\n  background-color: #fff;\n  border: 0.03125rem solid #e2e7eb;\n}\n.post {\n  display: flex;\n}\n.post__title {\n  margin: 0 0 3rem;\n}\n.post__title-input {\n  color: #31373b;\n  width: 100%;\n  border: none;\n  background: transparent;\n  font-size: 3rem;\n  font-weight: 500;\n  background-attachment: scroll;\n}\n.post__title-input:hover, .post__title-input:focus, .post__title-input:active {\n  outline: none;\n}\nnav#editor-top-nav {\n  background-color: #fff;\n  box-shadow: 0 0.25rem 0.75rem rgba(17, 19, 22, 0.04);\n  flex-wrap: wrap;\n  z-index: 1030;\n}\nnav#editor-top-nav .nav-link {\n  height: 100%;\n  padding: 0.5rem 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n}\nnav#editor-top-nav .nav-link, nav#editor-top-nav .nav-link:hover, nav#editor-top-nav .nav-link:focus {\n  color: #0984e3;\n}\nnav#editor-top-nav .nav-link svg-icon {\n  font-size: 1rem;\n}\nnav#editor-top-nav .posts-link {\n  border-right: 1px solid #cad1d6;\n}\nnav#editor-top-nav .navbar-text {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  color: #747d85;\n}\nnav#editor-top-nav .submit-toggle {\n  position: relative;\n}\nnav#editor-top-nav .submit-toggle__content {\n  background-color: #fbfbfb;\n  position: absolute;\n  top: 2.625rem;\n  right: 0;\n  transform: translateX(0.5rem);\n  padding: 1rem;\n  border: 1px solid #e2e7eb;\n  border-radius: 0.25rem;\n  overflow: hidden;\n  min-width: 11.875rem;\n}\nnav#editor-top-nav .settings-btn {\n  font-size: 16px;\n}\nnav#editor-top-nav .settings-btn, nav#editor-top-nav .settings-btn:hover, nav#editor-top-nav .settings-btn:focus {\n  color: #747d85;\n}\nnav#editor-top-nav .settings-btn svg-icon {\n  transition: transform 0.2s;\n}\nnav#editor-top-nav .settings-btn:hover svg-icon, nav#editor-top-nav .settings-btn:active svg-icon, nav#editor-top-nav .settings-btn:focus svg-icon {\n  transform: rotate(90deg);\n}\n.settings-btn {\n  padding: 1rem 1rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: #0984e3;\n  cursor: pointer;\n  z-index: 1031;\n}\n.settings-btn:hover, .settings-btn:focus, .settings-btn:active {\n  color: #0871c2;\n}\n.settings-btn__icon {\n  position: relative;\n}\n.settings-btn__icon, .settings-btn__icon::before, .settings-btn__icon::after {\n  display: inline-flex;\n  align-items: center;\n  content: \"\";\n  width: 1.25rem;\n  height: 0.0625rem;\n  background-color: #0984e3;\n  visibility: visible;\n}\n.settings-btn__icon::before {\n  position: absolute;\n  right: 0;\n  bottom: 0.375rem;\n}\n.settings-btn__icon::after {\n  position: absolute;\n  right: 0;\n  top: 0.375rem;\n}\n.settings-btn__icon--cross {\n  visibility: hidden;\n}\n.settings-btn__icon--cross::before {\n  bottom: 0;\n  transform: rotate(-45deg);\n}\n.settings-btn__icon--cross::after {\n  top: 0;\n  transform: rotate(45deg);\n}\n.sidebar {\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 1030;\n  max-width: 21.875rem;\n  height: 100%;\n  box-shadow: 0 0 0.5rem rgba(17, 19, 22, 0.04);\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: column;\n  background-color: #f4f7f8;\n  color: #31373b;\n  border-left: 0.03125rem solid #e2e7eb;\n}\n.sidebar__top-intro {\n  padding: 1rem 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.sidebar__top-intro-heading {\n  font-size: 1.125rem;\n  margin: 0;\n}\n.sidebar__close-button {\n  padding: 0;\n  font-size: 0.8125rem;\n}\n.sidebar__form {\n  padding: 0 1.5rem;\n  margin-top: 1rem;\n}\n.sidebar__form input:not([type=file]),\n.sidebar__form textarea {\n  background-color: #fff;\n  border: 0.03125rem solid #e2e7eb;\n}\n.sidebar__delete-post {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 1rem 1.5rem;\n  margin-top: auto;\n  padding-top: 2rem;\n}\n.sidebar__delete-post-btn {\n  display: inline-flex;\n  align-items: center;\n}\n.sidebar__delete-post-btn svg-icon {\n  margin-right: 0.3125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcG9zdHMvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL3NyYy9hcHAvYWRtaW4vcG9zdHMvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL3NyYy9hcHAvc2Fzcy9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay93aWQtYmxvZy1mcm9udGVuZC93aWQtYmxvZy1mcm9udGVuZC9zdGRpbiIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL25vZGVfbW9kdWxlcy9wcmlzbWpzL3RoZW1lcy9wcmlzbS1va2FpZGlhLmNzcyIsIi9ob21lL3J1bm5lci93b3JrL3dpZC1ibG9nLWZyb250ZW5kL3dpZC1ibG9nLWZyb250ZW5kL3NyYy9hcHAvc2Fzcy9fbWl4aW5zLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay93aWQtYmxvZy1mcm9udGVuZC93aWQtYmxvZy1mcm9udGVuZC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ob3Zlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FERUY7QUNFRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNDQ2dCO0VEQWhCLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEQ0o7QUdaQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCRENtQjtBRmNyQjtBR1pBO0VDUkE7Ozs7SUFBQTtFQThCQSxnQkFBQTtFQWFBLGdCQUFBO0FKYkE7QUl4QkE7O0VBRUMsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxzRUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBRUEscUJBQUE7RUFHQSxhQUFBO0FKd0JEO0FJcEJBO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUpzQkQ7QUluQkE7O0VBRUMsbUJBQUE7QUpxQkQ7QUlqQkE7RUFDQyxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBSm1CRDtBSWhCQTs7OztFQUlDLGNBQUE7QUprQkQ7QUlmQTtFQUNDLGNBQUE7QUppQkQ7QUlkQTtFQUNDLFlBQUE7QUpnQkQ7QUliQTs7Ozs7RUFLQyxjQUFBO0FKZUQ7QUlaQTs7RUFFQyxjQUFBO0FKY0Q7QUlYQTs7Ozs7O0VBTUMsY0FBQTtBSmFEO0FJVkE7Ozs7OztFQU1DLGNBQUE7QUpZRDtBSVRBOzs7O0VBSUMsY0FBQTtBSldEO0FJUkE7RUFDQyxjQUFBO0FKVUQ7QUlQQTs7RUFFQyxjQUFBO0FKU0Q7QUlOQTs7RUFFQyxpQkFBQTtBSlFEO0FJTkE7RUFDQyxrQkFBQTtBSlFEO0FJTEE7RUFDQyxZQUFBO0FKT0Q7QUdySEk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBSHVITjtBR3JISTtFQUNFLGVBQUE7QUh1SE47QUdwSE07RUFDRSxhQUFBO0FIc0hSO0FLNUdFO0VBQ0UsY0hqQmdCO0FGK0hwQjtBSzNHRTtFQUNFLGNIakNZO0VHa0NaLGVBQUE7QUw2R0o7QUs1R0k7RUFDRSwwQkFBQTtFQUNBLGNIbkNlO0FGaUpyQjtBSzNHRTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBTDZHSjtBSzFHRTs7RUFFRSxvQkFBQTtFQUNBLDhCQUFBO0FMNEdKO0FLM0dJOztFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUw4R047QUt6R0U7RUFDRSxtQkFBQTtBTDJHSjtBS3pHRTtFQUNFLGdCQUFBO0FMMkdKO0FLeEdFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0FMMEdKO0FLekdJO0VBQ0UsU0FBQTtBTDJHTjtBS3hHRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUwwR0o7QUt2R0U7RUFDRSxpQkFBQTtFQUNBLGNINUVnQjtFRzZFaEIsZUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBTHlHSjtBS3ZHRTtFQUNFLGlCQUFBO0VBQ0EsY0huRmdCO0VHb0ZoQixvQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtBTHlHSjtBR3BMRTtFQUNFLHNCRExVO0VDTVYsZ0NBQUE7QUhzTEo7QUdwTEU7RUFDRSxzQkRUVTtFQ1VWLGdDQUFBO0FIc0xKO0FHbExBO0VBQ0UsYUFBQTtBSHFMRjtBR3BMRTtFQUNFLGdCQUFBO0FIc0xKO0FHcExFO0VBQ0UsY0Q1QmdCO0VDNkJoQixXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUhzTEo7QU10TUU7RUhrQkksYUFBQTtBSHVMTjtBR2xMQTtFQUNFLHNCRGxDWTtFQ21DWixvREFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FIcUxGO0FHcExFO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUhzTEo7QU1oT0U7RUg0Q0ksY0RqRVU7QUZ3UGhCO0FHckxJO0VBQ0UsZUFBQTtBSHVMTjtBR25MRTtFQUNFLCtCQUFBO0FIcUxKO0FHbExFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNEdEVnQjtBRjBQcEI7QUdqTEU7RUFDRSxrQkFBQTtBSG1MSjtBR2xMSTtFQUNFLHlCRHBFSTtFQ3FFSixrQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUhvTE47QUdoTEU7RUFDRSxlQUFBO0FIa0xKO0FNaFFFO0VIZ0ZJLGNENUZjO0FGK1FwQjtBR2pMSTtFQUNFLDBCQUFBO0FIbUxOO0FHakxJO0VBR0Usd0JBQUE7QUhpTE47QUc3S0E7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNEdEhjO0VDdUhkLGVBQUE7RUFNQSxhQUFBO0FIMktGO0FNM1FFO0VINkZFLGNEeEhpQjtBRnlTckI7QUczS0E7RUFhRSxrQkFBQTtBSGtLRjtBRzlLRTtFQUdFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJEeklZO0VDMElaLG1CQUFBO0FIOEtKO0FHektFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUgyS0o7QUd6S0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0FIMktKO0FHeEtFO0VBQ0Usa0JBQUE7QUgwS0o7QUd6S0k7RUFDRSxTQUFBO0VBQ0EseUJBQUE7QUgyS047QUd6S0k7RUFDRSxNQUFBO0VBQ0Esd0JBQUE7QUgyS047QUd2S0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCRDdLbUI7RUM4S25CLGNEdktrQjtFQ3dLbEIscUNBQUE7QUgwS0Y7QUd6S0U7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FIMktKO0FHektFO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0FIMktKO0FHektFO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0FIMktKO0FHeEtFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBSDBLSjtBR3pLSTs7RUFFRSxzQkRyTFE7RUNzTFIsZ0NBQUE7QUgyS047QUd2S0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBSHlLSjtBR3ZLRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUh5S0o7QUd4S0k7RUFDRSx1QkFBQTtBSDBLTiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Bvc3RzL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udy03MDAtY2VudGVyZWQge1xuICBtYXgtd2lkdGg6IDQ1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjYyNXJlbTtcbn1cblxuLmJ1bGxldDpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAolwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNzQ3ZDg1O1xuICBtYXJnaW46IDAgMC43NXJlbTtcbiAgb3BhY2l0eTogMC42O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjdmODtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLyoqXG4gICAqIG9rYWlkaWEgdGhlbWUgZm9yIEphdmFTY3JpcHQsIENTUyBhbmQgSFRNTFxuICAgKiBMb29zZWx5IGJhc2VkIG9uIE1vbm9rYWkgdGV4dG1hdGUgdGhlbWUgYnkgaHR0cDovL3d3dy5tb25va2FpLm5sL1xuICAgKiBAYXV0aG9yIG9jb2RpYVxuICAgKi9cbiAgLyogQ29kZSBibG9ja3MgKi9cbiAgLyogSW5saW5lIGNvZGUgKi9cbn1cbjpob3N0IDo6bmctZGVlcCBjb2RlW2NsYXNzKj1sYW5ndWFnZS1dLFxuOmhvc3QgOjpuZy1kZWVwIHByZVtjbGFzcyo9bGFuZ3VhZ2UtXSB7XG4gIGNvbG9yOiAjZjhmOGYyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgXCJBbmRhbGUgTW9ub1wiLCBcIlVidW50dSBNb25vXCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICAtbW96LXRhYi1zaXplOiA0O1xuICAtby10YWItc2l6ZTogNDtcbiAgdGFiLXNpemU6IDQ7XG4gIC13ZWJraXQtaHlwaGVuczogbm9uZTtcbiAgLW1vei1oeXBoZW5zOiBub25lO1xuICAtbXMtaHlwaGVuczogbm9uZTtcbiAgaHlwaGVuczogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCBwcmVbY2xhc3MqPWxhbmd1YWdlLV0ge1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuOmhvc3QgOjpuZy1kZWVwIDpub3QocHJlKSA+IGNvZGVbY2xhc3MqPWxhbmd1YWdlLV0sXG46aG9zdCA6Om5nLWRlZXAgcHJlW2NsYXNzKj1sYW5ndWFnZS1dIHtcbiAgYmFja2dyb3VuZDogIzI3MjgyMjtcbn1cbjpob3N0IDo6bmctZGVlcCA6bm90KHByZSkgPiBjb2RlW2NsYXNzKj1sYW5ndWFnZS1dIHtcbiAgcGFkZGluZzogMC4xZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50b2tlbi5jb21tZW50LFxuOmhvc3QgOjpuZy1kZWVwIC50b2tlbi5wcm9sb2csXG46aG9zdCA6Om5nLWRlZXAgLnRva2VuLmRvY3R5cGUsXG46aG9zdCA6Om5nLWRlZXAgLnRva2VuLmNkYXRhIHtcbiAgY29sb3I6ICM4MjkyYTI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRva2VuLnB1bmN0dWF0aW9uIHtcbiAgY29sb3I6ICNmOGY4ZjI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRva2VuLm5hbWVzcGFjZSB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbjpob3N0IDo6bmctZGVlcCAudG9rZW4ucHJvcGVydHksXG46aG9zdCA6Om5nLWRlZXAgLnRva2VuLnRhZyxcbjpob3N0IDo6bmctZGVlcCAudG9rZW4uY29uc3RhbnQsXG46aG9zdCA6Om5nLWRlZXAgLnRva2VuLnN5bWJvbCxcbjpob3N0IDo6bmctZGVlcCAudG9rZW4uZGVsZXRlZCB7XG4gIGNvbG9yOiAjZjkyNjcyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50b2tlbi5ib29sZWFuLFxuOmhvc3QgOjpuZy1kZWVwIC50b2tlbi5udW1iZXIge1xuICBjb2xvcjogI2FlODFmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAudG9rZW4uc2VsZWN0b3IsXG46aG9zdCA6Om5nLWRlZXAgLnRva2VuLmF0dHItbmFtZSxcbjpob3N0IDo6bmctZGVlcCAudG9rZW4uc3RyaW5nLFxuOmhvc3QgOjpuZy1kZWVwIC50b2tlbi5jaGFyLFxuOmhvc3QgOjpuZy1kZWVwIC50b2tlbi5idWlsdGluLFxuOmhvc3QgOjpuZy1kZWVwIC50b2tlbi5pbnNlcnRlZCB7XG4gIGNvbG9yOiAjYTZlMjJlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50b2tlbi5vcGVyYXRvcixcbjpob3N0IDo6bmctZGVlcCAudG9rZW4uZW50aXR5LFxuOmhvc3QgOjpuZy1kZWVwIC50b2tlbi51cmwsXG46aG9zdCA6Om5nLWRlZXAgLmxhbmd1YWdlLWNzcyAudG9rZW4uc3RyaW5nLFxuOmhvc3QgOjpuZy1kZWVwIC5zdHlsZSAudG9rZW4uc3RyaW5nLFxuOmhvc3QgOjpuZy1kZWVwIC50b2tlbi52YXJpYWJsZSB7XG4gIGNvbG9yOiAjZjhmOGYyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50b2tlbi5hdHJ1bGUsXG46aG9zdCA6Om5nLWRlZXAgLnRva2VuLmF0dHItdmFsdWUsXG46aG9zdCA6Om5nLWRlZXAgLnRva2VuLmZ1bmN0aW9uLFxuOmhvc3QgOjpuZy1kZWVwIC50b2tlbi5jbGFzcy1uYW1lIHtcbiAgY29sb3I6ICNlNmRiNzQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRva2VuLmtleXdvcmQge1xuICBjb2xvcjogIzY2ZDllZjtcbn1cbjpob3N0IDo6bmctZGVlcCAudG9rZW4ucmVnZXgsXG46aG9zdCA6Om5nLWRlZXAgLnRva2VuLmltcG9ydGFudCB7XG4gIGNvbG9yOiAjZmQ5NzFmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50b2tlbi5pbXBvcnRhbnQsXG46aG9zdCA6Om5nLWRlZXAgLnRva2VuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjpob3N0IDo6bmctZGVlcCAudG9rZW4uaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50b2tlbi5lbnRpdHkge1xuICBjdXJzb3I6IGhlbHA7XG59XG46aG9zdCA6Om5nLWRlZXAgZWRpdG9yIC5tY2UtY29udGVudC1ib2R5IFtjb250ZW50RWRpdGFibGU9ZmFsc2VdW2RhdGEtbWNlLXNlbGVjdGVkXSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCBlZGl0b3IgcHJlW2NsYXNzKj1sYW5ndWFnZS1dIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIGVkaXRvciAjdGlueW1jZS1lZGl0b3I6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIGVkaXRvciB7XG4gIGNvbG9yOiAjMWYyMzI3O1xufVxuOmhvc3QgOjpuZy1kZWVwIGVkaXRvciBhIHtcbiAgY29sb3I6ICMwOTg0ZTM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCBlZGl0b3IgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzA4NzFjMjtcbn1cbjpob3N0IDo6bmctZGVlcCBlZGl0b3IgcCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAgMnJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCBlZGl0b3IgdWwsXG46aG9zdCA6Om5nLWRlZXAgZWRpdG9yIG9sIHtcbiAgbWFyZ2luOiAwIDAgMS44NzVyZW07XG4gIHBhZGRpbmc6IDAgMS44NzVyZW0gMCAxLjYyNXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCBlZGl0b3IgdWwgbGksXG46aG9zdCA6Om5nLWRlZXAgZWRpdG9yIG9sIGxpIHtcbiAgbWFyZ2luOiAwLjYyNXJlbSAwO1xuICBwYWRkaW5nOiAwIDAgMCAwLjM3NXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuOmhvc3QgOjpuZy1kZWVwIGVkaXRvciBvbCB7XG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XG59XG46aG9zdCA6Om5nLWRlZXAgZWRpdG9yIHVsIHtcbiAgbGlzdC1zdHlsZTogZGlzYztcbn1cbjpob3N0IDo6bmctZGVlcCBlZGl0b3IgYmxvY2txdW90ZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luOiAwIDAgMS44NzVyZW07XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xuICBib3JkZXItbGVmdDogMC4xODc1cmVtIHNvbGlkICMwOTg0ZTM7XG59XG46aG9zdCA6Om5nLWRlZXAgZWRpdG9yIGJsb2NrcXVvdGUgcCB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IDo6bmctZGVlcCBlZGl0b3IgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMi42MjVyZW0gMDtcbn1cbjpob3N0IDo6bmctZGVlcCBlZGl0b3IgaDIge1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgY29sb3I6ICMxZjIzMjc7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxLjZyZW0gMCAwLjhyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgZWRpdG9yIGgzIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGNvbG9yOiAjMWYyMzI3O1xuICBmb250LXNpemU6IDEuNTYyNXJlbTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwLjc4MTI1cmVtIDAgMC4zMTI1cmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDAuMDMxMjVyZW0gc29saWQgI2UyZTdlYjtcbn1cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0IC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMC4wMzEyNXJlbSBzb2xpZCAjZTJlN2ViO1xufVxuXG4ucG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucG9zdF9fdGl0bGUge1xuICBtYXJnaW46IDAgMCAzcmVtO1xufVxuLnBvc3RfX3RpdGxlLWlucHV0IHtcbiAgY29sb3I6ICMzMTM3M2I7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xufVxuLnBvc3RfX3RpdGxlLWlucHV0OmhvdmVyLCAucG9zdF9fdGl0bGUtaW5wdXQ6Zm9jdXMsIC5wb3N0X190aXRsZS1pbnB1dDphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5uYXYjZWRpdG9yLXRvcC1uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC43NXJlbSByZ2JhKDE3LCAxOSwgMjIsIDAuMDQpO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHotaW5kZXg6IDEwMzA7XG59XG5uYXYjZWRpdG9yLXRvcC1uYXYgLm5hdi1saW5rIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxubmF2I2VkaXRvci10b3AtbmF2IC5uYXYtbGluaywgbmF2I2VkaXRvci10b3AtbmF2IC5uYXYtbGluazpob3ZlciwgbmF2I2VkaXRvci10b3AtbmF2IC5uYXYtbGluazpmb2N1cyB7XG4gIGNvbG9yOiAjMDk4NGUzO1xufVxubmF2I2VkaXRvci10b3AtbmF2IC5uYXYtbGluayBzdmctaWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbm5hdiNlZGl0b3ItdG9wLW5hdiAucG9zdHMtbGluayB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjYWQxZDY7XG59XG5uYXYjZWRpdG9yLXRvcC1uYXYgLm5hdmJhci10ZXh0IHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiAjNzQ3ZDg1O1xufVxubmF2I2VkaXRvci10b3AtbmF2IC5zdWJtaXQtdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubmF2I2VkaXRvci10b3AtbmF2IC5zdWJtaXQtdG9nZ2xlX19jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIuNjI1cmVtO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuNXJlbSk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU3ZWI7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi13aWR0aDogMTEuODc1cmVtO1xufVxubmF2I2VkaXRvci10b3AtbmF2IC5zZXR0aW5ncy1idG4ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5uYXYjZWRpdG9yLXRvcC1uYXYgLnNldHRpbmdzLWJ0biwgbmF2I2VkaXRvci10b3AtbmF2IC5zZXR0aW5ncy1idG46aG92ZXIsIG5hdiNlZGl0b3ItdG9wLW5hdiAuc2V0dGluZ3MtYnRuOmZvY3VzIHtcbiAgY29sb3I6ICM3NDdkODU7XG59XG5uYXYjZWRpdG9yLXRvcC1uYXYgLnNldHRpbmdzLWJ0biBzdmctaWNvbiB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxubmF2I2VkaXRvci10b3AtbmF2IC5zZXR0aW5ncy1idG46aG92ZXIgc3ZnLWljb24sIG5hdiNlZGl0b3ItdG9wLW5hdiAuc2V0dGluZ3MtYnRuOmFjdGl2ZSBzdmctaWNvbiwgbmF2I2VkaXRvci10b3AtbmF2IC5zZXR0aW5ncy1idG46Zm9jdXMgc3ZnLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5zZXR0aW5ncy1idG4ge1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMwOTg0ZTM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAzMTtcbn1cbi5zZXR0aW5ncy1idG46aG92ZXIsIC5zZXR0aW5ncy1idG46Zm9jdXMsIC5zZXR0aW5ncy1idG46YWN0aXZlIHtcbiAgY29sb3I6ICMwODcxYzI7XG59XG5cbi5zZXR0aW5ncy1idG5fX2ljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2V0dGluZ3MtYnRuX19pY29uLCAuc2V0dGluZ3MtYnRuX19pY29uOjpiZWZvcmUsIC5zZXR0aW5ncy1idG5fX2ljb246OmFmdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxLjI1cmVtO1xuICBoZWlnaHQ6IDAuMDYyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5ODRlMztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5zZXR0aW5ncy1idG5fX2ljb246OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMC4zNzVyZW07XG59XG4uc2V0dGluZ3MtYnRuX19pY29uOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMC4zNzVyZW07XG59XG4uc2V0dGluZ3MtYnRuX19pY29uLS1jcm9zcyB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5zZXR0aW5ncy1idG5fX2ljb24tLWNyb3NzOjpiZWZvcmUge1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uc2V0dGluZ3MtYnRuX19pY29uLS1jcm9zczo6YWZ0ZXIge1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMzA7XG4gIG1heC13aWR0aDogMjEuODc1cmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gcmdiYSgxNywgMTksIDIyLCAwLjA0KTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmN2Y4O1xuICBjb2xvcjogIzMxMzczYjtcbiAgYm9yZGVyLWxlZnQ6IDAuMDMxMjVyZW0gc29saWQgI2UyZTdlYjtcbn1cbi5zaWRlYmFyX190b3AtaW50cm8ge1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNpZGViYXJfX3RvcC1pbnRyby1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuLnNpZGViYXJfX2Nsb3NlLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xufVxuLnNpZGViYXJfX2Zvcm0ge1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5zaWRlYmFyX19mb3JtIGlucHV0Om5vdChbdHlwZT1maWxlXSksXG4uc2lkZWJhcl9fZm9ybSB0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMC4wMzEyNXJlbSBzb2xpZCAjZTJlN2ViO1xufVxuLnNpZGViYXJfX2RlbGV0ZS1wb3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAycmVtO1xufVxuLnNpZGViYXJfX2RlbGV0ZS1wb3N0LWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNpZGViYXJfX2RlbGV0ZS1wb3N0LWJ0biBzdmctaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMC4zMTI1cmVtO1xufSIsIi53LTcwMC1jZW50ZXJlZCB7XG4gIG1heC13aWR0aDogcHhUb1JlbSg3MjApO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCBweFRvUmVtKDEwKTtcbn1cblxuLmJ1bGxldCB7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMjAyMlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0xO1xuICAgIG1hcmdpbjogMCBweFRvUmVtKDEyKTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxufVxuIiwiLy8gQ09MT1JTXG5cbiRjb2xvci1wcmltYXJ5OiAjMDk4NGUzO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICMxODk1ZjY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMDg3MWMyO1xuXG4kY29sb3ItZ3JleS1saWdodC0xOiAjZjRmN2Y4O1xuJGNvbG9yLWdyZXktbGlnaHQtMjogI2UyZTdlYjtcbiRjb2xvci1ncmV5LWxpZ2h0LTM6ICNjYWQxZDY7XG4kY29sb3ItZ3JleS1saWdodC00OiAjYWNiM2I4O1xuXG4kY29sb3ItZ3JleS1kYXJrLTE6ICM3NDdkODU7XG4kY29sb3ItZ3JleS1kYXJrLTI6ICM1MjVjNjQ7XG4kY29sb3ItZ3JleS1kYXJrLTM6ICMzMTM3M2I7XG4kY29sb3ItZ3JleS1kYXJrLTQ6ICMxZjIzMjc7XG4kY29sb3ItZ3JleS1kYXJrLTU6ICMxMTEzMTY7XG5cbiRjb2xvci10ZXh0LWJsYWNrOiAkY29sb3ItZ3JleS1kYXJrLTM7XG4kY29sb3ItdGV4dC13aGl0ZTogJGNvbG9yLWdyZXktbGlnaHQtMjtcbiRib2R5LWJnOiAjZmJmYmZiO1xuXG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG5cblxuIiwiQGltcG9ydCBcInNhc3MvaW5kZXhcIjtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0LTE7XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIEBpbXBvcnQgXCJ+cHJpc21qcy90aGVtZXMvcHJpc20tb2thaWRpYVwiO1xuICBlZGl0b3Ige1xuICAgIC5tY2UtY29udGVudC1ib2R5IFtjb250ZW50RWRpdGFibGU9XCJmYWxzZVwiXVtkYXRhLW1jZS1zZWxlY3RlZF0ge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgcHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgICN0aW55bWNlLWVkaXRvciB7XG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGluY2x1ZGUgYmxvZy1wb3N0O1xuICB9XG4gIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICBib3JkZXI6IHB4VG9SZW0oMC41KSBzb2xpZCAkY29sb3ItZ3JleS1saWdodC0yO1xuICB9XG4gIC5uZy1zZWxlY3QgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgYm9yZGVyOiBweFRvUmVtKDAuNSkgc29saWQgJGNvbG9yLWdyZXktbGlnaHQtMjtcbiAgfVxufVxuXG4ucG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW46IDAgMCBweFRvUmVtKDQ4KTtcbiAgfVxuICAmX190aXRsZS1pbnB1dCB7XG4gICAgY29sb3I6ICRjb2xvci10ZXh0LWJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IHB4VG9SZW0oNDgpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gICAgQGluY2x1ZGUgaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbm5hdiNlZGl0b3ItdG9wLW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgYm94LXNoYWRvdzogMCBweFRvUmVtKDQpIHB4VG9SZW0oMTIpIHJnYmEoJGNvbG9yLWdyZXktZGFyay01LCAwLjA0KTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB6LWluZGV4OiAxMDMwO1xuICAubmF2LWxpbmsge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiBweFRvUmVtKDgpIHB4VG9SZW0oMTYpO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDE0KTtcbiAgICBAaW5jbHVkZSBwbGFpbi1ob3Zlci1mb2N1cyB7XG4gICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgfVxuICAgIHN2Zy1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxNik7XG4gICAgfVxuICB9XG5cbiAgLnBvc3RzLWxpbmsge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjb2xvci1ncmV5LWxpZ2h0LTM7XG4gIH1cblxuICAubmF2YmFyLXRleHQge1xuICAgIHBhZGRpbmc6IHB4VG9SZW0oOCkgcHhUb1JlbSgxNik7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDE0KTtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0xO1xuICB9XG5cbiAgLnN1Ym1pdC10b2dnbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmX19jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiBweFRvUmVtKDQyKTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHB4VG9SZW0oOCkpO1xuICAgICAgcGFkZGluZzogcHhUb1JlbSgxNik7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItZ3JleS1saWdodC0yO1xuICAgICAgYm9yZGVyLXJhZGl1czogcHhUb1JlbSg0KTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtaW4td2lkdGg6IHB4VG9SZW0oMTkwKTtcbiAgICB9XG4gIH1cblxuICAuc2V0dGluZ3MtYnRuIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgQGluY2x1ZGUgcGxhaW4taG92ZXItZm9jdXMge1xuICAgICAgY29sb3I6ICRjb2xvci1ncmV5LWRhcmstMTtcbiAgICB9XG4gICAgc3ZnLWljb24ge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgfVxuICAgICY6aG92ZXIgc3ZnLWljb24sXG4gICAgJjphY3RpdmUgc3ZnLWljb24sXG4gICAgJjpmb2N1cyBzdmctaWNvbiB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgfVxuICB9XG59XG4uc2V0dGluZ3MtYnRuIHtcbiAgcGFkZGluZzogcHhUb1JlbSgxNikgcHhUb1JlbSgxNik7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgQGluY2x1ZGUgaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnktZGFyaztcbiAgfVxuXG4gIHotaW5kZXg6IDEwMzE7XG59XG5cbi5zZXR0aW5ncy1idG5fX2ljb24ge1xuICAmLFxuICAmOjpiZWZvcmUsXG4gICY6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IHB4VG9SZW0oMjApO1xuICAgIGhlaWdodDogcHhUb1JlbSgxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogcHhUb1JlbSg2KTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogcHhUb1JlbSg2KTtcbiAgfVxuXG4gICYtLWNyb3NzIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gIH1cbn1cbi5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDMwO1xuICBtYXgtd2lkdGg6IHB4VG9SZW0oMzUwKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDAgcHhUb1JlbSg4KSByZ2JhKCRjb2xvci1ncmV5LWRhcmstNSwgMC4wNCk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktbGlnaHQtMTtcbiAgY29sb3I6ICRjb2xvci10ZXh0LWJsYWNrO1xuICBib3JkZXItbGVmdDogcHhUb1JlbSgwLjUpIHNvbGlkICRjb2xvci1ncmV5LWxpZ2h0LTI7XG4gICZfX3RvcC1pbnRybyB7XG4gICAgcGFkZGluZzogcHhUb1JlbSgxNikgcHhUb1JlbSgyNCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAmX190b3AtaW50cm8taGVhZGluZyB7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDE4KTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgJl9fY2xvc2UtYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgxMyk7XG4gIH1cblxuICAmX19mb3JtIHtcbiAgICBwYWRkaW5nOiAwIHB4VG9SZW0oMjQpO1xuICAgIG1hcmdpbi10b3A6IHB4VG9SZW0oMTYpO1xuICAgIGlucHV0Om5vdChbdHlwZT1cImZpbGVcIl0pLFxuICAgIHRleHRhcmVhIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgIGJvcmRlcjogcHhUb1JlbSgwLjUpIHNvbGlkICRjb2xvci1ncmV5LWxpZ2h0LTI7XG4gICAgfVxuICB9XG5cbiAgJl9fZGVsZXRlLXBvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IHB4VG9SZW0oMTYpIHB4VG9SZW0oMjQpO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IHB4VG9SZW0oMzIpO1xuICB9XG4gICZfX2RlbGV0ZS1wb3N0LWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBzdmctaWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IHB4VG9SZW0oNSk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIG9rYWlkaWEgdGhlbWUgZm9yIEphdmFTY3JpcHQsIENTUyBhbmQgSFRNTFxuICogTG9vc2VseSBiYXNlZCBvbiBNb25va2FpIHRleHRtYXRlIHRoZW1lIGJ5IGh0dHA6Ly93d3cubW9ub2thaS5ubC9cbiAqIEBhdXRob3Igb2NvZGlhXG4gKi9cblxuY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcblx0Y29sb3I6ICNmOGY4ZjI7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdHRleHQtc2hhZG93OiAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCAnQW5kYWxlIE1vbm8nLCAnVWJ1bnR1IE1vbm8nLCBtb25vc3BhY2U7XG5cdGZvbnQtc2l6ZTogMWVtO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aGl0ZS1zcGFjZTogcHJlO1xuXHR3b3JkLXNwYWNpbmc6IG5vcm1hbDtcblx0d29yZC1icmVhazogbm9ybWFsO1xuXHR3b3JkLXdyYXA6IG5vcm1hbDtcblx0bGluZS1oZWlnaHQ6IDEuNTtcblxuXHQtbW96LXRhYi1zaXplOiA0O1xuXHQtby10YWItc2l6ZTogNDtcblx0dGFiLXNpemU6IDQ7XG5cblx0LXdlYmtpdC1oeXBoZW5zOiBub25lO1xuXHQtbW96LWh5cGhlbnM6IG5vbmU7XG5cdC1tcy1oeXBoZW5zOiBub25lO1xuXHRoeXBoZW5zOiBub25lO1xufVxuXG4vKiBDb2RlIGJsb2NrcyAqL1xucHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG5cdHBhZGRpbmc6IDFlbTtcblx0bWFyZ2luOiAuNWVtIDA7XG5cdG92ZXJmbG93OiBhdXRvO1xuXHRib3JkZXItcmFkaXVzOiAwLjNlbTtcbn1cblxuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcblx0YmFja2dyb3VuZDogIzI3MjgyMjtcbn1cblxuLyogSW5saW5lIGNvZGUgKi9cbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcblx0cGFkZGluZzogLjFlbTtcblx0Ym9yZGVyLXJhZGl1czogLjNlbTtcblx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnRva2VuLmNvbW1lbnQsXG4udG9rZW4ucHJvbG9nLFxuLnRva2VuLmRvY3R5cGUsXG4udG9rZW4uY2RhdGEge1xuXHRjb2xvcjogIzgyOTJhMjtcbn1cblxuLnRva2VuLnB1bmN0dWF0aW9uIHtcblx0Y29sb3I6ICNmOGY4ZjI7XG59XG5cbi50b2tlbi5uYW1lc3BhY2Uge1xuXHRvcGFjaXR5OiAuNztcbn1cblxuLnRva2VuLnByb3BlcnR5LFxuLnRva2VuLnRhZyxcbi50b2tlbi5jb25zdGFudCxcbi50b2tlbi5zeW1ib2wsXG4udG9rZW4uZGVsZXRlZCB7XG5cdGNvbG9yOiAjZjkyNjcyO1xufVxuXG4udG9rZW4uYm9vbGVhbixcbi50b2tlbi5udW1iZXIge1xuXHRjb2xvcjogI2FlODFmZjtcbn1cblxuLnRva2VuLnNlbGVjdG9yLFxuLnRva2VuLmF0dHItbmFtZSxcbi50b2tlbi5zdHJpbmcsXG4udG9rZW4uY2hhcixcbi50b2tlbi5idWlsdGluLFxuLnRva2VuLmluc2VydGVkIHtcblx0Y29sb3I6ICNhNmUyMmU7XG59XG5cbi50b2tlbi5vcGVyYXRvcixcbi50b2tlbi5lbnRpdHksXG4udG9rZW4udXJsLFxuLmxhbmd1YWdlLWNzcyAudG9rZW4uc3RyaW5nLFxuLnN0eWxlIC50b2tlbi5zdHJpbmcsXG4udG9rZW4udmFyaWFibGUge1xuXHRjb2xvcjogI2Y4ZjhmMjtcbn1cblxuLnRva2VuLmF0cnVsZSxcbi50b2tlbi5hdHRyLXZhbHVlLFxuLnRva2VuLmZ1bmN0aW9uLFxuLnRva2VuLmNsYXNzLW5hbWUge1xuXHRjb2xvcjogI2U2ZGI3NDtcbn1cblxuLnRva2VuLmtleXdvcmQge1xuXHRjb2xvcjogIzY2ZDllZjtcbn1cblxuLnRva2VuLnJlZ2V4LFxuLnRva2VuLmltcG9ydGFudCB7XG5cdGNvbG9yOiAjZmQ5NzFmO1xufVxuXG4udG9rZW4uaW1wb3J0YW50LFxuLnRva2VuLmJvbGQge1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbi50b2tlbi5pdGFsaWMge1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi50b2tlbi5lbnRpdHkge1xuXHRjdXJzb3I6IGhlbHA7XG59XG4iLCJAbWl4aW4gaG92ZXIoKSB7XG4gICY6aG92ZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cygpIHtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHBsYWluLWhvdmVyLWZvY3VzKCkge1xuICAmLFxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlKCkge1xuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGJsb2ctcG9zdCgpIHtcbiAgJiB7XG4gICAgY29sb3I6ICRjb2xvci1ncmV5LWRhcmstNDtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrO1xuICAgIH1cbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IHB4VG9SZW0oMjApO1xuICAgIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCAwIHB4VG9SZW0oMzIpO1xuICB9XG5cbiAgdWwsXG4gIG9sIHtcbiAgICBtYXJnaW46IDAgMCBweFRvUmVtKDMwKTtcbiAgICBwYWRkaW5nOiAwIHB4VG9SZW0oMzApIDAgcHhUb1JlbSgyNik7XG4gICAgbGkge1xuICAgICAgbWFyZ2luOiBweFRvUmVtKDEwKSAwO1xuICAgICAgcGFkZGluZzogMCAwIDAgcHhUb1JlbSg2KTtcbiAgICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgyMCk7XG4gICAgICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICB9XG4gICAgbGk6Om1hcmtlciB7XG4gICAgfVxuICB9XG4gIG9sIHtcbiAgICBsaXN0LXN0eWxlOiBkZWNpbWFsO1xuICB9XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBkaXNjO1xuICB9XG5cbiAgYmxvY2txdW90ZSB7XG4gICAgZm9udC1zaXplOiBweFRvUmVtKDIwKTtcbiAgICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgbWFyZ2luOiAwIDAgcHhUb1JlbSgzMCk7XG4gICAgcGFkZGluZzogMCBweFRvUmVtKDI0KTtcbiAgICBib3JkZXItbGVmdDogcHhUb1JlbSgzKSBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogcHhUb1JlbSg0MikgMDtcbiAgfVxuXG4gIGgyIHtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay00O1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgzMik7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IHB4VG9SZW0oMjUuNikgMCBweFRvUmVtKDEyLjgpO1xuICB9XG4gIGgzIHtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay00O1xuICAgIGZvbnQtc2l6ZTogcHhUb1JlbSgyNSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IHB4VG9SZW0oMTIuNSkgMCBweFRvUmVtKDUpO1xuICB9XG59XG4iLCIvLyBIb3ZlciBtaXhpbiBhbmQgYCRlbmFibGUtaG92ZXItbWVkaWEtcXVlcnlgIGFyZSBkZXByZWNhdGVkLlxuLy9cbi8vIE9yaWdpbmFsbHkgYWRkZWQgZHVyaW5nIG91ciBhbHBoYXMgYW5kIG1haW50YWluZWQgZHVyaW5nIGJldGFzLCB0aGlzIG1peGluIHdhc1xuLy8gZGVzaWduZWQgdG8gcHJldmVudCBgOmhvdmVyYCBzdGlja2luZXNzIG9uIGlPUy1hbiBpc3N1ZSB3aGVyZSBob3ZlciBzdHlsZXNcbi8vIHdvdWxkIHBlcnNpc3QgYWZ0ZXIgaW5pdGlhbCB0b3VjaC5cbi8vXG4vLyBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgd2UndmUga2VwdCB0aGVzZSBtaXhpbnMgYW5kIHVwZGF0ZWQgdGhlbSB0b1xuLy8gYWx3YXlzIHJldHVybiB0aGVpciByZWd1bGFyIHBzZXVkby1jbGFzc2VzIGluc3RlYWQgb2YgYSBzaGltbWVkIG1lZGlhIHF1ZXJ5LlxuLy9cbi8vIElzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI1MTk1XG5cbkBtaXhpbiBob3ZlcigpIHtcbiAgJjpob3ZlciB7IEBjb250ZW50OyB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cygpIHtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHBsYWluLWhvdmVyLWZvY3VzKCkge1xuICAmLFxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlKCkge1xuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/posts/editor/editor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/posts/editor/editor.component.ts ***!
  \********************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_admin_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/admin/_models */ "./src/app/admin/_models/index.ts");
/* harmony import */ var _app_admin_models_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/admin/_models/tag */ "./src/app/admin/_models/tag.ts");
/* harmony import */ var _app_home_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/home/_models */ "./src/app/home/_models/index.ts");
/* harmony import */ var _app_slugify_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/slugify.pipe */ "./src/app/slugify.pipe.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var EditorComponent = /** @class */ (function () {
    function EditorComponent(slugifyPipe) {
        this.slugifyPipe = slugifyPipe;
        this.isSideNavOpen = false;
        this.storageDir = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].storageDir;
        this.tinymceFirstContentSet = false;
        this.formChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.createTag = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this._post = new _app_admin_models__WEBPACK_IMPORTED_MODULE_4__["Post"]();
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            author_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            html: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            slug: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            published_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            custom_excerpt: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            meta_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            meta_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            featured: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            featured_image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            featured_image_file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            published: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_app_home_models__WEBPACK_IMPORTED_MODULE_6__["Type"].Post)
        });
        /* Initialize tinymce  */
        this.tinymceConfig = {
            menubar: false,
            toolbar: false,
            placeholder: "Write it all down...",
            plugins: "quickbars image media hr codesample code autolink image wordcount lists link paste",
            quickbars_selection_toolbar: "bold italic link | h2 h3 | blockquote | numlist bullist",
            quickbars_insert_toolbar: "image media hr codesample",
            contextmenu: "link | copy paste | code",
            paste_as_text: true,
            statusbar: false,
            image_title: true,
            file_picker_types: "image",
            block_unsupported_drop: false,
            images_upload_url: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].postImageUploadUrl,
            images_upload_handler: this.onTinymceImageUpload.bind(this),
            inline: true,
            forced_root_blocks: false,
            valid_children: "-p[img],h1[img],h2[img],h3[img],h4[img],+div[img],span[img]",
            mobile: {
                theme: "silver"
            },
            codesample_global_prismjs: true,
            codesample_languages: [
                { text: 'HTML/XML', value: 'markup' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'TypeScript', value: 'typescript' },
                { text: 'CSS', value: 'css' },
                { text: 'Scss', value: 'scss' },
                { text: 'Sass', value: 'sass' },
                { text: 'PHP', value: 'php' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'Python', value: 'python' },
                { text: 'Java', value: 'java' },
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' }
            ],
        };
        if (!this.post.published) {
            this.subscribeChanges();
        }
    }
    Object.defineProperty(EditorComponent.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (user) {
            this._user = user;
            this.f.author_id.setValue(this.user.id, { emitEvent: false });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "post", {
        get: function () {
            return this._post;
        },
        set: function (post) {
            if (post.exists) {
                this._post = post;
                if (this.post.featured_image) {
                    this.featuredImageUrl =
                        this.storageDir + "/" + this.post.featured_image;
                    this.resetFeaturedImage();
                }
                this.post.published ? this.unsubscribeChanges() : this.subscribeChanges();
                if (this.post.html && !this.tinymceFirstContentSet && this.tinymceInst) {
                    this.tinymceInst.setContent(this.post.html);
                    this.tinymceFirstContentSet = true;
                }
                this.postForm.patchValue(this.post, { emitEvent: false });
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "type", {
        set: function (val) {
            this.f.type.setValue(val, { emitEvent: false });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "f", {
        get: function () {
            return this.postForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    EditorComponent.prototype.isPage = function () {
        return this.f.type.value === _app_home_models__WEBPACK_IMPORTED_MODULE_6__["Type"].Page;
    };
    EditorComponent.prototype.onTinymceImageUpload = function (blobInfo, success, failure, progress) {
        var formData;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open("POST", _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].postImageUploadUrl);
        xhr.setRequestHeader("Authorization", "Bearer " + this.user.token);
        // xhr.setRequestHeader("Content-Type", `multipart/form-data`);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.upload.onprogress = function (e) {
            progress((e.loaded / e.total) * 100);
        };
        xhr.onload = function () {
            var json;
            if (xhr.status === 403) {
                failure("HTTP Error: " + xhr.status, { remove: true });
                return;
            }
            if (xhr.status < 200 || xhr.status >= 300) {
                failure("HTTP Error: " + xhr.status);
                return;
            }
            json = JSON.parse(xhr.responseText);
            if (!json || typeof json.location != "string") {
                failure("Invalid JSON: " + xhr.responseText);
                return;
            }
            success(json.location);
        };
        xhr.onerror = function () {
            failure("Image upload failed due to a XHR Transport error. Code: " + xhr.status);
        };
        formData = new FormData();
        formData.append("file", blobInfo.blob(), blobInfo.filename());
        xhr.send(formData);
    };
    EditorComponent.prototype.ngSelectTagCreator = function (input) {
        var tag = new _app_admin_models_tag__WEBPACK_IMPORTED_MODULE_5__["Tag"]();
        tag.name = input;
        tag.slug = this.slugify(input);
        this.createTag.emit(tag);
        return tag;
    };
    EditorComponent.prototype.setDefaults = function () {
        if (this.f.title.value === "") {
            this.f.title.setValue("(Untitled)", { emitEvent: false });
        }
        if (this.f.slug.pristine) {
            this.f.slug.setValue(this.slugify(this.f.title.value), {
                emitEvent: false,
            });
        }
    };
    EditorComponent.prototype.onTinymceChange = function () {
        if (!this.tinymceInst || this.tinymceInst.isNotDirty) {
            return;
        }
        var editor = this.tinymceInst;
        if (editor.getContent() !== "") {
            this.f.html.setValue(editor.getContent());
        }
    };
    EditorComponent.prototype.onFeaturedImageChange = function (event) {
        var _this = this;
        if (event.target.files.length === 0) {
            return;
        }
        var file = event.target.files[0];
        var mimeType = file.type;
        if (mimeType.match(/image\/*/) == null) {
            {
                return;
            }
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (_event) {
            _this.featuredImageUrl = reader.result.toString();
            _this.f.featured_image_file.setValue(file);
        };
    };
    EditorComponent.prototype.resetFeaturedImage = function () {
        this.f.featured_image_file.setValue("", { emitEvent: false });
        if (this.featuredImageInput) {
            this.featuredImageInput.nativeElement.value = "";
        }
    };
    EditorComponent.prototype.removeFeaturedImage = function () {
        this.resetFeaturedImage();
        this.featuredImageUrl = undefined;
        this.f.featured_image.setValue("");
    };
    EditorComponent.prototype.subscribeChanges = function () {
        var _this = this;
        if (this.postFormSubscription && !this.postFormSubscription.closed) {
            return;
        }
        this.postFormSubscription = this.postForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(2500))
            .subscribe(function () {
            _this.onSubmit();
        });
    };
    EditorComponent.prototype.unsubscribeChanges = function () {
        if (this.postFormSubscription) {
            this.postFormSubscription.unsubscribe();
        }
    };
    EditorComponent.prototype.isFormDirty = function () {
        return (this.postForm.dirty || (this.tinymceInst && this.tinymceInst.isDirty()));
    };
    EditorComponent.prototype.onSubmit = function () {
        this.setDefaults();
        var editor = this.tinymceInst;
        if (editor && editor.getContent() !== "") {
            this.f.html.setValue(editor.getContent(), { emitEvent: false });
        }
        var formData = new FormData();
        Object.entries(this.postForm.value).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (value === "") {
                value = null;
            }
            var newValue = value instanceof File ? value : JSON.stringify(value);
            formData.set(key, newValue);
        });
        this.formChange.emit(formData);
    };
    EditorComponent.prototype.onTypeChange = function (type) {
        this.f.published.setValue(type, { emitEvent: false });
    };
    EditorComponent.prototype.onPublishedAtChange = function (e) {
        var date = new Date(e.target.value);
        this.f.published_at.setValue(date.toISOString(), { emitEvent: false });
    };
    EditorComponent.prototype.toggleSideNav = function () {
        this.isSideNavOpen = !this.isSideNavOpen;
    };
    EditorComponent.prototype.slugify = function (input) {
        return this.slugifyPipe.transform(input);
    };
    EditorComponent.prototype.onDelete = function () {
        if (this.post.exists) {
            this.delete.emit();
        }
    };
    EditorComponent.prototype.onTinymceInit = function (e) {
        var _this = this;
        this.tinymceInst = e.editor;
        if (this.post && this.post.html && !this.tinymceFirstContentSet) {
            this.tinymceInst.setContent(this.post.html);
            this.postForm.patchValue({ html: this.post.html }, { emitEvent: false });
            this.tinymceInst.isNotDirty = true;
            this.tinymceFirstContentSet = true;
        }
        e.editor.on("WordCountUpdate", function (e) {
            _this.wordCount = e.wordCount;
        });
    };
    EditorComponent.prototype.ngOnInit = function () { };
    EditorComponent.prototype.ngOnDestroy = function () {
        if (this.postFormSubscription) {
            this.postFormSubscription.unsubscribe();
        }
    };
    EditorComponent.ctorParameters = function () { return [
        { type: _app_slugify_pipe__WEBPACK_IMPORTED_MODULE_7__["SlugifyPipe"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EditorComponent.prototype, "formChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EditorComponent.prototype, "delete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EditorComponent.prototype, "createTag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], EditorComponent.prototype, "tags", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], EditorComponent.prototype, "postStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], EditorComponent.prototype, "allUsers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_admin_models__WEBPACK_IMPORTED_MODULE_4__["User"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_admin_models__WEBPACK_IMPORTED_MODULE_4__["User"]])
    ], EditorComponent.prototype, "user", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_admin_models__WEBPACK_IMPORTED_MODULE_4__["Post"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_admin_models__WEBPACK_IMPORTED_MODULE_4__["Post"]])
    ], EditorComponent.prototype, "post", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
    ], EditorComponent.prototype, "type", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("featuredImage", { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], EditorComponent.prototype, "featuredImageInput", void 0);
    EditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "admin-post-editor",
            template: __webpack_require__(/*! raw-loader!./editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/posts/editor/editor.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("slideInOut", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(":enter", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: "translateX(100%)",
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(".2s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: "translateX(0)",
                        })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(":leave", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(".2s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: "translateX(100%)",
                        })),
                    ]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/admin/posts/editor/editor.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_slugify_pipe__WEBPACK_IMPORTED_MODULE_7__["SlugifyPipe"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/admin/posts/index.ts":
/*!**************************************!*\
  !*** ./src/app/admin/posts/index.ts ***!
  \**************************************/
/*! exports provided: PostsComponent, CreateComponent, EditorComponent, EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.component */ "./src/app/admin/posts/posts.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return _posts_component__WEBPACK_IMPORTED_MODULE_0__["PostsComponent"]; });

/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/create.component */ "./src/app/admin/posts/create/create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return _create_create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"]; });

/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/admin/posts/editor/editor.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return _editor_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"]; });

/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/admin/posts/edit/edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]; });







/***/ }),

/***/ "./src/app/admin/posts/posts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/posts/posts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.w-700-centered {\n  max-width: 45rem;\n  margin: 0 auto;\n  padding: 0 0.625rem;\n}\n.bullet:before {\n  content: \"•\";\n  display: inline-block;\n  color: #747d85;\n  margin: 0 0.75rem;\n  opacity: 0.6;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay93aWQtYmxvZy1mcm9udGVuZC93aWQtYmxvZy1mcm9udGVuZC9zcmMvYXBwL2FkbWluL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvd2lkLWJsb2ctZnJvbnRlbmQvd2lkLWJsb2ctZnJvbnRlbmQvc3JjL2FwcC9zYXNzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBREVGO0FDRUU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjQ0NnQjtFREFoQixpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRENKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udy03MDAtY2VudGVyZWQge1xuICBtYXgtd2lkdGg6IDQ1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjYyNXJlbTtcbn1cblxuLmJ1bGxldDpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAolwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNzQ3ZDg1O1xuICBtYXJnaW46IDAgMC43NXJlbTtcbiAgb3BhY2l0eTogMC42O1xuICBmb250LXdlaWdodDogMzAwO1xufSIsIi53LTcwMC1jZW50ZXJlZCB7XG4gIG1heC13aWR0aDogcHhUb1JlbSg3MjApO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCBweFRvUmVtKDEwKTtcbn1cblxuLmJ1bGxldCB7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMjAyMlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0xO1xuICAgIG1hcmdpbjogMCBweFRvUmVtKDEyKTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxufVxuIiwiLy8gQ09MT1JTXG5cbiRjb2xvci1wcmltYXJ5OiAjMDk4NGUzO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICMxODk1ZjY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMDg3MWMyO1xuXG4kY29sb3ItZ3JleS1saWdodC0xOiAjZjRmN2Y4O1xuJGNvbG9yLWdyZXktbGlnaHQtMjogI2UyZTdlYjtcbiRjb2xvci1ncmV5LWxpZ2h0LTM6ICNjYWQxZDY7XG4kY29sb3ItZ3JleS1saWdodC00OiAjYWNiM2I4O1xuXG4kY29sb3ItZ3JleS1kYXJrLTE6ICM3NDdkODU7XG4kY29sb3ItZ3JleS1kYXJrLTI6ICM1MjVjNjQ7XG4kY29sb3ItZ3JleS1kYXJrLTM6ICMzMTM3M2I7XG4kY29sb3ItZ3JleS1kYXJrLTQ6ICMxZjIzMjc7XG4kY29sb3ItZ3JleS1kYXJrLTU6ICMxMTEzMTY7XG5cbiRjb2xvci10ZXh0LWJsYWNrOiAkY29sb3ItZ3JleS1kYXJrLTM7XG4kY29sb3ItdGV4dC13aGl0ZTogJGNvbG9yLWdyZXktbGlnaHQtMjtcbiRib2R5LWJnOiAjZmJmYmZiO1xuXG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/admin/posts/posts.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/posts/posts.component.ts ***!
  \************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/posts.service */ "./src/app/admin/_services/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_home_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/home/_models */ "./src/app/home/_models/index.ts");







var PostsComponent = /** @class */ (function () {
    function PostsComponent(posts, route) {
        this.posts = posts;
        this.route = route;
        this.successMsgs = [];
        this.type = _app_home_models__WEBPACK_IMPORTED_MODULE_6__["Type"].Post;
        this.currentPage = 1;
        this.count = 0;
        this.tableSize = 10;
        this.tableSizes = [5, 10, 20, 50, 100];
    }
    PostsComponent.prototype.isPage = function () {
        return this.type === _app_home_models__WEBPACK_IMPORTED_MODULE_6__["Type"].Page;
    };
    PostsComponent.prototype.fetchPosts = function () {
        var _this = this;
        this.posts
            .indexPaginated(this.type, this.published, this.currentPage, this.tableSize)
            .subscribe(function (response) {
            _this.POSTS = response.data;
            _this.count = response.total;
            _this.currentPage = response.current_page;
        });
    };
    PostsComponent.prototype.onTableDataChange = function (event) {
        this.currentPage = event;
        this.fetchPosts();
    };
    PostsComponent.prototype.onTableSizeChange = function (event) {
        this.tableSize = event.target.value;
        this.currentPage = 1;
        this.fetchPosts();
    };
    PostsComponent.prototype.onPostsStatusChange = function (event) {
        if (event.target.value == 'true') {
            this.published = true;
        }
        else if (event.target.value == 'false') {
            this.published = false;
        }
        else if (event.target.value == 'undefined') {
            this.published = undefined;
        }
        else {
            return;
        }
        this.currentPage = 1;
        this.fetchPosts();
    };
    PostsComponent.prototype.onPostDelete = function (postId) {
        var _this = this;
        this.posts
            .delete(postId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            _this.httpErrors = err;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }))
            .subscribe(function (res) {
            if (res == true) {
                _this.successMsgs = ["Post was successfully deleted."];
                _this.fetchPosts();
            }
        });
    };
    PostsComponent.prototype.clearErrors = function () {
        this.httpErrors = undefined;
    };
    PostsComponent.prototype.clearSuccessMsgs = function () {
        this.successMsgs = [];
    };
    PostsComponent.prototype.onRefresh = function () {
        this.fetchPosts();
    };
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.data.page) {
            this.type = _app_home_models__WEBPACK_IMPORTED_MODULE_6__["Type"].Page;
        }
        this.route.queryParams
            .subscribe(function (params) {
            if (params.status === "published") {
                _this.published = true;
            }
            if (params.status === "draft") {
                _this.published = false;
            }
            _this.fetchPosts();
        });
    };
    PostsComponent.prototype.ngOnDestroy = function () { };
    PostsComponent.ctorParameters = function () { return [
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    PostsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "admin-posts",
            template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/admin/posts/posts.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/admin/setting/setting.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/setting/setting.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/setting/setting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/setting/setting.component.ts ***!
  \****************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_models */ "./src/app/admin/_models/index.ts");







var SettingComponent = /** @class */ (function () {
    function SettingComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.setting = new _models__WEBPACK_IMPORTED_MODULE_6__["Setting"]();
        this.loading = false;
        this.success = false;
        this.form = this.fb.group({
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60)]],
            meta_title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60)]],
            meta_description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(160)],
        });
    }
    Object.defineProperty(SettingComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    SettingComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            var filtered = {};
            for (var key in this.form.value) {
                if (this.form.value[key]) {
                    filtered[key] = this.form.value[key];
                }
            }
            this.loading = true;
            this.http
                .post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/setting", this.form.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                _this.errors = err;
                _this.loading = false;
                return err;
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return new _models__WEBPACK_IMPORTED_MODULE_6__["Setting"](res); }))
                .subscribe(function (setting) {
                _this.setting = setting;
                _this.form.patchValue(_this.setting);
                _this.loading = false;
                _this.success = true;
                setTimeout(function () {
                    _this.success = false;
                }, 1000);
            });
        }
    };
    SettingComponent.prototype.onDelete = function () {
        var _this = this;
        if (!this.setting.exists) {
            return;
        }
        this.http
            .delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/setting")
            .subscribe(function (res) {
            if (res === true) {
                _this.setting = new _models__WEBPACK_IMPORTED_MODULE_6__["Setting"]();
                _this.form.reset();
            }
        });
    };
    SettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/setting")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return err; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return new _models__WEBPACK_IMPORTED_MODULE_6__["Setting"](res); }))
            .subscribe(function (setting) {
            _this.setting = setting;
            _this.form.patchValue(_this.setting);
        });
    };
    SettingComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    SettingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "admin-setting",
            template: __webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.scss */ "./src/app/admin/setting/setting.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/admin/tags/tags.component.scss":
/*!************************************************!*\
  !*** ./src/app/admin/tags/tags.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3RhZ3MvdGFncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/tags/tags.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/tags/tags.component.ts ***!
  \**********************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/admin/_services/index.ts");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/tags.service */ "./src/app/admin/_services/tags.service.ts");







var TagsComponent = /** @class */ (function () {
    function TagsComponent(tagsService, auth, fb) {
        var _this = this;
        this.tagsService = tagsService;
        this.auth = auth;
        this.fb = fb;
        this.createTag = false;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.form = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            slug: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: null,
        });
        this.tagsService.models$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$))
            .subscribe(function (tags) {
            _this.tags = tags;
        });
    }
    Object.defineProperty(TagsComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    TagsComponent.prototype.edit = function (tag) {
        this.createTag = false;
        this.form.reset();
        this.form.patchValue(tag);
        this.editTag = tag;
    };
    TagsComponent.prototype.update = function (i) {
        var _this = this;
        if (!this.form.valid || !this.editTag || !this.editTag.exists) {
            return;
        }
        this.tagsService
            .update(this.editTag.id, this.form.value)
            .subscribe(function (tag) {
            _this.tagsService.pushModel(tag, i);
            _this.editTag = undefined;
        });
    };
    TagsComponent.prototype.addCreateTagForm = function () {
        this.editTag = undefined;
        this.form.reset();
        this.createTag = true;
    };
    TagsComponent.prototype.create = function () {
        var _this = this;
        this.tagsService.create(this.form.value).subscribe(function (tag) {
            _this.tagsService.pushModel(tag);
            _this.createTag = false;
        });
    };
    TagsComponent.prototype.delete = function (i, id) {
        var _this = this;
        this.tagsService.delete(id).subscribe(function (res) {
            if (res === true) {
                _this.tagsService.deleteModel(i);
            }
        });
    };
    TagsComponent.prototype.onRefresh = function () {
        this.tagsService.pull();
    };
    TagsComponent.prototype.ngOnInit = function () { };
    TagsComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    };
    TagsComponent.ctorParameters = function () { return [
        { type: _services_tags_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    TagsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tags",
            template: __webpack_require__(/*! raw-loader!./tags.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/tags/tags.component.html"),
            styles: [__webpack_require__(/*! ./tags.component.scss */ "./src/app/admin/tags/tags.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_tags_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/create/create.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/users/create/create.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/users/create/create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/users/create/create.component.ts ***!
  \********************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_admin_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/admin/_models */ "./src/app/admin/_models/index.ts");
/* harmony import */ var _app_admin_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/admin/_services */ "./src/app/admin/_services/index.ts");
/* harmony import */ var _app_admin_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/admin/_services/users.service */ "./src/app/admin/_services/users.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var CreateComponent = /** @class */ (function () {
    function CreateComponent(auth, users, router) {
        this.auth = auth;
        this.users = users;
        this.router = router;
        this.loading = false;
        this.roles = [
            {
                name: "Writer",
                tag: _app_admin_models__WEBPACK_IMPORTED_MODULE_3__["Role"].Writer,
            },
        ];
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        if (this.auth.currentUserValue.isSuperAdmin()) {
            this.roles.push({ name: "Admin", tag: _app_admin_models__WEBPACK_IMPORTED_MODULE_3__["Role"].Admin });
            this.roles.push({ name: "SuperAdmin", tag: _app_admin_models__WEBPACK_IMPORTED_MODULE_3__["Role"].SuperAdmin });
        }
        else if (this.auth.currentUserValue.isAdmin()) {
            this.roles.push({ name: "Admin", tag: _app_admin_models__WEBPACK_IMPORTED_MODULE_3__["Role"].Admin });
        }
    }
    CreateComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.loading = true;
        this.users.create(value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
            _this.errors = err;
            _this.loading = false;
            return err;
        }))
            .subscribe(function (user) {
            _this.loading = false;
            _this.users.pushModel(user);
            _this.router.navigate(["admin/user/" + user.id]);
        });
    };
    CreateComponent.prototype.ngOnInit = function () { };
    CreateComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    };
    CreateComponent.ctorParameters = function () { return [
        { type: _app_admin_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _app_admin_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-create",
            template: __webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/users/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/admin/users/create/create.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_admin_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_admin_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/edit/edit.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/users/edit/edit.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/users/edit/edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/users/edit/edit.component.ts ***!
  \****************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_admin_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/admin/_models */ "./src/app/admin/_models/index.ts");
/* harmony import */ var _app_admin_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/admin/_services */ "./src/app/admin/_services/index.ts");
/* harmony import */ var _app_admin_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/admin/_services/users.service */ "./src/app/admin/_services/users.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var EditComponent = /** @class */ (function () {
    function EditComponent(users, route, router, auth) {
        this.users = users;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.roles = [
            {
                name: "Writer",
                tag: _app_admin_models__WEBPACK_IMPORTED_MODULE_3__["Role"].Writer,
            },
        ];
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.successMessages = [];
        this.loading = false;
        if (this.auth.currentUserValue.isSuperAdmin()) {
            this.roles.push({ name: "Admin", tag: _app_admin_models__WEBPACK_IMPORTED_MODULE_3__["Role"].Admin });
            this.roles.push({ name: "SuperAdmin", tag: _app_admin_models__WEBPACK_IMPORTED_MODULE_3__["Role"].SuperAdmin });
        }
        else if (this.auth.currentUserValue.isAdmin()) {
            this.roles.push({ name: "Admin", tag: _app_admin_models__WEBPACK_IMPORTED_MODULE_3__["Role"].Admin });
        }
    }
    EditComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.loading = true;
        this.users.update(this.user.id, value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
            _this.errors = err;
            _this.loading = false;
            return err;
        }))
            .subscribe(function (user) {
            _this.successMessages.push('User was updated successfully.');
            _this.loading = false;
            if (_this.auth.currentUserValue.id === user.id) {
                _this.auth.updateUserData();
            }
            _this.user = user;
        });
    };
    EditComponent.prototype.onDelete = function () {
        var _this = this;
        if (!this.user.exists) {
            return;
        }
        this.users.delete(this.user.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
            _this.errors = err;
            _this.loading = false;
            return err;
        }))
            .subscribe(function (res) {
            if (res === true) {
                _this.router.navigate(["admin/user"]);
            }
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroyed$))
            .subscribe(function (params) {
            if (!!params.id) {
                if (_this.auth.currentUserValue.isWriter() &&
                    +params.id !== _this.auth.currentUserValue.id) {
                    _this.router.navigate(["admin/user"]);
                }
                _this.users.find(params.id).then(function (val) {
                    _this.user = val;
                }, function () {
                    _this.router.navigate(["admin/user"]);
                });
            }
        });
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    };
    EditComponent.ctorParameters = function () { return [
        { type: _app_admin_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_admin_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "admin-user-edit",
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/users/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/admin/users/edit/edit.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_admin_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_admin_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/form/form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/users/form/form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/users/form/form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/users/form/form.component.ts ***!
  \****************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_admin_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/admin/_models */ "./src/app/admin/_models/index.ts");





var FormComponent = /** @class */ (function () {
    function FormComponent(fb) {
        this.fb = fb;
        this.success = false;
        this.isPassOptional = false;
        this.formChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.form = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            slug: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            website: [null],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    Object.defineProperty(FormComponent.prototype, "user", {
        set: function (user) {
            var _this = this;
            if (user.exists) {
                this.form.patchValue(user);
                this.form.markAsPristine();
                if (this.loading) {
                    this.success = true;
                    setTimeout(function () {
                        _this.success = false;
                    }, 1000);
                }
                if (!this.isPassOptional) {
                    this.f.password.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]);
                    this.f.password.updateValueAndValidity();
                    this.form.updateValueAndValidity();
                    this.isPassOptional = true;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    FormComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            var filtered = {};
            for (var key in this.form.value) {
                if (this.form.value[key]) {
                    filtered[key] = this.form.value[key];
                }
            }
            this.formChange.emit(filtered);
        }
    };
    FormComponent.prototype.onDelete = function () {
        this.delete.emit();
    };
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.ngOnDestroy = function () { };
    FormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormComponent.prototype, "formChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormComponent.prototype, "delete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], FormComponent.prototype, "loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], FormComponent.prototype, "roles", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_admin_models__WEBPACK_IMPORTED_MODULE_3__["User"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_admin_models__WEBPACK_IMPORTED_MODULE_3__["User"]])
    ], FormComponent.prototype, "user", null);
    FormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "admin-user-form",
            template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/users/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/admin/users/form/form.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/index.ts":
/*!**************************************!*\
  !*** ./src/app/admin/users/index.ts ***!
  \**************************************/
/*! exports provided: CreateComponent, EditComponent, FormComponent, UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create/create.component */ "./src/app/admin/users/create/create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return _create_create_component__WEBPACK_IMPORTED_MODULE_0__["CreateComponent"]; });

/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/admin/users/edit/edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"]; });

/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "./src/app/admin/users/form/form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"]; });

/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "./src/app/admin/users/users.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]; });







/***/ }),

/***/ "./src/app/admin/users/users.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/users/users.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/admin/_services/index.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/users.service */ "./src/app/admin/_services/users.service.ts");






var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService, auth) {
        var _this = this;
        this.usersService = usersService;
        this.auth = auth;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.usersService.models$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$))
            .subscribe(function (users) {
            _this.users = users;
        });
        this.currentUser = this.auth.currentUserValue;
    }
    UsersComponent.prototype.canUserEdit = function (model) {
        if (this.auth.currentUserValue.isSuperAdmin()) {
            return true;
        }
        else if (this.auth.currentUserValue.isAdmin() && !model.isSuperAdmin()) {
            return true;
        }
        else if (this.auth.currentUserValue.isWriter() &&
            this.auth.currentUserValue.id === model.id) {
            return true;
        }
        return false;
    };
    UsersComponent.prototype.onRefresh = function () {
        this.usersService.pull();
    };
    UsersComponent.prototype.ngOnInit = function () { };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-users",
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/admin/users/users.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es5.js.map