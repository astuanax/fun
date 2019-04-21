/**
 * @function Nothing
 * @constructor
 */
let Nothing = function () {
}

/**
 * @memberOf Nothing
 * @function isJust
 * @returns {boolean}
 */
Nothing.prototype.isJust = function () {
  return false
}

/**
 * @memberOf Nothing
 * @function isNothing
 * @returns {boolean}
 */
Nothing.prototype.isNothing = function () {
  return true
}

export default Nothing
