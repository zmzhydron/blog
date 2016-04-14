'use strict';

import dispatch from "./flux-dispatcher.js";
import {EventEmitter} from "events";


var todoJSON = [
	{
		title: "买牛奶",
		compiled: true,
		info: "伊利的"
	},
	{
		title: "给娃娃洗澡",
		compiled: false,
		info: "不要把水流进耳朵"
	},
	{
		title: "工作",
		compiled: false,
		info: "努力"
	},
	{
		title: "学习react",
		compiled: false,
		info: "redux，模块化"
	},
	{
		title: "学习css3",
		compiled: false,
		info: "tranfrom"
	},
	{
		title: "用css做一个人物画像",
		compiled: false,
		info: ""
	},
	{
		title: "学习移动端",
		compiled: false,
		info: "比如react navtive"
	},
	{
		title: "用reactnavtive做一个app",
		compiled: false,
		info: "目前做android的"
	}
];
class Store extends EventEmitter{
	constructor(){
		super();
	}
	check(val){
		var ck = todoJSON[val].compiled;
		console.log(ck);
		todoJSON[val].compiled = !ck;
	}
	deletefn(val){
		todoJSON.splice(val,1);
	}
	update(index,title,info){
		todoJSON[index].title = title;
		todoJSON[index].info = info;
	}
	fire(action,val){
		this.emit(action.type,val);
	}
	register(action,callback){
		this.on(action.type,callback);
	}
	getAllTodos(){
		return todoJSON;
	}
}
var store = new Store();
dispatch.register(function(action){
	switch(action.type){
		case "CHECKTODO":
			store.check(action.val);
			store.fire(action.type)
		break;
		case "DELETETODO":
			store.deletefn(action.val);
			store.fire(action.type);
		break;
		case "UPDATETODO":
			store.update(action.index,action.title,action.info);
			store.fire(action.type);
		break;
	}
});
export default store;