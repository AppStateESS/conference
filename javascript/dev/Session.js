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
/******/ 		"Session": 0
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
/******/ 	deferredModules.push(["./javascript/Session/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Session/SessionForm.js":
/*!*******************************************!*\
  !*** ./javascript/Session/SessionForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _TimeSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TimeSelect */ "./javascript/Session/TimeSelect.js");
/* harmony import */ var _essappstate_canopy_react_inputfield__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @essappstate/canopy-react-inputfield */ "./node_modules/@essappstate/canopy-react-inputfield/build/index.js");
/* harmony import */ var _essappstate_canopy_react_inputfield__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_essappstate_canopy_react_inputfield__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @essappstate/canopy-react-bigcheckbox */ "./node_modules/@essappstate/canopy-react-bigcheckbox/build/index.js");
/* harmony import */ var _essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Shared_Dollarize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Shared/Dollarize */ "./javascript/Shared/Dollarize.jsx");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_14__);









function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var SessionForm = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SessionForm, _Component);

  var _super = _createSuper(SessionForm);

  function SessionForm(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SessionForm);

    _this = _super.call(this, props);
    _this.state = {
      errors: {
        title: null,
        eventDate: null,
        startTime: null,
        signupDate: null
      },
      errorFound: false
    };
    _this.titleRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.numberChange = _this.numberChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.check = _this.check.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.setDate = _this.setDate.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.mealService = _this.mealService.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.checkSave = _this.checkSave.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.checkBeforeSave = _this.checkBeforeSave.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.copySessionDate = _this.copySessionDate.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.signupNow = _this.signupNow.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.allowGuest = _this.allowGuest.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SessionForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.titleRef.current.focus();
    }
  }, {
    key: "setDate",
    value: function setDate(varname, date) {
      this.props.update(varname, date.getTime() / 1000);
      this.check();
    }
  }, {
    key: "allowGuest",
    value: function allowGuest(value) {
      this.props.update('allowGuest', value ? 1 : 0);
    }
  }, {
    key: "copySessionDate",
    value: function copySessionDate() {
      var eventDate = dayjs__WEBPACK_IMPORTED_MODULE_14___default()(this.props.resource.eventDate * 1000).set('hour', 12).unix();
      this.props.update('signupEnd', eventDate);
      this.check();
    }
  }, {
    key: "dollarize",
    value: function dollarize(input) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Shared_Dollarize__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: "1"
      }, input);
    }
  }, {
    key: "locationSelect",
    value: function locationSelect(locationId) {
      var options = this.props.locations.map(function (value, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          key: key,
          value: value.id
        }, value.title);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        className: "form-control",
        value: locationId,
        onChange: this.props.update.bind(this, 'locationId')
      }, options);
    }
  }, {
    key: "numberChange",
    value: function numberChange(varname, e) {
      var value = e.target.value.replace(/[^\d\.]/g, '');
      this.props.update(varname, value);
    }
  }, {
    key: "check",
    value: function check() {
      var errorFound = false;
      var errors = {
        title: null,
        eventDate: null,
        startTime: null,
        signupDate: null
      };
      var _this$props$resource = this.props.resource,
          title = _this$props$resource.title,
          eventDate = _this$props$resource.eventDate,
          startTime = _this$props$resource.startTime,
          endTime = _this$props$resource.endTime,
          signupStart = _this$props$resource.signupStart,
          signupEnd = _this$props$resource.signupEnd;

      if (title.length === 0) {
        errors.title = 'Title may not be empty';
        errorFound = true;
      }

      if (startTime >= endTime) {
        errors.startTime = 'Session start time must be prior to end time';
        errorFound = true;
      }

      if (signupStart >= signupEnd) {
        errors.signupDate = 'Sign up start date must be prior to end time';
        errorFound = true;
      }

      var eventDateObj = new Date(eventDate * 1000);
      var lateNight = new Date(eventDateObj.getFullYear(), eventDateObj.getMonth(), eventDateObj.getDate(), 23, 59, 59);
      var lateNightUnix = lateNight.getTime() / 1000;

      if (lateNightUnix < signupStart) {
        errors.eventDate = 'Session date must be after sign up date.';
        errorFound = true;
      }

      if (lateNightUnix < signupEnd) {
        errors.signupDate = 'Sign up end date must be before or equal to session date.';
        errorFound = true;
      }

      this.setState({
        errorFound: errorFound,
        errors: errors
      });
      return !errorFound;
    }
  }, {
    key: "checkSave",
    value: function checkSave(varname, value) {
      this.props.update(varname, value);
      this.check(varname);
    }
  }, {
    key: "checkBeforeSave",
    value: function checkBeforeSave() {
      if (this.check()) {
        if (parseInt(this.props.resource.registrationCount) > 0) {
          if (confirm('If you made price changes, current registrations will have incorrect prices. Are you sure you want to update this session?')) {
            this.props.save();
          }
        } else {
          this.props.save();
        }
      }
    }
  }, {
    key: "clearError",
    value: function clearError(varname) {
      var errors = this.state.errors;
      errors[varname] = null;
      this.setState({
        errors: errors
      });
    }
  }, {
    key: "mealService",
    value: function mealService(value) {
      this.props.update('mealService', value ? 1 : 0);
    }
  }, {
    key: "signupNow",
    value: function signupNow() {
      this.props.update('signupStart', Math.round(Date.now() / 1000));
      this.check();
    }
  }, {
    key: "mealMessage",
    value: function mealMessage() {
      var session = this.props.resource;

      if (session.mealService === 0) {
        return;
      } else {
        var message;

        if (parseInt(session.mealCost) === 0) {
          if (session.mealIncluded) {
            message = 'No meal cost but included indicates a meal is provided to the registered only';
          } else {
            message = 'No meal cost, not included gives no message to the visitor';
          }
        } else {
          if (session.mealIncluded) {
            message = 'Meal cost and included indicates a meal is provided to registered and extra tickets can be bought';
          } else {
            message = 'Meal cost and not included shows the price of meal tickets but does not mention inclusion';
          }
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "small bg-light mb-2"
        }, message);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$resource2 = this.props.resource,
          title = _this$props$resource2.title,
          eventDate = _this$props$resource2.eventDate,
          startTime = _this$props$resource2.startTime,
          endTime = _this$props$resource2.endTime,
          signupStart = _this$props$resource2.signupStart,
          signupEnd = _this$props$resource2.signupEnd,
          registerCost = _this$props$resource2.registerCost,
          guestCost = _this$props$resource2.guestCost,
          mealIncluded = _this$props$resource2.mealIncluded,
          mealCost = _this$props$resource2.mealCost,
          softCap = _this$props$resource2.softCap,
          attendanceCap = _this$props$resource2.attendanceCap,
          locationId = _this$props$resource2.locationId,
          days = _this$props$resource2.days,
          mealService = _this$props$resource2.mealService,
          allowGuest = _this$props$resource2.allowGuest,
          registrationCount = _this$props$resource2.registrationCount;
      var update = this.props.update;
      var eventDateObject;

      if (eventDate) {
        eventDateObject = new Date(eventDate * 1000);
      } else {
        eventDateObject = new Date();
      }

      var signupStartObject;

      if (signupStart) {
        signupStartObject = new Date(signupStart * 1000);
      } else {
        signupStartObject = new Date();
      }

      var signupEndObject;

      if (signupStart) {
        signupEndObject = new Date(signupEnd * 1000);
      } else {
        signupEndObject = new Date();
      }

      var errors = this.state.errors;
      var startTimeError;

      if (errors.startTime) {
        startTimeError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "badge badge-danger"
        }, errors.startTime);
      }

      var signupDateError;

      if (errors.signupDate) {
        signupDateError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "badge badge-danger"
        }, errors.signupDate);
      }

      var eventDateError;

      if (errors.eventDate) {
        eventDateError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "badge badge-danger"
        }, errors.eventDate);
      }

      var copyButton;

      if (dayjs__WEBPACK_IMPORTED_MODULE_14___default()(signupEnd * 1000).format('YYYYMMDD') !== dayjs__WEBPACK_IMPORTED_MODULE_14___default()(eventDate * 1000).format('YYYYMMDD')) {
        copyButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          className: "btn btn-success",
          onClick: this.copySessionDate
        }, "Copy session date");
      }

      var warning;

      if (parseInt(registrationCount) > 0) {
        warning = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "col-12 alert alert-warning"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, "Warning"), ": there are currently registrations for this session. Changing prices is not advised."));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container"
      }, warning, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, "Title", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "text-danger fas fa-asterisk fa-xs"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "title",
        ref: this.titleRef,
        className: "form-control ".concat(errors.title ? 'border-danger' : null),
        value: title,
        onFocus: this.clearError.bind(this, 'title'),
        placeholder: errors.title ? errors.title : null,
        onBlur: this.check,
        onChange: update.bind(null, 'title')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "mt-3"
      }, "Location"), this.locationSelect(locationId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, "Session date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_8___default.a, {
        selected: eventDateObject,
        onChange: this.setDate.bind(this, 'eventDate'),
        className: "form-control",
        dateFormat: "MMM d, yyyy"
      }), ' ', eventDateError), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, "Session length"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        className: "form-control",
        value: days,
        onChange: update.bind(null, 'days')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "1"
      }, "1 day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "2"
      }, "2 days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "3"
      }, "3 days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "4"
      }, "4 days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "5"
      }, "5 days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "6"
      }, "6 days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "7"
      }, "7 days")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-lg-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "mt-3"
      }, "Start time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_TimeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onChange: this.checkSave.bind(this, 'startTime'),
        time: startTime
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-lg-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "mt-3"
      }, "End time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_TimeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onChange: update.bind(null, 'endTime'),
        time: endTime
      }))), startTimeError, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "mt-3"
      }, "Sign up start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_8___default.a, {
        selected: signupStartObject,
        onChange: this.setDate.bind(this, 'signupStart'),
        className: "form-control",
        showTimeSelect: true,
        timeFormat: "HH:mm",
        timeIntervals: 15,
        dateFormat: "MMM d, yyyy h:mm aa",
        timeCaption: "time"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.signupNow
      }, "Now"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "mt-3"
      }, "Sign up deadline"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_8___default.a, {
        selected: signupEndObject,
        onChange: this.setDate.bind(this, 'signupEnd'),
        className: "form-control",
        showTimeSelect: true,
        timeFormat: "HH:mm",
        timeIntervals: 15,
        dateFormat: "MMM d, yyyy h:mm aa",
        timeCaption: "time"
      }), copyButton, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "w-50"
      }, signupDateError)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, "Registration cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_essappstate_canopy_react_inputfield__WEBPACK_IMPORTED_MODULE_11___default.a, {
        name: "registerCost",
        wrap: this.dollarize,
        placeholder: "0.00",
        size: "6",
        maxLength: "6",
        value: registerCost,
        change: this.numberChange.bind(null, 'registerCost')
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_12___default.a, {
        label: "Meals served during session",
        checked: mealService,
        handle: this.mealService
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-text ".concat(mealService === 1 ? 'd-block' : 'd-none')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-10 ml-auto"
      }, this.mealMessage(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, "Meal cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_essappstate_canopy_react_inputfield__WEBPACK_IMPORTED_MODULE_11___default.a, {
        name: "mealCost",
        size: "6",
        placeholder: "0.00",
        maxLength: "6",
        wrap: this.dollarize,
        value: mealCost,
        change: this.numberChange.bind(null, 'mealCost')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_12___default.a, {
        label: "Meal included with registration",
        checked: mealIncluded,
        handle: update.bind(null, 'mealIncluded')
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_essappstate_canopy_react_bigcheckbox__WEBPACK_IMPORTED_MODULE_12___default.a, {
        label: "Guest signup allowed",
        checked: allowGuest,
        handle: this.allowGuest
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-text ".concat(allowGuest === 1 ? 'd-block' : 'd-none')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-10 ml-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, "Guest cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_essappstate_canopy_react_inputfield__WEBPACK_IMPORTED_MODULE_11___default.a, {
        name: "guestCost",
        placeholder: "0.00",
        size: "6",
        maxLength: "6",
        wrap: this.dollarize,
        value: guestCost,
        change: this.numberChange.bind(null, 'guestCost')
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "mt-3"
      }, "Attendance cap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_essappstate_canopy_react_inputfield__WEBPACK_IMPORTED_MODULE_11___default.a, {
        name: "attendanceCap",
        size: "4",
        maxLength: "4",
        value: attendanceCap,
        change: update.bind(null, 'attendanceCap')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "mt-3"
      }, "Soft cap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_essappstate_canopy_react_inputfield__WEBPACK_IMPORTED_MODULE_11___default.a, {
        name: "softCap",
        size: "4",
        maxLength: "4",
        value: softCap,
        change: update.bind(null, 'softCap')
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-primary mr-4",
        onClick: this.checkBeforeSave,
        disabled: this.state.errorFound
      }, "Save session"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-danger",
        onClick: this.props.close
      }, "Close")));
    }
  }]);

  return SessionForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

SessionForm.propTypes = {
  resource: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  locations: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  conference: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  save: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  close: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (SessionForm);

/***/ }),

/***/ "./javascript/Session/TimeSelect.js":
/*!******************************************!*\
  !*** ./javascript/Session/TimeSelect.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var intToString = function intToString(timeVar) {
  return timeVar < 10 ? '0' + timeVar.toString() : timeVar.toString();
};

var getCurrentAmPm = function getCurrentAmPm(timeInteger) {
  return timeInteger >= 1200 ? 'PM' : 'AM';
};

var getHourMatch = function getHourMatch(hourInteger) {
  if (hourInteger > 12) {
    hourInteger -= 12;
  }

  return hourInteger === 0 ? '12' : hourInteger.toString();
};

var TimeSelect = function TimeSelect(_ref) {
  var time = _ref.time,
      onChange = _ref.onChange;
  var timeInt = parseInt(time);
  var ampm = getCurrentAmPm(timeInt);
  var hourInt = timeInt / 100; // first two digits of hour saved in database

  var hourStr = intToString(hourInt); // used to match on the select

  var hourMatch = getHourMatch(hourInt);
  var minuteInt = timeInt % 100;
  var minuteStr = intToString(minuteInt);

  var handleAMPM = function handleAMPM(e) {
    var value = e.target.value;

    if (value === 'AM') {
      hourInt -= 12;

      if (hourInt === 12) {
        hourStr = '00';
      } else {
        hourStr = intToString(hourInt);
      }
    } else {
      // value is pm
      // if hour is midnight change to noon
      if (hourInt === 0) {
        hourStr = '12';
      } else {
        hourStr = intToString(hourInt);
      }
    }

    sendChange(hourStr, minuteStr);
  };

  var sendChange = function sendChange(hourStr, minuteStr) {
    var timeStr = hourStr + minuteStr;
    onChange(timeStr);
  };

  var handleHour = function handleHour(e) {
    var value = e.target.value;
    hourInt = parseInt(value);

    if (ampm === 'PM') {
      if (hourInt === 12) {
        hourInt = 12;
      } else {
        hourInt += 12;
      }
    }

    hourStr = intToString(hourInt);
    sendChange(hourStr, minuteStr);
  };

  var handleMinute = function handleMinute(e) {
    var value = e.target.value;
    minuteInt = parseInt(value);
    minuteStr = intToString(minuteInt);
    sendChange(hourStr, minuteStr);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 pr-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    value: hourMatch,
    onChange: handleHour
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "12"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    value: minuteStr,
    onChange: handleMinute
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "45"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    value: ampm,
    onChange: handleAMPM
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "PM")))));
};

TimeSelect.propTypes = {
  time: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (TimeSelect);

/***/ }),

