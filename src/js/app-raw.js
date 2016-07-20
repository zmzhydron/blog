'use strict'
import React from "react";
import ReactDom from "react-dom"
import { Router, Route, IndexRoute, hashHistory, Link, browserHistory } from "react-router"
import Todos from "./widgets/todos.js"
import AddTodo from "./widgets/addTodo.js"
import Calender from "./widgets/calender/calender.js"
import AD from "./widgets/AD.js"
import * as Actions from "./redux-actions.js"
import store from './redux-store.js'
import TodoReducer from './redux-reducer.js'
import { Provider, connect } from "react-redux"
import { bindActionCreators } from 'redux'
import adlinks from './JSON/test.js'
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
// load css
import css from "./../css/app.scss"
const appHtml = document.getElementById('app');
// console.log(adlinks);
window.onpopstate = function(e){
}
import Animationss from "react-addons-css-transition-group";

var deletetodos = (value) => {
	console.log(value,"  $$$$$$$$$$$$");
	return {"type": "DELETETODO","index": value}
}
@connect((store) =>{
	return {
		todoJSON: store.todoJSON,
		name: "zmz"
	}
},(dispatch) =>{
	console.log(dispatch);
	return {
		deleteTodo: bindActionCreators(deletetodos,dispatch)
	}
})
class App extends React.Component{
	constructor(props){
		super();
	}
	componentWillMount(){
		this.setState({
			names:" fuckZMZ!!",
			classe: "test-enter"
		})
	}
	componentWillReciveProps(newProps){
		console.log("componentWillReciveProps  app-raw",newProps);
	}
	componentDidMount(){
		var ad = this.refs.ad1;
		// console.log(this.refs);
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
		this.props.deleteTodo(index);
		//当删除了一个todo的时候，将其内容隐藏，并强制刷新 @2016-5-2；
		todoObj.isContentActive = false;
		todoObj.forceUpdate();
	}
	update(index,data){
		// Actions.UPDATETODO(index,title,info);
		store.dispatch(Actions.UPDATETODO(index,data));
	}
	add(data){
		var r = store.dispatch(Actions.ADDTODO(data));
		console.log(r);
	}
	filterTodo(e){
		store.dispatch(Actions.FILTERTODO(e.target.value));
	}
	componentDidUpdate (){
	    // console.log('APP componentDidUpdate ');
	}
	setsasa(e){
		var history = window.history;
		history.pushState({type: "doggy"},'fuck you','#/AD/shittttt?me=siwazi&age=222222222');
	}
	changeLocation(){
		window.location.href = 'http://localhost:8080/src/page/app.htm#/AD/shittttt?me=siwazi&age=111111111';
	}
	render(){
		var {todoJSON:todoJSONs} = this.props;
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
		console.log(this);

		// 调试historty的按钮
		// <button data-id="AD" onClick={this.setsasa.bind(this)}>pushADState</button>
		// <button data-id="calender" onClick={this.setsasa.bind(this)}>pushCalenderState</button>
		// <button onClick={this.changeLocation.bind(this)}>changeLocation</button>
		return (
			<div>
				<h1>{name}
					<Link to="calender"><button data-id='calender' ref='calender' style={buttonStyle}>CALENDER</button></Link>
					<button data-id="AD" onClick={this.setsasa.bind(this)}>pushADState</button>
					<button data-id="calender" onClick={this.setsasa.bind(this)}>pushCalenderState</button>
					<button onClick={this.changeLocation.bind(this)}>changeLocation</button>
				</h1>
				<div>
					current router is : { this.props.children }
				</div>
				<div className = "todofilters">
				<span>todoFilter:</span><input onChange={this.filterTodo.bind(this)} placeholder = "entery your todo here"/>
				</div>
				<AddTodo fun={this.add.bind(this)}/>
					<ReactCSSTransitionGroup  transitionName="gogo" transitionEnterTimeout={1500} transitionLeaveTimeout={1300}>
						<Todos data = { todoJSONs } fns = {functions}/>
					</ReactCSSTransitionGroup>
			</div>
		)
	}
}
ReactDom.render(
	<Provider store={store}>
   		<App />
 	</Provider>
	,appHtml);
	// <Router history={hashHistory}>
	// 	<Route path="/" component={App}>
	// 		<Route path="/calender" component={Calender} />
	// 		<Route path="/AD/:fuck" component={AD} />
	// 	</Route>
	// </Router>
