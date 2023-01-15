var express = require('express');
var router = express.Router();


router.get('/login', function(req, res, next) {
  res.render('login');
});


/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.loggedin) {
    // Output username
    res.send('Welcome back, ' + req.session.username + '!');
  } else {
    // Not logged in
    res.send('Please login to view this page!');
  }
  res.end();
});

module.exports = router;
