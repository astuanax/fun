import curry1 from '../_private/curry1'
import keys from './keys'

/**
 * @function values
 * @description REturns a list of values taken from an objects own properties
 * @param {Object} - obj The object from which to take the values
 * @return {Array}
 *
 **/
export default curry1(function values (obj) {
  const k = keys(obj)
  const l = k.length
  const r = []
  let i = 0
  while (i < l) {
    r[i] = obj[k[i]]
    i += 1
  }
  return r
})
