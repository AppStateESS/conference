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
/******/ 		"ServiceSettings": 0
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
/******/ 	deferredModules.push(["./javascript/ServiceSettings/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/ServiceSettings/SystemService.js":
/*!*****************************************************!*\
  !*** ./javascript/ServiceSettings/SystemService.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var SystemService = function SystemService(_ref) {
  var service = _ref.service;

  if (service.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "No service set"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To use online billing, you will need to specify a payment service in the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "conf\\defines.php"), " file."));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Payment service: ", service);
  }
};

SystemService.propTypes = {
  service: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SystemService);

/***/ }),

/***/ "./javascript/ServiceSettings/index.jsx":
/*!**********************************************!*\
  !*** ./javascript/ServiceSettings/index.jsx ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _essappstate_canopy_listing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @essappstate/canopy-listing */ "./node_modules/@essappstate/canopy-listing/build/index.js");
/* harmony import */ var _essappstate_canopy_listing__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_essappstate_canopy_listing__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _SystemService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SystemService */ "./javascript/ServiceSettings/SystemService.js");
/* harmony import */ var _essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @essappstate/canopy-react-bigcheckbox */ "./node_modules/@essappstate/canopy-react-bigcheckbox/build/index.js");
/* harmony import */ var _essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @essappstate/react-navbar */ "./node_modules/@essappstate/react-navbar/build/index.js");
/* harmony import */ var _essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _service_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service.css */ "./javascript/ServiceSettings/service.css");
/* harmony import */ var _service_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_service_css__WEBPACK_IMPORTED_MODULE_13__);










function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








/* global $, service, success, cancel */

