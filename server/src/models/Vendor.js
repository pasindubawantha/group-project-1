var db = require('../database/mysqlConnection');
 
var Vendor = {
	getAllVendors: function(callback){
		return db.query("select * from Vendor", callback);
	},
 	getVendorById: function(id, callback){
 		return db.query("select * from Vendor where id=?", [id], callback);
 	},
 	addVendor: function(Vendor, callback){
 		return db.query("insert into Vendor(name,address,description,type) values(?,?,?,?)", [Vendor.name, Vendor.address, Vendor.description, Vendor.type], callback);
 	},
 	deleteVendorVendor:function(id, callback){
  		return db.query("delete from Vendor where id=?", [id], callback);
 	},
 	updateVendor:function(id, Vendor, callback){
  		return db.query("update Vendor set name=?, address=?, description=?, type=? where id=?",[Vendor.name, Vendor.address, Vendor.description, Vendor.type, id], callback);
  	}
 };
 
 module.exports = Vendor;