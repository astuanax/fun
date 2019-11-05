(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fun", [], factory);
	else if(typeof exports === 'object')
		exports["fun"] = factory();
	else
		root["fun"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_private/curry1.js":
/*!********************************!*\
  !*** ./src/_private/curry1.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return curry1; });\nvar cov_56eqort2s=function(){var path=\"/mnt/sda/git/fun/src/_private/curry1.js\",hash=\"088b3e9406a21b6b11395be315a5adc21faa735b\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/mnt/sda/git/fun/src/_private/curry1.js\",statementMap:{\"0\":{start:{line:8,column:2},end:{line:10,column:4}},\"1\":{start:{line:9,column:4},end:{line:9,column:49}}},fnMap:{\"0\":{name:\"curry1\",decl:{start:{line:7,column:24},end:{line:7,column:30}},loc:{start:{line:7,column:35},end:{line:11,column:1}},line:7},\"1\":{name:\"curried\",decl:{start:{line:8,column:18},end:{line:8,column:25}},loc:{start:{line:8,column:29},end:{line:10,column:3}},line:8}},branchMap:{\"0\":{loc:{start:{line:9,column:11},end:{line:9,column:48}},type:\"cond-expr\",locations:[{start:{line:9,column:36},end:{line:9,column:40}},{start:{line:9,column:43},end:{line:9,column:48}}],line:9}},s:{\"0\":0,\"1\":0},f:{\"0\":0,\"1\":0},b:{\"0\":[0,0]},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function curry1(fn){cov_56eqort2s.f[0]++;cov_56eqort2s.s[0]++;return function curried(a){cov_56eqort2s.f[1]++;cov_56eqort2s.s[1]++;return arguments.length===0?(cov_56eqort2s.b[0][0]++,this):(cov_56eqort2s.b[0][1]++,fn(a));};}\n\n//# sourceURL=webpack://fun/./src/_private/curry1.js?");

/***/ }),

/***/ "./src/addIndex.js":
/*!*************************!*\
  !*** ./src/addIndex.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_rhoiftyyh=function(){var path='/mnt/sda/git/fun/src/addIndex.js',hash='9c3614a0dd94c7124e137ef5f2b5228e94848b2a',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/addIndex.js',statementMap:{'0':{start:{line:19,column:10},end:{line:19,column:11}},'1':{start:{line:20,column:2},end:{line:22,column:8}},'2':{start:{line:21,column:4},end:{line:21,column:21}}},fnMap:{'0':{name:'addIndex',decl:{start:{line:18,column:30},end:{line:18,column:38}},loc:{start:{line:18,column:48},end:{line:23,column:1}},line:18},'1':{name:'(anonymous_1)',decl:{start:{line:20,column:11},end:{line:20,column:12}},loc:{start:{line:20,column:24},end:{line:22,column:3}},line:20}},branchMap:{},s:{'0':0,'1':0,'2':0},f:{'0':0,'1':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function addIndex(f,g,a){cov_rhoiftyyh.f[0]++;var i=(cov_rhoiftyyh.s[0]++,0);cov_rhoiftyyh.s[1]++;return f(function(v){cov_rhoiftyyh.f[1]++;cov_rhoiftyyh.s[2]++;return g(v,i++);},a);}));\n\n//# sourceURL=webpack://fun/./src/addIndex.js?");

/***/ }),

/***/ "./src/adjust.js":
/*!***********************!*\
  !*** ./src/adjust.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_d80dkwh4=function(){var path='/mnt/sda/git/fun/src/adjust.js',hash='a07dd5441c26619bb48b6c83e6f84e02bf5a82f2',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/adjust.js',statementMap:{'0':{start:{line:21,column:10},end:{line:21,column:39}},'1':{start:{line:22,column:12},end:{line:22,column:36}},'2':{start:{line:23,column:2},end:{line:23,column:24}},'3':{start:{line:23,column:15},end:{line:23,column:24}},'4':{start:{line:24,column:2},end:{line:24,column:22}},'5':{start:{line:25,column:2},end:{line:25,column:11}}},fnMap:{'0':{name:'adjust',decl:{start:{line:20,column:30},end:{line:20,column:36}},loc:{start:{line:20,column:47},end:{line:26,column:1}},line:20}},branchMap:{'0':{loc:{start:{line:22,column:12},end:{line:22,column:36}},type:'cond-expr',locations:[{start:{line:22,column:20},end:{line:22,column:32}},{start:{line:22,column:35},end:{line:22,column:36}}],line:22},'1':{loc:{start:{line:23,column:2},end:{line:23,column:24}},type:'if',locations:[{start:{line:23,column:2},end:{line:23,column:24}},{start:{line:23,column:2},end:{line:23,column:24}}],line:23}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function adjust(fn,i,a){cov_d80dkwh4.f[0]++;var r=(cov_d80dkwh4.s[0]++,Array.prototype.slice.call(a));var idx=(cov_d80dkwh4.s[1]++,i<0?(cov_d80dkwh4.b[0][0]++,r.length+i):(cov_d80dkwh4.b[0][1]++,i));cov_d80dkwh4.s[2]++;if(!a[idx]){cov_d80dkwh4.b[1][0]++;cov_d80dkwh4.s[3]++;return r;}else{cov_d80dkwh4.b[1][1]++;}cov_d80dkwh4.s[4]++;r[idx]=fn(r[idx]);cov_d80dkwh4.s[5]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/adjust.js?");

/***/ }),

/***/ "./src/adjustWith.js":
/*!***************************!*\
  !*** ./src/adjustWith.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\nvar cov_xcub68eoo=function(){var path='/mnt/sda/git/fun/src/adjustWith.js',hash='71d5c6156f15b32065b4b856d2ff85ad6e0a2b40',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/adjustWith.js',statementMap:{'0':{start:{line:16,column:12},end:{line:22,column:3}},'1':{start:{line:17,column:4},end:{line:19,column:5}},'2':{start:{line:18,column:6},end:{line:18,column:19}},'3':{start:{line:21,column:4},end:{line:21,column:13}},'4':{start:{line:24,column:2},end:{line:24,column:49}}},fnMap:{'0':{name:'adjustWith',decl:{start:{line:15,column:30},end:{line:15,column:40}},loc:{start:{line:15,column:54},end:{line:25,column:1}},line:15},'1':{name:'_fn',decl:{start:{line:16,column:21},end:{line:16,column:24}},loc:{start:{line:16,column:28},end:{line:22,column:3}},line:16}},branchMap:{'0':{loc:{start:{line:17,column:4},end:{line:19,column:5}},type:'if',locations:[{start:{line:17,column:4},end:{line:19,column:5}},{start:{line:17,column:4},end:{line:19,column:5}}],line:17}},s:{'0':0,'1':0,'2':0,'3':0,'4':0},f:{'0':0,'1':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function adjustWith(fn,pred,a){cov_xcub68eoo.f[0]++;cov_xcub68eoo.s[0]++;var _fn=function _fn(x){cov_xcub68eoo.f[1]++;cov_xcub68eoo.s[1]++;if(pred(x)){cov_xcub68eoo.b[0][0]++;cov_xcub68eoo.s[2]++;return fn(x);}else{cov_xcub68eoo.b[0][1]++;}cov_xcub68eoo.s[3]++;return x;};cov_xcub68eoo.s[4]++;return Object(_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_fn,Array.prototype.slice.call(a));}));\n\n//# sourceURL=webpack://fun/./src/adjustWith.js?");

/***/ }),

/***/ "./src/all.js":
/*!********************!*\
  !*** ./src/all.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1u2rug3rq1=function(){var path='/mnt/sda/git/fun/src/all.js',hash='bad0a8c2cf9ca2e8e140ab315fdce46e0fed3aaa',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/all.js',statementMap:{'0':{start:{line:14,column:12},end:{line:14,column:16}},'1':{start:{line:16,column:2},end:{line:21,column:3}},'2':{start:{line:17,column:4},end:{line:20,column:5}},'3':{start:{line:18,column:6},end:{line:18,column:18}},'4':{start:{line:19,column:6},end:{line:19,column:12}},'5':{start:{line:23,column:2},end:{line:23,column:13}}},fnMap:{'0':{name:'all',decl:{start:{line:13,column:30},end:{line:13,column:33}},loc:{start:{line:13,column:41},end:{line:24,column:1}},line:13}},branchMap:{'0':{loc:{start:{line:17,column:4},end:{line:20,column:5}},type:'if',locations:[{start:{line:17,column:4},end:{line:20,column:5}},{start:{line:17,column:4},end:{line:20,column:5}}],line:17}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function all(cb,a){cov_1u2rug3rq1.f[0]++;var res=(cov_1u2rug3rq1.s[0]++,true);cov_1u2rug3rq1.s[1]++;for(var i in a){cov_1u2rug3rq1.s[2]++;if(!cb(a[i])){cov_1u2rug3rq1.b[0][0]++;cov_1u2rug3rq1.s[3]++;res=false;cov_1u2rug3rq1.s[4]++;break;}else{cov_1u2rug3rq1.b[0][1]++;}}cov_1u2rug3rq1.s[5]++;return res;}));\n\n//# sourceURL=webpack://fun/./src/all.js?");

/***/ }),

/***/ "./src/allPass.js":
/*!************************!*\
  !*** ./src/allPass.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_15m46pk3oo=function(){var path='/mnt/sda/git/fun/src/allPass.js',hash='bf6609a1e38ddfffa5a3d9d9859e7c4f6d233ef7',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/allPass.js',statementMap:{'0':{start:{line:13,column:2},end:{line:15,column:3}},'1':{start:{line:14,column:4},end:{line:14,column:33}},'2':{start:{line:14,column:20},end:{line:14,column:33}},'3':{start:{line:17,column:2},end:{line:17,column:14}}},fnMap:{'0':{name:'allPass',decl:{start:{line:12,column:30},end:{line:12,column:37}},loc:{start:{line:12,column:46},end:{line:18,column:1}},line:12}},branchMap:{'0':{loc:{start:{line:14,column:4},end:{line:14,column:33}},type:'if',locations:[{start:{line:14,column:4},end:{line:14,column:33}},{start:{line:14,column:4},end:{line:14,column:33}}],line:14}},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function allPass(cbs,a){cov_15m46pk3oo.f[0]++;cov_15m46pk3oo.s[0]++;for(var i=0;i<cbs.length;i++){cov_15m46pk3oo.s[1]++;if(!cbs[i](a)){cov_15m46pk3oo.b[0][0]++;cov_15m46pk3oo.s[2]++;return false;}else{cov_15m46pk3oo.b[0][1]++;}}cov_15m46pk3oo.s[3]++;return true;}));\n\n//# sourceURL=webpack://fun/./src/allPass.js?");

/***/ }),

/***/ "./src/always.js":
/*!***********************!*\
  !*** ./src/always.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1gnldqhhc3=function(){var path='/mnt/sda/git/fun/src/always.js',hash='1b268c8384bbd8a62f8afd660edb8cb42053f769',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/always.js',statementMap:{'0':{start:{line:13,column:2},end:{line:15,column:4}},'1':{start:{line:14,column:4},end:{line:14,column:13}}},fnMap:{'0':{name:'always',decl:{start:{line:12,column:30},end:{line:12,column:36}},loc:{start:{line:12,column:40},end:{line:16,column:1}},line:12},'1':{name:'(anonymous_1)',decl:{start:{line:13,column:9},end:{line:13,column:10}},loc:{start:{line:13,column:21},end:{line:15,column:3}},line:13}},branchMap:{},s:{'0':0,'1':0},f:{'0':0,'1':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function always(x){cov_1gnldqhhc3.f[0]++;cov_1gnldqhhc3.s[0]++;return function(){cov_1gnldqhhc3.f[1]++;cov_1gnldqhhc3.s[1]++;return x;};}));\n\n//# sourceURL=webpack://fun/./src/always.js?");

/***/ }),

/***/ "./src/and.js":
/*!********************!*\
  !*** ./src/and.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1dlhiyydzw=function(){var path='/mnt/sda/git/fun/src/and.js',hash='b53c6c6a46f383010cd69076eb44179a9191e2f7',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/and.js',statementMap:{'0':{start:{line:14,column:2},end:{line:14,column:16}}},fnMap:{'0':{name:'and',decl:{start:{line:13,column:30},end:{line:13,column:33}},loc:{start:{line:13,column:40},end:{line:15,column:1}},line:13}},branchMap:{'0':{loc:{start:{line:14,column:9},end:{line:14,column:15}},type:'binary-expr',locations:[{start:{line:14,column:9},end:{line:14,column:10}},{start:{line:14,column:14},end:{line:14,column:15}}],line:14}},s:{'0':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function and(x,y){cov_1dlhiyydzw.f[0]++;cov_1dlhiyydzw.s[0]++;return(cov_1dlhiyydzw.b[0][0]++,x)&&(cov_1dlhiyydzw.b[0][1]++,y);}));\n\n//# sourceURL=webpack://fun/./src/and.js?");

/***/ }),

/***/ "./src/any.js":
/*!********************!*\
  !*** ./src/any.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_2m7pgzc2xl=function(){var path='/mnt/sda/git/fun/src/any.js',hash='15bf98ddd437eca40698c304c3b63a986e5f0b08',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/any.js',statementMap:{'0':{start:{line:14,column:12},end:{line:14,column:17}},'1':{start:{line:16,column:2},end:{line:21,column:3}},'2':{start:{line:17,column:4},end:{line:20,column:5}},'3':{start:{line:18,column:6},end:{line:18,column:17}},'4':{start:{line:19,column:6},end:{line:19,column:12}},'5':{start:{line:23,column:2},end:{line:23,column:13}}},fnMap:{'0':{name:'any',decl:{start:{line:13,column:30},end:{line:13,column:33}},loc:{start:{line:13,column:41},end:{line:24,column:1}},line:13}},branchMap:{'0':{loc:{start:{line:17,column:4},end:{line:20,column:5}},type:'if',locations:[{start:{line:17,column:4},end:{line:20,column:5}},{start:{line:17,column:4},end:{line:20,column:5}}],line:17}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function any(cb,a){cov_2m7pgzc2xl.f[0]++;var res=(cov_2m7pgzc2xl.s[0]++,false);cov_2m7pgzc2xl.s[1]++;for(var i in a){cov_2m7pgzc2xl.s[2]++;if(cb(a[i])){cov_2m7pgzc2xl.b[0][0]++;cov_2m7pgzc2xl.s[3]++;res=true;cov_2m7pgzc2xl.s[4]++;break;}else{cov_2m7pgzc2xl.b[0][1]++;}}cov_2m7pgzc2xl.s[5]++;return res;}));\n\n//# sourceURL=webpack://fun/./src/any.js?");

/***/ }),

/***/ "./src/anyPass.js":
/*!************************!*\
  !*** ./src/anyPass.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1j3e3kwj91=function(){var path='/mnt/sda/git/fun/src/anyPass.js',hash='ab26253707800c1df52d7633f5140bde22d8ba7e',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/anyPass.js',statementMap:{'0':{start:{line:12,column:2},end:{line:14,column:3}},'1':{start:{line:13,column:4},end:{line:13,column:31}},'2':{start:{line:13,column:19},end:{line:13,column:31}},'3':{start:{line:16,column:2},end:{line:16,column:15}}},fnMap:{'0':{name:'anyPass',decl:{start:{line:11,column:30},end:{line:11,column:37}},loc:{start:{line:11,column:46},end:{line:17,column:1}},line:11}},branchMap:{'0':{loc:{start:{line:13,column:4},end:{line:13,column:31}},type:'if',locations:[{start:{line:13,column:4},end:{line:13,column:31}},{start:{line:13,column:4},end:{line:13,column:31}}],line:13}},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function anyPass(cbs,a){cov_1j3e3kwj91.f[0]++;cov_1j3e3kwj91.s[0]++;for(var i=0;i<cbs.length;i++){cov_1j3e3kwj91.s[1]++;if(cbs[i](a)){cov_1j3e3kwj91.b[0][0]++;cov_1j3e3kwj91.s[2]++;return true;}else{cov_1j3e3kwj91.b[0][1]++;}}cov_1j3e3kwj91.s[3]++;return false;}));\n\n//# sourceURL=webpack://fun/./src/anyPass.js?");

/***/ }),

/***/ "./src/ap.js":
/*!*******************!*\
  !*** ./src/ap.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is */ \"./src/is.js\");\n/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array/fold */ \"./src/array/fold.js\");\n/* harmony import */ var _array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array/map */ \"./src/array/map.js\");\nvar cov_kmicka0i2=function(){var path='/mnt/sda/git/fun/src/ap.js',hash='8cbe9039924ff1d9a354ac0e5559333545ace640',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/ap.js',statementMap:{'0':{start:{line:17,column:17},end:{line:17,column:31}},'1':{start:{line:19,column:2},end:{line:21,column:3}},'2':{start:{line:20,column:4},end:{line:20,column:24}},'3':{start:{line:23,column:2},end:{line:27,column:3}},'4':{start:{line:24,column:4},end:{line:26,column:6}},'5':{start:{line:25,column:6},end:{line:25,column:29}},'6':{start:{line:29,column:2},end:{line:31,column:14}},'7':{start:{line:30,column:4},end:{line:30,column:44}}},fnMap:{'0':{name:'ap',decl:{start:{line:18,column:30},end:{line:18,column:32}},loc:{start:{line:18,column:44},end:{line:32,column:1}},line:18},'1':{name:'(anonymous_1)',decl:{start:{line:24,column:11},end:{line:24,column:12}},loc:{start:{line:24,column:24},end:{line:26,column:5}},line:24},'2':{name:'(anonymous_2)',decl:{start:{line:29,column:14},end:{line:29,column:15}},loc:{start:{line:29,column:32},end:{line:31,column:3}},line:29}},branchMap:{'0':{loc:{start:{line:19,column:2},end:{line:21,column:3}},type:'if',locations:[{start:{line:19,column:2},end:{line:21,column:3}},{start:{line:19,column:2},end:{line:21,column:3}}],line:19},'1':{loc:{start:{line:23,column:2},end:{line:27,column:3}},type:'if',locations:[{start:{line:23,column:2},end:{line:27,column:3}},{start:{line:23,column:2},end:{line:27,column:3}}],line:23}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0},f:{'0':0,'1':0,'2':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var isFunction=(cov_kmicka0i2.s[0]++,Object(_is__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Function'));/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function ap(fns,vals){cov_kmicka0i2.f[0]++;cov_kmicka0i2.s[1]++;if(isFunction(fns.ap)){cov_kmicka0i2.b[0][0]++;cov_kmicka0i2.s[2]++;return fns.ap(vals);}else{cov_kmicka0i2.b[0][1]++;}cov_kmicka0i2.s[3]++;if(isFunction(fns)){cov_kmicka0i2.b[1][0]++;cov_kmicka0i2.s[4]++;return function(x){cov_kmicka0i2.f[1]++;cov_kmicka0i2.s[5]++;return fns(x)(vals(x));};}else{cov_kmicka0i2.b[1][1]++;}cov_kmicka0i2.s[6]++;return Object(_array_fold__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(acc,f){cov_kmicka0i2.f[2]++;cov_kmicka0i2.s[7]++;return acc.concat(Object(_array_map__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_private_curry1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(f),vals));},[],fns);}));\n\n//# sourceURL=webpack://fun/./src/ap.js?");

/***/ }),

/***/ "./src/aperture.js":
/*!*************************!*\
  !*** ./src/aperture.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\nvar cov_g2iwifu0u=function(){var path='/mnt/sda/git/fun/src/aperture.js',hash='ebb72d7ebcb10e7cee7d5586931b28cfa3b52251',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/aperture.js',statementMap:{'0':{start:{line:11,column:2},end:{line:13,column:3}},'1':{start:{line:12,column:4},end:{line:12,column:14}},'2':{start:{line:15,column:12},end:{line:15,column:35}},'3':{start:{line:16,column:2},end:{line:18,column:10}},'4':{start:{line:17,column:4},end:{line:17,column:33}}},fnMap:{'0':{name:'aperture',decl:{start:{line:10,column:30},end:{line:10,column:38}},loc:{start:{line:10,column:45},end:{line:19,column:1}},line:10},'1':{name:'(anonymous_1)',decl:{start:{line:16,column:13},end:{line:16,column:14}},loc:{start:{line:16,column:34},end:{line:18,column:3}},line:16}},branchMap:{'0':{loc:{start:{line:11,column:2},end:{line:13,column:3}},type:'if',locations:[{start:{line:11,column:2},end:{line:13,column:3}},{start:{line:11,column:2},end:{line:13,column:3}}],line:11}},s:{'0':0,'1':0,'2':0,'3':0,'4':0},f:{'0':0,'1':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function aperture(n,a){cov_g2iwifu0u.f[0]++;cov_g2iwifu0u.s[0]++;if(a.length<n){cov_g2iwifu0u.b[0][0]++;cov_g2iwifu0u.s[1]++;return[];}else{cov_g2iwifu0u.b[0][1]++;}var res=(cov_g2iwifu0u.s[2]++,Array(a.length-n+1));cov_g2iwifu0u.s[3]++;return Object(_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(item,idx){cov_g2iwifu0u.f[1]++;cov_g2iwifu0u.s[4]++;return a.slice(idx,idx+n);},res);}));\n\n//# sourceURL=webpack://fun/./src/aperture.js?");

/***/ }),

/***/ "./src/append.js":
/*!***********************!*\
  !*** ./src/append.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ \"./src/concat.js\");\nvar cov_23dnf8mgsf=function(){var path='/mnt/sda/git/fun/src/append.js',hash='2c74e8147c7557c50134c74866f532daa4a14336',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/append.js',statementMap:{'0':{start:{line:16,column:2},end:{line:16,column:28}}},fnMap:{'0':{name:'append',decl:{start:{line:15,column:30},end:{line:15,column:36}},loc:{start:{line:15,column:47},end:{line:17,column:1}},line:15}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function append(el,list){cov_23dnf8mgsf.f[0]++;cov_23dnf8mgsf.s[0]++;return Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list,[el]);}));\n\n//# sourceURL=webpack://fun/./src/append.js?");

/***/ }),

/***/ "./src/apply.js":
/*!**********************!*\
  !*** ./src/apply.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1j9ype8ef9=function(){var path='/mnt/sda/git/fun/src/apply.js',hash='da15b2159f27537f1a2ff98659bc1a476523be5b',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/apply.js',statementMap:{'0':{start:{line:17,column:2},end:{line:17,column:28}}},fnMap:{'0':{name:'apply',decl:{start:{line:16,column:30},end:{line:16,column:35}},loc:{start:{line:16,column:46},end:{line:18,column:1}},line:16}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function apply(fn,args){cov_1j9ype8ef9.f[0]++;cov_1j9ype8ef9.s[0]++;return fn.apply(fn,args);}));\n\n//# sourceURL=webpack://fun/./src/apply.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_1ieyee81j8=function(){var path='/mnt/sda/git/fun/src/array/concat.js',hash='74506ee6bb6183fca6650bb62441771e5e9169a2',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/array/concat.js',statementMap:{'0':{start:{line:15,column:2},end:{line:15,column:38}}},fnMap:{'0':{name:'concat',decl:{start:{line:14,column:30},end:{line:14,column:36}},loc:{start:{line:14,column:43},end:{line:16,column:1}},line:14}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function concat(l,r){cov_1ieyee81j8.f[0]++;cov_1ieyee81j8.s[0]++;return Array.prototype.concat(l,r);}));\n\n//# sourceURL=webpack://fun/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/equals.js":
/*!*****************************!*\
  !*** ./src/array/equals.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../not */ \"./src/not.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../equals */ \"./src/equals.js\");\nvar cov_4sx0iw065=function(){var path='/mnt/sda/git/fun/src/array/equals.js',hash='e1eadb3ca49c0eefb4bf1c605c922c8dd1aeeeca',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/array/equals.js',statementMap:{'0':{start:{line:12,column:2},end:{line:14,column:3}},'1':{start:{line:13,column:4},end:{line:13,column:17}},'2':{start:{line:16,column:2},end:{line:18,column:3}},'3':{start:{line:17,column:4},end:{line:17,column:46}},'4':{start:{line:17,column:33},end:{line:17,column:46}},'5':{start:{line:20,column:2},end:{line:20,column:14}}},fnMap:{'0':{name:'equalsArray',decl:{start:{line:11,column:30},end:{line:11,column:41}},loc:{start:{line:11,column:48},end:{line:21,column:1}},line:11}},branchMap:{'0':{loc:{start:{line:12,column:2},end:{line:14,column:3}},type:'if',locations:[{start:{line:12,column:2},end:{line:14,column:3}},{start:{line:12,column:2},end:{line:14,column:3}}],line:12},'1':{loc:{start:{line:17,column:4},end:{line:17,column:46}},type:'if',locations:[{start:{line:17,column:4},end:{line:17,column:46}},{start:{line:17,column:4},end:{line:17,column:46}}],line:17}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function equalsArray(x,y){cov_4sx0iw065.f[0]++;cov_4sx0iw065.s[0]++;if(x.length!==y.length){cov_4sx0iw065.b[0][0]++;cov_4sx0iw065.s[1]++;return false;}else{cov_4sx0iw065.b[0][1]++;}cov_4sx0iw065.s[2]++;for(var i=0;i<x.length;i++){cov_4sx0iw065.s[3]++;if(Object(_not__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_equals__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x[i],y[i]))){cov_4sx0iw065.b[1][0]++;cov_4sx0iw065.s[4]++;return false;}else{cov_4sx0iw065.b[1][1]++;}}cov_4sx0iw065.s[5]++;return true;}));\n\n//# sourceURL=webpack://fun/./src/array/equals.js?");

