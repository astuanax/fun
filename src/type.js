import curry1 from './_private/curry1'
/**
 * @function type
 * @desc Returns the type of the passed value
 * @param {*} a - Any valid javascript value
 * @return {Boolean}
 * @see is
 * @example
 *
 * const isArray = (arr) => type(arr) === 'Array'
 * isArray([]) // true
 *
 */

export default curry1(function type (x) {
  return Object.prototype.toString.call(x).slice(8, -1)
})
