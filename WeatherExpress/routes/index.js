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


router.get('/',(req,res) => {
	query.find({},(err,data)=> {
		res.json(data);
	})
})

module.exports =  router;