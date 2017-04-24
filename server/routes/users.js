var express = require('express');
var router = express.Router();
const path = require('path');
const rootPath = path.normalize('./../');
var config = require(rootPath + 'config');
var jwt = require("jwt-simple");
var passport = require('passport');
var mongoose = require("mongoose");
var User = mongoose.model('User');

/* POST generate token */
router.post('/token', function(req, res, next) {
  if (req.body.name && req.body.password){
    User.findOne({name: req.body.name}, function(err, user){
        if (err){
            res.status(500);
            res.end('error find');
        }
        if (user){
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (!err && isMatch) {
                    var payload = {
                        id: user.id
                    };
                    var token = jwt.encode(payload, config.secretKey);
                    res.json({
                        token: token
                    });
                }else{
                    res.end('password did not match');
                }
            });
        }else{
            res.status(401);
            res.end('user not found');
        }
    });
  }else{
      res.status(401);
      res.end();
  }
});

/* GET users listing. */
router.get('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
  res.json(req.user);
});

/* POST create user */
router.post('/register', function(req, res, next) {
    User.findOne({name:req.body.name}, function(err, user){
        if(err){
            res.status(500);
            res.end();
        }
        if(!user){
            var newUser = new User({
                name: req.body.name,
                password: req.body.password
            })
            newUser.save(function(err, user){
                if (err){
                    res.status(500);
                    res.end();
                }
                if(user){
                    var payload = {
                        id: user.id
                    };
                    var token = jwt.encode(payload, config.secretKey);
                    res.json({                           
                        token: token
                    });
                }
            });
        }else{
            res.status(409);
            res.end();
        }
    })
});

module.exports = router;
