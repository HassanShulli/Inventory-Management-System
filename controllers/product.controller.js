const Product = require('../models/product.model');

exports.create = function (req, res) {

    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        type: req.body.type
    });

    newProduct.save(function (err, product) {
        if (err) {
            res.json({success: false, result: [], messages: [err.message]});
        } else {
            res.json({success: true, result: product, messages: []});
        }
    });
};

exports.read = function (req, res) {
    Product.find({},
        function (err, products) {
            if (err) {
                res.json({success: false, result: [], messages: [err.message]});
            } else {
                res.json({success: true, result: products, messages: []});
            }
        }
    )
};

exports.delete = function (req, res) {
    console.log('req.params:  ', req.params);
    Product.remove({"_id": req.params.id},
        function (err, product) {
            if (err) {
                res.json({success: false, result: [], messages: [err.message]});
            } else {
                res.json({success: true, result: product, messages: []});
            }
        }
    )
};