'use strict'
import React from "react";
import ReactDom from "react-dom";
import { Router, Route, IndexRoute, hashHistory, Link, browserHistory } from "react-router";
import Todos from "./widgets/todos.js";
import AddTodo from "./widgets/addTodo.js";
import Calender from "./widgets/calender.js";
import AD from "./widgets/AD.js";
// import Store from './flux-store.js';
// import Actions from "./flux-actions.js";
import * as Actions from "./redux-actions.js";
import { createStore } from 'redux';
import TodoReducer from './redux-reducer.js';
import { Provider } from "react-redux";

import adlinks from './JSON/test.js';


// load css
import css from "./../css/app.scss";
var store = createStore(TodoReducer);
const appHtml = document.getElementById('app');
console.log(adlinks);
window.onpopstate = function(e){
	// console.log(e);
	console.log(window.history);
	console.log(`@@@@@@@@@@@@@`)
}
class App extends React.Component{
	constructor(props){
		super();
		// this.state = Object.assign({},props,{todoJSON: Store.getAllTodos()});
		this.state = store.getState();
		this.fuckCount = 0;
	}
	componentWillMount(){
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
		console.log("componentWillReciveProps  app-raw",newProps);
	}
	componentDidMount(){
		// console.log(` all my children!! : ${this.props.children} `);
		var ad = this.refs.ad1;
		console.log(this.refs);
		var a = ad.parentNode;
		setTimeout(() =>{
			a.setAttribute('href',"#AD/blowjob?me=dashabi&age=16");
		},1000);
	}
	check(index,state){
		// Actions.CHECKTODO(index);
		store.dispatch(Actions.CHECKTODO(index));
	}
	delete(index,todoObj){
		// Actions.DELETETODO(index);
		store.dispatch(Actions.DELETETODO(index));
		//当删除了一个todo的时候，将其内容隐藏，并强制刷新 @2016-5-2；
		todoObj.isContentActive = false;
		todoObj.forceUpdate();
	}
	update(index,data){
		// Actions.UPDATETODO(index,title,info);
		store.dispatch(Actions.UPDATETODO(index,data));
	}
	add(data){
		console.log('adding a todo');
		store.dispatch(Actions.ADDTODO(data));
	}
	filterTodo(e){
		store.dispatch(Actions.FILTERTODO(e.target.value));
	}
	componentDidUpdate (){
	    console.log('APP componentDidUpdate ');
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
	setsasa(e){
		var history = window.history;
		history.pushState({type: "doggy"},'fuck you','#/AD/shittttt?me=siwazi&age=222222222');
		// var type = e.target.getAttribute('data-id');
		// switch(type){
		// 	case "AD":
		// 		history.pushState({name: "AD"},"","#/" + type);
		// 	break;
		// 	case "calender":
		// 		history.pushState({name: "calender"},"","#/" + type);
		// 	break;
		// }
	}
	replaceState(e){
		// window.history.replaceState({name: "fuck that ass"},"daass!!","#/fuckthatass!!!");

	}
	changeLocation(){
		window.location.href = 'http://localhost:8080/src/page/app.htm#/AD/shittttt?me=siwazi&age=111111111';
	}
	render(){
		var {todoJSON:todoJSON} = this.state;
		var functions = {
			check:this.check.bind(this),
			update: this.update.bind(this),
			delete:this.delete.bind(this)
		};
		var name = "zhangmingzhi";
		var child = {
			title: "test child",
			compiled: true,
			info: "this.props.children",
			display:"block"};
		var buttonStyle = {
			color: "red",
			fontSize: "36px"
		}
		var ADStyle = Object.assign({},buttonStyle,{color: "green"});

		var adLinkbUTTONS = adlinks.adlinks.map((item,index) =>{
			var { like, me, age } = item;
			var temp = "AD/"+like+"?me="+me+"&age="+age;
			var ref = "ad" + index;
			return <Link to={temp} key={index}><button ref={ref} style={ADStyle}>AD!!</button></Link>
		})
		return (
			<div>
				<h1>{name} 
					<Link to="calender"><button data-id='calender' ref='calender' style={buttonStyle}>CALENDER</button></Link> 
					
					<button data-id="AD" onClick={this.setsasa.bind(this)}>pushADState</button>
					{ adLinkbUTTONS }
					<button data-id="calender" onClick={this.setsasa.bind(this)}>pushCalenderState</button>
					<button onClick={this.changeLocation.bind(this)}>changeLocation</button>
					<span>current</span>
				</h1>
				current router is : { this.props.children }
				<div className = "todofilters">
				<span>todoFilter:</span><input onChange={this.filterTodo.bind(this)} placeholder = "entery your todo here"/>
				</div>
				<AddTodo fun={this.add.bind(this)}/>
				<Todos data = { todoJSON } fns = {functions}/>
			</div>
		)
	}
}

ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/calender" component={Calender} />
			<Route path="/AD/:fuck" component={AD} />
		</Route>
	</Router>
	,appHtml);
