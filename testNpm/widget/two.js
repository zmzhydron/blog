'use strict'
import React from "react"
const RPT = React.PropTypes;
export default class Two extends React.Component{
	constructor(props){
		super();
	}
	render(){
		return (
			<h1>
				this is widget two {this.props.fuckname}!!
			</h1>
		)
	}
}
Two.propTypes = {
	fuckname: RPT.oneOfType([RPT.string,RPT.number])
}