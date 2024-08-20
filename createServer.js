const http = require("http");
const server = http.createServer((req,res) =>{
    res.end("working")

});
server.listen(4000,"localhost",() => {
    console.log("Server is working on http://localhost:4000");

});