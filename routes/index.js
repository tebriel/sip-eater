var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    console.log(JSON.stringify(req.body, null, 2));
    response = '<?xml version="1.0" encoding="UTF-8"?>' +
               '<Response>' +
               '<Redirect method="POST">https://demo.twilio.com/welcome/voice/</Redirect>' +
               '</Response>'
    res.send(response)
});

module.exports = router;
