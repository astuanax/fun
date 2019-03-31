import chai from 'chai'
import { aperture } from '../lib/fun'

describe('aperture', function () {
  var sevenLs = [1, 2, 3, 4, 5, 6, 7]
  it('creates a list of n-tuples from a list', function () {
    chai.expect(aperture(1, sevenLs)).to.deep.equal( [[1], [2], [3], [4], [5], [6], [7]])
    chai.expect(aperture(2, sevenLs)).to.deep.equal([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]])
    chai.expect(aperture(3, sevenLs)).to.deep.equal([[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7]])
    chai.expect(aperture(4, [1, 2, 3, 4])).to.deep.equal([[1, 2, 3, 4]])
  })

  it('returns an empty list when `n` > `list.length`', function () {
    chai.expect(aperture(6, [1, 2, 3])).to.deep.equal([])
    chai.expect(aperture(1, [])).to.deep.equal([])
  })

  it('returns array of n-tuples', () => {
    const val2 = aperture(2, [1, 2, 3, 4, 5])
    const val3 = aperture(3, [1, 2, 3, 4, 5])
    chai.expect(val2).to.deep.equal([[1, 2], [2, 3], [3, 4], [4, 5]])
    chai.expect(val3).to.deep.equal([[1, 2, 3], [2, 3, 4], [3, 4, 5]])
  })

  it('returns empty array if n > arr.length', () => {
    chai.expect(aperture(7, [1, 2])).to.deep.equal([])
  })
})
