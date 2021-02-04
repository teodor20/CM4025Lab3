///////////////////////////////////////////////////////////////////
// load the express package and create our app
let express = require('express');
let app = express();
const PORT = process.env.PORT || 8080;
// set the port based on environment (more on environments later)
let port = PORT;
// send our index.html file to the user for the home page
app.get('/', function(req, res) {
 res.sendFile(__dirname + '/index.html');
});
// start the server
app.listen(PORT);
console.log('Express Server running at http://127.0.0.1:'.PORT);
///////////////////////////////////////////////////////////////////