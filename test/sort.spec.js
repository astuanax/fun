import chai from 'chai'
import { sort } from '../lib/fun'

describe('sort', function () {
  it('sorts the elements of a list', function () {
    chai.expect(sort(function (a, b) { return a - b }, [3, 1, 8, 1, 2, 5])).to.deep.equal([1, 1, 2, 3, 5, 8])
  })

  it('does not affect the list passed supplied', function () {
    var list = [3, 1, 8, 1, 2, 5]
    chai.expect(sort(function (a, b) { return a - b }, list)).to.deep.equal([1, 1, 2, 3, 5, 8])
    chai.expect(list, [3, 1, 8, 1, 2, 5])
  })
})
