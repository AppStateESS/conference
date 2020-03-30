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
/******/ 		"Payment": 0
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
/******/ 	deferredModules.push(["./javascript/Payment/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Payment/CC.js":
/*!**********************************!*\
  !*** ./javascript/Payment/CC.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var CC = function CC(_ref) {
  var payment = _ref.payment,
      update = _ref.update,
      save = _ref.save;
  var disabled = payment.cardType === 0 || payment.payerName.length === 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "badge badge-danger"
  }, "Do not complete payment until you have successful confirmation from the credit card payment service.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "lead"
  }, "Card type")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    value: payment.cardType,
    onChange: update.bind(null, 'cardType')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    disabled: true,
    value: "0"
  }, "Choose credit card below"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "Mastercard"
  }, "MasterCard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "Visa"
  }, "Visa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "Discover"
  }, "Discover"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "American Express"
  }, "American Express")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "lead"
  }, "Receipt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    placeholder: "Credit card company's transaction id or other information.",
    type: "text",
    className: "form-control",
    name: "receipt",
    value: payment.receipt,
    onChange: update.bind(null, 'receipt')
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: save,
    disabled: disabled
  }, "Complete registration payment")));
};

CC.propTypes = {
  payment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  save: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CC);

/***/ }),

/***/ "./javascript/Payment/Check.js":
/*!*************************************!*\
  !*** ./javascript/Payment/Check.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var Check = function Check(_ref) {
  var payment = _ref.payment,
      update = _ref.update,
      save = _ref.save;
  var disabled = payment.checkNumber.length === 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "lead",
    htmlFor: "checkNumber"
  }, "Check number")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "checkNumber",
    name: "checkNumber",
    onChange: update.bind(null, 'checkNumber'),
    value: payment.checkNumber
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: save,
    disabled: disabled
  }, "Complete registration payment")));
};

Check.propTypes = {
  payment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  save: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Check);

/***/ }),

/***/ "./javascript/Payment/PaymentForm.js":
/*!*******************************************!*\
  !*** ./javascript/Payment/PaymentForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _essappstate_canopy_react_buttongroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @essappstate/canopy-react-buttongroup */ "./node_modules/@essappstate/canopy-react-buttongroup/build/index.js");
/* harmony import */ var _essappstate_canopy_react_buttongroup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_essappstate_canopy_react_buttongroup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Check */ "./javascript/Payment/Check.js");
/* harmony import */ var _CC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CC */ "./javascript/Payment/CC.js");








var PaymentForm = function PaymentForm(_ref) {
  var payment = _ref.payment,
      update = _ref.update,
      save = _ref.save;

  if (payment.id === undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
  }

  var buttons = [{
    value: 'cash',
    label: 'Cash'
  }, {
    value: 'cc',
    label: 'Credit/Debit Card'
  }, {
    value: 'check',
    label: 'Check'
  }];
  var paymentDetails;

  switch (payment.paymentType) {
    case 'cc':
      paymentDetails = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CC__WEBPACK_IMPORTED_MODULE_4__["default"], {
        payment: payment,
        update: update,
        save: save
      });
      break;

    case 'check':
      paymentDetails = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Check__WEBPACK_IMPORTED_MODULE_3__["default"], {
        payment: payment,
        update: update,
        save: save
      });
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "lead"
  }, "Amount due")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-8 lead"
  }, "$", payment.amount.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "lead"
  }, "Payer name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "payerName",
    onChange: update.bind(null, 'payerName'),
    value: payment.payerName
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "lead"
  }, "Payment type")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_essappstate_canopy_react_buttongroup__WEBPACK_IMPORTED_MODULE_2___default.a, {
    name: "paymentType",
    buttons: buttons,
    match: payment.paymentType,
    handle: update.bind(null, 'paymentType'),
    activeColor: "primary",
    color: "outline-primary"
  }))), paymentDetails);
};

PaymentForm.propTypes = {
  payment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  registration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  save: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
PaymentForm.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (PaymentForm);

/***/ }),

/***/ "./javascript/Payment/RefundInformation.js":
/*!*************************************************!*\
  !*** ./javascript/Payment/RefundInformation.js ***!
  \*************************************************/
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






var RefundInformation = function RefundInformation(_ref) {
  var refundId = _ref.refundId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      refund = _useState2[0],
      setRefund = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    $.ajax({
      url: "conference/Admin/Refund/".concat(refundId),
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        setRefund(data);
      },
      error: function error() {}
    });
  }, [refundId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Refunded by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, refund.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Refunded on"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, refund.dateRefunded)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "$", parseFloat(refund.amount).toFixed(2))))));
};

RefundInformation.propTypes = {};
RefundInformation.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (RefundInformation);

/***/ }),

/***/ "./javascript/Payment/Refunds.js":
/*!***************************************!*\
  !*** ./javascript/Payment/Refunds.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);







var Refunds = function Refunds(_ref) {
  var registrationId = _ref.registrationId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      refunds = _useState2[0],
      setRefunds = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    $.ajax({
      url: 'conference/Admin/Refund/byRegistration',
      data: {
        registrationId: registrationId
      },
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        setRefunds(data);
      },
      error: function error() {}
    });
  }, []);

  if (refunds.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
  }

  var refundListing = function refundListing() {
    return refunds.map(function (value) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        key: value.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, dayjs__WEBPACK_IMPORTED_MODULE_2___default.a.unix(value.dateRefunded).format('MM/DD/YYYY, h:mm:ss A')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "$", value.amount.toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, value.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, value.guests), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, value.meals), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, value.complete ? 'Yes' : 'No'));
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Refunds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Admin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Guests"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Meals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Complete")), refundListing())));
};

Refunds.propTypes = {
  registrationId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
};
Refunds.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Refunds);

/***/ }),

/***/ "./javascript/Payment/index.jsx":
/*!**************************************!*\
  !*** ./javascript/Payment/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Payment; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _essappstate_canopy_react_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @essappstate/canopy-react-overlay */ "./node_modules/@essappstate/canopy-react-overlay/build/index.js");
/* harmony import */ var _essappstate_canopy_react_overlay__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_essappstate_canopy_react_overlay__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _PaymentForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PaymentForm */ "./javascript/Payment/PaymentForm.js");
/* harmony import */ var _RefundInformation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RefundInformation */ "./javascript/Payment/RefundInformation.js");
/* harmony import */ var _Shared_totalCost__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Shared/totalCost */ "./javascript/Shared/totalCost.js");
/* harmony import */ var _Refunds__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Refunds */ "./javascript/Payment/Refunds.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_16__);











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










/* global $, registrationId */

var fixIt = function fixIt(varName, value) {
  return varName in value ? value[varName].toFixed(2) : null;
};

