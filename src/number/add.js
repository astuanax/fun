/**
 * Returns the sum of the 2 arguments
 *
 * @function
 * @since v1.0.2
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 **/
import curry from '../util/curry'

export default curry(function add (a, b) {
  return +a + +b
})
