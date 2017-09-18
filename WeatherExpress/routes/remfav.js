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


router.delete('/:date/:country',(req,res) => {
	query.remove({"date" : req.params.date,"country":req.params.country},(err,data)=> {
		query.find({},(err,data) => {
			res.json(data);
		})
	})
})

module.exports =  router;