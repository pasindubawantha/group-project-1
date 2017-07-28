var db = require('../database/mysqlConnection');
 
var CustomerPayment = {
	getAllCustomerPayments: function(callback){
		return db.query("select * from CustomerPayment", callback);
	},
 	getCustomerPaymentById: function(id, callback){
 		return db.query("select * from CustomerPayment where id=? and customerId=? and projectid=?", [id.id, id.customerId, id.projectId], callback);
 	},
 	addCustomerPayment: function(CustomerPayment, callback){
 		return db.query("insert into CustomerPayment(customerId,projectId,description,ammount) values(?,?,?,?)", [CustomerPayment.customerId, CustomerPayment.projectId, CustomerPayment.description, CustomerPayment.ammount], callback);
 	},
 	deleteCustomerPayment:function(id, callback){
  		return db.query("delete from CustomerPayment where id=? and customerId=? and projectid=?", [id.id, id.customerId, id.projectId], callback);
 	}
 };
 
 module.exports = CustomerPayment;