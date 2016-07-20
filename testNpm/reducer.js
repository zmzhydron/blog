'use strict'
import { combineReducers } from "redux"

const defaultState = [
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
]
var reducerWrapper = (initalstate, fns) => {
	return (state = initalstate, action) =>{
		if(fns[action.type]){
			return fns[action.type](state,action);
		}else{
			return state;
		}
	}
}
var todoReducer = reducerWrapper(defaultState, {
	ADDTODO: (state,action) =>{
		var newState = state.concat([action.value]);
		newState === state;
		return state.concat([action.value]);
	},
	DELETETODO: (state,action) =>{
		return state.slice(0,action.index).concat(state.slice(action.index + 1));
	}
})

export default combineReducers({
	todos: todoReducer
})
