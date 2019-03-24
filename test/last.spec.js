import chai from 'chai'
import { last } from '../lib/fun'

describe('last', function () {
  it('returns last element of array', () => {
    chai.expect(last([1, 2, 4])).to.equal(4)
  })

  it('returns last element of string', () => {
    chai.expect(last('abcd')).to.equal('d')
  })

  it('returns undefined', () => {
    chai.expect(last(undefined)).to.equal(undefined)
    chai.expect(last([])).to.equal(undefined)
    chai.expect(last({})).to.equal(undefined)
    chai.expect(last(null)).to.equal(undefined)
  })
})
