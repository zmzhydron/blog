'use strict'
var R = require('ramda');
var _ = require('lodash/fp');
var S = require('underscore');

var a = [1,2,3,4,5];

var two = function(ary){
	return S.map(ary,function(word){
		return S.first(word,2);
	})
}
var cyur = (num) => (words) =>{
	return S.first(words,num);
}
var alernative = cyur(2);
var two = function(ary){
	return S.map(ary,alernative)
}
console.log(S.first('zhangmingzhi',3));
console.log(two(['zmz','zhangmingzhi']));
var compossse = function(fn){
	var len = fn.length;
	var args =[];
	var slice = Array.prototype.slice;
	var core = function(){	
		args = args.concat(slice.call(arguments));
		if(args.length >= len){
			args = args.splice(0,len);
			return fn.apply(null,args);
		}
		return core;
	}
	return core;
}
var sum = compossse(function(a,b,c){
	return a+b+c;
});
// console.log(sum('z')()()()('m','z'));
var _obj = {};
var a1 = (o) => {
	console.log(o);
	o.name = 'zhangmingzhi';
	return o;
}
var a2 = (o) => {
	console.log(o);
	o.age = '28';
	return o;
}
var a3 = (o) => {
	console.log(o);
	o.skill = 'front end developer';
	return o;
}
var compose = (...fns) => (param) =>{
	return fns.reduce( (a,b) => b(a),param);
}
// var profile =compose(a1,a2,a3)(_obj);
// console.log(profile);