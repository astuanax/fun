/**

 * zip
 *
 */
import curry from './curry'
import zipWith from './zipWith'

export default curry(function zip (a, b) {
  return zipWith(function _zipWith (x, y) { return [x, y] }, a, b)
})
