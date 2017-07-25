var express = require('express');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var authenticator = require('./middleware/authenticator')

var app = express();

app.use(bodyParser.urlencoded({
      extended: true
}));
var port = 3000;


var AUTH = jsonfile.readFileSync("./src/auth.json")

app.use(authenticator(AUTH, "authTable"))

var router = express.Router()

var EmployeeRoute = require("./routes/EmployeeRoute")
router.use('/employees', EmployeeRoute)


app.use('/api', router);

// Start the server
app.listen(port);
console.log('Insert beer on port ' + port);