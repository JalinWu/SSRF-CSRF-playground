const express = require('express');
const router = express.Router();
const axios = require('axios');
const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth');

// var id = 0;
// var point = 100;
// var exchangeList = [];

// http://localhost:5000/coupon/..%2FDucyrqW8Sd
// router.get('/:coupon', (req, res) => {
//     console.log(req.params.coupon);

//     var coupon = "coupon-test";
//     res.send(coupon);
// });

router.get('/', ensureAuthenticated, (req, res) => {
    // todo: get coupon from internal
    axios.get('http://localhost:5000/internal/coupon/get')
        .then(response => {
            console.log(response);
            // console.log(response.data.url);
            // console.log(response.data.explanation);
        })
        .catch(error => {
            console.log(error);
        });

    var coupon = "coupon-test";
    res.send(coupon);
});

router.post('/:coupon', ensureAuthenticated, (req, res) => {
    var { coupon } = req.params;
    console.log(coupon);
    // todo: post coupon to internal
    // console.log(`http://localhost:5000/internal/coupon/../point`);
    // console.log(`http://localhost:5000/internal/coupon/${coupon}`);
    // todo: post coupon to internal
    var coupon = "coupon-test";
    res.send(coupon);
});




module.exports = router;
