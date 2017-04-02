/**
 * Created by dierickx.len on 20/01/2017.
 */
import curry from './util/curry'
import isValidDate from './isValid'
import {
  WEEKDAYS,
  MONTHS
} from '../constants'
import getWeek from './getWeek'

// utility functions for the date formatting
const ZEROS = '00000000'
const lastN = curry((n, str) => str.substring(str.length - n, str.length))
const firstN = curry((n, str) => str.substring(0, n))
const fill = curry((digits, n) => lastN(digits, ZEROS + n))

// tokens map to get parts of the date /time
const tokens = {
  YYYY: d => fill(4, d.getFullYear()),
  YY: d => lastN(2, fill(4, d.getFullYear())),
  MMMM: d => MONTHS[d.getMonth()],
  MMM: d => firstN(3, MONTHS[d.getMonth()]),
  MM: d => fill(2, d.getMonth() + 1),
  M: d => d.getMonth() + 1,
  w: d => getWeek(d),
  ww: d => fill(2, getWeek(d)),
  DD: d => fill(2, d.getDate()),
  D: d => d.getDate(),
  dddd: d => WEEKDAYS[d.getDay()],
  ddd: d => firstN(3, WEEKDAYS[d.getDay()]),
  dd: d => firstN(2, WEEKDAYS[d.getDay()]),
  d: d => d.getDay(),
  HH: d => fill(2, d.getHours()),
  H: d => d.getHours(),
  hh: d => fill(2, modCeiling(12, d.getHours())),
  h: d => modCeiling(12, d.getHours()),
  mm: d => fill(2, d.getMinutes()),
  m: d => d.getMinutes(),
  ss: d => fill(2, d.getSeconds()),
  s: d => d.getSeconds(),
  A: d => d.getHours() > 11 ? 'PM' : 'AM',
  a: d => d.getHours() > 11 ? 'pm' : 'am',
  SSS: d => fill(3, d.getMilliseconds()),
  SS: d => firstN(2, fill(3, d.getMilliseconds())),
  S: d => firstN(1, fill(3, d.getMilliseconds())),
  Q: d => Math.ceil((d.getMonth() + 1) / 3)
}

// date/time regex
// eslint-disable-next-line no-useless-escape
const DATE_TOKENS = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g

const modCeiling = (mod, val) => val % mod || mod

// map this function to get the actual time/date value for each token
const swapTokenWithValue = curry((date, token) => {
  return tokens[token] ? tokens[token](date) : token
})

export default curry((format, date) => {
  // check for valid date
  if (!isValidDate(date)) return 'Invalid Date' // return string
  return format.match(DATE_TOKENS).map(swapTokenWithValue(date)).join('') // return joined string
})
