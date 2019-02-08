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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4uanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1bi5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvZXF1YWxzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS90by5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvdW5pb24uanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2Jvb2xlYW4vRi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9ULmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9ib29sZWFuL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9jb25zdGFudHMvTU9OVEhTLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9jb25zdGFudHMvV0VFS0RBWVMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvZGlmZkRhdGUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvZm9ybWF0RGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvaXNGdXR1cmVEYXRlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2lzVmFsaWQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9EYXkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9Ib3VyLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvTWludXRlcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b1NlY29uZHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tYXAvbWFwLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tb25hZHMvSnVzdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbW9uYWRzL01heWJlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9tb25hZHMvTm90aGluZy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9udW1iZXIvaXNOYW4uanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9oYXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9oYXNJbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9tYXAuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9tZXJnZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L29taXQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9mb3JtYXRTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvc3RyaW5nL21hcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbGwuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvYWx3YXlzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2FuZC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbnkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9jdXJyeS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9lbXB0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZXhpc3RzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lkZW50aWNhbC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pc0VtcHR5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL21hcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9tYXguanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvbm90LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL29yLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3RydXRoeS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC90eXBlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3ppcC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC96aXBXaXRoLmpzIl0sIm5hbWVzIjpbImVxdWFsc0FycmF5IiwieCIsInkiLCJsZW5ndGgiLCJpIiwibWFwIiwiY2IiLCJhIiwibCIsInIiLCJBcnJheSIsInRvQXJyYXkiLCJhcHBseSIsInVuaW9uQXJyYXkiLCJhcnJheUwiLCJhcnJheVIiLCJmcm9tIiwiU2V0IiwiY29uY2F0IiwiTU9OVEhTIiwiV0VFS0RBWVMiLCJzdGFydCIsImVuZCIsIkRhdGUiLCJnZXRUaW1lIiwiZ2V0V2VlayIsImQiLCJVVEMiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInNldFVUQ0RhdGUiLCJnZXRVVENEYXRlIiwiZ2V0VVRDRGF5IiwieWVhclN0YXJ0IiwiZ2V0VVRDRnVsbFllYXIiLCJ3ZWVrTm8iLCJNYXRoIiwiY2VpbCIsIlpFUk9TIiwibGFzdE4iLCJuIiwic3RyIiwic3Vic3RyaW5nIiwiZmlyc3ROIiwiZmlsbCIsImRpZ2l0cyIsIkRBVEVfVE9LRU5TIiwibW9kQ2VpbGluZyIsIm1vZCIsInZhbCIsInRva2VucyIsIllZWVkiLCJZWSIsIk1NTU0iLCJNTU0iLCJNTSIsIk0iLCJ3Iiwid3ciLCJERCIsIkQiLCJkZGRkIiwiZ2V0RGF5IiwiZGRkIiwiZGQiLCJISCIsImdldEhvdXJzIiwiSCIsImhoIiwiaCIsIm1tIiwiZ2V0TWludXRlcyIsIm0iLCJzcyIsImdldFNlY29uZHMiLCJzIiwiQSIsIlNTUyIsImdldE1pbGxpc2Vjb25kcyIsIlNTIiwiUyIsIlEiLCJzd2FwVG9rZW5XaXRoVmFsdWUiLCJkYXRlIiwidG9rZW4iLCJmb3JtYXQiLCJtYXRjaCIsImpvaW4iLCJpc1ZhbGlkIiwiaXNGaW5pdGUiLCJ2YWx1ZU9mIiwiZm9yRWFjaCIsInYiLCJrIiwic2V0IiwiSnVzdCIsIl92YWx1ZSIsInByb3RvdHlwZSIsImlzSnVzdCIsImlzTm90aGluZyIsIk1heWJlIiwiX192YWx1ZSIsIm9mIiwiZ2V0T3JFbHNlIiwiZiIsImFwIiwiTm90aGluZyIsImlzTmFuIiwiaXNOYU4iLCJrZXlYIiwia2V5WSIsImhhcyIsInByb3AiLCJvYmoiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJoYXNJbiIsImlzRW1wdHlPYmplY3QiLCJrZXkiLCJrZXlzIiwicHVzaCIsIm1lcmdlIiwib2JqTCIsIm9ialIiLCJyZXN1bHQiLCJhc3NpZ24iLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwibmFtZXMiLCJmaWx0ZXIiLCJpbmRleE9mIiwic2VwYXJhdG9yIiwiYXJncyIsInNsaWNlIiwiYXJndW1lbnRzIiwic2hpZnQiLCJyZXBsYWNlIiwiaWR4IiwiY2hhckF0IiwiYWxsIiwicmVzIiwiYWx3YXlzIiwiYW5kIiwiYW55IiwiY29tcG9zZSIsImZ1bnMiLCJpbml0IiwiZnVuIiwiY3VycnkiLCJhcmdzbGVuIiwiY3JlYXRlUmVjdXJzZXIiLCJyZWN1cnNlIiwiYWNjIiwiX2FjYyIsImVtcHR5IiwiY29uc3RydWN0b3IiLCJlcXVhbHMiLCJleGlzdHMiLCJpZGVudGljYWwiLCJpZGVudGl0eSIsImlzIiwiQ3RvciIsImlzRW1wdHkiLCJtYXgiLCJiIiwibm90Iiwib3IiLCJ0cnV0aHkiLCJ0eXBlIiwidG9TdHJpbmciLCJ6aXAiLCJ6aXBXaXRoIiwiYXJyIiwibGVuIiwibWluIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVB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cGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImZ1bi5qc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmdW4uanNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZnVuLmpzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIGVxdWFsc1xyXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuaW1wb3J0IG5vdCBmcm9tICcuLi91dGlsL25vdCdcclxuaW1wb3J0IGVxdWFscyBmcm9tICcuLi91dGlsL2VxdWFscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFsc0FycmF5ICh4LCB5KSB7XHJcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKG5vdChlcXVhbHMoeFtpXSwgeVtpXSkpKSByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufSlcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdBcnJheScpXHJcbiIsIi8qKlxyXG4gKiBNYXBzIG92ZXIgYW4gYXJyYXkgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBbYV0gLT4gW2FdXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcclxuICogQHJldHVybiB7SXRlcmFibGV9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XHJcbiAgbGV0IGkgPSAtMVxyXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxyXG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobClcclxuICB3aGlsZSAoKytpIDwgbCkge1xyXG4gICAgcltpXSA9IGNiKGFbaV0pXHJcbiAgfVxyXG4gIHJldHVybiByXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAxOC8wMy8yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvQXJyYXkgKHgpIHtcclxuICByZXR1cm4geC5sZW5ndGggPT09IDEgPyBbeFswXV0gOiBBcnJheS5hcHBseShudWxsLCB4KVxyXG59O1xyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogdW5pb25cclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gdW5pb25BcnJheSAoYXJyYXlMLCBhcnJheVIpIHtcclxuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycmF5TC5jb25jYXQoYXJyYXlSKSkpXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBBbHdheXMgcmV0dXJucyBhIGZ1bmN0aW9uIHdpdGggYSBGYWxzZSBib29sZWFuXHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgYSAtPiAoKiAtPiBmYWxzZSlcclxuICogQHBhcmFtIHsqfSBhXHJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxyXG4gKiovXHJcbmltcG9ydCBhbHdheXMgZnJvbSAnLi4vdXRpbC9hbHdheXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbHdheXMoZmFsc2UpXHJcbiIsIi8qKlxyXG4gKiBBbHdheXMgcmV0dXJucyBhIGZ1bmN0aW9uIHdpdGggYSBUcnVlIGJvb2xlYW5cclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyBhIC0+ICgqIC0+IHRydWUpXHJcbiAqIEBwYXJhbSB7Kn0gYVxyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cclxuICoqL1xyXG5pbXBvcnQgYWx3YXlzIGZyb20gJy4uL3V0aWwvYWx3YXlzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWx3YXlzKHRydWUpXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpcygnQm9vbGVhbicpXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAxOC8wMy8yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBNT05USFMgPSBbXHJcbiAgJ0phbnVhcnknLFxyXG4gICdGZWJydWFyeScsXHJcbiAgJ01hcmNoJyxcclxuICAnQXByaWwnLFxyXG4gICdNYXknLFxyXG4gICdKdW5lJyxcclxuICAnSnVseScsXHJcbiAgJ0F1Z3VzdCcsXHJcbiAgJ1NlcHRlbWJlcicsXHJcbiAgJ09jdG9iZXInLFxyXG4gICdOb3ZlbWJlcicsXHJcbiAgJ0RlY2VtYmVyJ1xyXG5dXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAxOC8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFdFRUtEQVlTID0gW1xyXG4gICdTdW5kYXknLFxyXG4gICdNb25kYXknLFxyXG4gICdUdWVzZGF5JyxcclxuICAnV2VkbmVzZGF5JyxcclxuICAnVGh1cnNkYXknLFxyXG4gICdGcmlkYXknLFxyXG4gICdTYXR1cmRheSdcclxuXVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHN0YXJ0LCBlbmQpID0+IHtcclxuICByZXR1cm4gKG5ldyBEYXRlKHN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShlbmQpLmdldFRpbWUoKSlcclxufSlcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjAvMDEvMjAxNy5cclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQgaXNWYWxpZERhdGUgZnJvbSAnLi9pc1ZhbGlkJ1xyXG5pbXBvcnQgeyBXRUVLREFZUyB9IGZyb20gJy4uL2NvbnN0YW50cy9XRUVLREFZUydcclxuaW1wb3J0IHsgTU9OVEhTIH0gZnJvbSAnLi4vY29uc3RhbnRzL01PTlRIUydcclxuXHJcbmNvbnN0IGdldFdlZWsgPSAoZCkgPT4ge1xyXG4gIC8vIENvcHkgZGF0ZSBzbyBkb24ndCBtb2RpZnkgb3JpZ2luYWxcclxuICBkID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIGQuZ2V0RGF0ZSgpKSlcclxuICAvLyBTZXQgdG8gbmVhcmVzdCBUaHVyc2RheTogY3VycmVudCBkYXRlICsgNCAtIGN1cnJlbnQgZGF5IG51bWJlclxyXG4gIC8vIE1ha2UgU3VuZGF5J3MgZGF5IG51bWJlciA3XHJcbiAgZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpICsgNCAtIChkLmdldFVUQ0RheSgpIHx8IDcpKVxyXG4gIC8vIEdldCBmaXJzdCBkYXkgb2YgeWVhclxyXG4gIGxldCB5ZWFyU3RhcnQgPSBuZXcgRGF0ZShEYXRlLlVUQyhkLmdldFVUQ0Z1bGxZZWFyKCksIDAsIDEpKVxyXG5cclxuICAvLyBDYWxjdWxhdGUgZnVsbCB3ZWVrcyB0byBuZWFyZXN0IFRodXJzZGF5XHJcbiAgbGV0IHdlZWtObyA9IE1hdGguY2VpbCgoKChkIC0geWVhclN0YXJ0KSAvIDg2NDAwMDAwKSArIDEpIC8gNylcclxuXHJcbiAgLy8gUmV0dXJuIGFycmF5IG9mIHllYXIgYW5kIHdlZWsgbnVtYmVyXHJcbiAgcmV0dXJuIFtkLmdldFVUQ0Z1bGxZZWFyKCksIHdlZWtOb11cclxufVxyXG5cclxuLy8gdXRpbGl0eSBmdW5jdGlvbnMgZm9yIHRoZSBkYXRlIGZvcm1hdHRpbmdcclxuY29uc3QgWkVST1MgPSAnMDAwMDAwMDAnXHJcbmNvbnN0IGxhc3ROID0gY3VycnkoKG4sIHN0cikgPT4gc3RyLnN1YnN0cmluZyhzdHIubGVuZ3RoIC0gbiwgc3RyLmxlbmd0aCkpXHJcbmNvbnN0IGZpcnN0TiA9IGN1cnJ5KChuLCBzdHIpID0+IHN0ci5zdWJzdHJpbmcoMCwgbikpXHJcbmNvbnN0IGZpbGwgPSBjdXJyeSgoZGlnaXRzLCBuKSA9PiBsYXN0TihkaWdpdHMsIFpFUk9TICsgbikpXHJcblxyXG4vLyBkYXRlL3RpbWUgcmVnZXhcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXHJcbmNvbnN0IERBVEVfVE9LRU5TID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFF8WVlZWVlZfFlZWVlZfFlZWVl8WVl8Z2coZ2dnPyk/fEdHKEdHRz8pP3xlfEV8YXxBfGhoP3xISD98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZ1xyXG5cclxuY29uc3QgbW9kQ2VpbGluZyA9IChtb2QsIHZhbCkgPT4gdmFsICUgbW9kIHx8IG1vZFxyXG5cclxuLy8gdG9rZW5zIG1hcCB0byBnZXQgcGFydHMgb2YgdGhlIGRhdGUgL3RpbWVcclxuY29uc3QgdG9rZW5zID0ge1xyXG4gIFlZWVk6IGQgPT4gZmlsbCg0LCBkLmdldEZ1bGxZZWFyKCkpLFxyXG4gIFlZOiBkID0+IGxhc3ROKDIsIGZpbGwoNCwgZC5nZXRGdWxsWWVhcigpKSksXHJcbiAgTU1NTTogZCA9PiBNT05USFNbZC5nZXRNb250aCgpXSxcclxuICBNTU06IGQgPT4gZmlyc3ROKDMsIE1PTlRIU1tkLmdldE1vbnRoKCldKSxcclxuICBNTTogZCA9PiBmaWxsKDIsIGQuZ2V0TW9udGgoKSArIDEpLFxyXG4gIE06IGQgPT4gZC5nZXRNb250aCgpICsgMSxcclxuICB3OiBkID0+IGdldFdlZWsoZCksXHJcbiAgd3c6IGQgPT4gZmlsbCgyLCBnZXRXZWVrKGQpKSxcclxuICBERDogZCA9PiBmaWxsKDIsIGQuZ2V0RGF0ZSgpKSxcclxuICBEOiBkID0+IGQuZ2V0RGF0ZSgpLFxyXG4gIGRkZGQ6IGQgPT4gV0VFS0RBWVNbZC5nZXREYXkoKV0sXHJcbiAgZGRkOiBkID0+IGZpcnN0TigzLCBXRUVLREFZU1tkLmdldERheSgpXSksXHJcbiAgZGQ6IGQgPT4gZmlyc3ROKDIsIFdFRUtEQVlTW2QuZ2V0RGF5KCldKSxcclxuICBkOiBkID0+IGQuZ2V0RGF5KCksXHJcbiAgSEg6IGQgPT4gZmlsbCgyLCBkLmdldEhvdXJzKCkpLFxyXG4gIEg6IGQgPT4gZC5nZXRIb3VycygpLFxyXG4gIGhoOiBkID0+IGZpbGwoMiwgbW9kQ2VpbGluZygxMiwgZC5nZXRIb3VycygpKSksXHJcbiAgaDogZCA9PiBtb2RDZWlsaW5nKDEyLCBkLmdldEhvdXJzKCkpLFxyXG4gIG1tOiBkID0+IGZpbGwoMiwgZC5nZXRNaW51dGVzKCkpLFxyXG4gIG06IGQgPT4gZC5nZXRNaW51dGVzKCksXHJcbiAgc3M6IGQgPT4gZmlsbCgyLCBkLmdldFNlY29uZHMoKSksXHJcbiAgczogZCA9PiBkLmdldFNlY29uZHMoKSxcclxuICBBOiBkID0+IGQuZ2V0SG91cnMoKSA+IDExID8gJ1BNJyA6ICdBTScsXHJcbiAgYTogZCA9PiBkLmdldEhvdXJzKCkgPiAxMSA/ICdwbScgOiAnYW0nLFxyXG4gIFNTUzogZCA9PiBmaWxsKDMsIGQuZ2V0TWlsbGlzZWNvbmRzKCkpLFxyXG4gIFNTOiBkID0+IGZpcnN0TigyLCBmaWxsKDMsIGQuZ2V0TWlsbGlzZWNvbmRzKCkpKSxcclxuICBTOiBkID0+IGZpcnN0TigxLCBmaWxsKDMsIGQuZ2V0TWlsbGlzZWNvbmRzKCkpKSxcclxuICBROiBkID0+IE1hdGguY2VpbCgoZC5nZXRNb250aCgpICsgMSkgLyAzKVxyXG59XHJcblxyXG4vLyBtYXAgdGhpcyBmdW5jdGlvbiB0byBnZXQgdGhlIGFjdHVhbCB0aW1lL2RhdGUgdmFsdWUgZm9yIGVhY2ggdG9rZW5cclxuY29uc3Qgc3dhcFRva2VuV2l0aFZhbHVlID0gY3VycnkoKGRhdGUsIHRva2VuKSA9PiB7XHJcbiAgcmV0dXJuIHRva2Vuc1t0b2tlbl0gPyB0b2tlbnNbdG9rZW5dKGRhdGUpIDogdG9rZW5cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChmb3JtYXQsIGRhdGUpID0+IHtcclxuICAvLyBjaGVjayBmb3IgdmFsaWQgZGF0ZVxyXG4gIGlmICghaXNWYWxpZERhdGUoZGF0ZSkpIHJldHVybiAnSW52YWxpZCBEYXRlJyAvLyByZXR1cm4gc3RyaW5nXHJcbiAgcmV0dXJuIGZvcm1hdC5tYXRjaChEQVRFX1RPS0VOUykubWFwKHN3YXBUb2tlbldpdGhWYWx1ZShkYXRlKSkuam9pbignJykgLy8gcmV0dXJuIGpvaW5lZCBzdHJpbmdcclxufSlcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ0RhdGUnKVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDkvMDMvMjAxNy5cclxuICovXHJcbmltcG9ydCBkaWZmRGF0ZSBmcm9tICcuL2RpZmZEYXRlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IHtcclxuICByZXR1cm4gZGlmZkRhdGUobmV3IERhdGUoKSkoZCkgPCAwXHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDE4LzAzLzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgaXNEYXRlIGZyb20gJy4vaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkICh4KSB7XHJcbiAgLy8gbm9pbnNwZWN0aW9uIEpTQ2hlY2tGdW5jdGlvblNpZ25hdHVyZXNcclxuICByZXR1cm4gaXNEYXRlKHgpICYmIGlzRmluaXRlKHgudmFsdWVPZigpKVxyXG59O1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gODY0MDAwMDAgLy8gMjQqNjAqNjAqMTAwMCA9IDg2NDAwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyAzNjAwMDAwIC8vIDYwKjYwKjEwMDAgPSAzNjAwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyA2MDAwMCAvLyA2MCoxMDAwID0gNjAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDEwMDBcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLy8gYXJyYXlcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlcXVhbHNBcnJheSB9IGZyb20gJ2FycmF5L2VxdWFscydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0FycmF5IH0gZnJvbSAnYXJyYXkvaXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9BcnJheSB9IGZyb20gJ2FycmF5L3RvJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuaW9uQXJyYXkgfSBmcm9tICdhcnJheS91bmlvbidcclxuXHJcbi8vIGJvb2xlYW5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0Jvb2xlYW4gfSBmcm9tICdib29sZWFuL2lzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEYgfSBmcm9tICdib29sZWFuL0YnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVCB9IGZyb20gJ2Jvb2xlYW4vVCdcclxuXHJcbi8vIG1vbmFkc1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGp1c3QgfSBmcm9tICdtb25hZHMvSnVzdCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXliZSB9IGZyb20gJ21vbmFkcy9NYXliZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBub3RoaW5nIH0gZnJvbSAnbW9uYWRzL05vdGhpbmcnXHJcblxyXG4vLyBudW1iZXJcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc051bWJlciB9IGZyb20gJ251bWJlci9pcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc05hbiB9IGZyb20gJ251bWJlci9pc05hbidcclxuXHJcbi8vIG9iamVjdFxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFsc09iamVjdCB9IGZyb20gJ29iamVjdC9lcXVhbHMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNPYmplY3QgfSBmcm9tICdvYmplY3QvaXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNFbXB0eU9iamVjdCB9IGZyb20gJ29iamVjdC9pc0VtcHR5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlT2JqZWN0IH0gZnJvbSAnb2JqZWN0L21lcmdlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG9taXRGcm9tT2JqZWN0IH0gZnJvbSAnb2JqZWN0L29taXQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzIH0gZnJvbSAnb2JqZWN0L2hhcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXNJbiB9IGZyb20gJ29iamVjdC9oYXNJbidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXlzIH0gZnJvbSAnb2JqZWN0L2tleXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5c0luIH0gZnJvbSAnb2JqZWN0L2tleXNJbidcclxuXHJcbi8vIHN0cmluZ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmNhdFN0cmluZyB9IGZyb20gJ3N0cmluZy9jb25jYXQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9ybWF0U3RyaW5nIH0gZnJvbSAnc3RyaW5nL2Zvcm1hdFN0cmluZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1N0cmluZyB9IGZyb20gJ3N0cmluZy9pcydcclxuXHJcbi8vIHV0aWxcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbmQgfSBmcm9tICd1dGlsL2FuZCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbGwgfSBmcm9tICd1dGlsL2FsbCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbnkgfSBmcm9tICd1dGlsL2FueSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbHdheXMgfSBmcm9tICd1dGlsL2Fsd2F5cydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjdXJyeSB9IGZyb20gJ3V0aWwvY3VycnknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcG9zZSB9IGZyb20gJ3V0aWwvY29tcG9zZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbXB0eSB9IGZyb20gJ3V0aWwvZW1wdHknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzIH0gZnJvbSAndXRpbC9lcXVhbHMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXhpc3RzIH0gZnJvbSAndXRpbC9leGlzdHMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWRlbnRpY2FsIH0gZnJvbSAndXRpbC9pZGVudGljYWwnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWRlbnRpdHkgfSBmcm9tICd1dGlsL2lkZW50aXR5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzIH0gZnJvbSAndXRpbC9pcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0VtcHR5IH0gZnJvbSAndXRpbC9pc0VtcHR5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vdCB9IGZyb20gJ3V0aWwvbm90J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG9yIH0gZnJvbSAndXRpbC9vcidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0cnV0aHkgfSBmcm9tICd1dGlsL3RydXRoeSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0eXBlIH0gZnJvbSAndXRpbC90eXBlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1heCB9IGZyb20gJ3V0aWwvbWF4J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hcCB9IGZyb20gJ3V0aWwvbWFwJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHppcFdpdGggfSBmcm9tICd1dGlsL3ppcFdpdGgnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgemlwIH0gZnJvbSAndXRpbC96aXAnXHJcblxyXG4vLyBkYXRlXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGlmZkRhdGUgfSBmcm9tICdkYXRlL2RpZmZEYXRlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvcm1hdERhdGVUaW1lIH0gZnJvbSAnZGF0ZS9mb3JtYXREYXRlVGltZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkYXRlSXMgfSBmcm9tICdkYXRlL2lzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRnV0dXJlRGF0ZSB9IGZyb20gJ2RhdGUvaXNGdXR1cmVEYXRlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzVmFsaWQgfSBmcm9tICdkYXRlL2lzVmFsaWQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9EYXkgfSBmcm9tICdkYXRlL3RvRGF5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvSG91ciB9IGZyb20gJ2RhdGUvdG9Ib3VyJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvTWludXRlcyB9IGZyb20gJ2RhdGUvdG9NaW51dGVzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvU2Vjb25kcyB9IGZyb20gJ2RhdGUvdG9TZWNvbmRzJ1xyXG4iLCIvKipcclxuICogTWFwcyBvdmVyIGEgTWFwIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxyXG4gKiBAcGFyYW0ge01hcH0gYVxyXG4gKiBAcmV0dXJuIHtNYXB9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBlbXB0eSBmcm9tICcuLi91dGlsL2VtcHR5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xyXG4gIGNvbnN0IHIgPSBlbXB0eShhKVxyXG4gIGEuZm9yRWFjaCgodiwgaywgbWFwKSA9PiB7XHJcbiAgICByLnNldChrLCBjYih2LCBrLCBtYXApKVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJcclxufSlcclxuIiwibGV0IEp1c3QgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgdGhpcy5fdmFsdWUgPSB2YWxcclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG5KdXN0LnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5KdXN0LnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEp1c3RcclxuIiwiaW1wb3J0IEp1c3QgZnJvbSAnLi9KdXN0J1xyXG5pbXBvcnQgTm90aGluZyBmcm9tICcuL05vdGhpbmcnXHJcblxyXG5sZXQgTWF5YmUgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgdGhpcy5fX3ZhbHVlID0gdmFsXHJcbn1cclxuXHJcbk1heWJlLm9mID0gZnVuY3Rpb24gKHZhbCkge1xyXG4gIGlmICh2YWwgaW5zdGFuY2VvZiBNYXliZSkgcmV0dXJuIHZhbFxyXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgTWF5YmUpIHtcclxuICAgIHRoaXMuX192YWx1ZSA9IHZhbFxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgcmV0dXJuIG5ldyBNYXliZSh2YWwpXHJcbn1cclxuXHJcbk1heWJlLnByb3RvdHlwZS5nZXRPckVsc2UgPSBmdW5jdGlvbiAobikge1xyXG4gIHJldHVybiB0aGlzLmlzTm90aGluZygpID8gbiA6IHRoaXMuX192YWx1ZVxyXG59XHJcblxyXG5NYXliZS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGYpIHtcclxuICBpZiAodGhpcy5pc05vdGhpbmcoKSkge1xyXG4gICAgcmV0dXJuIE1heWJlLm9mKG51bGwpXHJcbiAgfVxyXG4gIHJldHVybiBNYXliZS5vZihmKHRoaXMuX192YWx1ZSkpXHJcbn1cclxuXHJcbk1heWJlLnByb3RvdHlwZS5hcCA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgcmV0dXJuIG0ubWFwKHRoaXMuX192YWx1ZSlcclxufVxyXG5cclxuTWF5YmUucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gKHRoaXMuX192YWx1ZSA9PSBudWxsKVxyXG59XHJcblxyXG5NYXliZS5wcm90b3R5cGUuaXNKdXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiAhdGhpcy5pc05vdGhpbmcoKVxyXG59XHJcblxyXG5NYXliZS5wcm90b3R5cGUuTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IE5vdGhpbmcoKVxyXG59XHJcblxyXG5NYXliZS5wcm90b3R5cGUuSnVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IEp1c3QodGhpcy5fdmFsdWUpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1heWJlXHJcbiIsImxldCBOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xyXG59XHJcblxyXG5Ob3RoaW5nLnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuTm90aGluZy5wcm90b3R5cGUuaXNOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGhpbmdcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqL1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdOdW1iZXInKVxyXG4iLCIvKipcclxuICogaXNOYU5cclxuICogQ2hlY2tzIGlmIG51bWJlciBpcyBOQU5cclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICovXHJcbmltcG9ydCBpc051bWJlciBmcm9tICcuL2lzJ1xyXG5pbXBvcnQgYW5kIGZyb20gJy4uL3V0aWwvYW5kJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOYW4gKHgpIHtcclxuICByZXR1cm4gYW5kKGlzTnVtYmVyKHgpLCBpc05hTih4KSlcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIGVxdWFsc1xyXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuaW1wb3J0IGV4aXN0cyBmcm9tICcuLi91dGlsL2V4aXN0cydcclxuaW1wb3J0IG5vdCBmcm9tICcuLi91dGlsL25vdCdcclxuaW1wb3J0IGFuZCBmcm9tICcuLi91dGlsL2FuZCdcclxuaW1wb3J0IGlzRW1wdHlPYmplY3QgZnJvbSAnLi9pc0VtcHR5J1xyXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL3V0aWwvZXF1YWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHgsIHkpID0+IHtcclxuICBpZiAoYW5kKGlzRW1wdHlPYmplY3QoeCksIGlzRW1wdHlPYmplY3QoeSkpKSByZXR1cm4gdHJ1ZVxyXG5cclxuICBmb3IgKGxldCBrZXlYIGluIHgpIHtcclxuICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3BcclxuICAgIGlmIChub3QoZXF1YWxzKHhba2V5WF0sIHlba2V5WF0pKSkgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBrZXlZIGluIHkpIHtcclxuICAgIGlmIChub3QoZXhpc3RzKHhba2V5WV0pKSAmJiBleGlzdHMoeVtrZXlZXSkpIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWVcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eVxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIHtTdHJpbmd9IC0+IHtPYmplY3R9IC0+IEJvb2xlYW5cclxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaGFzIChwcm9wLCBvYmopIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eSwgZXZlbiBpZiBpdCBpcyBpbmhlcml0ZWRcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyB7U3RyaW5nfSAtPiB7T2JqZWN0fSAtPiBCb29sZWFuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGhhc0luIChwcm9wLCBvYmopIHtcclxuICByZXR1cm4gcHJvcCBpbiBvYmpcclxufSlcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqL1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdPYmplY3QnKVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtcHR5T2JqZWN0ICh4KSB7XHJcbiAgZm9yIChsZXQga2V5IGluIHgpIHtcclxuICAgIGlmICh4Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBvd24ga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyBhIC0+IFtiXVxyXG4gKiBAcGFyYW0ge09iamVjdH1cclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKE9iamVjdChhKSlcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgYWxsIHRoZSBrZXlzIG9mIGFuIG9iamVjdCBhcyBhbiBBcnJheVxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIGEgLT4gW2JdXHJcbiAqIEBwYXJhbSB7T2JqZWN0fVxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGtleXMgKGEpIHtcclxuICBjb25zdCByID0gW11cclxuICBmb3IgKGNvbnN0IGsgaW4gYSkge1xyXG4gICAgci5wdXNoKGspXHJcbiAgfVxyXG4gIHJldHVybiByXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBNYXBzIG92ZXIgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxyXG4gKiBAcGFyYW0ge09iamVjdH0gYVxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBlbXB0eSBmcm9tICcuLi91dGlsL2VtcHR5J1xyXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XHJcbiAgY29uc3QgayA9IGtleXMoYSlcclxuICBsZXQgaSA9IC0xXHJcbiAgY29uc3QgbCA9IGsubGVuZ3RoXHJcbiAgY29uc3QgciA9IGVtcHR5KGEpXHJcbiAgd2hpbGUgKCsraSA8IGwpIHtcclxuICAgIHJba1tpXV0gPSBjYihhW2tbaV1dKVxyXG4gIH1cclxuICByZXR1cm4gclxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogZXF1YWxzXHJcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4uL3V0aWwvaWRlbnRpY2FsJ1xyXG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vb2JqZWN0L2lzJ1xyXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi9hcnJheS9pcydcclxuaW1wb3J0IHVuaW9uIGZyb20gJy4uL2FycmF5L3VuaW9uJ1xyXG5cclxuY29uc3QgbWVyZ2UgPSBjdXJyeSgob2JqTCwgb2JqUikgPT4ge1xyXG4gIGxldCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpMKVxyXG5cclxuICBpZiAoaWRlbnRpY2FsKG9iakwsIG9ialIpKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb2JqTClcclxuICB9XHJcbiAgZm9yIChsZXQga2V5IGluIG9ialIpIHtcclxuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9ialIsIGtleSkpIHtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGNvbnN0IG9sZFZhbHVlID0gb2JqUltrZXldXHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IG9iakxba2V5XVxyXG5cclxuICAgIGlmIChpc09iamVjdChvbGRWYWx1ZSkgJiYgaXNPYmplY3QobmV3VmFsdWUpKSB7XHJcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2Uob2xkVmFsdWUsIG5ld1ZhbHVlKVxyXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG5ld1ZhbHVlKSkge1xyXG4gICAgICByZXN1bHRba2V5XSA9IHVuaW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdFtrZXldID0gb2xkVmFsdWUgLy8gVE9ETzogdGhpcyBpcyBhIHJlZmVyZW5jZSwgc2hvdWxkIGJlIGNsb25lXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lcmdlXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBlcXVhbHNcclxuICogY2hlY2tzIGZvciBlcXVhbGl0eVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgob2JqLCBuYW1lcykgPT4ge1xyXG4gIGxldCByZXN1bHQgPSB7fVxyXG5cclxuICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoa2V5KSA9PiB7XHJcbiAgICByZXR1cm4gbmFtZXMuaW5kZXhPZihrZXkpID09PSAtMVxyXG4gIH0pLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59KVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgY29uY2F0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciA9ICcsJykgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xyXG4gIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxyXG5cclxuICByZXR1cm4gYXJncy5qb2luKHNlcGFyYXRvcilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uY2F0XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHRvQXJyYXkgZnJvbSAnLi4vYXJyYXkvdG8nXHJcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0cikgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xyXG4gIGxldCBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpXHJcblxuICBhcmdzLnNoaWZ0KClcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoL3soXFxkKyl9L2csIChtYXRjaCwgaWR4KSA9PiB7XHJcbiAgICByZXR1cm4gbm90KGlzKCdVbmRlZmluZWQnLCBhcmdzW2lkeF0pKSA/IGFyZ3NbaWR4XSA6IG1hdGNoXHJcbiAgfSlcclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICovXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ1N0cmluZycpXHJcbiIsIi8qKlxyXG4gKiBNYXBzIG92ZXIgYSBzdHJpbmcgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBbYV0gLT4gW2FdXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcclxuICogQHJldHVybiB7SXRlcmFibGV9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XHJcbiAgbGV0IGkgPSAtMVxyXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxyXG4gIGxldCByID0gJydcclxuICB3aGlsZSAoKytpIDwgbCkge1xyXG4gICAgciArPSBjYihhLmNoYXJBdChpKSlcclxuICB9XHJcbiAgcmV0dXJuIHJcclxufSlcclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IFthXSAtPiBCb29sZWFuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFsbCAoY2IsIGEpIHtcclxuICBsZXQgcmVzID0gdHJ1ZVxyXG4gIGZvciAobGV0IGkgaW4gYSkge1xyXG4gICAgaWYgKCFjYihhW2ldKSkge1xyXG4gICAgICByZXMgPSBmYWxzZVxyXG4gICAgICBicmVha1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBwcm92aWRlZFxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIGEgLT4gKCogLT4gYSlcclxuICogQHBhcmFtIHsqfSBhXHJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxyXG4gKiovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWx3YXlzICh4KSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHggfVxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogeCwgeVxyXG4gKiBSZXR1cm5zIGJvb2xlYW5cclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYW5kICh4LCB5KSB7XHJcbiAgcmV0dXJuIHggJiYgeVxyXG59KVxyXG4iLCIvKipcclxuICogUmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uIG9mIHRoZSBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXHJcbiAqXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAc2luY2UgdjEuMC4yXHJcbiAqIEBzaWcgKFRPRE8pXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFueSAoY2IsIGEpIHtcclxuICBsZXQgcmVzID0gZmFsc2VcclxuICBmb3IgKGxldCBpIGluIGEpIHtcclxuICAgIGlmIChjYihhW2ldKSkge1xyXG4gICAgICByZXMgPSB0cnVlXHJcbiAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXNcclxufSlcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI1LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlICgpIHtcclxuICBsZXQgZnVucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpbml0ID0gZnVuc1tmdW5zLmxlbmd0aCAtIDFdXHJcbiAgICBsZXQgcmVzdWx0ID0gW2luaXQuYXBwbHkoaW5pdCwgYXJndW1lbnRzKV1cclxuICAgIGxldCBpID0gZnVucy5sZW5ndGggLSAyXHJcblxyXG4gICAgZm9yIChpOyBpID49IDA7IC0taSkge1xyXG4gICAgICBjb25zdCBmdW4gPSBmdW5zW2ldXHJcblxyXG4gICAgICByZXN1bHQgPSBbZnVuLmFwcGx5KGZ1biwgcmVzdWx0KV1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRbMF1cclxuICB9XHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNS8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkgKGZ1bikge1xyXG4gIGxldCBhcmdzbGVuID0gZnVuLmxlbmd0aFxyXG5cclxuICBpZiAoYXJnc2xlbiA9PT0gMCkge1xyXG4gICAgcmV0dXJuIGZ1blxyXG4gIH1cclxuICByZXR1cm4gY3JlYXRlUmVjdXJzZXIoW10pXHJcblxyXG4gIGZ1bmN0aW9uIHJlY3Vyc2UgKGFjYywgYXJncykge1xyXG4gICAgbGV0IF9hY2MgPSBhY2MuY29uY2F0KGFyZ3MpXHJcblxyXG4gICAgaWYgKF9hY2MubGVuZ3RoIDwgYXJnc2xlbikge1xyXG4gICAgICByZXR1cm4gY3JlYXRlUmVjdXJzZXIoX2FjYylcclxuICAgIH1cclxuICAgIHJldHVybiBmdW4uYXBwbHkodGhpcywgX2FjYylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlY3Vyc2VyIChhY2MpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxyXG5cclxuICAgICAgcmV0dXJuIHJlY3Vyc2UoYWNjLCBhcmdzKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogZW1wdHlcclxuICogUmV0dXJucyB0aGUgZW1wdHkgZXF1aXZhbGVudCBvZiB0aGUgZmlyc3QgYXJndW1lbnRcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbXB0eSAoeCkge1xyXG4gIHJldHVybiBuZXcgeC5jb25zdHJ1Y3RvcigpXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBlcXVhbHNcclxuICogY2hlY2tzIGZvciBlcXVhbGl0eVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXHJcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi9pZGVudGljYWwnXHJcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcclxuaW1wb3J0IG5vdCBmcm9tICcuL25vdCdcclxuaW1wb3J0IG9yIGZyb20gJy4vb3InXHJcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9vYmplY3QvaXMnXHJcbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzJ1xyXG5pbXBvcnQgaXNCb29sZWFuIGZyb20gJy4uL2Jvb2xlYW4vaXMnXHJcbmltcG9ydCBpc051bWJlciBmcm9tICcuLi9udW1iZXIvaXMnXHJcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuLi9zdHJpbmcvaXMnXHJcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi4vZGF0ZS9pcydcclxuaW1wb3J0IGVxdWFsc0FycmF5IGZyb20gJy4uL2FycmF5L2VxdWFscydcclxuaW1wb3J0IGVxdWFsc09iamVjdCBmcm9tICcuLi9vYmplY3QvZXF1YWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzICh4LCB5KSB7XHJcbiAgaWYgKGlkZW50aWNhbCh4LCB5KSkgcmV0dXJuIHRydWVcclxuXHJcbiAgaWYgKHR5cGUoeCkgIT09IHR5cGUoeSkpIHJldHVybiBmYWxzZVxyXG5cclxuICBpZiAob3Iobm90KGV4aXN0cyh4KSksIG5vdChleGlzdHMoeSkpKSkgcmV0dXJuIGZhbHNlXHJcblxyXG4gIGlmICh4LmNvbnN0cnVjdG9yICE9PSB5LmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgaWYgKGlzU3RyaW5nKHgpIHx8IGlzQm9vbGVhbih4KSB8fCBpc051bWJlcih4KSB8fCBpc0RhdGUoeCkpIHtcclxuICAgIHJldHVybiBpZGVudGljYWwoeC52YWx1ZU9mKCksIHkudmFsdWVPZigpKVxyXG4gIH1cclxuICBpZiAoaXNBcnJheSh4KSkge1xyXG4gICAgcmV0dXJuIGVxdWFsc0FycmF5KHgsIHkpXHJcbiAgfSBlbHNlIGlmIChpc09iamVjdCh4KSkge1xyXG4gICAgcmV0dXJuIGVxdWFsc09iamVjdCh4LCB5KVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufSlcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGlzdHMgKHgpIHtcclxuICByZXR1cm4gISh4ID09IG51bGwpXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBpZGVudGljYWxcclxuICogY2hlY2tzIGZvciBpZGVudGludGljYWwgaXRlbXNcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xyXG5pbXBvcnQgaXNOYW4gZnJvbSAnLi4vbnVtYmVyL2lzTmFuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaWRlbnRpY2FsICh4LCB5KSB7XHJcbiAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkge1xyXG4gICAgcmV0dXJuIDEgLyB4ID09PSAxIC8geVxyXG4gIH1cclxuICBpZiAoeCA9PT0geSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuICEhKGlzTmFuKHgpICYmIGlzTmFuKHkpKVxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogUmV0dXJucyB0aGUgdmFsdWUgc3VwcGxpZWQgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWRlbnRpdHkgKHgpIHtcclxuICByZXR1cm4geFxyXG59O1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBsZW4gZGllcmlja3hcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xyXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBpcyAoQ3RvciwgdmFsKSB7XHJcbiAgcmV0dXJuIHR5cGUodmFsKSA9PT0gQ3RvclxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogZW1wdHlcclxuICogUmV0dXJucyB0aGUgZW1wdHkgZXF1aXZhbGVudCBvZiB0aGUgZmlyc3QgYXJndW1lbnRcclxuICovXHJcbmltcG9ydCBlbXB0eSBmcm9tICcuL2VtcHR5J1xyXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xyXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4vZXF1YWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbXB0eSAoeCkge1xyXG4gIHJldHVybiBleGlzdHMoeCkgJiYgZXF1YWxzKHgsIGVtcHR5KHgpKVxyXG59O1xyXG4iLCIvKipcclxuICogTWFwcyBvdmVyIGFuIGFycmF5IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gYiAtPiBiXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcclxuICogQHJldHVybiB7SXRlcmFibGV9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBhcnJheU1hcCBmcm9tICcuLi9hcnJheS9tYXAnXHJcbmltcG9ydCBvYmplY3RNYXAgZnJvbSAnLi4vb2JqZWN0L21hcCdcclxuaW1wb3J0IG1hcE1hcCBmcm9tICcuLi9tYXAvbWFwJ1xyXG5pbXBvcnQgc3RyaW5nTWFwIGZyb20gJy4uL3N0cmluZy9tYXAnXHJcbmltcG9ydCB0eXBlIGZyb20gJy4uL3V0aWwvdHlwZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcclxuICBjb25zdCByID0ge1xyXG4gICAgJ09iamVjdCc6IG9iamVjdE1hcCxcclxuICAgICdTdHJpbmcnOiBzdHJpbmdNYXAsXHJcbiAgICAnQXJyYXknOiBhcnJheU1hcCxcclxuICAgICdNYXAnOiBtYXBNYXBcclxuICAgIC8vICdTZXQnOiBzZXRNYXBcclxuICB9XHJcbiAgcmV0dXJuIHJbdHlwZShhKV0oY2IsIGEpXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBsYXJnZXN0IG9mIHRoZSAyIGFyZ3VtZW50cyBwcm92aWRlZFxyXG4gKlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHNpbmNlIHYxLjAuMlxyXG4gKiBAc2lnIE9yZCBhID0+IGEgLT4gYSAtPiBhXHJcbiAqIEBwYXJhbSB7Kn0gYVxyXG4gKiBAcGFyYW0geyp9IGJcclxuICogQHJldHVybiB7Kn1cclxuICoqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1heCAoYSwgYikge1xyXG4gIHJldHVybiBiID4gYSA/IGIgOiBhXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm90ICh4KSB7XHJcbiAgcmV0dXJuICF4XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBvclxyXG4gKiBSZXR1cm5zIHRydWUgaWYgb25lIG9yIHRoZSBvdGhlciBpcyB0cnVlXHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9yICh4LCB5KSB7XHJcbiAgcmV0dXJuIHggfHwgeVxyXG59KVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDYvMDIvMjAxNy5cclxuICovXHJcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cnV0aHkgKHgpIHtcclxuICByZXR1cm4gKHggIT09IGZhbHNlKSAmJiBleGlzdHMoeClcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0eXBlICh4KSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KS5zbGljZSg4LCAtMSlcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIHppcFxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcbmltcG9ydCB6aXBXaXRoIGZyb20gJy4vemlwV2l0aCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHppcCAoYSwgYikge1xyXG4gIHJldHVybiB6aXBXaXRoKGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiBbeCwgeV0gfSwgYSwgYilcclxufSlcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIHppcFdpdGhcclxuICpcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gemlwV2l0aCAoY2IsIGEsIGIpIHtcclxuICBjb25zdCBhcnIgPSBbXVxyXG4gIGNvbnN0IGxlbiA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aClcclxuICBsZXQgaSA9IDBcclxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIGFyci5wdXNoKGNiKGFbaV0sIGJbaV0pKVxyXG4gIH1cclxuICByZXR1cm4gYXJyXHJcbn0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=