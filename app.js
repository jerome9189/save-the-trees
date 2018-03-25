var express = require('express');
var app = express();
var mainController = require('./controllers/mainController');
app.set('view engine', 'ejs');
app.use(express.static('./views'));
mainController(app);
app.listen(8080);
console.log('Listening to port 8080');
