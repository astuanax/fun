/**
 * @author Len Dierickx
 */

import chai from 'chai'
import sum from '../src/number/sum'

describe('sum', function () {
  it('returns the sum of the numbers in an array', function () {
    chai.expect(sum([-5, 5])).to.equal(0)
    chai.expect(sum([5, 5])).to.equal(10)
  })

  it('returns the sum two arguments, empty array', function () {
    chai.expect(sum([])).to.equal(0)
  })
})
