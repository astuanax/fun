/**

 */

import chai from 'chai'
import adjust from '../src/adjust'
import add from '../src/number/add'
import multiply from '../src/number/multiply'

const addTen = add(10)
const multiplyByTwo = multiply(2)

describe('adjust', function () {
  it('applies function to array item by index', () => {
    chai.expect(adjust(addTen, 2, [2, 3, 4, 5, 6])).to.deep.equal([2, 3, 14, 5, 6])
    chai.expect(adjust(multiplyByTwo, 4, [2, 3, 4, 5, 6])).to.deep.equal([2, 3, 4, 5, 12])
  })

  it('return array itself if no element by index does not exist', () => {
    chai.expect(adjust(addTen, 10, [2, 3, 4, 5, 6])).to.deep.equal([2, 3, 4, 5, 6])
    chai.expect(adjust(multiplyByTwo, 10, [2, 3, 4, 5, 6])).to.deep.equal([2, 3, 4, 5, 6])
  })

  it('returns copy even if index out of bounds', () => {
    const arr = [1, 2, 3]
    chai.expect(adjust(addTen, 4, arr)).to.not.equal(arr)
  })

  it('applies the given function to the value at the given index of the supplied array', function () {
    chai.expect(adjust(add(1), 2, [0, 1, 2, 3])).to.deep.equal([0, 1, 3, 3])
  })

  it('offsets negative indexes from the end of the array', function () {
    chai.expect(adjust(add(1), -3, [0, 1, 2, 3])).to.deep.equal([0, 2, 2, 3])
  })

  it('returns the original array if the supplied index is out of bounds', function () {
    var list = [0, 1, 2, 3]
    chai.expect(adjust(add(1), 4, list)).to.deep.equal(list)
    chai.expect(adjust(add(1), -5, list)).to.deep.equal(list)
  })

  it('does not mutate the original array', function () {
    var list = [0, 1, 2, 3]
    chai.expect(adjust(add(1), 2, list)).to.deep.equal([0, 1, 3, 3])
    chai.expect(list).to.deep.equal([0, 1, 2, 3])
  })

  it('accepts an array-like object', function () {
    function args () {
      return arguments
    }

    chai.expect(adjust(add(1), 2, args(0, 1, 2, 3))).to.deep.equal([0, 1, 3, 3])
  })
})
