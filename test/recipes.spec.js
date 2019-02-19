/**
 * @author Len Dierickx
 */

import chai from 'chai'
import all from '../src/util/all'
import equals from '../src/util/equals'
import curry from '../src/util/curry'
import identical from '../src/util/identical'

describe('Recipes', function () {
  it('Returns true if all are identical', function () {
    const allIdenticalTo = curry((val, list) => all(identical(val), list))

    chai.expect(allIdenticalTo(1, [1, 2, 3, 4])).to.be.false
    chai.expect(allIdenticalTo(1, [1, 1, 1, 1])).to.be.true
    chai.expect(allIdenticalTo(1, [])).to.be.true
    chai.expect(allIdenticalTo({}, [{}, {}])).to.be.false
  })

  it('Returns true if all items in the list are equivalent', function () {
    const allEqualTo = curry((val, list) => all(equals(val), list))

    chai.expect(allEqualTo(1, [1, 2, 3, 4])).to.be.false
    chai.expect(allEqualTo(1, [1, 1, 1, 1])).to.be.true
    chai.expect(allEqualTo(1, [])).to.be.true
    chai.expect(allEqualTo({}, [{}, {}])).to.be.true
  })

})
