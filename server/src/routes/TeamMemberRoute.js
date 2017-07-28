var express = require('express')
var router = express.Router()
var TeamMember=require('../models/TeamMember')

router.get('/:id?',function(req, res){
    if(req.params.id){ 
        TeamMember.getTeamMemberById(req.params.id, function(err, rows){
            if(err){
                res.status(400)
                res.json(err)
            }else{
                res.json(rows)
            }
        })
    }else{
        TeamMember.getAllTeamMembers(function(err, rows){
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
    TeamMember.addTeamMember(req.body, function(err, count){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            res.json(count)
        }
    })
})

router.delete('/:id',function(req, res){
    TeamMember.deleteTeamMember(req.params.id, function(err, count){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            res.json(count)
        }
    })
})



module.exports=router;
