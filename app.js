const express = require("express");
const morgan = require('morgan');
const app = express();
app.use(morgan('combined'));

const port = 3000;    // for local use
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/inventory");  //for local mongo use
mongoose.connection.on('error', function (err) {
    console.error(err);
    process.exit();
});

// allow-cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    if(req.method === 'OPTIONS'){
        res.writeHead(200);
        res.end()
    }else{
        next();
    }
});


const apiRoute = '/api/v1/';
const itemCtrl = require('./controllers/item.controller');
const productCtrl = require('./controllers/product.controller');
const warehouseCtrl = require('./controllers/warehouse.controller');
// Item routes
app.get(apiRoute + 'item', itemCtrl.read);
app.post(apiRoute + 'item', itemCtrl.create);
app.post(apiRoute + 'item/stock', itemCtrl.stock);
app.post(apiRoute + 'item/unstock', itemCtrl.unstock);
// Product routes
app.get(apiRoute + 'product', productCtrl.read);
app.post(apiRoute + 'product', productCtrl.create);
app.delete(apiRoute + 'product/:id', productCtrl.delete);
// Warehouse routes
app.get(apiRoute + 'warehouse/:id', warehouseCtrl.readOne);
app.get(apiRoute + 'warehouses', warehouseCtrl.read);
app.post(apiRoute + 'warehouse', warehouseCtrl.create);
app.delete(apiRoute + 'warehouse/:id', productCtrl.delete);


// catch 404
app.use(function (req, res) {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

app.listen(port, function () {

    console.log("Server listening on port " + port);

});