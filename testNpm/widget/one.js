'use strict'
import React from "react"
import Two from './two.js'

const RPT = React.PropTypes;

function Hehe(props){
	return (
		<div>
			<h1 onClick={props.clicker} className="sjb">just one test { props.girls}</h1>
			<div>{props.children}</div>
		</div>
	)
}
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
		var N = <Hehe {...PassObj}>{Abc}</Hehe>;
		console.log(N);
		console.log(Abc)
		return N;
	}
}