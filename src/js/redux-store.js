'use strict';
import { createStore } from 'redux';
import TodoReducer from './redux-reducers.js';

export default createStore(TodoReducer);
