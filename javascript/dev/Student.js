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
/******/ 		"Student": 0
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
/******/ 	deferredModules.push(["./javascript/Student/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/Student/BannerList.js":
/*!******************************************!*\
  !*** ./javascript/Student/BannerList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var BannerList = function BannerList(_ref) {
  var list = _ref.list,
      toggle = _ref.toggle,
      importStudents = _ref.importStudents,
      importAllStudents = _ref.importAllStudents,
      checkAll = _ref.checkAll,
      toggleAll = _ref.toggleAll,
      total = _ref.total;

  if (list.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
  }

  var rows = list.map(function (value, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: value.banner_id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "bannerStudent[]",
      value: value.id,
      checked: value.checked !== undefined && value.checked,
      onChange: function onChange() {
        return toggle(key);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value.first_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value.banner_username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value.banner_id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value.start_date));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Banner students - ", total, " total found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    checked: checkAll,
    onChange: toggleAll
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "First"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Last"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Banner ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Start date")), rows)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary mr-2",
    onClick: importStudents
  }, "Import checked students"), checkAll ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-success",
    onClick: importAllStudents
  }, "Import all ", total, " students") : null);
};

BannerList.propTypes = {
  list: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  importStudents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  importAllStudents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  checkAll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  toggleAll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (BannerList);

/***/ }),

/***/ "./javascript/Student/ChangeDate.js":
/*!******************************************!*\
  !*** ./javascript/Student/ChangeDate.js ***!
  \******************************************/
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
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__);







/* global $ */

var ChangeDate = function ChangeDate(_ref) {
  var close = _ref.close,
      student = _ref.student,
      saved = _ref.saved;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(student.startDate),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      startDate = _useState2[0],
      setStartDate = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setStartDate(student.startDate);
  }, [student.id]);
  var startDateObject = new Date(startDate * 1000);

  var saveDate = function saveDate() {
    var url = "conference/Admin/Student/".concat(student.id, "/startDate");
    $.ajax({
      url: url,
      data: {
        startDate: startDate
      },
      dataType: 'json',
      type: 'patch',
      success: function success() {
        saved();
      },
      error: function error() {}
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "A student's start date will automatically update each time the parent logs in."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Locking in the start date here will prevent auto-updates."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    selected: startDateObject,
    onChange: function onChange(val) {
      return setStartDate(val / 1000);
    },
    className: "form-control",
    dateFormat: "MMM d, yyyy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-success mr-2",
    onClick: saveDate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-lock"
  }), " Lock date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-danger",
    onClick: close
  }, "Cancel"))));
};

ChangeDate.propTypes = {
  close: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  student: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  saved: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
ChangeDate.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (ChangeDate);

/***/ }),

/***/ "./javascript/Student/Create.js":
/*!**************************************!*\
  !*** ./javascript/Student/Create.js ***!
  \**************************************/
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
/* harmony import */ var _BannerList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BannerList */ "./javascript/Student/BannerList.js");






/* global $ */

var Create = function Create() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      searching = _useState4[0],
      setSearching = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      bannerList = _useState6[0],
      setBannerList = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      message = _useState8[0],
      setMessage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      checkAll = _useState10[0],
      setCheckAll = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState11, 2),
      total = _useState12[0],
      setTotal = _useState12[1];

  var searchTimeout;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (searchTimeout !== null) {
      clearTimeout(searchTimeout);
    }

    if (search.length < 4) {
      return;
    }

    searchTimeout = setTimeout(function () {
      loadBannerStudents(search);
    }, 1000);
  }, [search]);

  var toggle = function toggle(key) {
    var cloneList = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(bannerList);

    var row = cloneList[key];
    row.checked = row.checked === undefined || row.checked === false;
    cloneList[key] = row;
    setBannerList(cloneList);
  };

  var loadBannerStudents = function loadBannerStudents() {
    setBannerList([]);
    $.ajax({
      url: 'conference/Admin/Student/banner',
      data: {
        search: search
      },
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        setSearching(false);
        setTotal(data.total);
        setBannerList(data.banner);

        if (data.banner.length === 0) {
          setMessage( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "No students found"));
        } else {
          setMessage('');
        }
      },
      error: function error() {}
    });
  };

  var importAllStudents = function importAllStudents() {
    $.ajax({
      url: 'conference/Admin/Student/importAll',
      data: {
        search: search
      },
      dataType: 'json',
      type: 'post',
      success: function success() {
        loadBannerStudents();
      },
      error: function error() {}
    });
  };

  var importStudents = function importStudents() {
    var importList = [];
    bannerList.forEach(function (element) {
      if (element.checked !== undefined && element.checked) {
        importList.push(element.banner_id);
      }
    });

    if (importList.length == 0) {
      return;
    }

    $.ajax({
      url: 'conference/Admin/Student/import',
      data: {
        importList: importList
      },
      dataType: 'json',
      type: 'post',
      success: function success() {
        loadBannerStudents();
      },
      error: function error() {}
    });
  };

  var reset = function reset() {
    setBannerList([]);
    setSearch('');
  };

  var toggleAll = function toggleAll() {
    var cloneList = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(bannerList);

    cloneList.forEach(function (row) {
      row.checked = !checkAll;
    });
    setBannerList(cloneList);
    setCheckAll(!checkAll);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "bannerId"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    value: search,
    placeholder: "Enter a date, banner id, or student name (4 character minimum)",
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "btn btn-outline-dark",
    onClick: reset
  }, "Clear"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, searching ? 'Searching...' : null, message, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      overflowY: 'auto',
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BannerList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    list: bannerList,
    toggle: toggle,
    total: total,
    importStudents: importStudents,
    importAllStudents: importAllStudents,
    checkAll: checkAll,
    toggleAll: toggleAll
  })))));
};

Create.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ "./javascript/Student/DiscountStudent.js":
/*!***********************************************!*\
  !*** ./javascript/Student/DiscountStudent.js ***!
  \***********************************************/
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






