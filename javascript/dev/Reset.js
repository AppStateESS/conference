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
/******/ 		"Reset": 0
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
/******/ 	deferredModules.push(["./javascript/Reset/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Reset/index.jsx":
/*!************************************!*\
  !*** ./javascript/Reset/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reset; });
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




/* global $, visitorId */

var Reset = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Reset, _Component);

  var _super = _createSuper(Reset);

  function Reset(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Reset);

    _this = _super.call(this, props);
    _this.state = {
      error: '',
      showPassword: false,
      password: '',
      checkPassword: '',
      toggleShow: false,
      allowSave: false,
      complete: false
    };
    _this.toggleShow = _this.toggleShow.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.comparePassword = _this.comparePassword.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.updatePassword = _this.updatePassword.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.updateCheckPassword = _this.updateCheckPassword.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.saveNewPassword = _this.saveNewPassword.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Reset, [{
    key: "saveNewPassword",
    value: function saveNewPassword() {
      var _this2 = this;

      if (this.state.allowSave) {
        $.ajax({
          url: 'conference/User/Visitor/' + visitorId + '/password',
          data: {
            password: this.state.password
          },
          dataType: 'json',
          type: 'patch',
          success: function success() {
            _this2.setState({
              complete: true
            });
          },
          error: function error() {}
        });
      }
    }
  }, {
    key: "toggleShow",
    value: function toggleShow() {
      this.setState({
        toggleShow: !this.state.toggleShow
      });
    }
  }, {
    key: "comparePassword",
    value: function comparePassword() {
      if (this.state.password === this.state.checkPassword) {
        this.setState({
          allowSave: true
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
    key: "render",
    value: function render() {
      var content;
      var title;

      if (this.state.complete) {
        title = 'Password change complete';
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "card-text"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          href: "conference/User/Visitor/login"
        }, "You may now log in."));
      } else {
        title = 'Change password';
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "card-text"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
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
        }, "Check password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
          type: this.state.toggleShow ? 'text' : 'password',
          name: "checkPassword",
          className: "form-control",
          value: this.state.checkPassword,
          onChange: this.updateCheckPassword
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "text-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          disabled: !this.state.allowSave,
          className: "btn btn-success mt-3",
          onClick: this.saveNewPassword
        }, "Change password")));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "conference row justify-content-md-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "my-0"
      }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-body"
      }, content))));
    }
  }]);

  return Reset;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Reset, {
  visitorId: visitorId
}), document.getElementById('Reset'));

