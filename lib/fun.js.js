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
    return arguments.length === 0 ? fn : fn(a);
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
 * @author Len Dierickx
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
 * @author Len Dierickx
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
 * @author Len Dierickx
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
 * Created by dierickx.len on 18/03/2017.
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
 * Created by dierickx.len on 18/03/2017.
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
 * Created by dierickx.len on 18/03/2017.
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
 * @author Len Dierickx
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
 * @author Len Dierickx
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
 * @author Len Dierickx
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
 * @author Len Dierickx
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
 * @author Len Dierickx
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
 * @author Len Dierickx
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
 * @author Len Dierickx
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
 * Created by dierickx.len on 18/03/2017.
 */
var concat = function concat() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ',';
  // use function(), arrow function doesn't bind arguments
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
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
exports.default = _default;

var _to = _interopRequireDefault(__webpack_require__(/*! ../array/to */ "./src/array/to.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ../util/not */ "./src/util/not.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ../util/is */ "./src/util/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dierickx.len on 26/03/2017.
 */
function _default(str) {
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
 * @author Len Dierickx
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
 * @function
 * @since v1.0.2
 * @sig (a -> a) -> num -> [a] -> [a]
 * @param {Function} fn - to modify the item at the specified index
 * @param {Number} i - The index at which to modify the array, accepts postitive and negative indexes
 * @param {Iterable} [a]
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
 * @function
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
 * @function
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
 * @function
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
 * @function
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
 * @author Len Dierickx
 * x, y
 * Returns boolean
 */
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
  return function () {
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
 * @author Len Dierickx
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
 * @author Len Dierickx
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
 * @author Len Dierickx
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
 * @author Len Dierickx
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
 * @author Len Dierickx
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
 * @author Len Dierickx
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
  var lifted = function lifted(x) {
    return (0, _curry.default)(fn)(x);
  };

  return (0, _curry.default)(function anon() {
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
    'Map': _map3.default // 'Set': setMap

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
exports.default = not;

/**
 * Created by dierickx.len on 26/03/2017.
 */
function not(x) {
  return !x;
}

;
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
 * @author Len Dierickx
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
exports.default = type;

/**
 * @author Len Dierickx
 */
function type(x) {
  return Object.prototype.toString.call(x).slice(8, -1);
}

;
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

var _zipWith = _interopRequireDefault(__webpack_require__(/*! ./zipWith */ "./src/util/zipWith.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Len Dierickx
 * zip
 *
 */
var _default = (0, _curry.default)(function zip(a, b) {
  return (0, _zipWith.default)(function (x, y) {
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
 * @author Len Dierickx
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4uanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1bi5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvX3ByaXZhdGUvY3VycnkxLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L3RvLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS91bmlvbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9GLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9ib29sZWFuL1QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2Jvb2xlYW4vaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2NvbnN0YW50cy9NT05USFMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2NvbnN0YW50cy9XRUVLREFZUy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9kaWZmRGF0ZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9mb3JtYXREYXRlVGltZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pc0Z1dHVyZURhdGUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvaXNWYWxpZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b0RheS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b0hvdXIuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9NaW51dGVzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvU2Vjb25kcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9KdXN0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tb25hZHMvTWF5YmUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9Ob3RoaW5nLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvYWRkLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvZGl2aWRlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL251bWJlci9pc05hbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL211bHRpcGx5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZXF1YWxzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZm9sZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2hhcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2hhc0luLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3Qva2V5c0luLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9vbWl0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvY29uY2F0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvZm9ybWF0U3RyaW5nLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWRqdXN0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FkanVzdFdpdGguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWxsLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FsbFBhc3MuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWx3YXlzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FuZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbnkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYW55UGFzcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9jb21wb3NlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2N1cnJ5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2RlZmF1bHRUby5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9lbXB0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZXhpc3RzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2ZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9mb2xkLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lkZW50aWNhbC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pc0VtcHR5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2xpZnQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL21heC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9ub3QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvb3IuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvdHJ1dGh5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3R5cGUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvemlwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3ppcFdpdGguanMiXSwibmFtZXMiOlsiY3VycnkxIiwiZm4iLCJjdXJyaWVkIiwiYSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImVxdWFsc0FycmF5IiwieCIsInkiLCJpIiwiZm9sZCIsImNiIiwiaW5pdCIsImwiLCJyIiwibWFwIiwiQXJyYXkiLCJ0b0FycmF5IiwiYXBwbHkiLCJ1bmlvbkFycmF5IiwiYUwiLCJhUiIsImZyb20iLCJTZXQiLCJjb25jYXQiLCJNT05USFMiLCJXRUVLREFZUyIsInN0YXJ0IiwiZW5kIiwiRGF0ZSIsImdldFRpbWUiLCJnZXRXZWVrIiwiZCIsIlVUQyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwic2V0VVRDRGF0ZSIsImdldFVUQ0RhdGUiLCJnZXRVVENEYXkiLCJ5ZWFyU3RhcnQiLCJnZXRVVENGdWxsWWVhciIsIndlZWtObyIsIk1hdGgiLCJjZWlsIiwiWkVST1MiLCJsYXN0TiIsIm4iLCJzdHIiLCJzdWJzdHJpbmciLCJmaXJzdE4iLCJmaWxsIiwiZGlnaXRzIiwiREFURV9UT0tFTlMiLCJtb2RDZWlsaW5nIiwibW9kIiwidmFsIiwidG9rZW5zIiwiWVlZWSIsIllZIiwiTU1NTSIsIk1NTSIsIk1NIiwiTSIsInciLCJ3dyIsIkREIiwiRCIsImRkZGQiLCJnZXREYXkiLCJkZGQiLCJkZCIsIkhIIiwiZ2V0SG91cnMiLCJIIiwiaGgiLCJoIiwibW0iLCJnZXRNaW51dGVzIiwibSIsInNzIiwiZ2V0U2Vjb25kcyIsInMiLCJBIiwiU1NTIiwiZ2V0TWlsbGlzZWNvbmRzIiwiU1MiLCJTIiwiUSIsInN3YXBUb2tlbldpdGhWYWx1ZSIsImRhdGUiLCJ0b2tlbiIsImZvcm1hdCIsIm1hdGNoIiwiam9pbiIsImlzVmFsaWQiLCJpc0Zpbml0ZSIsInZhbHVlT2YiLCJmb3JFYWNoIiwidiIsImsiLCJzZXQiLCJKdXN0IiwiX3ZhbHVlIiwicHJvdG90eXBlIiwiaXNKdXN0IiwiaXNOb3RoaW5nIiwiTWF5YmUiLCJfX3ZhbHVlIiwib2YiLCJnZXRPckVsc2UiLCJmIiwiYXAiLCJOb3RoaW5nIiwiYWRkIiwiYiIsImRpdmlkZSIsImlzTmFuIiwiaXNOYU4iLCJtdWx0aXBseSIsImtleVgiLCJrZXlZIiwibyIsIk9iamVjdCIsImhhcyIsInByb3AiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJoYXNJbiIsImtleXMiLCJwdXNoIiwibWVyZ2UiLCJvYmpMIiwib2JqUiIsInJlc3VsdCIsImFzc2lnbiIsImtleSIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJuYW1lcyIsImZpbHRlciIsImluZGV4T2YiLCJzZXBhcmF0b3IiLCJhcmdzIiwic2xpY2UiLCJzaGlmdCIsInJlcGxhY2UiLCJpZHgiLCJjaGFyQXQiLCJhZGp1c3QiLCJhZGp1c3RXaXRoIiwicHJlZCIsIl9mbiIsImFsbCIsInJlcyIsImFsbFBhc3MiLCJjYnMiLCJhbHdheXMiLCJhbmQiLCJhbnkiLCJpc0Z1bmN0aW9uIiwiZm5zIiwidmFscyIsImFjYyIsImNvbXBvc2UiLCJmdW5zIiwiZnVuIiwiY3VycnkiLCJhcmdzbGVuIiwiY3JlYXRlUmVjdXJzZXIiLCJyZWN1cnNlIiwiX2FjYyIsImRlZmF1bHRUbyIsImVtcHR5IiwiY29uc3RydWN0b3IiLCJlcXVhbHMiLCJleGlzdHMiLCJmaW5kSW5kZXgiLCJ0eXBlTWFwIiwiaWRlbnRpY2FsIiwiaWRlbnRpdHkiLCJpcyIsIkN0b3IiLCJpc0VtcHR5IiwibGlmdCIsImxpZnRlZCIsImFub24iLCJtYXgiLCJub3QiLCJvciIsInRydXRoeSIsInR5cGUiLCJ0b1N0cmluZyIsInppcCIsInppcFdpdGgiLCJhcnIiLCJsZW4iLCJtaW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7QUFNZSxTQUFTQSxNQUFULENBQWlCQyxFQUFqQixFQUFxQjtBQUNsQyxTQUFPLFNBQVNDLE9BQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQzFCLFdBQU9D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IjoiZnVuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJmdW4uanNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZnVuLmpzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZ1bi5qc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogUmV0dXJucyBhIGN1cnJpZWQgZnVuY3Rpb24gd2l0aCBhcml0eSAxXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkxIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY3VycmllZCAoYSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAwXG4gICAgICA/IGZuXG4gICAgICA6IGZuKGEpXG4gIH1cbn1cbiIsIi8qKlxuICogQGZ1bmN0aW9uIGVxdWFsc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gZm9yIGRlZXAgY29tcGFyaXNvbiBvZiBhcnJheXNcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBAcGFyYW0ge2F9IHggLSBPYmplY3QgdG8gY29tcGFyZSBvZiB0eXBlIGFcbiAqIEBwYXJhbSB7YX0geSAtIE9iamVjdCB4IHRvIGNvbXBhcmUgd2l0aCBvYmplY3QgeFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgbm90IGZyb20gJy4uL3V0aWwvbm90J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi91dGlsL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzQXJyYXkgKHgsIHkpIHtcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub3QoZXF1YWxzKHhbaV0sIHlbaV0pKSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IG1hcHBpbmcgb3ZlciB0aGUgcHJvdmlkZWQgYXJyYXkgYW5kIGNhbGxpbmcgYW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSB7Y2JGdW5jdGlvbn0gY2IgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBtb2RpZnkgdGhlIGl0ZW1cbiAqIEBwYXJhbSB7Kn0gaW5pdCAtIEluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBBcnJheSB3aXRoIGl0ZW1zIHRvIG1vZGlmeSBieSB0aGUgY2IgZnVuY3Rpb25cbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFsaWFzIHJlZHVjZVxuICogQHNpbmNlIDEuMC4yXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBmb2xkKGFkZCwgMCwgWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IDNcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBjYkZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IHIgLSBBY2N1bXVsYXRvciB3aGljaCBhY2N1bXVsYXRlcyB0aGUgY2FsbGJhY2sncyByZXR1cm4gdmFsdWVzXG4gKiBAcGFyYW0geyp9IGl0ZW0gLSB0aGUgY3VycmVudCBlbGVtZW50IGJlaW5nIHByb2Nlc3NlZFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gdGhlIGluZGV5IG9mIHRoZSBpdGVtIGJlaW5nIHByb2Nlc3NlZFxuICogQHBhcmFtIHtBcnJheX0gYSAtIFRoZSBpbml0aWFsIGFycmF5XG4gKiBAcmV0dXJuIHsqfVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgbGV0IHIgPSBpbml0XG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciA9IGNiKHIsIGFbaV0sIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcclxuICogQGZ1bmN0aW9uIGlzQXJyYXlcclxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiB0aGUgcHJvdmlkZWQgb2JqZWN0IGlzIGFuIGFycmF5LCBhdXRvY3VycmllZCBmdW5jdGlvblxyXG4gKiBAcGFyYW0geyp9IE9iamVjdCB0byB2ZXJpZml5XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqIEBzaW5jZSAxLjAuMlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBjb25zdCByZXN1bHQgPSBpc0FycmF5KFsxLDEsMV0pXHJcbiAqIC8vIHJlc3VsdCA9IHRydWVcclxuICovXHJcblxyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdBcnJheScpXHJcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIE1hcHMgb3ZlciBhbiBhcnJheSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBbYV0gLT4gW2FdXG4gKiBAZXhhbXBsZVxuICpcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoaWRlbnRpdHksIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzAsMiwzXVxuICogIGNvbnN0IGFkZDIgPSBhZGQoMilcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoYWRkMiwgWzAsMiwzXSlcbiAqICAvLyByZXN1bHQgPSBbMiw0LDVdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBjb25zdCByID0gbmV3IEFycmF5KGwpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltpXSA9IGNiKGFbaV0sIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiB0b0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQ29udmVydHMgdGhlIGlucHV0IHRvIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5TGlrZX0geCAtIE9iamVjdCB0byBjb252ZXJ0IHRvIGFuIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSB0b0FycmF5KFwic3RyaW5nXCIpXG4gKiAvLyByZXN1bHQgPSBbJ3MnLCd0JywncicsJ2knLCduJywnZyddXG4gKlxuICogZnVuY3Rpb24gKCkge1xuICogIGNvbnN0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cylcbiAqICBjb25zb2xlLmxvZyh0eXBlb2YgYXJncykgLy8gQXJyYXlcbiAqIH1cbiAqXG4gKiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0FycmF5ICh4KSB7XG4gIHJldHVybiB4Lmxlbmd0aCA9PT0gMSA/IFt4WzBdXSA6IEFycmF5LmFwcGx5KG51bGwsIHgpXG59O1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdW5pb25BcnJheVxuICogQGRlc2NyaXB0aW9uIE1lcmdlcyAyIGFycmF5c1xuICogQHBhcmFtIHtBcnJheX0gYUwgLSBBcnJheSB0byBtZXJnZVxuICogQHBhcmFtIHtBcnJheX0gYVIgLSBBcnJheSB0byBtZXJnZVxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gdW5pb25BcnJheShbMCwxLDJdLCBbMyw0LDVdKVxuICogLy8gcmVzdWx0ID0gWzAuMS4yLjMuNC41XVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHVuaW9uQXJyYXkgKGFMLCBhUikge1xuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFMLmNvbmNhdChhUikpKVxufSlcbiIsIi8qKlxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+ICgqIC0+IGZhbHNlKVxuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqKi9cbmltcG9ydCBhbHdheXMgZnJvbSAnLi4vdXRpbC9hbHdheXMnXG5cbmV4cG9ydCBkZWZhdWx0IGFsd2F5cyhmYWxzZSlcbiIsIi8qKlxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgVHJ1ZSBib29sZWFuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gKCogLT4gdHJ1ZSlcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiovXG5pbXBvcnQgYWx3YXlzIGZyb20gJy4uL3V0aWwvYWx3YXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBhbHdheXModHJ1ZSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdCb29sZWFuJylcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cbiAqL1xuXG5leHBvcnQgY29uc3QgTU9OVEhTID0gW1xuICAnSmFudWFyeScsXG4gICdGZWJydWFyeScsXG4gICdNYXJjaCcsXG4gICdBcHJpbCcsXG4gICdNYXknLFxuICAnSnVuZScsXG4gICdKdWx5JyxcbiAgJ0F1Z3VzdCcsXG4gICdTZXB0ZW1iZXInLFxuICAnT2N0b2JlcicsXG4gICdOb3ZlbWJlcicsXG4gICdEZWNlbWJlcidcbl1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cbiAqL1xuZXhwb3J0IGNvbnN0IFdFRUtEQVlTID0gW1xuICAnU3VuZGF5JyxcbiAgJ01vbmRheScsXG4gICdUdWVzZGF5JyxcbiAgJ1dlZG5lc2RheScsXG4gICdUaHVyc2RheScsXG4gICdGcmlkYXknLFxuICAnU2F0dXJkYXknXG5dXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHN0YXJ0LCBlbmQpID0+IHtcclxuICByZXR1cm4gKG5ldyBEYXRlKHN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShlbmQpLmdldFRpbWUoKSlcclxufSlcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyMC8wMS8yMDE3LlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBpc1ZhbGlkRGF0ZSBmcm9tICcuL2lzVmFsaWQnXG5pbXBvcnQgeyBXRUVLREFZUyB9IGZyb20gJy4uL2NvbnN0YW50cy9XRUVLREFZUydcbmltcG9ydCB7IE1PTlRIUyB9IGZyb20gJy4uL2NvbnN0YW50cy9NT05USFMnXG5cbmNvbnN0IGdldFdlZWsgPSAoZCkgPT4ge1xuICAvLyBDb3B5IGRhdGUgc28gZG9uJ3QgbW9kaWZ5IG9yaWdpbmFsXG4gIGQgPSBuZXcgRGF0ZShEYXRlLlVUQyhkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSwgZC5nZXREYXRlKCkpKVxuICAvLyBTZXQgdG8gbmVhcmVzdCBUaHVyc2RheTogY3VycmVudCBkYXRlICsgNCAtIGN1cnJlbnQgZGF5IG51bWJlclxuICAvLyBNYWtlIFN1bmRheSdzIGRheSBudW1iZXIgN1xuICBkLnNldFVUQ0RhdGUoZC5nZXRVVENEYXRlKCkgKyA0IC0gKGQuZ2V0VVRDRGF5KCkgfHwgNykpXG4gIC8vIEdldCBmaXJzdCBkYXkgb2YgeWVhclxuICBsZXQgeWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRVVENGdWxsWWVhcigpLCAwLCAxKSlcblxuICAvLyBDYWxjdWxhdGUgZnVsbCB3ZWVrcyB0byBuZWFyZXN0IFRodXJzZGF5XG4gIGxldCB3ZWVrTm8gPSBNYXRoLmNlaWwoKCgoZCAtIHllYXJTdGFydCkgLyA4NjQwMDAwMCkgKyAxKSAvIDcpXG5cbiAgLy8gUmV0dXJuIGFycmF5IG9mIHllYXIgYW5kIHdlZWsgbnVtYmVyXG4gIHJldHVybiBbZC5nZXRVVENGdWxsWWVhcigpLCB3ZWVrTm9dXG59XG5cbi8vIHV0aWxpdHkgZnVuY3Rpb25zIGZvciB0aGUgZGF0ZSBmb3JtYXR0aW5nXG5jb25zdCBaRVJPUyA9ICcwMDAwMDAwMCdcbmNvbnN0IGxhc3ROID0gY3VycnkoKG4sIHN0cikgPT4gc3RyLnN1YnN0cmluZyhzdHIubGVuZ3RoIC0gbiwgc3RyLmxlbmd0aCkpXG5jb25zdCBmaXJzdE4gPSBjdXJyeSgobiwgc3RyKSA9PiBzdHIuc3Vic3RyaW5nKDAsIG4pKVxuY29uc3QgZmlsbCA9IGN1cnJ5KChkaWdpdHMsIG4pID0+IGxhc3ROKGRpZ2l0cywgWkVST1MgKyBuKSlcblxuLy8gZGF0ZS90aW1lIHJlZ2V4XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbmNvbnN0IERBVEVfVE9LRU5TID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFF8WVlZWVlZfFlZWVlZfFlZWVl8WVl8Z2coZ2dnPyk/fEdHKEdHRz8pP3xlfEV8YXxBfGhoP3xISD98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZ1xuXG5jb25zdCBtb2RDZWlsaW5nID0gKG1vZCwgdmFsKSA9PiB2YWwgJSBtb2QgfHwgbW9kXG5cbi8vIHRva2VucyBtYXAgdG8gZ2V0IHBhcnRzIG9mIHRoZSBkYXRlIC90aW1lXG5jb25zdCB0b2tlbnMgPSB7XG4gIFlZWVk6IGQgPT4gZmlsbCg0LCBkLmdldEZ1bGxZZWFyKCkpLFxuICBZWTogZCA9PiBsYXN0TigyLCBmaWxsKDQsIGQuZ2V0RnVsbFllYXIoKSkpLFxuICBNTU1NOiBkID0+IE1PTlRIU1tkLmdldE1vbnRoKCldLFxuICBNTU06IGQgPT4gZmlyc3ROKDMsIE1PTlRIU1tkLmdldE1vbnRoKCldKSxcbiAgTU06IGQgPT4gZmlsbCgyLCBkLmdldE1vbnRoKCkgKyAxKSxcbiAgTTogZCA9PiBkLmdldE1vbnRoKCkgKyAxLFxuICB3OiBkID0+IGdldFdlZWsoZCksXG4gIHd3OiBkID0+IGZpbGwoMiwgZ2V0V2VlayhkKSksXG4gIEREOiBkID0+IGZpbGwoMiwgZC5nZXREYXRlKCkpLFxuICBEOiBkID0+IGQuZ2V0RGF0ZSgpLFxuICBkZGRkOiBkID0+IFdFRUtEQVlTW2QuZ2V0RGF5KCldLFxuICBkZGQ6IGQgPT4gZmlyc3ROKDMsIFdFRUtEQVlTW2QuZ2V0RGF5KCldKSxcbiAgZGQ6IGQgPT4gZmlyc3ROKDIsIFdFRUtEQVlTW2QuZ2V0RGF5KCldKSxcbiAgZDogZCA9PiBkLmdldERheSgpLFxuICBISDogZCA9PiBmaWxsKDIsIGQuZ2V0SG91cnMoKSksXG4gIEg6IGQgPT4gZC5nZXRIb3VycygpLFxuICBoaDogZCA9PiBmaWxsKDIsIG1vZENlaWxpbmcoMTIsIGQuZ2V0SG91cnMoKSkpLFxuICBoOiBkID0+IG1vZENlaWxpbmcoMTIsIGQuZ2V0SG91cnMoKSksXG4gIG1tOiBkID0+IGZpbGwoMiwgZC5nZXRNaW51dGVzKCkpLFxuICBtOiBkID0+IGQuZ2V0TWludXRlcygpLFxuICBzczogZCA9PiBmaWxsKDIsIGQuZ2V0U2Vjb25kcygpKSxcbiAgczogZCA9PiBkLmdldFNlY29uZHMoKSxcbiAgQTogZCA9PiBkLmdldEhvdXJzKCkgPiAxMSA/ICdQTScgOiAnQU0nLFxuICBhOiBkID0+IGQuZ2V0SG91cnMoKSA+IDExID8gJ3BtJyA6ICdhbScsXG4gIFNTUzogZCA9PiBmaWxsKDMsIGQuZ2V0TWlsbGlzZWNvbmRzKCkpLFxuICBTUzogZCA9PiBmaXJzdE4oMiwgZmlsbCgzLCBkLmdldE1pbGxpc2Vjb25kcygpKSksXG4gIFM6IGQgPT4gZmlyc3ROKDEsIGZpbGwoMywgZC5nZXRNaWxsaXNlY29uZHMoKSkpLFxuICBROiBkID0+IE1hdGguY2VpbCgoZC5nZXRNb250aCgpICsgMSkgLyAzKVxufVxuXG4vLyBtYXAgdGhpcyBmdW5jdGlvbiB0byBnZXQgdGhlIGFjdHVhbCB0aW1lL2RhdGUgdmFsdWUgZm9yIGVhY2ggdG9rZW5cbmNvbnN0IHN3YXBUb2tlbldpdGhWYWx1ZSA9IGN1cnJ5KChkYXRlLCB0b2tlbikgPT4ge1xuICByZXR1cm4gdG9rZW5zW3Rva2VuXSA/IHRva2Vuc1t0b2tlbl0oZGF0ZSkgOiB0b2tlblxufSlcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKGZvcm1hdCwgZGF0ZSkgPT4ge1xuICAvLyBjaGVjayBmb3IgdmFsaWQgZGF0ZVxuICBpZiAoIWlzVmFsaWREYXRlKGRhdGUpKSByZXR1cm4gJ0ludmFsaWQgRGF0ZScgLy8gcmV0dXJuIHN0cmluZ1xuICByZXR1cm4gZm9ybWF0Lm1hdGNoKERBVEVfVE9LRU5TKS5tYXAoc3dhcFRva2VuV2l0aFZhbHVlKGRhdGUpKS5qb2luKCcnKSAvLyByZXR1cm4gam9pbmVkIHN0cmluZ1xufSlcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdEYXRlJylcclxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwOS8wMy8yMDE3LlxuICovXG5pbXBvcnQgZGlmZkRhdGUgZnJvbSAnLi9kaWZmRGF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IHtcbiAgcmV0dXJuIGRpZmZEYXRlKG5ldyBEYXRlKCkpKGQpIDwgMFxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAxOC8wMy8yMDE3LlxuICovXG5pbXBvcnQgaXNEYXRlIGZyb20gJy4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQgKHgpIHtcbiAgLy8gbm9pbnNwZWN0aW9uIEpTQ2hlY2tGdW5jdGlvblNpZ25hdHVyZXNcbiAgcmV0dXJuIGlzRGF0ZSh4KSAmJiBpc0Zpbml0ZSh4LnZhbHVlT2YoKSlcbn07XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gODY0MDAwMDAgLy8gMjQqNjAqNjAqMTAwMCA9IDg2NDAwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyAzNjAwMDAwIC8vIDYwKjYwKjEwMDAgPSAzNjAwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyA2MDAwMCAvLyA2MCoxMDAwID0gNjAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDEwMDBcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8vIGFycmF5XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFsc0FycmF5IH0gZnJvbSAnYXJyYXkvZXF1YWxzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0FycmF5IH0gZnJvbSAnYXJyYXkvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvQXJyYXkgfSBmcm9tICdhcnJheS90bydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pb25BcnJheSB9IGZyb20gJ2FycmF5L3VuaW9uJ1xuXG4vLyBib29sZWFuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzQm9vbGVhbiB9IGZyb20gJ2Jvb2xlYW4vaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEYgfSBmcm9tICdib29sZWFuL0YnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFQgfSBmcm9tICdib29sZWFuL1QnXG5cbi8vIG1vbmFkc1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBKdXN0IH0gZnJvbSAnbW9uYWRzL0p1c3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1heWJlIH0gZnJvbSAnbW9uYWRzL01heWJlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOb3RoaW5nIH0gZnJvbSAnbW9uYWRzL05vdGhpbmcnXG5cbi8vIG51bWJlclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc051bWJlciB9IGZyb20gJ251bWJlci9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOYW4gfSBmcm9tICdudW1iZXIvaXNOYW4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkZCB9IGZyb20gJ251bWJlci9hZGQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG11bHRpcGx5IH0gZnJvbSAnbnVtYmVyL211bHRpcGx5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaXZpZGUgfSBmcm9tICdudW1iZXIvZGl2aWRlJ1xuXG4vLyBvYmplY3RcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzT2JqZWN0IH0gZnJvbSAnb2JqZWN0L2VxdWFscydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNPYmplY3QgfSBmcm9tICdvYmplY3QvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlT2JqZWN0IH0gZnJvbSAnb2JqZWN0L21lcmdlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvbWl0RnJvbU9iamVjdCB9IGZyb20gJ29iamVjdC9vbWl0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXMgfSBmcm9tICdvYmplY3QvaGFzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXNJbiB9IGZyb20gJ29iamVjdC9oYXNJbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5cyB9IGZyb20gJ29iamVjdC9rZXlzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXlzSW4gfSBmcm9tICdvYmplY3Qva2V5c0luJ1xuXG4vLyBzdHJpbmdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29uY2F0U3RyaW5nIH0gZnJvbSAnc3RyaW5nL2NvbmNhdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9ybWF0U3RyaW5nIH0gZnJvbSAnc3RyaW5nL2Zvcm1hdFN0cmluZydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNTdHJpbmcgfSBmcm9tICdzdHJpbmcvaXMnXG5cbi8vIHV0aWxcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWRqdXN0IH0gZnJvbSAndXRpbC9hZGp1c3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkanVzdFdpdGggfSBmcm9tICd1dGlsL2FkanVzdFdpdGgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsbCB9IGZyb20gJ3V0aWwvYWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbGxQYXNzIH0gZnJvbSAndXRpbC9hbGxQYXNzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbHdheXMgfSBmcm9tICd1dGlsL2Fsd2F5cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW5kIH0gZnJvbSAndXRpbC9hbmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFueSB9IGZyb20gJ3V0aWwvYW55J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbnlQYXNzIH0gZnJvbSAndXRpbC9hbnlQYXNzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcCB9IGZyb20gJ3V0aWwvYXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBvc2UgfSBmcm9tICd1dGlsL2NvbXBvc2UnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGN1cnJ5IH0gZnJvbSAndXRpbC9jdXJyeSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdFRvIH0gZnJvbSAndXRpbC9kZWZhdWx0VG8nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVtcHR5IH0gZnJvbSAndXRpbC9lbXB0eSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzIH0gZnJvbSAndXRpbC9lcXVhbHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGV4aXN0cyB9IGZyb20gJ3V0aWwvZXhpc3RzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaW5kSW5kZXggfSBmcm9tICd1dGlsL2ZpbmRJbmRleCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9sZCB9IGZyb20gJ3V0aWwvZm9sZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWRlbnRpY2FsIH0gZnJvbSAndXRpbC9pZGVudGljYWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlkZW50aXR5IH0gZnJvbSAndXRpbC9pZGVudGl0eSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXMgfSBmcm9tICd1dGlsL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0VtcHR5IH0gZnJvbSAndXRpbC9pc0VtcHR5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaWZ0IH0gZnJvbSAndXRpbC9saWZ0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXAgfSBmcm9tICd1dGlsL21hcCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWF4IH0gZnJvbSAndXRpbC9tYXgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vdCB9IGZyb20gJ3V0aWwvbm90J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvciB9IGZyb20gJ3V0aWwvb3InXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRydXRoeSB9IGZyb20gJ3V0aWwvdHJ1dGh5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0eXBlIH0gZnJvbSAndXRpbC90eXBlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB6aXAgfSBmcm9tICd1dGlsL3ppcCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgemlwV2l0aCB9IGZyb20gJ3V0aWwvemlwV2l0aCdcblxuLy8gZGF0ZVxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaWZmRGF0ZSB9IGZyb20gJ2RhdGUvZGlmZkRhdGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvcm1hdERhdGVUaW1lIH0gZnJvbSAnZGF0ZS9mb3JtYXREYXRlVGltZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGF0ZUlzIH0gZnJvbSAnZGF0ZS9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNGdXR1cmVEYXRlIH0gZnJvbSAnZGF0ZS9pc0Z1dHVyZURhdGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzVmFsaWQgfSBmcm9tICdkYXRlL2lzVmFsaWQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvRGF5IH0gZnJvbSAnZGF0ZS90b0RheSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9Ib3VyIH0gZnJvbSAnZGF0ZS90b0hvdXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvTWludXRlcyB9IGZyb20gJ2RhdGUvdG9NaW51dGVzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b1NlY29uZHMgfSBmcm9tICdkYXRlL3RvU2Vjb25kcydcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgTWFwIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge01hcH0gYVxuICogQHJldHVybiB7TWFwfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vdXRpbC9lbXB0eSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBjb25zdCByID0gZW1wdHkoYSlcbiAgYS5mb3JFYWNoKCh2LCBrLCBtYXApID0+IHtcbiAgICByLnNldChrLCBjYih2LCBrLCBtYXApKVxuICB9KVxuICByZXR1cm4gclxufSlcbiIsImxldCBKdXN0ID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl92YWx1ZSA9IHZhbFxuICByZXR1cm4gdGhpc1xufVxuXG5KdXN0LnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5KdXN0LnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBKdXN0XG4iLCJpbXBvcnQgSnVzdCBmcm9tICcuL0p1c3QnXG5pbXBvcnQgTm90aGluZyBmcm9tICcuL05vdGhpbmcnXG5cbmxldCBNYXliZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgdGhpcy5fX3ZhbHVlID0gdmFsXG59XG5cbk1heWJlLm9mID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgTWF5YmUpIHJldHVybiB2YWxcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBNYXliZSkge1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbFxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcmV0dXJuIG5ldyBNYXliZSh2YWwpXG59XG5cbk1heWJlLnByb3RvdHlwZS5nZXRPckVsc2UgPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gdGhpcy5pc05vdGhpbmcoKSA/IG4gOiB0aGlzLl9fdmFsdWVcbn1cblxuTWF5YmUucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gIGlmICh0aGlzLmlzTm90aGluZygpKSB7XG4gICAgcmV0dXJuIE1heWJlLm9mKG51bGwpXG4gIH1cbiAgcmV0dXJuIE1heWJlLm9mKGYodGhpcy5fX3ZhbHVlKSlcbn1cblxuTWF5YmUucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKG0pIHtcbiAgcmV0dXJuIG0ubWFwKHRoaXMuX192YWx1ZSlcbn1cblxuTWF5YmUucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICh0aGlzLl9fdmFsdWUgPT0gbnVsbClcbn1cblxuTWF5YmUucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICF0aGlzLmlzTm90aGluZygpXG59XG5cbk1heWJlLnByb3RvdHlwZS5Ob3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IE5vdGhpbmcoKVxufVxuXG5NYXliZS5wcm90b3R5cGUuSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBKdXN0KHRoaXMuX3ZhbHVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXliZVxuIiwibGV0IE5vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG59XG5cbk5vdGhpbmcucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZhbHNlXG59XG5Ob3RoaW5nLnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGhpbmdcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSAyIGFyZ3VtZW50c1xuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWRkIChhLCBiKSB7XG4gIHJldHVybiArYSArICtiXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBkaXZpc2lvbiBvZiB0aGUgMiBhcmd1bWVudHNcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXG4gKiBAcGFyYW0ge051bWJlcn0gYlxuICogQHJldHVybiB7TnVtYmVyfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGRpdmlkZSAoYSwgYikge1xuICByZXR1cm4gK2EgLyArYlxufSlcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdOdW1iZXInKVxuIiwiLyoqXG4gKiBpc05hTlxuICogQ2hlY2tzIGlmIG51bWJlciBpcyBOQU5cbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKi9cbmltcG9ydCBpc051bWJlciBmcm9tICcuL2lzJ1xuaW1wb3J0IGFuZCBmcm9tICcuLi91dGlsL2FuZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOYW4gKHgpIHtcbiAgcmV0dXJuIGFuZChpc051bWJlcih4KSwgaXNOYU4oeCkpXG59O1xuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBwcm9kdWN0IG9mIHRoZSAyIGFyZ3VtZW50c1xuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbXVsdGlwbHkgKGEsIGIpIHtcbiAgcmV0dXJuICthICogK2Jcbn0pXG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBlcXVhbHNcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4uL3V0aWwvZXhpc3RzJ1xuaW1wb3J0IG5vdCBmcm9tICcuLi91dGlsL25vdCdcbmltcG9ydCBlcXVhbHMgZnJvbSAnLi4vdXRpbC9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KCh4LCB5KSA9PiB7XG4gIGZvciAobGV0IGtleVggaW4geCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3BcbiAgICBpZiAobm90KGVxdWFscyh4W2tleVhdLCB5W2tleVhdKSkpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZm9yIChsZXQga2V5WSBpbiB5KSB7XG4gICAgaWYgKG5vdChleGlzdHMoeFtrZXlZXSkpICYmIGV4aXN0cyh5W2tleVldKSkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIGZvbGRcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgbykge1xuICBjb25zdCBrID0ga2V5cyhvKVxuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBrLmxlbmd0aFxuICBsZXQgciA9IE9iamVjdChpbml0KVxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHIgPSBjYihyLCBvW2tbaV1dLCBrW2ldLCBvKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcge1N0cmluZ30gLT4ge09iamVjdH0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaGFzIChwcm9wLCBvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHksIGV2ZW4gaWYgaXQgaXMgaW5oZXJpdGVkXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIHtTdHJpbmd9IC0+IHtPYmplY3R9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGhhc0luIChwcm9wLCBvYmopIHtcbiAgcmV0dXJuIHByb3AgaW4gb2JqXG59KVxuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ09iamVjdCcpXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIG93biBrZXlzIG9mIGFuIG9iamVjdCBhcyBhbiBBcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IFtiXVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhPYmplY3QoYSkpXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIGFsbCB0aGUga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBbYl1cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQHJldHVybiB7QXJyYXl9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24ga2V5cyAoYSkge1xuICBjb25zdCByID0gW11cbiAgZm9yIChjb25zdCBrIGluIGEpIHtcbiAgICByLnB1c2goaylcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIG9iamVjdCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4uL3V0aWwvZW1wdHknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgayA9IGtleXMoYSlcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltrW2ldXSA9IGNiKGFba1tpXV0sIGtbaV0sIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBlcXVhbHNcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4uL3V0aWwvaWRlbnRpY2FsJ1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL29iamVjdC9pcydcbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzJ1xuaW1wb3J0IHVuaW9uIGZyb20gJy4uL2FycmF5L3VuaW9uJ1xuXG5jb25zdCBtZXJnZSA9IGN1cnJ5KChvYmpMLCBvYmpSKSA9PiB7XG4gIGxldCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpMKVxuXG4gIGlmIChpZGVudGljYWwob2JqTCwgb2JqUikpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb2JqTClcbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gb2JqUikge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9ialIsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGNvbnN0IG9sZFZhbHVlID0gb2JqUltrZXldXG4gICAgY29uc3QgbmV3VmFsdWUgPSBvYmpMW2tleV1cblxuICAgIGlmIChpc09iamVjdChvbGRWYWx1ZSkgJiYgaXNPYmplY3QobmV3VmFsdWUpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKG9sZFZhbHVlLCBuZXdWYWx1ZSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkobmV3VmFsdWUpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHVuaW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSBvbGRWYWx1ZSAvLyBUT0RPOiB0aGlzIGlzIGEgcmVmZXJlbmNlLCBzaG91bGQgYmUgY2xvbmVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufSlcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKG9iaiwgbmFtZXMpID0+IHtcbiAgbGV0IHJlc3VsdCA9IHt9XG5cbiAgT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgIHJldHVybiBuYW1lcy5pbmRleE9mKGtleSkgPT09IC0xXG4gIH0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cbiAqL1xuXG5leHBvcnQgY29uc3QgY29uY2F0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciA9ICcsJykgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xuICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICByZXR1cm4gYXJncy5qb2luKHNlcGFyYXRvcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uY2F0XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmltcG9ydCB0b0FycmF5IGZyb20gJy4uL2FycmF5L3RvJ1xyXG5pbXBvcnQgbm90IGZyb20gJy4uL3V0aWwvbm90J1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdHIpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcclxuICBsZXQgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKVxyXG5cbiAgYXJncy5zaGlmdCgpXHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC97KFxcZCspfS9nLCAobWF0Y2gsIGlkeCkgPT4ge1xyXG4gICAgcmV0dXJuIG5vdChpcygnVW5kZWZpbmVkJywgYXJnc1tpZHhdKSkgPyBhcmdzW2lkeF0gOiBtYXRjaFxyXG4gIH0pXHJcbn1cclxuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ1N0cmluZycpXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhIHN0cmluZyBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9ICcnXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciArPSBjYihhLmNoYXJBdChpKSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogTW9kaWZpZXMgYW4gaXRlbSBpbiBhbiBhcnJheSB1c2luZyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGEgLT4gYSkgLT4gbnVtIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gdG8gbW9kaWZ5IHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBpIC0gVGhlIGluZGV4IGF0IHdoaWNoIHRvIG1vZGlmeSB0aGUgYXJyYXksIGFjY2VwdHMgcG9zdGl0aXZlIGFuZCBuZWdhdGl2ZSBpbmRleGVzXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBbYV1cbiAqIEByZXR1cm4ge0l0ZXJhYmxlfSBbYV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhZGp1c3QgKGZuLCBpLCBhKSB7XG4gIGNvbnN0IHIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhKVxuICBjb25zdCBpZHggPSBpIDwgMCA/IHIubGVuZ3RoICsgaSA6IGlcbiAgaWYgKCFhW2lkeF0pIHJldHVybiByXG4gIHJbaWR4XSA9IGZuKHJbaWR4XSlcbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IGEpIC0+ICgoYSAtPiBbYV0pIC0+IFthXSAtPiBudW0pIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gdG8gbW9kaWZ5IHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgLSBUaGUgcHJlZGljYXRlIHRoYXQgcmV0dXJucyB0aGUgaW5kZXhlcyBpZiBmb3VuZFxuICogQHBhcmFtIHtJdGVyYWJsZX0gW2FdXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX0gW2FdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBtYXAgZnJvbSAnLi4vdXRpbC9tYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkanVzdFdpdGggKGZuLCBwcmVkLCBhKSB7XG4gIGNvbnN0IF9mbiA9IHggPT4ge1xuICAgIGlmIChwcmVkKHgpKSB7XG4gICAgICByZXR1cm4gZm4oeClcbiAgICB9XG4gICAgcmV0dXJuIHhcbiAgfVxuICByZXR1cm4gbWFwKF9mbiwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSkpXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFsbCAoY2IsIGEpIHtcbiAgbGV0IHJlcyA9IHRydWVcbiAgZm9yIChsZXQgaSBpbiBhKSB7XG4gICAgaWYgKCFjYihhW2ldKSkge1xuICAgICAgcmVzID0gZmFsc2VcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn0pXG4iLCIvKipcbiAqIEFwcGxpZXMgYSBsaXN0IG9mIHByZWRpY2F0ZXMgdG8gdGhlIGRhdGEgYW5kIHJldHVybnMgdHJ1ZSBpZiBhbGwgcGFzc1xuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBbKCouLi4gLT4gQm9vbGVhbildIC0+ICgqLi4uIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7QXJyYXl9IHByZWRpY2F0ZXMgQW4gYXJyYXkgb2YgcHJlZGljYXRlcyB0byBjaGVja1xuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjb21iaW5lZCBwcmVkaWNhdGVcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbGxQYXNzIChjYnMsIGEpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWNic1tpXShhKSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIHByb3ZpZGVkXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gKCogLT4gYSlcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWx3YXlzICh4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB4IH1cbn0pXG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiB4LCB5XG4gKiBSZXR1cm5zIGJvb2xlYW5cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFuZCAoeCwgeSkge1xuICByZXR1cm4geCAmJiB5XG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb24gb2YgdGhlIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKFRPRE8pXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbnkgKGNiLCBhKSB7XG4gIGxldCByZXMgPSBmYWxzZVxuICBmb3IgKGxldCBpIGluIGEpIHtcbiAgICBpZiAoY2IoYVtpXSkpIHtcbiAgICAgIHJlcyA9IHRydWVcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn0pXG4iLCIvKipcbiAqIEFwcGxpZXMgYSBsaXN0IG9mIHByZWRpY2F0ZXMgdG8gdGhlIGRhdGEgYW5kIHJldHVybnMgdHJ1ZSBpZiBvbmUgcGFzc2VzXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIFsoKi4uLiAtPiBCb29sZWFuKV0gLT4gKCouLi4pIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7QXJyYXl9IHByZWRpY2F0ZXMgQW4gYXJyYXkgb2YgcHJlZGljYXRlcyB0byBjaGVja1xuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjb21iaW5lZCBwcmVkaWNhdGVcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbGxQYXNzIChjYnMsIGEpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2JzW2ldKGEpKSByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufSlcbiIsIi8qKlxuICogQXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIHJldHVybnMgYSBjb21iaW5lZCByZXN1bHQgYXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgQHNpZyBbYSAtPiBiXSAtPiBbYV0gLT4gW2JdXG4gKiBAcGFyYW0geyhGdW5jdGlvbltdfEZ1bmN0aW9ufEFwcGxpY2F0aXZlKX0gZm5zIC0gQW4gYXJyYXkgb2YgZnVuY3Rpb25zIG9yIGEgZnVuY3Rpb24gb3IgYW4gYXBwbGljYXRpdmVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHMgLSBBbiBhcnJheSBvZiB2YWx1ZXNcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfSBbYV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuLi9fcHJpdmF0ZS9jdXJyeTEnXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcbmltcG9ydCBmb2xkIGZyb20gJy4uL2FycmF5L2ZvbGQnXG5pbXBvcnQgbWFwIGZyb20gJy4uL2FycmF5L21hcCdcblxuY29uc3QgaXNGdW5jdGlvbiA9IGlzKCdGdW5jdGlvbicpXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFwIChmbnMsIHZhbHMpIHtcbiAgaWYgKGlzRnVuY3Rpb24oZm5zLmFwKSkge1xuICAgIHJldHVybiBmbnMuYXAodmFscylcbiAgfVxuICBpZiAoaXNGdW5jdGlvbihmbnMpKSB7XG4gICAgcmV0dXJuIHggPT4gZm5zKHgpKHZhbHMoeCkpXG4gIH1cbiAgcmV0dXJuIGZvbGQoKGFjYywgZikgPT4gYWNjLmNvbmNhdChtYXAoY3VycnkxKGYpLCB2YWxzKSksIFtdLCBmbnMpXG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNS8wMy8yMDE3LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlICgpIHtcbiAgbGV0IGZ1bnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgaW5pdCA9IGZ1bnNbZnVucy5sZW5ndGggLSAxXVxuICAgIGxldCByZXN1bHQgPSBbaW5pdC5hcHBseShpbml0LCBhcmd1bWVudHMpXVxuICAgIGxldCBpID0gZnVucy5sZW5ndGggLSAyXG5cbiAgICBmb3IgKGk7IGkgPj0gMDsgLS1pKSB7XG4gICAgICBjb25zdCBmdW4gPSBmdW5zW2ldXG5cbiAgICAgIHJlc3VsdCA9IFtmdW4uYXBwbHkoZnVuLCByZXN1bHQpXVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0WzBdXG4gIH1cbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNS8wMy8yMDE3LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeSAoZnVuKSB7XG4gIGNvbnN0IGFyZ3NsZW4gPSBmdW4ubGVuZ3RoXG5cbiAgaWYgKGFyZ3NsZW4gPT09IDApIHtcbiAgICByZXR1cm4gZnVuXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlY3Vyc2VyKFtdKVxuXG4gIGZ1bmN0aW9uIHJlY3Vyc2UgKGFjYywgYXJncykge1xuICAgIGNvbnN0IF9hY2MgPSBhY2MuY29uY2F0KGFyZ3MpXG4gICAgcmV0dXJuIF9hY2MubGVuZ3RoIDwgYXJnc2xlblxuICAgICAgPyBjcmVhdGVSZWN1cnNlcihfYWNjKVxuICAgICAgOiBmdW4uYXBwbHkodGhpcywgX2FjYylcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlY3Vyc2VyIChhY2MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlY3Vyc2UoYWNjLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBiIC0+IGEgfCBiXG4gKiBAcGFyYW0ge2F9IGRlZmF1bHQgVGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBAcGFyYW0ge2J9IHZhbCBgdmFsYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgb2YgYGRlZmF1bHRgIHVubGVzcyBgdmFsYCBpcyBgbnVsbGAsIGB1bmRlZmluZWRgIG9yIGBOYU5gLlxuICogQHJldHVybiB7Kn0gVGhlIHNlY29uZCB2YWx1ZSBpZiBpdCBpcyBub3QgYG51bGxgLCBgdW5kZWZpbmVkYCBvciBgTmFOYCwgb3RoZXJ3aXNlIHRoZSBkZWZhdWx0IHZhbHVlXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZGVmYXVsdFRvIChkLCB2KSB7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIHJldHVybiB2ID09IG51bGwgfHwgdiAhPT0gdiA/IGQgOiB2XG59KVxuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogZW1wdHlcbiAqIFJldHVybnMgdGhlIGVtcHR5IGVxdWl2YWxlbnQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW1wdHkgKHgpIHtcbiAgcmV0dXJuIG5ldyB4LmNvbnN0cnVjdG9yKClcbn07XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBlcXVhbHNcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xuaW1wb3J0IGlkZW50aWNhbCBmcm9tICcuL2lkZW50aWNhbCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcbmltcG9ydCBub3QgZnJvbSAnLi9ub3QnXG5pbXBvcnQgb3IgZnJvbSAnLi9vcidcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9vYmplY3QvaXMnXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi9hcnJheS9pcydcbmltcG9ydCBpc0Jvb2xlYW4gZnJvbSAnLi4vYm9vbGVhbi9pcydcbmltcG9ydCBpc051bWJlciBmcm9tICcuLi9udW1iZXIvaXMnXG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnLi4vc3RyaW5nL2lzJ1xuaW1wb3J0IGlzRGF0ZSBmcm9tICcuLi9kYXRlL2lzJ1xuaW1wb3J0IGVxdWFsc0FycmF5IGZyb20gJy4uL2FycmF5L2VxdWFscydcbmltcG9ydCBlcXVhbHNPYmplY3QgZnJvbSAnLi4vb2JqZWN0L2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzICh4LCB5KSB7XG4gIGlmIChpZGVudGljYWwoeCwgeSkpIHJldHVybiB0cnVlXG5cbiAgaWYgKHR5cGUoeCkgIT09IHR5cGUoeSkpIHJldHVybiBmYWxzZVxuXG4gIGlmIChvcihub3QoZXhpc3RzKHgpKSwgbm90KGV4aXN0cyh5KSkpKSByZXR1cm4gZmFsc2VcblxuICBpZiAoeC5jb25zdHJ1Y3RvciAhPT0geS5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKGlzU3RyaW5nKHgpIHx8IGlzQm9vbGVhbih4KSB8fCBpc051bWJlcih4KSB8fCBpc0RhdGUoeCkpIHtcbiAgICByZXR1cm4gaWRlbnRpY2FsKHgudmFsdWVPZigpLCB5LnZhbHVlT2YoKSlcbiAgfVxuICBpZiAoaXNBcnJheSh4KSkge1xuICAgIHJldHVybiBlcXVhbHNBcnJheSh4LCB5KVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHgpKSB7XG4gICAgcmV0dXJuIGVxdWFsc09iamVjdCh4LCB5KVxuICB9XG4gIHJldHVybiBmYWxzZVxufSlcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhpc3RzICh4KSB7XG4gIHJldHVybiAhKHggPT0gbnVsbClcbn07XG4iLCIvKipcbiAqIEZpbmQgdGhlIGluZGV4IG1hdGNoaW5nIGEgcHJlZGljYXRlXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IGJvb2xlYW4pIC0+IFthXSAtPiBudW1iZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFByZWRpY2F0ZSBmdW5jdGlvbiByZXR1cm5zIGEgYm9vbGVhblxuICogQHBhcmFtIHtBcnJheX0gQW4gYXJyYXkgbGlrZSBvYmplY3RcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZpbmRJbmRleCAoZm4sIGEpIHtcbiAgbGV0IGkgPSAwXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICB3aGlsZSAoaSA8IGwpIHtcbiAgICBpZiAoZm4oYVtpXSkpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICAgIGkgKz0gMVxuICB9XG4gIHJldHVybiAtMVxufSlcbiIsIi8qKlxuICogUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ6IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZcOpXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnICgoYSwgYiwgYywgYSkg4oaSIGEpIOKGkiBhIOKGkiBbYl0g4oaSIGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIHJlY2VpdmVzIDQgdmFsdWVzOiB0aGUgYWNjdW11bGF0b3IsIHRoZSBpdGVtLCB0aGUgaW5kZXgsIGFuZCB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gYSBpcyB0aGUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHsqfSBbYl0gdGhlIGFycmF5IGxpa2UgaXRlbSB0byBpdGVyYXRlIG92ZXJcbiAqIEByZXR1cm4geyp9IGEgaXMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlXG4gKiovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGFycmF5Rm9sZCBmcm9tICcuLi9hcnJheS9mb2xkJ1xuaW1wb3J0IG9iamVjdEZvbGQgZnJvbSAnLi4vb2JqZWN0L2ZvbGQnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBhKSB7XG4gIGNvbnN0IHR5cGVNYXAgPSB7XG4gICAgJ09iamVjdCc6IG9iamVjdEZvbGQsXG4gICAgJ0FycmF5JzogYXJyYXlGb2xkXG4gIH1cbiAgLy8gaWYgKGEubmV4dCkge1xuICAvLyAgIHJldHVybiBpdGVyYWJsZUZvbGQoY2IsIGluaXQsIGEpXG4gIC8vIH1cbiAgLy8gaWYgKHR5cGUoU3ltYm9sKSAhPT0gJ3VuZGVmaW5lZCcgJiYgYVtTeW1ib2wuaXRlcmF0b3JdKSB7XG4gIC8vICAgcmV0dXJuIGl0ZXJhYmxlRm9sZChjYiwgaW5pdCwgYVtTeW1ib2wuaXRlcmF0b3JdKCkpXG4gIC8vIH1cbiAgcmV0dXJuIHR5cGVNYXBbdHlwZShhKV0oY2IsIGluaXQsIGEpXG59KVxuXG4vLyBmdW5jdGlvbiBpdGVyYWJsZUZvbGQgKGNiLCBhY2MsIGdlbikge1xuLy8gICBsZXQgc3RlcCA9IGdlbi5uZXh0KClcbi8vICAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcbi8vICAgICBhY2MgPSBjYihhY2MsIHN0ZXAudmFsdWUpXG4vLyAgICAgc3RlcCA9IGdlbi5uZXh0KClcbi8vICAgfVxuLy8gICByZXR1cm4gYWNjXG4vLyB9XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBpZGVudGljYWxcbiAqIGNoZWNrcyBmb3IgaWRlbnRpbnRpY2FsIGl0ZW1zXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGlzTmFuIGZyb20gJy4uL251bWJlci9pc05hbidcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaWRlbnRpY2FsICh4LCB5KSB7XG4gIGlmICh4ID09PSAwICYmIHkgPT09IDApIHtcbiAgICByZXR1cm4gMSAvIHggPT09IDEgLyB5XG4gIH1cbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAhIShpc05hbih4KSAmJiBpc05hbih5KSlcbn0pXG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBzdXBwbGllZCB0byB0aGUgZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZGVudGl0eSAoeCkge1xuICByZXR1cm4geFxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBsZW4gZGllcmlja3hcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlzIChDdG9yLCB2YWwpIHtcbiAgcmV0dXJuIHR5cGUodmFsKSA9PT0gQ3RvclxufSlcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIGVtcHR5XG4gKiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxuICovXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi9lbXB0eSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4vZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtcHR5ICh4KSB7XG4gIHJldHVybiBleGlzdHMoeCkgJiYgZXF1YWxzKHgsIGVtcHR5KHgpKVxufTtcbiIsIi8qKlxuICogXCJsaWZ0c1wiIGEgZnVuY3Rpb24gb2YgYXJpdHkgPiAxIHNvIHRoYXQgaXQgbWF5IFwibWFwIG92ZXJcIiBhIGxpc3QsIEZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIGxpZnRcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKCouLi4gLT4gKikgLT4gKFsqXS4uLiAtPiBbKl0pXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBmb2xkIGZyb20gJy4uL3V0aWwvZm9sZCdcbmltcG9ydCBhcCBmcm9tICcuLi91dGlsL2FwJ1xuaW1wb3J0IG1hcCBmcm9tICcuLi91dGlsL21hcCdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbGlmdCAoZm4pIHtcbiAgY29uc3QgbGlmdGVkID0geCA9PiBjdXJyeShmbikoeClcbiAgcmV0dXJuIGN1cnJ5KGZ1bmN0aW9uIGFub24gKCkge1xuICAgIHJldHVybiBmb2xkKGFwLCBtYXAobGlmdGVkLCBhcmd1bWVudHNbMF0pLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxuICB9KVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIGFycmF5IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IGIgLT4gYlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgYXJyYXlNYXAgZnJvbSAnLi4vYXJyYXkvbWFwJ1xuaW1wb3J0IG9iamVjdE1hcCBmcm9tICcuLi9vYmplY3QvbWFwJ1xuaW1wb3J0IG1hcE1hcCBmcm9tICcuLi9tYXAvbWFwJ1xuaW1wb3J0IHN0cmluZ01hcCBmcm9tICcuLi9zdHJpbmcvbWFwJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi4vdXRpbC90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGNvbnN0IHIgPSB7XG4gICAgJ09iamVjdCc6IG9iamVjdE1hcCxcbiAgICAnU3RyaW5nJzogc3RyaW5nTWFwLFxuICAgICdBcnJheSc6IGFycmF5TWFwLFxuICAgICdNYXAnOiBtYXBNYXBcbiAgICAvLyAnU2V0Jzogc2V0TWFwXG4gIH1cbiAgcmV0dXJuIHJbdHlwZShhKV0oY2IsIGEpXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXJnZXN0IG9mIHRoZSAyIGFyZ3VtZW50cyBwcm92aWRlZFxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBPcmQgYSA9PiBhIC0+IGEgLT4gYVxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4geyp9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWF4IChhLCBiKSB7XG4gIHJldHVybiBiID4gYSA/IGIgOiBhXG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3QgKHgpIHtcbiAgcmV0dXJuICF4XG59O1xuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogb3JcbiAqIFJldHVybnMgdHJ1ZSBpZiBvbmUgb3IgdGhlIG90aGVyIGlzIHRydWVcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9yICh4LCB5KSB7XG4gIHJldHVybiB4IHx8IHlcbn0pXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDA2LzAyLzIwMTcuXG4gKi9cbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRydXRoeSAoeCkge1xuICByZXR1cm4gKHggIT09IGZhbHNlKSAmJiBleGlzdHMoeClcbn07XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR5cGUgKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KS5zbGljZSg4LCAtMSlcbn07XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiB6aXBcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IHppcFdpdGggZnJvbSAnLi96aXBXaXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiB6aXAgKGEsIGIpIHtcbiAgcmV0dXJuIHppcFdpdGgoZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIFt4LCB5XSB9LCBhLCBiKVxufSlcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIHppcFdpdGhcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiB6aXBXaXRoIChjYiwgYSwgYikge1xuICBjb25zdCBhcnIgPSBbXVxuICBjb25zdCBsZW4gPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpXG4gIGxldCBpID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIucHVzaChjYihhW2ldLCBiW2ldKSlcbiAgfVxuICByZXR1cm4gYXJyXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==