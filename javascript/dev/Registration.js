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
/******/ 		"Registration": 0
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
/******/ 	deferredModules.push(["./javascript/Registration/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Registration/RegistrationForm.js":
/*!*****************************************************!*\
  !*** ./javascript/Registration/RegistrationForm.js ***!
  \*****************************************************/
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

var RegistrationForm = function RegistrationForm(_ref) {
  var registration = _ref.registration,
      availableSessions = _ref.availableSessions,
      done = _ref.done;

  if (availableSessions.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "alert alert-warning"
    }, "No sessions are available due to cost diference or date.");
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(availableSessions[0].id),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      newSessionId = _useState2[0],
      setNewSessionId = _useState2[1];

  var updateSession = function updateSession() {
    $.ajax({
      url: "conference/Admin/Registration/".concat(registration.id, "/changeSession"),
      data: {
        sessionId: newSessionId
      },
      dataType: 'json',
      type: 'patch',
      success: function success() {
        done();
      },
      error: function error() {}
    });
  };

  var optionList = availableSessions.map(function (value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: value.id,
      value: value.id
    }, value.eventDateFormat, " \u2013 ", value.title);
  });
  var options = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    className: "form-control",
    value: newSessionId,
    onChange: function onChange(e) {
      return setNewSessionId(e.target.value);
    }
  }, optionList);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, registration.completed === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "This registration is complete so only sessions of the same cost may be chosen.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Registration is unpaid so any future session may be chosen."), options, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-success",
    onClick: updateSession
  }, "Update"));
};

RegistrationForm.propTypes = {
  registration: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  availableSessions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  done: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (RegistrationForm);

/***/ }),

/***/ "./javascript/Registration/index.jsx":
/*!*******************************************!*\
  !*** ./javascript/Registration/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Registration; });
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
/* harmony import */ var _RegistrationForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RegistrationForm */ "./javascript/Registration/RegistrationForm.js");
/* harmony import */ var _essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @essappstate/react-navbar */ "./node_modules/@essappstate/react-navbar/build/index.js");
/* harmony import */ var _essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);










function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







/* global $, sessionId */

