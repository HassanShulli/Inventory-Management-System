const Item = require('../models/item.model');

exports.create = function (req, res) {

    const newItem = new Item({
        product: req.body.product,
        amount: req.body.amount
    });

    newItem.save(function (err, item) {
        if (err) {
            res.json({success: false, result: [], messages: [err.message]});
        } else {
            res.json({success: true, result: item, messages: []});
        }
    });
};

exports.read = function (req, res) {
    Item.find({},
        function (err, items) {
            if (err) {
                res.json({success: false, result: [], messages: [err.message]});
            } else {
                res.json({success: true, result: items, messages: []});
            }
        }
    )
};
