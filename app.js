/////////////////////
// REQUIRE PACKAGE //
/////////////////////

require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const Bean = require('./models/beans').Bean;
const beansRouter = require('./routes/beans');
const Order = require('./models/order').Order;
const ordersRouter = require('./routes/orders');


////////////////////////////////////
// SERVER SETTING /////////////////
///////////////////////////////////

// DOTENV
let apiKey = process.env.API_KEY;
let appId = process.env.APP_ID;

// MONGODB
mongoose.connect('mongodb://localhost:27017/coffees', { useNewUrlParser: true, useUnifiedTopology: true });

// GENERAL SETTING
app.use(express.static('public'));
app.use(express.json());

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

///////////////////////////////////
// PORT SETTING ////////////////////
///////////////////////////////////

const PORT = 3000;
app.listen(PORT, ()=> console.log('Listening to 3000....'));