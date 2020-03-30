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
/******/ 		"Supplement": 0
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
/******/ 	deferredModules.push(["./javascript/Supplement/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/SessionSignup/GuestForm.js":
/*!***********************************************!*\
  !*** ./javascript/SessionSignup/GuestForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuestForm; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);









function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var GuestForm = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(GuestForm, _Component);

  var _super = _createSuper(GuestForm);

  function GuestForm(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GuestForm);

    _this = _super.call(this, props);
    _this.state = {
      error: {
        first: false,
        last: false,
        email: false,
        badEmail: false
      }
    };
    _this.check = _this.check.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GuestForm, [{
    key: "check",
    value: function check(errorName, e) {
      var error = this.state.error;
      var value = e.currentTarget.value;
      var errorFound = value == '';
      error[errorName] = errorFound;

      if (errorName === 'email' && !error.email) {
        error.badEmail = value.match(/^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) === null;

        if (error.badEmail) {
          errorFound = true;
        }
      }

      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          guest = _this$props.guest,
          count = _this$props.count,
          update = _this$props.update;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "lead"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, "Guest #", count + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "firstName"
      }, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "firstName",
        onBlur: function onBlur(e) {
          return _this2.check('first', e);
        },
        onChange: function onChange(e) {
          return update(count, 'firstName', e);
        },
        value: guest.firstName
      }), this.state.error.first ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "badge badge-danger"
      }, "Please fill this in") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "lastName"
      }, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "lastName",
        onBlur: function onBlur(e) {
          return _this2.check('last', e);
        },
        onChange: function onChange(e) {
          return update(count, 'lastName', e);
        },
        value: guest.lastName
      }), this.state.error.last ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "badge badge-danger"
      }, "Please fill this in") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "email"
      }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "email",
        onBlur: function onBlur(e) {
          return _this2.check('email', e);
        },
        onChange: function onChange(e) {
          return update(count, 'email', e);
        },
        value: guest.email
      }), this.state.error.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "badge badge-danger"
      }, "Please fill this in") : null, this.state.error.badEmail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "badge badge-danger"
      }, "Check your email address") : null))));
    }
  }]);

  return GuestForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


GuestForm.propTypes = {
  guest: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  count: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  update: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};

/***/ }),

/***/ "./javascript/Shared/SessionChange.jsx":
/*!*********************************************!*\
  !*** ./javascript/Shared/SessionChange.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);





/* global $ */

var SessionChange = function SessionChange(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      sessionList = _useState6[0],
      setSessionList = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      changeSessionId = _useState8[0],
      setChangeSession = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    $.ajax({
      url: 'conference/Visitor/Session/change',
      data: {
        registrationId: props.registrationId
      },
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        if (data.length) {
          setSessionList(data);
        }

        setLoading(false);
      },
      error: function error() {
        setError(true);
      }
    });
  }, []);

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading sessions...");
  }

  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "alert alert-danger"
    }, "Could not load other sessions.");
  }

  var sessionSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", null, "No alternative sessions available due to cost difference or signup deadlines."));
  var priceWarning;

  if (props.completed === 1) {
    priceWarning = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "badge badge-info text-white"
    }, "Note: if you have already paid, you may only change to a session of the same cost.");
  }

  if (sessionList.length) {
    var sessionOptions = [];
    sessionOptions = sessionList.map(function (value, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        key: key,
        value: value.id
      }, value.title, " - ", value.eventDateFormat, " - ", value.days, " day session");
    });
    sessionSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-9"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      className: "form-control",
      onChange: function onChange(e) {
        return setChangeSession(e.target.value);
      },
      value: changeSessionId
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      disabled: true,
      defaultChecked: true,
      value: 0
    }, "Prefer to change your session? Pick a different date below."), sessionOptions)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn btn-primary",
      disabled: changeSessionId == 0,
      onClick: function onClick() {
        props.changeSession(changeSessionId);
      }
    }, "Change my session"))), priceWarning);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-2 mb-2"
  }, sessionSelect);
};

SessionChange.propTypes = {
  registrationId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  completed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  changeSession: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (SessionChange);

/***/ }),

/***/ "./javascript/Supplement/GuestListing.jsx":
/*!************************************************!*\
  !*** ./javascript/Supplement/GuestListing.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuestListing; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SessionSignup_GuestForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SessionSignup/GuestForm */ "./javascript/SessionSignup/GuestForm.js");









function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var GuestListing = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(GuestListing, _Component);

  var _super = _createSuper(GuestListing);

  function GuestListing(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GuestListing);

    _this = _super.call(this, props);
    _this.state = {};
    _this.missingInfo = _this.missingInfo.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GuestListing, [{
    key: "missingInfo",
    value: function missingInfo() {
      for (var i = 0; i < this.props.count; i++) {
        var guest = this.props.guests[i];

        if (guest.email.length === 0 || guest.firstName.length === 0 || guest.lastName.length === 0 || guest.email.match(/^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) === null) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var listing = [];

      for (var i = 0; i < this.props.count; i++) {
        var value = this.props.guests[i];
        listing.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SessionSignup_GuestForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: i,
          guest: value,
          count: i,
          update: this.props.update
        }));
      }

      var disabled = this.missingInfo();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, "Please fill out information on your new guests."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, listing), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-primary",
        disabled: disabled,
        onClick: this.props.saveGuests
      }, disabled ? 'Complete the above to continue' : 'Save guests')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-info",
        onClick: this.props.goBack
      }, "Go back"))));
    }
  }]);

  return GuestListing;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


GuestListing.propTypes = {
  guests: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  update: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  saveGuests: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  count: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  goBack: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};

/***/ }),

/***/ "./javascript/Supplement/index.jsx":
/*!*****************************************!*\
  !*** ./javascript/Supplement/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Supplement; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _GuestListing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GuestListing */ "./javascript/Supplement/GuestListing.jsx");
/* harmony import */ var _Shared_SessionChange__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Shared/SessionChange */ "./javascript/Shared/SessionChange.jsx");









function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






/* global $, registrationId */

