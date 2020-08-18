// module

var cal=require("./addition");
cal.additoon();


const http=require("http");
const server=http.createServer(
    function(req,res){
       
        res.end();
}).listen(300);