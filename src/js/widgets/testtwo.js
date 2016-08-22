'use strict';
import React from "react";

export default class Asdf extends React.Component{
	constructor(props){
		super();

	}
	render(){
		console.log(this.props)
		return (
			<div>
				<h2>testtesttesttesttest</h2>
				{this.props.children}
			</div>
		)
	}
}