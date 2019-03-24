/**

 */

import chai from 'chai'
import { zipWith } from '../lib/fun'

describe('zipWith', function () {
  it('it comkbines 2 arrays', function () {
    const a = [1, 2, 3]
    const b = [100, 200, 300]
    const c = [10, 20, 30, 40, 50, 60]
    const add = function (a, b) { return a + b }
    const x = function (a, b) { return a * b }
    const s = function (a, b) { return a + ' cow ' + b }

    chai.expect(zipWith(add, a, b)).to.deep.equal([101, 202, 303])
    chai.expect(zipWith(x, a, b)).to.deep.equal([100, 400, 900])
    chai.expect(zipWith(s, a, b)).to.deep.equal(['1 cow 100', '2 cow 200', '3 cow 300'])
  })
})
