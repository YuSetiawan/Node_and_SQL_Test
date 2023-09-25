const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const {protect} = require('../middlewares/auth');

router.post('/register', userController.registerUser).post('/login', userController.loginUser).get('/profile', protect, userController.profileUser).post('/refreshtoken', userController.refreshToken);

module.exports = router;
