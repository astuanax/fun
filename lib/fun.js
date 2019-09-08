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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return curry1; });\nvar cov_2o7tfi9gaf=function(){var path=\"/Volumes/BigOne/github/fun/src/_private/curry1.js\",hash=\"9d144e4215b83e74244339397706cd13f7eac848\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/Volumes/BigOne/github/fun/src/_private/curry1.js\",statementMap:{\"0\":{start:{line:8,column:2},end:{line:10,column:4}},\"1\":{start:{line:9,column:4},end:{line:9,column:49}}},fnMap:{\"0\":{name:\"curry1\",decl:{start:{line:7,column:24},end:{line:7,column:30}},loc:{start:{line:7,column:35},end:{line:11,column:1}},line:7},\"1\":{name:\"curried\",decl:{start:{line:8,column:18},end:{line:8,column:25}},loc:{start:{line:8,column:29},end:{line:10,column:3}},line:8}},branchMap:{\"0\":{loc:{start:{line:9,column:11},end:{line:9,column:48}},type:\"cond-expr\",locations:[{start:{line:9,column:36},end:{line:9,column:40}},{start:{line:9,column:43},end:{line:9,column:48}}],line:9}},s:{\"0\":0,\"1\":0},f:{\"0\":0,\"1\":0},b:{\"0\":[0,0]},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function curry1(fn){cov_2o7tfi9gaf.f[0]++;cov_2o7tfi9gaf.s[0]++;return function curried(a){cov_2o7tfi9gaf.f[1]++;cov_2o7tfi9gaf.s[1]++;return arguments.length===0?(cov_2o7tfi9gaf.b[0][0]++,this):(cov_2o7tfi9gaf.b[0][1]++,fn(a));};}\n\n//# sourceURL=webpack://fun/./src/_private/curry1.js?");

/***/ }),

/***/ "./src/addIndex.js":
/*!*************************!*\
  !*** ./src/addIndex.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1cmsj722p2=function(){var path='/Volumes/BigOne/github/fun/src/addIndex.js',hash='a82b720501365391456c2bc0a61d22e3b34a8c08',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/addIndex.js',statementMap:{'0':{start:{line:19,column:10},end:{line:19,column:11}},'1':{start:{line:20,column:2},end:{line:22,column:8}},'2':{start:{line:21,column:4},end:{line:21,column:21}}},fnMap:{'0':{name:'addIndex',decl:{start:{line:18,column:30},end:{line:18,column:38}},loc:{start:{line:18,column:48},end:{line:23,column:1}},line:18},'1':{name:'(anonymous_1)',decl:{start:{line:20,column:11},end:{line:20,column:12}},loc:{start:{line:20,column:24},end:{line:22,column:3}},line:20}},branchMap:{},s:{'0':0,'1':0,'2':0},f:{'0':0,'1':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function addIndex(f,g,a){cov_1cmsj722p2.f[0]++;var i=(cov_1cmsj722p2.s[0]++,0);cov_1cmsj722p2.s[1]++;return f(function(v){cov_1cmsj722p2.f[1]++;cov_1cmsj722p2.s[2]++;return g(v,i++);},a);}));\n\n//# sourceURL=webpack://fun/./src/addIndex.js?");

/***/ }),

/***/ "./src/adjust.js":
/*!***********************!*\
  !*** ./src/adjust.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_w8chbm2an=function(){var path='/Volumes/BigOne/github/fun/src/adjust.js',hash='1fcf7b2517a7fcebb35ebdec2b1080f1a4c6001a',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/adjust.js',statementMap:{'0':{start:{line:21,column:10},end:{line:21,column:39}},'1':{start:{line:22,column:12},end:{line:22,column:36}},'2':{start:{line:23,column:2},end:{line:23,column:24}},'3':{start:{line:23,column:15},end:{line:23,column:24}},'4':{start:{line:24,column:2},end:{line:24,column:22}},'5':{start:{line:25,column:2},end:{line:25,column:11}}},fnMap:{'0':{name:'adjust',decl:{start:{line:20,column:30},end:{line:20,column:36}},loc:{start:{line:20,column:47},end:{line:26,column:1}},line:20}},branchMap:{'0':{loc:{start:{line:22,column:12},end:{line:22,column:36}},type:'cond-expr',locations:[{start:{line:22,column:20},end:{line:22,column:32}},{start:{line:22,column:35},end:{line:22,column:36}}],line:22},'1':{loc:{start:{line:23,column:2},end:{line:23,column:24}},type:'if',locations:[{start:{line:23,column:2},end:{line:23,column:24}},{start:{line:23,column:2},end:{line:23,column:24}}],line:23}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function adjust(fn,i,a){cov_w8chbm2an.f[0]++;var r=(cov_w8chbm2an.s[0]++,Array.prototype.slice.call(a));var idx=(cov_w8chbm2an.s[1]++,i<0?(cov_w8chbm2an.b[0][0]++,r.length+i):(cov_w8chbm2an.b[0][1]++,i));cov_w8chbm2an.s[2]++;if(!a[idx]){cov_w8chbm2an.b[1][0]++;cov_w8chbm2an.s[3]++;return r;}else{cov_w8chbm2an.b[1][1]++;}cov_w8chbm2an.s[4]++;r[idx]=fn(r[idx]);cov_w8chbm2an.s[5]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/adjust.js?");

/***/ }),

/***/ "./src/adjustWith.js":
/*!***************************!*\
  !*** ./src/adjustWith.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\nvar cov_61r9llmfk=function(){var path='/Volumes/BigOne/github/fun/src/adjustWith.js',hash='ec180905c97226f1c52f25f3a3400a8dc52ee234',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/adjustWith.js',statementMap:{'0':{start:{line:16,column:12},end:{line:22,column:3}},'1':{start:{line:17,column:4},end:{line:19,column:5}},'2':{start:{line:18,column:6},end:{line:18,column:19}},'3':{start:{line:21,column:4},end:{line:21,column:13}},'4':{start:{line:24,column:2},end:{line:24,column:49}}},fnMap:{'0':{name:'adjustWith',decl:{start:{line:15,column:30},end:{line:15,column:40}},loc:{start:{line:15,column:54},end:{line:25,column:1}},line:15},'1':{name:'_fn',decl:{start:{line:16,column:21},end:{line:16,column:24}},loc:{start:{line:16,column:28},end:{line:22,column:3}},line:16}},branchMap:{'0':{loc:{start:{line:17,column:4},end:{line:19,column:5}},type:'if',locations:[{start:{line:17,column:4},end:{line:19,column:5}},{start:{line:17,column:4},end:{line:19,column:5}}],line:17}},s:{'0':0,'1':0,'2':0,'3':0,'4':0},f:{'0':0,'1':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function adjustWith(fn,pred,a){cov_61r9llmfk.f[0]++;cov_61r9llmfk.s[0]++;var _fn=function _fn(x){cov_61r9llmfk.f[1]++;cov_61r9llmfk.s[1]++;if(pred(x)){cov_61r9llmfk.b[0][0]++;cov_61r9llmfk.s[2]++;return fn(x);}else{cov_61r9llmfk.b[0][1]++;}cov_61r9llmfk.s[3]++;return x;};cov_61r9llmfk.s[4]++;return Object(_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_fn,Array.prototype.slice.call(a));}));\n\n//# sourceURL=webpack://fun/./src/adjustWith.js?");

/***/ }),

/***/ "./src/all.js":
/*!********************!*\
  !*** ./src/all.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1uirwlhfk1=function(){var path='/Volumes/BigOne/github/fun/src/all.js',hash='fa6fd45dadf64b4c7362670b7f050710734f4f10',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/all.js',statementMap:{'0':{start:{line:14,column:12},end:{line:14,column:16}},'1':{start:{line:16,column:2},end:{line:21,column:3}},'2':{start:{line:17,column:4},end:{line:20,column:5}},'3':{start:{line:18,column:6},end:{line:18,column:18}},'4':{start:{line:19,column:6},end:{line:19,column:12}},'5':{start:{line:23,column:2},end:{line:23,column:13}}},fnMap:{'0':{name:'all',decl:{start:{line:13,column:30},end:{line:13,column:33}},loc:{start:{line:13,column:41},end:{line:24,column:1}},line:13}},branchMap:{'0':{loc:{start:{line:17,column:4},end:{line:20,column:5}},type:'if',locations:[{start:{line:17,column:4},end:{line:20,column:5}},{start:{line:17,column:4},end:{line:20,column:5}}],line:17}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function all(cb,a){cov_1uirwlhfk1.f[0]++;var res=(cov_1uirwlhfk1.s[0]++,true);cov_1uirwlhfk1.s[1]++;for(var i in a){cov_1uirwlhfk1.s[2]++;if(!cb(a[i])){cov_1uirwlhfk1.b[0][0]++;cov_1uirwlhfk1.s[3]++;res=false;cov_1uirwlhfk1.s[4]++;break;}else{cov_1uirwlhfk1.b[0][1]++;}}cov_1uirwlhfk1.s[5]++;return res;}));\n\n//# sourceURL=webpack://fun/./src/all.js?");

/***/ }),

/***/ "./src/allPass.js":
/*!************************!*\
  !*** ./src/allPass.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_jw0q2uwo=function(){var path='/Volumes/BigOne/github/fun/src/allPass.js',hash='8f6c7b4d30d67158d9e54c76337f1fc0ba456384',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/allPass.js',statementMap:{'0':{start:{line:13,column:2},end:{line:15,column:3}},'1':{start:{line:14,column:4},end:{line:14,column:33}},'2':{start:{line:14,column:20},end:{line:14,column:33}},'3':{start:{line:17,column:2},end:{line:17,column:14}}},fnMap:{'0':{name:'allPass',decl:{start:{line:12,column:30},end:{line:12,column:37}},loc:{start:{line:12,column:46},end:{line:18,column:1}},line:12}},branchMap:{'0':{loc:{start:{line:14,column:4},end:{line:14,column:33}},type:'if',locations:[{start:{line:14,column:4},end:{line:14,column:33}},{start:{line:14,column:4},end:{line:14,column:33}}],line:14}},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function allPass(cbs,a){cov_jw0q2uwo.f[0]++;cov_jw0q2uwo.s[0]++;for(var i=0;i<cbs.length;i++){cov_jw0q2uwo.s[1]++;if(!cbs[i](a)){cov_jw0q2uwo.b[0][0]++;cov_jw0q2uwo.s[2]++;return false;}else{cov_jw0q2uwo.b[0][1]++;}}cov_jw0q2uwo.s[3]++;return true;}));\n\n//# sourceURL=webpack://fun/./src/allPass.js?");

/***/ }),

/***/ "./src/always.js":
/*!***********************!*\
  !*** ./src/always.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_18ies0wn6t=function(){var path='/Volumes/BigOne/github/fun/src/always.js',hash='ad09c6e1f5beebf4f7832639c45d4e9c2e3f0acd',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/always.js',statementMap:{'0':{start:{line:13,column:2},end:{line:15,column:4}},'1':{start:{line:14,column:4},end:{line:14,column:13}}},fnMap:{'0':{name:'always',decl:{start:{line:12,column:30},end:{line:12,column:36}},loc:{start:{line:12,column:40},end:{line:16,column:1}},line:12},'1':{name:'(anonymous_1)',decl:{start:{line:13,column:9},end:{line:13,column:10}},loc:{start:{line:13,column:21},end:{line:15,column:3}},line:13}},branchMap:{},s:{'0':0,'1':0},f:{'0':0,'1':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function always(x){cov_18ies0wn6t.f[0]++;cov_18ies0wn6t.s[0]++;return function(){cov_18ies0wn6t.f[1]++;cov_18ies0wn6t.s[1]++;return x;};}));\n\n//# sourceURL=webpack://fun/./src/always.js?");

/***/ }),

/***/ "./src/and.js":
/*!********************!*\
  !*** ./src/and.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_ebl3yv7o=function(){var path='/Volumes/BigOne/github/fun/src/and.js',hash='9b4c12dd18bc1809e45acc5dc72f5d0a012a3e7f',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/and.js',statementMap:{'0':{start:{line:14,column:2},end:{line:14,column:16}}},fnMap:{'0':{name:'and',decl:{start:{line:13,column:30},end:{line:13,column:33}},loc:{start:{line:13,column:40},end:{line:15,column:1}},line:13}},branchMap:{'0':{loc:{start:{line:14,column:9},end:{line:14,column:15}},type:'binary-expr',locations:[{start:{line:14,column:9},end:{line:14,column:10}},{start:{line:14,column:14},end:{line:14,column:15}}],line:14}},s:{'0':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function and(x,y){cov_ebl3yv7o.f[0]++;cov_ebl3yv7o.s[0]++;return(cov_ebl3yv7o.b[0][0]++,x)&&(cov_ebl3yv7o.b[0][1]++,y);}));\n\n//# sourceURL=webpack://fun/./src/and.js?");

/***/ }),

/***/ "./src/any.js":
/*!********************!*\
  !*** ./src/any.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_p5uohrxht=function(){var path='/Volumes/BigOne/github/fun/src/any.js',hash='acf73bc5980cde23b0b676ffde645a2d5bb57b68',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/any.js',statementMap:{'0':{start:{line:14,column:12},end:{line:14,column:17}},'1':{start:{line:16,column:2},end:{line:21,column:3}},'2':{start:{line:17,column:4},end:{line:20,column:5}},'3':{start:{line:18,column:6},end:{line:18,column:17}},'4':{start:{line:19,column:6},end:{line:19,column:12}},'5':{start:{line:23,column:2},end:{line:23,column:13}}},fnMap:{'0':{name:'any',decl:{start:{line:13,column:30},end:{line:13,column:33}},loc:{start:{line:13,column:41},end:{line:24,column:1}},line:13}},branchMap:{'0':{loc:{start:{line:17,column:4},end:{line:20,column:5}},type:'if',locations:[{start:{line:17,column:4},end:{line:20,column:5}},{start:{line:17,column:4},end:{line:20,column:5}}],line:17}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function any(cb,a){cov_p5uohrxht.f[0]++;var res=(cov_p5uohrxht.s[0]++,false);cov_p5uohrxht.s[1]++;for(var i in a){cov_p5uohrxht.s[2]++;if(cb(a[i])){cov_p5uohrxht.b[0][0]++;cov_p5uohrxht.s[3]++;res=true;cov_p5uohrxht.s[4]++;break;}else{cov_p5uohrxht.b[0][1]++;}}cov_p5uohrxht.s[5]++;return res;}));\n\n//# sourceURL=webpack://fun/./src/any.js?");

/***/ }),

/***/ "./src/anyPass.js":
/*!************************!*\
  !*** ./src/anyPass.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_s3k5qg7i0=function(){var path='/Volumes/BigOne/github/fun/src/anyPass.js',hash='6f2667eafb837e16a7736d5da0bb35f2c797bab9',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/anyPass.js',statementMap:{'0':{start:{line:12,column:2},end:{line:14,column:3}},'1':{start:{line:13,column:4},end:{line:13,column:31}},'2':{start:{line:13,column:19},end:{line:13,column:31}},'3':{start:{line:16,column:2},end:{line:16,column:15}}},fnMap:{'0':{name:'anyPass',decl:{start:{line:11,column:30},end:{line:11,column:37}},loc:{start:{line:11,column:46},end:{line:17,column:1}},line:11}},branchMap:{'0':{loc:{start:{line:13,column:4},end:{line:13,column:31}},type:'if',locations:[{start:{line:13,column:4},end:{line:13,column:31}},{start:{line:13,column:4},end:{line:13,column:31}}],line:13}},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function anyPass(cbs,a){cov_s3k5qg7i0.f[0]++;cov_s3k5qg7i0.s[0]++;for(var i=0;i<cbs.length;i++){cov_s3k5qg7i0.s[1]++;if(cbs[i](a)){cov_s3k5qg7i0.b[0][0]++;cov_s3k5qg7i0.s[2]++;return true;}else{cov_s3k5qg7i0.b[0][1]++;}}cov_s3k5qg7i0.s[3]++;return false;}));\n\n//# sourceURL=webpack://fun/./src/anyPass.js?");

/***/ }),

/***/ "./src/ap.js":
/*!*******************!*\
  !*** ./src/ap.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is */ \"./src/is.js\");\n/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array/fold */ \"./src/array/fold.js\");\n/* harmony import */ var _array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array/map */ \"./src/array/map.js\");\nvar cov_1o4a7ra8ip=function(){var path='/Volumes/BigOne/github/fun/src/ap.js',hash='7837eeed3c3159a062447154130a4c4f70bff6ae',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/ap.js',statementMap:{'0':{start:{line:17,column:17},end:{line:17,column:31}},'1':{start:{line:19,column:2},end:{line:21,column:3}},'2':{start:{line:20,column:4},end:{line:20,column:24}},'3':{start:{line:23,column:2},end:{line:27,column:3}},'4':{start:{line:24,column:4},end:{line:26,column:6}},'5':{start:{line:25,column:6},end:{line:25,column:29}},'6':{start:{line:29,column:2},end:{line:31,column:14}},'7':{start:{line:30,column:4},end:{line:30,column:44}}},fnMap:{'0':{name:'ap',decl:{start:{line:18,column:30},end:{line:18,column:32}},loc:{start:{line:18,column:44},end:{line:32,column:1}},line:18},'1':{name:'(anonymous_1)',decl:{start:{line:24,column:11},end:{line:24,column:12}},loc:{start:{line:24,column:24},end:{line:26,column:5}},line:24},'2':{name:'(anonymous_2)',decl:{start:{line:29,column:14},end:{line:29,column:15}},loc:{start:{line:29,column:32},end:{line:31,column:3}},line:29}},branchMap:{'0':{loc:{start:{line:19,column:2},end:{line:21,column:3}},type:'if',locations:[{start:{line:19,column:2},end:{line:21,column:3}},{start:{line:19,column:2},end:{line:21,column:3}}],line:19},'1':{loc:{start:{line:23,column:2},end:{line:27,column:3}},type:'if',locations:[{start:{line:23,column:2},end:{line:27,column:3}},{start:{line:23,column:2},end:{line:27,column:3}}],line:23}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0},f:{'0':0,'1':0,'2':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var isFunction=(cov_1o4a7ra8ip.s[0]++,Object(_is__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Function'));/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function ap(fns,vals){cov_1o4a7ra8ip.f[0]++;cov_1o4a7ra8ip.s[1]++;if(isFunction(fns.ap)){cov_1o4a7ra8ip.b[0][0]++;cov_1o4a7ra8ip.s[2]++;return fns.ap(vals);}else{cov_1o4a7ra8ip.b[0][1]++;}cov_1o4a7ra8ip.s[3]++;if(isFunction(fns)){cov_1o4a7ra8ip.b[1][0]++;cov_1o4a7ra8ip.s[4]++;return function(x){cov_1o4a7ra8ip.f[1]++;cov_1o4a7ra8ip.s[5]++;return fns(x)(vals(x));};}else{cov_1o4a7ra8ip.b[1][1]++;}cov_1o4a7ra8ip.s[6]++;return Object(_array_fold__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(acc,f){cov_1o4a7ra8ip.f[2]++;cov_1o4a7ra8ip.s[7]++;return acc.concat(Object(_array_map__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_private_curry1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(f),vals));},[],fns);}));\n\n//# sourceURL=webpack://fun/./src/ap.js?");

/***/ }),

/***/ "./src/aperture.js":
/*!*************************!*\
  !*** ./src/aperture.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\nvar cov_1dmeurqjqn=function(){var path='/Volumes/BigOne/github/fun/src/aperture.js',hash='df67aba708fbdcb54c3516bebcd27315e9e2b8f4',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/aperture.js',statementMap:{'0':{start:{line:11,column:2},end:{line:13,column:3}},'1':{start:{line:12,column:4},end:{line:12,column:14}},'2':{start:{line:15,column:12},end:{line:15,column:35}},'3':{start:{line:16,column:2},end:{line:18,column:10}},'4':{start:{line:17,column:4},end:{line:17,column:33}}},fnMap:{'0':{name:'aperture',decl:{start:{line:10,column:30},end:{line:10,column:38}},loc:{start:{line:10,column:45},end:{line:19,column:1}},line:10},'1':{name:'(anonymous_1)',decl:{start:{line:16,column:13},end:{line:16,column:14}},loc:{start:{line:16,column:34},end:{line:18,column:3}},line:16}},branchMap:{'0':{loc:{start:{line:11,column:2},end:{line:13,column:3}},type:'if',locations:[{start:{line:11,column:2},end:{line:13,column:3}},{start:{line:11,column:2},end:{line:13,column:3}}],line:11}},s:{'0':0,'1':0,'2':0,'3':0,'4':0},f:{'0':0,'1':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function aperture(n,a){cov_1dmeurqjqn.f[0]++;cov_1dmeurqjqn.s[0]++;if(a.length<n){cov_1dmeurqjqn.b[0][0]++;cov_1dmeurqjqn.s[1]++;return[];}else{cov_1dmeurqjqn.b[0][1]++;}var res=(cov_1dmeurqjqn.s[2]++,Array(a.length-n+1));cov_1dmeurqjqn.s[3]++;return Object(_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(item,idx){cov_1dmeurqjqn.f[1]++;cov_1dmeurqjqn.s[4]++;return a.slice(idx,idx+n);},res);}));\n\n//# sourceURL=webpack://fun/./src/aperture.js?");

/***/ }),

/***/ "./src/append.js":
/*!***********************!*\
  !*** ./src/append.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ \"./src/concat.js\");\nvar cov_feu71lhll=function(){var path='/Volumes/BigOne/github/fun/src/append.js',hash='d356dbe26ce8016dad41d1faff158bb6d7eda3cc',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/append.js',statementMap:{'0':{start:{line:16,column:2},end:{line:16,column:28}}},fnMap:{'0':{name:'append',decl:{start:{line:15,column:30},end:{line:15,column:36}},loc:{start:{line:15,column:47},end:{line:17,column:1}},line:15}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function append(el,list){cov_feu71lhll.f[0]++;cov_feu71lhll.s[0]++;return Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list,[el]);}));\n\n//# sourceURL=webpack://fun/./src/append.js?");

/***/ }),

/***/ "./src/apply.js":
/*!**********************!*\
  !*** ./src/apply.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_2fke28xh1b=function(){var path='/Volumes/BigOne/github/fun/src/apply.js',hash='a79dd021b93e94a1a4caf68fa2c234b55bf9df29',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/apply.js',statementMap:{'0':{start:{line:17,column:2},end:{line:17,column:28}}},fnMap:{'0':{name:'apply',decl:{start:{line:16,column:30},end:{line:16,column:35}},loc:{start:{line:16,column:46},end:{line:18,column:1}},line:16}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function apply(fn,args){cov_2fke28xh1b.f[0]++;cov_2fke28xh1b.s[0]++;return fn.apply(fn,args);}));\n\n//# sourceURL=webpack://fun/./src/apply.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_10bd4c56y4=function(){var path='/Volumes/BigOne/github/fun/src/array/concat.js',hash='0d9bbbedcb79d04f2df11d35bc8377341a7a15e9',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/array/concat.js',statementMap:{'0':{start:{line:15,column:2},end:{line:15,column:38}}},fnMap:{'0':{name:'concat',decl:{start:{line:14,column:30},end:{line:14,column:36}},loc:{start:{line:14,column:43},end:{line:16,column:1}},line:14}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function concat(l,r){cov_10bd4c56y4.f[0]++;cov_10bd4c56y4.s[0]++;return Array.prototype.concat(l,r);}));\n\n//# sourceURL=webpack://fun/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/equals.js":
/*!*****************************!*\
  !*** ./src/array/equals.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../not */ \"./src/not.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../equals */ \"./src/equals.js\");\nvar cov_2j08fshgw5=function(){var path='/Volumes/BigOne/github/fun/src/array/equals.js',hash='856f17a0855b0b4bb909bc9c806c766b383eae17',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/array/equals.js',statementMap:{'0':{start:{line:12,column:2},end:{line:14,column:3}},'1':{start:{line:13,column:4},end:{line:13,column:17}},'2':{start:{line:16,column:2},end:{line:18,column:3}},'3':{start:{line:17,column:4},end:{line:17,column:46}},'4':{start:{line:17,column:33},end:{line:17,column:46}},'5':{start:{line:20,column:2},end:{line:20,column:14}}},fnMap:{'0':{name:'equalsArray',decl:{start:{line:11,column:30},end:{line:11,column:41}},loc:{start:{line:11,column:48},end:{line:21,column:1}},line:11}},branchMap:{'0':{loc:{start:{line:12,column:2},end:{line:14,column:3}},type:'if',locations:[{start:{line:12,column:2},end:{line:14,column:3}},{start:{line:12,column:2},end:{line:14,column:3}}],line:12},'1':{loc:{start:{line:17,column:4},end:{line:17,column:46}},type:'if',locations:[{start:{line:17,column:4},end:{line:17,column:46}},{start:{line:17,column:4},end:{line:17,column:46}}],line:17}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function equalsArray(x,y){cov_2j08fshgw5.f[0]++;cov_2j08fshgw5.s[0]++;if(x.length!==y.length){cov_2j08fshgw5.b[0][0]++;cov_2j08fshgw5.s[1]++;return false;}else{cov_2j08fshgw5.b[0][1]++;}cov_2j08fshgw5.s[2]++;for(var i=0;i<x.length;i++){cov_2j08fshgw5.s[3]++;if(Object(_not__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_equals__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x[i],y[i]))){cov_2j08fshgw5.b[1][0]++;cov_2j08fshgw5.s[4]++;return false;}else{cov_2j08fshgw5.b[1][1]++;}}cov_2j08fshgw5.s[5]++;return true;}));\n\n//# sourceURL=webpack://fun/./src/array/equals.js?");

