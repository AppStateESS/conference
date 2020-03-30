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
/******/ 		"Onsite": 0
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
/******/ 	deferredModules.push(["./javascript/Onsite/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Onsite/ChooseParent.js":
/*!*******************************************!*\
  !*** ./javascript/Onsite/ChooseParent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleParent */ "./javascript/Onsite/SingleParent.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);






var ChooseParent = function ChooseParent(_ref) {
  var setParent = _ref.setParent,
      parents = _ref.parents;

  if (parents.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleParent__WEBPACK_IMPORTED_MODULE_1__["default"], {
      "continue": function _continue() {
        return setParent(-1);
      }
    });
  }

  var parentChoices = parents.map(function (value, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: value.ID
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-lg btn-primary btn-block mb-3",
      onClick: function onClick() {
        return setParent(key);
      }
    }, value.firstName, " ", value.lastName));
  });
  parentChoices.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "not-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-lg btn-info btn-block mb-3",
    onClick: function onClick() {
      return setParent(-1);
    }
  }, "Not registering as a parent")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Who is registering?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, parentChoices));
};

ChooseParent.propTypes = {
  setStage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  setVisitor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  student: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  parents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (ChooseParent);

/***/ }),

/***/ "./javascript/Onsite/CreateAccount.js":
/*!********************************************!*\
  !*** ./javascript/Onsite/CreateAccount.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);





/* global $ */

var CreateAccount = function CreateAccount(_ref) {
  var setStage = _ref.setStage,
      setVisitor = _ref.setVisitor;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var saveAccount = function saveAccount() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailInUse();
    } else {
      setError('Email address incorrectly formatted.');
    }
  };

  var createQuickVisitor = function createQuickVisitor() {
    $.ajax({
      url: 'conference/User/Onsite/createQuick',
      data: {
        email: email
      },
      dataType: 'json',
      type: 'post',
      success: function success(data) {
        setVisitor(data.visitor);
        setStage('startRegistration');
      },
      error: function error() {}
    });
  };

  var emailInUse = function emailInUse() {
    $.ajax({
      url: 'conference/User/Onsite/checkEmail',
      data: {
        email: email
      },
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        if (data.found) {
          setError('This email address is already in use.');
        } else {
          createQuickVisitor();
        }
      },
      error: function error() {}
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-3"
  }, "Your email address:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "form-control",
    type: "text",
    value: email,
    name: "email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  }), error.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "badge badge-danger"
  }, error) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-success mr-3",
    onClick: function onClick() {
      saveAccount();
    }
  }, "Create my account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-info",
    onClick: function onClick() {
      setStage('chooseParent');
    }
  }, "Back to parent selection"));
};

CreateAccount.propTypes = {
  setStage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  setVisitor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CreateAccount);

/***/ }),

/***/ "./javascript/Onsite/Login.js":
/*!************************************!*\
  !*** ./javascript/Onsite/Login.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);






var Login = function Login(_ref) {
  var setStage = _ref.setStage,
      email = _ref.email,
      hasRegistration = _ref.hasRegistration;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var login = function login() {
    $.ajax({
      url: 'conference/User/Visitor/login',
      data: {
        email: email,
        password: password
      },
      dataType: 'json',
      type: 'post',
      success: function success(data) {
        if (data.success === true) {
          setStage('startRegistration');
        } else {
          setError( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "badge badge-danger"
          }, "Password not accepted."));
        }
      },
      error: function error() {}
    });
  };

  var registrationInfo;

  if (hasRegistration.id > 0) {
    if (hasRegistration.completed === 0) {
      registrationInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You have an incomplete registration. You may log in below if you need to make changes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        value: password,
        onChange: function onChange(e) {
          setPassword(e.target.value);
        }
      }), error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "btn btn-primary btn-block",
        onClick: login
      }, "Log in as ", email)));
    } else {
      registrationInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You have a completed registration for this event. You are done!"));
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "This email address (", email, ") associated with this parent already has an account."), registrationInfo, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-outline-primary btn-block",
    onClick: function onClick() {
      return setStage('chooseParent');
    }
  }, "Choose a different parent (if available)"));
};

Login.propTypes = {
  setStage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  email: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  visitor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  hasRegistration: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./javascript/Onsite/SingleParent.js":
/*!*******************************************!*\
  !*** ./javascript/Onsite/SingleParent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var SingleParent = function SingleParent(_ref) {
  var createAccount = _ref.createAccount;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Create an account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "No parent account is associated currently with this student."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-success",
    onClick: createAccount
  }, "Continue to create a quick account.")));
};

SingleParent.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SingleParent);

/***/ }),

