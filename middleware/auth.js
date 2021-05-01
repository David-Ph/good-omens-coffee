const passport = require('passport');

function checkAuthentication(req, resp, next){
    if(req.isAuthenticated()){
        next();
    }else{
        resp.redirect('/login');
    }
}

module.exports = checkAuthentication;