/**

 */

import chai from 'chai'
import T from '../src/boolean/T'

describe('true', function () {
  it('always return the true value', function () {
    const a = { 'a': 0 }
    const b = 0
    const c = [0, 1, 2, 3]
    chai.expect(T(a)).to.equal(true)
    chai.expect(T(b)).to.equal(true)
    chai.expect(T(c)).to.equal(true)
  })
})
