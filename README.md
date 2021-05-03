# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jesselap/lotide`

**Require it:**

`const _ = require('@jesselap/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Access the first value of an array.
* `tail(array)`: Access every element of an array except the head.
* `middle(array)`: Return the middle value of an array. If array is length is even, return the two middle values. If array length is less than 3, return empty array.
* `assertEqual(actual, expected)`: Assert whether two values are equal.
* `eqArrays(array1, array2)`: Assert whether two arrays are equal.
* `assertArraysEqual(array1, array2)`: Assert whether two arrays are equal with appropriate message.
* `countOnly(allItems, itemsToCount)`: Takes in a collection of items and returns counts for a specific subset of those items.
* `eqObjects(object1, object2)`: Asserts whether two objects are equal.
* `assertObjectsEqual(object1, object2)`: Asserts whether two objects are equal with appropriate message.
* `findKey(object, callback)`: Returns the first key for which the callback returns a truthy value. If no key is found it returns undefined.
* `findKeyByValue(object, value)`: Searches for a key on an object where its value matches a given value.
* `flatten(array)`: Flattens a nested array into one array.
* `letterPosition(sentence)`: Returns all the indices in the string where each character is found.
* `map(array, callback)`: Returns a new array based on the results of the callback function.
* `takeUntil(array, callback)`: Returns a slice of the array with elements taken from the beginning.
* `without(source, itemsToRemove)`: Return a new array with only those elements from source that are not present in the itemsToRemove array.
* `countLetters(string)`: Takes in a sting and returns a count of each letter.