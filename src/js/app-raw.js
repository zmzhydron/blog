'use strict'

import React from "react";
import ReactDom from "react-dom";
const appHtml = document.getElementById('app');


var ary = [123,5,456,2,123,5,45,3,123,5,456,3456345,234];
let name = 'zhangmingzhi';
var obj = {ary,name}
class App extends React.Component{
	constructor(){
		super();
	}	
	render(){
		var { name,ary:arrays} = this.props.data;
		var aryString = arrays.map((item,index) =>{
			return <p key={index}>{item}</p>;
		})
		console.log(aryString);
		console.log("@@@@@@@@@@");
		return (
			<div>
				<h1>{name}</h1>
				{aryString}
			</div>
		)
	}
}

ReactDom.render(<App data={obj} />,appHtml);