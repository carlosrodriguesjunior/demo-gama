var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!')
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

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})