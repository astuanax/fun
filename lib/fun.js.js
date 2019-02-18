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
Object.defineProperty(exports, "and", {
  enumerable: true,
  get: function get() {
    return _and.default;
  }
});
Object.defineProperty(exports, "all", {
  enumerable: true,
  get: function get() {
    return _all.default;
  }
});
Object.defineProperty(exports, "any", {
  enumerable: true,
  get: function get() {
    return _any.default;
  }
});
Object.defineProperty(exports, "allPass", {
  enumerable: true,
  get: function get() {
    return _allPass.default;
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
Object.defineProperty(exports, "always", {
  enumerable: true,
  get: function get() {
    return _always.default;
  }
});
Object.defineProperty(exports, "curry", {
  enumerable: true,
  get: function get() {
    return _curry.default;
  }
});
Object.defineProperty(exports, "compose", {
  enumerable: true,
  get: function get() {
    return _compose.default;
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
Object.defineProperty(exports, "max", {
  enumerable: true,
  get: function get() {
    return _max.default;
  }
});
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function get() {
    return _map.default;
  }
});
Object.defineProperty(exports, "fold", {
  enumerable: true,
  get: function get() {
    return _fold.default;
  }
});
Object.defineProperty(exports, "findIndex", {
  enumerable: true,
  get: function get() {
    return _findIndex.default;
  }
});
Object.defineProperty(exports, "zipWith", {
  enumerable: true,
  get: function get() {
    return _zipWith.default;
  }
});
Object.defineProperty(exports, "zip", {
  enumerable: true,
  get: function get() {
    return _zip.default;
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

var _and = _interopRequireDefault(__webpack_require__(/*! util/and */ "./src/util/and.js"));

var _all = _interopRequireDefault(__webpack_require__(/*! util/all */ "./src/util/all.js"));

var _any = _interopRequireDefault(__webpack_require__(/*! util/any */ "./src/util/any.js"));

var _allPass = _interopRequireDefault(__webpack_require__(/*! util/allPass */ "./src/util/allPass.js"));

var _adjust = _interopRequireDefault(__webpack_require__(/*! util/adjust */ "./src/util/adjust.js"));

var _adjustWith = _interopRequireDefault(__webpack_require__(/*! util/adjustWith */ "./src/util/adjustWith.js"));

var _always = _interopRequireDefault(__webpack_require__(/*! util/always */ "./src/util/always.js"));

var _curry = _interopRequireDefault(__webpack_require__(/*! util/curry */ "./src/util/curry.js"));

var _compose = _interopRequireDefault(__webpack_require__(/*! util/compose */ "./src/util/compose.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! util/empty */ "./src/util/empty.js"));

var _equals3 = _interopRequireDefault(__webpack_require__(/*! util/equals */ "./src/util/equals.js"));

var _exists = _interopRequireDefault(__webpack_require__(/*! util/exists */ "./src/util/exists.js"));

var _identical = _interopRequireDefault(__webpack_require__(/*! util/identical */ "./src/util/identical.js"));

var _identity = _interopRequireDefault(__webpack_require__(/*! util/identity */ "./src/util/identity.js"));

var _is6 = _interopRequireDefault(__webpack_require__(/*! util/is */ "./src/util/is.js"));

var _isEmpty2 = _interopRequireDefault(__webpack_require__(/*! util/isEmpty */ "./src/util/isEmpty.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! util/not */ "./src/util/not.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! util/or */ "./src/util/or.js"));

var _truthy = _interopRequireDefault(__webpack_require__(/*! util/truthy */ "./src/util/truthy.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! util/type */ "./src/util/type.js"));

var _max = _interopRequireDefault(__webpack_require__(/*! util/max */ "./src/util/max.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! util/map */ "./src/util/map.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! util/fold */ "./src/util/fold.js"));

var _findIndex = _interopRequireDefault(__webpack_require__(/*! util/findIndex */ "./src/util/findIndex.js"));

var _zipWith = _interopRequireDefault(__webpack_require__(/*! util/zipWith */ "./src/util/zipWith.js"));

var _zip = _interopRequireDefault(__webpack_require__(/*! util/zip */ "./src/util/zip.js"));

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

    if (_acc.length < argslen) {
      return createRecurser(_acc);
    }

    return fun.apply(this, _acc);
  }

  function createRecurser(acc) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      return recurse(acc, args);
    };
  }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4uanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1bi5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvZXF1YWxzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9mb2xkLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS90by5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvdW5pb24uanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2Jvb2xlYW4vRi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9ULmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9ib29sZWFuL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9jb25zdGFudHMvTU9OVEhTLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9jb25zdGFudHMvV0VFS0RBWVMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvZGlmZkRhdGUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvZm9ybWF0RGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvaXNGdXR1cmVEYXRlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2lzVmFsaWQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9EYXkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9Ib3VyLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvTWludXRlcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b1NlY29uZHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tYXAvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tb25hZHMvSnVzdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbW9uYWRzL01heWJlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tb25hZHMvTm90aGluZy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL2FkZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL2RpdmlkZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvaXNOYW4uanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL251bWJlci9tdWx0aXBseS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9oYXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9oYXNJbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9tZXJnZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L29taXQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9mb3JtYXRTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvc3RyaW5nL21hcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hZGp1c3QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWRqdXN0V2l0aC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbGwuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWxsUGFzcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbHdheXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYW5kLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FueS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9jb21wb3NlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2N1cnJ5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2VtcHR5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2VxdWFscy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9leGlzdHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZmluZEluZGV4LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2ZvbGQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvaWRlbnRpY2FsLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lkZW50aXR5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL21heC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9ub3QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvb3IuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvdHJ1dGh5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3R5cGUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvemlwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3ppcFdpdGguanMiXSwibmFtZXMiOlsiZXF1YWxzQXJyYXkiLCJ4IiwieSIsImxlbmd0aCIsImkiLCJmb2xkIiwiY2IiLCJpbml0IiwiYSIsImwiLCJyIiwibWFwIiwiQXJyYXkiLCJ0b0FycmF5IiwiYXBwbHkiLCJ1bmlvbkFycmF5IiwiYXJyYXlMIiwiYXJyYXlSIiwiZnJvbSIsIlNldCIsImNvbmNhdCIsIk1PTlRIUyIsIldFRUtEQVlTIiwic3RhcnQiLCJlbmQiLCJEYXRlIiwiZ2V0VGltZSIsImdldFdlZWsiLCJkIiwiVVRDIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJzZXRVVENEYXRlIiwiZ2V0VVRDRGF0ZSIsImdldFVUQ0RheSIsInllYXJTdGFydCIsImdldFVUQ0Z1bGxZZWFyIiwid2Vla05vIiwiTWF0aCIsImNlaWwiLCJaRVJPUyIsImxhc3ROIiwibiIsInN0ciIsInN1YnN0cmluZyIsImZpcnN0TiIsImZpbGwiLCJkaWdpdHMiLCJEQVRFX1RPS0VOUyIsIm1vZENlaWxpbmciLCJtb2QiLCJ2YWwiLCJ0b2tlbnMiLCJZWVlZIiwiWVkiLCJNTU1NIiwiTU1NIiwiTU0iLCJNIiwidyIsInd3IiwiREQiLCJEIiwiZGRkZCIsImdldERheSIsImRkZCIsImRkIiwiSEgiLCJnZXRIb3VycyIsIkgiLCJoaCIsImgiLCJtbSIsImdldE1pbnV0ZXMiLCJtIiwic3MiLCJnZXRTZWNvbmRzIiwicyIsIkEiLCJTU1MiLCJnZXRNaWxsaXNlY29uZHMiLCJTUyIsIlMiLCJRIiwic3dhcFRva2VuV2l0aFZhbHVlIiwiZGF0ZSIsInRva2VuIiwiZm9ybWF0IiwibWF0Y2giLCJqb2luIiwiaXNWYWxpZCIsImlzRmluaXRlIiwidmFsdWVPZiIsImZvckVhY2giLCJ2IiwiayIsInNldCIsIkp1c3QiLCJfdmFsdWUiLCJwcm90b3R5cGUiLCJpc0p1c3QiLCJpc05vdGhpbmciLCJNYXliZSIsIl9fdmFsdWUiLCJvZiIsImdldE9yRWxzZSIsImYiLCJhcCIsIk5vdGhpbmciLCJhZGQiLCJiIiwiZGl2aWRlIiwiaXNOYW4iLCJpc05hTiIsIm11bHRpcGx5Iiwia2V5WCIsImtleVkiLCJvIiwiT2JqZWN0IiwiaGFzIiwicHJvcCIsIm9iaiIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImhhc0luIiwiaXNFbXB0eU9iamVjdCIsImtleSIsImtleXMiLCJwdXNoIiwibWVyZ2UiLCJvYmpMIiwib2JqUiIsInJlc3VsdCIsImFzc2lnbiIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJuYW1lcyIsImZpbHRlciIsImluZGV4T2YiLCJzZXBhcmF0b3IiLCJhcmdzIiwic2xpY2UiLCJhcmd1bWVudHMiLCJzaGlmdCIsInJlcGxhY2UiLCJpZHgiLCJjaGFyQXQiLCJhZGp1c3QiLCJmbiIsImFkanVzdFdpdGgiLCJwcmVkIiwiX2ZuIiwiYWxsIiwicmVzIiwiYWxsUGFzcyIsImNicyIsImFsd2F5cyIsImFuZCIsImFueSIsImNvbXBvc2UiLCJmdW5zIiwiZnVuIiwiY3VycnkiLCJhcmdzbGVuIiwiY3JlYXRlUmVjdXJzZXIiLCJyZWN1cnNlIiwiYWNjIiwiX2FjYyIsImVtcHR5IiwiY29uc3RydWN0b3IiLCJlcXVhbHMiLCJleGlzdHMiLCJmaW5kSW5kZXgiLCJ0eXBlTWFwIiwiaWRlbnRpY2FsIiwiaWRlbnRpdHkiLCJpcyIsIkN0b3IiLCJpc0VtcHR5IiwibWF4Iiwibm90Iiwib3IiLCJ0cnV0aHkiLCJ0eXBlIiwidG9TdHJpbmciLCJ6aXAiLCJ6aXBXaXRoIiwi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QUFoQixFQUFxQnpMLENBQUMsRUFBdEIsRUFBMEI7QUFDeEJ3TCxPQUFHLENBQUMzRCxJQUFKLENBQVMzSCxFQUFFLENBQUNFLENBQUMsQ0FBQ0osQ0FBRCxDQUFGLEVBQU8yRyxDQUFDLENBQUMzRyxDQUFELENBQVIsQ0FBWDtBQUNEOztBQUNELFNBQU93TCxHQUFQO0FBQ0QsQ0FSYyxDIiwiZmlsZSI6ImZ1bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuLmpzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bi5qc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW4uanNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogZXF1YWxzXHJcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQgbm90IGZyb20gJy4uL3V0aWwvbm90J1xyXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL3V0aWwvZXF1YWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzQXJyYXkgKHgsIHkpIHtcclxuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAobm90KGVxdWFscyh4W2ldLCB5W2ldKSkpIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZVxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogZm9sZFxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xyXG4gIGxldCBpID0gLTFcclxuICBjb25zdCBsID0gYS5sZW5ndGhcclxuICBsZXQgciA9IGluaXRcclxuICB3aGlsZSAoKytpIDwgbCkge1xyXG4gICAgciA9IGNiKHIsIGFbaV0sIGksIGEpXHJcbiAgfVxyXG4gIHJldHVybiByXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpcygnQXJyYXknKVxyXG4iLCIvKipcclxuICogTWFwcyBvdmVyIGFuIGFycmF5IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gW2FdIC0+IFthXVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxyXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXHJcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xyXG4gIGxldCBpID0gLTFcclxuICBjb25zdCBsID0gYS5sZW5ndGhcclxuICBjb25zdCByID0gbmV3IEFycmF5KGwpXHJcbiAgd2hpbGUgKCsraSA8IGwpIHtcclxuICAgIHJbaV0gPSBjYihhW2ldLCBpLCBhKVxyXG4gIH1cclxuICByZXR1cm4gclxyXG59KVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0FycmF5ICh4KSB7XHJcbiAgcmV0dXJuIHgubGVuZ3RoID09PSAxID8gW3hbMF1dIDogQXJyYXkuYXBwbHkobnVsbCwgeClcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIHVuaW9uXHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHVuaW9uQXJyYXkgKGFycmF5TCwgYXJyYXlSKSB7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnJheUwuY29uY2F0KGFycmF5UikpKVxyXG59KVxyXG4iLCIvKipcclxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIGEgLT4gKCogLT4gZmFsc2UpXHJcbiAqIEBwYXJhbSB7Kn0gYVxyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cclxuICoqL1xyXG5pbXBvcnQgYWx3YXlzIGZyb20gJy4uL3V0aWwvYWx3YXlzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWx3YXlzKGZhbHNlKVxyXG4iLCIvKipcclxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgVHJ1ZSBib29sZWFuXHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgYSAtPiAoKiAtPiB0cnVlKVxyXG4gKiBAcGFyYW0geyp9IGFcclxuICogQHJldHVybiB7RnVuY3Rpb259XHJcbiAqKi9cclxuaW1wb3J0IGFsd2F5cyBmcm9tICcuLi91dGlsL2Fsd2F5cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsd2F5cyh0cnVlKVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ0Jvb2xlYW4nKVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgTU9OVEhTID0gW1xyXG4gICdKYW51YXJ5JyxcclxuICAnRmVicnVhcnknLFxyXG4gICdNYXJjaCcsXHJcbiAgJ0FwcmlsJyxcclxuICAnTWF5JyxcclxuICAnSnVuZScsXHJcbiAgJ0p1bHknLFxyXG4gICdBdWd1c3QnLFxyXG4gICdTZXB0ZW1iZXInLFxyXG4gICdPY3RvYmVyJyxcclxuICAnTm92ZW1iZXInLFxyXG4gICdEZWNlbWJlcidcclxuXVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBXRUVLREFZUyA9IFtcclxuICAnU3VuZGF5JyxcclxuICAnTW9uZGF5JyxcclxuICAnVHVlc2RheScsXHJcbiAgJ1dlZG5lc2RheScsXHJcbiAgJ1RodXJzZGF5JyxcclxuICAnRnJpZGF5JyxcclxuICAnU2F0dXJkYXknXHJcbl1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChzdGFydCwgZW5kKSA9PiB7XHJcbiAgcmV0dXJuIChuZXcgRGF0ZShzdGFydCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoZW5kKS5nZXRUaW1lKCkpXHJcbn0pXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDIwLzAxLzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuaW1wb3J0IGlzVmFsaWREYXRlIGZyb20gJy4vaXNWYWxpZCdcclxuaW1wb3J0IHsgV0VFS0RBWVMgfSBmcm9tICcuLi9jb25zdGFudHMvV0VFS0RBWVMnXHJcbmltcG9ydCB7IE1PTlRIUyB9IGZyb20gJy4uL2NvbnN0YW50cy9NT05USFMnXHJcblxyXG5jb25zdCBnZXRXZWVrID0gKGQpID0+IHtcclxuICAvLyBDb3B5IGRhdGUgc28gZG9uJ3QgbW9kaWZ5IG9yaWdpbmFsXHJcbiAgZCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0RnVsbFllYXIoKSwgZC5nZXRNb250aCgpLCBkLmdldERhdGUoKSkpXHJcbiAgLy8gU2V0IHRvIG5lYXJlc3QgVGh1cnNkYXk6IGN1cnJlbnQgZGF0ZSArIDQgLSBjdXJyZW50IGRheSBudW1iZXJcclxuICAvLyBNYWtlIFN1bmRheSdzIGRheSBudW1iZXIgN1xyXG4gIGQuc2V0VVRDRGF0ZShkLmdldFVUQ0RhdGUoKSArIDQgLSAoZC5nZXRVVENEYXkoKSB8fCA3KSlcclxuICAvLyBHZXQgZmlyc3QgZGF5IG9mIHllYXJcclxuICBsZXQgeWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRVVENGdWxsWWVhcigpLCAwLCAxKSlcclxuXHJcbiAgLy8gQ2FsY3VsYXRlIGZ1bGwgd2Vla3MgdG8gbmVhcmVzdCBUaHVyc2RheVxyXG4gIGxldCB3ZWVrTm8gPSBNYXRoLmNlaWwoKCgoZCAtIHllYXJTdGFydCkgLyA4NjQwMDAwMCkgKyAxKSAvIDcpXHJcblxyXG4gIC8vIFJldHVybiBhcnJheSBvZiB5ZWFyIGFuZCB3ZWVrIG51bWJlclxyXG4gIHJldHVybiBbZC5nZXRVVENGdWxsWWVhcigpLCB3ZWVrTm9dXHJcbn1cclxuXHJcbi8vIHV0aWxpdHkgZnVuY3Rpb25zIGZvciB0aGUgZGF0ZSBmb3JtYXR0aW5nXHJcbmNvbnN0IFpFUk9TID0gJzAwMDAwMDAwJ1xyXG5jb25zdCBsYXN0TiA9IGN1cnJ5KChuLCBzdHIpID0+IHN0ci5zdWJzdHJpbmcoc3RyLmxlbmd0aCAtIG4sIHN0ci5sZW5ndGgpKVxyXG5jb25zdCBmaXJzdE4gPSBjdXJyeSgobiwgc3RyKSA9PiBzdHIuc3Vic3RyaW5nKDAsIG4pKVxyXG5jb25zdCBmaWxsID0gY3VycnkoKGRpZ2l0cywgbikgPT4gbGFzdE4oZGlnaXRzLCBaRVJPUyArIG4pKVxyXG5cclxuLy8gZGF0ZS90aW1lIHJlZ2V4XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxyXG5jb25zdCBEQVRFX1RPS0VOUyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRfFlZWVlZWXxZWVlZWXxZWVlZfFlZfGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fG1tP3xzcz98U3sxLDl9fHh8WHx6ej98Wlo/fC4pL2dcclxuXHJcbmNvbnN0IG1vZENlaWxpbmcgPSAobW9kLCB2YWwpID0+IHZhbCAlIG1vZCB8fCBtb2RcclxuXHJcbi8vIHRva2VucyBtYXAgdG8gZ2V0IHBhcnRzIG9mIHRoZSBkYXRlIC90aW1lXHJcbmNvbnN0IHRva2VucyA9IHtcclxuICBZWVlZOiBkID0+IGZpbGwoNCwgZC5nZXRGdWxsWWVhcigpKSxcclxuICBZWTogZCA9PiBsYXN0TigyLCBmaWxsKDQsIGQuZ2V0RnVsbFllYXIoKSkpLFxyXG4gIE1NTU06IGQgPT4gTU9OVEhTW2QuZ2V0TW9udGgoKV0sXHJcbiAgTU1NOiBkID0+IGZpcnN0TigzLCBNT05USFNbZC5nZXRNb250aCgpXSksXHJcbiAgTU06IGQgPT4gZmlsbCgyLCBkLmdldE1vbnRoKCkgKyAxKSxcclxuICBNOiBkID0+IGQuZ2V0TW9udGgoKSArIDEsXHJcbiAgdzogZCA9PiBnZXRXZWVrKGQpLFxyXG4gIHd3OiBkID0+IGZpbGwoMiwgZ2V0V2VlayhkKSksXHJcbiAgREQ6IGQgPT4gZmlsbCgyLCBkLmdldERhdGUoKSksXHJcbiAgRDogZCA9PiBkLmdldERhdGUoKSxcclxuICBkZGRkOiBkID0+IFdFRUtEQVlTW2QuZ2V0RGF5KCldLFxyXG4gIGRkZDogZCA9PiBmaXJzdE4oMywgV0VFS0RBWVNbZC5nZXREYXkoKV0pLFxyXG4gIGRkOiBkID0+IGZpcnN0TigyLCBXRUVLREFZU1tkLmdldERheSgpXSksXHJcbiAgZDogZCA9PiBkLmdldERheSgpLFxyXG4gIEhIOiBkID0+IGZpbGwoMiwgZC5nZXRIb3VycygpKSxcclxuICBIOiBkID0+IGQuZ2V0SG91cnMoKSxcclxuICBoaDogZCA9PiBmaWxsKDIsIG1vZENlaWxpbmcoMTIsIGQuZ2V0SG91cnMoKSkpLFxyXG4gIGg6IGQgPT4gbW9kQ2VpbGluZygxMiwgZC5nZXRIb3VycygpKSxcclxuICBtbTogZCA9PiBmaWxsKDIsIGQuZ2V0TWludXRlcygpKSxcclxuICBtOiBkID0+IGQuZ2V0TWludXRlcygpLFxyXG4gIHNzOiBkID0+IGZpbGwoMiwgZC5nZXRTZWNvbmRzKCkpLFxyXG4gIHM6IGQgPT4gZC5nZXRTZWNvbmRzKCksXHJcbiAgQTogZCA9PiBkLmdldEhvdXJzKCkgPiAxMSA/ICdQTScgOiAnQU0nLFxyXG4gIGE6IGQgPT4gZC5nZXRIb3VycygpID4gMTEgPyAncG0nIDogJ2FtJyxcclxuICBTU1M6IGQgPT4gZmlsbCgzLCBkLmdldE1pbGxpc2Vjb25kcygpKSxcclxuICBTUzogZCA9PiBmaXJzdE4oMiwgZmlsbCgzLCBkLmdldE1pbGxpc2Vjb25kcygpKSksXHJcbiAgUzogZCA9PiBmaXJzdE4oMSwgZmlsbCgzLCBkLmdldE1pbGxpc2Vjb25kcygpKSksXHJcbiAgUTogZCA9PiBNYXRoLmNlaWwoKGQuZ2V0TW9udGgoKSArIDEpIC8gMylcclxufVxyXG5cclxuLy8gbWFwIHRoaXMgZnVuY3Rpb24gdG8gZ2V0IHRoZSBhY3R1YWwgdGltZS9kYXRlIHZhbHVlIGZvciBlYWNoIHRva2VuXHJcbmNvbnN0IHN3YXBUb2tlbldpdGhWYWx1ZSA9IGN1cnJ5KChkYXRlLCB0b2tlbikgPT4ge1xyXG4gIHJldHVybiB0b2tlbnNbdG9rZW5dID8gdG9rZW5zW3Rva2VuXShkYXRlKSA6IHRva2VuXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoZm9ybWF0LCBkYXRlKSA9PiB7XHJcbiAgLy8gY2hlY2sgZm9yIHZhbGlkIGRhdGVcclxuICBpZiAoIWlzVmFsaWREYXRlKGRhdGUpKSByZXR1cm4gJ0ludmFsaWQgRGF0ZScgLy8gcmV0dXJuIHN0cmluZ1xyXG4gIHJldHVybiBmb3JtYXQubWF0Y2goREFURV9UT0tFTlMpLm1hcChzd2FwVG9rZW5XaXRoVmFsdWUoZGF0ZSkpLmpvaW4oJycpIC8vIHJldHVybiBqb2luZWQgc3RyaW5nXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdEYXRlJylcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDA5LzAzLzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgZGlmZkRhdGUgZnJvbSAnLi9kaWZmRGF0ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiB7XHJcbiAgcmV0dXJuIGRpZmZEYXRlKG5ldyBEYXRlKCkpKGQpIDwgMFxyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAxOC8wMy8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGlzRGF0ZSBmcm9tICcuL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZCAoeCkge1xyXG4gIC8vIG5vaW5zcGVjdGlvbiBKU0NoZWNrRnVuY3Rpb25TaWduYXR1cmVzXHJcbiAgcmV0dXJuIGlzRGF0ZSh4KSAmJiBpc0Zpbml0ZSh4LnZhbHVlT2YoKSlcclxufTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDg2NDAwMDAwIC8vIDI0KjYwKjYwKjEwMDAgPSA4NjQwMDAwMFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gMzYwMDAwMCAvLyA2MCo2MCoxMDAwID0gMzYwMDAwMFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gNjAwMDAgLy8gNjAqMTAwMCA9IDYwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyAxMDAwXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8vIGFycmF5XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzQXJyYXkgfSBmcm9tICdhcnJheS9lcXVhbHMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNBcnJheSB9IGZyb20gJ2FycmF5L2lzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvQXJyYXkgfSBmcm9tICdhcnJheS90bydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmlvbkFycmF5IH0gZnJvbSAnYXJyYXkvdW5pb24nXHJcblxyXG4vLyBib29sZWFuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNCb29sZWFuIH0gZnJvbSAnYm9vbGVhbi9pcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGIH0gZnJvbSAnYm9vbGVhbi9GJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFQgfSBmcm9tICdib29sZWFuL1QnXHJcblxyXG4vLyBtb25hZHNcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBqdXN0IH0gZnJvbSAnbW9uYWRzL0p1c3QnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWF5YmUgfSBmcm9tICdtb25hZHMvTWF5YmUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbm90aGluZyB9IGZyb20gJ21vbmFkcy9Ob3RoaW5nJ1xyXG5cclxuLy8gbnVtYmVyXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOdW1iZXIgfSBmcm9tICdudW1iZXIvaXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOYW4gfSBmcm9tICdudW1iZXIvaXNOYW4nXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWRkIH0gZnJvbSAnbnVtYmVyL2FkZCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBtdWx0aXBseSB9IGZyb20gJ251bWJlci9tdWx0aXBseSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaXZpZGUgfSBmcm9tICdudW1iZXIvZGl2aWRlJ1xyXG5cclxuLy8gb2JqZWN0XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzT2JqZWN0IH0gZnJvbSAnb2JqZWN0L2VxdWFscydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc09iamVjdCB9IGZyb20gJ29iamVjdC9pcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0VtcHR5T2JqZWN0IH0gZnJvbSAnb2JqZWN0L2lzRW1wdHknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VPYmplY3QgfSBmcm9tICdvYmplY3QvbWVyZ2UnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb21pdEZyb21PYmplY3QgfSBmcm9tICdvYmplY3Qvb21pdCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXMgfSBmcm9tICdvYmplY3QvaGFzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGhhc0luIH0gZnJvbSAnb2JqZWN0L2hhc0luJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleXMgfSBmcm9tICdvYmplY3Qva2V5cydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXlzSW4gfSBmcm9tICdvYmplY3Qva2V5c0luJ1xyXG5cclxuLy8gc3RyaW5nXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29uY2F0U3RyaW5nIH0gZnJvbSAnc3RyaW5nL2NvbmNhdCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb3JtYXRTdHJpbmcgfSBmcm9tICdzdHJpbmcvZm9ybWF0U3RyaW5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzU3RyaW5nIH0gZnJvbSAnc3RyaW5nL2lzJ1xyXG5cclxuLy8gdXRpbFxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFuZCB9IGZyb20gJ3V0aWwvYW5kJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsbCB9IGZyb20gJ3V0aWwvYWxsJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFueSB9IGZyb20gJ3V0aWwvYW55J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsbFBhc3MgfSBmcm9tICd1dGlsL2FsbFBhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWRqdXN0IH0gZnJvbSAndXRpbC9hZGp1c3QnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWRqdXN0V2l0aCB9IGZyb20gJ3V0aWwvYWRqdXN0V2l0aCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbHdheXMgfSBmcm9tICd1dGlsL2Fsd2F5cydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjdXJyeSB9IGZyb20gJ3V0aWwvY3VycnknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcG9zZSB9IGZyb20gJ3V0aWwvY29tcG9zZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbXB0eSB9IGZyb20gJ3V0aWwvZW1wdHknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzIH0gZnJvbSAndXRpbC9lcXVhbHMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXhpc3RzIH0gZnJvbSAndXRpbC9leGlzdHMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWRlbnRpY2FsIH0gZnJvbSAndXRpbC9pZGVudGljYWwnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWRlbnRpdHkgfSBmcm9tICd1dGlsL2lkZW50aXR5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzIH0gZnJvbSAndXRpbC9pcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0VtcHR5IH0gZnJvbSAndXRpbC9pc0VtcHR5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vdCB9IGZyb20gJ3V0aWwvbm90J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG9yIH0gZnJvbSAndXRpbC9vcidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0cnV0aHkgfSBmcm9tICd1dGlsL3RydXRoeSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0eXBlIH0gZnJvbSAndXRpbC90eXBlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1heCB9IGZyb20gJ3V0aWwvbWF4J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hcCB9IGZyb20gJ3V0aWwvbWFwJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvbGQgfSBmcm9tICd1dGlsL2ZvbGQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmluZEluZGV4IH0gZnJvbSAndXRpbC9maW5kSW5kZXgnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgemlwV2l0aCB9IGZyb20gJ3V0aWwvemlwV2l0aCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB6aXAgfSBmcm9tICd1dGlsL3ppcCdcclxuXHJcbi8vIGRhdGVcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaWZmRGF0ZSB9IGZyb20gJ2RhdGUvZGlmZkRhdGUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9ybWF0RGF0ZVRpbWUgfSBmcm9tICdkYXRlL2Zvcm1hdERhdGVUaW1lJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRhdGVJcyB9IGZyb20gJ2RhdGUvaXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNGdXR1cmVEYXRlIH0gZnJvbSAnZGF0ZS9pc0Z1dHVyZURhdGUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNWYWxpZCB9IGZyb20gJ2RhdGUvaXNWYWxpZCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0RheSB9IGZyb20gJ2RhdGUvdG9EYXknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9Ib3VyIH0gZnJvbSAnZGF0ZS90b0hvdXInXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9NaW51dGVzIH0gZnJvbSAnZGF0ZS90b01pbnV0ZXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9TZWNvbmRzIH0gZnJvbSAnZGF0ZS90b1NlY29uZHMnXHJcbiIsIi8qKlxyXG4gKiBNYXBzIG92ZXIgYSBNYXAgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSB7TWFwfSBhXHJcbiAqIEByZXR1cm4ge01hcH1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuaW1wb3J0IGVtcHR5IGZyb20gJy4uL3V0aWwvZW1wdHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XHJcbiAgY29uc3QgciA9IGVtcHR5KGEpXHJcbiAgYS5mb3JFYWNoKCh2LCBrLCBtYXApID0+IHtcclxuICAgIHIuc2V0KGssIGNiKHYsIGssIG1hcCkpXHJcbiAgfSlcclxuICByZXR1cm4gclxyXG59KVxyXG4iLCJsZXQgSnVzdCA9IGZ1bmN0aW9uICh2YWwpIHtcclxuICB0aGlzLl92YWx1ZSA9IHZhbFxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbkp1c3QucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcbkp1c3QucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSnVzdFxyXG4iLCJpbXBvcnQgSnVzdCBmcm9tICcuL0p1c3QnXHJcbmltcG9ydCBOb3RoaW5nIGZyb20gJy4vTm90aGluZydcclxuXHJcbmxldCBNYXliZSA9IGZ1bmN0aW9uICh2YWwpIHtcclxuICB0aGlzLl9fdmFsdWUgPSB2YWxcclxufVxyXG5cclxuTWF5YmUub2YgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIE1heWJlKSByZXR1cm4gdmFsXHJcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBNYXliZSkge1xyXG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICByZXR1cm4gbmV3IE1heWJlKHZhbClcclxufVxyXG5cclxuTWF5YmUucHJvdG90eXBlLmdldE9yRWxzZSA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgcmV0dXJuIHRoaXMuaXNOb3RoaW5nKCkgPyBuIDogdGhpcy5fX3ZhbHVlXHJcbn1cclxuXHJcbk1heWJlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZikge1xyXG4gIGlmICh0aGlzLmlzTm90aGluZygpKSB7XHJcbiAgICByZXR1cm4gTWF5YmUub2YobnVsbClcclxuICB9XHJcbiAgcmV0dXJuIE1heWJlLm9mKGYodGhpcy5fX3ZhbHVlKSlcclxufVxyXG5cclxuTWF5YmUucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKG0pIHtcclxuICByZXR1cm4gbS5tYXAodGhpcy5fX3ZhbHVlKVxyXG59XHJcblxyXG5NYXliZS5wcm90b3R5cGUuaXNOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiAodGhpcy5fX3ZhbHVlID09IG51bGwpXHJcbn1cclxuXHJcbk1heWJlLnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuICF0aGlzLmlzTm90aGluZygpXHJcbn1cclxuXHJcbk1heWJlLnByb3RvdHlwZS5Ob3RoaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgTm90aGluZygpXHJcbn1cclxuXHJcbk1heWJlLnByb3RvdHlwZS5KdXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgSnVzdCh0aGlzLl92YWx1ZSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF5YmVcclxuIiwibGV0IE5vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbn1cclxuXHJcbk5vdGhpbmcucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5Ob3RoaW5nLnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aGluZ1xyXG4iLCIvKipcclxuICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSAyIGFyZ3VtZW50c1xyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXHJcbiAqIEByZXR1cm4ge051bWJlcn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkZCAoYSwgYikge1xyXG4gIHJldHVybiArYSArICtiXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkaXZpc2lvbiBvZiB0aGUgMiBhcmd1bWVudHNcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYlxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBkaXZpZGUgKGEsIGIpIHtcclxuICByZXR1cm4gK2EgLyArYlxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICovXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ051bWJlcicpXHJcbiIsIi8qKlxyXG4gKiBpc05hTlxyXG4gKiBDaGVja3MgaWYgbnVtYmVyIGlzIE5BTlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKi9cclxuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXMnXHJcbmltcG9ydCBhbmQgZnJvbSAnLi4vdXRpbC9hbmQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc05hbiAoeCkge1xyXG4gIHJldHVybiBhbmQoaXNOdW1iZXIoeCksIGlzTmFOKHgpKVxyXG59O1xyXG4iLCIvKipcclxuICogUmV0dXJucyB0aGUgcHJvZHVjdCBvZiB0aGUgMiBhcmd1bWVudHNcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYlxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtdWx0aXBseSAoYSwgYikge1xyXG4gIHJldHVybiArYSAqICtiXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBlcXVhbHNcclxuICogY2hlY2tzIGZvciBlcXVhbGl0eVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBleGlzdHMgZnJvbSAnLi4vdXRpbC9leGlzdHMnXHJcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXHJcbmltcG9ydCBhbmQgZnJvbSAnLi4vdXRpbC9hbmQnXHJcbmltcG9ydCBpc0VtcHR5T2JqZWN0IGZyb20gJy4vaXNFbXB0eSdcclxuaW1wb3J0IGVxdWFscyBmcm9tICcuLi91dGlsL2VxdWFscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KCh4LCB5KSA9PiB7XHJcbiAgaWYgKGFuZChpc0VtcHR5T2JqZWN0KHgpLCBpc0VtcHR5T2JqZWN0KHkpKSkgcmV0dXJuIHRydWVcclxuXHJcbiAgZm9yIChsZXQga2V5WCBpbiB4KSB7XHJcbiAgICAvLyBub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXHJcbiAgICBpZiAobm90KGVxdWFscyh4W2tleVhdLCB5W2tleVhdKSkpIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQga2V5WSBpbiB5KSB7XHJcbiAgICBpZiAobm90KGV4aXN0cyh4W2tleVldKSkgJiYgZXhpc3RzKHlba2V5WV0pKSByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBmb2xkXHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIG8pIHtcclxuICBjb25zdCBrID0ga2V5cyhvKVxyXG4gIGxldCBpID0gLTFcclxuICBjb25zdCBsID0gay5sZW5ndGhcclxuICBsZXQgciA9IE9iamVjdChpbml0KVxyXG4gIHdoaWxlICgrK2kgPCBsKSB7XHJcbiAgICByID0gY2Iociwgb1trW2ldXSwga1tpXSwgbylcclxuICB9XHJcbiAgcmV0dXJuIHJcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eVxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIHtTdHJpbmd9IC0+IHtPYmplY3R9IC0+IEJvb2xlYW5cclxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaGFzIChwcm9wLCBvYmopIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eSwgZXZlbiBpZiBpdCBpcyBpbmhlcml0ZWRcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyB7U3RyaW5nfSAtPiB7T2JqZWN0fSAtPiBCb29sZWFuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGhhc0luIChwcm9wLCBvYmopIHtcclxuICByZXR1cm4gcHJvcCBpbiBvYmpcclxufSlcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqL1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdPYmplY3QnKVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtcHR5T2JqZWN0ICh4KSB7XHJcbiAgZm9yIChsZXQga2V5IGluIHgpIHtcclxuICAgIGlmICh4Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBvd24ga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyBhIC0+IFtiXVxyXG4gKiBAcGFyYW0ge09iamVjdH1cclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKE9iamVjdChhKSlcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYWxsIHRoZSBrZXlzIG9mIGFuIG9iamVjdCBhcyBhbiBBcnJheVxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIGEgLT4gW2JdXHJcbiAqIEBwYXJhbSB7T2JqZWN0fVxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGtleXMgKGEpIHtcclxuICBjb25zdCByID0gW11cclxuICBmb3IgKGNvbnN0IGsgaW4gYSkge1xyXG4gICAgci5wdXNoKGspXHJcbiAgfVxyXG4gIHJldHVybiByXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBNYXBzIG92ZXIgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxyXG4gKiBAcGFyYW0ge09iamVjdH0gYVxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBlbXB0eSBmcm9tICcuLi91dGlsL2VtcHR5J1xyXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XHJcbiAgY29uc3QgayA9IGtleXMoYSlcclxuICBsZXQgaSA9IC0xXHJcbiAgY29uc3QgbCA9IGsubGVuZ3RoXHJcbiAgY29uc3QgciA9IGVtcHR5KGEpXHJcbiAgd2hpbGUgKCsraSA8IGwpIHtcclxuICAgIHJba1tpXV0gPSBjYihhW2tbaV1dLCBrW2ldLCBhKVxyXG4gIH1cclxuICByZXR1cm4gclxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogZXF1YWxzXHJcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4uL3V0aWwvaWRlbnRpY2FsJ1xyXG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vb2JqZWN0L2lzJ1xyXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi9hcnJheS9pcydcclxuaW1wb3J0IHVuaW9uIGZyb20gJy4uL2FycmF5L3VuaW9uJ1xyXG5cclxuY29uc3QgbWVyZ2UgPSBjdXJyeSgob2JqTCwgb2JqUikgPT4ge1xyXG4gIGxldCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpMKVxyXG5cclxuICBpZiAoaWRlbnRpY2FsKG9iakwsIG9ialIpKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb2JqTClcclxuICB9XHJcbiAgZm9yIChsZXQga2V5IGluIG9ialIpIHtcclxuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9ialIsIGtleSkpIHtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGNvbnN0IG9sZFZhbHVlID0gb2JqUltrZXldXHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IG9iakxba2V5XVxyXG5cclxuICAgIGlmIChpc09iamVjdChvbGRWYWx1ZSkgJiYgaXNPYmplY3QobmV3VmFsdWUpKSB7XHJcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2Uob2xkVmFsdWUsIG5ld1ZhbHVlKVxyXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG5ld1ZhbHVlKSkge1xyXG4gICAgICByZXN1bHRba2V5XSA9IHVuaW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdFtrZXldID0gb2xkVmFsdWUgLy8gVE9ETzogdGhpcyBpcyBhIHJlZmVyZW5jZSwgc2hvdWxkIGJlIGNsb25lXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lcmdlXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBlcXVhbHNcclxuICogY2hlY2tzIGZvciBlcXVhbGl0eVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgob2JqLCBuYW1lcykgPT4ge1xyXG4gIGxldCByZXN1bHQgPSB7fVxyXG5cclxuICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoa2V5KSA9PiB7XHJcbiAgICByZXR1cm4gbmFtZXMuaW5kZXhPZihrZXkpID09PSAtMVxyXG4gIH0pLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59KVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgY29uY2F0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciA9ICcsJykgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xyXG4gIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxyXG5cclxuICByZXR1cm4gYXJncy5qb2luKHNlcGFyYXRvcilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uY2F0XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHRvQXJyYXkgZnJvbSAnLi4vYXJyYXkvdG8nXHJcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0cikgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xyXG4gIGxldCBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpXHJcblxuICBhcmdzLnNoaWZ0KClcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoL3soXFxkKyl9L2csIChtYXRjaCwgaWR4KSA9PiB7XHJcbiAgICByZXR1cm4gbm90KGlzKCdVbmRlZmluZWQnLCBhcmdzW2lkeF0pKSA/IGFyZ3NbaWR4XSA6IG1hdGNoXHJcbiAgfSlcclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICovXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ1N0cmluZycpXHJcbiIsIi8qKlxyXG4gKiBNYXBzIG92ZXIgYSBzdHJpbmcgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBbYV0gLT4gW2FdXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcclxuICogQHJldHVybiB7SXRlcmFibGV9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XHJcbiAgbGV0IGkgPSAtMVxyXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxyXG4gIGxldCByID0gJydcclxuICB3aGlsZSAoKytpIDwgbCkge1xyXG4gICAgciArPSBjYihhLmNoYXJBdChpKSwgaSwgYSlcclxuICB9XHJcbiAgcmV0dXJuIHJcclxufSlcclxuIiwiLyoqXHJcbiAqIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgKGEgLT4gYSkgLT4gbnVtIC0+IFthXSAtPiBbYV1cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSB0byBtb2RpZnkgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleFxyXG4gKiBAcGFyYW0ge051bWJlcn0gaSAtIFRoZSBpbmRleCBhdCB3aGljaCB0byBtb2RpZnkgdGhlIGFycmF5LCBhY2NlcHRzIHBvc3RpdGl2ZSBhbmQgbmVnYXRpdmUgaW5kZXhlc1xyXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBbYV1cclxuICogQHJldHVybiB7SXRlcmFibGV9IFthXVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWRqdXN0IChmbiwgaSwgYSkge1xyXG4gIGNvbnN0IHIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhKVxyXG4gIGNvbnN0IGlkeCA9IGkgPCAwID8gci5sZW5ndGggKyBpIDogaVxyXG4gIGlmICghYVtpZHhdKSByZXR1cm4gclxyXG4gIHJbaWR4XSA9IGZuKHJbaWR4XSlcclxuICByZXR1cm4gclxyXG59KVxyXG4iLCIvKipcclxuICogTW9kaWZpZXMgYW4gaXRlbSBpbiBhbiBhcnJheSB1c2luZyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoYSAtPiBhKSAtPiAoKGEgLT4gW2FdKSAtPiBbYV0gLT4gbnVtKSAtPiBbYV0gLT4gW2FdXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gdG8gbW9kaWZ5IHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZCAtIFRoZSBwcmVkaWNhdGUgdGhhdCByZXR1cm5zIHRoZSBpbmRleGVzIGlmIGZvdW5kXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IFthXVxyXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX0gW2FdXHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBtYXAgZnJvbSAnLi4vdXRpbC9tYXAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhZGp1c3RXaXRoIChmbiwgcHJlZCwgYSkge1xyXG4gIGNvbnN0IF9mbiA9IHggPT4ge1xyXG4gICAgaWYgKHByZWQoeCkpIHtcclxuICAgICAgcmV0dXJuIGZuKHgpXHJcbiAgICB9XHJcbiAgICByZXR1cm4geFxyXG4gIH1cclxuICByZXR1cm4gbWFwKF9mbiwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSkpXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gQm9vbGVhblxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxyXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbGwgKGNiLCBhKSB7XHJcbiAgbGV0IHJlcyA9IHRydWVcclxuICBmb3IgKGxldCBpIGluIGEpIHtcclxuICAgIGlmICghY2IoYVtpXSkpIHtcclxuICAgICAgcmVzID0gZmFsc2VcclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59KVxyXG4iLCIvKipcclxuICogQXBwbGllcyBhIGxpc3Qgb2YgcHJlZGljYXRlcyB0byB0aGUgZGF0YSBhbmQgcmV0dXJucyB0cnVlIGlmIGFsbCBwYXNzXHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgWygqLi4uIC0+IEJvb2xlYW4pXSAtPiAoKi4uLiAtPiBCb29sZWFuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHByZWRpY2F0ZXMgQW4gYXJyYXkgb2YgcHJlZGljYXRlcyB0byBjaGVja1xyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGNvbWJpbmVkIHByZWRpY2F0ZVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWxsUGFzcyAoY2JzLCBhKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICghY2JzW2ldKGEpKSByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIHByb3ZpZGVkXHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgYSAtPiAoKiAtPiBhKVxyXG4gKiBAcGFyYW0geyp9IGFcclxuICogQHJldHVybiB7RnVuY3Rpb259XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbHdheXMgKHgpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4geCB9XHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiB4LCB5XHJcbiAqIFJldHVybnMgYm9vbGVhblxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbmQgKHgsIHkpIHtcclxuICByZXR1cm4geCAmJiB5XHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb24gb2YgdGhlIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoVE9ETylcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcclxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYW55IChjYiwgYSkge1xyXG4gIGxldCByZXMgPSBmYWxzZVxyXG4gIGZvciAobGV0IGkgaW4gYSkge1xyXG4gICAgaWYgKGNiKGFbaV0pKSB7XHJcbiAgICAgIHJlcyA9IHRydWVcclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59KVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjUvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvc2UgKCkge1xyXG4gIGxldCBmdW5zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGluaXQgPSBmdW5zW2Z1bnMubGVuZ3RoIC0gMV1cclxuICAgIGxldCByZXN1bHQgPSBbaW5pdC5hcHBseShpbml0LCBhcmd1bWVudHMpXVxyXG4gICAgbGV0IGkgPSBmdW5zLmxlbmd0aCAtIDJcclxuXHJcbiAgICBmb3IgKGk7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgIGNvbnN0IGZ1biA9IGZ1bnNbaV1cclxuXHJcbiAgICAgIHJlc3VsdCA9IFtmdW4uYXBwbHkoZnVuLCByZXN1bHQpXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFswXVxyXG4gIH1cclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI1LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeSAoZnVuKSB7XHJcbiAgbGV0IGFyZ3NsZW4gPSBmdW4ubGVuZ3RoXHJcblxyXG4gIGlmIChhcmdzbGVuID09PSAwKSB7XHJcbiAgICByZXR1cm4gZnVuXHJcbiAgfVxyXG4gIHJldHVybiBjcmVhdGVSZWN1cnNlcihbXSlcclxuXHJcbiAgZnVuY3Rpb24gcmVjdXJzZSAoYWNjLCBhcmdzKSB7XHJcbiAgICBsZXQgX2FjYyA9IGFjYy5jb25jYXQoYXJncylcclxuXHJcbiAgICBpZiAoX2FjYy5sZW5ndGggPCBhcmdzbGVuKSB7XHJcbiAgICAgIHJldHVybiBjcmVhdGVSZWN1cnNlcihfYWNjKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bi5hcHBseSh0aGlzLCBfYWNjKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlUmVjdXJzZXIgKGFjYykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXHJcblxyXG4gICAgICByZXR1cm4gcmVjdXJzZShhY2MsIGFyZ3MpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBlbXB0eVxyXG4gKiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVtcHR5ICh4KSB7XHJcbiAgcmV0dXJuIG5ldyB4LmNvbnN0cnVjdG9yKClcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIGVxdWFsc1xyXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcclxuaW1wb3J0IGV4aXN0cyBmcm9tICcuL2V4aXN0cydcclxuaW1wb3J0IGlkZW50aWNhbCBmcm9tICcuL2lkZW50aWNhbCdcclxuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xyXG5pbXBvcnQgbm90IGZyb20gJy4vbm90J1xyXG5pbXBvcnQgb3IgZnJvbSAnLi9vcidcclxuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL29iamVjdC9pcydcclxuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vYXJyYXkvaXMnXHJcbmltcG9ydCBpc0Jvb2xlYW4gZnJvbSAnLi4vYm9vbGVhbi9pcydcclxuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4uL251bWJlci9pcydcclxuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4uL3N0cmluZy9pcydcclxuaW1wb3J0IGlzRGF0ZSBmcm9tICcuLi9kYXRlL2lzJ1xyXG5pbXBvcnQgZXF1YWxzQXJyYXkgZnJvbSAnLi4vYXJyYXkvZXF1YWxzJ1xyXG5pbXBvcnQgZXF1YWxzT2JqZWN0IGZyb20gJy4uL29iamVjdC9lcXVhbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHMgKHgsIHkpIHtcclxuICBpZiAoaWRlbnRpY2FsKHgsIHkpKSByZXR1cm4gdHJ1ZVxyXG5cclxuICBpZiAodHlwZSh4KSAhPT0gdHlwZSh5KSkgcmV0dXJuIGZhbHNlXHJcblxyXG4gIGlmIChvcihub3QoZXhpc3RzKHgpKSwgbm90KGV4aXN0cyh5KSkpKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgaWYgKHguY29uc3RydWN0b3IgIT09IHkuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZVxyXG5cclxuICBpZiAoaXNTdHJpbmcoeCkgfHwgaXNCb29sZWFuKHgpIHx8IGlzTnVtYmVyKHgpIHx8IGlzRGF0ZSh4KSkge1xyXG4gICAgcmV0dXJuIGlkZW50aWNhbCh4LnZhbHVlT2YoKSwgeS52YWx1ZU9mKCkpXHJcbiAgfVxyXG4gIGlmIChpc0FycmF5KHgpKSB7XHJcbiAgICByZXR1cm4gZXF1YWxzQXJyYXkoeCwgeSlcclxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHgpKSB7XHJcbiAgICByZXR1cm4gZXF1YWxzT2JqZWN0KHgsIHkpXHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4aXN0cyAoeCkge1xyXG4gIHJldHVybiAhKHggPT0gbnVsbClcclxufTtcclxuIiwiLyoqXHJcbiAqIEZpbmQgdGhlIGluZGV4IG1hdGNoaW5nIGEgcHJlZGljYXRlXHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IE51bWJlclxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBQcmVkaWNhdGUgZnVuY3Rpb24gcmV0dXJucyBhIGJvb2xlYW5cclxuICogQHBhcmFtIHtbKl19IEFuIGFycmF5IGxpa2Ugb2JqZWN0XHJcbiAqIEByZXR1cm5cclxuICoqL1xyXG5cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmaW5kSW5kZXggKGZuLCBhKSB7XHJcbiAgbGV0IGkgPSAwXHJcbiAgY29uc3QgbCA9IGEubGVuZ3RoXHJcbiAgd2hpbGUgKGkgPCBsKSB7XHJcbiAgICBpZiAoZm4oYVtpXSkpIHtcclxuICAgICAgcmV0dXJuIGlcclxuICAgIH1cclxuICAgIGkgKz0gMVxyXG4gIH1cclxuICByZXR1cm4gLTFcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieiBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbGEgZnVuY3Rpb24gb24gZWFjaCBpdGXDqVxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnICgoYSwgYiwgYywgYSkg4oaSIGEpIOKGkiBhIOKGkiBbYl0g4oaSIGFcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgcmVjZWl2ZXMgNCB2YWx1ZXM6IHRoZSBhY2N1bXVsYXRvciwgdGhlIGl0ZW0sIHRoZSBpbmRleCwgYW5kIHRoZSBpbml0aWFsIHZhbHVlLlxyXG4gKiBAcGFyYW0geyp9IGEgaXMgdGhlIGluaXRpYWwgdmFsdWVcclxuICogQHBhcmFtIHsqfSBbYl0gdGhlIGFycmF5IGxpa2UgaXRlbSB0byBpdGVyYXRlIG92ZXJcclxuICogQHJldHVybiB7Kn0gYSBpcyB0aGUgYWNjdW11bGF0ZWQgdmFsdWVcclxuICoqL1xyXG5cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBhcnJheUZvbGQgZnJvbSAnLi4vYXJyYXkvZm9sZCdcclxuaW1wb3J0IG9iamVjdEZvbGQgZnJvbSAnLi4vb2JqZWN0L2ZvbGQnXHJcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBhKSB7XHJcbiAgY29uc3QgdHlwZU1hcCA9IHtcclxuICAgICdPYmplY3QnOiBvYmplY3RGb2xkLFxyXG4gICAgJ0FycmF5JzogYXJyYXlGb2xkXHJcbiAgfVxyXG4gIC8vIGlmIChhLm5leHQpIHtcclxuICAvLyAgIHJldHVybiBpdGVyYWJsZUZvbGQoY2IsIGluaXQsIGEpXHJcbiAgLy8gfVxyXG4gIC8vIGlmICh0eXBlKFN5bWJvbCkgIT09ICd1bmRlZmluZWQnICYmIGFbU3ltYm9sLml0ZXJhdG9yXSkge1xyXG4gIC8vICAgcmV0dXJuIGl0ZXJhYmxlRm9sZChjYiwgaW5pdCwgYVtTeW1ib2wuaXRlcmF0b3JdKCkpXHJcbiAgLy8gfVxyXG4gIHJldHVybiB0eXBlTWFwW3R5cGUoYSldKGNiLCBpbml0LCBhKVxyXG59KVxyXG5cclxuLy8gZnVuY3Rpb24gaXRlcmFibGVGb2xkIChjYiwgYWNjLCBnZW4pIHtcclxuLy8gICBsZXQgc3RlcCA9IGdlbi5uZXh0KClcclxuLy8gICB3aGlsZSAoIXN0ZXAuZG9uZSkge1xyXG4vLyAgICAgYWNjID0gY2IoYWNjLCBzdGVwLnZhbHVlKVxyXG4vLyAgICAgc3RlcCA9IGdlbi5uZXh0KClcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIGFjY1xyXG4vLyB9XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBpZGVudGljYWxcclxuICogY2hlY2tzIGZvciBpZGVudGludGljYWwgaXRlbXNcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xyXG5pbXBvcnQgaXNOYW4gZnJvbSAnLi4vbnVtYmVyL2lzTmFuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaWRlbnRpY2FsICh4LCB5KSB7XHJcbiAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkge1xyXG4gICAgcmV0dXJuIDEgLyB4ID09PSAxIC8geVxyXG4gIH1cclxuICBpZiAoeCA9PT0geSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuICEhKGlzTmFuKHgpICYmIGlzTmFuKHkpKVxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogUmV0dXJucyB0aGUgdmFsdWUgc3VwcGxpZWQgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWRlbnRpdHkgKHgpIHtcclxuICByZXR1cm4geFxyXG59O1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBsZW4gZGllcmlja3hcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xyXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBpcyAoQ3RvciwgdmFsKSB7XHJcbiAgcmV0dXJuIHR5cGUodmFsKSA9PT0gQ3RvclxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogZW1wdHlcclxuICogUmV0dXJucyB0aGUgZW1wdHkgZXF1aXZhbGVudCBvZiB0aGUgZmlyc3QgYXJndW1lbnRcclxuICovXHJcbmltcG9ydCBlbXB0eSBmcm9tICcuL2VtcHR5J1xyXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xyXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4vZXF1YWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbXB0eSAoeCkge1xyXG4gIHJldHVybiBleGlzdHMoeCkgJiYgZXF1YWxzKHgsIGVtcHR5KHgpKVxyXG59O1xyXG4iLCIvKipcclxuICogTWFwcyBvdmVyIGFuIGFycmF5IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gYiAtPiBiXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcclxuICogQHJldHVybiB7SXRlcmFibGV9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBhcnJheU1hcCBmcm9tICcuLi9hcnJheS9tYXAnXHJcbmltcG9ydCBvYmplY3RNYXAgZnJvbSAnLi4vb2JqZWN0L21hcCdcclxuaW1wb3J0IG1hcE1hcCBmcm9tICcuLi9tYXAvbWFwJ1xyXG5pbXBvcnQgc3RyaW5nTWFwIGZyb20gJy4uL3N0cmluZy9tYXAnXHJcbmltcG9ydCB0eXBlIGZyb20gJy4uL3V0aWwvdHlwZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcclxuICBjb25zdCByID0ge1xyXG4gICAgJ09iamVjdCc6IG9iamVjdE1hcCxcclxuICAgICdTdHJpbmcnOiBzdHJpbmdNYXAsXHJcbiAgICAnQXJyYXknOiBhcnJheU1hcCxcclxuICAgICdNYXAnOiBtYXBNYXBcclxuICAgIC8vICdTZXQnOiBzZXRNYXBcclxuICB9XHJcbiAgcmV0dXJuIHJbdHlwZShhKV0oY2IsIGEpXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBsYXJnZXN0IG9mIHRoZSAyIGFyZ3VtZW50cyBwcm92aWRlZFxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIE9yZCBhID0+IGEgLT4gYSAtPiBhXHJcbiAqIEBwYXJhbSB7Kn0gYVxyXG4gKiBAcGFyYW0geyp9IGJcclxuICogQHJldHVybiB7Kn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1heCAoYSwgYikge1xyXG4gIHJldHVybiBiID4gYSA/IGIgOiBhXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm90ICh4KSB7XHJcbiAgcmV0dXJuICF4XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBvclxyXG4gKiBSZXR1cm5zIHRydWUgaWYgb25lIG9yIHRoZSBvdGhlciBpcyB0cnVlXHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9yICh4LCB5KSB7XHJcbiAgcmV0dXJuIHggfHwgeVxyXG59KVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDYvMDIvMjAxNy5cclxuICovXHJcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cnV0aHkgKHgpIHtcclxuICByZXR1cm4gKHggIT09IGZhbHNlKSAmJiBleGlzdHMoeClcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0eXBlICh4KSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KS5zbGljZSg4LCAtMSlcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIHppcFxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcbmltcG9ydCB6aXBXaXRoIGZyb20gJy4vemlwV2l0aCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHppcCAoYSwgYikge1xyXG4gIHJldHVybiB6aXBXaXRoKGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiBbeCwgeV0gfSwgYSwgYilcclxufSlcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIHppcFdpdGhcclxuICpcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gemlwV2l0aCAoY2IsIGEsIGIpIHtcclxuICBjb25zdCBhcnIgPSBbXVxyXG4gIGNvbnN0IGxlbiA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aClcclxuICBsZXQgaSA9IDBcclxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIGFyci5wdXNoKGNiKGFbaV0sIGJbaV0pKVxyXG4gIH1cclxuICByZXR1cm4gYXJyXHJcbn0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=