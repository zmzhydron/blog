'use strict'
import React from "react"
import DES from './descorated.js'
const RPT = React.PropTypes;

export default class SS extends React.Component{
	constructor(props){
		super();
	}
	render(){
		return <DES name={"descorated"} />
	}
}