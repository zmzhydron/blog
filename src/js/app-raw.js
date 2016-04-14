'use strict'

import React from "react";
import ReactDom from "react-dom";
import Todo from "./todo.js";
import Store from './flux-store.js';
import Actions from "./flux-actions.js";

const appHtml = document.getElementById('app');
let name = 'zhangmingzhi';
var obj = {name};
var somepros = {name:'zmz',fontSize:27,address:'chengdu'};
var {name:shabi,...rest} = somepros;

class App extends React.Component{
	constructor(props){
		super();
		this.state = Object.assign({},props,{todoJSON: Store.getAllTodos()});
		// this.state = props;
	}
	componentWillMount(){
		// this.setState({todoJSON:Store.getAllTodos()})
		Store.register('CHECKTODO',this.checkCallBack.bind(this));
		Store.register('DELETETODO',this.deleteCallBack.bind(this));
		Store.register('DELETETODO',this.deleteCallBack.bind(this));
	}
	componentDidMount(){

	}
	check(index,state){
		Actions.CHECKTODO(index);
	}
	delete(index){
		Actions.DELETETODO(index);
	}
	deleteCallBack(){
		this.setState({todoJSON: Store.getAllTodos()})
	}
	checkCallBack(){
		this.setState({todoJSON: Store.getAllTodos()})
	}
	updateCallBack(){
		this.setState({todoJSON: Store.getAllTodos()})
	}
	update(index,title,info){
		Actions.UPDATETODO(index,title,info);
	}
	render(){
		var {data,todoJSON:todoJSON,data: {name},...reset} = this.state;
		var functions = {
			check:this.check.bind(this),
			update: this.update.bind(this),
			delete:this.delete.bind(this)
		};
		this.data = data;
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
