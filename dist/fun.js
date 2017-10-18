'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('./is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (x) {
  return (0, _is2.default)(x) ? [] : void 0;
}; /**
    * Created by dierickx.len on 01/04/2017.
    */
/**
 * Created by len dierickx 2017-04-02
 */
"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('../util/is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _is2.default)('Array'); /**
                                               * Created by dierickx.len on 01/04/2017.
                                               */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Created by dierickx.len on 18/03/2017.
 */

exports.default = function (x) {
  return x.length === 1 ? [x[0]] : Array.apply(null, x);
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('../util/is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _is2.default)('Boolean'); /**
                                                 * Created by dierickx.len on 01/04/2017.
                                                 */
/**
 * Created by dierickx.len on 01/04/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by dierickx.len on 18/03/2017.
 */

var MONTHS = exports.MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var WEEKDAYS = exports.WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// eslint-disable-next-line no-useless-escape
var DATE_TOKENS = exports.DATE_TOKENS = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var DATE_UNITS = exports.DATE_UNITS = {
  milliseconds: 1,
  seconds: 1000,
  minutes: 60 * 1000,
  hours: 60 * 60 * 1000,
  days: 24 * 60 * 60 * 1000,
  weeks: 7 * 24 * 60 * 60 * 1000
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('../util/curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curry2.default)(function (start, end) {
  return new Date(start).getTime() - new Date(end).getTime();
}); /**
     * Created by dierickx.len on 26/03/2017.
     */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./util/curry');

var _curry2 = _interopRequireDefault(_curry);

var _isValid = require('./isValid');

var _isValid2 = _interopRequireDefault(_isValid);

var _constants = require('../constants');

var _getWeek = require('./getWeek');

var _getWeek2 = _interopRequireDefault(_getWeek);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// utility functions for the date formatting
/**
 * Created by dierickx.len on 20/01/2017.
 */
var ZEROS = '00000000';
var lastN = (0, _curry2.default)(function (n, str) {
  return str.substring(str.length - n, str.length);
});
var firstN = (0, _curry2.default)(function (n, str) {
  return str.substring(0, n);
});
var fill = (0, _curry2.default)(function (digits, n) {
  return lastN(digits, ZEROS + n);
});

// tokens map to get parts of the date /time
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
    return (0, _getWeek2.default)(d);
  },
  ww: function ww(d) {
    return fill(2, (0, _getWeek2.default)(d));
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

  // date/time regex
  // eslint-disable-next-line no-useless-escape
};var DATE_TOKENS = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var modCeiling = function modCeiling(mod, val) {
  return val % mod || mod;
};

// map this function to get the actual time/date value for each token
var swapTokenWithValue = (0, _curry2.default)(function (date, token) {
  return tokens[token] ? tokens[token](date) : token;
});

exports.default = (0, _curry2.default)(function (format, date) {
  // check for valid date
  if (!(0, _isValid2.default)(date)) return 'Invalid Date'; // return string
  return format.match(DATE_TOKENS).map(swapTokenWithValue(date)).join(''); // return joined string
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('../util/is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _is2.default)('Date'); /**
                                              * Created by dierickx.len on 01/04/2017.
                                              */
/**
 * Created by dierickx.len on 01/04/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _diffDate = require('./diffDate');

var _diffDate2 = _interopRequireDefault(_diffDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (d) {
  return (0, _diffDate2.default)(new Date())(d) < 0;
}; /**
    * Created by dierickx.len on 09/03/2017.
    */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('./is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (x) {
  return (0, _is2.default)(x) && isFinite(x.valueOf());
}; /**
    * Created by dierickx.len on 18/03/2017.
    */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('../util/is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _is2.default)('Number'); /**
                                                * @author Len Dierickx
                                                */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('./is');

var _is2 = _interopRequireDefault(_is);

var _and = require('../util/and');

var _and2 = _interopRequireDefault(_and);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * isNaN
 * Checks if number is NAN
 * @author Len Dierickx
 */
exports.default = function (x) {
  return (0, _and2.default)((0, _is2.default)(x), isNaN(x));
};
"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('../util/is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _is2.default)('Object'); /**
                                                * @author Len Dierickx
                                                */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by dierickx.len on 18/03/2017.
 */

var concat = exports.concat = function concat() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ',';
  // use function(), arrow function doesn't bind arguments
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
};

exports.default = concat;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (str) {
  // use function(), arrow function doesn't bind arguments
  var args = (0, _to2.default)(arguments);
  args.shift();
  return str.replace(/{(\d+)}/g, function (match, idx) {
    return (0, _not2.default)((0, _is2.default)('Undefined', args[idx])) ? args[idx] : match;
  });
};

var _to = require('../array/to');

var _to2 = _interopRequireDefault(_to);

var _not = require('../util/not');

var _not2 = _interopRequireDefault(_not);

var _is = require('../util/is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('../util/is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _is2.default)('String'); /**
                                                * @author Len Dierickx
                                                */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Created by dierickx.len on 26/03/2017.
 */
exports.default = function (d) {
  return d / 86400000;
}; // 24*60*60*1000 = 86400000
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Created by dierickx.len on 26/03/2017.
 */
exports.default = function (d) {
  return d / 3600000;
}; // 60*60*1000 = 3600000
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Created by dierickx.len on 26/03/2017.
 */
exports.default = function (d) {
  return d / 60000;
}; // 60*1000 = 60000
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Created by dierickx.len on 26/03/2017.
 */
exports.default = function (d) {
  return d / 1000;
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curry2.default)(function (x, y) {
  return x && y;
}); /**
     * @author Len Dierickx
     * empty
     * Returns the empty equivalent of the first argument
     */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by dierickx.len on 25/03/2017.
 */
var compose = exports.compose = function compose() {
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
exports.default = compose;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by dierickx.len on 25/03/2017.
 */
var curry = exports.curry = function curry(fun) {
  var argslen = fun.length;
  return createRecurser([]);

  function createRecurser(acc) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      return recurse(acc, args);
    };
  }

  function recurse(acc, args) {
    var _acc = acc.concat(args);
    if (_acc.length < argslen) {
      return createRecurser(_acc);
    } else {
      return fun.apply(this, _acc);
    }
  }
};
exports.default = curry;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('../array/is');

var _is2 = _interopRequireDefault(_is);

var _is3 = require('../object/is');

var _is4 = _interopRequireDefault(_is3);

var _is5 = require('../string/is');

var _is6 = _interopRequireDefault(_is5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (x) {
  if ((0, _is2.default)(x)) {
    return [];
  }
  if ((0, _is6.default)(x)) {
    return '';
  }
  if ((0, _is4.default)(x)) {
    return {};
  }
  return void 0;
}; /**
    * @author Len Dierickx
    * empty
    * Returns the empty equivalent of the first argument
    */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _exists = require('./exists');

var _exists2 = _interopRequireDefault(_exists);

var _identical = require('./identical');

var _identical2 = _interopRequireDefault(_identical);

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

var _not = require('./not');

var _not2 = _interopRequireDefault(_not);

var _is = require('../object/is');

var _is2 = _interopRequireDefault(_is);

var _is3 = require('../array/is');

var _is4 = _interopRequireDefault(_is3);

var _is5 = require('../boolean/is');

var _is6 = _interopRequireDefault(_is5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Len Dierickx
 * equals
 * checks for equality
 */
var equals = (0, _curry2.default)(function (x, y) {
  if ((0, _identical2.default)(x, y)) {
    return true;
  }
  if ((0, _not2.default)((0, _exists2.default)(x)) || (0, _not2.default)((0, _exists2.default)(y))) {
    return false;
  }
  if ((0, _type2.default)(x) !== (0, _type2.default)(y)) {
    return false;
  }
  if (x.constructor !== y.constructor) {
    return false;
  }
  if ((0, _is6.default)(x)) {
    return (0, _identical2.default)(x.valueOf(), y.valueOf());
  }

  if ((0, _is4.default)(x)) {
    var len = x.length;
    if (len !== y.length) {
      return false;
    }
    for (var i = 0; i < len; i++) {
      if (equals(x[i], y[i])) {
        return true;
      }
    }

    var len1 = x.length;
    var len2 = y.length;
    if (len1 === 0 && len2 === 0) {
      return true;
    }
    if (len1 === len2) {
      for (var key = 0; key < len1; key++) {
        // not sorted
        if ((0, _not2.default)((0, _identical2.default)(x[key], y[key]))) {
          return false;
        }
        return true;
      }
    }
  } else if ((0, _is2.default)(x)) {
    if (Object.keys(x).length === 0 && Object.keys(y).length === 0) {
      return true;
    }
    for (var keyX in x) {
      if (equals(x[keyX], y[keyX])) {
        return true;
      }
    }
    for (var keyY in y) {
      if ((0, _not2.default)((0, _exists2.default)(x[keyY])) && (0, _exists2.default)(y[keyY])) {
        return false;
      }
    }
  }

  return false;
});

exports.default = equals;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _null2 = require('./null');

var _null3 = _interopRequireDefault(_null2);

var _not = require('./not');

var _not2 = _interopRequireDefault(_not);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Len Dierickx
 */
exports.default = function (x) {
  return (0, _not2.default)((0, _null3.default)(x));
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _isNan = require('../number/isNan');

var _isNan2 = _interopRequireDefault(_isNan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Len Dierickx
 * identical
 * checks for identintical items
 */
exports.default = (0, _curry2.default)(function (x, y) {
  if (x === 0 && y === 0) {
    return 1 / x === 1 / y;
  }
  if (x === y) {
    return true;
  }
  if ((0, _isNan2.default)(x) && (0, _isNan2.default)(y)) {
    return true;
  }
  return false;
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @author Len Dierickx
 * Returns the value supplied to the function
 */

exports.default = function (x) {
  return x;
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by len dierickx
 */
exports.default = (0, _curry2.default)(function (Ctor, val) {
  return (0, _type2.default)(val) === Ctor;
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _empty = require('./empty');

var _empty2 = _interopRequireDefault(_empty);

var _exists = require('./exists');

var _exists2 = _interopRequireDefault(_exists);

var _equals = require('./equals');

var _equals2 = _interopRequireDefault(_equals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (x) {
  return (0, _exists2.default)(x) && (0, _equals2.default)(x, (0, _empty2.default)(x));
}; /**
    * @author Len Dierickx
    * empty
    * Returns the empty equivalent of the first argument
    */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Created by dierickx.len on 26/03/2017.
 */
exports.default = function (x) {
  return !x;
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Created by dierickx.len on 01/04/2017.
 */
exports.default = function (x) {
  return x == null;
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exists = require('./exists');

var _exists2 = _interopRequireDefault(_exists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (x) {
  return x !== false && (0, _exists2.default)(x);
}; /**
    * Created by dierickx.len on 06/02/2017.
    */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @author Len Dierickx
 */
exports.default = function (x) {
  return Object.prototype.toString.call(x).slice(8, -1);
};
