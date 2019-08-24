import chai from 'chai'
import { gcd } from '../lib/fun'

describe('gcd', function () {
  it('returns the gcd', function () {
    chai.expect(gcd(1, 1)).to.equal(1)
    chai.expect(gcd(1, 2)).to.equal(1)
    chai.expect(gcd(2, 2)).to.equal(2)
    chai.expect(gcd(2, 4)).to.equal(2)
    chai.expect(gcd(2, 6)).to.equal(2)
    chai.expect(gcd(3, 6)).to.equal(3)
  })
})
