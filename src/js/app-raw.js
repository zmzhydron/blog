'use strict'

import React from "react";
import ReactDom from "react-dom";
import Todo from "./todo.js";
const appHtml = document.getElementById('app');


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
let name = 'zhangmingzhi';
var obj = {todoJSON,name};
var somepros = {name:'zmz',fontSize:27,address:'chengdu'};
var {name:shabi,...rest} = somepros;

class App extends React.Component{
	constructor(props){
		super();
		this.state = props;
	}
	check(index,state){
		console.log("this is check",index);
		var temp = this.state.data;
		var that = this;
		temp.todoJSON[index].compiled = state;
		this.setState({data:Object.assign(that.state.data,temp)});
	}
	delete(index){
		console.log(this);
		var temp = this.state.data;
		temp.todoJSON.splice(index,1);
		var that = this;

		this.setState({data:Object.assign(that.state.data,temp)});
	}
	changeText(){

	}
	render(){
		var {data,data: {name,todoJSON:todoJSON},...reset} = this.state;
		var functions = {check:this.check.bind(this),delete:this.delete.bind(this),hehe:1234};
		this.data = data;
		console.log(this.state,11);
		var todoList = todoJSON.map((item,index) =>{
			return <Todo index = {index} data = {item} functions = {functions} key = {index}/>;
		})
		return (
			<div>
				<h1 {...reset} >{name}</h1>
				{ todoList }
			</div>
		)
	}
}

ReactDom.render(<App data={obj} {...somepros} />,appHtml);
