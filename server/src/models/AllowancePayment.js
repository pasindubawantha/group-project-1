var db = require('../database/mysqlConnection');
 
var AllowancePayment = {
	getAllAllowancePayments: function(callback){
		return db.query("select * from AllowancePayment", callback);
	},
 	getAllowancePaymentById: function(id, callback){
 		return db.query("select * from AllowancePayment where id=? and customerId=? and projectid=?", [id.id, id.customerId, id.projectId], callback);
 	},
 	addAllowancePayment: function(AllowancePayment, callback){
 		return db.query("insert into AllowancePayment(customerId,projectId,description,ammount) values(?,?,?,?)", [AllowancePayment.customerId, AllowancePayment.projectId, AllowancePayment.description, AllowancePayment.ammount], callback);
 	},
 	deleteAllowancePayment:function(id, callback){
  		return db.query("delete from AllowancePayment where id=? and customerId=? and projectid=?", [id.id, id.customerId, id.projectId], callback);
 	}
 };
 
 module.exports = AllowancePayment