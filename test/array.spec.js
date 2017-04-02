/**
 * Created by dierickx.len on 2017-04-02
 */

import chai from 'chai'
import isArray from '../src/array/is'
import emptyArray from '../src/array/empty'
import isEmptyArray from '../src/array/isEmpty'

describe("Array", function() {
  beforeEach(function() {});
  afterEach(function() {});
  it('new Array() is an Array', function() {
    const test = isArray([])
    chai.expect(test).to.be.true
  });

  it('Empties an array', function() {
    const test = emptyArray([0, 1, 2, 3, 4])
    chai.expect(test.length).to.equal(0)
  });

  it('Check if array is empty', function() {
    const test = isEmptyArray(new Array())
    chai.expect(test).to.be.true
  });
  
  it('Converts to an array', function(){
    // const test = 
  });
  

});
