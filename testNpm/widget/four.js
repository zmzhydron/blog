'use strict'
import React from "react"
import { Router, Route, IndexRoute, hashHistory, Link, Lifecycle,  browserHistory } from "react-router"

export default React.createClass({
	componentDidMount(){
		// console.log(this.props);
		// context.router.setRouteLeaveHook(
		// )
	},
	render(){
		return (
			<div>
				<Link to="/one"> one</Link>
				<Link to="/two"> two</Link>
				<Link to="/three"> three</Link>
				<h1>this is JS FOUR</h1>
				{this.props.children}
			</div>
		)
	}
})