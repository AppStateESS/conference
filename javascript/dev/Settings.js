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
/******/ 		"Settings": 0
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
/******/ 	deferredModules.push(["./javascript/Settings/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Settings/Contact.js":
/*!****************************************!*\
  !*** ./javascript/Settings/Contact.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






/* global $ */

var Contact = function Contact() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      contactName = _useState2[0],
      setContactName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      contactEmail = _useState4[0],
      setContactEmail = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('save'),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      buttonState = _useState6[0],
      setButtonState = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    $.ajax({
      url: 'conference/Admin/Settings/contact',
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        setContactName(data.contactName);
        setContactEmail(data.contactEmail);
      }
    });
  }, []);

  var saveContact = function saveContact() {
    setButtonState('saving');
    $.ajax({
      url: 'conference/Admin/Settings/contact',
      data: {
        contactName: contactName,
        contactEmail: contactEmail
      },
      dataType: 'json',
      type: 'post',
      success: function success() {
        setButtonState('saved');
      },
      error: function error() {}
    });
  };

  var saveContactButton = function saveContactButton() {
    switch (buttonState) {
      case 'save':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "btn btn-success",
          onClick: saveContact
        }, "Save contact");

      case 'saving':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "btn btn-outline-success"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSpinner"],
          spin: true
        }), " Saving...");

      case 'saved':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "btn btn-success"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCheck"]
        }), " Saved!");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "The person or entity sent in emails to visitors."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Contact name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    name: "contactName",
    onFocus: function onFocus() {
      return setButtonState('save');
    },
    className: "form-control",
    value: contactName,
    onChange: function onChange(e) {
      setContactName(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Contact email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    name: "contactEmail",
    onFocus: function onFocus() {
      return setButtonState('save');
    },
    className: "form-control",
    value: contactEmail,
    onChange: function onChange(e) {
      setContactEmail(e.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-center"
  }, saveContactButton()));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./javascript/Settings/FrontPage.js":
/*!******************************************!*\
  !*** ./javascript/Settings/FrontPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







/* global $ */

var FrontPage = function FrontPage(_ref) {
  _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1___default()(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      defaultConference = _useState2[0],
      setDefaultConference = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      conferences = _useState4[0],
      setConferences = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      saved = _useState6[0],
      setSaved = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    $.ajax({
      url: 'conference/Admin/Settings/defaultConference',
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        setDefaultConference(data.defaultConference);
      }
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    $.ajax({
      url: 'conference/Admin/Conference',
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        setConferences(data.listing);
      },
      error: function error() {}
    });
  }, []);

  var options = function options() {
    var confArray = conferences.map(function (value) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
        key: value.id,
        value: value.id
      }, value.title);
    });
    confArray.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: "0",
      key: "0"
    }, "Show all conferences on front page."));
    return confArray;
  };

  var saveConference = function saveConference() {
    $.ajax({
      url: 'conference/Admin/Settings/defaultConference',
      data: {
        defaultConference: defaultConference
      },
      dataType: 'json',
      type: 'post',
      success: function success() {
        setSaved(true);
      }
    });
  };

  var saveButton = function saveButton() {
    if (saved) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "btn btn-success",
        onClick: saveConference
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheck"]
      }), "\xA0 Saved!");
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "btn btn-success",
        onClick: saveConference
      }, "Save");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, "Set default conference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Instead of listing all conferences, you may prioritize one conference to show on the front page."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    value: defaultConference,
    className: "form-control",
    onChange: function onChange(e) {
      return setDefaultConference(e.target.value);
    }
  }, options()), saveButton());
};

FrontPage.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (FrontPage);

/***/ }),

/***/ "./javascript/Settings/index.jsx":
/*!***************************************!*\
  !*** ./javascript/Settings/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Settings; });
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Contact */ "./javascript/Settings/Contact.js");
/* harmony import */ var _FrontPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FrontPage */ "./javascript/Settings/FrontPage.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_11__);









function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







/* global $ */

