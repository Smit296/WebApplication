const express = require('express');
const router = express.Router();

// User model
// const User = require('../models/User');
const userController = require('../Controllers/useController');
const authMiddleware = require('../MiddleWare/authMiddleWare');


router.get('/getAllUsers', userController.getAllUsers);
router.post('/registerUser', userController.addUser);
router.post('/loginUser', userController.loginUser);
router.post('/verifyUser', authMiddleware.userVerification);

// @route   POST api/users
// @desc    Add new user
// @access  Public
// router.post('/api/users/registerUser', addUser);
// @route   GET api/users
// @desc    Get all users
// @access  Public
// router.get('/getAllUsers', async (req, res) => {
//   console.log(req.body);
//   try {
//     const users = await User.find();
//     console.log(users);
//     res.json(users);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// @route   POST api/users
// @desc    Add new user
// @access  Public
// router.post('/registerUser', async (req, res) => {
//   const { name, email } = req.body;
//   console.log('register user',req.body.name);
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
// });

module.exports = router;