/***/ "./javascript/Onsite/StartRegistration.js":
/*!************************************************!*\
  !*** ./javascript/Onsite/StartRegistration.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var StartRegistration = function StartRegistration(_ref) {
  var sessionId = _ref.sessionId,
      studentId = _ref.studentId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You are ready to start registration."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-primary btn-block",
    href: "conference/Visitor/Session/".concat(sessionId, "/signup/?studentId=").concat(studentId)
  }, "Go to registration")));
};

StartRegistration.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (StartRegistration);

/***/ }),

/***/ "./javascript/Onsite/StudentInfo.js":
/*!******************************************!*\
  !*** ./javascript/Onsite/StudentInfo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var StudentInfo = function StudentInfo(_ref) {
  var student = _ref.student;

  if (student.id === 0) {
    return null;
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "for ", student.firstName, " ", student.lastName);
  }
};

StudentInfo.propTypes = {
  student: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (StudentInfo);

/***/ }),

/***/ "./javascript/Onsite/StudentSignin.js":
/*!********************************************!*\
  !*** ./javascript/Onsite/StudentSignin.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);





/* global $ */

var StudentSignin = function StudentSignin(_ref) {
  var setStage = _ref.setStage,
      setStudent = _ref.setStudent,
      student = _ref.student,
      setParents = _ref.setParents;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('900003340'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      bannerId = _useState2[0],
      setBannerId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('mcnaneym'),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      bannerUsername = _useState4[0],
      setBannerUsername = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      message = _useState6[0],
      setMessage = _useState6[1];

  var pullStudent = function pullStudent() {
    $.ajax({
      url: 'conference/User/Onsite/search',
      data: {
        checkBannerId: bannerId,
        bannerUsername: bannerUsername
      },
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        if (data.success) {
          setStudent(data.student);
          setParents(data.parents);
          setStage('chooseParent');
        } else {
          setMessage(data.message);
        }
      },
      error: function error() {}
    });
  };

  var bannerInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();

  var getMessage = function getMessage() {
    if (message.length > 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "alert alert-danger"
      }, message);
    } else {
      return null;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    bannerInput.current.focus();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-body"
  }, getMessage(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "bannerId"
  }, "Student Banner ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    id: "bannerId",
    className: "form-control",
    placeholder: "e.g. 900000000",
    ref: bannerInput,
    name: "BannerID",
    value: bannerId,
    onChange: function onChange(e) {
      return setBannerId(e.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "bannerUsername"
  }, "Student username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "bannerUsername",
    placeholder: "e.g. lastnamefm",
    value: bannerUsername,
    onChange: function onChange(e) {
      return setBannerUsername(e.target.value);
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-primary btn-block",
    onClick: pullStudent
  }, "Search for my student"));
};

StudentSignin.propTypes = {
  setStage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (StudentSignin);

/***/ }),

/***/ "./javascript/Onsite/index.js":
/*!************************************!*\
  !*** ./javascript/Onsite/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StartRegistration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StartRegistration */ "./javascript/Onsite/StartRegistration.js");
/* harmony import */ var _CreateAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateAccount */ "./javascript/Onsite/CreateAccount.js");
/* harmony import */ var _StudentSignin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StudentSignin */ "./javascript/Onsite/StudentSignin.js");
/* harmony import */ var _ChooseParent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChooseParent */ "./javascript/Onsite/ChooseParent.js");
/* harmony import */ var _StudentInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StudentInfo */ "./javascript/Onsite/StudentInfo.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Login */ "./javascript/Onsite/Login.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");













/* global $, sessionId */