var Payment = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Payment, _Component);

  var _super = _createSuper(Payment);

  function Payment(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Payment);

    _this = _super.call(this, props);
    _this.registration = {};
    _this.visitor = {};
    _this.state = {
      conference: {},
      completed: [],
      registration: {},
      visitor: {},
      session: {},
      student: {},
      errorMessage: '',
      overlay: false,
      guests: [],
      overlayType: 'payment',
      currentPayment: {
        amount: 0,
        payerName: '',
        paymentType: 'unpaid',
        cardType: 0
      },
      currentCost: 0,
      refunds: []
    };
    _this.overlayOn = _this.overlayOn.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.overlayOff = _this.overlayOff.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.update = _this.update.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.resetRegistration = _this.resetRegistration.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.save = _this.save.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.syncAccount = _this.syncAccount.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.init = _this.init.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Payment, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "cancelSupplement",
    value: function cancelSupplement() {
      var _this2 = this;

      if (confirm('Are you sure you want to delete this supplement? You can always create another one after.')) {
        $.ajax({
          url: "conference/Admin/Supplement/".concat(this.state.currentPayment.supplementId),
          dataType: 'json',
          type: 'delete',
          success: function success() {
            _this2.init();
          },
          error: function error() {}
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.overlayOff();
      this.loadRegistration();
      this.load();
    }
  }, {
    key: "syncAccount",
    value: function syncAccount() {
      var _this3 = this;

      $.ajax({
        url: "conference/Admin/Payment/".concat(this.state.currentPayment.id, "/syncAccount"),
        data: {
          accountId: this.state.conference.accountId
        },
        dataType: 'json',
        type: 'patch',
        success: function success() {
          _this3.update('accountId', _this3.state.conference.accountId);
        },
        error: function error() {}
      });
    }
  }, {
    key: "update",
    value: function update(varname, value) {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(value) === 'object') {
        value = value.target.value;
      }

      var currentPayment = this.state.currentPayment;
      currentPayment[varname] = value;
      this.setState({
        currentPayment: currentPayment
      });
    }
  }, {
    key: "checkTotalCost",
    value: function checkTotalCost() {
      this.setState({
        currentCost: Object(_Shared_totalCost__WEBPACK_IMPORTED_MODULE_14__["default"])(this.state.registration, this.state.session)
      });
    }
  }, {
    key: "loadRegistration",
    value: function loadRegistration() {
      var _this4 = this;

      $.ajax({
        url: 'conference/Admin/Registration/' + this.props.registrationId + '/details',
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          _this4.setState({
            conference: data.conference,
            registration: data.registration,
            session: data.session,
            visitor: data.visitor,
            student: data.student,
            guests: data.guests
          });

          _this4.checkTotalCost();
        },
        error: function error(data) {
          _this4.setState({
            errorMessage: 'Error: ' + data.responseJSON.exception.message,
            registration: {
              id: 0
            }
          });
        }
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this5 = this;

      var registrationId = this.props.registrationId;
      $.ajax({
        url: 'conference/Admin/Payment/status',
        data: {
          registrationId: registrationId
        },
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          var currentPayment = data.currentPayment !== null ? data.currentPayment : {
            payerName: '',
            paymentType: 'unpaid',
            cardType: 0,
            amount: 0
          };
          currentPayment.cardType = 0;

          _this5.setState({
            currentPayment: currentPayment,
            completed: data.completed
          });
        },
        error: function error(data) {
          _this5.setState({
            errorMessage: 'Error: ' + data.exception.message,
            registration: {
              id: 0
            }
          });
        }
      });
    }
  }, {
    key: "resetRegistration",
    value: function resetRegistration() {
      var _this6 = this;

      $.ajax({
        url: "conference/Admin/Registration/reset",
        data: {
          id: this.state.registration.id
        },
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          _this6.setState({
            registration: data
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "overlayOn",
    value: function overlayOn() {
      this.setState({
        overlay: true
      });
    }
  }, {
    key: "overlayOff",
    value: function overlayOff() {
      this.setState({
        overlay: false,
        currentKey: 0
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this7 = this;

      $.ajax({
        url: "conference/Admin/Payment/".concat(this.state.currentPayment.id, "/paid"),
        data: _objectSpread({}, this.state.currentPayment),
        dataType: 'json',
        type: 'put',
        success: function success() {
          _this7.init();

          _this7.overlayOff();
        },
        error: function error() {}
      });
    }
  }, {
    key: "paymentListing",
    value: function paymentListing() {
      var _this8 = this;

      var completed = this.state.completed;

      if (completed.length === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("em", null, "No previously completed payments"));
      }

      var payments = completed.map(function (value) {
        var payType;

        switch (value.paymentType) {
          case 'cc-onsite':
            payType = "Onsite CC: ".concat(value.cardType, " / ").concat(value.receipt);
            break;

          case 'cc-offsite':
            payType = "Offsite CC: ".concat(value.cardType, " / ").concat(value.receipt);
            break;

          case 'check':
            payType = "Check #".concat(value.checkNumber);
            break;

          case 'cash':
            payType = 'Cash';
            break;
        }

        var type = parseInt(value.supplementId) > 0 ? 'Supplemental charge' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: "conference/Admin/Registration/".concat(_this8.state.registration.id)
        }, "Initial Registration");
        var timestamp = new Date(value.timestamp * 1000);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
          key: value.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", null, "$", value.amount.toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", null, timestamp.toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", null, type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", null, value.payerName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", null, payType));
      });
      var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
        className: "table table-sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "Payer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "Payment Type")), payments));
      return content;
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var _this$state = this.state,
          visitor = _this$state.visitor,
          conference = _this$state.conference,
          session = _this$state.session,
          registration = _this$state.registration,
          guests = _this$state.guests,
          student = _this$state.student,
          currentPayment = _this$state.currentPayment;
      var costWarning;

      if (registration.id === undefined) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, "Loading...");
      }

      if (this.state.errorMessage.length > 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "alert alert-danger"
        }, this.state.errorMessage);
      }

      if (registration.id > 0 && registration.cancelled == 0 && this.state.currentCost !== registration.totalCost) {
        costWarning = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "alert alert-danger mb-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", null, "Warning!"), " The current session pricing for this registration should be $", this.state.currentCost.toFixed(2), ".", ' ', registration.completed === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "You may\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          className: "btn btn-primary btn-sm",
          onClick: this.resetRegistration
        }, "Reset the Cost")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Registration is complete so it can not be adjusted."));
      }

      var accountWarning;

      if (currentPayment.id > 0 && currentPayment.accountId !== this.state.conference.accountId) {
        accountWarning = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "alert alert-danger mb-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", null, "Warning!"), " The account associated to the current payment is different than assigned to the conference. Do you want to:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          className: "btn btn-outline-danger btn-sm",
          onClick: this.syncAccount
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "text-dark"
        }, "Update the payment to the current account")));
      }

      var guestComplete = registration.guestCount == guests.length;
      var payments = this.paymentListing();
      var cancelSupplement;
      var payButton;

      if (currentPayment.id !== undefined) {
        var buttonLabel;

        if (!guestComplete) {
          payButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            className: "alert alert-warning"
          }, "This registration may not be paid until guest information is completed.");
        } else {
          if (currentPayment.supplementId > 0) {
            buttonLabel = "Complete current supplemental payment: $".concat(currentPayment.amount.toFixed(2));
            cancelSupplement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
              className: "mb-3 text-center"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
              className: "btn btn-danger",
              onClick: function onClick() {
                _this9.cancelSupplement();
              }
            }, "Cancel the current supplement"));
          } else {
            buttonLabel = "Complete current registration payment: $".concat(currentPayment.amount.toFixed(2));
          }

          payButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
            className: "btn btn-success btn-block",
            onClick: function onClick() {
              _this9.setState({
                overlay: true,
                overlayType: 'payment'
              });
            }
          }, buttonLabel);
        }
      }

      var additionButton;

      if (registration.cancelled === 0 && currentPayment.supplementId === undefined || currentPayment.supplementId === 0) {
        additionButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "btn btn-primary",
          href: "./conference/Admin/Supplement/add/?registrationId=".concat(registration.id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "fas fa-plus"
        }), "\xA0 Add meals and/or guests");
      }

      var refundInfo;

      if (registration.refunded > 0) {
        refundInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          className: "btn btn-info btn-sm ml-5",
          onClick: function onClick() {
            _this9.setState({
              overlay: true,
              overlayType: 'refundInfo'
            });
          }
        }, "Refund information");
      }

      var refundButton;

      if (registration.completed > 0 && registration.refundAmount !== registration.totalCost && registration.totalCost > 0) {
        refundButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: "conference/Admin/Refund/?registrationId=".concat(registration.id),
          className: "btn btn-danger ml-5 btn-sm"
        }, "Refund");
      }

      var savePayment;

      if (currentPayment.paymentType === 'cash') {
        savePayment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "text-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          className: "btn btn-primary",
          onClick: this.save
        }, "Complete registration payment"));
      }

      var overlay;

      switch (this.state.overlayType) {
        case 'payment':
          overlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_essappstate_canopy_react_overlay__WEBPACK_IMPORTED_MODULE_11___default.a, {
            show: this.state.overlay,
            close: this.overlayOff,
            width: "80%",
            title: "Payment for registration: ".concat(this.state.session.title)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PaymentForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
            session: this.state.session,
            registration: registration,
            payment: currentPayment,
            save: this.save,
            update: this.update
          }), savePayment);
          break;

        case 'refundInfo':
          overlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_essappstate_canopy_react_overlay__WEBPACK_IMPORTED_MODULE_11___default.a, {
            show: this.state.overlay,
            close: this.overlayOff,
            width: "80%",
            title: "Refund information"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_RefundInformation__WEBPACK_IMPORTED_MODULE_13__["default"], {
            refundId: registration.refundId,
            close: this.overlayOff
          })));
          break;
      }

      var refunded;

      if (registration.refundAmount > 0) {
        refunded = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "Refunded"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
          className: "text-danger"
        }, "$", fixIt('refundAmount', registration)));
      }

      var sessionDay = dayjs__WEBPACK_IMPORTED_MODULE_16___default()(session.eventDate * 1000).format('MM-DD-YYYY');
      var today = dayjs__WEBPACK_IMPORTED_MODULE_16___default()().format('MM-DD-YYYY');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, costWarning, accountWarning, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "Registration payment status for ", visitor.firstName, " ", visitor.lastName, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "btn btn-info",
        href: "./conference/Admin/Visitor/loginAs?visitorId=".concat(visitor.id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-sign-in-alt"
      }), " Log in as visitor")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", null, "Conference: ", conference.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), "Session:\xA0", session.title, " - ", session.eventDateFormat, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "conference/Admin/Registration/?sessionId=".concat(session.id),
        className: "btn btn-outline-dark btn-sm ml-3"
      }, "Registrations list"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "conference/Admin/Session/".concat(session.id, "/signin"),
        className: "btn btn-outline-dark btn-sm ml-3"
      }, "Unpaid list")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", null, "Student: ", student.firstName, " ", student.lastName, " - ", student.bannerId, " -", ' ', student.username), registration.cancelledBy.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "alert alert-danger"
      }, "Cancelled on ", registration.cancelledDate, " by", ' ', registration.cancelledBy) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
        className: "table table-striped"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        style: {
          width: '10%'
        }
      }, "Cost:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", null, "$", fixIt('totalCost', registration), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "ml-5 "
      }, additionButton))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "Paid:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", null, "$", fixIt('amountPaid', registration), " ", refundButton, " ", refundInfo)), refunded, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "Due:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", null, "$", fixIt('amountDue', registration))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "mb-2"
      }, payButton), cancelSupplement, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", null, "Completed payments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, payments), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Refunds__WEBPACK_IMPORTED_MODULE_15__["default"], {
        registrationId: registrationId
      }), overlay);
    }
  }]);

  return Payment;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);


Payment.propTypes = {
  registrationId: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number
};
react_dom__WEBPACK_IMPORTED_MODULE_10___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Payment, {
  registrationId: registrationId
}), document.getElementById('Payment'));

/***/ }),

/***/ "./javascript/Shared/totalCost.js":
/*!****************************************!*\
  !*** ./javascript/Shared/totalCost.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var totalCost = function totalCost(registration, session) {
  var registerCost = session.registerCost,
      guestCost = session.guestCost,
      mealCost = session.mealCost,
      mealService = session.mealService;
  var discount = registration.discount,
      guestCount = registration.guestCount,
      mealTickets = registration.mealTickets;
  var cost = Number(registerCost) - Number(discount);
  var totalGuestCost = Number(guestCost) * Number(guestCount);
  cost = cost + totalGuestCost;

  if (mealService == 1) {
    var totalMealCost = Number(mealCost) * Number(mealTickets);
    cost = cost + totalMealCost;
  }

  return cost;
};

/* harmony default export */ __webpack_exports__["default"] = (totalCost);

/***/ }),

