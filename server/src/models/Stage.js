var db = require('../database/mysqlConnection');
 
var Stage = {
	getAllStages: function(callback){
		return db.query("select * from Stage", callback);
	},
 	getStageById: function(id, callback){
 		return db.query("select * from Stage where id=? and projectId=?", [id.id, id.projectId], callback);
 	},
 	addStage: function(Stage, callback){
 		return db.query("insert into Stage(projectId,name,priority,description,startDate,endDate,ammount) values(?,?,?,?,?,?,?)", [Stage.projectId, Stage.name, Stage.priority, Stage.description, Stage.startDate, Stage.endDate, Stage.ammount], callback);
 	},
 	deleteStage:function(id, callback){
  		return db.query("delete from Stage where id=? and projectId=?", [id.id, id.projectId], callback);
 	},
 	updateStage:function(id, Stage, callback){
  		return db.query("update Stage set name=?, priority=?, description=?, startDate=?, endDate=?, ammount=? where id=? and projectId=?",[Stage.name, Stage.priority, Stage.description, Stage.startDate, Stage.endDate, Stage.ammount, id.id, id.projectId], callback);
  	}
 };
 
 module.exports = Stage;