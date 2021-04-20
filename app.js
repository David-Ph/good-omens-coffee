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

// MONGODB
mongoose.connect('mongodb://localhost:27017/coffees', { useNewUrlParser: true, useUnifiedTopology: true });

// GENERAL SETTING
app.use(express.static('public'));
app.use(express.json());
let id = 1;

///////////////////////////////////
// ROUTES ////////////////////
///////////////////////////////////

app.get('/beans', async (req, resp) =>{
    let beans = await Bean.find();
    resp.send(beans);
});
app.post('/beans', async (req, resp) =>{
    let reqBody = req.body;
    let newBean = new Bean({
        id: id++,
        origin: reqBody.origin,
        roast: reqBody.roast,
        notes: reqBody.notes,
        stocks: reqBody.stocks,
        imageURL: reqBody.imageUrl
    });
    await newBean.save()
    resp.send('Created!');
})

///////////////////////////////////
// PORT SETTING ////////////////////
///////////////////////////////////

const PORT = 3000;
app.listen(PORT, ()=> console.log('Listening to 3000....'));