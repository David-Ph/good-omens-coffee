const User = require('../models/users').User;
const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


router.post('/register', (req, resp) =>{
    
    User.register({email: req.body.email}, req.body.password, (err, user) =>{
        if(err){
            console.log(err);
            resp.redirect('/login');
        }else{
            passport.authenticate('local')(req, resp, () => {
                resp.send({
                    redirectURL: '/admin'
                });
            })
        }
    });
});

router.post('/login', (req, resp) =>{
    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    });

    req.login(newUser, (err) => {
        if(err){
            console.log(err);
        }else{
            passport.authenticate('local')(req, resp, () => {
                resp.send({
                    redirectURL: '/admin'
                });
            })
        }
    })
});

router.get('/logout', (req, resp) =>{
    req.logout();
    resp.redirect('/');
})

module.exports = router;