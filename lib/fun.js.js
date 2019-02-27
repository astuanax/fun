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
 * @author Len Dierickx
 * equals
 * checks for equality
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
 * @author Len Dierickx
 * fold
 *
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
 * Created by dierickx.len on 01/04/2017.
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
 * Maps over an array and applies a function
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
 * Created by dierickx.len on 18/03/2017.
 */
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
 * @author Len Dierickx
 * union
 */
var _default = (0, _curry.default)(function unionArray(arrayL, arrayR) {
  return Array.from(new Set(arrayL.concat(arrayR)));
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
Object.defineProperty(exports, "just", {
  enumerable: true,
  get: function get() {
    return _Just.default;
  }
});
Object.defineProperty(exports, "maybe", {
  enumerable: true,
  get: function get() {
    return _Maybe.default;
  }
});
Object.defineProperty(exports, "nothing", {
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
Object.defineProperty(exports, "isEmptyObject", {
  enumerable: true,
  get: function get() {
    return _isEmpty.default;
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
    return _isEmpty2.default;
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

var _isEmpty = _interopRequireDefault(__webpack_require__(/*! object/isEmpty */ "./src/object/isEmpty.js"));

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

var _isEmpty2 = _interopRequireDefault(__webpack_require__(/*! util/isEmpty */ "./src/util/isEmpty.js"));

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

var _and = _interopRequireDefault(__webpack_require__(/*! ../util/and */ "./src/util/and.js"));

var _isEmpty = _interopRequireDefault(__webpack_require__(/*! ./isEmpty */ "./src/object/isEmpty.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ../util/equals */ "./src/util/equals.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Len Dierickx
 * equals
 * checks for equality
 */
var _default = (0, _curry.default)(function (x, y) {
  if ((0, _and.default)((0, _isEmpty.default)(x), (0, _isEmpty.default)(y))) return true;

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

/***/ "./src/object/isEmpty.js":
/*!*******************************!*\
  !*** ./src/object/isEmpty.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmptyObject;

/**
 * Created by dierickx.len on 01/04/2017.
 */
function isEmptyObject(x) {
  for (var key in x) {
    if (x.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

;
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
 * @param {[Function] | {Function} | {Applicative}} fns - An array of functions or a function or an applicative
 * @param {[*]} vals - An array of values
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
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} Predicate function returns a boolean
 * @param {[*]} An array like object
 * @return
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

var _curry2 = _interopRequireDefault(__webpack_require__(/*! ../_private/curry1 */ "./src/_private/curry1.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! ../util/fold */ "./src/util/fold.js"));

var _ap = _interopRequireDefault(__webpack_require__(/*! ../util/ap */ "./src/util/ap.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ../util/map */ "./src/util/map.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function
 *
 * @function
 * @since v1.0.2
 * @sig (*... -> *) -> ([*]... -> [*])
 **/
var _default = (0, _curry.default)(function lift(fn) {
  var lifted = (0, _curry2.default)((0, _curry.default)(fn));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4uanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1bi5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvX3ByaXZhdGUvY3VycnkxLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L3RvLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS91bmlvbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9GLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9ib29sZWFuL1QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2Jvb2xlYW4vaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2NvbnN0YW50cy9NT05USFMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2NvbnN0YW50cy9XRUVLREFZUy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9kaWZmRGF0ZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9mb3JtYXREYXRlVGltZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pc0Z1dHVyZURhdGUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvaXNWYWxpZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b0RheS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b0hvdXIuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9NaW51dGVzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvU2Vjb25kcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9KdXN0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tb25hZHMvTWF5YmUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9Ob3RoaW5nLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvYWRkLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvZGl2aWRlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL251bWJlci9pc05hbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL211bHRpcGx5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZXF1YWxzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZm9sZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2hhcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2hhc0luLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9pc0VtcHR5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2tleXNJbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L21hcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L21lcmdlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3Qvb21pdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvc3RyaW5nL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvc3RyaW5nL2Zvcm1hdFN0cmluZy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvc3RyaW5nL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FkanVzdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hZGp1c3RXaXRoLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FsbC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbGxQYXNzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2Fsd2F5cy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbmQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYW55LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FueVBhc3MuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9jdXJyeS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9kZWZhdWx0VG8uanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZXF1YWxzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2V4aXN0cy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9maW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZm9sZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pZGVudGljYWwuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9saWZ0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL21hcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9tYXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvbm90LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL29yLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3RydXRoeS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC90eXBlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3ppcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC96aXBXaXRoLmpzIl0sIm5hbWVzIjpbImN1cnJ5MSIsImZuIiwiY3VycmllZCIsImEiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJlcXVhbHNBcnJheSIsIngiLCJ5IiwiaSIsImZvbGQiLCJjYiIsImluaXQiLCJsIiwiciIsIm1hcCIsIkFycmF5IiwidG9BcnJheSIsImFwcGx5IiwidW5pb25BcnJheSIsImFycmF5TCIsImFycmF5UiIsImZyb20iLCJTZXQiLCJjb25jYXQiLCJNT05USFMiLCJXRUVLREFZUyIsInN0YXJ0IiwiZW5kIiwiRGF0ZSIsImdldFRpbWUiLCJnZXRXZWVrIiwiZCIsIlVUQyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwic2V0VVRDRGF0ZSIsImdldFVUQ0RhdGUiLCJnZXRVVENEYXkiLCJ5ZWFyU3RhcnQiLCJnZXRVVENGdWxsWWVhciIsIndlZWtObyIsIk1hdGgiLCJjZWlsIiwiWkVST1MiLCJsYXN0TiIsIm4iLCJzdHIiLCJzdWJzdHJpbmciLCJmaXJzdE4iLCJmaWxsIiwiZGlnaXRzIiwiREFURV9UT0tFTlMiLCJtb2RDZWlsaW5nIiwibW9kIiwidmFsIiwidG9rZW5zIiwiWVlZWSIsIllZIiwiTU1NTSIsIk1NTSIsIk1NIiwiTSIsInciLCJ3dyIsIkREIiwiRCIsImRkZGQiLCJnZXREYXkiLCJkZGQiLCJkZCIsIkhIIiwiZ2V0SG91cnMiLCJIIiwiaGgiLCJoIiwibW0iLCJnZXRNaW51dGVzIiwibSIsInNzIiwiZ2V0U2Vjb25kcyIsInMiLCJBIiwiU1NTIiwiZ2V0TWlsbGlzZWNvbmRzIiwiU1MiLCJTIiwiUSIsInN3YXBUb2tlbldpdGhWYWx1ZSIsImRhdGUiLCJ0b2tlbiIsImZvcm1hdCIsIm1hdGNoIiwiam9pbiIsImlzVmFsaWQiLCJpc0Zpbml0ZSIsInZhbHVlT2YiLCJmb3JFYWNoIiwidiIsImsiLCJzZXQiLCJKdXN0IiwiX3ZhbHVlIiwicHJvdG90eXBlIiwiaXNKdXN0IiwiaXNOb3RoaW5nIiwiTWF5YmUiLCJfX3ZhbHVlIiwib2YiLCJnZXRPckVsc2UiLCJmIiwiYXAiLCJOb3RoaW5nIiwiYWRkIiwiYiIsImRpdmlkZSIsImlzTmFuIiwiaXNOYU4iLCJtdWx0aXBseSIsImtleVgiLCJrZXlZIiwibyIsIk9iamVjdCIsImhhcyIsInByb3AiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJoYXNJbiIsImlzRW1wdHlPYmplY3QiLCJrZXkiLCJrZXlzIiwicHVzaCIsIm1lcmdlIiwib2JqTCIsIm9ialIiLCJyZXN1bHQiLCJhc3NpZ24iLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwibmFtZXMiLCJmaWx0ZXIiLCJpbmRleE9mIiwic2VwYXJhdG9yIiwiYXJncyIsInNsaWNlIiwic2hpZnQiLCJyZXBsYWNlIiwiaWR4IiwiY2hhckF0IiwiYWRqdXN0IiwiYWRqdXN0V2l0aCIsInByZWQiLCJfZm4iLCJhbGwiLCJyZXMiLCJhbGxQYXNzIiwiY2JzIiwiYWx3YXlzIiwiYW5kIiwiYW55IiwiaXNGdW5jdGlvbiIsImZucyIsInZhbHMiLCJhY2MiLCJjb21wb3NlIiwiZnVucyIsImZ1biIsImN1cnJ5IiwiYXJnc2xlbiIsImNyZWF0ZVJlY3Vyc2VyIiwicmVjdXJzZSIsIl9hY2MiLCJkZWZhdWx0VG8iLCJlbXB0eSIsImNvbnN0cnVjdG9yIiwiZXF1YWxzIiwiZXhpc3RzIiwiZmluZEluZGV4IiwidHlwZU1hcCIsImlkZW50aWNhbCIsImlkZW50aXR5IiwiaXMiLCJDdG9yIiwiaXNFbXB0eSIsImxpZnQiLCJsaWZ0ZWQiLCJhbm9uIiwibWF4Iiwibm90Iiwib3IiLCJ0cnV0aHkiLCJ0eXBlIiwidG9TdHJpbmciLCJ6aXAiLCJ6aXBXaXRoIiwiYXJyIiwibGVuIiwibWluIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7O0FBTWUsU0FBU0EsTUFBVCxDQUFp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QUFYLEVBQW1COEcsQ0FBQyxDQUFDOUcsTUFBckIsQ0FBWjtBQUNBLE1BQUlJLENBQUMsR0FBRyxDQUFSOztBQUNBLE9BQUtBLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzZMLEdBQWhCLEVBQXFCN0wsQ0FBQyxFQUF0QixFQUEwQjtBQUN4QjRMLE9BQUcsQ0FBQ2hFLElBQUosQ0FBUzFILEVBQUUsQ0FBQ1IsQ0FBQyxDQUFDTSxDQUFELENBQUYsRUFBTzBHLENBQUMsQ0FBQzFHLENBQUQsQ0FBUixDQUFYO0FBQ0Q7O0FBQ0QsU0FBTzRMLEdBQVA7QUFDRCxDQVJjLEMiLCJmaWxlIjoiZnVuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJmdW4uanNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZnVuLmpzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZ1bi5qc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIGEgY3VycmllZCBmdW5jdGlvbiB3aXRoIGFyaXR5IDFcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkxIChmbikge1xyXG4gIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkIChhKSB7XHJcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMFxyXG4gICAgICA/IGZuXHJcbiAgICAgIDogZm4oYSlcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIGVxdWFsc1xyXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuaW1wb3J0IG5vdCBmcm9tICcuLi91dGlsL25vdCdcclxuaW1wb3J0IGVxdWFscyBmcm9tICcuLi91dGlsL2VxdWFscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFsc0FycmF5ICh4LCB5KSB7XHJcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKG5vdChlcXVhbHMoeFtpXSwgeVtpXSkpKSByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufSlcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIGZvbGRcclxuICpcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIGEpIHtcclxuICBsZXQgaSA9IC0xXHJcbiAgY29uc3QgbCA9IGEubGVuZ3RoXHJcbiAgbGV0IHIgPSBpbml0XHJcbiAgd2hpbGUgKCsraSA8IGwpIHtcclxuICAgIHIgPSBjYihyLCBhW2ldLCBpLCBhKVxyXG4gIH1cclxuICByZXR1cm4gclxyXG59KVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ0FycmF5JylcclxuIiwiLyoqXHJcbiAqIE1hcHMgb3ZlciBhbiBhcnJheSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IFthXSAtPiBbYV1cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcclxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxyXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcclxuICBsZXQgaSA9IC0xXHJcbiAgY29uc3QgbCA9IGEubGVuZ3RoXHJcbiAgY29uc3QgciA9IG5ldyBBcnJheShsKVxyXG4gIHdoaWxlICgrK2kgPCBsKSB7XHJcbiAgICByW2ldID0gY2IoYVtpXSwgaSwgYSlcclxuICB9XHJcbiAgcmV0dXJuIHJcclxufSlcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDE4LzAzLzIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9BcnJheSAoeCkge1xyXG4gIHJldHVybiB4Lmxlbmd0aCA9PT0gMSA/IFt4WzBdXSA6IEFycmF5LmFwcGx5KG51bGwsIHgpXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiB1bmlvblxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiB1bmlvbkFycmF5IChhcnJheUwsIGFycmF5Uikge1xyXG4gIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyYXlMLmNvbmNhdChhcnJheVIpKSlcclxufSlcclxuIiwiLyoqXHJcbiAqIEFsd2F5cyByZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCBhIEZhbHNlIGJvb2xlYW5cclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyBhIC0+ICgqIC0+IGZhbHNlKVxyXG4gKiBAcGFyYW0geyp9IGFcclxuICogQHJldHVybiB7RnVuY3Rpb259XHJcbiAqKi9cclxuaW1wb3J0IGFsd2F5cyBmcm9tICcuLi91dGlsL2Fsd2F5cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsd2F5cyhmYWxzZSlcclxuIiwiLyoqXHJcbiAqIEFsd2F5cyByZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCBhIFRydWUgYm9vbGVhblxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIGEgLT4gKCogLT4gdHJ1ZSlcclxuICogQHBhcmFtIHsqfSBhXHJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxyXG4gKiovXHJcbmltcG9ydCBhbHdheXMgZnJvbSAnLi4vdXRpbC9hbHdheXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbHdheXModHJ1ZSlcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdCb29sZWFuJylcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDE4LzAzLzIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PTlRIUyA9IFtcclxuICAnSmFudWFyeScsXHJcbiAgJ0ZlYnJ1YXJ5JyxcclxuICAnTWFyY2gnLFxyXG4gICdBcHJpbCcsXHJcbiAgJ01heScsXHJcbiAgJ0p1bmUnLFxyXG4gICdKdWx5JyxcclxuICAnQXVndXN0JyxcclxuICAnU2VwdGVtYmVyJyxcclxuICAnT2N0b2JlcicsXHJcbiAgJ05vdmVtYmVyJyxcclxuICAnRGVjZW1iZXInXHJcbl1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDE4LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgV0VFS0RBWVMgPSBbXHJcbiAgJ1N1bmRheScsXHJcbiAgJ01vbmRheScsXHJcbiAgJ1R1ZXNkYXknLFxyXG4gICdXZWRuZXNkYXknLFxyXG4gICdUaHVyc2RheScsXHJcbiAgJ0ZyaWRheScsXHJcbiAgJ1NhdHVyZGF5J1xyXG5dXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoc3RhcnQsIGVuZCkgPT4ge1xyXG4gIHJldHVybiAobmV3IERhdGUoc3RhcnQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGVuZCkuZ2V0VGltZSgpKVxyXG59KVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyMC8wMS8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBpc1ZhbGlkRGF0ZSBmcm9tICcuL2lzVmFsaWQnXHJcbmltcG9ydCB7IFdFRUtEQVlTIH0gZnJvbSAnLi4vY29uc3RhbnRzL1dFRUtEQVlTJ1xyXG5pbXBvcnQgeyBNT05USFMgfSBmcm9tICcuLi9jb25zdGFudHMvTU9OVEhTJ1xyXG5cclxuY29uc3QgZ2V0V2VlayA9IChkKSA9PiB7XHJcbiAgLy8gQ29weSBkYXRlIHNvIGRvbid0IG1vZGlmeSBvcmlnaW5hbFxyXG4gIGQgPSBuZXcgRGF0ZShEYXRlLlVUQyhkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSwgZC5nZXREYXRlKCkpKVxyXG4gIC8vIFNldCB0byBuZWFyZXN0IFRodXJzZGF5OiBjdXJyZW50IGRhdGUgKyA0IC0gY3VycmVudCBkYXkgbnVtYmVyXHJcbiAgLy8gTWFrZSBTdW5kYXkncyBkYXkgbnVtYmVyIDdcclxuICBkLnNldFVUQ0RhdGUoZC5nZXRVVENEYXRlKCkgKyA0IC0gKGQuZ2V0VVRDRGF5KCkgfHwgNykpXHJcbiAgLy8gR2V0IGZpcnN0IGRheSBvZiB5ZWFyXHJcbiAgbGV0IHllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpXHJcblxyXG4gIC8vIENhbGN1bGF0ZSBmdWxsIHdlZWtzIHRvIG5lYXJlc3QgVGh1cnNkYXlcclxuICBsZXQgd2Vla05vID0gTWF0aC5jZWlsKCgoKGQgLSB5ZWFyU3RhcnQpIC8gODY0MDAwMDApICsgMSkgLyA3KVxyXG5cclxuICAvLyBSZXR1cm4gYXJyYXkgb2YgeWVhciBhbmQgd2VlayBudW1iZXJcclxuICByZXR1cm4gW2QuZ2V0VVRDRnVsbFllYXIoKSwgd2Vla05vXVxyXG59XHJcblxyXG4vLyB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgdGhlIGRhdGUgZm9ybWF0dGluZ1xyXG5jb25zdCBaRVJPUyA9ICcwMDAwMDAwMCdcclxuY29uc3QgbGFzdE4gPSBjdXJyeSgobiwgc3RyKSA9PiBzdHIuc3Vic3RyaW5nKHN0ci5sZW5ndGggLSBuLCBzdHIubGVuZ3RoKSlcclxuY29uc3QgZmlyc3ROID0gY3VycnkoKG4sIHN0cikgPT4gc3RyLnN1YnN0cmluZygwLCBuKSlcclxuY29uc3QgZmlsbCA9IGN1cnJ5KChkaWdpdHMsIG4pID0+IGxhc3ROKGRpZ2l0cywgWkVST1MgKyBuKSlcclxuXHJcbi8vIGRhdGUvdGltZSByZWdleFxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcclxuY29uc3QgREFURV9UT0tFTlMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UXxZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nXHJcblxyXG5jb25zdCBtb2RDZWlsaW5nID0gKG1vZCwgdmFsKSA9PiB2YWwgJSBtb2QgfHwgbW9kXHJcblxyXG4vLyB0b2tlbnMgbWFwIHRvIGdldCBwYXJ0cyBvZiB0aGUgZGF0ZSAvdGltZVxyXG5jb25zdCB0b2tlbnMgPSB7XHJcbiAgWVlZWTogZCA9PiBmaWxsKDQsIGQuZ2V0RnVsbFllYXIoKSksXHJcbiAgWVk6IGQgPT4gbGFzdE4oMiwgZmlsbCg0LCBkLmdldEZ1bGxZZWFyKCkpKSxcclxuICBNTU1NOiBkID0+IE1PTlRIU1tkLmdldE1vbnRoKCldLFxyXG4gIE1NTTogZCA9PiBmaXJzdE4oMywgTU9OVEhTW2QuZ2V0TW9udGgoKV0pLFxyXG4gIE1NOiBkID0+IGZpbGwoMiwgZC5nZXRNb250aCgpICsgMSksXHJcbiAgTTogZCA9PiBkLmdldE1vbnRoKCkgKyAxLFxyXG4gIHc6IGQgPT4gZ2V0V2VlayhkKSxcclxuICB3dzogZCA9PiBmaWxsKDIsIGdldFdlZWsoZCkpLFxyXG4gIEREOiBkID0+IGZpbGwoMiwgZC5nZXREYXRlKCkpLFxyXG4gIEQ6IGQgPT4gZC5nZXREYXRlKCksXHJcbiAgZGRkZDogZCA9PiBXRUVLREFZU1tkLmdldERheSgpXSxcclxuICBkZGQ6IGQgPT4gZmlyc3ROKDMsIFdFRUtEQVlTW2QuZ2V0RGF5KCldKSxcclxuICBkZDogZCA9PiBmaXJzdE4oMiwgV0VFS0RBWVNbZC5nZXREYXkoKV0pLFxyXG4gIGQ6IGQgPT4gZC5nZXREYXkoKSxcclxuICBISDogZCA9PiBmaWxsKDIsIGQuZ2V0SG91cnMoKSksXHJcbiAgSDogZCA9PiBkLmdldEhvdXJzKCksXHJcbiAgaGg6IGQgPT4gZmlsbCgyLCBtb2RDZWlsaW5nKDEyLCBkLmdldEhvdXJzKCkpKSxcclxuICBoOiBkID0+IG1vZENlaWxpbmcoMTIsIGQuZ2V0SG91cnMoKSksXHJcbiAgbW06IGQgPT4gZmlsbCgyLCBkLmdldE1pbnV0ZXMoKSksXHJcbiAgbTogZCA9PiBkLmdldE1pbnV0ZXMoKSxcclxuICBzczogZCA9PiBmaWxsKDIsIGQuZ2V0U2Vjb25kcygpKSxcclxuICBzOiBkID0+IGQuZ2V0U2Vjb25kcygpLFxyXG4gIEE6IGQgPT4gZC5nZXRIb3VycygpID4gMTEgPyAnUE0nIDogJ0FNJyxcclxuICBhOiBkID0+IGQuZ2V0SG91cnMoKSA+IDExID8gJ3BtJyA6ICdhbScsXHJcbiAgU1NTOiBkID0+IGZpbGwoMywgZC5nZXRNaWxsaXNlY29uZHMoKSksXHJcbiAgU1M6IGQgPT4gZmlyc3ROKDIsIGZpbGwoMywgZC5nZXRNaWxsaXNlY29uZHMoKSkpLFxyXG4gIFM6IGQgPT4gZmlyc3ROKDEsIGZpbGwoMywgZC5nZXRNaWxsaXNlY29uZHMoKSkpLFxyXG4gIFE6IGQgPT4gTWF0aC5jZWlsKChkLmdldE1vbnRoKCkgKyAxKSAvIDMpXHJcbn1cclxuXHJcbi8vIG1hcCB0aGlzIGZ1bmN0aW9uIHRvIGdldCB0aGUgYWN0dWFsIHRpbWUvZGF0ZSB2YWx1ZSBmb3IgZWFjaCB0b2tlblxyXG5jb25zdCBzd2FwVG9rZW5XaXRoVmFsdWUgPSBjdXJyeSgoZGF0ZSwgdG9rZW4pID0+IHtcclxuICByZXR1cm4gdG9rZW5zW3Rva2VuXSA/IHRva2Vuc1t0b2tlbl0oZGF0ZSkgOiB0b2tlblxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKGZvcm1hdCwgZGF0ZSkgPT4ge1xyXG4gIC8vIGNoZWNrIGZvciB2YWxpZCBkYXRlXHJcbiAgaWYgKCFpc1ZhbGlkRGF0ZShkYXRlKSkgcmV0dXJuICdJbnZhbGlkIERhdGUnIC8vIHJldHVybiBzdHJpbmdcclxuICByZXR1cm4gZm9ybWF0Lm1hdGNoKERBVEVfVE9LRU5TKS5tYXAoc3dhcFRva2VuV2l0aFZhbHVlKGRhdGUpKS5qb2luKCcnKSAvLyByZXR1cm4gam9pbmVkIHN0cmluZ1xyXG59KVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpcygnRGF0ZScpXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwOS8wMy8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGRpZmZEYXRlIGZyb20gJy4vZGlmZkRhdGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4ge1xyXG4gIHJldHVybiBkaWZmRGF0ZShuZXcgRGF0ZSgpKShkKSA8IDBcclxufVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cclxuICovXHJcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQgKHgpIHtcclxuICAvLyBub2luc3BlY3Rpb24gSlNDaGVja0Z1bmN0aW9uU2lnbmF0dXJlc1xyXG4gIHJldHVybiBpc0RhdGUoeCkgJiYgaXNGaW5pdGUoeC52YWx1ZU9mKCkpXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyA4NjQwMDAwMCAvLyAyNCo2MCo2MCoxMDAwID0gODY0MDAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDM2MDAwMDAgLy8gNjAqNjAqMTAwMCA9IDM2MDAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDYwMDAwIC8vIDYwKjEwMDAgPSA2MDAwMFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gMTAwMFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vLyBhcnJheVxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFsc0FycmF5IH0gZnJvbSAnYXJyYXkvZXF1YWxzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzQXJyYXkgfSBmcm9tICdhcnJheS9pcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0FycmF5IH0gZnJvbSAnYXJyYXkvdG8nXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pb25BcnJheSB9IGZyb20gJ2FycmF5L3VuaW9uJ1xyXG5cclxuLy8gYm9vbGVhblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzQm9vbGVhbiB9IGZyb20gJ2Jvb2xlYW4vaXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRiB9IGZyb20gJ2Jvb2xlYW4vRidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUIH0gZnJvbSAnYm9vbGVhbi9UJ1xyXG5cclxuLy8gbW9uYWRzXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMganVzdCB9IGZyb20gJ21vbmFkcy9KdXN0J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1heWJlIH0gZnJvbSAnbW9uYWRzL01heWJlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vdGhpbmcgfSBmcm9tICdtb25hZHMvTm90aGluZydcclxuXHJcbi8vIG51bWJlclxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTnVtYmVyIH0gZnJvbSAnbnVtYmVyL2lzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTmFuIH0gZnJvbSAnbnVtYmVyL2lzTmFuJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkZCB9IGZyb20gJ251bWJlci9hZGQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbXVsdGlwbHkgfSBmcm9tICdudW1iZXIvbXVsdGlwbHknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGl2aWRlIH0gZnJvbSAnbnVtYmVyL2RpdmlkZSdcclxuXHJcbi8vIG9iamVjdFxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFsc09iamVjdCB9IGZyb20gJ29iamVjdC9lcXVhbHMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNPYmplY3QgfSBmcm9tICdvYmplY3QvaXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNFbXB0eU9iamVjdCB9IGZyb20gJ29iamVjdC9pc0VtcHR5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlT2JqZWN0IH0gZnJvbSAnb2JqZWN0L21lcmdlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG9taXRGcm9tT2JqZWN0IH0gZnJvbSAnb2JqZWN0L29taXQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzIH0gZnJvbSAnb2JqZWN0L2hhcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXNJbiB9IGZyb20gJ29iamVjdC9oYXNJbidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXlzIH0gZnJvbSAnb2JqZWN0L2tleXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5c0luIH0gZnJvbSAnb2JqZWN0L2tleXNJbidcclxuXHJcbi8vIHN0cmluZ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmNhdFN0cmluZyB9IGZyb20gJ3N0cmluZy9jb25jYXQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9ybWF0U3RyaW5nIH0gZnJvbSAnc3RyaW5nL2Zvcm1hdFN0cmluZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1N0cmluZyB9IGZyb20gJ3N0cmluZy9pcydcclxuXHJcbi8vIHV0aWxcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGp1c3QgfSBmcm9tICd1dGlsL2FkanVzdCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGp1c3RXaXRoIH0gZnJvbSAndXRpbC9hZGp1c3RXaXRoJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsbCB9IGZyb20gJ3V0aWwvYWxsJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsbFBhc3MgfSBmcm9tICd1dGlsL2FsbFBhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWx3YXlzIH0gZnJvbSAndXRpbC9hbHdheXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW5kIH0gZnJvbSAndXRpbC9hbmQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW55IH0gZnJvbSAndXRpbC9hbnknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW55UGFzcyB9IGZyb20gJ3V0aWwvYW55UGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcCB9IGZyb20gJ3V0aWwvYXAnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcG9zZSB9IGZyb20gJ3V0aWwvY29tcG9zZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjdXJyeSB9IGZyb20gJ3V0aWwvY3VycnknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdFRvIH0gZnJvbSAndXRpbC9kZWZhdWx0VG8nXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZW1wdHkgfSBmcm9tICd1dGlsL2VtcHR5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFscyB9IGZyb20gJ3V0aWwvZXF1YWxzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGV4aXN0cyB9IGZyb20gJ3V0aWwvZXhpc3RzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbmRJbmRleCB9IGZyb20gJ3V0aWwvZmluZEluZGV4J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvbGQgfSBmcm9tICd1dGlsL2ZvbGQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWRlbnRpY2FsIH0gZnJvbSAndXRpbC9pZGVudGljYWwnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWRlbnRpdHkgfSBmcm9tICd1dGlsL2lkZW50aXR5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzIH0gZnJvbSAndXRpbC9pcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0VtcHR5IH0gZnJvbSAndXRpbC9pc0VtcHR5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxpZnQgfSBmcm9tICd1dGlsL2xpZnQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwIH0gZnJvbSAndXRpbC9tYXAnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWF4IH0gZnJvbSAndXRpbC9tYXgnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbm90IH0gZnJvbSAndXRpbC9ub3QnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb3IgfSBmcm9tICd1dGlsL29yJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRydXRoeSB9IGZyb20gJ3V0aWwvdHJ1dGh5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHR5cGUgfSBmcm9tICd1dGlsL3R5cGUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgemlwIH0gZnJvbSAndXRpbC96aXAnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgemlwV2l0aCB9IGZyb20gJ3V0aWwvemlwV2l0aCdcclxuXHJcbi8vIGRhdGVcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaWZmRGF0ZSB9IGZyb20gJ2RhdGUvZGlmZkRhdGUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9ybWF0RGF0ZVRpbWUgfSBmcm9tICdkYXRlL2Zvcm1hdERhdGVUaW1lJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRhdGVJcyB9IGZyb20gJ2RhdGUvaXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNGdXR1cmVEYXRlIH0gZnJvbSAnZGF0ZS9pc0Z1dHVyZURhdGUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNWYWxpZCB9IGZyb20gJ2RhdGUvaXNWYWxpZCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0RheSB9IGZyb20gJ2RhdGUvdG9EYXknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9Ib3VyIH0gZnJvbSAnZGF0ZS90b0hvdXInXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9NaW51dGVzIH0gZnJvbSAnZGF0ZS90b01pbnV0ZXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9TZWNvbmRzIH0gZnJvbSAnZGF0ZS90b1NlY29uZHMnXHJcbiIsIi8qKlxyXG4gKiBNYXBzIG92ZXIgYSBNYXAgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSB7TWFwfSBhXHJcbiAqIEByZXR1cm4ge01hcH1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuaW1wb3J0IGVtcHR5IGZyb20gJy4uL3V0aWwvZW1wdHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XHJcbiAgY29uc3QgciA9IGVtcHR5KGEpXHJcbiAgYS5mb3JFYWNoKCh2LCBrLCBtYXApID0+IHtcclxuICAgIHIuc2V0KGssIGNiKHYsIGssIG1hcCkpXHJcbiAgfSlcclxuICByZXR1cm4gclxyXG59KVxyXG4iLCJsZXQgSnVzdCA9IGZ1bmN0aW9uICh2YWwpIHtcclxuICB0aGlzLl92YWx1ZSA9IHZhbFxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbkp1c3QucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcbkp1c3QucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSnVzdFxyXG4iLCJpbXBvcnQgSnVzdCBmcm9tICcuL0p1c3QnXHJcbmltcG9ydCBOb3RoaW5nIGZyb20gJy4vTm90aGluZydcclxuXHJcbmxldCBNYXliZSA9IGZ1bmN0aW9uICh2YWwpIHtcclxuICB0aGlzLl9fdmFsdWUgPSB2YWxcclxufVxyXG5cclxuTWF5YmUub2YgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIE1heWJlKSByZXR1cm4gdmFsXHJcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBNYXliZSkge1xyXG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICByZXR1cm4gbmV3IE1heWJlKHZhbClcclxufVxyXG5cclxuTWF5YmUucHJvdG90eXBlLmdldE9yRWxzZSA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgcmV0dXJuIHRoaXMuaXNOb3RoaW5nKCkgPyBuIDogdGhpcy5fX3ZhbHVlXHJcbn1cclxuXHJcbk1heWJlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZikge1xyXG4gIGlmICh0aGlzLmlzTm90aGluZygpKSB7XHJcbiAgICByZXR1cm4gTWF5YmUub2YobnVsbClcclxuICB9XHJcbiAgcmV0dXJuIE1heWJlLm9mKGYodGhpcy5fX3ZhbHVlKSlcclxufVxyXG5cclxuTWF5YmUucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKG0pIHtcclxuICByZXR1cm4gbS5tYXAodGhpcy5fX3ZhbHVlKVxyXG59XHJcblxyXG5NYXliZS5wcm90b3R5cGUuaXNOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiAodGhpcy5fX3ZhbHVlID09IG51bGwpXHJcbn1cclxuXHJcbk1heWJlLnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuICF0aGlzLmlzTm90aGluZygpXHJcbn1cclxuXHJcbk1heWJlLnByb3RvdHlwZS5Ob3RoaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgTm90aGluZygpXHJcbn1cclxuXHJcbk1heWJlLnByb3RvdHlwZS5KdXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgSnVzdCh0aGlzLl92YWx1ZSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF5YmVcclxuIiwibGV0IE5vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbn1cclxuXHJcbk5vdGhpbmcucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5Ob3RoaW5nLnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aGluZ1xyXG4iLCIvKipcclxuICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSAyIGFyZ3VtZW50c1xyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXHJcbiAqIEByZXR1cm4ge051bWJlcn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkZCAoYSwgYikge1xyXG4gIHJldHVybiArYSArICtiXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkaXZpc2lvbiBvZiB0aGUgMiBhcmd1bWVudHNcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYlxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBkaXZpZGUgKGEsIGIpIHtcclxuICByZXR1cm4gK2EgLyArYlxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICovXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ051bWJlcicpXHJcbiIsIi8qKlxyXG4gKiBpc05hTlxyXG4gKiBDaGVja3MgaWYgbnVtYmVyIGlzIE5BTlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKi9cclxuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXMnXHJcbmltcG9ydCBhbmQgZnJvbSAnLi4vdXRpbC9hbmQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc05hbiAoeCkge1xyXG4gIHJldHVybiBhbmQoaXNOdW1iZXIoeCksIGlzTmFOKHgpKVxyXG59O1xyXG4iLCIvKipcclxuICogUmV0dXJucyB0aGUgcHJvZHVjdCBvZiB0aGUgMiBhcmd1bWVudHNcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYlxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtdWx0aXBseSAoYSwgYikge1xyXG4gIHJldHVybiArYSAqICtiXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBlcXVhbHNcclxuICogY2hlY2tzIGZvciBlcXVhbGl0eVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBleGlzdHMgZnJvbSAnLi4vdXRpbC9leGlzdHMnXHJcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXHJcbmltcG9ydCBhbmQgZnJvbSAnLi4vdXRpbC9hbmQnXHJcbmltcG9ydCBpc0VtcHR5T2JqZWN0IGZyb20gJy4vaXNFbXB0eSdcclxuaW1wb3J0IGVxdWFscyBmcm9tICcuLi91dGlsL2VxdWFscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KCh4LCB5KSA9PiB7XHJcbiAgaWYgKGFuZChpc0VtcHR5T2JqZWN0KHgpLCBpc0VtcHR5T2JqZWN0KHkpKSkgcmV0dXJuIHRydWVcclxuXHJcbiAgZm9yIChsZXQga2V5WCBpbiB4KSB7XHJcbiAgICAvLyBub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXHJcbiAgICBpZiAobm90KGVxdWFscyh4W2tleVhdLCB5W2tleVhdKSkpIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQga2V5WSBpbiB5KSB7XHJcbiAgICBpZiAobm90KGV4aXN0cyh4W2tleVldKSkgJiYgZXhpc3RzKHlba2V5WV0pKSByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBmb2xkXHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIG8pIHtcclxuICBjb25zdCBrID0ga2V5cyhvKVxyXG4gIGxldCBpID0gLTFcclxuICBjb25zdCBsID0gay5sZW5ndGhcclxuICBsZXQgciA9IE9iamVjdChpbml0KVxyXG4gIHdoaWxlICgrK2kgPCBsKSB7XHJcbiAgICByID0gY2Iociwgb1trW2ldXSwga1tpXSwgbylcclxuICB9XHJcbiAgcmV0dXJuIHJcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eVxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIHtTdHJpbmd9IC0+IHtPYmplY3R9IC0+IEJvb2xlYW5cclxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaGFzIChwcm9wLCBvYmopIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eSwgZXZlbiBpZiBpdCBpcyBpbmhlcml0ZWRcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyB7U3RyaW5nfSAtPiB7T2JqZWN0fSAtPiBCb29sZWFuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGhhc0luIChwcm9wLCBvYmopIHtcclxuICByZXR1cm4gcHJvcCBpbiBvYmpcclxufSlcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqL1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdPYmplY3QnKVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtcHR5T2JqZWN0ICh4KSB7XHJcbiAgZm9yIChsZXQga2V5IGluIHgpIHtcclxuICAgIGlmICh4Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBvd24ga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyBhIC0+IFtiXVxyXG4gKiBAcGFyYW0ge09iamVjdH1cclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKE9iamVjdChhKSlcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYWxsIHRoZSBrZXlzIG9mIGFuIG9iamVjdCBhcyBhbiBBcnJheVxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIGEgLT4gW2JdXHJcbiAqIEBwYXJhbSB7T2JqZWN0fVxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGtleXMgKGEpIHtcclxuICBjb25zdCByID0gW11cclxuICBmb3IgKGNvbnN0IGsgaW4gYSkge1xyXG4gICAgci5wdXNoKGspXHJcbiAgfVxyXG4gIHJldHVybiByXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBNYXBzIG92ZXIgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxyXG4gKiBAcGFyYW0ge09iamVjdH0gYVxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBlbXB0eSBmcm9tICcuLi91dGlsL2VtcHR5J1xyXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XHJcbiAgY29uc3QgayA9IGtleXMoYSlcclxuICBsZXQgaSA9IC0xXHJcbiAgY29uc3QgbCA9IGsubGVuZ3RoXHJcbiAgY29uc3QgciA9IGVtcHR5KGEpXHJcbiAgd2hpbGUgKCsraSA8IGwpIHtcclxuICAgIHJba1tpXV0gPSBjYihhW2tbaV1dLCBrW2ldLCBhKVxyXG4gIH1cclxuICByZXR1cm4gclxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogZXF1YWxzXHJcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4uL3V0aWwvaWRlbnRpY2FsJ1xyXG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vb2JqZWN0L2lzJ1xyXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi9hcnJheS9pcydcclxuaW1wb3J0IHVuaW9uIGZyb20gJy4uL2FycmF5L3VuaW9uJ1xyXG5cclxuY29uc3QgbWVyZ2UgPSBjdXJyeSgob2JqTCwgb2JqUikgPT4ge1xyXG4gIGxldCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpMKVxyXG5cclxuICBpZiAoaWRlbnRpY2FsKG9iakwsIG9ialIpKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb2JqTClcclxuICB9XHJcbiAgZm9yIChsZXQga2V5IGluIG9ialIpIHtcclxuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9ialIsIGtleSkpIHtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGNvbnN0IG9sZFZhbHVlID0gb2JqUltrZXldXHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IG9iakxba2V5XVxyXG5cclxuICAgIGlmIChpc09iamVjdChvbGRWYWx1ZSkgJiYgaXNPYmplY3QobmV3VmFsdWUpKSB7XHJcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2Uob2xkVmFsdWUsIG5ld1ZhbHVlKVxyXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG5ld1ZhbHVlKSkge1xyXG4gICAgICByZXN1bHRba2V5XSA9IHVuaW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdFtrZXldID0gb2xkVmFsdWUgLy8gVE9ETzogdGhpcyBpcyBhIHJlZmVyZW5jZSwgc2hvdWxkIGJlIGNsb25lXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lcmdlXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBlcXVhbHNcclxuICogY2hlY2tzIGZvciBlcXVhbGl0eVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgob2JqLCBuYW1lcykgPT4ge1xyXG4gIGxldCByZXN1bHQgPSB7fVxyXG5cclxuICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoa2V5KSA9PiB7XHJcbiAgICByZXR1cm4gbmFtZXMuaW5kZXhPZihrZXkpID09PSAtMVxyXG4gIH0pLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59KVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgY29uY2F0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciA9ICcsJykgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xyXG4gIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxyXG5cclxuICByZXR1cm4gYXJncy5qb2luKHNlcGFyYXRvcilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uY2F0XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHRvQXJyYXkgZnJvbSAnLi4vYXJyYXkvdG8nXHJcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0cikgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xyXG4gIGxldCBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpXHJcblxuICBhcmdzLnNoaWZ0KClcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoL3soXFxkKyl9L2csIChtYXRjaCwgaWR4KSA9PiB7XHJcbiAgICByZXR1cm4gbm90KGlzKCdVbmRlZmluZWQnLCBhcmdzW2lkeF0pKSA/IGFyZ3NbaWR4XSA6IG1hdGNoXHJcbiAgfSlcclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICovXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ1N0cmluZycpXHJcbiIsIi8qKlxyXG4gKiBNYXBzIG92ZXIgYSBzdHJpbmcgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBbYV0gLT4gW2FdXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcclxuICogQHJldHVybiB7SXRlcmFibGV9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XHJcbiAgbGV0IGkgPSAtMVxyXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxyXG4gIGxldCByID0gJydcclxuICB3aGlsZSAoKytpIDwgbCkge1xyXG4gICAgciArPSBjYihhLmNoYXJBdChpKSwgaSwgYSlcclxuICB9XHJcbiAgcmV0dXJuIHJcclxufSlcclxuIiwiLyoqXHJcbiAqIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgKGEgLT4gYSkgLT4gbnVtIC0+IFthXSAtPiBbYV1cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSB0byBtb2RpZnkgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleFxyXG4gKiBAcGFyYW0ge051bWJlcn0gaSAtIFRoZSBpbmRleCBhdCB3aGljaCB0byBtb2RpZnkgdGhlIGFycmF5LCBhY2NlcHRzIHBvc3RpdGl2ZSBhbmQgbmVnYXRpdmUgaW5kZXhlc1xyXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBbYV1cclxuICogQHJldHVybiB7SXRlcmFibGV9IFthXVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWRqdXN0IChmbiwgaSwgYSkge1xyXG4gIGNvbnN0IHIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhKVxyXG4gIGNvbnN0IGlkeCA9IGkgPCAwID8gci5sZW5ndGggKyBpIDogaVxyXG4gIGlmICghYVtpZHhdKSByZXR1cm4gclxyXG4gIHJbaWR4XSA9IGZuKHJbaWR4XSlcclxuICByZXR1cm4gclxyXG59KVxyXG4iLCIvKipcclxuICogTW9kaWZpZXMgYW4gaXRlbSBpbiBhbiBhcnJheSB1c2luZyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoYSAtPiBhKSAtPiAoKGEgLT4gW2FdKSAtPiBbYV0gLT4gbnVtKSAtPiBbYV0gLT4gW2FdXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gdG8gbW9kaWZ5IHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZCAtIFRoZSBwcmVkaWNhdGUgdGhhdCByZXR1cm5zIHRoZSBpbmRleGVzIGlmIGZvdW5kXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IFthXVxyXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX0gW2FdXHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBtYXAgZnJvbSAnLi4vdXRpbC9tYXAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhZGp1c3RXaXRoIChmbiwgcHJlZCwgYSkge1xyXG4gIGNvbnN0IF9mbiA9IHggPT4ge1xyXG4gICAgaWYgKHByZWQoeCkpIHtcclxuICAgICAgcmV0dXJuIGZuKHgpXHJcbiAgICB9XHJcbiAgICByZXR1cm4geFxyXG4gIH1cclxuICByZXR1cm4gbWFwKF9mbiwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSkpXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gQm9vbGVhblxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxyXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbGwgKGNiLCBhKSB7XHJcbiAgbGV0IHJlcyA9IHRydWVcclxuICBmb3IgKGxldCBpIGluIGEpIHtcclxuICAgIGlmICghY2IoYVtpXSkpIHtcclxuICAgICAgcmVzID0gZmFsc2VcclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59KVxyXG4iLCIvKipcclxuICogQXBwbGllcyBhIGxpc3Qgb2YgcHJlZGljYXRlcyB0byB0aGUgZGF0YSBhbmQgcmV0dXJucyB0cnVlIGlmIGFsbCBwYXNzXHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgWygqLi4uIC0+IEJvb2xlYW4pXSAtPiAoKi4uLiAtPiBCb29sZWFuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHByZWRpY2F0ZXMgQW4gYXJyYXkgb2YgcHJlZGljYXRlcyB0byBjaGVja1xyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGNvbWJpbmVkIHByZWRpY2F0ZVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWxsUGFzcyAoY2JzLCBhKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICghY2JzW2ldKGEpKSByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIHByb3ZpZGVkXHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgYSAtPiAoKiAtPiBhKVxyXG4gKiBAcGFyYW0geyp9IGFcclxuICogQHJldHVybiB7RnVuY3Rpb259XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbHdheXMgKHgpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4geCB9XHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiB4LCB5XHJcbiAqIFJldHVybnMgYm9vbGVhblxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbmQgKHgsIHkpIHtcclxuICByZXR1cm4geCAmJiB5XHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb24gb2YgdGhlIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoVE9ETylcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcclxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYW55IChjYiwgYSkge1xyXG4gIGxldCByZXMgPSBmYWxzZVxyXG4gIGZvciAobGV0IGkgaW4gYSkge1xyXG4gICAgaWYgKGNiKGFbaV0pKSB7XHJcbiAgICAgIHJlcyA9IHRydWVcclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59KVxyXG4iLCIvKipcclxuICogQXBwbGllcyBhIGxpc3Qgb2YgcHJlZGljYXRlcyB0byB0aGUgZGF0YSBhbmQgcmV0dXJucyB0cnVlIGlmIG9uZSBwYXNzZXNcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyBbKCouLi4gLT4gQm9vbGVhbildIC0+ICgqLi4uKSAtPiBCb29sZWFuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHByZWRpY2F0ZXMgQW4gYXJyYXkgb2YgcHJlZGljYXRlcyB0byBjaGVja1xyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGNvbWJpbmVkIHByZWRpY2F0ZVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWxsUGFzcyAoY2JzLCBhKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChjYnNbaV0oYSkpIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59KVxyXG4iLCIvKipcclxuICogQXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIHJldHVybnMgYSBjb21iaW5lZCByZXN1bHQgYXJyYXlcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyBAc2lnIFthIC0+IGJdIC0+IFthXSAtPiBbYl1cclxuICogQHBhcmFtIHtbRnVuY3Rpb25dIHwge0Z1bmN0aW9ufSB8IHtBcHBsaWNhdGl2ZX19IGZucyAtIEFuIGFycmF5IG9mIGZ1bmN0aW9ucyBvciBhIGZ1bmN0aW9uIG9yIGFuIGFwcGxpY2F0aXZlXHJcbiAqIEBwYXJhbSB7WypdfSB2YWxzIC0gQW4gYXJyYXkgb2YgdmFsdWVzXHJcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfSBbYV1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuaW1wb3J0IGN1cnJ5MSBmcm9tICcuLi9fcHJpdmF0ZS9jdXJyeTEnXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5pbXBvcnQgZm9sZCBmcm9tICcuLi9hcnJheS9mb2xkJ1xyXG5pbXBvcnQgbWFwIGZyb20gJy4uL2FycmF5L21hcCdcclxuXHJcbmNvbnN0IGlzRnVuY3Rpb24gPSBpcygnRnVuY3Rpb24nKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYXAgKGZucywgdmFscykge1xyXG4gIGlmIChpc0Z1bmN0aW9uKGZucy5hcCkpIHtcclxuICAgIHJldHVybiBmbnMuYXAodmFscylcclxuICB9XHJcbiAgaWYgKGlzRnVuY3Rpb24oZm5zKSkge1xyXG4gICAgcmV0dXJuIHggPT4gZm5zKHgpKHZhbHMoeCkpXHJcbiAgfVxyXG4gIHJldHVybiBmb2xkKChhY2MsIGYpID0+IGFjYy5jb25jYXQobWFwKGN1cnJ5MShmKSwgdmFscykpLCBbXSwgZm5zKVxyXG59KVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjUvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvc2UgKCkge1xyXG4gIGxldCBmdW5zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGluaXQgPSBmdW5zW2Z1bnMubGVuZ3RoIC0gMV1cclxuICAgIGxldCByZXN1bHQgPSBbaW5pdC5hcHBseShpbml0LCBhcmd1bWVudHMpXVxyXG4gICAgbGV0IGkgPSBmdW5zLmxlbmd0aCAtIDJcclxuXHJcbiAgICBmb3IgKGk7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgIGNvbnN0IGZ1biA9IGZ1bnNbaV1cclxuXHJcbiAgICAgIHJlc3VsdCA9IFtmdW4uYXBwbHkoZnVuLCByZXN1bHQpXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFswXVxyXG4gIH1cclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI1LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeSAoZnVuKSB7XHJcbiAgY29uc3QgYXJnc2xlbiA9IGZ1bi5sZW5ndGhcclxuXHJcbiAgaWYgKGFyZ3NsZW4gPT09IDApIHtcclxuICAgIHJldHVybiBmdW5cclxuICB9XHJcbiAgcmV0dXJuIGNyZWF0ZVJlY3Vyc2VyKFtdKVxyXG5cclxuICBmdW5jdGlvbiByZWN1cnNlIChhY2MsIGFyZ3MpIHtcclxuICAgIGNvbnN0IF9hY2MgPSBhY2MuY29uY2F0KGFyZ3MpXHJcbiAgICByZXR1cm4gX2FjYy5sZW5ndGggPCBhcmdzbGVuXHJcbiAgICAgID8gY3JlYXRlUmVjdXJzZXIoX2FjYylcclxuICAgICAgOiBmdW4uYXBwbHkodGhpcywgX2FjYylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlY3Vyc2VyIChhY2MpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiByZWN1cnNlKGFjYywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIGEgLT4gYiAtPiBhIHwgYlxyXG4gKiBAcGFyYW0ge2F9IGRlZmF1bHQgVGhlIGRlZmF1bHQgdmFsdWUuXHJcbiAqIEBwYXJhbSB7Yn0gdmFsIGB2YWxgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZCBvZiBgZGVmYXVsdGAgdW5sZXNzIGB2YWxgIGlzIGBudWxsYCwgYHVuZGVmaW5lZGAgb3IgYE5hTmAuXHJcbiAqIEByZXR1cm4geyp9IFRoZSBzZWNvbmQgdmFsdWUgaWYgaXQgaXMgbm90IGBudWxsYCwgYHVuZGVmaW5lZGAgb3IgYE5hTmAsIG90aGVyd2lzZSB0aGUgZGVmYXVsdCB2YWx1ZVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZGVmYXVsdFRvIChkLCB2KSB7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcclxuICByZXR1cm4gdiA9PSBudWxsIHx8IHYgIT09IHYgPyBkIDogdlxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogZW1wdHlcclxuICogUmV0dXJucyB0aGUgZW1wdHkgZXF1aXZhbGVudCBvZiB0aGUgZmlyc3QgYXJndW1lbnRcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbXB0eSAoeCkge1xyXG4gIHJldHVybiBuZXcgeC5jb25zdHJ1Y3RvcigpXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBlcXVhbHNcclxuICogY2hlY2tzIGZvciBlcXVhbGl0eVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXHJcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi9pZGVudGljYWwnXHJcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcclxuaW1wb3J0IG5vdCBmcm9tICcuL25vdCdcclxuaW1wb3J0IG9yIGZyb20gJy4vb3InXHJcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9vYmplY3QvaXMnXHJcbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzJ1xyXG5pbXBvcnQgaXNCb29sZWFuIGZyb20gJy4uL2Jvb2xlYW4vaXMnXHJcbmltcG9ydCBpc051bWJlciBmcm9tICcuLi9udW1iZXIvaXMnXHJcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuLi9zdHJpbmcvaXMnXHJcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi4vZGF0ZS9pcydcclxuaW1wb3J0IGVxdWFsc0FycmF5IGZyb20gJy4uL2FycmF5L2VxdWFscydcclxuaW1wb3J0IGVxdWFsc09iamVjdCBmcm9tICcuLi9vYmplY3QvZXF1YWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzICh4LCB5KSB7XHJcbiAgaWYgKGlkZW50aWNhbCh4LCB5KSkgcmV0dXJuIHRydWVcclxuXHJcbiAgaWYgKHR5cGUoeCkgIT09IHR5cGUoeSkpIHJldHVybiBmYWxzZVxyXG5cclxuICBpZiAob3Iobm90KGV4aXN0cyh4KSksIG5vdChleGlzdHMoeSkpKSkgcmV0dXJuIGZhbHNlXHJcblxyXG4gIGlmICh4LmNvbnN0cnVjdG9yICE9PSB5LmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgaWYgKGlzU3RyaW5nKHgpIHx8IGlzQm9vbGVhbih4KSB8fCBpc051bWJlcih4KSB8fCBpc0RhdGUoeCkpIHtcclxuICAgIHJldHVybiBpZGVudGljYWwoeC52YWx1ZU9mKCksIHkudmFsdWVPZigpKVxyXG4gIH1cclxuICBpZiAoaXNBcnJheSh4KSkge1xyXG4gICAgcmV0dXJuIGVxdWFsc0FycmF5KHgsIHkpXHJcbiAgfSBlbHNlIGlmIChpc09iamVjdCh4KSkge1xyXG4gICAgcmV0dXJuIGVxdWFsc09iamVjdCh4LCB5KVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufSlcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGlzdHMgKHgpIHtcclxuICByZXR1cm4gISh4ID09IG51bGwpXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBGaW5kIHRoZSBpbmRleCBtYXRjaGluZyBhIHByZWRpY2F0ZVxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IFthXSAtPiBOdW1iZXJcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gUHJlZGljYXRlIGZ1bmN0aW9uIHJldHVybnMgYSBib29sZWFuXHJcbiAqIEBwYXJhbSB7WypdfSBBbiBhcnJheSBsaWtlIG9iamVjdFxyXG4gKiBAcmV0dXJuXHJcbiAqKi9cclxuXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZmluZEluZGV4IChmbiwgYSkge1xyXG4gIGxldCBpID0gMFxyXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxyXG4gIHdoaWxlIChpIDwgbCkge1xyXG4gICAgaWYgKGZuKGFbaV0pKSB7XHJcbiAgICAgIHJldHVybiBpXHJcbiAgICB9XHJcbiAgICBpICs9IDFcclxuICB9XHJcbiAgcmV0dXJuIC0xXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnogaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgbGlrZSBvYmplY3QgYW5kIGNhbGxhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlw6lcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoKGEsIGIsIGMsIGEpIOKGkiBhKSDihpIgYSDihpIgW2JdIOKGkiBhXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIHJlY2VpdmVzIDQgdmFsdWVzOiB0aGUgYWNjdW11bGF0b3IsIHRoZSBpdGVtLCB0aGUgaW5kZXgsIGFuZCB0aGUgaW5pdGlhbCB2YWx1ZS5cclxuICogQHBhcmFtIHsqfSBhIGlzIHRoZSBpbml0aWFsIHZhbHVlXHJcbiAqIEBwYXJhbSB7Kn0gW2JdIHRoZSBhcnJheSBsaWtlIGl0ZW0gdG8gaXRlcmF0ZSBvdmVyXHJcbiAqIEByZXR1cm4geyp9IGEgaXMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlXHJcbiAqKi9cclxuXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQgYXJyYXlGb2xkIGZyb20gJy4uL2FycmF5L2ZvbGQnXHJcbmltcG9ydCBvYmplY3RGb2xkIGZyb20gJy4uL29iamVjdC9mb2xkJ1xyXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xyXG4gIGNvbnN0IHR5cGVNYXAgPSB7XHJcbiAgICAnT2JqZWN0Jzogb2JqZWN0Rm9sZCxcclxuICAgICdBcnJheSc6IGFycmF5Rm9sZFxyXG4gIH1cclxuICAvLyBpZiAoYS5uZXh0KSB7XHJcbiAgLy8gICByZXR1cm4gaXRlcmFibGVGb2xkKGNiLCBpbml0LCBhKVxyXG4gIC8vIH1cclxuICAvLyBpZiAodHlwZShTeW1ib2wpICE9PSAndW5kZWZpbmVkJyAmJiBhW1N5bWJvbC5pdGVyYXRvcl0pIHtcclxuICAvLyAgIHJldHVybiBpdGVyYWJsZUZvbGQoY2IsIGluaXQsIGFbU3ltYm9sLml0ZXJhdG9yXSgpKVxyXG4gIC8vIH1cclxuICByZXR1cm4gdHlwZU1hcFt0eXBlKGEpXShjYiwgaW5pdCwgYSlcclxufSlcclxuXHJcbi8vIGZ1bmN0aW9uIGl0ZXJhYmxlRm9sZCAoY2IsIGFjYywgZ2VuKSB7XHJcbi8vICAgbGV0IHN0ZXAgPSBnZW4ubmV4dCgpXHJcbi8vICAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcclxuLy8gICAgIGFjYyA9IGNiKGFjYywgc3RlcC52YWx1ZSlcclxuLy8gICAgIHN0ZXAgPSBnZW4ubmV4dCgpXHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiBhY2NcclxuLy8gfVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogaWRlbnRpY2FsXHJcbiAqIGNoZWNrcyBmb3IgaWRlbnRpbnRpY2FsIGl0ZW1zXHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcclxuaW1wb3J0IGlzTmFuIGZyb20gJy4uL251bWJlci9pc05hbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlkZW50aWNhbCAoeCwgeSkge1xyXG4gIGlmICh4ID09PSAwICYmIHkgPT09IDApIHtcclxuICAgIHJldHVybiAxIC8geCA9PT0gMSAvIHlcclxuICB9XHJcbiAgaWYgKHggPT09IHkpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiAhIShpc05hbih4KSAmJiBpc05hbih5KSlcclxufSlcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIFJldHVybnMgdGhlIHZhbHVlIHN1cHBsaWVkIHRvIHRoZSBmdW5jdGlvblxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlkZW50aXR5ICh4KSB7XHJcbiAgcmV0dXJuIHhcclxufTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbGVuIGRpZXJpY2t4XHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcclxuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaXMgKEN0b3IsIHZhbCkge1xyXG4gIHJldHVybiB0eXBlKHZhbCkgPT09IEN0b3JcclxufSlcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIGVtcHR5XHJcbiAqIFJldHVybnMgdGhlIGVtcHR5IGVxdWl2YWxlbnQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50XHJcbiAqL1xyXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi9lbXB0eSdcclxuaW1wb3J0IGV4aXN0cyBmcm9tICcuL2V4aXN0cydcclxuaW1wb3J0IGVxdWFscyBmcm9tICcuL2VxdWFscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRW1wdHkgKHgpIHtcclxuICByZXR1cm4gZXhpc3RzKHgpICYmIGVxdWFscyh4LCBlbXB0eSh4KSlcclxufTtcclxuIiwiLyoqXHJcbiAqIFwibGlmdHNcIiBhIGZ1bmN0aW9uIG9mIGFyaXR5ID4gMSBzbyB0aGF0IGl0IG1heSBcIm1hcCBvdmVyXCIgYSBsaXN0LCBGdW5jdGlvblxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnICgqLi4uIC0+ICopIC0+IChbKl0uLi4gLT4gWypdKVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQgY3VycnkxIGZyb20gJy4uL19wcml2YXRlL2N1cnJ5MSdcclxuaW1wb3J0IGZvbGQgZnJvbSAnLi4vdXRpbC9mb2xkJ1xyXG5pbXBvcnQgYXAgZnJvbSAnLi4vdXRpbC9hcCdcclxuaW1wb3J0IG1hcCBmcm9tICcuLi91dGlsL21hcCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGxpZnQgKGZuKSB7XHJcbiAgY29uc3QgbGlmdGVkID0gY3VycnkxKGN1cnJ5KGZuKSlcclxuICByZXR1cm4gY3VycnkoZnVuY3Rpb24gYW5vbiAoKSB7XHJcbiAgICByZXR1cm4gZm9sZChhcCwgbWFwKGxpZnRlZCwgYXJndW1lbnRzWzBdKSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSlcclxuICB9KVxyXG59KVxyXG4iLCIvKipcclxuICogTWFwcyBvdmVyIGFuIGFycmF5IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gYiAtPiBiXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcclxuICogQHJldHVybiB7SXRlcmFibGV9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBhcnJheU1hcCBmcm9tICcuLi9hcnJheS9tYXAnXHJcbmltcG9ydCBvYmplY3RNYXAgZnJvbSAnLi4vb2JqZWN0L21hcCdcclxuaW1wb3J0IG1hcE1hcCBmcm9tICcuLi9tYXAvbWFwJ1xyXG5pbXBvcnQgc3RyaW5nTWFwIGZyb20gJy4uL3N0cmluZy9tYXAnXHJcbmltcG9ydCB0eXBlIGZyb20gJy4uL3V0aWwvdHlwZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcclxuICBjb25zdCByID0ge1xyXG4gICAgJ09iamVjdCc6IG9iamVjdE1hcCxcclxuICAgICdTdHJpbmcnOiBzdHJpbmdNYXAsXHJcbiAgICAnQXJyYXknOiBhcnJheU1hcCxcclxuICAgICdNYXAnOiBtYXBNYXBcclxuICAgIC8vICdTZXQnOiBzZXRNYXBcclxuICB9XHJcbiAgcmV0dXJuIHJbdHlwZShhKV0oY2IsIGEpXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBsYXJnZXN0IG9mIHRoZSAyIGFyZ3VtZW50cyBwcm92aWRlZFxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIE9yZCBhID0+IGEgLT4gYSAtPiBhXHJcbiAqIEBwYXJhbSB7Kn0gYVxyXG4gKiBAcGFyYW0geyp9IGJcclxuICogQHJldHVybiB7Kn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1heCAoYSwgYikge1xyXG4gIHJldHVybiBiID4gYSA/IGIgOiBhXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm90ICh4KSB7XHJcbiAgcmV0dXJuICF4XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBvclxyXG4gKiBSZXR1cm5zIHRydWUgaWYgb25lIG9yIHRoZSBvdGhlciBpcyB0cnVlXHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9yICh4LCB5KSB7XHJcbiAgcmV0dXJuIHggfHwgeVxyXG59KVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDYvMDIvMjAxNy5cclxuICovXHJcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cnV0aHkgKHgpIHtcclxuICByZXR1cm4gKHggIT09IGZhbHNlKSAmJiBleGlzdHMoeClcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0eXBlICh4KSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KS5zbGljZSg4LCAtMSlcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIHppcFxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcbmltcG9ydCB6aXBXaXRoIGZyb20gJy4vemlwV2l0aCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHppcCAoYSwgYikge1xyXG4gIHJldHVybiB6aXBXaXRoKGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiBbeCwgeV0gfSwgYSwgYilcclxufSlcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIHppcFdpdGhcclxuICpcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gemlwV2l0aCAoY2IsIGEsIGIpIHtcclxuICBjb25zdCBhcnIgPSBbXVxyXG4gIGNvbnN0IGxlbiA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aClcclxuICBsZXQgaSA9IDBcclxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIGFyci5wdXNoKGNiKGFbaV0sIGJbaV0pKVxyXG4gIH1cclxuICByZXR1cm4gYXJyXHJcbn0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=