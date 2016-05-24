'use strict';
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/', function(req, res) {
    try {

        console.log('parsed cookies: ', req.cookies);
        console.log('raw cookies: ', req.headers.cookie);

    } catch (err) {
        console.log(err.stack);
        res.status(500).send(err.message);
    }
});

app.listen(3003);
