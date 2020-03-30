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
/******/ 		"Signup": 0
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
/******/ 	deferredModules.push(["./javascript/Signup/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Shared/Password.js":
/*!***************************************!*\
  !*** ./javascript/Shared/Password.js ***!
  \***************************************/
/*! exports provided: getPasswordMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPasswordMessage", function() { return getPasswordMessage; });
var getPasswordMessage = function getPasswordMessage(password, checkPassword) {
  var passwordMessage = "Password should be 8 characters with a non-letter character (i.e. number, percent sign, etc.).";
  var passwordLength = password.length;

  if (passwordLength >= 8) {
    if (password.search(/[^a-z]/) !== -1) {
      if (password !== checkPassword) {
        passwordMessage = 'Make sure your check password below matches.';
      } else {
        passwordMessage = 'This password will work.';
      }
    } else {
      passwordMessage = 'A non-letter character is needed.';
    }
  } else if (passwordLength !== 0) {
    var left = 8 - passwordLength;
    passwordMessage = "Only ".concat(left, " ").concat(left > 1 ? 'characters' : 'character', " left.");
  }

  return passwordMessage;
};



/***/ }),

/***/ "./javascript/Signup/index.jsx":
/*!*************************************!*\
  !*** ./javascript/Signup/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
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
/* harmony import */ var _Shared_Password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Shared/Password */ "./javascript/Shared/Password.js");









function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




/* global $ */

var Signup = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Signup, _Component);

  var _super = _createSuper(Signup);

  function Signup(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Signup);

    _this = _super.call(this, props);
    _this.state = {
      error: '',
      status: 'form',
      showPassword: false,
      password: '',
      checkPassword: '',
      email: '',
      emailError: false,
      toggleShow: false,
      allowSave: false
    };
    _this.toggleShow = _this.toggleShow.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.createAccount = _this.createAccount.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.comparePassword = _this.comparePassword.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.checkEmail = _this.checkEmail.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.getEmailMessage = _this.getEmailMessage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.updatePassword = _this.updatePassword.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.updateCheckPassword = _this.updateCheckPassword.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.updateEmail = _this.updateEmail.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Signup, [{
    key: "toggleShow",
    value: function toggleShow() {
      this.setState({
        toggleShow: !this.state.toggleShow
      });
    }
  }, {
    key: "checkEmail",
    value: function checkEmail() {
      this.setState({
        emailError: !this.emailFormatCorrect()
      });
    }
  }, {
    key: "emailFormatCorrect",
    value: function emailFormatCorrect() {
      var expression = /\S+@\S+/;
      return expression.test(String(this.state.email).toLowerCase());
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
    key: "isBadAccount",
    value: function isBadAccount() {
      var _this$state = this.state,
          password = _this$state.password,
          email = _this$state.email,
          checkPassword = _this$state.checkPassword;
      return !this.emailFormatCorrect() || email.length === 0 || password.length < 8 || password !== checkPassword || password.search(/[^a-z]/) === -1;
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;

      if (this.isBadAccount()) {
        return;
      }

      $.ajax({
        url: './conference/User/Visitor/',
        data: {
          email: this.state.email,
          password: this.state.password
        },
        dataType: 'json',
        type: 'post',
        success: function success(data) {
          if (data.success) {
            _this2.setState({
              status: 'success',
              error: ''
            });
          } else {
            _this2.setState({
              status: 'error',
              error: data.error
            });
          }
        },
        error: function error() {
          _this2.setState({
            status: 'error'
          });
        }
      });
    }
  }, {
    key: "createAccount",
    value: function createAccount() {
      var _this3 = this;

      if (this.isBadAccount()) {
        return;
      }

      $.ajax({
        url: './conference/User/Visitor/checkEmail',
        data: {
          email: this.state.email
        },
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          if (!data.found) {
            _this3.save();
          } else {
            _this3.setState({
              status: 'duplicate'
            });
          }
        },
        error: function error() {
          _this3.setState({
            status: 'error'
          });
        }
      });
    }
  }, {
    key: "comparePassword",
    value: function comparePassword() {
      if (this.state.password === this.state.checkPassword) {
        this.setState({
          allowSave: this.state.email.length > 0
        });
      } else {
        this.setState({
          allowSave: false
        });
      }
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(e) {
      this.setState({
        password: e.target.value
      }, this.comparePassword);
    }
  }, {
    key: "updateCheckPassword",
    value: function updateCheckPassword(e) {
      this.setState({
        checkPassword: e.target.value
      }, this.comparePassword);
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      this.setState({
        email: e.target.value
      }, this.checkEmail);
    }
  }, {
    key: "form",
    value: function form() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, "Signup for a new account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-text"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "emailAddress",
        className: "form-control",
        value: this.state.email,
        onChange: this.updateEmail
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "small"
      }, this.getEmailMessage()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "mt-3"
      }, "Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "input-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: this.state.toggleShow ? 'text' : 'password',
        className: "form-control",
        value: this.state.password,
        onChange: this.updatePassword,
        "aria-label": "Password"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "input-group-append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "input-group-text pointer ".concat(this.state.toggleShow ? ' bg-success text-white' : null),
        onClick: this.toggleShow
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-eye"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "small"
      }, Object(_Shared_Password__WEBPACK_IMPORTED_MODULE_8__["getPasswordMessage"])(this.state.password, this.state.checkPassword)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "mt-3"
      }, "Re-enter password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: this.state.toggleShow ? 'text' : 'password',
        name: "checkPassword",
        className: "form-control",
        value: this.state.checkPassword,
        onChange: this.updateCheckPassword
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        disabled: !this.state.allowSave || this.state.emailError,
        className: "btn btn-success mt-3",
        onClick: this.createAccount
      }, "Create my account"))));
    }
  }, {
    key: "duplicate",
    value: function duplicate() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, "Hmmm..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "We already have an account using the email", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-success"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, this.state.email)), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Did you mean to\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "./conference/User/Visitor/login"
      }, "log in instead?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Or maybe you\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "./conference/User/Visitor/forgotPassword"
      }, "forgot your password?")));
    }
  }, {
    key: "success",
    value: function success() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, "Almost done!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Your account has been created, we just need verification. Please check your email and click the authorization link we sent you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Once you have done that,\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "./conference/User/Visitor/login"
      }, "you can log in"), "."));
    }
  }, {
    key: "error",
    value: function error() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Error: ", this.state.error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "./conference/User/Visitor/signup"
      }, "Go back to signup")));
    }
  }, {
    key: "getStatusRender",
    value: function getStatusRender() {
      switch (this.state.status) {
        case 'form':
          return this.form();

        case 'duplicate':
          return this.duplicate();

        case 'success':
          return this.success();

        case 'error':
          return this.error();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-body"
      }, this.getStatusRender())))));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


