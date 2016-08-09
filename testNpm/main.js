'use strict'
import React from "react"
import Test from "./widget/one.js"
export default class App extends React.Component{
	constructor(props){
		super();
		this.state = {
			todos: props.todos
		};
		this.datas = props.todos;
	}
	componentWillMount(){

	}
	componentDidMount(){

	}
	addTodo(){
		this.props.addtodos({
			type: "ADDTODO",
			value: "zhangmingzhi4947"
		});
		// this.setState({
		// 	todoss: Math.random()
		// })
	}
	componentWillReceiveProps(props){
		this.setState({
			todos: props.todos
		});
		this.datas = this.props.todos;
	}
	shouldComponentUpdate(props,state){
		return true;
	}
	componentWillUpdate(a,b){
	}
	renders(){
		var r = this.datas.map( item => item.toString());
		this.datas = [];
		return r;
	}
	render() {
		return <div>
			<h1>{this.props.name}~~~</h1>
			<p>{this.renders(this.datas)}</p>
			<button onClick={this.addTodo.bind(this)}>addtodo</button>
			<Test />
		</div>
	}
}
