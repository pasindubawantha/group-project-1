var express = require('express')
var router = express.Router()
var Project=require('../models/Project')

router.get('/:id?',function(req, res){
    if(req.params.id){ 
        Project.getProjectById(req.params.id, function(err, rows){
            if(err){
                res.status(400)
                res.json(err)
            }else{
                res.json(rows)
            }
        })
    }else{
        Project.getAllProjects(function(err, rows){
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
    Project.addProject(req.body, function(err, count){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            res.json(count)
        }
    })
})

router.delete('/:id',function(req, res){
    Project.deleteProject(req.params.id, function(err, count){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            res.json(count)
        }
    })
})

router.put('/:id', function(req, res){
    Project.updateTask(req.params.id , req.body , function(err, rows){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            res.json(rows);
        }
    });
});

module.exports=router;
