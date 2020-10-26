
const mongoose = require('mongoose');

module.exports = mongoose.model('Product', new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,       
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    }, {timestamps: true}
));