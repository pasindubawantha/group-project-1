var db = require('../database/mysqlConnection');
 
var Allowance = {
	getAllAllowances: function(callback){
		return db.query("select * from Allowance", callback);
	},
 	getAllowanceById: function(id, callback){
 		return db.query("select * from Allowance where id=? and customerId=? and projectid=?", [id.id, id.customerId, id.projectId], callback);
 	},
 	addAllowance: function(Allowance, callback){
 		return db.query("insert into Allowance(customerId,projectId,description,ammount) values(?,?,?,?)", [Allowance.customerId, Allowance.projectId, Allowance.description, Allowance.ammount], callback);
 	},
 	deleteAllowance:function(id, callback){
  		return db.query("delete from Allowance where id=? and customerId=? and projectid=?", [id.id, id.customerId, id.projectId], callback);
 	}
 };
 
 module.exports = Allowance;