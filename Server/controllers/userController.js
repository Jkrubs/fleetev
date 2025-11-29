import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt'

export const registerUser = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        if (!email || !name || !password) {
            console.log('Please fill in all the required fields');
            return res.json({ success: false, message: 'Please fill in all the required fields' })
        }

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.json({ success: false, message: 'This user already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({ email, name, password: hashedPassword })
        const token = user.createJWT()
        console.log({ user, token });
        res.json({ user, token })



    } catch (error) {
        console.log(error.message);

    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ success: false, message: "Please fill in all the required fields" })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User not found" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ success: false, message: "Wrong password" })
        }
        const token = user.createJWT()
        res.json({ sucess: true, message: "You are now logged in", token, user })
        console.log("You are now logged in");


    } catch (error) {
        console.log('An error occured while trying to log you in');
        res.json({ success: false, message: 'An error occured while trying to log you in' })
    }
}

export const logoutUser = async (req, res) => {
    res.json({ success: true, message: "Logged out successfully" })
}