/***/ "./javascript/Session/index.jsx":
/*!**************************************!*\
  !*** ./javascript/Session/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Session; });
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
/* harmony import */ var _SessionForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SessionForm */ "./javascript/Session/SessionForm.js");
/* harmony import */ var _Shared_Locations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Shared/Locations */ "./javascript/Shared/Locations.js");
/* harmony import */ var _essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @essappstate/react-navbar */ "./node_modules/@essappstate/react-navbar/build/index.js");
/* harmony import */ var _essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Shared_style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Shared/style.css */ "./javascript/Shared/style.css");
/* harmony import */ var _Shared_style_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Shared_style_css__WEBPACK_IMPORTED_MODULE_13__);










function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








/* global $, conferenceId, locationId, sessionSoftCap */

var regLink = function regLink(val) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "conference/Admin/Registration/?sessionId=".concat(val.id)
  }, val.registrationCount);
};

var warning = function warning(row) {
  if (row.softCap == 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "badge badge-success"
    }, "Under");
  }

  var registrationCount = parseInt(row.registrationCount);
  var softCap = row.softCap;

  if (registrationCount > softCap) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "badge badge-danger"
    }, "Over!");
  } else if (registrationCount != 0 && registrationCount > softCap - sessionSoftCap) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "badge badge-warning"
    }, "Warning!");
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "badge badge-success"
    }, "Under");
  }
};

var Session = /*#__PURE__*/function (_Listing) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Session, _Listing);

  var _super = _createSuper(Session);

  function Session(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Session);

    _this = _super.call(this, props);
    _this.restUrl = 'conference/Admin/Session';
    _this.label = 'Session';
    var coeff = 1000 * 60 * 30;
    var now = Math.round(Date.now() / coeff) * coeff / 1000;
    _this.defaultResource = {
      id: 0,
      conferenceId: props.conferenceId,
      title: '',
      eventDate: now,
      startTime: '1200',
      endTime: '1300',
      signupStart: now - 86400,
      signupEnd: now,
      registerCost: 0.0,
      guestCost: 0.0,
      days: 1,
      softCap: 0,
      attendanceCap: 8,
      mealIncluded: 0,
      mealService: 0,
      mealCost: 0.0,
      allowGuest: 0,
      locationId: props.locationId,
      registrationCount: 0,
      capWarningSent: 0,
      active: 1
    };

    var dropdown = function dropdown(key, row) {
      var id = row.id;
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
        "aria-labelledby": "dropdownMenuButton",
        style: {
          width: '200px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "dropdown-item pointer",
        href: "conference/Admin/Registration/?sessionId=".concat(id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-ticket-alt"
      }), "\xA0Registrations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "dropdown-item pointer",
        href: "conference/Admin/Session/".concat(id, "/signin")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-receipt"
      }), "\xA0Unpaid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
        className: "my-1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "dropdown-item pointer",
        href: "#",
        onClick: _this.editResource.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), key)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-edit"
      }), "\xA0Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "dropdown-item pointer",
        href: "#",
        onClick: _this.copy.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), key)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-copy"
      }), "\xA0Copy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
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
        return dropdown(key, row);
      },
      style: {
        width: '10%'
      }
    }, {
      column: 'title',
      label: 'Title',
      sort: true
    }, {
      column: 'registerCost',
      label: 'Cost / Guest / Meal',
      callback: function callback(row) {
        var mealCost = row.mealService === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "$", row.mealCost.toFixed(2)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "text-muted"
        }, "N/A");
        var guestCost = row.allowGuest === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "$", row.guestCost.toFixed(2)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "text-muted"
        }, "N/A");
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "$", row.registerCost.toFixed(2), " / ", guestCost, " / ", mealCost);
      }
    }, {
      column: 'registrationCount',
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("abbr", {
        title: "Registrations"
      }, "Reg."),
      sort: true,
      style: {
        width: '100px'
      },
      className: 'text-right',
      callback: function callback(row) {
        return regLink(row);
      }
    }, {
      label: 'Soft cap',
      callback: function callback(row) {
        return warning(row);
      }
    }, {
      column: 'eventDate',
      label: 'Event date',
      sort: true,
      callback: function callback(session) {
        var eventDateObj = new Date();
        var now = new Date();
        eventDateObj.setTime(session.eventDate * 1000);

        if (eventDateObj.getDate() === now.getDate() && eventDateObj.getFullYear() === now.getFullYear() && eventDateObj.getMonth() === now.getMonth()) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            href: "conference/Admin/Session/".concat(session.id, "/signin"),
            className: "btn btn-success btn-sm"
          }, "Today!");
        } else {
          return eventDateObj.toDateString();
        }
      }
    }, {
      column: 'active',
      callback: function callback(row, key) {
        return _this.activeButton(row, key);
      }
    }];
    _this.state.currentConference = {};
    _this.state.currentConferenceKey = 0;
    _this.locations = [];
    _this.conferences = [];
    _this.state.resource = Object.assign({}, _this.defaultResource);
    _this.setCurrentConference = _this.setCurrentConference.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.activeButton = _this.activeButton.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Session, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_Shared_Locations__WEBPACK_IMPORTED_MODULE_11__["default"])(this);
      this.loadConferences();

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Session.prototype), "componentDidMount", this).call(this);
    }
  }, {
    key: "deleteResource",
    value: function deleteResource(key, e) {
      e.preventDefault();

      if (prompt('Are you sure you want to delete this item along with all its contents (registrations, payments, etc.)?\nType DELETE if you are sure.') === 'DELETE') {
        this.sendDelete(key);
      }
    }
  }, {
    key: "copy",
    value: function copy(key, e) {
      var _this2 = this;

      e.preventDefault();
      var id = this.state.listing[key].id;
      $.ajax({
        url: "conference/Admin/Session/copy",
        data: {
          id: id
        },
        dataType: 'json',
        type: 'post',
        success: function success() {
          _this2.load();
        },
        error: function error() {
          _this2.setMessage('Could not create copy');
        }
      });
    }
  }, {
    key: "activeButton",
    value: function activeButton(row, key) {
      if (row.active === 1) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "btn btn-success btn-sm",
          onClick: this.toggleActive.bind(this, key)
        }, "Active");
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "btn btn-danger btn-sm",
          onClick: this.toggleActive.bind(this, key)
        }, "Not active");
      }
    }
  }, {
    key: "toggleActive",
    value: function toggleActive(key) {
      var _this3 = this;

      var listing = this.state.listing;
      var row = listing[key];
      row.active = row.active === 1 ? 0 : 1;
      $.ajax({
        url: 'conference/Admin/Session/' + row.id,
        data: {
          varname: 'active',
          value: row.active
        },
        dataType: 'json',
        type: 'patch',
        success: function success() {
          _this3.setState({
            listing: listing
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "load",
    value: function load() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Session.prototype), "load", this).call(this, {
        conferenceId: this.props.conferenceId
      });
    }
  }, {
    key: "loadConferences",
    value: function loadConferences() {
      var _this4 = this;

      $.ajax({
        url: 'conference/Admin/Conference',
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          _this4.conferences = data.listing;

          _this4.setState({
            currentConference: data.listing[0]
          });
        },
        error: function error() {
          _this4.setMessage('Could not access server');
        }
      });
    }
  }, {
    key: "setCurrentConference",
    value: function setCurrentConference(e) {
      var currentConferenceKey = e.target.value;
      var currentConference = Object.assign({}, this.conferences[currentConferenceKey]);
      this.setState({
        currentConferenceKey: currentConferenceKey,
        currentConference: currentConference
      });
    }
  }, {
    key: "form",
    value: function form() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SessionForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        resource: this.state.resource,
        conference: this.state.currentConference,
        update: this.update,
        locations: this.locations,
        save: this.save,
        close: this.finish
      });
    }
  }, {
    key: "getSearch",
    value: function getSearch() {
      var _this5 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_12__["NavbarSearch"], {
        value: this.state.search,
        placeholder: "Search: title or date",
        onChange: function onChange(e) {
          _this5.updateSearch(e.target.value);
        }
      });
    }
  }, {
    key: "navLeft",
    value: function navLeft() {
      var left = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Session.prototype), "navLeft", this).call(this);

      left.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_12__["NavbarLink"], {
        href: "conference/Admin/Conference"
      }, "Back to conferences"));
      return left;
    }
  }, {
    key: "title",
    value: function title() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "Sessions for ", this.state.currentConference.title);
    }
  }, {
    key: "overlay",
    value: function overlay() {
      var title = this.state.currentConference.title;
      return {
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "session-form"
        }, this.form()),
        title: (this.state.resource.id > 0 ? 'Update' : 'Create') + ' session for conference: ' + title,
        close: this.load
      };
    }
  }]);

  return Session;
}(_essappstate_canopy_listing__WEBPACK_IMPORTED_MODULE_9___default.a);


react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Session, {
  conferenceId: conferenceId,
  locationId: locationId,
  sessionSoftCap: sessionSoftCap
}), document.getElementById('Session'));

/***/ }),

/***/ "./javascript/Shared/Dollarize.jsx":
/*!*****************************************!*\
  !*** ./javascript/Shared/Dollarize.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Dollarize = function Dollarize(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-text"
  }, "$")), children);
};

Dollarize.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element])
};
/* harmony default export */ __webpack_exports__["default"] = (Dollarize);

/***/ }),

/***/ "./javascript/Shared/Locations.js":
/*!****************************************!*\
  !*** ./javascript/Shared/Locations.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global $ */