/***/ }),

/***/ "./src/array/filter.js":
/*!*****************************!*\
  !*** ./src/array/filter.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_23n8659i3u=function(){var path='/Volumes/BigOne/github/fun/src/array/filter.js',hash='56f7eee314d0cf26926358926fe1e8aac932e8de',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/array/filter.js',statementMap:{'0':{start:{line:11,column:10},end:{line:11,column:12}},'1':{start:{line:13,column:2},end:{line:15,column:3}},'2':{start:{line:14,column:4},end:{line:14,column:31}},'3':{start:{line:14,column:18},end:{line:14,column:31}},'4':{start:{line:17,column:2},end:{line:17,column:11}}},fnMap:{'0':{name:'arrayFilter',decl:{start:{line:10,column:30},end:{line:10,column:41}},loc:{start:{line:10,column:49},end:{line:18,column:1}},line:10}},branchMap:{'0':{loc:{start:{line:14,column:4},end:{line:14,column:31}},type:'if',locations:[{start:{line:14,column:4},end:{line:14,column:31}},{start:{line:14,column:4},end:{line:14,column:31}}],line:14}},s:{'0':0,'1':0,'2':0,'3':0,'4':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function arrayFilter(fn,a){cov_23n8659i3u.f[0]++;var r=(cov_23n8659i3u.s[0]++,[]);cov_23n8659i3u.s[1]++;for(var i=0;i<a.length;i++){cov_23n8659i3u.s[2]++;if(fn(a[i])){cov_23n8659i3u.b[0][0]++;cov_23n8659i3u.s[3]++;r.push(a[i]);}else{cov_23n8659i3u.b[0][1]++;}}cov_23n8659i3u.s[4]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/array/filter.js?");

/***/ }),

/***/ "./src/array/fold.js":
/*!***************************!*\
  !*** ./src/array/fold.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_4dnj6oemr=function(){var path='/Volumes/BigOne/github/fun/src/array/fold.js',hash='9729083b999a674e4cbb17c116fed01dc1e884d9',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/array/fold.js',statementMap:{'0':{start:{line:26,column:10},end:{line:26,column:12}},'1':{start:{line:27,column:10},end:{line:27,column:18}},'2':{start:{line:28,column:10},end:{line:28,column:14}},'3':{start:{line:30,column:2},end:{line:32,column:3}},'4':{start:{line:31,column:4},end:{line:31,column:26}},'5':{start:{line:34,column:2},end:{line:34,column:11}}},fnMap:{'0':{name:'fold',decl:{start:{line:25,column:30},end:{line:25,column:34}},loc:{start:{line:25,column:48},end:{line:35,column:1}},line:25}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function fold(cb,init,a){cov_4dnj6oemr.f[0]++;var i=(cov_4dnj6oemr.s[0]++,-1);var l=(cov_4dnj6oemr.s[1]++,a.length);var r=(cov_4dnj6oemr.s[2]++,init);cov_4dnj6oemr.s[3]++;while(++i<l){cov_4dnj6oemr.s[4]++;r=cb(r,a[i],i,a);}cov_4dnj6oemr.s[5]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/array/fold.js?");

/***/ }),

/***/ "./src/array/is.js":
/*!*************************!*\
  !*** ./src/array/is.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_2mam1q0q24=function(){var path='/Volumes/BigOne/github/fun/src/array/is.js',hash='2a57d12230c7882863deee958c2251519c14e580',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/array/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Array'));\n\n//# sourceURL=webpack://fun/./src/array/is.js?");

/***/ }),

/***/ "./src/array/map.js":
/*!**************************!*\
  !*** ./src/array/map.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_fe2eyhyyl=function(){var path='/Volumes/BigOne/github/fun/src/array/map.js',hash='b5dfd402274325db35200c83916b9f70092d54aa',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/array/map.js',statementMap:{'0':{start:{line:18,column:10},end:{line:18,column:12}},'1':{start:{line:19,column:10},end:{line:19,column:18}},'2':{start:{line:20,column:10},end:{line:20,column:22}},'3':{start:{line:22,column:2},end:{line:24,column:3}},'4':{start:{line:23,column:4},end:{line:23,column:26}},'5':{start:{line:26,column:2},end:{line:26,column:11}}},fnMap:{'0':{name:'map',decl:{start:{line:17,column:30},end:{line:17,column:33}},loc:{start:{line:17,column:41},end:{line:27,column:1}},line:17}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function map(cb,a){cov_fe2eyhyyl.f[0]++;var i=(cov_fe2eyhyyl.s[0]++,-1);var l=(cov_fe2eyhyyl.s[1]++,a.length);var r=(cov_fe2eyhyyl.s[2]++,new Array(l));cov_fe2eyhyyl.s[3]++;while(++i<l){cov_fe2eyhyyl.s[4]++;r[i]=cb(a[i],i,a);}cov_fe2eyhyyl.s[5]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/array/map.js?");

/***/ }),

/***/ "./src/array/to.js":
/*!*************************!*\
  !*** ./src/array/to.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toArray; });\nvar cov_2q20cuuy8q=function(){var path=\"/Volumes/BigOne/github/fun/src/array/to.js\",hash=\"1aa0f31c1b77df07fe05840fc791640c1be503e7\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/Volumes/BigOne/github/fun/src/array/to.js\",statementMap:{\"0\":{start:{line:19,column:2},end:{line:19,column:56}}},fnMap:{\"0\":{name:\"toArray\",decl:{start:{line:18,column:24},end:{line:18,column:31}},loc:{start:{line:18,column:35},end:{line:20,column:1}},line:18}},branchMap:{\"0\":{loc:{start:{line:19,column:9},end:{line:19,column:55}},type:\"cond-expr\",locations:[{start:{line:19,column:26},end:{line:19,column:32}},{start:{line:19,column:35},end:{line:19,column:55}}],line:19}},s:{\"0\":0},f:{\"0\":0},b:{\"0\":[0,0]},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function toArray(x){cov_2q20cuuy8q.f[0]++;cov_2q20cuuy8q.s[0]++;return x.length===1?(cov_2q20cuuy8q.b[0][0]++,[x[0]]):(cov_2q20cuuy8q.b[0][1]++,Array.apply(null,x));};\n\n//# sourceURL=webpack://fun/./src/array/to.js?");

/***/ }),

/***/ "./src/array/union.js":
/*!****************************!*\
  !*** ./src/array/union.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_xf5v4ytir=function(){var path='/Volumes/BigOne/github/fun/src/array/union.js',hash='8c0694bc4eb2e6321d58b28d81ab70048b25b6ff',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/array/union.js',statementMap:{'0':{start:{line:15,column:2},end:{line:15,column:44}}},fnMap:{'0':{name:'unionArray',decl:{start:{line:14,column:30},end:{line:14,column:40}},loc:{start:{line:14,column:49},end:{line:16,column:1}},line:14}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function unionArray(aL,aR){cov_xf5v4ytir.f[0]++;cov_xf5v4ytir.s[0]++;return Array.from(new Set(aL.concat(aR)));}));\n\n//# sourceURL=webpack://fun/./src/array/union.js?");

/***/ }),

/***/ "./src/binary.js":
/*!***********************!*\
  !*** ./src/binary.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_oi97txkkc=function(){var path='/Volumes/BigOne/github/fun/src/binary.js',hash='a54fa28238527ec761261bdb9b0225a5fd91667f',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/binary.js',statementMap:{'0':{start:{line:9,column:2},end:{line:11,column:5}},'1':{start:{line:10,column:4},end:{line:10,column:20}}},fnMap:{'0':{name:'binary',decl:{start:{line:8,column:31},end:{line:8,column:37}},loc:{start:{line:8,column:42},end:{line:12,column:1}},line:8},'1':{name:'(anonymous_1)',decl:{start:{line:9,column:15},end:{line:9,column:16}},loc:{start:{line:9,column:31},end:{line:11,column:3}},line:9}},branchMap:{},s:{'0':0,'1':0},f:{'0':0,'1':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function binary(cb){cov_oi97txkkc.f[0]++;cov_oi97txkkc.s[0]++;return Object(_curry__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(a,b){cov_oi97txkkc.f[1]++;cov_oi97txkkc.s[1]++;return cb(a,b);});}));\n\n//# sourceURL=webpack://fun/./src/binary.js?");

/***/ }),

/***/ "./src/bind.js":
/*!*********************!*\
  !*** ./src/bind.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_51uxat1sk=function(){var path='/Volumes/BigOne/github/fun/src/bind.js',hash='90fa483f2bc62e8e7b1b370bba7e23aa7c8cc80a',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/bind.js',statementMap:{'0':{start:{line:11,column:2},end:{line:11,column:26}}},fnMap:{'0':{name:'bind',decl:{start:{line:10,column:30},end:{line:10,column:34}},loc:{start:{line:10,column:48},end:{line:12,column:1}},line:10}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function bind(fn,context){cov_51uxat1sk.f[0]++;cov_51uxat1sk.s[0]++;return fn.bind(context);}));\n\n//# sourceURL=webpack://fun/./src/bind.js?");

/***/ }),

/***/ "./src/boolean/F.js":
/*!**************************!*\
  !*** ./src/boolean/F.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../always */ \"./src/always.js\");\nvar cov_1fmospaevc=function(){var path='/Volumes/BigOne/github/fun/src/boolean/F.js',hash='6a24dc98397c83c589b285ad1ef00db46b5f6676',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/boolean/F.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_always__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false));\n\n//# sourceURL=webpack://fun/./src/boolean/F.js?");

/***/ }),

/***/ "./src/boolean/T.js":
/*!**************************!*\
  !*** ./src/boolean/T.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../always */ \"./src/always.js\");\nvar cov_3axmiushc=function(){var path='/Volumes/BigOne/github/fun/src/boolean/T.js',hash='7a64f08304fadfdd889114cdb0038616fdf1b86c',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/boolean/T.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_always__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true));\n\n//# sourceURL=webpack://fun/./src/boolean/T.js?");

/***/ }),

/***/ "./src/boolean/both.js":
/*!*****************************!*\
  !*** ./src/boolean/both.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lift */ \"./src/lift.js\");\n/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../and */ \"./src/and.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_cop4n3bo2=function(){var path='/Volumes/BigOne/github/fun/src/boolean/both.js',hash='bcde8a67fc0d05b97257bebcaf4cfc2963d8108e',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/boolean/both.js',statementMap:{'0':{start:{line:15,column:2},end:{line:17,column:26}},'1':{start:{line:16,column:4},end:{line:16,column:68}}},fnMap:{'0':{name:'both',decl:{start:{line:14,column:30},end:{line:14,column:34}},loc:{start:{line:14,column:45},end:{line:18,column:1}},line:14},'1':{name:'_both',decl:{start:{line:15,column:40},end:{line:15,column:45}},loc:{start:{line:15,column:48},end:{line:17,column:3}},line:15}},branchMap:{'0':{loc:{start:{line:15,column:9},end:{line:17,column:25}},type:'cond-expr',locations:[{start:{line:15,column:31},end:{line:17,column:3}},{start:{line:17,column:6},end:{line:17,column:25}}],line:15},'1':{loc:{start:{line:16,column:11},end:{line:16,column:67}},type:'binary-expr',locations:[{start:{line:16,column:11},end:{line:16,column:37}},{start:{line:16,column:41},end:{line:16,column:67}}],line:16}},s:{'0':0,'1':0},f:{'0':0,'1':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function both(fn1,fn2){cov_cop4n3bo2.f[0]++;cov_cop4n3bo2.s[0]++;return Object(_is__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Function')(fn1)?(cov_cop4n3bo2.b[0][0]++,function _both(){cov_cop4n3bo2.f[1]++;cov_cop4n3bo2.s[1]++;return(cov_cop4n3bo2.b[1][0]++,fn1.apply(this,arguments))&&(cov_cop4n3bo2.b[1][1]++,fn2.apply(this,arguments));}):(cov_cop4n3bo2.b[0][1]++,Object(_lift__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_and__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fn1,fn2));}));\n\n//# sourceURL=webpack://fun/./src/boolean/both.js?");

/***/ }),

/***/ "./src/boolean/is.js":
/*!***************************!*\
  !*** ./src/boolean/is.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_26usohqqn4=function(){var path='/Volumes/BigOne/github/fun/src/boolean/is.js',hash='ae70fec0cbb7d5e3d44d76e429e51f4329277143',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/boolean/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Boolean'));\n\n//# sourceURL=webpack://fun/./src/boolean/is.js?");

/***/ }),

/***/ "./src/call.js":
/*!*********************!*\
  !*** ./src/call.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_2bsisevsqw=function(){var path='/Volumes/BigOne/github/fun/src/call.js',hash='65916388386aa7e9b0e1660850b409a9778dad2a',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/call.js',statementMap:{'0':{start:{line:9,column:2},end:{line:9,column:51}}},fnMap:{'0':{name:'call',decl:{start:{line:8,column:30},end:{line:8,column:34}},loc:{start:{line:8,column:39},end:{line:10,column:1}},line:8}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function call(fn){cov_2bsisevsqw.f[0]++;cov_2bsisevsqw.s[0]++;return fn.apply(fn,[].slice.call(arguments,1));}));\n\n//# sourceURL=webpack://fun/./src/call.js?");

/***/ }),

/***/ "./src/complement.js":
/*!***************************!*\
  !*** ./src/complement.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lift */ \"./src/lift.js\");\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not */ \"./src/not.js\");\nvar cov_2nvnvb2hqm=function(){var path='/Volumes/BigOne/github/fun/src/complement.js',hash='3b1fadae589343a70f38deeec6769d9738fd3099',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/complement.js',statementMap:{'0':{start:{line:20,column:17},end:{line:20,column:26}}},fnMap:{},branchMap:{},s:{'0':0},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var complement=(cov_2nvnvb2hqm.s[0]++,Object(_lift__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_not__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));/* harmony default export */ __webpack_exports__[\"default\"] = (complement);\n\n//# sourceURL=webpack://fun/./src/complement.js?");

/***/ }),

/***/ "./src/compose.js":
/*!************************!*\
  !*** ./src/compose.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return compose; });\nvar cov_1s3vp9qvw2=function(){var path=\"/Volumes/BigOne/github/fun/src/compose.js\",hash=\"c66c3379112b80b2848a85c5a6361a745dd8a06b\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/Volumes/BigOne/github/fun/src/compose.js\",statementMap:{\"0\":{start:{line:6,column:12},end:{line:6,column:49}},\"1\":{start:{line:7,column:2},end:{line:18,column:4}},\"2\":{start:{line:8,column:15},end:{line:8,column:34}},\"3\":{start:{line:9,column:17},end:{line:9,column:46}},\"4\":{start:{line:10,column:12},end:{line:10,column:26}},\"5\":{start:{line:12,column:4},end:{line:15,column:5}},\"6\":{start:{line:13,column:15},end:{line:13,column:21}},\"7\":{start:{line:14,column:6},end:{line:14,column:38}},\"8\":{start:{line:17,column:4},end:{line:17,column:21}}},fnMap:{\"0\":{name:\"compose\",decl:{start:{line:5,column:24},end:{line:5,column:31}},loc:{start:{line:5,column:34},end:{line:19,column:1}},line:5},\"1\":{name:\"_compose\",decl:{start:{line:7,column:18},end:{line:7,column:26}},loc:{start:{line:7,column:29},end:{line:18,column:3}},line:7}},branchMap:{},s:{\"0\":0,\"1\":0,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0,\"7\":0,\"8\":0},f:{\"0\":0,\"1\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function compose(){cov_1s3vp9qvw2.f[0]++;var fns=(cov_1s3vp9qvw2.s[0]++,Array.prototype.slice.call(arguments));cov_1s3vp9qvw2.s[1]++;return function _compose(){cov_1s3vp9qvw2.f[1]++;var init=(cov_1s3vp9qvw2.s[2]++,fns[fns.length-1]);var result=(cov_1s3vp9qvw2.s[3]++,[init.apply(init,arguments)]);var i=(cov_1s3vp9qvw2.s[4]++,fns.length-2);cov_1s3vp9qvw2.s[5]++;for(i;i>=0;--i){var fn=(cov_1s3vp9qvw2.s[6]++,fns[i]);cov_1s3vp9qvw2.s[7]++;result=[fn.apply(fn,result)];}cov_1s3vp9qvw2.s[8]++;return result[0];};};\n\n//# sourceURL=webpack://fun/./src/compose.js?");

/***/ }),

/***/ "./src/concat.js":
/*!***********************!*\
  !*** ./src/concat.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony import */ var _string_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string/concat */ \"./src/string/concat.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\nvar cov_bb1fmyu3m=function(){var path='/Volumes/BigOne/github/fun/src/concat.js',hash='50c48a3923899c06d199b7f077450bc766157ac7',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/concat.js',statementMap:{'0':{start:{line:16,column:16},end:{line:19,column:3}},'1':{start:{line:20,column:2},end:{line:20,column:32}}},fnMap:{'0':{name:'concat',decl:{start:{line:15,column:30},end:{line:15,column:36}},loc:{start:{line:15,column:43},end:{line:21,column:1}},line:15}},branchMap:{},s:{'0':0,'1':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function concat(a,b){cov_bb1fmyu3m.f[0]++;var typeMap=(cov_bb1fmyu3m.s[0]++,{'String':_string_concat__WEBPACK_IMPORTED_MODULE_2__[\"default\"],'Array':_array_concat__WEBPACK_IMPORTED_MODULE_1__[\"default\"]});cov_bb1fmyu3m.s[1]++;return typeMap[Object(_type__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(a)](a,b);}));\n\n//# sourceURL=webpack://fun/./src/concat.js?");

/***/ }),

/***/ "./src/cond.js":
/*!*********************!*\
  !*** ./src/cond.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cond; });\nvar cov_21f89qz4nh=function(){var path=\"/Volumes/BigOne/github/fun/src/cond.js\",hash=\"ed47d7abda15d2492f305188de80628a4b527e82\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/Volumes/BigOne/github/fun/src/cond.js\",statementMap:{\"0\":{start:{line:7,column:2},end:{line:11,column:4}},\"1\":{start:{line:8,column:4},end:{line:10,column:5}},\"2\":{start:{line:9,column:6},end:{line:9,column:56}},\"3\":{start:{line:9,column:30},end:{line:9,column:56}}},fnMap:{\"0\":{name:\"cond\",decl:{start:{line:6,column:24},end:{line:6,column:28}},loc:{start:{line:6,column:36},end:{line:12,column:1}},line:6},\"1\":{name:\"(anonymous_1)\",decl:{start:{line:7,column:9},end:{line:7,column:10}},loc:{start:{line:7,column:26},end:{line:11,column:3}},line:7}},branchMap:{\"0\":{loc:{start:{line:9,column:6},end:{line:9,column:56}},type:\"if\",locations:[{start:{line:9,column:6},end:{line:9,column:56}},{start:{line:9,column:6},end:{line:9,column:56}}],line:9}},s:{\"0\":0,\"1\":0,\"2\":0,\"3\":0},f:{\"0\":0,\"1\":0},b:{\"0\":[0,0]},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function cond(conds){cov_21f89qz4nh.f[0]++;cov_21f89qz4nh.s[0]++;return function(value){cov_21f89qz4nh.f[1]++;cov_21f89qz4nh.s[1]++;for(var i=0;i<conds.length;i++){cov_21f89qz4nh.s[2]++;if(conds[i][0](value)){cov_21f89qz4nh.b[0][0]++;cov_21f89qz4nh.s[3]++;return conds[i][1](value);}else{cov_21f89qz4nh.b[0][1]++;}}};}\n\n//# sourceURL=webpack://fun/./src/cond.js?");

/***/ }),

/***/ "./src/curry.js":
/*!**********************!*\
  !*** ./src/curry.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return curry; });\nvar cov_ywgscfuic=function(){var path=\"/Volumes/BigOne/github/fun/src/curry.js\",hash=\"a2cdc34dc61adad17688795fc106ce31f35f0724\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/Volumes/BigOne/github/fun/src/curry.js\",statementMap:{\"0\":{start:{line:8,column:16},end:{line:8,column:26}},\"1\":{start:{line:10,column:2},end:{line:12,column:3}},\"2\":{start:{line:11,column:4},end:{line:11,column:15}},\"3\":{start:{line:14,column:2},end:{line:14,column:28}},\"4\":{start:{line:17,column:15},end:{line:17,column:31}},\"5\":{start:{line:19,column:4},end:{line:19,column:80}},\"6\":{start:{line:23,column:4},end:{line:25,column:6}},\"7\":{start:{line:24,column:6},end:{line:24,column:65}}},fnMap:{\"0\":{name:\"curry\",decl:{start:{line:7,column:24},end:{line:7,column:29}},loc:{start:{line:7,column:35},end:{line:27,column:1}},line:7},\"1\":{name:\"recurse\",decl:{start:{line:16,column:11},end:{line:16,column:18}},loc:{start:{line:16,column:30},end:{line:20,column:3}},line:16},\"2\":{name:\"createRecurser\",decl:{start:{line:22,column:11},end:{line:22,column:25}},loc:{start:{line:22,column:31},end:{line:26,column:3}},line:22},\"3\":{name:\"(anonymous_3)\",decl:{start:{line:23,column:11},end:{line:23,column:12}},loc:{start:{line:23,column:23},end:{line:25,column:5}},line:23}},branchMap:{\"0\":{loc:{start:{line:10,column:2},end:{line:12,column:3}},type:\"if\",locations:[{start:{line:10,column:2},end:{line:12,column:3}},{start:{line:10,column:2},end:{line:12,column:3}}],line:10},\"1\":{loc:{start:{line:19,column:11},end:{line:19,column:79}},type:\"cond-expr\",locations:[{start:{line:19,column:35},end:{line:19,column:55}},{start:{line:19,column:58},end:{line:19,column:79}}],line:19}},s:{\"0\":0,\"1\":0,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0,\"7\":0},f:{\"0\":0,\"1\":0,\"2\":0,\"3\":0},b:{\"0\":[0,0],\"1\":[0,0]},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function curry(fun){cov_ywgscfuic.f[0]++;var argslen=(cov_ywgscfuic.s[0]++,fun.length);cov_ywgscfuic.s[1]++;if(argslen===0){cov_ywgscfuic.b[0][0]++;cov_ywgscfuic.s[2]++;return fun;}else{cov_ywgscfuic.b[0][1]++;}cov_ywgscfuic.s[3]++;return createRecurser([]);function recurse(acc,args){cov_ywgscfuic.f[1]++;var _acc=(cov_ywgscfuic.s[4]++,acc.concat(args));cov_ywgscfuic.s[5]++;return _acc.length<argslen?(cov_ywgscfuic.b[1][0]++,createRecurser(_acc)):(cov_ywgscfuic.b[1][1]++,fun.apply(this,_acc));}function createRecurser(acc){cov_ywgscfuic.f[2]++;cov_ywgscfuic.s[6]++;return function(){cov_ywgscfuic.f[3]++;cov_ywgscfuic.s[7]++;return recurse(acc,Array.prototype.slice.call(arguments));};}}\n\n//# sourceURL=webpack://fun/./src/curry.js?");

/***/ }),

