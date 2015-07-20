var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    console.log(JSON.stringify(req.body, null, 2));
    res.send('Accepted')
});

module.exports = router;
