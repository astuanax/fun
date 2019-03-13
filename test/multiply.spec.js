/**

 */

import chai from 'chai'
import multiply from '../src/number/multiply'

describe('multiplies numbers', () => {
  it('positive', () => {
    chai.expect(multiply(4)(2)).to.equal(8)
  })

  it('negative', () => {
    chai.expect(multiply(-5)(-1)).to.equal(5)
  })
})

describe('multiplies strings', () => {
  it('positive number-like', () => {
    chai.expect(multiply('4')('2')).to.equal(8)
  })

  it('negative number-like', () => {
    chai.expect(multiply('-5')('-1')).to.equal(5)
  })

  it('not-a-number-like', () => {
    chai.expect(multiply('qwe')('rty')).to.be.NaN
  })
})

describe('multiplies booleans', () => {
  it('true values', () => {
    chai.expect(multiply(true)(true)).to.equal(1)
  })

  it('false values', () => {
    chai.expect(multiply(false)(false)).to.equal(0)
  })
})

describe('multiplies undefined and null', () => {
  it('undefined values', () => {
    chai.expect(multiply(undefined)(undefined)).to.be.NaN
  })

  it('null values', () => {
    chai.expect(multiply(null)(null)).to.equal(0)
  })
})

describe('multiplies objects', () => {
  it('empty', () => {
    chai.expect(multiply({})({})).to.be.NaN
  })

  it('non-empty', () => {
    chai.expect(multiply({ a: 1 })({ b: 2 })).to.be.NaN
  })
})
