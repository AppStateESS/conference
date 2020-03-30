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
/******/ 		"Signin": 0
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
/******/ 	deferredModules.push(["./javascript/Signin/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Signin/Registrations.js":
/*!********************************************!*\
  !*** ./javascript/Signin/Registrations.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var Registrations = function Registrations(_ref) {
  var listing = _ref.listing;

  if (listing.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "No unpaid registrations.");
  }

  var formatted = listing.map(function (value, key) {
    var payButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "btn btn-primary btn-sm",
      href: "conference/Admin/Payment/?registrationId=".concat(value.id)
    }, "Pay");
    var parentFullName = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "Incomplete");

    if (value.firstName.length > 0) {
      parentFullName = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value.firstName, "\xA0", value.lastName);
    }

    var studentName = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value.studentFirstName, "\xA0", value.studentLastName);
    var amountDue = value.totalCost - value.amountPaid;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, payButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, parentFullName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, studentName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "$", amountDue.toFixed(2)));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Parent name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Student name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Amount due")), formatted));
};

Registrations.propTypes = {
  listing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Registrations);

/***/ }),

/***/ "./javascript/Signin/index.jsx":
/*!*************************************!*\
  !*** ./javascript/Signin/index.jsx ***!
  \*************************************/
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
/* harmony import */ var _Registrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Registrations */ "./javascript/Signin/Registrations.js");
/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useInterval */ "./javascript/Signin/useInterval.js");








/* global $, sessionId */

var Signin = function Signin(_ref) {
  var sessionId = _ref.sessionId;
  var delay = 30000;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    id: 0
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      session = _useState4[0],
      setSession = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      registrations = _useState6[0],
      setRegistrations = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      search = _useState8[0],
      setSearch = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),
      isRunning = _useState10[0],
      setIsRunning = _useState10[1];

  Object(_useInterval__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
    loadRegistrations();
  }, isRunning ? delay : null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (search.length > 0) {
      setIsRunning(false);
    } else {
      loadRegistrations();
    }
  }, [search]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    $.ajax({
      url: "conference/Admin/Session/".concat(sessionId),
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        setSession(data);
      },
      error: function error() {}
    });
  }, []);

  var loadRegistrations = function loadRegistrations() {
    setLoading(true);
    $.ajax({
      url: 'conference/Admin/Registration/unpaid',
      data: {
        sessionId: sessionId,
        search: search
      },
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        setLoading(false);
        setRegistrations(data.listing);
        setIsRunning(data.listing.length > 0 && search.length === 0);
      },
      error: function error() {
        setIsRunning(false);
      }
    });
  };

  var searchRegistrations = function searchRegistrations() {
    loadRegistrations();
  };

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "text-center mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "fas fa-spinner fa-spin"
    }), "\xA0Loading...");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Search...",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-outline-primary",
    type: "button",
    onClick: function onClick() {
      return searchRegistrations();
    }
  }, "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-outline-secondary",
    type: "button",
    onClick: function onClick() {
      return setSearch('');
    }
  }, "Clear"))), !isRunning && registrations.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "badge badge-info text-light"
  }, "List refresh suspended while searching. Clear search to resume.") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "mt-3"
  }, session.title, " - Unpaid\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "btn btn-outline-dark",
    href: "conference/Admin/Registration/?sessionId=".concat(session.id)
  }, "View all registrations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Registrations__WEBPACK_IMPORTED_MODULE_4__["default"], {
    listing: registrations
  }));
};

Signin.propTypes = {
  sessionId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
};
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Signin, {
  sessionId: sessionId
}), document.getElementById('Signin'));

/***/ }),

/***/ "./javascript/Signin/useInterval.js":
/*!******************************************!*\
  !*** ./javascript/Signin/useInterval.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * From: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 * By: Dan Abramov
 */


var useInterval = function useInterval(callback, delay) {
  var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Remember the latest callback.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [delay]);
};

