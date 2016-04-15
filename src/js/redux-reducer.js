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


function TodoReducer(state = todoJSON,action){
    console.log(action);
    switch (action.type) {
        case "DELETETODO":
            state.splice(action.index,1);
            return state;
        break;
        case "CHECKTODO":
            var ck = state[action.index].compiled;
            return [...state.slice(0,action.index),
            Object.assign({},state[action.index],{compiled:!ck}),
            ...state.slice(action.index + 1)];
        break;
        case "UPDATETODO":
            return [...state.slice(0,action.index),
            Object.assign({},state[action.index],action),
            ...state.slice(action.index + 1)];
        break;
        default:
        return state;
        break;

    }
}
export default combineReducers({
    todoJSON: TodoReducer
})
