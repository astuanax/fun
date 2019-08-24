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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curry1; });
var cov_2l314dvrk6 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/_private/curry1.js";
  var hash = "51c9e564c00020385bf9914e20688f56e9c3fe98";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/_private/curry1.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "1": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 12,
          column: 13
        }
      }
    },
    fnMap: {
      "0": {
        name: "curry1",
        decl: {
          start: {
            line: 8,
            column: 24
          },
          end: {
            line: 8,
            column: 30
          }
        },
        loc: {
          start: {
            line: 8,
            column: 36
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "curried",
        decl: {
          start: {
            line: 9,
            column: 18
          },
          end: {
            line: 9,
            column: 25
          }
        },
        loc: {
          start: {
            line: 9,
            column: 30
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 11
          },
          end: {
            line: 12,
            column: 13
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 11,
            column: 12
          }
        }, {
          start: {
            line: 12,
            column: 8
          },
          end: {
            line: 12,
            column: 13
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "51c9e564c00020385bf9914e20688f56e9c3fe98"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Returns a curried function with arity 1
 * @function curry1
 * @private
 * @since v1.0.2
 **/
function curry1(fn) {
  cov_2l314dvrk6.f[0]++;
  cov_2l314dvrk6.s[0]++;
  return function curried(a) {
    cov_2l314dvrk6.f[1]++;
    cov_2l314dvrk6.s[1]++;
    return arguments.length === 0 ? (cov_2l314dvrk6.b[0][0]++, this) : (cov_2l314dvrk6.b[0][1]++, fn(a));
  };
}

/***/ }),

/***/ "./src/addIndex.js":
/*!*************************!*\
  !*** ./src/addIndex.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_1l84owg2ux = function () {
  var path = "/Volumes/BigOne/Github/fun/src/addIndex.js";
  var hash = "56e14de722aed099e24e3fce6a20266276af4046";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/addIndex.js",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 10
        },
        end: {
          line: 20,
          column: 11
        }
      },
      "1": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "2": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "addIndex",
        decl: {
          start: {
            line: 19,
            column: 30
          },
          end: {
            line: 19,
            column: 38
          }
        },
        loc: {
          start: {
            line: 19,
            column: 49
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 19
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        loc: {
          start: {
            line: 22,
            column: 17
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 22
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "56e14de722aed099e24e3fce6a20266276af4046"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function addIndex(f, g, a) {
  cov_1l84owg2ux.f[0]++;
  var i = (cov_1l84owg2ux.s[0]++, 0);
  cov_1l84owg2ux.s[1]++;
  return f(function (v) {
    cov_1l84owg2ux.f[1]++;
    cov_1l84owg2ux.s[2]++;
    return g(v, i++);
  }, a);
}));

/***/ }),

/***/ "./src/adjust.js":
/*!***********************!*\
  !*** ./src/adjust.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_70yloixjq = function () {
  var path = "/Volumes/BigOne/Github/fun/src/adjust.js";
  var hash = "688668ad59ce1933f5415a506f2d08c5a04e866f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/adjust.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 12
        },
        end: {
          line: 22,
          column: 41
        }
      },
      "1": {
        start: {
          line: 23,
          column: 14
        },
        end: {
          line: 23,
          column: 38
        }
      },
      "2": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 23
        }
      },
      "3": {
        start: {
          line: 24,
          column: 15
        },
        end: {
          line: 24,
          column: 23
        }
      },
      "4": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 21
        }
      },
      "5": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "adjust",
        decl: {
          start: {
            line: 21,
            column: 30
          },
          end: {
            line: 21,
            column: 36
          }
        },
        loc: {
          start: {
            line: 21,
            column: 48
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 21
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 14
          },
          end: {
            line: 23,
            column: 38
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 23,
            column: 22
          },
          end: {
            line: 23,
            column: 34
          }
        }, {
          start: {
            line: 23,
            column: 37
          },
          end: {
            line: 23,
            column: 38
          }
        }],
        line: 23
      },
      "1": {
        loc: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 23
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 23
          }
        }, {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 23
          }
        }],
        line: 24
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "688668ad59ce1933f5415a506f2d08c5a04e866f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function adjust(fn, i, a) {
  cov_70yloixjq.f[0]++;
  var r = (cov_70yloixjq.s[0]++, Array.prototype.slice.call(a));
  var idx = (cov_70yloixjq.s[1]++, i < 0 ? (cov_70yloixjq.b[0][0]++, r.length + i) : (cov_70yloixjq.b[0][1]++, i));
  cov_70yloixjq.s[2]++;

  if (!a[idx]) {
    cov_70yloixjq.b[1][0]++;
    cov_70yloixjq.s[3]++;
    return r;
  } else {
    cov_70yloixjq.b[1][1]++;
  }

  cov_70yloixjq.s[4]++;
  r[idx] = fn(r[idx]);
  cov_70yloixjq.s[5]++;
  return r;
}));

/***/ }),

/***/ "./src/adjustWith.js":
/*!***************************!*\
  !*** ./src/adjustWith.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/map.js");
var cov_29dkdanawz = function () {
  var path = "/Volumes/BigOne/Github/fun/src/adjustWith.js";
  var hash = "2fb4cfaf6125ad3a2099645fdb585b5b6d807f00";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/adjustWith.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 14
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "1": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "2": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 18
        }
      },
      "3": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 12
        }
      },
      "4": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 48
        }
      }
    },
    fnMap: {
      "0": {
        name: "adjustWith",
        decl: {
          start: {
            line: 16,
            column: 30
          },
          end: {
            line: 16,
            column: 40
          }
        },
        loc: {
          start: {
            line: 16,
            column: 55
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 14
          },
          end: {
            line: 17,
            column: 15
          }
        },
        loc: {
          start: {
            line: 17,
            column: 19
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 17
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }],
        line: 18
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "2fb4cfaf6125ad3a2099645fdb585b5b6d807f00"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function adjustWith(fn, pred, a) {
  cov_29dkdanawz.f[0]++;
  cov_29dkdanawz.s[0]++;

  var _fn = function _fn(x) {
    cov_29dkdanawz.f[1]++;
    cov_29dkdanawz.s[1]++;

    if (pred(x)) {
      cov_29dkdanawz.b[0][0]++;
      cov_29dkdanawz.s[2]++;
      return fn(x);
    } else {
      cov_29dkdanawz.b[0][1]++;
    }

    cov_29dkdanawz.s[3]++;
    return x;
  };

  cov_29dkdanawz.s[4]++;
  return Object(_map__WEBPACK_IMPORTED_MODULE_1__["default"])(_fn, Array.prototype.slice.call(a));
}));

/***/ }),

/***/ "./src/all.js":
/*!********************!*\
  !*** ./src/all.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_17arb3yzrt = function () {
  var path = "/Volumes/BigOne/Github/fun/src/all.js";
  var hash = "9933c70c1e5a2ad3b9e17a7610d71867a0690c75";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/all.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 15,
          column: 16
        }
      },
      "1": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "2": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "3": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 17
        }
      },
      "4": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 11
        }
      },
      "5": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 12
        }
      }
    },
    fnMap: {
      "0": {
        name: "all",
        decl: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 14,
            column: 33
          }
        },
        loc: {
          start: {
            line: 14,
            column: 42
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 14
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }],
        line: 17
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "9933c70c1e5a2ad3b9e17a7610d71867a0690c75"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function all(cb, a) {
  cov_17arb3yzrt.f[0]++;
  var res = (cov_17arb3yzrt.s[0]++, true);
  cov_17arb3yzrt.s[1]++;

  for (var i in a) {
    cov_17arb3yzrt.s[2]++;

    if (!cb(a[i])) {
      cov_17arb3yzrt.b[0][0]++;
      cov_17arb3yzrt.s[3]++;
      res = false;
      cov_17arb3yzrt.s[4]++;
      break;
    } else {
      cov_17arb3yzrt.b[0][1]++;
    }
  }

  cov_17arb3yzrt.s[5]++;
  return res;
}));

/***/ }),

/***/ "./src/allPass.js":
/*!************************!*\
  !*** ./src/allPass.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_81wh1p3uq = function () {
  var path = "/Volumes/BigOne/Github/fun/src/allPass.js";
  var hash = "1ec003d0209ac9082fc51223baf02e8a317f6625";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/allPass.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 16,
          column: 3
        }
      },
      "1": {
        start: {
          line: 14,
          column: 15
        },
        end: {
          line: 14,
          column: 16
        }
      },
      "2": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 32
        }
      },
      "3": {
        start: {
          line: 15,
          column: 20
        },
        end: {
          line: 15,
          column: 32
        }
      },
      "4": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 13
        }
      }
    },
    fnMap: {
      "0": {
        name: "allPass",
        decl: {
          start: {
            line: 13,
            column: 30
          },
          end: {
            line: 13,
            column: 37
          }
        },
        loc: {
          start: {
            line: 13,
            column: 47
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 32
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 32
          }
        }, {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 32
          }
        }],
        line: 15
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1ec003d0209ac9082fc51223baf02e8a317f6625"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function allPass(cbs, a) {
  cov_81wh1p3uq.f[0]++;
  cov_81wh1p3uq.s[0]++;

  for (var i = (cov_81wh1p3uq.s[1]++, 0); i < cbs.length; i++) {
    cov_81wh1p3uq.s[2]++;

    if (!cbs[i](a)) {
      cov_81wh1p3uq.b[0][0]++;
      cov_81wh1p3uq.s[3]++;
      return false;
    } else {
      cov_81wh1p3uq.b[0][1]++;
    }
  }

  cov_81wh1p3uq.s[4]++;
  return true;
}));

/***/ }),

/***/ "./src/always.js":
/*!***********************!*\
  !*** ./src/always.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_13zssi2lq9 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/always.js";
  var hash = "c88ce34a4820a6556775f26d3a3e4eebe70ea555";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/always.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 33
        }
      },
      "1": {
        start: {
          line: 14,
          column: 23
        },
        end: {
          line: 14,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "always",
        decl: {
          start: {
            line: 13,
            column: 30
          },
          end: {
            line: 13,
            column: 36
          }
        },
        loc: {
          start: {
            line: 13,
            column: 41
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 9
          },
          end: {
            line: 14,
            column: 10
          }
        },
        loc: {
          start: {
            line: 14,
            column: 21
          },
          end: {
            line: 14,
            column: 33
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c88ce34a4820a6556775f26d3a3e4eebe70ea555"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function always(x) {
  cov_13zssi2lq9.f[0]++;
  cov_13zssi2lq9.s[0]++;
  return function () {
    cov_13zssi2lq9.f[1]++;
    cov_13zssi2lq9.s[1]++;
    return x;
  };
}));

/***/ }),

/***/ "./src/and.js":
/*!********************!*\
  !*** ./src/and.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_tfv2659l7 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/and.js";
  var hash = "928825d11e81778411809a437a8d4869af5697af";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/and.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "and",
        decl: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 14,
            column: 33
          }
        },
        loc: {
          start: {
            line: 14,
            column: 41
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 14
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 9
          },
          end: {
            line: 15,
            column: 15
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 15,
            column: 9
          },
          end: {
            line: 15,
            column: 10
          }
        }, {
          start: {
            line: 15,
            column: 14
          },
          end: {
            line: 15,
            column: 15
          }
        }],
        line: 15
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "928825d11e81778411809a437a8d4869af5697af"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function and(x, y) {
  cov_tfv2659l7.f[0]++;
  cov_tfv2659l7.s[0]++;
  return (cov_tfv2659l7.b[0][0]++, x) && (cov_tfv2659l7.b[0][1]++, y);
}));

/***/ }),

/***/ "./src/any.js":
/*!********************!*\
  !*** ./src/any.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_sgbsvrnac = function () {
  var path = "/Volumes/BigOne/Github/fun/src/any.js";
  var hash = "e8b1f048b17d073a8fd1dae369364bcb99082b52";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/any.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 15,
          column: 17
        }
      },
      "1": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "2": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "3": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 16
        }
      },
      "4": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 11
        }
      },
      "5": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 12
        }
      }
    },
    fnMap: {
      "0": {
        name: "any",
        decl: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 14,
            column: 33
          }
        },
        loc: {
          start: {
            line: 14,
            column: 42
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 14
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }],
        line: 17
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e8b1f048b17d073a8fd1dae369364bcb99082b52"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function any(cb, a) {
  cov_sgbsvrnac.f[0]++;
  var res = (cov_sgbsvrnac.s[0]++, false);
  cov_sgbsvrnac.s[1]++;

  for (var i in a) {
    cov_sgbsvrnac.s[2]++;

    if (cb(a[i])) {
      cov_sgbsvrnac.b[0][0]++;
      cov_sgbsvrnac.s[3]++;
      res = true;
      cov_sgbsvrnac.s[4]++;
      break;
    } else {
      cov_sgbsvrnac.b[0][1]++;
    }
  }

  cov_sgbsvrnac.s[5]++;
  return res;
}));

/***/ }),

/***/ "./src/anyPass.js":
/*!************************!*\
  !*** ./src/anyPass.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_2d3p3u32kl = function () {
  var path = "/Volumes/BigOne/Github/fun/src/anyPass.js";
  var hash = "c0df739517fc96ba9e5de7eab15835860bb556c8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/anyPass.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "1": {
        start: {
          line: 13,
          column: 15
        },
        end: {
          line: 13,
          column: 16
        }
      },
      "2": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 30
        }
      },
      "3": {
        start: {
          line: 14,
          column: 19
        },
        end: {
          line: 14,
          column: 30
        }
      },
      "4": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "anyPass",
        decl: {
          start: {
            line: 12,
            column: 30
          },
          end: {
            line: 12,
            column: 37
          }
        },
        loc: {
          start: {
            line: 12,
            column: 47
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 30
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 30
          }
        }, {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 30
          }
        }],
        line: 14
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c0df739517fc96ba9e5de7eab15835860bb556c8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Applies a list of predicates to the data and returns true if one passes
 *
 * @function anyPass
 * @since v1.0.2
 * @sig [(*... -> Boolean)] -> (*...) -> Boolean
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 **/

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function anyPass(cbs, a) {
  cov_2d3p3u32kl.f[0]++;
  cov_2d3p3u32kl.s[0]++;

  for (var i = (cov_2d3p3u32kl.s[1]++, 0); i < cbs.length; i++) {
    cov_2d3p3u32kl.s[2]++;

    if (cbs[i](a)) {
      cov_2d3p3u32kl.b[0][0]++;
      cov_2d3p3u32kl.s[3]++;
      return true;
    } else {
      cov_2d3p3u32kl.b[0][1]++;
    }
  }

  cov_2d3p3u32kl.s[4]++;
  return false;
}));

/***/ }),

/***/ "./src/ap.js":
/*!*******************!*\
  !*** ./src/ap.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/curry1 */ "./src/_private/curry1.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is */ "./src/is.js");
/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array/fold */ "./src/array/fold.js");
/* harmony import */ var _array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array/map */ "./src/array/map.js");
var cov_19s0l51hxk = function () {
  var path = "/Volumes/BigOne/Github/fun/src/ap.js";
  var hash = "5ba9a2336661477a56069ababb3ec35b272cbe1c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/ap.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 19
        },
        end: {
          line: 18,
          column: 33
        }
      },
      "1": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "2": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 23
        }
      },
      "3": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "4": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 31
        }
      },
      "5": {
        start: {
          line: 25,
          column: 16
        },
        end: {
          line: 25,
          column: 31
        }
      },
      "6": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 68
        }
      },
      "7": {
        start: {
          line: 27,
          column: 26
        },
        end: {
          line: 27,
          column: 58
        }
      }
    },
    fnMap: {
      "0": {
        name: "ap",
        decl: {
          start: {
            line: 20,
            column: 30
          },
          end: {
            line: 20,
            column: 32
          }
        },
        loc: {
          start: {
            line: 20,
            column: 45
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 20
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 25,
            column: 11
          },
          end: {
            line: 25,
            column: 12
          }
        },
        loc: {
          start: {
            line: 25,
            column: 16
          },
          end: {
            line: 25,
            column: 31
          }
        },
        line: 25
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 27,
            column: 14
          },
          end: {
            line: 27,
            column: 15
          }
        },
        loc: {
          start: {
            line: 27,
            column: 26
          },
          end: {
            line: 27,
            column: 58
          }
        },
        line: 27
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        }, {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        }],
        line: 21
      },
      "1": {
        loc: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        }, {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        }],
        line: 24
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "5ba9a2336661477a56069ababb3ec35b272cbe1c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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





var isFunction = (cov_19s0l51hxk.s[0]++, Object(_is__WEBPACK_IMPORTED_MODULE_2__["default"])('Function'));
/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function ap(fns, vals) {
  cov_19s0l51hxk.f[0]++;
  cov_19s0l51hxk.s[1]++;

  if (isFunction(fns.ap)) {
    cov_19s0l51hxk.b[0][0]++;
    cov_19s0l51hxk.s[2]++;
    return fns.ap(vals);
  } else {
    cov_19s0l51hxk.b[0][1]++;
  }

  cov_19s0l51hxk.s[3]++;

  if (isFunction(fns)) {
    cov_19s0l51hxk.b[1][0]++;
    cov_19s0l51hxk.s[4]++;
    return function (x) {
      cov_19s0l51hxk.f[1]++;
      cov_19s0l51hxk.s[5]++;
      return fns(x)(vals(x));
    };
  } else {
    cov_19s0l51hxk.b[1][1]++;
  }

  cov_19s0l51hxk.s[6]++;
  return Object(_array_fold__WEBPACK_IMPORTED_MODULE_3__["default"])(function (acc, f) {
    cov_19s0l51hxk.f[2]++;
    cov_19s0l51hxk.s[7]++;
    return acc.concat(Object(_array_map__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_private_curry1__WEBPACK_IMPORTED_MODULE_1__["default"])(f), vals));
  }, [], fns);
}));

/***/ }),

/***/ "./src/aperture.js":
/*!*************************!*\
  !*** ./src/aperture.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/map.js");
var cov_bhjpkhtsf = function () {
  var path = "/Volumes/BigOne/Github/fun/src/aperture.js";
  var hash = "731ffdaa72771a84302902454be207182953b20d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/aperture.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "1": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 13
        }
      },
      "2": {
        start: {
          line: 14,
          column: 14
        },
        end: {
          line: 14,
          column: 37
        }
      },
      "3": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 55
        }
      },
      "4": {
        start: {
          line: 15,
          column: 28
        },
        end: {
          line: 15,
          column: 49
        }
      }
    },
    fnMap: {
      "0": {
        name: "aperture",
        decl: {
          start: {
            line: 10,
            column: 30
          },
          end: {
            line: 10,
            column: 38
          }
        },
        loc: {
          start: {
            line: 10,
            column: 46
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 15,
            column: 14
          }
        },
        loc: {
          start: {
            line: 15,
            column: 28
          },
          end: {
            line: 15,
            column: 49
          }
        },
        line: 15
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        }, {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "731ffdaa72771a84302902454be207182953b20d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();



/**
 * @function aperture
 * @param n
 * @param arr
 * @returns {*}
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function aperture(n, a) {
  cov_bhjpkhtsf.f[0]++;
  cov_bhjpkhtsf.s[0]++;

  if (a.length < n) {
    cov_bhjpkhtsf.b[0][0]++;
    cov_bhjpkhtsf.s[1]++;
    return [];
  } else {
    cov_bhjpkhtsf.b[0][1]++;
  }

  var res = (cov_bhjpkhtsf.s[2]++, Array(a.length - n + 1));
  cov_bhjpkhtsf.s[3]++;
  return Object(_map__WEBPACK_IMPORTED_MODULE_1__["default"])(function (item, idx) {
    cov_bhjpkhtsf.f[1]++;
    cov_bhjpkhtsf.s[4]++;
    return a.slice(idx, idx + n);
  }, res);
}));

/***/ }),

/***/ "./src/append.js":
/*!***********************!*\
  !*** ./src/append.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ "./src/concat.js");
var cov_1g6hwzzg0s = function () {
  var path = "/Volumes/BigOne/Github/fun/src/append.js";
  var hash = "f568499126a4c24579178b89e926285f24dab2f5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/append.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 29
        }
      }
    },
    fnMap: {
      "0": {
        name: "append",
        decl: {
          start: {
            line: 16,
            column: 30
          },
          end: {
            line: 16,
            column: 36
          }
        },
        loc: {
          start: {
            line: 16,
            column: 48
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "f568499126a4c24579178b89e926285f24dab2f5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function append(el, list) {
  cov_1g6hwzzg0s.f[0]++;
  cov_1g6hwzzg0s.s[0]++;
  return Object(_concat__WEBPACK_IMPORTED_MODULE_1__["default"])(list, [el]);
}));

/***/ }),

/***/ "./src/apply.js":
/*!**********************!*\
  !*** ./src/apply.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_1tpfvcvkrk = function () {
  var path = "/Volumes/BigOne/Github/fun/src/apply.js";
  var hash = "66f39d43414fc484cdfc33e22ffcff1a41153f4d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/apply.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "apply",
        decl: {
          start: {
            line: 17,
            column: 30
          },
          end: {
            line: 17,
            column: 35
          }
        },
        loc: {
          start: {
            line: 17,
            column: 47
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "66f39d43414fc484cdfc33e22ffcff1a41153f4d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function apply(fn, args) {
  cov_1tpfvcvkrk.f[0]++;
  cov_1tpfvcvkrk.s[0]++;
  return fn.apply(fn, args);
}));

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_27gqfr0e9t = function () {
  var path = "/Volumes/BigOne/Github/fun/src/array/concat.js";
  var hash = "3d5a3159131df505a960c097813f3aeea4309ac2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/array/concat.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "concat",
        decl: {
          start: {
            line: 15,
            column: 30
          },
          end: {
            line: 15,
            column: 36
          }
        },
        loc: {
          start: {
            line: 15,
            column: 44
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 15
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "3d5a3159131df505a960c097813f3aeea4309ac2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function arrayConcat
 * @desc Autocurried concatenation function using native concat
 * @param {Array} a1 - Left side of the concatenation
 * @param {Array} a2 - Right side of the concatenation
 * @returns {T[]}
 * @example
 *
 * const startsWithZero = concat([0])
 *const OneTwoThree = startsWithZero([1, 2, 3])
 * // [0, 1, 2, 3]
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function concat(l, r) {
  cov_27gqfr0e9t.f[0]++;
  cov_27gqfr0e9t.s[0]++;
  return Array.prototype.concat(l, r);
}));

/***/ }),

/***/ "./src/array/equals.js":
/*!*****************************!*\
  !*** ./src/array/equals.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../not */ "./src/not.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../equals */ "./src/equals.js");
var cov_2am8q1jjg3 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/array/equals.js";
  var hash = "2e02c910123c5cd2df67f5fcf9bd4c263ccbfe03";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/array/equals.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "1": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 16
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "3": {
        start: {
          line: 16,
          column: 15
        },
        end: {
          line: 16,
          column: 16
        }
      },
      "4": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 45
        }
      },
      "5": {
        start: {
          line: 17,
          column: 33
        },
        end: {
          line: 17,
          column: 45
        }
      },
      "6": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 13
        }
      }
    },
    fnMap: {
      "0": {
        name: "equalsArray",
        decl: {
          start: {
            line: 12,
            column: 30
          },
          end: {
            line: 12,
            column: 41
          }
        },
        loc: {
          start: {
            line: 12,
            column: 49
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        }, {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 45
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 45
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 45
          }
        }],
        line: 17
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "2e02c910123c5cd2df67f5fcf9bd4c263ccbfe03"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function equalsArray
 * @description Autocurried function for deep comparison of arrays
 * @param {a} x - Object to compare of type a
 * @param {a} y - Object x to compare with object x
 * @return {boolean}
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function equalsArray(x, y) {
  cov_2am8q1jjg3.f[0]++;
  cov_2am8q1jjg3.s[0]++;

  if (x.length !== y.length) {
    cov_2am8q1jjg3.b[0][0]++;
    cov_2am8q1jjg3.s[1]++;
    return false;
  } else {
    cov_2am8q1jjg3.b[0][1]++;
  }

  cov_2am8q1jjg3.s[2]++;

  for (var i = (cov_2am8q1jjg3.s[3]++, 0); i < x.length; i++) {
    cov_2am8q1jjg3.s[4]++;

    if (Object(_not__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_equals__WEBPACK_IMPORTED_MODULE_2__["default"])(x[i], y[i]))) {
      cov_2am8q1jjg3.b[1][0]++;
      cov_2am8q1jjg3.s[5]++;
      return false;
    } else {
      cov_2am8q1jjg3.b[1][1]++;
    }
  }

  cov_2am8q1jjg3.s[6]++;
  return true;
}));

/***/ }),

