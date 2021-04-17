/////////////////////
// REQUIRE PACKAGE //
/////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');

////////////////////////////////////
// SERVER SETTING /////////////////
///////////////////////////////////

mongoose.connect('mongodb://localhost:27017/coffees', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static('public'));


///////////////////////////////////
// PORT SETTING ////////////////////
///////////////////////////////////

const PORT = 3000;
app.listen(PORT, ()=> console.log('Listening to 3000....'));