var ServiceSettings = /*#__PURE__*/function (_Listing) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ServiceSettings, _Listing);

  var _super = _createSuper(ServiceSettings);

  function ServiceSettings(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ServiceSettings);

    _this = _super.call(this, props);
    _this.restUrl = 'conference/Admin/Account/';
    _this.label = 'Service account';
    _this.defaultResource = {
      id: 0,
      title: '',
      url: '',
      accountId: '',
      validateSend: '',
      validateSendActive: 0,
      validateResponse: '',
      validateResponseActive: 0,
      restrictIp: ''
    };
    _this.serviceVariables = null;
    _this.successRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.cancelRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();

    var dropdown = function dropdown(key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        className: "btn btn-outline-secondary btn-sm",
        id: "dropdownMenuButton"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-bars"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "dropdown-item pointer",
        href: "#",
        onClick: _this.editResource.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), key)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-edit"
      }), "\xA0Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "dropdown-item pointer",
        href: "#",
        onClick: _this.deleteResource.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), key)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-trash"
      }), "\xA0Delete")));
    };

    _this.columns = [{
      column: 'options',
      callback: function callback(row, key) {
        return dropdown(key);
      },
      style: {
        width: '10%'
      }
    }, {
      column: 'title',
      label: 'Title',
      sort: true
    }, {
      column: 'accountId',
      label: 'Account id',
      sort: true
    }, {
      column: 'validateSendActive',
      label: 'Validate send',
      callback: function callback(row) {
        return row.validateSendActive === 1 ? 'Yes' : 'No';
      }
    }, {
      column: 'validateResponseActive',
      label: 'Validate response',
      callback: function callback(row, key) {
        return row.validateResponseActive === 1 ? 'Yes' : 'No';
      }
    }];
    _this.state.serviceInfo = {};
    _this.state.resource = Object.assign({}, _this.defaultResource);
    _this.updateFile = _this.updateFile.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.copySuccess = _this.copySuccess.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.copyCancel = _this.copyCancel.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.viewVariables = _this.viewVariables.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ServiceSettings, [{
    key: "reset",
    value: function reset() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ServiceSettings.prototype), "reset", this).call(this);

      this.state.serviceInfo = {};
    }
  }, {
    key: "updateCheck",
    value: function updateCheck(param, value) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ServiceSettings.prototype), "update", this).call(this, param, value ? 1 : 0);
    }
  }, {
    key: "viewVariables",
    value: function viewVariables(event) {
      var _this2 = this;

      event.preventDefault();

      if (this.serviceVariables === null) {
        $.ajax({
          url: "conference/Admin/Service/serviceVariables",
          dataType: 'json',
          type: 'get',
          success: function success(data) {
            _this2.serviceVariables = data.serviceVariables;

            _this2.overlayOn('serviceVariables');
          },
          error: function error() {}
        });
      } else {
        this.overlayOn('serviceVariables');
      }
    }
  }, {
    key: "copySuccess",
    value: function copySuccess() {
      this.successRef.current.focus();
      this.successRef.current.select();
      document.execCommand('copy');
    }
  }, {
    key: "copyCancel",
    value: function copyCancel() {
      this.cancelRef.current.focus();
      this.cancelRef.current.select();
      document.execCommand('copy');
    }
  }, {
    key: "updateFile",
    value: function updateFile(e) {
      var _this3 = this;

      var serviceName = e.target.value;
      this.update('serviceName', serviceName);
      $.ajax({
        url: 'conference/Admin/Service/info',
        data: {
          serviceName: serviceName
        },
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          if (_this3.state.resource.title.length === 0) {
            _this3.update('title', data.serviceInfo.title);
          }

          _this3.setState({
            serviceInfo: data.serviceInfo
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "save",
    value: function save() {
      if (this.state.resource.accountId.length === 0) {
        return;
      }

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ServiceSettings.prototype), "save", this).call(this);
    }
  }, {
    key: "form",
    value: function form() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Service Account Set up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "title"
      }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        id: "title",
        type: "text",
        className: "form-control",
        name: "title",
        value: this.state.resource.title,
        onChange: this.update.bind(null, 'title')
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "url"
      }, "Service URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        id: "url",
        type: "text",
        className: "form-control",
        name: "url",
        value: this.state.resource.url,
        onChange: this.update.bind(null, 'url')
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "accountId"
      }, "Account ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        id: "accountId",
        type: "text",
        className: "form-control",
        name: "accountId",
        value: this.state.resource.accountId,
        onChange: this.update.bind(null, 'accountId')
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_11___default.a, {
        label: "Send validation code",
        checked: this.state.resource.validateSendActive === 1,
        handle: this.updateCheck.bind(this, 'validateSendActive')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        id: "validateSend",
        type: "text",
        className: "form-control",
        placeholder: "Enter post validation key",
        name: "validateSend",
        value: this.state.resource.validateSend,
        onChange: this.update.bind(null, 'validateSend')
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_11___default.a, {
        label: "Validate service response",
        checked: this.state.resource.validateResponseActive === 1,
        handle: this.updateCheck.bind(this, 'validateResponseActive')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        id: "validateResponse",
        type: "text",
        className: "form-control",
        name: "validateResponse",
        placeholder: "Enter response validation key",
        value: this.state.resource.validateResponse,
        onChange: this.update.bind(null, 'validateResponse')
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-success",
        onClick: this.save
      }, "Save")));
    }
  }, {
    key: "serviceVariablesFormat",
    value: function serviceVariablesFormat() {
      var sendRows = [];

      for (var key in this.serviceVariables.send) {
        sendRows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          key: key
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", null, key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", null, this.serviceVariables.send[key])));
      }

      var responseRows = [];

      for (var _key in this.serviceVariables.response) {
        responseRows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          key: _key
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", null, _key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", null, this.serviceVariables.response[_key])));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, "Send"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", {
        className: "table table-striped"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", null, "Variable name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", null, "Service name")), sendRows))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, "Response"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", {
        className: "table table-striped"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", null, "Variable name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", null, "Service name")), responseRows)))));
    }
  }, {
    key: "title",
    value: function title() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SystemService__WEBPACK_IMPORTED_MODULE_10__["default"], {
        service: this.props.service
      }));
    }
  }, {
    key: "navLeft",
    value: function navLeft() {
      var varButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_12__["NavbarButton"], {
        color: "info",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "fas fa-list-alt"
        }), "\xA0Variables"),
        handleClick: this.viewVariables
      });

      var leftSide = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ServiceSettings.prototype), "navLeft", this).call(this);

      leftSide.push(varButton);
      return leftSide;
    }
  }, {
    key: "overlay",
    value: function overlay() {
      if (this.state.overlayType === 'form') {
        return {
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "service-form"
          }, this.form()),
          title: this.state.resource.id > 0 ? 'Update Service' : 'Create Service',
          close: this.load
        };
      } else if (this.state.overlayType === 'serviceVariables') {
        return {
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "service-info"
          }, this.serviceVariablesFormat()),
          width: '90%',
          title: 'Service info'
        };
      } else {
        var _this$props = this.props,
            _success = _this$props.success,
            _cancel = _this$props.cancel;
        var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Copy and paste the links below into your payment provider:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "Success:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "input-group mb-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          className: "form-control",
          ref: this.successRef,
          type: "text",
          readOnly: true,
          value: "https://".concat(_success)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "input-group-append"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "btn btn-outline-dark",
          type: "button",
          onClick: this.copySuccess,
          id: "button-addon2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "fas fa-clipboard"
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "Cancel/Failure:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "input-group mb-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          ref: this.cancelRef,
          className: "form-control",
          readOnly: true,
          type: "text",
          value: "https://".concat(_cancel)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "input-group-append"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "btn btn-outline-dark",
          type: "button",
          onClick: this.copyCancel,
          id: "button-addon2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "fas fa-clipboard"
        })))));
        return {
          content: content,
          close: this.load,
          width: '60%'
        };
      }
    }
  }]);

  return ServiceSettings;
}(_essappstate_canopy_listing__WEBPACK_IMPORTED_MODULE_9___default.a);

