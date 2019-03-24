/**
 * Created by dierickx.len on 14/02/2017.
 */
import chai from 'chai'
import { exists } from '../lib/fun'

describe('Utils', function () {
  beforeEach(function () { })
  afterEach(function () { })
  it('existy _null should fail', function () {
    const _exists = null

    chai.expect(exists(_exists)).to.be.false
  })

  it('existy _undefined should fail', function () {
    const _exists = undefined

    chai.expect(exists(_exists)).to.be.false
  })

  it('existy String should succeed', function () {
    const _exists = new String()

    chai.expect(exists(_exists)).to.be.true
  })

  it('existy Array should succeed', function () {
    const _exists = new Array()

    chai.expect(exists(_exists)).to.be.true
  })

  it('existy Object should succeed', function () {
    const _exists = new Object()

    chai.expect(exists(_exists)).to.be.true
  })
})
