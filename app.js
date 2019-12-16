var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){
    console.log("request was made: " + req.url);
    if (req.url === "/home"){
        res.writeHead( 200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + "/index.html").pipe(res);   
    }
    else{
        res.writeHead( 200, {'Content-Type': 'text/plain'});
        res.end("hello world");
    }
});

server.listen(3000, '127.0.0.1');
console.log("listening to port 3000");