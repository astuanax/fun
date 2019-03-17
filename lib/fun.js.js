(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fun.js", [], factory);
	else if(typeof exports === 'object')
		exports["fun.js"] = factory();
	else
		root["fun.js"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_private/curry1.js":
/*!********************************!*\
  !*** ./src/_private/curry1.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = curry1;

/**
 * Returns a curried function with arity 1
 * @function curry1
 * @private
 * @since v1.0.2
 **/
function curry1(fn) {
  return function curried(a) {
    return arguments.length === 0 ? this : fn(a);
  };
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/array/equals.js":
/*!*****************************!*\
  !*** ./src/array/equals.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ../util/not */ "./src/util/not.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ../util/equals */ "./src/util/equals.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * @function equalsArray
 * @description Autocurried function for deep comparison of arrays
 * @param {a} x - Object to compare of type a
 * @param {a} y - Object x to compare with object x
 * @return {boolean}
 */
var _default = (0, _curry.default)(function equalsArray(x, y) {
  if (x.length !== y.length) {
    return false;
  }

  for (var i = 0; i < x.length; i++) {
    if ((0, _not.default)((0, _equals.default)(x[i], y[i]))) return false;
  }

  return true;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/array/fold.js":
/*!***************************!*\
  !*** ./src/array/fold.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * @function fold
 * @description Returns a single item by mapping over the provided array and calling an iterator function
 * @param {cbFunction} cb - Callback function to modify the item
 * @param {*} init - Initial value
 * @param {Array} a - Array with items to modify by the cb function
 * @return {Array}
 * @alias reduce
 * @since 1.0.2
 * @example
 *
 * const result = fold(add, 0, [1,1,1])
 * // result = 3
 */

/**
 * @callback cbFunction
 * @param {*} r - Accumulator which accumulates the callback's return values
 * @param {*} item - the current element being processed
 * @param {number} index - the indey of the item being processed
 * @param {Array} a - The initial array
 * @return {*}
 */
var _default = (0, _curry.default)(function fold(cb, init, a) {
  var i = -1;
  var l = a.length;
  var r = init;

  while (++i < l) {
    r = cb(r, a[i], i, a);
  }

  return r;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/array/is.js":
/*!*************************!*\
  !*** ./src/array/is.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _is = _interopRequireDefault(__webpack_require__(/*! ../util/is */ "./src/util/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if the provided object is an array, autocurried function
 *
 * @private
 * @function isArray
 * @description Checks if the provided object is an array, autocurried function
 * @param {*} Object to verifiy
 * @return {boolean}
 * @since 1.0.2
 * @example
 *
 * const result = isArray([1,1,1])
 * // result = true
 */
var _default = (0, _is.default)('Array');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/array/map.js":
/*!**************************!*\
  !*** ./src/array/map.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function map
 * @description Maps over an array and applies a function
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Iterable}
 * @since v1.0.2
 * @example
 *
 *  const result = map(identity, [0,2,3])
 *  // result = [0,2,3]
 *  const add2 = add(2)
 *  const result = map(add2, [0,2,3])
 *  // result = [2,4,5]
 **/
var _default = (0, _curry.default)(function map(cb, a) {
  var i = -1;
  var l = a.length;
  var r = new Array(l);

  while (++i < l) {
    r[i] = cb(a[i], i, a);
  }

  return r;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/array/to.js":
/*!*************************!*\
  !*** ./src/array/to.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toArray;

/**
 * @function toArray
 * @description Converts the input to an array
 * @param {ArrayLike} x - Object to convert to an array
 * @return {Array}
 * @since 1.0.2
 * @example
 *
 * const result = toArray("string")
 * // result = ['s','t','r','i','n','g']
 *
 * function () {
 *  const args = toArray(arguments)
 *  console.log(typeof args) // Array
 * }
 *
 **/
function toArray(x) {
  return x.length === 1 ? [x[0]] : Array.apply(null, x);
}

;
module.exports = exports["default"];

/***/ }),

/***/ "./src/array/union.js":
/*!****************************!*\
  !*** ./src/array/union.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function unionArray
 * @description Merges 2 arrays
 * @param {Array} aL - Array to merge
 * @param {Array} aR - Array to merge
 * @return {Array}
 * @since 1.0.2
 * @example
 *
 * const result = unionArray([0,1,2], [3,4,5])
 * // result = [0.1.2.3.4.5]
 **/
var _default = (0, _curry.default)(function unionArray(aL, aR) {
  return Array.from(new Set(aL.concat(aR)));
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/boolean/F.js":
/*!**************************!*\
  !*** ./src/boolean/F.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _always = _interopRequireDefault(__webpack_require__(/*! ../util/always */ "./src/util/always.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Always returns a function with a False boolean
 *
 * @function F
 * @description Always returns a function with a False boolean
 * @since v1.0.2
 * @param {*} a
 * @return {Function}
 **/
var _default = (0, _always.default)(false);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/boolean/T.js":
/*!**************************!*\
  !*** ./src/boolean/T.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _always = _interopRequireDefault(__webpack_require__(/*! ../util/always */ "./src/util/always.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Always returns a function with a False boolean
 *
 * @function T
 * @description Always returns a function with a False boolean
 * @since v1.0.2
 * @param {*} a
 * @return {Function}
 **/
var _default = (0, _always.default)(true);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/boolean/is.js":
/*!***************************!*\
  !*** ./src/boolean/is.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _is = _interopRequireDefault(__webpack_require__(/*! ../util/is */ "./src/util/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Curried function that verifies of the provided argument is a boolean
 *
 * @private
 * @function is
 * @description Curried function that verifies of the provided argument is a boolean
 * @since v1.0.2
 * @param {*} Item to verify
 * @return {boolean}
 **/
var _default = (0, _is.default)('Boolean');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/constants/DATE_TOKENS.js":
/*!**************************************!*\
  !*** ./src/constants/DATE_TOKENS.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATE_TOKENS = void 0;

/**
 * @private
 */
// date/time regex
// eslint-disable-next-line no-useless-escape
var DATE_TOKENS = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
exports.DATE_TOKENS = DATE_TOKENS;

/***/ }),

/***/ "./src/constants/MONTHS.js":
/*!*********************************!*\
  !*** ./src/constants/MONTHS.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MONTHS = void 0;

/**
 * @private
 */
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
exports.MONTHS = MONTHS;

/***/ }),

/***/ "./src/constants/WEEKDAYS.js":
/*!***********************************!*\
  !*** ./src/constants/WEEKDAYS.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEEKDAYS = void 0;

/**
 * @private
 */
var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
exports.WEEKDAYS = WEEKDAYS;

/***/ }),

/***/ "./src/date/diffDate.js":
/*!******************************!*\
  !*** ./src/date/diffDate.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function diffDate
 * @description Returns the difference between 2 dates in millisecond
 * @param {Date} start - Start date
 * @param {Date} end - End date
 * @return {number} REturn the difference in milliseconds
 */
var _default = (0, _curry.default)(function diffDate(start, end) {
  return new Date(start).getTime() - new Date(end).getTime();
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/date/formatDateTime.js":
/*!************************************!*\
  !*** ./src/date/formatDateTime.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _isValid = _interopRequireDefault(__webpack_require__(/*! ./isValid */ "./src/date/isValid.js"));

var _getWeek = _interopRequireDefault(__webpack_require__(/*! ./getWeek */ "./src/date/getWeek.js"));

var _WEEKDAYS = __webpack_require__(/*! ../constants/WEEKDAYS */ "./src/constants/WEEKDAYS.js");

var _MONTHS = __webpack_require__(/*! ../constants/MONTHS */ "./src/constants/MONTHS.js");

var _DATE_TOKENS = __webpack_require__(/*! ../constants/DATE_TOKENS */ "./src/constants/DATE_TOKENS.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */

/**
 * Created by dierickx.len on 20/01/2017.
 */
// utility functions for the date formatting
var ZEROS = '00000000';
var lastN = (0, _curry.default)(function (n, str) {
  return str.substring(str.length - n, str.length);
});
var firstN = (0, _curry.default)(function (n, str) {
  return str.substring(0, n);
});
var fill = (0, _curry.default)(function (digits, n) {
  return lastN(digits, ZEROS + n);
});

var modCeiling = function modCeiling(mod, val) {
  return val % mod || mod;
}; // tokens map to get parts of the date /time


var tokens = {
  YYYY: function YYYY(d) {
    return fill(4, d.getFullYear());
  },
  YY: function YY(d) {
    return lastN(2, fill(4, d.getFullYear()));
  },
  MMMM: function MMMM(d) {
    return _MONTHS.MONTHS[d.getMonth()];
  },
  MMM: function MMM(d) {
    return firstN(3, _MONTHS.MONTHS[d.getMonth()]);
  },
  MM: function MM(d) {
    return fill(2, d.getMonth() + 1);
  },
  M: function M(d) {
    return d.getMonth() + 1;
  },
  w: function w(d) {
    return (0, _getWeek.default)(d);
  },
  ww: function ww(d) {
    return fill(2, (0, _getWeek.default)(d));
  },
  DD: function DD(d) {
    return fill(2, d.getDate());
  },
  D: function D(d) {
    return d.getDate();
  },
  dddd: function dddd(d) {
    return _WEEKDAYS.WEEKDAYS[d.getDay()];
  },
  ddd: function ddd(d) {
    return firstN(3, _WEEKDAYS.WEEKDAYS[d.getDay()]);
  },
  dd: function dd(d) {
    return firstN(2, _WEEKDAYS.WEEKDAYS[d.getDay()]);
  },
  d: function d(_d) {
    return _d.getDay();
  },
  HH: function HH(d) {
    return fill(2, d.getHours());
  },
  H: function H(d) {
    return d.getHours();
  },
  hh: function hh(d) {
    return fill(2, modCeiling(12, d.getHours()));
  },
  h: function h(d) {
    return modCeiling(12, d.getHours());
  },
  mm: function mm(d) {
    return fill(2, d.getMinutes());
  },
  m: function m(d) {
    return d.getMinutes();
  },
  ss: function ss(d) {
    return fill(2, d.getSeconds());
  },
  s: function s(d) {
    return d.getSeconds();
  },
  A: function A(d) {
    return d.getHours() > 11 ? 'PM' : 'AM';
  },
  a: function a(d) {
    return d.getHours() > 11 ? 'pm' : 'am';
  },
  SSS: function SSS(d) {
    return fill(3, d.getMilliseconds());
  },
  SS: function SS(d) {
    return firstN(2, fill(3, d.getMilliseconds()));
  },
  S: function S(d) {
    return firstN(1, fill(3, d.getMilliseconds()));
  },
  Q: function Q(d) {
    return Math.ceil((d.getMonth() + 1) / 3);
  } // map this function to get the actual time/date value for each token

};
var swapTokenWithValue = (0, _curry.default)(function (date, token) {
  return tokens[token] ? tokens[token](date) : token;
});
/**
 * @function formatDateTime
 * @description Formats a date object using a format string
 * @param {string} format - Format date string
 * @param {date} date - Date object to format
 * @return {string}
 * @example
 *
 * const formattedDate = formatDateTime('DD-MM-YYYY', new Date('1999-12-31'))
 * console.log(formattedDate) // 31-12-1999
 */

var _default = (0, _curry.default)(function formatDateTime(format, date) {
  // check for valid date
  if (!(0, _isValid.default)(date)) return 'Invalid Date'; // return string

  return format.match(_DATE_TOKENS.DATE_TOKENS).map(swapTokenWithValue(date)).join(''); // return joined string
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/date/getWeek.js":
/*!*****************************!*\
  !*** ./src/date/getWeek.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function getWeek
 * @description Returns the week number based on a given date
 * @param d
 * @returns {number[]}
 */
var _default = (0, _curry.default)(function getWeek(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())); // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7

  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7)); // Get first day of year

  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)); // Calculate full weeks to nearest Thursday

  var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7); // Return array of year and week number

  return [d.getUTCFullYear(), weekNo];
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/date/is.js":
/*!************************!*\
  !*** ./src/date/is.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _is = _interopRequireDefault(__webpack_require__(/*! ../util/is */ "./src/util/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dierickx.len on 01/04/2017.
 */

/**
 * Created by dierickx.len on 01/04/2017.
 */
var _default = (0, _is.default)('Date');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/date/isFutureDate.js":
/*!**********************************!*\
  !*** ./src/date/isFutureDate.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _diffDate = _interopRequireDefault(__webpack_require__(/*! ./diffDate */ "./src/date/diffDate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dierickx.len on 09/03/2017.
 */
var _default = function _default(d) {
  return (0, _diffDate.default)(new Date())(d) < 0;
};

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/date/isValid.js":
/*!*****************************!*\
  !*** ./src/date/isValid.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValid;

var _is = _interopRequireDefault(__webpack_require__(/*! ./is */ "./src/date/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 */
function isValid(x) {
  // noinspection JSCheckFunctionSignatures
  return (0, _is.default)(x) && isFinite(x.valueOf());
}

;
module.exports = exports["default"];

/***/ }),

/***/ "./src/date/toDay.js":
/*!***************************!*\
  !*** ./src/date/toDay.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Created by dierickx.len on 26/03/2017.
 */
var _default = function _default(d) {
  return d / 86400000;
}; // 24*60*60*1000 = 86400000


exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/date/toHour.js":
/*!****************************!*\
  !*** ./src/date/toHour.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Created by dierickx.len on 26/03/2017.
 */
var _default = function _default(d) {
  return d / 3600000;
}; // 60*60*1000 = 3600000


exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/date/toMinutes.js":
/*!*******************************!*\
  !*** ./src/date/toMinutes.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Created by dierickx.len on 26/03/2017.
 */
var _default = function _default(d) {
  return d / 60000;
}; // 60*1000 = 60000


exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/date/toSeconds.js":
/*!*******************************!*\
  !*** ./src/date/toSeconds.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Created by dierickx.len on 26/03/2017.
 */
