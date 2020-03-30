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
/******/ 		"SessionMatchForm": 0
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
/******/ 	deferredModules.push(["./javascript/SessionMatchForm/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/SessionMatchForm/index.jsx":
/*!***********************************************!*\
  !*** ./javascript/SessionMatchForm/index.jsx ***!
  \***********************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);









function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




/* global $, conferenceId */

var SessionMatchForm = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SessionMatchForm, _Component);

  var _super = _createSuper(SessionMatchForm);

  function SessionMatchForm(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SessionMatchForm);

    _this = _super.call(this, props);
    _this.state = {
      student: null,
      bannerId: '',
      bannerUsername: '',
      idError: false,
      message: null,
      sessionFound: false,
      session: null
    };
    _this.messageRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.submit = _this.submit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.updateId = _this.updateId.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.updateUsername = _this.updateUsername.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.checkBannerId = _this.checkBannerId.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.loginErrorMessage = _this.loginErrorMessage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SessionMatchForm, [{
    key: "updateId",
    value: function updateId(e) {
      var bannerId = e.target.value;

      if (bannerId.search(/^\d*$/) !== -1 && bannerId.length < 10) {
        this.setState({
          bannerId: bannerId,
          idError: false
        });
      }
    }
  }, {
    key: "updateUsername",
    value: function updateUsername(e) {
      var bannerUsername = e.target.value;

      if (bannerUsername.search(/^\w*$/) !== -1 && bannerUsername.length < 20) {
        this.setState({
          bannerUsername: bannerUsername
        });
      }
    }
  }, {
    key: "checkBannerId",
    value: function checkBannerId() {
      if (this.state.bannerId.length !== 9) {
        this.setState({
          idError: true
        });
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "loginErrorMessage",
    value: function loginErrorMessage() {
      var message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "Your log in session has timed out.\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "./conference/User/Visitor/login"
      }, "Please log back in to the system."));
      this.setState({
        message: message
      });
    }
  }, {
    key: "getSessionLink",
    value: function getSessionLink() {
      var _this$state = this.state,
          session = _this$state.session,
          student = _this$state.student;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "alert alert-success mb-4"
      }, student.firstName, " ", student.lastName, " is registered for student orientation on", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, session.eventDateFormat), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "btn btn-primary btn-block btn-lg",
        href: "./conference/Visitor/Session/".concat(session.id, "/signup?studentId=").concat(student.id)
      }, "Click to sign up for the corresponding Parent Orientation session!"));
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this2 = this;

      // match banner because adblock
      if (this.checkBannerId()) {
        $.ajax({
          url: './conference/Visitor/Student/match',
          data: {
            conferenceId: this.props.conferenceId,
            matchBannerId: this.state.bannerId,
            bannerUsername: this.state.bannerUsername
          },
          dataType: 'json',
          type: 'get',
          success: function success(data) {
            _this2.setState({
              student: data.student
            });

            if (data.session) {
              _this2.setState({
                sessionFound: true,
                session: data.session
              });
            } else if (data.message === 'login expired') {
              _this2.loginErrorMessage();
            } else {
              _this2.messageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });

              _this2.setState({
                message: data.message
              });
            }
          },
          error: function error() {
            _this2.setState({
              message: 'Our server has experienced a unknown problem with your request.'
            });
          }
        });
      }
    }
  }, {
    key: "getForm",
    value: function getForm() {
      var idError;

      if (this.state.idError) {
        idError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "badge badge-danger"
        }, "Banner id should be nine characters in length.");
      }

      var message;

      if (this.state.message) {
        message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "alert alert-danger"
        }, this.state.message);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, message, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "card-text"
      }, "Parent Orientation coincides with Student Orientation. Please enter your student's Banner ID and user name below to automatically pick the correct session."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "card-text"
      }, "If you do not know where to find your student's banner ID or username, contact the", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "//admissions.appstate.edu",
        target: "_blank",
        rel: "nofollow noreferrer noopener"
      }, "Office Of Admissions"), ".\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("em", null, "Note: please expect to wait at least one hour after student registration to sync orientation schedules.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-6 mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, "Banner Id")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "bannerId",
        className: "form-control",
        value: this.state.bannerId,
        onChange: this.updateId,
        onBlur: this.checkBannerId,
        placeholder: "e.g. 900000001"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, idError)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, "Banner user name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "bannerUsername",
        className: "form-control",
        value: this.state.bannerUsername,
        onChange: this.updateUsername,
        placeholder: "e.g. lastnamefm"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mt-3 text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.submit
      }, "Search for session")));
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.state.sessionFound ? this.getSessionLink() : this.getForm();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "card-title",
        ref: this.messageRef
      }, "Search for my student's orientation"), content));
    }
  }]);

  return SessionMatchForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

