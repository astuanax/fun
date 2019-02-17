/**
 * @author Len Dierickx
 */

import chai from 'chai'
import adjustWith from '../src/util/adjustWith'
import add from '../src/number/add'
import multiply from '../src/number/multiply'

const addTen = add(10)
const multiplyByTwo = multiply(2)

describe('adjustWith', function () {
  it('applies a function to array item by the predicate', () => {
    chai.expect(adjustWith(addTen, i => i === 2, [2, 3, 4, 5, 6])).to.deep.equal([12, 3, 4, 5, 6])
    chai.expect(adjustWith(multiplyByTwo, i => i === 4, [2, 3, 4, 5, 6])).to.deep.equal([2, 3, 8, 5, 6])
  })

  it('applies function to all array items matching the predicate', () => {
    chai.expect(adjustWith(addTen, i => i === 2, [2, 3, 4, 5, 6, 2])).to.deep.equal([12, 3, 4, 5, 6, 12])
    chai.expect(adjustWith(multiplyByTwo, i => i === 4, [2, 4, 3, 4, 5, 6])).to.deep.equal([2, 8, 3, 8, 5, 6])
  })

  it('return array itself if no element by value exists', () => {
    chai.expect(adjustWith(addTen, i => i === 10, [2, 3, 4, 5, 6])).to.deep.equal([2, 3, 4, 5, 6])
    chai.expect(adjustWith(multiplyByTwo, i => i === 10, [2, 3, 4, 5, 6])).to.deep.equal([2, 3, 4, 5, 6])
  })

  it('returns copy even if value does not exist', () => {
    const arr = [1, 2, 3]
    chai.expect(adjustWith(addTen, i => i === 4, arr)).to.not.equal(arr)
  })

  it('applies the given function to the value at the given predicate of the supplied array', function () {
    chai.expect(adjustWith(add(1), i => i === 2, [0, 1, 2, 3])).to.deep.equal([0, 1, 3, 3])
  })

  it('accepts an array-like object', function () {
    function args() {
      return arguments
    }

    chai.expect(adjustWith(add(1), i => i === 2, args(0, 1, 2, 3))).to.deep.equal([0, 1, 3, 3])
  })
})