var DiscountStudent = function DiscountStudent(_ref) {
  var student = _ref.student,
      saved = _ref.saved,
      close = _ref.close;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(student.discountAmount),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      discountAmount = _useState2[0],
      setAmount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(student.discountLabel === null ? '' : student.discountLabel),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      discountLabel = _useState4[0],
      setLabel = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      errorMessage = _useState6[0],
      setError = _useState6[1];

  var save = function save() {
    $.ajax({
      url: "conference/Admin/Student/".concat(student.id, "/discount"),
      data: {
        discountAmount: discountAmount,
        discountLabel: discountLabel
      },
      dataType: 'json',
      type: 'patch',
      success: function success() {
        saved();
      },
      error: function error() {}
    });
  };

  var setDiscountAmount = function setDiscountAmount(e) {
    var value = e.target.value;
    setAmount(value);
  };

  var checkAmount = function checkAmount() {
    if (discountAmount.match(/^\d{1,3}(\.\d{2})?$/)) {
      setError(null);
    } else {
      setError( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "badge badge-danger"
      }, "Please check the amount."));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Apply discount to ", student.firstName, " ", student.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Any discount applied to this student will be in effect for any session."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Discount amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-group-prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "input-group-text",
    id: "basic-addon1"
  }, "$")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "discountAmount",
    value: discountAmount,
    onBlur: checkAmount,
    onChange: setDiscountAmount
  })), errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Discount label"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "discountLabel",
    onChange: function onChange(e) {
      return setLabel(e.target.value);
    },
    value: discountLabel
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-12 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: save
  }, "Save discount")));
};

/* harmony default export */ __webpack_exports__["default"] = (DiscountStudent);
DiscountStudent.propTypes = {
  student: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

/***/ }),

/***/ "./javascript/Student/HideStudent.js":
/*!*******************************************!*\
  !*** ./javascript/Student/HideStudent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var HideStudent = function HideStudent(_ref) {
  var studentId = _ref.studentId,
      saved = _ref.saved,
      close = _ref.close;

  var hideStudent = function hideStudent() {
    $.ajax({
      url: "conference/Admin/Student/".concat(studentId, "/hide"),
      dataType: 'json',
      type: 'patch',
      success: function success() {
        saved();
      },
      error: function error() {}
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Hiding a student prevents their student session from getting matched."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary mr-2",
    onClick: hideStudent
  }, "Yes, I want to hide this student"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-danger",
    onClick: close
  }, "Nevermind"));
};

HideStudent.propTypes = {
  saved: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  close: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  studentId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (HideStudent);

/***/ }),

/***/ "./javascript/Student/RevealStudent.js":
/*!*********************************************!*\
  !*** ./javascript/Student/RevealStudent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





var RevealStudent = function RevealStudent(_ref) {
  var studentId = _ref.studentId,
      close = _ref.close,
      saved = _ref.saved;

  var revealStudent = function revealStudent() {
    $.ajax({
      url: "conference/Admin/Student/".concat(studentId, "/reveal"),
      dataType: 'json',
      type: 'patch',
      success: function success() {
        saved();
      },
      error: function error() {}
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Revealing a student allows parent session matching. Do not reveal a student if they are trying to maintain a private account."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary mr-2",
    onClick: revealStudent
  }, "Yes, I want to reveal this student"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-danger",
    onClick: close
  }, "Nevermind"));
};

RevealStudent.propTypes = {
  saved: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  close: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  studentId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (RevealStudent);

/***/ }),

/***/ "./javascript/Student/index.jsx":
/*!**************************************!*\
  !*** ./javascript/Student/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Student; });
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
/* harmony import */ var _HideStudent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HideStudent */ "./javascript/Student/HideStudent.js");
/* harmony import */ var _RevealStudent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RevealStudent */ "./javascript/Student/RevealStudent.js");
/* harmony import */ var _DiscountStudent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DiscountStudent */ "./javascript/Student/DiscountStudent.js");
/* harmony import */ var _ChangeDate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ChangeDate */ "./javascript/Student/ChangeDate.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Create */ "./javascript/Student/Create.js");
/* harmony import */ var _essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @essappstate/react-navbar */ "./node_modules/@essappstate/react-navbar/build/index.js");
/* harmony import */ var _essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");









function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













/* global $ */

