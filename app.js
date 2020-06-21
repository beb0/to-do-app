var express = require('express')

var app = express()

app.set('view engine', 'ejs')

app.listen(3000)

app.get('/', function (req, res) {
    res.send("Heyyyyyy")
})

app.get('/home', function (req, res) {
    res.sendFile(__dirname + "/home.html")
})

app.get('/contact/:name', function (req, res) {
    // res.send("Contact us at: " + req.params.name) 
    var data = {
        num : 18, 
        job: 'Software Developer',
        hobbies: ['reading', 'listening to music']
        }
    res.render('contact', {name: req.params.name, num: 18, data:data})
})
