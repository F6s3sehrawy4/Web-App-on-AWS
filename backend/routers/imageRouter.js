// routes/imageRouter.js
const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');


router.post('/imageUpload', imageController.uploadImage);

module.exports = router;