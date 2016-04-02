'use strict';

{
	var _console;

	var name = 'zhangmingzhi';
	var age = 27;
	var sex = 'male';
	var o = {
		name: name,
		age: age,
		sex: sex
	};
	var ary = [1, 2, 3, 4, 5];
	(_console = console).log.apply(_console, ary);
	var n = o.name;
	var a = o.age;
	var s = o.sex;

	console.log(n, a, s);
}
