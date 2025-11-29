import mongoose from 'mongoose'
import { User } from './models/userModel.js'
import dotenv from 'dotenv'

dotenv.config()

const testJWT = async () => {
    try {
        // Mock user data
        const user = new User({
            email: 'test@example.com',
            name: 'Test User',
            password: 'password123'
        })

        // Generate JWT
        const token = user.createJWT()
        console.log('Generated Token:', token)

        if (token) {
            console.log('JWT generation successful!')
        } else {
            console.error('JWT generation failed.')
        }

    } catch (error) {
        console.error('Error:', error)
    }
}

testJWT()