var loadLocations = function loadLocations(resource) {
  $.ajax({
    url: 'conference/Admin/Location',
    dataType: 'json',
    type: 'get',
    success: function success(data) {
      resource.locations = data.listing;
    },
    error: function error() {
      resource.setMessage('Could not access server');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (loadLocations);

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

/***/ "./node_modules/@essappstate/canopy-react-inputfield/build/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@essappstate/canopy-react-inputfield/build/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){e.exports=r(5)()},function(e,t,r){"use strict";e.exports=r(3)},function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return p}),r.d(t,"RequiredIcon",function(){return y});var n=r(1),o=r.n(n),u=r(0),a=r.n(u);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=s(t).call(this,e))||"object"!==l(o)&&"function"!=typeof o?c(n):o).state={empty:!1},r.handleBlur=r.handleBlur.bind(c(r)),r.handleChange=r.handleChange.bind(c(r)),r}var r,u,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,n["Component"]),r=t,(u=[{key:"handleBlur",value:function(e){0===e.target.value.length?(this.setState({empty:!0}),this.props.onEmpty&&this.props.onEmpty()):this.setState({empty:!1}),this.props.blur&&this.props.blur()}},{key:"emptyMessage",value:function(){return this.props.label.length>0?this.props.label+" may not be empty":"Field may not be empty"}},{key:"select",value:function(e){e.target.select()}},{key:"handleChange",value:function(e){e.target.value.length>0&&this.setState({empty:!1}),this.props.change(e)}},{key:"render",value:function(){var e;e=null!==this.props.errorMessage&&""!==this.props.errorMessage||this.state.empty&&this.props.required&&!1===this.props.disableRequireCheck?"form-control error-highlight":"form-control";var t,r,n=this.props.required?o.a.createElement(y,null):null,u=o.a.createElement("input",{id:this.props.iid,type:this.props.type,name:this.props.name,value:null===this.props.value?"":this.props.value,className:e,onChange:this.handleChange,onBlur:this.handleBlur,onClick:!0===this.props.selectOnClick?this.select:null,disabled:this.props.disabled,size:this.props.size,maxLength:this.props.maxLength,placeholder:this.props.placeholder,autoComplete:this.props.autocomplete?"true":"false"});this.props.wrap&&(u=this.props.wrap(u)),this.props.errorMessage?t=this.props.errorMessage:this.state.empty&&this.props.required&&!1===this.props.disableRequireCheck&&(t=this.emptyMessage()),this.props.label.length>0&&(r=o.a.createElement("label",{htmlFor:this.props.iid},this.props.label,n));var a=t?o.a.createElement("div",{className:"badge badge-danger"},t):null;return o.a.createElement("div",{className:"form-group"},r,u,a)}}])&&i(r.prototype,u),a&&i(r,a),t}();p.defaultProps={label:"",type:"text",name:"",value:"",change:null,blur:null,required:!1,id:null,autocomplete:!1,placeholder:null,errorMessage:"",disabled:!1,size:null,maxLength:null,selectOnClick:!0,wrap:null,onEmpty:null,disableRequireCheck:!1},p.propTypes={name:a.a.string,label:a.a.string,type:a.a.string,value:a.a.oneOfType([a.a.string,a.a.number]),change:a.a.func,blur:a.a.func,placeholder:a.a.string,errorMessage:a.a.string,iid:a.a.string,autocomplete:a.a.bool,required:a.a.bool,disabled:a.a.bool,size:a.a.oneOfType([a.a.number,a.a.string]),maxLength:a.a.number,wrap:a.a.func,selectOnClick:a.a.bool,onEmpty:a.a.func,disableRequireCheck:a.a.bool};var y=function(){return o.a.createElement("i",{className:"fas fa-asterisk text-danger","data-fa-transform":"shrink-7 up-6"})}},function(e,t,r){"use strict";
/** @license React v16.9.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(4),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.suspense_list"):60120,d=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function S(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||g}function _(){}function k(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||g}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw v(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=S.prototype;var j=k.prototype=new _;j.constructor=k,n(j,S.prototype),j.isPureReactComponent=!0;var w={current:null},C={suspense:null},E={current:null},x=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,r){var n=void 0,o={},a=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:u,type:e,key:a,ref:l,props:o,_owner:E.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var T=/\/+/g,q=[];function M(e,t,r,n){if(q.length){var o=q.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>q.length&&q.push(e)}function L(e,t,r){return null==e?0:function e(t,r,n,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var i=!1;if(null===t)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case u:case a:i=!0}}if(i)return n(o,t,""===r?"."+A(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var s=0;s<t.length;s++){var c=r+A(l=t[s],s);i+=e(l,c,n,o)}else if(null===t||"object"!=typeof t?c=null:c="function"==typeof(c=m&&t[m]||t["@@iterator"])?c:null,"function"==typeof c)for(t=c.call(t),s=0;!(l=t.next()).done;)i+=e(l=l.value,c=r+A(l,s++),n,o);else if("object"===l)throw n=""+t,v(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return i}(e,"",t,r)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function N(e,t){e.func.call(e.context,t,e.count++)}function B(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,function(e){return e}):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(T,"$&/")+"/"),L(e,B,t=M(t,u,n,o)),I(t)}function F(){var e=w.current;if(null===e)throw v(Error(321));return e}var z={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;L(e,N,t=M(null,null,t,r)),I(t)},count:function(e){return L(e,function(){return null},null)},toArray:function(e){var t=[];return U(e,t,null,function(e){return e}),t},only:function(e){if(!$(e))throw v(Error(143));return e}},createRef:function(){return{current:null}},Component:S,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:l,Profiler:s,StrictMode:i,Suspense:y,unstable_SuspenseList:h,createElement:R,cloneElement:function(e,t,r){if(null==e)throw v(Error(267),e);var o=void 0,a=n({},e.props),l=e.key,i=e.ref,s=e._owner;if(null!=t){void 0!==t.ref&&(i=t.ref,s=E.current),void 0!==t.key&&(l=""+t.key);var c=void 0;for(o in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)x.call(t,o)&&!P.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==c?c[o]:t[o])}if(1===(o=arguments.length-2))a.children=r;else if(1<o){c=Array(o);for(var f=0;f<o;f++)c[f]=arguments[f+2];a.children=c}return{$$typeof:u,type:e.type,key:l,ref:i,props:a,_owner:s}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var r=C.suspense;C.suspense=void 0===t?null:t;try{e()}finally{C.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:w,ReactCurrentBatchConfig:C,ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n}},D={default:z},V=D&&z||D;e.exports=V.default||V},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,l,i=a(e),s=1;s<arguments.length;s++){for(var c in r=Object(arguments[s]))o.call(r,c)&&(i[c]=r[c]);if(n){l=n(r);for(var f=0;f<l.length;f++)u.call(r,l[f])&&(i[l[f]]=r[l[f]])}}return i}},function(e,t,r){"use strict";var n=r(6);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,a){if(a!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TZXNzaW9uL1Nlc3Npb25Gb3JtLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvU2Vzc2lvbi9UaW1lU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvU2Vzc2lvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TaGFyZWQvRG9sbGFyaXplLmpzeCIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1NoYXJlZC9Mb2NhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TaGFyZWQvc3R5bGUuY3NzPzBhMjUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blc3NhcHBzdGF0ZS9jYW5vcHktcmVhY3QtaW5wdXRmaWVsZC9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1NoYXJlZC9zdHlsZS5jc3MiXSwibmFtZXMiOlsiU2Vzc2lvbkZvcm0iLCJwcm9wcyIsInN0YXRlIiwiZXJyb3JzIiwidGl0bGUiLCJldmVudERhdGUiLCJzdGFydFRpbWUiLCJzaWdudXBEYXRlIiwiZXJyb3JGb3VuZCIsInRpdGxlUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJudW1iZXJDaGFuZ2UiLCJiaW5kIiwiY2hlY2siLCJzZXREYXRlIiwibWVhbFNlcnZpY2UiLCJjaGVja1NhdmUiLCJjaGVja0JlZm9yZVNhdmUiLCJjb3B5U2Vzc2lvbkRhdGUiLCJzaWdudXBOb3ciLCJhbGxvd0d1ZXN0IiwiY3VycmVudCIsImZvY3VzIiwidmFybmFtZSIsImRhdGUiLCJ1cGRhdGUiLCJnZXRUaW1lIiwidmFsdWUiLCJkYXlqcyIsInJlc291cmNlIiwic2V0IiwidW5peCIsImlucHV0IiwibG9jYXRpb25JZCIsIm9wdGlvbnMiLCJsb2NhdGlvbnMiLCJtYXAiLCJrZXkiLCJpZCIsImUiLCJ0YXJnZXQiLCJyZXBsYWNlIiwiZW5kVGltZSIsInNpZ251cFN0YXJ0Iiwic2lnbnVwRW5kIiwibGVuZ3RoIiwiZXZlbnREYXRlT2JqIiwiRGF0ZSIsImxhdGVOaWdodCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwibGF0ZU5pZ2h0VW5peCIsInNldFN0YXRlIiwicGFyc2VJbnQiLCJyZWdpc3RyYXRpb25Db3VudCIsImNvbmZpcm0iLCJzYXZlIiwiTWF0aCIsInJvdW5kIiwibm93Iiwic2Vzc2lvbiIsIm1lc3NhZ2UiLCJtZWFsQ29zdCIsIm1lYWxJbmNsdWRlZCIsInJlZ2lzdGVyQ29zdCIsImd1ZXN0Q29zdCIsInNvZnRDYXAiLCJhdHRlbmRhbmNlQ2FwIiwiZGF5cyIsImV2ZW50RGF0ZU9iamVjdCIsInNpZ251cFN0YXJ0T2JqZWN0Iiwic2lnbnVwRW5kT2JqZWN0Iiwic3RhcnRUaW1lRXJyb3IiLCJzaWdudXBEYXRlRXJyb3IiLCJldmVudERhdGVFcnJvciIsImNvcHlCdXR0b24iLCJmb3JtYXQiLCJ3YXJuaW5nIiwiY2xlYXJFcnJvciIsImxvY2F0aW9uU2VsZWN0IiwiZG9sbGFyaXplIiwibWVhbE1lc3NhZ2UiLCJjbG9zZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImZ1bmMiLCJhcnJheSIsImNvbmZlcmVuY2UiLCJpbnRUb1N0cmluZyIsInRpbWVWYXIiLCJ0b1N0cmluZyIsImdldEN1cnJlbnRBbVBtIiwidGltZUludGVnZXIiLCJnZXRIb3VyTWF0Y2giLCJob3VySW50ZWdlciIsIlRpbWVTZWxlY3QiLCJ0aW1lIiwib25DaGFuZ2UiLCJ0aW1lSW50IiwiYW1wbSIsImhvdXJJbnQiLCJob3VyU3RyIiwiaG91ck1hdGNoIiwibWludXRlSW50IiwibWludXRlU3RyIiwiaGFuZGxlQU1QTSIsInNlbmRDaGFuZ2UiLCJ0aW1lU3RyIiwiaGFuZGxlSG91ciIsImhhbmRsZU1pbnV0ZSIsInN0cmluZyIsInJlZ0xpbmsiLCJ2YWwiLCJyb3ciLCJzZXNzaW9uU29mdENhcCIsIlNlc3Npb24iLCJyZXN0VXJsIiwibGFiZWwiLCJjb2VmZiIsImRlZmF1bHRSZXNvdXJjZSIsImNvbmZlcmVuY2VJZCIsImNhcFdhcm5pbmdTZW50IiwiYWN0aXZlIiwiZHJvcGRvd24iLCJ3aWR0aCIsImVkaXRSZXNvdXJjZSIsImNvcHkiLCJkZWxldGVSZXNvdXJjZSIsImNvbHVtbnMiLCJjb2x1bW4iLCJjYWxsYmFjayIsInN0eWxlIiwic29ydCIsInRvRml4ZWQiLCJjbGFzc05hbWUiLCJzZXRUaW1lIiwidG9EYXRlU3RyaW5nIiwiYWN0aXZlQnV0dG9uIiwiY3VycmVudENvbmZlcmVuY2UiLCJjdXJyZW50Q29uZmVyZW5jZUtleSIsImNvbmZlcmVuY2VzIiwiT2JqZWN0IiwiYXNzaWduIiwic2V0Q3VycmVudENvbmZlcmVuY2UiLCJsb2FkTG9jYXRpb25zIiwibG9hZENvbmZlcmVuY2VzIiwicHJldmVudERlZmF1bHQiLCJwcm9tcHQiLCJzZW5kRGVsZXRlIiwibGlzdGluZyIsIiQiLCJhamF4IiwidXJsIiwiZGF0YSIsImRhdGFUeXBlIiwidHlwZSIsInN1Y2Nlc3MiLCJsb2FkIiwiZXJyb3IiLCJzZXRNZXNzYWdlIiwidG9nZ2xlQWN0aXZlIiwiZmluaXNoIiwic2VhcmNoIiwidXBkYXRlU2VhcmNoIiwibGVmdCIsInB1c2giLCJjb250ZW50IiwiZm9ybSIsIkxpc3RpbmciLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJEb2xsYXJpemUiLCJjaGlsZHJlbiIsIm9uZU9mVHlwZSIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Es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QXFELDZGQUE2RixXQUFXLFdBQVcsSUFBSSxVQUFVLFdBQVcsdUJBQXVCLGlCQUFpQjtBQUNyME07QUFDQTtBQUNBO0FBQ0E7QUFDQSwrR0FBK0csY0FBYyx3RkFBd0YsaUJBQWlCLHFCQUFxQixJQUFJLDJCQUEyQix3QkFBd0IsNkRBQTZELFlBQVksS0FBSyxLQUFLLG9DQUFvQyxnRUFBZ0UsWUFBWSxvQkFBb0IsU0FBUywyREFBMkQsT0FBTyx1REFBdUQsY0FBYyxTQUFTLFVBQVUsK0JBQStCLHVCQUF1QixtQkFBbUIsS0FBSyw2REFBNkQsTUFBTSxPQUFPLFlBQVksV0FBVyx1Q0FBdUMsVUFBVSxpQkFBaUIsYUFBYSxXQUFXLGNBQWMsY0FBYywyQ0FBMkMsd0JBQXdCLFVBQVUsbU1BQW1NLHNDQUFzQyxhQUFhLFNBQVMsZUFBZSxPQUFPLDJNQUEyTSx3QkFBd0IsaUJBQWlCLGFBQWEseURBQXlELEc7Ozs7Ozs7Ozs7O0FDYjdtRCwyQkFBMkIsbUJBQU8sQ0FBQyxnR0FBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGNBQWMsY0FBYyxHQUFHLGNBQWMsZUFBZSxHQUFHLFdBQVcsbUJBQW1CLHNCQUFzQixHQUFHLG9CQUFvQixvQkFBb0IsR0FBRyxlQUFlLGVBQWUsR0FBRzs7QUFFek4iLCJmaWxlIjoiU2Vzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJTZXNzaW9uXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9qYXZhc2NyaXB0L1Nlc3Npb24vaW5kZXguanN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJ1xuaW1wb3J0ICdyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3MnXG5pbXBvcnQgVGltZVNlbGVjdCBmcm9tICcuL1RpbWVTZWxlY3QnXG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICdAZXNzYXBwc3RhdGUvY2Fub3B5LXJlYWN0LWlucHV0ZmllbGQnXG5pbXBvcnQgQmlnQ2hlY2tib3ggZnJvbSAnQGVzc2FwcHN0YXRlL2Nhbm9weS1yZWFjdC1iaWdjaGVja2JveCdcbmltcG9ydCBEb2xsYXJpemUgZnJvbSAnLi4vU2hhcmVkL0RvbGxhcml6ZSdcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcblxuY2xhc3MgU2Vzc2lvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIGV2ZW50RGF0ZTogbnVsbCxcbiAgICAgICAgc3RhcnRUaW1lOiBudWxsLFxuICAgICAgICBzaWdudXBEYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgZXJyb3JGb3VuZDogZmFsc2VcbiAgICB9XG4gICAgdGhpcy50aXRsZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5udW1iZXJDaGFuZ2UgPSB0aGlzLm51bWJlckNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGVjayA9IHRoaXMuY2hlY2suYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0RGF0ZSA9IHRoaXMuc2V0RGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5tZWFsU2VydmljZSA9IHRoaXMubWVhbFNlcnZpY2UuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hlY2tTYXZlID0gdGhpcy5jaGVja1NhdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hlY2tCZWZvcmVTYXZlID0gdGhpcy5jaGVja0JlZm9yZVNhdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuY29weVNlc3Npb25EYXRlID0gdGhpcy5jb3B5U2Vzc2lvbkRhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuc2lnbnVwTm93ID0gdGhpcy5zaWdudXBOb3cuYmluZCh0aGlzKVxuICAgIHRoaXMuYWxsb3dHdWVzdCA9IHRoaXMuYWxsb3dHdWVzdC5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRpdGxlUmVmLmN1cnJlbnQuZm9jdXMoKVxuICB9XG5cbiAgc2V0RGF0ZSh2YXJuYW1lLCBkYXRlKSB7XG4gICAgdGhpcy5wcm9wcy51cGRhdGUodmFybmFtZSwgZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKVxuICAgIHRoaXMuY2hlY2soKVxuICB9XG5cbiAgYWxsb3dHdWVzdCh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMudXBkYXRlKCdhbGxvd0d1ZXN0JywgdmFsdWUgPyAxIDogMClcbiAgfVxuXG4gIGNvcHlTZXNzaW9uRGF0ZSgpIHtcbiAgICBjb25zdCBldmVudERhdGUgPSBkYXlqcyh0aGlzLnByb3BzLnJlc291cmNlLmV2ZW50RGF0ZSAqIDEwMDApXG4gICAgICAuc2V0KCdob3VyJywgMTIpXG4gICAgICAudW5peCgpXG4gICAgdGhpcy5wcm9wcy51cGRhdGUoJ3NpZ251cEVuZCcsIGV2ZW50RGF0ZSlcbiAgICB0aGlzLmNoZWNrKClcbiAgfVxuXG4gIGRvbGxhcml6ZShpbnB1dCkge1xuICAgIHJldHVybiA8RG9sbGFyaXplIGtleT1cIjFcIj57aW5wdXR9PC9Eb2xsYXJpemU+XG4gIH1cblxuICBsb2NhdGlvblNlbGVjdChsb2NhdGlvbklkKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucHJvcHMubG9jYXRpb25zLm1hcCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e3ZhbHVlLmlkfT5cbiAgICAgICAgICB7dmFsdWUudGl0bGV9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWxlY3RcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgdmFsdWU9e2xvY2F0aW9uSWR9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLnVwZGF0ZS5iaW5kKHRoaXMsICdsb2NhdGlvbklkJyl9PlxuICAgICAgICB7b3B0aW9uc31cbiAgICAgIDwvc2VsZWN0PlxuICAgIClcbiAgfVxuXG4gIG51bWJlckNoYW5nZSh2YXJuYW1lLCBlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXlxcZFxcLl0vZywgJycpXG4gICAgdGhpcy5wcm9wcy51cGRhdGUodmFybmFtZSwgdmFsdWUpXG4gIH1cblxuICBjaGVjaygpIHtcbiAgICBsZXQgZXJyb3JGb3VuZCA9IGZhbHNlXG4gICAgY29uc3QgZXJyb3JzID0ge1xuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICBldmVudERhdGU6IG51bGwsXG4gICAgICBzdGFydFRpbWU6IG51bGwsXG4gICAgICBzaWdudXBEYXRlOiBudWxsXG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgZXZlbnREYXRlLFxuICAgICAgc3RhcnRUaW1lLFxuICAgICAgZW5kVGltZSxcbiAgICAgIHNpZ251cFN0YXJ0LFxuICAgICAgc2lnbnVwRW5kXG4gICAgfSA9IHRoaXMucHJvcHMucmVzb3VyY2VcbiAgICBpZiAodGl0bGUubGVuZ3RoID09PSAwKSB7XG4gICAgICBlcnJvcnMudGl0bGUgPSAnVGl0bGUgbWF5IG5vdCBiZSBlbXB0eSdcbiAgICAgIGVycm9yRm91bmQgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0VGltZSA+PSBlbmRUaW1lKSB7XG4gICAgICBlcnJvcnMuc3RhcnRUaW1lID0gJ1Nlc3Npb24gc3RhcnQgdGltZSBtdXN0IGJlIHByaW9yIHRvIGVuZCB0aW1lJ1xuICAgICAgZXJyb3JGb3VuZCA9IHRydWVcbiAgICB9XG4gICAgaWYgKHNpZ251cFN0YXJ0ID49IHNpZ251cEVuZCkge1xuICAgICAgZXJyb3JzLnNpZ251cERhdGUgPSAnU2lnbiB1cCBzdGFydCBkYXRlIG11c3QgYmUgcHJpb3IgdG8gZW5kIHRpbWUnXG4gICAgICBlcnJvckZvdW5kID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50RGF0ZU9iaiA9IG5ldyBEYXRlKGV2ZW50RGF0ZSAqIDEwMDApXG4gICAgY29uc3QgbGF0ZU5pZ2h0ID0gbmV3IERhdGUoXG4gICAgICBldmVudERhdGVPYmouZ2V0RnVsbFllYXIoKSxcbiAgICAgIGV2ZW50RGF0ZU9iai5nZXRNb250aCgpLFxuICAgICAgZXZlbnREYXRlT2JqLmdldERhdGUoKSxcbiAgICAgIDIzLFxuICAgICAgNTksXG4gICAgICA1OVxuICAgIClcbiAgICBjb25zdCBsYXRlTmlnaHRVbml4ID0gbGF0ZU5pZ2h0LmdldFRpbWUoKSAvIDEwMDBcblxuICAgIGlmIChsYXRlTmlnaHRVbml4IDwgc2lnbnVwU3RhcnQpIHtcbiAgICAgIGVycm9ycy5ldmVudERhdGUgPSAnU2Vzc2lvbiBkYXRlIG11c3QgYmUgYWZ0ZXIgc2lnbiB1cCBkYXRlLidcbiAgICAgIGVycm9yRm91bmQgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKGxhdGVOaWdodFVuaXggPCBzaWdudXBFbmQpIHtcbiAgICAgIGVycm9ycy5zaWdudXBEYXRlID1cbiAgICAgICAgJ1NpZ24gdXAgZW5kIGRhdGUgbXVzdCBiZSBiZWZvcmUgb3IgZXF1YWwgdG8gc2Vzc2lvbiBkYXRlLidcbiAgICAgIGVycm9yRm91bmQgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JGb3VuZCwgZXJyb3JzfSlcbiAgICByZXR1cm4gIWVycm9yRm91bmRcbiAgfVxuXG4gIGNoZWNrU2F2ZSh2YXJuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMudXBkYXRlKHZhcm5hbWUsIHZhbHVlKVxuICAgIHRoaXMuY2hlY2sodmFybmFtZSlcbiAgfVxuXG4gIGNoZWNrQmVmb3JlU2F2ZSgpIHtcbiAgICBpZiAodGhpcy5jaGVjaygpKSB7XG4gICAgICBpZiAocGFyc2VJbnQodGhpcy5wcm9wcy5yZXNvdXJjZS5yZWdpc3RyYXRpb25Db3VudCkgPiAwKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb25maXJtKFxuICAgICAgICAgICAgJ0lmIHlvdSBtYWRlIHByaWNlIGNoYW5nZXMsIGN1cnJlbnQgcmVnaXN0cmF0aW9ucyB3aWxsIGhhdmUgaW5jb3JyZWN0IHByaWNlcy4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHVwZGF0ZSB0aGlzIHNlc3Npb24/J1xuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zYXZlKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zYXZlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhckVycm9yKHZhcm5hbWUpIHtcbiAgICBjb25zdCB7ZXJyb3JzfSA9IHRoaXMuc3RhdGVcbiAgICBlcnJvcnNbdmFybmFtZV0gPSBudWxsXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgfVxuXG4gIG1lYWxTZXJ2aWNlKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy51cGRhdGUoJ21lYWxTZXJ2aWNlJywgdmFsdWUgPyAxIDogMClcbiAgfVxuXG4gIHNpZ251cE5vdygpIHtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZSgnc2lnbnVwU3RhcnQnLCBNYXRoLnJvdW5kKERhdGUubm93KCkgLyAxMDAwKSlcbiAgICB0aGlzLmNoZWNrKClcbiAgfVxuXG4gIG1lYWxNZXNzYWdlKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSB0aGlzLnByb3BzLnJlc291cmNlXG5cbiAgICBpZiAoc2Vzc2lvbi5tZWFsU2VydmljZSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBtZXNzYWdlXG4gICAgICBpZiAocGFyc2VJbnQoc2Vzc2lvbi5tZWFsQ29zdCkgPT09IDApIHtcbiAgICAgICAgaWYgKHNlc3Npb24ubWVhbEluY2x1ZGVkKSB7XG4gICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICAnTm8gbWVhbCBjb3N0IGJ1dCBpbmNsdWRlZCBpbmRpY2F0ZXMgYSBtZWFsIGlzIHByb3ZpZGVkIHRvIHRoZSByZWdpc3RlcmVkIG9ubHknXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVzc2FnZSA9ICdObyBtZWFsIGNvc3QsIG5vdCBpbmNsdWRlZCBnaXZlcyBubyBtZXNzYWdlIHRvIHRoZSB2aXNpdG9yJ1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2Vzc2lvbi5tZWFsSW5jbHVkZWQpIHtcbiAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgICdNZWFsIGNvc3QgYW5kIGluY2x1ZGVkIGluZGljYXRlcyBhIG1lYWwgaXMgcHJvdmlkZWQgdG8gcmVnaXN0ZXJlZCBhbmQgZXh0cmEgdGlja2V0cyBjYW4gYmUgYm91Z2h0J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgJ01lYWwgY29zdCBhbmQgbm90IGluY2x1ZGVkIHNob3dzIHRoZSBwcmljZSBvZiBtZWFsIHRpY2tldHMgYnV0IGRvZXMgbm90IG1lbnRpb24gaW5jbHVzaW9uJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzbWFsbCBiZy1saWdodCBtYi0yXCI+e21lc3NhZ2V9PC9kaXY+XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgZXZlbnREYXRlLFxuICAgICAgc3RhcnRUaW1lLFxuICAgICAgZW5kVGltZSxcbiAgICAgIHNpZ251cFN0YXJ0LFxuICAgICAgc2lnbnVwRW5kLFxuICAgICAgcmVnaXN0ZXJDb3N0LFxuICAgICAgZ3Vlc3RDb3N0LFxuICAgICAgbWVhbEluY2x1ZGVkLFxuICAgICAgbWVhbENvc3QsXG4gICAgICBzb2Z0Q2FwLFxuICAgICAgYXR0ZW5kYW5jZUNhcCxcbiAgICAgIGxvY2F0aW9uSWQsXG4gICAgICBkYXlzLFxuICAgICAgbWVhbFNlcnZpY2UsXG4gICAgICBhbGxvd0d1ZXN0LFxuICAgICAgcmVnaXN0cmF0aW9uQ291bnRcbiAgICB9ID0gdGhpcy5wcm9wcy5yZXNvdXJjZVxuICAgIGNvbnN0IHt1cGRhdGV9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBldmVudERhdGVPYmplY3RcbiAgICBpZiAoZXZlbnREYXRlKSB7XG4gICAgICBldmVudERhdGVPYmplY3QgPSBuZXcgRGF0ZShldmVudERhdGUgKiAxMDAwKVxuICAgIH0gZWxzZSB7XG4gICAgICBldmVudERhdGVPYmplY3QgPSBuZXcgRGF0ZSgpXG4gICAgfVxuICAgIGxldCBzaWdudXBTdGFydE9iamVjdFxuICAgIGlmIChzaWdudXBTdGFydCkge1xuICAgICAgc2lnbnVwU3RhcnRPYmplY3QgPSBuZXcgRGF0ZShzaWdudXBTdGFydCAqIDEwMDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZ251cFN0YXJ0T2JqZWN0ID0gbmV3IERhdGUoKVxuICAgIH1cblxuICAgIGxldCBzaWdudXBFbmRPYmplY3RcbiAgICBpZiAoc2lnbnVwU3RhcnQpIHtcbiAgICAgIHNpZ251cEVuZE9iamVjdCA9IG5ldyBEYXRlKHNpZ251cEVuZCAqIDEwMDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZ251cEVuZE9iamVjdCA9IG5ldyBEYXRlKClcbiAgICB9XG5cbiAgICBjb25zdCB7ZXJyb3JzfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgc3RhcnRUaW1lRXJyb3JcbiAgICBpZiAoZXJyb3JzLnN0YXJ0VGltZSkge1xuICAgICAgc3RhcnRUaW1lRXJyb3IgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e2Vycm9ycy5zdGFydFRpbWV9PC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgbGV0IHNpZ251cERhdGVFcnJvclxuICAgIGlmIChlcnJvcnMuc2lnbnVwRGF0ZSkge1xuICAgICAgc2lnbnVwRGF0ZUVycm9yID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntlcnJvcnMuc2lnbnVwRGF0ZX08L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgZXZlbnREYXRlRXJyb3JcbiAgICBpZiAoZXJyb3JzLmV2ZW50RGF0ZSkge1xuICAgICAgZXZlbnREYXRlRXJyb3IgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e2Vycm9ycy5ldmVudERhdGV9PC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgbGV0IGNvcHlCdXR0b25cblxuICAgIGlmIChcbiAgICAgIGRheWpzKHNpZ251cEVuZCAqIDEwMDApLmZvcm1hdCgnWVlZWU1NREQnKSAhPT1cbiAgICAgIGRheWpzKGV2ZW50RGF0ZSAqIDEwMDApLmZvcm1hdCgnWVlZWU1NREQnKVxuICAgICkge1xuICAgICAgY29weUJ1dHRvbiA9IChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLmNvcHlTZXNzaW9uRGF0ZX0+XG4gICAgICAgICAgQ29weSBzZXNzaW9uIGRhdGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApXG4gICAgfVxuXG4gICAgbGV0IHdhcm5pbmdcbiAgICBpZiAocGFyc2VJbnQocmVnaXN0cmF0aW9uQ291bnQpID4gMCkge1xuICAgICAgd2FybmluZyA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBhbGVydCBhbGVydC13YXJuaW5nXCI+XG4gICAgICAgICAgICA8c3Ryb25nPldhcm5pbmc8L3N0cm9uZz46IHRoZXJlIGFyZSBjdXJyZW50bHkgcmVnaXN0cmF0aW9ucyBmb3IgdGhpc1xuICAgICAgICAgICAgc2Vzc2lvbi4gQ2hhbmdpbmcgcHJpY2VzIGlzIG5vdCBhZHZpc2VkLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge3dhcm5pbmd9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICBUaXRsZVxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlciBmYXMgZmEtYXN0ZXJpc2sgZmEteHNcIiAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIHJlZj17dGhpcy50aXRsZVJlZn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7XG4gICAgICAgICAgICAgICAgZXJyb3JzLnRpdGxlID8gJ2JvcmRlci1kYW5nZXInIDogbnVsbFxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmNsZWFyRXJyb3IuYmluZCh0aGlzLCAndGl0bGUnKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Vycm9ycy50aXRsZSA/IGVycm9ycy50aXRsZSA6IG51bGx9XG4gICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5jaGVja31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZS5iaW5kKG51bGwsICd0aXRsZScpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtdC0zXCI+TG9jYXRpb248L2xhYmVsPlxuICAgICAgICAgICAge3RoaXMubG9jYXRpb25TZWxlY3QobG9jYXRpb25JZCl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+U2Vzc2lvbiBkYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2V2ZW50RGF0ZU9iamVjdH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNldERhdGUuYmluZCh0aGlzLCAnZXZlbnREYXRlJyl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTSBkLCB5eXl5XCJcbiAgICAgICAgICAgICAgICAvPnsnICd9XG4gICAgICAgICAgICAgICAge2V2ZW50RGF0ZUVycm9yfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5TZXNzaW9uIGxlbmd0aDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlzfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZS5iaW5kKG51bGwsICdkYXlzJyl9PlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xIGRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yIGRheXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+MyBkYXlzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQgZGF5czwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41IGRheXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+NiBkYXlzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPjcgZGF5czwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtdC0zXCI+U3RhcnQgdGltZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPFRpbWVTZWxlY3RcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoZWNrU2F2ZS5iaW5kKHRoaXMsICdzdGFydFRpbWUnKX1cbiAgICAgICAgICAgICAgICAgIHRpbWU9e3N0YXJ0VGltZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm10LTNcIj5FbmQgdGltZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPFRpbWVTZWxlY3RcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGUuYmluZChudWxsLCAnZW5kVGltZScpfVxuICAgICAgICAgICAgICAgICAgdGltZT17ZW5kVGltZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3N0YXJ0VGltZUVycm9yfVxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm10LTNcIj5TaWduIHVwIHN0YXJ0PC9sYWJlbD5cbiAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtzaWdudXBTdGFydE9iamVjdH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0RGF0ZS5iaW5kKHRoaXMsICdzaWdudXBTdGFydCcpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdD17dHJ1ZX1cbiAgICAgICAgICAgICAgdGltZUZvcm1hdD1cIkhIOm1tXCJcbiAgICAgICAgICAgICAgdGltZUludGVydmFscz17MTV9XG4gICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU0gZCwgeXl5eSBoOm1tIGFhXCJcbiAgICAgICAgICAgICAgdGltZUNhcHRpb249XCJ0aW1lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuc2lnbnVwTm93fT5cbiAgICAgICAgICAgICAgTm93XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm10LTNcIj5TaWduIHVwIGRlYWRsaW5lPC9sYWJlbD5cbiAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtzaWdudXBFbmRPYmplY3R9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNldERhdGUuYmluZCh0aGlzLCAnc2lnbnVwRW5kJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHNob3dUaW1lU2VsZWN0PXt0cnVlfVxuICAgICAgICAgICAgICB0aW1lRm9ybWF0PVwiSEg6bW1cIlxuICAgICAgICAgICAgICB0aW1lSW50ZXJ2YWxzPXsxNX1cbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTSBkLCB5eXl5IGg6bW0gYWFcIlxuICAgICAgICAgICAgICB0aW1lQ2FwdGlvbj1cInRpbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtjb3B5QnV0dG9ufVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUwXCI+e3NpZ251cERhdGVFcnJvcn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlJlZ2lzdHJhdGlvbiBjb3N0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJlZ2lzdGVyQ29zdFwiXG4gICAgICAgICAgICAgICAgICB3cmFwPXt0aGlzLmRvbGxhcml6ZX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wMFwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwiNlwiXG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI2XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWdpc3RlckNvc3R9XG4gICAgICAgICAgICAgICAgICBjaGFuZ2U9e3RoaXMubnVtYmVyQ2hhbmdlLmJpbmQobnVsbCwgJ3JlZ2lzdGVyQ29zdCcpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxCaWdDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1lYWxzIHNlcnZlZCBkdXJpbmcgc2Vzc2lvblwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e21lYWxTZXJ2aWNlfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU9e3RoaXMubWVhbFNlcnZpY2V9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNhcmQtdGV4dCAke1xuICAgICAgICAgICAgICAgICAgICBtZWFsU2VydmljZSA9PT0gMSA/ICdkLWJsb2NrJyA6ICdkLW5vbmUnXG4gICAgICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMCBtbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMubWVhbE1lc3NhZ2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWVhbCBjb3N0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lYWxDb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXA9e3RoaXMuZG9sbGFyaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lYWxDb3N0fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlPXt0aGlzLm51bWJlckNoYW5nZS5iaW5kKG51bGwsICdtZWFsQ29zdCcpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEJpZ0NoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1lYWwgaW5jbHVkZWQgd2l0aCByZWdpc3RyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bWVhbEluY2x1ZGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlPXt1cGRhdGUuYmluZChudWxsLCAnbWVhbEluY2x1ZGVkJyl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtdC0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8QmlnQ2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJHdWVzdCBzaWdudXAgYWxsb3dlZFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2FsbG93R3Vlc3R9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZT17dGhpcy5hbGxvd0d1ZXN0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjYXJkLXRleHQgJHtcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dHdWVzdCA9PT0gMSA/ICdkLWJsb2NrJyA6ICdkLW5vbmUnXG4gICAgICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMCBtbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkd1ZXN0IGNvc3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ3Vlc3RDb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXA9e3RoaXMuZG9sbGFyaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2d1ZXN0Q29zdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZT17dGhpcy5udW1iZXJDaGFuZ2UuYmluZChudWxsLCAnZ3Vlc3RDb3N0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXQtM1wiPkF0dGVuZGFuY2UgY2FwPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImF0dGVuZGFuY2VDYXBcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjRcIlxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YXR0ZW5kYW5jZUNhcH1cbiAgICAgICAgICAgICAgICAgIGNoYW5nZT17dXBkYXRlLmJpbmQobnVsbCwgJ2F0dGVuZGFuY2VDYXAnKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtdC0zXCI+U29mdCBjYXA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic29mdENhcFwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwiNFwiXG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb2Z0Q2FwfVxuICAgICAgICAgICAgICAgICAgY2hhbmdlPXt1cGRhdGUuYmluZChudWxsLCAnc29mdENhcCcpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1yLTRcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGVja0JlZm9yZVNhdmV9XG4gICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5lcnJvckZvdW5kfT5cbiAgICAgICAgICAgIFNhdmUgc2Vzc2lvblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlfT5cbiAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5TZXNzaW9uRm9ybS5wcm9wVHlwZXMgPSB7XG4gIHJlc291cmNlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICBsb2NhdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgY29uZmVyZW5jZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2F2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNsb3NlOiBQcm9wVHlwZXMuZnVuY1xufVxuZXhwb3J0IGRlZmF1bHQgU2Vzc2lvbkZvcm1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBpbnRUb1N0cmluZyA9IHRpbWVWYXIgPT4ge1xuICByZXR1cm4gdGltZVZhciA8IDEwID8gJzAnICsgdGltZVZhci50b1N0cmluZygpIDogdGltZVZhci50b1N0cmluZygpXG59XG5cbmNvbnN0IGdldEN1cnJlbnRBbVBtID0gdGltZUludGVnZXIgPT4ge1xuICByZXR1cm4gdGltZUludGVnZXIgPj0gMTIwMCA/ICdQTScgOiAnQU0nXG59XG5cbmNvbnN0IGdldEhvdXJNYXRjaCA9IGhvdXJJbnRlZ2VyID0+IHtcbiAgaWYgKGhvdXJJbnRlZ2VyID4gMTIpIHtcbiAgICBob3VySW50ZWdlciAtPSAxMlxuICB9XG4gIHJldHVybiBob3VySW50ZWdlciA9PT0gMCA/ICcxMicgOiBob3VySW50ZWdlci50b1N0cmluZygpXG59XG5cbmNvbnN0IFRpbWVTZWxlY3QgPSAoe3RpbWUsIG9uQ2hhbmdlfSkgPT4ge1xuICBjb25zdCB0aW1lSW50ID0gcGFyc2VJbnQodGltZSlcblxuICBsZXQgYW1wbSA9IGdldEN1cnJlbnRBbVBtKHRpbWVJbnQpXG4gIGxldCBob3VySW50ID0gdGltZUludCAvIDEwMFxuICAvLyBmaXJzdCB0d28gZGlnaXRzIG9mIGhvdXIgc2F2ZWQgaW4gZGF0YWJhc2VcbiAgbGV0IGhvdXJTdHIgPSBpbnRUb1N0cmluZyhob3VySW50KVxuICAvLyB1c2VkIHRvIG1hdGNoIG9uIHRoZSBzZWxlY3RcbiAgbGV0IGhvdXJNYXRjaCA9IGdldEhvdXJNYXRjaChob3VySW50KVxuXG4gIGxldCBtaW51dGVJbnQgPSB0aW1lSW50ICUgMTAwXG4gIGxldCBtaW51dGVTdHIgPSBpbnRUb1N0cmluZyhtaW51dGVJbnQpXG5cbiAgY29uc3QgaGFuZGxlQU1QTSA9IGUgPT4ge1xuICAgIGNvbnN0IHt2YWx1ZX0gPSBlLnRhcmdldFxuICAgIGlmICh2YWx1ZSA9PT0gJ0FNJykge1xuICAgICAgaG91ckludCAtPSAxMlxuICAgICAgaWYgKGhvdXJJbnQgPT09IDEyKSB7XG4gICAgICAgIGhvdXJTdHIgPSAnMDAnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBob3VyU3RyID0gaW50VG9TdHJpbmcoaG91ckludClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdmFsdWUgaXMgcG1cbiAgICAgIC8vIGlmIGhvdXIgaXMgbWlkbmlnaHQgY2hhbmdlIHRvIG5vb25cbiAgICAgIGlmIChob3VySW50ID09PSAwKSB7XG4gICAgICAgIGhvdXJTdHIgPSAnMTInXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBob3VyU3RyID0gaW50VG9TdHJpbmcoaG91ckludClcbiAgICAgIH1cbiAgICB9XG4gICAgc2VuZENoYW5nZShob3VyU3RyLCBtaW51dGVTdHIpXG4gIH1cblxuICBjb25zdCBzZW5kQ2hhbmdlID0gKGhvdXJTdHIsIG1pbnV0ZVN0cikgPT4ge1xuICAgIGNvbnN0IHRpbWVTdHIgPSBob3VyU3RyICsgbWludXRlU3RyXG4gICAgb25DaGFuZ2UodGltZVN0cilcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUhvdXIgPSBlID0+IHtcbiAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICBob3VySW50ID0gcGFyc2VJbnQodmFsdWUpXG4gICAgaWYgKGFtcG0gPT09ICdQTScpIHtcbiAgICAgIGlmIChob3VySW50ID09PSAxMikge1xuICAgICAgICBob3VySW50ID0gMTJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhvdXJJbnQgKz0gMTJcbiAgICAgIH1cbiAgICB9XG4gICAgaG91clN0ciA9IGludFRvU3RyaW5nKGhvdXJJbnQpXG4gICAgc2VuZENoYW5nZShob3VyU3RyLCBtaW51dGVTdHIpXG4gIH1cblxuICBjb25zdCBoYW5kbGVNaW51dGUgPSBlID0+IHtcbiAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICBtaW51dGVJbnQgPSBwYXJzZUludCh2YWx1ZSlcbiAgICBtaW51dGVTdHIgPSBpbnRUb1N0cmluZyhtaW51dGVJbnQpXG4gICAgc2VuZENoYW5nZShob3VyU3RyLCBtaW51dGVTdHIpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IHByLTBcIj5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgdmFsdWU9e2hvdXJNYXRjaH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVIb3VyfT5cbiAgICAgICAgICAgIDxvcHRpb24+MTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbj4yPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uPjM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+NDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbj41PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uPjY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+Nzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbj44PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uPjk8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+MTA8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+MTE8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+MTI8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgcHgtMFwiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2YWx1ZT17bWludXRlU3RyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU1pbnV0ZX0+XG4gICAgICAgICAgICA8b3B0aW9uPjAwPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uPjE1PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uPjMwPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uPjQ1PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IHB4LTBcIj5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXthbXBtfSBvbkNoYW5nZT17aGFuZGxlQU1QTX0+XG4gICAgICAgICAgICA8b3B0aW9uPkFNPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uPlBNPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuVGltZVNlbGVjdC5wcm9wVHlwZXMgPSB7XG4gIHRpbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lU2VsZWN0XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgTGlzdGluZyBmcm9tICdAZXNzYXBwc3RhdGUvY2Fub3B5LWxpc3RpbmcnXG5pbXBvcnQgU2Vzc2lvbkZvcm0gZnJvbSAnLi9TZXNzaW9uRm9ybSdcbmltcG9ydCBsb2FkTG9jYXRpb25zIGZyb20gJy4uL1NoYXJlZC9Mb2NhdGlvbnMnXG5pbXBvcnQge05hdmJhckxpbmssIE5hdmJhclNlYXJjaH0gZnJvbSAnQGVzc2FwcHN0YXRlL3JlYWN0LW5hdmJhcidcbmltcG9ydCAnLi4vU2hhcmVkL3N0eWxlLmNzcydcblxuLyogZ2xvYmFsICQsIGNvbmZlcmVuY2VJZCwgbG9jYXRpb25JZCwgc2Vzc2lvblNvZnRDYXAgKi9cblxuY29uc3QgcmVnTGluayA9IHZhbCA9PiB7XG4gIHJldHVybiAoXG4gICAgPGEgaHJlZj17YGNvbmZlcmVuY2UvQWRtaW4vUmVnaXN0cmF0aW9uLz9zZXNzaW9uSWQ9JHt2YWwuaWR9YH0+XG4gICAgICB7dmFsLnJlZ2lzdHJhdGlvbkNvdW50fVxuICAgIDwvYT5cbiAgKVxufVxuXG5jb25zdCB3YXJuaW5nID0gcm93ID0+IHtcbiAgaWYgKHJvdy5zb2Z0Q2FwID09IDApIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzXCI+VW5kZXI8L2Rpdj5cbiAgfVxuICBjb25zdCByZWdpc3RyYXRpb25Db3VudCA9IHBhcnNlSW50KHJvdy5yZWdpc3RyYXRpb25Db3VudClcbiAgY29uc3Qgc29mdENhcCA9IHJvdy5zb2Z0Q2FwXG4gIGlmIChyZWdpc3RyYXRpb25Db3VudCA+IHNvZnRDYXApIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj5PdmVyITwvZGl2PlxuICB9IGVsc2UgaWYgKFxuICAgIHJlZ2lzdHJhdGlvbkNvdW50ICE9IDAgJiZcbiAgICByZWdpc3RyYXRpb25Db3VudCA+IHNvZnRDYXAgLSBzZXNzaW9uU29mdENhcFxuICApIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS13YXJuaW5nXCI+V2FybmluZyE8L2Rpdj5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzXCI+VW5kZXI8L2Rpdj5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uIGV4dGVuZHMgTGlzdGluZyB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5yZXN0VXJsID0gJ2NvbmZlcmVuY2UvQWRtaW4vU2Vzc2lvbidcbiAgICB0aGlzLmxhYmVsID0gJ1Nlc3Npb24nXG4gICAgY29uc3QgY29lZmYgPSAxMDAwICogNjAgKiAzMFxuICAgIGNvbnN0IG5vdyA9IChNYXRoLnJvdW5kKERhdGUubm93KCkgLyBjb2VmZikgKiBjb2VmZikgLyAxMDAwXG5cbiAgICB0aGlzLmRlZmF1bHRSZXNvdXJjZSA9IHtcbiAgICAgIGlkOiAwLFxuICAgICAgY29uZmVyZW5jZUlkOiBwcm9wcy5jb25mZXJlbmNlSWQsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBldmVudERhdGU6IG5vdyxcbiAgICAgIHN0YXJ0VGltZTogJzEyMDAnLFxuICAgICAgZW5kVGltZTogJzEzMDAnLFxuICAgICAgc2lnbnVwU3RhcnQ6IG5vdyAtIDg2NDAwLFxuICAgICAgc2lnbnVwRW5kOiBub3csXG4gICAgICByZWdpc3RlckNvc3Q6IDAuMCxcbiAgICAgIGd1ZXN0Q29zdDogMC4wLFxuICAgICAgZGF5czogMSxcbiAgICAgIHNvZnRDYXA6IDAsXG4gICAgICBhdHRlbmRhbmNlQ2FwOiA4LFxuICAgICAgbWVhbEluY2x1ZGVkOiAwLFxuICAgICAgbWVhbFNlcnZpY2U6IDAsXG4gICAgICBtZWFsQ29zdDogMC4wLFxuICAgICAgYWxsb3dHdWVzdDogMCxcbiAgICAgIGxvY2F0aW9uSWQ6IHByb3BzLmxvY2F0aW9uSWQsXG4gICAgICByZWdpc3RyYXRpb25Db3VudDogMCxcbiAgICAgIGNhcFdhcm5pbmdTZW50OiAwLFxuICAgICAgYWN0aXZlOiAxXG4gICAgfVxuICAgIGNvbnN0IGRyb3Bkb3duID0gKGtleSwgcm93KSA9PiB7XG4gICAgICBjb25zdCBpZCA9IHJvdy5pZFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgICAgICBpZD1cImRyb3Bkb3duTWVudUJ1dHRvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51QnV0dG9uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcyMDBweCd9fT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcG9pbnRlclwiXG4gICAgICAgICAgICAgIGhyZWY9e2Bjb25mZXJlbmNlL0FkbWluL1JlZ2lzdHJhdGlvbi8/c2Vzc2lvbklkPSR7aWR9YH0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aWNrZXQtYWx0XCIgLz5cbiAgICAgICAgICAgICAgJm5ic3A7UmVnaXN0cmF0aW9uc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBwb2ludGVyXCJcbiAgICAgICAgICAgICAgaHJlZj17YGNvbmZlcmVuY2UvQWRtaW4vU2Vzc2lvbi8ke2lkfS9zaWduaW5gfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXJlY2VpcHRcIiAvPlxuICAgICAgICAgICAgICAmbmJzcDtVbnBhaWRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS0xXCIgLz5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcG9pbnRlclwiXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5lZGl0UmVzb3VyY2UuYmluZCh0aGlzLCBrZXkpfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVkaXRcIiAvPlxuICAgICAgICAgICAgICAmbmJzcDtFZGl0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHBvaW50ZXJcIlxuICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY29weS5iaW5kKHRoaXMsIGtleSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY29weVwiIC8+XG4gICAgICAgICAgICAgICZuYnNwO0NvcHlcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcG9pbnRlclwiXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGVSZXNvdXJjZS5iaW5kKHRoaXMsIGtleSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2hcIiAvPlxuICAgICAgICAgICAgICAmbmJzcDtEZWxldGVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgY29sdW1uOiAnb3B0aW9ucycsXG4gICAgICAgIGNhbGxiYWNrOiAocm93LCBrZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gZHJvcGRvd24oa2V5LCByb3cpXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6ICcxMCUnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbHVtbjogJ3RpdGxlJyxcbiAgICAgICAgbGFiZWw6ICdUaXRsZScsXG4gICAgICAgIHNvcnQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbHVtbjogJ3JlZ2lzdGVyQ29zdCcsXG4gICAgICAgIGxhYmVsOiAnQ29zdCAvIEd1ZXN0IC8gTWVhbCcsXG4gICAgICAgIGNhbGxiYWNrOiByb3cgPT4ge1xuICAgICAgICAgIGNvbnN0IG1lYWxDb3N0ID1cbiAgICAgICAgICAgIHJvdy5tZWFsU2VydmljZSA9PT0gMSA/IChcbiAgICAgICAgICAgICAgPHNwYW4+JHtyb3cubWVhbENvc3QudG9GaXhlZCgyKX08L3NwYW4+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+Ti9BPC9zcGFuPlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgY29uc3QgZ3Vlc3RDb3N0ID1cbiAgICAgICAgICAgIHJvdy5hbGxvd0d1ZXN0ID09PSAxID8gKFxuICAgICAgICAgICAgICA8c3Bhbj4ke3Jvdy5ndWVzdENvc3QudG9GaXhlZCgyKX08L3NwYW4+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+Ti9BPC9zcGFuPlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAke3Jvdy5yZWdpc3RlckNvc3QudG9GaXhlZCgyKX0gLyB7Z3Vlc3RDb3N0fSAvIHttZWFsQ29zdH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbHVtbjogJ3JlZ2lzdHJhdGlvbkNvdW50JyxcbiAgICAgICAgbGFiZWw6IDxhYmJyIHRpdGxlPVwiUmVnaXN0cmF0aW9uc1wiPlJlZy48L2FiYnI+LFxuICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICBzdHlsZToge3dpZHRoOiAnMTAwcHgnfSxcbiAgICAgICAgY2xhc3NOYW1lOiAndGV4dC1yaWdodCcsXG4gICAgICAgIGNhbGxiYWNrOiByb3cgPT4ge1xuICAgICAgICAgIHJldHVybiByZWdMaW5rKHJvdylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdTb2Z0IGNhcCcsXG4gICAgICAgIGNhbGxiYWNrOiByb3cgPT4ge1xuICAgICAgICAgIHJldHVybiB3YXJuaW5nKHJvdylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sdW1uOiAnZXZlbnREYXRlJyxcbiAgICAgICAgbGFiZWw6ICdFdmVudCBkYXRlJyxcbiAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgICAgY2FsbGJhY2s6IHNlc3Npb24gPT4ge1xuICAgICAgICAgIGNvbnN0IGV2ZW50RGF0ZU9iaiA9IG5ldyBEYXRlKClcbiAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgZXZlbnREYXRlT2JqLnNldFRpbWUoc2Vzc2lvbi5ldmVudERhdGUgKiAxMDAwKVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGV2ZW50RGF0ZU9iai5nZXREYXRlKCkgPT09IG5vdy5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgIGV2ZW50RGF0ZU9iai5nZXRGdWxsWWVhcigpID09PSBub3cuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgZXZlbnREYXRlT2JqLmdldE1vbnRoKCkgPT09IG5vdy5nZXRNb250aCgpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2Bjb25mZXJlbmNlL0FkbWluL1Nlc3Npb24vJHtzZXNzaW9uLmlkfS9zaWduaW5gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIj5cbiAgICAgICAgICAgICAgICBUb2RheSFcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnREYXRlT2JqLnRvRGF0ZVN0cmluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICdhY3RpdmUnLFxuICAgICAgICBjYWxsYmFjazogKHJvdywga2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQnV0dG9uKHJvdywga2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICAgIHRoaXMuc3RhdGUuY3VycmVudENvbmZlcmVuY2UgPSB7fVxuICAgIHRoaXMuc3RhdGUuY3VycmVudENvbmZlcmVuY2VLZXkgPSAwXG5cbiAgICB0aGlzLmxvY2F0aW9ucyA9IFtdXG4gICAgdGhpcy5jb25mZXJlbmNlcyA9IFtdXG4gICAgdGhpcy5zdGF0ZS5yZXNvdXJjZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFJlc291cmNlKVxuICAgIHRoaXMuc2V0Q3VycmVudENvbmZlcmVuY2UgPSB0aGlzLnNldEN1cnJlbnRDb25mZXJlbmNlLmJpbmQodGhpcylcbiAgICB0aGlzLmFjdGl2ZUJ1dHRvbiA9IHRoaXMuYWN0aXZlQnV0dG9uLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxvYWRMb2NhdGlvbnModGhpcylcbiAgICB0aGlzLmxvYWRDb25mZXJlbmNlcygpXG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuICB9XG5cbiAgZGVsZXRlUmVzb3VyY2Uoa2V5LCBlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKFxuICAgICAgcHJvbXB0KFxuICAgICAgICAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0gYWxvbmcgd2l0aCBhbGwgaXRzIGNvbnRlbnRzIChyZWdpc3RyYXRpb25zLCBwYXltZW50cywgZXRjLik/XFxuVHlwZSBERUxFVEUgaWYgeW91IGFyZSBzdXJlLidcbiAgICAgICkgPT09ICdERUxFVEUnXG4gICAgKSB7XG4gICAgICB0aGlzLnNlbmREZWxldGUoa2V5KVxuICAgIH1cbiAgfVxuXG4gIGNvcHkoa2V5LCBlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgaWQgPSB0aGlzLnN0YXRlLmxpc3Rpbmdba2V5XS5pZFxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IGBjb25mZXJlbmNlL0FkbWluL1Nlc3Npb24vY29weWAsXG4gICAgICBkYXRhOiB7aWR9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkKClcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICB0aGlzLnNldE1lc3NhZ2UoJ0NvdWxkIG5vdCBjcmVhdGUgY29weScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFjdGl2ZUJ1dHRvbihyb3csIGtleSkge1xuICAgIGlmIChyb3cuYWN0aXZlID09PSAxKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVBY3RpdmUuYmluZCh0aGlzLCBrZXkpfT5cbiAgICAgICAgICBBY3RpdmVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWN0aXZlLmJpbmQodGhpcywga2V5KX0+XG4gICAgICAgICAgTm90IGFjdGl2ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICB0b2dnbGVBY3RpdmUoa2V5KSB7XG4gICAgY29uc3Qge2xpc3Rpbmd9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHJvdyA9IGxpc3Rpbmdba2V5XVxuICAgIHJvdy5hY3RpdmUgPSByb3cuYWN0aXZlID09PSAxID8gMCA6IDFcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnY29uZmVyZW5jZS9BZG1pbi9TZXNzaW9uLycgKyByb3cuaWQsXG4gICAgICBkYXRhOiB7dmFybmFtZTogJ2FjdGl2ZScsIHZhbHVlOiByb3cuYWN0aXZlfSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAncGF0Y2gnLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0aW5nfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICBzdXBlci5sb2FkKHtjb25mZXJlbmNlSWQ6IHRoaXMucHJvcHMuY29uZmVyZW5jZUlkfSlcbiAgfVxuXG4gIGxvYWRDb25mZXJlbmNlcygpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnY29uZmVyZW5jZS9BZG1pbi9Db25mZXJlbmNlJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmNvbmZlcmVuY2VzID0gZGF0YS5saXN0aW5nXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRDb25mZXJlbmNlOiBkYXRhLmxpc3RpbmdbMF19KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0TWVzc2FnZSgnQ291bGQgbm90IGFjY2VzcyBzZXJ2ZXInKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzZXRDdXJyZW50Q29uZmVyZW5jZShlKSB7XG4gICAgY29uc3QgY3VycmVudENvbmZlcmVuY2VLZXkgPSBlLnRhcmdldC52YWx1ZVxuICAgIGNvbnN0IGN1cnJlbnRDb25mZXJlbmNlID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgdGhpcy5jb25mZXJlbmNlc1tjdXJyZW50Q29uZmVyZW5jZUtleV1cbiAgICApXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudENvbmZlcmVuY2VLZXksIGN1cnJlbnRDb25mZXJlbmNlfSlcbiAgfVxuXG4gIGZvcm0oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZXNzaW9uRm9ybVxuICAgICAgICByZXNvdXJjZT17dGhpcy5zdGF0ZS5yZXNvdXJjZX1cbiAgICAgICAgY29uZmVyZW5jZT17dGhpcy5zdGF0ZS5jdXJyZW50Q29uZmVyZW5jZX1cbiAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZX1cbiAgICAgICAgbG9jYXRpb25zPXt0aGlzLmxvY2F0aW9uc31cbiAgICAgICAgc2F2ZT17dGhpcy5zYXZlfVxuICAgICAgICBjbG9zZT17dGhpcy5maW5pc2h9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIGdldFNlYXJjaCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE5hdmJhclNlYXJjaFxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoOiB0aXRsZSBvciBkYXRlXCJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlU2VhcmNoKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICBuYXZMZWZ0KCkge1xuICAgIGNvbnN0IGxlZnQgPSBzdXBlci5uYXZMZWZ0KClcbiAgICBsZWZ0LnB1c2goXG4gICAgICA8TmF2YmFyTGluayBocmVmPVwiY29uZmVyZW5jZS9BZG1pbi9Db25mZXJlbmNlXCI+XG4gICAgICAgIEJhY2sgdG8gY29uZmVyZW5jZXNcbiAgICAgIDwvTmF2YmFyTGluaz5cbiAgICApXG4gICAgcmV0dXJuIGxlZnRcbiAgfVxuXG4gIHRpdGxlKCkge1xuICAgIHJldHVybiA8aDI+U2Vzc2lvbnMgZm9yIHt0aGlzLnN0YXRlLmN1cnJlbnRDb25mZXJlbmNlLnRpdGxlfTwvaDI+XG4gIH1cblxuICBvdmVybGF5KCkge1xuICAgIGNvbnN0IHt0aXRsZX0gPSB0aGlzLnN0YXRlLmN1cnJlbnRDb25mZXJlbmNlXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnQ6IDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1mb3JtXCI+e3RoaXMuZm9ybSgpfTwvZGl2PixcbiAgICAgIHRpdGxlOlxuICAgICAgICAodGhpcy5zdGF0ZS5yZXNvdXJjZS5pZCA+IDAgPyAnVXBkYXRlJyA6ICdDcmVhdGUnKSArXG4gICAgICAgICcgc2Vzc2lvbiBmb3IgY29uZmVyZW5jZTogJyArXG4gICAgICAgIHRpdGxlLFxuICAgICAgY2xvc2U6IHRoaXMubG9hZFxuICAgIH1cbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxTZXNzaW9uXG4gICAgY29uZmVyZW5jZUlkPXtjb25mZXJlbmNlSWR9XG4gICAgbG9jYXRpb25JZD17bG9jYXRpb25JZH1cbiAgICBzZXNzaW9uU29mdENhcD17c2Vzc2lvblNvZnRDYXB9XG4gIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnU2Vzc2lvbicpXG4pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IERvbGxhcml6ZSA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPiQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbkRvbGxhcml6ZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvbGxhcml6ZVxuIiwiLyogZ2xvYmFsICQgKi9cblxuY29uc3QgbG9hZExvY2F0aW9ucyA9IHJlc291cmNlID0+IHtcbiAgJC5hamF4KHtcbiAgICB1cmw6ICdjb25mZXJlbmNlL0FkbWluL0xvY2F0aW9uJyxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIHR5cGU6ICdnZXQnLFxuICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgcmVzb3VyY2UubG9jYXRpb25zID0gZGF0YS5saXN0aW5nXG4gICAgfSxcbiAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgcmVzb3VyY2Uuc2V0TWVzc2FnZSgnQ291bGQgbm90IGFjY2VzcyBzZXJ2ZXInKVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZExvY2F0aW9uc1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gcihuKXtpZih0W25dKXJldHVybiB0W25dLmV4cG9ydHM7dmFyIG89dFtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbbl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsciksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gci5tPWUsci5jPXQsci5kPWZ1bmN0aW9uKGUsdCxuKXtyLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxyLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1yKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoci5yKG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKXIuZChuLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIG59LHIubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gci5kKHQsXCJhXCIsdCksdH0sci5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxyLnA9XCJcIixyKHIucz0yKX0oW2Z1bmN0aW9uKGUsdCxyKXtlLmV4cG9ydHM9cig1KSgpfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPXIoMyl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtyLnIodCksci5kKHQsXCJkZWZhdWx0XCIsZnVuY3Rpb24oKXtyZXR1cm4gcH0pLHIuZCh0LFwiUmVxdWlyZWRJY29uXCIsZnVuY3Rpb24oKXtyZXR1cm4geX0pO3ZhciBuPXIoMSksbz1yLm4obiksdT1yKDApLGE9ci5uKHUpO2Z1bmN0aW9uIGwoZSl7cmV0dXJuKGw9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKGUpfWZ1bmN0aW9uIGkoZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIG49dFtyXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbi5rZXksbil9fWZ1bmN0aW9uIHMoZSl7cmV0dXJuKHM9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbihlKXtyZXR1cm4gZS5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihlKX0pKGUpfWZ1bmN0aW9uIGMoZSl7aWYodm9pZCAwPT09ZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIGV9ZnVuY3Rpb24gZihlLHQpe3JldHVybihmPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5fX3Byb3RvX189dCxlfSkoZSx0KX12YXIgcD1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpe3ZhciByLG4sbztyZXR1cm4gZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLHQpLG49dGhpcywocj0hKG89cyh0KS5jYWxsKHRoaXMsZSkpfHxcIm9iamVjdFwiIT09bChvKSYmXCJmdW5jdGlvblwiIT10eXBlb2Ygbz9jKG4pOm8pLnN0YXRlPXtlbXB0eTohMX0sci5oYW5kbGVCbHVyPXIuaGFuZGxlQmx1ci5iaW5kKGMocikpLHIuaGFuZGxlQ2hhbmdlPXIuaGFuZGxlQ2hhbmdlLmJpbmQoYyhyKSkscn12YXIgcix1LGE7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiZmKGUsdCl9KHQsbltcIkNvbXBvbmVudFwiXSkscj10LCh1PVt7a2V5OlwiaGFuZGxlQmx1clwiLHZhbHVlOmZ1bmN0aW9uKGUpezA9PT1lLnRhcmdldC52YWx1ZS5sZW5ndGg/KHRoaXMuc2V0U3RhdGUoe2VtcHR5OiEwfSksdGhpcy5wcm9wcy5vbkVtcHR5JiZ0aGlzLnByb3BzLm9uRW1wdHkoKSk6dGhpcy5zZXRTdGF0ZSh7ZW1wdHk6ITF9KSx0aGlzLnByb3BzLmJsdXImJnRoaXMucHJvcHMuYmx1cigpfX0se2tleTpcImVtcHR5TWVzc2FnZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJvcHMubGFiZWwubGVuZ3RoPjA/dGhpcy5wcm9wcy5sYWJlbCtcIiBtYXkgbm90IGJlIGVtcHR5XCI6XCJGaWVsZCBtYXkgbm90IGJlIGVtcHR5XCJ9fSx7a2V5Olwic2VsZWN0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS50YXJnZXQuc2VsZWN0KCl9fSx7a2V5OlwiaGFuZGxlQ2hhbmdlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS50YXJnZXQudmFsdWUubGVuZ3RoPjAmJnRoaXMuc2V0U3RhdGUoe2VtcHR5OiExfSksdGhpcy5wcm9wcy5jaGFuZ2UoZSl9fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZTtlPW51bGwhPT10aGlzLnByb3BzLmVycm9yTWVzc2FnZSYmXCJcIiE9PXRoaXMucHJvcHMuZXJyb3JNZXNzYWdlfHx0aGlzLnN0YXRlLmVtcHR5JiZ0aGlzLnByb3BzLnJlcXVpcmVkJiYhMT09PXRoaXMucHJvcHMuZGlzYWJsZVJlcXVpcmVDaGVjaz9cImZvcm0tY29udHJvbCBlcnJvci1oaWdobGlnaHRcIjpcImZvcm0tY29udHJvbFwiO3ZhciB0LHIsbj10aGlzLnByb3BzLnJlcXVpcmVkP28uYS5jcmVhdGVFbGVtZW50KHksbnVsbCk6bnVsbCx1PW8uYS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIix7aWQ6dGhpcy5wcm9wcy5paWQsdHlwZTp0aGlzLnByb3BzLnR5cGUsbmFtZTp0aGlzLnByb3BzLm5hbWUsdmFsdWU6bnVsbD09PXRoaXMucHJvcHMudmFsdWU/XCJcIjp0aGlzLnByb3BzLnZhbHVlLGNsYXNzTmFtZTplLG9uQ2hhbmdlOnRoaXMuaGFuZGxlQ2hhbmdlLG9uQmx1cjp0aGlzLmhhbmRsZUJsdXIsb25DbGljazohMD09PXRoaXMucHJvcHMuc2VsZWN0T25DbGljaz90aGlzLnNlbGVjdDpudWxsLGRpc2FibGVkOnRoaXMucHJvcHMuZGlzYWJsZWQsc2l6ZTp0aGlzLnByb3BzLnNpemUsbWF4TGVuZ3RoOnRoaXMucHJvcHMubWF4TGVuZ3RoLHBsYWNlaG9sZGVyOnRoaXMucHJvcHMucGxhY2Vob2xkZXIsYXV0b0NvbXBsZXRlOnRoaXMucHJvcHMuYXV0b2NvbXBsZXRlP1widHJ1ZVwiOlwiZmFsc2VcIn0pO3RoaXMucHJvcHMud3JhcCYmKHU9dGhpcy5wcm9wcy53cmFwKHUpKSx0aGlzLnByb3BzLmVycm9yTWVzc2FnZT90PXRoaXMucHJvcHMuZXJyb3JNZXNzYWdlOnRoaXMuc3RhdGUuZW1wdHkmJnRoaXMucHJvcHMucmVxdWlyZWQmJiExPT09dGhpcy5wcm9wcy5kaXNhYmxlUmVxdWlyZUNoZWNrJiYodD10aGlzLmVtcHR5TWVzc2FnZSgpKSx0aGlzLnByb3BzLmxhYmVsLmxlbmd0aD4wJiYocj1vLmEuY3JlYXRlRWxlbWVudChcImxhYmVsXCIse2h0bWxGb3I6dGhpcy5wcm9wcy5paWR9LHRoaXMucHJvcHMubGFiZWwsbikpO3ZhciBhPXQ/by5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCJ9LHQpOm51bGw7cmV0dXJuIG8uYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImZvcm0tZ3JvdXBcIn0scix1LGEpfX1dKSYmaShyLnByb3RvdHlwZSx1KSxhJiZpKHIsYSksdH0oKTtwLmRlZmF1bHRQcm9wcz17bGFiZWw6XCJcIix0eXBlOlwidGV4dFwiLG5hbWU6XCJcIix2YWx1ZTpcIlwiLGNoYW5nZTpudWxsLGJsdXI6bnVsbCxyZXF1aXJlZDohMSxpZDpudWxsLGF1dG9jb21wbGV0ZTohMSxwbGFjZWhvbGRlcjpudWxsLGVycm9yTWVzc2FnZTpcIlwiLGRpc2FibGVkOiExLHNpemU6bnVsbCxtYXhMZW5ndGg6bnVsbCxzZWxlY3RPbkNsaWNrOiEwLHdyYXA6bnVsbCxvbkVtcHR5Om51bGwsZGlzYWJsZVJlcXVpcmVDaGVjazohMX0scC5wcm9wVHlwZXM9e25hbWU6YS5hLnN0cmluZyxsYWJlbDphLmEuc3RyaW5nLHR5cGU6YS5hLnN0cmluZyx2YWx1ZTphLmEub25lT2ZUeXBlKFthLmEuc3RyaW5nLGEuYS5udW1iZXJdKSxjaGFuZ2U6YS5hLmZ1bmMsYmx1cjphLmEuZnVuYyxwbGFjZWhvbGRlcjphLmEuc3RyaW5nLGVycm9yTWVzc2FnZTphLmEuc3RyaW5nLGlpZDphLmEuc3RyaW5nLGF1dG9jb21wbGV0ZTphLmEuYm9vbCxyZXF1aXJlZDphLmEuYm9vbCxkaXNhYmxlZDphLmEuYm9vbCxzaXplOmEuYS5vbmVPZlR5cGUoW2EuYS5udW1iZXIsYS5hLnN0cmluZ10pLG1heExlbmd0aDphLmEubnVtYmVyLHdyYXA6YS5hLmZ1bmMsc2VsZWN0T25DbGljazphLmEuYm9vbCxvbkVtcHR5OmEuYS5mdW5jLGRpc2FibGVSZXF1aXJlQ2hlY2s6YS5hLmJvb2x9O3ZhciB5PWZ1bmN0aW9uKCl7cmV0dXJuIG8uYS5jcmVhdGVFbGVtZW50KFwiaVwiLHtjbGFzc05hbWU6XCJmYXMgZmEtYXN0ZXJpc2sgdGV4dC1kYW5nZXJcIixcImRhdGEtZmEtdHJhbnNmb3JtXCI6XCJzaHJpbmstNyB1cC02XCJ9KX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtcbi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOS4wXG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovdmFyIG49cig0KSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcix1PW8/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsYT1vP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsbD1vP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxpPW8/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LHM9bz9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsYz1vP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxmPW8/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAscD1vP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMix5PW8/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLGg9bz9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTo2MDEyMCxkPW8/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6NjAxMTUsYj1vP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2O28mJlN5bWJvbC5mb3IoXCJyZWFjdC5mdW5kYW1lbnRhbFwiKSxvJiZTeW1ib2wuZm9yKFwicmVhY3QucmVzcG9uZGVyXCIpO3ZhciBtPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIHYoZSl7Zm9yKHZhciB0PWUubWVzc2FnZSxyPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrdCxuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKylyKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tuXSk7cmV0dXJuIGUubWVzc2FnZT1cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIit0K1wiOyB2aXNpdCBcIityK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4gXCIsZX12YXIgZz17aXNNb3VudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITF9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKCl7fX0sTz17fTtmdW5jdGlvbiBTKGUsdCxyKXt0aGlzLnByb3BzPWUsdGhpcy5jb250ZXh0PXQsdGhpcy5yZWZzPU8sdGhpcy51cGRhdGVyPXJ8fGd9ZnVuY3Rpb24gXygpe31mdW5jdGlvbiBrKGUsdCxyKXt0aGlzLnByb3BzPWUsdGhpcy5jb250ZXh0PXQsdGhpcy5yZWZzPU8sdGhpcy51cGRhdGVyPXJ8fGd9Uy5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxTLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT1lKXRocm93IHYoRXJyb3IoODUpKTt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsZSx0LFwic2V0U3RhdGVcIil9LFMucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGUpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxlLFwiZm9yY2VVcGRhdGVcIil9LF8ucHJvdG90eXBlPVMucHJvdG90eXBlO3ZhciBqPWsucHJvdG90eXBlPW5ldyBfO2ouY29uc3RydWN0b3I9ayxuKGosUy5wcm90b3R5cGUpLGouaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIHc9e2N1cnJlbnQ6bnVsbH0sQz17c3VzcGVuc2U6bnVsbH0sRT17Y3VycmVudDpudWxsfSx4PU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksUD17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O2Z1bmN0aW9uIFIoZSx0LHIpe3ZhciBuPXZvaWQgMCxvPXt9LGE9bnVsbCxsPW51bGw7aWYobnVsbCE9dClmb3IobiBpbiB2b2lkIDAhPT10LnJlZiYmKGw9dC5yZWYpLHZvaWQgMCE9PXQua2V5JiYoYT1cIlwiK3Qua2V5KSx0KXguY2FsbCh0LG4pJiYhUC5oYXNPd25Qcm9wZXJ0eShuKSYmKG9bbl09dFtuXSk7dmFyIGk9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1pKW8uY2hpbGRyZW49cjtlbHNlIGlmKDE8aSl7Zm9yKHZhciBzPUFycmF5KGkpLGM9MDtjPGk7YysrKXNbY109YXJndW1lbnRzW2MrMl07by5jaGlsZHJlbj1zfWlmKGUmJmUuZGVmYXVsdFByb3BzKWZvcihuIGluIGk9ZS5kZWZhdWx0UHJvcHMpdm9pZCAwPT09b1tuXSYmKG9bbl09aVtuXSk7cmV0dXJueyQkdHlwZW9mOnUsdHlwZTplLGtleTphLHJlZjpsLHByb3BzOm8sX293bmVyOkUuY3VycmVudH19ZnVuY3Rpb24gJChlKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9PWUmJmUuJCR0eXBlb2Y9PT11fXZhciBUPS9cXC8rL2cscT1bXTtmdW5jdGlvbiBNKGUsdCxyLG4pe2lmKHEubGVuZ3RoKXt2YXIgbz1xLnBvcCgpO3JldHVybiBvLnJlc3VsdD1lLG8ua2V5UHJlZml4PXQsby5mdW5jPXIsby5jb250ZXh0PW4sby5jb3VudD0wLG99cmV0dXJue3Jlc3VsdDplLGtleVByZWZpeDp0LGZ1bmM6cixjb250ZXh0Om4sY291bnQ6MH19ZnVuY3Rpb24gSShlKXtlLnJlc3VsdD1udWxsLGUua2V5UHJlZml4PW51bGwsZS5mdW5jPW51bGwsZS5jb250ZXh0PW51bGwsZS5jb3VudD0wLDEwPnEubGVuZ3RoJiZxLnB1c2goZSl9ZnVuY3Rpb24gTChlLHQscil7cmV0dXJuIG51bGw9PWU/MDpmdW5jdGlvbiBlKHQscixuLG8pe3ZhciBsPXR5cGVvZiB0O1widW5kZWZpbmVkXCIhPT1sJiZcImJvb2xlYW5cIiE9PWx8fCh0PW51bGwpO3ZhciBpPSExO2lmKG51bGw9PT10KWk9ITA7ZWxzZSBzd2l0Y2gobCl7Y2FzZVwic3RyaW5nXCI6Y2FzZVwibnVtYmVyXCI6aT0hMDticmVhaztjYXNlXCJvYmplY3RcIjpzd2l0Y2godC4kJHR5cGVvZil7Y2FzZSB1OmNhc2UgYTppPSEwfX1pZihpKXJldHVybiBuKG8sdCxcIlwiPT09cj9cIi5cIitBKHQsMCk6ciksMTtpZihpPTAscj1cIlwiPT09cj9cIi5cIjpyK1wiOlwiLEFycmF5LmlzQXJyYXkodCkpZm9yKHZhciBzPTA7czx0Lmxlbmd0aDtzKyspe3ZhciBjPXIrQShsPXRbc10scyk7aSs9ZShsLGMsbixvKX1lbHNlIGlmKG51bGw9PT10fHxcIm9iamVjdFwiIT10eXBlb2YgdD9jPW51bGw6Yz1cImZ1bmN0aW9uXCI9PXR5cGVvZihjPW0mJnRbbV18fHRbXCJAQGl0ZXJhdG9yXCJdKT9jOm51bGwsXCJmdW5jdGlvblwiPT10eXBlb2YgYylmb3IodD1jLmNhbGwodCkscz0wOyEobD10Lm5leHQoKSkuZG9uZTspaSs9ZShsPWwudmFsdWUsYz1yK0EobCxzKyspLG4sbyk7ZWxzZSBpZihcIm9iamVjdFwiPT09bCl0aHJvdyBuPVwiXCIrdCx2KEVycm9yKDMxKSxcIltvYmplY3QgT2JqZWN0XVwiPT09bj9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKHQpLmpvaW4oXCIsIFwiKStcIn1cIjpuLFwiXCIpO3JldHVybiBpfShlLFwiXCIsdCxyKX1mdW5jdGlvbiBBKGUsdCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPT1lJiZudWxsIT1lLmtleT9mdW5jdGlvbihlKXt2YXIgdD17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrKFwiXCIrZSkucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfSl9KGUua2V5KTp0LnRvU3RyaW5nKDM2KX1mdW5jdGlvbiBOKGUsdCl7ZS5mdW5jLmNhbGwoZS5jb250ZXh0LHQsZS5jb3VudCsrKX1mdW5jdGlvbiBCKGUsdCxyKXt2YXIgbj1lLnJlc3VsdCxvPWUua2V5UHJlZml4O2U9ZS5mdW5jLmNhbGwoZS5jb250ZXh0LHQsZS5jb3VudCsrKSxBcnJheS5pc0FycmF5KGUpP1UoZSxuLHIsZnVuY3Rpb24oZSl7cmV0dXJuIGV9KTpudWxsIT1lJiYoJChlKSYmKGU9ZnVuY3Rpb24oZSx0KXtyZXR1cm57JCR0eXBlb2Y6dSx0eXBlOmUudHlwZSxrZXk6dCxyZWY6ZS5yZWYscHJvcHM6ZS5wcm9wcyxfb3duZXI6ZS5fb3duZXJ9fShlLG8rKCFlLmtleXx8dCYmdC5rZXk9PT1lLmtleT9cIlwiOihcIlwiK2Uua2V5KS5yZXBsYWNlKFQsXCIkJi9cIikrXCIvXCIpK3IpKSxuLnB1c2goZSkpfWZ1bmN0aW9uIFUoZSx0LHIsbixvKXt2YXIgdT1cIlwiO251bGwhPXImJih1PShcIlwiK3IpLnJlcGxhY2UoVCxcIiQmL1wiKStcIi9cIiksTChlLEIsdD1NKHQsdSxuLG8pKSxJKHQpfWZ1bmN0aW9uIEYoKXt2YXIgZT13LmN1cnJlbnQ7aWYobnVsbD09PWUpdGhyb3cgdihFcnJvcigzMjEpKTtyZXR1cm4gZX12YXIgej17Q2hpbGRyZW46e21hcDpmdW5jdGlvbihlLHQscil7aWYobnVsbD09ZSlyZXR1cm4gZTt2YXIgbj1bXTtyZXR1cm4gVShlLG4sbnVsbCx0LHIpLG59LGZvckVhY2g6ZnVuY3Rpb24oZSx0LHIpe2lmKG51bGw9PWUpcmV0dXJuIGU7TChlLE4sdD1NKG51bGwsbnVsbCx0LHIpKSxJKHQpfSxjb3VudDpmdW5jdGlvbihlKXtyZXR1cm4gTChlLGZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LG51bGwpfSx0b0FycmF5OmZ1bmN0aW9uKGUpe3ZhciB0PVtdO3JldHVybiBVKGUsdCxudWxsLGZ1bmN0aW9uKGUpe3JldHVybiBlfSksdH0sb25seTpmdW5jdGlvbihlKXtpZighJChlKSl0aHJvdyB2KEVycm9yKDE0MykpO3JldHVybiBlfX0sY3JlYXRlUmVmOmZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19LENvbXBvbmVudDpTLFB1cmVDb21wb25lbnQ6ayxjcmVhdGVDb250ZXh0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PW51bGwpLChlPXskJHR5cGVvZjpmLF9jYWxjdWxhdGVDaGFuZ2VkQml0czp0LF9jdXJyZW50VmFsdWU6ZSxfY3VycmVudFZhbHVlMjplLF90aHJlYWRDb3VudDowLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbH0pLlByb3ZpZGVyPXskJHR5cGVvZjpjLF9jb250ZXh0OmV9LGUuQ29uc3VtZXI9ZX0sZm9yd2FyZFJlZjpmdW5jdGlvbihlKXtyZXR1cm57JCR0eXBlb2Y6cCxyZW5kZXI6ZX19LGxhenk6ZnVuY3Rpb24oZSl7cmV0dXJueyQkdHlwZW9mOmIsX2N0b3I6ZSxfc3RhdHVzOi0xLF9yZXN1bHQ6bnVsbH19LG1lbW86ZnVuY3Rpb24oZSx0KXtyZXR1cm57JCR0eXBlb2Y6ZCx0eXBlOmUsY29tcGFyZTp2b2lkIDA9PT10P251bGw6dH19LHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIEYoKS51c2VDYWxsYmFjayhlLHQpfSx1c2VDb250ZXh0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIEYoKS51c2VDb250ZXh0KGUsdCl9LHVzZUVmZmVjdDpmdW5jdGlvbihlLHQpe3JldHVybiBGKCkudXNlRWZmZWN0KGUsdCl9LHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBGKCkudXNlSW1wZXJhdGl2ZUhhbmRsZShlLHQscil9LHVzZURlYnVnVmFsdWU6ZnVuY3Rpb24oKXt9LHVzZUxheW91dEVmZmVjdDpmdW5jdGlvbihlLHQpe3JldHVybiBGKCkudXNlTGF5b3V0RWZmZWN0KGUsdCl9LHVzZU1lbW86ZnVuY3Rpb24oZSx0KXtyZXR1cm4gRigpLnVzZU1lbW8oZSx0KX0sdXNlUmVkdWNlcjpmdW5jdGlvbihlLHQscil7cmV0dXJuIEYoKS51c2VSZWR1Y2VyKGUsdCxyKX0sdXNlUmVmOmZ1bmN0aW9uKGUpe3JldHVybiBGKCkudXNlUmVmKGUpfSx1c2VTdGF0ZTpmdW5jdGlvbihlKXtyZXR1cm4gRigpLnVzZVN0YXRlKGUpfSxGcmFnbWVudDpsLFByb2ZpbGVyOnMsU3RyaWN0TW9kZTppLFN1c3BlbnNlOnksdW5zdGFibGVfU3VzcGVuc2VMaXN0OmgsY3JlYXRlRWxlbWVudDpSLGNsb25lRWxlbWVudDpmdW5jdGlvbihlLHQscil7aWYobnVsbD09ZSl0aHJvdyB2KEVycm9yKDI2NyksZSk7dmFyIG89dm9pZCAwLGE9bih7fSxlLnByb3BzKSxsPWUua2V5LGk9ZS5yZWYscz1lLl9vd25lcjtpZihudWxsIT10KXt2b2lkIDAhPT10LnJlZiYmKGk9dC5yZWYscz1FLmN1cnJlbnQpLHZvaWQgMCE9PXQua2V5JiYobD1cIlwiK3Qua2V5KTt2YXIgYz12b2lkIDA7Zm9yKG8gaW4gZS50eXBlJiZlLnR5cGUuZGVmYXVsdFByb3BzJiYoYz1lLnR5cGUuZGVmYXVsdFByb3BzKSx0KXguY2FsbCh0LG8pJiYhUC5oYXNPd25Qcm9wZXJ0eShvKSYmKGFbb109dm9pZCAwPT09dFtvXSYmdm9pZCAwIT09Yz9jW29dOnRbb10pfWlmKDE9PT0obz1hcmd1bWVudHMubGVuZ3RoLTIpKWEuY2hpbGRyZW49cjtlbHNlIGlmKDE8byl7Yz1BcnJheShvKTtmb3IodmFyIGY9MDtmPG87ZisrKWNbZl09YXJndW1lbnRzW2YrMl07YS5jaGlsZHJlbj1jfXJldHVybnskJHR5cGVvZjp1LHR5cGU6ZS50eXBlLGtleTpsLHJlZjppLHByb3BzOmEsX293bmVyOnN9fSxjcmVhdGVGYWN0b3J5OmZ1bmN0aW9uKGUpe3ZhciB0PVIuYmluZChudWxsLGUpO3JldHVybiB0LnR5cGU9ZSx0fSxpc1ZhbGlkRWxlbWVudDokLHZlcnNpb246XCIxNi45LjBcIix1bnN0YWJsZV93aXRoU3VzcGVuc2VDb25maWc6ZnVuY3Rpb24oZSx0KXt2YXIgcj1DLnN1c3BlbnNlO0Muc3VzcGVuc2U9dm9pZCAwPT09dD9udWxsOnQ7dHJ5e2UoKX1maW5hbGx5e0Muc3VzcGVuc2U9cn19LF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOntSZWFjdEN1cnJlbnREaXNwYXRjaGVyOncsUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6QyxSZWFjdEN1cnJlbnRPd25lcjpFLElzU29tZVJlbmRlcmVyQWN0aW5nOntjdXJyZW50OiExfSxhc3NpZ246bn19LEQ9e2RlZmF1bHQ6en0sVj1EJiZ6fHxEO2UuZXhwb3J0cz1WLmRlZmF1bHR8fFZ9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtcbi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsbz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LHU9T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtmdW5jdGlvbiBhKGUpe2lmKG51bGw9PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkXCIpO3JldHVybiBPYmplY3QoZSl9ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dHJ5e2lmKCFPYmplY3QuYXNzaWduKXJldHVybiExO3ZhciBlPW5ldyBTdHJpbmcoXCJhYmNcIik7aWYoZVs1XT1cImRlXCIsXCI1XCI9PT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKVswXSlyZXR1cm4hMTtmb3IodmFyIHQ9e30scj0wO3I8MTA7cisrKXRbXCJfXCIrU3RyaW5nLmZyb21DaGFyQ29kZShyKV09cjtpZihcIjAxMjM0NTY3ODlcIiE9PU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHQpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0pLmpvaW4oXCJcIikpcmV0dXJuITE7dmFyIG49e307cmV0dXJuXCJhYmNkZWZnaGlqa2xtbm9wcXJzdFwiLnNwbGl0KFwiXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7bltlXT1lfSksXCJhYmNkZWZnaGlqa2xtbm9wcXJzdFwiPT09T2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSxuKSkuam9pbihcIlwiKX1jYXRjaChlKXtyZXR1cm4hMX19KCk/T2JqZWN0LmFzc2lnbjpmdW5jdGlvbihlLHQpe2Zvcih2YXIgcixsLGk9YShlKSxzPTE7czxhcmd1bWVudHMubGVuZ3RoO3MrKyl7Zm9yKHZhciBjIGluIHI9T2JqZWN0KGFyZ3VtZW50c1tzXSkpby5jYWxsKHIsYykmJihpW2NdPXJbY10pO2lmKG4pe2w9bihyKTtmb3IodmFyIGY9MDtmPGwubGVuZ3RoO2YrKyl1LmNhbGwocixsW2ZdKSYmKGlbbFtmXV09cltsW2ZdXSl9fXJldHVybiBpfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXIoNik7ZnVuY3Rpb24gbygpe31mdW5jdGlvbiB1KCl7fXUucmVzZXRXYXJuaW5nQ2FjaGU9byxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxyLG8sdSxhKXtpZihhIT09bil7dmFyIGw9bmV3IEVycm9yKFwiQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlc1wiKTt0aHJvdyBsLm5hbWU9XCJJbnZhcmlhbnQgVmlvbGF0aW9uXCIsbH19ZnVuY3Rpb24gdCgpe3JldHVybiBlfWUuaXNSZXF1aXJlZD1lO3ZhciByPXthcnJheTplLGJvb2w6ZSxmdW5jOmUsbnVtYmVyOmUsb2JqZWN0OmUsc3RyaW5nOmUsc3ltYm9sOmUsYW55OmUsYXJyYXlPZjp0LGVsZW1lbnQ6ZSxlbGVtZW50VHlwZTplLGluc3RhbmNlT2Y6dCxub2RlOmUsb2JqZWN0T2Y6dCxvbmVPZjp0LG9uZU9mVHlwZTp0LHNoYXBlOnQsZXhhY3Q6dCxjaGVja1Byb3BUeXBlczp1LHJlc2V0V2FybmluZ0NhY2hlOm99O3JldHVybiByLlByb3BUeXBlcz1yLHJ9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPVwiU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRURcIn1dKTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInRoLm9wdGlvbiB7XFxuICB3aWR0aDogNSU7XFxufVxcblxcbnRoLnRpdGxlIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wb2ludGVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudGguYWN0aW9uIHtcXG4gIHdpZHRoOiAxMCU7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=