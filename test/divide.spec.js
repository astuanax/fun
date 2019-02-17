/**
 * @author Len Dierickx
 */

import chai from 'chai'
import divide from '../src/number/divide'

describe('divides numbers', () => {
  it('positive', () => {
    chai.expect(divide(4)(2)).to.equal(2)
  })

  it('negative', () => {
    chai.expect(divide(-5)(-1)).to.equal(5)
  })

  it('by zero', () => {
    chai.expect(divide(1)(0)).to.equal(Infinity)
    chai.expect(divide(-1)(0)).to.equal(-Infinity)
  })
})

describe('divides strings', () => {
  it('positive number-like', () => {
    chai.expect(divide('4')('2')).to.equal(2)
  })

  it('negative number-like', () => {
    chai.expect(divide('-5')('-1')).to.equal(5)
  })

  it('not-a-number-like', () => {
    chai.expect(divide('qwe')('rty')).to.be.NaN
  })
})

describe('divides booleans', () => {
  it('true values', () => {
    chai.expect(divide(true)(true)).to.equal(1)
  })

  it('false values', () => {
    chai.expect(divide(false)(false)).to.be.NaN
  })
})

describe('divides undefined and null', () => {
  it('undefined values', () => {
    chai.expect(divide(undefined)(undefined)).to.be.NaN
  })

  it('null values', () => {
    chai.expect(divide(null)(null)).to.be.NaN
  })
})

describe('divides objects', () => {
  it('empty', () => {
    chai.expect(divide({})({})).to.be.NaN
  })

  it('non-empty', () => {
    chai.expect(divide({ a: 1 })({ b: 2 })).to.be.NaN
  })
})

it('works for docs', () => {
  chai.expect(divide(1, 1)).to.equal(1)
  chai.expect(divide(1)(1)).to.equal(1)
  chai.expect(divide('1')(1)).to.equal(1)
  chai.expect(divide('1')('1')).to.equal(1)
  chai.expect(divide(-1)(0)).to.equal(-Infinity)
  chai.expect(divide(1)('a')).to.be.NaN
  chai.expect(divide(null)(null)).to.be.NaN
  chai.expect(divide(false)(false)).to.be.NaN
  chai.expect(divide(true)(true)).to.equal(1)
  chai.expect(divide([])([])).to.be.NaN
  chai.expect(divide([2])([2])).to.equal(1)
})
