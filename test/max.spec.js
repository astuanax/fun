/**

 */

import chai from 'chai'
import { max } from '../lib/fun'

describe('max', function () {
  it('returns the larger of its two arguments', function () {
    chai.expect(max(-5, 5)).to.equal(5)
    chai.expect(max(5, -5)).to.equal(5)
  })

  it('works for any orderable type', function () {
    const d1 = new Date('2018-01-01')
    const d2 = new Date('2019-02-02')

    chai.expect(max(d1, d2)).to.equal(d2)
    chai.expect(max(d2, d1)).to.equal(d2)
    chai.expect(max('a', 'b')).to.equal('b')
    chai.expect(max('b', 'a')).to.equal('b')
  })
})
