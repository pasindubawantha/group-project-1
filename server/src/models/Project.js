var db = require('../database/mysqlConnection');
 
var Project = {
	getAllProjects: function(callback){
		return db.query("select * from Project", callback);
	},
 	getProjectById: function(id, callback){
 		return db.query("select * from Project where id=?", [id], callback);
 	},
 	addProject: function(Project, callback){
 		return db.query("insert into Project(customerId,name,address,startDate,endDate) values(?,?,?,?,?)", [Project.customerId, Project.name, Project.address, Project.startDate, Project.endDate], function(err, count){
 			if(err){
 				callback(err, null)
 			}else{
 				db.query("SHOW TABLE STATUS LIKE 'project'", callback)
 			}
 		})
 	},
 	deleteProject:function(id, callback){
  		return db.query("delete from Project where id=?", [id], callback);
 	},
 	updateProject:function(id, Project, callback){
  		return db.query("update Project set customerId=?, name=?, address=?, startDate=?, endDate=? where id=?",[Project.customerId, Project.name, Project.address, Project.startDate, Project.endDate, id], callback);
  	}
 };
 
 module.exports = Project;