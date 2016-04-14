'use strict'

import dispatch from "./flux-dispatcher.js";
import store from "./flux-store.js";

var asdf = {}
function createActions(actionName,...type){
	var o = {};
	o.type = actionName;
	for(var s = 0;s<type.length;s++){
		o[type[s]] = type[s];
	}
	console.log(o);
	asdf[actionName] = function(...type){
		dispatch.dispatch(o);
	}
}
createActions('FUCKYOU',"bb","cc","dd");
createActions('SUCKYOUDICK',"CVB","DFG","RE");
for(var s in asdf){
	// console.log(asdf[s].toString());
}
export default {
	DELETETODO: (val) => {
		dispatch.dispatch({
			type: 'DELETETODO',
			val
		})
	},
	CHECKTODO: (val) => {
		dispatch.dispatch({
			type: 'CHECKTODO',
			val
		})
	},
	UPDATETODO: (index,title,info) => {
		dispatch.dispatch({
			type: 'UPDATETODO',
			index,
			title,
			info
		})
	}
}