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
/******/ 		"Refund": 0
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
/******/ 	deferredModules.push(["./javascript/Refund/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Refund/GuestListing.js":
/*!*******************************************!*\
  !*** ./javascript/Refund/GuestListing.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var GuestListing = function GuestListing(_ref) {
  var guests = _ref.guests,
      removed = _ref.removed,
      toggle = _ref.toggle;
  var listing = guests.map(function (value, key) {
    var button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-danger btn-sm",
      onClick: function onClick() {
        toggle(value.id);
      }
    }, "Refund");
    var found = removed.indexOf(value.id);

    if (found !== -1) {
      button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-outline-dark btn-sm",
        onClick: function onClick() {
          toggle(value.id);
        }
      }, "Cancelled");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value.firstName, " ", value.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, button));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-striped table-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, listing));
};

GuestListing.propTypes = {};
GuestListing.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (GuestListing);

/***/ }),

/***/ "./javascript/Refund/RefundForm.js":
/*!*****************************************!*\
  !*** ./javascript/Refund/RefundForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GuestListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GuestListing */ "./javascript/Refund/GuestListing.js");







/* global $ */

var RefundForm = function RefundForm(_ref) {
  var registration = _ref.registration,
      session = _ref.session,
      guests = _ref.guests;
  var amount = registration.amountPaid.toFixed(2);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      refundAmount = _useState2[0],
      setRefundAmount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      mealReduction = _useState4[0],
      setMealReduction = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      guestReduction = _useState6[0],
      setGuestReduction = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      guestRemoved = _useState8[0],
      setGuestRemoved = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var totalReduction = session.guestCost * guestReduction + session.mealCost * mealReduction;
    setRefundAmount(totalReduction);
  }, [guestReduction, mealReduction]);

  var toggleGuest = function toggleGuest(id) {
    var found = guestRemoved.indexOf(id);

    if (found === -1) {
      guestRemoved.push(id);
    } else {
      guestRemoved.splice(found, 1);
    }

    setGuestReduction(guestRemoved.length);
    setGuestRemoved(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(guestRemoved));
  };

  var refundFullRegistration = function refundFullRegistration() {
    if (prompt('This will refund the entire amount owed by the parent. Type REFUND below to confirm your choice.') === 'REFUND') {
      $.ajax({
        url: 'conference/Admin/Refund/full',
        data: {
          registrationId: registration.id
        },
        dataType: 'json',
        type: 'post',
        success: function success() {
          window.location.href = "conference/Admin/Payment/?registrationId=".concat(registration.id);
        },
        error: function error() {}
      });
    }
  };

  var mealsListing = function mealsListing() {
    if (registration.mealTickets == 0) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", null, "Meals ($", session.mealCost, ")", ' ', mealReduction > 0 ? ' X ' + mealReduction : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
      className: "table table-striped table-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "Current total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "Refund item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, registration.mealTickets), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, mealReduction), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "btn btn-outline-dark btn-sm mr-2",
      onClick: function onClick() {
        if (mealReduction < registration.mealTickets) {
          setMealReduction(mealReduction + 1);
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "fas fa-plus"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "btn btn-outline-dark btn-sm mr-2",
      onClick: function onClick() {
        if (mealReduction !== 0) {
          setMealReduction(mealReduction - 1);
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "fas fa-minus"
    })))))));
  };

  var guestListing = function guestListing() {
    if (registration.guestCount == 0) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", null, "Guests ($", session.guestCost, ")", ' ', guestReduction > 0 ? ' X ' + guestReduction : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_GuestListing__WEBPACK_IMPORTED_MODULE_4__["default"], {
      guests: guests,
      removed: guestRemoved,
      toggle: toggleGuest
    }))));
  };

  var partialButton = function partialButton() {
    if (registration.guestCount == 0 && registration.mealTickets == 0) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "btn btn-warning btn-lg mb-2",
      onClick: partialRefund,
      disabled: refundAmount == 0
    }, "Partial refund $", parseFloat(refundAmount).toFixed(2)));
  };

  var partialRefund = function partialRefund() {
    if (prompt('This will create a partial refund and remove meals or guests as specified. Type REFUND below to confirm your choice.') === 'REFUND') {
      $.ajax({
        url: 'conference/Admin/Refund/partial',
        data: {
          registrationId: registration.id,
          refundAmount: refundAmount,
          mealReduction: mealReduction,
          guestRemoved: guestRemoved,
          guestReduction: guestReduction
        },
        dataType: 'json',
        type: 'post',
        success: function success() {
          window.location.href = "conference/Admin/Payment/?registrationId=".concat(registration.id);
        },
        error: function error() {}
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "alert alert-danger text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-exclamation-triangle"
  }), "\xA0 Please complete the refund on the payment site or in-person prior to completing this process."), mealsListing(), guestListing(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "lead"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, "Total amount paid"), ": $", amount), partialButton(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "btn btn-danger btn-lg",
    onClick: refundFullRegistration
  }, "Refund complete registration amount ($", registration.amountPaid.toFixed(2), ")")));
};

