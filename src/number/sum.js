/**
 * Returns the sum of the numbers in an array
 *
 * @function
 * @since v1.0.2
 * @sig [Number] -> Number
 * @param {Array} a
 * @return {Number}
 **/
import curry from '../util/curry'
import add from './add'

export default curry(function sum (a) {
  return a.reduce(add, 0)
})
