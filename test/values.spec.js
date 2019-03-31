/**

 */

import chai from 'chai'
import { values } from '../lib/fun'

describe('values', function () {
  var obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};
  function C() { this.a = 100; this.b = 200; }
  C.prototype.x = function() { return 'x'; };
  C.prototype.y = 'y';
  var cobj = new C();

  it("returns an array of the given object's values", function() {
    var vs = values(obj).sort();
    var ts = [[1, 2, 3], 100, 'D', {x: 200, y: 300}, null, undefined];
    chai.expect(vs.length, ts.length);
    chai.expect(vs[0], ts[0]);
    chai.expect(vs[1], ts[1]);
    chai.expect(vs[2], ts[2]);
    chai.expect(vs[3], ts[3]);
    chai.expect(vs[4], ts[4]);
    chai.expect(vs[5], ts[5]);

    chai.expect(values({
      hasOwnProperty: false
    })).to.deep.equal([false]);
  });

  it("does not include the given object's prototype properties", function() {
    chai.expect(values(cobj)).to.deep.equal([100, 200]);
  });

 
})
