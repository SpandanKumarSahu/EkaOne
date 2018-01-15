const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var stock = '150'

    

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/pages/login.html')))
    .get('/vendor', (req, res) => res.sendFile(path.join(__dirname, 'views/pages/index.html')))
    .get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'views/pages/index.html')))
    .get('/stock', (req, res) => res.json({stock: stock}))
    //.get('/sensor',)
    //.post('/admin/issueTender')
    //.post('/admin/approveTender')
    //.post('/vendor/applyTender')
    //.get('/vendor/getNewTender')
    //.post('/sensor_update', (req, res) => res.send(sensor))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
