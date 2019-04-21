/**
 * @function Just
 * @param val
 * @returns {Just}
 * @constructor
 */
let Just = function (val) {
  this._value = val
  return this
}

/**
 * @memberOf Just
 * @function isJust
 * @returns {boolean}
 */
Just.prototype.isJust = function () {
  return true
}

/**
 * @memberOf Just
 * @function isNothing
 * @returns {boolean}
 */
Just.prototype.isNothing = function () {
  return false
}

export default Just
