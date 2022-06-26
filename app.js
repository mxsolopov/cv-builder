import express from 'express'
import config from 'config'
import mongoose from 'mongoose'

const app = express()

const PORT = config.get('port') || 5000

async function start() {
	try {
		await mongoose.connect(config.get('mongoUri'), {})
		app.listen(PORT, () => {
			console.log(`App has been started on port ${PORT}`)
		})
	} catch (e) {
		console.log('Server Error', e.message)
		process.exit(1)
	}
}

start()
