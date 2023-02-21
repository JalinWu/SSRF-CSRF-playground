const express = require('express');
const router = express.Router();
const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth');

var point = 100;
var transferList = [];

router.get('/get', ensureAuthenticated, (req, res) => {
  res.send(JSON.stringify(point));
});

router.get('/transfer', ensureAuthenticated, (req, res) => {
  var { to, pt } = req.query;
  point = point - parseInt(pt);
  transferList.push({
    to,
    pt
  });
  res.send(JSON.stringify(point));
});

router.get('/transferList', (req, res) => {
  res.send(transferList);
});


module.exports = router;
