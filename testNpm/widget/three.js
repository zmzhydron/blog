'use strict'
import React from "react"
import { Router, Route, IndexRoute, hashHistory, Link, Lifecycle,  browserHistory } from "react-router"
import Middle from "./middle.js"
//class Asdf extends React.Component
//React.createClass
export default class Asdf extends React.Component{
	constructor(props){
		super();
		this.state = {
			myname : "zhangmingzhi"
		}
	}
	fuckyou(nextLocation) {
		console.log(nextLocation,"  ~~~~~~~~~~~~~~~~~~");
	  // return 'Your work is not saved! Are you sure you want to leave?'
	  return "true";
	}
	componentWillMount(){
		console.log(this);
	    this.context.router.setRouteLeaveHook(
	        this.props.route,
	        this.fuckyou
	    )
	}
	getChildContext() {
		let { myname } = this.state;
		return {  
			myname: myname,
			shitname: "this is a shitt name"
		}
	}
	hehe(){
		console.log(this.name);
		setTimeout(() =>{
			this.setState({
				myname: "fuck you, you pussy~~;"
			})
		},3000);
	}
	shouldComponentUpdate(newprops, newstate){
		console.log(newstate, this.state);
		// if(newstate.myname === this.state.myname){
		// 	return false;
		// }
		return true;
	}
	render(){
		this.hehe();
		return (
			<div>
				<h1>this is JS 333</h1>
				<Middle />
			</div>
		)
	}
}
Asdf.contextTypes = {
	router: React.PropTypes.object.isRequired
}
Asdf.childContextTypes = {
	myname: React.PropTypes.string,
	shitname: React.PropTypes.string
}
