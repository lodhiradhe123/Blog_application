var express = require('express');
var router = express.Router();
const { registerpage, loginpage, logoutpage, updatepage } = require('../controllers/userControllers');
const userschema = require('../models/userschema');
const imageKit = require('../utils/imagekit');
const uploadFile = require('../controllers/imageuploader');


router.post('/register', registerpage);

router.post('/login', loginpage)

router.get('/logout',logoutpage)

router.post('/updateprofile/:id',updatepage)







// router.post('/updateImage/:id',)

module.exports = router;