var Student = /*#__PURE__*/function (_Listing) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Student, _Listing);

  var _super = _createSuper(Student);

  function Student(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Student);

    _this = _super.call(this, props);
    _this.restUrl = 'conference/Admin/Student';
    _this.label = 'Student';
    _this.defaultResource = {
      id: 0,
      bannerId: '',
      username: '',
      firstName: '',
      lastName: '',
      hidden: 0,
      startDate: 0,
      discountAmount: 0.0,
      discountLabel: ''
    };
    _this.hideStudent = _this.hideStudent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.revealStudent = _this.revealStudent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.finishOverlay = _this.finishOverlay.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.changeDiscount = _this.changeDiscount.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.changeStartDate = _this.changeStartDate.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.discountOverlay = _this.discountOverlay.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.startDateOverlay = _this.startDateOverlay.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.columns = [{
      column: 'bannerId',
      label: 'Banner ID'
    }, {
      column: 'firstName',
      label: 'First'
    }, {
      column: 'lastName',
      label: 'Last',
      sort: true
    }, {
      column: 'username',
      label: 'Username',
      sort: true
    }, {
      column: 'protected',
      label: 'Hidden',
      callback: function callback(row, key) {
        if (row.hidden == 0) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
            className: "btn btn-success btn-sm",
            onClick: _this.hideStudent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), key)
          }, "Accessible");
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
            className: "btn btn-danger btn-sm",
            onClick: _this.revealStudent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), key)
          }, "Hidden");
        }
      }
    }, {
      column: 'discount',
      label: 'Discount',
      callback: function callback(row, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          className: "btn btn-outline-dark btn-sm",
          onClick: _this.changeDiscount.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), key)
        }, "$", row.discountAmount);
      }
    }, {
      column: 'startDate',
      label: 'Start Date',
      sort: true,
      callback: function callback(row, key) {
        var locked = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          onClick: _this.changeStartDate.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), key),
          className: "btn btn-link"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faUnlock"],
          className: "text-success"
        }));

        if (row.lockDate === 1) {
          locked = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
            className: "btn btn-link",
            onClick: function onClick() {
              _this.unlockDate(row.id);
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faLock"],
            className: "text-danger"
          }));
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, dayjs__WEBPACK_IMPORTED_MODULE_13___default()(row.startDate * 1000).format('YYYY-MM-DD'), " ", locked);
      }
    }];
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Student, [{
    key: "finishOverlay",
    value: function finishOverlay() {
      this.overlayOff();
      this.load();
    }
  }, {
    key: "changeDiscount",
    value: function changeDiscount(key) {
      this.loadResource(key);
      this.setState({
        overlay: true,
        overlayType: 'discount'
      });
    }
  }, {
    key: "changeStartDate",
    value: function changeStartDate(key) {
      this.loadResource(key);
      this.setState({
        overlay: true,
        overlayType: 'startDate'
      });
    }
  }, {
    key: "hideStudent",
    value: function hideStudent(key) {
      this.loadResource(key);
      this.setState({
        overlay: true,
        overlayType: 'hide'
      });
    }
  }, {
    key: "revealStudent",
    value: function revealStudent(key) {
      this.loadResource(key);
      this.setState({
        overlay: true,
        overlayType: 'reveal'
      });
    }
  }, {
    key: "title",
    value: function title() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, "Students");
    }
  }, {
    key: "unlockDate",
    value: function unlockDate(id) {
      var _this2 = this;

      $.ajax({
        url: "conference/Admin/Student/".concat(id, "/unlockDate"),
        data: {},
        dataType: 'json',
        type: 'patch',
        success: function success() {
          _this2.load();
        },
        error: function error() {}
      });
    }
  }, {
    key: "hideOverlay",
    value: function hideOverlay() {
      var _this3 = this;

      return {
        width: '500px',
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_HideStudent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          studentId: this.state.resource.id,
          saved: function saved() {
            _this3.overlayOff();

            _this3.load();
          },
          close: this.overlayOff
        }),
        title: 'Hide student',
        close: this.finishOverlay
      };
    }
  }, {
    key: "discountOverlay",
    value: function discountOverlay() {
      var _this4 = this;

      return {
        width: '400px',
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_DiscountStudent__WEBPACK_IMPORTED_MODULE_11__["default"], {
          student: this.state.resource,
          saved: function saved() {
            _this4.overlayOff();

            _this4.load();
          },
          close: this.overlayOff
        }),
        title: 'Discount student',
        close: this.finishOverlay
      };
    }
  }, {
    key: "startDateOverlay",
    value: function startDateOverlay() {
      var _this5 = this;

      return {
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "student-form"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ChangeDate__WEBPACK_IMPORTED_MODULE_12__["default"], {
          close: this.overlayOff,
          student: this.state.resource,
          saved: function saved() {
            _this5.overlayOff();

            _this5.load();
          }
        })),
        title: 'Lock start date',
        close: this.load
      };
    }
  }, {
    key: "importOverlay",
    value: function importOverlay() {
      return {
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "student-form"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Create__WEBPACK_IMPORTED_MODULE_14__["default"], {
          close: this.overlayOff
        })),
        title: 'Import students',
        width: '100%',
        close: this.load
      };
    }
  }, {
    key: "revealOverlay",
    value: function revealOverlay() {
      var _this6 = this;

      return {
        width: '500px',
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_RevealStudent__WEBPACK_IMPORTED_MODULE_10__["default"], {
          studentId: this.state.resource.id,
          saved: function saved() {
            _this6.overlayOff();

            _this6.load();
          },
          close: this.overlayOff
        }),
        title: 'Reveal student',
        close: this.finishOverlay
      };
    }
  }, {
    key: "navbarButton",
    value: function navbarButton() {
      var label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faFileImport"]
      }), "\xA0Import");
      var button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_essappstate_react_navbar__WEBPACK_IMPORTED_MODULE_15__["NavbarButton"], {
        color: "success",
        label: label,
        handleClick: this.create
      });
      return button;
    }
  }, {
    key: "overlay",
    value: function overlay() {
      switch (this.state.overlayType) {
        case 'form':
          return this.importOverlay();

        case 'hide':
          return this.hideOverlay();

        case 'reveal':
          return this.revealOverlay();

        case 'discount':
          return this.discountOverlay();

        case 'startDate':
          return this.startDateOverlay();
      }
    }
  }]);

  return Student;
}(_essappstate_canopy_listing__WEBPACK_IMPORTED_MODULE_8___default.a);


