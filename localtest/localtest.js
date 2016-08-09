'use strict'
let regexpTest = function(){
	var a = '123453453425234.23894723874';

	var _a = /(?=(?!\b)(\d{3})+\D|$(?!\b))/g;
	console.log(a.replace(_a,"@"));
	console.log(JSON.stringify.toString())
}
regexpTest();

var path = require('path');

console.log(path.resolve(''));