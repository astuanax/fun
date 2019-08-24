// import chai from 'chai'
// import { applySpec } from '../lib/fun'
// 
// describe('applySpec', function () {
//     it('works with empty spec', function() {
//          chai.expect(applySpec({})()).to.deep.equal({});
//        });
//      
//      
//    it('returns object with applied function', () => {
//        const res = applySpec({
//          sum: (a, b) => a + b,
//          nested: {
//            mul: (a, b) => a * b
//          }
//        })(2, 4)
//        
//        chai.expect(res).to.deep.equal({
//          sum: 6,
//          nested: { mul: 8 }
//        })
//      })
// })
