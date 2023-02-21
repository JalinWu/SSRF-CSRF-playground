const express = require('express');
const router = express.Router();
const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth');

var point = 100;
var transferList = [];

router.get('/get', ensureAuthenticated, (req, res) => {
  res.send(JSON.stringify(point));
});

router.get('/transfer/:to/:pt', ensureAuthenticated, (req, res) => {
  var { to, pt } = req.params;
  point = point - parseInt(req.params.pt);
  transferList.push({
    to,
    pt
  });
  res.send(JSON.stringify(point));
});


module.exports = router;
