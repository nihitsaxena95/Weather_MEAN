let express = require('express');
let request = require('request');
let query = require('./../model/registerschema');
let router = express.Router();

router.post('/',(req,res,next) => {
	query.findOne({"email" : req.body.email},(err,data)=> {
		if(data == undefined) {
			 query.save(req.body,(err,data) => {
			 	res.json({"message" : "success"});
			 })
		}
		else  {
			res.json({"message" : "Email already exists"});
		}
	})
})

module.exports =  router;