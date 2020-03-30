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
/******/ 		"Login": 0
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
/******/ 	deferredModules.push(["./javascript/Login/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Login/index.jsx":
/*!************************************!*\
  !*** ./javascript/Login/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
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

/* global $, emailFill */









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Login = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Login, _Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Login);

    _this = _super.call(this, props);
    _this.state = {
      email: emailFill,
      password: '',
      capWarning: '',
      emailError: false,
      loginError: false
    };
    _this.post = _this.post.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.postOnEnter = _this.postOnEnter.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.reset = _this.reset.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.checkCaps = _this.checkCaps.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.updateEmail = _this.updateEmail.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.getEmailMessage = _this.getEmailMessage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Login, [{
    key: "post",
    value: function post() {
      var _this2 = this;

      $.ajax({
        url: './conference/User/Visitor/login',
        data: _objectSpread({}, this.state),
        dataType: 'json',
        type: 'post',
        success: function success(data) {
          if (data.success) {
            location.href = location.href.replace(/conference\/User\/Visitor\/login$/, 'conference/Visitor/Conference');
          } else {
            _this2.setState({
              loginError: true
            });
          }
        },
        error: function error() {}
      });
    }
  }, {
    key: "postOnEnter",
    value: function postOnEnter(e) {
      if (e.key === 'Enter') {
        this.post();
      }
    }
  }, {
    key: "checkCaps",
    value: function checkCaps(e) {
      if (e.getModifierState('CapsLock')) {
        this.setState({
          capWarning: e.keyCode !== 20
        });
      } else {
        this.setState({
          capWarning: false
        });
      }
    }
  }, {
    key: "getEmailMessage",
    value: function getEmailMessage() {
      if (this.state.email.length === 0) {
        return 'Enter your email address above';
      } else if (this.state.emailError) {
        return 'This email does not appear correct.';
      }
    }
  }, {
    key: "checkEmail",
    value: function checkEmail() {
      var expression = /\S+@\S+/;
      this.setState({
        emailError: !expression.test(String(this.state.email).toLowerCase())
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      this.setState({
        email: e.target.value
      }, this.checkEmail);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        loginError: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var content;

      if (this.state.loginError) {
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "login-error-message"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "alert alert-danger"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
          className: "alert-link text-center"
        }, "Account not found or not activated."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Have you", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "./conference/User/Visitor/signup"
        }, "signed up for an account?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Did you activate your account via the email we sent?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Did you type in your password correctly?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "./conference/User/Visitor/forgotPassword"
        }, "Did you forget your password?")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "btn btn-primary btn-block",
          onClick: this.reset
        }, "Try again")));
      } else {
        var disabled = !(this.state.email.length > 0 && this.state.password.length > 0);
        var capWarning;

        if (this.state.capWarning) {
          capWarning = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "badge badge-warning"
          }, "Warning: you have caps lock enabled.");
        }

        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          type: "text",
          name: "email",
          className: "form-control",
          value: this.state.email,
          onChange: this.updateEmail
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "small"
        }, this.getEmailMessage()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
          className: "mt-3"
        }, "Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          type: "password",
          name: "password",
          className: "form-control",
          value: this.state.password,
          onKeyPress: this.postOnEnter,
          onChange: function onChange(e) {
            return _this3.setState({
              password: e.target.value
            });
          },
          onKeyUp: this.checkCaps
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, capWarning), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "./conference/User/Visitor/forgotPassword"
        }, "I forgot my password."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "text-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "btn btn-success mt-3",
          onClick: this.post,
          disabled: disabled
        }, "Log in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "bg-light p-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Parent/family users need to", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "conference/User/Visitor/signup"
        }, "create an account"), " to access the Parent & Family Orientation Registration form."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: "text-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "conference/User/Visitor/signup",
          className: "btn btn-primary"
        }, "Need to sign up? Click here to create an account."))));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "conference row justify-content-md-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "card-title"
      }, "Please login to your parent account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-text login"
      }, content)))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);


