const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../utils/isLoggedIn');
const { createPost } = require('../controllers/postControllers');

router.post('/createpost',isLoggedIn,createPost);

module.exports = router;