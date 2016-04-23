'use strict';
import { combineReducers } from "redux";
var todoJSON = [
	{
		title: "买牛奶",
		compiled: true,
		info: "伊利的",
		display:"block"
	},
	{
		title: "给娃娃洗澡",
		compiled: false,
		info: "不要把水流进耳朵",
		display:"block"
	},
	{
		title: "工作",
		compiled: false,
		info: "努力",
		display:"block"
	},
	{
		title: "学习react",
		compiled: false,
		info: "redux，模块化",
		display:"block"
	},
	{
		title: "学习css3",
		compiled: false,
		info: "tranfrom",
		display:"block"
	},
	{
		title: "用css做一个人物画像",
		compiled: false,
		info: "",
		display:"block"
	},
	{
		title: "学习移动端",
		compiled: false,
		info: "比如react navtive",
		display:"block"
	},
	{
		title: "用reactnavtive做一个app",
		compiled: false,
		info: "目前做android的",
		display:"block"
	}
];
function createReducer(initialstate,fns){
	return function(state = initialstate,action){
		if(fns[action.type]){
			return fns[action.type](state,action);
		}else{
			return state;
		}
	}
}
var TodoReducer = createReducer(todoJSON,{
	DELETETODO: (state,action) => {
		state.splice(action.index,1);
		return state;
	},
	CHECKTODO: (state,action) => {
		var ck = state[action.index].compiled;
		return [...state.slice(0,action.index),
		Object.assign({},state[action.index],{compiled:!ck}),
		...state.slice(action.index + 1)];
	},
	UPDATETODO: (state,action) => {
		return [...state.slice(0,action.index),
		Object.assign({},state[action.index],action.data),
		...state.slice(action.index + 1)];
	},
	FILTERTODO: (state,action) =>{
		var key = action.val;
		var filtertodo = state.map((item) =>{
			if(key === ""){
				item.display = 'block';
			}else if(item.title === key || new RegExp(key,"g").test(item.title)){
				item.display = 'block';
			}else{
				item.display = 'none';
			}
			return item;
		});
		console.log(filtertodo);
		return filtertodo;
	},
	ADDTODO: (state,action) => {
		var data = action.data;
		console.log(data);
		state.unshift(data);
		return state;
	}
})
export default combineReducers({
    todoJSON: TodoReducer
})
