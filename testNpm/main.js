'use strict'
import React from "react"
export default class App extends React.Component{
	constructor(){
		super();
	}
	componentWillMount(){
	}
	addTodo(){
		this.props.addtodos({
			type: "ADDTODO",
			value: "zhangmingzhi4947"
		});
	}
	render() {
		console.log(this);
		return <div>
			<h1>{this.props.name}~~~</h1>
			<button onClick={this.addTodo.bind(this)}>addtodo</button>
		</div>
	}
}