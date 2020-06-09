'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    // requesting query method
    req.query.method;
    req.query.x, req.query.y;
    if (req.query.method == "add") {
        console.log(req.query.x, '+', req.query.y, '=', parseInt(req.query.x) + parseInt(req.query.y));
    }
    // requesting query x and y variables and subtracting
    else if (req.query.method == "subtract") {
        console.log(req.query.x, '-', req.query.y, '=', req.query.x - req.query.y);
    }
         // requesting query x and y variables and multiply
    else if (req.query.method == "multiply") {
        console.log(req.query.x, '*', req.query.y, '=', req.query.x * req.query.y);
    }
          // requesting query x and y variables and divide
    else if (req.query.method == "divide") {
        console.log(req.query.x, '/', req.query.y, '=', req.query.x / req.query.y);
    }
    else {
        console.log("please enter valid method")
    }





    res.render('index', { title: 'Express' });
});

module.exports = router;
