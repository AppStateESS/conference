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
/******/ 		"Location": 0
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
/******/ 	deferredModules.push(["./javascript/Location/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Location/LocationForm.js":
/*!*********************************************!*\
  !*** ./javascript/Location/LocationForm.js ***!
  \*********************************************/
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
/* harmony import */ var _Shared_Editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Shared/Editor */ "./javascript/Shared/Editor.js");








function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var LocationForm = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LocationForm, _React$Component);

  var _super = _createSuper(LocationForm);

  function LocationForm(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LocationForm);

    _this = _super.call(this, props);
    _this.state = {
      titleError: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LocationForm, [{
    key: "updateUrl",
    value: function updateUrl(e) {
      var url = e.target.value;
      url = url.replace(/^https?:\/\//, '');
      this.props.update('url', url);
    }
  }, {
    key: "checkTitle",
    value: function checkTitle() {
      this.setState({
        titleError: this.props.resource.title.length === 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          update = _this$props.update,
          resource = _this$props.resource,
          save = _this$props.save;
      var titleClass = this.state.titleError ? 'form-control border-danger' : 'form-control';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "d-block"
      }, "Title:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "text-danger"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        name: "title",
        type: "text",
        id: "location-title",
        placeholder: this.state.titleError ? 'Title may not be empty.' : null,
        value: resource.title,
        onBlur: function onBlur() {
          return _this2.checkTitle();
        },
        onFocus: this.clearCheck,
        onChange: update.bind(null, 'title'),
        className: titleClass
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "d-block"
      }, "Description:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Shared_Editor__WEBPACK_IMPORTED_MODULE_7__["default"], {
        ident: 'desc' + resource.id,
        content: resource.description,
        update: update.bind(null, 'description')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "d-block"
      }, "Directions:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Shared_Editor__WEBPACK_IMPORTED_MODULE_7__["default"], {
        ident: 'dir' + resource.id,
        content: resource.directions,
        update: update.bind(null, 'directions')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "d-block"
      }, "Link to venue page:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        name: "url",
        type: "text",
        placeholder: "http://location.address.com",
        id: "location-url",
        value: resource.url,
        onChange: update.bind(null, 'url'),
        className: "form-control"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-success",
        onClick: save,
        disabled: resource.title.length === 0
      }, "Save"));
    }
  }]);

  return LocationForm;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

LocationForm.propTypes = {
  update: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  resource: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  save: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  close: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (LocationForm);

/***/ }),

/***/ "./javascript/Location/index.jsx":
/*!***************************************!*\
  !*** ./javascript/Location/index.jsx ***!
  \***************************************/
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
/* harmony import */ var _essappstate_canopy_listing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @essappstate/canopy-listing */ "./node_modules/@essappstate/canopy-listing/build/index.js");
/* harmony import */ var _essappstate_canopy_listing__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_essappstate_canopy_listing__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LocationForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LocationForm */ "./javascript/Location/LocationForm.js");









function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Location = /*#__PURE__*/function (_Listing) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Location, _Listing);

  var _super = _createSuper(Location);

  function Location(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Location);

    _this = _super.call(this, props);
    _this.defaultResource = {
      id: '0',
      title: '',
      description: '',
      directions: '',
      url: '',
      image: ''
    };
    _this.restUrl = 'conference/Admin/Location';
    _this.label = 'Location';

    var dropdown = function dropdown(key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        className: "btn btn-outline-secondary btn-sm",
        id: "dropdownMenuButton"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-bars"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "dropdown-item pointer",
        href: "#",
        onClick: _this.editResource.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), key)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-edit"
      }), "\xA0Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "dropdown-item pointer",
        href: "#",
        onClick: _this.deleteResource.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), key)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
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
      column: 'url',
      label: 'Url',
      callback: function callback(row) {
        if (row.url.length > 0) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
            href: row.url,
            target: "_blank",
            rel: "noopener noreferrer"
          }, row.url);
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("em", null, "None");
        }
      }
    }];
    _this.state.resource = Object.assign({}, _this.defaultResource);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Location, [{
    key: "overlay",
    value: function overlay() {
      return {
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "location-form"
        }, this.form(this.state.overlay)),
        title: this.state.resource.id > 0 ? 'Update location' : 'Create location',
        width: '80%',
        close: this.load
      };
    }
  }, {
    key: "form",
    value: function form(overlay) {
      if (!overlay) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null);
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_LocationForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
          resource: this.state.resource,
          update: this.update,
          save: this.save,
          close: this.finish
        });
      }
    }
  }, {
    key: "title",
    value: function title() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, "Locations");
    }
  }]);

  return Location;
}(_essappstate_canopy_listing__WEBPACK_IMPORTED_MODULE_8___default.a);

