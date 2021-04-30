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


////////////////////////////////////
// SERVER SETTING /////////////////
///////////////////////////////////

// DOTENV
let apiKey = process.env.API_KEY;

// MONGODB
mongoose.connect('mongodb://localhost:27017/coffees', { useNewUrlParser: true, useUnifiedTopology: true });

// GENERAL SETTING
app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');

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