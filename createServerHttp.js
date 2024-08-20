const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostname = "localhost";
const home = fs.readFileSync("./indexToCreateServer.html","utf-8");


const server = http.createServer((req,res) => {
    if(req.url === "/"){
        return res.end(home)

    }
    if(req.url === "/about"){
        return res.end("<h1>ABOUT PAGE</h1>");
    }
    if(req.url === "/contact"){
        return res.end("<h1>Contact PAGE</h1>");
    }
    if(req.url === "/services"){
        return res.end("<h1>Service Page</h1>");
    }
    else{
        return res.end("<h1>Page not found</h1>")
    }


});
server.listen(PORT,hostname,() => {
    console.log(`Server is working on http://${hostname}:${PORT}`);

});