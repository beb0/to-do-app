var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/tododb", { useUnifiedTopology: true , useNewUrlParser: true })

mongoose.connection.once('open', function () {
    console.log("connection made successfully")
})

var todoSchema = new mongoose.Schema({
    item: String
})

var todoModel = mongoose.model('Todo', todoSchema)

//var data = [{item: 'test item'}]


var urlencodedParser = bodyParser.urlencoded({extended: false})

module.exports = function(app){

    app.get('/todo', function(req, res) {
        todoModel.find({}, function (err, data) {
            if (err) throw err
            res.render('todo', {items: data})
        })
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        var newItem = todoModel(req.body).save(function (err, data) {
            if (err) throw err
            res.json(data)
        })
    });

    app.delete('/todo/:item', function(req, res) {
        todoModel.find({item: req.params.item.replace(/\-/g, " ")}).remove(function (err, data) {
            if (err) throw err
            res.json(data)
        })
    });
}