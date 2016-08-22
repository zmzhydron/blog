'use strict'
import React from "react"
import ReactDom from 'react-dom'
import { Provider } from "react-redux"
import App from './Appconnected.js'
import store from './store.js'

const appContainer = document.getElementById("app");

ReactDom.render(
	<Provider store = {store}>
		<App name={"zhangmingzhi"} />
	</Provider>,
	appContainer);
