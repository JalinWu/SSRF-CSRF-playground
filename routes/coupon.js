const express = require('express');
const router = express.Router();
const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth');

// var id = 0;
// var point = 100;
// var exchangeList = [];

router.get('/get', ensureAuthenticated, (req, res) => {
    // todo: get coupon from internal
    var coupon = "coupon-test";
    res.send(coupon);
});

router.post('/', ensureAuthenticated, (req, res) => {
    var { coupon } = req.body;
    // todo: post coupon to internal
    var coupon = "coupon-test";
    res.send(coupon);
});




module.exports = router;
