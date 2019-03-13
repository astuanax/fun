/**

 */

import chai from 'chai'
import all from '../src/util/all'
import isString from '../src/string/is'
import isNumber from '../src/number/is'

describe('all', function () {
  it('always return the same value', function () {
    const a = [0, 1, 2, 3]
    const b = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 }
    const c = 'abcdefghijklmnopqrstuvwxyz'
    const d = [0, 1, 2, []]

    const cb0 = a => a > 4
    const cb1 = a => a > 2
    const cb2 = a => a >= 0
    const cb3 = c => isString(c)
    const cb4 = d => isNumber(d)

    chai.expect(all(cb0, a)).to.equal(false)
    chai.expect(all(cb1, a)).to.equal(false)
    chai.expect(all(cb2, a)).to.equal(true)

    chai.expect(all(cb0, b)).to.equal(false)
    chai.expect(all(cb1, b)).to.equal(false)
    chai.expect(all(cb2, b)).to.equal(true)

    chai.expect(all(cb3, c)).to.equal(true)
    chai.expect(all(cb4, a)).to.equal(true)
    chai.expect(all(cb4, d)).to.equal(false)
  })
})
