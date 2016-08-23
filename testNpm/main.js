'use strict'
import React from "react"
<<<<<<< HEAD
import One from "./widget/one.js"
import Two from "./widget/two.js"
import Three from "./widget/three.js"
import Four from "./widget/four.js"
import { Router, Route, IndexRoute, hashHistory, Link, browserHistory } from "react-router"
=======
>>>>>>> 118e7088080981d7cd76f05fbd77d74e2dce9dea
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
<<<<<<< HEAD
		// this.setState({
		// 	todoss: Math.random()
		// })
	}
	componentWillReceiveProps(props){
		// this.setState({
		// 	todos: props.todos
		// });
		// this.datas = this.props.todos;
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
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Four}>
					<Route path="/one" component={One}/> 
					<Route path="/two" component={Two}/> 
					<Route path="/three" component={Three}/> 
				</Route>
			</Router>
		)
=======
	}
	render() {
		console.log(this);
		return <div>
			<h1>{this.props.name}~~~</h1>
			<button onClick={this.addTodo.bind(this)}>addtodo</button>
		</div>
>>>>>>> 118e7088080981d7cd76f05fbd77d74e2dce9dea
	}
}