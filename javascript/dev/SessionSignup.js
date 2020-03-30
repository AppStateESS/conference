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
/******/ 		"SessionSignup": 0
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
/******/ 	deferredModules.push(["./javascript/SessionSignup/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/SessionSignup/Complete.js":
/*!**********************************************!*\
  !*** ./javascript/SessionSignup/Complete.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var Complete = function Complete(_ref) {
  var registration = _ref.registration,
      signupAllowed = _ref.signupAllowed;

  var supplementButton = function supplementButton() {
    if (signupAllowed) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xA0 - or -\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-primary",
        href: "conference/Visitor/Supplement/?registrationId=".concat(registration.id)
      }, "Add another guest or meal"));
    } else {
      return null;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "Your registration is complete!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You may\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-outline-dark",
    href: "conference/Visitor/Registration/".concat(registration.id)
  }, "Review your registration"), supplementButton()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null));
};

Complete.propTypes = {
  registration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  signupAllowed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Complete);

/***/ }),

/***/ "./javascript/SessionSignup/ConferenceQuestion.js":
/*!********************************************************!*\
  !*** ./javascript/SessionSignup/ConferenceQuestion.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Question */ "./javascript/SessionSignup/Question.js");






var visitorInfo = function visitorInfo(_ref) {
  var visitorInfo = _ref.visitorInfo,
      update = _ref.update,
      checkInfo = _ref.checkInfo;
  var questions = visitorInfo.map(function (info, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Question__WEBPACK_IMPORTED_MODULE_2__["default"], {
      idx: key,
      info: info,
      update: update
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Please answer the following questions..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, questions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: checkInfo
  }, "Save and continue")));
};

visitorInfo.propTypes = {
  visitorInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  save: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  checkInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (visitorInfo);

/***/ }),

/***/ "./javascript/SessionSignup/Guest.jsx":
/*!********************************************!*\
  !*** ./javascript/SessionSignup/Guest.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Guest; });
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
/* harmony import */ var _GuestForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GuestForm */ "./javascript/SessionSignup/GuestForm.js");









function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Guest = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Guest, _Component);

  var _super = _createSuper(Guest);

  function Guest(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Guest);

    _this = _super.call(this, props);
    _this.update = _this.update.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.save = _this.save.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Guest, [{
    key: "save",
    value: function save() {
      if (this.isComplete()) {
        this.props.save();
      }
    }
  }, {
    key: "isComplete",
    value: function isComplete() {
      var allComplete = true;
      this.props.guests.forEach(function (element) {
        if (element.complete == false) {
          allComplete = false;
        }
      });
      return allComplete;
    }
  }, {
    key: "update",
    value: function update(count, property, event) {
      var value = event.target.value;
      this.props.update(count, property, value);
    }
  }, {
    key: "render",
    value: function render() {
      var guestCount = parseInt(this.props.registration.guestCount);
      var guestList = [];

      for (var i = 0; i < guestCount; i++) {
        guestList.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_GuestForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: i,
          count: i,
          completeStatus: this.completeStatus,
          guest: this.props.guests[i],
          update: this.update
        }));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", null, "Please enter guest information below."), guestList, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mt-2 text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-primary",
        disabled: !this.isComplete(),
        onClick: this.save
      }, "Save guests and continue")));
    }
  }]);

  return Guest;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


Guest.propTypes = {
  registration: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  guests: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  save: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  error: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};

/***/ }),

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

/***/ "./javascript/SessionSignup/Question.js":
/*!**********************************************!*\
  !*** ./javascript/SessionSignup/Question.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @essappstate/canopy-react-bigcheckbox */ "./node_modules/@essappstate/canopy-react-bigcheckbox/build/index.js");
/* harmony import */ var _essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_2__);






var Question = function Question(_ref) {
  var idx = _ref.idx,
      info = _ref.info,
      update = _ref.update;

  var errorPlaceholder = function errorPlaceholder(info) {
    if (info.error !== undefined && info.error === true) {
      return 'Please answer this question before continuing.';
    }
  };

  if (info.type === 'checkbox') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
      label: info.question,
      checked: info.answer !== undefined && (info.answer === 1 || info.answer === true),
      handle: update.bind(null, idx)
    }));
  } else if (info.type === 'text') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "d-inline"
    }, info.question), info.required === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-asterisk text-danger fa-sm"
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "question ".concat(idx),
      placeholder: errorPlaceholder(info),
      className: "form-control",
      required: info.required === 1,
      value: info.answer,
      onChange: function onChange(e) {
        return update(idx, e.target.value);
      }
    }));
  }
};

Question.propTypes = {
  idx: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  info: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  registration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ }),

/***/ "./javascript/SessionSignup/Review.js":
/*!********************************************!*\
  !*** ./javascript/SessionSignup/Review.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var Review = function Review(_ref) {
  var registration = _ref.registration,
      totalCost = _ref.totalCost,
      visitor = _ref.visitor,
      session = _ref.session,
      goBack = _ref.goBack;
  var address = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, visitor.address1);

  if (visitor.address2.length > 0) {
    address = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, visitor.address1, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), visitor.address2);
  }

  var extraMealsRow = function extraMealsRow() {
    if (session.mealService === 0 || session.mealCost == 0) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Number of ", session.mealIncluded === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "extra") : null, ' ', "meal tickets:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, registration.mealTickets));
  };

  var vegMealsRow = function vegMealsRow() {
    if (session.mealService === 0 || session.mealCost == 0) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Vegetarian meals:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, registration.veggieMeals));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "My contact information", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-info btn-sm",
    onClick: goBack.bind(null, 'contact')
  }, "Change")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, visitor.firstName, " ", visitor.lastName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Username/Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, visitor.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, visitor.phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, address, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), visitor.city, ", ", visitor.state, " ", visitor.zip))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "My registration", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-info btn-sm",
    onClick: goBack.bind(null, 'tickets')
  }, "Change")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Number of guests:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, registration.guestCount)), extraMealsRow(), vegMealsRow(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "lead"
  }, "Total session cost:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "lead"
  }, "$", totalCost()))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-primary btn-block",
    href: "./conference/Visitor/Registration/".concat(registration.id, "/complete")
  }, "Complete registration"));
};

Review.propTypes = {
  registration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  visitor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  session: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  totalCost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  goBack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Review);

/***/ }),

/***/ "./javascript/SessionSignup/Tickets.jsx":
/*!**********************************************!*\
  !*** ./javascript/SessionSignup/Tickets.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tickets; });
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Tickets = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Tickets, _Component);

  var _super = _createSuper(Tickets);

  function Tickets(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Tickets);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tickets, [{
    key: "guestOptions",
    value: function guestOptions() {
      var attendanceCap = this.props.session.attendanceCap;
      var _this$props = this.props,
          registration = _this$props.registration,
          update = _this$props.update;

      if (attendanceCap == 0) {
        return null;
      }

      var options = [];

      for (var i = 0; i < attendanceCap; i++) {
        options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
          key: i
        }, i));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "How many additional family members do you want to register?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("em", {
        className: "small"
      }, "Guests under 18 years of age may participate without being registered."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        className: "form-control",
        value: registration.guestCount,
        onChange: update.bind(null, 'guestCount')
      }, options.map(function (v) {
        return v;
      }))));
    }
  }, {
    key: "mealOptions",
    value: function mealOptions() {
      var _this$props$session = this.props.session,
          mealIncluded = _this$props$session.mealIncluded,
          mealService = _this$props$session.mealService,
          mealCost = _this$props$session.mealCost;
      var _this$props2 = this.props,
          registration = _this$props2.registration,
          update = _this$props2.update;

      if (mealCost == 0 || mealService == 0) {
        return;
      }

      var mealLabel = mealIncluded == 1 ? ' extra ' : ' ';
      var mealIncludedMessage = mealIncluded == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "small"
      }, "Each parent and guest receives a meal as part of their registration. Extra meals tickets are for those not registered or participating in orientation.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "small"
      }, "Meals are not included as part of registration. You may prepay now or wait until the day of the event.");
      var veggieMessage = mealIncluded == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "small"
      }, "Include your registration meal.") : null;
      var veggieOptions = [];
      var limit = Number(registration.mealTickets) + 1;

      for (var i = 0; i <= limit; i++) {
        veggieOptions.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
          key: i
        }, i));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "mb-0"
      }, "How many", mealLabel, "meal tickets do you need?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, mealIncludedMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        className: "form-control",
        value: registration.mealTickets,
        onChange: update.bind(null, 'mealTickets')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", null, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", null, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", null, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", null, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", null, "4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", null, "5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", null, "6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", null, "7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", null, "8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", null, "9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", null, "10")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row mt-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "mb-0"
      }, "How many vegetarian meals do you need?"), veggieMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        className: "form-control",
        value: registration.veggieMeals,
        onChange: update.bind(null, 'veggieMeals')
      }, veggieOptions))));
    }
  }, {
    key: "veggieOptions",
    value: function veggieOptions() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null);
    }
  }, {
    key: "fixedDecimal",
    value: function fixedDecimal(val) {
      return Number.parseFloat(val).toFixed(2);
    }
  }, {
    key: "pricing",
    value: function pricing() {
      var _this$props3 = this.props,
          session = _this$props3.session,
          student = _this$props3.student,
          registration = _this$props3.registration;
      var discount;
      var finalPrice = session.registerCost;

      if (student.discountAmount) {
        discount = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, " - $", student.discountAmount.toFixed(2), " discount");
        finalPrice = parseFloat(session.registerCost) - parseFloat(student.discountAmount);
      }

      var registrationCost = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "Registration cost:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "small"
      }, "Registration cost covers one parent's attendance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", null, "$", session.registerCost.toFixed(2), discount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", null, "$", finalPrice.toFixed(2)));
      var guestCost;

      if (session.guestCost !== 0 && registration.guestCount > 0) {
        var guestTotal = this.fixedDecimal(registration.guestCount * session.guestCost);
        guestCost = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, "Guest cost:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", null, "$", session.guestCost.toFixed(2), " x ", registration.guestCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", null, "$", guestTotal));
      }

      var mealCost;

      if (session.mealCost !== 0 && registration.mealTickets > 0) {
        var mealTotal = this.fixedDecimal(registration.mealTickets * session.mealCost);
        mealCost = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, "Meal cost:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", null, "$", session.mealCost.toFixed(2), " x ", registration.mealTickets), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", null, "$", mealTotal));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
        className: "table table-striped"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", null, registrationCost, guestCost, mealCost, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        colSpan: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "lead"
      }, "Total session cost:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "lead"
      }, "$", this.fixedDecimal(this.props.totalCost()))))));
    }
  }, {
    key: "render",
    value: function render() {
      var guests = this.guestOptions();
      var meals = this.mealOptions();
      var veggie = this.veggieOptions();
      var backButton;

      if (this.props.questions) {
        backButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "btn btn-outline-primary mr-3",
          onClick: this.props.back
        }, "Back to questions");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Additions"), guests, meals, veggie, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, this.pricing()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-center"
      }, backButton, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.props.save
      }, "Save charges and continue")));
    }
  }]);

  return Tickets;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


Tickets.propTypes = {
  registration: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  save: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  session: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  totalCost: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  student: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  questions: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  back: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
Tickets.defaultProps = {};

/***/ }),

/***/ "./javascript/SessionSignup/Visitor.jsx":
/*!**********************************************!*\
  !*** ./javascript/SessionSignup/Visitor.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _essappstate_react_state_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @essappstate/react-state-dropdown */ "./node_modules/@essappstate/react-state-dropdown/build/index.js");
/* harmony import */ var _essappstate_react_state_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_essappstate_react_state_dropdown__WEBPACK_IMPORTED_MODULE_2__);






var Visitor = function Visitor(_ref) {
  var visitor = _ref.visitor,
      update = _ref.update,
      errors = _ref.errors,
      check = _ref.check,
      save = _ref.save;

  var errorMessage = function errorMessage(value) {
    if (errors[value]) {
      if (value === 'phone') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "badge badge-danger"
        }, "Please check your phone number.");
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "badge badge-danger"
        }, "Please complete the above.");
      }
    }
  };

  var updatePhone = function updatePhone(e) {
    var value = e.target.value;
    value = value.replace(/[^\.\-\d]/, '');
    update('phone', value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Please enter your contact information below."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "First name ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "firstName",
    className: "form-control",
    onChange: update.bind(null, 'firstName'),
    onBlur: function onBlur() {
      check('firstName');
    },
    value: visitor.firstName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, errorMessage('firstName'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Last name ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "lastName",
    className: "form-control",
    onChange: update.bind(null, 'lastName'),
    onBlur: function onBlur() {
      return check('lastName');
    },
    value: visitor.lastName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, errorMessage('lastName')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Address ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "address1",
    className: "form-control",
    onChange: update.bind(null, 'address1'),
    onBlur: function onBlur() {
      return check('address1');
    },
    value: visitor.address1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, errorMessage('address1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "address2",
    className: "form-control mt-3",
    onChange: update.bind(null, 'address2'),
    value: visitor.address2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-sm-6 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "City ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "city",
    className: "form-control",
    onChange: update.bind(null, 'city'),
    onBlur: function onBlur() {
      return check('city');
    },
    value: visitor.city
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, errorMessage('city'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-sm-6 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "State"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_essappstate_react_state_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: visitor.state,
    handle: update.bind(null, 'state')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Zip code ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "zip",
    className: "form-control",
    onChange: update.bind(null, 'zip'),
    onBlur: function onBlur() {
      return check('zip');
    },
    value: visitor.zip
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, errorMessage('zip')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Phone number ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "phone",
    className: "form-control",
    onChange: updatePhone,
    onBlur: function onBlur() {
      return check('phone');
    },
    value: visitor.phone
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, errorMessage('phone')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-3 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: save
  }, "Save my contact information")));
};

