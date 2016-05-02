'use strict';
import React from "react";
import Todo from "./todo";

export default class Todos extends React.Component{
	constructor(){
		super();
	}
	render(){
		var { data: todoJSON} = this.props;
		var {fns} = this.props;
		var todolist = todoJSON.map((item,index) =>{
			return <Todo index = {index} functions = {fns} data = {item} key = {index}/>;
		})
		return (
			<div className = "todoListCtn">{ todolist }</div>
		)
	}
}