var Supplement = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Supplement, _Component);

  var _super = _createSuper(Supplement);

  function Supplement(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Supplement);

    _this = _super.call(this, props);
    _this.state = {
      registration: {},
      addOnInfo: {},
      conference: {},
      session: {},
      loading: true,
      supplement: {
        id: 0,
        newGuests: 0,
        newMeals: 0,
        newVeggie: 0
      },
      totalGuests: 0,
      totalMeals: 0,
      totalVeggie: 0,
      totalGuestCost: 0,
      totalMealCost: 0,
      guests: [],
      errorScreen: false,
      guestScreen: false
    };
    _this.defaultGuest = {
      id: '0',
      email: '',
      firstName: '',
      lastName: '',
      registrationId: '0',
      supplementId: '0'
    };
    _this.increaseMeals = _this.increaseMeals.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.decreaseMeals = _this.decreaseMeals.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.increaseGuests = _this.increaseGuests.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.decreaseGuests = _this.decreaseGuests.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.increaseVeggie = _this.increaseVeggie.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.decreaseVeggie = _this.decreaseVeggie.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.updateGuest = _this.updateGuest.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.guestScreen = _this.guestScreen.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.cancelSupplement = _this.cancelSupplement.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.goBack = _this.goBack.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.save = _this.save.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.changeSession = _this.changeSession.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Supplement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.load();
    }
  }, {
    key: "updateGuest",
    value: function updateGuest(count, property, value) {
      var guests = this.state.guests;
      var guest = guests[count];
      guest[property] = value.target.value;
      guest.complete = guest.firstName.length > 0 && guest.lastName.length > 0 && guest.email.length > 0 && guest.email.match(/^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) !== null;
      this.setState({
        guests: guests
      });
    }
  }, {
    key: "cancelSupplement",
    value: function cancelSupplement() {
      var _this2 = this;

      var _this$state = this.state,
          supplement = _this$state.supplement,
          registration = _this$state.registration;

      if (supplement.id > 0) {
        $.ajax({
          url: "conference/Visitor/Supplement/".concat(supplement.id, "/incomplete"),
          dataType: 'json',
          type: 'delete',
          success: function success() {
            window.location.href = 'conference/Visitor/Registration/' + supplement.registrationId;
          },
          error: function error() {
            _this2.setState({
              errorScreen: true
            });
          }
        });
      } else {
        window.location.href = 'conference/Visitor/Registration/' + registration.id;
      }
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;

      $.ajax({
        url: "conference/Visitor/Supplement/current",
        data: {
          registrationId: this.props.registrationId
        },
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          var registration = data.registration,
              session = data.session,
              supplement = data.supplement,
              guests = data.guests;
          var totalGuests = parseInt(supplement.newGuests) + parseInt(registration.guestCount);
          var totalMeals = parseInt(supplement.newMeals) + parseInt(registration.mealTickets);
          var totalVeggie = parseInt(supplement.newVeggie) + parseInt(registration.veggieMeals);
          var totalMealCost = parseFloat(session.mealCost) * supplement.newMeals;
          var totalGuestCost = parseFloat(session.guestCost) * supplement.newGuests;

          if (guests.length === 0) {
            guests.push(Object.assign({}, _this3.defaultGuest));
          }

          _this3.setState({
            registration: data.registration,
            supplement: data.supplement,
            session: data.session,
            conference: data.conference,
            loading: false,
            guests: guests,
            totalGuests: totalGuests,
            totalMeals: totalMeals,
            totalVeggie: totalVeggie,
            totalMealCost: totalMealCost,
            totalGuestCost: totalGuestCost
          });
        },
        error: function error() {
          _this3.setState({
            errorScreen: true
          });
        }
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this$state2 = this.state,
          supplement = _this$state2.supplement,
          registration = _this$state2.registration,
          guests = _this$state2.guests;
      var url = 'conference/Visitor/Supplement';
      var type = 'post';

      if (supplement.id > 0) {
        url = url + '/' + supplement.id;
        type = 'put';
      }

      $.ajax({
        url: url,
        data: {
          registrationId: registration.id,
          newGuests: supplement.newGuests,
          newMeals: supplement.newMeals,
          newVeggie: supplement.newVeggie,
          guests: guests
        },
        dataType: 'json',
        type: type,
        success: function success(data) {
          window.location.href = 'conference/Visitor/Supplement/' + data.id + '/complete';
        },
        error: function error() {
          alert('Server error prevented registration update.');
        }
      });
    }
  }, {
    key: "goBack",
    value: function goBack() {
      this.setState({
        guestScreen: false
      });
    }
  }, {
    key: "increaseMeals",
    value: function increaseMeals() {
      var _this$state3 = this.state,
          supplement = _this$state3.supplement,
          session = _this$state3.session,
          totalMeals = _this$state3.totalMeals,
          totalMealCost = _this$state3.totalMealCost;
      var mealCost = session.mealCost;
      supplement.newMeals++;
      totalMeals++;
      totalMealCost += parseFloat(mealCost);
      this.setState({
        supplement: supplement,
        totalMeals: totalMeals,
        totalMealCost: totalMealCost
      });
    }
  }, {
    key: "decreaseMeals",
    value: function decreaseMeals() {
      if (this.state.supplement.newMeals > 0) {
        var _this$state4 = this.state,
            supplement = _this$state4.supplement,
            session = _this$state4.session,
            totalMeals = _this$state4.totalMeals,
            totalMealCost = _this$state4.totalMealCost,
            totalVeggie = _this$state4.totalVeggie;
        var mealCost = session.mealCost;
        supplement.newMeals--;

        if (supplement.newVeggie > supplement.newMeals) {
          supplement.newVeggie = supplement.newMeals;
        }

        totalMeals--;

        if (totalVeggie > totalMeals) {
          totalVeggie = totalMeals;
        }

        totalMealCost -= parseFloat(mealCost);
        this.setState({
          supplement: supplement,
          totalMeals: totalMeals,
          totalMealCost: totalMealCost,
          totalVeggie: totalVeggie
        });
      }
    }
  }, {
    key: "increaseGuests",
    value: function increaseGuests() {
      var _this$state5 = this.state,
          supplement = _this$state5.supplement,
          session = _this$state5.session,
          guests = _this$state5.guests;
      var _this$state6 = this.state,
          totalGuests = _this$state6.totalGuests,
          totalGuestCost = _this$state6.totalGuestCost;
      var attendanceCap = parseInt(session.attendanceCap);
      var guestCost = session.guestCost;

      if (totalGuests >= attendanceCap) {
        return;
      }

      supplement.newGuests++;

      if (guests.length < supplement.newGuests) {
        guests.push(Object.assign({}, this.defaultGuest));
      }

      totalGuests = parseInt(totalGuests) + 1;
      totalGuestCost += parseFloat(guestCost);
      this.setState({
        supplement: supplement,
        totalGuests: totalGuests,
        totalGuestCost: totalGuestCost
      });
    }
  }, {
    key: "decreaseGuests",
    value: function decreaseGuests() {
      var _this$state7 = this.state,
          supplement = _this$state7.supplement,
          session = _this$state7.session;

      if (supplement.newGuests > 0) {
        var _this$state8 = this.state,
            totalGuests = _this$state8.totalGuests,
            totalGuestCost = _this$state8.totalGuestCost;
        var guestCost = session.guestCost;
        supplement.newGuests--;
        totalGuests--;
        totalGuestCost -= parseFloat(guestCost);
        this.setState({
          supplement: supplement,
          totalGuests: totalGuests,
          totalGuestCost: totalGuestCost
        });
      }
    }
  }, {
    key: "increaseVeggie",
    value: function increaseVeggie() {
      var attendanceCap = parseInt(this.state.registration.attendanceCap);
      var _this$state9 = this.state,
          supplement = _this$state9.supplement,
          totalVeggie = _this$state9.totalVeggie;

      if (totalVeggie >= attendanceCap) {
        return;
      }

      supplement.newVeggie++;
      totalVeggie++;
      this.setState({
        supplement: supplement,
        totalVeggie: totalVeggie
      });
    }
  }, {
    key: "decreaseVeggie",
    value: function decreaseVeggie() {
      if (parseInt(this.state.supplement.newVeggie > 0)) {
        var _this$state10 = this.state,
            supplement = _this$state10.supplement,
            totalVeggie = _this$state10.totalVeggie;
        supplement.newVeggie--;
        totalVeggie--;
        this.setState({
          supplement: supplement,
          totalVeggie: totalVeggie
        });
      }
    }
  }, {
    key: "disableMealMinus",
    value: function disableMealMinus() {
      return parseInt(this.state.supplement.newMeals) === 0;
    }
  }, {
    key: "disableGuestMinus",
    value: function disableGuestMinus() {
      return parseInt(this.state.supplement.newGuests) === 0;
    }
  }, {
    key: "disableVeggieMinus",
    value: function disableVeggieMinus() {
      return parseInt(this.state.supplement.newVeggie) === 0;
    }
    /**
     * Maximum meal tickets is total guests plus 4
     */

  }, {
    key: "disableMealPlus",
    value: function disableMealPlus() {
      return parseInt(this.state.totalMeals) >= parseInt(this.state.totalGuests) + 4;
    }
  }, {
    key: "disableGuestPlus",
    value: function disableGuestPlus() {
      return parseInt(this.state.totalGuests) >= parseInt(this.state.session.attendanceCap);
    }
  }, {
    key: "disableVeggiePlus",
    value: function disableVeggiePlus() {
      return parseInt(this.state.totalVeggie) >= parseInt(this.state.totalMeals);
    }
  }, {
    key: "submitButton",
    value: function submitButton() {
      var _this$state$supplemen = this.state.supplement,
          newMeals = _this$state$supplemen.newMeals,
          newGuests = _this$state$supplemen.newGuests;

      if (newGuests == 0 && newMeals == 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null);
      }

      var plural = function plural(count, word) {
        return count > 1 ? "".concat(word, "s") : word;
      };

      var buttonText;

      if (newGuests > 0 && newMeals > 0) {
        buttonText = newGuests + ' ' + plural(newGuests, 'guest') + ' and ' + newMeals + ' ' + plural(newMeals, 'meal ticket');
      } else if (newGuests > 0) {
        buttonText = newGuests + ' ' + plural(newGuests, 'guest');
      } else {
        buttonText = newMeals + ' ' + plural(newMeals, 'meal');
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-success",
        onClick: this.guestScreen
      }, "Add ", buttonText, "\xA0to my registration");
    }
  }, {
    key: "guestScreen",
    value: function guestScreen() {
      if (this.state.supplement.newGuests > 0) {
        this.setState({
          guestScreen: true
        });
      } else {
        this.save();
      }
    }
  }, {
    key: "changeSession",
    value: function changeSession(sessionId) {
      var _this4 = this;

      var registration = this.state.registration;
      $.ajax({
        url: "conference/Visitor/Registration/".concat(registration.id, "/changeSession"),
        data: {
          sessionId: sessionId
        },
        dataType: 'json',
        type: 'patch',
        success: function success() {
          window.location.href = "conference/Visitor/Registration/".concat(registration.id);
        },
        error: function error() {
          _this4.setState({
            errorScreen: true
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var sessionChange = null;

      if (this.state.registration.id > 0) {
        sessionChange = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Shared_SessionChange__WEBPACK_IMPORTED_MODULE_10__["default"], {
          registrationId: this.state.registration.id,
          changeSession: this.changeSession
        });
      }

      if (this.state.errorScreen) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
          className: "text-danger"
        }, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "This page experienced an unrecoverable error. Please contact the site administrators."));
      }

      if (this.state.loading) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "Loading...");
      }

      if (this.state.guestScreen) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, this.state.conference.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_GuestListing__WEBPACK_IMPORTED_MODULE_9__["default"], {
          count: this.state.supplement.newGuests,
          goBack: this.goBack,
          guests: this.state.guests,
          update: this.updateGuest,
          saveGuests: this.save
        }));
      }

      var _this$state11 = this.state,
          supplement = _this$state11.supplement,
          session = _this$state11.session,
          conference = _this$state11.conference;
      var _this$state$registrat = this.state.registration,
          guestCount = _this$state$registrat.guestCount,
          mealTickets = _this$state$registrat.mealTickets,
          veggieMeals = _this$state$registrat.veggieMeals;
      var _this$state12 = this.state,
          totalGuestCost = _this$state12.totalGuestCost,
          totalMealCost = _this$state12.totalMealCost,
          totalGuests = _this$state12.totalGuests,
          totalMeals = _this$state12.totalMeals,
          totalVeggie = _this$state12.totalVeggie;

      var mealMessage = function mealMessage() {
        return session.mealIncluded === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, "Extra meal tickets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "small d-block"
        }, "A meal is included with each registration.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), "Extra meals are for unregistered participants.")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, "Meal tickets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "small d-block"
        }, "Meals are not included with registration.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), "You may prepay here or wait for the day of the event."));
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, conference.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, session.title, " - ", session.eventDateRange), sessionChange, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "table table-striped"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", null, "Current"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", null, "Additional"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "lead"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", null, "Guests"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "$", session.guestCost.toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, guestCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, supplement.newGuests), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, totalGuests), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-danger mr-1",
        onClick: this.decreaseGuests,
        disabled: this.disableGuestMinus()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-minus"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-success",
        onClick: this.increaseGuests,
        disabled: this.disableGuestPlus()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-plus"
      })))), session.mealService === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "lead"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", null, mealMessage()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "$", session.mealCost.toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, mealTickets), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, supplement.newMeals), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, totalMeals), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-danger mr-1",
        onClick: this.decreaseMeals,
        disabled: this.disableMealMinus()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-minus"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-success",
        onClick: this.increaseMeals,
        disabled: this.disableMealPlus()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-plus"
      })))) : null, session.mealService === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "lead"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", null, "Vegetarian meals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, veggieMeals), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, supplement.newVeggie), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, totalVeggie), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-danger mr-1",
        onClick: this.decreaseVeggie,
        disabled: this.disableVeggieMinus()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-minus"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-success",
        onClick: this.increaseVeggie,
        disabled: this.disableVeggiePlus()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-plus"
      })))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "lead"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", null, "Total cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        colSpan: "5"
      }, "$", (totalMealCost + totalGuestCost).toFixed(2))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center mb-3"
      }, this.submitButton()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-danger",
        onClick: this.cancelSupplement
      }, "Cancel registration additions")));
    }
  }]);

  return Supplement;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


