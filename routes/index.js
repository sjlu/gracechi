var express = require('express');
var router = express.Router();
var fs = require('fs');
var _ = require('lodash');
var async = require('async');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