/***/ }),

/***/ "./src/array/filter.js":
/*!*****************************!*\
  !*** ./src/array/filter.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_jqzpt7cvu=function(){var path='/mnt/sda/git/fun/src/array/filter.js',hash='1b74b69f7f88a395c5fd534ca534bf749f73f898',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/array/filter.js',statementMap:{'0':{start:{line:11,column:10},end:{line:11,column:12}},'1':{start:{line:13,column:2},end:{line:15,column:3}},'2':{start:{line:14,column:4},end:{line:14,column:31}},'3':{start:{line:14,column:18},end:{line:14,column:31}},'4':{start:{line:17,column:2},end:{line:17,column:11}}},fnMap:{'0':{name:'arrayFilter',decl:{start:{line:10,column:30},end:{line:10,column:41}},loc:{start:{line:10,column:49},end:{line:18,column:1}},line:10}},branchMap:{'0':{loc:{start:{line:14,column:4},end:{line:14,column:31}},type:'if',locations:[{start:{line:14,column:4},end:{line:14,column:31}},{start:{line:14,column:4},end:{line:14,column:31}}],line:14}},s:{'0':0,'1':0,'2':0,'3':0,'4':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function arrayFilter(fn,a){cov_jqzpt7cvu.f[0]++;var r=(cov_jqzpt7cvu.s[0]++,[]);cov_jqzpt7cvu.s[1]++;for(var i=0;i<a.length;i++){cov_jqzpt7cvu.s[2]++;if(fn(a[i])){cov_jqzpt7cvu.b[0][0]++;cov_jqzpt7cvu.s[3]++;r.push(a[i]);}else{cov_jqzpt7cvu.b[0][1]++;}}cov_jqzpt7cvu.s[4]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/array/filter.js?");

/***/ }),

/***/ "./src/array/fold.js":
/*!***************************!*\
  !*** ./src/array/fold.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_rib44s98a=function(){var path='/mnt/sda/git/fun/src/array/fold.js',hash='4e27e8c722fe7535349f1c5fe072d442897ec691',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/array/fold.js',statementMap:{'0':{start:{line:26,column:10},end:{line:26,column:12}},'1':{start:{line:27,column:10},end:{line:27,column:18}},'2':{start:{line:28,column:10},end:{line:28,column:14}},'3':{start:{line:30,column:2},end:{line:32,column:3}},'4':{start:{line:31,column:4},end:{line:31,column:26}},'5':{start:{line:34,column:2},end:{line:34,column:11}}},fnMap:{'0':{name:'fold',decl:{start:{line:25,column:30},end:{line:25,column:34}},loc:{start:{line:25,column:48},end:{line:35,column:1}},line:25}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function fold(cb,init,a){cov_rib44s98a.f[0]++;var i=(cov_rib44s98a.s[0]++,-1);var l=(cov_rib44s98a.s[1]++,a.length);var r=(cov_rib44s98a.s[2]++,init);cov_rib44s98a.s[3]++;while(++i<l){cov_rib44s98a.s[4]++;r=cb(r,a[i],i,a);}cov_rib44s98a.s[5]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/array/fold.js?");

/***/ }),

/***/ "./src/array/is.js":
/*!*************************!*\
  !*** ./src/array/is.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_2986h5g2as=function(){var path='/mnt/sda/git/fun/src/array/is.js',hash='91a240d1a09234ede0149c70d108a43005dbed4b',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/array/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Array'));\n\n//# sourceURL=webpack://fun/./src/array/is.js?");

/***/ }),

/***/ "./src/array/map.js":
/*!**************************!*\
  !*** ./src/array/map.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_2dykzk70uk=function(){var path='/mnt/sda/git/fun/src/array/map.js',hash='86788557f0e165cbde281615ac3ae30249e06e5f',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/array/map.js',statementMap:{'0':{start:{line:18,column:10},end:{line:18,column:12}},'1':{start:{line:19,column:10},end:{line:19,column:18}},'2':{start:{line:20,column:10},end:{line:20,column:22}},'3':{start:{line:22,column:2},end:{line:24,column:3}},'4':{start:{line:23,column:4},end:{line:23,column:26}},'5':{start:{line:26,column:2},end:{line:26,column:11}}},fnMap:{'0':{name:'map',decl:{start:{line:17,column:30},end:{line:17,column:33}},loc:{start:{line:17,column:41},end:{line:27,column:1}},line:17}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function map(cb,a){cov_2dykzk70uk.f[0]++;var i=(cov_2dykzk70uk.s[0]++,-1);var l=(cov_2dykzk70uk.s[1]++,a.length);var r=(cov_2dykzk70uk.s[2]++,new Array(l));cov_2dykzk70uk.s[3]++;while(++i<l){cov_2dykzk70uk.s[4]++;r[i]=cb(a[i],i,a);}cov_2dykzk70uk.s[5]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/array/map.js?");

/***/ }),

/***/ "./src/array/to.js":
/*!*************************!*\
  !*** ./src/array/to.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toArray; });\nvar cov_1gqyi1mp2g=function(){var path=\"/mnt/sda/git/fun/src/array/to.js\",hash=\"b3ed524a9ec16dfa0e1ed4e08d3445cbb2e07537\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/mnt/sda/git/fun/src/array/to.js\",statementMap:{\"0\":{start:{line:19,column:2},end:{line:19,column:56}}},fnMap:{\"0\":{name:\"toArray\",decl:{start:{line:18,column:24},end:{line:18,column:31}},loc:{start:{line:18,column:35},end:{line:20,column:1}},line:18}},branchMap:{\"0\":{loc:{start:{line:19,column:9},end:{line:19,column:55}},type:\"cond-expr\",locations:[{start:{line:19,column:26},end:{line:19,column:32}},{start:{line:19,column:35},end:{line:19,column:55}}],line:19}},s:{\"0\":0},f:{\"0\":0},b:{\"0\":[0,0]},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function toArray(x){cov_1gqyi1mp2g.f[0]++;cov_1gqyi1mp2g.s[0]++;return x.length===1?(cov_1gqyi1mp2g.b[0][0]++,[x[0]]):(cov_1gqyi1mp2g.b[0][1]++,Array.apply(null,x));};\n\n//# sourceURL=webpack://fun/./src/array/to.js?");

/***/ }),

/***/ "./src/array/union.js":
/*!****************************!*\
  !*** ./src/array/union.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_1k8dxcxua6=function(){var path='/mnt/sda/git/fun/src/array/union.js',hash='525bba90ea7683a369c13ff340f0c3cae026dc59',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/array/union.js',statementMap:{'0':{start:{line:15,column:2},end:{line:15,column:44}}},fnMap:{'0':{name:'unionArray',decl:{start:{line:14,column:30},end:{line:14,column:40}},loc:{start:{line:14,column:49},end:{line:16,column:1}},line:14}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function unionArray(aL,aR){cov_1k8dxcxua6.f[0]++;cov_1k8dxcxua6.s[0]++;return Array.from(new Set(aL.concat(aR)));}));\n\n//# sourceURL=webpack://fun/./src/array/union.js?");

/***/ }),

/***/ "./src/binary.js":
/*!***********************!*\
  !*** ./src/binary.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_2n8yeuntt6=function(){var path='/mnt/sda/git/fun/src/binary.js',hash='2e1ed4c9440ff2d18b06ace6cefa55d8b1f51cd8',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/binary.js',statementMap:{'0':{start:{line:9,column:2},end:{line:11,column:5}},'1':{start:{line:10,column:4},end:{line:10,column:20}}},fnMap:{'0':{name:'binary',decl:{start:{line:8,column:31},end:{line:8,column:37}},loc:{start:{line:8,column:42},end:{line:12,column:1}},line:8},'1':{name:'(anonymous_1)',decl:{start:{line:9,column:15},end:{line:9,column:16}},loc:{start:{line:9,column:31},end:{line:11,column:3}},line:9}},branchMap:{},s:{'0':0,'1':0},f:{'0':0,'1':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function binary(cb){cov_2n8yeuntt6.f[0]++;cov_2n8yeuntt6.s[0]++;return Object(_curry__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(a,b){cov_2n8yeuntt6.f[1]++;cov_2n8yeuntt6.s[1]++;return cb(a,b);});}));\n\n//# sourceURL=webpack://fun/./src/binary.js?");

/***/ }),

/***/ "./src/bind.js":
/*!*********************!*\
  !*** ./src/bind.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_l36ddaplv=function(){var path='/mnt/sda/git/fun/src/bind.js',hash='df894acf8b3faf51191eea7bed1fa3bb6386965a',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/bind.js',statementMap:{'0':{start:{line:11,column:2},end:{line:11,column:26}}},fnMap:{'0':{name:'bind',decl:{start:{line:10,column:30},end:{line:10,column:34}},loc:{start:{line:10,column:48},end:{line:12,column:1}},line:10}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function bind(fn,context){cov_l36ddaplv.f[0]++;cov_l36ddaplv.s[0]++;return fn.bind(context);}));\n\n//# sourceURL=webpack://fun/./src/bind.js?");

/***/ }),

/***/ "./src/boolean/F.js":
/*!**************************!*\
  !*** ./src/boolean/F.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../always */ \"./src/always.js\");\nvar cov_mfz1df6m7=function(){var path='/mnt/sda/git/fun/src/boolean/F.js',hash='32ac5f09fc6da7fb16664ec084d0869c0b8f1dd1',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/boolean/F.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_always__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false));\n\n//# sourceURL=webpack://fun/./src/boolean/F.js?");

/***/ }),

/***/ "./src/boolean/T.js":
/*!**************************!*\
  !*** ./src/boolean/T.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../always */ \"./src/always.js\");\nvar cov_1n2614x0ej=function(){var path='/mnt/sda/git/fun/src/boolean/T.js',hash='cadeb2569ecc2eba0677e5e37f4c370c5b8f31e8',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/boolean/T.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_always__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true));\n\n//# sourceURL=webpack://fun/./src/boolean/T.js?");

/***/ }),

/***/ "./src/boolean/both.js":
/*!*****************************!*\
  !*** ./src/boolean/both.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lift */ \"./src/lift.js\");\n/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../and */ \"./src/and.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_2mm9rcj091=function(){var path='/mnt/sda/git/fun/src/boolean/both.js',hash='6a9f42c98512296e28e9e2b1e185117a1a105325',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/boolean/both.js',statementMap:{'0':{start:{line:15,column:2},end:{line:17,column:26}},'1':{start:{line:16,column:4},end:{line:16,column:68}}},fnMap:{'0':{name:'both',decl:{start:{line:14,column:30},end:{line:14,column:34}},loc:{start:{line:14,column:45},end:{line:18,column:1}},line:14},'1':{name:'_both',decl:{start:{line:15,column:40},end:{line:15,column:45}},loc:{start:{line:15,column:48},end:{line:17,column:3}},line:15}},branchMap:{'0':{loc:{start:{line:15,column:9},end:{line:17,column:25}},type:'cond-expr',locations:[{start:{line:15,column:31},end:{line:17,column:3}},{start:{line:17,column:6},end:{line:17,column:25}}],line:15},'1':{loc:{start:{line:16,column:11},end:{line:16,column:67}},type:'binary-expr',locations:[{start:{line:16,column:11},end:{line:16,column:37}},{start:{line:16,column:41},end:{line:16,column:67}}],line:16}},s:{'0':0,'1':0},f:{'0':0,'1':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function both(fn1,fn2){cov_2mm9rcj091.f[0]++;cov_2mm9rcj091.s[0]++;return Object(_is__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Function')(fn1)?(cov_2mm9rcj091.b[0][0]++,function _both(){cov_2mm9rcj091.f[1]++;cov_2mm9rcj091.s[1]++;return(cov_2mm9rcj091.b[1][0]++,fn1.apply(this,arguments))&&(cov_2mm9rcj091.b[1][1]++,fn2.apply(this,arguments));}):(cov_2mm9rcj091.b[0][1]++,Object(_lift__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_and__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fn1,fn2));}));\n\n//# sourceURL=webpack://fun/./src/boolean/both.js?");

/***/ }),

/***/ "./src/boolean/is.js":
/*!***************************!*\
  !*** ./src/boolean/is.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_pkbtraem7=function(){var path='/mnt/sda/git/fun/src/boolean/is.js',hash='305ea71680ca2f95fc3fbab2286863207010f285',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/boolean/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Boolean'));\n\n//# sourceURL=webpack://fun/./src/boolean/is.js?");

/***/ }),

/***/ "./src/call.js":
/*!*********************!*\
  !*** ./src/call.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_29gyatlikd=function(){var path='/mnt/sda/git/fun/src/call.js',hash='503efa9a6ec4470a0deb4037df2800edec5673ea',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/call.js',statementMap:{'0':{start:{line:9,column:2},end:{line:9,column:51}}},fnMap:{'0':{name:'call',decl:{start:{line:8,column:30},end:{line:8,column:34}},loc:{start:{line:8,column:39},end:{line:10,column:1}},line:8}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function call(fn){cov_29gyatlikd.f[0]++;cov_29gyatlikd.s[0]++;return fn.apply(fn,[].slice.call(arguments,1));}));\n\n//# sourceURL=webpack://fun/./src/call.js?");

/***/ }),

/***/ "./src/complement.js":
/*!***************************!*\
  !*** ./src/complement.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lift */ \"./src/lift.js\");\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not */ \"./src/not.js\");\nvar cov_230s7ve5fu=function(){var path='/mnt/sda/git/fun/src/complement.js',hash='7f696af6a8c8af18f1f792707fdd80c985fc4563',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/complement.js',statementMap:{'0':{start:{line:20,column:17},end:{line:20,column:26}}},fnMap:{},branchMap:{},s:{'0':0},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var complement=(cov_230s7ve5fu.s[0]++,Object(_lift__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_not__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));/* harmony default export */ __webpack_exports__[\"default\"] = (complement);\n\n//# sourceURL=webpack://fun/./src/complement.js?");

/***/ }),

/***/ "./src/compose.js":
/*!************************!*\
  !*** ./src/compose.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return compose; });\nvar cov_2039lyf15r=function(){var path=\"/mnt/sda/git/fun/src/compose.js\",hash=\"e13ee7c23a609342753a1e45b5929a3a2722d7bf\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/mnt/sda/git/fun/src/compose.js\",statementMap:{\"0\":{start:{line:6,column:12},end:{line:6,column:49}},\"1\":{start:{line:7,column:2},end:{line:18,column:4}},\"2\":{start:{line:8,column:15},end:{line:8,column:34}},\"3\":{start:{line:9,column:17},end:{line:9,column:46}},\"4\":{start:{line:10,column:12},end:{line:10,column:26}},\"5\":{start:{line:12,column:4},end:{line:15,column:5}},\"6\":{start:{line:13,column:15},end:{line:13,column:21}},\"7\":{start:{line:14,column:6},end:{line:14,column:38}},\"8\":{start:{line:17,column:4},end:{line:17,column:21}}},fnMap:{\"0\":{name:\"compose\",decl:{start:{line:5,column:24},end:{line:5,column:31}},loc:{start:{line:5,column:34},end:{line:19,column:1}},line:5},\"1\":{name:\"_compose\",decl:{start:{line:7,column:18},end:{line:7,column:26}},loc:{start:{line:7,column:29},end:{line:18,column:3}},line:7}},branchMap:{},s:{\"0\":0,\"1\":0,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0,\"7\":0,\"8\":0},f:{\"0\":0,\"1\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function compose(){cov_2039lyf15r.f[0]++;var fns=(cov_2039lyf15r.s[0]++,Array.prototype.slice.call(arguments));cov_2039lyf15r.s[1]++;return function _compose(){cov_2039lyf15r.f[1]++;var init=(cov_2039lyf15r.s[2]++,fns[fns.length-1]);var result=(cov_2039lyf15r.s[3]++,[init.apply(init,arguments)]);var i=(cov_2039lyf15r.s[4]++,fns.length-2);cov_2039lyf15r.s[5]++;for(i;i>=0;--i){var fn=(cov_2039lyf15r.s[6]++,fns[i]);cov_2039lyf15r.s[7]++;result=[fn.apply(fn,result)];}cov_2039lyf15r.s[8]++;return result[0];};};\n\n//# sourceURL=webpack://fun/./src/compose.js?");

/***/ }),

/***/ "./src/concat.js":
/*!***********************!*\
  !*** ./src/concat.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony import */ var _string_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string/concat */ \"./src/string/concat.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\nvar cov_22gpsscbh9=function(){var path='/mnt/sda/git/fun/src/concat.js',hash='97bd145f7b382df74bed188809ec5541a3098520',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/concat.js',statementMap:{'0':{start:{line:16,column:16},end:{line:19,column:3}},'1':{start:{line:20,column:2},end:{line:20,column:32}}},fnMap:{'0':{name:'concat',decl:{start:{line:15,column:30},end:{line:15,column:36}},loc:{start:{line:15,column:43},end:{line:21,column:1}},line:15}},branchMap:{},s:{'0':0,'1':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function concat(a,b){cov_22gpsscbh9.f[0]++;var typeMap=(cov_22gpsscbh9.s[0]++,{'String':_string_concat__WEBPACK_IMPORTED_MODULE_2__[\"default\"],'Array':_array_concat__WEBPACK_IMPORTED_MODULE_1__[\"default\"]});cov_22gpsscbh9.s[1]++;return typeMap[Object(_type__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(a)](a,b);}));\n\n//# sourceURL=webpack://fun/./src/concat.js?");

/***/ }),

/***/ "./src/cond.js":
/*!*********************!*\
  !*** ./src/cond.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cond; });\nvar cov_nkbp4uks7=function(){var path=\"/mnt/sda/git/fun/src/cond.js\",hash=\"757ddd9d72143fa211fa6699858589be66c1f19f\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/mnt/sda/git/fun/src/cond.js\",statementMap:{\"0\":{start:{line:7,column:2},end:{line:11,column:4}},\"1\":{start:{line:8,column:4},end:{line:10,column:5}},\"2\":{start:{line:9,column:6},end:{line:9,column:56}},\"3\":{start:{line:9,column:30},end:{line:9,column:56}}},fnMap:{\"0\":{name:\"cond\",decl:{start:{line:6,column:24},end:{line:6,column:28}},loc:{start:{line:6,column:36},end:{line:12,column:1}},line:6},\"1\":{name:\"(anonymous_1)\",decl:{start:{line:7,column:9},end:{line:7,column:10}},loc:{start:{line:7,column:26},end:{line:11,column:3}},line:7}},branchMap:{\"0\":{loc:{start:{line:9,column:6},end:{line:9,column:56}},type:\"if\",locations:[{start:{line:9,column:6},end:{line:9,column:56}},{start:{line:9,column:6},end:{line:9,column:56}}],line:9}},s:{\"0\":0,\"1\":0,\"2\":0,\"3\":0},f:{\"0\":0,\"1\":0},b:{\"0\":[0,0]},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function cond(conds){cov_nkbp4uks7.f[0]++;cov_nkbp4uks7.s[0]++;return function(value){cov_nkbp4uks7.f[1]++;cov_nkbp4uks7.s[1]++;for(var i=0;i<conds.length;i++){cov_nkbp4uks7.s[2]++;if(conds[i][0](value)){cov_nkbp4uks7.b[0][0]++;cov_nkbp4uks7.s[3]++;return conds[i][1](value);}else{cov_nkbp4uks7.b[0][1]++;}}};}\n\n//# sourceURL=webpack://fun/./src/cond.js?");

/***/ }),

/***/ "./src/curry.js":
/*!**********************!*\
  !*** ./src/curry.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return curry; });\nvar cov_2e8kvyfpjq=function(){var path=\"/mnt/sda/git/fun/src/curry.js\",hash=\"a2713e52e5af6e4e24ae5a34bbb3bb950790ac67\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/mnt/sda/git/fun/src/curry.js\",statementMap:{\"0\":{start:{line:8,column:16},end:{line:8,column:26}},\"1\":{start:{line:10,column:2},end:{line:12,column:3}},\"2\":{start:{line:11,column:4},end:{line:11,column:15}},\"3\":{start:{line:14,column:2},end:{line:14,column:28}},\"4\":{start:{line:17,column:15},end:{line:17,column:31}},\"5\":{start:{line:19,column:4},end:{line:19,column:80}},\"6\":{start:{line:23,column:4},end:{line:25,column:6}},\"7\":{start:{line:24,column:6},end:{line:24,column:65}}},fnMap:{\"0\":{name:\"curry\",decl:{start:{line:7,column:24},end:{line:7,column:29}},loc:{start:{line:7,column:35},end:{line:27,column:1}},line:7},\"1\":{name:\"recurse\",decl:{start:{line:16,column:11},end:{line:16,column:18}},loc:{start:{line:16,column:30},end:{line:20,column:3}},line:16},\"2\":{name:\"createRecurser\",decl:{start:{line:22,column:11},end:{line:22,column:25}},loc:{start:{line:22,column:31},end:{line:26,column:3}},line:22},\"3\":{name:\"(anonymous_3)\",decl:{start:{line:23,column:11},end:{line:23,column:12}},loc:{start:{line:23,column:23},end:{line:25,column:5}},line:23}},branchMap:{\"0\":{loc:{start:{line:10,column:2},end:{line:12,column:3}},type:\"if\",locations:[{start:{line:10,column:2},end:{line:12,column:3}},{start:{line:10,column:2},end:{line:12,column:3}}],line:10},\"1\":{loc:{start:{line:19,column:11},end:{line:19,column:79}},type:\"cond-expr\",locations:[{start:{line:19,column:35},end:{line:19,column:55}},{start:{line:19,column:58},end:{line:19,column:79}}],line:19}},s:{\"0\":0,\"1\":0,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0,\"7\":0},f:{\"0\":0,\"1\":0,\"2\":0,\"3\":0},b:{\"0\":[0,0],\"1\":[0,0]},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function curry(fun){cov_2e8kvyfpjq.f[0]++;var argslen=(cov_2e8kvyfpjq.s[0]++,fun.length);cov_2e8kvyfpjq.s[1]++;if(argslen===0){cov_2e8kvyfpjq.b[0][0]++;cov_2e8kvyfpjq.s[2]++;return fun;}else{cov_2e8kvyfpjq.b[0][1]++;}cov_2e8kvyfpjq.s[3]++;return createRecurser([]);function recurse(acc,args){cov_2e8kvyfpjq.f[1]++;var _acc=(cov_2e8kvyfpjq.s[4]++,acc.concat(args));cov_2e8kvyfpjq.s[5]++;return _acc.length<argslen?(cov_2e8kvyfpjq.b[1][0]++,createRecurser(_acc)):(cov_2e8kvyfpjq.b[1][1]++,fun.apply(this,_acc));}function createRecurser(acc){cov_2e8kvyfpjq.f[2]++;cov_2e8kvyfpjq.s[6]++;return function(){cov_2e8kvyfpjq.f[3]++;cov_2e8kvyfpjq.s[7]++;return recurse(acc,Array.prototype.slice.call(arguments));};}}\n\n//# sourceURL=webpack://fun/./src/curry.js?");

/***/ }),

