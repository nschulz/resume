var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('main', {
      page: {title: "nateschulz.com"},
      body: {id: "page_home", cssClasses: "p_home"},
      title: 'page heading'
  });
});

module.exports = router;
