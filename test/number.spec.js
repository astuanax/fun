/**
 * Created by dierickx.len on 26/03/2017.
 */
import chai from 'chai'
import { isNumber } from '../lib/fun'
import { isNan } from '../lib/fun'

describe('number objects', function () {
  beforeEach(function () {
  })
  afterEach(function () {
  })

  it('is a number', function () {
    const nr = 10
    const str = 'a string'

    chai.expect(isNumber(nr)).to.be.true
    chai.expect(isNumber(str)).to.be.false
    chai.expect(isNumber([])).to.be.false
    chai.expect(isNumber({})).to.be.false
    chai.expect(isNumber(void 10)).to.be.false
  })

  it('is NaN', function () {
    const nr = Number.NaN

    chai.expect(isNan(nr)).to.be.true
    chai.expect(isNan(10)).to.be.false
    chai.expect(isNan(void 0)).to.be.false
  })
})
