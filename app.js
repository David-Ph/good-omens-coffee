/////////////////////
// REQUIRE PACKAGE //
/////////////////////

require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const beansRouter = require('./routes/beans');
const ordersRouter = require('./routes/orders');
const session = require('express-session');
const passport = require('passport');
const User = require('./models/users').User;
const passportLocalMongoose = require('passport-local-mongoose');
const usersRouter = require('./routes/users');
const checkAuth = require('./middleware/auth');

////////////////////////////////////
// SERVER SETTING /////////////////
///////////////////////////////////
// GENERAL SETTING
app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');

// DOTENV
let apiKey = process.env.API_KEY;
let secretSession = process.env.SECRET_SESSION;

// express-session
app.use(session({
    secret: `${secretSession}`,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// MONGODB
mongoose.connect('mongodb://localhost:27017/coffees', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

// passport-local
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// multer setting
let imageStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/img/coffeeBags'),
    filename: (req, file, cb) => cb(null, file.originalname)
})
app.use(multer({storage: imageStorage}).single('imageFile'));

///////////////////////////////////
// ROUTES ////////////////////
///////////////////////////////////

app.use('/beans', beansRouter);
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);

app.get('/admin', checkAuth, (req, resp) =>{
    resp.render('admin');
})
app.get('/getApiKey', (req, resp) => {
    resp.send(apiKey);
})
app.get('/login', (req, resp) =>{
    resp.render('login');
})

///////////////////////////////////
// PORT SETTING ////////////////////
///////////////////////////////////

const PORT = 3000;
app.listen(PORT, ()=> console.log('Listening to 3000....'));