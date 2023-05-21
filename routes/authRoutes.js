import express from 'express';

import { registerController, loginController, testController, forgotPasswordController, updateProfileController, getOrdersController, getOrdersAllController, orderStatusController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js';
//routers object
const router = express.Router();

//routing
//Register || method post
router.post('/register', registerController);

//LOGIN || POST
router.post('/login', loginController);

//Forgot Password || Post
router.post('/forgot-password', forgotPasswordController);

//test Routes
router.get('/test', requireSignIn, isAdmin, testController);

//protected User route auth
router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put('/profile', requireSignIn, updateProfileController);

//orders
router.get('/orders', requireSignIn, getOrdersController);

//all orders
router.get('/all-orders', requireSignIn, isAdmin, getOrdersAllController);

//order status update
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController);

export default router;