/***/ "./src/array/filter.js":
/*!*****************************!*\
  !*** ./src/array/filter.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_26s805v5nf = function () {
  var path = "/Volumes/BigOne/Github/fun/src/array/filter.js";
  var hash = "1007ce49afa18653c0ec96a0e8af5043a645cc31";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/array/filter.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 10
        },
        end: {
          line: 12,
          column: 12
        }
      },
      "1": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "2": {
        start: {
          line: 13,
          column: 15
        },
        end: {
          line: 13,
          column: 16
        }
      },
      "3": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 30
        }
      },
      "4": {
        start: {
          line: 14,
          column: 18
        },
        end: {
          line: 14,
          column: 30
        }
      },
      "5": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "arrayFilter",
        decl: {
          start: {
            line: 11,
            column: 30
          },
          end: {
            line: 11,
            column: 41
          }
        },
        loc: {
          start: {
            line: 11,
            column: 50
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 11
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 30
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 30
          }
        }, {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 30
          }
        }],
        line: 14
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1007ce49afa18653c0ec96a0e8af5043a645cc31"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function arrayFilter
 * @desc Autocurried function to filter an array
 * @param {Function} fn - Predicate function
 * @param {Array} a - Array to filter
 * @returns {Array}
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function arrayFilter(fn, a) {
  cov_26s805v5nf.f[0]++;
  var r = (cov_26s805v5nf.s[0]++, []);
  cov_26s805v5nf.s[1]++;

  for (var i = (cov_26s805v5nf.s[2]++, 0); i < a.length; i++) {
    cov_26s805v5nf.s[3]++;

    if (fn(a[i])) {
      cov_26s805v5nf.b[0][0]++;
      cov_26s805v5nf.s[4]++;
      r.push(a[i]);
    } else {
      cov_26s805v5nf.b[0][1]++;
    }
  }

  cov_26s805v5nf.s[5]++;
  return r;
}));

/***/ }),

/***/ "./src/array/fold.js":
/*!***************************!*\
  !*** ./src/array/fold.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_21cefy2n4e = function () {
  var path = "/Volumes/BigOne/Github/fun/src/array/fold.js";
  var hash = "c8293b5f9e82b46cc84cb637842af5840379952f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/array/fold.js",
    statementMap: {
      "0": {
        start: {
          line: 27,
          column: 10
        },
        end: {
          line: 27,
          column: 12
        }
      },
      "1": {
        start: {
          line: 28,
          column: 12
        },
        end: {
          line: 28,
          column: 20
        }
      },
      "2": {
        start: {
          line: 29,
          column: 10
        },
        end: {
          line: 29,
          column: 14
        }
      },
      "3": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 32,
          column: 3
        }
      },
      "4": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 25
        }
      },
      "5": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "fold",
        decl: {
          start: {
            line: 26,
            column: 30
          },
          end: {
            line: 26,
            column: 34
          }
        },
        loc: {
          start: {
            line: 26,
            column: 49
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 26
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c8293b5f9e82b46cc84cb637842af5840379952f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function fold
 * @description Autocurried function which returns a single item by mapping over the provided array and calls an iterator function
 * @param {cbFunction} cb - Callback function to modify the item
 * @param {*} init - Initial value
 * @param {Array} a - Array with items to modify by the cb function
 * @returns {*}
 * @see reduce
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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function fold(cb, init, a) {
  cov_21cefy2n4e.f[0]++;
  var i = (cov_21cefy2n4e.s[0]++, -1);
  var l = (cov_21cefy2n4e.s[1]++, a.length);
  var r = (cov_21cefy2n4e.s[2]++, init);
  cov_21cefy2n4e.s[3]++;

  while (++i < l) {
    cov_21cefy2n4e.s[4]++;
    r = cb(r, a[i], i, a);
  }

  cov_21cefy2n4e.s[5]++;
  return r;
}));

/***/ }),

/***/ "./src/array/is.js":
/*!*************************!*\
  !*** ./src/array/is.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./src/is.js");
var cov_2iapnuokfj = function () {
  var path = "/Volumes/BigOne/Github/fun/src/array/is.js";
  var hash = "06dcb250c0259d358aba406cb656d504045b08f5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/array/is.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "06dcb250c0259d358aba406cb656d504045b08f5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function isArray
 * @description Function Checks if the provided object is an array
 * @param {*} Object to verifiy
 * @return {Boolean}
 * @since 1.0.2
 * @example
 *
 * const result = isArray([1,1,1])
 * // result = true
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Array'));

/***/ }),

/***/ "./src/array/map.js":
/*!**************************!*\
  !*** ./src/array/map.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_z06qrw3mm = function () {
  var path = "/Volumes/BigOne/Github/fun/src/array/map.js";
  var hash = "68253f87a4046d93a9862482f7ac5831083cf419";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/array/map.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 10
        },
        end: {
          line: 19,
          column: 12
        }
      },
      "1": {
        start: {
          line: 20,
          column: 12
        },
        end: {
          line: 20,
          column: 20
        }
      },
      "2": {
        start: {
          line: 21,
          column: 12
        },
        end: {
          line: 21,
          column: 24
        }
      },
      "3": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "4": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 25
        }
      },
      "5": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "map",
        decl: {
          start: {
            line: 18,
            column: 30
          },
          end: {
            line: 18,
            column: 33
          }
        },
        loc: {
          start: {
            line: 18,
            column: 42
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "68253f87a4046d93a9862482f7ac5831083cf419"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map(cb, a) {
  cov_z06qrw3mm.f[0]++;
  var i = (cov_z06qrw3mm.s[0]++, -1);
  var l = (cov_z06qrw3mm.s[1]++, a.length);
  var r = (cov_z06qrw3mm.s[2]++, new Array(l));
  cov_z06qrw3mm.s[3]++;

  while (++i < l) {
    cov_z06qrw3mm.s[4]++;
    r[i] = cb(a[i], i, a);
  }

  cov_z06qrw3mm.s[5]++;
  return r;
}));

/***/ }),

/***/ "./src/array/to.js":
/*!*************************!*\
  !*** ./src/array/to.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toArray; });
var cov_2bb0kw89ib = function () {
  var path = "/Volumes/BigOne/Github/fun/src/array/to.js";
  var hash = "fb4e8ae097c96a4ea5a9cc90d60199cd1315e80d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/array/to.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "toArray",
        decl: {
          start: {
            line: 18,
            column: 24
          },
          end: {
            line: 18,
            column: 31
          }
        },
        loc: {
          start: {
            line: 18,
            column: 36
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 18
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 9
          },
          end: {
            line: 19,
            column: 55
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 19,
            column: 26
          },
          end: {
            line: 19,
            column: 32
          }
        }, {
          start: {
            line: 19,
            column: 35
          },
          end: {
            line: 19,
            column: 55
          }
        }],
        line: 19
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "fb4e8ae097c96a4ea5a9cc90d60199cd1315e80d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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
  cov_2bb0kw89ib.f[0]++;
  cov_2bb0kw89ib.s[0]++;
  return x.length === 1 ? (cov_2bb0kw89ib.b[0][0]++, [x[0]]) : (cov_2bb0kw89ib.b[0][1]++, Array.apply(null, x));
}
;

/***/ }),

/***/ "./src/array/union.js":
/*!****************************!*\
  !*** ./src/array/union.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_2fkdegspp1 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/array/union.js";
  var hash = "c2b98c8c7ec1c6c47a56980784760370cf1421fe";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/array/union.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 43
        }
      }
    },
    fnMap: {
      "0": {
        name: "unionArray",
        decl: {
          start: {
            line: 15,
            column: 30
          },
          end: {
            line: 15,
            column: 40
          }
        },
        loc: {
          start: {
            line: 15,
            column: 50
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 15
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c2b98c8c7ec1c6c47a56980784760370cf1421fe"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function unionArray(aL, aR) {
  cov_2fkdegspp1.f[0]++;
  cov_2fkdegspp1.s[0]++;
  return Array.from(new Set(aL.concat(aR)));
}));

/***/ }),

/***/ "./src/binary.js":
/*!***********************!*\
  !*** ./src/binary.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ "./src/_private/curry1.js");
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_26sxq5qp70 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/binary.js";
  var hash = "11d1e688c612a88ea833b4a3e228b5d7f023de3b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/binary.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 12,
          column: 4
        }
      },
      "1": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "binary",
        decl: {
          start: {
            line: 9,
            column: 31
          },
          end: {
            line: 9,
            column: 37
          }
        },
        loc: {
          start: {
            line: 9,
            column: 43
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 15
          },
          end: {
            line: 10,
            column: 16
          }
        },
        loc: {
          start: {
            line: 10,
            column: 31
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "11d1e688c612a88ea833b4a3e228b5d7f023de3b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function binary
 * @param cb
 * @returns {function(*=, *=): *}
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function binary(cb) {
  cov_26sxq5qp70.f[0]++;
  cov_26sxq5qp70.s[0]++;
  return Object(_curry__WEBPACK_IMPORTED_MODULE_1__["default"])(function (a, b) {
    cov_26sxq5qp70.f[1]++;
    cov_26sxq5qp70.s[1]++;
    return cb(a, b);
  });
}));

/***/ }),

/***/ "./src/bind.js":
/*!*********************!*\
  !*** ./src/bind.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_146y2cwad8 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/bind.js";
  var hash = "c4751480906b2b02e6fa58acce5cdb85d6c87516";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/bind.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "bind",
        decl: {
          start: {
            line: 10,
            column: 30
          },
          end: {
            line: 10,
            column: 34
          }
        },
        loc: {
          start: {
            line: 10,
            column: 49
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c4751480906b2b02e6fa58acce5cdb85d6c87516"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();


/**
 * @function bind
 * @description Bind a function to a context
 * @param {function }fn
 * @param {*} context
 * @returns {*}
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function bind(fn, context) {
  cov_146y2cwad8.f[0]++;
  cov_146y2cwad8.s[0]++;
  return fn.bind(context);
}));

/***/ }),

/***/ "./src/boolean/F.js":
/*!**************************!*\
  !*** ./src/boolean/F.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../always */ "./src/always.js");
var cov_29hjj0f9od = function () {
  var path = "/Volumes/BigOne/Github/fun/src/boolean/F.js";
  var hash = "9d0ab967dfe3318effb4a8045459c099915ea2fd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/boolean/F.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "9d0ab967dfe3318effb4a8045459c099915ea2fd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Always returns a function with a False boolean
 *
 * @function F
 * @description Always returns a function with a False boolean
 * @since v1.0.2
 * @param {*} a
 * @return {Function}
 **/

/* harmony default export */ __webpack_exports__["default"] = (Object(_always__WEBPACK_IMPORTED_MODULE_0__["default"])(false));

/***/ }),

/***/ "./src/boolean/T.js":
/*!**************************!*\
  !*** ./src/boolean/T.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../always */ "./src/always.js");
var cov_1o4y2ltkcx = function () {
  var path = "/Volumes/BigOne/Github/fun/src/boolean/T.js";
  var hash = "49132f42eed4b8ec858d499404d0feed38dc1d34";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/boolean/T.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "49132f42eed4b8ec858d499404d0feed38dc1d34"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Always returns a function with a False boolean
 *
 * @function T
 * @description Always returns a function with a False boolean
 * @since v1.0.2
 * @param {*} a
 * @return {Function}
 **/

/* harmony default export */ __webpack_exports__["default"] = (Object(_always__WEBPACK_IMPORTED_MODULE_0__["default"])(true));

/***/ }),

/***/ "./src/boolean/both.js":
/*!*****************************!*\
  !*** ./src/boolean/both.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lift */ "./src/lift.js");
/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../and */ "./src/and.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../is */ "./src/is.js");
var cov_je9pmxsxz = function () {
  var path = "/Volumes/BigOne/Github/fun/src/boolean/both.js";
  var hash = "9b110fae8933cb611db635356ac65c708a853d77";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/boolean/both.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 18,
          column: 25
        }
      },
      "1": {
        start: {
          line: 17,
          column: 26
        },
        end: {
          line: 17,
          column: 89
        }
      }
    },
    fnMap: {
      "0": {
        name: "both",
        decl: {
          start: {
            line: 15,
            column: 30
          },
          end: {
            line: 15,
            column: 34
          }
        },
        loc: {
          start: {
            line: 15,
            column: 46
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 15
      },
      "1": {
        name: "_both",
        decl: {
          start: {
            line: 17,
            column: 15
          },
          end: {
            line: 17,
            column: 20
          }
        },
        loc: {
          start: {
            line: 17,
            column: 24
          },
          end: {
            line: 17,
            column: 91
          }
        },
        line: 17
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 9
          },
          end: {
            line: 18,
            column: 25
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 17,
            column: 6
          },
          end: {
            line: 17,
            column: 91
          }
        }, {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 18,
            column: 25
          }
        }],
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 17,
            column: 33
          },
          end: {
            line: 17,
            column: 89
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 17,
            column: 33
          },
          end: {
            line: 17,
            column: 59
          }
        }, {
          start: {
            line: 17,
            column: 63
          },
          end: {
            line: 17,
            column: 89
          }
        }],
        line: 17
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "9b110fae8933cb611db635356ac65c708a853d77"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Returns true when both predicates return true
 *
 * @function
 * @since v1.0.2
 * @param {Function} fn1 A predicate function
 * @param {Function} fn2 A predicate function
 * @return {Boolean}
 **/




/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function both(fn1, fn2) {
  cov_je9pmxsxz.f[0]++;
  cov_je9pmxsxz.s[0]++;
  return Object(_is__WEBPACK_IMPORTED_MODULE_3__["default"])('Function')(fn1) ? (cov_je9pmxsxz.b[0][0]++, function _both() {
    cov_je9pmxsxz.f[1]++;
    cov_je9pmxsxz.s[1]++;
    return (cov_je9pmxsxz.b[1][0]++, fn1.apply(this, arguments)) && (cov_je9pmxsxz.b[1][1]++, fn2.apply(this, arguments));
  }) : (cov_je9pmxsxz.b[0][1]++, Object(_lift__WEBPACK_IMPORTED_MODULE_1__["default"])(_and__WEBPACK_IMPORTED_MODULE_2__["default"])(fn1, fn2));
}));

/***/ }),

/***/ "./src/boolean/is.js":
/*!***************************!*\
  !*** ./src/boolean/is.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./src/is.js");
var cov_x0qp7q4g6 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/boolean/is.js";
  var hash = "53e255387612840f4c0544bbe65554d9d7b540d8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/boolean/is.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "53e255387612840f4c0544bbe65554d9d7b540d8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Boolean'));

/***/ }),

/***/ "./src/call.js":
/*!*********************!*\
  !*** ./src/call.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_2240h9ejxk = function () {
  var path = "/Volumes/BigOne/Github/fun/src/call.js";
  var hash = "9420dbe9c7cb3741afbaed2d9ae3219d533decae";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/call.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 50
        }
      }
    },
    fnMap: {
      "0": {
        name: "call",
        decl: {
          start: {
            line: 9,
            column: 30
          },
          end: {
            line: 9,
            column: 34
          }
        },
        loc: {
          start: {
            line: 9,
            column: 40
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "9420dbe9c7cb3741afbaed2d9ae3219d533decae"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function call
 * @param fn
 * @returns {*}
 */
// import curry1 from './_private/curry1'

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function call(fn) {
  cov_2240h9ejxk.f[0]++;
  cov_2240h9ejxk.s[0]++;
  return fn.apply(fn, [].slice.call(arguments, 1));
}));

/***/ }),

/***/ "./src/complement.js":
/*!***************************!*\
  !*** ./src/complement.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lift */ "./src/lift.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not */ "./src/not.js");
var cov_fazxjlfyf = function () {
  var path = "/Volumes/BigOne/Github/fun/src/complement.js";
  var hash = "58b031a9978c5f33cbd84e398231f2f8fcaf85a1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/complement.js",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 19
        },
        end: {
          line: 21,
          column: 28
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "58b031a9978c5f33cbd84e398231f2f8fcaf85a1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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


var complement = (cov_fazxjlfyf.s[0]++, Object(_lift__WEBPACK_IMPORTED_MODULE_0__["default"])(_not__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (complement);

/***/ }),

/***/ "./src/compose.js":
/*!************************!*\
  !*** ./src/compose.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compose; });
var cov_8hjqg4hn4 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/compose.js";
  var hash = "ccb52153bed86d284215e24b9eba939907701f50";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/compose.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 12
        },
        end: {
          line: 6,
          column: 49
        }
      },
      "1": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "2": {
        start: {
          line: 9,
          column: 15
        },
        end: {
          line: 9,
          column: 34
        }
      },
      "3": {
        start: {
          line: 10,
          column: 17
        },
        end: {
          line: 10,
          column: 46
        }
      },
      "4": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 26
        }
      },
      "5": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 17,
          column: 5
        }
      },
      "6": {
        start: {
          line: 14,
          column: 17
        },
        end: {
          line: 14,
          column: 23
        }
      },
      "7": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 37
        }
      },
      "8": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "compose",
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 31
          }
        },
        loc: {
          start: {
            line: 5,
            column: 35
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "_compose",
        decl: {
          start: {
            line: 8,
            column: 18
          },
          end: {
            line: 8,
            column: 26
          }
        },
        loc: {
          start: {
            line: 8,
            column: 30
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 8
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ccb52153bed86d284215e24b9eba939907701f50"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function compose
 * @returns {function(): *}
 */
function compose() {
  cov_8hjqg4hn4.f[0]++;
  var fns = (cov_8hjqg4hn4.s[0]++, Array.prototype.slice.call(arguments));
  cov_8hjqg4hn4.s[1]++;
  return function _compose() {
    cov_8hjqg4hn4.f[1]++;
    var init = (cov_8hjqg4hn4.s[2]++, fns[fns.length - 1]);
    var result = (cov_8hjqg4hn4.s[3]++, [init.apply(init, arguments)]);
    var i = (cov_8hjqg4hn4.s[4]++, fns.length - 2);
    cov_8hjqg4hn4.s[5]++;

    for (i; i >= 0; --i) {
      var fn = (cov_8hjqg4hn4.s[6]++, fns[i]);
      cov_8hjqg4hn4.s[7]++;
      result = [fn.apply(fn, result)];
    }

    cov_8hjqg4hn4.s[8]++;
    return result[0];
  };
}
;

/***/ }),

/***/ "./src/concat.js":
/*!***********************!*\
  !*** ./src/concat.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/concat */ "./src/array/concat.js");
/* harmony import */ var _string_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string/concat */ "./src/string/concat.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./src/type.js");
var cov_1o7f0hcr1s = function () {
  var path = "/Volumes/BigOne/Github/fun/src/concat.js";
  var hash = "48a568a8181c80c3d28f265b180bb148b8148de2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/concat.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 18
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "1": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "concat",
        decl: {
          start: {
            line: 17,
            column: 30
          },
          end: {
            line: 17,
            column: 36
          }
        },
        loc: {
          start: {
            line: 17,
            column: 44
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "48a568a8181c80c3d28f265b180bb148b8148de2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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




/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function concat(a, b) {
  cov_1o7f0hcr1s.f[0]++;
  var typeMap = (cov_1o7f0hcr1s.s[0]++, {
    'String': _string_concat__WEBPACK_IMPORTED_MODULE_2__["default"],
    'Array': _array_concat__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
  cov_1o7f0hcr1s.s[1]++;
  return typeMap[Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(a)](a, b);
}));

/***/ }),

/***/ "./src/cond.js":
/*!*********************!*\
  !*** ./src/cond.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cond; });
var cov_v2ue6u7j6 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/cond.js";
  var hash = "39142835dd97dd009aa13a12944318f312387381";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/cond.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 11,
          column: 3
        }
      },
      "1": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 10,
          column: 5
        }
      },
      "2": {
        start: {
          line: 8,
          column: 17
        },
        end: {
          line: 8,
          column: 18
        }
      },
      "3": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 55
        }
      },
      "4": {
        start: {
          line: 9,
          column: 30
        },
        end: {
          line: 9,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "cond",
        decl: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 28
          }
        },
        loc: {
          start: {
            line: 6,
            column: 37
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 7,
            column: 10
          }
        },
        loc: {
          start: {
            line: 7,
            column: 26
          },
          end: {
            line: 11,
            column: 3
          }
        },
        line: 7
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 6
          },
          end: {
            line: 9,
            column: 55
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 9,
            column: 6
          },
          end: {
            line: 9,
            column: 55
          }
        }, {
          start: {
            line: 9,
            column: 6
          },
          end: {
            line: 9,
            column: 55
          }
        }],
        line: 9
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "39142835dd97dd009aa13a12944318f312387381"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function cond
 * @param conds
 * @returns {Function}
 */
function cond(conds) {
  cov_v2ue6u7j6.f[0]++;
  cov_v2ue6u7j6.s[0]++;
  return function (value) {
    cov_v2ue6u7j6.f[1]++;
    cov_v2ue6u7j6.s[1]++;

    for (var i = (cov_v2ue6u7j6.s[2]++, 0); i < conds.length; i++) {
      cov_v2ue6u7j6.s[3]++;

      if (conds[i][0](value)) {
        cov_v2ue6u7j6.b[0][0]++;
        cov_v2ue6u7j6.s[4]++;
        return conds[i][1](value);
      } else {
        cov_v2ue6u7j6.b[0][1]++;
      }
    }
  };
}

/***/ }),

/***/ "./src/curry.js":
/*!**********************!*\
  !*** ./src/curry.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curry; });
var cov_zla2s4w5h = function () {
  var path = "/Volumes/BigOne/Github/fun/src/curry.js";
  var hash = "55a99dffa57c5afbe0d7ffe381f8e75f7588efd9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/curry.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 18
        },
        end: {
          line: 7,
          column: 28
        }
      },
      "1": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 11,
          column: 3
        }
      },
      "2": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 14
        }
      },
      "3": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 27
        }
      },
      "4": {
        start: {
          line: 15,
          column: 17
        },
        end: {
          line: 15,
          column: 33
        }
      },
      "5": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 18,
          column: 29
        }
      },
      "6": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 24,
          column: 5
        }
      },
      "7": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 64
        }
      }
    },
    fnMap: {
      "0": {
        name: "curry",
        decl: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 29
          }
        },
        loc: {
          start: {
            line: 6,
            column: 36
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "recurse",
        decl: {
          start: {
            line: 14,
            column: 11
          },
          end: {
            line: 14,
            column: 18
          }
        },
        loc: {
          start: {
            line: 14,
            column: 31
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 14
      },
      "2": {
        name: "createRecurser",
        decl: {
          start: {
            line: 21,
            column: 11
          },
          end: {
            line: 21,
            column: 25
          }
        },
        loc: {
          start: {
            line: 21,
            column: 32
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 21
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 22,
            column: 11
          },
          end: {
            line: 22,
            column: 12
          }
        },
        loc: {
          start: {
            line: 22,
            column: 23
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        }, {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 11
          },
          end: {
            line: 18,
            column: 29
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 17,
            column: 28
          }
        }, {
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 29
          }
        }],
        line: 16
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "55a99dffa57c5afbe0d7ffe381f8e75f7588efd9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/* eslint-disable no-use-before-define */

/**
 * @function curry
 * @description Autocurries the provided function
 */
function curry(fun) {
  cov_zla2s4w5h.f[0]++;
  var argslen = (cov_zla2s4w5h.s[0]++, fun.length);
  cov_zla2s4w5h.s[1]++;

  if (argslen === 0) {
    cov_zla2s4w5h.b[0][0]++;
    cov_zla2s4w5h.s[2]++;
    return fun;
  } else {
    cov_zla2s4w5h.b[0][1]++;
  }

  cov_zla2s4w5h.s[3]++;
  return createRecurser([]);

  function recurse(acc, args) {
    cov_zla2s4w5h.f[1]++;

    var _acc = (cov_zla2s4w5h.s[4]++, acc.concat(args));

    cov_zla2s4w5h.s[5]++;
    return _acc.length < argslen ? (cov_zla2s4w5h.b[1][0]++, createRecurser(_acc)) : (cov_zla2s4w5h.b[1][1]++, fun.apply(this, _acc));
  }

  function createRecurser(acc) {
    cov_zla2s4w5h.f[2]++;
    cov_zla2s4w5h.s[6]++;
    return function () {
      cov_zla2s4w5h.f[3]++;
      cov_zla2s4w5h.s[7]++;
      return recurse(acc, Array.prototype.slice.call(arguments));
    };
  }
}

/***/ }),

/***/ "./src/date/diffDate.js":
/*!******************************!*\
  !*** ./src/date/diffDate.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_1duswev4w4 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/date/diffDate.js";
  var hash = "456f6f7ddeb013e44cc12893a709dedfd0756545";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/date/diffDate.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 62
        }
      }
    },
    fnMap: {
      "0": {
        name: "diffDate",
        decl: {
          start: {
            line: 10,
            column: 30
          },
          end: {
            line: 10,
            column: 38
          }
        },
        loc: {
          start: {
            line: 10,
            column: 52
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "456f6f7ddeb013e44cc12893a709dedfd0756545"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function diffDate
 * @description Returns the difference between 2 dates in millisecond
 * @param {Date} start - Start date
 * @param {Date} end - End date
 * @return {number} REturn the difference in milliseconds
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function diffDate(start, end) {
  cov_1duswev4w4.f[0]++;
  cov_1duswev4w4.s[0]++;
  return new Date(start).getTime() - new Date(end).getTime();
}));

/***/ }),

/***/ "./src/date/is.js":
/*!************************!*\
  !*** ./src/date/is.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./src/is.js");
var cov_2cfbi8rw7n = function () {
  var path = "/Volumes/BigOne/Github/fun/src/date/is.js";
  var hash = "32edce6a64c44ef417a1ba4b52fdedcb82cde48d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/date/is.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "32edce6a64c44ef417a1ba4b52fdedcb82cde48d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Created by dierickx.len on 01/04/2017.
 */

/**
 * Created by dierickx.len on 01/04/2017.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Date'));

/***/ }),

