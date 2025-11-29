import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'


const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: true })

userSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id, name: this.name }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

export const User = mongoose.model('User', userSchema)