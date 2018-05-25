const express = require('express');
var bodyParser = require("body-parser");

const path = require("path");
const fs = require('fs');

var users = require('./routes/users')
const app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post("http://192.168.99.1:3000/login", function(req, res, next) {
    var user = req.body.data;
    var test = req.body.secondParam;
    console.log('User post : ', user)
    console.log('Test post : ', test)

    if(!user.nom) {
        res.status(400);
        res.json({
            error:"Bad data"
        })
    } else {
        db.users.save(user, function(err, savedUser) {
            if(err) {
                res.send(err);
            }
            res.json(savedUser);
        })
    }
})

app.listen(port, function () {
    console.log('App listening on port ' + port);
});