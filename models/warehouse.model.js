
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Warehouse', new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        products: [{
            type: Schema.Types.ObjectId,
		    ref: 'Product',
            required: true
        }],
        items: [{
            type: Schema.Types.ObjectId,
		    ref: 'Item',
            required: true
        }]
    }, {timestamps: true}
));