# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by haiyueliu as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @haiyueliu/lotide`

**Require it:**

`const _ = require('@haiyueliu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Returns whether two arrays are same and log the result.
* `assertEqual(actual, expected)`: Returns whether two value are same and log the result.
* `assertObjectsEqual(actual, expected)`: Returns whether two objects are same and log the result.
* `countLetters(text)`: Count the number of letters and return as an object.
* `countOnly(allItems, itemsToCount)`: Count the number of letters within a specific set and return as an object.
* `eqArrays(actual, expected)`: Returns whether two arrays are same.
* `eqObjects(object1, object2)`: Returns whether two objects are same.
* `findKey(object1, callback)`: Finding the key within an object according to the result returned by the callback function.
* `findKeyByValue(object, value)`: Finding the key within an object according to the value of it.
* `flatten(array)`: Flatten multi-dimension array into a one-dimension array.
* `head(array)`: Return the first variable of an array.
* `letterPositions(sentence)`: Flatten multi-dimension array into a one-dimension array.
* `map(array, callback)`: Map an array with the rules defined by the callback function.
* `middle(arr)`: Return the variable in the middle of the array, return two values if the array have an even length.
* `tail(input)`: Return the last variable of the array.
* `takeUntil(array, callback)`: Return an array that took variable from the target array according to the rules set by the callback function.
* `without(source, itemsToRemove)`: Return an array that remove variables which been included in itemsToRemove from the target array.
