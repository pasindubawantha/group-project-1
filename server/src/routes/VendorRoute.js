var express = require('express')
var router = express.Router()
var Vendor=require('../models/Vendor')

router.get('/:id?',function(req, res){
    if(req.params.id){ 
        Vendor.getVendorById(req.params.id, function(err, rows){
            if(err){
            	res.status(400)
                res.json(err)
            }else{
            	res.json(rows)
            }
        })
    }else{
        Vendor.getAllVendors(function(err, rows){
            if(err){
            	res.status(400)
                res.json(err)
            }else{
                res.json(rows)
            }
        })
    }
})

router.get('/:id/microTransactions', function(req, res){
	Vendor.getMicroTransactions(req.params.id, function(err, rows){
            if(err){
            	res.status(400)
                res.json(err)
            }else{
                res.json(rows)
            }
        })

})
router.get('/:id/macroTransactions', function(req, res){
    Vendor.getMacroTransactions(req.params.id, function(err, rows){
            if(err){
                res.status(400)
                res.json(err)
            }else{
                res.json(rows)
            }
        })

})
router.post('/', function(req, res){
    Vendor.addVendor(req.body, function(err, count){
        if(err){
        	res.status(400)
            res.json(err)
        }else{
            res.json(count)
        }
    })
})

router.delete('/:id',function(req, res){
    Vendor.deleteVendor(req.params.id, function(err, count){
        if(err){
        	res.status(400)
            res.json(err)
        }else{
            res.json(count)
        }
    })
})

router.post('/:id', function(req, res){
    Vendor.updateVendor(req.params.id , req.body , function(err, rows){
        if(err){
        	res.status(400)
            res.json(err)
        }else{
            res.json(rows);
        }
    });
});

module.exports=router;
