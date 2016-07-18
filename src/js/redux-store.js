'use strict'
import { createStore, applyMiddleware} from 'redux'
import TodoReducer from './redux-reducer.js'

/*
	load middleware
*/
var logger = store => next => action =>{
	// console.log('loggerloggerloggerloggerloggerloggerloggerlogge: ',action);
	var result = next(action);
	console.log(result);
	// console.log('next state is : ',store.getState());
	// console.log(store.dispatch(action));
	// return result;
	// next(action);
	// store.dispatch(action);
}
var FUCKER = store => next => action =>{
	console.log('FUCKERFUCKERFUCKERFUCKERFUCKER ',action);
	// var result = next(action);
	next(action);
	// return result;
}
var makeMiddleWare = applyMiddleware(logger,FUCKER);
export default createStore(TodoReducer, makeMiddleWare);
