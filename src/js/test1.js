'use strict'

{
	var o = {
		asd:[
			{name:"zhangmingzhi"},
			{name:"shabi"}
		]
	}
	var b = o;
	b.asd[0].name = 'zmz';
	var oo = Object.assign(o.asd,[{name:" loop"}]);
	console.log(oo);
}