import Just from './Just'
import Nothing from './Nothing'

/**
 * @class Maybe
 * @desc Maybe monad provides a way to safely wrap null values
 * @param {*} val - Value to be wrapped
 * @constructor
 * @example
 *
 * const m = Maybe.of(props.customers).map(contract => customer[0]).getOrElse('No customer found')
 */
let Maybe = function (val) {
  this.__value = val
}

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
 * @property {String} type - Returns the string 'Maybe' for all Maybe objects
 * @type {String}
 * @example
 *
 * const m =  Maybe.of([[1,2],[2,3],[4,5]])
 * m.type === 'Maybe'
 */
Maybe.prototype.type = 'Maybe'

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
Maybe.prototype.getOrElse = function (n) {
  return this.isNothing() ? n : this.__value
}

/**
 * @memberOf Maybe
 * @function Maybe#map
 * @param {Function} f
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
 * @function Maybe#flatMap
 * @param {Function} f
 * @returns {Maybe}
 */
Maybe.prototype.flatMap = function (f) {
  return this.map(f)
}

/**
 * @memberOf Maybe
 * @function Mayeb#ap
 * @param {Maybe} m
 * @returns {Maybe}
 */
Maybe.prototype.ap = function (m) {
  return Maybe.of(m).map(this.__value)
}

/**
 * @memberOf Maybe
 * @function Maybe#isNothing
 * @returns {boolean}
 */
Maybe.prototype.isNothing = function () {
  return (this.__value == null)
}

/**
 * @memberOf Maybe
 * @function Maybe#isJust
 * @returns {boolean}
 */
Maybe.prototype.isJust = function () {
  return !this.isNothing()
}

/**
 * @private
 * @memberOf Maybe
 * @function Maybe#Nothing
 * @returns {Nothing}
 * @constructor
 */
Maybe.prototype.Nothing = function () {
  return new Nothing()
}

/**
 * @private
 * @memberOf Maybe
 * @function Maybe#Just
 * @returns {Just}
 * @constructor
 */
Maybe.prototype.Just = function () {
  return new Just(this._value)
}

export default Maybe
