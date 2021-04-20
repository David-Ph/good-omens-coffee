/////////////////////
// REQUIRE PACKAGE //
/////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Bean = require('./models/beans').Bean;

////////////////////////////////////
// SERVER SETTING /////////////////
///////////////////////////////////

mongoose.connect('mongodb://localhost:27017/coffees', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.static('public'));

let bean1 = new Bean({
    id: '5',
    origin: 'Bali Kintamani',
    roast: 'Light',
    notes: 'Starfruit',
    stocks: 4,
    imageURL: 'balikintamani.jpg'
});
bean1.save();

///////////////////////////////////
// ROUTES ////////////////////
///////////////////////////////////

app.get('/beans', async (req, resp) =>{
    let beans = await Bean.find();
    resp.send(beans);
});

///////////////////////////////////
// PORT SETTING ////////////////////
///////////////////////////////////

const PORT = 3000;
app.listen(PORT, ()=> console.log('Listening to 3000....'));