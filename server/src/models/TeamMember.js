var db = require('../database/mysqlConnection');
 
var TeamMember = {
	getAllTeamMembers: function(callback){
		return db.query("select * from TeamMember", callback);
	},
 	getTeamMemberById: function(id, callback){
 		return db.query("select * from TeamMember where employeeId=? and projectId=?", [id.employeeId, id.projectId], callback);
 	},
 	addTeamMember: function(TeamMember, callback){
 		console.log(1111111111111111)
 		console.log(TeamMember)
 		return db.query("insert into TeamMember values(?,?,?,?,?,?,true)", [TeamMember.employeeId, TeamMember.projectId, TeamMember.allowanceAppPriority, TeamMember.allowanceAppMember, TeamMember.paymentAppPriority, TeamMember.paymentAppMember], callback);
 	},
 	deleteTeamMember:function(id, callback){
  		return db.query("delete from TeamMember where employeeId=? and projectId=?", [id.employeeId, id.projectId], callback);
 	},
 	updateTeamMember:function(id, TeamMember, callback){
  		return db.query("update TeamMember set allowanceAppPriority=?, allowanceAppMember=?, paymentAppPriority=?, paymentAppMember=? where employeeId=? and projectId=?",[TeamMember.allowanceAppPriority, TeamMember.allowanceAppMember, TeamMember.paymentAppPriority, TeamMember.paymentAppMember, id.employeeId, id.projectId], callback);
  	}
 };
 
 module.exports = TeamMember;