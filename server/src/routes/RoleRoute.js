var express = require('express')
var router = express.Router()
var Role=require('../models/Role')

router.get('/:id?',function(req, res){
    if(req.params.id){ 
        Role.getRoleById(req.params.id, function(err, rows){
            if(err){
            	res.status(400)
                res.json(err)
            }else{
            	res.json(rows)
            }
        })
    }else{
        Role.getAllRoles(function(err, rows){
            if(err){
            	res.status(400)
                res.json(err)
            }else{
                res.json(rows)
            }
        })
    }
})

router.post('/', function(req, res){
    Role.addRole(req.body, function(err, count){
        if(err){
        	res.status(400)
            res.json(err)
        }else{
            res.json(count)
        }
    })
})

router.delete('/:id',function(req, res){
    Role.deleteRole(req.params.id, function(err, count){
        if(err){
        	res.status(400)
            res.json(err)
        }else{
            res.json(count)
        }
    })
})

router.post('/:id', function(req, res){
    Role.updateRole(req.params.id , req.body , function(err, rows){
        if(err){
        	res.status(400)
            res.json(err)
        }else{
            res.json(rows);
        }
    });
});

module.exports=router;