/***/ }),

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



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9SZXNldC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TaGFyZWQvUGFzc3dvcmQuanMiXSwibmFtZXMiOlsiUmVzZXQiLCJwcm9wcyIsInN0YXRlIiwiZXJyb3IiLCJzaG93UGFzc3dvcmQiLCJwYXNzd29yZCIsImNoZWNrUGFzc3dvcmQiLCJ0b2dnbGVTaG93IiwiYWxsb3dTYXZlIiwiY29tcGxldGUiLCJiaW5kIiwiY29tcGFyZVBhc3N3b3JkIiwidXBkYXRlUGFzc3dvcmQiLCJ1cGRhdGVDaGVja1Bhc3N3b3JkIiwic2F2ZU5ld1Bhc3N3b3JkIiwiJCIsImFqYXgiLCJ1cmwiLCJ2aXNpdG9ySWQiLCJkYXRhIiwiZGF0YVR5cGUiLCJ0eXBlIiwic3VjY2VzcyIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29udGVudCIsInRpdGxlIiwiZ2V0UGFzc3dvcmRNZXNzYWdlIiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGFzc3dvcmRNZXNzYWdlIiwicGFzc3dvcmRMZW5ndGgiLCJsZW5ndGgiLCJzZWFyY2giLCJsZWZ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUN4QixRQUFELEVBQVdDLGFBQVgsRUFBNkI7QUFDdEQsTUFBSTZCLGVBQWUsbUdBQW5CO0FBQ0EsTUFBTUMsY0FBYyxHQUFHL0IsUUFBUSxDQUFDZ0MsTUFBaEM7O0FBQ0EsTUFBSUQsY0FBYyxJQUFJLENBQXRCLEVBQXlCO0FBQ3ZCLFFBQUkvQixRQUFRLENBQUNpQyxNQUFULENBQWdCLFFBQWhCLE1BQThCLENBQUMsQ0FBbkMsRUFBc0M7QUFDcEMsVUFBSWpDLFFBQVEsS0FBS0MsYUFBakIsRUFBZ0M7QUFDOUI2Qix1QkFBZSxHQUFHLDhDQUFsQjtBQUNELE9BRkQsTUFFTztBQUNMQSx1QkFBZSxHQUFHLDBCQUFsQjtBQUNEO0FBQ0YsS0FORCxNQU1PO0FBQ0xBLHFCQUFlLEdBQUcsbUNBQWxCO0FBQ0Q7QUFDRixHQVZELE1BVU8sSUFBSUMsY0FBYyxLQUFLLENBQXZCLEVBQTBCO0FBQy9CLFFBQU1HLElBQUksR0FBRyxJQUFJSCxjQUFqQjtBQUNBRCxtQkFBZSxrQkFBV0ksSUFBWCxjQUNiQSxJQUFJLEdBQUcsQ0FBUCxHQUFXLFlBQVgsR0FBMEIsV0FEYixXQUFmO0FBR0Q7O0FBQ0QsU0FBT0osZUFBUDtBQUNELENBcEJEIiwiZmlsZSI6IlJlc2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIlJlc2V0XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9qYXZhc2NyaXB0L1Jlc2V0L2luZGV4LmpzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7Z2V0UGFzc3dvcmRNZXNzYWdlfSBmcm9tICcuLi9TaGFyZWQvUGFzc3dvcmQnXG4vKiBnbG9iYWwgJCwgdmlzaXRvcklkICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6ICcnLFxuICAgICAgc2hvd1Bhc3N3b3JkOiBmYWxzZSxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGNoZWNrUGFzc3dvcmQ6ICcnLFxuICAgICAgdG9nZ2xlU2hvdzogZmFsc2UsXG4gICAgICBhbGxvd1NhdmU6IGZhbHNlLFxuICAgICAgY29tcGxldGU6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMudG9nZ2xlU2hvdyA9IHRoaXMudG9nZ2xlU2hvdy5iaW5kKHRoaXMpXG4gICAgdGhpcy5jb21wYXJlUGFzc3dvcmQgPSB0aGlzLmNvbXBhcmVQYXNzd29yZC5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVQYXNzd29yZCA9IHRoaXMudXBkYXRlUGFzc3dvcmQuYmluZCh0aGlzKVxuICAgIHRoaXMudXBkYXRlQ2hlY2tQYXNzd29yZCA9IHRoaXMudXBkYXRlQ2hlY2tQYXNzd29yZC5iaW5kKHRoaXMpXG4gICAgdGhpcy5zYXZlTmV3UGFzc3dvcmQgPSB0aGlzLnNhdmVOZXdQYXNzd29yZC5iaW5kKHRoaXMpXG4gIH1cblxuICBzYXZlTmV3UGFzc3dvcmQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYWxsb3dTYXZlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICdjb25mZXJlbmNlL1VzZXIvVmlzaXRvci8nICsgdmlzaXRvcklkICsgJy9wYXNzd29yZCcsXG4gICAgICAgIGRhdGE6IHtwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZH0sXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIHR5cGU6ICdwYXRjaCcsXG4gICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb21wbGV0ZTogdHJ1ZX0pXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB0b2dnbGVTaG93KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9nZ2xlU2hvdzogIXRoaXMuc3RhdGUudG9nZ2xlU2hvd1xuICAgIH0pXG4gIH1cblxuICBjb21wYXJlUGFzc3dvcmQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT09IHRoaXMuc3RhdGUuY2hlY2tQYXNzd29yZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxsb3dTYXZlOiB0cnVlfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxsb3dTYXZlOiBmYWxzZX0pXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUGFzc3dvcmQoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkOiBlLnRhcmdldC52YWx1ZX0sIHRoaXMuY29tcGFyZVBhc3N3b3JkKVxuICB9XG5cbiAgdXBkYXRlQ2hlY2tQYXNzd29yZChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tQYXNzd29yZDogZS50YXJnZXQudmFsdWV9LCB0aGlzLmNvbXBhcmVQYXNzd29yZClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29udGVudFxuICAgIGxldCB0aXRsZVxuICAgIGlmICh0aGlzLnN0YXRlLmNvbXBsZXRlKSB7XG4gICAgICB0aXRsZSA9ICdQYXNzd29yZCBjaGFuZ2UgY29tcGxldGUnXG4gICAgICBjb250ZW50ID0gKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiY29uZmVyZW5jZS9Vc2VyL1Zpc2l0b3IvbG9naW5cIj5Zb3UgbWF5IG5vdyBsb2cgaW4uPC9hPlxuICAgICAgICA8L3A+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gJ0NoYW5nZSBwYXNzd29yZCdcbiAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9e3RoaXMuc3RhdGUudG9nZ2xlU2hvdyA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVQYXNzd29yZH1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQtZ3JvdXAtdGV4dCBwb2ludGVyICR7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvZ2dsZVNob3cgPyAnIGJnLXN1Y2Nlc3MgdGV4dC13aGl0ZScgOiBudWxsXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVTaG93fT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXllXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsXCI+XG4gICAgICAgICAgICB7Z2V0UGFzc3dvcmRNZXNzYWdlKHRoaXMuc3RhdGUucGFzc3dvcmQsIHRoaXMuc3RhdGUuY2hlY2tQYXNzd29yZCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm10LTNcIj5DaGVjayBwYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS50b2dnbGVTaG93ID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cbiAgICAgICAgICAgIG5hbWU9XCJjaGVja1Bhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaGVja1Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlQ2hlY2tQYXNzd29yZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmFsbG93U2F2ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG10LTNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmVOZXdQYXNzd29yZH0+XG4gICAgICAgICAgICAgIENoYW5nZSBwYXNzd29yZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25mZXJlbmNlIHJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm15LTBcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj57Y29udGVudH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8UmVzZXQgdmlzaXRvcklkPXt2aXNpdG9ySWR9IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVzZXQnKVxuKVxuIiwiY29uc3QgZ2V0UGFzc3dvcmRNZXNzYWdlID0gKHBhc3N3b3JkLCBjaGVja1Bhc3N3b3JkKSA9PiB7XG4gIGxldCBwYXNzd29yZE1lc3NhZ2UgPSBgUGFzc3dvcmQgc2hvdWxkIGJlIDggY2hhcmFjdGVycyB3aXRoIGEgbm9uLWxldHRlciBjaGFyYWN0ZXIgKGkuZS4gbnVtYmVyLCBwZXJjZW50IHNpZ24sIGV0Yy4pLmBcbiAgY29uc3QgcGFzc3dvcmRMZW5ndGggPSBwYXNzd29yZC5sZW5ndGhcbiAgaWYgKHBhc3N3b3JkTGVuZ3RoID49IDgpIHtcbiAgICBpZiAocGFzc3dvcmQuc2VhcmNoKC9bXmEtel0vKSAhPT0gLTEpIHtcbiAgICAgIGlmIChwYXNzd29yZCAhPT0gY2hlY2tQYXNzd29yZCkge1xuICAgICAgICBwYXNzd29yZE1lc3NhZ2UgPSAnTWFrZSBzdXJlIHlvdXIgY2hlY2sgcGFzc3dvcmQgYmVsb3cgbWF0Y2hlcy4nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXNzd29yZE1lc3NhZ2UgPSAnVGhpcyBwYXNzd29yZCB3aWxsIHdvcmsuJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXNzd29yZE1lc3NhZ2UgPSAnQSBub24tbGV0dGVyIGNoYXJhY3RlciBpcyBuZWVkZWQuJ1xuICAgIH1cbiAgfSBlbHNlIGlmIChwYXNzd29yZExlbmd0aCAhPT0gMCkge1xuICAgIGNvbnN0IGxlZnQgPSA4IC0gcGFzc3dvcmRMZW5ndGhcbiAgICBwYXNzd29yZE1lc3NhZ2UgPSBgT25seSAke2xlZnR9ICR7XG4gICAgICBsZWZ0ID4gMSA/ICdjaGFyYWN0ZXJzJyA6ICdjaGFyYWN0ZXInXG4gICAgfSBsZWZ0LmBcbiAgfVxuICByZXR1cm4gcGFzc3dvcmRNZXNzYWdlXG59XG5cbmV4cG9ydCB7Z2V0UGFzc3dvcmRNZXNzYWdlfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==