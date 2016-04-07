'use strict'

import React from "react";
import ReactDom from "react-dom";
import Todo from "./todo.js";
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
			return <p data = {item} key = {index}>{item}</p>;
		})
		var asdf = arrays.map((item,index) =>{
			return <Todo data = {item} key = {index}/>;
		})
		// console.log(asdf);
		console.log("@@@@@2@@@@@1");
		return (
			<div>
				<h1>{name}</h1>
				<Todo data = {'zmz'}/>
				{ asdf }
			</div>
		)
	}
}

ReactDom.render(<App data={obj} />,appHtml);
