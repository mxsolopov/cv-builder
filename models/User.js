import pkg from 'mongoose'
const { Schema, model, Types } = pkg

const schema = new Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
})

const User = model('User', schema)

export default User
