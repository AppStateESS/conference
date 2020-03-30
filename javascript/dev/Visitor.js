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
/******/ 		"Visitor": 0
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
/******/ 	deferredModules.push(["./javascript/Visitor/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Visitor/VisitorForm.js":
/*!*******************************************!*\
  !*** ./javascript/Visitor/VisitorForm.js ***!
  \*******************************************/
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






var VisitorForm = function VisitorForm(_ref) {
  var update = _ref.update,
      resource = _ref.resource,
      save = _ref.save;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "firstName"
  }, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "firstName",
    type: "text",
    className: "form-control",
    name: "firstName",
    value: resource.firstName,
    onChange: update.bind(null, 'firstName')
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "lastName"
  }, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "lastName",
    type: "text",
    className: "form-control",
    name: "lastName",
    value: resource.lastName,
    onChange: update.bind(null, 'lastName')
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "address1"
  }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "address1",
    type: "text",
    className: "form-control",
    name: "address1",
    value: resource.address1,
    onChange: update.bind(null, 'address1')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "address2",
    type: "text",
    className: "form-control",
    name: "address2",
    value: resource.address2,
    onChange: update.bind(null, 'address2')
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "city"
  }, "City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "city",
    type: "text",
    className: "form-control",
    name: "city",
    value: resource.city,
    onChange: update.bind(null, 'city')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "State"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_essappstate_react_state_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: resource.state,
    handle: update.bind(null, 'state')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Zip"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "zip",
    type: "text",
    className: "form-control",
    name: "zip",
    value: resource.zip,
    onChange: update.bind(null, 'zip')
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-success",
    onClick: save
  }, "Save visitor"));
};

VisitorForm.propTypes = {
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  resource: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  save: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (VisitorForm);

/***/ }),

/***/ "./javascript/Visitor/index.jsx":
/*!**************************************!*\
  !*** ./javascript/Visitor/index.jsx ***!
  \**************************************/
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
/* harmony import */ var _VisitorForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VisitorForm */ "./javascript/Visitor/VisitorForm.js");









function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Visitor = /*#__PURE__*/function (_Listing) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Visitor, _Listing);

  var _super = _createSuper(Visitor);

  function Visitor(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Visitor);

    _this = _super.call(this, props);
    _this.restUrl = 'conference/Admin/Visitor';
    _this.label = 'Visitor';
    _this.defaultResource = {
      id: 0,
      email: '',
      lastName: '',
      firstName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      activated: 0
    };

    var dropdown = function dropdown(key) {
      var visitorId = _this.state.listing[key].id;
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
        href: "./conference/Admin/Visitor/loginAs?visitorId=".concat(visitorId)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-user"
      }), "\xA0Sign in as user"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "dropdown-item pointer",
        href: "./conference/Admin/Registration/visitor?visitorId=".concat(visitorId)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-book"
      }), "\xA0History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "my-1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
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
      column: 'activated',
      label: 'Activated',
      callback: function callback(row, key) {
        return row.activated === 1 ? 'Yes' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          type: "button",
          className: "btn btn-sm btn-outline-danger",
          onClick: function onClick() {
            _this.activate(row, key);
          }
        }, "No");
      }
    }, {
      column: 'email',
      label: 'Email/Username',
      sort: true,
      callback: function callback(row) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          href: "mailto:".concat(row.email)
        }, row.email);
      }
    }, {
      column: 'lastName',
      label: 'Last name',
      sort: true
    }, {
      column: 'firstName',
      label: 'First name'
    }];
    _this.state.resource = Object.assign({}, _this.defaultResource);
    _this.state.limit = 10;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Visitor, [{
    key: "navbarButton",
    value: function navbarButton() {
      return null;
    }
  }, {
    key: "deleteResource",
    value: function deleteResource(key, e) {
      e.preventDefault();

      if (prompt('Are you sure you want to delete this visitor along with their registrations and payments?\nType DELETE if so.') === 'DELETE') {
        this.sendDelete(key);
      }
    }
  }, {
    key: "activate",
    value: function activate(row, key) {
      var _this2 = this;

      if (confirm("Do you want to activate this user's account?")) {
        $.ajax({
          url: "conference/Admin/Visitor/".concat(row.id, "/activate"),
          dataType: 'json',
          type: 'patch',
          success: function success() {
            var listing = _this2.state.listing;
            listing[key].activated = 1;

            _this2.setState({
              listing: listing
            });
          },
          error: function error() {}
        });
      }
    }
  }, {
    key: "overlay",
    value: function overlay() {
      return {
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "visitor-form"
        }, this.form()),
        width: '80%',
        title: 'Edit visitor',
        close: this.load
      };
    }
  }, {
    key: "form",
    value: function form() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_VisitorForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
        update: this.update,
        resource: this.state.resource,
        save: this.save
      });
    }
  }, {
    key: "title",
    value: function title() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, "Visitors");
    }
  }]);

  return Visitor;
}(_essappstate_canopy_listing__WEBPACK_IMPORTED_MODULE_8___default.a);

