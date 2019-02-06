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

/***/ "./src/array/empty.js":
/*!****************************!*\
  !*** ./src/array/empty.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = is;

var _is = _interopRequireDefault(__webpack_require__(/*! ./is */ "./src/array/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dierickx.len on 01/04/2017.
 */
function is(x) {
  return (0, _is.default)(x) ? [] : void 0;
}

;
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
Object.defineProperty(exports, "emptyArray", {
  enumerable: true,
  get: function get() {
    return _empty.default;
  }
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
Object.defineProperty(exports, "emptyObject", {
  enumerable: true,
  get: function get() {
    return _empty2.default;
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
    return _empty3.default;
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

var _empty = _interopRequireDefault(__webpack_require__(/*! array/empty */ "./src/array/empty.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! array/equals */ "./src/array/equals.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! array/is */ "./src/array/is.js"));

var _to = _interopRequireDefault(__webpack_require__(/*! array/to */ "./src/array/to.js"));

var _union = _interopRequireDefault(__webpack_require__(/*! array/union */ "./src/array/union.js"));

var _is2 = _interopRequireDefault(__webpack_require__(/*! boolean/is */ "./src/boolean/is.js"));

var _Just = _interopRequireDefault(__webpack_require__(/*! monads/Just */ "./src/monads/Just.js"));

var _Maybe = _interopRequireDefault(__webpack_require__(/*! monads/Maybe */ "./src/monads/Maybe.js"));

var _Nothing = _interopRequireDefault(__webpack_require__(/*! monads/Nothing */ "./src/monads/Nothing.js"));

var _is3 = _interopRequireDefault(__webpack_require__(/*! number/is */ "./src/number/is.js"));

var _isNan = _interopRequireDefault(__webpack_require__(/*! number/isNan */ "./src/number/isNan.js"));

var _empty2 = _interopRequireDefault(__webpack_require__(/*! object/empty */ "./src/object/empty.js"));

var _equals2 = _interopRequireDefault(__webpack_require__(/*! object/equals */ "./src/object/equals.js"));

var _is4 = _interopRequireDefault(__webpack_require__(/*! object/is */ "./src/object/is.js"));

var _isEmpty = _interopRequireDefault(__webpack_require__(/*! object/isEmpty */ "./src/object/isEmpty.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! object/merge */ "./src/object/merge.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! object/omit */ "./src/object/omit.js"));

var _concat = _interopRequireDefault(__webpack_require__(/*! string/concat */ "./src/string/concat.js"));

var _formatString = _interopRequireDefault(__webpack_require__(/*! string/formatString */ "./src/string/formatString.js"));

var _is5 = _interopRequireDefault(__webpack_require__(/*! string/is */ "./src/string/is.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! util/and */ "./src/util/and.js"));

var _curry = _interopRequireDefault(__webpack_require__(/*! util/curry */ "./src/util/curry.js"));

var _compose = _interopRequireDefault(__webpack_require__(/*! util/compose */ "./src/util/compose.js"));

var _empty3 = _interopRequireDefault(__webpack_require__(/*! util/empty */ "./src/util/empty.js"));

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

/***/ "./src/object/empty.js":
/*!*****************************!*\
  !*** ./src/object/empty.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = emptyObject;

var _is = _interopRequireDefault(__webpack_require__(/*! ./is */ "./src/object/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dierickx.len on 01/04/2017.
 */
function emptyObject(x) {
  return (0, _is.default)(x) ? {} : void 0;
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

var _is = _interopRequireDefault(__webpack_require__(/*! ../array/is */ "./src/array/is.js"));

var _is2 = _interopRequireDefault(__webpack_require__(/*! ../object/is */ "./src/object/is.js"));

var _is3 = _interopRequireDefault(__webpack_require__(/*! ../string/is */ "./src/string/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Len Dierickx
 * empty
 * Returns the empty equivalent of the first argument
 */
function empty(x) {
  if ((0, _is.default)(x)) {
    return [];
  }

  if ((0, _is3.default)(x)) {
    return '';
  }

  if ((0, _is2.default)(x)) {
    return {};
  }

  return void 0;
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

var _is5 = _interopRequireDefault(__webpack_require__(/*! ../date/is */ "./src/date/is.js"));

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

  if ((0, _is3.default)(x) || (0, _is4.default)(x) || (0, _is5.default)(x)) {
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4uanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1bi5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L3RvLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS91bmlvbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvY29uc3RhbnRzL01PTlRIUy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvY29uc3RhbnRzL1dFRUtEQVlTLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2RpZmZEYXRlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2Zvcm1hdERhdGVUaW1lLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2lzRnV0dXJlRGF0ZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pc1ZhbGlkLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvRGF5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvSG91ci5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b01pbnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9TZWNvbmRzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbW9uYWRzL0p1c3QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9NYXliZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbW9uYWRzL05vdGhpbmcuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL251bWJlci9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL2lzTmFuLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9tZXJnZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L29taXQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9mb3JtYXRTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbmQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9jdXJyeS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9lbXB0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZXhpc3RzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lkZW50aWNhbC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pc0VtcHR5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL21heC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9ub3QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvb3IuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvdHJ1dGh5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3R5cGUuanMiXSwibmFtZXMiOlsiaXMiLCJ4IiwiZXF1YWxzQXJyYXkiLCJ5IiwibGVuZ3RoIiwiaSIsInRvQXJyYXkiLCJBcnJheSIsImFwcGx5IiwidW5pb25BcnJheSIsImFycmF5TCIsImFycmF5UiIsImZyb20iLCJTZXQiLCJjb25jYXQiLCJNT05USFMiLCJXRUVLREFZUyIsInN0YXJ0IiwiZW5kIiwiRGF0ZSIsImdldFRpbWUiLCJnZXRXZWVrIiwiZCIsIlVUQyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwic2V0VVRDRGF0ZSIsImdldFVUQ0RhdGUiLCJnZXRVVENEYXkiLCJ5ZWFyU3RhcnQiLCJnZXRVVENGdWxsWWVhciIsIndlZWtObyIsIk1hdGgiLCJjZWlsIiwiWkVST1MiLCJsYXN0TiIsIm4iLCJzdHIiLCJzdWJzdHJpbmciLCJmaXJzdE4iLCJmaWxsIiwiZGlnaXRzIiwiREFURV9UT0tFTlMiLCJtb2RDZWlsaW5nIiwibW9kIiwidmFsIiwidG9rZW5zIiwiWVlZWSIsIllZIiwiTU1NTSIsIk1NTSIsIk1NIiwiTSIsInciLCJ3dyIsIkREIiwiRCIsImRkZGQiLCJnZXREYXkiLCJkZGQiLCJkZCIsIkhIIiwiZ2V0SG91cnMiLCJIIiwiaGgiLCJoIiwibW0iLCJnZXRNaW51dGVzIiwibSIsInNzIiwiZ2V0U2Vjb25kcyIsInMiLCJBIiwiYSIsIlNTUyIsImdldE1pbGxpc2Vjb25kcyIsIlNTIiwiUyIsIlEiLCJzd2FwVG9rZW5XaXRoVmFsdWUiLCJkYXRlIiwidG9rZW4iLCJmb3JtYXQiLCJtYXRjaCIsIm1hcCIsImpvaW4iLCJpc1ZhbGlkIiwiaXNGaW5pdGUiLCJ2YWx1ZU9mIiwiSnVzdCIsIl92YWx1ZSIsInByb3RvdHlwZSIsImlzSnVzdCIsImlzTm90aGluZyIsIk1heWJlIiwiX192YWx1ZSIsIm9mIiwiZ2V0T3JFbHNlIiwiZiIsImFwIiwiTm90aGluZyIsImlzTmFuIiwiaXNOYU4iLCJlbXB0eU9iamVjdCIsImtleVgiLCJrZXlZIiwiaXNFbXB0eU9iamVjdCIsImtleSIsImhhc093blByb3BlcnR5IiwibWVyZ2UiLCJvYmpMIiwib2JqUiIsInJlc3VsdCIsIk9iamVjdCIsImFzc2lnbiIsImNhbGwiLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwib2JqIiwibmFtZXMiLCJrZXlzIiwiZmlsdGVyIiwiaW5kZXhPZiIsImZvckVhY2giLCJzZXBhcmF0b3IiLCJhcmdzIiwic2xpY2UiLCJhcmd1bWVudHMiLCJzaGlmdCIsInJlcGxhY2UiLCJpZHgiLCJhbmQiLCJjb21wb3NlIiwiZnVucyIsImluaXQiLCJmdW4iLCJjdXJyeSIsImFyZ3NsZW4iLCJjcmVhdGVSZWN1cnNlciIsInJlY3Vyc2UiLCJhY2MiLCJfYWNjIiwiZW1wdHkiLCJlcXVhbHMiLCJjb25zdHJ1Y3RvciIsImV4aXN0cyIsImlkZW50aWNhbCIsImlkZW50aXR5IiwiQ3RvciIsImlzRW1wdHkiLCJtYXgiLCJiIiwibm90Iiwib3IiLCJ0cnV0aHkiLCJ0eXBlIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FB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K0JuSCxDQUEvQixFQUFrQzhILEtBQWxDLENBQXdDLENBQXhDLEVBQTJDLENBQUMsQ0FBNUMsQ0FBUDtBQUNEOztBQUFBIiwiZmlsZSI6ImZ1bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuLmpzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bi5qc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW4uanNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpcyAoeCkge1xyXG4gIHJldHVybiBpc0FycmF5KHgpID8gW10gOiB2b2lkIDBcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIGVxdWFsc1xyXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSdcclxuaW1wb3J0IG5vdCBmcm9tICcuLi91dGlsL25vdCdcclxuaW1wb3J0IGVxdWFscyBmcm9tICcuLi91dGlsL2VxdWFscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFsc0FycmF5ICh4LCB5KSB7XHJcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKG5vdChlcXVhbHMoeFtpXSwgeVtpXSkpKSByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufSlcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdBcnJheScpXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAxOC8wMy8yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvQXJyYXkgKHgpIHtcclxuICByZXR1cm4geC5sZW5ndGggPT09IDEgPyBbeFswXV0gOiBBcnJheS5hcHBseShudWxsLCB4KVxyXG59O1xyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogdW5pb25cclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gdW5pb25BcnJheSAoYXJyYXlMLCBhcnJheVIpIHtcclxuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycmF5TC5jb25jYXQoYXJyYXlSKSkpXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpcygnQm9vbGVhbicpXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAxOC8wMy8yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBNT05USFMgPSBbXHJcbiAgJ0phbnVhcnknLFxyXG4gICdGZWJydWFyeScsXHJcbiAgJ01hcmNoJyxcclxuICAnQXByaWwnLFxyXG4gICdNYXknLFxyXG4gICdKdW5lJyxcclxuICAnSnVseScsXHJcbiAgJ0F1Z3VzdCcsXHJcbiAgJ1NlcHRlbWJlcicsXHJcbiAgJ09jdG9iZXInLFxyXG4gICdOb3ZlbWJlcicsXHJcbiAgJ0RlY2VtYmVyJ1xyXG5dXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAxOC8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFdFRUtEQVlTID0gW1xyXG4gICdTdW5kYXknLFxyXG4gICdNb25kYXknLFxyXG4gICdUdWVzZGF5JyxcclxuICAnV2VkbmVzZGF5JyxcclxuICAnVGh1cnNkYXknLFxyXG4gICdGcmlkYXknLFxyXG4gICdTYXR1cmRheSdcclxuXVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHN0YXJ0LCBlbmQpID0+IHtcclxuICByZXR1cm4gKG5ldyBEYXRlKHN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShlbmQpLmdldFRpbWUoKSlcclxufSlcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjAvMDEvMjAxNy5cclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQgaXNWYWxpZERhdGUgZnJvbSAnLi9pc1ZhbGlkJ1xyXG5pbXBvcnQgeyBXRUVLREFZUyB9IGZyb20gJy4uL2NvbnN0YW50cy9XRUVLREFZUydcclxuaW1wb3J0IHsgTU9OVEhTIH0gZnJvbSAnLi4vY29uc3RhbnRzL01PTlRIUydcclxuXHJcbmNvbnN0IGdldFdlZWsgPSAoZCkgPT4ge1xyXG4gIC8vIENvcHkgZGF0ZSBzbyBkb24ndCBtb2RpZnkgb3JpZ2luYWxcclxuICBkID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIGQuZ2V0RGF0ZSgpKSlcclxuICAvLyBTZXQgdG8gbmVhcmVzdCBUaHVyc2RheTogY3VycmVudCBkYXRlICsgNCAtIGN1cnJlbnQgZGF5IG51bWJlclxyXG4gIC8vIE1ha2UgU3VuZGF5J3MgZGF5IG51bWJlciA3XHJcbiAgZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpICsgNCAtIChkLmdldFVUQ0RheSgpIHx8IDcpKVxyXG4gIC8vIEdldCBmaXJzdCBkYXkgb2YgeWVhclxyXG4gIGxldCB5ZWFyU3RhcnQgPSBuZXcgRGF0ZShEYXRlLlVUQyhkLmdldFVUQ0Z1bGxZZWFyKCksIDAsIDEpKVxyXG5cclxuICAvLyBDYWxjdWxhdGUgZnVsbCB3ZWVrcyB0byBuZWFyZXN0IFRodXJzZGF5XHJcbiAgbGV0IHdlZWtObyA9IE1hdGguY2VpbCgoKChkIC0geWVhclN0YXJ0KSAvIDg2NDAwMDAwKSArIDEpIC8gNylcclxuXHJcbiAgLy8gUmV0dXJuIGFycmF5IG9mIHllYXIgYW5kIHdlZWsgbnVtYmVyXHJcbiAgcmV0dXJuIFtkLmdldFVUQ0Z1bGxZZWFyKCksIHdlZWtOb11cclxufVxyXG5cclxuLy8gdXRpbGl0eSBmdW5jdGlvbnMgZm9yIHRoZSBkYXRlIGZvcm1hdHRpbmdcclxuY29uc3QgWkVST1MgPSAnMDAwMDAwMDAnXHJcbmNvbnN0IGxhc3ROID0gY3VycnkoKG4sIHN0cikgPT4gc3RyLnN1YnN0cmluZyhzdHIubGVuZ3RoIC0gbiwgc3RyLmxlbmd0aCkpXHJcbmNvbnN0IGZpcnN0TiA9IGN1cnJ5KChuLCBzdHIpID0+IHN0ci5zdWJzdHJpbmcoMCwgbikpXHJcbmNvbnN0IGZpbGwgPSBjdXJyeSgoZGlnaXRzLCBuKSA9PiBsYXN0TihkaWdpdHMsIFpFUk9TICsgbikpXHJcblxyXG4vLyBkYXRlL3RpbWUgcmVnZXhcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXHJcbmNvbnN0IERBVEVfVE9LRU5TID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFF8WVlZWVlZfFlZWVlZfFlZWVl8WVl8Z2coZ2dnPyk/fEdHKEdHRz8pP3xlfEV8YXxBfGhoP3xISD98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZ1xyXG5cclxuY29uc3QgbW9kQ2VpbGluZyA9IChtb2QsIHZhbCkgPT4gdmFsICUgbW9kIHx8IG1vZFxyXG5cclxuLy8gdG9rZW5zIG1hcCB0byBnZXQgcGFydHMgb2YgdGhlIGRhdGUgL3RpbWVcclxuY29uc3QgdG9rZW5zID0ge1xyXG4gIFlZWVk6IGQgPT4gZmlsbCg0LCBkLmdldEZ1bGxZZWFyKCkpLFxyXG4gIFlZOiBkID0+IGxhc3ROKDIsIGZpbGwoNCwgZC5nZXRGdWxsWWVhcigpKSksXHJcbiAgTU1NTTogZCA9PiBNT05USFNbZC5nZXRNb250aCgpXSxcclxuICBNTU06IGQgPT4gZmlyc3ROKDMsIE1PTlRIU1tkLmdldE1vbnRoKCldKSxcclxuICBNTTogZCA9PiBmaWxsKDIsIGQuZ2V0TW9udGgoKSArIDEpLFxyXG4gIE06IGQgPT4gZC5nZXRNb250aCgpICsgMSxcclxuICB3OiBkID0+IGdldFdlZWsoZCksXHJcbiAgd3c6IGQgPT4gZmlsbCgyLCBnZXRXZWVrKGQpKSxcclxuICBERDogZCA9PiBmaWxsKDIsIGQuZ2V0RGF0ZSgpKSxcclxuICBEOiBkID0+IGQuZ2V0RGF0ZSgpLFxyXG4gIGRkZGQ6IGQgPT4gV0VFS0RBWVNbZC5nZXREYXkoKV0sXHJcbiAgZGRkOiBkID0+IGZpcnN0TigzLCBXRUVLREFZU1tkLmdldERheSgpXSksXHJcbiAgZGQ6IGQgPT4gZmlyc3ROKDIsIFdFRUtEQVlTW2QuZ2V0RGF5KCldKSxcclxuICBkOiBkID0+IGQuZ2V0RGF5KCksXHJcbiAgSEg6IGQgPT4gZmlsbCgyLCBkLmdldEhvdXJzKCkpLFxyXG4gIEg6IGQgPT4gZC5nZXRIb3VycygpLFxyXG4gIGhoOiBkID0+IGZpbGwoMiwgbW9kQ2VpbGluZygxMiwgZC5nZXRIb3VycygpKSksXHJcbiAgaDogZCA9PiBtb2RDZWlsaW5nKDEyLCBkLmdldEhvdXJzKCkpLFxyXG4gIG1tOiBkID0+IGZpbGwoMiwgZC5nZXRNaW51dGVzKCkpLFxyXG4gIG06IGQgPT4gZC5nZXRNaW51dGVzKCksXHJcbiAgc3M6IGQgPT4gZmlsbCgyLCBkLmdldFNlY29uZHMoKSksXHJcbiAgczogZCA9PiBkLmdldFNlY29uZHMoKSxcclxuICBBOiBkID0+IGQuZ2V0SG91cnMoKSA+IDExID8gJ1BNJyA6ICdBTScsXHJcbiAgYTogZCA9PiBkLmdldEhvdXJzKCkgPiAxMSA/ICdwbScgOiAnYW0nLFxyXG4gIFNTUzogZCA9PiBmaWxsKDMsIGQuZ2V0TWlsbGlzZWNvbmRzKCkpLFxyXG4gIFNTOiBkID0+IGZpcnN0TigyLCBmaWxsKDMsIGQuZ2V0TWlsbGlzZWNvbmRzKCkpKSxcclxuICBTOiBkID0+IGZpcnN0TigxLCBmaWxsKDMsIGQuZ2V0TWlsbGlzZWNvbmRzKCkpKSxcclxuICBROiBkID0+IE1hdGguY2VpbCgoZC5nZXRNb250aCgpICsgMSkgLyAzKVxyXG59XHJcblxyXG4vLyBtYXAgdGhpcyBmdW5jdGlvbiB0byBnZXQgdGhlIGFjdHVhbCB0aW1lL2RhdGUgdmFsdWUgZm9yIGVhY2ggdG9rZW5cclxuY29uc3Qgc3dhcFRva2VuV2l0aFZhbHVlID0gY3VycnkoKGRhdGUsIHRva2VuKSA9PiB7XHJcbiAgcmV0dXJuIHRva2Vuc1t0b2tlbl0gPyB0b2tlbnNbdG9rZW5dKGRhdGUpIDogdG9rZW5cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChmb3JtYXQsIGRhdGUpID0+IHtcclxuICAvLyBjaGVjayBmb3IgdmFsaWQgZGF0ZVxyXG4gIGlmICghaXNWYWxpZERhdGUoZGF0ZSkpIHJldHVybiAnSW52YWxpZCBEYXRlJyAvLyByZXR1cm4gc3RyaW5nXHJcbiAgcmV0dXJuIGZvcm1hdC5tYXRjaChEQVRFX1RPS0VOUykubWFwKHN3YXBUb2tlbldpdGhWYWx1ZShkYXRlKSkuam9pbignJykgLy8gcmV0dXJuIGpvaW5lZCBzdHJpbmdcclxufSlcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ0RhdGUnKVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDkvMDMvMjAxNy5cclxuICovXHJcbmltcG9ydCBkaWZmRGF0ZSBmcm9tICcuL2RpZmZEYXRlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IHtcclxuICByZXR1cm4gZGlmZkRhdGUobmV3IERhdGUoKSkoZCkgPCAwXHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDE4LzAzLzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgaXNEYXRlIGZyb20gJy4vaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkICh4KSB7XHJcbiAgLy8gbm9pbnNwZWN0aW9uIEpTQ2hlY2tGdW5jdGlvblNpZ25hdHVyZXNcclxuICByZXR1cm4gaXNEYXRlKHgpICYmIGlzRmluaXRlKHgudmFsdWVPZigpKVxyXG59O1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gODY0MDAwMDAgLy8gMjQqNjAqNjAqMTAwMCA9IDg2NDAwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyAzNjAwMDAwIC8vIDYwKjYwKjEwMDAgPSAzNjAwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyA2MDAwMCAvLyA2MCoxMDAwID0gNjAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDEwMDBcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLy8gYXJyYXlcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbXB0eUFycmF5IH0gZnJvbSAnYXJyYXkvZW1wdHknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzQXJyYXkgfSBmcm9tICdhcnJheS9lcXVhbHMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNBcnJheSB9IGZyb20gJ2FycmF5L2lzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvQXJyYXkgfSBmcm9tICdhcnJheS90bydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmlvbkFycmF5IH0gZnJvbSAnYXJyYXkvdW5pb24nXHJcblxyXG4vLyBib29sZWFuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNCb29sZWFuIH0gZnJvbSAnYm9vbGVhbi9pcydcclxuXHJcbi8vIG1vbmFkc1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGp1c3QgfSBmcm9tICdtb25hZHMvSnVzdCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXliZSB9IGZyb20gJ21vbmFkcy9NYXliZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBub3RoaW5nIH0gZnJvbSAnbW9uYWRzL05vdGhpbmcnXHJcblxyXG4vLyBudW1iZXJcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc051bWJlciB9IGZyb20gJ251bWJlci9pcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc05hbiB9IGZyb20gJ251bWJlci9pc05hbidcclxuXHJcbi8vIG9iamVjdFxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVtcHR5T2JqZWN0IH0gZnJvbSAnb2JqZWN0L2VtcHR5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFsc09iamVjdCB9IGZyb20gJ29iamVjdC9lcXVhbHMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNPYmplY3QgfSBmcm9tICdvYmplY3QvaXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNFbXB0eU9iamVjdCB9IGZyb20gJ29iamVjdC9pc0VtcHR5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlT2JqZWN0IH0gZnJvbSAnb2JqZWN0L21lcmdlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG9taXRGcm9tT2JqZWN0IH0gZnJvbSAnb2JqZWN0L29taXQnXHJcblxyXG4vLyBzdHJpbmdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb25jYXRTdHJpbmcgfSBmcm9tICdzdHJpbmcvY29uY2F0J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvcm1hdFN0cmluZyB9IGZyb20gJ3N0cmluZy9mb3JtYXRTdHJpbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNTdHJpbmcgfSBmcm9tICdzdHJpbmcvaXMnXHJcblxyXG4vLyB1dGlsXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW5kIH0gZnJvbSAndXRpbC9hbmQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3VycnkgfSBmcm9tICd1dGlsL2N1cnJ5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBvc2UgfSBmcm9tICd1dGlsL2NvbXBvc2UnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZW1wdHkgfSBmcm9tICd1dGlsL2VtcHR5J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFscyB9IGZyb20gJ3V0aWwvZXF1YWxzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGV4aXN0cyB9IGZyb20gJ3V0aWwvZXhpc3RzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlkZW50aWNhbCB9IGZyb20gJ3V0aWwvaWRlbnRpY2FsJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlkZW50aXR5IH0gZnJvbSAndXRpbC9pZGVudGl0eSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpcyB9IGZyb20gJ3V0aWwvaXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNFbXB0eSB9IGZyb20gJ3V0aWwvaXNFbXB0eSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBub3QgfSBmcm9tICd1dGlsL25vdCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBvciB9IGZyb20gJ3V0aWwvb3InXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHJ1dGh5IH0gZnJvbSAndXRpbC90cnV0aHknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHlwZSB9IGZyb20gJ3V0aWwvdHlwZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXggfSBmcm9tICd1dGlsL21heCdcclxuXHJcbi8vIGRhdGVcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaWZmRGF0ZSB9IGZyb20gJ2RhdGUvZGlmZkRhdGUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9ybWF0RGF0ZVRpbWUgfSBmcm9tICdkYXRlL2Zvcm1hdERhdGVUaW1lJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRhdGVJcyB9IGZyb20gJ2RhdGUvaXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNGdXR1cmVEYXRlIH0gZnJvbSAnZGF0ZS9pc0Z1dHVyZURhdGUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNWYWxpZCB9IGZyb20gJ2RhdGUvaXNWYWxpZCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0RheSB9IGZyb20gJ2RhdGUvdG9EYXknXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9Ib3VyIH0gZnJvbSAnZGF0ZS90b0hvdXInXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9NaW51dGVzIH0gZnJvbSAnZGF0ZS90b01pbnV0ZXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9TZWNvbmRzIH0gZnJvbSAnZGF0ZS90b1NlY29uZHMnXHJcbiIsImxldCBKdXN0ID0gZnVuY3Rpb24gKHZhbCkge1xyXG4gIHRoaXMuX3ZhbHVlID0gdmFsXHJcbiAgcmV0dXJuIHRoaXNcclxufVxyXG5cclxuSnVzdC5wcm90b3R5cGUuaXNKdXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuSnVzdC5wcm90b3R5cGUuaXNOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKdXN0XHJcbiIsImltcG9ydCBKdXN0IGZyb20gJy4vSnVzdCdcclxuaW1wb3J0IE5vdGhpbmcgZnJvbSAnLi9Ob3RoaW5nJ1xyXG5cclxubGV0IE1heWJlID0gZnVuY3Rpb24gKHZhbCkge1xyXG4gIHRoaXMuX192YWx1ZSA9IHZhbFxyXG59XHJcblxyXG5NYXliZS5vZiA9IGZ1bmN0aW9uICh2YWwpIHtcclxuICBpZiAodmFsIGluc3RhbmNlb2YgTWF5YmUpIHJldHVybiB2YWxcclxuICBpZiAodGhpcyBpbnN0YW5jZW9mIE1heWJlKSB7XHJcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWxcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIHJldHVybiBuZXcgTWF5YmUodmFsKVxyXG59XHJcblxyXG5NYXliZS5wcm90b3R5cGUuZ2V0T3JFbHNlID0gZnVuY3Rpb24gKG4pIHtcclxuICByZXR1cm4gdGhpcy5pc05vdGhpbmcoKSA/IG4gOiB0aGlzLl9fdmFsdWVcclxufVxyXG5cclxuTWF5YmUucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XHJcbiAgaWYgKHRoaXMuaXNOb3RoaW5nKCkpIHtcclxuICAgIHJldHVybiBNYXliZS5vZihudWxsKVxyXG4gIH1cclxuICByZXR1cm4gTWF5YmUub2YoZih0aGlzLl9fdmFsdWUpKVxyXG59XHJcblxyXG5NYXliZS5wcm90b3R5cGUuYXAgPSBmdW5jdGlvbiAobSkge1xyXG4gIHJldHVybiBtLm1hcCh0aGlzLl9fdmFsdWUpXHJcbn1cclxuXHJcbk1heWJlLnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuICh0aGlzLl9fdmFsdWUgPT0gbnVsbClcclxufVxyXG5cclxuTWF5YmUucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gIXRoaXMuaXNOb3RoaW5nKClcclxufVxyXG5cclxuTWF5YmUucHJvdG90eXBlLk5vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBOb3RoaW5nKClcclxufVxyXG5cclxuTWF5YmUucHJvdG90eXBlLkp1c3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBKdXN0KHRoaXMuX3ZhbHVlKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXliZVxyXG4iLCJsZXQgTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcclxufVxyXG5cclxuTm90aGluZy5wcm90b3R5cGUuaXNKdXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcbk5vdGhpbmcucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RoaW5nXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKi9cclxuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpcygnTnVtYmVyJylcclxuIiwiLyoqXHJcbiAqIGlzTmFOXHJcbiAqIENoZWNrcyBpZiBudW1iZXIgaXMgTkFOXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqL1xyXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9pcydcclxuaW1wb3J0IGFuZCBmcm9tICcuLi91dGlsL2FuZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTmFuICh4KSB7XHJcbiAgcmV0dXJuIGFuZChpc051bWJlcih4KSwgaXNOYU4oeCkpXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbXB0eU9iamVjdCAoeCkge1xyXG4gIHJldHVybiBpc09iamVjdCh4KSA/IHt9IDogdm9pZCAwXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBlcXVhbHNcclxuICogY2hlY2tzIGZvciBlcXVhbGl0eVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcbmltcG9ydCBleGlzdHMgZnJvbSAnLi4vdXRpbC9leGlzdHMnXHJcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXHJcbmltcG9ydCBhbmQgZnJvbSAnLi4vdXRpbC9hbmQnXHJcbmltcG9ydCBpc0VtcHR5T2JqZWN0IGZyb20gJy4vaXNFbXB0eSdcclxuaW1wb3J0IGVxdWFscyBmcm9tICcuLi91dGlsL2VxdWFscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KCh4LCB5KSA9PiB7XHJcbiAgaWYgKGFuZChpc0VtcHR5T2JqZWN0KHgpLCBpc0VtcHR5T2JqZWN0KHkpKSkgcmV0dXJuIHRydWVcclxuXHJcbiAgZm9yIChsZXQga2V5WCBpbiB4KSB7XHJcbiAgICAvLyBub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXHJcbiAgICBpZiAobm90KGVxdWFscyh4W2tleVhdLCB5W2tleVhdKSkpIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQga2V5WSBpbiB5KSB7XHJcbiAgICBpZiAobm90KGV4aXN0cyh4W2tleVldKSkgJiYgZXhpc3RzKHlba2V5WV0pKSByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlXHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKi9cclxuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpcygnT2JqZWN0JylcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbXB0eU9iamVjdCAoeCkge1xyXG4gIGZvciAobGV0IGtleSBpbiB4KSB7XHJcbiAgICBpZiAoeC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZVxyXG59O1xyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogZXF1YWxzXHJcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5J1xyXG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4uL3V0aWwvaWRlbnRpY2FsJ1xyXG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vb2JqZWN0L2lzJ1xyXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi9hcnJheS9pcydcclxuaW1wb3J0IHVuaW9uIGZyb20gJy4uL2FycmF5L3VuaW9uJ1xyXG5cclxuY29uc3QgbWVyZ2UgPSBjdXJyeSgob2JqTCwgb2JqUikgPT4ge1xyXG4gIGxldCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpMKVxyXG5cclxuICBpZiAoaWRlbnRpY2FsKG9iakwsIG9ialIpKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb2JqTClcclxuICB9XHJcbiAgZm9yIChsZXQga2V5IGluIG9ialIpIHtcclxuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9ialIsIGtleSkpIHtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGNvbnN0IG9sZFZhbHVlID0gb2JqUltrZXldXHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IG9iakxba2V5XVxyXG5cclxuICAgIGlmIChpc09iamVjdChvbGRWYWx1ZSkgJiYgaXNPYmplY3QobmV3VmFsdWUpKSB7XHJcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2Uob2xkVmFsdWUsIG5ld1ZhbHVlKVxyXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG5ld1ZhbHVlKSkge1xyXG4gICAgICByZXN1bHRba2V5XSA9IHVuaW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdFtrZXldID0gb2xkVmFsdWUgLy8gVE9ETzogdGhpcyBpcyBhIHJlZmVyZW5jZSwgc2hvdWxkIGJlIGNsb25lXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lcmdlXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBlcXVhbHNcclxuICogY2hlY2tzIGZvciBlcXVhbGl0eVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgob2JqLCBuYW1lcykgPT4ge1xyXG4gIGxldCByZXN1bHQgPSB7fVxyXG5cclxuICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoa2V5KSA9PiB7XHJcbiAgICByZXR1cm4gbmFtZXMuaW5kZXhPZihrZXkpID09PSAtMVxyXG4gIH0pLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59KVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgY29uY2F0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciA9ICcsJykgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xyXG4gIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxyXG5cclxuICByZXR1cm4gYXJncy5qb2luKHNlcGFyYXRvcilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uY2F0XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHRvQXJyYXkgZnJvbSAnLi4vYXJyYXkvdG8nXHJcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0cikgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xyXG4gIGxldCBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpXHJcblxuICBhcmdzLnNoaWZ0KClcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoL3soXFxkKyl9L2csIChtYXRjaCwgaWR4KSA9PiB7XHJcbiAgICByZXR1cm4gbm90KGlzKCdVbmRlZmluZWQnLCBhcmdzW2lkeF0pKSA/IGFyZ3NbaWR4XSA6IG1hdGNoXHJcbiAgfSlcclxufVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICovXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ1N0cmluZycpXHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiB4LCB5XHJcbiAqIFJldHVybnMgYm9vbGVhblxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbmQgKHgsIHkpIHtcclxuICByZXR1cm4geCAmJiB5XHJcbn0pXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNS8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSAoKSB7XHJcbiAgbGV0IGZ1bnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaW5pdCA9IGZ1bnNbZnVucy5sZW5ndGggLSAxXVxyXG4gICAgbGV0IHJlc3VsdCA9IFtpbml0LmFwcGx5KGluaXQsIGFyZ3VtZW50cyldXHJcbiAgICBsZXQgaSA9IGZ1bnMubGVuZ3RoIC0gMlxyXG5cclxuICAgIGZvciAoaTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgY29uc3QgZnVuID0gZnVuc1tpXVxyXG5cclxuICAgICAgcmVzdWx0ID0gW2Z1bi5hcHBseShmdW4sIHJlc3VsdCldXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0WzBdXHJcbiAgfVxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjUvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJ5IChmdW4pIHtcclxuICBsZXQgYXJnc2xlbiA9IGZ1bi5sZW5ndGhcclxuXHJcbiAgaWYgKGFyZ3NsZW4gPT09IDApIHtcclxuICAgIHJldHVybiBmdW5cclxuICB9XHJcbiAgcmV0dXJuIGNyZWF0ZVJlY3Vyc2VyKFtdKVxyXG5cclxuICBmdW5jdGlvbiByZWN1cnNlIChhY2MsIGFyZ3MpIHtcclxuICAgIGxldCBfYWNjID0gYWNjLmNvbmNhdChhcmdzKVxyXG5cclxuICAgIGlmIChfYWNjLmxlbmd0aCA8IGFyZ3NsZW4pIHtcclxuICAgICAgcmV0dXJuIGNyZWF0ZVJlY3Vyc2VyKF9hY2MpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuLmFwcGx5KHRoaXMsIF9hY2MpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVSZWN1cnNlciAoYWNjKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcclxuXHJcbiAgICAgIHJldHVybiByZWN1cnNlKGFjYywgYXJncylcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqIGVtcHR5XHJcbiAqIFJldHVybnMgdGhlIGVtcHR5IGVxdWl2YWxlbnQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50XHJcbiAqL1xyXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi9hcnJheS9pcydcclxuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL29iamVjdC9pcydcclxuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4uL3N0cmluZy9pcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVtcHR5ICh4KSB7XHJcbiAgaWYgKGlzQXJyYXkoeCkpIHtcclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxuICBpZiAoaXNTdHJpbmcoeCkpIHtcclxuICAgIHJldHVybiAnJ1xyXG4gIH1cclxuICBpZiAoaXNPYmplY3QoeCkpIHtcclxuICAgIHJldHVybiB7fVxyXG4gIH1cclxuICByZXR1cm4gdm9pZCAwXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBlcXVhbHNcclxuICogY2hlY2tzIGZvciBlcXVhbGl0eVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXHJcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi9pZGVudGljYWwnXHJcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcclxuaW1wb3J0IG5vdCBmcm9tICcuL25vdCdcclxuaW1wb3J0IG9yIGZyb20gJy4vb3InXHJcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9vYmplY3QvaXMnXHJcbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzJ1xyXG5pbXBvcnQgaXNCb29sZWFuIGZyb20gJy4uL2Jvb2xlYW4vaXMnXHJcbmltcG9ydCBpc051bWJlciBmcm9tICcuLi9udW1iZXIvaXMnXHJcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi4vZGF0ZS9pcydcclxuaW1wb3J0IGVxdWFsc0FycmF5IGZyb20gJy4uL2FycmF5L2VxdWFscydcclxuaW1wb3J0IGVxdWFsc09iamVjdCBmcm9tICcuLi9vYmplY3QvZXF1YWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzICh4LCB5KSB7XHJcbiAgaWYgKGlkZW50aWNhbCh4LCB5KSkgcmV0dXJuIHRydWVcclxuXHJcbiAgaWYgKHR5cGUoeCkgIT09IHR5cGUoeSkpIHJldHVybiBmYWxzZVxyXG5cclxuICBpZiAob3Iobm90KGV4aXN0cyh4KSksIG5vdChleGlzdHMoeSkpKSkgcmV0dXJuIGZhbHNlXHJcblxyXG4gIGlmICh4LmNvbnN0cnVjdG9yICE9PSB5LmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgaWYgKGlzQm9vbGVhbih4KSB8fCBpc051bWJlcih4KSB8fCBpc0RhdGUoeCkpIHtcclxuICAgIHJldHVybiBpZGVudGljYWwoeC52YWx1ZU9mKCksIHkudmFsdWVPZigpKVxyXG4gIH1cclxuICBpZiAoaXNBcnJheSh4KSkge1xyXG4gICAgcmV0dXJuIGVxdWFsc0FycmF5KHgsIHkpXHJcbiAgfSBlbHNlIGlmIChpc09iamVjdCh4KSkge1xyXG4gICAgcmV0dXJuIGVxdWFsc09iamVjdCh4LCB5KVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufSlcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGlzdHMgKHgpIHtcclxuICByZXR1cm4gISh4ID09IG51bGwpXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKiBpZGVudGljYWxcclxuICogY2hlY2tzIGZvciBpZGVudGludGljYWwgaXRlbXNcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xyXG5pbXBvcnQgaXNOYW4gZnJvbSAnLi4vbnVtYmVyL2lzTmFuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaWRlbnRpY2FsICh4LCB5KSB7XHJcbiAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkge1xyXG4gICAgcmV0dXJuIDEgLyB4ID09PSAxIC8geVxyXG4gIH1cclxuICBpZiAoeCA9PT0geSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuICEhKGlzTmFuKHgpICYmIGlzTmFuKHkpKVxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogUmV0dXJucyB0aGUgdmFsdWUgc3VwcGxpZWQgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWRlbnRpdHkgKHgpIHtcclxuICByZXR1cm4geFxyXG59O1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBsZW4gZGllcmlja3hcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xyXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBpcyAoQ3RvciwgdmFsKSB7XHJcbiAgcmV0dXJuIHR5cGUodmFsKSA9PT0gQ3RvclxyXG59KVxyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogZW1wdHlcclxuICogUmV0dXJucyB0aGUgZW1wdHkgZXF1aXZhbGVudCBvZiB0aGUgZmlyc3QgYXJndW1lbnRcclxuICovXHJcbmltcG9ydCBlbXB0eSBmcm9tICcuL2VtcHR5J1xyXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xyXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4vZXF1YWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbXB0eSAoeCkge1xyXG4gIHJldHVybiBleGlzdHMoeCkgJiYgZXF1YWxzKHgsIGVtcHR5KHgpKVxyXG59O1xyXG4iLCIvKipcclxuICogUmV0dXJucyB0aGUgbGFyZ2VzdCBvZiB0aGUgMiBhcmd1bWVudHMgcHJvdmlkZWRcclxuICpcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBzaW5jZSB2MS4wLjJcclxuICogQHNpZyBPcmQgYSA9PiBhIC0+IGEgLT4gYVxyXG4gKiBAcGFyYW0geyp9IGFcclxuICogQHBhcmFtIHsqfSBiXHJcbiAqIEByZXR1cm4geyp9XHJcbiAqKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXggKGEsIGIpIHtcclxuICByZXR1cm4gYiA+IGEgPyBiIDogYVxyXG59KVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vdCAoeCkge1xyXG4gIHJldHVybiAheFxyXG59O1xyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICogb3JcclxuICogUmV0dXJucyB0cnVlIGlmIG9uZSBvciB0aGUgb3RoZXIgaXMgdHJ1ZVxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBvciAoeCwgeSkge1xyXG4gIHJldHVybiB4IHx8IHlcclxufSlcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDA2LzAyLzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJ1dGh5ICh4KSB7XHJcbiAgcmV0dXJuICh4ICE9PSBmYWxzZSkgJiYgZXhpc3RzKHgpXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHlwZSAoeCkge1xyXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkuc2xpY2UoOCwgLTEpXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=