SessionMatchForm.propTypes = {
  conferenceId: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  sessionId: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
};
react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SessionMatchForm, {
  conferenceId: conferenceId
}), document.getElementById('SessionMatchForm'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TZXNzaW9uTWF0Y2hGb3JtL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZXNzaW9uTWF0Y2hGb3JtIiwicHJvcHMiLCJzdGF0ZSIsInN0dWRlbnQiLCJiYW5uZXJJZCIsImJhbm5lclVzZXJuYW1lIiwiaWRFcnJvciIsIm1lc3NhZ2UiLCJzZXNzaW9uRm91bmQiLCJzZXNzaW9uIiwibWVzc2FnZVJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwic3VibWl0IiwiYmluZCIsInVwZGF0ZUlkIiwidXBkYXRlVXNlcm5hbWUiLCJjaGVja0Jhbm5lcklkIiwibG9naW5FcnJvck1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2giLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZXZlbnREYXRlRm9ybWF0IiwiaWQiLCIkIiwiYWpheCIsInVybCIsImRhdGEiLCJjb25mZXJlbmNlSWQiLCJtYXRjaEJhbm5lcklkIiwiZGF0YVR5cGUiLCJ0eXBlIiwic3VjY2VzcyIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJlcnJvciIsImNvbnRlbnQiLCJnZXRTZXNzaW9uTGluayIsImdldEZvcm0iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJzZXNzaW9uSWQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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RDs7OzZCQUVRO0FBQ1AsVUFBTThCLE9BQU8sR0FBRyxLQUFLekMsS0FBTCxDQUFXTSxZQUFYLEdBQ1osS0FBS29DLGNBQUwsRUFEWSxHQUVaLEtBQUtDLE9BQUwsRUFGSjtBQUlBLDBCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQTJCLFdBQUcsRUFBRSxLQUFLbkM7QUFBckMsK0NBREYsRUFJR2lDLE9BSkgsQ0FERixDQURGO0FBVUQ7Ozs7RUF4TTRCRywrQzs7QUEyTS9COUMsZ0JBQWdCLENBQUMrQyxTQUFqQixHQUE2QjtBQUMzQmQsY0FBWSxFQUFFZSxpREFBUyxDQUFDQyxNQURHO0FBRTNCQyxXQUFTLEVBQUVGLGlEQUFTLENBQUNDO0FBRk0sQ0FBN0I7QUFLQUUsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNFLDJEQUFDLGdCQUFEO0FBQWtCLGNBQVksRUFBRW5CO0FBQWhDLEVBREYsRUFFRW9CLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FGRixFIiwiZmlsZSI6IlNlc3Npb25NYXRjaEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiU2Vzc2lvbk1hdGNoRm9ybVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vamF2YXNjcmlwdC9TZXNzaW9uTWF0Y2hGb3JtL2luZGV4LmpzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuLyogZ2xvYmFsICQsIGNvbmZlcmVuY2VJZCAqL1xuXG5jbGFzcyBTZXNzaW9uTWF0Y2hGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3R1ZGVudDogbnVsbCxcbiAgICAgIGJhbm5lcklkOiAnJyxcbiAgICAgIGJhbm5lclVzZXJuYW1lOiAnJyxcbiAgICAgIGlkRXJyb3I6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogbnVsbCxcbiAgICAgIHNlc3Npb25Gb3VuZDogZmFsc2UsXG4gICAgICBzZXNzaW9uOiBudWxsXG4gICAgfVxuICAgIHRoaXMubWVzc2FnZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5zdWJtaXQgPSB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVJZCA9IHRoaXMudXBkYXRlSWQuYmluZCh0aGlzKVxuICAgIHRoaXMudXBkYXRlVXNlcm5hbWUgPSB0aGlzLnVwZGF0ZVVzZXJuYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLmNoZWNrQmFubmVySWQgPSB0aGlzLmNoZWNrQmFubmVySWQuYmluZCh0aGlzKVxuICAgIHRoaXMubG9naW5FcnJvck1lc3NhZ2UgPSB0aGlzLmxvZ2luRXJyb3JNZXNzYWdlLmJpbmQodGhpcylcbiAgfVxuXG4gIHVwZGF0ZUlkKGUpIHtcbiAgICBsZXQgYmFubmVySWQgPSBlLnRhcmdldC52YWx1ZVxuICAgIGlmIChiYW5uZXJJZC5zZWFyY2goL15cXGQqJC8pICE9PSAtMSAmJiBiYW5uZXJJZC5sZW5ndGggPCAxMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFubmVySWQsIGlkRXJyb3I6IGZhbHNlfSlcbiAgICB9XG4gIH1cblxuICB1cGRhdGVVc2VybmFtZShlKSB7XG4gICAgbGV0IGJhbm5lclVzZXJuYW1lID0gZS50YXJnZXQudmFsdWVcbiAgICBpZiAoYmFubmVyVXNlcm5hbWUuc2VhcmNoKC9eXFx3KiQvKSAhPT0gLTEgJiYgYmFubmVyVXNlcm5hbWUubGVuZ3RoIDwgMjApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Jhbm5lclVzZXJuYW1lfSlcbiAgICB9XG4gIH1cblxuICBjaGVja0Jhbm5lcklkKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmJhbm5lcklkLmxlbmd0aCAhPT0gOSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aWRFcnJvcjogdHJ1ZX0pXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICBsb2dpbkVycm9yTWVzc2FnZSgpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAgWW91ciBsb2cgaW4gc2Vzc2lvbiBoYXMgdGltZWQgb3V0LiZuYnNwO1xuICAgICAgICA8YSBocmVmPVwiLi9jb25mZXJlbmNlL1VzZXIvVmlzaXRvci9sb2dpblwiPlxuICAgICAgICAgIFBsZWFzZSBsb2cgYmFjayBpbiB0byB0aGUgc3lzdGVtLlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZX0pXG4gIH1cblxuICBnZXRTZXNzaW9uTGluaygpIHtcbiAgICBjb25zdCB7c2Vzc2lvbiwgc3R1ZGVudH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzIG1iLTRcIj5cbiAgICAgICAgICB7c3R1ZGVudC5maXJzdE5hbWV9IHtzdHVkZW50Lmxhc3ROYW1lfSBpcyByZWdpc3RlcmVkIGZvciBzdHVkZW50XG4gICAgICAgICAgb3JpZW50YXRpb24gb25cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8c3Ryb25nPntzZXNzaW9uLmV2ZW50RGF0ZUZvcm1hdH08L3N0cm9uZz4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgYnRuLWxnXCJcbiAgICAgICAgICBocmVmPXtgLi9jb25mZXJlbmNlL1Zpc2l0b3IvU2Vzc2lvbi8ke3Nlc3Npb24uaWR9L3NpZ251cD9zdHVkZW50SWQ9JHtzdHVkZW50LmlkfWB9PlxuICAgICAgICAgIENsaWNrIHRvIHNpZ24gdXAgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFBhcmVudCBPcmllbnRhdGlvbiBzZXNzaW9uIVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgLy8gbWF0Y2ggYmFubmVyIGJlY2F1c2UgYWRibG9ja1xuICAgIGlmICh0aGlzLmNoZWNrQmFubmVySWQoKSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnLi9jb25mZXJlbmNlL1Zpc2l0b3IvU3R1ZGVudC9tYXRjaCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjb25mZXJlbmNlSWQ6IHRoaXMucHJvcHMuY29uZmVyZW5jZUlkLFxuICAgICAgICAgIG1hdGNoQmFubmVySWQ6IHRoaXMuc3RhdGUuYmFubmVySWQsXG4gICAgICAgICAgYmFubmVyVXNlcm5hbWU6IHRoaXMuc3RhdGUuYmFubmVyVXNlcm5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgdHlwZTogJ2dldCcsXG4gICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0dWRlbnQ6IGRhdGEuc3R1ZGVudH0pXG4gICAgICAgICAgaWYgKGRhdGEuc2Vzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2Vzc2lvbkZvdW5kOiB0cnVlLCBzZXNzaW9uOiBkYXRhLnNlc3Npb259KVxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5tZXNzYWdlID09PSAnbG9naW4gZXhwaXJlZCcpIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5FcnJvck1lc3NhZ2UoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgYmxvY2s6ICdzdGFydCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiBkYXRhLm1lc3NhZ2V9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgICdPdXIgc2VydmVyIGhhcyBleHBlcmllbmNlZCBhIHVua25vd24gcHJvYmxlbSB3aXRoIHlvdXIgcmVxdWVzdC4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBnZXRGb3JtKCkge1xuICAgIGxldCBpZEVycm9yXG4gICAgaWYgKHRoaXMuc3RhdGUuaWRFcnJvcikge1xuICAgICAgaWRFcnJvciA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj5cbiAgICAgICAgICBCYW5uZXIgaWQgc2hvdWxkIGJlIG5pbmUgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBsZXQgbWVzc2FnZVxuICAgIGlmICh0aGlzLnN0YXRlLm1lc3NhZ2UpIHtcbiAgICAgIG1lc3NhZ2UgPSA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9kaXY+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgUGFyZW50IE9yaWVudGF0aW9uIGNvaW5jaWRlcyB3aXRoIFN0dWRlbnQgT3JpZW50YXRpb24uIFBsZWFzZSBlbnRlclxuICAgICAgICAgIHlvdXIgc3R1ZGVudCZhcG9zO3MgQmFubmVyIElEIGFuZCB1c2VyIG5hbWUgYmVsb3cgdG8gYXV0b21hdGljYWxseVxuICAgICAgICAgIHBpY2sgdGhlIGNvcnJlY3Qgc2Vzc2lvbi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICBJZiB5b3UgZG8gbm90IGtub3cgd2hlcmUgdG8gZmluZCB5b3VyIHN0dWRlbnQmYXBvcztzIGJhbm5lciBJRCBvclxuICAgICAgICAgIHVzZXJuYW1lLCBjb250YWN0IHRoZXsnICd9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIvL2FkbWlzc2lvbnMuYXBwc3RhdGUuZWR1XCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub3JlZmVycmVyIG5vb3BlbmVyXCI+XG4gICAgICAgICAgICBPZmZpY2UgT2YgQWRtaXNzaW9uc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAuJm5ic3A7XG4gICAgICAgICAgPGVtPlxuICAgICAgICAgICAgTm90ZTogcGxlYXNlIGV4cGVjdCB0byB3YWl0IGF0IGxlYXN0IG9uZSBob3VyIGFmdGVyIHN0dWRlbnRcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbiB0byBzeW5jIG9yaWVudGF0aW9uIHNjaGVkdWxlcy5cbiAgICAgICAgICA8L2VtPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBtYi0zXCI+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxzdHJvbmc+QmFubmVyIElkPC9zdHJvbmc+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImJhbm5lcklkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFubmVySWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlkfVxuICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuY2hlY2tCYW5uZXJJZH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIDkwMDAwMDAwMVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdj57aWRFcnJvcn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxzdHJvbmc+QmFubmVyIHVzZXIgbmFtZTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJiYW5uZXJVc2VybmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhbm5lclVzZXJuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVVc2VybmFtZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIGxhc3RuYW1lZm1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5zdWJtaXR9PlxuICAgICAgICAgICAgU2VhcmNoIGZvciBzZXNzaW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnN0YXRlLnNlc3Npb25Gb3VuZFxuICAgICAgPyB0aGlzLmdldFNlc3Npb25MaW5rKClcbiAgICAgIDogdGhpcy5nZXRGb3JtKClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiIHJlZj17dGhpcy5tZXNzYWdlUmVmfT5cbiAgICAgICAgICAgIFNlYXJjaCBmb3IgbXkgc3R1ZGVudCZhcG9zO3Mgb3JpZW50YXRpb25cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5TZXNzaW9uTWF0Y2hGb3JtLnByb3BUeXBlcyA9IHtcbiAgY29uZmVyZW5jZUlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzZXNzaW9uSWQ6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8U2Vzc2lvbk1hdGNoRm9ybSBjb25mZXJlbmNlSWQ9e2NvbmZlcmVuY2VJZH0gLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdTZXNzaW9uTWF0Y2hGb3JtJylcbilcbiJdLCJzb3VyY2VSb290IjoiIn0=