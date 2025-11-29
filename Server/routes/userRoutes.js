import express from 'express'
import { loginUser, registerUser, logoutUser } from '../controllers/userController.js'

const router = express.Router()

router.post('/sign-up', registerUser)
router.post('/sign-in', loginUser)
router.get('/logout', logoutUser)

export default router
