const tail = require('../tail.js');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];

assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);
