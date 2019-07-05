import chai from 'chai'
import { lt } from '../lib/fun'

describe('lt', function () {
  it('numbers', function () {
    chai.expect(lt(0, -1)).to.be.false
    chai.expect(lt(-1, 0)).to.be.true
    chai.expect(lt(Number.NEGATIVE_INFINITY, 0)).to.be.true
    chai.expect(lt(0, Number.NEGATIVE_INFINITY)).to.be.false
  })

  it('strings', function () {
    chai.expect(lt('a', 'z')).to.be.true
    chai.expect(lt('z', 'a')).to.be.false
  })

  it('dates', function () {
    var a = new Date('2000-01-01')
    var b = new Date()
    chai.expect(lt(a, b)).to.be.true
    chai.expect(lt(b, a)).to.be.false
  })

  it('arrays', function () {
    var a = []
    var b = [0, 1]
    chai.expect(lt(a, b)).to.be.true
    chai.expect(lt(b, a)).to.be.false
  })

  it('objects', function () {
    var a = {}
    var b = { 'a': 1 }
    chai.expect(lt(a, b)).to.be.false
    chai.expect(lt(b, a)).to.be.false

    a = { 'b': 2 }
    chai.expect(lt(a, b)).to.be.false
    chai.expect(lt(b, a)).to.be.false

  })

  it('null or undefined', function () {
    var a = null
    var b = 0
    chai.expect(lt(a, b)).to.be.false
    chai.expect(lt(b, a)).to.be.false

    a = 0
    b = null
    chai.expect(lt(a, b)).to.be.false
    chai.expect(lt(b, a)).to.be.false

  })

  it('not equal', function () {
    var a = new Date()
    var b = new Date()
    chai.expect(lt(a, b)).to.be.false
    chai.expect(lt(b, a)).to.be.false

    a = 0
    b = 0
    chai.expect(lt(a, b)).to.be.false
    chai.expect(lt(b, a)).to.be.false

    a = ''
    b = ''
    chai.expect(lt(a, b)).to.be.false
    chai.expect(lt(b, a)).to.be.false
  })

})
