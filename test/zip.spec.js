/**
 * @author Len Dierickx
 */

import chai from 'chai'
import zip from '../src/util/zip'

describe('zip', function () {
  it('it combines 2 arrays', function () {
    const a = [1, 2, 3]
    const b = [100, 200, 300]

    chai.expect(zip(a, b)).to.deep.equal([[1, 100], [2, 200], [3, 300]])
  })

  it('returns a list as long as the shorter of the lists input', function () {
    const a = [1, 2, 3]
    const b = [100, 200, 300, 400]
    const c = [10, 20]

    chai.expect(zip(a, b)).to.deep.equal([[1, 100], [2, 200], [3, 300]])
    chai.expect(zip(a, c)).to.deep.equal([[1, 10], [2, 20]])
  })
})
