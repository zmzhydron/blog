'use strict'
import React from "react"
import One from "./widget/one.js"
import Two from "./widget/two.js"
import Three from "./widget/three.js"
import Four from "./widget/four.js"
import { Router, Route, IndexRoute, hashHistory, Link, browserHistory } from "react-router"
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
	}
}
