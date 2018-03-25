var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app) {
  app.get('/index', function(req, res) {
    res.render('index');
  })
  app.post('/index',urlencodedParser, function(req, res) {
    console.log(req.body);
    // console.log(req.body.paper);
  })
}
