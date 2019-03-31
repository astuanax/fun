/**
 * @function binary
 * @param cb
 * @returns {function(*=, *=): *}
 */
import curry1 from './_private/curry1'
import curry from './curry'

export default curry1(function binary (cb) {
  return curry(function (a, b) {
    return cb(a, b)
  })
})
