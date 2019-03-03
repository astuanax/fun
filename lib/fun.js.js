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
 * @function
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
 * @sig (currentValue, idx, [a]) -> [a] -> [a]
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
 * @function
 * @since v1.0.2
 * @sig a -> (* -> false)
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
 * Always returns a function with a True boolean
 *
 * @function
 * @since v1.0.2
 * @sig a -> (* -> true)
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
 * Created by dierickx.len on 01/04/2017.
 */
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
 *
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
 *
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
 * @function
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
 * Returns the division of the 2 arguments
 *
 * @function
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
 * isNaN
 * Checks if number is NAN

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

 * fold
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
 *
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
 * @function
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
 * @function
 * @since v1.0.2
 * @sig [(*... -> Boolean)] -> (*...) -> Boolean
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 **/
var _default = (0, _curry.default)(function allPass(cbs, a) {
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
 * @function
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
 * Created by dierickx.len on 25/03/2017.
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
 * Created by dierickx.len on 25/03/2017.
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
 * @function
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

 * empty
 * Returns the empty equivalent of the first argument
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

 * equals
 * checks for equality
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
 * @function
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
 * @function
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

 * identical
 * checks for identintical items
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

 * Returns the value supplied to the function
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
 * Created by len dierickx
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

 * empty
 * Returns the empty equivalent of the first argument
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
 * Maps over an array and applies a function
 *
 * @function
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> b -> b
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Iterable}
 **/
var _default = (0, _curry.default)(function map(cb, a) {
  var r = {
    'Object': _map2.default,
    'String': _map4.default,
    'Array': _map.default,
    'Map': _map3.default,
    'Function': (0, _curry.default)(function _fnMap() {
      return cb.call(this, a.apply(this, arguments));
    })
  };
  return r[(0, _type.default)(a)](cb, a);
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
 * @function
 * @since v1.0.2
 * @sig Ord a => a -> a -> a
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
 * Created by dierickx.len on 26/03/2017.
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

 * or
 * Returns true if one or the other is true
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
 * Created by dierickx.len on 06/02/2017.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4uanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1bi5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvX3ByaXZhdGUvY3VycnkxLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L3RvLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS91bmlvbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9GLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9ib29sZWFuL1QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2Jvb2xlYW4vaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2NvbnN0YW50cy9NT05USFMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2NvbnN0YW50cy9XRUVLREFZUy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9kaWZmRGF0ZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9mb3JtYXREYXRlVGltZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pc0Z1dHVyZURhdGUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvaXNWYWxpZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b0RheS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b0hvdXIuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9NaW51dGVzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvU2Vjb25kcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9KdXN0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tb25hZHMvTWF5YmUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9Ob3RoaW5nLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvYWRkLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvZGl2aWRlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL251bWJlci9pc05hbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL211bHRpcGx5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZXF1YWxzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZm9sZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2hhcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2hhc0luLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3Qva2V5c0luLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9vbWl0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvY29uY2F0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvZm9ybWF0U3RyaW5nLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWRqdXN0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FkanVzdFdpdGguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWxsLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FsbFBhc3MuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWx3YXlzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FuZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbnkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYW55UGFzcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9jb21wb3NlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2N1cnJ5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2RlZmF1bHRUby5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9lbXB0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZXhpc3RzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2ZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9mb2xkLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lkZW50aWNhbC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pc0VtcHR5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2xpZnQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL21heC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9ub3QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvb3IuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvdHJ1dGh5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3R5cGUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvemlwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3ppcFdpdGguanMiXSwibmFtZXMiOlsiY3VycnkxIiwiZm4iLCJjdXJyaWVkIiwiYSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImVxdWFsc0FycmF5IiwieCIsInkiLCJpIiwiZm9sZCIsImNiIiwiaW5pdCIsImwiLCJyIiwibWFwIiwiQXJyYXkiLCJ0b0FycmF5IiwiYXBwbHkiLCJ1bmlvbkFycmF5IiwiYUwiLCJhUiIsImZyb20iLCJTZXQiLCJjb25jYXQiLCJNT05USFMiLCJXRUVLREFZUyIsInN0YXJ0IiwiZW5kIiwiRGF0ZSIsImdldFRpbWUiLCJnZXRXZWVrIiwiZCIsIlVUQyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwic2V0VVRDRGF0ZSIsImdldFVUQ0RhdGUiLCJnZXRVVENEYXkiLCJ5ZWFyU3RhcnQiLCJnZXRVVENGdWxsWWVhciIsIndlZWtObyIsIk1hdGgiLCJjZWlsIiwiWkVST1MiLCJsYXN0TiIsIm4iLCJzdHIiLCJzdWJzdHJpbmciLCJmaXJzdE4iLCJmaWxsIiwiZGlnaXRzIiwiREFURV9UT0tFTlMiLCJtb2RDZWlsaW5nIiwibW9kIiwidmFsIiwidG9rZW5zIiwiWVlZWSIsIllZIiwiTU1NTSIsIk1NTSIsIk1NIiwiTSIsInciLCJ3dyIsIkREIiwiRCIsImRkZGQiLCJnZXREYXkiLCJkZGQiLCJkZCIsIkhIIiwiZ2V0SG91cnMiLCJIIiwiaGgiLCJoIiwibW0iLCJnZXRNaW51dGVzIiwibSIsInNzIiwiZ2V0U2Vjb25kcyIsInMiLCJBIiwiU1NTIiwiZ2V0TWlsbGlzZWNvbmRzIiwiU1MiLCJTIiwiUSIsInN3YXBUb2tlbldpdGhWYWx1ZSIsImRhdGUiLCJ0b2tlbiIsImZvcm1hdCIsIm1hdGNoIiwiam9pbiIsImlzVmFsaWQiLCJpc0Zpbml0ZSIsInZhbHVlT2YiLCJmb3JFYWNoIiwidiIsImsiLCJzZXQiLCJKdXN0IiwiX3ZhbHVlIiwicHJvdG90eXBlIiwiaXNKdXN0IiwiaXNOb3RoaW5nIiwiTWF5YmUiLCJfX3ZhbHVlIiwib2YiLCJnZXRPckVsc2UiLCJmIiwiYXAiLCJOb3RoaW5nIiwiYWRkIiwiYiIsImRpdmlkZSIsImlzTmFuIiwiaXNOYU4iLCJtdWx0aXBseSIsImtleVgiLCJrZXlZIiwibyIsIk9iamVjdCIsImhhcyIsInByb3AiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJoYXNJbiIsImtleXMiLCJwdXNoIiwibWVyZ2UiLCJvYmpMIiwib2JqUiIsInJlc3VsdCIsImFzc2lnbiIsImtleSIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJuYW1lcyIsImZpbHRlciIsImluZGV4T2YiLCJfY29uY2F0Iiwic2VwYXJhdG9yIiwic2xpY2UiLCJmb3JtYXRTdHJpbmciLCJhcmdzIiwic2hpZnQiLCJyZXBsYWNlIiwiaWR4IiwiY2hhckF0IiwiYWRqdXN0IiwiYWRqdXN0V2l0aCIsInByZWQiLCJfZm4iLCJhbGwiLCJyZXMiLCJhbGxQYXNzIiwiY2JzIiwiYWx3YXlzIiwiYW5kIiwiYW55IiwiaXNGdW5jdGlvbiIsImZucyIsInZhbHMiLCJhY2MiLCJjb21wb3NlIiwiZnVucyIsIl9jb21wb3NlIiwiZnVuIiwiY3VycnkiLCJhcmdzbGVuIiwiY3JlYXRlUmVjdXJzZXIiLCJyZWN1cnNlIiwiX2FjYyIsImRlZmF1bHRUbyIsImVtcHR5IiwiY29uc3RydWN0b3IiLCJlcXVhbHMiLCJleGlzdHMiLCJmaW5kSW5kZXgiLCJ0eXBlTWFwIiwiaWRlbnRpY2FsIiwiaWRlbnRpdHkiLCJpcyIsIkN0b3IiLCJpc0VtcHR5IiwibGlmdCIsImxpZnRlZCIsIl9saWZ0IiwiX2ZuTWFwIiwibWF4Iiwibm90Iiwib3IiLCJ0cnV0aHkiLCJ0eXBlIiwidG9TdHJpbmciLCJ6aXAiLCJfemlwV2l0aCIsInppcFdpdGgiLCJhcnIiLCJsZW4iLCJtaW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7QUFNZSxTQUFTQSxNQUFULENBQWlCQyxFQUFqQixF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QSxPQUFLQSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdpTSxHQUFoQixFQUFxQmpNLENBQUMsRUFBdEIsRUFBMEI7QUFDeEJnTSxPQUFHLENBQUN0RSxJQUFKLENBQVN4SCxFQUFFLENBQUNSLENBQUMsQ0FBQ00sQ0FBRCxDQUFGLEVBQU8wRyxDQUFDLENBQUMxRyxDQUFELENBQVIsQ0FBWDtBQUNEOztBQUNELFNBQU9nTSxHQUFQO0FBQ0QsQ0FSYyxDIiwiZmlsZSI6ImZ1bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuLmpzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bi5qc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW4uanNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIFJldHVybnMgYSBjdXJyaWVkIGZ1bmN0aW9uIHdpdGggYXJpdHkgMVxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJ5MSAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQgKGEpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMFxuICAgICAgPyB0aGlzXG4gICAgICA6IGZuKGEpXG4gIH1cbn1cbiIsIi8qKlxuICogQGZ1bmN0aW9uIGVxdWFsc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gZm9yIGRlZXAgY29tcGFyaXNvbiBvZiBhcnJheXNcblxuICogQHBhcmFtIHthfSB4IC0gT2JqZWN0IHRvIGNvbXBhcmUgb2YgdHlwZSBhXG4gKiBAcGFyYW0ge2F9IHkgLSBPYmplY3QgeCB0byBjb21wYXJlIHdpdGggb2JqZWN0IHhcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IG5vdCBmcm9tICcuLi91dGlsL25vdCdcbmltcG9ydCBlcXVhbHMgZnJvbSAnLi4vdXRpbC9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFsc0FycmF5ICh4LCB5KSB7XG4gIGlmICh4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm90KGVxdWFscyh4W2ldLCB5W2ldKSkpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBtYXBwaW5nIG92ZXIgdGhlIHByb3ZpZGVkIGFycmF5IGFuZCBjYWxsaW5nIGFuIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2NiRnVuY3Rpb259IGNiIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gbW9kaWZ5IHRoZSBpdGVtXG4gKiBAcGFyYW0geyp9IGluaXQgLSBJbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBhIC0gQXJyYXkgd2l0aCBpdGVtcyB0byBtb2RpZnkgYnkgdGhlIGNiIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhbGlhcyByZWR1Y2VcbiAqIEBzaW5jZSAxLjAuMlxuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvbGQoYWRkLCAwLCBbMSwxLDFdKVxuICogLy8gcmVzdWx0ID0gM1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIGNiRnVuY3Rpb25cbiAqIEBwYXJhbSB7Kn0gciAtIEFjY3VtdWxhdG9yIHdoaWNoIGFjY3VtdWxhdGVzIHRoZSBjYWxsYmFjaydzIHJldHVybiB2YWx1ZXNcbiAqIEBwYXJhbSB7Kn0gaXRlbSAtIHRoZSBjdXJyZW50IGVsZW1lbnQgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSB0aGUgaW5kZXkgb2YgdGhlIGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge0FycmF5fSBhIC0gVGhlIGluaXRpYWwgYXJyYXlcbiAqIEByZXR1cm4geyp9XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9IGluaXRcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2IociwgYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGlzQXJyYXlcbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIG9iamVjdCBpcyBhbiBhcnJheSwgYXV0b2N1cnJpZWQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7Kn0gT2JqZWN0IHRvIHZlcmlmaXlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAc2luY2UgMS4wLjJcblxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBpc0FycmF5KFsxLDEsMV0pXG4gKiAvLyByZXN1bHQgPSB0cnVlXG4gKi9cblxuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdBcnJheScpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBtYXBcbiAqIEBkZXNjcmlwdGlvbiBNYXBzIG92ZXIgYW4gYXJyYXkgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gW2FdIC0+IFthXVxuICogQGV4YW1wbGVcbiAqXG4gKiAgY29uc3QgcmVzdWx0ID0gbWFwKGlkZW50aXR5LCBbMCwyLDNdKVxuICogIC8vIHJlc3VsdCA9IFswLDIsM11cbiAqICBjb25zdCBhZGQyID0gYWRkKDIpXG4gKiAgY29uc3QgcmVzdWx0ID0gbWFwKGFkZDIsIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzIsNCw1XVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgY29uc3QgciA9IG5ldyBBcnJheShsKVxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHJbaV0gPSBjYihhW2ldLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdG9BcnJheVxuICogQGRlc2NyaXB0aW9uIENvbnZlcnRzIHRoZSBpbnB1dCB0byBhbiBhcnJheVxuICogQHBhcmFtIHtBcnJheUxpa2V9IHggLSBPYmplY3QgdG8gY29udmVydCB0byBhbiBhcnJheVxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gdG9BcnJheShcInN0cmluZ1wiKVxuICogLy8gcmVzdWx0ID0gWydzJywndCcsJ3InLCdpJywnbicsJ2cnXVxuICpcbiAqIGZ1bmN0aW9uICgpIHtcbiAqICBjb25zdCBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpXG4gKiAgY29uc29sZS5sb2codHlwZW9mIGFyZ3MpIC8vIEFycmF5XG4gKiB9XG4gKlxuICoqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9BcnJheSAoeCkge1xuICByZXR1cm4geC5sZW5ndGggPT09IDEgPyBbeFswXV0gOiBBcnJheS5hcHBseShudWxsLCB4KVxufTtcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHVuaW9uQXJyYXlcbiAqIEBkZXNjcmlwdGlvbiBNZXJnZXMgMiBhcnJheXNcbiAqIEBwYXJhbSB7QXJyYXl9IGFMIC0gQXJyYXkgdG8gbWVyZ2VcbiAqIEBwYXJhbSB7QXJyYXl9IGFSIC0gQXJyYXkgdG8gbWVyZ2VcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IHVuaW9uQXJyYXkoWzAsMSwyXSwgWzMsNCw1XSlcbiAqIC8vIHJlc3VsdCA9IFswLjEuMi4zLjQuNV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiB1bmlvbkFycmF5IChhTCwgYVIpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhTC5jb25jYXQoYVIpKSlcbn0pXG4iLCIvKipcbiAqIEFsd2F5cyByZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCBhIEZhbHNlIGJvb2xlYW5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiAoKiAtPiBmYWxzZSlcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiovXG5pbXBvcnQgYWx3YXlzIGZyb20gJy4uL3V0aWwvYWx3YXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBhbHdheXMoZmFsc2UpXG4iLCIvKipcbiAqIEFsd2F5cyByZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCBhIFRydWUgYm9vbGVhblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+ICgqIC0+IHRydWUpXG4gKiBAcGFyYW0geyp9IGFcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICoqL1xuaW1wb3J0IGFsd2F5cyBmcm9tICcuLi91dGlsL2Fsd2F5cydcblxuZXhwb3J0IGRlZmF1bHQgYWx3YXlzKHRydWUpXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnQm9vbGVhbicpXG4iLCIvKipcbiAqXG4gKi9cblxuZXhwb3J0IGNvbnN0IE1PTlRIUyA9IFtcbiAgJ0phbnVhcnknLFxuICAnRmVicnVhcnknLFxuICAnTWFyY2gnLFxuICAnQXByaWwnLFxuICAnTWF5JyxcbiAgJ0p1bmUnLFxuICAnSnVseScsXG4gICdBdWd1c3QnLFxuICAnU2VwdGVtYmVyJyxcbiAgJ09jdG9iZXInLFxuICAnTm92ZW1iZXInLFxuICAnRGVjZW1iZXInXG5dXG4iLCIvKipcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBXRUVLREFZUyA9IFtcbiAgJ1N1bmRheScsXG4gICdNb25kYXknLFxuICAnVHVlc2RheScsXG4gICdXZWRuZXNkYXknLFxuICAnVGh1cnNkYXknLFxuICAnRnJpZGF5JyxcbiAgJ1NhdHVyZGF5J1xuXVxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChzdGFydCwgZW5kKSA9PiB7XHJcbiAgcmV0dXJuIChuZXcgRGF0ZShzdGFydCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoZW5kKS5nZXRUaW1lKCkpXHJcbn0pXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjAvMDEvMjAxNy5cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgaXNWYWxpZERhdGUgZnJvbSAnLi9pc1ZhbGlkJ1xuaW1wb3J0IHsgV0VFS0RBWVMgfSBmcm9tICcuLi9jb25zdGFudHMvV0VFS0RBWVMnXG5pbXBvcnQgeyBNT05USFMgfSBmcm9tICcuLi9jb25zdGFudHMvTU9OVEhTJ1xuXG5jb25zdCBnZXRXZWVrID0gKGQpID0+IHtcbiAgLy8gQ29weSBkYXRlIHNvIGRvbid0IG1vZGlmeSBvcmlnaW5hbFxuICBkID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIGQuZ2V0RGF0ZSgpKSlcbiAgLy8gU2V0IHRvIG5lYXJlc3QgVGh1cnNkYXk6IGN1cnJlbnQgZGF0ZSArIDQgLSBjdXJyZW50IGRheSBudW1iZXJcbiAgLy8gTWFrZSBTdW5kYXkncyBkYXkgbnVtYmVyIDdcbiAgZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpICsgNCAtIChkLmdldFVUQ0RheSgpIHx8IDcpKVxuICAvLyBHZXQgZmlyc3QgZGF5IG9mIHllYXJcbiAgbGV0IHllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpXG5cbiAgLy8gQ2FsY3VsYXRlIGZ1bGwgd2Vla3MgdG8gbmVhcmVzdCBUaHVyc2RheVxuICBsZXQgd2Vla05vID0gTWF0aC5jZWlsKCgoKGQgLSB5ZWFyU3RhcnQpIC8gODY0MDAwMDApICsgMSkgLyA3KVxuXG4gIC8vIFJldHVybiBhcnJheSBvZiB5ZWFyIGFuZCB3ZWVrIG51bWJlclxuICByZXR1cm4gW2QuZ2V0VVRDRnVsbFllYXIoKSwgd2Vla05vXVxufVxuXG4vLyB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgdGhlIGRhdGUgZm9ybWF0dGluZ1xuY29uc3QgWkVST1MgPSAnMDAwMDAwMDAnXG5jb25zdCBsYXN0TiA9IGN1cnJ5KChuLCBzdHIpID0+IHN0ci5zdWJzdHJpbmcoc3RyLmxlbmd0aCAtIG4sIHN0ci5sZW5ndGgpKVxuY29uc3QgZmlyc3ROID0gY3VycnkoKG4sIHN0cikgPT4gc3RyLnN1YnN0cmluZygwLCBuKSlcbmNvbnN0IGZpbGwgPSBjdXJyeSgoZGlnaXRzLCBuKSA9PiBsYXN0TihkaWdpdHMsIFpFUk9TICsgbikpXG5cbi8vIGRhdGUvdGltZSByZWdleFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5jb25zdCBEQVRFX1RPS0VOUyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRfFlZWVlZWXxZWVlZWXxZWVlZfFlZfGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fG1tP3xzcz98U3sxLDl9fHh8WHx6ej98Wlo/fC4pL2dcblxuY29uc3QgbW9kQ2VpbGluZyA9IChtb2QsIHZhbCkgPT4gdmFsICUgbW9kIHx8IG1vZFxuXG4vLyB0b2tlbnMgbWFwIHRvIGdldCBwYXJ0cyBvZiB0aGUgZGF0ZSAvdGltZVxuY29uc3QgdG9rZW5zID0ge1xuICBZWVlZOiBkID0+IGZpbGwoNCwgZC5nZXRGdWxsWWVhcigpKSxcbiAgWVk6IGQgPT4gbGFzdE4oMiwgZmlsbCg0LCBkLmdldEZ1bGxZZWFyKCkpKSxcbiAgTU1NTTogZCA9PiBNT05USFNbZC5nZXRNb250aCgpXSxcbiAgTU1NOiBkID0+IGZpcnN0TigzLCBNT05USFNbZC5nZXRNb250aCgpXSksXG4gIE1NOiBkID0+IGZpbGwoMiwgZC5nZXRNb250aCgpICsgMSksXG4gIE06IGQgPT4gZC5nZXRNb250aCgpICsgMSxcbiAgdzogZCA9PiBnZXRXZWVrKGQpLFxuICB3dzogZCA9PiBmaWxsKDIsIGdldFdlZWsoZCkpLFxuICBERDogZCA9PiBmaWxsKDIsIGQuZ2V0RGF0ZSgpKSxcbiAgRDogZCA9PiBkLmdldERhdGUoKSxcbiAgZGRkZDogZCA9PiBXRUVLREFZU1tkLmdldERheSgpXSxcbiAgZGRkOiBkID0+IGZpcnN0TigzLCBXRUVLREFZU1tkLmdldERheSgpXSksXG4gIGRkOiBkID0+IGZpcnN0TigyLCBXRUVLREFZU1tkLmdldERheSgpXSksXG4gIGQ6IGQgPT4gZC5nZXREYXkoKSxcbiAgSEg6IGQgPT4gZmlsbCgyLCBkLmdldEhvdXJzKCkpLFxuICBIOiBkID0+IGQuZ2V0SG91cnMoKSxcbiAgaGg6IGQgPT4gZmlsbCgyLCBtb2RDZWlsaW5nKDEyLCBkLmdldEhvdXJzKCkpKSxcbiAgaDogZCA9PiBtb2RDZWlsaW5nKDEyLCBkLmdldEhvdXJzKCkpLFxuICBtbTogZCA9PiBmaWxsKDIsIGQuZ2V0TWludXRlcygpKSxcbiAgbTogZCA9PiBkLmdldE1pbnV0ZXMoKSxcbiAgc3M6IGQgPT4gZmlsbCgyLCBkLmdldFNlY29uZHMoKSksXG4gIHM6IGQgPT4gZC5nZXRTZWNvbmRzKCksXG4gIEE6IGQgPT4gZC5nZXRIb3VycygpID4gMTEgPyAnUE0nIDogJ0FNJyxcbiAgYTogZCA9PiBkLmdldEhvdXJzKCkgPiAxMSA/ICdwbScgOiAnYW0nLFxuICBTU1M6IGQgPT4gZmlsbCgzLCBkLmdldE1pbGxpc2Vjb25kcygpKSxcbiAgU1M6IGQgPT4gZmlyc3ROKDIsIGZpbGwoMywgZC5nZXRNaWxsaXNlY29uZHMoKSkpLFxuICBTOiBkID0+IGZpcnN0TigxLCBmaWxsKDMsIGQuZ2V0TWlsbGlzZWNvbmRzKCkpKSxcbiAgUTogZCA9PiBNYXRoLmNlaWwoKGQuZ2V0TW9udGgoKSArIDEpIC8gMylcbn1cblxuLy8gbWFwIHRoaXMgZnVuY3Rpb24gdG8gZ2V0IHRoZSBhY3R1YWwgdGltZS9kYXRlIHZhbHVlIGZvciBlYWNoIHRva2VuXG5jb25zdCBzd2FwVG9rZW5XaXRoVmFsdWUgPSBjdXJyeSgoZGF0ZSwgdG9rZW4pID0+IHtcbiAgcmV0dXJuIHRva2Vuc1t0b2tlbl0gPyB0b2tlbnNbdG9rZW5dKGRhdGUpIDogdG9rZW5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChmb3JtYXQsIGRhdGUpID0+IHtcbiAgLy8gY2hlY2sgZm9yIHZhbGlkIGRhdGVcbiAgaWYgKCFpc1ZhbGlkRGF0ZShkYXRlKSkgcmV0dXJuICdJbnZhbGlkIERhdGUnIC8vIHJldHVybiBzdHJpbmdcbiAgcmV0dXJuIGZvcm1hdC5tYXRjaChEQVRFX1RPS0VOUykubWFwKHN3YXBUb2tlbldpdGhWYWx1ZShkYXRlKSkuam9pbignJykgLy8gcmV0dXJuIGpvaW5lZCBzdHJpbmdcbn0pXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpcygnRGF0ZScpXHJcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDkvMDMvMjAxNy5cbiAqL1xuaW1wb3J0IGRpZmZEYXRlIGZyb20gJy4vZGlmZkRhdGUnXG5cbmV4cG9ydCBkZWZhdWx0IChkKSA9PiB7XG4gIHJldHVybiBkaWZmRGF0ZShuZXcgRGF0ZSgpKShkKSA8IDBcbn1cbiIsIi8qKlxuICpcbiAqL1xuaW1wb3J0IGlzRGF0ZSBmcm9tICcuL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkICh4KSB7XG4gIC8vIG5vaW5zcGVjdGlvbiBKU0NoZWNrRnVuY3Rpb25TaWduYXR1cmVzXG4gIHJldHVybiBpc0RhdGUoeCkgJiYgaXNGaW5pdGUoeC52YWx1ZU9mKCkpXG59O1xuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDg2NDAwMDAwIC8vIDI0KjYwKjYwKjEwMDAgPSA4NjQwMDAwMFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gMzYwMDAwMCAvLyA2MCo2MCoxMDAwID0gMzYwMDAwMFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gNjAwMDAgLy8gNjAqMTAwMCA9IDYwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyAxMDAwXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vLyBhcnJheVxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlcXVhbHNBcnJheSB9IGZyb20gJ2FycmF5L2VxdWFscydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNBcnJheSB9IGZyb20gJ2FycmF5L2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0FycmF5IH0gZnJvbSAnYXJyYXkvdG8nXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuaW9uQXJyYXkgfSBmcm9tICdhcnJheS91bmlvbidcblxuLy8gYm9vbGVhblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0Jvb2xlYW4gfSBmcm9tICdib29sZWFuL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGIH0gZnJvbSAnYm9vbGVhbi9GJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUIH0gZnJvbSAnYm9vbGVhbi9UJ1xuXG4vLyBtb25hZHNcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSnVzdCB9IGZyb20gJ21vbmFkcy9KdXN0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXliZSB9IGZyb20gJ21vbmFkcy9NYXliZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm90aGluZyB9IGZyb20gJ21vbmFkcy9Ob3RoaW5nJ1xuXG4vLyBudW1iZXJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOdW1iZXIgfSBmcm9tICdudW1iZXIvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTmFuIH0gZnJvbSAnbnVtYmVyL2lzTmFuJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGQgfSBmcm9tICdudW1iZXIvYWRkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtdWx0aXBseSB9IGZyb20gJ251bWJlci9tdWx0aXBseSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGl2aWRlIH0gZnJvbSAnbnVtYmVyL2RpdmlkZSdcblxuLy8gb2JqZWN0XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFsc09iamVjdCB9IGZyb20gJ29iamVjdC9lcXVhbHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzT2JqZWN0IH0gZnJvbSAnb2JqZWN0L2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZU9iamVjdCB9IGZyb20gJ29iamVjdC9tZXJnZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb21pdEZyb21PYmplY3QgfSBmcm9tICdvYmplY3Qvb21pdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzIH0gZnJvbSAnb2JqZWN0L2hhcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzSW4gfSBmcm9tICdvYmplY3QvaGFzSW4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleXMgfSBmcm9tICdvYmplY3Qva2V5cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5c0luIH0gZnJvbSAnb2JqZWN0L2tleXNJbidcblxuLy8gc3RyaW5nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmNhdFN0cmluZyB9IGZyb20gJ3N0cmluZy9jb25jYXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvcm1hdFN0cmluZyB9IGZyb20gJ3N0cmluZy9mb3JtYXRTdHJpbmcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzU3RyaW5nIH0gZnJvbSAnc3RyaW5nL2lzJ1xuXG4vLyB1dGlsXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkanVzdCB9IGZyb20gJ3V0aWwvYWRqdXN0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGp1c3RXaXRoIH0gZnJvbSAndXRpbC9hZGp1c3RXaXRoJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbGwgfSBmcm9tICd1dGlsL2FsbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxsUGFzcyB9IGZyb20gJ3V0aWwvYWxsUGFzcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWx3YXlzIH0gZnJvbSAndXRpbC9hbHdheXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFuZCB9IGZyb20gJ3V0aWwvYW5kJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbnkgfSBmcm9tICd1dGlsL2FueSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW55UGFzcyB9IGZyb20gJ3V0aWwvYW55UGFzcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXAgfSBmcm9tICd1dGlsL2FwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wb3NlIH0gZnJvbSAndXRpbC9jb21wb3NlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjdXJyeSB9IGZyb20gJ3V0aWwvY3VycnknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZmF1bHRUbyB9IGZyb20gJ3V0aWwvZGVmYXVsdFRvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbXB0eSB9IGZyb20gJ3V0aWwvZW1wdHknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFscyB9IGZyb20gJ3V0aWwvZXF1YWxzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBleGlzdHMgfSBmcm9tICd1dGlsL2V4aXN0cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmluZEluZGV4IH0gZnJvbSAndXRpbC9maW5kSW5kZXgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvbGQgfSBmcm9tICd1dGlsL2ZvbGQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlkZW50aWNhbCB9IGZyb20gJ3V0aWwvaWRlbnRpY2FsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpZGVudGl0eSB9IGZyb20gJ3V0aWwvaWRlbnRpdHknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzIH0gZnJvbSAndXRpbC9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNFbXB0eSB9IGZyb20gJ3V0aWwvaXNFbXB0eSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGlmdCB9IGZyb20gJ3V0aWwvbGlmdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwIH0gZnJvbSAndXRpbC9tYXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1heCB9IGZyb20gJ3V0aWwvbWF4J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBub3QgfSBmcm9tICd1dGlsL25vdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb3IgfSBmcm9tICd1dGlsL29yJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0cnV0aHkgfSBmcm9tICd1dGlsL3RydXRoeSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHlwZSB9IGZyb20gJ3V0aWwvdHlwZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgemlwIH0gZnJvbSAndXRpbC96aXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHppcFdpdGggfSBmcm9tICd1dGlsL3ppcFdpdGgnXG5cbi8vIGRhdGVcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGlmZkRhdGUgfSBmcm9tICdkYXRlL2RpZmZEYXRlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb3JtYXREYXRlVGltZSB9IGZyb20gJ2RhdGUvZm9ybWF0RGF0ZVRpbWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRhdGVJcyB9IGZyb20gJ2RhdGUvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRnV0dXJlRGF0ZSB9IGZyb20gJ2RhdGUvaXNGdXR1cmVEYXRlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1ZhbGlkIH0gZnJvbSAnZGF0ZS9pc1ZhbGlkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0RheSB9IGZyb20gJ2RhdGUvdG9EYXknXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvSG91ciB9IGZyb20gJ2RhdGUvdG9Ib3VyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b01pbnV0ZXMgfSBmcm9tICdkYXRlL3RvTWludXRlcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9TZWNvbmRzIH0gZnJvbSAnZGF0ZS90b1NlY29uZHMnXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhIE1hcCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtNYXB9IGFcbiAqIEByZXR1cm4ge01hcH1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4uL3V0aWwvZW1wdHknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIGEuZm9yRWFjaCgodiwgaywgbWFwKSA9PiB7XG4gICAgci5zZXQoaywgY2IodiwgaywgbWFwKSlcbiAgfSlcbiAgcmV0dXJuIHJcbn0pXG4iLCJsZXQgSnVzdCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgdGhpcy5fdmFsdWUgPSB2YWxcbiAgcmV0dXJuIHRoaXNcbn1cblxuSnVzdC5wcm90b3R5cGUuaXNKdXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuSnVzdC5wcm90b3R5cGUuaXNOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgSnVzdFxuIiwiaW1wb3J0IEp1c3QgZnJvbSAnLi9KdXN0J1xuaW1wb3J0IE5vdGhpbmcgZnJvbSAnLi9Ob3RoaW5nJ1xuXG5sZXQgTWF5YmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gIHRoaXMuX192YWx1ZSA9IHZhbFxufVxuXG5NYXliZS5vZiA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIE1heWJlKSByZXR1cm4gdmFsXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgTWF5YmUpIHtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWxcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHJldHVybiBuZXcgTWF5YmUodmFsKVxufVxuXG5NYXliZS5wcm90b3R5cGUuZ2V0T3JFbHNlID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIHRoaXMuaXNOb3RoaW5nKCkgPyBuIDogdGhpcy5fX3ZhbHVlXG59XG5cbk1heWJlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZikge1xuICBpZiAodGhpcy5pc05vdGhpbmcoKSkge1xuICAgIHJldHVybiBNYXliZS5vZihudWxsKVxuICB9XG4gIHJldHVybiBNYXliZS5vZihmKHRoaXMuX192YWx1ZSkpXG59XG5cbk1heWJlLnByb3RvdHlwZS5hcCA9IGZ1bmN0aW9uIChtKSB7XG4gIHJldHVybiBtLm1hcCh0aGlzLl9fdmFsdWUpXG59XG5cbk1heWJlLnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAodGhpcy5fX3ZhbHVlID09IG51bGwpXG59XG5cbk1heWJlLnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhdGhpcy5pc05vdGhpbmcoKVxufVxuXG5NYXliZS5wcm90b3R5cGUuTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBOb3RoaW5nKClcbn1cblxuTWF5YmUucHJvdG90eXBlLkp1c3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgSnVzdCh0aGlzLl92YWx1ZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF5YmVcbiIsImxldCBOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xufVxuXG5Ob3RoaW5nLnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmYWxzZVxufVxuTm90aGluZy5wcm90b3R5cGUuaXNOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RoaW5nXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgMiBhcmd1bWVudHNcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXG4gKiBAcGFyYW0ge051bWJlcn0gYlxuICogQHJldHVybiB7TnVtYmVyfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkZCAoYSwgYikge1xuICByZXR1cm4gK2EgKyArYlxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgZGl2aXNpb24gb2YgdGhlIDIgYXJndW1lbnRzXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxuICogQHBhcmFtIHtOdW1iZXJ9IGJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBkaXZpZGUgKGEsIGIpIHtcbiAgcmV0dXJuICthIC8gK2Jcbn0pXG4iLCIvKipcblxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ051bWJlcicpXG4iLCIvKipcbiAqIGlzTmFOXG4gKiBDaGVja3MgaWYgbnVtYmVyIGlzIE5BTlxuXG4gKi9cbmltcG9ydCBpc051bWJlciBmcm9tICcuL2lzJ1xuaW1wb3J0IGFuZCBmcm9tICcuLi91dGlsL2FuZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOYW4gKHgpIHtcbiAgcmV0dXJuIGFuZChpc051bWJlcih4KSwgaXNOYU4oeCkpXG59O1xuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBwcm9kdWN0IG9mIHRoZSAyIGFyZ3VtZW50c1xuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbXVsdGlwbHkgKGEsIGIpIHtcbiAgcmV0dXJuICthICogK2Jcbn0pXG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuLi91dGlsL2V4aXN0cydcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL3V0aWwvZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoeCwgeSkgPT4ge1xuICBmb3IgKGxldCBrZXlYIGluIHgpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXG4gICAgaWYgKG5vdChlcXVhbHMoeFtrZXlYXSwgeVtrZXlYXSkpKSByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZvciAobGV0IGtleVkgaW4geSkge1xuICAgIGlmIChub3QoZXhpc3RzKHhba2V5WV0pKSAmJiBleGlzdHMoeVtrZXlZXSkpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcblxuICogZm9sZFxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBvKSB7XG4gIGNvbnN0IGsgPSBrZXlzKG8pXG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGsubGVuZ3RoXG4gIGxldCByID0gT2JqZWN0KGluaXQpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciA9IGNiKHIsIG9ba1tpXV0sIGtbaV0sIG8pXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyB7U3RyaW5nfSAtPiB7T2JqZWN0fSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcFxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBoYXMgKHByb3AsIG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eSwgZXZlbiBpZiBpdCBpcyBpbmhlcml0ZWRcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcge1N0cmluZ30gLT4ge09iamVjdH0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaGFzSW4gKHByb3AsIG9iaikge1xuICByZXR1cm4gcHJvcCBpbiBvYmpcbn0pXG4iLCIvKipcblxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ09iamVjdCcpXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIG93biBrZXlzIG9mIGFuIG9iamVjdCBhcyBhbiBBcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IFtiXVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhPYmplY3QoYSkpXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIGFsbCB0aGUga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBbYl1cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQHJldHVybiB7QXJyYXl9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24ga2V5cyAoYSkge1xuICBjb25zdCByID0gW11cbiAgZm9yIChjb25zdCBrIGluIGEpIHtcbiAgICByLnB1c2goaylcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIG9iamVjdCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4uL3V0aWwvZW1wdHknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgayA9IGtleXMoYSlcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltrW2ldXSA9IGNiKGFba1tpXV0sIGtbaV0sIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGlkZW50aWNhbCBmcm9tICcuLi91dGlsL2lkZW50aWNhbCdcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9vYmplY3QvaXMnXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi9hcnJheS9pcydcbmltcG9ydCB1bmlvbiBmcm9tICcuLi9hcnJheS91bmlvbidcblxuY29uc3QgbWVyZ2UgPSBjdXJyeSgob2JqTCwgb2JqUikgPT4ge1xuICBsZXQgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqTClcblxuICBpZiAoaWRlbnRpY2FsKG9iakwsIG9ialIpKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG9iakwpXG4gIH1cbiAgZm9yIChsZXQga2V5IGluIG9ialIpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpSLCBrZXkpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBjb25zdCBvbGRWYWx1ZSA9IG9ialJba2V5XVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gb2JqTFtrZXldXG5cbiAgICBpZiAoaXNPYmplY3Qob2xkVmFsdWUpICYmIGlzT2JqZWN0KG5ld1ZhbHVlKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShvbGRWYWx1ZSwgbmV3VmFsdWUpXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG5ld1ZhbHVlKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB1bmlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2xkVmFsdWUgLy8gVE9ETzogdGhpcyBpcyBhIHJlZmVyZW5jZSwgc2hvdWxkIGJlIGNsb25lXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlXG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgob2JqLCBuYW1lcykgPT4ge1xuICBsZXQgcmVzdWx0ID0ge31cblxuICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgcmV0dXJuIG5hbWVzLmluZGV4T2Yoa2V5KSA9PT0gLTFcbiAgfSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59KVxuIiwiLyoqXG4gKlxuICovXG5cbmV4cG9ydCBjb25zdCBjb25jYXQgPSBmdW5jdGlvbiBfY29uY2F0IChzZXBhcmF0b3IgPSAnLCcpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkuam9pbihzZXBhcmF0b3IpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmNhdFxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxuICovXG5pbXBvcnQgdG9BcnJheSBmcm9tICcuLi9hcnJheS90bydcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0U3RyaW5nIChzdHIpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcbiAgbGV0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cylcblxuICBhcmdzLnNoaWZ0KClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC97KFxcZCspfS9nLCAobWF0Y2gsIGlkeCkgPT4ge1xuICAgIHJldHVybiBub3QoaXMoJ1VuZGVmaW5lZCcsIGFyZ3NbaWR4XSkpID8gYXJnc1tpZHhdIDogbWF0Y2hcbiAgfSlcbn1cbiIsIi8qKlxuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnU3RyaW5nJylcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgc3RyaW5nIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGxldCByID0gJydcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByICs9IGNiKGEuY2hhckF0KGkpLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBNb2RpZmllcyBhbiBpdGVtIGluIGFuIGFycmF5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvbiBhZGp1c3RcbiAqIEBkZXNjcmlwdGlvbiBNb2RpZmllcyBhbiBpdGVtIGluIGFuIGFycmF5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoYSAtPiBhKSAtPiBudW0gLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSB0byBtb2RpZnkgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICogQHBhcmFtIHtOdW1iZXJ9IGkgLSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gbW9kaWZ5IHRoZSBhcnJheSwgYWNjZXB0cyBwb3N0aXRpdmUgYW5kIG5lZ2F0aXZlIGluZGV4ZXNcbiAqIEBwYXJhbSB7SXRlcmFibGV9IFthXSAtIEFycmF5IHdpdGggZGF0YVxuICogQHJldHVybiB7SXRlcmFibGV9IFthXVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkanVzdCAoZm4sIGksIGEpIHtcbiAgY29uc3QgciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEpXG4gIGNvbnN0IGlkeCA9IGkgPCAwID8gci5sZW5ndGggKyBpIDogaVxuICBpZiAoIWFbaWR4XSkgcmV0dXJuIHJcbiAgcltpZHhdID0gZm4ocltpZHhdKVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogTW9kaWZpZXMgYW4gaXRlbSBpbiBhbiBhcnJheSB1c2luZyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb24gYWRqdXN0V2l0aFxuICogQGRlc2NyaXB0aW9uIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IGEpIC0+ICgoYSAtPiBbYV0pIC0+IFthXSAtPiBudW0pIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gdG8gbW9kaWZ5IHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgLSBUaGUgcHJlZGljYXRlIHRoYXQgcmV0dXJucyB0aGUgaW5kZXhlcyBpZiBmb3VuZFxuICogQHBhcmFtIHtJdGVyYWJsZX0gW2FdXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX0gW2FdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBtYXAgZnJvbSAnLi4vdXRpbC9tYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkanVzdFdpdGggKGZuLCBwcmVkLCBhKSB7XG4gIGNvbnN0IF9mbiA9IHggPT4ge1xuICAgIGlmIChwcmVkKHgpKSB7XG4gICAgICByZXR1cm4gZm4oeClcbiAgICB9XG4gICAgcmV0dXJuIHhcbiAgfVxuICByZXR1cm4gbWFwKF9mbiwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSkpXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb24gYWxsXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IFthXSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbGwgKGNiLCBhKSB7XG4gIGxldCByZXMgPSB0cnVlXG4gIGZvciAobGV0IGkgaW4gYSkge1xuICAgIGlmICghY2IoYVtpXSkpIHtcbiAgICAgIHJlcyA9IGZhbHNlXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59KVxuIiwiLyoqXG4gKiBBcHBsaWVzIGEgbGlzdCBvZiBwcmVkaWNhdGVzIHRvIHRoZSBkYXRhIGFuZCByZXR1cm5zIHRydWUgaWYgYWxsIHBhc3NcbiAqXG4gKiBAZnVuY3Rpb24gYWxsUGFzc1xuICogQGRlc2NyaXB0aW9uIEFwcGxpZXMgYSBsaXN0IG9mIHByZWRpY2F0ZXMgdG8gdGhlIGRhdGEgYW5kIHJldHVybnMgdHJ1ZSBpZiBhbGwgcGFzc1xuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBbKCouLi4gLT4gQm9vbGVhbildIC0+ICgqLi4uIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7QXJyYXl9IHByZWRpY2F0ZXMgQW4gYXJyYXkgb2YgcHJlZGljYXRlcyB0byBjaGVja1xuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjb21iaW5lZCBwcmVkaWNhdGVcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbGxQYXNzIChjYnMsIGEpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWNic1tpXShhKSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIHByb3ZpZGVkXG4gKlxuICogQGZ1bmN0aW9uIGFsd2F5c1xuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBmdW5jdGlvbiB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIHByb3ZpZGVkXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gKCogLT4gYSlcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWx3YXlzICh4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB4IH1cbn0pXG4iLCIvKipcbiAqIENoZWNrcyBpZiBib3RoIHByZWRpY2F0ZXMgYXJlIHRydWVcbiAqXG4gKiBAZnVuY3Rpb24gYW5kXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIGJvdGggcHJlZGljYXRlcyBhcmUgdHJ1ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoeCwgeSkgLT4gYm9vbGVhblxuICogQHBhcmFtIHsqfSB4IC0gQSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7Kn0geSAtIEEgcHJlZGljYXRlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFuZCAoeCwgeSkge1xuICByZXR1cm4geCAmJiB5XG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb24gb2YgdGhlIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKFRPRE8pXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbnkgKGNiLCBhKSB7XG4gIGxldCByZXMgPSBmYWxzZVxuICBmb3IgKGxldCBpIGluIGEpIHtcbiAgICBpZiAoY2IoYVtpXSkpIHtcbiAgICAgIHJlcyA9IHRydWVcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn0pXG4iLCIvKipcbiAqIEFwcGxpZXMgYSBsaXN0IG9mIHByZWRpY2F0ZXMgdG8gdGhlIGRhdGEgYW5kIHJldHVybnMgdHJ1ZSBpZiBvbmUgcGFzc2VzXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIFsoKi4uLiAtPiBCb29sZWFuKV0gLT4gKCouLi4pIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7QXJyYXl9IHByZWRpY2F0ZXMgQW4gYXJyYXkgb2YgcHJlZGljYXRlcyB0byBjaGVja1xuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjb21iaW5lZCBwcmVkaWNhdGVcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbGxQYXNzIChjYnMsIGEpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2JzW2ldKGEpKSByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufSlcbiIsIi8qKlxuICogQXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIHJldHVybnMgYSBjb21iaW5lZCByZXN1bHQgYXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgQHNpZyBbYSAtPiBiXSAtPiBbYV0gLT4gW2JdXG4gKiBAcGFyYW0geyhGdW5jdGlvbltdfEZ1bmN0aW9ufEFwcGxpY2F0aXZlKX0gZm5zIC0gQW4gYXJyYXkgb2YgZnVuY3Rpb25zIG9yIGEgZnVuY3Rpb24gb3IgYW4gYXBwbGljYXRpdmVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHMgLSBBbiBhcnJheSBvZiB2YWx1ZXNcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfSBbYV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuLi9fcHJpdmF0ZS9jdXJyeTEnXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcbmltcG9ydCBmb2xkIGZyb20gJy4uL2FycmF5L2ZvbGQnXG5pbXBvcnQgbWFwIGZyb20gJy4uL2FycmF5L21hcCdcblxuY29uc3QgaXNGdW5jdGlvbiA9IGlzKCdGdW5jdGlvbicpXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFwIChmbnMsIHZhbHMpIHtcbiAgaWYgKGlzRnVuY3Rpb24oZm5zLmFwKSkge1xuICAgIHJldHVybiBmbnMuYXAodmFscylcbiAgfVxuICBpZiAoaXNGdW5jdGlvbihmbnMpKSB7XG4gICAgcmV0dXJuIHggPT4gZm5zKHgpKHZhbHMoeCkpXG4gIH1cbiAgcmV0dXJuIGZvbGQoKGFjYywgZikgPT4gYWNjLmNvbmNhdChtYXAoY3VycnkxKGYpLCB2YWxzKSksIFtdLCBmbnMpXG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNS8wMy8yMDE3LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlICgpIHtcbiAgbGV0IGZ1bnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIF9jb21wb3NlICgpIHtcbiAgICBsZXQgaW5pdCA9IGZ1bnNbZnVucy5sZW5ndGggLSAxXVxuICAgIGxldCByZXN1bHQgPSBbaW5pdC5hcHBseShpbml0LCBhcmd1bWVudHMpXVxuICAgIGxldCBpID0gZnVucy5sZW5ndGggLSAyXG5cbiAgICBmb3IgKGk7IGkgPj0gMDsgLS1pKSB7XG4gICAgICBjb25zdCBmdW4gPSBmdW5zW2ldXG5cbiAgICAgIHJlc3VsdCA9IFtmdW4uYXBwbHkoZnVuLCByZXN1bHQpXVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0WzBdXG4gIH1cbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNS8wMy8yMDE3LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeSAoZnVuKSB7XG4gIGNvbnN0IGFyZ3NsZW4gPSBmdW4ubGVuZ3RoXG5cbiAgaWYgKGFyZ3NsZW4gPT09IDApIHtcbiAgICByZXR1cm4gZnVuXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlY3Vyc2VyKFtdKVxuXG4gIGZ1bmN0aW9uIHJlY3Vyc2UgKGFjYywgYXJncykge1xuICAgIGNvbnN0IF9hY2MgPSBhY2MuY29uY2F0KGFyZ3MpXG4gICAgcmV0dXJuIF9hY2MubGVuZ3RoIDwgYXJnc2xlblxuICAgICAgPyBjcmVhdGVSZWN1cnNlcihfYWNjKVxuICAgICAgOiBmdW4uYXBwbHkodGhpcywgX2FjYylcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlY3Vyc2VyIChhY2MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlY3Vyc2UoYWNjLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBiIC0+IGEgfCBiXG4gKiBAcGFyYW0ge2F9IGRlZmF1bHQgVGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBAcGFyYW0ge2J9IHZhbCBgdmFsYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgb2YgYGRlZmF1bHRgIHVubGVzcyBgdmFsYCBpcyBgbnVsbGAsIGB1bmRlZmluZWRgIG9yIGBOYU5gLlxuICogQHJldHVybiB7Kn0gVGhlIHNlY29uZCB2YWx1ZSBpZiBpdCBpcyBub3QgYG51bGxgLCBgdW5kZWZpbmVkYCBvciBgTmFOYCwgb3RoZXJ3aXNlIHRoZSBkZWZhdWx0IHZhbHVlXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZGVmYXVsdFRvIChkLCB2KSB7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIHJldHVybiB2ID09IG51bGwgfHwgdiAhPT0gdiA/IGQgOiB2XG59KVxuIiwiLyoqXG5cbiAqIGVtcHR5XG4gKiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVtcHR5ICh4KSB7XG4gIHJldHVybiBuZXcgeC5jb25zdHJ1Y3RvcigpXG59O1xuIiwiLyoqXG5cbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4vaWRlbnRpY2FsJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuaW1wb3J0IG5vdCBmcm9tICcuL25vdCdcbmltcG9ydCBvciBmcm9tICcuL29yJ1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL29iamVjdC9pcydcbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzJ1xuaW1wb3J0IGlzQm9vbGVhbiBmcm9tICcuLi9ib29sZWFuL2lzJ1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4uL251bWJlci9pcydcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuLi9zdHJpbmcvaXMnXG5pbXBvcnQgaXNEYXRlIGZyb20gJy4uL2RhdGUvaXMnXG5pbXBvcnQgZXF1YWxzQXJyYXkgZnJvbSAnLi4vYXJyYXkvZXF1YWxzJ1xuaW1wb3J0IGVxdWFsc09iamVjdCBmcm9tICcuLi9vYmplY3QvZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHMgKHgsIHkpIHtcbiAgaWYgKGlkZW50aWNhbCh4LCB5KSkgcmV0dXJuIHRydWVcblxuICBpZiAodHlwZSh4KSAhPT0gdHlwZSh5KSkgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKG9yKG5vdChleGlzdHMoeCkpLCBub3QoZXhpc3RzKHkpKSkpIHJldHVybiBmYWxzZVxuXG4gIGlmICh4LmNvbnN0cnVjdG9yICE9PSB5LmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2VcblxuICBpZiAoaXNTdHJpbmcoeCkgfHwgaXNCb29sZWFuKHgpIHx8IGlzTnVtYmVyKHgpIHx8IGlzRGF0ZSh4KSkge1xuICAgIHJldHVybiBpZGVudGljYWwoeC52YWx1ZU9mKCksIHkudmFsdWVPZigpKVxuICB9XG4gIGlmIChpc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuIGVxdWFsc0FycmF5KHgsIHkpXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzT2JqZWN0KHgsIHkpXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59KVxuIiwiLyoqXG5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhpc3RzICh4KSB7XG4gIHJldHVybiAhKHggPT0gbnVsbClcbn07XG4iLCIvKipcbiAqIEZpbmQgdGhlIGluZGV4IG1hdGNoaW5nIGEgcHJlZGljYXRlXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IGJvb2xlYW4pIC0+IFthXSAtPiBudW1iZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFByZWRpY2F0ZSBmdW5jdGlvbiByZXR1cm5zIGEgYm9vbGVhblxuICogQHBhcmFtIHtBcnJheX0gQW4gYXJyYXkgbGlrZSBvYmplY3RcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZpbmRJbmRleCAoZm4sIGEpIHtcbiAgbGV0IGkgPSAwXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICB3aGlsZSAoaSA8IGwpIHtcbiAgICBpZiAoZm4oYVtpXSkpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICAgIGkgKz0gMVxuICB9XG4gIHJldHVybiAtMVxufSlcbiIsIi8qKlxuICogUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ6IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZcOpXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnICgoYSwgYiwgYywgYSkg4oaSIGEpIOKGkiBhIOKGkiBbYl0g4oaSIGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIHJlY2VpdmVzIDQgdmFsdWVzOiB0aGUgYWNjdW11bGF0b3IsIHRoZSBpdGVtLCB0aGUgaW5kZXgsIGFuZCB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gYSBpcyB0aGUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHsqfSBbYl0gdGhlIGFycmF5IGxpa2UgaXRlbSB0byBpdGVyYXRlIG92ZXJcbiAqIEByZXR1cm4geyp9IGEgaXMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlXG4gKiovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGFycmF5Rm9sZCBmcm9tICcuLi9hcnJheS9mb2xkJ1xuaW1wb3J0IG9iamVjdEZvbGQgZnJvbSAnLi4vb2JqZWN0L2ZvbGQnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBhKSB7XG4gIGNvbnN0IHR5cGVNYXAgPSB7XG4gICAgJ09iamVjdCc6IG9iamVjdEZvbGQsXG4gICAgJ0FycmF5JzogYXJyYXlGb2xkXG4gIH1cbiAgLy8gaWYgKGEubmV4dCkge1xuICAvLyAgIHJldHVybiBpdGVyYWJsZUZvbGQoY2IsIGluaXQsIGEpXG4gIC8vIH1cbiAgLy8gaWYgKHR5cGUoU3ltYm9sKSAhPT0gJ3VuZGVmaW5lZCcgJiYgYVtTeW1ib2wuaXRlcmF0b3JdKSB7XG4gIC8vICAgcmV0dXJuIGl0ZXJhYmxlRm9sZChjYiwgaW5pdCwgYVtTeW1ib2wuaXRlcmF0b3JdKCkpXG4gIC8vIH1cbiAgcmV0dXJuIHR5cGVNYXBbdHlwZShhKV0oY2IsIGluaXQsIGEpXG59KVxuXG4vLyBmdW5jdGlvbiBpdGVyYWJsZUZvbGQgKGNiLCBhY2MsIGdlbikge1xuLy8gICBsZXQgc3RlcCA9IGdlbi5uZXh0KClcbi8vICAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcbi8vICAgICBhY2MgPSBjYihhY2MsIHN0ZXAudmFsdWUpXG4vLyAgICAgc3RlcCA9IGdlbi5uZXh0KClcbi8vICAgfVxuLy8gICByZXR1cm4gYWNjXG4vLyB9XG4iLCIvKipcblxuICogaWRlbnRpY2FsXG4gKiBjaGVja3MgZm9yIGlkZW50aW50aWNhbCBpdGVtc1xuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBpc05hbiBmcm9tICcuLi9udW1iZXIvaXNOYW4nXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlkZW50aWNhbCAoeCwgeSkge1xuICBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSB7XG4gICAgcmV0dXJuIDEgLyB4ID09PSAxIC8geVxuICB9XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gISEoaXNOYW4oeCkgJiYgaXNOYW4oeSkpXG59KVxuIiwiLyoqXG5cbiAqIFJldHVybnMgdGhlIHZhbHVlIHN1cHBsaWVkIHRvIHRoZSBmdW5jdGlvblxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlkZW50aXR5ICh4KSB7XG4gIHJldHVybiB4XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlbiBkaWVyaWNreFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaXMgKEN0b3IsIHZhbCkge1xuICByZXR1cm4gdHlwZSh2YWwpID09PSBDdG9yXG59KVxuIiwiLyoqXG5cbiAqIGVtcHR5XG4gKiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxuICovXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi9lbXB0eSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4vZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtcHR5ICh4KSB7XG4gIHJldHVybiBleGlzdHMoeCkgJiYgZXF1YWxzKHgsIGVtcHR5KHgpKVxufTtcbiIsIi8qKlxuICogXCJsaWZ0c1wiIGEgZnVuY3Rpb24gb2YgYXJpdHkgPiAxIHNvIHRoYXQgaXQgbWF5IFwibWFwIG92ZXJcIiBhIGxpc3QsIEZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIGxpZnRcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKCouLi4gLT4gKikgLT4gKFsqXS4uLiAtPiBbKl0pXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBjdXJyeTEgZnJvbSAnLi4vX3ByaXZhdGUvY3VycnkxJ1xuaW1wb3J0IGZvbGQgZnJvbSAnLi4vdXRpbC9mb2xkJ1xuaW1wb3J0IGFwIGZyb20gJy4uL3V0aWwvYXAnXG5pbXBvcnQgbWFwIGZyb20gJy4uL3V0aWwvbWFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBsaWZ0IChmbikge1xuICBjb25zdCBsaWZ0ZWQgPSBjdXJyeTEoY3VycnkoZm4pKVxuICByZXR1cm4gY3VycnkoZnVuY3Rpb24gX2xpZnQgKCkge1xuICAgIHJldHVybiBmb2xkKGFwLCBtYXAobGlmdGVkLCBhcmd1bWVudHNbMF0pLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxuICB9KVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIGFycmF5IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IGIgLT4gYlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgYXJyYXlNYXAgZnJvbSAnLi4vYXJyYXkvbWFwJ1xuaW1wb3J0IG9iamVjdE1hcCBmcm9tICcuLi9vYmplY3QvbWFwJ1xuaW1wb3J0IG1hcE1hcCBmcm9tICcuLi9tYXAvbWFwJ1xuaW1wb3J0IHN0cmluZ01hcCBmcm9tICcuLi9zdHJpbmcvbWFwJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi4vdXRpbC90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGNvbnN0IHIgPSB7XG4gICAgJ09iamVjdCc6IG9iamVjdE1hcCxcbiAgICAnU3RyaW5nJzogc3RyaW5nTWFwLFxuICAgICdBcnJheSc6IGFycmF5TWFwLFxuICAgICdNYXAnOiBtYXBNYXAsXG4gICAgJ0Z1bmN0aW9uJzogY3VycnkoZnVuY3Rpb24gX2ZuTWFwICgpIHtcbiAgICAgIHJldHVybiBjYi5jYWxsKHRoaXMsIGEuYXBwbHkodGhpcywgYXJndW1lbnRzKSlcbiAgICB9KVxuICB9XG4gIHJldHVybiByW3R5cGUoYSldKGNiLCBhKVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgbGFyZ2VzdCBvZiB0aGUgMiBhcmd1bWVudHMgcHJvdmlkZWRcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgT3JkIGEgPT4gYSAtPiBhIC0+IGFcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHsqfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1heCAoYSwgYikge1xuICByZXR1cm4gYiA+IGEgPyBiIDogYVxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG5vdCAoeCkge1xuICByZXR1cm4gIXhcbn0pXG4iLCIvKipcblxuICogb3JcbiAqIFJldHVybnMgdHJ1ZSBpZiBvbmUgb3IgdGhlIG90aGVyIGlzIHRydWVcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9yICh4LCB5KSB7XG4gIHJldHVybiB4IHx8IHlcbn0pXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDA2LzAyLzIwMTcuXG4gKi9cbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRydXRoeSAoeCkge1xuICByZXR1cm4gKHggIT09IGZhbHNlKSAmJiBleGlzdHMoeClcbn07XG4iLCIvKipcblxuICovXG5pbXBvcnQgY3VycnkxIGZyb20gJy4uL19wcml2YXRlL2N1cnJ5MSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkxKGZ1bmN0aW9uIHR5cGUgKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KS5zbGljZSg4LCAtMSlcbn0pXG4iLCIvKipcblxuICogemlwXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCB6aXBXaXRoIGZyb20gJy4vemlwV2l0aCdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gemlwIChhLCBiKSB7XG4gIHJldHVybiB6aXBXaXRoKGZ1bmN0aW9uIF96aXBXaXRoICh4LCB5KSB7IHJldHVybiBbeCwgeV0gfSwgYSwgYilcbn0pXG4iLCIvKipcblxuICogemlwV2l0aFxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHppcFdpdGggKGNiLCBhLCBiKSB7XG4gIGNvbnN0IGFyciA9IFtdXG4gIGNvbnN0IGxlbiA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aClcbiAgbGV0IGkgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGFyci5wdXNoKGNiKGFbaV0sIGJbaV0pKVxuICB9XG4gIHJldHVybiBhcnJcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9