var db = require('../database/mysqlConnection');
 
var Customer = {
	getAllCustomers: function(callback){
		return db.query("select * from Customer", callback);
	},
 	getCustomerById: function(id, callback){
 		return db.query("select * from Customer where id=?", [id], callback);
 	},
 	addCustomer: function(Customer, callback){
 		return db.query("insert into Customer(name,address) values(?,?)", [CuCustomer.name, Customer.address], callback);
 	},
 	deleteCustomer:function(id, callback){
  		return db.query("delete from Customer where id=?", [id], callback);
 	},
 	updateCustomer:function(id, Customer, callback){
  		return db.query("update Customer set name=?, address=? where id=?",[Customer.name, Customer.address, id], callback);
  	}
 };
 
 module.exports = Customer;