const express = require('express');
const router = express.Router();

//Importing Homepage Controller to the variable
const homeController = require('../controllers/home_controller');




//Setting root as Home Route
router.get('/', homeController.home);

//For users, setting '/users' route and mapping routes/user.js
router.use('/users', require('./users'));

//For Displaying current available requests setting /requests
router.use('/requests', require('./requests'));

// For Debug, using -> console.log("router loaded");

module.exports = router;