var express = require('express');
var router = express.Router();
var User = require('./user');
var Url = require('url');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/getUserInfo', function (req, res, next) {
    var user = new User();
    var params = Url.parse(req.url, true).query;
    if (params.id == '1') {
        user.name = 'F';
        user.city = '中山';
        user.age = '10';
    } else {
        user.name = 'Y';
        user.city = '河源';
        user.age = '10';
    }

    var response = {status: 1, data: user};
    res.send(JSON.stringify(response));
});

module.exports = router;
