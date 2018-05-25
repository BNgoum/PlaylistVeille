var express = require("express")
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs("mongodb://root:root@ds111420.mlab.com:11420/playlistveille", ["User"]);

router.get("/users", function(req, res, next) {
    db.User.find(function(err, users) {
        if(err) {
            res.send(err)
        }
        res.json(users)
    })
})

router.post("/", function(req, res, next) {
    var user = req.body.data;
    console.log('User post : ', user)

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

module.exports = router;