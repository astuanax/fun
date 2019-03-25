/**

 */

import chai from 'chai'
import { append } from '../lib/fun'

describe('add', function () {
  it('returns an array ith x appened', function () {
  	const arr = [0, 1]
    chai.expect(append(3, arr)).to.deep.equal([0, 1, 3])
    chai.expect(append(arr, arr)).to.deep.equal([0, 1, [0, 1]])
  })
})
