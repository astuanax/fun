/**
 * @author Len Dierickx
 * zip
 *
 */
import curry from './curry'
import zipWith from './zipWith'

export default curry(function zip (a, b) {
  return zipWith(function (x, y) { return [x, y] }, a, b)
})
