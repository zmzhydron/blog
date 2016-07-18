'use strict'

var actionWrapper = (...args) =>{
	var type = args.slice(0,1)[0];
	var params = args.slice(1);
	var obj = {
		type,
	}
	return (...argus) => {
		argus.map((item,index) => {
			console.log(obj[params[index]],params[index]);
			obj[params[index]] = item;
		})	
		console.log(obj);
		return obj;
	}
}
var ADDTODO = actionWrapper('ADDTODO','value');
var DELETETODO = actionWrapper('DELETETODO','index');
export default {ADDTODO, DELETETODO};