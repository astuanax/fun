/**
 * gcd
 *
 * @function gcd
 * @summary Recursively define the greatest common devisor
 */
import curry from '../curry'

export default curry(function gcd (p, q) {
  if (q === 0) return p
  const r = p % q
  return gcd(q, r)
})
