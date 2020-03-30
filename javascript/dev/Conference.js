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
/******/ 		"Conference": 0
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
/******/ 	deferredModules.push(["./javascript/Conference/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Conference/ConferenceForm.js":
/*!*************************************************!*\
  !*** ./javascript/Conference/ConferenceForm.js ***!
  \*************************************************/
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
/* harmony import */ var _ConferenceQuestion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ConferenceQuestion */ "./javascript/Conference/ConferenceQuestion.js");
/* harmony import */ var _Shared_Editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Shared/Editor */ "./javascript/Shared/Editor.js");









function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var ConferenceForm = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ConferenceForm, _Component);

  var _super = _createSuper(ConferenceForm);

  function ConferenceForm(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ConferenceForm);

    _this = _super.call(this, props);
    _this.state = {
      titleError: false
    };
    _this.titleRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.services = _this.services.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.checkTitle = _this.checkTitle.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.clearCheck = _this.clearCheck.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.disableSave = _this.disableSave.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ConferenceForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.titleRef.current.focus();
    }
  }, {
    key: "services",
    value: function services() {
      if (this.props.services.length === 0) {
        return;
      }

      var serviceList = this.props.services.map(function (value, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          key: key,
          value: value.id
        }, value.title);
      });
      return serviceList;
    }
  }, {
    key: "checkTitle",
    value: function checkTitle() {
      this.setState({
        titleError: this.props.resource.title.length === 0
      });
    }
  }, {
    key: "clearCheck",
    value: function clearCheck() {
      this.setState({
        titleError: false
      });
    }
  }, {
    key: "disableSave",
    value: function disableSave() {
      var resource = this.props.resource;
      return resource.title.length === 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          update = _this$props.update,
          locations = _this$props.locations,
          resource = _this$props.resource,
          save = _this$props.save,
          addInfo = _this$props.addInfo,
          updateInfo = _this$props.updateInfo,
          dropInfo = _this$props.dropInfo,
          conferenceQuestion = _this$props.conferenceQuestion;
      var disableSave = this.disableSave();
      var titleClass = this.state.titleError ? 'form-control border-danger' : 'form-control';
      var locationListing;

      if (locations !== null) {
        locationListing = locations.map(function (value, key) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
            key: key,
            value: value.id
          }, value.title);
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "p-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "d-block"
      }, "Title:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        name: "title",
        type: "text",
        id: "conference-title",
        placeholder: this.state.titleError ? 'Title may not be empty.' : null,
        value: resource.title,
        onBlur: this.checkTitle,
        onFocus: this.clearCheck,
        ref: this.titleRef,
        onChange: update.bind(null, 'title'),
        className: titleClass
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "d-block"
      }, "Description:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Shared_Editor__WEBPACK_IMPORTED_MODULE_9__["default"], {
        ident: toString(resource.id),
        content: resource.description,
        update: update.bind(null, 'description')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, "Default location:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        onChange: update.bind(null, 'locationId'),
        value: resource.locationId,
        className: "form-control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "0",
        disabled: true
      }, "Choose a location below..."), locationListing))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, "Payment service:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        name: "accountId",
        id: "accountId",
        onChange: update.bind(null, 'accountId'),
        className: "form-control",
        value: resource.accountId
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "0"
      }, "Do not use a payment service"), this.services()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "d-flex justify-content-start mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", null, "Extra Visitor information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "ml-4 btn btn-success btn-sm",
        onClick: addInfo
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-plus"
      }), " Add question")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ConferenceQuestion__WEBPACK_IMPORTED_MODULE_8__["default"], {
        conferenceQuestion: conferenceQuestion,
        dropInfo: dropInfo,
        updateInfo: updateInfo
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-primary",
        disabled: disableSave,
        onClick: save
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-save"
      }), " Save")));
    }
  }]);

  return ConferenceForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

ConferenceForm.propTypes = {
  resource: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  locations: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  dropInfo: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  services: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  save: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  addInfo: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  updateInfo: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  conferenceQuestion: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (ConferenceForm);

/***/ }),

/***/ "./javascript/Conference/ConferenceQuestion.js":
/*!*****************************************************!*\
  !*** ./javascript/Conference/ConferenceQuestion.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined;




var ConferenceQuestion = function ConferenceQuestion(_ref) {
  var conferenceQuestion = _ref.conferenceQuestion,
      updateInfo = _ref.updateInfo,
      dropInfo = _ref.dropInfo;

  var updateQuestion = function updateQuestion(key, e) {
    updateInfo(e.target.value, 'question', key);
  };

  var updateType = function updateType(type, key) {
    if (type === 'checkbox') {
      updateInfo('0', 'required', key);
    }

    updateInfo(type, 'type', key);
  };

  var updateRequired = function updateRequired(required, key) {
    updateInfo(required === 1 ? 0 : 1, 'required', key);
  };

  var extraList;

  if (conferenceQuestion && conferenceQuestion.length > 0) {
    extraList = conferenceQuestion.map(function (info, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: key,
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card border-primary mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-sm btn-outline-danger float-right mb-3",
        onClick: dropInfo.bind(null, key)
      }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Question ", info.sort), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control mb-3",
        name: "question",
        value: info.question,
        onChange: updateQuestion.bind(_this, key)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        name: "type".concat(key),
        checked: info.type === 'text',
        onChange: updateType.bind(_this, 'text', key)
      }), "Text field"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ml-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "required".concat(key),
        checked: info.required === 1,
        onChange: updateRequired.bind(_this, info.required, key)
      }), "Text field required")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        name: "type".concat(key),
        checked: info.type === 'checkbox',
        onChange: updateType.bind(_this, 'checkbox', key)
      }), "Checkbox"))));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, extraList);
};

ConferenceQuestion.propTypes = {
  conferenceQuestion: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  resource: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  updateInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  dropInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ConferenceQuestion);

/***/ }),

/***/ "./javascript/Conference/index.jsx":
/*!*****************************************!*\
  !*** ./javascript/Conference/index.jsx ***!
  \*****************************************/
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
/* harmony import */ var _ConferenceForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ConferenceForm */ "./javascript/Conference/ConferenceForm.js");
/* harmony import */ var _Shared_Locations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Shared/Locations */ "./javascript/Shared/Locations.js");










function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






/* global $ */

