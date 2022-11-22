const express = require('express');
const router = express.Router();

//Importing User Controller
const userController = require('../controllers/user_controller');

//Importing request controller for managing users_requests
const userRequests = require('../controllers/requests_controller');




//Default /users route
router.get('/', userController.default);

//Setting /profile route
router.get('/profile', userController.profile);

//Setting /profile/edit route
router.get('/profile/edit', userController.edit);

//setting /user/request route
router.get('/requests', userRequests.manageRequests);

module.exports = router;