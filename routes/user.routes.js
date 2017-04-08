module.exports = function (app, db) {

    app.get('/user', function (req, res) {

        db.collection('teste').find().toArray(function (err, result) {
            if (err) throw err

            res.json(result)
            console.log(result)
        })

    })

    app.post('/user', function (req, res) {

        var collection = db.collection("teste");

        collection.save(req.body)
            .then(function (result) {
                res.json(result);
            }).catch(function (error) {
                console.log(error)
                res.status(500).send(error)

            });

    })

    app.put('/user', function (req, res) {
        console.log(res.body)
        res.send('Got a PUT request at /user')
    })

    app.delete('/user', function (req, res) {
        res.send('Got a DELETE request at /user')
    })

}