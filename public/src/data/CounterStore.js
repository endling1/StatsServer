import { ReduceStore } from 'flux/utils'
import CounterActionTypes from './CounterActionTypes'
import CounterDispatcher from './CounterDispatcher'

class CounterStore extends ReduceStore {
	constructor() {
		super(CounterDispatcher)
	}

	getInitialState() {
		return []
	}

	reduce(state, action) {
		switch(action.type) {
			case CounterActionTypes.GET_CPU_DATA:
				state = action.data
				return state
			default:
				return state
		}
	}
}

export default new CounterStore()