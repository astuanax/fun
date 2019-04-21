(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fun", [], factory);
	else if(typeof exports === 'object')
		exports["fun"] = factory();
	else
		root["fun"] = factory();
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

/***/ "./src/addIndex.js":
/*!*************************!*\
  !*** ./src/addIndex.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Adds a specified index to iterate a collection
 *
 * @function addIndex
 * @summary Adds a specified index to iterate a collection
 * @param {Function} f Iterator function
 * @param {Function} g Function to which to add the index
 * @param {Array} a The array on which to work
 * @return {Array}
 * @since 1.0.2
 * @example
 *
 * const array = [1, 2, 3, 4]
 * addIndex(map, (v, i) => v + i, array) // [1, 3, 5, 7]
 *
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

/***/ "./src/adjust.js":
/*!***********************!*\
  !*** ./src/adjust.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modifies an item in an array using the provided function
 *
 * @function adjust
 * @description Modifies an item in an array using the provided function
 * @since v1.0.2
 * @param {Function} fn - to modify the item at the specified index
 * @param {Number} i - The index at which to modify the array, accepts postitive and negative indexes
 * @param {Array} a - Array with data
 * @return {Array} Array with the adjusted item
 * @example
 *
 * adjust(add(1), -3, [0, 1, 2, 3]) // [0, 2, 2, 3]
 *
 * const addTen = add(10)
 * adjust(addTen, 2, [2, 3, 4, 5, 6]) // [2, 3, 14, 5, 6]
 *
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

/***/ "./src/adjustWith.js":
/*!***************************!*\
  !*** ./src/adjustWith.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./map */ "./src/map.js"));

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

/***/ "./src/all.js":
/*!********************!*\
  !*** ./src/all.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

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

/***/ "./src/allPass.js":
/*!************************!*\
  !*** ./src/allPass.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

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

/***/ "./src/always.js":
/*!***********************!*\
  !*** ./src/always.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

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

/***/ "./src/and.js":
/*!********************!*\
  !*** ./src/and.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

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

/***/ "./src/any.js":
/*!********************!*\
  !*** ./src/any.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

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

/***/ "./src/anyPass.js":
/*!************************!*\
  !*** ./src/anyPass.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

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

/***/ "./src/ap.js":
/*!*******************!*\
  !*** ./src/ap.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _curry2 = _interopRequireDefault(__webpack_require__(/*! ./_private/curry1 */ "./src/_private/curry1.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is */ "./src/is.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! ./array/fold */ "./src/array/fold.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./array/map */ "./src/array/map.js"));

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

/***/ "./src/aperture.js":
/*!*************************!*\
  !*** ./src/aperture.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./map */ "./src/map.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function aperture
 * @param n
 * @param arr
 * @returns {*}
 */