/* harmony default export */ __webpack_exports__["default"] = (useInterval);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TaWduaW4vUmVnaXN0cmF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1NpZ25pbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TaWduaW4vdXNlSW50ZXJ2YWwuanMiXSwibmFtZXMiOlsiUmVnaXN0cmF0aW9ucyIsImxpc3RpbmciLCJsZW5ndGgiLCJmb3JtYXR0ZWQiLCJtYXAiLCJ2YWx1ZSIsImtleSIsInBheUJ1dHRvbiIsImlkIiwicGFyZW50RnVsbE5hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInN0dWRlbnROYW1lIiwic3R1ZGVudEZpcnN0TmFtZSIsInN0dWRlbnRMYXN0TmFtZSIsImFtb3VudER1ZSIsInRvdGFsQ29zdCIsImFtb3VudFBhaWQiLCJ0b0ZpeGVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJTaWduaW4iLCJzZXNzaW9uSWQiLCJkZWxheSIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXNzaW9uIiwic2V0U2Vzc2lvbiIsInJlZ2lzdHJhdGlvbnMiLCJzZXRSZWdpc3RyYXRpb25zIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiaXNSdW5uaW5nIiwic2V0SXNSdW5uaW5nIiwidXNlSW50ZXJ2YWwiLCJsb2FkUmVnaXN0cmF0aW9ucyIsInVzZUVmZmVjdCIsIiQiLCJhamF4IiwidXJsIiwiZGF0YVR5cGUiLCJ0eXBlIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsInNlYXJjaFJlZ2lzdHJhdGlvbnMiLCJlIiwidGFyZ2V0IiwidGl0bGUiLCJudW1iZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYWxsYmFjayIsInNhdmVkQ2FsbGJhY2siLCJ1c2VSZWYiLCJjdXJyZW50IiwidGljayIsInNldEludGVydmFs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QUFFSCxpREFBUyxDQUFDK0I7QUFESixDQUFuQjtBQUlBQyxnREFBUSxDQUFDQyxNQUFULGVBQ0UsMkRBQUMsTUFBRDtBQUFRLFdBQVMsRUFBRTlCO0FBQW5CLEVBREYsRUFFRStCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUZGLEU7Ozs7Ozs7Ozs7OztBQzNIQTtBQUFBO0FBQUE7QUFBQTs7OztBQUtBOztBQUVBLElBQU1uQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDb0IsUUFBRCxFQUFXaEMsS0FBWCxFQUFxQjtBQUN2QyxNQUFNaUMsYUFBYSxHQUFHQyxvREFBTSxFQUE1QixDQUR1QyxDQUd2Qzs7QUFDQXBCLHlEQUFTLENBQUMsWUFBTTtBQUNkbUIsaUJBQWEsQ0FBQ0UsT0FBZCxHQUF3QkgsUUFBeEI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsUUFBRCxDQUZNLENBQVQsQ0FKdUMsQ0FRdkM7O0FBQ0FsQix5REFBUyxDQUFDLFlBQU07QUFDZCxhQUFTc0IsSUFBVCxHQUFnQjtBQUNkSCxtQkFBYSxDQUFDRSxPQUFkO0FBQ0Q7O0FBQ0QsUUFBSW5DLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLFVBQUloQixFQUFFLEdBQUdxRCxXQUFXLENBQUNELElBQUQsRUFBT3BDLEtBQVAsQ0FBcEI7QUFDQSxhQUFPO0FBQUEsZUFBTXNDLGFBQWEsQ0FBQ3RELEVBQUQsQ0FBbkI7QUFBQSxPQUFQO0FBQ0Q7QUFDRixHQVJRLEVBUU4sQ0FBQ2dCLEtBQUQsQ0FSTSxDQUFUO0FBU0QsQ0FsQkQ7O0FBb0JlWSwwRUFBZixFIiwiZmlsZSI6IlNpZ25pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJTaWduaW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2phdmFzY3JpcHQvU2lnbmluL2luZGV4LmpzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IFJlZ2lzdHJhdGlvbnMgPSAoe2xpc3Rpbmd9KSA9PiB7XG4gIGlmIChsaXN0aW5nLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiA8aDM+Tm8gdW5wYWlkIHJlZ2lzdHJhdGlvbnMuPC9oMz5cbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlZCA9IGxpc3RpbmcubWFwKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgY29uc3QgcGF5QnV0dG9uID0gKFxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiXG4gICAgICAgIGhyZWY9e2Bjb25mZXJlbmNlL0FkbWluL1BheW1lbnQvP3JlZ2lzdHJhdGlvbklkPSR7dmFsdWUuaWR9YH0+XG4gICAgICAgIFBheVxuICAgICAgPC9hPlxuICAgIClcblxuICAgIGxldCBwYXJlbnRGdWxsTmFtZSA9IDxlbT5JbmNvbXBsZXRlPC9lbT5cbiAgICBpZiAodmFsdWUuZmlyc3ROYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgIHBhcmVudEZ1bGxOYW1lID0gKFxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7dmFsdWUuZmlyc3ROYW1lfSZuYnNwO3t2YWx1ZS5sYXN0TmFtZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHN0dWRlbnROYW1lID0gKFxuICAgICAgPHNwYW4+XG4gICAgICAgIHt2YWx1ZS5zdHVkZW50Rmlyc3ROYW1lfSZuYnNwO3t2YWx1ZS5zdHVkZW50TGFzdE5hbWV9XG4gICAgICA8L3NwYW4+XG4gICAgKVxuXG4gICAgY29uc3QgYW1vdW50RHVlID0gdmFsdWUudG90YWxDb3N0IC0gdmFsdWUuYW1vdW50UGFpZFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e2tleX0+XG4gICAgICAgIDx0ZD57cGF5QnV0dG9ufTwvdGQ+XG4gICAgICAgIDx0ZD57cGFyZW50RnVsbE5hbWV9PC90ZD5cbiAgICAgICAgPHRkPntzdHVkZW50TmFtZX08L3RkPlxuICAgICAgICA8dGQ+JHthbW91bnREdWUudG9GaXhlZCgyKX08L3RkPlxuICAgICAgPC90cj5cbiAgICApXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgPHRib2R5PlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPiZuYnNwOzwvdGg+XG4gICAgICAgICAgPHRoPlBhcmVudCBuYW1lPC90aD5cbiAgICAgICAgICA8dGg+U3R1ZGVudCBuYW1lPC90aD5cbiAgICAgICAgICA8dGg+QW1vdW50IGR1ZTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIHtmb3JtYXR0ZWR9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIClcbn1cblxuUmVnaXN0cmF0aW9ucy5wcm9wVHlwZXMgPSB7bGlzdGluZzogUHJvcFR5cGVzLmFycmF5fVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25zXG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlZ2lzdHJhdGlvbnMgZnJvbSAnLi9SZWdpc3RyYXRpb25zJ1xuaW1wb3J0IHVzZUludGVydmFsIGZyb20gJy4vdXNlSW50ZXJ2YWwnXG5cbi8qIGdsb2JhbCAkLCBzZXNzaW9uSWQgKi9cblxuY29uc3QgU2lnbmluID0gKHtzZXNzaW9uSWR9KSA9PiB7XG4gIGNvbnN0IGRlbGF5ID0gMzAwMDBcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb25dID0gdXNlU3RhdGUoe2lkOiAwfSlcbiAgY29uc3QgW3JlZ2lzdHJhdGlvbnMsIHNldFJlZ2lzdHJhdGlvbnNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2lzUnVubmluZywgc2V0SXNSdW5uaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgdXNlSW50ZXJ2YWwoXG4gICAgKCkgPT4ge1xuICAgICAgbG9hZFJlZ2lzdHJhdGlvbnMoKVxuICAgIH0sXG4gICAgaXNSdW5uaW5nID8gZGVsYXkgOiBudWxsXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2gubGVuZ3RoID4gMCkge1xuICAgICAgc2V0SXNSdW5uaW5nKGZhbHNlKVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2FkUmVnaXN0cmF0aW9ucygpXG4gICAgfVxuICB9LCBbc2VhcmNoXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IGBjb25mZXJlbmNlL0FkbWluL1Nlc3Npb24vJHtzZXNzaW9uSWR9YCxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICBzZXRTZXNzaW9uKGRhdGEpXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgY29uc3QgbG9hZFJlZ2lzdHJhdGlvbnMgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdjb25mZXJlbmNlL0FkbWluL1JlZ2lzdHJhdGlvbi91bnBhaWQnLFxuICAgICAgZGF0YToge3Nlc3Npb25JZCwgc2VhcmNofSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICBzZXRSZWdpc3RyYXRpb25zKGRhdGEubGlzdGluZylcbiAgICAgICAgc2V0SXNSdW5uaW5nKGRhdGEubGlzdGluZy5sZW5ndGggPiAwICYmIHNlYXJjaC5sZW5ndGggPT09IDApXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBzZWFyY2hSZWdpc3RyYXRpb25zID0gKCkgPT4ge1xuICAgIGxvYWRSZWdpc3RyYXRpb25zKClcbiAgfVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC01XCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+Jm5ic3A7TG9hZGluZy4uLlxuICAgICAgPC9oMj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlYXJjaFJlZ2lzdHJhdGlvbnMoKX0+XG4gICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VhcmNoKCcnKX0+XG4gICAgICAgICAgICBDbGVhclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgeyFpc1J1bm5pbmcgJiYgcmVnaXN0cmF0aW9ucy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1pbmZvIHRleHQtbGlnaHRcIj5cbiAgICAgICAgICBMaXN0IHJlZnJlc2ggc3VzcGVuZGVkIHdoaWxlIHNlYXJjaGluZy4gQ2xlYXIgc2VhcmNoIHRvIHJlc3VtZS5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgIHtzZXNzaW9uLnRpdGxlfSAtIFVucGFpZCZuYnNwO1xuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcbiAgICAgICAgICBocmVmPXtgY29uZmVyZW5jZS9BZG1pbi9SZWdpc3RyYXRpb24vP3Nlc3Npb25JZD0ke3Nlc3Npb24uaWR9YH0+XG4gICAgICAgICAgVmlldyBhbGwgcmVnaXN0cmF0aW9uc1xuICAgICAgICA8L2E+XG4gICAgICA8L2gyPlxuXG4gICAgICA8UmVnaXN0cmF0aW9ucyBsaXN0aW5nPXtyZWdpc3RyYXRpb25zfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cblNpZ25pbi5wcm9wVHlwZXMgPSB7XG4gIHNlc3Npb25JZDogUHJvcFR5cGVzLm51bWJlclxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxTaWduaW4gc2Vzc2lvbklkPXtzZXNzaW9uSWR9IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnU2lnbmluJylcbilcbiIsIi8qKlxuICogRnJvbTogaHR0cHM6Ly9vdmVycmVhY3RlZC5pby9tYWtpbmctc2V0aW50ZXJ2YWwtZGVjbGFyYXRpdmUtd2l0aC1yZWFjdC1ob29rcy9cbiAqIEJ5OiBEYW4gQWJyYW1vdlxuICovXG5cbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcblxuY29uc3QgdXNlSW50ZXJ2YWwgPSAoY2FsbGJhY2ssIGRlbGF5KSA9PiB7XG4gIGNvbnN0IHNhdmVkQ2FsbGJhY2sgPSB1c2VSZWYoKVxuXG4gIC8vIFJlbWVtYmVyIHRoZSBsYXRlc3QgY2FsbGJhY2suXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50ID0gY2FsbGJhY2tcbiAgfSwgW2NhbGxiYWNrXSlcblxuICAvLyBTZXQgdXAgdGhlIGludGVydmFsLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgICBzYXZlZENhbGxiYWNrLmN1cnJlbnQoKVxuICAgIH1cbiAgICBpZiAoZGVsYXkgIT09IG51bGwpIHtcbiAgICAgIGxldCBpZCA9IHNldEludGVydmFsKHRpY2ssIGRlbGF5KVxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpXG4gICAgfVxuICB9LCBbZGVsYXldKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VJbnRlcnZhbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==