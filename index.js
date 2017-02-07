var express = require('express');
var app = express();

app.get('/', (req, res) => {
    console.log('Home page');
    res.send('hello, express');
});

app.get('/users/:name', (req, res) => {
    console.log('User: ' + req.params.name);
    res.send('hello, ' + req.params.name);
});

app.listen(3000);