/***/ "./src/date/isFutureDate.js":
/*!**********************************!*\
  !*** ./src/date/isFutureDate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diffDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diffDate */ "./src/date/diffDate.js");
var cov_aw0mc38gy = function () {
  var path = "/Volumes/BigOne/Github/fun/src/date/isFutureDate.js";
  var hash = "fd54d7048a374f1712b5c89a627c3aaa2af1898a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/date/isFutureDate.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 15
          },
          end: {
            line: 6,
            column: 16
          }
        },
        loc: {
          start: {
            line: 6,
            column: 22
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "fd54d7048a374f1712b5c89a627c3aaa2af1898a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Created by dierickx.len on 09/03/2017.
 */

/* harmony default export */ __webpack_exports__["default"] = (function (d) {
  cov_aw0mc38gy.f[0]++;
  cov_aw0mc38gy.s[0]++;
  return Object(_diffDate__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date())(d) < 0;
});

/***/ }),

/***/ "./src/date/isValid.js":
/*!*****************************!*\
  !*** ./src/date/isValid.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isValid; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./src/date/is.js");
var cov_2lzvwn2c41 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/date/isValid.js";
  var hash = "f1d7ef7b184999752deb45f274dc9d8529ad9aac";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/date/isValid.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 43
        }
      }
    },
    fnMap: {
      "0": {
        name: "isValid",
        decl: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 31
          }
        },
        loc: {
          start: {
            line: 6,
            column: 36
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 8,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 8,
            column: 18
          }
        }, {
          start: {
            line: 8,
            column: 22
          },
          end: {
            line: 8,
            column: 43
          }
        }],
        line: 8
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "f1d7ef7b184999752deb45f274dc9d8529ad9aac"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 *
 */

function isValid(x) {
  cov_2lzvwn2c41.f[0]++;
  cov_2lzvwn2c41.s[0]++;
  // noinspection JSCheckFunctionSignatures
  return (cov_2lzvwn2c41.b[0][0]++, Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])(x)) && (cov_2lzvwn2c41.b[0][1]++, isFinite(x.valueOf()));
}
;

/***/ }),

/***/ "./src/date/toDay.js":
/*!***************************!*\
  !*** ./src/date/toDay.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cov_1qc9el5k6q = function () {
  var path = "/Volumes/BigOne/Github/fun/src/date/toDay.js";
  var hash = "965ca836bbfd26f4b1aa9a9f0739bc78c8b48b00";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/date/toDay.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 15
          },
          end: {
            line: 4,
            column: 16
          }
        },
        loc: {
          start: {
            line: 4,
            column: 22
          },
          end: {
            line: 4,
            column: 34
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "965ca836bbfd26f4b1aa9a9f0739bc78c8b48b00"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Created by dierickx.len on 26/03/2017.
 */
/* harmony default export */ __webpack_exports__["default"] = (function (d) {
  cov_1qc9el5k6q.f[0]++;
  cov_1qc9el5k6q.s[0]++;
  return d / 86400000;
}); // 24*60*60*1000 = 86400000

/***/ }),

/***/ "./src/date/toHour.js":
/*!****************************!*\
  !*** ./src/date/toHour.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cov_4nwpr1qmg = function () {
  var path = "/Volumes/BigOne/Github/fun/src/date/toHour.js";
  var hash = "b4b54a597e95cd3c50a9eae3b7508a290fe07be9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/date/toHour.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 15
          },
          end: {
            line: 4,
            column: 16
          }
        },
        loc: {
          start: {
            line: 4,
            column: 22
          },
          end: {
            line: 4,
            column: 33
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "b4b54a597e95cd3c50a9eae3b7508a290fe07be9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Created by dierickx.len on 26/03/2017.
 */
/* harmony default export */ __webpack_exports__["default"] = (function (d) {
  cov_4nwpr1qmg.f[0]++;
  cov_4nwpr1qmg.s[0]++;
  return d / 3600000;
}); // 60*60*1000 = 3600000

/***/ }),

/***/ "./src/date/toMinutes.js":
/*!*******************************!*\
  !*** ./src/date/toMinutes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cov_21xl3r2m55 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/date/toMinutes.js";
  var hash = "4e5308289ef13076572596ce8e706d45d9e673e7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/date/toMinutes.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 15
          },
          end: {
            line: 4,
            column: 16
          }
        },
        loc: {
          start: {
            line: 4,
            column: 22
          },
          end: {
            line: 4,
            column: 31
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "4e5308289ef13076572596ce8e706d45d9e673e7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Created by dierickx.len on 26/03/2017.
 */
/* harmony default export */ __webpack_exports__["default"] = (function (d) {
  cov_21xl3r2m55.f[0]++;
  cov_21xl3r2m55.s[0]++;
  return d / 60000;
}); // 60*1000 = 60000

/***/ }),

/***/ "./src/date/toSeconds.js":
/*!*******************************!*\
  !*** ./src/date/toSeconds.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cov_1m3o1otlt0 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/date/toSeconds.js";
  var hash = "b1aa93fd10ae9366202fb031ab28e60803e0a58a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/date/toSeconds.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 30
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 15
          },
          end: {
            line: 4,
            column: 16
          }
        },
        loc: {
          start: {
            line: 4,
            column: 22
          },
          end: {
            line: 4,
            column: 30
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "b1aa93fd10ae9366202fb031ab28e60803e0a58a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Created by dierickx.len on 26/03/2017.
 */
/* harmony default export */ __webpack_exports__["default"] = (function (d) {
  cov_1m3o1otlt0.f[0]++;
  cov_1m3o1otlt0.s[0]++;
  return d / 1000;
});

/***/ }),

/***/ "./src/defaultTo.js":
/*!**************************!*\
  !*** ./src/defaultTo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_9s06g79l0 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/defaultTo.js";
  var hash = "e2a02d2b7d5796b634b1786058d9cdbc49823c79";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/defaultTo.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "defaultTo",
        decl: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 14,
            column: 39
          }
        },
        loc: {
          start: {
            line: 14,
            column: 47
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 14
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 9
          },
          end: {
            line: 16,
            column: 37
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 16,
            column: 32
          },
          end: {
            line: 16,
            column: 33
          }
        }, {
          start: {
            line: 16,
            column: 36
          },
          end: {
            line: 16,
            column: 37
          }
        }],
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 9
          },
          end: {
            line: 16,
            column: 29
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 16,
            column: 9
          },
          end: {
            line: 16,
            column: 18
          }
        }, {
          start: {
            line: 16,
            column: 22
          },
          end: {
            line: 16,
            column: 29
          }
        }],
        line: 16
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e2a02d2b7d5796b634b1786058d9cdbc49823c79"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function defaultTo(d, v) {
  cov_9s06g79l0.f[0]++;
  cov_9s06g79l0.s[0]++;
  // eslint-disable-next-line no-self-compare
  return (cov_9s06g79l0.b[1][0]++, v == null) || (cov_9s06g79l0.b[1][1]++, v !== v) ? (cov_9s06g79l0.b[0][0]++, d) : (cov_9s06g79l0.b[0][1]++, v);
}));

/***/ }),

/***/ "./src/empty.js":
/*!**********************!*\
  !*** ./src/empty.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return empty; });
var cov_2k8362fw0c = function () {
  var path = "/Volumes/BigOne/Github/fun/src/empty.js";
  var hash = "a53ec3e4fac1d2b3b7c72d4ffa392551205fad93";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/empty.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 28
        }
      }
    },
    fnMap: {
      "0": {
        name: "empty",
        decl: {
          start: {
            line: 7,
            column: 24
          },
          end: {
            line: 7,
            column: 29
          }
        },
        loc: {
          start: {
            line: 7,
            column: 34
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a53ec3e4fac1d2b3b7c72d4ffa392551205fad93"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**

 * @function empty
 * @description Returns the empty equivalent of the first argument
 */
function empty(x) {
  cov_2k8362fw0c.f[0]++;
  cov_2k8362fw0c.s[0]++;
  return new x.constructor();
}
;

/***/ }),

/***/ "./src/equals.js":
/*!***********************!*\
  !*** ./src/equals.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exists */ "./src/exists.js");
/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identical */ "./src/identical.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./src/type.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not */ "./src/not.js");
/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./or */ "./src/or.js");
/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object/is */ "./src/object/is.js");
/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/is */ "./src/array/is.js");
/* harmony import */ var _boolean_is__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./boolean/is */ "./src/boolean/is.js");
/* harmony import */ var _number_is__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./number/is */ "./src/number/is.js");
/* harmony import */ var _string_is__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./string/is */ "./src/string/is.js");
/* harmony import */ var _date_is__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./date/is */ "./src/date/is.js");
/* harmony import */ var _array_equals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/equals */ "./src/array/equals.js");
/* harmony import */ var _object_equals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./object/equals */ "./src/object/equals.js");
var cov_26idc6tklo = function () {
  var path = "/Volumes/BigOne/Github/fun/src/equals.js";
  var hash = "e5e7ef02cfbe82dd426969d339e6e1af12021ba5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/equals.js",
    statementMap: {
      "0": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 34
        }
      },
      "1": {
        start: {
          line: 36,
          column: 23
        },
        end: {
          line: 36,
          column: 34
        }
      },
      "2": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
          column: 39
        }
      },
      "3": {
        start: {
          line: 38,
          column: 27
        },
        end: {
          line: 38,
          column: 39
        }
      },
      "4": {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 40,
          column: 54
        }
      },
      "5": {
        start: {
          line: 40,
          column: 42
        },
        end: {
          line: 40,
          column: 54
        }
      },
      "6": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 42,
          column: 51
        }
      },
      "7": {
        start: {
          line: 42,
          column: 39
        },
        end: {
          line: 42,
          column: 51
        }
      },
      "8": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 46,
          column: 3
        }
      },
      "9": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 46
        }
      },
      "10": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 51,
          column: 3
        }
      },
      "11": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 28
        }
      },
      "12": {
        start: {
          line: 49,
          column: 9
        },
        end: {
          line: 51,
          column: 3
        }
      },
      "13": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 29
        }
      },
      "14": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 52,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "equals",
        decl: {
          start: {
            line: 35,
            column: 30
          },
          end: {
            line: 35,
            column: 36
          }
        },
        loc: {
          start: {
            line: 35,
            column: 44
          },
          end: {
            line: 53,
            column: 1
          }
        },
        line: 35
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 36,
            column: 34
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 36,
            column: 34
          }
        }, {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 36,
            column: 34
          }
        }],
        line: 36
      },
      "1": {
        loc: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 38,
            column: 39
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 38,
            column: 39
          }
        }, {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 38,
            column: 39
          }
        }],
        line: 38
      },
      "2": {
        loc: {
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 40,
            column: 54
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 40,
            column: 54
          }
        }, {
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 40,
            column: 54
          }
        }],
        line: 40
      },
      "3": {
        loc: {
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 42,
            column: 51
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 42,
            column: 51
          }
        }, {
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 42,
            column: 51
          }
        }],
        line: 42
      },
      "4": {
        loc: {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        }, {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        }],
        line: 44
      },
      "5": {
        loc: {
          start: {
            line: 44,
            column: 6
          },
          end: {
            line: 44,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 44,
            column: 6
          },
          end: {
            line: 44,
            column: 17
          }
        }, {
          start: {
            line: 44,
            column: 21
          },
          end: {
            line: 44,
            column: 33
          }
        }, {
          start: {
            line: 44,
            column: 37
          },
          end: {
            line: 44,
            column: 48
          }
        }, {
          start: {
            line: 44,
            column: 52
          },
          end: {
            line: 44,
            column: 61
          }
        }],
        line: 44
      },
      "6": {
        loc: {
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        }, {
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        }],
        line: 47
      },
      "7": {
        loc: {
          start: {
            line: 49,
            column: 9
          },
          end: {
            line: 51,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 49,
            column: 9
          },
          end: {
            line: 51,
            column: 3
          }
        }, {
          start: {
            line: 49,
            column: 9
          },
          end: {
            line: 51,
            column: 3
          }
        }],
        line: 49
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0, 0, 0],
      "6": [0, 0],
      "7": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e5e7ef02cfbe82dd426969d339e6e1af12021ba5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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














/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function equals(x, y) {
  cov_26idc6tklo.f[0]++;
  cov_26idc6tklo.s[0]++;

  if (Object(_identical__WEBPACK_IMPORTED_MODULE_2__["default"])(x, y)) {
    cov_26idc6tklo.b[0][0]++;
    cov_26idc6tklo.s[1]++;
    return true;
  } else {
    cov_26idc6tklo.b[0][1]++;
  }

  cov_26idc6tklo.s[2]++;

  if (Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(x) !== Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(y)) {
    cov_26idc6tklo.b[1][0]++;
    cov_26idc6tklo.s[3]++;
    return false;
  } else {
    cov_26idc6tklo.b[1][1]++;
  }

  cov_26idc6tklo.s[4]++;

  if (Object(_or__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_not__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(x)), Object(_not__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(y)))) {
    cov_26idc6tklo.b[2][0]++;
    cov_26idc6tklo.s[5]++;
    return false;
  } else {
    cov_26idc6tklo.b[2][1]++;
  }

  cov_26idc6tklo.s[6]++;

  if (x.constructor !== y.constructor) {
    cov_26idc6tklo.b[3][0]++;
    cov_26idc6tklo.s[7]++;
    return false;
  } else {
    cov_26idc6tklo.b[3][1]++;
  }

  cov_26idc6tklo.s[8]++;

  if ((cov_26idc6tklo.b[5][0]++, Object(_string_is__WEBPACK_IMPORTED_MODULE_10__["default"])(x)) || (cov_26idc6tklo.b[5][1]++, Object(_boolean_is__WEBPACK_IMPORTED_MODULE_8__["default"])(x)) || (cov_26idc6tklo.b[5][2]++, Object(_number_is__WEBPACK_IMPORTED_MODULE_9__["default"])(x)) || (cov_26idc6tklo.b[5][3]++, Object(_date_is__WEBPACK_IMPORTED_MODULE_11__["default"])(x))) {
    cov_26idc6tklo.b[4][0]++;
    cov_26idc6tklo.s[9]++;
    return Object(_identical__WEBPACK_IMPORTED_MODULE_2__["default"])(x.valueOf(), y.valueOf());
  } else {
    cov_26idc6tklo.b[4][1]++;
  }

  cov_26idc6tklo.s[10]++;

  if (Object(_array_is__WEBPACK_IMPORTED_MODULE_7__["default"])(x)) {
    cov_26idc6tklo.b[6][0]++;
    cov_26idc6tklo.s[11]++;
    return Object(_array_equals__WEBPACK_IMPORTED_MODULE_12__["default"])(x, y);
  } else {
    cov_26idc6tklo.b[6][1]++;
    cov_26idc6tklo.s[12]++;

    if (Object(_object_is__WEBPACK_IMPORTED_MODULE_6__["default"])(x)) {
      cov_26idc6tklo.b[7][0]++;
      cov_26idc6tklo.s[13]++;
      return Object(_object_equals__WEBPACK_IMPORTED_MODULE_13__["default"])(x, y);
    } else {
      cov_26idc6tklo.b[7][1]++;
    }
  }

  cov_26idc6tklo.s[14]++;
  return false;
}));

/***/ }),

/***/ "./src/exists.js":
/*!***********************!*\
  !*** ./src/exists.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ "./src/_private/curry1.js");
var cov_1bzvzorezr = function () {
  var path = "/Volumes/BigOne/Github/fun/src/exists.js";
  var hash = "7efc8be58b5841f322994e13834036546f2fd648";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/exists.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 21
        }
      }
    },
    fnMap: {
      "0": {
        name: "exists",
        decl: {
          start: {
            line: 12,
            column: 31
          },
          end: {
            line: 12,
            column: 37
          }
        },
        loc: {
          start: {
            line: 12,
            column: 42
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "7efc8be58b5841f322994e13834036546f2fd648"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();


/**
 * @function exists
 * @desc Validates if a value is not null or undefined
 * @param {*} x - any valid Javascript value
 * @example
 *
 * exists(null) // false
 * exists([] // true
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function exists(x) {
  cov_1bzvzorezr.f[0]++;
  cov_1bzvzorezr.s[0]++;
  return !(x == null);
}));

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/filter */ "./src/array/filter.js");
/* harmony import */ var _object_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/filter */ "./src/object/filter.js");
/* harmony import */ var _map_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/filter */ "./src/map/filter.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type */ "./src/type.js");
var cov_bcdtzazk7 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/filter.js";
  var hash = "305264e1f6e3b0d9b8a6dde7dee6d104943060c8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/filter.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 31,
          column: 3
        }
      },
      "1": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 32
        }
      },
      "2": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 29
        }
      },
      "3": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "filter",
        decl: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 14,
            column: 36
          }
        },
        loc: {
          start: {
            line: 14,
            column: 45
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 14
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 22,
            column: 32
          }
        }, {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 26,
            column: 29
          }
        }, {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 30,
            column: 31
          }
        }],
        line: 15
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "305264e1f6e3b0d9b8a6dde7dee6d104943060c8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function filter
 * @description Autocurried fucntion that filters Objects, Arrays and Maps
 *
 */



 // TODO
// import setFilter from '../set/filter'


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function filter(fn, a) {
  cov_bcdtzazk7.f[0]++;
  cov_bcdtzazk7.s[0]++;

  switch (Object(_type__WEBPACK_IMPORTED_MODULE_4__["default"])(a)) {
    // switch (Object.prototype.toString.call(a)) {
    // case 'Function':
    //   return curry(function () {
    //     return cb.call(this, a.apply(this, arguments))
    //   })
    case 'Object':
      cov_bcdtzazk7.b[0][0]++;
      cov_bcdtzazk7.s[1]++;
      return Object(_object_filter__WEBPACK_IMPORTED_MODULE_2__["default"])(fn, a);
    // case 'String':
    //   return stringMap(cb, a)

    case 'Map':
      cov_bcdtzazk7.b[0][1]++;
      cov_bcdtzazk7.s[2]++;
      return Object(_map_filter__WEBPACK_IMPORTED_MODULE_3__["default"])(fn, a);
    // case 'Set':
    //   return setFilter(fn, a)

    default:
      cov_bcdtzazk7.b[0][2]++;
      cov_bcdtzazk7.s[3]++;
      return Object(_array_filter__WEBPACK_IMPORTED_MODULE_1__["default"])(fn, a);
  }
}));

/***/ }),

/***/ "./src/findIndex.js":
/*!**************************!*\
  !*** ./src/findIndex.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_fxlcae7ev = function () {
  var path = "/Volumes/BigOne/Github/fun/src/findIndex.js";
  var hash = "8b57211a7a9da764664c0df529e0208febc5a890";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/findIndex.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 10
        },
        end: {
          line: 16,
          column: 11
        }
      },
      "1": {
        start: {
          line: 17,
          column: 12
        },
        end: {
          line: 17,
          column: 20
        }
      },
      "2": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "3": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "4": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 14
        }
      },
      "5": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 10
        }
      },
      "6": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 11
        }
      }
    },
    fnMap: {
      "0": {
        name: "findIndex",
        decl: {
          start: {
            line: 15,
            column: 30
          },
          end: {
            line: 15,
            column: 39
          }
        },
        loc: {
          start: {
            line: 15,
            column: 48
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 15
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        }, {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        }],
        line: 19
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "8b57211a7a9da764664c0df529e0208febc5a890"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function findIndex(fn, a) {
  cov_fxlcae7ev.f[0]++;
  var i = (cov_fxlcae7ev.s[0]++, 0);
  var l = (cov_fxlcae7ev.s[1]++, a.length);
  cov_fxlcae7ev.s[2]++;

  while (i < l) {
    cov_fxlcae7ev.s[3]++;

    if (fn(a[i])) {
      cov_fxlcae7ev.b[0][0]++;
      cov_fxlcae7ev.s[4]++;
      return i;
    } else {
      cov_fxlcae7ev.b[0][1]++;
    }

    cov_fxlcae7ev.s[5]++;
    i += 1;
  }

  cov_fxlcae7ev.s[6]++;
  return -1;
}));

/***/ }),

/***/ "./src/first.js":
/*!**********************!*\
  !*** ./src/first.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ "./src/_private/curry1.js");
var cov_frddxgt5z = function () {
  var path = "/Volumes/BigOne/Github/fun/src/first.js";
  var hash = "4b2685eae07fd26f310c1948d4f8a130040bb831";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/first.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "first",
        decl: {
          start: {
            line: 12,
            column: 31
          },
          end: {
            line: 12,
            column: 36
          }
        },
        loc: {
          start: {
            line: 12,
            column: 41
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 13,
            column: 41
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 13,
            column: 25
          },
          end: {
            line: 13,
            column: 29
          }
        }, {
          start: {
            line: 13,
            column: 32
          },
          end: {
            line: 13,
            column: 41
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 13,
            column: 22
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 13,
            column: 10
          }
        }, {
          start: {
            line: 13,
            column: 14
          },
          end: {
            line: 13,
            column: 22
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "4b2685eae07fd26f310c1948d4f8a130040bb831"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function first
 * @param [a]
 * @return a | undefined
 * @example
 *
 * const arr = [1, 2, 4]
 * first([1, 2, 4]) // returns 1
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function first(a) {
  cov_frddxgt5z.f[0]++;
  cov_frddxgt5z.s[0]++;
  return (cov_frddxgt5z.b[1][0]++, a) && (cov_frddxgt5z.b[1][1]++, a.length) ? (cov_frddxgt5z.b[0][0]++, a[0]) : (cov_frddxgt5z.b[0][1]++, undefined);
}));

/***/ }),

/***/ "./src/flatMap.js":
/*!************************!*\
  !*** ./src/flatMap.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fold */ "./src/fold.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ "./src/empty.js");
/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concat */ "./src/concat.js");
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is */ "./src/is.js");
var cov_1i8kt0ai29 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/flatMap.js";
  var hash = "d9b0a6767f7fe301c4023f754a0aef0eff9d1743";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/flatMap.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 7,
          column: 33
        }
      },
      "1": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "3": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 24
        }
      },
      "4": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "5": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 24
        }
      },
      "6": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 58
        }
      },
      "7": {
        start: {
          line: 23,
          column: 26
        },
        end: {
          line: 23,
          column: 44
        }
      }
    },
    fnMap: {
      "0": {
        name: "flatMap",
        decl: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 14,
            column: 37
          }
        },
        loc: {
          start: {
            line: 14,
            column: 46
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 11
          },
          end: {
            line: 16,
            column: 12
          }
        },
        loc: {
          start: {
            line: 16,
            column: 24
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 16
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 23,
            column: 14
          },
          end: {
            line: 23,
            column: 15
          }
        },
        loc: {
          start: {
            line: 23,
            column: 26
          },
          end: {
            line: 23,
            column: 44
          }
        },
        line: 23
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        }, {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        }, {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        }],
        line: 20
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "d9b0a6767f7fe301c4023f754a0aef0eff9d1743"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();






var isFunction = (cov_1i8kt0ai29.s[0]++, Object(_is__WEBPACK_IMPORTED_MODULE_4__["default"])('Function'));
/**
 * @function flatMap
 * @param fn
 * @param a
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_3__["default"])(function flatMap(fn, a) {
  cov_1i8kt0ai29.f[0]++;
  cov_1i8kt0ai29.s[1]++;

  if (isFunction(a)) {
    cov_1i8kt0ai29.b[0][0]++;
    cov_1i8kt0ai29.s[2]++;
    return function (x) {
      cov_1i8kt0ai29.f[1]++;
      cov_1i8kt0ai29.s[3]++;
      return fn(a(x))(x);
    };
  } else {
    cov_1i8kt0ai29.b[0][1]++;
  }

  cov_1i8kt0ai29.s[4]++;

  if (isFunction(a.flatMap)) {
    cov_1i8kt0ai29.b[1][0]++;
    cov_1i8kt0ai29.s[5]++;
    return a.flatMap(fn);
  } else {
    cov_1i8kt0ai29.b[1][1]++;
  }

  cov_1i8kt0ai29.s[6]++;
  return Object(_fold__WEBPACK_IMPORTED_MODULE_0__["default"])(function (acc, x) {
    cov_1i8kt0ai29.f[2]++;
    cov_1i8kt0ai29.s[7]++;
    return Object(_concat__WEBPACK_IMPORTED_MODULE_2__["default"])(acc, fn(x));
  }, Object(_empty__WEBPACK_IMPORTED_MODULE_1__["default"])(a), a);
}));

/***/ }),

/***/ "./src/fold.js":
/*!*********************!*\
  !*** ./src/fold.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/fold */ "./src/array/fold.js");