var Registration = /*#__PURE__*/function (_Listing) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Registration, _Listing);

  var _super = _createSuper(Registration);

  function Registration(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Registration);

    _this = _super.call(this, props);
    _this.restUrl = 'conference/Admin/Registration';
    _this.label = 'Registration';
    _this.state.session = {};
    _this.state.availableSessions = [];
    _this.state.limit = 20;
    _this.changeSession = _this.changeSession.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.defaultResource = {
      createDate: 0,
      updateDate: 0,
      cancelledDate: 0,
      cancelledBy: '',
      sessionId: 0,
      conferenceId: 0,
      guestCount: 0,
      mealTickets: 0,
      veggieMeals: 0,
      completed: 0,
      id: 0,
      visitorId: 0,
      totalCost: 0,
      amountPaid: 0,
      visitorName: '',
      signedIn: 0
    };

    var dropdown = function dropdown(key) {
      var registrationId = _this.state.listing[key].id;
      var registration = _this.state.listing[key];

      var cancelOrRefund = function cancelOrRefund() {
        if (registration.completed) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            href: "conference/Admin/Refund/?registrationId=".concat(registrationId),
            className: "dropdown-item"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "fas fa-cash-register"
          }), "\xA0Refund");
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            href: "#",
            className: "dropdown-item pointer",
            onClick: _this.cancel.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), key)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "fas fa-ban text-danger"
          }), "\xA0Cancel");
        }
      };

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
        href: "conference/Admin/Payment/?registrationId=".concat(registrationId),
        className: "dropdown-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "far fa-credit-card"
      }), "\xA0Payments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "conference/Admin/Guest/?registrationId=".concat(registrationId),
        className: "dropdown-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-users"
      }), "\xA0Guests"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
        className: "my-0"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "conference/Admin/Visitor/loginAs?visitorId=".concat(registration.visitorId, "&amp;registrationId=").concat(registration.id),
        className: "dropdown-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-sign-in-alt"
      }), "\xA0Sign in as visitor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "dropdown-item pointer",
        href: "conference/Admin/Supplement/add/?registrationId=".concat(registrationId)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-plus"
      }), "\xA0Add guest or meals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "dropdown-item pointer",
        href: "#",
        onClick: _this.changeSession.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), key)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-exchange-alt"
      }), "\xA0Change session"), cancelOrRefund()));
    };

    _this.columns = [{
      column: 'options',
      callback: function callback(row, key) {
        return dropdown(key, row.id);
      }
    }, {
      column: 'id',
      label: 'Id'
    }, {
      column: 'lastName',
      callback: function callback(row) {
        if (row.firstName === null || row.firstName.length === 0) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("em", null, "Incomplete");
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            href: "conference/Admin/Registration/visitor?visitorId=".concat(row.visitorId)
          }, row.firstName, " ", row.lastName);
        }
      },
      label: 'Parent name',
      sort: true
    }, {
      column: 'studentLastName',
      callback: function callback(row) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, row.studentFirstName, "\xA0", row.studentLastName);
      },
      label: 'Student name',
      sort: true
    }, {
      column: 'totalCost',
      label: 'Cost',
      callback: function callback(row) {
        var totalCost = parseFloat(row.totalCost).toFixed(2);
        return "$".concat(totalCost);
      }
    }, {
      column: 'amountPaid',
      label: 'Paid',
      callback: function callback(row) {
        var amountPaid = parseFloat(row.amountPaid).toFixed(2);
        return "$".concat(amountPaid);
      }
    }, {
      column: 'refundAmount',
      label: 'Refunded',
      callback: function callback(row) {
        return "$".concat(parseFloat(row.refundAmount).toFixed(2));
      }
    }, {
      column: 'completed',
      callback: function callback(row) {
        return row.completed === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "text-success"
        }, "Yes") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "text-danger"
        }, "No");
      },
      label: 'Completed',
      sort: true
    }];
    _this.state.resource = Object.assign({}, _this.defaultResource);
    _this.loadSession = _this.loadSession.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.loadAvailable = _this.loadAvailable.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Registration, [{
    key: "load",
    value: function load() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Registration.prototype), "load", this).call(this, {
        sessionId: this.props.sessionId
      });

      this.loadSession();
    }
  }, {
    key: "changeSession",
    value: function changeSession(key, e) {
      e.preventDefault();
      this.loadResource(key, this.loadAvailable);
      this.overlayOn('form');
    }
  }, {
    key: "cancel",
    value: function cancel(key, e) {
      var _this2 = this;

      e.preventDefault();
      var registration = this.state.listing[key];

      if (prompt('You sure you want to cancel this registration? If so type CANCEL below.') === 'CANCEL') {
        $.ajax({
          url: "conference/Admin/Registration/".concat(registration.id, "/cancel"),
          dataType: 'json',
          type: 'patch',
          success: function success() {
            _this2.load();
          },
          error: function error() {}
        });
      }
    }
  }, {
    key: "loadAvailable",
    value: function loadAvailable() {
      var _this3 = this;

      $.ajax({
        url: 'conference/Admin/Session/available',
        data: {
          conferenceId: this.state.session.conferenceId,
          registrationId: this.state.resource.id
        },
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          if (data.listing !== null) {
            _this3.setState({
              availableSessions: data.listing
            });
          }
        },
        error: function error() {}
      });
    }
  }, {
    key: "loadSession",
    value: function loadSession() {
      var _this4 = this;

      $.ajax({
        url: 'conference/Admin/Session/' + this.props.sessionId,
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          _this4.setState({
            session: data
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "registrationOverlay",
    value: function registrationOverlay() {
      var _this5 = this;

      return {
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "registration-form"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_RegistrationForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
          registration: this.state.resource,
          availableSessions: this.state.availableSessions,
          done: function done() {
            _this5.reset();

            _this5.load();
          }
        })),
        width: '80%',
        title: 'Update registration',
        close: this.load
      };
    }
  }, {
    key: "overlay",
    value: function overlay() {
      return this.registrationOverlay();
    }
  }, {
    key: "navLeft",
    value: function navLeft() {
      var navLeft = [];
      navLeft.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_11__["NavbarLink"], {
        href: "conference/Admin/Session/?conferenceId=".concat(this.state.session.conferenceId)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-arrow-left"
      }), " Back to sessions"));
      return navLeft;
    }
  }, {
    key: "title",
    value: function title() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Registrations for ", this.state.session.title, "\xA0\u2013\xA0", this.state.session.eventDateFormat, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "btn btn-outline-dark",
        href: "conference/Admin/Session/".concat(this.state.session.id, "/signin")
      }, "View unpaid"));
    }
  }]);

  return Registration;
}(_essappstate_canopy_listing__WEBPACK_IMPORTED_MODULE_9___default.a);


