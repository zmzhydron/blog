'use strict'
import React from "react"
import descOne from "./descOne.js"
import descTwo from "./descTwo.js"
@descOne
@descTwo
export default class SS extends React.Component{
	constructor(props){
		super();
	}
	componentWillMount(){
		console.log('componentWillMount~~~~ inner')
	}
	render(){
		return (
			<div>
				<button onClick = {this.props.clicker}>test!!</button>
				this is widget two!! {this.props.name}
			</div>
		)
	}
}