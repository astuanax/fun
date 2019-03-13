/**

 */

import chai from 'chai'
import F from '../src/boolean/F'

describe('false', function () {
  it('always return the false value', function () {
    const a = { 'a': 0 }
    const b = 0
    const c = [0, 1, 2, 3]
    chai.expect(F(a)).to.equal(false)
    chai.expect(F(b)).to.equal(false)
    chai.expect(F(c)).to.equal(false)
  })
})
