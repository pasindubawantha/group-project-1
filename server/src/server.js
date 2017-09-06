var express = require('express');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var authenticator = require('./middleware/authenticator')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
      extended: true
}));
var port = 3000;


var AUTH = jsonfile.readFileSync("./src/auth.json")

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(authenticator(AUTH, "authTable"))

var router = express.Router()

var EmployeeRoute = require("./routes/EmployeeRoute")
var CustomerRoute = require("./routes/CustomerRoute")
var ProjectRoute = require("./routes/ProjectRoute")
var TeamMember = require("./routes/TeamMemberRoute")
var CustomerPayment = require("./routes/CustomerPaymentRoute")
var Vendor = require("./routes/VendorRoute")
var Role = require("./routes/RoleRoute")
var Approval = require("./routes/ApprovalRoute")
router.use('/employees', EmployeeRoute)
router.use('/customers', CustomerRoute)
router.use('/projects', ProjectRoute)
router.use('/teamMembers', TeamMember)
router.use('/customerPayments', CustomerPayment)
router.use('/vendors', Vendor)
router.use('/roles', Role)
router.use('/approvals', Approval)


app.use('/api', router);

// Start the server
app.listen(port);
console.log('Insert beer on port ' + port);