var Settings = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Settings, _Component);

  var _super = _createSuper(Settings);

  function Settings(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Settings);

    _this = _super.call(this, props);
    _this.state = {
      locked: [],
      currentLockedId: 0,
      sessions: [],
      sessionId: 0,
      currentLocked: {},
      error: null
    };
    _this.section = 'Settings';
    _this.lockedListing = _this.lockedListing.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.lockThisComputer = _this.lockThisComputer.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.unlockThisComputer = _this.unlockThisComputer.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Settings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadLocked();
      this.loadSessions();
    }
  }, {
    key: "clearError",
    value: function clearError() {
      this.setState({
        error: null
      });
    }
  }, {
    key: "navbarButton",
    value: function navbarButton() {
      return;
    }
  }, {
    key: "getSearch",
    value: function getSearch() {
      return;
    }
  }, {
    key: "loadSessions",
    value: function loadSessions() {
      var _this2 = this;

      $.ajax({
        url: 'conference/Admin/Settings/upcomingSessions',
        data: {},
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          _this2.setState({
            sessions: data.listing
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "unlockThisComputer",
    value: function unlockThisComputer() {
      var _this3 = this;

      $.ajax({
        url: "conference/Admin/Locked/".concat(this.state.currentLockedId),
        dataType: 'json',
        type: 'delete',
        success: function success() {
          _this3.loadLocked();
        },
        error: function error() {}
      });
    }
  }, {
    key: "lockThisComputer",
    value: function lockThisComputer() {
      var _this4 = this;

      var sessionId = this.state.sessionId;
      $.ajax({
        url: 'conference/Admin/Locked/selfLock',
        data: {
          sessionId: sessionId
        },
        dataType: 'json',
        type: 'post',
        success: function success() {
          _this4.loadLocked();
        },
        error: function error() {}
      });
    }
  }, {
    key: "loadLocked",
    value: function loadLocked() {
      var _this5 = this;

      $.ajax({
        url: 'conference/Admin/Locked',
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          _this5.setState({
            locked: data.listing,
            currentLockedId: data.currentLockedId
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "getError",
    value: function getError() {
      if (this.state.error) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "alert alert-danger"
        }, this.state.error);
      }
    }
  }, {
    key: "unlock",
    value: function unlock(key) {
      var _this6 = this;

      var id = this.state.locked[key].id;
      $.ajax({
        url: "conference/Admin/Locked/".concat(id),
        dataType: 'json',
        type: 'delete',
        success: function success() {
          _this6.loadLocked();
        },
        error: function error() {}
      });
    }
  }, {
    key: "lockedListing",
    value: function lockedListing() {
      var _this7 = this;

      var locked = this.state.locked;

      if (locked.length === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("em", null, "No locks found."));
      } else {
        var rows = locked.map(function (value, key) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
            key: key
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            style: {
              width: '5%'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            className: "btn btn-success btn-sm",
            onClick: function onClick() {
              _this7.unlock(key);
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "fas fa-unlock"
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", null, dayjs__WEBPACK_IMPORTED_MODULE_11___default()(value.eventDate * 1000).format('MM-DD-YYYY'), " -", ' ', value.title, " - ", value.ip));
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", {
          className: "table"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", null, rows));
      }
    }
  }, {
    key: "selectSessions",
    value: function selectSessions() {
      var _this8 = this;

      var _this$state = this.state,
          sessions = _this$state.sessions,
          sessionId = _this$state.sessionId;

      if (sessions.length === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "No upcoming sessions");
      }

      var options = sessions.map(function (value, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
          key: value.id,
          value: value.id
        }, dayjs__WEBPACK_IMPORTED_MODULE_11___default()(value.eventDate * 1000).format('MM-DD-YYYY'), " - ", value.title);
      });
      var selfLockButton;

      if (this.state.currentLockedId > 0) {
        selfLockButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "btn btn-success",
          onClick: this.unlockThisComputer
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "fas fa-unlock"
        }), " Unlock this computer");
      } else {
        selfLockButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "input-group mb-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
          className: "form-control",
          value: sessionId.id,
          onChange: function onChange(e) {
            _this8.setState({
              sessionId: e.target.value
            });
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
          value: "0"
        }, "Choose an uncoming session below"), options), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "input-group-append"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "btn btn-danger",
          onClick: this.lockThisComputer,
          disabled: sessionId === 0
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "fas fa-lock"
        }), " Lock this computer to this session")));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-8 mx-auto text-center"
      }, selfLockButton));
    }
  }, {
    key: "render",
    value: function render() {
      var upcomingSessions = this.selectSessions();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, this.navbar, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "Settings"), this.getError(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_FrontPage__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Onsite registration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "This option will lock the current computer into onsite registration mode. This mode:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Prevents users from paying online, reducing liability."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Reduces registration to fewer steps.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "A default conference ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", null, "must"), " be set. If not, normal sign up procedure will proceed but visitor will not be able to pay offsite."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Currently onsite systems"), this.lockedListing(), upcomingSessions));
    }
  }]);

  return Settings;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);


