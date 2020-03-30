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
/******/ 		"SessionMatch": 0
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
/******/ 	deferredModules.push(["./javascript/SessionMatch/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/SessionMatch/index.jsx":
/*!*******************************************!*\
  !*** ./javascript/SessionMatch/index.jsx ***!
  \*******************************************/
/*! no exports provided */
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);











/* global $, conferenceId */

var SessionMatchForm =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SessionMatchForm, _Component);

  function SessionMatchForm(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SessionMatchForm);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SessionMatchForm).call(this, props));
    _this.state = {
      student: null,
      bannerId: '',
      bannerUsername: '',
      idError: false,
      message: null,
      sessionFound: false,
      session: null
    };
    _this.submit = _this.submit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.updateId = _this.updateId.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.updateUsername = _this.updateUsername.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.checkBannerId = _this.checkBannerId.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.loginErrorMessage = _this.loginErrorMessage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
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
      var message = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "Your log in session has timed out.\xA0", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "./conference/User/Visitor/login"
      }, "Please log back in to the system."));
      this.setState({
        message: message
      });
    }
  }, {
    key: "getSessionLink",
    value: function getSessionLink() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-success mb-1"
      }, "Session found!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, this.state.student.firstName, " ", this.state.student.lastName, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), this.state.session.eventDateRange), "."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "btn btn-lg btn-primary btn-block",
        href: "./conference/Visitor/Session/".concat(this.state.session.id, "/signup?studentId=").concat(this.state.student.id)
      }, "Click here to sign up!"));
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this2 = this;

      if (this.checkBannerId()) {
        $.ajax({
          url: './conference/Visitor/Student/match',
          data: {
            conferenceId: this.props.conferenceId,
            bannerId: this.state.bannerId,
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
        idError = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "badge badge-danger"
        }, "Banner id should be nine characters in length.");
      }

      var message;

      if (this.state.message) {
        message = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "alert alert-danger"
        }, this.state.message);
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, message, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "card-text"
      }, "Parent Orientation coincides with Student Orientation. Please enter your student's Banner ID and user name below to automatically pick the correct session."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-6 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, "Banner Id")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "bannerId",
        className: "form-control",
        value: this.state.bannerId,
        onChange: this.updateId,
        onBlur: this.checkBannerId,
        placeholder: "e.g. 900000001"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, idError)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, "Banner user name")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "bannerUsername",
        className: "form-control",
        value: this.state.bannerUsername,
        onChange: this.updateUsername,
        placeholder: "e.g. lastnamefm"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mt-3 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.submit
      }, "Search for session")));
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.state.sessionFound ? this.getSessionLink() : this.getForm();
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-8 mx-auto"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "card-title"
      }, "Search for my student's orientation"), content))));
    }
  }]);

  return SessionMatchForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

SessionMatchForm.propTypes = {
  conferenceId: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  sessionId: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};
