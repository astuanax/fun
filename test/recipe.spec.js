/**
 * Created by dierickx.len on 26/03/2017.
 */
import chai from 'chai'
import sum from '../src/number/sum'
import add from '../src/number/add'
import compose from '../src/util/compose'
import curry from '../src/util/curry'
import map from '../src/util/map'
import fold from '../src/util/fold'
import keys from '../src/object/keys'

import diffDate from '../src/date/diffDate'
import isDate from '../src/date/is'
import toSeconds from '../src/date/toSeconds'

describe('recipe', function () {
  it('returns the sum of the length of all the arrays in an array', function () {
    const lengthDeep = compose(sum, map(x => x.length))
    const lengthDeep2 = fold((total, xs) => total + xs.length, 0)

    const mapReduce = curry((m, r) =>
      (x, y) => r(x, m(y)))
    const deepLength = xs => fold(mapReduce(x => x.length, add), 0, xs)

    chai.expect(lengthDeep([[1], [2, 3], [4, 5, 6]])).to.equal(6)
    chai.expect(lengthDeep2([[1], [2, 3], [4, 5, 6]])).to.equal(6)
    chai.expect(deepLength([[1], [2, 3], [4, 5, 6]])).to.equal(6)
  })

  it('adds a number to al values of an object', function () {
    const mapReduce = curry((m, r) =>
      (x, y) => r(x, m(y)))

    // omap :: (a -> b) -> {k : a} -> {k : b}
    const omap = curry((f, o) => fold(mapReduce(k => ({ [k]: f(o[k]) }), Object.assign), {}, keys(o)))
    const omapAdd10 = omap(add(10))
    chai.expect(omapAdd10({ a: 1, b: 2, c: 3 })).to.deep.equal({ 'a': 11, 'b': 12, 'c': 13 })
  })

  it('returns the difference between dates', function () {
    const diffInSeconds = compose(toSeconds, diffDate)
    const date1 = new Date('1999-12-31')
    const date2 = new Date('2000-01-01')

    chai.expect(diffInSeconds(date1, date2)).to.equal(-86400)
  })
})
