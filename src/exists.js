import curry1 from './_private/curry1'
/**
 * @function exists
 * @desc Validates if a value is not null or undefined
 * @param {*} x - any valid Javascript value
 * @example
 *
 * exists(null) // false
 * exists([] // true
 *
 */
export default curry1(function exists (x) {
  return !(x == null)
})
