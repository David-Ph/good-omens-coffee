/////////////////////
// REQUIRE PACKAGE //
/////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const Bean = require('./models/beans').Bean;
const beansRouter = require('./routes/beans');


////////////////////////////////////
// SERVER SETTING /////////////////
///////////////////////////////////

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

///////////////////////////////////
// PORT SETTING ////////////////////
///////////////////////////////////

const PORT = 3000;
app.listen(PORT, ()=> console.log('Listening to 3000....'));