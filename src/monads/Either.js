import Right from './Right'
import Left from './Left'

/**
 * @class Either
 * @desc Either monad
 * @param {*} val - Value to be validated
 * @constructor
 * @example
 *
 * const m = Either.of(props.customers).map(contract => customer[0]).getOrElse('No customer found')
 */
let Either = function (val) {
  return this.Right(val)
}

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

Either.of = function (val) {
  if (val instanceof Either) return val
  if (this instanceof Either) {
    return this.Right(val)
  }
  return new Either(val)
}

/**
 * @memberOf Either
 * @property {String} type - Returns the string 'Either' for all Either objects
 * @type {String}
 * @example
 *
 * const m =  Either.of([[1,2],[2,3],[4,5]])
 * m.type === 'Either'
 */
Either.prototype.type = 'Either'

/**
 * @memberOf Either
 * @property Either#isLeft
 * @returns {boolean}
 */
Either.prototype.isLeft = false

/**
 * @memberOf Either
 * @property Either#isRight
 * @returns {boolean}
 */
Either.prototype.isRight = false

/**
 * @private
 * @memberOf Either
 * @function Either#Left
 * @returns {Left}
 */
Either.prototype.Left = function (val) {
  return new Left(val)
}

/**
 * @private
 * @memberOf Either
 * @function Either.Left
 * @returns {Left}
 */
Either.Left = function (val) {
  return new Left(val)
}

/**
 * @private
 * @memberOf Either
 * @function Either#Right
 * @returns {Right}
 */
Either.prototype.Right = function (val) {
  return new Right(val)
}

/**
 * @private
 * @memberOf Either
 * @function Either.Right
 * @returns {Right}
 */
Either.Right = function (val) {
  return new Right(val)
}

export default Either
