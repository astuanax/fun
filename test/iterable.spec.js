
/**
 * Created by dierickx.len on 26/03/2017.
 */

import chai from 'chai'
import { isIterator } from '../lib/fun'

describe('isIterable', function () {
  const iterable = {
    [Symbol.iterator]() {
      let step = 0;
      const iterator = {
        next() {
          if (step <= 2) {
            step++;
          }
          switch (step) {
            case 1:
              return { value: 'hello', done: false };
            case 2:
              return { value: 'world', done: false };
            default:
              return { value: undefined, done: true };
          }
        }
      };
      return iterator;
    }
  };

  it('is an iterable', function () {
    const test = isIterator(iterable)
    chai.expect(test).to.be.true
  })

  it('Object is not an iterable', function () {
    const test = isIterator({})
    chai.expect(test).to.be.false
  })

  it('Array is an iterable', function () {
    const test = isIterator(new Array())
    chai.expect(test).to.be.true
  })

  it('Map is an iterable', function () {
    const test = isIterator(new Map())
    chai.expect(test).to.be.true
  })


})
