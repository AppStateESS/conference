/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"RegistrationHistory": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./javascript/RegistrationHistory/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/RegistrationHistory/index.jsx":
/*!**************************************************!*\
  !*** ./javascript/RegistrationHistory/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegistrationHistory; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _essappstate_react_waiting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @essappstate/react-waiting */ "./node_modules/@essappstate/react-waiting/build/index.js");
/* harmony import */ var _essappstate_react_waiting__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_essappstate_react_waiting__WEBPACK_IMPORTED_MODULE_8__);








function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





/* global $, visitorId */

var dateString = function dateString(value) {
  var date = new Date(value * 1000);
  return date.toDateString();
};

var RegistrationHistory = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RegistrationHistory, _React$Component);

  var _super = _createSuper(RegistrationHistory);

  function RegistrationHistory(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RegistrationHistory);

    _this = _super.call(this, props);
    _this.state = {
      listing: [],
      visitor: {},
      loading: true,
      message: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RegistrationHistory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.load();
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;

      $.ajax({
        url: './conference/Admin/Registration/visitor',
        data: {
          visitorId: this.props.visitorId
        },
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          if (!data.listing) {
            _this2.setState({
              message: 'Unable to connect',
              loading: false
            });
          } else {
            _this2.setState({
              listing: data.listing,
              loading: false,
              message: null,
              visitor: data.visitor
            });
          }
        },
        error: function error() {
          _this2.setState({
            message: 'Unable to connect',
            loading: false
          });
        }
      });
    }
  }, {
    key: "getListing",
    value: function getListing() {
      var content = this.state.listing.map(function (value, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
          key: key
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dropdown"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          className: "btn btn-outline-secondary btn-sm",
          id: "dropdownMenuButton"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "fas fa-bars"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dropdown-menu",
          "aria-labelledby": "dropdownMenuButton"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "conference/Admin/Payment/?registrationId=".concat(value.id),
          className: "dropdown-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "far fa-credit-card"
        }), "\xA0Payments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "conference/Admin/Guest/?registrationId=".concat(value.id),
          className: "dropdown-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "fas fa-users"
        }), "\xA0Guests"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
          className: "my-0"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "conference/Admin/Visitor/loginAs?visitorId=".concat(value.visitorId, "&amp;registrationId=").concat(value.id),
          className: "dropdown-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "fas fa-sign-in-alt"
        }), "\xA0Sign in as visitor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          className: "dropdown-item pointer",
          href: "conference/Admin/Supplement/add/?registrationId=".concat(value.id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "fas fa-plus"
        }), "\xA0Add guest or meals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "./conference/Admin/Log/visitor/?vid=".concat(value.visitorId),
          className: "dropdown-item pointer"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "fas fa-clipboard-list"
        }), "\xA0Log")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", null, value.completed === 1 ? 'Completed' : 'Incomplete'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", null, dateString(value.eventDate), " \u2013 ", value.sessionTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", null, "$", parseFloat(value.totalCost).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", null, "$", parseFloat(value.amountPaid).toFixed(2)));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
        className: "table table-striped"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, "Session"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, "Cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, "Paid")), content));
    }
  }, {
    key: "render",
    value: function render() {
      var message;

      if (this.state.message !== null) {
        message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "alert alert-danger"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "fas fa-exclamation-circle"
        }), "\xA0", this.state.message);
      }

      var content;

      if (this.state.loading) {
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_essappstate_react_waiting__WEBPACK_IMPORTED_MODULE_8___default.a, null);
      } else if (this.state.listing.length === 0) {
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "No registrations found for this account.");
      } else {
        content = this.getListing();
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Registrations for ", this.state.visitor.firstName, ' ', this.state.visitor.lastName), message, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, content));
    }
  }]);

  return RegistrationHistory;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);


RegistrationHistory.propTypes = {
  visitorId: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number
};
react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RegistrationHistory, {
  visitorId: visitorId
}), document.getElementById('RegistrationHistory'));

/***/ }),

