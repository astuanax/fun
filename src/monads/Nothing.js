/**
 * @class Nothing
 * @constructor
 */
let Nothing = function () {
}

/**
 * @memberOf Nothing
 * @function Nothing#isJust
 * @returns {boolean}
 */
Nothing.prototype.isJust = function () {
  return false
}

/**
 * @memberOf Nothing
 * @function Nothing#isNothing
 * @returns {boolean}
 */
Nothing.prototype.isNothing = function () {
  return true
}

export default Nothing
