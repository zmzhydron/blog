'use strict'
import { createStore, applyMiddleware} from 'redux'
import TodoReducer from './redux-reducer.js'

/*
	load middleware
*/
var logger = store => next => action =>{
	// console.log('loggerloggerloggerloggerloggerloggerloggerlogge: ',action);
	next(action);
}
var FUCKER = store => next => action =>{
	// console.log('FUCKERFUCKERFUCKERFUCKERFUCKER ',action);
	next(action);
}
var makeMiddleWare = applyMiddleware(logger,FUCKER);
export default createStore(TodoReducer, makeMiddleWare);