RefundForm.propTypes = {
  registration: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  session: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  close: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  guests: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (RefundForm);

/***/ }),

/***/ "./javascript/Refund/index.js":
/*!************************************!*\
  !*** ./javascript/Refund/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RefundForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RefundForm */ "./javascript/Refund/RefundForm.js");







/* global $, registrationId */

var Refund = function Refund(_ref) {
  var registrationId = _ref.registrationId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    id: 0,
    amount: 0,
    registrationId: registrationId
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      registration = _useState2[0],
      setRegistration = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    id: 0
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      session = _useState4[0],
      setSession = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      guests = _useState6[0],
      setGuests = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),
      errorMessage = _useState10[0],
      setErrorMessage = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    $.ajax({
      url: "conference/Admin/Registration/".concat(registrationId),
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        setRegistration(data);
      },
      error: function error(data) {
        showError(data);
      }
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (registration.id === 0) {
      return;
    }

    $.ajax({
      url: "conference/Admin/Session/".concat(registration.sessionId),
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        setSession(data);
      },
      error: function error(data) {
        showError(data);
      }
    });
  }, [registration]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (session.id === 0) {
      return;
    }

    $.ajax({
      url: 'conference/Admin/Guest',
      data: {
        registrationId: registrationId
      },
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        setGuests(data);
        setLoading(false);
      },
      error: function error(data) {
        showError(data);
      }
    });
  }, [session]);

  var showError = function showError(e) {
    setErrorMessage('Error: ' + e.responseJSON.exception.message);
    setLoading(false);
  };

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading...");
  }

  if (errorMessage) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "alert alert-danger"
    }, errorMessage);
  }

  if (registration.cancelledBy.length > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Refund registration: ", session.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "This registration was previously cancelled on", ' ', registration.cancelledDate, " by ", registration.cancelledBy, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "conference/Admin/Payment/?registrationId=".concat(registration.id)
    }, "Return to registration payments")));
  }

  if (registration.refundAmount > 0 && registration.totalCost == 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Refund registration: ", session.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "This registration was completely refunded."));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Refund registration: ", session.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RefundForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    registration: registration,
    session: session,
    guests: guests
  }));
};

