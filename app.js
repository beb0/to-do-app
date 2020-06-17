http.createServer(function (req, res) {
    console.log("Request was made at: " + req.url)
    if  (req.url === "/home" || req.url === "/"){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream("home.html").pipe(res)
    }
    else if (req.url === "/contact"){
        fs.createReadStream("contact.html").on('data', function (file) {
            res.write(file)
            res.end()
        })
    }
    else if(req.url === "/api"){
        fs.readFile("test.json", "utf8", function (err, data) {
            res.writeHead(200,{'Content-Type': 'text/json'})
            res.write(data)
            res.end()
        })
    }
    else{
        var readStream = fs.createReadStream("notfound.html")
        res.writeHead(404, {'Content-Type': 'text/html'})
        readStream.pipe(res)
    }
}).listen(3000)