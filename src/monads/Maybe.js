import Just from './Just'
import Nothing from './Nothing'

/**
 * @function Maybe
 * @desc Maybe monad provides a way to safely wrap null values
 * @param val
 * @constructor
 */
let Maybe = function (val) {
  this.__value = val
}

/**
 * @memberOf Maybe
 * @function of
 * @desc Creates a Maybe monad from the provided argument
 * @param val
 * @returns {Maybe}
 */
Maybe.of = function (val) {
  if (val instanceof Maybe) return val
  if (this instanceof Maybe) {
    this.__value = val
    return this
  }
  return new Maybe(val)
}

/**
 * @memberOf Maybe
 * @function getOrElse
 * @desc Evaluates the Maybe monad and returns either the value from the Maybe or the default value
 * @param n Default value to return if the Maybe evaluates to undefined or null
 * @returns {*}
 */
Maybe.prototype.getOrElse = function (n) {
  return this.isNothing() ? n : this.__value
}

/**
 * @memberOf Maybe
 * @function map
 * @param f
 * @returns {Maybe}
 */
Maybe.prototype.map = function (f) {
  if (this.isNothing()) {
    return Maybe.of(null)
  }
  return Maybe.of(f(this.__value))
}

/**
 * @memberOf Maybe
 * @function flatMap
 * @param f
 * @returns {Maybe}
 */
Maybe.prototype.flatMap = function (f) {
  return this.map(f)
}

/**
 * @memberOf Maybe
 * @function ap
 * @param m
 * @returns {Maybe}
 */
Maybe.prototype.ap = function (m) {
  return Maybe.of(m).map(this.__value)
}

/**
 * @memberOf Maybe
 * @function isNothing
 * @returns {boolean}
 */
Maybe.prototype.isNothing = function () {
  return (this.__value == null)
}

/**
 * @memberOf Maybe
 * @function isJust
 * @returns {boolean}
 */
Maybe.prototype.isJust = function () {
  return !this.isNothing()
}

/**
 * @memberOf Maybe
 * @function Nothing
 * @returns {Nothing}
 * @constructor
 */
Maybe.prototype.Nothing = function () {
  return new Nothing()
}

/**
 * @memberOf Maybe
 * @function Just
 * @returns {Just}
 * @constructor
 */
Maybe.prototype.Just = function () {
  return new Just(this._value)
}

export default Maybe
