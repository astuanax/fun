/**

 */

import chai from 'chai'
import always from '../src/util/always'

describe('always', function () {
  it('always return the same value', function () {
    const a = { 'a': 0 }
    const b = 0
    const c = [0, 1, 2, 3]
    const x = always(a)
    const y = always(b)
    chai.expect(always(a)()).to.equal(a)
    chai.expect(always(b)()).to.equal(b)
    chai.expect(always(c)()).to.equal(c)
    chai.expect(x(c)).to.equal(a)
    chai.expect(y(a)).to.equal(b)
  })
})
