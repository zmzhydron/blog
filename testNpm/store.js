'use strict'
import reducer from "./reducer.js"
import { createStore, applyMiddleware} from 'redux'

var logger => (state) => (next) => (action){
	console.log(`current state is ${state}`);
	next(action);
}
var middlewares = applyMiddleware(logger)
export default createStore(reducer,middlewares);
