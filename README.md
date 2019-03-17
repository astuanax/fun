# fun.js
Functional javascript library / YARC (Yet Another Ramda Clone)

[![Build Status](https://travis-ci.org/astuanax/fun.svg?branch=master)](https://travis-ci.org/astuanax/fun)  [![Code Climate](https://codeclimate.com/github/astuanax/fun/badges/gpa.svg)](https://codeclimate.com/github/astuanax/fun)  ![GitHub file size in bytes](https://img.shields.io/github/size/astuanax/fun/lib/fun.js.min.js.svg)

## Install fun.js

```$ npm install fun.js --save``` 


## Docs

The documentation is done using jsdocs and can be found in the /docs folder or at the url [https://astuanax.github.io/fun/](https://astuanax.github.io/fun/)

## Functional?

This library is an attempt to build a number of functional items, compatible with Ramda (which works great, though it is a bit heavy).


## Examples

#### Returning the sum of the length of all the arrays in an array

````
const lengthDeep = compose(sum, map(x => x.length))
const lengthDeep2 = fold((total, xs) => total + xs.length, 0)
    
const mapReduce = curry((m, r) => (x, y) => r(x, m(y)))

const deepLength = xs => fold(mapReduce(x => x.length, add), 0, xs)

lengthDeep([[1], [2, 3], [4, 5, 6]]) === 6

````

#### Adds a number to al values of an object

```
  const mapReduce = curry((m, r) => (x, y) => r(x, m(y)))

  const omap = curry((f, o) => fold(mapReduce(k => ({ [k]: f(o[k]) }), Object.assign), {}, keys(o)))
  const omapAdd10 = omap(add(10))
  omapAdd10({ a: 1, b: 2, c: 3 })) == { 'a': 11, 'b': 12, 'c': 13 }

```


###

```
const diffInSeconds = compose(toSeconds, diffDate)
const date1 = new Date('1999-12-31')
const date2 = new Date('2000-01-01')
   
diffInSeconds(date1, date2)) === -86400
```


