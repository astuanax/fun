import chai from 'chai'
import { map, addIndex } from '../lib/fun'

describe('addIndex', function () {
  it('add index with map', () => {
    const array = [1, 2, 3, 4]
    chai.expect(addIndex(map, (v, i) => v + i, array)).to.deep.equal([1, 3, 5, 7])
    chai.expect(addIndex(map)((v, i) => v + i, array)).to.deep.equal([1, 3, 5, 7])
    chai.expect(addIndex(map, (v, i) => v + 2 * i, array)).to.deep.equal([1, 4, 7, 10])
  })

  // it('add index with filter', () => {
  //     const array = [1, 5, 3, 7]
  //     // chai.expect(addIndex(filter, (v, i) => (v + i) % 2 === 1, array)).to.deep.equal([1, 3])
  //     // chai.expect(addIndex(filter)((v, i) => (v + i) % 2 === 1, array)).to.deep.equal([1, 3])
  //   })

  it('add index doesn\'t mutate an array', () => {
    const array = [1, 2, 3, 4]
    chai.expect(addIndex(map, (v, i) => v + i, array)).to.deep.equal([1, 3, 5, 7])
    chai.expect(addIndex(map)((v, i) => v + i, array)).to.deep.equal([1, 3, 5, 7])
    chai.expect(array).to.deep.equal([1, 2, 3, 4])
  })
})
