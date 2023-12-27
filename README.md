# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by LHY927 as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @LHY927/lotide`

**Require it:**

`const _ = require('@LHY927/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: Returns whether two arrays are same and log the result.
* `function2(assertEqual)`: Returns whether two value are same and log the result.
* `function3(assertObjectsEqual)`: Returns whether two objects are same and log the result.
* `function4(countLetters)`: Count the number of letters and return as an object.
* `function5(countOnly)`: Count the number of letters within a specific set and return as an object.
* `function6(eqArrays)`: Returns whether two arrays are same.
* `function7(eqObjects)`: Returns whether two objects are same.
* `function8(findKey)`: Finding the key within an object according to the result returned by the callback function.
* `function9(findKeyByValue)`: Finding the key within an object according to the value of it.
* `function10(flatten)`: Flatten multi-dimension array into a one-dimension array.
* `function11(head)`: Return the first variable of an array.
