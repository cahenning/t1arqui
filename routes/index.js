var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  /* Register new request */
  var Request = mongoose.model('Request');
  var currentRequest = new Request({
    ipAddress: req.ip,
    timestamp: Date.now()
  });
  currentRequest.save(function (err) {
    if (err) return handleError(err);
    else {
      /* Show 10 last requests */
      Request.
      find({}).
      sort('-timestamp').
      limit(10).
      select('ipAddress timestamp').
      exec(function (err, requests) {
        if (err) return handleError(err);
        else {
          res.render('index', { title: 'T1 - Cristobal Henning', 'requests': requests });
        }
      });
    }
  });
});

module.exports = router;
