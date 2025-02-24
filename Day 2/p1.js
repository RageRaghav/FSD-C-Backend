const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

})

server.listen(9000,(arr)=>{
    if(arr)
        console.log('Server is running on port 9000',arr)
    else
        console.log('Server is running on port 9000')
    
})

