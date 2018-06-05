import { Container } from 'flux/utils'
import AppView from '../views/AppView'

function getState() {
	return {
		cpus: CounterStore.getState(),

		getCpuData: CounterActions.getCpuData
	}
}

export default Container.create(AppView)