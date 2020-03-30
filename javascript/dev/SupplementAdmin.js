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
/******/ 		"SupplementAdmin": 0
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
/******/ 	deferredModules.push(["./javascript/SupplementAdmin/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/SupplementAdmin/GuestList.js":
/*!*************************************************!*\
  !*** ./javascript/SupplementAdmin/GuestList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var GuestList = function GuestList(_ref) {
  var guests = _ref.guests,
      update = _ref.update;

  if (guests.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
  }

  var listing = guests.map(function (value, key) {
    var firstName = value.firstName,
        lastName = value.lastName,
        email = value.email;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "New guest #", key + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "firstName"
    }, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "form-control",
      name: "firstName",
      value: firstName,
      onChange: function onChange(e) {
        return update(key, 'firstName', e.target.value);
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "lastName"
    }, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "form-control",
      name: "lastName",
      value: lastName,
      onChange: function onChange(e) {
        return update(key, 'lastName', e.target.value);
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "email"
    }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "form-control",
      name: "email",
      value: email,
      onChange: function onChange(e) {
        return update(key, 'email', e.target.value);
      }
    }))));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, listing)));
};

GuestList.propTypes = {
  guests: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (GuestList);

/***/ }),

/***/ "./javascript/SupplementAdmin/index.js":
/*!*********************************************!*\
  !*** ./javascript/SupplementAdmin/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _GuestList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GuestList */ "./javascript/SupplementAdmin/GuestList.js");








/* global registrationId, mealCost, guestCost, mealService */

var SupplementAdmin = function SupplementAdmin(_ref) {
  var registrationId = _ref.registrationId,
      mealCost = _ref.mealCost,
      guestCost = _ref.guestCost,
      mealService = _ref.mealService;
  var defaultGuest = {
    email: '',
    firstName: '',
    lastName: ''
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      newGuests = _useState2[0],
      setNewGuests = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      newMeals = _useState4[0],
      setNewMeals = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      guests = _useState6[0],
      setGuests = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      totalCost = _useState8[0],
      setTotalCost = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      error = _useState10[0],
      setError = _useState10[1];

  var formRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();

  var decreaseMeals = function decreaseMeals() {
    if (newMeals >= 0) {
      setNewMeals(newMeals - 1);
      setTotalCost(totalCost - mealCost);
    }
  };

  var increaseMeals = function increaseMeals() {
    setNewMeals(newMeals + 1);
    setTotalCost(totalCost + mealCost);
  };

  var decreaseGuests = function decreaseGuests() {
    if (newGuests >= 0) {
      setNewGuests(newGuests - 1);
      guests.pop();
      setGuests(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(guests));
      setTotalCost(totalCost - guestCost);
    }
  };

  var increaseGuests = function increaseGuests() {
    setNewGuests(newGuests + 1);
    guests.push(Object.assign({}, defaultGuest));
    setTotalCost(totalCost + guestCost);
  };

  var disableMealMinus = function disableMealMinus() {
    return newMeals === 0;
  };

  var disableMealPlus = function disableMealPlus() {
    return newMeals > 10;
  };

  var disableGuestMinus = function disableGuestMinus() {
    return newGuests === 0;
  };

  var disableGuestPlus = function disableGuestPlus() {
    return newGuests > 10;
  };

  var updateGuests = function updateGuests(key, varname, value) {
    var guestCopy = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(guests);

    guestCopy[key][varname] = value;
    setGuests(guestCopy);
  };

  var guestsCompleted = function guestsCompleted() {
    var completed = true;

    if (newGuests !== 0) {
      guests.forEach(function (value) {
        if (value.firstName.length === 0 || value.lastName.length === 0 || value.email.length === 0) {
          completed = false;
        }
      });
    }

    return completed;
  };

  var saveSupplement = function saveSupplement(e) {
    e.preventDefault();

    if (!guestsCompleted()) {
      setError( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "alert alert-danger"
      }, "Please complete all guest fields."));
      return;
    } else {
      formRef.current.submit();
    }
  };

  var guestsHidden = function guestsHidden() {
    if (newGuests === 0) {
      return;
    }

    var hidden = [];
    guests.forEach(function (value, key) {
      hidden.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "hidden",
        key: key + '1',
        name: "guests[".concat(key, "][firstName]"),
        value: value.firstName
      }));
      hidden.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "hidden",
        key: key + '2',
        name: "guests[".concat(key, "][lastName]"),
        value: value.lastName
      }));
      hidden.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "hidden",
        key: key + '3',
        name: "guests[".concat(key, "][email]"),
        value: value.email
      }));
    });
    return hidden;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, error, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", null, mealService === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    style: {
      width: '20%'
    }
  }, "New meals ($", mealCost.toFixed(2), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    style: {
      width: '10%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "alert alert-primary lead"
  }, newMeals)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "btn btn-success btn-sm mr-1",
    onClick: increaseMeals,
    disabled: disableMealPlus()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-plus"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "btn btn-danger btn-sm mr-1",
    onClick: decreaseMeals,
    disabled: disableMealMinus()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-minus"
  })))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    style: {
      width: '20%'
    }
  }, "New guests ($", guestCost.toFixed(2), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    style: {
      width: '10%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "alert alert-primary lead"
  }, newGuests)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "btn btn-success btn-sm mr-1",
    onClick: increaseGuests,
    disabled: disableGuestPlus()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-plus"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "btn btn-danger btn-sm mr-1",
    onClick: decreaseGuests,
    disabled: disableGuestMinus()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-minus"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_GuestList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    guests: guests,
    update: updateGuests
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    ref: formRef,
    action: "conference/Admin/Supplement/add",
    method: "post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "hidden",
    name: "registrationId",
    value: registrationId
  }), guestsHidden(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "hidden",
    name: "newMeals",
    value: newMeals
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "hidden",
    name: "newGuests",
    value: newGuests
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "btn btn-primary btn-block",
    disabled: newMeals === 0 && newGuests === 0,
    onClick: saveSupplement
  }, "Add $", totalCost.toFixed(2), " charge to registration"))));
};

