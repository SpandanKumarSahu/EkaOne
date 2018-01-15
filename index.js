const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var url = require('url');

var stock = '150'
var sensor = '5.0'

var updateStock = function(req, res){
    stock = req.query.stock;
    res.json({stock: stock});
};

var updateSensor = function(req, res){
    sensor = req.query.sensor;
    res.json({sensor: sensor});
};

var Issued_Tenders = {}
var Applied_Tenders = {}
var Approved_Tenders = {}

var issueTender = function(req, res){
    tenderID = req.query.tenderID;
    tender = req.query.tender;
    Issued_Tenders[tenderID] = tender;
    res.json({success: true});
}

var approveTender = function(req, res){
    tenderID = req.query.tenderID;
    if (Applied_Tenders[tenderID] == null){
	res.json({success: false, message: "Incorrect Tender ID"});
    } else{
	Approved_Tenders[tenderID] = Applied_Tenders[tenderID];
	res.json({success: true});
    }
}

var applyTender = function(req, res){
    tenderID = req.query.tenderID;
    if (Issued_Tenders[tenderID] == null){
	res.json({success: false, message: "Incorrect Tender ID"});
    } else{
	Applied_Tenders[tenderID] = Issued_Tenders[tenderID];
	res.json({success: true});
    }
}

var viewAllTenders = function(req, res){
    res.json({Issued: Issued_Tenders, Applied: Applied_Tenders, Approved: Approved_Tenders});
}
var viewIssuedTenders = function(req, res){
    res.json({Issued: Issued_Tenders});
}
var viewApprovedTenders = function(req, res){
    res.json({Approved: Approved_Tenders});
}
var viewAppliedTenders = function(req, res){
    res.json({Applied: Applied_Tenders});
}


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
    .get('/admin/issueTender', issueTender)
    .get('/admin/approveTender', approveTender)
    .get('/vendor/applyTender', applyTender)
    .get('/vendor/viewAllTenders', viewAllTenders)
    .get('/admin/viewAllTenders', viewAllTenders)
    .get('/vendor/viewIssuedTenders', viewIssuedTenders)
    .get('/admin/viewIssuedTenders', viewIssuedTenders)
    .get('/vendor/viewApprovedTenders', viewApprovedTenders)
    .get('/admin/viewApprovedTenders', viewApprovedTenders)
    .get('/vendor/viewAppliedTenders', viewAppliedTenders)
    .get('/admin/viewAppliedTenders', viewAppliedTenders)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