var defaultResource = {
  id: 0,
  title: '',
  description: '',
  locationId: 0,
  active: 1
};
var defaultInfo = {
  id: 0,
  type: 'text',
  question: '',
  required: 0,
  sort: 1
};

var Conference = /*#__PURE__*/function (_Listing) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Conference, _Listing);

  var _super = _createSuper(Conference);

  function Conference(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Conference);

    _this = _super.call(this, props);
    _this.restUrl = 'conference/Admin/Conference/';
    _this.label = 'Conference';
    _this.defaultResource = Object.assign({}, defaultResource);
    _this.defaultInfo = Object.assign({}, defaultInfo);
    _this.locations = null;
    _this.state.conferenceQuestion = [];
    _this.addInfo = _this.addInfo.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.updateInfo = _this.updateInfo.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.dropInfo = _this.dropInfo.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.loadConferenceQuestion = _this.loadConferenceQuestion.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));

    var titleCallback = function titleCallback(val) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "./conference/User/Conference/".concat(val.id)
      }, val.title);
    };

    var dropdown = function dropdown(key) {
      var conferenceId = _this.state.listing[key].id;
      var accountId = _this.state.listing[key].accountId;
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
        href: './conference/Admin/Session/?conferenceId=' + conferenceId
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-list"
      }), "\xA0Sessions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
        className: "my-1"
      }), accountId > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "dropdown-item pointer",
        href: "conference/Admin/Payment/syncAccount/?conferenceId=".concat(conferenceId)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-money-check-alt"
      }), " Force service") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "dropdown-item pointer",
        href: "#",
        onClick: _this.editResource.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), key)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-edit"
      }), "\xA0Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "dropdown-item pointer",
        href: "#",
        onClick: _this.deletePrompt.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), key)
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
      callback: titleCallback,
      sort: true
    }, {
      column: 'location',
      label: 'Location'
    }, {
      column: 'sessionCount',
      label: 'Sessions',
      className: 'text-right',
      callback: function callback(row) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "conference/Admin/Session/?conferenceId=".concat(row.id)
        }, row.sessionCount);
      }
    }];
    _this.state.resource = Object.assign({}, _this.defaultResource);
    _this.locations = null;
    _this.state.services = [];
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Conference, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Conference.prototype), "componentDidMount", this).call(this);

      Object(_Shared_Locations__WEBPACK_IMPORTED_MODULE_11__["default"])(this);
      this.loadServices();
    }
  }, {
    key: "loadResource",
    value: function loadResource(key) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Conference.prototype), "loadResource", this).call(this, key);

      this.loadConferenceQuestion(key);
    }
  }, {
    key: "loadServices",
    value: function loadServices() {
      var _this2 = this;

      $.ajax({
        url: 'conference/Admin/Account/',
        data: {},
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          _this2.setState({
            services: data.listing
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "loadConferenceQuestion",
    value: function loadConferenceQuestion(key) {
      var _this3 = this;

      var conferenceId = this.state.listing[key].id;
      $.ajax({
        url: 'conference/Admin/ConferenceQuestion/conference',
        data: {
          id: conferenceId
        },
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          _this3.setState({
            conferenceQuestion: data.conferenceQuestion
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "deletePrompt",
    value: function deletePrompt(key, e) {
      e.preventDefault();
      var confirm = prompt('Are you sure you want to delete this conference and all its sessions, registrations, and payments? If you are sure, type "DELETE" below.');

      if (confirm === 'DELETE') {
        this.sendDelete(key);
      }
    }
  }, {
    key: "sendDelete",
    value: function sendDelete(key) {
      var _this4 = this;

      $.ajax({
        url: 'conference/Admin/Conference/' + this.state.listing[key].id,
        data: {},
        dataType: 'json',
        type: 'delete',
        success: function success() {
          _this4.load();
        },
        error: function error() {}
      });
    }
  }, {
    key: "addInfo",
    value: function addInfo() {
      var conferenceQuestion = this.state.conferenceQuestion;
      var info = Object.assign({}, this.defaultInfo);

      if (conferenceQuestion.length > 0) {
        info.sort = String(parseInt(conferenceQuestion[conferenceQuestion.length - 1].sort) + 1);
      }

      conferenceQuestion.push(info);
      this.setState({
        conferenceQuestion: conferenceQuestion
      });
    }
  }, {
    key: "dropInfo",
    value: function dropInfo(key) {
      var _this5 = this;

      var conferenceQuestion = this.state.conferenceQuestion;
      var info = conferenceQuestion[key];
      conferenceQuestion.splice(key, 1);
      this.setState({
        conferenceQuestion: conferenceQuestion
      });

      if (info.id) {
        $.ajax({
          url: 'conference/Admin/ConferenceQuestion/' + info.id,
          data: {},
          dataType: 'json',
          type: 'delete',
          success: function success() {},
          error: function error() {
            _this5.setMessage('Could not delete extra info');
          }
        });
      }
    }
  }, {
    key: "updateInfo",
    value: function updateInfo(value, section, key) {
      var conferenceQuestion = this.state.conferenceQuestion;
      conferenceQuestion[key][section] = value;
      this.setState({
        conferenceQuestion: conferenceQuestion
      });
    }
  }, {
    key: "form",
    value: function form(overlay) {
      if (!overlay) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null);
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ConferenceForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
          services: this.state.services,
          conferenceQuestion: this.state.conferenceQuestion,
          updateInfo: this.updateInfo,
          dropInfo: this.dropInfo,
          addInfo: this.addInfo,
          save: this.save,
          close: this.finish,
          resource: this.state.resource,
          update: this.update,
          locations: this.locations
        });
      }
    }
  }, {
    key: "success",
    value: function success(data) {
      if (data.success) {
        this.saveConferenceQuestion(data.id);
        this.load();
        this.setMessage( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "far fa-thumbs-up"
        }), "\xA0Save successful."), 'success');
        this.reset();
      } else {
        this.setMessage( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "fas fa-exclamation-triangle"
        }), "\xA0Unable to save:", data.error));
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Conference.prototype), "reset", this).call(this);

      this.setState({
        conferenceQuestion: []
      });
    }
  }, {
    key: "saveConferenceQuestion",
    value: function saveConferenceQuestion(conferenceId) {
      var _this6 = this;

      var conferenceQuestion = this.state.conferenceQuestion;

      if (conferenceQuestion.length === 0) {
        return;
      }

      $.ajax({
        url: 'conference/Admin/ConferenceQuestion/',
        data: {
          conferenceQuestion: conferenceQuestion,
          conferenceId: conferenceId
        },
        dataType: 'json',
        type: 'post',
        success: function success() {},
        error: function error() {
          _this6.setMessage('Could not save extra information data.');
        }
      });
    }
  }, {
    key: "title",
    value: function title() {
      var warning;

      if (this.locations !== null && this.locations.length === 0) {
        warning = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "alert alert-warning"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "fas fa-exclamation-triangle"
        }), "You should ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "conference/Admin/Location"
        }, "create a location"), ' ', "to assign to your conferences.");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "Conferences"), warning);
    }
  }, {
    key: "overlay",
    value: function overlay() {
      return {
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "conference-form"
        }, this.form(this.state.overlay)),
        width: '90%',
        title: this.state.resource.id > 0 ? 'Update conference' : 'Create conference',
        close: this.load
      };
    }
  }]);

  return Conference;
}(_essappstate_canopy_listing__WEBPACK_IMPORTED_MODULE_9___default.a);

