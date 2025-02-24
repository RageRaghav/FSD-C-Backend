const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>Welcome to backend</h1>`);

});

server.listen(9000,(err)=>{
    if(err)
        console.log('Error starting server',err)
    else
        console.log('Server is running on port 9000')
});

