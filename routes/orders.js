const uniqid = require('uniqid');
const Order = require('../models/order').Order;
const express = require('express');
const router = express.Router();

router.get('/', async(req, resp) =>{
    let orders = await Order.find();
    resp.send(orders);
})

router.post('/', async (req, resp) =>{
    let newOrder = new Order({
        id: uniqid(),
        name: req.body.name,
        address: req.body.address,
        orders: req.body.orders,
        total: req.body.total
    });

    await newOrder.save();
    resp.send('Order sent!');
});

router.delete('/:id', async(req, resp) => {
    let id = req.params.id;
    await Order.deleteOne({id: id});
    resp.send('Deleted!');
})


module.exports = router;