'use strict'

import React from "react";
import ReactDom from "react-dom";
import Todo from "./widgets/todo.js";
import AddTodo from "./widgets/addTodo.js";
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
		return (
			<div>
				<h1>{name}</h1>
				<div className = "todofilters">
				<span>todoFilter:</span><input onChange={this.filterTodo.bind(this)} placeholder = "entery your todo here"/>
				</div>
				<AddTodo fun={this.add.bind(this)}/>
				{ todoList }
			</div>
		)
	}
}

ReactDom.render(<Provider store = {store}><App/></Provider>,appHtml);
