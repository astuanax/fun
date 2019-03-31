import chai from 'chai'
import { first } from '../lib/fun'

describe('first', function () {
  it('returns first element of array', () => {
    chai.expect(first([1, 2, 4])).to.equal(1)
  })

  it('returns first element of string', () => {
    chai.expect(first('abcd')).to.equal('a')
  })

  it('returns undefined', () => {
    chai.expect(first(undefined)).to.equal(undefined)
    chai.expect(first([])).to.equal(undefined)
    chai.expect(first({})).to.equal(undefined)
    chai.expect(first(null)).to.equal(undefined)
  })
})