/***/ "./src/date/diffDate.js":
/*!******************************!*\
  !*** ./src/date/diffDate.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_tc00pxdew=function(){var path='/mnt/sda/git/fun/src/date/diffDate.js',hash='0c00d1dfa5ff584cd04a3e599a6dcef557f669bb',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/date/diffDate.js',statementMap:{'0':{start:{line:10,column:2},end:{line:10,column:61}}},fnMap:{'0':{name:'diffDate',decl:{start:{line:9,column:30},end:{line:9,column:38}},loc:{start:{line:9,column:51},end:{line:11,column:1}},line:9}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function diffDate(start,end){cov_tc00pxdew.f[0]++;cov_tc00pxdew.s[0]++;return new Date(start).getTime()-new Date(end).getTime();}));\n\n//# sourceURL=webpack://fun/./src/date/diffDate.js?");

/***/ }),

/***/ "./src/date/is.js":
/*!************************!*\
  !*** ./src/date/is.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_2ohoitijf9=function(){var path='/mnt/sda/git/fun/src/date/is.js',hash='53b4634199e58a18996d0af6c78af74f2009cd1b',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/date/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Date'));\n\n//# sourceURL=webpack://fun/./src/date/is.js?");

/***/ }),

/***/ "./src/date/isFutureDate.js":
/*!**********************************!*\
  !*** ./src/date/isFutureDate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _diffDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diffDate */ \"./src/date/diffDate.js\");\nvar cov_2q4420b9ju=function(){var path='/mnt/sda/git/fun/src/date/isFutureDate.js',hash='c387bb2c339a74cc85653311013c05d2ed66cccf',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/date/isFutureDate.js',statementMap:{'0':{start:{line:6,column:2},end:{line:6,column:37}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:5,column:16},end:{line:5,column:17}},loc:{start:{line:5,column:29},end:{line:7,column:1}},line:5}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (function(d){cov_2q4420b9ju.f[0]++;cov_2q4420b9ju.s[0]++;return Object(_diffDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date())(d)<0;});\n\n//# sourceURL=webpack://fun/./src/date/isFutureDate.js?");

/***/ }),

/***/ "./src/date/isValid.js":
/*!*****************************!*\
  !*** ./src/date/isValid.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isValid; });\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ \"./src/date/is.js\");\nvar cov_1s61sxltpo=function(){var path='/mnt/sda/git/fun/src/date/isValid.js',hash='6993418d1100ad24c62e33071da30dd15a0a1dd4',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/date/isValid.js',statementMap:{'0':{start:{line:7,column:2},end:{line:7,column:44}}},fnMap:{'0':{name:'isValid',decl:{start:{line:5,column:24},end:{line:5,column:31}},loc:{start:{line:5,column:35},end:{line:8,column:1}},line:5}},branchMap:{'0':{loc:{start:{line:7,column:9},end:{line:7,column:43}},type:'binary-expr',locations:[{start:{line:7,column:9},end:{line:7,column:18}},{start:{line:7,column:22},end:{line:7,column:43}}],line:7}},s:{'0':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function isValid(x){cov_1s61sxltpo.f[0]++;cov_1s61sxltpo.s[0]++;return(cov_1s61sxltpo.b[0][0]++,Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x))&&(cov_1s61sxltpo.b[0][1]++,isFinite(x.valueOf()));};\n\n//# sourceURL=webpack://fun/./src/date/isValid.js?");

/***/ }),

/***/ "./src/date/toDay.js":
/*!***************************!*\
  !*** ./src/date/toDay.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_1tkmy1e1up=function(){var path=\"/mnt/sda/git/fun/src/date/toDay.js\",hash=\"246b8783c2141953949f4e2c730f9e4c9ec7b33b\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/mnt/sda/git/fun/src/date/toDay.js\",statementMap:{\"0\":{start:{line:5,column:2},end:{line:5,column:22}}},fnMap:{\"0\":{name:\"(anonymous_0)\",decl:{start:{line:4,column:16},end:{line:4,column:17}},loc:{start:{line:4,column:29},end:{line:6,column:1}},line:4}},branchMap:{},s:{\"0\":0},f:{\"0\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (function(d){cov_1tkmy1e1up.f[0]++;cov_1tkmy1e1up.s[0]++;return d/86400000;});\n\n//# sourceURL=webpack://fun/./src/date/toDay.js?");

/***/ }),

/***/ "./src/date/toHour.js":
/*!****************************!*\
  !*** ./src/date/toHour.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_2esj5o7wnw=function(){var path=\"/mnt/sda/git/fun/src/date/toHour.js\",hash=\"10fcc0a9acc592d415700b85abfb86ee899e6485\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/mnt/sda/git/fun/src/date/toHour.js\",statementMap:{\"0\":{start:{line:5,column:2},end:{line:5,column:21}}},fnMap:{\"0\":{name:\"(anonymous_0)\",decl:{start:{line:4,column:16},end:{line:4,column:17}},loc:{start:{line:4,column:29},end:{line:6,column:1}},line:4}},branchMap:{},s:{\"0\":0},f:{\"0\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (function(d){cov_2esj5o7wnw.f[0]++;cov_2esj5o7wnw.s[0]++;return d/3600000;});\n\n//# sourceURL=webpack://fun/./src/date/toHour.js?");

/***/ }),

/***/ "./src/date/toMinutes.js":
/*!*******************************!*\
  !*** ./src/date/toMinutes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_janeqabsc=function(){var path=\"/mnt/sda/git/fun/src/date/toMinutes.js\",hash=\"7ed687c9c62457012bee87ea65c1d2a9801c039b\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/mnt/sda/git/fun/src/date/toMinutes.js\",statementMap:{\"0\":{start:{line:5,column:2},end:{line:5,column:19}}},fnMap:{\"0\":{name:\"(anonymous_0)\",decl:{start:{line:4,column:16},end:{line:4,column:17}},loc:{start:{line:4,column:29},end:{line:6,column:1}},line:4}},branchMap:{},s:{\"0\":0},f:{\"0\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (function(d){cov_janeqabsc.f[0]++;cov_janeqabsc.s[0]++;return d/60000;});\n\n//# sourceURL=webpack://fun/./src/date/toMinutes.js?");

/***/ }),

/***/ "./src/date/toSeconds.js":
/*!*******************************!*\
  !*** ./src/date/toSeconds.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_1fojujdivn=function(){var path=\"/mnt/sda/git/fun/src/date/toSeconds.js\",hash=\"8f79913cf0bc06fe8d8a6966b39d477c17de07ce\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/mnt/sda/git/fun/src/date/toSeconds.js\",statementMap:{\"0\":{start:{line:5,column:2},end:{line:5,column:18}}},fnMap:{\"0\":{name:\"(anonymous_0)\",decl:{start:{line:4,column:16},end:{line:4,column:17}},loc:{start:{line:4,column:29},end:{line:6,column:1}},line:4}},branchMap:{},s:{\"0\":0},f:{\"0\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (function(d){cov_1fojujdivn.f[0]++;cov_1fojujdivn.s[0]++;return d/1000;});\n\n//# sourceURL=webpack://fun/./src/date/toSeconds.js?");

/***/ }),

/***/ "./src/defaultTo.js":
/*!**************************!*\
  !*** ./src/defaultTo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1dc9tf0m09=function(){var path='/mnt/sda/git/fun/src/defaultTo.js',hash='bb58bc7cc2180e3e49c131830ba2449bcce70b82',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/defaultTo.js',statementMap:{'0':{start:{line:15,column:2},end:{line:15,column:38}}},fnMap:{'0':{name:'defaultTo',decl:{start:{line:13,column:30},end:{line:13,column:39}},loc:{start:{line:13,column:46},end:{line:16,column:1}},line:13}},branchMap:{'0':{loc:{start:{line:15,column:9},end:{line:15,column:37}},type:'cond-expr',locations:[{start:{line:15,column:32},end:{line:15,column:33}},{start:{line:15,column:36},end:{line:15,column:37}}],line:15},'1':{loc:{start:{line:15,column:9},end:{line:15,column:29}},type:'binary-expr',locations:[{start:{line:15,column:9},end:{line:15,column:18}},{start:{line:15,column:22},end:{line:15,column:29}}],line:15}},s:{'0':0},f:{'0':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function defaultTo(d,v){cov_1dc9tf0m09.f[0]++;cov_1dc9tf0m09.s[0]++;return(cov_1dc9tf0m09.b[1][0]++,v==null)||(cov_1dc9tf0m09.b[1][1]++,v!==v)?(cov_1dc9tf0m09.b[0][0]++,d):(cov_1dc9tf0m09.b[0][1]++,v);}));\n\n//# sourceURL=webpack://fun/./src/defaultTo.js?");

/***/ }),

/***/ "./src/empty.js":
/*!**********************!*\
  !*** ./src/empty.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return empty; });\nvar cov_1mtfuxgtk1=function(){var path=\"/mnt/sda/git/fun/src/empty.js\",hash=\"203d65d517599b67ab14d7cfc718075376bce519\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/mnt/sda/git/fun/src/empty.js\",statementMap:{\"0\":{start:{line:7,column:2},end:{line:7,column:29}}},fnMap:{\"0\":{name:\"empty\",decl:{start:{line:6,column:24},end:{line:6,column:29}},loc:{start:{line:6,column:33},end:{line:8,column:1}},line:6}},branchMap:{},s:{\"0\":0},f:{\"0\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function empty(x){cov_1mtfuxgtk1.f[0]++;cov_1mtfuxgtk1.s[0]++;return new x.constructor();};\n\n//# sourceURL=webpack://fun/./src/empty.js?");

/***/ }),

/***/ "./src/equals.js":
/*!***********************!*\
  !*** ./src/equals.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exists */ \"./src/exists.js\");\n/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identical */ \"./src/identical.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not */ \"./src/not.js\");\n/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./or */ \"./src/or.js\");\n/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object/is */ \"./src/object/is.js\");\n/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/is */ \"./src/array/is.js\");\n/* harmony import */ var _boolean_is__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./boolean/is */ \"./src/boolean/is.js\");\n/* harmony import */ var _number_is__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./number/is */ \"./src/number/is.js\");\n/* harmony import */ var _string_is__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./string/is */ \"./src/string/is.js\");\n/* harmony import */ var _date_is__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./date/is */ \"./src/date/is.js\");\n/* harmony import */ var _array_equals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/equals */ \"./src/array/equals.js\");\n/* harmony import */ var _object_equals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./object/equals */ \"./src/object/equals.js\");\nvar cov_1uv02405m2=function(){var path='/mnt/sda/git/fun/src/equals.js',hash='80e311baf7e72ea9882af77f4da8baa1553aee0e',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/equals.js',statementMap:{'0':{start:{line:35,column:2},end:{line:35,column:35}},'1':{start:{line:35,column:23},end:{line:35,column:35}},'2':{start:{line:36,column:2},end:{line:36,column:40}},'3':{start:{line:36,column:27},end:{line:36,column:40}},'4':{start:{line:37,column:2},end:{line:37,column:55}},'5':{start:{line:37,column:42},end:{line:37,column:55}},'6':{start:{line:38,column:2},end:{line:38,column:52}},'7':{start:{line:38,column:39},end:{line:38,column:52}},'8':{start:{line:40,column:2},end:{line:42,column:3}},'9':{start:{line:41,column:4},end:{line:41,column:47}},'10':{start:{line:44,column:2},end:{line:48,column:3}},'11':{start:{line:45,column:4},end:{line:45,column:29}},'12':{start:{line:46,column:9},end:{line:48,column:3}},'13':{start:{line:47,column:4},end:{line:47,column:30}},'14':{start:{line:50,column:2},end:{line:50,column:15}}},fnMap:{'0':{name:'equals',decl:{start:{line:34,column:30},end:{line:34,column:36}},loc:{start:{line:34,column:43},end:{line:51,column:1}},line:34}},branchMap:{'0':{loc:{start:{line:35,column:2},end:{line:35,column:35}},type:'if',locations:[{start:{line:35,column:2},end:{line:35,column:35}},{start:{line:35,column:2},end:{line:35,column:35}}],line:35},'1':{loc:{start:{line:36,column:2},end:{line:36,column:40}},type:'if',locations:[{start:{line:36,column:2},end:{line:36,column:40}},{start:{line:36,column:2},end:{line:36,column:40}}],line:36},'2':{loc:{start:{line:37,column:2},end:{line:37,column:55}},type:'if',locations:[{start:{line:37,column:2},end:{line:37,column:55}},{start:{line:37,column:2},end:{line:37,column:55}}],line:37},'3':{loc:{start:{line:38,column:2},end:{line:38,column:52}},type:'if',locations:[{start:{line:38,column:2},end:{line:38,column:52}},{start:{line:38,column:2},end:{line:38,column:52}}],line:38},'4':{loc:{start:{line:40,column:2},end:{line:42,column:3}},type:'if',locations:[{start:{line:40,column:2},end:{line:42,column:3}},{start:{line:40,column:2},end:{line:42,column:3}}],line:40},'5':{loc:{start:{line:40,column:6},end:{line:40,column:61}},type:'binary-expr',locations:[{start:{line:40,column:6},end:{line:40,column:17}},{start:{line:40,column:21},end:{line:40,column:33}},{start:{line:40,column:37},end:{line:40,column:48}},{start:{line:40,column:52},end:{line:40,column:61}}],line:40},'6':{loc:{start:{line:44,column:2},end:{line:48,column:3}},type:'if',locations:[{start:{line:44,column:2},end:{line:48,column:3}},{start:{line:44,column:2},end:{line:48,column:3}}],line:44},'7':{loc:{start:{line:46,column:9},end:{line:48,column:3}},type:'if',locations:[{start:{line:46,column:9},end:{line:48,column:3}},{start:{line:46,column:9},end:{line:48,column:3}}],line:46}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0},f:{'0':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0,0,0],'6':[0,0],'7':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function equals(x,y){cov_1uv02405m2.f[0]++;cov_1uv02405m2.s[0]++;if(Object(_identical__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x,y)){cov_1uv02405m2.b[0][0]++;cov_1uv02405m2.s[1]++;return true;}else{cov_1uv02405m2.b[0][1]++;}cov_1uv02405m2.s[2]++;if(Object(_type__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(x)!==Object(_type__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(y)){cov_1uv02405m2.b[1][0]++;cov_1uv02405m2.s[3]++;return false;}else{cov_1uv02405m2.b[1][1]++;}cov_1uv02405m2.s[4]++;if(Object(_or__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_not__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x)),Object(_not__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(y)))){cov_1uv02405m2.b[2][0]++;cov_1uv02405m2.s[5]++;return false;}else{cov_1uv02405m2.b[2][1]++;}cov_1uv02405m2.s[6]++;if(x.constructor!==y.constructor){cov_1uv02405m2.b[3][0]++;cov_1uv02405m2.s[7]++;return false;}else{cov_1uv02405m2.b[3][1]++;}cov_1uv02405m2.s[8]++;if((cov_1uv02405m2.b[5][0]++,Object(_string_is__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(x))||(cov_1uv02405m2.b[5][1]++,Object(_boolean_is__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(x))||(cov_1uv02405m2.b[5][2]++,Object(_number_is__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(x))||(cov_1uv02405m2.b[5][3]++,Object(_date_is__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(x))){cov_1uv02405m2.b[4][0]++;cov_1uv02405m2.s[9]++;return Object(_identical__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x.valueOf(),y.valueOf());}else{cov_1uv02405m2.b[4][1]++;}cov_1uv02405m2.s[10]++;if(Object(_array_is__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(x)){cov_1uv02405m2.b[6][0]++;cov_1uv02405m2.s[11]++;return Object(_array_equals__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(x,y);}else{cov_1uv02405m2.b[6][1]++;cov_1uv02405m2.s[12]++;if(Object(_object_is__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(x)){cov_1uv02405m2.b[7][0]++;cov_1uv02405m2.s[13]++;return Object(_object_equals__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(x,y);}else{cov_1uv02405m2.b[7][1]++;}}cov_1uv02405m2.s[14]++;return false;}));\n\n//# sourceURL=webpack://fun/./src/equals.js?");

/***/ }),

/***/ "./src/exists.js":
/*!***********************!*\
  !*** ./src/exists.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\nvar cov_jk97sp3xk=function(){var path='/mnt/sda/git/fun/src/exists.js',hash='f890c00742b217dcdfd5dd8288c0ec166c888e6e',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/exists.js',statementMap:{'0':{start:{line:14,column:2},end:{line:14,column:22}}},fnMap:{'0':{name:'exists',decl:{start:{line:13,column:31},end:{line:13,column:37}},loc:{start:{line:13,column:41},end:{line:15,column:1}},line:13}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function exists(x){cov_jk97sp3xk.f[0]++;cov_jk97sp3xk.s[0]++;return!(x==null);}));\n\n//# sourceURL=webpack://fun/./src/exists.js?");

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/filter */ \"./src/array/filter.js\");\n/* harmony import */ var _object_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/filter */ \"./src/object/filter.js\");\n/* harmony import */ var _map_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/filter */ \"./src/map/filter.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\nvar cov_2a2hr9s56e=function(){var path='/mnt/sda/git/fun/src/filter.js',hash='3bff967a98d76785bf1f7199f7e0b39271816ed9',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/filter.js',statementMap:{'0':{start:{line:14,column:2},end:{line:32,column:3}},'1':{start:{line:21,column:6},end:{line:21,column:33}},'2':{start:{line:26,column:6},end:{line:26,column:30}},'3':{start:{line:31,column:6},end:{line:31,column:32}}},fnMap:{'0':{name:'filter',decl:{start:{line:13,column:30},end:{line:13,column:36}},loc:{start:{line:13,column:44},end:{line:33,column:1}},line:13}},branchMap:{'0':{loc:{start:{line:14,column:2},end:{line:32,column:3}},type:'switch',locations:[{start:{line:20,column:4},end:{line:21,column:33}},{start:{line:25,column:4},end:{line:26,column:30}},{start:{line:30,column:4},end:{line:31,column:32}}],line:14}},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0},b:{'0':[0,0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function filter(fn,a){cov_2a2hr9s56e.f[0]++;cov_2a2hr9s56e.s[0]++;switch(Object(_type__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(a)){case'Object':cov_2a2hr9s56e.b[0][0]++;cov_2a2hr9s56e.s[1]++;return Object(_object_filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fn,a);case'Map':cov_2a2hr9s56e.b[0][1]++;cov_2a2hr9s56e.s[2]++;return Object(_map_filter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(fn,a);default:cov_2a2hr9s56e.b[0][2]++;cov_2a2hr9s56e.s[3]++;return Object(_array_filter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fn,a);}}));\n\n//# sourceURL=webpack://fun/./src/filter.js?");

/***/ }),

/***/ "./src/findIndex.js":
/*!**************************!*\
  !*** ./src/findIndex.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1bqntglro1=function(){var path='/mnt/sda/git/fun/src/findIndex.js',hash='d73f98a0f9c0ba8e659424ef38cfed6e0e0fdb7f',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/findIndex.js',statementMap:{'0':{start:{line:14,column:10},end:{line:14,column:11}},'1':{start:{line:15,column:10},end:{line:15,column:18}},'2':{start:{line:17,column:2},end:{line:23,column:3}},'3':{start:{line:18,column:4},end:{line:20,column:5}},'4':{start:{line:19,column:6},end:{line:19,column:15}},'5':{start:{line:22,column:4},end:{line:22,column:11}},'6':{start:{line:25,column:2},end:{line:25,column:12}}},fnMap:{'0':{name:'findIndex',decl:{start:{line:13,column:30},end:{line:13,column:39}},loc:{start:{line:13,column:47},end:{line:26,column:1}},line:13}},branchMap:{'0':{loc:{start:{line:18,column:4},end:{line:20,column:5}},type:'if',locations:[{start:{line:18,column:4},end:{line:20,column:5}},{start:{line:18,column:4},end:{line:20,column:5}}],line:18}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function findIndex(fn,a){cov_1bqntglro1.f[0]++;var i=(cov_1bqntglro1.s[0]++,0);var l=(cov_1bqntglro1.s[1]++,a.length);cov_1bqntglro1.s[2]++;while(i<l){cov_1bqntglro1.s[3]++;if(fn(a[i])){cov_1bqntglro1.b[0][0]++;cov_1bqntglro1.s[4]++;return i;}else{cov_1bqntglro1.b[0][1]++;}cov_1bqntglro1.s[5]++;i+=1;}cov_1bqntglro1.s[6]++;return-1;}));\n\n//# sourceURL=webpack://fun/./src/findIndex.js?");

/***/ }),

/***/ "./src/first.js":
/*!**********************!*\
  !*** ./src/first.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\nvar cov_1duvb4wkpz=function(){var path='/mnt/sda/git/fun/src/first.js',hash='ebf41d7175a33f1b111010e072ddbb3785459f84',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/first.js',statementMap:{'0':{start:{line:12,column:2},end:{line:12,column:42}}},fnMap:{'0':{name:'first',decl:{start:{line:11,column:31},end:{line:11,column:36}},loc:{start:{line:11,column:40},end:{line:13,column:1}},line:11}},branchMap:{'0':{loc:{start:{line:12,column:9},end:{line:12,column:41}},type:'cond-expr',locations:[{start:{line:12,column:25},end:{line:12,column:29}},{start:{line:12,column:32},end:{line:12,column:41}}],line:12},'1':{loc:{start:{line:12,column:9},end:{line:12,column:22}},type:'binary-expr',locations:[{start:{line:12,column:9},end:{line:12,column:10}},{start:{line:12,column:14},end:{line:12,column:22}}],line:12}},s:{'0':0},f:{'0':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function first(a){cov_1duvb4wkpz.f[0]++;cov_1duvb4wkpz.s[0]++;return(cov_1duvb4wkpz.b[1][0]++,a)&&(cov_1duvb4wkpz.b[1][1]++,a.length)?(cov_1duvb4wkpz.b[0][0]++,a[0]):(cov_1duvb4wkpz.b[0][1]++,undefined);}));\n\n//# sourceURL=webpack://fun/./src/first.js?");

/***/ }),

/***/ "./src/flatMap.js":
/*!************************!*\
  !*** ./src/flatMap.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fold */ \"./src/fold.js\");\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ \"./src/empty.js\");\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concat */ \"./src/concat.js\");\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is */ \"./src/is.js\");\nvar cov_12d7ju4g7c=function(){var path='/mnt/sda/git/fun/src/flatMap.js',hash='9f22d85c709d0a83312bb9031d628f164ffa9c17',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/flatMap.js',statementMap:{'0':{start:{line:6,column:17},end:{line:6,column:31}},'1':{start:{line:14,column:2},end:{line:18,column:3}},'2':{start:{line:15,column:4},end:{line:17,column:6}},'3':{start:{line:16,column:6},end:{line:16,column:25}},'4':{start:{line:20,column:2},end:{line:22,column:3}},'5':{start:{line:21,column:4},end:{line:21,column:25}},'6':{start:{line:24,column:2},end:{line:26,column:18}},'7':{start:{line:25,column:4},end:{line:25,column:30}}},fnMap:{'0':{name:'flatMap',decl:{start:{line:13,column:30},end:{line:13,column:37}},loc:{start:{line:13,column:45},end:{line:27,column:1}},line:13},'1':{name:'(anonymous_1)',decl:{start:{line:15,column:11},end:{line:15,column:12}},loc:{start:{line:15,column:24},end:{line:17,column:5}},line:15},'2':{name:'(anonymous_2)',decl:{start:{line:24,column:14},end:{line:24,column:15}},loc:{start:{line:24,column:32},end:{line:26,column:3}},line:24}},branchMap:{'0':{loc:{start:{line:14,column:2},end:{line:18,column:3}},type:'if',locations:[{start:{line:14,column:2},end:{line:18,column:3}},{start:{line:14,column:2},end:{line:18,column:3}}],line:14},'1':{loc:{start:{line:20,column:2},end:{line:22,column:3}},type:'if',locations:[{start:{line:20,column:2},end:{line:22,column:3}},{start:{line:20,column:2},end:{line:22,column:3}}],line:20}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0},f:{'0':0,'1':0,'2':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var isFunction=(cov_12d7ju4g7c.s[0]++,Object(_is__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('Function'));/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function flatMap(fn,a){cov_12d7ju4g7c.f[0]++;cov_12d7ju4g7c.s[1]++;if(isFunction(a)){cov_12d7ju4g7c.b[0][0]++;cov_12d7ju4g7c.s[2]++;return function(x){cov_12d7ju4g7c.f[1]++;cov_12d7ju4g7c.s[3]++;return fn(a(x))(x);};}else{cov_12d7ju4g7c.b[0][1]++;}cov_12d7ju4g7c.s[4]++;if(isFunction(a.flatMap)){cov_12d7ju4g7c.b[1][0]++;cov_12d7ju4g7c.s[5]++;return a.flatMap(fn);}else{cov_12d7ju4g7c.b[1][1]++;}cov_12d7ju4g7c.s[6]++;return Object(_fold__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(acc,x){cov_12d7ju4g7c.f[2]++;cov_12d7ju4g7c.s[7]++;return Object(_concat__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(acc,fn(x));},Object(_empty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a),a);}));\n\n//# sourceURL=webpack://fun/./src/flatMap.js?");

