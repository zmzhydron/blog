'use strict'

import dispatch from "./flux-dispatcher.js";
import store from "./flux-store.js";

export default {
	DELETETODO: (val) => {
		dispatch.dispatch({
			type: 'DELETETODO',
			val
		})
	},
	CHECKTODO: (val) => {
		dispatch.dispatch({
			type: 'CHECKTODO',
			val
		})
	},
	UPDATETODO: (index,title,info) => {
		dispatch.dispatch({
			type: 'UPDATETODO',
			index,
			title,
			info
		})
	}
}