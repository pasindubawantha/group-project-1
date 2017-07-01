var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require("request");
var cors = require('cors')

app.use(bodyParser.json());
app.use(cors())


app.post('/server', function(req, res) {
	console.log(req.body)	

	var resp_ob = {value : "1243545"}
	//res.header('Access-Control-Allow-Origin', 'localhost');
    //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    //res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.send(resp_ob)
})

var server = app.listen(3000, function () {
   //var host = server.address().address
   var host = "localhost"
   var port = server.address().port
   
   console.log("listening at http://%s:%s", host, port)
})