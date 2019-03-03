/**

 * equals
 * checks for equality
 */
import curry from '../util/curry'
import exists from '../util/exists'
import not from '../util/not'
import equals from '../util/equals'

export default curry((x, y) => {
  for (let keyX in x) {
    // noinspection JSUnfilteredForInLoop
    if (not(equals(x[keyX], y[keyX]))) return false
  }

  for (let keyY in y) {
    if (not(exists(x[keyY])) && exists(y[keyY])) return false
  }

  return true
})
