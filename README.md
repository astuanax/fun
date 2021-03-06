# fun.js
Functional javascript library [Fork on Github](https://github.com/astuanax/fun)

[![Build Status](https://travis-ci.org/astuanax/fun.svg?branch=master)](https://travis-ci.org/astuanax/fun) [![Test Coverage](https://api.codeclimate.com/v1/badges/40e2d49f1fb622319b08/test_coverage)](https://codeclimate.com/github/astuanax/fun/test_coverage) [![Code Climate](https://codeclimate.com/github/astuanax/fun/badges/gpa.svg)](https://codeclimate.com/github/astuanax/fun) ![GitHub file size in bytes](https://img.badgesize.io/astuanax/fun/master/lib/fun.min.js.svg?compression=gzip) 

[Check bundle size on bundlephobia](https://bundlephobia.com/result?p=fun.js@1.0.3)


## Install fun.js

```$ npm install fun.js --save``` 


## Docs

The documentation is done using jsdocs and can be found in the /docs folder or at the url [https://astuanax.github.io/fun/](https://astuanax.github.io/fun/)

## Functional library?

The fun.js is a functional library which supports monads and follows mostly he ramda specifications but tries to keep the bite size down.
The focus is to provide helpful functions for react development with a small footprint. 

## Autocurried ?

Most if not all functions are autocurried, which means they can have any arity and you can still use default parameters in your function parameters.

Neat. 

`````
const abc = curry((a, b, c = [1, 2, 3]) => concat(a, b, c))

const add1 = abc(['tss tss'])
add1(['check']) // ['tss tss', 'check', 1, 2, 3]

`````



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


### Get the difference between 2 dates in seconds

```
const diffInSeconds = compose(toSeconds, diffDate)
const date1 = new Date('1999-12-31')
const date2 = new Date('2000-01-01')
   
diffInSeconds(date1, date2)) === -86400
```

## Other libraries

The fun.js library is used together with some other libraries:

### [funmatrix](https://github.com/astuanax/funmatrix) 

Matrix applicative providing standard matrix operations

### [funml](https://github.com/astuanax/funml)

Machine learning with functional undertones: perceptron, neural network and decision trees.

### [WIP funreact](https://github.com/astuanax/funreact)

WIP React library with helper function
