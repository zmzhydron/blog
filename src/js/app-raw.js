'use strict'
import React from "react";
import ReactDom from "react-dom";
import { Router, Route, IndexRoute, hashHistory, Link } from "react-router";
import Todo from "./widgets/todo.js";
import AddTodo from "./widgets/addTodo.js";
import Calender from "./widgets/calender.js";
import AD from "./widgets/AD.js";
// import Store from './flux-store.js';
// import Actions from "./flux-actions.js";
import * as Actions from "./redux-actions.js";
import { createStore } from 'redux';
import TodoReducer from './redux-reducer.js';
import { Provider } from "react-redux";

var store = createStore(TodoReducer);
// load css
import css from "./../css/app.scss";
const appHtml = document.getElementById('app');
class App extends React.Component{
	constructor(props){
		super();
		// this.state = Object.assign({},props,{todoJSON: Store.getAllTodos()});
		this.state = store.getState();
	}
	componentWillMount(){
		console.log("###");
		store.subscribe(()=>{
			this.setState({
				todoJSON: store.getState().todoJSON
			})
		})
		// Store.register('CHECKTODO',this.checkCallBack.bind(this));
		// Store.register('DELETETODO',this.deleteCallBack.bind(this));
		// Store.register('UPDATETODO',this.updateCallBack.bind(this));
	}
	componentWillReciveProps(newProps){
		console.log(newProps);
	}
	componentDidMount(){
		console.log(` all my children!! : ${this.props.children} `);
	}
	check(index,state){
		// Actions.CHECKTODO(index);
		store.dispatch(Actions.CHECKTODO(index));
	}
	delete(index){
		// Actions.DELETETODO(index);
		store.dispatch(Actions.DELETETODO(index));
	}
	update(index,data){
		// Actions.UPDATETODO(index,title,info);
		console.log(data);
		store.dispatch(Actions.UPDATETODO(index,data));
	}
	add(data){
		console.log('adding a todo');
		store.dispatch(Actions.ADDTODO(data));
	}
	filterTodo(e){
		store.dispatch(Actions.FILTERTODO(e.target.value));
	}
	// deleteCallBack(){
	// 	// console.log(Store.getAllTodos());
	// 	this.setState({todoJSON: Store.getAllTodos()})
	// }
	// checkCallBack(){
	// 	this.setState({todoJSON: Store.getAllTodos()})
	// }
	// updateCallBack(){
	// 	this.setState({todoJSON: Store.getAllTodos()})
	// }
	render(){
		var {todoJSON:todoJSON} = this.state;
		var functions = {
			check:this.check.bind(this),
			update: this.update.bind(this),
			delete:this.delete.bind(this)
		};
		var name = "zhangmingzhi";
		var todoList = todoJSON.map((item,index) =>{
			return <Todo index = {index} data = {item} functions = {functions} key = {index}/>;
		})
		var child = {
			title: "test child",
			compiled: true,
			info: "this.props.children",
			display:"block"};
		console.log(this);
		var buttonStyle = {
			color: "red",
			fontSize: "36px"
		}
		var ADStyle = Object.assign({},buttonStyle,{color: "green"});
		return (
			<div>
				<h1>{name} 
					<Link to="calender"><button style={buttonStyle}>CALENDER</button></Link> 
					<Link to="AD"><button style={ADStyle}>AD!!</button></Link>
				</h1>
				current router is : { this.props.children }
				<div className = "todofilters">
				<span>todoFilter:</span><input onChange={this.filterTodo.bind(this)} placeholder = "entery your todo here"/>
				</div>
				<AddTodo fun={this.add.bind(this)}><Todo child={child}/></AddTodo>
				{ todoList }


			</div>
		)
	}
}

ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="calender" component={Calender} />
			<Route path="AD" component={AD} />
		</Route>
	</Router>
	,appHtml);
