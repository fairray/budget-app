const passport = require('passport');
const passportJwt = require('passport-jwt');
const mongoose = require("mongoose");
const path = require('path');
const rootPath = path.normalize('./../');
const db = require(rootPath +'/model/db');
const config = require( rootPath + 'config');
const User = mongoose.model('User');
const Strategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const opt = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey : config.secretKey
};
module.exports = function() {  
    const strategy = new Strategy(opt, function(payload, done) {
        User.findOne({
            _id: payload.id
        }, function(err, user) {
            if (err) {
                return done(null, false);
            }
            if (user) {
                console.log(user);
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    });
    passport.use(strategy);
    return {
        initialize: function() {
            return passport.initialize();
        }
    };
};