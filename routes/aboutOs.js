const { Router } = require('express')
const os = require('os')

const router = Router()

router.get('/cpus', (req, res, next) => {
	res.set('Access-Control-Allow-Origin', '*')
	res.json(os.cpus())
})

module.exports = router