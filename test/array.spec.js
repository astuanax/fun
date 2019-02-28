/**
 * Created by dierickx.len on 2017-04-02
 */

import chai from 'chai'
import isArray from '../src/array/is'

describe('Array', function () {
  it('new Array() is an Array', function () {
    const test = isArray([])
    const test2 = isArray(null)
    const test3 = isArray(undefined)
    const test4 = isArray({ 0: '', 1: '' })

    chai.expect(test).to.be.true
    chai.expect(test2).to.be.false
    chai.expect(test3).to.be.false
    chai.expect(test4).to.be.false
  })
})
