/* eslint-disable no-array-constructor */
/**

 */

import chai from 'chai'
import { equals } from '../lib/fun'

describe('equals', function () {
  it('equals special number values', function () {
    const nan = Number.NaN
    chai.expect(equals(nan, nan)).to.be.true
  })

  it('equals if its indexes match', function () {
    // eslint-disable-next-line quotes
    const vals = [true, false, 1, 0, -1, "true", "false", "1", "0", "-1", "", null, undefined, Infinity, -Infinity, [], {}, [[]], [0], [1], NaN]

    const check = (x, idx, arr) => {
      const i = idx
      const j = arr.length - idx
      return chai.expect(equals(arr[i], arr[j])).to.equal(i === j)
    }

    vals.map(check)
  })

  it('null and undefined', function () {
    chai.expect(equals(null, null)).to.be.true
    chai.expect(equals(undefined, undefined)).to.be.true
    chai.expect(equals(undefined, null)).to.be.false
    chai.expect(equals(0, null)).to.be.false
    chai.expect(equals(0, undefined)).to.be.false
  })

  it('numbers', function () {
    chai.expect(equals(0, 0)).to.be.true
    chai.expect(equals(1, 1)).to.be.true
    chai.expect(equals(-1, -1)).to.be.true
    chai.expect(equals(Number(10), 10)).to.be.true
    chai.expect(equals(Number(10), Number(10))).to.be.true
    chai.expect(equals(0x010101, 0x010101)).to.be.true
    chai.expect(equals(0b11, 0b11)).to.be.true
    chai.expect(equals(0o10, 0o10)).to.be.true
  })
  it('String equals String', function () {
    const string1 = ''
    const string2 = ''
    const test = equals(string1, string2)

    chai.expect(equals('You can do anything, but not everything.', 'You can do anything, but not everything.')).to.be.true
    chai.expect(test).to.be.true
  })
  it('Array equals Array', function () {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2, 3]
    const arr3 = [2, 3, 1]
    const arr4 = [{}, [0]]
    const arr5 = [{}, [0]]
    const arr6 = [{}, null]
    const arr7 = [{}, null]
    const arr8 = [null, 1, 2, 3]
    const _arr8 = [0, 1, 2, 3]

    const arr9 = [1, undefined]
    const arr10 = [1, undefined]

    const test = equals(arr1, arr2)
    const test2 = equals(arr1, arr3)
    const test3 = equals(arr4, arr5)
    const test4 = equals(arr6, arr7)
    const test5 = equals(arr5, arr6)
    const test6 = equals(arr1, arr8)
    const test7 = equals(arr9, arr10)
    const test8 = equals(arr8, _arr8)
    const test9 = equals([], new Array())

    chai.expect(test).to.be.true
    chai.expect(test2).to.be.false
    chai.expect(test3).to.be.true
    chai.expect(test4).to.be.true
    chai.expect(test5).to.be.false
    chai.expect(test6).to.be.false
    chai.expect(test7).to.be.true
    chai.expect(test8).to.be.false
    chai.expect(test9).to.be.true
  })

  it('booleans', function () {
    chai.expect(equals(true, true)).to.be.true
    chai.expect(equals(new Boolean(true), new Boolean(true))).to.be.true
    chai.expect(equals(new Boolean(true), true)).to.be.true
    chai.expect(equals(true, false)).to.be.false
    chai.expect(equals(new Boolean(false), new Boolean(true))).to.be.false
    chai.expect(equals(new Boolean(false), true)).to.be.false
  })

  it('objects', function () {
    chai.expect(equals({ 'a': 0, 'b': 1 }, { 'a': 0, 'b': 1 })).to.be.true
    chai.expect(equals(new Object({ 'a': 0, 'b': 1 }), { 'a': 0, 'b': 1 })).to.be.true
    chai.expect(equals(
      new Object({ 'a': 0, 'b': { 'c': 2 } }),
      new Object({ 'a': 0, 'b': { 'c': 2 } })
    )).to.be.true
    chai.expect(equals(
      new Object({ 'a': 0, 'b': { 'c': null } }),
      new Object({ 'a': 0, 'b': { 'c': null } })
    )).to.be.true
    chai.expect(equals(
      new Object({ 'a': 0, 'b': { 'c': undefined } }),
      new Object({ 'a': 0, 'b': { 'c': undefined } })
    )).to.be.true
    chai.expect(equals({ 'a': 0, 'b': 3 }, { 'a': 0, 'b': 1 })).to.be.false
    chai.expect(equals(new Object({ 'a': 0, 'b': 1 }), { 'a': 0, 'b': 3 })).to.be.false
    chai.expect(equals(
      new Object({ 'a': 0, 'b': { 'b': 2 } }),
      new Object({ 'a': 0, 'b': { 'c': 2 } })
    )).to.be.false
    chai.expect(equals(
      new Object({ 'a': 0, 'b': { 'c': null } }),
      new Object({ 'a': 0, 'b': { 'c': false } })
    )).to.be.false
    chai.expect(equals(
      new Object({ 'a': 0, 'b': { 'c': undefined } }),
      new Object({ 'a': 0, 'b': { 'c': null } })
    )).to.be.false
    chai.expect(equals(
      new Object(),
      {}
    )).to.be.true
  })
})