/* harmony import */ var _object_fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/fold */ "./src/object/fold.js");
/* harmony import */ var _string_fold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string/fold */ "./src/string/fold.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type */ "./src/type.js");
var cov_q0onbbmh9 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/fold.js";
  var hash = "654f6e1c48f08f4852da8f14198fdf7b2f8ea55e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/fold.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 18
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "1": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "fold",
        decl: {
          start: {
            line: 18,
            column: 30
          },
          end: {
            line: 18,
            column: 34
          }
        },
        loc: {
          start: {
            line: 18,
            column: 49
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "654f6e1c48f08f4852da8f14198fdf7b2f8ea55e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Returns a single item by iterating over an array like object and call a function on each item
 *
 * @function fold
 * @description Returns a single item by iterating over an array like object and call a function on each item
 * @since v1.0.2
 * @param {Function} cb receives 4 values: the accumulator, the item, the index, and the initial value.
 * @param {*} init - the the initial value
 * @param {Array|Object} a the array like item to iterate over
 * @return {*} The accumulated value
 **/





/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function fold(cb, init, a) {
  cov_q0onbbmh9.f[0]++;
  var typeMap = (cov_q0onbbmh9.s[0]++, {
    'Object': _object_fold__WEBPACK_IMPORTED_MODULE_2__["default"],
    'Array': _array_fold__WEBPACK_IMPORTED_MODULE_1__["default"],
    'String': _string_fold__WEBPACK_IMPORTED_MODULE_3__["default"]
  });
  cov_q0onbbmh9.s[1]++;
  return typeMap[Object(_type__WEBPACK_IMPORTED_MODULE_4__["default"])(a)](cb, init, a);
}));

/***/ }),

/***/ "./src/identical.js":
/*!**************************!*\
  !*** ./src/identical.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _number_isNan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number/isNan */ "./src/number/isNan.js");
var cov_1uz6cuo22v = function () {
  var path = "/Volumes/BigOne/Github/fun/src/identical.js";
  var hash = "e39b90045fab64ca1beaba50a95cd98094bf444e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/identical.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 12,
          column: 3
        }
      },
      "1": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 26
        }
      },
      "2": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "3": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 15
        }
      },
      "4": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "identical",
        decl: {
          start: {
            line: 9,
            column: 30
          },
          end: {
            line: 9,
            column: 39
          }
        },
        loc: {
          start: {
            line: 9,
            column: 47
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        }],
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 10,
            column: 24
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 10,
            column: 13
          }
        }, {
          start: {
            line: 10,
            column: 17
          },
          end: {
            line: 10,
            column: 24
          }
        }],
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        }, {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        }],
        line: 13
      },
      "3": {
        loc: {
          start: {
            line: 16,
            column: 12
          },
          end: {
            line: 16,
            column: 32
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 16,
            column: 12
          },
          end: {
            line: 16,
            column: 20
          }
        }, {
          start: {
            line: 16,
            column: 24
          },
          end: {
            line: 16,
            column: 32
          }
        }],
        line: 16
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e39b90045fab64ca1beaba50a95cd98094bf444e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**

 * @function identical
 * @description checks for identintical items
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function identical(x, y) {
  cov_1uz6cuo22v.f[0]++;
  cov_1uz6cuo22v.s[0]++;

  if ((cov_1uz6cuo22v.b[1][0]++, x === 0) && (cov_1uz6cuo22v.b[1][1]++, y === 0)) {
    cov_1uz6cuo22v.b[0][0]++;
    cov_1uz6cuo22v.s[1]++;
    return 1 / x === 1 / y;
  } else {
    cov_1uz6cuo22v.b[0][1]++;
  }

  cov_1uz6cuo22v.s[2]++;

  if (x === y) {
    cov_1uz6cuo22v.b[2][0]++;
    cov_1uz6cuo22v.s[3]++;
    return true;
  } else {
    cov_1uz6cuo22v.b[2][1]++;
  }

  cov_1uz6cuo22v.s[4]++;
  return !!((cov_1uz6cuo22v.b[3][0]++, Object(_number_isNan__WEBPACK_IMPORTED_MODULE_1__["default"])(x)) && (cov_1uz6cuo22v.b[3][1]++, Object(_number_isNan__WEBPACK_IMPORTED_MODULE_1__["default"])(y)));
}));

/***/ }),

/***/ "./src/identity.js":
/*!*************************!*\
  !*** ./src/identity.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
var cov_f0duikgug = function () {
  var path = "/Volumes/BigOne/Github/fun/src/identity.js";
  var hash = "3f66daeff98e24528dde0aac96aa6c2d37185e0c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/identity.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "identity",
        decl: {
          start: {
            line: 7,
            column: 24
          },
          end: {
            line: 7,
            column: 32
          }
        },
        loc: {
          start: {
            line: 7,
            column: 37
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "3f66daeff98e24528dde0aac96aa6c2d37185e0c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**

 * @function identity
 * @description Returns the value supplied to the function
 */
function identity(x) {
  cov_f0duikgug.f[0]++;
  cov_f0duikgug.s[0]++;
  return x;
}
;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: add, addIndex, adjust, adjustWith, all, allPass, always, and, any, anyPass, ap, aperture, append, apply, binary, bind, both, call, complement, compose, concat, cond, curry, defaultTo, diffDate, divide, Either, Left, Right, empty, equals, exists, F, filter, findIndex, first, flatMap, fold, formatString, gcd, has, hasIn, identical, identity, is, isArray, isBoolean, isDate, isEmpty, isFutureDate, isMap, isNan, isNull, isNumber, isObject, isSet, isString, isUndefined, isValidDate, Just, keys, keysIn, last, lift, lt, lte, map, max, Maybe, merge, min, multiply, not, Nothing, omit, or, path, pick, prop, reduce, sort, sum, T, toDay, toHour, toMinutes, toSeconds, truthy, type, union, values, zip, zipObj, zipWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number/add */ "./src/number/add.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _number_add__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _addIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addIndex */ "./src/addIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addIndex", function() { return _addIndex__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _adjust__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adjust */ "./src/adjust.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adjust", function() { return _adjust__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _adjustWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adjustWith */ "./src/adjustWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adjustWith", function() { return _adjustWith__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all */ "./src/all.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _all__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _allPass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allPass */ "./src/allPass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allPass", function() { return _allPass__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./always */ "./src/always.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "always", function() { return _always__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./and */ "./src/and.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _and__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./any */ "./src/any.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _any__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _anyPass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./anyPass */ "./src/anyPass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anyPass", function() { return _anyPass__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ap */ "./src/ap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ap", function() { return _ap__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _aperture__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aperture */ "./src/aperture.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "aperture", function() { return _aperture__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./append */ "./src/append.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append", function() { return _append__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apply */ "./src/apply.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _apply__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _binary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./binary */ "./src/binary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "binary", function() { return _binary__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bind */ "./src/bind.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _bind__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _boolean_both__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./boolean/both */ "./src/boolean/both.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "both", function() { return _boolean_both__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./call */ "./src/call.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _call__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _complement__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./complement */ "./src/complement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "complement", function() { return _complement__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./compose */ "./src/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./concat */ "./src/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _concat__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _cond__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cond */ "./src/cond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cond", function() { return _cond__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return _curry__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _defaultTo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./defaultTo */ "./src/defaultTo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTo", function() { return _defaultTo__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _date_diffDate__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./date/diffDate */ "./src/date/diffDate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffDate", function() { return _date_diffDate__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _number_divide__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./number/divide */ "./src/number/divide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return _number_divide__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _monads_Either__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./monads/Either */ "./src/monads/Either.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Either", function() { return _monads_Either__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _monads_Left__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./monads/Left */ "./src/monads/Left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Left", function() { return _monads_Left__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _monads_Right__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./monads/Right */ "./src/monads/Right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Right", function() { return _monads_Right__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./empty */ "./src/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _empty__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./equals */ "./src/equals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _equals__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./exists */ "./src/exists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return _exists__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _boolean_F__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./boolean/F */ "./src/boolean/F.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "F", function() { return _boolean_F__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./filter */ "./src/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _findIndex__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./findIndex */ "./src/findIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _findIndex__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _first__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./first */ "./src/first.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _first__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _flatMap__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./flatMap */ "./src/flatMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return _flatMap__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./fold */ "./src/fold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fold", function() { return _fold__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _string_formatString__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./string/formatString */ "./src/string/formatString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatString", function() { return _string_formatString__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _math_gcd__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./math/gcd */ "./src/math/gcd.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gcd", function() { return _math_gcd__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _object_has__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./object/has */ "./src/object/has.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "has", function() { return _object_has__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _object_hasIn__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./object/hasIn */ "./src/object/hasIn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasIn", function() { return _object_hasIn__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./identical */ "./src/identical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identical", function() { return _identical__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./identity */ "./src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _identity__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./is */ "./src/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is", function() { return _is__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./array/is */ "./src/array/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _array_is__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _boolean_is__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./boolean/is */ "./src/boolean/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _boolean_is__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _date_is__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./date/is */ "./src/date/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _date_is__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./isEmpty */ "./src/isEmpty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _isEmpty__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _date_isFutureDate__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./date/isFutureDate */ "./src/date/isFutureDate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFutureDate", function() { return _date_isFutureDate__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _map_is__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./map/is */ "./src/map/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return _map_is__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _number_isNan__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./number/isNan */ "./src/number/isNan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNan", function() { return _number_isNan__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _null_is__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./null/is */ "./src/null/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _null_is__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _number_is__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./number/is */ "./src/number/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _number_is__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./object/is */ "./src/object/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _object_is__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _set_is__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./set/is */ "./src/set/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return _set_is__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _string_is__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./string/is */ "./src/string/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _string_is__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _undefined_is__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./undefined/is */ "./src/undefined/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _undefined_is__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _date_isValid__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./date/isValid */ "./src/date/isValid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return _date_isValid__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _monads_Just__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./monads/Just */ "./src/monads/Just.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Just", function() { return _monads_Just__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./keys */ "./src/keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _keys__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _object_keysIn__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./object/keysIn */ "./src/object/keysIn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keysIn", function() { return _object_keysIn__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _last__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./last */ "./src/last.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _last__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./lift */ "./src/lift.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lift", function() { return _lift__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _lt__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./lt */ "./src/lt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lt", function() { return _lt__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _lte__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./lte */ "./src/lte.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lte", function() { return _lte__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./max */ "./src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _monads_Maybe__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./monads/Maybe */ "./src/monads/Maybe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Maybe", function() { return _monads_Maybe__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _object_merge__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./object/merge */ "./src/object/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _object_merge__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./min */ "./src/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _number_multiply__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./number/multiply */ "./src/number/multiply.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return _number_multiply__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./not */ "./src/not.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _not__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _monads_Nothing__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./monads/Nothing */ "./src/monads/Nothing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nothing", function() { return _monads_Nothing__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _object_omit__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./object/omit */ "./src/object/omit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _object_omit__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./or */ "./src/or.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _or__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _object_path__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./object/path */ "./src/object/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _object_path__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _object_pick__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./object/pick */ "./src/object/pick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _object_pick__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _object_prop__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./object/prop */ "./src/object/prop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return _object_prop__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./reduce */ "./src/reduce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _reduce__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./sort */ "./src/sort.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return _sort__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _number_sum__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./number/sum */ "./src/number/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _number_sum__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _boolean_T__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./boolean/T */ "./src/boolean/T.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "T", function() { return _boolean_T__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony import */ var _date_toDay__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./date/toDay */ "./src/date/toDay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDay", function() { return _date_toDay__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony import */ var _date_toHour__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./date/toHour */ "./src/date/toHour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toHour", function() { return _date_toHour__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony import */ var _date_toMinutes__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./date/toMinutes */ "./src/date/toMinutes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMinutes", function() { return _date_toMinutes__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony import */ var _date_toSeconds__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./date/toSeconds */ "./src/date/toSeconds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSeconds", function() { return _date_toSeconds__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony import */ var _truthy__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./truthy */ "./src/truthy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "truthy", function() { return _truthy__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./type */ "./src/type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "type", function() { return _type__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony import */ var _array_union__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./array/union */ "./src/array/union.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _array_union__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony import */ var _object_values__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./object/values */ "./src/object/values.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _object_values__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./zip */ "./src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony import */ var _zipObj__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./zipObj */ "./src/zipObj.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zipObj", function() { return _zipObj__WEBPACK_IMPORTED_MODULE_92__["default"]; });

/* harmony import */ var _zipWith__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./zipWith */ "./src/zipWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zipWith", function() { return _zipWith__WEBPACK_IMPORTED_MODULE_93__["default"]; });

var cov_1j3srt15pl = function () {
  var path = "/Volumes/BigOne/Github/fun/src/index.js";
  var hash = "3dac74e04bf246e7b7e905f313de1a8050bc3309";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "3dac74e04bf246e7b7e905f313de1a8050bc3309"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();














 // export { default as applySpec } from './applySpec'


















































































/***/ }),

/***/ "./src/is.js":
/*!*******************!*\
  !*** ./src/is.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./src/type.js");
var cov_1n1i5dyhe2 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/is.js";
  var hash = "7b33a70a05572ad3b3716419eabe823e9e52a481";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/is.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "is",
        decl: {
          start: {
            line: 10,
            column: 30
          },
          end: {
            line: 10,
            column: 32
          }
        },
        loc: {
          start: {
            line: 10,
            column: 45
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "7b33a70a05572ad3b3716419eabe823e9e52a481"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function is
 * @description Verifies the type of the provided argument
 *
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function is(Ctor, val) {
  cov_1n1i5dyhe2.f[0]++;
  cov_1n1i5dyhe2.s[0]++;
  return Object(_type__WEBPACK_IMPORTED_MODULE_1__["default"])(val) === Ctor;
}));

/***/ }),

/***/ "./src/isEmpty.js":
/*!************************!*\
  !*** ./src/isEmpty.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmpty; });
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty */ "./src/empty.js");
/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exists */ "./src/exists.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equals */ "./src/equals.js");
var cov_16haxh3rfi = function () {
  var path = "/Volumes/BigOne/Github/fun/src/isEmpty.js";
  var hash = "f5150a8e73f46743db5a3c6def50fcd55b3020bb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/isEmpty.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "isEmpty",
        decl: {
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 10,
            column: 31
          }
        },
        loc: {
          start: {
            line: 10,
            column: 36
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 9
          },
          end: {
            line: 11,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 11,
            column: 9
          },
          end: {
            line: 11,
            column: 18
          }
        }, {
          start: {
            line: 11,
            column: 22
          },
          end: {
            line: 11,
            column: 41
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "f5150a8e73f46743db5a3c6def50fcd55b3020bb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**

 * @function empty
 * @description Returns the empty equivalent of the first argument
 */



function isEmpty(x) {
  cov_16haxh3rfi.f[0]++;
  cov_16haxh3rfi.s[0]++;
  return (cov_16haxh3rfi.b[0][0]++, Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(x)) && (cov_16haxh3rfi.b[0][1]++, Object(_equals__WEBPACK_IMPORTED_MODULE_2__["default"])(x, Object(_empty__WEBPACK_IMPORTED_MODULE_0__["default"])(x)));
}
;

/***/ }),

/***/ "./src/iterator/is.js":
/*!****************************!*\
  !*** ./src/iterator/is.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isIter; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./src/is.js");
var cov_nbuf9m3df = function () {
  var path = "/Volumes/BigOne/Github/fun/src/iterator/is.js";
  var hash = "0026636b105067c1aaaf5e0534e01b7afa42857c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/iterator/is.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 19
        },
        end: {
          line: 5,
          column: 33
        }
      },
      "1": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 42
        }
      }
    },
    fnMap: {
      "0": {
        name: "isIter",
        decl: {
          start: {
            line: 7,
            column: 24
          },
          end: {
            line: 7,
            column: 30
          }
        },
        loc: {
          start: {
            line: 7,
            column: 38
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "0026636b105067c1aaaf5e0534e01b7afa42857c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Created by dierickx.len on 01/04/2017.
 */

var isFunction = (cov_nbuf9m3df.s[0]++, Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Function'));
function isIter(iter) {
  cov_nbuf9m3df.f[0]++;
  cov_nbuf9m3df.s[1]++;
  return isFunction(iter[Symbol.iterator]);
}

/***/ }),

/***/ "./src/iterator/map.js":
/*!*****************************!*\
  !*** ./src/iterator/map.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_qpv9rjfwu = function () {
  var path = "/Volumes/BigOne/Github/fun/src/iterator/map.js";
  var hash = "fbaff6e2bcd030622b50d3211761cf8a84502dab";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/iterator/map.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 10
        },
        end: {
          line: 14,
          column: 12
        }
      },
      "1": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 17,
          column: 3
        }
      },
      "2": {
        start: {
          line: 15,
          column: 23
        },
        end: {
          line: 15,
          column: 38
        }
      },
      "3": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 38
        }
      },
      "4": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "map",
        decl: {
          start: {
            line: 13,
            column: 30
          },
          end: {
            line: 13,
            column: 33
          }
        },
        loc: {
          start: {
            line: 13,
            column: 55
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "fbaff6e2bcd030622b50d3211761cf8a84502dab"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map(callback, iterator) {
  cov_qpv9rjfwu.f[0]++;
  var r = (cov_qpv9rjfwu.s[0]++, []);
  cov_qpv9rjfwu.s[1]++;

  for (var nextValue = (cov_qpv9rjfwu.s[2]++, iterator.next()); nextValue.done !== true; nextValue = iterator.next()) {
    cov_qpv9rjfwu.s[3]++;
    r.push(callback(iterator.value()));
  }

  cov_qpv9rjfwu.s[4]++;
  return r;
}));

/***/ }),

/***/ "./src/keys.js":
/*!*********************!*\
  !*** ./src/keys.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object/keys */ "./src/object/keys.js");
/* harmony import */ var _map_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/keys */ "./src/map/keys.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./src/type.js");
var cov_1gq609yq6b = function () {
  var path = "/Volumes/BigOne/Github/fun/src/keys.js";
  var hash = "a15bd5c6c113810a1d49c9229f677bbbd3aa5599";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/keys.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "1": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 25
        }
      },
      "2": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 28
        }
      }
    },
    fnMap: {
      "0": {
        name: "map",
        decl: {
          start: {
            line: 16,
            column: 30
          },
          end: {
            line: 16,
            column: 33
          }
        },
        loc: {
          start: {
            line: 16,
            column: 40
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 16
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 19,
            column: 25
          }
        }, {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 21,
            column: 28
          }
        }],
        line: 17
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a15bd5c6c113810a1d49c9229f677bbbd3aa5599"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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




/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map(obj) {
  cov_1gq609yq6b.f[0]++;
  cov_1gq609yq6b.s[0]++;

  switch (Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(obj)) {
    case 'Map':
      cov_1gq609yq6b.b[0][0]++;
      cov_1gq609yq6b.s[1]++;
      return Object(_map_keys__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);

    default:
      cov_1gq609yq6b.b[0][1]++;
      cov_1gq609yq6b.s[2]++;
      return Object(_object_keys__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
  }
}));

/***/ }),

/***/ "./src/last.js":
/*!*********************!*\
  !*** ./src/last.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ "./src/_private/curry1.js");
var cov_1m1ckgft9p = function () {
  var path = "/Volumes/BigOne/Github/fun/src/last.js";
  var hash = "117995ce30d67a185b24005cad640103fee1aaa7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/last.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "last",
        decl: {
          start: {
            line: 8,
            column: 31
          },
          end: {
            line: 8,
            column: 35
          }
        },
        loc: {
          start: {
            line: 8,
            column: 40
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 9
          },
          end: {
            line: 9,
            column: 52
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 9,
            column: 25
          },
          end: {
            line: 9,
            column: 40
          }
        }, {
          start: {
            line: 9,
            column: 43
          },
          end: {
            line: 9,
            column: 52
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 9
          },
          end: {
            line: 9,
            column: 22
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 9,
            column: 9
          },
          end: {
            line: 9,
            column: 10
          }
        }, {
          start: {
            line: 9,
            column: 14
          },
          end: {
            line: 9,
            column: 22
          }
        }],
        line: 9
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "117995ce30d67a185b24005cad640103fee1aaa7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function last
 * @param [a]
 * @return a | undefined
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function last(a) {
  cov_1m1ckgft9p.f[0]++;
  cov_1m1ckgft9p.s[0]++;
  return (cov_1m1ckgft9p.b[1][0]++, a) && (cov_1m1ckgft9p.b[1][1]++, a.length) ? (cov_1m1ckgft9p.b[0][0]++, a[a.length - 1]) : (cov_1m1ckgft9p.b[0][1]++, undefined);
}));

/***/ }),

/***/ "./src/lift.js":
/*!*********************!*\
  !*** ./src/lift.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/curry1 */ "./src/_private/curry1.js");
/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fold */ "./src/fold.js");
/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ap */ "./src/ap.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./src/map.js");
var cov_e0eumtq5g = function () {
  var path = "/Volumes/BigOne/Github/fun/src/lift.js";
  var hash = "9cb21d18f0476c7a829c249ae8235183f1dab667";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/lift.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 17
        },
        end: {
          line: 15,
          column: 34
        }
      },
      "1": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 18,
          column: 4
        }
      },
      "2": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 88
        }
      }
    },
    fnMap: {
      "0": {
        name: "lift",
        decl: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 14,
            column: 34
          }
        },
        loc: {
          start: {
            line: 14,
            column: 40
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 14
      },
      "1": {
        name: "_lift",
        decl: {
          start: {
            line: 16,
            column: 24
          },
          end: {
            line: 16,
            column: 29
          }
        },
        loc: {
          start: {
            line: 16,
            column: 33
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "9cb21d18f0476c7a829c249ae8235183f1dab667"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function
 *
 * @function lift
 * @since v1.0.2
 * @sig (*... -> *) -> ([*]... -> [*])
 **/





/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function lift(fn) {
  cov_e0eumtq5g.f[0]++;
  var lifted = (cov_e0eumtq5g.s[0]++, Object(_private_curry1__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(fn)));
  cov_e0eumtq5g.s[1]++;
  return Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function _lift() {
    cov_e0eumtq5g.f[1]++;
    cov_e0eumtq5g.s[2]++;
    return Object(_fold__WEBPACK_IMPORTED_MODULE_2__["default"])(_ap__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_map__WEBPACK_IMPORTED_MODULE_4__["default"])(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
}));

/***/ }),

/***/ "./src/lt.js":
/*!*******************!*\
  !*** ./src/lt.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_13aqodl6o6 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/lt.js";
  var hash = "36ca3133ef4574b62e04a50a1cfa77b156e641e5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/lt.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "lt",
        decl: {
          start: {
            line: 17,
            column: 30
          },
          end: {
            line: 17,
            column: 32
          }
        },
        loc: {
          start: {
            line: 17,
            column: 40
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "36ca3133ef4574b62e04a50a1cfa77b156e641e5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();


/**
 * @function lt
 * @desc Returns a Boolean indicating one value is larger than the other
 * @param {*} a - Any valid Javascript value
 * @param {*} b - Any valid Javascript value
 * @returns {Boolean}
 * @example
 *
 * lt(0, 10)  // true
 * const lt0 = lt(0)
 * lt0(10) // false
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function lt(a, b) {
  cov_13aqodl6o6.f[0]++;
  cov_13aqodl6o6.s[0]++;
  return a < b;
}));

/***/ }),

/***/ "./src/lte.js":
/*!********************!*\
  !*** ./src/lte.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_223b3ad5f5 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/lte.js";
  var hash = "1626702dc88780b5bc00514f98453732afd2910e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/lte.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "lte",
        decl: {
          start: {
            line: 17,
            column: 30
          },
          end: {
            line: 17,
            column: 33
          }
        },
        loc: {
          start: {
            line: 17,
            column: 41
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1626702dc88780b5bc00514f98453732afd2910e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();


/**
 * @function lte
 * @desc Returns a Boolean indicating one value is larger than or equal to the other
 * @param {*} a - Any valid Javascript value
 * @param {*} b - Any valid Javascript value
 * @returns {Boolean}
 * @example
 *
 * lte(0, 10)  // true
 * const lte0 = lte(0)
 * lt0(10) // false
 * lt0(0) // true
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function lte(a, b) {
  cov_223b3ad5f5.f[0]++;
  cov_223b3ad5f5.s[0]++;
  return a <= b;
}));

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/map */ "./src/array/map.js");
/* harmony import */ var _object_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/map */ "./src/object/map.js");
/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map */ "./src/map/map.js");
/* harmony import */ var _string_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string/map */ "./src/string/map.js");
/* harmony import */ var _iterator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iterator/map */ "./src/iterator/map.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type */ "./src/type.js");
/* harmony import */ var _iterator_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iterator/is */ "./src/iterator/is.js");
var cov_2o3i4wm8r9 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/map.js";
  var hash = "528300cd204264b0dcd58253ba04ad434f5bcff1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/map.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 39,
          column: 3
        }
      },
      "1": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 26,
          column: 8
        }
      },
      "2": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 54
        }
      },
      "3": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 29
        }
      },
      "4": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 29
        }
      },
      "5": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 26
        }
      },
      "6": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 28
        }
      },
      "7": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 38,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "map",
        decl: {
          start: {
            line: 21,
            column: 30
          },
          end: {
            line: 21,
            column: 33
          }
        },
        loc: {
          start: {
            line: 21,
            column: 42
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 21
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 24,
            column: 19
          },
          end: {
            line: 24,
            column: 20
          }
        },
        loc: {
          start: {
            line: 24,
            column: 31
          },
          end: {
            line: 26,
            column: 7
          }
        },
        line: 24
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 26,
            column: 8
          }
        }, {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 28,
            column: 29
          }
        }, {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 30,
            column: 29
          }
        }, {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 32,
            column: 26
          }
        }, {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 34,
            column: 28
          }
        }, {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 38,
            column: 25
          }
        }],
        line: 22
      },
      "1": {
        loc: {
          start: {
            line: 36,
            column: 13
          },
          end: {
            line: 38,
            column: 25
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 37,
            column: 10
          },
          end: {
            line: 37,
            column: 28
          }
        }, {
          start: {
            line: 38,
            column: 10
          },
          end: {
            line: 38,
            column: 25
          }
        }],
        line: 36
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0, 0, 0, 0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "528300cd204264b0dcd58253ba04ad434f5bcff1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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








