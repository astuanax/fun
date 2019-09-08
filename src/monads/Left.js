/**
 * @class Left
 * @param val
 * @returns {Left}
 * @constructor
 */
let Left = function (val) {
  this.__value = val
  return this
}

/**
 * @memberOf Left
 * @property {String} type - Returns the string 'Left' for all Either objects
 * @type {String}
 * @example
 *
 * const m =  Either.of([[1,2],[2,3],[4,5]])
 * m.type === 'Left'
 */
Left.prototype.type = 'Left'

/**
 * @memberOf Left
 * @function Left#isLeft
 * @returns {boolean}
 */
Left.prototype.isLeft = function () {
  return true
}

/**
 * @memberOf Left
 * @function Left#isRight
 * @returns {boolean}
 */
Left.prototype.isRight = function () {
  return false
}

/**
 * @memberOf Left
 * @function Left#ap
 * @param {*} b
 * @returns {Left}
 */
Left.prototype.ap = function (b) {
  return this
}

/**
 * @memberOf Left
 * @function Left#map
 * @param {Function} f
 * @returns {Left}
 */
Left.prototype.map = function (f) {
  return this
}

/**
 * @memberOf Left
 * @function Left#chain
 * @param {Function} f
 * @returns {Left}
 */
Left.prototype.chain = function (f) {
  return this
}

/**
 * @memberOf Left
 * @function Left#toString
 * @returns {string}
 */
Left.prototype.toString = function () {
  return 'Either.Left(' + this.__value + ')'
}

/**
 * @memberOf Left
 * @function Left#cata
 * @param {Function} f
 * @param {Placeholder} _
 * @returns {*}
 */
Left.prototype.cata = function (f, _) {
  return f(this.__value)
}

/**
 * @memberOf Left
 * @function Left#get
 * @throws {TypeError}
 */
Left.prototype.get = function () {
  throw new TypeError("Can't extract the value of a Left(a).")
}

/**
 * @memberOf Left
 * @function Left#getOrElse
 * @param {*} a
 * @returns {*}
 */
Left.prototype.getOrElse = function (a) {
  return a
}

export default Left
