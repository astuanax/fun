import curry from '../curry'

/**
 * @function omit
 * @desc Removes one ore more properties from an object by name of the key
 * @param {Object} obj - The object form which to remove the key value pair
 * @param {string[]} names - an array of keys to be removed from the object
 */
export default curry((obj, names) => {
  let result = {}

  Object.keys(obj).filter((key) => {
    return names.indexOf(key) === -1
  }).forEach((key) => {
    result[key] = obj[key]
  })
  return result
})
