'use strict';
import React from "react";
import Todo from "./todo";
import Animationss from "react-addons-css-transition-group";
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
		<div className = "todoListCtn">
			<Animationss transitionName="test"  transitionEnterTimeout={2000} transitionLeaveTimeout={3000}>
				{ todolist }
			</Animationss>
		</div>
		)
	}
}