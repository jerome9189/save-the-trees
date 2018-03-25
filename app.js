var express = require('express');
var app = express();
var mainController = require('./controllers/mainController');
app.set('view engine', 'ejs');
app.use(express.static('./public'));
mainController(app);
app.listen(3000);
console.log('Listening to port 3000');
