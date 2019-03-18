/**
 * Created by dierickx.len on 26/03/2017.
 */

import chai from 'chai'
import and from '../src/and'

describe('and', function () {
  beforeEach(function () {})
  afterEach(function () { })

  it('true and true return true', function () {
    const test = and(true, true)

    chai.expect(test).to.be.true
  })

  it('true and true and true return true', function () {
    const test = and(true)(true)

    chai.expect(test).to.be.true
  })

  it('true and false return false', function () {
    const test = and(true, false)

    chai.expect(test).to.be.false
  })

  it('false and false return false', function () {
    const test = and(false, false)

    chai.expect(test).to.be.false
  })
})
