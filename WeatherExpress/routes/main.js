let express = require('express');
let request = require('request');
let query = require('./../model/schema');
let passport = require('passport');
require('./../config/passport')(passport);

let router = express.Router();

router.use((req,res,next) => {
	 passport.authenticate('jwt',{ session : false})
	 next();
})


router.post('/',(req,res) => {
	query.findOne({"date" : req.body.date,"city": req.body.city},(err,data)=> {
		if(data == undefined) {
			 query.insertMany(req.body,(err,data) => {
			 	res.json({"message" : "success"});
			 })
		}
		else  {
			res.json({"message" : "duplicate"});
		}
	})
})

module.exports =  router;