scrollable-elements
===================

[![Build Status](http://img.shields.io/travis/tsuyoshiwada/scrollable-elements.svg?style=flat-square)](https://travis-ci.org/tsuyoshiwada/scrollable-elements)
[![npm version](https://img.shields.io/npm/v/scrollable-elements.svg?style=flat-square)](http://badge.fury.io/js/scrollable-elements)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/tsuyoshiwada/scrollable-elements/master/LICENSE)

Get scrollable elements in specified selector.  
Work in `IE 9+` and modern browsers.

There are no dependencies on this module.



## Install
Installed from `npm`.

```
$ npm install scrollable-elements
```



## API

### findAll( selectors, direction )
**selectors: String**  
**direction: String("x" | "y") Default("y")**

Get all scrollable elements from in specified selector.  
It returns an empty array if the element is not found.

```javascript
import {findAll} from "scrollable-elements"

const elements = findAll(".scrollable");
console.log(elements); // [Element, Element, ...]
```


### find( selectors, direction )
**selectors: String**  
**direction: String("x" | "y") Default("y")**

Get first found scrollable element in specified selector.  
It returns an undefined if the element is not found.

```javascript
import {find} from "scrollable-elements"

const element = findAll(".scrollable");
console.log(element); // Element
```



## Author
[tsuyoshi wada](https://github.com/tsuyoshiwada/)