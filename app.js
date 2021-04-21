/////////////////////
// REQUIRE PACKAGE //
/////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Bean = require('./models/beans').Bean;
const multer = require('multer');

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
    let imgPath;
    if(reqBody.imageURL){
        imgPath = reqBody.imageURL;
    }else{
        imgPath = req.file.path.substring(req.file.path.indexOf('\\'), req.file.path.length);
    }
    let newBean = new Bean({
        id: id++,
        origin: reqBody.origin,
        roast: reqBody.roast,
        notes: reqBody.notes,
        stocks: reqBody.stocks,
        imageURL: imgPath
    });
    await newBean.save()
    resp.send('Created!');
})

///////////////////////////////////
// PORT SETTING ////////////////////
///////////////////////////////////

const PORT = 3000;
app.listen(PORT, ()=> console.log('Listening to 3000....'));