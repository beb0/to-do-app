var data = [{item: 'test item'}]
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended: false})

module.exports = function(app){

    app.get('/todo', function(req, res) {
        res.render('todo', {items: data})
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body)
        res.json({items: data})
    });

    app.delete('/todo/:item', function(req, res) {
       data = data.filter(function (arr) {
            return arr.item.replace(/ /g, '-') !== req.params.item
        })
        res.json(data)
    });
}