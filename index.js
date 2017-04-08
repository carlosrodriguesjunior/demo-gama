var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var MongoClient = require('mongodb').MongoClient

app.use(bodyParser.json());


MongoClient.connect('mongodb://demoUser:gama@ds023490.mlab.com:23490/demo', function (err, db) {
    if (err) throw err

    require('./routes/user.routes')(app, db)

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!')
    })

})