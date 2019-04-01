import chai from 'chai'
import { zipObj } from '../lib/fun'

describe('zipObj', function() {
  it('combines an array of keys with an array of values into a single object', function() {
    chai.expect(zipObj(['a', 'b', 'c'], [1, 2, 3])).to.deep.equal({a: 1, b: 2, c: 3});
  });

  it('ignores extra values', function() {
    chai.expect(zipObj(['a', 'b', 'c'], [1, 2, 3, 4, 5, 6, 7])).to.deep.equal({a: 1, b: 2, c: 3});
  });

  it('ignores extra keys', function() {
    chai.expect(zipObj(['a', 'b', 'c', 'd', 'e', 'f'], [1, 2, 3])).to.deep.equal({a: 1, b: 2, c: 3});
  });

  it('last one in wins when there are duplicate keys', function() {
    chai.expect(zipObj(['a', 'b', 'c', 'a'], [1, 2, 3, 'LAST'])).to.deep.equal({a: 'LAST', b: 2, c: 3});
  });
  
  it('creates object with keys from 1st array and values from 2nd', () => {
    chai.expect(zipObj(['a', 'b'], [1, 2])).to.deep.equal({ a: 1, b: 2 })
  })

  it('ignores extra values', () => {
    chai.expect(zipObj(['a', 'b'], [1, 2, 3])).to.deep.equal({ a: 1, b: 2 })
  })
})