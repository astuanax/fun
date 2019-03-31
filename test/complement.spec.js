/**
 * Created by dierickx.len on 2019-02-25
 */

import chai from 'chai'
import { complement } from '../lib/fun'
import { Maybe } from '../lib/fun'

describe('complement', function () {
  it('creates boolean-returning function that reverses another', function () {
    const even = function (x) { return x % 2 === 0 }
    const f = complement(even)
    chai.expect(f(8)).to.be.false
    chai.expect(f(13)).to.be.true
  })

  it('accepts a function that take multiple parameters', function () {
    var between = function (a, b, c) { return a < b && b < c }
    var f = complement(between)
    chai.expect(f(4, 5, 11)).to.be.false
    chai.expect(f(12, 2, 6)).to.be.true
  })

  it('accepts fantasy-land functors', function () {
    chai.expect(complement(Maybe.of(true))).to.deep.equal(Maybe.of(false))
  })
})