/***/ }),

/***/ "./src/fold.js":
/*!*********************!*\
  !*** ./src/fold.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/fold */ \"./src/array/fold.js\");\n/* harmony import */ var _object_fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/fold */ \"./src/object/fold.js\");\n/* harmony import */ var _string_fold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string/fold */ \"./src/string/fold.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\nvar cov_24a0886bu4=function(){var path='/mnt/sda/git/fun/src/fold.js',hash='d11f2eedaf171e2dd8535a1f5381be1ff3dbbb1b',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/fold.js',statementMap:{'0':{start:{line:18,column:16},end:{line:22,column:3}},'1':{start:{line:23,column:2},end:{line:23,column:39}}},fnMap:{'0':{name:'fold',decl:{start:{line:17,column:30},end:{line:17,column:34}},loc:{start:{line:17,column:48},end:{line:24,column:1}},line:17}},branchMap:{},s:{'0':0,'1':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function fold(cb,init,a){cov_24a0886bu4.f[0]++;var typeMap=(cov_24a0886bu4.s[0]++,{'Object':_object_fold__WEBPACK_IMPORTED_MODULE_2__[\"default\"],'Array':_array_fold__WEBPACK_IMPORTED_MODULE_1__[\"default\"],'String':_string_fold__WEBPACK_IMPORTED_MODULE_3__[\"default\"]});cov_24a0886bu4.s[1]++;return typeMap[Object(_type__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(a)](cb,init,a);}));\n\n//# sourceURL=webpack://fun/./src/fold.js?");

/***/ }),

/***/ "./src/identical.js":
/*!**************************!*\
  !*** ./src/identical.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _number_isNan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number/isNan */ \"./src/number/isNan.js\");\nvar cov_pghbreami=function(){var path='/mnt/sda/git/fun/src/identical.js',hash='6d73edcd1e5ee5baece0f0d9875cf880471b517a',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/identical.js',statementMap:{'0':{start:{line:9,column:2},end:{line:11,column:3}},'1':{start:{line:10,column:4},end:{line:10,column:27}},'2':{start:{line:13,column:2},end:{line:15,column:3}},'3':{start:{line:14,column:4},end:{line:14,column:16}},'4':{start:{line:17,column:2},end:{line:17,column:34}}},fnMap:{'0':{name:'identical',decl:{start:{line:8,column:30},end:{line:8,column:39}},loc:{start:{line:8,column:46},end:{line:18,column:1}},line:8}},branchMap:{'0':{loc:{start:{line:9,column:2},end:{line:11,column:3}},type:'if',locations:[{start:{line:9,column:2},end:{line:11,column:3}},{start:{line:9,column:2},end:{line:11,column:3}}],line:9},'1':{loc:{start:{line:9,column:6},end:{line:9,column:24}},type:'binary-expr',locations:[{start:{line:9,column:6},end:{line:9,column:13}},{start:{line:9,column:17},end:{line:9,column:24}}],line:9},'2':{loc:{start:{line:13,column:2},end:{line:15,column:3}},type:'if',locations:[{start:{line:13,column:2},end:{line:15,column:3}},{start:{line:13,column:2},end:{line:15,column:3}}],line:13},'3':{loc:{start:{line:17,column:12},end:{line:17,column:32}},type:'binary-expr',locations:[{start:{line:17,column:12},end:{line:17,column:20}},{start:{line:17,column:24},end:{line:17,column:32}}],line:17}},s:{'0':0,'1':0,'2':0,'3':0,'4':0},f:{'0':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function identical(x,y){cov_pghbreami.f[0]++;cov_pghbreami.s[0]++;if((cov_pghbreami.b[1][0]++,x===0)&&(cov_pghbreami.b[1][1]++,y===0)){cov_pghbreami.b[0][0]++;cov_pghbreami.s[1]++;return 1/x===1/y;}else{cov_pghbreami.b[0][1]++;}cov_pghbreami.s[2]++;if(x===y){cov_pghbreami.b[2][0]++;cov_pghbreami.s[3]++;return true;}else{cov_pghbreami.b[2][1]++;}cov_pghbreami.s[4]++;return!!((cov_pghbreami.b[3][0]++,Object(_number_isNan__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x))&&(cov_pghbreami.b[3][1]++,Object(_number_isNan__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(y)));}));\n\n//# sourceURL=webpack://fun/./src/identical.js?");

/***/ }),

/***/ "./src/identity.js":
/*!*************************!*\
  !*** ./src/identity.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return identity; });\nvar cov_1ha0x4nrgw=function(){var path=\"/mnt/sda/git/fun/src/identity.js\",hash=\"ec20991b746fdd7579f12d82d882e8a2694fa732\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/mnt/sda/git/fun/src/identity.js\",statementMap:{\"0\":{start:{line:7,column:2},end:{line:7,column:11}}},fnMap:{\"0\":{name:\"identity\",decl:{start:{line:6,column:24},end:{line:6,column:32}},loc:{start:{line:6,column:36},end:{line:8,column:1}},line:6}},branchMap:{},s:{\"0\":0},f:{\"0\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function identity(x){cov_1ha0x4nrgw.f[0]++;cov_1ha0x4nrgw.s[0]++;return x;};\n\n//# sourceURL=webpack://fun/./src/identity.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: add, addIndex, adjust, adjustWith, all, allPass, always, and, any, anyPass, ap, aperture, append, apply, binary, bind, both, call, complement, compose, concat, cond, curry, defaultTo, diffDate, divide, Either, Left, Right, empty, equals, exists, F, filter, findIndex, first, flatMap, fold, formatString, gcd, has, hasIn, identical, identity, is, isArray, isBoolean, isDate, isEmpty, isFutureDate, isMap, isNan, isNull, isNumber, isObject, isSet, isString, isIterator, isUndefined, isValidDate, Just, keys, keysIn, last, lift, lt, lte, map, max, Maybe, merge, min, multiply, not, Nothing, omit, or, path, pick, prop, reduce, sort, sum, T, toDay, toHour, toMinutes, toSeconds, truthy, type, union, values, zip, zipObj, zipWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _number_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number/add */ \"./src/number/add.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return _number_add__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _addIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addIndex */ \"./src/addIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addIndex\", function() { return _addIndex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _adjust__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adjust */ \"./src/adjust.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"adjust\", function() { return _adjust__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _adjustWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adjustWith */ \"./src/adjustWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"adjustWith\", function() { return _adjustWith__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all */ \"./src/all.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"all\", function() { return _all__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _allPass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allPass */ \"./src/allPass.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"allPass\", function() { return _allPass__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./always */ \"./src/always.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"always\", function() { return _always__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./and */ \"./src/and.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"and\", function() { return _and__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./any */ \"./src/any.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"any\", function() { return _any__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _anyPass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./anyPass */ \"./src/anyPass.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"anyPass\", function() { return _anyPass__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ap */ \"./src/ap.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ap\", function() { return _ap__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _aperture__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aperture */ \"./src/aperture.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"aperture\", function() { return _aperture__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./append */ \"./src/append.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return _append__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apply */ \"./src/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _apply__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _binary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./binary */ \"./src/binary.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"binary\", function() { return _binary__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bind */ \"./src/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _bind__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _boolean_both__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./boolean/both */ \"./src/boolean/both.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"both\", function() { return _boolean_both__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./call */ \"./src/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _call__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; });\n\n/* harmony import */ var _complement__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./complement */ \"./src/complement.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"complement\", function() { return _complement__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; });\n\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./compose */ \"./src/compose.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return _compose__WEBPACK_IMPORTED_MODULE_19__[\"default\"]; });\n\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./concat */ \"./src/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _concat__WEBPACK_IMPORTED_MODULE_20__[\"default\"]; });\n\n/* harmony import */ var _cond__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cond */ \"./src/cond.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cond\", function() { return _cond__WEBPACK_IMPORTED_MODULE_21__[\"default\"]; });\n\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"curry\", function() { return _curry__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _defaultTo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./defaultTo */ \"./src/defaultTo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"defaultTo\", function() { return _defaultTo__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _date_diffDate__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./date/diffDate */ \"./src/date/diffDate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"diffDate\", function() { return _date_diffDate__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _number_divide__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./number/divide */ \"./src/number/divide.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return _number_divide__WEBPACK_IMPORTED_MODULE_25__[\"default\"]; });\n\n/* harmony import */ var _monads_Either__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./monads/Either */ \"./src/monads/Either.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Either\", function() { return _monads_Either__WEBPACK_IMPORTED_MODULE_26__[\"default\"]; });\n\n/* harmony import */ var _monads_Left__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./monads/Left */ \"./src/monads/Left.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Left\", function() { return _monads_Left__WEBPACK_IMPORTED_MODULE_27__[\"default\"]; });\n\n/* harmony import */ var _monads_Right__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./monads/Right */ \"./src/monads/Right.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Right\", function() { return _monads_Right__WEBPACK_IMPORTED_MODULE_28__[\"default\"]; });\n\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./empty */ \"./src/empty.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"empty\", function() { return _empty__WEBPACK_IMPORTED_MODULE_29__[\"default\"]; });\n\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./equals */ \"./src/equals.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"equals\", function() { return _equals__WEBPACK_IMPORTED_MODULE_30__[\"default\"]; });\n\n/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./exists */ \"./src/exists.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"exists\", function() { return _exists__WEBPACK_IMPORTED_MODULE_31__[\"default\"]; });\n\n/* harmony import */ var _boolean_F__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./boolean/F */ \"./src/boolean/F.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"F\", function() { return _boolean_F__WEBPACK_IMPORTED_MODULE_32__[\"default\"]; });\n\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _filter__WEBPACK_IMPORTED_MODULE_33__[\"default\"]; });\n\n/* harmony import */ var _findIndex__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./findIndex */ \"./src/findIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _findIndex__WEBPACK_IMPORTED_MODULE_34__[\"default\"]; });\n\n/* harmony import */ var _first__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./first */ \"./src/first.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"first\", function() { return _first__WEBPACK_IMPORTED_MODULE_35__[\"default\"]; });\n\n/* harmony import */ var _flatMap__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./flatMap */ \"./src/flatMap.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatMap\", function() { return _flatMap__WEBPACK_IMPORTED_MODULE_36__[\"default\"]; });\n\n/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./fold */ \"./src/fold.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fold\", function() { return _fold__WEBPACK_IMPORTED_MODULE_37__[\"default\"]; });\n\n/* harmony import */ var _string_formatString__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./string/formatString */ \"./src/string/formatString.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatString\", function() { return _string_formatString__WEBPACK_IMPORTED_MODULE_38__[\"default\"]; });\n\n/* harmony import */ var _math_gcd__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./math/gcd */ \"./src/math/gcd.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"gcd\", function() { return _math_gcd__WEBPACK_IMPORTED_MODULE_39__[\"default\"]; });\n\n/* harmony import */ var _object_has__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./object/has */ \"./src/object/has.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"has\", function() { return _object_has__WEBPACK_IMPORTED_MODULE_40__[\"default\"]; });\n\n/* harmony import */ var _object_hasIn__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./object/hasIn */ \"./src/object/hasIn.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hasIn\", function() { return _object_hasIn__WEBPACK_IMPORTED_MODULE_41__[\"default\"]; });\n\n/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./identical */ \"./src/identical.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"identical\", function() { return _identical__WEBPACK_IMPORTED_MODULE_42__[\"default\"]; });\n\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./identity */ \"./src/identity.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return _identity__WEBPACK_IMPORTED_MODULE_43__[\"default\"]; });\n\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./is */ \"./src/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"is\", function() { return _is__WEBPACK_IMPORTED_MODULE_44__[\"default\"]; });\n\n/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./array/is */ \"./src/array/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return _array_is__WEBPACK_IMPORTED_MODULE_45__[\"default\"]; });\n\n/* harmony import */ var _boolean_is__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./boolean/is */ \"./src/boolean/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isBoolean\", function() { return _boolean_is__WEBPACK_IMPORTED_MODULE_46__[\"default\"]; });\n\n/* harmony import */ var _date_is__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./date/is */ \"./src/date/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isDate\", function() { return _date_is__WEBPACK_IMPORTED_MODULE_47__[\"default\"]; });\n\n/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./isEmpty */ \"./src/isEmpty.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return _isEmpty__WEBPACK_IMPORTED_MODULE_48__[\"default\"]; });\n\n/* harmony import */ var _date_isFutureDate__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./date/isFutureDate */ \"./src/date/isFutureDate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isFutureDate\", function() { return _date_isFutureDate__WEBPACK_IMPORTED_MODULE_49__[\"default\"]; });\n\n/* harmony import */ var _map_is__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./map/is */ \"./src/map/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isMap\", function() { return _map_is__WEBPACK_IMPORTED_MODULE_50__[\"default\"]; });\n\n/* harmony import */ var _number_isNan__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./number/isNan */ \"./src/number/isNan.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNan\", function() { return _number_isNan__WEBPACK_IMPORTED_MODULE_51__[\"default\"]; });\n\n/* harmony import */ var _null_is__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./null/is */ \"./src/null/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNull\", function() { return _null_is__WEBPACK_IMPORTED_MODULE_52__[\"default\"]; });\n\n/* harmony import */ var _number_is__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./number/is */ \"./src/number/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return _number_is__WEBPACK_IMPORTED_MODULE_53__[\"default\"]; });\n\n/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./object/is */ \"./src/object/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return _object_is__WEBPACK_IMPORTED_MODULE_54__[\"default\"]; });\n\n/* harmony import */ var _set_is__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./set/is */ \"./src/set/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isSet\", function() { return _set_is__WEBPACK_IMPORTED_MODULE_55__[\"default\"]; });\n\n/* harmony import */ var _string_is__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./string/is */ \"./src/string/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return _string_is__WEBPACK_IMPORTED_MODULE_56__[\"default\"]; });\n\n/* harmony import */ var _iterator_is__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./iterator/is */ \"./src/iterator/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isIterator\", function() { return _iterator_is__WEBPACK_IMPORTED_MODULE_57__[\"default\"]; });\n\n/* harmony import */ var _undefined_is__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./undefined/is */ \"./src/undefined/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isUndefined\", function() { return _undefined_is__WEBPACK_IMPORTED_MODULE_58__[\"default\"]; });\n\n/* harmony import */ var _date_isValid__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./date/isValid */ \"./src/date/isValid.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isValidDate\", function() { return _date_isValid__WEBPACK_IMPORTED_MODULE_59__[\"default\"]; });\n\n/* harmony import */ var _monads_Just__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./monads/Just */ \"./src/monads/Just.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Just\", function() { return _monads_Just__WEBPACK_IMPORTED_MODULE_60__[\"default\"]; });\n\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./keys */ \"./src/keys.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"keys\", function() { return _keys__WEBPACK_IMPORTED_MODULE_61__[\"default\"]; });\n\n/* harmony import */ var _object_keysIn__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./object/keysIn */ \"./src/object/keysIn.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"keysIn\", function() { return _object_keysIn__WEBPACK_IMPORTED_MODULE_62__[\"default\"]; });\n\n/* harmony import */ var _last__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./last */ \"./src/last.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"last\", function() { return _last__WEBPACK_IMPORTED_MODULE_63__[\"default\"]; });\n\n/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./lift */ \"./src/lift.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lift\", function() { return _lift__WEBPACK_IMPORTED_MODULE_64__[\"default\"]; });\n\n/* harmony import */ var _lt__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./lt */ \"./src/lt.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lt\", function() { return _lt__WEBPACK_IMPORTED_MODULE_65__[\"default\"]; });\n\n/* harmony import */ var _lte__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./lte */ \"./src/lte.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lte\", function() { return _lte__WEBPACK_IMPORTED_MODULE_66__[\"default\"]; });\n\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _map__WEBPACK_IMPORTED_MODULE_67__[\"default\"]; });\n\n/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./max */ \"./src/max.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"max\", function() { return _max__WEBPACK_IMPORTED_MODULE_68__[\"default\"]; });\n\n/* harmony import */ var _monads_Maybe__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./monads/Maybe */ \"./src/monads/Maybe.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Maybe\", function() { return _monads_Maybe__WEBPACK_IMPORTED_MODULE_69__[\"default\"]; });\n\n/* harmony import */ var _object_merge__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./object/merge */ \"./src/object/merge.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"merge\", function() { return _object_merge__WEBPACK_IMPORTED_MODULE_70__[\"default\"]; });\n\n/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./min */ \"./src/min.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"min\", function() { return _min__WEBPACK_IMPORTED_MODULE_71__[\"default\"]; });\n\n/* harmony import */ var _number_multiply__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./number/multiply */ \"./src/number/multiply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return _number_multiply__WEBPACK_IMPORTED_MODULE_72__[\"default\"]; });\n\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./not */ \"./src/not.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"not\", function() { return _not__WEBPACK_IMPORTED_MODULE_73__[\"default\"]; });\n\n/* harmony import */ var _monads_Nothing__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./monads/Nothing */ \"./src/monads/Nothing.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Nothing\", function() { return _monads_Nothing__WEBPACK_IMPORTED_MODULE_74__[\"default\"]; });\n\n/* harmony import */ var _object_omit__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./object/omit */ \"./src/object/omit.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"omit\", function() { return _object_omit__WEBPACK_IMPORTED_MODULE_75__[\"default\"]; });\n\n/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./or */ \"./src/or.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"or\", function() { return _or__WEBPACK_IMPORTED_MODULE_76__[\"default\"]; });\n\n/* harmony import */ var _object_path__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./object/path */ \"./src/object/path.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"path\", function() { return _object_path__WEBPACK_IMPORTED_MODULE_77__[\"default\"]; });\n\n/* harmony import */ var _object_pick__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./object/pick */ \"./src/object/pick.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pick\", function() { return _object_pick__WEBPACK_IMPORTED_MODULE_78__[\"default\"]; });\n\n/* harmony import */ var _object_prop__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./object/prop */ \"./src/object/prop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"prop\", function() { return _object_prop__WEBPACK_IMPORTED_MODULE_79__[\"default\"]; });\n\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./reduce */ \"./src/reduce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _reduce__WEBPACK_IMPORTED_MODULE_80__[\"default\"]; });\n\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./sort */ \"./src/sort.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sort\", function() { return _sort__WEBPACK_IMPORTED_MODULE_81__[\"default\"]; });\n\n/* harmony import */ var _number_sum__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./number/sum */ \"./src/number/sum.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return _number_sum__WEBPACK_IMPORTED_MODULE_82__[\"default\"]; });\n\n/* harmony import */ var _boolean_T__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./boolean/T */ \"./src/boolean/T.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"T\", function() { return _boolean_T__WEBPACK_IMPORTED_MODULE_83__[\"default\"]; });\n\n/* harmony import */ var _date_toDay__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./date/toDay */ \"./src/date/toDay.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toDay\", function() { return _date_toDay__WEBPACK_IMPORTED_MODULE_84__[\"default\"]; });\n\n/* harmony import */ var _date_toHour__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./date/toHour */ \"./src/date/toHour.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toHour\", function() { return _date_toHour__WEBPACK_IMPORTED_MODULE_85__[\"default\"]; });\n\n/* harmony import */ var _date_toMinutes__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./date/toMinutes */ \"./src/date/toMinutes.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toMinutes\", function() { return _date_toMinutes__WEBPACK_IMPORTED_MODULE_86__[\"default\"]; });\n\n/* harmony import */ var _date_toSeconds__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./date/toSeconds */ \"./src/date/toSeconds.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toSeconds\", function() { return _date_toSeconds__WEBPACK_IMPORTED_MODULE_87__[\"default\"]; });\n\n/* harmony import */ var _truthy__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./truthy */ \"./src/truthy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"truthy\", function() { return _truthy__WEBPACK_IMPORTED_MODULE_88__[\"default\"]; });\n\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"type\", function() { return _type__WEBPACK_IMPORTED_MODULE_89__[\"default\"]; });\n\n/* harmony import */ var _array_union__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./array/union */ \"./src/array/union.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"union\", function() { return _array_union__WEBPACK_IMPORTED_MODULE_90__[\"default\"]; });\n\n/* harmony import */ var _object_values__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./object/values */ \"./src/object/values.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"values\", function() { return _object_values__WEBPACK_IMPORTED_MODULE_91__[\"default\"]; });\n\n/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./zip */ \"./src/zip.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zip\", function() { return _zip__WEBPACK_IMPORTED_MODULE_92__[\"default\"]; });\n\n/* harmony import */ var _zipObj__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./zipObj */ \"./src/zipObj.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zipObj\", function() { return _zipObj__WEBPACK_IMPORTED_MODULE_93__[\"default\"]; });\n\n/* harmony import */ var _zipWith__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./zipWith */ \"./src/zipWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zipWith\", function() { return _zipWith__WEBPACK_IMPORTED_MODULE_94__[\"default\"]; });\n\nvar cov_1tijnofgqt=function(){var path='/mnt/sda/git/fun/src/index.js',hash='eb349ea3be65f64caf99f06cdbac53e29d1354c0',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/index.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();\n\n//# sourceURL=webpack://fun/./src/index.js?");

/***/ }),

/***/ "./src/is.js":
/*!*******************!*\
  !*** ./src/is.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\nvar cov_1uy8uxvn2j=function(){var path='/mnt/sda/git/fun/src/is.js',hash='b3ab2f760950f721149949a470b00398c85d75cb',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/is.js',statementMap:{'0':{start:{line:9,column:2},end:{line:9,column:28}}},fnMap:{'0':{name:'is',decl:{start:{line:8,column:30},end:{line:8,column:32}},loc:{start:{line:8,column:44},end:{line:10,column:1}},line:8}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function is(Ctor,val){cov_1uy8uxvn2j.f[0]++;cov_1uy8uxvn2j.s[0]++;return Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(val)===Ctor;}));\n\n//# sourceURL=webpack://fun/./src/is.js?");

/***/ }),

/***/ "./src/isEmpty.js":
/*!************************!*\
  !*** ./src/isEmpty.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isEmpty; });\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty */ \"./src/empty.js\");\n/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exists */ \"./src/exists.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equals */ \"./src/equals.js\");\nvar cov_21p7n3nf0n=function(){var path='/mnt/sda/git/fun/src/isEmpty.js',hash='8b4c953346d836f2c5782b7f1c0291b0434c633f',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/isEmpty.js',statementMap:{'0':{start:{line:10,column:2},end:{line:10,column:42}}},fnMap:{'0':{name:'isEmpty',decl:{start:{line:9,column:24},end:{line:9,column:31}},loc:{start:{line:9,column:35},end:{line:11,column:1}},line:9}},branchMap:{'0':{loc:{start:{line:10,column:9},end:{line:10,column:41}},type:'binary-expr',locations:[{start:{line:10,column:9},end:{line:10,column:18}},{start:{line:10,column:22},end:{line:10,column:41}}],line:10}},s:{'0':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function isEmpty(x){cov_21p7n3nf0n.f[0]++;cov_21p7n3nf0n.s[0]++;return(cov_21p7n3nf0n.b[0][0]++,Object(_exists__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x))&&(cov_21p7n3nf0n.b[0][1]++,Object(_equals__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x,Object(_empty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x)));};\n\n//# sourceURL=webpack://fun/./src/isEmpty.js?");

/***/ }),

