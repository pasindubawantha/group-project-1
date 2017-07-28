var db = require('../database/mysqlConnection');
 
var Role = {
	getAllRoles: function(callback){
		return db.query("select * from Role", callback);
	},
 	getRoleById: function(id, callback){
 		return db.query("select * from Role where id=?", [id], callback);
 	},
 	addRole: function(Role, callback){
 		return db.query("insert into Role(name,description) values(?,?)", [Role.name, Role.description], function(err, count){
 			if(err){
 				callback(err, null)
 			}else{
 				db.query("SHOW TABLE STATUS LIKE 'role'", callback)
 			}
 		})
 	},
 	deleteRole:function(id, callback){
  		return db.query("delete from Role where id=?", [id], callback);
 	},
 	updateRole:function(id, Role, callback){
  		return db.query("update Role set name=?, description=? where id=?",[Role.name, Role.description, id], callback);
  	}
 };
 
 module.exports = Role;