react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SessionMatchForm, {
  conferenceId: conferenceId
}), document.getElementById('SessionMatchForm'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TZXNzaW9uTWF0Y2gvaW5kZXguanN4Il0sIm5hbWVzIjpbIlNlc3Npb25NYXRjaEZvcm0iLCJwcm9wcyIsInN0YXRlIiwic3R1ZGVudCIsImJhbm5lcklkIiwiYmFubmVyVXNlcm5hbWUiLCJpZEVycm9yIiwibWVzc2FnZSIsInNlc3Npb25Gb3VuZCIsInNlc3Npb24iLCJzdWJtaXQiLCJiaW5kIiwidXBkYXRlSWQiLCJ1cGRhdGVVc2VybmFtZSIsImNoZWNrQmFubmVySWQiLCJsb2dpbkVycm9yTWVzc2FnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaCIsImxlbmd0aCIsInNldFN0YXRlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJldmVudERhdGVSYW5nZSIsImlkIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwiY29uZmVyZW5jZUlkIiwiZGF0YVR5cGUiLCJ0eXBlIiwic3VjY2VzcyIsImVycm9yIiwiY29udGVudCIsImdldFNlc3Npb25MaW5rIiwiZ2V0Rm9ybSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsInNlc3Npb25JZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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VCxDQUNFLDJEQUFDLGdCQUFEO0FBQWtCLGNBQVksRUFBRWQ7QUFBaEMsRUFERixFQUVFZSxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBRkYsRSIsImZpbGUiOiJTZXNzaW9uTWF0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiU2Vzc2lvbk1hdGNoXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9qYXZhc2NyaXB0L1Nlc3Npb25NYXRjaC9pbmRleC5qc3hcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbi8qIGdsb2JhbCAkLCBjb25mZXJlbmNlSWQgKi9cblxuY2xhc3MgU2Vzc2lvbk1hdGNoRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0dWRlbnQ6IG51bGwsXG4gICAgICBiYW5uZXJJZDogJycsXG4gICAgICBiYW5uZXJVc2VybmFtZTogJycsXG4gICAgICBpZEVycm9yOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICBzZXNzaW9uRm91bmQ6IGZhbHNlLFxuICAgICAgc2Vzc2lvbjogbnVsbFxuICAgIH1cbiAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuc3VibWl0LmJpbmQodGhpcylcbiAgICB0aGlzLnVwZGF0ZUlkID0gdGhpcy51cGRhdGVJZC5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVVc2VybmFtZSA9IHRoaXMudXBkYXRlVXNlcm5hbWUuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hlY2tCYW5uZXJJZCA9IHRoaXMuY2hlY2tCYW5uZXJJZC5iaW5kKHRoaXMpXG4gICAgdGhpcy5sb2dpbkVycm9yTWVzc2FnZSA9IHRoaXMubG9naW5FcnJvck1lc3NhZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgdXBkYXRlSWQoZSkge1xuICAgIGxldCBiYW5uZXJJZCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgaWYgKGJhbm5lcklkLnNlYXJjaCgvXlxcZCokLykgIT09IC0xICYmIGJhbm5lcklkLmxlbmd0aCA8IDEwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtiYW5uZXJJZCwgaWRFcnJvcjogZmFsc2V9KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVVzZXJuYW1lKGUpIHtcbiAgICBsZXQgYmFubmVyVXNlcm5hbWUgPSBlLnRhcmdldC52YWx1ZVxuICAgIGlmIChiYW5uZXJVc2VybmFtZS5zZWFyY2goL15cXHcqJC8pICE9PSAtMSAmJiBiYW5uZXJVc2VybmFtZS5sZW5ndGggPCAyMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFubmVyVXNlcm5hbWV9KVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrQmFubmVySWQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYmFubmVySWQubGVuZ3RoICE9PSA5KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpZEVycm9yOiB0cnVlfSlcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGxvZ2luRXJyb3JNZXNzYWdlKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAoXG4gICAgICA8ZGl2PlxuICAgICAgICBZb3VyIGxvZyBpbiBzZXNzaW9uIGhhcyB0aW1lZCBvdXQuJm5ic3A7XG4gICAgICAgIDxhIGhyZWY9XCIuL2NvbmZlcmVuY2UvVXNlci9WaXNpdG9yL2xvZ2luXCI+XG4gICAgICAgICAgUGxlYXNlIGxvZyBiYWNrIGluIHRvIHRoZSBzeXN0ZW0uXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlfSlcbiAgfVxuXG4gIGdldFNlc3Npb25MaW5rKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1zdWNjZXNzIG1iLTFcIj5TZXNzaW9uIGZvdW5kITwvaDQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdHVkZW50LmZpcnN0TmFtZX0ge3RoaXMuc3RhdGUuc3R1ZGVudC5sYXN0TmFtZX1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc2Vzc2lvbi5ldmVudERhdGVSYW5nZX1cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiXG4gICAgICAgICAgaHJlZj17YC4vY29uZmVyZW5jZS9WaXNpdG9yL1Nlc3Npb24vJHt0aGlzLnN0YXRlLnNlc3Npb24uaWR9L3NpZ251cD9zdHVkZW50SWQ9JHt0aGlzLnN0YXRlLnN0dWRlbnQuaWR9YH0+XG4gICAgICAgICAgQ2xpY2sgaGVyZSB0byBzaWduIHVwIVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tCYW5uZXJJZCgpKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcuL2NvbmZlcmVuY2UvVmlzaXRvci9TdHVkZW50L21hdGNoJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNvbmZlcmVuY2VJZDogdGhpcy5wcm9wcy5jb25mZXJlbmNlSWQsXG4gICAgICAgICAgYmFubmVySWQ6IHRoaXMuc3RhdGUuYmFubmVySWQsXG4gICAgICAgICAgYmFubmVyVXNlcm5hbWU6IHRoaXMuc3RhdGUuYmFubmVyVXNlcm5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgdHlwZTogJ2dldCcsXG4gICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0dWRlbnQ6IGRhdGEuc3R1ZGVudH0pXG4gICAgICAgICAgaWYgKGRhdGEuc2Vzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2Vzc2lvbkZvdW5kOiB0cnVlLCBzZXNzaW9uOiBkYXRhLnNlc3Npb259KVxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5tZXNzYWdlID09PSAnbG9naW4gZXhwaXJlZCcpIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5FcnJvck1lc3NhZ2UoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiBkYXRhLm1lc3NhZ2V9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgICdPdXIgc2VydmVyIGhhcyBleHBlcmllbmNlZCBhIHVua25vd24gcHJvYmxlbSB3aXRoIHlvdXIgcmVxdWVzdC4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBnZXRGb3JtKCkge1xuICAgIGxldCBpZEVycm9yXG4gICAgaWYgKHRoaXMuc3RhdGUuaWRFcnJvcikge1xuICAgICAgaWRFcnJvciA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj5cbiAgICAgICAgICBCYW5uZXIgaWQgc2hvdWxkIGJlIG5pbmUgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICBsZXQgbWVzc2FnZVxuICAgIGlmICh0aGlzLnN0YXRlLm1lc3NhZ2UpIHtcbiAgICAgIG1lc3NhZ2UgPSA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9kaXY+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgUGFyZW50IE9yaWVudGF0aW9uIGNvaW5jaWRlcyB3aXRoIFN0dWRlbnQgT3JpZW50YXRpb24uIFBsZWFzZSBlbnRlclxuICAgICAgICAgIHlvdXIgc3R1ZGVudCZhcG9zO3MgQmFubmVyIElEIGFuZCB1c2VyIG5hbWUgYmVsb3cgdG8gYXV0b21hdGljYWxseVxuICAgICAgICAgIHBpY2sgdGhlIGNvcnJlY3Qgc2Vzc2lvbi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgbWItM1wiPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8c3Ryb25nPkJhbm5lciBJZDwvc3Ryb25nPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJiYW5uZXJJZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhbm5lcklkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVJZH1cbiAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmNoZWNrQmFubmVySWR9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiA5MDAwMDAwMDFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXY+e2lkRXJyb3J9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8c3Ryb25nPkJhbm5lciB1c2VyIG5hbWU8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYmFubmVyVXNlcm5hbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYW5uZXJVc2VybmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlVXNlcm5hbWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBsYXN0bmFtZWZtXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0fT5cbiAgICAgICAgICAgIFNlYXJjaCBmb3Igc2Vzc2lvblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5zdGF0ZS5zZXNzaW9uRm91bmRcbiAgICAgID8gdGhpcy5nZXRTZXNzaW9uTGluaygpXG4gICAgICA6IHRoaXMuZ2V0Rm9ybSgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIFNlYXJjaCBmb3IgbXkgc3R1ZGVudCZhcG9zO3Mgb3JpZW50YXRpb25cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuU2Vzc2lvbk1hdGNoRm9ybS5wcm9wVHlwZXMgPSB7XG4gIGNvbmZlcmVuY2VJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2Vzc2lvbklkOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFNlc3Npb25NYXRjaEZvcm0gY29uZmVyZW5jZUlkPXtjb25mZXJlbmNlSWR9IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnU2Vzc2lvbk1hdGNoRm9ybScpXG4pXG4iXSwic291cmNlUm9vdCI6IiJ9