/***/ "./src/iterator/is.js":
/*!****************************!*\
  !*** ./src/iterator/is.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isIterator; });\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_hy3b9sz8n=function(){var path='/mnt/sda/git/fun/src/iterator/is.js',hash='b69dd9e068b61da9b209bcaa9310e7abfc453fe8',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/iterator/is.js',statementMap:{'0':{start:{line:5,column:17},end:{line:5,column:31}},'1':{start:{line:13,column:2},end:{line:13,column:43}}},fnMap:{'0':{name:'isIterator',decl:{start:{line:12,column:24},end:{line:12,column:34}},loc:{start:{line:12,column:41},end:{line:14,column:1}},line:12}},branchMap:{},s:{'0':0,'1':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var isFunction=(cov_hy3b9sz8n.s[0]++,Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Function'));function isIterator(iter){cov_hy3b9sz8n.f[0]++;cov_hy3b9sz8n.s[1]++;return isFunction(iter[Symbol.iterator]);}\n\n//# sourceURL=webpack://fun/./src/iterator/is.js?");

/***/ }),

/***/ "./src/iterator/map.js":
/*!*****************************!*\
  !*** ./src/iterator/map.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_9680l4taw=function(){var path='/mnt/sda/git/fun/src/iterator/map.js',hash='5282f6efca14b6516e50e9aaf8c1ca6d5dba7d4c',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/iterator/map.js',statementMap:{'0':{start:{line:13,column:10},end:{line:13,column:12}},'1':{start:{line:15,column:2},end:{line:17,column:3}},'2':{start:{line:16,column:4},end:{line:16,column:39}},'3':{start:{line:19,column:2},end:{line:19,column:11}}},fnMap:{'0':{name:'map',decl:{start:{line:12,column:30},end:{line:12,column:33}},loc:{start:{line:12,column:54},end:{line:20,column:1}},line:12}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function map(callback,iterator){cov_9680l4taw.f[0]++;var r=(cov_9680l4taw.s[0]++,[]);cov_9680l4taw.s[1]++;for(var nextValue=iterator.next();nextValue.done!==true;nextValue=iterator.next()){cov_9680l4taw.s[2]++;r.push(callback(iterator.value()));}cov_9680l4taw.s[3]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/iterator/map.js?");

/***/ }),

/***/ "./src/keys.js":
/*!*********************!*\
  !*** ./src/keys.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object/keys */ \"./src/object/keys.js\");\n/* harmony import */ var _map_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/keys */ \"./src/map/keys.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\nvar cov_2jl7p1wb4e=function(){var path='/mnt/sda/git/fun/src/keys.js',hash='b7316c3214dac8982fe5efcc7ad3aa71738ee2f9',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/keys.js',statementMap:{'0':{start:{line:16,column:2},end:{line:22,column:3}},'1':{start:{line:18,column:6},end:{line:18,column:26}},'2':{start:{line:21,column:6},end:{line:21,column:29}}},fnMap:{'0':{name:'map',decl:{start:{line:15,column:30},end:{line:15,column:33}},loc:{start:{line:15,column:39},end:{line:23,column:1}},line:15}},branchMap:{'0':{loc:{start:{line:16,column:2},end:{line:22,column:3}},type:'switch',locations:[{start:{line:17,column:4},end:{line:18,column:26}},{start:{line:20,column:4},end:{line:21,column:29}}],line:16}},s:{'0':0,'1':0,'2':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function map(obj){cov_2jl7p1wb4e.f[0]++;cov_2jl7p1wb4e.s[0]++;switch(Object(_type__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(obj)){case'Map':cov_2jl7p1wb4e.b[0][0]++;cov_2jl7p1wb4e.s[1]++;return Object(_map_keys__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj);default:cov_2jl7p1wb4e.b[0][1]++;cov_2jl7p1wb4e.s[2]++;return Object(_object_keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj);}}));\n\n//# sourceURL=webpack://fun/./src/keys.js?");

/***/ }),

/***/ "./src/last.js":
/*!*********************!*\
  !*** ./src/last.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\nvar cov_2aqzbsx1ae=function(){var path='/mnt/sda/git/fun/src/last.js',hash='ce3f8963886abc57eff706855ae556918a578da4',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/last.js',statementMap:{'0':{start:{line:8,column:2},end:{line:8,column:53}}},fnMap:{'0':{name:'last',decl:{start:{line:7,column:31},end:{line:7,column:35}},loc:{start:{line:7,column:39},end:{line:9,column:1}},line:7}},branchMap:{'0':{loc:{start:{line:8,column:9},end:{line:8,column:52}},type:'cond-expr',locations:[{start:{line:8,column:25},end:{line:8,column:40}},{start:{line:8,column:43},end:{line:8,column:52}}],line:8},'1':{loc:{start:{line:8,column:9},end:{line:8,column:22}},type:'binary-expr',locations:[{start:{line:8,column:9},end:{line:8,column:10}},{start:{line:8,column:14},end:{line:8,column:22}}],line:8}},s:{'0':0},f:{'0':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function last(a){cov_2aqzbsx1ae.f[0]++;cov_2aqzbsx1ae.s[0]++;return(cov_2aqzbsx1ae.b[1][0]++,a)&&(cov_2aqzbsx1ae.b[1][1]++,a.length)?(cov_2aqzbsx1ae.b[0][0]++,a[a.length-1]):(cov_2aqzbsx1ae.b[0][1]++,undefined);}));\n\n//# sourceURL=webpack://fun/./src/last.js?");

/***/ }),

/***/ "./src/lift.js":
/*!*********************!*\
  !*** ./src/lift.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\n/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fold */ \"./src/fold.js\");\n/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ap */ \"./src/ap.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\nvar cov_yl05dfeqq=function(){var path='/mnt/sda/git/fun/src/lift.js',hash='6fc8b6708d574fd19960fc7426e11c38f04e8e03',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/lift.js',statementMap:{'0':{start:{line:14,column:15},end:{line:14,column:32}},'1':{start:{line:15,column:2},end:{line:17,column:5}},'2':{start:{line:16,column:4},end:{line:16,column:89}}},fnMap:{'0':{name:'lift',decl:{start:{line:13,column:30},end:{line:13,column:34}},loc:{start:{line:13,column:39},end:{line:18,column:1}},line:13},'1':{name:'_lift',decl:{start:{line:15,column:24},end:{line:15,column:29}},loc:{start:{line:15,column:32},end:{line:17,column:3}},line:15}},branchMap:{},s:{'0':0,'1':0,'2':0},f:{'0':0,'1':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function lift(fn){cov_yl05dfeqq.f[0]++;var lifted=(cov_yl05dfeqq.s[0]++,Object(_private_curry1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fn)));cov_yl05dfeqq.s[1]++;return Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _lift(){cov_yl05dfeqq.f[1]++;cov_yl05dfeqq.s[2]++;return Object(_fold__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ap__WEBPACK_IMPORTED_MODULE_3__[\"default\"],Object(_map__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(lifted,arguments[0]),Array.prototype.slice.call(arguments,1));});}));\n\n//# sourceURL=webpack://fun/./src/lift.js?");

/***/ }),

/***/ "./src/lt.js":
/*!*******************!*\
  !*** ./src/lt.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_20m8mynbem=function(){var path='/mnt/sda/git/fun/src/lt.js',hash='ed6452d7ed12e5b2cb705875b9503d52a3073e28',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/lt.js',statementMap:{'0':{start:{line:17,column:2},end:{line:17,column:15}}},fnMap:{'0':{name:'lt',decl:{start:{line:16,column:30},end:{line:16,column:32}},loc:{start:{line:16,column:39},end:{line:18,column:1}},line:16}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function lt(a,b){cov_20m8mynbem.f[0]++;cov_20m8mynbem.s[0]++;return a<b;}));\n\n//# sourceURL=webpack://fun/./src/lt.js?");

/***/ }),

/***/ "./src/lte.js":
/*!********************!*\
  !*** ./src/lte.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1j6c3hszsf=function(){var path='/mnt/sda/git/fun/src/lte.js',hash='77e0be7c7d7ab171b068b767ba37fd1e8ae5b6c4',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/lte.js',statementMap:{'0':{start:{line:18,column:2},end:{line:18,column:16}}},fnMap:{'0':{name:'lte',decl:{start:{line:17,column:30},end:{line:17,column:33}},loc:{start:{line:17,column:40},end:{line:19,column:1}},line:17}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function lte(a,b){cov_1j6c3hszsf.f[0]++;cov_1j6c3hszsf.s[0]++;return a<=b;}));\n\n//# sourceURL=webpack://fun/./src/lte.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/map */ \"./src/array/map.js\");\n/* harmony import */ var _object_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/map */ \"./src/object/map.js\");\n/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map */ \"./src/map/map.js\");\n/* harmony import */ var _string_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string/map */ \"./src/string/map.js\");\n/* harmony import */ var _iterator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iterator/map */ \"./src/iterator/map.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\n/* harmony import */ var _iterator_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iterator/is */ \"./src/iterator/is.js\");\nvar cov_1d9lqjrw29=function(){var path='/mnt/sda/git/fun/src/map.js',hash='89cd9633bc03696f9c35ad0ef5ddfbfdb1487e0f',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/map.js',statementMap:{'0':{start:{line:21,column:2},end:{line:41,column:3}},'1':{start:{line:23,column:6},end:{line:25,column:9}},'2':{start:{line:24,column:8},end:{line:24,column:55}},'3':{start:{line:28,column:6},end:{line:28,column:30}},'4':{start:{line:31,column:6},end:{line:31,column:30}},'5':{start:{line:34,column:6},end:{line:34,column:27}},'6':{start:{line:37,column:6},end:{line:37,column:29}},'7':{start:{line:40,column:6},end:{line:40,column:66}}},fnMap:{'0':{name:'map',decl:{start:{line:20,column:30},end:{line:20,column:33}},loc:{start:{line:20,column:41},end:{line:42,column:1}},line:20},'1':{name:'(anonymous_1)',decl:{start:{line:23,column:19},end:{line:23,column:20}},loc:{start:{line:23,column:31},end:{line:25,column:7}},line:23}},branchMap:{'0':{loc:{start:{line:21,column:2},end:{line:41,column:3}},type:'switch',locations:[{start:{line:22,column:4},end:{line:25,column:9}},{start:{line:27,column:4},end:{line:28,column:30}},{start:{line:30,column:4},end:{line:31,column:30}},{start:{line:33,column:4},end:{line:34,column:27}},{start:{line:36,column:4},end:{line:37,column:29}},{start:{line:39,column:4},end:{line:40,column:66}}],line:21},'1':{loc:{start:{line:40,column:13},end:{line:40,column:65}},type:'cond-expr',locations:[{start:{line:40,column:29},end:{line:40,column:47}},{start:{line:40,column:50},end:{line:40,column:65}}],line:40}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0},f:{'0':0,'1':0},b:{'0':[0,0,0,0,0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function map(cb,a){cov_1d9lqjrw29.f[0]++;cov_1d9lqjrw29.s[0]++;switch(Object(_type__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(a)){case'Function':cov_1d9lqjrw29.b[0][0]++;cov_1d9lqjrw29.s[1]++;return Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(){cov_1d9lqjrw29.f[1]++;cov_1d9lqjrw29.s[2]++;return cb.call(this,a.apply(this,arguments));});case'Object':cov_1d9lqjrw29.b[0][1]++;cov_1d9lqjrw29.s[3]++;return Object(_object_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cb,a);case'String':cov_1d9lqjrw29.b[0][2]++;cov_1d9lqjrw29.s[4]++;return Object(_string_map__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(cb,a);case'Map':cov_1d9lqjrw29.b[0][3]++;cov_1d9lqjrw29.s[5]++;return Object(_map_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(cb,a);case'Array':cov_1d9lqjrw29.b[0][4]++;cov_1d9lqjrw29.s[6]++;return Object(_array_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cb,a);default:cov_1d9lqjrw29.b[0][5]++;cov_1d9lqjrw29.s[7]++;return Object(_iterator_is__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(a)?(cov_1d9lqjrw29.b[1][0]++,Object(_iterator_map__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(cb,a)):(cov_1d9lqjrw29.b[1][1]++,Object(_array_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cb,a));}}));\n\n//# sourceURL=webpack://fun/./src/map.js?");

/***/ }),

/***/ "./src/map/filter.js":
/*!***************************!*\
  !*** ./src/map/filter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_318km123a=function(){var path='/mnt/sda/git/fun/src/map/filter.js',hash='c3d4f0c786f86a307fcd5946101fed28355f8765',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/map/filter.js',statementMap:{'0':{start:{line:8,column:10},end:{line:8,column:19}},'1':{start:{line:9,column:11},end:{line:9,column:22}},'2':{start:{line:10,column:15},end:{line:10,column:24}},'3':{start:{line:12,column:2},end:{line:17,column:3}},'4':{start:{line:13,column:12},end:{line:13,column:27}},'5':{start:{line:14,column:12},end:{line:14,column:27}},'6':{start:{line:15,column:4},end:{line:15,column:30}},'7':{start:{line:15,column:18},end:{line:15,column:30}},'8':{start:{line:16,column:4},end:{line:16,column:23}},'9':{start:{line:27,column:2},end:{line:27,column:11}}},fnMap:{'0':{name:'mapFilter',decl:{start:{line:7,column:30},end:{line:7,column:39}},loc:{start:{line:7,column:47},end:{line:28,column:1}},line:7}},branchMap:{'0':{loc:{start:{line:15,column:4},end:{line:15,column:30}},type:'if',locations:[{start:{line:15,column:4},end:{line:15,column:30}},{start:{line:15,column:4},end:{line:15,column:30}}],line:15}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function mapFilter(fn,m){cov_318km123a.f[0]++;var r=(cov_318km123a.s[0]++,new Map());var it=(cov_318km123a.s[1]++,m.entries());var result=(cov_318km123a.s[2]++,it.next());cov_318km123a.s[3]++;while(!result.done){var k=(cov_318km123a.s[4]++,result.value[0]);var v=(cov_318km123a.s[5]++,result.value[1]);cov_318km123a.s[6]++;if(fn(k,v)){cov_318km123a.b[0][0]++;cov_318km123a.s[7]++;r.set(k,v);}else{cov_318km123a.b[0][1]++;}cov_318km123a.s[8]++;result=it.next();}cov_318km123a.s[9]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/map/filter.js?");

/***/ }),

/***/ "./src/map/is.js":
/*!***********************!*\
  !*** ./src/map/is.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_163fl07l2j=function(){var path='/mnt/sda/git/fun/src/map/is.js',hash='69c89556696f6cc091de6ab771e51930fdac458c',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/map/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Map'));\n\n//# sourceURL=webpack://fun/./src/map/is.js?");

/***/ }),

/***/ "./src/map/keys.js":
/*!*************************!*\
  !*** ./src/map/keys.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_bvw0klybj=function(){var path='/mnt/sda/git/fun/src/map/keys.js',hash='8190c9e97a76304eb7dd8747cf29e66b370cf5f8',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/map/keys.js',statementMap:{'0':{start:{line:12,column:2},end:{line:12,column:18}}},fnMap:{'0':{name:'keys',decl:{start:{line:11,column:30},end:{line:11,column:34}},loc:{start:{line:11,column:38},end:{line:13,column:1}},line:11}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function keys(a){cov_bvw0klybj.f[0]++;cov_bvw0klybj.s[0]++;return a.keys();}));\n\n//# sourceURL=webpack://fun/./src/map/keys.js?");

/***/ }),

/***/ "./src/map/map.js":
/*!************************!*\
  !*** ./src/map/map.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../empty */ \"./src/empty.js\");\nvar cov_2a9jqgppa8=function(){var path='/mnt/sda/git/fun/src/map/map.js',hash='1b7a9398a8f996ef65411aaa80259c187a0be4f3',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/map/map.js',statementMap:{'0':{start:{line:14,column:10},end:{line:14,column:18}},'1':{start:{line:15,column:2},end:{line:17,column:5}},'2':{start:{line:16,column:4},end:{line:16,column:28}},'3':{start:{line:18,column:2},end:{line:18,column:11}}},fnMap:{'0':{name:'map',decl:{start:{line:13,column:30},end:{line:13,column:33}},loc:{start:{line:13,column:41},end:{line:19,column:1}},line:13},'1':{name:'(anonymous_1)',decl:{start:{line:15,column:12},end:{line:15,column:13}},loc:{start:{line:15,column:33},end:{line:17,column:3}},line:15}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0,'1':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function map(cb,a){cov_2a9jqgppa8.f[0]++;var r=(cov_2a9jqgppa8.s[0]++,Object(_empty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a));cov_2a9jqgppa8.s[1]++;a.forEach(function(v,k,map){cov_2a9jqgppa8.f[1]++;cov_2a9jqgppa8.s[2]++;r.set(k,cb(v,k,map));});cov_2a9jqgppa8.s[3]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/map/map.js?");

/***/ }),

/***/ "./src/math/gcd.js":
/*!*************************!*\
  !*** ./src/math/gcd.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_2804m9ra00=function(){var path='/mnt/sda/git/fun/src/math/gcd.js',hash='63810bfcc3fae5b5aa87a68d34ca872a9f1d4063',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/math/gcd.js',statementMap:{'0':{start:{line:9,column:2},end:{line:9,column:24}},'1':{start:{line:9,column:15},end:{line:9,column:24}},'2':{start:{line:10,column:10},end:{line:10,column:15}},'3':{start:{line:11,column:2},end:{line:11,column:19}}},fnMap:{'0':{name:'gcd',decl:{start:{line:8,column:30},end:{line:8,column:33}},loc:{start:{line:8,column:40},end:{line:12,column:1}},line:8}},branchMap:{'0':{loc:{start:{line:9,column:2},end:{line:9,column:24}},type:'if',locations:[{start:{line:9,column:2},end:{line:9,column:24}},{start:{line:9,column:2},end:{line:9,column:24}}],line:9}},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function gcd(p,q){cov_2804m9ra00.f[0]++;cov_2804m9ra00.s[0]++;if(q===0){cov_2804m9ra00.b[0][0]++;cov_2804m9ra00.s[1]++;return p;}else{cov_2804m9ra00.b[0][1]++;}var r=(cov_2804m9ra00.s[2]++,p%q);cov_2804m9ra00.s[3]++;return gcd(q,r);}));\n\n//# sourceURL=webpack://fun/./src/math/gcd.js?");

/***/ }),

/***/ "./src/max.js":
/*!********************!*\
  !*** ./src/max.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_2jug3njqq6=function(){var path='/mnt/sda/git/fun/src/max.js',hash='30ba08747e54eb369234f4001b0ba70ef5f0e8f8',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/max.js',statementMap:{'0':{start:{line:12,column:2},end:{line:12,column:23}}},fnMap:{'0':{name:'max',decl:{start:{line:11,column:30},end:{line:11,column:33}},loc:{start:{line:11,column:40},end:{line:13,column:1}},line:11}},branchMap:{'0':{loc:{start:{line:12,column:9},end:{line:12,column:22}},type:'cond-expr',locations:[{start:{line:12,column:17},end:{line:12,column:18}},{start:{line:12,column:21},end:{line:12,column:22}}],line:12}},s:{'0':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function max(a,b){cov_2jug3njqq6.f[0]++;cov_2jug3njqq6.s[0]++;return b>a?(cov_2jug3njqq6.b[0][0]++,b):(cov_2jug3njqq6.b[0][1]++,a);}));\n\n//# sourceURL=webpack://fun/./src/max.js?");

/***/ }),

/***/ "./src/min.js":
/*!********************!*\
  !*** ./src/min.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_2qbbzzbcpn=function(){var path='/mnt/sda/git/fun/src/min.js',hash='4c857d47cb53d9000b4888afed2d6da69572b79c',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/min.js',statementMap:{'0':{start:{line:13,column:2},end:{line:13,column:23}}},fnMap:{'0':{name:'min',decl:{start:{line:12,column:30},end:{line:12,column:33}},loc:{start:{line:12,column:40},end:{line:14,column:1}},line:12}},branchMap:{'0':{loc:{start:{line:13,column:9},end:{line:13,column:22}},type:'cond-expr',locations:[{start:{line:13,column:17},end:{line:13,column:18}},{start:{line:13,column:21},end:{line:13,column:22}}],line:13}},s:{'0':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function min(a,b){cov_2qbbzzbcpn.f[0]++;cov_2qbbzzbcpn.s[0]++;return b<a?(cov_2qbbzzbcpn.b[0][0]++,b):(cov_2qbbzzbcpn.b[0][1]++,a);}));\n\n//# sourceURL=webpack://fun/./src/min.js?");

/***/ }),

/***/ "./src/monads/Either.js":
/*!******************************!*\
  !*** ./src/monads/Either.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Right__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Right */ \"./src/monads/Right.js\");\n/* harmony import */ var _Left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Left */ \"./src/monads/Left.js\");\nvar cov_18bf44cn85=function(){var path='/mnt/sda/git/fun/src/monads/Either.js',hash='e92f3a153807e0451f30f45e47e60184775e2b87',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/monads/Either.js',statementMap:{'0':{start:{line:13,column:13},end:{line:15,column:1}},'1':{start:{line:14,column:2},end:{line:14,column:25}},'2':{start:{line:28,column:0},end:{line:36,column:2}},'3':{start:{line:29,column:2},end:{line:29,column:40}},'4':{start:{line:29,column:29},end:{line:29,column:40}},'5':{start:{line:31,column:2},end:{line:33,column:3}},'6':{start:{line:32,column:4},end:{line:32,column:27}},'7':{start:{line:35,column:2},end:{line:35,column:25}},'8':{start:{line:48,column:0},end:{line:48,column:33}},'9':{start:{line:55,column:0},end:{line:55,column:32}},'10':{start:{line:62,column:0},end:{line:62,column:33}},'11':{start:{line:70,column:0},end:{line:72,column:2}},'12':{start:{line:71,column:2},end:{line:71,column:23}},'13':{start:{line:81,column:0},end:{line:83,column:2}},'14':{start:{line:82,column:2},end:{line:82,column:23}},'15':{start:{line:92,column:0},end:{line:94,column:2}},'16':{start:{line:93,column:2},end:{line:93,column:24}},'17':{start:{line:103,column:0},end:{line:105,column:2}},'18':{start:{line:104,column:2},end:{line:104,column:24}}},fnMap:{'0':{name:'Either',decl:{start:{line:13,column:22},end:{line:13,column:28}},loc:{start:{line:13,column:34},end:{line:15,column:1}},line:13},'1':{name:'(anonymous_1)',decl:{start:{line:28,column:12},end:{line:28,column:13}},loc:{start:{line:28,column:27},end:{line:36,column:1}},line:28},'2':{name:'(anonymous_2)',decl:{start:{line:70,column:24},end:{line:70,column:25}},loc:{start:{line:70,column:39},end:{line:72,column:1}},line:70},'3':{name:'(anonymous_3)',decl:{start:{line:81,column:14},end:{line:81,column:15}},loc:{start:{line:81,column:29},end:{line:83,column:1}},line:81},'4':{name:'(anonymous_4)',decl:{start:{line:92,column:25},end:{line:92,column:26}},loc:{start:{line:92,column:40},end:{line:94,column:1}},line:92},'5':{name:'(anonymous_5)',decl:{start:{line:103,column:15},end:{line:103,column:16}},loc:{start:{line:103,column:30},end:{line:105,column:1}},line:103}},branchMap:{'0':{loc:{start:{line:29,column:2},end:{line:29,column:40}},type:'if',locations:[{start:{line:29,column:2},end:{line:29,column:40}},{start:{line:29,column:2},end:{line:29,column:40}}],line:29},'1':{loc:{start:{line:31,column:2},end:{line:33,column:3}},type:'if',locations:[{start:{line:31,column:2},end:{line:33,column:3}},{start:{line:31,column:2},end:{line:33,column:3}}],line:31}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_18bf44cn85.s[0]++;var Either=function Either(val){cov_18bf44cn85.f[0]++;cov_18bf44cn85.s[1]++;return this.Right(val);};cov_18bf44cn85.s[2]++;Either.of=function(val){cov_18bf44cn85.f[1]++;cov_18bf44cn85.s[3]++;if(val instanceof Either){cov_18bf44cn85.b[0][0]++;cov_18bf44cn85.s[4]++;return val;}else{cov_18bf44cn85.b[0][1]++;}cov_18bf44cn85.s[5]++;if(this instanceof Either){cov_18bf44cn85.b[1][0]++;cov_18bf44cn85.s[6]++;return this.Right(val);}else{cov_18bf44cn85.b[1][1]++;}cov_18bf44cn85.s[7]++;return new Either(val);};cov_18bf44cn85.s[8]++;Either.prototype.type='Either';cov_18bf44cn85.s[9]++;Either.prototype.isLeft=false;cov_18bf44cn85.s[10]++;Either.prototype.isRight=false;cov_18bf44cn85.s[11]++;Either.prototype.Left=function(val){cov_18bf44cn85.f[2]++;cov_18bf44cn85.s[12]++;return new _Left__WEBPACK_IMPORTED_MODULE_1__[\"default\"](val);};cov_18bf44cn85.s[13]++;Either.Left=function(val){cov_18bf44cn85.f[3]++;cov_18bf44cn85.s[14]++;return new _Left__WEBPACK_IMPORTED_MODULE_1__[\"default\"](val);};cov_18bf44cn85.s[15]++;Either.prototype.Right=function(val){cov_18bf44cn85.f[4]++;cov_18bf44cn85.s[16]++;return new _Right__WEBPACK_IMPORTED_MODULE_0__[\"default\"](val);};cov_18bf44cn85.s[17]++;Either.Right=function(val){cov_18bf44cn85.f[5]++;cov_18bf44cn85.s[18]++;return new _Right__WEBPACK_IMPORTED_MODULE_0__[\"default\"](val);};/* harmony default export */ __webpack_exports__[\"default\"] = (Either);\n\n//# sourceURL=webpack://fun/./src/monads/Either.js?");

