var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var currentTime = new Date();
const precision = 3;
var count = 0;
var avgStats = {"trees" : 0.0, "water" : 0.0, "carbon" : 0.0}
module.exports = function(app) {
  app.get('/index', function(req, res) {
    res.render('index');
  });
  app.post('/index',urlencodedParser, function(req, res) {
    //1 sheet = 0.002 Trees, 3 gallons water, 0.009 lb CO2
    //1 mile = 0.900lb CO2, 0,0
    var stats = calculate(req.body.miles, req.body.paper, map);
    count++;
    avgStats = {"trees" : (parseFloat(parseFloat(avgStats.trees) + parseFloat(stats.trees))/parseFloat(count)).toFixed(precision),
                "water" : (parseFloat(parseFloat(avgStats.water) + parseFloat(stats.water))/parseFloat(count)).toFixed(precision),
                "carbon" : (parseFloat(parseFloat(avgStats.carbon) + parseFloat(stats.carbon))/parseFloat(count)).toFixed(precision),
              };
    var json = {"avgStats" : avgStats, "stats" : stats, "timestamp" : currentTime.toLocaleString()};
    res.render('resource', {data : json});
    // console.log(req.body.paper);
  });
  var map = {
    paper : {"trees" : 0.002, "water" : 3.0, "carbon" : 0.009},
    miles : {"trees" : 0.0, "water" : 0.0, "carbon" : 0.900},
  }

  function calculate(miles, paper, map) {
    var netTrees = (miles * map.miles.trees) + (paper * map.paper.trees);
    var netWater = (miles * map.miles.water) + (paper * map.paper.water);
    var netCarbon = (miles * map.miles.carbon) + (paper * map.paper.carbon);
    return {"trees" : netTrees.toFixed(precision),
            "water" : netWater.toFixed(precision),
            "carbon" : netCarbon.toFixed(precision)};
   }
}
