/**
 * Created by dierickx.len on 25/03/2017.
 */

import chai from 'chai'
import { compose } from '../lib/fun'

const add = (x) => x + 1
const m = (x, y) => x * y
const format = (x) => 'Result: ' + x
const upper = (x) => x.toString().toUpperCase()

describe('Utils', function () {
  beforeEach(function () {
  })
  afterEach(function () { })
  it('compose should return a number', function () {
    const test = compose(add)

    chai.expect(test(0)).to.equal(1)
  })
  it('compose should return 5', function () {
    const test = compose(add, m)

    chai.expect(test(2, 2)).to.equal(5)
  })
  it('compose should return a string', function () {
    const test = compose(format, add, m)

    chai.expect(test(2, 2)).to.equal('Result: 5')
  })
  it('compose should return a string', function () {
    const test = compose(upper, format, add, m)

    chai.expect(test(2, 2)).to.equal('RESULT: 5')
  })
})
