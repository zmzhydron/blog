'use strict'

{
	let name = 'zhangmingzhi';
	let age = 27;
	let sex = 'male';
	var o = {
		name,
		age,
		sex
	}
	var ary = [1,2,3,4,5];
	console.log(...ary);
	let {name: n, age: a, sex: s} = o;
	console.log(n,a,s);
}