/***/ "./src/date/diffDate.js":
/*!******************************!*\
  !*** ./src/date/diffDate.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_114cywhsxj=function(){var path='/Volumes/BigOne/github/fun/src/date/diffDate.js',hash='8b4687cc7f541040a8d8b2b649e0a5b7f0bbae74',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/date/diffDate.js',statementMap:{'0':{start:{line:10,column:2},end:{line:10,column:61}}},fnMap:{'0':{name:'diffDate',decl:{start:{line:9,column:30},end:{line:9,column:38}},loc:{start:{line:9,column:51},end:{line:11,column:1}},line:9}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function diffDate(start,end){cov_114cywhsxj.f[0]++;cov_114cywhsxj.s[0]++;return new Date(start).getTime()-new Date(end).getTime();}));\n\n//# sourceURL=webpack://fun/./src/date/diffDate.js?");

/***/ }),

/***/ "./src/date/is.js":
/*!************************!*\
  !*** ./src/date/is.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_x7vtqg57r=function(){var path='/Volumes/BigOne/github/fun/src/date/is.js',hash='b2d08a2d9eca8014d4afd872dbe02ff46cf7cf07',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/date/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Date'));\n\n//# sourceURL=webpack://fun/./src/date/is.js?");

/***/ }),

/***/ "./src/date/isFutureDate.js":
/*!**********************************!*\
  !*** ./src/date/isFutureDate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _diffDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diffDate */ \"./src/date/diffDate.js\");\nvar cov_2qvtzlqis=function(){var path='/Volumes/BigOne/github/fun/src/date/isFutureDate.js',hash='c308b02c9805e13c508f95700cae3183fcfb7309',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/date/isFutureDate.js',statementMap:{'0':{start:{line:6,column:2},end:{line:6,column:37}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:5,column:16},end:{line:5,column:17}},loc:{start:{line:5,column:29},end:{line:7,column:1}},line:5}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (function(d){cov_2qvtzlqis.f[0]++;cov_2qvtzlqis.s[0]++;return Object(_diffDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date())(d)<0;});\n\n//# sourceURL=webpack://fun/./src/date/isFutureDate.js?");

/***/ }),

/***/ "./src/date/isValid.js":
/*!*****************************!*\
  !*** ./src/date/isValid.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isValid; });\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ \"./src/date/is.js\");\nvar cov_1m67j22b8r=function(){var path='/Volumes/BigOne/github/fun/src/date/isValid.js',hash='b31abd9357f3d139523268323ca175a22f53d0e5',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/date/isValid.js',statementMap:{'0':{start:{line:7,column:2},end:{line:7,column:44}}},fnMap:{'0':{name:'isValid',decl:{start:{line:5,column:24},end:{line:5,column:31}},loc:{start:{line:5,column:35},end:{line:8,column:1}},line:5}},branchMap:{'0':{loc:{start:{line:7,column:9},end:{line:7,column:43}},type:'binary-expr',locations:[{start:{line:7,column:9},end:{line:7,column:18}},{start:{line:7,column:22},end:{line:7,column:43}}],line:7}},s:{'0':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function isValid(x){cov_1m67j22b8r.f[0]++;cov_1m67j22b8r.s[0]++;return(cov_1m67j22b8r.b[0][0]++,Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x))&&(cov_1m67j22b8r.b[0][1]++,isFinite(x.valueOf()));};\n\n//# sourceURL=webpack://fun/./src/date/isValid.js?");

/***/ }),

/***/ "./src/date/toDay.js":
/*!***************************!*\
  !*** ./src/date/toDay.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_ztuzzkpuo=function(){var path=\"/Volumes/BigOne/github/fun/src/date/toDay.js\",hash=\"7634cf0fa84808235ea4dc054b56ed8a94c19b91\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/Volumes/BigOne/github/fun/src/date/toDay.js\",statementMap:{\"0\":{start:{line:5,column:2},end:{line:5,column:22}}},fnMap:{\"0\":{name:\"(anonymous_0)\",decl:{start:{line:4,column:16},end:{line:4,column:17}},loc:{start:{line:4,column:29},end:{line:6,column:1}},line:4}},branchMap:{},s:{\"0\":0},f:{\"0\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (function(d){cov_ztuzzkpuo.f[0]++;cov_ztuzzkpuo.s[0]++;return d/86400000;});\n\n//# sourceURL=webpack://fun/./src/date/toDay.js?");

/***/ }),

/***/ "./src/date/toHour.js":
/*!****************************!*\
  !*** ./src/date/toHour.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_1kuwdlkig4=function(){var path=\"/Volumes/BigOne/github/fun/src/date/toHour.js\",hash=\"d94ce97602fbb416d4a2e67d029610563bcc7158\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/Volumes/BigOne/github/fun/src/date/toHour.js\",statementMap:{\"0\":{start:{line:5,column:2},end:{line:5,column:21}}},fnMap:{\"0\":{name:\"(anonymous_0)\",decl:{start:{line:4,column:16},end:{line:4,column:17}},loc:{start:{line:4,column:29},end:{line:6,column:1}},line:4}},branchMap:{},s:{\"0\":0},f:{\"0\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (function(d){cov_1kuwdlkig4.f[0]++;cov_1kuwdlkig4.s[0]++;return d/3600000;});\n\n//# sourceURL=webpack://fun/./src/date/toHour.js?");

/***/ }),

/***/ "./src/date/toMinutes.js":
/*!*******************************!*\
  !*** ./src/date/toMinutes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_ofk4ax4le=function(){var path=\"/Volumes/BigOne/github/fun/src/date/toMinutes.js\",hash=\"daf8dad1bcb3bf34e10606a298f2c21d024a1c8c\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/Volumes/BigOne/github/fun/src/date/toMinutes.js\",statementMap:{\"0\":{start:{line:5,column:2},end:{line:5,column:19}}},fnMap:{\"0\":{name:\"(anonymous_0)\",decl:{start:{line:4,column:16},end:{line:4,column:17}},loc:{start:{line:4,column:29},end:{line:6,column:1}},line:4}},branchMap:{},s:{\"0\":0},f:{\"0\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (function(d){cov_ofk4ax4le.f[0]++;cov_ofk4ax4le.s[0]++;return d/60000;});\n\n//# sourceURL=webpack://fun/./src/date/toMinutes.js?");

/***/ }),

/***/ "./src/date/toSeconds.js":
/*!*******************************!*\
  !*** ./src/date/toSeconds.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_w02ahjdhp=function(){var path=\"/Volumes/BigOne/github/fun/src/date/toSeconds.js\",hash=\"792d19def806aa7b63a07c6d65af4abb339a4eda\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/Volumes/BigOne/github/fun/src/date/toSeconds.js\",statementMap:{\"0\":{start:{line:5,column:2},end:{line:5,column:18}}},fnMap:{\"0\":{name:\"(anonymous_0)\",decl:{start:{line:4,column:16},end:{line:4,column:17}},loc:{start:{line:4,column:29},end:{line:6,column:1}},line:4}},branchMap:{},s:{\"0\":0},f:{\"0\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (function(d){cov_w02ahjdhp.f[0]++;cov_w02ahjdhp.s[0]++;return d/1000;});\n\n//# sourceURL=webpack://fun/./src/date/toSeconds.js?");

/***/ }),

/***/ "./src/defaultTo.js":
/*!**************************!*\
  !*** ./src/defaultTo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_co38c9uru=function(){var path='/Volumes/BigOne/github/fun/src/defaultTo.js',hash='1d5787785a097f48fcedcbb8e254f3895c68c9c4',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/defaultTo.js',statementMap:{'0':{start:{line:15,column:2},end:{line:15,column:38}}},fnMap:{'0':{name:'defaultTo',decl:{start:{line:13,column:30},end:{line:13,column:39}},loc:{start:{line:13,column:46},end:{line:16,column:1}},line:13}},branchMap:{'0':{loc:{start:{line:15,column:9},end:{line:15,column:37}},type:'cond-expr',locations:[{start:{line:15,column:32},end:{line:15,column:33}},{start:{line:15,column:36},end:{line:15,column:37}}],line:15},'1':{loc:{start:{line:15,column:9},end:{line:15,column:29}},type:'binary-expr',locations:[{start:{line:15,column:9},end:{line:15,column:18}},{start:{line:15,column:22},end:{line:15,column:29}}],line:15}},s:{'0':0},f:{'0':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function defaultTo(d,v){cov_co38c9uru.f[0]++;cov_co38c9uru.s[0]++;return(cov_co38c9uru.b[1][0]++,v==null)||(cov_co38c9uru.b[1][1]++,v!==v)?(cov_co38c9uru.b[0][0]++,d):(cov_co38c9uru.b[0][1]++,v);}));\n\n//# sourceURL=webpack://fun/./src/defaultTo.js?");

/***/ }),

/***/ "./src/empty.js":
/*!**********************!*\
  !*** ./src/empty.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return empty; });\nvar cov_2pvu2f4vxr=function(){var path=\"/Volumes/BigOne/github/fun/src/empty.js\",hash=\"706c7b7bf603ea99ed4ef68e9402fe356ffab8b4\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/Volumes/BigOne/github/fun/src/empty.js\",statementMap:{\"0\":{start:{line:7,column:2},end:{line:7,column:29}}},fnMap:{\"0\":{name:\"empty\",decl:{start:{line:6,column:24},end:{line:6,column:29}},loc:{start:{line:6,column:33},end:{line:8,column:1}},line:6}},branchMap:{},s:{\"0\":0},f:{\"0\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function empty(x){cov_2pvu2f4vxr.f[0]++;cov_2pvu2f4vxr.s[0]++;return new x.constructor();};\n\n//# sourceURL=webpack://fun/./src/empty.js?");

/***/ }),

/***/ "./src/equals.js":
/*!***********************!*\
  !*** ./src/equals.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exists */ \"./src/exists.js\");\n/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identical */ \"./src/identical.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not */ \"./src/not.js\");\n/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./or */ \"./src/or.js\");\n/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object/is */ \"./src/object/is.js\");\n/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/is */ \"./src/array/is.js\");\n/* harmony import */ var _boolean_is__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./boolean/is */ \"./src/boolean/is.js\");\n/* harmony import */ var _number_is__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./number/is */ \"./src/number/is.js\");\n/* harmony import */ var _string_is__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./string/is */ \"./src/string/is.js\");\n/* harmony import */ var _date_is__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./date/is */ \"./src/date/is.js\");\n/* harmony import */ var _array_equals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/equals */ \"./src/array/equals.js\");\n/* harmony import */ var _object_equals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./object/equals */ \"./src/object/equals.js\");\nvar cov_10ruyzy0ka=function(){var path='/Volumes/BigOne/github/fun/src/equals.js',hash='2433db44a83b46c2241ae9258b3866c08912a6cd',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/equals.js',statementMap:{'0':{start:{line:35,column:2},end:{line:35,column:35}},'1':{start:{line:35,column:23},end:{line:35,column:35}},'2':{start:{line:36,column:2},end:{line:36,column:40}},'3':{start:{line:36,column:27},end:{line:36,column:40}},'4':{start:{line:37,column:2},end:{line:37,column:55}},'5':{start:{line:37,column:42},end:{line:37,column:55}},'6':{start:{line:38,column:2},end:{line:38,column:52}},'7':{start:{line:38,column:39},end:{line:38,column:52}},'8':{start:{line:40,column:2},end:{line:42,column:3}},'9':{start:{line:41,column:4},end:{line:41,column:47}},'10':{start:{line:44,column:2},end:{line:48,column:3}},'11':{start:{line:45,column:4},end:{line:45,column:29}},'12':{start:{line:46,column:9},end:{line:48,column:3}},'13':{start:{line:47,column:4},end:{line:47,column:30}},'14':{start:{line:50,column:2},end:{line:50,column:15}}},fnMap:{'0':{name:'equals',decl:{start:{line:34,column:30},end:{line:34,column:36}},loc:{start:{line:34,column:43},end:{line:51,column:1}},line:34}},branchMap:{'0':{loc:{start:{line:35,column:2},end:{line:35,column:35}},type:'if',locations:[{start:{line:35,column:2},end:{line:35,column:35}},{start:{line:35,column:2},end:{line:35,column:35}}],line:35},'1':{loc:{start:{line:36,column:2},end:{line:36,column:40}},type:'if',locations:[{start:{line:36,column:2},end:{line:36,column:40}},{start:{line:36,column:2},end:{line:36,column:40}}],line:36},'2':{loc:{start:{line:37,column:2},end:{line:37,column:55}},type:'if',locations:[{start:{line:37,column:2},end:{line:37,column:55}},{start:{line:37,column:2},end:{line:37,column:55}}],line:37},'3':{loc:{start:{line:38,column:2},end:{line:38,column:52}},type:'if',locations:[{start:{line:38,column:2},end:{line:38,column:52}},{start:{line:38,column:2},end:{line:38,column:52}}],line:38},'4':{loc:{start:{line:40,column:2},end:{line:42,column:3}},type:'if',locations:[{start:{line:40,column:2},end:{line:42,column:3}},{start:{line:40,column:2},end:{line:42,column:3}}],line:40},'5':{loc:{start:{line:40,column:6},end:{line:40,column:61}},type:'binary-expr',locations:[{start:{line:40,column:6},end:{line:40,column:17}},{start:{line:40,column:21},end:{line:40,column:33}},{start:{line:40,column:37},end:{line:40,column:48}},{start:{line:40,column:52},end:{line:40,column:61}}],line:40},'6':{loc:{start:{line:44,column:2},end:{line:48,column:3}},type:'if',locations:[{start:{line:44,column:2},end:{line:48,column:3}},{start:{line:44,column:2},end:{line:48,column:3}}],line:44},'7':{loc:{start:{line:46,column:9},end:{line:48,column:3}},type:'if',locations:[{start:{line:46,column:9},end:{line:48,column:3}},{start:{line:46,column:9},end:{line:48,column:3}}],line:46}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0},f:{'0':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0,0,0],'6':[0,0],'7':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function equals(x,y){cov_10ruyzy0ka.f[0]++;cov_10ruyzy0ka.s[0]++;if(Object(_identical__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x,y)){cov_10ruyzy0ka.b[0][0]++;cov_10ruyzy0ka.s[1]++;return true;}else{cov_10ruyzy0ka.b[0][1]++;}cov_10ruyzy0ka.s[2]++;if(Object(_type__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(x)!==Object(_type__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(y)){cov_10ruyzy0ka.b[1][0]++;cov_10ruyzy0ka.s[3]++;return false;}else{cov_10ruyzy0ka.b[1][1]++;}cov_10ruyzy0ka.s[4]++;if(Object(_or__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_not__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x)),Object(_not__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(y)))){cov_10ruyzy0ka.b[2][0]++;cov_10ruyzy0ka.s[5]++;return false;}else{cov_10ruyzy0ka.b[2][1]++;}cov_10ruyzy0ka.s[6]++;if(x.constructor!==y.constructor){cov_10ruyzy0ka.b[3][0]++;cov_10ruyzy0ka.s[7]++;return false;}else{cov_10ruyzy0ka.b[3][1]++;}cov_10ruyzy0ka.s[8]++;if((cov_10ruyzy0ka.b[5][0]++,Object(_string_is__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(x))||(cov_10ruyzy0ka.b[5][1]++,Object(_boolean_is__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(x))||(cov_10ruyzy0ka.b[5][2]++,Object(_number_is__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(x))||(cov_10ruyzy0ka.b[5][3]++,Object(_date_is__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(x))){cov_10ruyzy0ka.b[4][0]++;cov_10ruyzy0ka.s[9]++;return Object(_identical__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x.valueOf(),y.valueOf());}else{cov_10ruyzy0ka.b[4][1]++;}cov_10ruyzy0ka.s[10]++;if(Object(_array_is__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(x)){cov_10ruyzy0ka.b[6][0]++;cov_10ruyzy0ka.s[11]++;return Object(_array_equals__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(x,y);}else{cov_10ruyzy0ka.b[6][1]++;cov_10ruyzy0ka.s[12]++;if(Object(_object_is__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(x)){cov_10ruyzy0ka.b[7][0]++;cov_10ruyzy0ka.s[13]++;return Object(_object_equals__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(x,y);}else{cov_10ruyzy0ka.b[7][1]++;}}cov_10ruyzy0ka.s[14]++;return false;}));\n\n//# sourceURL=webpack://fun/./src/equals.js?");

/***/ }),

/***/ "./src/exists.js":
/*!***********************!*\
  !*** ./src/exists.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\nvar cov_26dpzd0gx0=function(){var path='/Volumes/BigOne/github/fun/src/exists.js',hash='d635fa88105bb8f95d8807f3998eac8829bc2552',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/exists.js',statementMap:{'0':{start:{line:14,column:2},end:{line:14,column:22}}},fnMap:{'0':{name:'exists',decl:{start:{line:13,column:31},end:{line:13,column:37}},loc:{start:{line:13,column:41},end:{line:15,column:1}},line:13}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function exists(x){cov_26dpzd0gx0.f[0]++;cov_26dpzd0gx0.s[0]++;return!(x==null);}));\n\n//# sourceURL=webpack://fun/./src/exists.js?");

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/filter */ \"./src/array/filter.js\");\n/* harmony import */ var _object_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/filter */ \"./src/object/filter.js\");\n/* harmony import */ var _map_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/filter */ \"./src/map/filter.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\nvar cov_24v09hdu9t=function(){var path='/Volumes/BigOne/github/fun/src/filter.js',hash='6b60800646764c4edb46a0fb706d27cf5b416689',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/filter.js',statementMap:{'0':{start:{line:14,column:2},end:{line:32,column:3}},'1':{start:{line:21,column:6},end:{line:21,column:33}},'2':{start:{line:26,column:6},end:{line:26,column:30}},'3':{start:{line:31,column:6},end:{line:31,column:32}}},fnMap:{'0':{name:'filter',decl:{start:{line:13,column:30},end:{line:13,column:36}},loc:{start:{line:13,column:44},end:{line:33,column:1}},line:13}},branchMap:{'0':{loc:{start:{line:14,column:2},end:{line:32,column:3}},type:'switch',locations:[{start:{line:20,column:4},end:{line:21,column:33}},{start:{line:25,column:4},end:{line:26,column:30}},{start:{line:30,column:4},end:{line:31,column:32}}],line:14}},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0},b:{'0':[0,0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function filter(fn,a){cov_24v09hdu9t.f[0]++;cov_24v09hdu9t.s[0]++;switch(Object(_type__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(a)){case'Object':cov_24v09hdu9t.b[0][0]++;cov_24v09hdu9t.s[1]++;return Object(_object_filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fn,a);case'Map':cov_24v09hdu9t.b[0][1]++;cov_24v09hdu9t.s[2]++;return Object(_map_filter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(fn,a);default:cov_24v09hdu9t.b[0][2]++;cov_24v09hdu9t.s[3]++;return Object(_array_filter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fn,a);}}));\n\n//# sourceURL=webpack://fun/./src/filter.js?");

/***/ }),

/***/ "./src/findIndex.js":
/*!**************************!*\
  !*** ./src/findIndex.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1j36xyz4e8=function(){var path='/Volumes/BigOne/github/fun/src/findIndex.js',hash='d54f56ab2983663eb99b73fad22fba89a1fe310a',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/findIndex.js',statementMap:{'0':{start:{line:14,column:10},end:{line:14,column:11}},'1':{start:{line:15,column:10},end:{line:15,column:18}},'2':{start:{line:17,column:2},end:{line:23,column:3}},'3':{start:{line:18,column:4},end:{line:20,column:5}},'4':{start:{line:19,column:6},end:{line:19,column:15}},'5':{start:{line:22,column:4},end:{line:22,column:11}},'6':{start:{line:25,column:2},end:{line:25,column:12}}},fnMap:{'0':{name:'findIndex',decl:{start:{line:13,column:30},end:{line:13,column:39}},loc:{start:{line:13,column:47},end:{line:26,column:1}},line:13}},branchMap:{'0':{loc:{start:{line:18,column:4},end:{line:20,column:5}},type:'if',locations:[{start:{line:18,column:4},end:{line:20,column:5}},{start:{line:18,column:4},end:{line:20,column:5}}],line:18}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function findIndex(fn,a){cov_1j36xyz4e8.f[0]++;var i=(cov_1j36xyz4e8.s[0]++,0);var l=(cov_1j36xyz4e8.s[1]++,a.length);cov_1j36xyz4e8.s[2]++;while(i<l){cov_1j36xyz4e8.s[3]++;if(fn(a[i])){cov_1j36xyz4e8.b[0][0]++;cov_1j36xyz4e8.s[4]++;return i;}else{cov_1j36xyz4e8.b[0][1]++;}cov_1j36xyz4e8.s[5]++;i+=1;}cov_1j36xyz4e8.s[6]++;return-1;}));\n\n//# sourceURL=webpack://fun/./src/findIndex.js?");

/***/ }),

/***/ "./src/first.js":
/*!**********************!*\
  !*** ./src/first.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\nvar cov_8rrhn7vgo=function(){var path='/Volumes/BigOne/github/fun/src/first.js',hash='8573f68d19b45f29b0d1d296d8f09fb5286b383d',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/first.js',statementMap:{'0':{start:{line:12,column:2},end:{line:12,column:42}}},fnMap:{'0':{name:'first',decl:{start:{line:11,column:31},end:{line:11,column:36}},loc:{start:{line:11,column:40},end:{line:13,column:1}},line:11}},branchMap:{'0':{loc:{start:{line:12,column:9},end:{line:12,column:41}},type:'cond-expr',locations:[{start:{line:12,column:25},end:{line:12,column:29}},{start:{line:12,column:32},end:{line:12,column:41}}],line:12},'1':{loc:{start:{line:12,column:9},end:{line:12,column:22}},type:'binary-expr',locations:[{start:{line:12,column:9},end:{line:12,column:10}},{start:{line:12,column:14},end:{line:12,column:22}}],line:12}},s:{'0':0},f:{'0':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function first(a){cov_8rrhn7vgo.f[0]++;cov_8rrhn7vgo.s[0]++;return(cov_8rrhn7vgo.b[1][0]++,a)&&(cov_8rrhn7vgo.b[1][1]++,a.length)?(cov_8rrhn7vgo.b[0][0]++,a[0]):(cov_8rrhn7vgo.b[0][1]++,undefined);}));\n\n//# sourceURL=webpack://fun/./src/first.js?");

/***/ }),

/***/ "./src/flatMap.js":
/*!************************!*\
  !*** ./src/flatMap.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fold */ \"./src/fold.js\");\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ \"./src/empty.js\");\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concat */ \"./src/concat.js\");\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is */ \"./src/is.js\");\nvar cov_iv0mz1aea=function(){var path='/Volumes/BigOne/github/fun/src/flatMap.js',hash='f80920ce0b89acc0f6937e995e558724a2ed8f5d',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/flatMap.js',statementMap:{'0':{start:{line:6,column:17},end:{line:6,column:31}},'1':{start:{line:14,column:2},end:{line:18,column:3}},'2':{start:{line:15,column:4},end:{line:17,column:6}},'3':{start:{line:16,column:6},end:{line:16,column:25}},'4':{start:{line:20,column:2},end:{line:22,column:3}},'5':{start:{line:21,column:4},end:{line:21,column:25}},'6':{start:{line:24,column:2},end:{line:26,column:18}},'7':{start:{line:25,column:4},end:{line:25,column:30}}},fnMap:{'0':{name:'flatMap',decl:{start:{line:13,column:30},end:{line:13,column:37}},loc:{start:{line:13,column:45},end:{line:27,column:1}},line:13},'1':{name:'(anonymous_1)',decl:{start:{line:15,column:11},end:{line:15,column:12}},loc:{start:{line:15,column:24},end:{line:17,column:5}},line:15},'2':{name:'(anonymous_2)',decl:{start:{line:24,column:14},end:{line:24,column:15}},loc:{start:{line:24,column:32},end:{line:26,column:3}},line:24}},branchMap:{'0':{loc:{start:{line:14,column:2},end:{line:18,column:3}},type:'if',locations:[{start:{line:14,column:2},end:{line:18,column:3}},{start:{line:14,column:2},end:{line:18,column:3}}],line:14},'1':{loc:{start:{line:20,column:2},end:{line:22,column:3}},type:'if',locations:[{start:{line:20,column:2},end:{line:22,column:3}},{start:{line:20,column:2},end:{line:22,column:3}}],line:20}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0},f:{'0':0,'1':0,'2':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var isFunction=(cov_iv0mz1aea.s[0]++,Object(_is__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('Function'));/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function flatMap(fn,a){cov_iv0mz1aea.f[0]++;cov_iv0mz1aea.s[1]++;if(isFunction(a)){cov_iv0mz1aea.b[0][0]++;cov_iv0mz1aea.s[2]++;return function(x){cov_iv0mz1aea.f[1]++;cov_iv0mz1aea.s[3]++;return fn(a(x))(x);};}else{cov_iv0mz1aea.b[0][1]++;}cov_iv0mz1aea.s[4]++;if(isFunction(a.flatMap)){cov_iv0mz1aea.b[1][0]++;cov_iv0mz1aea.s[5]++;return a.flatMap(fn);}else{cov_iv0mz1aea.b[1][1]++;}cov_iv0mz1aea.s[6]++;return Object(_fold__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(acc,x){cov_iv0mz1aea.f[2]++;cov_iv0mz1aea.s[7]++;return Object(_concat__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(acc,fn(x));},Object(_empty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a),a);}));\n\n//# sourceURL=webpack://fun/./src/flatMap.js?");

