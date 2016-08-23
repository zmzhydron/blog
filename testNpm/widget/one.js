'use strict'
import React from "react"
import Two from './two.js'
import { Router, Route, IndexRoute, hashHistory, Link, Lifecycle,  browserHistory } from "react-router"
const RPT = React.PropTypes;

const Hehe = props =>
		<div>
			<h1 onClick={props.clicker} className="sjb">{props.children}</h1>
		</div>;

Hehe.propTypes = {
	girls: RPT.oneOfType([RPT.string,RPT.number])
}
function InnerHTMLs(){
	var htmls = <div> this is insert htmls</div>;
	return (
		<div> this is insert htmls</div>
	)
}
export default class One extends React.Component{
	constructor(props){
		super();
	}
	render(){

		const PassObj = {
			clicker: (e) =>{
				console.log(e.target)
			},
			girls: 4444
		}
		var Abc = <Two fuckname={11234} />;
		// var N = <Hehe {...PassObj}>{<InnerHTMLs />}</Hehe>;
		var N = <Hehe>fuck you</Hehe>;
		return N;
	}
}