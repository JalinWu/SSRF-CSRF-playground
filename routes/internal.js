const express = require('express');
const router = express.Router();
const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth');

// var id = 0;
// var point = 100;
var exchangeList = [];

router.get('/get', ensureAuthenticated, (req, res) => {
  res.send(JSON.stringify(point));
});




module.exports = router;
