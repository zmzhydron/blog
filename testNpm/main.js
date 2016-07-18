'use strict'
import React from "react"
import store from './store.js'
import actions from './action.js'
import { connect } from 'react-redux'
@connect((store) =>{
	var states = store;
	return {
		todos: states.todos,
		age: 28
	}
})
export default class App extends React.Component{
	constructor(){
		super();
	}
	componentWillMount(){
	}
	addTodo(){
		store.dispatch(actions.ADDTODO({
			name: "sjb"
		}))
	}
	render() {
		console.log(this);
		return <div>
			<h1>{this.props.name}</h1>
			<button onClick={this.addTodo.bind(this)}>addtodo</button>
		</div>
	}
}