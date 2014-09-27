var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { page: {title: "nateschulz.com"}, title: 'nateschulz.com' });
});

module.exports = router;
