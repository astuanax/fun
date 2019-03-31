import { filter } from '../lib/fun'
import chai from 'chai'

describe('filter', function () {
  it('filters arrays', () => {
    const isEven = i => i % 2 === 0
    chai.expect(filter(isEven, [1, 2, 3, 4])).to.deep.equal([2, 4])
  })

  it('filters objects', () => {
    var isEven = i => i % 2 === 0
    chai.expect(filter(isEven, { 'a': 1, 'b': 2, 'c': 3, 'd': 4 })).to.deep.equal({ 'b': 2, 'd': 4 })
  })

  // it('filters Sets', () => {
  //   var isZero = i => i === 0
  //   chai.expect(filter(isZero, new Set([1, 0, 3, 4, 5]))).to.deep.equal([0])
  // })

  it('filters Maps', () => {
    var isZero = (k, v) => v === 0
    chai.expect(filter(isZero, new Map([['a', 0], ['b', 1]]))).to.deep.equal(new Map([['a', 0]]))
  })

  // it('filters strings', () => {
  //   var isA = i => i === 'a'
  //   chai.expect(filter(isA, 'abc')).to.deep.equal('a')
  // })

  it('works for docs', () => {
    const people = [
      { name: 'Nick Oldman', age: 45 },
      { name: 'Jack Newton', age: 12 }
    ]
    const peopleObj = {
      'Nick Oldman': 45,
      'Jack Newton': 12
    }

    chai.expect(filter(({ age }) => age >= 18, people)).to.deep.equal([{ name: 'Nick Oldman', age: 45 }])
    chai.expect(filter(age => age >= 18, peopleObj)).to.deep.equal({ 'Nick Oldman': 45 })
  })
})