react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Location, null), document.getElementById('Location'));

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9Mb2NhdGlvbi9Mb2NhdGlvbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9Mb2NhdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TaGFyZWQvRWRpdG9yLmpzIl0sIm5hbWVzIjpbIkxvY2F0aW9uRm9ybSIsInByb3BzIiwic3RhdGUiLCJ0aXRsZUVycm9yIiwiZSIsInVybCIsInRhcmdldCIsInZhbHVlIiwicmVwbGFjZSIsInVwZGF0ZSIsInNldFN0YXRlIiwicmVzb3VyY2UiLCJ0aXRsZSIsImxlbmd0aCIsInNhdmUiLCJ0aXRsZUNsYXNzIiwiY2hlY2tUaXRsZSIsImNsZWFyQ2hlY2siLCJiaW5kIiwiaWQiLCJkZXNjcmlwdGlvbiIsImRpcmVjdGlvbnMiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJvYmplY3QiLCJjbG9zZSIsIkxvY2F0aW9uIiwiZGVmYXVsdFJlc291cmNlIiwiaW1hZ2UiLCJyZXN0VXJsIiwibGFiZWwiLCJkcm9wZG93biIsImtleSIsImVkaXRSZXNvdXJjZSIsImRlbGV0ZVJlc291cmNlIiwiY29sdW1ucyIsImNvbHVtbiIsImNhbGxiYWNrIiwicm93Iiwic3R5bGUiLCJ3aWR0aCIsInNvcnQiLCJPYmplY3QiLCJhc3NpZ24iLCJjb250ZW50IiwiZm9ybSIsIm92ZXJsYXkiLCJsb2FkIiwiZmluaXNoIiwiTGlzdGluZyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkVkaXRvciIsImNvbmZpZyIsInF1aWNrSW5zZXJ0RW5hYmxlZCIsInRvb2xiYXJCdXR0b25zIiwiRnJvYWxhRWRpdG9yIiwic3RyaW5nIiwiaWRlbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsWTs7Ozs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxFQUFFO0FBREQsS0FBYjtBQUZpQjtBQUtsQjs7Ozs4QkFFU0MsQyxFQUFHO0FBQ1gsVUFBSUMsR0FBRyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBbkI7QUFDQUYsU0FBRyxHQUFHQSxHQUFHLENBQUNHLE9BQUosQ0FBWSxjQUFaLEVBQTRCLEVBQTVCLENBQU47QUFDQSxXQUFLUCxLQUFMLENBQVdRLE1BQVgsQ0FBa0IsS0FBbEIsRUFBeUJKLEdBQXpCO0FBQ0Q7OztpQ0FFWTtBQUNYLFdBQUtLLFFBQUwsQ0FBYztBQUFDUCxrQkFBVSxFQUFFLEtBQUtGLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQkMsS0FBcEIsQ0FBMEJDLE1BQTFCLEtBQXFDO0FBQWxELE9BQWQ7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsd0JBQzBCLEtBQUtaLEtBRC9CO0FBQUEsVUFDQVEsTUFEQSxlQUNBQSxNQURBO0FBQUEsVUFDUUUsUUFEUixlQUNRQSxRQURSO0FBQUEsVUFDa0JHLElBRGxCLGVBQ2tCQSxJQURsQjtBQUVQLFVBQU1DLFVBQVUsR0FBRyxLQUFLYixLQUFMLENBQVdDLFVBQVgsR0FDZiw0QkFEZSxHQUVmLGNBRko7QUFHQSwwQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFPLGlCQUFTLEVBQUM7QUFBakIsZ0NBQ1E7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLGFBRFIsQ0FERixlQUlFO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLFVBQUUsRUFBQyxnQkFITDtBQUlFLG1CQUFXLEVBQ1QsS0FBS0QsS0FBTCxDQUFXQyxVQUFYLEdBQXdCLHlCQUF4QixHQUFvRCxJQUx4RDtBQU9FLGFBQUssRUFBRVEsUUFBUSxDQUFDQyxLQVBsQjtBQVFFLGNBQU0sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ0ksVUFBTCxFQUFOO0FBQUEsU0FSVjtBQVNFLGVBQU8sRUFBRSxLQUFLQyxVQVRoQjtBQVVFLGdCQUFRLEVBQUVSLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLElBQVosRUFBa0IsT0FBbEIsQ0FWWjtBQVdFLGlCQUFTLEVBQUVIO0FBWGIsUUFKRixDQURGLGVBbUJFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQU8saUJBQVMsRUFBQztBQUFqQix3QkFERixlQUVFLDJEQUFDLHNEQUFEO0FBQ0UsYUFBSyxFQUFFLFNBQVNKLFFBQVEsQ0FBQ1EsRUFEM0I7QUFFRSxlQUFPLEVBQUVSLFFBQVEsQ0FBQ1MsV0FGcEI7QUFHRSxjQUFNLEVBQUVYLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLElBQVosRUFBa0IsYUFBbEI7QUFIVixRQUZGLENBbkJGLGVBMkJFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQU8saUJBQVMsRUFBQztBQUFqQix1QkFERixlQUVFLDJEQUFDLHNEQUFEO0FBQ0UsYUFBSyxFQUFFLFFBQVFQLFFBQVEsQ0FBQ1EsRUFEMUI7QUFFRSxlQUFPLEVBQUVSLFFBQVEsQ0FBQ1UsVUFGcEI7QUFHRSxjQUFNLEVBQUVaLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLElBQVosRUFBa0IsWUFBbEI7QUFIVixRQUZGLENBM0JGLGVBbUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQU8saUJBQVMsRUFBQztBQUFqQiwrQkFERixlQUVFO0FBQ0UsWUFBSSxFQUFDLEtBRFA7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLG1CQUFXLEVBQUMsNkJBSGQ7QUFJRSxVQUFFLEVBQUMsY0FKTDtBQUtFLGFBQUssRUFBRVAsUUFBUSxDQUFDTixHQUxsQjtBQU1FLGdCQUFRLEVBQUVJLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLElBQVosRUFBa0IsS0FBbEIsQ0FOWjtBQU9FLGlCQUFTLEVBQUM7QUFQWixRQUZGLENBbkNGLGVBK0NFO0FBQ0UsaUJBQVMsRUFBQyxpQkFEWjtBQUVFLGVBQU8sRUFBRUosSUFGWDtBQUdFLGdCQUFRLEVBQUVILFFBQVEsQ0FBQ0MsS0FBVCxDQUFlQyxNQUFmLEtBQTBCO0FBSHRDLGdCQS9DRixDQURGO0FBd0REOzs7O0VBL0V3QlMsNENBQUssQ0FBQ0MsUzs7QUFrRmpDdkIsWUFBWSxDQUFDd0IsU0FBYixHQUF5QjtBQUN2QmYsUUFBTSxFQUFFZ0IsaURBQVMsQ0FBQ0MsSUFESztBQUV2QmYsVUFBUSxFQUFFYyxpREFBUyxDQUFDRSxNQUZHO0FBR3ZCYixNQUFJLEVBQUVXLGlEQUFTLENBQUNDLElBSE87QUFJdkJFLE9BQUssRUFBRUgsaURBQVMsQ0FBQ0M7QUFKTSxDQUF6QjtBQU9lMUIsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNNkIsUTs7Ozs7QUFDSixvQkFBWTVCLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLNkIsZUFBTCxHQUF1QjtBQUNyQlgsUUFBRSxFQUFFLEdBRGlCO0FBRXJCUCxXQUFLLEVBQUUsRUFGYztBQUdyQlEsaUJBQVcsRUFBRSxFQUhRO0FBSXJCQyxnQkFBVSxFQUFFLEVBSlM7QUFLckJoQixTQUFHLEVBQUUsRUFMZ0I7QUFNckIwQixXQUFLLEVBQUU7QUFOYyxLQUF2QjtBQVFBLFVBQUtDLE9BQUwsR0FBZSwyQkFBZjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxVQUFiOztBQUVBLFFBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEdBQUcsRUFBSTtBQUN0QiwwQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsdUJBQVksVUFGZDtBQUdFLHlCQUFjLE1BSGhCO0FBSUUsaUJBQVMsRUFBQyxrQ0FKWjtBQUtFLFVBQUUsRUFBQztBQUxMLHNCQU1FO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBTkYsQ0FERixlQVNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQStCLDJCQUFnQjtBQUEvQyxzQkFDRTtBQUNFLGlCQUFTLEVBQUMsdUJBRFo7QUFFRSxZQUFJLEVBQUMsR0FGUDtBQUdFLGVBQU8sRUFBRSxNQUFLQyxZQUFMLENBQWtCbEIsSUFBbEIsNkZBQTZCaUIsR0FBN0I7QUFIWCxzQkFJRTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQUpGLGFBREYsZUFRRTtBQUNFLGlCQUFTLEVBQUMsdUJBRFo7QUFFRSxZQUFJLEVBQUMsR0FGUDtBQUdFLGVBQU8sRUFBRSxNQUFLRSxjQUFMLENBQW9CbkIsSUFBcEIsNkZBQStCaUIsR0FBL0I7QUFIWCxzQkFJRTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQUpGLGVBUkYsQ0FURixDQURGO0FBNEJELEtBN0JEOztBQStCQSxVQUFLRyxPQUFMLEdBQWUsQ0FDYjtBQUNFQyxZQUFNLEVBQUUsU0FEVjtBQUVFQyxjQUFRLEVBQUUsa0JBQUNDLEdBQUQsRUFBTU4sR0FBTixFQUFjO0FBQ3RCLGVBQU9ELFFBQVEsQ0FBQ0MsR0FBRCxDQUFmO0FBQ0QsT0FKSDtBQUtFTyxXQUFLLEVBQUU7QUFDTEMsYUFBSyxFQUFFO0FBREY7QUFMVCxLQURhLEVBVWI7QUFDRUosWUFBTSxFQUFFLE9BRFY7QUFFRU4sV0FBSyxFQUFFLE9BRlQ7QUFHRVcsVUFBSSxFQUFFO0FBSFIsS0FWYSxFQWViO0FBQ0VMLFlBQU0sRUFBRSxLQURWO0FBRUVOLFdBQUssRUFBRSxLQUZUO0FBR0VPLGNBQVEsRUFBRSxrQkFBQUMsR0FBRyxFQUFJO0FBQ2YsWUFBSUEsR0FBRyxDQUFDcEMsR0FBSixDQUFRUSxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLDhCQUNFO0FBQUcsZ0JBQUksRUFBRTRCLEdBQUcsQ0FBQ3BDLEdBQWI7QUFBa0Isa0JBQU0sRUFBQyxRQUF6QjtBQUFrQyxlQUFHLEVBQUM7QUFBdEMsYUFDR29DLEdBQUcsQ0FBQ3BDLEdBRFAsQ0FERjtBQUtELFNBTkQsTUFNTztBQUNMLDhCQUFPLDhFQUFQO0FBQ0Q7QUFDRjtBQWJILEtBZmEsQ0FBZjtBQStCQSxVQUFLSCxLQUFMLENBQVdTLFFBQVgsR0FBc0JrQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQUtoQixlQUF2QixDQUF0QjtBQTNFaUI7QUE0RWxCOzs7OzhCQUVTO0FBQ1IsYUFBTztBQUNMaUIsZUFBTyxlQUNMO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQWdDLEtBQUtDLElBQUwsQ0FBVSxLQUFLOUMsS0FBTCxDQUFXK0MsT0FBckIsQ0FBaEMsQ0FGRztBQUlMckMsYUFBSyxFQUFFLEtBQUtWLEtBQUwsQ0FBV1MsUUFBWCxDQUFvQlEsRUFBcEIsR0FBeUIsQ0FBekIsR0FBNkIsaUJBQTdCLEdBQWlELGlCQUpuRDtBQUtMd0IsYUFBSyxFQUFFLEtBTEY7QUFNTGYsYUFBSyxFQUFFLEtBQUtzQjtBQU5QLE9BQVA7QUFRRDs7O3lCQUVJRCxPLEVBQVM7QUFDWixVQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaLDRCQUFPLHVFQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsNEJBQ0UsMkRBQUMscURBQUQ7QUFDRSxrQkFBUSxFQUFFLEtBQUsvQyxLQUFMLENBQVdTLFFBRHZCO0FBRUUsZ0JBQU0sRUFBRSxLQUFLRixNQUZmO0FBR0UsY0FBSSxFQUFFLEtBQUtLLElBSGI7QUFJRSxlQUFLLEVBQUUsS0FBS3FDO0FBSmQsVUFERjtBQVFEO0FBQ0Y7Ozs0QkFFTztBQUNOLDBCQUFPLG1GQUFQO0FBQ0Q7Ozs7RUEzR29CQyxrRTs7QUE4R3ZCQyxnREFBUSxDQUFDQyxNQUFULGVBQWdCLDJEQUFDLFFBQUQsT0FBaEIsRUFBOEJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUE5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztJQUVNQyxNOzs7OztBQUNKLGtCQUFZeEQsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUt5RCxNQUFMLEdBQWM7QUFDWkMsd0JBQWtCLEVBQUUsS0FEUjtBQUVaQyxvQkFBYyxFQUFFLENBQ2QsTUFEYyxFQUVkLFFBRmMsRUFHZCxPQUhjLEVBSWQsVUFKYyxFQUtkLFVBTGMsRUFNZCxTQU5jLEVBT2QsUUFQYyxFQVFkLE9BUmMsRUFTZCxZQVRjLEVBVWQsYUFWYyxFQVdkLG1CQVhjLEVBWWQsVUFaYyxFQWFkLFdBYmMsRUFjZCxpQkFkYyxFQWVkLE1BZmM7QUFGSixLQUFkO0FBRmlCO0FBc0JsQjs7Ozt3Q0FFbUI7QUFDbEIsVUFBSUMsNERBQUo7QUFDRDs7OzZCQUVRO0FBQ1AsMEJBQ0UsMkRBQUMsNERBQUQ7QUFDRSxXQUFHLEVBQUMsVUFETjtBQUVFLGNBQU0sRUFBRSxLQUFLSCxNQUZmO0FBR0UsYUFBSyxFQUFFLEtBQUt6RCxLQUFMLENBQVc4QyxPQUhwQjtBQUlFLHFCQUFhLEVBQUUsS0FBSzlDLEtBQUwsQ0FBV1E7QUFKNUIsUUFERjtBQVFEOzs7O0VBdENrQmMsK0M7O0FBeUNyQmtDLE1BQU0sQ0FBQ2pDLFNBQVAsR0FBbUI7QUFDakJ1QixTQUFPLEVBQUV0QixpREFBUyxDQUFDcUMsTUFERjtBQUVqQnJELFFBQU0sRUFBRWdCLGlEQUFTLENBQUNDLElBRkQ7QUFHakJxQyxPQUFLLEVBQUV0QyxpREFBUyxDQUFDcUM7QUFIQSxDQUFuQjtBQU1lTCxxRUFBZixFIiwiZmlsZSI6IkxvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIkxvY2F0aW9uXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9qYXZhc2NyaXB0L0xvY2F0aW9uL2luZGV4LmpzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL1NoYXJlZC9FZGl0b3InXG5cbmNsYXNzIExvY2F0aW9uRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlRXJyb3I6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVXJsKGUpIHtcbiAgICBsZXQgdXJsID0gZS50YXJnZXQudmFsdWVcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvXmh0dHBzPzpcXC9cXC8vLCAnJylcbiAgICB0aGlzLnByb3BzLnVwZGF0ZSgndXJsJywgdXJsKVxuICB9XG5cbiAgY2hlY2tUaXRsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt0aXRsZUVycm9yOiB0aGlzLnByb3BzLnJlc291cmNlLnRpdGxlLmxlbmd0aCA9PT0gMH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3VwZGF0ZSwgcmVzb3VyY2UsIHNhdmV9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRpdGxlQ2xhc3MgPSB0aGlzLnN0YXRlLnRpdGxlRXJyb3JcbiAgICAgID8gJ2Zvcm0tY29udHJvbCBib3JkZXItZGFuZ2VyJ1xuICAgICAgOiAnZm9ybS1jb250cm9sJ1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZC1ibG9ja1wiPlxuICAgICAgICAgICAgVGl0bGU6PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJsb2NhdGlvbi10aXRsZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUudGl0bGVFcnJvciA/ICdUaXRsZSBtYXkgbm90IGJlIGVtcHR5LicgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZT17cmVzb3VyY2UudGl0bGV9XG4gICAgICAgICAgICBvbkJsdXI9eygpID0+IHRoaXMuY2hlY2tUaXRsZSgpfVxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5jbGVhckNoZWNrfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZS5iaW5kKG51bGwsICd0aXRsZScpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aXRsZUNsYXNzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZC1ibG9ja1wiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgaWRlbnQ9eydkZXNjJyArIHJlc291cmNlLmlkfVxuICAgICAgICAgICAgY29udGVudD17cmVzb3VyY2UuZGVzY3JpcHRpb259XG4gICAgICAgICAgICB1cGRhdGU9e3VwZGF0ZS5iaW5kKG51bGwsICdkZXNjcmlwdGlvbicpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZC1ibG9ja1wiPkRpcmVjdGlvbnM6PC9sYWJlbD5cbiAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICBpZGVudD17J2RpcicgKyByZXNvdXJjZS5pZH1cbiAgICAgICAgICAgIGNvbnRlbnQ9e3Jlc291cmNlLmRpcmVjdGlvbnN9XG4gICAgICAgICAgICB1cGRhdGU9e3VwZGF0ZS5iaW5kKG51bGwsICdkaXJlY3Rpb25zJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkLWJsb2NrXCI+TGluayB0byB2ZW51ZSBwYWdlOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwidXJsXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cDovL2xvY2F0aW9uLmFkZHJlc3MuY29tXCJcbiAgICAgICAgICAgIGlkPVwibG9jYXRpb24tdXJsXCJcbiAgICAgICAgICAgIHZhbHVlPXtyZXNvdXJjZS51cmx9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlLmJpbmQobnVsbCwgJ3VybCcpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXG4gICAgICAgICAgb25DbGljaz17c2F2ZX1cbiAgICAgICAgICBkaXNhYmxlZD17cmVzb3VyY2UudGl0bGUubGVuZ3RoID09PSAwfT5cbiAgICAgICAgICBTYXZlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkxvY2F0aW9uRm9ybS5wcm9wVHlwZXMgPSB7XG4gIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHJlc291cmNlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xvc2U6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uRm9ybVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IExpc3RpbmcgZnJvbSAnQGVzc2FwcHN0YXRlL2Nhbm9weS1saXN0aW5nJ1xuaW1wb3J0IExvY2F0aW9uRm9ybSBmcm9tICcuL0xvY2F0aW9uRm9ybSdcblxuY2xhc3MgTG9jYXRpb24gZXh0ZW5kcyBMaXN0aW5nIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmRlZmF1bHRSZXNvdXJjZSA9IHtcbiAgICAgIGlkOiAnMCcsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBkaXJlY3Rpb25zOiAnJyxcbiAgICAgIHVybDogJycsXG4gICAgICBpbWFnZTogJydcbiAgICB9XG4gICAgdGhpcy5yZXN0VXJsID0gJ2NvbmZlcmVuY2UvQWRtaW4vTG9jYXRpb24nXG4gICAgdGhpcy5sYWJlbCA9ICdMb2NhdGlvbidcblxuICAgIGNvbnN0IGRyb3Bkb3duID0ga2V5ID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIlxuICAgICAgICAgICAgaWQ9XCJkcm9wZG93bk1lbnVCdXR0b25cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnVCdXR0b25cIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcG9pbnRlclwiXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5lZGl0UmVzb3VyY2UuYmluZCh0aGlzLCBrZXkpfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVkaXRcIiAvPlxuICAgICAgICAgICAgICAmbmJzcDtFZGl0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHBvaW50ZXJcIlxuICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlUmVzb3VyY2UuYmluZCh0aGlzLCBrZXkpfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoXCIgLz5cbiAgICAgICAgICAgICAgJm5ic3A7RGVsZXRlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgY29sdW1uOiAnb3B0aW9ucycsXG4gICAgICAgIGNhbGxiYWNrOiAocm93LCBrZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gZHJvcGRvd24oa2V5KVxuICAgICAgICB9LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiAnMTAlJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICd0aXRsZScsXG4gICAgICAgIGxhYmVsOiAnVGl0bGUnLFxuICAgICAgICBzb3J0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICd1cmwnLFxuICAgICAgICBsYWJlbDogJ1VybCcsXG4gICAgICAgIGNhbGxiYWNrOiByb3cgPT4ge1xuICAgICAgICAgIGlmIChyb3cudXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3Jvdy51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICB7cm93LnVybH1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gPGVtPk5vbmU8L2VtPlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgICB0aGlzLnN0YXRlLnJlc291cmNlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0UmVzb3VyY2UpXG4gIH1cblxuICBvdmVybGF5KCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50OiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb24tZm9ybVwiPnt0aGlzLmZvcm0odGhpcy5zdGF0ZS5vdmVybGF5KX08L2Rpdj5cbiAgICAgICksXG4gICAgICB0aXRsZTogdGhpcy5zdGF0ZS5yZXNvdXJjZS5pZCA+IDAgPyAnVXBkYXRlIGxvY2F0aW9uJyA6ICdDcmVhdGUgbG9jYXRpb24nLFxuICAgICAgd2lkdGg6ICc4MCUnLFxuICAgICAgY2xvc2U6IHRoaXMubG9hZFxuICAgIH1cbiAgfVxuXG4gIGZvcm0ob3ZlcmxheSkge1xuICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMb2NhdGlvbkZvcm1cbiAgICAgICAgICByZXNvdXJjZT17dGhpcy5zdGF0ZS5yZXNvdXJjZX1cbiAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlfVxuICAgICAgICAgIHNhdmU9e3RoaXMuc2F2ZX1cbiAgICAgICAgICBjbG9zZT17dGhpcy5maW5pc2h9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgdGl0bGUoKSB7XG4gICAgcmV0dXJuIDxoMj5Mb2NhdGlvbnM8L2gyPlxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8TG9jYXRpb24gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMb2NhdGlvbicpKVxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAnZnJvYWxhLWVkaXRvci9jc3MvZnJvYWxhX3N0eWxlLm1pbi5jc3MnXG5pbXBvcnQgJ2Zyb2FsYS1lZGl0b3IvY3NzL2Zyb2FsYV9lZGl0b3IucGtnZC5taW4uY3NzJ1xuaW1wb3J0ICdmcm9hbGEtZWRpdG9yL2pzL3BsdWdpbnMucGtnZC5taW4uanMnXG5cbmltcG9ydCBGcm9hbGFFZGl0b3IgZnJvbSAncmVhY3QtZnJvYWxhLXd5c2l3eWcnXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBxdWlja0luc2VydEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgdG9vbGJhckJ1dHRvbnM6IFtcbiAgICAgICAgJ2JvbGQnLFxuICAgICAgICAnaXRhbGljJyxcbiAgICAgICAgJ2FsaWduJyxcbiAgICAgICAgJ2Zvcm1hdE9MJyxcbiAgICAgICAgJ2Zvcm1hdFVMJyxcbiAgICAgICAgJ291dGRlbnQnLFxuICAgICAgICAnaW5kZW50JyxcbiAgICAgICAgJ3F1b3RlJyxcbiAgICAgICAgJ2luc2VydExpbmsnLFxuICAgICAgICAnaW5zZXJ0VGFibGUnLFxuICAgICAgICAnc3BlY2lhbENoYXJhY3RlcnMnLFxuICAgICAgICAnaW5zZXJ0SFInLFxuICAgICAgICAnc2VsZWN0QWxsJyxcbiAgICAgICAgJ2NsZWFyRm9ybWF0dGluZycsXG4gICAgICAgICdodG1sJ1xuICAgICAgXVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIG5ldyBGcm9hbGFFZGl0b3IoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RnJvYWxhRWRpdG9yXG4gICAgICAgIHRhZz1cInRleHRhcmVhXCJcbiAgICAgICAgY29uZmlnPXt0aGlzLmNvbmZpZ31cbiAgICAgICAgbW9kZWw9e3RoaXMucHJvcHMuY29udGVudH1cbiAgICAgICAgb25Nb2RlbENoYW5nZT17dGhpcy5wcm9wcy51cGRhdGV9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5FZGl0b3IucHJvcFR5cGVzID0ge1xuICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICBpZGVudDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=