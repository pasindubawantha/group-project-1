var express = require('express')
var router = express.Router()
var Customer=require('../models/Customer')

router.get('/:id?',function(req, res){
    if(req.params.id){ 
        Customer.getCustomerById(req.params.id, function(err, rows){
            if(err){
            	res.status(400)
                res.json(err)
            }else{
            	res.json(rows)
            }
        })
    }else{
        Customer.getAllCustomers(function(err, rows){
            if(err){
            	res.status(400)
                res.json(err)
            }else{
                res.json(rows)
            }
        })
    }
})

router.get('/:id/projects', function(req, res){
	Customer.getProjects(req.params.id, function(err, rows){
            if(err){
            	res.status(400)
                res.json(err)
            }else{
                res.json(rows)
            }
        })
})

router.get('/:id/projects/:projectId/transactions', function(req, res){
	var id = {customerId:req.params.id, projectId:req.params.projectId}
	Customer.getProjectTransactions(id, function(err, rows){
            if(err){
            	res.status(400)
                res.json(err)
            }else{
                res.json(rows)
            }
        })
})

router.get('/:id/transactions', function(req, res){
	Customer.getTransactions(req.params.id, function(err, rows){
            if(err){
            	res.status(400)
                res.json(err)
            }else{
                res.json(rows)
            }
        })

})

router.post('/', function(req, res){
    Customer.addCustomer(req.body, function(err, count){
        if(err){
        	res.status(400)
            res.json(err)
        }else{
            res.json(count)
        }
    })
})

router.delete('/:id',function(req, res){
    Customer.deleteCustomer(req.params.id, function(err, count){
        if(err){
        	res.status(400)
            res.json(err)
        }else{
            res.json(count)
        }
    })
})

router.post('/:id', function(req, res){
    Customer.updateCustomer(req.params.id , req.body , function(err, rows){
        if(err){
        	res.status(400)
            res.json(err)
        }else{
            res.json(rows);
        }
    });
});

module.exports=router;
