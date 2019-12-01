# Bape - A Bathing Ape
Some useful Javascript functions and CSS style to reduce  dumb work.  
Inspired by Lodash.

# Browser Support
Modern browsers and IE 11+

# Installation
`npm i bape --save`

# Example
```js
// client
import random from 'bape/random'

random(0 , 1000) // generate a random integer number between 0 ~ 1000
```

```js
// server
const random = require('bape/random')

random(0 , 1000) // generate a random integer number between 0 ~ 1000
```

# API

## Assertion
* `isObject(input)`
* `isPlainObject(input)`
* `isEmptyObject(input)`
* `isNumber(input)`
* `isJSON(input)`
* `isURL(input)`

## Cookie
* `cookie`
  
## Generate random things
* `random(min = 0, max = 100, floating = 0)`
* `randomString(length = 8)`
* `randomCnString(length = 8)`

## Others
* `isEnter(e)`
* `formatJSON(value, replacer = null, space = 2)`

## Function
* `once(fn)`
* `noop()`
* `debounce(fn, wait, options)`
* `throttle(fn, wait, options)`

## Array
* `remove(arr, item)`

# Style
* `.ape-text-ellipsis` show ... when text is too long
* `.ape-center` use flex layout to align child element center
* `.ape-half-parent-width-square` generate a square that width is half of parent content width
* `.ape-blur-text`
* `.ape-hide` display none
* `.ape-clearfix`

# Dependency
* [js-cookie](https://github.com/js-cookie/js-cookie)
