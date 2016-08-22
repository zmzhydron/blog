'use strict'
import store from './store.js'
import actions from './action.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from './main.js'
var props = (store) => {
	return {
		todos: store.todos,
		age: 28,
		sex: 'male'
	}
}
var addtodos = (value) => {
	return actions.ADDTODO(value);
}
var actionsProps = (dispatch) => {
	return {
		addtodos: bindActionCreators(addtodos, dispatch)
	}
}
export default connect(props,actionsProps)(App)