/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map(cb, a) {
  cov_2o3i4wm8r9.f[0]++;
  cov_2o3i4wm8r9.s[0]++;

  switch (Object(_type__WEBPACK_IMPORTED_MODULE_6__["default"])(a)) {
    case 'Function':
      cov_2o3i4wm8r9.b[0][0]++;
      cov_2o3i4wm8r9.s[1]++;
      return Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        cov_2o3i4wm8r9.f[1]++;
        cov_2o3i4wm8r9.s[2]++;
        return cb.call(this, a.apply(this, arguments));
      });

    case 'Object':
      cov_2o3i4wm8r9.b[0][1]++;
      cov_2o3i4wm8r9.s[3]++;
      return Object(_object_map__WEBPACK_IMPORTED_MODULE_2__["default"])(cb, a);

    case 'String':
      cov_2o3i4wm8r9.b[0][2]++;
      cov_2o3i4wm8r9.s[4]++;
      return Object(_string_map__WEBPACK_IMPORTED_MODULE_4__["default"])(cb, a);

    case 'Map':
      cov_2o3i4wm8r9.b[0][3]++;
      cov_2o3i4wm8r9.s[5]++;
      return Object(_map_map__WEBPACK_IMPORTED_MODULE_3__["default"])(cb, a);

    case 'Array':
      cov_2o3i4wm8r9.b[0][4]++;
      cov_2o3i4wm8r9.s[6]++;
      return Object(_array_map__WEBPACK_IMPORTED_MODULE_1__["default"])(cb, a);

    default:
      cov_2o3i4wm8r9.b[0][5]++;
      cov_2o3i4wm8r9.s[7]++;
      return Object(_iterator_is__WEBPACK_IMPORTED_MODULE_7__["default"])(a) ? (cov_2o3i4wm8r9.b[1][0]++, Object(_iterator_map__WEBPACK_IMPORTED_MODULE_5__["default"])(cb, a)) : (cov_2o3i4wm8r9.b[1][1]++, Object(_array_map__WEBPACK_IMPORTED_MODULE_1__["default"])(cb, a));
  }
}));

/***/ }),

/***/ "./src/map/filter.js":
/*!***************************!*\
  !*** ./src/map/filter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_ym52orgra = function () {
  var path = "/Volumes/BigOne/Github/fun/src/map/filter.js";
  var hash = "e768496eaefa5e1baf0041b7d4ecb710a8db41b1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/map/filter.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 10
        },
        end: {
          line: 9,
          column: 19
        }
      },
      "1": {
        start: {
          line: 11,
          column: 11
        },
        end: {
          line: 11,
          column: 22
        }
      },
      "2": {
        start: {
          line: 12,
          column: 15
        },
        end: {
          line: 12,
          column: 24
        }
      },
      "3": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "4": {
        start: {
          line: 15,
          column: 14
        },
        end: {
          line: 15,
          column: 29
        }
      },
      "5": {
        start: {
          line: 16,
          column: 14
        },
        end: {
          line: 16,
          column: 29
        }
      },
      "6": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 29
        }
      },
      "7": {
        start: {
          line: 17,
          column: 18
        },
        end: {
          line: 17,
          column: 29
        }
      },
      "8": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 22
        }
      },
      "9": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "mapFilter",
        decl: {
          start: {
            line: 8,
            column: 30
          },
          end: {
            line: 8,
            column: 39
          }
        },
        loc: {
          start: {
            line: 8,
            column: 48
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 29
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 29
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 29
          }
        }],
        line: 17
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e768496eaefa5e1baf0041b7d4ecb710a8db41b1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function mapFilter
 * @private
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function mapFilter(fn, m) {
  cov_ym52orgra.f[0]++;
  var r = (cov_ym52orgra.s[0]++, new Map());
  var it = (cov_ym52orgra.s[1]++, m.entries());
  var result = (cov_ym52orgra.s[2]++, it.next());
  cov_ym52orgra.s[3]++;

  while (!result.done) {
    var k = (cov_ym52orgra.s[4]++, result.value[0]);
    var v = (cov_ym52orgra.s[5]++, result.value[1]);
    cov_ym52orgra.s[6]++;

    if (fn(k, v)) {
      cov_ym52orgra.b[0][0]++;
      cov_ym52orgra.s[7]++;
      r.set(k, v);
    } else {
      cov_ym52orgra.b[0][1]++;
    }

    cov_ym52orgra.s[8]++;
    result = it.next();
  } // Limited browser support
  // m.forEach((v, k) => {
  //   if (fn(k, v)) r.set(k, v)
  // })
  // babel transpile issues
  // for (const [k, v] of m.entries()) {
  //
  // }


  cov_ym52orgra.s[9]++;
  return r;
}));

/***/ }),

/***/ "./src/map/is.js":
/*!***********************!*\
  !*** ./src/map/is.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./src/is.js");
var cov_24m1ft2iyt = function () {
  var path = "/Volumes/BigOne/Github/fun/src/map/is.js";
  var hash = "a0ad70645721b00add56f782005cb3922f3c1d68";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/map/is.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a0ad70645721b00add56f782005cb3922f3c1d68"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Created by dierickx.len on 01/04/2017.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Map'));

/***/ }),

/***/ "./src/map/keys.js":
/*!*************************!*\
  !*** ./src/map/keys.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_25dlsiziys = function () {
  var path = "/Volumes/BigOne/Github/fun/src/map/keys.js";
  var hash = "89ab675037848cd09e7bcd600cf33864d7298f3f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/map/keys.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "keys",
        decl: {
          start: {
            line: 12,
            column: 30
          },
          end: {
            line: 12,
            column: 34
          }
        },
        loc: {
          start: {
            line: 12,
            column: 39
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "89ab675037848cd09e7bcd600cf33864d7298f3f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Returns the own keys of an Map as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys(a) {
  cov_25dlsiziys.f[0]++;
  cov_25dlsiziys.s[0]++;
  return a.keys();
}));

/***/ }),

/***/ "./src/map/map.js":
/*!************************!*\
  !*** ./src/map/map.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../empty */ "./src/empty.js");
var cov_z0gq3d7o9 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/map/map.js";
  var hash = "446a6f4f12112628139c297985d43b8f0d3aeea8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/map/map.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 15,
          column: 20
        }
      },
      "1": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 18,
          column: 4
        }
      },
      "2": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 27
        }
      },
      "3": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "map",
        decl: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 14,
            column: 33
          }
        },
        loc: {
          start: {
            line: 14,
            column: 42
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 12
          },
          end: {
            line: 16,
            column: 13
          }
        },
        loc: {
          start: {
            line: 16,
            column: 27
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "446a6f4f12112628139c297985d43b8f0d3aeea8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map(cb, a) {
  cov_z0gq3d7o9.f[0]++;
  var r = (cov_z0gq3d7o9.s[0]++, Object(_empty__WEBPACK_IMPORTED_MODULE_1__["default"])(a));
  cov_z0gq3d7o9.s[1]++;
  a.forEach(function (v, k, map) {
    cov_z0gq3d7o9.f[1]++;
    cov_z0gq3d7o9.s[2]++;
    r.set(k, cb(v, k, map));
  });
  cov_z0gq3d7o9.s[3]++;
  return r;
}));

/***/ }),

/***/ "./src/math/gcd.js":
/*!*************************!*\
  !*** ./src/math/gcd.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_8wpkfidz8 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/math/gcd.js";
  var hash = "dc4976c4aeccd00e1a29458ccf6c6a187e4c108a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/math/gcd.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 23
        }
      },
      "1": {
        start: {
          line: 10,
          column: 15
        },
        end: {
          line: 10,
          column: 23
        }
      },
      "2": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 17
        }
      },
      "3": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "gcd",
        decl: {
          start: {
            line: 9,
            column: 30
          },
          end: {
            line: 9,
            column: 33
          }
        },
        loc: {
          start: {
            line: 9,
            column: 41
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 23
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 23
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 23
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "dc4976c4aeccd00e1a29458ccf6c6a187e4c108a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * gcd
 *
 * @function gcd
 * @summary Recursively define the greatest common devisor
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function gcd(p, q) {
  cov_8wpkfidz8.f[0]++;
  cov_8wpkfidz8.s[0]++;

  if (q === 0) {
    cov_8wpkfidz8.b[0][0]++;
    cov_8wpkfidz8.s[1]++;
    return p;
  } else {
    cov_8wpkfidz8.b[0][1]++;
  }

  var r = (cov_8wpkfidz8.s[2]++, p % q);
  cov_8wpkfidz8.s[3]++;
  return gcd(q, r);
}));

/***/ }),

/***/ "./src/max.js":
/*!********************!*\
  !*** ./src/max.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_iqh9llzhe = function () {
  var path = "/Volumes/BigOne/Github/fun/src/max.js";
  var hash = "639d6d0b2cf9ea2592c5a11a6fddf9b740b1858d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/max.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "max",
        decl: {
          start: {
            line: 12,
            column: 30
          },
          end: {
            line: 12,
            column: 33
          }
        },
        loc: {
          start: {
            line: 12,
            column: 41
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 13,
            column: 22
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 13,
            column: 17
          },
          end: {
            line: 13,
            column: 18
          }
        }, {
          start: {
            line: 13,
            column: 21
          },
          end: {
            line: 13,
            column: 22
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "639d6d0b2cf9ea2592c5a11a6fddf9b740b1858d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Returns the largest of the 2 arguments provided
 *
 * @function max
 * @since v1.0.2
 * @param {*} a
 * @param {*} b
 * @return {*}
 **/

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function max(a, b) {
  cov_iqh9llzhe.f[0]++;
  cov_iqh9llzhe.s[0]++;
  return b > a ? (cov_iqh9llzhe.b[0][0]++, b) : (cov_iqh9llzhe.b[0][1]++, a);
}));

/***/ }),

/***/ "./src/min.js":
/*!********************!*\
  !*** ./src/min.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_4inavn26t = function () {
  var path = "/Volumes/BigOne/Github/fun/src/min.js";
  var hash = "ec7ea1369741a2f9f4d9c4db58c8b50a4ccf6078";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/min.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "min",
        decl: {
          start: {
            line: 13,
            column: 30
          },
          end: {
            line: 13,
            column: 33
          }
        },
        loc: {
          start: {
            line: 13,
            column: 41
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 9
          },
          end: {
            line: 14,
            column: 22
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 14,
            column: 17
          },
          end: {
            line: 14,
            column: 18
          }
        }, {
          start: {
            line: 14,
            column: 21
          },
          end: {
            line: 14,
            column: 22
          }
        }],
        line: 14
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ec7ea1369741a2f9f4d9c4db58c8b50a4ccf6078"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Returns the smallest of the 2 arguments provided
 *
 * @function min
 * @desc Returns the smallest of the 2 arguments provided
 * @since v1.0.4
 * @param {*} a
 * @param {*} b
 * @return {*}
 **/

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function min(a, b) {
  cov_4inavn26t.f[0]++;
  cov_4inavn26t.s[0]++;
  return b < a ? (cov_4inavn26t.b[0][0]++, b) : (cov_4inavn26t.b[0][1]++, a);
}));

/***/ }),

/***/ "./src/monads/Either.js":
/*!******************************!*\
  !*** ./src/monads/Either.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Right__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Right */ "./src/monads/Right.js");
/* harmony import */ var _Left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Left */ "./src/monads/Left.js");
var cov_1dqu13q135 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/monads/Either.js";
  var hash = "132b0492c2289131f17ac533abd4c35b14e04f3e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/monads/Either.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 13
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 24
        }
      },
      "2": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "3": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 39
        }
      },
      "4": {
        start: {
          line: 29,
          column: 29
        },
        end: {
          line: 29,
          column: 39
        }
      },
      "5": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 32,
          column: 3
        }
      },
      "6": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 26
        }
      },
      "7": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 24
        }
      },
      "8": {
        start: {
          line: 45,
          column: 0
        },
        end: {
          line: 45,
          column: 32
        }
      },
      "9": {
        start: {
          line: 52,
          column: 0
        },
        end: {
          line: 52,
          column: 31
        }
      },
      "10": {
        start: {
          line: 59,
          column: 0
        },
        end: {
          line: 59,
          column: 32
        }
      },
      "11": {
        start: {
          line: 67,
          column: 0
        },
        end: {
          line: 69,
          column: 1
        }
      },
      "12": {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 68,
          column: 22
        }
      },
      "13": {
        start: {
          line: 77,
          column: 0
        },
        end: {
          line: 79,
          column: 1
        }
      },
      "14": {
        start: {
          line: 78,
          column: 2
        },
        end: {
          line: 78,
          column: 22
        }
      },
      "15": {
        start: {
          line: 87,
          column: 0
        },
        end: {
          line: 89,
          column: 1
        }
      },
      "16": {
        start: {
          line: 88,
          column: 2
        },
        end: {
          line: 88,
          column: 23
        }
      },
      "17": {
        start: {
          line: 97,
          column: 0
        },
        end: {
          line: 99,
          column: 1
        }
      },
      "18": {
        start: {
          line: 98,
          column: 2
        },
        end: {
          line: 98,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 13
          },
          end: {
            line: 13,
            column: 14
          }
        },
        loc: {
          start: {
            line: 13,
            column: 28
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 28,
            column: 12
          },
          end: {
            line: 28,
            column: 13
          }
        },
        loc: {
          start: {
            line: 28,
            column: 27
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 67,
            column: 24
          },
          end: {
            line: 67,
            column: 25
          }
        },
        loc: {
          start: {
            line: 67,
            column: 39
          },
          end: {
            line: 69,
            column: 1
          }
        },
        line: 67
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 77,
            column: 14
          },
          end: {
            line: 77,
            column: 15
          }
        },
        loc: {
          start: {
            line: 77,
            column: 29
          },
          end: {
            line: 79,
            column: 1
          }
        },
        line: 77
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 87,
            column: 25
          },
          end: {
            line: 87,
            column: 26
          }
        },
        loc: {
          start: {
            line: 87,
            column: 40
          },
          end: {
            line: 89,
            column: 1
          }
        },
        line: 87
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 97,
            column: 15
          },
          end: {
            line: 97,
            column: 16
          }
        },
        loc: {
          start: {
            line: 97,
            column: 30
          },
          end: {
            line: 99,
            column: 1
          }
        },
        line: 97
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 39
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 39
          }
        }, {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 39
          }
        }],
        line: 29
      },
      "1": {
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        }, {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        }],
        line: 30
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "132b0492c2289131f17ac533abd4c35b14e04f3e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();



/**
 * @class Either
 * @desc Either monad
 * @param {*} val - Value to be validated
 * @constructor
 * @example
 *
 * const m = Either.of(props.customers).map(contract => customer[0]).getOrElse('No customer found')
 */

cov_1dqu13q135.s[0]++;

var Either = function Either(val) {
  cov_1dqu13q135.f[0]++;
  cov_1dqu13q135.s[1]++;
  return this.Right(val);
};
/**
 * @memberOf Either
 * @function Either.of
 * @desc Creates a Either monad from the provided argument
 * @param {*} val - Val to turn in to a Either monad, can be a function
 * @returns {Either}
 * @example
 *
 * const m = Either.of(props.customers).map(customer => customer[0]).getOrElse('No customer found')
 */


cov_1dqu13q135.s[2]++;

Either.of = function (val) {
  cov_1dqu13q135.f[1]++;
  cov_1dqu13q135.s[3]++;

  if (val instanceof Either) {
    cov_1dqu13q135.b[0][0]++;
    cov_1dqu13q135.s[4]++;
    return val;
  } else {
    cov_1dqu13q135.b[0][1]++;
  }

  cov_1dqu13q135.s[5]++;

  if (this instanceof Either) {
    cov_1dqu13q135.b[1][0]++;
    cov_1dqu13q135.s[6]++;
    return this.Right(val);
  } else {
    cov_1dqu13q135.b[1][1]++;
  }

  cov_1dqu13q135.s[7]++;
  return new Either(val);
};
/**
 * @memberOf Either
 * @property {String} type - Returns the string 'Either' for all Either objects
 * @type {String}
 * @example
 *
 * const m =  Either.of([[1,2],[2,3],[4,5]])
 * m.type === 'Either'
 */


cov_1dqu13q135.s[8]++;
Either.prototype.type = 'Either';
/**
 * @memberOf Either
 * @property Either#isLeft
 * @returns {boolean}
 */

cov_1dqu13q135.s[9]++;
Either.prototype.isLeft = false;
/**
 * @memberOf Either
 * @property Either#isRight
 * @returns {boolean}
 */

cov_1dqu13q135.s[10]++;
Either.prototype.isRight = false;
/**
 * @private
 * @memberOf Either
 * @function Either#Left
 * @returns {Left}
 */

cov_1dqu13q135.s[11]++;

Either.prototype.Left = function (val) {
  cov_1dqu13q135.f[2]++;
  cov_1dqu13q135.s[12]++;
  return new _Left__WEBPACK_IMPORTED_MODULE_1__["default"](val);
};
/**
 * @private
 * @memberOf Either
 * @function Either.Left
 * @returns {Left}
 */


cov_1dqu13q135.s[13]++;

Either.Left = function (val) {
  cov_1dqu13q135.f[3]++;
  cov_1dqu13q135.s[14]++;
  return new _Left__WEBPACK_IMPORTED_MODULE_1__["default"](val);
};
/**
 * @private
 * @memberOf Either
 * @function Either#Right
 * @returns {Right}
 */


cov_1dqu13q135.s[15]++;

Either.prototype.Right = function (val) {
  cov_1dqu13q135.f[4]++;
  cov_1dqu13q135.s[16]++;
  return new _Right__WEBPACK_IMPORTED_MODULE_0__["default"](val);
};
/**
 * @private
 * @memberOf Either
 * @function Either.Right
 * @returns {Right}
 */


cov_1dqu13q135.s[17]++;

Either.Right = function (val) {
  cov_1dqu13q135.f[5]++;
  cov_1dqu13q135.s[18]++;
  return new _Right__WEBPACK_IMPORTED_MODULE_0__["default"](val);
};

/* harmony default export */ __webpack_exports__["default"] = (Either);

/***/ }),

/***/ "./src/monads/Just.js":
/*!****************************!*\
  !*** ./src/monads/Just.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cov_1cxvhl7ogv = function () {
  var path = "/Volumes/BigOne/Github/fun/src/monads/Just.js";
  var hash = "41d48532cd25d058c8edf34ce4e9eca80a3621ee";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/monads/Just.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 11
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 20
        }
      },
      "2": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 13
        }
      },
      "3": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "4": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 13
        }
      },
      "5": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "6": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 11
          },
          end: {
            line: 7,
            column: 12
          }
        },
        loc: {
          start: {
            line: 7,
            column: 26
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 24
          },
          end: {
            line: 17,
            column: 25
          }
        },
        loc: {
          start: {
            line: 17,
            column: 36
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 17
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 27
          },
          end: {
            line: 26,
            column: 28
          }
        },
        loc: {
          start: {
            line: 26,
            column: 39
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 26
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "41d48532cd25d058c8edf34ce4e9eca80a3621ee"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

cov_1cxvhl7ogv.s[0]++;

/**
 * @class Just
 * @param val
 * @returns {Just}
 * @constructor
 */
var Just = function Just(val) {
  cov_1cxvhl7ogv.f[0]++;
  cov_1cxvhl7ogv.s[1]++;
  this.__value = val;
  cov_1cxvhl7ogv.s[2]++;
  return this;
};
/**
 * @memberOf Just
 * @function Just#isJust
 * @returns {boolean}
 */


cov_1cxvhl7ogv.s[3]++;

Just.prototype.isJust = function () {
  cov_1cxvhl7ogv.f[1]++;
  cov_1cxvhl7ogv.s[4]++;
  return true;
};
/**
 * @memberOf Just
 * @function Just#isNothing
 * @returns {boolean}
 */


cov_1cxvhl7ogv.s[5]++;

Just.prototype.isNothing = function () {
  cov_1cxvhl7ogv.f[2]++;
  cov_1cxvhl7ogv.s[6]++;
  return false;
};

/* harmony default export */ __webpack_exports__["default"] = (Just);

/***/ }),

/***/ "./src/monads/Left.js":
/*!****************************!*\
  !*** ./src/monads/Left.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cov_2g0t0a4cyl = function () {
  var path = "/Volumes/BigOne/Github/fun/src/monads/Left.js";
  var hash = "62f6b53071f7ea5e9eff9246c9a00a3f27f28087";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/monads/Left.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 11
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 20
        }
      },
      "2": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 13
        }
      },
      "3": {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 28
        }
      },
      "4": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "5": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 13
        }
      },
      "6": {
        start: {
          line: 37,
          column: 0
        },
        end: {
          line: 39,
          column: 1
        }
      },
      "7": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
          column: 14
        }
      },
      "8": {
        start: {
          line: 47,
          column: 0
        },
        end: {
          line: 49,
          column: 1
        }
      },
      "9": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 48,
          column: 13
        }
      },
      "10": {
        start: {
          line: 57,
          column: 0
        },
        end: {
          line: 59,
          column: 1
        }
      },
      "11": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 58,
          column: 13
        }
      },
      "12": {
        start: {
          line: 67,
          column: 0
        },
        end: {
          line: 69,
          column: 1
        }
      },
      "13": {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 68,
          column: 13
        }
      },
      "14": {
        start: {
          line: 76,
          column: 0
        },
        end: {
          line: 78,
          column: 1
        }
      },
      "15": {
        start: {
          line: 77,
          column: 2
        },
        end: {
          line: 77,
          column: 44
        }
      },
      "16": {
        start: {
          line: 87,
          column: 0
        },
        end: {
          line: 89,
          column: 1
        }
      },
      "17": {
        start: {
          line: 88,
          column: 2
        },
        end: {
          line: 88,
          column: 24
        }
      },
      "18": {
        start: {
          line: 96,
          column: 0
        },
        end: {
          line: 98,
          column: 1
        }
      },
      "19": {
        start: {
          line: 97,
          column: 2
        },
        end: {
          line: 97,
          column: 62
        }
      },
      "20": {
        start: {
          line: 106,
          column: 0
        },
        end: {
          line: 108,
          column: 1
        }
      },
      "21": {
        start: {
          line: 107,
          column: 2
        },
        end: {
          line: 107,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 11
          },
          end: {
            line: 7,
            column: 12
          }
        },
        loc: {
          start: {
            line: 7,
            column: 26
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 28,
            column: 24
          },
          end: {
            line: 28,
            column: 25
          }
        },
        loc: {
          start: {
            line: 28,
            column: 36
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 37,
            column: 25
          },
          end: {
            line: 37,
            column: 26
          }
        },
        loc: {
          start: {
            line: 37,
            column: 37
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 37
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 47,
            column: 20
          },
          end: {
            line: 47,
            column: 21
          }
        },
        loc: {
          start: {
            line: 47,
            column: 33
          },
          end: {
            line: 49,
            column: 1
          }
        },
        line: 47
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 57,
            column: 21
          },
          end: {
            line: 57,
            column: 22
          }
        },
        loc: {
          start: {
            line: 57,
            column: 34
          },
          end: {
            line: 59,
            column: 1
          }
        },
        line: 57
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 67,
            column: 23
          },
          end: {
            line: 67,
            column: 24
          }
        },
        loc: {
          start: {
            line: 67,
            column: 36
          },
          end: {
            line: 69,
            column: 1
          }
        },
        line: 67
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 76,
            column: 26
          },
          end: {
            line: 76,
            column: 27
          }
        },
        loc: {
          start: {
            line: 76,
            column: 38
          },
          end: {
            line: 78,
            column: 1
          }
        },
        line: 76
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 87,
            column: 22
          },
          end: {
            line: 87,
            column: 23
          }
        },
        loc: {
          start: {
            line: 87,
            column: 38
          },
          end: {
            line: 89,
            column: 1
          }
        },
        line: 87
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 96,
            column: 21
          },
          end: {
            line: 96,
            column: 22
          }
        },
        loc: {
          start: {
            line: 96,
            column: 33
          },
          end: {
            line: 98,
            column: 1
          }
        },
        line: 96
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 106,
            column: 27
          },
          end: {
            line: 106,
            column: 28
          }
        },
        loc: {
          start: {
            line: 106,
            column: 40
          },
          end: {
            line: 108,
            column: 1
          }
        },
        line: 106
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "62f6b53071f7ea5e9eff9246c9a00a3f27f28087"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

cov_2g0t0a4cyl.s[0]++;

/**
 * @class Left
 * @param val
 * @returns {Left}
 * @constructor
 */
var Left = function Left(val) {
  cov_2g0t0a4cyl.f[0]++;
  cov_2g0t0a4cyl.s[1]++;
  this.__value = val;
  cov_2g0t0a4cyl.s[2]++;
  return this;
};
/**
 * @memberOf Left
 * @property {String} type - Returns the string 'Left' for all Either objects
 * @type {String}
 * @example
 *
 * const m =  Either.of([[1,2],[2,3],[4,5]])
 * m.type === 'Left'
 */