var _default = (0, _curry.default)(function aperture(n, a) {
  if (a.length < n) {
    return [];
  }

  var res = Array(a.length - n + 1);
  return (0, _map.default)(function (item, idx) {
    return a.slice(idx, idx + n);
  }, res);
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/append.js":
/*!***********************!*\
  !*** ./src/append.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _concat = _interopRequireDefault(__webpack_require__(/*! ./concat */ "./src/concat.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function append
 * @description Append an elment to a list
 * @param {*} el - Element to add to a list
 * @param {array} list - List to which to add the element
 * @return {array}
 * @example
 *
 * const l = [0, 1]
 * append('a', l) // reutnr [0, 1, 'a']
 *
 **/
var _default = (0, _curry.default)(function append(el, list) {
  return (0, _concat.default)(list, [el]);
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/apply.js":
/*!**********************!*\
  !*** ./src/apply.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

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

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * @function arrayConcat
 * @param a1
 * @param a2
 * @returns {T[]}
 */
var _default = (0, _curry.default)(function concat(a, b) {
  return Array.prototype.concat(a, b);
});

exports.default = _default;
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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ../not */ "./src/not.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ../equals */ "./src/equals.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _is = _interopRequireDefault(__webpack_require__(/*! ../is */ "./src/is.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

/***/ "./src/binary.js":
/*!***********************!*\
  !*** ./src/binary.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./_private/curry1 */ "./src/_private/curry1.js"));

var _curry2 = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function binary
 * @param cb
 * @returns {function(*=, *=): *}
 */
var _default = (0, _curry.default)(function binary(cb) {
  return (0, _curry2.default)(function (a, b) {
    return cb(a, b);
  });
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/bind.js":
/*!*********************!*\
  !*** ./src/bind.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function bind
 * @description Bind a function to a context
 * @param {function }fn
 * @param {*} context
 * @returns {*}
 */
var _default = (0, _curry.default)(function bind(fn, context) {
  return fn.bind(context);
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

var _always = _interopRequireDefault(__webpack_require__(/*! ../always */ "./src/always.js"));

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

var _always = _interopRequireDefault(__webpack_require__(/*! ../always */ "./src/always.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

var _lift = _interopRequireDefault(__webpack_require__(/*! ../lift */ "./src/lift.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! ../and */ "./src/and.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ../is */ "./src/is.js"));

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

var _is = _interopRequireDefault(__webpack_require__(/*! ../is */ "./src/is.js"));

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

/***/ "./src/call.js":
/*!*********************!*\
  !*** ./src/call.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function call
 * @param fn
 * @returns {*}
 */
// import curry1 from './_private/curry1'
var _default = (0, _curry.default)(function call(fn) {
  return fn.apply(fn, [].slice.call(arguments, 1));
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/complement.js":
/*!***************************!*\
  !*** ./src/complement.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lift = _interopRequireDefault(__webpack_require__(/*! ./lift */ "./src/lift.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not */ "./src/not.js"));

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

/***/ "./src/compose.js":
/*!************************!*\
  !*** ./src/compose.js ***!
  \************************/
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
  var fns = Array.prototype.slice.call(arguments);
  return function _compose() {
    var init = fns[fns.length - 1];
    var result = [init.apply(init, arguments)];
    var i = fns.length - 2;

    for (i; i >= 0; --i) {
      var fn = fns[i];
      result = [fn.apply(fn, result)];
    }

    return result[0];
  };
}

;
module.exports = exports["default"];

/***/ }),

/***/ "./src/concat.js":
/*!***********************!*\
  !*** ./src/concat.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _concat = _interopRequireDefault(__webpack_require__(/*! ./array/concat */ "./src/array/concat.js"));

var _concat2 = _interopRequireDefault(__webpack_require__(/*! ./string/concat */ "./src/string/concat.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./src/type.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Concatenates 2 items together
 *
 * @function concat
 * @description Concatenates 2 items together
 * @since v1.0.4
 * @param {a} a - Left side of the concatenation
 * @param {a} b - right side of the concatenation
 * @return {a} Concatenated item
 **/
var _default = (0, _curry.default)(function concat(a, b) {
  var typeMap = {
    'String': _concat2.default,
    'Array': _concat.default
  };
  return typeMap[(0, _type.default)(a)](a, b);
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/cond.js":
/*!*********************!*\
  !*** ./src/cond.js ***!
  \*********************/
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

/***/ "./src/curry.js":
/*!**********************!*\
  !*** ./src/curry.js ***!
  \**********************/
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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _is = _interopRequireDefault(__webpack_require__(/*! ../is */ "./src/is.js"));

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

/***/ "./src/defaultTo.js":
/*!**************************!*\
  !*** ./src/defaultTo.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

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

/***/ "./src/empty.js":
/*!**********************!*\
  !*** ./src/empty.js ***!
  \**********************/
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

/***/ "./src/equals.js":
/*!***********************!*\
  !*** ./src/equals.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _exists = _interopRequireDefault(__webpack_require__(/*! ./exists */ "./src/exists.js"));

var _identical = _interopRequireDefault(__webpack_require__(/*! ./identical */ "./src/identical.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./src/type.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not */ "./src/not.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! ./or */ "./src/or.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./object/is */ "./src/object/is.js"));

var _is2 = _interopRequireDefault(__webpack_require__(/*! ./array/is */ "./src/array/is.js"));

var _is3 = _interopRequireDefault(__webpack_require__(/*! ./boolean/is */ "./src/boolean/is.js"));

var _is4 = _interopRequireDefault(__webpack_require__(/*! ./number/is */ "./src/number/is.js"));

var _is5 = _interopRequireDefault(__webpack_require__(/*! ./string/is */ "./src/string/is.js"));

var _is6 = _interopRequireDefault(__webpack_require__(/*! ./date/is */ "./src/date/is.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ./array/equals */ "./src/array/equals.js"));

var _equals2 = _interopRequireDefault(__webpack_require__(/*! ./object/equals */ "./src/object/equals.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * @function equals
 * @description Autocurried function that checks for equality of 2 items
 * @param {*} x - Left side of the equality check
 * @param {*} y - Right side of the equality check
 * @return {boolean}
 * @example
 *
 * const nan = Number.NaN
 * equal(nan, nan) // returns true
 *
 * const arr1 = [0, 1, 2, 3]
 * const arr2 = [null, 1, 2, 3]
 * equals(arr1, arr2) // returns false
 *
 * equals(new Object({'a': 0, 'b': 1}), {'a': 0, 'b': 1}) // true
 *
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

/***/ "./src/exists.js":
/*!***********************!*\
  !*** ./src/exists.js ***!
  \***********************/
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

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _filter = _interopRequireDefault(__webpack_require__(/*! ./array/filter */ "./src/array/filter.js"));

var _filter2 = _interopRequireDefault(__webpack_require__(/*! ./object/filter */ "./src/object/filter.js"));

var _filter3 = _interopRequireDefault(__webpack_require__(/*! ./map/filter */ "./src/map/filter.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./src/type.js"));

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

/***/ "./src/findIndex.js":
/*!**************************!*\
  !*** ./src/findIndex.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

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

/***/ "./src/first.js":
/*!**********************!*\
  !*** ./src/first.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./_private/curry1 */ "./src/_private/curry1.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function first
 * @param [a]
 * @return a | undefined
 * @example
 *
 * const arr = [1, 2, 4]
 * first([1, 2, 4]) // returns 1
 */
var _default = (0, _curry.default)(function first(a) {
  return a && a.length ? a[0] : undefined;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/flatMap.js":
/*!************************!*\
  !*** ./src/flatMap.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fold = _interopRequireDefault(__webpack_require__(/*! ./fold */ "./src/fold.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty */ "./src/empty.js"));

var _concat = _interopRequireDefault(__webpack_require__(/*! ./concat */ "./src/concat.js"));

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is */ "./src/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFunction = (0, _is.default)('Function');
/**
 * @function flatMap
 * @param fn
 * @param a
 */

var _default = (0, _curry.default)(function flatMap(fn, a) {
  if (isFunction(a)) {
    return function (x) {
      return fn(a(x))(x);
    };
  }

  if (isFunction(a.flatMap)) {
    return a.flatMap(fn);
  }

  return (0, _fold.default)(function (acc, x) {
    return (0, _concat.default)(acc, fn(x));
  }, (0, _empty.default)(a), a);
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/fold.js":
/*!*********************!*\
  !*** ./src/fold.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! ./array/fold */ "./src/array/fold.js"));

var _fold2 = _interopRequireDefault(__webpack_require__(/*! ./object/fold */ "./src/object/fold.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./src/type.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a single item by iterating over an array like object and call a function on each item
 *
 * @function fold
 * @description Returns a single item by iterating over an array like object and call a function on each item
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

/***/ "./src/identical.js":
/*!**************************!*\
  !*** ./src/identical.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _isNan = _interopRequireDefault(__webpack_require__(/*! ./number/isNan */ "./src/number/isNan.js"));

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

/***/ "./src/identity.js":
/*!*************************!*\
  !*** ./src/identity.js ***!
  \*************************/
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
Object.defineProperty(exports, "aperture", {
  enumerable: true,
  get: function get() {
    return _aperture.default;
  }
});
Object.defineProperty(exports, "zipObj", {
  enumerable: true,
  get: function get() {
    return _zipObj.default;
  }
});
Object.defineProperty(exports, "add", {
  enumerable: true,
  get: function get() {
    return _add.default;
  }
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
Object.defineProperty(exports, "append", {
  enumerable: true,
  get: function get() {
    return _append.default;
  }
});
Object.defineProperty(exports, "apply", {
  enumerable: true,
  get: function get() {
    return _apply.default;
  }
});
Object.defineProperty(exports, "binary", {
  enumerable: true,
  get: function get() {
    return _binary.default;
  }
});
Object.defineProperty(exports, "bind", {
  enumerable: true,
  get: function get() {
    return _bind.default;
  }
});
Object.defineProperty(exports, "both", {
  enumerable: true,
  get: function get() {
    return _both.default;
  }
});
Object.defineProperty(exports, "call", {
  enumerable: true,
  get: function get() {
    return _call.default;
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
Object.defineProperty(exports, "concat", {
  enumerable: true,
  get: function get() {
    return _concat.default;
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
Object.defineProperty(exports, "diffDate", {
  enumerable: true,
  get: function get() {
    return _diffDate.default;
  }
});
Object.defineProperty(exports, "divide", {
  enumerable: true,
  get: function get() {
    return _divide.default;
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
Object.defineProperty(exports, "F", {
  enumerable: true,
  get: function get() {
    return _F.default;
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
Object.defineProperty(exports, "first", {
  enumerable: true,
  get: function get() {
    return _first.default;
  }
});
Object.defineProperty(exports, "flatMap", {
  enumerable: true,
  get: function get() {
    return _flatMap.default;
  }
});
Object.defineProperty(exports, "fold", {
  enumerable: true,
  get: function get() {
    return _fold.default;
  }
});
Object.defineProperty(exports, "formatString", {
  enumerable: true,
  get: function get() {
    return _formatString.default;
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
Object.defineProperty(exports, "isArray", {
  enumerable: true,
  get: function get() {
    return _is2.default;
  }
});
Object.defineProperty(exports, "isBoolean", {
  enumerable: true,
  get: function get() {
    return _is3.default;
  }
});
Object.defineProperty(exports, "isDate", {
  enumerable: true,
  get: function get() {
    return _is4.default;
  }
});
Object.defineProperty(exports, "isEmpty", {
  enumerable: true,
  get: function get() {
    return _isEmpty.default;
  }
});
Object.defineProperty(exports, "isFutureDate", {
  enumerable: true,
  get: function get() {
    return _isFutureDate.default;
  }
});
Object.defineProperty(exports, "isMap", {
  enumerable: true,
  get: function get() {
    return _is5.default;
  }
});
Object.defineProperty(exports, "isNan", {
  enumerable: true,
  get: function get() {
    return _isNan.default;
  }
});
Object.defineProperty(exports, "isNull", {
  enumerable: true,
  get: function get() {
    return _is6.default;
  }
});
Object.defineProperty(exports, "isNumber", {
  enumerable: true,
  get: function get() {
    return _is7.default;
  }
});
Object.defineProperty(exports, "isObject", {
  enumerable: true,
  get: function get() {
    return _is8.default;
  }
});
Object.defineProperty(exports, "isSet", {
  enumerable: true,
  get: function get() {
    return _is9.default;
  }
});
Object.defineProperty(exports, "isString", {
  enumerable: true,
  get: function get() {
    return _is10.default;
  }
});
Object.defineProperty(exports, "isUndefined", {
  enumerable: true,
  get: function get() {
    return _is11.default;
  }
});
Object.defineProperty(exports, "isValidDate", {
  enumerable: true,
  get: function get() {
    return _isValid.default;
  }
});
Object.defineProperty(exports, "Just", {
  enumerable: true,
  get: function get() {
    return _Just.default;
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
Object.defineProperty(exports, "last", {
  enumerable: true,
  get: function get() {
    return _last.default;
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
Object.defineProperty(exports, "Maybe", {
  enumerable: true,
  get: function get() {
    return _Maybe.default;
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function get() {
    return _merge.default;
  }
});
Object.defineProperty(exports, "multiply", {
  enumerable: true,
  get: function get() {
    return _multiply.default;
  }
});
Object.defineProperty(exports, "not", {
  enumerable: true,
  get: function get() {
    return _not.default;
  }
});
Object.defineProperty(exports, "Nothing", {
  enumerable: true,
  get: function get() {
    return _Nothing.default;
  }
});
Object.defineProperty(exports, "omit", {
  enumerable: true,
  get: function get() {
    return _omit.default;
  }
});
Object.defineProperty(exports, "or", {
  enumerable: true,
  get: function get() {
    return _or.default;
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
Object.defineProperty(exports, "sum", {
  enumerable: true,
  get: function get() {
    return _sum.default;
  }
});
Object.defineProperty(exports, "T", {
  enumerable: true,
  get: function get() {
    return _T.default;
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
Object.defineProperty(exports, "union", {
  enumerable: true,
  get: function get() {
    return _union.default;
  }
});
Object.defineProperty(exports, "values", {
  enumerable: true,
  get: function get() {
    return _values.default;
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

var _aperture = _interopRequireDefault(__webpack_require__(/*! ./aperture */ "./src/aperture.js"));

var _zipObj = _interopRequireDefault(__webpack_require__(/*! ./zipObj */ "./src/zipObj.js"));

var _add = _interopRequireDefault(__webpack_require__(/*! ./number/add */ "./src/number/add.js"));

var _addIndex = _interopRequireDefault(__webpack_require__(/*! ./addIndex */ "./src/addIndex.js"));

var _adjust = _interopRequireDefault(__webpack_require__(/*! ./adjust */ "./src/adjust.js"));

var _adjustWith = _interopRequireDefault(__webpack_require__(/*! ./adjustWith */ "./src/adjustWith.js"));

var _all = _interopRequireDefault(__webpack_require__(/*! ./all */ "./src/all.js"));

var _allPass = _interopRequireDefault(__webpack_require__(/*! ./allPass */ "./src/allPass.js"));

var _always = _interopRequireDefault(__webpack_require__(/*! ./always */ "./src/always.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./src/and.js"));

var _any = _interopRequireDefault(__webpack_require__(/*! ./any */ "./src/any.js"));

var _anyPass = _interopRequireDefault(__webpack_require__(/*! ./anyPass */ "./src/anyPass.js"));

var _ap = _interopRequireDefault(__webpack_require__(/*! ./ap */ "./src/ap.js"));

var _append = _interopRequireDefault(__webpack_require__(/*! ./append */ "./src/append.js"));

var _apply = _interopRequireDefault(__webpack_require__(/*! ./apply */ "./src/apply.js"));

var _binary = _interopRequireDefault(__webpack_require__(/*! ./binary */ "./src/binary.js"));

var _bind = _interopRequireDefault(__webpack_require__(/*! ./bind */ "./src/bind.js"));

var _both = _interopRequireDefault(__webpack_require__(/*! ./boolean/both */ "./src/boolean/both.js"));

var _call = _interopRequireDefault(__webpack_require__(/*! ./call */ "./src/call.js"));

var _complement = _interopRequireDefault(__webpack_require__(/*! ./complement */ "./src/complement.js"));

var _compose = _interopRequireDefault(__webpack_require__(/*! ./compose */ "./src/compose.js"));

var _concat = _interopRequireDefault(__webpack_require__(/*! ./concat */ "./src/concat.js"));

var _cond = _interopRequireDefault(__webpack_require__(/*! ./cond */ "./src/cond.js"));

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _defaultTo = _interopRequireDefault(__webpack_require__(/*! ./defaultTo */ "./src/defaultTo.js"));

var _diffDate = _interopRequireDefault(__webpack_require__(/*! ./date/diffDate */ "./src/date/diffDate.js"));

var _divide = _interopRequireDefault(__webpack_require__(/*! ./number/divide */ "./src/number/divide.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty */ "./src/empty.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ./equals */ "./src/equals.js"));

var _exists = _interopRequireDefault(__webpack_require__(/*! ./exists */ "./src/exists.js"));

var _F = _interopRequireDefault(__webpack_require__(/*! ./boolean/F */ "./src/boolean/F.js"));

var _filter = _interopRequireDefault(__webpack_require__(/*! ./filter */ "./src/filter.js"));

var _findIndex = _interopRequireDefault(__webpack_require__(/*! ./findIndex */ "./src/findIndex.js"));

var _first = _interopRequireDefault(__webpack_require__(/*! ./first */ "./src/first.js"));

var _flatMap = _interopRequireDefault(__webpack_require__(/*! ./flatMap */ "./src/flatMap.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! ./fold */ "./src/fold.js"));

var _formatString = _interopRequireDefault(__webpack_require__(/*! ./string/formatString */ "./src/string/formatString.js"));

var _has = _interopRequireDefault(__webpack_require__(/*! ./object/has */ "./src/object/has.js"));

var _hasIn = _interopRequireDefault(__webpack_require__(/*! ./object/hasIn */ "./src/object/hasIn.js"));

var _identical = _interopRequireDefault(__webpack_require__(/*! ./identical */ "./src/identical.js"));

var _identity = _interopRequireDefault(__webpack_require__(/*! ./identity */ "./src/identity.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./is */ "./src/is.js"));

var _is2 = _interopRequireDefault(__webpack_require__(/*! ./array/is */ "./src/array/is.js"));

var _is3 = _interopRequireDefault(__webpack_require__(/*! ./boolean/is */ "./src/boolean/is.js"));

var _is4 = _interopRequireDefault(__webpack_require__(/*! ./date/is */ "./src/date/is.js"));

var _isEmpty = _interopRequireDefault(__webpack_require__(/*! ./isEmpty */ "./src/isEmpty.js"));

var _isFutureDate = _interopRequireDefault(__webpack_require__(/*! ./date/isFutureDate */ "./src/date/isFutureDate.js"));

var _is5 = _interopRequireDefault(__webpack_require__(/*! ./map/is */ "./src/map/is.js"));

var _isNan = _interopRequireDefault(__webpack_require__(/*! ./number/isNan */ "./src/number/isNan.js"));

var _is6 = _interopRequireDefault(__webpack_require__(/*! ./null/is */ "./src/null/is.js"));

var _is7 = _interopRequireDefault(__webpack_require__(/*! ./number/is */ "./src/number/is.js"));

var _is8 = _interopRequireDefault(__webpack_require__(/*! ./object/is */ "./src/object/is.js"));

var _is9 = _interopRequireDefault(__webpack_require__(/*! ./set/is */ "./src/set/is.js"));

var _is10 = _interopRequireDefault(__webpack_require__(/*! ./string/is */ "./src/string/is.js"));

var _is11 = _interopRequireDefault(__webpack_require__(/*! ./undefined/is */ "./src/undefined/is.js"));

var _isValid = _interopRequireDefault(__webpack_require__(/*! ./date/isValid */ "./src/date/isValid.js"));

var _Just = _interopRequireDefault(__webpack_require__(/*! ./monads/Just */ "./src/monads/Just.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! ./keys */ "./src/keys.js"));

var _keysIn = _interopRequireDefault(__webpack_require__(/*! ./object/keysIn */ "./src/object/keysIn.js"));

var _last = _interopRequireDefault(__webpack_require__(/*! ./last */ "./src/last.js"));

var _lift = _interopRequireDefault(__webpack_require__(/*! ./lift */ "./src/lift.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./map */ "./src/map.js"));

var _max = _interopRequireDefault(__webpack_require__(/*! ./max */ "./src/max.js"));

var _Maybe = _interopRequireDefault(__webpack_require__(/*! ./monads/Maybe */ "./src/monads/Maybe.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./object/merge */ "./src/object/merge.js"));

var _multiply = _interopRequireDefault(__webpack_require__(/*! ./number/multiply */ "./src/number/multiply.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not */ "./src/not.js"));

var _Nothing = _interopRequireDefault(__webpack_require__(/*! ./monads/Nothing */ "./src/monads/Nothing.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! ./object/omit */ "./src/object/omit.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! ./or */ "./src/or.js"));

var _path = _interopRequireDefault(__webpack_require__(/*! ./object/path */ "./src/object/path.js"));

var _pick = _interopRequireDefault(__webpack_require__(/*! ./object/pick */ "./src/object/pick.js"));

var _prop = _interopRequireDefault(__webpack_require__(/*! ./object/prop */ "./src/object/prop.js"));

var _sum = _interopRequireDefault(__webpack_require__(/*! ./number/sum */ "./src/number/sum.js"));

var _T = _interopRequireDefault(__webpack_require__(/*! ./boolean/T */ "./src/boolean/T.js"));

var _toDay = _interopRequireDefault(__webpack_require__(/*! ./date/toDay */ "./src/date/toDay.js"));

var _toHour = _interopRequireDefault(__webpack_require__(/*! ./date/toHour */ "./src/date/toHour.js"));

var _toMinutes = _interopRequireDefault(__webpack_require__(/*! ./date/toMinutes */ "./src/date/toMinutes.js"));

var _toSeconds = _interopRequireDefault(__webpack_require__(/*! ./date/toSeconds */ "./src/date/toSeconds.js"));

var _truthy = _interopRequireDefault(__webpack_require__(/*! ./truthy */ "./src/truthy.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./src/type.js"));

var _union = _interopRequireDefault(__webpack_require__(/*! ./array/union */ "./src/array/union.js"));

var _values = _interopRequireDefault(__webpack_require__(/*! ./object/values */ "./src/object/values.js"));

var _zip = _interopRequireDefault(__webpack_require__(/*! ./zip */ "./src/zip.js"));

var _zipWith = _interopRequireDefault(__webpack_require__(/*! ./zipWith */ "./src/zipWith.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/is.js":
/*!*******************!*\
  !*** ./src/is.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./src/type.js"));

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

/***/ "./src/isEmpty.js":
/*!************************!*\
  !*** ./src/isEmpty.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty */ "./src/empty.js"));

var _exists = _interopRequireDefault(__webpack_require__(/*! ./exists */ "./src/exists.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ./equals */ "./src/equals.js"));

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

/***/ "./src/iterator/is.js":
/*!****************************!*\
  !*** ./src/iterator/is.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIter;

var _is = _interopRequireDefault(__webpack_require__(/*! ../is */ "./src/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dierickx.len on 01/04/2017.
 */
var isFunction = (0, _is.default)('Function');

function isIter(iter) {
  return isFunction(iter[Symbol.iterator]);
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/iterator/map.js":
/*!*****************************!*\
  !*** ./src/iterator/map.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Maps over an Iterator and applies a function
 *
 * @function
 * @since v1.0.3
 * @sig (currentValue, idx, [a]) -> {b} -> [b]
 * @param {Function} cb
 * @param {Iterator} a
 * @return {Iterator}
 **/
var _default = (0, _curry.default)(function map(callback, iterator) {
  var r = [];

  for (var nextValue = iterator.next(); nextValue.done !== true; nextValue = iterator.next()) {
    r.push(callback(iterator.value()));
  }

  return r;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/keys.js":
/*!*********************!*\
  !*** ./src/keys.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! ./object/keys */ "./src/object/keys.js"));

var _keys2 = _interopRequireDefault(__webpack_require__(/*! ./map/keys */ "./src/map/keys.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./src/type.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the keys of the provided object or iterator
 *
 * @function keys
 * @description Autocurried function which returns the keys of the provided object or iterator
 * @since v1.0.2
 * @sig obj -> [*]
 * @param {Object} obj - Obj from zhich to take the keys
 * @return {Iterable}
 **/
var _default = (0, _curry.default)(function map(obj) {
  switch ((0, _type.default)(obj)) {
    case 'Map':
      return (0, _keys2.default)(obj);

    default:
      return (0, _keys.default)(obj);
  }
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/last.js":
/*!*********************!*\
  !*** ./src/last.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./_private/curry1 */ "./src/_private/curry1.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function last
 * @param [a]
 * @return a | undefined
 */
var _default = (0, _curry.default)(function last(a) {
  return a && a.length ? a[a.length - 1] : undefined;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lift.js":
/*!*********************!*\
  !*** ./src/lift.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _curry2 = _interopRequireDefault(__webpack_require__(/*! ./_private/curry1 */ "./src/_private/curry1.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! ./fold */ "./src/fold.js"));

var _ap = _interopRequireDefault(__webpack_require__(/*! ./ap */ "./src/ap.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./map */ "./src/map.js"));

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

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./array/map */ "./src/array/map.js"));

var _map2 = _interopRequireDefault(__webpack_require__(/*! ./object/map */ "./src/object/map.js"));

var _map3 = _interopRequireDefault(__webpack_require__(/*! ./map/map */ "./src/map/map.js"));

var _map4 = _interopRequireDefault(__webpack_require__(/*! ./string/map */ "./src/string/map.js"));

var _map5 = _interopRequireDefault(__webpack_require__(/*! ./iterator/map */ "./src/iterator/map.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./src/type.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./iterator/is */ "./src/iterator/is.js"));

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

    case 'Array':
      return (0, _map.default)(cb, a);

    default:
      return (0, _is.default)(a) ? (0, _map5.default)(cb, a) : (0, _map.default)(cb, a);
  }
});

exports.default = _default;
module.exports = exports["default"];

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _is = _interopRequireDefault(__webpack_require__(/*! ../is */ "./src/is.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ../empty */ "./src/empty.js"));

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

/***/ "./src/max.js":
/*!********************!*\
  !*** ./src/max.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

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

/**
 * @function Just
 * @param val
 * @returns {Just}
 * @constructor
 */
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

/**
 * @function Maybe
 * @desc Maybe monad provides a way to safely wrap null values
 * @param val
 * @constructor
 */
var Maybe = function Maybe(val) {
  this.__value = val;
};
/**
 * @function of
 * @desc Creates a Maybe monad from the provided argument
 * @param val
 * @returns {Maybe}
 */


Maybe.of = function (val) {
  if (val instanceof Maybe) return val;

  if (this instanceof Maybe) {
    this.__value = val;
    return this;
  }

  return new Maybe(val);
};
/**
 * @function getOrElse
 * @desc Evaluates the Maybe monad and returns either the value from the Maybe or the default value
 * @param n Default value to return if the Maybe evaluates to undefined or null
 * @returns {*}
 */


Maybe.prototype.getOrElse = function (n) {
  return this.isNothing() ? n : this.__value;
};

Maybe.prototype.map = function (f) {
  if (this.isNothing()) {
    return Maybe.of(null);
  }

  return Maybe.of(f(this.__value));
};

Maybe.prototype.flatMap = function (f) {
  return this.map(f);
};

Maybe.prototype.ap = function (m) {
  return Maybe.of(m).map(this.__value);
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

/**
 * @function Nothing
 * @constructor
 */
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

/***/ "./src/not.js":
/*!********************!*\
  !*** ./src/not.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

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

var _is = _interopRequireDefault(__webpack_require__(/*! ../is */ "./src/is.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _is = _interopRequireDefault(__webpack_require__(/*! ../is */ "./src/is.js"));

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

var _and = _interopRequireDefault(__webpack_require__(/*! ../and */ "./src/and.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

var _add = _interopRequireDefault(__webpack_require__(/*! ./add */ "./src/number/add.js"));

var _fold = _interopRequireDefault(__webpack_require__(/*! ../fold */ "./src/fold.js"));

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
  return (0, _fold.default)(_add.default, 0, a);
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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

var _exists = _interopRequireDefault(__webpack_require__(/*! ../exists */ "./src/exists.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ../not */ "./src/not.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ../equals */ "./src/equals.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _is = _interopRequireDefault(__webpack_require__(/*! ../is */ "./src/is.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ../empty */ "./src/empty.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

var _identical = _interopRequireDefault(__webpack_require__(/*! ../identical */ "./src/identical.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

/***/ "./src/object/values.js":
/*!******************************!*\
  !*** ./src/object/values.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ../_private/curry1 */ "./src/_private/curry1.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! ./keys */ "./src/object/keys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function values
 * @description REturns a list of values taken from an objects own properties
 * @param {object} - obj The object from which to take the values
 * @return {array}
 *
 **/
var _default = (0, _curry.default)(function values(obj) {
  var k = (0, _keys.default)(obj);
  var l = k.length;
  var r = [];
  var i = 0;

  while (i < l) {
    r[i] = obj[k[i]];
    i += 1;
  }

  return r;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/or.js":
/*!*******************!*\
  !*** ./src/or.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

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

var _is = _interopRequireDefault(__webpack_require__(/*! ../is */ "./src/is.js"));

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
exports.default = concat;

/**
 * @private
 * @function stringConcat
 */
function concat(a, b) {
  // use function(), arrow function doesn't bind arguments
  return String(a) + String(b);
}

module.exports = exports["default"];

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

var _not = _interopRequireDefault(__webpack_require__(/*! ../not */ "./src/not.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ../is */ "./src/is.js"));

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

var _is = _interopRequireDefault(__webpack_require__(/*! ../is */ "./src/is.js"));

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../curry */ "./src/curry.js"));

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

/***/ "./src/truthy.js":
/*!***********************!*\
  !*** ./src/truthy.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = truthy;

var _exists = _interopRequireDefault(__webpack_require__(/*! ./exists */ "./src/exists.js"));

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

/***/ "./src/type.js":
/*!*********************!*\
  !*** ./src/type.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./_private/curry1 */ "./src/_private/curry1.js"));

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

var _is = _interopRequireDefault(__webpack_require__(/*! ../is */ "./src/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dierickx.len on 03/02/2019
 */
var _default = (0, _is.default)('undefined');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/zip.js":
/*!********************!*\
  !*** ./src/zip.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

var _zipWith2 = _interopRequireDefault(__webpack_require__(/*! ./zipWith */ "./src/zipWith.js"));

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

/***/ "./src/zipObj.js":
/*!***********************!*\
  !*** ./src/zipObj.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function zipObj
 * @param {array} a
 * @param {array} b
 * @return {object}
 */
var _default = (0, _curry.default)(function zipObj(a, b) {
  var i = 0;
  var l = Math.min(a.length, b.length);
  var r = {};

  while (i < l) {
    r[a[i]] = b[i];
    i += 1;
  }

  return r;
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/zipWith.js":
/*!************************!*\
  !*** ./src/zipWith.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _curry = _interopRequireDefault(__webpack_require__(/*! ./curry */ "./src/curry.js"));

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
//# sourceMappingURL=fun.js.map