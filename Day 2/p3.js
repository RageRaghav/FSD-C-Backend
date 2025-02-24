const http = require('http');

const server = http.createServer(async (req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.statusCode=200;
    const myhtml = await fstat.readFile()

});

server.listen(9000,(err)=>{
    if(err)
        console.log('Error starting server',err)
    else 
        console.log('Server is running on port 9000')
});

