'use strict'

import React from "react";
import ReactDom from "react-dom";
import Todo from "./todo.js";
const appHtml = document.getElementById('app');


var ary = [123,5,456,2,123,5,45,3,123,5,456,34563415,2134];
let name = 'zhangmingzhi';
var obj = {ary,name}
class App extends React.Component{
	constructor(){
		super();
	}
	render(){
		var { name,ary:arrays} = this.props.data;
		var todoList = arrays.map((item,index) =>{
			return <Todo data = {item} key = {index}/>;
		})
		return (
			<div>
				<h1>{name}</h1>
				{ todoList }
			</div>
		)
	}
}

ReactDom.render(<App data={obj} />,appHtml);
