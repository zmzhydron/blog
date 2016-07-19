'use strict'
import store from './store.js'
import actions from './action.js'
import { connect } from 'react-redux'
import App from './main.js'
var dispatchActions = (type) => (value) =>{
	store.dispatch(actions[type](value));
}
var props = (store) => {
	return {
		todos: store.todos,
		age: 28,
		sex: 'male',
		addtodos: dispatchActions("ADDTODO")
	}
}
export default connect(props)(App)