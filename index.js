const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        "Content-type": "text/html"
    });
    res.send("<h1>open shift test success</h1>")
});

server.listen(8000, ()=>{
    console.log("listening on port 8000");
});