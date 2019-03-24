/**

 */

import chai from 'chai'
import { fold, identity } from '../lib/fun'

const sum = (acc, cur) => acc + cur

describe('fold', function () {
  it('folds an array', function () {
    const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const b = []
    b.push('test')
    b.push('result')

    const map = (result, item, i, array) => {
      result.push(identity(item))
      return result
    }
    chai.expect(fold(map, [])(b)).to.deep.equal(b)
    chai.expect(fold(map, [])(a)).to.deep.equal(a)
  })

  it('folds an object', function () {
    const a = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 }
    const b = {}
    b.test = 'test'
    b.result = 'result'

    const map = (result, item, i, array) => {
      result[i] = identity(item)
      return result
    }
    chai.expect(fold(map, {})(b)).to.deep.equal(b)
    chai.expect(fold(map, {})(a)).to.deep.equal(a)
  })

  // it('reduces generators', function () {
  //   function * gen () {
  //     for (let i = 0; i <= 4; i++) yield i
  //   }
  //
  //   // expect(reduce(sum, 0, gen())).toBe(10)
  //   chai.expect(fold(sum, 0, gen())).to.equal(10)
  // })

  // it('reduces constructions with Symbol.iterator', function () {
  //   const obj = {}
  //   obj[Symbol.iterator] = function * () {
  //     yield 1
  //     yield 2
  //     yield 3
  //     yield 4
  //   }
  //   chai.expect(fold(sum, 0, obj)).to.equal(10)
  // })
})

//
// test('reduces generators', () => {
//   function * gen() {
//     for (let i = 0; i <= 4; i++) yield i
//   }
//   expect(reduce(sum, 0, gen())).toBe(10)
// })
//
// test('reduces constructions with Symbol.iterator', () => {
//   const obj = {}
//   obj[Symbol.iterator] = function * () {
//     yield 1
//     yield 2
//     yield 3
//     yield 4
//   }
//   expect(reduce(sum, 0, obj)).toBe(10)
// })
//
