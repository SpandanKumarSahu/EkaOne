const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var url = require('url');

var stock = '150'
var sensor = '5.0'

var Issued_Tenders = []
var Vendor_Tenders = []
var ApprovedVendor_Tenders = []

var updateStock = function(req, res){
    stock = req.query.stock;
    res.json({stock: stock});
};

var updateSensor = function(req, res){
    sensor = req.query.sensor;
    res.json({sensor: sensor});
};

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/pages/login.html')))
    .get('/vendor', (req, res) => res.sendFile(path.join(__dirname, 'views/pages/index.html')))
    .get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'views/pages/index.html')))
    .get('/stock', (req, res) => res.json({stock: stock}))
    .get('/sensor', (req, res) => res.json({sensor: sensor}))
    .get('/stock_update', updateStock)
    .get('/sensor_update', updateSensor)
    //.post('/admin/issueTender')
    //.post('/admin/approveTender')
    //.post('/vendor/applyTender')
    //.get('/vendor/getNewTender')
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
