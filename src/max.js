/**
 * Returns the largest of the 2 arguments provided
 *
 * @function max
 * @since v1.0.2
 * @param {*} a
 * @param {*} b
 * @return {*}
 **/
import curry from './curry'

export default curry(function max (a, b) {
  return b > a ? b : a
})
