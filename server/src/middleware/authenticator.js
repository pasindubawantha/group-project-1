var authenticator = function(object, name){
	return function (req, res, next) {
		//console.log(req.headers);
		//console.log(req.url);
		console.log(req.method)
		if(req.headers.sesionid == '0001' || true){
			next()
		}else{
			//res.json({err:"asd"})
			res.status(500).json({ error: 'no acess' });		}
		
	}
}

module.exports = authenticator