/***/ }),

/***/ "./src/fold.js":
/*!*********************!*\
  !*** ./src/fold.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/fold */ \"./src/array/fold.js\");\n/* harmony import */ var _object_fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/fold */ \"./src/object/fold.js\");\n/* harmony import */ var _string_fold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string/fold */ \"./src/string/fold.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\nvar cov_qdmhuxjzt=function(){var path='/Volumes/BigOne/github/fun/src/fold.js',hash='deb47287bc5a2070042478af150815ebcef36196',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/fold.js',statementMap:{'0':{start:{line:18,column:16},end:{line:22,column:3}},'1':{start:{line:23,column:2},end:{line:23,column:39}}},fnMap:{'0':{name:'fold',decl:{start:{line:17,column:30},end:{line:17,column:34}},loc:{start:{line:17,column:48},end:{line:24,column:1}},line:17}},branchMap:{},s:{'0':0,'1':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function fold(cb,init,a){cov_qdmhuxjzt.f[0]++;var typeMap=(cov_qdmhuxjzt.s[0]++,{'Object':_object_fold__WEBPACK_IMPORTED_MODULE_2__[\"default\"],'Array':_array_fold__WEBPACK_IMPORTED_MODULE_1__[\"default\"],'String':_string_fold__WEBPACK_IMPORTED_MODULE_3__[\"default\"]});cov_qdmhuxjzt.s[1]++;return typeMap[Object(_type__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(a)](cb,init,a);}));\n\n//# sourceURL=webpack://fun/./src/fold.js?");

/***/ }),

/***/ "./src/identical.js":
/*!**************************!*\
  !*** ./src/identical.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _number_isNan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number/isNan */ \"./src/number/isNan.js\");\nvar cov_spej5txj4=function(){var path='/Volumes/BigOne/github/fun/src/identical.js',hash='05a0945969bec5cfdc69c18f1f7dac6e5cf94ffa',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/identical.js',statementMap:{'0':{start:{line:9,column:2},end:{line:11,column:3}},'1':{start:{line:10,column:4},end:{line:10,column:27}},'2':{start:{line:13,column:2},end:{line:15,column:3}},'3':{start:{line:14,column:4},end:{line:14,column:16}},'4':{start:{line:17,column:2},end:{line:17,column:34}}},fnMap:{'0':{name:'identical',decl:{start:{line:8,column:30},end:{line:8,column:39}},loc:{start:{line:8,column:46},end:{line:18,column:1}},line:8}},branchMap:{'0':{loc:{start:{line:9,column:2},end:{line:11,column:3}},type:'if',locations:[{start:{line:9,column:2},end:{line:11,column:3}},{start:{line:9,column:2},end:{line:11,column:3}}],line:9},'1':{loc:{start:{line:9,column:6},end:{line:9,column:24}},type:'binary-expr',locations:[{start:{line:9,column:6},end:{line:9,column:13}},{start:{line:9,column:17},end:{line:9,column:24}}],line:9},'2':{loc:{start:{line:13,column:2},end:{line:15,column:3}},type:'if',locations:[{start:{line:13,column:2},end:{line:15,column:3}},{start:{line:13,column:2},end:{line:15,column:3}}],line:13},'3':{loc:{start:{line:17,column:12},end:{line:17,column:32}},type:'binary-expr',locations:[{start:{line:17,column:12},end:{line:17,column:20}},{start:{line:17,column:24},end:{line:17,column:32}}],line:17}},s:{'0':0,'1':0,'2':0,'3':0,'4':0},f:{'0':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function identical(x,y){cov_spej5txj4.f[0]++;cov_spej5txj4.s[0]++;if((cov_spej5txj4.b[1][0]++,x===0)&&(cov_spej5txj4.b[1][1]++,y===0)){cov_spej5txj4.b[0][0]++;cov_spej5txj4.s[1]++;return 1/x===1/y;}else{cov_spej5txj4.b[0][1]++;}cov_spej5txj4.s[2]++;if(x===y){cov_spej5txj4.b[2][0]++;cov_spej5txj4.s[3]++;return true;}else{cov_spej5txj4.b[2][1]++;}cov_spej5txj4.s[4]++;return!!((cov_spej5txj4.b[3][0]++,Object(_number_isNan__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x))&&(cov_spej5txj4.b[3][1]++,Object(_number_isNan__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(y)));}));\n\n//# sourceURL=webpack://fun/./src/identical.js?");

/***/ }),

/***/ "./src/identity.js":
/*!*************************!*\
  !*** ./src/identity.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return identity; });\nvar cov_2kmbnkw511=function(){var path=\"/Volumes/BigOne/github/fun/src/identity.js\",hash=\"8f3e057e3a5376d9ae3d467b7552e16d66d73b7e\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/Volumes/BigOne/github/fun/src/identity.js\",statementMap:{\"0\":{start:{line:7,column:2},end:{line:7,column:11}}},fnMap:{\"0\":{name:\"identity\",decl:{start:{line:6,column:24},end:{line:6,column:32}},loc:{start:{line:6,column:36},end:{line:8,column:1}},line:6}},branchMap:{},s:{\"0\":0},f:{\"0\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function identity(x){cov_2kmbnkw511.f[0]++;cov_2kmbnkw511.s[0]++;return x;};\n\n//# sourceURL=webpack://fun/./src/identity.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: add, addIndex, adjust, adjustWith, all, allPass, always, and, any, anyPass, ap, aperture, append, apply, binary, bind, both, call, complement, compose, concat, cond, curry, defaultTo, diffDate, divide, Either, Left, Right, empty, equals, exists, F, filter, findIndex, first, flatMap, fold, formatString, gcd, has, hasIn, identical, identity, is, isArray, isBoolean, isDate, isEmpty, isFutureDate, isMap, isNan, isNull, isNumber, isObject, isSet, isString, isIterator, isUndefined, isValidDate, Just, keys, keysIn, last, lift, lt, lte, map, max, Maybe, merge, min, multiply, not, Nothing, omit, or, path, pick, prop, reduce, sort, sum, T, toDay, toHour, toMinutes, toSeconds, truthy, type, union, values, zip, zipObj, zipWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _number_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number/add */ \"./src/number/add.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return _number_add__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _addIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addIndex */ \"./src/addIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addIndex\", function() { return _addIndex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _adjust__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adjust */ \"./src/adjust.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"adjust\", function() { return _adjust__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _adjustWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adjustWith */ \"./src/adjustWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"adjustWith\", function() { return _adjustWith__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all */ \"./src/all.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"all\", function() { return _all__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _allPass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allPass */ \"./src/allPass.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"allPass\", function() { return _allPass__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./always */ \"./src/always.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"always\", function() { return _always__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./and */ \"./src/and.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"and\", function() { return _and__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./any */ \"./src/any.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"any\", function() { return _any__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _anyPass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./anyPass */ \"./src/anyPass.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"anyPass\", function() { return _anyPass__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ap */ \"./src/ap.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ap\", function() { return _ap__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _aperture__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aperture */ \"./src/aperture.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"aperture\", function() { return _aperture__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./append */ \"./src/append.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return _append__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apply */ \"./src/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _apply__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _binary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./binary */ \"./src/binary.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"binary\", function() { return _binary__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bind */ \"./src/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _bind__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _boolean_both__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./boolean/both */ \"./src/boolean/both.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"both\", function() { return _boolean_both__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./call */ \"./src/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _call__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; });\n\n/* harmony import */ var _complement__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./complement */ \"./src/complement.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"complement\", function() { return _complement__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; });\n\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./compose */ \"./src/compose.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return _compose__WEBPACK_IMPORTED_MODULE_19__[\"default\"]; });\n\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./concat */ \"./src/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _concat__WEBPACK_IMPORTED_MODULE_20__[\"default\"]; });\n\n/* harmony import */ var _cond__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cond */ \"./src/cond.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cond\", function() { return _cond__WEBPACK_IMPORTED_MODULE_21__[\"default\"]; });\n\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"curry\", function() { return _curry__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _defaultTo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./defaultTo */ \"./src/defaultTo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"defaultTo\", function() { return _defaultTo__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _date_diffDate__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./date/diffDate */ \"./src/date/diffDate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"diffDate\", function() { return _date_diffDate__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _number_divide__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./number/divide */ \"./src/number/divide.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return _number_divide__WEBPACK_IMPORTED_MODULE_25__[\"default\"]; });\n\n/* harmony import */ var _monads_Either__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./monads/Either */ \"./src/monads/Either.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Either\", function() { return _monads_Either__WEBPACK_IMPORTED_MODULE_26__[\"default\"]; });\n\n/* harmony import */ var _monads_Left__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./monads/Left */ \"./src/monads/Left.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Left\", function() { return _monads_Left__WEBPACK_IMPORTED_MODULE_27__[\"default\"]; });\n\n/* harmony import */ var _monads_Right__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./monads/Right */ \"./src/monads/Right.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Right\", function() { return _monads_Right__WEBPACK_IMPORTED_MODULE_28__[\"default\"]; });\n\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./empty */ \"./src/empty.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"empty\", function() { return _empty__WEBPACK_IMPORTED_MODULE_29__[\"default\"]; });\n\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./equals */ \"./src/equals.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"equals\", function() { return _equals__WEBPACK_IMPORTED_MODULE_30__[\"default\"]; });\n\n/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./exists */ \"./src/exists.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"exists\", function() { return _exists__WEBPACK_IMPORTED_MODULE_31__[\"default\"]; });\n\n/* harmony import */ var _boolean_F__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./boolean/F */ \"./src/boolean/F.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"F\", function() { return _boolean_F__WEBPACK_IMPORTED_MODULE_32__[\"default\"]; });\n\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _filter__WEBPACK_IMPORTED_MODULE_33__[\"default\"]; });\n\n/* harmony import */ var _findIndex__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./findIndex */ \"./src/findIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _findIndex__WEBPACK_IMPORTED_MODULE_34__[\"default\"]; });\n\n/* harmony import */ var _first__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./first */ \"./src/first.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"first\", function() { return _first__WEBPACK_IMPORTED_MODULE_35__[\"default\"]; });\n\n/* harmony import */ var _flatMap__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./flatMap */ \"./src/flatMap.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatMap\", function() { return _flatMap__WEBPACK_IMPORTED_MODULE_36__[\"default\"]; });\n\n/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./fold */ \"./src/fold.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fold\", function() { return _fold__WEBPACK_IMPORTED_MODULE_37__[\"default\"]; });\n\n/* harmony import */ var _string_formatString__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./string/formatString */ \"./src/string/formatString.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatString\", function() { return _string_formatString__WEBPACK_IMPORTED_MODULE_38__[\"default\"]; });\n\n/* harmony import */ var _math_gcd__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./math/gcd */ \"./src/math/gcd.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"gcd\", function() { return _math_gcd__WEBPACK_IMPORTED_MODULE_39__[\"default\"]; });\n\n/* harmony import */ var _object_has__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./object/has */ \"./src/object/has.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"has\", function() { return _object_has__WEBPACK_IMPORTED_MODULE_40__[\"default\"]; });\n\n/* harmony import */ var _object_hasIn__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./object/hasIn */ \"./src/object/hasIn.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hasIn\", function() { return _object_hasIn__WEBPACK_IMPORTED_MODULE_41__[\"default\"]; });\n\n/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./identical */ \"./src/identical.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"identical\", function() { return _identical__WEBPACK_IMPORTED_MODULE_42__[\"default\"]; });\n\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./identity */ \"./src/identity.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return _identity__WEBPACK_IMPORTED_MODULE_43__[\"default\"]; });\n\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./is */ \"./src/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"is\", function() { return _is__WEBPACK_IMPORTED_MODULE_44__[\"default\"]; });\n\n/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./array/is */ \"./src/array/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return _array_is__WEBPACK_IMPORTED_MODULE_45__[\"default\"]; });\n\n/* harmony import */ var _boolean_is__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./boolean/is */ \"./src/boolean/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isBoolean\", function() { return _boolean_is__WEBPACK_IMPORTED_MODULE_46__[\"default\"]; });\n\n/* harmony import */ var _date_is__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./date/is */ \"./src/date/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isDate\", function() { return _date_is__WEBPACK_IMPORTED_MODULE_47__[\"default\"]; });\n\n/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./isEmpty */ \"./src/isEmpty.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return _isEmpty__WEBPACK_IMPORTED_MODULE_48__[\"default\"]; });\n\n/* harmony import */ var _date_isFutureDate__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./date/isFutureDate */ \"./src/date/isFutureDate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isFutureDate\", function() { return _date_isFutureDate__WEBPACK_IMPORTED_MODULE_49__[\"default\"]; });\n\n/* harmony import */ var _map_is__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./map/is */ \"./src/map/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isMap\", function() { return _map_is__WEBPACK_IMPORTED_MODULE_50__[\"default\"]; });\n\n/* harmony import */ var _number_isNan__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./number/isNan */ \"./src/number/isNan.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNan\", function() { return _number_isNan__WEBPACK_IMPORTED_MODULE_51__[\"default\"]; });\n\n/* harmony import */ var _null_is__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./null/is */ \"./src/null/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNull\", function() { return _null_is__WEBPACK_IMPORTED_MODULE_52__[\"default\"]; });\n\n/* harmony import */ var _number_is__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./number/is */ \"./src/number/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return _number_is__WEBPACK_IMPORTED_MODULE_53__[\"default\"]; });\n\n/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./object/is */ \"./src/object/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return _object_is__WEBPACK_IMPORTED_MODULE_54__[\"default\"]; });\n\n/* harmony import */ var _set_is__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./set/is */ \"./src/set/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isSet\", function() { return _set_is__WEBPACK_IMPORTED_MODULE_55__[\"default\"]; });\n\n/* harmony import */ var _string_is__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./string/is */ \"./src/string/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return _string_is__WEBPACK_IMPORTED_MODULE_56__[\"default\"]; });\n\n/* harmony import */ var _iterator_is__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./iterator/is */ \"./src/iterator/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isIterator\", function() { return _iterator_is__WEBPACK_IMPORTED_MODULE_57__[\"default\"]; });\n\n/* harmony import */ var _undefined_is__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./undefined/is */ \"./src/undefined/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isUndefined\", function() { return _undefined_is__WEBPACK_IMPORTED_MODULE_58__[\"default\"]; });\n\n/* harmony import */ var _date_isValid__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./date/isValid */ \"./src/date/isValid.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isValidDate\", function() { return _date_isValid__WEBPACK_IMPORTED_MODULE_59__[\"default\"]; });\n\n/* harmony import */ var _monads_Just__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./monads/Just */ \"./src/monads/Just.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Just\", function() { return _monads_Just__WEBPACK_IMPORTED_MODULE_60__[\"default\"]; });\n\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./keys */ \"./src/keys.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"keys\", function() { return _keys__WEBPACK_IMPORTED_MODULE_61__[\"default\"]; });\n\n/* harmony import */ var _object_keysIn__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./object/keysIn */ \"./src/object/keysIn.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"keysIn\", function() { return _object_keysIn__WEBPACK_IMPORTED_MODULE_62__[\"default\"]; });\n\n/* harmony import */ var _last__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./last */ \"./src/last.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"last\", function() { return _last__WEBPACK_IMPORTED_MODULE_63__[\"default\"]; });\n\n/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./lift */ \"./src/lift.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lift\", function() { return _lift__WEBPACK_IMPORTED_MODULE_64__[\"default\"]; });\n\n/* harmony import */ var _lt__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./lt */ \"./src/lt.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lt\", function() { return _lt__WEBPACK_IMPORTED_MODULE_65__[\"default\"]; });\n\n/* harmony import */ var _lte__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./lte */ \"./src/lte.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lte\", function() { return _lte__WEBPACK_IMPORTED_MODULE_66__[\"default\"]; });\n\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _map__WEBPACK_IMPORTED_MODULE_67__[\"default\"]; });\n\n/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./max */ \"./src/max.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"max\", function() { return _max__WEBPACK_IMPORTED_MODULE_68__[\"default\"]; });\n\n/* harmony import */ var _monads_Maybe__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./monads/Maybe */ \"./src/monads/Maybe.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Maybe\", function() { return _monads_Maybe__WEBPACK_IMPORTED_MODULE_69__[\"default\"]; });\n\n/* harmony import */ var _object_merge__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./object/merge */ \"./src/object/merge.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"merge\", function() { return _object_merge__WEBPACK_IMPORTED_MODULE_70__[\"default\"]; });\n\n/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./min */ \"./src/min.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"min\", function() { return _min__WEBPACK_IMPORTED_MODULE_71__[\"default\"]; });\n\n/* harmony import */ var _number_multiply__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./number/multiply */ \"./src/number/multiply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return _number_multiply__WEBPACK_IMPORTED_MODULE_72__[\"default\"]; });\n\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./not */ \"./src/not.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"not\", function() { return _not__WEBPACK_IMPORTED_MODULE_73__[\"default\"]; });\n\n/* harmony import */ var _monads_Nothing__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./monads/Nothing */ \"./src/monads/Nothing.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Nothing\", function() { return _monads_Nothing__WEBPACK_IMPORTED_MODULE_74__[\"default\"]; });\n\n/* harmony import */ var _object_omit__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./object/omit */ \"./src/object/omit.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"omit\", function() { return _object_omit__WEBPACK_IMPORTED_MODULE_75__[\"default\"]; });\n\n/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./or */ \"./src/or.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"or\", function() { return _or__WEBPACK_IMPORTED_MODULE_76__[\"default\"]; });\n\n/* harmony import */ var _object_path__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./object/path */ \"./src/object/path.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"path\", function() { return _object_path__WEBPACK_IMPORTED_MODULE_77__[\"default\"]; });\n\n/* harmony import */ var _object_pick__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./object/pick */ \"./src/object/pick.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pick\", function() { return _object_pick__WEBPACK_IMPORTED_MODULE_78__[\"default\"]; });\n\n/* harmony import */ var _object_prop__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./object/prop */ \"./src/object/prop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"prop\", function() { return _object_prop__WEBPACK_IMPORTED_MODULE_79__[\"default\"]; });\n\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./reduce */ \"./src/reduce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _reduce__WEBPACK_IMPORTED_MODULE_80__[\"default\"]; });\n\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./sort */ \"./src/sort.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sort\", function() { return _sort__WEBPACK_IMPORTED_MODULE_81__[\"default\"]; });\n\n/* harmony import */ var _number_sum__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./number/sum */ \"./src/number/sum.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return _number_sum__WEBPACK_IMPORTED_MODULE_82__[\"default\"]; });\n\n/* harmony import */ var _boolean_T__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./boolean/T */ \"./src/boolean/T.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"T\", function() { return _boolean_T__WEBPACK_IMPORTED_MODULE_83__[\"default\"]; });\n\n/* harmony import */ var _date_toDay__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./date/toDay */ \"./src/date/toDay.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toDay\", function() { return _date_toDay__WEBPACK_IMPORTED_MODULE_84__[\"default\"]; });\n\n/* harmony import */ var _date_toHour__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./date/toHour */ \"./src/date/toHour.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toHour\", function() { return _date_toHour__WEBPACK_IMPORTED_MODULE_85__[\"default\"]; });\n\n/* harmony import */ var _date_toMinutes__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./date/toMinutes */ \"./src/date/toMinutes.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toMinutes\", function() { return _date_toMinutes__WEBPACK_IMPORTED_MODULE_86__[\"default\"]; });\n\n/* harmony import */ var _date_toSeconds__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./date/toSeconds */ \"./src/date/toSeconds.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toSeconds\", function() { return _date_toSeconds__WEBPACK_IMPORTED_MODULE_87__[\"default\"]; });\n\n/* harmony import */ var _truthy__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./truthy */ \"./src/truthy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"truthy\", function() { return _truthy__WEBPACK_IMPORTED_MODULE_88__[\"default\"]; });\n\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"type\", function() { return _type__WEBPACK_IMPORTED_MODULE_89__[\"default\"]; });\n\n/* harmony import */ var _array_union__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./array/union */ \"./src/array/union.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"union\", function() { return _array_union__WEBPACK_IMPORTED_MODULE_90__[\"default\"]; });\n\n/* harmony import */ var _object_values__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./object/values */ \"./src/object/values.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"values\", function() { return _object_values__WEBPACK_IMPORTED_MODULE_91__[\"default\"]; });\n\n/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./zip */ \"./src/zip.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zip\", function() { return _zip__WEBPACK_IMPORTED_MODULE_92__[\"default\"]; });\n\n/* harmony import */ var _zipObj__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./zipObj */ \"./src/zipObj.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zipObj\", function() { return _zipObj__WEBPACK_IMPORTED_MODULE_93__[\"default\"]; });\n\n/* harmony import */ var _zipWith__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./zipWith */ \"./src/zipWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zipWith\", function() { return _zipWith__WEBPACK_IMPORTED_MODULE_94__[\"default\"]; });\n\nvar cov_1of64njj1n=function(){var path='/Volumes/BigOne/github/fun/src/index.js',hash='82ef6c9a6c3181191c13a822f2a7314e161968cd',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/index.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();\n\n//# sourceURL=webpack://fun/./src/index.js?");

/***/ }),

/***/ "./src/is.js":
/*!*******************!*\
  !*** ./src/is.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\nvar cov_i7qog1f34=function(){var path='/Volumes/BigOne/github/fun/src/is.js',hash='4b1fe1aa870d7ddcff72524a2725f4405318fa4c',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/is.js',statementMap:{'0':{start:{line:9,column:2},end:{line:9,column:28}}},fnMap:{'0':{name:'is',decl:{start:{line:8,column:30},end:{line:8,column:32}},loc:{start:{line:8,column:44},end:{line:10,column:1}},line:8}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function is(Ctor,val){cov_i7qog1f34.f[0]++;cov_i7qog1f34.s[0]++;return Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(val)===Ctor;}));\n\n//# sourceURL=webpack://fun/./src/is.js?");

/***/ }),

/***/ "./src/isEmpty.js":
/*!************************!*\
  !*** ./src/isEmpty.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isEmpty; });\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty */ \"./src/empty.js\");\n/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exists */ \"./src/exists.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equals */ \"./src/equals.js\");\nvar cov_22f14b22s2=function(){var path='/Volumes/BigOne/github/fun/src/isEmpty.js',hash='d91f37b301dba10a2a51eaa8859b93aa7638d4a3',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/isEmpty.js',statementMap:{'0':{start:{line:10,column:2},end:{line:10,column:42}}},fnMap:{'0':{name:'isEmpty',decl:{start:{line:9,column:24},end:{line:9,column:31}},loc:{start:{line:9,column:35},end:{line:11,column:1}},line:9}},branchMap:{'0':{loc:{start:{line:10,column:9},end:{line:10,column:41}},type:'binary-expr',locations:[{start:{line:10,column:9},end:{line:10,column:18}},{start:{line:10,column:22},end:{line:10,column:41}}],line:10}},s:{'0':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function isEmpty(x){cov_22f14b22s2.f[0]++;cov_22f14b22s2.s[0]++;return(cov_22f14b22s2.b[0][0]++,Object(_exists__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x))&&(cov_22f14b22s2.b[0][1]++,Object(_equals__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x,Object(_empty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x)));};\n\n//# sourceURL=webpack://fun/./src/isEmpty.js?");

/***/ }),

