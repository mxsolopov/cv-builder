import express from 'express'
import config from 'config'
import mongoose from 'mongoose'
import userRouter from './routes/userRouter.js'

const app = express()

app.use('/api/user', userRouter)

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
