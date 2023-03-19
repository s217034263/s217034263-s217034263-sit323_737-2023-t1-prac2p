const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send ('<h1> Simple Web Server </h1>')
});
// Web server listening at port 3000
app.listen(3000, function() {
  // This message will be displayed in console window
    console.log('Web Server for Task 2.1P listening on port 3000');
});