/***/ "./node_modules/@essappstate/react-waiting/build/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@essappstate/react-waiting/build/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";e.exports=r(3)},function(e,t,r){e.exports=r(5)()},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u=r(1),c=r.n(u),a=function(e){var t;return t=0===e.message.length?o.a.createElement("span",null,"Loading ",e.label,"..."):e.message,o.a.createElement("div",{className:"lead text-center"},o.a.createElement("i",{className:"fa fa-cog fa-spin fa-lg"})," ",t)};a.propTypes={label:c.a.string,message:c.a.string},a.defaultProps={message:"",label:""},t.default=a},function(e,t,r){"use strict";
/** @license React v16.9.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(4),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var v="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_={};function S(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||g}function O(){}function j(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||g}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw h(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=S.prototype;var w=j.prototype=new O;w.constructor=j,n(w,S.prototype),w.isPureReactComponent=!0;var P={current:null},k={suspense:null},x={current:null},E=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,r){var n=void 0,o={},c=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var i=Array(l),f=0;f<l;f++)i[f]=arguments[f+2];o.children=i}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:u,type:e,key:c,ref:a,props:o,_owner:x.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var T=/\/+/g,I=[];function A(e,t,r,n){if(I.length){var o=I.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function L(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function M(e,t,r){return null==e?0:function e(t,r,n,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var l=!1;if(null===t)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case u:case c:l=!0}}if(l)return n(o,t,""===r?"."+U(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var i=0;i<t.length;i++){var f=r+U(a=t[i],i);l+=e(a,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),i=0;!(a=t.next()).done;)l+=e(a=a.value,f=r+U(a,i++),n,o);else if("object"===a)throw n=""+t,h(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return l}(e,"",t,r)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function N(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,n,r,function(e){return e}):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+r)),n.push(e))}function D(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(T,"$&/")+"/"),M(e,N,t=A(t,u,n,o)),L(t)}function F(){var e=P.current;if(null===e)throw h(Error(321));return e}var V={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return D(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,q,t=A(null,null,t,r)),L(t)},count:function(e){return M(e,function(){return null},null)},toArray:function(e){var t=[];return D(e,t,null,function(e){return e}),t},only:function(e){if(!$(e))throw h(Error(143));return e}},createRef:function(){return{current:null}},Component:S,PureComponent:j,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:a,Profiler:i,StrictMode:l,Suspense:y,unstable_SuspenseList:d,createElement:R,cloneElement:function(e,t,r){if(null==e)throw h(Error(267),e);var o=void 0,c=n({},e.props),a=e.key,l=e.ref,i=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,i=x.current),void 0!==t.key&&(a=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)E.call(t,o)&&!C.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))c.children=r;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];c.children=f}return{$$typeof:u,type:e.type,key:a,ref:l,props:c,_owner:i}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var r=k.suspense;k.suspense=void 0===t?null:t;try{e()}finally{k.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:P,ReactCurrentBatchConfig:k,ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n}},B={default:V},W=B&&V||B;e.exports=W.default||W},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,a,l=c(e),i=1;i<arguments.length;i++){for(var f in r=Object(arguments[i]))o.call(r,f)&&(l[f]=r[f]);if(n){a=n(r);for(var s=0;s<a.length;s++)u.call(r,a[s])&&(l[a[s]]=r[a[s]])}}return l}},function(e,t,r){"use strict";var n=r(6);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,c){if(c!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9SZWdpc3RyYXRpb25IaXN0b3J5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVzc2FwcHN0YXRlL3JlYWN0LXdhaXRpbmcvYnVpbGQvaW5kZXguanMiXSwibmFtZXMiOlsiZGF0ZVN0cmluZyIsInZhbHVlIiwiZGF0ZSIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJSZWdpc3RyYXRpb25IaXN0b3J5IiwicHJvcHMiLCJzdGF0ZSIsImxpc3RpbmciLCJ2aXNpdG9yIiwibG9hZGluZyIsIm1lc3NhZ2UiLCJsb2FkIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwidmlzaXRvcklkIiwiZGF0YVR5cGUiLCJ0eXBlIiwic3VjY2VzcyIsInNldFN0YXRlIiwiZXJyb3IiLCJjb250ZW50IiwibWFwIiwia2V5IiwiaWQiLCJjb21wbGV0ZWQiLCJldmVudERhdGUiLCJzZXNzaW9uVGl0bGUiLCJwYXJzZUZsb2F0IiwidG90YWxDb3N0IiwidG9GaXhlZCIsImFtb3VudFBhaWQiLCJsZW5ndGgiLCJnZXRMaXN0aW5nIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJB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MEJBQTBCLDJCQUEyQix5QkFBeUIsMEJBQTBCLHFDQUFxQyxzQ0FBc0MsMkJBQTJCLCtCQUErQixnQ0FBZ0MsdUJBQXVCLHdCQUF3Qiw0QkFBNEIsNkJBQTZCLG9CQUFvQixxQkFBcUIsc0JBQXNCLHVCQUF1QixvSEFBb0gsaUNBQWlDLG1CQUFtQixxQ0FBcUMsWUFBWSxtRUFBbUUsYUFBYSw4SUFBOEksMkNBQTJDLGFBQWEsV0FBVyxZQUFZLElBQUksd0JBQXdCLGFBQWEsT0FBTyxxREFBcUQsMkJBQTJCLHFCQUFxQixrQkFBa0IsNkVBQTZFLGlCQUFpQiw2QkFBNkIsSUFBSSxJQUFJLFFBQVEsY0FBYyxxREFBcUQsNkZBQTZGLFdBQVcsV0FBVyxJQUFJLFVBQVUsV0FBVyx1QkFBdUIsaUJBQWlCO0FBQ3IwTTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtHQUErRyxjQUFjLHdGQUF3RixpQkFBaUIscUJBQXFCLElBQUksMkJBQTJCLHdCQUF3Qiw2REFBNkQsWUFBWSxLQUFLLEtBQUssb0NBQW9DLGdFQUFnRSxZQUFZLG9CQUFvQixTQUFTLDJEQUEyRCxPQUFPLHVEQUF1RCxjQUFjLFNBQVMsVUFBVSwrQkFBK0IsdUJBQXVCLG1CQUFtQixLQUFLLDZEQUE2RCxNQUFNLE9BQU8sWUFBWSxXQUFXLHVDQUF1QyxVQUFVLGlCQUFpQixhQUFhLFdBQVcsY0FBYyxjQUFjLDJDQUEyQyx3QkFBd0IsVUFBVSxtTUFBbU0sc0NBQXNDLGFBQWEsU0FBUyxlQUFlLE9BQU8sMk1BQTJNLHdCQUF3QixpQkFBaUIsYUFBYSx5REFBeUQsRyIsImZpbGUiOiJSZWdpc3RyYXRpb25IaXN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIlJlZ2lzdHJhdGlvbkhpc3RvcnlcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2phdmFzY3JpcHQvUmVnaXN0cmF0aW9uSGlzdG9yeS9pbmRleC5qc3hcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBXYWl0aW5nIGZyb20gJ0Blc3NhcHBzdGF0ZS9yZWFjdC13YWl0aW5nJ1xuXG4vKiBnbG9iYWwgJCwgdmlzaXRvcklkICovXG5cbmNvbnN0IGRhdGVTdHJpbmcgPSB2YWx1ZSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSAqIDEwMDApXG4gIHJldHVybiBkYXRlLnRvRGF0ZVN0cmluZygpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdHJhdGlvbkhpc3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0aW5nOiBbXSxcbiAgICAgIHZpc2l0b3I6IHt9LFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IG51bGxcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5sb2FkKClcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy4vY29uZmVyZW5jZS9BZG1pbi9SZWdpc3RyYXRpb24vdmlzaXRvcicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHZpc2l0b3JJZDogdGhpcy5wcm9wcy52aXNpdG9ySWRcbiAgICAgIH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgaWYgKCFkYXRhLmxpc3RpbmcpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiAnVW5hYmxlIHRvIGNvbm5lY3QnLCBsb2FkaW5nOiBmYWxzZX0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsaXN0aW5nOiBkYXRhLmxpc3RpbmcsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICB2aXNpdG9yOiBkYXRhLnZpc2l0b3JcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJ1VuYWJsZSB0byBjb25uZWN0JywgbG9hZGluZzogZmFsc2V9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXRMaXN0aW5nKCkge1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5zdGF0ZS5saXN0aW5nLm1hcCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRyIGtleT17a2V5fT5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIlxuICAgICAgICAgICAgICAgIGlkPVwiZHJvcGRvd25NZW51QnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtgY29uZmVyZW5jZS9BZG1pbi9QYXltZW50Lz9yZWdpc3RyYXRpb25JZD0ke3ZhbHVlLmlkfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY3JlZGl0LWNhcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7UGF5bWVudHNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2Bjb25mZXJlbmNlL0FkbWluL0d1ZXN0Lz9yZWdpc3RyYXRpb25JZD0ke3ZhbHVlLmlkfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7R3Vlc3RzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS0wXCIgLz5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YGNvbmZlcmVuY2UvQWRtaW4vVmlzaXRvci9sb2dpbkFzP3Zpc2l0b3JJZD0ke3ZhbHVlLnZpc2l0b3JJZH0mYW1wO3JlZ2lzdHJhdGlvbklkPSR7dmFsdWUuaWR9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaWduLWluLWFsdFwiIC8+XG4gICAgICAgICAgICAgICAgICAmbmJzcDtTaWduIGluIGFzIHZpc2l0b3JcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICBocmVmPXtgY29uZmVyZW5jZS9BZG1pbi9TdXBwbGVtZW50L2FkZC8/cmVnaXN0cmF0aW9uSWQ9JHt2YWx1ZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCI+PC9pPiZuYnNwO0FkZCBndWVzdCBvciBtZWFsc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YC4vY29uZmVyZW5jZS9BZG1pbi9Mb2cvdmlzaXRvci8/dmlkPSR7dmFsdWUudmlzaXRvcklkfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbGlwYm9hcmQtbGlzdFwiPjwvaT4mbmJzcDtMb2dcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQ+e3ZhbHVlLmNvbXBsZXRlZCA9PT0gMSA/ICdDb21wbGV0ZWQnIDogJ0luY29tcGxldGUnfTwvdGQ+XG5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICB7ZGF0ZVN0cmluZyh2YWx1ZS5ldmVudERhdGUpfSAmbmRhc2g7IHt2YWx1ZS5zZXNzaW9uVGl0bGV9XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQ+JHtwYXJzZUZsb2F0KHZhbHVlLnRvdGFsQ29zdCkudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgIDx0ZD4ke3BhcnNlRmxvYXQodmFsdWUuYW1vdW50UGFpZCkudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Jm5ic3A7PC90aD5cbiAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgPHRoPlNlc3Npb248L3RoPlxuICAgICAgICAgICAgPHRoPkNvc3Q8L3RoPlxuICAgICAgICAgICAgPHRoPlBhaWQ8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbWVzc2FnZVxuICAgIGlmICh0aGlzLnN0YXRlLm1lc3NhZ2UgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiIC8+XG4gICAgICAgICAgJm5ic3A7e3RoaXMuc3RhdGUubWVzc2FnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIGxldCBjb250ZW50XG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgY29udGVudCA9IDxXYWl0aW5nIC8+XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmxpc3RpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb250ZW50ID0gPHA+Tm8gcmVnaXN0cmF0aW9ucyBmb3VuZCBmb3IgdGhpcyBhY2NvdW50LjwvcD5cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IHRoaXMuZ2V0TGlzdGluZygpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+XG4gICAgICAgICAgUmVnaXN0cmF0aW9ucyBmb3Ige3RoaXMuc3RhdGUudmlzaXRvci5maXJzdE5hbWV9eycgJ31cbiAgICAgICAgICB7dGhpcy5zdGF0ZS52aXNpdG9yLmxhc3ROYW1lfVxuICAgICAgICA8L2gyPlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgPGRpdj57Y29udGVudH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWdpc3RyYXRpb25IaXN0b3J5LnByb3BUeXBlcyA9IHtcbiAgdmlzaXRvcklkOiBQcm9wVHlwZXMubnVtYmVyXG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFJlZ2lzdHJhdGlvbkhpc3RvcnkgdmlzaXRvcklkPXt2aXNpdG9ySWR9IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVnaXN0cmF0aW9uSGlzdG9yeScpXG4pXG4iLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiByKG4pe2lmKHRbbl0pcmV0dXJuIHRbbl0uZXhwb3J0czt2YXIgbz10W25dPXtpOm4sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtuXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxyKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiByLm09ZSxyLmM9dCxyLmQ9ZnVuY3Rpb24oZSx0LG4pe3IubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LHIucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPXIoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIobiksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpci5kKG4sbyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG8pKTtyZXR1cm4gbn0sci5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiByLmQodCxcImFcIix0KSx0fSxyLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHIucD1cIlwiLHIoci5zPTIpfShbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1yKDMpfSxmdW5jdGlvbihlLHQscil7ZS5leHBvcnRzPXIoNSkoKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3Iucih0KTt2YXIgbj1yKDApLG89ci5uKG4pLHU9cigxKSxjPXIubih1KSxhPWZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiB0PTA9PT1lLm1lc3NhZ2UubGVuZ3RoP28uYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLG51bGwsXCJMb2FkaW5nIFwiLGUubGFiZWwsXCIuLi5cIik6ZS5tZXNzYWdlLG8uYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImxlYWQgdGV4dC1jZW50ZXJcIn0sby5hLmNyZWF0ZUVsZW1lbnQoXCJpXCIse2NsYXNzTmFtZTpcImZhIGZhLWNvZyBmYS1zcGluIGZhLWxnXCJ9KSxcIsKgXCIsdCl9O2EucHJvcFR5cGVzPXtsYWJlbDpjLmEuc3RyaW5nLG1lc3NhZ2U6Yy5hLnN0cmluZ30sYS5kZWZhdWx0UHJvcHM9e21lc3NhZ2U6XCJcIixsYWJlbDpcIlwifSx0LmRlZmF1bHQ9YX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO1xuLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi45LjBcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi92YXIgbj1yKDQpLG89XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLHU9bz9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxjPW8/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixhPW8/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGw9bz9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsaT1vP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxmPW8/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LHM9bz9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxwPW8/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLHk9bz9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMsZD1vP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpOjYwMTIwLG09bz9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTo2MDExNSxiPW8/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTY7byYmU3ltYm9sLmZvcihcInJlYWN0LmZ1bmRhbWVudGFsXCIpLG8mJlN5bWJvbC5mb3IoXCJyZWFjdC5yZXNwb25kZXJcIik7dmFyIHY9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gaChlKXtmb3IodmFyIHQ9ZS5tZXNzYWdlLHI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIit0LG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW25dKTtyZXR1cm4gZS5tZXNzYWdlPVwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK3QrXCI7IHZpc2l0IFwiK3IrXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLiBcIixlfXZhciBnPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxfPXt9O2Z1bmN0aW9uIFMoZSx0LHIpe3RoaXMucHJvcHM9ZSx0aGlzLmNvbnRleHQ9dCx0aGlzLnJlZnM9Xyx0aGlzLnVwZGF0ZXI9cnx8Z31mdW5jdGlvbiBPKCl7fWZ1bmN0aW9uIGooZSx0LHIpe3RoaXMucHJvcHM9ZSx0aGlzLmNvbnRleHQ9dCx0aGlzLnJlZnM9Xyx0aGlzLnVwZGF0ZXI9cnx8Z31TLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFMucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPWUpdGhyb3cgaChFcnJvcig4NSkpO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxlLHQsXCJzZXRTdGF0ZVwiKX0sUy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oZSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGUsXCJmb3JjZVVwZGF0ZVwiKX0sTy5wcm90b3R5cGU9Uy5wcm90b3R5cGU7dmFyIHc9ai5wcm90b3R5cGU9bmV3IE87dy5jb25zdHJ1Y3Rvcj1qLG4odyxTLnByb3RvdHlwZSksdy5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgUD17Y3VycmVudDpudWxsfSxrPXtzdXNwZW5zZTpudWxsfSx4PXtjdXJyZW50Om51bGx9LEU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxDPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07ZnVuY3Rpb24gUihlLHQscil7dmFyIG49dm9pZCAwLG89e30sYz1udWxsLGE9bnVsbDtpZihudWxsIT10KWZvcihuIGluIHZvaWQgMCE9PXQucmVmJiYoYT10LnJlZiksdm9pZCAwIT09dC5rZXkmJihjPVwiXCIrdC5rZXkpLHQpRS5jYWxsKHQsbikmJiFDLmhhc093blByb3BlcnR5KG4pJiYob1tuXT10W25dKTt2YXIgbD1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWwpby5jaGlsZHJlbj1yO2Vsc2UgaWYoMTxsKXtmb3IodmFyIGk9QXJyYXkobCksZj0wO2Y8bDtmKyspaVtmXT1hcmd1bWVudHNbZisyXTtvLmNoaWxkcmVuPWl9aWYoZSYmZS5kZWZhdWx0UHJvcHMpZm9yKG4gaW4gbD1lLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1vW25dJiYob1tuXT1sW25dKTtyZXR1cm57JCR0eXBlb2Y6dSx0eXBlOmUsa2V5OmMscmVmOmEscHJvcHM6byxfb3duZXI6eC5jdXJyZW50fX1mdW5jdGlvbiAkKGUpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSYmZS4kJHR5cGVvZj09PXV9dmFyIFQ9L1xcLysvZyxJPVtdO2Z1bmN0aW9uIEEoZSx0LHIsbil7aWYoSS5sZW5ndGgpe3ZhciBvPUkucG9wKCk7cmV0dXJuIG8ucmVzdWx0PWUsby5rZXlQcmVmaXg9dCxvLmZ1bmM9cixvLmNvbnRleHQ9bixvLmNvdW50PTAsb31yZXR1cm57cmVzdWx0OmUsa2V5UHJlZml4OnQsZnVuYzpyLGNvbnRleHQ6bixjb3VudDowfX1mdW5jdGlvbiBMKGUpe2UucmVzdWx0PW51bGwsZS5rZXlQcmVmaXg9bnVsbCxlLmZ1bmM9bnVsbCxlLmNvbnRleHQ9bnVsbCxlLmNvdW50PTAsMTA+SS5sZW5ndGgmJkkucHVzaChlKX1mdW5jdGlvbiBNKGUsdCxyKXtyZXR1cm4gbnVsbD09ZT8wOmZ1bmN0aW9uIGUodCxyLG4sbyl7dmFyIGE9dHlwZW9mIHQ7XCJ1bmRlZmluZWRcIiE9PWEmJlwiYm9vbGVhblwiIT09YXx8KHQ9bnVsbCk7dmFyIGw9ITE7aWYobnVsbD09PXQpbD0hMDtlbHNlIHN3aXRjaChhKXtjYXNlXCJzdHJpbmdcIjpjYXNlXCJudW1iZXJcIjpsPSEwO2JyZWFrO2Nhc2VcIm9iamVjdFwiOnN3aXRjaCh0LiQkdHlwZW9mKXtjYXNlIHU6Y2FzZSBjOmw9ITB9fWlmKGwpcmV0dXJuIG4obyx0LFwiXCI9PT1yP1wiLlwiK1UodCwwKTpyKSwxO2lmKGw9MCxyPVwiXCI9PT1yP1wiLlwiOnIrXCI6XCIsQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIGY9citVKGE9dFtpXSxpKTtsKz1lKGEsZixuLG8pfWVsc2UgaWYobnVsbD09PXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0P2Y9bnVsbDpmPVwiZnVuY3Rpb25cIj09dHlwZW9mKGY9diYmdFt2XXx8dFtcIkBAaXRlcmF0b3JcIl0pP2Y6bnVsbCxcImZ1bmN0aW9uXCI9PXR5cGVvZiBmKWZvcih0PWYuY2FsbCh0KSxpPTA7IShhPXQubmV4dCgpKS5kb25lOylsKz1lKGE9YS52YWx1ZSxmPXIrVShhLGkrKyksbixvKTtlbHNlIGlmKFwib2JqZWN0XCI9PT1hKXRocm93IG49XCJcIit0LGgoRXJyb3IoMzEpLFwiW29iamVjdCBPYmplY3RdXCI9PT1uP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXModCkuam9pbihcIiwgXCIpK1wifVwiOm4sXCJcIik7cmV0dXJuIGx9KGUsXCJcIix0LHIpfWZ1bmN0aW9uIFUoZSx0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9PWUmJm51bGwhPWUua2V5P2Z1bmN0aW9uKGUpe3ZhciB0PXtcIj1cIjpcIj0wXCIsXCI6XCI6XCI9MlwifTtyZXR1cm5cIiRcIisoXCJcIitlKS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19KX0oZS5rZXkpOnQudG9TdHJpbmcoMzYpfWZ1bmN0aW9uIHEoZSx0KXtlLmZ1bmMuY2FsbChlLmNvbnRleHQsdCxlLmNvdW50KyspfWZ1bmN0aW9uIE4oZSx0LHIpe3ZhciBuPWUucmVzdWx0LG89ZS5rZXlQcmVmaXg7ZT1lLmZ1bmMuY2FsbChlLmNvbnRleHQsdCxlLmNvdW50KyspLEFycmF5LmlzQXJyYXkoZSk/RChlLG4scixmdW5jdGlvbihlKXtyZXR1cm4gZX0pOm51bGwhPWUmJigkKGUpJiYoZT1mdW5jdGlvbihlLHQpe3JldHVybnskJHR5cGVvZjp1LHR5cGU6ZS50eXBlLGtleTp0LHJlZjplLnJlZixwcm9wczplLnByb3BzLF9vd25lcjplLl9vd25lcn19KGUsbysoIWUua2V5fHx0JiZ0LmtleT09PWUua2V5P1wiXCI6KFwiXCIrZS5rZXkpLnJlcGxhY2UoVCxcIiQmL1wiKStcIi9cIikrcikpLG4ucHVzaChlKSl9ZnVuY3Rpb24gRChlLHQscixuLG8pe3ZhciB1PVwiXCI7bnVsbCE9ciYmKHU9KFwiXCIrcikucmVwbGFjZShULFwiJCYvXCIpK1wiL1wiKSxNKGUsTix0PUEodCx1LG4sbykpLEwodCl9ZnVuY3Rpb24gRigpe3ZhciBlPVAuY3VycmVudDtpZihudWxsPT09ZSl0aHJvdyBoKEVycm9yKDMyMSkpO3JldHVybiBlfXZhciBWPXtDaGlsZHJlbjp7bWFwOmZ1bmN0aW9uKGUsdCxyKXtpZihudWxsPT1lKXJldHVybiBlO3ZhciBuPVtdO3JldHVybiBEKGUsbixudWxsLHQsciksbn0sZm9yRWFjaDpmdW5jdGlvbihlLHQscil7aWYobnVsbD09ZSlyZXR1cm4gZTtNKGUscSx0PUEobnVsbCxudWxsLHQscikpLEwodCl9LGNvdW50OmZ1bmN0aW9uKGUpe3JldHVybiBNKGUsZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sbnVsbCl9LHRvQXJyYXk6ZnVuY3Rpb24oZSl7dmFyIHQ9W107cmV0dXJuIEQoZSx0LG51bGwsZnVuY3Rpb24oZSl7cmV0dXJuIGV9KSx0fSxvbmx5OmZ1bmN0aW9uKGUpe2lmKCEkKGUpKXRocm93IGgoRXJyb3IoMTQzKSk7cmV0dXJuIGV9fSxjcmVhdGVSZWY6ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX0sQ29tcG9uZW50OlMsUHVyZUNvbXBvbmVudDpqLGNyZWF0ZUNvbnRleHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9bnVsbCksKGU9eyQkdHlwZW9mOnMsX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOnQsX2N1cnJlbnRWYWx1ZTplLF9jdXJyZW50VmFsdWUyOmUsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsfSkuUHJvdmlkZXI9eyQkdHlwZW9mOmYsX2NvbnRleHQ6ZX0sZS5Db25zdW1lcj1lfSxmb3J3YXJkUmVmOmZ1bmN0aW9uKGUpe3JldHVybnskJHR5cGVvZjpwLHJlbmRlcjplfX0sbGF6eTpmdW5jdGlvbihlKXtyZXR1cm57JCR0eXBlb2Y6YixfY3RvcjplLF9zdGF0dXM6LTEsX3Jlc3VsdDpudWxsfX0sbWVtbzpmdW5jdGlvbihlLHQpe3JldHVybnskJHR5cGVvZjptLHR5cGU6ZSxjb21wYXJlOnZvaWQgMD09PXQ/bnVsbDp0fX0sdXNlQ2FsbGJhY2s6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gRigpLnVzZUNhbGxiYWNrKGUsdCl9LHVzZUNvbnRleHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gRigpLnVzZUNvbnRleHQoZSx0KX0sdXNlRWZmZWN0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIEYoKS51c2VFZmZlY3QoZSx0KX0sdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihlLHQscil7cmV0dXJuIEYoKS51c2VJbXBlcmF0aXZlSGFuZGxlKGUsdCxyKX0sdXNlRGVidWdWYWx1ZTpmdW5jdGlvbigpe30sdXNlTGF5b3V0RWZmZWN0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIEYoKS51c2VMYXlvdXRFZmZlY3QoZSx0KX0sdXNlTWVtbzpmdW5jdGlvbihlLHQpe3JldHVybiBGKCkudXNlTWVtbyhlLHQpfSx1c2VSZWR1Y2VyOmZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gRigpLnVzZVJlZHVjZXIoZSx0LHIpfSx1c2VSZWY6ZnVuY3Rpb24oZSl7cmV0dXJuIEYoKS51c2VSZWYoZSl9LHVzZVN0YXRlOmZ1bmN0aW9uKGUpe3JldHVybiBGKCkudXNlU3RhdGUoZSl9LEZyYWdtZW50OmEsUHJvZmlsZXI6aSxTdHJpY3RNb2RlOmwsU3VzcGVuc2U6eSx1bnN0YWJsZV9TdXNwZW5zZUxpc3Q6ZCxjcmVhdGVFbGVtZW50OlIsY2xvbmVFbGVtZW50OmZ1bmN0aW9uKGUsdCxyKXtpZihudWxsPT1lKXRocm93IGgoRXJyb3IoMjY3KSxlKTt2YXIgbz12b2lkIDAsYz1uKHt9LGUucHJvcHMpLGE9ZS5rZXksbD1lLnJlZixpPWUuX293bmVyO2lmKG51bGwhPXQpe3ZvaWQgMCE9PXQucmVmJiYobD10LnJlZixpPXguY3VycmVudCksdm9pZCAwIT09dC5rZXkmJihhPVwiXCIrdC5rZXkpO3ZhciBmPXZvaWQgMDtmb3IobyBpbiBlLnR5cGUmJmUudHlwZS5kZWZhdWx0UHJvcHMmJihmPWUudHlwZS5kZWZhdWx0UHJvcHMpLHQpRS5jYWxsKHQsbykmJiFDLmhhc093blByb3BlcnR5KG8pJiYoY1tvXT12b2lkIDA9PT10W29dJiZ2b2lkIDAhPT1mP2Zbb106dFtvXSl9aWYoMT09PShvPWFyZ3VtZW50cy5sZW5ndGgtMikpYy5jaGlsZHJlbj1yO2Vsc2UgaWYoMTxvKXtmPUFycmF5KG8pO2Zvcih2YXIgcz0wO3M8bztzKyspZltzXT1hcmd1bWVudHNbcysyXTtjLmNoaWxkcmVuPWZ9cmV0dXJueyQkdHlwZW9mOnUsdHlwZTplLnR5cGUsa2V5OmEscmVmOmwscHJvcHM6Yyxfb3duZXI6aX19LGNyZWF0ZUZhY3Rvcnk6ZnVuY3Rpb24oZSl7dmFyIHQ9Ui5iaW5kKG51bGwsZSk7cmV0dXJuIHQudHlwZT1lLHR9LGlzVmFsaWRFbGVtZW50OiQsdmVyc2lvbjpcIjE2LjkuMFwiLHVuc3RhYmxlX3dpdGhTdXNwZW5zZUNvbmZpZzpmdW5jdGlvbihlLHQpe3ZhciByPWsuc3VzcGVuc2U7ay5zdXNwZW5zZT12b2lkIDA9PT10P251bGw6dDt0cnl7ZSgpfWZpbmFsbHl7ay5zdXNwZW5zZT1yfX0sX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6UCxSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzprLFJlYWN0Q3VycmVudE93bmVyOngsSXNTb21lUmVuZGVyZXJBY3Rpbmc6e2N1cnJlbnQ6ITF9LGFzc2lnbjpufX0sQj17ZGVmYXVsdDpWfSxXPUImJlZ8fEI7ZS5leHBvcnRzPVcuZGVmYXVsdHx8V30sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO1xuLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovdmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxvPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksdT1PYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO2Z1bmN0aW9uIGMoZSl7aWYobnVsbD09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWRcIik7cmV0dXJuIE9iamVjdChlKX1lLmV4cG9ydHM9ZnVuY3Rpb24oKXt0cnl7aWYoIU9iamVjdC5hc3NpZ24pcmV0dXJuITE7dmFyIGU9bmV3IFN0cmluZyhcImFiY1wiKTtpZihlWzVdPVwiZGVcIixcIjVcIj09PU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpWzBdKXJldHVybiExO2Zvcih2YXIgdD17fSxyPTA7cjwxMDtyKyspdFtcIl9cIitTdHJpbmcuZnJvbUNoYXJDb2RlKHIpXT1yO2lmKFwiMDEyMzQ1Njc4OVwiIT09T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModCkubWFwKGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfSkuam9pbihcIlwiKSlyZXR1cm4hMTt2YXIgbj17fTtyZXR1cm5cImFiY2RlZmdoaWprbG1ub3BxcnN0XCIuc3BsaXQoXCJcIikuZm9yRWFjaChmdW5jdGlvbihlKXtuW2VdPWV9KSxcImFiY2RlZmdoaWprbG1ub3BxcnN0XCI9PT1PYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LG4pKS5qb2luKFwiXCIpfWNhdGNoKGUpe3JldHVybiExfX0oKT9PYmplY3QuYXNzaWduOmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciByLGEsbD1jKGUpLGk9MTtpPGFyZ3VtZW50cy5sZW5ndGg7aSsrKXtmb3IodmFyIGYgaW4gcj1PYmplY3QoYXJndW1lbnRzW2ldKSlvLmNhbGwocixmKSYmKGxbZl09cltmXSk7aWYobil7YT1uKHIpO2Zvcih2YXIgcz0wO3M8YS5sZW5ndGg7cysrKXUuY2FsbChyLGFbc10pJiYobFthW3NdXT1yW2Fbc11dKX19cmV0dXJuIGx9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49cig2KTtmdW5jdGlvbiBvKCl7fWZ1bmN0aW9uIHUoKXt9dS5yZXNldFdhcm5pbmdDYWNoZT1vLGUuZXhwb3J0cz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LHIsbyx1LGMpe2lmKGMhPT1uKXt2YXIgYT1uZXcgRXJyb3IoXCJDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiBVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiBSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzXCIpO3Rocm93IGEubmFtZT1cIkludmFyaWFudCBWaW9sYXRpb25cIixhfX1mdW5jdGlvbiB0KCl7cmV0dXJuIGV9ZS5pc1JlcXVpcmVkPWU7dmFyIHI9e2FycmF5OmUsYm9vbDplLGZ1bmM6ZSxudW1iZXI6ZSxvYmplY3Q6ZSxzdHJpbmc6ZSxzeW1ib2w6ZSxhbnk6ZSxhcnJheU9mOnQsZWxlbWVudDplLGVsZW1lbnRUeXBlOmUsaW5zdGFuY2VPZjp0LG5vZGU6ZSxvYmplY3RPZjp0LG9uZU9mOnQsb25lT2ZUeXBlOnQsc2hhcGU6dCxleGFjdDp0LGNoZWNrUHJvcFR5cGVzOnUscmVzZXRXYXJuaW5nQ2FjaGU6b307cmV0dXJuIHIuUHJvcFR5cGVzPXIscn19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9XCJTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRFwifV0pOyJdLCJzb3VyY2VSb290IjoiIn0=