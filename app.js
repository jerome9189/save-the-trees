var express = require('express');
var app = express();
var mainController = require('./controllers/mainController');
app.set('view engine', 'ejs');
app.use(express.static('./views'));
mainController(app);
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
