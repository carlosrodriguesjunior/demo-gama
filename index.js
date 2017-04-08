var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var MongoClient = require('mongodb').MongoClient
var db = null

app.use(bodyParser.json());

app.get('/', function (req, res) {

    db.collection('teste').find().toArray(function (err, result) {
        if (err) throw err

        res.json(result)
        console.log(result)
    })

})

app.post('/', function (req, res) {
    console.log(req.body);
    res.json(req.body.teste + 1);
})

app.put('/user', function (req, res) {
    console.log(res.body)
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})


MongoClient.connect('mongodb://demoUser:gama@ds023490.mlab.com:23490/demo', function (err, _db) {
    if (err) throw err

    db = _db

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!')
    })

})