Settings.propTypes = {
  locked: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Settings, null), document.getElementById('Settings'));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

module.exports = _objectDestructuringEmpty;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TZXR0aW5ncy9Db250YWN0LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvU2V0dGluZ3MvRnJvbnRQYWdlLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvU2V0dGluZ3MvaW5kZXguanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdERlc3RydWN0dXJpbmdFbXB0eS5qcyJdLCJuYW1lcyI6WyJDb250YWN0IiwidXNlU3RhdGUiLCJjb250YWN0TmFtZSIsInNldENvbnRhY3ROYW1lIiwiY29udGFjdEVtYWlsIiwic2V0Q29udGFjdEVtYWlsIiwiYnV0dG9uU3RhdGUiLCJzZXRCdXR0b25TdGF0ZSIsInVzZUVmZmVjdCIsIiQiLCJhamF4IiwidXJsIiwiZGF0YVR5cGUiLCJ0eXBlIiwic3VjY2VzcyIsImRhdGEiLCJzYXZlQ29udGFjdCIsImVycm9yIiwic2F2ZUNvbnRhY3RCdXR0b24iLCJmYVNwaW5uZXIiLCJmYUNoZWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwiRnJvbnRQYWdlIiwiZGVmYXVsdENvbmZlcmVuY2UiLCJzZXREZWZhdWx0Q29uZmVyZW5jZSIsImNvbmZlcmVuY2VzIiwic2V0Q29uZmVyZW5jZXMiLCJzYXZlZCIsInNldFNhdmVkIiwibGlzdGluZyIsIm9wdGlvbnMiLCJjb25mQXJyYXkiLCJtYXAiLCJpZCIsInRpdGxlIiwidW5zaGlmdCIsInNhdmVDb25mZXJlbmNlIiwic2F2ZUJ1dHRvbiIsInByb3BUeXBlcyIsIlNldHRpbmdzIiwicHJvcHMiLCJzdGF0ZSIsImxvY2tlZCIsImN1cnJlbnRMb2NrZWRJZCIsInNlc3Npb25zIiwic2Vzc2lvbklkIiwiY3VycmVudExvY2tlZCIsInNlY3Rpb24iLCJsb2NrZWRMaXN0aW5nIiwiYmluZCIsImxvY2tUaGlzQ29tcHV0ZXIiLCJ1bmxvY2tUaGlzQ29tcHV0ZXIiLCJsb2FkTG9ja2VkIiwibG9hZFNlc3Npb25zIiwic2V0U3RhdGUiLCJrZXkiLCJsZW5ndGgiLCJyb3dzIiwid2lkdGgiLCJ1bmxvY2siLCJkYXlqcyIsImV2ZW50RGF0ZSIsImZvcm1hdCIsImlwIiwic2VsZkxvY2tCdXR0b24iLCJ1cGNvbWluZ1Nlc3Npb25zIiwic2VsZWN0U2Vzc2lvbnMiLCJuYXZiYXIiLCJnZXRFcnJvciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFBUSxlQUFLLEVBQUM7QUFBZCw4Q0FORixFQU9HUyxPQVBILENBREYsZUFVRTtBQUFLLG1CQUFTLEVBQUM7QUFBZix3QkFDRTtBQUNFLG1CQUFTLEVBQUMsZ0JBRFo7QUFFRSxpQkFBTyxFQUFFLEtBQUtvQixnQkFGaEI7QUFHRSxrQkFBUSxFQUFFTCxTQUFTLEtBQUs7QUFIMUIsd0JBSUU7QUFBRyxtQkFBUyxFQUFDO0FBQWIsVUFKRix3Q0FERixDQVZGLENBREY7QUFxQkQ7O0FBQ0QsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBNENtQixjQUE1QyxDQURGLENBREY7QUFLRDs7OzZCQUVRO0FBQ1AsVUFBTUMsZ0JBQWdCLEdBQUcsS0FBS0MsY0FBTCxFQUF6QjtBQUVBLDBCQUNFLHdFQUNHLEtBQUtDLE1BRFIsZUFFRSxrRkFGRixFQUdHLEtBQUtDLFFBQUwsRUFISCxlQUlFLDJEQUFDLGdEQUFELE9BSkYsZUFLRSwyREFBQyxtREFBRCxPQUxGLGVBTUUscUZBQ0UsNkZBREYsZUFFRSw2SkFGRixlQU1FLG9GQUNFLGdJQURGLGVBRUUsOEdBRkYsQ0FORixlQVVFLDRHQUN1QixrRkFEdkIsd0dBVkYsZUFlRSxrR0FmRixFQWdCRyxLQUFLcEIsYUFBTCxFQWhCSCxFQWlCR2lCLGdCQWpCSCxDQU5GLENBREY7QUE0QkQ7Ozs7RUEvTm1DSSwrQzs7O0FBa090QzlCLFFBQVEsQ0FBQ0QsU0FBVCxHQUFxQjtBQUNuQkksUUFBTSxFQUFFNEIsaURBQVMsQ0FBQ0M7QUFEQyxDQUFyQjtBQUlBQyxnREFBUSxDQUFDQyxNQUFULGVBQWdCLDJEQUFDLFFBQUQsT0FBaEIsRUFBOEJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUE5QixFOzs7Ozs7Ozs7OztBQ2hQQTtBQUNBO0FBQ0E7O0FBRUEsMkMiLCJmaWxlIjoiU2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiU2V0dGluZ3NcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2phdmFzY3JpcHQvU2V0dGluZ3MvaW5kZXguanN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7ZmFDaGVjaywgZmFTcGlubmVyfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5cbi8qIGdsb2JhbCAkICovXG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb250YWN0TmFtZSwgc2V0Q29udGFjdE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjb250YWN0RW1haWwsIHNldENvbnRhY3RFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2J1dHRvblN0YXRlLCBzZXRCdXR0b25TdGF0ZV0gPSB1c2VTdGF0ZSgnc2F2ZScpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnY29uZmVyZW5jZS9BZG1pbi9TZXR0aW5ncy9jb250YWN0JyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICBzZXRDb250YWN0TmFtZShkYXRhLmNvbnRhY3ROYW1lKVxuICAgICAgICBzZXRDb250YWN0RW1haWwoZGF0YS5jb250YWN0RW1haWwpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgY29uc3Qgc2F2ZUNvbnRhY3QgPSAoKSA9PiB7XG4gICAgc2V0QnV0dG9uU3RhdGUoJ3NhdmluZycpXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvQWRtaW4vU2V0dGluZ3MvY29udGFjdCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbnRhY3ROYW1lOiBjb250YWN0TmFtZSxcbiAgICAgICAgY29udGFjdEVtYWlsOiBjb250YWN0RW1haWxcbiAgICAgIH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICBzZXRCdXR0b25TdGF0ZSgnc2F2ZWQnKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBzYXZlQ29udGFjdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKGJ1dHRvblN0YXRlKSB7XG4gICAgICBjYXNlICdzYXZlJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3NhdmVDb250YWN0fT5cbiAgICAgICAgICAgIFNhdmUgY29udGFjdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApXG5cbiAgICAgIGNhc2UgJ3NhdmluZyc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNwaW5uZXJ9IHNwaW4gLz4gU2F2aW5nLi4uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIClcblxuICAgICAgY2FzZSAnc2F2ZWQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hlY2t9IC8+IFNhdmVkIVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgIDxoMz5Db250YWN0PC9oMz5cbiAgICAgIDxwPlRoZSBwZXJzb24gb3IgZW50aXR5IHNlbnQgaW4gZW1haWxzIHRvIHZpc2l0b3JzLjwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgIDxsYWJlbD5Db250YWN0IG5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cImNvbnRhY3ROYW1lXCJcbiAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEJ1dHRvblN0YXRlKCdzYXZlJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgdmFsdWU9e2NvbnRhY3ROYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICBzZXRDb250YWN0TmFtZShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICA8bGFiZWw+Q29udGFjdCBlbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwiY29udGFjdEVtYWlsXCJcbiAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEJ1dHRvblN0YXRlKCdzYXZlJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgdmFsdWU9e2NvbnRhY3RFbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgc2V0Q29udGFjdEVtYWlsKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntzYXZlQ29udGFjdEJ1dHRvbigpfTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHtmYUNoZWNrfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5cbi8qIGdsb2JhbCAkICovXG5cbmNvbnN0IEZyb250UGFnZSA9ICh7fSkgPT4ge1xuICBjb25zdCBbZGVmYXVsdENvbmZlcmVuY2UsIHNldERlZmF1bHRDb25mZXJlbmNlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtjb25mZXJlbmNlcywgc2V0Q29uZmVyZW5jZXNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtzYXZlZCwgc2V0U2F2ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnY29uZmVyZW5jZS9BZG1pbi9TZXR0aW5ncy9kZWZhdWx0Q29uZmVyZW5jZScsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgc2V0RGVmYXVsdENvbmZlcmVuY2UoZGF0YS5kZWZhdWx0Q29uZmVyZW5jZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdjb25mZXJlbmNlL0FkbWluL0NvbmZlcmVuY2UnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgIHNldENvbmZlcmVuY2VzKGRhdGEubGlzdGluZylcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9LCBbXSlcblxuICBjb25zdCBvcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbmZBcnJheSA9IGNvbmZlcmVuY2VzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8b3B0aW9uIGtleT17dmFsdWUuaWR9IHZhbHVlPXt2YWx1ZS5pZH0+XG4gICAgICAgICAge3ZhbHVlLnRpdGxlfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgIClcbiAgICB9KVxuICAgIGNvbmZBcnJheS51bnNoaWZ0KFxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIiBrZXk9XCIwXCI+XG4gICAgICAgIFNob3cgYWxsIGNvbmZlcmVuY2VzIG9uIGZyb250IHBhZ2UuXG4gICAgICA8L29wdGlvbj5cbiAgICApXG4gICAgcmV0dXJuIGNvbmZBcnJheVxuICB9XG5cbiAgY29uc3Qgc2F2ZUNvbmZlcmVuY2UgPSAoKSA9PiB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvQWRtaW4vU2V0dGluZ3MvZGVmYXVsdENvbmZlcmVuY2UnLFxuICAgICAgZGF0YToge2RlZmF1bHRDb25mZXJlbmNlfSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAncG9zdCcsXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgIHNldFNhdmVkKHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHNhdmVCdXR0b24gPSAoKSA9PiB7XG4gICAgaWYgKHNhdmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3NhdmVDb25mZXJlbmNlfT5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hlY2t9IC8+XG4gICAgICAgICAgJm5ic3A7IFNhdmVkIVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXtzYXZlQ29uZmVyZW5jZX0+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgPGgzPlNldCBkZWZhdWx0IGNvbmZlcmVuY2U8L2gzPlxuICAgICAgPHA+XG4gICAgICAgIEluc3RlYWQgb2YgbGlzdGluZyBhbGwgY29uZmVyZW5jZXMsIHlvdSBtYXkgcHJpb3JpdGl6ZSBvbmUgY29uZmVyZW5jZSB0b1xuICAgICAgICBzaG93IG9uIHRoZSBmcm9udCBwYWdlLlxuICAgICAgPC9wPlxuICAgICAgPHNlbGVjdFxuICAgICAgICB2YWx1ZT17ZGVmYXVsdENvbmZlcmVuY2V9XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldERlZmF1bHRDb25mZXJlbmNlKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgIHtvcHRpb25zKCl9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIHtzYXZlQnV0dG9uKCl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuRnJvbnRQYWdlLnByb3BUeXBlcyA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250UGFnZVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCdcbmltcG9ydCBGcm9udFBhZ2UgZnJvbSAnLi9Gcm9udFBhZ2UnXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5cbi8qIGdsb2JhbCAkICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9ja2VkOiBbXSxcbiAgICAgIGN1cnJlbnRMb2NrZWRJZDogMCxcbiAgICAgIHNlc3Npb25zOiBbXSxcbiAgICAgIHNlc3Npb25JZDogMCxcbiAgICAgIGN1cnJlbnRMb2NrZWQ6IHt9LFxuICAgICAgZXJyb3I6IG51bGxcbiAgICB9XG4gICAgdGhpcy5zZWN0aW9uID0gJ1NldHRpbmdzJ1xuICAgIHRoaXMubG9ja2VkTGlzdGluZyA9IHRoaXMubG9ja2VkTGlzdGluZy5iaW5kKHRoaXMpXG4gICAgdGhpcy5sb2NrVGhpc0NvbXB1dGVyID0gdGhpcy5sb2NrVGhpc0NvbXB1dGVyLmJpbmQodGhpcylcbiAgICB0aGlzLnVubG9ja1RoaXNDb21wdXRlciA9IHRoaXMudW5sb2NrVGhpc0NvbXB1dGVyLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZExvY2tlZCgpXG4gICAgdGhpcy5sb2FkU2Vzc2lvbnMoKVxuICB9XG5cbiAgY2xlYXJFcnJvcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogbnVsbH0pXG4gIH1cblxuICBuYXZiYXJCdXR0b24oKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBnZXRTZWFyY2goKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsb2FkU2Vzc2lvbnMoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvQWRtaW4vU2V0dGluZ3MvdXBjb21pbmdTZXNzaW9ucycsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZXNzaW9uczogZGF0YS5saXN0aW5nfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgdW5sb2NrVGhpc0NvbXB1dGVyKCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IGBjb25mZXJlbmNlL0FkbWluL0xvY2tlZC8ke3RoaXMuc3RhdGUuY3VycmVudExvY2tlZElkfWAsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ2RlbGV0ZScsXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZExvY2tlZCgpXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSlcbiAgfVxuXG4gIGxvY2tUaGlzQ29tcHV0ZXIoKSB7XG4gICAgY29uc3Qge3Nlc3Npb25JZH0gPSB0aGlzLnN0YXRlXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvQWRtaW4vTG9ja2VkL3NlbGZMb2NrJyxcbiAgICAgIGRhdGE6IHtzZXNzaW9uSWR9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkTG9ja2VkKClcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgbG9hZExvY2tlZCgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnY29uZmVyZW5jZS9BZG1pbi9Mb2NrZWQnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxvY2tlZDogZGF0YS5saXN0aW5nLFxuICAgICAgICAgIGN1cnJlbnRMb2NrZWRJZDogZGF0YS5jdXJyZW50TG9ja2VkSWRcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgZ2V0RXJyb3IoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZXJyb3IpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPnt0aGlzLnN0YXRlLmVycm9yfTwvZGl2PlxuICAgIH1cbiAgfVxuXG4gIHVubG9jayhrZXkpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuc3RhdGUubG9ja2VkW2tleV0uaWRcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBgY29uZmVyZW5jZS9BZG1pbi9Mb2NrZWQvJHtpZH1gLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdkZWxldGUnLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRMb2NrZWQoKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgIH0pXG4gIH1cblxuICBsb2NrZWRMaXN0aW5nKCkge1xuICAgIGNvbnN0IHtsb2NrZWR9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChsb2NrZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8cD5cbiAgICAgICAgICA8ZW0+Tm8gbG9ja3MgZm91bmQuPC9lbT5cbiAgICAgICAgPC9wPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcm93cyA9IGxvY2tlZC5tYXAoKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8dHIga2V5PXtrZXl9PlxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICc1JSd9fT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudW5sb2NrKGtleSlcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdW5sb2NrXCI+PC9pPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIHtkYXlqcyh2YWx1ZS5ldmVudERhdGUgKiAxMDAwKS5mb3JtYXQoJ01NLURELVlZWVknKX0gLXsnICd9XG4gICAgICAgICAgICAgIHt2YWx1ZS50aXRsZX0gLSB7dmFsdWUuaXB9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICA8dGJvZHk+e3Jvd3N9PC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBzZWxlY3RTZXNzaW9ucygpIHtcbiAgICBjb25zdCB7c2Vzc2lvbnMsIHNlc3Npb25JZH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHNlc3Npb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDxkaXY+Tm8gdXBjb21pbmcgc2Vzc2lvbnM8L2Rpdj5cbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IHNlc3Npb25zLm1hcCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPG9wdGlvbiBrZXk9e3ZhbHVlLmlkfSB2YWx1ZT17dmFsdWUuaWR9PlxuICAgICAgICAgIHtkYXlqcyh2YWx1ZS5ldmVudERhdGUgKiAxMDAwKS5mb3JtYXQoJ01NLURELVlZWVknKX0gLSB7dmFsdWUudGl0bGV9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKVxuICAgIH0pXG4gICAgbGV0IHNlbGZMb2NrQnV0dG9uXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudExvY2tlZElkID4gMCkge1xuICAgICAgc2VsZkxvY2tCdXR0b24gPSAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17dGhpcy51bmxvY2tUaGlzQ29tcHV0ZXJ9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11bmxvY2tcIj48L2k+IFVubG9jayB0aGlzIGNvbXB1dGVyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmTG9ja0J1dHRvbiA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHZhbHVlPXtzZXNzaW9uSWQuaWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nlc3Npb25JZDogZS50YXJnZXQudmFsdWV9KVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPkNob29zZSBhbiB1bmNvbWluZyBzZXNzaW9uIGJlbG93PC9vcHRpb24+XG4gICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9ja1RoaXNDb21wdXRlcn1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Nlc3Npb25JZCA9PT0gMH0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1sb2NrXCI+PC9pPiBMb2NrIHRoaXMgY29tcHV0ZXIgdG8gdGhpcyBzZXNzaW9uXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04IG14LWF1dG8gdGV4dC1jZW50ZXJcIj57c2VsZkxvY2tCdXR0b259PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdXBjb21pbmdTZXNzaW9ucyA9IHRoaXMuc2VsZWN0U2Vzc2lvbnMoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLm5hdmJhcn1cbiAgICAgICAgPGgyPlNldHRpbmdzPC9oMj5cbiAgICAgICAge3RoaXMuZ2V0RXJyb3IoKX1cbiAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgPEZyb250UGFnZSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5PbnNpdGUgcmVnaXN0cmF0aW9uPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRoaXMgb3B0aW9uIHdpbGwgbG9jayB0aGUgY3VycmVudCBjb21wdXRlciBpbnRvIG9uc2l0ZSByZWdpc3RyYXRpb25cbiAgICAgICAgICAgIG1vZGUuIFRoaXMgbW9kZTpcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlByZXZlbnRzIHVzZXJzIGZyb20gcGF5aW5nIG9ubGluZSwgcmVkdWNpbmcgbGlhYmlsaXR5LjwvbGk+XG4gICAgICAgICAgICA8bGk+UmVkdWNlcyByZWdpc3RyYXRpb24gdG8gZmV3ZXIgc3RlcHMuPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQSBkZWZhdWx0IGNvbmZlcmVuY2UgPHN0cm9uZz5tdXN0PC9zdHJvbmc+IGJlIHNldC4gSWYgbm90LCBub3JtYWxcbiAgICAgICAgICAgIHNpZ24gdXAgcHJvY2VkdXJlIHdpbGwgcHJvY2VlZCBidXQgdmlzaXRvciB3aWxsIG5vdCBiZSBhYmxlIHRvIHBheVxuICAgICAgICAgICAgb2Zmc2l0ZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgzPkN1cnJlbnRseSBvbnNpdGUgc3lzdGVtczwvaDM+XG4gICAgICAgICAge3RoaXMubG9ja2VkTGlzdGluZygpfVxuICAgICAgICAgIHt1cGNvbWluZ1Nlc3Npb25zfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5TZXR0aW5ncy5wcm9wVHlwZXMgPSB7XG4gIGxvY2tlZDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPFNldHRpbmdzIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnU2V0dGluZ3MnKSlcbiIsImZ1bmN0aW9uIF9vYmplY3REZXN0cnVjdHVyaW5nRW1wdHkob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBkZXN0cnVjdHVyZSB1bmRlZmluZWRcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdERlc3RydWN0dXJpbmdFbXB0eTsiXSwic291cmNlUm9vdCI6IiJ9