/***/ "./src/iterator/is.js":
/*!****************************!*\
  !*** ./src/iterator/is.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isIterator; });\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_1kbbbfkxaa=function(){var path='/Volumes/BigOne/github/fun/src/iterator/is.js',hash='cf2bb233b2262c7f808374f31ee955029f89164b',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/iterator/is.js',statementMap:{'0':{start:{line:5,column:17},end:{line:5,column:31}},'1':{start:{line:13,column:2},end:{line:13,column:43}}},fnMap:{'0':{name:'isIterator',decl:{start:{line:12,column:24},end:{line:12,column:34}},loc:{start:{line:12,column:41},end:{line:14,column:1}},line:12}},branchMap:{},s:{'0':0,'1':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var isFunction=(cov_1kbbbfkxaa.s[0]++,Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Function'));function isIterator(iter){cov_1kbbbfkxaa.f[0]++;cov_1kbbbfkxaa.s[1]++;return isFunction(iter[Symbol.iterator]);}\n\n//# sourceURL=webpack://fun/./src/iterator/is.js?");

/***/ }),

/***/ "./src/iterator/map.js":
/*!*****************************!*\
  !*** ./src/iterator/map.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_1db84yszd=function(){var path='/Volumes/BigOne/github/fun/src/iterator/map.js',hash='fa6e9492e858ddf6a719d9894c1542fc13c04cf3',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/iterator/map.js',statementMap:{'0':{start:{line:13,column:10},end:{line:13,column:12}},'1':{start:{line:15,column:2},end:{line:17,column:3}},'2':{start:{line:16,column:4},end:{line:16,column:39}},'3':{start:{line:19,column:2},end:{line:19,column:11}}},fnMap:{'0':{name:'map',decl:{start:{line:12,column:30},end:{line:12,column:33}},loc:{start:{line:12,column:54},end:{line:20,column:1}},line:12}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function map(callback,iterator){cov_1db84yszd.f[0]++;var r=(cov_1db84yszd.s[0]++,[]);cov_1db84yszd.s[1]++;for(var nextValue=iterator.next();nextValue.done!==true;nextValue=iterator.next()){cov_1db84yszd.s[2]++;r.push(callback(iterator.value()));}cov_1db84yszd.s[3]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/iterator/map.js?");

/***/ }),

/***/ "./src/keys.js":
/*!*********************!*\
  !*** ./src/keys.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object/keys */ \"./src/object/keys.js\");\n/* harmony import */ var _map_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/keys */ \"./src/map/keys.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\nvar cov_lw2trbzm9=function(){var path='/Volumes/BigOne/github/fun/src/keys.js',hash='28998c252def1019bba24cfe76da5ab1e00fd353',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/keys.js',statementMap:{'0':{start:{line:16,column:2},end:{line:22,column:3}},'1':{start:{line:18,column:6},end:{line:18,column:26}},'2':{start:{line:21,column:6},end:{line:21,column:29}}},fnMap:{'0':{name:'map',decl:{start:{line:15,column:30},end:{line:15,column:33}},loc:{start:{line:15,column:39},end:{line:23,column:1}},line:15}},branchMap:{'0':{loc:{start:{line:16,column:2},end:{line:22,column:3}},type:'switch',locations:[{start:{line:17,column:4},end:{line:18,column:26}},{start:{line:20,column:4},end:{line:21,column:29}}],line:16}},s:{'0':0,'1':0,'2':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function map(obj){cov_lw2trbzm9.f[0]++;cov_lw2trbzm9.s[0]++;switch(Object(_type__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(obj)){case'Map':cov_lw2trbzm9.b[0][0]++;cov_lw2trbzm9.s[1]++;return Object(_map_keys__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj);default:cov_lw2trbzm9.b[0][1]++;cov_lw2trbzm9.s[2]++;return Object(_object_keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj);}}));\n\n//# sourceURL=webpack://fun/./src/keys.js?");

/***/ }),

/***/ "./src/last.js":
/*!*********************!*\
  !*** ./src/last.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\nvar cov_9xad5gtwd=function(){var path='/Volumes/BigOne/github/fun/src/last.js',hash='631a3260d2a301d3cec8a6e826a928b3158178f3',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/last.js',statementMap:{'0':{start:{line:8,column:2},end:{line:8,column:53}}},fnMap:{'0':{name:'last',decl:{start:{line:7,column:31},end:{line:7,column:35}},loc:{start:{line:7,column:39},end:{line:9,column:1}},line:7}},branchMap:{'0':{loc:{start:{line:8,column:9},end:{line:8,column:52}},type:'cond-expr',locations:[{start:{line:8,column:25},end:{line:8,column:40}},{start:{line:8,column:43},end:{line:8,column:52}}],line:8},'1':{loc:{start:{line:8,column:9},end:{line:8,column:22}},type:'binary-expr',locations:[{start:{line:8,column:9},end:{line:8,column:10}},{start:{line:8,column:14},end:{line:8,column:22}}],line:8}},s:{'0':0},f:{'0':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function last(a){cov_9xad5gtwd.f[0]++;cov_9xad5gtwd.s[0]++;return(cov_9xad5gtwd.b[1][0]++,a)&&(cov_9xad5gtwd.b[1][1]++,a.length)?(cov_9xad5gtwd.b[0][0]++,a[a.length-1]):(cov_9xad5gtwd.b[0][1]++,undefined);}));\n\n//# sourceURL=webpack://fun/./src/last.js?");

/***/ }),

/***/ "./src/lift.js":
/*!*********************!*\
  !*** ./src/lift.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\n/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fold */ \"./src/fold.js\");\n/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ap */ \"./src/ap.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\nvar cov_11woepjbr3=function(){var path='/Volumes/BigOne/github/fun/src/lift.js',hash='ef1cc09a52bc224564b3e0811dda1c8062f55e5c',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/lift.js',statementMap:{'0':{start:{line:14,column:15},end:{line:14,column:32}},'1':{start:{line:15,column:2},end:{line:17,column:5}},'2':{start:{line:16,column:4},end:{line:16,column:89}}},fnMap:{'0':{name:'lift',decl:{start:{line:13,column:30},end:{line:13,column:34}},loc:{start:{line:13,column:39},end:{line:18,column:1}},line:13},'1':{name:'_lift',decl:{start:{line:15,column:24},end:{line:15,column:29}},loc:{start:{line:15,column:32},end:{line:17,column:3}},line:15}},branchMap:{},s:{'0':0,'1':0,'2':0},f:{'0':0,'1':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function lift(fn){cov_11woepjbr3.f[0]++;var lifted=(cov_11woepjbr3.s[0]++,Object(_private_curry1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fn)));cov_11woepjbr3.s[1]++;return Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _lift(){cov_11woepjbr3.f[1]++;cov_11woepjbr3.s[2]++;return Object(_fold__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ap__WEBPACK_IMPORTED_MODULE_3__[\"default\"],Object(_map__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(lifted,arguments[0]),Array.prototype.slice.call(arguments,1));});}));\n\n//# sourceURL=webpack://fun/./src/lift.js?");

/***/ }),

/***/ "./src/lt.js":
/*!*******************!*\
  !*** ./src/lt.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1g55m250ag=function(){var path='/Volumes/BigOne/github/fun/src/lt.js',hash='ca826c219d10ae516a37fa9ac8766f37f18f0105',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/lt.js',statementMap:{'0':{start:{line:17,column:2},end:{line:17,column:15}}},fnMap:{'0':{name:'lt',decl:{start:{line:16,column:30},end:{line:16,column:32}},loc:{start:{line:16,column:39},end:{line:18,column:1}},line:16}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function lt(a,b){cov_1g55m250ag.f[0]++;cov_1g55m250ag.s[0]++;return a<b;}));\n\n//# sourceURL=webpack://fun/./src/lt.js?");

/***/ }),

/***/ "./src/lte.js":
/*!********************!*\
  !*** ./src/lte.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1xcj796n7a=function(){var path='/Volumes/BigOne/github/fun/src/lte.js',hash='0b787cc81f83c51511e8a826a2e16e0c0c695c4c',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/lte.js',statementMap:{'0':{start:{line:18,column:2},end:{line:18,column:16}}},fnMap:{'0':{name:'lte',decl:{start:{line:17,column:30},end:{line:17,column:33}},loc:{start:{line:17,column:40},end:{line:19,column:1}},line:17}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function lte(a,b){cov_1xcj796n7a.f[0]++;cov_1xcj796n7a.s[0]++;return a<=b;}));\n\n//# sourceURL=webpack://fun/./src/lte.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/map */ \"./src/array/map.js\");\n/* harmony import */ var _object_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/map */ \"./src/object/map.js\");\n/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map */ \"./src/map/map.js\");\n/* harmony import */ var _string_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string/map */ \"./src/string/map.js\");\n/* harmony import */ var _iterator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iterator/map */ \"./src/iterator/map.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type */ \"./src/type.js\");\n/* harmony import */ var _iterator_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iterator/is */ \"./src/iterator/is.js\");\nvar cov_l2vze35yo=function(){var path='/Volumes/BigOne/github/fun/src/map.js',hash='51f48a5bc5c25dcad804997644d9d0073a4018c8',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/map.js',statementMap:{'0':{start:{line:21,column:2},end:{line:41,column:3}},'1':{start:{line:23,column:6},end:{line:25,column:9}},'2':{start:{line:24,column:8},end:{line:24,column:55}},'3':{start:{line:28,column:6},end:{line:28,column:30}},'4':{start:{line:31,column:6},end:{line:31,column:30}},'5':{start:{line:34,column:6},end:{line:34,column:27}},'6':{start:{line:37,column:6},end:{line:37,column:29}},'7':{start:{line:40,column:6},end:{line:40,column:66}}},fnMap:{'0':{name:'map',decl:{start:{line:20,column:30},end:{line:20,column:33}},loc:{start:{line:20,column:41},end:{line:42,column:1}},line:20},'1':{name:'(anonymous_1)',decl:{start:{line:23,column:19},end:{line:23,column:20}},loc:{start:{line:23,column:31},end:{line:25,column:7}},line:23}},branchMap:{'0':{loc:{start:{line:21,column:2},end:{line:41,column:3}},type:'switch',locations:[{start:{line:22,column:4},end:{line:25,column:9}},{start:{line:27,column:4},end:{line:28,column:30}},{start:{line:30,column:4},end:{line:31,column:30}},{start:{line:33,column:4},end:{line:34,column:27}},{start:{line:36,column:4},end:{line:37,column:29}},{start:{line:39,column:4},end:{line:40,column:66}}],line:21},'1':{loc:{start:{line:40,column:13},end:{line:40,column:65}},type:'cond-expr',locations:[{start:{line:40,column:29},end:{line:40,column:47}},{start:{line:40,column:50},end:{line:40,column:65}}],line:40}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0},f:{'0':0,'1':0},b:{'0':[0,0,0,0,0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function map(cb,a){cov_l2vze35yo.f[0]++;cov_l2vze35yo.s[0]++;switch(Object(_type__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(a)){case'Function':cov_l2vze35yo.b[0][0]++;cov_l2vze35yo.s[1]++;return Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(){cov_l2vze35yo.f[1]++;cov_l2vze35yo.s[2]++;return cb.call(this,a.apply(this,arguments));});case'Object':cov_l2vze35yo.b[0][1]++;cov_l2vze35yo.s[3]++;return Object(_object_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cb,a);case'String':cov_l2vze35yo.b[0][2]++;cov_l2vze35yo.s[4]++;return Object(_string_map__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(cb,a);case'Map':cov_l2vze35yo.b[0][3]++;cov_l2vze35yo.s[5]++;return Object(_map_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(cb,a);case'Array':cov_l2vze35yo.b[0][4]++;cov_l2vze35yo.s[6]++;return Object(_array_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cb,a);default:cov_l2vze35yo.b[0][5]++;cov_l2vze35yo.s[7]++;return Object(_iterator_is__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(a)?(cov_l2vze35yo.b[1][0]++,Object(_iterator_map__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(cb,a)):(cov_l2vze35yo.b[1][1]++,Object(_array_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cb,a));}}));\n\n//# sourceURL=webpack://fun/./src/map.js?");

/***/ }),

/***/ "./src/map/filter.js":
/*!***************************!*\
  !*** ./src/map/filter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_1uz3dws5x3=function(){var path='/Volumes/BigOne/github/fun/src/map/filter.js',hash='6196343c3402a12e752c7b1d7deff110f8ecb0ee',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/map/filter.js',statementMap:{'0':{start:{line:8,column:10},end:{line:8,column:19}},'1':{start:{line:9,column:11},end:{line:9,column:22}},'2':{start:{line:10,column:15},end:{line:10,column:24}},'3':{start:{line:12,column:2},end:{line:17,column:3}},'4':{start:{line:13,column:12},end:{line:13,column:27}},'5':{start:{line:14,column:12},end:{line:14,column:27}},'6':{start:{line:15,column:4},end:{line:15,column:30}},'7':{start:{line:15,column:18},end:{line:15,column:30}},'8':{start:{line:16,column:4},end:{line:16,column:23}},'9':{start:{line:27,column:2},end:{line:27,column:11}}},fnMap:{'0':{name:'mapFilter',decl:{start:{line:7,column:30},end:{line:7,column:39}},loc:{start:{line:7,column:47},end:{line:28,column:1}},line:7}},branchMap:{'0':{loc:{start:{line:15,column:4},end:{line:15,column:30}},type:'if',locations:[{start:{line:15,column:4},end:{line:15,column:30}},{start:{line:15,column:4},end:{line:15,column:30}}],line:15}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function mapFilter(fn,m){cov_1uz3dws5x3.f[0]++;var r=(cov_1uz3dws5x3.s[0]++,new Map());var it=(cov_1uz3dws5x3.s[1]++,m.entries());var result=(cov_1uz3dws5x3.s[2]++,it.next());cov_1uz3dws5x3.s[3]++;while(!result.done){var k=(cov_1uz3dws5x3.s[4]++,result.value[0]);var v=(cov_1uz3dws5x3.s[5]++,result.value[1]);cov_1uz3dws5x3.s[6]++;if(fn(k,v)){cov_1uz3dws5x3.b[0][0]++;cov_1uz3dws5x3.s[7]++;r.set(k,v);}else{cov_1uz3dws5x3.b[0][1]++;}cov_1uz3dws5x3.s[8]++;result=it.next();}cov_1uz3dws5x3.s[9]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/map/filter.js?");

/***/ }),

/***/ "./src/map/is.js":
/*!***********************!*\
  !*** ./src/map/is.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_gemgif20b=function(){var path='/Volumes/BigOne/github/fun/src/map/is.js',hash='2f38bc6d5a4d55d53a44b45f79b7f7ffe55ff7cf',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/map/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Map'));\n\n//# sourceURL=webpack://fun/./src/map/is.js?");

/***/ }),

/***/ "./src/map/keys.js":
/*!*************************!*\
  !*** ./src/map/keys.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_qa0xs1646=function(){var path='/Volumes/BigOne/github/fun/src/map/keys.js',hash='f0d5aeebf3ff1002d44dde9b46b8bc06f1eaf8a5',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/map/keys.js',statementMap:{'0':{start:{line:12,column:2},end:{line:12,column:18}}},fnMap:{'0':{name:'keys',decl:{start:{line:11,column:30},end:{line:11,column:34}},loc:{start:{line:11,column:38},end:{line:13,column:1}},line:11}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function keys(a){cov_qa0xs1646.f[0]++;cov_qa0xs1646.s[0]++;return a.keys();}));\n\n//# sourceURL=webpack://fun/./src/map/keys.js?");

/***/ }),

/***/ "./src/map/map.js":
/*!************************!*\
  !*** ./src/map/map.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../empty */ \"./src/empty.js\");\nvar cov_1e36t69b4u=function(){var path='/Volumes/BigOne/github/fun/src/map/map.js',hash='d89d427315d99450daf9ca241f19104bffe7c788',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/map/map.js',statementMap:{'0':{start:{line:14,column:10},end:{line:14,column:18}},'1':{start:{line:15,column:2},end:{line:17,column:5}},'2':{start:{line:16,column:4},end:{line:16,column:28}},'3':{start:{line:18,column:2},end:{line:18,column:11}}},fnMap:{'0':{name:'map',decl:{start:{line:13,column:30},end:{line:13,column:33}},loc:{start:{line:13,column:41},end:{line:19,column:1}},line:13},'1':{name:'(anonymous_1)',decl:{start:{line:15,column:12},end:{line:15,column:13}},loc:{start:{line:15,column:33},end:{line:17,column:3}},line:15}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0,'1':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function map(cb,a){cov_1e36t69b4u.f[0]++;var r=(cov_1e36t69b4u.s[0]++,Object(_empty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a));cov_1e36t69b4u.s[1]++;a.forEach(function(v,k,map){cov_1e36t69b4u.f[1]++;cov_1e36t69b4u.s[2]++;r.set(k,cb(v,k,map));});cov_1e36t69b4u.s[3]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/map/map.js?");

/***/ }),

/***/ "./src/math/gcd.js":
/*!*************************!*\
  !*** ./src/math/gcd.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_1gqj1knx60=function(){var path='/Volumes/BigOne/github/fun/src/math/gcd.js',hash='94ca17d576ae2a8547432a0507a32bad2000751c',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/math/gcd.js',statementMap:{'0':{start:{line:9,column:2},end:{line:9,column:24}},'1':{start:{line:9,column:15},end:{line:9,column:24}},'2':{start:{line:10,column:10},end:{line:10,column:15}},'3':{start:{line:11,column:2},end:{line:11,column:19}}},fnMap:{'0':{name:'gcd',decl:{start:{line:8,column:30},end:{line:8,column:33}},loc:{start:{line:8,column:40},end:{line:12,column:1}},line:8}},branchMap:{'0':{loc:{start:{line:9,column:2},end:{line:9,column:24}},type:'if',locations:[{start:{line:9,column:2},end:{line:9,column:24}},{start:{line:9,column:2},end:{line:9,column:24}}],line:9}},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function gcd(p,q){cov_1gqj1knx60.f[0]++;cov_1gqj1knx60.s[0]++;if(q===0){cov_1gqj1knx60.b[0][0]++;cov_1gqj1knx60.s[1]++;return p;}else{cov_1gqj1knx60.b[0][1]++;}var r=(cov_1gqj1knx60.s[2]++,p%q);cov_1gqj1knx60.s[3]++;return gcd(q,r);}));\n\n//# sourceURL=webpack://fun/./src/math/gcd.js?");

/***/ }),

/***/ "./src/max.js":
/*!********************!*\
  !*** ./src/max.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_2fvwsrvpuy=function(){var path='/Volumes/BigOne/github/fun/src/max.js',hash='35a5d964fa9f7ac3d92651816203492628d25a73',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/max.js',statementMap:{'0':{start:{line:12,column:2},end:{line:12,column:23}}},fnMap:{'0':{name:'max',decl:{start:{line:11,column:30},end:{line:11,column:33}},loc:{start:{line:11,column:40},end:{line:13,column:1}},line:11}},branchMap:{'0':{loc:{start:{line:12,column:9},end:{line:12,column:22}},type:'cond-expr',locations:[{start:{line:12,column:17},end:{line:12,column:18}},{start:{line:12,column:21},end:{line:12,column:22}}],line:12}},s:{'0':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function max(a,b){cov_2fvwsrvpuy.f[0]++;cov_2fvwsrvpuy.s[0]++;return b>a?(cov_2fvwsrvpuy.b[0][0]++,b):(cov_2fvwsrvpuy.b[0][1]++,a);}));\n\n//# sourceURL=webpack://fun/./src/max.js?");

/***/ }),

/***/ "./src/min.js":
/*!********************!*\
  !*** ./src/min.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_19zkjoyhs7=function(){var path='/Volumes/BigOne/github/fun/src/min.js',hash='f7ec7004b16b6956a034233acc26ea5900206004',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/min.js',statementMap:{'0':{start:{line:13,column:2},end:{line:13,column:23}}},fnMap:{'0':{name:'min',decl:{start:{line:12,column:30},end:{line:12,column:33}},loc:{start:{line:12,column:40},end:{line:14,column:1}},line:12}},branchMap:{'0':{loc:{start:{line:13,column:9},end:{line:13,column:22}},type:'cond-expr',locations:[{start:{line:13,column:17},end:{line:13,column:18}},{start:{line:13,column:21},end:{line:13,column:22}}],line:13}},s:{'0':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function min(a,b){cov_19zkjoyhs7.f[0]++;cov_19zkjoyhs7.s[0]++;return b<a?(cov_19zkjoyhs7.b[0][0]++,b):(cov_19zkjoyhs7.b[0][1]++,a);}));\n\n//# sourceURL=webpack://fun/./src/min.js?");

/***/ }),

/***/ "./src/monads/Either.js":
/*!******************************!*\
  !*** ./src/monads/Either.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Right__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Right */ \"./src/monads/Right.js\");\n/* harmony import */ var _Left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Left */ \"./src/monads/Left.js\");\nvar cov_23era257bq=function(){var path='/Volumes/BigOne/github/fun/src/monads/Either.js',hash='bdf075d83f153b06b70e83dbbf1fc3a01ecdc6ee',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/monads/Either.js',statementMap:{'0':{start:{line:13,column:13},end:{line:15,column:1}},'1':{start:{line:14,column:2},end:{line:14,column:25}},'2':{start:{line:28,column:0},end:{line:36,column:2}},'3':{start:{line:29,column:2},end:{line:29,column:40}},'4':{start:{line:29,column:29},end:{line:29,column:40}},'5':{start:{line:31,column:2},end:{line:33,column:3}},'6':{start:{line:32,column:4},end:{line:32,column:27}},'7':{start:{line:35,column:2},end:{line:35,column:25}},'8':{start:{line:48,column:0},end:{line:48,column:33}},'9':{start:{line:55,column:0},end:{line:55,column:32}},'10':{start:{line:62,column:0},end:{line:62,column:33}},'11':{start:{line:70,column:0},end:{line:72,column:2}},'12':{start:{line:71,column:2},end:{line:71,column:23}},'13':{start:{line:81,column:0},end:{line:83,column:2}},'14':{start:{line:82,column:2},end:{line:82,column:23}},'15':{start:{line:92,column:0},end:{line:94,column:2}},'16':{start:{line:93,column:2},end:{line:93,column:24}},'17':{start:{line:103,column:0},end:{line:105,column:2}},'18':{start:{line:104,column:2},end:{line:104,column:24}}},fnMap:{'0':{name:'Either',decl:{start:{line:13,column:22},end:{line:13,column:28}},loc:{start:{line:13,column:34},end:{line:15,column:1}},line:13},'1':{name:'(anonymous_1)',decl:{start:{line:28,column:12},end:{line:28,column:13}},loc:{start:{line:28,column:27},end:{line:36,column:1}},line:28},'2':{name:'(anonymous_2)',decl:{start:{line:70,column:24},end:{line:70,column:25}},loc:{start:{line:70,column:39},end:{line:72,column:1}},line:70},'3':{name:'(anonymous_3)',decl:{start:{line:81,column:14},end:{line:81,column:15}},loc:{start:{line:81,column:29},end:{line:83,column:1}},line:81},'4':{name:'(anonymous_4)',decl:{start:{line:92,column:25},end:{line:92,column:26}},loc:{start:{line:92,column:40},end:{line:94,column:1}},line:92},'5':{name:'(anonymous_5)',decl:{start:{line:103,column:15},end:{line:103,column:16}},loc:{start:{line:103,column:30},end:{line:105,column:1}},line:103}},branchMap:{'0':{loc:{start:{line:29,column:2},end:{line:29,column:40}},type:'if',locations:[{start:{line:29,column:2},end:{line:29,column:40}},{start:{line:29,column:2},end:{line:29,column:40}}],line:29},'1':{loc:{start:{line:31,column:2},end:{line:33,column:3}},type:'if',locations:[{start:{line:31,column:2},end:{line:33,column:3}},{start:{line:31,column:2},end:{line:33,column:3}}],line:31}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_23era257bq.s[0]++;var Either=function Either(val){cov_23era257bq.f[0]++;cov_23era257bq.s[1]++;return this.Right(val);};cov_23era257bq.s[2]++;Either.of=function(val){cov_23era257bq.f[1]++;cov_23era257bq.s[3]++;if(val instanceof Either){cov_23era257bq.b[0][0]++;cov_23era257bq.s[4]++;return val;}else{cov_23era257bq.b[0][1]++;}cov_23era257bq.s[5]++;if(this instanceof Either){cov_23era257bq.b[1][0]++;cov_23era257bq.s[6]++;return this.Right(val);}else{cov_23era257bq.b[1][1]++;}cov_23era257bq.s[7]++;return new Either(val);};cov_23era257bq.s[8]++;Either.prototype.type='Either';cov_23era257bq.s[9]++;Either.prototype.isLeft=false;cov_23era257bq.s[10]++;Either.prototype.isRight=false;cov_23era257bq.s[11]++;Either.prototype.Left=function(val){cov_23era257bq.f[2]++;cov_23era257bq.s[12]++;return new _Left__WEBPACK_IMPORTED_MODULE_1__[\"default\"](val);};cov_23era257bq.s[13]++;Either.Left=function(val){cov_23era257bq.f[3]++;cov_23era257bq.s[14]++;return new _Left__WEBPACK_IMPORTED_MODULE_1__[\"default\"](val);};cov_23era257bq.s[15]++;Either.prototype.Right=function(val){cov_23era257bq.f[4]++;cov_23era257bq.s[16]++;return new _Right__WEBPACK_IMPORTED_MODULE_0__[\"default\"](val);};cov_23era257bq.s[17]++;Either.Right=function(val){cov_23era257bq.f[5]++;cov_23era257bq.s[18]++;return new _Right__WEBPACK_IMPORTED_MODULE_0__[\"default\"](val);};/* harmony default export */ __webpack_exports__[\"default\"] = (Either);\n\n//# sourceURL=webpack://fun/./src/monads/Either.js?");

