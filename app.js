var express = require('express');
var app = express();
var hbase = require('hbase');
var util = require('util');
app.use('/', express.static(__dirname+'/public'));

app.get('/getevents', function (req, res) {
	console.log("get events");
	var client = hbase({
		host: 'localhost',
		port: 28080
	});
	var conection = new hbase.Connection(client);
	conection.get('https://localhost:28080/rsvp/15*/venue',function(error,data,response){
		if(error){
			console.log('error');
			res.json('{"message":"error"}');
		}
		//console.log("data->"+util.inspect(data,false,null));
		res.json(data);

	})
  //res.json('Hello World!');
});

app.get('/getTrendingevents', function (req, res) {
	console.log("get Trending events");
	var client = hbase({
		host: 'localhost',
		port: 28080
	});
	var conection = new hbase.Connection(client);
	conection.get('https://localhost:28080/TrendingEvents/*',function(error,data,response){
		if(error){
			console.log('error');
			res.json('{"message":"error"}');
		}
		//console.log("data->"+util.inspect(data,false,null));
		res.json(data);

	})
  //res.json('Hello World!');
});


app.get('/getStateevents', function (req, res) {
	console.log("get state events");
	var client = hbase({
		host: 'localhost',
		port: 28080
	});
	var conection = new hbase.Connection(client);
	conection.get('https://localhost:28080/StatsByGroup/*',function(error,data,response){
		if(error){
			console.log('error');
			res.json('{"message":"error"}');
		}
		//console.log("data->"+util.inspect(data,false,null));
		res.json(data);

	})
  //res.json('Hello World!');
});


app.get('/getnegative/:eventname', function (req, res) {
	//req.param()
	console.log("get state events");
	var client = hbase({
		host: 'localhost',
		port: 28080
	});
	var conection = new hbase.Connection(client);
	conection.get('https://localhost:28080/ec_ng/'+req.params.eventname+'*',function(error,data,response){
		if(error){
			console.log('error');
			res.json('{"message":"error"}');
		}
		//console.log("data->"+util.inspect(data,false,null));
		res.json(data);

	})
  //res.json('Hello World!');
});




var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});