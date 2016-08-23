'use strict';
import React from "react";
import Two from './testtwo.js'

const RP = React.propTypes

function Cuk(props){
	return (
		<h1>fuck you {props.name}</h1>
	)
}
// Cuk.propTypes = {
// 	name: RP.string
// }

export default class TestComponent extends React.Component{
	render(){
		var a = <Two className="sjb"> {<Cuk name={'zhangmingzhi'}/>} </Two>;
		return a;
	}
}