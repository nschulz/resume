var express = require('express');
var router = express.Router();
var HomeDataProvider   = require('../dataProviders/home');
var GlobalDataProvider = require('../dataProviders/global');
var SEODataProvider    = require('../dataProviders/seo');
var ComingSoonDataProvider    = require('../dataProviders/comingsoon');

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
    },
    makeViewModel: function() {
        var models = [];
        for (var arg in arguments) {
            var dp = arguments[arg];
            models.push(dp.getModel());
        }
        return Utils.combine.apply(null, models);
    }
};

/* GET home page. */
router.get('/', function(req, res) {
  res.render('comingsoon', Utils.makeViewModel(GlobalDataProvider, SEODataProvider, ComingSoonDataProvider));
});

module.exports = router;