Visitor.propTypes = {
  visitor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  save: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  check: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Visitor);

/***/ }),

/***/ "./javascript/SessionSignup/index.jsx":
/*!********************************************!*\
  !*** ./javascript/SessionSignup/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SessionSignup; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Tickets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Tickets */ "./javascript/SessionSignup/Tickets.jsx");
/* harmony import */ var _Visitor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Visitor */ "./javascript/SessionSignup/Visitor.jsx");
/* harmony import */ var _Complete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Complete */ "./javascript/SessionSignup/Complete.js");
/* harmony import */ var _Guest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Guest */ "./javascript/SessionSignup/Guest.jsx");
/* harmony import */ var _ConferenceQuestion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ConferenceQuestion */ "./javascript/SessionSignup/ConferenceQuestion.js");
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Review */ "./javascript/SessionSignup/Review.js");
/* harmony import */ var _Shared_SessionChange__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Shared/SessionChange */ "./javascript/Shared/SessionChange.jsx");
/* harmony import */ var _Shared_style_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Shared/style.css */ "./javascript/Shared/style.css");
/* harmony import */ var _Shared_style_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_Shared_style_css__WEBPACK_IMPORTED_MODULE_17__);










function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












/* global $, session, studentId, registrationId, onsite */

var SessionSignup = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(SessionSignup, _Component);

  var _super = _createSuper(SessionSignup);

  function SessionSignup(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SessionSignup);

    _this = _super.call(this, props);
    _this.lastStage = '';
    _this.questions = false;
    _this.state = {
      registration: {
        id: 0,
        conferenceId: 0,
        visitorId: 0,
        sessionId: 0,
        studentId: 0,
        guestCount: 0,
        mealTickets: 0,
        veggieMeals: 0,
        completed: 0
      },
      student: null,
      signupAllowed: true,
      guests: [],
      newRegistration: true,
      visitorInfo: null,
      visitor: {
        firstName: '',
        lastName: ''
      },
      stage: 'start',
      errorMessage: false,
      errors: {
        firstName: false,
        lastName: false,
        address1: false,
        city: false,
        phone: false,
        zip: false
      },
      proceed: true
    };
    _this.updateVisitor = _this.updateVisitor.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.updateRegistration = _this.updateRegistration.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.updateInfo = _this.updateInfo.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.forward = _this.forward.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.totalCost = _this.totalCost.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.checkContact = _this.checkContact.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.saveContact = _this.saveContact.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.saveRegistration = _this.saveRegistration.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.checkInfo = _this.checkInfo.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.updateGuest = _this.updateGuest.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.saveGuests = _this.saveGuests.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.changeSession = _this.changeSession.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SessionSignup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.loadVisitor().then(function () {
        _this2.loadRegistration().then(function () {
          _this2.loadStudent().then(function () {
            _this2.loadVisitorInfo().then(function () {
              _this2.loadGuests().then(function () {
                _this2.determineStage();
              });
            });
          });
        });
      });
    }
  }, {
    key: "determineStage",
    value: function determineStage() {
      var stage = 'review';

      if (this.registrationComplete()) {
        stage = 'complete';
      } else {
        if (!this.visitorDemographicsComplete()) {
          stage = 'contact';
        } else if (!this.questionsComplete()) {
          stage = 'conferenceQuestion';
        } else if (!this.guestsComplete()) {
          stage = 'guest';
        }
      }

      this.lastState = stage;
      this.setState({
        stage: stage
      });
    }
  }, {
    key: "guestsComplete",
    value: function guestsComplete() {
      var guestCount = parseInt(this.state.registration.guestCount);
      return guestCount === 0 || guestCount == this.state.guests.length && this.state.guests[0].firstName.length > 0;
    }
  }, {
    key: "loadVisitorInfo",
    value: function loadVisitorInfo() {
      var _this3 = this;

      return $.ajax({
        url: 'conference/Visitor/VisitorInfo/',
        data: {
          registrationId: this.state.registration.id
        },
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          _this3.setState({
            visitorInfo: data.listing
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "loadStudent",
    value: function loadStudent() {
      var _this4 = this;

      return $.ajax({
        url: 'conference/Visitor/Student/' + this.state.registration.studentId,
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          _this4.setState({
            student: data
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "loadVisitor",
    value: function loadVisitor() {
      var _this5 = this;

      return $.ajax({
        url: 'conference/Visitor/Visitor/current',
        data: {},
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          _this5.setState({
            visitor: data
          });
        },
        error: function error() {
          _this5.setState({
            errorMessage: true
          });
        }
      });
    }
  }, {
    key: "loadRegistration",
    value: function loadRegistration() {
      var _this6 = this;

      var registrationId = this.props.registrationId;
      return $.ajax({
        url: 'conference/Visitor/Registration/' + registrationId,
        data: {},
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
    key: "loadGuests",
    value: function loadGuests() {
      var _this7 = this;

      var _this$state$registrat = this.state.registration,
          guestCount = _this$state$registrat.guestCount,
          id = _this$state$registrat.id;
      return $.ajax({
        url: 'conference/Visitor/Guest/',
        data: {
          registrationId: this.state.registration.id
        },
        dataType: 'json',
        type: 'get',
        success: function success(_ref) {
          var listing = _ref.listing;
          var guests = listing;
          var guestLength = guests.length;

          if (guestLength > 0) {
            guests.forEach(function (element) {
              element.complete = element.firstName.length > 0 && element.lastName.length > 0 && element.email.length > 0 && registrationId > 0;
            });
            var guestPad = guestCount - guestLength;

            if (guestPad > 0) {
              for (var i = 0; i < guestPad; i++) {
                guests.push({
                  firstName: '',
                  lastName: '',
                  email: '',
                  registrationId: id,
                  complete: false
                });
              }
            }
          } else {
            guests = _this7.buildGuests(_this7.state.registration.guestCount);
          }

          _this7.setState({
            guests: guests
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "changeSession",
    value: function changeSession(sessionId) {
      var _this8 = this;

      var registration = this.state.registration;
      $.ajax({
        url: "conference/Visitor/Registration/".concat(registration.id, "/changeSession"),
        data: {
          sessionId: sessionId
        },
        dataType: 'json',
        type: 'patch',
        success: function success() {
          window.location.href = "conference/Visitor/Session/".concat(sessionId, "/signup?studentId=").concat(registration.studentId);
        },
        error: function error() {
          _this8.setState({
            errorMessage: true
          });
        }
      });
    }
  }, {
    key: "registrationComplete",
    value: function registrationComplete() {
      var registration = this.state.registration;
      return registration.completed === 1;
    }
  }, {
    key: "questionsComplete",
    value: function questionsComplete() {
      var visitorInfo = this.state.visitorInfo;

      if (visitorInfo === null) {
        return true;
      }

      var questionsComplete = true;
      visitorInfo.forEach(function (value) {
        if (value.answer === null || value.answer.length === 0) {
          questionsComplete = false;
        }
      });
      return questionsComplete;
    }
  }, {
    key: "saveGuests",
    value: function saveGuests() {
      var _this9 = this;

      $.ajax({
        url: 'conference/Visitor/Guest/',
        data: {
          registrationId: this.state.registration.id,
          guests: this.state.guests
        },
        dataType: 'json',
        type: 'post',
        success: function success() {
          _this9.lastStage = 'review';

          _this9.setState({
            stage: 'review'
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "checkInfo",
    value: function checkInfo() {
      var visitorInfo = this.state.visitorInfo;
      var errorFound = false;
      visitorInfo.forEach(function (question) {
        if (question.type === 'text' && question.required === 1 && question.answer.length === 0) {
          question.error = true;
          errorFound = true;
        } else {
          question.error = false;
        }
      });
      this.setState({
        visitorInfo: visitorInfo
      });

      if (!errorFound) {
        this.saveInfo();
      }
    }
  }, {
    key: "saveInfo",
    value: function saveInfo() {
      var _this10 = this;

      $.ajax({
        url: 'conference/Visitor/VisitorInfo',
        data: {
          info: this.state.visitorInfo,
          registrationId: this.state.registration.id,
          conferenceId: this.state.registration.conferenceId
        },
        dataType: 'json',
        type: 'post',
        success: function success() {
          _this10.setState({
            stage: 'tickets'
          });
        },
        error: function error() {
          alert('Could not save your information.');
        }
      });
    }
  }, {
    key: "buildGuests",
    value: function buildGuests(count) {
      var guests = [];

      for (var i = 0; i < count; i++) {
        guests[i] = {
          id: 0,
          firstName: '',
          lastName: '',
          email: '',
          complete: false
        };
      }

      return guests;
    }
  }, {
    key: "visitorDemographicsComplete",
    value: function visitorDemographicsComplete() {
      return this.checkContact('firstName') && this.checkContact('lastName') && this.checkContact('address1') && this.checkContact('city') && this.checkContact('phone') && this.checkContact('zip');
    }
  }, {
    key: "checkContact",
    value: function checkContact(param) {
      var _this$state = this.state,
          visitor = _this$state.visitor,
          errors = _this$state.errors;
      errors[param] = visitor[param].length === 0;
      var errorFound = errors.firstName || errors.lastName || errors.address1 || errors.city || errors.zip;
      this.setState({
        errors: errors
      });
      return !errorFound;
    }
  }, {
    key: "updateVisitor",
    value: function updateVisitor(varname, value) {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object') {
        value = value.target.value;
      }

      var visitor = this.state.visitor;
      visitor[varname] = value;
      this.setState({
        visitor: visitor
      });
    }
  }, {
    key: "updateRegistration",
    value: function updateRegistration(varname, value) {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object') {
        value = value.target.value;
      }

      var registration = this.state.registration;
      registration[varname] = value;
      this.setState({
        registration: registration
      });
    }
  }, {
    key: "saveContact",
    value: function saveContact() {
      var _this11 = this;

      $.ajax({
        url: './conference/Visitor/Visitor/' + this.state.visitor.id,
        data: this.state.visitor,
        dataType: 'json',
        type: 'put',
        success: function success() {
          var stage;

          if (_this11.questionsComplete()) {
            stage = _this11.lastStage === 'review' ? 'review' : 'tickets';
          } else {
            stage = 'conferenceQuestion';
          }

          _this11.setState({
            stage: stage
          });
        },
        error: function error() {
          _this11.setState({
            errorMessage: true
          });
        }
      });
      this.setState({
        stage: 'review'
      });
    }
  }, {
    key: "forward",
    value: function forward() {
      switch (this.state.stage) {
        case 'contact':
          if (this.visitorDemographicsComplete()) {
            this.saveContact();
          }

          break;

        case 'conferenceQuestion':
          this.lastStage = 'tickets';
          this.setState({
            stage: 'tickets'
          });
          break;

        case 'tickets':
          if (parseInt(this.state.registration.guestCount) > 0) {
            if (this.state.guests.length === 0) {
              this.setState({
                guests: this.buildGuests(this.state.registration.guestCount)
              });
            }

            this.lastStage = 'guest';
          } else {
            this.lastStage = 'review';
          }

          this.setState({
            stage: this.lastStage
          });
          break;
      }
    }
  }, {
    key: "saveRegistration",
    value: function saveRegistration() {
      var _this12 = this;

      var _this$state2 = this.state,
          registration = _this$state2.registration,
          visitor = _this$state2.visitor;
      var data = {};
      data.visitorId = visitor.id;
      data.sessionId = registration.sessionId;
      data.guestCount = registration.guestCount;
      data.mealTickets = registration.guestCount;
      data.veggieMeals = registration.guestCount;
      data.studentId = registration.studentId;
      var type = 'post';
      var url = './conference/Visitor/Registration';

      if (this.state.registration.id !== 0) {
        type = 'put';
        url = url + '/' + this.state.registration.id;
      }

      $.ajax({
        url: url,
        data: this.state.registration,
        dataType: 'json',
        type: type,
        success: function success() {
          _this12.forward();
        },
        error: function error() {
          _this12.setState({
            errorMessage: true
          });
        }
      });
    }
  }, {
    key: "totalCost",
    value: function totalCost() {
      var _this$state3 = this.state,
          registration = _this$state3.registration,
          student = _this$state3.student;
      var session = this.props.session;
      var registerCost = session.registerCost,
          guestCost = session.guestCost,
          mealCost = session.mealCost,
          mealService = session.mealService;
      var cost = Number(registerCost - student.discountAmount);
      var totalGuestCost = Number(guestCost) * Number(registration.guestCount);
      cost = cost + totalGuestCost;

      if (mealService == 1) {
        var totalMealCost = Number(mealCost) * Number(registration.mealTickets);
        cost = cost + totalMealCost;
      }

      return cost.toFixed(2);
    }
  }, {
    key: "updateInfo",
    value: function updateInfo(key, value) {
      var visitorInfo = this.state.visitorInfo;
      visitorInfo[key].answer = value;
      this.setState({
        visitorInfo: visitorInfo
      });
    }
  }, {
    key: "previousSummary",
    value: function previousSummary() {
      var _this13 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "alert alert-secondary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "lead"
      }, "Session cost: $", this.totalCost(), ".00"), "-", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "pointer",
        onClick: function onClick() {
          return _this13.setState({
            stage: 'tickets'
          });
        }
      }, "Edit"));
    }
  }, {
    key: "updateGuest",
    value: function updateGuest(count, property, value) {
      var guests = this.state.guests;
      var guest = guests[count];
      guest[property] = value;
      guest.complete = guest.firstName.length > 0 && guest.lastName.length > 0 && guest.email.length > 0 && guest.email.match(/^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) !== null;
      this.setState({
        guests: guests
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this14 = this;

      var content;
      var session = this.props.session;
      var student = this.state.student;

      if (this.state.errorMessage) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "alert alert-danger"
        }, "Sorry, but an error prevented your registration from completing. Please contact us for help.");
      }

      switch (this.state.stage) {
        case 'start':
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Loading, please wait");
          break;

        case 'contact':
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Visitor__WEBPACK_IMPORTED_MODULE_11__["default"], {
            registration: this.state.registration,
            save: this.forward,
            visitor: this.state.visitor,
            session: session,
            errors: this.state.errors,
            check: this.checkContact,
            update: this.updateVisitor
          });
          break;

        case 'tickets':
          if (this.state.registration.completed === 1) {
            content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Already complete");
          } else {
            content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tickets__WEBPACK_IMPORTED_MODULE_10__["default"], {
              back: function back() {
                return _this14.setState({
                  stage: 'conferenceQuestion'
                });
              },
              questions: this.questions,
              save: this.saveRegistration,
              totalCost: this.totalCost,
              registration: this.state.registration,
              session: session,
              student: student,
              update: this.updateRegistration
            });
          }

          break;

        case 'conferenceQuestion':
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ConferenceQuestion__WEBPACK_IMPORTED_MODULE_14__["default"], {
            visitorInfo: this.state.visitorInfo,
            checkInfo: this.checkInfo,
            update: this.updateInfo,
            save: this.forward
          });
          break;

        case 'guest':
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Guest__WEBPACK_IMPORTED_MODULE_13__["default"], {
            guests: this.state.guests,
            update: this.updateGuest,
            registration: this.state.registration,
            save: this.saveGuests
          });
          break;

        case 'review':
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Review__WEBPACK_IMPORTED_MODULE_15__["default"], {
            visitor: this.state.visitor,
            registration: this.state.registration,
            session: session,
            goBack: function goBack(stage) {
              return _this14.setState({
                stage: stage
              });
            },
            totalCost: this.totalCost
          });
          break;

        case 'complete':
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Complete__WEBPACK_IMPORTED_MODULE_12__["default"], {
            registration: this.state.registration,
            signupAllowed: this.state.signupAllowed
          });
      }

      var sessionChange = null;

      if (this.props.onsite === false && this.state.registration.id > 0 && (this.state.stage === 'review' || this.state.stage === 'tickets')) {
        sessionChange = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Shared_SessionChange__WEBPACK_IMPORTED_MODULE_16__["default"], {
          registrationId: this.state.registration.id,
          completed: this.state.registration.completed,
          changeSession: this.changeSession
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", null));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, sessionChange, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mb-3"
      }, content));
    }
  }]);

  return SessionSignup;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);


SessionSignup.propTypes = {
  session: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  studentId: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  visitorId: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  onsite: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  registrationId: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number
};
react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SessionSignup, {
  session: session,
  studentId: studentId,
  onsite: onsite,
  registrationId: registrationId
}), document.getElementById('SessionSignup'));

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

/***/ "./javascript/Shared/style.css":
/*!*************************************!*\
  !*** ./javascript/Shared/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./style.css */ "./node_modules/css-loader/index.js!./javascript/Shared/style.css");

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

/***/ "./node_modules/css-loader/index.js!./javascript/Shared/style.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader!./javascript/Shared/style.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th.option {\n  width: 5%;\n}\n\nth.title {\n  width: 30%;\n}\n\nlabel {\n  display: block;\n  font-weight: bold;\n}\n\n.pointer:hover {\n  cursor: pointer;\n}\n\nth.action {\n  width: 10%;\n}", ""]);

// exports


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TZXNzaW9uU2lnbnVwL0NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvU2Vzc2lvblNpZ251cC9Db25mZXJlbmNlUXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TZXNzaW9uU2lnbnVwL0d1ZXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1Nlc3Npb25TaWdudXAvR3Vlc3RGb3JtLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvU2Vzc2lvblNpZ251cC9RdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1Nlc3Npb25TaWdudXAvUmV2aWV3LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvU2Vzc2lvblNpZ251cC9UaWNrZXRzLmpzeCIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1Nlc3Npb25TaWdudXAvVmlzaXRvci5qc3giLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TZXNzaW9uU2lnbnVwL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1NoYXJlZC9TZXNzaW9uQ2hhbmdlLmpzeCIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1NoYXJlZC9zdHlsZS5jc3M/MGEyNSIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1NoYXJlZC9zdHlsZS5jc3MiXSwibmFtZXMiOlsiQ29tcGxldGUiLCJyZWdpc3RyYXRpb24iLCJzaWdudXBBbGxvd2VkIiwic3VwcGxlbWVudEJ1dHRvbiIsImlkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiYm9vbCIsInZpc2l0b3JJbmZvIiwidXBkYXRlIiwiY2hlY2tJbmZvIiwicXVlc3Rpb25zIiwibWFwIiwiaW5mbyIsImtleSIsImFycmF5IiwiZnVuYyIsInNhdmUiLCJHdWVzdCIsInByb3BzIiwiYmluZCIsImlzQ29tcGxldGUiLCJhbGxDb21wbGV0ZSIsImd1ZXN0cyIsImZvckVhY2giLCJlbGVtZW50IiwiY29tcGxldGUiLCJjb3VudCIsInByb3BlcnR5IiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsImd1ZXN0Q291bnQiLCJwYXJzZUludCIsImd1ZXN0TGlzdCIsImkiLCJwdXNoIiwiY29tcGxldGVTdGF0dXMiLCJDb21wb25lbnQiLCJlcnJvciIsIkd1ZXN0Rm9ybSIsInN0YXRlIiwiZmlyc3QiLCJsYXN0IiwiZW1haWwiLCJiYWRFbWFpbCIsImNoZWNrIiwiZXJyb3JOYW1lIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJlcnJvckZvdW5kIiwibWF0Y2giLCJzZXRTdGF0ZSIsImd1ZXN0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJudW1iZXIiLCJRdWVzdGlvbiIsImlkeCIsImVycm9yUGxhY2Vob2xkZXIiLCJ1bmRlZmluZWQiLCJ0eXBlIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJyZXF1aXJlZCIsIlJldmlldyIsInRvdGFsQ29zdCIsInZpc2l0b3IiLCJzZXNzaW9uIiwiZ29CYWNrIiwiYWRkcmVzcyIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJsZW5ndGgiLCJleHRyYU1lYWxzUm93IiwibWVhbFNlcnZpY2UiLCJtZWFsQ29zdCIsIm1lYWxJbmNsdWRlZCIsIm1lYWxUaWNrZXRzIiwidmVnTWVhbHNSb3ciLCJ2ZWdnaWVNZWFscyIsInBob25lIiwiY2l0eSIsInppcCIsIlRpY2tldHMiLCJhdHRlbmRhbmNlQ2FwIiwib3B0aW9ucyIsInYiLCJtZWFsTGFiZWwiLCJtZWFsSW5jbHVkZWRNZXNzYWdlIiwidmVnZ2llTWVzc2FnZSIsInZlZ2dpZU9wdGlvbnMiLCJsaW1pdCIsIk51bWJlciIsInZhbCIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwic3R1ZGVudCIsImRpc2NvdW50IiwiZmluYWxQcmljZSIsInJlZ2lzdGVyQ29zdCIsImRpc2NvdW50QW1vdW50IiwicmVnaXN0cmF0aW9uQ29zdCIsImd1ZXN0Q29zdCIsImd1ZXN0VG90YWwiLCJmaXhlZERlY2ltYWwiLCJtZWFsVG90YWwiLCJndWVzdE9wdGlvbnMiLCJtZWFscyIsIm1lYWxPcHRpb25zIiwidmVnZ2llIiwiYmFja0J1dHRvbiIsImJhY2siLCJwcmljaW5nIiwiZGVmYXVsdFByb3BzIiwiVmlzaXRvciIsImVycm9ycyIsImVycm9yTWVzc2FnZSIsInVwZGF0ZVBob25lIiwicmVwbGFjZSIsIlNlc3Npb25TaWdudXAiLCJsYXN0U3RhZ2UiLCJjb25mZXJlbmNlSWQiLCJ2aXNpdG9ySWQiLCJzZXNzaW9uSWQiLCJzdHVkZW50SWQiLCJjb21wbGV0ZWQiLCJuZXdSZWdpc3RyYXRpb24iLCJzdGFnZSIsInByb2NlZWQiLCJ1cGRhdGVWaXNpdG9yIiwidXBkYXRlUmVnaXN0cmF0aW9uIiwidXBkYXRlSW5mbyIsImZvcndhcmQiLCJjaGVja0NvbnRhY3QiLCJzYXZlQ29udGFjdCIsInNhdmVSZWdpc3RyYXRpb24iLCJ1cGRhdGVHdWVzdCIsInNhdmVHdWVzdHMiLCJjaGFuZ2VTZXNzaW9uIiwibG9hZFZpc2l0b3IiLCJ0aGVuIiwibG9hZFJlZ2lzdHJhdGlvbiIsImxvYWRTdHVkZW50IiwibG9hZFZpc2l0b3JJbmZvIiwibG9hZEd1ZXN0cyIsImRldGVybWluZVN0YWdlIiwicmVnaXN0cmF0aW9uQ29tcGxldGUiLCJ2aXNpdG9yRGVtb2dyYXBoaWNzQ29tcGxldGUiLCJxdWVzdGlvbnNDb21wbGV0ZSIsImd1ZXN0c0NvbXBsZXRlIiwibGFzdFN0YXRlIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwicmVnaXN0cmF0aW9uSWQiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJsaXN0aW5nIiwiZ3Vlc3RMZW5ndGgiLCJndWVzdFBhZCIsImJ1aWxkR3Vlc3RzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2F2ZUluZm8iLCJhbGVydCIsInBhcmFtIiwidmFybmFtZSIsImNvc3QiLCJ0b3RhbEd1ZXN0Q29zdCIsInRvdGFsTWVhbENvc3QiLCJjb250ZW50Iiwic2Vzc2lvbkNoYW5nZSIsIm9uc2l0ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlNlc3Npb25DaGFuZ2UiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJzZXNzaW9uTGlzdCIsInNldFNlc3Npb25MaXN0IiwiY2hhbmdlU2Vzc2lvbklkIiwic2V0Q2hhbmdlU2Vzc2lvbiIsInVzZUVmZmVjdCIsInNlc3Npb25TZWxlY3QiLCJwcmljZVdhcm5pbmciLCJzZXNzaW9uT3B0aW9ucyIsInRpdGxlIiwiZXZlbnREYXRlRm9ybWF0IiwiZGF5cyIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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LENBQUMsZ0dBQStDO0FBQ2xGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxjQUFjLGNBQWMsR0FBRyxjQUFjLGVBQWUsR0FBRyxXQUFXLG1CQUFtQixzQkFBc0IsR0FBRyxvQkFBb0Isb0JBQW9CLEdBQUcsZUFBZSxlQUFlLEdBQUc7O0FBRXpOIiwiZmlsZSI6IlNlc3Npb25TaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiU2Vzc2lvblNpZ251cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vamF2YXNjcmlwdC9TZXNzaW9uU2lnbnVwL2luZGV4LmpzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IENvbXBsZXRlID0gKHtyZWdpc3RyYXRpb24sIHNpZ251cEFsbG93ZWR9KSA9PiB7XG4gIGNvbnN0IHN1cHBsZW1lbnRCdXR0b24gPSAoKSA9PiB7XG4gICAgaWYgKHNpZ251cEFsbG93ZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICZuYnNwOyAtIG9yIC0mbmJzcDtcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgIGhyZWY9e2Bjb25mZXJlbmNlL1Zpc2l0b3IvU3VwcGxlbWVudC8/cmVnaXN0cmF0aW9uSWQ9JHtyZWdpc3RyYXRpb24uaWR9YH0+XG4gICAgICAgICAgICBBZGQgYW5vdGhlciBndWVzdCBvciBtZWFsXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5Zb3VyIHJlZ2lzdHJhdGlvbiBpcyBjb21wbGV0ZSE8L3A+XG4gICAgICA8cD5cbiAgICAgICAgWW91IG1heSZuYnNwO1xuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcbiAgICAgICAgICBocmVmPXtgY29uZmVyZW5jZS9WaXNpdG9yL1JlZ2lzdHJhdGlvbi8ke3JlZ2lzdHJhdGlvbi5pZH1gfT5cbiAgICAgICAgICBSZXZpZXcgeW91ciByZWdpc3RyYXRpb25cbiAgICAgICAgPC9hPlxuICAgICAgICB7c3VwcGxlbWVudEJ1dHRvbigpfVxuICAgICAgPC9wPlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Db21wbGV0ZS5wcm9wVHlwZXMgPSB7XG4gIHJlZ2lzdHJhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2lnbnVwQWxsb3dlZDogUHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcGxldGVcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vUXVlc3Rpb24nXG5cbmNvbnN0IHZpc2l0b3JJbmZvID0gKHt2aXNpdG9ySW5mbywgdXBkYXRlLCBjaGVja0luZm99KSA9PiB7XG4gIGxldCBxdWVzdGlvbnMgPSB2aXNpdG9ySW5mby5tYXAoKGluZm8sIGtleSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17a2V5fT5cbiAgICAgICAgPFF1ZXN0aW9uIGlkeD17a2V5fSBpbmZvPXtpbmZvfSB1cGRhdGU9e3VwZGF0ZX0gLz5cbiAgICAgICAgPGhyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPlBsZWFzZSBhbnN3ZXIgdGhlIGZvbGxvd2luZyBxdWVzdGlvbnMuLi48L2gzPlxuICAgICAgPGRpdj57cXVlc3Rpb25zfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2NoZWNrSW5mb30+XG4gICAgICAgICAgU2F2ZSBhbmQgY29udGludWVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG52aXNpdG9ySW5mby5wcm9wVHlwZXMgPSB7XG4gIHZpc2l0b3JJbmZvOiBQcm9wVHlwZXMuYXJyYXksXG4gIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBjaGVja0luZm86IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IHZpc2l0b3JJbmZvXG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgR3Vlc3RGb3JtIGZyb20gJy4vR3Vlc3RGb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWVzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZSgpKSB7XG4gICAgICB0aGlzLnByb3BzLnNhdmUoKVxuICAgIH1cbiAgfVxuXG4gIGlzQ29tcGxldGUoKSB7XG4gICAgbGV0IGFsbENvbXBsZXRlID0gdHJ1ZVxuICAgIHRoaXMucHJvcHMuZ3Vlc3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5jb21wbGV0ZSA9PSBmYWxzZSkge1xuICAgICAgICBhbGxDb21wbGV0ZSA9IGZhbHNlXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYWxsQ29tcGxldGVcbiAgfVxuXG4gIHVwZGF0ZShjb3VudCwgcHJvcGVydHksIGV2ZW50KSB7XG4gICAgY29uc3Qge3ZhbHVlfSA9IGV2ZW50LnRhcmdldFxuICAgIHRoaXMucHJvcHMudXBkYXRlKGNvdW50LCBwcm9wZXJ0eSwgdmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZ3Vlc3RDb3VudCA9IHBhcnNlSW50KHRoaXMucHJvcHMucmVnaXN0cmF0aW9uLmd1ZXN0Q291bnQpXG4gICAgbGV0IGd1ZXN0TGlzdCA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBndWVzdENvdW50OyBpKyspIHtcbiAgICAgIGd1ZXN0TGlzdC5wdXNoKFxuICAgICAgICA8R3Vlc3RGb3JtXG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIGNvdW50PXtpfVxuICAgICAgICAgIGNvbXBsZXRlU3RhdHVzPXt0aGlzLmNvbXBsZXRlU3RhdHVzfVxuICAgICAgICAgIGd1ZXN0PXt0aGlzLnByb3BzLmd1ZXN0c1tpXX1cbiAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGg0PlBsZWFzZSBlbnRlciBndWVzdCBpbmZvcm1hdGlvbiBiZWxvdy48L2g0PlxuICAgICAgICB7Z3Vlc3RMaXN0fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLmlzQ29tcGxldGUoKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICBTYXZlIGd1ZXN0cyBhbmQgY29udGludWVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuR3Vlc3QucHJvcFR5cGVzID0ge1xuICByZWdpc3RyYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGd1ZXN0czogUHJvcFR5cGVzLmFycmF5LFxuICBzYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgZXJyb3I6IFByb3BUeXBlcy5mdW5jXG59XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1ZXN0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yOiB7Zmlyc3Q6IGZhbHNlLCBsYXN0OiBmYWxzZSwgZW1haWw6IGZhbHNlLCBiYWRFbWFpbDogZmFsc2V9XG4gICAgfVxuICAgIHRoaXMuY2hlY2sgPSB0aGlzLmNoZWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIGNoZWNrKGVycm9yTmFtZSwgZSkge1xuICAgIGNvbnN0IHtlcnJvcn0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qge3ZhbHVlfSA9IGUuY3VycmVudFRhcmdldFxuICAgIGxldCBlcnJvckZvdW5kID0gdmFsdWUgPT0gJydcbiAgICBlcnJvcltlcnJvck5hbWVdID0gZXJyb3JGb3VuZFxuICAgIGlmIChlcnJvck5hbWUgPT09ICdlbWFpbCcgJiYgIWVycm9yLmVtYWlsKSB7XG4gICAgICBlcnJvci5iYWRFbWFpbCA9XG4gICAgICAgIHZhbHVlLm1hdGNoKC9eW1xcdy4lKy1dK0BbYS16MC05Li1dK1xcLlthLXpdezIsNH0kLykgPT09IG51bGxcbiAgICAgIGlmIChlcnJvci5iYWRFbWFpbCkge1xuICAgICAgICBlcnJvckZvdW5kID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtlcnJvcn0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2d1ZXN0LCBjb3VudCwgdXBkYXRlfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlYWRcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+R3Vlc3QgI3tjb3VudCArIDF9PC9zdHJvbmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2UgPT4gdGhpcy5jaGVjaygnZmlyc3QnLCBlKX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGUoY291bnQsICdmaXJzdE5hbWUnLCBlKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Z3Vlc3QuZmlyc3ROYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvci5maXJzdCA/IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj5QbGVhc2UgZmlsbCB0aGlzIGluPC9zcGFuPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVcIj5MYXN0IG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIG9uQmx1cj17ZSA9PiB0aGlzLmNoZWNrKCdsYXN0JywgZSl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlKGNvdW50LCAnbGFzdE5hbWUnLCBlKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Z3Vlc3QubGFzdE5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yLmxhc3QgPyAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+UGxlYXNlIGZpbGwgdGhpcyBpbjwvc3Bhbj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG9uQmx1cj17ZSA9PiB0aGlzLmNoZWNrKCdlbWFpbCcsIGUpfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZShjb3VudCwgJ2VtYWlsJywgZSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2d1ZXN0LmVtYWlsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvci5lbWFpbCA/IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj5QbGVhc2UgZmlsbCB0aGlzIGluPC9zcGFuPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IuYmFkRW1haWwgPyAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICBDaGVjayB5b3VyIGVtYWlsIGFkZHJlc3NcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkd1ZXN0Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIGd1ZXN0OiBQcm9wVHlwZXMub2JqZWN0LFxuICBjb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgdXBkYXRlOiBQcm9wVHlwZXMuZnVuY1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQmlnQ2hlY2tib3ggZnJvbSAnQGVzc2FwcHN0YXRlL2Nhbm9weS1yZWFjdC1iaWdjaGVja2JveCdcblxuY29uc3QgUXVlc3Rpb24gPSAoe2lkeCwgaW5mbywgdXBkYXRlfSkgPT4ge1xuICBjb25zdCBlcnJvclBsYWNlaG9sZGVyID0gaW5mbyA9PiB7XG4gICAgaWYgKGluZm8uZXJyb3IgIT09IHVuZGVmaW5lZCAmJiBpbmZvLmVycm9yID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gJ1BsZWFzZSBhbnN3ZXIgdGhpcyBxdWVzdGlvbiBiZWZvcmUgY29udGludWluZy4nXG4gICAgfVxuICB9XG5cbiAgaWYgKGluZm8udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPEJpZ0NoZWNrYm94XG4gICAgICAgICAgbGFiZWw9e2luZm8ucXVlc3Rpb259XG4gICAgICAgICAgY2hlY2tlZD17XG4gICAgICAgICAgICBpbmZvLmFuc3dlciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAoaW5mby5hbnN3ZXIgPT09IDEgfHwgaW5mby5hbnN3ZXIgPT09IHRydWUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGhhbmRsZT17dXBkYXRlLmJpbmQobnVsbCwgaWR4KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSBlbHNlIGlmIChpbmZvLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImQtaW5saW5lXCI+e2luZm8ucXVlc3Rpb259PC9sYWJlbD5cbiAgICAgICAge2luZm8ucmVxdWlyZWQgPT09IDEgPyAoXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFzdGVyaXNrIHRleHQtZGFuZ2VyIGZhLXNtXCIgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPXtgcXVlc3Rpb24gJHtpZHh9YH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17ZXJyb3JQbGFjZWhvbGRlcihpbmZvKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHJlcXVpcmVkPXtpbmZvLnJlcXVpcmVkID09PSAxfVxuICAgICAgICAgIHZhbHVlPXtpbmZvLmFuc3dlcn1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGUoaWR4LCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuUXVlc3Rpb24ucHJvcFR5cGVzID0ge1xuICBpZHg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGluZm86IFByb3BUeXBlcy5vYmplY3QsXG4gIHJlZ2lzdHJhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgdXBkYXRlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvblxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IFJldmlldyA9ICh7cmVnaXN0cmF0aW9uLCB0b3RhbENvc3QsIHZpc2l0b3IsIHNlc3Npb24sIGdvQmFja30pID0+IHtcbiAgbGV0IGFkZHJlc3MgPSA8c3Bhbj57dmlzaXRvci5hZGRyZXNzMX08L3NwYW4+XG4gIGlmICh2aXNpdG9yLmFkZHJlc3MyLmxlbmd0aCA+IDApIHtcbiAgICBhZGRyZXNzID0gKFxuICAgICAgPHNwYW4+XG4gICAgICAgIHt2aXNpdG9yLmFkZHJlc3MxfVxuICAgICAgICA8YnIgLz5cbiAgICAgICAge3Zpc2l0b3IuYWRkcmVzczJ9XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgZXh0cmFNZWFsc1JvdyA9ICgpID0+IHtcbiAgICBpZiAoc2Vzc2lvbi5tZWFsU2VydmljZSA9PT0gMCB8fCBzZXNzaW9uLm1lYWxDb3N0ID09IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICBOdW1iZXIgb2Yge3Nlc3Npb24ubWVhbEluY2x1ZGVkID09PSAxID8gPHNwYW4+ZXh0cmE8L3NwYW4+IDogbnVsbH17JyAnfVxuICAgICAgICAgIG1lYWwgdGlja2V0czpcbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPntyZWdpc3RyYXRpb24ubWVhbFRpY2tldHN9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgdmVnTWVhbHNSb3cgPSAoKSA9PiB7XG4gICAgaWYgKHNlc3Npb24ubWVhbFNlcnZpY2UgPT09IDAgfHwgc2Vzc2lvbi5tZWFsQ29zdCA9PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+VmVnZXRhcmlhbiBtZWFsczo8L3RkPlxuICAgICAgICA8dGQ+e3JlZ2lzdHJhdGlvbi52ZWdnaWVNZWFsc308L3RkPlxuICAgICAgPC90cj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgTXkgY29udGFjdCBpbmZvcm1hdGlvbnsnICd9XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc21cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtnb0JhY2suYmluZChudWxsLCAnY29udGFjdCcpfT5cbiAgICAgICAgICAgICAgQ2hhbmdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAge3Zpc2l0b3IuZmlyc3ROYW1lfSYjMzI7e3Zpc2l0b3IubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5Vc2VybmFtZS9FbWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgPHRkPnt2aXNpdG9yLmVtYWlsfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+UGhvbmU8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZD57dmlzaXRvci5waG9uZX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPkFkZHJlc3M8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIHthZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICB7dmlzaXRvci5jaXR5fSwge3Zpc2l0b3Iuc3RhdGV9IHt2aXNpdG9yLnppcH1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgIDxoND5cbiAgICAgICAgICAgIE15IHJlZ2lzdHJhdGlvbnsnICd9XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc21cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtnb0JhY2suYmluZChudWxsLCAndGlja2V0cycpfT5cbiAgICAgICAgICAgICAgQ2hhbmdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+TnVtYmVyIG9mIGd1ZXN0czo8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cmVnaXN0cmF0aW9uLmd1ZXN0Q291bnR9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAge2V4dHJhTWVhbHNSb3coKX1cbiAgICAgICAgICAgICAge3ZlZ01lYWxzUm93KCl9XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZWFkXCI+VG90YWwgc2Vzc2lvbiBjb3N0Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxlYWRcIj4ke3RvdGFsQ29zdCgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiXG4gICAgICAgIGhyZWY9e2AuL2NvbmZlcmVuY2UvVmlzaXRvci9SZWdpc3RyYXRpb24vJHtyZWdpc3RyYXRpb24uaWR9L2NvbXBsZXRlYH0+XG4gICAgICAgIENvbXBsZXRlIHJlZ2lzdHJhdGlvblxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApXG59XG5cblJldmlldy5wcm9wVHlwZXMgPSB7XG4gIHJlZ2lzdHJhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgdmlzaXRvcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2Vzc2lvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgdG90YWxDb3N0OiBQcm9wVHlwZXMuZnVuYyxcbiAgZ29CYWNrOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2V0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHt9XG4gIH1cblxuICBndWVzdE9wdGlvbnMoKSB7XG4gICAgY29uc3Qge2F0dGVuZGFuY2VDYXB9ID0gdGhpcy5wcm9wcy5zZXNzaW9uXG4gICAgY29uc3Qge3JlZ2lzdHJhdGlvbiwgdXBkYXRlfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoYXR0ZW5kYW5jZUNhcCA9PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBsZXQgb3B0aW9ucyA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRlbmRhbmNlQ2FwOyBpKyspIHtcbiAgICAgIG9wdGlvbnMucHVzaCg8b3B0aW9uIGtleT17aX0+e2l9PC9vcHRpb24+KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSG93IG1hbnkgYWRkaXRpb25hbCBmYW1pbHkgbWVtYmVycyBkbyB5b3Ugd2FudCB0byByZWdpc3Rlcj9cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGVtIGNsYXNzTmFtZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgIEd1ZXN0cyB1bmRlciAxOCB5ZWFycyBvZiBhZ2UgbWF5IHBhcnRpY2lwYXRlIHdpdGhvdXQgYmVpbmdcbiAgICAgICAgICAgICAgcmVnaXN0ZXJlZC5cbiAgICAgICAgICAgIDwvZW0+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tM1wiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2YWx1ZT17cmVnaXN0cmF0aW9uLmd1ZXN0Q291bnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlLmJpbmQobnVsbCwgJ2d1ZXN0Q291bnQnKX0+XG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAodiA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB2XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBtZWFsT3B0aW9ucygpIHtcbiAgICBjb25zdCB7bWVhbEluY2x1ZGVkLCBtZWFsU2VydmljZSwgbWVhbENvc3R9ID0gdGhpcy5wcm9wcy5zZXNzaW9uXG4gICAgY29uc3Qge3JlZ2lzdHJhdGlvbiwgdXBkYXRlfSA9IHRoaXMucHJvcHNcbiAgICBpZiAobWVhbENvc3QgPT0gMCB8fCBtZWFsU2VydmljZSA9PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgbWVhbExhYmVsID0gbWVhbEluY2x1ZGVkID09IDEgPyAnIGV4dHJhICcgOiAnICdcblxuICAgIGNvbnN0IG1lYWxJbmNsdWRlZE1lc3NhZ2UgPVxuICAgICAgbWVhbEluY2x1ZGVkID09IDEgPyAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtYWxsXCI+XG4gICAgICAgICAgRWFjaCBwYXJlbnQgYW5kIGd1ZXN0IHJlY2VpdmVzIGEgbWVhbCBhcyBwYXJ0IG9mIHRoZWlyIHJlZ2lzdHJhdGlvbi5cbiAgICAgICAgICBFeHRyYSBtZWFscyB0aWNrZXRzIGFyZSBmb3IgdGhvc2Ugbm90IHJlZ2lzdGVyZWQgb3IgcGFydGljaXBhdGluZyBpblxuICAgICAgICAgIG9yaWVudGF0aW9uLlxuICAgICAgICA8L3NwYW4+XG4gICAgICApIDogKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbWFsbFwiPlxuICAgICAgICAgIE1lYWxzIGFyZSBub3QgaW5jbHVkZWQgYXMgcGFydCBvZiByZWdpc3RyYXRpb24uIFlvdSBtYXkgcHJlcGF5IG5vdyBvclxuICAgICAgICAgIHdhaXQgdW50aWwgdGhlIGRheSBvZiB0aGUgZXZlbnQuXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIClcblxuICAgIGNvbnN0IHZlZ2dpZU1lc3NhZ2UgPVxuICAgICAgbWVhbEluY2x1ZGVkID09IDEgPyAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtYWxsXCI+SW5jbHVkZSB5b3VyIHJlZ2lzdHJhdGlvbiBtZWFsLjwvc3Bhbj5cbiAgICAgICkgOiBudWxsXG5cbiAgICBsZXQgdmVnZ2llT3B0aW9ucyA9IFtdXG4gICAgY29uc3QgbGltaXQgPSBOdW1iZXIocmVnaXN0cmF0aW9uLm1lYWxUaWNrZXRzKSArIDFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsaW1pdDsgaSsrKSB7XG4gICAgICB2ZWdnaWVPcHRpb25zLnB1c2goPG9wdGlvbiBrZXk9e2l9PntpfTwvb3B0aW9uPilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0wXCI+XG4gICAgICAgICAgICAgIEhvdyBtYW55e21lYWxMYWJlbH1tZWFsIHRpY2tldHMgZG8geW91IG5lZWQ/XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj57bWVhbEluY2x1ZGVkTWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtyZWdpc3RyYXRpb24ubWVhbFRpY2tldHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGUuYmluZChudWxsLCAnbWVhbFRpY2tldHMnKX0+XG4gICAgICAgICAgICAgIDxvcHRpb24+MDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uPjE8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbj4yPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24+Mzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uPjQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbj41PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24+Njwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uPjc8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbj44PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24+OTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uPjEwPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgICAgICBIb3cgbWFueSB2ZWdldGFyaWFuIG1lYWxzIGRvIHlvdSBuZWVkP1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIHt2ZWdnaWVNZXNzYWdlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTNcIj5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3JlZ2lzdHJhdGlvbi52ZWdnaWVNZWFsc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZS5iaW5kKG51bGwsICd2ZWdnaWVNZWFscycpfT5cbiAgICAgICAgICAgICAge3ZlZ2dpZU9wdGlvbnN9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICB2ZWdnaWVPcHRpb25zKCkge1xuICAgIHJldHVybiA8ZGl2IC8+XG4gIH1cblxuICBmaXhlZERlY2ltYWwodmFsKSB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHZhbCkudG9GaXhlZCgyKVxuICB9XG5cbiAgcHJpY2luZygpIHtcbiAgICBjb25zdCB7c2Vzc2lvbiwgc3R1ZGVudCwgcmVnaXN0cmF0aW9ufSA9IHRoaXMucHJvcHNcbiAgICBsZXQgZGlzY291bnRcbiAgICBsZXQgZmluYWxQcmljZSA9IHNlc3Npb24ucmVnaXN0ZXJDb3N0XG4gICAgaWYgKHN0dWRlbnQuZGlzY291bnRBbW91bnQpIHtcbiAgICAgIGRpc2NvdW50ID0gPHNwYW4+IC0gJHtzdHVkZW50LmRpc2NvdW50QW1vdW50LnRvRml4ZWQoMil9IGRpc2NvdW50PC9zcGFuPlxuICAgICAgZmluYWxQcmljZSA9XG4gICAgICAgIHBhcnNlRmxvYXQoc2Vzc2lvbi5yZWdpc3RlckNvc3QpIC0gcGFyc2VGbG9hdChzdHVkZW50LmRpc2NvdW50QW1vdW50KVxuICAgIH1cbiAgICBsZXQgcmVnaXN0cmF0aW9uQ29zdCA9IChcbiAgICAgIDx0cj5cbiAgICAgICAgPHRoPlxuICAgICAgICAgIDxzcGFuPlJlZ2lzdHJhdGlvbiBjb3N0Ojwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgUmVnaXN0cmF0aW9uIGNvc3QgY292ZXJzIG9uZSBwYXJlbnQmYXBvcztzIGF0dGVuZGFuY2VcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvdGg+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAke3Nlc3Npb24ucmVnaXN0ZXJDb3N0LnRvRml4ZWQoMil9XG4gICAgICAgICAge2Rpc2NvdW50fVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+JHtmaW5hbFByaWNlLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKVxuXG4gICAgbGV0IGd1ZXN0Q29zdFxuICAgIGlmIChzZXNzaW9uLmd1ZXN0Q29zdCAhPT0gMCAmJiByZWdpc3RyYXRpb24uZ3Vlc3RDb3VudCA+IDApIHtcbiAgICAgIGNvbnN0IGd1ZXN0VG90YWwgPSB0aGlzLmZpeGVkRGVjaW1hbChcbiAgICAgICAgcmVnaXN0cmF0aW9uLmd1ZXN0Q291bnQgKiBzZXNzaW9uLmd1ZXN0Q29zdFxuICAgICAgKVxuICAgICAgZ3Vlc3RDb3N0ID0gKFxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPkd1ZXN0IGNvc3Q6PC90aD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAke3Nlc3Npb24uZ3Vlc3RDb3N0LnRvRml4ZWQoMil9IHgge3JlZ2lzdHJhdGlvbi5ndWVzdENvdW50fVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkPiR7Z3Vlc3RUb3RhbH08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgKVxuICAgIH1cblxuICAgIGxldCBtZWFsQ29zdFxuICAgIGlmIChzZXNzaW9uLm1lYWxDb3N0ICE9PSAwICYmIHJlZ2lzdHJhdGlvbi5tZWFsVGlja2V0cyA+IDApIHtcbiAgICAgIGNvbnN0IG1lYWxUb3RhbCA9IHRoaXMuZml4ZWREZWNpbWFsKFxuICAgICAgICByZWdpc3RyYXRpb24ubWVhbFRpY2tldHMgKiBzZXNzaW9uLm1lYWxDb3N0XG4gICAgICApXG4gICAgICBtZWFsQ29zdCA9IChcbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5NZWFsIGNvc3Q6PC90aD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAke3Nlc3Npb24ubWVhbENvc3QudG9GaXhlZCgyKX0geCB7cmVnaXN0cmF0aW9uLm1lYWxUaWNrZXRzfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkPiR7bWVhbFRvdGFsfTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7cmVnaXN0cmF0aW9uQ29zdH1cbiAgICAgICAgICB7Z3Vlc3RDb3N0fVxuICAgICAgICAgIHttZWFsQ29zdH1cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGVhZFwiPlRvdGFsIHNlc3Npb24gY29zdDo8L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZWFkXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmZpeGVkRGVjaW1hbCh0aGlzLnByb3BzLnRvdGFsQ29zdCgpKX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZ3Vlc3RzID0gdGhpcy5ndWVzdE9wdGlvbnMoKVxuICAgIGNvbnN0IG1lYWxzID0gdGhpcy5tZWFsT3B0aW9ucygpXG4gICAgY29uc3QgdmVnZ2llID0gdGhpcy52ZWdnaWVPcHRpb25zKClcbiAgICBsZXQgYmFja0J1dHRvblxuICAgIGlmICh0aGlzLnByb3BzLnF1ZXN0aW9ucykge1xuICAgICAgYmFja0J1dHRvbiA9IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1yLTNcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuYmFja30+XG4gICAgICAgICAgQmFjayB0byBxdWVzdGlvbnNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+QWRkaXRpb25zPC9oMz5cbiAgICAgICAge2d1ZXN0c31cbiAgICAgICAge21lYWxzfVxuICAgICAgICB7dmVnZ2llfVxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGRpdj57dGhpcy5wcmljaW5nKCl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICB7YmFja0J1dHRvbn1cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2F2ZX0+XG4gICAgICAgICAgICBTYXZlIGNoYXJnZXMgYW5kIGNvbnRpbnVlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblRpY2tldHMucHJvcFR5cGVzID0ge1xuICByZWdpc3RyYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIHNhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBzZXNzaW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICB0b3RhbENvc3Q6IFByb3BUeXBlcy5mdW5jLFxuICBzdHVkZW50OiBQcm9wVHlwZXMub2JqZWN0LFxuICBxdWVzdGlvbnM6IFByb3BUeXBlcy5ib29sLFxuICBiYWNrOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5UaWNrZXRzLmRlZmF1bHRQcm9wcyA9IHt9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBTdGF0ZURyb3Bkb3duIGZyb20gJ0Blc3NhcHBzdGF0ZS9yZWFjdC1zdGF0ZS1kcm9wZG93bidcblxuY29uc3QgVmlzaXRvciA9ICh7dmlzaXRvciwgdXBkYXRlLCBlcnJvcnMsIGNoZWNrLCBzYXZlfSkgPT4ge1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSB2YWx1ZSA9PiB7XG4gICAgaWYgKGVycm9yc1t2YWx1ZV0pIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ3Bob25lJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+XG4gICAgICAgICAgICBQbGVhc2UgY2hlY2sgeW91ciBwaG9uZSBudW1iZXIuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj5QbGVhc2UgY29tcGxldGUgdGhlIGFib3ZlLjwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdXBkYXRlUGhvbmUgPSBlID0+IHtcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXC5cXC1cXGRdLywgJycpXG4gICAgdXBkYXRlKCdwaG9uZScsIHZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+UGxlYXNlIGVudGVyIHlvdXIgY29udGFjdCBpbmZvcm1hdGlvbiBiZWxvdy48L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgRmlyc3QgbmFtZSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGUuYmluZChudWxsLCAnZmlyc3ROYW1lJyl9XG4gICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcbiAgICAgICAgICAgICAgY2hlY2soJ2ZpcnN0TmFtZScpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3Zpc2l0b3IuZmlyc3ROYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdj57ZXJyb3JNZXNzYWdlKCdmaXJzdE5hbWUnKX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBMYXN0IG5hbWUgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGUuYmluZChudWxsLCAnbGFzdE5hbWUnKX1cbiAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gY2hlY2soJ2xhc3ROYW1lJyl9XG4gICAgICAgICAgICB2YWx1ZT17dmlzaXRvci5sYXN0TmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXY+e2Vycm9yTWVzc2FnZSgnbGFzdE5hbWUnKX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgQWRkcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiYWRkcmVzczFcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZS5iaW5kKG51bGwsICdhZGRyZXNzMScpfVxuICAgICAgICAgIG9uQmx1cj17KCkgPT4gY2hlY2soJ2FkZHJlc3MxJyl9XG4gICAgICAgICAgdmFsdWU9e3Zpc2l0b3IuYWRkcmVzczF9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXY+e2Vycm9yTWVzc2FnZSgnYWRkcmVzczEnKX08L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJhZGRyZXNzMlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG10LTNcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGUuYmluZChudWxsLCAnYWRkcmVzczInKX1cbiAgICAgICAgICB2YWx1ZT17dmlzaXRvci5hZGRyZXNzMn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtc20tNiBtdC0zXCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQ2l0eSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlLmJpbmQobnVsbCwgJ2NpdHknKX1cbiAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gY2hlY2soJ2NpdHknKX1cbiAgICAgICAgICAgIHZhbHVlPXt2aXNpdG9yLmNpdHl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2PntlcnJvck1lc3NhZ2UoJ2NpdHknKX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXNtLTYgbXQtM1wiPlxuICAgICAgICAgIDxsYWJlbD5TdGF0ZTwvbGFiZWw+XG4gICAgICAgICAgPFN0YXRlRHJvcGRvd25cbiAgICAgICAgICAgIHZhbHVlPXt2aXNpdG9yLnN0YXRlfVxuICAgICAgICAgICAgaGFuZGxlPXt1cGRhdGUuYmluZChudWxsLCAnc3RhdGUnKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtdC0zXCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgWmlwIGNvZGUgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiemlwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlLmJpbmQobnVsbCwgJ3ppcCcpfVxuICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBjaGVjaygnemlwJyl9XG4gICAgICAgICAgICB2YWx1ZT17dmlzaXRvci56aXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2PntlcnJvck1lc3NhZ2UoJ3ppcCcpfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgUGhvbmUgbnVtYmVyIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlUGhvbmV9XG4gICAgICAgICAgICBvbkJsdXI9eygpID0+IGNoZWNrKCdwaG9uZScpfVxuICAgICAgICAgICAgdmFsdWU9e3Zpc2l0b3IucGhvbmV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2PntlcnJvck1lc3NhZ2UoJ3Bob25lJyl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtzYXZlfT5cbiAgICAgICAgICBTYXZlIG15IGNvbnRhY3QgaW5mb3JtYXRpb25cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5WaXNpdG9yLnByb3BUeXBlcyA9IHtcbiAgdmlzaXRvcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2F2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGVycm9yczogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2hlY2s6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc2l0b3JcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVGlja2V0cyBmcm9tICcuL1RpY2tldHMnXG5pbXBvcnQgVmlzaXRvciBmcm9tICcuL1Zpc2l0b3InXG5pbXBvcnQgQ29tcGxldGUgZnJvbSAnLi9Db21wbGV0ZSdcbmltcG9ydCBHdWVzdCBmcm9tICcuL0d1ZXN0J1xuaW1wb3J0IENvbmZlcmVuY2VRdWVzdGlvbiBmcm9tICcuL0NvbmZlcmVuY2VRdWVzdGlvbidcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9SZXZpZXcnXG5pbXBvcnQgU2Vzc2lvbkNoYW5nZSBmcm9tICcuLi9TaGFyZWQvU2Vzc2lvbkNoYW5nZSdcblxuaW1wb3J0ICcuLi9TaGFyZWQvc3R5bGUuY3NzJ1xuXG4vKiBnbG9iYWwgJCwgc2Vzc2lvbiwgc3R1ZGVudElkLCByZWdpc3RyYXRpb25JZCwgb25zaXRlICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb25TaWdudXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMubGFzdFN0YWdlID0gJydcbiAgICB0aGlzLnF1ZXN0aW9ucyA9IGZhbHNlXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlZ2lzdHJhdGlvbjoge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgY29uZmVyZW5jZUlkOiAwLFxuICAgICAgICB2aXNpdG9ySWQ6IDAsXG4gICAgICAgIHNlc3Npb25JZDogMCxcbiAgICAgICAgc3R1ZGVudElkOiAwLFxuICAgICAgICBndWVzdENvdW50OiAwLFxuICAgICAgICBtZWFsVGlja2V0czogMCxcbiAgICAgICAgdmVnZ2llTWVhbHM6IDAsXG4gICAgICAgIGNvbXBsZXRlZDogMFxuICAgICAgfSxcbiAgICAgIHN0dWRlbnQ6IG51bGwsXG4gICAgICBzaWdudXBBbGxvd2VkOiB0cnVlLFxuICAgICAgZ3Vlc3RzOiBbXSxcbiAgICAgIG5ld1JlZ2lzdHJhdGlvbjogdHJ1ZSxcbiAgICAgIHZpc2l0b3JJbmZvOiBudWxsLFxuICAgICAgdmlzaXRvcjoge2ZpcnN0TmFtZTogJycsIGxhc3ROYW1lOiAnJ30sXG4gICAgICBzdGFnZTogJ3N0YXJ0JyxcbiAgICAgIGVycm9yTWVzc2FnZTogZmFsc2UsXG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgZmlyc3ROYW1lOiBmYWxzZSxcbiAgICAgICAgbGFzdE5hbWU6IGZhbHNlLFxuICAgICAgICBhZGRyZXNzMTogZmFsc2UsXG4gICAgICAgIGNpdHk6IGZhbHNlLFxuICAgICAgICBwaG9uZTogZmFsc2UsXG4gICAgICAgIHppcDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBwcm9jZWVkOiB0cnVlXG4gICAgfVxuICAgIHRoaXMudXBkYXRlVmlzaXRvciA9IHRoaXMudXBkYXRlVmlzaXRvci5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVSZWdpc3RyYXRpb24gPSB0aGlzLnVwZGF0ZVJlZ2lzdHJhdGlvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVJbmZvID0gdGhpcy51cGRhdGVJbmZvLmJpbmQodGhpcylcbiAgICB0aGlzLmZvcndhcmQgPSB0aGlzLmZvcndhcmQuYmluZCh0aGlzKVxuICAgIHRoaXMudG90YWxDb3N0ID0gdGhpcy50b3RhbENvc3QuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hlY2tDb250YWN0ID0gdGhpcy5jaGVja0NvbnRhY3QuYmluZCh0aGlzKVxuICAgIHRoaXMuc2F2ZUNvbnRhY3QgPSB0aGlzLnNhdmVDb250YWN0LmJpbmQodGhpcylcbiAgICB0aGlzLnNhdmVSZWdpc3RyYXRpb24gPSB0aGlzLnNhdmVSZWdpc3RyYXRpb24uYmluZCh0aGlzKVxuICAgIHRoaXMuY2hlY2tJbmZvID0gdGhpcy5jaGVja0luZm8uYmluZCh0aGlzKVxuICAgIHRoaXMudXBkYXRlR3Vlc3QgPSB0aGlzLnVwZGF0ZUd1ZXN0LmJpbmQodGhpcylcbiAgICB0aGlzLnNhdmVHdWVzdHMgPSB0aGlzLnNhdmVHdWVzdHMuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlU2Vzc2lvbiA9IHRoaXMuY2hhbmdlU2Vzc2lvbi5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmxvYWRWaXNpdG9yKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRSZWdpc3RyYXRpb24oKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkU3R1ZGVudCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZFZpc2l0b3JJbmZvKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRHdWVzdHMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kZXRlcm1pbmVTdGFnZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBkZXRlcm1pbmVTdGFnZSgpIHtcbiAgICBsZXQgc3RhZ2UgPSAncmV2aWV3J1xuICAgIGlmICh0aGlzLnJlZ2lzdHJhdGlvbkNvbXBsZXRlKCkpIHtcbiAgICAgIHN0YWdlID0gJ2NvbXBsZXRlJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMudmlzaXRvckRlbW9ncmFwaGljc0NvbXBsZXRlKCkpIHtcbiAgICAgICAgc3RhZ2UgPSAnY29udGFjdCdcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMucXVlc3Rpb25zQ29tcGxldGUoKSkge1xuICAgICAgICBzdGFnZSA9ICdjb25mZXJlbmNlUXVlc3Rpb24nXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmd1ZXN0c0NvbXBsZXRlKCkpIHtcbiAgICAgICAgc3RhZ2UgPSAnZ3Vlc3QnXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubGFzdFN0YXRlID0gc3RhZ2VcbiAgICB0aGlzLnNldFN0YXRlKHtzdGFnZX0pXG4gIH1cblxuICBndWVzdHNDb21wbGV0ZSgpIHtcbiAgICBjb25zdCBndWVzdENvdW50ID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5yZWdpc3RyYXRpb24uZ3Vlc3RDb3VudClcbiAgICByZXR1cm4gKFxuICAgICAgZ3Vlc3RDb3VudCA9PT0gMCB8fFxuICAgICAgKGd1ZXN0Q291bnQgPT0gdGhpcy5zdGF0ZS5ndWVzdHMubGVuZ3RoICYmXG4gICAgICAgIHRoaXMuc3RhdGUuZ3Vlc3RzWzBdLmZpcnN0TmFtZS5sZW5ndGggPiAwKVxuICAgIClcbiAgfVxuXG4gIGxvYWRWaXNpdG9ySW5mbygpIHtcbiAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvVmlzaXRvci9WaXNpdG9ySW5mby8nLFxuICAgICAgZGF0YToge3JlZ2lzdHJhdGlvbklkOiB0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbi5pZH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmlzaXRvckluZm86IGRhdGEubGlzdGluZ30pXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSlcbiAgfVxuXG4gIGxvYWRTdHVkZW50KCkge1xuICAgIHJldHVybiAkLmFqYXgoe1xuICAgICAgdXJsOiAnY29uZmVyZW5jZS9WaXNpdG9yL1N0dWRlbnQvJyArIHRoaXMuc3RhdGUucmVnaXN0cmF0aW9uLnN0dWRlbnRJZCxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdHVkZW50OiBkYXRhfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgbG9hZFZpc2l0b3IoKSB7XG4gICAgcmV0dXJuICQuYWpheCh7XG4gICAgICB1cmw6ICdjb25mZXJlbmNlL1Zpc2l0b3IvVmlzaXRvci9jdXJyZW50JyxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Zpc2l0b3I6IGRhdGF9KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogdHJ1ZX0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGxvYWRSZWdpc3RyYXRpb24oKSB7XG4gICAgY29uc3Qge3JlZ2lzdHJhdGlvbklkfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvVmlzaXRvci9SZWdpc3RyYXRpb24vJyArIHJlZ2lzdHJhdGlvbklkLFxuICAgICAgZGF0YToge30sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0cmF0aW9uOiBkYXRhfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgbG9hZEd1ZXN0cygpIHtcbiAgICBjb25zdCB7Z3Vlc3RDb3VudCwgaWR9ID0gdGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25cbiAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvVmlzaXRvci9HdWVzdC8nLFxuICAgICAgZGF0YToge3JlZ2lzdHJhdGlvbklkOiB0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbi5pZH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICBzdWNjZXNzOiAoe2xpc3Rpbmd9KSA9PiB7XG4gICAgICAgIGxldCBndWVzdHMgPSBsaXN0aW5nXG4gICAgICAgIGNvbnN0IGd1ZXN0TGVuZ3RoID0gZ3Vlc3RzLmxlbmd0aFxuICAgICAgICBpZiAoZ3Vlc3RMZW5ndGggPiAwKSB7XG4gICAgICAgICAgZ3Vlc3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNvbXBsZXRlID1cbiAgICAgICAgICAgICAgZWxlbWVudC5maXJzdE5hbWUubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICBlbGVtZW50Lmxhc3ROYW1lLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgZWxlbWVudC5lbWFpbC5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbklkID4gMFxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc3QgZ3Vlc3RQYWQgPSBndWVzdENvdW50IC0gZ3Vlc3RMZW5ndGhcbiAgICAgICAgICBpZiAoZ3Vlc3RQYWQgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGd1ZXN0UGFkOyBpKyspIHtcbiAgICAgICAgICAgICAgZ3Vlc3RzLnB1c2goe1xuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25JZDogaWQsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGd1ZXN0cyA9IHRoaXMuYnVpbGRHdWVzdHModGhpcy5zdGF0ZS5yZWdpc3RyYXRpb24uZ3Vlc3RDb3VudClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtndWVzdHN9KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTZXNzaW9uKHNlc3Npb25JZCkge1xuICAgIGNvbnN0IHtyZWdpc3RyYXRpb259ID0gdGhpcy5zdGF0ZVxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IGBjb25mZXJlbmNlL1Zpc2l0b3IvUmVnaXN0cmF0aW9uLyR7cmVnaXN0cmF0aW9uLmlkfS9jaGFuZ2VTZXNzaW9uYCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uSWRcbiAgICAgIH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ3BhdGNoJyxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgY29uZmVyZW5jZS9WaXNpdG9yL1Nlc3Npb24vJHtzZXNzaW9uSWR9L3NpZ251cD9zdHVkZW50SWQ9JHtyZWdpc3RyYXRpb24uc3R1ZGVudElkfWBcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvck1lc3NhZ2U6IHRydWV9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZWdpc3RyYXRpb25Db21wbGV0ZSgpIHtcbiAgICBjb25zdCB7cmVnaXN0cmF0aW9ufSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gcmVnaXN0cmF0aW9uLmNvbXBsZXRlZCA9PT0gMVxuICB9XG5cbiAgcXVlc3Rpb25zQ29tcGxldGUoKSB7XG4gICAgY29uc3Qge3Zpc2l0b3JJbmZvfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodmlzaXRvckluZm8gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGxldCBxdWVzdGlvbnNDb21wbGV0ZSA9IHRydWVcbiAgICB2aXNpdG9ySW5mby5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZS5hbnN3ZXIgPT09IG51bGwgfHwgdmFsdWUuYW5zd2VyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBxdWVzdGlvbnNDb21wbGV0ZSA9IGZhbHNlXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcXVlc3Rpb25zQ29tcGxldGVcbiAgfVxuXG4gIHNhdmVHdWVzdHMoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvVmlzaXRvci9HdWVzdC8nLFxuICAgICAgZGF0YToge1xuICAgICAgICByZWdpc3RyYXRpb25JZDogdGhpcy5zdGF0ZS5yZWdpc3RyYXRpb24uaWQsXG4gICAgICAgIGd1ZXN0czogdGhpcy5zdGF0ZS5ndWVzdHNcbiAgICAgIH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICB0aGlzLmxhc3RTdGFnZSA9ICdyZXZpZXcnXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YWdlOiAncmV2aWV3J30pXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSlcbiAgfVxuXG4gIGNoZWNrSW5mbygpIHtcbiAgICBjb25zdCB7dmlzaXRvckluZm99ID0gdGhpcy5zdGF0ZVxuICAgIGxldCBlcnJvckZvdW5kID0gZmFsc2VcbiAgICB2aXNpdG9ySW5mby5mb3JFYWNoKHF1ZXN0aW9uID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgcXVlc3Rpb24udHlwZSA9PT0gJ3RleHQnICYmXG4gICAgICAgIHF1ZXN0aW9uLnJlcXVpcmVkID09PSAxICYmXG4gICAgICAgIHF1ZXN0aW9uLmFuc3dlci5sZW5ndGggPT09IDBcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbi5lcnJvciA9IHRydWVcbiAgICAgICAgZXJyb3JGb3VuZCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXN0aW9uLmVycm9yID0gZmFsc2VcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoe3Zpc2l0b3JJbmZvfSlcbiAgICBpZiAoIWVycm9yRm91bmQpIHtcbiAgICAgIHRoaXMuc2F2ZUluZm8oKVxuICAgIH1cbiAgfVxuXG4gIHNhdmVJbmZvKCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdjb25mZXJlbmNlL1Zpc2l0b3IvVmlzaXRvckluZm8nLFxuICAgICAgZGF0YToge1xuICAgICAgICBpbmZvOiB0aGlzLnN0YXRlLnZpc2l0b3JJbmZvLFxuICAgICAgICByZWdpc3RyYXRpb25JZDogdGhpcy5zdGF0ZS5yZWdpc3RyYXRpb24uaWQsXG4gICAgICAgIGNvbmZlcmVuY2VJZDogdGhpcy5zdGF0ZS5yZWdpc3RyYXRpb24uY29uZmVyZW5jZUlkXG4gICAgICB9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhZ2U6ICd0aWNrZXRzJ30pXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgYWxlcnQoJ0NvdWxkIG5vdCBzYXZlIHlvdXIgaW5mb3JtYXRpb24uJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYnVpbGRHdWVzdHMoY291bnQpIHtcbiAgICBsZXQgZ3Vlc3RzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGd1ZXN0c1tpXSA9IHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGd1ZXN0c1xuICB9XG5cbiAgdmlzaXRvckRlbW9ncmFwaGljc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNoZWNrQ29udGFjdCgnZmlyc3ROYW1lJykgJiZcbiAgICAgIHRoaXMuY2hlY2tDb250YWN0KCdsYXN0TmFtZScpICYmXG4gICAgICB0aGlzLmNoZWNrQ29udGFjdCgnYWRkcmVzczEnKSAmJlxuICAgICAgdGhpcy5jaGVja0NvbnRhY3QoJ2NpdHknKSAmJlxuICAgICAgdGhpcy5jaGVja0NvbnRhY3QoJ3Bob25lJykgJiZcbiAgICAgIHRoaXMuY2hlY2tDb250YWN0KCd6aXAnKVxuICAgIClcbiAgfVxuXG4gIGNoZWNrQ29udGFjdChwYXJhbSkge1xuICAgIGNvbnN0IHt2aXNpdG9yLCBlcnJvcnN9ID0gdGhpcy5zdGF0ZVxuICAgIGVycm9yc1twYXJhbV0gPSB2aXNpdG9yW3BhcmFtXS5sZW5ndGggPT09IDBcbiAgICBjb25zdCBlcnJvckZvdW5kID1cbiAgICAgIGVycm9ycy5maXJzdE5hbWUgfHxcbiAgICAgIGVycm9ycy5sYXN0TmFtZSB8fFxuICAgICAgZXJyb3JzLmFkZHJlc3MxIHx8XG4gICAgICBlcnJvcnMuY2l0eSB8fFxuICAgICAgZXJyb3JzLnppcFxuICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgcmV0dXJuICFlcnJvckZvdW5kXG4gIH1cblxuICB1cGRhdGVWaXNpdG9yKHZhcm5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUudGFyZ2V0LnZhbHVlXG4gICAgfVxuICAgIGNvbnN0IHt2aXNpdG9yfSA9IHRoaXMuc3RhdGVcbiAgICB2aXNpdG9yW3Zhcm5hbWVdID0gdmFsdWVcbiAgICB0aGlzLnNldFN0YXRlKHt2aXNpdG9yfSlcbiAgfVxuXG4gIHVwZGF0ZVJlZ2lzdHJhdGlvbih2YXJuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRhcmdldC52YWx1ZVxuICAgIH1cbiAgICBjb25zdCB7cmVnaXN0cmF0aW9ufSA9IHRoaXMuc3RhdGVcbiAgICByZWdpc3RyYXRpb25bdmFybmFtZV0gPSB2YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdHJhdGlvbn0pXG4gIH1cblxuICBzYXZlQ29udGFjdCgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnLi9jb25mZXJlbmNlL1Zpc2l0b3IvVmlzaXRvci8nICsgdGhpcy5zdGF0ZS52aXNpdG9yLmlkLFxuICAgICAgZGF0YTogdGhpcy5zdGF0ZS52aXNpdG9yLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdwdXQnLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICBsZXQgc3RhZ2VcbiAgICAgICAgaWYgKHRoaXMucXVlc3Rpb25zQ29tcGxldGUoKSkge1xuICAgICAgICAgIHN0YWdlID0gdGhpcy5sYXN0U3RhZ2UgPT09ICdyZXZpZXcnID8gJ3JldmlldycgOiAndGlja2V0cydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFnZSA9ICdjb25mZXJlbmNlUXVlc3Rpb24nXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhZ2V9KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogdHJ1ZX0pXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHtzdGFnZTogJ3Jldmlldyd9KVxuICB9XG5cbiAgZm9yd2FyZCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuc3RhZ2UpIHtcbiAgICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgICBpZiAodGhpcy52aXNpdG9yRGVtb2dyYXBoaWNzQ29tcGxldGUoKSkge1xuICAgICAgICAgIHRoaXMuc2F2ZUNvbnRhY3QoKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2NvbmZlcmVuY2VRdWVzdGlvbic6XG4gICAgICAgIHRoaXMubGFzdFN0YWdlID0gJ3RpY2tldHMnXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YWdlOiAndGlja2V0cyd9KVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd0aWNrZXRzJzpcbiAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuc3RhdGUucmVnaXN0cmF0aW9uLmd1ZXN0Q291bnQpID4gMCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmd1ZXN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBndWVzdHM6IHRoaXMuYnVpbGRHdWVzdHModGhpcy5zdGF0ZS5yZWdpc3RyYXRpb24uZ3Vlc3RDb3VudClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubGFzdFN0YWdlID0gJ2d1ZXN0J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGFzdFN0YWdlID0gJ3JldmlldydcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGFnZTogdGhpcy5sYXN0U3RhZ2V9KVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHNhdmVSZWdpc3RyYXRpb24oKSB7XG4gICAgY29uc3Qge3JlZ2lzdHJhdGlvbiwgdmlzaXRvcn0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgZGF0YSA9IHt9XG4gICAgZGF0YS52aXNpdG9ySWQgPSB2aXNpdG9yLmlkXG4gICAgZGF0YS5zZXNzaW9uSWQgPSByZWdpc3RyYXRpb24uc2Vzc2lvbklkXG4gICAgZGF0YS5ndWVzdENvdW50ID0gcmVnaXN0cmF0aW9uLmd1ZXN0Q291bnRcbiAgICBkYXRhLm1lYWxUaWNrZXRzID0gcmVnaXN0cmF0aW9uLmd1ZXN0Q291bnRcbiAgICBkYXRhLnZlZ2dpZU1lYWxzID0gcmVnaXN0cmF0aW9uLmd1ZXN0Q291bnRcbiAgICBkYXRhLnN0dWRlbnRJZCA9IHJlZ2lzdHJhdGlvbi5zdHVkZW50SWRcblxuICAgIGxldCB0eXBlID0gJ3Bvc3QnXG4gICAgbGV0IHVybCA9ICcuL2NvbmZlcmVuY2UvVmlzaXRvci9SZWdpc3RyYXRpb24nXG4gICAgaWYgKHRoaXMuc3RhdGUucmVnaXN0cmF0aW9uLmlkICE9PSAwKSB7XG4gICAgICB0eXBlID0gJ3B1dCdcbiAgICAgIHVybCA9IHVybCArICcvJyArIHRoaXMuc3RhdGUucmVnaXN0cmF0aW9uLmlkXG4gICAgfVxuICAgICQuYWpheCh7XG4gICAgICB1cmwsXG4gICAgICBkYXRhOiB0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbixcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcndhcmQoKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogdHJ1ZX0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHRvdGFsQ29zdCgpIHtcbiAgICBjb25zdCB7cmVnaXN0cmF0aW9uLCBzdHVkZW50fSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7c2Vzc2lvbn0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge3JlZ2lzdGVyQ29zdCwgZ3Vlc3RDb3N0LCBtZWFsQ29zdCwgbWVhbFNlcnZpY2V9ID0gc2Vzc2lvblxuXG4gICAgbGV0IGNvc3QgPSBOdW1iZXIocmVnaXN0ZXJDb3N0IC0gc3R1ZGVudC5kaXNjb3VudEFtb3VudClcblxuICAgIGNvbnN0IHRvdGFsR3Vlc3RDb3N0ID0gTnVtYmVyKGd1ZXN0Q29zdCkgKiBOdW1iZXIocmVnaXN0cmF0aW9uLmd1ZXN0Q291bnQpXG4gICAgY29zdCA9IGNvc3QgKyB0b3RhbEd1ZXN0Q29zdFxuXG4gICAgaWYgKG1lYWxTZXJ2aWNlID09IDEpIHtcbiAgICAgIGNvbnN0IHRvdGFsTWVhbENvc3QgPSBOdW1iZXIobWVhbENvc3QpICogTnVtYmVyKHJlZ2lzdHJhdGlvbi5tZWFsVGlja2V0cylcbiAgICAgIGNvc3QgPSBjb3N0ICsgdG90YWxNZWFsQ29zdFxuICAgIH1cblxuICAgIHJldHVybiBjb3N0LnRvRml4ZWQoMilcbiAgfVxuXG4gIHVwZGF0ZUluZm8oa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHt2aXNpdG9ySW5mb30gPSB0aGlzLnN0YXRlXG4gICAgdmlzaXRvckluZm9ba2V5XS5hbnN3ZXIgPSB2YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoe3Zpc2l0b3JJbmZvfSlcbiAgfVxuXG4gIHByZXZpb3VzU3VtbWFyeSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zZWNvbmRhcnlcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGVhZFwiPlNlc3Npb24gY29zdDogJHt0aGlzLnRvdGFsQ29zdCgpfS4wMDwvc3Bhbj4tXG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlclwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c3RhZ2U6ICd0aWNrZXRzJ30pfT5cbiAgICAgICAgICBFZGl0XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHVwZGF0ZUd1ZXN0KGNvdW50LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBjb25zdCB7Z3Vlc3RzfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBndWVzdCA9IGd1ZXN0c1tjb3VudF1cblxuICAgIGd1ZXN0W3Byb3BlcnR5XSA9IHZhbHVlXG4gICAgZ3Vlc3QuY29tcGxldGUgPVxuICAgICAgZ3Vlc3QuZmlyc3ROYW1lLmxlbmd0aCA+IDAgJiZcbiAgICAgIGd1ZXN0Lmxhc3ROYW1lLmxlbmd0aCA+IDAgJiZcbiAgICAgIGd1ZXN0LmVtYWlsLmxlbmd0aCA+IDAgJiZcbiAgICAgIGd1ZXN0LmVtYWlsLm1hdGNoKC9eW1xcdy4lKy1dK0BbYS16MC05Li1dK1xcLlthLXpdezIsNH0kLykgIT09IG51bGxcbiAgICB0aGlzLnNldFN0YXRlKHtndWVzdHN9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb250ZW50XG4gICAgbGV0IHtzZXNzaW9ufSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7c3R1ZGVudH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgIFNvcnJ5LCBidXQgYW4gZXJyb3IgcHJldmVudGVkIHlvdXIgcmVnaXN0cmF0aW9uIGZyb20gY29tcGxldGluZy5cbiAgICAgICAgICBQbGVhc2UgY29udGFjdCB1cyBmb3IgaGVscC5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5zdGFnZSkge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICBjb250ZW50ID0gPGRpdj5Mb2FkaW5nLCBwbGVhc2Ugd2FpdDwvZGl2PlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgY29udGVudCA9IChcbiAgICAgICAgICA8VmlzaXRvclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uPXt0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbn1cbiAgICAgICAgICAgIHNhdmU9e3RoaXMuZm9yd2FyZH1cbiAgICAgICAgICAgIHZpc2l0b3I9e3RoaXMuc3RhdGUudmlzaXRvcn1cbiAgICAgICAgICAgIHNlc3Npb249e3Nlc3Npb259XG4gICAgICAgICAgICBlcnJvcnM9e3RoaXMuc3RhdGUuZXJyb3JzfVxuICAgICAgICAgICAgY2hlY2s9e3RoaXMuY2hlY2tDb250YWN0fVxuICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZVZpc2l0b3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd0aWNrZXRzJzpcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVnaXN0cmF0aW9uLmNvbXBsZXRlZCA9PT0gMSkge1xuICAgICAgICAgIGNvbnRlbnQgPSA8ZGl2PkFscmVhZHkgY29tcGxldGU8L2Rpdj5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZW50ID0gKFxuICAgICAgICAgICAgPFRpY2tldHNcbiAgICAgICAgICAgICAgYmFjaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c3RhZ2U6ICdjb25mZXJlbmNlUXVlc3Rpb24nfSl9XG4gICAgICAgICAgICAgIHF1ZXN0aW9ucz17dGhpcy5xdWVzdGlvbnN9XG4gICAgICAgICAgICAgIHNhdmU9e3RoaXMuc2F2ZVJlZ2lzdHJhdGlvbn1cbiAgICAgICAgICAgICAgdG90YWxDb3N0PXt0aGlzLnRvdGFsQ29zdH1cbiAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uPXt0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbn1cbiAgICAgICAgICAgICAgc2Vzc2lvbj17c2Vzc2lvbn1cbiAgICAgICAgICAgICAgc3R1ZGVudD17c3R1ZGVudH1cbiAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZVJlZ2lzdHJhdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2NvbmZlcmVuY2VRdWVzdGlvbic6XG4gICAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgICAgPENvbmZlcmVuY2VRdWVzdGlvblxuICAgICAgICAgICAgdmlzaXRvckluZm89e3RoaXMuc3RhdGUudmlzaXRvckluZm99XG4gICAgICAgICAgICBjaGVja0luZm89e3RoaXMuY2hlY2tJbmZvfVxuICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZUluZm99XG4gICAgICAgICAgICBzYXZlPXt0aGlzLmZvcndhcmR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdndWVzdCc6XG4gICAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgICAgPEd1ZXN0XG4gICAgICAgICAgICBndWVzdHM9e3RoaXMuc3RhdGUuZ3Vlc3RzfVxuICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZUd1ZXN0fVxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uPXt0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbn1cbiAgICAgICAgICAgIHNhdmU9e3RoaXMuc2F2ZUd1ZXN0c31cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3Jldmlldyc6XG4gICAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgICAgPFJldmlld1xuICAgICAgICAgICAgdmlzaXRvcj17dGhpcy5zdGF0ZS52aXNpdG9yfVxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uPXt0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbn1cbiAgICAgICAgICAgIHNlc3Npb249e3Nlc3Npb259XG4gICAgICAgICAgICBnb0JhY2s9e3N0YWdlID0+IHRoaXMuc2V0U3RhdGUoe3N0YWdlfSl9XG4gICAgICAgICAgICB0b3RhbENvc3Q9e3RoaXMudG90YWxDb3N0fVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnY29tcGxldGUnOlxuICAgICAgICBjb250ZW50ID0gKFxuICAgICAgICAgIDxDb21wbGV0ZVxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uPXt0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbn1cbiAgICAgICAgICAgIHNpZ251cEFsbG93ZWQ9e3RoaXMuc3RhdGUuc2lnbnVwQWxsb3dlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxuICAgIGxldCBzZXNzaW9uQ2hhbmdlID0gbnVsbFxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMub25zaXRlID09PSBmYWxzZSAmJlxuICAgICAgdGhpcy5zdGF0ZS5yZWdpc3RyYXRpb24uaWQgPiAwICYmXG4gICAgICAodGhpcy5zdGF0ZS5zdGFnZSA9PT0gJ3JldmlldycgfHwgdGhpcy5zdGF0ZS5zdGFnZSA9PT0gJ3RpY2tldHMnKVxuICAgICkge1xuICAgICAgc2Vzc2lvbkNoYW5nZSA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2Vzc2lvbkNoYW5nZVxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uSWQ9e3RoaXMuc3RhdGUucmVnaXN0cmF0aW9uLmlkfVxuICAgICAgICAgICAgY29tcGxldGVkPXt0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvbi5jb21wbGV0ZWR9XG4gICAgICAgICAgICBjaGFuZ2VTZXNzaW9uPXt0aGlzLmNoYW5nZVNlc3Npb259XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7c2Vzc2lvbkNoYW5nZX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+e2NvbnRlbnR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuU2Vzc2lvblNpZ251cC5wcm9wVHlwZXMgPSB7XG4gIHNlc3Npb246IFByb3BUeXBlcy5vYmplY3QsXG4gIHN0dWRlbnRJZDogUHJvcFR5cGVzLm51bWJlcixcbiAgdmlzaXRvcklkOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvbnNpdGU6IFByb3BUeXBlcy5ib29sLFxuICByZWdpc3RyYXRpb25JZDogUHJvcFR5cGVzLm51bWJlclxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxTZXNzaW9uU2lnbnVwXG4gICAgc2Vzc2lvbj17c2Vzc2lvbn1cbiAgICBzdHVkZW50SWQ9e3N0dWRlbnRJZH1cbiAgICBvbnNpdGU9e29uc2l0ZX1cbiAgICByZWdpc3RyYXRpb25JZD17cmVnaXN0cmF0aW9uSWR9XG4gIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnU2Vzc2lvblNpZ251cCcpXG4pXG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG4vKiBnbG9iYWwgJCAqL1xuXG5jb25zdCBTZXNzaW9uQ2hhbmdlID0gcHJvcHMgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2Vzc2lvbkxpc3QsIHNldFNlc3Npb25MaXN0XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbY2hhbmdlU2Vzc2lvbklkLCBzZXRDaGFuZ2VTZXNzaW9uXSA9IHVzZVN0YXRlKDApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnY29uZmVyZW5jZS9WaXNpdG9yL1Nlc3Npb24vY2hhbmdlJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcmVnaXN0cmF0aW9uSWQ6IHByb3BzLnJlZ2lzdHJhdGlvbklkXG4gICAgICB9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCkge1xuICAgICAgICAgIHNldFNlc3Npb25MaXN0KGRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICBzZXRFcnJvcih0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZyBzZXNzaW9ucy4uLjwvZGl2PlxuICB9XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPkNvdWxkIG5vdCBsb2FkIG90aGVyIHNlc3Npb25zLjwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGxldCBzZXNzaW9uU2VsZWN0ID0gKFxuICAgIDxkaXY+XG4gICAgICA8ZW0+XG4gICAgICAgIE5vIGFsdGVybmF0aXZlIHNlc3Npb25zIGF2YWlsYWJsZSBkdWUgdG8gY29zdCBkaWZmZXJlbmNlIG9yIHNpZ251cFxuICAgICAgICBkZWFkbGluZXMuXG4gICAgICA8L2VtPlxuICAgIDwvZGl2PlxuICApXG4gIGxldCBwcmljZVdhcm5pbmdcbiAgaWYgKHByb3BzLmNvbXBsZXRlZCA9PT0gMSkge1xuICAgIHByaWNlV2FybmluZyA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtaW5mbyB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIE5vdGU6IGlmIHlvdSBoYXZlIGFscmVhZHkgcGFpZCwgeW91IG1heSBvbmx5IGNoYW5nZSB0byBhIHNlc3Npb24gb2YgdGhlXG4gICAgICAgIHNhbWUgY29zdC5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBpZiAoc2Vzc2lvbkxpc3QubGVuZ3RoKSB7XG4gICAgbGV0IHNlc3Npb25PcHRpb25zID0gW11cbiAgICBzZXNzaW9uT3B0aW9ucyA9IHNlc3Npb25MaXN0Lm1hcCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e3ZhbHVlLmlkfT5cbiAgICAgICAgICB7dmFsdWUudGl0bGV9IC0ge3ZhbHVlLmV2ZW50RGF0ZUZvcm1hdH0gLSB7dmFsdWUuZGF5c30gZGF5IHNlc3Npb25cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApXG4gICAgfSlcblxuICAgIHNlc3Npb25TZWxlY3QgPSAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTlcIj5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q2hhbmdlU2Vzc2lvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHZhbHVlPXtjaGFuZ2VTZXNzaW9uSWR9PlxuICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIGRlZmF1bHRDaGVja2VkIHZhbHVlPXswfT5cbiAgICAgICAgICAgICAgICBQcmVmZXIgdG8gY2hhbmdlIHlvdXIgc2Vzc2lvbj8gUGljayBhIGRpZmZlcmVudCBkYXRlIGJlbG93LlxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAge3Nlc3Npb25PcHRpb25zfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hhbmdlU2Vzc2lvbklkID09IDB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9wcy5jaGFuZ2VTZXNzaW9uKGNoYW5nZVNlc3Npb25JZClcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIENoYW5nZSBteSBzZXNzaW9uXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtwcmljZVdhcm5pbmd9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwLTIgbWItMlwiPntzZXNzaW9uU2VsZWN0fTwvZGl2PlxufVxuXG5TZXNzaW9uQ2hhbmdlLnByb3BUeXBlcyA9IHtcbiAgcmVnaXN0cmF0aW9uSWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbXBsZXRlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgY2hhbmdlU2Vzc2lvbjogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Vzc2lvbkNoYW5nZVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJ0aC5vcHRpb24ge1xcbiAgd2lkdGg6IDUlO1xcbn1cXG5cXG50aC50aXRsZSB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucG9pbnRlcjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnRoLmFjdGlvbiB7XFxuICB3aWR0aDogMTAlO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9