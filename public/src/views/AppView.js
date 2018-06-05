import React from 'react'
import CounterStore from '../data/CounterStore'
import CounterActions from '../data/CounterActions'

class AppView extends React.Component {
	constructor(props) {
		super(props)
	}

	static getStores() {
		return [
			CounterStore
		]
	}

	static calculateState() {
		return {
			cpus: CounterStore.getState(),
			getCpuData: CounterActions.getCpuData
		}
	}

	componentWillMount() {
		this.state.getCpuData()
	}

	render() {
		const { cpus } = this.state
		return (
			<ol>
				{
					cpus.length > 0 ? (
						cpus.map((cpu, index) => (
							<li key={index}>
								<p>model: {cpu.model}</p>
								<p>speed: {cpu.speed}</p>
								<p>times</p>
								<ul>
									<li>user: {cpu.times.user}</li>
									<li>nice: {cpu.times.nice}</li>
									<li>sys: {cpu.times.sys}</li>
									<li>idle: {cpu.times.idle}</li>
									<li>irq: {cpu.times.irq}</li>
								</ul>
							</li>
						))
					) : (
						<p>Loading</p>
					)
				}
			</ol>
		)
	}
}

export default AppView