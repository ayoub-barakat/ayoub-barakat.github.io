/**
 * Created by elouai on 23/02/16.
 */
var jwt = require('jwt-simple');
var config = require('./config');

module.exports = function (req, res, next) {
    if (req.headers['x-auth']
        && req.headers['x-auth']!= undefined
        && req.headers['x-auth'] != null
        && req.headers['x-auth'].length != 0  ) {
        req.auth = jwt.decode(req.headers['x-auth'], config.secret);
        next();
    }else{
        next();
    }
}