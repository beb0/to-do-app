var express = require('express')
var bodyParser = require('body-parser')

var app = express()

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs')
// app.use('/assets', function (req, res, next) {
//     console.log(req.url)
//     next()
// })

app.use('/assets', express.static('assets'))
app.listen(3000)

app.get('/', function (req, res) {
    res.send("Please Enter url + /home")
})

app.get('/home', function (req, res) {
    res.render('home')
})

app.get('/contact/:name', function (req, res) {
    // res.send("Contact us at: " + req.params.name) 
    res.render('contact_na', {name: req.params.name, num: 1800})
})

app.get('/contact', function (req, res) {
    // res.send("Contact us at: " + req.params.name) 
    console.log(req.query)
    res.render('contact')
})

app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body)
    res.render('success', {formd: req.body})
})

app.get('/profile/:name', function (req, res) {
    var data = {
        name : req.params.name, 
        job: 'Software Developer',
        hobbies: ['reading', 'listening to music']
        }

    res.render('profile', {data:data})
})

// app.get('/profile', function(req,res){
//     res.render('profile', {rq: req.query})
// })