var Onsite = function Onsite() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('studentSignin'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      stage = _useState2[0],
      setStage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    id: 0
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      student = _useState4[0],
      setStudent = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      visitor = _useState6[0],
      setVisitor = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      parents = _useState8[0],
      setParents = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    id: 0
  }),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState11, 2),
      hasRegistration = _useState12[0],
      setHasRegistration = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Loading...'),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState13, 2),
      loadingMessage = _useState14[0],
      setLoadingMessage = _useState14[1]; // const emptyVisitor = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: ''
  // }


  var resetTimeout;

  var resetTimer = function resetTimer() {
    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(function () {
      resetLoading();
      setStudent({
        id: 0
      });
      setVisitor({});
      setParents([]);
      logout();
      setStage('studentSignin');
    }, 8000);
  };

  var logout = function logout() {
    $.ajax({
      url: 'conference/Visitor/Onsite/Logout',
      dataType: 'json',
      type: 'get'
    });
  };

  var resetLoading = function resetLoading() {
    setLoading(false);
    setLoadingMessage('Loading...');
  };

  var setParent = function setParent(parentKey) {
    var _parent$prefFirstName, _parent$streetLine, _parent$streetLine2, _parent$city, _parent$stateCode, _parent$zip, _ref, _parent$phoneArea;

    if (parentKey == -1) {
      setStage('createAccount');
      return;
    }

    setLoading(true);
    setLoadingMessage('Creating new account');
    var parent = parents[parentKey];
    var newVisitor = {
      firstName: (_parent$prefFirstName = parent.prefFirstName) !== null && _parent$prefFirstName !== void 0 ? _parent$prefFirstName : parent.firstName,
      lastName: parent.lastName,
      email: parent.emailAddress,
      address1: (_parent$streetLine = parent.streetLine1) !== null && _parent$streetLine !== void 0 ? _parent$streetLine : '',
      address2: (_parent$streetLine2 = parent.streetLine2) !== null && _parent$streetLine2 !== void 0 ? _parent$streetLine2 : '',
      city: (_parent$city = parent.city) !== null && _parent$city !== void 0 ? _parent$city : '',
      state: (_parent$stateCode = parent.stateCode) !== null && _parent$stateCode !== void 0 ? _parent$stateCode : '',
      zip: (_parent$zip = parent.zip) !== null && _parent$zip !== void 0 ? _parent$zip : '',
      phone: (_ref = ((_parent$phoneArea = parent.phoneArea) !== null && _parent$phoneArea !== void 0 ? _parent$phoneArea : '') + parent.phoneNumber) !== null && _ref !== void 0 ? _ref : '',
      studentId: student.id
    };
    $.ajax({
      url: 'conference/User/Onsite/createVisitor',
      data: newVisitor,
      dataType: 'json',
      type: 'post',
      success: function success(data) {
        setVisitor(data.visitor);

        if (data['found']) {
          setStage('login');
          setHasRegistration(data.hasRegistration);
        } else {
          setStage('startRegistration');
        }

        resetLoading();
      },
      error: function error() {
        setStage('error');
        resetTimer();
      }
    });
  };

  var getStage = function getStage() {
    switch (stage) {
      case 'studentSignin':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StudentSignin__WEBPACK_IMPORTED_MODULE_5__["default"], {
          setStage: setStage,
          setStudent: setStudent,
          setParents: setParents,
          student: student
        });

      case 'createAccount':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CreateAccount__WEBPACK_IMPORTED_MODULE_4__["default"], {
          setStage: setStage,
          setVisitor: setVisitor
        });

      case 'chooseParent':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ChooseParent__WEBPACK_IMPORTED_MODULE_6__["default"], {
          setParent: setParent,
          parents: parents
        });

      case 'login':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_8__["default"], {
          setStage: setStage,
          email: visitor.email,
          hasRegistration: hasRegistration
        });

      case 'startRegistration':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StartRegistration__WEBPACK_IMPORTED_MODULE_3__["default"], {
          sessionId: sessionId,
          studentId: student.id
        });

      case 'error':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "alert alert-danger mt-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Sorry"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "We experienced an error when trying to process your information.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "Please speak with a representative for help."));
    }
  };

  var loadingScreen;

  if (loading) {
    loadingScreen = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "text-center lead pt-5 pb-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSpinner"],
      spin: true
    }), "\xA0", loadingMessage);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-6 col-md-8 mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "mb-0"
  }, "Onsite Registration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StudentInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    student: student
  }), loadingScreen, getStage())))));
};

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Onsite, null), document.getElementById('Onsite'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9PbnNpdGUvQ2hvb3NlUGFyZW50LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvT25zaXRlL0NyZWF0ZUFjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9PbnNpdGUvTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9PbnNpdGUvU2luZ2xlUGFyZW50LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvT25zaXRlL1N0YXJ0UmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvT25zaXRlL1N0dWRlbnRJbmZvLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvT25zaXRlL1N0dWRlbnRTaWduaW4uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9PbnNpdGUvaW5kZXguanMiXSwibmFtZXMiOlsiQ2hvb3NlUGFyZW50Iiwic2V0UGFyZW50IiwicGFyZW50cyIsImxlbmd0aCIsInBhcmVudENob2ljZXMiLCJtYXAiLCJ2YWx1ZSIsImtleSIsIklEIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwdXNoIiwicHJvcFR5cGVzIiwic2V0U3RhZ2UiLCJQcm9wVHlwZXMiLCJmdW5jIiwic2V0VmlzaXRvciIsInN0dWRlbnQiLCJvYmplY3QiLCJhcnJheSIsIkNyZWF0ZUFjY291bnQiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJlcnJvciIsInNldEVycm9yIiwic2F2ZUFjY291bnQiLCJ0ZXN0IiwiZW1haWxJblVzZSIsImNyZWF0ZVF1aWNrVmlzaXRvciIsIiQiLCJhamF4IiwidXJsIiwiZGF0YSIsImRhdGFUeXBlIiwidHlwZSIsInN1Y2Nlc3MiLCJ2aXNpdG9yIiwiZm91bmQiLCJlIiwidGFyZ2V0IiwiTG9naW4iLCJoYXNSZWdpc3RyYXRpb24iLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibG9naW4iLCJyZWdpc3RyYXRpb25JbmZvIiwiaWQiLCJjb21wbGV0ZWQiLCJzdHJpbmciLCJTaW5nbGVQYXJlbnQiLCJjcmVhdGVBY2NvdW50IiwiU3RhcnRSZWdpc3RyYXRpb24iLCJzZXNzaW9uSWQiLCJzdHVkZW50SWQiLCJTdHVkZW50SW5mbyIsIlN0dWRlbnRTaWduaW4iLCJzZXRTdHVkZW50Iiwic2V0UGFyZW50cyIsImJhbm5lcklkIiwic2V0QmFubmVySWQiLCJiYW5uZXJVc2VybmFtZSIsInNldEJhbm5lclVzZXJuYW1lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJwdWxsU3R1ZGVudCIsImNoZWNrQmFubmVySWQiLCJiYW5uZXJJbnB1dCIsImNyZWF0ZVJlZiIsImdldE1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZm9jdXMiLCJPbnNpdGUiLCJzdGFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0SGFzUmVnaXN0cmF0aW9uIiwibG9hZGluZ01lc3NhZ2UiLCJzZXRMb2FkaW5nTWVzc2FnZSIsInJlc2V0VGltZW91dCIsInJlc2V0VGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVzZXRMb2FkaW5nIiwibG9nb3V0IiwicGFyZW50S2V5IiwicGFyZW50IiwibmV3VmlzaXRvciIsInByZWZGaXJzdE5hbWUiLCJlbWFpbEFkZHJlc3MiLCJhZGRyZXNzMSIsInN0cmVldExpbmUxIiwiYWRkcmVzczIiLCJzdHJlZXRMaW5lMiIsImNpdHkiLCJzdGF0ZSIsInN0YXRlQ29kZSIsInppcCIsInBob25lIiwicGhvbmVBcmVhIiwicGhvbmVOdW1iZXIiLCJnZXRTdGFnZSIsImxvYWRpbmdTY3JlZW4iLCJmYVNwaW5uZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7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Q0FERjtBQWhDSjtBQTJDRCxHQTVDRDs7QUE4Q0EsTUFBSXdELGFBQUo7O0FBQ0EsTUFBSTVCLE9BQUosRUFBYTtBQUNYNEIsaUJBQWEsZ0JBQ1g7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDRSwyREFBQyw4RUFBRDtBQUFpQixVQUFJLEVBQUVDLDRFQUF2QjtBQUFrQyxVQUFJO0FBQXRDLE1BREYsVUFFUzFCLGNBRlQsQ0FERjtBQU1EOztBQUVELHNCQUNFLHFGQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCwyQkFERixlQUVFLDJEQUFDLG9EQUFEO0FBQWEsV0FBTyxFQUFFN0Q7QUFBdEIsSUFGRixFQUdHc0YsYUFISCxFQUlHRCxRQUFRLEVBSlgsQ0FERixDQURGLENBREYsQ0FERixDQURGO0FBZ0JELENBN0pEOztBQStKQUcsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUFnQiwyREFBQyxNQUFELE9BQWhCLEVBQTRCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBNUIsRSIsImZpbGUiOiJPbnNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiT25zaXRlXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9qYXZhc2NyaXB0L09uc2l0ZS9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBTaW5nbGVQYXJlbnQgZnJvbSAnLi9TaW5nbGVQYXJlbnQnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IENob29zZVBhcmVudCA9ICh7c2V0UGFyZW50LCBwYXJlbnRzfSkgPT4ge1xuICBpZiAocGFyZW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPFNpbmdsZVBhcmVudCBjb250aW51ZT17KCkgPT4gc2V0UGFyZW50KC0xKX0gLz5cbiAgfVxuXG4gIGNvbnN0IHBhcmVudENob2ljZXMgPSBwYXJlbnRzLm1hcCgodmFsdWUsIGtleSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17dmFsdWUuSUR9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2sgbWItM1wiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFyZW50KGtleSl9PlxuICAgICAgICAgIHt2YWx1ZS5maXJzdE5hbWV9IHt2YWx1ZS5sYXN0TmFtZX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0pXG4gIHBhcmVudENob2ljZXMucHVzaChcbiAgICA8ZGl2IGtleT1cIm5vdC1wYXJlbnRcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4taW5mbyBidG4tYmxvY2sgbWItM1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhcmVudCgtMSl9PlxuICAgICAgICBOb3QgcmVnaXN0ZXJpbmcgYXMgYSBwYXJlbnRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+V2hvIGlzIHJlZ2lzdGVyaW5nPzwvcD5cbiAgICAgIDxkaXY+e3BhcmVudENob2ljZXN9PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuQ2hvb3NlUGFyZW50LnByb3BUeXBlcyA9IHtcbiAgc2V0U3RhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBzZXRWaXNpdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgc3R1ZGVudDogUHJvcFR5cGVzLm9iamVjdCxcbiAgcGFyZW50czogUHJvcFR5cGVzLmFycmF5XG59XG5cbmV4cG9ydCBkZWZhdWx0IENob29zZVBhcmVudFxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbi8qIGdsb2JhbCAkICovXG5cbmNvbnN0IENyZWF0ZUFjY291bnQgPSAoe3NldFN0YWdlLCBzZXRWaXNpdG9yfSkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IHNhdmVBY2NvdW50ID0gKCkgPT4ge1xuICAgIGlmICgvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLnRlc3QoZW1haWwpKSB7XG4gICAgICBlbWFpbEluVXNlKClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoJ0VtYWlsIGFkZHJlc3MgaW5jb3JyZWN0bHkgZm9ybWF0dGVkLicpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY3JlYXRlUXVpY2tWaXNpdG9yID0gKCkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdjb25mZXJlbmNlL1VzZXIvT25zaXRlL2NyZWF0ZVF1aWNrJyxcbiAgICAgIGRhdGE6IHtlbWFpbH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgIHNldFZpc2l0b3IoZGF0YS52aXNpdG9yKVxuICAgICAgICBzZXRTdGFnZSgnc3RhcnRSZWdpc3RyYXRpb24nKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBlbWFpbEluVXNlID0gKCkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdjb25mZXJlbmNlL1VzZXIvT25zaXRlL2NoZWNrRW1haWwnLFxuICAgICAgZGF0YToge2VtYWlsfSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5mb3VuZCkge1xuICAgICAgICAgIHNldEVycm9yKCdUaGlzIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UuJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjcmVhdGVRdWlja1Zpc2l0b3IoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICBZb3VyIGVtYWlsIGFkZHJlc3M6XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAge2Vycm9yLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj57ZXJyb3J9PC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG1yLTNcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2F2ZUFjY291bnQoKVxuICAgICAgICB9fT5cbiAgICAgICAgQ3JlYXRlIG15IGFjY291bnRcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U3RhZ2UoJ2Nob29zZVBhcmVudCcpXG4gICAgICAgIH19PlxuICAgICAgICBCYWNrIHRvIHBhcmVudCBzZWxlY3Rpb25cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkNyZWF0ZUFjY291bnQucHJvcFR5cGVzID0ge3NldFN0YWdlOiBQcm9wVHlwZXMuZnVuYywgc2V0VmlzaXRvcjogUHJvcFR5cGVzLmZ1bmN9XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUFjY291bnRcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBMb2dpbiA9ICh7c2V0U3RhZ2UsIGVtYWlsLCBoYXNSZWdpc3RyYXRpb259KSA9PiB7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnY29uZmVyZW5jZS9Vc2VyL1Zpc2l0b3IvbG9naW4nLFxuICAgICAgZGF0YToge2VtYWlsLCBwYXNzd29yZH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICBzZXRTdGFnZSgnc3RhcnRSZWdpc3RyYXRpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj5QYXNzd29yZCBub3QgYWNjZXB0ZWQuPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSlcbiAgfVxuXG4gIGxldCByZWdpc3RyYXRpb25JbmZvXG4gIGlmIChoYXNSZWdpc3RyYXRpb24uaWQgPiAwKSB7XG4gICAgaWYgKGhhc1JlZ2lzdHJhdGlvbi5jb21wbGV0ZWQgPT09IDApIHtcbiAgICAgIHJlZ2lzdHJhdGlvbkluZm8gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgWW91IGhhdmUgYW4gaW5jb21wbGV0ZSByZWdpc3RyYXRpb24uIFlvdSBtYXkgbG9nIGluIGJlbG93IGlmIHlvdVxuICAgICAgICAgICAgbmVlZCB0byBtYWtlIGNoYW5nZXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXtsb2dpbn0+XG4gICAgICAgICAgICAgIExvZyBpbiBhcyB7ZW1haWx9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZ2lzdHJhdGlvbkluZm8gPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+WW91IGhhdmUgYSBjb21wbGV0ZWQgcmVnaXN0cmF0aW9uIGZvciB0aGlzIGV2ZW50LiBZb3UgYXJlIGRvbmUhPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+XG4gICAgICAgIFRoaXMgZW1haWwgYWRkcmVzcyAoe2VtYWlsfSkgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcGFyZW50IGFscmVhZHkgaGFzIGFuXG4gICAgICAgIGFjY291bnQuXG4gICAgICA8L3A+XG4gICAgICB7cmVnaXN0cmF0aW9uSW5mb31cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnRuLWJsb2NrXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhZ2UoJ2Nob29zZVBhcmVudCcpfT5cbiAgICAgICAgQ2hvb3NlIGEgZGlmZmVyZW50IHBhcmVudCAoaWYgYXZhaWxhYmxlKVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTG9naW4ucHJvcFR5cGVzID0ge1xuICBzZXRTdGFnZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2aXNpdG9yOiBQcm9wVHlwZXMub2JqZWN0LFxuICBoYXNSZWdpc3RyYXRpb246IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBTaW5nbGVQYXJlbnQgPSAoe2NyZWF0ZUFjY291bnR9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5DcmVhdGUgYW4gYWNjb3VudDwvaDM+XG4gICAgICA8cD5ObyBwYXJlbnQgYWNjb3VudCBpcyBhc3NvY2lhdGVkIGN1cnJlbnRseSB3aXRoIHRoaXMgc3R1ZGVudC48L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCIgb25DbGljaz17Y3JlYXRlQWNjb3VudH0+XG4gICAgICAgICAgQ29udGludWUgdG8gY3JlYXRlIGEgcXVpY2sgYWNjb3VudC5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuU2luZ2xlUGFyZW50LnByb3BUeXBlcyA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVBhcmVudFxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IFN0YXJ0UmVnaXN0cmF0aW9uID0gKHtzZXNzaW9uSWQsIHN0dWRlbnRJZH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+WW91IGFyZSByZWFkeSB0byBzdGFydCByZWdpc3RyYXRpb24uPC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCJcbiAgICAgICAgICBocmVmPXtgY29uZmVyZW5jZS9WaXNpdG9yL1Nlc3Npb24vJHtzZXNzaW9uSWR9L3NpZ251cC8/c3R1ZGVudElkPSR7c3R1ZGVudElkfWB9PlxuICAgICAgICAgIEdvIHRvIHJlZ2lzdHJhdGlvblxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5TdGFydFJlZ2lzdHJhdGlvbi5wcm9wVHlwZXMgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCBTdGFydFJlZ2lzdHJhdGlvblxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IFN0dWRlbnRJbmZvID0gKHtzdHVkZW50fSkgPT4ge1xuICBpZiAoc3R1ZGVudC5pZCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoMz5cbiAgICAgICAgZm9yIHtzdHVkZW50LmZpcnN0TmFtZX0ge3N0dWRlbnQubGFzdE5hbWV9XG4gICAgICA8L2gzPlxuICAgIClcbiAgfVxufVxuXG5TdHVkZW50SW5mby5wcm9wVHlwZXMgPSB7c3R1ZGVudDogUHJvcFR5cGVzLm9iamVjdH1cblxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudEluZm9cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuLyogZ2xvYmFsICQgKi9cblxuY29uc3QgU3R1ZGVudFNpZ25pbiA9ICh7c2V0U3RhZ2UsIHNldFN0dWRlbnQsIHN0dWRlbnQsIHNldFBhcmVudHN9KSA9PiB7XG4gIGNvbnN0IFtiYW5uZXJJZCwgc2V0QmFubmVySWRdID0gdXNlU3RhdGUoJzkwMDAwMzM0MCcpXG4gIGNvbnN0IFtiYW5uZXJVc2VybmFtZSwgc2V0QmFubmVyVXNlcm5hbWVdID0gdXNlU3RhdGUoJ21jbmFuZXltJylcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgcHVsbFN0dWRlbnQgPSAoKSA9PiB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvVXNlci9PbnNpdGUvc2VhcmNoJyxcbiAgICAgIGRhdGE6IHtjaGVja0Jhbm5lcklkOiBiYW5uZXJJZCwgYmFubmVyVXNlcm5hbWV9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBzZXRTdHVkZW50KGRhdGEuc3R1ZGVudClcbiAgICAgICAgICBzZXRQYXJlbnRzKGRhdGEucGFyZW50cylcbiAgICAgICAgICBzZXRTdGFnZSgnY2hvb3NlUGFyZW50JylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRNZXNzYWdlKGRhdGEubWVzc2FnZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgIH0pXG4gIH1cbiAgY29uc3QgYmFubmVySW5wdXQgPSBjcmVhdGVSZWYoKVxuXG4gIGNvbnN0IGdldE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2UubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e21lc3NhZ2V9PC9kaXY+XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBiYW5uZXJJbnB1dC5jdXJyZW50LmZvY3VzKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAge2dldE1lc3NhZ2UoKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFubmVySWRcIj5TdHVkZW50IEJhbm5lciBJRDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cImJhbm5lcklkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIDkwMDAwMDAwMFwiXG4gICAgICAgICAgICAgIHJlZj17YmFubmVySW5wdXR9XG4gICAgICAgICAgICAgIG5hbWU9XCJCYW5uZXJJRFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtiYW5uZXJJZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QmFubmVySWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFubmVyVXNlcm5hbWVcIj5TdHVkZW50IHVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJiYW5uZXJVc2VybmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBsYXN0bmFtZWZtXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Jhbm5lclVzZXJuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRCYW5uZXJVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17cHVsbFN0dWRlbnR9PlxuICAgICAgICBTZWFyY2ggZm9yIG15IHN0dWRlbnRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cblN0dWRlbnRTaWduaW4ucHJvcFR5cGVzID0ge3NldFN0YWdlOiBQcm9wVHlwZXMuZnVuY31cblxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudFNpZ25pblxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFN0YXJ0UmVnaXN0cmF0aW9uIGZyb20gJy4vU3RhcnRSZWdpc3RyYXRpb24nXG5pbXBvcnQgQ3JlYXRlQWNjb3VudCBmcm9tICcuL0NyZWF0ZUFjY291bnQnXG5pbXBvcnQgU3R1ZGVudFNpZ25pbiBmcm9tICcuL1N0dWRlbnRTaWduaW4nXG5pbXBvcnQgQ2hvb3NlUGFyZW50IGZyb20gJy4vQ2hvb3NlUGFyZW50J1xuaW1wb3J0IFN0dWRlbnRJbmZvIGZyb20gJy4vU3R1ZGVudEluZm8nXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbidcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQge2ZhU3Bpbm5lcn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuXG4vKiBnbG9iYWwgJCwgc2Vzc2lvbklkICovXG5cbmNvbnN0IE9uc2l0ZSA9ICgpID0+IHtcbiAgY29uc3QgW3N0YWdlLCBzZXRTdGFnZV0gPSB1c2VTdGF0ZSgnc3R1ZGVudFNpZ25pbicpXG4gIGNvbnN0IFtzdHVkZW50LCBzZXRTdHVkZW50XSA9IHVzZVN0YXRlKHtpZDogMH0pXG4gIGNvbnN0IFt2aXNpdG9yLCBzZXRWaXNpdG9yXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbcGFyZW50cywgc2V0UGFyZW50c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtoYXNSZWdpc3RyYXRpb24sIHNldEhhc1JlZ2lzdHJhdGlvbl0gPSB1c2VTdGF0ZSh7aWQ6IDB9KVxuICBjb25zdCBbbG9hZGluZ01lc3NhZ2UsIHNldExvYWRpbmdNZXNzYWdlXSA9IHVzZVN0YXRlKCdMb2FkaW5nLi4uJylcblxuICAvLyBjb25zdCBlbXB0eVZpc2l0b3IgPSB7XG4gIC8vICAgZmlyc3ROYW1lOiAnJyxcbiAgLy8gICBsYXN0TmFtZTogJycsXG4gIC8vICAgZW1haWw6ICcnLFxuICAvLyAgIHBob25lOiAnJ1xuICAvLyB9XG5cbiAgbGV0IHJlc2V0VGltZW91dFxuXG4gIGNvbnN0IHJlc2V0VGltZXIgPSAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHJlc2V0VGltZW91dClcbiAgICByZXNldFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc2V0TG9hZGluZygpXG4gICAgICBzZXRTdHVkZW50KHtpZDogMH0pXG4gICAgICBzZXRWaXNpdG9yKHt9KVxuICAgICAgc2V0UGFyZW50cyhbXSlcbiAgICAgIGxvZ291dCgpXG4gICAgICBzZXRTdGFnZSgnc3R1ZGVudFNpZ25pbicpXG4gICAgfSwgODAwMClcbiAgfVxuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnY29uZmVyZW5jZS9WaXNpdG9yL09uc2l0ZS9Mb2dvdXQnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdnZXQnXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHJlc2V0TG9hZGluZyA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIHNldExvYWRpbmdNZXNzYWdlKCdMb2FkaW5nLi4uJylcbiAgfVxuXG4gIGNvbnN0IHNldFBhcmVudCA9IHBhcmVudEtleSA9PiB7XG4gICAgaWYgKHBhcmVudEtleSA9PSAtMSkge1xuICAgICAgc2V0U3RhZ2UoJ2NyZWF0ZUFjY291bnQnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBzZXRMb2FkaW5nTWVzc2FnZSgnQ3JlYXRpbmcgbmV3IGFjY291bnQnKVxuICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudHNbcGFyZW50S2V5XVxuICAgIGNvbnN0IG5ld1Zpc2l0b3IgPSB7XG4gICAgICBmaXJzdE5hbWU6IHBhcmVudC5wcmVmRmlyc3ROYW1lID8/IHBhcmVudC5maXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZTogcGFyZW50Lmxhc3ROYW1lLFxuICAgICAgZW1haWw6IHBhcmVudC5lbWFpbEFkZHJlc3MsXG4gICAgICBhZGRyZXNzMTogcGFyZW50LnN0cmVldExpbmUxID8/ICcnLFxuICAgICAgYWRkcmVzczI6IHBhcmVudC5zdHJlZXRMaW5lMiA/PyAnJyxcbiAgICAgIGNpdHk6IHBhcmVudC5jaXR5ID8/ICcnLFxuICAgICAgc3RhdGU6IHBhcmVudC5zdGF0ZUNvZGUgPz8gJycsXG4gICAgICB6aXA6IHBhcmVudC56aXAgPz8gJycsXG4gICAgICBwaG9uZTogKHBhcmVudC5waG9uZUFyZWEgPz8gJycpICsgcGFyZW50LnBob25lTnVtYmVyID8/ICcnLFxuICAgICAgc3R1ZGVudElkOiBzdHVkZW50LmlkXG4gICAgfVxuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdjb25mZXJlbmNlL1VzZXIvT25zaXRlL2NyZWF0ZVZpc2l0b3InLFxuICAgICAgZGF0YTogbmV3VmlzaXRvcixcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAncG9zdCcsXG4gICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgc2V0VmlzaXRvcihkYXRhLnZpc2l0b3IpXG4gICAgICAgIGlmIChkYXRhWydmb3VuZCddKSB7XG4gICAgICAgICAgc2V0U3RhZ2UoJ2xvZ2luJylcbiAgICAgICAgICBzZXRIYXNSZWdpc3RyYXRpb24oZGF0YS5oYXNSZWdpc3RyYXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0U3RhZ2UoJ3N0YXJ0UmVnaXN0cmF0aW9uJylcbiAgICAgICAgfVxuICAgICAgICByZXNldExvYWRpbmcoKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgIHNldFN0YWdlKCdlcnJvcicpXG4gICAgICAgIHJlc2V0VGltZXIoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBnZXRTdGFnZSA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHN0YWdlKSB7XG4gICAgICBjYXNlICdzdHVkZW50U2lnbmluJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U3R1ZGVudFNpZ25pblxuICAgICAgICAgICAgc2V0U3RhZ2U9e3NldFN0YWdlfVxuICAgICAgICAgICAgc2V0U3R1ZGVudD17c2V0U3R1ZGVudH1cbiAgICAgICAgICAgIHNldFBhcmVudHM9e3NldFBhcmVudHN9XG4gICAgICAgICAgICBzdHVkZW50PXtzdHVkZW50fVxuICAgICAgICAgIC8+XG4gICAgICAgIClcblxuICAgICAgY2FzZSAnY3JlYXRlQWNjb3VudCc6XG4gICAgICAgIHJldHVybiA8Q3JlYXRlQWNjb3VudCBzZXRTdGFnZT17c2V0U3RhZ2V9IHNldFZpc2l0b3I9e3NldFZpc2l0b3J9IC8+XG5cbiAgICAgIGNhc2UgJ2Nob29zZVBhcmVudCc6XG4gICAgICAgIHJldHVybiA8Q2hvb3NlUGFyZW50IHNldFBhcmVudD17c2V0UGFyZW50fSBwYXJlbnRzPXtwYXJlbnRzfSAvPlxuXG4gICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExvZ2luXG4gICAgICAgICAgICBzZXRTdGFnZT17c2V0U3RhZ2V9XG4gICAgICAgICAgICBlbWFpbD17dmlzaXRvci5lbWFpbH1cbiAgICAgICAgICAgIGhhc1JlZ2lzdHJhdGlvbj17aGFzUmVnaXN0cmF0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgIClcblxuICAgICAgY2FzZSAnc3RhcnRSZWdpc3RyYXRpb24nOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTdGFydFJlZ2lzdHJhdGlvbiBzZXNzaW9uSWQ9e3Nlc3Npb25JZH0gc3R1ZGVudElkPXtzdHVkZW50LmlkfSAvPlxuICAgICAgICApXG5cbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBtdC0zXCI+XG4gICAgICAgICAgICA8aDM+U29ycnk8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFdlIGV4cGVyaWVuY2VkIGFuIGVycm9yIHdoZW4gdHJ5aW5nIHRvIHByb2Nlc3MgeW91ciBpbmZvcm1hdGlvbi5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIFBsZWFzZSBzcGVhayB3aXRoIGEgcmVwcmVzZW50YXRpdmUgZm9yIGhlbHAuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgbG9hZGluZ1NjcmVlblxuICBpZiAobG9hZGluZykge1xuICAgIGxvYWRpbmdTY3JlZW4gPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxlYWQgcHQtNSBwYi01XCI+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTcGlubmVyfSBzcGluIC8+XG4gICAgICAgICZuYnNwO3tsb2FkaW5nTWVzc2FnZX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTggbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMFwiPk9uc2l0ZSBSZWdpc3RyYXRpb248L2gyPlxuICAgICAgICAgICAgICA8U3R1ZGVudEluZm8gc3R1ZGVudD17c3R1ZGVudH0gLz5cbiAgICAgICAgICAgICAge2xvYWRpbmdTY3JlZW59XG4gICAgICAgICAgICAgIHtnZXRTdGFnZSgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUmVhY3RET00ucmVuZGVyKDxPbnNpdGUgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdPbnNpdGUnKSlcbiJdLCJzb3VyY2VSb290IjoiIn0=