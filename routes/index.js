const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

// SSRF
router.get('/ssrf', ensureAuthenticated, (req, res) =>
  res.render('ssrf', {
    user: req.user
  })
);

// CSRF
router.get('/csrf', ensureAuthenticated, (req, res) =>
  res.render('csrf', {
    user: req.user
  })
);

module.exports = router;
