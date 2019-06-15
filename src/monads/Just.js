/**
 * @class Just
 * @param val
 * @returns {Just}
 * @constructor
 */
let Just = function (val) {
  this.__value = val
  return this
}

/**
 * @memberOf Just
 * @function Just#isJust
 * @returns {boolean}
 */
Just.prototype.isJust = function () {
  return true
}

/**
 * @memberOf Just
 * @function Just#isNothing
 * @returns {boolean}
 */
Just.prototype.isNothing = function () {
  return false
}

export default Just
