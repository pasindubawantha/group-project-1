var express = require('express')
var router = express.Router()
var CustomerPayment=require('../models/CustomerPayment')

router.get('/:id?',function(req, res){
    if(req.params.id){ 
        CustomerPayment.getCustomerPaymentById(req.params.id, function(err, rows){
            if(err){
                res.status(400)
                res.json(err)
            }else{
                res.json(rows)
            }
        })
    }else{
        CustomerPayment.getAllCustomerPayments(function(err, rows){
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
    CustomerPayment.addCustomerPayment(req.body, function(err, count){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            res.json(count)
        }
    })
})

router.delete('/:id',function(req, res){
    CustomerPayment.deleteCustomerPayment(req.params.id, function(err, count){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            res.json(count)
        }
    })
})



module.exports=router;
