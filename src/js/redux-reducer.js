'use strict';
import { combineReducers } from "redux";
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


export default function TodoReducer(state = {todoJSON: todoJSON},action){
    console.log(action);
    switch (action.type) {
        case "DELETETODO":
            state.todoJSON.splice(action.index,1);
            console.log(state);
            return state;
        break;
        case "CHECKTODO":
            var ck = state.todoJSON[action.index].compiled;
            return Object.assign({},state,{todoJSON: [...state.todoJSON.slice(0,action.index),
            Object.assign({},state.todoJSON[action.index],{compiled:!ck}),
            ...state.todoJSON.slice(action.index + 1)]});
        break;
        case "UPDATETODO":
            return Object.assign({},state,{todoJSON: [...state.todoJSON.slice(0,action.index),
            Object.assign({},state.todoJSON[action.index],action),
            ...state.todoJSON.slice(action.index + 1)]});
        break;
        default:
        return state;
        break;

    }
}
