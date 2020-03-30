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
/******/ 		"Reports": 0
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
/******/ 	deferredModules.push(["./javascript/Reports/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Reports/index.jsx":
/*!**************************************!*\
  !*** ./javascript/Reports/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reports; });
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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);









function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




/* global $ */

var Reports = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Reports, _Component);

  var _super = _createSuper(Reports);

  function Reports(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Reports);

    _this = _super.call(this, props);
    _this.state = {
      conferences: null,
      sessions: null,
      currentConferenceKey: -1,
      currentSessionKey: -1,
      currentConference: {
        title: 'n/a'
      },
      currentSession: {
        title: 'n/a'
      },
      registrationCount: 0
    };
    _this.setConference = _this.setConference.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.setSession = _this.setSession.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Reports, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadConferences();
    }
  }, {
    key: "loadConferences",
    value: function loadConferences() {
      var _this2 = this;

      $.ajax({
        url: 'conference/Admin/Conference',
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          _this2.setState({
            conferences: data.listing
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "loadSessions",
    value: function loadSessions() {
      var _this3 = this;

      if (this.state.currentConference.id === 0) {
        this.setState({
          sessions: null
        });
        return;
      }

      $.ajax({
        url: 'conference/Admin/Session',
        data: {
          conferenceId: this.state.currentConference.id
        },
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          _this3.setState({
            sessions: data.listing,
            currentSession: {
              title: 'n/a'
            }
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "loadRegistrationCount",
    value: function loadRegistrationCount() {
      var _this4 = this;

      $.ajax({
        url: 'conference/Admin/Registration/count',
        data: {
          sessionId: this.state.currentSession.id
        },
        dataType: 'json',
        type: 'get',
        success: function success(data) {
          _this4.setState({
            registrationCount: data.count
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: "setConference",
    value: function setConference(e) {
      var key = parseInt(e.target.value);

      if (key === -1) {
        this.resetConference();
        this.setState({
          currentConferenceKey: key
        });
        return;
      }

      this.setState({
        currentConference: this.state.conferences[key],
        currentConferenceKey: key
      }, this.loadSessions);
    }
  }, {
    key: "resetSession",
    value: function resetSession() {
      this.setState({
        currentSession: {
          title: 'n/a'
        },
        currentSessionKey: -1
      });
    }
  }, {
    key: "resetConference",
    value: function resetConference() {
      this.setState({
        currentConference: {
          title: 'n/a'
        },
        currentConferenceKey: -1
      }, this.resetSession);
    }
  }, {
    key: "setSession",
    value: function setSession(e) {
      var key = parseInt(e.target.value);

      if (key === -1) {
        this.resetSession();
        this.setState({
          currentSessionKey: key
        });
        return;
      }

      this.setState({
        currentSession: this.state.sessions[key],
        currentSessionKey: key
      }, this.loadRegistrationCount);
    }
  }, {
    key: "sessionList",
    value: function sessionList() {
      var sessions = this.state.sessions;

      if (sessions === null) {
        return;
      }

      var sessOptions = sessions.map(function (value, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          key: value.id,
          value: key
        }, value.title, " - ", dayjs__WEBPACK_IMPORTED_MODULE_8___default()(value.eventDate * 1000).format('MMMM D, YYYY'));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        className: "form-control",
        value: this.state.currentSessionKey,
        onChange: this.setSession
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "-1"
      }, "Choose session"), sessOptions)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "pr-2"
      }, this.downloadRegistrationsButton()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, this.downloadPaymentsButton())));
    }
  }, {
    key: "conferenceList",
    value: function conferenceList() {
      var _this$state = this.state,
          conferences = _this$state.conferences,
          currentConferenceKey = _this$state.currentConferenceKey;

      if (conferences === null) {
        return;
      }

      var confOptions = conferences.map(function (value, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          key: value.id,
          value: key
        }, value.title);
      });
      var downloadLink = "conference/Admin/Reports/sessions/?cid=".concat(this.state.currentConference.id);
      var button;

      if (this.state.currentConferenceKey > -1) {
        button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "btn btn-primary",
          href: downloadLink
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "fas fa-download"
        }), "\xA0 Download session summary");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        className: "form-control",
        value: this.state.currentConferenceKey,
        onChange: this.setConference
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "-1"
      }, "Choose a conference"), confOptions)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-6"
      }, button));
    }
  }, {
    key: "downloadPaymentsButton",
    value: function downloadPaymentsButton() {
      if (this.state.currentSession.id === undefined) {
        return;
      }

      if (this.state.registrationCount === 0) {
        return;
      }

      var downloadLink = "conference/Admin/Reports/payments/?sid=".concat(this.state.currentSession.id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "btn btn-primary",
        href: downloadLink
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-download"
      }), "\xA0Download payments");
    }
  }, {
    key: "downloadRegistrationsButton",
    value: function downloadRegistrationsButton() {
      if (this.state.currentSession.id === undefined) {
        return;
      }

      if (this.state.registrationCount === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "No registrations found for this session.");
      }

      var downloadLink = "conference/Admin/Reports/registrations/?sid=".concat(this.state.currentSession.id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "btn btn-primary",
        href: downloadLink
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-download"
      }), "\xA0Download registrations");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          currentSession = _this$state2.currentSession,
          currentConference = _this$state2.currentConference,
          registrationCount = _this$state2.registrationCount;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, "Reports"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mb-5"
      }, this.conferenceList()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mb-5"
      }, this.sessionList()));
    }
  }]);

  return Reports;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Reports, null), document.getElementById('Reports'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9SZXBvcnRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJSZXBvcnRzIiwicHJvcHMiLCJzdGF0ZSIsImNvbmZlcmVuY2VzIiwic2Vzc2lvbnMiLCJjdXJyZW50Q29uZmVyZW5jZUtleSIsImN1cnJlbnRTZXNzaW9uS2V5IiwiY3VycmVudENvbmZlcmVuY2UiLCJ0aXRsZSIsImN1cnJlbnRTZXNzaW9uIiwicmVnaXN0cmF0aW9uQ291bnQiLCJzZXRDb25mZXJlbmNlIiwiYmluZCIsInNldFNlc3Npb24iLCJsb2FkQ29uZmVyZW5jZXMiLCIkIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwidHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwic2V0U3RhdGUiLCJsaXN0aW5nIiwiZXJyb3IiLCJpZCIsImNvbmZlcmVuY2VJZCIsInNlc3Npb25JZCIsImNvdW50IiwiZSIsImtleSIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJyZXNldENvbmZlcmVuY2UiLCJsb2FkU2Vzc2lvbnMiLCJyZXNldFNlc3Npb24iLCJsb2FkUmVnaXN0cmF0aW9uQ291bnQiLCJzZXNzT3B0aW9ucyIsIm1hcCIsImRheWpzIiwiZXZlbnREYXRlIiwiZm9ybWF0IiwiZG93bmxvYWRSZWdpc3RyYXRpb25zQnV0dG9uIiwiZG93bmxvYWRQYXltZW50c0J1dHRvbiIsImNvbmZPcHRpb25zIiwiZG93bmxvYWRMaW5rIiwiYnV0dG9uIiwidW5kZWZpbmVkIiwiY29uZmVyZW5jZUxpc3QiLCJzZXNzaW9uTGlzdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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LGlIQUFQO0FBQ0Q7O0FBQ0QsVUFBTW9DLFlBQVkseURBQWtELEtBQUs1QyxLQUFMLENBQVdPLGNBQVgsQ0FBMEJnQixFQUE1RSxDQUFsQjtBQUNBLDBCQUNFO0FBQUcsaUJBQVMsRUFBQyxpQkFBYjtBQUErQixZQUFJLEVBQUVxQjtBQUFyQyxzQkFDRTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURGLCtCQURGO0FBTUQ7Ozs2QkFFUTtBQUFBLHlCQUN3RCxLQUFLNUMsS0FEN0Q7QUFBQSxVQUNBTyxjQURBLGdCQUNBQSxjQURBO0FBQUEsVUFDZ0JGLGlCQURoQixnQkFDZ0JBLGlCQURoQjtBQUFBLFVBQ21DRyxpQkFEbkMsZ0JBQ21DQSxpQkFEbkM7QUFFUCwwQkFDRSxxRkFDRSxpRkFERixlQUVFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQXVCLEtBQUt1QyxjQUFMLEVBQXZCLENBRkYsZUFHRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUF1QixLQUFLQyxXQUFMLEVBQXZCLENBSEYsQ0FERjtBQU9EOzs7O0VBek5rQ0MsK0M7OztBQTROckNDLGdEQUFRLENBQUNDLE1BQVQsZUFBZ0IsMkRBQUMsT0FBRCxPQUFoQixFQUE2QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQTdCLEUiLCJmaWxlIjoiUmVwb3J0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJSZXBvcnRzXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9qYXZhc2NyaXB0L1JlcG9ydHMvaW5kZXguanN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuXG4vKiBnbG9iYWwgJCAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvcnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29uZmVyZW5jZXM6IG51bGwsXG4gICAgICBzZXNzaW9uczogbnVsbCxcbiAgICAgIGN1cnJlbnRDb25mZXJlbmNlS2V5OiAtMSxcbiAgICAgIGN1cnJlbnRTZXNzaW9uS2V5OiAtMSxcbiAgICAgIGN1cnJlbnRDb25mZXJlbmNlOiB7dGl0bGU6ICduL2EnfSxcbiAgICAgIGN1cnJlbnRTZXNzaW9uOiB7dGl0bGU6ICduL2EnfSxcbiAgICAgIHJlZ2lzdHJhdGlvbkNvdW50OiAwXG4gICAgfVxuICAgIHRoaXMuc2V0Q29uZmVyZW5jZSA9IHRoaXMuc2V0Q29uZmVyZW5jZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRTZXNzaW9uID0gdGhpcy5zZXRTZXNzaW9uLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZENvbmZlcmVuY2VzKClcbiAgfVxuXG4gIGxvYWRDb25mZXJlbmNlcygpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnY29uZmVyZW5jZS9BZG1pbi9Db25mZXJlbmNlJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb25mZXJlbmNlczogZGF0YS5saXN0aW5nfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgbG9hZFNlc3Npb25zKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRDb25mZXJlbmNlLmlkID09PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzZXNzaW9uczogbnVsbH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvQWRtaW4vU2Vzc2lvbicsXG4gICAgICBkYXRhOiB7Y29uZmVyZW5jZUlkOiB0aGlzLnN0YXRlLmN1cnJlbnRDb25mZXJlbmNlLmlkfSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZXNzaW9uczogZGF0YS5saXN0aW5nLCBjdXJyZW50U2Vzc2lvbjoge3RpdGxlOiAnbi9hJ319KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgIH0pXG4gIH1cblxuICBsb2FkUmVnaXN0cmF0aW9uQ291bnQoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvQWRtaW4vUmVnaXN0cmF0aW9uL2NvdW50JyxcbiAgICAgIGRhdGE6IHtzZXNzaW9uSWQ6IHRoaXMuc3RhdGUuY3VycmVudFNlc3Npb24uaWR9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdHJhdGlvbkNvdW50OiBkYXRhLmNvdW50fSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgc2V0Q29uZmVyZW5jZShlKSB7XG4gICAgY29uc3Qga2V5ID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgaWYgKGtleSA9PT0gLTEpIHtcbiAgICAgIHRoaXMucmVzZXRDb25mZXJlbmNlKClcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRDb25mZXJlbmNlS2V5OiBrZXl9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGN1cnJlbnRDb25mZXJlbmNlOiB0aGlzLnN0YXRlLmNvbmZlcmVuY2VzW2tleV0sXG4gICAgICAgIGN1cnJlbnRDb25mZXJlbmNlS2V5OiBrZXlcbiAgICAgIH0sXG4gICAgICB0aGlzLmxvYWRTZXNzaW9uc1xuICAgIClcbiAgfVxuXG4gIHJlc2V0U2Vzc2lvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U2Vzc2lvbjoge3RpdGxlOiAnbi9hJ30sIGN1cnJlbnRTZXNzaW9uS2V5OiAtMX0pXG4gIH1cblxuICByZXNldENvbmZlcmVuY2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgY3VycmVudENvbmZlcmVuY2U6IHt0aXRsZTogJ24vYSd9LFxuICAgICAgICBjdXJyZW50Q29uZmVyZW5jZUtleTogLTFcbiAgICAgIH0sXG4gICAgICB0aGlzLnJlc2V0U2Vzc2lvblxuICAgIClcbiAgfVxuXG4gIHNldFNlc3Npb24oZSkge1xuICAgIGNvbnN0IGtleSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgIGlmIChrZXkgPT09IC0xKSB7XG4gICAgICB0aGlzLnJlc2V0U2Vzc2lvbigpXG4gICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U2Vzc2lvbktleToga2V5fSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge2N1cnJlbnRTZXNzaW9uOiB0aGlzLnN0YXRlLnNlc3Npb25zW2tleV0sIGN1cnJlbnRTZXNzaW9uS2V5OiBrZXl9LFxuICAgICAgdGhpcy5sb2FkUmVnaXN0cmF0aW9uQ291bnRcbiAgICApXG4gIH1cblxuICBzZXNzaW9uTGlzdCgpIHtcbiAgICBjb25zdCB7c2Vzc2lvbnN9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChzZXNzaW9ucyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHNlc3NPcHRpb25zID0gc2Vzc2lvbnMubWFwKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8b3B0aW9uIGtleT17dmFsdWUuaWR9IHZhbHVlPXtrZXl9PlxuICAgICAgICAgIHt2YWx1ZS50aXRsZX0gLSB7ZGF5anModmFsdWUuZXZlbnREYXRlICogMTAwMCkuZm9ybWF0KCdNTU1NIEQsIFlZWVknKX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jdXJyZW50U2Vzc2lvbktleX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNldFNlc3Npb259PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIi0xXCI+Q2hvb3NlIHNlc3Npb248L29wdGlvbj5cbiAgICAgICAgICAgIHtzZXNzT3B0aW9uc31cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwci0yXCI+e3RoaXMuZG93bmxvYWRSZWdpc3RyYXRpb25zQnV0dG9uKCl9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPnt0aGlzLmRvd25sb2FkUGF5bWVudHNCdXR0b24oKX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29uZmVyZW5jZUxpc3QoKSB7XG4gICAgY29uc3Qge2NvbmZlcmVuY2VzLCBjdXJyZW50Q29uZmVyZW5jZUtleX0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKGNvbmZlcmVuY2VzID09PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb25mT3B0aW9ucyA9IGNvbmZlcmVuY2VzLm1hcCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPG9wdGlvbiBrZXk9e3ZhbHVlLmlkfSB2YWx1ZT17a2V5fT5cbiAgICAgICAgICB7dmFsdWUudGl0bGV9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICBjb25zdCBkb3dubG9hZExpbmsgPSBgY29uZmVyZW5jZS9BZG1pbi9SZXBvcnRzL3Nlc3Npb25zLz9jaWQ9JHt0aGlzLnN0YXRlLmN1cnJlbnRDb25mZXJlbmNlLmlkfWBcbiAgICBsZXQgYnV0dG9uXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudENvbmZlcmVuY2VLZXkgPiAtMSkge1xuICAgICAgYnV0dG9uID0gKFxuICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBocmVmPXtkb3dubG9hZExpbmt9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kb3dubG9hZFwiPjwvaT4mbmJzcDsgRG93bmxvYWQgc2Vzc2lvbiBzdW1tYXJ5XG4gICAgICAgIDwvYT5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jdXJyZW50Q29uZmVyZW5jZUtleX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNldENvbmZlcmVuY2V9PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIi0xXCI+Q2hvb3NlIGEgY29uZmVyZW5jZTwvb3B0aW9uPlxuICAgICAgICAgICAge2NvbmZPcHRpb25zfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPntidXR0b259PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBkb3dubG9hZFBheW1lbnRzQnV0dG9uKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTZXNzaW9uLmlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25Db3VudCA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGBjb25mZXJlbmNlL0FkbWluL1JlcG9ydHMvcGF5bWVudHMvP3NpZD0ke3RoaXMuc3RhdGUuY3VycmVudFNlc3Npb24uaWR9YFxuICAgIHJldHVybiAoXG4gICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBocmVmPXtkb3dubG9hZExpbmt9PlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZG93bmxvYWRcIiAvPlxuICAgICAgICAmbmJzcDtEb3dubG9hZCBwYXltZW50c1xuICAgICAgPC9hPlxuICAgIClcbiAgfVxuXG4gIGRvd25sb2FkUmVnaXN0cmF0aW9uc0J1dHRvbigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U2Vzc2lvbi5pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUucmVnaXN0cmF0aW9uQ291bnQgPT09IDApIHtcbiAgICAgIHJldHVybiA8cD5ObyByZWdpc3RyYXRpb25zIGZvdW5kIGZvciB0aGlzIHNlc3Npb24uPC9wPlxuICAgIH1cbiAgICBjb25zdCBkb3dubG9hZExpbmsgPSBgY29uZmVyZW5jZS9BZG1pbi9SZXBvcnRzL3JlZ2lzdHJhdGlvbnMvP3NpZD0ke3RoaXMuc3RhdGUuY3VycmVudFNlc3Npb24uaWR9YFxuICAgIHJldHVybiAoXG4gICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBocmVmPXtkb3dubG9hZExpbmt9PlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZG93bmxvYWRcIiAvPlxuICAgICAgICAmbmJzcDtEb3dubG9hZCByZWdpc3RyYXRpb25zXG4gICAgICA8L2E+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtjdXJyZW50U2Vzc2lvbiwgY3VycmVudENvbmZlcmVuY2UsIHJlZ2lzdHJhdGlvbkNvdW50fSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlJlcG9ydHM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj57dGhpcy5jb25mZXJlbmNlTGlzdCgpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj57dGhpcy5zZXNzaW9uTGlzdCgpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8UmVwb3J0cyAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JlcG9ydHMnKSlcbiJdLCJzb3VyY2VSb290IjoiIn0=