/***/ }),

/***/ "./src/monads/Just.js":
/*!****************************!*\
  !*** ./src/monads/Just.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_13pl5pimo9=function(){var path=\"/Volumes/BigOne/github/fun/src/monads/Just.js\",hash=\"8d6c67b236da5e3df80aca2e392697feffec1fc5\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/Volumes/BigOne/github/fun/src/monads/Just.js\",statementMap:{\"0\":{start:{line:7,column:11},end:{line:10,column:1}},\"1\":{start:{line:8,column:2},end:{line:8,column:21}},\"2\":{start:{line:9,column:2},end:{line:9,column:14}},\"3\":{start:{line:18,column:0},end:{line:20,column:2}},\"4\":{start:{line:19,column:2},end:{line:19,column:14}},\"5\":{start:{line:28,column:0},end:{line:30,column:2}},\"6\":{start:{line:29,column:2},end:{line:29,column:15}}},fnMap:{\"0\":{name:\"Just\",decl:{start:{line:7,column:20},end:{line:7,column:24}},loc:{start:{line:7,column:30},end:{line:10,column:1}},line:7},\"1\":{name:\"(anonymous_1)\",decl:{start:{line:18,column:24},end:{line:18,column:25}},loc:{start:{line:18,column:36},end:{line:20,column:1}},line:18},\"2\":{name:\"(anonymous_2)\",decl:{start:{line:28,column:27},end:{line:28,column:28}},loc:{start:{line:28,column:39},end:{line:30,column:1}},line:28}},branchMap:{},s:{\"0\":0,\"1\":0,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0},f:{\"0\":0,\"1\":0,\"2\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_13pl5pimo9.s[0]++;var Just=function Just(val){cov_13pl5pimo9.f[0]++;cov_13pl5pimo9.s[1]++;this.__value=val;cov_13pl5pimo9.s[2]++;return this;};cov_13pl5pimo9.s[3]++;Just.prototype.isJust=function(){cov_13pl5pimo9.f[1]++;cov_13pl5pimo9.s[4]++;return true;};cov_13pl5pimo9.s[5]++;Just.prototype.isNothing=function(){cov_13pl5pimo9.f[2]++;cov_13pl5pimo9.s[6]++;return false;};/* harmony default export */ __webpack_exports__[\"default\"] = (Just);\n\n//# sourceURL=webpack://fun/./src/monads/Just.js?");

/***/ }),

/***/ "./src/monads/Left.js":
/*!****************************!*\
  !*** ./src/monads/Left.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_2e4r1cedpx=function(){var path='/Volumes/BigOne/github/fun/src/monads/Left.js',hash='4050c6dc7edb63e6be062a0c6b90c8b22a9b8518',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/monads/Left.js',statementMap:{'0':{start:{line:7,column:11},end:{line:10,column:1}},'1':{start:{line:8,column:2},end:{line:8,column:21}},'2':{start:{line:9,column:2},end:{line:9,column:14}},'3':{start:{line:22,column:0},end:{line:22,column:29}},'4':{start:{line:29,column:0},end:{line:31,column:2}},'5':{start:{line:30,column:2},end:{line:30,column:14}},'6':{start:{line:39,column:0},end:{line:41,column:2}},'7':{start:{line:40,column:2},end:{line:40,column:15}},'8':{start:{line:50,column:0},end:{line:52,column:2}},'9':{start:{line:51,column:2},end:{line:51,column:14}},'10':{start:{line:61,column:0},end:{line:63,column:2}},'11':{start:{line:62,column:2},end:{line:62,column:14}},'12':{start:{line:72,column:0},end:{line:74,column:2}},'13':{start:{line:73,column:2},end:{line:73,column:14}},'14':{start:{line:82,column:0},end:{line:84,column:2}},'15':{start:{line:83,column:2},end:{line:83,column:45}},'16':{start:{line:94,column:0},end:{line:96,column:2}},'17':{start:{line:95,column:2},end:{line:95,column:25}},'18':{start:{line:104,column:0},end:{line:106,column:2}},'19':{start:{line:105,column:2},end:{line:105,column:63}},'20':{start:{line:115,column:0},end:{line:117,column:2}},'21':{start:{line:116,column:2},end:{line:116,column:11}}},fnMap:{'0':{name:'Left',decl:{start:{line:7,column:20},end:{line:7,column:24}},loc:{start:{line:7,column:30},end:{line:10,column:1}},line:7},'1':{name:'(anonymous_1)',decl:{start:{line:29,column:24},end:{line:29,column:25}},loc:{start:{line:29,column:36},end:{line:31,column:1}},line:29},'2':{name:'(anonymous_2)',decl:{start:{line:39,column:25},end:{line:39,column:26}},loc:{start:{line:39,column:37},end:{line:41,column:1}},line:39},'3':{name:'(anonymous_3)',decl:{start:{line:50,column:20},end:{line:50,column:21}},loc:{start:{line:50,column:33},end:{line:52,column:1}},line:50},'4':{name:'(anonymous_4)',decl:{start:{line:61,column:21},end:{line:61,column:22}},loc:{start:{line:61,column:34},end:{line:63,column:1}},line:61},'5':{name:'(anonymous_5)',decl:{start:{line:72,column:23},end:{line:72,column:24}},loc:{start:{line:72,column:36},end:{line:74,column:1}},line:72},'6':{name:'(anonymous_6)',decl:{start:{line:82,column:26},end:{line:82,column:27}},loc:{start:{line:82,column:38},end:{line:84,column:1}},line:82},'7':{name:'(anonymous_7)',decl:{start:{line:94,column:22},end:{line:94,column:23}},loc:{start:{line:94,column:38},end:{line:96,column:1}},line:94},'8':{name:'(anonymous_8)',decl:{start:{line:104,column:21},end:{line:104,column:22}},loc:{start:{line:104,column:33},end:{line:106,column:1}},line:104},'9':{name:'(anonymous_9)',decl:{start:{line:115,column:27},end:{line:115,column:28}},loc:{start:{line:115,column:40},end:{line:117,column:1}},line:115}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2e4r1cedpx.s[0]++;var Left=function Left(val){cov_2e4r1cedpx.f[0]++;cov_2e4r1cedpx.s[1]++;this.__value=val;cov_2e4r1cedpx.s[2]++;return this;};cov_2e4r1cedpx.s[3]++;Left.prototype.type='Left';cov_2e4r1cedpx.s[4]++;Left.prototype.isLeft=function(){cov_2e4r1cedpx.f[1]++;cov_2e4r1cedpx.s[5]++;return true;};cov_2e4r1cedpx.s[6]++;Left.prototype.isRight=function(){cov_2e4r1cedpx.f[2]++;cov_2e4r1cedpx.s[7]++;return false;};cov_2e4r1cedpx.s[8]++;Left.prototype.ap=function(b){cov_2e4r1cedpx.f[3]++;cov_2e4r1cedpx.s[9]++;return this;};cov_2e4r1cedpx.s[10]++;Left.prototype.map=function(f){cov_2e4r1cedpx.f[4]++;cov_2e4r1cedpx.s[11]++;return this;};cov_2e4r1cedpx.s[12]++;Left.prototype.chain=function(f){cov_2e4r1cedpx.f[5]++;cov_2e4r1cedpx.s[13]++;return this;};cov_2e4r1cedpx.s[14]++;Left.prototype.toString=function(){cov_2e4r1cedpx.f[6]++;cov_2e4r1cedpx.s[15]++;return'Either.Left('+this.__value+')';};cov_2e4r1cedpx.s[16]++;Left.prototype.cata=function(f,_){cov_2e4r1cedpx.f[7]++;cov_2e4r1cedpx.s[17]++;return f(this.__value);};cov_2e4r1cedpx.s[18]++;Left.prototype.get=function(){cov_2e4r1cedpx.f[8]++;cov_2e4r1cedpx.s[19]++;throw new TypeError(\"Can't extract the value of a Left(a).\");};cov_2e4r1cedpx.s[20]++;Left.prototype.getOrElse=function(a){cov_2e4r1cedpx.f[9]++;cov_2e4r1cedpx.s[21]++;return a;};/* harmony default export */ __webpack_exports__[\"default\"] = (Left);\n\n//# sourceURL=webpack://fun/./src/monads/Left.js?");

/***/ }),

/***/ "./src/monads/Maybe.js":
/*!*****************************!*\
  !*** ./src/monads/Maybe.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Just__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Just */ \"./src/monads/Just.js\");\n/* harmony import */ var _Nothing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nothing */ \"./src/monads/Nothing.js\");\nvar cov_10nxauz3es=function(){var path='/Volumes/BigOne/github/fun/src/monads/Maybe.js',hash='8becde5d35fca79267e6deac2dbe8e6633163389',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/monads/Maybe.js',statementMap:{'0':{start:{line:13,column:12},end:{line:15,column:1}},'1':{start:{line:14,column:2},end:{line:14,column:21}},'2':{start:{line:28,column:0},end:{line:37,column:2}},'3':{start:{line:29,column:2},end:{line:29,column:39}},'4':{start:{line:29,column:28},end:{line:29,column:39}},'5':{start:{line:31,column:2},end:{line:34,column:3}},'6':{start:{line:32,column:4},end:{line:32,column:23}},'7':{start:{line:33,column:4},end:{line:33,column:16}},'8':{start:{line:36,column:2},end:{line:36,column:24}},'9':{start:{line:49,column:0},end:{line:49,column:31}},'10':{start:{line:65,column:0},end:{line:67,column:2}},'11':{start:{line:66,column:2},end:{line:66,column:45}},'12':{start:{line:76,column:0},end:{line:82,column:2}},'13':{start:{line:77,column:2},end:{line:79,column:3}},'14':{start:{line:78,column:4},end:{line:78,column:26}},'15':{start:{line:81,column:2},end:{line:81,column:35}},'16':{start:{line:91,column:0},end:{line:93,column:2}},'17':{start:{line:92,column:2},end:{line:92,column:21}},'18':{start:{line:102,column:0},end:{line:104,column:2}},'19':{start:{line:103,column:2},end:{line:103,column:39}},'20':{start:{line:112,column:0},end:{line:114,column:2}},'21':{start:{line:113,column:2},end:{line:113,column:30}},'22':{start:{line:122,column:0},end:{line:124,column:2}},'23':{start:{line:123,column:2},end:{line:123,column:27}},'24':{start:{line:134,column:0},end:{line:136,column:2}},'25':{start:{line:135,column:2},end:{line:135,column:23}},'26':{start:{line:146,column:0},end:{line:148,column:2}},'27':{start:{line:147,column:2},end:{line:147,column:31}}},fnMap:{'0':{name:'Maybe',decl:{start:{line:13,column:21},end:{line:13,column:26}},loc:{start:{line:13,column:32},end:{line:15,column:1}},line:13},'1':{name:'(anonymous_1)',decl:{start:{line:28,column:11},end:{line:28,column:12}},loc:{start:{line:28,column:26},end:{line:37,column:1}},line:28},'2':{name:'(anonymous_2)',decl:{start:{line:65,column:28},end:{line:65,column:29}},loc:{start:{line:65,column:41},end:{line:67,column:1}},line:65},'3':{name:'(anonymous_3)',decl:{start:{line:76,column:22},end:{line:76,column:23}},loc:{start:{line:76,column:35},end:{line:82,column:1}},line:76},'4':{name:'(anonymous_4)',decl:{start:{line:91,column:26},end:{line:91,column:27}},loc:{start:{line:91,column:39},end:{line:93,column:1}},line:91},'5':{name:'(anonymous_5)',decl:{start:{line:102,column:21},end:{line:102,column:22}},loc:{start:{line:102,column:34},end:{line:104,column:1}},line:102},'6':{name:'(anonymous_6)',decl:{start:{line:112,column:28},end:{line:112,column:29}},loc:{start:{line:112,column:40},end:{line:114,column:1}},line:112},'7':{name:'(anonymous_7)',decl:{start:{line:122,column:25},end:{line:122,column:26}},loc:{start:{line:122,column:37},end:{line:124,column:1}},line:122},'8':{name:'(anonymous_8)',decl:{start:{line:134,column:26},end:{line:134,column:27}},loc:{start:{line:134,column:38},end:{line:136,column:1}},line:134},'9':{name:'(anonymous_9)',decl:{start:{line:146,column:23},end:{line:146,column:24}},loc:{start:{line:146,column:35},end:{line:148,column:1}},line:146}},branchMap:{'0':{loc:{start:{line:29,column:2},end:{line:29,column:39}},type:'if',locations:[{start:{line:29,column:2},end:{line:29,column:39}},{start:{line:29,column:2},end:{line:29,column:39}}],line:29},'1':{loc:{start:{line:31,column:2},end:{line:34,column:3}},type:'if',locations:[{start:{line:31,column:2},end:{line:34,column:3}},{start:{line:31,column:2},end:{line:34,column:3}}],line:31},'2':{loc:{start:{line:66,column:9},end:{line:66,column:44}},type:'cond-expr',locations:[{start:{line:66,column:28},end:{line:66,column:29}},{start:{line:66,column:32},end:{line:66,column:44}}],line:66},'3':{loc:{start:{line:77,column:2},end:{line:79,column:3}},type:'if',locations:[{start:{line:77,column:2},end:{line:79,column:3}},{start:{line:77,column:2},end:{line:79,column:3}}],line:77}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_10nxauz3es.s[0]++;var Maybe=function Maybe(val){cov_10nxauz3es.f[0]++;cov_10nxauz3es.s[1]++;this.__value=val;};cov_10nxauz3es.s[2]++;Maybe.of=function(val){cov_10nxauz3es.f[1]++;cov_10nxauz3es.s[3]++;if(val instanceof Maybe){cov_10nxauz3es.b[0][0]++;cov_10nxauz3es.s[4]++;return val;}else{cov_10nxauz3es.b[0][1]++;}cov_10nxauz3es.s[5]++;if(this instanceof Maybe){cov_10nxauz3es.b[1][0]++;cov_10nxauz3es.s[6]++;this.__value=val;cov_10nxauz3es.s[7]++;return this;}else{cov_10nxauz3es.b[1][1]++;}cov_10nxauz3es.s[8]++;return new Maybe(val);};cov_10nxauz3es.s[9]++;Maybe.prototype.type='Maybe';cov_10nxauz3es.s[10]++;Maybe.prototype.getOrElse=function(n){cov_10nxauz3es.f[2]++;cov_10nxauz3es.s[11]++;return this.isNothing()?(cov_10nxauz3es.b[2][0]++,n):(cov_10nxauz3es.b[2][1]++,this.__value);};cov_10nxauz3es.s[12]++;Maybe.prototype.map=function(f){cov_10nxauz3es.f[3]++;cov_10nxauz3es.s[13]++;if(this.isNothing()){cov_10nxauz3es.b[3][0]++;cov_10nxauz3es.s[14]++;return Maybe.of(null);}else{cov_10nxauz3es.b[3][1]++;}cov_10nxauz3es.s[15]++;return Maybe.of(f(this.__value));};cov_10nxauz3es.s[16]++;Maybe.prototype.flatMap=function(f){cov_10nxauz3es.f[4]++;cov_10nxauz3es.s[17]++;return this.map(f);};cov_10nxauz3es.s[18]++;Maybe.prototype.ap=function(m){cov_10nxauz3es.f[5]++;cov_10nxauz3es.s[19]++;return Maybe.of(m).map(this.__value);};cov_10nxauz3es.s[20]++;Maybe.prototype.isNothing=function(){cov_10nxauz3es.f[6]++;cov_10nxauz3es.s[21]++;return this.__value==null;};cov_10nxauz3es.s[22]++;Maybe.prototype.isJust=function(){cov_10nxauz3es.f[7]++;cov_10nxauz3es.s[23]++;return!this.isNothing();};cov_10nxauz3es.s[24]++;Maybe.prototype.Nothing=function(){cov_10nxauz3es.f[8]++;cov_10nxauz3es.s[25]++;return new _Nothing__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();};cov_10nxauz3es.s[26]++;Maybe.prototype.Just=function(){cov_10nxauz3es.f[9]++;cov_10nxauz3es.s[27]++;return new _Just__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this._value);};/* harmony default export */ __webpack_exports__[\"default\"] = (Maybe);\n\n//# sourceURL=webpack://fun/./src/monads/Maybe.js?");

/***/ }),

/***/ "./src/monads/Nothing.js":
/*!*******************************!*\
  !*** ./src/monads/Nothing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_247yfbu6ld=function(){var path=\"/Volumes/BigOne/github/fun/src/monads/Nothing.js\",hash=\"1dddac0939a3a8bdc12ca7d90d4d06c93addf343\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/Volumes/BigOne/github/fun/src/monads/Nothing.js\",statementMap:{\"0\":{start:{line:5,column:14},end:{line:5,column:35}},\"1\":{start:{line:13,column:0},end:{line:15,column:2}},\"2\":{start:{line:14,column:2},end:{line:14,column:15}},\"3\":{start:{line:23,column:0},end:{line:25,column:2}},\"4\":{start:{line:24,column:2},end:{line:24,column:14}}},fnMap:{\"0\":{name:\"Nothing\",decl:{start:{line:5,column:23},end:{line:5,column:30}},loc:{start:{line:5,column:33},end:{line:5,column:35}},line:5},\"1\":{name:\"(anonymous_1)\",decl:{start:{line:13,column:27},end:{line:13,column:28}},loc:{start:{line:13,column:39},end:{line:15,column:1}},line:13},\"2\":{name:\"(anonymous_2)\",decl:{start:{line:23,column:30},end:{line:23,column:31}},loc:{start:{line:23,column:42},end:{line:25,column:1}},line:23}},branchMap:{},s:{\"0\":0,\"1\":0,\"2\":0,\"3\":0,\"4\":0},f:{\"0\":0,\"1\":0,\"2\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_247yfbu6ld.s[0]++;var Nothing=function Nothing(){cov_247yfbu6ld.f[0]++;};cov_247yfbu6ld.s[1]++;Nothing.prototype.isJust=function(){cov_247yfbu6ld.f[1]++;cov_247yfbu6ld.s[2]++;return false;};cov_247yfbu6ld.s[3]++;Nothing.prototype.isNothing=function(){cov_247yfbu6ld.f[2]++;cov_247yfbu6ld.s[4]++;return true;};/* harmony default export */ __webpack_exports__[\"default\"] = (Nothing);\n\n//# sourceURL=webpack://fun/./src/monads/Nothing.js?");

/***/ }),

/***/ "./src/monads/Right.js":
/*!*****************************!*\
  !*** ./src/monads/Right.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cov_2gkrm11i1g=function(){var path='/Volumes/BigOne/github/fun/src/monads/Right.js',hash='0f59b0acb5c285dab9737160487112fd329f6575',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/monads/Right.js',statementMap:{'0':{start:{line:7,column:12},end:{line:10,column:1}},'1':{start:{line:8,column:2},end:{line:8,column:21}},'2':{start:{line:9,column:2},end:{line:9,column:14}},'3':{start:{line:22,column:0},end:{line:22,column:31}},'4':{start:{line:29,column:0},end:{line:31,column:2}},'5':{start:{line:30,column:2},end:{line:30,column:14}},'6':{start:{line:39,column:0},end:{line:41,column:2}},'7':{start:{line:40,column:2},end:{line:40,column:15}},'8':{start:{line:50,column:0},end:{line:52,column:2}},'9':{start:{line:51,column:2},end:{line:51,column:29}},'10':{start:{line:61,column:0},end:{line:63,column:2}},'11':{start:{line:62,column:2},end:{line:62,column:36}},'12':{start:{line:72,column:0},end:{line:74,column:2}},'13':{start:{line:73,column:2},end:{line:73,column:25}},'14':{start:{line:82,column:0},end:{line:84,column:2}},'15':{start:{line:83,column:2},end:{line:83,column:46}},'16':{start:{line:94,column:0},end:{line:96,column:2}},'17':{start:{line:95,column:2},end:{line:95,column:25}},'18':{start:{line:104,column:0},end:{line:106,column:2}},'19':{start:{line:105,column:2},end:{line:105,column:22}},'20':{start:{line:115,column:0},end:{line:117,column:2}},'21':{start:{line:116,column:2},end:{line:116,column:22}}},fnMap:{'0':{name:'Right',decl:{start:{line:7,column:21},end:{line:7,column:26}},loc:{start:{line:7,column:32},end:{line:10,column:1}},line:7},'1':{name:'(anonymous_1)',decl:{start:{line:29,column:26},end:{line:29,column:27}},loc:{start:{line:29,column:38},end:{line:31,column:1}},line:29},'2':{name:'(anonymous_2)',decl:{start:{line:39,column:25},end:{line:39,column:26}},loc:{start:{line:39,column:37},end:{line:41,column:1}},line:39},'3':{name:'(anonymous_3)',decl:{start:{line:50,column:21},end:{line:50,column:22}},loc:{start:{line:50,column:34},end:{line:52,column:1}},line:50},'4':{name:'(anonymous_4)',decl:{start:{line:61,column:22},end:{line:61,column:23}},loc:{start:{line:61,column:35},end:{line:63,column:1}},line:61},'5':{name:'(anonymous_5)',decl:{start:{line:72,column:24},end:{line:72,column:25}},loc:{start:{line:72,column:37},end:{line:74,column:1}},line:72},'6':{name:'(anonymous_6)',decl:{start:{line:82,column:27},end:{line:82,column:28}},loc:{start:{line:82,column:39},end:{line:84,column:1}},line:82},'7':{name:'(anonymous_7)',decl:{start:{line:94,column:23},end:{line:94,column:24}},loc:{start:{line:94,column:39},end:{line:96,column:1}},line:94},'8':{name:'(anonymous_8)',decl:{start:{line:104,column:22},end:{line:104,column:23}},loc:{start:{line:104,column:34},end:{line:106,column:1}},line:104},'9':{name:'(anonymous_9)',decl:{start:{line:115,column:28},end:{line:115,column:29}},loc:{start:{line:115,column:41},end:{line:117,column:1}},line:115}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2gkrm11i1g.s[0]++;var Right=function Right(val){cov_2gkrm11i1g.f[0]++;cov_2gkrm11i1g.s[1]++;this.__value=val;cov_2gkrm11i1g.s[2]++;return this;};cov_2gkrm11i1g.s[3]++;Right.prototype.type='Right';cov_2gkrm11i1g.s[4]++;Right.prototype.isRight=function(){cov_2gkrm11i1g.f[1]++;cov_2gkrm11i1g.s[5]++;return true;};cov_2gkrm11i1g.s[6]++;Right.prototype.isLeft=function(){cov_2gkrm11i1g.f[2]++;cov_2gkrm11i1g.s[7]++;return false;};cov_2gkrm11i1g.s[8]++;Right.prototype.ap=function(b){cov_2gkrm11i1g.f[3]++;cov_2gkrm11i1g.s[9]++;return b.map(this.__value);};cov_2gkrm11i1g.s[10]++;Right.prototype.map=function(f){cov_2gkrm11i1g.f[4]++;cov_2gkrm11i1g.s[11]++;return new Right(f(this.__value));};cov_2gkrm11i1g.s[12]++;Right.prototype.chain=function(f){cov_2gkrm11i1g.f[5]++;cov_2gkrm11i1g.s[13]++;return f(this.__value);};cov_2gkrm11i1g.s[14]++;Right.prototype.toString=function(){cov_2gkrm11i1g.f[6]++;cov_2gkrm11i1g.s[15]++;return'Either.Right('+this.__value+')';};cov_2gkrm11i1g.s[16]++;Right.prototype.cata=function(_,g){cov_2gkrm11i1g.f[7]++;cov_2gkrm11i1g.s[17]++;return g(this.__value);};cov_2gkrm11i1g.s[18]++;Right.prototype.get=function(){cov_2gkrm11i1g.f[8]++;cov_2gkrm11i1g.s[19]++;return this.__value;};cov_2gkrm11i1g.s[20]++;Right.prototype.getOrElse=function(f){cov_2gkrm11i1g.f[9]++;cov_2gkrm11i1g.s[21]++;return this.__value;};/* harmony default export */ __webpack_exports__[\"default\"] = (Right);\n\n//# sourceURL=webpack://fun/./src/monads/Right.js?");

