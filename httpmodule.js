const http=require("http");
const server=http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("hello\n");
    res.end('okay');
  }).listen(2000);