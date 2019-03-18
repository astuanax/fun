/**
 * Created by dierickx.len on 14/02/2017.
 */
import chai from 'chai'
import existy from '../src/exists'

describe('Utils', function () {
  beforeEach(function () { })
  afterEach(function () { })
  it('existy _null should fail', function () {
    const exists = null

    chai.expect(existy(exists)).to.be.false
  })

  it('existy _undefined should fail', function () {
    const exists = undefined

    chai.expect(existy(exists)).to.be.false
  })

  it('existy String should succeed', function () {
    const exists = new String()

    chai.expect(existy(exists)).to.be.true
  })

  it('existy Array should succeed', function () {
    const exists = new Array()

    chai.expect(existy(exists)).to.be.true
  })

  it('existy Object should succeed', function () {
    const exists = new Object()

    chai.expect(existy(exists)).to.be.true
  })
})