Signup.propTypes = {};
Signup.defaultProps = {};
react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Signup, null), document.getElementById('Signup'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TaGFyZWQvUGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TaWdudXAvaW5kZXguanN4Il0sIm5hbWVzIjpbImdldFBhc3N3b3JkTWVzc2FnZSIsInBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkTWVzc2FnZSIsInBhc3N3b3JkTGVuZ3RoIiwibGVuZ3RoIiwic2VhcmNoIiwibGVmdCIsIlNpZ251cCIsInByb3BzIiwic3RhdGUiLCJlcnJvciIsInN0YXR1cyIsInNob3dQYXNzd29yZCIsImVtYWlsIiwiZW1haWxFcnJvciIsInRvZ2dsZVNob3ciLCJhbGxvd1NhdmUiLCJiaW5kIiwiY3JlYXRlQWNjb3VudCIsImNvbXBhcmVQYXNzd29yZCIsImNoZWNrRW1haWwiLCJnZXRFbWFpbE1lc3NhZ2UiLCJ1cGRhdGVQYXNzd29yZCIsInVwZGF0ZUNoZWNrUGFzc3dvcmQiLCJ1cGRhdGVFbWFpbCIsInNldFN0YXRlIiwiZW1haWxGb3JtYXRDb3JyZWN0IiwiZXhwcmVzc2lvbiIsInRlc3QiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImlzQmFkQWNjb3VudCIsIiQiLCJhamF4IiwidXJsIiwiZGF0YSIsImRhdGFUeXBlIiwidHlwZSIsInN1Y2Nlc3MiLCJmb3VuZCIsInNhdmUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmb3JtIiwiZHVwbGljYXRlIiwiZ2V0U3RhdHVzUmVuZGVyIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUFBO0FBQUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQVdDLGFBQVgsRUFBNkI7QUFDdEQsTUFBSUMsZUFBZSxtR0FBbkI7QUFDQSxNQUFNQyxjQUFjLEdBQUdILFFBQVEsQ0FBQ0ksTUFBaEM7O0FBQ0EsTUFBSUQsY0FBYyxJQUFJLENBQXRCLEVBQXlCO0FBQ3ZCLFFBQUlILFFBQVEsQ0FBQ0ssTUFBVCxDQUFnQixRQUFoQixNQUE4QixDQUFDLENBQW5DLEVBQXNDO0FBQ3BDLFVBQUlMLFFBQVEsS0FBS0MsYUFBakIsRUFBZ0M7QUFDOUJDLHVCQUFlLEdBQUcsOENBQWxCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLHVCQUFlLEdBQUcsMEJBQWxCO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTEEscUJBQWUsR0FBRyxtQ0FBbEI7QUFDRDtBQUNGLEdBVkQsTUFVTyxJQUFJQyxjQUFjLEtBQUssQ0FBdkIsRUFBMEI7QUFDL0IsUUFBTUcsSUFBSSxHQUFHLElBQUlILGNBQWpCO0FBQ0FELG1CQUFlLGtCQUFXSSxJQUFYLGNBQ2JBLElBQUksR0FBRyxDQUFQLEdBQVcsWUFBWCxHQUEwQixXQURiLFdBQWY7QUFHRDs7QUFDRCxTQUFPSixlQUFQO0FBQ0QsQ0FwQkQ7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBOztJQUVxQkssTTs7Ozs7QUFDbkIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBSyxFQUFFLEVBREk7QUFFWEMsWUFBTSxFQUFFLE1BRkc7QUFHWEMsa0JBQVksRUFBRSxLQUhIO0FBSVhaLGNBQVEsRUFBRSxFQUpDO0FBS1hDLG1CQUFhLEVBQUUsRUFMSjtBQU1YWSxXQUFLLEVBQUUsRUFOSTtBQU9YQyxnQkFBVSxFQUFFLEtBUEQ7QUFRWEMsZ0JBQVUsRUFBRSxLQVJEO0FBU1hDLGVBQVMsRUFBRTtBQVRBLEtBQWI7QUFXQSxVQUFLRCxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JFLElBQWhCLDRGQUFsQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsNEZBQXJCO0FBQ0EsVUFBS0UsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCRixJQUFyQiw0RkFBdkI7QUFDQSxVQUFLRyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JILElBQWhCLDRGQUFsQjtBQUNBLFVBQUtJLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkosSUFBckIsNEZBQXZCO0FBQ0EsVUFBS0ssY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CTCxJQUFwQiw0RkFBdEI7QUFDQSxVQUFLTSxtQkFBTCxHQUEyQixNQUFLQSxtQkFBTCxDQUF5Qk4sSUFBekIsNEZBQTNCO0FBQ0EsVUFBS08sV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCUCxJQUFqQiw0RkFBbkI7QUFwQmlCO0FBcUJsQjs7OztpQ0FFWTtBQUNYLFdBQUtRLFFBQUwsQ0FBYztBQUNaVixrQkFBVSxFQUFFLENBQUMsS0FBS04sS0FBTCxDQUFXTTtBQURaLE9BQWQ7QUFHRDs7O2lDQUVZO0FBQ1gsV0FBS1UsUUFBTCxDQUFjO0FBQ1pYLGtCQUFVLEVBQUUsQ0FBQyxLQUFLWSxrQkFBTDtBQURELE9BQWQ7QUFHRDs7O3lDQUVvQjtBQUNuQixVQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDQSxhQUFPQSxVQUFVLENBQUNDLElBQVgsQ0FBZ0JDLE1BQU0sQ0FBQyxLQUFLcEIsS0FBTCxDQUFXSSxLQUFaLENBQU4sQ0FBeUJpQixXQUF6QixFQUFoQixDQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBSSxLQUFLckIsS0FBTCxDQUFXSSxLQUFYLENBQWlCVCxNQUFqQixLQUE0QixDQUFoQyxFQUFtQztBQUNqQyxlQUFPLGdDQUFQO0FBQ0QsT0FGRCxNQUVPLElBQUksS0FBS0ssS0FBTCxDQUFXSyxVQUFmLEVBQTJCO0FBQ2hDLGVBQU8scUNBQVA7QUFDRDtBQUNGOzs7bUNBRWM7QUFBQSx3QkFDNEIsS0FBS0wsS0FEakM7QUFBQSxVQUNOVCxRQURNLGVBQ05BLFFBRE07QUFBQSxVQUNJYSxLQURKLGVBQ0lBLEtBREo7QUFBQSxVQUNXWixhQURYLGVBQ1dBLGFBRFg7QUFFYixhQUNFLENBQUMsS0FBS3lCLGtCQUFMLEVBQUQsSUFDQWIsS0FBSyxDQUFDVCxNQUFOLEtBQWlCLENBRGpCLElBRUFKLFFBQVEsQ0FBQ0ksTUFBVCxHQUFrQixDQUZsQixJQUdBSixRQUFRLEtBQUtDLGFBSGIsSUFJQUQsUUFBUSxDQUFDSyxNQUFULENBQWdCLFFBQWhCLE1BQThCLENBQUMsQ0FMakM7QUFPRDs7OzJCQUVNO0FBQUE7O0FBQ0wsVUFBSSxLQUFLMEIsWUFBTCxFQUFKLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBQ0RDLE9BQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLFdBQUcsRUFBRSw0QkFEQTtBQUVMQyxZQUFJLEVBQUU7QUFDSnRCLGVBQUssRUFBRSxLQUFLSixLQUFMLENBQVdJLEtBRGQ7QUFFSmIsa0JBQVEsRUFBRSxLQUFLUyxLQUFMLENBQVdUO0FBRmpCLFNBRkQ7QUFNTG9DLGdCQUFRLEVBQUUsTUFOTDtBQU9MQyxZQUFJLEVBQUUsTUFQRDtBQVFMQyxlQUFPLEVBQUUsaUJBQUFILElBQUksRUFBSTtBQUNmLGNBQUlBLElBQUksQ0FBQ0csT0FBVCxFQUFrQjtBQUNoQixrQkFBSSxDQUFDYixRQUFMLENBQWM7QUFBQ2Qsb0JBQU0sRUFBRSxTQUFUO0FBQW9CRCxtQkFBSyxFQUFFO0FBQTNCLGFBQWQ7QUFDRCxXQUZELE1BRU87QUFDTCxrQkFBSSxDQUFDZSxRQUFMLENBQWM7QUFBQ2Qsb0JBQU0sRUFBRSxPQUFUO0FBQWtCRCxtQkFBSyxFQUFFeUIsSUFBSSxDQUFDekI7QUFBOUIsYUFBZDtBQUNEO0FBQ0YsU0FkSTtBQWVMQSxhQUFLLEVBQUUsaUJBQU07QUFDWCxnQkFBSSxDQUFDZSxRQUFMLENBQWM7QUFBQ2Qsa0JBQU0sRUFBRTtBQUFULFdBQWQ7QUFDRDtBQWpCSSxPQUFQO0FBbUJEOzs7b0NBRWU7QUFBQTs7QUFDZCxVQUFJLEtBQUtvQixZQUFMLEVBQUosRUFBeUI7QUFDdkI7QUFDRDs7QUFDREMsT0FBQyxDQUFDQyxJQUFGLENBQU87QUFDTEMsV0FBRyxFQUFFLHNDQURBO0FBRUxDLFlBQUksRUFBRTtBQUNKdEIsZUFBSyxFQUFFLEtBQUtKLEtBQUwsQ0FBV0k7QUFEZCxTQUZEO0FBS0x1QixnQkFBUSxFQUFFLE1BTEw7QUFNTEMsWUFBSSxFQUFFLEtBTkQ7QUFPTEMsZUFBTyxFQUFFLGlCQUFBSCxJQUFJLEVBQUk7QUFDZixjQUFJLENBQUNBLElBQUksQ0FBQ0ksS0FBVixFQUFpQjtBQUNmLGtCQUFJLENBQUNDLElBQUw7QUFDRCxXQUZELE1BRU87QUFDTCxrQkFBSSxDQUFDZixRQUFMLENBQWM7QUFBQ2Qsb0JBQU0sRUFBRTtBQUFULGFBQWQ7QUFDRDtBQUNGLFNBYkk7QUFjTEQsYUFBSyxFQUFFLGlCQUFNO0FBQ1gsZ0JBQUksQ0FBQ2UsUUFBTCxDQUFjO0FBQUNkLGtCQUFNLEVBQUU7QUFBVCxXQUFkO0FBQ0Q7QUFoQkksT0FBUDtBQWtCRDs7O3NDQUVpQjtBQUNoQixVQUFJLEtBQUtGLEtBQUwsQ0FBV1QsUUFBWCxLQUF3QixLQUFLUyxLQUFMLENBQVdSLGFBQXZDLEVBQXNEO0FBQ3BELGFBQUt3QixRQUFMLENBQWM7QUFBQ1QsbUJBQVMsRUFBRSxLQUFLUCxLQUFMLENBQVdJLEtBQVgsQ0FBaUJULE1BQWpCLEdBQTBCO0FBQXRDLFNBQWQ7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLcUIsUUFBTCxDQUFjO0FBQUNULG1CQUFTLEVBQUU7QUFBWixTQUFkO0FBQ0Q7QUFDRjs7O21DQUVjeUIsQyxFQUFHO0FBQ2hCLFdBQUtoQixRQUFMLENBQWM7QUFBQ3pCLGdCQUFRLEVBQUV5QyxDQUFDLENBQUNDLE1BQUYsQ0FBU0M7QUFBcEIsT0FBZCxFQUEwQyxLQUFLeEIsZUFBL0M7QUFDRDs7O3dDQUVtQnNCLEMsRUFBRztBQUNyQixXQUFLaEIsUUFBTCxDQUFjO0FBQUN4QixxQkFBYSxFQUFFd0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0FBQXpCLE9BQWQsRUFBK0MsS0FBS3hCLGVBQXBEO0FBQ0Q7OztnQ0FFV3NCLEMsRUFBRztBQUNiLFdBQUtoQixRQUFMLENBQWM7QUFBQ1osYUFBSyxFQUFFNEIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0FBQWpCLE9BQWQsRUFBdUMsS0FBS3ZCLFVBQTVDO0FBQ0Q7OzsyQkFFTTtBQUNMLDBCQUNFLHFGQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFLGtHQURGLENBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRSwwRkFERixlQUVFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsY0FGUDtBQUdFLGlCQUFTLEVBQUMsY0FIWjtBQUlFLGFBQUssRUFBRSxLQUFLWCxLQUFMLENBQVdJLEtBSnBCO0FBS0UsZ0JBQVEsRUFBRSxLQUFLVztBQUxqQixRQUZGLGVBU0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBd0IsS0FBS0gsZUFBTCxFQUF4QixDQVRGLGVBVUU7QUFBTyxpQkFBUyxFQUFDO0FBQWpCLHFCQVZGLGVBV0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFDRSxZQUFJLEVBQUUsS0FBS1osS0FBTCxDQUFXTSxVQUFYLEdBQXdCLE1BQXhCLEdBQWlDLFVBRHpDO0FBRUUsaUJBQVMsRUFBQyxjQUZaO0FBR0UsYUFBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV1QsUUFIcEI7QUFJRSxnQkFBUSxFQUFFLEtBQUtzQixjQUpqQjtBQUtFLHNCQUFXO0FBTGIsUUFERixlQVFFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQ0UsaUJBQVMscUNBQ1AsS0FBS2IsS0FBTCxDQUFXTSxVQUFYLEdBQXdCLHdCQUF4QixHQUFtRCxJQUQ1QyxDQURYO0FBSUUsZUFBTyxFQUFFLEtBQUtBO0FBSmhCLHNCQUtFO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBTEYsQ0FERixDQVJGLENBWEYsZUE2QkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDR2hCLDJFQUFrQixDQUFDLEtBQUtVLEtBQUwsQ0FBV1QsUUFBWixFQUFzQixLQUFLUyxLQUFMLENBQVdSLGFBQWpDLENBRHJCLENBN0JGLGVBZ0NFO0FBQU8saUJBQVMsRUFBQztBQUFqQiw4QkFoQ0YsZUFpQ0U7QUFDRSxZQUFJLEVBQUUsS0FBS1EsS0FBTCxDQUFXTSxVQUFYLEdBQXdCLE1BQXhCLEdBQWlDLFVBRHpDO0FBRUUsWUFBSSxFQUFDLGVBRlA7QUFHRSxpQkFBUyxFQUFDLGNBSFo7QUFJRSxhQUFLLEVBQUUsS0FBS04sS0FBTCxDQUFXUixhQUpwQjtBQUtFLGdCQUFRLEVBQUUsS0FBS3NCO0FBTGpCLFFBakNGLGVBd0NFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQ0UsZ0JBQVEsRUFBRSxDQUFDLEtBQUtkLEtBQUwsQ0FBV08sU0FBWixJQUF5QixLQUFLUCxLQUFMLENBQVdLLFVBRGhEO0FBRUUsaUJBQVMsRUFBQyxzQkFGWjtBQUdFLGVBQU8sRUFBRSxLQUFLSTtBQUhoQiw2QkFERixDQXhDRixDQUpGLENBREY7QUF3REQ7OztnQ0FFVztBQUNWLDBCQUNFLHFGQUNFLGlGQURGLGVBRUUsb0hBQzZDLEdBRDdDLGVBRUU7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLHNCQUNFLDJFQUFTLEtBQUtULEtBQUwsQ0FBV0ksS0FBcEIsQ0FERixDQUZGLE1BRkYsZUFTRSwwR0FFRTtBQUFHLFlBQUksRUFBQztBQUFSLDJCQUZGLENBVEYsZUFhRSx1R0FFRTtBQUFHLFlBQUksRUFBQztBQUFSLGlDQUZGLENBYkYsQ0FERjtBQXNCRDs7OzhCQUVTO0FBQ1IsMEJBQ0UscUZBQ0Usc0ZBREYsZUFFRSx3TUFGRixlQU1FLG1IQUVFO0FBQUcsWUFBSSxFQUFDO0FBQVIsMEJBRkYsTUFORixDQURGO0FBYUQ7Ozs0QkFFTztBQUNOLDBCQUNFLHFGQUNFLGlGQUFXLEtBQUtKLEtBQUwsQ0FBV0MsS0FBdEIsQ0FERixlQUVFLG1GQUNFO0FBQUcsWUFBSSxFQUFDO0FBQVIsNkJBREYsQ0FGRixDQURGO0FBUUQ7OztzQ0FFaUI7QUFDaEIsY0FBUSxLQUFLRCxLQUFMLENBQVdFLE1BQW5CO0FBQ0UsYUFBSyxNQUFMO0FBQ0UsaUJBQU8sS0FBS2lDLElBQUwsRUFBUDs7QUFFRixhQUFLLFdBQUw7QUFDRSxpQkFBTyxLQUFLQyxTQUFMLEVBQVA7O0FBRUYsYUFBSyxTQUFMO0FBQ0UsaUJBQU8sS0FBS1AsT0FBTCxFQUFQOztBQUVGLGFBQUssT0FBTDtBQUNFLGlCQUFPLEtBQUs1QixLQUFMLEVBQVA7QUFYSjtBQWFEOzs7NkJBRVE7QUFDUCwwQkFDRSxxRkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE0QixLQUFLb0MsZUFBTCxFQUE1QixDQURGLENBREYsQ0FERixDQURGLENBREY7QUFXRDs7OztFQTVRaUNDLCtDOzs7QUErUXBDeEMsTUFBTSxDQUFDeUMsU0FBUCxHQUFtQixFQUFuQjtBQUVBekMsTUFBTSxDQUFDMEMsWUFBUCxHQUFzQixFQUF0QjtBQUVBQyxnREFBUSxDQUFDQyxNQUFULGVBQWdCLDJEQUFDLE1BQUQsT0FBaEIsRUFBNEJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUE1QixFIiwiZmlsZSI6IlNpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJTaWdudXBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2phdmFzY3JpcHQvU2lnbnVwL2luZGV4LmpzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiY29uc3QgZ2V0UGFzc3dvcmRNZXNzYWdlID0gKHBhc3N3b3JkLCBjaGVja1Bhc3N3b3JkKSA9PiB7XG4gIGxldCBwYXNzd29yZE1lc3NhZ2UgPSBgUGFzc3dvcmQgc2hvdWxkIGJlIDggY2hhcmFjdGVycyB3aXRoIGEgbm9uLWxldHRlciBjaGFyYWN0ZXIgKGkuZS4gbnVtYmVyLCBwZXJjZW50IHNpZ24sIGV0Yy4pLmBcbiAgY29uc3QgcGFzc3dvcmRMZW5ndGggPSBwYXNzd29yZC5sZW5ndGhcbiAgaWYgKHBhc3N3b3JkTGVuZ3RoID49IDgpIHtcbiAgICBpZiAocGFzc3dvcmQuc2VhcmNoKC9bXmEtel0vKSAhPT0gLTEpIHtcbiAgICAgIGlmIChwYXNzd29yZCAhPT0gY2hlY2tQYXNzd29yZCkge1xuICAgICAgICBwYXNzd29yZE1lc3NhZ2UgPSAnTWFrZSBzdXJlIHlvdXIgY2hlY2sgcGFzc3dvcmQgYmVsb3cgbWF0Y2hlcy4nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXNzd29yZE1lc3NhZ2UgPSAnVGhpcyBwYXNzd29yZCB3aWxsIHdvcmsuJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXNzd29yZE1lc3NhZ2UgPSAnQSBub24tbGV0dGVyIGNoYXJhY3RlciBpcyBuZWVkZWQuJ1xuICAgIH1cbiAgfSBlbHNlIGlmIChwYXNzd29yZExlbmd0aCAhPT0gMCkge1xuICAgIGNvbnN0IGxlZnQgPSA4IC0gcGFzc3dvcmRMZW5ndGhcbiAgICBwYXNzd29yZE1lc3NhZ2UgPSBgT25seSAke2xlZnR9ICR7XG4gICAgICBsZWZ0ID4gMSA/ICdjaGFyYWN0ZXJzJyA6ICdjaGFyYWN0ZXInXG4gICAgfSBsZWZ0LmBcbiAgfVxuICByZXR1cm4gcGFzc3dvcmRNZXNzYWdlXG59XG5cbmV4cG9ydCB7Z2V0UGFzc3dvcmRNZXNzYWdlfVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7Z2V0UGFzc3dvcmRNZXNzYWdlfSBmcm9tICcuLi9TaGFyZWQvUGFzc3dvcmQnXG5cbi8qIGdsb2JhbCAkICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ251cCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIHN0YXR1czogJ2Zvcm0nLFxuICAgICAgc2hvd1Bhc3N3b3JkOiBmYWxzZSxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGNoZWNrUGFzc3dvcmQ6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgZW1haWxFcnJvcjogZmFsc2UsXG4gICAgICB0b2dnbGVTaG93OiBmYWxzZSxcbiAgICAgIGFsbG93U2F2ZTogZmFsc2VcbiAgICB9XG4gICAgdGhpcy50b2dnbGVTaG93ID0gdGhpcy50b2dnbGVTaG93LmJpbmQodGhpcylcbiAgICB0aGlzLmNyZWF0ZUFjY291bnQgPSB0aGlzLmNyZWF0ZUFjY291bnQuYmluZCh0aGlzKVxuICAgIHRoaXMuY29tcGFyZVBhc3N3b3JkID0gdGhpcy5jb21wYXJlUGFzc3dvcmQuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hlY2tFbWFpbCA9IHRoaXMuY2hlY2tFbWFpbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRFbWFpbE1lc3NhZ2UgPSB0aGlzLmdldEVtYWlsTWVzc2FnZS5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVQYXNzd29yZCA9IHRoaXMudXBkYXRlUGFzc3dvcmQuYmluZCh0aGlzKVxuICAgIHRoaXMudXBkYXRlQ2hlY2tQYXNzd29yZCA9IHRoaXMudXBkYXRlQ2hlY2tQYXNzd29yZC5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVFbWFpbCA9IHRoaXMudXBkYXRlRW1haWwuYmluZCh0aGlzKVxuICB9XG5cbiAgdG9nZ2xlU2hvdygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvZ2dsZVNob3c6ICF0aGlzLnN0YXRlLnRvZ2dsZVNob3dcbiAgICB9KVxuICB9XG5cbiAgY2hlY2tFbWFpbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsRXJyb3I6ICF0aGlzLmVtYWlsRm9ybWF0Q29ycmVjdCgpXG4gICAgfSlcbiAgfVxuXG4gIGVtYWlsRm9ybWF0Q29ycmVjdCgpIHtcbiAgICBjb25zdCBleHByZXNzaW9uID0gL1xcUytAXFxTKy9cbiAgICByZXR1cm4gZXhwcmVzc2lvbi50ZXN0KFN0cmluZyh0aGlzLnN0YXRlLmVtYWlsKS50b0xvd2VyQ2FzZSgpKVxuICB9XG5cbiAgZ2V0RW1haWxNZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MgYWJvdmUnXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmVtYWlsRXJyb3IpIHtcbiAgICAgIHJldHVybiAnVGhpcyBlbWFpbCBkb2VzIG5vdCBhcHBlYXIgY29ycmVjdC4nXG4gICAgfVxuICB9XG5cbiAgaXNCYWRBY2NvdW50KCkge1xuICAgIGNvbnN0IHtwYXNzd29yZCwgZW1haWwsIGNoZWNrUGFzc3dvcmR9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICAhdGhpcy5lbWFpbEZvcm1hdENvcnJlY3QoKSB8fFxuICAgICAgZW1haWwubGVuZ3RoID09PSAwIHx8XG4gICAgICBwYXNzd29yZC5sZW5ndGggPCA4IHx8XG4gICAgICBwYXNzd29yZCAhPT0gY2hlY2tQYXNzd29yZCB8fFxuICAgICAgcGFzc3dvcmQuc2VhcmNoKC9bXmEtel0vKSA9PT0gLTFcbiAgICApXG4gIH1cblxuICBzYXZlKCkge1xuICAgIGlmICh0aGlzLmlzQmFkQWNjb3VudCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy4vY29uZmVyZW5jZS9Vc2VyL1Zpc2l0b3IvJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgICB9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzOiAnc3VjY2VzcycsIGVycm9yOiAnJ30pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzOiAnZXJyb3InLCBlcnJvcjogZGF0YS5lcnJvcn0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0dXM6ICdlcnJvcid9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVBY2NvdW50KCkge1xuICAgIGlmICh0aGlzLmlzQmFkQWNjb3VudCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy4vY29uZmVyZW5jZS9Vc2VyL1Zpc2l0b3IvY2hlY2tFbWFpbCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsXG4gICAgICB9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgIGlmICghZGF0YS5mb3VuZCkge1xuICAgICAgICAgIHRoaXMuc2F2ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzOiAnZHVwbGljYXRlJ30pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0dXM6ICdlcnJvcid9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb21wYXJlUGFzc3dvcmQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT09IHRoaXMuc3RhdGUuY2hlY2tQYXNzd29yZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxsb3dTYXZlOiB0aGlzLnN0YXRlLmVtYWlsLmxlbmd0aCA+IDB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHthbGxvd1NhdmU6IGZhbHNlfSlcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYXNzd29yZChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSwgdGhpcy5jb21wYXJlUGFzc3dvcmQpXG4gIH1cblxuICB1cGRhdGVDaGVja1Bhc3N3b3JkKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjaGVja1Bhc3N3b3JkOiBlLnRhcmdldC52YWx1ZX0sIHRoaXMuY29tcGFyZVBhc3N3b3JkKVxuICB9XG5cbiAgdXBkYXRlRW1haWwoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2VtYWlsOiBlLnRhcmdldC52YWx1ZX0sIHRoaXMuY2hlY2tFbWFpbClcbiAgfVxuXG4gIGZvcm0oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgIDxoMz5TaWdudXAgZm9yIGEgbmV3IGFjY291bnQ8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICA8bGFiZWw+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxBZGRyZXNzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUVtYWlsfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbFwiPnt0aGlzLmdldEVtYWlsTWVzc2FnZSgpfTwvZGl2PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtdC0zXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS50b2dnbGVTaG93ID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVBhc3N3b3JkfVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1ncm91cC10ZXh0IHBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9nZ2xlU2hvdyA/ICcgYmctc3VjY2VzcyB0ZXh0LXdoaXRlJyA6IG51bGxcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNob3d9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leWVcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGxcIj5cbiAgICAgICAgICAgIHtnZXRQYXNzd29yZE1lc3NhZ2UodGhpcy5zdGF0ZS5wYXNzd29yZCwgdGhpcy5zdGF0ZS5jaGVja1Bhc3N3b3JkKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXQtM1wiPlJlLWVudGVyIHBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPXt0aGlzLnN0YXRlLnRvZ2dsZVNob3cgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxuICAgICAgICAgICAgbmFtZT1cImNoZWNrUGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNoZWNrUGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVDaGVja1Bhc3N3b3JkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuYWxsb3dTYXZlIHx8IHRoaXMuc3RhdGUuZW1haWxFcnJvcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG10LTNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNyZWF0ZUFjY291bnR9PlxuICAgICAgICAgICAgICBDcmVhdGUgbXkgYWNjb3VudFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgZHVwbGljYXRlKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+SG1tbS4uLjwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGFscmVhZHkgaGF2ZSBhbiBhY2NvdW50IHVzaW5nIHRoZSBlbWFpbHsnICd9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnN0YXRlLmVtYWlsfTwvc3Ryb25nPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRGlkIHlvdSBtZWFuIHRvJm5ic3A7XG4gICAgICAgICAgPGEgaHJlZj1cIi4vY29uZmVyZW5jZS9Vc2VyL1Zpc2l0b3IvbG9naW5cIj5sb2cgaW4gaW5zdGVhZD88L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT3IgbWF5YmUgeW91Jm5ic3A7XG4gICAgICAgICAgPGEgaHJlZj1cIi4vY29uZmVyZW5jZS9Vc2VyL1Zpc2l0b3IvZm9yZ290UGFzc3dvcmRcIj5cbiAgICAgICAgICAgIGZvcmdvdCB5b3VyIHBhc3N3b3JkP1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgc3VjY2VzcygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPkFsbW9zdCBkb25lITwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFlvdXIgYWNjb3VudCBoYXMgYmVlbiBjcmVhdGVkLCB3ZSBqdXN0IG5lZWQgdmVyaWZpY2F0aW9uLiBQbGVhc2UgY2hlY2tcbiAgICAgICAgICB5b3VyIGVtYWlsIGFuZCBjbGljayB0aGUgYXV0aG9yaXphdGlvbiBsaW5rIHdlIHNlbnQgeW91LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIE9uY2UgeW91IGhhdmUgZG9uZSB0aGF0LCZuYnNwO1xuICAgICAgICAgIDxhIGhyZWY9XCIuL2NvbmZlcmVuY2UvVXNlci9WaXNpdG9yL2xvZ2luXCI+eW91IGNhbiBsb2cgaW48L2E+LlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBlcnJvcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+RXJyb3I6IHt0aGlzLnN0YXRlLmVycm9yfTwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGEgaHJlZj1cIi4vY29uZmVyZW5jZS9Vc2VyL1Zpc2l0b3Ivc2lnbnVwXCI+R28gYmFjayB0byBzaWdudXA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGdldFN0YXR1c1JlbmRlcigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuc3RhdHVzKSB7XG4gICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybSgpXG5cbiAgICAgIGNhc2UgJ2R1cGxpY2F0ZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmR1cGxpY2F0ZSgpXG5cbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICByZXR1cm4gdGhpcy5zdWNjZXNzKClcblxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcigpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+e3RoaXMuZ2V0U3RhdHVzUmVuZGVyKCl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuU2lnbnVwLnByb3BUeXBlcyA9IHt9XG5cblNpZ251cC5kZWZhdWx0UHJvcHMgPSB7fVxuXG5SZWFjdERPTS5yZW5kZXIoPFNpZ251cCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1NpZ251cCcpKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==