Visitor.propTypes = {};
react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Visitor, null), document.getElementById('Visitor'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9WaXNpdG9yL1Zpc2l0b3JGb3JtLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvVmlzaXRvci9pbmRleC5qc3giXSwibmFtZXMiOlsiVmlzaXRvckZvcm0iLCJ1cGRhdGUiLCJyZXNvdXJjZSIsInNhdmUiLCJmaXJzdE5hbWUiLCJiaW5kIiwibGFzdE5hbWUiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsInN0YXRlIiwiemlwIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsIm9iamVjdCIsIlZpc2l0b3IiLCJwcm9wcyIsInJlc3RVcmwiLCJsYWJlbCIsImRlZmF1bHRSZXNvdXJjZSIsImlkIiwiZW1haWwiLCJwaG9uZSIsImFjdGl2YXRlZCIsImRyb3Bkb3duIiwia2V5IiwidmlzaXRvcklkIiwibGlzdGluZyIsImVkaXRSZXNvdXJjZSIsImRlbGV0ZVJlc291cmNlIiwiY29sdW1ucyIsImNvbHVtbiIsImNhbGxiYWNrIiwicm93Iiwic3R5bGUiLCJ3aWR0aCIsImFjdGl2YXRlIiwic29ydCIsIk9iamVjdCIsImFzc2lnbiIsImxpbWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvbXB0Iiwic2VuZERlbGV0ZSIsImNvbmZpcm0iLCIkIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwidHlwZSIsInN1Y2Nlc3MiLCJzZXRTdGF0ZSIsImVycm9yIiwiY29udGVudCIsImZvcm0iLCJ0aXRsZSIsImNsb3NlIiwibG9hZCIsIkxpc3RpbmciLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUVBaUQsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUFnQiwyREFBQyxPQUFELE9BQWhCLEVBQTZCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBN0IsRSIsImZpbGUiOiJWaXNpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIlZpc2l0b3JcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2phdmFzY3JpcHQvVmlzaXRvci9pbmRleC5qc3hcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFN0YXRlRHJvcGRvd24gZnJvbSAnQGVzc2FwcHN0YXRlL3JlYWN0LXN0YXRlLWRyb3Bkb3duJ1xuXG5jb25zdCBWaXNpdG9yRm9ybSA9ICh7dXBkYXRlLCByZXNvdXJjZSwgc2F2ZX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtyZXNvdXJjZS5maXJzdE5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGUuYmluZChudWxsLCAnZmlyc3ROYW1lJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPkxhc3QgbmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3Jlc291cmNlLmxhc3ROYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlLmJpbmQobnVsbCwgJ2xhc3ROYW1lJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZGRyZXNzMVwiPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwiYWRkcmVzczFcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzMVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtyZXNvdXJjZS5hZGRyZXNzMX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZS5iaW5kKG51bGwsICdhZGRyZXNzMScpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cImFkZHJlc3MyXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzczJcIlxuICAgICAgICAgICAgICB2YWx1ZT17cmVzb3VyY2UuYWRkcmVzczJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGUuYmluZChudWxsLCAnYWRkcmVzczInKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNpdHlcIj5DaXR5PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cImNpdHlcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3Jlc291cmNlLmNpdHl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGUuYmluZChudWxsLCAnY2l0eScpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICA8bGFiZWw+U3RhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICA8U3RhdGVEcm9wZG93blxuICAgICAgICAgICAgICAgIHZhbHVlPXtyZXNvdXJjZS5zdGF0ZX1cbiAgICAgICAgICAgICAgICBoYW5kbGU9e3VwZGF0ZS5iaW5kKG51bGwsICdzdGF0ZScpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5aaXA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInppcFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInppcFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Jlc291cmNlLnppcH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlLmJpbmQobnVsbCwgJ3ppcCcpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3NhdmV9PlxuICAgICAgICBTYXZlIHZpc2l0b3JcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cblZpc2l0b3JGb3JtLnByb3BUeXBlcyA9IHtcbiAgdXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgcmVzb3VyY2U6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNhdmU6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc2l0b3JGb3JtXG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgTGlzdGluZyBmcm9tICdAZXNzYXBwc3RhdGUvY2Fub3B5LWxpc3RpbmcnXG5pbXBvcnQgVmlzaXRvckZvcm0gZnJvbSAnLi9WaXNpdG9yRm9ybSdcblxuY2xhc3MgVmlzaXRvciBleHRlbmRzIExpc3Rpbmcge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMucmVzdFVybCA9ICdjb25mZXJlbmNlL0FkbWluL1Zpc2l0b3InXG4gICAgdGhpcy5sYWJlbCA9ICdWaXNpdG9yJ1xuICAgIHRoaXMuZGVmYXVsdFJlc291cmNlID0ge1xuICAgICAgaWQ6IDAsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBsYXN0TmFtZTogJycsXG4gICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgYWRkcmVzczE6ICcnLFxuICAgICAgYWRkcmVzczI6ICcnLFxuICAgICAgY2l0eTogJycsXG4gICAgICBzdGF0ZTogJycsXG4gICAgICB6aXA6ICcnLFxuICAgICAgcGhvbmU6ICcnLFxuICAgICAgYWN0aXZhdGVkOiAwXG4gICAgfVxuXG4gICAgY29uc3QgZHJvcGRvd24gPSBrZXkgPT4ge1xuICAgICAgY29uc3QgdmlzaXRvcklkID0gdGhpcy5zdGF0ZS5saXN0aW5nW2tleV0uaWRcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIlxuICAgICAgICAgICAgaWQ9XCJkcm9wZG93bk1lbnVCdXR0b25cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnVCdXR0b25cIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcG9pbnRlclwiXG4gICAgICAgICAgICAgIGhyZWY9e2AuL2NvbmZlcmVuY2UvQWRtaW4vVmlzaXRvci9sb2dpbkFzP3Zpc2l0b3JJZD0ke3Zpc2l0b3JJZH1gfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIiAvPlxuICAgICAgICAgICAgICAmbmJzcDtTaWduIGluIGFzIHVzZXJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcG9pbnRlclwiXG4gICAgICAgICAgICAgIGhyZWY9e2AuL2NvbmZlcmVuY2UvQWRtaW4vUmVnaXN0cmF0aW9uL3Zpc2l0b3I/dmlzaXRvcklkPSR7dmlzaXRvcklkfWB9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm9va1wiIC8+XG4gICAgICAgICAgICAgICZuYnNwO0hpc3RvcnlcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS0xXCIgLz5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcG9pbnRlclwiXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5lZGl0UmVzb3VyY2UuYmluZCh0aGlzLCBrZXkpfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVkaXRcIiAvPlxuICAgICAgICAgICAgICAmbmJzcDtFZGl0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHBvaW50ZXJcIlxuICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlUmVzb3VyY2UuYmluZCh0aGlzLCBrZXkpfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoXCIgLz5cbiAgICAgICAgICAgICAgJm5ic3A7RGVsZXRlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgY29sdW1uOiAnb3B0aW9ucycsXG4gICAgICAgIGNhbGxiYWNrOiAocm93LCBrZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gZHJvcGRvd24oa2V5KVxuICAgICAgICB9LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiAnMTAlJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICdhY3RpdmF0ZWQnLFxuICAgICAgICBsYWJlbDogJ0FjdGl2YXRlZCcsXG4gICAgICAgIGNhbGxiYWNrOiAocm93LCBrZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gcm93LmFjdGl2YXRlZCA9PT0gMSA/IChcbiAgICAgICAgICAgICdZZXMnXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGUocm93LCBrZXkpXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICdlbWFpbCcsXG4gICAgICAgIGxhYmVsOiAnRW1haWwvVXNlcm5hbWUnLFxuICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICBjYWxsYmFjazogcm93ID0+IHtcbiAgICAgICAgICByZXR1cm4gPGEgaHJlZj17YG1haWx0bzoke3Jvdy5lbWFpbH1gfT57cm93LmVtYWlsfTwvYT5cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sdW1uOiAnbGFzdE5hbWUnLFxuICAgICAgICBsYWJlbDogJ0xhc3QgbmFtZScsXG4gICAgICAgIHNvcnQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbHVtbjogJ2ZpcnN0TmFtZScsXG4gICAgICAgIGxhYmVsOiAnRmlyc3QgbmFtZSdcbiAgICAgIH1cbiAgICBdXG5cbiAgICB0aGlzLnN0YXRlLnJlc291cmNlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0UmVzb3VyY2UpXG4gICAgdGhpcy5zdGF0ZS5saW1pdCA9IDEwXG4gIH1cblxuICBuYXZiYXJCdXR0b24oKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGRlbGV0ZVJlc291cmNlKGtleSwgZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChcbiAgICAgIHByb21wdChcbiAgICAgICAgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB2aXNpdG9yIGFsb25nIHdpdGggdGhlaXIgcmVnaXN0cmF0aW9ucyBhbmQgcGF5bWVudHM/XFxuVHlwZSBERUxFVEUgaWYgc28uJ1xuICAgICAgKSA9PT0gJ0RFTEVURSdcbiAgICApIHtcbiAgICAgIHRoaXMuc2VuZERlbGV0ZShrZXkpXG4gICAgfVxuICB9XG5cbiAgYWN0aXZhdGUocm93LCBrZXkpIHtcbiAgICBpZiAoY29uZmlybShgRG8geW91IHdhbnQgdG8gYWN0aXZhdGUgdGhpcyB1c2VyJ3MgYWNjb3VudD9gKSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgY29uZmVyZW5jZS9BZG1pbi9WaXNpdG9yLyR7cm93LmlkfS9hY3RpdmF0ZWAsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIHR5cGU6ICdwYXRjaCcsXG4gICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCB7bGlzdGluZ30gPSB0aGlzLnN0YXRlXG4gICAgICAgICAgbGlzdGluZ1trZXldLmFjdGl2YXRlZCA9IDFcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0aW5nfSlcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG92ZXJsYXkoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnQ6IDxkaXYgY2xhc3NOYW1lPVwidmlzaXRvci1mb3JtXCI+e3RoaXMuZm9ybSgpfTwvZGl2PixcbiAgICAgIHdpZHRoOiAnODAlJyxcbiAgICAgIHRpdGxlOiAnRWRpdCB2aXNpdG9yJyxcbiAgICAgIGNsb3NlOiB0aGlzLmxvYWRcbiAgICB9XG4gIH1cblxuICBmb3JtKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VmlzaXRvckZvcm1cbiAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZX1cbiAgICAgICAgcmVzb3VyY2U9e3RoaXMuc3RhdGUucmVzb3VyY2V9XG4gICAgICAgIHNhdmU9e3RoaXMuc2F2ZX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgdGl0bGUoKSB7XG4gICAgcmV0dXJuIDxoMj5WaXNpdG9yczwvaDI+XG4gIH1cbn1cblxuVmlzaXRvci5wcm9wVHlwZXMgPSB7fVxuXG5SZWFjdERPTS5yZW5kZXIoPFZpc2l0b3IgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdWaXNpdG9yJykpXG4iXSwic291cmNlUm9vdCI6IiJ9