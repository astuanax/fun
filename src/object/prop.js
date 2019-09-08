import curry from '../curry'
import path from './path'

/**
 * @function prop
 */
export default curry(function prop (p, obj) {
  return path([p], obj)
})
