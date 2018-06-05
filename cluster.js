const cluster = require('cluster')
const os = require('os')
const numberOfCpus = os.cpus().length

if(cluster.isMaster) {
	cluster.on('exit', (worker, code, signal) => {
		console.log(`Worker #${worker.process.pid} died from ${code || signal}`)
		cluster.fork()
	})
	
	for(let i = 1; i <= numberOfCpus; i++) {
		cluster.fork()
	}
} else {
	require('./app')
}