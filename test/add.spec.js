/**
 * @author Len Dierickx
 */

import chai from 'chai'
import add from '../src/number/add'

describe('add', function () {
  it('returns the sum two arguments', function () {
    chai.expect(add(-5, 5)).to.equal(0)
    chai.expect(add(5, 5)).to.equal(10)
  })
})
