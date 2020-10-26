const Warehouse = require('../models/warehouse.model');

exports.create = function (req, res) {

    const newWarehouse = new Warehouse({
        name: req.body.name,
        location: req.body.location,
        products: req.body.products,
        items: req.body.items
    });

    newWarehouse.save(function (err, warehouse) {
        if (err) {
            res.json({success: false, result: [], messages: [err.message]});
        } else {
            res.json({success: true, result: warehouse, messages: []});
        }
    });
};

exports.read = function (req, res) {
    Warehouse.find({},
        function (err, warehouses) {
            if (err) {
                res.json({success: false, result: [], messages: [err.message]});
            } else {
                res.json({success: true, result: warehouses, messages: []});
            }
        }
    )
};

exports.readOne = function (req, res) {
    Warehouse.find({"_id": req.params.id},
        function (err, warehouse) {
            if (err) {
                res.json({success: false, result: [], messages: [err.message]});
            } else {
                res.json({success: true, result: warehouse, messages: []});
            }
        }
    )
};

exports.delete = function (req, res) {
    console.log('req.params:  ', req.params);
    Warehouse.remove({"_id": req.params.id},
        function (err, warehouse) {
            if (err) {
                res.json({success: false, result: [], messages: [err.message]});
            } else {
                res.json({success: true, result: warehouse, messages: []});
            }
        }
    )
};