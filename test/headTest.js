const head = require('../head.js');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(head(words), words[0]);