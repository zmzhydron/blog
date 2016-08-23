'use strict'
import React from "react"
export default class BB extends React.Component{
	hehe() {
		return this.context.myname
	}
	render(){
		return (
			<div>
				<h1>this is test js </h1>
				context is : {this.hehe()}
			</div>
		)
	}
}
BB.PropTypes = {
	name: React.PropTypes.bool
}
BB.contextTypes = {
	myname: React.PropTypes.string,
	shitname: React.PropTypes.string
}