'use strict'

function *gen(one){
	console.log(` let's get started!! `);
	var a = yield one + " fuck";
	console.log("one yield");
	var b = yield a + "  you";
	console.log("two yield");
}
var g = gen("zhangmingzhi");

console.log(g.next());
console.log(g.next());
console.log(g.next());
// g.next('zmz')
// g.next();