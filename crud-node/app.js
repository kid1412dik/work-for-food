var express = require('express')
var app = express ()
var router = require('./router.js')
var bodyParser = require('body-parser')

app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

app.engine('html',require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(router)
app.set('host','47.115.6.161');
app.listen(3000,function(){
    console.log('running...')
})

