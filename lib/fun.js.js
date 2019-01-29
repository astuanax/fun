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

/***/ "./node_modules/constants-browserify/constants.json":
/*!**********************************************************!*\
  !*** ./node_modules/constants-browserify/constants.json ***!
  \**********************************************************/
/*! exports provided: O_RDONLY, O_WRONLY, O_RDWR, S_IFMT, S_IFREG, S_IFDIR, S_IFCHR, S_IFBLK, S_IFIFO, S_IFLNK, S_IFSOCK, O_CREAT, O_EXCL, O_NOCTTY, O_TRUNC, O_APPEND, O_DIRECTORY, O_NOFOLLOW, O_SYNC, O_SYMLINK, O_NONBLOCK, S_IRWXU, S_IRUSR, S_IWUSR, S_IXUSR, S_IRWXG, S_IRGRP, S_IWGRP, S_IXGRP, S_IRWXO, S_IROTH, S_IWOTH, S_IXOTH, E2BIG, EACCES, EADDRINUSE, EADDRNOTAVAIL, EAFNOSUPPORT, EAGAIN, EALREADY, EBADF, EBADMSG, EBUSY, ECANCELED, ECHILD, ECONNABORTED, ECONNREFUSED, ECONNRESET, EDEADLK, EDESTADDRREQ, EDOM, EDQUOT, EEXIST, EFAULT, EFBIG, EHOSTUNREACH, EIDRM, EILSEQ, EINPROGRESS, EINTR, EINVAL, EIO, EISCONN, EISDIR, ELOOP, EMFILE, EMLINK, EMSGSIZE, EMULTIHOP, ENAMETOOLONG, ENETDOWN, ENETRESET, ENETUNREACH, ENFILE, ENOBUFS, ENODATA, ENODEV, ENOENT, ENOEXEC, ENOLCK, ENOLINK, ENOMEM, ENOMSG, ENOPROTOOPT, ENOSPC, ENOSR, ENOSTR, ENOSYS, ENOTCONN, ENOTDIR, ENOTEMPTY, ENOTSOCK, ENOTSUP, ENOTTY, ENXIO, EOPNOTSUPP, EOVERFLOW, EPERM, EPIPE, EPROTO, EPROTONOSUPPORT, EPROTOTYPE, ERANGE, EROFS, ESPIPE, ESRCH, ESTALE, ETIME, ETIMEDOUT, ETXTBSY, EWOULDBLOCK, EXDEV, SIGHUP, SIGINT, SIGQUIT, SIGILL, SIGTRAP, SIGABRT, SIGIOT, SIGBUS, SIGFPE, SIGKILL, SIGUSR1, SIGSEGV, SIGUSR2, SIGPIPE, SIGALRM, SIGTERM, SIGCHLD, SIGCONT, SIGSTOP, SIGTSTP, SIGTTIN, SIGTTOU, SIGURG, SIGXCPU, SIGXFSZ, SIGVTALRM, SIGPROF, SIGWINCH, SIGIO, SIGSYS, SSL_OP_ALL, SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION, SSL_OP_CIPHER_SERVER_PREFERENCE, SSL_OP_CISCO_ANYCONNECT, SSL_OP_COOKIE_EXCHANGE, SSL_OP_CRYPTOPRO_TLSEXT_BUG, SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS, SSL_OP_EPHEMERAL_RSA, SSL_OP_LEGACY_SERVER_CONNECT, SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER, SSL_OP_MICROSOFT_SESS_ID_BUG, SSL_OP_MSIE_SSLV2_RSA_PADDING, SSL_OP_NETSCAPE_CA_DN_BUG, SSL_OP_NETSCAPE_CHALLENGE_BUG, SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG, SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG, SSL_OP_NO_COMPRESSION, SSL_OP_NO_QUERY_MTU, SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION, SSL_OP_NO_SSLv2, SSL_OP_NO_SSLv3, SSL_OP_NO_TICKET, SSL_OP_NO_TLSv1, SSL_OP_NO_TLSv1_1, SSL_OP_NO_TLSv1_2, SSL_OP_PKCS1_CHECK_1, SSL_OP_PKCS1_CHECK_2, SSL_OP_SINGLE_DH_USE, SSL_OP_SINGLE_ECDH_USE, SSL_OP_SSLEAY_080_CLIENT_DH_BUG, SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG, SSL_OP_TLS_BLOCK_PADDING_BUG, SSL_OP_TLS_D5_BUG, SSL_OP_TLS_ROLLBACK_BUG, ENGINE_METHOD_DSA, ENGINE_METHOD_DH, ENGINE_METHOD_RAND, ENGINE_METHOD_ECDH, ENGINE_METHOD_ECDSA, ENGINE_METHOD_CIPHERS, ENGINE_METHOD_DIGESTS, ENGINE_METHOD_STORE, ENGINE_METHOD_PKEY_METHS, ENGINE_METHOD_PKEY_ASN1_METHS, ENGINE_METHOD_ALL, ENGINE_METHOD_NONE, DH_CHECK_P_NOT_SAFE_PRIME, DH_CHECK_P_NOT_PRIME, DH_UNABLE_TO_CHECK_GENERATOR, DH_NOT_SUITABLE_GENERATOR, NPN_ENABLED, RSA_PKCS1_PADDING, RSA_SSLV23_PADDING, RSA_NO_PADDING, RSA_PKCS1_OAEP_PADDING, RSA_X931_PADDING, RSA_PKCS1_PSS_PADDING, POINT_CONVERSION_COMPRESSED, POINT_CONVERSION_UNCOMPRESSED, POINT_CONVERSION_HYBRID, F_OK, R_OK, W_OK, X_OK, UV_UDP_REUSEADDR, default */
/***/ (function(module) {

module.exports = {"O_RDONLY":0,"O_WRONLY":1,"O_RDWR":2,"S_IFMT":61440,"S_IFREG":32768,"S_IFDIR":16384,"S_IFCHR":8192,"S_IFBLK":24576,"S_IFIFO":4096,"S_IFLNK":40960,"S_IFSOCK":49152,"O_CREAT":512,"O_EXCL":2048,"O_NOCTTY":131072,"O_TRUNC":1024,"O_APPEND":8,"O_DIRECTORY":1048576,"O_NOFOLLOW":256,"O_SYNC":128,"O_SYMLINK":2097152,"O_NONBLOCK":4,"S_IRWXU":448,"S_IRUSR":256,"S_IWUSR":128,"S_IXUSR":64,"S_IRWXG":56,"S_IRGRP":32,"S_IWGRP":16,"S_IXGRP":8,"S_IRWXO":7,"S_IROTH":4,"S_IWOTH":2,"S_IXOTH":1,"E2BIG":7,"EACCES":13,"EADDRINUSE":48,"EADDRNOTAVAIL":49,"EAFNOSUPPORT":47,"EAGAIN":35,"EALREADY":37,"EBADF":9,"EBADMSG":94,"EBUSY":16,"ECANCELED":89,"ECHILD":10,"ECONNABORTED":53,"ECONNREFUSED":61,"ECONNRESET":54,"EDEADLK":11,"EDESTADDRREQ":39,"EDOM":33,"EDQUOT":69,"EEXIST":17,"EFAULT":14,"EFBIG":27,"EHOSTUNREACH":65,"EIDRM":90,"EILSEQ":92,"EINPROGRESS":36,"EINTR":4,"EINVAL":22,"EIO":5,"EISCONN":56,"EISDIR":21,"ELOOP":62,"EMFILE":24,"EMLINK":31,"EMSGSIZE":40,"EMULTIHOP":95,"ENAMETOOLONG":63,"ENETDOWN":50,"ENETRESET":52,"ENETUNREACH":51,"ENFILE":23,"ENOBUFS":55,"ENODATA":96,"ENODEV":19,"ENOENT":2,"ENOEXEC":8,"ENOLCK":77,"ENOLINK":97,"ENOMEM":12,"ENOMSG":91,"ENOPROTOOPT":42,"ENOSPC":28,"ENOSR":98,"ENOSTR":99,"ENOSYS":78,"ENOTCONN":57,"ENOTDIR":20,"ENOTEMPTY":66,"ENOTSOCK":38,"ENOTSUP":45,"ENOTTY":25,"ENXIO":6,"EOPNOTSUPP":102,"EOVERFLOW":84,"EPERM":1,"EPIPE":32,"EPROTO":100,"EPROTONOSUPPORT":43,"EPROTOTYPE":41,"ERANGE":34,"EROFS":30,"ESPIPE":29,"ESRCH":3,"ESTALE":70,"ETIME":101,"ETIMEDOUT":60,"ETXTBSY":26,"EWOULDBLOCK":35,"EXDEV":18,"SIGHUP":1,"SIGINT":2,"SIGQUIT":3,"SIGILL":4,"SIGTRAP":5,"SIGABRT":6,"SIGIOT":6,"SIGBUS":10,"SIGFPE":8,"SIGKILL":9,"SIGUSR1":30,"SIGSEGV":11,"SIGUSR2":31,"SIGPIPE":13,"SIGALRM":14,"SIGTERM":15,"SIGCHLD":20,"SIGCONT":19,"SIGSTOP":17,"SIGTSTP":18,"SIGTTIN":21,"SIGTTOU":22,"SIGURG":16,"SIGXCPU":24,"SIGXFSZ":25,"SIGVTALRM":26,"SIGPROF":27,"SIGWINCH":28,"SIGIO":23,"SIGSYS":12,"SSL_OP_ALL":2147486719,"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION":262144,"SSL_OP_CIPHER_SERVER_PREFERENCE":4194304,"SSL_OP_CISCO_ANYCONNECT":32768,"SSL_OP_COOKIE_EXCHANGE":8192,"SSL_OP_CRYPTOPRO_TLSEXT_BUG":2147483648,"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS":2048,"SSL_OP_EPHEMERAL_RSA":0,"SSL_OP_LEGACY_SERVER_CONNECT":4,"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER":32,"SSL_OP_MICROSOFT_SESS_ID_BUG":1,"SSL_OP_MSIE_SSLV2_RSA_PADDING":0,"SSL_OP_NETSCAPE_CA_DN_BUG":536870912,"SSL_OP_NETSCAPE_CHALLENGE_BUG":2,"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG":1073741824,"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG":8,"SSL_OP_NO_COMPRESSION":131072,"SSL_OP_NO_QUERY_MTU":4096,"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION":65536,"SSL_OP_NO_SSLv2":16777216,"SSL_OP_NO_SSLv3":33554432,"SSL_OP_NO_TICKET":16384,"SSL_OP_NO_TLSv1":67108864,"SSL_OP_NO_TLSv1_1":268435456,"SSL_OP_NO_TLSv1_2":134217728,"SSL_OP_PKCS1_CHECK_1":0,"SSL_OP_PKCS1_CHECK_2":0,"SSL_OP_SINGLE_DH_USE":1048576,"SSL_OP_SINGLE_ECDH_USE":524288,"SSL_OP_SSLEAY_080_CLIENT_DH_BUG":128,"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG":0,"SSL_OP_TLS_BLOCK_PADDING_BUG":512,"SSL_OP_TLS_D5_BUG":256,"SSL_OP_TLS_ROLLBACK_BUG":8388608,"ENGINE_METHOD_DSA":2,"ENGINE_METHOD_DH":4,"ENGINE_METHOD_RAND":8,"ENGINE_METHOD_ECDH":16,"ENGINE_METHOD_ECDSA":32,"ENGINE_METHOD_CIPHERS":64,"ENGINE_METHOD_DIGESTS":128,"ENGINE_METHOD_STORE":256,"ENGINE_METHOD_PKEY_METHS":512,"ENGINE_METHOD_PKEY_ASN1_METHS":1024,"ENGINE_METHOD_ALL":65535,"ENGINE_METHOD_NONE":0,"DH_CHECK_P_NOT_SAFE_PRIME":2,"DH_CHECK_P_NOT_PRIME":1,"DH_UNABLE_TO_CHECK_GENERATOR":4,"DH_NOT_SUITABLE_GENERATOR":8,"NPN_ENABLED":1,"RSA_PKCS1_PADDING":1,"RSA_SSLV23_PADDING":2,"RSA_NO_PADDING":3,"RSA_PKCS1_OAEP_PADDING":4,"RSA_X931_PADDING":5,"RSA_PKCS1_PSS_PADDING":6,"POINT_CONVERSION_COMPRESSED":2,"POINT_CONVERSION_UNCOMPRESSED":4,"POINT_CONVERSION_HYBRID":6,"F_OK":0,"R_OK":4,"W_OK":2,"X_OK":1,"UV_UDP_REUSEADDR":4};

/***/ }),

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
exports.default = void 0;