Login.propTypes = {};
Login.defaultProps = {};
react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Login, null), document.getElementById('Login'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9Mb2dpbi9pbmRleC5qc3giXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJlbWFpbEZpbGwiLCJwYXNzd29yZCIsImNhcFdhcm5pbmciLCJlbWFpbEVycm9yIiwibG9naW5FcnJvciIsInBvc3QiLCJiaW5kIiwicG9zdE9uRW50ZXIiLCJyZXNldCIsImNoZWNrQ2FwcyIsInVwZGF0ZUVtYWlsIiwiZ2V0RW1haWxNZXNzYWdlIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwiZGF0YVR5cGUiLCJ0eXBlIiwic3VjY2VzcyIsImxvY2F0aW9uIiwiaHJlZiIsInJlcGxhY2UiLCJzZXRTdGF0ZSIsImVycm9yIiwiZSIsImtleSIsImdldE1vZGlmaWVyU3RhdGUiLCJrZXlDb2RlIiwibGVuZ3RoIiwiZXhwcmVzc2lvbiIsInRlc3QiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInRhcmdldCIsInZhbHVlIiwiY2hlY2tFbWFpbCIsImNvbnRlbnQiLCJkaXNhYmxlZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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dGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIkxvZ2luXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9qYXZhc2NyaXB0L0xvZ2luL2luZGV4LmpzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiJ3VzZSBzdHJpY3QnXG4vKiBnbG9iYWwgJCwgZW1haWxGaWxsICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogZW1haWxGaWxsLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgY2FwV2FybmluZzogJycsXG4gICAgICBlbWFpbEVycm9yOiBmYWxzZSxcbiAgICAgIGxvZ2luRXJyb3I6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMucG9zdCA9IHRoaXMucG9zdC5iaW5kKHRoaXMpXG4gICAgdGhpcy5wb3N0T25FbnRlciA9IHRoaXMucG9zdE9uRW50ZXIuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcylcbiAgICB0aGlzLmNoZWNrQ2FwcyA9IHRoaXMuY2hlY2tDYXBzLmJpbmQodGhpcylcbiAgICB0aGlzLnVwZGF0ZUVtYWlsID0gdGhpcy51cGRhdGVFbWFpbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRFbWFpbE1lc3NhZ2UgPSB0aGlzLmdldEVtYWlsTWVzc2FnZS5iaW5kKHRoaXMpXG4gIH1cblxuICBwb3N0KCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcuL2NvbmZlcmVuY2UvVXNlci9WaXNpdG9yL2xvZ2luJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZVxuICAgICAgfSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAncG9zdCcsXG4gICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoXG4gICAgICAgICAgICAvY29uZmVyZW5jZVxcL1VzZXJcXC9WaXNpdG9yXFwvbG9naW4kLyxcbiAgICAgICAgICAgICdjb25mZXJlbmNlL1Zpc2l0b3IvQ29uZmVyZW5jZSdcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9naW5FcnJvcjogdHJ1ZX0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgcG9zdE9uRW50ZXIoZSkge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5wb3N0KClcbiAgICB9XG4gIH1cblxuICBjaGVja0NhcHMoZSkge1xuICAgIGlmIChlLmdldE1vZGlmaWVyU3RhdGUoJ0NhcHNMb2NrJykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjYXBXYXJuaW5nOiBlLmtleUNvZGUgIT09IDIwXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjYXBXYXJuaW5nOiBmYWxzZX0pXG4gICAgfVxuICB9XG5cbiAgZ2V0RW1haWxNZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MgYWJvdmUnXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmVtYWlsRXJyb3IpIHtcbiAgICAgIHJldHVybiAnVGhpcyBlbWFpbCBkb2VzIG5vdCBhcHBlYXIgY29ycmVjdC4nXG4gICAgfVxuICB9XG5cbiAgY2hlY2tFbWFpbCgpIHtcbiAgICBjb25zdCBleHByZXNzaW9uID0gL1xcUytAXFxTKy9cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsRXJyb3I6ICFleHByZXNzaW9uLnRlc3QoU3RyaW5nKHRoaXMuc3RhdGUuZW1haWwpLnRvTG93ZXJDYXNlKCkpXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZUVtYWlsKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDogZS50YXJnZXQudmFsdWV9LCB0aGlzLmNoZWNrRW1haWwpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2dpbkVycm9yOiBmYWxzZX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbnRlbnRcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2dpbkVycm9yKSB7XG4gICAgICBjb250ZW50ID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWVycm9yLW1lc3NhZ2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImFsZXJ0LWxpbmsgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgQWNjb3VudCBub3QgZm91bmQgb3Igbm90IGFjdGl2YXRlZC5cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBIYXZlIHlvdXsnICd9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi4vY29uZmVyZW5jZS9Vc2VyL1Zpc2l0b3Ivc2lnbnVwXCI+XG4gICAgICAgICAgICAgICAgICBzaWduZWQgdXAgZm9yIGFuIGFjY291bnQ/XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+RGlkIHlvdSBhY3RpdmF0ZSB5b3VyIGFjY291bnQgdmlhIHRoZSBlbWFpbCB3ZSBzZW50PzwvbGk+XG4gICAgICAgICAgICAgIDxsaT5EaWQgeW91IHR5cGUgaW4geW91ciBwYXNzd29yZCBjb3JyZWN0bHk/PC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuL2NvbmZlcmVuY2UvVXNlci9WaXNpdG9yL2ZvcmdvdFBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICBEaWQgeW91IGZvcmdldCB5b3VyIHBhc3N3b3JkP1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9e3RoaXMucmVzZXR9PlxuICAgICAgICAgICAgICBUcnkgYWdhaW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlzYWJsZWQgPSAhKFxuICAgICAgICB0aGlzLnN0YXRlLmVtYWlsLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5wYXNzd29yZC5sZW5ndGggPiAwXG4gICAgICApXG4gICAgICBsZXQgY2FwV2FybmluZ1xuICAgICAgaWYgKHRoaXMuc3RhdGUuY2FwV2FybmluZykge1xuICAgICAgICBjYXBXYXJuaW5nID0gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utd2FybmluZ1wiPlxuICAgICAgICAgICAgV2FybmluZzogeW91IGhhdmUgY2FwcyBsb2NrIGVuYWJsZWQuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUVtYWlsfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbFwiPnt0aGlzLmdldEVtYWlsTWVzc2FnZSgpfTwvZGl2PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtdC0zXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5wb3N0T25FbnRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgb25LZXlVcD17dGhpcy5jaGVja0NhcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3Bhbj57Y2FwV2FybmluZ308L3NwYW4+XG4gICAgICAgICAgPGEgaHJlZj1cIi4vY29uZmVyZW5jZS9Vc2VyL1Zpc2l0b3IvZm9yZ290UGFzc3dvcmRcIj5cbiAgICAgICAgICAgIEkgZm9yZ290IG15IHBhc3N3b3JkLlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wb3N0fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgICAgICAgICBMb2cgaW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbGlnaHQgcC0zXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgUGFyZW50L2ZhbWlseSB1c2VycyBuZWVkIHRveycgJ31cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImNvbmZlcmVuY2UvVXNlci9WaXNpdG9yL3NpZ251cFwiPmNyZWF0ZSBhbiBhY2NvdW50PC9hPiB0b1xuICAgICAgICAgICAgICBhY2Nlc3MgdGhlIFBhcmVudCAmYW1wOyBGYW1pbHkgT3JpZW50YXRpb24gUmVnaXN0cmF0aW9uIGZvcm0uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJjb25mZXJlbmNlL1VzZXIvVmlzaXRvci9zaWdudXBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIE5lZWQgdG8gc2lnbiB1cD8gQ2xpY2sgaGVyZSB0byBjcmVhdGUgYW4gYWNjb3VudC5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25mZXJlbmNlIHJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgUGxlYXNlIGxvZ2luIHRvIHlvdXIgcGFyZW50IGFjY291bnRcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHQgbG9naW5cIj57Y29udGVudH08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5Mb2dpbi5wcm9wVHlwZXMgPSB7fVxuXG5Mb2dpbi5kZWZhdWx0UHJvcHMgPSB7fVxuXG5SZWFjdERPTS5yZW5kZXIoPExvZ2luIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9naW4nKSlcbiJdLCJzb3VyY2VSb290IjoiIn0=