cov_2g0t0a4cyl.s[3]++;
Left.prototype.type = 'Left';
/**
 * @memberOf Left
 * @function Left#isLeft
 * @returns {boolean}
 */

cov_2g0t0a4cyl.s[4]++;

Left.prototype.isLeft = function () {
  cov_2g0t0a4cyl.f[1]++;
  cov_2g0t0a4cyl.s[5]++;
  return true;
};
/**
 * @memberOf Left
 * @function Left#isRight
 * @returns {boolean}
 */


cov_2g0t0a4cyl.s[6]++;

Left.prototype.isRight = function () {
  cov_2g0t0a4cyl.f[2]++;
  cov_2g0t0a4cyl.s[7]++;
  return false;
};
/**
 * @memberOf Left
 * @function Left#ap
 * @param {*} b
 * @returns {Left}
 */


cov_2g0t0a4cyl.s[8]++;

Left.prototype.ap = function (b) {
  cov_2g0t0a4cyl.f[3]++;
  cov_2g0t0a4cyl.s[9]++;
  return this;
};
/**
 * @memberOf Left
 * @function Left#map
 * @param {Function} f
 * @returns {Left}
 */


cov_2g0t0a4cyl.s[10]++;

Left.prototype.map = function (f) {
  cov_2g0t0a4cyl.f[4]++;
  cov_2g0t0a4cyl.s[11]++;
  return this;
};
/**
 * @memberOf Left
 * @function Left#chain
 * @param {Function} f
 * @returns {Left}
 */


cov_2g0t0a4cyl.s[12]++;

Left.prototype.chain = function (f) {
  cov_2g0t0a4cyl.f[5]++;
  cov_2g0t0a4cyl.s[13]++;
  return this;
};
/**
 * @memberOf Left
 * @function Left#toString
 * @returns {String}
 */


cov_2g0t0a4cyl.s[14]++;

Left.prototype.toString = function () {
  cov_2g0t0a4cyl.f[6]++;
  cov_2g0t0a4cyl.s[15]++;
  return 'Either.Left(' + this.__value + ')';
};
/**
 * @memberOf Left
 * @function Left#cata
 * @param {Function} f
 * @param {Placeholder} _
 * @returns {*}
 */


cov_2g0t0a4cyl.s[16]++;

Left.prototype.cata = function (f, _) {
  cov_2g0t0a4cyl.f[7]++;
  cov_2g0t0a4cyl.s[17]++;
  return f(this.__value);
};
/**
 * @memberOf Left
 * @function Left#get
 * @throws {TypeError}
 */


cov_2g0t0a4cyl.s[18]++;

Left.prototype.get = function () {
  cov_2g0t0a4cyl.f[8]++;
  cov_2g0t0a4cyl.s[19]++;
  throw new TypeError("Can't extract the value of a Left(a).");
};
/**
 * @memberOf Left
 * @function Left#getOrElse
 * @param {*} a
 * @returns {*}
 */


cov_2g0t0a4cyl.s[20]++;

Left.prototype.getOrElse = function (a) {
  cov_2g0t0a4cyl.f[9]++;
  cov_2g0t0a4cyl.s[21]++;
  return a;
};

/* harmony default export */ __webpack_exports__["default"] = (Left);

/***/ }),

/***/ "./src/monads/Maybe.js":
/*!*****************************!*\
  !*** ./src/monads/Maybe.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Just__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Just */ "./src/monads/Just.js");
/* harmony import */ var _Nothing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nothing */ "./src/monads/Nothing.js");
var cov_2em4fj6b0u = function () {
  var path = "/Volumes/BigOne/Github/fun/src/monads/Maybe.js";
  var hash = "bb529b3a1040e348eff28375b00adb6cc7cc940b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/monads/Maybe.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 12
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 20
        }
      },
      "2": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "3": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 38
        }
      },
      "4": {
        start: {
          line: 29,
          column: 28
        },
        end: {
          line: 29,
          column: 38
        }
      },
      "5": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "6": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 22
        }
      },
      "7": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 15
        }
      },
      "8": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 23
        }
      },
      "9": {
        start: {
          line: 46,
          column: 0
        },
        end: {
          line: 46,
          column: 30
        }
      },
      "10": {
        start: {
          line: 62,
          column: 0
        },
        end: {
          line: 64,
          column: 1
        }
      },
      "11": {
        start: {
          line: 63,
          column: 2
        },
        end: {
          line: 63,
          column: 44
        }
      },
      "12": {
        start: {
          line: 72,
          column: 0
        },
        end: {
          line: 77,
          column: 1
        }
      },
      "13": {
        start: {
          line: 73,
          column: 2
        },
        end: {
          line: 75,
          column: 3
        }
      },
      "14": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 25
        }
      },
      "15": {
        start: {
          line: 76,
          column: 2
        },
        end: {
          line: 76,
          column: 34
        }
      },
      "16": {
        start: {
          line: 85,
          column: 0
        },
        end: {
          line: 87,
          column: 1
        }
      },
      "17": {
        start: {
          line: 86,
          column: 2
        },
        end: {
          line: 86,
          column: 20
        }
      },
      "18": {
        start: {
          line: 95,
          column: 0
        },
        end: {
          line: 97,
          column: 1
        }
      },
      "19": {
        start: {
          line: 96,
          column: 2
        },
        end: {
          line: 96,
          column: 38
        }
      },
      "20": {
        start: {
          line: 104,
          column: 0
        },
        end: {
          line: 106,
          column: 1
        }
      },
      "21": {
        start: {
          line: 105,
          column: 2
        },
        end: {
          line: 105,
          column: 31
        }
      },
      "22": {
        start: {
          line: 113,
          column: 0
        },
        end: {
          line: 115,
          column: 1
        }
      },
      "23": {
        start: {
          line: 114,
          column: 2
        },
        end: {
          line: 114,
          column: 26
        }
      },
      "24": {
        start: {
          line: 124,
          column: 0
        },
        end: {
          line: 126,
          column: 1
        }
      },
      "25": {
        start: {
          line: 125,
          column: 2
        },
        end: {
          line: 125,
          column: 22
        }
      },
      "26": {
        start: {
          line: 135,
          column: 0
        },
        end: {
          line: 137,
          column: 1
        }
      },
      "27": {
        start: {
          line: 136,
          column: 2
        },
        end: {
          line: 136,
          column: 30
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 12
          },
          end: {
            line: 13,
            column: 13
          }
        },
        loc: {
          start: {
            line: 13,
            column: 27
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 28,
            column: 11
          },
          end: {
            line: 28,
            column: 12
          }
        },
        loc: {
          start: {
            line: 28,
            column: 26
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 62,
            column: 28
          },
          end: {
            line: 62,
            column: 29
          }
        },
        loc: {
          start: {
            line: 62,
            column: 41
          },
          end: {
            line: 64,
            column: 1
          }
        },
        line: 62
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 72,
            column: 22
          },
          end: {
            line: 72,
            column: 23
          }
        },
        loc: {
          start: {
            line: 72,
            column: 35
          },
          end: {
            line: 77,
            column: 1
          }
        },
        line: 72
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 85,
            column: 26
          },
          end: {
            line: 85,
            column: 27
          }
        },
        loc: {
          start: {
            line: 85,
            column: 39
          },
          end: {
            line: 87,
            column: 1
          }
        },
        line: 85
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 95,
            column: 21
          },
          end: {
            line: 95,
            column: 22
          }
        },
        loc: {
          start: {
            line: 95,
            column: 34
          },
          end: {
            line: 97,
            column: 1
          }
        },
        line: 95
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 104,
            column: 28
          },
          end: {
            line: 104,
            column: 29
          }
        },
        loc: {
          start: {
            line: 104,
            column: 40
          },
          end: {
            line: 106,
            column: 1
          }
        },
        line: 104
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 113,
            column: 25
          },
          end: {
            line: 113,
            column: 26
          }
        },
        loc: {
          start: {
            line: 113,
            column: 37
          },
          end: {
            line: 115,
            column: 1
          }
        },
        line: 113
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 124,
            column: 26
          },
          end: {
            line: 124,
            column: 27
          }
        },
        loc: {
          start: {
            line: 124,
            column: 38
          },
          end: {
            line: 126,
            column: 1
          }
        },
        line: 124
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 135,
            column: 23
          },
          end: {
            line: 135,
            column: 24
          }
        },
        loc: {
          start: {
            line: 135,
            column: 35
          },
          end: {
            line: 137,
            column: 1
          }
        },
        line: 135
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 38
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 38
          }
        }, {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 38
          }
        }],
        line: 29
      },
      "1": {
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        }, {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        }],
        line: 30
      },
      "2": {
        loc: {
          start: {
            line: 63,
            column: 9
          },
          end: {
            line: 63,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 63,
            column: 28
          },
          end: {
            line: 63,
            column: 29
          }
        }, {
          start: {
            line: 63,
            column: 32
          },
          end: {
            line: 63,
            column: 44
          }
        }],
        line: 63
      },
      "3": {
        loc: {
          start: {
            line: 73,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 73,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        }, {
          start: {
            line: 73,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        }],
        line: 73
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "bb529b3a1040e348eff28375b00adb6cc7cc940b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();



/**
 * @class Maybe
 * @desc Maybe monad provides a way to safely wrap null values
 * @param {*} val - Value to be wrapped
 * @constructor
 * @example
 *
 * const m = Maybe.of(props.customers).map(contract => customer[0]).getOrElse('No customer found')
 */

cov_2em4fj6b0u.s[0]++;

var Maybe = function Maybe(val) {
  cov_2em4fj6b0u.f[0]++;
  cov_2em4fj6b0u.s[1]++;
  this.__value = val;
};
/**
 * @memberOf Maybe
 * @function Maybe.of
 * @desc Creates a Maybe monad from the provided argument
 * @param {*} val - Val to turn in to a Maybe monad, can be a function
 * @returns {Maybe}
 * @example
 *
 * const m = Maybe.of(props.customers).map(customer => customer[0]).getOrElse('No customer found')
 */


cov_2em4fj6b0u.s[2]++;

Maybe.of = function (val) {
  cov_2em4fj6b0u.f[1]++;
  cov_2em4fj6b0u.s[3]++;

  if (val instanceof Maybe) {
    cov_2em4fj6b0u.b[0][0]++;
    cov_2em4fj6b0u.s[4]++;
    return val;
  } else {
    cov_2em4fj6b0u.b[0][1]++;
  }

  cov_2em4fj6b0u.s[5]++;

  if (this instanceof Maybe) {
    cov_2em4fj6b0u.b[1][0]++;
    cov_2em4fj6b0u.s[6]++;
    this.__value = val;
    cov_2em4fj6b0u.s[7]++;
    return this;
  } else {
    cov_2em4fj6b0u.b[1][1]++;
  }

  cov_2em4fj6b0u.s[8]++;
  return new Maybe(val);
};
/**
 * @memberOf Maybe
 * @property {String} type - Returns the string 'Maybe' for all Maybe objects
 * @type {String}
 * @example
 *
 * const m =  Maybe.of([[1,2],[2,3],[4,5]])
 * m.type === 'Maybe'
 */


cov_2em4fj6b0u.s[9]++;
Maybe.prototype.type = 'Maybe';
/**
 * @memberOf Maybe
 * @function Maybe#getOrElse
 * @desc Evaluates the Maybe monad and returns either the value from the Maybe or the default value
 * @param {*} n - Default value to return if the Maybe evaluates to undefined or null
 * @returns {*}
 * @example
 *
 * // Get customer from component props
 * const m = Maybe.of(props.customers).map(customer => customer.filter(custObj => custObj.id = 'c001112')).getOrElse([])
 * // Map over the provided array
 * m.map(x => <div>Customer ID: {x.id} </div>)
 *
 */

cov_2em4fj6b0u.s[10]++;

Maybe.prototype.getOrElse = function (n) {
  cov_2em4fj6b0u.f[2]++;
  cov_2em4fj6b0u.s[11]++;
  return this.isNothing() ? (cov_2em4fj6b0u.b[2][0]++, n) : (cov_2em4fj6b0u.b[2][1]++, this.__value);
};
/**
 * @memberOf Maybe
 * @function Maybe#map
 * @param {Function} f
 * @returns {Maybe}
 */


cov_2em4fj6b0u.s[12]++;

Maybe.prototype.map = function (f) {
  cov_2em4fj6b0u.f[3]++;
  cov_2em4fj6b0u.s[13]++;

  if (this.isNothing()) {
    cov_2em4fj6b0u.b[3][0]++;
    cov_2em4fj6b0u.s[14]++;
    return Maybe.of(null);
  } else {
    cov_2em4fj6b0u.b[3][1]++;
  }

  cov_2em4fj6b0u.s[15]++;
  return Maybe.of(f(this.__value));
};
/**
 * @memberOf Maybe
 * @function Maybe#flatMap
 * @param {Function} f
 * @returns {Maybe}
 */


cov_2em4fj6b0u.s[16]++;

Maybe.prototype.flatMap = function (f) {
  cov_2em4fj6b0u.f[4]++;
  cov_2em4fj6b0u.s[17]++;
  return this.map(f);
};
/**
 * @memberOf Maybe
 * @function Mayeb#ap
 * @param {Maybe} m
 * @returns {Maybe}
 */


cov_2em4fj6b0u.s[18]++;

Maybe.prototype.ap = function (m) {
  cov_2em4fj6b0u.f[5]++;
  cov_2em4fj6b0u.s[19]++;
  return Maybe.of(m).map(this.__value);
};
/**
 * @memberOf Maybe
 * @function Maybe#isNothing
 * @returns {boolean}
 */


cov_2em4fj6b0u.s[20]++;

Maybe.prototype.isNothing = function () {
  cov_2em4fj6b0u.f[6]++;
  cov_2em4fj6b0u.s[21]++;
  return this.__value == null;
};
/**
 * @memberOf Maybe
 * @function Maybe#isJust
 * @returns {boolean}
 */


cov_2em4fj6b0u.s[22]++;

Maybe.prototype.isJust = function () {
  cov_2em4fj6b0u.f[7]++;
  cov_2em4fj6b0u.s[23]++;
  return !this.isNothing();
};
/**
 * @private
 * @memberOf Maybe
 * @function Maybe#Nothing
 * @returns {Nothing}
 * @constructor
 */


cov_2em4fj6b0u.s[24]++;

Maybe.prototype.Nothing = function () {
  cov_2em4fj6b0u.f[8]++;
  cov_2em4fj6b0u.s[25]++;
  return new _Nothing__WEBPACK_IMPORTED_MODULE_1__["default"]();
};
/**
 * @private
 * @memberOf Maybe
 * @fucntion Maybe#Just
 * @returns {Just}
 * @constructor
 */


cov_2em4fj6b0u.s[26]++;

Maybe.prototype.Just = function () {
  cov_2em4fj6b0u.f[9]++;
  cov_2em4fj6b0u.s[27]++;
  return new _Just__WEBPACK_IMPORTED_MODULE_0__["default"](this._value);
};

/* harmony default export */ __webpack_exports__["default"] = (Maybe);

/***/ }),

/***/ "./src/monads/Nothing.js":
/*!*******************************!*\
  !*** ./src/monads/Nothing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cov_1hl0x29nf1 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/monads/Nothing.js";
  var hash = "467615d989b8e5244576be8dd00a562deec6b87a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/monads/Nothing.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 14
        },
        end: {
          line: 6,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "2": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 14
        }
      },
      "3": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "4": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 13
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 14
          },
          end: {
            line: 5,
            column: 15
          }
        },
        loc: {
          start: {
            line: 5,
            column: 26
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 27
          },
          end: {
            line: 13,
            column: 28
          }
        },
        loc: {
          start: {
            line: 13,
            column: 39
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 22,
            column: 30
          },
          end: {
            line: 22,
            column: 31
          }
        },
        loc: {
          start: {
            line: 22,
            column: 42
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 22
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "467615d989b8e5244576be8dd00a562deec6b87a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

cov_1hl0x29nf1.s[0]++;

/**
 * @class Nothing
 * @constructor
 */
var Nothing = function Nothing() {
  cov_1hl0x29nf1.f[0]++;
};
/**
 * @memberOf Nothing
 * @function Nothing#isJust
 * @returns {boolean}
 */


cov_1hl0x29nf1.s[1]++;

Nothing.prototype.isJust = function () {
  cov_1hl0x29nf1.f[1]++;
  cov_1hl0x29nf1.s[2]++;
  return false;
};
/**
 * @memberOf Nothing
 * @function Nothing#isNothing
 * @returns {boolean}
 */


cov_1hl0x29nf1.s[3]++;

Nothing.prototype.isNothing = function () {
  cov_1hl0x29nf1.f[2]++;
  cov_1hl0x29nf1.s[4]++;
  return true;
};

/* harmony default export */ __webpack_exports__["default"] = (Nothing);

/***/ }),

/***/ "./src/monads/Right.js":
/*!*****************************!*\
  !*** ./src/monads/Right.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cov_kxlvlo4d5 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/monads/Right.js";
  var hash = "740231159c83cb3e4b3e833580d35f262473f8cf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/monads/Right.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 12
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 20
        }
      },
      "2": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 13
        }
      },
      "3": {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 30
        }
      },
      "4": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "5": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 13
        }
      },
      "6": {
        start: {
          line: 37,
          column: 0
        },
        end: {
          line: 39,
          column: 1
        }
      },
      "7": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
          column: 14
        }
      },
      "8": {
        start: {
          line: 47,
          column: 0
        },
        end: {
          line: 49,
          column: 1
        }
      },
      "9": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 48,
          column: 28
        }
      },
      "10": {
        start: {
          line: 57,
          column: 0
        },
        end: {
          line: 59,
          column: 1
        }
      },
      "11": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 58,
          column: 35
        }
      },
      "12": {
        start: {
          line: 67,
          column: 0
        },
        end: {
          line: 69,
          column: 1
        }
      },
      "13": {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 68,
          column: 24
        }
      },
      "14": {
        start: {
          line: 76,
          column: 0
        },
        end: {
          line: 78,
          column: 1
        }
      },
      "15": {
        start: {
          line: 77,
          column: 2
        },
        end: {
          line: 77,
          column: 45
        }
      },
      "16": {
        start: {
          line: 87,
          column: 0
        },
        end: {
          line: 89,
          column: 1
        }
      },
      "17": {
        start: {
          line: 88,
          column: 2
        },
        end: {
          line: 88,
          column: 24
        }
      },
      "18": {
        start: {
          line: 96,
          column: 0
        },
        end: {
          line: 98,
          column: 1
        }
      },
      "19": {
        start: {
          line: 97,
          column: 2
        },
        end: {
          line: 97,
          column: 21
        }
      },
      "20": {
        start: {
          line: 107,
          column: 0
        },
        end: {
          line: 109,
          column: 1
        }
      },
      "21": {
        start: {
          line: 108,
          column: 2
        },
        end: {
          line: 108,
          column: 21
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 12
          },
          end: {
            line: 7,
            column: 13
          }
        },
        loc: {
          start: {
            line: 7,
            column: 27
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 28,
            column: 26
          },
          end: {
            line: 28,
            column: 27
          }
        },
        loc: {
          start: {
            line: 28,
            column: 38
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 37,
            column: 25
          },
          end: {
            line: 37,
            column: 26
          }
        },
        loc: {
          start: {
            line: 37,
            column: 37
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 37
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 47,
            column: 21
          },
          end: {
            line: 47,
            column: 22
          }
        },
        loc: {
          start: {
            line: 47,
            column: 34
          },
          end: {
            line: 49,
            column: 1
          }
        },
        line: 47
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 57,
            column: 22
          },
          end: {
            line: 57,
            column: 23
          }
        },
        loc: {
          start: {
            line: 57,
            column: 35
          },
          end: {
            line: 59,
            column: 1
          }
        },
        line: 57
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 67,
            column: 24
          },
          end: {
            line: 67,
            column: 25
          }
        },
        loc: {
          start: {
            line: 67,
            column: 37
          },
          end: {
            line: 69,
            column: 1
          }
        },
        line: 67
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 76,
            column: 27
          },
          end: {
            line: 76,
            column: 28
          }
        },
        loc: {
          start: {
            line: 76,
            column: 39
          },
          end: {
            line: 78,
            column: 1
          }
        },
        line: 76
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 87,
            column: 23
          },
          end: {
            line: 87,
            column: 24
          }
        },
        loc: {
          start: {
            line: 87,
            column: 39
          },
          end: {
            line: 89,
            column: 1
          }
        },
        line: 87
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 96,
            column: 22
          },
          end: {
            line: 96,
            column: 23
          }
        },
        loc: {
          start: {
            line: 96,
            column: 34
          },
          end: {
            line: 98,
            column: 1
          }
        },
        line: 96
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 107,
            column: 28
          },
          end: {
            line: 107,
            column: 29
          }
        },
        loc: {
          start: {
            line: 107,
            column: 41
          },
          end: {
            line: 109,
            column: 1
          }
        },
        line: 107
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "740231159c83cb3e4b3e833580d35f262473f8cf"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

cov_kxlvlo4d5.s[0]++;

/**
 * @class Right
 * @param val
 * @returns {Right}
 * @constructor
 */
var Right = function Right(val) {
  cov_kxlvlo4d5.f[0]++;
  cov_kxlvlo4d5.s[1]++;
  this.__value = val;
  cov_kxlvlo4d5.s[2]++;
  return this;
};
/**
 * @memberOf Right
 * @property {String} type - Returns the string 'Right' for all Either objects
 * @type {String}
 * @example
 *
 * const m =  Either.of([[1,2],[2,3],[4,5]])
 * m.type === 'Right'
 */


cov_kxlvlo4d5.s[3]++;
Right.prototype.type = 'Right';
/**
 * @memberOf Right
 * @function Right#isRight
 * @returns {boolean}
 */

cov_kxlvlo4d5.s[4]++;

Right.prototype.isRight = function () {
  cov_kxlvlo4d5.f[1]++;
  cov_kxlvlo4d5.s[5]++;
  return true;
};
/**
 * @memberOf Right
 * @function Right#isLeft
 * @returns {boolean}
 */


cov_kxlvlo4d5.s[6]++;

Right.prototype.isLeft = function () {
  cov_kxlvlo4d5.f[2]++;
  cov_kxlvlo4d5.s[7]++;
  return false;
};
/**
 * @memberOf Right
 * @function Right#ap
 * @param a
 * @returns {Right}
 */


cov_kxlvlo4d5.s[8]++;

Right.prototype.ap = function (b) {
  cov_kxlvlo4d5.f[3]++;
  cov_kxlvlo4d5.s[9]++;
  return b.map(this.__value);
};
/**
 * @memberOf Right
 * @function Right#map
 * @param {Function} f
 * @returns {*}
 */


cov_kxlvlo4d5.s[10]++;

Right.prototype.map = function (f) {
  cov_kxlvlo4d5.f[4]++;
  cov_kxlvlo4d5.s[11]++;
  return new Right(f(this.__value));
};
/**
 * @memberOf Right
 * @function Right#chain
 * @param {Function} f
 * @returns {*}
 */


cov_kxlvlo4d5.s[12]++;

Right.prototype.chain = function (f) {
  cov_kxlvlo4d5.f[5]++;
  cov_kxlvlo4d5.s[13]++;
  return f(this.__value);
};
/**
 * @memberOf Right
 * @function Right#toString
 * @returns {string}
 */


cov_kxlvlo4d5.s[14]++;

Right.prototype.toString = function () {
  cov_kxlvlo4d5.f[6]++;
  cov_kxlvlo4d5.s[15]++;
  return 'Either.Right(' + this.__value + ')';
};
/**
 * @memberOf Right
 * @function Right#cata
 * @param {Placeholder} _
 * @param {Function} g
 * @returns {*}
 */


cov_kxlvlo4d5.s[16]++;

Right.prototype.cata = function (_, g) {
  cov_kxlvlo4d5.f[7]++;
  cov_kxlvlo4d5.s[17]++;
  return g(this.__value);
};
/**
 * @memberOf Right
 * @function Right#get
 * @returns {*}
 */


cov_kxlvlo4d5.s[18]++;

Right.prototype.get = function () {
  cov_kxlvlo4d5.f[8]++;
  cov_kxlvlo4d5.s[19]++;
  return this.__value;
};
/**
 * @memberOf Right
 * @function Right#getOrElse
 * @param {Function} f
 * @returns {*}
 */


cov_kxlvlo4d5.s[20]++;

Right.prototype.getOrElse = function (f) {
  cov_kxlvlo4d5.f[9]++;
  cov_kxlvlo4d5.s[21]++;
  return this.__value;
};

/* harmony default export */ __webpack_exports__["default"] = (Right);

/***/ }),

/***/ "./src/not.js":
/*!********************!*\
  !*** ./src/not.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_a1y68j7z5 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/not.js";
  var hash = "6150155f254dccb526c352ada2f836206bd9ca36";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/not.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 11
        }
      }
    },
    fnMap: {
      "0": {
        name: "not",
        decl: {
          start: {
            line: 6,
            column: 30
          },
          end: {
            line: 6,
            column: 33
          }
        },
        loc: {
          start: {
            line: 6,
            column: 38
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "6150155f254dccb526c352ada2f836206bd9ca36"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function not
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function not(x) {
  cov_a1y68j7z5.f[0]++;
  cov_a1y68j7z5.s[0]++;
  return !x;
}));

/***/ }),

