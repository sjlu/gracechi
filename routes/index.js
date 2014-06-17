var express = require('express');
var router = express.Router();
var fs = require('fs');
var _ = require('lodash');
var async = require('async');

/* GET home page. */
var projects = {
  industry: {
    'AAAD': {
      title: "Alliance Against Autoimmune Disease"
    },
    'CGE': {
      title: "Center for Global Education"
    },
    'CHL': {
      title: 'CHL Fitness'
    },
    'CILS': {
      title: 'PhD Program in Communication, Information and Library Studies'
    },
    'CSR': {
      title: 'Choir Screen Reconstruction'
    },
    'JSP': {
      title: 'Joy Sun Photography'
    },
    'MCD': {
      title: 'MoonChiDesigns'
    },
    'OFT': {
      title: 'Outreach for Taiwan'
    },
    'OL': {
      title: 'Otto Laboratory'
    },
    'RE': {
      title: 'Requirements Engineering'
    },
    'TNKP': {
      title: 'The Nice Kind Project'
    }
  }
};

_.each(projects, function(section, section_name) {
  _.each(section, function(project, project_name) {
    project.path = '/images/' + section_name + '/' + project_name + '/';
  });
});

var words = [
  'who am i? i am the',
  'watercolor and ink drawing',
  'stays up all night reading',
  'behavioral neuroscience researching',
  'newsletter and ad print designing',
  'cosplay modeling',
  'art historical diagramming',
  '85% dark chocolate inhaling',
  'study abroad promoting',
  'board game loving',
  'grumpy',
  'summa cum laude graduate',
  'from new jersey'
];

router.get('/', function(req, res) {
  res.render('maintenance', {
    words: words,
    projects: projects
  });
});

router.get('/homepage', function(req, res) {
  res.render('index', {
    words: words,
    projects: projects
  });
});

module.exports = router;
