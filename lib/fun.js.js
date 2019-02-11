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
    r[i] = cb(a[i]);
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
    r[k[i]] = cb(a[k[i]]);
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
    r += cb(a.charAt(i));
  }

  return r;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4uanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1bi5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvZXF1YWxzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9mb2xkLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS90by5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvdW5pb24uanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2Jvb2xlYW4vRi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9ULmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9ib29sZWFuL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9jb25zdGFudHMvTU9OVEhTLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9jb25zdGFudHMvV0VFS0RBWVMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvZGlmZkRhdGUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvZm9ybWF0RGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvaXNGdXR1cmVEYXRlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2lzVmFsaWQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9EYXkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9Ib3VyLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvTWludXRlcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b1NlY29uZHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tYXAvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tb25hZHMvSnVzdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbW9uYWRzL01heWJlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tb25hZHMvTm90aGluZy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvaXNOYW4uanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9mb2xkLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvaGFzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvaGFzSW4uanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3Qva2V5c0luLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9vbWl0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvY29uY2F0LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvZm9ybWF0U3RyaW5nLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9zdHJpbmcvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWxsLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2Fsd2F5cy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbmQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYW55LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2NvbXBvc2UuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvY3VycnkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZXF1YWxzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2V4aXN0cy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9maW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZm9sZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pZGVudGljYWwuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvbWF4LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL25vdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9vci5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC90cnV0aHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvdHlwZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC96aXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvemlwV2l0aC5qcyJdLCJuYW1lcyI6WyJlcXVhbHNBcnJheSIsIngiLCJ5IiwibGVuZ3RoIiwiaSIsImZvbGQiLCJjYiIsImluaXQiLCJhIiwibCIsInIiLCJtYXAiLCJBcnJheSIsInRvQXJyYXkiLCJhcHBseSIsInVuaW9uQXJyYXkiLCJhcnJheUwiLCJhcnJheVIiLCJmcm9tIiwiU2V0IiwiY29uY2F0IiwiTU9OVEhTIiwiV0VFS0RBWVMiLCJzdGFydCIsImVuZCIsIkRhdGUiLCJnZXRUaW1lIiwiZ2V0V2VlayIsImQiLCJVVEMiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInNldFVUQ0RhdGUiLCJnZXRVVENEYXRlIiwiZ2V0VVRDRGF5IiwieWVhclN0YXJ0IiwiZ2V0VVRDRnVsbFllYXIiLCJ3ZWVrTm8iLCJNYXRoIiwiY2VpbCIsIlpFUk9TIiwibGFzdE4iLCJuIiwic3RyIiwic3Vic3RyaW5nIiwiZmlyc3ROIiwiZmlsbCIsImRpZ2l0cyIsIkRBVEVfVE9LRU5TIiwibW9kQ2VpbGluZyIsIm1vZCIsInZhbCIsInRva2VucyIsIllZWVkiLCJZWSIsIk1NTU0iLCJNTU0iLCJNTSIsIk0iLCJ3Iiwid3ciLCJERCIsIkQiLCJkZGRkIiwiZ2V0RGF5IiwiZGRkIiwiZGQiLCJISCIsImdldEhvdXJzIiwiSCIsImhoIiwiaCIsIm1tIiwiZ2V0TWludXRlcyIsIm0iLCJzcyIsImdldFNlY29uZHMiLCJzIiwiQSIsIlNTUyIsImdldE1pbGxpc2Vjb25kcyIsIlNTIiwiUyIsIlEiLCJzd2FwVG9rZW5XaXRoVmFsdWUiLCJkYXRlIiwidG9rZW4iLCJmb3JtYXQiLCJtYXRjaCIsImpvaW4iLCJpc1ZhbGlkIiwiaXNGaW5pdGUiLCJ2YWx1ZU9mIiwiZm9yRWFjaCIsInYiLCJrIiwic2V0IiwiSnVzdCIsIl92YWx1ZSIsInByb3RvdHlwZSIsImlzSnVzdCIsImlzTm90aGluZyIsIk1heWJlIiwiX192YWx1ZSIsIm9mIiwiZ2V0T3JFbHNlIiwiZiIsImFwIiwiTm90aGluZyIsImlzTmFuIiwiaXNOYU4iLCJrZXlYIiwia2V5WSIsIm8iLCJPYmplY3QiLCJoYXMiLCJwcm9wIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaGFzSW4iLCJpc0VtcHR5T2JqZWN0Iiwia2V5Iiwia2V5cyIsInB1c2giLCJtZXJnZSIsIm9iakwiLCJvYmpSIiwicmVzdWx0IiwiYXNzaWduIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsIm5hbWVzIiwiZmlsdGVyIiwiaW5kZXhPZiIsInNlcGFyYXRvciIsImFyZ3MiLCJzbGljZSIsImFyZ3VtZW50cyIsInNoaWZ0IiwicmVwbGFjZSIsImlkeCIsImNoYXJBdCIsImFsbCIsInJlcyIsImFsd2F5cyIsImFuZCIsImFueSIsImNvbXBvc2UiLCJmdW5zIiwiZnVuIiwiY3VycnkiLCJhcmdzbGVuIiwiY3JlYXRlUmVjdXJzZXIiLCJyZWN1cnNlIiwiYWNjIiwiX2FjYyIsImVtcHR5IiwiY29uc3RydWN0b3IiLCJlcXVhbHMiLCJleGlzdHMiLCJmaW5kSW5kZXgiLCJmbiIsInR5cGVNYXAiLCJpZGVudGljYWwiLCJpZGVudGl0eSIsImlzIiwiQ3RvciIsImlzRW1wdHkiLCJtYXgiLCJiIiwibm90Iiwib3IiLCJ0cnV0aHkiLCJ0eXBlIiwidG9TdHJpbmciLCJ6aXAiLCJ6aXBXaXRoIiwiYXJyIiwibGVuIiwibWluIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FB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QUFqQixDQUEwQnhELElBQTFCLENBQStCdkgsQ0FBL0IsRUFBa0N5SSxLQUFsQyxDQUF3QyxDQUF4QyxFQUEyQyxDQUFDLENBQTVDLENBQVA7QUFDRDs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBRDs7QUFDQTs7OztBQU5BOzs7OztlQVFlLG9CQUFNLFNBQVN1QyxHQUFULENBQWN6SyxDQUFkLEVBQWlCbUssQ0FBakIsRUFBb0I7QUFDdkMsU0FBTyxzQkFBUSxVQUFVMUssQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQUUsV0FBTyxDQUFDRCxDQUFELEVBQUlDLENBQUosQ0FBUDtBQUFlLEdBQXpDLEVBQTJDTSxDQUEzQyxFQUE4Q21LLENBQTlDLENBQVA7QUFDRCxDQUZjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIZjs7OztBQUxBOzs7OztlQU9lLG9CQUFNLFNBQVNPLE9BQVQsQ0FBa0I1SyxFQUFsQixFQUFzQkUsQ0FBdEIsRUFBeUJtSyxDQUF6QixFQUE0QjtBQUMvQyxNQUFNUSxHQUFHLEdBQUcsRUFBWjtBQUNBLE1BQU1DLEdBQUcsR0FBRzdJLElBQUksQ0FBQzhJLEdBQUwsQ0FBUzdLLENBQUMsQ0FBQ0wsTUFBWCxFQUFtQndLLENBQUMsQ0FBQ3hLLE1BQXJCLENBQVo7QUFDQSxNQUFJQyxDQUFDLEdBQUcsQ0FBUjs7QUFDQSxPQUFLQSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdnTCxHQUFoQixFQUFxQmhMLENBQUMsRUFBdEIsRUFBMEI7QUFDeEIrSyxPQUFHLENBQUN0RCxJQUFKLENBQVN2SCxFQUFFLENBQUNFLENBQUMsQ0FBQ0osQ0FBRCxDQUFGLEVBQU91SyxDQUFDLENBQUN2SyxDQUFELENBQVIsQ0FBWDtBQUNEOztBQUNELFNBQU8rSyxHQUFQO0FBQ0QsQ0FSYyxDIiwiZmlsZSI6ImZ1bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuLmpzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bi5qc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW4uanNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBlcXVhbHNcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgbm90IGZyb20gJy4uL3V0aWwvbm90J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi91dGlsL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzQXJyYXkgKHgsIHkpIHtcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub3QoZXF1YWxzKHhbaV0sIHlbaV0pKSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBmb2xkXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgbGV0IHIgPSBpbml0XG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciA9IGNiKHIsIGFbaV0sIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ0FycmF5JylcclxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYW4gYXJyYXkgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgY29uc3QgciA9IG5ldyBBcnJheShsKVxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHJbaV0gPSBjYihhW2ldKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAxOC8wMy8yMDE3LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvQXJyYXkgKHgpIHtcbiAgcmV0dXJuIHgubGVuZ3RoID09PSAxID8gW3hbMF1dIDogQXJyYXkuYXBwbHkobnVsbCwgeClcbn07XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiB1bmlvblxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gdW5pb25BcnJheSAoYXJyYXlMLCBhcnJheVIpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnJheUwuY29uY2F0KGFycmF5UikpKVxufSlcbiIsIi8qKlxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+ICgqIC0+IGZhbHNlKVxuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqKi9cbmltcG9ydCBhbHdheXMgZnJvbSAnLi4vdXRpbC9hbHdheXMnXG5cbmV4cG9ydCBkZWZhdWx0IGFsd2F5cyhmYWxzZSlcbiIsIi8qKlxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgVHJ1ZSBib29sZWFuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gKCogLT4gdHJ1ZSlcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiovXG5pbXBvcnQgYWx3YXlzIGZyb20gJy4uL3V0aWwvYWx3YXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBhbHdheXModHJ1ZSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdCb29sZWFuJylcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cbiAqL1xuXG5leHBvcnQgY29uc3QgTU9OVEhTID0gW1xuICAnSmFudWFyeScsXG4gICdGZWJydWFyeScsXG4gICdNYXJjaCcsXG4gICdBcHJpbCcsXG4gICdNYXknLFxuICAnSnVuZScsXG4gICdKdWx5JyxcbiAgJ0F1Z3VzdCcsXG4gICdTZXB0ZW1iZXInLFxuICAnT2N0b2JlcicsXG4gICdOb3ZlbWJlcicsXG4gICdEZWNlbWJlcidcbl1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cbiAqL1xuZXhwb3J0IGNvbnN0IFdFRUtEQVlTID0gW1xuICAnU3VuZGF5JyxcbiAgJ01vbmRheScsXG4gICdUdWVzZGF5JyxcbiAgJ1dlZG5lc2RheScsXG4gICdUaHVyc2RheScsXG4gICdGcmlkYXknLFxuICAnU2F0dXJkYXknXG5dXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHN0YXJ0LCBlbmQpID0+IHtcclxuICByZXR1cm4gKG5ldyBEYXRlKHN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShlbmQpLmdldFRpbWUoKSlcclxufSlcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyMC8wMS8yMDE3LlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBpc1ZhbGlkRGF0ZSBmcm9tICcuL2lzVmFsaWQnXG5pbXBvcnQgeyBXRUVLREFZUyB9IGZyb20gJy4uL2NvbnN0YW50cy9XRUVLREFZUydcbmltcG9ydCB7IE1PTlRIUyB9IGZyb20gJy4uL2NvbnN0YW50cy9NT05USFMnXG5cbmNvbnN0IGdldFdlZWsgPSAoZCkgPT4ge1xuICAvLyBDb3B5IGRhdGUgc28gZG9uJ3QgbW9kaWZ5IG9yaWdpbmFsXG4gIGQgPSBuZXcgRGF0ZShEYXRlLlVUQyhkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSwgZC5nZXREYXRlKCkpKVxuICAvLyBTZXQgdG8gbmVhcmVzdCBUaHVyc2RheTogY3VycmVudCBkYXRlICsgNCAtIGN1cnJlbnQgZGF5IG51bWJlclxuICAvLyBNYWtlIFN1bmRheSdzIGRheSBudW1iZXIgN1xuICBkLnNldFVUQ0RhdGUoZC5nZXRVVENEYXRlKCkgKyA0IC0gKGQuZ2V0VVRDRGF5KCkgfHwgNykpXG4gIC8vIEdldCBmaXJzdCBkYXkgb2YgeWVhclxuICBsZXQgeWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRVVENGdWxsWWVhcigpLCAwLCAxKSlcblxuICAvLyBDYWxjdWxhdGUgZnVsbCB3ZWVrcyB0byBuZWFyZXN0IFRodXJzZGF5XG4gIGxldCB3ZWVrTm8gPSBNYXRoLmNlaWwoKCgoZCAtIHllYXJTdGFydCkgLyA4NjQwMDAwMCkgKyAxKSAvIDcpXG5cbiAgLy8gUmV0dXJuIGFycmF5IG9mIHllYXIgYW5kIHdlZWsgbnVtYmVyXG4gIHJldHVybiBbZC5nZXRVVENGdWxsWWVhcigpLCB3ZWVrTm9dXG59XG5cbi8vIHV0aWxpdHkgZnVuY3Rpb25zIGZvciB0aGUgZGF0ZSBmb3JtYXR0aW5nXG5jb25zdCBaRVJPUyA9ICcwMDAwMDAwMCdcbmNvbnN0IGxhc3ROID0gY3VycnkoKG4sIHN0cikgPT4gc3RyLnN1YnN0cmluZyhzdHIubGVuZ3RoIC0gbiwgc3RyLmxlbmd0aCkpXG5jb25zdCBmaXJzdE4gPSBjdXJyeSgobiwgc3RyKSA9PiBzdHIuc3Vic3RyaW5nKDAsIG4pKVxuY29uc3QgZmlsbCA9IGN1cnJ5KChkaWdpdHMsIG4pID0+IGxhc3ROKGRpZ2l0cywgWkVST1MgKyBuKSlcblxuLy8gZGF0ZS90aW1lIHJlZ2V4XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbmNvbnN0IERBVEVfVE9LRU5TID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFF8WVlZWVlZfFlZWVlZfFlZWVl8WVl8Z2coZ2dnPyk/fEdHKEdHRz8pP3xlfEV8YXxBfGhoP3xISD98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZ1xuXG5jb25zdCBtb2RDZWlsaW5nID0gKG1vZCwgdmFsKSA9PiB2YWwgJSBtb2QgfHwgbW9kXG5cbi8vIHRva2VucyBtYXAgdG8gZ2V0IHBhcnRzIG9mIHRoZSBkYXRlIC90aW1lXG5jb25zdCB0b2tlbnMgPSB7XG4gIFlZWVk6IGQgPT4gZmlsbCg0LCBkLmdldEZ1bGxZZWFyKCkpLFxuICBZWTogZCA9PiBsYXN0TigyLCBmaWxsKDQsIGQuZ2V0RnVsbFllYXIoKSkpLFxuICBNTU1NOiBkID0+IE1PTlRIU1tkLmdldE1vbnRoKCldLFxuICBNTU06IGQgPT4gZmlyc3ROKDMsIE1PTlRIU1tkLmdldE1vbnRoKCldKSxcbiAgTU06IGQgPT4gZmlsbCgyLCBkLmdldE1vbnRoKCkgKyAxKSxcbiAgTTogZCA9PiBkLmdldE1vbnRoKCkgKyAxLFxuICB3OiBkID0+IGdldFdlZWsoZCksXG4gIHd3OiBkID0+IGZpbGwoMiwgZ2V0V2VlayhkKSksXG4gIEREOiBkID0+IGZpbGwoMiwgZC5nZXREYXRlKCkpLFxuICBEOiBkID0+IGQuZ2V0RGF0ZSgpLFxuICBkZGRkOiBkID0+IFdFRUtEQVlTW2QuZ2V0RGF5KCldLFxuICBkZGQ6IGQgPT4gZmlyc3ROKDMsIFdFRUtEQVlTW2QuZ2V0RGF5KCldKSxcbiAgZGQ6IGQgPT4gZmlyc3ROKDIsIFdFRUtEQVlTW2QuZ2V0RGF5KCldKSxcbiAgZDogZCA9PiBkLmdldERheSgpLFxuICBISDogZCA9PiBmaWxsKDIsIGQuZ2V0SG91cnMoKSksXG4gIEg6IGQgPT4gZC5nZXRIb3VycygpLFxuICBoaDogZCA9PiBmaWxsKDIsIG1vZENlaWxpbmcoMTIsIGQuZ2V0SG91cnMoKSkpLFxuICBoOiBkID0+IG1vZENlaWxpbmcoMTIsIGQuZ2V0SG91cnMoKSksXG4gIG1tOiBkID0+IGZpbGwoMiwgZC5nZXRNaW51dGVzKCkpLFxuICBtOiBkID0+IGQuZ2V0TWludXRlcygpLFxuICBzczogZCA9PiBmaWxsKDIsIGQuZ2V0U2Vjb25kcygpKSxcbiAgczogZCA9PiBkLmdldFNlY29uZHMoKSxcbiAgQTogZCA9PiBkLmdldEhvdXJzKCkgPiAxMSA/ICdQTScgOiAnQU0nLFxuICBhOiBkID0+IGQuZ2V0SG91cnMoKSA+IDExID8gJ3BtJyA6ICdhbScsXG4gIFNTUzogZCA9PiBmaWxsKDMsIGQuZ2V0TWlsbGlzZWNvbmRzKCkpLFxuICBTUzogZCA9PiBmaXJzdE4oMiwgZmlsbCgzLCBkLmdldE1pbGxpc2Vjb25kcygpKSksXG4gIFM6IGQgPT4gZmlyc3ROKDEsIGZpbGwoMywgZC5nZXRNaWxsaXNlY29uZHMoKSkpLFxuICBROiBkID0+IE1hdGguY2VpbCgoZC5nZXRNb250aCgpICsgMSkgLyAzKVxufVxuXG4vLyBtYXAgdGhpcyBmdW5jdGlvbiB0byBnZXQgdGhlIGFjdHVhbCB0aW1lL2RhdGUgdmFsdWUgZm9yIGVhY2ggdG9rZW5cbmNvbnN0IHN3YXBUb2tlbldpdGhWYWx1ZSA9IGN1cnJ5KChkYXRlLCB0b2tlbikgPT4ge1xuICByZXR1cm4gdG9rZW5zW3Rva2VuXSA/IHRva2Vuc1t0b2tlbl0oZGF0ZSkgOiB0b2tlblxufSlcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKGZvcm1hdCwgZGF0ZSkgPT4ge1xuICAvLyBjaGVjayBmb3IgdmFsaWQgZGF0ZVxuICBpZiAoIWlzVmFsaWREYXRlKGRhdGUpKSByZXR1cm4gJ0ludmFsaWQgRGF0ZScgLy8gcmV0dXJuIHN0cmluZ1xuICByZXR1cm4gZm9ybWF0Lm1hdGNoKERBVEVfVE9LRU5TKS5tYXAoc3dhcFRva2VuV2l0aFZhbHVlKGRhdGUpKS5qb2luKCcnKSAvLyByZXR1cm4gam9pbmVkIHN0cmluZ1xufSlcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdEYXRlJylcclxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwOS8wMy8yMDE3LlxuICovXG5pbXBvcnQgZGlmZkRhdGUgZnJvbSAnLi9kaWZmRGF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IHtcbiAgcmV0dXJuIGRpZmZEYXRlKG5ldyBEYXRlKCkpKGQpIDwgMFxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAxOC8wMy8yMDE3LlxuICovXG5pbXBvcnQgaXNEYXRlIGZyb20gJy4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQgKHgpIHtcbiAgLy8gbm9pbnNwZWN0aW9uIEpTQ2hlY2tGdW5jdGlvblNpZ25hdHVyZXNcbiAgcmV0dXJuIGlzRGF0ZSh4KSAmJiBpc0Zpbml0ZSh4LnZhbHVlT2YoKSlcbn07XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gODY0MDAwMDAgLy8gMjQqNjAqNjAqMTAwMCA9IDg2NDAwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyAzNjAwMDAwIC8vIDYwKjYwKjEwMDAgPSAzNjAwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyA2MDAwMCAvLyA2MCoxMDAwID0gNjAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDEwMDBcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8vIGFycmF5XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFsc0FycmF5IH0gZnJvbSAnYXJyYXkvZXF1YWxzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0FycmF5IH0gZnJvbSAnYXJyYXkvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvQXJyYXkgfSBmcm9tICdhcnJheS90bydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pb25BcnJheSB9IGZyb20gJ2FycmF5L3VuaW9uJ1xuXG4vLyBib29sZWFuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzQm9vbGVhbiB9IGZyb20gJ2Jvb2xlYW4vaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEYgfSBmcm9tICdib29sZWFuL0YnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFQgfSBmcm9tICdib29sZWFuL1QnXG5cbi8vIG1vbmFkc1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBqdXN0IH0gZnJvbSAnbW9uYWRzL0p1c3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1heWJlIH0gZnJvbSAnbW9uYWRzL01heWJlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBub3RoaW5nIH0gZnJvbSAnbW9uYWRzL05vdGhpbmcnXG5cbi8vIG51bWJlclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc051bWJlciB9IGZyb20gJ251bWJlci9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOYW4gfSBmcm9tICdudW1iZXIvaXNOYW4nXG5cbi8vIG9iamVjdFxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlcXVhbHNPYmplY3QgfSBmcm9tICdvYmplY3QvZXF1YWxzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc09iamVjdCB9IGZyb20gJ29iamVjdC9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNFbXB0eU9iamVjdCB9IGZyb20gJ29iamVjdC9pc0VtcHR5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZU9iamVjdCB9IGZyb20gJ29iamVjdC9tZXJnZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb21pdEZyb21PYmplY3QgfSBmcm9tICdvYmplY3Qvb21pdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzIH0gZnJvbSAnb2JqZWN0L2hhcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzSW4gfSBmcm9tICdvYmplY3QvaGFzSW4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleXMgfSBmcm9tICdvYmplY3Qva2V5cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5c0luIH0gZnJvbSAnb2JqZWN0L2tleXNJbidcblxuLy8gc3RyaW5nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmNhdFN0cmluZyB9IGZyb20gJ3N0cmluZy9jb25jYXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvcm1hdFN0cmluZyB9IGZyb20gJ3N0cmluZy9mb3JtYXRTdHJpbmcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzU3RyaW5nIH0gZnJvbSAnc3RyaW5nL2lzJ1xuXG4vLyB1dGlsXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFuZCB9IGZyb20gJ3V0aWwvYW5kJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbGwgfSBmcm9tICd1dGlsL2FsbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW55IH0gZnJvbSAndXRpbC9hbnknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsd2F5cyB9IGZyb20gJ3V0aWwvYWx3YXlzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjdXJyeSB9IGZyb20gJ3V0aWwvY3VycnknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBvc2UgfSBmcm9tICd1dGlsL2NvbXBvc2UnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVtcHR5IH0gZnJvbSAndXRpbC9lbXB0eSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzIH0gZnJvbSAndXRpbC9lcXVhbHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGV4aXN0cyB9IGZyb20gJ3V0aWwvZXhpc3RzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpZGVudGljYWwgfSBmcm9tICd1dGlsL2lkZW50aWNhbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWRlbnRpdHkgfSBmcm9tICd1dGlsL2lkZW50aXR5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpcyB9IGZyb20gJ3V0aWwvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1wdHkgfSBmcm9tICd1dGlsL2lzRW1wdHknXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vdCB9IGZyb20gJ3V0aWwvbm90J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvciB9IGZyb20gJ3V0aWwvb3InXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRydXRoeSB9IGZyb20gJ3V0aWwvdHJ1dGh5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0eXBlIH0gZnJvbSAndXRpbC90eXBlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXggfSBmcm9tICd1dGlsL21heCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwIH0gZnJvbSAndXRpbC9tYXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvbGQgfSBmcm9tICd1dGlsL2ZvbGQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbmRJbmRleCB9IGZyb20gJ3V0aWwvZmluZEluZGV4J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB6aXBXaXRoIH0gZnJvbSAndXRpbC96aXBXaXRoJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB6aXAgfSBmcm9tICd1dGlsL3ppcCdcblxuLy8gZGF0ZVxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaWZmRGF0ZSB9IGZyb20gJ2RhdGUvZGlmZkRhdGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvcm1hdERhdGVUaW1lIH0gZnJvbSAnZGF0ZS9mb3JtYXREYXRlVGltZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGF0ZUlzIH0gZnJvbSAnZGF0ZS9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNGdXR1cmVEYXRlIH0gZnJvbSAnZGF0ZS9pc0Z1dHVyZURhdGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzVmFsaWQgfSBmcm9tICdkYXRlL2lzVmFsaWQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvRGF5IH0gZnJvbSAnZGF0ZS90b0RheSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9Ib3VyIH0gZnJvbSAnZGF0ZS90b0hvdXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvTWludXRlcyB9IGZyb20gJ2RhdGUvdG9NaW51dGVzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b1NlY29uZHMgfSBmcm9tICdkYXRlL3RvU2Vjb25kcydcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgTWFwIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge01hcH0gYVxuICogQHJldHVybiB7TWFwfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vdXRpbC9lbXB0eSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBjb25zdCByID0gZW1wdHkoYSlcbiAgYS5mb3JFYWNoKCh2LCBrLCBtYXApID0+IHtcbiAgICByLnNldChrLCBjYih2LCBrLCBtYXApKVxuICB9KVxuICByZXR1cm4gclxufSlcbiIsImxldCBKdXN0ID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl92YWx1ZSA9IHZhbFxuICByZXR1cm4gdGhpc1xufVxuXG5KdXN0LnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5KdXN0LnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBKdXN0XG4iLCJpbXBvcnQgSnVzdCBmcm9tICcuL0p1c3QnXG5pbXBvcnQgTm90aGluZyBmcm9tICcuL05vdGhpbmcnXG5cbmxldCBNYXliZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgdGhpcy5fX3ZhbHVlID0gdmFsXG59XG5cbk1heWJlLm9mID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgTWF5YmUpIHJldHVybiB2YWxcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBNYXliZSkge1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbFxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcmV0dXJuIG5ldyBNYXliZSh2YWwpXG59XG5cbk1heWJlLnByb3RvdHlwZS5nZXRPckVsc2UgPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gdGhpcy5pc05vdGhpbmcoKSA/IG4gOiB0aGlzLl9fdmFsdWVcbn1cblxuTWF5YmUucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gIGlmICh0aGlzLmlzTm90aGluZygpKSB7XG4gICAgcmV0dXJuIE1heWJlLm9mKG51bGwpXG4gIH1cbiAgcmV0dXJuIE1heWJlLm9mKGYodGhpcy5fX3ZhbHVlKSlcbn1cblxuTWF5YmUucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKG0pIHtcbiAgcmV0dXJuIG0ubWFwKHRoaXMuX192YWx1ZSlcbn1cblxuTWF5YmUucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICh0aGlzLl9fdmFsdWUgPT0gbnVsbClcbn1cblxuTWF5YmUucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICF0aGlzLmlzTm90aGluZygpXG59XG5cbk1heWJlLnByb3RvdHlwZS5Ob3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IE5vdGhpbmcoKVxufVxuXG5NYXliZS5wcm90b3R5cGUuSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBKdXN0KHRoaXMuX3ZhbHVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXliZVxuIiwibGV0IE5vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG59XG5cbk5vdGhpbmcucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZhbHNlXG59XG5Ob3RoaW5nLnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGhpbmdcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdOdW1iZXInKVxuIiwiLyoqXG4gKiBpc05hTlxuICogQ2hlY2tzIGlmIG51bWJlciBpcyBOQU5cbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKi9cbmltcG9ydCBpc051bWJlciBmcm9tICcuL2lzJ1xuaW1wb3J0IGFuZCBmcm9tICcuLi91dGlsL2FuZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOYW4gKHgpIHtcbiAgcmV0dXJuIGFuZChpc051bWJlcih4KSwgaXNOYU4oeCkpXG59O1xuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuLi91dGlsL2V4aXN0cydcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXG5pbXBvcnQgYW5kIGZyb20gJy4uL3V0aWwvYW5kJ1xuaW1wb3J0IGlzRW1wdHlPYmplY3QgZnJvbSAnLi9pc0VtcHR5J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi91dGlsL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHgsIHkpID0+IHtcbiAgaWYgKGFuZChpc0VtcHR5T2JqZWN0KHgpLCBpc0VtcHR5T2JqZWN0KHkpKSkgcmV0dXJuIHRydWVcblxuICBmb3IgKGxldCBrZXlYIGluIHgpIHtcbiAgICAvLyBub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXG4gICAgaWYgKG5vdChlcXVhbHMoeFtrZXlYXSwgeVtrZXlYXSkpKSByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZvciAobGV0IGtleVkgaW4geSkge1xuICAgIGlmIChub3QoZXhpc3RzKHhba2V5WV0pKSAmJiBleGlzdHMoeVtrZXlZXSkpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBmb2xkXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIG8pIHtcbiAgY29uc3QgayA9IGtleXMobylcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgbGV0IHIgPSBPYmplY3QoaW5pdClcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2Iociwgb1trW2ldXSwga1tpXSwgbylcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIHtTdHJpbmd9IC0+IHtPYmplY3R9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGhhcyAocHJvcCwgb2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LCBldmVuIGlmIGl0IGlzIGluaGVyaXRlZFxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyB7U3RyaW5nfSAtPiB7T2JqZWN0fSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcFxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBoYXNJbiAocHJvcCwgb2JqKSB7XG4gIHJldHVybiBwcm9wIGluIG9ialxufSlcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdPYmplY3QnKVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRW1wdHlPYmplY3QgKHgpIHtcbiAgZm9yIChsZXQga2V5IGluIHgpIHtcbiAgICBpZiAoeC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn07XG4iLCIvKipcbiAqIFJldHVybnMgdGhlIG93biBrZXlzIG9mIGFuIG9iamVjdCBhcyBhbiBBcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IFtiXVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhPYmplY3QoYSkpXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIGFsbCB0aGUga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBbYl1cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQHJldHVybiB7QXJyYXl9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24ga2V5cyAoYSkge1xuICBjb25zdCByID0gW11cbiAgZm9yIChjb25zdCBrIGluIGEpIHtcbiAgICByLnB1c2goaylcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIG9iamVjdCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4uL3V0aWwvZW1wdHknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgayA9IGtleXMoYSlcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltrW2ldXSA9IGNiKGFba1tpXV0pXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBlcXVhbHNcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4uL3V0aWwvaWRlbnRpY2FsJ1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL29iamVjdC9pcydcbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzJ1xuaW1wb3J0IHVuaW9uIGZyb20gJy4uL2FycmF5L3VuaW9uJ1xuXG5jb25zdCBtZXJnZSA9IGN1cnJ5KChvYmpMLCBvYmpSKSA9PiB7XG4gIGxldCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpMKVxuXG4gIGlmIChpZGVudGljYWwob2JqTCwgb2JqUikpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb2JqTClcbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gb2JqUikge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9ialIsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGNvbnN0IG9sZFZhbHVlID0gb2JqUltrZXldXG4gICAgY29uc3QgbmV3VmFsdWUgPSBvYmpMW2tleV1cblxuICAgIGlmIChpc09iamVjdChvbGRWYWx1ZSkgJiYgaXNPYmplY3QobmV3VmFsdWUpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKG9sZFZhbHVlLCBuZXdWYWx1ZSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkobmV3VmFsdWUpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHVuaW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSBvbGRWYWx1ZSAvLyBUT0RPOiB0aGlzIGlzIGEgcmVmZXJlbmNlLCBzaG91bGQgYmUgY2xvbmVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufSlcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKG9iaiwgbmFtZXMpID0+IHtcbiAgbGV0IHJlc3VsdCA9IHt9XG5cbiAgT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgIHJldHVybiBuYW1lcy5pbmRleE9mKGtleSkgPT09IC0xXG4gIH0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cbiAqL1xuXG5leHBvcnQgY29uc3QgY29uY2F0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciA9ICcsJykgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xuICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICByZXR1cm4gYXJncy5qb2luKHNlcGFyYXRvcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uY2F0XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmltcG9ydCB0b0FycmF5IGZyb20gJy4uL2FycmF5L3RvJ1xyXG5pbXBvcnQgbm90IGZyb20gJy4uL3V0aWwvbm90J1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdHIpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcclxuICBsZXQgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKVxyXG5cbiAgYXJncy5zaGlmdCgpXHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC97KFxcZCspfS9nLCAobWF0Y2gsIGlkeCkgPT4ge1xyXG4gICAgcmV0dXJuIG5vdChpcygnVW5kZWZpbmVkJywgYXJnc1tpZHhdKSkgPyBhcmdzW2lkeF0gOiBtYXRjaFxyXG4gIH0pXHJcbn1cclxuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ1N0cmluZycpXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhIHN0cmluZyBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9ICcnXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciArPSBjYihhLmNoYXJBdChpKSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IFthXSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbGwgKGNiLCBhKSB7XG4gIGxldCByZXMgPSB0cnVlXG4gIGZvciAobGV0IGkgaW4gYSkge1xuICAgIGlmICghY2IoYVtpXSkpIHtcbiAgICAgIHJlcyA9IGZhbHNlXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBwcm92aWRlZFxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+ICgqIC0+IGEpXG4gKiBAcGFyYW0geyp9IGFcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFsd2F5cyAoeCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4geCB9XG59KVxuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogeCwgeVxuICogUmV0dXJucyBib29sZWFuXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbmQgKHgsIHkpIHtcbiAgcmV0dXJuIHggJiYgeVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uIG9mIHRoZSBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChUT0RPKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYW55IChjYiwgYSkge1xuICBsZXQgcmVzID0gZmFsc2VcbiAgZm9yIChsZXQgaSBpbiBhKSB7XG4gICAgaWYgKGNiKGFbaV0pKSB7XG4gICAgICByZXMgPSB0cnVlXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNS8wMy8yMDE3LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlICgpIHtcbiAgbGV0IGZ1bnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgaW5pdCA9IGZ1bnNbZnVucy5sZW5ndGggLSAxXVxuICAgIGxldCByZXN1bHQgPSBbaW5pdC5hcHBseShpbml0LCBhcmd1bWVudHMpXVxuICAgIGxldCBpID0gZnVucy5sZW5ndGggLSAyXG5cbiAgICBmb3IgKGk7IGkgPj0gMDsgLS1pKSB7XG4gICAgICBjb25zdCBmdW4gPSBmdW5zW2ldXG5cbiAgICAgIHJlc3VsdCA9IFtmdW4uYXBwbHkoZnVuLCByZXN1bHQpXVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0WzBdXG4gIH1cbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNS8wMy8yMDE3LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeSAoZnVuKSB7XG4gIGxldCBhcmdzbGVuID0gZnVuLmxlbmd0aFxuXG4gIGlmIChhcmdzbGVuID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1blxuICB9XG4gIHJldHVybiBjcmVhdGVSZWN1cnNlcihbXSlcblxuICBmdW5jdGlvbiByZWN1cnNlIChhY2MsIGFyZ3MpIHtcbiAgICBsZXQgX2FjYyA9IGFjYy5jb25jYXQoYXJncylcblxuICAgIGlmIChfYWNjLmxlbmd0aCA8IGFyZ3NsZW4pIHtcbiAgICAgIHJldHVybiBjcmVhdGVSZWN1cnNlcihfYWNjKVxuICAgIH1cbiAgICByZXR1cm4gZnVuLmFwcGx5KHRoaXMsIF9hY2MpXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVSZWN1cnNlciAoYWNjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuXG4gICAgICByZXR1cm4gcmVjdXJzZShhY2MsIGFyZ3MpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBlbXB0eVxuICogUmV0dXJucyB0aGUgZW1wdHkgZXF1aXZhbGVudCBvZiB0aGUgZmlyc3QgYXJndW1lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbXB0eSAoeCkge1xuICByZXR1cm4gbmV3IHguY29uc3RydWN0b3IoKVxufTtcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4vaWRlbnRpY2FsJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuaW1wb3J0IG5vdCBmcm9tICcuL25vdCdcbmltcG9ydCBvciBmcm9tICcuL29yJ1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL29iamVjdC9pcydcbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzJ1xuaW1wb3J0IGlzQm9vbGVhbiBmcm9tICcuLi9ib29sZWFuL2lzJ1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4uL251bWJlci9pcydcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuLi9zdHJpbmcvaXMnXG5pbXBvcnQgaXNEYXRlIGZyb20gJy4uL2RhdGUvaXMnXG5pbXBvcnQgZXF1YWxzQXJyYXkgZnJvbSAnLi4vYXJyYXkvZXF1YWxzJ1xuaW1wb3J0IGVxdWFsc09iamVjdCBmcm9tICcuLi9vYmplY3QvZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHMgKHgsIHkpIHtcbiAgaWYgKGlkZW50aWNhbCh4LCB5KSkgcmV0dXJuIHRydWVcblxuICBpZiAodHlwZSh4KSAhPT0gdHlwZSh5KSkgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKG9yKG5vdChleGlzdHMoeCkpLCBub3QoZXhpc3RzKHkpKSkpIHJldHVybiBmYWxzZVxuXG4gIGlmICh4LmNvbnN0cnVjdG9yICE9PSB5LmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2VcblxuICBpZiAoaXNTdHJpbmcoeCkgfHwgaXNCb29sZWFuKHgpIHx8IGlzTnVtYmVyKHgpIHx8IGlzRGF0ZSh4KSkge1xuICAgIHJldHVybiBpZGVudGljYWwoeC52YWx1ZU9mKCksIHkudmFsdWVPZigpKVxuICB9XG4gIGlmIChpc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuIGVxdWFsc0FycmF5KHgsIHkpXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzT2JqZWN0KHgsIHkpXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59KVxuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGlzdHMgKHgpIHtcbiAgcmV0dXJuICEoeCA9PSBudWxsKVxufTtcbiIsIi8qKlxuICogRmluZCB0aGUgaW5kZXggbWF0Y2hpbmcgYSBwcmVkaWNhdGVcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IE51bWJlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gUHJlZGljYXRlIGZ1bmN0aW9uIHJldHVybnMgYSBib29sZWFuXG4gKiBAcGFyYW0ge1sqXX0gQW4gYXJyYXkgbGlrZSBvYmplY3RcbiAqIEByZXR1cm5cbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZpbmRJbmRleCAoZm4sIGEpIHtcbiAgbGV0IGkgPSAwXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICB3aGlsZSAoaSA8IGwpIHtcbiAgICBpZiAoZm4oYVtpXSkpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICAgIGkgKz0gMVxuICB9XG4gIHJldHVybiAtMVxufSlcbiIsIi8qKlxuICogUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ6IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZcOpXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnICgoYSwgYiwgYywgYSkg4oaSIGEpIOKGkiBhIOKGkiBbYl0g4oaSIGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIHJlY2VpdmVzIDQgdmFsdWVzOiB0aGUgYWNjdW11bGF0b3IsIHRoZSBpdGVtLCB0aGUgaW5kZXgsIGFuZCB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gYSBpcyB0aGUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHsqfSBbYl0gdGhlIGFycmF5IGxpa2UgaXRlbSB0byBpdGVyYXRlIG92ZXJcbiAqIEByZXR1cm4geyp9IGEgaXMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlXG4gKiovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xuaW1wb3J0IGFycmF5Rm9sZCBmcm9tICcuLi9hcnJheS9mb2xkJ1xuaW1wb3J0IG9iamVjdEZvbGQgZnJvbSAnLi4vb2JqZWN0L2ZvbGQnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBhKSB7XG4gIGNvbnN0IHR5cGVNYXAgPSB7XG4gICAgJ09iamVjdCc6IG9iamVjdEZvbGQsXG4gICAgJ0FycmF5JzogYXJyYXlGb2xkXG4gIH1cbiAgLy8gaWYgKGEubmV4dCkge1xuICAvLyAgIHJldHVybiBpdGVyYWJsZUZvbGQoY2IsIGluaXQsIGEpXG4gIC8vIH1cbiAgLy8gaWYgKHR5cGUoU3ltYm9sKSAhPT0gJ3VuZGVmaW5lZCcgJiYgYVtTeW1ib2wuaXRlcmF0b3JdKSB7XG4gIC8vICAgcmV0dXJuIGl0ZXJhYmxlRm9sZChjYiwgaW5pdCwgYVtTeW1ib2wuaXRlcmF0b3JdKCkpXG4gIC8vIH1cbiAgcmV0dXJuIHR5cGVNYXBbdHlwZShhKV0oY2IsIGluaXQsIGEpXG59KVxuXG4vLyBmdW5jdGlvbiBpdGVyYWJsZUZvbGQgKGNiLCBhY2MsIGdlbikge1xuLy8gICBsZXQgc3RlcCA9IGdlbi5uZXh0KClcbi8vICAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcbi8vICAgICBhY2MgPSBjYihhY2MsIHN0ZXAudmFsdWUpXG4vLyAgICAgc3RlcCA9IGdlbi5uZXh0KClcbi8vICAgfVxuLy8gICByZXR1cm4gYWNjXG4vLyB9XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBpZGVudGljYWxcbiAqIGNoZWNrcyBmb3IgaWRlbnRpbnRpY2FsIGl0ZW1zXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGlzTmFuIGZyb20gJy4uL251bWJlci9pc05hbidcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaWRlbnRpY2FsICh4LCB5KSB7XG4gIGlmICh4ID09PSAwICYmIHkgPT09IDApIHtcbiAgICByZXR1cm4gMSAvIHggPT09IDEgLyB5XG4gIH1cbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAhIShpc05hbih4KSAmJiBpc05hbih5KSlcbn0pXG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBzdXBwbGllZCB0byB0aGUgZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZGVudGl0eSAoeCkge1xuICByZXR1cm4geFxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBsZW4gZGllcmlja3hcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlzIChDdG9yLCB2YWwpIHtcbiAgcmV0dXJuIHR5cGUodmFsKSA9PT0gQ3RvclxufSlcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIGVtcHR5XG4gKiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxuICovXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi9lbXB0eSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4vZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtcHR5ICh4KSB7XG4gIHJldHVybiBleGlzdHMoeCkgJiYgZXF1YWxzKHgsIGVtcHR5KHgpKVxufTtcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIGFycmF5IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IGIgLT4gYlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXG5pbXBvcnQgYXJyYXlNYXAgZnJvbSAnLi4vYXJyYXkvbWFwJ1xuaW1wb3J0IG9iamVjdE1hcCBmcm9tICcuLi9vYmplY3QvbWFwJ1xuaW1wb3J0IG1hcE1hcCBmcm9tICcuLi9tYXAvbWFwJ1xuaW1wb3J0IHN0cmluZ01hcCBmcm9tICcuLi9zdHJpbmcvbWFwJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi4vdXRpbC90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGNvbnN0IHIgPSB7XG4gICAgJ09iamVjdCc6IG9iamVjdE1hcCxcbiAgICAnU3RyaW5nJzogc3RyaW5nTWFwLFxuICAgICdBcnJheSc6IGFycmF5TWFwLFxuICAgICdNYXAnOiBtYXBNYXBcbiAgICAvLyAnU2V0Jzogc2V0TWFwXG4gIH1cbiAgcmV0dXJuIHJbdHlwZShhKV0oY2IsIGEpXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXJnZXN0IG9mIHRoZSAyIGFyZ3VtZW50cyBwcm92aWRlZFxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBPcmQgYSA9PiBhIC0+IGEgLT4gYVxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4geyp9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWF4IChhLCBiKSB7XG4gIHJldHVybiBiID4gYSA/IGIgOiBhXG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3QgKHgpIHtcbiAgcmV0dXJuICF4XG59O1xuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogb3JcbiAqIFJldHVybnMgdHJ1ZSBpZiBvbmUgb3IgdGhlIG90aGVyIGlzIHRydWVcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9yICh4LCB5KSB7XG4gIHJldHVybiB4IHx8IHlcbn0pXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDA2LzAyLzIwMTcuXG4gKi9cbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRydXRoeSAoeCkge1xuICByZXR1cm4gKHggIT09IGZhbHNlKSAmJiBleGlzdHMoeClcbn07XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR5cGUgKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KS5zbGljZSg4LCAtMSlcbn07XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiB6aXBcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IHppcFdpdGggZnJvbSAnLi96aXBXaXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiB6aXAgKGEsIGIpIHtcbiAgcmV0dXJuIHppcFdpdGgoZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIFt4LCB5XSB9LCBhLCBiKVxufSlcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIHppcFdpdGhcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiB6aXBXaXRoIChjYiwgYSwgYikge1xuICBjb25zdCBhcnIgPSBbXVxuICBjb25zdCBsZW4gPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpXG4gIGxldCBpID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIucHVzaChjYihhW2ldLCBiW2ldKSlcbiAgfVxuICByZXR1cm4gYXJyXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==