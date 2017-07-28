var mysql=require('mysql');

var connection=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'',
	dateStrings:true,
	database:'mydb'
});

module.exports=connection;