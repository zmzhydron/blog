'use strict'
import reducer from "./reducer.js"
import { createStore, applyMiddleware} from 'redux'

export default createStore(reducer);