/***/ "./src/null/is.js":
/*!************************!*\
  !*** ./src/null/is.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./src/is.js");
var cov_1fdj2vrdxc = function () {
  var path = "/Volumes/BigOne/Github/fun/src/null/is.js";
  var hash = "198ec2a176f55c5afdbdb667ee8b0d98ef57b5ee";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/null/is.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "198ec2a176f55c5afdbdb667ee8b0d98ef57b5ee"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Created by dierickx.len on 03/02/2019
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('null'));

/***/ }),

/***/ "./src/number/add.js":
/*!***************************!*\
  !*** ./src/number/add.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_20dkd33l2s = function () {
  var path = "/Volumes/BigOne/Github/fun/src/number/add.js";
  var hash = "c49ec379c5f360310ed12a37eaf39637886a1515";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/number/add.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "add",
        decl: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 14,
            column: 33
          }
        },
        loc: {
          start: {
            line: 14,
            column: 41
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c49ec379c5f360310ed12a37eaf39637886a1515"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function add(a, b) {
  cov_20dkd33l2s.f[0]++;
  cov_20dkd33l2s.s[0]++;
  return +a + +b;
}));

/***/ }),

/***/ "./src/number/divide.js":
/*!******************************!*\
  !*** ./src/number/divide.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_1g6bubkbgr = function () {
  var path = "/Volumes/BigOne/Github/fun/src/number/divide.js";
  var hash = "bc8773492628fd0dd8dd253d3a4eb5c7119928aa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/number/divide.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "divide",
        decl: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 14,
            column: 36
          }
        },
        loc: {
          start: {
            line: 14,
            column: 44
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "bc8773492628fd0dd8dd253d3a4eb5c7119928aa"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function divide(a, b) {
  cov_1g6bubkbgr.f[0]++;
  cov_1g6bubkbgr.s[0]++;
  return +a / +b;
}));

/***/ }),

/***/ "./src/number/is.js":
/*!**************************!*\
  !*** ./src/number/is.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./src/is.js");
var cov_1kz83lfvp7 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/number/is.js";
  var hash = "2e17a2989e2cea2835e585953afff907c89e4d35";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/number/is.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "2e17a2989e2cea2835e585953afff907c89e4d35"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @private
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Number'));

/***/ }),

/***/ "./src/number/isNan.js":
/*!*****************************!*\
  !*** ./src/number/isNan.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNan; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./src/number/is.js");
/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../and */ "./src/and.js");
var cov_1j4nxlol3u = function () {
  var path = "/Volumes/BigOne/Github/fun/src/number/isNan.js";
  var hash = "16d3582b7edf7018cf09b1def568e9265e43725e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/number/isNan.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "isNan",
        decl: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 29
          }
        },
        loc: {
          start: {
            line: 9,
            column: 34
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "16d3582b7edf7018cf09b1def568e9265e43725e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function isNaN
 * @description Checks if number is NAN

 */


function isNan(x) {
  cov_1j4nxlol3u.f[0]++;
  cov_1j4nxlol3u.s[0]++;
  return Object(_and__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])(x), isNaN(x));
}
;

/***/ }),

/***/ "./src/number/multiply.js":
/*!********************************!*\
  !*** ./src/number/multiply.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_9cfpzx0cb = function () {
  var path = "/Volumes/BigOne/Github/fun/src/number/multiply.js";
  var hash = "e2ec1e2ca4578b6c9ed2db22ea5d2278b570dffd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/number/multiply.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "multiply",
        decl: {
          start: {
            line: 13,
            column: 30
          },
          end: {
            line: 13,
            column: 38
          }
        },
        loc: {
          start: {
            line: 13,
            column: 46
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e2ec1e2ca4578b6c9ed2db22ea5d2278b570dffd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function multiply(a, b) {
  cov_9cfpzx0cb.f[0]++;
  cov_9cfpzx0cb.s[0]++;
  return +a * +b;
}));

/***/ }),

/***/ "./src/number/sum.js":
/*!***************************!*\
  !*** ./src/number/sum.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add */ "./src/number/add.js");
/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fold */ "./src/fold.js");
var cov_g1pia842a = function () {
  var path = "/Volumes/BigOne/Github/fun/src/number/sum.js";
  var hash = "91d02194fbe206c03ab34d4b4645eec9e8bb9c84";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/number/sum.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "sum",
        decl: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 14,
            column: 33
          }
        },
        loc: {
          start: {
            line: 14,
            column: 38
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "91d02194fbe206c03ab34d4b4645eec9e8bb9c84"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Returns the sum of the numbers in an array
 *
 * @function
 * @since v1.0.2
 * @sig [Number] -> Number
 * @param {Array} a
 * @return {Number}
 **/



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function sum(a) {
  cov_g1pia842a.f[0]++;
  cov_g1pia842a.s[0]++;
  return Object(_fold__WEBPACK_IMPORTED_MODULE_2__["default"])(_add__WEBPACK_IMPORTED_MODULE_1__["default"], 0, a);
}));

/***/ }),

/***/ "./src/object/equals.js":
/*!******************************!*\
  !*** ./src/object/equals.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exists */ "./src/exists.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../not */ "./src/not.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../equals */ "./src/equals.js");
var cov_2ls2gdr9gz = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/equals.js";
  var hash = "d2c89f73bbcf3606311245b3071b15457ca8f6e2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/equals.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "1": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 51
        }
      },
      "2": {
        start: {
          line: 14,
          column: 39
        },
        end: {
          line: 14,
          column: 51
        }
      },
      "3": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "4": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 61
        }
      },
      "5": {
        start: {
          line: 18,
          column: 49
        },
        end: {
          line: 18,
          column: 61
        }
      },
      "6": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 13
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 21
          },
          end: {
            line: 11,
            column: 22
          }
        },
        loc: {
          start: {
            line: 11,
            column: 31
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 11
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 51
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 51
          }
        }, {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 51
          }
        }],
        line: 14
      },
      "1": {
        loc: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 18,
            column: 61
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 18,
            column: 61
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 18,
            column: 61
          }
        }],
        line: 18
      },
      "2": {
        loc: {
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 28
          }
        }, {
          start: {
            line: 18,
            column: 32
          },
          end: {
            line: 18,
            column: 47
          }
        }],
        line: 18
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "d2c89f73bbcf3606311245b3071b15457ca8f6e2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**

 * equals
 * checks for equality
 */




/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (x, y) {
  cov_2ls2gdr9gz.f[0]++;
  cov_2ls2gdr9gz.s[0]++;

  for (var keyX in x) {
    cov_2ls2gdr9gz.s[1]++;

    // noinspection JSUnfilteredForInLoop
    if (Object(_not__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_equals__WEBPACK_IMPORTED_MODULE_3__["default"])(x[keyX], y[keyX]))) {
      cov_2ls2gdr9gz.b[0][0]++;
      cov_2ls2gdr9gz.s[2]++;
      return false;
    } else {
      cov_2ls2gdr9gz.b[0][1]++;
    }
  }

  cov_2ls2gdr9gz.s[3]++;

  for (var keyY in y) {
    cov_2ls2gdr9gz.s[4]++;

    if ((cov_2ls2gdr9gz.b[2][0]++, Object(_not__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(x[keyY]))) && (cov_2ls2gdr9gz.b[2][1]++, Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(y[keyY]))) {
      cov_2ls2gdr9gz.b[1][0]++;
      cov_2ls2gdr9gz.s[5]++;
      return false;
    } else {
      cov_2ls2gdr9gz.b[1][1]++;
    }
  }

  cov_2ls2gdr9gz.s[6]++;
  return true;
}));

/***/ }),

/***/ "./src/object/filter.js":
/*!******************************!*\
  !*** ./src/object/filter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./src/object/keys.js");
var cov_bs93ftriq = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/filter.js";
  var hash = "a8517df08b16dd997741b7b059245ea4bc51f509";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/filter.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 10
        },
        end: {
          line: 10,
          column: 12
        }
      },
      "1": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 19
        }
      },
      "2": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "3": {
        start: {
          line: 12,
          column: 15
        },
        end: {
          line: 12,
          column: 16
        }
      },
      "4": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 38
        }
      },
      "5": {
        start: {
          line: 13,
          column: 21
        },
        end: {
          line: 13,
          column: 38
        }
      },
      "6": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "objectFilter",
        decl: {
          start: {
            line: 9,
            column: 30
          },
          end: {
            line: 9,
            column: 42
          }
        },
        loc: {
          start: {
            line: 9,
            column: 51
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 38
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 38
          }
        }, {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 38
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a8517df08b16dd997741b7b059245ea4bc51f509"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function objectFilter
 * @private
 *
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function objectFilter(fn, o) {
  cov_bs93ftriq.f[0]++;
  var r = (cov_bs93ftriq.s[0]++, {});
  var k = (cov_bs93ftriq.s[1]++, Object(_keys__WEBPACK_IMPORTED_MODULE_1__["default"])(o));
  cov_bs93ftriq.s[2]++;

  for (var i = (cov_bs93ftriq.s[3]++, 0); i < k.length; i++) {
    cov_bs93ftriq.s[4]++;

    if (fn(o[k[i]])) {
      cov_bs93ftriq.b[0][0]++;
      cov_bs93ftriq.s[5]++;
      r[k[i]] = o[k[i]];
    } else {
      cov_bs93ftriq.b[0][1]++;
    }
  }

  cov_bs93ftriq.s[6]++;
  return r;
}));

/***/ }),

/***/ "./src/object/fold.js":
/*!****************************!*\
  !*** ./src/object/fold.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./src/object/keys.js");
var cov_1mcact3jdk = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/fold.js";
  var hash = "5a662570c63a6f236fd2e36dd0fc1537f649762a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/fold.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 12
        },
        end: {
          line: 10,
          column: 19
        }
      },
      "1": {
        start: {
          line: 11,
          column: 10
        },
        end: {
          line: 11,
          column: 12
        }
      },
      "2": {
        start: {
          line: 12,
          column: 12
        },
        end: {
          line: 12,
          column: 20
        }
      },
      "3": {
        start: {
          line: 13,
          column: 10
        },
        end: {
          line: 13,
          column: 22
        }
      },
      "4": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 16,
          column: 3
        }
      },
      "5": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 31
        }
      },
      "6": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "fold",
        decl: {
          start: {
            line: 9,
            column: 30
          },
          end: {
            line: 9,
            column: 34
          }
        },
        loc: {
          start: {
            line: 9,
            column: 49
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "5a662570c63a6f236fd2e36dd0fc1537f649762a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function fold
 * @private
 *
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function fold(cb, init, o) {
  cov_1mcact3jdk.f[0]++;
  var k = (cov_1mcact3jdk.s[0]++, Object(_keys__WEBPACK_IMPORTED_MODULE_1__["default"])(o));
  var i = (cov_1mcact3jdk.s[1]++, -1);
  var l = (cov_1mcact3jdk.s[2]++, k.length);
  var r = (cov_1mcact3jdk.s[3]++, Object(init));
  cov_1mcact3jdk.s[4]++;

  while (++i < l) {
    cov_1mcact3jdk.s[5]++;
    r = cb(r, o[k[i]], k[i], o);
  }

  cov_1mcact3jdk.s[6]++;
  return r;
}));

/***/ }),

/***/ "./src/object/has.js":
/*!***************************!*\
  !*** ./src/object/has.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_upisfl8c7 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/has.js";
  var hash = "5144e33bec53130357618ee40223077521e73856";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/has.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 56
        }
      }
    },
    fnMap: {
      "0": {
        name: "has",
        decl: {
          start: {
            line: 13,
            column: 30
          },
          end: {
            line: 13,
            column: 33
          }
        },
        loc: {
          start: {
            line: 13,
            column: 46
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "5144e33bec53130357618ee40223077521e73856"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function has(prop, obj) {
  cov_upisfl8c7.f[0]++;
  cov_upisfl8c7.s[0]++;
  return Object.prototype.hasOwnProperty.call(obj, prop);
}));

/***/ }),

/***/ "./src/object/hasIn.js":
/*!*****************************!*\
  !*** ./src/object/hasIn.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_23j3jey1oc = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/hasIn.js";
  var hash = "ad026485ac1e5fdb4ce3a3a2a899e95bf32bb4c0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/hasIn.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "hasIn",
        decl: {
          start: {
            line: 13,
            column: 30
          },
          end: {
            line: 13,
            column: 35
          }
        },
        loc: {
          start: {
            line: 13,
            column: 48
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ad026485ac1e5fdb4ce3a3a2a899e95bf32bb4c0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function hasIn(prop, obj) {
  cov_23j3jey1oc.f[0]++;
  cov_23j3jey1oc.s[0]++;
  return prop in obj;
}));

/***/ }),

/***/ "./src/object/is.js":
/*!**************************!*\
  !*** ./src/object/is.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./src/is.js");
var cov_2iw96sa11 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/is.js";
  var hash = "367fa20fa3bacddb4172ed5fd97fa9338dafe412";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/is.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "367fa20fa3bacddb4172ed5fd97fa9338dafe412"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**

 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Object'));

/***/ }),

/***/ "./src/object/keys.js":
/*!****************************!*\
  !*** ./src/object/keys.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_2lj0qdrdk0 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/keys.js";
  var hash = "e34baa69b55b20ff1af2b60ac639ef480fe9f774";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/keys.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "keys",
        decl: {
          start: {
            line: 12,
            column: 30
          },
          end: {
            line: 12,
            column: 34
          }
        },
        loc: {
          start: {
            line: 12,
            column: 39
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e34baa69b55b20ff1af2b60ac639ef480fe9f774"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Returns the own keys of an object as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys(a) {
  cov_2lj0qdrdk0.f[0]++;
  cov_2lj0qdrdk0.s[0]++;
  return Object.keys(Object(a));
}));

/***/ }),

/***/ "./src/object/keysIn.js":
/*!******************************!*\
  !*** ./src/object/keysIn.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_1cpwfjvd26 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/keysIn.js";
  var hash = "e08b22815607e3e05190e2bdd0e58eb408b8b996";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/keysIn.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 12
        },
        end: {
          line: 13,
          column: 14
        }
      },
      "1": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 16,
          column: 3
        }
      },
      "2": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 13
        }
      },
      "3": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "keys",
        decl: {
          start: {
            line: 12,
            column: 30
          },
          end: {
            line: 12,
            column: 34
          }
        },
        loc: {
          start: {
            line: 12,
            column: 39
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e08b22815607e3e05190e2bdd0e58eb408b8b996"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Returns all the keys of an object as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys(a) {
  cov_1cpwfjvd26.f[0]++;
  var r = (cov_1cpwfjvd26.s[0]++, []);
  cov_1cpwfjvd26.s[1]++;

  for (var k in a) {
    cov_1cpwfjvd26.s[2]++;
    r.push(k);
  }

  cov_1cpwfjvd26.s[3]++;
  return r;
}));

/***/ }),

/***/ "./src/object/map.js":
/*!***************************!*\
  !*** ./src/object/map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../empty */ "./src/empty.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys */ "./src/object/keys.js");
var cov_piv4pcduu = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/map.js";
  var hash = "1bf1e515912b6480e3391ff6a53e6f41bbc5a622";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/map.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 12
        },
        end: {
          line: 16,
          column: 19
        }
      },
      "1": {
        start: {
          line: 17,
          column: 10
        },
        end: {
          line: 17,
          column: 12
        }
      },
      "2": {
        start: {
          line: 18,
          column: 12
        },
        end: {
          line: 18,
          column: 20
        }
      },
      "3": {
        start: {
          line: 19,
          column: 12
        },
        end: {
          line: 19,
          column: 20
        }
      },
      "4": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "5": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 34
        }
      },
      "6": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "map",
        decl: {
          start: {
            line: 15,
            column: 30
          },
          end: {
            line: 15,
            column: 33
          }
        },
        loc: {
          start: {
            line: 15,
            column: 42
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 15
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1bf1e515912b6480e3391ff6a53e6f41bbc5a622"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map(cb, a) {
  cov_piv4pcduu.f[0]++;
  var k = (cov_piv4pcduu.s[0]++, Object(_keys__WEBPACK_IMPORTED_MODULE_2__["default"])(a));
  var i = (cov_piv4pcduu.s[1]++, -1);
  var l = (cov_piv4pcduu.s[2]++, k.length);
  var r = (cov_piv4pcduu.s[3]++, Object(_empty__WEBPACK_IMPORTED_MODULE_1__["default"])(a));
  cov_piv4pcduu.s[4]++;

  while (++i < l) {
    cov_piv4pcduu.s[5]++;
    r[k[i]] = cb(a[k[i]], k[i], a);
  }

  cov_piv4pcduu.s[6]++;
  return r;
}));

/***/ }),

/***/ "./src/object/merge.js":
/*!*****************************!*\
  !*** ./src/object/merge.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../identical */ "./src/identical.js");
/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/is */ "./src/object/is.js");
/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../array/is */ "./src/array/is.js");
/* harmony import */ var _array_union__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../array/union */ "./src/array/union.js");
var cov_yyq38qu6r = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/merge.js";
  var hash = "65ef350b18c243cee408fcbce0847764ea60f83b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/merge.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 14
        },
        end: {
          line: 34,
          column: 2
        }
      },
      "1": {
        start: {
          line: 13,
          column: 15
        },
        end: {
          line: 13,
          column: 38
        }
      },
      "2": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 17,
          column: 3
        }
      },
      "3": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 34
        }
      },
      "4": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 32,
          column: 3
        }
      },
      "5": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "6": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 14
        }
      },
      "7": {
        start: {
          line: 22,
          column: 21
        },
        end: {
          line: 22,
          column: 30
        }
      },
      "8": {
        start: {
          line: 23,
          column: 21
        },
        end: {
          line: 23,
          column: 30
        }
      },
      "9": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 31,
          column: 5
        }
      },
      "10": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 45
        }
      },
      "11": {
        start: {
          line: 27,
          column: 11
        },
        end: {
          line: 31,
          column: 5
        }
      },
      "12": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 45
        }
      },
      "13": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 28
        }
      },
      "14": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 20
          },
          end: {
            line: 12,
            column: 21
          }
        },
        loc: {
          start: {
            line: 12,
            column: 36
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        }, {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        }, {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        }],
        line: 19
      },
      "2": {
        loc: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        }, {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        }],
        line: 25
      },
      "3": {
        loc: {
          start: {
            line: 25,
            column: 8
          },
          end: {
            line: 25,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 25,
            column: 8
          },
          end: {
            line: 25,
            column: 26
          }
        }, {
          start: {
            line: 25,
            column: 30
          },
          end: {
            line: 25,
            column: 48
          }
        }],
        line: 25
      },
      "4": {
        loc: {
          start: {
            line: 27,
            column: 11
          },
          end: {
            line: 31,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 11
          },
          end: {
            line: 31,
            column: 5
          }
        }, {
          start: {
            line: 27,
            column: 11
          },
          end: {
            line: 31,
            column: 5
          }
        }],
        line: 27
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "65ef350b18c243cee408fcbce0847764ea60f83b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**

 * equals
 * checks for equality
 */





var merge = (cov_yyq38qu6r.s[0]++, Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (objL, objR) {
  cov_yyq38qu6r.f[0]++;
  var result = (cov_yyq38qu6r.s[1]++, Object.assign({}, objL));
  cov_yyq38qu6r.s[2]++;

  if (Object(_identical__WEBPACK_IMPORTED_MODULE_1__["default"])(objL, objR)) {
    cov_yyq38qu6r.b[0][0]++;
    cov_yyq38qu6r.s[3]++;
    return Object.assign({}, objL);
  } else {
    cov_yyq38qu6r.b[0][1]++;
  }

  cov_yyq38qu6r.s[4]++;

  for (var key in objR) {
    cov_yyq38qu6r.s[5]++;

    if (!Object.prototype.hasOwnProperty.call(objR, key)) {
      cov_yyq38qu6r.b[1][0]++;
      cov_yyq38qu6r.s[6]++;
      continue;
    } else {
      cov_yyq38qu6r.b[1][1]++;
    }

    var oldValue = (cov_yyq38qu6r.s[7]++, objR[key]);
    var newValue = (cov_yyq38qu6r.s[8]++, objL[key]);
    cov_yyq38qu6r.s[9]++;

    if ((cov_yyq38qu6r.b[3][0]++, Object(_object_is__WEBPACK_IMPORTED_MODULE_2__["default"])(oldValue)) && (cov_yyq38qu6r.b[3][1]++, Object(_object_is__WEBPACK_IMPORTED_MODULE_2__["default"])(newValue))) {
      cov_yyq38qu6r.b[2][0]++;
      cov_yyq38qu6r.s[10]++;
      result[key] = merge(oldValue, newValue);
    } else {
      cov_yyq38qu6r.b[2][1]++;
      cov_yyq38qu6r.s[11]++;

      if (Object(_array_is__WEBPACK_IMPORTED_MODULE_3__["default"])(newValue)) {
        cov_yyq38qu6r.b[4][0]++;
        cov_yyq38qu6r.s[12]++;
        result[key] = Object(_array_union__WEBPACK_IMPORTED_MODULE_4__["default"])(newValue, oldValue);
      } else {
        cov_yyq38qu6r.b[4][1]++;
        cov_yyq38qu6r.s[13]++;
        result[key] = oldValue; // TODO: this is a reference, should be clone
      }
    }
  }

  cov_yyq38qu6r.s[14]++;
  return result;
}));
/* harmony default export */ __webpack_exports__["default"] = (merge);

/***/ }),

/***/ "./src/object/omit.js":
/*!****************************!*\
  !*** ./src/object/omit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_nh2c756s1 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/omit.js";
  var hash = "ea512156db1b9be56f46281205a9a0a7adbe0073";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/omit.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 15
        },
        end: {
          line: 9,
          column: 17
        }
      },
      "1": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 15,
          column: 4
        }
      },
      "2": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 36
        }
      },
      "3": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 26
        }
      },
      "4": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 21
          },
          end: {
            line: 8,
            column: 22
          }
        },
        loc: {
          start: {
            line: 8,
            column: 37
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 26
          },
          end: {
            line: 11,
            column: 27
          }
        },
        loc: {
          start: {
            line: 11,
            column: 35
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 13,
            column: 13
          },
          end: {
            line: 13,
            column: 14
          }
        },
        loc: {
          start: {
            line: 13,
            column: 22
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 13
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ea512156db1b9be56f46281205a9a0a7adbe0073"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**

 * equals
 * checks for equality
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (obj, names) {
  cov_nh2c756s1.f[0]++;
  var result = (cov_nh2c756s1.s[0]++, {});
  cov_nh2c756s1.s[1]++;
  Object.keys(obj).filter(function (key) {
    cov_nh2c756s1.f[1]++;
    cov_nh2c756s1.s[2]++;
    return names.indexOf(key) === -1;
  }).forEach(function (key) {
    cov_nh2c756s1.f[2]++;
    cov_nh2c756s1.s[3]++;
    result[key] = obj[key];
  });
  cov_nh2c756s1.s[4]++;
  return result;
}));

/***/ }),

/***/ "./src/object/path.js":
/*!****************************!*\
  !*** ./src/object/path.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_k5hr8wh95 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/path.js";
  var hash = "688e3e89b8d70b1b75bd63faf2ae0265800fc9dd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/path.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 12
        },
        end: {
          line: 7,
          column: 15
        }
      },
      "1": {
        start: {
          line: 8,
          column: 12
        },
        end: {
          line: 8,
          column: 13
        }
      },
      "2": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "3": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 13,
          column: 5
        }
      },
      "4": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 12
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 17
        }
      },
      "6": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 17,
          column: 14
        }
      },
      "7": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 12
        }
      },
      "8": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 12
        }
      }
    },
    fnMap: {
      "0": {
        name: "path",
        decl: {
          start: {
            line: 6,
            column: 30
          },
          end: {
            line: 6,
            column: 34
          }
        },
        loc: {
          start: {
            line: 6,
            column: 47
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 15,
            column: 10
          },
          end: {
            line: 17,
            column: 14
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 16,
            column: 8
          },
          end: {
            line: 16,
            column: 44
          }
        }, {
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 17,
            column: 14
          }
        }],
        line: 15
      },
      "2": {
        loc: {
          start: {
            line: 16,
            column: 8
          },
          end: {
            line: 16,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 16,
            column: 35
          }
        }, {
          start: {
            line: 16,
            column: 38
          },
          end: {
            line: 16,
            column: 44
          }
        }],
        line: 16
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "688e3e89b8d70b1b75bd63faf2ae0265800fc9dd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function path
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function path(path, obj) {
  cov_k5hr8wh95.f[0]++;
  var val = (cov_k5hr8wh95.s[0]++, obj);
  var idx = (cov_k5hr8wh95.s[1]++, 0);
  var p;
  cov_k5hr8wh95.s[2]++;

  while (idx < path.length) {
    cov_k5hr8wh95.s[3]++;

    if (val == null) {
      cov_k5hr8wh95.b[0][0]++;
      cov_k5hr8wh95.s[4]++;
      return;
    } else {
      cov_k5hr8wh95.b[0][1]++;
    }

    cov_k5hr8wh95.s[5]++;
    p = path[idx];
    cov_k5hr8wh95.s[6]++;
    val = Number.isInteger(p) ? (cov_k5hr8wh95.b[1][0]++, p < 0 ? (cov_k5hr8wh95.b[2][0]++, val[val.length + p]) : (cov_k5hr8wh95.b[2][1]++, val[p])) : (cov_k5hr8wh95.b[1][1]++, val[p]);
    cov_k5hr8wh95.s[7]++;
    idx += 1;
  }

  cov_k5hr8wh95.s[8]++;
  return val;
})); // let r = obj
// for (let i = 0; i < path.length; i++) {
//   if (r == null) return undefined
//   r = r[path[i]]
// }
// return r
// })

/***/ }),

