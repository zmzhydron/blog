'use strict'
import React from "react"
import ReactDom from 'react-dom'
import { Provider } from "react-redux"
import App from './Appconnected.js'
import store from './store.js'

const appContainer = document.getElementById("app");

// React.withContext({'name': 'ZHANGMINGZHI'}, function () {
//    ReactDom.render(
//    	<Provider store = {store}>
//    		<App />
//    	</Provider>,
//    	appContainer);
// });
ReactDom.render(
	<Provider store = {store}>
		<App />
	</Provider>,
	appContainer);
// React.withContext({'name': 'Jonas'}, function () {
//     // Outputs: "My name is: Jonas"
//     React.render(<A />, document.body);
// });