SupplementAdmin.propTypes = {
  registrationId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  mealCost: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  guestCost: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (SupplementAdmin);
react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SupplementAdmin, {
  registrationId: registrationId,
  mealCost: mealCost,
  guestCost: guestCost,
  mealService: mealService
}), document.getElementById('SupplementAdmin'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TdXBwbGVtZW50QWRtaW4vR3Vlc3RMaXN0LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvU3VwcGxlbWVudEFkbWluL2luZGV4LmpzIl0sIm5hbWVzIjpbIkd1ZXN0TGlzdCIsImd1ZXN0cyIsInVwZGF0ZSIsImxlbmd0aCIsImxpc3RpbmciLCJtYXAiLCJ2YWx1ZSIsImtleSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJlIiwidGFyZ2V0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJmdW5jIiwiU3VwcGxlbWVudEFkbWluIiwicmVnaXN0cmF0aW9uSWQiLCJtZWFsQ29zdCIsImd1ZXN0Q29zdCIsIm1lYWxTZXJ2aWNlIiwiZGVmYXVsdEd1ZXN0IiwidXNlU3RhdGUiLCJuZXdHdWVzdHMiLCJzZXROZXdHdWVzdHMiLCJuZXdNZWFscyIsInNldE5ld01lYWxzIiwic2V0R3Vlc3RzIiwidG90YWxDb3N0Iiwic2V0VG90YWxDb3N0IiwiZXJyb3IiLCJzZXRFcnJvciIsImZvcm1SZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImRlY3JlYXNlTWVhbHMiLCJpbmNyZWFzZU1lYWxzIiwiZGVjcmVhc2VHdWVzdHMiLCJwb3AiLCJpbmNyZWFzZUd1ZXN0cyIsInB1c2giLCJPYmplY3QiLCJhc3NpZ24iLCJkaXNhYmxlTWVhbE1pbnVzIiwiZGlzYWJsZU1lYWxQbHVzIiwiZGlzYWJsZUd1ZXN0TWludXMiLCJkaXNhYmxlR3Vlc3RQbHVzIiwidXBkYXRlR3Vlc3RzIiwidmFybmFtZSIsImd1ZXN0Q29weSIsImd1ZXN0c0NvbXBsZXRlZCIsImNvbXBsZXRlZCIsImZvckVhY2giLCJzYXZlU3VwcGxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInN1Ym1pdCIsImd1ZXN0c0hpZGRlbiIsImhpZGRlbiIsIndpZHRoIiwidG9G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QUFDRSxhQUFTLEVBQUMsMkJBRFo7QUFFRSxZQUFRLEVBQUVFLFFBQVEsS0FBSyxDQUFiLElBQWtCRixTQUFTLEtBQUssQ0FGNUM7QUFHRSxXQUFPLEVBQUU4QjtBQUhYLGNBSVF6QixTQUFTLENBQUNnQyxPQUFWLENBQWtCLENBQWxCLENBSlIsNEJBREYsQ0FSRixDQXJERixDQURGO0FBeUVELENBM01EOztBQTZNQTVDLGVBQWUsQ0FBQ0osU0FBaEIsR0FBNEI7QUFDMUJLLGdCQUFjLEVBQUVKLGlEQUFTLENBQUNnRCxNQURBO0FBRTFCM0MsVUFBUSxFQUFFTCxpREFBUyxDQUFDZ0QsTUFGTTtBQUcxQjFDLFdBQVMsRUFBRU4saURBQVMsQ0FBQ2dEO0FBSEssQ0FBNUI7QUFNZTdDLDhFQUFmO0FBRUE4QyxnREFBUSxDQUFDQyxNQUFULGVBQ0UsMkRBQUMsZUFBRDtBQUNFLGdCQUFjLEVBQUU5QyxjQURsQjtBQUVFLFVBQVEsRUFBRUMsUUFGWjtBQUdFLFdBQVMsRUFBRUMsU0FIYjtBQUlFLGFBQVcsRUFBRUM7QUFKZixFQURGLEVBT0U0QyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBUEYsRSIsImZpbGUiOiJTdXBwbGVtZW50QWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiU3VwcGxlbWVudEFkbWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9qYXZhc2NyaXB0L1N1cHBsZW1lbnRBZG1pbi9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IEd1ZXN0TGlzdCA9ICh7Z3Vlc3RzLCB1cGRhdGV9KSA9PiB7XG4gIGlmIChndWVzdHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxkaXY+PC9kaXY+XG4gIH1cblxuICBjb25zdCBsaXN0aW5nID0gZ3Vlc3RzLm1hcCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGNvbnN0IHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbH0gPSB2YWx1ZVxuICAgIHJldHVybiAoXG4gICAgICA8dHIga2V5PXtrZXl9PlxuICAgICAgICA8dGg+TmV3IGd1ZXN0ICN7a2V5ICsgMX08L3RoPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZShrZXksICdmaXJzdE5hbWUnLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCI+TGFzdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlKGtleSwgJ2xhc3ROYW1lJywgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlKGtleSwgJ2VtYWlsJywgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKVxuICB9KVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICA8dGJvZHk+e2xpc3Rpbmd9PC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuR3Vlc3RMaXN0LnByb3BUeXBlcyA9IHtndWVzdHM6IFByb3BUeXBlcy5hcnJheSwgdXBkYXRlOiBQcm9wVHlwZXMuZnVuY31cblxuZXhwb3J0IGRlZmF1bHQgR3Vlc3RMaXN0XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgR3Vlc3RMaXN0IGZyb20gJy4vR3Vlc3RMaXN0J1xuXG4vKiBnbG9iYWwgcmVnaXN0cmF0aW9uSWQsIG1lYWxDb3N0LCBndWVzdENvc3QsIG1lYWxTZXJ2aWNlICovXG5cbmNvbnN0IFN1cHBsZW1lbnRBZG1pbiA9ICh7XG4gIHJlZ2lzdHJhdGlvbklkLFxuICBtZWFsQ29zdCxcbiAgZ3Vlc3RDb3N0LFxuICBtZWFsU2VydmljZVxufSkgPT4ge1xuICBjb25zdCBkZWZhdWx0R3Vlc3QgPSB7XG4gICAgZW1haWw6ICcnLFxuICAgIGZpcnN0TmFtZTogJycsXG4gICAgbGFzdE5hbWU6ICcnXG4gIH1cbiAgY29uc3QgW25ld0d1ZXN0cywgc2V0TmV3R3Vlc3RzXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtuZXdNZWFscywgc2V0TmV3TWVhbHNdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2d1ZXN0cywgc2V0R3Vlc3RzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbdG90YWxDb3N0LCBzZXRUb3RhbENvc3RdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBmb3JtUmVmID0gUmVhY3QuY3JlYXRlUmVmKClcblxuICBjb25zdCBkZWNyZWFzZU1lYWxzID0gKCkgPT4ge1xuICAgIGlmIChuZXdNZWFscyA+PSAwKSB7XG4gICAgICBzZXROZXdNZWFscyhuZXdNZWFscyAtIDEpXG4gICAgICBzZXRUb3RhbENvc3QodG90YWxDb3N0IC0gbWVhbENvc3QpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5jcmVhc2VNZWFscyA9ICgpID0+IHtcbiAgICBzZXROZXdNZWFscyhuZXdNZWFscyArIDEpXG4gICAgc2V0VG90YWxDb3N0KHRvdGFsQ29zdCArIG1lYWxDb3N0KVxuICB9XG5cbiAgY29uc3QgZGVjcmVhc2VHdWVzdHMgPSAoKSA9PiB7XG4gICAgaWYgKG5ld0d1ZXN0cyA+PSAwKSB7XG4gICAgICBzZXROZXdHdWVzdHMobmV3R3Vlc3RzIC0gMSlcbiAgICAgIGd1ZXN0cy5wb3AoKVxuICAgICAgc2V0R3Vlc3RzKFsuLi5ndWVzdHNdKVxuICAgICAgc2V0VG90YWxDb3N0KHRvdGFsQ29zdCAtIGd1ZXN0Q29zdClcbiAgICB9XG4gIH1cblxuICBjb25zdCBpbmNyZWFzZUd1ZXN0cyA9ICgpID0+IHtcbiAgICBzZXROZXdHdWVzdHMobmV3R3Vlc3RzICsgMSlcbiAgICBndWVzdHMucHVzaChPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0R3Vlc3QpKVxuICAgIHNldFRvdGFsQ29zdCh0b3RhbENvc3QgKyBndWVzdENvc3QpXG4gIH1cblxuICBjb25zdCBkaXNhYmxlTWVhbE1pbnVzID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXdNZWFscyA9PT0gMFxuICB9XG5cbiAgY29uc3QgZGlzYWJsZU1lYWxQbHVzID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXdNZWFscyA+IDEwXG4gIH1cblxuICBjb25zdCBkaXNhYmxlR3Vlc3RNaW51cyA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3R3Vlc3RzID09PSAwXG4gIH1cblxuICBjb25zdCBkaXNhYmxlR3Vlc3RQbHVzID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXdHdWVzdHMgPiAxMFxuICB9XG5cbiAgY29uc3QgdXBkYXRlR3Vlc3RzID0gKGtleSwgdmFybmFtZSwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBndWVzdENvcHkgPSBbLi4uZ3Vlc3RzXVxuICAgIGd1ZXN0Q29weVtrZXldW3Zhcm5hbWVdID0gdmFsdWVcbiAgICBzZXRHdWVzdHMoZ3Vlc3RDb3B5KVxuICB9XG5cbiAgY29uc3QgZ3Vlc3RzQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIGxldCBjb21wbGV0ZWQgPSB0cnVlXG4gICAgaWYgKG5ld0d1ZXN0cyAhPT0gMCkge1xuICAgICAgZ3Vlc3RzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsdWUuZmlyc3ROYW1lLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgIHZhbHVlLmxhc3ROYW1lLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgIHZhbHVlLmVtYWlsLmxlbmd0aCA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gY29tcGxldGVkXG4gIH1cblxuICBjb25zdCBzYXZlU3VwcGxlbWVudCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmICghZ3Vlc3RzQ29tcGxldGVkKCkpIHtcbiAgICAgIHNldEVycm9yKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgIFBsZWFzZSBjb21wbGV0ZSBhbGwgZ3Vlc3QgZmllbGRzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtUmVmLmN1cnJlbnQuc3VibWl0KClcbiAgICB9XG4gIH1cblxuICBjb25zdCBndWVzdHNIaWRkZW4gPSAoKSA9PiB7XG4gICAgaWYgKG5ld0d1ZXN0cyA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGhpZGRlbiA9IFtdXG4gICAgZ3Vlc3RzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGhpZGRlbi5wdXNoKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICBrZXk9e2tleSArICcxJ31cbiAgICAgICAgICBuYW1lPXtgZ3Vlc3RzWyR7a2V5fV1bZmlyc3ROYW1lXWB9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlLmZpcnN0TmFtZX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICAgIGhpZGRlbi5wdXNoKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICBrZXk9e2tleSArICcyJ31cbiAgICAgICAgICBuYW1lPXtgZ3Vlc3RzWyR7a2V5fV1bbGFzdE5hbWVdYH1cbiAgICAgICAgICB2YWx1ZT17dmFsdWUubGFzdE5hbWV9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgICBoaWRkZW4ucHVzaChcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAga2V5PXtrZXkgKyAnMyd9XG4gICAgICAgICAgbmFtZT17YGd1ZXN0c1ske2tleX1dW2VtYWlsXWB9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlLmVtYWlsfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIGhpZGRlblxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtlcnJvcn1cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7bWVhbFNlcnZpY2UgPT09IDEgPyAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17e3dpZHRoOiAnMjAlJ319Pk5ldyBtZWFscyAoJHttZWFsQ29zdC50b0ZpeGVkKDIpfSk8L3RoPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzEwJSd9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1wcmltYXJ5IGxlYWRcIj57bmV3TWVhbHN9PC9zcGFuPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtIG1yLTFcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aW5jcmVhc2VNZWFsc31cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlTWVhbFBsdXMoKX0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tc20gbXItMVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWNyZWFzZU1lYWxzfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVNZWFsTWludXMoKX0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbWludXNcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggc3R5bGU9e3t3aWR0aDogJzIwJSd9fT5OZXcgZ3Vlc3RzICgke2d1ZXN0Q29zdC50b0ZpeGVkKDIpfSk8L3RoPlxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcxMCUnfX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnkgbGVhZFwiPntuZXdHdWVzdHN9PC9zcGFuPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tc20gbXItMVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aW5jcmVhc2VHdWVzdHN9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVHdWVzdFBsdXMoKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbSBtci0xXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWNyZWFzZUd1ZXN0c31cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZUd1ZXN0TWludXMoKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1pbnVzXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPEd1ZXN0TGlzdCBndWVzdHM9e2d1ZXN0c30gdXBkYXRlPXt1cGRhdGVHdWVzdHN9IC8+XG4gICAgICA8Zm9ybVxuICAgICAgICByZWY9e2Zvcm1SZWZ9XG4gICAgICAgIGFjdGlvbj1cImNvbmZlcmVuY2UvQWRtaW4vU3VwcGxlbWVudC9hZGRcIlxuICAgICAgICBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlZ2lzdHJhdGlvbklkXCIgdmFsdWU9e3JlZ2lzdHJhdGlvbklkfSAvPlxuICAgICAgICB7Z3Vlc3RzSGlkZGVuKCl9XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm5ld01lYWxzXCIgdmFsdWU9e25ld01lYWxzfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJuZXdHdWVzdHNcIiB2YWx1ZT17bmV3R3Vlc3RzfSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e25ld01lYWxzID09PSAwICYmIG5ld0d1ZXN0cyA9PT0gMH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3NhdmVTdXBwbGVtZW50fT5cbiAgICAgICAgICAgIEFkZCAke3RvdGFsQ29zdC50b0ZpeGVkKDIpfSBjaGFyZ2UgdG8gcmVnaXN0cmF0aW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cblN1cHBsZW1lbnRBZG1pbi5wcm9wVHlwZXMgPSB7XG4gIHJlZ2lzdHJhdGlvbklkOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtZWFsQ29zdDogUHJvcFR5cGVzLm51bWJlcixcbiAgZ3Vlc3RDb3N0OiBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1cHBsZW1lbnRBZG1pblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxTdXBwbGVtZW50QWRtaW5cbiAgICByZWdpc3RyYXRpb25JZD17cmVnaXN0cmF0aW9uSWR9XG4gICAgbWVhbENvc3Q9e21lYWxDb3N0fVxuICAgIGd1ZXN0Q29zdD17Z3Vlc3RDb3N0fVxuICAgIG1lYWxTZXJ2aWNlPXttZWFsU2VydmljZX1cbiAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdTdXBwbGVtZW50QWRtaW4nKVxuKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==