/**
 * @author Len Dierickx
 */

import chai from 'chai'
import equals from '../src/util/equals'

describe("equals", function() {
  beforeEach(function() {});
  afterEach(function() {});
  it('String equals String', function() {
    const test = equals('', '')
    chai.expect(test).to.be.true
  });
  it('String equals String', function() {
    const string1 = ''
    const string2 = ''
    const test = equals(string1, string2)
    chai.expect(test).to.be.true
  });
  it('Array equals Array', function() {
      const arr1 = [1,2,3]
      const arr2 = [1,2,3]
      const arr3 = [2,3,1]
      const arr4 = [{}, []]
      const arr5 = [{}, []]
      const arr6 = [{}, null]
      const arr7 = [{}, null]      
      const test = equals(arr1, arr2)
      const test2 = equals(arr1, arr3)      
      const test3 = equals(arr4, arr5)      
      const test4 = equals(arr6, arr7)      
      chai.expect(test).to.be.true
      chai.expect(test2).to.be.false
      // chai.expect(test3).to.be.true
      // chai.expect(test3).to.be.true
    });
});
