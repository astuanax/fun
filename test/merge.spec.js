/**

 */

import chai from 'chai'
import { equals } from '../lib/fun'
import { and } from '../lib/fun'
import { merge } from '../lib/fun'

describe('merge', function () {
  beforeEach(function () {})
  afterEach(function () {})

  it('objects', function () {
    const o = new Object()

    chai.expect(merge(o, o)).to.eql(o)

    const l = { a: 1 }
    const r = { a: 1 }

    chai.expect(merge(l, r)).to.eql(l)
    chai.expect(merge(l, r)).to.eql(r)

    const l1 = {
      a: 1,
      b: {
        '0': 0,
        '1': 0
      }
    }
    const r1 = {
      a: 1,
      b: {
        '0': 0,
        '2': 0
      }
    }

    const l1r1 = {
      a: 1,
      b: {
        '0': 0,
        '1': 0,
        '2': 0
      }
    }

    chai.expect(merge(l1, r1)).to.eql(l1r1)
    chai.expect(merge(r1, l1)).to.eql(l1r1)
  })

  it('objects and arrays', function () {
    const l1 = {
      a: 1,
      b: {
        '0': 0,
        '1': ['a', 'b', 'c', 'd']
      }
    }
    const r1 = {
      a: 1,
      b: {
        '0': 0,
        '1': ['a', 'e', 'f', 'z'],
        '2': 0
      }
    }

    const l1r1 = {
      a: 1,
      b: {
        '0': 0,
        '1': ['a', 'b', 'c', 'd', 'e', 'f', 'z'],
        '2': 0
      }
    }

    chai.expect(merge(r1, l1)).to.eql(l1r1)
  })
})
