var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index');
});

router.get('/createuser',(req ,res)=>{
  res.render('createuser');

})

router.get('/login',(req ,res)=>{
  res.render('login');

})


module.exports = router;
