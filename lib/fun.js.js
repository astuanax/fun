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
 * Created by dierickx.len on 26/03/2017.
 */
var _default = (0, _curry.default)(function (start, end) {
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

var _WEEKDAYS = __webpack_require__(/*! ../constants/WEEKDAYS */ "./src/constants/WEEKDAYS.js");

var _MONTHS = __webpack_require__(/*! ../constants/MONTHS */ "./src/constants/MONTHS.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */

/**
 * Created by dierickx.len on 20/01/2017.
 */
var getWeek = function getWeek(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())); // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7

  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7)); // Get first day of year

  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)); // Calculate full weeks to nearest Thursday

  var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7); // Return array of year and week number

  return [d.getUTCFullYear(), weekNo];
}; // utility functions for the date formatting


var ZEROS = '00000000';
var lastN = (0, _curry.default)(function (n, str) {
  return str.substring(str.length - n, str.length);
});
var firstN = (0, _curry.default)(function (n, str) {
  return str.substring(0, n);
});
var fill = (0, _curry.default)(function (digits, n) {
  return lastN(digits, ZEROS + n);
}); // date/time regex
// eslint-disable-next-line no-useless-escape

var DATE_TOKENS = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

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
    return getWeek(d);
  },
  ww: function ww(d) {
    return fill(2, getWeek(d));
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

var _default = (0, _curry.default)(function (format, date) {
  // check for valid date
  if (!(0, _isValid.default)(date)) return 'Invalid Date'; // return string

  return format.match(DATE_TOKENS).map(swapTokenWithValue(date)).join(''); // return joined string
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
    return _fold.default;
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
    return _is6.default;
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
    return _map.default;
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
    return _is7.default;
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

var _concat = _interopRequireDefault(__webpack_require__(/*! string/concat */ "./src/string/concat.js"));

var _formatString = _interopRequireDefault(__webpack_require__(/*! string/formatString */ "./src/string/formatString.js"));

var _is5 = _interopRequireDefault(__webpack_require__(/*! string/is */ "./src/string/is.js"));

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

var _fold = _interopRequireDefault(__webpack_require__(/*! util/fold */ "./src/util/fold.js"));

var _identical = _interopRequireDefault(__webpack_require__(/*! util/identical */ "./src/util/identical.js"));

var _identity = _interopRequireDefault(__webpack_require__(/*! util/identity */ "./src/util/identity.js"));

var _is6 = _interopRequireDefault(__webpack_require__(/*! util/is */ "./src/util/is.js"));

var _isEmpty = _interopRequireDefault(__webpack_require__(/*! util/isEmpty */ "./src/util/isEmpty.js"));

var _lift = _interopRequireDefault(__webpack_require__(/*! util/lift */ "./src/util/lift.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! util/map */ "./src/util/map.js"));

var _max = _interopRequireDefault(__webpack_require__(/*! util/max */ "./src/util/max.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! util/not */ "./src/util/not.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! util/or */ "./src/util/or.js"));

var _truthy = _interopRequireDefault(__webpack_require__(/*! util/truthy */ "./src/util/truthy.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! util/type */ "./src/util/type.js"));

var _zip = _interopRequireDefault(__webpack_require__(/*! util/zip */ "./src/util/zip.js"));

var _zipWith = _interopRequireDefault(__webpack_require__(/*! util/zipWith */ "./src/util/zipWith.js"));

var _diffDate = _interopRequireDefault(__webpack_require__(/*! date/diffDate */ "./src/date/diffDate.js"));

var _formatDateTime = _interopRequireDefault(__webpack_require__(/*! date/formatDateTime */ "./src/date/formatDateTime.js"));

var _is7 = _interopRequireDefault(__webpack_require__(/*! date/is */ "./src/date/is.js"));

var _isFutureDate = _interopRequireDefault(__webpack_require__(/*! date/isFutureDate */ "./src/date/isFutureDate.js"));

var _isValid = _interopRequireDefault(__webpack_require__(/*! date/isValid */ "./src/date/isValid.js"));

var _toDay = _interopRequireDefault(__webpack_require__(/*! date/toDay */ "./src/date/toDay.js"));

var _toHour = _interopRequireDefault(__webpack_require__(/*! date/toHour */ "./src/date/toHour.js"));

var _toMinutes = _interopRequireDefault(__webpack_require__(/*! date/toMinutes */ "./src/date/toMinutes.js"));

var _toSeconds = _interopRequireDefault(__webpack_require__(/*! date/toSeconds */ "./src/date/toSeconds.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4uanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1bi5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvX3ByaXZhdGUvY3VycnkxLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L3RvLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS91bmlvbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9GLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9ib29sZWFuL1QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2Jvb2xlYW4vaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2NvbnN0YW50cy9NT05USFMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2NvbnN0YW50cy9XRUVLREFZUy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9kaWZmRGF0ZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9mb3JtYXREYXRlVGltZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pc0Z1dHVyZURhdGUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvaXNWYWxpZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b0RheS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b0hvdXIuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9NaW51dGVzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvU2Vjb25kcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9KdXN0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tb25hZHMvTWF5YmUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9Ob3RoaW5nLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvYWRkLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvZGl2aWRlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL251bWJlci9pc05hbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL211bHRpcGx5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZXF1YWxzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZm9sZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2hhcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2hhc0luLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3Qva2V5c0luLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9vbWl0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvY29uY2F0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvZm9ybWF0U3RyaW5nLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWRqdXN0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FkanVzdFdpdGguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWxsLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FsbFBhc3MuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWx3YXlzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FuZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbnkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYW55UGFzcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9jb21wb3NlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2N1cnJ5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2RlZmF1bHRUby5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9lbXB0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZXhpc3RzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2ZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9mb2xkLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lkZW50aWNhbC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pc0VtcHR5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2xpZnQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL21heC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9ub3QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvb3IuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvdHJ1dGh5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3R5cGUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvemlwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3ppcFdpdGguanMiXSwibmFtZXMiOlsiY3VycnkxIiwiZm4iLCJjdXJyaWVkIiwiYSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImVxdWFsc0FycmF5IiwieCIsInkiLCJpIiwiZm9sZCIsImNiIiwiaW5pdCIsImwiLCJyIiwibWFwIiwiQXJyYXkiLCJ0b0FycmF5IiwiYXBwbHkiLCJ1bmlvbkFycmF5IiwiYUwiLCJhUiIsImZyb20iLCJTZXQiLCJjb25jYXQiLCJNT05USFMiLCJXRUVLREFZUyIsInN0YXJ0IiwiZW5kIiwiRGF0ZSIsImdldFRpbWUiLCJnZXRXZWVrIiwiZCIsIlVUQyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwic2V0VVRDRGF0ZSIsImdldFVUQ0RhdGUiLCJnZXRVVENEYXkiLCJ5ZWFyU3RhcnQiLCJnZXRVVENGdWxsWWVhciIsIndlZWtObyIsIk1hdGgiLCJjZWlsIiwiWkVST1MiLCJsYXN0TiIsIm4iLCJzdHIiLCJzdWJzdHJpbmciLCJmaXJzdE4iLCJmaWxsIiwiZGlnaXRzIiwiREFURV9UT0tFTlMiLCJtb2RDZWlsaW5nIiwibW9kIiwidmFsIiwidG9rZW5zIiwiWVlZWSIsIllZIiwiTU1NTSIsIk1NTSIsIk1NIiwiTSIsInciLCJ3dyIsIkREIiwiRCIsImRkZGQiLCJnZXREYXkiLCJkZGQiLCJkZCIsIkhIIiwiZ2V0SG91cnMiLCJIIiwiaGgiLCJoIiwibW0iLCJnZXRNaW51dGVzIiwibSIsInNzIiwiZ2V0U2Vjb25kcyIsInMiLCJBIiwiU1NTIiwiZ2V0TWlsbGlzZWNvbmRzIiwiU1MiLCJTIiwiUSIsInN3YXBUb2tlbldpdGhWYWx1ZSIsImRhdGUiLCJ0b2tlbiIsImZvcm1hdCIsIm1hdGNoIiwiam9pbiIsImlzVmFsaWQiLCJpc0Zpbml0ZSIsInZhbHVlT2YiLCJmb3JFYWNoIiwidiIsImsiLCJzZXQiLCJKdXN0IiwiX3ZhbHVlIiwicHJvdG90eXBlIiwiaXNKdXN0IiwiaXNOb3RoaW5nIiwiTWF5YmUiLCJfX3ZhbHVlIiwib2YiLCJnZXRPckVsc2UiLCJmIiwiYXAiLCJOb3RoaW5nIiwiYWRkIiwiYiIsImRpdmlkZSIsImlzTmFuIiwiaXNOYU4iLCJtdWx0aXBseSIsImtleVgiLCJrZXlZIiwibyIsIk9iamVjdCIsImhhcyIsInByb3AiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJoYXNJbiIsImtleXMiLCJwdXNoIiwibWVyZ2UiLCJvYmpMIiwib2JqUiIsInJlc3VsdCIsImFzc2lnbiIsImtleSIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJuYW1lcyIsImZpbHRlciIsImluZGV4T2YiLCJfY29uY2F0Iiwic2VwYXJhdG9yIiwic2xpY2UiLCJmb3JtYXRTdHJpbmciLCJhcmdzIiwic2hpZnQiLCJyZXBsYWNlIiwiaWR4IiwiY2hhckF0IiwiYWRqdXN0IiwiYWRqdXN0V2l0aCIsInByZWQiLCJfZm4iLCJhbGwiLCJyZXMiLCJhbGxQYXNzIiwiY2JzIiwiYWx3YXlzIiwiYW5kIiwiYW55IiwiYW55UGFzcyIsImlzRnVuY3Rpb24iLCJmbnMiLCJ2YWxzIiwiYWNjIiwiY29tcG9zZSIsImZ1bnMiLCJfY29tcG9zZSIsImZ1biIsImN1cnJ5IiwiYXJnc2xlbiIsImNyZWF0ZVJlY3Vyc2VyIiwicmVjdXJzZSIsIl9hY2MiLCJkZWZhdWx0VG8iLCJlbXB0eSIsImNvbnN0cnVjdG9yIiwiZXF1YWxzIiwiZXhpc3RzIiwiZmluZEluZGV4IiwidHlwZU1hcCIsImlkZW50aWNhbCIsImlkZW50aXR5IiwiaXMiLCJDdG9yIiwiaXNFbXB0eSIsImxpZnQiLCJsaWZ0ZWQiLCJfbGlmdCIsIm1heCIsIm5vdCIsIm9yIiwidHJ1dGh5IiwidHlwZSIsInRvU3RyaW5nIiwiemlwIiwiX3ppcFdpdGgiLCJ6aXBXaXRoIiwiYXJyIiwibGVuIiwibWluIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7OztBQU9lLFNBQVNBLE1BQVQsQ0FBaUJDLEVBQWpCLEVBQXFCO0FBQ2xDLFNBQU8sU0FBU0MsT0FBVCxDQUFrQkMsQ0FBbEIsRUFBcUI7QUFDMUIsV0FBT0MsU0FBUyxDQUFDQyxNQUFWLEtBQXFCLENBQXJCLEdBQ0gsSUFERyxHQUVISixFQUFFLENBQUNFLENBQUQsQ0FGTjtBQUdELEdBSkQ7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7O0FBQ0E7O0FBQ0E7Ozs7QUFUQTs7Ozs7OztlQVdlLG9CQUFNLFNBQVNHLFdBQVQsQ0FBc0JDLENBQXRCLEVBQXlCQyxDQUF6QixFQUE0QjtBQUMvQyxNQUFJRCxDQUFDLENBQUNGLE1BQUYsS0FBYUcsQ0FBQyxDQUFDSCxNQUFuQixFQUEyQjtBQUN6QixXQUFPLEtBQVA7QUFDRDs7QUFDRCxPQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLENBQUMsQ0FBQ0YsTUFBdEIsRUFBOEJJLENBQUMsRUFBL0IsRUFBbUM7QUFDakMsUUFBSSxrQkFBSSxxQkFBT0YsQ0FBQyxDQUFDRSxDQUFELENBQVIsRUFBYUQsQ0FBQyxDQUFDQyxDQUFELENBQWQsQ0FBSixDQUFKLEVBQTZCLE9BQU8sS0FBUDtBQUM5Qjs7QUFDRCxTQUFPLElBQVA7QUFDRCxDQVJjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNZZjs7OztBQXZCQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7O2VBVWUsb0JBQU0sU0FBU0MsSUFBVCxDQUFlQyxFQUFmLEVBQW1CQyxJQUFuQixFQUF5QlQsQ0FBekIsRUFBNEI7QUFDL0MsTUFBSU0sQ0FBQyxHQUFHLENBQUMsQ0FBVDtBQUNBLE1BQU1JLENBQUMsR0FBR1YsQ0FBQyxDQUFDRSxNQUFaO0FBQ0EsTUFBSVMsQ0FBQyxHQUFHRixJQUFSOztBQUNBLFNBQU8sRUFBRUgsQ0FBRixHQUFNSSxDQUFiLEVBQWdCO0FBQ2RDLEtBQUMsR0FBR0gsRUFBRSxDQUFDRyxDQUFELEVBQUlYLENBQUMsQ0FBQ00sQ0FBRCxDQUFMLEVBQVVBLENBQVYsRUFBYU4sQ0FBYixDQUFOO0FBQ0Q7O0FBQ0QsU0FBT1csQ0FBUDtBQUNELENBUmMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZmOzs7O0FBZkE7Ozs7Ozs7Ozs7Ozs7O2VBaUJlLGlCQUFHLE9BQUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBZkE7Ozs7Ozs7Ozs7Ozs7OztlQWlCZSxvQkFBTSxTQUFTQyxHQUFULENBQWNKLEVBQWQsRUFBa0JSLENBQWxCLEVBQXFCO0FBQ3hDLE1BQUlNLENBQUMsR0FBRyxDQUFDLENBQVQ7QUFDQSxNQUFNSSxDQUFDLEdBQUdWLENBQUMsQ0FBQ0UsTUFBWjtBQUNBLE1BQU1TLENBQUMsR0FBRyxJQUFJRSxLQUFKLENBQVVILENBQVYsQ0FBVjs7QUFDQSxTQUFPLEVBQUVKLENBQUYsR0FBTUksQ0FBYixFQUFnQjtBQUNkQyxLQUFDLENBQUNMLENBQUQsQ0FBRCxHQUFPRSxFQUFFLENBQUNSLENBQUMsQ0FBQ00sQ0FBRCxDQUFGLEVBQU9BLENBQVAsRUFBVU4sQ0FBVixDQUFUO0FBQ0Q7O0FBQ0QsU0FBT1csQ0FBUDtBQUNELENBUmMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmUsU0FBU0csT0FBVCxDQUFrQlYsQ0FBbEIsRUFBcUI7QUFDbEMsU0FBT0EsQ0FBQyxDQUFDRixNQUFGLEtBQWEsQ0FBYixHQUFpQixDQUFDRSxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQWpCLEdBQTBCUyxLQUFLLENBQUNFLEtBQU4sQ0FBWSxJQUFaLEVBQWtCWCxDQUFsQixDQUFqQztBQUNEOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BEOzs7O0FBWkE7Ozs7Ozs7Ozs7OztlQWNlLG9CQUFNLFNBQVNZLFVBQVQsQ0FBcUJDLEVBQXJCLEVBQXlCQyxFQUF6QixFQUE2QjtBQUNoRCxTQUFPTCxLQUFLLENBQUNNLElBQU4sQ0FBVyxJQUFJQyxHQUFKLENBQVFILEVBQUUsQ0FBQ0ksTUFBSCxDQUFVSCxFQUFWLENBQVIsQ0FBWCxDQUFQO0FBQ0QsQ0FGYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGY7Ozs7QUFUQTs7Ozs7Ozs7O2VBV2UscUJBQU8sS0FBUCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFUQTs7Ozs7Ozs7O2VBV2UscUJBQU8sSUFBUCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGY7Ozs7QUFWQTs7Ozs7Ozs7OztlQVllLGlCQUFHLFNBQUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pmOzs7QUFJTyxJQUFNSSxNQUFNLEdBQUcsQ0FDcEIsU0FEb0IsRUFFcEIsVUFGb0IsRUFHcEIsT0FIb0IsRUFJcEIsT0FKb0IsRUFLcEIsS0FMb0IsRUFNcEIsTUFOb0IsRUFPcEIsTUFQb0IsRUFRcEIsUUFSb0IsRUFTcEIsV0FUb0IsRUFVcEIsU0FWb0IsRUFXcEIsVUFYb0IsRUFZcEIsVUFab0IsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDs7O0FBR08sSUFBTUMsUUFBUSxHQUFHLENBQ3RCLFFBRHNCLEVBRXRCLFFBRnNCLEVBR3RCLFNBSHNCLEVBSXRCLFdBSnNCLEVBS3RCLFVBTHNCLEVBTXRCLFFBTnNCLEVBT3RCLFVBUHNCLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQOzs7O0FBSEE7OztlQUtlLG9CQUFNLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUNuQyxTQUFRLElBQUlDLElBQUosQ0FBU0YsS0FBVCxFQUFnQkcsT0FBaEIsS0FBNEIsSUFBSUQsSUFBSixDQUFTRCxHQUFULEVBQWNFLE9BQWQsRUFBcEM7QUFDRCxDQUZjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEZjs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQVBBOztBQUNBOzs7QUFRQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxDQUFELEVBQU87QUFDckI7QUFDQUEsR0FBQyxHQUFHLElBQUlILElBQUosQ0FBU0EsSUFBSSxDQUFDSSxHQUFMLENBQVNELENBQUMsQ0FBQ0UsV0FBRixFQUFULEVBQTBCRixDQUFDLENBQUNHLFFBQUYsRUFBMUIsRUFBd0NILENBQUMsQ0FBQ0ksT0FBRixFQUF4QyxDQUFULENBQUosQ0FGcUIsQ0FHckI7QUFDQTs7QUFDQUosR0FBQyxDQUFDSyxVQUFGLENBQWFMLENBQUMsQ0FBQ00sVUFBRixLQUFpQixDQUFqQixJQUFzQk4sQ0FBQyxDQUFDTyxTQUFGLE1BQWlCLENBQXZDLENBQWIsRUFMcUIsQ0FNckI7O0FBQ0EsTUFBSUMsU0FBUyxHQUFHLElBQUlYLElBQUosQ0FBU0EsSUFBSSxDQUFDSSxHQUFMLENBQVNELENBQUMsQ0FBQ1MsY0FBRixFQUFULEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLENBQVQsQ0FBaEIsQ0FQcUIsQ0FTckI7O0FBQ0EsTUFBSUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxDQUFFLENBQUNaLENBQUMsR0FBR1EsU0FBTCxJQUFrQixRQUFuQixHQUErQixDQUFoQyxJQUFxQyxDQUEvQyxDQUFiLENBVnFCLENBWXJCOztBQUNBLFNBQU8sQ0FBQ1IsQ0FBQyxDQUFDUyxjQUFGLEVBQUQsRUFBcUJDLE1BQXJCLENBQVA7QUFDRCxDQWRELEMsQ0FnQkE7OztBQUNBLElBQU1HLEtBQUssR0FBRyxVQUFkO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLG9CQUFNLFVBQUNDLENBQUQsRUFBSUMsR0FBSjtBQUFBLFNBQVlBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjRCxHQUFHLENBQUMzQyxNQUFKLEdBQWEwQyxDQUEzQixFQUE4QkMsR0FBRyxDQUFDM0MsTUFBbEMsQ0FBWjtBQUFBLENBQU4sQ0FBZDtBQUNBLElBQU02QyxNQUFNLEdBQUcsb0JBQU0sVUFBQ0gsQ0FBRCxFQUFJQyxHQUFKO0FBQUEsU0FBWUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsQ0FBZCxFQUFpQkYsQ0FBakIsQ0FBWjtBQUFBLENBQU4sQ0FBZjtBQUNBLElBQU1JLElBQUksR0FBRyxvQkFBTSxVQUFDQyxNQUFELEVBQVNMLENBQVQ7QUFBQSxTQUFlRCxLQUFLLENBQUNNLE1BQUQsRUFBU1AsS0FBSyxHQUFHRSxDQUFqQixDQUFwQjtBQUFBLENBQU4sQ0FBYixDLENBRUE7QUFDQTs7QUFDQSxJQUFNTSxXQUFXLEdBQUcsb0tBQXBCOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFNBQWNBLEdBQUcsR0FBR0QsR0FBTixJQUFhQSxHQUEzQjtBQUFBLENBQW5CLEMsQ0FFQTs7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRSxjQUFBMUIsQ0FBQztBQUFBLFdBQUltQixJQUFJLENBQUMsQ0FBRCxFQUFJbkIsQ0FBQyxDQUFDRSxXQUFGLEVBQUosQ0FBUjtBQUFBLEdBRE07QUFFYnlCLElBQUUsRUFBRSxZQUFBM0IsQ0FBQztBQUFBLFdBQUljLEtBQUssQ0FBQyxDQUFELEVBQUlLLElBQUksQ0FBQyxDQUFELEVBQUluQixDQUFDLENBQUNFLFdBQUYsRUFBSixDQUFSLENBQVQ7QUFBQSxHQUZRO0FBR2IwQixNQUFJLEVBQUUsY0FBQTVCLENBQUM7QUFBQSxXQUFJLGVBQU9BLENBQUMsQ0FBQ0csUUFBRixFQUFQLENBQUo7QUFBQSxHQUhNO0FBSWIwQixLQUFHLEVBQUUsYUFBQTdCLENBQUM7QUFBQSxXQUFJa0IsTUFBTSxDQUFDLENBQUQsRUFBSSxlQUFPbEIsQ0FBQyxDQUFDRyxRQUFGLEVBQVAsQ0FBSixDQUFWO0FBQUEsR0FKTztBQUtiMkIsSUFBRSxFQUFFLFlBQUE5QixDQUFDO0FBQUEsV0FBSW1CLElBQUksQ0FBQyxDQUFELEVBQUluQixDQUFDLENBQUNHLFFBQUYsS0FBZSxDQUFuQixDQUFSO0FBQUEsR0FMUTtBQU1iNEIsR0FBQyxFQUFFLFdBQUEvQixDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDRyxRQUFGLEtBQWUsQ0FBbkI7QUFBQSxHQU5TO0FBT2I2QixHQUFDLEVBQUUsV0FBQWhDLENBQUM7QUFBQSxXQUFJRCxPQUFPLENBQUNDLENBQUQsQ0FBWDtBQUFBLEdBUFM7QUFRYmlDLElBQUUsRUFBRSxZQUFBakMsQ0FBQztBQUFBLFdBQUltQixJQUFJLENBQUMsQ0FBRCxFQUFJcEIsT0FBTyxDQUFDQyxDQUFELENBQVgsQ0FBUjtBQUFBLEdBUlE7QUFTYmtDLElBQUUsRUFBRSxZQUFBbEMsQ0FBQztBQUFBLFdBQUltQixJQUFJLENBQUMsQ0FBRCxFQUFJbkIsQ0FBQyxDQUFDSSxPQUFGLEVBQUosQ0FBUjtBQUFBLEdBVFE7QUFVYitCLEdBQUMsRUFBRSxXQUFBbkMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0ksT0FBRixFQUFKO0FBQUEsR0FWUztBQVdiZ0MsTUFBSSxFQUFFLGNBQUFwQyxDQUFDO0FBQUEsV0FBSSxtQkFBU0EsQ0FBQyxDQUFDcUMsTUFBRixFQUFULENBQUo7QUFBQSxHQVhNO0FBWWJDLEtBQUcsRUFBRSxhQUFBdEMsQ0FBQztBQUFBLFdBQUlrQixNQUFNLENBQUMsQ0FBRCxFQUFJLG1CQUFTbEIsQ0FBQyxDQUFDcUMsTUFBRixFQUFULENBQUosQ0FBVjtBQUFBLEdBWk87QUFhYkUsSUFBRSxFQUFFLFlBQUF2QyxDQUFDO0FBQUEsV0FBSWtCLE1BQU0sQ0FBQyxDQUFELEVBQUksbUJBQVNsQixDQUFDLENBQUNxQyxNQUFGLEVBQVQsQ0FBSixDQUFWO0FBQUEsR0FiUTtBQWNickMsR0FBQyxFQUFFLFdBQUFBLEVBQUM7QUFBQSxXQUFJQSxFQUFDLENBQUNxQyxNQUFGLEVBQUo7QUFBQSxHQWRTO0FBZWJHLElBQUUsRUFBRSxZQUFBeEMsQ0FBQztBQUFBLFdBQUltQixJQUFJLENBQUMsQ0FBRCxFQUFJbkIsQ0FBQyxDQUFDeUMsUUFBRixFQUFKLENBQVI7QUFBQSxHQWZRO0FBZ0JiQyxHQUFDLEVBQUUsV0FBQTFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUN5QyxRQUFGLEVBQUo7QUFBQSxHQWhCUztBQWlCYkUsSUFBRSxFQUFFLFlBQUEzQyxDQUFDO0FBQUEsV0FBSW1CLElBQUksQ0FBQyxDQUFELEVBQUlHLFVBQVUsQ0FBQyxFQUFELEVBQUt0QixDQUFDLENBQUN5QyxRQUFGLEVBQUwsQ0FBZCxDQUFSO0FBQUEsR0FqQlE7QUFrQmJHLEdBQUMsRUFBRSxXQUFBNUMsQ0FBQztBQUFBLFdBQUlzQixVQUFVLENBQUMsRUFBRCxFQUFLdEIsQ0FBQyxDQUFDeUMsUUFBRixFQUFMLENBQWQ7QUFBQSxHQWxCUztBQW1CYkksSUFBRSxFQUFFLFlBQUE3QyxDQUFDO0FBQUEsV0FBSW1CLElBQUksQ0FBQyxDQUFELEVBQUluQixDQUFDLENBQUM4QyxVQUFGLEVBQUosQ0FBUjtBQUFBLEdBbkJRO0FBb0JiQyxHQUFDLEVBQUUsV0FBQS9DLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUM4QyxVQUFGLEVBQUo7QUFBQSxHQXBCUztBQXFCYkUsSUFBRSxFQUFFLFlBQUFoRCxDQUFDO0FBQUEsV0FBSW1CLElBQUksQ0FBQyxDQUFELEVBQUluQixDQUFDLENBQUNpRCxVQUFGLEVBQUosQ0FBUjtBQUFBLEdBckJRO0FBc0JiQyxHQUFDLEVBQUUsV0FBQWxELENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNpRCxVQUFGLEVBQUo7QUFBQSxHQXRCUztBQXVCYkUsR0FBQyxFQUFFLFdBQUFuRCxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDeUMsUUFBRixLQUFlLEVBQWYsR0FBb0IsSUFBcEIsR0FBMkIsSUFBL0I7QUFBQSxHQXZCUztBQXdCYnRFLEdBQUMsRUFBRSxXQUFBNkIsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ3lDLFFBQUYsS0FBZSxFQUFmLEdBQW9CLElBQXBCLEdBQTJCLElBQS9CO0FBQUEsR0F4QlM7QUF5QmJXLEtBQUcsRUFBRSxhQUFBcEQsQ0FBQztBQUFBLFdBQUltQixJQUFJLENBQUMsQ0FBRCxFQUFJbkIsQ0FBQyxDQUFDcUQsZUFBRixFQUFKLENBQVI7QUFBQSxHQXpCTztBQTBCYkMsSUFBRSxFQUFFLFlBQUF0RCxDQUFDO0FBQUEsV0FBSWtCLE1BQU0sQ0FBQyxDQUFELEVBQUlDLElBQUksQ0FBQyxDQUFELEVBQUluQixDQUFDLENBQUNxRCxlQUFGLEVBQUosQ0FBUixDQUFWO0FBQUEsR0ExQlE7QUEyQmJFLEdBQUMsRUFBRSxXQUFBdkQsQ0FBQztBQUFBLFdBQUlrQixNQUFNLENBQUMsQ0FBRCxFQUFJQyxJQUFJLENBQUMsQ0FBRCxFQUFJbkIsQ0FBQyxDQUFDcUQsZUFBRixFQUFKLENBQVIsQ0FBVjtBQUFBLEdBM0JTO0FBNEJiRyxHQUFDLEVBQUUsV0FBQXhELENBQUM7QUFBQSxXQUFJVyxJQUFJLENBQUNDLElBQUwsQ0FBVSxDQUFDWixDQUFDLENBQUNHLFFBQUYsS0FBZSxDQUFoQixJQUFxQixDQUEvQixDQUFKO0FBQUEsR0E1QlMsQ0ErQmY7O0FBL0JlLENBQWY7QUFnQ0EsSUFBTXNELGtCQUFrQixHQUFHLG9CQUFNLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNoRCxTQUFPbEMsTUFBTSxDQUFDa0MsS0FBRCxDQUFOLEdBQWdCbEMsTUFBTSxDQUFDa0MsS0FBRCxDQUFOLENBQWNELElBQWQsQ0FBaEIsR0FBc0NDLEtBQTdDO0FBQ0QsQ0FGMEIsQ0FBM0I7O2VBSWUsb0JBQU0sVUFBQ0MsTUFBRCxFQUFTRixJQUFULEVBQWtCO0FBQ3JDO0FBQ0EsTUFBSSxDQUFDLHNCQUFZQSxJQUFaLENBQUwsRUFBd0IsT0FBTyxjQUFQLENBRmEsQ0FFUzs7QUFDOUMsU0FBT0UsTUFBTSxDQUFDQyxLQUFQLENBQWF4QyxXQUFiLEVBQTBCdEMsR0FBMUIsQ0FBOEIwRSxrQkFBa0IsQ0FBQ0MsSUFBRCxDQUFoRCxFQUF3REksSUFBeEQsQ0FBNkQsRUFBN0QsQ0FBUCxDQUhxQyxDQUdtQztBQUN6RSxDQUpjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRWY7Ozs7QUFOQTs7OztBQUdBOzs7ZUFLZSxpQkFBRyxNQUFILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZjs7OztBQUhBOzs7ZUFLZSxrQkFBQzlELENBQUQsRUFBTztBQUNwQixTQUFPLHVCQUFTLElBQUlILElBQUosRUFBVCxFQUFxQkcsQ0FBckIsSUFBMEIsQ0FBakM7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkQ7Ozs7QUFIQTs7O0FBS2UsU0FBUytELE9BQVQsQ0FBa0J4RixDQUFsQixFQUFxQjtBQUNsQztBQUNBLFNBQU8saUJBQU9BLENBQVAsS0FBYXlGLFFBQVEsQ0FBQ3pGLENBQUMsQ0FBQzBGLE9BQUYsRUFBRCxDQUE1QjtBQUNEOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JEOzs7ZUFHZSxrQkFBQ2pFLENBQUQ7QUFBQSxTQUFPQSxDQUFDLEdBQUcsUUFBWDtBQUFBLEMsRUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSG5DOzs7ZUFHZSxrQkFBQ0EsQ0FBRDtBQUFBLFNBQU9BLENBQUMsR0FBRyxPQUFYO0FBQUEsQyxFQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIbEM7OztlQUdlLGtCQUFDQSxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxHQUFHLEtBQVg7QUFBQSxDLEVBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hoQzs7O2VBR2Usa0JBQUNBLENBQUQ7QUFBQSxTQUFPQSxDQUFDLEdBQUcsSUFBWDtBQUFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RmOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7O0FBQ0E7Ozs7QUFYQTs7Ozs7Ozs7OztlQWFlLG9CQUFNLFNBQVNqQixHQUFULENBQWNKLEVBQWQsRUFBa0JSLENBQWxCLEVBQXFCO0FBQ3hDLE1BQU1XLENBQUMsR0FBRyxvQkFBTVgsQ0FBTixDQUFWO0FBQ0FBLEdBQUMsQ0FBQytGLE9BQUYsQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT3JGLEdBQVAsRUFBZTtBQUN2QkQsS0FBQyxDQUFDdUYsR0FBRixDQUFNRCxDQUFOLEVBQVN6RixFQUFFLENBQUN3RixDQUFELEVBQUlDLENBQUosRUFBT3JGLEdBQVAsQ0FBWDtBQUNELEdBRkQ7QUFHQSxTQUFPRCxDQUFQO0FBQ0QsQ0FOYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmYsSUFBSXdGLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQVU5QyxHQUFWLEVBQWU7QUFDeEIsT0FBSytDLE1BQUwsR0FBYy9DLEdBQWQ7QUFDQSxTQUFPLElBQVA7QUFDRCxDQUhEOztBQUtBOEMsSUFBSSxDQUFDRSxTQUFMLENBQWVDLE1BQWYsR0FBd0IsWUFBWTtBQUNsQyxTQUFPLElBQVA7QUFDRCxDQUZEOztBQUdBSCxJQUFJLENBQUNFLFNBQUwsQ0FBZUUsU0FBZixHQUEyQixZQUFZO0FBQ3JDLFNBQU8sS0FBUDtBQUNELENBRkQ7O2VBSWVKLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pmOztBQUNBOzs7O0FBRUEsSUFBSUssS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBVW5ELEdBQVYsRUFBZTtBQUN6QixPQUFLb0QsT0FBTCxHQUFlcEQsR0FBZjtBQUNELENBRkQ7O0FBSUFtRCxLQUFLLENBQUNFLEVBQU4sR0FBVyxVQUFVckQsR0FBVixFQUFlO0FBQ3hCLE1BQUlBLEdBQUcsWUFBWW1ELEtBQW5CLEVBQTBCLE9BQU9uRCxHQUFQOztBQUMxQixNQUFJLGdCQUFnQm1ELEtBQXBCLEVBQTJCO0FBQ3pCLFNBQUtDLE9BQUwsR0FBZXBELEdBQWY7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPLElBQUltRCxLQUFKLENBQVVuRCxHQUFWLENBQVA7QUFDRCxDQVBEOztBQVNBbUQsS0FBSyxDQUFDSCxTQUFOLENBQWdCTSxTQUFoQixHQUE0QixVQUFVL0QsQ0FBVixFQUFhO0FBQ3ZDLFNBQU8sS0FBSzJELFNBQUwsS0FBbUIzRCxDQUFuQixHQUF1QixLQUFLNkQsT0FBbkM7QUFDRCxDQUZEOztBQUlBRCxLQUFLLENBQUNILFNBQU4sQ0FBZ0J6RixHQUFoQixHQUFzQixVQUFVZ0csQ0FBVixFQUFhO0FBQ2pDLE1BQUksS0FBS0wsU0FBTCxFQUFKLEVBQXNCO0FBQ3BCLFdBQU9DLEtBQUssQ0FBQ0UsRUFBTixDQUFTLElBQVQsQ0FBUDtBQUNEOztBQUNELFNBQU9GLEtBQUssQ0FBQ0UsRUFBTixDQUFTRSxDQUFDLENBQUMsS0FBS0gsT0FBTixDQUFWLENBQVA7QUFDRCxDQUxEOztBQU9BRCxLQUFLLENBQUNILFNBQU4sQ0FBZ0JRLEVBQWhCLEdBQXFCLFVBQVVqQyxDQUFWLEVBQWE7QUFDaEMsU0FBT0EsQ0FBQyxDQUFDaEUsR0FBRixDQUFNLEtBQUs2RixPQUFYLENBQVA7QUFDRCxDQUZEOztBQUlBRCxLQUFLLENBQUNILFNBQU4sQ0FBZ0JFLFNBQWhCLEdBQTRCLFlBQVk7QUFDdEMsU0FBUSxLQUFLRSxPQUFMLElBQWdCLElBQXhCO0FBQ0QsQ0FGRDs7QUFJQUQsS0FBSyxDQUFDSCxTQUFOLENBQWdCQyxNQUFoQixHQUF5QixZQUFZO0FBQ25DLFNBQU8sQ0FBQyxLQUFLQyxTQUFMLEVBQVI7QUFDRCxDQUZEOztBQUlBQyxLQUFLLENBQUNILFNBQU4sQ0FBZ0JTLE9BQWhCLEdBQTBCLFlBQVk7QUFDcEMsU0FBTyxzQkFBUDtBQUNELENBRkQ7O0FBSUFOLEtBQUssQ0FBQ0gsU0FBTixDQUFnQkYsSUFBaEIsR0FBdUIsWUFBWTtBQUNqQyxTQUFPLGtCQUFTLEtBQUtDLE1BQWQsQ0FBUDtBQUNELENBRkQ7O2VBSWVJLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DZixJQUFJTSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFZLENBQ3pCLENBREQ7O0FBR0FBLE9BQU8sQ0FBQ1QsU0FBUixDQUFrQkMsTUFBbEIsR0FBMkIsWUFBWTtBQUNyQyxTQUFPLEtBQVA7QUFDRCxDQUZEOztBQUdBUSxPQUFPLENBQUNULFNBQVIsQ0FBa0JFLFNBQWxCLEdBQThCLFlBQVk7QUFDeEMsU0FBTyxJQUFQO0FBQ0QsQ0FGRDs7ZUFJZU8sTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ2Y7Ozs7QUFYQTs7Ozs7Ozs7Ozs7ZUFhZSxvQkFBTSxTQUFTQyxHQUFULENBQWMvRyxDQUFkLEVBQWlCZ0gsQ0FBakIsRUFBb0I7QUFDdkMsU0FBTyxDQUFDaEgsQ0FBRCxHQUFLLENBQUNnSCxDQUFiO0FBQ0QsQ0FGYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFYQTs7Ozs7Ozs7Ozs7ZUFhZSxvQkFBTSxTQUFTQyxNQUFULENBQWlCakgsQ0FBakIsRUFBb0JnSCxDQUFwQixFQUF1QjtBQUMxQyxTQUFPLENBQUNoSCxDQUFELEdBQUssQ0FBQ2dILENBQWI7QUFDRCxDQUZjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWZjs7OztBQUhBOzs7ZUFLZSxpQkFBRyxRQUFILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZjs7QUFDQTs7OztBQU5BOzs7OztBQVFlLFNBQVNFLEtBQVQsQ0FBZ0I5RyxDQUFoQixFQUFtQjtBQUNoQyxTQUFPLGtCQUFJLGlCQUFTQSxDQUFULENBQUosRUFBaUIrRyxLQUFLLENBQUMvRyxDQUFELENBQXRCLENBQVA7QUFDRDs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBRDs7OztBQVZBOzs7Ozs7Ozs7O2VBWWUsb0JBQU0sU0FBU2dILFFBQVQsQ0FBbUJwSCxDQUFuQixFQUFzQmdILENBQXRCLEVBQXlCO0FBQzVDLFNBQU8sQ0FBQ2hILENBQUQsR0FBSyxDQUFDZ0gsQ0FBYjtBQUNELENBRmMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BmOztBQUNBOztBQUNBOztBQUNBOzs7O0FBUkE7Ozs7O2VBVWUsb0JBQU0sVUFBQzVHLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQzdCLE9BQUssSUFBSWdILElBQVQsSUFBaUJqSCxDQUFqQixFQUFvQjtBQUNsQjtBQUNBLFFBQUksa0JBQUkscUJBQU9BLENBQUMsQ0FBQ2lILElBQUQsQ0FBUixFQUFnQmhILENBQUMsQ0FBQ2dILElBQUQsQ0FBakIsQ0FBSixDQUFKLEVBQW1DLE9BQU8sS0FBUDtBQUNwQzs7QUFFRCxPQUFLLElBQUlDLElBQVQsSUFBaUJqSCxDQUFqQixFQUFvQjtBQUNsQixRQUFJLGtCQUFJLHFCQUFPRCxDQUFDLENBQUNrSCxJQUFELENBQVIsQ0FBSixLQUF3QixxQkFBT2pILENBQUMsQ0FBQ2lILElBQUQsQ0FBUixDQUE1QixFQUE2QyxPQUFPLEtBQVA7QUFDOUM7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0FYYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGY7O0FBQ0E7Ozs7QUFOQTs7Ozs7ZUFRZSxvQkFBTSxTQUFTL0csSUFBVCxDQUFlQyxFQUFmLEVBQW1CQyxJQUFuQixFQUF5QjhHLENBQXpCLEVBQTRCO0FBQy9DLE1BQU10QixDQUFDLEdBQUcsbUJBQUtzQixDQUFMLENBQVY7QUFDQSxNQUFJakgsQ0FBQyxHQUFHLENBQUMsQ0FBVDtBQUNBLE1BQU1JLENBQUMsR0FBR3VGLENBQUMsQ0FBQy9GLE1BQVo7QUFDQSxNQUFJUyxDQUFDLEdBQUc2RyxNQUFNLENBQUMvRyxJQUFELENBQWQ7O0FBQ0EsU0FBTyxFQUFFSCxDQUFGLEdBQU1JLENBQWIsRUFBZ0I7QUFDZEMsS0FBQyxHQUFHSCxFQUFFLENBQUNHLENBQUQsRUFBSTRHLENBQUMsQ0FBQ3RCLENBQUMsQ0FBQzNGLENBQUQsQ0FBRixDQUFMLEVBQWEyRixDQUFDLENBQUMzRixDQUFELENBQWQsRUFBbUJpSCxDQUFuQixDQUFOO0FBQ0Q7O0FBQ0QsU0FBTzVHLENBQVA7QUFDRCxDQVRjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFZjs7OztBQVZBOzs7Ozs7Ozs7O2VBWWUsb0JBQU0sU0FBUzhHLEdBQVQsQ0FBY0MsSUFBZCxFQUFvQkMsR0FBcEIsRUFBeUI7QUFDNUMsU0FBT0gsTUFBTSxDQUFDbkIsU0FBUCxDQUFpQnVCLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0YsR0FBckMsRUFBMENELElBQTFDLENBQVA7QUFDRCxDQUZjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQVZBOzs7Ozs7Ozs7O2VBWWUsb0JBQU0sU0FBU0ksS0FBVCxDQUFnQkosSUFBaEIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQzlDLFNBQU9ELElBQUksSUFBSUMsR0FBZjtBQUNELENBRmMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RmOzs7O0FBSEE7OztlQUtlLGlCQUFHLFFBQUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0lmOzs7O0FBVEE7Ozs7Ozs7OztlQVdlLG9CQUFNLFNBQVNJLElBQVQsQ0FBZS9ILENBQWYsRUFBa0I7QUFDckMsU0FBT3dILE1BQU0sQ0FBQ08sSUFBUCxDQUFZUCxNQUFNLENBQUN4SCxDQUFELENBQWxCLENBQVA7QUFDRCxDQUZjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQVRBOzs7Ozs7Ozs7ZUFXZSxvQkFBTSxTQUFTK0gsSUFBVCxDQUFlL0gsQ0FBZixFQUFrQjtBQUNyQyxNQUFNVyxDQUFDLEdBQUcsRUFBVjs7QUFDQSxPQUFLLElBQU1zRixDQUFYLElBQWdCakcsQ0FBaEIsRUFBbUI7QUFDakJXLEtBQUMsQ0FBQ3FILElBQUYsQ0FBTy9CLENBQVA7QUFDRDs7QUFDRCxTQUFPdEYsQ0FBUDtBQUNELENBTmMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RmOztBQUNBOztBQUNBOzs7O0FBWkE7Ozs7Ozs7Ozs7ZUFjZSxvQkFBTSxTQUFTQyxHQUFULENBQWNKLEVBQWQsRUFBa0JSLENBQWxCLEVBQXFCO0FBQ3hDLE1BQU1pRyxDQUFDLEdBQUcsbUJBQUtqRyxDQUFMLENBQVY7QUFDQSxNQUFJTSxDQUFDLEdBQUcsQ0FBQyxDQUFUO0FBQ0EsTUFBTUksQ0FBQyxHQUFHdUYsQ0FBQyxDQUFDL0YsTUFBWjtBQUNBLE1BQU1TLENBQUMsR0FBRyxvQkFBTVgsQ0FBTixDQUFWOztBQUNBLFNBQU8sRUFBRU0sQ0FBRixHQUFNSSxDQUFiLEVBQWdCO0FBQ2RDLEtBQUMsQ0FBQ3NGLENBQUMsQ0FBQzNGLENBQUQsQ0FBRixDQUFELEdBQVVFLEVBQUUsQ0FBQ1IsQ0FBQyxDQUFDaUcsQ0FBQyxDQUFDM0YsQ0FBRCxDQUFGLENBQUYsRUFBVTJGLENBQUMsQ0FBQzNGLENBQUQsQ0FBWCxFQUFnQk4sQ0FBaEIsQ0FBWjtBQUNEOztBQUNELFNBQU9XLENBQVA7QUFDRCxDQVRjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQVRBOzs7OztBQVdBLElBQU1zSCxLQUFLLEdBQUcsb0JBQU0sVUFBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQ2xDLE1BQUlDLE1BQU0sR0FBR1osTUFBTSxDQUFDYSxNQUFQLENBQWMsRUFBZCxFQUFrQkgsSUFBbEIsQ0FBYjs7QUFFQSxNQUFJLHdCQUFVQSxJQUFWLEVBQWdCQyxJQUFoQixDQUFKLEVBQTJCO0FBQ3pCLFdBQU9YLE1BQU0sQ0FBQ2EsTUFBUCxDQUFjLEVBQWQsRUFBa0JILElBQWxCLENBQVA7QUFDRDs7QUFDRCxPQUFLLElBQUlJLEdBQVQsSUFBZ0JILElBQWhCLEVBQXNCO0FBQ3BCLFFBQUksQ0FBQ1gsTUFBTSxDQUFDbkIsU0FBUCxDQUFpQnVCLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ00sSUFBckMsRUFBMkNHLEdBQTNDLENBQUwsRUFBc0Q7QUFDcEQ7QUFDRDs7QUFDRCxRQUFNQyxRQUFRLEdBQUdKLElBQUksQ0FBQ0csR0FBRCxDQUFyQjtBQUNBLFFBQU1FLFFBQVEsR0FBR04sSUFBSSxDQUFDSSxHQUFELENBQXJCOztBQUVBLFFBQUksaUJBQVNDLFFBQVQsS0FBc0IsaUJBQVNDLFFBQVQsQ0FBMUIsRUFBOEM7QUFDNUNKLFlBQU0sQ0FBQ0UsR0FBRCxDQUFOLEdBQWNMLEtBQUssQ0FBQ00sUUFBRCxFQUFXQyxRQUFYLENBQW5CO0FBQ0QsS0FGRCxNQUVPLElBQUksa0JBQVFBLFFBQVIsQ0FBSixFQUF1QjtBQUM1QkosWUFBTSxDQUFDRSxHQUFELENBQU4sR0FBYyxvQkFBTUUsUUFBTixFQUFnQkQsUUFBaEIsQ0FBZDtBQUNELEtBRk0sTUFFQTtBQUNMSCxZQUFNLENBQUNFLEdBQUQsQ0FBTixHQUFjQyxRQUFkLENBREssQ0FDa0I7QUFDeEI7QUFDRjs7QUFDRCxTQUFPSCxNQUFQO0FBQ0QsQ0F0QmEsQ0FBZDtlQXdCZUgsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJmOzs7O0FBTEE7Ozs7O2VBT2Usb0JBQU0sVUFBQ04sR0FBRCxFQUFNYyxLQUFOLEVBQWdCO0FBQ25DLE1BQUlMLE1BQU0sR0FBRyxFQUFiO0FBRUFaLFFBQU0sQ0FBQ08sSUFBUCxDQUFZSixHQUFaLEVBQWlCZSxNQUFqQixDQUF3QixVQUFDSixHQUFELEVBQVM7QUFDL0IsV0FBT0csS0FBSyxDQUFDRSxPQUFOLENBQWNMLEdBQWQsTUFBdUIsQ0FBQyxDQUEvQjtBQUNELEdBRkQsRUFFR3ZDLE9BRkgsQ0FFVyxVQUFDdUMsR0FBRCxFQUFTO0FBQ2xCRixVQUFNLENBQUNFLEdBQUQsQ0FBTixHQUFjWCxHQUFHLENBQUNXLEdBQUQsQ0FBakI7QUFDRCxHQUpEO0FBS0EsU0FBT0YsTUFBUDtBQUNELENBVGMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BmOzs7QUFJTyxJQUFNL0csTUFBTSxHQUFHLFNBQVN1SCxPQUFULEdBQW1DO0FBQUEsTUFBakJDLFNBQWlCLHVFQUFMLEdBQUs7QUFBRTtBQUN6RCxTQUFPaEksS0FBSyxDQUFDd0YsU0FBTixDQUFnQnlDLEtBQWhCLENBQXNCakIsSUFBdEIsQ0FBMkI1SCxTQUEzQixFQUFzQyxDQUF0QyxFQUF5QzBGLElBQXpDLENBQThDa0QsU0FBOUMsQ0FBUDtBQUNELENBRk07OztlQUlReEgsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZjs7QUFDQTs7QUFDQTs7OztBQUxBOzs7QUFPZSxTQUFTMEgsWUFBVCxDQUF1QmxHLEdBQXZCLEVBQTRCO0FBQUU7QUFDM0MsTUFBSW1HLElBQUksR0FBRyxpQkFBUS9JLFNBQVIsQ0FBWDtBQUVBK0ksTUFBSSxDQUFDQyxLQUFMO0FBQ0EsU0FBT3BHLEdBQUcsQ0FBQ3FHLE9BQUosQ0FBWSxVQUFaLEVBQXdCLFVBQUN4RCxLQUFELEVBQVF5RCxHQUFSLEVBQWdCO0FBQzdDLFdBQU8sa0JBQUksaUJBQUcsV0FBSCxFQUFnQkgsSUFBSSxDQUFDRyxHQUFELENBQXBCLENBQUosSUFBa0NILElBQUksQ0FBQ0csR0FBRCxDQUF0QyxHQUE4Q3pELEtBQXJEO0FBQ0QsR0FGTSxDQUFQO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hEOzs7O0FBSEE7OztlQUtlLGlCQUFHLFFBQUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0tmOzs7O0FBVkE7Ozs7Ozs7Ozs7ZUFZZSxvQkFBTSxTQUFTOUUsR0FBVCxDQUFjSixFQUFkLEVBQWtCUixDQUFsQixFQUFxQjtBQUN4QyxNQUFJTSxDQUFDLEdBQUcsQ0FBQyxDQUFUO0FBQ0EsTUFBTUksQ0FBQyxHQUFHVixDQUFDLENBQUNFLE1BQVo7QUFDQSxNQUFJUyxDQUFDLEdBQUcsRUFBUjs7QUFDQSxTQUFPLEVBQUVMLENBQUYsR0FBTUksQ0FBYixFQUFnQjtBQUNkQyxLQUFDLElBQUlILEVBQUUsQ0FBQ1IsQ0FBQyxDQUFDb0osTUFBRixDQUFTOUksQ0FBVCxDQUFELEVBQWNBLENBQWQsRUFBaUJOLENBQWpCLENBQVA7QUFDRDs7QUFDRCxTQUFPVyxDQUFQO0FBQ0QsQ0FSYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWY7Ozs7QUFaQTs7Ozs7Ozs7Ozs7O2VBY2Usb0JBQU0sU0FBUzBJLE1BQVQsQ0FBaUJ2SixFQUFqQixFQUFxQlEsQ0FBckIsRUFBd0JOLENBQXhCLEVBQTJCO0FBQzlDLE1BQU1XLENBQUMsR0FBR0UsS0FBSyxDQUFDd0YsU0FBTixDQUFnQnlDLEtBQWhCLENBQXNCakIsSUFBdEIsQ0FBMkI3SCxDQUEzQixDQUFWO0FBQ0EsTUFBTW1KLEdBQUcsR0FBRzdJLENBQUMsR0FBRyxDQUFKLEdBQVFLLENBQUMsQ0FBQ1QsTUFBRixHQUFXSSxDQUFuQixHQUF1QkEsQ0FBbkM7QUFDQSxNQUFJLENBQUNOLENBQUMsQ0FBQ21KLEdBQUQsQ0FBTixFQUFhLE9BQU94SSxDQUFQO0FBQ2JBLEdBQUMsQ0FBQ3dJLEdBQUQsQ0FBRCxHQUFTckosRUFBRSxDQUFDYSxDQUFDLENBQUN3SSxHQUFELENBQUYsQ0FBWDtBQUNBLFNBQU94SSxDQUFQO0FBQ0QsQ0FOYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7O0FBQ0E7Ozs7QUFiQTs7Ozs7Ozs7Ozs7O2VBZWUsb0JBQU0sU0FBUzJJLFVBQVQsQ0FBcUJ4SixFQUFyQixFQUF5QnlKLElBQXpCLEVBQStCdkosQ0FBL0IsRUFBa0M7QUFDckQsTUFBTXdKLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUFwSixDQUFDLEVBQUk7QUFDZixRQUFJbUosSUFBSSxDQUFDbkosQ0FBRCxDQUFSLEVBQWE7QUFDWCxhQUFPTixFQUFFLENBQUNNLENBQUQsQ0FBVDtBQUNEOztBQUNELFdBQU9BLENBQVA7QUFDRCxHQUxEOztBQU1BLFNBQU8sa0JBQUlvSixHQUFKLEVBQVMzSSxLQUFLLENBQUN3RixTQUFOLENBQWdCeUMsS0FBaEIsQ0FBc0JqQixJQUF0QixDQUEyQjdILENBQTNCLENBQVQsQ0FBUDtBQUNELENBUmMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pmOzs7O0FBWEE7Ozs7Ozs7Ozs7O2VBYWUsb0JBQU0sU0FBU3lKLEdBQVQsQ0FBY2pKLEVBQWQsRUFBa0JSLENBQWxCLEVBQXFCO0FBQ3hDLE1BQUkwSixHQUFHLEdBQUcsSUFBVjs7QUFDQSxPQUFLLElBQUlwSixDQUFULElBQWNOLENBQWQsRUFBaUI7QUFDZixRQUFJLENBQUNRLEVBQUUsQ0FBQ1IsQ0FBQyxDQUFDTSxDQUFELENBQUYsQ0FBUCxFQUFlO0FBQ2JvSixTQUFHLEdBQUcsS0FBTjtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPQSxHQUFQO0FBQ0QsQ0FUYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGY7Ozs7QUFWQTs7Ozs7Ozs7OztlQVllLG9CQUFNLFNBQVNDLE9BQVQsQ0FBa0JDLEdBQWxCLEVBQXVCNUosQ0FBdkIsRUFBMEI7QUFDN0MsT0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc0osR0FBRyxDQUFDMUosTUFBeEIsRUFBZ0NJLENBQUMsRUFBakMsRUFBcUM7QUFDbkMsUUFBSSxDQUFDc0osR0FBRyxDQUFDdEosQ0FBRCxDQUFILENBQU9OLENBQVAsQ0FBTCxFQUFnQixPQUFPLEtBQVA7QUFDakI7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FMYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFWQTs7Ozs7Ozs7OztlQVllLG9CQUFNLFNBQVM2SixNQUFULENBQWlCekosQ0FBakIsRUFBb0I7QUFDdkMsU0FBTyxZQUFZO0FBQUUsV0FBT0EsQ0FBUDtBQUFVLEdBQS9CO0FBQ0QsQ0FGYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGY7Ozs7QUFYQTs7Ozs7Ozs7Ozs7ZUFhZSxvQkFBTSxTQUFTMEosR0FBVCxDQUFjMUosQ0FBZCxFQUFpQkMsQ0FBakIsRUFBb0I7QUFDdkMsU0FBT0QsQ0FBQyxJQUFJQyxDQUFaO0FBQ0QsQ0FGYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFYQTs7Ozs7Ozs7Ozs7ZUFhZSxvQkFBTSxTQUFTMEosR0FBVCxDQUFjdkosRUFBZCxFQUFrQlIsQ0FBbEIsRUFBcUI7QUFDeEMsTUFBSTBKLEdBQUcsR0FBRyxLQUFWOztBQUNBLE9BQUssSUFBSXBKLENBQVQsSUFBY04sQ0FBZCxFQUFpQjtBQUNmLFFBQUlRLEVBQUUsQ0FBQ1IsQ0FBQyxDQUFDTSxDQUFELENBQUYsQ0FBTixFQUFjO0FBQ1pvSixTQUFHLEdBQUcsSUFBTjtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPQSxHQUFQO0FBQ0QsQ0FUYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmY7Ozs7QUFUQTs7Ozs7Ozs7O2VBV2Usb0JBQU0sU0FBU00sT0FBVCxDQUFrQkosR0FBbEIsRUFBdUI1SixDQUF2QixFQUEwQjtBQUM3QyxPQUFLLElBQUlNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzSixHQUFHLENBQUMxSixNQUF4QixFQUFnQ0ksQ0FBQyxFQUFqQyxFQUFxQztBQUNuQyxRQUFJc0osR0FBRyxDQUFDdEosQ0FBRCxDQUFILENBQU9OLENBQVAsQ0FBSixFQUFlLE9BQU8sSUFBUDtBQUNoQjs7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQUxjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQWZBOzs7Ozs7Ozs7OztBQWlCQSxJQUFNaUssVUFBVSxHQUFHLGlCQUFHLFVBQUgsQ0FBbkI7O2VBRWUsb0JBQU0sU0FBU3BELEVBQVQsQ0FBYXFELEdBQWIsRUFBa0JDLElBQWxCLEVBQXdCO0FBQzNDLE1BQUlGLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDckQsRUFBTCxDQUFkLEVBQXdCO0FBQ3RCLFdBQU9xRCxHQUFHLENBQUNyRCxFQUFKLENBQU9zRCxJQUFQLENBQVA7QUFDRDs7QUFDRCxNQUFJRixVQUFVLENBQUNDLEdBQUQsQ0FBZCxFQUFxQjtBQUNuQixXQUFPLFVBQUE5SixDQUFDO0FBQUEsYUFBSThKLEdBQUcsQ0FBQzlKLENBQUQsQ0FBSCxDQUFPK0osSUFBSSxDQUFDL0osQ0FBRCxDQUFYLENBQUo7QUFBQSxLQUFSO0FBQ0Q7O0FBQ0QsU0FBTyxtQkFBSyxVQUFDZ0ssR0FBRCxFQUFNeEQsQ0FBTjtBQUFBLFdBQVl3RCxHQUFHLENBQUMvSSxNQUFKLENBQVcsa0JBQUkscUJBQU91RixDQUFQLENBQUosRUFBZXVELElBQWYsQ0FBWCxDQUFaO0FBQUEsR0FBTCxFQUFtRCxFQUFuRCxFQUF1REQsR0FBdkQsQ0FBUDtBQUNELENBUmMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CZjs7OztBQUllLFNBQVNHLE9BQVQsR0FBb0I7QUFDakMsTUFBSUMsSUFBSSxHQUFHekosS0FBSyxDQUFDd0YsU0FBTixDQUFnQnlDLEtBQWhCLENBQXNCakIsSUFBdEIsQ0FBMkI1SCxTQUEzQixDQUFYO0FBRUEsU0FBTyxTQUFTc0ssUUFBVCxHQUFxQjtBQUMxQixRQUFJOUosSUFBSSxHQUFHNkosSUFBSSxDQUFDQSxJQUFJLENBQUNwSyxNQUFMLEdBQWMsQ0FBZixDQUFmO0FBQ0EsUUFBSWtJLE1BQU0sR0FBRyxDQUFDM0gsSUFBSSxDQUFDTSxLQUFMLENBQVdOLElBQVgsRUFBaUJSLFNBQWpCLENBQUQsQ0FBYjtBQUNBLFFBQUlLLENBQUMsR0FBR2dLLElBQUksQ0FBQ3BLLE1BQUwsR0FBYyxDQUF0Qjs7QUFFQSxTQUFLSSxDQUFMLEVBQVFBLENBQUMsSUFBSSxDQUFiLEVBQWdCLEVBQUVBLENBQWxCLEVBQXFCO0FBQ25CLFVBQU1rSyxHQUFHLEdBQUdGLElBQUksQ0FBQ2hLLENBQUQsQ0FBaEI7QUFFQThILFlBQU0sR0FBRyxDQUFDb0MsR0FBRyxDQUFDekosS0FBSixDQUFVeUosR0FBVixFQUFlcEMsTUFBZixDQUFELENBQVQ7QUFDRDs7QUFDRCxXQUFPQSxNQUFNLENBQUMsQ0FBRCxDQUFiO0FBQ0QsR0FYRDtBQVlEOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRDs7QUFDQTs7OztBQUllLFNBQVNxQyxLQUFULENBQWdCRCxHQUFoQixFQUFxQjtBQUNsQyxNQUFNRSxPQUFPLEdBQUdGLEdBQUcsQ0FBQ3RLLE1BQXBCOztBQUVBLE1BQUl3SyxPQUFPLEtBQUssQ0FBaEIsRUFBbUI7QUFDakIsV0FBT0YsR0FBUDtBQUNEOztBQUNELFNBQU9HLGNBQWMsQ0FBQyxFQUFELENBQXJCOztBQUVBLFdBQVNDLE9BQVQsQ0FBa0JSLEdBQWxCLEVBQXVCcEIsSUFBdkIsRUFBNkI7QUFDM0IsUUFBTTZCLElBQUksR0FBR1QsR0FBRyxDQUFDL0ksTUFBSixDQUFXMkgsSUFBWCxDQUFiOztBQUNBLFdBQU82QixJQUFJLENBQUMzSyxNQUFMLEdBQWN3SyxPQUFkLEdBQ0hDLGNBQWMsQ0FBQ0UsSUFBRCxDQURYLEdBRUhMLEdBQUcsQ0FBQ3pKLEtBQUosQ0FBVSxJQUFWLEVBQWdCOEosSUFBaEIsQ0FGSjtBQUdEOztBQUVELFdBQVNGLGNBQVQsQ0FBeUJQLEdBQXpCLEVBQThCO0FBQzVCLFdBQU8sWUFBWTtBQUNqQixhQUFPUSxPQUFPLENBQUNSLEdBQUQsRUFBTXZKLEtBQUssQ0FBQ3dGLFNBQU4sQ0FBZ0J5QyxLQUFoQixDQUFzQmpCLElBQXRCLENBQTJCNUgsU0FBM0IsQ0FBTixDQUFkO0FBQ0QsS0FGRDtBQUdEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2REOzs7O0FBWEE7Ozs7Ozs7Ozs7O2VBYWUsb0JBQU0sU0FBUzZLLFNBQVQsQ0FBb0JqSixDQUFwQixFQUF1Qm1FLENBQXZCLEVBQTBCO0FBQy9DO0FBQ0UsU0FBT0EsQ0FBQyxJQUFJLElBQUwsSUFBYUEsQ0FBQyxLQUFLQSxDQUFuQixHQUF1Qm5FLENBQXZCLEdBQTJCbUUsQ0FBbEM7QUFDRCxDQUhjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiZjs7Ozs7QUFNZSxTQUFTK0UsS0FBVCxDQUFnQjNLLENBQWhCLEVBQW1CO0FBQ2hDLFNBQU8sSUFBSUEsQ0FBQyxDQUFDNEssV0FBTixFQUFQO0FBQ0Q7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFsQkE7Ozs7O2VBb0JlLG9CQUFNLFNBQVNDLE1BQVQsQ0FBaUI3SyxDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUI7QUFDMUMsTUFBSSx3QkFBVUQsQ0FBVixFQUFhQyxDQUFiLENBQUosRUFBcUIsT0FBTyxJQUFQO0FBRXJCLE1BQUksbUJBQUtELENBQUwsTUFBWSxtQkFBS0MsQ0FBTCxDQUFoQixFQUF5QixPQUFPLEtBQVA7QUFFekIsTUFBSSxpQkFBRyxrQkFBSSxxQkFBT0QsQ0FBUCxDQUFKLENBQUgsRUFBbUIsa0JBQUkscUJBQU9DLENBQVAsQ0FBSixDQUFuQixDQUFKLEVBQXdDLE9BQU8sS0FBUDtBQUV4QyxNQUFJRCxDQUFDLENBQUM0SyxXQUFGLEtBQWtCM0ssQ0FBQyxDQUFDMkssV0FBeEIsRUFBcUMsT0FBTyxLQUFQOztBQUVyQyxNQUFJLGtCQUFTNUssQ0FBVCxLQUFlLGtCQUFVQSxDQUFWLENBQWYsSUFBK0Isa0JBQVNBLENBQVQsQ0FBL0IsSUFBOEMsa0JBQU9BLENBQVAsQ0FBbEQsRUFBNkQ7QUFDM0QsV0FBTyx3QkFBVUEsQ0FBQyxDQUFDMEYsT0FBRixFQUFWLEVBQXVCekYsQ0FBQyxDQUFDeUYsT0FBRixFQUF2QixDQUFQO0FBQ0Q7O0FBQ0QsTUFBSSxrQkFBUTFGLENBQVIsQ0FBSixFQUFnQjtBQUNkLFdBQU8scUJBQVlBLENBQVosRUFBZUMsQ0FBZixDQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUksaUJBQVNELENBQVQsQ0FBSixFQUFpQjtBQUN0QixXQUFPLHNCQUFhQSxDQUFiLEVBQWdCQyxDQUFoQixDQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQ0FsQmMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZjs7O0FBR2UsU0FBUzZLLE1BQVQsQ0FBaUI5SyxDQUFqQixFQUFvQjtBQUNqQyxTQUFPLEVBQUVBLENBQUMsSUFBSSxJQUFQLENBQVA7QUFDRDs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNPRDs7OztBQVpBOzs7Ozs7Ozs7OztlQWNlLG9CQUFNLFNBQVMrSyxTQUFULENBQW9CckwsRUFBcEIsRUFBd0JFLENBQXhCLEVBQTJCO0FBQzlDLE1BQUlNLENBQUMsR0FBRyxDQUFSO0FBQ0EsTUFBTUksQ0FBQyxHQUFHVixDQUFDLENBQUNFLE1BQVo7O0FBQ0EsU0FBT0ksQ0FBQyxHQUFHSSxDQUFYLEVBQWM7QUFDWixRQUFJWixFQUFFLENBQUNFLENBQUMsQ0FBQ00sQ0FBRCxDQUFGLENBQU4sRUFBYztBQUNaLGFBQU9BLENBQVA7QUFDRDs7QUFDREEsS0FBQyxJQUFJLENBQUw7QUFDRDs7QUFDRCxTQUFPLENBQUMsQ0FBUjtBQUNELENBVmMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RmOztBQUNBOztBQUNBOztBQUNBOzs7O0FBaEJBOzs7Ozs7Ozs7Ozs7ZUFrQmUsb0JBQU0sU0FBU0MsSUFBVCxDQUFlQyxFQUFmLEVBQW1CQyxJQUFuQixFQUF5QlQsQ0FBekIsRUFBNEI7QUFDL0MsTUFBTW9MLE9BQU8sR0FBRztBQUNkLDRCQURjO0FBRWQsMEJBRmMsQ0FJaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRnQixHQUFoQjtBQVVBLFNBQU9BLE9BQU8sQ0FBQyxtQkFBS3BMLENBQUwsQ0FBRCxDQUFQLENBQWlCUSxFQUFqQixFQUFxQkMsSUFBckIsRUFBMkJULENBQTNCLENBQVA7QUFDRCxDQVpjLEMsRUFjZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTs7QUFDQTs7OztBQU5BOzs7OztlQVFlLG9CQUFNLFNBQVNxTCxTQUFULENBQW9CakwsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCO0FBQzdDLE1BQUlELENBQUMsS0FBSyxDQUFOLElBQVdDLENBQUMsS0FBSyxDQUFyQixFQUF3QjtBQUN0QixXQUFPLElBQUlELENBQUosS0FBVSxJQUFJQyxDQUFyQjtBQUNEOztBQUNELE1BQUlELENBQUMsS0FBS0MsQ0FBVixFQUFhO0FBQ1gsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxDQUFDLEVBQUUsb0JBQU1ELENBQU4sS0FBWSxvQkFBTUMsQ0FBTixDQUFkLENBQVI7QUFDRCxDQVJjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZjs7Ozs7QUFNZSxTQUFTaUwsUUFBVCxDQUFtQmxMLENBQW5CLEVBQXNCO0FBQ25DLFNBQU9BLENBQVA7QUFDRDs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGRDs7QUFDQTs7OztBQVBBOzs7OztlQVNlLG9CQUFNLFNBQVNtTCxFQUFULENBQWFDLElBQWIsRUFBbUJuSSxHQUFuQixFQUF3QjtBQUMzQyxTQUFPLG1CQUFLQSxHQUFMLE1BQWNtSSxJQUFyQjtBQUNELENBRmMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pmOztBQUNBOztBQUNBOzs7O0FBUEE7Ozs7O0FBU2UsU0FBU0MsT0FBVCxDQUFrQnJMLENBQWxCLEVBQXFCO0FBQ2xDLFNBQU8scUJBQU9BLENBQVAsS0FBYSxxQkFBT0EsQ0FBUCxFQUFVLG9CQUFNQSxDQUFOLENBQVYsQ0FBcEI7QUFDRDs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKRDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQVhBOzs7Ozs7O2VBYWUsb0JBQU0sU0FBU3NMLElBQVQsQ0FBZTVMLEVBQWYsRUFBbUI7QUFDdEMsTUFBTTZMLE1BQU0sR0FBRyxxQkFBTyxvQkFBTTdMLEVBQU4sQ0FBUCxDQUFmO0FBQ0EsU0FBTyxvQkFBTSxTQUFTOEwsS0FBVCxHQUFrQjtBQUM3QixXQUFPLGdDQUFTLGtCQUFJRCxNQUFKLEVBQVkxTCxTQUFTLENBQUMsQ0FBRCxDQUFyQixDQUFULEVBQW9DWSxLQUFLLENBQUN3RixTQUFOLENBQWdCeUMsS0FBaEIsQ0FBc0JqQixJQUF0QixDQUEyQjVILFNBQTNCLEVBQXNDLENBQXRDLENBQXBDLENBQVA7QUFDRCxHQUZNLENBQVA7QUFHRCxDQUxjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQWhCQTs7Ozs7Ozs7Ozs7ZUFrQmUsb0JBQU0sU0FBU1csR0FBVCxDQUFjSixFQUFkLEVBQWtCUixDQUFsQixFQUFxQjtBQUN4QyxVQUFRLG1CQUFLQSxDQUFMLENBQVI7QUFDQTtBQUNFLFNBQUssVUFBTDtBQUNFLGFBQU8sb0JBQU0sWUFBWTtBQUN2QixlQUFPUSxFQUFFLENBQUNxSCxJQUFILENBQVEsSUFBUixFQUFjN0gsQ0FBQyxDQUFDZSxLQUFGLENBQVEsSUFBUixFQUFjZCxTQUFkLENBQWQsQ0FBUDtBQUNELE9BRk0sQ0FBUDs7QUFHRixTQUFLLFFBQUw7QUFDRSxhQUFPLG1CQUFVTyxFQUFWLEVBQWNSLENBQWQsQ0FBUDs7QUFDRixTQUFLLFFBQUw7QUFDRSxhQUFPLG1CQUFVUSxFQUFWLEVBQWNSLENBQWQsQ0FBUDs7QUFDRixTQUFLLEtBQUw7QUFDRSxhQUFPLG1CQUFPUSxFQUFQLEVBQVdSLENBQVgsQ0FBUDs7QUFDRjtBQUNFLGFBQU8sa0JBQVNRLEVBQVQsRUFBYVIsQ0FBYixDQUFQO0FBYko7QUFlRCxDQWhCYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVGY7Ozs7QUFUQTs7Ozs7Ozs7O2VBV2Usb0JBQU0sU0FBUzZMLEdBQVQsQ0FBYzdMLENBQWQsRUFBaUJnSCxDQUFqQixFQUFvQjtBQUN2QyxTQUFPQSxDQUFDLEdBQUdoSCxDQUFKLEdBQVFnSCxDQUFSLEdBQVloSCxDQUFuQjtBQUNELENBRmMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JmOzs7O0FBSEE7OztlQUtlLG9CQUFNLFNBQVM4TCxHQUFULENBQWMxTCxDQUFkLEVBQWlCO0FBQ3BDLFNBQU8sQ0FBQ0EsQ0FBUjtBQUNELENBRmMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RmOzs7O0FBSkE7Ozs7ZUFNZSxvQkFBTSxTQUFTMkwsRUFBVCxDQUFhM0wsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUI7QUFDdEMsU0FBT0QsQ0FBQyxJQUFJQyxDQUFaO0FBQ0QsQ0FGYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGY7Ozs7QUFIQTs7O0FBS2UsU0FBUzJMLE1BQVQsQ0FBaUI1TCxDQUFqQixFQUFvQjtBQUNqQyxTQUFRQSxDQUFDLEtBQUssS0FBUCxJQUFpQixxQkFBT0EsQ0FBUCxDQUF4QjtBQUNEOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pEOzs7O0FBSEE7OztlQUtlLG9CQUFPLFNBQVM2TCxJQUFULENBQWU3TCxDQUFmLEVBQWtCO0FBQ3RDLFNBQU9vSCxNQUFNLENBQUNuQixTQUFQLENBQWlCNkYsUUFBakIsQ0FBMEJyRSxJQUExQixDQUErQnpILENBQS9CLEVBQWtDMEksS0FBbEMsQ0FBd0MsQ0FBeEMsRUFBMkMsQ0FBQyxDQUE1QyxDQUFQO0FBQ0QsQ0FGYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ2Y7O0FBQ0E7Ozs7QUFQQTs7Ozs7O2VBU2Usb0JBQU0sU0FBU3FELEdBQVQsQ0FBY25NLENBQWQsRUFBaUJnSCxDQUFqQixFQUFvQjtBQUN2QyxTQUFPLHVCQUFRLFNBQVNvRixRQUFULENBQW1CaE0sQ0FBbkIsRUFBc0JDLENBQXRCLEVBQXlCO0FBQUUsV0FBTyxDQUFDRCxDQUFELEVBQUlDLENBQUosQ0FBUDtBQUFlLEdBQWxELEVBQW9ETCxDQUFwRCxFQUF1RGdILENBQXZELENBQVA7QUFDRCxDQUZjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIZjs7OztBQU5BOzs7Ozs7ZUFRZSxvQkFBTSxTQUFTcUYsT0FBVCxDQUFrQjdMLEVBQWxCLEVBQXNCUixDQUF0QixFQUF5QmdILENBQXpCLEVBQTRCO0FBQy9DLE1BQU1zRixHQUFHLEdBQUcsRUFBWjtBQUNBLE1BQU1DLEdBQUcsR0FBRy9KLElBQUksQ0FBQ2dLLEdBQUwsQ0FBU3hNLENBQUMsQ0FBQ0UsTUFBWCxFQUFtQjhHLENBQUMsQ0FBQzlHLE1BQXJCLENBQVo7QUFDQSxNQUFJSSxDQUFDLEdBQUcsQ0FBUjs7QUFDQSxPQUFLQSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdpTSxHQUFoQixFQUFxQmpNLENBQUMsRUFBdEIsRUFBMEI7QUFDeEJnTSxPQUFHLENBQUN0RSxJQUFKLENBQVN4SCxFQUFFLENBQUNSLENBQUMsQ0FBQ00sQ0FBRCxDQUFGLEVBQU8wRyxDQUFDLENBQUMxRyxDQUFELENBQVIsQ0FBWDtBQUNEOztBQUNELFNBQU9nTSxHQUFQO0FBQ0QsQ0FSYyxDIiwiZmlsZSI6ImZ1bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuLmpzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bi5qc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW4uanNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcclxuICogUmV0dXJucyBhIGN1cnJpZWQgZnVuY3Rpb24gd2l0aCBhcml0eSAxXHJcbiAqIEBmdW5jdGlvbiBjdXJyeTFcclxuICogQHByaXZhdGVcclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeTEgKGZuKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQgKGEpIHtcclxuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAwXHJcbiAgICAgID8gdGhpc1xyXG4gICAgICA6IGZuKGEpXHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAZnVuY3Rpb24gZXF1YWxzQXJyYXlcclxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIGZvciBkZWVwIGNvbXBhcmlzb24gb2YgYXJyYXlzXHJcbiAqIEBwYXJhbSB7YX0geCAtIE9iamVjdCB0byBjb21wYXJlIG9mIHR5cGUgYVxyXG4gKiBAcGFyYW0ge2F9IHkgLSBPYmplY3QgeCB0byBjb21wYXJlIHdpdGggb2JqZWN0IHhcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQgbm90IGZyb20gJy4uL3V0aWwvbm90J1xyXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL3V0aWwvZXF1YWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzQXJyYXkgKHgsIHkpIHtcclxuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAobm90KGVxdWFscyh4W2ldLCB5W2ldKSkpIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZVxyXG59KVxyXG4iLCIvKipcclxuICogQGZ1bmN0aW9uIGZvbGRcclxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBtYXBwaW5nIG92ZXIgdGhlIHByb3ZpZGVkIGFycmF5IGFuZCBjYWxsaW5nIGFuIGl0ZXJhdG9yIGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7Y2JGdW5jdGlvbn0gY2IgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBtb2RpZnkgdGhlIGl0ZW1cclxuICogQHBhcmFtIHsqfSBpbml0IC0gSW5pdGlhbCB2YWx1ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBhIC0gQXJyYXkgd2l0aCBpdGVtcyB0byBtb2RpZnkgYnkgdGhlIGNiIGZ1bmN0aW9uXHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiBAYWxpYXMgcmVkdWNlXHJcbiAqIEBzaW5jZSAxLjAuMlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBjb25zdCByZXN1bHQgPSBmb2xkKGFkZCwgMCwgWzEsMSwxXSlcclxuICogLy8gcmVzdWx0ID0gM1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAY2FsbGJhY2sgY2JGdW5jdGlvblxyXG4gKiBAcGFyYW0geyp9IHIgLSBBY2N1bXVsYXRvciB3aGljaCBhY2N1bXVsYXRlcyB0aGUgY2FsbGJhY2sncyByZXR1cm4gdmFsdWVzXHJcbiAqIEBwYXJhbSB7Kn0gaXRlbSAtIHRoZSBjdXJyZW50IGVsZW1lbnQgYmVpbmcgcHJvY2Vzc2VkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIHRoZSBpbmRleSBvZiB0aGUgaXRlbSBiZWluZyBwcm9jZXNzZWRcclxuICogQHBhcmFtIHtBcnJheX0gYSAtIFRoZSBpbml0aWFsIGFycmF5XHJcbiAqIEByZXR1cm4geyp9XHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBhKSB7XHJcbiAgbGV0IGkgPSAtMVxyXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxyXG4gIGxldCByID0gaW5pdFxyXG4gIHdoaWxlICgrK2kgPCBsKSB7XHJcbiAgICByID0gY2IociwgYVtpXSwgaSwgYSlcclxuICB9XHJcbiAgcmV0dXJuIHJcclxufSlcclxuIiwiLyoqXHJcbiAqIENoZWNrcyBpZiB0aGUgcHJvdmlkZWQgb2JqZWN0IGlzIGFuIGFycmF5LCBhdXRvY3VycmllZCBmdW5jdGlvblxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAZnVuY3Rpb24gaXNBcnJheVxyXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7Kn0gT2JqZWN0IHRvIHZlcmlmaXlcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICogQHNpbmNlIDEuMC4yXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGNvbnN0IHJlc3VsdCA9IGlzQXJyYXkoWzEsMSwxXSlcclxuICogLy8gcmVzdWx0ID0gdHJ1ZVxyXG4gKi9cclxuXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ0FycmF5JylcclxuIiwiLyoqXHJcbiAqIEBmdW5jdGlvbiBtYXBcclxuICogQGRlc2NyaXB0aW9uIE1hcHMgb3ZlciBhbiBhcnJheSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcclxuICogQHJldHVybiB7SXRlcmFibGV9XHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQGV4YW1wbGVcclxuICpcclxuICogIGNvbnN0IHJlc3VsdCA9IG1hcChpZGVudGl0eSwgWzAsMiwzXSlcclxuICogIC8vIHJlc3VsdCA9IFswLDIsM11cclxuICogIGNvbnN0IGFkZDIgPSBhZGQoMilcclxuICogIGNvbnN0IHJlc3VsdCA9IG1hcChhZGQyLCBbMCwyLDNdKVxyXG4gKiAgLy8gcmVzdWx0ID0gWzIsNCw1XVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xyXG4gIGxldCBpID0gLTFcclxuICBjb25zdCBsID0gYS5sZW5ndGhcclxuICBjb25zdCByID0gbmV3IEFycmF5KGwpXHJcbiAgd2hpbGUgKCsraSA8IGwpIHtcclxuICAgIHJbaV0gPSBjYihhW2ldLCBpLCBhKVxyXG4gIH1cclxuICByZXR1cm4gclxyXG59KVxyXG4iLCIvKipcclxuICogQGZ1bmN0aW9uIHRvQXJyYXlcclxuICogQGRlc2NyaXB0aW9uIENvbnZlcnRzIHRoZSBpbnB1dCB0byBhbiBhcnJheVxyXG4gKiBAcGFyYW0ge0FycmF5TGlrZX0geCAtIE9iamVjdCB0byBjb252ZXJ0IHRvIGFuIGFycmF5XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiBAc2luY2UgMS4wLjJcclxuICogQGV4YW1wbGVcclxuICpcclxuICogY29uc3QgcmVzdWx0ID0gdG9BcnJheShcInN0cmluZ1wiKVxyXG4gKiAvLyByZXN1bHQgPSBbJ3MnLCd0JywncicsJ2knLCduJywnZyddXHJcbiAqXHJcbiAqIGZ1bmN0aW9uICgpIHtcclxuICogIGNvbnN0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cylcclxuICogIGNvbnNvbGUubG9nKHR5cGVvZiBhcmdzKSAvLyBBcnJheVxyXG4gKiB9XHJcbiAqXHJcbiAqKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9BcnJheSAoeCkge1xyXG4gIHJldHVybiB4Lmxlbmd0aCA9PT0gMSA/IFt4WzBdXSA6IEFycmF5LmFwcGx5KG51bGwsIHgpXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAZnVuY3Rpb24gdW5pb25BcnJheVxyXG4gKiBAZGVzY3JpcHRpb24gTWVyZ2VzIDIgYXJyYXlzXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFMIC0gQXJyYXkgdG8gbWVyZ2VcclxuICogQHBhcmFtIHtBcnJheX0gYVIgLSBBcnJheSB0byBtZXJnZVxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICogQHNpbmNlIDEuMC4yXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGNvbnN0IHJlc3VsdCA9IHVuaW9uQXJyYXkoWzAsMSwyXSwgWzMsNCw1XSlcclxuICogLy8gcmVzdWx0ID0gWzAuMS4yLjMuNC41XVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gdW5pb25BcnJheSAoYUwsIGFSKSB7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhTC5jb25jYXQoYVIpKSlcclxufSlcclxuIiwiLyoqXHJcbiAqIEFsd2F5cyByZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCBhIEZhbHNlIGJvb2xlYW5cclxuICpcclxuICogQGZ1bmN0aW9uIEZcclxuICogQGRlc2NyaXB0aW9uIEFsd2F5cyByZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCBhIEZhbHNlIGJvb2xlYW5cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAcGFyYW0geyp9IGFcclxuICogQHJldHVybiB7RnVuY3Rpb259XHJcbiAqKi9cclxuaW1wb3J0IGFsd2F5cyBmcm9tICcuLi91dGlsL2Fsd2F5cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsd2F5cyhmYWxzZSlcclxuIiwiLyoqXHJcbiAqIEFsd2F5cyByZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCBhIEZhbHNlIGJvb2xlYW5cclxuICpcclxuICogQGZ1bmN0aW9uIFRcclxuICogQGRlc2NyaXB0aW9uIEFsd2F5cyByZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCBhIEZhbHNlIGJvb2xlYW5cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAcGFyYW0geyp9IGFcclxuICogQHJldHVybiB7RnVuY3Rpb259XHJcbiAqKi9cclxuaW1wb3J0IGFsd2F5cyBmcm9tICcuLi91dGlsL2Fsd2F5cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsd2F5cyh0cnVlKVxyXG4iLCIvKipcclxuICogQ3VycmllZCBmdW5jdGlvbiB0aGF0IHZlcmlmaWVzIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudCBpcyBhIGJvb2xlYW5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQGZ1bmN0aW9uIGlzXHJcbiAqIEBkZXNjcmlwdGlvbiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBwYXJhbSB7Kn0gSXRlbSB0byB2ZXJpZnlcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICoqL1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdCb29sZWFuJylcclxuIiwiLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PTlRIUyA9IFtcclxuICAnSmFudWFyeScsXHJcbiAgJ0ZlYnJ1YXJ5JyxcclxuICAnTWFyY2gnLFxyXG4gICdBcHJpbCcsXHJcbiAgJ01heScsXHJcbiAgJ0p1bmUnLFxyXG4gICdKdWx5JyxcclxuICAnQXVndXN0JyxcclxuICAnU2VwdGVtYmVyJyxcclxuICAnT2N0b2JlcicsXHJcbiAgJ05vdmVtYmVyJyxcclxuICAnRGVjZW1iZXInXHJcbl1cclxuIiwiLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgV0VFS0RBWVMgPSBbXHJcbiAgJ1N1bmRheScsXHJcbiAgJ01vbmRheScsXHJcbiAgJ1R1ZXNkYXknLFxyXG4gICdXZWRuZXNkYXknLFxyXG4gICdUaHVyc2RheScsXHJcbiAgJ0ZyaWRheScsXHJcbiAgJ1NhdHVyZGF5J1xyXG5dXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoc3RhcnQsIGVuZCkgPT4ge1xyXG4gIHJldHVybiAobmV3IERhdGUoc3RhcnQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGVuZCkuZ2V0VGltZSgpKVxyXG59KVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyMC8wMS8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBpc1ZhbGlkRGF0ZSBmcm9tICcuL2lzVmFsaWQnXHJcbmltcG9ydCB7IFdFRUtEQVlTIH0gZnJvbSAnLi4vY29uc3RhbnRzL1dFRUtEQVlTJ1xyXG5pbXBvcnQgeyBNT05USFMgfSBmcm9tICcuLi9jb25zdGFudHMvTU9OVEhTJ1xyXG5cclxuY29uc3QgZ2V0V2VlayA9IChkKSA9PiB7XHJcbiAgLy8gQ29weSBkYXRlIHNvIGRvbid0IG1vZGlmeSBvcmlnaW5hbFxyXG4gIGQgPSBuZXcgRGF0ZShEYXRlLlVUQyhkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSwgZC5nZXREYXRlKCkpKVxyXG4gIC8vIFNldCB0byBuZWFyZXN0IFRodXJzZGF5OiBjdXJyZW50IGRhdGUgKyA0IC0gY3VycmVudCBkYXkgbnVtYmVyXHJcbiAgLy8gTWFrZSBTdW5kYXkncyBkYXkgbnVtYmVyIDdcclxuICBkLnNldFVUQ0RhdGUoZC5nZXRVVENEYXRlKCkgKyA0IC0gKGQuZ2V0VVRDRGF5KCkgfHwgNykpXHJcbiAgLy8gR2V0IGZpcnN0IGRheSBvZiB5ZWFyXHJcbiAgbGV0IHllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpXHJcblxyXG4gIC8vIENhbGN1bGF0ZSBmdWxsIHdlZWtzIHRvIG5lYXJlc3QgVGh1cnNkYXlcclxuICBsZXQgd2Vla05vID0gTWF0aC5jZWlsKCgoKGQgLSB5ZWFyU3RhcnQpIC8gODY0MDAwMDApICsgMSkgLyA3KVxyXG5cclxuICAvLyBSZXR1cm4gYXJyYXkgb2YgeWVhciBhbmQgd2VlayBudW1iZXJcclxuICByZXR1cm4gW2QuZ2V0VVRDRnVsbFllYXIoKSwgd2Vla05vXVxyXG59XHJcblxyXG4vLyB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgdGhlIGRhdGUgZm9ybWF0dGluZ1xyXG5jb25zdCBaRVJPUyA9ICcwMDAwMDAwMCdcclxuY29uc3QgbGFzdE4gPSBjdXJyeSgobiwgc3RyKSA9PiBzdHIuc3Vic3RyaW5nKHN0ci5sZW5ndGggLSBuLCBzdHIubGVuZ3RoKSlcclxuY29uc3QgZmlyc3ROID0gY3VycnkoKG4sIHN0cikgPT4gc3RyLnN1YnN0cmluZygwLCBuKSlcclxuY29uc3QgZmlsbCA9IGN1cnJ5KChkaWdpdHMsIG4pID0+IGxhc3ROKGRpZ2l0cywgWkVST1MgKyBuKSlcclxuXHJcbi8vIGRhdGUvdGltZSByZWdleFxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcclxuY29uc3QgREFURV9UT0tFTlMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UXxZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nXHJcblxyXG5jb25zdCBtb2RDZWlsaW5nID0gKG1vZCwgdmFsKSA9PiB2YWwgJSBtb2QgfHwgbW9kXHJcblxyXG4vLyB0b2tlbnMgbWFwIHRvIGdldCBwYXJ0cyBvZiB0aGUgZGF0ZSAvdGltZVxyXG5jb25zdCB0b2tlbnMgPSB7XHJcbiAgWVlZWTogZCA9PiBmaWxsKDQsIGQuZ2V0RnVsbFllYXIoKSksXHJcbiAgWVk6IGQgPT4gbGFzdE4oMiwgZmlsbCg0LCBkLmdldEZ1bGxZZWFyKCkpKSxcclxuICBNTU1NOiBkID0+IE1PTlRIU1tkLmdldE1vbnRoKCldLFxyXG4gIE1NTTogZCA9PiBmaXJzdE4oMywgTU9OVEhTW2QuZ2V0TW9udGgoKV0pLFxyXG4gIE1NOiBkID0+IGZpbGwoMiwgZC5nZXRNb250aCgpICsgMSksXHJcbiAgTTogZCA9PiBkLmdldE1vbnRoKCkgKyAxLFxyXG4gIHc6IGQgPT4gZ2V0V2VlayhkKSxcclxuICB3dzogZCA9PiBmaWxsKDIsIGdldFdlZWsoZCkpLFxyXG4gIEREOiBkID0+IGZpbGwoMiwgZC5nZXREYXRlKCkpLFxyXG4gIEQ6IGQgPT4gZC5nZXREYXRlKCksXHJcbiAgZGRkZDogZCA9PiBXRUVLREFZU1tkLmdldERheSgpXSxcclxuICBkZGQ6IGQgPT4gZmlyc3ROKDMsIFdFRUtEQVlTW2QuZ2V0RGF5KCldKSxcclxuICBkZDogZCA9PiBmaXJzdE4oMiwgV0VFS0RBWVNbZC5nZXREYXkoKV0pLFxyXG4gIGQ6IGQgPT4gZC5nZXREYXkoKSxcclxuICBISDogZCA9PiBmaWxsKDIsIGQuZ2V0SG91cnMoKSksXHJcbiAgSDogZCA9PiBkLmdldEhvdXJzKCksXHJcbiAgaGg6IGQgPT4gZmlsbCgyLCBtb2RDZWlsaW5nKDEyLCBkLmdldEhvdXJzKCkpKSxcclxuICBoOiBkID0+IG1vZENlaWxpbmcoMTIsIGQuZ2V0SG91cnMoKSksXHJcbiAgbW06IGQgPT4gZmlsbCgyLCBkLmdldE1pbnV0ZXMoKSksXHJcbiAgbTogZCA9PiBkLmdldE1pbnV0ZXMoKSxcclxuICBzczogZCA9PiBmaWxsKDIsIGQuZ2V0U2Vjb25kcygpKSxcclxuICBzOiBkID0+IGQuZ2V0U2Vjb25kcygpLFxyXG4gIEE6IGQgPT4gZC5nZXRIb3VycygpID4gMTEgPyAnUE0nIDogJ0FNJyxcclxuICBhOiBkID0+IGQuZ2V0SG91cnMoKSA+IDExID8gJ3BtJyA6ICdhbScsXHJcbiAgU1NTOiBkID0+IGZpbGwoMywgZC5nZXRNaWxsaXNlY29uZHMoKSksXHJcbiAgU1M6IGQgPT4gZmlyc3ROKDIsIGZpbGwoMywgZC5nZXRNaWxsaXNlY29uZHMoKSkpLFxyXG4gIFM6IGQgPT4gZmlyc3ROKDEsIGZpbGwoMywgZC5nZXRNaWxsaXNlY29uZHMoKSkpLFxyXG4gIFE6IGQgPT4gTWF0aC5jZWlsKChkLmdldE1vbnRoKCkgKyAxKSAvIDMpXHJcbn1cclxuXHJcbi8vIG1hcCB0aGlzIGZ1bmN0aW9uIHRvIGdldCB0aGUgYWN0dWFsIHRpbWUvZGF0ZSB2YWx1ZSBmb3IgZWFjaCB0b2tlblxyXG5jb25zdCBzd2FwVG9rZW5XaXRoVmFsdWUgPSBjdXJyeSgoZGF0ZSwgdG9rZW4pID0+IHtcclxuICByZXR1cm4gdG9rZW5zW3Rva2VuXSA/IHRva2Vuc1t0b2tlbl0oZGF0ZSkgOiB0b2tlblxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKGZvcm1hdCwgZGF0ZSkgPT4ge1xyXG4gIC8vIGNoZWNrIGZvciB2YWxpZCBkYXRlXHJcbiAgaWYgKCFpc1ZhbGlkRGF0ZShkYXRlKSkgcmV0dXJuICdJbnZhbGlkIERhdGUnIC8vIHJldHVybiBzdHJpbmdcclxuICByZXR1cm4gZm9ybWF0Lm1hdGNoKERBVEVfVE9LRU5TKS5tYXAoc3dhcFRva2VuV2l0aFZhbHVlKGRhdGUpKS5qb2luKCcnKSAvLyByZXR1cm4gam9pbmVkIHN0cmluZ1xyXG59KVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpcygnRGF0ZScpXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwOS8wMy8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGRpZmZEYXRlIGZyb20gJy4vZGlmZkRhdGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4ge1xyXG4gIHJldHVybiBkaWZmRGF0ZShuZXcgRGF0ZSgpKShkKSA8IDBcclxufVxyXG4iLCIvKipcclxuICpcclxuICovXHJcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQgKHgpIHtcclxuICAvLyBub2luc3BlY3Rpb24gSlNDaGVja0Z1bmN0aW9uU2lnbmF0dXJlc1xyXG4gIHJldHVybiBpc0RhdGUoeCkgJiYgaXNGaW5pdGUoeC52YWx1ZU9mKCkpXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyA4NjQwMDAwMCAvLyAyNCo2MCo2MCoxMDAwID0gODY0MDAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDM2MDAwMDAgLy8gNjAqNjAqMTAwMCA9IDM2MDAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDYwMDAwIC8vIDYwKjEwMDAgPSA2MDAwMFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gMTAwMFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vLyBhcnJheVxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFsc0FycmF5IH0gZnJvbSAnYXJyYXkvZXF1YWxzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzQXJyYXkgfSBmcm9tICdhcnJheS9pcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0FycmF5IH0gZnJvbSAnYXJyYXkvdG8nXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pb25BcnJheSB9IGZyb20gJ2FycmF5L3VuaW9uJ1xyXG5cclxuLy8gYm9vbGVhblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzQm9vbGVhbiB9IGZyb20gJ2Jvb2xlYW4vaXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRiB9IGZyb20gJ2Jvb2xlYW4vRidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUIH0gZnJvbSAnYm9vbGVhbi9UJ1xyXG5cclxuLy8gbW9uYWRzXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSnVzdCB9IGZyb20gJ21vbmFkcy9KdXN0J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1heWJlIH0gZnJvbSAnbW9uYWRzL01heWJlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vdGhpbmcgfSBmcm9tICdtb25hZHMvTm90aGluZydcclxuXHJcbi8vIG51bWJlclxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTnVtYmVyIH0gZnJvbSAnbnVtYmVyL2lzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTmFuIH0gZnJvbSAnbnVtYmVyL2lzTmFuJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkZCB9IGZyb20gJ251bWJlci9hZGQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbXVsdGlwbHkgfSBmcm9tICdudW1iZXIvbXVsdGlwbHknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGl2aWRlIH0gZnJvbSAnbnVtYmVyL2RpdmlkZSdcclxuXHJcbi8vIG9iamVjdFxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFsc09iamVjdCB9IGZyb20gJ29iamVjdC9lcXVhbHMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNPYmplY3QgfSBmcm9tICdvYmplY3QvaXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VPYmplY3QgfSBmcm9tICdvYmplY3QvbWVyZ2UnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb21pdEZyb21PYmplY3QgfSBmcm9tICdvYmplY3Qvb21pdCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXMgfSBmcm9tICdvYmplY3QvaGFzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGhhc0luIH0gZnJvbSAnb2JqZWN0L2hhc0luJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleXMgfSBmcm9tICdvYmplY3Qva2V5cydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXlzSW4gfSBmcm9tICdvYmplY3Qva2V5c0luJ1xyXG5cclxuLy8gc3RyaW5nXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29uY2F0U3RyaW5nIH0gZnJvbSAnc3RyaW5nL2NvbmNhdCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb3JtYXRTdHJpbmcgfSBmcm9tICdzdHJpbmcvZm9ybWF0U3RyaW5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzU3RyaW5nIH0gZnJvbSAnc3RyaW5nL2lzJ1xyXG5cclxuLy8gdXRpbFxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkanVzdCB9IGZyb20gJ3V0aWwvYWRqdXN0J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkanVzdFdpdGggfSBmcm9tICd1dGlsL2FkanVzdFdpdGgnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxsIH0gZnJvbSAndXRpbC9hbGwnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxsUGFzcyB9IGZyb20gJ3V0aWwvYWxsUGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbHdheXMgfSBmcm9tICd1dGlsL2Fsd2F5cydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbmQgfSBmcm9tICd1dGlsL2FuZCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbnkgfSBmcm9tICd1dGlsL2FueSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbnlQYXNzIH0gZnJvbSAndXRpbC9hbnlQYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFwIH0gZnJvbSAndXRpbC9hcCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wb3NlIH0gZnJvbSAndXRpbC9jb21wb3NlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGN1cnJ5IH0gZnJvbSAndXRpbC9jdXJyeSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0VG8gfSBmcm9tICd1dGlsL2RlZmF1bHRUbydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbXB0eSB9IGZyb20gJ3V0aWwvZW1wdHknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzIH0gZnJvbSAndXRpbC9lcXVhbHMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXhpc3RzIH0gZnJvbSAndXRpbC9leGlzdHMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmluZEluZGV4IH0gZnJvbSAndXRpbC9maW5kSW5kZXgnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9sZCB9IGZyb20gJ3V0aWwvZm9sZCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpZGVudGljYWwgfSBmcm9tICd1dGlsL2lkZW50aWNhbCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpZGVudGl0eSB9IGZyb20gJ3V0aWwvaWRlbnRpdHknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXMgfSBmcm9tICd1dGlsL2lzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1wdHkgfSBmcm9tICd1dGlsL2lzRW1wdHknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGlmdCB9IGZyb20gJ3V0aWwvbGlmdCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXAgfSBmcm9tICd1dGlsL21hcCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXggfSBmcm9tICd1dGlsL21heCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBub3QgfSBmcm9tICd1dGlsL25vdCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBvciB9IGZyb20gJ3V0aWwvb3InXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHJ1dGh5IH0gZnJvbSAndXRpbC90cnV0aHknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHlwZSB9IGZyb20gJ3V0aWwvdHlwZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB6aXAgfSBmcm9tICd1dGlsL3ppcCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB6aXBXaXRoIH0gZnJvbSAndXRpbC96aXBXaXRoJ1xyXG5cclxuLy8gZGF0ZVxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRpZmZEYXRlIH0gZnJvbSAnZGF0ZS9kaWZmRGF0ZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb3JtYXREYXRlVGltZSB9IGZyb20gJ2RhdGUvZm9ybWF0RGF0ZVRpbWUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGF0ZUlzIH0gZnJvbSAnZGF0ZS9pcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0Z1dHVyZURhdGUgfSBmcm9tICdkYXRlL2lzRnV0dXJlRGF0ZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1ZhbGlkIH0gZnJvbSAnZGF0ZS9pc1ZhbGlkJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvRGF5IH0gZnJvbSAnZGF0ZS90b0RheSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0hvdXIgfSBmcm9tICdkYXRlL3RvSG91cidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b01pbnV0ZXMgfSBmcm9tICdkYXRlL3RvTWludXRlcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b1NlY29uZHMgfSBmcm9tICdkYXRlL3RvU2Vjb25kcydcclxuIiwiLyoqXHJcbiAqIE1hcHMgb3ZlciBhIE1hcCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcclxuICogQHBhcmFtIHtNYXB9IGFcclxuICogQHJldHVybiB7TWFwfVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vdXRpbC9lbXB0eSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcclxuICBjb25zdCByID0gZW1wdHkoYSlcclxuICBhLmZvckVhY2goKHYsIGssIG1hcCkgPT4ge1xyXG4gICAgci5zZXQoaywgY2IodiwgaywgbWFwKSlcclxuICB9KVxyXG4gIHJldHVybiByXHJcbn0pXHJcbiIsImxldCBKdXN0ID0gZnVuY3Rpb24gKHZhbCkge1xyXG4gIHRoaXMuX3ZhbHVlID0gdmFsXHJcbiAgcmV0dXJuIHRoaXNcclxufVxyXG5cclxuSnVzdC5wcm90b3R5cGUuaXNKdXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuSnVzdC5wcm90b3R5cGUuaXNOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKdXN0XHJcbiIsImltcG9ydCBKdXN0IGZyb20gJy4vSnVzdCdcclxuaW1wb3J0IE5vdGhpbmcgZnJvbSAnLi9Ob3RoaW5nJ1xyXG5cclxubGV0IE1heWJlID0gZnVuY3Rpb24gKHZhbCkge1xyXG4gIHRoaXMuX192YWx1ZSA9IHZhbFxyXG59XHJcblxyXG5NYXliZS5vZiA9IGZ1bmN0aW9uICh2YWwpIHtcclxuICBpZiAodmFsIGluc3RhbmNlb2YgTWF5YmUpIHJldHVybiB2YWxcclxuICBpZiAodGhpcyBpbnN0YW5jZW9mIE1heWJlKSB7XHJcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWxcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIHJldHVybiBuZXcgTWF5YmUodmFsKVxyXG59XHJcblxyXG5NYXliZS5wcm90b3R5cGUuZ2V0T3JFbHNlID0gZnVuY3Rpb24gKG4pIHtcclxuICByZXR1cm4gdGhpcy5pc05vdGhpbmcoKSA/IG4gOiB0aGlzLl9fdmFsdWVcclxufVxyXG5cclxuTWF5YmUucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XHJcbiAgaWYgKHRoaXMuaXNOb3RoaW5nKCkpIHtcclxuICAgIHJldHVybiBNYXliZS5vZihudWxsKVxyXG4gIH1cclxuICByZXR1cm4gTWF5YmUub2YoZih0aGlzLl9fdmFsdWUpKVxyXG59XHJcblxyXG5NYXliZS5wcm90b3R5cGUuYXAgPSBmdW5jdGlvbiAobSkge1xyXG4gIHJldHVybiBtLm1hcCh0aGlzLl9fdmFsdWUpXHJcbn1cclxuXHJcbk1heWJlLnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuICh0aGlzLl9fdmFsdWUgPT0gbnVsbClcclxufVxyXG5cclxuTWF5YmUucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gIXRoaXMuaXNOb3RoaW5nKClcclxufVxyXG5cclxuTWF5YmUucHJvdG90eXBlLk5vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBOb3RoaW5nKClcclxufVxyXG5cclxuTWF5YmUucHJvdG90eXBlLkp1c3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBKdXN0KHRoaXMuX3ZhbHVlKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXliZVxyXG4iLCJsZXQgTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcclxufVxyXG5cclxuTm90aGluZy5wcm90b3R5cGUuaXNKdXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcbk5vdGhpbmcucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RoaW5nXHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIDIgYXJndW1lbnRzXHJcbiAqXHJcbiAqIEBmdW5jdGlvbiBhZGRcclxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgMiBhcmd1bWVudHNcclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXHJcbiAqIEByZXR1cm4ge051bWJlcn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkZCAoYSwgYikge1xyXG4gIHJldHVybiArYSArICtiXHJcbn0pXHJcbiIsIi8qKlxyXG4gKlxyXG4gKlxyXG4gKiBAZnVuY3Rpb24gZGl2aWRlXHJcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkaXZpc2lvbiBvZiB0aGUgMiBhcmd1bWVudHNcclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXHJcbiAqIEByZXR1cm4ge051bWJlcn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGRpdmlkZSAoYSwgYikge1xyXG4gIHJldHVybiArYSAvICtiXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpcygnTnVtYmVyJylcclxuIiwiLyoqXHJcbiAqIEBmdW5jdGlvbiBpc05hTlxyXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIG51bWJlciBpcyBOQU5cclxuXHJcbiAqL1xyXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9pcydcclxuaW1wb3J0IGFuZCBmcm9tICcuLi91dGlsL2FuZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTmFuICh4KSB7XHJcbiAgcmV0dXJuIGFuZChpc051bWJlcih4KSwgaXNOYU4oeCkpXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBwcm9kdWN0IG9mIHRoZSAyIGFyZ3VtZW50c1xyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXHJcbiAqIEByZXR1cm4ge051bWJlcn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG11bHRpcGx5IChhLCBiKSB7XHJcbiAgcmV0dXJuICthICogK2JcclxufSlcclxuIiwiLyoqXHJcblxyXG4gKiBlcXVhbHNcclxuICogY2hlY2tzIGZvciBlcXVhbGl0eVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBleGlzdHMgZnJvbSAnLi4vdXRpbC9leGlzdHMnXHJcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXHJcbmltcG9ydCBlcXVhbHMgZnJvbSAnLi4vdXRpbC9lcXVhbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoeCwgeSkgPT4ge1xyXG4gIGZvciAobGV0IGtleVggaW4geCkge1xyXG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxyXG4gICAgaWYgKG5vdChlcXVhbHMoeFtrZXlYXSwgeVtrZXlYXSkpKSByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGtleVkgaW4geSkge1xyXG4gICAgaWYgKG5vdChleGlzdHMoeFtrZXlZXSkpICYmIGV4aXN0cyh5W2tleVldKSkgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZVxyXG59KVxyXG4iLCIvKipcclxuICogQGZ1bmN0aW9uIGZvbGRcclxuICogQHByaXZhdGVcclxuICpcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgbykge1xyXG4gIGNvbnN0IGsgPSBrZXlzKG8pXHJcbiAgbGV0IGkgPSAtMVxyXG4gIGNvbnN0IGwgPSBrLmxlbmd0aFxyXG4gIGxldCByID0gT2JqZWN0KGluaXQpXHJcbiAgd2hpbGUgKCsraSA8IGwpIHtcclxuICAgIHIgPSBjYihyLCBvW2tbaV1dLCBrW2ldLCBvKVxyXG4gIH1cclxuICByZXR1cm4gclxyXG59KVxyXG4iLCIvKipcclxuICogUmV0dXJucyB0cnVlIGlmIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5XHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcge1N0cmluZ30gLT4ge09iamVjdH0gLT4gQm9vbGVhblxyXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBoYXMgKHByb3AsIG9iaikge1xyXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKVxyXG59KVxyXG4iLCIvKipcclxuICogUmV0dXJucyB0cnVlIGlmIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LCBldmVuIGlmIGl0IGlzIGluaGVyaXRlZFxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIHtTdHJpbmd9IC0+IHtPYmplY3R9IC0+IEJvb2xlYW5cclxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaGFzSW4gKHByb3AsIG9iaikge1xyXG4gIHJldHVybiBwcm9wIGluIG9ialxyXG59KVxyXG4iLCIvKipcclxuXHJcbiAqL1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdPYmplY3QnKVxyXG4iLCIvKipcclxuICogUmV0dXJucyB0aGUgb3duIGtleXMgb2YgYW4gb2JqZWN0IGFzIGFuIEFycmF5XHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgYSAtPiBbYl1cclxuICogQHBhcmFtIHtPYmplY3R9XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24ga2V5cyAoYSkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhPYmplY3QoYSkpXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIGFsbCB0aGUga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyBhIC0+IFtiXVxyXG4gKiBAcGFyYW0ge09iamVjdH1cclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XHJcbiAgY29uc3QgciA9IFtdXHJcbiAgZm9yIChjb25zdCBrIGluIGEpIHtcclxuICAgIHIucHVzaChrKVxyXG4gIH1cclxuICByZXR1cm4gclxyXG59KVxyXG4iLCIvKipcclxuICogTWFwcyBvdmVyIGFuIG9iamVjdCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcclxuICogQHBhcmFtIHtPYmplY3R9IGFcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vdXRpbC9lbXB0eSdcclxuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xyXG4gIGNvbnN0IGsgPSBrZXlzKGEpXHJcbiAgbGV0IGkgPSAtMVxyXG4gIGNvbnN0IGwgPSBrLmxlbmd0aFxyXG4gIGNvbnN0IHIgPSBlbXB0eShhKVxyXG4gIHdoaWxlICgrK2kgPCBsKSB7XHJcbiAgICByW2tbaV1dID0gY2IoYVtrW2ldXSwga1tpXSwgYSlcclxuICB9XHJcbiAgcmV0dXJuIHJcclxufSlcclxuIiwiLyoqXHJcblxyXG4gKiBlcXVhbHNcclxuICogY2hlY2tzIGZvciBlcXVhbGl0eVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi4vdXRpbC9pZGVudGljYWwnXHJcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9vYmplY3QvaXMnXHJcbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzJ1xyXG5pbXBvcnQgdW5pb24gZnJvbSAnLi4vYXJyYXkvdW5pb24nXHJcblxyXG5jb25zdCBtZXJnZSA9IGN1cnJ5KChvYmpMLCBvYmpSKSA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIG9iakwpXHJcblxyXG4gIGlmIChpZGVudGljYWwob2JqTCwgb2JqUikpIHtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvYmpMKVxyXG4gIH1cclxuICBmb3IgKGxldCBrZXkgaW4gb2JqUikge1xyXG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqUiwga2V5KSkge1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb2xkVmFsdWUgPSBvYmpSW2tleV1cclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gb2JqTFtrZXldXHJcblxyXG4gICAgaWYgKGlzT2JqZWN0KG9sZFZhbHVlKSAmJiBpc09iamVjdChuZXdWYWx1ZSkpIHtcclxuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShvbGRWYWx1ZSwgbmV3VmFsdWUpXHJcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkobmV3VmFsdWUpKSB7XHJcbiAgICAgIHJlc3VsdFtrZXldID0gdW5pb24obmV3VmFsdWUsIG9sZFZhbHVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0W2tleV0gPSBvbGRWYWx1ZSAvLyBUT0RPOiB0aGlzIGlzIGEgcmVmZXJlbmNlLCBzaG91bGQgYmUgY2xvbmVcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VcclxuIiwiLyoqXHJcblxyXG4gKiBlcXVhbHNcclxuICogY2hlY2tzIGZvciBlcXVhbGl0eVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgob2JqLCBuYW1lcykgPT4ge1xyXG4gIGxldCByZXN1bHQgPSB7fVxyXG5cclxuICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoa2V5KSA9PiB7XHJcbiAgICByZXR1cm4gbmFtZXMuaW5kZXhPZihrZXkpID09PSAtMVxyXG4gIH0pLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59KVxyXG4iLCIvKipcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmNhdCA9IGZ1bmN0aW9uIF9jb25jYXQgKHNlcGFyYXRvciA9ICcsJykgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xyXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLmpvaW4oc2VwYXJhdG9yKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25jYXRcclxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxuICovXG5pbXBvcnQgdG9BcnJheSBmcm9tICcuLi9hcnJheS90bydcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0U3RyaW5nIChzdHIpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcbiAgbGV0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cylcblxuICBhcmdzLnNoaWZ0KClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC97KFxcZCspfS9nLCAobWF0Y2gsIGlkeCkgPT4ge1xuICAgIHJldHVybiBub3QoaXMoJ1VuZGVmaW5lZCcsIGFyZ3NbaWR4XSkpID8gYXJnc1tpZHhdIDogbWF0Y2hcbiAgfSlcbn1cbiIsIi8qKlxyXG5cclxuICovXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ1N0cmluZycpXHJcbiIsIi8qKlxyXG4gKiBNYXBzIG92ZXIgYSBzdHJpbmcgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBbYV0gLT4gW2FdXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcclxuICogQHJldHVybiB7SXRlcmFibGV9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XHJcbiAgbGV0IGkgPSAtMVxyXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxyXG4gIGxldCByID0gJydcclxuICB3aGlsZSAoKytpIDwgbCkge1xyXG4gICAgciArPSBjYihhLmNoYXJBdChpKSwgaSwgYSlcclxuICB9XHJcbiAgcmV0dXJuIHJcclxufSlcclxuIiwiLyoqXHJcbiAqIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBmdW5jdGlvbiBhZGp1c3RcclxuICogQGRlc2NyaXB0aW9uIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoYSAtPiBhKSAtPiBudW0gLT4gW2FdIC0+IFthXVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIHRvIG1vZGlmeSB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBpIC0gVGhlIGluZGV4IGF0IHdoaWNoIHRvIG1vZGlmeSB0aGUgYXJyYXksIGFjY2VwdHMgcG9zdGl0aXZlIGFuZCBuZWdhdGl2ZSBpbmRleGVzXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IFthXSAtIEFycmF5IHdpdGggZGF0YVxyXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX0gW2FdXHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhZGp1c3QgKGZuLCBpLCBhKSB7XHJcbiAgY29uc3QgciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEpXHJcbiAgY29uc3QgaWR4ID0gaSA8IDAgPyByLmxlbmd0aCArIGkgOiBpXHJcbiAgaWYgKCFhW2lkeF0pIHJldHVybiByXHJcbiAgcltpZHhdID0gZm4ocltpZHhdKVxyXG4gIHJldHVybiByXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBNb2RpZmllcyBhbiBpdGVtIGluIGFuIGFycmF5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxyXG4gKlxyXG4gKiBAZnVuY3Rpb24gYWRqdXN0V2l0aFxyXG4gKiBAZGVzY3JpcHRpb24gTW9kaWZpZXMgYW4gaXRlbSBpbiBhbiBhcnJheSB1c2luZyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIChhIC0+IGEpIC0+ICgoYSAtPiBbYV0pIC0+IFthXSAtPiBudW0pIC0+IFthXSAtPiBbYV1cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSB0byBtb2RpZnkgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIC0gVGhlIHByZWRpY2F0ZSB0aGF0IHJldHVybnMgdGhlIGluZGV4ZXMgaWYgZm91bmRcclxuICogQHBhcmFtIHtJdGVyYWJsZX0gW2FdXHJcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfSBbYV1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuaW1wb3J0IG1hcCBmcm9tICcuLi91dGlsL21hcCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkanVzdFdpdGggKGZuLCBwcmVkLCBhKSB7XHJcbiAgY29uc3QgX2ZuID0geCA9PiB7XHJcbiAgICBpZiAocHJlZCh4KSkge1xyXG4gICAgICByZXR1cm4gZm4oeClcclxuICAgIH1cclxuICAgIHJldHVybiB4XHJcbiAgfVxyXG4gIHJldHVybiBtYXAoX2ZuLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhKSlcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxyXG4gKlxyXG4gKiBAZnVuY3Rpb24gYWxsXHJcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IFthXSAtPiBCb29sZWFuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFsbCAoY2IsIGEpIHtcclxuICBsZXQgcmVzID0gdHJ1ZVxyXG4gIGZvciAobGV0IGkgaW4gYSkge1xyXG4gICAgaWYgKCFjYihhW2ldKSkge1xyXG4gICAgICByZXMgPSBmYWxzZVxyXG4gICAgICBicmVha1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBBcHBsaWVzIGEgbGlzdCBvZiBwcmVkaWNhdGVzIHRvIHRoZSBkYXRhIGFuZCByZXR1cm5zIHRydWUgaWYgYWxsIHBhc3NcclxuICpcclxuICogQGZ1bmN0aW9uIGFsbFBhc3NcclxuICogQGRlc2NyaXB0aW9uIEFwcGxpZXMgYSBsaXN0IG9mIHByZWRpY2F0ZXMgdG8gdGhlIGRhdGEgYW5kIHJldHVybnMgdHJ1ZSBpZiBhbGwgcGFzc1xyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgWygqLi4uIC0+IEJvb2xlYW4pXSAtPiAoKi4uLiAtPiBCb29sZWFuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHByZWRpY2F0ZXMgQW4gYXJyYXkgb2YgcHJlZGljYXRlcyB0byBjaGVja1xyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGNvbWJpbmVkIHByZWRpY2F0ZVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWxsUGFzcyAoY2JzLCBhKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICghY2JzW2ldKGEpKSByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIHByb3ZpZGVkXHJcbiAqXHJcbiAqIEBmdW5jdGlvbiBhbHdheXNcclxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBmdW5jdGlvbiB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIHByb3ZpZGVkXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyBhIC0+ICgqIC0+IGEpXHJcbiAqIEBwYXJhbSB7Kn0gYVxyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFsd2F5cyAoeCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB4IH1cclxufSlcclxuIiwiLyoqXHJcbiAqIENoZWNrcyBpZiBib3RoIHByZWRpY2F0ZXMgYXJlIHRydWVcclxuICpcclxuICogQGZ1bmN0aW9uIGFuZFxyXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIGJvdGggcHJlZGljYXRlcyBhcmUgdHJ1ZVxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgKHgsIHkpIC0+IGJvb2xlYW5cclxuICogQHBhcmFtIHsqfSB4IC0gQSBwcmVkaWNhdGVcclxuICogQHBhcmFtIHsqfSB5IC0gQSBwcmVkaWNhdGVcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFuZCAoeCwgeSkge1xyXG4gIHJldHVybiB4ICYmIHlcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbiBvZiB0aGUgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxyXG4gKlxyXG4gKiBAZnVuY3Rpb24gYW55XHJcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb24gb2YgdGhlIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIChUT0RPKVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxyXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbnkgKGNiLCBhKSB7XHJcbiAgbGV0IHJlcyA9IGZhbHNlXHJcbiAgZm9yIChsZXQgaSBpbiBhKSB7XHJcbiAgICBpZiAoY2IoYVtpXSkpIHtcclxuICAgICAgcmVzID0gdHJ1ZVxyXG4gICAgICBicmVha1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBBcHBsaWVzIGEgbGlzdCBvZiBwcmVkaWNhdGVzIHRvIHRoZSBkYXRhIGFuZCByZXR1cm5zIHRydWUgaWYgb25lIHBhc3Nlc1xyXG4gKlxyXG4gKiBAZnVuY3Rpb24gYW55UGFzc1xyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgWygqLi4uIC0+IEJvb2xlYW4pXSAtPiAoKi4uLikgLT4gQm9vbGVhblxyXG4gKiBAcGFyYW0ge0FycmF5fSBwcmVkaWNhdGVzIEFuIGFycmF5IG9mIHByZWRpY2F0ZXMgdG8gY2hlY2tcclxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjb21iaW5lZCBwcmVkaWNhdGVcclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFueVBhc3MgKGNicywgYSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoY2JzW2ldKGEpKSByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufSlcclxuIiwiLyoqXHJcbiAqIEFwcGxpZXMgYSBsaXN0IG9mIGZ1bmN0aW9ucyB0byBhIGxpc3Qgb2YgdmFsdWVzIGFuZCByZXR1cm5zIGEgY29tYmluZWQgcmVzdWx0IGFycmF5XHJcbiAqXHJcbiAqIEBmdW5jdGlvbiBhcFxyXG4gKiBAZGVzY3JpcHRpb24gQXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIHJldHVybnMgYSBjb21iaW5lZCByZXN1bHQgYXJyYXlcclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIEBzaWcgW2EgLT4gYl0gLT4gW2FdIC0+IFtiXVxyXG4gKiBAcGFyYW0geyhGdW5jdGlvbltdfEZ1bmN0aW9ufEFwcGxpY2F0aXZlKX0gZm5zIC0gQW4gYXJyYXkgb2YgZnVuY3Rpb25zIG9yIGEgZnVuY3Rpb24gb3IgYW4gYXBwbGljYXRpdmVcclxuICogQHBhcmFtIHtBcnJheX0gdmFscyAtIEFuIGFycmF5IG9mIHZhbHVlc1xyXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX0gW2FdXHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBjdXJyeTEgZnJvbSAnLi4vX3ByaXZhdGUvY3VycnkxJ1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuaW1wb3J0IGZvbGQgZnJvbSAnLi4vYXJyYXkvZm9sZCdcclxuaW1wb3J0IG1hcCBmcm9tICcuLi9hcnJheS9tYXAnXHJcblxyXG5jb25zdCBpc0Z1bmN0aW9uID0gaXMoJ0Z1bmN0aW9uJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFwIChmbnMsIHZhbHMpIHtcclxuICBpZiAoaXNGdW5jdGlvbihmbnMuYXApKSB7XHJcbiAgICByZXR1cm4gZm5zLmFwKHZhbHMpXHJcbiAgfVxyXG4gIGlmIChpc0Z1bmN0aW9uKGZucykpIHtcclxuICAgIHJldHVybiB4ID0+IGZucyh4KSh2YWxzKHgpKVxyXG4gIH1cclxuICByZXR1cm4gZm9sZCgoYWNjLCBmKSA9PiBhY2MuY29uY2F0KG1hcChjdXJyeTEoZiksIHZhbHMpKSwgW10sIGZucylcclxufSlcclxuIiwiLyoqXHJcbiAqIEBmdW5jdGlvbiBjb21wb3NlXHJcbiAqIEByZXR1cm5zIHtmdW5jdGlvbigpOiAqfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSAoKSB7XHJcbiAgbGV0IGZ1bnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiBfY29tcG9zZSAoKSB7XHJcbiAgICBsZXQgaW5pdCA9IGZ1bnNbZnVucy5sZW5ndGggLSAxXVxyXG4gICAgbGV0IHJlc3VsdCA9IFtpbml0LmFwcGx5KGluaXQsIGFyZ3VtZW50cyldXHJcbiAgICBsZXQgaSA9IGZ1bnMubGVuZ3RoIC0gMlxyXG5cclxuICAgIGZvciAoaTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgY29uc3QgZnVuID0gZnVuc1tpXVxyXG5cclxuICAgICAgcmVzdWx0ID0gW2Z1bi5hcHBseShmdW4sIHJlc3VsdCldXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0WzBdXHJcbiAgfVxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG4vKipcclxuICogQGZ1bmN0aW9uIGN1cnJ5XHJcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJ5IChmdW4pIHtcclxuICBjb25zdCBhcmdzbGVuID0gZnVuLmxlbmd0aFxyXG5cclxuICBpZiAoYXJnc2xlbiA9PT0gMCkge1xyXG4gICAgcmV0dXJuIGZ1blxyXG4gIH1cclxuICByZXR1cm4gY3JlYXRlUmVjdXJzZXIoW10pXHJcblxyXG4gIGZ1bmN0aW9uIHJlY3Vyc2UgKGFjYywgYXJncykge1xyXG4gICAgY29uc3QgX2FjYyA9IGFjYy5jb25jYXQoYXJncylcclxuICAgIHJldHVybiBfYWNjLmxlbmd0aCA8IGFyZ3NsZW5cclxuICAgICAgPyBjcmVhdGVSZWN1cnNlcihfYWNjKVxyXG4gICAgICA6IGZ1bi5hcHBseSh0aGlzLCBfYWNjKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlUmVjdXJzZXIgKGFjYykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHJlY3Vyc2UoYWNjLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXHJcbiAqXHJcbiAqIEBmdW5jdGlvbiBkZWZhdWx0VG9cclxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgYSAtPiBiIC0+IGEgfCBiXHJcbiAqIEBwYXJhbSB7YX0gZGVmYXVsdCBUaGUgZGVmYXVsdCB2YWx1ZS5cclxuICogQHBhcmFtIHtifSB2YWwgYHZhbGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkIG9mIGBkZWZhdWx0YCB1bmxlc3MgYHZhbGAgaXMgYG51bGxgLCBgdW5kZWZpbmVkYCBvciBgTmFOYC5cclxuICogQHJldHVybiB7Kn0gVGhlIHNlY29uZCB2YWx1ZSBpZiBpdCBpcyBub3QgYG51bGxgLCBgdW5kZWZpbmVkYCBvciBgTmFOYCwgb3RoZXJ3aXNlIHRoZSBkZWZhdWx0IHZhbHVlXHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBkZWZhdWx0VG8gKGQsIHYpIHtcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxyXG4gIHJldHVybiB2ID09IG51bGwgfHwgdiAhPT0gdiA/IGQgOiB2XHJcbn0pXHJcbiIsIi8qKlxyXG5cclxuICogQGZ1bmN0aW9uIGVtcHR5XHJcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVtcHR5ICh4KSB7XHJcbiAgcmV0dXJuIG5ldyB4LmNvbnN0cnVjdG9yKClcclxufTtcclxuIiwiLyoqXHJcblxyXG4gKiBAZnVuY3Rpb24gZXF1YWxzXHJcbiAqIEBkZXNjcmlwdGlvbiBjaGVja3MgZm9yIGVxdWFsaXR5XHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcclxuaW1wb3J0IGV4aXN0cyBmcm9tICcuL2V4aXN0cydcclxuaW1wb3J0IGlkZW50aWNhbCBmcm9tICcuL2lkZW50aWNhbCdcclxuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xyXG5pbXBvcnQgbm90IGZyb20gJy4vbm90J1xyXG5pbXBvcnQgb3IgZnJvbSAnLi9vcidcclxuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL29iamVjdC9pcydcclxuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vYXJyYXkvaXMnXHJcbmltcG9ydCBpc0Jvb2xlYW4gZnJvbSAnLi4vYm9vbGVhbi9pcydcclxuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4uL251bWJlci9pcydcclxuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4uL3N0cmluZy9pcydcclxuaW1wb3J0IGlzRGF0ZSBmcm9tICcuLi9kYXRlL2lzJ1xyXG5pbXBvcnQgZXF1YWxzQXJyYXkgZnJvbSAnLi4vYXJyYXkvZXF1YWxzJ1xyXG5pbXBvcnQgZXF1YWxzT2JqZWN0IGZyb20gJy4uL29iamVjdC9lcXVhbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHMgKHgsIHkpIHtcclxuICBpZiAoaWRlbnRpY2FsKHgsIHkpKSByZXR1cm4gdHJ1ZVxyXG5cclxuICBpZiAodHlwZSh4KSAhPT0gdHlwZSh5KSkgcmV0dXJuIGZhbHNlXHJcblxyXG4gIGlmIChvcihub3QoZXhpc3RzKHgpKSwgbm90KGV4aXN0cyh5KSkpKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgaWYgKHguY29uc3RydWN0b3IgIT09IHkuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZVxyXG5cclxuICBpZiAoaXNTdHJpbmcoeCkgfHwgaXNCb29sZWFuKHgpIHx8IGlzTnVtYmVyKHgpIHx8IGlzRGF0ZSh4KSkge1xyXG4gICAgcmV0dXJuIGlkZW50aWNhbCh4LnZhbHVlT2YoKSwgeS52YWx1ZU9mKCkpXHJcbiAgfVxyXG4gIGlmIChpc0FycmF5KHgpKSB7XHJcbiAgICByZXR1cm4gZXF1YWxzQXJyYXkoeCwgeSlcclxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHgpKSB7XHJcbiAgICByZXR1cm4gZXF1YWxzT2JqZWN0KHgsIHkpXHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59KVxyXG4iLCIvKipcclxuICogQGZ1bmN0aW9uIGV4aXN0c1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhpc3RzICh4KSB7XHJcbiAgcmV0dXJuICEoeCA9PSBudWxsKVxyXG59O1xyXG4iLCIvKipcclxuICogRmluZCB0aGUgaW5kZXggbWF0Y2hpbmcgYSBwcmVkaWNhdGVcclxuICpcclxuICogQGZ1bmN0aW9uIGZpbmRJbmRleFxyXG4gKiBAZGVzY3JpcHRpb24gRmluZCB0aGUgaW5kZXggbWF0Y2hpbmcgYSBwcmVkaWNhdGVcclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIChhIC0+IGJvb2xlYW4pIC0+IFthXSAtPiBudW1iZXJcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gUHJlZGljYXRlIGZ1bmN0aW9uIHJldHVybnMgYSBib29sZWFuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IEFuIGFycmF5IGxpa2Ugb2JqZWN0XHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICoqL1xyXG5cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmaW5kSW5kZXggKGZuLCBhKSB7XHJcbiAgbGV0IGkgPSAwXHJcbiAgY29uc3QgbCA9IGEubGVuZ3RoXHJcbiAgd2hpbGUgKGkgPCBsKSB7XHJcbiAgICBpZiAoZm4oYVtpXSkpIHtcclxuICAgICAgcmV0dXJuIGlcclxuICAgIH1cclxuICAgIGkgKz0gMVxyXG4gIH1cclxuICByZXR1cm4gLTFcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieiBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbGEgZnVuY3Rpb24gb24gZWFjaCBpdGXDqVxyXG4gKlxyXG4gKiBAZnVuY3Rpb24gZm9sZFxyXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ6IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZcOpXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoKGEsIGIsIGMsIGEpIOKGkiBhKSDihpIgYSDihpIgW2JdIOKGkiBhXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIHJlY2VpdmVzIDQgdmFsdWVzOiB0aGUgYWNjdW11bGF0b3IsIHRoZSBpdGVtLCB0aGUgaW5kZXgsIGFuZCB0aGUgaW5pdGlhbCB2YWx1ZS5cclxuICogQHBhcmFtIHsqfSBhIGlzIHRoZSBpbml0aWFsIHZhbHVlXHJcbiAqIEBwYXJhbSB7Kn0gW2JdIHRoZSBhcnJheSBsaWtlIGl0ZW0gdG8gaXRlcmF0ZSBvdmVyXHJcbiAqIEByZXR1cm4geyp9IGEgaXMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlXHJcbiAqKi9cclxuXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQgYXJyYXlGb2xkIGZyb20gJy4uL2FycmF5L2ZvbGQnXHJcbmltcG9ydCBvYmplY3RGb2xkIGZyb20gJy4uL29iamVjdC9mb2xkJ1xyXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xyXG4gIGNvbnN0IHR5cGVNYXAgPSB7XHJcbiAgICAnT2JqZWN0Jzogb2JqZWN0Rm9sZCxcclxuICAgICdBcnJheSc6IGFycmF5Rm9sZFxyXG4gIH1cclxuICAvLyBpZiAoYS5uZXh0KSB7XHJcbiAgLy8gICByZXR1cm4gaXRlcmFibGVGb2xkKGNiLCBpbml0LCBhKVxyXG4gIC8vIH1cclxuICAvLyBpZiAodHlwZShTeW1ib2wpICE9PSAndW5kZWZpbmVkJyAmJiBhW1N5bWJvbC5pdGVyYXRvcl0pIHtcclxuICAvLyAgIHJldHVybiBpdGVyYWJsZUZvbGQoY2IsIGluaXQsIGFbU3ltYm9sLml0ZXJhdG9yXSgpKVxyXG4gIC8vIH1cclxuICByZXR1cm4gdHlwZU1hcFt0eXBlKGEpXShjYiwgaW5pdCwgYSlcclxufSlcclxuXHJcbi8vIGZ1bmN0aW9uIGl0ZXJhYmxlRm9sZCAoY2IsIGFjYywgZ2VuKSB7XHJcbi8vICAgbGV0IHN0ZXAgPSBnZW4ubmV4dCgpXHJcbi8vICAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcclxuLy8gICAgIGFjYyA9IGNiKGFjYywgc3RlcC52YWx1ZSlcclxuLy8gICAgIHN0ZXAgPSBnZW4ubmV4dCgpXHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiBhY2NcclxuLy8gfVxyXG4iLCIvKipcclxuXHJcbiAqIEBmdW5jdGlvbiBpZGVudGljYWxcclxuICogQGRlc2NyaXB0aW9uIGNoZWNrcyBmb3IgaWRlbnRpbnRpY2FsIGl0ZW1zXHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcclxuaW1wb3J0IGlzTmFuIGZyb20gJy4uL251bWJlci9pc05hbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlkZW50aWNhbCAoeCwgeSkge1xyXG4gIGlmICh4ID09PSAwICYmIHkgPT09IDApIHtcclxuICAgIHJldHVybiAxIC8geCA9PT0gMSAvIHlcclxuICB9XHJcbiAgaWYgKHggPT09IHkpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiAhIShpc05hbih4KSAmJiBpc05hbih5KSlcclxufSlcclxuIiwiLyoqXHJcblxyXG4gKiBAZnVuY3Rpb24gaWRlbnRpdHlcclxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHZhbHVlIHN1cHBsaWVkIHRvIHRoZSBmdW5jdGlvblxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlkZW50aXR5ICh4KSB7XHJcbiAgcmV0dXJuIHhcclxufTtcclxuIiwiLyoqXHJcbiAqIEBmdW5jdGlvbiBpc1xyXG4gKiBAZGVzY3JpcHRpb24gVmVyaWZpZXMgdGhlIHR5cGUgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50XHJcbiAqXHJcbiAqL1xyXG5cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlzIChDdG9yLCB2YWwpIHtcclxuICByZXR1cm4gdHlwZSh2YWwpID09PSBDdG9yXHJcbn0pXHJcbiIsIi8qKlxyXG5cclxuICogQGZ1bmN0aW9uIGVtcHR5XHJcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxyXG4gKi9cclxuaW1wb3J0IGVtcHR5IGZyb20gJy4vZW1wdHknXHJcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXHJcbmltcG9ydCBlcXVhbHMgZnJvbSAnLi9lcXVhbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtcHR5ICh4KSB7XHJcbiAgcmV0dXJuIGV4aXN0cyh4KSAmJiBlcXVhbHMoeCwgZW1wdHkoeCkpXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBcImxpZnRzXCIgYSBmdW5jdGlvbiBvZiBhcml0eSA+IDEgc28gdGhhdCBpdCBtYXkgXCJtYXAgb3ZlclwiIGEgbGlzdCwgRnVuY3Rpb25cclxuICpcclxuICogQGZ1bmN0aW9uIGxpZnRcclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnICgqLi4uIC0+ICopIC0+IChbKl0uLi4gLT4gWypdKVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQgY3VycnkxIGZyb20gJy4uL19wcml2YXRlL2N1cnJ5MSdcclxuaW1wb3J0IGZvbGQgZnJvbSAnLi4vdXRpbC9mb2xkJ1xyXG5pbXBvcnQgYXAgZnJvbSAnLi4vdXRpbC9hcCdcclxuaW1wb3J0IG1hcCBmcm9tICcuLi91dGlsL21hcCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGxpZnQgKGZuKSB7XHJcbiAgY29uc3QgbGlmdGVkID0gY3VycnkxKGN1cnJ5KGZuKSlcclxuICByZXR1cm4gY3VycnkoZnVuY3Rpb24gX2xpZnQgKCkge1xyXG4gICAgcmV0dXJuIGZvbGQoYXAsIG1hcChsaWZ0ZWQsIGFyZ3VtZW50c1swXSksIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpXHJcbiAgfSlcclxufSlcclxuIiwiLyoqXHJcbiAqIE1hcHMgb3ZlciBhbiBpdGVyYWJsZSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBmdW5jdGlvbiBtYXBcclxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIHdoaWNoIG1hcHMgb3ZlciBhbiBpdGVyYWJsZS5cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBiIC0+IGJcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcclxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxyXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuaW1wb3J0IGFycmF5TWFwIGZyb20gJy4uL2FycmF5L21hcCdcclxuaW1wb3J0IG9iamVjdE1hcCBmcm9tICcuLi9vYmplY3QvbWFwJ1xyXG5pbXBvcnQgbWFwTWFwIGZyb20gJy4uL21hcC9tYXAnXHJcbmltcG9ydCBzdHJpbmdNYXAgZnJvbSAnLi4vc3RyaW5nL21hcCdcclxuaW1wb3J0IHR5cGUgZnJvbSAnLi4vdXRpbC90eXBlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xyXG4gIHN3aXRjaCAodHlwZShhKSkge1xyXG4gIC8vIHN3aXRjaCAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpKSB7XHJcbiAgICBjYXNlICdGdW5jdGlvbic6XHJcbiAgICAgIHJldHVybiBjdXJyeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNiLmNhbGwodGhpcywgYS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKVxyXG4gICAgICB9KVxyXG4gICAgY2FzZSAnT2JqZWN0JzpcclxuICAgICAgcmV0dXJuIG9iamVjdE1hcChjYiwgYSlcclxuICAgIGNhc2UgJ1N0cmluZyc6XHJcbiAgICAgIHJldHVybiBzdHJpbmdNYXAoY2IsIGEpXHJcbiAgICBjYXNlICdNYXAnOlxyXG4gICAgICByZXR1cm4gbWFwTWFwKGNiLCBhKVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGFycmF5TWFwKGNiLCBhKVxyXG4gIH1cclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIGxhcmdlc3Qgb2YgdGhlIDIgYXJndW1lbnRzIHByb3ZpZGVkXHJcbiAqXHJcbiAqIEBmdW5jdGlvbiBtYXhcclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAcGFyYW0geyp9IGFcclxuICogQHBhcmFtIHsqfSBiXHJcbiAqIEByZXR1cm4geyp9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXggKGEsIGIpIHtcclxuICByZXR1cm4gYiA+IGEgPyBiIDogYVxyXG59KVxyXG4iLCIvKipcclxuICogQGZ1bmN0aW9uIG5vdFxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBub3QgKHgpIHtcclxuICByZXR1cm4gIXhcclxufSlcclxuIiwiLyoqXHJcbiAqIEBmdW5jdGlvbiBvclxyXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIG9uZSBvciB0aGUgb3RoZXIgaXMgdHJ1ZVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBvciAoeCwgeSkge1xyXG4gIHJldHVybiB4IHx8IHlcclxufSlcclxuIiwiLyoqXHJcbiAqIEBmdW5jdGlvbiB0cnV0aHlcclxuICovXHJcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cnV0aHkgKHgpIHtcclxuICByZXR1cm4gKHggIT09IGZhbHNlKSAmJiBleGlzdHMoeClcclxufTtcclxuIiwiLyoqXHJcbiAqIEBmdW5jdGlvbiB0eXBlXHJcbiAqL1xyXG5pbXBvcnQgY3VycnkxIGZyb20gJy4uL19wcml2YXRlL2N1cnJ5MSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5MShmdW5jdGlvbiB0eXBlICh4KSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KS5zbGljZSg4LCAtMSlcclxufSlcclxuIiwiLyoqXHJcblxyXG4gKiB6aXBcclxuICpcclxuICogQGZ1bmN0aW9uIHppcFxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcbmltcG9ydCB6aXBXaXRoIGZyb20gJy4vemlwV2l0aCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHppcCAoYSwgYikge1xyXG4gIHJldHVybiB6aXBXaXRoKGZ1bmN0aW9uIF96aXBXaXRoICh4LCB5KSB7IHJldHVybiBbeCwgeV0gfSwgYSwgYilcclxufSlcclxuIiwiLyoqXHJcblxyXG4gKiB6aXBXaXRoXHJcbiAqXHJcbiAqICBAZnVuY3Rpb24gemlwV2l0aFxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiB6aXBXaXRoIChjYiwgYSwgYikge1xyXG4gIGNvbnN0IGFyciA9IFtdXHJcbiAgY29uc3QgbGVuID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKVxyXG4gIGxldCBpID0gMFxyXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgYXJyLnB1c2goY2IoYVtpXSwgYltpXSkpXHJcbiAgfVxyXG4gIHJldHVybiBhcnJcclxufSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==