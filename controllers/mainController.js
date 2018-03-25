var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app) {
  app.get('/index', function(req, res) {
    res.render('index');
  });
  app.post('/index',urlencodedParser, function(req, res) {
    console.log(calculate(req.body.miles, req.body.paper, map));
    //1 sheet = 0.002 Trees, 3 gallons water, 0.009 lb CO2
    //1 mile = 0.900lb CO2, 0,0
    res.render('index');
    // console.log(req.body.paper);
  });
  var map = {
    paper : {"trees" : 0.002, "water" : 3, "carbon" : 0.009},
    miles : {"trees" : 0.0, "water" : 0, "carbon" : 0.900},
  }

  function calculate(miles, paper, map) {
    var precision = 2;
    var netTrees = (miles * map.miles.trees) + (paper * map.paper.trees);
    var netWater = (miles * map.miles.water) + (paper * map.paper.water);
    var netCarbon = (miles * map.miles.carbon) + (paper * map.paper.carbon);
    return {"trees" : netTrees.toFixed(precision),
            "water" : netWater.toFixed(precision),
            "carbon" : netCarbon.toFixed(precision)};
   }
}
