
const mongoose = require('mongoose');

module.exports = mongoose.model('Item', new mongoose.Schema({
        product: {
            type: Schema.Types.ObjectId,
		    ref: 'Product',
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }, {timestamps: true}
));