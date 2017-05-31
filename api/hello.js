var express = require('express')
var router = express.Router();


router.use(function (req, res, next) {
  console.log(req.originalUrl)
  next();
});


router.get('/hello.api', function(req, res){
  console.log(456)
  res.end('hello world')
});

module.exports = router
