const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let beanSchema = new Schema({
    id: String,
    origin: String,
    roast: String,
    notes: String,
    price: Number,
    imageURL: String
});

let Bean = mongoose.model('Bean', beanSchema);

module.exports = {Bean};