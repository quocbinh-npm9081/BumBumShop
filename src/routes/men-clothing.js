const express = require('express');
const router = express.Router();
const menClothing_Controller = require('../app/controllers/menClothingController');

// router.use('/slug', )
router.use('/', menClothing_Controller.index);
module.exports = router;