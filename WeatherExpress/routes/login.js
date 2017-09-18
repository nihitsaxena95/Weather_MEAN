let express = require('express');
let query  = require('./../model/registerschema');
var config = require('../config/config');

var jwt = require('jsonwebtoken');

let router = express.Router();
router.post('/',(req,res) => {
	query.findOne({"email" : req.body.email},(err,data)=> {
		if(data == undefined) {
			 res.json({"message" : "incorrect credentials",authorization : "false"});
		}
		else  {
			data.comparePass(req.body.password, (err,Match) => {
				if(Match) {
					var token = jwt.sign({data},config.secret,{expiresIn : 50000});
					res.json({"message" : "success",authorization :'bearer '+ token});
				}
				else {
					res.json({"message" : "incorrect credentials",authorization : "false"})
				}
			})
		}
	})
})

module.exports = router;