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

/***/ "./src/array/filter.js":
/*!*****************************!*\
  !*** ./src/array/filter.js ***!
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
 * @function arrayFilter
 * @private
 *
 */
var _default = (0, _curry.default)(function arrayFilter(fn, a) {
  var r = [];

  for (var i = 0; i < a.length; i++) {
    if (fn(a[i])) r.push(a[i]);
  }

  return r;
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

/***/ "./src/array/index.js":
/*!****************************!*\
  !*** ./src/array/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "equals", {
  enumerable: true,
  get: function get() {
    return _equals.default;
  }
});
Object.defineProperty(exports, "filter", {
  enumerable: true,
  get: function get() {
    return _filter.default;
  }
});
Object.defineProperty(exports, "fold", {
  enumerable: true,
  get: function get() {
    return _fold.default;
  }
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function get() {
    return _is.default;
  }
});
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function get() {
    return _map.default;
  }
});
Object.defineProperty(exports, "to", {
  enumerable: true,
  get: function get() {
    return _to.default;
  }
});
Object.defineProperty(exports, "union", {
  enumerable: true,
  get: function get() {
    return _union.default;
  }
});

var _equals = _interopRequireDefault(__webpack_require__(/*! ./equals.js */ "./src/array/equals.js"));

var _filter = _interopRequireDefault(__webpack_require__(/*! ./filter.js */ "./src/array/filter.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! ./fold.js */ "./src/array/fold.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is.js */ "./src/array/is.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./map.js */ "./src/array/map.js"));

var _to = _interopRequireDefault(__webpack_require__(/*! ./to.js */ "./src/array/to.js"));

var _union = _interopRequireDefault(__webpack_require__(/*! ./union.js */ "./src/array/union.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ "./src/boolean/both.js":
/*!*****************************!*\
  !*** ./src/boolean/both.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _lift = _interopRequireDefault(__webpack_require__(/*! ../util/lift */ "./src/util/lift.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! ../util/and */ "./src/util/and.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ../util/is */ "./src/util/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true when both predicates return true
 *
 * @function
 * @since v1.0.2
 * @param {Function} fn1 A predicate function
 * @param {Function} fn2 A predicate function
 * @return {Boolean}
 **/
var _default = (0, _curry.default)(function both(fn1, fn2) {
  return (0, _is.default)('Function')(fn1) ? function _both() {
    return fn1.apply(this, arguments) && fn2.apply(this, arguments);
  } : (0, _lift.default)(_and.default)(fn1, fn2);
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/boolean/index.js":
/*!******************************!*\
  !*** ./src/boolean/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
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
Object.defineProperty(exports, "both", {
  enumerable: true,
  get: function get() {
    return _both.default;
  }
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function get() {
    return _is.default;
  }
});

var _F = _interopRequireDefault(__webpack_require__(/*! ./F.js */ "./src/boolean/F.js"));

var _T = _interopRequireDefault(__webpack_require__(/*! ./T.js */ "./src/boolean/T.js"));

var _both = _interopRequireDefault(__webpack_require__(/*! ./both.js */ "./src/boolean/both.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is.js */ "./src/boolean/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ "./src/constants/DATE_UNITS.js":
/*!*************************************!*\
  !*** ./src/constants/DATE_UNITS.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATE_UNITS = void 0;

/**
 * @private
 */
var DATE_UNITS = {
  milliseconds: 1,
  seconds: 1000,
  minutes: 60 * 1000,
  hours: 60 * 60 * 1000,
  days: 24 * 60 * 60 * 1000,
  weeks: 7 * 24 * 60 * 60 * 1000
};
exports.DATE_UNITS = DATE_UNITS;

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

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DATE_TOKENS", {
  enumerable: true,
  get: function get() {
    return _DATE_TOKENS.default;
  }
});
Object.defineProperty(exports, "DATE_UNITS", {
  enumerable: true,
  get: function get() {
    return _DATE_UNITS.default;
  }
});
Object.defineProperty(exports, "MONTHS", {
  enumerable: true,
  get: function get() {
    return _MONTHS.default;
  }
});
Object.defineProperty(exports, "WEEKDAYS", {
  enumerable: true,
  get: function get() {
    return _WEEKDAYS.default;
  }
});

var _DATE_TOKENS = _interopRequireDefault(__webpack_require__(/*! ./DATE_TOKENS.js */ "./src/constants/DATE_TOKENS.js"));

var _DATE_UNITS = _interopRequireDefault(__webpack_require__(/*! ./DATE_UNITS.js */ "./src/constants/DATE_UNITS.js"));

var _MONTHS = _interopRequireDefault(__webpack_require__(/*! ./MONTHS.js */ "./src/constants/MONTHS.js"));

var _WEEKDAYS = _interopRequireDefault(__webpack_require__(/*! ./WEEKDAYS.js */ "./src/constants/WEEKDAYS.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ "./src/date/index.js":
/*!***************************!*\
  !*** ./src/date/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
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
Object.defineProperty(exports, "getWeek", {
  enumerable: true,
  get: function get() {
    return _getWeek.default;
  }
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function get() {
    return _is.default;
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

var _diffDate = _interopRequireDefault(__webpack_require__(/*! ./diffDate.js */ "./src/date/diffDate.js"));

var _formatDateTime = _interopRequireDefault(__webpack_require__(/*! ./formatDateTime.js */ "./src/date/formatDateTime.js"));

var _getWeek = _interopRequireDefault(__webpack_require__(/*! ./getWeek.js */ "./src/date/getWeek.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is.js */ "./src/date/is.js"));

var _isFutureDate = _interopRequireDefault(__webpack_require__(/*! ./isFutureDate.js */ "./src/date/isFutureDate.js"));

var _isValid = _interopRequireDefault(__webpack_require__(/*! ./isValid.js */ "./src/date/isValid.js"));

var _toDay = _interopRequireDefault(__webpack_require__(/*! ./toDay.js */ "./src/date/toDay.js"));

var _toHour = _interopRequireDefault(__webpack_require__(/*! ./toHour.js */ "./src/date/toHour.js"));

var _toMinutes = _interopRequireDefault(__webpack_require__(/*! ./toMinutes.js */ "./src/date/toMinutes.js"));

var _toSeconds = _interopRequireDefault(__webpack_require__(/*! ./toSeconds.js */ "./src/date/toSeconds.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
Object.defineProperty(exports, "array", {
  enumerable: true,
  get: function get() {
    return _array.default;
  }
});
Object.defineProperty(exports, "boolean", {
  enumerable: true,
  get: function get() {
    return _boolean.default;
  }
});
Object.defineProperty(exports, "constants", {
  enumerable: true,
  get: function get() {
    return _constants.default;
  }
});
Object.defineProperty(exports, "date", {
  enumerable: true,
  get: function get() {
    return _date.default;
  }
});
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function get() {
    return _map.default;
  }
});
Object.defineProperty(exports, "monads", {
  enumerable: true,
  get: function get() {
    return _monads.default;
  }
});
Object.defineProperty(exports, "null", {
  enumerable: true,
  get: function get() {
    return _null.default;
  }
});
Object.defineProperty(exports, "number", {
  enumerable: true,
  get: function get() {
    return _number.default;
  }
});
Object.defineProperty(exports, "object", {
  enumerable: true,
  get: function get() {
    return _object.default;
  }
});
Object.defineProperty(exports, "set", {
  enumerable: true,
  get: function get() {
    return _set.default;
  }
});
Object.defineProperty(exports, "string", {
  enumerable: true,
  get: function get() {
    return _string.default;
  }
});
Object.defineProperty(exports, "undefined", {
  enumerable: true,
  get: function get() {
    return _undefined.default;
  }
});
Object.defineProperty(exports, "util", {
  enumerable: true,
  get: function get() {
    return _util.default;
  }
});

var _array = _interopRequireDefault(__webpack_require__(/*! ./array */ "./src/array/index.js"));

var _boolean = _interopRequireDefault(__webpack_require__(/*! ./boolean */ "./src/boolean/index.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! ./constants */ "./src/constants/index.js"));

var _date = _interopRequireDefault(__webpack_require__(/*! ./date */ "./src/date/index.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./map */ "./src/map/index.js"));

var _monads = _interopRequireDefault(__webpack_require__(/*! ./monads */ "./src/monads/index.js"));

var _null = _interopRequireDefault(__webpack_require__(/*! ./null */ "./src/null/index.js"));

var _number = _interopRequireDefault(__webpack_require__(/*! ./number */ "./src/number/index.js"));

var _object = _interopRequireDefault(__webpack_require__(/*! ./object */ "./src/object/index.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! ./set */ "./src/set/index.js"));

var _string = _interopRequireDefault(__webpack_require__(/*! ./string */ "./src/string/index.js"));

var _undefined = _interopRequireDefault(__webpack_require__(/*! ./undefined */ "./src/undefined/index.js"));

var _util = _interopRequireDefault(__webpack_require__(/*! ./util */ "./src/util/index.js"));

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

/***/ "./src/map/index.js":
/*!**************************!*\
  !*** ./src/map/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "filter", {
  enumerable: true,
  get: function get() {
    return _filter.default;
  }
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function get() {
    return _is.default;
  }
});
Object.defineProperty(exports, "keys", {
  enumerable: true,
  get: function get() {
    return _keys.default;
  }
});
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function get() {
    return _map.default;
  }
});

var _filter = _interopRequireDefault(__webpack_require__(/*! ./filter.js */ "./src/map/filter.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is.js */ "./src/map/is.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! ./keys.js */ "./src/map/keys.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./map.js */ "./src/map/map.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ "./src/monads/index.js":
/*!*****************************!*\
  !*** ./src/monads/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
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

var _Just = _interopRequireDefault(__webpack_require__(/*! ./Just.js */ "./src/monads/Just.js"));

var _Maybe = _interopRequireDefault(__webpack_require__(/*! ./Maybe.js */ "./src/monads/Maybe.js"));

var _Nothing = _interopRequireDefault(__webpack_require__(/*! ./Nothing.js */ "./src/monads/Nothing.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/null/index.js":
/*!***************************!*\
  !*** ./src/null/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function get() {
    return _is.default;
  }
});

var _is = _interopRequireDefault(__webpack_require__(/*! ./is.js */ "./src/null/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/null/is.js":
/*!************************!*\
  !*** ./src/null/is.js ***!
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
 * Created by dierickx.len on 03/02/2019
 */
var _default = (0, _is.default)('null');

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

/***/ "./src/number/index.js":
/*!*****************************!*\
  !*** ./src/number/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "add", {
  enumerable: true,
  get: function get() {
    return _add.default;
  }
});
Object.defineProperty(exports, "divide", {
  enumerable: true,
  get: function get() {
    return _divide.default;
  }
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function get() {
    return _is.default;
  }
});
Object.defineProperty(exports, "isNan", {
  enumerable: true,
  get: function get() {
    return _isNan.default;
  }
});
Object.defineProperty(exports, "multiply", {
  enumerable: true,
  get: function get() {
    return _multiply.default;
  }
});
Object.defineProperty(exports, "sum", {
  enumerable: true,
  get: function get() {
    return _sum.default;
  }
});

var _add = _interopRequireDefault(__webpack_require__(/*! ./add.js */ "./src/number/add.js"));

var _divide = _interopRequireDefault(__webpack_require__(/*! ./divide.js */ "./src/number/divide.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is.js */ "./src/number/is.js"));

var _isNan = _interopRequireDefault(__webpack_require__(/*! ./isNan.js */ "./src/number/isNan.js"));

var _multiply = _interopRequireDefault(__webpack_require__(/*! ./multiply.js */ "./src/number/multiply.js"));

var _sum = _interopRequireDefault(__webpack_require__(/*! ./sum.js */ "./src/number/sum.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ "./src/number/sum.js":
/*!***************************!*\
  !*** ./src/number/sum.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _add = _interopRequireDefault(__webpack_require__(/*! ./add */ "./src/number/add.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the sum of the numbers in an array
 *
 * @function
 * @since v1.0.2
 * @sig [Number] -> Number
 * @param {Array} a
 * @return {Number}
 **/
var _default = (0, _curry.default)(function sum(a) {
  return a.reduce(_add.default, 0);
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

/***/ "./src/object/index.js":
/*!*****************************!*\
  !*** ./src/object/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "equals", {
  enumerable: true,
  get: function get() {
    return _equals.default;
  }
});
Object.defineProperty(exports, "filter", {
  enumerable: true,
  get: function get() {
    return _filter.default;
  }
});
Object.defineProperty(exports, "fold", {
  enumerable: true,
  get: function get() {
    return _fold.default;
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
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function get() {
    return _is.default;
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
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function get() {
    return _map.default;
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function get() {
    return _merge.default;
  }
});
Object.defineProperty(exports, "omit", {
  enumerable: true,
  get: function get() {
    return _omit.default;
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

var _equals = _interopRequireDefault(__webpack_require__(/*! ./equals.js */ "./src/object/equals.js"));

var _filter = _interopRequireDefault(__webpack_require__(/*! ./filter.js */ "./src/object/filter.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! ./fold.js */ "./src/object/fold.js"));

var _has = _interopRequireDefault(__webpack_require__(/*! ./has.js */ "./src/object/has.js"));

var _hasIn = _interopRequireDefault(__webpack_require__(/*! ./hasIn.js */ "./src/object/hasIn.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is.js */ "./src/object/is.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! ./keys.js */ "./src/object/keys.js"));

var _keysIn = _interopRequireDefault(__webpack_require__(/*! ./keysIn.js */ "./src/object/keysIn.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./map.js */ "./src/object/map.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./merge.js */ "./src/object/merge.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! ./omit.js */ "./src/object/omit.js"));

var _path = _interopRequireDefault(__webpack_require__(/*! ./path.js */ "./src/object/path.js"));

var _pick = _interopRequireDefault(__webpack_require__(/*! ./pick.js */ "./src/object/pick.js"));

var _prop = _interopRequireDefault(__webpack_require__(/*! ./prop.js */ "./src/object/prop.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ "./src/set/filter.js":
/*!***************************!*\
  !*** ./src/set/filter.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// TODO

/***/ }),

/***/ "./src/set/index.js":
/*!**************************!*\
  !*** ./src/set/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "filter", {
  enumerable: true,
  get: function get() {
    return _filter.default;
  }
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function get() {
    return _is.default;
  }
});

var _filter = _interopRequireDefault(__webpack_require__(/*! ./filter.js */ "./src/set/filter.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is.js */ "./src/set/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/set/is.js":
/*!***********************!*\
  !*** ./src/set/is.js ***!
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
var _default = (0, _is.default)('Set');

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

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "concat", {
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
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function get() {
    return _is.default;
  }
});
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function get() {
    return _map.default;
  }
});

var _concat = _interopRequireDefault(__webpack_require__(/*! ./concat.js */ "./src/string/concat.js"));

var _formatString = _interopRequireDefault(__webpack_require__(/*! ./formatString.js */ "./src/string/formatString.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is.js */ "./src/string/is.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./map.js */ "./src/string/map.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ "./src/undefined/index.js":
/*!********************************!*\
  !*** ./src/undefined/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function get() {
    return _is.default;
  }
});

var _is = _interopRequireDefault(__webpack_require__(/*! ./is.js */ "./src/undefined/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/undefined/is.js":
/*!*****************************!*\
  !*** ./src/undefined/is.js ***!
  \*****************************/
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
 * Created by dierickx.len on 03/02/2019
 */
var _default = (0, _is.default)('undefined');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/addIndex.js":
/*!******************************!*\
  !*** ./src/util/addIndex.js ***!
  \******************************/
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
 * @function addIndex
 * @summary Adds a specified index to iterate a collection
 * @description The addIndex function is notnecessary for the map functions in the fun.js library as they behave the sa,e as the native javascript functions
 * @param {Function} f Iterator function
 * @param {Function} g Function to which to add the index
 * @param {Array} a The array on which to work
 * @since 1.0.2
 */
var _default = (0, _curry.default)(function addIndex(f, g, a) {
  var i = 0;
  return f(function (v) {
    return g(v, i++);
  }, a);
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

/***/ "./src/util/apply.js":
/*!***************************!*\
  !*** ./src/util/apply.js ***!
  \***************************/
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
 * @function apply
 * @description The apply() method calls a function with the given arguments provided as an array, and the function as context.
 * @param fn
 * @param args
 * @return {*}
 * @example
 *
 * var a = apply(function () {
 *      return [].slice.call(arguments).map(x => x * 2)
 *   })
 * a([1, 2, 3])
 * // [2, 4, 6]
 */
var _default = (0, _curry.default)(function apply(fn, args) {
  return fn.apply(fn, args);
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/complement.js":
/*!********************************!*\
  !*** ./src/util/complement.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lift = _interopRequireDefault(__webpack_require__(/*! ./lift */ "./src/util/lift.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not */ "./src/util/not.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function complement
 * @description Lifts a predicate function and returns the complement
 * @param {Function} A predicate function
 * @return {Function}
 * @see not
 * @see lift
 * @since v1.0.2
 * @example
 *
 * const isNotEmpty = complement(isEmpty)
 * isNotEmpty([]) // false
 * isNotEmpty({'a' : 1}) // true
 *
 * complement(Maybe.of(false)) // true
 * complement(Maybe.of(true)) // false
 */
var complement = (0, _lift.default)(_not.default);
var _default = complement;
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

/***/ "./src/util/cond.js":
/*!**************************!*\
  !*** ./src/util/cond.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cond;

/**
 * @function cond
 * @param conds
 * @returns {Function}
 */
function cond(conds) {
  return function (value) {
    for (var i = 0; i < conds.length; i++) {
      if (conds[i][0](value)) return conds[i][1](value);
    }
  };
}

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

/***/ "./src/util/filter.js":
/*!****************************!*\
  !*** ./src/util/filter.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/util/curry.js"));

var _filter = _interopRequireDefault(__webpack_require__(/*! ../array/filter */ "./src/array/filter.js"));

var _filter2 = _interopRequireDefault(__webpack_require__(/*! ../object/filter */ "./src/object/filter.js"));

var _filter3 = _interopRequireDefault(__webpack_require__(/*! ../map/filter */ "./src/map/filter.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./src/util/type.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function filter
 * @description Autocurried fucntion that filters Objects, Arrays and Maps
 *
 */
// TODO
// import setFilter from '../set/filter'
var _default = (0, _curry.default)(function filter(fn, a) {
  switch ((0, _type.default)(a)) {
    // switch (Object.prototype.toString.call(a)) {
    // case 'Function':
    //   return curry(function () {
    //     return cb.call(this, a.apply(this, arguments))
    //   })
    case 'Object':
      return (0, _filter2.default)(fn, a);
    // case 'String':
    //   return stringMap(cb, a)

    case 'Map':
      return (0, _filter3.default)(fn, a);
    // case 'Set':
    //   return setFilter(fn, a)

    default:
      return (0, _filter.default)(fn, a);
  }
});

exports.default = _default;
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

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addIndex", {
  enumerable: true,
  get: function get() {
    return _addIndex.default;
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
Object.defineProperty(exports, "apply", {
  enumerable: true,
  get: function get() {
    return _apply.default;
  }
});
Object.defineProperty(exports, "complement", {
  enumerable: true,
  get: function get() {
    return _complement.default;
  }
});
Object.defineProperty(exports, "compose", {
  enumerable: true,
  get: function get() {
    return _compose.default;
  }
});
Object.defineProperty(exports, "cond", {
  enumerable: true,
  get: function get() {
    return _cond.default;
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
    return _equals.default;
  }
});
Object.defineProperty(exports, "exists", {
  enumerable: true,
  get: function get() {
    return _exists.default;
  }
});
Object.defineProperty(exports, "filter", {
  enumerable: true,
  get: function get() {
    return _filter.default;
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
    return _is.default;
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

var _addIndex = _interopRequireDefault(__webpack_require__(/*! ./addIndex.js */ "./src/util/addIndex.js"));

var _adjust = _interopRequireDefault(__webpack_require__(/*! ./adjust.js */ "./src/util/adjust.js"));

var _adjustWith = _interopRequireDefault(__webpack_require__(/*! ./adjustWith.js */ "./src/util/adjustWith.js"));

var _all = _interopRequireDefault(__webpack_require__(/*! ./all.js */ "./src/util/all.js"));

var _allPass = _interopRequireDefault(__webpack_require__(/*! ./allPass.js */ "./src/util/allPass.js"));

var _always = _interopRequireDefault(__webpack_require__(/*! ./always.js */ "./src/util/always.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! ./and.js */ "./src/util/and.js"));

var _any = _interopRequireDefault(__webpack_require__(/*! ./any.js */ "./src/util/any.js"));

var _anyPass = _interopRequireDefault(__webpack_require__(/*! ./anyPass.js */ "./src/util/anyPass.js"));

var _ap = _interopRequireDefault(__webpack_require__(/*! ./ap.js */ "./src/util/ap.js"));

var _apply = _interopRequireDefault(__webpack_require__(/*! ./apply.js */ "./src/util/apply.js"));

var _complement = _interopRequireDefault(__webpack_require__(/*! ./complement.js */ "./src/util/complement.js"));

var _compose = _interopRequireDefault(__webpack_require__(/*! ./compose.js */ "./src/util/compose.js"));

var _cond = _interopRequireDefault(__webpack_require__(/*! ./cond.js */ "./src/util/cond.js"));

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry.js */ "./src/util/curry.js"));

var _defaultTo = _interopRequireDefault(__webpack_require__(/*! ./defaultTo.js */ "./src/util/defaultTo.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty.js */ "./src/util/empty.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ./equals.js */ "./src/util/equals.js"));

var _exists = _interopRequireDefault(__webpack_require__(/*! ./exists.js */ "./src/util/exists.js"));

var _filter = _interopRequireDefault(__webpack_require__(/*! ./filter.js */ "./src/util/filter.js"));

var _findIndex = _interopRequireDefault(__webpack_require__(/*! ./findIndex.js */ "./src/util/findIndex.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! ./fold.js */ "./src/util/fold.js"));

var _identical = _interopRequireDefault(__webpack_require__(/*! ./identical.js */ "./src/util/identical.js"));

var _identity = _interopRequireDefault(__webpack_require__(/*! ./identity.js */ "./src/util/identity.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is.js */ "./src/util/is.js"));

var _isEmpty = _interopRequireDefault(__webpack_require__(/*! ./isEmpty.js */ "./src/util/isEmpty.js"));

var _lift = _interopRequireDefault(__webpack_require__(/*! ./lift.js */ "./src/util/lift.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./map.js */ "./src/util/map.js"));

var _max = _interopRequireDefault(__webpack_require__(/*! ./max.js */ "./src/util/max.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not.js */ "./src/util/not.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! ./or.js */ "./src/util/or.js"));

var _truthy = _interopRequireDefault(__webpack_require__(/*! ./truthy.js */ "./src/util/truthy.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type.js */ "./src/util/type.js"));

var _zip = _interopRequireDefault(__webpack_require__(/*! ./zip.js */ "./src/util/zip.js"));

var _zipWith = _interopRequireDefault(__webpack_require__(/*! ./zipWith.js */ "./src/util/zipWith.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4uanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1bi5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvX3ByaXZhdGUvY3VycnkxLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvZm9sZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L3RvLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS91bmlvbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9GLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9ib29sZWFuL1QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2Jvb2xlYW4vYm90aC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvY29uc3RhbnRzL0RBVEVfVE9LRU5TLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9jb25zdGFudHMvREFURV9VTklUUy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvY29uc3RhbnRzL01PTlRIUy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvY29uc3RhbnRzL1dFRUtEQVlTLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvZGlmZkRhdGUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvZm9ybWF0RGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvZ2V0V2Vlay5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pc0Z1dHVyZURhdGUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvaXNWYWxpZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b0RheS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b0hvdXIuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9NaW51dGVzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvU2Vjb25kcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21hcC9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21hcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbWFwL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tYXAva2V5cy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbWFwL21hcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbW9uYWRzL0p1c3QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9NYXliZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbW9uYWRzL05vdGhpbmcuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVsbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVsbC9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL2FkZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL2RpdmlkZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL2luZGV4LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL251bWJlci9pc05hbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL211bHRpcGx5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvc3VtLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZXF1YWxzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZmlsdGVyLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZm9sZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2hhcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2hhc0luLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9tZXJnZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L29taXQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9wYXRoLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvcGljay5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L3Byb3AuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3NldC9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3NldC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvc2V0L2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvY29uY2F0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvZm9ybWF0U3RyaW5nLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvc3RyaW5nL21hcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdW5kZWZpbmVkL2luZGV4LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91bmRlZmluZWQvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWRkSW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWRqdXN0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FkanVzdFdpdGguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWxsLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FsbFBhc3MuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWx3YXlzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FuZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbnkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYW55UGFzcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hcHBseS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9jb21wbGVtZW50LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2NvbXBvc2UuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvY29uZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9jdXJyeS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9kZWZhdWx0VG8uanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZXF1YWxzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2V4aXN0cy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZmluZEluZGV4LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2ZvbGQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvaWRlbnRpY2FsLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lkZW50aXR5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvbGlmdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvbWF4LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL25vdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9vci5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC90cnV0aHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvdHlwZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC96aXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvemlwV2l0aC5qcyJdLCJuYW1lcyI6WyJjdXJyeTEiLCJmbiIsImN1cnJpZWQiLCJhIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZXF1YWxzQXJyYXkiLCJ4IiwieSIsImkiLCJhcnJheUZpbHRlciIsInIiLCJwdXNoIiwiZm9sZCIsImNiIiwiaW5pdCIsImwiLCJtYXAiLCJBcnJheSIsInRvQXJyYXkiLCJhcHBseSIsInVuaW9uQXJyYXkiLCJhTCIsImFSIiwiZnJvbSIsIlNldCIsImNvbmNhdCIsImJvdGgiLCJmbjEiLCJmbjIiLCJfYm90aCIsIkRBVEVfVE9LRU5TIiwiREFURV9VTklUUyIsIm1pbGxpc2Vjb25kcyIsInNlY29uZHMiLCJtaW51dGVzIiwiaG91cnMiLCJkYXlzIiwid2Vla3MiLCJNT05USFMiLCJXRUVLREFZUyIsImRpZmZEYXRlIiwic3RhcnQiLCJlbmQiLCJEYXRlIiwiZ2V0VGltZSIsIlpFUk9TIiwibGFzdE4iLCJuIiwic3RyIiwic3Vic3RyaW5nIiwiZmlyc3ROIiwiZmlsbCIsImRpZ2l0cyIsIm1vZENlaWxpbmciLCJtb2QiLCJ2YWwiLCJ0b2tlbnMiLCJZWVlZIiwiZCIsImdldEZ1bGxZZWFyIiwiWVkiLCJNTU1NIiwiZ2V0TW9udGgiLCJNTU0iLCJNTSIsIk0iLCJ3Iiwid3ciLCJERCIsImdldERhdGUiLCJEIiwiZGRkZCIsImdldERheSIsImRkZCIsImRkIiwiSEgiLCJnZXRIb3VycyIsIkgiLCJoaCIsImgiLCJtbSIsImdldE1pbnV0ZXMiLCJtIiwic3MiLCJnZXRTZWNvbmRzIiwicyIsIkEiLCJTU1MiLCJnZXRNaWxsaXNlY29uZHMiLCJTUyIsIlMiLCJRIiwiTWF0aCIsImNlaWwiLCJzd2FwVG9rZW5XaXRoVmFsdWUiLCJkYXRlIiwidG9rZW4iLCJmb3JtYXREYXRlVGltZSIsImZvcm1hdCIsIm1hdGNoIiwiam9pbiIsImdldFdlZWsiLCJVVEMiLCJzZXRVVENEYXRlIiwiZ2V0VVRDRGF0ZSIsImdldFVUQ0RheSIsInllYXJTdGFydCIsImdldFVUQ0Z1bGxZZWFyIiwid2Vla05vIiwiaXNWYWxpZCIsImlzRmluaXRlIiwidmFsdWVPZiIsIm1hcEZpbHRlciIsIk1hcCIsIml0IiwiZW50cmllcyIsInJlc3VsdCIsIm5leHQiLCJkb25lIiwiayIsInZhbHVlIiwidiIsInNldCIsImtleXMiLCJmb3JFYWNoIiwiSnVzdCIsIl92YWx1ZSIsInByb3RvdHlwZSIsImlzSnVzdCIsImlzTm90aGluZyIsIk1heWJlIiwiX192YWx1ZSIsIm9mIiwiZ2V0T3JFbHNlIiwiZiIsImFwIiwiTm90aGluZyIsImFkZCIsImIiLCJkaXZpZGUiLCJpc05hbiIsImlzTmFOIiwibXVsdGlwbHkiLCJzdW0iLCJyZWR1Y2UiLCJrZXlYIiwia2V5WSIsIm9iamVjdEZpbHRlciIsIm8iLCJPYmplY3QiLCJoYXMiLCJwcm9wIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaGFzSW4iLCJtZXJnZSIsIm9iakwiLCJvYmpSIiwiYXNzaWduIiwia2V5Iiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsIm5hbWVzIiwiZmlsdGVyIiwiaW5kZXhPZiIsInBhdGgiLCJpZHgiLCJwIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwicGljayIsInByb3BzIiwiX2NvbmNhdCIsInNlcGFyYXRvciIsInNsaWNlIiwiZm9ybWF0U3RyaW5nIiwiYXJncyIsInNoaWZ0IiwicmVwbGFjZSIsImNoYXJBdCIsImFkZEluZGV4IiwiZyIsImFkanVzdCIsImFkanVzdFdpdGgiLCJwcmVkIiwiX2ZuIiwiYWxsIiwicmVzIiwiYWxsUGFzcyIsImNicyIsImFsd2F5cyIsImFuZCIsImFueSIsImFueVBhc3MiLCJpc0Z1bmN0aW9uIiwiZm5zIiwidmFscyIsImFjYyIsImNvbXBsZW1lbnQiLCJjb21wb3NlIiwiZnVucyIsIl9jb21wb3NlIiwiZnVuIiwiY29uZCIsImNvbmRzIiwiY3VycnkiLCJhcmdzbGVuIiwiY3JlYXRlUmVjdXJzZXIiLCJyZWN1cnNlIiwiX2FjYyIsImRlZmF1bHRUbyIsImVtcHR5IiwiY29uc3RydWN0b3IiLCJlcXVhbHMiLCJleGlzdHMiLCJmaW5kSW5kZXgiLCJ0eXBlTWFwIiwiaWRlbnRpY2FsIiwiaWRlbnRpdHkiLCJpcyIsIkN0b3IiLCJpc0VtcHR5IiwibGlmdCIsImxpZnRlZCIsIl9saWZ0IiwibWF4Iiwibm90Iiwib3IiLCJ0cnV0aHkiLCJ0eXBlIiwidG9TdHJpbmciLCJ6aXAiLCJfemlwV2l0aCIsInppcFdpdGgiLCJhcnIiLCJsZW4iLCJtaW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7O0FBT2UsU0FBU0EsTUFBVCxDQUFpQkMsRUFBakIsRUFBcUI7QUFDbEMsU0FBTyxTQUFTQyxPQUFULENBQWtCQyxDQUFsQixFQUFxQjtBQUMxQixXQUFPQyxTQUFTLENBQUND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QVA7QUFBZSxHQUFsRCxFQUFvREwsQ0FBcEQsRUFBdUR3SSxDQUF2RCxDQUFQO0FBQ0QsQ0FGYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGY7Ozs7QUFOQTs7Ozs7O2VBUWUsb0JBQU0sU0FBU2dHLE9BQVQsQ0FBa0I3TixFQUFsQixFQUFzQlgsQ0FBdEIsRUFBeUJ3SSxDQUF6QixFQUE0QjtBQUMvQyxNQUFNaUcsR0FBRyxHQUFHLEVBQVo7QUFDQSxNQUFNQyxHQUFHLEdBQUdoSixJQUFJLENBQUNpSixHQUFMLENBQVMzTyxDQUFDLENBQUNFLE1BQVgsRUFBbUJzSSxDQUFDLENBQUN0SSxNQUFyQixDQUFaO0FBQ0EsTUFBSUksQ0FBQyxHQUFHLENBQVI7O0FBQ0EsT0FBS0EsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHb08sR0FBaEIsRUFBcUJwTyxDQUFDLEVBQXRCLEVBQTBCO0FBQ3hCbU8sT0FBRyxDQUFDaE8sSUFBSixDQUFTRSxFQUFFLENBQUNYLENBQUMsQ0FBQ00sQ0FBRCxDQUFGLEVBQU9rSSxDQUFDLENBQUNsSSxDQUFELENBQVIsQ0FBWDtBQUNEOztBQUNELFNBQU9tTyxHQUFQO0FBQ0QsQ0FSYyxDIiwiZmlsZSI6ImZ1bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuLmpzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bi5qc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW4uanNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIFJldHVybnMgYSBjdXJyaWVkIGZ1bmN0aW9uIHdpdGggYXJpdHkgMVxuICogQGZ1bmN0aW9uIGN1cnJ5MVxuICogQHByaXZhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkxIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY3VycmllZCAoYSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAwXG4gICAgICA/IHRoaXNcbiAgICAgIDogZm4oYSlcbiAgfVxufVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGVxdWFsc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gZm9yIGRlZXAgY29tcGFyaXNvbiBvZiBhcnJheXNcbiAqIEBwYXJhbSB7YX0geCAtIE9iamVjdCB0byBjb21wYXJlIG9mIHR5cGUgYVxuICogQHBhcmFtIHthfSB5IC0gT2JqZWN0IHggdG8gY29tcGFyZSB3aXRoIG9iamVjdCB4XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL3V0aWwvZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHNBcnJheSAoeCwgeSkge1xuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vdChlcXVhbHMoeFtpXSwgeVtpXSkpKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGFycmF5RmlsdGVyXG4gKiBAcHJpdmF0ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFycmF5RmlsdGVyIChmbiwgYSkge1xuICB2YXIgciA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChmbihhW2ldKSkgci5wdXNoKGFbaV0pXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBtYXBwaW5nIG92ZXIgdGhlIHByb3ZpZGVkIGFycmF5IGFuZCBjYWxsaW5nIGFuIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2NiRnVuY3Rpb259IGNiIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gbW9kaWZ5IHRoZSBpdGVtXG4gKiBAcGFyYW0geyp9IGluaXQgLSBJbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBhIC0gQXJyYXkgd2l0aCBpdGVtcyB0byBtb2RpZnkgYnkgdGhlIGNiIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhbGlhcyByZWR1Y2VcbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBmb2xkKGFkZCwgMCwgWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IDNcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBjYkZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IHIgLSBBY2N1bXVsYXRvciB3aGljaCBhY2N1bXVsYXRlcyB0aGUgY2FsbGJhY2sncyByZXR1cm4gdmFsdWVzXG4gKiBAcGFyYW0geyp9IGl0ZW0gLSB0aGUgY3VycmVudCBlbGVtZW50IGJlaW5nIHByb2Nlc3NlZFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gdGhlIGluZGV5IG9mIHRoZSBpdGVtIGJlaW5nIHByb2Nlc3NlZFxuICogQHBhcmFtIHtBcnJheX0gYSAtIFRoZSBpbml0aWFsIGFycmF5XG4gKiBAcmV0dXJuIHsqfVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgbGV0IHIgPSBpbml0XG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciA9IGNiKHIsIGFbaV0sIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvLyBAY3JlYXRlLWluZGV4XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzIH0gZnJvbSAnLi9lcXVhbHMuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbHRlciB9IGZyb20gJy4vZmlsdGVyLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb2xkIH0gZnJvbSAnLi9mb2xkLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpcyB9IGZyb20gJy4vaXMuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hcCB9IGZyb20gJy4vbWFwLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0byB9IGZyb20gJy4vdG8uanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuaW9uIH0gZnJvbSAnLi91bmlvbi5qcydcbiIsIi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IE9iamVjdCB0byB2ZXJpZml5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzQXJyYXkoWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IHRydWVcbiAqL1xuXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0FycmF5JylcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIE1hcHMgb3ZlciBhbiBhcnJheSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoaWRlbnRpdHksIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzAsMiwzXVxuICogIGNvbnN0IGFkZDIgPSBhZGQoMilcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoYWRkMiwgWzAsMiwzXSlcbiAqICAvLyByZXN1bHQgPSBbMiw0LDVdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBjb25zdCByID0gbmV3IEFycmF5KGwpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltpXSA9IGNiKGFbaV0sIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiB0b0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQ29udmVydHMgdGhlIGlucHV0IHRvIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5TGlrZX0geCAtIE9iamVjdCB0byBjb252ZXJ0IHRvIGFuIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSB0b0FycmF5KFwic3RyaW5nXCIpXG4gKiAvLyByZXN1bHQgPSBbJ3MnLCd0JywncicsJ2knLCduJywnZyddXG4gKlxuICogZnVuY3Rpb24gKCkge1xuICogIGNvbnN0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cylcbiAqICBjb25zb2xlLmxvZyh0eXBlb2YgYXJncykgLy8gQXJyYXlcbiAqIH1cbiAqXG4gKiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0FycmF5ICh4KSB7XG4gIHJldHVybiB4Lmxlbmd0aCA9PT0gMSA/IFt4WzBdXSA6IEFycmF5LmFwcGx5KG51bGwsIHgpXG59O1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdW5pb25BcnJheVxuICogQGRlc2NyaXB0aW9uIE1lcmdlcyAyIGFycmF5c1xuICogQHBhcmFtIHtBcnJheX0gYUwgLSBBcnJheSB0byBtZXJnZVxuICogQHBhcmFtIHtBcnJheX0gYVIgLSBBcnJheSB0byBtZXJnZVxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gdW5pb25BcnJheShbMCwxLDJdLCBbMyw0LDVdKVxuICogLy8gcmVzdWx0ID0gWzAuMS4yLjMuNC41XVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHVuaW9uQXJyYXkgKGFMLCBhUikge1xuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFMLmNvbmNhdChhUikpKVxufSlcbiIsIi8qKlxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICpcbiAqIEBmdW5jdGlvbiBGXG4gKiBAZGVzY3JpcHRpb24gQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqKi9cbmltcG9ydCBhbHdheXMgZnJvbSAnLi4vdXRpbC9hbHdheXMnXG5cbmV4cG9ydCBkZWZhdWx0IGFsd2F5cyhmYWxzZSlcbiIsIi8qKlxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICpcbiAqIEBmdW5jdGlvbiBUXG4gKiBAZGVzY3JpcHRpb24gQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqKi9cbmltcG9ydCBhbHdheXMgZnJvbSAnLi4vdXRpbC9hbHdheXMnXG5cbmV4cG9ydCBkZWZhdWx0IGFsd2F5cyh0cnVlKVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgd2hlbiBib3RoIHByZWRpY2F0ZXMgcmV0dXJuIHRydWVcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuMSBBIHByZWRpY2F0ZSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4yIEEgcHJlZGljYXRlIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgbGlmdCBmcm9tICcuLi91dGlsL2xpZnQnXG5pbXBvcnQgYW5kIGZyb20gJy4uL3V0aWwvYW5kJ1xuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGJvdGggKGZuMSwgZm4yKSB7XG4gIHJldHVybiBpcygnRnVuY3Rpb24nKShmbjEpXG4gICAgPyBmdW5jdGlvbiBfYm90aCAoKSB7IHJldHVybiBmbjEuYXBwbHkodGhpcywgYXJndW1lbnRzKSAmJiBmbjIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9XG4gICAgOiBsaWZ0KGFuZCkoZm4xLCBmbjIpXG59KVxuIiwiLy8gQGNyZWF0ZS1pbmRleFxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEYgfSBmcm9tICcuL0YuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFQgfSBmcm9tICcuL1QuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvdGggfSBmcm9tICcuL2JvdGguanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzIH0gZnJvbSAnLi9pcy5qcydcbiIsIi8qKlxuICogQ3VycmllZCBmdW5jdGlvbiB0aGF0IHZlcmlmaWVzIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudCBpcyBhIGJvb2xlYW5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGlzXG4gKiBAZGVzY3JpcHRpb24gQ3VycmllZCBmdW5jdGlvbiB0aGF0IHZlcmlmaWVzIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudCBpcyBhIGJvb2xlYW5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7Kn0gSXRlbSB0byB2ZXJpZnlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0Jvb2xlYW4nKVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8vIGRhdGUvdGltZSByZWdleFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5leHBvcnQgY29uc3QgREFURV9UT0tFTlMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UXxZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGNvbnN0IERBVEVfVU5JVFMgPSB7XG4gIG1pbGxpc2Vjb25kczogMSxcbiAgc2Vjb25kczogMTAwMCxcbiAgbWludXRlczogNjAgKiAxMDAwLFxuICBob3VyczogNjAgKiA2MCAqIDEwMDAsXG4gIGRheXM6IDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gIHdlZWtzOiA3ICogMjQgKiA2MCAqIDYwICogMTAwMFxufVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBjb25zdCBNT05USFMgPSBbXG4gICdKYW51YXJ5JyxcbiAgJ0ZlYnJ1YXJ5JyxcbiAgJ01hcmNoJyxcbiAgJ0FwcmlsJyxcbiAgJ01heScsXG4gICdKdW5lJyxcbiAgJ0p1bHknLFxuICAnQXVndXN0JyxcbiAgJ1NlcHRlbWJlcicsXG4gICdPY3RvYmVyJyxcbiAgJ05vdmVtYmVyJyxcbiAgJ0RlY2VtYmVyJ1xuXVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgV0VFS0RBWVMgPSBbXG4gICdTdW5kYXknLFxuICAnTW9uZGF5JyxcbiAgJ1R1ZXNkYXknLFxuICAnV2VkbmVzZGF5JyxcbiAgJ1RodXJzZGF5JyxcbiAgJ0ZyaWRheScsXG4gICdTYXR1cmRheSdcbl1cbiIsIi8vIEBjcmVhdGUtaW5kZXhcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEQVRFX1RPS0VOUyB9IGZyb20gJy4vREFURV9UT0tFTlMuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIERBVEVfVU5JVFMgfSBmcm9tICcuL0RBVEVfVU5JVFMuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1PTlRIUyB9IGZyb20gJy4vTU9OVEhTLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXRUVLREFZUyB9IGZyb20gJy4vV0VFS0RBWVMuanMnXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBkaWZmRGF0ZVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiAyIGRhdGVzIGluIG1pbGxpc2Vjb25kXG4gKiBAcGFyYW0ge0RhdGV9IHN0YXJ0IC0gU3RhcnQgZGF0ZVxuICogQHBhcmFtIHtEYXRlfSBlbmQgLSBFbmQgZGF0ZVxuICogQHJldHVybiB7bnVtYmVyfSBSRXR1cm4gdGhlIGRpZmZlcmVuY2UgaW4gbWlsbGlzZWNvbmRzXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBkaWZmRGF0ZSAoc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKG5ldyBEYXRlKHN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShlbmQpLmdldFRpbWUoKSlcbn0pXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDIwLzAxLzIwMTcuXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGlzVmFsaWREYXRlIGZyb20gJy4vaXNWYWxpZCdcbmltcG9ydCBnZXRXZWVrIGZyb20gJy4vZ2V0V2VlaydcbmltcG9ydCB7IFdFRUtEQVlTIH0gZnJvbSAnLi4vY29uc3RhbnRzL1dFRUtEQVlTJ1xuaW1wb3J0IHsgTU9OVEhTIH0gZnJvbSAnLi4vY29uc3RhbnRzL01PTlRIUydcbmltcG9ydCB7IERBVEVfVE9LRU5TIH0gZnJvbSAnLi4vY29uc3RhbnRzL0RBVEVfVE9LRU5TJ1xuXG4vLyB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgdGhlIGRhdGUgZm9ybWF0dGluZ1xuY29uc3QgWkVST1MgPSAnMDAwMDAwMDAnXG5jb25zdCBsYXN0TiA9IGN1cnJ5KChuLCBzdHIpID0+IHN0ci5zdWJzdHJpbmcoc3RyLmxlbmd0aCAtIG4sIHN0ci5sZW5ndGgpKVxuY29uc3QgZmlyc3ROID0gY3VycnkoKG4sIHN0cikgPT4gc3RyLnN1YnN0cmluZygwLCBuKSlcbmNvbnN0IGZpbGwgPSBjdXJyeSgoZGlnaXRzLCBuKSA9PiBsYXN0TihkaWdpdHMsIFpFUk9TICsgbikpXG5cbmNvbnN0IG1vZENlaWxpbmcgPSAobW9kLCB2YWwpID0+IHZhbCAlIG1vZCB8fCBtb2RcblxuLy8gdG9rZW5zIG1hcCB0byBnZXQgcGFydHMgb2YgdGhlIGRhdGUgL3RpbWVcbmNvbnN0IHRva2VucyA9IHtcbiAgWVlZWTogZCA9PiBmaWxsKDQsIGQuZ2V0RnVsbFllYXIoKSksXG4gIFlZOiBkID0+IGxhc3ROKDIsIGZpbGwoNCwgZC5nZXRGdWxsWWVhcigpKSksXG4gIE1NTU06IGQgPT4gTU9OVEhTW2QuZ2V0TW9udGgoKV0sXG4gIE1NTTogZCA9PiBmaXJzdE4oMywgTU9OVEhTW2QuZ2V0TW9udGgoKV0pLFxuICBNTTogZCA9PiBmaWxsKDIsIGQuZ2V0TW9udGgoKSArIDEpLFxuICBNOiBkID0+IGQuZ2V0TW9udGgoKSArIDEsXG4gIHc6IGQgPT4gZ2V0V2VlayhkKSxcbiAgd3c6IGQgPT4gZmlsbCgyLCBnZXRXZWVrKGQpKSxcbiAgREQ6IGQgPT4gZmlsbCgyLCBkLmdldERhdGUoKSksXG4gIEQ6IGQgPT4gZC5nZXREYXRlKCksXG4gIGRkZGQ6IGQgPT4gV0VFS0RBWVNbZC5nZXREYXkoKV0sXG4gIGRkZDogZCA9PiBmaXJzdE4oMywgV0VFS0RBWVNbZC5nZXREYXkoKV0pLFxuICBkZDogZCA9PiBmaXJzdE4oMiwgV0VFS0RBWVNbZC5nZXREYXkoKV0pLFxuICBkOiBkID0+IGQuZ2V0RGF5KCksXG4gIEhIOiBkID0+IGZpbGwoMiwgZC5nZXRIb3VycygpKSxcbiAgSDogZCA9PiBkLmdldEhvdXJzKCksXG4gIGhoOiBkID0+IGZpbGwoMiwgbW9kQ2VpbGluZygxMiwgZC5nZXRIb3VycygpKSksXG4gIGg6IGQgPT4gbW9kQ2VpbGluZygxMiwgZC5nZXRIb3VycygpKSxcbiAgbW06IGQgPT4gZmlsbCgyLCBkLmdldE1pbnV0ZXMoKSksXG4gIG06IGQgPT4gZC5nZXRNaW51dGVzKCksXG4gIHNzOiBkID0+IGZpbGwoMiwgZC5nZXRTZWNvbmRzKCkpLFxuICBzOiBkID0+IGQuZ2V0U2Vjb25kcygpLFxuICBBOiBkID0+IGQuZ2V0SG91cnMoKSA+IDExID8gJ1BNJyA6ICdBTScsXG4gIGE6IGQgPT4gZC5nZXRIb3VycygpID4gMTEgPyAncG0nIDogJ2FtJyxcbiAgU1NTOiBkID0+IGZpbGwoMywgZC5nZXRNaWxsaXNlY29uZHMoKSksXG4gIFNTOiBkID0+IGZpcnN0TigyLCBmaWxsKDMsIGQuZ2V0TWlsbGlzZWNvbmRzKCkpKSxcbiAgUzogZCA9PiBmaXJzdE4oMSwgZmlsbCgzLCBkLmdldE1pbGxpc2Vjb25kcygpKSksXG4gIFE6IGQgPT4gTWF0aC5jZWlsKChkLmdldE1vbnRoKCkgKyAxKSAvIDMpXG59XG5cbi8vIG1hcCB0aGlzIGZ1bmN0aW9uIHRvIGdldCB0aGUgYWN0dWFsIHRpbWUvZGF0ZSB2YWx1ZSBmb3IgZWFjaCB0b2tlblxuY29uc3Qgc3dhcFRva2VuV2l0aFZhbHVlID0gY3VycnkoKGRhdGUsIHRva2VuKSA9PiB7XG4gIHJldHVybiB0b2tlbnNbdG9rZW5dID8gdG9rZW5zW3Rva2VuXShkYXRlKSA6IHRva2VuXG59KVxuXG4vKipcbiAqIEBmdW5jdGlvbiBmb3JtYXREYXRlVGltZVxuICogQGRlc2NyaXB0aW9uIEZvcm1hdHMgYSBkYXRlIG9iamVjdCB1c2luZyBhIGZvcm1hdCBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgLSBGb3JtYXQgZGF0ZSBzdHJpbmdcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZSAtIERhdGUgb2JqZWN0IHRvIGZvcm1hdFxuICogQHJldHVybiB7c3RyaW5nfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZVRpbWUoJ0RELU1NLVlZWVknLCBuZXcgRGF0ZSgnMTk5OS0xMi0zMScpKVxuICogY29uc29sZS5sb2coZm9ybWF0dGVkRGF0ZSkgLy8gMzEtMTItMTk5OVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb3JtYXREYXRlVGltZSAoZm9ybWF0LCBkYXRlKSB7XG4gIC8vIGNoZWNrIGZvciB2YWxpZCBkYXRlXG4gIGlmICghaXNWYWxpZERhdGUoZGF0ZSkpIHJldHVybiAnSW52YWxpZCBEYXRlJyAvLyByZXR1cm4gc3RyaW5nXG4gIHJldHVybiBmb3JtYXQubWF0Y2goREFURV9UT0tFTlMpLm1hcChzd2FwVG9rZW5XaXRoVmFsdWUoZGF0ZSkpLmpvaW4oJycpIC8vIHJldHVybiBqb2luZWQgc3RyaW5nXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZ2V0V2Vla1xuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHdlZWsgbnVtYmVyIGJhc2VkIG9uIGEgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIGRcbiAqIEByZXR1cm5zIHtudW1iZXJbXX1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGdldFdlZWsgKGQpIHtcbiAgLy8gQ29weSBkYXRlIHNvIGRvbid0IG1vZGlmeSBvcmlnaW5hbFxuICBkID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIGQuZ2V0RGF0ZSgpKSlcbiAgLy8gU2V0IHRvIG5lYXJlc3QgVGh1cnNkYXk6IGN1cnJlbnQgZGF0ZSArIDQgLSBjdXJyZW50IGRheSBudW1iZXJcbiAgLy8gTWFrZSBTdW5kYXkncyBkYXkgbnVtYmVyIDdcbiAgZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpICsgNCAtIChkLmdldFVUQ0RheSgpIHx8IDcpKVxuICAvLyBHZXQgZmlyc3QgZGF5IG9mIHllYXJcbiAgbGV0IHllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpXG5cbiAgLy8gQ2FsY3VsYXRlIGZ1bGwgd2Vla3MgdG8gbmVhcmVzdCBUaHVyc2RheVxuICBsZXQgd2Vla05vID0gTWF0aC5jZWlsKCgoKGQgLSB5ZWFyU3RhcnQpIC8gODY0MDAwMDApICsgMSkgLyA3KVxuXG4gIC8vIFJldHVybiBhcnJheSBvZiB5ZWFyIGFuZCB3ZWVrIG51bWJlclxuICByZXR1cm4gW2QuZ2V0VVRDRnVsbFllYXIoKSwgd2Vla05vXVxufSlcbiIsIi8vIEBjcmVhdGUtaW5kZXhcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaWZmRGF0ZSB9IGZyb20gJy4vZGlmZkRhdGUuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvcm1hdERhdGVUaW1lIH0gZnJvbSAnLi9mb3JtYXREYXRlVGltZS5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0V2VlayB9IGZyb20gJy4vZ2V0V2Vlay5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXMgfSBmcm9tICcuL2lzLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0Z1dHVyZURhdGUgfSBmcm9tICcuL2lzRnV0dXJlRGF0ZS5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNWYWxpZCB9IGZyb20gJy4vaXNWYWxpZC5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9EYXkgfSBmcm9tICcuL3RvRGF5LmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0hvdXIgfSBmcm9tICcuL3RvSG91ci5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9NaW51dGVzIH0gZnJvbSAnLi90b01pbnV0ZXMuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvU2Vjb25kcyB9IGZyb20gJy4vdG9TZWNvbmRzLmpzJ1xuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ0RhdGUnKVxyXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDA5LzAzLzIwMTcuXG4gKi9cbmltcG9ydCBkaWZmRGF0ZSBmcm9tICcuL2RpZmZEYXRlJ1xuXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4ge1xuICByZXR1cm4gZGlmZkRhdGUobmV3IERhdGUoKSkoZCkgPCAwXG59XG4iLCIvKipcbiAqXG4gKi9cbmltcG9ydCBpc0RhdGUgZnJvbSAnLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZCAoeCkge1xuICAvLyBub2luc3BlY3Rpb24gSlNDaGVja0Z1bmN0aW9uU2lnbmF0dXJlc1xuICByZXR1cm4gaXNEYXRlKHgpICYmIGlzRmluaXRlKHgudmFsdWVPZigpKVxufTtcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyA4NjQwMDAwMCAvLyAyNCo2MCo2MCoxMDAwID0gODY0MDAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDM2MDAwMDAgLy8gNjAqNjAqMTAwMCA9IDM2MDAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDYwMDAwIC8vIDYwKjEwMDAgPSA2MDAwMFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gMTAwMFxyXG4iLCIvLyBAY3JlYXRlLWluZGV4XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyYXkgfSBmcm9tICcuL2FycmF5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBib29sZWFuIH0gZnJvbSAnLi9ib29sZWFuJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb25zdGFudHMgfSBmcm9tICcuL2NvbnN0YW50cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGF0ZSB9IGZyb20gJy4vZGF0ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwIH0gZnJvbSAnLi9tYXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1vbmFkcyB9IGZyb20gJy4vbW9uYWRzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBudWxsIH0gZnJvbSAnLi9udWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBudW1iZXIgfSBmcm9tICcuL251bWJlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb2JqZWN0IH0gZnJvbSAnLi9vYmplY3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNldCB9IGZyb20gJy4vc2V0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHJpbmcgfSBmcm9tICcuL3N0cmluZydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5kZWZpbmVkIH0gZnJvbSAnLi91bmRlZmluZWQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHV0aWwgfSBmcm9tICcuL3V0aWwnXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBtYXBGaWx0ZXJcbiAqIEBwcml2YXRlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwRmlsdGVyIChmbiwgbSkge1xuICBsZXQgciA9IG5ldyBNYXAoKVxuXG4gIGxldCBpdCA9IG0uZW50cmllcygpXG4gIGxldCByZXN1bHQgPSBpdC5uZXh0KClcblxuICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgY29uc3QgayA9IHJlc3VsdC52YWx1ZVswXVxuICAgIGNvbnN0IHYgPSByZXN1bHQudmFsdWVbMV1cbiAgICBpZiAoZm4oaywgdikpIHIuc2V0KGssIHYpXG4gICAgcmVzdWx0ID0gaXQubmV4dCgpXG4gIH1cblxuICAvLyBMaW1pdGVkIGJyb3dzZXIgc3VwcG9ydFxuICAvLyBtLmZvckVhY2goKHYsIGspID0+IHtcbiAgLy8gICBpZiAoZm4oaywgdikpIHIuc2V0KGssIHYpXG4gIC8vIH0pXG5cbiAgLy8gYmFiZWwgdHJhbnNwaWxlIGlzc3Vlc1xuICAvLyBmb3IgKGNvbnN0IFtrLCB2XSBvZiBtLmVudHJpZXMoKSkge1xuICAvL1xuICAvLyB9XG4gIHJldHVybiByXG59KVxuIiwiLy8gQGNyZWF0ZS1pbmRleFxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbHRlciB9IGZyb20gJy4vZmlsdGVyLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpcyB9IGZyb20gJy4vaXMuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleXMgfSBmcm9tICcuL2tleXMuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hcCB9IGZyb20gJy4vbWFwLmpzJ1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ01hcCcpXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIG93biBrZXlzIG9mIGFuIE1hcCBhcyBhbiBBcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IFtiXVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XG4gIHJldHVybiBhLmtleXMoKVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgTWFwIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge01hcH0gYVxuICogQHJldHVybiB7TWFwfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vdXRpbC9lbXB0eSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBjb25zdCByID0gZW1wdHkoYSlcbiAgYS5mb3JFYWNoKCh2LCBrLCBtYXApID0+IHtcbiAgICByLnNldChrLCBjYih2LCBrLCBtYXApKVxuICB9KVxuICByZXR1cm4gclxufSlcbiIsImxldCBKdXN0ID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl92YWx1ZSA9IHZhbFxuICByZXR1cm4gdGhpc1xufVxuXG5KdXN0LnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5KdXN0LnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBKdXN0XG4iLCJpbXBvcnQgSnVzdCBmcm9tICcuL0p1c3QnXG5pbXBvcnQgTm90aGluZyBmcm9tICcuL05vdGhpbmcnXG5cbmxldCBNYXliZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgdGhpcy5fX3ZhbHVlID0gdmFsXG59XG5cbk1heWJlLm9mID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgTWF5YmUpIHJldHVybiB2YWxcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBNYXliZSkge1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbFxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcmV0dXJuIG5ldyBNYXliZSh2YWwpXG59XG5cbk1heWJlLnByb3RvdHlwZS5nZXRPckVsc2UgPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gdGhpcy5pc05vdGhpbmcoKSA/IG4gOiB0aGlzLl9fdmFsdWVcbn1cblxuTWF5YmUucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gIGlmICh0aGlzLmlzTm90aGluZygpKSB7XG4gICAgcmV0dXJuIE1heWJlLm9mKG51bGwpXG4gIH1cbiAgcmV0dXJuIE1heWJlLm9mKGYodGhpcy5fX3ZhbHVlKSlcbn1cblxuTWF5YmUucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKG0pIHtcbiAgcmV0dXJuIG0ubWFwKHRoaXMuX192YWx1ZSlcbn1cblxuTWF5YmUucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICh0aGlzLl9fdmFsdWUgPT0gbnVsbClcbn1cblxuTWF5YmUucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICF0aGlzLmlzTm90aGluZygpXG59XG5cbk1heWJlLnByb3RvdHlwZS5Ob3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IE5vdGhpbmcoKVxufVxuXG5NYXliZS5wcm90b3R5cGUuSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBKdXN0KHRoaXMuX3ZhbHVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXliZVxuIiwibGV0IE5vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG59XG5cbk5vdGhpbmcucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZhbHNlXG59XG5Ob3RoaW5nLnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGhpbmdcbiIsIi8vIEBjcmVhdGUtaW5kZXhcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBKdXN0IH0gZnJvbSAnLi9KdXN0LmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXliZSB9IGZyb20gJy4vTWF5YmUuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vdGhpbmcgfSBmcm9tICcuL05vdGhpbmcuanMnXG4iLCIvLyBAY3JlYXRlLWluZGV4XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXMgfSBmcm9tICcuL2lzLmpzJ1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMy8wMi8yMDE5XG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnbnVsbCcpXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgMiBhcmd1bWVudHNcbiAqXG4gKiBAZnVuY3Rpb24gYWRkXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgc3VtIG9mIHRoZSAyIGFyZ3VtZW50c1xuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWRkIChhLCBiKSB7XG4gIHJldHVybiArYSArICtiXG59KVxuIiwiLyoqXG4gKlxuICpcbiAqIEBmdW5jdGlvbiBkaXZpZGVcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkaXZpc2lvbiBvZiB0aGUgMiBhcmd1bWVudHNcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXG4gKiBAcGFyYW0ge051bWJlcn0gYlxuICogQHJldHVybiB7TnVtYmVyfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGRpdmlkZSAoYSwgYikge1xuICByZXR1cm4gK2EgLyArYlxufSlcbiIsIi8vIEBjcmVhdGUtaW5kZXhcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGQgfSBmcm9tICcuL2FkZC5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGl2aWRlIH0gZnJvbSAnLi9kaXZpZGUuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzIH0gZnJvbSAnLi9pcy5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOYW4gfSBmcm9tICcuL2lzTmFuLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtdWx0aXBseSB9IGZyb20gJy4vbXVsdGlwbHkuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN1bSB9IGZyb20gJy4vc3VtLmpzJ1xuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ051bWJlcicpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBpc05hTlxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiBudW1iZXIgaXMgTkFOXG5cbiAqL1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXMnXG5pbXBvcnQgYW5kIGZyb20gJy4uL3V0aWwvYW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc05hbiAoeCkge1xuICByZXR1cm4gYW5kKGlzTnVtYmVyKHgpLCBpc05hTih4KSlcbn07XG4iLCIvKipcbiAqIFJldHVybnMgdGhlIHByb2R1Y3Qgb2YgdGhlIDIgYXJndW1lbnRzXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxuICogQHBhcmFtIHtOdW1iZXJ9IGJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtdWx0aXBseSAoYSwgYikge1xuICByZXR1cm4gK2EgKiArYlxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSBudW1iZXJzIGluIGFuIGFycmF5XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIFtOdW1iZXJdIC0+IE51bWJlclxuICogQHBhcmFtIHtBcnJheX0gYVxuICogQHJldHVybiB7TnVtYmVyfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgYWRkIGZyb20gJy4vYWRkJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBzdW0gKGEpIHtcbiAgcmV0dXJuIGEucmVkdWNlKGFkZCwgMClcbn0pXG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuLi91dGlsL2V4aXN0cydcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL3V0aWwvZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoeCwgeSkgPT4ge1xuICBmb3IgKGxldCBrZXlYIGluIHgpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXG4gICAgaWYgKG5vdChlcXVhbHMoeFtrZXlYXSwgeVtrZXlYXSkpKSByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZvciAobGV0IGtleVkgaW4geSkge1xuICAgIGlmIChub3QoZXhpc3RzKHhba2V5WV0pKSAmJiBleGlzdHMoeVtrZXlZXSkpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBvYmplY3RGaWx0ZXJcbiAqIEBwcml2YXRlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gb2JqZWN0RmlsdGVyIChmbiwgbykge1xuICBsZXQgciA9IHt9XG4gIGNvbnN0IGsgPSBrZXlzKG8pXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykge1xuICAgIGlmIChmbihvW2tbaV1dKSkgcltrW2ldXSA9IG9ba1tpXV1cbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBwcml2YXRlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIG8pIHtcbiAgY29uc3QgayA9IGtleXMobylcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgbGV0IHIgPSBPYmplY3QoaW5pdClcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2Iociwgb1trW2ldXSwga1tpXSwgbylcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIHtTdHJpbmd9IC0+IHtPYmplY3R9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGhhcyAocHJvcCwgb2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LCBldmVuIGlmIGl0IGlzIGluaGVyaXRlZFxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyB7U3RyaW5nfSAtPiB7T2JqZWN0fSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcFxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBoYXNJbiAocHJvcCwgb2JqKSB7XG4gIHJldHVybiBwcm9wIGluIG9ialxufSlcbiIsIi8vIEBjcmVhdGUtaW5kZXhcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlcXVhbHMgfSBmcm9tICcuL2VxdWFscy5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlsdGVyIH0gZnJvbSAnLi9maWx0ZXIuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvbGQgfSBmcm9tICcuL2ZvbGQuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGhhcyB9IGZyb20gJy4vaGFzLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXNJbiB9IGZyb20gJy4vaGFzSW4uanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzIH0gZnJvbSAnLi9pcy5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5cyB9IGZyb20gJy4va2V5cy5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5c0luIH0gZnJvbSAnLi9rZXlzSW4uanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hcCB9IGZyb20gJy4vbWFwLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZSB9IGZyb20gJy4vbWVyZ2UuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG9taXQgfSBmcm9tICcuL29taXQuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhdGggfSBmcm9tICcuL3BhdGguanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBpY2sgfSBmcm9tICcuL3BpY2suanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHByb3AgfSBmcm9tICcuL3Byb3AuanMnXG4iLCIvKipcblxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ09iamVjdCcpXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIG93biBrZXlzIG9mIGFuIG9iamVjdCBhcyBhbiBBcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IFtiXVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhPYmplY3QoYSkpXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIGFsbCB0aGUga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBbYl1cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQHJldHVybiB7QXJyYXl9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24ga2V5cyAoYSkge1xuICBjb25zdCByID0gW11cbiAgZm9yIChjb25zdCBrIGluIGEpIHtcbiAgICByLnB1c2goaylcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIG9iamVjdCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4uL3V0aWwvZW1wdHknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgayA9IGtleXMoYSlcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltrW2ldXSA9IGNiKGFba1tpXV0sIGtbaV0sIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGlkZW50aWNhbCBmcm9tICcuLi91dGlsL2lkZW50aWNhbCdcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9vYmplY3QvaXMnXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi9hcnJheS9pcydcbmltcG9ydCB1bmlvbiBmcm9tICcuLi9hcnJheS91bmlvbidcblxuY29uc3QgbWVyZ2UgPSBjdXJyeSgob2JqTCwgb2JqUikgPT4ge1xuICBsZXQgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqTClcblxuICBpZiAoaWRlbnRpY2FsKG9iakwsIG9ialIpKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG9iakwpXG4gIH1cbiAgZm9yIChsZXQga2V5IGluIG9ialIpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpSLCBrZXkpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBjb25zdCBvbGRWYWx1ZSA9IG9ialJba2V5XVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gb2JqTFtrZXldXG5cbiAgICBpZiAoaXNPYmplY3Qob2xkVmFsdWUpICYmIGlzT2JqZWN0KG5ld1ZhbHVlKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShvbGRWYWx1ZSwgbmV3VmFsdWUpXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG5ld1ZhbHVlKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB1bmlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2xkVmFsdWUgLy8gVE9ETzogdGhpcyBpcyBhIHJlZmVyZW5jZSwgc2hvdWxkIGJlIGNsb25lXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlXG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgob2JqLCBuYW1lcykgPT4ge1xuICBsZXQgcmVzdWx0ID0ge31cblxuICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgcmV0dXJuIG5hbWVzLmluZGV4T2Yoa2V5KSA9PT0gLTFcbiAgfSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gcGF0aFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gcGF0aCAocGF0aCwgb2JqKSB7XG4gIGxldCB2YWwgPSBvYmpcbiAgbGV0IGlkeCA9IDBcbiAgbGV0IHBcbiAgd2hpbGUgKGlkeCA8IHBhdGgubGVuZ3RoKSB7XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcCA9IHBhdGhbaWR4XVxuICAgIHZhbCA9IE51bWJlci5pc0ludGVnZXIocClcbiAgICAgID8gcCA8IDAgPyB2YWxbdmFsLmxlbmd0aCArIHBdIDogdmFsW3BdXG4gICAgICA6IHZhbFtwXVxuICAgIGlkeCArPSAxXG4gIH1cbiAgcmV0dXJuIHZhbFxufSlcbi8vIGxldCByID0gb2JqXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbi8vICAgaWYgKHIgPT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZFxuLy8gICByID0gcltwYXRoW2ldXVxuLy8gfVxuLy8gcmV0dXJuIHJcbi8vIH0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBwaWNrXG4gKiBAZGVzY3JpcHRpb24gcmV0dXJucyBhIG5ldyBiamVjdCB3aXRoIG9ubHkgdGhlIHByb3BzIHRoYXQgYXJlIHByb3ZpZGVkXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyAtIEFycmF5IG9mIHByb3BlcnR5IG5hbWVzXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gVGhlIG9iamVjdCBmcm9tIHdoaWNoIHRvIHRha2UgdGhlIHByb3BlcnRpZXNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHBpY2sgKHByb3BzLCBvYmopIHtcbiAgY29uc3QgciA9IHt9XG4gIGxldCBpID0gMFxuICB3aGlsZSAoaSA8IHByb3BzLmxlbmd0aCkge1xuICAgIGlmIChwcm9wc1tpXSBpbiBvYmopIHtcbiAgICAgIHJbcHJvcHNbaV1dID0gb2JqW3Byb3BzW2ldXVxuICAgIH1cbiAgICBpICs9IDFcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHByb3BcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHByb3AgKHAsIG9iaikge1xuICByZXR1cm4gb2JqW3BdXG59KVxuIiwiLy8gVE9ET1xuIiwiLy8gQGNyZWF0ZS1pbmRleFxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbHRlciB9IGZyb20gJy4vZmlsdGVyLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpcyB9IGZyb20gJy4vaXMuanMnXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnU2V0JylcbiIsIi8qKlxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNvbmNhdCA9IGZ1bmN0aW9uIF9jb25jYXQgKHNlcGFyYXRvciA9ICcsJykgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKS5qb2luKHNlcGFyYXRvcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uY2F0XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXG4gKi9cbmltcG9ydCB0b0FycmF5IGZyb20gJy4uL2FycmF5L3RvJ1xuaW1wb3J0IG5vdCBmcm9tICcuLi91dGlsL25vdCdcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRTdHJpbmcgKHN0cikgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xuICBsZXQgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKVxuXG4gIGFyZ3Muc2hpZnQoKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL3soXFxkKyl9L2csIChtYXRjaCwgaWR4KSA9PiB7XG4gICAgcmV0dXJuIG5vdChpcygnVW5kZWZpbmVkJywgYXJnc1tpZHhdKSkgPyBhcmdzW2lkeF0gOiBtYXRjaFxuICB9KVxufVxuIiwiLy8gQGNyZWF0ZS1pbmRleFxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmNhdCB9IGZyb20gJy4vY29uY2F0LmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb3JtYXRTdHJpbmcgfSBmcm9tICcuL2Zvcm1hdFN0cmluZy5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXMgfSBmcm9tICcuL2lzLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXAgfSBmcm9tICcuL21hcC5qcydcbiIsIi8qKlxuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnU3RyaW5nJylcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgc3RyaW5nIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGxldCByID0gJydcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByICs9IGNiKGEuY2hhckF0KGkpLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLy8gQGNyZWF0ZS1pbmRleFxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzIH0gZnJvbSAnLi9pcy5qcydcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDMvMDIvMjAxOVxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ3VuZGVmaW5lZCcpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBhZGRJbmRleFxuICogQHN1bW1hcnkgQWRkcyBhIHNwZWNpZmllZCBpbmRleCB0byBpdGVyYXRlIGEgY29sbGVjdGlvblxuICogQGRlc2NyaXB0aW9uIFRoZSBhZGRJbmRleCBmdW5jdGlvbiBpcyBub3RuZWNlc3NhcnkgZm9yIHRoZSBtYXAgZnVuY3Rpb25zIGluIHRoZSBmdW4uanMgbGlicmFyeSBhcyB0aGV5IGJlaGF2ZSB0aGUgc2EsZSBhcyB0aGUgbmF0aXZlIGphdmFzY3JpcHQgZnVuY3Rpb25zXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIEl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnIEZ1bmN0aW9uIHRvIHdoaWNoIHRvIGFkZCB0aGUgaW5kZXhcbiAqIEBwYXJhbSB7QXJyYXl9IGEgVGhlIGFycmF5IG9uIHdoaWNoIHRvIHdvcmtcbiAqIEBzaW5jZSAxLjAuMlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWRkSW5kZXggKGYsIGcsIGEpIHtcbiAgbGV0IGkgPSAwXG4gIHJldHVybiBmKFxuICAgIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gZyh2LCBpKyspXG4gICAgfSxcbiAgICBhXG4gIClcbn0pXG4iLCIvKipcbiAqIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIGFkanVzdFxuICogQGRlc2NyaXB0aW9uIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IGEpIC0+IG51bSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIHRvIG1vZGlmeSB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XG4gKiBAcGFyYW0ge051bWJlcn0gaSAtIFRoZSBpbmRleCBhdCB3aGljaCB0byBtb2RpZnkgdGhlIGFycmF5LCBhY2NlcHRzIHBvc3RpdGl2ZSBhbmQgbmVnYXRpdmUgaW5kZXhlc1xuICogQHBhcmFtIHtJdGVyYWJsZX0gW2FdIC0gQXJyYXkgd2l0aCBkYXRhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX0gW2FdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWRqdXN0IChmbiwgaSwgYSkge1xuICBjb25zdCByID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSlcbiAgY29uc3QgaWR4ID0gaSA8IDAgPyByLmxlbmd0aCArIGkgOiBpXG4gIGlmICghYVtpZHhdKSByZXR1cm4gclxuICByW2lkeF0gPSBmbihyW2lkeF0pXG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBNb2RpZmllcyBhbiBpdGVtIGluIGFuIGFycmF5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvbiBhZGp1c3RXaXRoXG4gKiBAZGVzY3JpcHRpb24gTW9kaWZpZXMgYW4gaXRlbSBpbiBhbiBhcnJheSB1c2luZyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGEgLT4gYSkgLT4gKChhIC0+IFthXSkgLT4gW2FdIC0+IG51bSkgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSB0byBtb2RpZnkgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZCAtIFRoZSBwcmVkaWNhdGUgdGhhdCByZXR1cm5zIHRoZSBpbmRleGVzIGlmIGZvdW5kXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBbYV1cbiAqIEByZXR1cm4ge0l0ZXJhYmxlfSBbYV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IG1hcCBmcm9tICcuLi91dGlsL21hcCdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWRqdXN0V2l0aCAoZm4sIHByZWQsIGEpIHtcbiAgY29uc3QgX2ZuID0geCA9PiB7XG4gICAgaWYgKHByZWQoeCkpIHtcbiAgICAgIHJldHVybiBmbih4KVxuICAgIH1cbiAgICByZXR1cm4geFxuICB9XG4gIHJldHVybiBtYXAoX2ZuLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhKSlcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxuICpcbiAqIEBmdW5jdGlvbiBhbGxcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFsbCAoY2IsIGEpIHtcbiAgbGV0IHJlcyA9IHRydWVcbiAgZm9yIChsZXQgaSBpbiBhKSB7XG4gICAgaWYgKCFjYihhW2ldKSkge1xuICAgICAgcmVzID0gZmFsc2VcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn0pXG4iLCIvKipcbiAqIEFwcGxpZXMgYSBsaXN0IG9mIHByZWRpY2F0ZXMgdG8gdGhlIGRhdGEgYW5kIHJldHVybnMgdHJ1ZSBpZiBhbGwgcGFzc1xuICpcbiAqIEBmdW5jdGlvbiBhbGxQYXNzXG4gKiBAZGVzY3JpcHRpb24gQXBwbGllcyBhIGxpc3Qgb2YgcHJlZGljYXRlcyB0byB0aGUgZGF0YSBhbmQgcmV0dXJucyB0cnVlIGlmIGFsbCBwYXNzXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIFsoKi4uLiAtPiBCb29sZWFuKV0gLT4gKCouLi4gLT4gQm9vbGVhblxuICogQHBhcmFtIHtBcnJheX0gcHJlZGljYXRlcyBBbiBhcnJheSBvZiBwcmVkaWNhdGVzIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGNvbWJpbmVkIHByZWRpY2F0ZVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFsbFBhc3MgKGNicywgYSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNicy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghY2JzW2ldKGEpKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdpdGggdGhlIGluaXRpYWwgdmFsdWUgcHJvdmlkZWRcbiAqXG4gKiBAZnVuY3Rpb24gYWx3YXlzXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIGZ1bmN0aW9uIHdpdGggdGhlIGluaXRpYWwgdmFsdWUgcHJvdmlkZWRcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiAoKiAtPiBhKVxuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbHdheXMgKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHggfVxufSlcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGJvdGggcHJlZGljYXRlcyBhcmUgdHJ1ZVxuICpcbiAqIEBmdW5jdGlvbiBhbmRcbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgYm90aCBwcmVkaWNhdGVzIGFyZSB0cnVlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnICh4LCB5KSAtPiBib29sZWFuXG4gKiBAcGFyYW0geyp9IHggLSBBIHByZWRpY2F0ZVxuICogQHBhcmFtIHsqfSB5IC0gQSBwcmVkaWNhdGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYW5kICh4LCB5KSB7XG4gIHJldHVybiB4ICYmIHlcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbiBvZiB0aGUgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxuICpcbiAqIEBmdW5jdGlvbiBhbnlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb24gb2YgdGhlIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKFRPRE8pXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbnkgKGNiLCBhKSB7XG4gIGxldCByZXMgPSBmYWxzZVxuICBmb3IgKGxldCBpIGluIGEpIHtcbiAgICBpZiAoY2IoYVtpXSkpIHtcbiAgICAgIHJlcyA9IHRydWVcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn0pXG4iLCIvKipcbiAqIEFwcGxpZXMgYSBsaXN0IG9mIHByZWRpY2F0ZXMgdG8gdGhlIGRhdGEgYW5kIHJldHVybnMgdHJ1ZSBpZiBvbmUgcGFzc2VzXG4gKlxuICogQGZ1bmN0aW9uIGFueVBhc3NcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgWygqLi4uIC0+IEJvb2xlYW4pXSAtPiAoKi4uLikgLT4gQm9vbGVhblxuICogQHBhcmFtIHtBcnJheX0gcHJlZGljYXRlcyBBbiBhcnJheSBvZiBwcmVkaWNhdGVzIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGNvbWJpbmVkIHByZWRpY2F0ZVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFueVBhc3MgKGNicywgYSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNicy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjYnNbaV0oYSkpIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59KVxuIiwiLyoqXG4gKiBBcHBsaWVzIGEgbGlzdCBvZiBmdW5jdGlvbnMgdG8gYSBsaXN0IG9mIHZhbHVlcyBhbmQgcmV0dXJucyBhIGNvbWJpbmVkIHJlc3VsdCBhcnJheVxuICpcbiAqIEBmdW5jdGlvbiBhcFxuICogQGRlc2NyaXB0aW9uIEFwcGxpZXMgYSBsaXN0IG9mIGZ1bmN0aW9ucyB0byBhIGxpc3Qgb2YgdmFsdWVzIGFuZCByZXR1cm5zIGEgY29tYmluZWQgcmVzdWx0IGFycmF5XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIEBzaWcgW2EgLT4gYl0gLT4gW2FdIC0+IFtiXVxuICogQHBhcmFtIHsoRnVuY3Rpb25bXXxGdW5jdGlvbnxBcHBsaWNhdGl2ZSl9IGZucyAtIEFuIGFycmF5IG9mIGZ1bmN0aW9ucyBvciBhIGZ1bmN0aW9uIG9yIGFuIGFwcGxpY2F0aXZlXG4gKiBAcGFyYW0ge0FycmF5fSB2YWxzIC0gQW4gYXJyYXkgb2YgdmFsdWVzXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX0gW2FdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBjdXJyeTEgZnJvbSAnLi4vX3ByaXZhdGUvY3VycnkxJ1xuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXG5pbXBvcnQgZm9sZCBmcm9tICcuLi9hcnJheS9mb2xkJ1xuaW1wb3J0IG1hcCBmcm9tICcuLi9hcnJheS9tYXAnXG5cbmNvbnN0IGlzRnVuY3Rpb24gPSBpcygnRnVuY3Rpb24nKVxuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhcCAoZm5zLCB2YWxzKSB7XG4gIGlmIChpc0Z1bmN0aW9uKGZucy5hcCkpIHtcbiAgICByZXR1cm4gZm5zLmFwKHZhbHMpXG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24oZm5zKSkge1xuICAgIHJldHVybiB4ID0+IGZucyh4KSh2YWxzKHgpKVxuICB9XG4gIHJldHVybiBmb2xkKChhY2MsIGYpID0+IGFjYy5jb25jYXQobWFwKGN1cnJ5MShmKSwgdmFscykpLCBbXSwgZm5zKVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGFwcGx5XG4gKiBAZGVzY3JpcHRpb24gVGhlIGFwcGx5KCkgbWV0aG9kIGNhbGxzIGEgZnVuY3Rpb24gd2l0aCB0aGUgZ2l2ZW4gYXJndW1lbnRzIHByb3ZpZGVkIGFzIGFuIGFycmF5LCBhbmQgdGhlIGZ1bmN0aW9uIGFzIGNvbnRleHQuXG4gKiBAcGFyYW0gZm5cbiAqIEBwYXJhbSBhcmdzXG4gKiBAcmV0dXJuIHsqfVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYSA9IGFwcGx5KGZ1bmN0aW9uICgpIHtcbiAqICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5tYXAoeCA9PiB4ICogMilcbiAqICAgfSlcbiAqIGEoWzEsIDIsIDNdKVxuICogLy8gWzIsIDQsIDZdXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhcHBseSAoZm4sIGFyZ3MpIHtcbiAgcmV0dXJuIGZuLmFwcGx5KGZuLCBhcmdzKVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGNvbXBsZW1lbnRcbiAqIEBkZXNjcmlwdGlvbiBMaWZ0cyBhIHByZWRpY2F0ZSBmdW5jdGlvbiBhbmQgcmV0dXJucyB0aGUgY29tcGxlbWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gQSBwcmVkaWNhdGUgZnVuY3Rpb25cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSBub3RcbiAqIEBzZWUgbGlmdFxuICogQHNpbmNlIHYxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBpc05vdEVtcHR5ID0gY29tcGxlbWVudChpc0VtcHR5KVxuICogaXNOb3RFbXB0eShbXSkgLy8gZmFsc2VcbiAqIGlzTm90RW1wdHkoeydhJyA6IDF9KSAvLyB0cnVlXG4gKlxuICogY29tcGxlbWVudChNYXliZS5vZihmYWxzZSkpIC8vIHRydWVcbiAqIGNvbXBsZW1lbnQoTWF5YmUub2YodHJ1ZSkpIC8vIGZhbHNlXG4gKi9cbmltcG9ydCBsaWZ0IGZyb20gJy4vbGlmdCdcbmltcG9ydCBub3QgZnJvbSAnLi9ub3QnXG5cbmNvbnN0IGNvbXBsZW1lbnQgPSBsaWZ0KG5vdClcbmV4cG9ydCBkZWZhdWx0IGNvbXBsZW1lbnRcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGNvbXBvc2VcbiAqIEByZXR1cm5zIHtmdW5jdGlvbigpOiAqfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlICgpIHtcbiAgbGV0IGZ1bnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIF9jb21wb3NlICgpIHtcbiAgICBsZXQgaW5pdCA9IGZ1bnNbZnVucy5sZW5ndGggLSAxXVxuICAgIGxldCByZXN1bHQgPSBbaW5pdC5hcHBseShpbml0LCBhcmd1bWVudHMpXVxuICAgIGxldCBpID0gZnVucy5sZW5ndGggLSAyXG5cbiAgICBmb3IgKGk7IGkgPj0gMDsgLS1pKSB7XG4gICAgICBjb25zdCBmdW4gPSBmdW5zW2ldXG5cbiAgICAgIHJlc3VsdCA9IFtmdW4uYXBwbHkoZnVuLCByZXN1bHQpXVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0WzBdXG4gIH1cbn07XG4iLCIvKipcbiAqIEBmdW5jdGlvbiBjb25kXG4gKiBAcGFyYW0gY29uZHNcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZCAoY29uZHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjb25kc1tpXVswXSh2YWx1ZSkpIHJldHVybiBjb25kc1tpXVsxXSh2YWx1ZSlcbiAgICB9XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKipcbiAqIEBmdW5jdGlvbiBjdXJyeVxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVzIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeSAoZnVuKSB7XG4gIGNvbnN0IGFyZ3NsZW4gPSBmdW4ubGVuZ3RoXG5cbiAgaWYgKGFyZ3NsZW4gPT09IDApIHtcbiAgICByZXR1cm4gZnVuXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlY3Vyc2VyKFtdKVxuXG4gIGZ1bmN0aW9uIHJlY3Vyc2UgKGFjYywgYXJncykge1xuICAgIGNvbnN0IF9hY2MgPSBhY2MuY29uY2F0KGFyZ3MpXG4gICAgcmV0dXJuIF9hY2MubGVuZ3RoIDwgYXJnc2xlblxuICAgICAgPyBjcmVhdGVSZWN1cnNlcihfYWNjKVxuICAgICAgOiBmdW4uYXBwbHkodGhpcywgX2FjYylcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlY3Vyc2VyIChhY2MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlY3Vyc2UoYWNjLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb24gZGVmYXVsdFRvXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gYiAtPiBhIHwgYlxuICogQHBhcmFtIHthfSBkZWZhdWx0IFRoZSBkZWZhdWx0IHZhbHVlLlxuICogQHBhcmFtIHtifSB2YWwgYHZhbGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkIG9mIGBkZWZhdWx0YCB1bmxlc3MgYHZhbGAgaXMgYG51bGxgLCBgdW5kZWZpbmVkYCBvciBgTmFOYC5cbiAqIEByZXR1cm4geyp9IFRoZSBzZWNvbmQgdmFsdWUgaWYgaXQgaXMgbm90IGBudWxsYCwgYHVuZGVmaW5lZGAgb3IgYE5hTmAsIG90aGVyd2lzZSB0aGUgZGVmYXVsdCB2YWx1ZVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGRlZmF1bHRUbyAoZCwgdikge1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICByZXR1cm4gdiA9PSBudWxsIHx8IHYgIT09IHYgPyBkIDogdlxufSlcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVtcHR5ICh4KSB7XG4gIHJldHVybiBuZXcgeC5jb25zdHJ1Y3RvcigpXG59O1xuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBlcXVhbHNcbiAqIEBkZXNjcmlwdGlvbiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuL2V4aXN0cydcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi9pZGVudGljYWwnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5pbXBvcnQgbm90IGZyb20gJy4vbm90J1xuaW1wb3J0IG9yIGZyb20gJy4vb3InXG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vb2JqZWN0L2lzJ1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vYXJyYXkvaXMnXG5pbXBvcnQgaXNCb29sZWFuIGZyb20gJy4uL2Jvb2xlYW4vaXMnXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi4vbnVtYmVyL2lzJ1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4uL3N0cmluZy9pcydcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi4vZGF0ZS9pcydcbmltcG9ydCBlcXVhbHNBcnJheSBmcm9tICcuLi9hcnJheS9lcXVhbHMnXG5pbXBvcnQgZXF1YWxzT2JqZWN0IGZyb20gJy4uL29iamVjdC9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFscyAoeCwgeSkge1xuICBpZiAoaWRlbnRpY2FsKHgsIHkpKSByZXR1cm4gdHJ1ZVxuXG4gIGlmICh0eXBlKHgpICE9PSB0eXBlKHkpKSByZXR1cm4gZmFsc2VcblxuICBpZiAob3Iobm90KGV4aXN0cyh4KSksIG5vdChleGlzdHMoeSkpKSkgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKHguY29uc3RydWN0b3IgIT09IHkuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZVxuXG4gIGlmIChpc1N0cmluZyh4KSB8fCBpc0Jvb2xlYW4oeCkgfHwgaXNOdW1iZXIoeCkgfHwgaXNEYXRlKHgpKSB7XG4gICAgcmV0dXJuIGlkZW50aWNhbCh4LnZhbHVlT2YoKSwgeS52YWx1ZU9mKCkpXG4gIH1cbiAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzQXJyYXkoeCwgeSlcbiAgfSBlbHNlIGlmIChpc09iamVjdCh4KSkge1xuICAgIHJldHVybiBlcXVhbHNPYmplY3QoeCwgeSlcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBleGlzdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhpc3RzICh4KSB7XG4gIHJldHVybiAhKHggPT0gbnVsbClcbn07XG4iLCIvKipcbiAqIEBmdW5jdGlvbiBmaWx0ZXJcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdWNudGlvbiB0aGF0IGZpbHRlcnMgT2JqZWN0cywgQXJyYXlzIGFuZCBNYXBzXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBhcnJheUZpbHRlciBmcm9tICcuLi9hcnJheS9maWx0ZXInXG5pbXBvcnQgb2JqZWN0RmlsdGVyIGZyb20gJy4uL29iamVjdC9maWx0ZXInXG5pbXBvcnQgbWFwRmlsdGVyIGZyb20gJy4uL21hcC9maWx0ZXInXG4vLyBUT0RPXG4vLyBpbXBvcnQgc2V0RmlsdGVyIGZyb20gJy4uL3NldC9maWx0ZXInXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZpbHRlciAoZm4sIGEpIHtcbiAgc3dpdGNoICh0eXBlKGEpKSB7XG4gICAgLy8gc3dpdGNoIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkpIHtcbiAgICAvLyBjYXNlICdGdW5jdGlvbic6XG4gICAgLy8gICByZXR1cm4gY3VycnkoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICByZXR1cm4gY2IuY2FsbCh0aGlzLCBhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpXG4gICAgLy8gICB9KVxuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICByZXR1cm4gb2JqZWN0RmlsdGVyKGZuLCBhKVxuICAgIC8vIGNhc2UgJ1N0cmluZyc6XG4gICAgLy8gICByZXR1cm4gc3RyaW5nTWFwKGNiLCBhKVxuICAgIGNhc2UgJ01hcCc6XG4gICAgICByZXR1cm4gbWFwRmlsdGVyKGZuLCBhKVxuICAgIC8vIGNhc2UgJ1NldCc6XG4gICAgLy8gICByZXR1cm4gc2V0RmlsdGVyKGZuLCBhKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYXJyYXlGaWx0ZXIoZm4sIGEpXG4gIH1cbn0pXG4iLCIvKipcbiAqIEZpbmQgdGhlIGluZGV4IG1hdGNoaW5nIGEgcHJlZGljYXRlXG4gKlxuICogQGZ1bmN0aW9uIGZpbmRJbmRleFxuICogQGRlc2NyaXB0aW9uIEZpbmQgdGhlIGluZGV4IG1hdGNoaW5nIGEgcHJlZGljYXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IGJvb2xlYW4pIC0+IFthXSAtPiBudW1iZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFByZWRpY2F0ZSBmdW5jdGlvbiByZXR1cm5zIGEgYm9vbGVhblxuICogQHBhcmFtIHtBcnJheX0gQW4gYXJyYXkgbGlrZSBvYmplY3RcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZpbmRJbmRleCAoZm4sIGEpIHtcbiAgbGV0IGkgPSAwXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICB3aGlsZSAoaSA8IGwpIHtcbiAgICBpZiAoZm4oYVtpXSkpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICAgIGkgKz0gMVxuICB9XG4gIHJldHVybiAtMVxufSlcbiIsIi8qKlxuICogUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ6IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZcOpXG4gKlxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnogaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgbGlrZSBvYmplY3QgYW5kIGNhbGxhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlw6lcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKChhLCBiLCBjLCBhKSDihpIgYSkg4oaSIGEg4oaSIFtiXSDihpIgYVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgcmVjZWl2ZXMgNCB2YWx1ZXM6IHRoZSBhY2N1bXVsYXRvciwgdGhlIGl0ZW0sIHRoZSBpbmRleCwgYW5kIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHsqfSBhIGlzIHRoZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0geyp9IFtiXSB0aGUgYXJyYXkgbGlrZSBpdGVtIHRvIGl0ZXJhdGUgb3ZlclxuICogQHJldHVybiB7Kn0gYSBpcyB0aGUgYWNjdW11bGF0ZWQgdmFsdWVcbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgYXJyYXlGb2xkIGZyb20gJy4uL2FycmF5L2ZvbGQnXG5pbXBvcnQgb2JqZWN0Rm9sZCBmcm9tICcuLi9vYmplY3QvZm9sZCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIGEpIHtcbiAgY29uc3QgdHlwZU1hcCA9IHtcbiAgICAnT2JqZWN0Jzogb2JqZWN0Rm9sZCxcbiAgICAnQXJyYXknOiBhcnJheUZvbGRcbiAgfVxuICAvLyBpZiAoYS5uZXh0KSB7XG4gIC8vICAgcmV0dXJuIGl0ZXJhYmxlRm9sZChjYiwgaW5pdCwgYSlcbiAgLy8gfVxuICAvLyBpZiAodHlwZShTeW1ib2wpICE9PSAndW5kZWZpbmVkJyAmJiBhW1N5bWJvbC5pdGVyYXRvcl0pIHtcbiAgLy8gICByZXR1cm4gaXRlcmFibGVGb2xkKGNiLCBpbml0LCBhW1N5bWJvbC5pdGVyYXRvcl0oKSlcbiAgLy8gfVxuICByZXR1cm4gdHlwZU1hcFt0eXBlKGEpXShjYiwgaW5pdCwgYSlcbn0pXG5cbi8vIGZ1bmN0aW9uIGl0ZXJhYmxlRm9sZCAoY2IsIGFjYywgZ2VuKSB7XG4vLyAgIGxldCBzdGVwID0gZ2VuLm5leHQoKVxuLy8gICB3aGlsZSAoIXN0ZXAuZG9uZSkge1xuLy8gICAgIGFjYyA9IGNiKGFjYywgc3RlcC52YWx1ZSlcbi8vICAgICBzdGVwID0gZ2VuLm5leHQoKVxuLy8gICB9XG4vLyAgIHJldHVybiBhY2Ncbi8vIH1cbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gaWRlbnRpY2FsXG4gKiBAZGVzY3JpcHRpb24gY2hlY2tzIGZvciBpZGVudGludGljYWwgaXRlbXNcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgaXNOYW4gZnJvbSAnLi4vbnVtYmVyL2lzTmFuJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBpZGVudGljYWwgKHgsIHkpIHtcbiAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkge1xuICAgIHJldHVybiAxIC8geCA9PT0gMSAvIHlcbiAgfVxuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuICEhKGlzTmFuKHgpICYmIGlzTmFuKHkpKVxufSlcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gaWRlbnRpdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSB2YWx1ZSBzdXBwbGllZCB0byB0aGUgZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZGVudGl0eSAoeCkge1xuICByZXR1cm4geFxufTtcbiIsIi8vIEBjcmVhdGUtaW5kZXhcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGRJbmRleCB9IGZyb20gJy4vYWRkSW5kZXguanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkanVzdCB9IGZyb20gJy4vYWRqdXN0LmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGp1c3RXaXRoIH0gZnJvbSAnLi9hZGp1c3RXaXRoLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbGwgfSBmcm9tICcuL2FsbC5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxsUGFzcyB9IGZyb20gJy4vYWxsUGFzcy5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWx3YXlzIH0gZnJvbSAnLi9hbHdheXMuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFuZCB9IGZyb20gJy4vYW5kLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbnkgfSBmcm9tICcuL2FueS5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW55UGFzcyB9IGZyb20gJy4vYW55UGFzcy5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXAgfSBmcm9tICcuL2FwLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcHBseSB9IGZyb20gJy4vYXBwbHkuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBsZW1lbnQgfSBmcm9tICcuL2NvbXBsZW1lbnQuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBvc2UgfSBmcm9tICcuL2NvbXBvc2UuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmQgfSBmcm9tICcuL2NvbmQuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGN1cnJ5IH0gZnJvbSAnLi9jdXJyeS5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdFRvIH0gZnJvbSAnLi9kZWZhdWx0VG8uanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVtcHR5IH0gZnJvbSAnLi9lbXB0eS5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzIH0gZnJvbSAnLi9lcXVhbHMuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGV4aXN0cyB9IGZyb20gJy4vZXhpc3RzLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaWx0ZXIgfSBmcm9tICcuL2ZpbHRlci5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmluZEluZGV4IH0gZnJvbSAnLi9maW5kSW5kZXguanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvbGQgfSBmcm9tICcuL2ZvbGQuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlkZW50aWNhbCB9IGZyb20gJy4vaWRlbnRpY2FsLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHkuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzIH0gZnJvbSAnLi9pcy5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNFbXB0eSB9IGZyb20gJy4vaXNFbXB0eS5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGlmdCB9IGZyb20gJy4vbGlmdC5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwIH0gZnJvbSAnLi9tYXAuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1heCB9IGZyb20gJy4vbWF4LmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBub3QgfSBmcm9tICcuL25vdC5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb3IgfSBmcm9tICcuL29yLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0cnV0aHkgfSBmcm9tICcuL3RydXRoeS5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHlwZSB9IGZyb20gJy4vdHlwZS5qcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgemlwIH0gZnJvbSAnLi96aXAuanMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHppcFdpdGggfSBmcm9tICcuL3ppcFdpdGguanMnXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBpc1xuICogQGRlc2NyaXB0aW9uIFZlcmlmaWVzIHRoZSB0eXBlIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudFxuICpcbiAqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaXMgKEN0b3IsIHZhbCkge1xuICByZXR1cm4gdHlwZSh2YWwpID09PSBDdG9yXG59KVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBlbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGVtcHR5IGVxdWl2YWxlbnQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKi9cbmltcG9ydCBlbXB0eSBmcm9tICcuL2VtcHR5J1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuL2V4aXN0cydcbmltcG9ydCBlcXVhbHMgZnJvbSAnLi9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRW1wdHkgKHgpIHtcbiAgcmV0dXJuIGV4aXN0cyh4KSAmJiBlcXVhbHMoeCwgZW1wdHkoeCkpXG59O1xuIiwiLyoqXG4gKiBcImxpZnRzXCIgYSBmdW5jdGlvbiBvZiBhcml0eSA+IDEgc28gdGhhdCBpdCBtYXkgXCJtYXAgb3ZlclwiIGEgbGlzdCwgRnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb24gbGlmdFxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoKi4uLiAtPiAqKSAtPiAoWypdLi4uIC0+IFsqXSlcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuLi9fcHJpdmF0ZS9jdXJyeTEnXG5pbXBvcnQgZm9sZCBmcm9tICcuLi91dGlsL2ZvbGQnXG5pbXBvcnQgYXAgZnJvbSAnLi4vdXRpbC9hcCdcbmltcG9ydCBtYXAgZnJvbSAnLi4vdXRpbC9tYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGxpZnQgKGZuKSB7XG4gIGNvbnN0IGxpZnRlZCA9IGN1cnJ5MShjdXJyeShmbikpXG4gIHJldHVybiBjdXJyeShmdW5jdGlvbiBfbGlmdCAoKSB7XG4gICAgcmV0dXJuIGZvbGQoYXAsIG1hcChsaWZ0ZWQsIGFyZ3VtZW50c1swXSksIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpXG4gIH0pXG59KVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYW4gaXRlcmFibGUgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvbiBtYXBcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiB3aGljaCBtYXBzIG92ZXIgYW4gaXRlcmFibGUuXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBiIC0+IGJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGFycmF5TWFwIGZyb20gJy4uL2FycmF5L21hcCdcbmltcG9ydCBvYmplY3RNYXAgZnJvbSAnLi4vb2JqZWN0L21hcCdcbmltcG9ydCBtYXBNYXAgZnJvbSAnLi4vbWFwL21hcCdcbmltcG9ydCBzdHJpbmdNYXAgZnJvbSAnLi4vc3RyaW5nL21hcCdcbmltcG9ydCB0eXBlIGZyb20gJy4uL3V0aWwvdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBzd2l0Y2ggKHR5cGUoYSkpIHtcbiAgLy8gc3dpdGNoIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkpIHtcbiAgICBjYXNlICdGdW5jdGlvbic6XG4gICAgICByZXR1cm4gY3VycnkoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2IuY2FsbCh0aGlzLCBhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpXG4gICAgICB9KVxuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICByZXR1cm4gb2JqZWN0TWFwKGNiLCBhKVxuICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICByZXR1cm4gc3RyaW5nTWFwKGNiLCBhKVxuICAgIGNhc2UgJ01hcCc6XG4gICAgICByZXR1cm4gbWFwTWFwKGNiLCBhKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYXJyYXlNYXAoY2IsIGEpXG4gIH1cbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIGxhcmdlc3Qgb2YgdGhlIDIgYXJndW1lbnRzIHByb3ZpZGVkXG4gKlxuICogQGZ1bmN0aW9uIG1heFxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4geyp9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWF4IChhLCBiKSB7XG4gIHJldHVybiBiID4gYSA/IGIgOiBhXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gbm90XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBub3QgKHgpIHtcbiAgcmV0dXJuICF4XG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gb3JcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgaWYgb25lIG9yIHRoZSBvdGhlciBpcyB0cnVlXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBvciAoeCwgeSkge1xuICByZXR1cm4geCB8fCB5XG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdHJ1dGh5XG4gKi9cbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRydXRoeSAoeCkge1xuICByZXR1cm4gKHggIT09IGZhbHNlKSAmJiBleGlzdHMoeClcbn07XG4iLCIvKipcbiAqIEBmdW5jdGlvbiB0eXBlXG4gKi9cbmltcG9ydCBjdXJyeTEgZnJvbSAnLi4vX3ByaXZhdGUvY3VycnkxJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeTEoZnVuY3Rpb24gdHlwZSAoeCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpLnNsaWNlKDgsIC0xKVxufSlcbiIsIi8qKlxuXG4gKiB6aXBcbiAqXG4gKiBAZnVuY3Rpb24gemlwXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IHppcFdpdGggZnJvbSAnLi96aXBXaXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiB6aXAgKGEsIGIpIHtcbiAgcmV0dXJuIHppcFdpdGgoZnVuY3Rpb24gX3ppcFdpdGggKHgsIHkpIHsgcmV0dXJuIFt4LCB5XSB9LCBhLCBiKVxufSlcbiIsIi8qKlxuXG4gKiB6aXBXaXRoXG4gKlxuICogIEBmdW5jdGlvbiB6aXBXaXRoXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiB6aXBXaXRoIChjYiwgYSwgYikge1xuICBjb25zdCBhcnIgPSBbXVxuICBjb25zdCBsZW4gPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpXG4gIGxldCBpID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIucHVzaChjYihhW2ldLCBiW2ldKSlcbiAgfVxuICByZXR1cm4gYXJyXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==