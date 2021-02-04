let http = require("http");
let fs = require('fs')

const PORT = process.env.PORT || 8080;

http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200: OK
    // Content Type: text/plain
    response.writeHead(200, { 
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });

    let readStream = fs.createReadStream(__dirname + '/index.html');
    //Send the response body as "Hello World"
    readStream.pipe(response);
}).listen(PORT, () => {
    // Console will print the message
    console.log('Server running at http://127.0.0.1:' + PORT);
});