/***/ }),

/***/ "./src/monads/Just.js":
/*!****************************!*\
  !*** ./src/monads/Just.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_2a0smgvn2g=function(){var path=\"/mnt/sda/git/fun/src/monads/Just.js\",hash=\"f1c07cdc93e9a5440f7102c06775350f916d0e1d\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/mnt/sda/git/fun/src/monads/Just.js\",statementMap:{\"0\":{start:{line:7,column:11},end:{line:10,column:1}},\"1\":{start:{line:8,column:2},end:{line:8,column:21}},\"2\":{start:{line:9,column:2},end:{line:9,column:14}},\"3\":{start:{line:18,column:0},end:{line:20,column:2}},\"4\":{start:{line:19,column:2},end:{line:19,column:14}},\"5\":{start:{line:28,column:0},end:{line:30,column:2}},\"6\":{start:{line:29,column:2},end:{line:29,column:15}}},fnMap:{\"0\":{name:\"Just\",decl:{start:{line:7,column:20},end:{line:7,column:24}},loc:{start:{line:7,column:30},end:{line:10,column:1}},line:7},\"1\":{name:\"(anonymous_1)\",decl:{start:{line:18,column:24},end:{line:18,column:25}},loc:{start:{line:18,column:36},end:{line:20,column:1}},line:18},\"2\":{name:\"(anonymous_2)\",decl:{start:{line:28,column:27},end:{line:28,column:28}},loc:{start:{line:28,column:39},end:{line:30,column:1}},line:28}},branchMap:{},s:{\"0\":0,\"1\":0,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0},f:{\"0\":0,\"1\":0,\"2\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2a0smgvn2g.s[0]++;var Just=function Just(val){cov_2a0smgvn2g.f[0]++;cov_2a0smgvn2g.s[1]++;this.__value=val;cov_2a0smgvn2g.s[2]++;return this;};cov_2a0smgvn2g.s[3]++;Just.prototype.isJust=function(){cov_2a0smgvn2g.f[1]++;cov_2a0smgvn2g.s[4]++;return true;};cov_2a0smgvn2g.s[5]++;Just.prototype.isNothing=function(){cov_2a0smgvn2g.f[2]++;cov_2a0smgvn2g.s[6]++;return false;};/* harmony default export */ __webpack_exports__[\"default\"] = (Just);\n\n//# sourceURL=webpack://fun/./src/monads/Just.js?");

/***/ }),

/***/ "./src/monads/Left.js":
/*!****************************!*\
  !*** ./src/monads/Left.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_t1260m4xs=function(){var path='/mnt/sda/git/fun/src/monads/Left.js',hash='2434000565b8e53962c6ce21c052d67245a5c9f6',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/monads/Left.js',statementMap:{'0':{start:{line:7,column:11},end:{line:10,column:1}},'1':{start:{line:8,column:2},end:{line:8,column:21}},'2':{start:{line:9,column:2},end:{line:9,column:14}},'3':{start:{line:22,column:0},end:{line:22,column:29}},'4':{start:{line:29,column:0},end:{line:31,column:2}},'5':{start:{line:30,column:2},end:{line:30,column:14}},'6':{start:{line:39,column:0},end:{line:41,column:2}},'7':{start:{line:40,column:2},end:{line:40,column:15}},'8':{start:{line:50,column:0},end:{line:52,column:2}},'9':{start:{line:51,column:2},end:{line:51,column:14}},'10':{start:{line:61,column:0},end:{line:63,column:2}},'11':{start:{line:62,column:2},end:{line:62,column:14}},'12':{start:{line:72,column:0},end:{line:74,column:2}},'13':{start:{line:73,column:2},end:{line:73,column:14}},'14':{start:{line:82,column:0},end:{line:84,column:2}},'15':{start:{line:83,column:2},end:{line:83,column:45}},'16':{start:{line:94,column:0},end:{line:96,column:2}},'17':{start:{line:95,column:2},end:{line:95,column:25}},'18':{start:{line:104,column:0},end:{line:106,column:2}},'19':{start:{line:105,column:2},end:{line:105,column:63}},'20':{start:{line:115,column:0},end:{line:117,column:2}},'21':{start:{line:116,column:2},end:{line:116,column:11}}},fnMap:{'0':{name:'Left',decl:{start:{line:7,column:20},end:{line:7,column:24}},loc:{start:{line:7,column:30},end:{line:10,column:1}},line:7},'1':{name:'(anonymous_1)',decl:{start:{line:29,column:24},end:{line:29,column:25}},loc:{start:{line:29,column:36},end:{line:31,column:1}},line:29},'2':{name:'(anonymous_2)',decl:{start:{line:39,column:25},end:{line:39,column:26}},loc:{start:{line:39,column:37},end:{line:41,column:1}},line:39},'3':{name:'(anonymous_3)',decl:{start:{line:50,column:20},end:{line:50,column:21}},loc:{start:{line:50,column:33},end:{line:52,column:1}},line:50},'4':{name:'(anonymous_4)',decl:{start:{line:61,column:21},end:{line:61,column:22}},loc:{start:{line:61,column:34},end:{line:63,column:1}},line:61},'5':{name:'(anonymous_5)',decl:{start:{line:72,column:23},end:{line:72,column:24}},loc:{start:{line:72,column:36},end:{line:74,column:1}},line:72},'6':{name:'(anonymous_6)',decl:{start:{line:82,column:26},end:{line:82,column:27}},loc:{start:{line:82,column:38},end:{line:84,column:1}},line:82},'7':{name:'(anonymous_7)',decl:{start:{line:94,column:22},end:{line:94,column:23}},loc:{start:{line:94,column:38},end:{line:96,column:1}},line:94},'8':{name:'(anonymous_8)',decl:{start:{line:104,column:21},end:{line:104,column:22}},loc:{start:{line:104,column:33},end:{line:106,column:1}},line:104},'9':{name:'(anonymous_9)',decl:{start:{line:115,column:27},end:{line:115,column:28}},loc:{start:{line:115,column:40},end:{line:117,column:1}},line:115}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_t1260m4xs.s[0]++;var Left=function Left(val){cov_t1260m4xs.f[0]++;cov_t1260m4xs.s[1]++;this.__value=val;cov_t1260m4xs.s[2]++;return this;};cov_t1260m4xs.s[3]++;Left.prototype.type='Left';cov_t1260m4xs.s[4]++;Left.prototype.isLeft=function(){cov_t1260m4xs.f[1]++;cov_t1260m4xs.s[5]++;return true;};cov_t1260m4xs.s[6]++;Left.prototype.isRight=function(){cov_t1260m4xs.f[2]++;cov_t1260m4xs.s[7]++;return false;};cov_t1260m4xs.s[8]++;Left.prototype.ap=function(b){cov_t1260m4xs.f[3]++;cov_t1260m4xs.s[9]++;return this;};cov_t1260m4xs.s[10]++;Left.prototype.map=function(f){cov_t1260m4xs.f[4]++;cov_t1260m4xs.s[11]++;return this;};cov_t1260m4xs.s[12]++;Left.prototype.chain=function(f){cov_t1260m4xs.f[5]++;cov_t1260m4xs.s[13]++;return this;};cov_t1260m4xs.s[14]++;Left.prototype.toString=function(){cov_t1260m4xs.f[6]++;cov_t1260m4xs.s[15]++;return'Either.Left('+this.__value+')';};cov_t1260m4xs.s[16]++;Left.prototype.cata=function(f,_){cov_t1260m4xs.f[7]++;cov_t1260m4xs.s[17]++;return f(this.__value);};cov_t1260m4xs.s[18]++;Left.prototype.get=function(){cov_t1260m4xs.f[8]++;cov_t1260m4xs.s[19]++;throw new TypeError(\"Can't extract the value of a Left(a).\");};cov_t1260m4xs.s[20]++;Left.prototype.getOrElse=function(a){cov_t1260m4xs.f[9]++;cov_t1260m4xs.s[21]++;return a;};/* harmony default export */ __webpack_exports__[\"default\"] = (Left);\n\n//# sourceURL=webpack://fun/./src/monads/Left.js?");

/***/ }),

/***/ "./src/monads/Maybe.js":
/*!*****************************!*\
  !*** ./src/monads/Maybe.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Just__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Just */ \"./src/monads/Just.js\");\n/* harmony import */ var _Nothing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nothing */ \"./src/monads/Nothing.js\");\nvar cov_1qzteo4lvv=function(){var path='/mnt/sda/git/fun/src/monads/Maybe.js',hash='8a6a977947a6564b9b2a73a7490262625ff90ec1',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/monads/Maybe.js',statementMap:{'0':{start:{line:13,column:12},end:{line:15,column:1}},'1':{start:{line:14,column:2},end:{line:14,column:21}},'2':{start:{line:28,column:0},end:{line:37,column:2}},'3':{start:{line:29,column:2},end:{line:29,column:39}},'4':{start:{line:29,column:28},end:{line:29,column:39}},'5':{start:{line:31,column:2},end:{line:34,column:3}},'6':{start:{line:32,column:4},end:{line:32,column:23}},'7':{start:{line:33,column:4},end:{line:33,column:16}},'8':{start:{line:36,column:2},end:{line:36,column:24}},'9':{start:{line:49,column:0},end:{line:49,column:31}},'10':{start:{line:65,column:0},end:{line:67,column:2}},'11':{start:{line:66,column:2},end:{line:66,column:45}},'12':{start:{line:76,column:0},end:{line:82,column:2}},'13':{start:{line:77,column:2},end:{line:79,column:3}},'14':{start:{line:78,column:4},end:{line:78,column:26}},'15':{start:{line:81,column:2},end:{line:81,column:35}},'16':{start:{line:91,column:0},end:{line:93,column:2}},'17':{start:{line:92,column:2},end:{line:92,column:21}},'18':{start:{line:102,column:0},end:{line:104,column:2}},'19':{start:{line:103,column:2},end:{line:103,column:39}},'20':{start:{line:112,column:0},end:{line:114,column:2}},'21':{start:{line:113,column:2},end:{line:113,column:30}},'22':{start:{line:122,column:0},end:{line:124,column:2}},'23':{start:{line:123,column:2},end:{line:123,column:27}},'24':{start:{line:134,column:0},end:{line:136,column:2}},'25':{start:{line:135,column:2},end:{line:135,column:23}},'26':{start:{line:146,column:0},end:{line:148,column:2}},'27':{start:{line:147,column:2},end:{line:147,column:31}}},fnMap:{'0':{name:'Maybe',decl:{start:{line:13,column:21},end:{line:13,column:26}},loc:{start:{line:13,column:32},end:{line:15,column:1}},line:13},'1':{name:'(anonymous_1)',decl:{start:{line:28,column:11},end:{line:28,column:12}},loc:{start:{line:28,column:26},end:{line:37,column:1}},line:28},'2':{name:'(anonymous_2)',decl:{start:{line:65,column:28},end:{line:65,column:29}},loc:{start:{line:65,column:41},end:{line:67,column:1}},line:65},'3':{name:'(anonymous_3)',decl:{start:{line:76,column:22},end:{line:76,column:23}},loc:{start:{line:76,column:35},end:{line:82,column:1}},line:76},'4':{name:'(anonymous_4)',decl:{start:{line:91,column:26},end:{line:91,column:27}},loc:{start:{line:91,column:39},end:{line:93,column:1}},line:91},'5':{name:'(anonymous_5)',decl:{start:{line:102,column:21},end:{line:102,column:22}},loc:{start:{line:102,column:34},end:{line:104,column:1}},line:102},'6':{name:'(anonymous_6)',decl:{start:{line:112,column:28},end:{line:112,column:29}},loc:{start:{line:112,column:40},end:{line:114,column:1}},line:112},'7':{name:'(anonymous_7)',decl:{start:{line:122,column:25},end:{line:122,column:26}},loc:{start:{line:122,column:37},end:{line:124,column:1}},line:122},'8':{name:'(anonymous_8)',decl:{start:{line:134,column:26},end:{line:134,column:27}},loc:{start:{line:134,column:38},end:{line:136,column:1}},line:134},'9':{name:'(anonymous_9)',decl:{start:{line:146,column:23},end:{line:146,column:24}},loc:{start:{line:146,column:35},end:{line:148,column:1}},line:146}},branchMap:{'0':{loc:{start:{line:29,column:2},end:{line:29,column:39}},type:'if',locations:[{start:{line:29,column:2},end:{line:29,column:39}},{start:{line:29,column:2},end:{line:29,column:39}}],line:29},'1':{loc:{start:{line:31,column:2},end:{line:34,column:3}},type:'if',locations:[{start:{line:31,column:2},end:{line:34,column:3}},{start:{line:31,column:2},end:{line:34,column:3}}],line:31},'2':{loc:{start:{line:66,column:9},end:{line:66,column:44}},type:'cond-expr',locations:[{start:{line:66,column:28},end:{line:66,column:29}},{start:{line:66,column:32},end:{line:66,column:44}}],line:66},'3':{loc:{start:{line:77,column:2},end:{line:79,column:3}},type:'if',locations:[{start:{line:77,column:2},end:{line:79,column:3}},{start:{line:77,column:2},end:{line:79,column:3}}],line:77}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1qzteo4lvv.s[0]++;var Maybe=function Maybe(val){cov_1qzteo4lvv.f[0]++;cov_1qzteo4lvv.s[1]++;this.__value=val;};cov_1qzteo4lvv.s[2]++;Maybe.of=function(val){cov_1qzteo4lvv.f[1]++;cov_1qzteo4lvv.s[3]++;if(val instanceof Maybe){cov_1qzteo4lvv.b[0][0]++;cov_1qzteo4lvv.s[4]++;return val;}else{cov_1qzteo4lvv.b[0][1]++;}cov_1qzteo4lvv.s[5]++;if(this instanceof Maybe){cov_1qzteo4lvv.b[1][0]++;cov_1qzteo4lvv.s[6]++;this.__value=val;cov_1qzteo4lvv.s[7]++;return this;}else{cov_1qzteo4lvv.b[1][1]++;}cov_1qzteo4lvv.s[8]++;return new Maybe(val);};cov_1qzteo4lvv.s[9]++;Maybe.prototype.type='Maybe';cov_1qzteo4lvv.s[10]++;Maybe.prototype.getOrElse=function(n){cov_1qzteo4lvv.f[2]++;cov_1qzteo4lvv.s[11]++;return this.isNothing()?(cov_1qzteo4lvv.b[2][0]++,n):(cov_1qzteo4lvv.b[2][1]++,this.__value);};cov_1qzteo4lvv.s[12]++;Maybe.prototype.map=function(f){cov_1qzteo4lvv.f[3]++;cov_1qzteo4lvv.s[13]++;if(this.isNothing()){cov_1qzteo4lvv.b[3][0]++;cov_1qzteo4lvv.s[14]++;return Maybe.of(null);}else{cov_1qzteo4lvv.b[3][1]++;}cov_1qzteo4lvv.s[15]++;return Maybe.of(f(this.__value));};cov_1qzteo4lvv.s[16]++;Maybe.prototype.flatMap=function(f){cov_1qzteo4lvv.f[4]++;cov_1qzteo4lvv.s[17]++;return this.map(f);};cov_1qzteo4lvv.s[18]++;Maybe.prototype.ap=function(m){cov_1qzteo4lvv.f[5]++;cov_1qzteo4lvv.s[19]++;return Maybe.of(m).map(this.__value);};cov_1qzteo4lvv.s[20]++;Maybe.prototype.isNothing=function(){cov_1qzteo4lvv.f[6]++;cov_1qzteo4lvv.s[21]++;return this.__value==null;};cov_1qzteo4lvv.s[22]++;Maybe.prototype.isJust=function(){cov_1qzteo4lvv.f[7]++;cov_1qzteo4lvv.s[23]++;return!this.isNothing();};cov_1qzteo4lvv.s[24]++;Maybe.prototype.Nothing=function(){cov_1qzteo4lvv.f[8]++;cov_1qzteo4lvv.s[25]++;return new _Nothing__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();};cov_1qzteo4lvv.s[26]++;Maybe.prototype.Just=function(){cov_1qzteo4lvv.f[9]++;cov_1qzteo4lvv.s[27]++;return new _Just__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this._value);};/* harmony default export */ __webpack_exports__[\"default\"] = (Maybe);\n\n//# sourceURL=webpack://fun/./src/monads/Maybe.js?");

/***/ }),

/***/ "./src/monads/Nothing.js":
/*!*******************************!*\
  !*** ./src/monads/Nothing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_2mbsgqvvi8=function(){var path=\"/mnt/sda/git/fun/src/monads/Nothing.js\",hash=\"8fe8dd5adf5d3ca5b37f22bf7c3c1db7b6497f90\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/mnt/sda/git/fun/src/monads/Nothing.js\",statementMap:{\"0\":{start:{line:5,column:14},end:{line:5,column:35}},\"1\":{start:{line:13,column:0},end:{line:15,column:2}},\"2\":{start:{line:14,column:2},end:{line:14,column:15}},\"3\":{start:{line:23,column:0},end:{line:25,column:2}},\"4\":{start:{line:24,column:2},end:{line:24,column:14}}},fnMap:{\"0\":{name:\"Nothing\",decl:{start:{line:5,column:23},end:{line:5,column:30}},loc:{start:{line:5,column:33},end:{line:5,column:35}},line:5},\"1\":{name:\"(anonymous_1)\",decl:{start:{line:13,column:27},end:{line:13,column:28}},loc:{start:{line:13,column:39},end:{line:15,column:1}},line:13},\"2\":{name:\"(anonymous_2)\",decl:{start:{line:23,column:30},end:{line:23,column:31}},loc:{start:{line:23,column:42},end:{line:25,column:1}},line:23}},branchMap:{},s:{\"0\":0,\"1\":0,\"2\":0,\"3\":0,\"4\":0},f:{\"0\":0,\"1\":0,\"2\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2mbsgqvvi8.s[0]++;var Nothing=function Nothing(){cov_2mbsgqvvi8.f[0]++;};cov_2mbsgqvvi8.s[1]++;Nothing.prototype.isJust=function(){cov_2mbsgqvvi8.f[1]++;cov_2mbsgqvvi8.s[2]++;return false;};cov_2mbsgqvvi8.s[3]++;Nothing.prototype.isNothing=function(){cov_2mbsgqvvi8.f[2]++;cov_2mbsgqvvi8.s[4]++;return true;};/* harmony default export */ __webpack_exports__[\"default\"] = (Nothing);\n\n//# sourceURL=webpack://fun/./src/monads/Nothing.js?");

/***/ }),

/***/ "./src/monads/Right.js":
/*!*****************************!*\
  !*** ./src/monads/Right.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_u1alqdy3d=function(){var path='/mnt/sda/git/fun/src/monads/Right.js',hash='3f66626e09f1564e7ed53cec67ddfb34d26a450f',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/monads/Right.js',statementMap:{'0':{start:{line:7,column:12},end:{line:10,column:1}},'1':{start:{line:8,column:2},end:{line:8,column:21}},'2':{start:{line:9,column:2},end:{line:9,column:14}},'3':{start:{line:22,column:0},end:{line:22,column:31}},'4':{start:{line:29,column:0},end:{line:31,column:2}},'5':{start:{line:30,column:2},end:{line:30,column:14}},'6':{start:{line:39,column:0},end:{line:41,column:2}},'7':{start:{line:40,column:2},end:{line:40,column:15}},'8':{start:{line:50,column:0},end:{line:52,column:2}},'9':{start:{line:51,column:2},end:{line:51,column:29}},'10':{start:{line:61,column:0},end:{line:63,column:2}},'11':{start:{line:62,column:2},end:{line:62,column:36}},'12':{start:{line:72,column:0},end:{line:74,column:2}},'13':{start:{line:73,column:2},end:{line:73,column:25}},'14':{start:{line:82,column:0},end:{line:84,column:2}},'15':{start:{line:83,column:2},end:{line:83,column:46}},'16':{start:{line:94,column:0},end:{line:96,column:2}},'17':{start:{line:95,column:2},end:{line:95,column:25}},'18':{start:{line:104,column:0},end:{line:106,column:2}},'19':{start:{line:105,column:2},end:{line:105,column:22}},'20':{start:{line:115,column:0},end:{line:117,column:2}},'21':{start:{line:116,column:2},end:{line:116,column:22}}},fnMap:{'0':{name:'Right',decl:{start:{line:7,column:21},end:{line:7,column:26}},loc:{start:{line:7,column:32},end:{line:10,column:1}},line:7},'1':{name:'(anonymous_1)',decl:{start:{line:29,column:26},end:{line:29,column:27}},loc:{start:{line:29,column:38},end:{line:31,column:1}},line:29},'2':{name:'(anonymous_2)',decl:{start:{line:39,column:25},end:{line:39,column:26}},loc:{start:{line:39,column:37},end:{line:41,column:1}},line:39},'3':{name:'(anonymous_3)',decl:{start:{line:50,column:21},end:{line:50,column:22}},loc:{start:{line:50,column:34},end:{line:52,column:1}},line:50},'4':{name:'(anonymous_4)',decl:{start:{line:61,column:22},end:{line:61,column:23}},loc:{start:{line:61,column:35},end:{line:63,column:1}},line:61},'5':{name:'(anonymous_5)',decl:{start:{line:72,column:24},end:{line:72,column:25}},loc:{start:{line:72,column:37},end:{line:74,column:1}},line:72},'6':{name:'(anonymous_6)',decl:{start:{line:82,column:27},end:{line:82,column:28}},loc:{start:{line:82,column:39},end:{line:84,column:1}},line:82},'7':{name:'(anonymous_7)',decl:{start:{line:94,column:23},end:{line:94,column:24}},loc:{start:{line:94,column:39},end:{line:96,column:1}},line:94},'8':{name:'(anonymous_8)',decl:{start:{line:104,column:22},end:{line:104,column:23}},loc:{start:{line:104,column:34},end:{line:106,column:1}},line:104},'9':{name:'(anonymous_9)',decl:{start:{line:115,column:28},end:{line:115,column:29}},loc:{start:{line:115,column:41},end:{line:117,column:1}},line:115}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_u1alqdy3d.s[0]++;var Right=function Right(val){cov_u1alqdy3d.f[0]++;cov_u1alqdy3d.s[1]++;this.__value=val;cov_u1alqdy3d.s[2]++;return this;};cov_u1alqdy3d.s[3]++;Right.prototype.type='Right';cov_u1alqdy3d.s[4]++;Right.prototype.isRight=function(){cov_u1alqdy3d.f[1]++;cov_u1alqdy3d.s[5]++;return true;};cov_u1alqdy3d.s[6]++;Right.prototype.isLeft=function(){cov_u1alqdy3d.f[2]++;cov_u1alqdy3d.s[7]++;return false;};cov_u1alqdy3d.s[8]++;Right.prototype.ap=function(b){cov_u1alqdy3d.f[3]++;cov_u1alqdy3d.s[9]++;return b.map(this.__value);};cov_u1alqdy3d.s[10]++;Right.prototype.map=function(f){cov_u1alqdy3d.f[4]++;cov_u1alqdy3d.s[11]++;return new Right(f(this.__value));};cov_u1alqdy3d.s[12]++;Right.prototype.chain=function(f){cov_u1alqdy3d.f[5]++;cov_u1alqdy3d.s[13]++;return f(this.__value);};cov_u1alqdy3d.s[14]++;Right.prototype.toString=function(){cov_u1alqdy3d.f[6]++;cov_u1alqdy3d.s[15]++;return'Either.Right('+this.__value+')';};cov_u1alqdy3d.s[16]++;Right.prototype.cata=function(_,g){cov_u1alqdy3d.f[7]++;cov_u1alqdy3d.s[17]++;return g(this.__value);};cov_u1alqdy3d.s[18]++;Right.prototype.get=function(){cov_u1alqdy3d.f[8]++;cov_u1alqdy3d.s[19]++;return this.__value;};cov_u1alqdy3d.s[20]++;Right.prototype.getOrElse=function(f){cov_u1alqdy3d.f[9]++;cov_u1alqdy3d.s[21]++;return this.__value;};/* harmony default export */ __webpack_exports__[\"default\"] = (Right);\n\n//# sourceURL=webpack://fun/./src/monads/Right.js?");

