const User = require('../Models/User');
const { createSecretToken } = require("../Utils/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



exports.userVerification = async(req,res) => {
    console.log("call userVerification")
    const token = req.cookies.token
    console.log("token", req.cookies)
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, 'smitdongasmitdongasmitdongasmitdonga', async (err, data) => {
    console.log("data",data)
    if (err) {
        console.log("error verifying token")
     return res.json({ status: false })
    } else {
        console.log("else not error")
      const user = await User.findById(data.id)
      console.log(user)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
}
