import chai from 'chai'
import { min } from '../lib/fun'

describe('min', function () {
  it('returns the smallest of its two arguments', function () {
    chai.expect(min(-5, 5)).to.equal(-5)
    chai.expect(min(5, -5)).to.equal(-5)
  })

  it('works for any orderable type', function () {
    const d1 = new Date('2018-01-01')
    const d2 = new Date('2019-02-02')

    chai.expect(min(d1, d2)).to.equal(d1)
    chai.expect(min(d2, d1)).to.equal(d1)
    chai.expect(min('a', 'b')).to.equal('a')
    chai.expect(min('b', 'a')).to.equal('a')
  })
})
