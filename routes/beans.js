const uniqid = require('uniqid');
const Bean = require('../models/beans').Bean;
const express = require('express');
const router = express.Router();


router.get('/', async (req, resp) =>{
    let beans = await Bean.find();
    resp.send(beans);
});

router.post('/', async (req, resp) =>{
    let reqBody = req.body;
    let imgPath;
    if(reqBody.imageUrl){
        imgPath = reqBody.imageUrl;
    }else{
        imgPath = req.file.path.substring(req.file.path.indexOf('\\'), req.file.path.length);
    }
    let newBean = new Bean({
        id: uniqid(),
        origin: reqBody.origin,
        roast: reqBody.roast,
        notes: reqBody.notes,
        stocks: reqBody.stocks,
        imageURL: imgPath
    });
    await newBean.save()
    resp.send('Created!');
})
router.delete('/:id', async (req, resp) =>{
    let id = req.params.id;
    await Bean.deleteOne({id: id});
    resp.send('Deleted!');
})

module.exports = router;