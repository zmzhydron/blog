'use strict'

import dispatch from "./flux-dispatcher.js";
import store from "./flux-store.js";

function createActions(actionType,...type){
	var o = {type: actionType}
	return function(){
		type.map((item,index) => {
			o[item] = arguments[index];
		})
		dispatch.dispatch(o);
	}
}
var DELETETODO = createActions('DELETETODO',"val");
var CHECKTODO = createActions('CHECKTODO',"val");
var UPDATETODO = createActions('UPDATETODO',"index","title","info");
var FILTERTODO = createActions('FILTERTODO',"val");

export { DELETETODO, CHECKTODO, UPDATETODO };
