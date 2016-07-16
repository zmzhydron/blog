'use strict'
var R = require('ramda');
var _ = require('lodash/fp');

var a = [1,2,3,4,5];
R.map((item) =>{
	// console.log(item);
},a);
var add = _.curry((a,b,c) => a+b+c);
var add1 = add('a','b');
console.log(add1('b'))
// var add2 = add1('b');
