'use strict'
import React from "react"
import Test from "./testPropTypes.js"
export default class CC extends React.Component{
	shouldComponentUpdate(){
		return true;
	}
	render(){
		return (
			<div>
				<h1>this is Middle </h1>
					<Test />
			</div>
		)
	}
}
