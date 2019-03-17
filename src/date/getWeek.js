/**
 * @function getWeek
 * @description Returns the week number based on a given date
 * @param d
 * @returns {number[]}
 */
import curry from '../util/curry'

export default curry(function getWeek (d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
  // Get first day of year
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))

  // Calculate full weeks to nearest Thursday
  let weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7)

  // Return array of year and week number
  return [d.getUTCFullYear(), weekNo]
})
