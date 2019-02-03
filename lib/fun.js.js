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
Object.defineProperty(exports, "constants", {
  enumerable: true,
  get: function get() {
    return _constants.default;
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

var _null2 = _interopRequireDefault(__webpack_require__(/*! ./null */ "./src/util/null.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not */ "./src/util/not.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Len Dierickx
 */
function exists(x) {
  return (0, _not.default)((0, _null2.default)(x));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4uanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1bi5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYXJyYXkvaXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2FycmF5L3RvLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9hcnJheS91bmlvbi5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvYm9vbGVhbi9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2RpZmZEYXRlLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2Zvcm1hdERhdGVUaW1lLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2lzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL2lzRnV0dXJlRGF0ZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS9pc1ZhbGlkLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvRGF5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9kYXRlL3RvSG91ci5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvZGF0ZS90b01pbnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL2RhdGUvdG9TZWNvbmRzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbW9uYWRzL0p1c3QuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL21vbmFkcy9NYXliZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbW9uYWRzL05vdGhpbmcuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL251bWJlci9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvbnVtYmVyL2lzTmFuLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy9vYmplY3QvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL29iamVjdC9tZXJnZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvb2JqZWN0L29taXQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9mb3JtYXRTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3N0cmluZy9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9hbmQuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9jdXJyeS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9lbXB0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vZnVuLmpzLy4vc3JjL3V0aWwvZXhpc3RzLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL2lkZW50aWNhbC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pcy5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9pc0VtcHR5LmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL25vdC5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC9udWxsLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL29yLmpzIiwid2VicGFjazovL2Z1bi5qcy8uL3NyYy91dGlsL3RydXRoeS5qcyIsIndlYnBhY2s6Ly9mdW4uanMvLi9zcmMvdXRpbC90eXBlLmpzIl0sIm5hbWVzIjpbIngiLCJ5IiwibGVuZ3RoIiwiaSIsIkFycmF5IiwiYXBwbHkiLCJhcnJheUwiLCJhcnJheVIiLCJmcm9tIiwiU2V0IiwiY29uY2F0IiwiTU9OVEhTIiwiV0VFS0RBWVMiLCJEQVRFX1VOSVRTIiwibWlsbGlzZWNvbmRzIiwic2Vjb25kcyIsIm1pbnV0ZXMiLCJob3VycyIsImRheXMiLCJ3ZWVrcyIsInN0YXJ0IiwiZW5kIiwiRGF0ZSIsImdldFRpbWUiLCJnZXRXZWVrIiwiZCIsIlVUQyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwic2V0VVRDRGF0ZSIsImdldFVUQ0RhdGUiLCJnZXRVVENEYXkiLCJ5ZWFyU3RhcnQiLCJnZXRVVENGdWxsWWVhciIsIndlZWtObyIsIk1hdGgiLCJjZWlsIiwiWkVST1MiLCJsYXN0TiIsIm4iLCJzdHIiLCJzdWJzdHJpbmciLCJmaXJzdE4iLCJmaWxsIiwiZGlnaXRzIiwiREFURV9UT0tFTlMiLCJtb2RDZWlsaW5nIiwibW9kIiwidmFsIiwidG9rZW5zIiwiWVlZWSIsIllZIiwiTU1NTSIsIk1NTSIsIk1NIiwiTSIsInciLCJ3dyIsIkREIiwiRCIsImRkZGQiLCJnZXREYXkiLCJkZGQiLCJkZCIsIkhIIiwiZ2V0SG91cnMiLCJIIiwiaGgiLCJoIiwibW0iLCJnZXRNaW51dGVzIiwibSIsInNzIiwiZ2V0U2Vjb25kcyIsInMiLCJBIiwiYSIsIlNTUyIsImdldE1pbGxpc2Vjb25kcyIsIlNTIiwiUyIsIlEiLCJzd2FwVG9rZW5XaXRoVmFsdWUiLCJkYXRlIiwidG9rZW4iLCJmb3JtYXQiLCJtYXRjaCIsIm1hcCIsImpvaW4iLCJpc0Zpbml0ZSIsInZhbHVlT2YiLCJKdXN0IiwiX3ZhbHVlIiwicHJvdG90eXBlIiwiaXNKdXN0IiwiaXNOb3RoaW5nIiwiTWF5YmUiLCJfX3ZhbHVlIiwib2YiLCJnZXRPckVsc2UiLCJmIiwiYXAiLCJOb3RoaW5nIiwiaXNOYU4iLCJrZXlYIiwia2V5WSIsImtleSIsImhhc093blByb3BlcnR5IiwibWVyZ2UiLCJvYmpMIiwib2JqUiIsInJlc3VsdCIsIk9iamVjdCIsImFzc2lnbiIsImNhbGwiLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwib2JqIiwibmFtZXMiLCJrZXlzIiwiZmlsdGVyIiwiaW5kZXhPZiIsImZvckVhY2giLCJzZXBhcmF0b3IiLCJhcmdzIiwic2xpY2UiLCJhcmd1bWVudHMiLCJzaGlmdCIsInJlcGxhY2UiLCJpZHgiLCJhbmQiLCJjb21wb3NlIiwiZnVucyIsImluaXQiLCJmdW4iLCJjdXJyeSIsImFyZ3NsZW4iLCJjcmVhdGVSZWN1cnNlciIsInJlY3Vyc2UiLCJhY2MiLCJfYWNjIiwiZW1wdHkiLCJlcXVhbHMiLCJjb25zdHJ1Y3RvciIsImV4aXN0cyIsIkN0b3IiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUs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QUFLQSxHQUFMLE1BQWNpRyxJQUFyQjtBQUNELENBRmMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RmOztBQUNBOztBQUNBOzs7O0FBUEE7Ozs7O2VBU2Usa0JBQUNsSixDQUFELEVBQU87QUFDcEIsU0FBTyxxQkFBT0EsQ0FBUCxLQUFhLHFCQUFPQSxDQUFQLEVBQVUsb0JBQU1BLENBQU4sQ0FBVixDQUFwQjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDs7O2VBR2Usa0JBQUNBLENBQUQsRUFBTztBQUNwQixTQUFPLENBQUNBLENBQVI7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7OztlQUdlLGtCQUFDQSxDQUFELEVBQU87QUFDcEIsU0FBT0EsQ0FBQyxJQUFJLElBQVo7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUQ7Ozs7QUFMQTs7Ozs7ZUFPZSxvQkFBTSxVQUFDQSxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFVRCxDQUFDLElBQUlDLENBQWY7QUFBQSxDQUFOLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKZjs7OztBQUhBOzs7ZUFLZSxrQkFBQ0QsQ0FBRCxFQUFPO0FBQ3BCLFNBQVFBLENBQUMsS0FBSyxLQUFQLElBQWlCLHFCQUFPQSxDQUFQLENBQXhCO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BEOzs7ZUFHZSxrQkFBQ0EsQ0FBRCxFQUFPO0FBQ3BCLFNBQU9pSCxNQUFNLENBQUNuQixTQUFQLENBQWlCcUQsUUFBakIsQ0FBMEJoQyxJQUExQixDQUErQm5ILENBQS9CLEVBQWtDOEgsS0FBbEMsQ0FBd0MsQ0FBeEMsRUFBMkMsQ0FBQyxDQUE1QyxDQUFQO0FBQ0QsQyIsImZpbGUiOiJmdW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImZ1bi5qc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmdW4uanNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZnVuLmpzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XHJcbiAgcmV0dXJuIGlzQXJyYXkoeCkgPyBbXSA6IHZvaWQgMDtcclxufTtcclxuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlsL2N1cnJ5JztcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnO1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi91dGlsL2VxdWFscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KCh4LCB5KSA9PiB7XG4gIGlmICh4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vdChlcXVhbHMoeFtpXSwgeVtpXSkpKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXMoJ0FycmF5Jyk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAxOC8wMy8yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XHJcbiAgcmV0dXJuIHgubGVuZ3RoID09PSAxID8gW3hbMF1dIDogQXJyYXkuYXBwbHkobnVsbCwgeCk7XHJcbn07XHJcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChhcnJheUwsIGFycmF5UikgPT4ge1xuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycmF5TC5jb25jYXQoYXJyYXlSKSkpO1xufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnO1xuXG5leHBvcnQgZGVmYXVsdCBpcygnQm9vbGVhbicpO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAxOC8wMy8yMDE3LlxuICovXG5cbmV4cG9ydCBjb25zdCBNT05USFMgPSBbXG4gICdKYW51YXJ5JyxcbiAgJ0ZlYnJ1YXJ5JyxcbiAgJ01hcmNoJyxcbiAgJ0FwcmlsJyxcbiAgJ01heScsXG4gICdKdW5lJyxcbiAgJ0p1bHknLFxuICAnQXVndXN0JyxcbiAgJ1NlcHRlbWJlcicsXG4gICdPY3RvYmVyJyxcbiAgJ05vdmVtYmVyJyxcbiAgJ0RlY2VtYmVyJ1xuXTtcblxuZXhwb3J0IGNvbnN0IFdFRUtEQVlTID0gW1xuICAnU3VuZGF5JyxcbiAgJ01vbmRheScsXG4gICdUdWVzZGF5JyxcbiAgJ1dlZG5lc2RheScsXG4gICdUaHVyc2RheScsXG4gICdGcmlkYXknLFxuICAnU2F0dXJkYXknXG5dO1xuXG5leHBvcnQgY29uc3QgREFURV9VTklUUyA9IHtcbiAgbWlsbGlzZWNvbmRzOiAxLFxuICBzZWNvbmRzOiAxMDAwLFxuICBtaW51dGVzOiA2MCAqIDEwMDAsXG4gIGhvdXJzOiA2MCAqIDYwICogMTAwMCxcbiAgZGF5czogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgd2Vla3M6IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwXG59O1xuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoc3RhcnQsIGVuZCkgPT4ge1xyXG4gIHJldHVybiAobmV3IERhdGUoc3RhcnQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGVuZCkuZ2V0VGltZSgpKTtcclxufSk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjAvMDEvMjAxNy5cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL3V0aWwvY3VycnknO1xuaW1wb3J0IGlzVmFsaWREYXRlIGZyb20gJy4vaXNWYWxpZCc7XG5pbXBvcnQge1xuICBXRUVLREFZUyxcbiAgTU9OVEhTXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldFdlZWsgPSAoZCkgPT4ge1xuICAvLyBDb3B5IGRhdGUgc28gZG9uJ3QgbW9kaWZ5IG9yaWdpbmFsXG4gIGQgPSBuZXcgRGF0ZShEYXRlLlVUQyhkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSwgZC5nZXREYXRlKCkpKTtcbiAgLy8gU2V0IHRvIG5lYXJlc3QgVGh1cnNkYXk6IGN1cnJlbnQgZGF0ZSArIDQgLSBjdXJyZW50IGRheSBudW1iZXJcbiAgLy8gTWFrZSBTdW5kYXkncyBkYXkgbnVtYmVyIDdcbiAgZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpICsgNCAtIChkLmdldFVUQ0RheSgpIHx8IDcpKTtcbiAgLy8gR2V0IGZpcnN0IGRheSBvZiB5ZWFyXG4gIGxldCB5ZWFyU3RhcnQgPSBuZXcgRGF0ZShEYXRlLlVUQyhkLmdldFVUQ0Z1bGxZZWFyKCksIDAsIDEpKTtcblxuICAvLyBDYWxjdWxhdGUgZnVsbCB3ZWVrcyB0byBuZWFyZXN0IFRodXJzZGF5XG4gIGxldCB3ZWVrTm8gPSBNYXRoLmNlaWwoKCgoZCAtIHllYXJTdGFydCkgLyA4NjQwMDAwMCkgKyAxKSAvIDcpO1xuXG4gIC8vIFJldHVybiBhcnJheSBvZiB5ZWFyIGFuZCB3ZWVrIG51bWJlclxuICByZXR1cm4gW2QuZ2V0VVRDRnVsbFllYXIoKSwgd2Vla05vXTtcbn07XG5cbi8vIHV0aWxpdHkgZnVuY3Rpb25zIGZvciB0aGUgZGF0ZSBmb3JtYXR0aW5nXG5jb25zdCBaRVJPUyA9ICcwMDAwMDAwMCc7XG5jb25zdCBsYXN0TiA9IGN1cnJ5KChuLCBzdHIpID0+IHN0ci5zdWJzdHJpbmcoc3RyLmxlbmd0aCAtIG4sIHN0ci5sZW5ndGgpKTtcbmNvbnN0IGZpcnN0TiA9IGN1cnJ5KChuLCBzdHIpID0+IHN0ci5zdWJzdHJpbmcoMCwgbikpO1xuY29uc3QgZmlsbCA9IGN1cnJ5KChkaWdpdHMsIG4pID0+IGxhc3ROKGRpZ2l0cywgWkVST1MgKyBuKSk7XG5cbi8vIGRhdGUvdGltZSByZWdleFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5jb25zdCBEQVRFX1RPS0VOUyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRfFlZWVlZWXxZWVlZWXxZWVlZfFlZfGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fG1tP3xzcz98U3sxLDl9fHh8WHx6ej98Wlo/fC4pL2c7XG5cbmNvbnN0IG1vZENlaWxpbmcgPSAobW9kLCB2YWwpID0+IHZhbCAlIG1vZCB8fCBtb2Q7XG5cbi8vIHRva2VucyBtYXAgdG8gZ2V0IHBhcnRzIG9mIHRoZSBkYXRlIC90aW1lXG5jb25zdCB0b2tlbnMgPSB7XG4gIFlZWVk6IGQgPT4gZmlsbCg0LCBkLmdldEZ1bGxZZWFyKCkpLFxuICBZWTogZCA9PiBsYXN0TigyLCBmaWxsKDQsIGQuZ2V0RnVsbFllYXIoKSkpLFxuICBNTU1NOiBkID0+IE1PTlRIU1tkLmdldE1vbnRoKCldLFxuICBNTU06IGQgPT4gZmlyc3ROKDMsIE1PTlRIU1tkLmdldE1vbnRoKCldKSxcbiAgTU06IGQgPT4gZmlsbCgyLCBkLmdldE1vbnRoKCkgKyAxKSxcbiAgTTogZCA9PiBkLmdldE1vbnRoKCkgKyAxLFxuICB3OiBkID0+IGdldFdlZWsoZCksXG4gIHd3OiBkID0+IGZpbGwoMiwgZ2V0V2VlayhkKSksXG4gIEREOiBkID0+IGZpbGwoMiwgZC5nZXREYXRlKCkpLFxuICBEOiBkID0+IGQuZ2V0RGF0ZSgpLFxuICBkZGRkOiBkID0+IFdFRUtEQVlTW2QuZ2V0RGF5KCldLFxuICBkZGQ6IGQgPT4gZmlyc3ROKDMsIFdFRUtEQVlTW2QuZ2V0RGF5KCldKSxcbiAgZGQ6IGQgPT4gZmlyc3ROKDIsIFdFRUtEQVlTW2QuZ2V0RGF5KCldKSxcbiAgZDogZCA9PiBkLmdldERheSgpLFxuICBISDogZCA9PiBmaWxsKDIsIGQuZ2V0SG91cnMoKSksXG4gIEg6IGQgPT4gZC5nZXRIb3VycygpLFxuICBoaDogZCA9PiBmaWxsKDIsIG1vZENlaWxpbmcoMTIsIGQuZ2V0SG91cnMoKSkpLFxuICBoOiBkID0+IG1vZENlaWxpbmcoMTIsIGQuZ2V0SG91cnMoKSksXG4gIG1tOiBkID0+IGZpbGwoMiwgZC5nZXRNaW51dGVzKCkpLFxuICBtOiBkID0+IGQuZ2V0TWludXRlcygpLFxuICBzczogZCA9PiBmaWxsKDIsIGQuZ2V0U2Vjb25kcygpKSxcbiAgczogZCA9PiBkLmdldFNlY29uZHMoKSxcbiAgQTogZCA9PiBkLmdldEhvdXJzKCkgPiAxMSA/ICdQTScgOiAnQU0nLFxuICBhOiBkID0+IGQuZ2V0SG91cnMoKSA+IDExID8gJ3BtJyA6ICdhbScsXG4gIFNTUzogZCA9PiBmaWxsKDMsIGQuZ2V0TWlsbGlzZWNvbmRzKCkpLFxuICBTUzogZCA9PiBmaXJzdE4oMiwgZmlsbCgzLCBkLmdldE1pbGxpc2Vjb25kcygpKSksXG4gIFM6IGQgPT4gZmlyc3ROKDEsIGZpbGwoMywgZC5nZXRNaWxsaXNlY29uZHMoKSkpLFxuICBROiBkID0+IE1hdGguY2VpbCgoZC5nZXRNb250aCgpICsgMSkgLyAzKVxufTtcblxuLy8gbWFwIHRoaXMgZnVuY3Rpb24gdG8gZ2V0IHRoZSBhY3R1YWwgdGltZS9kYXRlIHZhbHVlIGZvciBlYWNoIHRva2VuXG5jb25zdCBzd2FwVG9rZW5XaXRoVmFsdWUgPSBjdXJyeSgoZGF0ZSwgdG9rZW4pID0+IHtcbiAgcmV0dXJuIHRva2Vuc1t0b2tlbl0gPyB0b2tlbnNbdG9rZW5dKGRhdGUpIDogdG9rZW47XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKGZvcm1hdCwgZGF0ZSkgPT4ge1xuICAvLyBjaGVjayBmb3IgdmFsaWQgZGF0ZVxuICBpZiAoIWlzVmFsaWREYXRlKGRhdGUpKSByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7IC8vIHJldHVybiBzdHJpbmdcbiAgcmV0dXJuIGZvcm1hdC5tYXRjaChEQVRFX1RPS0VOUykubWFwKHN3YXBUb2tlbldpdGhWYWx1ZShkYXRlKSkuam9pbignJyk7IC8vIHJldHVybiBqb2luZWQgc3RyaW5nXG59KTtcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxyXG4gKi9cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpcygnRGF0ZScpO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDkvMDMvMjAxNy5cclxuICovXHJcbmltcG9ydCBkaWZmRGF0ZSBmcm9tICcuL2RpZmZEYXRlJztcclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IHtcclxuICByZXR1cm4gZGlmZkRhdGUobmV3IERhdGUoKSkoZCkgPCAwO1xyXG59O1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMTgvMDMvMjAxNy5cclxuICovXHJcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi9pcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeCkgPT4ge1xyXG4gIHJldHVybiBpc0RhdGUoeCkgJiYgaXNGaW5pdGUoeC52YWx1ZU9mKCkpO1xyXG59O1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gODY0MDAwMDA7IC8vIDI0KjYwKjYwKjEwMDAgPSA4NjQwMDAwMFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gMzYwMDAwMDsgLy8gNjAqNjAqMTAwMCA9IDM2MDAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDYwMDAwOyAvLyA2MCoxMDAwID0gNjAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDEwMDA7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vLyBhcnJheVxuZXhwb3J0IHtkZWZhdWx0IGFzIGVtcHR5QXJyYXl9IGZyb20gJ2FycmF5L2VtcHR5JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBlcXVhbHNBcnJheX0gZnJvbSAnYXJyYXkvZXF1YWxzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpc0FycmF5fSBmcm9tICdhcnJheS9pcyc7XG5leHBvcnQge2RlZmF1bHQgYXMgdG9BcnJheX0gZnJvbSAnYXJyYXkvdG8nO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHVuaW9uQXJyYXl9IGZyb20gJ2FycmF5L3VuaW9uJztcbi8vIGJvb2xlYW5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBpc0Jvb2xlYW59IGZyb20gJ2Jvb2xlYW4vaXMnO1xuXG5leHBvcnQge2RlZmF1bHQgYXMgY29uc3RhbnRzfSBmcm9tICdjb25zdGFudHMnO1xuXG4vLyBtb25hZHNcbmV4cG9ydCB7ZGVmYXVsdCBhcyBqdXN0fSBmcm9tICdtb25hZHMvSnVzdCc7XG5leHBvcnQge2RlZmF1bHQgYXMgbWF5YmV9IGZyb20gJ21vbmFkcy9NYXliZSc7XG5leHBvcnQge2RlZmF1bHQgYXMgbm90aGluZ30gZnJvbSAnbW9uYWRzL05vdGhpbmcnO1xuXG4vLyBudW1iZXJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpc051bWJlcn0gZnJvbSAnbnVtYmVyL2lzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpc05hbn0gZnJvbSAnbnVtYmVyL2lzTmFuJztcblxuLy8gb2JqZWN0XG5leHBvcnQge2RlZmF1bHQgYXMgZW1wdHlPYmplY3R9IGZyb20gJ29iamVjdC9lbXB0eSc7XG5leHBvcnQge2RlZmF1bHQgYXMgZXF1YWxzT2JqZWN0fSBmcm9tICdvYmplY3QvZXF1YWxzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpc09iamVjdH0gZnJvbSAnb2JqZWN0L2lzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpc0VtcHR5T2JqZWN0fSBmcm9tICdvYmplY3QvaXNFbXB0eSc7XG5leHBvcnQge2RlZmF1bHQgYXMgbWVyZ2VPYmplY3R9IGZyb20gJ29iamVjdC9tZXJnZSc7XG5leHBvcnQge2RlZmF1bHQgYXMgb21pdEZyb21PYmplY3R9IGZyb20gJ29iamVjdC9vbWl0JztcblxuLy8gc3RyaW5nXG5leHBvcnQge2RlZmF1bHQgYXMgY29uY2F0U3RyaW5nfSBmcm9tICdzdHJpbmcvY29uY2F0JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JtYXRTdHJpbmd9IGZyb20gJ3N0cmluZy9mb3JtYXRTdHJpbmcnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGlzU3RyaW5nfSBmcm9tICdzdHJpbmcvaXMnO1xuXG4vLyB1dGlsXG5leHBvcnQge2RlZmF1bHQgYXMgYW5kfSBmcm9tICd1dGlsL2FuZCc7XG5leHBvcnQge2RlZmF1bHQgYXMgY3Vycnl9IGZyb20gJ3V0aWwvY3VycnknO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGNvbXBvc2V9IGZyb20gJ3V0aWwvY29tcG9zZSc7XG5leHBvcnQge2RlZmF1bHQgYXMgZW1wdHl9IGZyb20gJ3V0aWwvZW1wdHknO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGVxdWFsc30gZnJvbSAndXRpbC9lcXVhbHMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGV4aXN0c30gZnJvbSAndXRpbC9leGlzdHMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGlkZW50aWNhbH0gZnJvbSAndXRpbC9pZGVudGljYWwnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGlkZW50aXR5fSBmcm9tICd1dGlsL2lkZW50aXR5JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpc30gZnJvbSAndXRpbC9pcyc7XG5leHBvcnQge2RlZmF1bHQgYXMgaXNFbXB0eX0gZnJvbSAndXRpbC9pc0VtcHR5JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBub3R9IGZyb20gJ3V0aWwvbm90Jztcbi8vIGV4cG9ydCB7ZGVmYXVsdCBhcyBudWxsfSBmcm9tICdudWxsJ1xuZXhwb3J0IHtkZWZhdWx0IGFzIG9yfSBmcm9tICd1dGlsL29yJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0cnV0aHl9IGZyb20gJ3V0aWwvdHJ1dGh5JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0eXBlfSBmcm9tICd1dGlsL3R5cGUnO1xuXG4vLyBkYXRlXG5leHBvcnQge2RlZmF1bHQgYXMgZGlmZkRhdGV9IGZyb20gJ2RhdGUvZGlmZkRhdGUnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGZvcm1hdERhdGVUaW1lfSBmcm9tICdkYXRlL2Zvcm1hdERhdGVUaW1lJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBkYXRlSXN9IGZyb20gJ2RhdGUvaXMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGlzRnV0dXJlRGF0ZX0gZnJvbSAnZGF0ZS9pc0Z1dHVyZURhdGUnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGlzVmFsaWR9IGZyb20gJ2RhdGUvaXNWYWxpZCc7XG5leHBvcnQge2RlZmF1bHQgYXMgdG9EYXl9IGZyb20gJ2RhdGUvdG9EYXknO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRvSG91cn0gZnJvbSAnZGF0ZS90b0hvdXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRvTWludXRlc30gZnJvbSAnZGF0ZS90b01pbnV0ZXMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRvU2Vjb25kc30gZnJvbSAnZGF0ZS90b1NlY29uZHMnO1xuIiwibGV0IEp1c3QgPSBmdW5jdGlvbiAodmFsKSB7XG4gIHRoaXMuX3ZhbHVlID0gdmFsO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkp1c3QucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH07XG5KdXN0LnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfTtcblxuZXhwb3J0IGRlZmF1bHQgSnVzdDtcbiIsImltcG9ydCBKdXN0IGZyb20gJy4vSnVzdCc7XG5pbXBvcnQgTm90aGluZyBmcm9tICcuL05vdGhpbmcnO1xuXG5sZXQgTWF5YmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gIHRoaXMuX192YWx1ZSA9IHZhbDtcbn07XG5cbk1heWJlLm9mID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgTWF5YmUpIHJldHVybiB2YWw7XG4gIGlmICh0aGlzIGluc3RhbmNlb2YgTWF5YmUpIHtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWw7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcmV0dXJuIG5ldyBNYXliZSh2YWwpO1xufTtcblxuTWF5YmUucHJvdG90eXBlLmdldE9yRWxzZSA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiB0aGlzLmlzTm90aGluZygpID8gbiA6IHRoaXMuX192YWx1ZTtcbn07XG5cbk1heWJlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZikge1xuICBpZiAodGhpcy5pc05vdGhpbmcoKSkge1xuICAgIHJldHVybiBNYXliZS5vZihudWxsKTtcbiAgfVxuICByZXR1cm4gTWF5YmUub2YoZih0aGlzLl9fdmFsdWUpKTtcbn07XG5cbk1heWJlLnByb3RvdHlwZS5hcCA9IGZ1bmN0aW9uIChtKSB7XG4gIHJldHVybiBtLm1hcCh0aGlzLl9fdmFsdWUpO1xufTtcblxuTWF5YmUucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICh0aGlzLl9fdmFsdWUgPT0gbnVsbCk7XG59O1xuXG5NYXliZS5wcm90b3R5cGUuaXNKdXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gIXRoaXMuaXNOb3RoaW5nKCk7XG59O1xuXG5NYXliZS5wcm90b3R5cGUuTm90aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBOb3RoaW5nKCk7XG59O1xuXG5NYXliZS5wcm90b3R5cGUuSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBKdXN0KHRoaXMuX3ZhbHVlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1heWJlO1xuIiwiXG5sZXQgTm90aGluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG5Ob3RoaW5nLnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfTtcbk5vdGhpbmcucHJvdG90eXBlLmlzTm90aGluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGhpbmc7XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi91dGlsL2lzJztcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ051bWJlcicpO1xuIiwiLyoqXG4gKiBpc05hTlxuICogQ2hlY2tzIGlmIG51bWJlciBpcyBOQU5cbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKi9cbmltcG9ydCBpc051bWJlciBmcm9tICcuL2lzJztcbmltcG9ydCBhbmQgZnJvbSAnLi4vdXRpbC9hbmQnO1xuXG5leHBvcnQgZGVmYXVsdCAoeCkgPT4ge1xuICByZXR1cm4gYW5kKGlzTnVtYmVyKHgpLCBpc05hTih4KSk7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XG4gIHJldHVybiBpc09iamVjdCh4KSA/IHt9IDogdm9pZCAwO1xufTtcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSc7XG5pbXBvcnQgZXhpc3RzIGZyb20gJy4uL3V0aWwvZXhpc3RzJztcbmltcG9ydCBub3QgZnJvbSAnLi4vdXRpbC9ub3QnO1xuaW1wb3J0IGFuZCBmcm9tICcuLi91dGlsL2FuZCc7XG5pbXBvcnQgaXNFbXB0eU9iamVjdCBmcm9tICcuL2lzRW1wdHknO1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi91dGlsL2VxdWFscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KCh4LCB5KSA9PiB7XG4gIGlmIChhbmQoaXNFbXB0eU9iamVjdCh4KSwgaXNFbXB0eU9iamVjdCh5KSkpIHJldHVybiB0cnVlO1xuXG4gIGZvciAobGV0IGtleVggaW4geCkge1xuICAgIGlmIChub3QoZXF1YWxzKHhba2V5WF0sIHlba2V5WF0pKSkgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yIChsZXQga2V5WSBpbiB5KSB7XG4gICAgaWYgKG5vdChleGlzdHMoeFtrZXlZXSkpICYmIGV4aXN0cyh5W2tleVldKSkgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59KTtcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnO1xuXG5leHBvcnQgZGVmYXVsdCBpcygnT2JqZWN0Jyk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKHgpID0+IHtcbiAgZm9yIChsZXQga2V5IGluIHgpIHtcbiAgICBpZiAoeC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7IHJldHVybiBmYWxzZTsgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSc7XG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4uL3V0aWwvaWRlbnRpY2FsJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9vYmplY3QvaXMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vYXJyYXkvaXMnO1xuaW1wb3J0IHVuaW9uIGZyb20gJy4uL2FycmF5L3VuaW9uJztcblxuY29uc3QgbWVyZ2UgPSBjdXJyeSgob2JqTCwgb2JqUikgPT4ge1xuICBsZXQgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqTCk7XG5cbiAgaWYgKGlkZW50aWNhbChvYmpMLCBvYmpSKSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvYmpMKTtcbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gb2JqUikge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9ialIsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBvbGRWYWx1ZSA9IG9ialJba2V5XTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IG9iakxba2V5XTtcblxuICAgIGlmIChpc09iamVjdChvbGRWYWx1ZSkgJiYgaXNPYmplY3QobmV3VmFsdWUpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG5ld1ZhbHVlKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB1bmlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IG9sZFZhbHVlOyAvLyBUT0RPOiB0aGlzIGlzIGEgcmVmZXJlbmNlLCBzaG91bGQgYmUgY2xvbmVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZTtcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vdXRpbC9jdXJyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChvYmosIG5hbWVzKSA9PiB7XG4gIGxldCByZXN1bHQgPSB7fTtcblxuICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgcmV0dXJuIG5hbWVzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gIH0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDE4LzAzLzIwMTcuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNvbmNhdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IgPSAnLCcpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcbiAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gIHJldHVybiBhcmdzLmpvaW4oc2VwYXJhdG9yKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmNhdDtcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHRvQXJyYXkgZnJvbSAnLi4vYXJyYXkvdG8nO1xyXG5pbXBvcnQgbm90IGZyb20gJy4uL3V0aWwvbm90JztcclxuaW1wb3J0IGlzIGZyb20gJy4uL3V0aWwvaXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0cikgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xyXG4gIGxldCBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xyXG5cbiAgYXJncy5zaGlmdCgpO1xyXG4gIHJldHVybiBzdHIucmVwbGFjZSgveyhcXGQrKX0vZywgKG1hdGNoLCBpZHgpID0+IHtcclxuICAgIHJldHVybiBub3QoaXMoJ1VuZGVmaW5lZCcsIGFyZ3NbaWR4XSkpID8gYXJnc1tpZHhdIDogbWF0Y2g7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vdXRpbC9pcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdTdHJpbmcnKTtcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIHgsIHlcbiAqIFJldHVybnMgYm9vbGVhblxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFuZCh4LCB5KSB7XG4gIHJldHVybiB4ICYmIHk7XG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjUvMDMvMjAxNy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgbGV0IGZ1bnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGluaXQgPSBmdW5zW2Z1bnMubGVuZ3RoIC0gMV07XG4gICAgbGV0IHJlc3VsdCA9IFtpbml0LmFwcGx5KGluaXQsIGFyZ3VtZW50cyldO1xuICAgIGxldCBpID0gZnVucy5sZW5ndGggLSAyO1xuXG4gICAgZm9yIChpOyBpID49IDA7IC0taSkge1xuICAgICAgY29uc3QgZnVuID0gZnVuc1tpXTtcblxuICAgICAgcmVzdWx0ID0gW2Z1bi5hcHBseShmdW4sIHJlc3VsdCldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0WzBdO1xuICB9O1xufTtcblxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjUvMDMvMjAxNy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkoZnVuKSB7XG4gIGxldCBhcmdzbGVuID0gZnVuLmxlbmd0aDtcblxuICBpZiAoYXJnc2xlbiA9PT0gMCkge1xuICAgIHJldHVybiBmdW47XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlY3Vyc2VyKFtdKTtcblxuICBmdW5jdGlvbiByZWN1cnNlKGFjYywgYXJncykge1xuICAgIGxldCBfYWNjID0gYWNjLmNvbmNhdChhcmdzKTtcblxuICAgIGlmIChfYWNjLmxlbmd0aCA8IGFyZ3NsZW4pIHtcbiAgICAgIHJldHVybiBjcmVhdGVSZWN1cnNlcihfYWNjKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bi5hcHBseSh0aGlzLCBfYWNjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlY3Vyc2VyKGFjYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgIHJldHVybiByZWN1cnNlKGFjYywgYXJncyk7XG4gICAgfTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogZW1wdHlcbiAqIFJldHVybnMgdGhlIGVtcHR5IGVxdWl2YWxlbnQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKi9cbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9vYmplY3QvaXMnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4uL3N0cmluZy9pcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVtcHR5KHgpIHtcbiAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKGlzU3RyaW5nKHgpKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmIChpc09iamVjdCh4KSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICByZXR1cm4gdm9pZCAwO1xufTtcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSc7XG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJztcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi9pZGVudGljYWwnO1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJztcbmltcG9ydCBub3QgZnJvbSAnLi9ub3QnO1xuaW1wb3J0IG9yIGZyb20gJy4vb3InO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL29iamVjdC9pcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi9hcnJheS9pcyc7XG5pbXBvcnQgaXNCb29sZWFuIGZyb20gJy4uL2Jvb2xlYW4vaXMnO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4uL251bWJlci9pcyc7XG5pbXBvcnQgaXNEYXRlIGZyb20gJy4uL2RhdGUvaXMnO1xuaW1wb3J0IGVxdWFsc0FycmF5IGZyb20gJy4uL2FycmF5L2VxdWFscyc7XG5pbXBvcnQgZXF1YWxzT2JqZWN0IGZyb20gJy4uL29iamVjdC9lcXVhbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHMoeCwgeSkge1xuICBpZiAoaWRlbnRpY2FsKHgsIHkpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZSh4KSAhPT0gdHlwZSh5KSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChvcihub3QoZXhpc3RzKHgpKSwgbm90KGV4aXN0cyh5KSkpKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHguY29uc3RydWN0b3IgIT09IHkuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNCb29sZWFuKHgpIHx8IGlzTnVtYmVyKHgpIHx8IGlzRGF0ZSh4KSkge1xuICAgIHJldHVybiBpZGVudGljYWwoeC52YWx1ZU9mKCksIHkudmFsdWVPZigpKTtcbiAgfVxuICBpZiAoaXNBcnJheSh4KSkge1xuICAgIHJldHVybiBlcXVhbHNBcnJheSh4LCB5KTtcbiAgfSBlbHNlIGlmIChpc09iamVjdCh4KSkge1xuICAgIHJldHVybiBlcXVhbHNPYmplY3QoeCwgeSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSk7XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKi9cbmltcG9ydCBfbnVsbCBmcm9tICcuL251bGwnO1xuaW1wb3J0IG5vdCBmcm9tICcuL25vdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4aXN0cyh4KSB7XG4gIHJldHVybiBub3QoX251bGwoeCkpO1xufTtcbiIsIi8qKlxuICogQGF1dGhvciBMZW4gRGllcmlja3hcbiAqIGlkZW50aWNhbFxuICogY2hlY2tzIGZvciBpZGVudGludGljYWwgaXRlbXNcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknO1xuaW1wb3J0IGlzTmFuIGZyb20gJy4uL251bWJlci9pc05hbic7XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KCh4LCB5KSA9PiB7XG4gIGlmICh4ID09PSAwICYmIHkgPT09IDApIHtcbiAgICByZXR1cm4gMSAvIHggPT09IDEgLyB5O1xuICB9XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGlzTmFuKHgpICYmIGlzTmFuKHkpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSk7XG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBzdXBwbGllZCB0byB0aGUgZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoeCkgPT4ge1xuICByZXR1cm4geDtcbn07XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBsZW4gZGllcmlja3hcclxuICovXHJcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5JztcclxuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChDdG9yLCB2YWwpID0+IHtcclxuICByZXR1cm4gdHlwZSh2YWwpID09PSBDdG9yO1xyXG59KTtcclxuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogZW1wdHlcbiAqIFJldHVybnMgdGhlIGVtcHR5IGVxdWl2YWxlbnQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKi9cbmltcG9ydCBlbXB0eSBmcm9tICcuL2VtcHR5JztcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnO1xuaW1wb3J0IGVxdWFscyBmcm9tICcuL2VxdWFscyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XG4gIHJldHVybiBleGlzdHMoeCkgJiYgZXF1YWxzKHgsIGVtcHR5KHgpKTtcbn07XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XHJcbiAgcmV0dXJuICF4O1xyXG59O1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XHJcbiAgcmV0dXJuIHggPT0gbnVsbDtcclxufTtcclxuIiwiLyoqXG4gKiBAYXV0aG9yIExlbiBEaWVyaWNreFxuICogb3JcbiAqIFJldHVybnMgdHJ1ZSBpZiBvbmUgb3IgdGhlIG90aGVyIGlzIHRydWVcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoeCwgeSkgPT4geCB8fCB5KTtcblxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDA2LzAyLzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XHJcbiAgcmV0dXJuICh4ICE9PSBmYWxzZSkgJiYgZXhpc3RzKHgpO1xyXG59O1xyXG4iLCIvKipcbiAqIEBhdXRob3IgTGVuIERpZXJpY2t4XG4gKi9cbmV4cG9ydCBkZWZhdWx0ICh4KSA9PiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkuc2xpY2UoOCwgLTEpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=