Registration.propTypes = {
  sessionId: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number
};
react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Registration, {
  sessionId: sessionId
}), document.getElementById('Registration'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9SZWdpc3RyYXRpb24vUmVnaXN0cmF0aW9uRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1JlZ2lzdHJhdGlvbi9pbmRleC5qc3giXSwibmFtZXMiOlsiUmVnaXN0cmF0aW9uRm9ybSIsInJlZ2lzdHJhdGlvbiIsImF2YWlsYWJsZVNlc3Npb25zIiwiZG9uZSIsImxlbmd0aCIsInVzZVN0YXRlIiwiaWQiLCJuZXdTZXNzaW9uSWQiLCJzZXROZXdTZXNzaW9uSWQiLCJ1cGRhdGVTZXNzaW9uIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwic2Vzc2lvbklkIiwiZGF0YVR5cGUiLCJ0eXBlIiwic3VjY2VzcyIsImVycm9yIiwib3B0aW9uTGlzdCIsIm1hcCIsInZhbHVlIiwiZXZlbnREYXRlRm9ybWF0IiwidGl0bGUiLCJvcHRpb25zIiwiZSIsInRhcmdldCIsImNvbXBsZXRlZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImFycmF5IiwiZnVuYyIsIlJlZ2lzdHJhdGlvbiIsInByb3BzIiwicmVzdFVybCIsImxhYmVsIiwic3RhdGUiLCJzZXNzaW9uIiwibGltaXQiLCJjaGFuZ2VTZXNzaW9uIiwiYmluZCIsImRlZmF1bHRSZXNvdXJjZSIsImNyZWF0ZURhdGUiLCJ1cGRhdGVEYXRlIiwiY2FuY2VsbGVkRGF0ZSIsImNhbmNlbGxlZEJ5IiwiY29uZmVyZW5jZUlkIiwiZ3Vlc3RDb3VudCIsIm1lYWxUaWNrZXRzIiwidmVnZ2llTWVhbHMiLCJ2aXNpdG9ySWQiLCJ0b3RhbENvc3QiLCJhbW91bnRQYWlkIiwidmlzaXRvck5hbWUiLCJzaWduZWRJbiIsImRyb3Bkb3duIiwia2V5IiwicmVnaXN0cmF0aW9uSWQiLCJsaXN0aW5nIiwiY2FuY2VsT3JSZWZ1bmQiLCJjYW5jZWwiLCJjb2x1bW5zIiwiY29sdW1uIiwiY2FsbGJhY2siLCJyb3ciLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNvcnQiLCJzdHVkZW50Rmlyc3ROYW1lIiwic3R1ZGVudExhc3ROYW1lIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJyZWZ1bmRBbW91bnQiLCJyZXNvdXJjZSIsIk9iamVjdCIsImFzc2lnbiIsImxvYWRTZXNzaW9uIiwibG9hZEF2YWlsYWJsZSIsInByZXZlbnREZWZhdWx0IiwibG9hZFJlc291cmNlIiwib3ZlcmxheU9uIiwicHJvbXB0IiwibG9hZCIsInNldFN0YXRlIiwiY29udGVudCIsInJlc2V0Iiwid2lkdGgiLCJjbG9zZSIsInJlZ2lzdHJhdGlvbk92ZXJsYXkiLCJuYXZMZWZ0IiwicHVzaCIsIkxpc3RpbmciLCJudW1iZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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O0FBQXpCLEVBREYsRUFFRWtGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUZGLEUiLCJmaWxlIjoiUmVnaXN0cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIlJlZ2lzdHJhdGlvblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vamF2YXNjcmlwdC9SZWdpc3RyYXRpb24vaW5kZXguanN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuLyogZ2xvYmFsICQgKi9cblxuY29uc3QgUmVnaXN0cmF0aW9uRm9ybSA9ICh7cmVnaXN0cmF0aW9uLCBhdmFpbGFibGVTZXNzaW9ucywgZG9uZX0pID0+IHtcbiAgaWYgKGF2YWlsYWJsZVNlc3Npb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5cbiAgICAgICAgTm8gc2Vzc2lvbnMgYXJlIGF2YWlsYWJsZSBkdWUgdG8gY29zdCBkaWZlcmVuY2Ugb3IgZGF0ZS5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IFtuZXdTZXNzaW9uSWQsIHNldE5ld1Nlc3Npb25JZF0gPSB1c2VTdGF0ZShhdmFpbGFibGVTZXNzaW9uc1swXS5pZClcblxuICBjb25zdCB1cGRhdGVTZXNzaW9uID0gKCkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IGBjb25mZXJlbmNlL0FkbWluL1JlZ2lzdHJhdGlvbi8ke3JlZ2lzdHJhdGlvbi5pZH0vY2hhbmdlU2Vzc2lvbmAsXG4gICAgICBkYXRhOiB7c2Vzc2lvbklkOiBuZXdTZXNzaW9uSWR9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdwYXRjaCcsXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgIGRvbmUoKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBvcHRpb25MaXN0ID0gYXZhaWxhYmxlU2Vzc2lvbnMubWFwKHZhbHVlID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPG9wdGlvbiBrZXk9e3ZhbHVlLmlkfSB2YWx1ZT17dmFsdWUuaWR9PlxuICAgICAgICB7dmFsdWUuZXZlbnREYXRlRm9ybWF0fSYjMzI7Jm5kYXNoOyYjMzI7e3ZhbHVlLnRpdGxlfVxuICAgICAgPC9vcHRpb24+XG4gICAgKVxuICB9KVxuXG4gIGNvbnN0IG9wdGlvbnMgPSAoXG4gICAgPHNlbGVjdFxuICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIHZhbHVlPXtuZXdTZXNzaW9uSWR9XG4gICAgICBvbkNoYW5nZT17ZSA9PiBzZXROZXdTZXNzaW9uSWQoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgIHtvcHRpb25MaXN0fVxuICAgIDwvc2VsZWN0PlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAge3JlZ2lzdHJhdGlvbi5jb21wbGV0ZWQgPT09IDEgPyAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoaXMgcmVnaXN0cmF0aW9uIGlzIGNvbXBsZXRlIHNvIG9ubHkgc2Vzc2lvbnMgb2YgdGhlIHNhbWUgY29zdCBtYXkgYmVcbiAgICAgICAgICBjaG9zZW4uXG4gICAgICAgIDwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwPlJlZ2lzdHJhdGlvbiBpcyB1bnBhaWQgc28gYW55IGZ1dHVyZSBzZXNzaW9uIG1heSBiZSBjaG9zZW4uPC9wPlxuICAgICAgKX1cbiAgICAgIHtvcHRpb25zfVxuICAgICAgPGhyIC8+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3VwZGF0ZVNlc3Npb259PlxuICAgICAgICBVcGRhdGVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cblJlZ2lzdHJhdGlvbkZvcm0ucHJvcFR5cGVzID0ge1xuICByZWdpc3RyYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGF2YWlsYWJsZVNlc3Npb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRvbmU6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBMaXN0aW5nIGZyb20gJ0Blc3NhcHBzdGF0ZS9jYW5vcHktbGlzdGluZydcbmltcG9ydCBSZWdpc3RyYXRpb25Gb3JtIGZyb20gJy4vUmVnaXN0cmF0aW9uRm9ybSdcbmltcG9ydCB7TmF2YmFyTGlua30gZnJvbSAnQGVzc2FwcHN0YXRlL3JlYWN0LW5hdmJhcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuLyogZ2xvYmFsICQsIHNlc3Npb25JZCAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBMaXN0aW5nIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnJlc3RVcmwgPSAnY29uZmVyZW5jZS9BZG1pbi9SZWdpc3RyYXRpb24nXG4gICAgdGhpcy5sYWJlbCA9ICdSZWdpc3RyYXRpb24nXG4gICAgdGhpcy5zdGF0ZS5zZXNzaW9uID0ge31cbiAgICB0aGlzLnN0YXRlLmF2YWlsYWJsZVNlc3Npb25zID0gW11cbiAgICB0aGlzLnN0YXRlLmxpbWl0ID0gMjBcbiAgICB0aGlzLmNoYW5nZVNlc3Npb24gPSB0aGlzLmNoYW5nZVNlc3Npb24uYmluZCh0aGlzKVxuXG4gICAgdGhpcy5kZWZhdWx0UmVzb3VyY2UgPSB7XG4gICAgICBjcmVhdGVEYXRlOiAwLFxuICAgICAgdXBkYXRlRGF0ZTogMCxcbiAgICAgIGNhbmNlbGxlZERhdGU6IDAsXG4gICAgICBjYW5jZWxsZWRCeTogJycsXG4gICAgICBzZXNzaW9uSWQ6IDAsXG4gICAgICBjb25mZXJlbmNlSWQ6IDAsXG4gICAgICBndWVzdENvdW50OiAwLFxuICAgICAgbWVhbFRpY2tldHM6IDAsXG4gICAgICB2ZWdnaWVNZWFsczogMCxcbiAgICAgIGNvbXBsZXRlZDogMCxcbiAgICAgIGlkOiAwLFxuICAgICAgdmlzaXRvcklkOiAwLFxuICAgICAgdG90YWxDb3N0OiAwLFxuICAgICAgYW1vdW50UGFpZDogMCxcbiAgICAgIHZpc2l0b3JOYW1lOiAnJyxcbiAgICAgIHNpZ25lZEluOiAwXG4gICAgfVxuXG4gICAgY29uc3QgZHJvcGRvd24gPSBrZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaXN0cmF0aW9uSWQgPSB0aGlzLnN0YXRlLmxpc3Rpbmdba2V5XS5pZFxuICAgICAgY29uc3QgcmVnaXN0cmF0aW9uID0gdGhpcy5zdGF0ZS5saXN0aW5nW2tleV1cbiAgICAgIGNvbnN0IGNhbmNlbE9yUmVmdW5kID0gKCkgPT4ge1xuICAgICAgICBpZiAocmVnaXN0cmF0aW9uLmNvbXBsZXRlZCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtgY29uZmVyZW5jZS9BZG1pbi9SZWZ1bmQvP3JlZ2lzdHJhdGlvbklkPSR7cmVnaXN0cmF0aW9uSWR9YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2FzaC1yZWdpc3RlclwiIC8+XG4gICAgICAgICAgICAgICZuYnNwO1JlZnVuZFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHBvaW50ZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNhbmNlbC5iaW5kKHRoaXMsIGtleSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFuIHRleHQtZGFuZ2VyXCIgLz5cbiAgICAgICAgICAgICAgJm5ic3A7Q2FuY2VsXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgICAgIGlkPVwiZHJvcGRvd25NZW51QnV0dG9uXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFyc1wiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51QnV0dG9uXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtgY29uZmVyZW5jZS9BZG1pbi9QYXltZW50Lz9yZWdpc3RyYXRpb25JZD0ke3JlZ2lzdHJhdGlvbklkfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNyZWRpdC1jYXJkXCIgLz5cbiAgICAgICAgICAgICAgJm5ic3A7UGF5bWVudHNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e2Bjb25mZXJlbmNlL0FkbWluL0d1ZXN0Lz9yZWdpc3RyYXRpb25JZD0ke3JlZ2lzdHJhdGlvbklkfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJzXCIgLz5cbiAgICAgICAgICAgICAgJm5ic3A7R3Vlc3RzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktMFwiIC8+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtgY29uZmVyZW5jZS9BZG1pbi9WaXNpdG9yL2xvZ2luQXM/dmlzaXRvcklkPSR7cmVnaXN0cmF0aW9uLnZpc2l0b3JJZH0mYW1wO3JlZ2lzdHJhdGlvbklkPSR7cmVnaXN0cmF0aW9uLmlkfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNpZ24taW4tYWx0XCIgLz5cbiAgICAgICAgICAgICAgJm5ic3A7U2lnbiBpbiBhcyB2aXNpdG9yXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHBvaW50ZXJcIlxuICAgICAgICAgICAgICBocmVmPXtgY29uZmVyZW5jZS9BZG1pbi9TdXBwbGVtZW50L2FkZC8/cmVnaXN0cmF0aW9uSWQ9JHtyZWdpc3RyYXRpb25JZH1gfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIj48L2k+Jm5ic3A7QWRkIGd1ZXN0IG9yIG1lYWxzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHBvaW50ZXJcIlxuICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlU2Vzc2lvbi5iaW5kKHRoaXMsIGtleSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXhjaGFuZ2UtYWx0XCIgLz5cbiAgICAgICAgICAgICAgJm5ic3A7Q2hhbmdlIHNlc3Npb25cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIHtjYW5jZWxPclJlZnVuZCgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICB0aGlzLmNvbHVtbnMgPSBbXG4gICAgICB7XG4gICAgICAgIGNvbHVtbjogJ29wdGlvbnMnLFxuICAgICAgICBjYWxsYmFjazogKHJvdywga2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGRyb3Bkb3duKGtleSwgcm93LmlkKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge2NvbHVtbjogJ2lkJywgbGFiZWw6ICdJZCd9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICdsYXN0TmFtZScsXG4gICAgICAgIGNhbGxiYWNrOiByb3cgPT4ge1xuICAgICAgICAgIGlmIChyb3cuZmlyc3ROYW1lID09PSBudWxsIHx8IHJvdy5maXJzdE5hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gPGVtPkluY29tcGxldGU8L2VtPlxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2Bjb25mZXJlbmNlL0FkbWluL1JlZ2lzdHJhdGlvbi92aXNpdG9yP3Zpc2l0b3JJZD0ke3Jvdy52aXNpdG9ySWR9YH0+XG4gICAgICAgICAgICAgICAge3Jvdy5maXJzdE5hbWV9IHtyb3cubGFzdE5hbWV9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiAnUGFyZW50IG5hbWUnLFxuICAgICAgICBzb3J0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICdzdHVkZW50TGFzdE5hbWUnLFxuICAgICAgICBjYWxsYmFjazogcm93ID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHtyb3cuc3R1ZGVudEZpcnN0TmFtZX0mbmJzcDt7cm93LnN0dWRlbnRMYXN0TmFtZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiAnU3R1ZGVudCBuYW1lJyxcbiAgICAgICAgc29ydDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sdW1uOiAndG90YWxDb3N0JyxcbiAgICAgICAgbGFiZWw6ICdDb3N0JyxcbiAgICAgICAgY2FsbGJhY2s6IHJvdyA9PiB7XG4gICAgICAgICAgY29uc3QgdG90YWxDb3N0ID0gcGFyc2VGbG9hdChyb3cudG90YWxDb3N0KS50b0ZpeGVkKDIpXG4gICAgICAgICAgcmV0dXJuIGAkJHt0b3RhbENvc3R9YFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICdhbW91bnRQYWlkJyxcbiAgICAgICAgbGFiZWw6ICdQYWlkJyxcbiAgICAgICAgY2FsbGJhY2s6IHJvdyA9PiB7XG4gICAgICAgICAgY29uc3QgYW1vdW50UGFpZCA9IHBhcnNlRmxvYXQocm93LmFtb3VudFBhaWQpLnRvRml4ZWQoMilcbiAgICAgICAgICByZXR1cm4gYCQke2Ftb3VudFBhaWR9YFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICdyZWZ1bmRBbW91bnQnLFxuICAgICAgICBsYWJlbDogJ1JlZnVuZGVkJyxcbiAgICAgICAgY2FsbGJhY2s6IHJvdyA9PiB7XG4gICAgICAgICAgcmV0dXJuIGAkJHtwYXJzZUZsb2F0KHJvdy5yZWZ1bmRBbW91bnQpLnRvRml4ZWQoMil9YFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICdjb21wbGV0ZWQnLFxuICAgICAgICBjYWxsYmFjazogcm93ID0+IHtcbiAgICAgICAgICByZXR1cm4gcm93LmNvbXBsZXRlZCA9PT0gMSA/IChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiPlllczwvc3Bhbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5Obzwvc3Bhbj5cbiAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiAnQ29tcGxldGVkJyxcbiAgICAgICAgc29ydDogdHJ1ZVxuICAgICAgfVxuICAgIF1cbiAgICB0aGlzLnN0YXRlLnJlc291cmNlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0UmVzb3VyY2UpXG4gICAgdGhpcy5sb2FkU2Vzc2lvbiA9IHRoaXMubG9hZFNlc3Npb24uYmluZCh0aGlzKVxuICAgIHRoaXMubG9hZEF2YWlsYWJsZSA9IHRoaXMubG9hZEF2YWlsYWJsZS5iaW5kKHRoaXMpXG4gIH1cblxuICBsb2FkKCkge1xuICAgIHN1cGVyLmxvYWQoe3Nlc3Npb25JZDogdGhpcy5wcm9wcy5zZXNzaW9uSWR9KVxuICAgIHRoaXMubG9hZFNlc3Npb24oKVxuICB9XG5cbiAgY2hhbmdlU2Vzc2lvbihrZXksIGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmxvYWRSZXNvdXJjZShrZXksIHRoaXMubG9hZEF2YWlsYWJsZSlcbiAgICB0aGlzLm92ZXJsYXlPbignZm9ybScpXG4gIH1cblxuICBjYW5jZWwoa2V5LCBlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgcmVnaXN0cmF0aW9uID0gdGhpcy5zdGF0ZS5saXN0aW5nW2tleV1cbiAgICBpZiAoXG4gICAgICBwcm9tcHQoXG4gICAgICAgICdZb3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWwgdGhpcyByZWdpc3RyYXRpb24/IElmIHNvIHR5cGUgQ0FOQ0VMIGJlbG93LidcbiAgICAgICkgPT09ICdDQU5DRUwnXG4gICAgKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGBjb25mZXJlbmNlL0FkbWluL1JlZ2lzdHJhdGlvbi8ke3JlZ2lzdHJhdGlvbi5pZH0vY2FuY2VsYCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgdHlwZTogJ3BhdGNoJyxcbiAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZCgpXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBsb2FkQXZhaWxhYmxlKCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdjb25mZXJlbmNlL0FkbWluL1Nlc3Npb24vYXZhaWxhYmxlJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29uZmVyZW5jZUlkOiB0aGlzLnN0YXRlLnNlc3Npb24uY29uZmVyZW5jZUlkLFxuICAgICAgICByZWdpc3RyYXRpb25JZDogdGhpcy5zdGF0ZS5yZXNvdXJjZS5pZFxuICAgICAgfSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5saXN0aW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXZhaWxhYmxlU2Vzc2lvbnM6IGRhdGEubGlzdGluZ30pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgbG9hZFNlc3Npb24oKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvQWRtaW4vU2Vzc2lvbi8nICsgdGhpcy5wcm9wcy5zZXNzaW9uSWQsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2Vzc2lvbjogZGF0YX0pXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSlcbiAgfVxuXG4gIHJlZ2lzdHJhdGlvbk92ZXJsYXkoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3RyYXRpb24tZm9ybVwiPlxuICAgICAgICAgIDxSZWdpc3RyYXRpb25Gb3JtXG4gICAgICAgICAgICByZWdpc3RyYXRpb249e3RoaXMuc3RhdGUucmVzb3VyY2V9XG4gICAgICAgICAgICBhdmFpbGFibGVTZXNzaW9ucz17dGhpcy5zdGF0ZS5hdmFpbGFibGVTZXNzaW9uc31cbiAgICAgICAgICAgIGRvbmU9eygpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5yZXNldCgpXG4gICAgICAgICAgICAgIHRoaXMubG9hZCgpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSxcbiAgICAgIHdpZHRoOiAnODAlJyxcbiAgICAgIHRpdGxlOiAnVXBkYXRlIHJlZ2lzdHJhdGlvbicsXG4gICAgICBjbG9zZTogdGhpcy5sb2FkXG4gICAgfVxuICB9XG5cbiAgb3ZlcmxheSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RyYXRpb25PdmVybGF5KClcbiAgfVxuXG4gIG5hdkxlZnQoKSB7XG4gICAgY29uc3QgbmF2TGVmdCA9IFtdXG4gICAgbmF2TGVmdC5wdXNoKFxuICAgICAgPE5hdmJhckxpbmtcbiAgICAgICAgaHJlZj17YGNvbmZlcmVuY2UvQWRtaW4vU2Vzc2lvbi8/Y29uZmVyZW5jZUlkPSR7dGhpcy5zdGF0ZS5zZXNzaW9uLmNvbmZlcmVuY2VJZH1gfT5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LWxlZnRcIj48L2k+IEJhY2sgdG8gc2Vzc2lvbnNcbiAgICAgIDwvTmF2YmFyTGluaz5cbiAgICApXG4gICAgcmV0dXJuIG5hdkxlZnRcbiAgfVxuXG4gIHRpdGxlKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aDM+XG4gICAgICAgIFJlZ2lzdHJhdGlvbnMgZm9yIHt0aGlzLnN0YXRlLnNlc3Npb24udGl0bGV9Jm5ic3A7Jm5kYXNoOyZuYnNwO1xuICAgICAgICB7dGhpcy5zdGF0ZS5zZXNzaW9uLmV2ZW50RGF0ZUZvcm1hdH17JyAnfVxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcbiAgICAgICAgICBocmVmPXtgY29uZmVyZW5jZS9BZG1pbi9TZXNzaW9uLyR7dGhpcy5zdGF0ZS5zZXNzaW9uLmlkfS9zaWduaW5gfT5cbiAgICAgICAgICBWaWV3IHVucGFpZFxuICAgICAgICA8L2E+XG4gICAgICA8L2gzPlxuICAgIClcbiAgfVxufVxuXG5SZWdpc3RyYXRpb24ucHJvcFR5cGVzID0ge1xuICBzZXNzaW9uSWQ6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8UmVnaXN0cmF0aW9uIHNlc3Npb25JZD17c2Vzc2lvbklkfSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JlZ2lzdHJhdGlvbicpXG4pXG4iXSwic291cmNlUm9vdCI6IiJ9