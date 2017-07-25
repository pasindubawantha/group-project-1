var express = require('express')
var router = express.Router()
var Employee=require('../models/Employee')

router.get('/:id?',function(req, res){
    if(req.params.id){ 
        Employee.getEmployeeById(req.params.id, function(err, rows){
            if(err){
                res.json(err)
            }else{
                res.json(rows)
            }
        })
    }else{
        Employee.getAllEmployees(function(err, rows){
            if(err){
                res.json(err)
            }else{
                res.json(rows)
            }
        })
    }
})
 
router.post('/', function(req, res){
    Employee.addEmployee(req.body, function(err, count){
        if(err){
            res.json(err)
        }else{
            res.json(count)
        }
    })
})

router.delete('/:id',function(req, res){
    Employee.deleteEmployee(req.params.id, function(err, count){
        if(err){
            res.json(err)
        }else{
            res.json(count)
        }
    })
})

router.put('/:id', function(req, res){
    Employee.updateTask(req.params.id , req.body , function(err, rows){
        if(err){
            res.json(err)
        }else{
            res.json(rows);
        }
    });
});

module.exports=router;
