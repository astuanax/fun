import chai from 'chai'
import { lte } from '../lib/fun'

describe('lte', function () {
  it('numbers', function () {
    chai.expect(lte(0, -1)).to.be.false
    chai.expect(lte(-1, 0)).to.be.true
    chai.expect(lte(Number.NEGATIVE_INFINITY, 0)).to.be.true
    chai.expect(lte(0, Number.NEGATIVE_INFINITY)).to.be.false
  })

  it('strings', function () {
    chai.expect(lte('a', 'z')).to.be.true
    chai.expect(lte('z', 'a')).to.be.false
  })

  it('dates', function () {
    var a = new Date('2000-01-01')
    var b = new Date()
    chai.expect(lte(a, b)).to.be.true
    chai.expect(lte(b, a)).to.be.false
  })

  it('arrays', function () {
    var a = []
    var b = [0, 1]
    chai.expect(lte(a, b)).to.be.true
    chai.expect(lte(b, a)).to.be.false
  })

  it('objects', function () {
    var a = {}
    var b = { 'a': 1 }
    chai.expect(lte(a, b)).to.be.true
    chai.expect(lte(b, a)).to.be.true
  })

  it('null or undefined', function () {
    var a = null
    var b = 0
    chai.expect(lte(a, b)).to.be.true
    chai.expect(lte(b, a)).to.be.true
  })

  it('not equal', function () {
    var a = new Date()
    var b = new Date()
    chai.expect(lte(a, b)).to.be.true
    chai.expect(lte(b, a)).to.be.true

    a = 0
    b = 0
    chai.expect(lte(a, b)).to.be.true
    chai.expect(lte(b, a)).to.be.true

    a = ''
    b = ''
    chai.expect(lte(a, b)).to.be.true
    chai.expect(lte(b, a)).to.be.true
  })
})