/***/ }),

/***/ "./src/not.js":
/*!********************!*\
  !*** ./src/not.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_2601jfithm=function(){var path='/Volumes/BigOne/github/fun/src/not.js',hash='7aa4c72845712aac43c2023816f47ad5c861dc3b',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/not.js',statementMap:{'0':{start:{line:6,column:2},end:{line:6,column:12}}},fnMap:{'0':{name:'not',decl:{start:{line:5,column:30},end:{line:5,column:33}},loc:{start:{line:5,column:37},end:{line:7,column:1}},line:5}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function not(x){cov_2601jfithm.f[0]++;cov_2601jfithm.s[0]++;return!x;}));\n\n//# sourceURL=webpack://fun/./src/not.js?");

/***/ }),

/***/ "./src/null/is.js":
/*!************************!*\
  !*** ./src/null/is.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_1xlgra8wxs=function(){var path='/Volumes/BigOne/github/fun/src/null/is.js',hash='d8f253e13de40bc73ba3e6bfe97fc54c6abd4de1',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/null/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('null'));\n\n//# sourceURL=webpack://fun/./src/null/is.js?");

/***/ }),

/***/ "./src/number/add.js":
/*!***************************!*\
  !*** ./src/number/add.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_1pwowam8d2=function(){var path='/Volumes/BigOne/github/fun/src/number/add.js',hash='52456c7fd6dcc4ece8df0041d7e3297a29e69e18',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/number/add.js',statementMap:{'0':{start:{line:14,column:2},end:{line:14,column:17}}},fnMap:{'0':{name:'add',decl:{start:{line:13,column:30},end:{line:13,column:33}},loc:{start:{line:13,column:40},end:{line:15,column:1}},line:13}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function add(a,b){cov_1pwowam8d2.f[0]++;cov_1pwowam8d2.s[0]++;return+a+ +b;}));\n\n//# sourceURL=webpack://fun/./src/number/add.js?");

/***/ }),

/***/ "./src/number/divide.js":
/*!******************************!*\
  !*** ./src/number/divide.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_2azkvp2xgh=function(){var path='/Volumes/BigOne/github/fun/src/number/divide.js',hash='00b02f2534121a54e02fdc91837a758abadb4364',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/number/divide.js',statementMap:{'0':{start:{line:14,column:2},end:{line:14,column:17}}},fnMap:{'0':{name:'divide',decl:{start:{line:13,column:30},end:{line:13,column:36}},loc:{start:{line:13,column:43},end:{line:15,column:1}},line:13}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function divide(a,b){cov_2azkvp2xgh.f[0]++;cov_2azkvp2xgh.s[0]++;return+a/+b;}));\n\n//# sourceURL=webpack://fun/./src/number/divide.js?");

/***/ }),

/***/ "./src/number/is.js":
/*!**************************!*\
  !*** ./src/number/is.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_17u2omo912=function(){var path='/Volumes/BigOne/github/fun/src/number/is.js',hash='40e381037f76457916145a1fdf2a44b49085503e',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/number/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Number'));\n\n//# sourceURL=webpack://fun/./src/number/is.js?");

/***/ }),

/***/ "./src/number/isNan.js":
/*!*****************************!*\
  !*** ./src/number/isNan.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isNan; });\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ \"./src/number/is.js\");\n/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../and */ \"./src/and.js\");\nvar cov_1t7v0lxiof=function(){var path='/Volumes/BigOne/github/fun/src/number/isNan.js',hash='b506eda76e4e3d120a067cfccebd85272795d7aa',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/number/isNan.js',statementMap:{'0':{start:{line:9,column:2},end:{line:9,column:36}}},fnMap:{'0':{name:'isNan',decl:{start:{line:8,column:24},end:{line:8,column:29}},loc:{start:{line:8,column:33},end:{line:10,column:1}},line:8}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function isNan(x){cov_1t7v0lxiof.f[0]++;cov_1t7v0lxiof.s[0]++;return Object(_and__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x),isNaN(x));};\n\n//# sourceURL=webpack://fun/./src/number/isNan.js?");

/***/ }),

/***/ "./src/number/multiply.js":
/*!********************************!*\
  !*** ./src/number/multiply.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_exaqg4z83=function(){var path='/Volumes/BigOne/github/fun/src/number/multiply.js',hash='94b3f3f4603ab809756e9094d3e4d88c58aeac8c',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/number/multiply.js',statementMap:{'0':{start:{line:13,column:2},end:{line:13,column:17}}},fnMap:{'0':{name:'multiply',decl:{start:{line:12,column:30},end:{line:12,column:38}},loc:{start:{line:12,column:45},end:{line:14,column:1}},line:12}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function multiply(a,b){cov_exaqg4z83.f[0]++;cov_exaqg4z83.s[0]++;return+a*+b;}));\n\n//# sourceURL=webpack://fun/./src/number/multiply.js?");

/***/ }),

/***/ "./src/number/sum.js":
/*!***************************!*\
  !*** ./src/number/sum.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add */ \"./src/number/add.js\");\n/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fold */ \"./src/fold.js\");\nvar cov_29qdly8lhr=function(){var path='/Volumes/BigOne/github/fun/src/number/sum.js',hash='d0280013e3befaaf86a2f0c17f42b27c12ad6859',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/number/sum.js',statementMap:{'0':{start:{line:14,column:2},end:{line:14,column:25}}},fnMap:{'0':{name:'sum',decl:{start:{line:13,column:30},end:{line:13,column:33}},loc:{start:{line:13,column:37},end:{line:15,column:1}},line:13}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function sum(a){cov_29qdly8lhr.f[0]++;cov_29qdly8lhr.s[0]++;return Object(_fold__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_add__WEBPACK_IMPORTED_MODULE_1__[\"default\"],0,a);}));\n\n//# sourceURL=webpack://fun/./src/number/sum.js?");

/***/ }),

/***/ "./src/object/equals.js":
/*!******************************!*\
  !*** ./src/object/equals.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exists */ \"./src/exists.js\");\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../not */ \"./src/not.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../equals */ \"./src/equals.js\");\nvar cov_11c8nkoyj=function(){var path='/Volumes/BigOne/github/fun/src/object/equals.js',hash='85ea4ba013d1233ab5f880c9450c81069df74257',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/equals.js',statementMap:{'0':{start:{line:13,column:2},end:{line:15,column:3}},'1':{start:{line:14,column:4},end:{line:14,column:52}},'2':{start:{line:14,column:39},end:{line:14,column:52}},'3':{start:{line:17,column:2},end:{line:19,column:3}},'4':{start:{line:18,column:4},end:{line:18,column:62}},'5':{start:{line:18,column:49},end:{line:18,column:62}},'6':{start:{line:21,column:2},end:{line:21,column:14}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:12,column:21},end:{line:12,column:22}},loc:{start:{line:12,column:37},end:{line:22,column:1}},line:12}},branchMap:{'0':{loc:{start:{line:14,column:4},end:{line:14,column:52}},type:'if',locations:[{start:{line:14,column:4},end:{line:14,column:52}},{start:{line:14,column:4},end:{line:14,column:52}}],line:14},'1':{loc:{start:{line:18,column:4},end:{line:18,column:62}},type:'if',locations:[{start:{line:18,column:4},end:{line:18,column:62}},{start:{line:18,column:4},end:{line:18,column:62}}],line:18},'2':{loc:{start:{line:18,column:8},end:{line:18,column:47}},type:'binary-expr',locations:[{start:{line:18,column:8},end:{line:18,column:28}},{start:{line:18,column:32},end:{line:18,column:47}}],line:18}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0},b:{'0':[0,0],'1':[0,0],'2':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(x,y){cov_11c8nkoyj.f[0]++;cov_11c8nkoyj.s[0]++;for(var keyX in x){cov_11c8nkoyj.s[1]++;if(Object(_not__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_equals__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(x[keyX],y[keyX]))){cov_11c8nkoyj.b[0][0]++;cov_11c8nkoyj.s[2]++;return false;}else{cov_11c8nkoyj.b[0][1]++;}}cov_11c8nkoyj.s[3]++;for(var keyY in y){cov_11c8nkoyj.s[4]++;if((cov_11c8nkoyj.b[2][0]++,Object(_not__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x[keyY])))&&(cov_11c8nkoyj.b[2][1]++,Object(_exists__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(y[keyY]))){cov_11c8nkoyj.b[1][0]++;cov_11c8nkoyj.s[5]++;return false;}else{cov_11c8nkoyj.b[1][1]++;}}cov_11c8nkoyj.s[6]++;return true;}));\n\n//# sourceURL=webpack://fun/./src/object/equals.js?");

/***/ }),

/***/ "./src/object/filter.js":
/*!******************************!*\
  !*** ./src/object/filter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ \"./src/object/keys.js\");\nvar cov_25q8zdgll1=function(){var path='/Volumes/BigOne/github/fun/src/object/filter.js',hash='a224c94f668a9624e55fd2fee8619ee7fc2098ec',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/filter.js',statementMap:{'0':{start:{line:12,column:10},end:{line:12,column:12}},'1':{start:{line:13,column:10},end:{line:13,column:17}},'2':{start:{line:15,column:2},end:{line:17,column:3}},'3':{start:{line:16,column:4},end:{line:16,column:39}},'4':{start:{line:16,column:21},end:{line:16,column:39}},'5':{start:{line:19,column:2},end:{line:19,column:11}}},fnMap:{'0':{name:'objectFilter',decl:{start:{line:11,column:30},end:{line:11,column:42}},loc:{start:{line:11,column:50},end:{line:20,column:1}},line:11}},branchMap:{'0':{loc:{start:{line:16,column:4},end:{line:16,column:39}},type:'if',locations:[{start:{line:16,column:4},end:{line:16,column:39}},{start:{line:16,column:4},end:{line:16,column:39}}],line:16}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function objectFilter(fn,o){cov_25q8zdgll1.f[0]++;var r=(cov_25q8zdgll1.s[0]++,{});var k=(cov_25q8zdgll1.s[1]++,Object(_keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(o));cov_25q8zdgll1.s[2]++;for(var i=0;i<k.length;i++){cov_25q8zdgll1.s[3]++;if(fn(o[k[i]])){cov_25q8zdgll1.b[0][0]++;cov_25q8zdgll1.s[4]++;r[k[i]]=o[k[i]];}else{cov_25q8zdgll1.b[0][1]++;}}cov_25q8zdgll1.s[5]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/object/filter.js?");

/***/ }),

/***/ "./src/object/fold.js":
/*!****************************!*\
  !*** ./src/object/fold.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ \"./src/object/keys.js\");\nvar cov_v4jl04c8o=function(){var path='/Volumes/BigOne/github/fun/src/object/fold.js',hash='422b27783f9a4446de553ba343f761387aea876d',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/fold.js',statementMap:{'0':{start:{line:13,column:10},end:{line:13,column:17}},'1':{start:{line:14,column:10},end:{line:14,column:12}},'2':{start:{line:15,column:10},end:{line:15,column:18}},'3':{start:{line:16,column:10},end:{line:16,column:22}},'4':{start:{line:18,column:2},end:{line:20,column:3}},'5':{start:{line:19,column:4},end:{line:19,column:32}},'6':{start:{line:22,column:2},end:{line:22,column:11}}},fnMap:{'0':{name:'fold',decl:{start:{line:12,column:30},end:{line:12,column:34}},loc:{start:{line:12,column:48},end:{line:23,column:1}},line:12}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function fold(cb,init,o){cov_v4jl04c8o.f[0]++;var k=(cov_v4jl04c8o.s[0]++,Object(_keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(o));var i=(cov_v4jl04c8o.s[1]++,-1);var l=(cov_v4jl04c8o.s[2]++,k.length);var r=(cov_v4jl04c8o.s[3]++,Object(init));cov_v4jl04c8o.s[4]++;while(++i<l){cov_v4jl04c8o.s[5]++;r=cb(r,o[k[i]],k[i],o);}cov_v4jl04c8o.s[6]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/object/fold.js?");

/***/ }),

/***/ "./src/object/has.js":
/*!***************************!*\
  !*** ./src/object/has.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_15eaf386ho=function(){var path='/Volumes/BigOne/github/fun/src/object/has.js',hash='b54a6755139fce9fe120c7e51439662f25499b65',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/has.js',statementMap:{'0':{start:{line:13,column:2},end:{line:13,column:57}}},fnMap:{'0':{name:'has',decl:{start:{line:12,column:30},end:{line:12,column:33}},loc:{start:{line:12,column:45},end:{line:14,column:1}},line:12}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function has(prop,obj){cov_15eaf386ho.f[0]++;cov_15eaf386ho.s[0]++;return Object.prototype.hasOwnProperty.call(obj,prop);}));\n\n//# sourceURL=webpack://fun/./src/object/has.js?");

/***/ }),

/***/ "./src/object/hasIn.js":
/*!*****************************!*\
  !*** ./src/object/hasIn.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_26qtoh3iy5=function(){var path='/Volumes/BigOne/github/fun/src/object/hasIn.js',hash='a12f8e967df2f3c968bcc669c392631a394d1042',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/hasIn.js',statementMap:{'0':{start:{line:13,column:2},end:{line:13,column:21}}},fnMap:{'0':{name:'hasIn',decl:{start:{line:12,column:30},end:{line:12,column:35}},loc:{start:{line:12,column:47},end:{line:14,column:1}},line:12}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function hasIn(prop,obj){cov_26qtoh3iy5.f[0]++;cov_26qtoh3iy5.s[0]++;return prop in obj;}));\n\n//# sourceURL=webpack://fun/./src/object/hasIn.js?");

/***/ }),

/***/ "./src/object/is.js":
/*!**************************!*\
  !*** ./src/object/is.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_t0cz9brcu=function(){var path='/Volumes/BigOne/github/fun/src/object/is.js',hash='14589ee4eabc5ca513764a8313abfd3ceb8a7412',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Object'));\n\n//# sourceURL=webpack://fun/./src/object/is.js?");

/***/ }),

/***/ "./src/object/keys.js":
/*!****************************!*\
  !*** ./src/object/keys.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_1ho8efszui=function(){var path='/Volumes/BigOne/github/fun/src/object/keys.js',hash='7a448e8e4f9945d3041bcad86c930136e52f97b0',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/keys.js',statementMap:{'0':{start:{line:12,column:2},end:{line:12,column:32}}},fnMap:{'0':{name:'keys',decl:{start:{line:11,column:30},end:{line:11,column:34}},loc:{start:{line:11,column:38},end:{line:13,column:1}},line:11}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function keys(a){cov_1ho8efszui.f[0]++;cov_1ho8efszui.s[0]++;return Object.keys(Object(a));}));\n\n//# sourceURL=webpack://fun/./src/object/keys.js?");

/***/ }),

/***/ "./src/object/keysIn.js":
/*!******************************!*\
  !*** ./src/object/keysIn.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_3wh6aa0k5=function(){var path='/Volumes/BigOne/github/fun/src/object/keysIn.js',hash='8bfb523a9457b135a8843726114f7b2b3fb15553',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/keysIn.js',statementMap:{'0':{start:{line:12,column:10},end:{line:12,column:12}},'1':{start:{line:14,column:2},end:{line:16,column:3}},'2':{start:{line:15,column:4},end:{line:15,column:14}},'3':{start:{line:18,column:2},end:{line:18,column:11}}},fnMap:{'0':{name:'keys',decl:{start:{line:11,column:30},end:{line:11,column:34}},loc:{start:{line:11,column:38},end:{line:19,column:1}},line:11}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function keys(a){cov_3wh6aa0k5.f[0]++;var r=(cov_3wh6aa0k5.s[0]++,[]);cov_3wh6aa0k5.s[1]++;for(var k in a){cov_3wh6aa0k5.s[2]++;r.push(k);}cov_3wh6aa0k5.s[3]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/object/keysIn.js?");

/***/ }),

/***/ "./src/object/map.js":
/*!***************************!*\
  !*** ./src/object/map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../empty */ \"./src/empty.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys */ \"./src/object/keys.js\");\nvar cov_1tw09ayukm=function(){var path='/Volumes/BigOne/github/fun/src/object/map.js',hash='f041b65cdb3e2d02365027e559025e68cf63cbd5',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/map.js',statementMap:{'0':{start:{line:15,column:10},end:{line:15,column:17}},'1':{start:{line:16,column:10},end:{line:16,column:12}},'2':{start:{line:17,column:10},end:{line:17,column:18}},'3':{start:{line:18,column:10},end:{line:18,column:18}},'4':{start:{line:20,column:2},end:{line:22,column:3}},'5':{start:{line:21,column:4},end:{line:21,column:35}},'6':{start:{line:24,column:2},end:{line:24,column:11}}},fnMap:{'0':{name:'map',decl:{start:{line:14,column:30},end:{line:14,column:33}},loc:{start:{line:14,column:41},end:{line:25,column:1}},line:14}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function map(cb,a){cov_1tw09ayukm.f[0]++;var k=(cov_1tw09ayukm.s[0]++,Object(_keys__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a));var i=(cov_1tw09ayukm.s[1]++,-1);var l=(cov_1tw09ayukm.s[2]++,k.length);var r=(cov_1tw09ayukm.s[3]++,Object(_empty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a));cov_1tw09ayukm.s[4]++;while(++i<l){cov_1tw09ayukm.s[5]++;r[k[i]]=cb(a[k[i]],k[i],a);}cov_1tw09ayukm.s[6]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/object/map.js?");

/***/ }),

/***/ "./src/object/merge.js":
/*!*****************************!*\
  !*** ./src/object/merge.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../identical */ \"./src/identical.js\");\n/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/is */ \"./src/object/is.js\");\n/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../array/is */ \"./src/array/is.js\");\n/* harmony import */ var _array_union__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../array/union */ \"./src/array/union.js\");\nvar cov_2hgd6uikjr=function(){var path='/Volumes/BigOne/github/fun/src/object/merge.js',hash='629270d9274c172bab47e23aaf1011f2ece4d111',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/merge.js',statementMap:{'0':{start:{line:14,column:12},end:{line:39,column:2}},'1':{start:{line:15,column:15},end:{line:15,column:38}},'2':{start:{line:17,column:2},end:{line:19,column:3}},'3':{start:{line:18,column:4},end:{line:18,column:35}},'4':{start:{line:21,column:2},end:{line:36,column:3}},'5':{start:{line:22,column:4},end:{line:24,column:5}},'6':{start:{line:23,column:6},end:{line:23,column:15}},'7':{start:{line:26,column:19},end:{line:26,column:28}},'8':{start:{line:27,column:19},end:{line:27,column:28}},'9':{start:{line:29,column:4},end:{line:35,column:5}},'10':{start:{line:30,column:6},end:{line:30,column:46}},'11':{start:{line:31,column:11},end:{line:35,column:5}},'12':{start:{line:32,column:6},end:{line:32,column:46}},'13':{start:{line:34,column:6},end:{line:34,column:29}},'14':{start:{line:38,column:2},end:{line:38,column:16}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:14,column:18},end:{line:14,column:19}},loc:{start:{line:14,column:40},end:{line:39,column:1}},line:14}},branchMap:{'0':{loc:{start:{line:17,column:2},end:{line:19,column:3}},type:'if',locations:[{start:{line:17,column:2},end:{line:19,column:3}},{start:{line:17,column:2},end:{line:19,column:3}}],line:17},'1':{loc:{start:{line:22,column:4},end:{line:24,column:5}},type:'if',locations:[{start:{line:22,column:4},end:{line:24,column:5}},{start:{line:22,column:4},end:{line:24,column:5}}],line:22},'2':{loc:{start:{line:29,column:4},end:{line:35,column:5}},type:'if',locations:[{start:{line:29,column:4},end:{line:35,column:5}},{start:{line:29,column:4},end:{line:35,column:5}}],line:29},'3':{loc:{start:{line:29,column:8},end:{line:29,column:48}},type:'binary-expr',locations:[{start:{line:29,column:8},end:{line:29,column:26}},{start:{line:29,column:30},end:{line:29,column:48}}],line:29},'4':{loc:{start:{line:31,column:11},end:{line:35,column:5}},type:'if',locations:[{start:{line:31,column:11},end:{line:35,column:5}},{start:{line:31,column:11},end:{line:35,column:5}}],line:31}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0},f:{'0':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var merge=(cov_2hgd6uikjr.s[0]++,Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(objL,objR){cov_2hgd6uikjr.f[0]++;var result=(cov_2hgd6uikjr.s[1]++,Object.assign({},objL));cov_2hgd6uikjr.s[2]++;if(Object(_identical__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(objL,objR)){cov_2hgd6uikjr.b[0][0]++;cov_2hgd6uikjr.s[3]++;return Object.assign({},objL);}else{cov_2hgd6uikjr.b[0][1]++;}cov_2hgd6uikjr.s[4]++;for(var key in objR){cov_2hgd6uikjr.s[5]++;if(!Object.prototype.hasOwnProperty.call(objR,key)){cov_2hgd6uikjr.b[1][0]++;cov_2hgd6uikjr.s[6]++;continue;}else{cov_2hgd6uikjr.b[1][1]++;}var oldValue=(cov_2hgd6uikjr.s[7]++,objR[key]);var newValue=(cov_2hgd6uikjr.s[8]++,objL[key]);cov_2hgd6uikjr.s[9]++;if((cov_2hgd6uikjr.b[3][0]++,Object(_object_is__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(oldValue))&&(cov_2hgd6uikjr.b[3][1]++,Object(_object_is__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newValue))){cov_2hgd6uikjr.b[2][0]++;cov_2hgd6uikjr.s[10]++;result[key]=merge(oldValue,newValue);}else{cov_2hgd6uikjr.b[2][1]++;cov_2hgd6uikjr.s[11]++;if(Object(_array_is__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newValue)){cov_2hgd6uikjr.b[4][0]++;cov_2hgd6uikjr.s[12]++;result[key]=Object(_array_union__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(newValue,oldValue);}else{cov_2hgd6uikjr.b[4][1]++;cov_2hgd6uikjr.s[13]++;result[key]=oldValue;}}}cov_2hgd6uikjr.s[14]++;return result;}));/* harmony default export */ __webpack_exports__[\"default\"] = (merge);\n\n//# sourceURL=webpack://fun/./src/object/merge.js?");

/***/ }),

/***/ "./src/object/omit.js":
/*!****************************!*\
  !*** ./src/object/omit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_19jcpfh1j8=function(){var path='/Volumes/BigOne/github/fun/src/object/omit.js',hash='d9c72ca08f9d902af6fe6a0fdb0e9c22d95004ba',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/omit.js',statementMap:{'0':{start:{line:10,column:15},end:{line:10,column:17}},'1':{start:{line:11,column:2},end:{line:15,column:5}},'2':{start:{line:12,column:4},end:{line:12,column:37}},'3':{start:{line:14,column:4},end:{line:14,column:27}},'4':{start:{line:16,column:2},end:{line:16,column:16}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:9,column:21},end:{line:9,column:22}},loc:{start:{line:9,column:43},end:{line:17,column:1}},line:9},'1':{name:'(anonymous_1)',decl:{start:{line:11,column:26},end:{line:11,column:27}},loc:{start:{line:11,column:41},end:{line:13,column:3}},line:11},'2':{name:'(anonymous_2)',decl:{start:{line:13,column:13},end:{line:13,column:14}},loc:{start:{line:13,column:28},end:{line:15,column:3}},line:13}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0},f:{'0':0,'1':0,'2':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(obj,names){cov_19jcpfh1j8.f[0]++;var result=(cov_19jcpfh1j8.s[0]++,{});cov_19jcpfh1j8.s[1]++;Object.keys(obj).filter(function(key){cov_19jcpfh1j8.f[1]++;cov_19jcpfh1j8.s[2]++;return names.indexOf(key)===-1;}).forEach(function(key){cov_19jcpfh1j8.f[2]++;cov_19jcpfh1j8.s[3]++;result[key]=obj[key];});cov_19jcpfh1j8.s[4]++;return result;}));\n\n//# sourceURL=webpack://fun/./src/object/omit.js?");

/***/ }),

