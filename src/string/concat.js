/**
 * @private
 * @function stringConcat
 */

export default function concat (a, b) { // use function(), arrow function doesn't bind arguments
  return String(a) + String(b)
}
