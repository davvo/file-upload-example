var express = require('express'),
    multer = require('multer'),
    fs = require('fs');

var app = express();

app.use(multer({
    dest: './uploads/'
}));

app.get('/', function (req, res) {
    fs.createReadStream(__dirname + '/index.html').pipe(res);
});

app.post('/', function (req, res) {
    console.log(req.files);
    res.send('file uploaded');
});

var port = process.argv[2] || 8080;
app.listen(port);
console.log("Listening on port", port);