'use strict'

function hehe(fn){
	fn.prototype.doyou = function(name){
		console.log(this.action+name)
	} 
}
@hehe
class Me{
	constructor(){
		this.action = 'fuck you : ';
	}
}
var m = new Me();
m.doyou('zmz');