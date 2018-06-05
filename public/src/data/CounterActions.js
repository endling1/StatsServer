import CounterActionTypes from './CounterActionTypes'
import CounterDispatcher from './CounterDispatcher'

const Actions = {
	getCpuData() {
		const req = new XMLHttpRequest()
		req.addEventListener('load', function dispatchAction() {
			CounterDispatcher.dispatch({
				type: CounterActionTypes.GET_CPU_DATA,
				data: JSON.parse(this.responseText)
			})
		})
		req.open('GET', 'http://127.0.0.1:3000/os/cpus')
		req.send()
	}
}

export default Actions