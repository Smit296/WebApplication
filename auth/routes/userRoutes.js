import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js'
import checkUserAuth from '../middlewares/auth_middleware.js';

//Route level middleware: to protect the route

router.use('/loggeduser',checkUserAuth)

//Public route
router.post('/register',UserController.userRegistration)
router.post('/login',UserController.userLogin)
router.post('/sent-user-password-email',UserController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token',UserController.userPasswordReset)

//Private route
router.post('/changepassword',checkUserAuth,UserController.changePassword)
router.get('/loggeduser',UserController.loggeduser)
export default router