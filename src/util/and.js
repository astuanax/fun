/**
 * @author Len Dierickx
 * empty
 * Returns the empty equivalent of the first argument
 */
import curry from './curry'

export default curry((x, y) => {
  return x && y
})
