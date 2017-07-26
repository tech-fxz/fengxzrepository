/**
 * Created by Administrator on 2017/7/25.
 */
var express = require('express');
var router = express.Router();
var Url = require('url');
var fs = require('fs');

router.get('/', function (req, res, next) {
    var path = '../../test/Temporary/';
    var params = Url.parse(req.url, true).query;
    var contentText =  'this is new file';
    fs.writeFile(path + 'text.txt', contentText, function (err) {
        if (err) {
            return console.log(err);
        }
        var response = {status: 1, data: null, msg: 'this file was saved'};
        res.send(JSON.stringify(response));
    });
});

module.exports = router;