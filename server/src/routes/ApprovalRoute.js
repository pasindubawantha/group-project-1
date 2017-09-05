var express = require('express')
var router = express.Router()
var ApprovedMaterial=require('../models/Approval/Approved/Material')
var ApprovedPayment=require('../models/Approval/Approved/Payment')
var DeniedMaterial=require('../models/Approval/Denied/Material')
var DeniedPayment=require('../models/Approval/Denied/Payment')
var InboxMaterial=require('../models/Approval/Inbox/Material')
var InboxPayment=require('../models/Approval/Inbox/Payment')
var PendingMaterial=require('../models/Approval/Pending/Material')
var PendingPayment=require('../models/Approval/Pending/Payment')

router.get('/approved/material/:id',function(req, res){
    ApprovedMaterial.get(req.params.id , function(err, rows){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            var approved = {}
            for(var i=0; i<rows.length; i++){
                if(!rows[i].approved){
                    approved[rows[i]['transactionId']] = true
                }
            }
            var send = {}
            for(var i=0; i<rows.length; i++){
                if(!approved[rows[i]['transactionId']]){
                    if(!send[rows[i]['transactionId']]){
                        send[rows[i]['transactionId']] = rows[i]
                        send[rows[i]['transactionId']]['approvingList'] = [rows[i]['transactionApprovalMemberId']]
                    }else{
                        send[rows[i]['transactionId']]['approvingList'].push(rows[i]['transactionApprovalMemberId'])
                    }
                }
            }
            var sendArry = []
            for(var i in send){
                sendArry.push(send[i])
            }
            res.json(sendArry)
        }
    })
})

router.get('/approved/payment/:id',function(req, res){
    ApprovedPayment.get(req.params.id , function(err, rows){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            var approved = {}
            for(var i=0; i<rows.length; i++){
                if(!rows[i].approved){
                    approved[rows[i]['transactionId']] = true
                }
            }
            var send = {}
            for(var i=0; i<rows.length; i++){
                if(!approved[rows[i]['transactionId']]){
                    if(!send[rows[i]['transactionId']]){
                        send[rows[i]['transactionId']] = rows[i]
                        send[rows[i]['transactionId']]['approvingList'] = [rows[i]['transactionApprovalMemberId']]
                    }else{
                        send[rows[i]['transactionId']]['approvingList'].push(rows[i]['transactionApprovalMemberId'])
                    }
                }
            }
            var sendArry = []
            for(var i in send){
                sendArry.push(send[i])
            }
            res.json(sendArry)
        }
    })
})

router.get('/denied/material/:id',function(req, res){
    DeniedMaterial.get(req.params.id , function(err, rows){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            var denied = {}
            for(var i=0; i<rows.length; i++){
                if(!rows[i].denied){
                    denied[rows[i]['transactionId']] = true
                }
            }
            var send = {}
            for(var i=0; i<rows.length; i++){
                if(!denied[rows[i]['transactionId']]){
                    if(!send[rows[i]['transactionId']]){
                        send[rows[i]['transactionId']] = rows[i]
                        send[rows[i]['transactionId']]['approvingList'] = [rows[i]['transactionApprovalMemberId']]
                    }else{
                        send[rows[i]['transactionId']]['approvingList'].push(rows[i]['transactionApprovalMemberId'])
                    }
                }
            }
            var sendArry = []
            for(var i in send){
                sendArry.push(send[i])
            }
            res.json(sendArry)
        }
    })
})

router.get('/denied/payment/:id',function(req, res){
    DeniedPayment.get(req.params.id , function(err, rows){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            var denied = {}
            for(var i=0; i<rows.length; i++){
                if(!rows[i].denied){
                    denied[rows[i]['transactionId']] = true
                }
            }
            var send = {}
            for(var i=0; i<rows.length; i++){
                if(!denied[rows[i]['transactionId']]){
                    if(!send[rows[i]['transactionId']]){
                        send[rows[i]['transactionId']] = rows[i]
                        send[rows[i]['transactionId']]['approvingList'] = [rows[i]['transactionApprovalMemberId']]
                    }else{
                        send[rows[i]['transactionId']]['approvingList'].push(rows[i]['transactionApprovalMemberId'])
                    }
                }
            }
            var sendArry = []
            for(var i in send){
                sendArry.push(send[i])
            }
            res.json(sendArry)
        }
    })
})

router.get('/pending/material/:id',function(req, res){
    PendingMaterial.get(req.params.id , function(err, rows){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            console.log(rows)
            var pending = {}
            for(var i=0; i<rows.length; i++){
                if(!(rows[i].denied || rows[i].approved)){
                    pending[rows[i]['transactionId']] = true
                }
            }
            for(var i=0; i<rows.length; i++){
                if((rows[i].denied)){
                    pending[rows[i]['transactionId']] = false
                }
            }
            var send = {}
            for(var i=0; i<rows.length; i++){
                if(pending[rows[i]['transactionId']]){
                    if(!send[rows[i]['transactionId']]){
                        send[rows[i]['transactionId']] = rows[i]
                        send[rows[i]['transactionId']]['approvingList'] = [rows[i]['transactionApprovalMemberId']]
                    }else{
                        send[rows[i]['transactionId']]['approvingList'].push(rows[i]['transactionApprovalMemberId'])
                    }
                }
            }
            var sendArry = []
            for(var i in send){
                sendArry.push(send[i])
            }
            res.json(sendArry)
        }
    })
})

router.get('/pending/payment/:id',function(req, res){
    PendingPayment.get(req.params.id , function(err, rows){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            console.log(rows)
            var pending = {}
            for(var i=0; i<rows.length; i++){
                if(!(rows[i].denied || rows[i].approved)){
                    pending[rows[i]['transactionId']] = true
                }
            }
            for(var i=0; i<rows.length; i++){
                if((rows[i].denied)){
                    pending[rows[i]['transactionId']] = false
                }
            }
            var send = {}
            for(var i=0; i<rows.length; i++){
                if(pending[rows[i]['transactionId']]){
                    if(!send[rows[i]['transactionId']]){
                        send[rows[i]['transactionId']] = rows[i]
                        send[rows[i]['transactionId']]['approvingList'] = [rows[i]['transactionApprovalMemberId']]
                    }else{
                        send[rows[i]['transactionId']]['approvingList'].push(rows[i]['transactionApprovalMemberId'])
                    }
                }
            }
            var sendArry = []
            for(var i in send){
                sendArry.push(send[i])
            }
            res.json(sendArry)
        }
    })
})

router.get('/inbox/material/:id',function(req, res){
    InboxMaterial.get(req.params.id , function(err, rows){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            res.json(rows)
        }
    })
})

router.get('/inbox/payment/:id',function(req, res){
    InboxPayment.get(req.params.id , function(err, rows){
        if(err){
            res.status(400)
            res.json(err)
        }else{
            res.json(rows)
        }
    })
})



module.exports=router;