react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ServiceSettings, {
  service: service,
  success: success,
  cancel: cancel
}), document.getElementById('ServiceSettings'));

/***/ }),

/***/ "./javascript/ServiceSettings/service.css":
/*!************************************************!*\
  !*** ./javascript/ServiceSettings/service.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./service.css */ "./node_modules/css-loader/index.js!./javascript/ServiceSettings/service.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./javascript/ServiceSettings/service.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader!./javascript/ServiceSettings/service.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".service-info {\n  font-size: 12px;\n}", ""]);

// exports


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TZXJ2aWNlU2V0dGluZ3MvU3lzdGVtU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1NlcnZpY2VTZXR0aW5ncy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TZXJ2aWNlU2V0dGluZ3Mvc2VydmljZS5jc3M/MzJkYiIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1NlcnZpY2VTZXR0aW5ncy9zZXJ2aWNlLmNzcyJdLCJuYW1lcyI6WyJTeXN0ZW1TZXJ2aWNlIiwic2VydmljZSIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIlNlcnZpY2VTZXR0aW5ncyIsInByb3BzIiwicmVzdFVybCIsImxhYmVsIiwiZGVmYXVsdFJlc291cmNlIiwiaWQiLCJ0aXRsZSIsInVybCIsImFjY291bnRJZCIsInZhbGlkYXRlU2VuZCIsInZhbGlkYXRlU2VuZEFjdGl2ZSIsInZhbGlkYXRlUmVzcG9uc2UiLCJ2YWxpZGF0ZVJlc3BvbnNlQWN0aXZlIiwicmVzdHJpY3RJcCIsInNlcnZpY2VWYXJpYWJsZXMiLCJzdWNjZXNzUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJjYW5jZWxSZWYiLCJkcm9wZG93biIsImtleSIsImVkaXRSZXNvdXJjZSIsImJpbmQiLCJkZWxldGVSZXNvdXJjZSIsImNvbHVtbnMiLCJjb2x1bW4iLCJjYWxsYmFjayIsInJvdyIsInN0eWxlIiwid2lkdGgiLCJzb3J0Iiwic3RhdGUiLCJzZXJ2aWNlSW5mbyIsInJlc291cmNlIiwiT2JqZWN0IiwiYXNzaWduIiwidXBkYXRlRmlsZSIsImNvcHlTdWNjZXNzIiwiY29weUNhbmNlbCIsInZpZXdWYXJpYWJsZXMiLCJwYXJhbSIsInZhbHVlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiQiLCJhamF4IiwiZGF0YVR5cGUiLCJ0eXBlIiwic3VjY2VzcyIsImRhdGEiLCJvdmVybGF5T24iLCJlcnJvciIsImN1cnJlbnQiLCJmb2N1cyIsInNlbGVjdCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJlIiwic2VydmljZU5hbWUiLCJ0YXJnZXQiLCJ1cGRhdGUiLCJzZXRTdGF0ZSIsInVwZGF0ZUNoZWNrIiwic2F2ZSIsInNlbmRSb3dzIiwic2VuZCIsInB1c2giLCJyZXNwb25zZVJvd3MiLCJyZXNwb25zZSIsInZhckJ1dHRvbiIsImxlZnRTaWRlIiwib3ZlcmxheVR5cGUiLCJjb250ZW50IiwiZm9ybSIsImNsb3NlIiwibG9hZCIsInNlcnZpY2VWYXJpYWJsZXNGb3JtYXQiLCJjYW5jZWwiLCJMaXN0aW5nIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMx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REY7QUEyQ0EsZUFBTztBQUFDa0MsaUJBQU8sRUFBUEEsT0FBRDtBQUFVRSxlQUFLLEVBQUUsS0FBS0MsSUFBdEI7QUFBNEI5QyxlQUFLLEVBQUU7QUFBbkMsU0FBUDtBQUNEO0FBQ0Y7Ozs7RUF4WTJCaUQsa0U7O0FBMlk5QkMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNFLDJEQUFDLGVBQUQ7QUFBaUIsU0FBTyxFQUFFckYsT0FBMUI7QUFBbUMsU0FBTyxFQUFFcUQsT0FBNUM7QUFBcUQsUUFBTSxFQUFFNkI7QUFBN0QsRUFERixFQUVFdEIsUUFBUSxDQUFDMEIsY0FBVCxDQUF3QixpQkFBeEIsQ0FGRixFOzs7Ozs7Ozs7Ozs7QUNyWkEsY0FBYyxtQkFBTyxDQUFDLGlJQUF3RDs7QUFFOUUsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNuQmYsMkJBQTJCLG1CQUFPLENBQUMsZ0dBQStDO0FBQ2xGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxrQkFBa0Isb0JBQW9CLEdBQUc7O0FBRWhFIiwiZmlsZSI6IlNlcnZpY2VTZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJTZXJ2aWNlU2V0dGluZ3NcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2phdmFzY3JpcHQvU2VydmljZVNldHRpbmdzL2luZGV4LmpzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IFN5c3RlbVNlcnZpY2UgPSAoe3NlcnZpY2V9KSA9PiB7XG4gIGlmIChzZXJ2aWNlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDQ+Tm8gc2VydmljZSBzZXQ8L2g0PlxuICAgICAgICA8cD5cbiAgICAgICAgICBUbyB1c2Ugb25saW5lIGJpbGxpbmcsIHlvdSB3aWxsIG5lZWQgdG8gc3BlY2lmeSBhIHBheW1lbnQgc2VydmljZSBpblxuICAgICAgICAgIHRoZSA8Y29kZT5jb25mXFxkZWZpbmVzLnBocDwvY29kZT4gZmlsZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiA8aDM+UGF5bWVudCBzZXJ2aWNlOiB7c2VydmljZX08L2gzPlxuICB9XG59XG5cblN5c3RlbVNlcnZpY2UucHJvcFR5cGVzID0ge3NlcnZpY2U6IFByb3BUeXBlcy5zdHJpbmd9XG5cbmV4cG9ydCBkZWZhdWx0IFN5c3RlbVNlcnZpY2VcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBMaXN0aW5nIGZyb20gJ0Blc3NhcHBzdGF0ZS9jYW5vcHktbGlzdGluZydcbmltcG9ydCBTeXN0ZW1TZXJ2aWNlIGZyb20gJy4vU3lzdGVtU2VydmljZSdcbmltcG9ydCBCaWdDaGVja2JveCBmcm9tICdAZXNzYXBwc3RhdGUvY2Fub3B5LXJlYWN0LWJpZ2NoZWNrYm94J1xuaW1wb3J0IHtOYXZiYXJCdXR0b259IGZyb20gJ0Blc3NhcHBzdGF0ZS9yZWFjdC1uYXZiYXInXG5pbXBvcnQgJy4vc2VydmljZS5jc3MnXG5cbi8qIGdsb2JhbCAkLCBzZXJ2aWNlLCBzdWNjZXNzLCBjYW5jZWwgKi9cblxuY2xhc3MgU2VydmljZVNldHRpbmdzIGV4dGVuZHMgTGlzdGluZyB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5yZXN0VXJsID0gJ2NvbmZlcmVuY2UvQWRtaW4vQWNjb3VudC8nXG4gICAgdGhpcy5sYWJlbCA9ICdTZXJ2aWNlIGFjY291bnQnXG4gICAgdGhpcy5kZWZhdWx0UmVzb3VyY2UgPSB7XG4gICAgICBpZDogMCxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHVybDogJycsXG4gICAgICBhY2NvdW50SWQ6ICcnLFxuICAgICAgdmFsaWRhdGVTZW5kOiAnJyxcbiAgICAgIHZhbGlkYXRlU2VuZEFjdGl2ZTogMCxcbiAgICAgIHZhbGlkYXRlUmVzcG9uc2U6ICcnLFxuICAgICAgdmFsaWRhdGVSZXNwb25zZUFjdGl2ZTogMCxcbiAgICAgIHJlc3RyaWN0SXA6ICcnXG4gICAgfVxuXG4gICAgdGhpcy5zZXJ2aWNlVmFyaWFibGVzID0gbnVsbFxuICAgIHRoaXMuc3VjY2Vzc1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5jYW5jZWxSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuXG4gICAgY29uc3QgZHJvcGRvd24gPSBrZXkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgICAgICBpZD1cImRyb3Bkb3duTWVudUJ1dHRvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUJ1dHRvblwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBwb2ludGVyXCJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmVkaXRSZXNvdXJjZS5iaW5kKHRoaXMsIGtleSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZWRpdFwiIC8+XG4gICAgICAgICAgICAgICZuYnNwO0VkaXRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcG9pbnRlclwiXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGVSZXNvdXJjZS5iaW5kKHRoaXMsIGtleSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2hcIiAvPlxuICAgICAgICAgICAgICAmbmJzcDtEZWxldGVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgY29sdW1uOiAnb3B0aW9ucycsXG4gICAgICAgIGNhbGxiYWNrOiAocm93LCBrZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gZHJvcGRvd24oa2V5KVxuICAgICAgICB9LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiAnMTAlJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICd0aXRsZScsXG4gICAgICAgIGxhYmVsOiAnVGl0bGUnLFxuICAgICAgICBzb3J0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICdhY2NvdW50SWQnLFxuICAgICAgICBsYWJlbDogJ0FjY291bnQgaWQnLFxuICAgICAgICBzb3J0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICd2YWxpZGF0ZVNlbmRBY3RpdmUnLFxuICAgICAgICBsYWJlbDogJ1ZhbGlkYXRlIHNlbmQnLFxuICAgICAgICBjYWxsYmFjazogcm93ID0+IHtcbiAgICAgICAgICByZXR1cm4gcm93LnZhbGlkYXRlU2VuZEFjdGl2ZSA9PT0gMSA/ICdZZXMnIDogJ05vJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICd2YWxpZGF0ZVJlc3BvbnNlQWN0aXZlJyxcbiAgICAgICAgbGFiZWw6ICdWYWxpZGF0ZSByZXNwb25zZScsXG4gICAgICAgIGNhbGxiYWNrOiAocm93LCBrZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gcm93LnZhbGlkYXRlUmVzcG9uc2VBY3RpdmUgPT09IDEgPyAnWWVzJyA6ICdObydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgICB0aGlzLnN0YXRlLnNlcnZpY2VJbmZvID0ge31cbiAgICB0aGlzLnN0YXRlLnJlc291cmNlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0UmVzb3VyY2UpXG4gICAgdGhpcy51cGRhdGVGaWxlID0gdGhpcy51cGRhdGVGaWxlLmJpbmQodGhpcylcbiAgICB0aGlzLmNvcHlTdWNjZXNzID0gdGhpcy5jb3B5U3VjY2Vzcy5iaW5kKHRoaXMpXG4gICAgdGhpcy5jb3B5Q2FuY2VsID0gdGhpcy5jb3B5Q2FuY2VsLmJpbmQodGhpcylcbiAgICB0aGlzLnZpZXdWYXJpYWJsZXMgPSB0aGlzLnZpZXdWYXJpYWJsZXMuYmluZCh0aGlzKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuICAgIHRoaXMuc3RhdGUuc2VydmljZUluZm8gPSB7fVxuICB9XG5cbiAgdXBkYXRlQ2hlY2socGFyYW0sIHZhbHVlKSB7XG4gICAgc3VwZXIudXBkYXRlKHBhcmFtLCB2YWx1ZSA/IDEgOiAwKVxuICB9XG5cbiAgdmlld1ZhcmlhYmxlcyhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAodGhpcy5zZXJ2aWNlVmFyaWFibGVzID09PSBudWxsKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGBjb25mZXJlbmNlL0FkbWluL1NlcnZpY2Uvc2VydmljZVZhcmlhYmxlc2AsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLnNlcnZpY2VWYXJpYWJsZXMgPSBkYXRhLnNlcnZpY2VWYXJpYWJsZXNcbiAgICAgICAgICB0aGlzLm92ZXJsYXlPbignc2VydmljZVZhcmlhYmxlcycpXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdmVybGF5T24oJ3NlcnZpY2VWYXJpYWJsZXMnKVxuICAgIH1cbiAgfVxuXG4gIGNvcHlTdWNjZXNzKCkge1xuICAgIHRoaXMuc3VjY2Vzc1JlZi5jdXJyZW50LmZvY3VzKClcbiAgICB0aGlzLnN1Y2Nlc3NSZWYuY3VycmVudC5zZWxlY3QoKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcbiAgfVxuXG4gIGNvcHlDYW5jZWwoKSB7XG4gICAgdGhpcy5jYW5jZWxSZWYuY3VycmVudC5mb2N1cygpXG4gICAgdGhpcy5jYW5jZWxSZWYuY3VycmVudC5zZWxlY3QoKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcbiAgfVxuXG4gIHVwZGF0ZUZpbGUoZSkge1xuICAgIGNvbnN0IHNlcnZpY2VOYW1lID0gZS50YXJnZXQudmFsdWVcbiAgICB0aGlzLnVwZGF0ZSgnc2VydmljZU5hbWUnLCBzZXJ2aWNlTmFtZSlcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnY29uZmVyZW5jZS9BZG1pbi9TZXJ2aWNlL2luZm8nLFxuICAgICAgZGF0YToge3NlcnZpY2VOYW1lfSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZXNvdXJjZS50aXRsZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZSgndGl0bGUnLCBkYXRhLnNlcnZpY2VJbmZvLnRpdGxlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlcnZpY2VJbmZvOiBkYXRhLnNlcnZpY2VJbmZvfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZXNvdXJjZS5hY2NvdW50SWQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc3VwZXIuc2F2ZSgpXG4gIH1cblxuICBmb3JtKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDM+U2VydmljZSBBY2NvdW50IFNldCB1cDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTNcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZXNvdXJjZS50aXRsZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGUuYmluZChudWxsLCAndGl0bGUnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC0zXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXJsXCI+U2VydmljZSBVUkw8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInVybFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVzb3VyY2UudXJsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZS5iaW5kKG51bGwsICd1cmwnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC0zXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWNjb3VudElkXCI+QWNjb3VudCBJRDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiYWNjb3VudElkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudElkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZXNvdXJjZS5hY2NvdW50SWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlLmJpbmQobnVsbCwgJ2FjY291bnRJZCcpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC0zXCI+XG4gICAgICAgICAgICAgIDxCaWdDaGVja2JveFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VuZCB2YWxpZGF0aW9uIGNvZGVcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVzb3VyY2UudmFsaWRhdGVTZW5kQWN0aXZlID09PSAxfVxuICAgICAgICAgICAgICAgIGhhbmRsZT17dGhpcy51cGRhdGVDaGVjay5iaW5kKHRoaXMsICd2YWxpZGF0ZVNlbmRBY3RpdmUnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJ2YWxpZGF0ZVNlbmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcG9zdCB2YWxpZGF0aW9uIGtleVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInZhbGlkYXRlU2VuZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVzb3VyY2UudmFsaWRhdGVTZW5kfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZS5iaW5kKG51bGwsICd2YWxpZGF0ZVNlbmQnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTFcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXQtM1wiPlxuICAgICAgICAgICAgICA8QmlnQ2hlY2tib3hcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlZhbGlkYXRlIHNlcnZpY2UgcmVzcG9uc2VcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVzb3VyY2UudmFsaWRhdGVSZXNwb25zZUFjdGl2ZSA9PT0gMX1cbiAgICAgICAgICAgICAgICBoYW5kbGU9e3RoaXMudXBkYXRlQ2hlY2suYmluZCh0aGlzLCAndmFsaWRhdGVSZXNwb25zZUFjdGl2ZScpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInZhbGlkYXRlUmVzcG9uc2VcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ2YWxpZGF0ZVJlc3BvbnNlXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHJlc3BvbnNlIHZhbGlkYXRpb24ga2V5XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZXNvdXJjZS52YWxpZGF0ZVJlc3BvbnNlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZS5iaW5kKG51bGwsICd2YWxpZGF0ZVJlc3BvbnNlJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICBTYXZlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgc2VydmljZVZhcmlhYmxlc0Zvcm1hdCgpIHtcbiAgICBsZXQgc2VuZFJvd3MgPSBbXVxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnNlcnZpY2VWYXJpYWJsZXMuc2VuZCkge1xuICAgICAgc2VuZFJvd3MucHVzaChcbiAgICAgICAgPHRyIGtleT17a2V5fT5cbiAgICAgICAgICA8dGQ+e2tleX08L3RkPlxuICAgICAgICAgIDx0ZD57dGhpcy5zZXJ2aWNlVmFyaWFibGVzLnNlbmRba2V5XX08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgKVxuICAgIH1cbiAgICBsZXQgcmVzcG9uc2VSb3dzID0gW11cbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zZXJ2aWNlVmFyaWFibGVzLnJlc3BvbnNlKSB7XG4gICAgICByZXNwb25zZVJvd3MucHVzaChcbiAgICAgICAgPHRyIGtleT17a2V5fT5cbiAgICAgICAgICA8dGQ+e2tleX08L3RkPlxuICAgICAgICAgIDx0ZD57dGhpcy5zZXJ2aWNlVmFyaWFibGVzLnJlc3BvbnNlW2tleV19PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICA8aDQ+U2VuZDwvaDQ+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoPlZhcmlhYmxlIG5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPlNlcnZpY2UgbmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICB7c2VuZFJvd3N9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgIDxoND5SZXNwb25zZTwvaDQ+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoPlZhcmlhYmxlIG5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPlNlcnZpY2UgbmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICB7cmVzcG9uc2VSb3dzfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICB0aXRsZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPlNlcnZpY2VzPC9oMz5cbiAgICAgICAgPFN5c3RlbVNlcnZpY2Ugc2VydmljZT17dGhpcy5wcm9wcy5zZXJ2aWNlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgbmF2TGVmdCgpIHtcbiAgICBjb25zdCB2YXJCdXR0b24gPSAoXG4gICAgICA8TmF2YmFyQnV0dG9uXG4gICAgICAgIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgIGxhYmVsPXtcbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1saXN0LWFsdFwiIC8+XG4gICAgICAgICAgICAmbmJzcDtWYXJpYWJsZXNcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlQ2xpY2s9e3RoaXMudmlld1ZhcmlhYmxlc31cbiAgICAgIC8+XG4gICAgKVxuICAgIGNvbnN0IGxlZnRTaWRlID0gc3VwZXIubmF2TGVmdCgpXG4gICAgbGVmdFNpZGUucHVzaCh2YXJCdXR0b24pXG4gICAgcmV0dXJuIGxlZnRTaWRlXG4gIH1cblxuICBvdmVybGF5KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm92ZXJsYXlUeXBlID09PSAnZm9ybScpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRlbnQ6IDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1mb3JtXCI+e3RoaXMuZm9ybSgpfTwvZGl2PixcbiAgICAgICAgdGl0bGU6IHRoaXMuc3RhdGUucmVzb3VyY2UuaWQgPiAwID8gJ1VwZGF0ZSBTZXJ2aWNlJyA6ICdDcmVhdGUgU2VydmljZScsXG4gICAgICAgIGNsb3NlOiB0aGlzLmxvYWRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUub3ZlcmxheVR5cGUgPT09ICdzZXJ2aWNlVmFyaWFibGVzJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29udGVudDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1pbmZvXCI+e3RoaXMuc2VydmljZVZhcmlhYmxlc0Zvcm1hdCgpfTwvZGl2PlxuICAgICAgICApLFxuICAgICAgICB3aWR0aDogJzkwJScsXG4gICAgICAgIHRpdGxlOiAnU2VydmljZSBpbmZvJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7c3VjY2VzcywgY2FuY2VsfSA9IHRoaXMucHJvcHNcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+Q29weSBhbmQgcGFzdGUgdGhlIGxpbmtzIGJlbG93IGludG8geW91ciBwYXltZW50IHByb3ZpZGVyOjwvcD5cbiAgICAgICAgICA8bGFiZWw+U3VjY2Vzczo8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHJlZj17dGhpcy5zdWNjZXNzUmVmfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICAgICAgICB2YWx1ZT17YGh0dHBzOi8vJHtzdWNjZXNzfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNvcHlTdWNjZXNzfVxuICAgICAgICAgICAgICAgIGlkPVwiYnV0dG9uLWFkZG9uMlwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbGlwYm9hcmRcIj48L2k+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGxhYmVsPkNhbmNlbC9GYWlsdXJlOjwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPXt0aGlzLmNhbmNlbFJlZn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2BodHRwczovLyR7Y2FuY2VsfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNvcHlDYW5jZWx9XG4gICAgICAgICAgICAgICAgaWQ9XCJidXR0b24tYWRkb24yXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsaXBib2FyZFwiPjwvaT5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICByZXR1cm4ge2NvbnRlbnQsIGNsb3NlOiB0aGlzLmxvYWQsIHdpZHRoOiAnNjAlJ31cbiAgICB9XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8U2VydmljZVNldHRpbmdzIHNlcnZpY2U9e3NlcnZpY2V9IHN1Y2Nlc3M9e3N1Y2Nlc3N9IGNhbmNlbD17Y2FuY2VsfSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1NlcnZpY2VTZXR0aW5ncycpXG4pXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zZXJ2aWNlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zZXJ2aWNlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc2VydmljZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZXJ2aWNlLWluZm8ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9