var express = require('express');
var router = express.Router();
var fs = require('fs');
var _ = require('lodash');
var async = require('async');

/* GET home page. */
router.get('/', function(req, res) {
  var words = [
    "the watercolor and ink making",
    "stays up all night reading",
    "behavioral neuroscience researching",
    "newsletter designing",
    "cosplay-models-for-fun",
    "art historical diagramming",
    "summa cum laude recent graduate from new jersey"
  ];

  res.render('index', {words: words});
});

module.exports = router;
