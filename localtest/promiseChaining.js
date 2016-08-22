'use strict'

function zo(callback){
	return new Promise(callback);
}
// new Promise((resolve) =>{

// }).then((val) =>{
// 	console.log(val)
// })

zo((resolve) =>{
	setTimeout(() =>{
		resolve('zhangmingzhi!!!');
	},1000);
}).then((val) =>{
	return zo((resolve) =>{
		setTimeout(() =>{
			resolve(val + "fuck you!!");
		},1500)
	})
}).then((val) =>{
	console.log(val);
})
var a = {
	name: "zmz",
	skill: {
		js: 'good'
	}
}

var b = Object.assign({},a,{name: "zhangmingzhi"});

b.skill.js = 'poor';
console.log(b);
console.log(a);

var fuckyou = () => {
	console.log('guck');
}
fuckyou();