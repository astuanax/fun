/**
 * @function
 */

export const concat = function _concat (separator = ',') { // use function(), arrow function doesn't bind arguments
  return Array.prototype.slice.call(arguments, 1).join(separator)
}

export default concat
