/**
 * Returns the sum of the numbers in an array
 *
 * @function
 * @since v1.0.2
 * @sig [Number] -> Number
 * @param {Array} a
 * @return {Number}
 **/
import curry from '../curry'
import add from './add'
import fold from '../fold'

export default curry(function sum (a) {
  return fold(add, 0, a)
})
