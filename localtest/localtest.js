'use strict'

function hehe(fn){
	fn.prototype.doyou = function(name){
		console.log(this.action+name)
	} 
}
let bba = {
	gls: function(){
		console.log('benz gls class suv~~')
	}
}
function addDesc(target, name, desc){
	var old = desc.value;
	console.log(old);
	desc.value = function(...arg){
		console.log(" function name : ",name);
		return old.apply(this,arg);
	}
}
@hehe
class Me{
	constructor(){
		this.action = 'fuck you : ';
	}
	@addDesc
	add(a,b){
		return a+b;
	}
}
Object.assign(Me.prototype,bba);
var m = new Me();
m.gls();
m.doyou("zmz");
console.log(m.add(1,1));
