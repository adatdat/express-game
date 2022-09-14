var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  data =  {
    name:req.query.name,
    phonenumber:req.query.phonenumber
  }
  console.log(data);
  res.send(data);
});

module.exports = router;
