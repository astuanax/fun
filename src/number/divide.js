/**
 *
 *
 * @function divide
 * @description Returns the division of the 2 arguments
 * @since v1.0.2
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 **/
import curry from '../curry'

export default curry(function divide (a, b) {
  return +a / +b
})
