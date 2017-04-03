var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	next();
});

// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')
	// get the user with that id
	.get(function(req, res) {
    fs.readFile(`/src/json/users/user-${req.params.user_id}.json`, 'utf8', function (err, data) {
      if (err) console.log(err);
      res.json(data);
    });
	});

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Mock Server listens on port ' + port);
