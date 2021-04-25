const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let orderSchema = new Schema({
    id: String,
    name: String,
    address: String,
    orders: [String],
    total: Number
});

let Order = mongoose.model('Order', orderSchema);

module.exports = {Order};