/***/ "./node_modules/@essappstate/canopy-react-buttongroup/build/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@essappstate/canopy-react-buttongroup/build/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){e.exports=r(6)()},function(e,t,r){"use strict";e.exports=r(4)},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var u=typeof n;if("string"===u||"number"===u)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===u)for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),u=r(0),i=r.n(u),a=r(2),c=r.n(a);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,p(t).call(this,e))}var r,u,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,n["Component"]),r=t,(u=[{key:"render",value:function(){var e,t=this.props.buttons.map(function(e,t){var r="btn-"+this.props.activeColor,n="btn-"+this.props.color,u=c()("btn",n);return null!==this.props.match&&void 0!==this.props.match&&(this.props.match.constructor===Array&&-1!==this.props.match.indexOf(e.value)?u=c()("btn","active",r):this.props.match==e.value&&(u=c()("btn","active",r))),o.a.createElement("button",{type:"button",key:t,className:u,disabled:this.props.disabled,value:e.value,onClick:this.props.handle.bind(null,e.value)},e.label)}.bind(this)),r=!0===this.props.vertical?"btn-group-vertical":"btn-group";return e=this.props.match&&this.props.match.constructor===Array?this.props.match.map(function(e,t){var r=this.props.name+"[]";return o.a.createElement("input",{type:"hidden",name:r,value:e,key:t})}.bind(this)):o.a.createElement("input",{type:"hidden",name:this.props.name,value:this.props.match}),o.a.createElement("div",null,o.a.createElement("div",{className:r,role:"group"},t),e)}}])&&f(r.prototype,u),i&&f(r,i),t}();d.propTypes={buttons:i.a.array.isRequired,handle:i.a.func.isRequired,activeColor:i.a.string,color:i.a.string,match:i.a.oneOfType([i.a.string,i.a.number,i.a.array]),vertical:i.a.bool,name:i.a.string,disabled:i.a.bool},d.defaultProps={activeColor:"dark",color:"outline-dark",match:"",name:null,disabled:!1},t.default=d},function(e,t,r){"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(5),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,u,i,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,u,i,a],l=0;(e=Error(t.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_={};function O(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||g}function S(){}function j(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=O.prototype;var P=j.prototype=new S;P.constructor=j,n(P,O.prototype),P.isPureReactComponent=!0;var k={current:null},w={current:null},x=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n=void 0,o={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:u,type:e,key:i,ref:a,props:o,_owner:w.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var $=/\/+/g,T=[];function A(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function M(e,t,r){return null==e?0:function e(t,r,n,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var c=!1;if(null===t)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case u:case i:c=!0}}if(c)return n(o,t,""===r?"."+q(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=r+q(a=t[l],l);c+=e(a,f,n,o)}else if(f=null===t||"object"!=typeof t?null:"function"==typeof(f=m&&t[m]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(a=t.next()).done;)c+=e(a=a.value,f=r+q(a,l++),n,o);else"object"===a&&v("31","[object Object]"==(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return c}(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function N(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,function(e){return e}):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace($,"$&/")+"/"),M(e,N,t=A(t,u,n,o)),I(t)}function D(){var e=k.current;return null===e&&v("321"),e}var F={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,U,t=A(null,null,t,r)),I(t)},count:function(e){return M(e,function(){return null},null)},toArray:function(e){var t=[];return L(e,t,null,function(e){return e}),t},only:function(e){return R(e)||v("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:j,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return D().useCallback(e,t)},useContext:function(e,t){return D().useContext(e,t)},useEffect:function(e,t){return D().useEffect(e,t)},useImperativeHandle:function(e,t,r){return D().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return D().useLayoutEffect(e,t)},useMemo:function(e,t){return D().useMemo(e,t)},useReducer:function(e,t,r){return D().useReducer(e,t,r)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:a,StrictMode:c,Suspense:d,createElement:C,cloneElement:function(e,t,r){null==e&&v("267",e);var o=void 0,i=n({},e.props),a=e.key,c=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,l=w.current),void 0!==t.key&&(a=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)x.call(t,o)&&!E.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))i.children=r;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];i.children=f}return{$$typeof:u,type:e.type,key:a,ref:c,props:i,_owner:l}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentOwner:w,assign:n}},V={default:F},W=V&&F||V;e.exports=W.default||W},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,a,c=i(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(c[f]=r[f]);if(n){a=n(r);for(var s=0;s<a.length;s++)u.call(r,a[s])&&(c[a[s]]=r[a[s]])}}return c}},function(e,t,r){"use strict";var n=r(7);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,i){if(i!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9QYXltZW50L0NDLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvUGF5bWVudC9DaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1BheW1lbnQvUGF5bWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9QYXltZW50L1JlZnVuZEluZm9ybWF0aW9uLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvUGF5bWVudC9SZWZ1bmRzLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvUGF5bWVudC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TaGFyZWQvdG90YWxDb3N0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZXNzYXBwc3RhdGUvY2Fub3B5LXJlYWN0LWJ1dHRvbmdyb3VwL2J1aWxkL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNDIiwicGF5bWVudCIsInVwZGF0ZSIsInNhdmUiLCJkaXNhYmxlZCIsImNhcmRUeXBlIiwicGF5ZXJOYW1lIiwibGVuZ3RoIiwiYmluZCIsInJlY2VpcHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJmdW5jIiwiQ2hlY2siLCJjaGVja051bWJlciIsIlBheW1lbnRGb3JtIiwiaWQiLCJ1bmRlZmluZWQiLCJidXR0b25zIiwidmFsdWUiLCJsYWJlbCIsInBheW1lbnREZXRhaWxzIiwicGF5bWVudFR5cGUiLCJhbW91bnQiLCJ0b0ZpeGVkIiwicmVnaXN0cmF0aW9uIiwiZGVmYXVsdFByb3BzIiwiUmVmdW5kSW5mb3JtYXRpb24iLCJyZWZ1bmRJZCIsInVzZVN0YXRlIiwicmVmdW5kIiwic2V0UmVmdW5kIiwidXNlRWZmZWN0IiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhVHlwZSIsInR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsImVycm9yIiwidXNlcm5hbWUiLCJkYXRlUmVmdW5kZWQiLCJwYXJzZUZsb2F0IiwiUmVmdW5kcyIsInJlZ2lzdHJhdGlvbklkIiwicmVmdW5kcyIsInNldFJlZnVuZHMiLCJyZWZ1bmRMaXN0aW5nIiwibWFwIiwiZGF5anMiLCJ1bml4IiwiZm9ybWF0IiwiZ3Vlc3RzIiwibWVhbHMiLCJjb21wbGV0ZSIsIm51bWJlciIsImZpeEl0IiwidmFyTmFtZSIsIlBheW1lbnQiLCJwcm9wcyIsInZpc2l0b3IiLCJzdGF0ZSIsImNvbmZlcmVuY2UiLCJjb21wbGV0ZWQiLCJzZXNzaW9uIiwic3R1ZGVudCIsImVycm9yTWVzc2FnZSIsIm92ZXJsYXkiLCJvdmVybGF5VHlwZSIsImN1cnJlbnRQYXltZW50IiwiY3VycmVudENvc3QiLCJvdmVybGF5T24iLCJvdmVybGF5T2ZmIiwicmVzZXRSZWdpc3RyYXRpb24iLCJzeW5jQWNjb3VudCIsImluaXQiLCJjb25maXJtIiwic3VwcGxlbWVudElkIiwibG9hZFJlZ2lzdHJhdGlvbiIsImxvYWQiLCJhY2NvdW50SWQiLCJ2YXJuYW1lIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJ0b3RhbENvc3QiLCJjaGVja1RvdGFsQ29zdCIsInJlc3BvbnNlSlNPTiIsImV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJjdXJyZW50S2V5IiwicGF5bWVudHMiLCJwYXlUeXBlIiwicGFyc2VJbnQiLCJ0aW1lc3RhbXAiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJjb250ZW50IiwiY29zdFdhcm5pbmciLCJjYW5jZWxsZWQiLCJhY2NvdW50V2FybmluZyIsImd1ZXN0Q29tcGxldGUiLCJndWVzdENvdW50IiwicGF5bWVudExpc3RpbmciLCJjYW5jZWxTdXBwbGVtZW50IiwicGF5QnV0dG9uIiwiYnV0dG9uTGFiZWwiLCJhZGRpdGlvbkJ1dHRvbiIsInJlZnVuZEluZm8iLCJyZWZ1bmRlZCIsInJlZnVuZEJ1dHRvbiIsInJlZnVuZEFtb3VudCIsInNhdmVQYXltZW50IiwidGl0bGUiLCJzZXNzaW9uRGF5IiwiZXZlbnREYXRlIiwidG9kYXkiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImV2ZW50RGF0ZUZvcm1hdCIsImJhbm5lcklkIiwiY2FuY2VsbGVkQnkiLCJjYW5jZWxsZWREYXRlIiwid2lkdGgiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZWdpc3RlckNvc3QiLCJndWVzdENvc3QiLCJtZWFsQ29zdCIsIm1lYWxTZXJ2aWNlIiwiZGlzY291bnQiLCJtZWFsVGlja2V0cyIsImNvc3QiLCJOdW1iZXIiLCJ0b3RhbEd1ZXN0Q29zdCIsInRvdGFsTWVhbENvc3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFXLFlBQVksSUFBSSx3QkFBd0IsYUFBYSxPQUFPLHFEQUFxRCwyQkFBMkIscUJBQXFCLGtCQUFrQixxSUFBcUksdURBQXVELElBQUksVUFBVSxXQUFXLHVCQUF1QixpQkFBaUI7QUFDcnpNO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0dBQStHLGNBQWMsd0ZBQXdGLGlCQUFpQixxQkFBcUIsSUFBSSwyQkFBMkIsd0JBQXdCLDZEQUE2RCxZQUFZLEtBQUssS0FBSyxvQ0FBb0MsZ0VBQWdFLFlBQVksb0JBQW9CLFNBQVMsMkRBQTJELE9BQU8sdURBQXVELGNBQWMsU0FBUyxVQUFVLCtCQUErQix1QkFBdUIsbUJBQW1CLEtBQUssNkRBQTZELE1BQU0sT0FBTyxZQUFZLFdBQVcsdUNBQXVDLFVBQVUsaUJBQWlCLGFBQWEsV0FBVyxjQUFjLGNBQWMsMkNBQTJDLHdCQUF3QixVQUFVLG1NQUFtTSxzQ0FBc0MsYUFBYSxTQUFTLGVBQWUsT0FBTywyTUFBMk0sd0JBQXdCLGlCQUFpQixhQUFhLHlEQUF5RCxHIiwiZmlsZSI6IlBheW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiUGF5bWVudFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vamF2YXNjcmlwdC9QYXltZW50L2luZGV4LmpzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IENDID0gKHtwYXltZW50LCB1cGRhdGUsIHNhdmV9KSA9PiB7XG4gIGNvbnN0IGRpc2FibGVkID0gcGF5bWVudC5jYXJkVHlwZSA9PT0gMCB8fCBwYXltZW50LnBheWVyTmFtZS5sZW5ndGggPT09IDBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+XG4gICAgICAgICAgRG8gbm90IGNvbXBsZXRlIHBheW1lbnQgdW50aWwgeW91IGhhdmUgc3VjY2Vzc2Z1bCBjb25maXJtYXRpb24gZnJvbVxuICAgICAgICAgIHRoZSBjcmVkaXQgY2FyZCBwYXltZW50IHNlcnZpY2UuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZFwiPkNhcmQgdHlwZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04XCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHZhbHVlPXtwYXltZW50LmNhcmRUeXBlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZS5iaW5kKG51bGwsICdjYXJkVHlwZScpfT5cbiAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgdmFsdWU9XCIwXCI+XG4gICAgICAgICAgICAgIENob29zZSBjcmVkaXQgY2FyZCBiZWxvd1xuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWFzdGVyY2FyZFwiPk1hc3RlckNhcmQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJWaXNhXCI+VmlzYTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRpc2NvdmVyXCI+RGlzY292ZXI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbWVyaWNhbiBFeHByZXNzXCI+QW1lcmljYW4gRXhwcmVzczwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlYWRcIj5SZWNlaXB0PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLThcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ3JlZGl0IGNhcmQgY29tcGFueSdzIHRyYW5zYWN0aW9uIGlkIG9yIG90aGVyIGluZm9ybWF0aW9uLlwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgbmFtZT1cInJlY2VpcHRcIlxuICAgICAgICAgICAgdmFsdWU9e3BheW1lbnQucmVjZWlwdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGUuYmluZChudWxsLCAncmVjZWlwdCcpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17c2F2ZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgICAgICBDb21wbGV0ZSByZWdpc3RyYXRpb24gcGF5bWVudFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbkNDLnByb3BUeXBlcyA9IHtcbiAgcGF5bWVudDogUHJvcFR5cGVzLm9iamVjdCxcbiAgdXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2F2ZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ0NcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBDaGVjayA9ICh7cGF5bWVudCwgdXBkYXRlLCBzYXZlfSkgPT4ge1xuICBjb25zdCBkaXNhYmxlZCA9IHBheW1lbnQuY2hlY2tOdW1iZXIubGVuZ3RoID09PSAwXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkXCIgaHRtbEZvcj1cImNoZWNrTnVtYmVyXCI+XG4gICAgICAgICAgICBDaGVjayBudW1iZXJcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIGlkPVwiY2hlY2tOdW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cImNoZWNrTnVtYmVyXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGUuYmluZChudWxsLCAnY2hlY2tOdW1iZXInKX1cbiAgICAgICAgICAgIHZhbHVlPXtwYXltZW50LmNoZWNrTnVtYmVyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17c2F2ZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgICAgICBDb21wbGV0ZSByZWdpc3RyYXRpb24gcGF5bWVudFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbkNoZWNrLnByb3BUeXBlcyA9IHtcbiAgcGF5bWVudDogUHJvcFR5cGVzLm9iamVjdCxcbiAgdXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2F2ZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0Blc3NhcHBzdGF0ZS9jYW5vcHktcmVhY3QtYnV0dG9uZ3JvdXAnXG5pbXBvcnQgQ2hlY2sgZnJvbSAnLi9DaGVjaydcbmltcG9ydCBDQyBmcm9tICcuL0NDJ1xuXG5jb25zdCBQYXltZW50Rm9ybSA9ICh7cGF5bWVudCwgdXBkYXRlLCBzYXZlfSkgPT4ge1xuICBpZiAocGF5bWVudC5pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDxkaXYgLz5cbiAgfVxuICBjb25zdCBidXR0b25zID0gW1xuICAgIHt2YWx1ZTogJ2Nhc2gnLCBsYWJlbDogJ0Nhc2gnfSxcbiAgICB7dmFsdWU6ICdjYycsIGxhYmVsOiAnQ3JlZGl0L0RlYml0IENhcmQnfSxcbiAgICB7dmFsdWU6ICdjaGVjaycsIGxhYmVsOiAnQ2hlY2snfVxuICBdXG5cbiAgbGV0IHBheW1lbnREZXRhaWxzXG5cbiAgc3dpdGNoIChwYXltZW50LnBheW1lbnRUeXBlKSB7XG4gICAgY2FzZSAnY2MnOlxuICAgICAgcGF5bWVudERldGFpbHMgPSA8Q0MgcGF5bWVudD17cGF5bWVudH0gdXBkYXRlPXt1cGRhdGV9IHNhdmU9e3NhdmV9IC8+XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2NoZWNrJzpcbiAgICAgIHBheW1lbnREZXRhaWxzID0gPENoZWNrIHBheW1lbnQ9e3BheW1lbnR9IHVwZGF0ZT17dXBkYXRlfSBzYXZlPXtzYXZlfSAvPlxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxlYWRcIj5BbW91bnQgZHVlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOCBsZWFkXCI+JHtwYXltZW50LmFtb3VudC50b0ZpeGVkKDIpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZFwiPlBheWVyIG5hbWU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXllck5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZS5iaW5kKG51bGwsICdwYXllck5hbWUnKX1cbiAgICAgICAgICAgIHZhbHVlPXtwYXltZW50LnBheWVyTmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlYWRcIj5QYXltZW50IHR5cGU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOFwiPlxuICAgICAgICAgIDxCdXR0b25Hcm91cFxuICAgICAgICAgICAgbmFtZT1cInBheW1lbnRUeXBlXCJcbiAgICAgICAgICAgIGJ1dHRvbnM9e2J1dHRvbnN9XG4gICAgICAgICAgICBtYXRjaD17cGF5bWVudC5wYXltZW50VHlwZX1cbiAgICAgICAgICAgIGhhbmRsZT17dXBkYXRlLmJpbmQobnVsbCwgJ3BheW1lbnRUeXBlJyl9XG4gICAgICAgICAgICBhY3RpdmVDb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgY29sb3I9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7cGF5bWVudERldGFpbHN9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUGF5bWVudEZvcm0ucHJvcFR5cGVzID0ge1xuICBwYXltZW50OiBQcm9wVHlwZXMub2JqZWN0LFxuICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICByZWdpc3RyYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIHNhdmU6IFByb3BUeXBlcy5mdW5jXG59XG5cblBheW1lbnRGb3JtLmRlZmF1bHRQcm9wcyA9IHt9XG5leHBvcnQgZGVmYXVsdCBQYXltZW50Rm9ybVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgUmVmdW5kSW5mb3JtYXRpb24gPSAoe3JlZnVuZElkfSkgPT4ge1xuICBjb25zdCBbcmVmdW5kLCBzZXRSZWZ1bmRdID0gdXNlU3RhdGUoe30pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogYGNvbmZlcmVuY2UvQWRtaW4vUmVmdW5kLyR7cmVmdW5kSWR9YCxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICBzZXRSZWZ1bmQoZGF0YSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9LCBbcmVmdW5kSWRdKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlJlZnVuZGVkIGJ5PC90aD5cbiAgICAgICAgICAgIDx0ZD57cmVmdW5kLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UmVmdW5kZWQgb248L3RoPlxuICAgICAgICAgICAgPHRkPntyZWZ1bmQuZGF0ZVJlZnVuZGVkfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cbiAgICAgICAgICAgIDx0ZD4ke3BhcnNlRmxvYXQocmVmdW5kLmFtb3VudCkudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblJlZnVuZEluZm9ybWF0aW9uLnByb3BUeXBlcyA9IHt9XG5cblJlZnVuZEluZm9ybWF0aW9uLmRlZmF1bHRQcm9wcyA9IHt9XG5leHBvcnQgZGVmYXVsdCBSZWZ1bmRJbmZvcm1hdGlvblxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgUmVmdW5kcyA9ICh7cmVnaXN0cmF0aW9uSWR9KSA9PiB7XG4gIGNvbnN0IFtyZWZ1bmRzLCBzZXRSZWZ1bmRzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvQWRtaW4vUmVmdW5kL2J5UmVnaXN0cmF0aW9uJyxcbiAgICAgIGRhdGE6IHtyZWdpc3RyYXRpb25JZH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgc2V0UmVmdW5kcyhkYXRhKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIGlmIChyZWZ1bmRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiA8ZGl2PjwvZGl2PlxuICB9XG5cbiAgY29uc3QgcmVmdW5kTGlzdGluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gcmVmdW5kcy5tYXAodmFsdWUgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRyIGtleT17dmFsdWUuaWR9PlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIHtkYXlqcy51bml4KHZhbHVlLmRhdGVSZWZ1bmRlZCkuZm9ybWF0KCdNTS9ERC9ZWVlZLCBoOm1tOnNzIEEnKX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZD4ke3ZhbHVlLmFtb3VudC50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgPHRkPnt2YWx1ZS51c2VybmFtZX08L3RkPlxuICAgICAgICAgIDx0ZD57dmFsdWUuZ3Vlc3RzfTwvdGQ+XG4gICAgICAgICAgPHRkPnt2YWx1ZS5tZWFsc308L3RkPlxuICAgICAgICAgIDx0ZD57dmFsdWUuY29tcGxldGUgPyAnWWVzJyA6ICdObyd9PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGg0PlJlZnVuZHM8L2g0PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cbiAgICAgICAgICAgIDx0aD5BbW91bnQ8L3RoPlxuICAgICAgICAgICAgPHRoPkFkbWluPC90aD5cbiAgICAgICAgICAgIDx0aD5HdWVzdHM8L3RoPlxuICAgICAgICAgICAgPHRoPk1lYWxzPC90aD5cbiAgICAgICAgICAgIDx0aD5Db21wbGV0ZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICB7cmVmdW5kTGlzdGluZygpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5SZWZ1bmRzLnByb3BUeXBlcyA9IHtyZWdpc3RyYXRpb25JZDogUHJvcFR5cGVzLm51bWJlcn1cblxuUmVmdW5kcy5kZWZhdWx0UHJvcHMgPSB7fVxuZXhwb3J0IGRlZmF1bHQgUmVmdW5kc1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBPdmVybGF5IGZyb20gJ0Blc3NhcHBzdGF0ZS9jYW5vcHktcmVhY3Qtb3ZlcmxheSdcbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuL1BheW1lbnRGb3JtJ1xuaW1wb3J0IFJlZnVuZEluZm9ybWF0aW9uIGZyb20gJy4vUmVmdW5kSW5mb3JtYXRpb24nXG5pbXBvcnQgdG90YWxDb3N0IGZyb20gJy4uL1NoYXJlZC90b3RhbENvc3QnXG5pbXBvcnQgUmVmdW5kcyBmcm9tICcuL1JlZnVuZHMnXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5cbi8qIGdsb2JhbCAkLCByZWdpc3RyYXRpb25JZCAqL1xuXG5jb25zdCBmaXhJdCA9ICh2YXJOYW1lLCB2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFyTmFtZSBpbiB2YWx1ZSA/IHZhbHVlW3Zhck5hbWVdLnRvRml4ZWQoMikgOiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMucmVnaXN0cmF0aW9uID0ge31cbiAgICB0aGlzLnZpc2l0b3IgPSB7fVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbmZlcmVuY2U6IHt9LFxuICAgICAgY29tcGxldGVkOiBbXSxcbiAgICAgIHJlZ2lzdHJhdGlvbjoge30sXG4gICAgICB2aXNpdG9yOiB7fSxcbiAgICAgIHNlc3Npb246IHt9LFxuICAgICAgc3R1ZGVudDoge30sXG4gICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgb3ZlcmxheTogZmFsc2UsXG4gICAgICBndWVzdHM6IFtdLFxuICAgICAgb3ZlcmxheVR5cGU6ICdwYXltZW50JyxcbiAgICAgIGN1cnJlbnRQYXltZW50OiB7XG4gICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgcGF5ZXJOYW1lOiAnJyxcbiAgICAgICAgcGF5bWVudFR5cGU6ICd1bnBhaWQnLFxuICAgICAgICBjYXJkVHlwZTogMFxuICAgICAgfSxcbiAgICAgIGN1cnJlbnRDb3N0OiAwLFxuICAgICAgcmVmdW5kczogW11cbiAgICB9XG4gICAgdGhpcy5vdmVybGF5T24gPSB0aGlzLm92ZXJsYXlPbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5vdmVybGF5T2ZmID0gdGhpcy5vdmVybGF5T2ZmLmJpbmQodGhpcylcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2V0UmVnaXN0cmF0aW9uID0gdGhpcy5yZXNldFJlZ2lzdHJhdGlvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLnN5bmNBY2NvdW50ID0gdGhpcy5zeW5jQWNjb3VudC5iaW5kKHRoaXMpXG4gICAgdGhpcy5pbml0ID0gdGhpcy5pbml0LmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBjYW5jZWxTdXBwbGVtZW50KCkge1xuICAgIGlmIChcbiAgICAgIGNvbmZpcm0oXG4gICAgICAgICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgc3VwcGxlbWVudD8gWW91IGNhbiBhbHdheXMgY3JlYXRlIGFub3RoZXIgb25lIGFmdGVyLidcbiAgICAgIClcbiAgICApIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYGNvbmZlcmVuY2UvQWRtaW4vU3VwcGxlbWVudC8ke3RoaXMuc3RhdGUuY3VycmVudFBheW1lbnQuc3VwcGxlbWVudElkfWAsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIHR5cGU6ICdkZWxldGUnLFxuICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5vdmVybGF5T2ZmKClcbiAgICB0aGlzLmxvYWRSZWdpc3RyYXRpb24oKVxuICAgIHRoaXMubG9hZCgpXG4gIH1cblxuICBzeW5jQWNjb3VudCgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBgY29uZmVyZW5jZS9BZG1pbi9QYXltZW50LyR7dGhpcy5zdGF0ZS5jdXJyZW50UGF5bWVudC5pZH0vc3luY0FjY291bnRgLFxuICAgICAgZGF0YToge2FjY291bnRJZDogdGhpcy5zdGF0ZS5jb25mZXJlbmNlLmFjY291bnRJZH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ3BhdGNoJyxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGUoJ2FjY291bnRJZCcsIHRoaXMuc3RhdGUuY29uZmVyZW5jZS5hY2NvdW50SWQpXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZSh2YXJuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRhcmdldC52YWx1ZVxuICAgIH1cbiAgICBjb25zdCB7Y3VycmVudFBheW1lbnR9ID0gdGhpcy5zdGF0ZVxuICAgIGN1cnJlbnRQYXltZW50W3Zhcm5hbWVdID0gdmFsdWVcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGF5bWVudH0pXG4gIH1cblxuICBjaGVja1RvdGFsQ29zdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRDb3N0OiB0b3RhbENvc3QodGhpcy5zdGF0ZS5yZWdpc3RyYXRpb24sIHRoaXMuc3RhdGUuc2Vzc2lvbilcbiAgICB9KVxuICB9XG5cbiAgbG9hZFJlZ2lzdHJhdGlvbigpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOlxuICAgICAgICAnY29uZmVyZW5jZS9BZG1pbi9SZWdpc3RyYXRpb24vJyArXG4gICAgICAgIHRoaXMucHJvcHMucmVnaXN0cmF0aW9uSWQgK1xuICAgICAgICAnL2RldGFpbHMnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNvbmZlcmVuY2U6IGRhdGEuY29uZmVyZW5jZSxcbiAgICAgICAgICByZWdpc3RyYXRpb246IGRhdGEucmVnaXN0cmF0aW9uLFxuICAgICAgICAgIHNlc3Npb246IGRhdGEuc2Vzc2lvbixcbiAgICAgICAgICB2aXNpdG9yOiBkYXRhLnZpc2l0b3IsXG4gICAgICAgICAgc3R1ZGVudDogZGF0YS5zdHVkZW50LFxuICAgICAgICAgIGd1ZXN0czogZGF0YS5ndWVzdHNcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jaGVja1RvdGFsQ29zdCgpXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdFcnJvcjogJyArIGRhdGEucmVzcG9uc2VKU09OLmV4Y2VwdGlvbi5tZXNzYWdlLFxuICAgICAgICAgIHJlZ2lzdHJhdGlvbjoge2lkOiAwfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBsb2FkKCkge1xuICAgIGNvbnN0IHtyZWdpc3RyYXRpb25JZH0gPSB0aGlzLnByb3BzXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvQWRtaW4vUGF5bWVudC9zdGF0dXMnLFxuICAgICAgZGF0YToge3JlZ2lzdHJhdGlvbklkfSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UGF5bWVudCA9XG4gICAgICAgICAgZGF0YS5jdXJyZW50UGF5bWVudCAhPT0gbnVsbFxuICAgICAgICAgICAgPyBkYXRhLmN1cnJlbnRQYXltZW50XG4gICAgICAgICAgICA6IHtwYXllck5hbWU6ICcnLCBwYXltZW50VHlwZTogJ3VucGFpZCcsIGNhcmRUeXBlOiAwLCBhbW91bnQ6IDB9XG4gICAgICAgIGN1cnJlbnRQYXltZW50LmNhcmRUeXBlID0gMFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50UGF5bWVudDogY3VycmVudFBheW1lbnQsXG4gICAgICAgICAgY29tcGxldGVkOiBkYXRhLmNvbXBsZXRlZFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXJyb3JNZXNzYWdlOiAnRXJyb3I6ICcgKyBkYXRhLmV4Y2VwdGlvbi5tZXNzYWdlLFxuICAgICAgICAgIHJlZ2lzdHJhdGlvbjoge2lkOiAwfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXNldFJlZ2lzdHJhdGlvbigpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBgY29uZmVyZW5jZS9BZG1pbi9SZWdpc3RyYXRpb24vcmVzZXRgLFxuICAgICAgZGF0YToge2lkOiB0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbi5pZH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0cmF0aW9uOiBkYXRhfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgb3ZlcmxheU9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3ZlcmxheTogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBvdmVybGF5T2ZmKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3ZlcmxheTogZmFsc2UsXG4gICAgICBjdXJyZW50S2V5OiAwXG4gICAgfSlcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogYGNvbmZlcmVuY2UvQWRtaW4vUGF5bWVudC8ke3RoaXMuc3RhdGUuY3VycmVudFBheW1lbnQuaWR9L3BhaWRgLFxuICAgICAgZGF0YTogey4uLnRoaXMuc3RhdGUuY3VycmVudFBheW1lbnR9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdwdXQnLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICB0aGlzLmluaXQoKVxuICAgICAgICB0aGlzLm92ZXJsYXlPZmYoKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgIH0pXG4gIH1cblxuICBwYXltZW50TGlzdGluZygpIHtcbiAgICBjb25zdCB7Y29tcGxldGVkfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoY29tcGxldGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGVtPk5vIHByZXZpb3VzbHkgY29tcGxldGVkIHBheW1lbnRzPC9lbT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHBheW1lbnRzID0gY29tcGxldGVkLm1hcCh2YWx1ZSA9PiB7XG4gICAgICBsZXQgcGF5VHlwZVxuICAgICAgc3dpdGNoICh2YWx1ZS5wYXltZW50VHlwZSkge1xuICAgICAgICBjYXNlICdjYy1vbnNpdGUnOlxuICAgICAgICAgIHBheVR5cGUgPSBgT25zaXRlIENDOiAke3ZhbHVlLmNhcmRUeXBlfSAvICR7dmFsdWUucmVjZWlwdH1gXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdjYy1vZmZzaXRlJzpcbiAgICAgICAgICBwYXlUeXBlID0gYE9mZnNpdGUgQ0M6ICR7dmFsdWUuY2FyZFR5cGV9IC8gJHt2YWx1ZS5yZWNlaXB0fWBcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2NoZWNrJzpcbiAgICAgICAgICBwYXlUeXBlID0gYENoZWNrICMke3ZhbHVlLmNoZWNrTnVtYmVyfWBcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2Nhc2gnOlxuICAgICAgICAgIHBheVR5cGUgPSAnQ2FzaCdcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0eXBlID1cbiAgICAgICAgcGFyc2VJbnQodmFsdWUuc3VwcGxlbWVudElkKSA+IDAgPyAoXG4gICAgICAgICAgJ1N1cHBsZW1lbnRhbCBjaGFyZ2UnXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e2Bjb25mZXJlbmNlL0FkbWluL1JlZ2lzdHJhdGlvbi8ke3RoaXMuc3RhdGUucmVnaXN0cmF0aW9uLmlkfWB9PlxuICAgICAgICAgICAgSW5pdGlhbCBSZWdpc3RyYXRpb25cbiAgICAgICAgICA8L2E+XG4gICAgICAgIClcblxuICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUodmFsdWUudGltZXN0YW1wICogMTAwMClcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRyIGtleT17dmFsdWUuaWR9PlxuICAgICAgICAgIDx0ZD4ke3ZhbHVlLmFtb3VudC50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgPHRkPnt0aW1lc3RhbXAudG9Mb2NhbGVTdHJpbmcoKX08L3RkPlxuICAgICAgICAgIDx0ZD57dHlwZX08L3RkPlxuICAgICAgICAgIDx0ZD57dmFsdWUucGF5ZXJOYW1lfTwvdGQ+XG4gICAgICAgICAgPHRkPntwYXlUeXBlfTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICApXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRlbnQgPSAoXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc21cIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5BbW91bnQ8L3RoPlxuICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxuICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxuICAgICAgICAgICAgPHRoPlBheWVyPC90aD5cbiAgICAgICAgICAgIDx0aD5QYXltZW50IFR5cGU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAge3BheW1lbnRzfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApXG4gICAgcmV0dXJuIGNvbnRlbnRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2aXNpdG9yLFxuICAgICAgY29uZmVyZW5jZSxcbiAgICAgIHNlc3Npb24sXG4gICAgICByZWdpc3RyYXRpb24sXG4gICAgICBndWVzdHMsXG4gICAgICBzdHVkZW50LFxuICAgICAgY3VycmVudFBheW1lbnRcbiAgICB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCBjb3N0V2FybmluZ1xuICAgIGlmIChyZWdpc3RyYXRpb24uaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfTwvZGl2PlxuICAgIH1cbiAgICBpZiAoXG4gICAgICByZWdpc3RyYXRpb24uaWQgPiAwICYmXG4gICAgICByZWdpc3RyYXRpb24uY2FuY2VsbGVkID09IDAgJiZcbiAgICAgIHRoaXMuc3RhdGUuY3VycmVudENvc3QgIT09IHJlZ2lzdHJhdGlvbi50b3RhbENvc3RcbiAgICApIHtcbiAgICAgIGNvc3RXYXJuaW5nID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBtYi0zXCI+XG4gICAgICAgICAgPHN0cm9uZz5XYXJuaW5nITwvc3Ryb25nPiBUaGUgY3VycmVudCBzZXNzaW9uIHByaWNpbmcgZm9yIHRoaXNcbiAgICAgICAgICByZWdpc3RyYXRpb24gc2hvdWxkIGJlICR7dGhpcy5zdGF0ZS5jdXJyZW50Q29zdC50b0ZpeGVkKDIpfS57JyAnfVxuICAgICAgICAgIHtyZWdpc3RyYXRpb24uY29tcGxldGVkID09PSAwID8gKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIFlvdSBtYXkmbmJzcDtcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVzZXRSZWdpc3RyYXRpb259PlxuICAgICAgICAgICAgICAgIFJlc2V0IHRoZSBDb3N0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3Bhbj5SZWdpc3RyYXRpb24gaXMgY29tcGxldGUgc28gaXQgY2FuIG5vdCBiZSBhZGp1c3RlZC48L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIGxldCBhY2NvdW50V2FybmluZ1xuXG4gICAgaWYgKFxuICAgICAgY3VycmVudFBheW1lbnQuaWQgPiAwICYmXG4gICAgICBjdXJyZW50UGF5bWVudC5hY2NvdW50SWQgIT09IHRoaXMuc3RhdGUuY29uZmVyZW5jZS5hY2NvdW50SWRcbiAgICApIHtcbiAgICAgIGFjY291bnRXYXJuaW5nID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBtYi0zXCI+XG4gICAgICAgICAgPHN0cm9uZz5XYXJuaW5nITwvc3Ryb25nPiBUaGUgYWNjb3VudCBhc3NvY2lhdGVkIHRvIHRoZSBjdXJyZW50XG4gICAgICAgICAgcGF5bWVudCBpcyBkaWZmZXJlbnQgdGhhbiBhc3NpZ25lZCB0byB0aGUgY29uZmVyZW5jZS4gRG8geW91IHdhbnQgdG86XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5zeW5jQWNjb3VudH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmtcIj5cbiAgICAgICAgICAgICAgVXBkYXRlIHRoZSBwYXltZW50IHRvIHRoZSBjdXJyZW50IGFjY291bnRcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgZ3Vlc3RDb21wbGV0ZSA9IHJlZ2lzdHJhdGlvbi5ndWVzdENvdW50ID09IGd1ZXN0cy5sZW5ndGhcbiAgICBjb25zdCBwYXltZW50cyA9IHRoaXMucGF5bWVudExpc3RpbmcoKVxuXG4gICAgbGV0IGNhbmNlbFN1cHBsZW1lbnRcbiAgICBsZXQgcGF5QnV0dG9uXG4gICAgaWYgKGN1cnJlbnRQYXltZW50LmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBidXR0b25MYWJlbFxuICAgICAgaWYgKCFndWVzdENvbXBsZXRlKSB7XG4gICAgICAgIHBheUJ1dHRvbiA9IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5cbiAgICAgICAgICAgIFRoaXMgcmVnaXN0cmF0aW9uIG1heSBub3QgYmUgcGFpZCB1bnRpbCBndWVzdCBpbmZvcm1hdGlvbiBpc1xuICAgICAgICAgICAgY29tcGxldGVkLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudFBheW1lbnQuc3VwcGxlbWVudElkID4gMCkge1xuICAgICAgICAgIGJ1dHRvbkxhYmVsID0gYENvbXBsZXRlIGN1cnJlbnQgc3VwcGxlbWVudGFsIHBheW1lbnQ6ICQke2N1cnJlbnRQYXltZW50LmFtb3VudC50b0ZpeGVkKFxuICAgICAgICAgICAgMlxuICAgICAgICAgICl9YFxuICAgICAgICAgIGNhbmNlbFN1cHBsZW1lbnQgPSAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbFN1cHBsZW1lbnQoKVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIENhbmNlbCB0aGUgY3VycmVudCBzdXBwbGVtZW50XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1dHRvbkxhYmVsID0gYENvbXBsZXRlIGN1cnJlbnQgcmVnaXN0cmF0aW9uIHBheW1lbnQ6ICQke2N1cnJlbnRQYXltZW50LmFtb3VudC50b0ZpeGVkKFxuICAgICAgICAgICAgMlxuICAgICAgICAgICl9YFxuICAgICAgICB9XG4gICAgICAgIHBheUJ1dHRvbiA9IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3ZlcmxheTogdHJ1ZSwgb3ZlcmxheVR5cGU6ICdwYXltZW50J30pXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHtidXR0b25MYWJlbH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhZGRpdGlvbkJ1dHRvblxuICAgIGlmIChcbiAgICAgIChyZWdpc3RyYXRpb24uY2FuY2VsbGVkID09PSAwICYmXG4gICAgICAgIGN1cnJlbnRQYXltZW50LnN1cHBsZW1lbnRJZCA9PT0gdW5kZWZpbmVkKSB8fFxuICAgICAgY3VycmVudFBheW1lbnQuc3VwcGxlbWVudElkID09PSAwXG4gICAgKSB7XG4gICAgICBhZGRpdGlvbkJ1dHRvbiA9IChcbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgIGhyZWY9e2AuL2NvbmZlcmVuY2UvQWRtaW4vU3VwcGxlbWVudC9hZGQvP3JlZ2lzdHJhdGlvbklkPSR7cmVnaXN0cmF0aW9uLmlkfWB9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCI+PC9pPiZuYnNwOyBBZGQgbWVhbHMgYW5kL29yIGd1ZXN0c1xuICAgICAgICA8L2E+XG4gICAgICApXG4gICAgfVxuXG4gICAgbGV0IHJlZnVuZEluZm9cbiAgICBpZiAocmVnaXN0cmF0aW9uLnJlZnVuZGVkID4gMCkge1xuICAgICAgcmVmdW5kSW5mbyA9IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc20gbWwtNVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG92ZXJsYXk6IHRydWUsXG4gICAgICAgICAgICAgIG92ZXJsYXlUeXBlOiAncmVmdW5kSW5mbydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgUmVmdW5kIGluZm9ybWF0aW9uXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKVxuICAgIH1cblxuICAgIGxldCByZWZ1bmRCdXR0b25cbiAgICBpZiAoXG4gICAgICByZWdpc3RyYXRpb24uY29tcGxldGVkID4gMCAmJlxuICAgICAgcmVnaXN0cmF0aW9uLnJlZnVuZEFtb3VudCAhPT0gcmVnaXN0cmF0aW9uLnRvdGFsQ29zdCAmJlxuICAgICAgcmVnaXN0cmF0aW9uLnRvdGFsQ29zdCA+IDBcbiAgICApIHtcbiAgICAgIHJlZnVuZEJ1dHRvbiA9IChcbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtgY29uZmVyZW5jZS9BZG1pbi9SZWZ1bmQvP3JlZ2lzdHJhdGlvbklkPSR7cmVnaXN0cmF0aW9uLmlkfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbWwtNSBidG4tc21cIj5cbiAgICAgICAgICBSZWZ1bmRcbiAgICAgICAgPC9hPlxuICAgICAgKVxuICAgIH1cblxuICAgIGxldCBzYXZlUGF5bWVudFxuICAgIGlmIChjdXJyZW50UGF5bWVudC5wYXltZW50VHlwZSA9PT0gJ2Nhc2gnKSB7XG4gICAgICBzYXZlUGF5bWVudCA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5zYXZlfT5cbiAgICAgICAgICAgIENvbXBsZXRlIHJlZ2lzdHJhdGlvbiBwYXltZW50XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGxldCBvdmVybGF5XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLm92ZXJsYXlUeXBlKSB7XG4gICAgICBjYXNlICdwYXltZW50JzpcbiAgICAgICAgb3ZlcmxheSA9IChcbiAgICAgICAgICA8T3ZlcmxheVxuICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5vdmVybGF5fVxuICAgICAgICAgICAgY2xvc2U9e3RoaXMub3ZlcmxheU9mZn1cbiAgICAgICAgICAgIHdpZHRoPVwiODAlXCJcbiAgICAgICAgICAgIHRpdGxlPXtgUGF5bWVudCBmb3IgcmVnaXN0cmF0aW9uOiAke3RoaXMuc3RhdGUuc2Vzc2lvbi50aXRsZX1gfT5cbiAgICAgICAgICAgIDxQYXltZW50Rm9ybVxuICAgICAgICAgICAgICBzZXNzaW9uPXt0aGlzLnN0YXRlLnNlc3Npb259XG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbj17cmVnaXN0cmF0aW9ufVxuICAgICAgICAgICAgICBwYXltZW50PXtjdXJyZW50UGF5bWVudH1cbiAgICAgICAgICAgICAgc2F2ZT17dGhpcy5zYXZlfVxuICAgICAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtzYXZlUGF5bWVudH1cbiAgICAgICAgICA8L092ZXJsYXk+XG4gICAgICAgIClcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAncmVmdW5kSW5mbyc6XG4gICAgICAgIG92ZXJsYXkgPSAoXG4gICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUub3ZlcmxheX1cbiAgICAgICAgICAgIGNsb3NlPXt0aGlzLm92ZXJsYXlPZmZ9XG4gICAgICAgICAgICB3aWR0aD1cIjgwJVwiXG4gICAgICAgICAgICB0aXRsZT1cIlJlZnVuZCBpbmZvcm1hdGlvblwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPFJlZnVuZEluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcmVmdW5kSWQ9e3JlZ2lzdHJhdGlvbi5yZWZ1bmRJZH1cbiAgICAgICAgICAgICAgICBjbG9zZT17dGhpcy5vdmVybGF5T2ZmfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9PdmVybGF5PlxuICAgICAgICApXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgbGV0IHJlZnVuZGVkXG4gICAgaWYgKHJlZ2lzdHJhdGlvbi5yZWZ1bmRBbW91bnQgPiAwKSB7XG4gICAgICByZWZ1bmRlZCA9IChcbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5SZWZ1bmRlZDwvdGg+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAke2ZpeEl0KCdyZWZ1bmRBbW91bnQnLCByZWdpc3RyYXRpb24pfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICApXG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25EYXkgPSBkYXlqcyhzZXNzaW9uLmV2ZW50RGF0ZSAqIDEwMDApLmZvcm1hdCgnTU0tREQtWVlZWScpXG4gICAgY29uc3QgdG9kYXkgPSBkYXlqcygpLmZvcm1hdCgnTU0tREQtWVlZWScpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2Nvc3RXYXJuaW5nfVxuICAgICAgICB7YWNjb3VudFdhcm5pbmd9XG4gICAgICAgIDxoMz5cbiAgICAgICAgICBSZWdpc3RyYXRpb24gcGF5bWVudCBzdGF0dXMgZm9yIHt2aXNpdG9yLmZpcnN0TmFtZX0ge3Zpc2l0b3IubGFzdE5hbWV9eycgJ31cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCJcbiAgICAgICAgICAgIGhyZWY9e2AuL2NvbmZlcmVuY2UvQWRtaW4vVmlzaXRvci9sb2dpbkFzP3Zpc2l0b3JJZD0ke3Zpc2l0b3IuaWR9YH0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2lnbi1pbi1hbHRcIj48L2k+IExvZyBpbiBhcyB2aXNpdG9yXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2gzPlxuXG4gICAgICAgIDxoND5cbiAgICAgICAgICBDb25mZXJlbmNlOiB7Y29uZmVyZW5jZS50aXRsZX1cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBTZXNzaW9uOiZuYnNwO1xuICAgICAgICAgIHtzZXNzaW9uLnRpdGxlfSAtIHtzZXNzaW9uLmV2ZW50RGF0ZUZvcm1hdH1cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17YGNvbmZlcmVuY2UvQWRtaW4vUmVnaXN0cmF0aW9uLz9zZXNzaW9uSWQ9JHtzZXNzaW9uLmlkfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFyayBidG4tc20gbWwtM1wiPlxuICAgICAgICAgICAgUmVnaXN0cmF0aW9ucyBsaXN0XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtgY29uZmVyZW5jZS9BZG1pbi9TZXNzaW9uLyR7c2Vzc2lvbi5pZH0vc2lnbmluYH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrIGJ0bi1zbSBtbC0zXCI+XG4gICAgICAgICAgICBVbnBhaWQgbGlzdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPGg0PlxuICAgICAgICAgIFN0dWRlbnQ6IHtzdHVkZW50LmZpcnN0TmFtZX0ge3N0dWRlbnQubGFzdE5hbWV9IC0ge3N0dWRlbnQuYmFubmVySWR9IC17JyAnfVxuICAgICAgICAgIHtzdHVkZW50LnVzZXJuYW1lfVxuICAgICAgICA8L2g0PlxuICAgICAgICB7cmVnaXN0cmF0aW9uLmNhbmNlbGxlZEJ5Lmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgIENhbmNlbGxlZCBvbiB7cmVnaXN0cmF0aW9uLmNhbmNlbGxlZERhdGV9IGJ5eycgJ31cbiAgICAgICAgICAgIHtyZWdpc3RyYXRpb24uY2FuY2VsbGVkQnl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7d2lkdGg6ICcxMCUnfX0+Q29zdDo8L3RoPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgJHtmaXhJdCgndG90YWxDb3N0JywgcmVnaXN0cmF0aW9uKX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC01IFwiPnthZGRpdGlvbkJ1dHRvbn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+UGFpZDo8L3RoPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgJHtmaXhJdCgnYW1vdW50UGFpZCcsIHJlZ2lzdHJhdGlvbil9IHtyZWZ1bmRCdXR0b259IHtyZWZ1bmRJbmZvfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIHtyZWZ1bmRlZH1cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPkR1ZTo8L3RoPlxuICAgICAgICAgICAgICA8dGQ+JHtmaXhJdCgnYW1vdW50RHVlJywgcmVnaXN0cmF0aW9uKX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPntwYXlCdXR0b259PC9kaXY+XG4gICAgICAgIHtjYW5jZWxTdXBwbGVtZW50fVxuICAgICAgICA8aDQ+Q29tcGxldGVkIHBheW1lbnRzPC9oND5cbiAgICAgICAgPGRpdj57cGF5bWVudHN9PC9kaXY+XG4gICAgICAgIDxSZWZ1bmRzIHJlZ2lzdHJhdGlvbklkPXtyZWdpc3RyYXRpb25JZH0gLz5cbiAgICAgICAge292ZXJsYXl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuUGF5bWVudC5wcm9wVHlwZXMgPSB7XG4gIHJlZ2lzdHJhdGlvbklkOiBQcm9wVHlwZXMubnVtYmVyXG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFBheW1lbnQgcmVnaXN0cmF0aW9uSWQ9e3JlZ2lzdHJhdGlvbklkfSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1BheW1lbnQnKVxuKVxuIiwiY29uc3QgdG90YWxDb3N0ID0gKHJlZ2lzdHJhdGlvbiwgc2Vzc2lvbikgPT4ge1xuICBjb25zdCB7cmVnaXN0ZXJDb3N0LCBndWVzdENvc3QsIG1lYWxDb3N0LCBtZWFsU2VydmljZX0gPSBzZXNzaW9uXG4gIGNvbnN0IHtkaXNjb3VudCwgZ3Vlc3RDb3VudCwgbWVhbFRpY2tldHN9ID0gcmVnaXN0cmF0aW9uXG5cbiAgbGV0IGNvc3QgPSBOdW1iZXIocmVnaXN0ZXJDb3N0KSAtIE51bWJlcihkaXNjb3VudClcblxuICBjb25zdCB0b3RhbEd1ZXN0Q29zdCA9IE51bWJlcihndWVzdENvc3QpICogTnVtYmVyKGd1ZXN0Q291bnQpXG4gIGNvc3QgPSBjb3N0ICsgdG90YWxHdWVzdENvc3RcblxuICBpZiAobWVhbFNlcnZpY2UgPT0gMSkge1xuICAgIGNvbnN0IHRvdGFsTWVhbENvc3QgPSBOdW1iZXIobWVhbENvc3QpICogTnVtYmVyKG1lYWxUaWNrZXRzKVxuICAgIGNvc3QgPSBjb3N0ICsgdG90YWxNZWFsQ29zdFxuICB9XG5cbiAgcmV0dXJuIGNvc3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG90YWxDb3N0XG4iLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiByKG4pe2lmKHRbbl0pcmV0dXJuIHRbbl0uZXhwb3J0czt2YXIgbz10W25dPXtpOm4sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtuXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxyKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiByLm09ZSxyLmM9dCxyLmQ9ZnVuY3Rpb24oZSx0LG4pe3IubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LHIucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPXIoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIobiksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpci5kKG4sbyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG8pKTtyZXR1cm4gbn0sci5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiByLmQodCxcImFcIix0KSx0fSxyLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHIucD1cIlwiLHIoci5zPTMpfShbZnVuY3Rpb24oZSx0LHIpe2UuZXhwb3J0cz1yKDYpKCl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9cig0KX0sZnVuY3Rpb24oZSx0LHIpe3ZhciBuO1xuLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuIWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9e30uaGFzT3duUHJvcGVydHk7ZnVuY3Rpb24gbygpe2Zvcih2YXIgZT1bXSx0PTA7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2lmKG4pe3ZhciB1PXR5cGVvZiBuO2lmKFwic3RyaW5nXCI9PT11fHxcIm51bWJlclwiPT09dSllLnB1c2gobik7ZWxzZSBpZihBcnJheS5pc0FycmF5KG4pJiZuLmxlbmd0aCl7dmFyIGk9by5hcHBseShudWxsLG4pO2kmJmUucHVzaChpKX1lbHNlIGlmKFwib2JqZWN0XCI9PT11KWZvcih2YXIgYSBpbiBuKXIuY2FsbChuLGEpJiZuW2FdJiZlLnB1c2goYSl9fXJldHVybiBlLmpvaW4oXCIgXCIpfWUuZXhwb3J0cz8oby5kZWZhdWx0PW8sZS5leHBvcnRzPW8pOnZvaWQgMD09PShuPWZ1bmN0aW9uKCl7cmV0dXJuIG99LmFwcGx5KHQsW10pKXx8KGUuZXhwb3J0cz1uKX0oKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3Iucih0KTt2YXIgbj1yKDEpLG89ci5uKG4pLHU9cigwKSxpPXIubih1KSxhPXIoMiksYz1yLm4oYSk7ZnVuY3Rpb24gbChlKXtyZXR1cm4obD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkoZSl9ZnVuY3Rpb24gZihlLHQpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbj10W3JdO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19ZnVuY3Rpb24gcyhlLHQpe3JldHVybiF0fHxcIm9iamVjdFwiIT09bCh0KSYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9mdW5jdGlvbihlKXtpZih2b2lkIDA9PT1lKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gZX0oZSk6dH1mdW5jdGlvbiBwKGUpe3JldHVybihwPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSl9KShlKX1mdW5jdGlvbiB5KGUsdCl7cmV0dXJuKHk9T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbihlLHQpe3JldHVybiBlLl9fcHJvdG9fXz10LGV9KShlLHQpfXZhciBkPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyx0KSxzKHRoaXMscCh0KS5jYWxsKHRoaXMsZSkpfXZhciByLHUsaTtyZXR1cm4gZnVuY3Rpb24oZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJnkoZSx0KX0odCxuW1wiQ29tcG9uZW50XCJdKSxyPXQsKHU9W3trZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlLHQ9dGhpcy5wcm9wcy5idXR0b25zLm1hcChmdW5jdGlvbihlLHQpe3ZhciByPVwiYnRuLVwiK3RoaXMucHJvcHMuYWN0aXZlQ29sb3Isbj1cImJ0bi1cIit0aGlzLnByb3BzLmNvbG9yLHU9YygpKFwiYnRuXCIsbik7cmV0dXJuIG51bGwhPT10aGlzLnByb3BzLm1hdGNoJiZ2b2lkIDAhPT10aGlzLnByb3BzLm1hdGNoJiYodGhpcy5wcm9wcy5tYXRjaC5jb25zdHJ1Y3Rvcj09PUFycmF5JiYtMSE9PXRoaXMucHJvcHMubWF0Y2guaW5kZXhPZihlLnZhbHVlKT91PWMoKShcImJ0blwiLFwiYWN0aXZlXCIscik6dGhpcy5wcm9wcy5tYXRjaD09ZS52YWx1ZSYmKHU9YygpKFwiYnRuXCIsXCJhY3RpdmVcIixyKSkpLG8uYS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIse3R5cGU6XCJidXR0b25cIixrZXk6dCxjbGFzc05hbWU6dSxkaXNhYmxlZDp0aGlzLnByb3BzLmRpc2FibGVkLHZhbHVlOmUudmFsdWUsb25DbGljazp0aGlzLnByb3BzLmhhbmRsZS5iaW5kKG51bGwsZS52YWx1ZSl9LGUubGFiZWwpfS5iaW5kKHRoaXMpKSxyPSEwPT09dGhpcy5wcm9wcy52ZXJ0aWNhbD9cImJ0bi1ncm91cC12ZXJ0aWNhbFwiOlwiYnRuLWdyb3VwXCI7cmV0dXJuIGU9dGhpcy5wcm9wcy5tYXRjaCYmdGhpcy5wcm9wcy5tYXRjaC5jb25zdHJ1Y3Rvcj09PUFycmF5P3RoaXMucHJvcHMubWF0Y2gubWFwKGZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcy5wcm9wcy5uYW1lK1wiW11cIjtyZXR1cm4gby5hLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLHt0eXBlOlwiaGlkZGVuXCIsbmFtZTpyLHZhbHVlOmUsa2V5OnR9KX0uYmluZCh0aGlzKSk6by5hLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLHt0eXBlOlwiaGlkZGVuXCIsbmFtZTp0aGlzLnByb3BzLm5hbWUsdmFsdWU6dGhpcy5wcm9wcy5tYXRjaH0pLG8uYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsbnVsbCxvLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6cixyb2xlOlwiZ3JvdXBcIn0sdCksZSl9fV0pJiZmKHIucHJvdG90eXBlLHUpLGkmJmYocixpKSx0fSgpO2QucHJvcFR5cGVzPXtidXR0b25zOmkuYS5hcnJheS5pc1JlcXVpcmVkLGhhbmRsZTppLmEuZnVuYy5pc1JlcXVpcmVkLGFjdGl2ZUNvbG9yOmkuYS5zdHJpbmcsY29sb3I6aS5hLnN0cmluZyxtYXRjaDppLmEub25lT2ZUeXBlKFtpLmEuc3RyaW5nLGkuYS5udW1iZXIsaS5hLmFycmF5XSksdmVydGljYWw6aS5hLmJvb2wsbmFtZTppLmEuc3RyaW5nLGRpc2FibGVkOmkuYS5ib29sfSxkLmRlZmF1bHRQcm9wcz17YWN0aXZlQ29sb3I6XCJkYXJrXCIsY29sb3I6XCJvdXRsaW5lLWRhcmtcIixtYXRjaDpcIlwiLG5hbWU6bnVsbCxkaXNhYmxlZDohMX0sdC5kZWZhdWx0PWR9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtcbi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC42XG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovdmFyIG49cig1KSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcix1PW8/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsaT1vP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsYT1vP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxjPW8/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LGw9bz9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsZj1vP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxzPW8/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAscD1vP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEseT1vP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixkPW8/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLGI9bz9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTo2MDExNSxoPW8/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsbT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtmdW5jdGlvbiB2KGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLTEscj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2Usbj0wO248dDtuKyspcis9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbbisxXSk7IWZ1bmN0aW9uKGUsdCxyLG4sbyx1LGksYSl7aWYoIWUpe2lmKGU9dm9pZCAwLHZvaWQgMD09PXQpZT1FcnJvcihcIk1pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCIpO2Vsc2V7dmFyIGM9W3IsbixvLHUsaSxhXSxsPTA7KGU9RXJyb3IodC5yZXBsYWNlKC8lcy9nLGZ1bmN0aW9uKCl7cmV0dXJuIGNbbCsrXX0pKSkubmFtZT1cIkludmFyaWFudCBWaW9sYXRpb25cIn10aHJvdyBlLmZyYW1lc1RvUG9wPTEsZX19KCExLFwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2UrXCI7IHZpc2l0ICVzIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4gXCIscil9dmFyIGc9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LF89e307ZnVuY3Rpb24gTyhlLHQscil7dGhpcy5wcm9wcz1lLHRoaXMuY29udGV4dD10LHRoaXMucmVmcz1fLHRoaXMudXBkYXRlcj1yfHxnfWZ1bmN0aW9uIFMoKXt9ZnVuY3Rpb24gaihlLHQscil7dGhpcy5wcm9wcz1lLHRoaXMuY29udGV4dD10LHRoaXMucmVmcz1fLHRoaXMudXBkYXRlcj1yfHxnfU8ucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sTy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiIT10eXBlb2YgZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbnVsbCE9ZSYmdihcIjg1XCIpLHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxlLHQsXCJzZXRTdGF0ZVwiKX0sTy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oZSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGUsXCJmb3JjZVVwZGF0ZVwiKX0sUy5wcm90b3R5cGU9Ty5wcm90b3R5cGU7dmFyIFA9ai5wcm90b3R5cGU9bmV3IFM7UC5jb25zdHJ1Y3Rvcj1qLG4oUCxPLnByb3RvdHlwZSksUC5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgaz17Y3VycmVudDpudWxsfSx3PXtjdXJyZW50Om51bGx9LHg9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxFPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07ZnVuY3Rpb24gQyhlLHQscil7dmFyIG49dm9pZCAwLG89e30saT1udWxsLGE9bnVsbDtpZihudWxsIT10KWZvcihuIGluIHZvaWQgMCE9PXQucmVmJiYoYT10LnJlZiksdm9pZCAwIT09dC5rZXkmJihpPVwiXCIrdC5rZXkpLHQpeC5jYWxsKHQsbikmJiFFLmhhc093blByb3BlcnR5KG4pJiYob1tuXT10W25dKTt2YXIgYz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWMpby5jaGlsZHJlbj1yO2Vsc2UgaWYoMTxjKXtmb3IodmFyIGw9QXJyYXkoYyksZj0wO2Y8YztmKyspbFtmXT1hcmd1bWVudHNbZisyXTtvLmNoaWxkcmVuPWx9aWYoZSYmZS5kZWZhdWx0UHJvcHMpZm9yKG4gaW4gYz1lLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1vW25dJiYob1tuXT1jW25dKTtyZXR1cm57JCR0eXBlb2Y6dSx0eXBlOmUsa2V5OmkscmVmOmEscHJvcHM6byxfb3duZXI6dy5jdXJyZW50fX1mdW5jdGlvbiBSKGUpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSYmZS4kJHR5cGVvZj09PXV9dmFyICQ9L1xcLysvZyxUPVtdO2Z1bmN0aW9uIEEoZSx0LHIsbil7aWYoVC5sZW5ndGgpe3ZhciBvPVQucG9wKCk7cmV0dXJuIG8ucmVzdWx0PWUsby5rZXlQcmVmaXg9dCxvLmZ1bmM9cixvLmNvbnRleHQ9bixvLmNvdW50PTAsb31yZXR1cm57cmVzdWx0OmUsa2V5UHJlZml4OnQsZnVuYzpyLGNvbnRleHQ6bixjb3VudDowfX1mdW5jdGlvbiBJKGUpe2UucmVzdWx0PW51bGwsZS5rZXlQcmVmaXg9bnVsbCxlLmZ1bmM9bnVsbCxlLmNvbnRleHQ9bnVsbCxlLmNvdW50PTAsMTA+VC5sZW5ndGgmJlQucHVzaChlKX1mdW5jdGlvbiBNKGUsdCxyKXtyZXR1cm4gbnVsbD09ZT8wOmZ1bmN0aW9uIGUodCxyLG4sbyl7dmFyIGE9dHlwZW9mIHQ7XCJ1bmRlZmluZWRcIiE9PWEmJlwiYm9vbGVhblwiIT09YXx8KHQ9bnVsbCk7dmFyIGM9ITE7aWYobnVsbD09PXQpYz0hMDtlbHNlIHN3aXRjaChhKXtjYXNlXCJzdHJpbmdcIjpjYXNlXCJudW1iZXJcIjpjPSEwO2JyZWFrO2Nhc2VcIm9iamVjdFwiOnN3aXRjaCh0LiQkdHlwZW9mKXtjYXNlIHU6Y2FzZSBpOmM9ITB9fWlmKGMpcmV0dXJuIG4obyx0LFwiXCI9PT1yP1wiLlwiK3EodCwwKTpyKSwxO2lmKGM9MCxyPVwiXCI9PT1yP1wiLlwiOnIrXCI6XCIsQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIGw9MDtsPHQubGVuZ3RoO2wrKyl7dmFyIGY9citxKGE9dFtsXSxsKTtjKz1lKGEsZixuLG8pfWVsc2UgaWYoZj1udWxsPT09dHx8XCJvYmplY3RcIiE9dHlwZW9mIHQ/bnVsbDpcImZ1bmN0aW9uXCI9PXR5cGVvZihmPW0mJnRbbV18fHRbXCJAQGl0ZXJhdG9yXCJdKT9mOm51bGwsXCJmdW5jdGlvblwiPT10eXBlb2YgZilmb3IodD1mLmNhbGwodCksbD0wOyEoYT10Lm5leHQoKSkuZG9uZTspYys9ZShhPWEudmFsdWUsZj1yK3EoYSxsKyspLG4sbyk7ZWxzZVwib2JqZWN0XCI9PT1hJiZ2KFwiMzFcIixcIltvYmplY3QgT2JqZWN0XVwiPT0obj1cIlwiK3QpP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXModCkuam9pbihcIiwgXCIpK1wifVwiOm4sXCJcIik7cmV0dXJuIGN9KGUsXCJcIix0LHIpfWZ1bmN0aW9uIHEoZSx0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9PWUmJm51bGwhPWUua2V5P2Z1bmN0aW9uKGUpe3ZhciB0PXtcIj1cIjpcIj0wXCIsXCI6XCI6XCI9MlwifTtyZXR1cm5cIiRcIisoXCJcIitlKS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19KX0oZS5rZXkpOnQudG9TdHJpbmcoMzYpfWZ1bmN0aW9uIFUoZSx0KXtlLmZ1bmMuY2FsbChlLmNvbnRleHQsdCxlLmNvdW50KyspfWZ1bmN0aW9uIE4oZSx0LHIpe3ZhciBuPWUucmVzdWx0LG89ZS5rZXlQcmVmaXg7ZT1lLmZ1bmMuY2FsbChlLmNvbnRleHQsdCxlLmNvdW50KyspLEFycmF5LmlzQXJyYXkoZSk/TChlLG4scixmdW5jdGlvbihlKXtyZXR1cm4gZX0pOm51bGwhPWUmJihSKGUpJiYoZT1mdW5jdGlvbihlLHQpe3JldHVybnskJHR5cGVvZjp1LHR5cGU6ZS50eXBlLGtleTp0LHJlZjplLnJlZixwcm9wczplLnByb3BzLF9vd25lcjplLl9vd25lcn19KGUsbysoIWUua2V5fHx0JiZ0LmtleT09PWUua2V5P1wiXCI6KFwiXCIrZS5rZXkpLnJlcGxhY2UoJCxcIiQmL1wiKStcIi9cIikrcikpLG4ucHVzaChlKSl9ZnVuY3Rpb24gTChlLHQscixuLG8pe3ZhciB1PVwiXCI7bnVsbCE9ciYmKHU9KFwiXCIrcikucmVwbGFjZSgkLFwiJCYvXCIpK1wiL1wiKSxNKGUsTix0PUEodCx1LG4sbykpLEkodCl9ZnVuY3Rpb24gRCgpe3ZhciBlPWsuY3VycmVudDtyZXR1cm4gbnVsbD09PWUmJnYoXCIzMjFcIiksZX12YXIgRj17Q2hpbGRyZW46e21hcDpmdW5jdGlvbihlLHQscil7aWYobnVsbD09ZSlyZXR1cm4gZTt2YXIgbj1bXTtyZXR1cm4gTChlLG4sbnVsbCx0LHIpLG59LGZvckVhY2g6ZnVuY3Rpb24oZSx0LHIpe2lmKG51bGw9PWUpcmV0dXJuIGU7TShlLFUsdD1BKG51bGwsbnVsbCx0LHIpKSxJKHQpfSxjb3VudDpmdW5jdGlvbihlKXtyZXR1cm4gTShlLGZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LG51bGwpfSx0b0FycmF5OmZ1bmN0aW9uKGUpe3ZhciB0PVtdO3JldHVybiBMKGUsdCxudWxsLGZ1bmN0aW9uKGUpe3JldHVybiBlfSksdH0sb25seTpmdW5jdGlvbihlKXtyZXR1cm4gUihlKXx8dihcIjE0M1wiKSxlfX0sY3JlYXRlUmVmOmZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19LENvbXBvbmVudDpPLFB1cmVDb21wb25lbnQ6aixjcmVhdGVDb250ZXh0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PW51bGwpLChlPXskJHR5cGVvZjpzLF9jYWxjdWxhdGVDaGFuZ2VkQml0czp0LF9jdXJyZW50VmFsdWU6ZSxfY3VycmVudFZhbHVlMjplLF90aHJlYWRDb3VudDowLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbH0pLlByb3ZpZGVyPXskJHR5cGVvZjpmLF9jb250ZXh0OmV9LGUuQ29uc3VtZXI9ZX0sZm9yd2FyZFJlZjpmdW5jdGlvbihlKXtyZXR1cm57JCR0eXBlb2Y6eSxyZW5kZXI6ZX19LGxhenk6ZnVuY3Rpb24oZSl7cmV0dXJueyQkdHlwZW9mOmgsX2N0b3I6ZSxfc3RhdHVzOi0xLF9yZXN1bHQ6bnVsbH19LG1lbW86ZnVuY3Rpb24oZSx0KXtyZXR1cm57JCR0eXBlb2Y6Yix0eXBlOmUsY29tcGFyZTp2b2lkIDA9PT10P251bGw6dH19LHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIEQoKS51c2VDYWxsYmFjayhlLHQpfSx1c2VDb250ZXh0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIEQoKS51c2VDb250ZXh0KGUsdCl9LHVzZUVmZmVjdDpmdW5jdGlvbihlLHQpe3JldHVybiBEKCkudXNlRWZmZWN0KGUsdCl9LHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBEKCkudXNlSW1wZXJhdGl2ZUhhbmRsZShlLHQscil9LHVzZURlYnVnVmFsdWU6ZnVuY3Rpb24oKXt9LHVzZUxheW91dEVmZmVjdDpmdW5jdGlvbihlLHQpe3JldHVybiBEKCkudXNlTGF5b3V0RWZmZWN0KGUsdCl9LHVzZU1lbW86ZnVuY3Rpb24oZSx0KXtyZXR1cm4gRCgpLnVzZU1lbW8oZSx0KX0sdXNlUmVkdWNlcjpmdW5jdGlvbihlLHQscil7cmV0dXJuIEQoKS51c2VSZWR1Y2VyKGUsdCxyKX0sdXNlUmVmOmZ1bmN0aW9uKGUpe3JldHVybiBEKCkudXNlUmVmKGUpfSx1c2VTdGF0ZTpmdW5jdGlvbihlKXtyZXR1cm4gRCgpLnVzZVN0YXRlKGUpfSxGcmFnbWVudDphLFN0cmljdE1vZGU6YyxTdXNwZW5zZTpkLGNyZWF0ZUVsZW1lbnQ6QyxjbG9uZUVsZW1lbnQ6ZnVuY3Rpb24oZSx0LHIpe251bGw9PWUmJnYoXCIyNjdcIixlKTt2YXIgbz12b2lkIDAsaT1uKHt9LGUucHJvcHMpLGE9ZS5rZXksYz1lLnJlZixsPWUuX293bmVyO2lmKG51bGwhPXQpe3ZvaWQgMCE9PXQucmVmJiYoYz10LnJlZixsPXcuY3VycmVudCksdm9pZCAwIT09dC5rZXkmJihhPVwiXCIrdC5rZXkpO3ZhciBmPXZvaWQgMDtmb3IobyBpbiBlLnR5cGUmJmUudHlwZS5kZWZhdWx0UHJvcHMmJihmPWUudHlwZS5kZWZhdWx0UHJvcHMpLHQpeC5jYWxsKHQsbykmJiFFLmhhc093blByb3BlcnR5KG8pJiYoaVtvXT12b2lkIDA9PT10W29dJiZ2b2lkIDAhPT1mP2Zbb106dFtvXSl9aWYoMT09PShvPWFyZ3VtZW50cy5sZW5ndGgtMikpaS5jaGlsZHJlbj1yO2Vsc2UgaWYoMTxvKXtmPUFycmF5KG8pO2Zvcih2YXIgcz0wO3M8bztzKyspZltzXT1hcmd1bWVudHNbcysyXTtpLmNoaWxkcmVuPWZ9cmV0dXJueyQkdHlwZW9mOnUsdHlwZTplLnR5cGUsa2V5OmEscmVmOmMscHJvcHM6aSxfb3duZXI6bH19LGNyZWF0ZUZhY3Rvcnk6ZnVuY3Rpb24oZSl7dmFyIHQ9Qy5iaW5kKG51bGwsZSk7cmV0dXJuIHQudHlwZT1lLHR9LGlzVmFsaWRFbGVtZW50OlIsdmVyc2lvbjpcIjE2LjguNlwiLHVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlOnAsdW5zdGFibGVfUHJvZmlsZXI6bCxfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDp7UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjprLFJlYWN0Q3VycmVudE93bmVyOncsYXNzaWduOm59fSxWPXtkZWZhdWx0OkZ9LFc9ViYmRnx8VjtlLmV4cG9ydHM9Vy5kZWZhdWx0fHxXfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7XG4vKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi92YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLG89T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSx1PU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7ZnVuY3Rpb24gaShlKXtpZihudWxsPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZFwiKTtyZXR1cm4gT2JqZWN0KGUpfWUuZXhwb3J0cz1mdW5jdGlvbigpe3RyeXtpZighT2JqZWN0LmFzc2lnbilyZXR1cm4hMTt2YXIgZT1uZXcgU3RyaW5nKFwiYWJjXCIpO2lmKGVbNV09XCJkZVwiLFwiNVwiPT09T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZSlbMF0pcmV0dXJuITE7Zm9yKHZhciB0PXt9LHI9MDtyPDEwO3IrKyl0W1wiX1wiK1N0cmluZy5mcm9tQ2hhckNvZGUocildPXI7aWYoXCIwMTIzNDU2Nzg5XCIhPT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19KS5qb2luKFwiXCIpKXJldHVybiExO3ZhciBuPXt9O3JldHVyblwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIi5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe25bZV09ZX0pLFwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIj09PU9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sbikpLmpvaW4oXCJcIil9Y2F0Y2goZSl7cmV0dXJuITF9fSgpP09iamVjdC5hc3NpZ246ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHIsYSxjPWkoZSksbD0xO2w8YXJndW1lbnRzLmxlbmd0aDtsKyspe2Zvcih2YXIgZiBpbiByPU9iamVjdChhcmd1bWVudHNbbF0pKW8uY2FsbChyLGYpJiYoY1tmXT1yW2ZdKTtpZihuKXthPW4ocik7Zm9yKHZhciBzPTA7czxhLmxlbmd0aDtzKyspdS5jYWxsKHIsYVtzXSkmJihjW2Fbc11dPXJbYVtzXV0pfX1yZXR1cm4gY319LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1yKDcpO2Z1bmN0aW9uIG8oKXt9ZnVuY3Rpb24gdSgpe311LnJlc2V0V2FybmluZ0NhY2hlPW8sZS5leHBvcnRzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQscixvLHUsaSl7aWYoaSE9PW4pe3ZhciBhPW5ldyBFcnJvcihcIkNhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuIFVzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uIFJlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXNcIik7dGhyb3cgYS5uYW1lPVwiSW52YXJpYW50IFZpb2xhdGlvblwiLGF9fWZ1bmN0aW9uIHQoKXtyZXR1cm4gZX1lLmlzUmVxdWlyZWQ9ZTt2YXIgcj17YXJyYXk6ZSxib29sOmUsZnVuYzplLG51bWJlcjplLG9iamVjdDplLHN0cmluZzplLHN5bWJvbDplLGFueTplLGFycmF5T2Y6dCxlbGVtZW50OmUsZWxlbWVudFR5cGU6ZSxpbnN0YW5jZU9mOnQsbm9kZTplLG9iamVjdE9mOnQsb25lT2Y6dCxvbmVPZlR5cGU6dCxzaGFwZTp0LGV4YWN0OnQsY2hlY2tQcm9wVHlwZXM6dSxyZXNldFdhcm5pbmdDYWNoZTpvfTtyZXR1cm4gci5Qcm9wVHlwZXM9cixyfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1cIlNFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEXCJ9XSk7Il0sInNvdXJjZVJvb3QiOiIifQ==