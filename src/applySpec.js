// import curry from './_private/curry1'
// import fold from './fold'
// import keys from './keys'
//
// /**
//  * @function applySpec
//  * @param {Array.Function} fns
//  */
// export default curry(function applySpec (fns) {
//   var args = [].slice.call(arguments, 1)
//   return fold((acc, item) => {
//     acc[item] = typeof fns[acc] === 'Object'
//       ? applySpec.apply(applySpec, [fns[item]].concat(args))
//       : fns[item].apply(fns[item], args)
//     return acc
//   }, {})(keys(fns))
// })
