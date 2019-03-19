var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/delivery', function (req, res, next) {
    const params = Object.assign(req.query, req.body);
    console.log(params);
    response.status(204).send();
});

router.get('/inbound', function (req, res, next) {
    const params = Object.assign(req.query, req.body);
    console.log(params);
    response.status(204).send();
});

module.exports = router;