Supplement.propTypes = {
  registrationId: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
};
react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Supplement, {
  registrationId: registrationId
}), document.getElementById('Supplement'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TZXNzaW9uU2lnbnVwL0d1ZXN0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1NoYXJlZC9TZXNzaW9uQ2hhbmdlLmpzeCIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1N1cHBsZW1lbnQvR3Vlc3RMaXN0aW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1N1cHBsZW1lbnQvaW5kZXguanN4Il0sIm5hbWVzIjpbIkd1ZXN0Rm9ybSIsInByb3BzIiwic3RhdGUiLCJlcnJvciIsImZpcnN0IiwibGFzdCIsImVtYWlsIiwiYmFkRW1haWwiLCJjaGVjayIsImJpbmQiLCJlcnJvck5hbWUiLCJlIiwidmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwiZXJyb3JGb3VuZCIsIm1hdGNoIiwic2V0U3RhdGUiLCJndWVzdCIsImNvdW50IiwidXBkYXRlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJudW1iZXIiLCJmdW5jIiwiU2Vzc2lvbkNoYW5nZSIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRFcnJvciIsInNlc3Npb25MaXN0Iiwic2V0U2Vzc2lvbkxpc3QiLCJjaGFuZ2VTZXNzaW9uSWQiLCJzZXRDaGFuZ2VTZXNzaW9uIiwidXNlRWZmZWN0IiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwicmVnaXN0cmF0aW9uSWQiLCJkYXRhVHlwZSIsInR5cGUiLCJzdWNjZXNzIiwibGVuZ3RoIiwic2Vzc2lvblNlbGVjdCIsInByaWNlV2FybmluZyIsImNvbXBsZXRlZCIsInNlc3Npb25PcHRpb25zIiwibWFwIiwia2V5IiwiaWQiLCJ0aXRsZSIsImV2ZW50RGF0ZUZvcm1hdCIsImRheXMiLCJ0YXJnZXQiLCJjaGFuZ2VTZXNzaW9uIiwib25lT2ZUeXBlIiwiYm9vbCIsIkd1ZXN0TGlzdGluZyIsIm1pc3NpbmdJbmZvIiwiaSIsImd1ZXN0cyIsImxpc3RpbmciLCJwdXNoIiwiZGlzYWJsZWQiLCJzYXZlR3Vlc3RzIiwiZ29CYWNrIiwiYXJyYXkiLCJTdXBwbGVtZW50IiwicmVnaXN0cmF0aW9uIiwiYWRkT25JbmZvIiwiY29uZmVyZW5jZSIsInNlc3Npb24iLCJzdXBwbGVtZW50IiwibmV3R3Vlc3RzIiwibmV3TWVhbHMiLCJuZXdWZWdnaWUiLCJ0b3RhbEd1ZXN0cyIsInRvdGFsTWVhbHMiLCJ0b3RhbFZlZ2dpZSIsInRvdGFsR3Vlc3RDb3N0IiwidG90YWxNZWFsQ29zdCIsImVycm9yU2NyZWVuIiwiZ3Vlc3RTY3JlZW4iLCJkZWZhdWx0R3Vlc3QiLCJzdXBwbGVtZW50SWQiLCJpbmNyZWFzZU1lYWxzIiwiZGVjcmVhc2VNZWFscyIsImluY3JlYXNlR3Vlc3RzIiwiZGVjcmVhc2VHdWVzdHMiLCJpbmNyZWFzZVZlZ2dpZSIsImRlY3JlYXNlVmVnZ2llIiwidXBkYXRlR3Vlc3QiLCJjYW5jZWxTdXBwbGVtZW50Iiwic2F2ZSIsImxvYWQiLCJwcm9wZXJ0eSIsImNvbXBsZXRlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicGFyc2VJbnQiLCJndWVzdENvdW50IiwibWVhbFRpY2tldHMiLCJ2ZWdnaWVNZWFscyIsInBhcnNlRmxvYXQiLCJtZWFsQ29zdCIsImd1ZXN0Q29zdCIsIk9iamVjdCIsImFzc2lnbiIsImFsZXJ0IiwiYXR0ZW5kYW5jZUNhcCIsInBsdXJhbCIsIndvcmQiLCJidXR0b25UZXh0Iiwic2Vzc2lvbklkIiwic2Vzc2lvbkNoYW5nZSIsIm1lYWxNZXNzYWdlIiwibWVhbEluY2x1ZGVkIiwiZXZlbnREYXRlUmFuZ2UiLCJ0b0ZpeGVkIiwiZGlzYWJsZUd1ZXN0TWludXMiLCJkaXNhYmxlR3Vlc3RQbHVzIiwibWVhbFNlcnZpY2UiLCJkaXNhYmxlTWVhbE1pbnVzIiwiZGlzYWJsZU1lYWxQbHVzIiwiZGlzYWJsZVZlZ2dpZU1pbnVzIiwiZGlzYWJsZVZlZ2dpZVBsdXMiLCJzdWJtaXRCdXR0b24iLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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aEQsU0FBWCxHQUF1QjtBQUNyQm1CLGdCQUFjLEVBQUVsQixpREFBUyxDQUFDRTtBQURMLENBQXZCO0FBSUEwRyxnREFBUSxDQUFDQyxNQUFULGVBQ0UsMkRBQUMsVUFBRDtBQUFZLGdCQUFjLEVBQUUzRjtBQUE1QixFQURGLEVBRUU0RixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FGRixFIiwiZmlsZSI6IlN1cHBsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiU3VwcGxlbWVudFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vamF2YXNjcmlwdC9TdXBwbGVtZW50L2luZGV4LmpzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWVzdEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcjoge2ZpcnN0OiBmYWxzZSwgbGFzdDogZmFsc2UsIGVtYWlsOiBmYWxzZSwgYmFkRW1haWw6IGZhbHNlfVxuICAgIH1cbiAgICB0aGlzLmNoZWNrID0gdGhpcy5jaGVjay5iaW5kKHRoaXMpXG4gIH1cblxuICBjaGVjayhlcnJvck5hbWUsIGUpIHtcbiAgICBjb25zdCB7ZXJyb3J9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHt2YWx1ZX0gPSBlLmN1cnJlbnRUYXJnZXRcbiAgICBsZXQgZXJyb3JGb3VuZCA9IHZhbHVlID09ICcnXG4gICAgZXJyb3JbZXJyb3JOYW1lXSA9IGVycm9yRm91bmRcbiAgICBpZiAoZXJyb3JOYW1lID09PSAnZW1haWwnICYmICFlcnJvci5lbWFpbCkge1xuICAgICAgZXJyb3IuYmFkRW1haWwgPVxuICAgICAgICB2YWx1ZS5tYXRjaCgvXltcXHcuJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLDR9JC8pID09PSBudWxsXG4gICAgICBpZiAoZXJyb3IuYmFkRW1haWwpIHtcbiAgICAgICAgZXJyb3JGb3VuZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3J9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtndWVzdCwgY291bnQsIHVwZGF0ZX0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYi0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFkXCI+XG4gICAgICAgICAgICA8c3Ryb25nPkd1ZXN0ICN7Y291bnQgKyAxfTwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgb25CbHVyPXtlID0+IHRoaXMuY2hlY2soJ2ZpcnN0JywgZSl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlKGNvdW50LCAnZmlyc3ROYW1lJywgZSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2d1ZXN0LmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IuZmlyc3QgPyAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+UGxlYXNlIGZpbGwgdGhpcyBpbjwvc3Bhbj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCI+TGFzdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2UgPT4gdGhpcy5jaGVjaygnbGFzdCcsIGUpfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZShjb3VudCwgJ2xhc3ROYW1lJywgZSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2d1ZXN0Lmxhc3ROYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvci5sYXN0ID8gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPlBsZWFzZSBmaWxsIHRoaXMgaW48L3NwYW4+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2UgPT4gdGhpcy5jaGVjaygnZW1haWwnLCBlKX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGUoY291bnQsICdlbWFpbCcsIGUpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtndWVzdC5lbWFpbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IuZW1haWwgPyAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+UGxlYXNlIGZpbGwgdGhpcyBpbjwvc3Bhbj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yLmJhZEVtYWlsID8gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgQ2hlY2sgeW91ciBlbWFpbCBhZGRyZXNzXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5HdWVzdEZvcm0ucHJvcFR5cGVzID0ge1xuICBndWVzdDogUHJvcFR5cGVzLm9iamVjdCxcbiAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbi8qIGdsb2JhbCAkICovXG5cbmNvbnN0IFNlc3Npb25DaGFuZ2UgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzZXNzaW9uTGlzdCwgc2V0U2Vzc2lvbkxpc3RdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtjaGFuZ2VTZXNzaW9uSWQsIHNldENoYW5nZVNlc3Npb25dID0gdXNlU3RhdGUoMClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdjb25mZXJlbmNlL1Zpc2l0b3IvU2Vzc2lvbi9jaGFuZ2UnLFxuICAgICAgZGF0YToge1xuICAgICAgICByZWdpc3RyYXRpb25JZDogcHJvcHMucmVnaXN0cmF0aW9uSWRcbiAgICAgIH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgc2V0U2Vzc2lvbkxpc3QoZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIHNlc3Npb25zLi4uPC9kaXY+XG4gIH1cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+Q291bGQgbm90IGxvYWQgb3RoZXIgc2Vzc2lvbnMuPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgbGV0IHNlc3Npb25TZWxlY3QgPSAoXG4gICAgPGRpdj5cbiAgICAgIDxlbT5cbiAgICAgICAgTm8gYWx0ZXJuYXRpdmUgc2Vzc2lvbnMgYXZhaWxhYmxlIGR1ZSB0byBjb3N0IGRpZmZlcmVuY2Ugb3Igc2lnbnVwXG4gICAgICAgIGRlYWRsaW5lcy5cbiAgICAgIDwvZW0+XG4gICAgPC9kaXY+XG4gIClcbiAgbGV0IHByaWNlV2FybmluZ1xuICBpZiAocHJvcHMuY29tcGxldGVkID09PSAxKSB7XG4gICAgcHJpY2VXYXJuaW5nID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1pbmZvIHRleHQtd2hpdGVcIj5cbiAgICAgICAgTm90ZTogaWYgeW91IGhhdmUgYWxyZWFkeSBwYWlkLCB5b3UgbWF5IG9ubHkgY2hhbmdlIHRvIGEgc2Vzc2lvbiBvZiB0aGVcbiAgICAgICAgc2FtZSBjb3N0LlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIGlmIChzZXNzaW9uTGlzdC5sZW5ndGgpIHtcbiAgICBsZXQgc2Vzc2lvbk9wdGlvbnMgPSBbXVxuICAgIHNlc3Npb25PcHRpb25zID0gc2Vzc2lvbkxpc3QubWFwKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17dmFsdWUuaWR9PlxuICAgICAgICAgIHt2YWx1ZS50aXRsZX0gLSB7dmFsdWUuZXZlbnREYXRlRm9ybWF0fSAtIHt2YWx1ZS5kYXlzfSBkYXkgc2Vzc2lvblxuICAgICAgICA8L29wdGlvbj5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgc2Vzc2lvblNlbGVjdCA9IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOVwiPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDaGFuZ2VTZXNzaW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgdmFsdWU9e2NoYW5nZVNlc3Npb25JZH0+XG4gICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgZGVmYXVsdENoZWNrZWQgdmFsdWU9ezB9PlxuICAgICAgICAgICAgICAgIFByZWZlciB0byBjaGFuZ2UgeW91ciBzZXNzaW9uPyBQaWNrIGEgZGlmZmVyZW50IGRhdGUgYmVsb3cuXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICB7c2Vzc2lvbk9wdGlvbnN9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtjaGFuZ2VTZXNzaW9uSWQgPT0gMH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb3BzLmNoYW5nZVNlc3Npb24oY2hhbmdlU2Vzc2lvbklkKVxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgQ2hhbmdlIG15IHNlc3Npb25cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3ByaWNlV2FybmluZ31cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInAtMiBtYi0yXCI+e3Nlc3Npb25TZWxlY3R9PC9kaXY+XG59XG5cblNlc3Npb25DaGFuZ2UucHJvcFR5cGVzID0ge1xuICByZWdpc3RyYXRpb25JZDogUHJvcFR5cGVzLm51bWJlcixcbiAgY29tcGxldGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBjaGFuZ2VTZXNzaW9uOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZXNzaW9uQ2hhbmdlXG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgR3Vlc3RGb3JtIGZyb20gJy4uL1Nlc3Npb25TaWdudXAvR3Vlc3RGb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWVzdExpc3RpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgIHRoaXMubWlzc2luZ0luZm8gPSB0aGlzLm1pc3NpbmdJbmZvLmJpbmQodGhpcylcbiAgfVxuXG4gIG1pc3NpbmdJbmZvKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBndWVzdCA9IHRoaXMucHJvcHMuZ3Vlc3RzW2ldXG4gICAgICBpZiAoXG4gICAgICAgIGd1ZXN0LmVtYWlsLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICBndWVzdC5maXJzdE5hbWUubGVuZ3RoID09PSAwIHx8XG4gICAgICAgIGd1ZXN0Lmxhc3ROYW1lLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICBndWVzdC5lbWFpbC5tYXRjaCgvXltcXHcuJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLDR9JC8pID09PSBudWxsXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbGlzdGluZyA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy5ndWVzdHNbaV1cbiAgICAgIGxpc3RpbmcucHVzaChcbiAgICAgICAgPEd1ZXN0Rm9ybSBrZXk9e2l9IGd1ZXN0PXt2YWx1ZX0gY291bnQ9e2l9IHVwZGF0ZT17dGhpcy5wcm9wcy51cGRhdGV9IC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLm1pc3NpbmdJbmZvKClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPlBsZWFzZSBmaWxsIG91dCBpbmZvcm1hdGlvbiBvbiB5b3VyIG5ldyBndWVzdHMuPC9oMz5cbiAgICAgICAgPGRpdj57bGlzdGluZ308L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2F2ZUd1ZXN0c30+XG4gICAgICAgICAgICAgIHtkaXNhYmxlZCA/ICdDb21wbGV0ZSB0aGUgYWJvdmUgdG8gY29udGludWUnIDogJ1NhdmUgZ3Vlc3RzJ31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuZ29CYWNrfT5cbiAgICAgICAgICAgICAgR28gYmFja1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkd1ZXN0TGlzdGluZy5wcm9wVHlwZXMgPSB7XG4gIGd1ZXN0czogUHJvcFR5cGVzLmFycmF5LFxuICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICBzYXZlR3Vlc3RzOiBQcm9wVHlwZXMuZnVuYyxcbiAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGdvQmFjazogUHJvcFR5cGVzLmZ1bmNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgR3Vlc3RMaXN0aW5nIGZyb20gJy4vR3Vlc3RMaXN0aW5nJ1xuaW1wb3J0IFNlc3Npb25DaGFuZ2UgZnJvbSAnLi4vU2hhcmVkL1Nlc3Npb25DaGFuZ2UnXG5cbi8qIGdsb2JhbCAkLCByZWdpc3RyYXRpb25JZCAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdXBwbGVtZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmVnaXN0cmF0aW9uOiB7fSxcbiAgICAgIGFkZE9uSW5mbzoge30sXG4gICAgICBjb25mZXJlbmNlOiB7fSxcbiAgICAgIHNlc3Npb246IHt9LFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHN1cHBsZW1lbnQ6IHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5ld0d1ZXN0czogMCxcbiAgICAgICAgbmV3TWVhbHM6IDAsXG4gICAgICAgIG5ld1ZlZ2dpZTogMFxuICAgICAgfSxcbiAgICAgIHRvdGFsR3Vlc3RzOiAwLFxuICAgICAgdG90YWxNZWFsczogMCxcbiAgICAgIHRvdGFsVmVnZ2llOiAwLFxuICAgICAgdG90YWxHdWVzdENvc3Q6IDAsXG4gICAgICB0b3RhbE1lYWxDb3N0OiAwLFxuICAgICAgZ3Vlc3RzOiBbXSxcbiAgICAgIGVycm9yU2NyZWVuOiBmYWxzZSxcbiAgICAgIGd1ZXN0U2NyZWVuOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmRlZmF1bHRHdWVzdCA9IHtcbiAgICAgIGlkOiAnMCcsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgcmVnaXN0cmF0aW9uSWQ6ICcwJyxcbiAgICAgIHN1cHBsZW1lbnRJZDogJzAnXG4gICAgfVxuICAgIHRoaXMuaW5jcmVhc2VNZWFscyA9IHRoaXMuaW5jcmVhc2VNZWFscy5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWNyZWFzZU1lYWxzID0gdGhpcy5kZWNyZWFzZU1lYWxzLmJpbmQodGhpcylcbiAgICB0aGlzLmluY3JlYXNlR3Vlc3RzID0gdGhpcy5pbmNyZWFzZUd1ZXN0cy5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWNyZWFzZUd1ZXN0cyA9IHRoaXMuZGVjcmVhc2VHdWVzdHMuYmluZCh0aGlzKVxuICAgIHRoaXMuaW5jcmVhc2VWZWdnaWUgPSB0aGlzLmluY3JlYXNlVmVnZ2llLmJpbmQodGhpcylcbiAgICB0aGlzLmRlY3JlYXNlVmVnZ2llID0gdGhpcy5kZWNyZWFzZVZlZ2dpZS5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVHdWVzdCA9IHRoaXMudXBkYXRlR3Vlc3QuYmluZCh0aGlzKVxuICAgIHRoaXMuZ3Vlc3RTY3JlZW4gPSB0aGlzLmd1ZXN0U2NyZWVuLmJpbmQodGhpcylcbiAgICB0aGlzLmNhbmNlbFN1cHBsZW1lbnQgPSB0aGlzLmNhbmNlbFN1cHBsZW1lbnQuYmluZCh0aGlzKVxuICAgIHRoaXMuZ29CYWNrID0gdGhpcy5nb0JhY2suYmluZCh0aGlzKVxuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2VTZXNzaW9uID0gdGhpcy5jaGFuZ2VTZXNzaW9uLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZCgpXG4gIH1cblxuICB1cGRhdGVHdWVzdChjb3VudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgY29uc3Qge2d1ZXN0c30gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgZ3Vlc3QgPSBndWVzdHNbY291bnRdXG4gICAgZ3Vlc3RbcHJvcGVydHldID0gdmFsdWUudGFyZ2V0LnZhbHVlXG4gICAgZ3Vlc3QuY29tcGxldGUgPVxuICAgICAgZ3Vlc3QuZmlyc3ROYW1lLmxlbmd0aCA+IDAgJiZcbiAgICAgIGd1ZXN0Lmxhc3ROYW1lLmxlbmd0aCA+IDAgJiZcbiAgICAgIGd1ZXN0LmVtYWlsLmxlbmd0aCA+IDAgJiZcbiAgICAgIGd1ZXN0LmVtYWlsLm1hdGNoKC9eW1xcdy4lKy1dK0BbYS16MC05Li1dK1xcLlthLXpdezIsNH0kLykgIT09IG51bGxcbiAgICB0aGlzLnNldFN0YXRlKHtndWVzdHN9KVxuICB9XG5cbiAgY2FuY2VsU3VwcGxlbWVudCgpIHtcbiAgICBjb25zdCB7c3VwcGxlbWVudCwgcmVnaXN0cmF0aW9ufSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChzdXBwbGVtZW50LmlkID4gMCkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgY29uZmVyZW5jZS9WaXNpdG9yL1N1cHBsZW1lbnQvJHtzdXBwbGVtZW50LmlkfS9pbmNvbXBsZXRlYCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgdHlwZTogJ2RlbGV0ZScsXG4gICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9XG4gICAgICAgICAgICAnY29uZmVyZW5jZS9WaXNpdG9yL1JlZ2lzdHJhdGlvbi8nICsgc3VwcGxlbWVudC5yZWdpc3RyYXRpb25JZFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yU2NyZWVuOiB0cnVlfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPVxuICAgICAgICAnY29uZmVyZW5jZS9WaXNpdG9yL1JlZ2lzdHJhdGlvbi8nICsgcmVnaXN0cmF0aW9uLmlkXG4gICAgfVxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBgY29uZmVyZW5jZS9WaXNpdG9yL1N1cHBsZW1lbnQvY3VycmVudGAsXG4gICAgICBkYXRhOiB7cmVnaXN0cmF0aW9uSWQ6IHRoaXMucHJvcHMucmVnaXN0cmF0aW9uSWR9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHtyZWdpc3RyYXRpb24sIHNlc3Npb24sIHN1cHBsZW1lbnQsIGd1ZXN0c30gPSBkYXRhXG4gICAgICAgIGNvbnN0IHRvdGFsR3Vlc3RzID1cbiAgICAgICAgICBwYXJzZUludChzdXBwbGVtZW50Lm5ld0d1ZXN0cykgKyBwYXJzZUludChyZWdpc3RyYXRpb24uZ3Vlc3RDb3VudClcbiAgICAgICAgY29uc3QgdG90YWxNZWFscyA9XG4gICAgICAgICAgcGFyc2VJbnQoc3VwcGxlbWVudC5uZXdNZWFscykgKyBwYXJzZUludChyZWdpc3RyYXRpb24ubWVhbFRpY2tldHMpXG4gICAgICAgIGNvbnN0IHRvdGFsVmVnZ2llID1cbiAgICAgICAgICBwYXJzZUludChzdXBwbGVtZW50Lm5ld1ZlZ2dpZSkgKyBwYXJzZUludChyZWdpc3RyYXRpb24udmVnZ2llTWVhbHMpXG5cbiAgICAgICAgY29uc3QgdG90YWxNZWFsQ29zdCA9IHBhcnNlRmxvYXQoc2Vzc2lvbi5tZWFsQ29zdCkgKiBzdXBwbGVtZW50Lm5ld01lYWxzXG4gICAgICAgIGNvbnN0IHRvdGFsR3Vlc3RDb3N0ID1cbiAgICAgICAgICBwYXJzZUZsb2F0KHNlc3Npb24uZ3Vlc3RDb3N0KSAqIHN1cHBsZW1lbnQubmV3R3Vlc3RzXG5cbiAgICAgICAgaWYgKGd1ZXN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBndWVzdHMucHVzaChPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRHdWVzdCkpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcmVnaXN0cmF0aW9uOiBkYXRhLnJlZ2lzdHJhdGlvbixcbiAgICAgICAgICBzdXBwbGVtZW50OiBkYXRhLnN1cHBsZW1lbnQsXG4gICAgICAgICAgc2Vzc2lvbjogZGF0YS5zZXNzaW9uLFxuICAgICAgICAgIGNvbmZlcmVuY2U6IGRhdGEuY29uZmVyZW5jZSxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBndWVzdHMsXG4gICAgICAgICAgdG90YWxHdWVzdHMsXG4gICAgICAgICAgdG90YWxNZWFscyxcbiAgICAgICAgICB0b3RhbFZlZ2dpZSxcbiAgICAgICAgICB0b3RhbE1lYWxDb3N0LFxuICAgICAgICAgIHRvdGFsR3Vlc3RDb3N0XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JTY3JlZW46IHRydWV9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IHtzdXBwbGVtZW50LCByZWdpc3RyYXRpb24sIGd1ZXN0c30gPSB0aGlzLnN0YXRlXG4gICAgbGV0IHVybCA9ICdjb25mZXJlbmNlL1Zpc2l0b3IvU3VwcGxlbWVudCdcbiAgICBsZXQgdHlwZSA9ICdwb3N0J1xuICAgIGlmIChzdXBwbGVtZW50LmlkID4gMCkge1xuICAgICAgdXJsID0gdXJsICsgJy8nICsgc3VwcGxlbWVudC5pZFxuICAgICAgdHlwZSA9ICdwdXQnXG4gICAgfVxuICAgICQuYWpheCh7XG4gICAgICB1cmwsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlZ2lzdHJhdGlvbklkOiByZWdpc3RyYXRpb24uaWQsXG4gICAgICAgIG5ld0d1ZXN0czogc3VwcGxlbWVudC5uZXdHdWVzdHMsXG4gICAgICAgIG5ld01lYWxzOiBzdXBwbGVtZW50Lm5ld01lYWxzLFxuICAgICAgICBuZXdWZWdnaWU6IHN1cHBsZW1lbnQubmV3VmVnZ2llLFxuICAgICAgICBndWVzdHNcbiAgICAgIH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZSxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9XG4gICAgICAgICAgJ2NvbmZlcmVuY2UvVmlzaXRvci9TdXBwbGVtZW50LycgKyBkYXRhLmlkICsgJy9jb21wbGV0ZSdcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICBhbGVydCgnU2VydmVyIGVycm9yIHByZXZlbnRlZCByZWdpc3RyYXRpb24gdXBkYXRlLicpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGdvQmFjaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtndWVzdFNjcmVlbjogZmFsc2V9KVxuICB9XG5cbiAgaW5jcmVhc2VNZWFscygpIHtcbiAgICBsZXQge3N1cHBsZW1lbnQsIHNlc3Npb24sIHRvdGFsTWVhbHMsIHRvdGFsTWVhbENvc3R9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHttZWFsQ29zdH0gPSBzZXNzaW9uXG4gICAgc3VwcGxlbWVudC5uZXdNZWFscysrXG4gICAgdG90YWxNZWFscysrXG4gICAgdG90YWxNZWFsQ29zdCArPSBwYXJzZUZsb2F0KG1lYWxDb3N0KVxuICAgIHRoaXMuc2V0U3RhdGUoe3N1cHBsZW1lbnQsIHRvdGFsTWVhbHMsIHRvdGFsTWVhbENvc3R9KVxuICB9XG5cbiAgZGVjcmVhc2VNZWFscygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdXBwbGVtZW50Lm5ld01lYWxzID4gMCkge1xuICAgICAgbGV0IHtcbiAgICAgICAgc3VwcGxlbWVudCxcbiAgICAgICAgc2Vzc2lvbixcbiAgICAgICAgdG90YWxNZWFscyxcbiAgICAgICAgdG90YWxNZWFsQ29zdCxcbiAgICAgICAgdG90YWxWZWdnaWVcbiAgICAgIH0gPSB0aGlzLnN0YXRlXG4gICAgICBjb25zdCB7bWVhbENvc3R9ID0gc2Vzc2lvblxuICAgICAgc3VwcGxlbWVudC5uZXdNZWFscy0tXG4gICAgICBpZiAoc3VwcGxlbWVudC5uZXdWZWdnaWUgPiBzdXBwbGVtZW50Lm5ld01lYWxzKSB7XG4gICAgICAgIHN1cHBsZW1lbnQubmV3VmVnZ2llID0gc3VwcGxlbWVudC5uZXdNZWFsc1xuICAgICAgfVxuICAgICAgdG90YWxNZWFscy0tXG4gICAgICBpZiAodG90YWxWZWdnaWUgPiB0b3RhbE1lYWxzKSB7XG4gICAgICAgIHRvdGFsVmVnZ2llID0gdG90YWxNZWFsc1xuICAgICAgfVxuICAgICAgdG90YWxNZWFsQ29zdCAtPSBwYXJzZUZsb2F0KG1lYWxDb3N0KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN1cHBsZW1lbnQsXG4gICAgICAgIHRvdGFsTWVhbHMsXG4gICAgICAgIHRvdGFsTWVhbENvc3QsXG4gICAgICAgIHRvdGFsVmVnZ2llXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGluY3JlYXNlR3Vlc3RzKCkge1xuICAgIGNvbnN0IHtzdXBwbGVtZW50LCBzZXNzaW9uLCBndWVzdHN9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCB7dG90YWxHdWVzdHMsIHRvdGFsR3Vlc3RDb3N0fSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBhdHRlbmRhbmNlQ2FwID0gcGFyc2VJbnQoc2Vzc2lvbi5hdHRlbmRhbmNlQ2FwKVxuICAgIGNvbnN0IHtndWVzdENvc3R9ID0gc2Vzc2lvblxuICAgIGlmICh0b3RhbEd1ZXN0cyA+PSBhdHRlbmRhbmNlQ2FwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc3VwcGxlbWVudC5uZXdHdWVzdHMrK1xuICAgIGlmIChndWVzdHMubGVuZ3RoIDwgc3VwcGxlbWVudC5uZXdHdWVzdHMpIHtcbiAgICAgIGd1ZXN0cy5wdXNoKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEd1ZXN0KSlcbiAgICB9XG4gICAgdG90YWxHdWVzdHMgPSBwYXJzZUludCh0b3RhbEd1ZXN0cykgKyAxXG4gICAgdG90YWxHdWVzdENvc3QgKz0gcGFyc2VGbG9hdChndWVzdENvc3QpXG4gICAgdGhpcy5zZXRTdGF0ZSh7c3VwcGxlbWVudCwgdG90YWxHdWVzdHMsIHRvdGFsR3Vlc3RDb3N0fSlcbiAgfVxuXG4gIGRlY3JlYXNlR3Vlc3RzKCkge1xuICAgIGNvbnN0IHtzdXBwbGVtZW50LCBzZXNzaW9ufSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoc3VwcGxlbWVudC5uZXdHdWVzdHMgPiAwKSB7XG4gICAgICBsZXQge3RvdGFsR3Vlc3RzLCB0b3RhbEd1ZXN0Q29zdH0gPSB0aGlzLnN0YXRlXG4gICAgICBjb25zdCB7Z3Vlc3RDb3N0fSA9IHNlc3Npb25cbiAgICAgIHN1cHBsZW1lbnQubmV3R3Vlc3RzLS1cbiAgICAgIHRvdGFsR3Vlc3RzLS1cbiAgICAgIHRvdGFsR3Vlc3RDb3N0IC09IHBhcnNlRmxvYXQoZ3Vlc3RDb3N0KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c3VwcGxlbWVudCwgdG90YWxHdWVzdHMsIHRvdGFsR3Vlc3RDb3N0fSlcbiAgICB9XG4gIH1cblxuICBpbmNyZWFzZVZlZ2dpZSgpIHtcbiAgICBjb25zdCBhdHRlbmRhbmNlQ2FwID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5yZWdpc3RyYXRpb24uYXR0ZW5kYW5jZUNhcClcbiAgICBsZXQge3N1cHBsZW1lbnQsIHRvdGFsVmVnZ2llfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodG90YWxWZWdnaWUgPj0gYXR0ZW5kYW5jZUNhcCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3VwcGxlbWVudC5uZXdWZWdnaWUrK1xuICAgIHRvdGFsVmVnZ2llKytcbiAgICB0aGlzLnNldFN0YXRlKHtzdXBwbGVtZW50LCB0b3RhbFZlZ2dpZX0pXG4gIH1cblxuICBkZWNyZWFzZVZlZ2dpZSgpIHtcbiAgICBpZiAocGFyc2VJbnQodGhpcy5zdGF0ZS5zdXBwbGVtZW50Lm5ld1ZlZ2dpZSA+IDApKSB7XG4gICAgICBsZXQge3N1cHBsZW1lbnQsIHRvdGFsVmVnZ2llfSA9IHRoaXMuc3RhdGVcbiAgICAgIHN1cHBsZW1lbnQubmV3VmVnZ2llLS1cbiAgICAgIHRvdGFsVmVnZ2llLS1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe3N1cHBsZW1lbnQsIHRvdGFsVmVnZ2llfSlcbiAgICB9XG4gIH1cblxuICBkaXNhYmxlTWVhbE1pbnVzKCkge1xuICAgIHJldHVybiBwYXJzZUludCh0aGlzLnN0YXRlLnN1cHBsZW1lbnQubmV3TWVhbHMpID09PSAwXG4gIH1cblxuICBkaXNhYmxlR3Vlc3RNaW51cygpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5zdGF0ZS5zdXBwbGVtZW50Lm5ld0d1ZXN0cykgPT09IDBcbiAgfVxuXG4gIGRpc2FibGVWZWdnaWVNaW51cygpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5zdGF0ZS5zdXBwbGVtZW50Lm5ld1ZlZ2dpZSkgPT09IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG1lYWwgdGlja2V0cyBpcyB0b3RhbCBndWVzdHMgcGx1cyA0XG4gICAqL1xuICBkaXNhYmxlTWVhbFBsdXMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHBhcnNlSW50KHRoaXMuc3RhdGUudG90YWxNZWFscykgPj0gcGFyc2VJbnQodGhpcy5zdGF0ZS50b3RhbEd1ZXN0cykgKyA0XG4gICAgKVxuICB9XG5cbiAgZGlzYWJsZUd1ZXN0UGx1cygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgcGFyc2VJbnQodGhpcy5zdGF0ZS50b3RhbEd1ZXN0cykgPj1cbiAgICAgIHBhcnNlSW50KHRoaXMuc3RhdGUuc2Vzc2lvbi5hdHRlbmRhbmNlQ2FwKVxuICAgIClcbiAgfVxuXG4gIGRpc2FibGVWZWdnaWVQbHVzKCkge1xuICAgIHJldHVybiBwYXJzZUludCh0aGlzLnN0YXRlLnRvdGFsVmVnZ2llKSA+PSBwYXJzZUludCh0aGlzLnN0YXRlLnRvdGFsTWVhbHMpXG4gIH1cblxuICBzdWJtaXRCdXR0b24oKSB7XG4gICAgY29uc3Qge25ld01lYWxzLCBuZXdHdWVzdHN9ID0gdGhpcy5zdGF0ZS5zdXBwbGVtZW50XG4gICAgaWYgKG5ld0d1ZXN0cyA9PSAwICYmIG5ld01lYWxzID09IDApIHtcbiAgICAgIHJldHVybiA8ZGl2PjwvZGl2PlxuICAgIH1cblxuICAgIGNvbnN0IHBsdXJhbCA9IChjb3VudCwgd29yZCkgPT4ge1xuICAgICAgcmV0dXJuIGNvdW50ID4gMSA/IGAke3dvcmR9c2AgOiB3b3JkXG4gICAgfVxuXG4gICAgbGV0IGJ1dHRvblRleHRcbiAgICBpZiAobmV3R3Vlc3RzID4gMCAmJiBuZXdNZWFscyA+IDApIHtcbiAgICAgIGJ1dHRvblRleHQgPVxuICAgICAgICBuZXdHdWVzdHMgK1xuICAgICAgICAnICcgK1xuICAgICAgICBwbHVyYWwobmV3R3Vlc3RzLCAnZ3Vlc3QnKSArXG4gICAgICAgICcgYW5kICcgK1xuICAgICAgICBuZXdNZWFscyArXG4gICAgICAgICcgJyArXG4gICAgICAgIHBsdXJhbChuZXdNZWFscywgJ21lYWwgdGlja2V0JylcbiAgICB9IGVsc2UgaWYgKG5ld0d1ZXN0cyA+IDApIHtcbiAgICAgIGJ1dHRvblRleHQgPSBuZXdHdWVzdHMgKyAnICcgKyBwbHVyYWwobmV3R3Vlc3RzLCAnZ3Vlc3QnKVxuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25UZXh0ID0gbmV3TWVhbHMgKyAnICcgKyBwbHVyYWwobmV3TWVhbHMsICdtZWFsJylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLmd1ZXN0U2NyZWVufT5cbiAgICAgICAgQWRkIHtidXR0b25UZXh0fSZuYnNwO3RvIG15IHJlZ2lzdHJhdGlvblxuICAgICAgPC9idXR0b24+XG4gICAgKVxuICB9XG5cbiAgZ3Vlc3RTY3JlZW4oKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc3VwcGxlbWVudC5uZXdHdWVzdHMgPiAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtndWVzdFNjcmVlbjogdHJ1ZX0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2F2ZSgpXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU2Vzc2lvbihzZXNzaW9uSWQpIHtcbiAgICBjb25zdCB7cmVnaXN0cmF0aW9ufSA9IHRoaXMuc3RhdGVcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBgY29uZmVyZW5jZS9WaXNpdG9yL1JlZ2lzdHJhdGlvbi8ke3JlZ2lzdHJhdGlvbi5pZH0vY2hhbmdlU2Vzc2lvbmAsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNlc3Npb25JZDogc2Vzc2lvbklkXG4gICAgICB9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdwYXRjaCcsXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGNvbmZlcmVuY2UvVmlzaXRvci9SZWdpc3RyYXRpb24vJHtyZWdpc3RyYXRpb24uaWR9YFxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yU2NyZWVuOiB0cnVlfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzZXNzaW9uQ2hhbmdlID0gbnVsbFxuICAgIGlmICh0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbi5pZCA+IDApIHtcbiAgICAgIHNlc3Npb25DaGFuZ2UgPSAoXG4gICAgICAgIDxTZXNzaW9uQ2hhbmdlXG4gICAgICAgICAgcmVnaXN0cmF0aW9uSWQ9e3RoaXMuc3RhdGUucmVnaXN0cmF0aW9uLmlkfVxuICAgICAgICAgIGNoYW5nZVNlc3Npb249e3RoaXMuY2hhbmdlU2Vzc2lvbn1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuZXJyb3JTY3JlZW4pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+RXJyb3I8L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhpcyBwYWdlIGV4cGVyaWVuY2VkIGFuIHVucmVjb3ZlcmFibGUgZXJyb3IuIFBsZWFzZSBjb250YWN0IHRoZVxuICAgICAgICAgICAgc2l0ZSBhZG1pbmlzdHJhdG9ycy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuZ3Vlc3RTY3JlZW4pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPnt0aGlzLnN0YXRlLmNvbmZlcmVuY2UudGl0bGV9PC9oMj5cbiAgICAgICAgICA8R3Vlc3RMaXN0aW5nXG4gICAgICAgICAgICBjb3VudD17dGhpcy5zdGF0ZS5zdXBwbGVtZW50Lm5ld0d1ZXN0c31cbiAgICAgICAgICAgIGdvQmFjaz17dGhpcy5nb0JhY2t9XG4gICAgICAgICAgICBndWVzdHM9e3RoaXMuc3RhdGUuZ3Vlc3RzfVxuICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZUd1ZXN0fVxuICAgICAgICAgICAgc2F2ZUd1ZXN0cz17dGhpcy5zYXZlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBjb25zdCB7c3VwcGxlbWVudCwgc2Vzc2lvbiwgY29uZmVyZW5jZX0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qge2d1ZXN0Q291bnQsIG1lYWxUaWNrZXRzLCB2ZWdnaWVNZWFsc30gPSB0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvblxuICAgIGNvbnN0IHtcbiAgICAgIHRvdGFsR3Vlc3RDb3N0LFxuICAgICAgdG90YWxNZWFsQ29zdCxcbiAgICAgIHRvdGFsR3Vlc3RzLFxuICAgICAgdG90YWxNZWFscyxcbiAgICAgIHRvdGFsVmVnZ2llXG4gICAgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IG1lYWxNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHNlc3Npb24ubWVhbEluY2x1ZGVkID09PSAxID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPkV4dHJhIG1lYWwgdGlja2V0czwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbWFsbCBkLWJsb2NrXCI+XG4gICAgICAgICAgICBBIG1lYWwgaXMgaW5jbHVkZWQgd2l0aCBlYWNoIHJlZ2lzdHJhdGlvbi5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgRXh0cmEgbWVhbHMgYXJlIGZvciB1bnJlZ2lzdGVyZWQgcGFydGljaXBhbnRzLlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPHNwYW4+TWVhbCB0aWNrZXRzPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtYWxsIGQtYmxvY2tcIj5cbiAgICAgICAgICAgIE1lYWxzIGFyZSBub3QgaW5jbHVkZWQgd2l0aCByZWdpc3RyYXRpb24uXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFlvdSBtYXkgcHJlcGF5IGhlcmUgb3Igd2FpdCBmb3IgdGhlIGRheSBvZiB0aGUgZXZlbnQuXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj57Y29uZmVyZW5jZS50aXRsZX08L2gyPlxuICAgICAgICA8aDM+XG4gICAgICAgICAge3Nlc3Npb24udGl0bGV9IC0ge3Nlc3Npb24uZXZlbnREYXRlUmFuZ2V9XG4gICAgICAgIDwvaDM+XG4gICAgICAgIHtzZXNzaW9uQ2hhbmdlfVxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIC8+XG4gICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5DdXJyZW50PC90aD5cbiAgICAgICAgICAgICAgPHRoPkFkZGl0aW9uYWw8L3RoPlxuICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxuICAgICAgICAgICAgICA8dGggLz5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwibGVhZFwiPlxuICAgICAgICAgICAgICA8dGg+R3Vlc3RzPC90aD5cbiAgICAgICAgICAgICAgPHRkPiR7c2Vzc2lvbi5ndWVzdENvc3QudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e2d1ZXN0Q291bnR9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntzdXBwbGVtZW50Lm5ld0d1ZXN0c308L3RkPlxuICAgICAgICAgICAgICA8dGQ+e3RvdGFsR3Vlc3RzfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBtci0xXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVjcmVhc2VHdWVzdHN9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5kaXNhYmxlR3Vlc3RNaW51cygpfT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1taW51c1wiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaW5jcmVhc2VHdWVzdHN9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5kaXNhYmxlR3Vlc3RQbHVzKCl9PlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIHtzZXNzaW9uLm1lYWxTZXJ2aWNlID09PSAxID8gKFxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwibGVhZFwiPlxuICAgICAgICAgICAgICAgIDx0aD57bWVhbE1lc3NhZ2UoKX08L3RoPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3Nlc3Npb24ubWVhbENvc3QudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57bWVhbFRpY2tldHN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3N1cHBsZW1lbnQubmV3TWVhbHN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RvdGFsTWVhbHN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIG1yLTFcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRlY3JlYXNlTWVhbHN9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLmRpc2FibGVNZWFsTWludXMoKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1taW51c1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5pbmNyZWFzZU1lYWxzfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5kaXNhYmxlTWVhbFBsdXMoKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAge3Nlc3Npb24ubWVhbFNlcnZpY2UgPT09IDEgPyAoXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJsZWFkXCI+XG4gICAgICAgICAgICAgICAgPHRoPlZlZ2V0YXJpYW4gbWVhbHM8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57dmVnZ2llTWVhbHN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3N1cHBsZW1lbnQubmV3VmVnZ2llfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt0b3RhbFZlZ2dpZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbXItMVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVjcmVhc2VWZWdnaWV9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLmRpc2FibGVWZWdnaWVNaW51cygpfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1pbnVzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmluY3JlYXNlVmVnZ2llfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5kaXNhYmxlVmVnZ2llUGx1cygpfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImxlYWRcIj5cbiAgICAgICAgICAgICAgPHRoPlRvdGFsIGNvc3Q8L3RoPlxuICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjVcIj5cbiAgICAgICAgICAgICAgICAkeyh0b3RhbE1lYWxDb3N0ICsgdG90YWxHdWVzdENvc3QpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItM1wiPnt0aGlzLnN1Ym1pdEJ1dHRvbigpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3RoaXMuY2FuY2VsU3VwcGxlbWVudH0+XG4gICAgICAgICAgICBDYW5jZWwgcmVnaXN0cmF0aW9uIGFkZGl0aW9uc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5TdXBwbGVtZW50LnByb3BUeXBlcyA9IHtcbiAgcmVnaXN0cmF0aW9uSWQ6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8U3VwcGxlbWVudCByZWdpc3RyYXRpb25JZD17cmVnaXN0cmF0aW9uSWR9IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnU3VwcGxlbWVudCcpXG4pXG4iXSwic291cmNlUm9vdCI6IiJ9