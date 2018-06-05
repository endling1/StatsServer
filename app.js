const express = require('express')
const aboutOs = require('./routes/aboutOs')

const app = express()

app.listen(3000, () => 
	console.log(`Process #${process.pid} listening on port 3000`)
)

app.use(express.static('public'))
app.use('/os', aboutOs)