react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Conference, null), document.getElementById('Conference'));

/***/ }),

/***/ "./javascript/Shared/Editor.js":
/*!*************************************!*\
  !*** ./javascript/Shared/Editor.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var froala_editor_css_froala_style_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! froala-editor/css/froala_style.min.css */ "./node_modules/froala-editor/css/froala_style.min.css");
/* harmony import */ var froala_editor_css_froala_style_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(froala_editor_css_froala_style_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var froala_editor_css_froala_editor_pkgd_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! froala-editor/css/froala_editor.pkgd.min.css */ "./node_modules/froala-editor/css/froala_editor.pkgd.min.css");
/* harmony import */ var froala_editor_css_froala_editor_pkgd_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(froala_editor_css_froala_editor_pkgd_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! froala-editor/js/plugins.pkgd.min.js */ "./node_modules/froala-editor/js/plugins.pkgd.min.js");
/* harmony import */ var froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-froala-wysiwyg */ "./node_modules/react-froala-wysiwyg/index.js");
/* harmony import */ var react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_10__);






function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Editor = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Editor, _Component);

  var _super = _createSuper(Editor);

  function Editor(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Editor);

    _this = _super.call(this, props);
    _this.config = {
      quickInsertEnabled: false,
      toolbarButtons: ['bold', 'italic', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertLink', 'insertTable', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', 'html']
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Editor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      new react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_10___default.a();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_10___default.a, {
        tag: "textarea",
        config: this.config,
        model: this.props.content,
        onModelChange: this.props.update
      });
    }
  }]);

  return Editor;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Editor.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  update: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  ident: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Editor);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9Db25mZXJlbmNlL0NvbmZlcmVuY2VGb3JtLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvQ29uZmVyZW5jZS9Db25mZXJlbmNlUXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9Db25mZXJlbmNlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1NoYXJlZC9FZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TaGFyZWQvTG9jYXRpb25zLmpzIl0sIm5hbWVzIjpbIkNvbmZlcmVuY2VGb3JtIiwicHJvcHMiLCJzdGF0ZSIsInRpdGxlRXJyb3IiLCJ0aXRsZVJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwic2VydmljZXMiLCJiaW5kIiwiY2hlY2tUaXRsZSIsImNsZWFyQ2hlY2siLCJkaXNhYmxlU2F2ZSIsImN1cnJlbnQiLCJmb2N1cyIsImxlbmd0aCIsInNlcnZpY2VMaXN0IiwibWFwIiwidmFsdWUiLCJrZXkiLCJpZCIsInRpdGxlIiwic2V0U3RhdGUiLCJyZXNvdXJjZSIsInVwZGF0ZSIsImxvY2F0aW9ucyIsInNhdmUiLCJhZGRJbmZvIiwidXBkYXRlSW5mbyIsImRyb3BJbmZvIiwiY29uZmVyZW5jZVF1ZXN0aW9uIiwidGl0bGVDbGFzcyIsImxvY2F0aW9uTGlzdGluZyIsInRvU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbklkIiwiYWNjb3VudElkIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZnVuYyIsImFycmF5IiwiQ29uZmVyZW5jZVF1ZXN0aW9uIiwidXBkYXRlUXVlc3Rpb24iLCJlIiwidGFyZ2V0IiwidXBkYXRlVHlwZSIsInR5cGUiLCJ1cGRhdGVSZXF1aXJlZCIsInJlcXVpcmVkIiwiZXh0cmFMaXN0IiwiaW5mbyIsInNvcnQiLCJxdWVzdGlvbiIsIm51bWJlciIsImRlZmF1bHRSZXNvdXJjZSIsImFjdGl2ZSIsImRlZmF1bHRJbmZvIiwiQ29uZmVyZW5jZSIsInJlc3RVcmwiLCJsYWJlbCIsIk9iamVjdCIsImFzc2lnbiIsImxvYWRDb25mZXJlbmNlUXVlc3Rpb24iLCJ0aXRsZUNhbGxiYWNrIiwidmFsIiwiZHJvcGRvd24iLCJjb25mZXJlbmNlSWQiLCJsaXN0aW5nIiwiZWRpdFJlc291cmNlIiwiZGVsZXRlUHJvbXB0IiwiY29sdW1ucyIsImNvbHVtbiIsImNhbGxiYWNrIiwicm93Iiwic3R5bGUiLCJ3aWR0aCIsImNsYXNzTmFtZSIsInNlc3Npb25Db3VudCIsImxvYWRMb2NhdGlvbnMiLCJsb2FkU2VydmljZXMiLCIkIiwiYWpheCIsInVybCIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsInByZXZlbnREZWZhdWx0IiwiY29uZmlybSIsInByb21wdCIsInNlbmREZWxldGUiLCJsb2FkIiwiU3RyaW5nIiwicGFyc2VJbnQiLCJwdXNoIiwic3BsaWNlIiwic2V0TWVzc2FnZSIsInNlY3Rpb24iLCJvdmVybGF5IiwiZmluaXNoIiwic2F2ZUNvbmZlcmVuY2VRdWVzdGlvbiIsInJlc2V0Iiwid2FybmluZyIsImNvbnRlbnQiLCJmb3JtIiwiY2xvc2UiLCJMaXN0aW5nIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiRWRpdG9yIiwiY29uZmlnIiwicXVpY2tJbnNlcnRFbmFibGVkIiwidG9vbGJhckJ1dHRvbnMiLCJGcm9hbGFFZGl0b3IiLCJzdHJpbmciLCJpZGVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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LEVBQUUsS0FBS3ZHLEtBQUwsQ0FBV3NCO0FBSjVCLFFBREY7QUFRRDs7OztFQXRDa0JhLCtDOztBQXlDckI0RSxNQUFNLENBQUMzRSxTQUFQLEdBQW1CO0FBQ2pCbUUsU0FBTyxFQUFFbEUsaURBQVMsQ0FBQytFLE1BREY7QUFFakI5RixRQUFNLEVBQUVlLGlEQUFTLENBQUNFLElBRkQ7QUFHakI4RSxPQUFLLEVBQUVoRixpREFBUyxDQUFDK0U7QUFIQSxDQUFuQjtBQU1lTCxxRUFBZixFOzs7Ozs7Ozs7Ozs7QUN2REE7QUFBQTtBQUVBLElBQU1qQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUF6RCxRQUFRLEVBQUk7QUFDaEMyRCxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUUsMkJBREE7QUFFTEUsWUFBUSxFQUFFLE1BRkw7QUFHTHRDLFFBQUksRUFBRSxLQUhEO0FBSUx1QyxXQUFPLEVBQUUsaUJBQUFGLElBQUksRUFBSTtBQUNmOUQsY0FBUSxDQUFDRSxTQUFULEdBQXFCNEQsSUFBSSxDQUFDaEIsT0FBMUI7QUFDRCxLQU5JO0FBT0xtQixTQUFLLEVBQUUsaUJBQU07QUFDWGpFLGNBQVEsQ0FBQzJFLFVBQVQsQ0FBb0IseUJBQXBCO0FBQ0Q7QUFUSSxHQUFQO0FBV0QsQ0FaRDs7QUFjZWxCLDRFQUFmLEUiLCJmaWxlIjoiQ29uZmVyZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJDb25mZXJlbmNlXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9qYXZhc2NyaXB0L0NvbmZlcmVuY2UvaW5kZXguanN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQ29uZmVyZW5jZVF1ZXN0aW9uIGZyb20gJy4vQ29uZmVyZW5jZVF1ZXN0aW9uJ1xuaW1wb3J0IEVkaXRvciBmcm9tICcuLi9TaGFyZWQvRWRpdG9yJ1xuXG5jbGFzcyBDb25mZXJlbmNlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlRXJyb3I6IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy50aXRsZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cbiAgICB0aGlzLnNlcnZpY2VzID0gdGhpcy5zZXJ2aWNlcy5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGVja1RpdGxlID0gdGhpcy5jaGVja1RpdGxlLmJpbmQodGhpcylcbiAgICB0aGlzLmNsZWFyQ2hlY2sgPSB0aGlzLmNsZWFyQ2hlY2suYmluZCh0aGlzKVxuICAgIHRoaXMuZGlzYWJsZVNhdmUgPSB0aGlzLmRpc2FibGVTYXZlLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudGl0bGVSZWYuY3VycmVudC5mb2N1cygpXG4gIH1cblxuICBzZXJ2aWNlcygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZXJ2aWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgc2VydmljZUxpc3QgPSB0aGlzLnByb3BzLnNlcnZpY2VzLm1hcCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e3ZhbHVlLmlkfT5cbiAgICAgICAgICB7dmFsdWUudGl0bGV9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIHNlcnZpY2VMaXN0XG4gIH1cblxuICBjaGVja1RpdGxlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGl0bGVFcnJvcjogdGhpcy5wcm9wcy5yZXNvdXJjZS50aXRsZS5sZW5ndGggPT09IDBcbiAgICB9KVxuICB9XG5cbiAgY2xlYXJDaGVjaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt0aXRsZUVycm9yOiBmYWxzZX0pXG4gIH1cblxuICBkaXNhYmxlU2F2ZSgpIHtcbiAgICBjb25zdCB7cmVzb3VyY2V9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiByZXNvdXJjZS50aXRsZS5sZW5ndGggPT09IDBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB1cGRhdGUsXG4gICAgICBsb2NhdGlvbnMsXG4gICAgICByZXNvdXJjZSxcbiAgICAgIHNhdmUsXG4gICAgICBhZGRJbmZvLFxuICAgICAgdXBkYXRlSW5mbyxcbiAgICAgIGRyb3BJbmZvLFxuICAgICAgY29uZmVyZW5jZVF1ZXN0aW9uXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBkaXNhYmxlU2F2ZSA9IHRoaXMuZGlzYWJsZVNhdmUoKVxuICAgIGNvbnN0IHRpdGxlQ2xhc3MgPSB0aGlzLnN0YXRlLnRpdGxlRXJyb3JcbiAgICAgID8gJ2Zvcm0tY29udHJvbCBib3JkZXItZGFuZ2VyJ1xuICAgICAgOiAnZm9ybS1jb250cm9sJ1xuXG4gICAgbGV0IGxvY2F0aW9uTGlzdGluZ1xuICAgIGlmIChsb2NhdGlvbnMgIT09IG51bGwpIHtcbiAgICAgIGxvY2F0aW9uTGlzdGluZyA9IGxvY2F0aW9ucy5tYXAoKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17dmFsdWUuaWR9PlxuICAgICAgICAgICAge3ZhbHVlLnRpdGxlfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImQtYmxvY2tcIj5cbiAgICAgICAgICAgIFRpdGxlOjxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwiY29uZmVyZW5jZS10aXRsZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUudGl0bGVFcnJvciA/ICdUaXRsZSBtYXkgbm90IGJlIGVtcHR5LicgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZT17cmVzb3VyY2UudGl0bGV9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuY2hlY2tUaXRsZX1cbiAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuY2xlYXJDaGVja31cbiAgICAgICAgICAgIHJlZj17dGhpcy50aXRsZVJlZn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGUuYmluZChudWxsLCAndGl0bGUnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGl0bGVDbGFzc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImQtYmxvY2tcIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgIGlkZW50PXt0b1N0cmluZyhyZXNvdXJjZS5pZCl9XG4gICAgICAgICAgICBjb250ZW50PXtyZXNvdXJjZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIHVwZGF0ZT17dXBkYXRlLmJpbmQobnVsbCwgJ2Rlc2NyaXB0aW9uJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5EZWZhdWx0IGxvY2F0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlLmJpbmQobnVsbCwgJ2xvY2F0aW9uSWQnKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cmVzb3VyY2UubG9jYXRpb25JZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiIGRpc2FibGVkPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgIENob29zZSBhIGxvY2F0aW9uIGJlbG93Li4uXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAge2xvY2F0aW9uTGlzdGluZ31cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICA8bGFiZWw+UGF5bWVudCBzZXJ2aWNlOjwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9XCJhY2NvdW50SWRcIlxuICAgICAgICAgICAgICBpZD1cImFjY291bnRJZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGUuYmluZChudWxsLCAnYWNjb3VudElkJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtyZXNvdXJjZS5hY2NvdW50SWR9PlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPkRvIG5vdCB1c2UgYSBwYXltZW50IHNlcnZpY2U8L29wdGlvbj5cbiAgICAgICAgICAgICAge3RoaXMuc2VydmljZXMoKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IG1iLTRcIj5cbiAgICAgICAgICA8aDQ+RXh0cmEgVmlzaXRvciBpbmZvcm1hdGlvbjwvaDQ+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtbC00IGJ0biBidG4tc3VjY2VzcyBidG4tc21cIiBvbkNsaWNrPXthZGRJbmZvfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCIgLz4gQWRkIHF1ZXN0aW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8Q29uZmVyZW5jZVF1ZXN0aW9uXG4gICAgICAgICAgICBjb25mZXJlbmNlUXVlc3Rpb249e2NvbmZlcmVuY2VRdWVzdGlvbn1cbiAgICAgICAgICAgIGRyb3BJbmZvPXtkcm9wSW5mb31cbiAgICAgICAgICAgIHVwZGF0ZUluZm89e3VwZGF0ZUluZm99XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVTYXZlfVxuICAgICAgICAgICAgb25DbGljaz17c2F2ZX0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZVwiIC8+IFNhdmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuQ29uZmVyZW5jZUZvcm0ucHJvcFR5cGVzID0ge1xuICByZXNvdXJjZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgbG9jYXRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRyb3BJbmZvOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VydmljZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgc2F2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFkZEluZm86IFByb3BUeXBlcy5mdW5jLFxuICB1cGRhdGVJbmZvOiBQcm9wVHlwZXMuZnVuYyxcbiAgY29uZmVyZW5jZVF1ZXN0aW9uOiBQcm9wVHlwZXMuYXJyYXlcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmVyZW5jZUZvcm1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBDb25mZXJlbmNlUXVlc3Rpb24gPSAoe2NvbmZlcmVuY2VRdWVzdGlvbiwgdXBkYXRlSW5mbywgZHJvcEluZm99KSA9PiB7XG4gIGNvbnN0IHVwZGF0ZVF1ZXN0aW9uID0gKGtleSwgZSkgPT4ge1xuICAgIHVwZGF0ZUluZm8oZS50YXJnZXQudmFsdWUsICdxdWVzdGlvbicsIGtleSlcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVR5cGUgPSAodHlwZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHVwZGF0ZUluZm8oJzAnLCAncmVxdWlyZWQnLCBrZXkpXG4gICAgfVxuICAgIHVwZGF0ZUluZm8odHlwZSwgJ3R5cGUnLCBrZXkpXG4gIH1cblxuICBjb25zdCB1cGRhdGVSZXF1aXJlZCA9IChyZXF1aXJlZCwga2V5KSA9PiB7XG4gICAgdXBkYXRlSW5mbyhyZXF1aXJlZCA9PT0gMSA/IDAgOiAxLCAncmVxdWlyZWQnLCBrZXkpXG4gIH1cblxuICBsZXQgZXh0cmFMaXN0XG4gIGlmIChjb25mZXJlbmNlUXVlc3Rpb24gJiYgY29uZmVyZW5jZVF1ZXN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICBleHRyYUxpc3QgPSBjb25mZXJlbmNlUXVlc3Rpb24ubWFwKChpbmZvLCBrZXkpID0+IChcbiAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXItcHJpbWFyeSBtYi0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1kYW5nZXIgZmxvYXQtcmlnaHQgbWItM1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2Ryb3BJbmZvLmJpbmQobnVsbCwga2V5KX0+XG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8bGFiZWw+UXVlc3Rpb24ge2luZm8uc29ydH08L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIlxuICAgICAgICAgICAgICBuYW1lPVwicXVlc3Rpb25cIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5mby5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVF1ZXN0aW9uLmJpbmQodGhpcywga2V5KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgbmFtZT17YHR5cGUke2tleX1gfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2luZm8udHlwZSA9PT0gJ3RleHQnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVUeXBlLmJpbmQodGhpcywgJ3RleHQnLCBrZXkpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAmIzMyOyBUZXh0IGZpZWxkXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgcmVxdWlyZWQke2tleX1gfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aW5mby5yZXF1aXJlZCA9PT0gMX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVSZXF1aXJlZC5iaW5kKHRoaXMsIGluZm8ucmVxdWlyZWQsIGtleSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAmIzMyOyBUZXh0IGZpZWxkIHJlcXVpcmVkXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXtgdHlwZSR7a2V5fWB9XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17aW5mby50eXBlID09PSAnY2hlY2tib3gnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVUeXBlLmJpbmQodGhpcywgJ2NoZWNrYm94Jywga2V5KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgJiMzMjsgQ2hlY2tib3hcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKSlcbiAgfVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPntleHRyYUxpc3R9PC9kaXY+XG59XG5cbkNvbmZlcmVuY2VRdWVzdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNvbmZlcmVuY2VRdWVzdGlvbjogUHJvcFR5cGVzLmFycmF5LFxuICByZXNvdXJjZTogUHJvcFR5cGVzLm9iamVjdCxcbiAga2V5OiBQcm9wVHlwZXMubnVtYmVyLFxuICB1cGRhdGVJbmZvOiBQcm9wVHlwZXMuZnVuYyxcbiAgZHJvcEluZm86IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZlcmVuY2VRdWVzdGlvblxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IExpc3RpbmcgZnJvbSAnQGVzc2FwcHN0YXRlL2Nhbm9weS1saXN0aW5nJ1xuaW1wb3J0IENvbmZlcmVuY2VGb3JtIGZyb20gJy4vQ29uZmVyZW5jZUZvcm0nXG5pbXBvcnQgbG9hZExvY2F0aW9ucyBmcm9tICcuLi9TaGFyZWQvTG9jYXRpb25zJ1xuXG4vKiBnbG9iYWwgJCAqL1xuXG5jb25zdCBkZWZhdWx0UmVzb3VyY2UgPSB7XG4gIGlkOiAwLFxuICB0aXRsZTogJycsXG4gIGRlc2NyaXB0aW9uOiAnJyxcbiAgbG9jYXRpb25JZDogMCxcbiAgYWN0aXZlOiAxXG59XG5cbmNvbnN0IGRlZmF1bHRJbmZvID0ge1xuICBpZDogMCxcbiAgdHlwZTogJ3RleHQnLFxuICBxdWVzdGlvbjogJycsXG4gIHJlcXVpcmVkOiAwLFxuICBzb3J0OiAxXG59XG5cbmNsYXNzIENvbmZlcmVuY2UgZXh0ZW5kcyBMaXN0aW5nIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnJlc3RVcmwgPSAnY29uZmVyZW5jZS9BZG1pbi9Db25mZXJlbmNlLydcbiAgICB0aGlzLmxhYmVsID0gJ0NvbmZlcmVuY2UnXG4gICAgdGhpcy5kZWZhdWx0UmVzb3VyY2UgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UmVzb3VyY2UpXG4gICAgdGhpcy5kZWZhdWx0SW5mbyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRJbmZvKVxuICAgIHRoaXMubG9jYXRpb25zID0gbnVsbFxuXG4gICAgdGhpcy5zdGF0ZS5jb25mZXJlbmNlUXVlc3Rpb24gPSBbXVxuXG4gICAgdGhpcy5hZGRJbmZvID0gdGhpcy5hZGRJbmZvLmJpbmQodGhpcylcbiAgICB0aGlzLnVwZGF0ZUluZm8gPSB0aGlzLnVwZGF0ZUluZm8uYmluZCh0aGlzKVxuICAgIHRoaXMuZHJvcEluZm8gPSB0aGlzLmRyb3BJbmZvLmJpbmQodGhpcylcbiAgICB0aGlzLmxvYWRDb25mZXJlbmNlUXVlc3Rpb24gPSB0aGlzLmxvYWRDb25mZXJlbmNlUXVlc3Rpb24uYmluZCh0aGlzKVxuXG4gICAgY29uc3QgdGl0bGVDYWxsYmFjayA9IHZhbCA9PiB7XG4gICAgICByZXR1cm4gPGEgaHJlZj17YC4vY29uZmVyZW5jZS9Vc2VyL0NvbmZlcmVuY2UvJHt2YWwuaWR9YH0+e3ZhbC50aXRsZX08L2E+XG4gICAgfVxuXG4gICAgY29uc3QgZHJvcGRvd24gPSBrZXkgPT4ge1xuICAgICAgY29uc3QgY29uZmVyZW5jZUlkID0gdGhpcy5zdGF0ZS5saXN0aW5nW2tleV0uaWRcbiAgICAgIGNvbnN0IGFjY291bnRJZCA9IHRoaXMuc3RhdGUubGlzdGluZ1trZXldLmFjY291bnRJZFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgICAgICBpZD1cImRyb3Bkb3duTWVudUJ1dHRvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUJ1dHRvblwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBwb2ludGVyXCJcbiAgICAgICAgICAgICAgaHJlZj17Jy4vY29uZmVyZW5jZS9BZG1pbi9TZXNzaW9uLz9jb25mZXJlbmNlSWQ9JyArIGNvbmZlcmVuY2VJZH0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1saXN0XCIgLz5cbiAgICAgICAgICAgICAgJm5ic3A7U2Vzc2lvbnNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS0xXCIgLz5cbiAgICAgICAgICAgIHthY2NvdW50SWQgPiAwID8gKFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgaHJlZj17YGNvbmZlcmVuY2UvQWRtaW4vUGF5bWVudC9zeW5jQWNjb3VudC8/Y29uZmVyZW5jZUlkPSR7Y29uZmVyZW5jZUlkfWB9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVjay1hbHRcIj48L2k+IEZvcmNlIHNlcnZpY2VcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHBvaW50ZXJcIlxuICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZWRpdFJlc291cmNlLmJpbmQodGhpcywga2V5KX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0XCIgLz5cbiAgICAgICAgICAgICAgJm5ic3A7RWRpdFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBwb2ludGVyXCJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRlbGV0ZVByb21wdC5iaW5kKHRoaXMsIGtleSl9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2hcIiAvPlxuICAgICAgICAgICAgICAmbmJzcDtEZWxldGVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgdGhpcy5jb2x1bW5zID0gW1xuICAgICAge1xuICAgICAgICBjb2x1bW46ICdvcHRpb25zJyxcbiAgICAgICAgY2FsbGJhY2s6IChyb3csIGtleSkgPT4ge1xuICAgICAgICAgIHJldHVybiBkcm9wZG93bihrZXkpXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6ICcxMCUnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbHVtbjogJ3RpdGxlJyxcbiAgICAgICAgbGFiZWw6ICdUaXRsZScsXG4gICAgICAgIGNhbGxiYWNrOiB0aXRsZUNhbGxiYWNrLFxuICAgICAgICBzb3J0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICdsb2NhdGlvbicsXG4gICAgICAgIGxhYmVsOiAnTG9jYXRpb24nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICdzZXNzaW9uQ291bnQnLFxuICAgICAgICBsYWJlbDogJ1Nlc3Npb25zJyxcbiAgICAgICAgY2xhc3NOYW1lOiAndGV4dC1yaWdodCcsXG4gICAgICAgIGNhbGxiYWNrOiByb3cgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBocmVmPXtgY29uZmVyZW5jZS9BZG1pbi9TZXNzaW9uLz9jb25mZXJlbmNlSWQ9JHtyb3cuaWR9YH0+XG4gICAgICAgICAgICAgIHtyb3cuc2Vzc2lvbkNvdW50fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgICB0aGlzLnN0YXRlLnJlc291cmNlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0UmVzb3VyY2UpXG4gICAgdGhpcy5sb2NhdGlvbnMgPSBudWxsXG4gICAgdGhpcy5zdGF0ZS5zZXJ2aWNlcyA9IFtdXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG4gICAgbG9hZExvY2F0aW9ucyh0aGlzKVxuICAgIHRoaXMubG9hZFNlcnZpY2VzKClcbiAgfVxuXG4gIGxvYWRSZXNvdXJjZShrZXkpIHtcbiAgICBzdXBlci5sb2FkUmVzb3VyY2Uoa2V5KVxuICAgIHRoaXMubG9hZENvbmZlcmVuY2VRdWVzdGlvbihrZXkpXG4gIH1cblxuICBsb2FkU2VydmljZXMoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvQWRtaW4vQWNjb3VudC8nLFxuICAgICAgZGF0YToge30sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VydmljZXM6IGRhdGEubGlzdGluZ30pXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSlcbiAgfVxuXG4gIGxvYWRDb25mZXJlbmNlUXVlc3Rpb24oa2V5KSB7XG4gICAgY29uc3QgY29uZmVyZW5jZUlkID0gdGhpcy5zdGF0ZS5saXN0aW5nW2tleV0uaWRcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnY29uZmVyZW5jZS9BZG1pbi9Db25mZXJlbmNlUXVlc3Rpb24vY29uZmVyZW5jZScsXG4gICAgICBkYXRhOiB7aWQ6IGNvbmZlcmVuY2VJZH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29uZmVyZW5jZVF1ZXN0aW9uOiBkYXRhLmNvbmZlcmVuY2VRdWVzdGlvbn0pXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZVByb21wdChrZXksIGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBjb25maXJtID0gcHJvbXB0KFxuICAgICAgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb25mZXJlbmNlIGFuZCBhbGwgaXRzIHNlc3Npb25zLCByZWdpc3RyYXRpb25zLCBhbmQgcGF5bWVudHM/IElmIHlvdSBhcmUgc3VyZSwgdHlwZSBcIkRFTEVURVwiIGJlbG93LidcbiAgICApXG4gICAgaWYgKGNvbmZpcm0gPT09ICdERUxFVEUnKSB7XG4gICAgICB0aGlzLnNlbmREZWxldGUoa2V5KVxuICAgIH1cbiAgfVxuXG4gIHNlbmREZWxldGUoa2V5KSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvQWRtaW4vQ29uZmVyZW5jZS8nICsgdGhpcy5zdGF0ZS5saXN0aW5nW2tleV0uaWQsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZGVsZXRlJyxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkKClcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgYWRkSW5mbygpIHtcbiAgICBjb25zdCB7Y29uZmVyZW5jZVF1ZXN0aW9ufSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBpbmZvID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SW5mbylcbiAgICBpZiAoY29uZmVyZW5jZVF1ZXN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgIGluZm8uc29ydCA9IFN0cmluZyhcbiAgICAgICAgcGFyc2VJbnQoY29uZmVyZW5jZVF1ZXN0aW9uW2NvbmZlcmVuY2VRdWVzdGlvbi5sZW5ndGggLSAxXS5zb3J0KSArIDFcbiAgICAgIClcbiAgICB9XG4gICAgY29uZmVyZW5jZVF1ZXN0aW9uLnB1c2goaW5mbylcbiAgICB0aGlzLnNldFN0YXRlKHtjb25mZXJlbmNlUXVlc3Rpb259KVxuICB9XG5cbiAgZHJvcEluZm8oa2V5KSB7XG4gICAgY29uc3Qge2NvbmZlcmVuY2VRdWVzdGlvbn0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgaW5mbyA9IGNvbmZlcmVuY2VRdWVzdGlvbltrZXldXG4gICAgY29uZmVyZW5jZVF1ZXN0aW9uLnNwbGljZShrZXksIDEpXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29uZmVyZW5jZVF1ZXN0aW9ufSlcbiAgICBpZiAoaW5mby5pZCkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnY29uZmVyZW5jZS9BZG1pbi9Db25mZXJlbmNlUXVlc3Rpb24vJyArIGluZm8uaWQsXG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICB0eXBlOiAnZGVsZXRlJyxcbiAgICAgICAgc3VjY2VzczogKCkgPT4ge30sXG4gICAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRNZXNzYWdlKCdDb3VsZCBub3QgZGVsZXRlIGV4dHJhIGluZm8nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUluZm8odmFsdWUsIHNlY3Rpb24sIGtleSkge1xuICAgIGNvbnN0IHtjb25mZXJlbmNlUXVlc3Rpb259ID0gdGhpcy5zdGF0ZVxuICAgIGNvbmZlcmVuY2VRdWVzdGlvbltrZXldW3NlY3Rpb25dID0gdmFsdWVcbiAgICB0aGlzLnNldFN0YXRlKHtjb25mZXJlbmNlUXVlc3Rpb259KVxuICB9XG5cbiAgZm9ybShvdmVybGF5KSB7XG4gICAgaWYgKCFvdmVybGF5KSB7XG4gICAgICByZXR1cm4gPGRpdj48L2Rpdj5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbmZlcmVuY2VGb3JtXG4gICAgICAgICAgc2VydmljZXM9e3RoaXMuc3RhdGUuc2VydmljZXN9XG4gICAgICAgICAgY29uZmVyZW5jZVF1ZXN0aW9uPXt0aGlzLnN0YXRlLmNvbmZlcmVuY2VRdWVzdGlvbn1cbiAgICAgICAgICB1cGRhdGVJbmZvPXt0aGlzLnVwZGF0ZUluZm99XG4gICAgICAgICAgZHJvcEluZm89e3RoaXMuZHJvcEluZm99XG4gICAgICAgICAgYWRkSW5mbz17dGhpcy5hZGRJbmZvfVxuICAgICAgICAgIHNhdmU9e3RoaXMuc2F2ZX1cbiAgICAgICAgICBjbG9zZT17dGhpcy5maW5pc2h9XG4gICAgICAgICAgcmVzb3VyY2U9e3RoaXMuc3RhdGUucmVzb3VyY2V9XG4gICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZX1cbiAgICAgICAgICBsb2NhdGlvbnM9e3RoaXMubG9jYXRpb25zfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHN1Y2Nlc3MoZGF0YSkge1xuICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuc2F2ZUNvbmZlcmVuY2VRdWVzdGlvbihkYXRhLmlkKVxuICAgICAgdGhpcy5sb2FkKClcbiAgICAgIHRoaXMuc2V0TWVzc2FnZShcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtdGh1bWJzLXVwXCIgLz5cbiAgICAgICAgICAmbmJzcDtTYXZlIHN1Y2Nlc3NmdWwuXG4gICAgICAgIDwvZGl2PixcbiAgICAgICAgJ3N1Y2Nlc3MnXG4gICAgICApXG4gICAgICB0aGlzLnJlc2V0KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRNZXNzYWdlKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiIC8+XG4gICAgICAgICAgJm5ic3A7VW5hYmxlIHRvIHNhdmU6JiMzMjtcbiAgICAgICAgICB7ZGF0YS5lcnJvcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuICAgIHRoaXMuc2V0U3RhdGUoe2NvbmZlcmVuY2VRdWVzdGlvbjogW119KVxuICB9XG5cbiAgc2F2ZUNvbmZlcmVuY2VRdWVzdGlvbihjb25mZXJlbmNlSWQpIHtcbiAgICBjb25zdCB7Y29uZmVyZW5jZVF1ZXN0aW9ufSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoY29uZmVyZW5jZVF1ZXN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdjb25mZXJlbmNlL0FkbWluL0NvbmZlcmVuY2VRdWVzdGlvbi8nLFxuICAgICAgZGF0YToge2NvbmZlcmVuY2VRdWVzdGlvbiwgY29uZmVyZW5jZUlkfSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAncG9zdCcsXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7fSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0TWVzc2FnZSgnQ291bGQgbm90IHNhdmUgZXh0cmEgaW5mb3JtYXRpb24gZGF0YS4nKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB0aXRsZSgpIHtcbiAgICBsZXQgd2FybmluZ1xuICAgIGlmICh0aGlzLmxvY2F0aW9ucyAhPT0gbnVsbCAmJiB0aGlzLmxvY2F0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHdhcm5pbmcgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiIC8+XG4gICAgICAgICAgWW91IHNob3VsZCA8YSBocmVmPVwiY29uZmVyZW5jZS9BZG1pbi9Mb2NhdGlvblwiPlxuICAgICAgICAgICAgY3JlYXRlIGEgbG9jYXRpb25cbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICB0byBhc3NpZ24gdG8geW91ciBjb25mZXJlbmNlcy5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+Q29uZmVyZW5jZXM8L2gyPlxuICAgICAgICB7d2FybmluZ31cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIG92ZXJsYXkoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25mZXJlbmNlLWZvcm1cIj57dGhpcy5mb3JtKHRoaXMuc3RhdGUub3ZlcmxheSl9PC9kaXY+XG4gICAgICApLFxuICAgICAgd2lkdGg6ICc5MCUnLFxuICAgICAgdGl0bGU6XG4gICAgICAgIHRoaXMuc3RhdGUucmVzb3VyY2UuaWQgPiAwID8gJ1VwZGF0ZSBjb25mZXJlbmNlJyA6ICdDcmVhdGUgY29uZmVyZW5jZScsXG4gICAgICBjbG9zZTogdGhpcy5sb2FkXG4gICAgfVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8Q29uZmVyZW5jZSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NvbmZlcmVuY2UnKSlcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgJ2Zyb2FsYS1lZGl0b3IvY3NzL2Zyb2FsYV9zdHlsZS5taW4uY3NzJ1xuaW1wb3J0ICdmcm9hbGEtZWRpdG9yL2Nzcy9mcm9hbGFfZWRpdG9yLnBrZ2QubWluLmNzcydcbmltcG9ydCAnZnJvYWxhLWVkaXRvci9qcy9wbHVnaW5zLnBrZ2QubWluLmpzJ1xuXG5pbXBvcnQgRnJvYWxhRWRpdG9yIGZyb20gJ3JlYWN0LWZyb2FsYS13eXNpd3lnJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgcXVpY2tJbnNlcnRFbmFibGVkOiBmYWxzZSxcbiAgICAgIHRvb2xiYXJCdXR0b25zOiBbXG4gICAgICAgICdib2xkJyxcbiAgICAgICAgJ2l0YWxpYycsXG4gICAgICAgICdhbGlnbicsXG4gICAgICAgICdmb3JtYXRPTCcsXG4gICAgICAgICdmb3JtYXRVTCcsXG4gICAgICAgICdvdXRkZW50JyxcbiAgICAgICAgJ2luZGVudCcsXG4gICAgICAgICdxdW90ZScsXG4gICAgICAgICdpbnNlcnRMaW5rJyxcbiAgICAgICAgJ2luc2VydFRhYmxlJyxcbiAgICAgICAgJ3NwZWNpYWxDaGFyYWN0ZXJzJyxcbiAgICAgICAgJ2luc2VydEhSJyxcbiAgICAgICAgJ3NlbGVjdEFsbCcsXG4gICAgICAgICdjbGVhckZvcm1hdHRpbmcnLFxuICAgICAgICAnaHRtbCdcbiAgICAgIF1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBuZXcgRnJvYWxhRWRpdG9yKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyb2FsYUVkaXRvclxuICAgICAgICB0YWc9XCJ0ZXh0YXJlYVwiXG4gICAgICAgIGNvbmZpZz17dGhpcy5jb25maWd9XG4gICAgICAgIG1vZGVsPXt0aGlzLnByb3BzLmNvbnRlbnR9XG4gICAgICAgIG9uTW9kZWxDaGFuZ2U9e3RoaXMucHJvcHMudXBkYXRlfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuRWRpdG9yLnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaWRlbnQ6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCIvKiBnbG9iYWwgJCAqL1xuXG5jb25zdCBsb2FkTG9jYXRpb25zID0gcmVzb3VyY2UgPT4ge1xuICAkLmFqYXgoe1xuICAgIHVybDogJ2NvbmZlcmVuY2UvQWRtaW4vTG9jYXRpb24nLFxuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgdHlwZTogJ2dldCcsXG4gICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICByZXNvdXJjZS5sb2NhdGlvbnMgPSBkYXRhLmxpc3RpbmdcbiAgICB9LFxuICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICByZXNvdXJjZS5zZXRNZXNzYWdlKCdDb3VsZCBub3QgYWNjZXNzIHNlcnZlcicpXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTG9jYXRpb25zXG4iXSwic291cmNlUm9vdCI6IiJ9