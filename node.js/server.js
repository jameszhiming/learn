const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

var ser=http.createServer((req, res)=>{
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello jzmm\n');
});
ser.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});