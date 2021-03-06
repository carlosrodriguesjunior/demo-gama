var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var MongoClient = require('mongodb').MongoClient
var cors = require('cors')


app.use(cors())
app.use(bodyParser.json());

MongoClient.connect('mongodb://demoUser:123456@ds155490.mlab.com:55490/demo', function (err, db) {
    if (err) throw err

    require('./routes/user.routes')(app, db)

    app.listen(process.env.PORT || 3000, function () {
        console.log('Example app listening on port 3000!')
    })

})
