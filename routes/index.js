var express = require('express');
var router = express.Router();
var HomeDataProvider = require('../dataProviders/home');
var GlobalDataProvider = require('../dataProviders/global');

var Utils = {
    combine: function() {
        var newObj = {};
        for (var arg in arguments) {
            var obj = arguments[arg];
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    newObj[i] = obj[i];
                }
            }
        }
        return newObj;
    }
};

/* GET home page. */
router.get('/', function(req, res) {
  res.render('main', Utils.combine(GlobalDataProvider.getModel(), HomeDataProvider.getModel()));
});

module.exports = router;
