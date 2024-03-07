const User = require('../Models/User');
const { createSecretToken } = require("../Utils/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addUser = async (req, res,next) => {
//   console.log(req.body)
//   const { name, email } = req.body;

//   try {
//     const newUser = new User({
//       name,
//       email
//     });

//     const user = await newUser.save();
//     res.json(user);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }

try {
    const { name,email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ name,email, password, username, createdAt });
    const token = createSecretToken(user._id);
    console.log("generate ",token);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

exports.loginUser = async(req,res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password ){
          return res.json({message:'All fields are required'})
        }
        const user = await User.findOne({ email });
        if(!user){
          return res.json({message:'Incorrect password or email' }) 
        }
        const auth = await bcrypt.compare(password,user.password)
        if (!auth) {
          return res.json({message:'Incorrect password or email' }) 
        }
         const token = createSecretToken(user._id);
         res.cookie("token", token, {
           withCredentials: true,
           httpOnly: false,
         });
         res.status(201).json({ message: "User logged in successfully", success: true });
         next()
      } catch (error) {
        console.error(error);
      }
}

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
