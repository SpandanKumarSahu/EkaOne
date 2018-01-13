const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.send('Hello World'))
    .get('/api', (req, res) => res.send('Different'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))