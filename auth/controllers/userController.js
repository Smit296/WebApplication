import userModel from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import transporter from "../config/emailConfig.js";

class UserController {
    static userRegistration = async (req, res) => {
        const { name, email, password, password_confirmation, tc } = req.body;

        const user = await userModel.findOne({ email: email });

        if (user) {
            res.send({ 'status': 'failed', 'message': 'user already exists' })
        } else {
            if (name && email && password && password_confirmation && tc) {
                if (password === password_confirmation) {
                    try {
                        const salt = await bcrypt.genSalt(10)
                        const hashpassword = await bcrypt.hash(password, salt)
                        const docs = new userModel({
                            name: name,
                            email: email,
                            password: hashpassword,
                            tc: tc,
                        })
                        await docs.save()

                        const saved_user = await userModel.findOne({ email: email })
                        const token = jwt.sign({ userId: saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
                        res.status(201).send({ "status": "Success", "message": "Registration Successfully", "token": token })

                    } catch (err) {
                        res.send({ "status": "failed", "message": "unable to register" })
                    }

                }
                else {
                    res.send({ 'status': 'failed', 'message': 'password and confirm password does not match' })
                }
            }
            else {
                res.send({ 'status': 'failed', 'message': 'All the fields are required' })
            }
        }

    }


    static userLogin = async (req, res) => {
        try {
            const { email, password } = req.body

            if (email && password) {
                const user = await userModel.findOne({ email: email });
                if (user != null) {
                    const isMatch = await bcrypt.compare(password, user.password)

                    if ((user.email === email) && isMatch) {
                        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
                        res.send({ 'status': 'Success', 'message': 'Login Successfully', 'token': token })
                    }
                    else {
                        console.log('email or password mismatch')
                        res.send({ 'status': 'failed', 'message': 'Email or password is not vallid' })
                    }
                }
                else {
                    res.send({ 'status': 'failed', 'message': 'You are not registered user' })
                }
            }
        }
        catch (err) {
            res.send({ "Status": "failed", "message": "All the fields are required" });
        }
    }

    static changePassword = async (req, res) => {
        const { password, password_confirmation } = req.body;
        if (password && password_confirmation) {
            if (password !== password_confirmation) {
                res.send({ 'status': 'failed', 'message': 'New Password and confirm new password Does not match' })

            }
            else {

                const salt = await bcrypt.genSalt(10)
                const newhashpassword = await bcrypt.hash(password, salt)
                await userModel.findByIdAndUpdate(req.user._id, { $set: { password: newhashpassword } })
                res.send({ 'status': 'success', 'message': 'Password changed Successfully' })
            }
        }
        else {
            res.send({ 'status': 'failed', 'message': 'all the fields are required' });
        }
    }

    static loggeduser = async (req, res) => {
        res.send({ "user": req.user })
    }

    static sendUserPasswordResetEmail = async (req, res) => {
        const { email } = req.body
        if (email) {
            const user = await userModel.findOne({ email: email })
            const secret = user._id + process.env.JWT_SECRET_KEY
            if (user) {
                const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '15m' })

                const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`

                // let info = await transporter.sendMail({
                //     from: process.env.EMAIl_FROM,
                //     to: user.email,
                //     subject: "Password reset link",
                //     html : `<a href=${link}>click here to reset your password</a>`
                // })

                console.log(link)
                res.send({ "status": "success", "message": "Password Reset Email Sent... Please check your email","info":info })
            }
        } else {
            res.send({ "status": "failed", "message": "Email field is required" })
        }
    }

    static userPasswordReset = async (req, res) => {
        const { password, password_confirmation } = req.body
        const { id, token } = req.params

        const user = await userModel.findById(id)
        const new_secret = user._id + process.env.JWT_SECRET_KEY

        try {
            jwt.verify(token, new_secret)

            if (password && password_confirmation) {
                if (password !== password_confirmation) {
                    res.send({ "status": "failed", "message": "Password and confirm password do not match" });
                } else {
                    console.log("Password matched");
                    const salt = await bcrypt.genSalt(10)
                    const newhashpassword = await bcrypt.hash(password, salt)
                    await userModel.findByIdAndUpdate(user._id, { $set: { password: newhashpassword } })
                    res.send({ 'status': 'success', 'message': 'Password reset Successfully' })
                }
            }
            else {
                res.send({ "status": "failed", "message": "All fields are required" });
            }
        }
        catch (err) {
            res.send({ "status": "failed", "message": err.message});
        }
    }
}

export default UserController