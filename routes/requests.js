const express = require('express');
const router = express.Router();

const requests_controller = require('../controllers/requests_controller');



router.get('/', requests_controller.displayrequests);

module.exports = router;