var _is = _interopRequireDefault(__webpack_require__(/*! ./is */ "./src/array/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dierickx.len on 01/04/2017.
 */
var _default = function _default(x) {
  return (0, _is.default)(x) ? [] : void 0;
};

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

var _curry = _interopRequireDefault(__webpack_require__(/*! ../util/curry */ "./src/util/curry.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ../util/not */ "./src/util/not.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ../util/equals */ "./src/util/equals.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Len Dierickx
 * equals
 * checks for equality
 */
var _default = (0, _curry.default)(function (x, y) {
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
exports.default = void 0;

/**
 * Created by dierickx.len on 18/03/2017.
 */
var _default = function _default(x) {
  return x.length === 1 ? [x[0]] : Array.apply(null, x);
};

exports.default = _default;
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
 * equals
 * checks for equality
 */
var _default = (0, _curry.default)(function (arrayL, arrayR) {
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

/**
 * Created by dierickx.len on 01/04/2017.
 */
var _default = (0, _is.default)('Boolean');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATE_UNITS = exports.WEEKDAYS = exports.MONTHS = void 0;

/**
 * Created by dierickx.len on 18/03/2017.
 */
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
exports.MONTHS = MONTHS;
var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
exports.WEEKDAYS = WEEKDAYS;
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

var _constants = __webpack_require__(/*! ../constants */ "./src/constants.js");

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
    return _constants.MONTHS[d.getMonth()];
  },
  MMM: function MMM(d) {
    return firstN(3, _constants.MONTHS[d.getMonth()]);
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
    return _constants.WEEKDAYS[d.getDay()];
  },
  ddd: function ddd(d) {
    return firstN(3, _constants.WEEKDAYS[d.getDay()]);
  },
  dd: function dd(d) {
    return firstN(2, _constants.WEEKDAYS[d.getDay()]);
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
  }
}; // map this function to get the actual time/date value for each token

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
exports.default = void 0;

var _is = _interopRequireDefault(__webpack_require__(/*! ./is */ "./src/date/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dierickx.len on 18/03/2017.
 */
var _default = function _default(x) {
  return (0, _is.default)(x) && isFinite(x.valueOf());
};

exports.default = _default;
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


var _empty = _interopRequireDefault(__webpack_require__(/*! array/empty */ "./src/array/empty.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! array/equals */ "./src/array/equals.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! array/is */ "./src/array/is.js"));

var _to = _interopRequireDefault(__webpack_require__(/*! array/to */ "./src/array/to.js"));

var _union = _interopRequireDefault(__webpack_require__(/*! array/union */ "./src/array/union.js"));

var _is2 = _interopRequireDefault(__webpack_require__(/*! boolean/is */ "./src/boolean/is.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! constants */ "./node_modules/constants-browserify/constants.json"));

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

var _compose = _interopRequireDefault(__webpack_require__(/*! util/compose */ "./src/util/compose.js"));

var _curry = _interopRequireDefault(__webpack_require__(/*! util/curry */ "./src/util/curry.js"));

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
exports.default = void 0;

var _is = _interopRequireDefault(__webpack_require__(/*! ./is */ "./src/number/is.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! ../util/and */ "./src/util/and.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * isNaN
 * Checks if number is NAN
 * @author Len Dierickx
 */
var _default = function _default(x) {
  return (0, _and.default)((0, _is.default)(x), isNaN(x));
};

exports.default = _default;
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
exports.default = void 0;

var _is = _interopRequireDefault(__webpack_require__(/*! ./is */ "./src/object/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dierickx.len on 01/04/2017.
 */
var _default = function _default(x) {
  return (0, _is.default)(x) ? {} : void 0;
};

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
exports.default = void 0;

/**
 * Created by dierickx.len on 01/04/2017.
 */
var _default = function _default(x) {
  for (var key in x) {
    if (x.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
};

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
var _default = (0, _curry.default)(function (x, y) {
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
exports.default = exports.compose = void 0;

/**
 * Created by dierickx.len on 25/03/2017.
 */
var compose = function compose() {
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
};

exports.compose = compose;
var _default = compose;
exports.default = _default;

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
exports.default = _default;

/* eslint-disable no-use-before-define */

/**
 * Created by dierickx.len on 25/03/2017.
 */
function _default(fun) {
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
exports.default = void 0;

var _is = _interopRequireDefault(__webpack_require__(/*! ../array/is */ "./src/array/is.js"));

var _is2 = _interopRequireDefault(__webpack_require__(/*! ../object/is */ "./src/object/is.js"));

var _is3 = _interopRequireDefault(__webpack_require__(/*! ../string/is */ "./src/string/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Len Dierickx
 * empty
 * Returns the empty equivalent of the first argument
 */
var _default = function _default(x) {
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
};

exports.default = _default;
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
var equals = (0, _curry.default)(function (x, y) {
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
var _default = equals;
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
exports.default = void 0;

var _null2 = _interopRequireDefault(__webpack_require__(/*! ./null */ "./src/util/null.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not */ "./src/util/not.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Len Dierickx
 */
var _default = function _default(x) {
  return (0, _not.default)((0, _null2.default)(x));
};

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
var _default = (0, _curry.default)(function (x, y) {
  if (x === 0 && y === 0) {
    return 1 / x === 1 / y;
  }

  if (x === y) {
    return true;
  }

  if ((0, _isNan.default)(x) && (0, _isNan.default)(y)) {
    return true;
  }

  return false;
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
exports.default = void 0;

/**
 * @author Len Dierickx
 * Returns the value supplied to the function
 */
var _default = function _default(x) {
  return x;
};

exports.default = _default;
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
var _default = (0, _curry.default)(function (Ctor, val) {
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
exports.default = void 0;

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty */ "./src/util/empty.js"));

var _exists = _interopRequireDefault(__webpack_require__(/*! ./exists */ "./src/util/exists.js"));

var _equals = _interopRequireDefault(__webpack_require__(/*! ./equals */ "./src/util/equals.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Len Dierickx
 * empty
 * Returns the empty equivalent of the first argument
 */
var _default = function _default(x) {
  return (0, _exists.default)(x) && (0, _equals.default)(x, (0, _empty.default)(x));
};

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

/**
 * Created by dierickx.len on 26/03/2017.
 */
var _default = function _default(x) {
  return !x;
};

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/null.js":
/*!**************************!*\
  !*** ./src/util/null.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Created by dierickx.len on 01/04/2017.
 */
var _default = function _default(x) {
  return x == null;
};

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
 * @author Len Dierickx
 * or
 * Returns true if one or the other is true
 */
var _default = (0, _curry.default)(function (x, y) {
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
exports.default = void 0;

var _exists = _interopRequireDefault(__webpack_require__(/*! ./exists */ "./src/util/exists.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dierickx.len on 06/02/2017.
 */
var _default = function _default(x) {
  return x !== false && (0, _exists.default)(x);
};

exports.default = _default;
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

/**
 * @author Len Dierickx
 */
var _default = function _default(x) {
  return Object.prototype.toString.call(x).slice(8, -1);
};

exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4uanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1bi5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L3RvLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS91bmlvbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2RpZmZEYXRlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2Zvcm1hdERhdGVUaW1lLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2lzRnV0dXJlRGF0ZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pc1ZhbGlkLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvRGF5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvSG91ci5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b01pbnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9TZWNvbmRzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbW9uYWRzL0p1c3QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9NYXliZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbW9uYWRzL05vdGhpbmcuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL251bWJlci9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL2lzTmFuLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9tZXJnZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L29taXQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9mb3JtYXRTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbmQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9jdXJyeS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9lbXB0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZXhpc3RzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lkZW50aWNhbC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pc0VtcHR5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL25vdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9udWxsLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL29yLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3RydXRoeS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC90eXBlLmpzIl0sIm5hbWVzIjpbIngiLCJ5IiwibGVuZ3RoIiwiaSIsIkFycmF5IiwiYXBwbHkiLCJhcnJheUwiLCJhcnJheVIiLCJmcm9tIiwiU2V0IiwiY29uY2F0IiwiTU9OVEhTIiwiV0VFS0RBWVMiLCJEQVRFX1VOSVRTIiwibWlsbGlzZWNvbmRzIiwic2Vjb25kcyIsIm1pbnV0ZXMiLCJob3VycyIsImRheXMiLCJ3ZWVrcyIsInN0YXJ0IiwiZW5kIiwiRGF0ZSIsImdldFRpbWUiLCJnZXRXZWVrIiwiZCIsIlVUQyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwic2V0VVRDRGF0ZSIsImdldFVUQ0RhdGUiLCJnZXRVVENEYXkiLCJ5ZWFyU3RhcnQiLCJnZXRVVENGdWxsWWVhciIsIndlZWtObyIsIk1hdGgiLCJjZWlsIiwiWkVST1MiLCJsYXN0TiIsIm4iLCJzdHIiLCJzdWJzdHJpbmciLCJmaXJzdE4iLCJmaWxsIiwiZGlnaXRzIiwiREFURV9UT0tFTlMiLCJtb2RDZWlsaW5nIiwibW9kIiwidmFsIiwidG9rZW5zIiwiWVlZWSIsIllZIiwiTU1NTSIsIk1NTSIsIk1NIiwiTSIsInciLCJ3dyIsIkREIiwiRCIsImRkZGQiLCJnZXREYXkiLCJkZGQiLCJkZCIsIkhIIiwiZ2V0SG91cnMiLCJIIiwiaGgiLCJoIiwibW0iLCJnZXRNaW51dGVzIiwibSIsInNzIiwiZ2V0U2Vjb25kcyIsInMiLCJBIiwiYSIsIlNTUyIsImdldE1pbGxpc2Vjb25kcyIsIlNTIiwiUyIsIlEiLCJzd2FwVG9rZW5XaXRoVmFsdWUiLCJkYXRlIiwidG9rZW4iLCJmb3JtYXQiLCJtYXRjaCIsIm1hcCIsImpvaW4iLCJpc0Zpbml0ZSIsInZhbHVlT2YiLCJKdXN0IiwiX3ZhbHVlIiwicHJvdG90eXBlIiwiaXNKdXN0IiwiaXNOb3RoaW5nIiwiTWF5YmUiLCJfX3ZhbHVlIiwib2YiLCJnZXRPckVsc2UiLCJmIiwiYXAiLCJOb3RoaW5nIiwiaXNOYU4iLCJrZXlYIiwia2V5WSIsImtleSIsImhhc093blByb3BlcnR5IiwibWVyZ2UiLCJvYmpMIiwib2JqUiIsInJlc3VsdCIsIk9iamVjdCIsImFzc2lnbiIsImNhbGwiLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwib2JqIiwibmFtZXMiLCJrZXlzIiwiZmlsdGVyIiwiaW5kZXhPZiIsImZvckVhY2giLCJzZXBhcmF0b3IiLCJhcmdzIiwic2xpY2UiLCJhcmd1bWVudHMiLCJzaGlmdCIsInJlcGxhY2UiLCJpZHgiLCJjb21wb3NlIiwiZnVucyIsImluaXQiLCJmdW4iLCJhcmdzbGVuIiwiY3JlYXRlUmVjdXJzZXIiLCJyZWN1cnNlIiwiYWNjIiwiX2FjYyIsImVxdWFscyIsImNvbnN0cnVjdG9yIiwiQ3RvciIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7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SSxJQUFaO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FEOzs7O0FBTEE7Ozs7O2VBT2Usb0JBQU0sVUFBQ0EsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBVUQsQ0FBQyxJQUFJQyxDQUFmO0FBQUEsQ0FBTixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmY7Ozs7QUFIQTs7O2VBS2Usa0JBQUNELENBQUQsRUFBTztBQUNwQixTQUFRQSxDQUFDLEtBQUssS0FBUCxJQUFpQixxQkFBT0EsQ0FBUCxDQUF4QjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRDs7O2VBR2Usa0JBQUNBLENBQUQsRUFBTztBQUNwQixTQUFPaUgsTUFBTSxDQUFDbkIsU0FBUCxDQUFpQmlELFFBQWpCLENBQTBCNUIsSUFBMUIsQ0FBK0JuSCxDQUEvQixFQUFrQzhILEtBQWxDLENBQXdDLENBQXhDLEVBQTJDLENBQUMsQ0FBNUMsQ0FBUDtBQUNELEMiLCJmaWxlIjoiZnVuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJmdW4uanNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZnVuLmpzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZ1bi5qc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeCkgPT4ge1xyXG4gIHJldHVybiBpc0FycmF5KHgpID8gW10gOiB2b2lkIDA7XHJcbn07XHJcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSc7XG5pbXBvcnQgbm90IGZyb20gJy4uL3V0aWwvbm90JztcbmltcG9ydCBlcXVhbHMgZnJvbSAnLi4vdXRpbC9lcXVhbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoeCwgeSkgPT4ge1xuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub3QoZXF1YWxzKHhbaV0sIHlbaV0pKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzKCdBcnJheScpO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeCkgPT4ge1xyXG4gIHJldHVybiB4Lmxlbmd0aCA9PT0gMSA/IFt4WzBdXSA6IEFycmF5LmFwcGx5KG51bGwsIHgpO1xyXG59O1xyXG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBlcXVhbHNcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoYXJyYXlMLCBhcnJheVIpID0+IHtcbiAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnJheUwuY29uY2F0KGFycmF5UikpKTtcbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG4vKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJztcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0Jvb2xlYW4nKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cbiAqL1xuXG5leHBvcnQgY29uc3QgTU9OVEhTID0gW1xuICAnSmFudWFyeScsXG4gICdGZWJydWFyeScsXG4gICdNYXJjaCcsXG4gICdBcHJpbCcsXG4gICdNYXknLFxuICAnSnVuZScsXG4gICdKdWx5JyxcbiAgJ0F1Z3VzdCcsXG4gICdTZXB0ZW1iZXInLFxuICAnT2N0b2JlcicsXG4gICdOb3ZlbWJlcicsXG4gICdEZWNlbWJlcidcbl07XG5cbmV4cG9ydCBjb25zdCBXRUVLREFZUyA9IFtcbiAgJ1N1bmRheScsXG4gICdNb25kYXknLFxuICAnVHVlc2RheScsXG4gICdXZWRuZXNkYXknLFxuICAnVGh1cnNkYXknLFxuICAnRnJpZGF5JyxcbiAgJ1NhdHVyZGF5J1xuXTtcblxuZXhwb3J0IGNvbnN0IERBVEVfVU5JVFMgPSB7XG4gIG1pbGxpc2Vjb25kczogMSxcbiAgc2Vjb25kczogMTAwMCxcbiAgbWludXRlczogNjAgKiAxMDAwLFxuICBob3VyczogNjAgKiA2MCAqIDEwMDAsXG4gIGRheXM6IDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gIHdlZWtzOiA3ICogMjQgKiA2MCAqIDYwICogMTAwMFxufTtcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHN0YXJ0LCBlbmQpID0+IHtcclxuICByZXR1cm4gKG5ldyBEYXRlKHN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShlbmQpLmdldFRpbWUoKSk7XHJcbn0pO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDIwLzAxLzIwMTcuXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5JztcbmltcG9ydCBpc1ZhbGlkRGF0ZSBmcm9tICcuL2lzVmFsaWQnO1xuaW1wb3J0IHtcbiAgV0VFS0RBWVMsXG4gIE1PTlRIU1xufSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRXZWVrID0gKGQpID0+IHtcbiAgLy8gQ29weSBkYXRlIHNvIGRvbid0IG1vZGlmeSBvcmlnaW5hbFxuICBkID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIGQuZ2V0RGF0ZSgpKSk7XG4gIC8vIFNldCB0byBuZWFyZXN0IFRodXJzZGF5OiBjdXJyZW50IGRhdGUgKyA0IC0gY3VycmVudCBkYXkgbnVtYmVyXG4gIC8vIE1ha2UgU3VuZGF5J3MgZGF5IG51bWJlciA3XG4gIGQuc2V0VVRDRGF0ZShkLmdldFVUQ0RhdGUoKSArIDQgLSAoZC5nZXRVVENEYXkoKSB8fCA3KSk7XG4gIC8vIEdldCBmaXJzdCBkYXkgb2YgeWVhclxuICBsZXQgeWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRVVENGdWxsWWVhcigpLCAwLCAxKSk7XG5cbiAgLy8gQ2FsY3VsYXRlIGZ1bGwgd2Vla3MgdG8gbmVhcmVzdCBUaHVyc2RheVxuICBsZXQgd2Vla05vID0gTWF0aC5jZWlsKCgoKGQgLSB5ZWFyU3RhcnQpIC8gODY0MDAwMDApICsgMSkgLyA3KTtcblxuICAvLyBSZXR1cm4gYXJyYXkgb2YgeWVhciBhbmQgd2VlayBudW1iZXJcbiAgcmV0dXJuIFtkLmdldFVUQ0Z1bGxZZWFyKCksIHdlZWtOb107XG59O1xuXG4vLyB1dGlsaXR5IGZ1bmN0aW9ucyBmb3IgdGhlIGRhdGUgZm9ybWF0dGluZ1xuY29uc3QgWkVST1MgPSAnMDAwMDAwMDAnO1xuY29uc3QgbGFzdE4gPSBjdXJyeSgobiwgc3RyKSA9PiBzdHIuc3Vic3RyaW5nKHN0ci5sZW5ndGggLSBuLCBzdHIubGVuZ3RoKSk7XG5jb25zdCBmaXJzdE4gPSBjdXJyeSgobiwgc3RyKSA9PiBzdHIuc3Vic3RyaW5nKDAsIG4pKTtcbmNvbnN0IGZpbGwgPSBjdXJyeSgoZGlnaXRzLCBuKSA9PiBsYXN0TihkaWdpdHMsIFpFUk9TICsgbikpO1xuXG4vLyBkYXRlL3RpbWUgcmVnZXhcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuY29uc3QgREFURV9UT0tFTlMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UXxZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nO1xuXG5jb25zdCBtb2RDZWlsaW5nID0gKG1vZCwgdmFsKSA9PiB2YWwgJSBtb2QgfHwgbW9kO1xuXG4vLyB0b2tlbnMgbWFwIHRvIGdldCBwYXJ0cyBvZiB0aGUgZGF0ZSAvdGltZVxuY29uc3QgdG9rZW5zID0ge1xuICBZWVlZOiBkID0+IGZpbGwoNCwgZC5nZXRGdWxsWWVhcigpKSxcbiAgWVk6IGQgPT4gbGFzdE4oMiwgZmlsbCg0LCBkLmdldEZ1bGxZZWFyKCkpKSxcbiAgTU1NTTogZCA9PiBNT05USFNbZC5nZXRNb250aCgpXSxcbiAgTU1NOiBkID0+IGZpcnN0TigzLCBNT05USFNbZC5nZXRNb250aCgpXSksXG4gIE1NOiBkID0+IGZpbGwoMiwgZC5nZXRNb250aCgpICsgMSksXG4gIE06IGQgPT4gZC5nZXRNb250aCgpICsgMSxcbiAgdzogZCA9PiBnZXRXZWVrKGQpLFxuICB3dzogZCA9PiBmaWxsKDIsIGdldFdlZWsoZCkpLFxuICBERDogZCA9PiBmaWxsKDIsIGQuZ2V0RGF0ZSgpKSxcbiAgRDogZCA9PiBkLmdldERhdGUoKSxcbiAgZGRkZDogZCA9PiBXRUVLREFZU1tkLmdldERheSgpXSxcbiAgZGRkOiBkID0+IGZpcnN0TigzLCBXRUVLREFZU1tkLmdldERheSgpXSksXG4gIGRkOiBkID0+IGZpcnN0TigyLCBXRUVLREFZU1tkLmdldERheSgpXSksXG4gIGQ6IGQgPT4gZC5nZXREYXkoKSxcbiAgSEg6IGQgPT4gZmlsbCgyLCBkLmdldEhvdXJzKCkpLFxuICBIOiBkID0+IGQuZ2V0SG91cnMoKSxcbiAgaGg6IGQgPT4gZmlsbCgyLCBtb2RDZWlsaW5nKDEyLCBkLmdldEhvdXJzKCkpKSxcbiAgaDogZCA9PiBtb2RDZWlsaW5nKDEyLCBkLmdldEhvdXJzKCkpLFxuICBtbTogZCA9PiBmaWxsKDIsIGQuZ2V0TWludXRlcygpKSxcbiAgbTogZCA9PiBkLmdldE1pbnV0ZXMoKSxcbiAgc3M6IGQgPT4gZmlsbCgyLCBkLmdldFNlY29uZHMoKSksXG4gIHM6IGQgPT4gZC5nZXRTZWNvbmRzKCksXG4gIEE6IGQgPT4gZC5nZXRIb3VycygpID4gMTEgPyAnUE0nIDogJ0FNJyxcbiAgYTogZCA9PiBkLmdldEhvdXJzKCkgPiAxMSA/ICdwbScgOiAnYW0nLFxuICBTU1M6IGQgPT4gZmlsbCgzLCBkLmdldE1pbGxpc2Vjb25kcygpKSxcbiAgU1M6IGQgPT4gZmlyc3ROKDIsIGZpbGwoMywgZC5nZXRNaWxsaXNlY29uZHMoKSkpLFxuICBTOiBkID0+IGZpcnN0TigxLCBmaWxsKDMsIGQuZ2V0TWlsbGlzZWNvbmRzKCkpKSxcbiAgUTogZCA9PiBNYXRoLmNlaWwoKGQuZ2V0TW9udGgoKSArIDEpIC8gMylcbn07XG5cbi8vIG1hcCB0aGlzIGZ1bmN0aW9uIHRvIGdldCB0aGUgYWN0dWFsIHRpbWUvZGF0ZSB2YWx1ZSBmb3IgZWFjaCB0b2tlblxuY29uc3Qgc3dhcFRva2VuV2l0aFZhbHVlID0gY3VycnkoKGRhdGUsIHRva2VuKSA9PiB7XG4gIHJldHVybiB0b2tlbnNbdG9rZW5dID8gdG9rZW5zW3Rva2VuXShkYXRlKSA6IHRva2VuO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChmb3JtYXQsIGRhdGUpID0+IHtcbiAgLy8gY2hlY2sgZm9yIHZhbGlkIGRhdGVcbiAgaWYgKCFpc1ZhbGlkRGF0ZShkYXRlKSkgcmV0dXJuICdJbnZhbGlkIERhdGUnOyAvLyByZXR1cm4gc3RyaW5nXG4gIHJldHVybiBmb3JtYXQubWF0Y2goREFURV9UT0tFTlMpLm1hcChzd2FwVG9rZW5XaXRoVmFsdWUoZGF0ZSkpLmpvaW4oJycpOyAvLyByZXR1cm4gam9pbmVkIHN0cmluZ1xufSk7XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ0RhdGUnKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDA5LzAzLzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgZGlmZkRhdGUgZnJvbSAnLi9kaWZmRGF0ZSc7XHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiB7XHJcbiAgcmV0dXJuIGRpZmZEYXRlKG5ldyBEYXRlKCkpKGQpIDwgMDtcclxufTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDE4LzAzLzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgaXNEYXRlIGZyb20gJy4vaXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHgpID0+IHtcclxuICByZXR1cm4gaXNEYXRlKHgpICYmIGlzRmluaXRlKHgudmFsdWVPZigpKTtcclxufTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDg2NDAwMDAwOyAvLyAyNCo2MCo2MCoxMDAwID0gODY0MDAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDM2MDAwMDA7IC8vIDYwKjYwKjEwMDAgPSAzNjAwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyA2MDAwMDsgLy8gNjAqMTAwMCA9IDYwMDAwXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyAxMDAwO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLy8gYXJyYXlcbmltcG9ydCBlbXB0eUFycmF5IGZyb20gJ2FycmF5L2VtcHR5JztcbmltcG9ydCBlcXVhbHNBcnJheSBmcm9tICdhcnJheS9lcXVhbHMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnYXJyYXkvaXMnO1xuaW1wb3J0IHRvQXJyYXkgZnJvbSAnYXJyYXkvdG8nO1xuaW1wb3J0IHVuaW9uQXJyYXkgZnJvbSAnYXJyYXkvdW5pb24nO1xuLy8gYm9vbGVhblxuaW1wb3J0IGlzQm9vbGVhbiBmcm9tICdib29sZWFuL2lzJztcblxuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdjb25zdGFudHMnO1xuXG4vLyBtb25hZHNcbmltcG9ydCBqdXN0IGZyb20gJ21vbmFkcy9KdXN0JztcbmltcG9ydCBtYXliZSBmcm9tICdtb25hZHMvTWF5YmUnO1xuaW1wb3J0IG5vdGhpbmcgZnJvbSAnbW9uYWRzL05vdGhpbmcnO1xuXG4vLyBudW1iZXJcbmltcG9ydCBpc051bWJlciBmcm9tICdudW1iZXIvaXMnO1xuaW1wb3J0IGlzTmFuIGZyb20gJ251bWJlci9pc05hbic7XG5cbi8vIG9iamVjdFxuaW1wb3J0IGVtcHR5T2JqZWN0IGZyb20gJ29iamVjdC9lbXB0eSc7XG5pbXBvcnQgZXF1YWxzT2JqZWN0IGZyb20gJ29iamVjdC9lcXVhbHMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJ29iamVjdC9pcyc7XG5pbXBvcnQgaXNFbXB0eU9iamVjdCBmcm9tICdvYmplY3QvaXNFbXB0eSc7XG5pbXBvcnQgbWVyZ2VPYmplY3QgZnJvbSAnb2JqZWN0L21lcmdlJztcbmltcG9ydCBvbWl0RnJvbU9iamVjdCBmcm9tICdvYmplY3Qvb21pdCc7XG5cbi8vIHN0cmluZ1xuaW1wb3J0IGNvbmNhdFN0cmluZyBmcm9tICdzdHJpbmcvY29uY2F0JztcbmltcG9ydCBmb3JtYXRTdHJpbmcgZnJvbSAnc3RyaW5nL2Zvcm1hdFN0cmluZyc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnc3RyaW5nL2lzJztcblxuLy8gdXRpbFxuLy8gaW1wb3J0IGFuZCBmcm9tICd1dGlsL2FuZCc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICd1dGlsL2NvbXBvc2UnO1xuaW1wb3J0IGN1cnJ5IGZyb20gJ3V0aWwvY3VycnknO1xuaW1wb3J0IGVtcHR5IGZyb20gJ3V0aWwvZW1wdHknO1xuaW1wb3J0IGVxdWFscyBmcm9tICd1dGlsL2VxdWFscyc7XG5pbXBvcnQgZXhpc3RzIGZyb20gJ3V0aWwvZXhpc3RzJztcbmltcG9ydCBpZGVudGljYWwgZnJvbSAndXRpbC9pZGVudGljYWwnO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gJ3V0aWwvaWRlbnRpdHknO1xuaW1wb3J0IGlzIGZyb20gJ3V0aWwvaXMnO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSAndXRpbC9pc0VtcHR5JztcbmltcG9ydCBub3QgZnJvbSAndXRpbC9ub3QnO1xuLy8gaW1wb3J0IG51bGwgZnJvbSAnbnVsbCc7XG5pbXBvcnQgb3IgZnJvbSAndXRpbC9vcic7XG5pbXBvcnQgdHJ1dGh5IGZyb20gJ3V0aWwvdHJ1dGh5JztcbmltcG9ydCB0eXBlIGZyb20gJ3V0aWwvdHlwZSc7XG5cbi8vIGRhdGVcbmltcG9ydCBkaWZmRGF0ZSBmcm9tICdkYXRlL2RpZmZEYXRlJztcbmltcG9ydCBmb3JtYXREYXRlVGltZSBmcm9tICdkYXRlL2Zvcm1hdERhdGVUaW1lJztcbmltcG9ydCBkYXRlSXMgZnJvbSAnZGF0ZS9pcyc7XG5pbXBvcnQgaXNGdXR1cmVEYXRlIGZyb20gJ2RhdGUvaXNGdXR1cmVEYXRlJztcbmltcG9ydCBpc1ZhbGlkIGZyb20gJ2RhdGUvaXNWYWxpZCc7XG5pbXBvcnQgdG9EYXkgZnJvbSAnZGF0ZS90b0RheSc7XG5pbXBvcnQgdG9Ib3VyIGZyb20gJ2RhdGUvdG9Ib3VyJztcbmltcG9ydCB0b01pbnV0ZXMgZnJvbSAnZGF0ZS90b01pbnV0ZXMnO1xuaW1wb3J0IHRvU2Vjb25kcyBmcm9tICdkYXRlL3RvU2Vjb25kcyc7XG4iLCJsZXQgSnVzdCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuSnVzdC5wcm90b3R5cGUuaXNKdXN0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfTtcbkp1c3QucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9O1xuXG5leHBvcnQgZGVmYXVsdCBKdXN0O1xuIiwiaW1wb3J0IEp1c3QgZnJvbSAnLi9KdXN0JztcbmltcG9ydCBOb3RoaW5nIGZyb20gJy4vTm90aGluZyc7XG5cbmxldCBNYXliZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgdGhpcy5fX3ZhbHVlID0gdmFsO1xufTtcblxuTWF5YmUub2YgPSBmdW5jdGlvbiAodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBNYXliZSkgcmV0dXJuIHZhbDtcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBNYXliZSkge1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByZXR1cm4gbmV3IE1heWJlKHZhbCk7XG59O1xuXG5NYXliZS5wcm90b3R5cGUuZ2V0T3JFbHNlID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIHRoaXMuaXNOb3RoaW5nKCkgPyBuIDogdGhpcy5fX3ZhbHVlO1xufTtcblxuTWF5YmUucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gIGlmICh0aGlzLmlzTm90aGluZygpKSB7XG4gICAgcmV0dXJuIE1heWJlLm9mKG51bGwpO1xuICB9XG4gIHJldHVybiBNYXliZS5vZihmKHRoaXMuX192YWx1ZSkpO1xufTtcblxuTWF5YmUucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKG0pIHtcbiAgcmV0dXJuIG0ubWFwKHRoaXMuX192YWx1ZSk7XG59O1xuXG5NYXliZS5wcm90b3R5cGUuaXNOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKHRoaXMuX192YWx1ZSA9PSBudWxsKTtcbn07XG5cbk1heWJlLnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhdGhpcy5pc05vdGhpbmcoKTtcbn07XG5cbk1heWJlLnByb3RvdHlwZS5Ob3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IE5vdGhpbmcoKTtcbn07XG5cbk1heWJlLnByb3RvdHlwZS5KdXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IEp1c3QodGhpcy5fdmFsdWUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWF5YmU7XG4iLCJcbmxldCBOb3RoaW5nID0gZnVuY3Rpb24gKCkge307XG5cbk5vdGhpbmcucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9O1xuTm90aGluZy5wcm90b3R5cGUuaXNOb3RoaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfTtcblxuZXhwb3J0IGRlZmF1bHQgTm90aGluZztcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnO1xuXG5leHBvcnQgZGVmYXVsdCBpcygnTnVtYmVyJyk7XG4iLCIvKipcbiAqIGlzTmFOXG4gKiBDaGVja3MgaWYgbnVtYmVyIGlzIE5BTlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqL1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXMnO1xuaW1wb3J0IGFuZCBmcm9tICcuLi91dGlsL2FuZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XG4gIHJldHVybiBhbmQoaXNOdW1iZXIoeCksIGlzTmFOKHgpKTtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbmltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzJztcblxuZXhwb3J0IGRlZmF1bHQgKHgpID0+IHtcbiAgcmV0dXJuIGlzT2JqZWN0KHgpID8ge30gOiB2b2lkIDA7XG59O1xuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5JztcbmltcG9ydCBleGlzdHMgZnJvbSAnLi4vdXRpbC9leGlzdHMnO1xuaW1wb3J0IG5vdCBmcm9tICcuLi91dGlsL25vdCc7XG5pbXBvcnQgYW5kIGZyb20gJy4uL3V0aWwvYW5kJztcbmltcG9ydCBpc0VtcHR5T2JqZWN0IGZyb20gJy4vaXNFbXB0eSc7XG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL3V0aWwvZXF1YWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHgsIHkpID0+IHtcbiAgaWYgKGFuZChpc0VtcHR5T2JqZWN0KHgpLCBpc0VtcHR5T2JqZWN0KHkpKSkgcmV0dXJuIHRydWU7XG5cbiAgZm9yIChsZXQga2V5WCBpbiB4KSB7XG4gICAgaWYgKG5vdChlcXVhbHMoeFtrZXlYXSwgeVtrZXlYXSkpKSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKGxldCBrZXlZIGluIHkpIHtcbiAgICBpZiAobm90KGV4aXN0cyh4W2tleVldKSkgJiYgZXhpc3RzKHlba2V5WV0pKSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdPYmplY3QnKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoeCkgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4geCkge1xuICAgIGlmICh4Lmhhc093blByb3BlcnR5KGtleSkpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5JztcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi4vdXRpbC9pZGVudGljYWwnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL29iamVjdC9pcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi9hcnJheS9pcyc7XG5pbXBvcnQgdW5pb24gZnJvbSAnLi4vYXJyYXkvdW5pb24nO1xuXG5jb25zdCBtZXJnZSA9IGN1cnJ5KChvYmpMLCBvYmpSKSA9PiB7XG4gIGxldCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpMKTtcblxuICBpZiAoaWRlbnRpY2FsKG9iakwsIG9ialIpKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG9iakwpO1xuICB9XG4gIGZvciAobGV0IGtleSBpbiBvYmpSKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqUiwga2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IG9sZFZhbHVlID0gb2JqUltrZXldO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gb2JqTFtrZXldO1xuXG4gICAgaWYgKGlzT2JqZWN0KG9sZFZhbHVlKSAmJiBpc09iamVjdChuZXdWYWx1ZSkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2Uob2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkobmV3VmFsdWUpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHVuaW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2xkVmFsdWU7IC8vIFRPRE86IHRoaXMgaXMgYSByZWZlcmVuY2UsIHNob3VsZCBiZSBjbG9uZVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKG9iaiwgbmFtZXMpID0+IHtcbiAgbGV0IHJlc3VsdCA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKG9iaikuZmlsdGVyKChrZXkpID0+IHtcbiAgICByZXR1cm4gbmFtZXMuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgfSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cbiAqL1xuXG5leHBvcnQgY29uc3QgY29uY2F0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciA9ICcsJykgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xuICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgcmV0dXJuIGFyZ3Muam9pbihzZXBhcmF0b3IpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uY2F0O1xuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgdG9BcnJheSBmcm9tICcuLi9hcnJheS90byc7XHJcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnO1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RyKSB7IC8vIHVzZSBmdW5jdGlvbigpLCBhcnJvdyBmdW5jdGlvbiBkb2Vzbid0IGJpbmQgYXJndW1lbnRzXHJcbiAgbGV0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cyk7XHJcblxuICBhcmdzLnNoaWZ0KCk7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC97KFxcZCspfS9nLCAobWF0Y2gsIGlkeCkgPT4ge1xyXG4gICAgcmV0dXJuIG5vdChpcygnVW5kZWZpbmVkJywgYXJnc1tpZHhdKSkgPyBhcmdzW2lkeF0gOiBtYXRjaDtcclxuICB9KTtcclxufVxyXG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJztcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ1N0cmluZycpO1xuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogeCwgeVxuICogUmV0dXJucyBib29sZWFuXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHgsIHkpID0+IHggJiYgeSk7XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjUvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBjb21wb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gIGxldCBmdW5zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaW5pdCA9IGZ1bnNbZnVucy5sZW5ndGggLSAxXTtcclxuICAgIGxldCByZXN1bHQgPSBbaW5pdC5hcHBseShpbml0LCBhcmd1bWVudHMpXTtcclxuICAgIGxldCBpID0gZnVucy5sZW5ndGggLSAyO1xyXG5cbiAgICBmb3IgKGk7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgIGNvbnN0IGZ1biA9IGZ1bnNbaV07XHJcblxuICAgICAgcmVzdWx0ID0gW2Z1bi5hcHBseShmdW4sIHJlc3VsdCldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFswXTtcclxuICB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNS8wMy8yMDE3LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZnVuKSB7XG4gIGxldCBhcmdzbGVuID0gZnVuLmxlbmd0aDtcblxuICBpZiAoYXJnc2xlbiA9PT0gMCkge1xuICAgIHJldHVybiBmdW47XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlY3Vyc2VyKFtdKTtcblxuICBmdW5jdGlvbiByZWN1cnNlKGFjYywgYXJncykge1xuICAgIGxldCBfYWNjID0gYWNjLmNvbmNhdChhcmdzKTtcblxuICAgIGlmIChfYWNjLmxlbmd0aCA8IGFyZ3NsZW4pIHtcbiAgICAgIHJldHVybiBjcmVhdGVSZWN1cnNlcihfYWNjKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bi5hcHBseSh0aGlzLCBfYWNjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlY3Vyc2VyKGFjYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgIHJldHVybiByZWN1cnNlKGFjYywgYXJncyk7XG4gICAgfTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogZW1wdHlcbiAqIFJldHVybnMgdGhlIGVtcHR5IGVxdWl2YWxlbnQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKi9cbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9vYmplY3QvaXMnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4uL3N0cmluZy9pcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XG4gIGlmIChpc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmIChpc1N0cmluZyh4KSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAoaXNPYmplY3QoeCkpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgcmV0dXJuIHZvaWQgMDtcbn07XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBlcXVhbHNcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknO1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuL2V4aXN0cyc7XG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4vaWRlbnRpY2FsJztcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSc7XG5pbXBvcnQgbm90IGZyb20gJy4vbm90JztcbmltcG9ydCBvciBmcm9tICcuL29yJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9vYmplY3QvaXMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vYXJyYXkvaXMnO1xuaW1wb3J0IGlzQm9vbGVhbiBmcm9tICcuLi9ib29sZWFuL2lzJztcbmltcG9ydCBpc051bWJlciBmcm9tICcuLi9udW1iZXIvaXMnO1xuaW1wb3J0IGlzRGF0ZSBmcm9tICcuLi9kYXRlL2lzJztcbmltcG9ydCBlcXVhbHNBcnJheSBmcm9tICcuLi9hcnJheS9lcXVhbHMnO1xuaW1wb3J0IGVxdWFsc09iamVjdCBmcm9tICcuLi9vYmplY3QvZXF1YWxzJztcblxuY29uc3QgZXF1YWxzID0gY3VycnkoKHgsIHkpID0+IHtcbiAgaWYgKGlkZW50aWNhbCh4LCB5KSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGUoeCkgIT09IHR5cGUoeSkpIHJldHVybiBmYWxzZTtcblxuICBpZiAob3Iobm90KGV4aXN0cyh4KSksIG5vdChleGlzdHMoeSkpKSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh4LmNvbnN0cnVjdG9yICE9PSB5LmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzQm9vbGVhbih4KSB8fCBpc051bWJlcih4KSB8fCBpc0RhdGUoeCkpIHtcbiAgICByZXR1cm4gaWRlbnRpY2FsKHgudmFsdWVPZigpLCB5LnZhbHVlT2YoKSk7XG4gIH1cbiAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzQXJyYXkoeCwgeSk7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzT2JqZWN0KHgsIHkpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBlcXVhbHM7XG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICovXHJcbmltcG9ydCBfbnVsbCBmcm9tICcuL251bGwnO1xyXG5pbXBvcnQgbm90IGZyb20gJy4vbm90JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XHJcbiAgcmV0dXJuIG5vdChfbnVsbCh4KSk7XHJcbn07XHJcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIGlkZW50aWNhbFxuICogY2hlY2tzIGZvciBpZGVudGludGljYWwgaXRlbXNcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknO1xuaW1wb3J0IGlzTmFuIGZyb20gJy4uL251bWJlci9pc05hbic7XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KCh4LCB5KSA9PiB7XG4gIGlmICh4ID09PSAwICYmIHkgPT09IDApIHtcbiAgICByZXR1cm4gMSAvIHggPT09IDEgLyB5O1xuICB9XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGlzTmFuKHgpICYmIGlzTmFuKHkpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSk7XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBzdXBwbGllZCB0byB0aGUgZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoeCkgPT4ge1xuICByZXR1cm4geDtcbn07XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBsZW4gZGllcmlja3hcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5JztcclxuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChDdG9yLCB2YWwpID0+IHtcclxuICByZXR1cm4gdHlwZSh2YWwpID09PSBDdG9yO1xyXG59KTtcclxuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogZW1wdHlcbiAqIFJldHVybnMgdGhlIGVtcHR5IGVxdWl2YWxlbnQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKi9cbmltcG9ydCBlbXB0eSBmcm9tICcuL2VtcHR5JztcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnO1xuaW1wb3J0IGVxdWFscyBmcm9tICcuL2VxdWFscyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XG4gIHJldHVybiBleGlzdHMoeCkgJiYgZXF1YWxzKHgsIGVtcHR5KHgpKTtcbn07XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XHJcbiAgcmV0dXJuICF4O1xyXG59O1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XHJcbiAgcmV0dXJuIHggPT0gbnVsbDtcclxufTtcclxuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogb3JcbiAqIFJldHVybnMgdHJ1ZSBpZiBvbmUgb3IgdGhlIG90aGVyIGlzIHRydWVcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoeCwgeSkgPT4geCB8fCB5KTtcblxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDA2LzAyLzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XHJcbiAgcmV0dXJuICh4ICE9PSBmYWxzZSkgJiYgZXhpc3RzKHgpO1xyXG59O1xyXG4iLCIvKipcclxuICogQGF1dGhvciBMZW4gRGllcmlja3hcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KS5zbGljZSg4LCAtMSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=