/***/ }),

/***/ "./src/not.js":
/*!********************!*\
  !*** ./src/not.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_3m49qwe4v=function(){var path='/mnt/sda/git/fun/src/not.js',hash='29e8edee0756b1e98cc5147d458e9dd25c397c7c',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/not.js',statementMap:{'0':{start:{line:6,column:2},end:{line:6,column:12}}},fnMap:{'0':{name:'not',decl:{start:{line:5,column:30},end:{line:5,column:33}},loc:{start:{line:5,column:37},end:{line:7,column:1}},line:5}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function not(x){cov_3m49qwe4v.f[0]++;cov_3m49qwe4v.s[0]++;return!x;}));\n\n//# sourceURL=webpack://fun/./src/not.js?");

/***/ }),

/***/ "./src/null/is.js":
/*!************************!*\
  !*** ./src/null/is.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_1tt8nz9ajj=function(){var path='/mnt/sda/git/fun/src/null/is.js',hash='e74e2a6a109a3055f4e842e8ac8cce817081a59e',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/null/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('null'));\n\n//# sourceURL=webpack://fun/./src/null/is.js?");

/***/ }),

/***/ "./src/number/add.js":
/*!***************************!*\
  !*** ./src/number/add.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_269hh6es6g=function(){var path='/mnt/sda/git/fun/src/number/add.js',hash='13a3dca15331e585d302ecae785ba0e184366bfe',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/number/add.js',statementMap:{'0':{start:{line:14,column:2},end:{line:14,column:17}}},fnMap:{'0':{name:'add',decl:{start:{line:13,column:30},end:{line:13,column:33}},loc:{start:{line:13,column:40},end:{line:15,column:1}},line:13}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function add(a,b){cov_269hh6es6g.f[0]++;cov_269hh6es6g.s[0]++;return+a+ +b;}));\n\n//# sourceURL=webpack://fun/./src/number/add.js?");

/***/ }),

/***/ "./src/number/divide.js":
/*!******************************!*\
  !*** ./src/number/divide.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_gzea0mxit=function(){var path='/mnt/sda/git/fun/src/number/divide.js',hash='d71d12bdcc78773a52eb8eba97af6279cc4facb8',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/number/divide.js',statementMap:{'0':{start:{line:14,column:2},end:{line:14,column:17}}},fnMap:{'0':{name:'divide',decl:{start:{line:13,column:30},end:{line:13,column:36}},loc:{start:{line:13,column:43},end:{line:15,column:1}},line:13}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function divide(a,b){cov_gzea0mxit.f[0]++;cov_gzea0mxit.s[0]++;return+a/+b;}));\n\n//# sourceURL=webpack://fun/./src/number/divide.js?");

/***/ }),

/***/ "./src/number/is.js":
/*!**************************!*\
  !*** ./src/number/is.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_1giacyl1zz=function(){var path='/mnt/sda/git/fun/src/number/is.js',hash='a21ce00094cee8d6c12f6b6568c8b87609bf12f5',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/number/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Number'));\n\n//# sourceURL=webpack://fun/./src/number/is.js?");

/***/ }),

/***/ "./src/number/isNan.js":
/*!*****************************!*\
  !*** ./src/number/isNan.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isNan; });\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ \"./src/number/is.js\");\n/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../and */ \"./src/and.js\");\nvar cov_1fhm7svwa2=function(){var path='/mnt/sda/git/fun/src/number/isNan.js',hash='deb13219f752956640c8d3789d46d9722b48ee36',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/number/isNan.js',statementMap:{'0':{start:{line:9,column:2},end:{line:9,column:36}}},fnMap:{'0':{name:'isNan',decl:{start:{line:8,column:24},end:{line:8,column:29}},loc:{start:{line:8,column:33},end:{line:10,column:1}},line:8}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function isNan(x){cov_1fhm7svwa2.f[0]++;cov_1fhm7svwa2.s[0]++;return Object(_and__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x),isNaN(x));};\n\n//# sourceURL=webpack://fun/./src/number/isNan.js?");

/***/ }),

/***/ "./src/number/multiply.js":
/*!********************************!*\
  !*** ./src/number/multiply.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_wpn7ql4h2=function(){var path='/mnt/sda/git/fun/src/number/multiply.js',hash='6d2170746f3ab84f4ac5bfa879c0f01cae326510',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/number/multiply.js',statementMap:{'0':{start:{line:13,column:2},end:{line:13,column:17}}},fnMap:{'0':{name:'multiply',decl:{start:{line:12,column:30},end:{line:12,column:38}},loc:{start:{line:12,column:45},end:{line:14,column:1}},line:12}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function multiply(a,b){cov_wpn7ql4h2.f[0]++;cov_wpn7ql4h2.s[0]++;return+a*+b;}));\n\n//# sourceURL=webpack://fun/./src/number/multiply.js?");

/***/ }),

/***/ "./src/number/sum.js":
/*!***************************!*\
  !*** ./src/number/sum.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add */ \"./src/number/add.js\");\n/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fold */ \"./src/fold.js\");\nvar cov_11xsseo1ac=function(){var path='/mnt/sda/git/fun/src/number/sum.js',hash='84a92088b907095045b8a3562c8042be1143abe5',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/number/sum.js',statementMap:{'0':{start:{line:14,column:2},end:{line:14,column:25}}},fnMap:{'0':{name:'sum',decl:{start:{line:13,column:30},end:{line:13,column:33}},loc:{start:{line:13,column:37},end:{line:15,column:1}},line:13}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function sum(a){cov_11xsseo1ac.f[0]++;cov_11xsseo1ac.s[0]++;return Object(_fold__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_add__WEBPACK_IMPORTED_MODULE_1__[\"default\"],0,a);}));\n\n//# sourceURL=webpack://fun/./src/number/sum.js?");

/***/ }),

/***/ "./src/object/equals.js":
/*!******************************!*\
  !*** ./src/object/equals.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exists */ \"./src/exists.js\");\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../not */ \"./src/not.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../equals */ \"./src/equals.js\");\nvar cov_1u321cnhg7=function(){var path='/mnt/sda/git/fun/src/object/equals.js',hash='5a89fccfa82df3cfeae13117d96635e322f82c0e',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/equals.js',statementMap:{'0':{start:{line:13,column:2},end:{line:15,column:3}},'1':{start:{line:14,column:4},end:{line:14,column:52}},'2':{start:{line:14,column:39},end:{line:14,column:52}},'3':{start:{line:17,column:2},end:{line:19,column:3}},'4':{start:{line:18,column:4},end:{line:18,column:62}},'5':{start:{line:18,column:49},end:{line:18,column:62}},'6':{start:{line:21,column:2},end:{line:21,column:14}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:12,column:21},end:{line:12,column:22}},loc:{start:{line:12,column:37},end:{line:22,column:1}},line:12}},branchMap:{'0':{loc:{start:{line:14,column:4},end:{line:14,column:52}},type:'if',locations:[{start:{line:14,column:4},end:{line:14,column:52}},{start:{line:14,column:4},end:{line:14,column:52}}],line:14},'1':{loc:{start:{line:18,column:4},end:{line:18,column:62}},type:'if',locations:[{start:{line:18,column:4},end:{line:18,column:62}},{start:{line:18,column:4},end:{line:18,column:62}}],line:18},'2':{loc:{start:{line:18,column:8},end:{line:18,column:47}},type:'binary-expr',locations:[{start:{line:18,column:8},end:{line:18,column:28}},{start:{line:18,column:32},end:{line:18,column:47}}],line:18}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0},b:{'0':[0,0],'1':[0,0],'2':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(x,y){cov_1u321cnhg7.f[0]++;cov_1u321cnhg7.s[0]++;for(var keyX in x){cov_1u321cnhg7.s[1]++;if(Object(_not__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_equals__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(x[keyX],y[keyX]))){cov_1u321cnhg7.b[0][0]++;cov_1u321cnhg7.s[2]++;return false;}else{cov_1u321cnhg7.b[0][1]++;}}cov_1u321cnhg7.s[3]++;for(var keyY in y){cov_1u321cnhg7.s[4]++;if((cov_1u321cnhg7.b[2][0]++,Object(_not__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x[keyY])))&&(cov_1u321cnhg7.b[2][1]++,Object(_exists__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(y[keyY]))){cov_1u321cnhg7.b[1][0]++;cov_1u321cnhg7.s[5]++;return false;}else{cov_1u321cnhg7.b[1][1]++;}}cov_1u321cnhg7.s[6]++;return true;}));\n\n//# sourceURL=webpack://fun/./src/object/equals.js?");

/***/ }),

/***/ "./src/object/filter.js":
/*!******************************!*\
  !*** ./src/object/filter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ \"./src/object/keys.js\");\nvar cov_16pnb1p72=function(){var path='/mnt/sda/git/fun/src/object/filter.js',hash='517a071773ab819b21d9594f0cd7ce1e41b98176',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/filter.js',statementMap:{'0':{start:{line:12,column:10},end:{line:12,column:12}},'1':{start:{line:13,column:10},end:{line:13,column:17}},'2':{start:{line:15,column:2},end:{line:17,column:3}},'3':{start:{line:16,column:4},end:{line:16,column:39}},'4':{start:{line:16,column:21},end:{line:16,column:39}},'5':{start:{line:19,column:2},end:{line:19,column:11}}},fnMap:{'0':{name:'objectFilter',decl:{start:{line:11,column:30},end:{line:11,column:42}},loc:{start:{line:11,column:50},end:{line:20,column:1}},line:11}},branchMap:{'0':{loc:{start:{line:16,column:4},end:{line:16,column:39}},type:'if',locations:[{start:{line:16,column:4},end:{line:16,column:39}},{start:{line:16,column:4},end:{line:16,column:39}}],line:16}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function objectFilter(fn,o){cov_16pnb1p72.f[0]++;var r=(cov_16pnb1p72.s[0]++,{});var k=(cov_16pnb1p72.s[1]++,Object(_keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(o));cov_16pnb1p72.s[2]++;for(var i=0;i<k.length;i++){cov_16pnb1p72.s[3]++;if(fn(o[k[i]])){cov_16pnb1p72.b[0][0]++;cov_16pnb1p72.s[4]++;r[k[i]]=o[k[i]];}else{cov_16pnb1p72.b[0][1]++;}}cov_16pnb1p72.s[5]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/object/filter.js?");

/***/ }),

/***/ "./src/object/fold.js":
/*!****************************!*\
  !*** ./src/object/fold.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ \"./src/object/keys.js\");\nvar cov_29bdm1akjf=function(){var path='/mnt/sda/git/fun/src/object/fold.js',hash='4534964ff8c7389b1a808226fb98f04f3cd56f92',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/fold.js',statementMap:{'0':{start:{line:13,column:10},end:{line:13,column:17}},'1':{start:{line:14,column:10},end:{line:14,column:12}},'2':{start:{line:15,column:10},end:{line:15,column:18}},'3':{start:{line:16,column:10},end:{line:16,column:22}},'4':{start:{line:18,column:2},end:{line:20,column:3}},'5':{start:{line:19,column:4},end:{line:19,column:32}},'6':{start:{line:22,column:2},end:{line:22,column:11}}},fnMap:{'0':{name:'fold',decl:{start:{line:12,column:30},end:{line:12,column:34}},loc:{start:{line:12,column:48},end:{line:23,column:1}},line:12}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function fold(cb,init,o){cov_29bdm1akjf.f[0]++;var k=(cov_29bdm1akjf.s[0]++,Object(_keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(o));var i=(cov_29bdm1akjf.s[1]++,-1);var l=(cov_29bdm1akjf.s[2]++,k.length);var r=(cov_29bdm1akjf.s[3]++,Object(init));cov_29bdm1akjf.s[4]++;while(++i<l){cov_29bdm1akjf.s[5]++;r=cb(r,o[k[i]],k[i],o);}cov_29bdm1akjf.s[6]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/object/fold.js?");

/***/ }),

/***/ "./src/object/has.js":
/*!***************************!*\
  !*** ./src/object/has.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_2lr1a9meem=function(){var path='/mnt/sda/git/fun/src/object/has.js',hash='51419dd8e713862fa780a5271d19077e22da5875',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/has.js',statementMap:{'0':{start:{line:13,column:2},end:{line:13,column:57}}},fnMap:{'0':{name:'has',decl:{start:{line:12,column:30},end:{line:12,column:33}},loc:{start:{line:12,column:45},end:{line:14,column:1}},line:12}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function has(prop,obj){cov_2lr1a9meem.f[0]++;cov_2lr1a9meem.s[0]++;return Object.prototype.hasOwnProperty.call(obj,prop);}));\n\n//# sourceURL=webpack://fun/./src/object/has.js?");

/***/ }),

/***/ "./src/object/hasIn.js":
/*!*****************************!*\
  !*** ./src/object/hasIn.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_nab6htr9d=function(){var path='/mnt/sda/git/fun/src/object/hasIn.js',hash='8943b4f9b5abeaa660e55c27f85373661bca807f',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/hasIn.js',statementMap:{'0':{start:{line:13,column:2},end:{line:13,column:21}}},fnMap:{'0':{name:'hasIn',decl:{start:{line:12,column:30},end:{line:12,column:35}},loc:{start:{line:12,column:47},end:{line:14,column:1}},line:12}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function hasIn(prop,obj){cov_nab6htr9d.f[0]++;cov_nab6htr9d.s[0]++;return prop in obj;}));\n\n//# sourceURL=webpack://fun/./src/object/hasIn.js?");

/***/ }),

/***/ "./src/object/is.js":
/*!**************************!*\
  !*** ./src/object/is.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_1t8kgv20l5=function(){var path='/mnt/sda/git/fun/src/object/is.js',hash='dbd6d3087234fd69daf537fdc743f5fee2e9e573',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Object'));\n\n//# sourceURL=webpack://fun/./src/object/is.js?");

/***/ }),

/***/ "./src/object/keys.js":
/*!****************************!*\
  !*** ./src/object/keys.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_21umdim46n=function(){var path='/mnt/sda/git/fun/src/object/keys.js',hash='53c7d3f8263d9116eb46307ef3672d39caa71a24',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/keys.js',statementMap:{'0':{start:{line:12,column:2},end:{line:12,column:32}}},fnMap:{'0':{name:'keys',decl:{start:{line:11,column:30},end:{line:11,column:34}},loc:{start:{line:11,column:38},end:{line:13,column:1}},line:11}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function keys(a){cov_21umdim46n.f[0]++;cov_21umdim46n.s[0]++;return Object.keys(Object(a));}));\n\n//# sourceURL=webpack://fun/./src/object/keys.js?");

/***/ }),

/***/ "./src/object/keysIn.js":
/*!******************************!*\
  !*** ./src/object/keysIn.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_1lzk02th43=function(){var path='/mnt/sda/git/fun/src/object/keysIn.js',hash='aa5e43a72c76d4777550b67f1cf00cc582819cec',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/keysIn.js',statementMap:{'0':{start:{line:12,column:10},end:{line:12,column:12}},'1':{start:{line:14,column:2},end:{line:16,column:3}},'2':{start:{line:15,column:4},end:{line:15,column:14}},'3':{start:{line:18,column:2},end:{line:18,column:11}}},fnMap:{'0':{name:'keys',decl:{start:{line:11,column:30},end:{line:11,column:34}},loc:{start:{line:11,column:38},end:{line:19,column:1}},line:11}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function keys(a){cov_1lzk02th43.f[0]++;var r=(cov_1lzk02th43.s[0]++,[]);cov_1lzk02th43.s[1]++;for(var k in a){cov_1lzk02th43.s[2]++;r.push(k);}cov_1lzk02th43.s[3]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/object/keysIn.js?");

/***/ }),

/***/ "./src/object/map.js":
/*!***************************!*\
  !*** ./src/object/map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../empty */ \"./src/empty.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys */ \"./src/object/keys.js\");\nvar cov_16x7ll7av6=function(){var path='/mnt/sda/git/fun/src/object/map.js',hash='f64a7a767bdacb0a2c85e33d2d5640cd3452ec38',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/map.js',statementMap:{'0':{start:{line:15,column:10},end:{line:15,column:17}},'1':{start:{line:16,column:10},end:{line:16,column:12}},'2':{start:{line:17,column:10},end:{line:17,column:18}},'3':{start:{line:18,column:10},end:{line:18,column:18}},'4':{start:{line:20,column:2},end:{line:22,column:3}},'5':{start:{line:21,column:4},end:{line:21,column:35}},'6':{start:{line:24,column:2},end:{line:24,column:11}}},fnMap:{'0':{name:'map',decl:{start:{line:14,column:30},end:{line:14,column:33}},loc:{start:{line:14,column:41},end:{line:25,column:1}},line:14}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function map(cb,a){cov_16x7ll7av6.f[0]++;var k=(cov_16x7ll7av6.s[0]++,Object(_keys__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a));var i=(cov_16x7ll7av6.s[1]++,-1);var l=(cov_16x7ll7av6.s[2]++,k.length);var r=(cov_16x7ll7av6.s[3]++,Object(_empty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a));cov_16x7ll7av6.s[4]++;while(++i<l){cov_16x7ll7av6.s[5]++;r[k[i]]=cb(a[k[i]],k[i],a);}cov_16x7ll7av6.s[6]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/object/map.js?");

/***/ }),

/***/ "./src/object/merge.js":
/*!*****************************!*\
  !*** ./src/object/merge.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../identical */ \"./src/identical.js\");\n/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/is */ \"./src/object/is.js\");\n/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../array/is */ \"./src/array/is.js\");\n/* harmony import */ var _array_union__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../array/union */ \"./src/array/union.js\");\nvar cov_ky0yt4zpo=function(){var path='/mnt/sda/git/fun/src/object/merge.js',hash='3d0bf5bf75b238c462c83a5d8e696e5b288308af',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/merge.js',statementMap:{'0':{start:{line:14,column:12},end:{line:39,column:2}},'1':{start:{line:15,column:15},end:{line:15,column:38}},'2':{start:{line:17,column:2},end:{line:19,column:3}},'3':{start:{line:18,column:4},end:{line:18,column:35}},'4':{start:{line:21,column:2},end:{line:36,column:3}},'5':{start:{line:22,column:4},end:{line:24,column:5}},'6':{start:{line:23,column:6},end:{line:23,column:15}},'7':{start:{line:26,column:19},end:{line:26,column:28}},'8':{start:{line:27,column:19},end:{line:27,column:28}},'9':{start:{line:29,column:4},end:{line:35,column:5}},'10':{start:{line:30,column:6},end:{line:30,column:46}},'11':{start:{line:31,column:11},end:{line:35,column:5}},'12':{start:{line:32,column:6},end:{line:32,column:46}},'13':{start:{line:34,column:6},end:{line:34,column:29}},'14':{start:{line:38,column:2},end:{line:38,column:16}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:14,column:18},end:{line:14,column:19}},loc:{start:{line:14,column:40},end:{line:39,column:1}},line:14}},branchMap:{'0':{loc:{start:{line:17,column:2},end:{line:19,column:3}},type:'if',locations:[{start:{line:17,column:2},end:{line:19,column:3}},{start:{line:17,column:2},end:{line:19,column:3}}],line:17},'1':{loc:{start:{line:22,column:4},end:{line:24,column:5}},type:'if',locations:[{start:{line:22,column:4},end:{line:24,column:5}},{start:{line:22,column:4},end:{line:24,column:5}}],line:22},'2':{loc:{start:{line:29,column:4},end:{line:35,column:5}},type:'if',locations:[{start:{line:29,column:4},end:{line:35,column:5}},{start:{line:29,column:4},end:{line:35,column:5}}],line:29},'3':{loc:{start:{line:29,column:8},end:{line:29,column:48}},type:'binary-expr',locations:[{start:{line:29,column:8},end:{line:29,column:26}},{start:{line:29,column:30},end:{line:29,column:48}}],line:29},'4':{loc:{start:{line:31,column:11},end:{line:35,column:5}},type:'if',locations:[{start:{line:31,column:11},end:{line:35,column:5}},{start:{line:31,column:11},end:{line:35,column:5}}],line:31}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0},f:{'0':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var merge=(cov_ky0yt4zpo.s[0]++,Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(objL,objR){cov_ky0yt4zpo.f[0]++;var result=(cov_ky0yt4zpo.s[1]++,Object.assign({},objL));cov_ky0yt4zpo.s[2]++;if(Object(_identical__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(objL,objR)){cov_ky0yt4zpo.b[0][0]++;cov_ky0yt4zpo.s[3]++;return Object.assign({},objL);}else{cov_ky0yt4zpo.b[0][1]++;}cov_ky0yt4zpo.s[4]++;for(var key in objR){cov_ky0yt4zpo.s[5]++;if(!Object.prototype.hasOwnProperty.call(objR,key)){cov_ky0yt4zpo.b[1][0]++;cov_ky0yt4zpo.s[6]++;continue;}else{cov_ky0yt4zpo.b[1][1]++;}var oldValue=(cov_ky0yt4zpo.s[7]++,objR[key]);var newValue=(cov_ky0yt4zpo.s[8]++,objL[key]);cov_ky0yt4zpo.s[9]++;if((cov_ky0yt4zpo.b[3][0]++,Object(_object_is__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(oldValue))&&(cov_ky0yt4zpo.b[3][1]++,Object(_object_is__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newValue))){cov_ky0yt4zpo.b[2][0]++;cov_ky0yt4zpo.s[10]++;result[key]=merge(oldValue,newValue);}else{cov_ky0yt4zpo.b[2][1]++;cov_ky0yt4zpo.s[11]++;if(Object(_array_is__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newValue)){cov_ky0yt4zpo.b[4][0]++;cov_ky0yt4zpo.s[12]++;result[key]=Object(_array_union__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(newValue,oldValue);}else{cov_ky0yt4zpo.b[4][1]++;cov_ky0yt4zpo.s[13]++;result[key]=oldValue;}}}cov_ky0yt4zpo.s[14]++;return result;}));/* harmony default export */ __webpack_exports__[\"default\"] = (merge);\n\n//# sourceURL=webpack://fun/./src/object/merge.js?");

/***/ }),

/***/ "./src/object/omit.js":
/*!****************************!*\
  !*** ./src/object/omit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_1nhemedwy=function(){var path='/mnt/sda/git/fun/src/object/omit.js',hash='fd9c9a6528fc1526656364524eff00522f4a1bf6',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/omit.js',statementMap:{'0':{start:{line:10,column:15},end:{line:10,column:17}},'1':{start:{line:11,column:2},end:{line:15,column:5}},'2':{start:{line:12,column:4},end:{line:12,column:37}},'3':{start:{line:14,column:4},end:{line:14,column:27}},'4':{start:{line:16,column:2},end:{line:16,column:16}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:9,column:21},end:{line:9,column:22}},loc:{start:{line:9,column:43},end:{line:17,column:1}},line:9},'1':{name:'(anonymous_1)',decl:{start:{line:11,column:26},end:{line:11,column:27}},loc:{start:{line:11,column:41},end:{line:13,column:3}},line:11},'2':{name:'(anonymous_2)',decl:{start:{line:13,column:13},end:{line:13,column:14}},loc:{start:{line:13,column:28},end:{line:15,column:3}},line:13}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0},f:{'0':0,'1':0,'2':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(obj,names){cov_1nhemedwy.f[0]++;var result=(cov_1nhemedwy.s[0]++,{});cov_1nhemedwy.s[1]++;Object.keys(obj).filter(function(key){cov_1nhemedwy.f[1]++;cov_1nhemedwy.s[2]++;return names.indexOf(key)===-1;}).forEach(function(key){cov_1nhemedwy.f[2]++;cov_1nhemedwy.s[3]++;result[key]=obj[key];});cov_1nhemedwy.s[4]++;return result;}));\n\n//# sourceURL=webpack://fun/./src/object/omit.js?");

/***/ }),

