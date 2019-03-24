/**
 * Created by dierickx.len on 26/03/2017.
 */

import chai from 'chai'
import { concat } from '../lib/fun'

describe('concat', function () {
  it('concats a string', function () {
    const str1 = 'Hi! '
    const str2 = 'How are you?'

    chai.expect(concat(str1, str2)).to.equal('Hi! How are you?')
  })

  it('concats an array', function () {
    const arr1 = [0, 1, 2, 3]
    const arr2 = [4, 3, 2, 1, 0]

    chai.expect(concat(arr1, arr2)).to.deep.equal([0, 1, 2, 3, 4, 3, 2, 1, 0])
  })
})
