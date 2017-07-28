var db = require('../database/mysqlConnection');
 
var Customer = {
	getAllCustomers: function(callback){
		return db.query("select * from Customer", callback);
	},
 	getCustomerById: function(id, callback){
 		return db.query("select * from Customer where id=?", [id], callback);
 	},
 	addCustomer: function(Customer, callback){
 		return db.query("insert into Customer(name,address) values(?,?)", [Customer.name, Customer.address], function(err, count){
 			if(err){
 				callback(err, null)
 			}else{
 				db.query("SHOW TABLE STATUS LIKE 'customer'", callback)
 			}
 		})
 	},
 	deleteCustomer:function(id, callback){
  		return db.query("delete from Customer where id=?", [id], callback);
 	},
 	updateCustomer:function(id, Customer, callback){
  		return db.query("update Customer set name=?, address=? where id=?",[Customer.name, Customer.address, id], callback);
  	},
  	getProjects:function(id, callback){
  		return db.query("select * from project where customerId=?",[id], callback)
  	},
  	getProjectTransactions:function(id, callback){
  		return db.query("select * from customerpayment where projectId=? and customerId=?",[id.projectId, id.customerId], callback)
  	},
  	getTransactions:function(id, callback){
  		return db.query("select * from customerpayment customerId=?",[id], callback)
  	}
 };
 
 module.exports = Customer;