/***/ "./src/object/path.js":
/*!****************************!*\
  !*** ./src/object/path.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_2awfxbpf1u=function(){var path='/mnt/sda/git/fun/src/object/path.js',hash='5896917fc724c1d6d4d9f3d32be22f61f80ff732',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/path.js',statementMap:{'0':{start:{line:21,column:12},end:{line:21,column:15}},'1':{start:{line:22,column:12},end:{line:22,column:13}},'2':{start:{line:25,column:2},end:{line:33,column:3}},'3':{start:{line:26,column:4},end:{line:28,column:5}},'4':{start:{line:27,column:6},end:{line:27,column:13}},'5':{start:{line:30,column:4},end:{line:30,column:18}},'6':{start:{line:31,column:4},end:{line:31,column:78}},'7':{start:{line:32,column:4},end:{line:32,column:13}},'8':{start:{line:35,column:2},end:{line:35,column:13}}},fnMap:{'0':{name:'path',decl:{start:{line:20,column:30},end:{line:20,column:34}},loc:{start:{line:20,column:46},end:{line:36,column:1}},line:20}},branchMap:{'0':{loc:{start:{line:26,column:4},end:{line:28,column:5}},type:'if',locations:[{start:{line:26,column:4},end:{line:28,column:5}},{start:{line:26,column:4},end:{line:28,column:5}}],line:26},'1':{loc:{start:{line:31,column:10},end:{line:31,column:77}},type:'cond-expr',locations:[{start:{line:31,column:32},end:{line:31,column:68}},{start:{line:31,column:71},end:{line:31,column:77}}],line:31},'2':{loc:{start:{line:31,column:32},end:{line:31,column:68}},type:'cond-expr',locations:[{start:{line:31,column:40},end:{line:31,column:59}},{start:{line:31,column:62},end:{line:31,column:68}}],line:31}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0},f:{'0':0},b:{'0':[0,0],'1':[0,0],'2':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function path(path,obj){cov_2awfxbpf1u.f[0]++;var val=(cov_2awfxbpf1u.s[0]++,obj);var idx=(cov_2awfxbpf1u.s[1]++,0);var p;cov_2awfxbpf1u.s[2]++;while(idx<path.length){cov_2awfxbpf1u.s[3]++;if(val==null){cov_2awfxbpf1u.b[0][0]++;cov_2awfxbpf1u.s[4]++;return;}else{cov_2awfxbpf1u.b[0][1]++;}cov_2awfxbpf1u.s[5]++;p=path[idx];cov_2awfxbpf1u.s[6]++;val=Number.isInteger(p)?(cov_2awfxbpf1u.b[1][0]++,p<0?(cov_2awfxbpf1u.b[2][0]++,val[val.length+p]):(cov_2awfxbpf1u.b[2][1]++,val[p])):(cov_2awfxbpf1u.b[1][1]++,val[p]);cov_2awfxbpf1u.s[7]++;idx+=1;}cov_2awfxbpf1u.s[8]++;return val;}));\n\n//# sourceURL=webpack://fun/./src/object/path.js?");

/***/ }),

/***/ "./src/object/pick.js":
/*!****************************!*\
  !*** ./src/object/pick.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_2r8g3f6r3f=function(){var path='/mnt/sda/git/fun/src/object/pick.js',hash='e925782c514e6fbcda5665c6a4682d052de171ee',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/pick.js',statementMap:{'0':{start:{line:11,column:10},end:{line:11,column:12}},'1':{start:{line:12,column:10},end:{line:12,column:11}},'2':{start:{line:14,column:2},end:{line:20,column:3}},'3':{start:{line:15,column:4},end:{line:17,column:5}},'4':{start:{line:16,column:6},end:{line:16,column:34}},'5':{start:{line:19,column:4},end:{line:19,column:11}},'6':{start:{line:22,column:2},end:{line:22,column:11}}},fnMap:{'0':{name:'pick',decl:{start:{line:10,column:30},end:{line:10,column:34}},loc:{start:{line:10,column:47},end:{line:23,column:1}},line:10}},branchMap:{'0':{loc:{start:{line:15,column:4},end:{line:17,column:5}},type:'if',locations:[{start:{line:15,column:4},end:{line:17,column:5}},{start:{line:15,column:4},end:{line:17,column:5}}],line:15}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function pick(props,obj){cov_2r8g3f6r3f.f[0]++;var r=(cov_2r8g3f6r3f.s[0]++,{});var i=(cov_2r8g3f6r3f.s[1]++,0);cov_2r8g3f6r3f.s[2]++;while(i<props.length){cov_2r8g3f6r3f.s[3]++;if(props[i]in obj){cov_2r8g3f6r3f.b[0][0]++;cov_2r8g3f6r3f.s[4]++;r[props[i]]=obj[props[i]];}else{cov_2r8g3f6r3f.b[0][1]++;}cov_2r8g3f6r3f.s[5]++;i+=1;}cov_2r8g3f6r3f.s[6]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/object/pick.js?");

/***/ }),

/***/ "./src/object/prop.js":
/*!****************************!*\
  !*** ./src/object/prop.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ \"./src/object/path.js\");\nvar cov_24i0hfkl53=function(){var path='/mnt/sda/git/fun/src/object/prop.js',hash='50573a9220a8268b9590dcfbd5954d73eea878a5',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/prop.js',statementMap:{'0':{start:{line:8,column:2},end:{line:8,column:24}}},fnMap:{'0':{name:'prop',decl:{start:{line:7,column:30},end:{line:7,column:34}},loc:{start:{line:7,column:43},end:{line:9,column:1}},line:7}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function prop(p,obj){cov_24i0hfkl53.f[0]++;cov_24i0hfkl53.s[0]++;return Object(_path__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([p],obj);}));\n\n//# sourceURL=webpack://fun/./src/object/prop.js?");

/***/ }),

/***/ "./src/object/values.js":
/*!******************************!*\
  !*** ./src/object/values.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/curry1 */ \"./src/_private/curry1.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ \"./src/object/keys.js\");\nvar cov_7i9c27gyb=function(){var path='/mnt/sda/git/fun/src/object/values.js',hash='c1ee32fd64f62a22c96735fef7563ccd1609bb1c',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/object/values.js',statementMap:{'0':{start:{line:12,column:10},end:{line:12,column:19}},'1':{start:{line:13,column:10},end:{line:13,column:18}},'2':{start:{line:14,column:10},end:{line:14,column:12}},'3':{start:{line:15,column:10},end:{line:15,column:11}},'4':{start:{line:17,column:2},end:{line:20,column:3}},'5':{start:{line:18,column:4},end:{line:18,column:21}},'6':{start:{line:19,column:4},end:{line:19,column:11}},'7':{start:{line:22,column:2},end:{line:22,column:11}}},fnMap:{'0':{name:'values',decl:{start:{line:11,column:31},end:{line:11,column:37}},loc:{start:{line:11,column:43},end:{line:23,column:1}},line:11}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function values(obj){cov_7i9c27gyb.f[0]++;var k=(cov_7i9c27gyb.s[0]++,Object(_keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj));var l=(cov_7i9c27gyb.s[1]++,k.length);var r=(cov_7i9c27gyb.s[2]++,[]);var i=(cov_7i9c27gyb.s[3]++,0);cov_7i9c27gyb.s[4]++;while(i<l){cov_7i9c27gyb.s[5]++;r[i]=obj[k[i]];cov_7i9c27gyb.s[6]++;i+=1;}cov_7i9c27gyb.s[7]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/object/values.js?");

/***/ }),

/***/ "./src/or.js":
/*!*******************!*\
  !*** ./src/or.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1yvwz5ptyy=function(){var path='/mnt/sda/git/fun/src/or.js',hash='55427a4463e682bd0a8974f6e0d33a41ad47042c',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/or.js',statementMap:{'0':{start:{line:7,column:2},end:{line:7,column:16}}},fnMap:{'0':{name:'or',decl:{start:{line:6,column:30},end:{line:6,column:32}},loc:{start:{line:6,column:39},end:{line:8,column:1}},line:6}},branchMap:{'0':{loc:{start:{line:7,column:9},end:{line:7,column:15}},type:'binary-expr',locations:[{start:{line:7,column:9},end:{line:7,column:10}},{start:{line:7,column:14},end:{line:7,column:15}}],line:7}},s:{'0':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function or(x,y){cov_1yvwz5ptyy.f[0]++;cov_1yvwz5ptyy.s[0]++;return(cov_1yvwz5ptyy.b[0][0]++,x)||(cov_1yvwz5ptyy.b[0][1]++,y);}));\n\n//# sourceURL=webpack://fun/./src/or.js?");

/***/ }),

/***/ "./src/reduce.js":
/*!***********************!*\
  !*** ./src/reduce.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/fold */ \"./src/array/fold.js\");\nvar cov_2r80o0xtzd=function(){var path='/mnt/sda/git/fun/src/reduce.js',hash='af8a7819d0cb76f6fb2333bcdbaaaf38c5bfc24b',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/reduce.js',statementMap:{'0':{start:{line:16,column:12},end:{line:16,column:21}},'1':{start:{line:17,column:13},end:{line:17,column:24}},'2':{start:{line:18,column:2},end:{line:18,column:29}}},fnMap:{'0':{name:'reduce',decl:{start:{line:15,column:30},end:{line:15,column:36}},loc:{start:{line:15,column:44},end:{line:19,column:1}},line:15}},branchMap:{},s:{'0':0,'1':0,'2':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function reduce(cb,a){cov_2r80o0xtzd.f[0]++;var arr=(cov_2r80o0xtzd.s[0]++,a.slice());var init=(cov_2r80o0xtzd.s[1]++,arr.shift());cov_2r80o0xtzd.s[2]++;return Object(_array_fold__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cb,init,arr);}));\n\n//# sourceURL=webpack://fun/./src/reduce.js?");

/***/ }),

/***/ "./src/set/is.js":
/*!***********************!*\
  !*** ./src/set/is.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_1cib77m47j=function(){var path='/mnt/sda/git/fun/src/set/is.js',hash='ce5f8fa60618230483f9faeaa9df4adb1b0372d3',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/set/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Set'));\n\n//# sourceURL=webpack://fun/./src/set/is.js?");

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_mm3stu8ve=function(){var path='/mnt/sda/git/fun/src/sort.js',hash='bd379e6da3207698c2e2f10258aae2ad71b9a644',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/sort.js',statementMap:{'0':{start:{line:16,column:2},end:{line:16,column:53}}},fnMap:{'0':{name:'sort',decl:{start:{line:15,column:30},end:{line:15,column:34}},loc:{start:{line:15,column:44},end:{line:17,column:1}},line:15}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function sort(comp,a){cov_mm3stu8ve.f[0]++;cov_mm3stu8ve.s[0]++;return Array.prototype.slice.call(a,0).sort(comp);}));\n\n//# sourceURL=webpack://fun/./src/sort.js?");

/***/ }),

/***/ "./src/string/concat.js":
/*!******************************!*\
  !*** ./src/string/concat.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return concat; });\nvar cov_n9a59147=function(){var path=\"/mnt/sda/git/fun/src/string/concat.js\",hash=\"1ba64dcaa134274b7c0908e76c2b8b432f234b4d\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/mnt/sda/git/fun/src/string/concat.js\",statementMap:{\"0\":{start:{line:7,column:2},end:{line:7,column:31}}},fnMap:{\"0\":{name:\"concat\",decl:{start:{line:5,column:24},end:{line:5,column:30}},loc:{start:{line:5,column:37},end:{line:8,column:1}},line:5}},branchMap:{},s:{\"0\":0},f:{\"0\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function concat(a,b){cov_n9a59147.f[0]++;cov_n9a59147.s[0]++;return String(a)+String(b);}\n\n//# sourceURL=webpack://fun/./src/string/concat.js?");

/***/ }),

/***/ "./src/string/fold.js":
/*!****************************!*\
  !*** ./src/string/fold.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_743pvzpib=function(){var path='/mnt/sda/git/fun/src/string/fold.js',hash='a5c1eff06c2272ee069b020e565ca96d3f1e864c',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/string/fold.js',statementMap:{'0':{start:{line:26,column:10},end:{line:26,column:12}},'1':{start:{line:27,column:10},end:{line:27,column:18}},'2':{start:{line:28,column:10},end:{line:28,column:14}},'3':{start:{line:30,column:2},end:{line:32,column:3}},'4':{start:{line:31,column:4},end:{line:31,column:33}},'5':{start:{line:34,column:2},end:{line:34,column:11}}},fnMap:{'0':{name:'fold',decl:{start:{line:25,column:30},end:{line:25,column:34}},loc:{start:{line:25,column:48},end:{line:35,column:1}},line:25}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function fold(cb,init,a){cov_743pvzpib.f[0]++;var i=(cov_743pvzpib.s[0]++,-1);var l=(cov_743pvzpib.s[1]++,a.length);var r=(cov_743pvzpib.s[2]++,init);cov_743pvzpib.s[3]++;while(++i<l){cov_743pvzpib.s[4]++;r=cb(r,a.charAt(i),i,a);}cov_743pvzpib.s[5]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/string/fold.js?");

/***/ }),

/***/ "./src/string/formatString.js":
/*!************************************!*\
  !*** ./src/string/formatString.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return formatString; });\n/* harmony import */ var _array_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/to */ \"./src/array/to.js\");\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../not */ \"./src/not.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_1j2iqmbm1g=function(){var path='/mnt/sda/git/fun/src/string/formatString.js',hash='669d74946bf77064c395b3bf23d382c6b13b67ca',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/string/formatString.js',statementMap:{'0':{start:{line:9,column:13},end:{line:9,column:31}},'1':{start:{line:10,column:2},end:{line:10,column:15}},'2':{start:{line:11,column:2},end:{line:13,column:5}},'3':{start:{line:12,column:4},end:{line:12,column:63}}},fnMap:{'0':{name:'formatString',decl:{start:{line:7,column:24},end:{line:7,column:36}},loc:{start:{line:7,column:42},end:{line:14,column:1}},line:7},'1':{name:'(anonymous_1)',decl:{start:{line:11,column:33},end:{line:11,column:34}},loc:{start:{line:11,column:55},end:{line:13,column:3}},line:11}},branchMap:{'0':{loc:{start:{line:12,column:11},end:{line:12,column:62}},type:'cond-expr',locations:[{start:{line:12,column:45},end:{line:12,column:54}},{start:{line:12,column:57},end:{line:12,column:62}}],line:12}},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0,'1':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function formatString(str){cov_1j2iqmbm1g.f[0]++;var args=(cov_1j2iqmbm1g.s[0]++,Object(_array_to__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arguments));cov_1j2iqmbm1g.s[1]++;args.shift();cov_1j2iqmbm1g.s[2]++;return str.replace(/{(\\d+)}/g,function(match,idx){cov_1j2iqmbm1g.f[1]++;cov_1j2iqmbm1g.s[3]++;return Object(_not__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_is__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Undefined',args[idx]))?(cov_1j2iqmbm1g.b[0][0]++,args[idx]):(cov_1j2iqmbm1g.b[0][1]++,match);});}\n\n//# sourceURL=webpack://fun/./src/string/formatString.js?");

/***/ }),

/***/ "./src/string/is.js":
/*!**************************!*\
  !*** ./src/string/is.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_2n6q6fkpv=function(){var path='/mnt/sda/git/fun/src/string/is.js',hash='5e03596546d41014196d47d5aba2cdd62b4d8773',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/string/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('String'));\n\n//# sourceURL=webpack://fun/./src/string/is.js?");

/***/ }),

/***/ "./src/string/map.js":
/*!***************************!*\
  !*** ./src/string/map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_11h0psczo6=function(){var path='/mnt/sda/git/fun/src/string/map.js',hash='52856e60a21fea111d20fb41af90f24ee58f2e12',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/string/map.js',statementMap:{'0':{start:{line:13,column:10},end:{line:13,column:12}},'1':{start:{line:14,column:10},end:{line:14,column:18}},'2':{start:{line:15,column:10},end:{line:15,column:12}},'3':{start:{line:17,column:2},end:{line:19,column:3}},'4':{start:{line:18,column:4},end:{line:18,column:31}},'5':{start:{line:21,column:2},end:{line:21,column:11}}},fnMap:{'0':{name:'map',decl:{start:{line:12,column:30},end:{line:12,column:33}},loc:{start:{line:12,column:41},end:{line:22,column:1}},line:12}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function map(cb,a){cov_11h0psczo6.f[0]++;var i=(cov_11h0psczo6.s[0]++,-1);var l=(cov_11h0psczo6.s[1]++,a.length);var r=(cov_11h0psczo6.s[2]++,'');cov_11h0psczo6.s[3]++;while(++i<l){cov_11h0psczo6.s[4]++;r+=cb(a.charAt(i),i,a);}cov_11h0psczo6.s[5]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/string/map.js?");

/***/ }),

/***/ "./src/truthy.js":
/*!***********************!*\
  !*** ./src/truthy.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exists */ \"./src/exists.js\");\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\nvar cov_t7wn3qu8w=function(){var path='/mnt/sda/git/fun/src/truthy.js',hash='c01ad6517ac944deb998348ca6073a8e01f5ccd8',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/truthy.js',statementMap:{'0':{start:{line:19,column:2},end:{line:19,column:34}}},fnMap:{'0':{name:'truthy',decl:{start:{line:18,column:31},end:{line:18,column:37}},loc:{start:{line:18,column:41},end:{line:20,column:1}},line:18}},branchMap:{'0':{loc:{start:{line:19,column:9},end:{line:19,column:33}},type:'binary-expr',locations:[{start:{line:19,column:9},end:{line:19,column:20}},{start:{line:19,column:24},end:{line:19,column:33}}],line:19}},s:{'0':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function truthy(x){cov_t7wn3qu8w.f[0]++;cov_t7wn3qu8w.s[0]++;return(cov_t7wn3qu8w.b[0][0]++,x!==false)&&(cov_t7wn3qu8w.b[0][1]++,Object(_exists__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x));}));\n\n//# sourceURL=webpack://fun/./src/truthy.js?");

/***/ }),

/***/ "./src/type.js":
/*!*********************!*\
  !*** ./src/type.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\nvar cov_295ik4nlni=function(){var path='/mnt/sda/git/fun/src/type.js',hash='f74aa0bc9d51cf0653712d5a25f906abbb275aff',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/type.js',statementMap:{'0':{start:{line:16,column:2},end:{line:16,column:56}}},fnMap:{'0':{name:'type',decl:{start:{line:15,column:31},end:{line:15,column:35}},loc:{start:{line:15,column:39},end:{line:17,column:1}},line:15}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function type(x){cov_295ik4nlni.f[0]++;cov_295ik4nlni.s[0]++;return Object.prototype.toString.call(x).slice(8,-1);}));\n\n//# sourceURL=webpack://fun/./src/type.js?");

/***/ }),

/***/ "./src/undefined/is.js":
/*!*****************************!*\
  !*** ./src/undefined/is.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_2hmrkoo770=function(){var path='/mnt/sda/git/fun/src/undefined/is.js',hash='ee9f64332627007aee84639c9b7daa04e21ccf4b',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/undefined/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('undefined'));\n\n//# sourceURL=webpack://fun/./src/undefined/is.js?");

/***/ }),

/***/ "./src/zip.js":
/*!********************!*\
  !*** ./src/zip.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _zipWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipWith */ \"./src/zipWith.js\");\nvar cov_2ixlbes2dy=function(){var path='/mnt/sda/git/fun/src/zip.js',hash='dacfea6eb27c2276c62818f748483b5d12623c5c',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/zip.js',statementMap:{'0':{start:{line:18,column:2},end:{line:20,column:11}},'1':{start:{line:19,column:4},end:{line:19,column:18}}},fnMap:{'0':{name:'zip',decl:{start:{line:17,column:30},end:{line:17,column:33}},loc:{start:{line:17,column:40},end:{line:21,column:1}},line:17},'1':{name:'_zipWith',decl:{start:{line:18,column:26},end:{line:18,column:34}},loc:{start:{line:18,column:41},end:{line:20,column:3}},line:18}},branchMap:{},s:{'0':0,'1':0},f:{'0':0,'1':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function zip(a,b){cov_2ixlbes2dy.f[0]++;cov_2ixlbes2dy.s[0]++;return Object(_zipWith__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function _zipWith(x,y){cov_2ixlbes2dy.f[1]++;cov_2ixlbes2dy.s[1]++;return[x,y];},a,b);}));\n\n//# sourceURL=webpack://fun/./src/zip.js?");

/***/ }),

/***/ "./src/zipObj.js":
/*!***********************!*\
  !*** ./src/zipObj.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_qf1hdzgig=function(){var path='/mnt/sda/git/fun/src/zipObj.js',hash='c88c743049b5aeaf11b0f4ab8c19618324c90d55',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/zipObj.js',statementMap:{'0':{start:{line:17,column:10},end:{line:17,column:11}},'1':{start:{line:18,column:10},end:{line:18,column:38}},'2':{start:{line:19,column:10},end:{line:19,column:12}},'3':{start:{line:21,column:2},end:{line:24,column:3}},'4':{start:{line:22,column:4},end:{line:22,column:19}},'5':{start:{line:23,column:4},end:{line:23,column:11}},'6':{start:{line:26,column:2},end:{line:26,column:11}}},fnMap:{'0':{name:'zipObj',decl:{start:{line:16,column:30},end:{line:16,column:36}},loc:{start:{line:16,column:43},end:{line:27,column:1}},line:16}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function zipObj(a,b){cov_qf1hdzgig.f[0]++;var i=(cov_qf1hdzgig.s[0]++,0);var l=(cov_qf1hdzgig.s[1]++,Math.min(a.length,b.length));var r=(cov_qf1hdzgig.s[2]++,{});cov_qf1hdzgig.s[3]++;while(i<l){cov_qf1hdzgig.s[4]++;r[a[i]]=b[i];cov_qf1hdzgig.s[5]++;i+=1;}cov_qf1hdzgig.s[6]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/zipObj.js?");

/***/ }),

/***/ "./src/zipWith.js":
/*!************************!*\
  !*** ./src/zipWith.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_t0gg641sh=function(){var path='/mnt/sda/git/fun/src/zipWith.js',hash='896df69ac76a0713c28c1270d7ac5115a64d8856',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/mnt/sda/git/fun/src/zipWith.js',statementMap:{'0':{start:{line:18,column:12},end:{line:18,column:14}},'1':{start:{line:19,column:12},end:{line:19,column:40}},'2':{start:{line:20,column:10},end:{line:20,column:11}},'3':{start:{line:22,column:2},end:{line:24,column:3}},'4':{start:{line:23,column:4},end:{line:23,column:29}},'5':{start:{line:26,column:2},end:{line:26,column:13}}},fnMap:{'0':{name:'zipWith',decl:{start:{line:17,column:30},end:{line:17,column:37}},loc:{start:{line:17,column:48},end:{line:27,column:1}},line:17}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function zipWith(cb,a,b){cov_t0gg641sh.f[0]++;var arr=(cov_t0gg641sh.s[0]++,[]);var len=(cov_t0gg641sh.s[1]++,Math.min(a.length,b.length));var i=(cov_t0gg641sh.s[2]++,0);cov_t0gg641sh.s[3]++;for(i=0;i<len;i++){cov_t0gg641sh.s[4]++;arr.push(cb(a[i],b[i]));}cov_t0gg641sh.s[5]++;return arr;}));\n\n//# sourceURL=webpack://fun/./src/zipWith.js?");

/***/ })

/******/ });
});