react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Student, null), document.getElementById('Student'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TdHVkZW50L0Jhbm5lckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TdHVkZW50L0NoYW5nZURhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9TdHVkZW50L0NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1N0dWRlbnQvRGlzY291bnRTdHVkZW50LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvU3R1ZGVudC9IaWRlU3R1ZGVudC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1N0dWRlbnQvUmV2ZWFsU3R1ZGVudC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1N0dWRlbnQvaW5kZXguanN4Il0sIm5hbWVzIjpbIkJhbm5lckxpc3QiLCJsaXN0IiwidG9nZ2xlIiwiaW1wb3J0U3R1ZGVudHMiLCJpbXBvcnRBbGxTdHVkZW50cyIsImNoZWNrQWxsIiwidG9nZ2xlQWxsIiwidG90YWwiLCJsZW5ndGgiLCJyb3dzIiwibWFwIiwidmFsdWUiLCJrZXkiLCJiYW5uZXJfaWQiLCJpZCIsImNoZWNrZWQiLCJ1bmRlZmluZWQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiYmFubmVyX3VzZXJuYW1lIiwic3RhcnRfZGF0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiZnVuYyIsImJvb2wiLCJudW1iZXIiLCJDaGFuZ2VEYXRlIiwiY2xvc2UiLCJzdHVkZW50Iiwic2F2ZWQiLCJ1c2VTdGF0ZSIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsInVzZUVmZmVjdCIsInN0YXJ0RGF0ZU9iamVjdCIsIkRhdGUiLCJzYXZlRGF0ZSIsInVybCIsIiQiLCJhamF4IiwiZGF0YSIsImRhdGFUeXBlIiwidHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsInZhbCIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsIkNyZWF0ZSIsInNlYXJjaCIsInNldFNlYXJjaCIsInNlYXJjaGluZyIsInNldFNlYXJjaGluZyIsImJhbm5lckxpc3QiLCJzZXRCYW5uZXJMaXN0IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzZXRDaGVja0FsbCIsInNldFRvdGFsIiwic2VhcmNoVGltZW91dCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJsb2FkQmFubmVyU3R1ZGVudHMiLCJjbG9uZUxpc3QiLCJyb3ciLCJiYW5uZXIiLCJpbXBvcnRMaXN0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJwdXNoIiwicmVzZXQiLCJlIiwidGFyZ2V0Iiwib3ZlcmZsb3dZIiwiaGVpZ2h0IiwiRGlzY291bnRTdHVkZW50IiwiZGlzY291bnRBbW91bnQiLCJzZXRBbW91bnQiLCJkaXNjb3VudExhYmVsIiwic2V0TGFiZWwiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvciIsInNhdmUiLCJzZXREaXNjb3VudEFtb3VudCIsImNoZWNrQW1vdW50IiwibWF0Y2giLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIkhpZGVTdHVkZW50Iiwic3R1ZGVudElkIiwiaGlkZVN0dWRlbnQiLCJSZXZlYWxTdHVkZW50IiwicmV2ZWFsU3R1ZGVudCIsIlN0dWRlbnQiLCJwcm9wcyIsInJlc3RVcmwiLCJsYWJlbCIsImRlZmF1bHRSZXNvdXJjZSIsImJhbm5lcklkIiwidXNlcm5hbWUiLCJoaWRkZW4iLCJiaW5kIiwiZmluaXNoT3ZlcmxheSIsImNoYW5nZURpc2NvdW50IiwiY2hhbmdlU3RhcnREYXRlIiwiZGlzY291bnRPdmVybGF5Iiwic3RhcnREYXRlT3ZlcmxheSIsImNvbHVtbnMiLCJjb2x1bW4iLCJzb3J0IiwiY2FsbGJhY2siLCJsb2NrZWQiLCJmYVVubG9jayIsImxvY2tEYXRlIiwidW5sb2NrRGF0ZSIsImZhTG9jayIsImRheWpzIiwiZm9ybWF0Iiwib3ZlcmxheU9mZiIsImxvYWQiLCJsb2FkUmVzb3VyY2UiLCJzZXRTdGF0ZSIsIm92ZXJsYXkiLCJvdmVybGF5VHlwZSIsIndpZHRoIiwiY29udGVudCIsInN0YXRlIiwicmVzb3VyY2UiLCJ0aXRsZSIsImZhRmlsZUltcG9ydCIsImJ1dHRvbiIsImNyZWF0ZSIsImltcG9ydE92ZXJsYXkiLCJoaWRlT3ZlcmxheSIsInJldmVhbE92ZXJsYXkiLCJMaXN0aW5nIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBC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V0gsV0FBbkI7QUFDRSxhQUFLLE1BQUw7QUFDRSxpQkFBTyxLQUFLUyxhQUFMLEVBQVA7O0FBRUYsYUFBSyxNQUFMO0FBQ0UsaUJBQU8sS0FBS0MsV0FBTCxFQUFQOztBQUVGLGFBQUssUUFBTDtBQUNFLGlCQUFPLEtBQUtDLGFBQUwsRUFBUDs7QUFFRixhQUFLLFVBQUw7QUFDRSxpQkFBTyxLQUFLN0IsZUFBTCxFQUFQOztBQUVGLGFBQUssV0FBTDtBQUNFLGlCQUFPLEtBQUtDLGdCQUFMLEVBQVA7QUFkSjtBQWdCRDs7OztFQWpRa0M2QixrRTs7O0FBb1FyQ0MsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUFnQiwyREFBQyxPQUFELE9BQWhCLEVBQTZCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBN0IsRSIsImZpbGUiOiJTdHVkZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIlN0dWRlbnRcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2phdmFzY3JpcHQvU3R1ZGVudC9pbmRleC5qc3hcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBCYW5uZXJMaXN0ID0gKHtcbiAgbGlzdCxcbiAgdG9nZ2xlLFxuICBpbXBvcnRTdHVkZW50cyxcbiAgaW1wb3J0QWxsU3R1ZGVudHMsXG4gIGNoZWNrQWxsLFxuICB0b2dnbGVBbGwsXG4gIHRvdGFsXG59KSA9PiB7XG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiA8ZGl2PjwvZGl2PlxuICB9XG4gIGNvbnN0IHJvd3MgPSBsaXN0Lm1hcCgodmFsdWUsIGtleSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dHIga2V5PXt2YWx1ZS5iYW5uZXJfaWR9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgbmFtZT1cImJhbm5lclN0dWRlbnRbXVwiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWUuaWR9XG4gICAgICAgICAgICBjaGVja2VkPXt2YWx1ZS5jaGVja2VkICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuY2hlY2tlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGUoa2V5KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+e3ZhbHVlLmZpcnN0X25hbWV9PC90ZD5cbiAgICAgICAgPHRkPnt2YWx1ZS5sYXN0X25hbWV9PC90ZD5cbiAgICAgICAgPHRkPnt2YWx1ZS5iYW5uZXJfdXNlcm5hbWV9PC90ZD5cbiAgICAgICAgPHRkPnt2YWx1ZS5iYW5uZXJfaWR9PC90ZD5cbiAgICAgICAgPHRkPnt2YWx1ZS5zdGFydF9kYXRlfTwvdGQ+XG4gICAgICA8L3RyPlxuICAgIClcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPkJhbm5lciBzdHVkZW50cyAtIHt0b3RhbH0gdG90YWwgZm91bmQ8L2gzPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2NoZWNrQWxsfSBvbkNoYW5nZT17dG9nZ2xlQWxsfSAvPlxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aD5GaXJzdDwvdGg+XG4gICAgICAgICAgICA8dGg+TGFzdDwvdGg+XG4gICAgICAgICAgICA8dGg+VXNlcm5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoPkJhbm5lciBJRDwvdGg+XG4gICAgICAgICAgICA8dGg+U3RhcnQgZGF0ZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICB7cm93c31cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtci0yXCIgb25DbGljaz17aW1wb3J0U3R1ZGVudHN9PlxuICAgICAgICBJbXBvcnQgY2hlY2tlZCBzdHVkZW50c1xuICAgICAgPC9idXR0b24+XG4gICAgICB7Y2hlY2tBbGwgPyAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17aW1wb3J0QWxsU3R1ZGVudHN9PlxuICAgICAgICAgIEltcG9ydCBhbGwge3RvdGFsfSBzdHVkZW50c1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbkJhbm5lckxpc3QucHJvcFR5cGVzID0ge1xuICBsaXN0OiBQcm9wVHlwZXMuYXJyYXksXG4gIHRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGltcG9ydFN0dWRlbnRzOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW1wb3J0QWxsU3R1ZGVudHM6IFByb3BUeXBlcy5mdW5jLFxuICBjaGVja0FsbDogUHJvcFR5cGVzLmJvb2wsXG4gIHRvZ2dsZUFsbDogUHJvcFR5cGVzLmZ1bmMsXG4gIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lckxpc3RcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJ1xuaW1wb3J0ICdyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3MnXG5cbi8qIGdsb2JhbCAkICovXG5cbmNvbnN0IENoYW5nZURhdGUgPSAoe2Nsb3NlLCBzdHVkZW50LCBzYXZlZH0pID0+IHtcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKHN0dWRlbnQuc3RhcnREYXRlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0YXJ0RGF0ZShzdHVkZW50LnN0YXJ0RGF0ZSlcbiAgfSwgW3N0dWRlbnQuaWRdKVxuXG4gIGNvbnN0IHN0YXJ0RGF0ZU9iamVjdCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSAqIDEwMDApXG4gIGNvbnN0IHNhdmVEYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IGBjb25mZXJlbmNlL0FkbWluL1N0dWRlbnQvJHtzdHVkZW50LmlkfS9zdGFydERhdGVgXG4gICAgJC5hamF4KHtcbiAgICAgIHVybCxcbiAgICAgIGRhdGE6IHtzdGFydERhdGV9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdwYXRjaCcsXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgIHNhdmVkKClcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxwPlxuICAgICAgICBBIHN0dWRlbnQmYXBvcztzIHN0YXJ0IGRhdGUgd2lsbCBhdXRvbWF0aWNhbGx5IHVwZGF0ZSBlYWNoIHRpbWUgdGhlXG4gICAgICAgIHBhcmVudCBsb2dzIGluLlxuICAgICAgPC9wPlxuICAgICAgPHA+TG9ja2luZyBpbiB0aGUgc3RhcnQgZGF0ZSBoZXJlIHdpbGwgcHJldmVudCBhdXRvLXVwZGF0ZXMuPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICBzZWxlY3RlZD17c3RhcnREYXRlT2JqZWN0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiBzZXRTdGFydERhdGUodmFsIC8gMTAwMCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTSBkLCB5eXl5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG1yLTJcIiBvbkNsaWNrPXtzYXZlRGF0ZX0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbG9ja1wiPjwvaT4gTG9jayBkYXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e2Nsb3NlfT5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbkNoYW5nZURhdGUucHJvcFR5cGVzID0ge1xuICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHN0dWRlbnQ6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNhdmVkOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5DaGFuZ2VEYXRlLmRlZmF1bHRQcm9wcyA9IHt9XG5leHBvcnQgZGVmYXVsdCBDaGFuZ2VEYXRlXG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhbm5lckxpc3QgZnJvbSAnLi9CYW5uZXJMaXN0J1xuXG4vKiBnbG9iYWwgJCAqL1xuXG5jb25zdCBDcmVhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3NlYXJjaGluZywgc2V0U2VhcmNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbYmFubmVyTGlzdCwgc2V0QmFubmVyTGlzdF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjaGVja0FsbCwgc2V0Q2hlY2tBbGxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMClcblxuICBsZXQgc2VhcmNoVGltZW91dFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlYXJjaFRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dChzZWFyY2hUaW1lb3V0KVxuICAgIH1cbiAgICBpZiAoc2VhcmNoLmxlbmd0aCA8IDQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZWFyY2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsb2FkQmFubmVyU3R1ZGVudHMoc2VhcmNoKVxuICAgIH0sIDEwMDApXG4gIH0sIFtzZWFyY2hdKVxuXG4gIGNvbnN0IHRvZ2dsZSA9IGtleSA9PiB7XG4gICAgY29uc3QgY2xvbmVMaXN0ID0gWy4uLmJhbm5lckxpc3RdXG4gICAgY29uc3Qgcm93ID0gY2xvbmVMaXN0W2tleV1cbiAgICByb3cuY2hlY2tlZCA9IHJvdy5jaGVja2VkID09PSB1bmRlZmluZWQgfHwgcm93LmNoZWNrZWQgPT09IGZhbHNlXG4gICAgY2xvbmVMaXN0W2tleV0gPSByb3dcbiAgICBzZXRCYW5uZXJMaXN0KGNsb25lTGlzdClcbiAgfVxuXG4gIGNvbnN0IGxvYWRCYW5uZXJTdHVkZW50cyA9ICgpID0+IHtcbiAgICBzZXRCYW5uZXJMaXN0KFtdKVxuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdjb25mZXJlbmNlL0FkbWluL1N0dWRlbnQvYmFubmVyJyxcbiAgICAgIGRhdGE6IHtzZWFyY2h9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgIHNldFNlYXJjaGluZyhmYWxzZSlcbiAgICAgICAgc2V0VG90YWwoZGF0YS50b3RhbClcbiAgICAgICAgc2V0QmFubmVyTGlzdChkYXRhLmJhbm5lcilcbiAgICAgICAgaWYgKGRhdGEuYmFubmVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNldE1lc3NhZ2UoPHA+Tm8gc3R1ZGVudHMgZm91bmQ8L3A+KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldE1lc3NhZ2UoJycpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaW1wb3J0QWxsU3R1ZGVudHMgPSAoKSA9PiB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2NvbmZlcmVuY2UvQWRtaW4vU3R1ZGVudC9pbXBvcnRBbGwnLFxuICAgICAgZGF0YToge3NlYXJjaH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICBsb2FkQmFubmVyU3R1ZGVudHMoKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBpbXBvcnRTdHVkZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBpbXBvcnRMaXN0ID0gW11cblxuICAgIGJhbm5lckxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQgIT09IHVuZGVmaW5lZCAmJiBlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgaW1wb3J0TGlzdC5wdXNoKGVsZW1lbnQuYmFubmVyX2lkKVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKGltcG9ydExpc3QubGVuZ3RoID09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnY29uZmVyZW5jZS9BZG1pbi9TdHVkZW50L2ltcG9ydCcsXG4gICAgICBkYXRhOiB7aW1wb3J0TGlzdH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICBsb2FkQmFubmVyU3R1ZGVudHMoKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgIH0pXG4gIH1cblxuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBzZXRCYW5uZXJMaXN0KFtdKVxuICAgIHNldFNlYXJjaCgnJylcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZUFsbCA9ICgpID0+IHtcbiAgICBjb25zdCBjbG9uZUxpc3QgPSBbLi4uYmFubmVyTGlzdF1cbiAgICBjbG9uZUxpc3QuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgcm93LmNoZWNrZWQgPSAhY2hlY2tBbGxcbiAgICB9KVxuICAgIHNldEJhbm5lckxpc3QoY2xvbmVMaXN0KVxuICAgIHNldENoZWNrQWxsKCFjaGVja0FsbClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJhbm5lcklkXCI+PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIGRhdGUsIGJhbm5lciBpZCwgb3Igc3R1ZGVudCBuYW1lICg0IGNoYXJhY3RlciBtaW5pbXVtKVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiIG9uQ2xpY2s9e3Jlc2V0fT5cbiAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtzZWFyY2hpbmcgPyAnU2VhcmNoaW5nLi4uJyA6IG51bGx9XG4gICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgPGRpdiBzdHlsZT17e292ZXJmbG93WTogJ2F1dG8nLCBoZWlnaHQ6ICcxMDAlJ319PlxuICAgICAgICAgICAgPEJhbm5lckxpc3RcbiAgICAgICAgICAgICAgbGlzdD17YmFubmVyTGlzdH1cbiAgICAgICAgICAgICAgdG9nZ2xlPXt0b2dnbGV9XG4gICAgICAgICAgICAgIHRvdGFsPXt0b3RhbH1cbiAgICAgICAgICAgICAgaW1wb3J0U3R1ZGVudHM9e2ltcG9ydFN0dWRlbnRzfVxuICAgICAgICAgICAgICBpbXBvcnRBbGxTdHVkZW50cz17aW1wb3J0QWxsU3R1ZGVudHN9XG4gICAgICAgICAgICAgIGNoZWNrQWxsPXtjaGVja0FsbH1cbiAgICAgICAgICAgICAgdG9nZ2xlQWxsPXt0b2dnbGVBbGx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbkNyZWF0ZS5wcm9wVHlwZXMgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBEaXNjb3VudFN0dWRlbnQgPSAoe3N0dWRlbnQsIHNhdmVkLCBjbG9zZX0pID0+IHtcbiAgY29uc3QgW2Rpc2NvdW50QW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoc3R1ZGVudC5kaXNjb3VudEFtb3VudClcbiAgY29uc3QgW2Rpc2NvdW50TGFiZWwsIHNldExhYmVsXSA9IHVzZVN0YXRlKFxuICAgIHN0dWRlbnQuZGlzY291bnRMYWJlbCA9PT0gbnVsbCA/ICcnIDogc3R1ZGVudC5kaXNjb3VudExhYmVsXG4gIClcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBzYXZlID0gKCkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IGBjb25mZXJlbmNlL0FkbWluL1N0dWRlbnQvJHtzdHVkZW50LmlkfS9kaXNjb3VudGAsXG4gICAgICBkYXRhOiB7ZGlzY291bnRBbW91bnQsIGRpc2NvdW50TGFiZWx9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdwYXRjaCcsXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgIHNhdmVkKClcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgc2V0RGlzY291bnRBbW91bnQgPSBlID0+IHtcbiAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICBzZXRBbW91bnQodmFsdWUpXG4gIH1cblxuICBjb25zdCBjaGVja0Ftb3VudCA9ICgpID0+IHtcbiAgICBpZiAoZGlzY291bnRBbW91bnQubWF0Y2goL15cXGR7MSwzfShcXC5cXGR7Mn0pPyQvKSkge1xuICAgICAgc2V0RXJyb3IobnVsbClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+UGxlYXNlIGNoZWNrIHRoZSBhbW91bnQuPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGg0PlxuICAgICAgICBBcHBseSBkaXNjb3VudCB0byB7c3R1ZGVudC5maXJzdE5hbWV9IHtzdHVkZW50Lmxhc3ROYW1lfVxuICAgICAgPC9oND5cbiAgICAgIDxwPlxuICAgICAgICBBbnkgZGlzY291bnQgYXBwbGllZCB0byB0aGlzIHN0dWRlbnQgd2lsbCBiZSBpbiBlZmZlY3QgZm9yIGFueSBzZXNzaW9uLlxuICAgICAgPC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPGxhYmVsPkRpc2NvdW50IGFtb3VudDwvbGFiZWw+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaWQ9XCJiYXNpYy1hZGRvbjFcIj5cbiAgICAgICAgICAgICAgJFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG5hbWU9XCJkaXNjb3VudEFtb3VudFwiXG4gICAgICAgICAgICB2YWx1ZT17ZGlzY291bnRBbW91bnR9XG4gICAgICAgICAgICBvbkJsdXI9e2NoZWNrQW1vdW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldERpc2NvdW50QW1vdW50fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8bGFiZWw+RGlzY291bnQgbGFiZWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICBuYW1lPVwiZGlzY291bnRMYWJlbFwiXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TGFiZWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHZhbHVlPXtkaXNjb3VudExhYmVsfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17c2F2ZX0+XG4gICAgICAgICAgU2F2ZSBkaXNjb3VudFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpc2NvdW50U3R1ZGVudFxuXG5EaXNjb3VudFN0dWRlbnQucHJvcFR5cGVzID0ge1xuICBzdHVkZW50OiBQcm9wVHlwZXMub2JqZWN0XG59XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgSGlkZVN0dWRlbnQgPSAoe3N0dWRlbnRJZCwgc2F2ZWQsIGNsb3NlfSkgPT4ge1xuICBjb25zdCBoaWRlU3R1ZGVudCA9ICgpID0+IHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBgY29uZmVyZW5jZS9BZG1pbi9TdHVkZW50LyR7c3R1ZGVudElkfS9oaWRlYCxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB0eXBlOiAncGF0Y2gnLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICBzYXZlZCgpXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5cbiAgICAgICAgSGlkaW5nIGEgc3R1ZGVudCBwcmV2ZW50cyB0aGVpciBzdHVkZW50IHNlc3Npb24gZnJvbSBnZXR0aW5nIG1hdGNoZWQuXG4gICAgICA8L3A+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtci0yXCIgb25DbGljaz17aGlkZVN0dWRlbnR9PlxuICAgICAgICBZZXMsIEkgd2FudCB0byBoaWRlIHRoaXMgc3R1ZGVudFxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17Y2xvc2V9PlxuICAgICAgICBOZXZlcm1pbmRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkhpZGVTdHVkZW50LnByb3BUeXBlcyA9IHtcbiAgc2F2ZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHN0dWRlbnRJZDogUHJvcFR5cGVzLm51bWJlclxufVxuZXhwb3J0IGRlZmF1bHQgSGlkZVN0dWRlbnRcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBSZXZlYWxTdHVkZW50ID0gKHtzdHVkZW50SWQsIGNsb3NlLCBzYXZlZH0pID0+IHtcbiAgY29uc3QgcmV2ZWFsU3R1ZGVudCA9ICgpID0+IHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBgY29uZmVyZW5jZS9BZG1pbi9TdHVkZW50LyR7c3R1ZGVudElkfS9yZXZlYWxgLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHR5cGU6ICdwYXRjaCcsXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgIHNhdmVkKClcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPlxuICAgICAgICBSZXZlYWxpbmcgYSBzdHVkZW50IGFsbG93cyBwYXJlbnQgc2Vzc2lvbiBtYXRjaGluZy4gRG8gbm90IHJldmVhbCBhXG4gICAgICAgIHN0dWRlbnQgaWYgdGhleSBhcmUgdHJ5aW5nIHRvIG1haW50YWluIGEgcHJpdmF0ZSBhY2NvdW50LlxuICAgICAgPC9wPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXItMlwiIG9uQ2xpY2s9e3JldmVhbFN0dWRlbnR9PlxuICAgICAgICBZZXMsIEkgd2FudCB0byByZXZlYWwgdGhpcyBzdHVkZW50XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXtjbG9zZX0+XG4gICAgICAgIE5ldmVybWluZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUmV2ZWFsU3R1ZGVudC5wcm9wVHlwZXMgPSB7XG4gIHNhdmVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICBzdHVkZW50SWQ6IFByb3BUeXBlcy5udW1iZXJcbn1cbmV4cG9ydCBkZWZhdWx0IFJldmVhbFN0dWRlbnRcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBMaXN0aW5nIGZyb20gJ0Blc3NhcHBzdGF0ZS9jYW5vcHktbGlzdGluZydcbmltcG9ydCBIaWRlU3R1ZGVudCBmcm9tICcuL0hpZGVTdHVkZW50J1xuaW1wb3J0IFJldmVhbFN0dWRlbnQgZnJvbSAnLi9SZXZlYWxTdHVkZW50J1xuaW1wb3J0IERpc2NvdW50U3R1ZGVudCBmcm9tICcuL0Rpc2NvdW50U3R1ZGVudCdcbmltcG9ydCBDaGFuZ2VEYXRlIGZyb20gJy4vQ2hhbmdlRGF0ZSdcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCBDcmVhdGUgZnJvbSAnLi9DcmVhdGUnXG5pbXBvcnQge05hdmJhckJ1dHRvbn0gZnJvbSAnQGVzc2FwcHN0YXRlL3JlYWN0LW5hdmJhcidcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQge2ZhRmlsZUltcG9ydCwgZmFMb2NrLCBmYVVubG9ja30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuXG4vKiBnbG9iYWwgJCAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHVkZW50IGV4dGVuZHMgTGlzdGluZyB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5yZXN0VXJsID0gJ2NvbmZlcmVuY2UvQWRtaW4vU3R1ZGVudCdcbiAgICB0aGlzLmxhYmVsID0gJ1N0dWRlbnQnXG5cbiAgICB0aGlzLmRlZmF1bHRSZXNvdXJjZSA9IHtcbiAgICAgIGlkOiAwLFxuICAgICAgYmFubmVySWQ6ICcnLFxuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgIGhpZGRlbjogMCxcbiAgICAgIHN0YXJ0RGF0ZTogMCxcbiAgICAgIGRpc2NvdW50QW1vdW50OiAwLjAsXG4gICAgICBkaXNjb3VudExhYmVsOiAnJ1xuICAgIH1cblxuICAgIHRoaXMuaGlkZVN0dWRlbnQgPSB0aGlzLmhpZGVTdHVkZW50LmJpbmQodGhpcylcbiAgICB0aGlzLnJldmVhbFN0dWRlbnQgPSB0aGlzLnJldmVhbFN0dWRlbnQuYmluZCh0aGlzKVxuICAgIHRoaXMuZmluaXNoT3ZlcmxheSA9IHRoaXMuZmluaXNoT3ZlcmxheS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2VEaXNjb3VudCA9IHRoaXMuY2hhbmdlRGlzY291bnQuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlU3RhcnREYXRlID0gdGhpcy5jaGFuZ2VTdGFydERhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuZGlzY291bnRPdmVybGF5ID0gdGhpcy5kaXNjb3VudE92ZXJsYXkuYmluZCh0aGlzKVxuICAgIHRoaXMuc3RhcnREYXRlT3ZlcmxheSA9IHRoaXMuc3RhcnREYXRlT3ZlcmxheS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLmNvbHVtbnMgPSBbXG4gICAgICB7Y29sdW1uOiAnYmFubmVySWQnLCBsYWJlbDogJ0Jhbm5lciBJRCd9LFxuICAgICAge2NvbHVtbjogJ2ZpcnN0TmFtZScsIGxhYmVsOiAnRmlyc3QnfSxcbiAgICAgIHtjb2x1bW46ICdsYXN0TmFtZScsIGxhYmVsOiAnTGFzdCcsIHNvcnQ6IHRydWV9LFxuICAgICAge2NvbHVtbjogJ3VzZXJuYW1lJywgbGFiZWw6ICdVc2VybmFtZScsIHNvcnQ6IHRydWV9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICdwcm90ZWN0ZWQnLFxuICAgICAgICBsYWJlbDogJ0hpZGRlbicsXG4gICAgICAgIGNhbGxiYWNrOiAocm93LCBrZXkpID0+IHtcbiAgICAgICAgICBpZiAocm93LmhpZGRlbiA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oaWRlU3R1ZGVudC5iaW5kKHRoaXMsIGtleSl9PlxuICAgICAgICAgICAgICAgIEFjY2Vzc2libGVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmV2ZWFsU3R1ZGVudC5iaW5kKHRoaXMsIGtleSl9PlxuICAgICAgICAgICAgICAgIEhpZGRlblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbHVtbjogJ2Rpc2NvdW50JyxcbiAgICAgICAgbGFiZWw6ICdEaXNjb3VudCcsXG4gICAgICAgIGNhbGxiYWNrOiAocm93LCBrZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFyayBidG4tc21cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNoYW5nZURpc2NvdW50LmJpbmQodGhpcywga2V5KX0+XG4gICAgICAgICAgICAgICR7cm93LmRpc2NvdW50QW1vdW50fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2x1bW46ICdzdGFydERhdGUnLFxuICAgICAgICBsYWJlbDogJ1N0YXJ0IERhdGUnLFxuICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICBjYWxsYmFjazogKHJvdywga2V5KSA9PiB7XG4gICAgICAgICAgbGV0IGxvY2tlZCA9IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VTdGFydERhdGUuYmluZCh0aGlzLCBrZXkpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVubG9ja30gY2xhc3NOYW1lPVwidGV4dC1zdWNjZXNzXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAocm93LmxvY2tEYXRlID09PSAxKSB7XG4gICAgICAgICAgICBsb2NrZWQgPSAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudW5sb2NrRGF0ZShyb3cuaWQpXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxvY2t9IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7ZGF5anMocm93LnN0YXJ0RGF0ZSAqIDEwMDApLmZvcm1hdCgnWVlZWS1NTS1ERCcpfSB7bG9ja2VkfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgZmluaXNoT3ZlcmxheSgpIHtcbiAgICB0aGlzLm92ZXJsYXlPZmYoKVxuICAgIHRoaXMubG9hZCgpXG4gIH1cblxuICBjaGFuZ2VEaXNjb3VudChrZXkpIHtcbiAgICB0aGlzLmxvYWRSZXNvdXJjZShrZXkpXG4gICAgdGhpcy5zZXRTdGF0ZSh7b3ZlcmxheTogdHJ1ZSwgb3ZlcmxheVR5cGU6ICdkaXNjb3VudCd9KVxuICB9XG5cbiAgY2hhbmdlU3RhcnREYXRlKGtleSkge1xuICAgIHRoaXMubG9hZFJlc291cmNlKGtleSlcbiAgICB0aGlzLnNldFN0YXRlKHtvdmVybGF5OiB0cnVlLCBvdmVybGF5VHlwZTogJ3N0YXJ0RGF0ZSd9KVxuICB9XG5cbiAgaGlkZVN0dWRlbnQoa2V5KSB7XG4gICAgdGhpcy5sb2FkUmVzb3VyY2Uoa2V5KVxuICAgIHRoaXMuc2V0U3RhdGUoe292ZXJsYXk6IHRydWUsIG92ZXJsYXlUeXBlOiAnaGlkZSd9KVxuICB9XG4gIHJldmVhbFN0dWRlbnQoa2V5KSB7XG4gICAgdGhpcy5sb2FkUmVzb3VyY2Uoa2V5KVxuICAgIHRoaXMuc2V0U3RhdGUoe292ZXJsYXk6IHRydWUsIG92ZXJsYXlUeXBlOiAncmV2ZWFsJ30pXG4gIH1cblxuICB0aXRsZSgpIHtcbiAgICByZXR1cm4gPGgyPlN0dWRlbnRzPC9oMj5cbiAgfVxuXG4gIHVubG9ja0RhdGUoaWQpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBgY29uZmVyZW5jZS9BZG1pbi9TdHVkZW50LyR7aWR9L3VubG9ja0RhdGVgLFxuICAgICAgZGF0YToge30sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdHlwZTogJ3BhdGNoJyxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkKClcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9KVxuICB9XG5cbiAgaGlkZU92ZXJsYXkoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiAnNTAwcHgnLFxuICAgICAgY29udGVudDogKFxuICAgICAgICA8SGlkZVN0dWRlbnRcbiAgICAgICAgICBzdHVkZW50SWQ9e3RoaXMuc3RhdGUucmVzb3VyY2UuaWR9XG4gICAgICAgICAgc2F2ZWQ9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheU9mZigpXG4gICAgICAgICAgICB0aGlzLmxvYWQoKVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xvc2U9e3RoaXMub3ZlcmxheU9mZn1cbiAgICAgICAgLz5cbiAgICAgICksXG4gICAgICB0aXRsZTogJ0hpZGUgc3R1ZGVudCcsXG4gICAgICBjbG9zZTogdGhpcy5maW5pc2hPdmVybGF5XG4gICAgfVxuICB9XG5cbiAgZGlzY291bnRPdmVybGF5KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogJzQwMHB4JyxcbiAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgPERpc2NvdW50U3R1ZGVudFxuICAgICAgICAgIHN0dWRlbnQ9e3RoaXMuc3RhdGUucmVzb3VyY2V9XG4gICAgICAgICAgc2F2ZWQ9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheU9mZigpXG4gICAgICAgICAgICB0aGlzLmxvYWQoKVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xvc2U9e3RoaXMub3ZlcmxheU9mZn1cbiAgICAgICAgLz5cbiAgICAgICksXG4gICAgICB0aXRsZTogJ0Rpc2NvdW50IHN0dWRlbnQnLFxuICAgICAgY2xvc2U6IHRoaXMuZmluaXNoT3ZlcmxheVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0RGF0ZU92ZXJsYXkoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHVkZW50LWZvcm1cIj5cbiAgICAgICAgICA8Q2hhbmdlRGF0ZVxuICAgICAgICAgICAgY2xvc2U9e3RoaXMub3ZlcmxheU9mZn1cbiAgICAgICAgICAgIHN0dWRlbnQ9e3RoaXMuc3RhdGUucmVzb3VyY2V9XG4gICAgICAgICAgICBzYXZlZD17KCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlPZmYoKVxuICAgICAgICAgICAgICB0aGlzLmxvYWQoKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICksXG4gICAgICB0aXRsZTogJ0xvY2sgc3RhcnQgZGF0ZScsXG4gICAgICBjbG9zZTogdGhpcy5sb2FkXG4gICAgfVxuICB9XG5cbiAgaW1wb3J0T3ZlcmxheSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGVudDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0dWRlbnQtZm9ybVwiPlxuICAgICAgICAgIDxDcmVhdGUgY2xvc2U9e3RoaXMub3ZlcmxheU9mZn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApLFxuICAgICAgdGl0bGU6ICdJbXBvcnQgc3R1ZGVudHMnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGNsb3NlOiB0aGlzLmxvYWRcbiAgICB9XG4gIH1cblxuICByZXZlYWxPdmVybGF5KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogJzUwMHB4JyxcbiAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgPFJldmVhbFN0dWRlbnRcbiAgICAgICAgICBzdHVkZW50SWQ9e3RoaXMuc3RhdGUucmVzb3VyY2UuaWR9XG4gICAgICAgICAgc2F2ZWQ9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheU9mZigpXG4gICAgICAgICAgICB0aGlzLmxvYWQoKVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xvc2U9e3RoaXMub3ZlcmxheU9mZn1cbiAgICAgICAgLz5cbiAgICAgICksXG4gICAgICB0aXRsZTogJ1JldmVhbCBzdHVkZW50JyxcbiAgICAgIGNsb3NlOiB0aGlzLmZpbmlzaE92ZXJsYXlcbiAgICB9XG4gIH1cblxuICBuYXZiYXJCdXR0b24oKSB7XG4gICAgY29uc3QgbGFiZWwgPSAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZpbGVJbXBvcnR9IC8+XG4gICAgICAgICZuYnNwO0ltcG9ydFxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgICBjb25zdCBidXR0b24gPSAoXG4gICAgICA8TmF2YmFyQnV0dG9uIGNvbG9yPVwic3VjY2Vzc1wiIGxhYmVsPXtsYWJlbH0gaGFuZGxlQ2xpY2s9e3RoaXMuY3JlYXRlfSAvPlxuICAgIClcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBvdmVybGF5KCkge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5vdmVybGF5VHlwZSkge1xuICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgIHJldHVybiB0aGlzLmltcG9ydE92ZXJsYXkoKVxuXG4gICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlkZU92ZXJsYXkoKVxuXG4gICAgICBjYXNlICdyZXZlYWwnOlxuICAgICAgICByZXR1cm4gdGhpcy5yZXZlYWxPdmVybGF5KClcblxuICAgICAgY2FzZSAnZGlzY291bnQnOlxuICAgICAgICByZXR1cm4gdGhpcy5kaXNjb3VudE92ZXJsYXkoKVxuXG4gICAgICBjYXNlICdzdGFydERhdGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5zdGFydERhdGVPdmVybGF5KClcbiAgICB9XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTdHVkZW50IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnU3R1ZGVudCcpKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==