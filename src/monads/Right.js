/**
 * @class Right
 * @param val
 * @returns {Right}
 * @constructor
 */
let Right = function (val) {
  this.__value = val
  return this
}

/**
 * @memberOf Right
 * @property {String} type - Returns the string 'Right' for all Either objects
 * @type {String}
 * @example
 *
 * const m =  Either.of([[1,2],[2,3],[4,5]])
 * m.type === 'Right'
 */
Right.prototype.type = 'Right'

/**
 * @memberOf Right
 * @function Right#isRight
 * @returns {boolean}
 */
Right.prototype.isRight = function () {
  return true
}

/**
 * @memberOf Right
 * @function Right#isLeft
 * @returns {boolean}
 */
Right.prototype.isLeft = function () {
  return false
}

/**
 * @memberOf Right
 * @function Right#ap
 * @param a
 * @returns {Right}
 */
Right.prototype.ap = function (b) {
  return b.map(this.__value)
}

/**
 * @memberOf Right
 * @function Right#map
 * @param {Function} f
 * @returns {*}
 */
Right.prototype.map = function (f) {
  return new Right(f(this.__value))
}

/**
 * @memberOf Right
 * @function Right#chain
 * @param {Function} f
 * @returns {*}
 */
Right.prototype.chain = function (f) {
  return f(this.__value)
}

/**
 * @memberOf Right
 * @function Right#toString
 * @returns {string}
 */
Right.prototype.toString = function () {
  return 'Either.Right(' + this.__value + ')'
}

/**
 * @memberOf Right
 * @function Right#cata
 * @param {Placeholder} _
 * @param {Function} g
 * @returns {*}
 */
Right.prototype.cata = function (_, g) {
  return g(this.__value)
}

/**
 * @memberOf Right
 * @function Right#get
 * @returns {*}
 */
Right.prototype.get = function () {
  return this.__value
}

/**
 * @memberOf Right
 * @function Right#getOrElse
 * @param {Function} f
 * @returns {*}
 */

Right.prototype.getOrElse = function (f) {
  return this.__value
}

export default Right
