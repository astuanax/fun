/**
 * Created by dierickx.len on 26/03/2017.
 */
import chai from 'chai'
import { omit } from '../lib/fun'

describe('omit keys from object', function () {
  beforeEach(function () {
  })
  afterEach(function () {
  })

  it('omits keys', function () {
    const obj = {
      a: 0,
      b: 1,
      c: 2
    }
    const names = ['a', 'b']
    const test = omit(obj, names)

    chai.expect(test).to.deep.equal({ c: 2 })
  })

  it('omits keys', function () {
    const obj = {
      a: { d: 3 },
      b: 1,
      c: { e: 4 }
    }
    const names = ['a', 'b']
    const test = omit(obj, names)

    chai.expect(test).to.deep.equal({ c: { e: 4 } })
  })
})