var _default = function _default(d) {
  return d / 1000;
};

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "equalsArray", {
  enumerable: true,
  get: function get() {
    return _equals.default;
  }
});
Object.defineProperty(exports, "isArray", {
  enumerable: true,
  get: function get() {
    return _is.default;
  }
});
Object.defineProperty(exports, "toArray", {
  enumerable: true,
  get: function get() {
    return _to.default;
  }
});
Object.defineProperty(exports, "unionArray", {
  enumerable: true,
  get: function get() {
    return _union.default;
  }
});
Object.defineProperty(exports, "isBoolean", {
  enumerable: true,
  get: function get() {
    return _is2.default;
  }
});
Object.defineProperty(exports, "F", {
  enumerable: true,
  get: function get() {
    return _F.default;
  }
});
Object.defineProperty(exports, "T", {
  enumerable: true,
  get: function get() {
    return _T.default;
  }
});
Object.defineProperty(exports, "Just", {
  enumerable: true,
  get: function get() {
    return _Just.default;
  }
});
Object.defineProperty(exports, "Maybe", {
  enumerable: true,
  get: function get() {
    return _Maybe.default;
  }
});
Object.defineProperty(exports, "Nothing", {
  enumerable: true,
  get: function get() {
    return _Nothing.default;
  }
});
Object.defineProperty(exports, "isNumber", {
  enumerable: true,
  get: function get() {
    return _is3.default;
  }
});
Object.defineProperty(exports, "isNan", {
  enumerable: true,
  get: function get() {
    return _isNan.default;
  }
});
Object.defineProperty(exports, "add", {
  enumerable: true,
  get: function get() {
    return _add.default;
  }
});
Object.defineProperty(exports, "multiply", {
  enumerable: true,
  get: function get() {
    return _multiply.default;
  }
});
Object.defineProperty(exports, "divide", {
  enumerable: true,
  get: function get() {
    return _divide.default;
  }
});
Object.defineProperty(exports, "equalsObject", {
  enumerable: true,
  get: function get() {
    return _equals2.default;
  }
});
Object.defineProperty(exports, "isObject", {
  enumerable: true,
  get: function get() {
    return _is4.default;
  }
});
Object.defineProperty(exports, "mergeObject", {
  enumerable: true,
  get: function get() {
    return _merge.default;
  }
});
Object.defineProperty(exports, "omitFromObject", {
  enumerable: true,
  get: function get() {
    return _omit.default;
  }
});
Object.defineProperty(exports, "has", {
  enumerable: true,
  get: function get() {
    return _has.default;
  }
});
Object.defineProperty(exports, "hasIn", {
  enumerable: true,
  get: function get() {
    return _hasIn.default;
  }
});
Object.defineProperty(exports, "keys", {
  enumerable: true,
  get: function get() {
    return _keys.default;
  }
});
Object.defineProperty(exports, "keysIn", {
  enumerable: true,
  get: function get() {
    return _keysIn.default;
  }
});
Object.defineProperty(exports, "filterObject", {
  enumerable: true,
  get: function get() {
    return _filter.default;
  }
});
Object.defineProperty(exports, "foldObject", {
  enumerable: true,
  get: function get() {
    return _fold.default;
  }
});
Object.defineProperty(exports, "mapObject", {
  enumerable: true,
  get: function get() {
    return _map.default;
  }
});
Object.defineProperty(exports, "path", {
  enumerable: true,
  get: function get() {
    return _path.default;
  }
});
Object.defineProperty(exports, "pick", {
  enumerable: true,
  get: function get() {
    return _pick.default;
  }
});
Object.defineProperty(exports, "prop", {
  enumerable: true,
  get: function get() {
    return _prop.default;
  }
});
Object.defineProperty(exports, "concatString", {
  enumerable: true,
  get: function get() {
    return _concat.default;
  }
});
Object.defineProperty(exports, "formatString", {
  enumerable: true,
  get: function get() {
    return _formatString.default;
  }
});
Object.defineProperty(exports, "isString", {
  enumerable: true,
  get: function get() {
    return _is5.default;
  }
});
Object.defineProperty(exports, "mapFilter", {
  enumerable: true,
  get: function get() {
    return _filter2.default;
  }
});
Object.defineProperty(exports, "isMap", {
  enumerable: true,
  get: function get() {
    return _is6.default;
  }
});
Object.defineProperty(exports, "mapKeys", {
  enumerable: true,
  get: function get() {
    return _keys2.default;
  }
});
Object.defineProperty(exports, "mapMap", {
  enumerable: true,
  get: function get() {
    return _map2.default;
  }
});
Object.defineProperty(exports, "adjust", {
  enumerable: true,
  get: function get() {
    return _adjust.default;
  }
});
Object.defineProperty(exports, "adjustWith", {
  enumerable: true,
  get: function get() {
    return _adjustWith.default;
  }
});
Object.defineProperty(exports, "all", {
  enumerable: true,
  get: function get() {
    return _all.default;
  }
});
Object.defineProperty(exports, "allPass", {
  enumerable: true,
  get: function get() {
    return _allPass.default;
  }
});
Object.defineProperty(exports, "always", {
  enumerable: true,
  get: function get() {
    return _always.default;
  }
});
Object.defineProperty(exports, "and", {
  enumerable: true,
  get: function get() {
    return _and.default;
  }
});
Object.defineProperty(exports, "any", {
  enumerable: true,
  get: function get() {
    return _any.default;
  }
});
Object.defineProperty(exports, "anyPass", {
  enumerable: true,
  get: function get() {
    return _anyPass.default;
  }
});
Object.defineProperty(exports, "ap", {
  enumerable: true,
  get: function get() {
    return _ap.default;
  }
});
Object.defineProperty(exports, "compose", {
  enumerable: true,
  get: function get() {
    return _compose.default;
  }
});
Object.defineProperty(exports, "curry", {
  enumerable: true,
  get: function get() {
    return _curry.default;
  }
});
Object.defineProperty(exports, "defaultTo", {
  enumerable: true,
  get: function get() {
    return _defaultTo.default;
  }
});
Object.defineProperty(exports, "empty", {
  enumerable: true,
  get: function get() {
    return _empty.default;
  }
});
Object.defineProperty(exports, "equals", {
  enumerable: true,
  get: function get() {
    return _equals3.default;
  }
});
Object.defineProperty(exports, "exists", {
  enumerable: true,
  get: function get() {
    return _exists.default;
  }
});
Object.defineProperty(exports, "findIndex", {
  enumerable: true,
  get: function get() {
    return _findIndex.default;
  }
});
Object.defineProperty(exports, "fold", {
  enumerable: true,
  get: function get() {
    return _fold2.default;
  }
});
Object.defineProperty(exports, "identical", {
  enumerable: true,
  get: function get() {
    return _identical.default;
  }
});
Object.defineProperty(exports, "identity", {
  enumerable: true,
  get: function get() {
    return _identity.default;
  }
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function get() {
    return _is7.default;
  }
});
Object.defineProperty(exports, "isEmpty", {
  enumerable: true,
  get: function get() {
    return _isEmpty.default;
  }
});
Object.defineProperty(exports, "lift", {
  enumerable: true,
  get: function get() {
    return _lift.default;
  }
});
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function get() {
    return _map3.default;
  }
});
Object.defineProperty(exports, "max", {
  enumerable: true,
  get: function get() {
    return _max.default;
  }
});
Object.defineProperty(exports, "not", {
  enumerable: true,
  get: function get() {
    return _not.default;
  }
});
Object.defineProperty(exports, "or", {
  enumerable: true,
  get: function get() {
    return _or.default;
  }
});
Object.defineProperty(exports, "truthy", {
  enumerable: true,
  get: function get() {
    return _truthy.default;
  }
});
Object.defineProperty(exports, "type", {
  enumerable: true,
  get: function get() {
    return _type.default;
  }
});
Object.defineProperty(exports, "zip", {
  enumerable: true,
  get: function get() {
    return _zip.default;
  }
});
Object.defineProperty(exports, "zipWith", {
  enumerable: true,
  get: function get() {
    return _zipWith.default;
  }
});
Object.defineProperty(exports, "diffDate", {
  enumerable: true,
  get: function get() {
    return _diffDate.default;
  }
});
Object.defineProperty(exports, "formatDateTime", {
  enumerable: true,
  get: function get() {
    return _formatDateTime.default;
  }
});
Object.defineProperty(exports, "dateIs", {
  enumerable: true,
  get: function get() {
    return _is8.default;
  }
});
Object.defineProperty(exports, "isFutureDate", {
  enumerable: true,
  get: function get() {
    return _isFutureDate.default;
  }
});
Object.defineProperty(exports, "isValid", {
  enumerable: true,
  get: function get() {
    return _isValid.default;
  }
});
Object.defineProperty(exports, "toDay", {
  enumerable: true,
  get: function get() {
    return _toDay.default;
  }
});
Object.defineProperty(exports, "toHour", {
  enumerable: true,
  get: function get() {
    return _toHour.default;
  }
});
Object.defineProperty(exports, "toMinutes", {
  enumerable: true,
  get: function get() {
    return _toMinutes.default;
  }
});
Object.defineProperty(exports, "toSeconds", {
  enumerable: true,
  get: function get() {
    return _toSeconds.default;
  }
});
Object.defineProperty(exports, "getWeek", {
  enumerable: true,
  get: function get() {
    return _getWeek.default;
  }
});