/***/ "./src/object/pick.js":
/*!****************************!*\
  !*** ./src/object/pick.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_11e811p2o = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/pick.js";
  var hash = "bf1e3bd5bd4fb576e1bbbaee0e7af3bfef3e047d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/pick.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 14
        }
      },
      "1": {
        start: {
          line: 12,
          column: 10
        },
        end: {
          line: 12,
          column: 11
        }
      },
      "2": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "3": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "4": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 33
        }
      },
      "5": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 10
        }
      },
      "6": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "pick",
        decl: {
          start: {
            line: 10,
            column: 30
          },
          end: {
            line: 10,
            column: 34
          }
        },
        loc: {
          start: {
            line: 10,
            column: 48
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }, {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }],
        line: 14
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "bf1e3bd5bd4fb576e1bbbaee0e7af3bfef3e047d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function pick
 * @description returns a new bject with only the props that are provided
 * @param {Array} props - Array of property names
 * @param {Object} obj - The object from which to take the properties
 * @return {Object}
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function pick(props, obj) {
  cov_11e811p2o.f[0]++;
  var r = (cov_11e811p2o.s[0]++, {});
  var i = (cov_11e811p2o.s[1]++, 0);
  cov_11e811p2o.s[2]++;

  while (i < props.length) {
    cov_11e811p2o.s[3]++;

    if (props[i] in obj) {
      cov_11e811p2o.b[0][0]++;
      cov_11e811p2o.s[4]++;
      r[props[i]] = obj[props[i]];
    } else {
      cov_11e811p2o.b[0][1]++;
    }

    cov_11e811p2o.s[5]++;
    i += 1;
  }

  cov_11e811p2o.s[6]++;
  return r;
}));

/***/ }),

/***/ "./src/object/prop.js":
/*!****************************!*\
  !*** ./src/object/prop.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_2cuyi04fu = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/prop.js";
  var hash = "a896fe07b64d794f5872db04e56c57abc861515b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/prop.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "prop",
        decl: {
          start: {
            line: 6,
            column: 30
          },
          end: {
            line: 6,
            column: 34
          }
        },
        loc: {
          start: {
            line: 6,
            column: 44
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a896fe07b64d794f5872db04e56c57abc861515b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function prop
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function prop(p, obj) {
  cov_2cuyi04fu.f[0]++;
  cov_2cuyi04fu.s[0]++;
  return obj[p];
}));

/***/ }),

/***/ "./src/object/values.js":
/*!******************************!*\
  !*** ./src/object/values.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/curry1 */ "./src/_private/curry1.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./src/object/keys.js");
var cov_y7o1msj6k = function () {
  var path = "/Volumes/BigOne/Github/fun/src/object/values.js";
  var hash = "039b99233dd5e97513897df11e23e1971edfa824";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/object/values.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 12
        },
        end: {
          line: 12,
          column: 21
        }
      },
      "1": {
        start: {
          line: 13,
          column: 12
        },
        end: {
          line: 13,
          column: 20
        }
      },
      "2": {
        start: {
          line: 14,
          column: 12
        },
        end: {
          line: 14,
          column: 14
        }
      },
      "3": {
        start: {
          line: 15,
          column: 10
        },
        end: {
          line: 15,
          column: 11
        }
      },
      "4": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "5": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 20
        }
      },
      "6": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 10
        }
      },
      "7": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "values",
        decl: {
          start: {
            line: 11,
            column: 31
          },
          end: {
            line: 11,
            column: 37
          }
        },
        loc: {
          start: {
            line: 11,
            column: 44
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 11
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "039b99233dd5e97513897df11e23e1971edfa824"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function values
 * @description REturns a list of values taken from an objects own properties
 * @param {object} - obj The object from which to take the values
 * @return {array}
 *
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function values(obj) {
  cov_y7o1msj6k.f[0]++;
  var k = (cov_y7o1msj6k.s[0]++, Object(_keys__WEBPACK_IMPORTED_MODULE_1__["default"])(obj));
  var l = (cov_y7o1msj6k.s[1]++, k.length);
  var r = (cov_y7o1msj6k.s[2]++, []);
  var i = (cov_y7o1msj6k.s[3]++, 0);
  cov_y7o1msj6k.s[4]++;

  while (i < l) {
    cov_y7o1msj6k.s[5]++;
    r[i] = obj[k[i]];
    cov_y7o1msj6k.s[6]++;
    i += 1;
  }

  cov_y7o1msj6k.s[7]++;
  return r;
}));

/***/ }),

/***/ "./src/or.js":
/*!*******************!*\
  !*** ./src/or.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_1feflhslwx = function () {
  var path = "/Volumes/BigOne/Github/fun/src/or.js";
  var hash = "8a2b6fac9d518b19b107272828a24d7bc568c3b9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/or.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "or",
        decl: {
          start: {
            line: 7,
            column: 30
          },
          end: {
            line: 7,
            column: 32
          }
        },
        loc: {
          start: {
            line: 7,
            column: 40
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 8,
            column: 15
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 8,
            column: 10
          }
        }, {
          start: {
            line: 8,
            column: 14
          },
          end: {
            line: 8,
            column: 15
          }
        }],
        line: 8
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "8a2b6fac9d518b19b107272828a24d7bc568c3b9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function or
 * @description Returns true if one or the other is true
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function or(x, y) {
  cov_1feflhslwx.f[0]++;
  cov_1feflhslwx.s[0]++;
  return (cov_1feflhslwx.b[0][0]++, x) || (cov_1feflhslwx.b[0][1]++, y);
}));

/***/ }),

/***/ "./src/reduce.js":
/*!***********************!*\
  !*** ./src/reduce.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/fold */ "./src/array/fold.js");
var cov_ejiu30ox9 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/reduce.js";
  var hash = "c756b35b4feaced0f07aef0a5f14ecb9d8601efd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/reduce.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 14
        },
        end: {
          line: 17,
          column: 23
        }
      },
      "1": {
        start: {
          line: 18,
          column: 15
        },
        end: {
          line: 18,
          column: 26
        }
      },
      "2": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 28
        }
      }
    },
    fnMap: {
      "0": {
        name: "reduce",
        decl: {
          start: {
            line: 16,
            column: 30
          },
          end: {
            line: 16,
            column: 36
          }
        },
        loc: {
          start: {
            line: 16,
            column: 45
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c756b35b4feaced0f07aef0a5f14ecb9d8601efd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Returns a single item by iterating over an array like object and call a function on each item, starting from the first item in the iterator
 * The initial value is taken from the iterator.
 * Reduce works only on Arrays and returns a valueof the type of the first element in the Array
 *
 * @function reduce
 * @desc Returns a single item by iterating over an array like object and call a function on each item, starting from the first item in the iterator
 * @since v1.0.4
 * @param {Function} cb - receives 4 values: the accumulator, the item, the index, and the initial value.
 * @param {Array} a - The iterator to apply the function
 * @return {*}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function reduce(cb, a) {
  cov_ejiu30ox9.f[0]++;
  var arr = (cov_ejiu30ox9.s[0]++, a.slice());
  var init = (cov_ejiu30ox9.s[1]++, arr.shift());
  cov_ejiu30ox9.s[2]++;
  return Object(_array_fold__WEBPACK_IMPORTED_MODULE_1__["default"])(cb, init, arr);
}));

/***/ }),

/***/ "./src/set/is.js":
/*!***********************!*\
  !*** ./src/set/is.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./src/is.js");
var cov_20etbd0wo1 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/set/is.js";
  var hash = "0b539e3c0a6b03fb751d45295a3f0364bec0db66";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/set/is.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "0b539e3c0a6b03fb751d45295a3f0364bec0db66"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Created by dierickx.len on 01/04/2017.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Set'));

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_e2yd690n5 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/sort.js";
  var hash = "54b7058c92549b8c881e48f0ee5148ceb9e0cd33";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/sort.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "sort",
        decl: {
          start: {
            line: 16,
            column: 30
          },
          end: {
            line: 16,
            column: 34
          }
        },
        loc: {
          start: {
            line: 16,
            column: 45
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "54b7058c92549b8c881e48f0ee5148ceb9e0cd33"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Returns a copy of the list, sorted according to the function.
 *
 * @func sort
 * @since v1.0.4
 * @param {Function} comp - A sorting function
 * @param {Array} a - The list to sort
 * @return {Array} a new array with its elements sorted by the comp function.
 * @example
 *
 *      const diff = function(a, b) { return a - b; };
 *      sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function sort(comp, a) {
  cov_e2yd690n5.f[0]++;
  cov_e2yd690n5.s[0]++;
  return Array.prototype.slice.call(a, 0).sort(comp);
}));

/***/ }),

/***/ "./src/string/concat.js":
/*!******************************!*\
  !*** ./src/string/concat.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return concat; });
var cov_1h4t8559v3 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/string/concat.js";
  var hash = "b9ca37e45d1c6a5cca4c4e8ddcdccd5828b8733e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/string/concat.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 30
        }
      }
    },
    fnMap: {
      "0": {
        name: "concat",
        decl: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 30
          }
        },
        loc: {
          start: {
            line: 6,
            column: 38
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "b9ca37e45d1c6a5cca4c4e8ddcdccd5828b8733e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @private
 * @function stringConcat
 */
function concat(a, b) {
  cov_1h4t8559v3.f[0]++;
  cov_1h4t8559v3.s[0]++;
  // use function(), arrow function doesn't bind arguments
  return String(a) + String(b);
}

/***/ }),

/***/ "./src/string/fold.js":
/*!****************************!*\
  !*** ./src/string/fold.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_1j3oxyouqv = function () {
  var path = "/Volumes/BigOne/Github/fun/src/string/fold.js";
  var hash = "6a6ae1d9d695dff68f3b1e2397b07bc416c56b4f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/string/fold.js",
    statementMap: {
      "0": {
        start: {
          line: 27,
          column: 10
        },
        end: {
          line: 27,
          column: 12
        }
      },
      "1": {
        start: {
          line: 28,
          column: 12
        },
        end: {
          line: 28,
          column: 20
        }
      },
      "2": {
        start: {
          line: 29,
          column: 10
        },
        end: {
          line: 29,
          column: 14
        }
      },
      "3": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 32,
          column: 3
        }
      },
      "4": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 32
        }
      },
      "5": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "fold",
        decl: {
          start: {
            line: 26,
            column: 30
          },
          end: {
            line: 26,
            column: 34
          }
        },
        loc: {
          start: {
            line: 26,
            column: 49
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 26
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "6a6ae1d9d695dff68f3b1e2397b07bc416c56b4f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * @function fold
 * @description Autocurried function which returns a single item by mapping over the provided string and calls an iterator function
 * @param {cbFunction} cb - Callback function to modify the item
 * @param {*} init - Initial value
 * @param {String} a - Array with items to modify by the cb function
 * @returns {*}
 * @see reduce
 * @since 1.0.5
 * @example
 *
 * const result = fold(filterA, 0, "abc")
 * // result = "bc"
 */

/**
 * @callback cbFunction
 * @param {*} r - Accumulator which accumulates the callback's return values
 * @param {*} item - the current element being processed
 * @param {number} index - the indey of the item being processed
 * @param {String} a - The initial string
 * @return {*}
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function fold(cb, init, a) {
  cov_1j3oxyouqv.f[0]++;
  var i = (cov_1j3oxyouqv.s[0]++, -1);
  var l = (cov_1j3oxyouqv.s[1]++, a.length);
  var r = (cov_1j3oxyouqv.s[2]++, init);
  cov_1j3oxyouqv.s[3]++;

  while (++i < l) {
    cov_1j3oxyouqv.s[4]++;
    r = cb(r, a.charAt(i), i, a);
  }

  cov_1j3oxyouqv.s[5]++;
  return r;
}));

/***/ }),

/***/ "./src/string/formatString.js":
/*!************************************!*\
  !*** ./src/string/formatString.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatString; });
/* harmony import */ var _array_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/to */ "./src/array/to.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../not */ "./src/not.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../is */ "./src/is.js");
var cov_3lgdz619t = function () {
  var path = "/Volumes/BigOne/Github/fun/src/string/formatString.js";
  var hash = "c84bfe9d12d26401fe9dbd51e24f41c3499592aa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/string/formatString.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 13
        },
        end: {
          line: 9,
          column: 31
        }
      },
      "1": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 14
        }
      },
      "2": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 14,
          column: 4
        }
      },
      "3": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 62
        }
      }
    },
    fnMap: {
      "0": {
        name: "formatString",
        decl: {
          start: {
            line: 8,
            column: 24
          },
          end: {
            line: 8,
            column: 36
          }
        },
        loc: {
          start: {
            line: 8,
            column: 43
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 33
          },
          end: {
            line: 12,
            column: 34
          }
        },
        loc: {
          start: {
            line: 12,
            column: 49
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 11
          },
          end: {
            line: 13,
            column: 62
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 13,
            column: 45
          },
          end: {
            line: 13,
            column: 54
          }
        }, {
          start: {
            line: 13,
            column: 57
          },
          end: {
            line: 13,
            column: 62
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c84bfe9d12d26401fe9dbd51e24f41c3499592aa"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Created by dierickx.len on 26/03/2017.
 */



function formatString(str) {
  cov_3lgdz619t.f[0]++;
  // use function(), arrow function doesn't bind arguments
  var args = (cov_3lgdz619t.s[0]++, Object(_array_to__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments));
  cov_3lgdz619t.s[1]++;
  args.shift();
  cov_3lgdz619t.s[2]++;
  return str.replace(/{(\d+)}/g, function (match, idx) {
    cov_3lgdz619t.f[1]++;
    cov_3lgdz619t.s[3]++;
    return Object(_not__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_is__WEBPACK_IMPORTED_MODULE_2__["default"])('Undefined', args[idx])) ? (cov_3lgdz619t.b[0][0]++, args[idx]) : (cov_3lgdz619t.b[0][1]++, match);
  });
}

/***/ }),

/***/ "./src/string/is.js":
/*!**************************!*\
  !*** ./src/string/is.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./src/is.js");
var cov_fttou8uw5 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/string/is.js";
  var hash = "aa3a6614e43ae678aa7cca34cc5f0fa61365cd8e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/string/is.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "aa3a6614e43ae678aa7cca34cc5f0fa61365cd8e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**

 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('String'));

/***/ }),

/***/ "./src/string/map.js":
/*!***************************!*\
  !*** ./src/string/map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./src/curry.js");
var cov_2bqp4tt4vi = function () {
  var path = "/Volumes/BigOne/Github/fun/src/string/map.js";
  var hash = "79cb739b96d4f310bcb24033538e0832017a0ff6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/string/map.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 10
        },
        end: {
          line: 14,
          column: 12
        }
      },
      "1": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 15,
          column: 20
        }
      },
      "2": {
        start: {
          line: 16,
          column: 10
        },
        end: {
          line: 16,
          column: 12
        }
      },
      "3": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "4": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 30
        }
      },
      "5": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "map",
        decl: {
          start: {
            line: 13,
            column: 30
          },
          end: {
            line: 13,
            column: 33
          }
        },
        loc: {
          start: {
            line: 13,
            column: 42
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "79cb739b96d4f310bcb24033538e0832017a0ff6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map(cb, a) {
  cov_2bqp4tt4vi.f[0]++;
  var i = (cov_2bqp4tt4vi.s[0]++, -1);
  var l = (cov_2bqp4tt4vi.s[1]++, a.length);
  var r = (cov_2bqp4tt4vi.s[2]++, '');
  cov_2bqp4tt4vi.s[3]++;

  while (++i < l) {
    cov_2bqp4tt4vi.s[4]++;
    r += cb(a.charAt(i), i, a);
  }

  cov_2bqp4tt4vi.s[5]++;
  return r;
}));

/***/ }),

/***/ "./src/truthy.js":
/*!***********************!*\
  !*** ./src/truthy.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exists */ "./src/exists.js");
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/curry1 */ "./src/_private/curry1.js");
var cov_2mo464xttx = function () {
  var path = "/Volumes/BigOne/Github/fun/src/truthy.js";
  var hash = "6ffc21b8dec88e0b1fb51a4ea8ef15d7a35f5aed";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/truthy.js",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "truthy",
        decl: {
          start: {
            line: 19,
            column: 31
          },
          end: {
            line: 19,
            column: 37
          }
        },
        loc: {
          start: {
            line: 19,
            column: 42
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 19
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 20,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 20,
            column: 10
          },
          end: {
            line: 20,
            column: 21
          }
        }, {
          start: {
            line: 20,
            column: 26
          },
          end: {
            line: 20,
            column: 35
          }
        }],
        line: 20
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "6ffc21b8dec88e0b1fb51a4ea8ef15d7a35f5aed"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();



/**
 * @function truthy
 * @desc Validates if a value exists and is not false
 * @param {*} x - Any valid javascript value
 * @example
 *
 * truthy([])        // true
 * truthy(0)         // true
 * truthy(-1)        // true
 * truthy(false)     // false
 * truthy(null)      // false
 * truthy(undefined) // false
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_1__["default"])(function truthy(x) {
  cov_2mo464xttx.f[0]++;
  cov_2mo464xttx.s[0]++;
  return (cov_2mo464xttx.b[0][0]++, x !== false) && (cov_2mo464xttx.b[0][1]++, Object(_exists__WEBPACK_IMPORTED_MODULE_0__["default"])(x));
}));

/***/ }),

/***/ "./src/type.js":
/*!*********************!*\
  !*** ./src/type.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ "./src/_private/curry1.js");
var cov_1yyd0m80zo = function () {
  var path = "/Volumes/BigOne/Github/fun/src/type.js";
  var hash = "7c186f4cbacaa9cc9351eabe79459c9af2cdab83";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/type.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "type",
        decl: {
          start: {
            line: 15,
            column: 31
          },
          end: {
            line: 15,
            column: 35
          }
        },
        loc: {
          start: {
            line: 15,
            column: 40
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 15
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "7c186f4cbacaa9cc9351eabe79459c9af2cdab83"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();


/**
 * @function type
 * @desc Returns the type of the passed value
 * @param {*} a - Any valid javascript value
 * @return {Boolean}
 * @see is
 * @example
 *
 * const isArray = (arr) => type(arr) === 'Array'
 * isArray([]) // true
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function type(x) {
  cov_1yyd0m80zo.f[0]++;
  cov_1yyd0m80zo.s[0]++;
  return Object.prototype.toString.call(x).slice(8, -1);
}));

/***/ }),

/***/ "./src/undefined/is.js":
/*!*****************************!*\
  !*** ./src/undefined/is.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./src/is.js");
var cov_1ejiqyco0l = function () {
  var path = "/Volumes/BigOne/Github/fun/src/undefined/is.js";
  var hash = "ac6f71a954c131e2d68cd9e0d011c8b7d6705a34";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/undefined/is.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ac6f71a954c131e2d68cd9e0d011c8b7d6705a34"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/**
 * Created by dierickx.len on 03/02/2019
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('undefined'));

/***/ }),

/***/ "./src/zip.js":
/*!********************!*\
  !*** ./src/zip.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _zipWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipWith */ "./src/zipWith.js");
var cov_k09jldi04 = function () {
  var path = "/Volumes/BigOne/Github/fun/src/zip.js";
  var hash = "b6408dee28864996c7140e6a088fe1f47ff52c97";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/zip.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 66
        }
      },
      "1": {
        start: {
          line: 18,
          column: 44
        },
        end: {
          line: 18,
          column: 57
        }
      }
    },
    fnMap: {
      "0": {
        name: "zip",
        decl: {
          start: {
            line: 17,
            column: 30
          },
          end: {
            line: 17,
            column: 33
          }
        },
        loc: {
          start: {
            line: 17,
            column: 41
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 17
      },
      "1": {
        name: "_zipWith",
        decl: {
          start: {
            line: 18,
            column: 26
          },
          end: {
            line: 18,
            column: 34
          }
        },
        loc: {
          start: {
            line: 18,
            column: 42
          },
          end: {
            line: 18,
            column: 59
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "b6408dee28864996c7140e6a088fe1f47ff52c97"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();



/**
 * @function zip
 * @desc Autocurried function that zips 2 arrays into an Array of pairs
 * @param {Array} a - Array to zip
 * @param {Array} b - Array to zip
 * @returns {Array}
 * @example
 *
 * const a = [1, 2, 3]
 * const b = [100, 200, 300]
 * zip(a, b) // [[100, 1], [200, 2], [300, 3]]
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function zip(a, b) {
  cov_k09jldi04.f[0]++;
  cov_k09jldi04.s[0]++;
  return Object(_zipWith__WEBPACK_IMPORTED_MODULE_1__["default"])(function _zipWith(x, y) {
    cov_k09jldi04.f[1]++;
    cov_k09jldi04.s[1]++;
    return [x, y];
  }, a, b);
}));

/***/ }),

/***/ "./src/zipObj.js":
/*!***********************!*\
  !*** ./src/zipObj.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_nshwcin3m = function () {
  var path = "/Volumes/BigOne/Github/fun/src/zipObj.js";
  var hash = "ef61da7a0375c7892fb0d8093e09abcc4fc479f3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/zipObj.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 10
        },
        end: {
          line: 18,
          column: 11
        }
      },
      "1": {
        start: {
          line: 19,
          column: 10
        },
        end: {
          line: 19,
          column: 38
        }
      },
      "2": {
        start: {
          line: 20,
          column: 10
        },
        end: {
          line: 20,
          column: 12
        }
      },
      "3": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "4": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 18
        }
      },
      "5": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 10
        }
      },
      "6": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "zipObj",
        decl: {
          start: {
            line: 17,
            column: 30
          },
          end: {
            line: 17,
            column: 36
          }
        },
        loc: {
          start: {
            line: 17,
            column: 44
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ef61da7a0375c7892fb0d8093e09abcc4fc479f3"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();


/**
 * @function zipObj
 * @desc Autocurried function that zips 2 Arrays into 1 Object
 * @param {Array} a - Array containing the keys of the returned object
 * @param {Array} b - Array containing the values of the returned object
 * @return {Object}
 * @example
 *
 * const keys = ['a', 'b', 'c']
 * const values = [0, 1, 2]
 * zipObj(keys, values // {'a': 0, 'b': 1, 'c': 2}
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function zipObj(a, b) {
  cov_nshwcin3m.f[0]++;
  var i = (cov_nshwcin3m.s[0]++, 0);
  var l = (cov_nshwcin3m.s[1]++, Math.min(a.length, b.length));
  var r = (cov_nshwcin3m.s[2]++, {});
  cov_nshwcin3m.s[3]++;

  while (i < l) {
    cov_nshwcin3m.s[4]++;
    r[a[i]] = b[i];
    cov_nshwcin3m.s[5]++;
    i += 1;
  }

  cov_nshwcin3m.s[6]++;
  return r;
}));

/***/ }),

/***/ "./src/zipWith.js":
/*!************************!*\
  !*** ./src/zipWith.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
var cov_x0xwu77ae = function () {
  var path = "/Volumes/BigOne/Github/fun/src/zipWith.js";
  var hash = "f88686e11f9b0f8a430397b282e3616ff368f3d4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Volumes/BigOne/Github/fun/src/zipWith.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 14
        },
        end: {
          line: 18,
          column: 16
        }
      },
      "1": {
        start: {
          line: 19,
          column: 14
        },
        end: {
          line: 19,
          column: 42
        }
      },
      "2": {
        start: {
          line: 20,
          column: 10
        },
        end: {
          line: 20,
          column: 11
        }
      },
      "3": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "4": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 28
        }
      },
      "5": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 12
        }
      }
    },
    fnMap: {
      "0": {
        name: "zipWith",
        decl: {
          start: {
            line: 17,
            column: 30
          },
          end: {
            line: 17,
            column: 37
          }
        },
        loc: {
          start: {
            line: 17,
            column: 49
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "f88686e11f9b0f8a430397b282e3616ff368f3d4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();


/**
 * @function zipWith
 * @desc Combines the values of 2 arrays into 1 array using a callback function
 * @param {Function} cb - Callback function accepting 2 parameters
 * @param {Array} a - Array to zip
 * @param {Array} b - Array to zip
 * @returns {Array}
 * @example
 *
 * const a = [1, 2, 3]
 * const b = [100, 200, 300]
 * zipWith(add, a, b) // [101, 202, 303]
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function zipWith(cb, a, b) {
  cov_x0xwu77ae.f[0]++;
  var arr = (cov_x0xwu77ae.s[0]++, []);
  var len = (cov_x0xwu77ae.s[1]++, Math.min(a.length, b.length));
  var i = (cov_x0xwu77ae.s[2]++, 0);
  cov_x0xwu77ae.s[3]++;

  for (i = 0; i < len; i++) {
    cov_x0xwu77ae.s[4]++;
    arr.push(cb(a[i], b[i]));
  }

  cov_x0xwu77ae.s[5]++;
  return arr;
}));

/***/ })

/******/ });
});
//# sourceMappingURL=fun.js.map