Refund.propTypes = {
  registrationId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
};
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Refund, {
  registrationId: registrationId
}), document.getElementById('Refund'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9SZWZ1bmQvR3Vlc3RMaXN0aW5nLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvUmVmdW5kL1JlZnVuZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9SZWZ1bmQvaW5kZXguanMiXSwibmFtZXMiOlsiR3Vlc3RMaXN0aW5nIiwiZ3Vlc3RzIiwicmVtb3ZlZCIsInRvZ2dsZSIsImxpc3RpbmciLCJtYXAiLCJ2YWx1ZSIsImtleSIsImJ1dHRvbiIsImlkIiwiZm91bmQiLCJpbmRleE9mIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyIsIlJlZnVuZEZvcm0iLCJyZWdpc3RyYXRpb24iLCJzZXNzaW9uIiwiYW1vdW50IiwiYW1vdW50UGFpZCIsInRvRml4ZWQiLCJ1c2VTdGF0ZSIsInJlZnVuZEFtb3VudCIsInNldFJlZnVuZEFtb3VudCIsIm1lYWxSZWR1Y3Rpb24iLCJzZXRNZWFsUmVkdWN0aW9uIiwiZ3Vlc3RSZWR1Y3Rpb24iLCJzZXRHdWVzdFJlZHVjdGlvbiIsImd1ZXN0UmVtb3ZlZCIsInNldEd1ZXN0UmVtb3ZlZCIsInVzZUVmZmVjdCIsInRvdGFsUmVkdWN0aW9uIiwiZ3Vlc3RDb3N0IiwibWVhbENvc3QiLCJ0b2dnbGVHdWVzdCIsInB1c2giLCJzcGxpY2UiLCJsZW5ndGgiLCJyZWZ1bmRGdWxsUmVnaXN0cmF0aW9uIiwicHJvbXB0IiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwicmVnaXN0cmF0aW9uSWQiLCJkYXRhVHlwZSIsInR5cGUiLCJzdWNjZXNzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJtZWFsc0xpc3RpbmciLCJtZWFsVGlja2V0cyIsImd1ZXN0TGlzdGluZyIsImd1ZXN0Q291bnQiLCJwYXJ0aWFsQnV0dG9uIiwicGFydGlhbFJlZnVuZCIsInBhcnNlRmxvYXQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJjbG9zZSIsImZ1bmMiLCJhcnJheSIsIlJlZnVuZCIsInNldFJlZ2lzdHJhdGlvbiIsInNldFNlc3Npb24iLCJzZXRHdWVzdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInNob3dFcnJvciIsInNlc3Npb25JZCIsImUiLCJyZXNwb25zZUpTT04iLCJleGNlcHRpb24iLCJtZXNzYWdlIiwiY2FuY2VsbGVkQnkiLCJ0aXRsZSIsImNhbmNlbGxlZERhdGUiLCJ0b3RhbENvc3QiLCJudW1iZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FB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aHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIlJlZnVuZFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vamF2YXNjcmlwdC9SZWZ1bmQvaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IEd1ZXN0TGlzdGluZyA9ICh7Z3Vlc3RzLCByZW1vdmVkLCB0b2dnbGV9KSA9PiB7XG4gIGNvbnN0IGxpc3RpbmcgPSBndWVzdHMubWFwKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgbGV0IGJ1dHRvbiA9IChcbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHRvZ2dsZSh2YWx1ZS5pZClcbiAgICAgICAgfX0+XG4gICAgICAgIFJlZnVuZFxuICAgICAgPC9idXR0b24+XG4gICAgKVxuICAgIGNvbnN0IGZvdW5kID0gcmVtb3ZlZC5pbmRleE9mKHZhbHVlLmlkKVxuICAgIGlmIChmb3VuZCAhPT0gLTEpIHtcbiAgICAgIGJ1dHRvbiA9IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrIGJ0bi1zbVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlKHZhbHVlLmlkKVxuICAgICAgICAgIH19PlxuICAgICAgICAgIENhbmNlbGxlZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGtleT17a2V5fT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHt2YWx1ZS5maXJzdE5hbWV9IHt2YWx1ZS5sYXN0TmFtZX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPnt2YWx1ZS5lbWFpbH08L3RkPlxuICAgICAgICA8dGQ+e2J1dHRvbn08L3RkPlxuICAgICAgPC90cj5cbiAgICApXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtc21cIj5cbiAgICAgIDx0Ym9keT57bGlzdGluZ308L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIClcbn1cblxuR3Vlc3RMaXN0aW5nLnByb3BUeXBlcyA9IHt9XG5cbkd1ZXN0TGlzdGluZy5kZWZhdWx0UHJvcHMgPSB7fVxuZXhwb3J0IGRlZmF1bHQgR3Vlc3RMaXN0aW5nXG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEd1ZXN0TGlzdGluZyBmcm9tICcuL0d1ZXN0TGlzdGluZydcblxuLyogZ2xvYmFsICQgKi9cblxuY29uc3QgUmVmdW5kRm9ybSA9ICh7cmVnaXN0cmF0aW9uLCBzZXNzaW9uLCBndWVzdHN9KSA9PiB7XG4gIGNvbnN0IGFtb3VudCA9IHJlZ2lzdHJhdGlvbi5hbW91bnRQYWlkLnRvRml4ZWQoMilcbiAgY29uc3QgW3JlZnVuZEFtb3VudCwgc2V0UmVmdW5kQW1vdW50XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFttZWFsUmVkdWN0aW9uLCBzZXRNZWFsUmVkdWN0aW9uXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtndWVzdFJlZHVjdGlvbiwgc2V0R3Vlc3RSZWR1Y3Rpb25dID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2d1ZXN0UmVtb3ZlZCwgc2V0R3Vlc3RSZW1vdmVkXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG90YWxSZWR1Y3Rpb24gPVxuICAgICAgc2Vzc2lvbi5ndWVzdENvc3QgKiBndWVzdFJlZHVjdGlvbiArIHNlc3Npb24ubWVhbENvc3QgKiBtZWFsUmVkdWN0aW9uXG4gICAgc2V0UmVmdW5kQW1vdW50KHRvdGFsUmVkdWN0aW9uKVxuICB9LCBbZ3Vlc3RSZWR1Y3Rpb24sIG1lYWxSZWR1Y3Rpb25dKVxuXG4gIGNvbnN0IHRvZ2dsZUd1ZXN0ID0gaWQgPT4ge1xuICAgIGNvbnN0IGZvdW5kID0gZ3Vlc3RSZW1vdmVkLmluZGV4T2YoaWQpXG4gICAgaWYgKGZvdW5kID09PSAtMSkge1xuICAgICAgZ3Vlc3RSZW1vdmVkLnB1c2goaWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGd1ZXN0UmVtb3ZlZC5zcGxpY2UoZm91bmQsIDEpXG4gICAgfVxuICAgIHNldEd1ZXN0UmVkdWN0aW9uKGd1ZXN0UmVtb3ZlZC5sZW5ndGgpXG4gICAgc2V0R3Vlc3RSZW1vdmVkKFsuLi5ndWVzdFJlbW92ZWRdKVxuICB9XG5cbiAgY29uc3QgcmVmdW5kRnVsbFJlZ2lzdHJhdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwcm9tcHQoXG4gICAgICAgICdUaGlzIHdpbGwgcmVmdW5kIHRoZSBlbnRpcmUgYW1vdW50IG93ZWQgYnkgdGhlIHBhcmVudC4gVHlwZSBSRUZVTkQgYmVsb3cgdG8gY29uZmlybSB5b3VyIGNob2ljZS4nXG4gICAgICApID09PSAnUkVGVU5EJ1xuICAgICkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnY29uZmVyZW5jZS9BZG1pbi9SZWZ1bmQvZnVsbCcsXG4gICAgICAgIGRhdGE6IHtyZWdpc3RyYXRpb25JZDogcmVnaXN0cmF0aW9uLmlkfSxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgY29uZmVyZW5jZS9BZG1pbi9QYXltZW50Lz9yZWdpc3RyYXRpb25JZD0ke3JlZ2lzdHJhdGlvbi5pZH1gXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZWFsc0xpc3RpbmcgPSAoKSA9PiB7XG4gICAgaWYgKHJlZ2lzdHJhdGlvbi5tZWFsVGlja2V0cyA9PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGg0PlxuICAgICAgICAgIE1lYWxzICgke3Nlc3Npb24ubWVhbENvc3R9KXsnICd9XG4gICAgICAgICAge21lYWxSZWR1Y3Rpb24gPiAwID8gJyBYICcgKyBtZWFsUmVkdWN0aW9uIDogbnVsbH1cbiAgICAgICAgPC9oND5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtc21cIj5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5DdXJyZW50IHRvdGFsPC90aD5cbiAgICAgICAgICAgICAgPHRoPlJlZnVuZCBpdGVtPC90aD5cbiAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+e3JlZ2lzdHJhdGlvbi5tZWFsVGlja2V0c308L3RkPlxuICAgICAgICAgICAgICA8dGQ+e21lYWxSZWR1Y3Rpb259PC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrIGJ0bi1zbSBtci0yXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lYWxSZWR1Y3Rpb24gPCByZWdpc3RyYXRpb24ubWVhbFRpY2tldHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRNZWFsUmVkdWN0aW9uKG1lYWxSZWR1Y3Rpb24gKyAxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrIGJ0bi1zbSBtci0yXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lYWxSZWR1Y3Rpb24gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRNZWFsUmVkdWN0aW9uKG1lYWxSZWR1Y3Rpb24gLSAxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1taW51c1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGd1ZXN0TGlzdGluZyA9ICgpID0+IHtcbiAgICBpZiAocmVnaXN0cmF0aW9uLmd1ZXN0Q291bnQgPT0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoND5cbiAgICAgICAgICBHdWVzdHMgKCR7c2Vzc2lvbi5ndWVzdENvc3R9KXsnICd9XG4gICAgICAgICAge2d1ZXN0UmVkdWN0aW9uID4gMCA/ICcgWCAnICsgZ3Vlc3RSZWR1Y3Rpb24gOiBudWxsfVxuICAgICAgICA8L2g0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8R3Vlc3RMaXN0aW5nXG4gICAgICAgICAgICAgIGd1ZXN0cz17Z3Vlc3RzfVxuICAgICAgICAgICAgICByZW1vdmVkPXtndWVzdFJlbW92ZWR9XG4gICAgICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlR3Vlc3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHBhcnRpYWxCdXR0b24gPSAoKSA9PiB7XG4gICAgaWYgKHJlZ2lzdHJhdGlvbi5ndWVzdENvdW50ID09IDAgJiYgcmVnaXN0cmF0aW9uLm1lYWxUaWNrZXRzID09IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZyBidG4tbGcgbWItMlwiXG4gICAgICAgICAgb25DbGljaz17cGFydGlhbFJlZnVuZH1cbiAgICAgICAgICBkaXNhYmxlZD17cmVmdW5kQW1vdW50ID09IDB9PlxuICAgICAgICAgIFBhcnRpYWwgcmVmdW5kICR7cGFyc2VGbG9hdChyZWZ1bmRBbW91bnQpLnRvRml4ZWQoMil9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgcGFydGlhbFJlZnVuZCA9ICgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwcm9tcHQoXG4gICAgICAgICdUaGlzIHdpbGwgY3JlYXRlIGEgcGFydGlhbCByZWZ1bmQgYW5kIHJlbW92ZSBtZWFscyBvciBndWVzdHMgYXMgc3BlY2lmaWVkLiBUeXBlIFJFRlVORCBiZWxvdyB0byBjb25maXJtIHlvdXIgY2hvaWNlLidcbiAgICAgICkgPT09ICdSRUZVTkQnXG4gICAgKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICdjb25mZXJlbmNlL0FkbWluL1JlZnVuZC9wYXJ0aWFsJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbklkOiByZWdpc3RyYXRpb24uaWQsXG4gICAgICAgICAgcmVmdW5kQW1vdW50LFxuICAgICAgICAgIG1lYWxSZWR1Y3Rpb24sXG4gICAgICAgICAgZ3Vlc3RSZW1vdmVkLFxuICAgICAgICAgIGd1ZXN0UmVkdWN0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGNvbmZlcmVuY2UvQWRtaW4vUGF5bWVudC8/cmVnaXN0cmF0aW9uSWQ9JHtyZWdpc3RyYXRpb24uaWR9YFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKCkgPT4ge31cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+PC9pPiZuYnNwOyBQbGVhc2UgY29tcGxldGVcbiAgICAgICAgdGhlIHJlZnVuZCBvbiB0aGUgcGF5bWVudCBzaXRlIG9yIGluLXBlcnNvbiBwcmlvciB0byBjb21wbGV0aW5nIHRoaXNcbiAgICAgICAgcHJvY2Vzcy5cbiAgICAgIDwvZGl2PlxuICAgICAge21lYWxzTGlzdGluZygpfVxuICAgICAge2d1ZXN0TGlzdGluZygpfVxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XG4gICAgICAgIDxzdHJvbmc+VG90YWwgYW1vdW50IHBhaWQ8L3N0cm9uZz46ICR7YW1vdW50fVxuICAgICAgPC9wPlxuICAgICAge3BhcnRpYWxCdXR0b24oKX1cblxuICAgICAgPGhyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1sZ1wiXG4gICAgICAgICAgb25DbGljaz17cmVmdW5kRnVsbFJlZ2lzdHJhdGlvbn0+XG4gICAgICAgICAgUmVmdW5kIGNvbXBsZXRlIHJlZ2lzdHJhdGlvbiBhbW91bnQgKCRcbiAgICAgICAgICB7cmVnaXN0cmF0aW9uLmFtb3VudFBhaWQudG9GaXhlZCgyKX0pXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUmVmdW5kRm9ybS5wcm9wVHlwZXMgPSB7XG4gIHJlZ2lzdHJhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2Vzc2lvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICBndWVzdHM6IFByb3BUeXBlcy5hcnJheVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZ1bmRGb3JtXG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWZ1bmRGb3JtIGZyb20gJy4vUmVmdW5kRm9ybSdcblxuLyogZ2xvYmFsICQsIHJlZ2lzdHJhdGlvbklkICovXG5cbmNvbnN0IFJlZnVuZCA9ICh7cmVnaXN0cmF0aW9uSWR9KSA9PiB7XG4gIGNvbnN0IFtyZWdpc3RyYXRpb24sIHNldFJlZ2lzdHJhdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgaWQ6IDAsXG4gICAgYW1vdW50OiAwLFxuICAgIHJlZ2lzdHJhdGlvbklkXG4gIH0pXG4gIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uXSA9IHVzZVN0YXRlKHtpZDogMH0pXG4gIGNvbnN0IFtndWVzdHMsIHNldEd1ZXN0c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBgY29uZmVyZW5jZS9BZG1pbi9SZWdpc3RyYXRpb24vJHtyZWdpc3RyYXRpb25JZH1gLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgIHNldFJlZ2lzdHJhdGlvbihkYXRhKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBkYXRhID0+IHtcbiAgICAgICAgc2hvd0Vycm9yKGRhdGEpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVnaXN0cmF0aW9uLmlkID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogYGNvbmZlcmVuY2UvQWRtaW4vU2Vzc2lvbi8ke3JlZ2lzdHJhdGlvbi5zZXNzaW9uSWR9YCxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICBzZXRTZXNzaW9uKGRhdGEpXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGRhdGEgPT4ge1xuICAgICAgICBzaG93RXJyb3IoZGF0YSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBbcmVnaXN0cmF0aW9uXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZXNzaW9uLmlkID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvQWRtaW4vR3Vlc3QnLFxuICAgICAgZGF0YToge3JlZ2lzdHJhdGlvbklkfSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICBzZXRHdWVzdHMoZGF0YSlcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZGF0YSA9PiB7XG4gICAgICAgIHNob3dFcnJvcihkYXRhKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIFtzZXNzaW9uXSlcblxuICBjb25zdCBzaG93RXJyb3IgPSBlID0+IHtcbiAgICBzZXRFcnJvck1lc3NhZ2UoJ0Vycm9yOiAnICsgZS5yZXNwb25zZUpTT04uZXhjZXB0aW9uLm1lc3NhZ2UpXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgfVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICB9XG5cbiAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPntlcnJvck1lc3NhZ2V9PC9kaXY+XG4gIH1cblxuICBpZiAocmVnaXN0cmF0aW9uLmNhbmNlbGxlZEJ5Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlJlZnVuZCByZWdpc3RyYXRpb246IHtzZXNzaW9uLnRpdGxlfTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoaXMgcmVnaXN0cmF0aW9uIHdhcyBwcmV2aW91c2x5IGNhbmNlbGxlZCBvbnsnICd9XG4gICAgICAgICAge3JlZ2lzdHJhdGlvbi5jYW5jZWxsZWREYXRlfSBieSB7cmVnaXN0cmF0aW9uLmNhbmNlbGxlZEJ5fS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17YGNvbmZlcmVuY2UvQWRtaW4vUGF5bWVudC8/cmVnaXN0cmF0aW9uSWQ9JHtyZWdpc3RyYXRpb24uaWR9YH0+XG4gICAgICAgICAgICBSZXR1cm4gdG8gcmVnaXN0cmF0aW9uIHBheW1lbnRzXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBpZiAocmVnaXN0cmF0aW9uLnJlZnVuZEFtb3VudCA+IDAgJiYgcmVnaXN0cmF0aW9uLnRvdGFsQ29zdCA9PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5SZWZ1bmQgcmVnaXN0cmF0aW9uOiB7c2Vzc2lvbi50aXRsZX08L2gyPlxuICAgICAgICA8ZGl2PlRoaXMgcmVnaXN0cmF0aW9uIHdhcyBjb21wbGV0ZWx5IHJlZnVuZGVkLjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPlJlZnVuZCByZWdpc3RyYXRpb246IHtzZXNzaW9uLnRpdGxlfTwvaDI+XG5cbiAgICAgIDxSZWZ1bmRGb3JtXG4gICAgICAgIHJlZ2lzdHJhdGlvbj17cmVnaXN0cmF0aW9ufVxuICAgICAgICBzZXNzaW9uPXtzZXNzaW9ufVxuICAgICAgICBndWVzdHM9e2d1ZXN0c31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUmVmdW5kLnByb3BUeXBlcyA9IHtcbiAgcmVnaXN0cmF0aW9uSWQ6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8UmVmdW5kIHJlZ2lzdHJhdGlvbklkPXtyZWdpc3RyYXRpb25JZH0gLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWZ1bmQnKVxuKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==