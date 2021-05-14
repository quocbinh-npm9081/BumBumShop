const express = require('express');
const router = express.Router();
const womenClothing_Controller = require('../app/controllers/womenClothingController');

router.use('/:slug', womenClothing_Controller.show);
router.use('/', womenClothing_Controller.index);
module.exports = router;