/***/ "./src/object/path.js":
/*!****************************!*\
  !*** ./src/object/path.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_15e15dov93=function(){var path='/Volumes/BigOne/github/fun/src/object/path.js',hash='66fc6e375994a5631141c7ba7f2eac13059eb82d',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/path.js',statementMap:{'0':{start:{line:21,column:12},end:{line:21,column:15}},'1':{start:{line:22,column:12},end:{line:22,column:13}},'2':{start:{line:25,column:2},end:{line:33,column:3}},'3':{start:{line:26,column:4},end:{line:28,column:5}},'4':{start:{line:27,column:6},end:{line:27,column:13}},'5':{start:{line:30,column:4},end:{line:30,column:18}},'6':{start:{line:31,column:4},end:{line:31,column:78}},'7':{start:{line:32,column:4},end:{line:32,column:13}},'8':{start:{line:35,column:2},end:{line:35,column:13}}},fnMap:{'0':{name:'path',decl:{start:{line:20,column:30},end:{line:20,column:34}},loc:{start:{line:20,column:46},end:{line:36,column:1}},line:20}},branchMap:{'0':{loc:{start:{line:26,column:4},end:{line:28,column:5}},type:'if',locations:[{start:{line:26,column:4},end:{line:28,column:5}},{start:{line:26,column:4},end:{line:28,column:5}}],line:26},'1':{loc:{start:{line:31,column:10},end:{line:31,column:77}},type:'cond-expr',locations:[{start:{line:31,column:32},end:{line:31,column:68}},{start:{line:31,column:71},end:{line:31,column:77}}],line:31},'2':{loc:{start:{line:31,column:32},end:{line:31,column:68}},type:'cond-expr',locations:[{start:{line:31,column:40},end:{line:31,column:59}},{start:{line:31,column:62},end:{line:31,column:68}}],line:31}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0},f:{'0':0},b:{'0':[0,0],'1':[0,0],'2':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function path(path,obj){cov_15e15dov93.f[0]++;var val=(cov_15e15dov93.s[0]++,obj);var idx=(cov_15e15dov93.s[1]++,0);var p;cov_15e15dov93.s[2]++;while(idx<path.length){cov_15e15dov93.s[3]++;if(val==null){cov_15e15dov93.b[0][0]++;cov_15e15dov93.s[4]++;return;}else{cov_15e15dov93.b[0][1]++;}cov_15e15dov93.s[5]++;p=path[idx];cov_15e15dov93.s[6]++;val=Number.isInteger(p)?(cov_15e15dov93.b[1][0]++,p<0?(cov_15e15dov93.b[2][0]++,val[val.length+p]):(cov_15e15dov93.b[2][1]++,val[p])):(cov_15e15dov93.b[1][1]++,val[p]);cov_15e15dov93.s[7]++;idx+=1;}cov_15e15dov93.s[8]++;return val;}));\n\n//# sourceURL=webpack://fun/./src/object/path.js?");

/***/ }),

/***/ "./src/object/pick.js":
/*!****************************!*\
  !*** ./src/object/pick.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_2oon332l4b=function(){var path='/Volumes/BigOne/github/fun/src/object/pick.js',hash='a425b73daf5e975ec15e486a0db8e7962c5ac77d',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/pick.js',statementMap:{'0':{start:{line:11,column:10},end:{line:11,column:12}},'1':{start:{line:12,column:10},end:{line:12,column:11}},'2':{start:{line:14,column:2},end:{line:20,column:3}},'3':{start:{line:15,column:4},end:{line:17,column:5}},'4':{start:{line:16,column:6},end:{line:16,column:34}},'5':{start:{line:19,column:4},end:{line:19,column:11}},'6':{start:{line:22,column:2},end:{line:22,column:11}}},fnMap:{'0':{name:'pick',decl:{start:{line:10,column:30},end:{line:10,column:34}},loc:{start:{line:10,column:47},end:{line:23,column:1}},line:10}},branchMap:{'0':{loc:{start:{line:15,column:4},end:{line:17,column:5}},type:'if',locations:[{start:{line:15,column:4},end:{line:17,column:5}},{start:{line:15,column:4},end:{line:17,column:5}}],line:15}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function pick(props,obj){cov_2oon332l4b.f[0]++;var r=(cov_2oon332l4b.s[0]++,{});var i=(cov_2oon332l4b.s[1]++,0);cov_2oon332l4b.s[2]++;while(i<props.length){cov_2oon332l4b.s[3]++;if(props[i]in obj){cov_2oon332l4b.b[0][0]++;cov_2oon332l4b.s[4]++;r[props[i]]=obj[props[i]];}else{cov_2oon332l4b.b[0][1]++;}cov_2oon332l4b.s[5]++;i+=1;}cov_2oon332l4b.s[6]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/object/pick.js?");

/***/ }),

/***/ "./src/object/prop.js":
/*!****************************!*\
  !*** ./src/object/prop.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\n/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ \"./src/object/path.js\");\nvar cov_2i7koad4q6=function(){var path='/Volumes/BigOne/github/fun/src/object/prop.js',hash='9d2b959511abf826630830241569c671ac7c737a',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/prop.js',statementMap:{'0':{start:{line:8,column:2},end:{line:8,column:24}}},fnMap:{'0':{name:'prop',decl:{start:{line:7,column:30},end:{line:7,column:34}},loc:{start:{line:7,column:43},end:{line:9,column:1}},line:7}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function prop(p,obj){cov_2i7koad4q6.f[0]++;cov_2i7koad4q6.s[0]++;return Object(_path__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([p],obj);}));\n\n//# sourceURL=webpack://fun/./src/object/prop.js?");

/***/ }),

/***/ "./src/object/values.js":
/*!******************************!*\
  !*** ./src/object/values.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/curry1 */ \"./src/_private/curry1.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ \"./src/object/keys.js\");\nvar cov_1o08oqsgiz=function(){var path='/Volumes/BigOne/github/fun/src/object/values.js',hash='c8e3b8880e394c22d6cf6edbc5c14f9f414faf81',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/object/values.js',statementMap:{'0':{start:{line:12,column:10},end:{line:12,column:19}},'1':{start:{line:13,column:10},end:{line:13,column:18}},'2':{start:{line:14,column:10},end:{line:14,column:12}},'3':{start:{line:15,column:10},end:{line:15,column:11}},'4':{start:{line:17,column:2},end:{line:20,column:3}},'5':{start:{line:18,column:4},end:{line:18,column:21}},'6':{start:{line:19,column:4},end:{line:19,column:11}},'7':{start:{line:22,column:2},end:{line:22,column:11}}},fnMap:{'0':{name:'values',decl:{start:{line:11,column:31},end:{line:11,column:37}},loc:{start:{line:11,column:43},end:{line:23,column:1}},line:11}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function values(obj){cov_1o08oqsgiz.f[0]++;var k=(cov_1o08oqsgiz.s[0]++,Object(_keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj));var l=(cov_1o08oqsgiz.s[1]++,k.length);var r=(cov_1o08oqsgiz.s[2]++,[]);var i=(cov_1o08oqsgiz.s[3]++,0);cov_1o08oqsgiz.s[4]++;while(i<l){cov_1o08oqsgiz.s[5]++;r[i]=obj[k[i]];cov_1o08oqsgiz.s[6]++;i+=1;}cov_1o08oqsgiz.s[7]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/object/values.js?");

/***/ }),

/***/ "./src/or.js":
/*!*******************!*\
  !*** ./src/or.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1pqb6q6gyk=function(){var path='/Volumes/BigOne/github/fun/src/or.js',hash='6a7076f24e5c518d0059d5d44b451f21561bbadb',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/or.js',statementMap:{'0':{start:{line:7,column:2},end:{line:7,column:16}}},fnMap:{'0':{name:'or',decl:{start:{line:6,column:30},end:{line:6,column:32}},loc:{start:{line:6,column:39},end:{line:8,column:1}},line:6}},branchMap:{'0':{loc:{start:{line:7,column:9},end:{line:7,column:15}},type:'binary-expr',locations:[{start:{line:7,column:9},end:{line:7,column:10}},{start:{line:7,column:14},end:{line:7,column:15}}],line:7}},s:{'0':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function or(x,y){cov_1pqb6q6gyk.f[0]++;cov_1pqb6q6gyk.s[0]++;return(cov_1pqb6q6gyk.b[0][0]++,x)||(cov_1pqb6q6gyk.b[0][1]++,y);}));\n\n//# sourceURL=webpack://fun/./src/or.js?");

/***/ }),

/***/ "./src/reduce.js":
/*!***********************!*\
  !*** ./src/reduce.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/fold */ \"./src/array/fold.js\");\nvar cov_1szp2vglq4=function(){var path='/Volumes/BigOne/github/fun/src/reduce.js',hash='7c089e0d8fcf36981f216b8a68f5a7090f8ec9d7',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/reduce.js',statementMap:{'0':{start:{line:16,column:12},end:{line:16,column:21}},'1':{start:{line:17,column:13},end:{line:17,column:24}},'2':{start:{line:18,column:2},end:{line:18,column:29}}},fnMap:{'0':{name:'reduce',decl:{start:{line:15,column:30},end:{line:15,column:36}},loc:{start:{line:15,column:44},end:{line:19,column:1}},line:15}},branchMap:{},s:{'0':0,'1':0,'2':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function reduce(cb,a){cov_1szp2vglq4.f[0]++;var arr=(cov_1szp2vglq4.s[0]++,a.slice());var init=(cov_1szp2vglq4.s[1]++,arr.shift());cov_1szp2vglq4.s[2]++;return Object(_array_fold__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cb,init,arr);}));\n\n//# sourceURL=webpack://fun/./src/reduce.js?");

/***/ }),

/***/ "./src/set/is.js":
/*!***********************!*\
  !*** ./src/set/is.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_1w748vou4w=function(){var path='/Volumes/BigOne/github/fun/src/set/is.js',hash='6c66e54bd827aae2b7252d0cb4140f9f37c9b79f',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/set/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Set'));\n\n//# sourceURL=webpack://fun/./src/set/is.js?");

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1busbqmum3=function(){var path='/Volumes/BigOne/github/fun/src/sort.js',hash='83e965c731cc29a94ea427d97eac238b07d442f5',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/sort.js',statementMap:{'0':{start:{line:16,column:2},end:{line:16,column:53}}},fnMap:{'0':{name:'sort',decl:{start:{line:15,column:30},end:{line:15,column:34}},loc:{start:{line:15,column:44},end:{line:17,column:1}},line:15}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function sort(comp,a){cov_1busbqmum3.f[0]++;cov_1busbqmum3.s[0]++;return Array.prototype.slice.call(a,0).sort(comp);}));\n\n//# sourceURL=webpack://fun/./src/sort.js?");

/***/ }),

/***/ "./src/string/concat.js":
/*!******************************!*\
  !*** ./src/string/concat.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return concat; });\nvar cov_x3448blak=function(){var path=\"/Volumes/BigOne/github/fun/src/string/concat.js\",hash=\"0e0dd53fe14f74cee171468a3ddf109ac4c5cf19\",Function=function(){}.constructor,global=new Function('return this')(),gcv=\"__coverage__\",coverageData={path:\"/Volumes/BigOne/github/fun/src/string/concat.js\",statementMap:{\"0\":{start:{line:7,column:2},end:{line:7,column:31}}},fnMap:{\"0\":{name:\"concat\",decl:{start:{line:5,column:24},end:{line:5,column:30}},loc:{start:{line:5,column:37},end:{line:8,column:1}},line:5}},branchMap:{},s:{\"0\":0},f:{\"0\":0},b:{},inputSourceMap:null,_coverageSchema:\"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function concat(a,b){cov_x3448blak.f[0]++;cov_x3448blak.s[0]++;return String(a)+String(b);}\n\n//# sourceURL=webpack://fun/./src/string/concat.js?");

/***/ }),

/***/ "./src/string/fold.js":
/*!****************************!*\
  !*** ./src/string/fold.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_1lyqqnroj9=function(){var path='/Volumes/BigOne/github/fun/src/string/fold.js',hash='5c90d5947fef19a0ae3821f0af81299a59fb791b',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/string/fold.js',statementMap:{'0':{start:{line:26,column:10},end:{line:26,column:12}},'1':{start:{line:27,column:10},end:{line:27,column:18}},'2':{start:{line:28,column:10},end:{line:28,column:14}},'3':{start:{line:30,column:2},end:{line:32,column:3}},'4':{start:{line:31,column:4},end:{line:31,column:33}},'5':{start:{line:34,column:2},end:{line:34,column:11}}},fnMap:{'0':{name:'fold',decl:{start:{line:25,column:30},end:{line:25,column:34}},loc:{start:{line:25,column:48},end:{line:35,column:1}},line:25}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function fold(cb,init,a){cov_1lyqqnroj9.f[0]++;var i=(cov_1lyqqnroj9.s[0]++,-1);var l=(cov_1lyqqnroj9.s[1]++,a.length);var r=(cov_1lyqqnroj9.s[2]++,init);cov_1lyqqnroj9.s[3]++;while(++i<l){cov_1lyqqnroj9.s[4]++;r=cb(r,a.charAt(i),i,a);}cov_1lyqqnroj9.s[5]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/string/fold.js?");

/***/ }),

/***/ "./src/string/formatString.js":
/*!************************************!*\
  !*** ./src/string/formatString.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return formatString; });\n/* harmony import */ var _array_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/to */ \"./src/array/to.js\");\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../not */ \"./src/not.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_1eehae53ec=function(){var path='/Volumes/BigOne/github/fun/src/string/formatString.js',hash='b0c31531f3cd0ce98854d2fc15142ccfef52a5b8',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/string/formatString.js',statementMap:{'0':{start:{line:9,column:13},end:{line:9,column:31}},'1':{start:{line:10,column:2},end:{line:10,column:15}},'2':{start:{line:11,column:2},end:{line:13,column:5}},'3':{start:{line:12,column:4},end:{line:12,column:63}}},fnMap:{'0':{name:'formatString',decl:{start:{line:7,column:24},end:{line:7,column:36}},loc:{start:{line:7,column:42},end:{line:14,column:1}},line:7},'1':{name:'(anonymous_1)',decl:{start:{line:11,column:33},end:{line:11,column:34}},loc:{start:{line:11,column:55},end:{line:13,column:3}},line:11}},branchMap:{'0':{loc:{start:{line:12,column:11},end:{line:12,column:62}},type:'cond-expr',locations:[{start:{line:12,column:45},end:{line:12,column:54}},{start:{line:12,column:57},end:{line:12,column:62}}],line:12}},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0,'1':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function formatString(str){cov_1eehae53ec.f[0]++;var args=(cov_1eehae53ec.s[0]++,Object(_array_to__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arguments));cov_1eehae53ec.s[1]++;args.shift();cov_1eehae53ec.s[2]++;return str.replace(/{(\\d+)}/g,function(match,idx){cov_1eehae53ec.f[1]++;cov_1eehae53ec.s[3]++;return Object(_not__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_is__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Undefined',args[idx]))?(cov_1eehae53ec.b[0][0]++,args[idx]):(cov_1eehae53ec.b[0][1]++,match);});}\n\n//# sourceURL=webpack://fun/./src/string/formatString.js?");

/***/ }),

/***/ "./src/string/is.js":
/*!**************************!*\
  !*** ./src/string/is.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_1zmzxpehnc=function(){var path='/Volumes/BigOne/github/fun/src/string/is.js',hash='27c96e6e418a317877ea7958f3a10114b8acbc9d',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/string/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('String'));\n\n//# sourceURL=webpack://fun/./src/string/is.js?");

/***/ }),

/***/ "./src/string/map.js":
/*!***************************!*\
  !*** ./src/string/map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ \"./src/curry.js\");\nvar cov_1qs4zyzqw2=function(){var path='/Volumes/BigOne/github/fun/src/string/map.js',hash='fca97c10062aa5f806b69046dafc1ca9477ffe4f',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/string/map.js',statementMap:{'0':{start:{line:13,column:10},end:{line:13,column:12}},'1':{start:{line:14,column:10},end:{line:14,column:18}},'2':{start:{line:15,column:10},end:{line:15,column:12}},'3':{start:{line:17,column:2},end:{line:19,column:3}},'4':{start:{line:18,column:4},end:{line:18,column:31}},'5':{start:{line:21,column:2},end:{line:21,column:11}}},fnMap:{'0':{name:'map',decl:{start:{line:12,column:30},end:{line:12,column:33}},loc:{start:{line:12,column:41},end:{line:22,column:1}},line:12}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function map(cb,a){cov_1qs4zyzqw2.f[0]++;var i=(cov_1qs4zyzqw2.s[0]++,-1);var l=(cov_1qs4zyzqw2.s[1]++,a.length);var r=(cov_1qs4zyzqw2.s[2]++,'');cov_1qs4zyzqw2.s[3]++;while(++i<l){cov_1qs4zyzqw2.s[4]++;r+=cb(a.charAt(i),i,a);}cov_1qs4zyzqw2.s[5]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/string/map.js?");

/***/ }),

/***/ "./src/truthy.js":
/*!***********************!*\
  !*** ./src/truthy.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exists */ \"./src/exists.js\");\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\nvar cov_1ijtbdo7fv=function(){var path='/Volumes/BigOne/github/fun/src/truthy.js',hash='965094dc0afad8e609ba56c74cd8f6a9982595d4',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/truthy.js',statementMap:{'0':{start:{line:19,column:2},end:{line:19,column:34}}},fnMap:{'0':{name:'truthy',decl:{start:{line:18,column:31},end:{line:18,column:37}},loc:{start:{line:18,column:41},end:{line:20,column:1}},line:18}},branchMap:{'0':{loc:{start:{line:19,column:9},end:{line:19,column:33}},type:'binary-expr',locations:[{start:{line:19,column:9},end:{line:19,column:20}},{start:{line:19,column:24},end:{line:19,column:33}}],line:19}},s:{'0':0},f:{'0':0},b:{'0':[0,0]},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function truthy(x){cov_1ijtbdo7fv.f[0]++;cov_1ijtbdo7fv.s[0]++;return(cov_1ijtbdo7fv.b[0][0]++,x!==false)&&(cov_1ijtbdo7fv.b[0][1]++,Object(_exists__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x));}));\n\n//# sourceURL=webpack://fun/./src/truthy.js?");

/***/ }),

/***/ "./src/type.js":
/*!*********************!*\
  !*** ./src/type.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ \"./src/_private/curry1.js\");\nvar cov_f0ufvu22z=function(){var path='/Volumes/BigOne/github/fun/src/type.js',hash='a19c6797df5991c205c3f8911cbfd9d25bb54302',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/type.js',statementMap:{'0':{start:{line:16,column:2},end:{line:16,column:56}}},fnMap:{'0':{name:'type',decl:{start:{line:15,column:31},end:{line:15,column:35}},loc:{start:{line:15,column:39},end:{line:17,column:1}},line:15}},branchMap:{},s:{'0':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function type(x){cov_f0ufvu22z.f[0]++;cov_f0ufvu22z.s[0]++;return Object.prototype.toString.call(x).slice(8,-1);}));\n\n//# sourceURL=webpack://fun/./src/type.js?");

/***/ }),

/***/ "./src/undefined/is.js":
/*!*****************************!*\
  !*** ./src/undefined/is.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ \"./src/is.js\");\nvar cov_27ed5tcp81=function(){var path='/Volumes/BigOne/github/fun/src/undefined/is.js',hash='e3490b21cf03ab55a22c2ca428746df5c1fea593',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/undefined/is.js',statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('undefined'));\n\n//# sourceURL=webpack://fun/./src/undefined/is.js?");

/***/ }),

/***/ "./src/zip.js":
/*!********************!*\
  !*** ./src/zip.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\n/* harmony import */ var _zipWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipWith */ \"./src/zipWith.js\");\nvar cov_1x1lz27cui=function(){var path='/Volumes/BigOne/github/fun/src/zip.js',hash='bb85d1d316d5ad6883ed7598e946ff74def441ce',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/zip.js',statementMap:{'0':{start:{line:18,column:2},end:{line:20,column:11}},'1':{start:{line:19,column:4},end:{line:19,column:18}}},fnMap:{'0':{name:'zip',decl:{start:{line:17,column:30},end:{line:17,column:33}},loc:{start:{line:17,column:40},end:{line:21,column:1}},line:17},'1':{name:'_zipWith',decl:{start:{line:18,column:26},end:{line:18,column:34}},loc:{start:{line:18,column:41},end:{line:20,column:3}},line:18}},branchMap:{},s:{'0':0,'1':0},f:{'0':0,'1':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function zip(a,b){cov_1x1lz27cui.f[0]++;cov_1x1lz27cui.s[0]++;return Object(_zipWith__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function _zipWith(x,y){cov_1x1lz27cui.f[1]++;cov_1x1lz27cui.s[1]++;return[x,y];},a,b);}));\n\n//# sourceURL=webpack://fun/./src/zip.js?");

/***/ }),

/***/ "./src/zipObj.js":
/*!***********************!*\
  !*** ./src/zipObj.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1zty51mmpg=function(){var path='/Volumes/BigOne/github/fun/src/zipObj.js',hash='e9ac2ee9706b87b66e947bb6faaffa6abe43e0b5',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/zipObj.js',statementMap:{'0':{start:{line:17,column:10},end:{line:17,column:11}},'1':{start:{line:18,column:10},end:{line:18,column:38}},'2':{start:{line:19,column:10},end:{line:19,column:12}},'3':{start:{line:21,column:2},end:{line:24,column:3}},'4':{start:{line:22,column:4},end:{line:22,column:19}},'5':{start:{line:23,column:4},end:{line:23,column:11}},'6':{start:{line:26,column:2},end:{line:26,column:11}}},fnMap:{'0':{name:'zipObj',decl:{start:{line:16,column:30},end:{line:16,column:36}},loc:{start:{line:16,column:43},end:{line:27,column:1}},line:16}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function zipObj(a,b){cov_1zty51mmpg.f[0]++;var i=(cov_1zty51mmpg.s[0]++,0);var l=(cov_1zty51mmpg.s[1]++,Math.min(a.length,b.length));var r=(cov_1zty51mmpg.s[2]++,{});cov_1zty51mmpg.s[3]++;while(i<l){cov_1zty51mmpg.s[4]++;r[a[i]]=b[i];cov_1zty51mmpg.s[5]++;i+=1;}cov_1zty51mmpg.s[6]++;return r;}));\n\n//# sourceURL=webpack://fun/./src/zipObj.js?");

/***/ }),

/***/ "./src/zipWith.js":
/*!************************!*\
  !*** ./src/zipWith.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./src/curry.js\");\nvar cov_1l2684mjq0=function(){var path='/Volumes/BigOne/github/fun/src/zipWith.js',hash='5795251a0e9d56050427fb62ddccf048eab83192',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Volumes/BigOne/github/fun/src/zipWith.js',statementMap:{'0':{start:{line:18,column:12},end:{line:18,column:14}},'1':{start:{line:19,column:12},end:{line:19,column:40}},'2':{start:{line:20,column:10},end:{line:20,column:11}},'3':{start:{line:22,column:2},end:{line:24,column:3}},'4':{start:{line:23,column:4},end:{line:23,column:29}},'5':{start:{line:26,column:2},end:{line:26,column:13}}},fnMap:{'0':{name:'zipWith',decl:{start:{line:17,column:30},end:{line:17,column:37}},loc:{start:{line:17,column:48},end:{line:27,column:1}},line:17}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0},b:{},inputSourceMap:null,_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function zipWith(cb,a,b){cov_1l2684mjq0.f[0]++;var arr=(cov_1l2684mjq0.s[0]++,[]);var len=(cov_1l2684mjq0.s[1]++,Math.min(a.length,b.length));var i=(cov_1l2684mjq0.s[2]++,0);cov_1l2684mjq0.s[3]++;for(i=0;i<len;i++){cov_1l2684mjq0.s[4]++;arr.push(cb(a[i],b[i]));}cov_1l2684mjq0.s[5]++;return arr;}));\n\n//# sourceURL=webpack://fun/./src/zipWith.js?");

/***/ })

/******/ });
});