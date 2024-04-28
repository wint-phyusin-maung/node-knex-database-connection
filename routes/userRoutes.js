const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const testingController = require('../controllers/testingController')



router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/testing', testingController.testMounting);

module.exports = router