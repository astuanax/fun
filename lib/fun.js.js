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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/map/filter.js":
/*!***************************!*\
  !*** ./src/map/filter.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: Unknown substitution \"BODY\" given\n    at Object.keys.forEach.key (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/template/lib/populate.js:35:15)\n    at Array.forEach (<anonymous>)\n    at populatePlaceholders (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/template/lib/populate.js:33:31)\n    at arg (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/template/lib/string.js:22:51)\n    at arg (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/template/lib/builder.js:77:14)\n    at pushComputedPropsSpec (/Volumes/BigOne/github/fun/node_modules/babel-plugin-transform-es2015-for-of/lib/index.js:157:20)\n    at PluginPass.ForOfStatement (/Volumes/BigOne/github/fun/node_modules/babel-plugin-transform-es2015-for-of/lib/index.js:72:21)\n    at newFn (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/visitors.js:193:21)\n    at NodePath._call (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/path/context.js:53:20)\n    at NodePath.call (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/path/context.js:40:17)\n    at NodePath.visit (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/path/context.js:88:12)\n    at TraversalContext.visitQueue (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/context.js:118:16)\n    at TraversalContext.visitMultiple (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/context.js:85:17)\n    at TraversalContext.visit (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/context.js:144:19)\n    at Function.traverse.node (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/index.js:94:17)\n    at NodePath.visit (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/path/context.js:95:18)\n    at TraversalContext.visitQueue (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/context.js:118:16)\n    at TraversalContext.visitSingle (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/context.js:90:19)\n    at TraversalContext.visit (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/context.js:146:19)\n    at Function.traverse.node (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/index.js:94:17)\n    at NodePath.visit (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/path/context.js:95:18)\n    at TraversalContext.visitQueue (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/context.js:118:16)\n    at TraversalContext.visitMultiple (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/context.js:85:17)\n    at TraversalContext.visit (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/context.js:144:19)\n    at Function.traverse.node (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/index.js:94:17)\n    at NodePath.visit (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/path/context.js:95:18)\n    at TraversalContext.visitQueue (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/context.js:118:16)\n    at TraversalContext.visitSingle (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/context.js:90:19)\n    at TraversalContext.visit (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/context.js:146:19)\n    at Function.traverse.node (/Volumes/BigOne/github/fun/node_modules/@babel/core/node_modules/@babel/traverse/lib/index.js:94:17)\n    =============\n    at _default (/Volumes/BigOne/github/fun/node_modules/babel-plugin-transform-es2015-for-of/lib/index.js:13:20)\n    at loadDescriptor (/Volumes/BigOne/github/fun/node_modules/@babel/core/lib/config/full.js:165:14)\n    at cachedFunction (/Volumes/BigOne/github/fun/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at loadPluginDescriptor (/Volumes/BigOne/github/fun/node_modules/@babel/core/lib/config/full.js:200:28)\n    at config.plugins.reduce (/Volumes/BigOne/github/fun/node_modules/@babel/core/lib/config/full.js:69:20)\n    at Array.reduce (<anonymous>)\n    at recurseDescriptors (/Volumes/BigOne/github/fun/node_modules/@babel/core/lib/config/full.js:67:38)\n    at recurseDescriptors (/Volumes/BigOne/github/fun/node_modules/@babel/core/lib/config/full.js:94:27)\n    at loadFullConfig (/Volumes/BigOne/github/fun/node_modules/@babel/core/lib/config/full.js:108:6)\n    at process.nextTick (/Volumes/BigOne/github/fun/node_modules/@babel/core/lib/transform.js:28:33)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4uanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1bi5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvX3ByaXZhdGUvY3VycnkxLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L3RvLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS91bmlvbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9GLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9ib29sZWFuL1QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2Jvb2xlYW4vaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2NvbnN0YW50cy9NT05USFMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2NvbnN0YW50cy9XRUVLREFZUy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9kaWZmRGF0ZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9mb3JtYXREYXRlVGltZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pc0Z1dHVyZURhdGUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvaXNWYWxpZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b0RheS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b0hvdXIuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9NaW51dGVzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvU2Vjb25kcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21hcC9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbWFwL2tleXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9KdXN0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tb25hZHMvTWF5YmUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9Ob3RoaW5nLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvYWRkLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvZGl2aWRlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL251bWJlci9pc05hbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL211bHRpcGx5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZXF1YWxzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZmlsdGVyLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZm9sZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2hhcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2hhc0luLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3Qva2V5c0luLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9vbWl0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvcGF0aC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L3Byb3AuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9mb3JtYXRTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvc3RyaW5nL21hcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hZGp1c3QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWRqdXN0V2l0aC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbGwuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWxsUGFzcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbHdheXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYW5kLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FueS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbnlQYXNzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2NvbXBvc2UuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvY3VycnkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZGVmYXVsdFRvLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2VtcHR5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2VxdWFscy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9leGlzdHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZmluZEluZGV4LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2ZvbGQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvaWRlbnRpY2FsLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lkZW50aXR5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvbGlmdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvbWF4LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL25vdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9vci5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC90cnV0aHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvdHlwZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC96aXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvemlwV2l0aC5qcyJdLCJuYW1lcyI6WyJjdXJyeTEiLCJmbiIsImN1cnJpZWQiLCJhIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZXF1YWxzQXJyYXkiLCJ4IiwieSIsImkiLCJmb2xkIiwiY2IiLCJpbml0IiwibCIsInIiLCJtYXAiLCJBcnJheSIsInRvQXJyYXkiLCJhcHBseSIsInVuaW9uQXJyYXkiLCJhTCIsImFSIiwiZnJvbSIsIlNldCIsImNvbmNhdCIsIk1PTlRIUyIsIldFRUtEQVlTIiwic3RhcnQiLCJlbmQiLCJEYXRlIiwiZ2V0VGltZSIsImdldFdlZWsiLCJkIiwiVVRDIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJzZXRVVENEYXRlIiwiZ2V0VVRDRGF0ZSIsImdldFVUQ0RheSIsInllYXJTdGFydCIsImdldFVUQ0Z1bGxZZWFyIiwid2Vla05vIiwiTWF0aCIsImNlaWwiLCJaRVJPUyIsImxhc3ROIiwibiIsInN0ciIsInN1YnN0cmluZyIsImZpcnN0TiIsImZpbGwiLCJkaWdpdHMiLCJEQVRFX1RPS0VOUyIsIm1vZENlaWxpbmciLCJtb2QiLCJ2YWwiLCJ0b2tlbnMiLCJZWVlZIiwiWVkiLCJNTU1NIiwiTU1NIiwiTU0iLCJNIiwidyIsInd3IiwiREQiLCJEIiwiZGRkZCIsImdldERheSIsImRkZCIsImRkIiwiSEgiLCJnZXRIb3VycyIsIkgiLCJoaCIsImgiLCJtbSIsImdldE1pbnV0ZXMiLCJtIiwic3MiLCJnZXRTZWNvbmRzIiwicyIsIkEiLCJTU1MiLCJnZXRNaWxsaXNlY29uZHMiLCJTUyIsIlMiLCJRIiwic3dhcFRva2VuV2l0aFZhbHVlIiwiZGF0ZSIsInRva2VuIiwiZm9ybWF0IiwibWF0Y2giLCJqb2luIiwiaXNWYWxpZCIsImlzRmluaXRlIiwidmFsdWVPZiIsImtleXMiLCJmb3JFYWNoIiwidiIsImsiLCJzZXQiLCJKdXN0IiwiX3ZhbHVlIiwicHJvdG90eXBlIiwiaXNKdXN0IiwiaXNOb3RoaW5nIiwiTWF5YmUiLCJfX3ZhbHVlIiwib2YiLCJnZXRPckVsc2UiLCJmIiwiYXAiLCJOb3RoaW5nIiwiYWRkIiwiYiIsImRpdmlkZSIsImlzTmFuIiwiaXNOYU4iLCJtdWx0aXBseSIsImtleVgiLCJrZXlZIiwib2JqZWN0RmlsdGVyIiwibyIsIk9iamVjdCIsImhhcyIsInByb3AiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJoYXNJbiIsInB1c2giLCJtZXJnZSIsIm9iakwiLCJvYmpSIiwicmVzdWx0IiwiYXNzaWduIiwia2V5Iiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsIm5hbWVzIiwiZmlsdGVyIiwiaW5kZXhPZiIsInBhdGgiLCJpZHgiLCJwIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiX2NvbmNhdCIsInNlcGFyYXRvciIsInNsaWNlIiwiZm9ybWF0U3RyaW5nIiwiYXJncyIsInNoaWZ0IiwicmVwbGFjZSIsImNoYXJBdCIsImFkanVzdCIsImFkanVzdFdpdGgiLCJwcmVkIiwiX2ZuIiwiYWxsIiwicmVzIiwiYWxsUGFzcyIsImNicyIsImFsd2F5cyIsImFuZCIsImFueSIsImFueVBhc3MiLCJpc0Z1bmN0aW9uIiwiZm5zIiwidmFscyIsImFjYyIsImNvbXBvc2UiLCJmdW5zIiwiX2NvbXBvc2UiLCJmdW4iLCJjdXJyeSIsImFyZ3NsZW4iLCJjcmVhdGVSZWN1cnNlciIsInJlY3Vyc2UiLCJfYWNjIiwiZGVmYXVsdFRvIiwiZW1wdHkiLCJjb25zdHJ1Y3RvciIsImVxdWFscyIsImV4aXN0cyIsImZpbmRJbmRleCIsInR5cGVNYXAiLCJpZGVudGljYWwiLCJpZGVudGl0eSIsImlzIiwiQ3RvciIsImlzRW1wdHkiLCJsaWZ0IiwibGlmdGVkIiwiX2xpZnQiLCJtYXgiLCJub3QiLCJvciIsInRydXRoeSIsInR5cGUiLCJ0b1N0cmluZyIsInppcCIsIl96aXBXaXRoIiwiemlwV2l0aCIsImFyciIsImxlbiIsIm1pbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0FBWjtBQUNBLE1BQUlJLENBQUMsR0FBRyxDQUFSOztBQUNBLE9BQUtBLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3NNLEdBQWhCLEVBQXFCdE0sQ0FBQyxFQUF0QixFQUEwQjtBQUN4QnFNLE9BQUcsQ0FBQzFFLElBQUosQ0FBU3pILEVBQUUsQ0FBQ1IsQ0FBQyxDQUFDTSxDQUFELENBQUYsRUFBTzJHLENBQUMsQ0FBQzNHLENBQUQsQ0FBUixDQUFYO0FBQ0Q7O0FBQ0QsU0FBT3FNLEdBQVA7QUFDRCxDQVJjLEMiLCJmaWxlIjoiZnVuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJmdW4uanNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZnVuLmpzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZ1bi5qc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogUmV0dXJucyBhIGN1cnJpZWQgZnVuY3Rpb24gd2l0aCBhcml0eSAxXG4gKiBAZnVuY3Rpb24gY3VycnkxXG4gKiBAcHJpdmF0ZVxuICogQHNpbmNlIHYxLjAuMlxuICoqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeTEgKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkIChhKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDBcbiAgICAgID8gdGhpc1xuICAgICAgOiBmbihhKVxuICB9XG59XG4iLCIvKipcbiAqIEBmdW5jdGlvbiBlcXVhbHNBcnJheVxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIGZvciBkZWVwIGNvbXBhcmlzb24gb2YgYXJyYXlzXG4gKiBAcGFyYW0ge2F9IHggLSBPYmplY3QgdG8gY29tcGFyZSBvZiB0eXBlIGFcbiAqIEBwYXJhbSB7YX0geSAtIE9iamVjdCB4IHRvIGNvbXBhcmUgd2l0aCBvYmplY3QgeFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgbm90IGZyb20gJy4uL3V0aWwvbm90J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi91dGlsL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzQXJyYXkgKHgsIHkpIHtcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub3QoZXF1YWxzKHhbaV0sIHlbaV0pKSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IG1hcHBpbmcgb3ZlciB0aGUgcHJvdmlkZWQgYXJyYXkgYW5kIGNhbGxpbmcgYW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSB7Y2JGdW5jdGlvbn0gY2IgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBtb2RpZnkgdGhlIGl0ZW1cbiAqIEBwYXJhbSB7Kn0gaW5pdCAtIEluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBBcnJheSB3aXRoIGl0ZW1zIHRvIG1vZGlmeSBieSB0aGUgY2IgZnVuY3Rpb25cbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFsaWFzIHJlZHVjZVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvbGQoYWRkLCAwLCBbMSwxLDFdKVxuICogLy8gcmVzdWx0ID0gM1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIGNiRnVuY3Rpb25cbiAqIEBwYXJhbSB7Kn0gciAtIEFjY3VtdWxhdG9yIHdoaWNoIGFjY3VtdWxhdGVzIHRoZSBjYWxsYmFjaydzIHJldHVybiB2YWx1ZXNcbiAqIEBwYXJhbSB7Kn0gaXRlbSAtIHRoZSBjdXJyZW50IGVsZW1lbnQgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSB0aGUgaW5kZXkgb2YgdGhlIGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge0FycmF5fSBhIC0gVGhlIGluaXRpYWwgYXJyYXlcbiAqIEByZXR1cm4geyp9XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9IGluaXRcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2IociwgYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IE9iamVjdCB0byB2ZXJpZml5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzQXJyYXkoWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IHRydWVcbiAqL1xuXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0FycmF5JylcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIE1hcHMgb3ZlciBhbiBhcnJheSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoaWRlbnRpdHksIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzAsMiwzXVxuICogIGNvbnN0IGFkZDIgPSBhZGQoMilcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoYWRkMiwgWzAsMiwzXSlcbiAqICAvLyByZXN1bHQgPSBbMiw0LDVdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBjb25zdCByID0gbmV3IEFycmF5KGwpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltpXSA9IGNiKGFbaV0sIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiB0b0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQ29udmVydHMgdGhlIGlucHV0IHRvIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5TGlrZX0geCAtIE9iamVjdCB0byBjb252ZXJ0IHRvIGFuIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSB0b0FycmF5KFwic3RyaW5nXCIpXG4gKiAvLyByZXN1bHQgPSBbJ3MnLCd0JywncicsJ2knLCduJywnZyddXG4gKlxuICogZnVuY3Rpb24gKCkge1xuICogIGNvbnN0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cylcbiAqICBjb25zb2xlLmxvZyh0eXBlb2YgYXJncykgLy8gQXJyYXlcbiAqIH1cbiAqXG4gKiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0FycmF5ICh4KSB7XG4gIHJldHVybiB4Lmxlbmd0aCA9PT0gMSA/IFt4WzBdXSA6IEFycmF5LmFwcGx5KG51bGwsIHgpXG59O1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdW5pb25BcnJheVxuICogQGRlc2NyaXB0aW9uIE1lcmdlcyAyIGFycmF5c1xuICogQHBhcmFtIHtBcnJheX0gYUwgLSBBcnJheSB0byBtZXJnZVxuICogQHBhcmFtIHtBcnJheX0gYVIgLSBBcnJheSB0byBtZXJnZVxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gdW5pb25BcnJheShbMCwxLDJdLCBbMyw0LDVdKVxuICogLy8gcmVzdWx0ID0gWzAuMS4yLjMuNC41XVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHVuaW9uQXJyYXkgKGFMLCBhUikge1xuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFMLmNvbmNhdChhUikpKVxufSlcbiIsIi8qKlxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICpcbiAqIEBmdW5jdGlvbiBGXG4gKiBAZGVzY3JpcHRpb24gQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqKi9cbmltcG9ydCBhbHdheXMgZnJvbSAnLi4vdXRpbC9hbHdheXMnXG5cbmV4cG9ydCBkZWZhdWx0IGFsd2F5cyhmYWxzZSlcbiIsIi8qKlxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICpcbiAqIEBmdW5jdGlvbiBUXG4gKiBAZGVzY3JpcHRpb24gQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqKi9cbmltcG9ydCBhbHdheXMgZnJvbSAnLi4vdXRpbC9hbHdheXMnXG5cbmV4cG9ydCBkZWZhdWx0IGFsd2F5cyh0cnVlKVxuIiwiLyoqXG4gKiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxuICpcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gaXNcbiAqIEBkZXNjcmlwdGlvbiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBJdGVtIHRvIHZlcmlmeVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqKi9cbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnQm9vbGVhbicpXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGNvbnN0IE1PTlRIUyA9IFtcbiAgJ0phbnVhcnknLFxuICAnRmVicnVhcnknLFxuICAnTWFyY2gnLFxuICAnQXByaWwnLFxuICAnTWF5JyxcbiAgJ0p1bmUnLFxuICAnSnVseScsXG4gICdBdWd1c3QnLFxuICAnU2VwdGVtYmVyJyxcbiAgJ09jdG9iZXInLFxuICAnTm92ZW1iZXInLFxuICAnRGVjZW1iZXInXG5dXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBXRUVLREFZUyA9IFtcbiAgJ1N1bmRheScsXG4gICdNb25kYXknLFxuICAnVHVlc2RheScsXG4gICdXZWRuZXNkYXknLFxuICAnVGh1cnNkYXknLFxuICAnRnJpZGF5JyxcbiAgJ1NhdHVyZGF5J1xuXVxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChzdGFydCwgZW5kKSA9PiB7XHJcbiAgcmV0dXJuIChuZXcgRGF0ZShzdGFydCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoZW5kKS5nZXRUaW1lKCkpXHJcbn0pXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjAvMDEvMjAxNy5cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgaXNWYWxpZERhdGUgZnJvbSAnLi9pc1ZhbGlkJ1xuaW1wb3J0IHsgV0VFS0RBWVMgfSBmcm9tICcuLi9jb25zdGFudHMvV0VFS0RBWVMnXG5pbXBvcnQgeyBNT05USFMgfSBmcm9tICcuLi9jb25zdGFudHMvTU9OVEhTJ1xuXG5jb25zdCBnZXRXZWVrID0gKGQpID0+IHtcbiAgLy8gQ29weSBkYXRlIHNvIGRvbid0IG1vZGlmeSBvcmlnaW5hbFxuICBkID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIGQuZ2V0RGF0ZSgpKSlcbiAgLy8gU2V0IHRvIG5lYXJlc3QgVGh1cnNkYXk6IGN1cnJlbnQgZGF0ZSArIDQgLSBjdXJyZW50IGRheSBudW1iZXJcbiAgLy8gTWFrZSBTdW5kYXkncyBkYXkgbnVtYmVyIDdcbiAgZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpICsgNCAtIChkLmdldFVUQ0RheSgpIHx8IDcpKVxuICAvLyBHZXQgZmlyc3QgZGF5IG9mIHllYXJcbiAgbGV0IHllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpXG5cbiAgLy8gQ2FsY3VsYXRlIGZ1bGwgd2Vla3MgdG8gbmVhcmVzdCBUaHVyc2RheVxuICBsZXQgd2Vla05vID0gTWF0aC5jZWlsKCgoKGQgLSB5ZWFyU3RhcnQpIC8gODY0MDAwMDApICsgMSkgLyA3KVxuXG4gIC8vIFJldHVybiBhcnJheSBvZiB5ZWFyIGFuZCB3ZWVrIG51bWJlclxuICByZXR1cm4gW2QuZ2V0VVRDRnVsbFllYXIoKSwgd2Vla05vXVxufVxuXG4vLyB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgdGhlIGRhdGUgZm9ybWF0dGluZ1xuY29uc3QgWkVST1MgPSAnMDAwMDAwMDAnXG5jb25zdCBsYXN0TiA9IGN1cnJ5KChuLCBzdHIpID0+IHN0ci5zdWJzdHJpbmcoc3RyLmxlbmd0aCAtIG4sIHN0ci5sZW5ndGgpKVxuY29uc3QgZmlyc3ROID0gY3VycnkoKG4sIHN0cikgPT4gc3RyLnN1YnN0cmluZygwLCBuKSlcbmNvbnN0IGZpbGwgPSBjdXJyeSgoZGlnaXRzLCBuKSA9PiBsYXN0TihkaWdpdHMsIFpFUk9TICsgbikpXG5cbi8vIGRhdGUvdGltZSByZWdleFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5jb25zdCBEQVRFX1RPS0VOUyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRfFlZWVlZWXxZWVlZWXxZWVlZfFlZfGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fG1tP3xzcz98U3sxLDl9fHh8WHx6ej98Wlo/fC4pL2dcblxuY29uc3QgbW9kQ2VpbGluZyA9IChtb2QsIHZhbCkgPT4gdmFsICUgbW9kIHx8IG1vZFxuXG4vLyB0b2tlbnMgbWFwIHRvIGdldCBwYXJ0cyBvZiB0aGUgZGF0ZSAvdGltZVxuY29uc3QgdG9rZW5zID0ge1xuICBZWVlZOiBkID0+IGZpbGwoNCwgZC5nZXRGdWxsWWVhcigpKSxcbiAgWVk6IGQgPT4gbGFzdE4oMiwgZmlsbCg0LCBkLmdldEZ1bGxZZWFyKCkpKSxcbiAgTU1NTTogZCA9PiBNT05USFNbZC5nZXRNb250aCgpXSxcbiAgTU1NOiBkID0+IGZpcnN0TigzLCBNT05USFNbZC5nZXRNb250aCgpXSksXG4gIE1NOiBkID0+IGZpbGwoMiwgZC5nZXRNb250aCgpICsgMSksXG4gIE06IGQgPT4gZC5nZXRNb250aCgpICsgMSxcbiAgdzogZCA9PiBnZXRXZWVrKGQpLFxuICB3dzogZCA9PiBmaWxsKDIsIGdldFdlZWsoZCkpLFxuICBERDogZCA9PiBmaWxsKDIsIGQuZ2V0RGF0ZSgpKSxcbiAgRDogZCA9PiBkLmdldERhdGUoKSxcbiAgZGRkZDogZCA9PiBXRUVLREFZU1tkLmdldERheSgpXSxcbiAgZGRkOiBkID0+IGZpcnN0TigzLCBXRUVLREFZU1tkLmdldERheSgpXSksXG4gIGRkOiBkID0+IGZpcnN0TigyLCBXRUVLREFZU1tkLmdldERheSgpXSksXG4gIGQ6IGQgPT4gZC5nZXREYXkoKSxcbiAgSEg6IGQgPT4gZmlsbCgyLCBkLmdldEhvdXJzKCkpLFxuICBIOiBkID0+IGQuZ2V0SG91cnMoKSxcbiAgaGg6IGQgPT4gZmlsbCgyLCBtb2RDZWlsaW5nKDEyLCBkLmdldEhvdXJzKCkpKSxcbiAgaDogZCA9PiBtb2RDZWlsaW5nKDEyLCBkLmdldEhvdXJzKCkpLFxuICBtbTogZCA9PiBmaWxsKDIsIGQuZ2V0TWludXRlcygpKSxcbiAgbTogZCA9PiBkLmdldE1pbnV0ZXMoKSxcbiAgc3M6IGQgPT4gZmlsbCgyLCBkLmdldFNlY29uZHMoKSksXG4gIHM6IGQgPT4gZC5nZXRTZWNvbmRzKCksXG4gIEE6IGQgPT4gZC5nZXRIb3VycygpID4gMTEgPyAnUE0nIDogJ0FNJyxcbiAgYTogZCA9PiBkLmdldEhvdXJzKCkgPiAxMSA/ICdwbScgOiAnYW0nLFxuICBTU1M6IGQgPT4gZmlsbCgzLCBkLmdldE1pbGxpc2Vjb25kcygpKSxcbiAgU1M6IGQgPT4gZmlyc3ROKDIsIGZpbGwoMywgZC5nZXRNaWxsaXNlY29uZHMoKSkpLFxuICBTOiBkID0+IGZpcnN0TigxLCBmaWxsKDMsIGQuZ2V0TWlsbGlzZWNvbmRzKCkpKSxcbiAgUTogZCA9PiBNYXRoLmNlaWwoKGQuZ2V0TW9udGgoKSArIDEpIC8gMylcbn1cblxuLy8gbWFwIHRoaXMgZnVuY3Rpb24gdG8gZ2V0IHRoZSBhY3R1YWwgdGltZS9kYXRlIHZhbHVlIGZvciBlYWNoIHRva2VuXG5jb25zdCBzd2FwVG9rZW5XaXRoVmFsdWUgPSBjdXJyeSgoZGF0ZSwgdG9rZW4pID0+IHtcbiAgcmV0dXJuIHRva2Vuc1t0b2tlbl0gPyB0b2tlbnNbdG9rZW5dKGRhdGUpIDogdG9rZW5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChmb3JtYXQsIGRhdGUpID0+IHtcbiAgLy8gY2hlY2sgZm9yIHZhbGlkIGRhdGVcbiAgaWYgKCFpc1ZhbGlkRGF0ZShkYXRlKSkgcmV0dXJuICdJbnZhbGlkIERhdGUnIC8vIHJldHVybiBzdHJpbmdcbiAgcmV0dXJuIGZvcm1hdC5tYXRjaChEQVRFX1RPS0VOUykubWFwKHN3YXBUb2tlbldpdGhWYWx1ZShkYXRlKSkuam9pbignJykgLy8gcmV0dXJuIGpvaW5lZCBzdHJpbmdcbn0pXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpcygnRGF0ZScpXHJcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDkvMDMvMjAxNy5cbiAqL1xuaW1wb3J0IGRpZmZEYXRlIGZyb20gJy4vZGlmZkRhdGUnXG5cbmV4cG9ydCBkZWZhdWx0IChkKSA9PiB7XG4gIHJldHVybiBkaWZmRGF0ZShuZXcgRGF0ZSgpKShkKSA8IDBcbn1cbiIsIi8qKlxuICpcbiAqL1xuaW1wb3J0IGlzRGF0ZSBmcm9tICcuL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkICh4KSB7XG4gIC8vIG5vaW5zcGVjdGlvbiBKU0NoZWNrRnVuY3Rpb25TaWduYXR1cmVzXG4gIHJldHVybiBpc0RhdGUoeCkgJiYgaXNGaW5pdGUoeC52YWx1ZU9mKCkpXG59O1xuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDg2NDAwMDAwIC8vIDI0KjYwKjYwKjEwMDAgPSA4NjQwMDAwMFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gMzYwMDAwMCAvLyA2MCo2MCoxMDAwID0gMzYwMDAwMFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gNjAwMDAgLy8gNjAqMTAwMCA9IDYwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyAxMDAwXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vLyBhcnJheVxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlcXVhbHNBcnJheSB9IGZyb20gJ2FycmF5L2VxdWFscydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNBcnJheSB9IGZyb20gJ2FycmF5L2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0FycmF5IH0gZnJvbSAnYXJyYXkvdG8nXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuaW9uQXJyYXkgfSBmcm9tICdhcnJheS91bmlvbidcblxuLy8gYm9vbGVhblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0Jvb2xlYW4gfSBmcm9tICdib29sZWFuL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGIH0gZnJvbSAnYm9vbGVhbi9GJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUIH0gZnJvbSAnYm9vbGVhbi9UJ1xuXG4vLyBtb25hZHNcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSnVzdCB9IGZyb20gJ21vbmFkcy9KdXN0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXliZSB9IGZyb20gJ21vbmFkcy9NYXliZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm90aGluZyB9IGZyb20gJ21vbmFkcy9Ob3RoaW5nJ1xuXG4vLyBudW1iZXJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOdW1iZXIgfSBmcm9tICdudW1iZXIvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTmFuIH0gZnJvbSAnbnVtYmVyL2lzTmFuJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGQgfSBmcm9tICdudW1iZXIvYWRkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtdWx0aXBseSB9IGZyb20gJ251bWJlci9tdWx0aXBseSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGl2aWRlIH0gZnJvbSAnbnVtYmVyL2RpdmlkZSdcblxuLy8gb2JqZWN0XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFsc09iamVjdCB9IGZyb20gJ29iamVjdC9lcXVhbHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzT2JqZWN0IH0gZnJvbSAnb2JqZWN0L2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZU9iamVjdCB9IGZyb20gJ29iamVjdC9tZXJnZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb21pdEZyb21PYmplY3QgfSBmcm9tICdvYmplY3Qvb21pdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzIH0gZnJvbSAnb2JqZWN0L2hhcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzSW4gfSBmcm9tICdvYmplY3QvaGFzSW4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleXMgfSBmcm9tICdvYmplY3Qva2V5cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5c0luIH0gZnJvbSAnb2JqZWN0L2tleXNJbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlsdGVyT2JqZWN0IH0gZnJvbSAnb2JqZWN0L2ZpbHRlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9sZE9iamVjdCB9IGZyb20gJ29iamVjdC9mb2xkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXBPYmplY3QgfSBmcm9tICdvYmplY3QvbWFwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoIH0gZnJvbSAnb2JqZWN0L3BhdGgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHByb3AgfSBmcm9tICdvYmplY3QvcHJvcCdcblxuLy8gc3RyaW5nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmNhdFN0cmluZyB9IGZyb20gJ3N0cmluZy9jb25jYXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvcm1hdFN0cmluZyB9IGZyb20gJ3N0cmluZy9mb3JtYXRTdHJpbmcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzU3RyaW5nIH0gZnJvbSAnc3RyaW5nL2lzJ1xuXG4vLyBtYXBcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwRmlsdGVyIH0gZnJvbSAnbWFwL2ZpbHRlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNNYXAgfSBmcm9tICdtYXAvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hcEtleXMgfSBmcm9tICdtYXAva2V5cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwTWFwIH0gZnJvbSAnbWFwL21hcCdcblxuLy8gdXRpbFxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGp1c3QgfSBmcm9tICd1dGlsL2FkanVzdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWRqdXN0V2l0aCB9IGZyb20gJ3V0aWwvYWRqdXN0V2l0aCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxsIH0gZnJvbSAndXRpbC9hbGwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsbFBhc3MgfSBmcm9tICd1dGlsL2FsbFBhc3MnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsd2F5cyB9IGZyb20gJ3V0aWwvYWx3YXlzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbmQgfSBmcm9tICd1dGlsL2FuZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW55IH0gZnJvbSAndXRpbC9hbnknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFueVBhc3MgfSBmcm9tICd1dGlsL2FueVBhc3MnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFwIH0gZnJvbSAndXRpbC9hcCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcG9zZSB9IGZyb20gJ3V0aWwvY29tcG9zZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3VycnkgfSBmcm9tICd1dGlsL2N1cnJ5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0VG8gfSBmcm9tICd1dGlsL2RlZmF1bHRUbydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZW1wdHkgfSBmcm9tICd1dGlsL2VtcHR5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlcXVhbHMgfSBmcm9tICd1dGlsL2VxdWFscydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXhpc3RzIH0gZnJvbSAndXRpbC9leGlzdHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbmRJbmRleCB9IGZyb20gJ3V0aWwvZmluZEluZGV4J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb2xkIH0gZnJvbSAndXRpbC9mb2xkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpZGVudGljYWwgfSBmcm9tICd1dGlsL2lkZW50aWNhbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWRlbnRpdHkgfSBmcm9tICd1dGlsL2lkZW50aXR5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpcyB9IGZyb20gJ3V0aWwvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1wdHkgfSBmcm9tICd1dGlsL2lzRW1wdHknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxpZnQgfSBmcm9tICd1dGlsL2xpZnQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hcCB9IGZyb20gJ3V0aWwvbWFwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXggfSBmcm9tICd1dGlsL21heCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbm90IH0gZnJvbSAndXRpbC9ub3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG9yIH0gZnJvbSAndXRpbC9vcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHJ1dGh5IH0gZnJvbSAndXRpbC90cnV0aHknXG5leHBvcnQgeyBkZWZhdWx0IGFzIHR5cGUgfSBmcm9tICd1dGlsL3R5cGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHppcCB9IGZyb20gJ3V0aWwvemlwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB6aXBXaXRoIH0gZnJvbSAndXRpbC96aXBXaXRoJ1xuXG4vLyBkYXRlXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRpZmZEYXRlIH0gZnJvbSAnZGF0ZS9kaWZmRGF0ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9ybWF0RGF0ZVRpbWUgfSBmcm9tICdkYXRlL2Zvcm1hdERhdGVUaW1lJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkYXRlSXMgfSBmcm9tICdkYXRlL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0Z1dHVyZURhdGUgfSBmcm9tICdkYXRlL2lzRnV0dXJlRGF0ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNWYWxpZCB9IGZyb20gJ2RhdGUvaXNWYWxpZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9EYXkgfSBmcm9tICdkYXRlL3RvRGF5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0hvdXIgfSBmcm9tICdkYXRlL3RvSG91cidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9NaW51dGVzIH0gZnJvbSAnZGF0ZS90b01pbnV0ZXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvU2Vjb25kcyB9IGZyb20gJ2RhdGUvdG9TZWNvbmRzJ1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ01hcCcpXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIG93biBrZXlzIG9mIGFuIE1hcCBhcyBhbiBBcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IFtiXVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XG4gIHJldHVybiBhLmtleXMoKVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgTWFwIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge01hcH0gYVxuICogQHJldHVybiB7TWFwfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vdXRpbC9lbXB0eSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBjb25zdCByID0gZW1wdHkoYSlcbiAgYS5mb3JFYWNoKCh2LCBrLCBtYXApID0+IHtcbiAgICByLnNldChrLCBjYih2LCBrLCBtYXApKVxuICB9KVxuICByZXR1cm4gclxufSlcbiIsImxldCBKdXN0ID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl92YWx1ZSA9IHZhbFxuICByZXR1cm4gdGhpc1xufVxuXG5KdXN0LnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5KdXN0LnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBKdXN0XG4iLCJpbXBvcnQgSnVzdCBmcm9tICcuL0p1c3QnXG5pbXBvcnQgTm90aGluZyBmcm9tICcuL05vdGhpbmcnXG5cbmxldCBNYXliZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgdGhpcy5fX3ZhbHVlID0gdmFsXG59XG5cbk1heWJlLm9mID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgTWF5YmUpIHJldHVybiB2YWxcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBNYXliZSkge1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbFxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcmV0dXJuIG5ldyBNYXliZSh2YWwpXG59XG5cbk1heWJlLnByb3RvdHlwZS5nZXRPckVsc2UgPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gdGhpcy5pc05vdGhpbmcoKSA/IG4gOiB0aGlzLl9fdmFsdWVcbn1cblxuTWF5YmUucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gIGlmICh0aGlzLmlzTm90aGluZygpKSB7XG4gICAgcmV0dXJuIE1heWJlLm9mKG51bGwpXG4gIH1cbiAgcmV0dXJuIE1heWJlLm9mKGYodGhpcy5fX3ZhbHVlKSlcbn1cblxuTWF5YmUucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKG0pIHtcbiAgcmV0dXJuIG0ubWFwKHRoaXMuX192YWx1ZSlcbn1cblxuTWF5YmUucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICh0aGlzLl9fdmFsdWUgPT0gbnVsbClcbn1cblxuTWF5YmUucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICF0aGlzLmlzTm90aGluZygpXG59XG5cbk1heWJlLnByb3RvdHlwZS5Ob3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IE5vdGhpbmcoKVxufVxuXG5NYXliZS5wcm90b3R5cGUuSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBKdXN0KHRoaXMuX3ZhbHVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXliZVxuIiwibGV0IE5vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG59XG5cbk5vdGhpbmcucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZhbHNlXG59XG5Ob3RoaW5nLnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGhpbmdcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSAyIGFyZ3VtZW50c1xuICpcbiAqIEBmdW5jdGlvbiBhZGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIDIgYXJndW1lbnRzXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxuICogQHBhcmFtIHtOdW1iZXJ9IGJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhZGQgKGEsIGIpIHtcbiAgcmV0dXJuICthICsgK2Jcbn0pXG4iLCIvKipcbiAqXG4gKlxuICogQGZ1bmN0aW9uIGRpdmlkZVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGRpdmlzaW9uIG9mIHRoZSAyIGFyZ3VtZW50c1xuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZGl2aWRlIChhLCBiKSB7XG4gIHJldHVybiArYSAvICtiXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ051bWJlcicpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBpc05hTlxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiBudW1iZXIgaXMgTkFOXG5cbiAqL1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXMnXG5pbXBvcnQgYW5kIGZyb20gJy4uL3V0aWwvYW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc05hbiAoeCkge1xuICByZXR1cm4gYW5kKGlzTnVtYmVyKHgpLCBpc05hTih4KSlcbn07XG4iLCIvKipcbiAqIFJldHVybnMgdGhlIHByb2R1Y3Qgb2YgdGhlIDIgYXJndW1lbnRzXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxuICogQHBhcmFtIHtOdW1iZXJ9IGJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtdWx0aXBseSAoYSwgYikge1xuICByZXR1cm4gK2EgKiArYlxufSlcbiIsIi8qKlxuXG4gKiBlcXVhbHNcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4uL3V0aWwvZXhpc3RzJ1xuaW1wb3J0IG5vdCBmcm9tICcuLi91dGlsL25vdCdcbmltcG9ydCBlcXVhbHMgZnJvbSAnLi4vdXRpbC9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KCh4LCB5KSA9PiB7XG4gIGZvciAobGV0IGtleVggaW4geCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3BcbiAgICBpZiAobm90KGVxdWFscyh4W2tleVhdLCB5W2tleVhdKSkpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZm9yIChsZXQga2V5WSBpbiB5KSB7XG4gICAgaWYgKG5vdChleGlzdHMoeFtrZXlZXSkpICYmIGV4aXN0cyh5W2tleVldKSkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG9iamVjdEZpbHRlclxuICogQHByaXZhdGVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBvYmplY3RGaWx0ZXIgKGZuLCBvKSB7XG4gIGxldCByID0ge31cbiAgY29uc3QgayA9IGtleXMobylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZuKG9ba1tpXV0pKSByW2tbaV1dID0gb1trW2ldXVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQHByaXZhdGVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgbykge1xuICBjb25zdCBrID0ga2V5cyhvKVxuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBrLmxlbmd0aFxuICBsZXQgciA9IE9iamVjdChpbml0KVxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHIgPSBjYihyLCBvW2tbaV1dLCBrW2ldLCBvKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcge1N0cmluZ30gLT4ge09iamVjdH0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaGFzIChwcm9wLCBvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHksIGV2ZW4gaWYgaXQgaXMgaW5oZXJpdGVkXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIHtTdHJpbmd9IC0+IHtPYmplY3R9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGhhc0luIChwcm9wLCBvYmopIHtcbiAgcmV0dXJuIHByb3AgaW4gb2JqXG59KVxuIiwiLyoqXG5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdPYmplY3QnKVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBvd24ga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBbYl1cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQHJldHVybiB7QXJyYXl9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24ga2V5cyAoYSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoT2JqZWN0KGEpKVxufSlcbiIsIi8qKlxuICogUmV0dXJucyBhbGwgdGhlIGtleXMgb2YgYW4gb2JqZWN0IGFzIGFuIEFycmF5XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gW2JdXG4gKiBAcGFyYW0ge09iamVjdH1cbiAqIEByZXR1cm4ge0FycmF5fVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGtleXMgKGEpIHtcbiAgY29uc3QgciA9IFtdXG4gIGZvciAoY29uc3QgayBpbiBhKSB7XG4gICAgci5wdXNoKGspXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBvYmplY3QgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBlbXB0eSBmcm9tICcuLi91dGlsL2VtcHR5J1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGNvbnN0IGsgPSBrZXlzKGEpXG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGsubGVuZ3RoXG4gIGNvbnN0IHIgPSBlbXB0eShhKVxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHJba1tpXV0gPSBjYihhW2tbaV1dLCBrW2ldLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG5cbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi4vdXRpbC9pZGVudGljYWwnXG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vb2JqZWN0L2lzJ1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vYXJyYXkvaXMnXG5pbXBvcnQgdW5pb24gZnJvbSAnLi4vYXJyYXkvdW5pb24nXG5cbmNvbnN0IG1lcmdlID0gY3VycnkoKG9iakwsIG9ialIpID0+IHtcbiAgbGV0IHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIG9iakwpXG5cbiAgaWYgKGlkZW50aWNhbChvYmpMLCBvYmpSKSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvYmpMKVxuICB9XG4gIGZvciAobGV0IGtleSBpbiBvYmpSKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqUiwga2V5KSkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgY29uc3Qgb2xkVmFsdWUgPSBvYmpSW2tleV1cbiAgICBjb25zdCBuZXdWYWx1ZSA9IG9iakxba2V5XVxuXG4gICAgaWYgKGlzT2JqZWN0KG9sZFZhbHVlKSAmJiBpc09iamVjdChuZXdWYWx1ZSkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2Uob2xkVmFsdWUsIG5ld1ZhbHVlKVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShuZXdWYWx1ZSkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdW5pb24obmV3VmFsdWUsIG9sZFZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IG9sZFZhbHVlIC8vIFRPRE86IHRoaXMgaXMgYSByZWZlcmVuY2UsIHNob3VsZCBiZSBjbG9uZVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59KVxuXG5leHBvcnQgZGVmYXVsdCBtZXJnZVxuIiwiLyoqXG5cbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKG9iaiwgbmFtZXMpID0+IHtcbiAgbGV0IHJlc3VsdCA9IHt9XG5cbiAgT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgIHJldHVybiBuYW1lcy5pbmRleE9mKGtleSkgPT09IC0xXG4gIH0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHBhdGhcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHBhdGggKHBhdGgsIG9iaikge1xuICBsZXQgdmFsID0gb2JqXG4gIGxldCBpZHggPSAwXG4gIGxldCBwXG4gIHdoaWxlIChpZHggPCBwYXRoLmxlbmd0aCkge1xuICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHAgPSBwYXRoW2lkeF1cbiAgICB2YWwgPSBOdW1iZXIuaXNJbnRlZ2VyKHApXG4gICAgICA/IHAgPCAwID8gdmFsW3ZhbC5sZW5ndGggKyBwXSA6IHZhbFtwXVxuICAgICAgOiB2YWxbcF1cbiAgICBpZHggKz0gMVxuICB9XG4gIHJldHVybiB2YWxcbn0pXG4vLyBsZXQgciA9IG9ialxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4vLyAgIGlmIChyID09IG51bGwpIHJldHVybiB1bmRlZmluZWRcbi8vICAgciA9IHJbcGF0aFtpXV1cbi8vIH1cbi8vIHJldHVybiByXG4vLyB9KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gcHJvcFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gcHJvcCAocCwgb2JqKSB7XG4gIHJldHVybiBvYmpbcF1cbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvblxuICovXG5cbmV4cG9ydCBjb25zdCBjb25jYXQgPSBmdW5jdGlvbiBfY29uY2F0IChzZXBhcmF0b3IgPSAnLCcpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkuam9pbihzZXBhcmF0b3IpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmNhdFxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxuICovXG5pbXBvcnQgdG9BcnJheSBmcm9tICcuLi9hcnJheS90bydcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0U3RyaW5nIChzdHIpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcbiAgbGV0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cylcblxuICBhcmdzLnNoaWZ0KClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC97KFxcZCspfS9nLCAobWF0Y2gsIGlkeCkgPT4ge1xuICAgIHJldHVybiBub3QoaXMoJ1VuZGVmaW5lZCcsIGFyZ3NbaWR4XSkpID8gYXJnc1tpZHhdIDogbWF0Y2hcbiAgfSlcbn1cbiIsIi8qKlxuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnU3RyaW5nJylcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgc3RyaW5nIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGxldCByID0gJydcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByICs9IGNiKGEuY2hhckF0KGkpLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBNb2RpZmllcyBhbiBpdGVtIGluIGFuIGFycmF5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvbiBhZGp1c3RcbiAqIEBkZXNjcmlwdGlvbiBNb2RpZmllcyBhbiBpdGVtIGluIGFuIGFycmF5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoYSAtPiBhKSAtPiBudW0gLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSB0byBtb2RpZnkgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICogQHBhcmFtIHtOdW1iZXJ9IGkgLSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gbW9kaWZ5IHRoZSBhcnJheSwgYWNjZXB0cyBwb3N0aXRpdmUgYW5kIG5lZ2F0aXZlIGluZGV4ZXNcbiAqIEBwYXJhbSB7SXRlcmFibGV9IFthXSAtIEFycmF5IHdpdGggZGF0YVxuICogQHJldHVybiB7SXRlcmFibGV9IFthXVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkanVzdCAoZm4sIGksIGEpIHtcbiAgY29uc3QgciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEpXG4gIGNvbnN0IGlkeCA9IGkgPCAwID8gci5sZW5ndGggKyBpIDogaVxuICBpZiAoIWFbaWR4XSkgcmV0dXJuIHJcbiAgcltpZHhdID0gZm4ocltpZHhdKVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogTW9kaWZpZXMgYW4gaXRlbSBpbiBhbiBhcnJheSB1c2luZyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb24gYWRqdXN0V2l0aFxuICogQGRlc2NyaXB0aW9uIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IGEpIC0+ICgoYSAtPiBbYV0pIC0+IFthXSAtPiBudW0pIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gdG8gbW9kaWZ5IHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgLSBUaGUgcHJlZGljYXRlIHRoYXQgcmV0dXJucyB0aGUgaW5kZXhlcyBpZiBmb3VuZFxuICogQHBhcmFtIHtJdGVyYWJsZX0gW2FdXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX0gW2FdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBtYXAgZnJvbSAnLi4vdXRpbC9tYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkanVzdFdpdGggKGZuLCBwcmVkLCBhKSB7XG4gIGNvbnN0IF9mbiA9IHggPT4ge1xuICAgIGlmIChwcmVkKHgpKSB7XG4gICAgICByZXR1cm4gZm4oeClcbiAgICB9XG4gICAgcmV0dXJuIHhcbiAgfVxuICByZXR1cm4gbWFwKF9mbiwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSkpXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb24gYWxsXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IFthXSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbGwgKGNiLCBhKSB7XG4gIGxldCByZXMgPSB0cnVlXG4gIGZvciAobGV0IGkgaW4gYSkge1xuICAgIGlmICghY2IoYVtpXSkpIHtcbiAgICAgIHJlcyA9IGZhbHNlXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59KVxuIiwiLyoqXG4gKiBBcHBsaWVzIGEgbGlzdCBvZiBwcmVkaWNhdGVzIHRvIHRoZSBkYXRhIGFuZCByZXR1cm5zIHRydWUgaWYgYWxsIHBhc3NcbiAqXG4gKiBAZnVuY3Rpb24gYWxsUGFzc1xuICogQGRlc2NyaXB0aW9uIEFwcGxpZXMgYSBsaXN0IG9mIHByZWRpY2F0ZXMgdG8gdGhlIGRhdGEgYW5kIHJldHVybnMgdHJ1ZSBpZiBhbGwgcGFzc1xuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBbKCouLi4gLT4gQm9vbGVhbildIC0+ICgqLi4uIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7QXJyYXl9IHByZWRpY2F0ZXMgQW4gYXJyYXkgb2YgcHJlZGljYXRlcyB0byBjaGVja1xuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjb21iaW5lZCBwcmVkaWNhdGVcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbGxQYXNzIChjYnMsIGEpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWNic1tpXShhKSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIHByb3ZpZGVkXG4gKlxuICogQGZ1bmN0aW9uIGFsd2F5c1xuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBmdW5jdGlvbiB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIHByb3ZpZGVkXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gKCogLT4gYSlcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWx3YXlzICh4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB4IH1cbn0pXG4iLCIvKipcbiAqIENoZWNrcyBpZiBib3RoIHByZWRpY2F0ZXMgYXJlIHRydWVcbiAqXG4gKiBAZnVuY3Rpb24gYW5kXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIGJvdGggcHJlZGljYXRlcyBhcmUgdHJ1ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoeCwgeSkgLT4gYm9vbGVhblxuICogQHBhcmFtIHsqfSB4IC0gQSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7Kn0geSAtIEEgcHJlZGljYXRlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFuZCAoeCwgeSkge1xuICByZXR1cm4geCAmJiB5XG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb24gb2YgdGhlIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb24gYW55XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uIG9mIHRoZSBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChUT0RPKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYW55IChjYiwgYSkge1xuICBsZXQgcmVzID0gZmFsc2VcbiAgZm9yIChsZXQgaSBpbiBhKSB7XG4gICAgaWYgKGNiKGFbaV0pKSB7XG4gICAgICByZXMgPSB0cnVlXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59KVxuIiwiLyoqXG4gKiBBcHBsaWVzIGEgbGlzdCBvZiBwcmVkaWNhdGVzIHRvIHRoZSBkYXRhIGFuZCByZXR1cm5zIHRydWUgaWYgb25lIHBhc3Nlc1xuICpcbiAqIEBmdW5jdGlvbiBhbnlQYXNzXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIFsoKi4uLiAtPiBCb29sZWFuKV0gLT4gKCouLi4pIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7QXJyYXl9IHByZWRpY2F0ZXMgQW4gYXJyYXkgb2YgcHJlZGljYXRlcyB0byBjaGVja1xuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjb21iaW5lZCBwcmVkaWNhdGVcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbnlQYXNzIChjYnMsIGEpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2JzW2ldKGEpKSByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufSlcbiIsIi8qKlxuICogQXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIHJldHVybnMgYSBjb21iaW5lZCByZXN1bHQgYXJyYXlcbiAqXG4gKiBAZnVuY3Rpb24gYXBcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWVzIGEgbGlzdCBvZiBmdW5jdGlvbnMgdG8gYSBsaXN0IG9mIHZhbHVlcyBhbmQgcmV0dXJucyBhIGNvbWJpbmVkIHJlc3VsdCBhcnJheVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBAc2lnIFthIC0+IGJdIC0+IFthXSAtPiBbYl1cbiAqIEBwYXJhbSB7KEZ1bmN0aW9uW118RnVuY3Rpb258QXBwbGljYXRpdmUpfSBmbnMgLSBBbiBhcnJheSBvZiBmdW5jdGlvbnMgb3IgYSBmdW5jdGlvbiBvciBhbiBhcHBsaWNhdGl2ZVxuICogQHBhcmFtIHtBcnJheX0gdmFscyAtIEFuIGFycmF5IG9mIHZhbHVlc1xuICogQHJldHVybiB7SXRlcmFibGV9IFthXVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgY3VycnkxIGZyb20gJy4uL19wcml2YXRlL2N1cnJ5MSdcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xuaW1wb3J0IGZvbGQgZnJvbSAnLi4vYXJyYXkvZm9sZCdcbmltcG9ydCBtYXAgZnJvbSAnLi4vYXJyYXkvbWFwJ1xuXG5jb25zdCBpc0Z1bmN0aW9uID0gaXMoJ0Z1bmN0aW9uJylcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYXAgKGZucywgdmFscykge1xuICBpZiAoaXNGdW5jdGlvbihmbnMuYXApKSB7XG4gICAgcmV0dXJuIGZucy5hcCh2YWxzKVxuICB9XG4gIGlmIChpc0Z1bmN0aW9uKGZucykpIHtcbiAgICByZXR1cm4geCA9PiBmbnMoeCkodmFscyh4KSlcbiAgfVxuICByZXR1cm4gZm9sZCgoYWNjLCBmKSA9PiBhY2MuY29uY2F0KG1hcChjdXJyeTEoZiksIHZhbHMpKSwgW10sIGZucylcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBjb21wb3NlXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKTogKn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSAoKSB7XG4gIGxldCBmdW5zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuXG4gIHJldHVybiBmdW5jdGlvbiBfY29tcG9zZSAoKSB7XG4gICAgbGV0IGluaXQgPSBmdW5zW2Z1bnMubGVuZ3RoIC0gMV1cbiAgICBsZXQgcmVzdWx0ID0gW2luaXQuYXBwbHkoaW5pdCwgYXJndW1lbnRzKV1cbiAgICBsZXQgaSA9IGZ1bnMubGVuZ3RoIC0gMlxuXG4gICAgZm9yIChpOyBpID49IDA7IC0taSkge1xuICAgICAgY29uc3QgZnVuID0gZnVuc1tpXVxuXG4gICAgICByZXN1bHQgPSBbZnVuLmFwcGx5KGZ1biwgcmVzdWx0KV1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFswXVxuICB9XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qKlxuICogQGZ1bmN0aW9uIGN1cnJ5XG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJ5IChmdW4pIHtcbiAgY29uc3QgYXJnc2xlbiA9IGZ1bi5sZW5ndGhcblxuICBpZiAoYXJnc2xlbiA9PT0gMCkge1xuICAgIHJldHVybiBmdW5cbiAgfVxuICByZXR1cm4gY3JlYXRlUmVjdXJzZXIoW10pXG5cbiAgZnVuY3Rpb24gcmVjdXJzZSAoYWNjLCBhcmdzKSB7XG4gICAgY29uc3QgX2FjYyA9IGFjYy5jb25jYXQoYXJncylcbiAgICByZXR1cm4gX2FjYy5sZW5ndGggPCBhcmdzbGVuXG4gICAgICA/IGNyZWF0ZVJlY3Vyc2VyKF9hY2MpXG4gICAgICA6IGZ1bi5hcHBseSh0aGlzLCBfYWNjKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUmVjdXJzZXIgKGFjYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjdXJzZShhY2MsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxuICpcbiAqIEBmdW5jdGlvbiBkZWZhdWx0VG9cbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBiIC0+IGEgfCBiXG4gKiBAcGFyYW0ge2F9IGRlZmF1bHQgVGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBAcGFyYW0ge2J9IHZhbCBgdmFsYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgb2YgYGRlZmF1bHRgIHVubGVzcyBgdmFsYCBpcyBgbnVsbGAsIGB1bmRlZmluZWRgIG9yIGBOYU5gLlxuICogQHJldHVybiB7Kn0gVGhlIHNlY29uZCB2YWx1ZSBpZiBpdCBpcyBub3QgYG51bGxgLCBgdW5kZWZpbmVkYCBvciBgTmFOYCwgb3RoZXJ3aXNlIHRoZSBkZWZhdWx0IHZhbHVlXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZGVmYXVsdFRvIChkLCB2KSB7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIHJldHVybiB2ID09IG51bGwgfHwgdiAhPT0gdiA/IGQgOiB2XG59KVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBlbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGVtcHR5IGVxdWl2YWxlbnQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW1wdHkgKHgpIHtcbiAgcmV0dXJuIG5ldyB4LmNvbnN0cnVjdG9yKClcbn07XG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGVxdWFsc1xuICogQGRlc2NyaXB0aW9uIGNoZWNrcyBmb3IgZXF1YWxpdHlcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xuaW1wb3J0IGlkZW50aWNhbCBmcm9tICcuL2lkZW50aWNhbCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcbmltcG9ydCBub3QgZnJvbSAnLi9ub3QnXG5pbXBvcnQgb3IgZnJvbSAnLi9vcidcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9vYmplY3QvaXMnXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi9hcnJheS9pcydcbmltcG9ydCBpc0Jvb2xlYW4gZnJvbSAnLi4vYm9vbGVhbi9pcydcbmltcG9ydCBpc051bWJlciBmcm9tICcuLi9udW1iZXIvaXMnXG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnLi4vc3RyaW5nL2lzJ1xuaW1wb3J0IGlzRGF0ZSBmcm9tICcuLi9kYXRlL2lzJ1xuaW1wb3J0IGVxdWFsc0FycmF5IGZyb20gJy4uL2FycmF5L2VxdWFscydcbmltcG9ydCBlcXVhbHNPYmplY3QgZnJvbSAnLi4vb2JqZWN0L2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzICh4LCB5KSB7XG4gIGlmIChpZGVudGljYWwoeCwgeSkpIHJldHVybiB0cnVlXG5cbiAgaWYgKHR5cGUoeCkgIT09IHR5cGUoeSkpIHJldHVybiBmYWxzZVxuXG4gIGlmIChvcihub3QoZXhpc3RzKHgpKSwgbm90KGV4aXN0cyh5KSkpKSByZXR1cm4gZmFsc2VcblxuICBpZiAoeC5jb25zdHJ1Y3RvciAhPT0geS5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKGlzU3RyaW5nKHgpIHx8IGlzQm9vbGVhbih4KSB8fCBpc051bWJlcih4KSB8fCBpc0RhdGUoeCkpIHtcbiAgICByZXR1cm4gaWRlbnRpY2FsKHgudmFsdWVPZigpLCB5LnZhbHVlT2YoKSlcbiAgfVxuICBpZiAoaXNBcnJheSh4KSkge1xuICAgIHJldHVybiBlcXVhbHNBcnJheSh4LCB5KVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHgpKSB7XG4gICAgcmV0dXJuIGVxdWFsc09iamVjdCh4LCB5KVxuICB9XG4gIHJldHVybiBmYWxzZVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGV4aXN0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGlzdHMgKHgpIHtcbiAgcmV0dXJuICEoeCA9PSBudWxsKVxufTtcbiIsIi8qKlxuICogRmluZCB0aGUgaW5kZXggbWF0Y2hpbmcgYSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb24gZmluZEluZGV4XG4gKiBAZGVzY3JpcHRpb24gRmluZCB0aGUgaW5kZXggbWF0Y2hpbmcgYSBwcmVkaWNhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGEgLT4gYm9vbGVhbikgLT4gW2FdIC0+IG51bWJlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gUHJlZGljYXRlIGZ1bmN0aW9uIHJldHVybnMgYSBib29sZWFuXG4gKiBAcGFyYW0ge0FycmF5fSBBbiBhcnJheSBsaWtlIG9iamVjdFxuICogQHJldHVybiB7bnVtYmVyfVxuICoqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZmluZEluZGV4IChmbiwgYSkge1xuICBsZXQgaSA9IDBcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIHdoaWxlIChpIDwgbCkge1xuICAgIGlmIChmbihhW2ldKSkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gICAgaSArPSAxXG4gIH1cbiAgcmV0dXJuIC0xXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnogaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgbGlrZSBvYmplY3QgYW5kIGNhbGxhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlw6lcbiAqXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieiBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbGEgZnVuY3Rpb24gb24gZWFjaCBpdGXDqVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoKGEsIGIsIGMsIGEpIOKGkiBhKSDihpIgYSDihpIgW2JdIOKGkiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiByZWNlaXZlcyA0IHZhbHVlczogdGhlIGFjY3VtdWxhdG9yLCB0aGUgaXRlbSwgdGhlIGluZGV4LCBhbmQgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0geyp9IGEgaXMgdGhlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gW2JdIHRoZSBhcnJheSBsaWtlIGl0ZW0gdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcmV0dXJuIHsqfSBhIGlzIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZVxuICoqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBhcnJheUZvbGQgZnJvbSAnLi4vYXJyYXkvZm9sZCdcbmltcG9ydCBvYmplY3RGb2xkIGZyb20gJy4uL29iamVjdC9mb2xkJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBjb25zdCB0eXBlTWFwID0ge1xuICAgICdPYmplY3QnOiBvYmplY3RGb2xkLFxuICAgICdBcnJheSc6IGFycmF5Rm9sZFxuICB9XG4gIC8vIGlmIChhLm5leHQpIHtcbiAgLy8gICByZXR1cm4gaXRlcmFibGVGb2xkKGNiLCBpbml0LCBhKVxuICAvLyB9XG4gIC8vIGlmICh0eXBlKFN5bWJvbCkgIT09ICd1bmRlZmluZWQnICYmIGFbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAvLyAgIHJldHVybiBpdGVyYWJsZUZvbGQoY2IsIGluaXQsIGFbU3ltYm9sLml0ZXJhdG9yXSgpKVxuICAvLyB9XG4gIHJldHVybiB0eXBlTWFwW3R5cGUoYSldKGNiLCBpbml0LCBhKVxufSlcblxuLy8gZnVuY3Rpb24gaXRlcmFibGVGb2xkIChjYiwgYWNjLCBnZW4pIHtcbi8vICAgbGV0IHN0ZXAgPSBnZW4ubmV4dCgpXG4vLyAgIHdoaWxlICghc3RlcC5kb25lKSB7XG4vLyAgICAgYWNjID0gY2IoYWNjLCBzdGVwLnZhbHVlKVxuLy8gICAgIHN0ZXAgPSBnZW4ubmV4dCgpXG4vLyAgIH1cbi8vICAgcmV0dXJuIGFjY1xuLy8gfVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBpZGVudGljYWxcbiAqIEBkZXNjcmlwdGlvbiBjaGVja3MgZm9yIGlkZW50aW50aWNhbCBpdGVtc1xuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBpc05hbiBmcm9tICcuLi9udW1iZXIvaXNOYW4nXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlkZW50aWNhbCAoeCwgeSkge1xuICBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSB7XG4gICAgcmV0dXJuIDEgLyB4ID09PSAxIC8geVxuICB9XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gISEoaXNOYW4oeCkgJiYgaXNOYW4oeSkpXG59KVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBpZGVudGl0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHZhbHVlIHN1cHBsaWVkIHRvIHRoZSBmdW5jdGlvblxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlkZW50aXR5ICh4KSB7XG4gIHJldHVybiB4XG59O1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gaXNcbiAqIEBkZXNjcmlwdGlvbiBWZXJpZmllcyB0aGUgdHlwZSBvZiB0aGUgcHJvdmlkZWQgYXJndW1lbnRcbiAqXG4gKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlzIChDdG9yLCB2YWwpIHtcbiAgcmV0dXJuIHR5cGUodmFsKSA9PT0gQ3RvclxufSlcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxuICovXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi9lbXB0eSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4vZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtcHR5ICh4KSB7XG4gIHJldHVybiBleGlzdHMoeCkgJiYgZXF1YWxzKHgsIGVtcHR5KHgpKVxufTtcbiIsIi8qKlxuICogXCJsaWZ0c1wiIGEgZnVuY3Rpb24gb2YgYXJpdHkgPiAxIHNvIHRoYXQgaXQgbWF5IFwibWFwIG92ZXJcIiBhIGxpc3QsIEZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIGxpZnRcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKCouLi4gLT4gKikgLT4gKFsqXS4uLiAtPiBbKl0pXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBjdXJyeTEgZnJvbSAnLi4vX3ByaXZhdGUvY3VycnkxJ1xuaW1wb3J0IGZvbGQgZnJvbSAnLi4vdXRpbC9mb2xkJ1xuaW1wb3J0IGFwIGZyb20gJy4uL3V0aWwvYXAnXG5pbXBvcnQgbWFwIGZyb20gJy4uL3V0aWwvbWFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBsaWZ0IChmbikge1xuICBjb25zdCBsaWZ0ZWQgPSBjdXJyeTEoY3VycnkoZm4pKVxuICByZXR1cm4gY3VycnkoZnVuY3Rpb24gX2xpZnQgKCkge1xuICAgIHJldHVybiBmb2xkKGFwLCBtYXAobGlmdGVkLCBhcmd1bWVudHNbMF0pLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxuICB9KVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIGl0ZXJhYmxlIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb24gbWFwXG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gd2hpY2ggbWFwcyBvdmVyIGFuIGl0ZXJhYmxlLlxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gYiAtPiBiXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBhcnJheU1hcCBmcm9tICcuLi9hcnJheS9tYXAnXG5pbXBvcnQgb2JqZWN0TWFwIGZyb20gJy4uL29iamVjdC9tYXAnXG5pbXBvcnQgbWFwTWFwIGZyb20gJy4uL21hcC9tYXAnXG5pbXBvcnQgc3RyaW5nTWFwIGZyb20gJy4uL3N0cmluZy9tYXAnXG5pbXBvcnQgdHlwZSBmcm9tICcuLi91dGlsL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgc3dpdGNoICh0eXBlKGEpKSB7XG4gIC8vIHN3aXRjaCAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpKSB7XG4gICAgY2FzZSAnRnVuY3Rpb24nOlxuICAgICAgcmV0dXJuIGN1cnJ5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNiLmNhbGwodGhpcywgYS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKVxuICAgICAgfSlcbiAgICBjYXNlICdPYmplY3QnOlxuICAgICAgcmV0dXJuIG9iamVjdE1hcChjYiwgYSlcbiAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgcmV0dXJuIHN0cmluZ01hcChjYiwgYSlcbiAgICBjYXNlICdNYXAnOlxuICAgICAgcmV0dXJuIG1hcE1hcChjYiwgYSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFycmF5TWFwKGNiLCBhKVxuICB9XG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXJnZXN0IG9mIHRoZSAyIGFyZ3VtZW50cyBwcm92aWRlZFxuICpcbiAqIEBmdW5jdGlvbiBtYXhcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHsqfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1heCAoYSwgYikge1xuICByZXR1cm4gYiA+IGEgPyBiIDogYVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG5vdFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbm90ICh4KSB7XG4gIHJldHVybiAheFxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG9yXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIG9uZSBvciB0aGUgb3RoZXIgaXMgdHJ1ZVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gb3IgKHgsIHkpIHtcbiAgcmV0dXJuIHggfHwgeVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHRydXRoeVxuICovXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cnV0aHkgKHgpIHtcbiAgcmV0dXJuICh4ICE9PSBmYWxzZSkgJiYgZXhpc3RzKHgpXG59O1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdHlwZVxuICovXG5pbXBvcnQgY3VycnkxIGZyb20gJy4uL19wcml2YXRlL2N1cnJ5MSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkxKGZ1bmN0aW9uIHR5cGUgKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KS5zbGljZSg4LCAtMSlcbn0pXG4iLCIvKipcblxuICogemlwXG4gKlxuICogQGZ1bmN0aW9uIHppcFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCB6aXBXaXRoIGZyb20gJy4vemlwV2l0aCdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gemlwIChhLCBiKSB7XG4gIHJldHVybiB6aXBXaXRoKGZ1bmN0aW9uIF96aXBXaXRoICh4LCB5KSB7IHJldHVybiBbeCwgeV0gfSwgYSwgYilcbn0pXG4iLCIvKipcblxuICogemlwV2l0aFxuICpcbiAqICBAZnVuY3Rpb24gemlwV2l0aFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gemlwV2l0aCAoY2IsIGEsIGIpIHtcbiAgY29uc3QgYXJyID0gW11cbiAgY29uc3QgbGVuID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKVxuICBsZXQgaSA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyLnB1c2goY2IoYVtpXSwgYltpXSkpXG4gIH1cbiAgcmV0dXJuIGFyclxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=