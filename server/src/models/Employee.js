var db = require('../database/mysqlConnection');
 
var Employee = {
	getAllEmployees: function(callback){
		return db.query("select * from employee", callback);
	},
 	getEmployeeById: function(id, callback){
 		return db.query("select * from employee where id=?", [id], callback);
 	},
 	addEmployee: function(Employee, callback){
 		return db.query("insert into employee(roleId,name,address,salary,designation) values(?,?,?,?,?)", [Employee.roleId, Employee.name, Employee.address, Employee.salary, Employee.designation], function(err, count){
 			if(err){
 				callback(err, null)
 			}else{
 				db.query("SHOW TABLE STATUS LIKE 'project'", callback)
 			}
 		})
 	},
 	deleteEmployee:function(id, callback){
  		return db.query("delete from employee where id=?", [id], callback);
 	},
 	updateEmployee:function(id, Employee, callback){
  		return db.query("update employee set roleId=?, name=?, address=?, salary=?, designation=? where id=?",[Employee.roleId, Employee.name, Employee.address, Employee.salary, Employee.designation, id], callback);
  	}
 };
 
 module.exports = Employee;