var _equals = _interopRequireDefault(__webpack_require__(/*! array/equals */ "./src/array/equals.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! array/is */ "./src/array/is.js"));

var _to = _interopRequireDefault(__webpack_require__(/*! array/to */ "./src/array/to.js"));

var _union = _interopRequireDefault(__webpack_require__(/*! array/union */ "./src/array/union.js"));

var _is2 = _interopRequireDefault(__webpack_require__(/*! boolean/is */ "./src/boolean/is.js"));

var _F = _interopRequireDefault(__webpack_require__(/*! boolean/F */ "./src/boolean/F.js"));

var _T = _interopRequireDefault(__webpack_require__(/*! boolean/T */ "./src/boolean/T.js"));

var _Just = _interopRequireDefault(__webpack_require__(/*! monads/Just */ "./src/monads/Just.js"));

var _Maybe = _interopRequireDefault(__webpack_require__(/*! monads/Maybe */ "./src/monads/Maybe.js"));

var _Nothing = _interopRequireDefault(__webpack_require__(/*! monads/Nothing */ "./src/monads/Nothing.js"));

var _is3 = _interopRequireDefault(__webpack_require__(/*! number/is */ "./src/number/is.js"));

var _isNan = _interopRequireDefault(__webpack_require__(/*! number/isNan */ "./src/number/isNan.js"));

var _add = _interopRequireDefault(__webpack_require__(/*! number/add */ "./src/number/add.js"));

var _multiply = _interopRequireDefault(__webpack_require__(/*! number/multiply */ "./src/number/multiply.js"));

var _divide = _interopRequireDefault(__webpack_require__(/*! number/divide */ "./src/number/divide.js"));

var _equals2 = _interopRequireDefault(__webpack_require__(/*! object/equals */ "./src/object/equals.js"));

var _is4 = _interopRequireDefault(__webpack_require__(/*! object/is */ "./src/object/is.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! object/merge */ "./src/object/merge.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! object/omit */ "./src/object/omit.js"));

var _has = _interopRequireDefault(__webpack_require__(/*! object/has */ "./src/object/has.js"));

var _hasIn = _interopRequireDefault(__webpack_require__(/*! object/hasIn */ "./src/object/hasIn.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! object/keys */ "./src/object/keys.js"));

var _keysIn = _interopRequireDefault(__webpack_require__(/*! object/keysIn */ "./src/object/keysIn.js"));

var _filter = _interopRequireDefault(__webpack_require__(/*! object/filter */ "./src/object/filter.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! object/fold */ "./src/object/fold.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! object/map */ "./src/object/map.js"));

var _path = _interopRequireDefault(__webpack_require__(/*! object/path */ "./src/object/path.js"));

var _pick = _interopRequireDefault(__webpack_require__(/*! object/pick */ "./src/object/pick.js"));

var _prop = _interopRequireDefault(__webpack_require__(/*! object/prop */ "./src/object/prop.js"));

var _concat = _interopRequireDefault(__webpack_require__(/*! string/concat */ "./src/string/concat.js"));

var _formatString = _interopRequireDefault(__webpack_require__(/*! string/formatString */ "./src/string/formatString.js"));

var _is5 = _interopRequireDefault(__webpack_require__(/*! string/is */ "./src/string/is.js"));

var _filter2 = _interopRequireDefault(__webpack_require__(/*! map/filter */ "./src/map/filter.js"));

var _is6 = _interopRequireDefault(__webpack_require__(/*! map/is */ "./src/map/is.js"));

var _keys2 = _interopRequireDefault(__webpack_require__(/*! map/keys */ "./src/map/keys.js"));

var _map2 = _interopRequireDefault(__webpack_require__(/*! map/map */ "./src/map/map.js"));

var _adjust = _interopRequireDefault(__webpack_require__(/*! util/adjust */ "./src/util/adjust.js"));

var _adjustWith = _interopRequireDefault(__webpack_require__(/*! util/adjustWith */ "./src/util/adjustWith.js"));

var _all = _interopRequireDefault(__webpack_require__(/*! util/all */ "./src/util/all.js"));

var _allPass = _interopRequireDefault(__webpack_require__(/*! util/allPass */ "./src/util/allPass.js"));

var _always = _interopRequireDefault(__webpack_require__(/*! util/always */ "./src/util/always.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! util/and */ "./src/util/and.js"));

var _any = _interopRequireDefault(__webpack_require__(/*! util/any */ "./src/util/any.js"));

var _anyPass = _interopRequireDefault(__webpack_require__(/*! util/anyPass */ "./src/util/anyPass.js"));

var _ap = _interopRequireDefault(__webpack_require__(/*! util/ap */ "./src/util/ap.js"));

var _compose = _interopRequireDefault(__webpack_require__(/*! util/compose */ "./src/util/compose.js"));

var _curry = _interopRequireDefault(__webpack_require__(/*! util/curry */ "./src/util/curry.js"));

var _defaultTo = _interopRequireDefault(__webpack_require__(/*! util/defaultTo */ "./src/util/defaultTo.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! util/empty */ "./src/util/empty.js"));

var _equals3 = _interopRequireDefault(__webpack_require__(/*! util/equals */ "./src/util/equals.js"));

var _exists = _interopRequireDefault(__webpack_require__(/*! util/exists */ "./src/util/exists.js"));

var _findIndex = _interopRequireDefault(__webpack_require__(/*! util/findIndex */ "./src/util/findIndex.js"));

var _fold2 = _interopRequireDefault(__webpack_require__(/*! util/fold */ "./src/util/fold.js"));

var _identical = _interopRequireDefault(__webpack_require__(/*! util/identical */ "./src/util/identical.js"));

var _identity = _interopRequireDefault(__webpack_require__(/*! util/identity */ "./src/util/identity.js"));

var _is7 = _interopRequireDefault(__webpack_require__(/*! util/is */ "./src/util/is.js"));

var _isEmpty = _interopRequireDefault(__webpack_require__(/*! util/isEmpty */ "./src/util/isEmpty.js"));

var _lift = _interopRequireDefault(__webpack_require__(/*! util/lift */ "./src/util/lift.js"));

var _map3 = _interopRequireDefault(__webpack_require__(/*! util/map */ "./src/util/map.js"));

var _max = _interopRequireDefault(__webpack_require__(/*! util/max */ "./src/util/max.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! util/not */ "./src/util/not.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! util/or */ "./src/util/or.js"));

var _truthy = _interopRequireDefault(__webpack_require__(/*! util/truthy */ "./src/util/truthy.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! util/type */ "./src/util/type.js"));

var _zip = _interopRequireDefault(__webpack_require__(/*! util/zip */ "./src/util/zip.js"));

var _zipWith = _interopRequireDefault(__webpack_require__(/*! util/zipWith */ "./src/util/zipWith.js"));

var _diffDate = _interopRequireDefault(__webpack_require__(/*! date/diffDate */ "./src/date/diffDate.js"));

var _formatDateTime = _interopRequireDefault(__webpack_require__(/*! date/formatDateTime */ "./src/date/formatDateTime.js"));

var _is8 = _interopRequireDefault(__webpack_require__(/*! date/is */ "./src/date/is.js"));

var _isFutureDate = _interopRequireDefault(__webpack_require__(/*! date/isFutureDate */ "./src/date/isFutureDate.js"));

var _isValid = _interopRequireDefault(__webpack_require__(/*! date/isValid */ "./src/date/isValid.js"));

var _toDay = _interopRequireDefault(__webpack_require__(/*! date/toDay */ "./src/date/toDay.js"));

var _toHour = _interopRequireDefault(__webpack_require__(/*! date/toHour */ "./src/date/toHour.js"));

var _toMinutes = _interopRequireDefault(__webpack_require__(/*! date/toMinutes */ "./src/date/toMinutes.js"));

var _toSeconds = _interopRequireDefault(__webpack_require__(/*! date/toSeconds */ "./src/date/toSeconds.js"));

var _getWeek = _interopRequireDefault(__webpack_require__(/*! date/getWeek */ "./src/date/getWeek.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/map/filter.js":
/*!***************************!*\
  !*** ./src/map/filter.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function mapFilter
 * @private
 *
 */
var _default = (0, _curry.default)(function mapFilter(fn, m) {
  var r = new Map();
  var it = m.entries();
  var result = it.next();

  while (!result.done) {
    var k = result.value[0];
    var v = result.value[1];
    if (fn(k, v)) r.set(k, v);
    result = it.next();
  } // Limited browser support
  // m.forEach((v, k) => {
  //   if (fn(k, v)) r.set(k, v)
  // })
  // babel transpile issues
  // for (const [k, v] of m.entries()) {
  //
  // }


  return r;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/map/is.js":
/*!***********************!*\
  !*** ./src/map/is.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _is = _interopRequireDefault(__webpack_require__(/*! ../util/is */ "./src/util/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dierickx.len on 01/04/2017.
 */
var _default = (0, _is.default)('Map');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/map/keys.js":
/*!*************************!*\
  !*** ./src/map/keys.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the own keys of an Map as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/
var _default = (0, _curry.default)(function keys(a) {
  return a.keys();
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/map/map.js":
/*!************************!*\
  !*** ./src/map/map.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ../util/empty */ "./src/util/empty.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Maps over a Map and applies a function
 *
 * @function
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> {b} -> [b]
 * @param {Function} cb
 * @param {Map} a
 * @return {Map}
 **/
var _default = (0, _curry.default)(function map(cb, a) {
  var r = (0, _empty.default)(a);
  a.forEach(function (v, k, map) {
    r.set(k, cb(v, k, map));
  });
  return r;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/monads/Just.js":
/*!****************************!*\
  !*** ./src/monads/Just.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Just = function Just(val) {
  this._value = val;
  return this;
};

Just.prototype.isJust = function () {
  return true;
};

Just.prototype.isNothing = function () {
  return false;
};

var _default = Just;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/monads/Maybe.js":
/*!*****************************!*\
  !*** ./src/monads/Maybe.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Just = _interopRequireDefault(__webpack_require__(/*! ./Just */ "./src/monads/Just.js"));

var _Nothing = _interopRequireDefault(__webpack_require__(/*! ./Nothing */ "./src/monads/Nothing.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Maybe = function Maybe(val) {
  this.__value = val;
};

Maybe.of = function (val) {
  if (val instanceof Maybe) return val;

  if (this instanceof Maybe) {
    this.__value = val;
    return this;
  }

  return new Maybe(val);
};

Maybe.prototype.getOrElse = function (n) {
  return this.isNothing() ? n : this.__value;
};

Maybe.prototype.map = function (f) {
  if (this.isNothing()) {
    return Maybe.of(null);
  }

  return Maybe.of(f(this.__value));
};

Maybe.prototype.ap = function (m) {
  return m.map(this.__value);
};

Maybe.prototype.isNothing = function () {
  return this.__value == null;
};

Maybe.prototype.isJust = function () {
  return !this.isNothing();
};

Maybe.prototype.Nothing = function () {
  return new _Nothing.default();
};

Maybe.prototype.Just = function () {
  return new _Just.default(this._value);
};

var _default = Maybe;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/monads/Nothing.js":
/*!*******************************!*\
  !*** ./src/monads/Nothing.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Nothing = function Nothing() {};

Nothing.prototype.isJust = function () {
  return false;
};

Nothing.prototype.isNothing = function () {
  return true;
};

var _default = Nothing;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/number/add.js":
/*!***************************!*\
  !*** ./src/number/add.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the sum of the 2 arguments
 *
 * @function add
 * @description Returns the sum of the 2 arguments
 * @since v1.0.2
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 **/
var _default = (0, _curry.default)(function add(a, b) {
  return +a + +b;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/number/divide.js":
/*!******************************!*\
  !*** ./src/number/divide.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 *
 * @function divide
 * @description Returns the division of the 2 arguments
 * @since v1.0.2
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 **/
var _default = (0, _curry.default)(function divide(a, b) {
  return +a / +b;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/number/is.js":
/*!**************************!*\
  !*** ./src/number/is.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _is = _interopRequireDefault(__webpack_require__(/*! ../util/is */ "./src/util/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 */
var _default = (0, _is.default)('Number');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/number/isNan.js":
/*!*****************************!*\
  !*** ./src/number/isNan.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNan;

var _is = _interopRequireDefault(__webpack_require__(/*! ./is */ "./src/number/is.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! ../util/and */ "./src/util/and.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function isNaN
 * @description Checks if number is NAN

 */
function isNan(x) {
  return (0, _and.default)((0, _is.default)(x), isNaN(x));
}

;
module.exports = exports["default"];

/***/ }),

/***/ "./src/number/multiply.js":
/*!********************************!*\
  !*** ./src/number/multiply.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the product of the 2 arguments
 *
 * @function
 * @since v1.0.2
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 **/
var _default = (0, _curry.default)(function multiply(a, b) {
  return +a * +b;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object/equals.js":
/*!******************************!*\
  !*** ./src/object/equals.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _exists = _interopRequireDefault(__webpack_require__(/*! ../util/exists */ "./src/util/exists.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ../util/not */ "./src/util/not.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ../util/equals */ "./src/util/equals.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * equals
 * checks for equality
 */
var _default = (0, _curry.default)(function (x, y) {
  for (var keyX in x) {
    // noinspection JSUnfilteredForInLoop
    if ((0, _not.default)((0, _equals.default)(x[keyX], y[keyX]))) return false;
  }

  for (var keyY in y) {
    if ((0, _not.default)((0, _exists.default)(x[keyY])) && (0, _exists.default)(y[keyY])) return false;
  }

  return true;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object/filter.js":
/*!******************************!*\
  !*** ./src/object/filter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! ./keys */ "./src/object/keys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function objectFilter
 * @private
 *
 */
var _default = (0, _curry.default)(function objectFilter(fn, o) {
  var r = {};
  var k = (0, _keys.default)(o);

  for (var i = 0; i < k.length; i++) {
    if (fn(o[k[i]])) r[k[i]] = o[k[i]];
  }

  return r;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object/fold.js":
/*!****************************!*\
  !*** ./src/object/fold.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! ./keys */ "./src/object/keys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function fold
 * @private
 *
 */
var _default = (0, _curry.default)(function fold(cb, init, o) {
  var k = (0, _keys.default)(o);
  var i = -1;
  var l = k.length;
  var r = Object(init);

  while (++i < l) {
    r = cb(r, o[k[i]], k[i], o);
  }

  return r;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object/has.js":
/*!***************************!*\
  !*** ./src/object/has.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if an object has the property
 *
 * @function
 * @since v1.0.2
 * @sig {String} -> {Object} -> Boolean
 * @param {String} prop
 * @param {Object} obj
 * @return {Boolean}
 **/
var _default = (0, _curry.default)(function has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object/hasIn.js":
/*!*****************************!*\
  !*** ./src/object/hasIn.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if an object has the property, even if it is inherited
 *
 * @function
 * @since v1.0.2
 * @sig {String} -> {Object} -> Boolean
 * @param {String} prop
 * @param {Object} obj
 * @return {Boolean}
 **/
var _default = (0, _curry.default)(function hasIn(prop, obj) {
  return prop in obj;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object/is.js":
/*!**************************!*\
  !*** ./src/object/is.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _is = _interopRequireDefault(__webpack_require__(/*! ../util/is */ "./src/util/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 */
var _default = (0, _is.default)('Object');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object/keys.js":
/*!****************************!*\
  !*** ./src/object/keys.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the own keys of an object as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/
var _default = (0, _curry.default)(function keys(a) {
  return Object.keys(Object(a));
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object/keysIn.js":
/*!******************************!*\
  !*** ./src/object/keysIn.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns all the keys of an object as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/
var _default = (0, _curry.default)(function keys(a) {
  var r = [];

  for (var k in a) {
    r.push(k);
  }

  return r;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object/map.js":
/*!***************************!*\
  !*** ./src/object/map.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ../util/empty */ "./src/util/empty.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! ./keys */ "./src/object/keys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Maps over an object and applies a function
 *
 * @function
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> {b} -> [b]
 * @param {Function} cb
 * @param {Object} a
 * @return {Object}
 **/
var _default = (0, _curry.default)(function map(cb, a) {
  var k = (0, _keys.default)(a);
  var i = -1;
  var l = k.length;
  var r = (0, _empty.default)(a);

  while (++i < l) {
    r[k[i]] = cb(a[k[i]], k[i], a);
  }

  return r;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object/merge.js":
/*!*****************************!*\
  !*** ./src/object/merge.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _identical = _interopRequireDefault(__webpack_require__(/*! ../util/identical */ "./src/util/identical.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ../object/is */ "./src/object/is.js"));

var _is2 = _interopRequireDefault(__webpack_require__(/*! ../array/is */ "./src/array/is.js"));

var _union = _interopRequireDefault(__webpack_require__(/*! ../array/union */ "./src/array/union.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * equals
 * checks for equality
 */
var merge = (0, _curry.default)(function (objL, objR) {
  var result = Object.assign({}, objL);

  if ((0, _identical.default)(objL, objR)) {
    return Object.assign({}, objL);
  }

  for (var key in objR) {
    if (!Object.prototype.hasOwnProperty.call(objR, key)) {
      continue;
    }

    var oldValue = objR[key];
    var newValue = objL[key];

    if ((0, _is.default)(oldValue) && (0, _is.default)(newValue)) {
      result[key] = merge(oldValue, newValue);
    } else if ((0, _is2.default)(newValue)) {
      result[key] = (0, _union.default)(newValue, oldValue);
    } else {
      result[key] = oldValue; // TODO: this is a reference, should be clone
    }
  }

  return result;
});
var _default = merge;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object/omit.js":
/*!****************************!*\
  !*** ./src/object/omit.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * equals
 * checks for equality
 */
var _default = (0, _curry.default)(function (obj, names) {
  var result = {};
  Object.keys(obj).filter(function (key) {
    return names.indexOf(key) === -1;
  }).forEach(function (key) {
    result[key] = obj[key];
  });
  return result;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object/path.js":
/*!****************************!*\
  !*** ./src/object/path.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function path
 */
var _default = (0, _curry.default)(function path(path, obj) {
  var val = obj;
  var idx = 0;
  var p;

  while (idx < path.length) {
    if (val == null) {
      return;
    }

    p = path[idx];
    val = Number.isInteger(p) ? p < 0 ? val[val.length + p] : val[p] : val[p];
    idx += 1;
  }

  return val;
}); // let r = obj
// for (let i = 0; i < path.length; i++) {
//   if (r == null) return undefined
//   r = r[path[i]]
// }
// return r
// })


exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object/pick.js":
/*!****************************!*\
  !*** ./src/object/pick.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function pick
 * @description returns a new bject with only the props that are provided
 * @param {Array} props - Array of property names
 * @param {Object} obj - The object from which to take the properties
 * @return {Object}
 */
var _default = (0, _curry.default)(function pick(props, obj) {
  var r = {};
  var i = 0;

  while (i < props.length) {
    if (props[i] in obj) {
      r[props[i]] = obj[props[i]];
    }

    i += 1;
  }

  return r;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object/prop.js":
/*!****************************!*\
  !*** ./src/object/prop.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function prop
 */
var _default = (0, _curry.default)(function prop(p, obj) {
  return obj[p];
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/string/concat.js":
/*!******************************!*\
  !*** ./src/string/concat.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.concat = void 0;

/**
 * @function
 */
var concat = function _concat() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ',';
  // use function(), arrow function doesn't bind arguments
  return Array.prototype.slice.call(arguments, 1).join(separator);
};

exports.concat = concat;
var _default = concat;
exports.default = _default;

/***/ }),

/***/ "./src/string/formatString.js":
/*!************************************!*\
  !*** ./src/string/formatString.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatString;

var _to = _interopRequireDefault(__webpack_require__(/*! ../array/to */ "./src/array/to.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ../util/not */ "./src/util/not.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ../util/is */ "./src/util/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dierickx.len on 26/03/2017.
 */
function formatString(str) {
  // use function(), arrow function doesn't bind arguments
  var args = (0, _to.default)(arguments);
  args.shift();
  return str.replace(/{(\d+)}/g, function (match, idx) {
    return (0, _not.default)((0, _is.default)('Undefined', args[idx])) ? args[idx] : match;
  });
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/string/is.js":
/*!**************************!*\
  !*** ./src/string/is.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _is = _interopRequireDefault(__webpack_require__(/*! ../util/is */ "./src/util/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 */
var _default = (0, _is.default)('String');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/string/map.js":
/*!***************************!*\
  !*** ./src/string/map.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Maps over a string and applies a function
 *
 * @function
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> [a] -> [a]
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Iterable}
 **/
var _default = (0, _curry.default)(function map(cb, a) {
  var i = -1;
  var l = a.length;
  var r = '';

  while (++i < l) {
    r += cb(a.charAt(i), i, a);
  }

  return r;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/adjust.js":
/*!****************************!*\
  !*** ./src/util/adjust.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modifies an item in an array using the provided function
 *
 * @function adjust
 * @description Modifies an item in an array using the provided function
 * @since v1.0.2
 * @sig (a -> a) -> num -> [a] -> [a]
 * @param {Function} fn - to modify the item at the specified index
 * @param {Number} i - The index at which to modify the array, accepts postitive and negative indexes
 * @param {Iterable} [a] - Array with data
 * @return {Iterable} [a]
 **/
var _default = (0, _curry.default)(function adjust(fn, i, a) {
  var r = Array.prototype.slice.call(a);
  var idx = i < 0 ? r.length + i : i;
  if (!a[idx]) return r;
  r[idx] = fn(r[idx]);
  return r;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/adjustWith.js":
/*!********************************!*\
  !*** ./src/util/adjustWith.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ../util/map */ "./src/util/map.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modifies an item in an array using the provided function
 *
 * @function adjustWith
 * @description Modifies an item in an array using the provided function
 * @since v1.0.2
 * @sig (a -> a) -> ((a -> [a]) -> [a] -> num) -> [a] -> [a]
 * @param {Function} fn - to modify the item at the specified index
 * @param {Function} pred - The predicate that returns the indexes if found
 * @param {Iterable} [a]
 * @return {Iterable} [a]
 **/
var _default = (0, _curry.default)(function adjustWith(fn, pred, a) {
  var _fn = function _fn(x) {
    if (pred(x)) {
      return fn(x);
    }

    return x;
  };

  return (0, _map.default)(_fn, Array.prototype.slice.call(a));
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/all.js":
/*!*************************!*\
  !*** ./src/util/all.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if all items in the enumerable match the predicate
 *
 * @function all
 * @description Returns true if all items in the enumerable match the predicate
 * @since v1.0.2
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Boolean}
 **/
var _default = (0, _curry.default)(function all(cb, a) {
  var res = true;

  for (var i in a) {
    if (!cb(a[i])) {
      res = false;
      break;
    }
  }

  return res;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/allPass.js":
/*!*****************************!*\
  !*** ./src/util/allPass.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Applies a list of predicates to the data and returns true if all pass
 *
 * @function allPass
 * @description Applies a list of predicates to the data and returns true if all pass
 * @since v1.0.2
 * @sig [(*... -> Boolean)] -> (*... -> Boolean
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 **/
var _default = (0, _curry.default)(function allPass(cbs, a) {
  for (var i = 0; i < cbs.length; i++) {
    if (!cbs[i](a)) return false;
  }

  return true;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/always.js":
/*!****************************!*\
  !*** ./src/util/always.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a function with the initial value provided
 *
 * @function always
 * @description Returns a function with the initial value provided
 * @since v1.0.2
 * @sig a -> (* -> a)
 * @param {*} a
 * @return {Function}
 **/
var _default = (0, _curry.default)(function always(x) {
  return function () {
    return x;
  };
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/and.js":
/*!*************************!*\
  !*** ./src/util/and.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if both predicates are true
 *
 * @function and
 * @description Checks if both predicates are true
 * @since v1.0.2
 * @sig (x, y) -> boolean
 * @param {*} x - A predicate
 * @param {*} y - A predicate
 * @return {boolean}
 **/
var _default = (0, _curry.default)(function and(x, y) {
  return x && y;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/any.js":
/*!*************************!*\
  !*** ./src/util/any.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if at least on of the items in the enumerable match the predicate
 *
 * @function any
 * @description Returns true if at least on of the items in the enumerable match the predicate
 * @since v1.0.2
 * @sig (TODO)
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Boolean}
 **/
var _default = (0, _curry.default)(function any(cb, a) {
  var res = false;

  for (var i in a) {
    if (cb(a[i])) {
      res = true;
      break;
    }
  }

  return res;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/anyPass.js":
/*!*****************************!*\
  !*** ./src/util/anyPass.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Applies a list of predicates to the data and returns true if one passes
 *
 * @function anyPass
 * @since v1.0.2
 * @sig [(*... -> Boolean)] -> (*...) -> Boolean
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 **/
var _default = (0, _curry.default)(function anyPass(cbs, a) {
  for (var i = 0; i < cbs.length; i++) {
    if (cbs[i](a)) return true;
  }

  return false;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/ap.js":
/*!************************!*\
  !*** ./src/util/ap.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _curry2 = _interopRequireDefault(__webpack_require__(/*! ../_private/curry1 */ "./src/_private/curry1.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ../util/is */ "./src/util/is.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! ../array/fold */ "./src/array/fold.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ../array/map */ "./src/array/map.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Applies a list of functions to a list of values and returns a combined result array
 *
 * @function ap
 * @description Applies a list of functions to a list of values and returns a combined result array
 * @since v1.0.2
 * @sig @sig [a -> b] -> [a] -> [b]
 * @param {(Function[]|Function|Applicative)} fns - An array of functions or a function or an applicative
 * @param {Array} vals - An array of values
 * @return {Iterable} [a]
 **/
var isFunction = (0, _is.default)('Function');

var _default = (0, _curry.default)(function ap(fns, vals) {
  if (isFunction(fns.ap)) {
    return fns.ap(vals);
  }

  if (isFunction(fns)) {
    return function (x) {
      return fns(x)(vals(x));
    };
  }

  return (0, _fold.default)(function (acc, f) {
    return acc.concat((0, _map.default)((0, _curry2.default)(f), vals));
  }, [], fns);
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/compose.js":
/*!*****************************!*\
  !*** ./src/util/compose.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;

/**
 * @function compose
 * @returns {function(): *}
 */
function compose() {
  var funs = Array.prototype.slice.call(arguments);
  return function _compose() {
    var init = funs[funs.length - 1];
    var result = [init.apply(init, arguments)];
    var i = funs.length - 2;

    for (i; i >= 0; --i) {
      var fun = funs[i];
      result = [fun.apply(fun, result)];
    }

    return result[0];
  };
}

;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/curry.js":
/*!***************************!*\
  !*** ./src/util/curry.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = curry;

/* eslint-disable no-use-before-define */

/**
 * @function curry
 * @description Autocurries the provided function
 */
function curry(fun) {
  var argslen = fun.length;

  if (argslen === 0) {
    return fun;
  }

  return createRecurser([]);

  function recurse(acc, args) {
    var _acc = acc.concat(args);

    return _acc.length < argslen ? createRecurser(_acc) : fun.apply(this, _acc);
  }

  function createRecurser(acc) {
    return function () {
      return recurse(acc, Array.prototype.slice.call(arguments));
    };
  }
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/util/defaultTo.js":
/*!*******************************!*\
  !*** ./src/util/defaultTo.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if all items in the enumerable match the predicate
 *
 * @function defaultTo
 * @description Returns true if all items in the enumerable match the predicate
 * @since v1.0.2
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 **/
var _default = (0, _curry.default)(function defaultTo(d, v) {
  // eslint-disable-next-line no-self-compare
  return v == null || v !== v ? d : v;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/empty.js":
/*!***************************!*\
  !*** ./src/util/empty.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = empty;

/**

 * @function empty
 * @description Returns the empty equivalent of the first argument
 */
function empty(x) {
  return new x.constructor();
}

;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/equals.js":
/*!****************************!*\
  !*** ./src/util/equals.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/util/curry.js"));

var _exists = _interopRequireDefault(__webpack_require__(/*! ./exists */ "./src/util/exists.js"));

var _identical = _interopRequireDefault(__webpack_require__(/*! ./identical */ "./src/util/identical.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./src/util/type.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not */ "./src/util/not.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! ./or */ "./src/util/or.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ../object/is */ "./src/object/is.js"));

var _is2 = _interopRequireDefault(__webpack_require__(/*! ../array/is */ "./src/array/is.js"));

var _is3 = _interopRequireDefault(__webpack_require__(/*! ../boolean/is */ "./src/boolean/is.js"));

var _is4 = _interopRequireDefault(__webpack_require__(/*! ../number/is */ "./src/number/is.js"));

var _is5 = _interopRequireDefault(__webpack_require__(/*! ../string/is */ "./src/string/is.js"));

var _is6 = _interopRequireDefault(__webpack_require__(/*! ../date/is */ "./src/date/is.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ../array/equals */ "./src/array/equals.js"));

var _equals2 = _interopRequireDefault(__webpack_require__(/*! ../object/equals */ "./src/object/equals.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * @function equals
 * @description checks for equality
 */
var _default = (0, _curry.default)(function equals(x, y) {
  if ((0, _identical.default)(x, y)) return true;
  if ((0, _type.default)(x) !== (0, _type.default)(y)) return false;
  if ((0, _or.default)((0, _not.default)((0, _exists.default)(x)), (0, _not.default)((0, _exists.default)(y)))) return false;
  if (x.constructor !== y.constructor) return false;

  if ((0, _is5.default)(x) || (0, _is3.default)(x) || (0, _is4.default)(x) || (0, _is6.default)(x)) {
    return (0, _identical.default)(x.valueOf(), y.valueOf());
  }

  if ((0, _is2.default)(x)) {
    return (0, _equals.default)(x, y);
  } else if ((0, _is.default)(x)) {
    return (0, _equals2.default)(x, y);
  }

  return false;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/exists.js":
/*!****************************!*\
  !*** ./src/util/exists.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exists;

/**
 * @function exists
 */
function exists(x) {
  return !(x == null);
}

;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/findIndex.js":
/*!*******************************!*\
  !*** ./src/util/findIndex.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Find the index matching a predicate
 *
 * @function findIndex
 * @description Find the index matching a predicate
 * @since v1.0.2
 * @sig (a -> boolean) -> [a] -> number
 * @param {Function} Predicate function returns a boolean
 * @param {Array} An array like object
 * @return {number}
 **/
var _default = (0, _curry.default)(function findIndex(fn, a) {
  var i = 0;
  var l = a.length;

  while (i < l) {
    if (fn(a[i])) {
      return i;
    }

    i += 1;
  }

  return -1;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/fold.js":
/*!**************************!*\
  !*** ./src/util/fold.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! ../array/fold */ "./src/array/fold.js"));

var _fold2 = _interopRequireDefault(__webpack_require__(/*! ../object/fold */ "./src/object/fold.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./src/util/type.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a single item bz iterating over an array like object and calla function on each iteé
 *
 * @function fold
 * @description Returns a single item bz iterating over an array like object and calla function on each iteé
 * @since v1.0.2
 * @sig ((a, b, c, a) → a) → a → [b] → a
 * @param {Function} cb receives 4 values: the accumulator, the item, the index, and the initial value.
 * @param {*} a is the initial value
 * @param {*} [b] the array like item to iterate over
 * @return {*} a is the accumulated value
 **/
var _default = (0, _curry.default)(function fold(cb, init, a) {
  var typeMap = {
    'Object': _fold2.default,
    'Array': _fold.default // if (a.next) {
    //   return iterableFold(cb, init, a)
    // }
    // if (type(Symbol) !== 'undefined' && a[Symbol.iterator]) {
    //   return iterableFold(cb, init, a[Symbol.iterator]())
    // }

  };
  return typeMap[(0, _type.default)(a)](cb, init, a);
}); // function iterableFold (cb, acc, gen) {
//   let step = gen.next()
//   while (!step.done) {
//     acc = cb(acc, step.value)
//     step = gen.next()
//   }
//   return acc
// }


exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/identical.js":
/*!*******************************!*\
  !*** ./src/util/identical.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/util/curry.js"));

var _isNan = _interopRequireDefault(__webpack_require__(/*! ../number/isNan */ "./src/number/isNan.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * @function identical
 * @description checks for identintical items
 */
var _default = (0, _curry.default)(function identical(x, y) {
  if (x === 0 && y === 0) {
    return 1 / x === 1 / y;
  }

  if (x === y) {
    return true;
  }

  return !!((0, _isNan.default)(x) && (0, _isNan.default)(y));
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/identity.js":
/*!******************************!*\
  !*** ./src/util/identity.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = identity;

/**

 * @function identity
 * @description Returns the value supplied to the function
 */
function identity(x) {
  return x;
}

;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/is.js":
/*!************************!*\
  !*** ./src/util/is.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/util/curry.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./src/util/type.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function is
 * @description Verifies the type of the provided argument
 *
 */
var _default = (0, _curry.default)(function is(Ctor, val) {
  return (0, _type.default)(val) === Ctor;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/isEmpty.js":
/*!*****************************!*\
  !*** ./src/util/isEmpty.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty */ "./src/util/empty.js"));

var _exists = _interopRequireDefault(__webpack_require__(/*! ./exists */ "./src/util/exists.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ./equals */ "./src/util/equals.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * @function empty
 * @description Returns the empty equivalent of the first argument
 */
function isEmpty(x) {
  return (0, _exists.default)(x) && (0, _equals.default)(x, (0, _empty.default)(x));
}

;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/lift.js":
/*!**************************!*\
  !*** ./src/util/lift.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _curry2 = _interopRequireDefault(__webpack_require__(/*! ../_private/curry1 */ "./src/_private/curry1.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! ../util/fold */ "./src/util/fold.js"));

var _ap = _interopRequireDefault(__webpack_require__(/*! ../util/ap */ "./src/util/ap.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ../util/map */ "./src/util/map.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function
 *
 * @function lift
 * @since v1.0.2
 * @sig (*... -> *) -> ([*]... -> [*])
 **/
var _default = (0, _curry.default)(function lift(fn) {
  var lifted = (0, _curry2.default)((0, _curry.default)(fn));
  return (0, _curry.default)(function _lift() {
    return (0, _fold.default)(_ap.default, (0, _map.default)(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/map.js":
/*!*************************!*\
  !*** ./src/util/map.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ../array/map */ "./src/array/map.js"));

var _map2 = _interopRequireDefault(__webpack_require__(/*! ../object/map */ "./src/object/map.js"));

var _map3 = _interopRequireDefault(__webpack_require__(/*! ../map/map */ "./src/map/map.js"));

var _map4 = _interopRequireDefault(__webpack_require__(/*! ../string/map */ "./src/string/map.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ../util/type */ "./src/util/type.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Maps over an iterable and applies a function
 *
 * @function map
 * @description Autocurried function which maps over an iterable.
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> b -> b
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Iterable}
 **/
var _default = (0, _curry.default)(function map(cb, a) {
  switch ((0, _type.default)(a)) {
    // switch (Object.prototype.toString.call(a)) {
    case 'Function':
      return (0, _curry.default)(function () {
        return cb.call(this, a.apply(this, arguments));
      });

    case 'Object':
      return (0, _map2.default)(cb, a);

    case 'String':
      return (0, _map4.default)(cb, a);

    case 'Map':
      return (0, _map3.default)(cb, a);

    default:
      return (0, _map.default)(cb, a);
  }
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/max.js":
/*!*************************!*\
  !*** ./src/util/max.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the largest of the 2 arguments provided
 *
 * @function max
 * @since v1.0.2
 * @param {*} a
 * @param {*} b
 * @return {*}
 **/
var _default = (0, _curry.default)(function max(a, b) {
  return b > a ? b : a;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/not.js":
/*!*************************!*\
  !*** ./src/util/not.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function not
 */
var _default = (0, _curry.default)(function not(x) {
  return !x;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/or.js":
/*!************************!*\
  !*** ./src/util/or.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function or
 * @description Returns true if one or the other is true
 */
var _default = (0, _curry.default)(function or(x, y) {
  return x || y;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/truthy.js":
/*!****************************!*\
  !*** ./src/util/truthy.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = truthy;

var _exists = _interopRequireDefault(__webpack_require__(/*! ./exists */ "./src/util/exists.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function truthy
 */
function truthy(x) {
  return x !== false && (0, _exists.default)(x);
}

;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/type.js":
/*!**************************!*\
  !*** ./src/util/type.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../_private/curry1 */ "./src/_private/curry1.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function type
 */
var _default = (0, _curry.default)(function type(x) {
  return Object.prototype.toString.call(x).slice(8, -1);
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/zip.js":
/*!*************************!*\
  !*** ./src/util/zip.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/util/curry.js"));

var _zipWith2 = _interopRequireDefault(__webpack_require__(/*! ./zipWith */ "./src/util/zipWith.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * zip
 *
 * @function zip
 */
var _default = (0, _curry.default)(function zip(a, b) {
  return (0, _zipWith2.default)(function _zipWith(x, y) {
    return [x, y];
  }, a, b);
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/zipWith.js":
/*!*****************************!*\
  !*** ./src/util/zipWith.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/util/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * zipWith
 *
 *  @function zipWith
 */
var _default = (0, _curry.default)(function zipWith(cb, a, b) {
  var arr = [];
  var len = Math.min(a.length, b.length);
  var i = 0;

  for (i = 0; i < len; i++) {
    arr.push(cb(a[i], b[i]));
  }

  return arr;
});

exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4uanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1bi5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvX3ByaXZhdGUvY3VycnkxLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L3RvLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS91bmlvbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9GLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9ib29sZWFuL1QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2Jvb2xlYW4vaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2NvbnN0YW50cy9EQVRFX1RPS0VOUy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvY29uc3RhbnRzL01PTlRIUy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvY29uc3RhbnRzL1dFRUtEQVlTLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2RpZmZEYXRlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2Zvcm1hdERhdGVUaW1lLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2dldFdlZWsuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvaXNGdXR1cmVEYXRlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2lzVmFsaWQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9EYXkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9Ib3VyLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvTWludXRlcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b1NlY29uZHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tYXAvZmlsdGVyLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tYXAvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21hcC9rZXlzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tYXAvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tb25hZHMvSnVzdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbW9uYWRzL01heWJlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tb25hZHMvTm90aGluZy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL2FkZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL2RpdmlkZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvaXNOYW4uanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL251bWJlci9tdWx0aXBseS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9oYXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9oYXNJbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2tleXNJbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L21hcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L21lcmdlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3Qvb21pdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L3BhdGguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9waWNrLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvcHJvcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvc3RyaW5nL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvc3RyaW5nL2Zvcm1hdFN0cmluZy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvc3RyaW5nL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FkanVzdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hZGp1c3RXaXRoLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FsbC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbGxQYXNzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2Fsd2F5cy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbmQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYW55LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FueVBhc3MuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9jdXJyeS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9kZWZhdWx0VG8uanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZXF1YWxzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2V4aXN0cy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9maW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZm9sZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pZGVudGljYWwuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9saWZ0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL21hcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9tYXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvbm90LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL29yLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3RydXRoeS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC90eXBlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3ppcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC96aXBXaXRoLmpzIl0sIm5hbWVzIjpbImN1cnJ5MSIsImZuIiwiY3VycmllZCIsImEiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJlcXVhbHNBcnJheSIsIngiLCJ5IiwiaSIsImZvbGQiLCJjYiIsImluaXQiLCJsIiwiciIsIm1hcCIsIkFycmF5IiwidG9BcnJheSIsImFwcGx5IiwidW5pb25BcnJheSIsImFMIiwiYVIiLCJmcm9tIiwiU2V0IiwiY29uY2F0IiwiREFURV9UT0tFTlMiLCJNT05USFMiLCJXRUVLREFZUyIsImRpZmZEYXRlIiwic3RhcnQiLCJlbmQiLCJEYXRlIiwiZ2V0VGltZSIsIlpFUk9TIiwibGFzdE4iLCJuIiwic3RyIiwic3Vic3RyaW5nIiwiZmlyc3ROIiwiZmlsbCIsImRpZ2l0cyIsIm1vZENlaWxpbmciLCJtb2QiLCJ2YWwiLCJ0b2tlbnMiLCJZWVlZIiwiZCIsImdldEZ1bGxZZWFyIiwiWVkiLCJNTU1NIiwiZ2V0TW9udGgiLCJNTU0iLCJNTSIsIk0iLCJ3Iiwid3ciLCJERCIsImdldERhdGUiLCJEIiwiZGRkZCIsImdldERheSIsImRkZCIsImRkIiwiSEgiLCJnZXRIb3VycyIsIkgiLCJoaCIsImgiLCJtbSIsImdldE1pbnV0ZXMiLCJtIiwic3MiLCJnZXRTZWNvbmRzIiwicyIsIkEiLCJTU1MiLCJnZXRNaWxsaXNlY29uZHMiLCJTUyIsIlMiLCJRIiwiTWF0aCIsImNlaWwiLCJzd2FwVG9rZW5XaXRoVmFsdWUiLCJkYXRlIiwidG9rZW4iLCJmb3JtYXREYXRlVGltZSIsImZvcm1hdCIsIm1hdGNoIiwiam9pbiIsImdldFdlZWsiLCJVVEMiLCJzZXRVVENEYXRlIiwiZ2V0VVRDRGF0ZSIsImdldFVUQ0RheSIsInllYXJTdGFydCIsImdldFVUQ0Z1bGxZZWFyIiwid2Vla05vIiwiaXNWYWxpZCIsImlzRmluaXRlIiwidmFsdWVPZiIsIm1hcEZpbHRlciIsIk1hcCIsIml0IiwiZW50cmllcyIsInJlc3VsdCIsIm5leHQiLCJkb25lIiwiayIsInZhbHVlIiwidiIsInNldCIsImtleXMiLCJmb3JFYWNoIiwiSnVzdCIsIl92YWx1ZSIsInByb3RvdHlwZSIsImlzSnVzdCIsImlzTm90aGluZyIsIk1heWJlIiwiX192YWx1ZSIsIm9mIiwiZ2V0T3JFbHNlIiwiZiIsImFwIiwiTm90aGluZyIsImFkZCIsImIiLCJkaXZpZGUiLCJpc05hbiIsImlzTmFOIiwibXVsdGlwbHkiLCJrZXlYIiwia2V5WSIsIm9iamVjdEZpbHRlciIsIm8iLCJPYmplY3QiLCJoYXMiLCJwcm9wIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaGFzSW4iLCJwdXNoIiwibWVyZ2UiLCJvYmpMIiwib2JqUiIsImFzc2lnbiIsImtleSIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJuYW1lcyIsImZpbHRlciIsImluZGV4T2YiLCJwYXRoIiwiaWR4IiwicCIsIk51bWJlciIsImlzSW50ZWdlciIsInBpY2siLCJwcm9wcyIsIl9jb25jYXQiLCJzZXBhcmF0b3IiLCJzbGljZSIsImZvcm1hdFN0cmluZyIsImFyZ3MiLCJzaGlmdCIsInJlcGxhY2UiLCJjaGFyQXQiLCJhZGp1c3QiLCJhZGp1c3RXaXRoIiwicHJlZCIsIl9mbiIsImFsbCIsInJlcyIsImFsbFBhc3MiLCJjYnMiLCJhbHdheXMiLCJhbmQiLCJhbnkiLCJhbnlQYXNzIiwiaXNGdW5jdGlvbiIsImZucyIsInZhbHMiLCJhY2MiLCJjb21wb3NlIiwiZnVucyIsIl9jb21wb3NlIiwiZnVuIiwiY3VycnkiLCJhcmdzbGVuIiwiY3JlYXRlUmVjdXJzZXIiLCJyZWN1cnNlIiwiX2FjYyIsImRlZmF1bHRUbyIsImVtcHR5IiwiY29uc3RydWN0b3IiLCJlcXVhbHMiLCJleGlzdHMiLCJmaW5kSW5kZXgiLCJ0eXBlTWFwIiwiaWRlbnRpY2FsIiwiaWRlbnRpdHkiLCJpcyIsIkN0b3IiLCJpc0VtcHR5IiwibGlmdCIsImxpZnRlZCIsIl9saWZ0IiwibWF4Iiwibm90Iiwib3IiLCJ0cnV0aHkiLCJ0eXBlIiwidG9TdHJpbmciLCJ6aXAiLCJfemlwV2l0aCIsInppcFdpdGgiLCJhcnIiLCJsZW4iLCJtaW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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RDtBQUFBLFNBQU9BLENBQUMsR0FBRyxLQUFYO0FBQUEsQyxFQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIaEM7OztlQUdlLGtCQUFDQSxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxHQUFHLElBQVg7QUFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFD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Ozs7O2VBU2Usb0JBQU0sU0FBU29ELEdBQVQsQ0FBY25OLENBQWQsRUFBaUIySCxDQUFqQixFQUFvQjtBQUN2QyxTQUFPLHVCQUFRLFNBQVN5RixRQUFULENBQW1CaE4sQ0FBbkIsRUFBc0JDLENBQXRCLEVBQXlCO0FBQUUsV0FBTyxDQUFDRCxDQUFELEVBQUlDLENBQUosQ0FBUDtBQUFlLEdBQWxELEVBQW9ETCxDQUFwRCxFQUF1RDJILENBQXZELENBQVA7QUFDRCxDQUZjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIZjs7OztBQU5BOzs7Ozs7ZUFRZSxvQkFBTSxTQUFTMEYsT0FBVCxDQUFrQjdNLEVBQWxCLEVBQXNCUixDQUF0QixFQUF5QjJILENBQXpCLEVBQTRCO0FBQy9DLE1BQU0yRixHQUFHLEdBQUcsRUFBWjtBQUNBLE1BQU1DLEdBQUcsR0FBRzFJLElBQUksQ0FBQzJJLEdBQUwsQ0FBU3hOLENBQUMsQ0FBQ0UsTUFBWCxFQUFtQnlILENBQUMsQ0FBQ3pILE1BQXJCLENBQVo7QUFDQSxNQUFJSSxDQUFDLEdBQUcsQ0FBUjs7QUFDQSxPQUFLQSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdpTixHQUFoQixFQUFxQmpOLENBQUMsRUFBdEIsRUFBMEI7QUFDeEJnTixPQUFHLENBQUMzRSxJQUFKLENBQVNuSSxFQUFFLENBQUNSLENBQUMsQ0FBQ00sQ0FBRCxDQUFGLEVBQU9xSCxDQUFDLENBQUNySCxDQUFELENBQVIsQ0FBWDtBQUNEOztBQUNELFNBQU9nTixHQUFQO0FBQ0QsQ0FSYyxDIiwiZmlsZSI6ImZ1bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuLmpzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bi5qc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW4uanNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIFJldHVybnMgYSBjdXJyaWVkIGZ1bmN0aW9uIHdpdGggYXJpdHkgMVxuICogQGZ1bmN0aW9uIGN1cnJ5MVxuICogQHByaXZhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkxIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY3VycmllZCAoYSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAwXG4gICAgICA/IHRoaXNcbiAgICAgIDogZm4oYSlcbiAgfVxufVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGVxdWFsc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gZm9yIGRlZXAgY29tcGFyaXNvbiBvZiBhcnJheXNcbiAqIEBwYXJhbSB7YX0geCAtIE9iamVjdCB0byBjb21wYXJlIG9mIHR5cGUgYVxuICogQHBhcmFtIHthfSB5IC0gT2JqZWN0IHggdG8gY29tcGFyZSB3aXRoIG9iamVjdCB4XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL3V0aWwvZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHNBcnJheSAoeCwgeSkge1xuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vdChlcXVhbHMoeFtpXSwgeVtpXSkpKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IG1hcHBpbmcgb3ZlciB0aGUgcHJvdmlkZWQgYXJyYXkgYW5kIGNhbGxpbmcgYW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSB7Y2JGdW5jdGlvbn0gY2IgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBtb2RpZnkgdGhlIGl0ZW1cbiAqIEBwYXJhbSB7Kn0gaW5pdCAtIEluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBBcnJheSB3aXRoIGl0ZW1zIHRvIG1vZGlmeSBieSB0aGUgY2IgZnVuY3Rpb25cbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFsaWFzIHJlZHVjZVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvbGQoYWRkLCAwLCBbMSwxLDFdKVxuICogLy8gcmVzdWx0ID0gM1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIGNiRnVuY3Rpb25cbiAqIEBwYXJhbSB7Kn0gciAtIEFjY3VtdWxhdG9yIHdoaWNoIGFjY3VtdWxhdGVzIHRoZSBjYWxsYmFjaydzIHJldHVybiB2YWx1ZXNcbiAqIEBwYXJhbSB7Kn0gaXRlbSAtIHRoZSBjdXJyZW50IGVsZW1lbnQgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSB0aGUgaW5kZXkgb2YgdGhlIGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge0FycmF5fSBhIC0gVGhlIGluaXRpYWwgYXJyYXlcbiAqIEByZXR1cm4geyp9XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9IGluaXRcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2IociwgYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IE9iamVjdCB0byB2ZXJpZml5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzQXJyYXkoWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IHRydWVcbiAqL1xuXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0FycmF5JylcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIE1hcHMgb3ZlciBhbiBhcnJheSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoaWRlbnRpdHksIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzAsMiwzXVxuICogIGNvbnN0IGFkZDIgPSBhZGQoMilcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoYWRkMiwgWzAsMiwzXSlcbiAqICAvLyByZXN1bHQgPSBbMiw0LDVdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBjb25zdCByID0gbmV3IEFycmF5KGwpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltpXSA9IGNiKGFbaV0sIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiB0b0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQ29udmVydHMgdGhlIGlucHV0IHRvIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5TGlrZX0geCAtIE9iamVjdCB0byBjb252ZXJ0IHRvIGFuIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSB0b0FycmF5KFwic3RyaW5nXCIpXG4gKiAvLyByZXN1bHQgPSBbJ3MnLCd0JywncicsJ2knLCduJywnZyddXG4gKlxuICogZnVuY3Rpb24gKCkge1xuICogIGNvbnN0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cylcbiAqICBjb25zb2xlLmxvZyh0eXBlb2YgYXJncykgLy8gQXJyYXlcbiAqIH1cbiAqXG4gKiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0FycmF5ICh4KSB7XG4gIHJldHVybiB4Lmxlbmd0aCA9PT0gMSA/IFt4WzBdXSA6IEFycmF5LmFwcGx5KG51bGwsIHgpXG59O1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdW5pb25BcnJheVxuICogQGRlc2NyaXB0aW9uIE1lcmdlcyAyIGFycmF5c1xuICogQHBhcmFtIHtBcnJheX0gYUwgLSBBcnJheSB0byBtZXJnZVxuICogQHBhcmFtIHtBcnJheX0gYVIgLSBBcnJheSB0byBtZXJnZVxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gdW5pb25BcnJheShbMCwxLDJdLCBbMyw0LDVdKVxuICogLy8gcmVzdWx0ID0gWzAuMS4yLjMuNC41XVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHVuaW9uQXJyYXkgKGFMLCBhUikge1xuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFMLmNvbmNhdChhUikpKVxufSlcbiIsIi8qKlxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICpcbiAqIEBmdW5jdGlvbiBGXG4gKiBAZGVzY3JpcHRpb24gQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqKi9cbmltcG9ydCBhbHdheXMgZnJvbSAnLi4vdXRpbC9hbHdheXMnXG5cbmV4cG9ydCBkZWZhdWx0IGFsd2F5cyhmYWxzZSlcbiIsIi8qKlxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICpcbiAqIEBmdW5jdGlvbiBUXG4gKiBAZGVzY3JpcHRpb24gQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqKi9cbmltcG9ydCBhbHdheXMgZnJvbSAnLi4vdXRpbC9hbHdheXMnXG5cbmV4cG9ydCBkZWZhdWx0IGFsd2F5cyh0cnVlKVxuIiwiLyoqXG4gKiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxuICpcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gaXNcbiAqIEBkZXNjcmlwdGlvbiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBJdGVtIHRvIHZlcmlmeVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqKi9cbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnQm9vbGVhbicpXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKi9cblxuLy8gZGF0ZS90aW1lIHJlZ2V4XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbmV4cG9ydCBjb25zdCBEQVRFX1RPS0VOUyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRfFlZWVlZWXxZWVlZWXxZWVlZfFlZfGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fG1tP3xzcz98U3sxLDl9fHh8WHx6ej98Wlo/fC4pL2dcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgY29uc3QgTU9OVEhTID0gW1xuICAnSmFudWFyeScsXG4gICdGZWJydWFyeScsXG4gICdNYXJjaCcsXG4gICdBcHJpbCcsXG4gICdNYXknLFxuICAnSnVuZScsXG4gICdKdWx5JyxcbiAgJ0F1Z3VzdCcsXG4gICdTZXB0ZW1iZXInLFxuICAnT2N0b2JlcicsXG4gICdOb3ZlbWJlcicsXG4gICdEZWNlbWJlcidcbl1cbiIsIi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IFdFRUtEQVlTID0gW1xuICAnU3VuZGF5JyxcbiAgJ01vbmRheScsXG4gICdUdWVzZGF5JyxcbiAgJ1dlZG5lc2RheScsXG4gICdUaHVyc2RheScsXG4gICdGcmlkYXknLFxuICAnU2F0dXJkYXknXG5dXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBkaWZmRGF0ZVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiAyIGRhdGVzIGluIG1pbGxpc2Vjb25kXG4gKiBAcGFyYW0ge0RhdGV9IHN0YXJ0IC0gU3RhcnQgZGF0ZVxuICogQHBhcmFtIHtEYXRlfSBlbmQgLSBFbmQgZGF0ZVxuICogQHJldHVybiB7bnVtYmVyfSBSRXR1cm4gdGhlIGRpZmZlcmVuY2UgaW4gbWlsbGlzZWNvbmRzXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBkaWZmRGF0ZSAoc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKG5ldyBEYXRlKHN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShlbmQpLmdldFRpbWUoKSlcbn0pXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDIwLzAxLzIwMTcuXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGlzVmFsaWREYXRlIGZyb20gJy4vaXNWYWxpZCdcbmltcG9ydCBnZXRXZWVrIGZyb20gJy4vZ2V0V2VlaydcbmltcG9ydCB7IFdFRUtEQVlTIH0gZnJvbSAnLi4vY29uc3RhbnRzL1dFRUtEQVlTJ1xuaW1wb3J0IHsgTU9OVEhTIH0gZnJvbSAnLi4vY29uc3RhbnRzL01PTlRIUydcbmltcG9ydCB7IERBVEVfVE9LRU5TIH0gZnJvbSAnLi4vY29uc3RhbnRzL0RBVEVfVE9LRU5TJ1xuXG4vLyB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgdGhlIGRhdGUgZm9ybWF0dGluZ1xuY29uc3QgWkVST1MgPSAnMDAwMDAwMDAnXG5jb25zdCBsYXN0TiA9IGN1cnJ5KChuLCBzdHIpID0+IHN0ci5zdWJzdHJpbmcoc3RyLmxlbmd0aCAtIG4sIHN0ci5sZW5ndGgpKVxuY29uc3QgZmlyc3ROID0gY3VycnkoKG4sIHN0cikgPT4gc3RyLnN1YnN0cmluZygwLCBuKSlcbmNvbnN0IGZpbGwgPSBjdXJyeSgoZGlnaXRzLCBuKSA9PiBsYXN0TihkaWdpdHMsIFpFUk9TICsgbikpXG5cbmNvbnN0IG1vZENlaWxpbmcgPSAobW9kLCB2YWwpID0+IHZhbCAlIG1vZCB8fCBtb2RcblxuLy8gdG9rZW5zIG1hcCB0byBnZXQgcGFydHMgb2YgdGhlIGRhdGUgL3RpbWVcbmNvbnN0IHRva2VucyA9IHtcbiAgWVlZWTogZCA9PiBmaWxsKDQsIGQuZ2V0RnVsbFllYXIoKSksXG4gIFlZOiBkID0+IGxhc3ROKDIsIGZpbGwoNCwgZC5nZXRGdWxsWWVhcigpKSksXG4gIE1NTU06IGQgPT4gTU9OVEhTW2QuZ2V0TW9udGgoKV0sXG4gIE1NTTogZCA9PiBmaXJzdE4oMywgTU9OVEhTW2QuZ2V0TW9udGgoKV0pLFxuICBNTTogZCA9PiBmaWxsKDIsIGQuZ2V0TW9udGgoKSArIDEpLFxuICBNOiBkID0+IGQuZ2V0TW9udGgoKSArIDEsXG4gIHc6IGQgPT4gZ2V0V2VlayhkKSxcbiAgd3c6IGQgPT4gZmlsbCgyLCBnZXRXZWVrKGQpKSxcbiAgREQ6IGQgPT4gZmlsbCgyLCBkLmdldERhdGUoKSksXG4gIEQ6IGQgPT4gZC5nZXREYXRlKCksXG4gIGRkZGQ6IGQgPT4gV0VFS0RBWVNbZC5nZXREYXkoKV0sXG4gIGRkZDogZCA9PiBmaXJzdE4oMywgV0VFS0RBWVNbZC5nZXREYXkoKV0pLFxuICBkZDogZCA9PiBmaXJzdE4oMiwgV0VFS0RBWVNbZC5nZXREYXkoKV0pLFxuICBkOiBkID0+IGQuZ2V0RGF5KCksXG4gIEhIOiBkID0+IGZpbGwoMiwgZC5nZXRIb3VycygpKSxcbiAgSDogZCA9PiBkLmdldEhvdXJzKCksXG4gIGhoOiBkID0+IGZpbGwoMiwgbW9kQ2VpbGluZygxMiwgZC5nZXRIb3VycygpKSksXG4gIGg6IGQgPT4gbW9kQ2VpbGluZygxMiwgZC5nZXRIb3VycygpKSxcbiAgbW06IGQgPT4gZmlsbCgyLCBkLmdldE1pbnV0ZXMoKSksXG4gIG06IGQgPT4gZC5nZXRNaW51dGVzKCksXG4gIHNzOiBkID0+IGZpbGwoMiwgZC5nZXRTZWNvbmRzKCkpLFxuICBzOiBkID0+IGQuZ2V0U2Vjb25kcygpLFxuICBBOiBkID0+IGQuZ2V0SG91cnMoKSA+IDExID8gJ1BNJyA6ICdBTScsXG4gIGE6IGQgPT4gZC5nZXRIb3VycygpID4gMTEgPyAncG0nIDogJ2FtJyxcbiAgU1NTOiBkID0+IGZpbGwoMywgZC5nZXRNaWxsaXNlY29uZHMoKSksXG4gIFNTOiBkID0+IGZpcnN0TigyLCBmaWxsKDMsIGQuZ2V0TWlsbGlzZWNvbmRzKCkpKSxcbiAgUzogZCA9PiBmaXJzdE4oMSwgZmlsbCgzLCBkLmdldE1pbGxpc2Vjb25kcygpKSksXG4gIFE6IGQgPT4gTWF0aC5jZWlsKChkLmdldE1vbnRoKCkgKyAxKSAvIDMpXG59XG5cbi8vIG1hcCB0aGlzIGZ1bmN0aW9uIHRvIGdldCB0aGUgYWN0dWFsIHRpbWUvZGF0ZSB2YWx1ZSBmb3IgZWFjaCB0b2tlblxuY29uc3Qgc3dhcFRva2VuV2l0aFZhbHVlID0gY3VycnkoKGRhdGUsIHRva2VuKSA9PiB7XG4gIHJldHVybiB0b2tlbnNbdG9rZW5dID8gdG9rZW5zW3Rva2VuXShkYXRlKSA6IHRva2VuXG59KVxuXG4vKipcbiAqIEBmdW5jdGlvbiBmb3JtYXREYXRlVGltZVxuICogQGRlc2NyaXB0aW9uIEZvcm1hdHMgYSBkYXRlIG9iamVjdCB1c2luZyBhIGZvcm1hdCBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgLSBGb3JtYXQgZGF0ZSBzdHJpbmdcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZSAtIERhdGUgb2JqZWN0IHRvIGZvcm1hdFxuICogQHJldHVybiB7c3RyaW5nfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZVRpbWUoJ0RELU1NLVlZWVknLCBuZXcgRGF0ZSgnMTk5OS0xMi0zMScpKVxuICogY29uc29sZS5sb2coZm9ybWF0dGVkRGF0ZSkgLy8gMzEtMTItMTk5OVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb3JtYXREYXRlVGltZSAoZm9ybWF0LCBkYXRlKSB7XG4gIC8vIGNoZWNrIGZvciB2YWxpZCBkYXRlXG4gIGlmICghaXNWYWxpZERhdGUoZGF0ZSkpIHJldHVybiAnSW52YWxpZCBEYXRlJyAvLyByZXR1cm4gc3RyaW5nXG4gIHJldHVybiBmb3JtYXQubWF0Y2goREFURV9UT0tFTlMpLm1hcChzd2FwVG9rZW5XaXRoVmFsdWUoZGF0ZSkpLmpvaW4oJycpIC8vIHJldHVybiBqb2luZWQgc3RyaW5nXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZ2V0V2Vla1xuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHdlZWsgbnVtYmVyIGJhc2VkIG9uIGEgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIGRcbiAqIEByZXR1cm5zIHtudW1iZXJbXX1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGdldFdlZWsgKGQpIHtcbiAgLy8gQ29weSBkYXRlIHNvIGRvbid0IG1vZGlmeSBvcmlnaW5hbFxuICBkID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIGQuZ2V0RGF0ZSgpKSlcbiAgLy8gU2V0IHRvIG5lYXJlc3QgVGh1cnNkYXk6IGN1cnJlbnQgZGF0ZSArIDQgLSBjdXJyZW50IGRheSBudW1iZXJcbiAgLy8gTWFrZSBTdW5kYXkncyBkYXkgbnVtYmVyIDdcbiAgZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpICsgNCAtIChkLmdldFVUQ0RheSgpIHx8IDcpKVxuICAvLyBHZXQgZmlyc3QgZGF5IG9mIHllYXJcbiAgbGV0IHllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpXG5cbiAgLy8gQ2FsY3VsYXRlIGZ1bGwgd2Vla3MgdG8gbmVhcmVzdCBUaHVyc2RheVxuICBsZXQgd2Vla05vID0gTWF0aC5jZWlsKCgoKGQgLSB5ZWFyU3RhcnQpIC8gODY0MDAwMDApICsgMSkgLyA3KVxuXG4gIC8vIFJldHVybiBhcnJheSBvZiB5ZWFyIGFuZCB3ZWVrIG51bWJlclxuICByZXR1cm4gW2QuZ2V0VVRDRnVsbFllYXIoKSwgd2Vla05vXVxufSlcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdEYXRlJylcclxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwOS8wMy8yMDE3LlxuICovXG5pbXBvcnQgZGlmZkRhdGUgZnJvbSAnLi9kaWZmRGF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IHtcbiAgcmV0dXJuIGRpZmZEYXRlKG5ldyBEYXRlKCkpKGQpIDwgMFxufVxuIiwiLyoqXG4gKlxuICovXG5pbXBvcnQgaXNEYXRlIGZyb20gJy4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQgKHgpIHtcbiAgLy8gbm9pbnNwZWN0aW9uIEpTQ2hlY2tGdW5jdGlvblNpZ25hdHVyZXNcbiAgcmV0dXJuIGlzRGF0ZSh4KSAmJiBpc0Zpbml0ZSh4LnZhbHVlT2YoKSlcbn07XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gODY0MDAwMDAgLy8gMjQqNjAqNjAqMTAwMCA9IDg2NDAwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyAzNjAwMDAwIC8vIDYwKjYwKjEwMDAgPSAzNjAwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyA2MDAwMCAvLyA2MCoxMDAwID0gNjAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDEwMDBcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8vIGFycmF5XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFsc0FycmF5IH0gZnJvbSAnYXJyYXkvZXF1YWxzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0FycmF5IH0gZnJvbSAnYXJyYXkvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvQXJyYXkgfSBmcm9tICdhcnJheS90bydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pb25BcnJheSB9IGZyb20gJ2FycmF5L3VuaW9uJ1xuXG4vLyBib29sZWFuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzQm9vbGVhbiB9IGZyb20gJ2Jvb2xlYW4vaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEYgfSBmcm9tICdib29sZWFuL0YnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFQgfSBmcm9tICdib29sZWFuL1QnXG5cbi8vIG1vbmFkc1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBKdXN0IH0gZnJvbSAnbW9uYWRzL0p1c3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1heWJlIH0gZnJvbSAnbW9uYWRzL01heWJlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOb3RoaW5nIH0gZnJvbSAnbW9uYWRzL05vdGhpbmcnXG5cbi8vIG51bWJlclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc051bWJlciB9IGZyb20gJ251bWJlci9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOYW4gfSBmcm9tICdudW1iZXIvaXNOYW4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkZCB9IGZyb20gJ251bWJlci9hZGQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG11bHRpcGx5IH0gZnJvbSAnbnVtYmVyL211bHRpcGx5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaXZpZGUgfSBmcm9tICdudW1iZXIvZGl2aWRlJ1xuXG4vLyBvYmplY3RcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzT2JqZWN0IH0gZnJvbSAnb2JqZWN0L2VxdWFscydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNPYmplY3QgfSBmcm9tICdvYmplY3QvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlT2JqZWN0IH0gZnJvbSAnb2JqZWN0L21lcmdlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvbWl0RnJvbU9iamVjdCB9IGZyb20gJ29iamVjdC9vbWl0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXMgfSBmcm9tICdvYmplY3QvaGFzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXNJbiB9IGZyb20gJ29iamVjdC9oYXNJbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5cyB9IGZyb20gJ29iamVjdC9rZXlzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXlzSW4gfSBmcm9tICdvYmplY3Qva2V5c0luJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaWx0ZXJPYmplY3QgfSBmcm9tICdvYmplY3QvZmlsdGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb2xkT2JqZWN0IH0gZnJvbSAnb2JqZWN0L2ZvbGQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hcE9iamVjdCB9IGZyb20gJ29iamVjdC9tYXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhdGggfSBmcm9tICdvYmplY3QvcGF0aCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGljayB9IGZyb20gJ29iamVjdC9waWNrJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcm9wIH0gZnJvbSAnb2JqZWN0L3Byb3AnXG5cbi8vIHN0cmluZ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb25jYXRTdHJpbmcgfSBmcm9tICdzdHJpbmcvY29uY2F0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb3JtYXRTdHJpbmcgfSBmcm9tICdzdHJpbmcvZm9ybWF0U3RyaW5nJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1N0cmluZyB9IGZyb20gJ3N0cmluZy9pcydcblxuLy8gbWFwXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hcEZpbHRlciB9IGZyb20gJ21hcC9maWx0ZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTWFwIH0gZnJvbSAnbWFwL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXBLZXlzIH0gZnJvbSAnbWFwL2tleXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hcE1hcCB9IGZyb20gJ21hcC9tYXAnXG5cbi8vIHV0aWxcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWRqdXN0IH0gZnJvbSAndXRpbC9hZGp1c3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkanVzdFdpdGggfSBmcm9tICd1dGlsL2FkanVzdFdpdGgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsbCB9IGZyb20gJ3V0aWwvYWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbGxQYXNzIH0gZnJvbSAndXRpbC9hbGxQYXNzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbHdheXMgfSBmcm9tICd1dGlsL2Fsd2F5cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW5kIH0gZnJvbSAndXRpbC9hbmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFueSB9IGZyb20gJ3V0aWwvYW55J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbnlQYXNzIH0gZnJvbSAndXRpbC9hbnlQYXNzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcCB9IGZyb20gJ3V0aWwvYXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBvc2UgfSBmcm9tICd1dGlsL2NvbXBvc2UnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGN1cnJ5IH0gZnJvbSAndXRpbC9jdXJyeSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdFRvIH0gZnJvbSAndXRpbC9kZWZhdWx0VG8nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVtcHR5IH0gZnJvbSAndXRpbC9lbXB0eSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzIH0gZnJvbSAndXRpbC9lcXVhbHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGV4aXN0cyB9IGZyb20gJ3V0aWwvZXhpc3RzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaW5kSW5kZXggfSBmcm9tICd1dGlsL2ZpbmRJbmRleCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9sZCB9IGZyb20gJ3V0aWwvZm9sZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWRlbnRpY2FsIH0gZnJvbSAndXRpbC9pZGVudGljYWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlkZW50aXR5IH0gZnJvbSAndXRpbC9pZGVudGl0eSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXMgfSBmcm9tICd1dGlsL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0VtcHR5IH0gZnJvbSAndXRpbC9pc0VtcHR5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaWZ0IH0gZnJvbSAndXRpbC9saWZ0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXAgfSBmcm9tICd1dGlsL21hcCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWF4IH0gZnJvbSAndXRpbC9tYXgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vdCB9IGZyb20gJ3V0aWwvbm90J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvciB9IGZyb20gJ3V0aWwvb3InXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRydXRoeSB9IGZyb20gJ3V0aWwvdHJ1dGh5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0eXBlIH0gZnJvbSAndXRpbC90eXBlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB6aXAgfSBmcm9tICd1dGlsL3ppcCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgemlwV2l0aCB9IGZyb20gJ3V0aWwvemlwV2l0aCdcblxuLy8gZGF0ZVxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaWZmRGF0ZSB9IGZyb20gJ2RhdGUvZGlmZkRhdGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvcm1hdERhdGVUaW1lIH0gZnJvbSAnZGF0ZS9mb3JtYXREYXRlVGltZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGF0ZUlzIH0gZnJvbSAnZGF0ZS9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNGdXR1cmVEYXRlIH0gZnJvbSAnZGF0ZS9pc0Z1dHVyZURhdGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzVmFsaWQgfSBmcm9tICdkYXRlL2lzVmFsaWQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvRGF5IH0gZnJvbSAnZGF0ZS90b0RheSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9Ib3VyIH0gZnJvbSAnZGF0ZS90b0hvdXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvTWludXRlcyB9IGZyb20gJ2RhdGUvdG9NaW51dGVzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b1NlY29uZHMgfSBmcm9tICdkYXRlL3RvU2Vjb25kcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0V2VlayB9IGZyb20gJ2RhdGUvZ2V0V2VlaydcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG1hcEZpbHRlclxuICogQHByaXZhdGVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXBGaWx0ZXIgKGZuLCBtKSB7XG4gIGxldCByID0gbmV3IE1hcCgpXG5cbiAgbGV0IGl0ID0gbS5lbnRyaWVzKClcbiAgbGV0IHJlc3VsdCA9IGl0Lm5leHQoKVxuXG4gIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICBjb25zdCBrID0gcmVzdWx0LnZhbHVlWzBdXG4gICAgY29uc3QgdiA9IHJlc3VsdC52YWx1ZVsxXVxuICAgIGlmIChmbihrLCB2KSkgci5zZXQoaywgdilcbiAgICByZXN1bHQgPSBpdC5uZXh0KClcbiAgfVxuXG4gIC8vIExpbWl0ZWQgYnJvd3NlciBzdXBwb3J0XG4gIC8vIG0uZm9yRWFjaCgodiwgaykgPT4ge1xuICAvLyAgIGlmIChmbihrLCB2KSkgci5zZXQoaywgdilcbiAgLy8gfSlcblxuICAvLyBiYWJlbCB0cmFuc3BpbGUgaXNzdWVzXG4gIC8vIGZvciAoY29uc3QgW2ssIHZdIG9mIG0uZW50cmllcygpKSB7XG4gIC8vXG4gIC8vIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnTWFwJylcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgb3duIGtleXMgb2YgYW4gTWFwIGFzIGFuIEFycmF5XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gW2JdXG4gKiBAcGFyYW0ge09iamVjdH1cbiAqIEByZXR1cm4ge0FycmF5fVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGtleXMgKGEpIHtcbiAgcmV0dXJuIGEua2V5cygpXG59KVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYSBNYXAgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7TWFwfSBhXG4gKiBAcmV0dXJuIHtNYXB9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBlbXB0eSBmcm9tICcuLi91dGlsL2VtcHR5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGNvbnN0IHIgPSBlbXB0eShhKVxuICBhLmZvckVhY2goKHYsIGssIG1hcCkgPT4ge1xuICAgIHIuc2V0KGssIGNiKHYsIGssIG1hcCkpXG4gIH0pXG4gIHJldHVybiByXG59KVxuIiwibGV0IEp1c3QgPSBmdW5jdGlvbiAodmFsKSB7XG4gIHRoaXMuX3ZhbHVlID0gdmFsXG4gIHJldHVybiB0aGlzXG59XG5cbkp1c3QucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWVcbn1cbkp1c3QucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEp1c3RcbiIsImltcG9ydCBKdXN0IGZyb20gJy4vSnVzdCdcbmltcG9ydCBOb3RoaW5nIGZyb20gJy4vTm90aGluZydcblxubGV0IE1heWJlID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl9fdmFsdWUgPSB2YWxcbn1cblxuTWF5YmUub2YgPSBmdW5jdGlvbiAodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBNYXliZSkgcmV0dXJuIHZhbFxuICBpZiAodGhpcyBpbnN0YW5jZW9mIE1heWJlKSB7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICByZXR1cm4gbmV3IE1heWJlKHZhbClcbn1cblxuTWF5YmUucHJvdG90eXBlLmdldE9yRWxzZSA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiB0aGlzLmlzTm90aGluZygpID8gbiA6IHRoaXMuX192YWx1ZVxufVxuXG5NYXliZS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGYpIHtcbiAgaWYgKHRoaXMuaXNOb3RoaW5nKCkpIHtcbiAgICByZXR1cm4gTWF5YmUub2YobnVsbClcbiAgfVxuICByZXR1cm4gTWF5YmUub2YoZih0aGlzLl9fdmFsdWUpKVxufVxuXG5NYXliZS5wcm90b3R5cGUuYXAgPSBmdW5jdGlvbiAobSkge1xuICByZXR1cm4gbS5tYXAodGhpcy5fX3ZhbHVlKVxufVxuXG5NYXliZS5wcm90b3R5cGUuaXNOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKHRoaXMuX192YWx1ZSA9PSBudWxsKVxufVxuXG5NYXliZS5wcm90b3R5cGUuaXNKdXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gIXRoaXMuaXNOb3RoaW5nKClcbn1cblxuTWF5YmUucHJvdG90eXBlLk5vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgTm90aGluZygpXG59XG5cbk1heWJlLnByb3RvdHlwZS5KdXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IEp1c3QodGhpcy5fdmFsdWUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1heWJlXG4iLCJsZXQgTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbn1cblxuTm90aGluZy5wcm90b3R5cGUuaXNKdXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZmFsc2Vcbn1cbk5vdGhpbmcucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aGluZ1xuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIDIgYXJndW1lbnRzXG4gKlxuICogQGZ1bmN0aW9uIGFkZFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgMiBhcmd1bWVudHNcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXG4gKiBAcGFyYW0ge051bWJlcn0gYlxuICogQHJldHVybiB7TnVtYmVyfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkZCAoYSwgYikge1xuICByZXR1cm4gK2EgKyArYlxufSlcbiIsIi8qKlxuICpcbiAqXG4gKiBAZnVuY3Rpb24gZGl2aWRlXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZGl2aXNpb24gb2YgdGhlIDIgYXJndW1lbnRzXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxuICogQHBhcmFtIHtOdW1iZXJ9IGJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBkaXZpZGUgKGEsIGIpIHtcbiAgcmV0dXJuICthIC8gK2Jcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnTnVtYmVyJylcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGlzTmFOXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIG51bWJlciBpcyBOQU5cblxuICovXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9pcydcbmltcG9ydCBhbmQgZnJvbSAnLi4vdXRpbC9hbmQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTmFuICh4KSB7XG4gIHJldHVybiBhbmQoaXNOdW1iZXIoeCksIGlzTmFOKHgpKVxufTtcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgcHJvZHVjdCBvZiB0aGUgMiBhcmd1bWVudHNcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXG4gKiBAcGFyYW0ge051bWJlcn0gYlxuICogQHJldHVybiB7TnVtYmVyfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG11bHRpcGx5IChhLCBiKSB7XG4gIHJldHVybiArYSAqICtiXG59KVxuIiwiLyoqXG5cbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi4vdXRpbC9leGlzdHMnXG5pbXBvcnQgbm90IGZyb20gJy4uL3V0aWwvbm90J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi91dGlsL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHgsIHkpID0+IHtcbiAgZm9yIChsZXQga2V5WCBpbiB4KSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxuICAgIGlmIChub3QoZXF1YWxzKHhba2V5WF0sIHlba2V5WF0pKSkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmb3IgKGxldCBrZXlZIGluIHkpIHtcbiAgICBpZiAobm90KGV4aXN0cyh4W2tleVldKSkgJiYgZXhpc3RzKHlba2V5WV0pKSByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gb2JqZWN0RmlsdGVyXG4gKiBAcHJpdmF0ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9iamVjdEZpbHRlciAoZm4sIG8pIHtcbiAgbGV0IHIgPSB7fVxuICBjb25zdCBrID0ga2V5cyhvKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZm4ob1trW2ldXSkpIHJba1tpXV0gPSBvW2tbaV1dXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAcHJpdmF0ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBvKSB7XG4gIGNvbnN0IGsgPSBrZXlzKG8pXG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGsubGVuZ3RoXG4gIGxldCByID0gT2JqZWN0KGluaXQpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciA9IGNiKHIsIG9ba1tpXV0sIGtbaV0sIG8pXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyB7U3RyaW5nfSAtPiB7T2JqZWN0fSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcFxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBoYXMgKHByb3AsIG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eSwgZXZlbiBpZiBpdCBpcyBpbmhlcml0ZWRcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcge1N0cmluZ30gLT4ge09iamVjdH0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaGFzSW4gKHByb3AsIG9iaikge1xuICByZXR1cm4gcHJvcCBpbiBvYmpcbn0pXG4iLCIvKipcblxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ09iamVjdCcpXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIG93biBrZXlzIG9mIGFuIG9iamVjdCBhcyBhbiBBcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IFtiXVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhPYmplY3QoYSkpXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIGFsbCB0aGUga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBbYl1cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQHJldHVybiB7QXJyYXl9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24ga2V5cyAoYSkge1xuICBjb25zdCByID0gW11cbiAgZm9yIChjb25zdCBrIGluIGEpIHtcbiAgICByLnB1c2goaylcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIG9iamVjdCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4uL3V0aWwvZW1wdHknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgayA9IGtleXMoYSlcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltrW2ldXSA9IGNiKGFba1tpXV0sIGtbaV0sIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGlkZW50aWNhbCBmcm9tICcuLi91dGlsL2lkZW50aWNhbCdcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9vYmplY3QvaXMnXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi9hcnJheS9pcydcbmltcG9ydCB1bmlvbiBmcm9tICcuLi9hcnJheS91bmlvbidcblxuY29uc3QgbWVyZ2UgPSBjdXJyeSgob2JqTCwgb2JqUikgPT4ge1xuICBsZXQgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqTClcblxuICBpZiAoaWRlbnRpY2FsKG9iakwsIG9ialIpKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG9iakwpXG4gIH1cbiAgZm9yIChsZXQga2V5IGluIG9ialIpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpSLCBrZXkpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBjb25zdCBvbGRWYWx1ZSA9IG9ialJba2V5XVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gb2JqTFtrZXldXG5cbiAgICBpZiAoaXNPYmplY3Qob2xkVmFsdWUpICYmIGlzT2JqZWN0KG5ld1ZhbHVlKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShvbGRWYWx1ZSwgbmV3VmFsdWUpXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG5ld1ZhbHVlKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB1bmlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2xkVmFsdWUgLy8gVE9ETzogdGhpcyBpcyBhIHJlZmVyZW5jZSwgc2hvdWxkIGJlIGNsb25lXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlXG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgob2JqLCBuYW1lcykgPT4ge1xuICBsZXQgcmVzdWx0ID0ge31cblxuICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgcmV0dXJuIG5hbWVzLmluZGV4T2Yoa2V5KSA9PT0gLTFcbiAgfSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gcGF0aFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gcGF0aCAocGF0aCwgb2JqKSB7XG4gIGxldCB2YWwgPSBvYmpcbiAgbGV0IGlkeCA9IDBcbiAgbGV0IHBcbiAgd2hpbGUgKGlkeCA8IHBhdGgubGVuZ3RoKSB7XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcCA9IHBhdGhbaWR4XVxuICAgIHZhbCA9IE51bWJlci5pc0ludGVnZXIocClcbiAgICAgID8gcCA8IDAgPyB2YWxbdmFsLmxlbmd0aCArIHBdIDogdmFsW3BdXG4gICAgICA6IHZhbFtwXVxuICAgIGlkeCArPSAxXG4gIH1cbiAgcmV0dXJuIHZhbFxufSlcbi8vIGxldCByID0gb2JqXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbi8vICAgaWYgKHIgPT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZFxuLy8gICByID0gcltwYXRoW2ldXVxuLy8gfVxuLy8gcmV0dXJuIHJcbi8vIH0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBwaWNrXG4gKiBAZGVzY3JpcHRpb24gcmV0dXJucyBhIG5ldyBiamVjdCB3aXRoIG9ubHkgdGhlIHByb3BzIHRoYXQgYXJlIHByb3ZpZGVkXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyAtIEFycmF5IG9mIHByb3BlcnR5IG5hbWVzXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gVGhlIG9iamVjdCBmcm9tIHdoaWNoIHRvIHRha2UgdGhlIHByb3BlcnRpZXNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHBpY2sgKHByb3BzLCBvYmopIHtcbiAgY29uc3QgciA9IHt9XG4gIGxldCBpID0gMFxuICB3aGlsZSAoaSA8IHByb3BzLmxlbmd0aCkge1xuICAgIGlmIChwcm9wc1tpXSBpbiBvYmopIHtcbiAgICAgIHJbcHJvcHNbaV1dID0gb2JqW3Byb3BzW2ldXVxuICAgIH1cbiAgICBpICs9IDFcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHByb3BcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHByb3AgKHAsIG9iaikge1xuICByZXR1cm4gb2JqW3BdXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgY29uc3QgY29uY2F0ID0gZnVuY3Rpb24gX2NvbmNhdCAoc2VwYXJhdG9yID0gJywnKSB7IC8vIHVzZSBmdW5jdGlvbigpLCBhcnJvdyBmdW5jdGlvbiBkb2Vzbid0IGJpbmQgYXJndW1lbnRzXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLmpvaW4oc2VwYXJhdG9yKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25jYXRcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cbiAqL1xuaW1wb3J0IHRvQXJyYXkgZnJvbSAnLi4vYXJyYXkvdG8nXG5pbXBvcnQgbm90IGZyb20gJy4uL3V0aWwvbm90J1xuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFN0cmluZyAoc3RyKSB7IC8vIHVzZSBmdW5jdGlvbigpLCBhcnJvdyBmdW5jdGlvbiBkb2Vzbid0IGJpbmQgYXJndW1lbnRzXG4gIGxldCBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpXG5cbiAgYXJncy5zaGlmdCgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgveyhcXGQrKX0vZywgKG1hdGNoLCBpZHgpID0+IHtcbiAgICByZXR1cm4gbm90KGlzKCdVbmRlZmluZWQnLCBhcmdzW2lkeF0pKSA/IGFyZ3NbaWR4XSA6IG1hdGNoXG4gIH0pXG59XG4iLCIvKipcblxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ1N0cmluZycpXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhIHN0cmluZyBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9ICcnXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciArPSBjYihhLmNoYXJBdChpKSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogTW9kaWZpZXMgYW4gaXRlbSBpbiBhbiBhcnJheSB1c2luZyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb24gYWRqdXN0XG4gKiBAZGVzY3JpcHRpb24gTW9kaWZpZXMgYW4gaXRlbSBpbiBhbiBhcnJheSB1c2luZyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGEgLT4gYSkgLT4gbnVtIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gdG8gbW9kaWZ5IHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBpIC0gVGhlIGluZGV4IGF0IHdoaWNoIHRvIG1vZGlmeSB0aGUgYXJyYXksIGFjY2VwdHMgcG9zdGl0aXZlIGFuZCBuZWdhdGl2ZSBpbmRleGVzXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBbYV0gLSBBcnJheSB3aXRoIGRhdGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfSBbYV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhZGp1c3QgKGZuLCBpLCBhKSB7XG4gIGNvbnN0IHIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhKVxuICBjb25zdCBpZHggPSBpIDwgMCA/IHIubGVuZ3RoICsgaSA6IGlcbiAgaWYgKCFhW2lkeF0pIHJldHVybiByXG4gIHJbaWR4XSA9IGZuKHJbaWR4XSlcbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIGFkanVzdFdpdGhcbiAqIEBkZXNjcmlwdGlvbiBNb2RpZmllcyBhbiBpdGVtIGluIGFuIGFycmF5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoYSAtPiBhKSAtPiAoKGEgLT4gW2FdKSAtPiBbYV0gLT4gbnVtKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIHRvIG1vZGlmeSB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIC0gVGhlIHByZWRpY2F0ZSB0aGF0IHJldHVybnMgdGhlIGluZGV4ZXMgaWYgZm91bmRcbiAqIEBwYXJhbSB7SXRlcmFibGV9IFthXVxuICogQHJldHVybiB7SXRlcmFibGV9IFthXVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgbWFwIGZyb20gJy4uL3V0aWwvbWFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhZGp1c3RXaXRoIChmbiwgcHJlZCwgYSkge1xuICBjb25zdCBfZm4gPSB4ID0+IHtcbiAgICBpZiAocHJlZCh4KSkge1xuICAgICAgcmV0dXJuIGZuKHgpXG4gICAgfVxuICAgIHJldHVybiB4XG4gIH1cbiAgcmV0dXJuIG1hcChfZm4sIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEpKVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKlxuICogQGZ1bmN0aW9uIGFsbFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWxsIChjYiwgYSkge1xuICBsZXQgcmVzID0gdHJ1ZVxuICBmb3IgKGxldCBpIGluIGEpIHtcbiAgICBpZiAoIWNiKGFbaV0pKSB7XG4gICAgICByZXMgPSBmYWxzZVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufSlcbiIsIi8qKlxuICogQXBwbGllcyBhIGxpc3Qgb2YgcHJlZGljYXRlcyB0byB0aGUgZGF0YSBhbmQgcmV0dXJucyB0cnVlIGlmIGFsbCBwYXNzXG4gKlxuICogQGZ1bmN0aW9uIGFsbFBhc3NcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWVzIGEgbGlzdCBvZiBwcmVkaWNhdGVzIHRvIHRoZSBkYXRhIGFuZCByZXR1cm5zIHRydWUgaWYgYWxsIHBhc3NcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgWygqLi4uIC0+IEJvb2xlYW4pXSAtPiAoKi4uLiAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0FycmF5fSBwcmVkaWNhdGVzIEFuIGFycmF5IG9mIHByZWRpY2F0ZXMgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY29tYmluZWQgcHJlZGljYXRlXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWxsUGFzcyAoY2JzLCBhKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2JzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFjYnNbaV0oYSkpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBwcm92aWRlZFxuICpcbiAqIEBmdW5jdGlvbiBhbHdheXNcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBwcm92aWRlZFxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+ICgqIC0+IGEpXG4gKiBAcGFyYW0geyp9IGFcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFsd2F5cyAoeCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4geCB9XG59KVxuIiwiLyoqXG4gKiBDaGVja3MgaWYgYm90aCBwcmVkaWNhdGVzIGFyZSB0cnVlXG4gKlxuICogQGZ1bmN0aW9uIGFuZFxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiBib3RoIHByZWRpY2F0ZXMgYXJlIHRydWVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKHgsIHkpIC0+IGJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0geCAtIEEgcHJlZGljYXRlXG4gKiBAcGFyYW0geyp9IHkgLSBBIHByZWRpY2F0ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbmQgKHgsIHkpIHtcbiAgcmV0dXJuIHggJiYgeVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uIG9mIHRoZSBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKlxuICogQGZ1bmN0aW9uIGFueVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbiBvZiB0aGUgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoVE9ETylcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFueSAoY2IsIGEpIHtcbiAgbGV0IHJlcyA9IGZhbHNlXG4gIGZvciAobGV0IGkgaW4gYSkge1xuICAgIGlmIChjYihhW2ldKSkge1xuICAgICAgcmVzID0gdHJ1ZVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufSlcbiIsIi8qKlxuICogQXBwbGllcyBhIGxpc3Qgb2YgcHJlZGljYXRlcyB0byB0aGUgZGF0YSBhbmQgcmV0dXJucyB0cnVlIGlmIG9uZSBwYXNzZXNcbiAqXG4gKiBAZnVuY3Rpb24gYW55UGFzc1xuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBbKCouLi4gLT4gQm9vbGVhbildIC0+ICgqLi4uKSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0FycmF5fSBwcmVkaWNhdGVzIEFuIGFycmF5IG9mIHByZWRpY2F0ZXMgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY29tYmluZWQgcHJlZGljYXRlXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYW55UGFzcyAoY2JzLCBhKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2JzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNic1tpXShhKSkgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn0pXG4iLCIvKipcbiAqIEFwcGxpZXMgYSBsaXN0IG9mIGZ1bmN0aW9ucyB0byBhIGxpc3Qgb2YgdmFsdWVzIGFuZCByZXR1cm5zIGEgY29tYmluZWQgcmVzdWx0IGFycmF5XG4gKlxuICogQGZ1bmN0aW9uIGFwXG4gKiBAZGVzY3JpcHRpb24gQXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIHJldHVybnMgYSBjb21iaW5lZCByZXN1bHQgYXJyYXlcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgQHNpZyBbYSAtPiBiXSAtPiBbYV0gLT4gW2JdXG4gKiBAcGFyYW0geyhGdW5jdGlvbltdfEZ1bmN0aW9ufEFwcGxpY2F0aXZlKX0gZm5zIC0gQW4gYXJyYXkgb2YgZnVuY3Rpb25zIG9yIGEgZnVuY3Rpb24gb3IgYW4gYXBwbGljYXRpdmVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHMgLSBBbiBhcnJheSBvZiB2YWx1ZXNcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfSBbYV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuLi9fcHJpdmF0ZS9jdXJyeTEnXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcbmltcG9ydCBmb2xkIGZyb20gJy4uL2FycmF5L2ZvbGQnXG5pbXBvcnQgbWFwIGZyb20gJy4uL2FycmF5L21hcCdcblxuY29uc3QgaXNGdW5jdGlvbiA9IGlzKCdGdW5jdGlvbicpXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFwIChmbnMsIHZhbHMpIHtcbiAgaWYgKGlzRnVuY3Rpb24oZm5zLmFwKSkge1xuICAgIHJldHVybiBmbnMuYXAodmFscylcbiAgfVxuICBpZiAoaXNGdW5jdGlvbihmbnMpKSB7XG4gICAgcmV0dXJuIHggPT4gZm5zKHgpKHZhbHMoeCkpXG4gIH1cbiAgcmV0dXJuIGZvbGQoKGFjYywgZikgPT4gYWNjLmNvbmNhdChtYXAoY3VycnkxKGYpLCB2YWxzKSksIFtdLCBmbnMpXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gY29tcG9zZVxuICogQHJldHVybnMge2Z1bmN0aW9uKCk6ICp9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvc2UgKCkge1xuICBsZXQgZnVucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcblxuICByZXR1cm4gZnVuY3Rpb24gX2NvbXBvc2UgKCkge1xuICAgIGxldCBpbml0ID0gZnVuc1tmdW5zLmxlbmd0aCAtIDFdXG4gICAgbGV0IHJlc3VsdCA9IFtpbml0LmFwcGx5KGluaXQsIGFyZ3VtZW50cyldXG4gICAgbGV0IGkgPSBmdW5zLmxlbmd0aCAtIDJcblxuICAgIGZvciAoaTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIGNvbnN0IGZ1biA9IGZ1bnNbaV1cblxuICAgICAgcmVzdWx0ID0gW2Z1bi5hcHBseShmdW4sIHJlc3VsdCldXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRbMF1cbiAgfVxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKipcbiAqIEBmdW5jdGlvbiBjdXJyeVxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVzIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeSAoZnVuKSB7XG4gIGNvbnN0IGFyZ3NsZW4gPSBmdW4ubGVuZ3RoXG5cbiAgaWYgKGFyZ3NsZW4gPT09IDApIHtcbiAgICByZXR1cm4gZnVuXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlY3Vyc2VyKFtdKVxuXG4gIGZ1bmN0aW9uIHJlY3Vyc2UgKGFjYywgYXJncykge1xuICAgIGNvbnN0IF9hY2MgPSBhY2MuY29uY2F0KGFyZ3MpXG4gICAgcmV0dXJuIF9hY2MubGVuZ3RoIDwgYXJnc2xlblxuICAgICAgPyBjcmVhdGVSZWN1cnNlcihfYWNjKVxuICAgICAgOiBmdW4uYXBwbHkodGhpcywgX2FjYylcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlY3Vyc2VyIChhY2MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlY3Vyc2UoYWNjLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb24gZGVmYXVsdFRvXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gYiAtPiBhIHwgYlxuICogQHBhcmFtIHthfSBkZWZhdWx0IFRoZSBkZWZhdWx0IHZhbHVlLlxuICogQHBhcmFtIHtifSB2YWwgYHZhbGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkIG9mIGBkZWZhdWx0YCB1bmxlc3MgYHZhbGAgaXMgYG51bGxgLCBgdW5kZWZpbmVkYCBvciBgTmFOYC5cbiAqIEByZXR1cm4geyp9IFRoZSBzZWNvbmQgdmFsdWUgaWYgaXQgaXMgbm90IGBudWxsYCwgYHVuZGVmaW5lZGAgb3IgYE5hTmAsIG90aGVyd2lzZSB0aGUgZGVmYXVsdCB2YWx1ZVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGRlZmF1bHRUbyAoZCwgdikge1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICByZXR1cm4gdiA9PSBudWxsIHx8IHYgIT09IHYgPyBkIDogdlxufSlcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVtcHR5ICh4KSB7XG4gIHJldHVybiBuZXcgeC5jb25zdHJ1Y3RvcigpXG59O1xuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBlcXVhbHNcbiAqIEBkZXNjcmlwdGlvbiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuL2V4aXN0cydcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi9pZGVudGljYWwnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5pbXBvcnQgbm90IGZyb20gJy4vbm90J1xuaW1wb3J0IG9yIGZyb20gJy4vb3InXG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vb2JqZWN0L2lzJ1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vYXJyYXkvaXMnXG5pbXBvcnQgaXNCb29sZWFuIGZyb20gJy4uL2Jvb2xlYW4vaXMnXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi4vbnVtYmVyL2lzJ1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4uL3N0cmluZy9pcydcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi4vZGF0ZS9pcydcbmltcG9ydCBlcXVhbHNBcnJheSBmcm9tICcuLi9hcnJheS9lcXVhbHMnXG5pbXBvcnQgZXF1YWxzT2JqZWN0IGZyb20gJy4uL29iamVjdC9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFscyAoeCwgeSkge1xuICBpZiAoaWRlbnRpY2FsKHgsIHkpKSByZXR1cm4gdHJ1ZVxuXG4gIGlmICh0eXBlKHgpICE9PSB0eXBlKHkpKSByZXR1cm4gZmFsc2VcblxuICBpZiAob3Iobm90KGV4aXN0cyh4KSksIG5vdChleGlzdHMoeSkpKSkgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKHguY29uc3RydWN0b3IgIT09IHkuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZVxuXG4gIGlmIChpc1N0cmluZyh4KSB8fCBpc0Jvb2xlYW4oeCkgfHwgaXNOdW1iZXIoeCkgfHwgaXNEYXRlKHgpKSB7XG4gICAgcmV0dXJuIGlkZW50aWNhbCh4LnZhbHVlT2YoKSwgeS52YWx1ZU9mKCkpXG4gIH1cbiAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzQXJyYXkoeCwgeSlcbiAgfSBlbHNlIGlmIChpc09iamVjdCh4KSkge1xuICAgIHJldHVybiBlcXVhbHNPYmplY3QoeCwgeSlcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBleGlzdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhpc3RzICh4KSB7XG4gIHJldHVybiAhKHggPT0gbnVsbClcbn07XG4iLCIvKipcbiAqIEZpbmQgdGhlIGluZGV4IG1hdGNoaW5nIGEgcHJlZGljYXRlXG4gKlxuICogQGZ1bmN0aW9uIGZpbmRJbmRleFxuICogQGRlc2NyaXB0aW9uIEZpbmQgdGhlIGluZGV4IG1hdGNoaW5nIGEgcHJlZGljYXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IGJvb2xlYW4pIC0+IFthXSAtPiBudW1iZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFByZWRpY2F0ZSBmdW5jdGlvbiByZXR1cm5zIGEgYm9vbGVhblxuICogQHBhcmFtIHtBcnJheX0gQW4gYXJyYXkgbGlrZSBvYmplY3RcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZpbmRJbmRleCAoZm4sIGEpIHtcbiAgbGV0IGkgPSAwXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICB3aGlsZSAoaSA8IGwpIHtcbiAgICBpZiAoZm4oYVtpXSkpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICAgIGkgKz0gMVxuICB9XG4gIHJldHVybiAtMVxufSlcbiIsIi8qKlxuICogUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ6IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZcOpXG4gKlxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnogaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgbGlrZSBvYmplY3QgYW5kIGNhbGxhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlw6lcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKChhLCBiLCBjLCBhKSDihpIgYSkg4oaSIGEg4oaSIFtiXSDihpIgYVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgcmVjZWl2ZXMgNCB2YWx1ZXM6IHRoZSBhY2N1bXVsYXRvciwgdGhlIGl0ZW0sIHRoZSBpbmRleCwgYW5kIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHsqfSBhIGlzIHRoZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0geyp9IFtiXSB0aGUgYXJyYXkgbGlrZSBpdGVtIHRvIGl0ZXJhdGUgb3ZlclxuICogQHJldHVybiB7Kn0gYSBpcyB0aGUgYWNjdW11bGF0ZWQgdmFsdWVcbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgYXJyYXlGb2xkIGZyb20gJy4uL2FycmF5L2ZvbGQnXG5pbXBvcnQgb2JqZWN0Rm9sZCBmcm9tICcuLi9vYmplY3QvZm9sZCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIGEpIHtcbiAgY29uc3QgdHlwZU1hcCA9IHtcbiAgICAnT2JqZWN0Jzogb2JqZWN0Rm9sZCxcbiAgICAnQXJyYXknOiBhcnJheUZvbGRcbiAgfVxuICAvLyBpZiAoYS5uZXh0KSB7XG4gIC8vICAgcmV0dXJuIGl0ZXJhYmxlRm9sZChjYiwgaW5pdCwgYSlcbiAgLy8gfVxuICAvLyBpZiAodHlwZShTeW1ib2wpICE9PSAndW5kZWZpbmVkJyAmJiBhW1N5bWJvbC5pdGVyYXRvcl0pIHtcbiAgLy8gICByZXR1cm4gaXRlcmFibGVGb2xkKGNiLCBpbml0LCBhW1N5bWJvbC5pdGVyYXRvcl0oKSlcbiAgLy8gfVxuICByZXR1cm4gdHlwZU1hcFt0eXBlKGEpXShjYiwgaW5pdCwgYSlcbn0pXG5cbi8vIGZ1bmN0aW9uIGl0ZXJhYmxlRm9sZCAoY2IsIGFjYywgZ2VuKSB7XG4vLyAgIGxldCBzdGVwID0gZ2VuLm5leHQoKVxuLy8gICB3aGlsZSAoIXN0ZXAuZG9uZSkge1xuLy8gICAgIGFjYyA9IGNiKGFjYywgc3RlcC52YWx1ZSlcbi8vICAgICBzdGVwID0gZ2VuLm5leHQoKVxuLy8gICB9XG4vLyAgIHJldHVybiBhY2Ncbi8vIH1cbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gaWRlbnRpY2FsXG4gKiBAZGVzY3JpcHRpb24gY2hlY2tzIGZvciBpZGVudGludGljYWwgaXRlbXNcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgaXNOYW4gZnJvbSAnLi4vbnVtYmVyL2lzTmFuJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBpZGVudGljYWwgKHgsIHkpIHtcbiAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkge1xuICAgIHJldHVybiAxIC8geCA9PT0gMSAvIHlcbiAgfVxuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuICEhKGlzTmFuKHgpICYmIGlzTmFuKHkpKVxufSlcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gaWRlbnRpdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSB2YWx1ZSBzdXBwbGllZCB0byB0aGUgZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZGVudGl0eSAoeCkge1xuICByZXR1cm4geFxufTtcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGlzXG4gKiBAZGVzY3JpcHRpb24gVmVyaWZpZXMgdGhlIHR5cGUgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50XG4gKlxuICovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBpcyAoQ3RvciwgdmFsKSB7XG4gIHJldHVybiB0eXBlKHZhbCkgPT09IEN0b3Jcbn0pXG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGVtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZW1wdHkgZXF1aXZhbGVudCBvZiB0aGUgZmlyc3QgYXJndW1lbnRcbiAqL1xuaW1wb3J0IGVtcHR5IGZyb20gJy4vZW1wdHknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xuaW1wb3J0IGVxdWFscyBmcm9tICcuL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbXB0eSAoeCkge1xuICByZXR1cm4gZXhpc3RzKHgpICYmIGVxdWFscyh4LCBlbXB0eSh4KSlcbn07XG4iLCIvKipcbiAqIFwibGlmdHNcIiBhIGZ1bmN0aW9uIG9mIGFyaXR5ID4gMSBzbyB0aGF0IGl0IG1heSBcIm1hcCBvdmVyXCIgYSBsaXN0LCBGdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvbiBsaWZ0XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnICgqLi4uIC0+ICopIC0+IChbKl0uLi4gLT4gWypdKVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgY3VycnkxIGZyb20gJy4uL19wcml2YXRlL2N1cnJ5MSdcbmltcG9ydCBmb2xkIGZyb20gJy4uL3V0aWwvZm9sZCdcbmltcG9ydCBhcCBmcm9tICcuLi91dGlsL2FwJ1xuaW1wb3J0IG1hcCBmcm9tICcuLi91dGlsL21hcCdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbGlmdCAoZm4pIHtcbiAgY29uc3QgbGlmdGVkID0gY3VycnkxKGN1cnJ5KGZuKSlcbiAgcmV0dXJuIGN1cnJ5KGZ1bmN0aW9uIF9saWZ0ICgpIHtcbiAgICByZXR1cm4gZm9sZChhcCwgbWFwKGxpZnRlZCwgYXJndW1lbnRzWzBdKSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSlcbiAgfSlcbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBpdGVyYWJsZSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIHdoaWNoIG1hcHMgb3ZlciBhbiBpdGVyYWJsZS5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IGIgLT4gYlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgYXJyYXlNYXAgZnJvbSAnLi4vYXJyYXkvbWFwJ1xuaW1wb3J0IG9iamVjdE1hcCBmcm9tICcuLi9vYmplY3QvbWFwJ1xuaW1wb3J0IG1hcE1hcCBmcm9tICcuLi9tYXAvbWFwJ1xuaW1wb3J0IHN0cmluZ01hcCBmcm9tICcuLi9zdHJpbmcvbWFwJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi4vdXRpbC90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIHN3aXRjaCAodHlwZShhKSkge1xuICAvLyBzd2l0Y2ggKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSkge1xuICAgIGNhc2UgJ0Z1bmN0aW9uJzpcbiAgICAgIHJldHVybiBjdXJyeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYi5jYWxsKHRoaXMsIGEuYXBwbHkodGhpcywgYXJndW1lbnRzKSlcbiAgICAgIH0pXG4gICAgY2FzZSAnT2JqZWN0JzpcbiAgICAgIHJldHVybiBvYmplY3RNYXAoY2IsIGEpXG4gICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgIHJldHVybiBzdHJpbmdNYXAoY2IsIGEpXG4gICAgY2FzZSAnTWFwJzpcbiAgICAgIHJldHVybiBtYXBNYXAoY2IsIGEpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBhcnJheU1hcChjYiwgYSlcbiAgfVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgbGFyZ2VzdCBvZiB0aGUgMiBhcmd1bWVudHMgcHJvdmlkZWRcbiAqXG4gKiBAZnVuY3Rpb24gbWF4XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybiB7Kn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXggKGEsIGIpIHtcbiAgcmV0dXJuIGIgPiBhID8gYiA6IGFcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBub3RcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG5vdCAoeCkge1xuICByZXR1cm4gIXhcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBvclxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBvbmUgb3IgdGhlIG90aGVyIGlzIHRydWVcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9yICh4LCB5KSB7XG4gIHJldHVybiB4IHx8IHlcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiB0cnV0aHlcbiAqL1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuL2V4aXN0cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJ1dGh5ICh4KSB7XG4gIHJldHVybiAoeCAhPT0gZmFsc2UpICYmIGV4aXN0cyh4KVxufTtcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHR5cGVcbiAqL1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuLi9fcHJpdmF0ZS9jdXJyeTEnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5MShmdW5jdGlvbiB0eXBlICh4KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkuc2xpY2UoOCwgLTEpXG59KVxuIiwiLyoqXG5cbiAqIHppcFxuICpcbiAqIEBmdW5jdGlvbiB6aXBcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgemlwV2l0aCBmcm9tICcuL3ppcFdpdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHppcCAoYSwgYikge1xuICByZXR1cm4gemlwV2l0aChmdW5jdGlvbiBfemlwV2l0aCAoeCwgeSkgeyByZXR1cm4gW3gsIHldIH0sIGEsIGIpXG59KVxuIiwiLyoqXG5cbiAqIHppcFdpdGhcbiAqXG4gKiAgQGZ1bmN0aW9uIHppcFdpdGhcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHppcFdpdGggKGNiLCBhLCBiKSB7XG4gIGNvbnN0IGFyciA9IFtdXG4gIGNvbnN0IGxlbiA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aClcbiAgbGV0IGkgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGFyci5wdXNoKGNiKGFbaV0sIGJbaV0pKVxuICB9XG4gIHJldHVybiBhcnJcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9